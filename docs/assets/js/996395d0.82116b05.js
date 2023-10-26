"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[94128],{17942:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(50959);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=d(n),m=a,g=k["".concat(p,".").concat(m)]||k[m]||u[m]||l;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50222:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(52319),a=(n(50959),n(17942)),l=n(94047);const i={title:"Expert-Slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",tags:["Architektur","arc42","Konzept"]},o=void 0,p={unversionedId:"concepts/expert-slot",id:"concepts/expert-slot",title:"Expert-Slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",source:"@site/docs/20-concepts/08-expert-slot.mdx",sourceDirName:"20-concepts",slug:"/concepts/expert-slot",permalink:"/docs/next/concepts/expert-slot",draft:!1,tags:[{label:"Architektur",permalink:"/docs/next/tags/architektur"},{label:"arc42",permalink:"/docs/next/tags/arc-42"},{label:"Konzept",permalink:"/docs/next/tags/konzept"}],version:"current",sidebarPosition:8,frontMatter:{title:"Expert-Slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Swizzling",permalink:"/docs/next/concepts/swizzling"},next:{title:"Inputs, Select und Textarea",permalink:"/docs/next/concepts/formular"}},d={},c=[{value:"Motivation",id:"motivation",level:2},{value:"&quot;Expert&quot;-Slot",id:"expert-slot",level:2},{value:"Komponentenliste",id:"komponentenliste",level:3},{value:"Beispiel",id:"beispiel",level:3}],k={toc:c},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,(0,a.kt)("strong",null,(0,a.kt)("kol-abbr",{"_tooltip-align":"right",_title:"Komponenten-Bibliothek f\xfcr die Barrierefreiheit"},"KoliBri"))," ","stellt in sich geschlossene und barrierefreie Komponenten bereit und l\xe4sst hierzu die \u201eBef\xfcllung\u201c der Komponenten i. d. R. nur \xfcber die Properties der Komponenten zu. Alle von au\xdfen eingehenden Property-Werte werden validiert und auf den internen State gemappt."),(0,a.kt)("p",null,(0,a.kt)("kol-indented-text",null,(0,a.kt)("strong",null,"Hierdurch behalten wir die Kontrolle \xfcber die Komponenten und deren semantische Konstruktion."))),(0,a.kt)("p",null,"Um jedoch die Wiederverwendbarkeit von"," ",(0,a.kt)("strong",null,(0,a.kt)("kol-abbr",{"_tooltip-align":"right",_title:"Komponenten-Bibliothek f\xfcr die Barrierefreiheit"},"KoliBri"))," ","weiter zu verbessern, werden wir die Flexibilit\xe4t durch einen sogenannten ",(0,a.kt)("strong",null,"Experten"),"-Modus erweitern. Der ",(0,a.kt)("strong",null,"Experten"),"-Modus definiert den Punkt, wo der ",(0,a.kt)("strong",null,"Experte")," oder die"," ",(0,a.kt)("strong",null,"Expertin")," mehr Gestaltungsraum innerhalb der Komponente erh\xe4lt und daf\xfcr im Gegenzug die Verantwortung f\xfcr die Barrierefreiheit \xfcbernimmt."),(0,a.kt)("h2",{id:"expert-slot"},'"Expert"-Slot'),(0,a.kt)("p",null,"Mittels dem \u201eExpert\u201c-Slot kann die interne Konstruktion einiger Komponenten \u201e\xfcberschrieben\u201c werden. Gegebenenfalls ist es erforderlich an der Komponente, die regul\xe4r geforderten Property-Werte auf ",(0,a.kt)("code",null,"leer")," zu setzen."),(0,a.kt)("h3",{id:"komponentenliste"},"Komponentenliste"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"},"Komponente"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Verf\xfcgbar ab"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Slot-Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Ohne Slot-Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Badge"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Button"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.10"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"ButtonLink"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.15"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"ButtonToggle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Heading"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.3.0"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputCheckbox"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputDate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputEmail"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputNumber"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputPassword"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputRange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputRadio"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputText"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Select"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Textarea"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Link"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.16"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"LinkButton"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.16"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Span"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.10"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Tooltip"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("blockquote",null,(0,a.kt)("sup",null,"*")," Der leer Slot-Name wird nur aufgrund der Abw\xe4rtskompatibilit\xe4t bis zu Major-Release 2 unterst\xfctzt."),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,"Ein Button wird regul\xe4r wie folgt verwendet:"),(0,a.kt)(l.ic,{_label:"Ich bin ein Schalter",mdxType:"KolButton"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolButton _label="Ich bin ein Schalter"></KolButton>\n')),(0,a.kt)("p",null,"Mit dem Expert-Slot kann der Button jetzt auch so verwendet werden:"),(0,a.kt)(l.ic,{_label:"",mdxType:"KolButton"},(0,a.kt)("span",{slot:"expert"},"Ich bin mehr als nur ein Schalter")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolButton _label="">\n    <span slot="expert">Ich bin mehr als nur ein Schalter</span>\n</KolButton>\n')),(0,a.kt)("p",null,(0,a.kt)("kol-alert",{_type:"info"},(0,a.kt)("strong",null,"\xdcber das Property ",(0,a.kt)("code",null,'slot="expert"')," wird ein nachvollziehbarer \xdcbergabepunkt erm\xf6glicht und der Kontext-Wechsel klar definiert."))))}m.isMDXComponent=!0}}]);