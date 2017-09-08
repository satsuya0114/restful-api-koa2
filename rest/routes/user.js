const router = require('koa-router')();

router
  .get('/api/users/getDevices')
  .get('/api/users/getInfo');

module.exports = router;