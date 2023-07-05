"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4012],{17942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(50959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),k=o,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},79991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(15882),o=(n(50959),n(17942));const a={},l="InputAdapterLeanup",p={unversionedId:"components/input-adapter-leanup",id:"components/input-adapter-leanup",title:"InputAdapterLeanup",description:"[DEPRECATED] Use the separated lean-input-adapter from the @leanup/kolibri-components package.",source:"@site/docs/30-components/input-adapter-leanup.md",sourceDirName:"30-components",slug:"/components/input-adapter-leanup",permalink:"/docs/components/input-adapter-leanup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IndentedText",permalink:"/docs/components/indented-text"},next:{title:"InputCheckbox",permalink:"/docs/components/input-checkbox"}},i={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inputadapterleanup"},"InputAdapterLeanup"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[DEPRECATED]")," Use the separated lean-input-adapter from the ",(0,o.kt)("inlineCode",{parentName:"p"},"@leanup/kolibri-components")," package.")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("h3",{id:"depends-on"},"Depends on"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./alert"},"kol-alert")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./link"},"kol-link"))),(0,o.kt)("h3",{id:"graph"},"Graph"),(0,o.kt)("mermaid",{value:"graph TD;\n  kol-input-adapter-leanup --\x3e kol-alert\n  kol-input-adapter-leanup --\x3e kol-link\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  style kol-input-adapter-leanup fill:#f9f,stroke:#333,stroke-width:4px"}),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);