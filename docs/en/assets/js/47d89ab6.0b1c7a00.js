"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5783],{65795:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(40764),r=n(50959);const l=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,m]=(0,r.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},d=`/sample-react/#/${t}/${n}`,g={onSelect:(e,t)=>{switch(t){case 1:m((()=>"Angular"));break;case 2:m((()=>"React"));break;case 3:m((()=>"Vue"));break;case 4:m((()=>"Web Component"));break;default:m((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:g,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===s&&r.createElement("iframe",{src:d,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),r.createElement("div",null,"Angular"===s&&r.createElement(o,{url:l(c,t,n,p.angular)})),r.createElement("div",null,"React"===s&&r.createElement(o,{url:l(c,t,n,p.react)})),r.createElement("div",null,"Vue"===s&&r.createElement(o,{url:l(c,t,n,p.vue)})),r.createElement("div",null,"Web Component"===s&&r.createElement(o,{url:l(c,t,n,p.webcomponent)})))}},92219:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(67695),r=n(40764),l=n(50959),i=n(65048);function o(e){const{attribute:t,label:n,update:a,value:i}=e,[o,s]=(0,l.useState)(""),[m,c]=(0,l.useState)(""),[u,p]=(0,l.useState)(""),[d,g]=(0,l.useState)("");let k=!1,b=!1,f=!1,h=!1;t.type.includes("KoliBriAllIcon")?(k=!0,b=!0,f=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(f=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,b=!0)),(0,l.useEffect)((()=>{if(!o||m||u||d){const e={};o&&(e.left=`codicon codicon-${o}`),m&&(e.right=`codicon codicon-${m}`),u&&(e.top=`codicon codicon-${u}`),d&&(e.bottom=`codicon codicon-${d}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,m,u,d]);const N=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return l.createElement("div",null,n,k?l.createElement(r.ox,{_summary:"Links"},l.createElement("div",{className:"flex flex-wrap"},N.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",b?l.createElement(r.ox,{_summary:"Rechts"},l.createElement("div",{className:"flex flex-wrap"},N.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",f?l.createElement(r.ox,{_summary:"Oben"},l.createElement("div",{className:"flex flex-wrap"},N.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>p(e)}}))))):"",h?l.createElement(r.ox,{_summary:"Unten"},l.createElement("div",{className:"flex flex-wrap"},N.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>g(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:i}=e;return(0,l.useEffect)((()=>{i||a(n,"#000000")}),[]),l.createElement(r.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function m(e){const{name:t,label:n,types:a,update:i,value:o}=e,s=[];function m(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(m))):s.push(...a.filter((e=>"undefined"!==e)).map(m)),l.createElement(r.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>i(t,n[0])},_value:o},n)}function c(e){const{attribute:t,update:n,value:a}=e,i=(0,l.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,l.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=l.createElement(r.T5,{_title:t.description},t.name);switch(t.name){case"_color":return l.createElement(s,{name:t.name,label:c,update:n,value:a});case"_icon":return l.createElement(o,{attribute:t,label:c,update:n,value:a});default:switch(i){case"string":return l.createElement(r.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},c);case"number":return l.createElement(r.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},c);case"boolean":return l.createElement(r.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},c);default:return e.length>1?l.createElement(m,{label:c,name:t.name,types:e,update:n,value:a}):l.createElement("p",null,"Attribut: '",t.name,"'",l.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return l.createElement(l.Fragment,null,c)}var u=n(45413),p=n(77192),d=n(85630),g=n.n(d);function k(e){const{tag:t,params:n}=e;let a="";const r=(0,l.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[l,m]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(m){let e="";switch(typeof m){case"string":e=` ${l}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${m.toString()}"`;break;case"boolean":e=m?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const i=`<kol-${t}${a}>${r}</kol-${t}>`;let o;try{o=(0,p.format)(i,{plugins:[g()],printWidth:80}).replace(/;\n$/,"")}catch(s){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${i}`}return l.createElement("div",{className:"h-48 rounded-md overflow-hidden"},l.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:r.T5,accordion:r.RZ,alert:r.K5,badge:r.Er,breadcrumb:r.lo,button:r.ic,"button-group":r.uz,"button-link":r.f6,card:r.Gc,details:r.ox,form:r.m5,heading:r.HA,icon:r.Jl,image:r.Cd,"indented-text":r.CV,"input-checkbox":r.TE,"input-color":r.Np,"input-date":r.O,"input-email":r.Lj,"input-file":r.CX,"input-number":r.c2,"input-password":r.z5,"input-radio":r.sy,"input-range":r.TQ,"input-text":r.WD,kolibri:r.Vs,link:r.Nv,"link-button":r.Kc,"link-group":r.$o,logo:r.QK,modal:r.Ud,nav:r.MA,pagination:r.Q4,popover:r.hV,progress:r.WR,quote:r.VZ,select:r.r7,"skip-nav":r.P,spin:r.qq,symbol:r.is,table:r.Vp,tabs:r.UD,textarea:r.Qs,toast:r.CO,tooltip:r.Ze,version:r.u_}[e.tag];return a?l.createElement(a,t,n.map((e=>l.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):l.createElement("div",null,"Tag not implemented")}function f(e){const{description:t,name:n,update:a,value:r}=e;return l.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},l.createElement("b",null,n||"default"),": ",t,l.createElement("br",null),l.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r}))}const h=["_smart-button","_icon-align"];function N(e){const[t,n]=(0,l.useState)({}),[o,s]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const m=(0,l.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){n((n=>{const a={...n[o],[e]:t};return console.log(a),{...n,[o]:a}}))}const p=Object.values(a.p).find((e=>e.name===`kol-${o}`));return l.createElement(i.Z,null,(()=>l.createElement(l.Fragment,null,l.createElement(r.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),l.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},l.createElement(r.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},l.createElement("div",{className:"p-2"},l.createElement(b,{tag:o,params:m})),l.createElement("div",{className:"lg:col-span-2"},l.createElement(k,{params:m,tag:o}))),l.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},l.createElement(r.HA,{_level:3,_label:"Konfigurator"}),l.createElement("div",null,l.createElement(r.HA,{_level:4,_label:"Properties"}),l.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},p&&p.attributes.map((e=>l.createElement(l.Fragment,null,!h.includes(e.name)&&l.createElement(c,{key:e.name,attribute:e,update:u,value:m[e.name]})))),p&&0===p.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),l.createElement(r.HA,{_level:4,_label:"Slots"}),l.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},p&&p.slots.map((e=>l.createElement(f,{key:e.name,description:e.description,name:e.name,update:u,value:m["slot-"+e.name]}))),p&&0===p.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},72925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var a=n(15882),r=(n(50959),n(17942));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mit Hilfe der ",(0,r.kt)("strong",{parentName:"p"},"Logo"),"-Komponente k\xf6nnen an beliebigen Positionen die Logos verschiedener Bundesinstitutionen ausgegeben werden. Das Logo wird dabei aus einer Sammlung von SVG-Grafiken zusammengesetzt, die fertig konstruiert vorliegen."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-logo _org_="BReg"></kol-logo>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,(0,r.kt)("kol-logo",{_org_:"BReg"})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("p",null,"Das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_org"))," wird f\xfcr die Definition des gew\xfcnschten Logos verwendet. Es sind folgende Parameter m\xf6glich:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BReg")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Die Bundesregierung"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMF")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium der Finanzen"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMI")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium des Innern, f\xfcr Bau und Heimat"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AA")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Ausw\xe4rtiges Amt"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMWi")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Wirtschaft und Energie"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMJV")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium der Justiz und f\xfcr Verbraucherschutz"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMAS")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Arbeit und Soziales"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMVg")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium der Verteidigung"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMEL")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Ern\xe4hrung und Landwirtschaft"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMFSFJ")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Familie, Senioren, Frauen und Jugend"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMG")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Gesundheit"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMVI")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Verkehr und digitale Infrastruktur"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMU")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Umwelt, Naturschutz und nukleare Sicherheit"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMBF")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Bildung und Forschung"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BMZ")," = ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr wirtschaftliche Zusammenarbeit und Entwicklung"))),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_abbr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_abbr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Property _org.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt die Abk\xfcrzung eines Ministeriums, eines Amts oder einer Bundesanstalt an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bundesamt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Bundesanstalt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Bundesministerium")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_org")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_org")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Abk\xfcrzung eines Ministeriums, eines Amts oder einer Bundesanstalt an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bundesamt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Bundesanstalt")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Bundesministerium")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("hr",null))}o.isMDXComponent=!0;var s=n(65795),m=n(92219);const c={title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",tags:["Logo","Beschreibung","Spezifikation","Beispiele"]},u=void 0,p={unversionedId:"components/logo",id:"components/logo",title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",source:"@site/docs/30-components/logo.mdx",sourceDirName:"30-components",slug:"/components/logo",permalink:"/en/docs/components/logo",draft:!1,tags:[{label:"Logo",permalink:"/en/docs/tags/logo"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",tags:["Logo","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Link",permalink:"/en/docs/components/link"},next:{title:"Modal",permalink:"/en/docs/components/modal"}},d={},g=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],k={toc:g},b="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,r.kt)(m._,{component:"logo",mdxType:"LiveEditorCompact"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(s._,{component:"logo",sample:"basic",mdxType:"Configurator"}))}f.isMDXComponent=!0}}]);