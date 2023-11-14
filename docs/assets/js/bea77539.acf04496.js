"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[91529],{71703:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(72526),l=n(50959);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,d]=(0,l.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${n}?hideMenus`,b={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:r(c,t,n,m.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:r(c,t,n,m.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:r(c,t,n,m.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:r(c,t,n,m.webcomponent)})))}},39351:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(99439),l=n(72526),r=n(50959),i=n(2561);function o(e){const{label:t,name:n,update:a,value:i}=e;return(0,r.useEffect)((()=>{i||a(n,"#000000")}),[]),r.createElement(l.Np,{_label:"",_on:{onChange:(e,t)=>a(n,t)},_value:i},r.createElement("span",{slot:"expert"},t))}function s(e){const{attribute:t,label:n,update:a}=e,[i,o]=(0,r.useState)(""),[s,d]=(0,r.useState)(""),[c,u]=(0,r.useState)(""),[m,p]=(0,r.useState)("");let b=!1,k=!1,h=!1,g=!1;t.type.includes("KoliBriAllIcon")?(b=!0,k=!0,h=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,k=!0)),(0,r.useEffect)((()=>{if(!i||s||c||m){const e={};i&&(e.left=`codicon codicon-${i}`),s&&(e.right=`codicon codicon-${s}`),c&&(e.top=`codicon codicon-${c}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${i}`)}),[i,s,c,m]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,b?r.createElement(l.ox,{_label:"Links"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",k?r.createElement(l.ox,{_label:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}}))))):"",h?r.createElement(l.ox,{_label:"Oben"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}}))))):"",g?r.createElement(l.ox,{_label:"Unten"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function d(e){const{name:t,label:n,types:a,update:i,value:o}=e,s=[];function d(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(d))):s.push(...a.filter((e=>"undefined"!==e)).map(d)),r.createElement(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(s),_on:{onChange:(e,n)=>i(t,n[0])},_value:o?[o]:void 0},r.createElement("span",{slot:"expert"},n))}function c(e){const{attribute:t,update:n,value:a}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=r.createElement(l.T5,{_label:t.description},t.name);switch(t.name){case"_color":return r.createElement(o,{name:t.name,label:c,update:n,value:a});case"_icon":return r.createElement(s,{attribute:t,label:c,update:n,value:a});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},r.createElement("span",{slot:"expert"},c));case"number":return r.createElement(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},r.createElement("span",{slot:"expert"},c));case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:!0===a,_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},r.createElement("span",{slot:"expert"},c));default:return e.length>1?r.createElement(d,{label:c,name:t.name,types:e,update:n,value:a}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return r.createElement(r.Fragment,null,c)}var u=n(22115),m=n(77192),p=n(85630),b=n.n(p);function k(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,r.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[r,u]of o)if(u){let e="";switch(typeof u){case"string":e=` ${r}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${u.toString()}"`;break;case"boolean":e=u?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${i}</kol-${t}>`;let d;try{d=(0,m.format)(s,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(c){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d}))}function h(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.KolPopover,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.KolToast,version:l.u_}[e.tag];return a?r.createElement(a,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function g(e){const{description:t,name:n,update:a,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n||"default"),": ",t,r.createElement("br",null),r.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[t,n]=(0,r.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==_[n]?.[t.name]&&(e[n][t.name]=_[n][t.name])})),t.slots.forEach((t=>{const a=`slot-${t.name||"default"}`,l=_[n]?.[a];l&&(e[n][a]=l)}))})),e}()),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const d=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const m=Object.values(a.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(h,{tag:o,params:d})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(k,{params:d,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},m&&m.attributes.map((e=>r.createElement(r.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&r.createElement(c,{key:e.name,attribute:e,update:u,value:d[e.name]})))),m&&0===m.attributes.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-auto"},m&&m.slots.map((e=>r.createElement(g,{key:e.name,description:e.description,name:e.name||"default",update:u,value:d["slot-"+(e.name||"default")]}))),m&&0===m.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},41644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>b});var a=n(97605),l=(n(50959),n(17942));const r={toc:[{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Definition der Links",id:"definition-der-links",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mit Hilfe der ",(0,l.kt)("strong",{parentName:"p"},"Breadcrumb"),"-Komponente kann der Pfad zur aktuellen Position einer Webseite in einer hierarchischen Struktur dargestellt werden."),(0,l.kt)("h2",{id:"funktionsweise"},"Funktionsweise"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Breadcrumb"),"-Komponente zeigt die aktuelle Position einer Webseite in einer horizontalen Navigationsstruktur an. Das jeweils letzte Element rechts stellt die aktuelle Seite selbst dar.\nDiese ist nicht mit einem link versehen. Alle Elemente links der aktuellen Seite sind mit einem Link auf die verkn\xfcpfte Seite versehen."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <kol-breadcrumb _links=\'[{"_label":"Startseite","_href":"#/"},{"_label":"Unterseite von Startseite","_href":"#/unterseite"}]\'></kol-breadcrumb>\n</div>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-breadcrumb",{_links:'[{"_label":"Startseite","_href":"#/"},{"_label":"Unterseite von Startseite","_href":"#/unterseite"}]'})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"definition-der-links"},"Definition der Links"),(0,l.kt)("p",null,"Das Attribut ",(0,l.kt)("strong",{parentName:"p"}," _links")," erwartet die \xdcbergabe eines JSON-Objekts, aus dem sich der Aufbau der anzuzeigenden Breadcrumb-Pfade ergibt. Das JSON-Objekt \xfcbergibt beliebig viele Elemente, die jeweils eine Anzahl an Eigenschaften und Werten bereitstellen."),(0,l.kt)("p",null,"Jede Eigenschaft und der zugeh\xf6rige Wert m\xfcssen in doppelten Anf\xfchrungszeichen gesetzt werden."),(0,l.kt)("p",null,"Einzelne Elemente werden in geschweiften Klammern und durch ",(0,l.kt)("strong",{parentName:"p"},"Komma")," separiert geschrieben."),(0,l.kt)("p",null,"Das gesamte JSON-Objekt muss in eckigen Klammern an das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben werden."),(0,l.kt)("b",null,"Folgende Eigenschaften stehen zur Verf\xfcgung:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"_href"))," \xfcbergibt den Link, der f\xfcr dieses Element verwendet werden soll."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"_icon"))," (optional) \xfcbergibt den Namen des Icon, wenn zus\xe4tzlich zum Text des Elements noch ein Icon angezeigt werden soll. Es stehen die ",(0,l.kt)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"Codicons"})," zur Verf\xfcgung"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"_hide-label"))," (optional). Wenn der Wert auf ",(0,l.kt)("strong",{parentName:"li"},"true")," gesetzt wird, erscheint im Link ausschlie\xdflich das Icon, ohne weiteren Text. Die Eigenschaft ",(0,l.kt)("inlineCode",{parentName:"li"},"_icon")," muss gesetzt werden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label"))," \xfcbergibt den Text, der f\xfcr dieses Element angezeigt werden soll.")),(0,l.kt)("p",null,"Beispiel f\xfcr ein JSON-Objekt, das an das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben wird:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},"[\n  { '_label': 'Startseite', '_href': '#/', '_icon': 'codicon codicon-home', '_hide-label': true },\n  { '_label': '1. Unterseite', '_href': '/unterseite_eins' },\n  { '_label': '2. Unterseite', '_href': '/unterseite_zwei' }\n]\n")),(0,l.kt)("p",null,(0,l.kt)("kol-breadcrumb",{_links:'[{"_label":"Startseite","_href":"#/","_icon":"codicon codicon-home","hide-label": "true"},{"_label":"1. Unterseite","_href":"#/1_unterseite"},{"_label":"2. Unterseite","_href":"#/2_unterseite"}]'})),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die ",(0,l.kt)("strong",{parentName:"li"},"Breadcrumb"),"-Komponente ist ein wichtiges Element f\xfcr eine effektive Suchmaschinenoptimierung Ihrer Webseite."),(0,l.kt)("li",{parentName:"ul"},"Auch f\xfcr Benutzer:innen der Webseite bietet eine Breadcrumb-Navigation zus\xe4tzliche \xdcbersicht."),(0,l.kt)("li",{parentName:"ul"},"Positionieren Sie die Breadcrumb m\xf6glichst weit oben auf Ihren Inhaltsseiten, um zu gew\xe4hrleisten, dass Suchmaschinen diese als zus\xe4tzliche Informationsquelle zur Struktur Ihrer Webseite nutzen k\xf6nnen."),(0,l.kt)("li",{parentName:"ul"},"Positionieren Sie die Breadcrumb-Komponente auf jeder Inhaltsseite Ihre Webseite. Sie gew\xe4hrleisten so, dass sich Besucher:innen jederzeit zurecht finden und die aktuelle Position erkennen k\xf6nnen."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie, die Breadcrumb-Navigation auf der Startseite zu positionieren."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie eine Breadcrumb-Navigation nur dann, wenn sie f\xfcr Benutzer:innen einen wirklichen Mehrwert bieten."),(0,l.kt)("li",{parentName:"ul"},"Auf mobilen Varianten einer Webseite ist eine Breadcrumb-Navigation m\xf6glicherweise nicht sinnvoll.")),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("p",null,"Eine Breadcrumb-Navigation ist auf einer gro\xdfen Mehrzahl der aktuellen Webseiten zu finden. Somit beschreibt der klassische Anwendungsfall den generellen Einbau dieser Komponente."),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"Achten Sie im Sinne der optimalen Barrierefreiheit darauf, das Attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"_label")," korrekt auszuzeichnen. Beachten Sie diesen Hinweis insbesondere dann, wenn Sie die Option ",(0,l.kt)("inlineCode",{parentName:"p"},"_hide-label")," verwenden und so auf einen beschreibenden Text im Link verzichten w\xfcrden."),(0,l.kt)("p",null,"Beachten Sie, dass auch das letzte Element in der Breadcrumb-Komponente per Tab-Taste angesprungen werden kann, obwohl dort kein Link hinterlegt ist. Hierdurch kann auch dieses Element von Screenreader erreicht und vorgelesen werden."),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Springt die einzelnen Elemente der Breadcrumb-Navigation an.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Enter")),(0,l.kt)("td",{parentName:"tr",align:null},"\xd6ffnet den Link des aktuellen Elements.")))),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#breadcrumb",_label:"https://www.w3.org/TR/wai-aria-practices/#breadcrumb",_target:"_blank"}))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use _label instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Setzt die semantische Beschriftung der Komponente."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_links")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_links")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the list of links combined with their labels to render."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"BreadcrumbLinkProps[]")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./icon"},"kol-icon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./link"},"kol-link"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-breadcrumb --\x3e kol-icon\n  kol-breadcrumb --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  style kol-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var s=n(71703),d=n(39351);const c={title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",tags:["Breadcrumb","Beschreibung","Spezifikation","Beispiele"]},u=void 0,m={unversionedId:"components/breadcrumb",id:"version-1.7/components/breadcrumb",title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/breadcrumb.mdx",sourceDirName:"30-components",slug:"/components/breadcrumb",permalink:"/docs/components/breadcrumb",draft:!1,tags:[{label:"Breadcrumb",permalink:"/docs/tags/breadcrumb"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"1.7",frontMatter:{title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",tags:["Breadcrumb","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Badge",permalink:"/docs/components/badge"},next:{title:"ButtonGroup",permalink:"/docs/components/button-group"}},p={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],k={toc:b},h="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(d._,{component:"breadcrumb",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(s._,{component:"breadcrumb",sample:"basic",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);