"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2665],{49613:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,c=s["".concat(o,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(c,r(r({ref:t},k),{},{components:n})):a.createElement(c,r({ref:t},k))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:i,r[1]=d;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33043:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(12519),i=n(59496);const l=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[r,o]=(0,i.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",k=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,s={angular:`${k}.html`,react:`${k}.tsx`,vue:`${k}.vue`,webcomponent:`${k}.html`},u={onSelect:(e,t)=>{switch(t){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:u,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===r&&i.createElement(d,{url:l(p,t,n,s.react,"preview")})),i.createElement("div",null,"Angular"===r&&i.createElement(d,{url:l(p,t,n,s.angular)})),i.createElement("div",null,"React"===r&&i.createElement(d,{url:l(p,t,n,s.react)})),i.createElement("div",null,"Vue"===r&&i.createElement(d,{url:l(p,t,n,s.vue)})),i.createElement("div",null,"Web Component"===r&&i.createElement(d,{url:l(p,t,n,s.webcomponent)})))}},57537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>k,toc:()=>u});var a=n(15882),i=(n(59496),n(49613));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Link innerhalb eines Flie\xdftextes, mit unterschiedlichen <strong>_display</strong>-Werten",id:"link-innerhalb-eines-flie\xdftextes-mit-unterschiedlichen-_display-werten",level:3},{value:"Link innerhalb eines Flie\xdftextes mit Icon und Text",id:"link-innerhalb-eines-flie\xdftextes-mit-icon-und-text",level:3},{value:"Link mit und ohne Unterstrich",id:"link-mit-und-ohne-unterstrich",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"Shadow Parts",id:"shadow-parts",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Link"),"-Komponente rendert einen auf Barrierefreiheit optimierten Link, der als Text, als Icon oder auch in Kombination ausgegeben werden kann.\nM\xf6glich ist auch die Ausgabe eines versteckten Links."),(0,i.kt)("p",null,"Der Link wird standardm\xe4\xdfig in klassischer Form mit Unterstrich ausgegeben, der jedoch \xfcber ein Attribut auch ohne CSS entfernt werden kann. Weitere Informationen zu Custom Styles finden Sie weiter unten."),(0,i.kt)("p",null,"Beachten Sie, dass die Komponente automatisch ein Padding links und rechts zum umgebenden Text erzeugt. Sie kann daher im Flie\xdftext ohne\nEingabe von Leerzeichen eingef\xfcgt werden. Zus\xe4tzliche Leerzeichen vergr\xf6\xdfern den Abstand zum umgebenden Text."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<kol-link _href="https://www.w3.org" _target="_self" _underline="false"> Hier steht ein Link </kol-link>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,"In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enth\xe4lt.",(0,i.kt)("kol-link",{_href:"https://www.w3.org"},"Hier steht ein Link")," Er wird standardm\xe4\xdfig als ",(0,i.kt)("i",null,(0,i.kt)("b",null,"inline-Element"))," ausgegeben."),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"link-innerhalb-eines-flie\xdftextes-mit-unterschiedlichen-_display-werten"},"Link innerhalb eines Flie\xdftextes, mit unterschiedlichen ",(0,i.kt)("strong",{parentName:"h3"},"_","display"),"-Werten"),(0,i.kt)("p",null,"In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird.",(0,i.kt)("kol-link",{_display:"inline-block"},"Ich bin ein Link als ",(0,i.kt)("b",null,"inline-block-Element")),", damit kann man mir per CSS-Styles eine Breite, eine H\xf6he und andere Eigenschaften zuweisen. Danach folgt ein Link, der als block-Element ausgegeben wird.",(0,i.kt)("kol-link",{_display:"block"},"Ich bin ein Link als ",(0,i.kt)("b",null,"block-Element")),", daher gehe ich \xfcber die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch."),(0,i.kt)("h3",{id:"link-innerhalb-eines-flie\xdftextes-mit-icon-und-text"},"Link innerhalb eines Flie\xdftextes mit Icon und Text"),(0,i.kt)("p",null,(0,i.kt)("kol-link",{_icon:"home"},"Ich bin ein Link mit Icon links"),(0,i.kt)("br",null),(0,i.kt)("kol-link",{_icon:"home","_icon-align":"right"},"Ich bin ein Link mit Icon rechts"),"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.",(0,i.kt)("kol-link",{_icon:"home"},"Ich bin ein Link mit Icon links"),". Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi ",(0,i.kt)("kol-link",{_icon:"home","_icon-align":"right"},"Ich bin ein Link mit Icon rechts"),"facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus."),(0,i.kt)("h3",{id:"link-mit-und-ohne-unterstrich"},"Link mit und ohne Unterstrich"),(0,i.kt)("p",null,(0,i.kt)("kol-link",{_icon:"home"},"Ich bin ein Link in Standardausgabe mit Unterstrich"),(0,i.kt)("br",null),(0,i.kt)("kol-link",{_icon:"home",_underline:"false"},"Ich bin ein Link in Standardausgabe ohne Unterstrich")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Fokussiert das Link-Element.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enter")),(0,i.kt)("td",{parentName:"tr",align:null},"Ruft den hinterlegten Link auf.")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaControls")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-controls")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Elemente kontrolliert werden.  (",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaCurrent")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-current")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen aktuellen Auswahlstatus der Link hat. (",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"date" \\| "location" \\| "page" \\| "step" \\| "time" \\| boolean \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaExpanded")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-expanded")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob durch den Link etwas aufgeklappt wurde. (",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt einen beschreibenden Text des Links an.  (",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaSelected")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-selected")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Link gerade ausgew\xe4hlt ist. (",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Link deaktiviert ist."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_href")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_href")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Ziel-Url des Links an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Class-Identifier eines Icons eine eingebunden Icofont an. (z.B. ",(0,i.kt)("a",{parentName:"td",href:"https://icofont.com/"},"https://icofont.com/"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { top: string \\| KoliBriCustomIcon; right?: string \\| KoliBriCustomIcon \\| undefined; bottom?: string \\| KoliBriCustomIcon \\| undefined; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right: string \\| KoliBriCustomIcon; bottom?: string \\| KoliBriCustomIcon \\| undefined; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right?: string \\| KoliBriCustomIcon \\| undefined; bottom: string \\| KoliBriCustomIcon; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right?: string \\| KoliBriCustomIcon \\| undefined; bottom?: string \\| KoliBriCustomIcon \\| undefined; left: string \\| KoliBriCustomIcon; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_iconAlign")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon-align")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Wird durch das neue flexibleren Icon-Typ abgedeckt.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Gibt an, ob das Icon entweder links oder rechts dargestellt werden soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "left" \\| "right" \\| "top" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob nur das Icon angezeigt wird."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Label f\xfcr die Beschriftung der Schaltfl\xe4che an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_on")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," ",(0,i.kt)("br",null),(0,i.kt)("br",null),"Gibt die EventCallback-Funktionen f\xfcr den Link an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined \\| { onClick?: EventValueOrEventCallback<Event, string> \\| undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_role")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_role")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Role der Schalter hat."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"button" \\| "link" \\| "tab" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_selector")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_selector")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Das Styling sollte stets \xfcber CSS erfolgen.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Gibt die ID eines DOM-Elements, zu dem gesprungen werden soll, aus."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_stealth")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_stealth")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Das Styling sollte stets \xfcber CSS erfolgen.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Gibt an, ob der Link nur beim Fokus sichtbar ist."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index der Button hat. (",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_target")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_target")),(0,i.kt)("td",{parentName:"tr",align:null},"Definiert das Verhalten, bei dem der Link ge\xf6ffnet werden soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_targetDescription")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_target-description")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Beschreibung an, wenn der Link in einem anderen Programm ge\xf6ffnet wird."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Der Link wird in einem neuen Tab ge\xf6ffnet.'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip entweder oben, rechts, unten oder links angezeigt werden soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "left" \\| "right" \\| "top" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'right'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_useCase")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_use-case")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Das Styling sollte stets \xfcber CSS erfolgen.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Gibt den Verwendungsfall des Links an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"image" \\| "nav" \\| "text" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'text'"))))),(0,i.kt)("h2",{id:"shadow-parts"},"Shadow Parts"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Part"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"hidden"')),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Ausblenden des Linktextes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"link"')),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen des Links.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"span"')),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen des Linktextes.")))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./breadcrumb"},"kol-breadcrumb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-adapter-leanup"},"kol-input-adapter-leanup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./link-group"},"kol-link-group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./quote"},"kol-quote")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./skip-nav"},"kol-skip-nav"))),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-link-wc")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-breadcrumb --\x3e kol-link\n  kol-input-adapter-leanup --\x3e kol-link\n  kol-link-group --\x3e kol-link\n  kol-quote --\x3e kol-link\n  kol-skip-nav --\x3e kol-link\n  style kol-link fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}r.isMDXComponent=!0;var d=n(33043);const o={title:"Link",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Link-Komponente.",tags:["Link","Beschreibung","Spezifikation","Beispiele"]},p=void 0,k={unversionedId:"components/link",id:"components/link",title:"Link",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Link-Komponente.",source:"@site/docs/30-components/link.mdx",sourceDirName:"30-components",slug:"/components/link",permalink:"/docs/components/link",draft:!1,tags:[{label:"Link",permalink:"/docs/tags/link"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Link",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Link-Komponente.",tags:["Link","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"LinkGroup",permalink:"/docs/components/link-group"},next:{title:"Logo",permalink:"/docs/components/logo"}},s={},u=[{value:"Beispiele",id:"beispiele",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(d._,{component:"link",sample:"basic",mdxType:"Configurator"}),(0,i.kt)(d._,{component:"link",sample:"icons",mdxType:"Configurator"}),(0,i.kt)(d._,{component:"link",sample:"image",mdxType:"Configurator"}),(0,i.kt)(d._,{component:"link",sample:"target",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);