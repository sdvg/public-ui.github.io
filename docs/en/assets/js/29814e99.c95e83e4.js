"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[811],{65795:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(40764),l=n(50959);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,c]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},p=`/sample-react/#/${t}/${n}`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:r(m,t,n,u.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:r(m,t,n,u.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:r(m,t,n,u.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:r(m,t,n,u.webcomponent)})))}},92219:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(67695),l=n(40764),r=n(50959),i=n(65048);function o(e){const{attribute:t,label:n,update:a,value:i}=e,[o,s]=(0,r.useState)(""),[c,m]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[p,b]=(0,r.useState)("");let k=!1,g=!1,f=!1,h=!1;t.type.includes("KoliBriAllIcon")?(k=!0,g=!0,f=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(f=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,g=!0)),(0,r.useEffect)((()=>{if(!o||c||d||p){const e={};o&&(e.left=`codicon codicon-${o}`),c&&(e.right=`codicon codicon-${c}`),d&&(e.top=`codicon codicon-${d}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,c,d,p]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,k?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",g?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",f?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",h?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:i}=e;return(0,r.useEffect)((()=>{i||a(n,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function c(e){const{name:t,label:n,types:a,update:i,value:o}=e,s=[];function c(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(c))):s.push(...a.filter((e=>"undefined"!==e)).map(c)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>i(t,n[0])},_value:o},n)}function m(e){const{attribute:t,update:n,value:a}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(s,{name:t.name,label:m,update:n,value:a});case"_icon":return r.createElement(o,{attribute:t,label:m,update:n,value:a});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return r.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?r.createElement(c,{label:m,name:t.name,types:e,update:n,value:a}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return r.createElement(r.Fragment,null,m)}var d=n(45413),u=n(77192),p=n(85630),b=n.n(p);function k(e){const{tag:t,params:n}=e;let a="";const l=(0,r.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[r,c]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(c){let e="";switch(typeof c){case"string":e=` ${r}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${c.toString()}"`;break;case"boolean":e=c?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const i=`<kol-${t}${a}>${l}</kol-${t}>`;let o;try{o=(0,u.format)(i,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(s){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${i}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(d.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?r.createElement(a,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function f(e){const{description:t,name:n,update:a,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n||"default"),": ",t,r.createElement("br",null),r.createElement(d.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const h=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,r.useState)({}),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&d("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&d("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function d(e,t){n((n=>{const a={...n[o],[e]:t};return console.log(a),{...n,[o]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(g,{tag:o,params:c})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(k,{params:c,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},u&&u.attributes.map((e=>r.createElement(r.Fragment,null,!h.includes(e.name)&&r.createElement(m,{key:e.name,attribute:e,update:d,value:c[e.name]})))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},u&&u.slots.map((e=>r.createElement(f,{key:e.name,description:e.description,name:e.name,update:d,value:c["slot-"+e.name]}))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},95463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>m,metadata:()=>u,toc:()=>b});var a=n(15882),l=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Form"),"-Komponente dient dazu alle Eingabefelder zu umschlie\xdfen, den Hinweistext f\xfcr Pflichtfelder korrekt zu positionieren und die Events ",(0,l.kt)("inlineCode",{parentName:"p"},"submit")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"reset")," weiterzuleiten."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-form>\n    <kol-input-text _id="firstname">Vorname</kol-input-text>\n    <kol-input-text _id="lastname">Nachname</kol-input-text>\n</kol-form>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("kol-form",null,(0,l.kt)("kol-input-text",{_id:"firstname"},"Vorname"),(0,l.kt)("kol-input-text",{_id:"lastname"},"Nachname")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr die Form-Events an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onSubmit?: EventCallback<Event>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; onReset?: EventCallback<Event>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_requiredText")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_required-text")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Pflichtfeld-Hinweis eingeblendet werden soll. Ein String \xfcberschreibt den Standardtext."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Inhalt der Form.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./indented-text"},"kol-indented-text"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-form --\x3e kol-indented-text\n  style kol-form fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var s=n(65795),c=n(92219);const m={title:"Form",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Form-Komponente.",tags:["Form","Beschreibung","Spezifikation","Beispiele"]},d=void 0,u={unversionedId:"components/form",id:"components/form",title:"Form",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Form-Komponente.",source:"@site/docs/30-components/form.mdx",sourceDirName:"30-components",slug:"/components/form",permalink:"/en/docs/components/form",draft:!1,tags:[{label:"Form",permalink:"/en/docs/tags/form"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Form",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Form-Komponente.",tags:["Form","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Details",permalink:"/en/docs/components/details"},next:{title:"Heading",permalink:"/en/docs/components/heading"}},p={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],k={toc:b},g="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(c._,{component:"form",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(s._,{component:"form",sample:"basic",mdxType:"Configurator"}))}f.isMDXComponent=!0}}]);