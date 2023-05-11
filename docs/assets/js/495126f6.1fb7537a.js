"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8808],{49173:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(6570),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},r=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,c]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},u=`/sample-react/#/${t}/${n}`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:u,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(r,{url:i(m,t,n,p.angular)})),l.createElement("div",null,"React"===s&&l.createElement(r,{url:i(m,t,n,p.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(r,{url:i(m,t,n,p.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(r,{url:i(m,t,n,p.webcomponent)})))}},26541:(e,t,n)=>{n.d(t,{_:()=>h});var a=n(30250),l=n(6570),i=n(50959),o=n(35613);function r(e){const{attribute:t,label:n,update:a,value:o}=e,[r,s]=(0,i.useState)(""),[c,m]=(0,i.useState)(""),[d,p]=(0,i.useState)(""),[u,b]=(0,i.useState)("");let g=!1,k=!1,v=!1,f=!1;t.type.includes("KoliBriAllIcon")?(g=!0,k=!0,v=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(v=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,k=!0)),(0,i.useEffect)((()=>{if(!r||c||d||u){const e={};r&&(e.left=`codicon codicon-${r}`),c&&(e.right=`codicon codicon-${c}`),d&&(e.top=`codicon codicon-${d}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${r}`)}),[r,c,d,u]);const h=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,g?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},h.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",k?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},h.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",v?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},h.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>p(e)}}))))):"",f?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},h.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:o}=e;return(0,i.useEffect)((()=>{o||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:o},t)}function c(e){const{name:t,label:n,types:a,update:o,value:r}=e,s=[];function c(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(c))):s.push(...a.filter((e=>"undefined"!==e)).map(c)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>o(t,n[0])},_value:r},n)}function m(e){const{attribute:t,update:n,value:a}=e,o=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(s,{name:t.name,label:m,update:n,value:a});case"_icon":return i.createElement(r,{attribute:t,label:m,update:n,value:a});default:switch(o){case"string":return i.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return i.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?i.createElement(c,{label:m,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,m)}var d=n(45413),p=n(77192),u=n(63273),b=n.n(u);function g(e){const{tag:t,params:n}=e;let a="";const l=(0,i.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[i,o]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(o){let e="";switch(typeof o){case"string":e=` ${i}="${o.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${o.toString()}"`;break;case"boolean":e=o?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(o)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(d.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:(0,p.format)(`<kol-${t}${a}>${l}</kol-${t}>`,{parser:"html",plugins:[b()],printWidth:80})}))}function k(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function v(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n),": ",t,i.createElement("br",null),i.createElement(d.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function h(e){const[t,n]=(0,i.useState)({}),[r,s]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_label"===e.name))&&!t[r]?._label&&d("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_heading"===e.name))&&!t[r]?._heading&&d("_heading","Heading-Text")}),[r]);const c=(0,i.useMemo)((()=>t[r]||{}),[t,r]);function d(e,t){n((n=>{const a={...n[r],[e]:t};return console.log(a),{...n,[r]:a}}))}const p=Object.values(a.p).find((e=>e.name===`kol-${r}`));return i.createElement(o.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(k,{tag:r,params:c})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(g,{params:c,tag:r}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},p&&p.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&i.createElement(m,{key:e.name,attribute:e,update:d,value:c[e.name]})))),p&&0===p.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},p&&p.slots.map((e=>i.createElement(v,{key:e.name,description:e.description,name:e.name,update:d,value:c["slot-"+e.name]}))),p&&0===p.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},95594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>p,toc:()=>b});var a=n(15882),l=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},o="wrapper";function r(e){let{components:t,...n}=e;return(0,l.kt)(o,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Version"),"-Komponente stellt kurze Inhalte auf einem farbigen Hintergrund dar. Die ",(0,l.kt)("strong",{parentName:"p"},"Version"),"-Komponente ist mit der ",(0,l.kt)("strong",{parentName:"p"},"Tag"),"-Komponente eng verwandt, bietet aber nur ein Attribut zur Konfiguration. Sie ist optimiert f\xfcr die Angabe z.B. von Versionen einer Seite."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <kol-version _version="1.44.0"></kol-version>\n</div>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-version",{_version:"1.44.0"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("p",null,"F\xfcr die Konfiguration steht das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_version"))," zur Verf\xfcgung und nimmt einen beliebigen Text auf, dem in der Komponente ein ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," vorgestellt wird."),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Version")," wird standardm\xe4\xdfig als ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Inline-Element"))," ausgegeben."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_version")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_version")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die Versionsnummer als Text an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./badge"},"kol-badge"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-version --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-span-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-tooltip --\x3e kol-span-wc\n  style kol-version fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}r.isMDXComponent=!0;var s=n(49173),c=n(26541);const m={title:"Version",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Version-Komponente.",tags:["Version","Beschreibung","Spezifikation","Beispiele"]},d=void 0,p={unversionedId:"components/version",id:"components/version",title:"Version",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Version-Komponente.",source:"@site/docs/30-components/version.mdx",sourceDirName:"30-components",slug:"/components/version",permalink:"/docs/components/version",draft:!1,tags:[{label:"Version",permalink:"/docs/tags/version"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Version",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Version-Komponente.",tags:["Version","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Tooltip",permalink:"/docs/components/tooltip"},next:{title:"Formular-Handling",permalink:"/docs/formular-handling"}},u={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:b},k="wrapper";function v(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(c._,{component:"version",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(s._,{component:"version",sample:"basic",mdxType:"Configurator"}),(0,l.kt)(s._,{component:"version",sample:"context",mdxType:"Configurator"}))}v.isMDXComponent=!0}}]);