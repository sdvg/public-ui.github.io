"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4492],{41328:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});a(80924);var s=a(95880),r=a(64996),l=a(37208),n=a(20372),c=a(26773),i=a(6504),o=a(31952),g=a(76776);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.U7,{title:e}),(0,g.jsx)(i.c,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:a}=t;return(0,g.jsx)(r.cr,{className:(0,s.c)(l.W.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.c,{as:"h1",children:a}),(0,g.jsx)(c.c,{tags:e})]})})})})}function d(t){const e=(0,n.K)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(h,{...t,title:e})]})}},50748:(t,e,a)=>{a.d(e,{c:()=>c});a(80924);var s=a(95880),r=a(46496);const l={tag:"tag_JrWW",tagRegular:"tagRegular_LtSH",tagWithCount:"tagWithCount_KaxR"};var n=a(76776);function c(t){let{permalink:e,label:a,count:c}=t;return(0,n.jsxs)(r.c,{href:e,className:(0,s.c)(l.tag,c?l.tagWithCount:l.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}},26773:(t,e,a)=>{a.d(e,{c:()=>o});a(80924);var s=a(20372),r=a(50748),l=a(31952);const n={tag:"tag_VGYY"};var c=a(76776);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.c,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.c,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const a=(0,s.M)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},20372:(t,e,a)=>{a.d(e,{K:()=>r,M:()=>l});var s=a(5340);const r=()=>(0,s.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);