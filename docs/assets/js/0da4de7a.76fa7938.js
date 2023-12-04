"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[75732],{29213:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=l(11527),n=l(16034),i=(l(35863),l(94383));const s={title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},o=void 0,r={id:"components/kolibri",title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/kolibri.mdx",sourceDirName:"30-components",slug:"/components/kolibri",permalink:"/docs/components/kolibri",draft:!1,unlisted:!1,tags:[{label:"KoliBri",permalink:"/docs/tags/koli-bri"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"1.7",frontMatter:{title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputText",permalink:"/docs/components/input-text"},next:{title:"LinkButton",permalink:"/docs/components/link-button"}},c={},d=[{value:"Live-Editor",id:"live-editor",level:2}];function u(e){const t={h2:"h2",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,a.jsx)(i._,{component:"kolibri"})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},35863:(e,t,l)=>{l.d(t,{_:()=>c});var a=l(43818),n=l(50959),i=l(11527);const s=function(e,t,l,a,n){return void 0===n&&(n="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${l}&view=${n}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},r=e=>{let{url:t}=e;return(0,i.jsxs)("div",{className:"m-2",children:[(0,i.jsx)("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.jsx)(a.Nv,{_href:t,_label:"",_target:"codesandbox",children:(0,i.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:t,sample:l}=e;const[c,d]=(0,n.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${l}`,b={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},m=`/sample-react/#/${t}/${l}?hideMenus`,h={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return(0,i.jsxs)(a.UD,{className:"w-full",_label:"Code-Beispiel",_on:h,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,i.jsx)("div",{children:"Preview"===c&&(0,i.jsx)("iframe",{src:m,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,i.jsx)("div",{children:"Angular"===c&&(0,i.jsx)(r,{url:s(u,t,l,b.angular)})}),(0,i.jsx)("div",{children:"React"===c&&(0,i.jsx)(r,{url:s(u,t,l,b.react)})}),(0,i.jsx)("div",{children:"Vue"===c&&(0,i.jsx)(r,{url:s(u,t,l,b.vue)})}),(0,i.jsx)("div",{children:"Web Component"===c&&(0,i.jsx)(r,{url:s(u,t,l,b.webcomponent)})})]})}},94383:(e,t,l)=>{l.d(t,{_:()=>j});var a=l(15682),n=l(43818),i=l(50959),s=l(6122),o=l(11527);function r(e){const{label:t,name:l,update:a,value:s}=e;return(0,i.useEffect)((()=>{s||a(l,"#000000")}),[]),(0,o.jsx)(n.Np,{_label:"",_on:{onChange:(e,t)=>a(l,t)},_value:s,children:(0,o.jsx)("span",{slot:"expert",children:t})})}function c(e){const{attribute:t,label:l,update:a}=e,[s,r]=(0,i.useState)(""),[c,d]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[b,m]=(0,i.useState)("");let h=!1,f=!1,x=!1,g=!1;t.type.includes("KoliBriAllIcon")?(h=!0,f=!0,x=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(x=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(h=!0,f=!0)),(0,i.useEffect)((()=>{if(!s||c||u||b){const e={};s&&(e.left=`codicon codicon-${s}`),c&&(e.right=`codicon codicon-${c}`),u&&(e.top=`codicon codicon-${u}`),b&&(e.bottom=`codicon codicon-${b}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${s}`)}),[s,c,u,b]);const _=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,o.jsxs)("div",{children:[l,h?(0,o.jsx)(n.ox,{_label:"Links",children:(0,o.jsx)("div",{className:"flex flex-wrap",children:_.map((e=>(0,o.jsx)(n.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>r(e)}},e)))})}):"",f?(0,o.jsx)(n.ox,{_label:"Rechts",children:(0,o.jsx)("div",{className:"flex flex-wrap",children:_.map((e=>(0,o.jsx)(n.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",x?(0,o.jsx)(n.ox,{_label:"Oben",children:(0,o.jsx)("div",{className:"flex flex-wrap",children:_.map((e=>(0,o.jsx)(n.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):"",g?(0,o.jsx)(n.ox,{_label:"Unten",children:(0,o.jsx)("div",{className:"flex flex-wrap",children:_.map((e=>(0,o.jsx)(n.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function d(e){const{name:t,label:l,types:a,update:i,value:s}=e,r=[];function c(e){return{label:e,value:e}}return a.includes("undefined")?(r.push({label:"-",value:void 0}),r.push(...a.filter((e=>"undefined"!==e)).map(c))):r.push(...a.filter((e=>"undefined"!==e)).map(c)),(0,o.jsx)(n.r7,{className:"my-2",_label:"",_options:JSON.stringify(r),_on:{onChange:(e,l)=>i(t,l[0])},_value:s?[s]:void 0,children:(0,o.jsx)("span",{slot:"expert",children:l})})}function u(e){const{attribute:t,update:l,value:a}=e,s=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),i=(0,o.jsx)(n.T5,{_label:t.description,children:t.name});switch(t.name){case"_color":return(0,o.jsx)(r,{name:t.name,label:i,update:l,value:a});case"_icon":return(0,o.jsx)(c,{attribute:t,label:i,update:l,value:a});default:switch(s){case"string":return(0,o.jsx)(n.WD,{className:"my-2",_label:"",_on:{onChange:(e,a)=>l(t.name,a)},_value:a||"",children:(0,o.jsx)("span",{slot:"expert",children:i})});case"number":return(0,o.jsx)(n.c2,{className:"my-2",_label:"",_on:{onChange:(e,a)=>l(t.name,a)},_value:a,children:(0,o.jsx)("span",{slot:"expert",children:i})});case"boolean":return(0,o.jsx)(n.TE,{className:"my-2",_checked:!0===a,_label:"",_on:{onChange:(e,a)=>l(t.name,a)},_variant:"switch",_value:!0,children:(0,o.jsx)("span",{slot:"expert",children:i})});default:return e.length>1?(0,o.jsx)(d,{label:i,name:t.name,types:e,update:l,value:a}):(0,o.jsxs)("p",{children:["Attribut: '",t.name,"'",(0,o.jsx)("br",{}),"Typ: '",t.type,"'"]})}}}),[t,a]);return(0,o.jsx)(o.Fragment,{children:u})}var p=l(22115),b=l(77192),m=l(85630),h=l.n(m);function f(e){const{tag:t,params:l}=e,a=Object.entries(l).filter((e=>"defaultValues"!==e[0]));let n="";const s=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const l=t[1],a=t[0].split("-")[1];if(l)if(l.match(/^<.*?>/)?.length){const t=l.indexOf(">");e+=l.substring(0,t)+` slot="${a}"`+l.substring(t)}else e+=`<div slot="${a}">${l}</div>`})),e}),[l]),r=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!l.defaultValues.includes(e[0])));for(const[i,o]of r)if(o){let e="";switch(typeof o){case"string":e=` ${i}="${o.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${o.toString()}"`;break;case"boolean":e=o?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(o)}"`;break;default:e="Never give up hope, one day everything will be fixed."}n+=e}const c=`<kol-${t}${n}>${s}</kol-${t}>`;let d;try{d=(0,b.format)(c,{plugins:[h()],printWidth:80}).replace(/;\n$/,"")}catch(u){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,o.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,o.jsx)(p.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d})})}function x(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),l=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),a={abbr:n.T5,accordion:n.RZ,alert:n.K5,avatar:n.Ek,badge:n.Er,breadcrumb:n.lo,button:n.ic,"button-group":n.uz,"button-link":n.f6,card:n.Gc,details:n.ox,form:n.m5,heading:n.HA,icon:n.Jl,image:n.Cd,"indented-text":n.CV,"input-checkbox":n.TE,"input-color":n.Np,"input-date":n.O,"input-email":n.Lj,"input-file":n.CX,"input-number":n.c2,"input-password":n.z5,"input-radio":n.sy,"input-range":n.TQ,"input-text":n.WD,kolibri:n.Vs,link:n.Nv,"link-button":n.Kc,"link-group":n.$o,logo:n.QK,modal:n.Ud,nav:n.MA,pagination:n.Q4,popover:n.KolPopover,progress:n.WR,quote:n.VZ,select:n.r7,"skip-nav":n.P,spin:n.qq,"split-button":n.KJ,symbol:n.is,table:n.Vp,tabs:n.UD,textarea:n.Qs,toast:n.KolToast,version:n.u_}[e.tag];return a?(0,o.jsx)(a,{...t,children:l.map((e=>(0,o.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,o.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:t,name:l,update:a,value:n}=e;return(0,o.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,o.jsx)("b",{children:l||"default"}),": ",t,(0,o.jsx)("br",{}),(0,o.jsx)(p.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${l}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:n})]})}const _=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function j(e){const[t,l]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const l=t.name.replace("kol-","");e[l]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[l][t.name]=t.defaultValue.replace(/'/g,""),e[l].defaultValues.push(t.name)),void 0!==v[l]?.[t.name]&&(e[l][t.name]=v[l][t.name])})),t.slots.forEach((t=>{const a=`slot-${t.name||"default"}`,n=v[l]?.[a];n&&(e[l][a]=n)}))})),e}()),[r,c]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_label"===e.name))&&!t[r]?._label&&p("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_heading"===e.name))&&!t[r]?._heading&&p("_heading","Heading-Text")}),[r]);const d=(0,i.useMemo)((()=>t[r]||{}),[t,r]);function p(e,t){l((l=>{const a={...l[r],[e]:t,defaultValues:l[r].defaultValues.filter((t=>t!==e))};return{...l,[r]:a}}))}const b=Object.values(a.p).find((e=>e.name===`kol-${r}`));return(0,o.jsx)(s.Z,{children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,o.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,o.jsxs)(n.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,o.jsx)("div",{className:"p-2",children:(0,o.jsx)(x,{tag:r,params:d})}),(0,o.jsx)("div",{className:"lg:col-span-2",children:(0,o.jsx)(f,{params:d,tag:r})})]}),(0,o.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,o.jsx)(n.HA,{_level:3,_label:"Konfigurator"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(n.HA,{_level:4,_label:"Properties"}),(0,o.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[b&&b.attributes.map((e=>(0,o.jsx)(o.Fragment,{children:!_.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,o.jsx)(u,{attribute:e,update:p,value:d[e.name]},e.name)}))),b&&0===b.attributes.length&&(0,o.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,o.jsx)(n.HA,{_level:4,_label:"Slots"}),(0,o.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[b&&b.slots.map((e=>(0,o.jsx)(g,{description:e.description,name:e.name||"default",update:p,value:d["slot-"+(e.name||"default")]},e.name))),b&&0===b.slots.length&&(0,o.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);