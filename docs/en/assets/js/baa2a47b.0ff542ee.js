"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[67870],{26216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var l=t(2488),i=t(16592);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_active"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_active"})}),(0,l.jsx)(n.td,{children:"If set (to true) the tree item is the active one."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_href"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_href"})}),(0,l.jsx)(n.td,{children:"This property is used for a link from a reference to the target URL."}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_label"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:"Defines the label of the link."}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_open"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_open"})}),(0,l.jsx)(n.td,{children:"If set (to true) opens/expands the element, closes if not set (or set to false)."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(n.h3,{id:"collapse",children:"collapse"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"collapse() => Promise<void>"})}),"\n",(0,l.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:["Type: ",(0,l.jsx)(n.code,{children:"Promise<void>"})]}),"\n",(0,l.jsx)(n.h3,{id:"expand--promisevoid",children:(0,l.jsx)(n.code,{children:"expand() => Promise<void>"})}),"\n",(0,l.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:["Type: ",(0,l.jsx)(n.code,{children:"Promise<void>"})]}),"\n",(0,l.jsx)(n.h3,{id:"focuslink--promisevoid",children:(0,l.jsx)(n.code,{children:"focusLink() => Promise<void>"})}),"\n",(0,l.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:["Type: ",(0,l.jsx)(n.code,{children:"Promise<void>"})]}),"\n",(0,l.jsx)(n.h3,{id:"isopen--promiseboolean",children:(0,l.jsx)(n.code,{children:"isOpen() => Promise<boolean>"})}),"\n",(0,l.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:["Type: ",(0,l.jsx)(n.code,{children:"Promise<boolean>"})]}),"\n",(0,l.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,l.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:".",children:"kol-tree-item"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./link",children:"kol-link"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph TD;\n  kol-tree-item-wc --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-tree-item --\x3e kol-tree-item-wc\n  style kol-tree-item-wc stroke:#333,stroke-width:4px"}),"\n",(0,l.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}t(37704),t(54592);const a={title:"Tree Item",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tree-Komponente.",tags:["Tree Item","Beschreibung","Spezifikation","Beispiele"]},o=void 0,c={id:"components/tree-item",title:"Tree Item",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tree-Komponente.",source:"@site/docs/30-components/tree-item.mdx",sourceDirName:"30-components",slug:"/components/tree-item",permalink:"/en/docs/next/components/tree-item",draft:!1,unlisted:!1,tags:[{label:"Tree Item",permalink:"/en/docs/next/tags/tree-item"},{label:"Beschreibung",permalink:"/en/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Tree Item",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tree-Komponente.",tags:["Tree Item","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Tooltip",permalink:"/en/docs/next/components/tooltip"},next:{title:"Tree",permalink:"/en/docs/next/components/tree"}},d={},h=[];function u(e){return(0,l.jsx)(r,{})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u()}},37704:(e,n,t)=>{t.d(n,{Q:()=>c});var l=t(57920),i=t(96651),s=t(2488);const r=function(e,n,t,l,i){return void 0===i&&(i="editor"),`${e}&module=${l}&initialpath=%23%2F${n}%2F${t}&view=${i}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(l.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:n,sample:t}=e;const[c,d]=(0,i.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},m=`/sample-react/#/${n}/${t}?hideMenus`,x={onSelect:(e,n)=>{switch(n){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return(0,s.jsxs)(l._,{className:"w-full",_label:"Code-Beispiel",_on:x,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===c&&(0,s.jsx)("iframe",{src:m,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===c&&(0,s.jsx)(o,{url:r(h,n,t,p.angular)})}),(0,s.jsx)("div",{children:"React"===c&&(0,s.jsx)(o,{url:r(h,n,t,p.react)})}),(0,s.jsx)("div",{children:"Vue"===c&&(0,s.jsx)(o,{url:r(h,n,t,p.vue)})}),(0,s.jsx)("div",{children:"Web Component"===c&&(0,s.jsx)(o,{url:r(h,n,t,p.webcomponent)})})]})}},54592:(e,n,t)=>{t.d(n,{o:()=>k});var l=t(36016),i=t(57920),s=t(96651),r=t(19356),a=t(2488);function o(e){const{label:n,name:t,update:l,value:r}=e;return(0,s.useEffect)((()=>{r||l(t,"#000000")}),[]),(0,a.jsx)(i.eK,{_label:"",_on:{onChange:(e,n)=>l(t,n)},_value:r,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function c(e){const{attribute:n,label:t,update:l}=e,[r,o]=(0,s.useState)(""),[c,d]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[p,m]=(0,s.useState)("");let x=!1,b=!1,j=!1,f=!1;n.type.includes("KoliBriAllIcon")?(x=!0,b=!0,j=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(j=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(x=!0,b=!0)),(0,s.useEffect)((()=>{if(!r||c||h||p){const e={};r&&(e.left=`codicon codicon-${r}`),c&&(e.right=`codicon codicon-${c}`),h&&(e.top=`codicon codicon-${h}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&l(n.name,JSON.stringify(e))}else l(n.name,`codicon codicon-${r}`)}),[r,c,h,p]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[t,x?(0,a.jsx)(i.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",b?(0,a.jsx)(i.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",j?(0,a.jsx)(i.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,a.jsx)(i.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function d(e){const{name:n,label:t,types:l,update:s,value:r}=e,o=[];function c(e){return{label:e,value:e}}return l.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...l.filter((e=>"undefined"!==e)).map(c))):o.push(...l.filter((e=>"undefined"!==e)).map(c)),(0,a.jsx)(i.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onChange:(e,t)=>s(n,t[0])},_value:r?[r]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function h(e){const{attribute:n,update:t,value:l}=e,r=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,a.jsx)(i.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:s,update:t,value:l});case"_icons":return(0,a.jsx)(c,{attribute:n,label:s,update:t,value:l});default:switch(r){case"string":return(0,a.jsx)(i.Uh,{className:"my-2",_label:"",_on:{onChange:(e,l)=>t(n.name,l)},_value:l||"",children:(0,a.jsx)("span",{slot:"expert",children:s})});case"number":return(0,a.jsx)(i.QL,{className:"my-2",_label:"",_on:{onChange:(e,l)=>t(n.name,l)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,a.jsx)(i.Q7,{className:"my-2",_checked:!0===l,_label:"",_on:{onChange:(e,l)=>t(n.name,l)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,a.jsx)(d,{label:s,name:n.name,types:e,update:t,value:l}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,l]);return(0,a.jsx)(a.Fragment,{children:h})}var u=t(47184),p=t(28256),m=t(39452),x=t.n(m);function b(e){const{tag:n,params:t}=e,l=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let i="";const r=(0,s.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],l=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${l}"`+t.substring(n)}else e+=`<div slot="${l}">${t}</div>`})),e}),[t]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[s,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${s}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${a.toString()}"`;break;case"boolean":e=a?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}i+=e}const c=`<kol-${n}${i}>${r}</kol-${n}>`;let d;try{d=(0,p.format)(c,{plugins:[x()],printWidth:80}).replace(/;\n$/,"")}catch(h){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d})})}function j(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),l={abbr:i.s1,accordion:i.IP,alert:i.mW,avatar:i.aq,badge:i.cX,breadcrumb:i.If,button:i.qC,"button-group":i.Os,"button-link":i.u_,card:i.Yh,details:i.Si,form:i.OO,heading:i.ch,icon:i.SA,image:i.iu,"indented-text":i.MV,"input-checkbox":i.Q7,"input-color":i.eK,"input-date":i.QZ,"input-email":i.kN,"input-file":i.Ex,"input-number":i.QL,"input-password":i.EH,"input-radio":i.wJ,"input-range":i.Ef,"input-text":i.Uh,kolibri:i.aY,link:i.GQ,"link-button":i._k,"link-group":i.O_,logo:i.ae,modal:i.cT,nav:i.Y4,pagination:i.kj,progress:i.O0,quote:i.SY,select:i.qy,"skip-nav":i.Ig,spin:i.kP,"split-button":i.a,symbol:i.OM,table:i.Y9,tabs:i._,textarea:i.DG,version:i.k1}[e.tag];return l?(0,a.jsx)(l,{...n,children:t.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:t,update:l,value:i}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:t||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,t]=(0,s.useState)(function(){const e={};return Object.values(l.Q).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==_[t]?.[n.name]&&(e[t][n.name]=_[t][n.name])})),n.slots.forEach((n=>{const l=`slot-${n.name||"default"}`,i=_[t]?.[l];i&&(e[t][l]=i)}))})),e}()),[o,c]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!l.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&u("_label","Label-Text");!!l.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&u("_heading","Heading-Text")}),[o]);const d=(0,s.useMemo)((()=>n[o]||{}),[n,o]);function u(e,n){t((t=>{const l={...t[o],[e]:n,defaultValues:t[o].defaultValues.filter((n=>n!==e))};return{...t,[o]:l}}))}const p=Object.values(l.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(r.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(i._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(j,{tag:o,params:d})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(b,{params:d,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(i.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:d[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(i.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:d["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);