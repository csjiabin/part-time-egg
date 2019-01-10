export default (app) => {
  const { controller, router } = app;
  const apiRouter = router.namespace('/api');
  /* user */
  apiRouter.get('/user/index', controller.user.index);
  /**
   * @api put /api/user
   * @description 具体参数看 user model
   */
  apiRouter.put('/user', controller.user.update);
  /**
   * @api post /api/register
   * @description 具体参数看 user model
   */
  apiRouter.post('/register', controller.user.register);
  /**
   * @api post /api/login
   * @param {String} username  用户名
   * @param {String} password  密码
   */
  apiRouter.post('/login', controller.user.login);
  /**
   * @api get /api/logout
   */
  apiRouter.get('/logout', controller.user.logout);
  /* upload */
  /**
   * @api post /api/upload
   */
  apiRouter.post('/upload', controller.upload.upload);
  /* company */
  /**
   * @api post /api/company/list
   * @param {Number} page=1 页码
   * @param {Number} limit=10 每页数量
   * @param {String} keyword 搜索
   * @param {String} date 时间查询
   */
  apiRouter.post('/company/list', controller.company.list);
  /**
   * @api post /api/company
   * @description 具体参数看 company model
   */
  apiRouter.post('/company', controller.company.create);
  /**
   * @api get /api/company/:id
   * @param {String} id _id
   */
  apiRouter.get('/company/:id', controller.company.detail);
  /**
   * @api put /api/company/:id
   * @param {String} id _id
   * @description 具体参数看 company model
   */
  apiRouter.put('/company/:id', controller.company.update);
  /**
   * @api delete /api/company/:id
   * @param {String} id _id
   */
  apiRouter.delete('/company/:id', controller.company.delete);
  /* job */
  /**
   * @api post /api/job/list
   * @param {Number} page=1 页码
   * @param {Number} limit=10 每页数量
   * @param {String} keyword 搜索
   * @param {String} date 时间查询
   */
  apiRouter.post('/job/list', controller.job.list);
  /**
   * @api post /api/job
   * @description 具体参数看 job model
   */
  apiRouter.post('/job', controller.job.create);
  /**
   * @api get /api/job/:id
   * @param {String} id _id
   */
  apiRouter.get('/job/:id', controller.job.detail);
  /**
   * @api put /api/job/:id
   * @param {String} id _id
   * @description 具体参数看 job model
   */
  apiRouter.put('/job/:id', controller.job.update);
  /**
   * @api delete /api/job/:id
   * @param {String} id _id
   */
  apiRouter.delete('/job/:id', controller.job.delete);
  /* robot 聊天机器人 */
  /**
   * @api get /api/robot
   * @param {String} text 文本
   */
  apiRouter.get('/robot', controller.robot.index);
  /** 404 */
  apiRouter.get('*', controller.robot.notFound);

};
