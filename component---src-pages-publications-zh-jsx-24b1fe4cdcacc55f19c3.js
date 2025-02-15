"use strict";(self.webpackChunklab=self.webpackChunklab||[]).push([[772],{7235:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){let{allCatogaries:t,currentIndex:n,setCurrentIndex:a}=e;return r.createElement("div",{className:"border-b-2 flex flex-col ml:flex-row justify-center ml:gap-x-4"},t.map(((e,t)=>r.createElement("button",{key:t,onClick:()=>a(t),className:"p-2 text-sm ml:text-base text-left "+(n===t?" bg-orange-50 border-l-[3px] ml:border-0 ml:border-b-[3px] border-orange-200 text-black":"text-neutral-400 cursor-pointer")},e))))}},4663:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294);function a(e){let{size:t=20,color:n="#000000"}=e;return r.createElement("svg",{className:"inline",fill:n,height:t,width:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"},r.createElement("path",{d:"m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z"}))}var l=n(5733);function c(e){let{size:t=20,color:n="#000000"}=e;return r.createElement("svg",{className:"inline",fill:n,height:t,width:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M12.122,0,1.622,6V18l10.5,6,10.5-6V6Zm7.513,6.6-7.623,4.252L4.673,6.56,12.122,2.3ZM3.622,8.262,11,12.574v8.482L3.622,16.839ZM13,21.194V12.587l7.622-4.251v8.5Z"}))}function s(e){let{type:t,url:n}=e;const s="#000000";return r.createElement("a",{href:n,className:"flex gap-[2px] items-center px-1 py-[2px] border-2 rounded bg-xmu-blue-10"},"paper"===t?r.createElement(a,{size:14,color:s}):"code"===t?r.createElement(l.Z,{size:14,color:s}):"slides"===t?r.createElement(c,{size:14,color:s}):r.createElement(r.Fragment,null),r.createElement("span",{className:"text-xs font-semibold text-neutral-700"},t))}function o(e){let{links:t}=e;return r.createElement("div",{className:"flex space-x-2"},t.map(((e,t)=>r.createElement(s,{key:t,type:e.type,url:e.url}))))}},5733:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){let{size:t=20,color:n="#000000"}=e;return r.createElement("svg",{className:"inline",fill:n,height:t,width:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z",fill:"#212121"}))}},7990:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),a=n(6740),l=n(539),c=n(7235),s=n(500),o=n(4663);function i(e){let{paperData:t}=e;const{title:n,authors:a,publication:l,links:c}=t,i=(0,s.Z)(a),u=(0,s.Z)(l);return r.createElement("div",{className:"space-y-1"},r.createElement("div",{className:"whitespace-pre text-wrap leading-6 [&_strong]:font-semibold hover:[&_a]:underline"},r.createElement("a",{className:"",href:c.filter((e=>"paper"===e.type))[0]},n),r.createElement(i,null),r.createElement(u,null)),r.createElement(o.Z,{links:c}))}function u(e){let{currentCatogry:t,paperDatas:n}=e;return r.createElement("div",{className:"border-b-2 py-8"},r.createElement("div",{className:"mb-3 text-3xl tracking-wide"},t),r.createElement("ul",{className:"pl-6"},n.map(((e,t)=>r.createElement("li",{key:t,className:"mb-4 list-disc"},r.createElement(i,{paperData:e}))))))}var m=n(9639);function p(e){let{allCatogaries:t,currentIndex:n}=e;const a=(0,m.Z)();return 0===n?r.createElement("div",null,t.map(((e,t)=>0!==t?r.createElement(u,{key:t,currentCatogry:e,paperDatas:a[t]}):r.createElement(r.Fragment,{key:t})))):r.createElement(u,{currentCatogry:t[n],paperDatas:a[n]})}const d={en:["All Papers","Conference Papers","Journal Papers"],zh:["全部论文","会议论文","期刊论文"]};function f(){const e=(0,r.useContext)(a._),t=d[e],{0:n,1:s}=(0,r.useState)(0);return r.createElement(l.Z,null,r.createElement("div",{className:"py-9"},r.createElement(c.Z,{allCatogaries:t,currentIndex:n,setCurrentIndex:s}),r.createElement(p,{allCatogaries:t,currentIndex:n})))}},9639:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4160);function a(){const e=(0,r.K2)("3432177294");return[[],e.allConferencePapersJson.edges.map((e=>{let{node:t}=e;return t})),e.allJournalPapersJson.edges.map((e=>{let{node:t}=e;return t}))]}},4371:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o},default:function(){return s}});var r=n(7294),a=n(6740),l=n(6166),c=n(7990);function s(){return r.createElement(a._.Provider,{value:"zh"},r.createElement(c.Z,null))}const o=()=>r.createElement(l.Z,{title:"论文发表"})}}]);
//# sourceMappingURL=component---src-pages-publications-zh-jsx-24b1fe4cdcacc55f19c3.js.map