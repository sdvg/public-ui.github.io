"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3359],{83225:(e,n,t)=>{t.d(n,{_:()=>s});var a=t(94436),i=t(50959);const l=function(e,n,t,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${n}%2F${t}&view=${i}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:n,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:n,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:n,sample:t}=e;const[s,c]=(0,i.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,u={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${n}/${t}`,b={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===s&&i.createElement("iframe",{src:p,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),i.createElement("div",null,"Angular"===s&&i.createElement(o,{url:l(d,n,t,u.angular)})),i.createElement("div",null,"React"===s&&i.createElement(o,{url:l(d,n,t,u.react)})),i.createElement("div",null,"Vue"===s&&i.createElement(o,{url:l(d,n,t,u.vue)})),i.createElement("div",null,"Web Component"===s&&i.createElement(o,{url:l(d,n,t,u.webcomponent)})))}},52973:(e,n,t)=>{t.d(n,{_:()=>v});var a=t(51413),i=t(94436),l=t(50959),r=t(46618);function o(e){const{attribute:n,label:t,update:a,value:r}=e,[o,s]=(0,l.useState)(""),[c,d]=(0,l.useState)(""),[m,u]=(0,l.useState)(""),[p,b]=(0,l.useState)("");let g=!1,h=!1,k=!1,f=!1;n.type.includes("KoliBriAllIcon")?(g=!0,h=!0,k=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(k=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(g=!0,h=!0)),(0,l.useEffect)((()=>{if(!o||c||m||p){const e={};o&&(e.left=`codicon codicon-${o}`),c&&(e.right=`codicon codicon-${c}`),m&&(e.top=`codicon codicon-${m}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(n.name,JSON.stringify(e))}else a(n.name,`codicon codicon-${o}`)}),[o,c,m,p]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return l.createElement("div",null,t,g?l.createElement(i.ox,{_summary:"Links"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:n=>s(e)}}))))):"",h?l.createElement(i.ox,{_summary:"Rechts"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:n=>d(e)}}))))):"",k?l.createElement(i.ox,{_summary:"Oben"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:n=>u(e)}}))))):"",f?l.createElement(i.ox,{_summary:"Unten"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:n=>b(e)}}))))):"")}function s(e){const{label:n,name:t,update:a,value:r}=e;return(0,l.useEffect)((()=>{r||a(t,"#000000")}),[]),l.createElement(i.Np,{_on:{onChange:(e,n)=>a(t,n)},_value:r},n)}function c(e){const{name:n,label:t,types:a,update:r,value:o}=e,s=[];function c(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(c))):s.push(...a.filter((e=>"undefined"!==e)).map(c)),l.createElement(i.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,t)=>r(n,t[0])},_value:o},t)}function d(e){const{attribute:n,update:t,value:a}=e,r=(0,l.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),d=(0,l.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),d=l.createElement(i.T5,{_title:n.description},n.name);switch(n.name){case"_color":return l.createElement(s,{name:n.name,label:d,update:t,value:a});case"_icon":return l.createElement(o,{attribute:n,label:d,update:t,value:a});default:switch(r){case"string":return l.createElement(i.WD,{className:"my-2",_on:{onChange:(e,a)=>t(n.name,a)},_value:a||""},d);case"number":return l.createElement(i.c2,{className:"my-2",_on:{onChange:(e,a)=>t(n.name,a)},_value:a},d);case"boolean":return l.createElement(i.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>t(n.name,a)},_variant:"switch"},d);default:return e.length>1?l.createElement(c,{label:d,name:n.name,types:e,update:t,value:a}):l.createElement("p",null,"Attribut: '",n.name,"'",l.createElement("br",null),"Typ: '",n.type,"'")}}}),[n,a]);return l.createElement(l.Fragment,null,d)}var m=t(45413),u=t(77192),p=t(85630),b=t.n(p);function g(e){const{tag:n,params:t}=e;let a="";const i=(0,l.useMemo)((()=>{let e="";return Object.entries(t).filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],a=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${a}"`+t.substring(n)}else e+=`<div slot="${a}">${t}</div>`})),e}),[t]);for(const[l,c]of Object.entries(t).filter((e=>!e[0].startsWith("slot-"))))if(c){let e="";switch(typeof c){case"string":e=` ${l}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${c.toString()}"`;break;case"boolean":e=c?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const r=`<kol-${n}${a}>${i}</kol-${n}>`;let o;try{o=(0,u.format)(r,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(s){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${r}`}return l.createElement("div",{className:"h-48 rounded-md overflow-hidden"},l.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function h(e){const n={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{n[e[0]]=e[1]}));const t=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:i.T5,accordion:i.RZ,alert:i.K5,badge:i.Er,breadcrumb:i.lo,button:i.ic,"button-group":i.uz,"button-link":i.f6,card:i.Gc,details:i.ox,form:i.m5,heading:i.HA,icon:i.Jl,image:i.Cd,"indented-text":i.CV,"input-checkbox":i.TE,"input-color":i.Np,"input-date":i.O,"input-email":i.Lj,"input-file":i.CX,"input-number":i.c2,"input-password":i.z5,"input-radio":i.sy,"input-range":i.TQ,"input-text":i.WD,kolibri:i.Vs,link:i.Nv,"link-button":i.Kc,"link-group":i.$o,logo:i.QK,modal:i.Ud,nav:i.MA,pagination:i.Q4,popover:i.hV,progress:i.WR,quote:i.VZ,select:i.r7,"skip-nav":i.P,spin:i.qq,symbol:i.is,table:i.Vp,tabs:i.UD,textarea:i.Qs,toast:i.CO,tooltip:i.Ze,version:i.u_}[e.tag];return a?l.createElement(a,n,t.map((e=>l.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):l.createElement("div",null,"Tag not implemented")}function k(e){const{description:n,name:t,update:a,value:i}=e;return l.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},l.createElement("b",null,t),": ",n,l.createElement("br",null),l.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i}))}const f=["_smart-button","_icon-align"];function v(e){const[n,t]=(0,l.useState)({}),[o,s]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&m("_heading","Heading-Text")}),[o]);const c=(0,l.useMemo)((()=>n[o]||{}),[n,o]);function m(e,n){t((t=>{const a={...t[o],[e]:n};return console.log(a),{...t,[o]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${o}`));return l.createElement(r.Z,null,(()=>l.createElement(l.Fragment,null,l.createElement(i.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),l.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},l.createElement(i.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},l.createElement("div",{className:"p-2"},l.createElement(h,{tag:o,params:c})),l.createElement("div",{className:"lg:col-span-2"},l.createElement(g,{params:c,tag:o}))),l.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},l.createElement(i.HA,{_level:3,_label:"Konfigurator"}),l.createElement("div",null,l.createElement(i.HA,{_level:4,_label:"Properties"}),l.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},u&&u.attributes.map((e=>l.createElement(l.Fragment,null,!f.includes(e.name)&&l.createElement(d,{key:e.name,attribute:e,update:m,value:c[e.name]})))),u&&0===u.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),l.createElement(i.HA,{_level:4,_label:"Slots"}),l.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},u&&u.slots.map((e=>l.createElement(k,{key:e.name,description:e.description,name:e.name,update:m,value:c["slot-"+e.name]}))),u&&0===u.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},10749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>b});var a=t(15882),i=(t(50959),t(17942));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Properties",id:"properties",level:2}]},r="wrapper";function o(e){let{components:n,...t}=e;return(0,i.kt)(r,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ladeanzeigen, wie die ",(0,i.kt)("strong",{parentName:"p"},"Spin"),"-Komponente, informieren die Nutzer:innen \xfcber Lade- oder Rechenvorg\xe4nge, die vom System ausgef\xfchrt werden. Der Fortschritt kann durch eine wiederholte Animation kommuniziert werden."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n    /* https://github.com/vineethtrv/css-loader */\n    .loader {\n        width: 48px;\n        height: 48px;\n        border: 3px dotted #444;\n        border-style: solid solid dotted dotted;\n        border-radius: 50%;\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        animation: rotation 2s linear infinite;\n    }\n    .loader::after {\n        content: \'\';\n        box-sizing: border-box;\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin: auto;\n        border: 3px dotted #ff3d00;\n        border-style: solid solid dotted;\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        animation: rotationBack 1s linear infinite;\n        transform-origin: center center;\n    }\n\n    @keyframes rotation {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes rotationBack {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(-360deg);\n        }\n    }\n\n    /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n    @media (prefers-reduced-motion) {\n        .loader {\n            animation-duration: 6s;\n        }\n        .loader::after {\n            animation-duration: 3s;\n        }\n    }\n</style>\n<div>\n    <kol-spin _show></kol-spin>\n    \x3c!-- for a11y experts - own animation --\x3e\n    <kol-spin _show="true" _variant="none">\n        \x3c!-- slot for own animation : https://github.com/vineethtrv/css-loader --\x3e\n        <span className="loader" slot="expert"></span>\n    </kol-spin>\n</div>\n')),(0,i.kt)("p",null,(0,i.kt)("kol-alert",{_heading:"Reduce Motion",_level:"4",_type:"warning"},"Wenn m\xf6glich sollte stets auf Animationen verzichtet werden. Wenn Animationen genutzt werden, sollte immer darauf geachtet werden, eine Variante mit reduzierter Animationsgeschwindigkeit anzubieten. Mehr Informationen dazu findet sich hier:\n",(0,i.kt)("kol-link",{_label:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",_href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",_target:"_blank"}))),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-spin",{_show:!0})),(0,i.kt)("p",null,(0,i.kt)("kol-spin",{_show:"true",_variant:"none"},(0,i.kt)("span",{className:"loader",slot:"expert"}))),(0,i.kt)("kol-details",{_summary:"CSS Loaders & Spinners",_open:!0},"Es gibt im Internet viele verschiedene CSS Loaders und Spinners. Beispielsweise bietet _Vineeth_ eine ganze Reihe interessanter CSS Loaders an. Diese k\xf6nnen auch in der KoliBri Bibliothek genutzt werden. Dazu muss lediglich der Link zu der entsprechenden CSS Datei in den Head der HTML Datei eingebunden werden. Anschlie\xdfend kann die gew\xfcnschte Animation \xfcber den Expert-Slot in die KoliBri-Komponente eingebunden werden. Hier sind einige Beispiele (ohne reduzierte Animationsgeschwindigkeit):",(0,i.kt)("kol-link",{_label:"https://github.com/vineethtrv/css-loader",_href:"https://github.com/vineethtrv/css-loader",_target:"_blank"})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Verwenden Sie das Attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"_show")," um festzulegen, ob der Spin angezeigt wird."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Ladeanzeigen, um die Nutzer:innen \xfcber einen Ladezustand oder einen laufenden Prozess zu informieren."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Ladeanzeigen an konsistenten Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Abrufen neuer oder aktualisierter Suchergebnisse."),(0,i.kt)("li",{parentName:"ul"},"Einloggen in gesch\xfctzte Bereiche."),(0,i.kt)("li",{parentName:"ul"},"Download von Inhalten."),(0,i.kt)("li",{parentName:"ul"},"Laden von umfangreichen Inhalten, z.B. Videos.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_show")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_show")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Ladeanzeige eingeblendet wird oder nicht."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_variant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_variant")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Ladeanimation oder ob keine Animation verwendet werden soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"default" \\| "none" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'default'"))))),(0,i.kt)("hr",null))}o.isMDXComponent=!0;var s=t(83225),c=t(52973);const d={title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",tags:["Spin","Beschreibung","Spezifikation","Beispiele"]},m=void 0,u={unversionedId:"components/spin",id:"components/spin",title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",source:"@site/docs/30-components/spin.mdx",sourceDirName:"30-components",slug:"/components/spin",permalink:"/docs/components/spin",draft:!1,tags:[{label:"Spin",permalink:"/docs/tags/spin"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",tags:["Spin","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Span",permalink:"/docs/components/span"},next:{title:"Table",permalink:"/docs/components/table"}},p={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:b},h="wrapper";function k(e){let{components:n,...t}=e;return(0,i.kt)(h,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,i.kt)(c._,{component:"spin",mdxType:"LiveEditorCompact"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(s._,{component:"spin",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);