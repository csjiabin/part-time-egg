export default (app) => {
  const { controller, router } = app;
  router.get('/', controller.index.index.index);
  router.get('/client', controller.index.index.client);
  router.get('/list', controller.index.index.list);
  router.get('/category', controller.category.category.index);
  /**
   * @api get /init/data
   * @description 做初始化用
   */
  router.get('/init/data', controller.home.initData);
};
