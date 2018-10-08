import * as fs from 'mz/fs';
import Controller from '../extend/base_controller';
export default class UploadController extends Controller {
  public async upload() {
    const { request, body } = this;
    console.log(body);
    console.log('got %d files', request.files.length);
    const data: any[] = [];
    for (const file of request.files) {
      console.log('field: ' + file.fieldname);
      console.log('filename: ' + file.filename);
      console.log('encoding: ' + file.encoding);
      console.log('mime: ' + file.mime);
      console.log('tmp filepath: ' + file.filepath);
      let result;
      try {
        // 处理文件，比如上传到云端
        result = file;
        data.push(result);
      } finally {
        // 需要删除临时文件
        await fs.unlink(file.filepath);
      }
    }
    this.success({
      ...body,
      files: data
    });
  }
}
