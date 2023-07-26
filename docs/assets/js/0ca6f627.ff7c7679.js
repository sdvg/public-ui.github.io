"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6953],{63739:(e,t,n)=>{n.d(t,{_:()=>s});var l=n(52270),a=n(50959);const i=function(e,t,n,l,a){return void 0===a&&(a="editor"),`${e}&module=${l}&initialpath=%23%2F${t}%2F${n}&view=${a}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(l.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,p]=(0,a.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},m=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:p((()=>"Angular"));break;case 2:p((()=>"React"));break;case 3:p((()=>"Vue"));break;case 4:p((()=>"Web Component"));break;default:p((()=>"Preview"))}}};return a.createElement(l.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===s&&a.createElement("iframe",{src:m,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),a.createElement("div",null,"Angular"===s&&a.createElement(o,{url:i(c,t,n,u.angular)})),a.createElement("div",null,"React"===s&&a.createElement(o,{url:i(c,t,n,u.react)})),a.createElement("div",null,"Vue"===s&&a.createElement(o,{url:i(c,t,n,u.vue)})),a.createElement("div",null,"Web Component"===s&&a.createElement(o,{url:i(c,t,n,u.webcomponent)})))}},49433:(e,t,n)=>{n.d(t,{_:()=>v});var l=n(57338),a=n(52270),i=n(50959),r=n(90787);function o(e){const{attribute:t,label:n,update:l,value:r}=e,[o,s]=(0,i.useState)(""),[p,c]=(0,i.useState)(""),[d,u]=(0,i.useState)(""),[m,k]=(0,i.useState)("");let b=!1,g=!1,f=!1,h=!1;t.type.includes("KoliBriAllIcon")?(b=!0,g=!0,f=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(f=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,g=!0)),(0,i.useEffect)((()=>{if(!o||p||d||m){const e={};o&&(e.left=`codicon codicon-${o}`),p&&(e.right=`codicon codicon-${p}`),d&&(e.top=`codicon codicon-${d}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&l(t.name,JSON.stringify(e))}else l(t.name,`codicon codicon-${o}`)}),[o,p,d,m]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,b?i.createElement(a.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",g?i.createElement(a.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",f?i.createElement(a.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",h?i.createElement(a.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(a.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function s(e){const{label:t,name:n,update:l,value:r}=e;return(0,i.useEffect)((()=>{r||l(n,"#000000")}),[]),i.createElement(a.Np,{_on:{onChange:(e,t)=>l(n,t)},_value:r},t)}function p(e){const{name:t,label:n,types:l,update:r,value:o}=e,s=[];function p(e){return{label:e,value:e}}return l.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...l.filter((e=>"undefined"!==e)).map(p))):s.push(...l.filter((e=>"undefined"!==e)).map(p)),i.createElement(a.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>r(t,n[0])},_value:o},n)}function c(e){const{attribute:t,update:n,value:l}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=i.createElement(a.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(s,{name:t.name,label:c,update:n,value:l});case"_icon":return i.createElement(o,{attribute:t,label:c,update:n,value:l});default:switch(r){case"string":return i.createElement(a.WD,{className:"my-2",_on:{onChange:(e,l)=>n(t.name,l)},_value:l||""},c);case"number":return i.createElement(a.c2,{className:"my-2",_on:{onChange:(e,l)=>n(t.name,l)},_value:l},c);case"boolean":return i.createElement(a.TE,{className:"my-2",_checked:l,_on:{onChange:(e,l)=>n(t.name,l)},_variant:"switch"},c);default:return e.length>1?i.createElement(p,{label:c,name:t.name,types:e,update:n,value:l}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,l]);return i.createElement(i.Fragment,null,c)}var d=n(80376),u=n(77192),m=n(85630),k=n.n(m);function b(e){const{tag:t,params:n}=e,l=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let a="";const r=(0,i.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],l=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${l}"`+n.substring(t)}else e+=`<div slot="${l}">${n}</div>`})),e}),[n]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,d]of o)if(d){let e="";switch(typeof d){case"string":e=` ${i}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${d.toString()}"`;break;case"boolean":e=d?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const s=`<kol-${t}${a}>${r}</kol-${t}>`;let p;try{p=(0,u.format)(s,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(c){p=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(d.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:p}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),l={abbr:a.T5,accordion:a.RZ,alert:a.K5,avatar:a.Ek,badge:a.Er,breadcrumb:a.lo,button:a.ic,"button-group":a.uz,"button-link":a.f6,card:a.Gc,details:a.ox,form:a.m5,heading:a.HA,icon:a.Jl,image:a.Cd,"indented-text":a.CV,"input-checkbox":a.TE,"input-color":a.Np,"input-date":a.O,"input-email":a.Lj,"input-file":a.CX,"input-number":a.c2,"input-password":a.z5,"input-radio":a.sy,"input-range":a.TQ,"input-text":a.WD,kolibri:a.Vs,link:a.Nv,"link-button":a.Kc,"link-group":a.$o,logo:a.QK,modal:a.Ud,nav:a.MA,pagination:a.Q4,popover:a.hV,progress:a.WR,quote:a.VZ,select:a.r7,"skip-nav":a.P,spin:a.qq,symbol:a.is,table:a.Vp,tabs:a.UD,textarea:a.Qs,toast:a.CO,tooltip:a.Ze,version:a.u_}[e.tag];return l?i.createElement(l,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function f(e){const{description:t,name:n,update:l,value:a}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(d.ML,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:a}))}const h=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(l.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[o,s]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&d("_label","Label-Text");!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&d("_heading","Heading-Text")}),[o]);const p=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function d(e,t){n((n=>{const l={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:l}}))}const u=Object.values(l.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(a.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(a.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(g,{tag:o,params:p})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(b,{params:p,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(a.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(a.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},u&&u.attributes.map((e=>i.createElement(i.Fragment,null,!h.includes(e.name)&&i.createElement(c,{key:e.name,attribute:e,update:d,value:p[e.name]})))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(a.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},u&&u.slots.map((e=>i.createElement(f,{key:e.name,description:e.description,name:e.name,update:d,value:p["slot-"+e.name]}))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},18030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>k});var l=n(15882),a=(n(50959),n(17942));const i={toc:[{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,a.kt)(r,(0,l.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("kol-alert",{_type:"warning"},"Die ",(0,a.kt)("strong",{parentName:"p"},"Tooltip"),"-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird.")),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Tooltip"),"-Komponente implementiert das Gegenst\xfcck zum ",(0,a.kt)("inlineCode",{parentName:"p"},"Aria-Label"),". Es ist also explizit nur daf\xfcr vorgesehen, dem/der Nutzer:in ohne Screenreader die Beschriftung eines Elementes anzuzeigen."),(0,a.kt)("p",null,"Ein ge\xf6ffneter Tooltip l\xe4sst sich mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"Escape"),"-Taste schlie\xdfen, um ggf. \xfcberlagerte Seiteninformationen wieder sichtbar zu machen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hinweis:")," Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht ",(0,a.kt)("inlineCode",{parentName:"p"},"display: inline")," haben."),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("p",null,"Die Tooltip-Komponente wird bei Fokus oder bei Bewegen der Maus \xfcber dem Referenzelement angezeigt und dient ausschlie\xdflich dem/der sehenden Nutzer:in ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xf6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xfcr die Screenreader versteckt."),(0,a.kt)("kol-alert",{_type:"info"},"Aus Sicht des Barrierefreiheitstests k\xf6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird."),(0,a.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_target:"_blank"}))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_align")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_align")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt die Ausrichtung des Tooltips in Relation zum Elternelement."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_id")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_id")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die interne ID des prim\xe4ren Elements in der Komponente an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_label")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"used-by"},"Used by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./abbr"},"kol-abbr")),(0,a.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-checkbox"},"kol-input-checkbox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-color"},"kol-input-color")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-date"},"kol-input-date")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-email"},"kol-input-email")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-file"},"kol-input-file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-number"},"kol-input-number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-password"},"kol-input-password")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-radio"},"kol-input-radio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-range"},"kol-input-range")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./input-text"},"kol-input-text")),(0,a.kt)("li",{parentName:"ul"},"kol-link-wc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./select"},"kol-select")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./textarea"},"kol-textarea"))),(0,a.kt)("h3",{id:"depends-on"},"Depends on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kol-span-wc")),(0,a.kt)("h3",{id:"graph"},"Graph"),(0,a.kt)("mermaid",{value:"graph TD;\n  kol-tooltip --\x3e kol-span-wc\n  kol-span-wc --\x3e kol-icon\n  kol-abbr --\x3e kol-tooltip\n  kol-button-wc --\x3e kol-tooltip\n  kol-input-checkbox --\x3e kol-tooltip\n  kol-input-color --\x3e kol-tooltip\n  kol-input-date --\x3e kol-tooltip\n  kol-input-email --\x3e kol-tooltip\n  kol-input-file --\x3e kol-tooltip\n  kol-input-number --\x3e kol-tooltip\n  kol-input-password --\x3e kol-tooltip\n  kol-input-radio --\x3e kol-tooltip\n  kol-input-range --\x3e kol-tooltip\n  kol-input-text --\x3e kol-tooltip\n  kol-link-wc --\x3e kol-tooltip\n  kol-select --\x3e kol-tooltip\n  kol-textarea --\x3e kol-tooltip\n  style kol-tooltip fill:#f9f,stroke:#333,stroke-width:4px"}),(0,a.kt)("hr",null))}o.isMDXComponent=!0;var s=n(63739),p=n(49433);const c={title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},d=void 0,u={unversionedId:"components/tooltip",id:"components/tooltip",title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",source:"@site/docs/30-components/tooltip.mdx",sourceDirName:"30-components",slug:"/components/tooltip",permalink:"/docs/components/tooltip",draft:!1,tags:[{label:"Tooltip",permalink:"/docs/tags/tooltip"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Toast",permalink:"/docs/components/toast"},next:{title:"Version",permalink:"/docs/components/version"}},m={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],b={toc:k},g="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,l.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,a.kt)(p._,{component:"tooltip",mdxType:"LiveEditorCompact"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(s._,{component:"tooltip",sample:"basic",mdxType:"Configurator"}))}f.isMDXComponent=!0}}]);