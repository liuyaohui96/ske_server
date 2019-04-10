const Router = require('koa-router')
const router = new Router()

// ------- 引入全部的router文件 -------
const user = require('./user') // 用户相关路由
const source = require('./source') // 知识资源相关路由

// ------- router 中间件的配置 -------
router.use(user.routes()).use(user.allowedMethods())
router.use(source.routes()).use(source.allowedMethods())

router.get('/', ctx => {
  ctx.body = 'hello'
})

// 导出router
module.exports = router
