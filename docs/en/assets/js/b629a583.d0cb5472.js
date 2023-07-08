"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9383],{53808:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(98587),l=n(50959);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},i=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,c]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,d={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},u=`/sample-react/#/${t}/${n}`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:u,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(i,{url:r(m,t,n,d.angular)})),l.createElement("div",null,"React"===s&&l.createElement(i,{url:r(m,t,n,d.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(i,{url:r(m,t,n,d.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(i,{url:r(m,t,n,d.webcomponent)})))}},13995:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(9053),l=n(98587),r=n(50959),o=n(90391);function i(e){const{attribute:t,label:n,update:a,value:o}=e,[i,s]=(0,r.useState)(""),[c,m]=(0,r.useState)(""),[p,d]=(0,r.useState)(""),[u,b]=(0,r.useState)("");let g=!1,f=!1,k=!1,h=!1;t.type.includes("KoliBriAllIcon")?(g=!0,f=!0,k=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(k=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,f=!0)),(0,r.useEffect)((()=>{if(!i||c||p||u){const e={};i&&(e.left=`codicon codicon-${i}`),c&&(e.right=`codicon codicon-${c}`),p&&(e.top=`codicon codicon-${p}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${i}`)}),[i,c,p,u]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,g?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",f?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",k?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",h?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:o}=e;return(0,r.useEffect)((()=>{o||a(n,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:o},t)}function c(e){const{name:t,label:n,types:a,update:o,value:i}=e,s=[];function c(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(c))):s.push(...a.filter((e=>"undefined"!==e)).map(c)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>o(t,n[0])},_value:i},n)}function m(e){const{attribute:t,update:n,value:a}=e,o=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(s,{name:t.name,label:m,update:n,value:a});case"_icon":return r.createElement(i,{attribute:t,label:m,update:n,value:a});default:switch(o){case"string":return r.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return r.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?r.createElement(c,{label:m,name:t.name,types:e,update:n,value:a}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return r.createElement(r.Fragment,null,m)}var p=n(80376),d=n(77192),u=n(85630),b=n.n(u);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const o=(0,r.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),i=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[r,p]of i)if(p){let e="";switch(typeof p){case"string":e=` ${r}="${p.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${p.toString()}"`;break;case"boolean":e=p?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(p)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${o}</kol-${t}>`;let c;try{c=(0,d.format)(s,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(m){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(p.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c}))}function f(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?r.createElement(a,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function k(e){const{description:t,name:n,update:a,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n||"default"),": ",t,r.createElement("br",null),r.createElement(p.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const h=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,r.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[i,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${i}`))?.attributes.find((e=>"_label"===e.name))&&!t[i]?._label&&p("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${i}`))?.attributes.find((e=>"_heading"===e.name))&&!t[i]?._heading&&p("_heading","Heading-Text")}),[i]);const c=(0,r.useMemo)((()=>t[i]||{}),[t,i]);function p(e,t){n((n=>{const a={...n[i],[e]:t,defaultValues:n[i].defaultValues.filter((t=>t!==e))};return{...n,[i]:a}}))}const d=Object.values(a.p).find((e=>e.name===`kol-${i}`));return r.createElement(o.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(f,{tag:i,params:c})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(g,{params:c,tag:i}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},d&&d.attributes.map((e=>r.createElement(r.Fragment,null,!h.includes(e.name)&&r.createElement(m,{key:e.name,attribute:e,update:p,value:c[e.name]})))),d&&0===d.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},d&&d.slots.map((e=>r.createElement(k,{key:e.name,description:e.description,name:e.name,update:p,value:c["slot-"+e.name]}))),d&&0===d.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},99048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>b});var a=n(15882),l=(n(50959),n(17942));const r={toc:[{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2}]},o="wrapper";function i(e){let{components:t,...n}=e;return(0,l.kt)(o,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("kol-badge",{_label:"untested"})," Diese neue Komponente wird als ungetestet markiert, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten auch erst nach einem abgeschlossenen Release erfolgen.")),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Popover"),"-Komponente stellt eine M\xf6glichkeit dar zus\xe4tzliche Inhalte in ein tempor\xe4res Element zu setzen, das, \xe4hnlich wie ",(0,l.kt)("kol-link",{_href:"",_label:"Tooltip"}),", um sein Triggerelement angeordnet ist.\nDas Triggerelement ist immer das im HTML vorangehende Element (previousSibling)."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_align")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_align")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Ausrichtung des Popovers in Relation zum Triggerelement."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_show")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Komponente entweder ein- oder ausgeblendet ist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Der Inhalt des Popover.")))),(0,l.kt)("hr",null))}i.isMDXComponent=!0;var s=n(53808),c=n(13995);const m={title:"Popover",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Popover-Komponente.",tags:["Popover","Beschreibung","Spezifikation","Beispiele"]},p=void 0,d={unversionedId:"components/popover",id:"components/popover",title:"Popover",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Popover-Komponente.",source:"@site/docs/30-components/popover.mdx",sourceDirName:"30-components",slug:"/components/popover",permalink:"/en/docs/components/popover",draft:!1,tags:[{label:"Popover",permalink:"/en/docs/tags/popover"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Popover",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Popover-Komponente.",tags:["Popover","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/en/docs/components/pagination"},next:{title:"Progress",permalink:"/en/docs/components/progress"}},u={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:b},f="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(c._,{component:"popover",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(s._,{component:"popover",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);