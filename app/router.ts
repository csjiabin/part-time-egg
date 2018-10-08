import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.index.index.index);
  router.get('/client', controller.index.index.client);
  router.get('/list', controller.index.index.list);
  router.get('/category', controller.category.category.index);
  router.get('/login', controller.admin.admin.login);
  router.post('/admin/api/article/list', controller.admin.admin.list);
  router.post('/admin/api/article/add', controller.admin.admin.add);
  router.get('/admin/api/article/del/:id', controller.admin.admin.del);
  router.get('/admin/api/article/:id', controller.admin.admin.detail);
  router.get('/admin(/.+)?', controller.admin.admin.home);

  router.get('/app/api/article/list', controller.app.app.list);
  router.get('/app/api/article/:id', controller.app.app.detail);
  router.get('/api/init/data', controller.home.initData);

  // user
  router.get('/api/user/index', controller.user.index);
  router.put('/api/user', controller.user.update);
  router.post('/api/register', controller.user.register);
  router.post('/api/login', controller.user.login);
  router.get('/api/logout', controller.user.logout);

  router.post('/api/upload', controller.upload.upload);
  // company
  router.post('/api/company/list', controller.company.list);
  router.post('/api/company', controller.company.create);
  router.get('/api/company/:id', controller.company.detail);
  router.put('/api/company/:id', controller.company.update);
  router.delete('/api/company/:id', controller.company.delete);
  // job
  router.post('/api/job/list', controller.job.list);
  router.post('/api/job', controller.job.create);
  router.get('/api/job/:id', controller.job.detail);
  router.put('/api/job/:id', controller.job.update);
  router.delete('/api/job/:id', controller.job.delete);
};
