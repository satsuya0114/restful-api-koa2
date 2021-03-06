const Koa = require('koa');
const BodyParser =  require('koa-bodyparser');
const router = require('koa-router')();

const app = new Koa().use(BodyParser());
const port = 8080;
// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(port , () => {
  console.log(`now listen at port ${port}`);
});

// router
app.use(require('./rest/middlewares/response'));
app.use(require('./rest/middlewares/filter'));

require('./rest/routes')(app);

module.exports = app;