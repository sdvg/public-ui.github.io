"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3802],{83225:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(26054),l=n(50959);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},u=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:u,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:r(c,t,n,p.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:r(c,t,n,p.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:r(c,t,n,p.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:r(c,t,n,p.webcomponent)})))}},52973:(e,t,n)=>{n.d(t,{_:()=>f});var a=n(29428),l=n(26054),r=n(50959),i=n(46618);function o(e){const{attribute:t,label:n,update:a,value:i}=e,[o,d]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),[m,p]=(0,r.useState)(""),[u,k]=(0,r.useState)("");let g=!1,b=!1,h=!1,N=!1;t.type.includes("KoliBriAllIcon")?(g=!0,b=!0,h=!0,N=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,N=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,b=!0)),(0,r.useEffect)((()=>{if(!o||s||m||u){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),m&&(e.top=`codicon codicon-${m}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,s,m,u]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,g?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",b?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",h?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>p(e)}}))))):"",N?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function d(e){const{label:t,name:n,update:a,value:i}=e;return(0,r.useEffect)((()=>{i||a(n,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function s(e){const{name:t,label:n,types:a,update:i,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>i(t,n[0])},_value:o},n)}function c(e){const{attribute:t,update:n,value:a}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(d,{name:t.name,label:c,update:n,value:a});case"_icon":return r.createElement(o,{attribute:t,label:c,update:n,value:a});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},c);case"number":return r.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},c);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},c);default:return e.length>1?r.createElement(s,{label:c,name:t.name,types:e,update:n,value:a}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return r.createElement(r.Fragment,null,c)}var m=n(45413),p=n(77192),u=n(85630),k=n.n(u);function g(e){const{tag:t,params:n}=e;let a="";const l=(0,r.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[r,s]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(s){let e="";switch(typeof s){case"string":e=` ${r}="${s.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${s.toString()}"`;break;case"boolean":e=s?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(s)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const i=`<kol-${t}${a}>${l}</kol-${t}>`;let o;try{o=(0,p.format)(i,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(d){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${i}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?r.createElement(a,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n),": ",t,r.createElement("br",null),r.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const N=["_smart-button","_icon-align"];function f(e){const[t,n]=(0,r.useState)({}),[o,d]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const s=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){n((n=>{const a={...n[o],[e]:t};return console.log(a),{...n,[o]:a}}))}const p=Object.values(a.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2 inline-block"},r.createElement(b,{tag:o,params:s})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(g,{params:s,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},p&&p.attributes.map((e=>r.createElement(r.Fragment,null,!N.includes(e.name)&&r.createElement(c,{key:e.name,attribute:e,update:m,value:s[e.name]})))),p&&0===p.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},p&&p.slots.map((e=>r.createElement(h,{key:e.name,description:e.description,name:e.name,update:m,value:s["slot-"+e.name]}))),p&&0===p.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},67069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>k});var a=n(15882),l=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift",id:"\xfcberschrift",level:3},{value:"Gr\xf6\xdfe der \xdcberschrift",id:"gr\xf6\xdfe-der-\xfcberschrift",level:3},{value:"Anzeigen des Toasts",id:"anzeigen-des-toasts",level:3},{value:"Anzeigedauer des Toast",id:"anzeigedauer-des-toast",level:3},{value:"Anzeigetyp des Toast",id:"anzeigetyp-des-toast",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mit der ",(0,l.kt)("strong",{parentName:"p"},"Toast"),"-Komponente geben Sie ein optisches Feedback an die Nutzer:innen. Sie wird nur f\xfcr einen kurzen Zeitraum am Kopf des Browserfenster angezeigt und verschwindet danach automatisch."),(0,l.kt)("p",null,"Ein ",(0,l.kt)("strong",{parentName:"p"},"Toast")," wird nach dem Laden der Webseite am oberen Rand des Browserfenster f\xfcr zehn Sekunden angezeigt. Mit Ausblenden des ",(0,l.kt)("strong",{parentName:"p"},"Toasts")," wird dieser automatisch aus dem DOM entfernt. Wird er erneut ben\xf6tigt, muss er z.B. \xfcber eine JavaScript-Funktion nachgeladen werden."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-alert _heading="Erfolg" _type="success">Hier wird der Erfolg n\xe4her beschrieben.</kol-alert>\n<kol-alert _type="success" _show="false">Hier wird der Erfolg n\xe4her beschrieben.</kol-alert>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("div",{className:"d-grid gap-2"},(0,l.kt)("kol-alert",{_heading:"Erfolg",_type:"success"},"Hier wird der Erfolg n\xe4her beschrieben."),(0,l.kt)("kol-alert",{_type:"success",_show:"false"},"Hier wird der Erfolg n\xe4her beschrieben.")),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"\xfcberschrift"},"\xdcberschrift"),(0,l.kt)("p",null,"Verwenden Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_heading")),", um die \xdcberschrift des Toasts zu bestimmen."),(0,l.kt)("h3",{id:"gr\xf6\xdfe-der-\xfcberschrift"},"Gr\xf6\xdfe der \xdcberschrift"),(0,l.kt)("p",null,"Verwenden Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_level")),", um die \xdcberschriftenebene zu setzen."),(0,l.kt)("h3",{id:"anzeigen-des-toasts"},"Anzeigen des Toasts"),(0,l.kt)("p",null,"Verwenden Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_show")),", um den Toast manuell anzuzeigen."),(0,l.kt)("h3",{id:"anzeigedauer-des-toast"},"Anzeigedauer des Toast"),(0,l.kt)("p",null,"Verwenden Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_showDuration")),", um die Anzeigedauer des Toasts festzulegen."),(0,l.kt)("h3",{id:"anzeigetyp-des-toast"},"Anzeigetyp des Toast"),(0,l.kt)("p",null,"Verwenden Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_type")),", um den Typ des Toasts festzulegen. M\xf6gliche Werte sind:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"error")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"success")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"warning"))),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alert")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alert")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Screenreader die Meldung vorlesen soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hasCloser")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_has-closer")),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiviert das Schlie\xdfen-Icon."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_heading")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_heading")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Titel der Meldung an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_level")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_level")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen H-Level von 1 bis 6 die \xdcberschrift hat."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Toasts an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Toast eingeblendet wird."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_showDuration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show-duration")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Millisekunden der Toast eingeblendet werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob es sich um eine Erfolgs-, Info-, Warnung- oder Fehlermeldung handelt."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"default"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"error"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"info"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'default'"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Der Inhalt der Meldung.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./alert"},"kol-alert"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-toast --\x3e kol-alert\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  style kol-toast fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var d=n(83225),s=n(52973);const c={title:"Toast",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",tags:["Toast","Beschreibung","Spezifikation","Beispiele"]},m=void 0,p={unversionedId:"components/toast",id:"components/toast",title:"Toast",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",source:"@site/docs/30-components/toast.mdx",sourceDirName:"30-components",slug:"/components/toast",permalink:"/docs/components/toast",draft:!1,tags:[{label:"Toast",permalink:"/docs/tags/toast"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Toast",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",tags:["Toast","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Textarea",permalink:"/docs/components/textarea"},next:{title:"Tooltip",permalink:"/docs/components/tooltip"}},u={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:k},b="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(s._,{component:"toast",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(d._,{component:"toast",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);