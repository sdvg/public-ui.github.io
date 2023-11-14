"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[79383],{17942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(50959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=o,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var r=n(97605),o=(n(50959),n(17942));const a={toc:[{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2}]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("kol-badge",{_label:"untested"})," Diese neue Komponente wird als ungetestet markiert, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten auch erst nach einem abgeschlossenen Release erfolgen.")),(0,o.kt)("p",null,"Die ",(0,o.kt)("strong",{parentName:"p"},"Popover"),"-Komponente stellt eine M\xf6glichkeit dar zus\xe4tzliche Inhalte in ein tempor\xe4res Element zu setzen, das, \xe4hnlich wie ",(0,o.kt)("kol-link",{_href:"",_label:"Tooltip"}),", um sein Triggerelement angeordnet ist.\nDas Triggerelement ist immer das im HTML vorangehende Element (previousSibling)."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"_align")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"_align")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the alignment of the tooltip, popover or tabs in relation to the element."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"_show")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"_show")),(0,o.kt)("td",{parentName:"tr",align:null},"Makes the element show up."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("h2",{id:"slots"},"Slots"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Slot"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Der Inhalt des Popover.")))),(0,o.kt)("hr",null))}l.isMDXComponent=!0;const p={title:"Popover",description:"Beschreibung und Spezifikation f\xfcr die Popover-Komponente.",tags:["Popover","Beschreibung","Spezifikation"]},s=void 0,d={unversionedId:"components/popover",id:"components/popover",title:"Popover",description:"Beschreibung und Spezifikation f\xfcr die Popover-Komponente.",source:"@site/docs/30-components/popover.mdx",sourceDirName:"30-components",slug:"/components/popover",permalink:"/docs/next/components/popover",draft:!1,tags:[{label:"Popover",permalink:"/docs/next/tags/popover"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"}],version:"current",frontMatter:{title:"Popover",description:"Beschreibung und Spezifikation f\xfcr die Popover-Komponente.",tags:["Popover","Beschreibung","Spezifikation"]},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/docs/next/components/pagination"},next:{title:"Progress",permalink:"/docs/next/components/progress"}},m={},u=[],c={toc:u},k="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"Readme"}))}g.isMDXComponent=!0}}]);