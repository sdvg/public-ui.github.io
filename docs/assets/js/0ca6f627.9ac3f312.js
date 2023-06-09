"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6953],{65795:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(40764),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,c]=(0,l.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},u=`/sample-react/#/${t}/${n}`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:u,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:i(d,t,n,m.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:i(d,t,n,m.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:i(d,t,n,m.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:i(d,t,n,m.webcomponent)})))}},92219:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(67695),l=n(40764),i=n(50959),r=n(65048);function o(e){const{attribute:t,label:n,update:a,value:r}=e,[o,s]=(0,i.useState)(""),[c,d]=(0,i.useState)(""),[p,m]=(0,i.useState)(""),[u,b]=(0,i.useState)("");let k=!1,g=!1,h=!1,f=!1;t.type.includes("KoliBriAllIcon")?(k=!0,g=!0,h=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,g=!0)),(0,i.useEffect)((()=>{if(!o||c||p||u){const e={};o&&(e.left=`codicon codicon-${o}`),c&&(e.right=`codicon codicon-${c}`),p&&(e.top=`codicon codicon-${p}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,c,p,u]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,k?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",g?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",f?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function c(e){const{name:t,label:n,types:a,update:r,value:o}=e,s=[];function c(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(c))):s.push(...a.filter((e=>"undefined"!==e)).map(c)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>r(t,n[0])},_value:o},n)}function d(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),d=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),d=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(s,{name:t.name,label:d,update:n,value:a});case"_icon":return i.createElement(o,{attribute:t,label:d,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},d);case"number":return i.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},d);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},d);default:return e.length>1?i.createElement(c,{label:d,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,d)}var p=n(45413),m=n(77192),u=n(85630),b=n.n(u);function k(e){const{tag:t,params:n}=e;let a="";const l=(0,i.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[i,c]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(c){let e="";switch(typeof c){case"string":e=` ${i}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${c.toString()}"`;break;case"boolean":e=c?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const r=`<kol-${t}${a}>${l}</kol-${t}>`;let o;try{o=(0,m.format)(r,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(s){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${r}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(p.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(p.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,i.useState)({}),[o,s]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&p("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&p("_heading","Heading-Text")}),[o]);const c=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function p(e,t){n((n=>{const a={...n[o],[e]:t};return console.log(a),{...n,[o]:a}}))}const m=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(g,{tag:o,params:c})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(k,{params:c,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},m&&m.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&i.createElement(d,{key:e.name,attribute:e,update:p,value:c[e.name]})))),m&&0===m.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},m&&m.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:p,value:c["slot-"+e.name]}))),m&&0===m.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},30789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var a=n(15882),l=(n(50959),n(17942));const i={toc:[{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_type:"warning"},"Die ",(0,l.kt)("strong",{parentName:"p"},"Tooltip"),"-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird.")),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Tooltip"),"-Komponente implementiert das Gegenst\xfcck zum ",(0,l.kt)("inlineCode",{parentName:"p"},"Aria-Label"),". Es ist also explizit nur daf\xfcr vorgesehen, dem/der Nutzer:in ohne Screenreader die Beschriftung eines Elementes anzuzeigen."),(0,l.kt)("p",null,"Ein ge\xf6ffneter Tooltip l\xe4sst sich mit der ",(0,l.kt)("inlineCode",{parentName:"p"},"Escape"),"-Taste schlie\xdfen, um ggf. \xfcberlagerte Seiteninformationen wieder sichtbar zu machen."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hinweis:")," Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht ",(0,l.kt)("inlineCode",{parentName:"p"},"display: inline")," haben."),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"Die Tooltip-Komponente wird bei Fokus oder bei Bewegen der Maus \xfcber dem Referenzelement angezeigt und dient ausschlie\xdflich dem/der sehenden Nutzer:in ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xf6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xfcr die Screenreader versteckt."),(0,l.kt)("kol-alert",{_type:"info"},"Aus Sicht des Barrierefreiheitstests k\xf6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird."),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips"},"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips"))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_align")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_align")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Ausrichtung des Tooltips in Relation zum Elternelement."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die interne ID des prim\xe4ren Elements in der Komponente an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./abbr"},"kol-abbr")),(0,l.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,l.kt)("li",{parentName:"ul"},"kol-link-wc")),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-span-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-tooltip --\x3e kol-span-wc\n  kol-span-wc --\x3e kol-icon\n  kol-abbr --\x3e kol-tooltip\n  kol-button-wc --\x3e kol-tooltip\n  kol-link-wc --\x3e kol-tooltip\n  style kol-tooltip fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var s=n(65795),c=n(92219);const d={title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},p=void 0,m={unversionedId:"components/tooltip",id:"components/tooltip",title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",source:"@site/docs/30-components/tooltip.mdx",sourceDirName:"30-components",slug:"/components/tooltip",permalink:"/docs/components/tooltip",draft:!1,tags:[{label:"Tooltip",permalink:"/docs/tags/tooltip"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Toast",permalink:"/docs/components/toast"},next:{title:"Version",permalink:"/docs/components/version"}},u={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],k={toc:b},g="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(c._,{component:"tooltip",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(s._,{component:"tooltip",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);