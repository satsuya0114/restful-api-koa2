const DeviceMain = require('./deviceMain');
const router = require('koa-router')();

//https://stackoverflow.com/questions/18642828/origin-http-localhost3000-is-not-allowed-by-access-control-allow-origin
router.all('/api/*', async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
});

router
  .get('/Devices/:device_id', DeviceMain.Devices);
  // .get('/api/users/getInfo', UserMain.get_info);


module.exports = router;