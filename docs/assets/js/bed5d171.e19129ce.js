"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[60836],{17942:(e,t,r)=>{r.d(t,{Zo:()=>b,kt:()=>m});var n=r(50959);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=d(r),k=i,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return r?n.createElement(m,a(a({ref:t},b),{},{components:r})):n.createElement(m,a({ref:t},b))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},37201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(15882),i=(r(50959),r(17942));const l={},a=void 0,o={unversionedId:"readmes/abbr/readme",id:"version-1.5.3/readmes/abbr/readme",title:"readme",description:"Die Abbr-Komponente implementiert den HTML-Tag abbr, wobei hier jedoch der Tooltip barrierefrei ist.",source:"@site/versioned_docs/version-1.5.3/readmes/abbr/readme.md",sourceDirName:"readmes/abbr",slug:"/readmes/abbr/",permalink:"/docs/1.5.3/readmes/abbr/",draft:!1,tags:[],version:"1.5.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Impressum",permalink:"/docs/1.5.3/impressum"},next:{title:"readme",permalink:"/docs/1.5.3/readmes/accordion/"}},p={},d=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Angabe der Beschreibung zur Abk\xfcrzung",id:"angabe-der-beschreibung-zur-abk\xfcrzung",level:3},{value:"Ausrichtung des Tooltip",id:"ausrichtung-des-tooltip",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],b={toc:d},u="wrapper";function s(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Abbr"),"-Komponente implementiert den HTML-Tag ",(0,i.kt)("inlineCode",{parentName:"p"},"abbr"),", wobei hier jedoch der Tooltip barrierefrei ist.\nDer Tooltip f\xfcr die Beschreibung wird bei Focus oder Hover der ",(0,i.kt)("strong",{parentName:"p"},"Abbr"),"-Komponente angezeigt und vorgelesen."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>Ich bin eine <kol-abbr _title="Abk\xfcrzung" _tooltip-align="top">Abbr</kol-abbr> mit Tooltip oben.</p>\n<p>Ich bin eine <kol-abbr _title="Abk\xfcrzung" _tooltip-align="right">Abbr</kol-abbr> mit Tooltip rechts.</p>\n<p>Ich bin eine <kol-abbr _title="Abk\xfcrzung" _tooltip-align="bottom">Abbr</kol-abbr> mit Tooltip unten.</p>\n<p>Ich bin eine <kol-abbr _title="Abk\xfcrzung" _tooltip-align="left">Abbr</kol-abbr> mit Tooltip links.</p>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,"Ich bin eine ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"top"},"Abbr")," mit Tooltip oben."),(0,i.kt)("p",null,"Ich bin eine ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"right"},"Abbr")," mit Tooltip rechts."),(0,i.kt)("p",null,"Ich bin eine ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"bottom"},"Abbr")," mit Tooltip unten."),(0,i.kt)("p",null,"Ich bin eine ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"left"},"Abbr")," mit Tooltip links."),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"angabe-der-beschreibung-zur-abk\xfcrzung"},"Angabe der Beschreibung zur Abk\xfcrzung"),(0,i.kt)("p",null,"Der Begriff bzw. die Erkl\xe4rung wird \xfcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_title"))," \xfcbergeben, die Abk\xfcrzung bzw. der erkl\xe4rungsw\xfcrdige Begriff kommt zwischen die Tags im HTML."),(0,i.kt)("h3",{id:"ausrichtung-des-tooltip"},"Ausrichtung des Tooltip"),(0,i.kt)("p",null,"\xdcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_tooltip-align"))," wird die Positionierung des ToolTip, relativ zur Abk\xfcrzung, festgelegt."),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Die Abbr-Komponente wurde von KoliBri umgesetzt, weil der Standard-Tooltip nicht barrierefrei bzgl. der Skalierung ist.\nDer KoliBri Tooltip kann von Screenreadern vorgelesen werden und ver\xe4ndert seine Gr\xf6\xdfe beim Zoomen korrekt."),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr"},"https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_title")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_title")),(0,i.kt)("td",{parentName:"tr",align:null},"Dieses Property gibt die Beschreibung oder Erl\xe4uterung der Abk\xfcrzung an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip entweder oben, rechts, unten oder links angezeigt werden soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'top'"))))),(0,i.kt)("h2",{id:"slots"},"Slots"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Slot"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Der Begriff, der erl\xe4utert werden soll.")))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tooltip"},"kol-tooltip"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-abbr --\x3e kol-tooltip\n  kol-tooltip --\x3e kol-span-wc\n  kol-span-wc --\x3e kol-icon\n  style kol-abbr fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}s.isMDXComponent=!0}}]);