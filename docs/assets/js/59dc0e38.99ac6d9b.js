"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7370],{94328:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(4012),r=n(50959);const i=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,u]=(0,r.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},m=`/sample-react/#/${t}/${n}`,b={onSelect:(e,t)=>{switch(t){case 1:u((()=>"Angular"));break;case 2:u((()=>"React"));break;case 3:u((()=>"Vue"));break;case 4:u((()=>"Web Component"));break;default:u((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===s&&r.createElement("iframe",{src:m,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),r.createElement("div",null,"Angular"===s&&r.createElement(o,{url:i(c,t,n,p.angular)})),r.createElement("div",null,"React"===s&&r.createElement(o,{url:i(c,t,n,p.react)})),r.createElement("div",null,"Vue"===s&&r.createElement(o,{url:i(c,t,n,p.vue)})),r.createElement("div",null,"Web Component"===s&&r.createElement(o,{url:i(c,t,n,p.webcomponent)})))}},57614:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(25734),r=n(4012),i=n(50959),l=n(42401);function o(e){const{attribute:t,label:n,update:a,value:l}=e,[o,s]=(0,i.useState)(""),[u,c]=(0,i.useState)(""),[d,p]=(0,i.useState)(""),[m,b]=(0,i.useState)("");let g=!1,h=!1,k=!1,f=!1;t.type.includes("KoliBriAllIcon")?(g=!0,h=!0,k=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(k=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,h=!0)),(0,i.useEffect)((()=>{if(!o||u||d||m){const e={};o&&(e.left=`codicon codicon-${o}`),u&&(e.right=`codicon codicon-${u}`),d&&(e.top=`codicon codicon-${d}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,u,d,m]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,g?i.createElement(r.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",h?i.createElement(r.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",k?i.createElement(r.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>p(e)}}))))):"",f?i.createElement(r.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(r.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:l}=e;return(0,i.useEffect)((()=>{l||a(n,"#000000")}),[]),i.createElement(r.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:l},t)}function u(e){const{name:t,label:n,types:a,update:l,value:o}=e,s=[];function u(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(u))):s.push(...a.filter((e=>"undefined"!==e)).map(u)),i.createElement(r.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>l(t,n[0])},_value:o},n)}function c(e){const{attribute:t,update:n,value:a}=e,l=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=i.createElement(r.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(s,{name:t.name,label:c,update:n,value:a});case"_icon":return i.createElement(o,{attribute:t,label:c,update:n,value:a});default:switch(l){case"string":return i.createElement(r.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},c);case"number":return i.createElement(r.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},c);case"boolean":return i.createElement(r.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},c);default:return e.length>1?i.createElement(u,{label:c,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,c)}var d=n(45413),p=n(77192),m=n(85630),b=n.n(m);function g(e){const{tag:t,params:n}=e;let a="";const r=(0,i.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[i,u]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(u){let e="";switch(typeof u){case"string":e=` ${i}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${u.toString()}"`;break;case"boolean":e=u?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const l=`<kol-${t}${a}>${r}</kol-${t}>`;let o;try{o=(0,p.format)(l,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(s){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${l}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(d.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function h(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:r.T5,accordion:r.RZ,alert:r.K5,badge:r.Er,breadcrumb:r.lo,button:r.ic,"button-group":r.uz,"button-link":r.f6,card:r.Gc,details:r.ox,form:r.m5,heading:r.HA,icon:r.Jl,image:r.Cd,"indented-text":r.CV,"input-checkbox":r.TE,"input-color":r.Np,"input-date":r.O,"input-email":r.Lj,"input-file":r.CX,"input-number":r.c2,"input-password":r.z5,"input-radio":r.sy,"input-range":r.TQ,"input-text":r.WD,kolibri:r.Vs,link:r.Nv,"link-button":r.Kc,"link-group":r.$o,logo:r.QK,modal:r.Ud,nav:r.MA,pagination:r.Q4,popover:r.hV,progress:r.WR,quote:r.VZ,select:r.r7,"skip-nav":r.P,spin:r.qq,symbol:r.is,table:r.Vp,tabs:r.UD,textarea:r.Qs,toast:r.CO,tooltip:r.Ze,version:r.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function k(e){const{description:t,name:n,update:a,value:r}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n),": ",t,i.createElement("br",null),i.createElement(d.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r}))}const f=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,i.useState)({}),[o,s]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&d("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&d("_heading","Heading-Text")}),[o]);const u=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function d(e,t){n((n=>{const a={...n[o],[e]:t};return console.log(a),{...n,[o]:a}}))}const p=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(l.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(r.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(r.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(h,{tag:o,params:u})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(g,{params:u,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(r.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(r.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},p&&p.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&i.createElement(c,{key:e.name,attribute:e,update:d,value:u[e.name]})))),p&&0===p.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(r.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},p&&p.slots.map((e=>i.createElement(k,{key:e.name,description:e.description,name:e.name,update:d,value:u["slot-"+e.name]}))),p&&0===p.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},67665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>b});var a=n(15882),r=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Einfache ButtonGroup",id:"einfache-buttongroup",level:3},{value:"ButtonGroup mit Text, Icon und Text mit Icon",id:"buttongroup-mit-text-icon-und-text-mit-icon",level:3},{value:"Ausgabe verschiedener Styles f\xfcr Buttons in der ButtonGroup",id:"ausgabe-verschiedener-styles-f\xfcr-buttons-in-der-buttongroup",level:3},{value:"Optische Ausrichtung",id:"optische-ausrichtung",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Buttons")," dienen dazu, Nutzer:innen Auswahlm\xf6glichkeiten f\xfcr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen den Nutzer:innen, die wichtigsten Aktionen einer Seite oder innerhalb eines Applikation zu finden und erm\xf6glichen es ihm, diese Aktionen auszuf\xfchren."),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"ButtonGroup"),"-Komponente fasst mehrere Buttons zu einer optischen und funktionalen Einheit zusammen."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("p",null,"Die Komponente ",(0,r.kt)("strong",{parentName:"p"},"ButtonGroup")," besteht aus einem Hauptelement ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-button-group></kol-button-group>"),". In ihm werden beliebig viele ",(0,r.kt)("strong",{parentName:"p"},"Button"),"-Komponenten zu einer Gruppe zusammengefasst. Die einzelnen ",(0,r.kt)("strong",{parentName:"p"},"Buttons")," entsprechen in ihrer Konstruktion der Beschreibung\nzur ",(0,r.kt)("strong",{parentName:"p"},"Button"),"-Komponente."),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-button-group>\n  <kol-button _label="Speichern" _variant="primary"></<kol-button>\n  <kol-button _label="Speichern & Schlie\xdfen" _variant="normal"></<kol-button>\n  <kol-button _label="Abbrechen" _variant="secondary"></<kol-button>\n  <kol-button _label="L\xf6schen" _variant="danger"></<kol-button>\n  <kol-button _label="Ghost" _variant="ghost"></kol-button>\n  <kol-button _label="Deaktiviert" _disabled></<kol-button>\n</kol-button-group>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("kol-button-group",null,(0,r.kt)("kol-button",{_label:"Speichern",_variant:"primary"}),(0,r.kt)("kol-button",{_label:"Speichern & Schlie\xdfen",_variant:"normal"}),(0,r.kt)("kol-button",{_label:"Abbrechen",_variant:"secondary"}),(0,r.kt)("kol-button",{_label:"L\xf6schen",_variant:"danger"}),(0,r.kt)("kol-button",{_label:"Ghost",_variant:"ghost"}),(0,r.kt)("kol-button",{_label:"Deaktiviert",_disabled:!0})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"einfache-buttongroup"},"Einfache ButtonGroup"),(0,r.kt)("p",null,"Im einfachsten Fall besteht die ",(0,r.kt)("strong",{parentName:"p"},"ButtonGroup"),"-Komponente aus einer Liste beschrifteter Schaltfl\xe4chen. F\xfcr die Beschriftung der Buttons wird lediglich das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'_label="Ihre Beschriftung"'))," verwendet."),(0,r.kt)("h3",{id:"buttongroup-mit-text-icon-und-text-mit-icon"},"ButtonGroup mit Text, Icon und Text mit Icon"),(0,r.kt)("p",null,"\xdcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'_icon="xxx"'))," wird festgelegt, ob und welches Icon verwendet werden soll."),(0,r.kt)("p",null,"Eine \xdcbersicht \xfcber die zur Verf\xfcgung stehenden Icons in KoliBri finden Sie ",(0,r.kt)("a",{parentName:"p",href:"https://icofont.com/icons"},"hier"),"."),(0,r.kt)("p",null,"\xdcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_icon-only"))," legen Sie fest, ob nur das Icon angezeigt werden soll. Der Inhalt des Attributs ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_label"))," wird nicht mehr angezeigt."),(0,r.kt)("h3",{id:"ausgabe-verschiedener-styles-f\xfcr-buttons-in-der-buttongroup"},"Ausgabe verschiedener Styles f\xfcr Buttons in der ButtonGroup"),(0,r.kt)("p",null,"F\xfcr die Standardausgabe eines Buttons stehen die Werte ",(0,r.kt)("strong",{parentName:"p"},"primary"),", ",(0,r.kt)("strong",{parentName:"p"},"secondary"),", ",(0,r.kt)("strong",{parentName:"p"},"normal"),", ",(0,r.kt)("strong",{parentName:"p"},"danger")," und ",(0,r.kt)("strong",{parentName:"p"},"ghost")," zur Verf\xfcgung. Hier\xfcber wird die farbliche Gestaltung des Buttons festgelegt."),(0,r.kt)("h3",{id:"optische-ausrichtung"},"Optische Ausrichtung"),(0,r.kt)("p",null,"\xdcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_nestled"))," kann eine optische Ausrichtung der ButtonGroup bestimmt werden. An der angegebenen Position werden die abgerundeten Ecken entfernt, so dass der Eindruck einer Button-Leiste entsteht. M\xf6glich sind die Werte ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),"und ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),"."),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie eine prim\xe4re Schaltfl\xe4che f\xfcr die n\xe4chstbeste Aktion. Verbleibende Calls-to-Actions sollten als sekund\xe4re Schaltfl\xe4che dargestellt werden."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Schaltfl\xe4chen an einheitlichen Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie nur eine prim\xe4re Schaltfl\xe4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten."),(0,r.kt)("li",{parentName:"ul"},"Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xe4che ausf\xfchrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xe4gnante, spezifische, selbsterkl\xe4rende Beschriftungen."),(0,r.kt)("li",{parentName:"ul"},'Schaltfl\xe4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xfcr Interpretationen dar\xfcber gibt, wof\xfcr das Verb zust\xe4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".'),(0,r.kt)("li",{parentName:"ul"},"Wenn Sie mehrere Buttons kombinieren oder anordnen m\xf6chten, verwenden Sie die ",(0,r.kt)("strong",{parentName:"li"},"ButtonGroup"),"-Komponente."),(0,r.kt)("li",{parentName:"ul"},'Verwenden Sie nicht mehrere Buttons im Style "prim\xe4r" in einer ',(0,r.kt)("strong",{parentName:"li"},"ButtonGroup"),"."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Buttons nicht als Link oder als Navigationselement.")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"Bei Verwendung der ",(0,r.kt)("strong",{parentName:"p"},"ButtonGroup"),"-Komponente sind keine besonderen Ma\xdfnahmen in Bezug auf die barrierefreiheit zu ber\xfccksichtigen. Die innerhalb der ButtonGroup enthaltenen ",(0,r.kt)("strong",{parentName:"p"},"Button"),"-Komponenten besitzen jedoch einige wichtige Aspekte in diesem Zusammenhang:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In der Button-Komponente werden die optionalen ",(0,r.kt)("strong",{parentName:"li"},"Icons")," links ausgerichtet, um Nutzer","*","innen mit eingeschr\xe4nktem Sichtfeld eine bessere Bedienbarkeit zu erm\xf6glichen."),(0,r.kt)("li",{parentName:"ul"},"Die Farben der ",(0,r.kt)("strong",{parentName:"li"},"Variant-Typen")," ",(0,r.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"normal"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"danger")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"ghost")," wurden in Hinblick auf bestm\xf6glichen Kontrast gew\xe4hlt. Die Schriftfarbe ist per default immer wei\xdf.")),(0,r.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Springt den einzelnen Button der ButtonGroup an und fokussiert ihn.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Enter")),(0,r.kt)("td",{parentName:"tr",align:null},"\xd6ffnet den Link des fokussierten Button oder f\xfchrt dessen onClick-Methode aus.")))),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#button"},"https://www.w3.org/TR/wai-aria-practices/#button"))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"used-by"},"Used by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"."},"kol-button-group")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tabs"},"kol-tabs"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-button-group --\x3e kol-button-group-wc\n  kol-tabs --\x3e kol-button-group-wc\n  style kol-button-group-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}o.isMDXComponent=!0;var s=n(94328),u=n(57614);const c={title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",tags:["ButtonGroup","Beschreibung","Spezifikation","Beispiele"]},d=void 0,p={unversionedId:"components/button-group",id:"components/button-group",title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",source:"@site/docs/30-components/button-group.mdx",sourceDirName:"30-components",slug:"/components/button-group",permalink:"/docs/components/button-group",draft:!1,tags:[{label:"ButtonGroup",permalink:"/docs/tags/button-group"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",tags:["ButtonGroup","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Breadcrumb",permalink:"/docs/components/breadcrumb"},next:{title:"ButtonLink",permalink:"/docs/components/button-link"}},m={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:b},h="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,r.kt)(u._,{component:"button-group",mdxType:"LiveEditorCompact"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(s._,{component:"button-group",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);