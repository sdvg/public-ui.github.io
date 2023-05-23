"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3428],{44475:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(96156),r=n(50959);const i=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,r.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===d&&r.createElement("iframe",{src:p,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),r.createElement("div",null,"Angular"===d&&r.createElement(o,{url:i(c,t,n,u.angular)})),r.createElement("div",null,"React"===d&&r.createElement(o,{url:i(c,t,n,u.react)})),r.createElement("div",null,"Vue"===d&&r.createElement(o,{url:i(c,t,n,u.vue)})),r.createElement("div",null,"Web Component"===d&&r.createElement(o,{url:i(c,t,n,u.webcomponent)})))}},5749:(e,t,n)=>{n.d(t,{_:()=>f});var a=n(38515),r=n(96156),i=n(50959),l=n(92122);function o(e){const{attribute:t,label:n,update:a,value:l}=e,[o,d]=(0,i.useState)(""),[s,c]=(0,i.useState)(""),[m,u]=(0,i.useState)(""),[p,k]=(0,i.useState)("");let h=!1,g=!1,b=!1,v=!1;t.type.includes("KoliBriAllIcon")?(h=!0,g=!0,b=!0,v=!0):(t.type.includes("KoliBriVerticalIcon")&&(b=!0,v=!0),t.type.includes("KoliBriHorizontalIcon")&&(h=!0,g=!0)),(0,i.useEffect)((()=>{if(!o||s||m||p){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),m&&(e.top=`codicon codicon-${m}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,s,m,p]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,h?i.createElement(r.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",g?i.createElement(r.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",b?i.createElement(r.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",v?i.createElement(r.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function d(e){const{label:t,name:n,update:a,value:l}=e;return(0,i.useEffect)((()=>{l||a(n,"#000000")}),[]),i.createElement(r.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:l},t)}function s(e){const{name:t,label:n,types:a,update:l,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),i.createElement(r.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>l(t,n[0])},_value:o},n)}function c(e){const{attribute:t,update:n,value:a}=e,l=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=i.createElement(r.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(d,{name:t.name,label:c,update:n,value:a});case"_icon":return i.createElement(o,{attribute:t,label:c,update:n,value:a});default:switch(l){case"string":return i.createElement(r.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},c);case"number":return i.createElement(r.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},c);case"boolean":return i.createElement(r.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},c);default:return e.length>1?i.createElement(s,{label:c,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,c)}var m=n(45413),u=n(77192),p=n(85630),k=n.n(p);function h(e){const{tag:t,params:n}=e;let a="";const r=(0,i.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[i,s]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(s){let e="";switch(typeof s){case"string":e=` ${i}="${s.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${s.toString()}"`;break;case"boolean":e=s?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(s)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const l=`<kol-${t}${a}>${r}</kol-${t}>`;let o;try{o=(0,u.format)(l,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(d){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${l}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:r.T5,accordion:r.RZ,alert:r.K5,badge:r.Er,breadcrumb:r.lo,button:r.ic,"button-group":r.uz,"button-link":r.f6,card:r.Gc,details:r.ox,form:r.m5,heading:r.HA,icon:r.Jl,image:r.Cd,"indented-text":r.CV,"input-checkbox":r.TE,"input-color":r.Np,"input-date":r.O,"input-email":r.Lj,"input-file":r.CX,"input-number":r.c2,"input-password":r.z5,"input-radio":r.sy,"input-range":r.TQ,"input-text":r.WD,kolibri:r.Vs,link:r.Nv,"link-button":r.Kc,"link-group":r.$o,logo:r.QK,modal:r.Ud,nav:r.MA,pagination:r.Q4,popover:r.hV,progress:r.WR,quote:r.VZ,select:r.r7,"skip-nav":r.P,spin:r.qq,symbol:r.is,table:r.Vp,tabs:r.UD,textarea:r.Qs,toast:r.CO,tooltip:r.Ze,version:r.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function b(e){const{description:t,name:n,update:a,value:r}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n),": ",t,i.createElement("br",null),i.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r}))}const v=["_smart-button","_icon-align"];function f(e){const[t,n]=(0,i.useState)({}),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const s=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){n((n=>{const a={...n[o],[e]:t};return console.log(a),{...n,[o]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(l.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(r.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(r.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(g,{tag:o,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(h,{params:s,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(r.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(r.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},u&&u.attributes.map((e=>i.createElement(i.Fragment,null,!v.includes(e.name)&&i.createElement(c,{key:e.name,attribute:e,update:m,value:s[e.name]})))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(r.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},u&&u.slots.map((e=>i.createElement(b,{key:e.name,description:e.description,name:e.name,update:m,value:s["slot-"+e.name]}))),u&&0===u.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},55782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>k});var a=n(15882),r=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Einfache Standard-Card",id:"einfache-standard-card",level:3},{value:"Titel der Card-Komponente",id:"titel-der-card-komponente",level:3},{value:"Inhalts-Container",id:"inhalts-container",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die ",(0,r.kt)("strong",{parentName:"p"},"Card"),"-Komponente an. Mit ihrer Hilfe k\xf6nnen Sie Ihre Inhalte sehr einfach strukturieren."),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Card"),"-Komponente besteht aus einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Titel-Bereich")),", einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Inhalts-Bereich"))," und einem ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Fu\xdf-Bereich")),"."),(0,r.kt)("p",null,"Der ",(0,r.kt)("strong",{parentName:"p"},"Titel-Bereich")," wird in einer gr\xf6\xdferen Schrift dargestellt. Der ",(0,r.kt)("strong",{parentName:"p"},"Inhalts-Bereich")," ist optisch durch eine horizontale Trennlinie unterhalb des Titel-Bereichs abgetrennt und wird in der Standardschrift ausgegeben.\nDer ",(0,r.kt)("strong",{parentName:"p"},"Fu\xdf-Bereich")," wird optional durch das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_has-footer"))," aktiviert und stellt dann Platz f\xfcr weitere Inhalte, z.B. eine ",(0,r.kt)("strong",{parentName:"p"},"Button"),"-Komponente bereit. Der Fu\xdf-Bereich ist optisch durch eine horizontale Trennlinie vom Inhalts-Bereich abgetrennt."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _heading="Testtitel" _has-footer _max-height="vh2">\n    <div slot="header">Text im Header-Bereich</div>\n    <div slot="content">\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos\n        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n    </div>\n    <div slot="footer">Weiterer Beispieltext im Fu\xdf-Bereich</div>\n</kol-card>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("kol-card",{_heading:"Testtitel","_has-footer":!0,"_max-height":"vh2"},(0,r.kt)("div",{slot:"header"},"Text im Header-Bereich"),(0,r.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,r.kt)("div",{slot:"footer"},"Weiterer Beispieltext im Fu\xdf-Bereich")),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"einfache-standard-card"},"Einfache Standard-Card"),(0,r.kt)("p",null,"In der Standardansicht besteht eine ",(0,r.kt)("strong",{parentName:"p"},"Card")," aus einem Titel-Bereich, und einem leeren Inhalts-Bereich.\nDie horizontale Trennlinie zwischen beiden Bereichen setzt KoliBri automatisch."),(0,r.kt)("h3",{id:"titel-der-card-komponente"},"Titel der Card-Komponente"),(0,r.kt)("p",null,"Den Titel der Card bestimmen Sie durch Setzen des Attributs ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_heading")),". Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nBeachten Sie, dass ",(0,r.kt)("strong",{parentName:"p"},"HTML-Code")," nicht erlaubt ist. Sofern nicht gesetzt werden drei Punkte dargestellt.\nDie \xdcberschriftenebene des Titels wird durch das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_level"))," \xfcbergeben. M\xf6glich sind die Level ",(0,r.kt)("strong",{parentName:"p"},"1")," bis ",(0,r.kt)("strong",{parentName:"p"},"6")),(0,r.kt)("h3",{id:"inhalts-container"},"Inhalts-Container"),(0,r.kt)("p",null,"Die Inhalte im Header/Content/Footer-Bereich der Card bestimmen Sie durch Einf\xfcgen eines ",(0,r.kt)("strong",{parentName:"p"},"Inhalts-Containers")," innerhalb des ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-card></kol-card>-Elements"),". Der Container muss als Attribut ",(0,r.kt)("strong",{parentName:"p"},'slot="header/coontent/footer"')," enthalten. Hier k\xf6nnen Sie beliebigen ",(0,r.kt)("strong",{parentName:"p"},"HTML-Code")," einf\xfcgen."),(0,r.kt)("p",null,"Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xf6nnen, es aber empfohlen wird ein ",(0,r.kt)("inlineCode",{parentName:"p"},"<div></div>"),"-Tag zu verwenden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _heading="Beispiel" _level="1">\n    <div slot="header">Text im Header-Bereich</div>\n    <div slot="content">Text im Inhalts-Bereich</div>\n    <div slot="footer">Text im Fu\xdf-Bereich</div>\n</kol-card>\n')),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,r.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um in sich geschlossene Themenbereiche optisch zu kapseln."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,r.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um Ihre Inhalte semantisch zu strukturieren."),(0,r.kt)("li",{parentName:"ul"},"Vermeiden Sie, zu viele Cards auf einer Inhaltsseite zu verwenden."),(0,r.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Inhalte innerhalb der Card-Komponente zu platzieren, wenn sich die zugeh\xf6rigen Aktions-Elemente (Buttons, Links, etc.) nicht innerhalb der gleichen Card befinden.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hasFooter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_has-footer")),(0,r.kt)("td",{parentName:"tr",align:null},"Macht den Footerbereich der Card sichtbar."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die \xdcberschrift der Card an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_headline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_headline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Property _heading.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt die \xdcberschrift der Card an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},"Setzt den H-Level, von 1 bis 6, der \xdcberschrift."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))))),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Slot"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"content"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich der Card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"footer"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Fu\xdfbereich der Card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"header"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Kopfbereich unterhalb der \xdcberschrift der Card.")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-card --\x3e kol-heading-wc\n  style kol-card fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}o.isMDXComponent=!0;var d=n(44475),s=n(5749);const c={title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},m=void 0,u={unversionedId:"components/card",id:"components/card",title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",source:"@site/docs/30-components/card.mdx",sourceDirName:"30-components",slug:"/components/card",permalink:"/en/docs/components/card",draft:!1,tags:[{label:"Card",permalink:"/en/docs/tags/card"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/en/docs/components/button"},next:{title:"Details",permalink:"/en/docs/components/details"}},p={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Card",id:"card",level:3},{value:"Best\xe4tigingscard",id:"best\xe4tigingscard",level:3},{value:"Cards im Grid-Flu\xdf",id:"cards-im-grid-flu\xdf",level:3},{value:"Card als Artikelliste",id:"card-als-artikelliste",level:3}],h={toc:k},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,r.kt)(s._,{component:"card",mdxType:"LiveEditorCompact"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)("h3",{id:"card"},"Card"),(0,r.kt)(d._,{component:"card",sample:"basic",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"best\xe4tigingscard"},"Best\xe4tigingscard"),(0,r.kt)(d._,{component:"card",sample:"confirm",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"cards-im-grid-flu\xdf"},"Cards im Grid-Flu\xdf"),(0,r.kt)(d._,{component:"card",sample:"flex",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"card-als-artikelliste"},"Card als Artikelliste"),(0,r.kt)(d._,{component:"card",sample:"selection",mdxType:"Configurator"}))}b.isMDXComponent=!0}}]);