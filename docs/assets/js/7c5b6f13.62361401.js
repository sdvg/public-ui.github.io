"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5041],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,c=m["".concat(o,".").concat(s)]||m[s]||k[s]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70816:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(97194),r=n(59496);const l=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[i,o]=(0,r.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},k={onSelect:(e,t)=>{switch(t){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return r.createElement(a.UD,{_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===i&&r.createElement(d,{url:l(p,t,n,m.react,"preview")})),r.createElement("div",null,"Angular"===i&&r.createElement(d,{url:l(p,t,n,m.angular)})),r.createElement("div",null,"React"===i&&r.createElement(d,{url:l(p,t,n,m.react)})),r.createElement("div",null,"Vue"===i&&r.createElement(d,{url:l(p,t,n,m.vue)})),r.createElement("div",null,"Web Component"===i&&r.createElement(d,{url:l(p,t,n,m.webcomponent)})))}},61310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>k});var a=n(15882),r=(n(59496),n(49613));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"CSS Custom Properties",id:"css-custom-properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die Komponente ",(0,r.kt)("strong",{parentName:"p"}," InputRadio")," besteht aus einer Sammlung von Radio-Elementen und stellt so eine Auswahlm\xf6glichkeit zwischen verschiedenen Werten dar. Es kann immer nur ein einzelner Wert zur gleichen Zeit ausgew\xe4hlt werden. Ausgew\xe4hlte Radio-Elemente werden i.d.R. mit einem gef\xfcllten und optisch hervorgehobenen Kreis dargestellt."),(0,r.kt)("kol-alert",{_alert:!0,_heading:"Hinweis",_level:"1",_type:"info"},"Das Input-Radio dient der Abbildung einer Auswahlm\xf6glichkeit bei der mindestens und maximal eine Auswahl getroffen werden kann. Das bedeutet, dass ein Input-Radio nicht einzeln vorkommen kann. Aufgrund dessen haben wir die Komponente als Listen-Komponente umgesetzt."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-input-radio\n    _id="anrede"\n    _name="anrede"\n    _list=\'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]\'\n></kol-input-radio>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,(0,r.kt)("kol-input-radio",{_id:"anrede",_name:"anrede",_list:'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]'})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("p",null,"Die einzelnen Radio-Elemente innerhalb der Komponente ",(0,r.kt)("strong",{parentName:"p"}," InputRadio")," werden \xfcber dass Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"_","list"))," als JSON-Objekt \xfcbergeben."),(0,r.kt)("p",null,"Das JSON-Objekt erwartet je Radio-Element folgende Werte:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"label"))," = Beschriftung des Radio-Elements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"value"))," = Wert des Radio-Elements"),(0,r.kt)("p",null,"Beispiel f\xfcr die Erstellung des JSON-Objekts zur Definition der Radio-Elemente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"[ { label: 'Herr', value: 'Herr', }, { label: 'Frau', value: 'Frau', }, { label: 'Firma', value: 'Firma', }, ];\n")),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Achten sie darauf, die Pflichtfelder ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," korrekt zu setzen."),(0,r.kt)("li",{parentName:"ul"},"Es wird immer mindestens ein Wert ausgew\xe4hlt. \xc4hnlich dem Verhalten einer Select-Auswahl. (",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default"),")")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Fokussiert das erste Radio-Element, aktiviert es aber nicht aus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Leer")),(0,r.kt)("td",{parentName:"tr",align:null},"Aktiviert das erste Radio-Element, nachdem die RadioGroup \xfcber die Tab-Taste angesprungen wurde.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Pfeil-Tasten")),(0,r.kt)("td",{parentName:"tr",align:null},"Durchlaufen alle Radio-Elemente und aktivieren das gerade fokussierte Element.")))),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#radiobutton"},"https://www.w3.org/TR/wai-aria-practices/#radiobutton")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3schools.com/tags/att_input_type_radio.asp"},"https://www.w3schools.com/tags/att_input_type_radio.asp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"},"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_alert")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_alert")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld aktiviert oder deaktiviert ist."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_error")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_error")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld kein sichtbares Label haben soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hint")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Hinweistext an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die technische ID des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_list")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_list")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Optionen f\xfcr das Eingabefeld an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Option<W3CInputValue>[] \\| string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den technischen Namen des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Ausrichtung der LinkList an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"horizontal" \\| "vertical" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'vertical'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_required")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld ein Pflichtfeld ist."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index dieses Input hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_touched")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_touched")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xfchrt wurde."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_value")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Wert der Radio an. (Known Bug: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ionic-team/stencil/issues/3902"},"https://github.com/ionic-team/stencil/issues/3902"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number \\| string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-color")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Default radius of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-width")),(0,r.kt)("td",{parentName:"tr",align:null},"Default width of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-danger")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the danger.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-error")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-ghost")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the ghost.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-info")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the info.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-normal")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the normal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-primary")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the primary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-secondary")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the secondary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-success")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the success.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-text")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-visited")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the visited.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-warning")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the warning.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-font-family")),(0,r.kt)("td",{parentName:"tr",align:null},"Default font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-font-size")),(0,r.kt)("td",{parentName:"tr",align:null},"Default font size.")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"used-by"},"Used by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./input-radio-group"},"kol-input-radio-group"))),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kol-input"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./alert"},"kol-alert"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-input-radio --\x3e kol-input\n  kol-input-radio --\x3e kol-alert\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  kol-input-radio-group --\x3e kol-input-radio\n  style kol-input-radio fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}i.isMDXComponent=!0;var d=n(70816);const o={title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",tags:["InputRadio","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/input-radio",id:"components/input-radio",title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",source:"@site/docs/30-components/input-radio.mdx",sourceDirName:"30-components",slug:"/components/input-radio",permalink:"/docs/components/input-radio",draft:!1,tags:[{label:"InputRadio",permalink:"/docs/tags/input-radio"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",tags:["InputRadio","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputRadioGroup",permalink:"/docs/components/input-radio-group"},next:{title:"InputRange",permalink:"/docs/components/input-range"}},m={},k=[{value:"Beispiele",id:"beispiele",level:2}],s={toc:k};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(d._,{component:"input-radio",sample:"basic",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);