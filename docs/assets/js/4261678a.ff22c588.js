"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2227],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22879:(e,t,n)=>{n.d(t,{_:()=>s});var r=n(76897),a=n(59496);const i=function(e,t,n,r,a){return void 0===a&&(a="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${a}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[l,s]=(0,a.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},m={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return a.createElement(r.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===l&&a.createElement(o,{url:i(p,t,n,u.react,"preview")})),a.createElement("div",null,"Angular"===l&&a.createElement(o,{url:i(p,t,n,u.angular)})),a.createElement("div",null,"React"===l&&a.createElement(o,{url:i(p,t,n,u.react)})),a.createElement("div",null,"Vue"===l&&a.createElement(o,{url:i(p,t,n,u.vue)})),a.createElement("div",null,"Web Component"===l&&a.createElement(o,{url:i(p,t,n,u.webcomponent)})))}},794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=n(15882),a=(n(59496),n(49613));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2}]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Progress"),"-Komponente erzeugt einen Fortschrittsbalken, \xfcber den eine optische R\xfcckmeldung gegeben werden kann."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <kol-progress _type="bar" _max="100" _value="20"></kol-progress>\n</div>\n')),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,(0,a.kt)("kol-progress",{_type:"bar",_max:"100",_value:"20"})),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("p",null,"Verwenden Sie das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_type"),", um die optische Ausgabe der Komponente zu steuern. M\xf6gliche Werte sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bar")," f\xfcr eine Ausgabe als horizontaler Fortschrittsbalken"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cycle")," f\xfcr eine Ausgabe als kreisf\xf6rmiger Fortschrittsbalken")),(0,a.kt)("p",null,"Verwenden Sie das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_max"),", um den maximalen Wert der Komponente zu bestimmen."),(0,a.kt)("p",null,"Verwenden Sie das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_value"),", um den aktuellen Wert der Komponente zu bestimmen."),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/progress"},"https://developer.mozilla.org/de/docs/Web/HTML/Element/progress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role"))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_max")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_max")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, bei welchem Wert die Fortschrittsanzeige abgeschlossen ist."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_type")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Prozess als Balken oder Kreis dargestellt wird."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"bar" \\| "cycle" \\| undefined')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_unit")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_unit")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die Einheit der Fortschrittswerte an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'%'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_value")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_value")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, wie weit die Anzeige fortgeschritten ist."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("hr",null))}l.isMDXComponent=!0;var o=n(22879);const s={title:"Progress",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Progress-Komponente.",tags:["Progress","Beschreibung","Spezifikation","Beispiele"]},p=void 0,d={unversionedId:"components/progress",id:"components/progress",title:"Progress",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Progress-Komponente.",source:"@site/docs/30-components/progress.mdx",sourceDirName:"30-components",slug:"/components/progress",permalink:"/docs/components/progress",draft:!1,tags:[{label:"Progress",permalink:"/docs/tags/progress"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Progress",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Progress-Komponente.",tags:["Progress","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/docs/components/pagination"},next:{title:"Quote",permalink:"/docs/components/quote"}},u={},m=[{value:"Beispiele",id:"beispiele",level:2}],c={toc:m};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(o._,{component:"progress",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);