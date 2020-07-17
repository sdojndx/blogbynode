const router = require('koa-router')()
const createApp = require('../vue/app.js');
const { createBundleRenderer } = require('vue-server-renderer')
const { client, server } = require('../config/env')
// 服务器 bundle
const serverBundle = require(`${server.output.path}/vue-ssr-server-bundle.json`);
// 客户端清单, 自动推断和注入资源预加载 / 数据预取指令(preload / prefetch directive),以及 css 链接 / script 标签到所渲染的 HTML
const clientManifest = require(`${client.output.path}/vue-ssr-client-manifest.json`);
const template = require('fs').readFileSync(path.resolve(__dirname, '../dist/server.html'), 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐, 默认情况下，对于每次渲染，bundle renderer 将创建一个新的 V8 上下文并重新执行整个 bundle
    template,
    clientManifest, // （可选）客户端构建 manifest
});

router.prefix('/manage')
const renderInfo = async function(ctx,next){
    try {
        const html = await renderer.renderToStream({
            url: ctx.request.url
        })
        ctx.status = 200
        ctx.type = 'html'
        ctx.body = html
    } catch (err) {
        console.log('err: ', err)
        ctx.throw(500, 'Internal Server Error')
    }
}

router.prefix('*',renderInfo)