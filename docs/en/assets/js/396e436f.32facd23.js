"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[13137],{71703:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(72526),r=n(50959);const l=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,m]=(0,r.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",c=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,d={angular:`${c}.html`,react:`${c}.tsx`,vue:`${c}.vue`,webcomponent:`${c}.html`},p=`/sample-react/#/${t}/${n}?hideMenus`,g={onSelect:(e,t)=>{switch(t){case 1:m((()=>"Angular"));break;case 2:m((()=>"React"));break;case 3:m((()=>"Vue"));break;case 4:m((()=>"Web Component"));break;default:m((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_label:"Code-Beispiel",_on:g,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===s&&r.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),r.createElement("div",null,"Angular"===s&&r.createElement(o,{url:l(u,t,n,d.angular)})),r.createElement("div",null,"React"===s&&r.createElement(o,{url:l(u,t,n,d.react)})),r.createElement("div",null,"Vue"===s&&r.createElement(o,{url:l(u,t,n,d.vue)})),r.createElement("div",null,"Web Component"===s&&r.createElement(o,{url:l(u,t,n,d.webcomponent)})))}},39351:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(99439),r=n(72526),l=n(50959),i=n(2561);function o(e){const{label:t,name:n,update:a,value:i}=e;return(0,l.useEffect)((()=>{i||a(n,"#000000")}),[]),l.createElement(r.Np,{_label:"",_on:{onChange:(e,t)=>a(n,t)},_value:i},l.createElement("span",{slot:"expert"},t))}function s(e){const{attribute:t,label:n,update:a}=e,[i,o]=(0,l.useState)(""),[s,m]=(0,l.useState)(""),[u,c]=(0,l.useState)(""),[d,p]=(0,l.useState)("");let g=!1,b=!1,k=!1,f=!1;t.type.includes("KoliBriAllIcon")?(g=!0,b=!0,k=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(k=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,b=!0)),(0,l.useEffect)((()=>{if(!i||s||u||d){const e={};i&&(e.left=`codicon codicon-${i}`),s&&(e.right=`codicon codicon-${s}`),u&&(e.top=`codicon codicon-${u}`),d&&(e.bottom=`codicon codicon-${d}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${i}`)}),[i,s,u,d]);const h=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return l.createElement("div",null,n,g?l.createElement(r.ox,{_label:"Links"},l.createElement("div",{className:"flex flex-wrap"},h.map((e=>l.createElement(r.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",b?l.createElement(r.ox,{_label:"Rechts"},l.createElement("div",{className:"flex flex-wrap"},h.map((e=>l.createElement(r.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}}))))):"",k?l.createElement(r.ox,{_label:"Oben"},l.createElement("div",{className:"flex flex-wrap"},h.map((e=>l.createElement(r.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"",f?l.createElement(r.ox,{_label:"Unten"},l.createElement("div",{className:"flex flex-wrap"},h.map((e=>l.createElement(r.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function m(e){const{name:t,label:n,types:a,update:i,value:o}=e,s=[];function m(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(m))):s.push(...a.filter((e=>"undefined"!==e)).map(m)),l.createElement(r.r7,{className:"my-2",_label:"",_options:JSON.stringify(s),_on:{onChange:(e,n)=>i(t,n[0])},_value:o?[o]:void 0},l.createElement("span",{slot:"expert"},n))}function u(e){const{attribute:t,update:n,value:a}=e,i=(0,l.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,l.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),u=l.createElement(r.T5,{_label:t.description},t.name);switch(t.name){case"_color":return l.createElement(o,{name:t.name,label:u,update:n,value:a});case"_icon":return l.createElement(s,{attribute:t,label:u,update:n,value:a});default:switch(i){case"string":return l.createElement(r.WD,{className:"my-2",_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},l.createElement("span",{slot:"expert"},u));case"number":return l.createElement(r.c2,{className:"my-2",_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},l.createElement("span",{slot:"expert"},u));case"boolean":return l.createElement(r.TE,{className:"my-2",_checked:!0===a,_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},l.createElement("span",{slot:"expert"},u));default:return e.length>1?l.createElement(m,{label:u,name:t.name,types:e,update:n,value:a}):l.createElement("p",null,"Attribut: '",t.name,"'",l.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return l.createElement(l.Fragment,null,u)}var c=n(22115),d=n(77192),p=n(85630),g=n.n(p);function b(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let r="";const i=(0,l.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[l,c]of o)if(c){let e="";switch(typeof c){case"string":e=` ${l}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${c.toString()}"`;break;case"boolean":e=c?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const s=`<kol-${t}${r}>${i}</kol-${t}>`;let m;try{m=(0,d.format)(s,{plugins:[g()],printWidth:80}).replace(/;\n$/,"")}catch(u){m=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return l.createElement("div",{className:"h-48 rounded-md overflow-hidden"},l.createElement(c.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:m}))}function k(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),a={abbr:r.T5,accordion:r.RZ,alert:r.K5,avatar:r.Ek,badge:r.Er,breadcrumb:r.lo,button:r.ic,"button-group":r.uz,"button-link":r.f6,card:r.Gc,details:r.ox,form:r.m5,heading:r.HA,icon:r.Jl,image:r.Cd,"indented-text":r.CV,"input-checkbox":r.TE,"input-color":r.Np,"input-date":r.O,"input-email":r.Lj,"input-file":r.CX,"input-number":r.c2,"input-password":r.z5,"input-radio":r.sy,"input-range":r.TQ,"input-text":r.WD,kolibri:r.Vs,link:r.Nv,"link-button":r.Kc,"link-group":r.$o,logo:r.QK,modal:r.Ud,nav:r.MA,pagination:r.Q4,popover:r.KolPopover,progress:r.WR,quote:r.VZ,select:r.r7,"skip-nav":r.P,spin:r.qq,"split-button":r.KJ,symbol:r.is,table:r.Vp,tabs:r.UD,textarea:r.Qs,toast:r.KolToast,version:r.u_}[e.tag];return a?l.createElement(a,t,n.map((e=>l.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):l.createElement("div",null,"Tag not implemented")}function f(e){const{description:t,name:n,update:a,value:r}=e;return l.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},l.createElement("b",null,n||"default"),": ",t,l.createElement("br",null),l.createElement(c.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r}))}const h=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[t,n]=(0,l.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==_[n]?.[t.name]&&(e[n][t.name]=_[n][t.name])})),t.slots.forEach((t=>{const a=`slot-${t.name||"default"}`,r=_[n]?.[a];r&&(e[n][a]=r)}))})),e}()),[o,s]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&c("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&c("_heading","Heading-Text")}),[o]);const m=(0,l.useMemo)((()=>t[o]||{}),[t,o]);function c(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const d=Object.values(a.p).find((e=>e.name===`kol-${o}`));return l.createElement(i.Z,null,(()=>l.createElement(l.Fragment,null,l.createElement(r.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),l.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},l.createElement(r.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},l.createElement("div",{className:"p-2"},l.createElement(k,{tag:o,params:m})),l.createElement("div",{className:"lg:col-span-2"},l.createElement(b,{params:m,tag:o}))),l.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},l.createElement(r.HA,{_level:3,_label:"Konfigurator"}),l.createElement("div",null,l.createElement(r.HA,{_level:4,_label:"Properties"}),l.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},d&&d.attributes.map((e=>l.createElement(l.Fragment,null,!h.includes(e.name)&&!e.description.startsWith("Deprecated:")&&l.createElement(u,{key:e.name,attribute:e,update:c,value:m[e.name]})))),d&&0===d.attributes.length&&l.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),l.createElement(r.HA,{_level:4,_label:"Slots"}),l.createElement("div",{className:"max-h-56 p-2 overflow-auto"},d&&d.slots.map((e=>l.createElement(f,{key:e.name,description:e.description,name:e.name||"default",update:c,value:m["slot-"+(e.name||"default")]}))),d&&0===d.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},50707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var a=n(97605),r=(n(50959),n(17942));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mit Hilfe der ",(0,r.kt)("strong",{parentName:"p"},"Logo"),"-Komponente k\xf6nnen an beliebigen Positionen die Logos verschiedener Bundesinstitutionen ausgegeben werden. Das Logo wird dabei aus einer Sammlung von SVG-Grafiken zusammengesetzt, die fertig konstruiert vorliegen."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-logo _org_="BReg"></kol-logo>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,(0,r.kt)("kol-logo",{_org_:"BReg"})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("p",null,"Das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_org"))," wird f\xfcr die Definition des gew\xfcnschten Logos verwendet. Es sind folgende Parameter m\xf6glich:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BReg")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Die Bundesregierung"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMF")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium der Finanzen"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMI")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium des Innern, f\xfcr Bau und Heimat"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AA")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Ausw\xe4rtiges Amt"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMWi")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Wirtschaft und Energie"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMJV")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium der Justiz und f\xfcr Verbraucherschutz"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMAS")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Arbeit und Soziales"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMVg")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium der Verteidigung"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMEL")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Ern\xe4hrung und Landwirtschaft"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMFSFJ")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Familie, Senioren, Frauen und Jugend"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMG")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Gesundheit"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMVI")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Verkehr und digitale Infrastruktur"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMU")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Umwelt, Naturschutz und nukleare Sicherheit"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMBF")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Bildung und Forschung"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMZ")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr wirtschaftliche Zusammenarbeit und Entwicklung"))),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_abbr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_abbr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Property ","_","org.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt die Abk\xfcrzung eines Ministeriums, eines Amts oder einer Bundesanstalt an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bundesamt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Bundesanstalt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Bundesministerium")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_org")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_org")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Abk\xfcrzung eines Ministeriums, eines Amts oder einer Bundesanstalt an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bundesamt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Bundesanstalt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Bundesministerium")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("hr",null))}o.isMDXComponent=!0;var s=n(71703),m=n(39351);const u={title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",tags:["Logo","Beschreibung","Spezifikation","Beispiele"]},c=void 0,d={unversionedId:"components/logo",id:"version-1.5/components/logo",title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/logo.mdx",sourceDirName:"30-components",slug:"/components/logo",permalink:"/en/docs/1.5/components/logo",draft:!1,tags:[{label:"Logo",permalink:"/en/docs/1.5/tags/logo"},{label:"Beschreibung",permalink:"/en/docs/1.5/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.5/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",tags:["Logo","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Link",permalink:"/en/docs/1.5/components/link"},next:{title:"Modal",permalink:"/en/docs/1.5/components/modal"}},p={},g=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],b={toc:g},k="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,r.kt)(m._,{component:"logo",mdxType:"LiveEditorCompact"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(s._,{component:"logo",sample:"basic",mdxType:"Configurator"}))}f.isMDXComponent=!0}}]);