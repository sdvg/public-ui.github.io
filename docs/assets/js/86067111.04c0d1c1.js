"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7855],{32708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var l=a(11527),n=a(16034),i=(a(35863),a(94383));const s={title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},r=void 0,o={id:"components/kolibri",title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/kolibri.mdx",sourceDirName:"30-components",slug:"/components/kolibri",permalink:"/docs/1.5/components/kolibri",draft:!1,unlisted:!1,tags:[{label:"KoliBri",permalink:"/docs/1.5/tags/koli-bri"},{label:"Beschreibung",permalink:"/docs/1.5/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/1.5/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputText",permalink:"/docs/1.5/components/input-text"},next:{title:"LinkButton",permalink:"/docs/1.5/components/link-button"}},c={},d=[{value:"Live-Editor",id:"live-editor",level:2}];function u(e){const t={h2:"h2",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(i._,{component:"kolibri"})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},35863:(e,t,a)=>{a.d(t,{_:()=>c});var l=a(65636),n=a(50959),i=a(11527);const s=function(e,t,a,l,n){return void 0===n&&(n="editor"),`${e}&module=${l}&initialpath=%23%2F${t}%2F${a}&view=${n}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return(0,i.jsxs)("div",{className:"m-2",children:[(0,i.jsx)("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.jsx)(l.Nv,{_href:t,_label:"",_target:"codesandbox",children:(0,i.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:t,sample:a}=e;const[c,d]=(0,n.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,b={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},m=`/sample-react/#/${t}/${a}?hideMenus`,h={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return(0,i.jsxs)(l.UD,{className:"w-full",_label:"Code-Beispiel",_on:h,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,i.jsx)("div",{children:"Preview"===c&&(0,i.jsx)("iframe",{src:m,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,i.jsx)("div",{children:"Angular"===c&&(0,i.jsx)(o,{url:s(u,t,a,b.angular)})}),(0,i.jsx)("div",{children:"React"===c&&(0,i.jsx)(o,{url:s(u,t,a,b.react)})}),(0,i.jsx)("div",{children:"Vue"===c&&(0,i.jsx)(o,{url:s(u,t,a,b.vue)})}),(0,i.jsx)("div",{children:"Web Component"===c&&(0,i.jsx)(o,{url:s(u,t,a,b.webcomponent)})})]})}},94383:(e,t,a)=>{a.d(t,{_:()=>j});var l=a(58801),n=a(65636),i=a(50959),s=a(89346),r=a(11527);function o(e){const{label:t,name:a,update:l,value:s}=e;return(0,i.useEffect)((()=>{s||l(a,"#000000")}),[]),(0,r.jsx)(n.Np,{_label:"",_on:{onChange:(e,t)=>l(a,t)},_value:s,children:(0,r.jsx)("span",{slot:"expert",children:t})})}function c(e){const{attribute:t,label:a,update:l}=e,[s,o]=(0,i.useState)(""),[c,d]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[b,m]=(0,i.useState)("");let h=!1,f=!1,g=!1,x=!1;t.type.includes("KoliBriAllIcon")?(h=!0,f=!0,g=!0,x=!0):(t.type.includes("KoliBriVerticalIcon")&&(g=!0,x=!0),t.type.includes("KoliBriHorizontalIcon")&&(h=!0,f=!0)),(0,i.useEffect)((()=>{if(!s||c||u||b){const e={};s&&(e.left=`codicon codicon-${s}`),c&&(e.right=`codicon codicon-${c}`),u&&(e.top=`codicon codicon-${u}`),b&&(e.bottom=`codicon codicon-${b}`),Object.keys(e).length&&l(t.name,JSON.stringify(e))}else l(t.name,`codicon codicon-${s}`)}),[s,c,u,b]);const _=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[a,h?(0,r.jsx)(n.ox,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:_.map((e=>(0,r.jsx)(n.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",f?(0,r.jsx)(n.ox,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:_.map((e=>(0,r.jsx)(n.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",g?(0,r.jsx)(n.ox,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:_.map((e=>(0,r.jsx)(n.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):"",x?(0,r.jsx)(n.ox,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:_.map((e=>(0,r.jsx)(n.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function d(e){const{name:t,label:a,types:l,update:i,value:s}=e,o=[];function c(e){return{label:e,value:e}}return l.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...l.filter((e=>"undefined"!==e)).map(c))):o.push(...l.filter((e=>"undefined"!==e)).map(c)),(0,r.jsx)(n.r7,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onChange:(e,a)=>i(t,a[0])},_value:s?[s]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:a})})}function u(e){const{attribute:t,update:a,value:l}=e,s=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),i=(0,r.jsx)(n.T5,{_label:t.description,children:t.name});switch(t.name){case"_color":return(0,r.jsx)(o,{name:t.name,label:i,update:a,value:l});case"_icons":return(0,r.jsx)(c,{attribute:t,label:i,update:a,value:l});default:switch(s){case"string":return(0,r.jsx)(n.WD,{className:"my-2",_label:"",_on:{onChange:(e,l)=>a(t.name,l)},_value:l||"",children:(0,r.jsx)("span",{slot:"expert",children:i})});case"number":return(0,r.jsx)(n.c2,{className:"my-2",_label:"",_on:{onChange:(e,l)=>a(t.name,l)},_value:l,children:(0,r.jsx)("span",{slot:"expert",children:i})});case"boolean":return(0,r.jsx)(n.TE,{className:"my-2",_checked:!0===l,_label:"",_on:{onChange:(e,l)=>a(t.name,l)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:i})});default:return e.length>1?(0,r.jsx)(d,{label:i,name:t.name,types:e,update:a,value:l}):(0,r.jsxs)("p",{children:["Attribut: '",t.name,"'",(0,r.jsx)("br",{}),"Typ: '",t.type,"'"]})}}}),[t,l]);return(0,r.jsx)(r.Fragment,{children:u})}var p=a(22115),b=a(77192),m=a(85630),h=a.n(m);function f(e){const{tag:t,params:a}=e,l=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let n="";const s=(0,i.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],l=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${l}"`+a.substring(t)}else e+=`<div slot="${l}">${a}</div>`})),e}),[a]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[i,r]of o)if(r){let e="";switch(typeof r){case"string":e=` ${i}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${r.toString()}"`;break;case"boolean":e=r?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}n+=e}const c=`<kol-${t}${n}>${s}</kol-${t}>`;let d;try{d=(0,b.format)(c,{plugins:[h()],printWidth:80}).replace(/;\n$/,"")}catch(u){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(p.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d})})}function g(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),a=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),l={abbr:n.T5,accordion:n.RZ,alert:n.K5,avatar:n.Ek,badge:n.Er,breadcrumb:n.lo,button:n.ic,"button-group":n.uz,"button-link":n.f6,card:n.Gc,details:n.ox,form:n.m5,heading:n.HA,icon:n.Jl,image:n.Cd,"indented-text":n.CV,"input-checkbox":n.TE,"input-color":n.Np,"input-date":n.O,"input-email":n.Lj,"input-file":n.CX,"input-number":n.c2,"input-password":n.z5,"input-radio":n.sy,"input-range":n.TQ,"input-text":n.WD,kolibri:n.Vs,link:n.Nv,"link-button":n.Kc,"link-group":n.$o,logo:n.QK,modal:n.Ud,nav:n.MA,pagination:n.Q4,progress:n.WR,quote:n.VZ,select:n.r7,"skip-nav":n.P,spin:n.qq,"split-button":n.KJ,symbol:n.is,table:n.Vp,tabs:n.UD,textarea:n.Qs,version:n.u_}[e.tag];return l?(0,r.jsx)(l,{...t,children:a.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function x(e){const{description:t,name:a,update:l,value:n}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:a||"default"}),": ",t,(0,r.jsx)("br",{}),(0,r.jsx)(p.ML,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:n})]})}const _=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function j(e){const[t,a]=(0,i.useState)(function(){const e={};return Object.values(l.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[a][t.name]=t.defaultValue.replace(/'/g,""),e[a].defaultValues.push(t.name)),void 0!==v[a]?.[t.name]&&(e[a][t.name]=v[a][t.name])})),t.slots.forEach((t=>{const l=`slot-${t.name||"default"}`,n=v[a]?.[l];n&&(e[a][l]=n)}))})),e}()),[o,c]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&p("_label","Label-Text");!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&p("_heading","Heading-Text")}),[o]);const d=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function p(e,t){a((a=>{const l={...a[o],[e]:t,defaultValues:a[o].defaultValues.filter((t=>t!==e))};return{...a,[o]:l}}))}const b=Object.values(l.p).find((e=>e.name===`kol-${o}`));return(0,r.jsx)(s.Z,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(n.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(g,{tag:o,params:d})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(f,{params:d,tag:o})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(n.HA,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(n.HA,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[b&&b.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!_.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(u,{attribute:e,update:p,value:d[e.name]},e.name)}))),b&&0===b.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(n.HA,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[b&&b.slots.map((e=>(0,r.jsx)(x,{description:e.description,name:e.name||"default",update:p,value:d["slot-"+(e.name||"default")]},e.name))),b&&0===b.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);