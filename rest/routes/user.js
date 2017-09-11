const UserMain = require('../controllers/users.export');
const router = require('koa-router')();

//https://stackoverflow.com/questions/18642828/origin-http-localhost3000-is-not-allowed-by-access-control-allow-origin
router.all('/api/*', async (ctx,next)=>{  
  ctx.set("Access-Control-Allow-Origin", "*");  
  await next();  
});

router
  .get('/api/users/getDevices', UserMain.get_info)
  .get('/api/users/getInfo', UserMain.get_info)
  .get('/hello', getMessage);

function* getMessage() {
  this.body = 'Your request has been logged.';
  console.log(this.response);
}

module.exports = router;