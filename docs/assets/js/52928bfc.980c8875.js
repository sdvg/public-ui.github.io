"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[83844],{17942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(50959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79941:(e,t,r)=>{r.d(t,{Z:()=>l,p:()=>i});var n=r(81790),a=r(90200),o=r(50959);const i=()=>o.createElement(a.T5,{_label:(0,n.I)({id:"custom.component-library-for-the-accessibility",message:"Komponentenbibliothek f\xfcr die Barrierefreiheit"})},"KoliBri"),l=i},55141:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(52319),a=r(90200),o=r(50959);const i=[{name:"\u26a1 StackBlitz",image:"stackblitz.png",url:"https://stackblitz.com/edit/vitejs-vite-6bmmiv",description:o.createElement(o.Fragment,null)},{name:"\ud83d\udce6 CodeSandbox",image:"codesandbox.png",url:"https://codesandbox.io/s/minimal-kolibri-sample-oj7pee",description:o.createElement(o.Fragment,null)}],l=e=>{let{name:t,image:r,url:n,description:i}=e;return o.createElement("div",{className:"grid gap-2"},o.createElement("h3",null,t),o.createElement("img",{src:`/assets/playgrounds/${r}`,alt:`Vorschau des Playground ${t}'s`}),o.createElement("p",null,i),o.createElement("div",{className:"text-center"},o.createElement(a.Kc,{_href:n,_label:"Jetzt ausprobieren!",_target:"${image}"})))},c=()=>o.createElement("div",{className:"grid gap-8 md:grid-cols-2"},i.map(((e,t)=>o.createElement(l,(0,n.Z)({key:t},e)))))},43982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(52319),a=(r(50959),r(17942)),o=r(79941),i=r(55141);const l={},c="Playground",s={unversionedId:"get-started/playground",id:"version-1.5/get-started/playground",title:"Playground",description:"Probiere  direkt in Deinem Browser aus, ohne etwas installieren oder einrichten zu m\xfcssen.",source:"@site/versioned_docs/version-1.5/10-get-started/7-playground.mdx",sourceDirName:"10-get-started",slug:"/get-started/playground",permalink:"/docs/1.5/get-started/playground",draft:!1,tags:[],version:"1.5",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frameworks",permalink:"/docs/1.5/get-started/frameworks"},next:{title:"Architektur",permalink:"/docs/1.5/concepts/architecture"}},p={},u=[],d={toc:u},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"playground"},"Playground"),(0,a.kt)("p",null,"Probiere ",(0,a.kt)(o.Z,{mdxType:"KoliBri"})," direkt in Deinem Browser aus, ohne etwas installieren oder einrichten zu m\xfcssen."),(0,a.kt)("p",null,"Sie sind vor allem n\xfctzlich f\xfcr:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testen von ",(0,a.kt)(o.Z,{mdxType:"KoliBri"})),(0,a.kt)("li",{parentName:"ul"},"Melden von Fehlern")),(0,a.kt)(i.Z,{mdxType:"PlaygroundCards"}))}g.isMDXComponent=!0}}]);