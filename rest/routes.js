const userRouter = require('./controllers/users');
const deviceRouter = require('./controllers/devices');

// module.exports = {userRouter, deviceRouter};

module.exports = (app) => {
  app.use(userRouter.routes())
    .use(userRouter.allowedMethods())
    .use(deviceRouter.routes())
    .use(deviceRouter.allowedMethods());
}