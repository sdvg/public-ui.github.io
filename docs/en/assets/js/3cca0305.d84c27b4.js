"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8968],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=n(52319),r=(n(50959),n(17942));const a={toc:[{value:"Methods",id:"methods",level:2},{value:"enqueue",id:"enqueue",level:3},{value:"Returns",id:"returns",level:4},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Siehe ",(0,r.kt)("a",{parentName:"p",href:"/docs/components/toast"},"Toast"),"."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"enqueue"},"enqueue"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enqueue(toast: Toast) => Promise<void>")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./button"},"kol-button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./alert"},"kol-alert"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-toast-container --\x3e kol-button\n  kol-toast-container --\x3e kol-alert\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-toast-container fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}l.isMDXComponent=!0;const s={title:"Toast Container",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast Container-Komponente.",tags:["Toast Container","Beschreibung","Spezifikation","Beispiele"]},c=void 0,p={unversionedId:"components/toast-container",id:"components/toast-container",title:"Toast Container",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast Container-Komponente.",source:"@site/docs/30-components/toast-container.mdx",sourceDirName:"30-components",slug:"/components/toast-container",permalink:"/en/docs/next/components/toast-container",draft:!1,tags:[{label:"Toast Container",permalink:"/en/docs/next/tags/toast-container"},{label:"Beschreibung",permalink:"/en/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Toast Container",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast Container-Komponente.",tags:["Toast Container","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Textarea",permalink:"/en/docs/next/components/textarea"},next:{title:"Toaster",permalink:"/en/docs/next/components/toaster"}},u={},d=[],m={toc:d},k="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"Readme"}))}f.isMDXComponent=!0}}]);