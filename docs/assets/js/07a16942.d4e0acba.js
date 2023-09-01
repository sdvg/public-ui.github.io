"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[92757],{63739:(e,t,a)=>{a.d(t,{_:()=>s});var n=a(93700),l=a(50959);const r=function(e,t,a,n,l){return void 0===l&&(l="editor"),`${e}&module=${n}&initialpath=%23%2F${t}%2F${a}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(n.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:a}=e;const[s,d]=(0,l.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,u={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${t}/${a}`,b={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return l.createElement(n.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:r(c,t,a,u.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:r(c,t,a,u.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:r(c,t,a,u.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:r(c,t,a,u.webcomponent)})))}},31617:(e,t,a)=>{a.d(t,{_:()=>f});var n=a(96063),l=a(93700),r=a(50959),i=a(29886);function o(e){const{label:t,name:a,update:n,value:i}=e;return(0,r.useEffect)((()=>{i||n(a,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>n(a,t)},_value:i},t)}function s(e){const{attribute:t,label:a,update:n}=e,[i,o]=(0,r.useState)(""),[s,d]=(0,r.useState)(""),[c,m]=(0,r.useState)(""),[u,p]=(0,r.useState)("");let b=!1,v=!1,k=!1,g=!1;t.type.includes("KoliBriAllIcon")?(b=!0,v=!0,k=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(k=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,v=!0)),(0,r.useEffect)((()=>{if(!i||s||c||u){const e={};i&&(e.left=`codicon codicon-${i}`),s&&(e.right=`codicon codicon-${s}`),c&&(e.top=`codicon codicon-${c}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&n(t.name,JSON.stringify(e))}else n(t.name,`codicon codicon-${i}`)}),[i,s,c,u]);const h=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,a,b?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",v?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}}))))):"",k?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}}))))):"",g?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function d(e){const{name:t,label:a,types:n,update:i,value:o}=e,s=[];function d(e){return{label:e,value:e}}return n.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...n.filter((e=>"undefined"!==e)).map(d))):s.push(...n.filter((e=>"undefined"!==e)).map(d)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,a)=>i(t,a[0])},_value:o?[o]:void 0},a)}function c(e){const{attribute:t,update:a,value:n}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(o,{name:t.name,label:c,update:a,value:n});case"_icon":return r.createElement(s,{attribute:t,label:c,update:a,value:n});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_value:n||""},c);case"number":return r.createElement(l.c2,{className:"my-2",_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_value:n},c);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:!0===n,_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_variant:"switch",_value:!0},c);default:return e.length>1?r.createElement(d,{label:c,name:t.name,types:e,update:a,value:n}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,n]);return r.createElement(r.Fragment,null,c)}var m=a(73001),u=a(77192),p=a(85630),b=a.n(p);function v(e){const{tag:t,params:a}=e,n=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,r.useMemo)((()=>{let e="";return n.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],n=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${n}"`+a.substring(t)}else e+=`<div slot="${n}">${a}</div>`})),e}),[a]),o=n.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[r,m]of o)if(m){let e="";switch(typeof m){case"string":e=` ${r}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${m.toString()}"`;break;case"boolean":e=m?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${i}</kol-${t}>`;let d;try{d=(0,u.format)(s,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(c){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d}))}function k(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const a=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),n={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,version:l.u_}[e.tag];return n?r.createElement(n,t,a.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function g(e){const{description:t,name:a,update:n,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,a||"default"),": ",t,r.createElement("br",null),r.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>n(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const h=["_smart-button","_icon-align"];function f(e){const[t,a]=(0,r.useState)(function(){const e={};return Object.values(n.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[a][t.name]=t.defaultValue.replace(/'/g,""),e[a].defaultValues.push(t.name))}))})),e}()),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!n.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!n.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const d=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){a((a=>{const n={...a[o],[e]:t,defaultValues:a[o].defaultValues.filter((t=>t!==e))};return{...a,[o]:n}}))}const u=Object.values(n.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(k,{tag:o,params:d})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(v,{params:d,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},u&&u.attributes.map((e=>r.createElement(r.Fragment,null,!h.includes(e.name)&&!e.description.startsWith("Deprecated:")&&r.createElement(c,{key:e.name,attribute:e,update:m,value:d[e.name]})))),u&&0===u.attributes.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-auto"},u&&u.slots.map((e=>r.createElement(g,{key:e.name,description:e.description,name:e.name,update:m,value:d["slot-"+e.name]}))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},11967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(15882),l=(a(50959),a(17942)),r=a(42467),i=(a(63739),a(31617));const o={title:"Avatar",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Avatar-Komponente.",tags:["Avatar","Beschreibung","Spezifikation","Beispiele"]},s=void 0,d={unversionedId:"components/avatar",id:"version-1.6.2/components/avatar",title:"Avatar",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Avatar-Komponente.",source:"@site/versioned_docs/version-1.6.2/30-components/avatar.mdx",sourceDirName:"30-components",slug:"/components/avatar",permalink:"/docs/components/avatar",draft:!1,tags:[{label:"Avatar",permalink:"/docs/tags/avatar"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"1.6.2",frontMatter:{title:"Avatar",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Avatar-Komponente.",tags:["Avatar","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Alert",permalink:"/docs/components/alert"},next:{title:"Badge",permalink:"/docs/components/badge"}},c={},m=[{value:"Live-Editor",id:"live-editor",level:2}],u={toc:m},p="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.default,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(i._,{component:"avatar",mdxType:"LiveEditorCompact"}))}b.isMDXComponent=!0},42467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(15882),l=(a(50959),a(17942));const r={},i=void 0,o={unversionedId:"readmes/avatar/readme",id:"version-1.6.2/readmes/avatar/readme",title:"readme",description:"Die Avatar-Komponente zeigt entweder ein kleines Bild des Users oder dessen Initialen an, falls kein Bild vorhanden ist.",source:"@site/versioned_docs/version-1.6.2/readmes/avatar/readme.md",sourceDirName:"readmes/avatar",slug:"/readmes/avatar/",permalink:"/docs/readmes/avatar/",draft:!1,tags:[],version:"1.6.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/readmes/alert/"},next:{title:"readme",permalink:"/docs/readmes/badge/"}},s={},d=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiele",id:"beispiele",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Mit Bild",id:"mit-bild",level:3},{value:"Ohne Bild",id:"ohne-bild",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}],c={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente zeigt entweder ein kleines Bild des Users oder dessen Initialen an, falls kein Bild vorhanden ist."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-avatar _label="Erika Maria Mustermann"></kol-avatar>\n<kol-avatar _label="Erika"></kol-avatar>\n<kol-avatar _src="https://www.w3schools.com/howto/img_avatar.png" _label="Erika Maria Mustermann"></kol-avatar>\n')),(0,l.kt)("h3",{id:"beispiele"},"Beispiele"),(0,l.kt)("p",null,(0,l.kt)("kol-avatar",{_label:"Erika Maria Mustermann"}),"\n",(0,l.kt)("kol-avatar",{_label:"Erika"}),"\n",(0,l.kt)("kol-avatar",{_src:"https://www.w3schools.com/howto/img_avatar.png",_label:"Erika Maria Mustermann"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"mit-bild"},"Mit Bild"),(0,l.kt)("p",null,"In der Standard-Ansicht zeigt die ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente ein Avatar-Bild. Hierzu muss das Attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"_src")," mit einer URL zum Bild angegeben werden.",(0,l.kt)("br",{parentName:"p"}),"\n","Zus\xe4tzlich ist es notwendig, das ",(0,l.kt)("inlineCode",{parentName:"p"},"_label"),"-Attribut mit dem Namen des Benutzers anzugeben, damit ein Alternativtext ausgezeichnet werden kann."),(0,l.kt)("h3",{id:"ohne-bild"},"Ohne Bild"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente kann auch ohne ",(0,l.kt)("inlineCode",{parentName:"p"},"_src"),"-Attribut verwendet werden und zeigt in diesem Fall die Initialen des Benutzers, basierend auf dem\n",(0,l.kt)("inlineCode",{parentName:"p"},"_label"),"-Attribut."),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("p",null,"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente, um das Bild eines Users anzuzeigen."),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"Bei der ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente wurden insbesondere folgende Punkte der Barrierefreiheit betrachtet:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die Komponente ist mit einem Beschreibungstext, der den Namen des Users beinhaltet, als aria-label ausgezeichnet."),(0,l.kt)("li",{parentName:"ul"},"Die Initialen, die alternativ zum Avatar-Bild gezeigt werden, werden als rein visuelles, semantisch nicht relevantes Element betrachtet und f\xfcr Screenreader\nentsprechend versteckt.")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_src")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_src")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the image ",(0,l.kt)("inlineCode",{parentName:"td"},"src")," attribute to the given string."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"."},"kol-avatar"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-avatar --\x3e kol-avatar-wc\n  style kol-avatar-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);