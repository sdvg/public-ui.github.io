"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[16372],{10200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var i=n(76776),l=n(108);function r(e){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("kol-alert",{_type:"info",_variant:"card",children:["Die ",(0,i.jsx)(t.strong,{children:"Tooltip"}),"-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird."]}),"\n",(0,i.jsxs)(t.p,{children:["Die ",(0,i.jsx)(t.strong,{children:"Tooltip"}),"-Komponente implementiert das Gegenst\xfcck zum ",(0,i.jsx)(t.code,{children:"Aria-Label"}),". Es ist also explizit nur daf\xfcr vorgesehen, dem/der Nutzer",":in"," ohne Screenreader die Beschriftung eines Elementes anzuzeigen."]}),"\n",(0,i.jsxs)(t.p,{children:["Ein ge\xf6ffneter Tooltip l\xe4sst sich mit der ",(0,i.jsx)(t.code,{children:"Escape"}),"-Taste schlie\xdfen, um ggf. \xfcberlagerte Seiteninformationen wieder sichtbar zu machen."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Hinweis:"})," Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht ",(0,i.jsx)(t.code,{children:"display: inline"})," haben."]}),"\n",(0,i.jsx)(t.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,i.jsxs)(t.p,{children:["Die Tooltip-Komponente wird bei Fokus oder bei Bewegen der Maus \xfcber dem Referenzelement angezeigt und dient ausschlie\xdflich dem/der sehenden Nutzer",":in"," ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xf6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xfcr die Screenreader versteckt."]}),"\n",(0,i.jsx)("kol-alert",{_type:"info",children:(0,i.jsx)(t.p,{children:"Aus Sicht des Barrierefreiheitstests k\xf6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird."})}),"\n",(0,i.jsx)(t.h2,{id:"breite",children:"Breite"}),"\n",(0,i.jsxs)(t.p,{children:["Die Breite des Tooltips richtet sich normalerweise nach ihrem Inhalt.\nUm die Breite eines Tooltips zu konfigurieren, kann auf dem umgebenden Container eine ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS-Custom-Property"})," wie folgt definiert werden:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:".container {\n  --kol-tooltip-width': '40rem';\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"_align"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"_align"})}),(0,i.jsx)(t.td,{children:"Defines the alignment of the tooltip, popover or tabs in relation to the element."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:'"bottom"'})," | ",(0,i.jsx)(t.code,{children:'"left"'})," | ",(0,i.jsx)(t.code,{children:'"right"'})," | ",(0,i.jsx)(t.code,{children:'"top"'})," | ",(0,i.jsx)(t.code,{children:"undefined"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"'top'"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"_id"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"_id"})}),(0,i.jsx)(t.td,{children:"Defines the internal ID of the primary component element."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"string"})," | ",(0,i.jsx)(t.code,{children:"undefined"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"_label"})," ",(0,i.jsx)(t.em,{children:"(required)"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"_label"})}),(0,i.jsx)(t.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"undefined"})})]})]})]}),"\n",(0,i.jsx)(t.hr,{})]})}function s(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}n(37704),n(54592);const a={title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},o=void 0,d={id:"components/tooltip",title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/tooltip.mdx",sourceDirName:"30-components",slug:"/components/tooltip",permalink:"/en/docs/1.7/components/tooltip",draft:!1,unlisted:!1,tags:[{label:"Tooltip",permalink:"/en/docs/1.7/tags/tooltip"},{label:"Beschreibung",permalink:"/en/docs/1.7/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.7/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Toaster",permalink:"/en/docs/1.7/components/toaster"},next:{title:"Version",permalink:"/en/docs/1.7/components/version"}},c={},u=[{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Breite",id:"breite",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2}];function p(e){return(0,i.jsx)(s,{})}function h(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p()}},37704:(e,t,n)=>{n.d(t,{Q:()=>d});var i=n(51376),l=n(80924),r=n(76776);const s=function(e,t,n,i,l){return void 0===l&&(l="editor"),`${e}&module=${i}&initialpath=%23%2F${t}%2F${n}&view=${l}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:t,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(i.GQ,{_href:t,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:t,sample:n}=e;const[d,c]=(0,l.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,h={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},m=`/sample-react/#/${t}/${n}?hideMenus`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(i._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===d&&(0,r.jsx)("iframe",{src:m,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===d&&(0,r.jsx)(o,{url:s(u,t,n,h.angular)})}),(0,r.jsx)("div",{children:"React"===d&&(0,r.jsx)(o,{url:s(u,t,n,h.react)})}),(0,r.jsx)("div",{children:"Vue"===d&&(0,r.jsx)(o,{url:s(u,t,n,h.vue)})}),(0,r.jsx)("div",{children:"Web Component"===d&&(0,r.jsx)(o,{url:s(u,t,n,h.webcomponent)})})]})}},54592:(e,t,n)=>{n.d(t,{o:()=>v});var i=n(28904),l=n(51376),r=n(80924),s=n(94368),a=n(76776);function o(e){const{label:t,name:n,update:i,value:s}=e;return(0,r.useEffect)((()=>{s||i(n,"#000000")}),[]),(0,a.jsx)(l.eK,{_label:"",_on:{onInput:(e,t)=>i(n,t)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function d(e){const{attribute:t,label:n,update:i}=e,[s,o]=(0,r.useState)(""),[d,c]=(0,r.useState)(""),[u,p]=(0,r.useState)(""),[h,m]=(0,r.useState)("");let b=!1,x=!1,f=!1,g=!1;t.type.includes("KoliBriAllIcon")?(b=!0,x=!0,f=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(f=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,x=!0)),(0,r.useEffect)((()=>{if(!s||d||u||h){const e={};s&&(e.left=`codicon codicon-${s}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),h&&(e.bottom=`codicon codicon-${h}`),Object.keys(e).length&&i(t.name,JSON.stringify(e))}else i(t.name,`codicon codicon-${s}`)}),[s,d,u,h]);const j=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[n,b?(0,a.jsx)(l.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,a.jsx)(l.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",f?(0,a.jsx)(l.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):"",g?(0,a.jsx)(l.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function c(e){const{name:t,label:n,types:i,update:r,value:s}=e,o=[];function d(e){return{label:e,value:e}}return i.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...i.filter((e=>"undefined"!==e)).map(d))):o.push(...i.filter((e=>"undefined"!==e)).map(d)),(0,a.jsx)(l.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,n)=>r(t,n[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function u(e){const{attribute:t,update:n,value:i}=e,s=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(l.s1,{_label:t.description,children:t.name});switch(t.name){case"_color":return(0,a.jsx)(o,{name:t.name,label:r,update:n,value:i});case"_icons":return(0,a.jsx)(d,{attribute:t,label:r,update:n,value:i});default:switch(s){case"string":return(0,a.jsx)(l.Uh,{className:"my-2",_label:"",_on:{onInput:(e,i)=>n(t.name,i)},_value:i||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(l.QL,{className:"my-2",_label:"",_on:{onInput:(e,i)=>n(t.name,i)},_value:i,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(l.Q7,{className:"my-2",_checked:!0===i,_label:"",_on:{onInput:(e,i)=>n(t.name,i)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:t.name,types:e,update:n,value:i}):(0,a.jsxs)("p",{children:["Attribut: '",t.name,"'",(0,a.jsx)("br",{}),"Typ: '",t.type,"'"]})}}}),[t,i]);return(0,a.jsx)(a.Fragment,{children:u})}var p=n(63136),h=n(28256),m=n(39452),b=n.n(m);function x(e){const{tag:t,params:n}=e,i=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,r.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],i=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${i}"`+n.substring(t)}else e+=`<div slot="${i}">${n}</div>`})),e}),[n]),o=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[r,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${s}</kol-${t}>`;let c;try{c=(0,h.format)(d,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(u){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(p.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function f(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),i={abbr:l.s1,accordion:l.IP,alert:l.mW,avatar:l.aq,badge:l.cX,breadcrumb:l.If,button:l.qC,"button-group":l.Os,"button-link":l.u_,card:l.Yh,details:l.Si,form:l.OO,heading:l.ch,icon:l.SA,image:l.iu,"indented-text":l.MV,"input-checkbox":l.Q7,"input-color":l.eK,"input-date":l.QZ,"input-email":l.kN,"input-file":l.Ex,"input-number":l.QL,"input-password":l.EH,"input-radio":l.wJ,"input-range":l.Ef,"input-text":l.Uh,kolibri:l.aY,link:l.GQ,"link-button":l._k,"link-group":l.O_,logo:l.ae,modal:l.cT,nav:l.Y4,pagination:l.kj,progress:l.O0,quote:l.SY,select:l.qy,"skip-nav":l.Ig,spin:l.kP,"split-button":l.a,symbol:l.OM,table:l.Y9,tabs:l._,textarea:l.DG,version:l.k1}[e.tag];return i?(0,a.jsx)(i,{...t,children:n.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:t,name:n,update:i,value:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:n||"default"}),": ",t,(0,a.jsx)("br",{}),(0,a.jsx)(p.GW,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const j=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[t,n]=(0,r.useState)(function(){const e={};return Object.values(i.Q).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==_[n]?.[t.name]&&(e[n][t.name]=_[n][t.name])})),t.slots.forEach((t=>{const i=`slot-${t.name||"default"}`,l=_[n]?.[i];l&&(e[n][i]=l)}))})),e}()),[o,d]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!i.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&p("_label","Label-Text");!!i.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&p("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function p(e,t){n((n=>{const i={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:i}}))}const h=Object.values(i.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(l._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(f,{tag:o,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(x,{params:c,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(l.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[h&&h.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!j.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(u,{attribute:e,update:p,value:c[e.name]},e.name)}))),h&&0===h.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(l.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[h&&h.slots.map((e=>(0,a.jsx)(g,{description:e.description,name:e.name||"default",update:p,value:c["slot-"+(e.name||"default")]},e.name))),h&&0===h.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);