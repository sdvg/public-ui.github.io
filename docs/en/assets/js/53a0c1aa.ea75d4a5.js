"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[51994],{9091:(e,t,a)=>{a.d(t,{_:()=>s});var n=a(94047),l=a(50959);const r=function(e,t,a,n,l){return void 0===l&&(l="editor"),`${e}&module=${n}&initialpath=%23%2F${t}%2F${a}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(n.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:a}=e;const[s,c]=(0,l.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${a}?hideMenus`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return l.createElement(n.UD,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:r(d,t,a,m.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:r(d,t,a,m.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:r(d,t,a,m.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:r(d,t,a,m.webcomponent)})))}},25433:(e,t,a)=>{a.d(t,{_:()=>_});var n=a(17322),l=a(94047),r=a(50959),i=a(60112);function o(e){const{label:t,name:a,update:n,value:i}=e;return(0,r.useEffect)((()=>{i||n(a,"#000000")}),[]),r.createElement(l.Np,{_label:"",_on:{onChange:(e,t)=>n(a,t)},_value:i},t)}function s(e){const{attribute:t,label:a,update:n}=e,[i,o]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[m,p]=(0,r.useState)("");let b=!1,k=!1,g=!1,v=!1;t.type.includes("KoliBriAllIcon")?(b=!0,k=!0,g=!0,v=!0):(t.type.includes("KoliBriVerticalIcon")&&(g=!0,v=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,k=!0)),(0,r.useEffect)((()=>{if(!i||s||d||m){const e={};i&&(e.left=`codicon codicon-${i}`),s&&(e.right=`codicon codicon-${s}`),d&&(e.top=`codicon codicon-${d}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&n(t.name,JSON.stringify(e))}else n(t.name,`codicon codicon-${i}`)}),[i,s,d,m]);const h=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,a,b?r.createElement(l.ox,{_label:"Links"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",k?r.createElement(l.ox,{_label:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"",g?r.createElement(l.ox,{_label:"Oben"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}}))))):"",v?r.createElement(l.ox,{_label:"Unten"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function c(e){const{name:t,label:a,types:n,update:i,value:o}=e,s=[];function c(e){return{label:e,value:e}}return n.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...n.filter((e=>"undefined"!==e)).map(c))):s.push(...n.filter((e=>"undefined"!==e)).map(c)),r.createElement(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(s),_on:{onChange:(e,a)=>i(t,a[0])},_value:o?[o]:void 0},a)}function d(e){const{attribute:t,update:a,value:n}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),d=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),d=r.createElement(l.T5,{_label:t.description},t.name);switch(t.name){case"_color":return r.createElement(o,{name:t.name,label:d,update:a,value:n});case"_icon":return r.createElement(s,{attribute:t,label:d,update:a,value:n});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,n)=>a(t.name,n)},_value:n||""},d);case"number":return r.createElement(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,n)=>a(t.name,n)},_value:n},d);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:!0===n,_label:"",_on:{onChange:(e,n)=>a(t.name,n)},_variant:"switch",_value:!0},d);default:return e.length>1?r.createElement(c,{label:d,name:t.name,types:e,update:a,value:n}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,n]);return r.createElement(r.Fragment,null,d)}var u=a(22115),m=a(77192),p=a(85630),b=a.n(p);function k(e){const{tag:t,params:a}=e,n=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,r.useMemo)((()=>{let e="";return n.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],n=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${n}"`+a.substring(t)}else e+=`<div slot="${n}">${a}</div>`})),e}),[a]),o=n.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[r,u]of o)if(u){let e="";switch(typeof u){case"string":e=` ${r}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${u.toString()}"`;break;case"boolean":e=u?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${i}</kol-${t}>`;let c;try{c=(0,m.format)(s,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(d){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c}))}function g(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),a=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),n={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.KolToast,version:l.u_}[e.tag];return n?r.createElement(n,t,a.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function v(e){const{description:t,name:a,update:n,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,a||"default"),": ",t,r.createElement("br",null),r.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>n(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const h=["_smart-button","_icon-align"],f={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[t,a]=(0,r.useState)(function(){const e={};return Object.values(n.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[a][t.name]=t.defaultValue.replace(/'/g,""),e[a].defaultValues.push(t.name)),void 0!==f[a]?.[t.name]&&(e[a][t.name]=f[a][t.name])})),t.slots.forEach((t=>{const n=`slot-${t.name||"default"}`,l=f[a]?.[n];l&&(e[a][n]=l)}))})),e}()),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!n.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!n.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){a((a=>{const n={...a[o],[e]:t,defaultValues:a[o].defaultValues.filter((t=>t!==e))};return{...a,[o]:n}}))}const m=Object.values(n.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(g,{tag:o,params:c})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(k,{params:c,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},m&&m.attributes.map((e=>r.createElement(r.Fragment,null,!h.includes(e.name)&&!e.description.startsWith("Deprecated:")&&r.createElement(d,{key:e.name,attribute:e,update:u,value:c[e.name]})))),m&&0===m.attributes.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-auto"},m&&m.slots.map((e=>r.createElement(v,{key:e.name,description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]}))),m&&0===m.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},48760:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=a(52319),l=(a(50959),a(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiele",id:"beispiele",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Mit Bild",id:"mit-bild",level:3},{value:"Ohne Bild",id:"ohne-bild",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function o(e){let{components:t,...a}=e;return(0,l.kt)(i,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente zeigt entweder ein kleines Bild des Users oder dessen Initialen an, falls kein Bild vorhanden ist."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-avatar _label="Erika Maria Mustermann"></kol-avatar>\n<kol-avatar _label="Erika"></kol-avatar>\n<kol-avatar _src="https://www.w3schools.com/howto/img_avatar.png" _label="Erika Maria Mustermann"></kol-avatar>\n')),(0,l.kt)("h3",{id:"beispiele"},"Beispiele"),(0,l.kt)("p",null,(0,l.kt)("kol-avatar",{_label:"Erika Maria Mustermann"}),"\n",(0,l.kt)("kol-avatar",{_label:"Erika"}),"\n",(0,l.kt)("kol-avatar",{_src:"https://www.w3schools.com/howto/img_avatar.png",_label:"Erika Maria Mustermann"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"mit-bild"},"Mit Bild"),(0,l.kt)("p",null,"In der Standard-Ansicht zeigt die ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente ein Avatar-Bild. Hierzu muss das Attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"_src")," mit einer URL zum Bild angegeben werden.",(0,l.kt)("br",{parentName:"p"}),"\n","Zus\xe4tzlich ist es notwendig, das ",(0,l.kt)("inlineCode",{parentName:"p"},"_label"),"-Attribut mit dem Namen des Benutzers anzugeben, damit ein Alternativtext ausgezeichnet werden kann."),(0,l.kt)("h3",{id:"ohne-bild"},"Ohne Bild"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente kann auch ohne ",(0,l.kt)("inlineCode",{parentName:"p"},"_src"),"-Attribut verwendet werden und zeigt in diesem Fall die Initialen des Benutzers, basierend auf dem\n",(0,l.kt)("inlineCode",{parentName:"p"},"_label"),"-Attribut."),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("p",null,"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente, um das Bild eines Users anzuzeigen."),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"Bei der ",(0,l.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente wurden insbesondere folgende Punkte der Barrierefreiheit betrachtet:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die Komponente ist mit einem Beschreibungstext, der den Namen des Users beinhaltet, als aria-label ausgezeichnet."),(0,l.kt)("li",{parentName:"ul"},"Die Initialen, die alternativ zum Avatar-Bild gezeigt werden, werden als rein visuelles, semantisch nicht relevantes Element betrachtet und f\xfcr Screenreader\nentsprechend versteckt.")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_src")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_src")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the image ",(0,l.kt)("inlineCode",{parentName:"td"},"src")," attribute to the given string."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"."},"kol-avatar"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-avatar --\x3e kol-avatar-wc\n  style kol-avatar-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;a(9091);var s=a(25433);const c={title:"Avatar",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Avatar-Komponente.",tags:["Avatar","Beschreibung","Spezifikation","Beispiele"]},d=void 0,u={unversionedId:"components/avatar",id:"version-1.7/components/avatar",title:"Avatar",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Avatar-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/avatar.mdx",sourceDirName:"30-components",slug:"/components/avatar",permalink:"/en/docs/components/avatar",draft:!1,tags:[{label:"Avatar",permalink:"/en/docs/tags/avatar"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"1.7",frontMatter:{title:"Avatar",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Avatar-Komponente.",tags:["Avatar","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Alert",permalink:"/en/docs/components/alert"},next:{title:"Badge",permalink:"/en/docs/components/badge"}},m={},p=[{value:"Live-Editor",id:"live-editor",level:2}],b={toc:p},k="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(s._,{component:"avatar",mdxType:"LiveEditorCompact"}))}g.isMDXComponent=!0}}]);