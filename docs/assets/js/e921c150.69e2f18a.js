"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4174],{65795:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(40764),i=n(50959);const l=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,i.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${n}`,g={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:g,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===d&&i.createElement("iframe",{src:p,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),i.createElement("div",null,"Angular"===d&&i.createElement(o,{url:l(c,t,n,m.angular)})),i.createElement("div",null,"React"===d&&i.createElement(o,{url:l(c,t,n,m.react)})),i.createElement("div",null,"Vue"===d&&i.createElement(o,{url:l(c,t,n,m.vue)})),i.createElement("div",null,"Web Component"===d&&i.createElement(o,{url:l(c,t,n,m.webcomponent)})))}},92219:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(67695),i=n(40764),l=n(50959),r=n(65048);function o(e){const{attribute:t,label:n,update:a,value:r}=e,[o,d]=(0,l.useState)(""),[s,c]=(0,l.useState)(""),[u,m]=(0,l.useState)(""),[p,g]=(0,l.useState)("");let b=!1,k=!1,h=!1,f=!1;t.type.includes("KoliBriAllIcon")?(b=!0,k=!0,h=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,k=!0)),(0,l.useEffect)((()=>{if(!o||s||u||p){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,s,u,p]);const N=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return l.createElement("div",null,n,b?l.createElement(i.ox,{_summary:"Links"},l.createElement("div",{className:"flex flex-wrap"},N.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",k?l.createElement(i.ox,{_summary:"Rechts"},l.createElement("div",{className:"flex flex-wrap"},N.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",h?l.createElement(i.ox,{_summary:"Oben"},l.createElement("div",{className:"flex flex-wrap"},N.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",f?l.createElement(i.ox,{_summary:"Unten"},l.createElement("div",{className:"flex flex-wrap"},N.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>g(e)}}))))):"")}function d(e){const{label:t,name:n,update:a,value:r}=e;return(0,l.useEffect)((()=>{r||a(n,"#000000")}),[]),l.createElement(i.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),l.createElement(i.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o},n)}function c(e){const{attribute:t,update:n,value:a}=e,r=(0,l.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,l.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=l.createElement(i.T5,{_title:t.description},t.name);switch(t.name){case"_color":return l.createElement(d,{name:t.name,label:c,update:n,value:a});case"_icon":return l.createElement(o,{attribute:t,label:c,update:n,value:a});default:switch(r){case"string":return l.createElement(i.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},c);case"number":return l.createElement(i.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},c);case"boolean":return l.createElement(i.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},c);default:return e.length>1?l.createElement(s,{label:c,name:t.name,types:e,update:n,value:a}):l.createElement("p",null,"Attribut: '",t.name,"'",l.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return l.createElement(l.Fragment,null,c)}var u=n(45413),m=n(77192),p=n(85630),g=n.n(p);function b(e){const{tag:t,params:n}=e;let a="";const i=(0,l.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[l,s]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(s){let e="";switch(typeof s){case"string":e=` ${l}="${s.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${s.toString()}"`;break;case"boolean":e=s?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(s)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const r=`<kol-${t}${a}>${i}</kol-${t}>`;let o;try{o=(0,m.format)(r,{plugins:[g()],printWidth:80}).replace(/;\n$/,"")}catch(d){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${r}`}return l.createElement("div",{className:"h-48 rounded-md overflow-hidden"},l.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o}))}function k(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:i.T5,accordion:i.RZ,alert:i.K5,badge:i.Er,breadcrumb:i.lo,button:i.ic,"button-group":i.uz,"button-link":i.f6,card:i.Gc,details:i.ox,form:i.m5,heading:i.HA,icon:i.Jl,image:i.Cd,"indented-text":i.CV,"input-checkbox":i.TE,"input-color":i.Np,"input-date":i.O,"input-email":i.Lj,"input-file":i.CX,"input-number":i.c2,"input-password":i.z5,"input-radio":i.sy,"input-range":i.TQ,"input-text":i.WD,kolibri:i.Vs,link:i.Nv,"link-button":i.Kc,"link-group":i.$o,logo:i.QK,modal:i.Ud,nav:i.MA,pagination:i.Q4,popover:i.hV,progress:i.WR,quote:i.VZ,select:i.r7,"skip-nav":i.P,spin:i.qq,symbol:i.is,table:i.Vp,tabs:i.UD,textarea:i.Qs,toast:i.CO,tooltip:i.Ze,version:i.u_}[e.tag];return a?l.createElement(a,t,n.map((e=>l.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):l.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:i}=e;return l.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},l.createElement("b",null,n||"default"),": ",t,l.createElement("br",null),l.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i}))}const f=["_smart-button","_icon-align"];function N(e){const[t,n]=(0,l.useState)({}),[o,d]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const s=(0,l.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){n((n=>{const a={...n[o],[e]:t};return console.log(a),{...n,[o]:a}}))}const m=Object.values(a.p).find((e=>e.name===`kol-${o}`));return l.createElement(r.Z,null,(()=>l.createElement(l.Fragment,null,l.createElement(i.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),l.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},l.createElement(i.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},l.createElement("div",{className:"p-2"},l.createElement(k,{tag:o,params:s})),l.createElement("div",{className:"lg:col-span-2"},l.createElement(b,{params:s,tag:o}))),l.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},l.createElement(i.HA,{_level:3,_label:"Konfigurator"}),l.createElement("div",null,l.createElement(i.HA,{_level:4,_label:"Properties"}),l.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},m&&m.attributes.map((e=>l.createElement(l.Fragment,null,!f.includes(e.name)&&l.createElement(c,{key:e.name,attribute:e,update:u,value:s[e.name]})))),m&&0===m.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),l.createElement(i.HA,{_level:4,_label:"Slots"}),l.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},m&&m.slots.map((e=>l.createElement(h,{key:e.name,description:e.description,name:e.name,update:u,value:s["slot-"+e.name]}))),m&&0===m.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},81560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var a=n(15882),i=(n(50959),n(17942));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Label im Badge",id:"label-im-badge",level:3},{value:"Hintergrundfarbe des Badge",id:"hintergrundfarbe-des-badge",level:3},{value:"Icon",id:"icon",level:3},{value:"Nur Icon anzeigen",id:"nur-icon-anzeigen",level:3},{value:"Schriftschnitt",id:"schriftschnitt",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:2},{value:"Badge als Aufz\xe4hlungszeichen verwenden",id:"badge-als-aufz\xe4hlungszeichen-verwenden",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(r,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mit ",(0,i.kt)("strong",{parentName:"p"},"Badges")," k\xf6nnen Sie bestimmte Informationen auf Ihrer Webseite optisch hervorheben.\nKoliBri bietet neben der Angabe der Hintergrundfarbe und automatischer Berechnung der Textfarbe auch die M\xf6glichkeit, einem Badge ein Icon und/oder einen anderen Schriftschnitt mitzugeben."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<kol-badge _label="Beispieltext" _color="#b7e4b4" _icon="home" _icon-align="right"></kol-badge>\n<kol-badge _label="Beispieltext" _color="#0c8703" _icon="home" _icon-align="right"></kol-badge>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-badge",{_label:"Beispieltext",_color:"#b7e4b4",_icon:"home","_icon-align":"right"}),"\n",(0,i.kt)("kol-badge",{_label:"Beispieltext",_color:"#0c8703",_icon:"home","_icon-align":"right"})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"label-im-badge"},"Label im Badge"),(0,i.kt)("p",null,"Der Text, der im Badge angezeigt werden soll, wird \xfcber das Attribut ",(0,i.kt)("strong",{parentName:"p"}," _label")," \xfcbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten.\nDas Element ",(0,i.kt)("inlineCode",{parentName:"p"},"<kol-badge></kol-badge>")," beinhaltet selbst keinen Text."),(0,i.kt)("h3",{id:"hintergrundfarbe-des-badge"},"Hintergrundfarbe des Badge"),(0,i.kt)("p",null,"Ein Badge, ohne weitere Angaben zur Hintergrundfarbe, wird standardm\xe4\xdfig mit hellgrauer Schriftfarbe auf schwarzem Hintergrund angezeigt. \xdcber das Attribut ",(0,i.kt)("strong",{parentName:"p"}," _color")," k\xf6nnen andere Hintergrundfarben gew\xe4hlt werden."),(0,i.kt)("p",null,"Die Angabe der gew\xfcnschten Hintergrundfarbe erfolgt in hexadezimaler Schreibweise, z.B. ",(0,i.kt)("strong",{parentName:"p"},' _color="#000000"')," f\xfcr schwarz."),(0,i.kt)("p",null,"Die Textfarbe wird automatisch als Kontrastfarbe zur gew\xe4hlten Hintergrundfarbe errechnet."),(0,i.kt)("h3",{id:"icon"},"Icon"),(0,i.kt)("p",null,"Ein Icon (",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_icon")),") kann entweder als String angegeben werden, oder als Objekt.\nAls String \xfcbergeben Sie die Iconklasse (z.B.: ",(0,i.kt)("inlineCode",{parentName:"p"},'_icon="codicon codicon-home'),"), das Icon wird links vom Text angezeigt.\nDas Objekt ist vom Typ ",(0,i.kt)("inlineCode",{parentName:"p"},"KoliBriAllIcon"),", kann also einen oder mehrere der Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bottom")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"left")," besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ ",(0,i.kt)("inlineCode",{parentName:"p"},"KoliBriCustomIcon"),", welches aus ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," (String, siehe oben) und ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," (optional, Styleobjekt) besteht."),(0,i.kt)("p",null,(0,i.kt)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"\xdcbersicht Codicons"})),(0,i.kt)("h3",{id:"nur-icon-anzeigen"},"Nur Icon anzeigen"),(0,i.kt)("p",null,"Mit dem Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_icon-only"))," kann festgelegt werden, dass nur das mit dem Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_icon"))," gew\xe4hlte Icon angezeigt wird. Der Wert im Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_label"))," wird in diesem Fall ignoriert."),(0,i.kt)("h3",{id:"schriftschnitt"},"Schriftschnitt"),(0,i.kt)("p",null,"Der Schriftschnitt wird vom Host \xfcbernommen, kann also via CSS von au\xdfen gesetzt werden."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Badges, um wichtige Informationen in unmittelbarer N\xe4he des jeweiligen Elements anzuzeigen."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Badges, um auf ge\xe4nderte Werte oder einen ge\xe4nderten Status aufmerksam zu machen."),(0,i.kt)("li",{parentName:"ul"},"Ein Badge weist den Benutzer darauf hin, dass etwas neu erzeugt oder aktualisiert wurde, z. B. ein \u201eungelesener Bericht\u201c oder eine Aktivit\xe4tsbenachrichtigung."),(0,i.kt)("li",{parentName:"ul"},"Behalten Sie in gleichen Anwendungsf\xe4llen immer die gleiche Position des Badges bei, um ein einheitliches Erscheinungsbild zu gew\xe4hrleisten.")),(0,i.kt)("h2",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("h3",{id:"badge-als-aufz\xe4hlungszeichen-verwenden"},"Badge als Aufz\xe4hlungszeichen verwenden"),(0,i.kt)("ul",{className:"m-0 p-0"},(0,i.kt)("li",{className:"flex gap-2"},(0,i.kt)("kol-badge",{_label:"1",_color:"#0747a6"}),(0,i.kt)("kol-heading",{_level:"2",_label:"Auswahl Anliegen"})),(0,i.kt)("li",{className:"flex gap-2"},(0,i.kt)("kol-badge",{_label:"2",_color:"#0747a6"}),(0,i.kt)("kol-heading",{_level:"2",_label:"Auswahl Amtsstelle"})),(0,i.kt)("li",{className:"flex gap-2"},(0,i.kt)("kol-badge",{_label:"3",_color:"#0747a6"}),(0,i.kt)("kol-heading",{_level:"2",_label:"Terminauswahl"}))),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"F\xfcr die Einhaltung der Regeln zur Barrierefreiheit, ist ein optimaler Kontrast zwischen der Hintergrundfarbe und Textfarbe des Badge zwingend erforderlich. KoliBri bietet daher eine automatische Berechnung der Textfarbe aus der gew\xe4hlten Hintergrundfarbe heraus. M\xf6glich sind die Textfarben ",(0,i.kt)("strong",{parentName:"p"},"schwarz")," und ",(0,i.kt)("strong",{parentName:"p"},"wei\xdf"),", die in Abh\xe4ngigkeit zur Hintergrundfarbe ausgegeben werden."),(0,i.kt)("p",null,"Die zus\xe4tzliche Ausgabe eines ",(0,i.kt)("strong",{parentName:"p"},"Icon")," gew\xe4hrleistet, dass der Nutzer auch hier\xfcber die Art der Information erfassen kann."),(0,i.kt)("p",null,(0,i.kt)("kol-alert",{_type:"info"},"Eine explizite Angabe der Textfarbe ist nicht m\xf6glich.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_color")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_color")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt die Hintergrundfarbe."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ backgroundColor: string; color: string; }")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ backgroundColor: string; foregroundColor: Stringified<CharacteristicColors>; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'#000'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt die Iconklasse (z.B.: ",(0,i.kt)("inlineCode",{parentName:"td"},'_icon="codicon codicon-home'),")."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"KoliBriHorizontalIcon & KoliBriVerticalIcon")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_smart-button")),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht einen Schalter ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (nur Icon-Only)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ _label: string; } & { _ariaControls?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaLabel?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _icon?: Stringified<KoliBriIconProp>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _iconAlign?: Align")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _iconOnly?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _role?: AlternativButtonLinkRole")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tabIndex?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tooltipAlign?: Align")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaCurrent?: AriaCurrent")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaExpanded?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaSelected?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _disabled?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _accessKey?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _id?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _on?: KoliBriButtonCallbacks<unknown>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _type?: KoliBriButtonType")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _value?: unknown; _variant?: KoliBriButtonVariant")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _customClass?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./version"},"kol-version"))),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-span-wc"),(0,i.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-span-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-tooltip --\x3e kol-span-wc\n  kol-version --\x3e kol-badge\n  style kol-badge fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}o.isMDXComponent=!0;var d=n(65795),s=n(92219);const c={title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",tags:["Badge","Beschreibung","Spezifikation","Beispiele"]},u=void 0,m={unversionedId:"components/badge",id:"components/badge",title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",source:"@site/docs/30-components/badge.mdx",sourceDirName:"30-components",slug:"/components/badge",permalink:"/docs/components/badge",draft:!1,tags:[{label:"Badge",permalink:"/docs/tags/badge"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Badge",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Badge-Komponente.",tags:["Badge","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Alert",permalink:"/docs/components/alert"},next:{title:"Breadcrumb",permalink:"/docs/components/breadcrumb"}},p={},g=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Einfache Badges",id:"einfache-badges",level:3},{value:"Badges mit Schalter",id:"badges-mit-schalter",level:3}],b={toc:g},k="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,i.kt)(s._,{component:"badge",mdxType:"LiveEditorCompact"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("h3",{id:"einfache-badges"},"Einfache Badges"),(0,i.kt)(d._,{component:"badge",sample:"basic",mdxType:"Configurator"}),(0,i.kt)("h3",{id:"badges-mit-schalter"},"Badges mit Schalter"),(0,i.kt)(d._,{component:"badge",sample:"button",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);