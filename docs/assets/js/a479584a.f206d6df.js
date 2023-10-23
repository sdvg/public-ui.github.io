"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[38304],{9091:(e,t,n)=>{n.d(t,{_:()=>s});var l=n(90200),a=n(50959);const i=function(e,t,n,l,a){return void 0===a&&(a="editor"),`${e}&module=${l}&initialpath=%23%2F${t}%2F${n}&view=${a}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(l.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,c]=(0,a.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},m=`/sample-react/#/${t}/${n}?hideMenus`,k={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return a.createElement(l.UD,{className:"w-full",_label:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===s&&a.createElement("iframe",{src:m,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),a.createElement("div",null,"Angular"===s&&a.createElement(o,{url:i(p,t,n,u.angular)})),a.createElement("div",null,"React"===s&&a.createElement(o,{url:i(p,t,n,u.react)})),a.createElement("div",null,"Vue"===s&&a.createElement(o,{url:i(p,t,n,u.vue)})),a.createElement("div",null,"Web Component"===s&&a.createElement(o,{url:i(p,t,n,u.webcomponent)})))}},25433:(e,t,n)=>{n.d(t,{_:()=>_});var l=n(67478),a=n(90200),i=n(50959),r=n(60112);function o(e){const{label:t,name:n,update:l,value:r}=e;return(0,i.useEffect)((()=>{r||l(n,"#000000")}),[]),i.createElement(a.Np,{_on:{onChange:(e,t)=>l(n,t)},_value:r},t)}function s(e){const{attribute:t,label:n,update:l}=e,[r,o]=(0,i.useState)(""),[s,c]=(0,i.useState)(""),[p,d]=(0,i.useState)(""),[u,m]=(0,i.useState)("");let k=!1,b=!1,f=!1,h=!1;t.type.includes("KoliBriAllIcon")?(k=!0,b=!0,f=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(f=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,b=!0)),(0,i.useEffect)((()=>{if(!r||s||p||u){const e={};r&&(e.left=`codicon codicon-${r}`),s&&(e.right=`codicon codicon-${s}`),p&&(e.top=`codicon codicon-${p}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&l(t.name,JSON.stringify(e))}else l(t.name,`codicon codicon-${r}`)}),[r,s,p,u]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,k?i.createElement(a.ox,{_label:"Links"},i.createElement("div",{className:"flex flex-wrap"},g.map((e=>i.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",b?i.createElement(a.ox,{_label:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},g.map((e=>i.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"",f?i.createElement(a.ox,{_label:"Oben"},i.createElement("div",{className:"flex flex-wrap"},g.map((e=>i.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}}))))):"",h?i.createElement(a.ox,{_label:"Unten"},i.createElement("div",{className:"flex flex-wrap"},g.map((e=>i.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}}))))):"")}function c(e){const{name:t,label:n,types:l,update:r,value:o}=e,s=[];function c(e){return{label:e,value:e}}return l.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...l.filter((e=>"undefined"!==e)).map(c))):s.push(...l.filter((e=>"undefined"!==e)).map(c)),i.createElement(a.r7,{className:"my-2",_options:JSON.stringify(s),_on:{onChange:(e,n)=>r(t,n[0])},_value:o?[o]:void 0},n)}function p(e){const{attribute:t,update:n,value:l}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),p=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),p=i.createElement(a.T5,{_label:t.description},t.name);switch(t.name){case"_color":return i.createElement(o,{name:t.name,label:p,update:n,value:l});case"_icon":return i.createElement(s,{attribute:t,label:p,update:n,value:l});default:switch(r){case"string":return i.createElement(a.WD,{className:"my-2",_label:"",_on:{onChange:(e,l)=>n(t.name,l)},_value:l||""},p);case"number":return i.createElement(a.c2,{className:"my-2",_label:"",_on:{onChange:(e,l)=>n(t.name,l)},_value:l},p);case"boolean":return i.createElement(a.TE,{className:"my-2",_checked:!0===l,_label:"",_on:{onChange:(e,l)=>n(t.name,l)},_variant:"switch",_value:!0},p);default:return e.length>1?i.createElement(c,{label:p,name:t.name,types:e,update:n,value:l}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,l]);return i.createElement(i.Fragment,null,p)}var d=n(22115),u=n(77192),m=n(85630),k=n.n(m);function b(e){const{tag:t,params:n}=e,l=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let a="";const r=(0,i.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],l=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${l}"`+n.substring(t)}else e+=`<div slot="${l}">${n}</div>`})),e}),[n]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,d]of o)if(d){let e="";switch(typeof d){case"string":e=` ${i}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${d.toString()}"`;break;case"boolean":e=d?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const s=`<kol-${t}${a}>${r}</kol-${t}>`;let c;try{c=(0,u.format)(s,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(p){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(d.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c}))}function f(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),l={abbr:a.T5,accordion:a.RZ,alert:a.K5,avatar:a.Ek,badge:a.Er,breadcrumb:a.lo,button:a.ic,"button-group":a.uz,"button-link":a.f6,card:a.Gc,details:a.ox,form:a.m5,heading:a.HA,icon:a.Jl,image:a.Cd,"indented-text":a.CV,"input-checkbox":a.TE,"input-color":a.Np,"input-date":a.O,"input-email":a.Lj,"input-file":a.CX,"input-number":a.c2,"input-password":a.z5,"input-radio":a.sy,"input-range":a.TQ,"input-text":a.WD,kolibri:a.Vs,link:a.Nv,"link-button":a.Kc,"link-group":a.$o,logo:a.QK,modal:a.Ud,nav:a.MA,pagination:a.Q4,popover:a.hV,progress:a.WR,quote:a.VZ,select:a.r7,"skip-nav":a.P,spin:a.qq,"split-button":a.KJ,symbol:a.is,table:a.Vp,tabs:a.UD,textarea:a.Qs,toast:a.CO,version:a.u_}[e.tag];return l?i.createElement(l,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:l,value:a}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(d.ML,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:a}))}const g=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(l.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==v[n]?.[t.name]&&(e[n][t.name]=v[n][t.name])})),t.slots.forEach((t=>{const l=`slot-${t.name||"default"}`,a=v[n]?.[l];a&&(e[n][l]=a)}))})),e}()),[o,s]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&d("_label","Label-Text");!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&d("_heading","Heading-Text")}),[o]);const c=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function d(e,t){n((n=>{const l={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:l}}))}const u=Object.values(l.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(a.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(a.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(f,{tag:o,params:c})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(b,{params:c,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(a.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(a.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},u&&u.attributes.map((e=>i.createElement(i.Fragment,null,!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&i.createElement(p,{key:e.name,attribute:e,update:d,value:c[e.name]})))),u&&0===u.attributes.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(a.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},u&&u.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name||"default",update:d,value:c["slot-"+(e.name||"default")]}))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},72297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>k});var l=n(52319),a=(n(50959),n(17942));const i={toc:[{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,a.kt)(r,(0,l.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("kol-alert",{_type:"warning"},"Die ",(0,a.kt)("strong",{parentName:"p"},"Tooltip"),"-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird.")),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Tooltip"),"-Komponente implementiert das Gegenst\xfcck zum ",(0,a.kt)("inlineCode",{parentName:"p"},"Aria-Label"),". Es ist also explizit nur daf\xfcr vorgesehen, dem/der Nutzer:in ohne Screenreader die Beschriftung eines Elementes anzuzeigen."),(0,a.kt)("p",null,"Ein ge\xf6ffneter Tooltip l\xe4sst sich mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"Escape"),"-Taste schlie\xdfen, um ggf. \xfcberlagerte Seiteninformationen wieder sichtbar zu machen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hinweis:")," Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht ",(0,a.kt)("inlineCode",{parentName:"p"},"display: inline")," haben."),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("p",null,"Die Tooltip-Komponente wird bei Fokus oder bei Bewegen der Maus \xfcber dem Referenzelement angezeigt und dient ausschlie\xdflich dem/der sehenden Nutzer:in ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xf6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xfcr die Screenreader versteckt."),(0,a.kt)("kol-alert",{_type:"info"},"Aus Sicht des Barrierefreiheitstests k\xf6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird."),(0,a.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_target:"_blank"}))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_align")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_align")),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the alignment of the tooltip in relation to the parent element."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_id")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_id")),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the internal ID of the primary component element."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_label")),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"used-by"},"Used by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./abbr"},"kol-abbr")),(0,a.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-checkbox"},"kol-input-checkbox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-color"},"kol-input-color")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-date"},"kol-input-date")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-email"},"kol-input-email")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-file"},"kol-input-file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-number"},"kol-input-number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-password"},"kol-input-password")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-radio"},"kol-input-radio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-range"},"kol-input-range")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-text"},"kol-input-text")),(0,a.kt)("li",{parentName:"ul"},"kol-link-wc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./select"},"kol-select")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./textarea"},"kol-textarea"))),(0,a.kt)("h3",{id:"depends-on"},"Depends on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kol-span-wc")),(0,a.kt)("h3",{id:"graph"},"Graph"),(0,a.kt)("mermaid",{value:"graph TD;\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-span-wc --\x3e kol-icon\n  kol-abbr --\x3e kol-tooltip-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-input-checkbox --\x3e kol-tooltip-wc\n  kol-input-color --\x3e kol-tooltip-wc\n  kol-input-date --\x3e kol-tooltip-wc\n  kol-input-email --\x3e kol-tooltip-wc\n  kol-input-file --\x3e kol-tooltip-wc\n  kol-input-number --\x3e kol-tooltip-wc\n  kol-input-password --\x3e kol-tooltip-wc\n  kol-input-radio --\x3e kol-tooltip-wc\n  kol-input-range --\x3e kol-tooltip-wc\n  kol-input-text --\x3e kol-tooltip-wc\n  kol-link-wc --\x3e kol-tooltip-wc\n  kol-select --\x3e kol-tooltip-wc\n  kol-textarea --\x3e kol-tooltip-wc\n  style kol-tooltip-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,a.kt)("hr",null))}o.isMDXComponent=!0;var s=n(9091),c=n(25433);const p={title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},d=void 0,u={unversionedId:"components/tooltip",id:"version-1.6/components/tooltip",title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",source:"@site/versioned_docs/version-1.6/30-components/tooltip.mdx",sourceDirName:"30-components",slug:"/components/tooltip",permalink:"/docs/1.6/components/tooltip",draft:!1,tags:[{label:"Tooltip",permalink:"/docs/1.6/tags/tooltip"},{label:"Beschreibung",permalink:"/docs/1.6/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/1.6/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/1.6/tags/beispiele"}],version:"1.6",frontMatter:{title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Toast",permalink:"/docs/1.6/components/toast"},next:{title:"Version",permalink:"/docs/1.6/components/version"}},m={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],b={toc:k},f="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,l.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,a.kt)(c._,{component:"tooltip",mdxType:"LiveEditorCompact"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(s._,{component:"tooltip",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);