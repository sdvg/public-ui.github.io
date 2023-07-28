"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8862],{63739:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(14422),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},r=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,c]=(0,l.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${t}/${n}`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(r,{url:i(d,t,n,u.angular)})),l.createElement("div",null,"React"===s&&l.createElement(r,{url:i(d,t,n,u.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(r,{url:i(d,t,n,u.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(r,{url:i(d,t,n,u.webcomponent)})))}},49433:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(10844),l=n(14422),i=n(50959),o=n(50898);function r(e){const{attribute:t,label:n,update:a,value:o}=e,[r,s]=(0,i.useState)(""),[c,d]=(0,i.useState)(""),[m,u]=(0,i.useState)(""),[p,b]=(0,i.useState)("");let g=!1,f=!1,h=!1,k=!1;t.type.includes("KoliBriAllIcon")?(g=!0,f=!0,h=!0,k=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,k=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,f=!0)),(0,i.useEffect)((()=>{if(!r||c||m||p){const e={};r&&(e.left=`codicon codicon-${r}`),c&&(e.right=`codicon codicon-${c}`),m&&(e.top=`codicon codicon-${m}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${r}`)}),[r,c,m,p]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,g?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",f?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",k?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:o}=e;return(0,i.useEffect)((()=>{o||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:o},t)}function c(e){const{name:t,label:n,types:a,update:o,value:r}=e,s=[];function c(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(c))):s.push(...a.filter((e=>"undefined"!==e)).map(c)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>o(t,n[0])},_value:r?[r]:void 0},n)}function d(e){const{attribute:t,update:n,value:a}=e,o=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),d=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),d=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(s,{name:t.name,label:d,update:n,value:a});case"_icon":return i.createElement(r,{attribute:t,label:d,update:n,value:a});default:switch(o){case"string":return i.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},d);case"number":return i.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},d);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},d);default:return e.length>1?i.createElement(c,{label:d,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,d)}var m=n(33212),u=n(77192),p=n(85630),b=n.n(p);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const o=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),r=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,m]of r)if(m){let e="";switch(typeof m){case"string":e=` ${i}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${m.toString()}"`;break;case"boolean":e=m?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${o}</kol-${t}>`;let c;try{c=(0,u.format)(s,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(d){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c}))}function f(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const k=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[r,s]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_label"===e.name))&&!t[r]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_heading"===e.name))&&!t[r]?._heading&&m("_heading","Heading-Text")}),[r]);const c=(0,i.useMemo)((()=>t[r]||{}),[t,r]);function m(e,t){n((n=>{const a={...n[r],[e]:t,defaultValues:n[r].defaultValues.filter((t=>t!==e))};return{...n,[r]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${r}`));return i.createElement(o.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(f,{tag:r,params:c})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(g,{params:c,tag:r}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},u&&u.attributes.map((e=>i.createElement(i.Fragment,null,!k.includes(e.name)&&i.createElement(d,{key:e.name,attribute:e,update:m,value:c[e.name]})))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},u&&u.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:m,value:c["slot-"+e.name]}))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},6757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>b});var a=n(15882),l=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]},o="wrapper";function r(e){let{components:t,...n}=e;return(0,l.kt)(o,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Heben Sie einzelne Informationen auf Ihrer Webseite optisch mit der ",(0,l.kt)("strong",{parentName:"p"},"IndentedText"),"-Komponente hervor. Die Komponente eignet sich nicht nur f\xfcr besondere Abschnitte auf der Webseite, sondern auch beispielsweise f\xfcr Zitate (f\xfcr verlinkte Zitate kann auch die ",(0,l.kt)("kol-link",{_href:"/docs/components/quote/",_label:"/docs/components/quote/",_label:"kol-quote-Komponente"})," verwendet werden.)."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<kol-indented-text>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.\n</kol-indented-text>\n")),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("kol-indented-text",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("p",null,"Die Komponente besitzt keine weiteren Attribute. Der hervorzuhebende Text wird zwischen das \xf6ffnende und das schlie\xdfende Tag geschrieben."),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"li"},"IndentedText"),"-Komponente, um erg\xe4nzende Informationen zu einem Hauptthema optisch hervorzuheben."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Informationen in der Komponente auszugeben, die eine Aktion der Nutzer:innen erfordern."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie, viele ",(0,l.kt)("strong",{parentName:"li"},"IndentedText"),"-Komponenten auf einer Einzelseite zu integrieren, da hierdurch die \xdcbersichtlichkeit sinkt.")),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("p",null,"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"p"},"IndentedText"),"-Komponente, um Textpassagen oder Informationen optisch hervorzuheben."),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Der Text.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./details"},"kol-details")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./form"},"kol-form"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-details --\x3e kol-indented-text\n  kol-form --\x3e kol-indented-text\n  style kol-indented-text fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}r.isMDXComponent=!0;var s=n(63739),c=n(49433);const d={title:"IndentedText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die IndentedText-Komponente.",tags:["IndentedText","Beschreibung","Spezifikation","Beispiele"]},m=void 0,u={unversionedId:"components/indented-text",id:"components/indented-text",title:"IndentedText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die IndentedText-Komponente.",source:"@site/docs/30-components/indented-text.mdx",sourceDirName:"30-components",slug:"/components/indented-text",permalink:"/en/docs/components/indented-text",draft:!1,tags:[{label:"IndentedText",permalink:"/en/docs/tags/indented-text"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"IndentedText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die IndentedText-Komponente.",tags:["IndentedText","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Image",permalink:"/en/docs/components/image"},next:{title:"InputAdapterLeanup",permalink:"/en/docs/components/input-adapter-leanup"}},p={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:b},f="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(c._,{component:"indented-text",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(s._,{component:"indented-text",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);