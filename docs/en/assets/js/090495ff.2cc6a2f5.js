"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[87440],{71703:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(72526),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,p]=(0,l.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},c=`/sample-react/#/${t}/${n}?hideMenus`,k={onSelect:(e,t)=>{switch(t){case 1:p((()=>"Angular"));break;case 2:p((()=>"React"));break;case 3:p((()=>"Vue"));break;case 4:p((()=>"Web Component"));break;default:p((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_label:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:c,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:i(s,t,n,u.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:i(s,t,n,u.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:i(s,t,n,u.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:i(s,t,n,u.webcomponent)})))}},39351:(e,t,n)=>{n.d(t,{_:()=>_});var a=n(99439),l=n(72526),i=n(50959),r=n(2561);function o(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_label:"",_on:{onChange:(e,t)=>a(n,t)},_value:r},i.createElement("span",{slot:"expert"},t))}function d(e){const{attribute:t,label:n,update:a}=e,[r,o]=(0,i.useState)(""),[d,p]=(0,i.useState)(""),[s,m]=(0,i.useState)(""),[u,c]=(0,i.useState)("");let k=!1,b=!1,N=!1,g=!1;t.type.includes("KoliBriAllIcon")?(k=!0,b=!0,N=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(N=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,b=!0)),(0,i.useEffect)((()=>{if(!r||d||s||u){const e={};r&&(e.left=`codicon codicon-${r}`),d&&(e.right=`codicon codicon-${d}`),s&&(e.top=`codicon codicon-${s}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${r}`)}),[r,d,s,u]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,k?i.createElement(l.ox,{_label:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",b?i.createElement(l.ox,{_label:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"",N?i.createElement(l.ox,{_label:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}}))))):"",g?i.createElement(l.ox,{_label:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"")}function p(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function p(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(p))):d.push(...a.filter((e=>"undefined"!==e)).map(p)),i.createElement(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o?[o]:void 0},i.createElement("span",{slot:"expert"},n))}function s(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),s=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=i.createElement(l.T5,{_label:t.description},t.name);switch(t.name){case"_color":return i.createElement(o,{name:t.name,label:s,update:n,value:a});case"_icon":return i.createElement(d,{attribute:t,label:s,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},i.createElement("span",{slot:"expert"},s));case"number":return i.createElement(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},i.createElement("span",{slot:"expert"},s));case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:!0===a,_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},i.createElement("span",{slot:"expert"},s));default:return e.length>1?i.createElement(p,{label:s,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,s)}var m=n(22115),u=n(77192),c=n(85630),k=n.n(c);function b(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,m]of o)if(m){let e="";switch(typeof m){case"string":e=` ${i}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${m.toString()}"`;break;case"boolean":e=m?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${r}</kol-${t}>`;let p;try{p=(0,u.format)(d,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(s){p=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:p}))}function N(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.KolPopover,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.KolToast,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function g(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"],h={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==h[n]?.[t.name]&&(e[n][t.name]=h[n][t.name])})),t.slots.forEach((t=>{const a=`slot-${t.name||"default"}`,l=h[n]?.[a];l&&(e[n][a]=l)}))})),e}()),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const p=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(N,{tag:o,params:p})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(b,{params:p,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},u&&u.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&i.createElement(s,{key:e.name,attribute:e,update:m,value:p[e.name]})))),u&&0===u.attributes.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},u&&u.slots.map((e=>i.createElement(g,{key:e.name,description:e.description,name:e.name||"default",update:m,value:p["slot-"+(e.name||"default")]}))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},99717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var a=n(97605),l=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("kol-badge",{_label:"untested"})," Diese neue Komponente wird als ungetestet markiert, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten auch erst nach einem abgeschlossenen Release erfolgen.")),(0,l.kt)("p",null,'Die SplitButton-Komponente kann genutzt werden, um einen zweigeteilten Button darzustellen. Dabei wird der Prim\xe4r-Button\n\xfcblicherweise f\xfcr eine Haupt-Aktion genutzt, w\xe4hrend der sekund\xe4re Button ein Kontext-Men\xfc ("Popover") \xf6ffnet, hinter\ndem sich weitere Aktionen verbergen.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Der Sekund\xe4r-Button togglet grunds\xe4tzlich das Kontextmen\xfc."),(0,l.kt)("li",{parentName:"ul"},"F\xfcr den Prim\xe4r-Button kann ein individueller Event-Handler hinterlegt werden, wird dies nicht getan togglet er ebenfalls das Kontextmen\xfc.")),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-split-button _label="Split-Button">Split-Button Popover</kol-split-button>\n')),(0,l.kt)("p",null,"Initial ge\xf6ffnet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-split-button _label="Split-Button" _show-dropdown>Split-Button Popover</kol-split-button>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("kol-split-button",{_label:"Split-Button"},"Split-Button Popover"),(0,l.kt)("kol-split-button",{_label:"Split-Button","_show-dropdown":!0},"Split-Button Popover"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which key combination can be used to trigger or focus the interactive element of the component."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaControls")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-controls")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which elements are controlled by this component. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaExpanded")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-expanded")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether the interactive element of the component expanded something. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use _label instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Setzt die semantische Beschriftung der Komponente."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaSelected")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-selected")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether the interactive element of the component is selected (e.g. role=tab). (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_customClass")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_custom-class")),(0,l.kt)("td",{parentName:"tr",align:null},'Defines the custom class attribute if _variant="custom" is set.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Makes the element not focusable and ignore all events."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Use _icons.",(0,l.kt)("br",null),(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KoliBriHorizontalIcons & KoliBriVerticalIcons")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icons")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the icon classnames (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},'_icons="fa-solid fa-user"'),")."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KoliBriHorizontalIcons & KoliBriVerticalIcons")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the internal ID of the primary component element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the technical name of an input field."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the callback functions for button events."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClick?: EventValueOrEventCallback<MouseEvent, StencilUnknown>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; onMouseDown?: EventCallback<MouseEvent>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_role")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_role")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the role of the components primary element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"link"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"tab"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show")),(0,l.kt)("td",{parentName:"tr",align:null},"Makes the element show up."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_showDropdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show-dropdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use _show instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Defines whether to show the dropdown menu."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which tab-index the primary element of the component has. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines where to show the Tooltip preferably: top, right, bottom or left."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines either the type of the component or of the components interactive element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"reset"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"submit"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the value that the button emits on click."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which variant should be used for presentation."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"custom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"ghost"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"normal"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'normal'"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTMLs in das dropdown.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-split-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  style kol-split-button fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;n(71703);var d=n(39351);const p={title:"Split-Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Split-Button-Komponente.",tags:["Split-Button","Beschreibung","Spezifikation","Beispiele"]},s=void 0,m={unversionedId:"components/split-button",id:"version-1.7/components/split-button",title:"Split-Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Split-Button-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/split-button.mdx",sourceDirName:"30-components",slug:"/components/split-button",permalink:"/en/docs/components/split-button",draft:!1,tags:[{label:"Split-Button",permalink:"/en/docs/tags/split-button"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"1.7",frontMatter:{title:"Split-Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Split-Button-Komponente.",tags:["Split-Button","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Spin",permalink:"/en/docs/components/spin"},next:{title:"Table",permalink:"/en/docs/components/table"}},u={},c=[{value:"Live-Editor",id:"live-editor",level:2}],k={toc:c},b="wrapper";function N(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(d._,{component:"split-button",mdxType:"LiveEditorCompact"}))}N.isMDXComponent=!0}}]);