"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7342],{49173:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(26508),i=n(50959);const l=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,d]=(0,i.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===s&&i.createElement("iframe",{src:p,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),i.createElement("div",null,"Angular"===s&&i.createElement(o,{url:l(u,t,n,c.angular)})),i.createElement("div",null,"React"===s&&i.createElement(o,{url:l(u,t,n,c.react)})),i.createElement("div",null,"Vue"===s&&i.createElement(o,{url:l(u,t,n,c.vue)})),i.createElement("div",null,"Web Component"===s&&i.createElement(o,{url:l(u,t,n,c.webcomponent)})))}},26541:(e,t,n)=>{n.d(t,{_:()=>g});var a=n(76357),i=n(26508),l=n(50959);function r(e){const{attribute:t,label:n,update:a,value:r}=e,[o,s]=(0,l.useState)(""),[d,u]=(0,l.useState)(""),[m,c]=(0,l.useState)(""),[p,k]=(0,l.useState)("");let g=!1,b=!1,N=!1,h=!1;t.type.includes("KoliBriAllIcon")?(g=!0,b=!0,N=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(N=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,b=!0)),(0,l.useEffect)((()=>{if(!o||d||m||p){const e={};o&&(e.left=`codicon codicon-${o}`),d&&(e.right=`codicon codicon-${d}`),m&&(e.top=`codicon codicon-${m}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,d,m,p]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return l.createElement("div",null,n,g?l.createElement(i.ox,{_summary:"Links"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",b?l.createElement(i.ox,{_summary:"Rechts"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",N?l.createElement(i.ox,{_summary:"Oben"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",h?l.createElement(i.ox,{_summary:"Unten"},l.createElement("div",{className:"flex flex-wrap"},v.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function o(e){const{label:t,name:n,update:a,value:r}=e;return(0,l.useEffect)((()=>{r||a(n,"#000000")}),[]),l.createElement(i.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,s=[];function d(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(d))):s.push(...a.filter((e=>"undefined"!==e)).map(d)),l.createElement(i.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>r(t,n[0])},_value:o},n)}function d(e){const{attribute:t,update:n,value:a}=e,d=(0,l.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,l.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),u=l.createElement(i.T5,{_title:t.description},t.name);switch(t.name){case"_color":return l.createElement(o,{name:t.name,label:u,update:n,value:a});case"_icon":return l.createElement(r,{attribute:t,label:u,update:n,value:a});default:switch(d){case"string":return l.createElement(i.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},u);case"number":return l.createElement(i.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},u);case"boolean":return l.createElement(i.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},u);default:return e.length>1?l.createElement(s,{label:u,name:t.name,types:e,update:n,value:a}):l.createElement("p",null,"Attribut: '",t.name,"'",l.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return l.createElement(l.Fragment,null,u)}var u=n(45413);function m(e){const{tag:t,params:n}=e;let a="";const i=(0,l.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[l,r]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(r){let e="";switch(typeof r){case"string":e=` ${l}="${r}"`;break;case"number":e=` ${l}="${r.toString()}"`;break;case"boolean":e=r?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}return l.createElement("div",{className:"h-48 rounded-md overflow-hidden"},l.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{fontSize:16,lineNumbers:"off",readOnly:!0},theme:"vs-dark",value:`<kol-${t}${a}>${i}</kol-${t}>`}))}function c(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:i.T5,accordion:i.RZ,alert:i.K5,badge:i.Er,breadcrumb:i.lo,button:i.ic,"button-group":i.uz,"button-link":i.f6,card:i.Gc,details:i.ox,form:i.m5,heading:i.HA,icon:i.Jl,image:i.Cd,"indented-text":i.CV,"input-checkbox":i.TE,"input-color":i.Np,"input-date":i.O,"input-email":i.Lj,"input-file":i.CX,"input-number":i.c2,"input-password":i.z5,"input-radio":i.sy,"input-range":i.TQ,"input-text":i.WD,kolibri:i.Vs,link:i.Nv,"link-button":i.Kc,"link-group":i.$o,logo:i.QK,modal:i.Ud,nav:i.MA,pagination:i.Q4,popover:i.hV,progress:i.WR,quote:i.VZ,select:i.r7,"skip-nav":i.P,spin:i.qq,symbol:i.is,table:i.Vp,tabs:i.UD,textarea:i.Qs,toast:i.CO,tooltip:i.Ze,version:i.u_}[e.tag];return a?l.createElement(a,t,n.map((e=>l.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):l.createElement("div",null,"Tag not implemented")}function p(e){const{description:t,name:n,update:a,value:i}=e;return l.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},l.createElement("b",null,n),": ",t,l.createElement("br",null),l.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{fontSize:16,lineNumbers:"off"},value:i}))}const k=["_smart-button","_icon-align"];function g(e){const[t,n]=(0,l.useState)({}),[r,o]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_label"===e.name))&&!t[r]?._label&&u("_label","Label-Text")}),[r]);const s=(0,l.useMemo)((()=>t[r]||{}),[t,r]);function u(e,t){n((n=>{const a={...n[r],[e]:t};return console.log(a),{...n,[r]:a}}))}const g=Object.values(a.p).find((e=>e.name===`kol-${r}`));return l.createElement(l.Fragment,null,l.createElement(i.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),l.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},l.createElement(i.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},l.createElement("div",{className:"p-2"},l.createElement(c,{tag:r,params:s})),l.createElement("div",{className:"lg:col-span-2"},l.createElement(m,{params:s,tag:r}))),l.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},l.createElement(i.HA,{_level:3,_label:"Konfigurator"}),l.createElement("div",null,l.createElement(i.HA,{_level:4,_label:"Properties"}),l.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},g&&g.attributes.map((e=>l.createElement(l.Fragment,null,!k.includes(e.name)&&l.createElement(d,{key:e.name,attribute:e,update:u,value:s[e.name]})))),g&&0===g.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),l.createElement(i.HA,{_level:4,_label:"Slots"}),l.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},g&&g.slots.map((e=>l.createElement(p,{key:e.name,description:e.description,name:e.name,update:u,value:s["slot-"+e.name]}))),g&&0===g.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))}},5201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>N,frontMatter:()=>u,metadata:()=>c,toc:()=>k});var a=n(15882),i=(n(50959),n(17942));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Links in der Navigationsleiste definieren",id:"links-in-der-navigationsleiste-definieren",level:3},{value:"Kompakte Navigationsleiste anzeigen",id:"kompakte-navigationsleiste-anzeigen",level:3},{value:"Umschalter normale/kompakte Darstellung",id:"umschalter-normalekompakte-darstellung",level:3},{value:"Umschaltung horizontale/vertikale Ausrichtung",id:"umschaltung-horizontalevertikale-ausrichtung",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(r,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Eine ",(0,i.kt)("strong",{parentName:"p"},"Navigationsleiste")," ist eine Gruppe von verwandten Links oder Navigationselementen, die durch Anklicken eine Aktion ausf\xfchren oder Inhalte anzeigen. Sie navigiert Nutzer:innen direkt zu bestimmten Inhalten der aktuellen Seite oder zu externen Seiten. Au\xdferdem dient sie Nutzer:innen (\xe4hnlich wie Registerkarten) als Steuerelement, um Inhalte anzuzeigen, auszublenden und zwischen ihnen zu wechseln."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"KoliBri")," stellt eine umfangreich konfigurierbare, vertikale oder horizontale ",(0,i.kt)("strong",{parentName:"p"},"Navigationsleiste")," zur Verf\xfcgung, die mehrere Ebenen darstellen und in der Breite variiert werden kann.\n\xdcbergeordnete Men\xfcpunkte die Untermen\xfcpunkte enthalten, werden mit einem ",(0,i.kt)("strong",{parentName:"p"},"Plus-Icon")," am rechten Rand angezeigt. Wird der \xfcbergeordnete Men\xfcpunkt mit dem Plus-Icon ge\xf6ffnet, \xe4ndert sich das Plus-Icon automatisch zu einem ",(0,i.kt)("strong",{parentName:"p"},"Minus-Icon"),", mit dem der Men\xfcpunkt wieder geschlossen werden kann."),(0,i.kt)("p",null,"Aktive Men\xfcpunkte werden mit einer farbigen Markierung dargestellt."),(0,i.kt)("p",null,"\xdcber eine optionale Schaltfl\xe4che unterhalb der Navigation kann die Breite der ",(0,i.kt)("strong",{parentName:"p"},"Nav"),"-Komponente ver\xe4ndert werden. In der kleinsten Breite werden die Men\xfctitel ausgeblendet und nur\nnoch die Icons ausgegeben."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<kol-nav\n    _ariaLabel=\"Navigation\"\n    _links=\"[\n    {\n        _href: 'startseite',\n        _icon: 'codicon codicon-home',\n        _label: 'Startseite',\n        _children: [\n            { _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },\n            { _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },\n        ],\n    },\n    { _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' },\n]\"\n    _has-compact-button\n></kol-nav>\n")),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-nav",{_ariaLabel:"Navigation",_links:"[{_href: 'startseite',_icon: 'codicon codicon-home',_label: 'Startseite',_children: [{ _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },{ _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },],},{ _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' }]","_has-compact-button":!0})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"links-in-der-navigationsleiste-definieren"},"Links in der Navigationsleiste definieren"),(0,i.kt)("p",null,"Die Navigationsstruktur wird als Objekt oder JSON-String an das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben. Die Struktur ist als Wert/Parameter-Paar aufgebaut:\nUm Untermen\xfcpunkte zu erzeugen, erweitern Sie die JSON-Struktur um das zus\xe4tzliche Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_children"))," im \xfcbergeordneten Element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[\n    {\n        _href: 'startseite',\n        _icon: 'codicon codicon-home',\n        _label: 'Startseite',\n        _children: [\n            { _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },\n            { _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },\n        ],\n    },\n    { _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' },\n];\n")),(0,i.kt)("h3",{id:"kompakte-navigationsleiste-anzeigen"},"Kompakte Navigationsleiste anzeigen"),(0,i.kt)("p",null,"Um die Navigationsleiste in der kompakten Darstellung auszugeben, setzen Sie das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_compact")),"."),(0,i.kt)("h3",{id:"umschalter-normalekompakte-darstellung"},"Umschalter normale/kompakte Darstellung"),(0,i.kt)("p",null,"Um eine Schaltfl\xe4che einzublenden, die die kompakte Darstellung an/aus schaltet, setzen Sie das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_hasCompact-button")),".\nDiese Schaltfl\xe4che erscheint unterhalb der Navigation und wird nur bei vertikaler Ausrichtung angezeigt."),(0,i.kt)("h3",{id:"umschaltung-horizontalevertikale-ausrichtung"},"Umschaltung horizontale/vertikale Ausrichtung"),(0,i.kt)("p",null,"Die Ausrichtung der Navigationsleiste kann mit dem Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_orientation"))," umgeschaltet werden. M\xf6gliche Werte sind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"horizontal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vertical"))),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um ",(0,i.kt)("strong",{parentName:"li"},"Navigation")," oder navigations\xe4hnliche Aktionen darzustellen (z. B. interne oder externe Links, Abmelden, Kontrolle der Sichtbarkeit auf der Seite)."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie das Label, um eine klare und pr\xe4zise Beschreibung des Inhalts zu diesem bestimmten Navigationselement bereitzustellen."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie keine ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten")," f\xfcr Aktionen, die besser als Schaltfl\xe4chen dargestellt werden (z. B. \u201eSpeichern\u201c, \u201eL\xf6schen\u201c, \u201eArtikel in den Warenkorb legen\u201c)."),(0,i.kt)("li",{parentName:"ul"},"Stapeln Sie nicht mehrere ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten")," direkt nebeneinander."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie keine ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten")," zum Vergleichen von Inhalten (z. B. unterschiedliche Leistungen)."),(0,i.kt)("li",{parentName:"ul"},"Ber\xfccksichtigen Sie die Anzahl der Navigationselemente, die Sie in die ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleiste")," einf\xfcgen. Wenn Sie das Gef\xfchl haben, dass die Zahl zu gro\xdf wird, ziehen Sie alternative Ans\xe4tze zur Pr\xe4sentation des Inhalts in Betracht oder verwenden Sie ein anderes Navigationsmuster/eine andere Komponente.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten")," als In-Page-Navigation auf einer Landingpage."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um verwandte Informationen auf einer Landingpage zu organisieren."),(0,i.kt)("li",{parentName:"ul"},"Nutzen Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um Angebote oder Vorteile in verschiedene Kategorien einzuordnen (z.B. Formulare)."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um FAQs in verschiedene Kategorien zu unterteilen.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Fokussiert den ersten Men\xfcpunkt in der Navigation. Nachfolgend kann mit der Tab-Taste jeder Men\xfcpunkt angesprungen werden. Wenn der Has-compact-Button aktiviert wurde, ist dieser ebenfalls mit der Tab-Taste erreichbar.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enter")),(0,i.kt)("td",{parentName:"tr",align:null},"Klappt Unterpunkte auf/zu, sofern eine Ausklappschaltfl\xe4che fokussiert ist, aktiviert die Schaltfl\xe4che oder \xf6ffnet den Link anderenfalls.")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaCurrentValue")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-current-value")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Wert von aria-current an, der bei dem aktuellen Kontext innerhalb der Navigation verwendet werden soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"date"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"location"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"page"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"step"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"time"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_collapsible")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_collapsible")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob Knoten in der Navigation zusammengeklappt werden k\xf6nnen. Ist standardm\xe4\xdfig aktiv."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_compact")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_compact")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Navigation kompakt angezeigt wird."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hasCompactButton")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_has-compact-button")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Version 2",(0,i.kt)("br",null),(0,i.kt)("br",null),"Gibt an, ob die Navigation eine zus\xe4tzliche Schaltfl\xe4che zum Aus- und Einklappen der Navigation anzeigen soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_links")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_links")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die geordnete Liste der Seitenhierarchie an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ButtonOrLinkOrTextWithChildrenProps[]")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Ausrichtung der Navigation an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"horizontal"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"vertical"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'vertical'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_variant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_variant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," This property is deprecated and will be removed in the next major version.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Stellt verschiedene Varianten der Navigation zur Verf\xfcgung."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"primary"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"secondary"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'primary'"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,i.kt)("li",{parentName:"ul"},"kol-span-wc"),(0,i.kt)("li",{parentName:"ul"},"kol-link-wc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./button"},"kol-button"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-nav --\x3e kol-button-wc\n  kol-nav --\x3e kol-span-wc\n  kol-nav --\x3e kol-link-wc\n  kol-nav --\x3e kol-button\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-button --\x3e kol-button-wc\n  style kol-nav fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}o.isMDXComponent=!0;var s=n(49173),d=n(26541);const u={title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",tags:["Nav","Beschreibung","Spezifikation","Beispiele"]},m=void 0,c={unversionedId:"components/nav",id:"components/nav",title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",source:"@site/docs/30-components/nav.mdx",sourceDirName:"30-components",slug:"/components/nav",permalink:"/docs/components/nav",draft:!1,tags:[{label:"Nav",permalink:"/docs/tags/nav"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",tags:["Nav","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/docs/components/modal"},next:{title:"Pagination",permalink:"/docs/components/pagination"}},p={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:k},b="wrapper";function N(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,i.kt)(d._,{component:"nav",mdxType:"LiveEditorCompact"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(s._,{component:"nav",sample:"basic",mdxType:"Configurator"}),(0,i.kt)(s._,{component:"nav",sample:"horizontal",mdxType:"Configurator"}))}N.isMDXComponent=!0}}]);