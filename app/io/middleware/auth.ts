export default () => {
  return async (ctx, next) => {
    const say = await ctx.service.user.say();
    ctx.socket.emit('res', 'auth! ' + say);
    await next();
    // console.log('disconnect!');
  };
};
