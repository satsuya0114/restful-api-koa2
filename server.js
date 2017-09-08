const Koa = require('koa');
const BodyParser =  require('koa-bodyparser');

const app = new Koa().use(BodyParser());
const port = 3000;
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port , () => {
  console.log(`now listen at port ${port}`);
});