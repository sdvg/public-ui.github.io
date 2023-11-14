"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[41401],{17942:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(50959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,b=u["".concat(a,".").concat(f)]||u[f]||d[f]||s;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,c=new Array(s);c[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<s;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(97605),o=(n(50959),n(17942));const s={slug:"/concepts/testprocedure",title:"Test procedure",description:"This page describes the test concept.",tags:["Accessibility","BIK BITV","concept"]},c="Test procedure",i={unversionedId:"concepts/test",id:"version-1.7/concepts/test",title:"Test procedure",description:"This page describes the test concept.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/03-test.md",sourceDirName:"20-concepts",slug:"/concepts/testprocedure",permalink:"/en/docs/concepts/testprocedure",draft:!1,tags:[{label:"Accessibility",permalink:"/en/docs/tags/accessibility"},{label:"BIK BITV",permalink:"/en/docs/tags/bik-bitv"},{label:"concept",permalink:"/en/docs/tags/concept"}],version:"1.7",sidebarPosition:3,frontMatter:{slug:"/concepts/testprocedure",title:"Test procedure",description:"This page describes the test concept.",tags:["Accessibility","BIK BITV","concept"]},sidebar:"tutorialSidebar",previous:{title:"Properties",permalink:"/en/docs/concepts/properties"},next:{title:"Theming",permalink:"/en/docs/concepts/styling/theming"}},a={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-procedure"},"Test procedure"),(0,o.kt)("p",null,"Only through extensive and continuous execution of tests can the functionality and accessibility as elementary quality goals of KoliBri be permanently ensured."),(0,o.kt)("p",null,"To ensure the correct functioning of the components, established test methods such as unit testing, snapshot testing and visual screenshot testing are used."),(0,o.kt)("p",null,"To ensure the accessibility of the KoliBri component library, a test procedure based on the BIK BITV test was established, which was adapted to the specifics of the development of Web Components. For this purpose, the individual test steps of the BIK BITV test were checked regarding their applicability to each component to be tested, and thus a test catalog adapted to the component library was defined. The ITZBund's internal accessibility test team is responsible for the implementation."))}d.isMDXComponent=!0}}]);