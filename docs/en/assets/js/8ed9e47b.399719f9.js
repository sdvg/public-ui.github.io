"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[97980],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(50959);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=c,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:c,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(15882),c=(n(50959),n(17942));const o={title:"Privacy",description:"This page describes the privacy concept for KoliBri.",tags:["architecture","privacy","concept"]},i="Privacy concept",a={unversionedId:"concepts/datenschutz",id:"version-1.6.2/concepts/datenschutz",title:"Privacy",description:"This page describes the privacy concept for KoliBri.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6.2/20-concepts/10-datenschutz.mdx",sourceDirName:"20-concepts",slug:"/concepts/datenschutz",permalink:"/en/docs/concepts/datenschutz",draft:!1,tags:[{label:"architecture",permalink:"/en/docs/tags/architecture"},{label:"privacy",permalink:"/en/docs/tags/privacy"},{label:"concept",permalink:"/en/docs/tags/concept"}],version:"1.6.2",sidebarPosition:10,frontMatter:{title:"Privacy",description:"This page describes the privacy concept for KoliBri.",tags:["architecture","privacy","concept"]},sidebar:"tutorialSidebar",previous:{title:"Inputs, Select und Textarea",permalink:"/en/docs/concepts/form-input"},next:{title:"Security",permalink:"/en/docs/concepts/sicherheit"}},s={},l=[{value:"Introduction",id:"introduction",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,c.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"privacy-concept"},"Privacy concept"),(0,c.kt)("p",null,"This concept addresses and explains the aspects of the KoliBri component library that are relevant from a data protection perspective."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The ",(0,c.kt)("kol-link",{_href:"/docs_en/datenschutz"},"privacy policy")," regarding the open source approach is described in a separate document.")),(0,c.kt)("h2",{id:"introduction"},"Introduction"),(0,c.kt)("p",null,"The component library KoliBri has an obvious and focused target area of its technical functional expression, which is described in detail in the ",(0,c.kt)("kol-link",{_href:"/docs_en/manifest"},"manifest"),"."),(0,c.kt)("p",null,"KoliBri is a collection of small, semantically accessible and flexibly reusable web components without any business logic or other data processing functionalities. In particular, it does not contain any functionalities for sending data. The aim is exclusively to ensure semantically accessible HTML markup of the various elements (components) in different style guides."))}d.isMDXComponent=!0}}]);