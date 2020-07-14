const merge = require('webpack-merge')
const baseconfig = require('./vue/build/webpack.base.config')

module.exports = (options = {}) => {
    let original = JSON.parse(process.env.npm_config_argv).original;
    let minimist = require('minimist');
    let args = minimist(original.slice(2))//{path:"seckill"}
    let env = args.env;
    // var publicPath = "http://res.rtmap.com/minipro/wechatconfigplat/"
    // if(options.dev){
    //     publicPath = "http://beta.rtmap.com/mp/wechatconfigplat/"
    // }
    var publicPath = "./"
    console.log(env,publicPath,options);
    var config = {};
    if(options.dev){
        config={
            mode:'development',
            devServer: {
                port: 80,
                hot: true,
                inline: true,
                open: true,
                historyApiFallback: true,
                disableHostCheck: true,
                publicPath:"/dist/",
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                proxy:[{
                    context:['/wxapp-deployer/','/wxapp-root/','/wxapp-pianpian/'],
                    target:'http://wx-mini.rtmap.com',//'http://appsmall.rtmap.com',//
                    changeOrigin: true
                },{
                    // "/wxapp-deployer/":{
                    //     target:"http://wx-mini.rtmap.com",
                    //     changeOrigin: true
                    // },
                    context:['/'],
                    target:'/dist/'
                    // "/":{
                    //     target:"/dist/"
                    // }
                }]
            },
            devtool:'#eval-source-map'
        }
    }else{
        config={
            mode:'production',
            devtool:'#source-map'
        }
    }
    return merge(baseconfig,config);
}
