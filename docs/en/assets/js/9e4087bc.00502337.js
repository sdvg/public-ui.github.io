"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[27028],{16556:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});t(96651);var s=t(27024),a=t(61016),i=t(47424),c=t(73888),n=t(67268),l=t(2488);function h(e){let{year:r,posts:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.c,{as:"h3",id:r,children:r}),(0,l.jsx)("ul",{children:t.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(s.c,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function o(e){let{years:r}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},r)))})})})}function d(e){let{archive:r}=e;const t=(0,a.G)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,a.G)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{const t=r.metadata.date.split("-")[0],s=e.get(t)??[];return e.set(t,[r,...s])}),new Map);return Array.from(r,(e=>{let[r,t]=e;return{year:r,posts:t}}))}(r.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.U7,{title:t,description:s}),(0,l.jsxs)(c.c,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.c,{as:"h1",className:"hero__title",children:t}),(0,l.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(o,{years:h})})]})]})}}}]);