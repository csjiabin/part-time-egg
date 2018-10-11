export default (app) => {
  const { controller, router } = app;
  const apiRouter =  router.namespace('/api');
  // user
  apiRouter.get('/user/index', controller.user.index);
  apiRouter.put('/user', controller.user.update);
  apiRouter.post('/register', controller.user.register);
  apiRouter.post('/login', controller.user.login);
  apiRouter.get('/logout', controller.user.logout);

  apiRouter.post('/upload', controller.upload.upload);
  // company
  apiRouter.post('/company/list', controller.company.list);
  apiRouter.post('/company', controller.company.create);
  apiRouter.get('/company/:id', controller.company.detail);
  apiRouter.put('/company/:id', controller.company.update);
  apiRouter.delete('/company/:id', controller.company.delete);
  // job
  apiRouter.post('/job/list', controller.job.list);
  apiRouter.post('/job', controller.job.create);
  apiRouter.get('/job/:id', controller.job.detail);
  apiRouter.put('/job/:id', controller.job.update);
  apiRouter.delete('/job/:id', controller.job.delete);
  // robot
  apiRouter.get('/robot', controller.robot.index);
};
