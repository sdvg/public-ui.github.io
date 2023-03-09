"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1520],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,b=s["".concat(d,".").concat(k)]||s[k]||m[k]||i;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},70816:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(97194),r=n(59496);const i=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[l,d]=(0,r.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,s={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},m={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===l&&r.createElement(o,{url:i(p,t,n,s.react,"preview")})),r.createElement("div",null,"Angular"===l&&r.createElement(o,{url:i(p,t,n,s.angular)})),r.createElement("div",null,"React"===l&&r.createElement(o,{url:i(p,t,n,s.react)})),r.createElement("div",null,"Vue"===l&&r.createElement(o,{url:i(p,t,n,s.vue)})),r.createElement("div",null,"Web Component"===l&&r.createElement(o,{url:i(p,t,n,s.webcomponent)})))}},20170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var a=n(15882),r=(n(59496),n(49613));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Funktionalit\xe4ten",id:"funktionalit\xe4ten",level:3},{value:"Typen",id:"typen",level:3},{value:"Pagination",id:"pagination",level:3},{value:"KoliBriTableHeaders",id:"kolibritableheaders",level:4},{value:"KoliBriTablePaginationStates",id:"kolibritablepaginationstates",level:4},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Sortierung",id:"sortierung",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Pagination ohne/mit Label",id:"pagination-ohnemit-label",level:3},{value:"Verwendung von Role",id:"verwendung-von-role",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"CSS Custom Properties",id:"css-custom-properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Table"),"-Komponente dient prim\xe4r der \xfcbersichtlichen Darstellung von Datenmengen. Dabei ist sie so ausgelegt, dass sie alle von den Daten abh\xe4ngige Werte automatisch ermittelt und die Tabelle entsprechend darstellt. Hierzu geh\xf6ren beispielsweise die optionalen Funktionalit\xe4ten Spaltensortierung oder Pagination."),(0,r.kt)("kol-indented-text",{_summary:"Backend-seitige Pagination"},'Bei sehr gro\xdfen Datenmengen ist auch eine manuelle Nutzung der Table-Komponente m\xf6glich. Das bedeutet, dass die Tabelle seitenweise "manuell" bef\xfcllt wird. Hierzu kann einfach anstatt der Table-Pagination eine "eigene" Pagination unter der Tabelle mittels der Pagination-Komponente verwendet werden.'),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("p",null,"Die Table-Komponente ist so konstruiert, dass nicht der gesamte Tabellenaufbau im Markup selbst beschrieben werden muss. Wie genau die Tabelle Markup-spezifisch aufgebaut werden muss, um barrierefrei zu sein, \xfcbernimmt die Komponente selbst."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),", wie es nicht gedacht ist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<kol-table>\n    <kol-tr>\n        <kol-th>\u2026</kol-th>\n        \u2026\n    </kol-tr>\n    \u2026\n</kol-table>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),", wie es gedacht ist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <kol-table _caption="\u2026" _headers="\u2026" _data="\u2026" _pagination="\u2026"></kol-table>\n</div>\n')),(0,r.kt)("p",null,'Dadurch, dass die Table-Komponente das valide und barrierefreie Markup dynamisch "zusammenbaut", kann die komplexe Auszeichnung f\xfcr die assistive Systeme dem/der Entwickler:in abgenommen werden.'),(0,r.kt)("h3",{id:"funktionalit\xe4ten"},"Funktionalit\xe4ten"),(0,r.kt)("p",null,"Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tabellenbeschreibung durch ein ",(0,r.kt)("inlineCode",{parentName:"li"},"caption"),"-Attribut."),(0,r.kt)("li",{parentName:"ul"},"Mehrzeilige Spalten\xfcberschriften in horizontaler oder vertikaler Richtung."),(0,r.kt)("li",{parentName:"ul"},"Sortierfunktion f\xfcr entweder horizontale und vertikale Ausrichtung."),(0,r.kt)("li",{parentName:"ul"},"Unterschiedliche Render-Funktion f\xfcr die Zellen."),(0,r.kt)("li",{parentName:"ul"},"Pagination f\xfcr die Tabelle.")),(0,r.kt)("p",null,"Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten ",(0,r.kt)("strong",{parentName:"p"},"nicht"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Filtern der Tabelle ist aktuell nicht innerhalb der Tabelle vorgesehen."),(0,r.kt)("li",{parentName:"ul"},"Das Ausw\xe4hlen von Zeilen ist aktuell in der Tabelle nicht vorgesehen.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Beides k\xf6nnte jedoch mittels der Render-Funktion umgesetzt werden.")),(0,r.kt)("h3",{id:"typen"},"Typen"),(0,r.kt)("h3",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"\xdcber die Property ",(0,r.kt)("inlineCode",{parentName:"p"},"_pagination")," kann optional eine Vielzahl zus\xe4tzlicher Properties zur Steuerung der Pagination \xfcbergeben werden. Die genaue Beschreibung der Optionen ist in der Pagination-Spezifikation zu finden."),(0,r.kt)("h4",{id:"kolibritableheaders"},"KoliBriTableHeaders"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  horizontal: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n  vertical: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n};\n")),(0,r.kt)("h4",{id:"kolibritablepaginationstates"},"KoliBriTablePaginationStates"),(0,r.kt)("p",null,"Die Tabellen-Komponente verwendet intern die Pagination-Komponente die sich mit den gleichen Properties steuern l\xe4sst. Die Steuerung wird in der Beschreibung der Pagination-Komponente erl\xe4utert."),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<kol-table _caption=\"Tabellenbeschreibung\" _headers=\"{'horizontal': [[{'label':'Montag','key':'montag'}]]}\" _pagination=\"[{'page':2}]\"></kol-table>\n")),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,(0,r.kt)("kol-table",{_caption:"Nur Vertikal Header, Daten Vertikal, Pagination",_headers:"{'horizontal':[[{'label':'Montag','key':'montag'}]]}",_data:"[{'montag':'Zelle1'},{'montag':'Zelle2'}]",_pagination:"{'page':2}"})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"sortierung"},"Sortierung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zu jedem Header kann man eine Sortierfunktion definieren."),(0,r.kt)("li",{parentName:"ul"},"Es ist maximal nur eine Sortierfunktion aktiviert oder keine."),(0,r.kt)("li",{parentName:"ul"},"Bei dem Rendern der Daten in die Tabelle muss jetzt gepr\xfcft werden, ob eine Sortierung aktiv ist und vorher die Daten durch die Funktion sortiert werden."),(0,r.kt)("li",{parentName:"ul"},"Aktuell wird nicht unterst\xfctzt, dass bei zweidimensionalen Headern, die Header der jeweils anderen Header-Seite mitsortiert werden. Bei der Anforderung der Sortierung empfehlen wir die Verwendung nur einer Header-Dimension (entweder horizontal oder vertikal).")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"Bei der Table-Komponente werden zahlreiche Attribut-Definitionen dem Tabellen-Markup hinzugef\xfcgt, um die Screenreader bestm\xf6glich zu unterst\xfctzen."),(0,r.kt)("p",null,"Aktuell werden folgende Attribute von der Komponente gemanaged: ",(0,r.kt)("inlineCode",{parentName:"p"},"role"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-\\*"),"."),(0,r.kt)("p",null,"Das hei\xdft beispielsweise, dass bei den Spalten\xfcberschriften automatisch entweder die Rolle ",(0,r.kt)("inlineCode",{parentName:"p"},"colheader")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"rowheader")," gesetzt wird. Dar\xfcber hinaus wird der Scope entweder auf ",(0,r.kt)("inlineCode",{parentName:"p"},"col"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"colgroup")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"row"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"rowgroup")," gesetzt. \xc4hnlich dieser Automatismen werden auch die ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-\\*"),"-Attribute je nach Relevanz gesetzt."),(0,r.kt)("p",null,"Warum die Tabelle einen ",(0,r.kt)("strong",{parentName:"p"},"Tabindex")," hat, wird auf der folgenden Webseite beschrieben: ",(0,r.kt)("a",{parentName:"p",href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"},"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable")),(0,r.kt)("h3",{id:"pagination-ohnemit-label"},"Pagination ohne/mit Label"),(0,r.kt)("p",null,"Bei der Tabelle kann die Pagination optional hinzugef\xfcgt werden. Die Steuerelemente der Pagination haben hierbei keine sichtbaren Labels, weil das eine \xfcbliche Darstellung ist (State-of-the-art). F\xfcr den Screenreader-Nutzenden werden alle Steuerelemente genauso vorgelesen, als w\xfcrde es ein sichtbares Label geben (KoliBri-Inputs).\nNun bleibt aus Sicht der Barrierefreiheit nur noch zu beurteilen, ob f\xfcr sehende Nutzende die Steuerung auch barrierefrei ist."),(0,r.kt)("p",null,"Sichtweisen:"),(0,r.kt)("ol",{type:"a"},(0,r.kt)("li",null,"Dem sehenden Nutzenden erschlie\xdft sich durch die aussagekr\xe4ftigen Beschriftungen der Optionen das Verhalten der Steuerelement, auch ohne zus\xe4tzliches Label. Die Steuerelemente der Pagination k\xf6nnen optisch kompakter dargestellt werden."),(0,r.kt)("li",null,"Dem sehenden Nutzenden werden Labels angezeigt, um auf das Verhalten der Steuerelement schlie\xdfen zu k\xf6nnen. Dadurch k\xf6nnen die Beschriftungen der Optionen k\xfcrzer erfolgen. Die Steuerelemente der Pagination werden tendenziell durch das zus\xe4tzliche Label optisch mehr Platz ben\xf6tigen. Wenn die Select-Auswahl ein Label bekommt, dann muss konsequenterweise auch die Seitenauswahl ein Label erhalten.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Betrachtung:")," Der informelle Teil (Label) f\xfcr das Verst\xe4ndnis muss in der Sichtweise ",(0,r.kt)("strong",{parentName:"p"},"a")," durch die Optionsbeschriftung und bei Sichtweise ",(0,r.kt)("strong",{parentName:"p"},"b")," durch das explizite Label abgebildet werden."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Aus Sicht der Barrierefreiheit sind beide Sichtweise barrierefrei.")," (?!)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"L\xf6sungsentscheidung:")," Es w\xe4re m\xf6glich, die Pagination mit um einen ",(0,r.kt)("inlineCode",{parentName:"p"},"_labelled"),"-Modus zu erweitern, um somit den Projekten beide Sichtweisen anbieten zu k\xf6nnen."),(0,r.kt)("h3",{id:"verwendung-von-role"},"Verwendung von Role"),(0,r.kt)("p",null,"Die Auszeichnung der Rolle (",(0,r.kt)("inlineCode",{parentName:"p"},"role"),") f\xfchrt bei manchen Screenreadern zu Problemen. Da der Fokus der Table-Komponente auf der Darstellung von Daten liegt und somit der semantische Aufbau auf der HTML-Table beruht, sollte das Vorlesen auch ohne zus\xe4tzliche Rollenauszeichnung gut funktionieren (Retest)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lediglich die Rollen ",(0,r.kt)("inlineCode",{parentName:"em"},"columnheader")," und ",(0,r.kt)("inlineCode",{parentName:"em"},"rowheader")," wird beibehalten, da die Tabellenk\xf6pfe (",(0,r.kt)("inlineCode",{parentName:"em"},"th"),") in entweder Spalten- oder Zeilen-orientiert sind.")),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/tables/"},"https://www.w3.org/WAI/tutorials/tables/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html"},"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"},"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen"},"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html"},"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitala11y.com/aria-sort-properties/"},"https://www.digitala11y.com/aria-sort-properties/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dequeuniversity.com/library/aria/table-sortable"},"https://dequeuniversity.com/library/aria/table-sortable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.maxability.co.in/2016/06/07/aria-sort-property/"},"https://www.maxability.co.in/2016/06/07/aria-sort-property/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen"},"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1312236/"},"https://stackoverflow.com/questions/1312236/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"},"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_caption")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_caption")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den  Titel oder eine Legende mit Erkl\xe4rungen zur Tabelle an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_data")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_data")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Daten an, die f\xfcr die Erstellung der Tabelle verwendet werden."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KoliBriDataType[] \\| string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_headers")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_headers")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die horizontalen und vertikalen Header f\xfcr die Tabelle an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| { horizontal?: KoliBriTableHeaderCell[][] \\| undefined; vertical?: KoliBriTableHeaderCell[][] \\| undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_minWidth")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_min-width")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, die minimale Breite der Tabelle an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_pagination")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_pagination")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Daten geteilt in Seiten angezeigt wird."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| string \\| undefined \\| { _page: number; } & { _on?: KoliBriPaginationButtonCallbacks \\| undefined; _page?: number \\| undefined; _total?: number \\| undefined; _customClass?: string \\| undefined; _variant?: KoliBriButtonVariant \\| undefined; _boundaryCount?: number \\| undefined; _hasButtons?: boolean \\| Stringified<PaginationHasButton> \\| undefined; _pageSize?: number \\| undefined; _pageSizeOptions?: Stringified<number[]> \\| undefined; _siblingCount?: number \\| undefined; _tooltipAlign?: Alignment \\| undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-color")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Default radius of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-width")),(0,r.kt)("td",{parentName:"tr",align:null},"Default width of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-danger")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the danger.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-error")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-ghost")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the ghost.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-info")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the info.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-normal")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the normal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-primary")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the primary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-secondary")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the secondary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-success")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the success.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-text")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-visited")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the visited.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-warning")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the warning.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-font-family")),(0,r.kt)("td",{parentName:"tr",align:null},"Default font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-font-size")),(0,r.kt)("td",{parentName:"tr",align:null},"Default font size.")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./button"},"kol-button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./pagination"},"kol-pagination"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-table --\x3e kol-button\n  kol-table --\x3e kol-pagination\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-pagination --\x3e kol-button\n  kol-pagination --\x3e kol-select\n  kol-pagination --\x3e kol-button-wc\n  kol-select --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  style kol-table fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}l.isMDXComponent=!0;var o=n(70816);const d={title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/table",id:"components/table",title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",source:"@site/docs/30-components/table.mdx",sourceDirName:"30-components",slug:"/components/table",permalink:"/docs/components/table",draft:!1,tags:[{label:"Table",permalink:"/docs/tags/table"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Spin",permalink:"/docs/components/spin"},next:{title:"Tabs",permalink:"/docs/components/tabs"}},s={},m=[{value:"Beispiele",id:"beispiele",level:2},{value:"Datum in Spalte sortieren",id:"datum-in-spalte-sortieren",level:3},{value:"Render Cell",id:"render-cell",level:3}],k={toc:m};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)("h3",{id:"datum-in-spalte-sortieren"},"Datum in Spalte sortieren"),(0,r.kt)(o._,{component:"table",sample:"sort-date",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"render-cell"},"Render Cell"),(0,r.kt)(o._,{component:"table",sample:"render-cell",mdxType:"Configurator"}))}b.isMDXComponent=!0}}]);