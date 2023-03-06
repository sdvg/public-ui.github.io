"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5956],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=p(n),s=l,N=m["".concat(o,".").concat(s)]||m[s]||k[s]||r;return n?a.createElement(N,i(i({ref:t},u),{},{components:n})):a.createElement(N,i({ref:t},u))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:l,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70816:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(97194),l=n(59496);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[i,o]=(0,l.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},k={onSelect:(e,t)=>{switch(t){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return l.createElement(a.UD,{_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===i&&l.createElement(d,{url:r(p,t,n,m.react,"preview")})),l.createElement("div",null,"Angular"===i&&l.createElement(d,{url:r(p,t,n,m.angular)})),l.createElement("div",null,"React"===i&&l.createElement(d,{url:r(p,t,n,m.react)})),l.createElement("div",null,"Vue"===i&&l.createElement(d,{url:r(p,t,n,m.vue)})),l.createElement("div",null,"Web Component"===i&&l.createElement(d,{url:r(p,t,n,m.webcomponent)})))}},38035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>o,metadata:()=>u,toc:()=>k});var a=n(15882),l=(n(59496),n(49613));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"CSS Custom Properties",id:"css-custom-properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function i(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Der Input-Typ ",(0,l.kt)("strong",{parentName:"p"},"Text")," erzeugt ein Eingabefeld f\xfcr normalen Text, Suchbegriffe, URLs oder Telefonnummern."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-input-text _type="text" _id="mein_text" _name="mein_text"> Texteingabe </kol-input-text>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("kol-input-text",{_type:"text",_id:"mein_text",_name:"mein_text"},"Texteingabe"),(0,l.kt)("kol-input-text",{_type:"text",_id:"mein_text",_name:"mein_text",_disabled:!0},"Texteingabe"),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Achten sie darauf, die Pflichtfelder ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," und ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," korrekt zu setzen.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Fokussiert das Eingabefeld.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ESC")),(0,l.kt)("td",{parentName:"tr",align:null},"L\xf6scht den Inhalt (nur Typ = Search).")))),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"},"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/"},"https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/"))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alert")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alert")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_autoComplete")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_auto-complete")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld autovervollst\xe4ndigt werden kann."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"off" \\| "on" \\| undefined')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld aktiviert oder deaktiviert ist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_error")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_error")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld kein sichtbares Label haben soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hint")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hint")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Hinweistext an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { right: string \\| KoliBriCustomIcon; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { right?: string \\| KoliBriCustomIcon \\| undefined; left: string \\| KoliBriCustomIcon; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die technische ID des Eingabefeldes an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_list")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_list")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Vorschlagsw\xf6rter an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| string[] \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_maxLength")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_max-length")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Zeichen man maximal eingeben kann."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den technischen Namen des Eingabefeldes an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pattern")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pattern")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt ein Pr\xfcfpattern f\xfcr das Eingabefeld an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_placeholder")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_placeholder")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Platzhalter des Eingabefeldes an, wenn es leer ist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_readOnly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_read-only")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Eingabefeld nur lesend ist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_required")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_required")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld ein Pflichtfeld ist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_size")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_size")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Zeichen man eingeben kann."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht einen Schalter ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (nur Icon-Only)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined \\| { _label: string; } & { _ariaControls?: string \\| undefined; _ariaCurrent?: AriaCurrent \\| undefined; _ariaExpanded?: boolean \\| undefined; _ariaLabel?: string \\| undefined; _ariaSelected?: boolean \\| undefined; _disabled?: boolean \\| undefined; _icon?: Stringified<KoliBriIconProp> \\| undefined; _iconAlign?: Alignment \\| undefined; _iconOnly?: boolean \\| undefined; _role?: AlternativButtonLinkRole \\| undefined; _tabIndex?: number \\| undefined; _tooltipAlign?: Alignment \\| undefined; _accessKey?: string \\| undefined; _id?: string \\| undefined; _on?: KoliBriButtonCallbacks<unknown> \\| undefined; _type?: KoliBriButtonType \\| undefined; _value?: unknown; _customClass?: string \\| undefined; _variant?: KoliBriButtonVariant \\| undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index dieses Input hat."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_touched")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_touched")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xfchrt wurde."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob es ein Text-, Suche-, URL- oder Telefon-Eingabefeld ist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"search" \\| "tel" \\| "text" \\| "url" \\| undefined')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'text'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Wert des Eingabefeldes an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-border-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the border.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Default radius of the border.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-border-width")),(0,l.kt)("td",{parentName:"tr",align:null},"Default width of the border.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-danger")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the danger.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-error")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-ghost")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the ghost.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-info")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the info.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-normal")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the normal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-primary")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the primary.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-secondary")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the secondary.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-success")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the success.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-text")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-visited")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the visited.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-color-warning")),(0,l.kt)("td",{parentName:"tr",align:null},"Default color of the warning.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-font-family")),(0,l.kt)("td",{parentName:"tr",align:null},"Default font family.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--kolibri-font-size")),(0,l.kt)("td",{parentName:"tr",align:null},"Default font size.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-input")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-input-text --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  style kol-input-text fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}i.isMDXComponent=!0;var d=n(70816);const o={title:"InputText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputText-Komponente.",tags:["InputText","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/input-text",id:"components/input-text",title:"InputText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputText-Komponente.",source:"@site/docs/30-components/input-text.mdx",sourceDirName:"30-components",slug:"/components/input-text",permalink:"/docs/components/input-text",draft:!1,tags:[{label:"InputText",permalink:"/docs/tags/input-text"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"InputText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputText-Komponente.",tags:["InputText","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputRange",permalink:"/docs/components/input-range"},next:{title:"KoliBri",permalink:"/docs/components/kolibri"}},m={},k=[{value:"Beispiele",id:"beispiele",level:2}],s={toc:k};function N(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(d._,{component:"input-text",sample:"basic",mdxType:"Configurator"}))}N.isMDXComponent=!0}}]);