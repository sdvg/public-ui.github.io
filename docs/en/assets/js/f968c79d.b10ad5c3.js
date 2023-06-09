"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1621],{65795:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(40764),i=n(50959);const l=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[o,m]=(0,i.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,s={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},k=`/sample-react/#/${t}/${n}`,c={onSelect:(e,t)=>{switch(t){case 1:m((()=>"Angular"));break;case 2:m((()=>"React"));break;case 3:m((()=>"Vue"));break;case 4:m((()=>"Web Component"));break;default:m((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:c,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===o&&i.createElement("iframe",{src:k,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),i.createElement("div",null,"Angular"===o&&i.createElement(d,{url:l(p,t,n,s.angular)})),i.createElement("div",null,"React"===o&&i.createElement(d,{url:l(p,t,n,s.react)})),i.createElement("div",null,"Vue"===o&&i.createElement(d,{url:l(p,t,n,s.vue)})),i.createElement("div",null,"Web Component"===o&&i.createElement(d,{url:l(p,t,n,s.webcomponent)})))}},92219:(e,t,n)=>{n.d(t,{_:()=>f});var a=n(67695),i=n(40764),l=n(50959),r=n(65048);function d(e){const{attribute:t,label:n,update:a,value:r}=e,[d,o]=(0,l.useState)(""),[m,p]=(0,l.useState)(""),[u,s]=(0,l.useState)(""),[k,c]=(0,l.useState)("");let N=!1,b=!1,g=!1,h=!1;t.type.includes("KoliBriAllIcon")?(N=!0,b=!0,g=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(g=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(N=!0,b=!0)),(0,l.useEffect)((()=>{if(!d||m||u||k){const e={};d&&(e.left=`codicon codicon-${d}`),m&&(e.right=`codicon codicon-${m}`),u&&(e.top=`codicon codicon-${u}`),k&&(e.bottom=`codicon codicon-${k}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${d}`)}),[d,m,u,k]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return l.createElement("div",null,n,N?l.createElement(i.ox,{_summary:"Links"},l.createElement("div",{className:"flex flex-wrap"},f.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>o(e)}}))))):"",b?l.createElement(i.ox,{_summary:"Rechts"},l.createElement("div",{className:"flex flex-wrap"},f.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>p(e)}}))))):"",g?l.createElement(i.ox,{_summary:"Oben"},l.createElement("div",{className:"flex flex-wrap"},f.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",h?l.createElement(i.ox,{_summary:"Unten"},l.createElement("div",{className:"flex flex-wrap"},f.map((e=>l.createElement(i.ic,{key:e,_icon:`codicon codicon-${e}`,_iconOnly:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"")}function o(e){const{label:t,name:n,update:a,value:r}=e;return(0,l.useEffect)((()=>{r||a(n,"#000000")}),[]),l.createElement(i.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function m(e){const{name:t,label:n,types:a,update:r,value:d}=e,o=[];function m(e){return{label:e,value:e}}return a.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...a.filter((e=>"undefined"!==e)).map(m))):o.push(...a.filter((e=>"undefined"!==e)).map(m)),l.createElement(i.r7,{className:"my-2",_list:JSON.stringify(o),_on:{onChange:(e,n)=>r(t,n[0])},_value:d},n)}function p(e){const{attribute:t,update:n,value:a}=e,r=(0,l.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),p=(0,l.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),p=l.createElement(i.T5,{_title:t.description},t.name);switch(t.name){case"_color":return l.createElement(o,{name:t.name,label:p,update:n,value:a});case"_icon":return l.createElement(d,{attribute:t,label:p,update:n,value:a});default:switch(r){case"string":return l.createElement(i.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},p);case"number":return l.createElement(i.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},p);case"boolean":return l.createElement(i.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},p);default:return e.length>1?l.createElement(m,{label:p,name:t.name,types:e,update:n,value:a}):l.createElement("p",null,"Attribut: '",t.name,"'",l.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return l.createElement(l.Fragment,null,p)}var u=n(45413),s=n(77192),k=n(85630),c=n.n(k);function N(e){const{tag:t,params:n}=e;let a="";const i=(0,l.useMemo)((()=>{let e="";return Object.entries(n).filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]);for(const[l,m]of Object.entries(n).filter((e=>!e[0].startsWith("slot-"))))if(m){let e="";switch(typeof m){case"string":e=` ${l}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${m.toString()}"`;break;case"boolean":e=m?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const r=`<kol-${t}${a}>${i}</kol-${t}>`;let d;try{d=(0,s.format)(r,{plugins:[c()],printWidth:80}).replace(/;\n$/,"")}catch(o){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${r}`}return l.createElement("div",{className:"h-48 rounded-md overflow-hidden"},l.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:i.T5,accordion:i.RZ,alert:i.K5,badge:i.Er,breadcrumb:i.lo,button:i.ic,"button-group":i.uz,"button-link":i.f6,card:i.Gc,details:i.ox,form:i.m5,heading:i.HA,icon:i.Jl,image:i.Cd,"indented-text":i.CV,"input-checkbox":i.TE,"input-color":i.Np,"input-date":i.O,"input-email":i.Lj,"input-file":i.CX,"input-number":i.c2,"input-password":i.z5,"input-radio":i.sy,"input-range":i.TQ,"input-text":i.WD,kolibri:i.Vs,link:i.Nv,"link-button":i.Kc,"link-group":i.$o,logo:i.QK,modal:i.Ud,nav:i.MA,pagination:i.Q4,popover:i.hV,progress:i.WR,quote:i.VZ,select:i.r7,"skip-nav":i.P,spin:i.qq,symbol:i.is,table:i.Vp,tabs:i.UD,textarea:i.Qs,toast:i.CO,tooltip:i.Ze,version:i.u_}[e.tag];return a?l.createElement(a,t,n.map((e=>l.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):l.createElement("div",null,"Tag not implemented")}function g(e){const{description:t,name:n,update:a,value:i}=e;return l.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},l.createElement("b",null,n||"default"),": ",t,l.createElement("br",null),l.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i}))}const h=["_smart-button","_icon-align"];function f(e){const[t,n]=(0,l.useState)({}),[d,o]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!t[d]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!t[d]?._heading&&u("_heading","Heading-Text")}),[d]);const m=(0,l.useMemo)((()=>t[d]||{}),[t,d]);function u(e,t){n((n=>{const a={...n[d],[e]:t};return console.log(a),{...n,[d]:a}}))}const s=Object.values(a.p).find((e=>e.name===`kol-${d}`));return l.createElement(r.Z,null,(()=>l.createElement(l.Fragment,null,l.createElement(i.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),l.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},l.createElement(i.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},l.createElement("div",{className:"p-2"},l.createElement(b,{tag:d,params:m})),l.createElement("div",{className:"lg:col-span-2"},l.createElement(N,{params:m,tag:d}))),l.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},l.createElement(i.HA,{_level:3,_label:"Konfigurator"}),l.createElement("div",null,l.createElement(i.HA,{_level:4,_label:"Properties"}),l.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},s&&s.attributes.map((e=>l.createElement(l.Fragment,null,!h.includes(e.name)&&l.createElement(p,{key:e.name,attribute:e,update:u,value:m[e.name]})))),s&&0===s.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),l.createElement(i.HA,{_level:4,_label:"Slots"}),l.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},s&&s.slots.map((e=>l.createElement(g,{key:e.name,description:e.description,name:e.name,update:u,value:m["slot-"+e.name]}))),s&&0===s.slots.length&&l.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},84459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var a=n(15882),i=(n(50959),n(17942));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(r,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Der Input-Typ ",(0,i.kt)("strong",{parentName:"p"},"Date")," erzeugt ein Eingabefeld f\xfcr Datumswerte. Diese k\xf6nnen konkrete Daten sein, aber auch Wochen, Monate oder Zeitangaben."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<kol-input-date _id="mein_datum" _name="mein_datum" _type="date">Erstellungsdatum</kol-input-date>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-input-date",{_id:"mein_datum",_name:"mein_datum",_type:"date"},"Erstellungsdatum")),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"InputDate"),"-Komponente kann f\xfcr die Erfassung von Daten verwendet werden. Es verwendet intern die InputNumber-Komponente."),(0,i.kt)("p",null,(0,i.kt)("kol-alert",{_type:"info"},"Beachten Sie, dass im ",(0,i.kt)("strong",{parentName:"p"},"Firefox")," nicht alle ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_types"))," der ",(0,i.kt)("strong",{parentName:"p"},"InputDate"),"-Komponente funktional sind. Es werden bei den Typen ",(0,i.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"week")," keine Auswahldialoge angezeigt.")),(0,i.kt)("p",null,"Die Komponente zeichnet sich dadurch aus, dass sie zahlreiche Ziffern-basierte Eingabemuster unterst\xfctzt. Hierbei ist es wichtig zu beachten, dass sich das Verhalten bei der Eingabe von Browser zu Browser und Ger\xe4te zu Ger\xe4t unterscheiden kann. Beispielsweise ist es m\xf6glich beim Datum, 01.01.999999 einzugeben, auch wenn max=2022-02-02 ist. Der Feldwert ist aber trotzdem 2022-02-02."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Achten sie darauf ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Die Icons in der Komponente sind per Tab-Taste nicht erreichbar. Die Auswahlhilfen der Komponente werden \xfcber die ",(0,i.kt)("strong",{parentName:"p"},"Leertaste")," ge\xf6ffnet. So erhalten Sie beispielsweise beim Typ ",(0,i.kt)("strong",{parentName:"p"},"date")," ein Kalendermodul, \xfcber das per Maus oder \xfcber die Tastatur das gew\xfcnschte Datum ausgew\xe4hlt werden kann. Die manuelle Eingabe der Werte ist alternativ m\xf6glich."),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("p",null,"Das Eingabefeld f\xfcr Zeitangaben gibt es in unterschiedlichen Auspr\xe4gungen (Datum, Uhrzeit u.a). Mit der ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab"),"-Taste wird der Fokus auf das Eingabefeld gesetzt. Anschlie\xdfend kann mittels der ",(0,i.kt)("inlineCode",{parentName:"p"},"Leer"),"-Taste das ger\xe4tespezifische Auswahldialog ge\xf6ffent werden."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hinweis: Wir haben in unseren Tests festgestellt, dass es je nach Browser-Version manchmal m\xf6glich ist, das Kalender-Icon anzufokusieren und mal nicht. Ohne das sich die Implementierung der Komponente ge\xe4ndert hat. Warum das so ist ist uns noch nicht bekannt. Nichtsdestotrotz ist das \xd6ffnen des Auswahldialogs immer mittels der ",(0,i.kt)("inlineCode",{parentName:"p"},"Leer"),"-Taste m\xf6glich.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Fokussiert das Eingabefeld. Nach erhalt des Fokus wechselt die ",(0,i.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste durch die Eingabebereiche. Danach erst wechselt die ",(0,i.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste zum n\xe4chsten Eingabefeld.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Leer")),(0,i.kt)("td",{parentName:"tr",align:null},"Wenn das Eingabefeld fokussiert ist, kann im Browser mit der ",(0,i.kt)("inlineCode",{parentName:"td"},"Leer"),"-Taste ein Auswahldialog aufgerufen bzw. geschlossen werden. Die Navigation und Auswahl erfolgt hier mit Hilfe der ",(0,i.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste, der ",(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten und der Best\xe4tigung mittes ",(0,i.kt)("inlineCode",{parentName:"td"},"Enter"),"-Taste.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil-Tasten (links / rechts)")),(0,i.kt)("td",{parentName:"tr",align:null},"Wenn das Eingabefeld fokussiert ist, kann mit den ",(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten zwischen den Eingabebereichen gewechselt werden.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil-Tasten (oben / unten)")),(0,i.kt)("td",{parentName:"tr",align:null},"Wenn ein Eingabebereich aktiviert ist, k\xf6nnen mit den ",(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten oben und unten die Werte ver\xe4ndert werden.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Esc")),(0,i.kt)("td",{parentName:"tr",align:null},"Ist ein Auswahldialog verf\xfcgbar, kann dieser alternativ zur ",(0,i.kt)("inlineCode",{parentName:"td"},"Leer"),"-Taste oder auch mit der ",(0,i.kt)("inlineCode",{parentName:"td"},"Esc"),"-Taste geschlossen werden.")))),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html"},"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/"},"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://a11ysupport.io/tech/html/input(type-date)_element"},"https://a11ysupport.io/tech/html/input(type-date)_element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"},"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das interaktive Element der Komponente ausl\xf6sen oder fokussieren kann."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_alert")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_alert")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_autoComplete")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_auto-complete")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld autovervollst\xe4ndigt werden kann."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"on"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Deaktiviert das interaktive Element in der Komponente und erlaubt keine Interaktion mehr damit."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_error")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_error")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hint")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hint")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Hinweistext an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt die Iconklasse (z.B.: ",(0,i.kt)("inlineCode",{parentName:"td"},'_icon="codicon codicon-home'),")."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ right?: IconOrIconClass")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; left?: IconOrIconClass")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die interne ID des prim\xe4ren Elements in der Komponente an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_list")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_list")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Vorschlagszahlen an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string[]")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_max")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_max")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den gr\xf6\xdftm\xf6glichen Eingabewert an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Date")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-W${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_min")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_min")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den kleinstm\xf6glichen Eingabewert an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Date")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-W${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_name")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den technischen Namen des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_on")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_readOnly")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_read-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt das Eingabefeld in den schreibgesch\xfctzten Modus."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_required")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_required")),(0,i.kt)("td",{parentName:"tr",align:null},"Macht das Eingabeelement zu einem Pflichtfeld."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht eine Schaltfl\xe4che ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (ohne label)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ _label: string; } & { _ariaControls?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaLabel?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _icon?: Stringified<KoliBriIconProp>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _iconAlign?: Align")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _iconOnly?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _role?: AlternativButtonLinkRole")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tabIndex?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tooltipAlign?: Align")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaCurrent?: AriaCurrent")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaExpanded?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaSelected?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _disabled?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _accessKey?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _id?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _on?: KoliBriButtonCallbacks<unknown>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _type?: KoliBriButtonType")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _value?: unknown; _variant?: KoliBriButtonVariant")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _customClass?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_step")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_step")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Schrittweite der Wertver\xe4nderung an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index das prim\xe4re Element in der Komponente hat. (",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_touched")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_touched")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xfchrt wurde."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt den Typ der Komponente oder des interaktiven Elements in der Komponente an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"date"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"datetime-local"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"month"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"time"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"week"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'date'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_value")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_value")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Wert des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Date")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-W${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"slots"},"Slots"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Slot"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Die Beschriftung des Eingabefeldes.")))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-input")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-input-date --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-input-date fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}d.isMDXComponent=!0;var o=n(65795),m=n(92219);const p={title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},u=void 0,s={unversionedId:"components/input-date",id:"components/input-date",title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",source:"@site/docs/30-components/input-date.mdx",sourceDirName:"30-components",slug:"/components/input-date",permalink:"/en/docs/components/input-date",draft:!1,tags:[{label:"InputDate",permalink:"/en/docs/tags/input-date"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputColor",permalink:"/en/docs/components/input-color"},next:{title:"InputEmail",permalink:"/en/docs/components/input-email"}},k={},c=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],N={toc:c},b="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,i.kt)(m._,{component:"input-date",mdxType:"LiveEditorCompact"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(o._,{component:"input-date",sample:"basic",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);