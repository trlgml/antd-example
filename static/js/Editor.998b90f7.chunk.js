(this.webpackJsonpantd_react=this.webpackJsonpantd_react||[]).push([[10],{612:function(e,t,n){},779:function(e,t,n){"use strict";n.r(t);var a=n(184),o=n(0),r=n.n(o),s=(n(612),n(613)),d=n.n(s);n(709);t.default=function(){var e=Object(o.useState)(d.a.createEditorState("")),t=Object(a.a)(e,2),n=t[0],s=t[1];return r.a.createElement("div",{className:"Editor"},r.a.createElement(d.a,{value:n,excludeControls:["emoji"],onChange:function(e){console.log(e),s(e)},media:{uploadFn:function(e){var t=new XMLHttpRequest,n=new FormData,a=function(t){e.error({msg:"unable to upload."})};t.upload.addEventListener("progress",(function(t){e.progress(t.loaded/t.total*100)}),!1),t.addEventListener("load",(function(n){e.success({url:JSON.parse(t.responseText).data.url,meta:{id:+new Date,loop:!0,autoPlay:!0,controls:!0}})}),!1),t.addEventListener("error",a,!1),t.addEventListener("abort",a,!1),n.append("file",e.file),t.open("POST","http://47.117.49.82:3001/v1/upload",!0),t.send(n)}},onSave:function(){}}))}}}]);
//# sourceMappingURL=Editor.998b90f7.chunk.js.map