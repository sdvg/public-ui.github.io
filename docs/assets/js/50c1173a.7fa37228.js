"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1339],{63739:(e,t,a)=>{a.d(t,{_:()=>c});var l=a(21887),n=a(50959);const o=function(e,t,a,l,n){return void 0===n&&(n="editor"),`${e}&module=${l}&initialpath=%23%2F${t}%2F${a}&view=${n}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},r=e=>{let{url:t}=e;return n.createElement("div",{className:"m-2"},n.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),n.createElement(l.Nv,{_href:t,_label:"",_target:"codesandbox"},n.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},c=e=>{let{component:t,sample:a}=e;const[c,s]=(0,n.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,d={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${a}`,b={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return n.createElement(l.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},n.createElement("div",null,"Preview"===c&&n.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),n.createElement("div",null,"Angular"===c&&n.createElement(r,{url:o(m,t,a,d.angular)})),n.createElement("div",null,"React"===c&&n.createElement(r,{url:o(m,t,a,d.react)})),n.createElement("div",null,"Vue"===c&&n.createElement(r,{url:o(m,t,a,d.vue)})),n.createElement("div",null,"Web Component"===c&&n.createElement(r,{url:o(m,t,a,d.webcomponent)})))}},49433:(e,t,a)=>{a.d(t,{_:()=>E});var l=a(60840),n=a(21887),o=a(50959),i=a(29886);function r(e){const{attribute:t,label:a,update:l,value:i}=e,[r,c]=(0,o.useState)(""),[s,m]=(0,o.useState)(""),[u,d]=(0,o.useState)(""),[p,b]=(0,o.useState)("");let f=!1,g=!1,h=!1,v=!1;t.type.includes("KoliBriAllIcon")?(f=!0,g=!0,h=!0,v=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,v=!0),t.type.includes("KoliBriHorizontalIcon")&&(f=!0,g=!0)),(0,o.useEffect)((()=>{if(!r||s||u||p){const e={};r&&(e.left=`codicon codicon-${r}`),s&&(e.right=`codicon codicon-${s}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&l(t.name,JSON.stringify(e))}else l(t.name,`codicon codicon-${r}`)}),[r,s,u,p]);const E=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return o.createElement("div",null,a,f?o.createElement(n.ox,{_summary:"Links"},o.createElement("div",{className:"flex flex-wrap"},E.map((e=>o.createElement(n.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",g?o.createElement(n.ox,{_summary:"Rechts"},o.createElement("div",{className:"flex flex-wrap"},E.map((e=>o.createElement(n.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",h?o.createElement(n.ox,{_summary:"Oben"},o.createElement("div",{className:"flex flex-wrap"},E.map((e=>o.createElement(n.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",v?o.createElement(n.ox,{_summary:"Unten"},o.createElement("div",{className:"flex flex-wrap"},E.map((e=>o.createElement(n.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function c(e){const{label:t,name:a,update:l,value:i}=e;return(0,o.useEffect)((()=>{i||l(a,"#000000")}),[]),o.createElement(n.Np,{_on:{onChange:(e,t)=>l(a,t)},_value:i},t)}function s(e){const{name:t,label:a,types:l,update:i,value:r}=e,c=[];function s(e){return{label:e,value:e}}return l.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...l.filter((e=>"undefined"!==e)).map(s))):c.push(...l.filter((e=>"undefined"!==e)).map(s)),o.createElement(n.r7,{className:"my-2",_list:JSON.stringify(c),_on:{onChange:(e,a)=>i(t,a[0])},_value:r?[r]:void 0},a)}function m(e){const{attribute:t,update:a,value:l}=e,i=(0,o.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,o.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=o.createElement(n.T5,{_title:t.description},t.name);switch(t.name){case"_color":return o.createElement(c,{name:t.name,label:m,update:a,value:l});case"_icon":return o.createElement(r,{attribute:t,label:m,update:a,value:l});default:switch(i){case"string":return o.createElement(n.WD,{className:"my-2",_label:!1,_on:{onChange:(e,l)=>a(t.name,l)},_value:l||""},m);case"number":return o.createElement(n.c2,{className:"my-2",_label:!1,_on:{onChange:(e,l)=>a(t.name,l)},_value:l},m);case"boolean":return o.createElement(n.TE,{className:"my-2",_checked:!0===l,_label:!1,_on:{onChange:(e,l)=>a(t.name,l)},_variant:"switch",_value:!0},m);default:return e.length>1?o.createElement(s,{label:m,name:t.name,types:e,update:a,value:l}):o.createElement("p",null,"Attribut: '",t.name,"'",o.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,l]);return o.createElement(o.Fragment,null,m)}var u=a(20712),d=a(77192),p=a(85630),b=a.n(p);function f(e){const{tag:t,params:a}=e,l=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let n="";const i=(0,o.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],l=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${l}"`+a.substring(t)}else e+=`<div slot="${l}">${a}</div>`})),e}),[a]),r=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[o,u]of r)if(u){let e="";switch(typeof u){case"string":e=` ${o}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${o}="${u.toString()}"`;break;case"boolean":e=u?` ${o}`:"";break;case"object":e=` ${o}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}n+=e}const c=`<kol-${t}${n}>${i}</kol-${t}>`;let s;try{s=(0,d.format)(c,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(m){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return o.createElement("div",{className:"h-48 rounded-md overflow-hidden"},o.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const a=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),l={abbr:n.T5,accordion:n.RZ,alert:n.K5,avatar:n.Ek,badge:n.Er,breadcrumb:n.lo,button:n.ic,"button-group":n.uz,"button-link":n.f6,card:n.Gc,details:n.ox,form:n.m5,heading:n.HA,icon:n.Jl,image:n.Cd,"indented-text":n.CV,"input-checkbox":n.TE,"input-color":n.Np,"input-date":n.O,"input-email":n.Lj,"input-file":n.CX,"input-number":n.c2,"input-password":n.z5,"input-radio":n.sy,"input-range":n.TQ,"input-text":n.WD,kolibri:n.Vs,link:n.Nv,"link-button":n.Kc,"link-group":n.$o,logo:n.QK,modal:n.Ud,nav:n.MA,pagination:n.Q4,popover:n.hV,progress:n.WR,quote:n.VZ,select:n.r7,"skip-nav":n.P,spin:n.qq,"split-button":n.KJ,symbol:n.is,table:n.Vp,tabs:n.UD,textarea:n.Qs,toast:n.CO,tooltip:n.KolTooltip,version:n.u_}[e.tag];return l?o.createElement(l,t,a.map((e=>o.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):o.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:a,update:l,value:n}=e;return o.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},o.createElement("b",null,a||"default"),": ",t,o.createElement("br",null),o.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:n}))}const v=["_smart-button","_icon-align"];function E(e){const[t,a]=(0,o.useState)(function(){const e={};return Object.values(l.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[a][t.name]=t.defaultValue.replaceAll("'",""),e[a].defaultValues.push(t.name))}))})),e}()),[r,c]=(0,o.useState)("badge");(0,o.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,o.useEffect)((()=>{!!l.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_label"===e.name))&&!t[r]?._label&&u("_label","Label-Text");!!l.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_heading"===e.name))&&!t[r]?._heading&&u("_heading","Heading-Text")}),[r]);const s=(0,o.useMemo)((()=>t[r]||{}),[t,r]);function u(e,t){a((a=>{const l={...a[r],[e]:t,defaultValues:a[r].defaultValues.filter((t=>t!==e))};return{...a,[r]:l}}))}const d=Object.values(l.p).find((e=>e.name===`kol-${r}`));return o.createElement(i.Z,null,(()=>o.createElement(o.Fragment,null,o.createElement(n.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),o.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},o.createElement(n.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},o.createElement("div",{className:"p-2"},o.createElement(g,{tag:r,params:s})),o.createElement("div",{className:"lg:col-span-2"},o.createElement(f,{params:s,tag:r}))),o.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},o.createElement(n.HA,{_level:3,_label:"Konfigurator"}),o.createElement("div",null,o.createElement(n.HA,{_level:4,_label:"Properties"}),o.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},d&&d.attributes.map((e=>o.createElement(o.Fragment,null,!v.includes(e.name)&&!e.description.startsWith("Deprecated:")&&o.createElement(m,{key:e.name,attribute:e,update:u,value:s[e.name]})))),d&&0===d.attributes.length&&o.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),o.createElement(n.HA,{_level:4,_label:"Slots"}),o.createElement("div",{className:"max-h-56 p-2 overflow-auto"},d&&d.slots.map((e=>o.createElement(h,{key:e.name,description:e.description,name:e.name,update:u,value:s["slot-"+e.name]}))),d&&0===d.slots.length&&o.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},71025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var l=a(15882),n=(a(50959),a(17942)),o=(a(63739),a(49433));const i={title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},r=void 0,c={unversionedId:"components/kolibri",id:"components/kolibri",title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",source:"@site/docs/30-components/kolibri.mdx",sourceDirName:"30-components",slug:"/components/kolibri",permalink:"/docs/components/kolibri",draft:!1,tags:[{label:"KoliBri",permalink:"/docs/tags/koli-bri"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputText",permalink:"/docs/components/input-text"},next:{title:"LinkButton",permalink:"/docs/components/link-button"}},s={},m=[{value:"Live-Editor",id:"live-editor",level:2}],u={toc:m},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,n.kt)(o._,{component:"kolibri",mdxType:"LiveEditorCompact"}))}p.isMDXComponent=!0}}]);