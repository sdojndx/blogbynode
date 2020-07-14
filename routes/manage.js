const router = require('koa-router')()
const createApp = require('../vue/app.js');
const { resolve } = require('../vue/build/webpack.base.config.js');
const { reject } = require('async');
const { create } = require('../models/users.js');

router.prefix('/manage')
const renderInfo = function(ctx,next){
    console.log("manage",ctx.request.url);
    return new Promise(function(resolve,reject){
        const App = createApp();
        const app = App.app;
        const webrouter = App.router;
        webrouter.push(context.url)
        webrouter.onReady(function(){
            const matchComponents = webrouter.getMatchedComponents()
            if(!matchComponents.length){
                return reject({
                    code:404
                })
            }
            resolve(app)
        },reject)
    })
}

router.prefix('*',renderInfo)