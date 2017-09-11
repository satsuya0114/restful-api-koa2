class UserMain {
  // get info
  static async get_info(ctx) {
    // let { id, pageSize, current } = ctx.query;
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
    ctx.status = 200;
    return ctx.success({ data: { 
        title: 'Hello World'
     } });

  }
}

// export default UserMain;
module.exports = UserMain;