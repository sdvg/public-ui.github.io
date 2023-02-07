"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5658],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},816:(e,t,n)=>{n.d(t,{_:()=>p});var a=n(1445),r=n(9496);const i=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},p=e=>{let{component:t,sample:n}=e;const[l,p]=(0,r.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,s={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},u={onSelect:(e,t)=>{switch(t){case 1:p((()=>"Angular"));break;case 2:p((()=>"React"));break;case 3:p((()=>"Vue"));break;case 4:p((()=>"Web Component"));break;default:p((()=>"Preview"))}}};return r.createElement(a.UD,{_ariaLabel:"Code-Beispiel",_on:u,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===l&&r.createElement(o,{url:i(c,t,n,s.react,"preview")})),r.createElement("div",null,"Angular"===l&&r.createElement(o,{url:i(c,t,n,s.angular)})),r.createElement("div",null,"React"===l&&r.createElement(o,{url:i(c,t,n,s.react)})),r.createElement("div",null,"Vue"===l&&r.createElement(o,{url:i(c,t,n,s.vue)})),r.createElement("div",null,"Web Component"===l&&r.createElement(o,{url:i(c,t,n,s.webcomponent)})))}},5307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=n(5882),r=(n(9496),n(9613));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Icon",id:"icon",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Aria-Hidden",id:"aria-hidden",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mit Hilfe der ",(0,r.kt)("strong",{parentName:"p"},"Icon"),"-Komponente k\xf6nnen Icons aus der Icon-Bibliothek an beliebigen Positionen erzeugt werden. Die Ausgabe des Icon kann \xfcber Attribute gesteuert werden und erfolgt barrierefrei. Die Ausgabe erfolgt standardm\xe4\xdfig als ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"inline")),"-Element."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("p",null,"Die Komponente ",(0,r.kt)("strong",{parentName:"p"},"Icon")," wird \xfcber das HTML-Element ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-icon></kol-icon>")," erzeugt."),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<kol-icon _aria-label="" _icon="fa-solid fa-house"></kol-icon>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,(0,r.kt)("kol-icon",{"_aria-label":"",_icon:"fa-solid fa-house"})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"icon"},"Icon"),(0,r.kt)("p",null,"Verwenden Sie das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"_icon")," um das anzuzeigende Icon festzulegen."),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("h3",{id:"aria-hidden"},"Aria-Hidden"),(0,r.kt)("p",null,"Die Auszeichnung ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-hidden")," ist eigentlich nicht erforderlich, da die aktuellen Screenreader, wie NVDA und JAWS, es auch ohne ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-hidden")," nicht vorlesen."),(0,r.kt)("p",null,"Referenz: ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden"},"https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden")),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt das Aria-Label am Icon an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt einen Identifier eines Icons aus den Icon's an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_part")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_part")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Das Styling sollte stets \xfcber CSS erfolgen.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt den Identifier f\xfcr den CSS-Part an, um das Icon von Au\xdfen \xe4ndern zu k\xf6nnen. (",(0,r.kt)("a",{parentName:"td",href:"https://meowni.ca/posts/part-theme-explainer/"},"https://meowni.ca/posts/part-theme-explainer/"),") /**"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"used-by"},"Used by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./accordion"},"kol-accordion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./alert"},"kol-alert")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./breadcrumb"},"kol-breadcrumb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./details"},"kol-details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./icon-font-awesome"},"kol-icon-font-awesome")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./icon-icofont"},"kol-icon-icofont")),(0,r.kt)("li",{parentName:"ul"},"kol-input"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./input-checkbox"},"kol-input-checkbox")),(0,r.kt)("li",{parentName:"ul"},"kol-link-wc"),(0,r.kt)("li",{parentName:"ul"},"kol-span-wc")),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-accordion --\x3e kol-icon\n  kol-alert --\x3e kol-icon\n  kol-breadcrumb --\x3e kol-icon\n  kol-details --\x3e kol-icon\n  kol-icon-font-awesome --\x3e kol-icon\n  kol-icon-icofont --\x3e kol-icon\n  kol-input --\x3e kol-icon\n  kol-input-checkbox --\x3e kol-icon\n  kol-link-wc --\x3e kol-icon\n  kol-span-wc --\x3e kol-icon\n  style kol-icon fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}l.isMDXComponent=!0;var o=n(816);const p={title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",tags:["Icon","Beschreibung","Spezifikation","Beispiele"]},c=void 0,d={unversionedId:"components/icon",id:"components/icon",title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",source:"@site/docs/30-components/icon.mdx",sourceDirName:"30-components",slug:"/components/icon",permalink:"/docs/components/icon",draft:!1,tags:[{label:"Icon",permalink:"/docs/tags/icon"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",tags:["Icon","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"IconIcofont",permalink:"/docs/components/icon-icofont"},next:{title:"IndentedText",permalink:"/docs/components/indented-text"}},s={},u=[{value:"Beispiele",id:"beispiele",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(o._,{component:"icon",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);