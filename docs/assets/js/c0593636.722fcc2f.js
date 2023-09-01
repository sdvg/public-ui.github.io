"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[93428],{63739:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(93700),r=n(50959);const l=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,r.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",c=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${c}.html`,react:`${c}.tsx`,vue:`${c}.vue`,webcomponent:`${c}.html`},p=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===d&&r.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),r.createElement("div",null,"Angular"===d&&r.createElement(o,{url:l(m,t,n,u.angular)})),r.createElement("div",null,"React"===d&&r.createElement(o,{url:l(m,t,n,u.react)})),r.createElement("div",null,"Vue"===d&&r.createElement(o,{url:l(m,t,n,u.vue)})),r.createElement("div",null,"Web Component"===d&&r.createElement(o,{url:l(m,t,n,u.webcomponent)})))}},31617:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(96063),r=n(93700),l=n(50959),i=n(29886);function o(e){const{label:t,name:n,update:a,value:i}=e;return(0,l.useEffect)((()=>{i||a(n,"#000000")}),[]),l.createElement(r.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function d(e){const{attribute:t,label:n,update:a}=e,[i,o]=(0,l.useState)(""),[d,s]=(0,l.useState)(""),[m,c]=(0,l.useState)(""),[u,p]=(0,l.useState)("");let k=!1,g=!1,h=!1,b=!1;t.type.includes("KoliBriAllIcon")?(k=!0,g=!0,h=!0,b=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,b=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,g=!0)),(0,l.useEffect)((()=>{if(!i||d||m||u){const e={};i&&(e.left=`codicon codicon-${i}`),d&&(e.right=`codicon codicon-${d}`),m&&(e.top=`codicon codicon-${m}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${i}`)}),[i,d,m,u]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return l.createElement("div",null,n,k?l.createElement(r.ox,{_summary:"Links"},l.createElement("div",{className:"flex flex-wrap"},f.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",g?l.createElement(r.ox,{_summary:"Rechts"},l.createElement("div",{className:"flex flex-wrap"},f.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>s(e)}}))))):"",h?l.createElement(r.ox,{_summary:"Oben"},l.createElement("div",{className:"flex flex-wrap"},f.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"",b?l.createElement(r.ox,{_summary:"Unten"},l.createElement("div",{className:"flex flex-wrap"},f.map((e=>l.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function s(e){const{name:t,label:n,types:a,update:i,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),l.createElement(r.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>i(t,n[0])},_value:o?[o]:void 0},n)}function m(e){const{attribute:t,update:n,value:a}=e,i=(0,l.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,l.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=l.createElement(r.T5,{_title:t.description},t.name);switch(t.name){case"_color":return l.createElement(o,{name:t.name,label:m,update:n,value:a});case"_icon":return l.createElement(d,{attribute:t,label:m,update:n,value:a});default:switch(i){case"string":return l.createElement(r.WD,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return l.createElement(r.c2,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return l.createElement(r.TE,{className:"my-2",_checked:!0===a,_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},m);default:return e.length>1?l.createElement(s,{label:m,name:t.name,types:e,update:n,value:a}):l.createElement("p",null,"Attribut: '",t.name,"'",l.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return l.createElement(l.Fragment,null,m)}var c=n(73001),u=n(77192),p=n(85630),k=n.n(p);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let r="";const i=(0,l.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[l,c]of o)if(c){let e="";switch(typeof c){case"string":e=` ${l}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${c.toString()}"`;break;case"boolean":e=c?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const d=`<kol-${t}${r}>${i}</kol-${t}>`;let s;try{s=(0,u.format)(d,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(m){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return l.createElement("div",{className:"h-48 rounded-md overflow-hidden"},l.createElement(c.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function h(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:r.T5,accordion:r.RZ,alert:r.K5,avatar:r.Ek,badge:r.Er,breadcrumb:r.lo,button:r.ic,"button-group":r.uz,"button-link":r.f6,card:r.Gc,details:r.ox,form:r.m5,heading:r.HA,icon:r.Jl,image:r.Cd,"indented-text":r.CV,"input-checkbox":r.TE,"input-color":r.Np,"input-date":r.O,"input-email":r.Lj,"input-file":r.CX,"input-number":r.c2,"input-password":r.z5,"input-radio":r.sy,"input-range":r.TQ,"input-text":r.WD,kolibri:r.Vs,link:r.Nv,"link-button":r.Kc,"link-group":r.$o,logo:r.QK,modal:r.Ud,nav:r.MA,pagination:r.Q4,popover:r.hV,progress:r.WR,quote:r.VZ,select:r.r7,"skip-nav":r.P,spin:r.qq,"split-button":r.KJ,symbol:r.is,table:r.Vp,tabs:r.UD,textarea:r.Qs,toast:r.CO,version:r.u_}[e.tag];return a?l.createElement(a,t,n.map((e=>l.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):l.createElement("div",null,"Tag not implemented")}function b(e){const{description:t,name:n,update:a,value:r}=e;return l.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},l.createElement("b",null,n||"default"),": ",t,l.createElement("br",null),l.createElement(c.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r}))}const f=["_smart-button","_icon-align"];function N(e){const[t,n]=(0,l.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name))}))})),e}()),[o,d]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&c("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&c("_heading","Heading-Text")}),[o]);const s=(0,l.useMemo)((()=>t[o]||{}),[t,o]);function c(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${o}`));return l.createElement(i.Z,null,(()=>l.createElement(l.Fragment,null,l.createElement(r.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),l.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},l.createElement(r.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},l.createElement("div",{className:"p-2"},l.createElement(h,{tag:o,params:s})),l.createElement("div",{className:"lg:col-span-2"},l.createElement(g,{params:s,tag:o}))),l.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},l.createElement(r.HA,{_level:3,_label:"Konfigurator"}),l.createElement("div",null,l.createElement(r.HA,{_level:4,_label:"Properties"}),l.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},u&&u.attributes.map((e=>l.createElement(l.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&l.createElement(m,{key:e.name,attribute:e,update:c,value:s[e.name]})))),u&&0===u.attributes.length&&l.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),l.createElement(r.HA,{_level:4,_label:"Slots"}),l.createElement("div",{className:"max-h-56 p-2 overflow-auto"},u&&u.slots.map((e=>l.createElement(b,{key:e.name,description:e.description,name:e.name,update:c,value:s["slot-"+e.name]}))),u&&0===u.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},48086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var a=n(15882),r=(n(50959),n(17942)),l=n(81501),i=n(63739),o=n(31617);const d={title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},s=void 0,m={unversionedId:"components/card",id:"components/card",title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",source:"@site/docs/30-components/card.mdx",sourceDirName:"30-components",slug:"/components/card",permalink:"/docs/next/components/card",draft:!1,tags:[{label:"Card",permalink:"/docs/next/tags/card"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/next/components/button"},next:{title:"Details",permalink:"/docs/next/components/details"}},c={},u=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Card",id:"card",level:3},{value:"Best\xe4tigingscard",id:"best\xe4tigingscard",level:3},{value:"Cards im Grid-Flu\xdf",id:"cards-im-grid-flu\xdf",level:3},{value:"Card als Artikelliste",id:"card-als-artikelliste",level:3}],p={toc:u},k="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.default,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,r.kt)(o._,{component:"card",mdxType:"LiveEditorCompact"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)("h3",{id:"card"},"Card"),(0,r.kt)(i._,{component:"card",sample:"basic",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"best\xe4tigingscard"},"Best\xe4tigingscard"),(0,r.kt)(i._,{component:"card",sample:"confirm",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"cards-im-grid-flu\xdf"},"Cards im Grid-Flu\xdf"),(0,r.kt)(i._,{component:"card",sample:"flex",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"card-als-artikelliste"},"Card als Artikelliste"),(0,r.kt)(i._,{component:"card",sample:"selection",mdxType:"Configurator"}))}g.isMDXComponent=!0},81501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(15882),r=(n(50959),n(17942));const l={},i=void 0,o={unversionedId:"readmes/card/readme",id:"readmes/card/readme",title:"readme",description:"Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die Card-Komponente an. Mit ihrer Hilfe k\xf6nnen Sie Ihre Inhalte sehr einfach strukturieren.",source:"@site/docs/readmes/card/readme.md",sourceDirName:"readmes/card",slug:"/readmes/card/",permalink:"/docs/next/readmes/card/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/next/readmes/button-link/"},next:{title:"readme",permalink:"/docs/next/readmes/components/"}},d={},s=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Einfache Standard-Card",id:"einfache-standard-card",level:3},{value:"Titel der Card-Komponente",id:"titel-der-card-komponente",level:3},{value:"Inhalts-Container",id:"inhalts-container",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die ",(0,r.kt)("strong",{parentName:"p"},"Card"),"-Komponente an. Mit ihrer Hilfe k\xf6nnen Sie Ihre Inhalte sehr einfach strukturieren."),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Card"),"-Komponente besteht aus einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Titel-Bereich")),", einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Inhalts-Bereich"))," und einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Fu\xdf-Bereich")),"."),(0,r.kt)("p",null,"Der ",(0,r.kt)("strong",{parentName:"p"},"Titel-Bereich")," wird in einer gr\xf6\xdferen Schrift dargestellt. Der ",(0,r.kt)("strong",{parentName:"p"},"Inhalts-Bereich")," ist optisch durch eine horizontale Trennlinie unterhalb des Titel-Bereichs abgetrennt und wird in der Standardschrift ausgegeben.\nDer ",(0,r.kt)("strong",{parentName:"p"},"Fu\xdf-Bereich")," wird optional durch das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_has-footer"))," aktiviert und stellt dann Platz f\xfcr weitere Inhalte, z.B. eine ",(0,r.kt)("strong",{parentName:"p"},"Button"),"-Komponente bereit. Der Fu\xdf-Bereich ist optisch durch eine horizontale Trennlinie vom Inhalts-Bereich abgetrennt."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _label="Testtitel">\n    <div slot="content">\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore\n        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing\n        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero\n        eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum\n        dolor sit amet.\n    </div>\n</kol-card>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("kol-card",{_label:"Testtitel"},(0,r.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"einfache-standard-card"},"Einfache Standard-Card"),(0,r.kt)("p",null,"In der Standardansicht besteht eine ",(0,r.kt)("strong",{parentName:"p"},"Card")," aus einem Titel-Bereich, und einem leeren Inhalts-Bereich.\nDie horizontale Trennlinie zwischen beiden Bereichen setzt KoliBri automatisch."),(0,r.kt)("h3",{id:"titel-der-card-komponente"},"Titel der Card-Komponente"),(0,r.kt)("p",null,"Den Titel der Card bestimmen Sie durch Setzen des Attributs ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_label")),". Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nBeachten Sie, dass ",(0,r.kt)("strong",{parentName:"p"},"HTML-Code")," nicht erlaubt ist. Sofern nicht gesetzt werden drei Punkte dargestellt.\nDie \xdcberschriftenebene des Titels wird durch das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_level"))," \xfcbergeben. M\xf6glich sind die Level ",(0,r.kt)("strong",{parentName:"p"},"1")," bis ",(0,r.kt)("strong",{parentName:"p"},"6")),(0,r.kt)("h3",{id:"inhalts-container"},"Inhalts-Container"),(0,r.kt)("p",null,"Die Inhalte im Header/Content/Footer-Bereich der Card bestimmen Sie durch Einf\xfcgen eines ",(0,r.kt)("strong",{parentName:"p"},"Inhalts-Containers")," innerhalb des ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-card></kol-card>-Elements"),". Der Container muss als Attribut ",(0,r.kt)("strong",{parentName:"p"},'slot="header/coontent/footer"')," enthalten. Hier k\xf6nnen Sie beliebigen ",(0,r.kt)("strong",{parentName:"p"},"HTML-Code")," einf\xfcgen."),(0,r.kt)("p",null,"Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xf6nnen, es aber empfohlen wird ein ",(0,r.kt)("inlineCode",{parentName:"p"},"<div></div>"),"-Tag zu verwenden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _label="Beispiel" _level="1">\n    <div slot="content">Text im Inhalts-Bereich</div>\n</kol-card>\n')),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,r.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um in sich geschlossene Themenbereiche optisch zu kapseln."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,r.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um Ihre Inhalte semantisch zu strukturieren."),(0,r.kt)("li",{parentName:"ul"},"Vermeiden Sie, zu viele Cards auf einer Inhaltsseite zu verwenden."),(0,r.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Inhalte innerhalb der Card-Komponente zu platzieren, wenn sich die zugeh\xf6rigen Aktions-Elemente (Buttons, Links, etc.) nicht innerhalb der gleichen Card befinden.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hasCloser")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_has-closer")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines whether the element can be closed."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hasFooter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_has-footer")),(0,r.kt)("td",{parentName:"tr",align:null},'Shows the slot="footer".'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Use ","_","label.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Deprecated: Gibt die Beschriftung der Komponente an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_headline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_headline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Property ","_","heading.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Deprecated: Gibt die Beschriftung der Komponente an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the event callback functions for the component."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Slot"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich der Card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"content"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich der Card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"footer"')),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated f\xfcr Version 2: Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Fu\xdfbereich der Card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"header"')),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated f\xfcr Version 2: Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Kopfbereich unterhalb der \xdcberschrift der Card.")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc")),(0,r.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-card --\x3e kol-heading-wc\n  kol-card --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  style kol-card fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);