export default (app) => {
  const { controller, router } = app;
  const localStrategy = app.passport.authenticate('local');
  router.post('/passport/local', localStrategy);
  router.get('/login', controller.admin.admin.login);
  const adminRouter =  router.namespace('/admin');
  adminRouter.post('/api/article/list', controller.admin.admin.list);
  adminRouter.post('/api/article/add', controller.admin.admin.add);
  adminRouter.get('/api/article/del/:id', controller.admin.admin.del);
  adminRouter.get('/api/article/:id', controller.admin.admin.detail);
  adminRouter.get('(/.+)?', controller.admin.admin.home);
};
