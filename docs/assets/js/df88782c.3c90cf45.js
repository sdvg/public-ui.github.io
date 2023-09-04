"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[32224],{17942:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,c=k["".concat(o,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[k]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(15882),r=(n(50959),n(17942));const l={},i=void 0,d={unversionedId:"readmes/toast/readme",id:"version-1.6.2/readmes/toast/readme",title:"readme",description:"Mit der Toast-Komponente geben Sie ein optisches Feedback an die Nutzer:innen. Sie wird nur f\xfcr einen kurzen Zeitraum am Kopf des Browserfenster angezeigt und verschwindet danach automatisch.",source:"@site/versioned_docs/version-1.6.2/readmes/toast/readme.md",sourceDirName:"readmes/toast",slug:"/readmes/toast/",permalink:"/docs/readmes/toast/",draft:!1,tags:[],version:"1.6.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/readmes/textarea/"},next:{title:"readme",permalink:"/docs/readmes/tooltip/"}},o={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift",id:"\xfcberschrift",level:3},{value:"Gr\xf6\xdfe der \xdcberschrift",id:"gr\xf6\xdfe-der-\xfcberschrift",level:3},{value:"Anzeigen des Toasts",id:"anzeigen-des-toasts",level:3},{value:"Anzeigedauer des Toast",id:"anzeigedauer-des-toast",level:3},{value:"Anzeigetyp des Toast",id:"anzeigetyp-des-toast",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],s={toc:p},k="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mit der ",(0,r.kt)("strong",{parentName:"p"},"Toast"),"-Komponente geben Sie ein optisches Feedback an die Nutzer:innen. Sie wird nur f\xfcr einen kurzen Zeitraum am Kopf des Browserfenster angezeigt und verschwindet danach automatisch."),(0,r.kt)("p",null,"Ein ",(0,r.kt)("strong",{parentName:"p"},"Toast")," wird nach dem Laden der Webseite am oberen Rand des Browserfenster f\xfcr zehn Sekunden angezeigt. Mit Ausblenden des ",(0,r.kt)("strong",{parentName:"p"},"Toasts")," wird dieser automatisch aus dem DOM entfernt. Wird er erneut ben\xf6tigt, muss er z.B. \xfcber eine JavaScript-Funktion nachgeladen werden."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-alert _label="Erfolg" _type="success">Hier wird der Erfolg n\xe4her beschrieben.</kol-alert>\n<kol-alert _type="success" _show="false">Hier wird der Erfolg n\xe4her beschrieben.</kol-alert>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("div",{className:"d-grid gap-2"},(0,r.kt)("kol-alert",{_label:"Erfolg",_type:"success"},"Hier wird der Erfolg n\xe4her beschrieben."),(0,r.kt)("kol-alert",{_type:"success",_show:"false"},"Hier wird der Erfolg n\xe4her beschrieben.")),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"\xfcberschrift"},"\xdcberschrift"),(0,r.kt)("p",null,"Verwenden Sie das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_label")),", um die \xdcberschrift des Toasts zu bestimmen."),(0,r.kt)("h3",{id:"gr\xf6\xdfe-der-\xfcberschrift"},"Gr\xf6\xdfe der \xdcberschrift"),(0,r.kt)("p",null,"Verwenden Sie das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_level")),", um die \xdcberschriftenebene zu setzen."),(0,r.kt)("h3",{id:"anzeigen-des-toasts"},"Anzeigen des Toasts"),(0,r.kt)("p",null,"Verwenden Sie das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_show")),", um den Toast manuell anzuzeigen."),(0,r.kt)("h3",{id:"anzeigedauer-des-toast"},"Anzeigedauer des Toast"),(0,r.kt)("p",null,"Verwenden Sie das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_showDuration")),", um die Anzeigedauer des Toasts festzulegen."),(0,r.kt)("h3",{id:"anzeigetyp-des-toast"},"Anzeigetyp des Toast"),(0,r.kt)("p",null,"Verwenden Sie das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_type")),", um den Typ des Toasts festzulegen. M\xf6gliche Werte sind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"success")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warning"))),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_alert")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_alert")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines whether the screen-readers should read out the notification."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hasCloser")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_has-closer")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines whether the element can be closed."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Use ","_","label.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Deprecated: Gibt die Beschriftung der Komponente an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Toasts an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_show")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_show")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes the element show up."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_showDuration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_show-duration")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Millisekunden der Toast eingeblendet werden soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines either the type of the component or of the components interactive element."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"default"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"error"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"info"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"success"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"warning"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))))),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Slot"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Der Inhalt der Meldung.")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./alert"},"kol-alert"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-toast --\x3e kol-alert\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  style kol-toast fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);