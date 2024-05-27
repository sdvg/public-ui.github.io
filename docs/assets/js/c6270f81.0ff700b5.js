"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[26532],{58148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>b,toc:()=>h});var l=t(76776),i=t(108);function r(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.strong,{children:"Abbr"}),"-Komponente implementiert den HTML-Tag ",(0,l.jsx)(n.code,{children:"abbr"}),", wobei hier jedoch der Tooltip barrierefrei ist.\nDer Tooltip f\xfcr die Beschreibung wird bei Focus oder Hover der ",(0,l.jsx)(n.strong,{children:"Abbr"}),"-Komponente angezeigt und vorgelesen."]}),"\n",(0,l.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,l.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<p>Ich bin eine <kol-abbr _label="Abk\xfcrzung" _tooltip-align="top">Abbr</kol-abbr> mit Tooltip oben.</p>\n<p>Ich bin eine <kol-abbr _label="Abk\xfcrzung" _tooltip-align="right">Abbr</kol-abbr> mit Tooltip rechts.</p>\n<p>Ich bin eine <kol-abbr _label="Abk\xfcrzung" _tooltip-align="bottom">Abbr</kol-abbr> mit Tooltip unten.</p>\n<p>Ich bin eine <kol-abbr _label="Abk\xfcrzung" _tooltip-align="left">Abbr</kol-abbr> mit Tooltip links.</p>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,l.jsxs)("p",{children:["Ich bin eine ",(0,l.jsx)("kol-abbr",{_label:"Abk\xfcrzung","_tooltip-align":"top",children:"Abbr"})," mit Tooltip oben."]}),"\n",(0,l.jsxs)("p",{children:["Ich bin eine ",(0,l.jsx)("kol-abbr",{_label:"Abk\xfcrzung","_tooltip-align":"right",children:"Abbr"})," mit Tooltip rechts."]}),"\n",(0,l.jsxs)("p",{children:["Ich bin eine ",(0,l.jsx)("kol-abbr",{_label:"Abk\xfcrzung","_tooltip-align":"bottom",children:"Abbr"})," mit Tooltip unten."]}),"\n",(0,l.jsxs)("p",{children:["Ich bin eine ",(0,l.jsx)("kol-abbr",{_label:"Abk\xfcrzung","_tooltip-align":"left",children:"Abbr"})," mit Tooltip links."]}),"\n",(0,l.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,l.jsx)(n.h3,{id:"angabe-der-beschreibung-zur-abk\xfcrzung",children:"Angabe der Beschreibung zur Abk\xfcrzung"}),"\n",(0,l.jsxs)(n.p,{children:["Der Begriff bzw. die Erkl\xe4rung wird \xfcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_label"})})," \xfcbergeben, die Abk\xfcrzung bzw. der erkl\xe4rungsw\xfcrdige Begriff kommt zwischen die Tags im HTML."]}),"\n",(0,l.jsx)(n.h3,{id:"ausrichtung-des-tooltip",children:"Ausrichtung des Tooltip"}),"\n",(0,l.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_tooltip-align"})})," wird die Positionierung des ToolTip, relativ zur Abk\xfcrzung, festgelegt."]}),"\n",(0,l.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,l.jsx)(n.p,{children:"Die Abbr-Komponente wurde von KoliBri umgesetzt, weil der Standard-Tooltip nicht barrierefrei bzgl. der Skalierung ist.\nDer KoliBri Tooltip kann von Screenreadern vorgelesen werden und ver\xe4ndert seine Gr\xf6\xdfe beim Zoomen korrekt."}),"\n",(0,l.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_label"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_tooltipAlign"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_tooltip-align"})}),(0,l.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"bottom"'})," | ",(0,l.jsx)(n.code,{children:'"left"'})," | ",(0,l.jsx)(n.code,{children:'"right"'})," | ",(0,l.jsx)(n.code,{children:'"top"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'top'"})})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Slot"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"Der Begriff, der erl\xe4utert werden soll."})]})})]}),"\n",(0,l.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}var a=t(37704),o=t(54592);const d={title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",tags:["Abbr","Beschreibung","Spezifikation","Beispiele"]},c=void 0,b={id:"components/abbr",title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",source:"@site/versioned_docs/version-2.1/30-components/abbr.mdx",sourceDirName:"30-components",slug:"/components/abbr",permalink:"/docs/components/abbr",draft:!1,unlisted:!1,tags:[{label:"Abbr",permalink:"/docs/tags/abbr"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"2.1",frontMatter:{title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",tags:["Abbr","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Komponenten",permalink:"/docs/components/"},next:{title:"Accordion",permalink:"/docs/components/accordion"}},u={},h=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Angabe der Beschreibung zur Abk\xfcrzung",id:"angabe-der-beschreibung-zur-abk\xfcrzung",level:3},{value:"Ausrichtung des Tooltip",id:"ausrichtung-des-tooltip",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function p(e){const n={h2:"h2",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{}),"\n",(0,l.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(o.o,{component:"abbr"}),"\n",(0,l.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,l.jsx)(a.Q,{component:"abbr",sample:"basic"})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},37704:(e,n,t)=>{t.d(n,{Q:()=>d});var l=t(51376),i=t(80924),r=t(76776);const s=function(e,n,t,l,i){return void 0===i&&(i="editor"),`${e}&module=${l}&initialpath=%23%2F${n}%2F${t}&view=${i}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(l.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:t}=e;const[d,c]=(0,i.useState)("Preview"),b="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,h={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${n}/${t}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(l._,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===d&&(0,r.jsx)("iframe",{src:p,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===d&&(0,r.jsx)(o,{url:s(b,n,t,h.angular)})}),(0,r.jsx)("div",{children:"React"===d&&(0,r.jsx)(o,{url:s(b,n,t,h.react)})}),(0,r.jsx)("div",{children:"Vue"===d&&(0,r.jsx)(o,{url:s(b,n,t,h.vue)})}),(0,r.jsx)("div",{children:"Web Component"===d&&(0,r.jsx)(o,{url:s(b,n,t,h.webcomponent)})})]})}},54592:(e,n,t)=>{t.d(n,{o:()=>v});var l=t(28904),i=t(51376),r=t(80924),s=t(94368),a=t(76776);function o(e){const{label:n,name:t,update:l,value:s}=e;return(0,r.useEffect)((()=>{s||l(t,"#000000")}),[]),(0,a.jsx)(i.eK,{_label:"",_on:{onInput:(e,n)=>l(t,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:t,update:l}=e,[s,o]=(0,r.useState)(""),[d,c]=(0,r.useState)(""),[b,u]=(0,r.useState)(""),[h,p]=(0,r.useState)("");let m=!1,x=!1,g=!1,f=!1;n.type.includes("KoliBriAllIcon")?(m=!0,x=!0,g=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(g=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,x=!0)),(0,r.useEffect)((()=>{if(!s||d||b||h){const e={};s&&(e.left=`codicon codicon-${s}`),d&&(e.right=`codicon codicon-${d}`),b&&(e.top=`codicon codicon-${b}`),h&&(e.bottom=`codicon codicon-${h}`),Object.keys(e).length&&l(n.name,JSON.stringify(e))}else l(n.name,`codicon codicon-${s}`)}),[s,d,b,h]);const j=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[t,m?(0,a.jsx)(i.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,a.jsx)(i.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",g?(0,a.jsx)(i.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,a.jsx)(i.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):""]})}function c(e){const{name:n,label:t,types:l,update:r,value:s}=e,o=[];function d(e){return{label:e,value:e}}return l.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...l.filter((e=>"undefined"!==e)).map(d))):o.push(...l.filter((e=>"undefined"!==e)).map(d)),(0,a.jsx)(i.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,t)=>r(n,t[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function b(e){const{attribute:n,update:t,value:l}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),b=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(i.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:r,update:t,value:l});case"_icons":return(0,a.jsx)(d,{attribute:n,label:r,update:t,value:l});default:switch(s){case"string":return(0,a.jsx)(i.Uh,{className:"my-2",_label:"",_on:{onInput:(e,l)=>t(n.name,l)},_value:l||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(i.QL,{className:"my-2",_label:"",_on:{onInput:(e,l)=>t(n.name,l)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(i.Q7,{className:"my-2",_checked:!0===l,_label:"",_on:{onInput:(e,l)=>t(n.name,l)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:n.name,types:e,update:t,value:l}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,l]);return(0,a.jsx)(a.Fragment,{children:b})}var u=t(63136),h=t(28256),p=t(39452),m=t.n(p);function x(e){const{tag:n,params:t}=e,l=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let i="";const s=(0,r.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],l=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${l}"`+t.substring(n)}else e+=`<div slot="${l}">${t}</div>`})),e}),[t]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[r,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}i+=e}const d=`<kol-${n}${i}>${s}</kol-${n}>`;let c;try{c=(0,h.format)(d,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(b){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function g(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),l={abbr:i.s1,accordion:i.IP,alert:i.mW,avatar:i.aq,badge:i.cX,breadcrumb:i.If,button:i.qC,"button-group":i.Os,"button-link":i.u_,card:i.Yh,details:i.Si,form:i.OO,heading:i.ch,icon:i.SA,image:i.iu,"indented-text":i.MV,"input-checkbox":i.Q7,"input-color":i.eK,"input-date":i.QZ,"input-email":i.kN,"input-file":i.Ex,"input-number":i.QL,"input-password":i.EH,"input-radio":i.wJ,"input-range":i.Ef,"input-text":i.Uh,kolibri:i.aY,link:i.GQ,"link-button":i._k,"link-group":i.O_,logo:i.ae,modal:i.cT,nav:i.Y4,pagination:i.kj,progress:i.O0,quote:i.SY,select:i.qy,"skip-nav":i.Ig,spin:i.kP,"split-button":i.a,symbol:i.OM,table:i.Y9,tabs:i._,textarea:i.DG,version:i.k1}[e.tag];return l?(0,a.jsx)(l,{...n,children:t.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:t,update:l,value:i}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:t||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i})]})}const j=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,t]=(0,r.useState)(function(){const e={};return Object.values(l.Q).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==_[t]?.[n.name]&&(e[t][n.name]=_[t][n.name])})),n.slots.forEach((n=>{const l=`slot-${n.name||"default"}`,i=_[t]?.[l];i&&(e[t][l]=i)}))})),e}()),[o,d]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!l.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&u("_label","Label-Text");!!l.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&u("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>n[o]||{}),[n,o]);function u(e,n){t((t=>{const l={...t[o],[e]:n,defaultValues:t[o].defaultValues.filter((n=>n!==e))};return{...t,[o]:l}}))}const h=Object.values(l.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(i._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(g,{tag:o,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(x,{params:c,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(i.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[h&&h.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!j.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(b,{attribute:e,update:u,value:c[e.name]},e.name)}))),h&&0===h.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(i.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[h&&h.slots.map((e=>(0,a.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),h&&0===h.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);