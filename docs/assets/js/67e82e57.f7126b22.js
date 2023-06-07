"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1387],{17942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(50959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38807:(e,t,r)=>{r.d(t,{Z:()=>l,p:()=>i});var n=r(65939),a=r(68380),o=r(50959);const i=()=>o.createElement(a.T5,{_title:(0,n.I)({id:"custom.component-library-for-the-accessibility",message:"Komponentenbibliothek f\xfcr die Barrierefreiheit"})},"KoliBri"),l=i},14200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>y});var n=r(15882),a=r(50959),o=r(17942),i=r(38807),l=r(68380);const c=[{name:"\ud83d\udce6 CodeSandbox",image:"codesandbox.png",url:"https://codesandbox.io/s/minimal-kolibri-sample-oj7pee",description:a.createElement(a.Fragment,null)},{name:"\u26a1 StackBlitz",image:"stackblitz.png",url:"https://stackblitz.com/edit/react-ts-sy6knj",description:a.createElement(a.Fragment,null)}],s=e=>{let{name:t,image:r,url:n,description:o}=e;return a.createElement("div",{className:"grid gap-2"},a.createElement("h3",null,t),a.createElement("img",{src:`/assets/playgrounds/${r}`,alt:`Vorschau des Playground ${t}'s`}),a.createElement("p",null,o),a.createElement("div",{className:"text-center"},a.createElement(l.Kc,{_href:n,_label:"Jetzt ausprobieren!",_target:"${image}"})))},p=()=>a.createElement("div",{className:"grid gap-8 md:grid-cols-2"},c.map(((e,t)=>a.createElement(s,(0,n.Z)({key:t},e))))),u={},d="Playground",m={unversionedId:"get-started/playground",id:"get-started/playground",title:"Playground",description:"Probiere  direkt in Deinem Browser aus, ohne etwas installieren oder einrichten zu m\xfcssen.",source:"@site/docs/10-get-started/7-playground.mdx",sourceDirName:"10-get-started",slug:"/get-started/playground",permalink:"/docs/get-started/playground",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frameworks",permalink:"/docs/get-started/frameworks"},next:{title:"Architektur",permalink:"/docs/concepts/architecture"}},g={},y=[],f={toc:y},b="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"playground"},"Playground"),(0,o.kt)("p",null,"Probiere ",(0,o.kt)(i.Z,{mdxType:"KoliBri"})," direkt in Deinem Browser aus, ohne etwas installieren oder einrichten zu m\xfcssen."),(0,o.kt)("p",null,"Sie sind vor allem n\xfctzlich f\xfcr:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Testen von ",(0,o.kt)(i.Z,{mdxType:"KoliBri"})),(0,o.kt)("li",{parentName:"ul"},"Melden von Fehlern")),(0,o.kt)(p,{mdxType:"PlaygroundCards"}))}k.isMDXComponent=!0}}]);