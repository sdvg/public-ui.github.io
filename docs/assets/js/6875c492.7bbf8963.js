"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[32392],{98816:(e,t,n)=>{n.d(t,{c:()=>r});n(96651);var s=n(82800),a=n(42416),i=n(2488);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.c,{permalink:n,title:(0,i.jsx)(s.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.c,{permalink:r,title:(0,i.jsx)(s.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},15492:(e,t,n)=>{n.d(t,{c:()=>r});n(96651);var s=n(49712),a=n(23960),i=n(2488);function r(e){let{items:t,component:n=a.c}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.E,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},79868:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(96651);var s=n(95880),a=n(82800),i=n(29924),r=n(53570),l=n(14732),o=n(71920),c=n(60592),g=n(98816),d=n(92452),u=n(15492),h=n(83288),p=n(2224),m=n(2488);function x(e){const t=function(){const{selectMessage:e}=(0,i.A)();return t=>e(t,(0,a.G)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.G)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.U7,{title:n}),(0,m.jsx)(d.c,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.c,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.c,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.c,{as:"h1",children:r}),(0,m.jsx)(o.c,{href:t.allTagsPath,children:(0,m.jsx)(a.c,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.c,{items:n}),(0,m.jsx)(g.c,{metadata:i})]})}function f(e){return(0,m.jsxs)(r.cr,{className:(0,s.c)(l.W.wrapper.blogPages,l.W.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},83288:(e,t,n)=>{n.d(t,{c:()=>h});n(96651);var s=n(95880),a=n(82800),i=n(51624),r=n(2488);function l(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.c,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var g=n(14732),d=n(80752);function u(e){let{className:t}=e;return(0,r.jsx)(d.c,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.c)(t,g.W.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}}}]);