"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[31179],{93805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>b,toc:()=>p});var i=t(11527),l=t(16034);function r(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.strong,{children:"Abbr"}),"-Komponente implementiert den HTML-Tag ",(0,i.jsx)(n.code,{children:"abbr"}),", wobei hier jedoch der Tooltip barrierefrei ist.\nDer Tooltip f\xfcr die Beschreibung wird bei Focus oder Hover der ",(0,i.jsx)(n.strong,{children:"Abbr"}),"-Komponente angezeigt und vorgelesen."]}),"\n",(0,i.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,i.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<p>Ich bin eine <kol-abbr _label="Abk\xfcrzung" _tooltip-align="top">Abbr</kol-abbr> mit Tooltip oben.</p>\n<p>Ich bin eine <kol-abbr _label="Abk\xfcrzung" _tooltip-align="right">Abbr</kol-abbr> mit Tooltip rechts.</p>\n<p>Ich bin eine <kol-abbr _label="Abk\xfcrzung" _tooltip-align="bottom">Abbr</kol-abbr> mit Tooltip unten.</p>\n<p>Ich bin eine <kol-abbr _label="Abk\xfcrzung" _tooltip-align="left">Abbr</kol-abbr> mit Tooltip links.</p>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsxs)("p",{children:["Ich bin eine ",(0,i.jsx)("kol-abbr",{_label:"Abk\xfcrzung","_tooltip-align":"top",children:"Abbr"})," mit Tooltip oben."]}),"\n",(0,i.jsxs)("p",{children:["Ich bin eine ",(0,i.jsx)("kol-abbr",{_label:"Abk\xfcrzung","_tooltip-align":"right",children:"Abbr"})," mit Tooltip rechts."]}),"\n",(0,i.jsxs)("p",{children:["Ich bin eine ",(0,i.jsx)("kol-abbr",{_label:"Abk\xfcrzung","_tooltip-align":"bottom",children:"Abbr"})," mit Tooltip unten."]}),"\n",(0,i.jsxs)("p",{children:["Ich bin eine ",(0,i.jsx)("kol-abbr",{_label:"Abk\xfcrzung","_tooltip-align":"left",children:"Abbr"})," mit Tooltip links."]}),"\n",(0,i.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,i.jsx)(n.h3,{id:"angabe-der-beschreibung-zur-abk\xfcrzung",children:"Angabe der Beschreibung zur Abk\xfcrzung"}),"\n",(0,i.jsxs)(n.p,{children:["Der Begriff bzw. die Erkl\xe4rung wird \xfcber das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_label"})})," \xfcbergeben, die Abk\xfcrzung bzw. der erkl\xe4rungsw\xfcrdige Begriff kommt zwischen die Tags im HTML."]}),"\n",(0,i.jsx)(n.h3,{id:"ausrichtung-des-tooltip",children:"Ausrichtung des Tooltip"}),"\n",(0,i.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_tooltip-align"})})," wird die Positionierung des ToolTip, relativ zur Abk\xfcrzung, festgelegt."]}),"\n",(0,i.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,i.jsx)(n.p,{children:"Die Abbr-Komponente wurde von KoliBri umgesetzt, weil der Standard-Tooltip nicht barrierefrei bzgl. der Skalierung ist.\nDer KoliBri Tooltip kann von Screenreadern vorgelesen werden und ver\xe4ndert seine Gr\xf6\xdfe beim Zoomen korrekt."}),"\n",(0,i.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"_label"})," ",(0,i.jsx)(n.em,{children:"(required)"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_label"})}),(0,i.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_tooltipAlign"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_tooltip-align"})}),(0,i.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"bottom"'})," | ",(0,i.jsx)(n.code,{children:'"left"'})," | ",(0,i.jsx)(n.code,{children:'"right"'})," | ",(0,i.jsx)(n.code,{children:'"top"'})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'top'"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Slot"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Der Begriff, der erl\xe4utert werden soll."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tooltip",children:"kol-tooltip-wc"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD;\n  kol-abbr --\x3e kol-tooltip-wc\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-span-wc --\x3e kol-icon\n  style kol-abbr fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,i.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var a=t(35863),o=t(94383);const c={title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",tags:["Abbr","Beschreibung","Spezifikation","Beispiele"]},d=void 0,b={id:"components/abbr",title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",source:"@site/versioned_docs/version-2.0/30-components/abbr.mdx",sourceDirName:"30-components",slug:"/components/abbr",permalink:"/docs/components/abbr",draft:!1,unlisted:!1,tags:[{label:"Abbr",permalink:"/docs/tags/abbr"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"2.0",frontMatter:{title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",tags:["Abbr","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Komponenten",permalink:"/docs/components/"},next:{title:"Accordion",permalink:"/docs/components/accordion"}},h={},p=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function u(e){const n={h2:"h2",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,i.jsx)(o._,{component:"abbr"}),"\n",(0,i.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsx)(a._,{component:"abbr",sample:"basic"})]})}function m(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},35863:(e,n,t)=>{t.d(n,{_:()=>c});var i=t(67358),l=t(50959),r=t(11527);const s=function(e,n,t,i,l){return void 0===l&&(l="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${t}&view=${l}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(i.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:n,sample:t}=e;const[c,d]=(0,l.useState)("Preview"),b="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",h=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,p={angular:`${h}.html`,react:`${h}.tsx`,vue:`${h}.vue`,webcomponent:`${h}.html`},u=`/sample-react/#/${n}/${t}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return(0,r.jsxs)(i.UD,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===c&&(0,r.jsx)("iframe",{src:u,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===c&&(0,r.jsx)(o,{url:s(b,n,t,p.angular)})}),(0,r.jsx)("div",{children:"React"===c&&(0,r.jsx)(o,{url:s(b,n,t,p.react)})}),(0,r.jsx)("div",{children:"Vue"===c&&(0,r.jsx)(o,{url:s(b,n,t,p.vue)})}),(0,r.jsx)("div",{children:"Web Component"===c&&(0,r.jsx)(o,{url:s(b,n,t,p.webcomponent)})})]})}},94383:(e,n,t)=>{t.d(n,{_:()=>k});var i=t(71931),l=t(67358),r=t(50959),s=t(89346),a=t(11527);function o(e){const{label:n,name:t,update:i,value:s}=e;return(0,r.useEffect)((()=>{s||i(t,"#000000")}),[]),(0,a.jsx)(l.Np,{_label:"",_on:{onChange:(e,n)=>i(t,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function c(e){const{attribute:n,label:t,update:i}=e,[s,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[b,h]=(0,r.useState)(""),[p,u]=(0,r.useState)("");let m=!1,x=!1,g=!1,j=!1;n.type.includes("KoliBriAllIcon")?(m=!0,x=!0,g=!0,j=!0):(n.type.includes("KoliBriVerticalIcon")&&(g=!0,j=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,x=!0)),(0,r.useEffect)((()=>{if(!s||c||b||p){const e={};s&&(e.left=`codicon codicon-${s}`),c&&(e.right=`codicon codicon-${c}`),b&&(e.top=`codicon codicon-${b}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${s}`)}),[s,c,b,p]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[t,m?(0,a.jsx)(l.ox,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,a.jsx)(l.ox,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",g?(0,a.jsx)(l.ox,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>h(e)}},e)))})}):"",j?(0,a.jsx)(l.ox,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):""]})}function d(e){const{name:n,label:t,types:i,update:r,value:s}=e,o=[];function c(e){return{label:e,value:e}}return i.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...i.filter((e=>"undefined"!==e)).map(c))):o.push(...i.filter((e=>"undefined"!==e)).map(c)),(0,a.jsx)(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onChange:(e,t)=>r(n,t[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function b(e){const{attribute:n,update:t,value:i}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),b=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(l.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:r,update:t,value:i});case"_icons":return(0,a.jsx)(c,{attribute:n,label:r,update:t,value:i});default:switch(s){case"string":return(0,a.jsx)(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(l.TE,{className:"my-2",_checked:!0===i,_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(d,{label:r,name:n.name,types:e,update:t,value:i}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,a.jsx)(a.Fragment,{children:b})}var h=t(22115),p=t(77192),u=t(85630),m=t.n(u);function x(e){const{tag:n,params:t}=e,i=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,r.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],i=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${i}"`+t.substring(n)}else e+=`<div slot="${i}">${t}</div>`})),e}),[t]),o=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[r,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const c=`<kol-${n}${l}>${s}</kol-${n}>`;let d;try{d=(0,p.format)(c,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(b){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(h.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d})})}function g(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,version:l.u_}[e.tag];return i?(0,a.jsx)(i,{...n,children:t.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function j(e){const{description:n,name:t,update:i,value:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:t||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(h.ML,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,t]=(0,r.useState)(function(){const e={};return Object.values(i.p).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==_[t]?.[n.name]&&(e[t][n.name]=_[t][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,l=_[t]?.[i];l&&(e[t][i]=l)}))})),e}()),[o,c]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!i.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&h("_label","Label-Text");!!i.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&h("_heading","Heading-Text")}),[o]);const d=(0,r.useMemo)((()=>n[o]||{}),[n,o]);function h(e,n){t((t=>{const i={...t[o],[e]:n,defaultValues:t[o].defaultValues.filter((n=>n!==e))};return{...t,[o]:i}}))}const p=Object.values(i.p).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(s.Z,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(g,{tag:o,params:d})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(x,{params:d,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(l.HA,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.HA,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(b,{attribute:e,update:h,value:d[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(l.HA,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(j,{description:e.description,name:e.name||"default",update:h,value:d["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);