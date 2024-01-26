"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[76913],{69633:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var t=i(11527),l=i(16034);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Mit Hilfe der ",(0,t.jsx)(n.strong,{children:"Icon"}),"-Komponente k\xf6nnen Icons aus eingebundenen Icon-Fonts an beliebigen Positionen dargestellt werden. Die Ausgabe des Icon kann \xfcber das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_icon"})})," gesteuert werden und erfolgt durch das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_aria-label"})})," barrierefrei. Die Ausgabe erfolgt standardm\xe4\xdfig als ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"inline"})}),"-Element."]}),"\n",(0,t.jsxs)(n.p,{children:["Aktuell werden die Icons von ",(0,t.jsx)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"Codicons"})," unterst\xfctzt."]}),"\n",(0,t.jsxs)("kol-alert",{_heading:"Hinweis",_type:"info",children:["Es ist wichtig, dass in der Rahmenseite (",(0,t.jsx)(n.code,{children:"index.html"}),") die CSS-Dateie(n) der Icon-Font(s) eingebunden ist/sind."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsxs)(n.p,{children:["Die Komponente ",(0,t.jsx)(n.strong,{children:"Icon"})," wird \xfcber das HTML-Tag ",(0,t.jsx)(n.code,{children:"kol-icon"})," erzeugt."]}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-icon _aria-label="Zu Hause" _icons="codicon codicon-home"></kol-icon>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)("kol-icon",{"_aria-label":"Zu Hause",_icons:"codicon codicon-home"}),"\n",(0,t.jsx)(n.h3,{id:"icon",children:"Icon"}),"\n",(0,t.jsxs)(n.p,{children:["Das Icon (",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_icon"})}),") kann entweder als String angegeben werden, oder als Objekt.\nAls String \xfcbergeben Sie die Iconklasse (z.B.: ",(0,t.jsx)(n.code,{children:'_icons="codicon codicon-home'}),"), das Icon wird links vom Text angezeigt.\nDas Objekt ist vom Typ ",(0,t.jsx)(n.code,{children:"KoliBriAllIcon"}),", kann also einen oder mehrere der Schl\xfcssel ",(0,t.jsx)(n.code,{children:"top"}),", ",(0,t.jsx)(n.code,{children:"right"}),", ",(0,t.jsx)(n.code,{children:"bottom"})," und ",(0,t.jsx)(n.code,{children:"left"})," besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ ",(0,t.jsx)(n.code,{children:"KoliBriCustomIcon"}),", welches aus ",(0,t.jsx)(n.code,{children:"icon"})," (String, siehe oben) und ",(0,t.jsx)(n.code,{children:"style"})," (optional, Styleobjekt) besteht."]}),"\n",(0,t.jsx)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"\xdcbersicht Codicons"}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.p,{children:"Wichtig ist bei Kontext-relevanten Grafiken, dass sie beschriftet werden."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/",children:"https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"aria-label",children:"Aria-Label"}),"\n",(0,t.jsxs)(n.p,{children:["Mittels der Auszeichnung ",(0,t.jsx)(n.code,{children:"aria-label"})," muss ein Kontext-relevantes Icon beschriftet werden."]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_ariaLabel"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-label"})}),(0,t.jsx)(n.td,{children:"Gibt das Aria-Label am Icon an."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_icon"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icon"})}),(0,t.jsxs)(n.td,{children:["Setzt die Iconklasse (z.B.: ",(0,t.jsx)(n.code,{children:'_icons="codicon codicon-home'}),")."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_part"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_part"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Das Styling sollte stets \xfcber CSS erfolgen.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Gibt den Identifier f\xfcr den CSS-Part an, um das Icon von Au\xdfen \xe4ndern zu k\xf6nnen. (",(0,t.jsx)(n.a,{href:"https://meowni.ca/posts/part-theme-explainer/",children:"https://meowni.ca/posts/part-theme-explainer/"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Part"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"icon"'})}),(0,t.jsx)(n.td,{children:"Erm\xf6glicht das Styling des inneren Icons."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./alert",children:"kol-alert-wc"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./breadcrumb",children:"kol-breadcrumb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./details",children:"kol-details"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./icon-font-awesome",children:"kol-icon-font-awesome"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./icon-icofont",children:"kol-icon-icofont"})}),"\n",(0,t.jsx)(n.li,{children:"kol-input"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./input-checkbox",children:"kol-input-checkbox"})}),"\n",(0,t.jsx)(n.li,{children:"kol-link-wc"}),"\n",(0,t.jsx)(n.li,{children:"kol-span-wc"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n  kol-alert-wc --\x3e kol-icon\n  kol-breadcrumb --\x3e kol-icon\n  kol-details --\x3e kol-icon\n  kol-icon-font-awesome --\x3e kol-icon\n  kol-icon-icofont --\x3e kol-icon\n  kol-input --\x3e kol-icon\n  kol-input-checkbox --\x3e kol-icon\n  kol-link-wc --\x3e kol-icon\n  kol-span-wc --\x3e kol-icon\n  style kol-icon fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}var o=i(35863),a=i(94383);const c={title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",tags:["Icon","Beschreibung","Spezifikation","Beispiele"]},d=void 0,h={id:"components/icon",title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/icon.mdx",sourceDirName:"30-components",slug:"/components/icon",permalink:"/docs/1.5/components/icon",draft:!1,unlisted:!1,tags:[{label:"Icon",permalink:"/docs/1.5/tags/icon"},{label:"Beschreibung",permalink:"/docs/1.5/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/1.5/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",tags:["Icon","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"IconIcofont",permalink:"/docs/1.5/components/icon-icofont"},next:{title:"Image",permalink:"/docs/1.5/components/image"}},u={},p=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function x(e){const n={h2:"h2",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(a._,{component:"icon"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(o._,{component:"icon",sample:"basic"})]})}function b(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},35863:(e,n,i)=>{i.d(n,{_:()=>c});var t=i(67358),l=i(50959),s=i(11527);const r=function(e,n,i,t,l){return void 0===l&&(l="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${l}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},a=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(t.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:n,sample:i}=e;const[c,d]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},x=`/sample-react/#/${n}/${i}?hideMenus`,b={onSelect:(e,n)=>{switch(n){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return(0,s.jsxs)(t.UD,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===c&&(0,s.jsx)("iframe",{src:x,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===c&&(0,s.jsx)(a,{url:r(h,n,i,p.angular)})}),(0,s.jsx)("div",{children:"React"===c&&(0,s.jsx)(a,{url:r(h,n,i,p.react)})}),(0,s.jsx)("div",{children:"Vue"===c&&(0,s.jsx)(a,{url:r(h,n,i,p.vue)})}),(0,s.jsx)("div",{children:"Web Component"===c&&(0,s.jsx)(a,{url:r(h,n,i,p.webcomponent)})})]})}},94383:(e,n,i)=>{i.d(n,{_:()=>k});var t=i(71931),l=i(67358),s=i(50959),r=i(89346),o=i(11527);function a(e){const{label:n,name:i,update:t,value:r}=e;return(0,s.useEffect)((()=>{r||t(i,"#000000")}),[]),(0,o.jsx)(l.Np,{_label:"",_on:{onChange:(e,n)=>t(i,n)},_value:r,children:(0,o.jsx)("span",{slot:"expert",children:n})})}function c(e){const{attribute:n,label:i,update:t}=e,[r,a]=(0,s.useState)(""),[c,d]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[p,x]=(0,s.useState)("");let b=!1,m=!1,j=!1,f=!1;n.type.includes("KoliBriAllIcon")?(b=!0,m=!0,j=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(j=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(b=!0,m=!0)),(0,s.useEffect)((()=>{if(!r||c||h||p){const e={};r&&(e.left=`codicon codicon-${r}`),c&&(e.right=`codicon codicon-${c}`),h&&(e.top=`codicon codicon-${h}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${r}`)}),[r,c,h,p]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,o.jsxs)("div",{children:[i,b?(0,o.jsx)(l.ox,{_label:"Links",children:(0,o.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,o.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",m?(0,o.jsx)(l.ox,{_label:"Rechts",children:(0,o.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,o.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",j?(0,o.jsx)(l.ox,{_label:"Oben",children:(0,o.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,o.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,o.jsx)(l.ox,{_label:"Unten",children:(0,o.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,o.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):""]})}function d(e){const{name:n,label:i,types:t,update:s,value:r}=e,a=[];function c(e){return{label:e,value:e}}return t.includes("undefined")?(a.push({label:"-",value:void 0}),a.push(...t.filter((e=>"undefined"!==e)).map(c))):a.push(...t.filter((e=>"undefined"!==e)).map(c)),(0,o.jsx)(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(a),_on:{onChange:(e,i)=>s(n,i[0])},_value:r?[r]:void 0,children:(0,o.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,r=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,o.jsx)(l.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,o.jsx)(a,{name:n.name,label:s,update:i,value:t});case"_icons":return(0,o.jsx)(c,{attribute:n,label:s,update:i,value:t});default:switch(r){case"string":return(0,o.jsx)(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t||"",children:(0,o.jsx)("span",{slot:"expert",children:s})});case"number":return(0,o.jsx)(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t,children:(0,o.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,o.jsx)(l.TE,{className:"my-2",_checked:!0===t,_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,o.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,o.jsx)(d,{label:s,name:n.name,types:e,update:i,value:t}):(0,o.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,o.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,o.jsx)(o.Fragment,{children:h})}var u=i(22115),p=i(77192),x=i(85630),b=i.n(x);function m(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,s.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),a=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[s,o]of a)if(o){let e="";switch(typeof o){case"string":e=` ${s}="${o.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${o.toString()}"`;break;case"boolean":e=o?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(o)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const c=`<kol-${n}${l}>${r}</kol-${n}>`;let d;try{d=(0,p.format)(c,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(h){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,o.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,o.jsx)(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d})})}function j(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,version:l.u_}[e.tag];return t?(0,o.jsx)(t,{...n,children:i.map((e=>(0,o.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,o.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:t,value:l}=e;return(0,o.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,o.jsx)("b",{children:i||"default"}),": ",n,(0,o.jsx)("br",{}),(0,o.jsx)(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,s.useState)(function(){const e={};return Object.values(t.p).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,l=_[i]?.[t];l&&(e[i][t]=l)}))})),e}()),[a,c]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!t.p.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_label"===e.name))&&!n[a]?._label&&u("_label","Label-Text");!!t.p.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_heading"===e.name))&&!n[a]?._heading&&u("_heading","Heading-Text")}),[a]);const d=(0,s.useMemo)((()=>n[a]||{}),[n,a]);function u(e,n){i((i=>{const t={...i[a],[e]:n,defaultValues:i[a].defaultValues.filter((n=>n!==e))};return{...i,[a]:t}}))}const p=Object.values(t.p).find((e=>e.name===`kol-${a}`));return(0,o.jsx)(r.Z,{children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,o.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,o.jsxs)(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,o.jsx)("div",{className:"p-2",children:(0,o.jsx)(j,{tag:a,params:d})}),(0,o.jsx)("div",{className:"lg:col-span-2",children:(0,o.jsx)(m,{params:d,tag:a})})]}),(0,o.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,o.jsx)(l.HA,{_level:3,_label:"Konfigurator"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(l.HA,{_level:4,_label:"Properties"}),(0,o.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,o.jsx)(o.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,o.jsx)(h,{attribute:e,update:u,value:d[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,o.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,o.jsx)(l.HA,{_level:4,_label:"Slots"}),(0,o.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,o.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:d["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,o.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);