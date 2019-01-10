import { Service } from 'egg';
import { Job as JobModel, JobAll } from '../model/job';
export default class JobService extends Service {
  public async find(option: JobModel): Promise<JobModel> {
    const { Job } = this.ctx.model;
    try {
      const job: JobModel = await Job.findOne(option);
      return job;
    } catch (error) {
      throw error;
    }
  }
  public async findAll(querys, options): Promise<JobAll> {
    const { Job } = this.ctx.model;
    try {
      const result = await Job.paginate(querys, options);
      const jobs = { ...result };
      jobs.list = jobs.docs;
      jobs.total = jobs.totalDocs;
      delete jobs.docs;
      delete jobs.totalDocs;
      return jobs;
    } catch (error) {
      throw error;
    }
  }
  public async create(option: JobModel): Promise<JobModel> {
    const { Job } = this.ctx.model;
    try {
      const job: JobModel = await new Job(option).save();
      return job;
    } catch (error) {
      throw error;
    }
  }
  public async update(_id: string, option: JobModel): Promise<JobModel> {
    const { Job } = this.ctx.model;
    delete option.create_at;
    delete option.update_at;
    try {
      const job: JobModel = await Job.findOneAndUpdate({ _id }, option);
      return job;
    } catch (error) {
      throw error;
    }
  }
  public async detail(_id): Promise<JobModel> {
    const { Job } = this.ctx.model;
    try {
      const detail: JobModel = await Job.findById(_id).populate('company');
      return detail;
    } catch (error) {
      throw error;
    }
  }
  public async delete(_id): Promise<JobModel> {
    const { Job } = this.ctx.model;
    try {
      const result: JobModel = await Job.findByIdAndRemove(_id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  public async companyJobs(id): Promise<JobModel[]> {
    const { Job } = this.ctx.model;
    try {
      const result: JobModel[] = await Job.find({
        company: id,
        term_end: {
          $gte: new Date()
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
