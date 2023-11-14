"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[83682],{17942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(50959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(97605),o=(n(50959),n(17942));const l={slug:"/concepts/form-input",title:"Inputs, Select und Textarea",description:"KoliBri creates accessible HTML compositions and strictly adheres to the W3C specification.",tags:["architecture","arc42","concept"]},i=void 0,a={unversionedId:"concepts/formular",id:"concepts/formular",title:"Inputs, Select und Textarea",description:"KoliBri creates accessible HTML compositions and strictly adheres to the W3C specification.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/09-formular.mdx",sourceDirName:"20-concepts",slug:"/concepts/form-input",permalink:"/en/docs/next/concepts/form-input",draft:!1,tags:[{label:"architecture",permalink:"/en/docs/next/tags/architecture"},{label:"arc42",permalink:"/en/docs/next/tags/arc-42"},{label:"concept",permalink:"/en/docs/next/tags/concept"}],version:"current",sidebarPosition:9,frontMatter:{slug:"/concepts/form-input",title:"Inputs, Select und Textarea",description:"KoliBri creates accessible HTML compositions and strictly adheres to the W3C specification.",tags:["architecture","arc42","concept"]},sidebar:"tutorialSidebar",previous:{title:"Expert-slot",permalink:"/en/docs/next/concepts/expert-slot"},next:{title:"Privacy",permalink:"/en/docs/next/concepts/datenschutz"}},c={},p=[{value:"Vergleich zum HTML-Tag &lt;input&gt;",id:"vergleich-zum-html-tag-input",level:2},{value:"Division",id:"division",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As part of the refactoring to improve the developer experience, we have restructured the input components and converted them into separate components according to the ",(0,o.kt)("kol-link",{_href:"https://html.spec.whatwg.org/multipage/input.html",_target:"w3c"},"W3C-Aufteilung"),".\nIn this way, the respective components only provide the properties that also have a function for the respective type. Properties that were previously maintained but had no function were removed from the programming."),(0,o.kt)("h2",{id:"vergleich-zum-html-tag-input"},"Vergleich zum HTML-Tag ","<","input",">"),(0,o.kt)("p",null,"If you look at the"," ",(0,o.kt)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/Input",_target:"mozilla"},(0,o.kt)("code",null,"<input>"),"-tag")," ",", then all types of an input field are implemented with only one tag (component). This results in the fact that all properties (attributes/properties) are possible, but have no function depending on the type."),(0,o.kt)("p",null,"This implementation of the standard ",(0,o.kt)("code",null,"<input>")," tag leads to the fact that usually more properties are offered than actually fit functionally to the type of the input field. This can lead to misunderstandings during development."),(0,o.kt)("h2",{id:"division"},"Division"),(0,o.kt)("p",null,"The different types of input fields have been divided into the following ",(0,o.kt)("b",null,"KoliBri")," components:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"KolInputCheckbox"),(0,o.kt)("li",null,"KolInputColor"),(0,o.kt)("li",null,"KolInputDate (ab v1.1.10)"),(0,o.kt)("li",null,"KolInputEmail"),(0,o.kt)("li",null,"KolInputFile"),(0,o.kt)("li",null,"KolInputLocalDateTime (open, part of KolInputDate)"),(0,o.kt)("li",null,"KolInputNumber"),(0,o.kt)("li",null,"KolInputPassword"),(0,o.kt)("li",null,"KolInputRadio (KolInputRadioGroup is replaced)"),(0,o.kt)("li",null,"KolInputRange"),(0,o.kt)("li",null,"KolInputText"),(0,o.kt)("li",null,"KolSelect"),(0,o.kt)("li",null,"KolTextarea")))}d.isMDXComponent=!0}}]);