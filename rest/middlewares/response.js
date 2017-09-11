module.exports = async (ctx, next) => {
  ctx.error = ({ data, msg, status, error }) => {
    ctx.status = status || 400;
    ctx.body = { code: -200, msg, data, error };
  }
  ctx.success = ({ data, msg }) => {
    console.log(`ctx:  ${JSON.stringify(ctx)}`);
    // console.log(`node res: ${JSON.stringify(ctx.res)}`);
    ctx.status = 200; // ?? 
    ctx.body = { code: 200, msg, data };
  }
  console.log(this.response);
  await next()
}