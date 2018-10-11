import {admin, api, view} from './routes';
export default (app) => {
  const { io } = app;
  api(app);
  view(app);
  admin(app);
  // io.route('chat', io.controller.chat.index);
  // app.io.of('/chat')
  io.of('/').route('chat', io.controller.chat.index);
  io.of('/').route('message', io.controller.message.index);

};
