"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[65917],{71703:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(72526),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${n}?hideMenus`,b={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:p,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:i(c,t,n,m.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:i(c,t,n,m.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:i(c,t,n,m.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:i(c,t,n,m.webcomponent)})))}},39351:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(99439),l=n(72526),i=n(50959),r=n(2561);function o(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_label:"",_on:{onChange:(e,t)=>a(n,t)},_value:r},i.createElement("span",{slot:"expert"},t))}function d(e){const{attribute:t,label:n,update:a}=e,[r,o]=(0,i.useState)(""),[d,s]=(0,i.useState)(""),[c,u]=(0,i.useState)(""),[m,p]=(0,i.useState)("");let b=!1,g=!1,k=!1,h=!1;t.type.includes("KoliBriAllIcon")?(b=!0,g=!0,k=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(k=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,g=!0)),(0,i.useEffect)((()=>{if(!r||d||c||m){const e={};r&&(e.left=`codicon codicon-${r}`),d&&(e.right=`codicon codicon-${d}`),c&&(e.top=`codicon codicon-${c}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${r}`)}),[r,d,c,m]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,b?i.createElement(l.ox,{_label:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",g?i.createElement(l.ox,{_label:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>s(e)}}))))):"",k?i.createElement(l.ox,{_label:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}}))))):"",h?i.createElement(l.ox,{_label:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),i.createElement(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o?[o]:void 0},i.createElement("span",{slot:"expert"},n))}function c(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=i.createElement(l.T5,{_label:t.description},t.name);switch(t.name){case"_color":return i.createElement(o,{name:t.name,label:c,update:n,value:a});case"_icon":return i.createElement(d,{attribute:t,label:c,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},i.createElement("span",{slot:"expert"},c));case"number":return i.createElement(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},i.createElement("span",{slot:"expert"},c));case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:!0===a,_label:"",_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},i.createElement("span",{slot:"expert"},c));default:return e.length>1?i.createElement(s,{label:c,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,c)}var u=n(22115),m=n(77192),p=n(85630),b=n.n(p);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,u]of o)if(u){let e="";switch(typeof u){case"string":e=` ${i}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${u.toString()}"`;break;case"boolean":e=u?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${r}</kol-${t}>`;let s;try{s=(0,m.format)(d,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(c){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function k(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.KolPopover,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.KolToast,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==_[n]?.[t.name]&&(e[n][t.name]=_[n][t.name])})),t.slots.forEach((t=>{const a=`slot-${t.name||"default"}`,l=_[n]?.[a];l&&(e[n][a]=l)}))})),e}()),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const s=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const m=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(k,{tag:o,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(g,{params:s,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},m&&m.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&i.createElement(c,{key:e.name,attribute:e,update:u,value:s[e.name]})))),m&&0===m.attributes.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},m&&m.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name||"default",update:u,value:s["slot-"+(e.name||"default")]}))),m&&0===m.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},11969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>b});var a=n(97605),l=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Label im Badge",id:"label-im-badge",level:3},{value:"Hintergrundfarbe des Badge",id:"hintergrundfarbe-des-badge",level:3},{value:"Icon",id:"icon",level:3},{value:"Nur Icon anzeigen",id:"nur-icon-anzeigen",level:3},{value:"Schriftschnitt",id:"schriftschnitt",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:2},{value:"Badge als Aufz\xe4hlungszeichen verwenden",id:"badge-als-aufz\xe4hlungszeichen-verwenden",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mit ",(0,l.kt)("strong",{parentName:"p"},"Badges")," k\xf6nnen Sie bestimmte Informationen auf Ihrer Webseite optisch hervorheben.\nKoliBri bietet neben der Angabe der Hintergrundfarbe und automatischer Berechnung der Textfarbe auch die M\xf6glichkeit, einem Badge ein Icon und/oder einen anderen Schriftschnitt mitzugeben."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-badge _label="Beispieltext" _color="#b7e4b4" _icons="codicon codicon-home"></kol-badge>\n<kol-badge _label="Beispieltext" _color="#0c8703" _icons="codicon codicon-home"></kol-badge>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-badge",{_label:"Beispieltext",_color:"#b7e4b4",_icons:"codicon codicon-home"}),"\n",(0,l.kt)("kol-badge",{_label:"Beispieltext",_color:"#0c8703",_icons:"codicon codicon-home"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"label-im-badge"},"Label im Badge"),(0,l.kt)("p",null,"Der Text, der im Badge angezeigt werden soll, wird \xfcber das Attribut ",(0,l.kt)("strong",{parentName:"p"}," ","_","label")," \xfcbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten.\nDas Element ",(0,l.kt)("inlineCode",{parentName:"p"},"<kol-badge></kol-badge>")," beinhaltet selbst keinen Text."),(0,l.kt)("h3",{id:"hintergrundfarbe-des-badge"},"Hintergrundfarbe des Badge"),(0,l.kt)("p",null,"Ein Badge, ohne weitere Angaben zur Hintergrundfarbe, wird standardm\xe4\xdfig mit hellgrauer Schriftfarbe auf schwarzem Hintergrund angezeigt. \xdcber das Attribut ",(0,l.kt)("strong",{parentName:"p"}," ","_","color")," k\xf6nnen andere Hintergrundfarben gew\xe4hlt werden."),(0,l.kt)("p",null,"Die Angabe der gew\xfcnschten Hintergrundfarbe erfolgt in hexadezimaler Schreibweise, z.B. ",(0,l.kt)("strong",{parentName:"p"}," ","_",'color="#000000"')," f\xfcr schwarz."),(0,l.kt)("p",null,"Die Textfarbe wird automatisch als Kontrastfarbe zur gew\xe4hlten Hintergrundfarbe errechnet."),(0,l.kt)("h3",{id:"icon"},"Icon"),(0,l.kt)("p",null,"Ein Icon (",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_icon")),") kann entweder als String angegeben werden, oder als Objekt.\nAls String \xfcbergeben Sie die Iconklasse (z.B.: ",(0,l.kt)("inlineCode",{parentName:"p"},'_icons="codicon codicon-home'),"), das Icon wird links vom Text angezeigt.\nDas Objekt ist vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"KoliBriAllIcon"),", kann also einen oder mehrere der Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"left")," besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"KoliBriCustomIcon"),", welches aus ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")," (String, siehe oben) und ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," (optional, Styleobjekt) besteht."),(0,l.kt)("p",null,(0,l.kt)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"\xdcbersicht Codicons"})),(0,l.kt)("h3",{id:"nur-icon-anzeigen"},"Nur Icon anzeigen"),(0,l.kt)("p",null,"Mit dem Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_hide-label"))," kann festgelegt werden, dass nur das mit dem Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_icon"))," gew\xe4hlte Icon angezeigt wird. Der Wert im Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label"))," wird in diesem Fall ignoriert."),(0,l.kt)("h3",{id:"schriftschnitt"},"Schriftschnitt"),(0,l.kt)("p",null,"Der Schriftschnitt wird vom Host \xfcbernommen, kann also via CSS von au\xdfen gesetzt werden."),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie Badges, um wichtige Informationen in unmittelbarer N\xe4he des jeweiligen Elements anzuzeigen."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie Badges, um auf ge\xe4nderte Werte oder einen ge\xe4nderten Status aufmerksam zu machen."),(0,l.kt)("li",{parentName:"ul"},"Ein Badge weist den Benutzer darauf hin, dass etwas neu erzeugt oder aktualisiert wurde, z. B. ein \u201eungelesener Bericht\u201c oder eine Aktivit\xe4tsbenachrichtigung."),(0,l.kt)("li",{parentName:"ul"},"Behalten Sie in gleichen Anwendungsf\xe4llen immer die gleiche Position des Badges bei, um ein einheitliches Erscheinungsbild zu gew\xe4hrleisten.")),(0,l.kt)("h2",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("h3",{id:"badge-als-aufz\xe4hlungszeichen-verwenden"},"Badge als Aufz\xe4hlungszeichen verwenden"),(0,l.kt)("ul",{className:"m-0 p-0"},(0,l.kt)("li",{className:"flex gap-2"},(0,l.kt)("kol-badge",{_label:"1",_color:"#0747a6"}),(0,l.kt)("kol-heading",{_level:"2",_label:"Auswahl Anliegen"})),(0,l.kt)("li",{className:"flex gap-2"},(0,l.kt)("kol-badge",{_label:"2",_color:"#0747a6"}),(0,l.kt)("kol-heading",{_level:"2",_label:"Auswahl Amtsstelle"})),(0,l.kt)("li",{className:"flex gap-2"},(0,l.kt)("kol-badge",{_label:"3",_color:"#0747a6"}),(0,l.kt)("kol-heading",{_level:"2",_label:"Terminauswahl"}))),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"F\xfcr die Einhaltung der Regeln zur Barrierefreiheit, ist ein optimaler Kontrast zwischen der Hintergrundfarbe und Textfarbe des Badge zwingend erforderlich. KoliBri bietet daher eine automatische Berechnung der Textfarbe aus der gew\xe4hlten Hintergrundfarbe heraus. M\xf6glich sind die Textfarben ",(0,l.kt)("strong",{parentName:"p"},"schwarz")," und ",(0,l.kt)("strong",{parentName:"p"},"wei\xdf"),", die in Abh\xe4ngigkeit zur Hintergrundfarbe ausgegeben werden."),(0,l.kt)("p",null,"Die zus\xe4tzliche Ausgabe eines ",(0,l.kt)("strong",{parentName:"p"},"Icon")," gew\xe4hrleistet, dass der Nutzer auch hier\xfcber die Art der Information erfassen kann."),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_type:"info"},"Eine explizite Angabe der Textfarbe ist nicht m\xf6glich.")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_color")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the backgroundColor and foregroundColor."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ backgroundColor: string; color: string; }")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ backgroundColor: string; foregroundColor: Stringified<CharacteristicColors>; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'#000'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Will be removed in the next major version.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: \u26a0\ufe0f We do not support the ",(0,l.kt)("inlineCode",{parentName:"td"},"_hide-label")," property for the ",(0,l.kt)("inlineCode",{parentName:"td"},"kol-badge")," element, since it would not be accessible without visible labeling. A separate tooltip is not planed, because a badge is not an interactive element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the icon classnames (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},'_icons="fa-solid fa-user"'),")."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KoliBriHorizontalIcon & KoliBriVerticalIcon")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use ","_","hide-label",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Hides the label and shows the description in a Tooltip instead."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_smart-button")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to add a button with an arbitrary action within the element (","_","hide-label only)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ _label: LabelWithExpertSlotPropType; } & { _tabIndex?: number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _value?: Stringified<StencilUnknown>; _accessKey?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _iconAlign?: AlignPropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _iconOnly?: boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _role?: AlternativeButtonLinkRolePropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _ariaControls?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _ariaCurrent?: AriaCurrentPropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _ariaExpanded?: boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _ariaLabel?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _ariaSelected?: boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _on?: ButtonCallbacksPropType<StencilUnknown>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _type?: ButtonTypePropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _variant?: ButtonVariantPropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _customClass?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _disabled?: boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _hideLabel?: boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _icon?: IconPropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _id?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _name?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _syncValueBySelector?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _tooltipAlign?: AlignPropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./version"},"kol-version"))),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,l.kt)("li",{parentName:"ul"},"kol-span-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-badge --\x3e kol-button-wc\n  kol-badge --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-version --\x3e kol-badge\n  style kol-badge fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var d=n(71703),s=n(39351);const c={title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",tags:["Badge","Beschreibung","Spezifikation","Beispiele"]},u=void 0,m={unversionedId:"components/badge",id:"version-1.6/components/badge",title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",source:"@site/versioned_docs/version-1.6/30-components/badge.mdx",sourceDirName:"30-components",slug:"/components/badge",permalink:"/en/docs/1.6/components/badge",draft:!1,tags:[{label:"Badge",permalink:"/en/docs/1.6/tags/badge"},{label:"Beschreibung",permalink:"/en/docs/1.6/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.6/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.6/tags/beispiele"}],version:"1.6",frontMatter:{title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",tags:["Badge","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Avatar",permalink:"/en/docs/1.6/components/avatar"},next:{title:"Breadcrumb",permalink:"/en/docs/1.6/components/breadcrumb"}},p={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Einfache Badges",id:"einfache-badges",level:3},{value:"Badges mit Schalter",id:"badges-mit-schalter",level:3}],g={toc:b},k="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(s._,{component:"badge",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)("h3",{id:"einfache-badges"},"Einfache Badges"),(0,l.kt)(d._,{component:"badge",sample:"basic",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"badges-mit-schalter"},"Badges mit Schalter"),(0,l.kt)(d._,{component:"badge",sample:"button",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);