"use strict";(self.webpackChunklab=self.webpackChunklab||[]).push([[9],{6712:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(4160);function r(e,t){const[n,a]=e.split("-");return"en"===t?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a-1]}, ${n}`:"zh"===t?`${n} 年 ${a} 月`:"Invalid Date Format"}var c=n(500),u=n(6740);function m(e){let{date:t,content:n}=e;const l=(0,c.Z)(n);return a.createElement("li",{className:"mb-4 flex flex-col text-sm"},a.createElement("div",{className:"text-gray-900 font-semibold"},t),a.createElement("div",{className:"text-gray-700"},a.createElement(l,null)))}function s(e){let{count:t}=e;const n=(0,a.useContext)(u._);let c=function(e){return(0,l.K2)("1698412628").allNewsJson.edges.map((t=>{let{node:n}=t;return{date:r(n.date,e),content:n.content[e]}}))}(n);const s="en"===n?"News":"新闻",o="en"===n?"See all news":"更多新闻",i="en"===n?"/news":"/news-zh";return 0===t?a.createElement("div",{className:"py-10"},a.createElement("div",{className:"text-3xl mb-10 tracking-wide"},s),a.createElement("ul",null,c.map(((e,t)=>{let{date:n,content:l}=e;return a.createElement(m,{key:t,date:n,content:l})})))):(c=c.slice(0,t),a.createElement("div",{className:"ml:w-1/3 my-6 px-8 bg-slate-50 rounded ring-1"},a.createElement("div",{className:"my-6 text-lg font-semibold tracking-wide"},s),a.createElement("ul",null,c.map(((e,t)=>{let{date:n,content:l}=e;return a.createElement(m,{key:t,date:n,content:l})}))),a.createElement("div",{className:"text-sm tracking-wide my-6"},a.createElement(l.rU,{to:i},o))))}},7886:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(539),r=n(6712);function c(){return a.createElement(l.Z,null,a.createElement("div",{className:"[&_a]:text-xmu-blue-70 hover:[&_a]:underline"},a.createElement(r.Z,{count:0})))}},1225:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return u}});var a=n(7294),l=n(6740),r=n(6166),c=n(7886);function u(){return a.createElement(l._.Provider,{value:"zh"},a.createElement(c.Z,null))}const m=()=>a.createElement(r.Z,{title:"新闻"})}}]);
//# sourceMappingURL=component---src-pages-news-zh-jsx-3e4e4bbecf12c10836b4.js.map