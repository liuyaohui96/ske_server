const User = require('../../model/user')

module.exports = async ctx =>{
  const {_id, username} = ctx.request.body

  const user = await User.findOne({username})
  if(user){
    ctx.status = 400;
    ctx.body = {
      message: '用户名已经存在',
    }
    return
  }

  // 修改用户名
  await User.findOneAndUpdate({_id}, {username})

  ctx.body = {
    message: '用户名更改成功'
  }
}