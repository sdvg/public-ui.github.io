"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[44346],{28949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=t(11527),i=t(16034);function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Mit der ",(0,s.jsx)(n.strong,{children:"Toast"}),"-Komponente geben Sie ein optisches Feedback an die Nutzer",":innen",". Sie wird am Kopf des Browserfenster\nangezeigt, bis sie geschlossen wird. Werden mehrere Toasts ge\xf6ffnet, ohne das die bisherigen geschlossen wurden, so werden diese untereinander angezeigt."]}),"\n",(0,s.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,s.jsx)(n.p,{children:"Die Toast-Komponente wird nicht direkt verwendet, sondern immer \xfcber den ToasterService konstruiert."}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { ToasterService } from '@public-ui/components';\n\n// Get the toaster instance for the current HTML document.\nconst toaster = ToasterService.getInstance(document);\n\n// Enqueue a new toast to the toaster to display:\ntoaster.enqueue({\n\tlabel: 'This is the title',\n\tdescription: 'Magna eu sit adipisicing cillum amet esse in aute quis in dolore.',\n\ttype: 'info',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,s.jsx)(n.h3,{id:"\xfcberschrift",children:"\xdcberschrift"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_label"})}),", um die \xdcberschrift des Toasts zu bestimmen."]}),"\n",(0,s.jsx)(n.h3,{id:"inhalt",children:"Inhalt"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_description"})}),", um den Text-Inhalt des Toasts zu bestimmen."]}),"\n",(0,s.jsx)(n.h3,{id:"anzeigetyp-des-toast",children:"Anzeigetyp des Toast"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_type"})}),", um den Typ des Toasts festzulegen. M\xf6gliche Werte sind:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"default"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"error"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"info"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"success"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"warning"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"_label"})," ",(0,s.jsx)(n.em,{children:"(required)"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_label"})}),(0,s.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_on"})}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"Defines the event callback functions for the component."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.code,{children:"{ onClose?: EventCallback<Event>"})," | ",(0,s.jsx)(n.code,{children:"undefined; }"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"_status"})," ",(0,s.jsx)(n.em,{children:"(required)"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_status"})}),(0,s.jsx)(n.td,{children:"Defines the current toast status."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:'"adding"'})," | ",(0,s.jsx)(n.code,{children:'"removing"'})," | ",(0,s.jsx)(n.code,{children:'"settled"'})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_type"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_type"})}),(0,s.jsx)(n.td,{children:"Defines either the type of the component or of the components interactive element."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:'"default"'})," | ",(0,s.jsx)(n.code,{children:'"error"'})," | ",(0,s.jsx)(n.code,{children:'"info"'})," | ",(0,s.jsx)(n.code,{children:'"success"'})," | ",(0,s.jsx)(n.code,{children:'"warning"'})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'default'"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Slot"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Der Inhalt der Meldung."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./toast-container",children:"kol-toast-container"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./alert",children:"kol-alert"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD;\n  kol-toast --\x3e kol-alert\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-toast-container --\x3e kol-toast\n  style kol-toast fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,s.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}t(35863);var a=t(94383);const o={title:"Toast",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",tags:["Toast","Beschreibung","Spezifikation","Beispiele"]},d=void 0,c={id:"components/toast",title:"Toast",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/toast.mdx",sourceDirName:"30-components",slug:"/components/toast",permalink:"/docs/1.7/components/toast",draft:!1,unlisted:!1,tags:[{label:"Toast",permalink:"/docs/1.7/tags/toast"},{label:"Beschreibung",permalink:"/docs/1.7/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/1.7/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"Toast",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",tags:["Toast","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Toast Container",permalink:"/docs/1.7/components/toast-container"},next:{title:"Tooltip",permalink:"/docs/1.7/components/tooltip"}},h={},u=[{value:"Live-Editor",id:"live-editor",level:2}];function p(e){const n={h2:"h2",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{}),"\n",(0,s.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,s.jsx)(a._,{component:"toast"})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},35863:(e,n,t)=>{t.d(n,{_:()=>d});var s=t(67358),i=t(50959),l=t(11527);const r=function(e,n,t,s,i){return void 0===i&&(i="editor"),`${e}&module=${s}&initialpath=%23%2F${n}%2F${t}&view=${i}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,l.jsxs)("div",{className:"m-2",children:[(0,l.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,l.jsx)(s.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,l.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:t}=e;const[d,c]=(0,i.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},x=`/sample-react/#/${n}/${t}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,l.jsxs)(s.UD,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,l.jsx)("div",{children:"Preview"===d&&(0,l.jsx)("iframe",{src:x,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,l.jsx)("div",{children:"Angular"===d&&(0,l.jsx)(o,{url:r(h,n,t,p.angular)})}),(0,l.jsx)("div",{children:"React"===d&&(0,l.jsx)(o,{url:r(h,n,t,p.react)})}),(0,l.jsx)("div",{children:"Vue"===d&&(0,l.jsx)(o,{url:r(h,n,t,p.vue)})}),(0,l.jsx)("div",{children:"Web Component"===d&&(0,l.jsx)(o,{url:r(h,n,t,p.webcomponent)})})]})}},94383:(e,n,t)=>{t.d(n,{_:()=>v});var s=t(71931),i=t(67358),l=t(50959),r=t(89346),a=t(11527);function o(e){const{label:n,name:t,update:s,value:r}=e;return(0,l.useEffect)((()=>{r||s(t,"#000000")}),[]),(0,a.jsx)(i.Np,{_label:"",_on:{onChange:(e,n)=>s(t,n)},_value:r,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:t,update:s}=e,[r,o]=(0,l.useState)(""),[d,c]=(0,l.useState)(""),[h,u]=(0,l.useState)(""),[p,x]=(0,l.useState)("");let m=!1,b=!1,j=!1,f=!1;n.type.includes("KoliBriAllIcon")?(m=!0,b=!0,j=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(j=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,b=!0)),(0,l.useEffect)((()=>{if(!r||d||h||p){const e={};r&&(e.left=`codicon codicon-${r}`),d&&(e.right=`codicon codicon-${d}`),h&&(e.top=`codicon codicon-${h}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&s(n.name,JSON.stringify(e))}else s(n.name,`codicon codicon-${r}`)}),[r,d,h,p]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[t,m?(0,a.jsx)(i.ox,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",b?(0,a.jsx)(i.ox,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",j?(0,a.jsx)(i.ox,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,a.jsx)(i.ox,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):""]})}function c(e){const{name:n,label:t,types:s,update:l,value:r}=e,o=[];function d(e){return{label:e,value:e}}return s.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...s.filter((e=>"undefined"!==e)).map(d))):o.push(...s.filter((e=>"undefined"!==e)).map(d)),(0,a.jsx)(i.r7,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onChange:(e,t)=>l(n,t[0])},_value:r?[r]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function h(e){const{attribute:n,update:t,value:s}=e,r=(0,l.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,l.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),l=(0,a.jsx)(i.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:l,update:t,value:s});case"_icons":return(0,a.jsx)(d,{attribute:n,label:l,update:t,value:s});default:switch(r){case"string":return(0,a.jsx)(i.WD,{className:"my-2",_label:"",_on:{onChange:(e,s)=>t(n.name,s)},_value:s||"",children:(0,a.jsx)("span",{slot:"expert",children:l})});case"number":return(0,a.jsx)(i.c2,{className:"my-2",_label:"",_on:{onChange:(e,s)=>t(n.name,s)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:l})});case"boolean":return(0,a.jsx)(i.TE,{className:"my-2",_checked:!0===s,_label:"",_on:{onChange:(e,s)=>t(n.name,s)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:l})});default:return e.length>1?(0,a.jsx)(c,{label:l,name:n.name,types:e,update:t,value:s}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,s]);return(0,a.jsx)(a.Fragment,{children:h})}var u=t(22115),p=t(77192),x=t(85630),m=t.n(x);function b(e){const{tag:n,params:t}=e,s=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let i="";const r=(0,l.useMemo)((()=>{let e="";return s.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],s=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${s}"`+t.substring(n)}else e+=`<div slot="${s}">${t}</div>`})),e}),[t]),o=s.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[l,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${l}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${a.toString()}"`;break;case"boolean":e=a?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}i+=e}const d=`<kol-${n}${i}>${r}</kol-${n}>`;let c;try{c=(0,p.format)(d,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function j(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),s={abbr:i.T5,accordion:i.RZ,alert:i.K5,avatar:i.Ek,badge:i.Er,breadcrumb:i.lo,button:i.ic,"button-group":i.uz,"button-link":i.f6,card:i.Gc,details:i.ox,form:i.m5,heading:i.HA,icon:i.Jl,image:i.Cd,"indented-text":i.CV,"input-checkbox":i.TE,"input-color":i.Np,"input-date":i.O,"input-email":i.Lj,"input-file":i.CX,"input-number":i.c2,"input-password":i.z5,"input-radio":i.sy,"input-range":i.TQ,"input-text":i.WD,kolibri:i.Vs,link:i.Nv,"link-button":i.Kc,"link-group":i.$o,logo:i.QK,modal:i.Ud,nav:i.MA,pagination:i.Q4,progress:i.WR,quote:i.VZ,select:i.r7,"skip-nav":i.P,spin:i.qq,"split-button":i.KJ,symbol:i.is,table:i.Vp,tabs:i.UD,textarea:i.Qs,version:i.u_}[e.tag];return s?(0,a.jsx)(s,{...n,children:t.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:t,update:s,value:i}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:t||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>s(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,t]=(0,l.useState)(function(){const e={};return Object.values(s.p).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==_[t]?.[n.name]&&(e[t][n.name]=_[t][n.name])})),n.slots.forEach((n=>{const s=`slot-${n.name||"default"}`,i=_[t]?.[s];i&&(e[t][s]=i)}))})),e}()),[o,d]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!s.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&u("_label","Label-Text");!!s.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&u("_heading","Heading-Text")}),[o]);const c=(0,l.useMemo)((()=>n[o]||{}),[n,o]);function u(e,n){t((t=>{const s={...t[o],[e]:n,defaultValues:t[o].defaultValues.filter((n=>n!==e))};return{...t,[o]:s}}))}const p=Object.values(s.p).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(r.Z,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(i.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(j,{tag:o,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(b,{params:c,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(i.HA,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.HA,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(i.HA,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);