(this.webpackJsonpantd_react=this.webpackJsonpantd_react||[]).push([[15],{114:function(e,n,t){e.exports=t(179)},179:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(17),c=t.n(a),l=(t(110),t(28)),i=t(97),u=t(68),s=t(7),m=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,777))})),p=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,790))})),d=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,791))})),h=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,780))})),b=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,788))})),f=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,781))})),O=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,782))})),j=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,783))})),y=Object(r.lazy)((function(){return Promise.all([t.e(18),t.e(10)]).then(t.bind(null,784))})),E=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4),t.e(12)]).then(t.bind(null,792))})),v=Object(r.lazy)((function(){return t.e(7).then(t.bind(null,785))})),_=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(19),t.e(5)]).then(t.bind(null,786))})),w=[{path:"/",component:j},{path:"/Demo",component:m},{path:"/Paletee",component:d},{path:"/Selfvideo",component:h},{path:"/Selfaudio",component:b},{path:"/D3",component:v},{path:"/Kebiao",component:p},{path:"/Anim",component:O},{path:"/Editor",component:y},{path:"/Copy",component:E},{path:"/Drag",component:f},{path:"/Northbound",component:Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,789))}))},{path:"/JiNianBi",component:Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,787))}))},{path:"/404",component:_}],S=function(){return o.a.createElement(u.a,null,o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null," Loading ")},o.a.createElement(s.c,null,w.map((function(e,n){return o.a.createElement(s.a,{key:n,path:e.path,exact:!0,component:e.component})})),o.a.createElement(s.a,{component:_}))))},P=t(21),z=t(107),g=t(99),D=t(25),x=t.n(D),k=t(26),L=t(39),M=(t(127),t(45)),T=t(100),N=t.n(T).a.create({baseURL:"http://jsonplaceholder.typicode.com",timeout:5e3});N.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),N.interceptors.response.use((function(e){return e.data}),(function(e){return M.a.error("\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25"),Promise.reject(e)}));var A=N,C=x.a.mark(I);function I(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.e)(L.c.DEMO_ASYNC,x.a.mark((function e(){var n,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)();case 2:return n=e.sent,console.log(n),e.next=6,Object(k.b)((function(){return A.get("/users")}));case 6:return t=e.sent,e.next=9,Object(k.c)(L.a.demoSetList(t));case 9:case"end":return e.stop()}}),e)})))]);case 2:case"end":return e.stop()}}),C)}var B=x.a.mark(J);function J(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([I()]);case 2:case"end":return e.stop()}}),B)}var Y=J,H={demo:L.b},R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,U=t(14).createHashHistory(),W=Object(z.a)({onError:function(e){console.error("@ Saga error: ",e)}}),X=Object(P.e)(Object(P.c)(H),R(Object(P.a)(W,Object(g.routerMiddleware)(U))));W.run(Y);var q=X,K=t(94),V=t.n(K),$=t(51),F=t.n($);t(113);F.a.locale("zh-cn");var G=function(){return o.a.createElement(l.a,{locale:V.a},o.a.createElement(i.a,{store:q},o.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return c}));var r=t(53),o={DEMO_SET_LIST:"demo/set_list",DEMO_ASYNC:"demo/async"},a={list:[]};n.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o.DEMO_SET_LIST:return Object(r.a)(Object(r.a)({},e),{},{list:n.payload.list});default:return e}};var c={demoSetList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:o.DEMO_SET_LIST,payload:{list:e}}},demoAsync:function(){return{type:o.DEMO_ASYNC}}}}},[[114,16,17]]]);
//# sourceMappingURL=main.27607ba5.chunk.js.map