(this.webpackJsonpantd_react=this.webpackJsonpantd_react||[]).push([[14],{114:function(e,n,t){e.exports=t(179)},179:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(17),c=t.n(o),l=(t(110),t(28)),u=t(97),i=t(68),s=t(7),m=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,772))})),p=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,785))})),d=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,786))})),b=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,775))})),h=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(8)]).then(t.bind(null,784))})),f=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,776))})),O=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,777))})),j=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,778))})),E=Object(r.lazy)((function(){return Promise.all([t.e(17),t.e(10)]).then(t.bind(null,779))})),y=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(3),t.e(12)]).then(t.bind(null,780))})),v=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(3),t.e(12)]).then(t.bind(null,787))})),_=Object(r.lazy)((function(){return t.e(7).then(t.bind(null,781))})),w=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(18),t.e(5)]).then(t.bind(null,782))})),S=[{path:"/",component:j},{path:"/Demo",component:m},{path:"/Paletee",component:d},{path:"/Selfvideo",component:b},{path:"/Selfaudio",component:h},{path:"/D3",component:_},{path:"/Kebiao",component:p},{path:"/Anim",component:O},{path:"/Im",component:y},{path:"/Editor",component:E},{path:"/Copy",component:v},{path:"/Drag",component:f},{path:"/Northbound",component:Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,783))}))},{path:"/404",component:w}],P=function(){return a.a.createElement(i.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null," Loading ")},a.a.createElement(s.c,null,S.map((function(e,n){return a.a.createElement(s.a,{key:n,path:e.path,exact:!0,component:e.component})})),a.a.createElement(s.a,{component:w}))))},z=t(21),g=t(107),D=t(99),x=t(25),k=t.n(x),L=t(26),M=t(38),T=(t(127),t(45)),I=t(100),N=t.n(I).a.create({baseURL:"",timeout:5e3});N.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),N.interceptors.response.use((function(e){return e.data}),(function(e){return T.a.error("\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25"),Promise.reject(e)}));var A=N,C=k.a.mark(Y);function Y(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.e)(M.c.DEMO_ASYNC,k.a.mark((function e(){var n,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)();case 2:return n=e.sent,console.log(n),e.next=6,Object(L.b)((function(){return A.get("/users")}));case 6:return t=e.sent,e.next=9,Object(L.c)(M.a.demoSetList(t));case 9:case"end":return e.stop()}}),e)})))]);case 2:case"end":return e.stop()}}),C)}var B=k.a.mark(H);function H(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Y()]);case 2:case"end":return e.stop()}}),B)}var J=H,R={demo:M.b},U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,W=t(14).createHashHistory(),X=Object(g.a)({onError:function(e){console.error("@ Saga error: ",e)}}),q=Object(z.e)(Object(z.c)(R),U(Object(z.a)(X,Object(D.routerMiddleware)(W))));X.run(J);var K=q,V=t(94),$=t.n(V),F=t(51),G=t.n(F);t(113);G.a.locale("zh-cn");var Q=function(){return a.a.createElement(l.a,{locale:$.a},a.a.createElement(u.a,{store:K},a.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return c}));var r=t(53),a={DEMO_SET_LIST:"demo/set_list",DEMO_ASYNC:"demo/async"},o={list:[]};n.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.DEMO_SET_LIST:return Object(r.a)(Object(r.a)({},e),{},{list:n.payload.list});default:return e}};var c={demoSetList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:a.DEMO_SET_LIST,payload:{list:e}}},demoAsync:function(){return{type:a.DEMO_ASYNC}}}}},[[114,15,16]]]);
//# sourceMappingURL=main.83996fbf.chunk.js.map