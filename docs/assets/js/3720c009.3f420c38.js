"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[13751],{53254:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(50959),r=a(45924),n=a(31027),c=a(72521),s=a(67426),o=a(18886),m=a(80839),g=a(43359);function u(e){let{tags:t}=e;const a=(0,n.M)();return l.createElement(c.FG,{className:(0,r.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(g.Z,{tag:"doc_tags_list"}),l.createElement(o.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(m.Z,{tags:t}))))))}},26555:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(50959),r=a(45924),n=a(95682);const c={tag:"tag_sCXz",tagRegular:"tagRegular_uqTv",tagWithCount:"tagWithCount_BNPL"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&l.createElement("span",null,s))}},80839:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(50959),r=a(31027),n=a(26555);const c={tag:"tag_FIQr"};function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c.tag},l.createElement(n.Z,e))))),l.createElement("hr",null))}function o(e){let{tags:t}=e;const a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},31027:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>n});var l=a(65161);const r=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);