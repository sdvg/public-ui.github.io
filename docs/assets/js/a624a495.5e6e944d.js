"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[125],{65795:(e,t,n)=>{n.d(t,{_:()=>s});var l=n(40764),a=n(50959);const r=function(e,t,n,l,a){return void 0===a&&(a="editor"),`${e}&module=${l}&initialpath=%23%2F${t}%2F${n}&view=${a}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(l.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,c]=(0,a.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},m=`/sample-react/#/${t}/${n}`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return a.createElement(l.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===s&&a.createElement("iframe",{src:m,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),a.createElement("div",null,"Angular"===s&&a.createElement(o,{url:r(d,t,n,u.angular)})),a.createElement("div",null,"React"===s&&a.createElement(o,{url:r(d,t,n,u.react)})),a.createElement("div",null,"Vue"===s&&a.createElement(o,{url:r(d,t,n,u.vue)})),a.createElement("div",null,"Web Component"===s&&a.createElement(o,{url:r(d,t,n,u.webcomponent)})))}},92219:(e,t,n)=>{n.d(t,{_:()=>v});var l=n(67695),a=n(40764),r=n(50959),i=n(65048);function o(e){const{attribute:t,label:n,update:l,value:i}=e,[o,s]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[p,u]=(0,r.useState)(""),[m,b]=(0,r.useState)("");let g=!1,k=!1,h=!1,f=!1;t.type.includes("KoliBriAllIcon")?(g=!0,k=!0,h=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,k=!0)),(0,r.useEffect)((()=>{if(!o||c||p||m){const e={};o&&(e.left=`codicon codicon-${o}`),c&&(e.right=`codicon codicon-${c}`),p&&(e.top=`codicon codicon-${p}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&l(t.name,JSON.stringify(e))}else l(t.name,`codicon codicon-${o}`)}),[o,c,p,m]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,g?r.createElement(a.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",k?r.createElement(a.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",h?r.createElement(a.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",f?r.createElement(a.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function s(e){const{label:t,name:n,update:l,value:i}=e;return(0,r.useEffect)((()=>{i||l(n,"#000000")}),[]),r.createElement(a.Np,{_on:{onChange:(e,t)=>l(n,t)},_value:i},t)}function c(e){const{name:t,label:n,types:l,update:i,value:o}=e,s=[];function c(e){return{label:e,value:e}}return l.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...l.filter((e=>"undefined"!==e)).map(c))):s.push(...l.filter((e=>"undefined"!==e)).map(c)),r.createElement(a.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>i(t,n[0])},_value:o},n)}function d(e){const{attribute:t,update:n,value:l}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),d=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),d=r.createElement(a.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(s,{name:t.name,label:d,update:n,value:l});case"_icon":return r.createElement(o,{attribute:t,label:d,update:n,value:l});default:switch(i){case"string":return r.createElement(a.WD,{className:"my-2",_on:{onChange:(e,l)=>n(t.name,l)},_value:l||""},d);case"number":return r.createElement(a.c2,{className:"my-2",_on:{onChange:(e,l)=>n(t.name,l)},_value:l},d);case"boolean":return r.createElement(a.TE,{className:"my-2",_checked:l,_on:{onChange:(e,l)=>n(t.name,l)},_variant:"switch"},d);default:return e.length>1?r.createElement(c,{label:d,name:t.name,types:e,update:n,value:l}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,l]);return r.createElement(r.Fragment,null,d)}var p=n(45413),u=n(77192),m=n(85630),b=n.n(m);function g(e){const{tag:t,params:n}=e;let l="";const a=(0,r.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],l=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${l}"`+n.substring(t)}else e+=`<div slot="${l}">${n}</div>`})),e}),[n]);for(const[r,c]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(c){let e="";switch(typeof c){case"string":e=` ${r}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${c.toString()}"`;break;case"boolean":e=c?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const i=`<kol-${t}${l}>${a}</kol-${t}>`;let o;try{o=(0,u.format)(i,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(s){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${i}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(p.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function k(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),l={abbr:a.T5,accordion:a.RZ,alert:a.K5,badge:a.Er,breadcrumb:a.lo,button:a.ic,"button-group":a.uz,"button-link":a.f6,card:a.Gc,details:a.ox,form:a.m5,heading:a.HA,icon:a.Jl,image:a.Cd,"indented-text":a.CV,"input-checkbox":a.TE,"input-color":a.Np,"input-date":a.O,"input-email":a.Lj,"input-file":a.CX,"input-number":a.c2,"input-password":a.z5,"input-radio":a.sy,"input-range":a.TQ,"input-text":a.WD,kolibri:a.Vs,link:a.Nv,"link-button":a.Kc,"link-group":a.$o,logo:a.QK,modal:a.Ud,nav:a.MA,pagination:a.Q4,popover:a.hV,progress:a.WR,quote:a.VZ,select:a.r7,"skip-nav":a.P,spin:a.qq,symbol:a.is,table:a.Vp,tabs:a.UD,textarea:a.Qs,toast:a.CO,tooltip:a.Ze,version:a.u_}[e.tag];return l?r.createElement(l,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:l,value:a}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n||"default"),": ",t,r.createElement("br",null),r.createElement(p.ML,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:a}))}const f=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,r.useState)({}),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&p("_label","Label-Text");!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&p("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function p(e,t){n((n=>{const l={...n[o],[e]:t};return console.log(l),{...n,[o]:l}}))}const u=Object.values(l.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(a.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(a.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(k,{tag:o,params:c})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(g,{params:c,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(a.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(a.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},u&&u.attributes.map((e=>r.createElement(r.Fragment,null,!f.includes(e.name)&&r.createElement(d,{key:e.name,attribute:e,update:p,value:c[e.name]})))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(a.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},u&&u.slots.map((e=>r.createElement(h,{key:e.name,description:e.description,name:e.name,update:p,value:c["slot-"+e.name]}))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},16524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>b});var l=n(15882),a=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Angabe der Beschreibung zur Abk\xfcrzung",id:"angabe-der-beschreibung-zur-abk\xfcrzung",level:3},{value:"Ausrichtung des Tooltip",id:"ausrichtung-des-tooltip",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,l.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Abbr"),"-Komponente implementiert den HTML-Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"abbr"),", wobei hier jedoch der Tooltip barrierefrei ist.\nDer Tooltip f\xfcr die Beschreibung wird bei Focus oder Hover der ",(0,a.kt)("strong",{parentName:"p"},"Abbr"),"-Komponente angezeigt und vorgelesen."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<p>Ich bin eine <kol-abbr _title="Abk\xfcrzung" _tooltip-align="top">Abbr</kol-abbr> mit Tooltip oben.</p>\n<p>Ich bin eine <kol-abbr _title="Abk\xfcrzung" _tooltip-align="right">Abbr</kol-abbr> mit Tooltip rechts.</p>\n<p>Ich bin eine <kol-abbr _title="Abk\xfcrzung" _tooltip-align="bottom">Abbr</kol-abbr> mit Tooltip unten.</p>\n<p>Ich bin eine <kol-abbr _title="Abk\xfcrzung" _tooltip-align="left">Abbr</kol-abbr> mit Tooltip links.</p>\n')),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,"Ich bin eine ",(0,a.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"top"},"Abbr")," mit Tooltip oben."),(0,a.kt)("p",null,"Ich bin eine ",(0,a.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"right"},"Abbr")," mit Tooltip rechts."),(0,a.kt)("p",null,"Ich bin eine ",(0,a.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"bottom"},"Abbr")," mit Tooltip unten."),(0,a.kt)("p",null,"Ich bin eine ",(0,a.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"left"},"Abbr")," mit Tooltip links."),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("h3",{id:"angabe-der-beschreibung-zur-abk\xfcrzung"},"Angabe der Beschreibung zur Abk\xfcrzung"),(0,a.kt)("p",null,"Der Begriff bzw. die Erkl\xe4rung wird \xfcber das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_title"))," \xfcbergeben, die Abk\xfcrzung bzw. der erkl\xe4rungsw\xfcrdige Begriff kommt zwischen die Tags im HTML."),(0,a.kt)("h3",{id:"ausrichtung-des-tooltip"},"Ausrichtung des Tooltip"),(0,a.kt)("p",null,"\xdcber das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_tooltip-align"))," wird die Positionierung des ToolTip, relativ zur Abk\xfcrzung, festgelegt."),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("p",null,"Die Abbr-Komponente wurde von KoliBri umgesetzt, weil der Standard-Tooltip nicht barrierefrei bzgl. der Skalierung ist.\nDer KoliBri Tooltip kann von Screenreadern vorgelesen werden und ver\xe4ndert seine Gr\xf6\xdfe beim Zoomen korrekt."),(0,a.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr"},"https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr"))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_title")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_title")),(0,a.kt)("td",{parentName:"tr",align:null},"Dieses Property gibt die Beschreibung oder Erl\xe4uterung der Abk\xfcrzung an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip bevorzugt entweder oben, rechts, unten oder links angezeigt werden soll."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'top'"))))),(0,a.kt)("h2",{id:"slots"},"Slots"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Slot"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Der Begriff, der erl\xe4utert werden soll.")))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"depends-on"},"Depends on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./tooltip"},"kol-tooltip"))),(0,a.kt)("h3",{id:"graph"},"Graph"),(0,a.kt)("mermaid",{value:"graph TD;\n  kol-abbr --\x3e kol-tooltip\n  kol-tooltip --\x3e kol-span-wc\n  kol-span-wc --\x3e kol-icon\n  style kol-abbr fill:#f9f,stroke:#333,stroke-width:4px"}),(0,a.kt)("hr",null))}o.isMDXComponent=!0;var s=n(65795),c=n(92219);const d={title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",tags:["Abbr","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/abbr",id:"components/abbr",title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",source:"@site/docs/30-components/abbr.mdx",sourceDirName:"30-components",slug:"/components/abbr",permalink:"/docs/components/abbr",draft:!1,tags:[{label:"Abbr",permalink:"/docs/tags/abbr"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Abbr",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Abbr-Komponente.",tags:["Abbr","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Sicherheit",permalink:"/docs/concepts/sicherheit"},next:{title:"Accordion",permalink:"/docs/components/accordion"}},m={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:b},k="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,a.kt)(c._,{component:"abbr",mdxType:"LiveEditorCompact"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(s._,{component:"abbr",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);