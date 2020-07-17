webpackJsonp([2],{12:function(t,e,n){"use strict";function i(t){var e=Date.now()/1e3-Number(t);return e<3600?a(~~(e/60)," minute"):e<86400?a(~~(e/3600)," hour"):a(~~(e/86400)," day")}function a(t,e){return 1===t?t+e:t+e+"s"}Object.defineProperty(e,"__esModule",{value:!0}),e.timeAgo=i},13:function(t,e,n){"use strict";function i(t){n(18)}function a(){return new A.a.Store({state:{activeType:null,lists:w,rankIndex:y},actions:T,mutations:E})}function r(){return new N.a({mode:"history",fallback:!1,scrollBehavior:function(){return{y:0}},routes:Z})}function c(t){var e=t.$options.title;if(e)return"function"==typeof e?e.call(t):e}function o(t){n(46)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),s=(n(16),n(3)),d=n.n(s),h={name:"app",data:function(){return{categories:d.a.map(function(t){return{path:"/"+t.title,title:t.name,id:t.id}})}}},b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"header"},[i("nav",{staticClass:"inner"},[i("router-link",{attrs:{to:"/",exact:""}},[i("img",{staticClass:"logo",attrs:{src:n(20),alt:"logo"}})]),t._v(" "),t._l(t.categories,function(e){return i("router-link",{key:e.id,attrs:{to:e.path}},[t._v(t._s(e.title))])}),t._v(" "),i("a",{staticClass:"github",attrs:{href:"https://github.com/tiodot/vnews",target:"_blank",rel:"noopener"}},[t._v("Built with Vue.js")])],2)]),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view",{staticClass:"view"})],1)],1)},p=[],l={render:b,staticRenderFns:p},f=l,m=n(6),g=i,v=m(h,f,!1,g,null,null),k=v.exports,A=n(21),I=n(22),T={fetchListData:function(t,e){var n=t.commit,i=(t.dispatch,t.state,e.type),a=e.index,r=e.action;return n("SET_ACTIVE_TYPE",{type:i}),Object(I.a)(i,a).then(function(t){switch(r){case"next":n("ADD_TYPE_RANK_INDEX",{type:i,index:a});break;case"prev":n("DEL_TYPE_RANK_INDEX",{type:i});break;default:n("INIT_TYPE_RANK_INDEX",{type:i})}n("SET_LIST",{type:i,data:t})})}},E={SET_ACTIVE_TYPE:function(t,e){var n=e.type;t.activeType=n},SET_LIST:function(t,e){var n=e.type,i=e.data;t.lists[n]=i},ADD_TYPE_RANK_INDEX:function(t,e){var n=e.type,i=e.index;t.rankIndex[n].push(i)},DEL_TYPE_RANK_INDEX:function(t,e){var n=e.type;t.rankIndex[n].pop()},INIT_TYPE_RANK_INDEX:function(t,e){var n=e.type;t.rankIndex[n]=[null]}};u.a.use(A.a);var w={},y={};d.a.forEach(function(t){w[t.title]={},y[t.title]=[]});var N=n(44);u.a.use(N.a);var D=function(t){return function(){return n.e(0).then(n.bind(null,53)).then(function(e){return e.default(t)})}},Z=d.a.map(function(t){return{path:"/"+t.title,component:D(t.title)}});Z.push({path:"/",redirect:Z[0].path});var R=n(45),S={mounted:function(){var t=c(this);t&&(document.title="掘金 | "+t)}},x=S,G=n(12);u.a.mixin(x),Object.keys(G).forEach(function(t){u.a.filter(t,G[t])});var M={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},_=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},j=[],U={render:_,staticRenderFns:j},Y=U,W=n(6),C=o,Q=W(M,Y,!1,C,"data-v-4c0a15ef",null),J=Q.exports,O=u.a.prototype.$bar=new u.a(J).$mount();document.body.appendChild(O.$el),u.a.mixin({beforeRouteUpdate:function(t,e,n){var i=this.$options.asyncData;sayncData?i({store:this.$store,route:t}).then(n).catch(n):n()}});var P=function(){var t=a(),e=r();return Object(R.sync)(t,e),{app:new u.a({router:e,store:t,render:function(t){return t(k)}}),router:e,store:t}}(),L=P.app,F=P.router,V=P.store;window.__INITIAL_STATE__&&V.replaceState(window.__INITIAL_STATE__),F.onReady(function(){F.beforeResolve(function(t,e,n){var i=F.getMatchedComponents(t),a=F.getMatchedComponents(e),r=!1,c=i.filter(function(t,e){return r||(r=a[e]!==t)}),o=c.map(function(t){return t.asyncData}).filter(function(t){return t});if(!o.length)return n();O.start(),Promise.all(o.map(function(e){return e({store:V,route:t})})).then(function(){O.finish(),n()}).catch(n)}),L.$mount("#app")}),("https:"===location.protocol||function(){return/^http(s)?:\/\/localhost/.test(location.href)}())&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},18:function(t,e){},20:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3RDBBRDcwNDU4NEMxMUU2ODdFNjg5OTYwMjlGNjQ0QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NTU3NUVGQUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NTU3NUVGOUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NTUwMDE5LTVjNjQtNGRiNy1iNjhjLTQ1ZWIxYzkxM2FiYiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlZDc4OTczLWViM2ItMTE3OS04YzQyLWNlMTYwYmQ0NTQ1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv38lU4AAAMkSURBVHja7FnbSxRRGP+N666upqUECWK+mUqbmxbRQ4QmFEFQmtZDEPQcvfQ/9BL1WO920SyCjJCIyC5iXsmVMjVB8pbVqnhBc2dm+84azHzjbszsupPBfA8L8ztnzvzmu/zON2elcDiMrWQp2GK25QilsqvQKmB/BCW408SvkZC8iptVCE7CJdlHhjI4LQNXXyE7bwMhGguOYWba4LXkmgp43VCVGCFzeQRgM6FUj1NlDiGH0L9T6r/YWqRE9aapa7RiXuOIC/CY2gVMEyqrRnqWdqmE8PE55FAUTsQmKxdFRxk4N47RHkFrcwjRFnf4Ig5dYOCNSgy0CT8Z7Bdw4hJqrzOw6TIGe+DdrBwiN7y5bQQP1BmDiEhQKDTlZxm4PIvuJng2MalprZFOTAYYuO8UsjOMnGSgoBSFFQwMtOBH0Ey8rHhoRUHnPQbmFKDoCEJ8Jl2WnUYKz4T3Dear2fREclJvc6Rh0llFPfMQxStdQnktm/NtCEPvTMbLCiF656kxfH7JQN9J5GRpnMg9hT4U+Nmc7kYshyAlQxjViPP1Rl3VnkpNciiB/DWQdGsqa+hphDtJSk1uH2jFwjSvtXotXhku7K9hoyNvMT6cNEI0d34RfY8ZWHocuTlQ1uPlR/5eNtrRINyWxL2MSrfzLkO27URJtWBDnEQ665Jl6ScCT82nc1yEyPmjXRj/wKN2LhKvVPjPMLz/CYJzJuUnXkL0/quq0Uklx7A9E7vLkFfM5edOHM2E9TvISX0PEVrREO8OFFcJCdDb9CeMtFuNV1yEhCB9xeALBlZdQXkdQ7ruY1mGZAOh9Qrv4IJEeZ3v0+1oJD8PLFV7YoQoENQMzU/FnDDchokvNhISgrSEvkcxJ5CgKzb31H8EKVpPuvgdgWdxpHNihIQg9WIiEGWovwWz81blx3pPvVGQZBWt13DwvHHo9a1ETgcSuJW66Y5mtDdHWdIT/zFTYicd7ti64Hy5OoQcQlGrTFVEJ6/a+HzxODkWIUkcJ3gz7T70TM+EpLUpku6/jjAWZqDI+uGkGz2dPpuydyHFtZGQk9T/BaHfAgwAytLfbeiDo+IAAAAASUVORK5CYII="},22:function(t,e,n){"use strict";(function(t){function i(){setTimeout(i,9e5)}function a(t){return f[t].id}function r(t,e){return e=e?"&before="+e:"",f[t]?l.url+"&category="+a(t)+e:t}function c(t){p&&console.log("fetching "+t+"...");var e=l.cachedItems;return e&&e.has(t)?(p&&console.log("cache hit for "+t+"."),Promise.resolve(e.get(t))):new Promise(function(n,i){b.a.get(t).then(function(i){var a=i.data&&i.data.d;a&&(a.__lastUpdated=Date.now()),e&&e.set(t,a),p&&console.log("fetched "+t+"."),n(a)},i).catch(i)})}function o(t,e){return console.log("[fetchIdsByType]: ",t),c(r(t,e))}e.a=o;var u=n(23),s=n(3),d=n.n(s),h=n(25),b=n.n(h),p=!0,l=Object(u.a)(),f={};d.a.forEach(function(t){f[t.title]=t}),l.onServer&&i()}).call(e,n(4))},23:function(t,e,n){"use strict";function i(){return{url:r.a.path}}e.a=i;var a=n(24),r=n.n(a)},24:function(t,e){t.exports={host:"https://timeline-merger-ms.juejin.im",path:"/v1/get_entry_by_rank?src=web&limit=20"}},3:function(t,e){t.exports=[{id:"5562b410e4b00c57d9b94a92",name:"Android",title:"android",createdAt:"2016-04-21T19:19:13Z",updatedAt:"2015-05-24T21:33:04Z",icon:"https://dn-mhke0kuv.qbox.me/225aafca3a440e5d.png",background:"https://dn-mhke0kuv.qbox.me/ec8d337c485c4db2.png",tagId:"5597838ee4b08a686ce2319d",weight:"1",isSubscribe:!1},{id:"5562b415e4b00c57d9b94ac8",name:"前端",title:"frontend",createdAt:"2016-03-09T00:39:02Z",updatedAt:"2015-05-24T21:33:10Z",icon:"https://dn-mhke0kuv.qbox.me/1c40f5eaba561e32.png",background:"https://dn-mhke0kuv.qbox.me/8c95587526f346c0.png",tagId:"5597a05ae4b08a686ce56f6f",weight:"2",isSubscribe:!1},{id:"5562b405e4b00c57d9b94a41",name:"iOS",title:"ios",createdAt:"2016-04-21T19:19:10Z",updatedAt:"2015-05-24T21:32:54Z",icon:"https://dn-mhke0kuv.qbox.me/4a218bdf1f6969fd.png",background:"https://dn-mhke0kuv.qbox.me/34589746327a360a.png",tagId:"5597838ae4b08a686ce23139",weight:"3",isSubscribe:!1},{id:"569cbe0460b23e90721dff38",name:"产品",title:"product",createdAt:"2016-04-29T04:39:33Z",updatedAt:"2016-01-18T02:27:17Z",icon:"https://dn-mhke0kuv.qbox.me/057d8e19e6405697.png",background:"https://dn-mhke0kuv.qbox.me/91e7ff7e6447c6cc.png",tagId:"56e65334da2f60004c50910f",weight:"4",isSubscribe:!1},{id:"5562b41de4b00c57d9b94b0f",name:"设计",title:"design",createdAt:"2016-03-09T00:38:50Z",updatedAt:"2015-05-24T21:33:18Z",icon:"https://dn-mhke0kuv.qbox.me/3627821e57ceecb9.png",background:"https://dn-mhke0kuv.qbox.me/784dddfade84f1c9.png",tagId:"5597a035e4b08a686ce56bd9",weight:"5",isSubscribe:!1},{id:"5562b422e4b00c57d9b94b53",name:"工具资源",title:"freebie",createdAt:"2016-03-09T00:38:40Z",updatedAt:"2015-05-24T21:33:22Z",icon:"https://dn-mhke0kuv.qbox.me/eb20ab1334d9abea.png",background:"https://dn-mhke0kuv.qbox.me/412957a61f414c0b.png",tagId:"5597a04de4b08a686ce56e63",weight:"6",isSubscribe:!1},{id:"5562b428e4b00c57d9b94b9d",name:"阅读",title:"article",createdAt:"2016-03-09T00:38:15Z",updatedAt:"2015-05-24T21:33:28Z",icon:"https://dn-mhke0kuv.qbox.me/20f56d7df9f97d1d.png",background:"https://dn-mhke0kuv.qbox.me/228be0376b22924b.png",tagId:"",weight:"7",isSubscribe:!1},{id:"5562b419e4b00c57d9b94ae2",name:"后端",title:"backend",createdAt:"2016-03-09T00:38:00Z",updatedAt:"2015-05-24T21:33:13Z",icon:"https://dn-mhke0kuv.qbox.me/a2ec01b816abd4c5.png",background:"https://dn-mhke0kuv.qbox.me/fb3b208d06e6fe32.png",tagId:"5597a063e4b08a686ce57030",weight:"8",isSubscribe:!1},{id:"57be7c18128fe1005fa902de",name:"人工智能",title:"ai",createdAt:"2017-07-24T06:11:04Z",updatedAt:"2017-07-24T06:11:07Z",icon:"https://dn-mhke0kuv.qbox.me/9b525117507d7a76c4ac.png",background:"https://dn-mhke0kuv.qbox.me/9b525117507d7a76c4ac.png",tagId:"57be7c18128fe1005fa902de",weight:"9",isSubscribe:!1}]},46:function(t,e){}},[13]);