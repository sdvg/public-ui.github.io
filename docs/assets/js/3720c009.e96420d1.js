"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3751],{79046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(59496),n=a(45924),r=a(14820),c=a(38252),s=a(90853),o=a(45162),m=a(4058),u=a(9864);function i(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(u.Z,{tag:"doc_tags_list"}),l.createElement(o.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(m.Z,{tags:t}))))))}},16012:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(59496),n=a(45924),r=a(30687);const c="tag_bj0c",s="tagRegular_T76L",o="tagWithCount_CovL";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c,m?o:s)},a,m&&l.createElement("span",null,m))}},4058:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(59496),n=a(14820),r=a(16012);const c="tag_mJLu";function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}function o(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},14820:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(22515);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);