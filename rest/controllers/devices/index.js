const RDSmodels = require('../../models/RDS');

class DeviceMain {
  // get info
  static async Devices(ctx) {
    // const data = await ArticleModel
    //   .findById(id)
    //   .populate('author', { password: 0 })
    //   .populate('comments');
    // if (!data) return ctx.error({ msg: '获取详情数据失败!' });

    // const review = data.review + 1;
    // const updateview = await ArticleModel.findByIdAndUpdate(data.id, { $set: { review } });

    // if (!current) current = 1;
    // if (!pageSize) pageSize = 10;
    // const skip = (Number(current) - 1) * Number(pageSize);
    // const totals = await CommentModel.find({ article_id: id }).count();

    // const comments = await CommentModel
    //   .find({ article_id: id })
    //   .sort({ createdAt: '-1' })
    //   .skip(Number(skip))
    //   .limit(Number(pageSize));
    async function linkDB () {
      return new Promise((rs, rj) => {
        // setTimeout(() => {
        //   rs('hi');
        // }, 5000);
        RDSmodels.device.findAll({ raw: true }).then((dbResult) => {
            console.log(`dbResult: ${dbResult}`);
            rs(dbResult);
        }).catch((err) => {
            console.log('RDSmodels error');
            rj(err);
        });
      })
    }
    const dbResult = await linkDB();
    ctx.status = 200;
    return ctx.success({
      data: {
        title: 'Hello World',
        device_id: ctx.params.device_id,
        dbResult: dbResult
      } , 
      msg : 'hello'
    });

  }
}

// export default UserMain;
module.exports = DeviceMain;