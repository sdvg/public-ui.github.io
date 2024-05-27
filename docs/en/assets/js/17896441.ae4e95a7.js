"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[26752],{93008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var s=n(80924),a=n(64996),i=n(27296),o=n(76776);const l=s.createContext(null);function c(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new i.AH("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,o.jsx)(a.U7,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(95880),m=n(20685),h=n(5340),v=n(16704);function x(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(v.c,{...t,subLabel:(0,o.jsx)(h.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(v.c,{...n,subLabel:(0,o.jsx)(h.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=r();return(0,o.jsx)(x,{previous:e.previous,next:e.next})}var f=n(13896),p=n(46496),g=n(64264),j=n(37208),C=n(15584),L=n(60216);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=N[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(p.c,{to:n,onClick:s,children:(0,o.jsx)(h.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function H(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,f.c)(),{pluginId:a}=(0,g.UF)({failfast:!0}),{savePreferredVersionName:i}=(0,C.iy)(a),{latestDocSuggestion:l,latestVersionSuggestion:c}=(0,g.i8)(a),r=l??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.c)(t,j.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(_,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(k,{versionLabel:c.label,to:r.path,onClick:()=>i(c.name)})})]})}function T(e){let{className:t}=e;const n=(0,L.E)();return n.banner?(0,o.jsx)(H,{className:t,versionMetadata:n}):null}var M=n(51376);function y(){const e=(0,L.E)();return(0,o.jsx)("span",{className:"flex",children:(0,o.jsx)(M.cX,{_color:"#ddd",_label:`Version: ${e.label}`})})}var I=n(57504),w=n(99027);function E(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(t||n||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.c)(j.W.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.c)("row margin-top--sm",j.W.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(I.c,{tags:a})})}),l&&(0,o.jsx)(w.c,{className:(0,u.c)("margin-top--sm",j.W.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var A=n(2517),B=n(68152);const O={tocCollapsibleButton:"tocCollapsibleButton_k8xP",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_abPj"};function S(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.c)("clean-btn",O.tocCollapsibleButton,!t&&O.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const U={tocCollapsible:"tocCollapsible_dfp7",tocCollapsibleContent:"tocCollapsibleContent_NOS4",tocCollapsibleExpanded:"tocCollapsibleExpanded_uKTE"};function P(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,A.a)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.c)(U.tocCollapsible,!i&&U.tocCollapsibleExpanded,n),children:[(0,o.jsx)(S,{collapsed:i,onClick:l}),(0,o.jsx)(A.U,{lazy:!0,className:U.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(B.c,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const V={tocMobile:"tocMobile_qQTR"};function W(){const{toc:e,frontMatter:t}=r();return(0,o.jsx)(P,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.c)(j.W.docs.docTocMobile,V.tocMobile)})}var R=n(34768);function D(){const{toc:e,frontMatter:t}=r();return(0,o.jsx)(R.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.W.docs.docTocDesktop})}var F=n(31952),q=n(44088);function z(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.c)(j.W.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(F.c,{as:"h1",children:n})}),(0,o.jsx)(q.c,{children:t})]})}var G=n(83272),$=n(54208),K=n(71083);function J(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Q={breadcrumbHomeIcon:"breadcrumbHomeIcon_WNco"};function X(){const e=(0,K.c)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(p.c,{"aria-label":(0,h.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(J,{className:Q.breadcrumbHomeIcon})})})}const Y={breadcrumbsContainer:"breadcrumbsContainer_nLut"};function Z(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,o.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,o.jsx)(p.c,{className:a,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:a,children:t})}function ee(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.c)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function te(){const e=(0,G.js)(),t=(0,$.Y5)();return e?(0,o.jsx)("nav",{className:(0,u.c)(j.W.docs.docBreadcrumbs,Y.breadcrumbsContainer),"aria-label":(0,h.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(X,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(ee,{active:s,index:n,addMicrodata:!!a,children:(0,o.jsx)(Z,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var ne=n(5880);const se={docItemContainer:"docItemContainer_KWVj",docItemCol:"docItemCol_O04r"};function ae(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.U)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,o.jsx)(W,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(D,{})}}(),{metadata:{unlisted:s}}=r();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.c)("col",!n.hidden&&se.docItemCol),children:[s&&(0,o.jsx)(ne.c,{}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:se.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(te,{}),(0,o.jsx)(y,{}),n.mobile,(0,o.jsx)(z,{children:t}),(0,o.jsx)(E,{})]}),(0,o.jsx)(b,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ie(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(c,{content:e.content,children:(0,o.jsxs)(a.cr,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(ae,{children:(0,o.jsx)(n,{})})]})})}},34768:(e,t,n)=>{n.d(t,{c:()=>r});n(80924);var s=n(95880),a=n(68152);const i={tableOfContents:"tableOfContents_bDk7",docItemContainer:"docItemContainer_qGJu"};var o=n(76776);const l="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function r(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,s.c)(i.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(a.c,{...n,linkClassName:l,linkActiveClassName:c})})}},68152:(e,t,n)=>{n.d(t,{c:()=>x});var s=n(80924),a=n(92715);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function r(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.y)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=r();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),r=c(l,{anchorTopOffset:n.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(46496),m=n(76776);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.c,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:r,maxHeadingLevel:u,...h}=e;const x=(0,a.y)(),b=r??x.tableOfContents.minHeadingLevel,f=u??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:f}}),[l,c,b,f])),(0,m.jsx)(v,{toc:p,className:n,linkClassName:l,...h})}},5880:(e,t,n)=>{n.d(t,{c:()=>h});n(80924);var s=n(95880),a=n(5340),i=n(57152),o=n(76776);function l(){return(0,o.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,o.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,o.jsx)(i.c,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(37208),u=n(66128);function m(e){let{className:t}=e;return(0,o.jsx)(u.c,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.c)(t,d.W.common.unlistedBanner),children:(0,o.jsx)(c,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{}),(0,o.jsx)(m,{...e})]})}}}]);