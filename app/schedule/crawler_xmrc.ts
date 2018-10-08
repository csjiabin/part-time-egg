import * as cheerio from 'cheerio';
import { Subscription } from 'egg';
import * as Nightmare from 'nightmare';
import * as qs from 'qs';
import { sleep } from 'sleep';
import { Company } from '../model/company';
import { Job } from '../model/job';
// 将图片下载到本地
// function downloadFile(uri, filename, callback) {
//   var stream = fs.createWriteStream(filename);
//   request(uri)
//     .pipe(stream)
//     .on("close", function() {
//       callback();
//     });
// }
const nightmare = Nightmare({
  show: false // show:true  显示内置模拟浏览器
  // pollInterval: 1000 * 60 //in ms
});
export default class CrawlerXmrc extends Subscription {
  xmrcUri: string = 'https://www.xmrc.com.cn';
  list: any[] = [];
  static get schedule() {
    return {
      interval: '1h',
      // cron: "* 35 17 * * *",
      type: 'worker'
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    // console.log(this.ctx.model.Company);
    this.task(1);
  }
  async task(page: number = 1) {
    console.log('crawler page:', page, new Date());
    const jobs: any = await this.getJobsList(page);
    const jobsList: any[] = jobs.jobsList || [];
    const allPage: number = 15;
    for (const item of jobsList) {
      sleep(5);
      await this.getJobDetail(item);
    }
    if (allPage > 1 && allPage > page) {
      await this.task(page + 1);
    } else {
      console.log('crawler end time:', new Date());
    }
  }
  query(search: string = ''): any {
    return ((querystring = '') =>
      ((q) => (
        querystring
          .split('&')
          .forEach((item) =>
            ((kv) => kv[0] && (q[kv[0]] = kv[1]))(item.split('='))
          ),
        q
      ))({}))(search.split('?')[1]);
  }
  async getJobsList(page: number = 1) {
    if (page === 1) this.list = [];
    const jobsList: any[] = [];
    const querys = {
      a: 'a',
      g: 'g',
      recordtype: 1,
      searchtype: 1,
      releasetime: 365,
      worklengthflag: 0,
      sortby: 'updatetime',
      ascdesc: 'Desc',
      PageSize: 30,
      PageIndex: page
    };
    const jobsQuerys = qs.stringify(querys);
    console.log(`${this.xmrcUri}/net/info/Resultg.aspx?${jobsQuerys}`);
    try {
      const html = await nightmare
        .goto(`${this.xmrcUri}/net/info/Resultg.aspx?${jobsQuerys}`)
        .wait('div#container')
        .evaluate(
          (selector, done) =>
            done(null, document.querySelector(selector).innerHTML),
          'div#container'
        );
      const $ = cheerio.load(html);
      $('table.queryRecruitTable tbody tr.bg').each(
        (tri: number, eltr: any) => {
          const eltds = $(eltr).find('td');
          const recruitmentPositon = eltds
            .eq(1)
            .text()
            .replace(/\n/g, '')
            .trim();
          const companyUri = eltds
            .eq(2)
            .find('a')
            .attr('href');
          const companyId = this.query(companyUri).CompanyID;
          const tdLast = eltds.eq(7).find('a.a4.appjob');
          const uri = tdLast.attr('href');
          const createAt = tdLast.text();
          const id = this.query(uri).ID;
          const companyName = eltds
            .eq(2)
            .text()
            .replace(/\n/g, '')
            .trim();
          jobsList.push({
            tri,
            id,
            recruitment_positon: recruitmentPositon,
            companyUri,
            companyId,
            companyName,
            uri,
            create_at: createAt
          });
        }
      );
      const allPage =
        Number(
          $('a.page_pro')
            .eq(3)
            .attr('title')
        ) || 1;
      this.list.concat(jobsList);
      return { jobsList, allPage };
    } catch (error) {
      console.log('error', error);
    }
  }
  async getJobDetail(item) {
    try {
      console.log(`${this.xmrcUri}${item.uri}`, new Date());
      const html = await nightmare
        .goto(`${this.xmrcUri}${item.uri}`)
        .wait('div#container')
        .evaluate(
          (selector, done) =>
            done(null, document.querySelector(selector).innerHTML),
          'body'
        );
      const $ = cheerio.load(html);
      const detailCont = $('div#container>table')
        .eq(1)
        .find('>tbody>tr>td')
        .last()
        .children()
        .eq(3)
        .find('>tbody>tr')
        .first()
        .children()
        .eq(1)
        .find('>table');
      const jobInfoWrap = detailCont
        .eq(0)
        .find('>tbody')
        .children();
      const jobCompanyWrap = detailCont
        .eq(1)
        .find('>tbody')
        .children();
      const term = jobInfoWrap
        .find('td:contains(招聘期限：)')
        .text()
        .replace(/(\n|招聘期限：|查看招聘发布历史)/g, '')
        .trim()
        .split(/\s/);
      const baseDemandTable = jobInfoWrap.find('table');
      let gender = 2;
      const genderText = baseDemandTable
        .find('td:contains(性别要求：)')
        .text()
        .replace(/(\n|性别要求：)/g, '')
        .trim();
      if (genderText === '女') gender = 0;
      if (genderText === '男') gender = 1;
      const positionNatureCont = baseDemandTable
        .find('td:contains(职位性质：)')
        .text()
        .replace(/(\n|职位性质：)/g, '')
        .trim();
      // 1全职 2兼职 3实习 4临时
      let positionNature: number = 0;
      if (positionNatureCont === '全职') positionNature = 1;
      if (positionNatureCont === '兼职') positionNature = 2;
      if (positionNatureCont === '实习') positionNature = 3;
      if (positionNatureCont === '临时') positionNature = 4;

      const educationCont = baseDemandTable
        .find('td:contains(学历要求：)')
        .text()
        .replace(/(\n|学历要求：)/g, '')
        .trim();
      // 1 小学 2 初中 3 高中 4 中专 5 大专 6 本科 7 硕士研究生 8 博士研究生
      let education: number = 0;
      if (educationCont.includes('小学')) education = 1;
      if (educationCont.includes('初中')) education = 2;
      if (educationCont.includes('高中')) education = 3;
      if (educationCont.includes('中专')) education = 4;
      if (educationCont.includes('大专')) education = 5;
      if (educationCont.includes('本科')) education = 6;
      if (educationCont.includes('硕士')) education = 7;
      if (educationCont.includes('博士')) education = 8;

      const jobInfo: Job = {
        recruitment_positon: item.recruitment_positon,
        company_name: item.companyName,
        people_num: jobInfoWrap
          .eq(0)
          .find('>td')
          .first()
          .find('font[face=arial]')
          .text()
          .replace(/\n/g, '')
          .trim(),
        department: jobInfoWrap
          .find('td:contains(招聘部门：)')
          .text()
          .replace(/(\n|招聘部门：)/g, '')
          .trim(),
        contact_name: jobInfoWrap
          .find('td:contains(人：)')
          .text()
          .replace(/(\n|联|系|人：)/g, '')
          .trim(),
        contact_phone: jobInfoWrap
          .find('td:contains(联系电话：)')
          .text()
          .replace(/(\n|联系电话：)/g, '')
          .trim(),
        mobile_phone: jobInfoWrap
          .find('td:contains(移动电话：)')
          .text()
          .replace(/(\n|移动电话：)/g, '')
          .trim(),
        fax: jobInfoWrap
          .find('td:contains(联系传真：)')
          .text()
          .replace(/(\n|联系传真：)/g, '')
          .trim(),
        contact_address: jobInfoWrap
          .find('td:contains(通信地址：)')
          .text()
          .replace(/(\n|通信地址：)/g, '')
          .trim(),
        email: jobInfoWrap
          .find('td:contains(电子邮件：)')
          .text()
          .replace(/(\n|电子邮件：|本职位应聘电子邮件：)/g, '')
          .trim(),
        education,
        gender,
      // 1全职 2兼职 3实习 4临时
        position_nature: positionNature,
        language_requirement: baseDemandTable
          .find('td:contains(外语要求：)')
          .text()
          .replace(/(\n|外语要求：)/g, '')
          .trim(),
        work_address: baseDemandTable
          .find('td:contains(工作地点：)')
          .text()
          .replace(/(\n|工作地点：)/g, '')
          .trim(),
        monthly_salary: baseDemandTable
          .find('td:contains(参考月薪：)')
          .text()
          .replace(/(\n|参考月薪：)/g, '')
          .trim(),
        work_hours: baseDemandTable
          .find('td:contains(上班时间：)')
          .text()
          .replace(/(\n|上班时间：)/g, '')
          .trim(),
        welfare: baseDemandTable
          .find('td:contains(薪资福利：)')
          .text()
          .replace(/(\n|薪资福利：)/g, '')
          .trim(),
        responsibilities_and_requirements: jobInfoWrap
          .eq(-2)
          .children()
          .eq(1)
          .text()
      };
      if (!!term[0]) jobInfo.term_start = new Date(term[0]);
      if (!!term[1]) jobInfo.term_end = new Date(term[1]);
      const jobCompany: Company = {
        id: Number(item.companyId),
        company_name: item.companyName,
        contact_name: jobCompanyWrap
          .find('td:contains(人：)')
          .text()
          .replace(/(\n|联|系|人：)/g, '')
          .trim(),
        contact_phone: jobCompanyWrap
          .find('td:contains(联系电话：)')
          .text()
          .replace(/(\n|联系电话：)/g, '')
          .trim(),
        mobile_phone: jobCompanyWrap
          .find('td:contains(移动电话：)')
          .text()
          .replace(/(\n|移动电话：)/g, '')
          .trim(),
        fax: jobInfoWrap
          .find('td:contains(联系传真：)')
          .text()
          .replace(/(\n|联系传真：)/g, '')
          .trim(),
        contact_address: jobCompanyWrap
          .find('td:contains(联系地址：)')
          .text()
          .replace(/(\n|联系地址：)/g, '')
          .trim(),
        email: jobCompanyWrap
          .find('td:contains(电子邮件：)')
          .text()
          .replace(/(\n|电子邮件：|本职位应聘电子邮件：)/g, '')
          .trim(),
        site: jobCompanyWrap
          .find('td:contains(有关单位更为详细信息，请浏览本单位网站)')
          .text()
          .replace(/(\n|有关单位更为详细信息，请浏览本单位网站)/g, '')
          .trim(),
        industry: jobCompanyWrap
          .find('td:contains(公司行业：)')
          .text()
          .replace(/(\n|公司行业：)/g, '')
          .trim(),
        description: jobCompanyWrap
          .eq(-3)
          .children()
          .eq(1)
          .text()
      };
      // this.ctx.model.Company;
      const { Company, Job } = this.ctx.model;
      if (jobCompany.id) {
        const companyData = await Company.updateOrInsert(
          {
            id: jobCompany.id
          },
          jobCompany
        );
        jobInfo.company = companyData._id;
        await Job.updateOrInsert(
          {
            id: jobInfo.id
          },
          jobInfo
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  }
}
