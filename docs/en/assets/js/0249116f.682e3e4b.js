"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6110],{94328:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(4012),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},c=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:c,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:i(m,t,n,u.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:i(m,t,n,u.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:i(m,t,n,u.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:i(m,t,n,u.webcomponent)})))}},57614:(e,t,n)=>{n.d(t,{_:()=>f});var a=n(25734),l=n(4012),i=n(50959),r=n(42401);function o(e){const{attribute:t,label:n,update:a,value:r}=e,[o,d]=(0,i.useState)(""),[s,m]=(0,i.useState)(""),[p,u]=(0,i.useState)(""),[c,k]=(0,i.useState)("");let g=!1,b=!1,N=!1,h=!1;t.type.includes("KoliBriAllIcon")?(g=!0,b=!0,N=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(N=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,b=!0)),(0,i.useEffect)((()=>{if(!o||s||p||c){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),p&&(e.top=`codicon codicon-${p}`),c&&(e.bottom=`codicon codicon-${c}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,s,p,c]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,g?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",b?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",N?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function d(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o},n)}function m(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(d,{name:t.name,label:m,update:n,value:a});case"_icon":return i.createElement(o,{attribute:t,label:m,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return i.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?i.createElement(s,{label:m,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,m)}var p=n(45413),u=n(77192),c=n(85630),k=n.n(c);function g(e){const{tag:t,params:n}=e;let a="";const l=(0,i.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[i,s]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(s){let e="";switch(typeof s){case"string":e=` ${i}="${s.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${s.toString()}"`;break;case"boolean":e=s?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(s)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const r=`<kol-${t}${a}>${l}</kol-${t}>`;let o;try{o=(0,u.format)(r,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(d){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${r}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(p.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function N(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n),": ",t,i.createElement("br",null),i.createElement(p.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const h=["_smart-button","_icon-align"];function f(e){const[t,n]=(0,i.useState)({}),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&p("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&p("_heading","Heading-Text")}),[o]);const s=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function p(e,t){n((n=>{const a={...n[o],[e]:t};return console.log(a),{...n,[o]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(b,{tag:o,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(g,{params:s,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},u&&u.attributes.map((e=>i.createElement(i.Fragment,null,!h.includes(e.name)&&i.createElement(m,{key:e.name,attribute:e,update:p,value:s[e.name]})))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},u&&u.slots.map((e=>i.createElement(N,{key:e.name,description:e.description,name:e.name,update:p,value:s["slot-"+e.name]}))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},12263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>m,metadata:()=>u,toc:()=>k});var a=n(15882),l=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mit Hilfe der ",(0,l.kt)("strong",{parentName:"p"},"Paginierung"),"-Komponente lassen sich umfangreiche, aufgeteilte Inhalte, wie zum Beispiel Suchergebnisse, der Reihe nach durchlaufen."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <kol-pagination _total="100" _page="6"></kol-pagination>\n    <kol-pagination _total="100" _page="6" _sibling-count="2"></kol-pagination>\n    <kol-pagination _total="100" _page="6" _sibling-count="0" _boundary-count="2"></kol-pagination>\n</div>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("div",{className:"grid gap-2"},(0,l.kt)("kol-heading",{_level:"3",_label:"Standardausgabe nur mit aktuellem Element"}),(0,l.kt)("kol-pagination",{_total:"100",_page:"6","_has-buttons":"false"}),(0,l.kt)("kol-heading",{_level:"3",_label:"Ausgabe 2 Elemente links und rechts dem aktuellen Element (_sibling)"}),(0,l.kt)("kol-pagination",{_total:"100",_page:"6","_sibling-count":"2"}),(0,l.kt)("kol-heading",{_level:"3",_label:"Ausgabe 2 Elemente links und rechts (_boundary-count)"}),(0,l.kt)("kol-pagination",{_total:"100",_page:"6","_sibling-count":"0","_boundary-count":"2"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Paginierung"),"-Komponente kann \xfcber Ihre Properties konfiguriert werden."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Das Attribut ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"_total"))," bestimmt die Gesamtanzahl der Elemente."),(0,l.kt)("li",{parentName:"ul"},"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"boundary-count"))," wird die Anzahl von Elementen bestimmt, die in der ",(0,l.kt)("strong",{parentName:"li"},"Paginierung"),"-Komponente rechts und links angezeigt werden, w\xe4hrend die \xfcbrigen Elemente"),(0,l.kt)("li",{parentName:"ul"},"Das Attribut ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"_page"))," legt das gerade aktive Element fest. Dieses wird farblich hervorgehoben dargestellt."),(0,l.kt)("li",{parentName:"ul"},"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"_sibling-count"))," kann festgelegt werden, wie viele Elemente jeweils links und rechts des Aktuellen angezeigt werden sollen.")),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Paginierung"),"-Komponente kann auf vielf\xe4ltige Art eingesetzt werden. Insbesondere dort, wo auf einer Inhaltsseite umfangreiche Inhalte dargestellt werden sollen, tr\xe4gt sie zur Verbesserung der Struktur und \xdcbersichtlichkeit bei.\nKlassische Anwendungsbereiche einer Paginierung sind z.B. Blog-\xe4hnliche Inhalte, Listen und Tabellen. Auch f\xfcr bestimmte Navigationsaufgaben innerhalb einer Seite kann die Paginierung gut verwendet werden."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_boundaryCount")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_boundary-count")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Seiten neben den am Rand liegenden Pfeil-Schaltern angezeigt werden sollen."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_customClass")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_custom-class")),(0,l.kt)("td",{parentName:"tr",align:null},'Gibt an, welche Custom-Class \xfcbergeben werden soll, wenn _variant="custom" gesetzt ist.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hasButtons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_has-buttons")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Sichtbarkeit der Anfang/zur\xfcck/weiter/Ende-Schaltfl\xe4chen."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ first: boolean; last: boolean; next: boolean; previous: boolean; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, auf welche Callback-Events reagiert werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ onChangePage?: EventValueOrEventCallback<Event, number>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; onChangePageSize?: EventValueOrEventCallback<Event, number>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; onClick?: EventValueOrEventCallback<Event, number>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_page")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_page")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Seite aktuell ausgew\xe4hlt ist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pageSize")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_page-size")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Eintr\xe4ge pro Seite angezeigt werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pageSizeOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_page-size-options")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Optionen f\xfcr das Seitenl\xe4ngenselect."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number[]")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_siblingCount")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_sibling-count")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Seiten neben der aktuell Ausgew\xe4hlten angezeigt werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip oben, rechts, unten oder links angezeigt werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_total")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_total")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Gesamtanzahl der Seiten."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Button-Variante verwendet werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"custom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"ghost"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"normal"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'normal'"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./table"},"kol-table"))),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./button"},"kol-button")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./select"},"kol-select")),(0,l.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-pagination --\x3e kol-button\n  kol-pagination --\x3e kol-select\n  kol-pagination --\x3e kol-button-wc\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-select --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-table --\x3e kol-pagination\n  style kol-pagination fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var d=n(94328),s=n(57614);const m={title:"Pagination",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Pagination-Komponente.",tags:["Pagination","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/pagination",id:"components/pagination",title:"Pagination",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Pagination-Komponente.",source:"@site/docs/30-components/pagination.mdx",sourceDirName:"30-components",slug:"/components/pagination",permalink:"/en/docs/components/pagination",draft:!1,tags:[{label:"Pagination",permalink:"/en/docs/tags/pagination"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Pagination",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Pagination-Komponente.",tags:["Pagination","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Nav",permalink:"/en/docs/components/nav"},next:{title:"Popover",permalink:"/en/docs/components/popover"}},c={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:k},b="wrapper";function N(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(s._,{component:"pagination",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(d._,{component:"pagination",sample:"basic",mdxType:"Configurator"}))}N.isMDXComponent=!0}}]);