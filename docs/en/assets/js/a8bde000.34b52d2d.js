"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[61531],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(97605),i=(n(50959),n(17942));const o={slug:"/concepts/swizzling",title:"Swizzling",description:"More complex component requirements can be enabled using Swizzling.",tags:["architecture","arc42","concept"]},a=void 0,c={unversionedId:"concepts/swizzling",id:"concepts/swizzling",title:"Swizzling",description:"More complex component requirements can be enabled using Swizzling.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/07-swizzling.md",sourceDirName:"20-concepts",slug:"/concepts/swizzling",permalink:"/en/docs/next/concepts/swizzling",draft:!1,tags:[{label:"architecture",permalink:"/en/docs/next/tags/architecture"},{label:"arc42",permalink:"/en/docs/next/tags/arc-42"},{label:"concept",permalink:"/en/docs/next/tags/concept"}],version:"current",sidebarPosition:7,frontMatter:{slug:"/concepts/swizzling",title:"Swizzling",description:"More complex component requirements can be enabled using Swizzling.",tags:["architecture","arc42","concept"]},sidebar:"tutorialSidebar",previous:{title:"Scss",permalink:"/en/docs/next/concepts/styling/scss"},next:{title:"Expert-slot",permalink:"/en/docs/next/concepts/expert-slot"}},s={},l=[{value:"Motivation",id:"motivation",level:2},{value:"Definition",id:"definition",level:2},{value:"Variants",id:"variants",level:2},{value:"Wrapping",id:"wrapping",level:3},{value:"Overwriting",id:"overwriting",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Numerous, sometimes complex requirements for components of design systems or component libraries would not have to be considered over and over again if there were small-scale, easily reusable basic components to carry these requirements."),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Swizzling is defined as the possibility of either modifying an existing component from the outside or replacing the internal construction. Both pay off in high reusability."),(0,i.kt)("h2",{id:"variants"},"Variants"),(0,i.kt)("h3",{id:"wrapping"},"Wrapping"),(0,i.kt)("p",null,"The easiest method to customize a KoliBri component is wrapping. Here, an own component is built around the KoliBri component (decorator pattern) and individualized on the outside."),(0,i.kt)("h3",{id:"overwriting"},"Overwriting"),(0,i.kt)("p",null,"Another variant of swizzling is the overwriting of the inner component construction. In Web Components, this is often done using slots. In KoliBri, we have introduced the ",(0,i.kt)("kol-link",{_href:"expert-slot",_label:"expert slots"})," for this purpose."))}d.isMDXComponent=!0}}]);