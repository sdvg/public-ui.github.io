"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[1983],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),k=p(n),s=r,N=k["".concat(o,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[k]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(5882),r=(n(9496),n(9613));const l={},i="LinkButton",d={unversionedId:"components/link-button/readme",id:"components/link-button/readme",title:"LinkButton",description:"Der LinkButton ist semantisch ein Link und hat das Design eines Buttons. Hierzu werden alle relevanten Properties der Link-Komponente \xfcbernommen und um die Design-bestimmenden Properties des Buttons erweitert.",source:"@site/docs/30-components/link-button/readme.md",sourceDirName:"30-components/link-button",slug:"/components/link-button/",permalink:"/docs/components/link-button/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/30-components/link-button/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Link",permalink:"/docs/components/link/"},next:{title:"LinkGroup",permalink:"/docs/components/link-group/"}},o={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],m={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkbutton"},"LinkButton"),(0,r.kt)("p",null,"Der LinkButton ist semantisch ein Link und hat das Design eines Buttons. Hierzu werden alle relevanten Properties der Link-Komponente \xfcbernommen und um die Design-bestimmenden Properties des Buttons erweitert."),(0,r.kt)("p",null,"Einen Link kann man nicht deaktivieren und daher gibt es bei einem LinkButton nicht das Property ",(0,r.kt)("inlineCode",{parentName:"p"},"_disabled"),"."),(0,r.kt)("p",null,"Da es die Komponente ButtonLink gibt, die semantisch ein Button und optisch ein Link ist. Ist es nicht mehr notwendig den Click-Callback zu unterst\xfctzen. Das Property ",(0,r.kt)("inlineCode",{parentName:"p"},"_on")," wird somit als ",(0,r.kt)("inlineCode",{parentName:"p"},"deprecated")," markiert und wird mit dem n\xe4chsten Major-Release entfernt."),(0,r.kt)("p",null,"Ein Button hat aus UX-Sicht mehrere Varianten (",(0,r.kt)("inlineCode",{parentName:"p"},"primary")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"secondary")," usw.). Damit der LinkButton das optisch gleich aussehen kann, wurden die Properties ",(0,r.kt)("inlineCode",{parentName:"p"},"_customClass")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"_variant")," von der Button-Komponente \xfcbernommen."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<kol-link-button _href="#" _label="Primary" _variant="primary"></kol-link-button>\n<kol-link-button _href="#" _label="Secondary" _variant="secondary"></kol-link-button>\n<kol-link-button _href="#" _label="Normal" _variant="normal"></kol-link-button>\n<kol-link-button _href="#" _label="Secondary" _variant="danger"></kol-link-button>\n<kol-link-button _href="#"_label="Ghost" _variant="ghost"></kol-link-button>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("div",{class:"flex gap-2"},(0,r.kt)("kol-link-button",{_href:"#",_label:"Primary",_variant:"primary"}),(0,r.kt)("kol-link-button",{_href:"#",_label:"Secondary",_variant:"secondary"}),(0,r.kt)("kol-link-button",{_href:"#",_label:"Normal",_variant:"normal"}),(0,r.kt)("kol-link-button",{_href:"#",_label:"Danger",_variant:"danger"}),(0,r.kt)("kol-link-button",{_href:"#",_label:"Ghost",_variant:"ghost"})),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaControls")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-controls")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Elemente kontrolliert werden. (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaCurrent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-current")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen aktuellen Auswahlstatus der Link hat. (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"date" \\| "location" \\| "page" \\| "step" \\| "time" \\| boolean \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaExpanded")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-expanded")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob durch den Link etwas aufgeklappt wurde. (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt einen beschreibenden Text f\xfcr den Screenreader an. Damit die Sprachsteuerung von interaktiven Elementen funktioniert, muss der Aria-Label-Text mit dem Label-Text des Buttons beginnen. - ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaSelected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-selected")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob Element ausgew\xe4hlt ist (role=tab). (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_customClass")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_custom-class")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Custom-Class \xfcbergeben werden soll, wenn ","_",'variant="custom" gesetzt ist.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Link deaktiviert ist."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_fill")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_fill")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Link die gesamte zur Verf\xfcgung stehende Breite ausf\xfcllt."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_href")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_href")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Ziel-Url des Links an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Class-Identifier eines Icons eine eingebunden Icofont an. (z.B. ",(0,r.kt)("a",{parentName:"td",href:"https://icofont.com/"},"https://icofont.com/"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { top: string \\| KoliBriCustomIcon; right?: string \\| KoliBriCustomIcon \\| undefined; bottom?: string \\| KoliBriCustomIcon \\| undefined; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right: string \\| KoliBriCustomIcon; bottom?: string \\| KoliBriCustomIcon \\| undefined; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right?: string \\| KoliBriCustomIcon \\| undefined; bottom: string \\| KoliBriCustomIcon; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right?: string \\| KoliBriCustomIcon \\| undefined; bottom?: string \\| KoliBriCustomIcon \\| undefined; left: string \\| KoliBriCustomIcon; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_iconAlign")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon-align")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt an, ob das Icon entweder links oder rechts dargestellt werden soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"left" \\| "right" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'left'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob nur das Icon angezeigt wird."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt einen beschreibenden Text f\xfcr das Text-Element an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt die EventCallback-Funktionen f\xfcr den Link an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined \\| { onClick?: EventCallback<Event> \\| undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_part")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_part")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Identifier f\xfcr den CSS-Part an, um das Icon von Au\xdfen \xe4ndern zu k\xf6nnen. (",(0,r.kt)("a",{parentName:"td",href:"https://meowni.ca/posts/part-theme-explainer/"},"https://meowni.ca/posts/part-theme-explainer/"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_role")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Role der Schalter hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tab" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_selector")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_selector")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die ID eines DOM-Elements, zu dem gesprungen werden soll, aus."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_stealth")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_stealth")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Link nur beim Fokus sichtbar ist."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index der Button hat. (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_target")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_target")),(0,r.kt)("td",{parentName:"tr",align:null},"Definiert das Verhalten, bei dem der Link ge\xf6ffnet werden soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_targetDescription")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_target-description")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Beschreibung an, wenn der Link in einem anderen Programm ge\xf6ffnet wird."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Der Link wird in einem neuen Tab ge\xf6ffnet.'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip entweder oben, rechts, unten oder links angezeigt werden soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "left" \\| "right" \\| "top" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'right'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_underline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_underline")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Links unterstrichen dargestellt werden."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_useCase")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_use-case")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Verwendungsfall des Links an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"image" \\| "nav" \\| "text" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'text'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_variant")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_variant")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Auspr\xe4gung der Button hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"custom" \\| "danger" \\| "ghost" \\| "normal" \\| "primary" \\| "secondary" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'normal'"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kol-span-wc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tooltip"},"kol-tooltip"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-link-button --\x3e kol-span-wc\n  kol-link-button --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  style kol-link-button fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);