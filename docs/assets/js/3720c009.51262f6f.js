"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[13751],{90637:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(50959),n=a(45924),r=a(85236),c=a(29413),s=a(97699),o=a(98930),m=a(9708),g=a(77248);function u(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(g.Z,{tag:"doc_tags_list"}),l.createElement(o.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(m.Z,{tags:t}))))))}},99022:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(50959),n=a(45924),r=a(86621);const c={tag:"tag_VPPi",tagRegular:"tagRegular_ZONG",tagWithCount:"tagWithCount_KpqK"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&l.createElement("span",null,s))}},9708:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(50959),n=a(85236),r=a(99022);const c={tag:"tag_mAjx"};function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c.tag},l.createElement(r.Z,e))))),l.createElement("hr",null))}function o(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},85236:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(81790);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);