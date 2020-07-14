const users = require('./')
const router = require('koa-router')()
const usersController = require("../controllers/user")

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/addPerson', usersController.adduser);

module.exports = router
