"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[53022],{63298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var i=t(11527),l=t(16034);function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Mit Hilfe der ",(0,i.jsx)(n.strong,{children:"SkipNav"}),"-Komponente kann eine versteckte Navigation erzeugt werden. Sie dient dazu, Sehbehinderten das \xdcberspringen von Seitenbereichen zu erm\xf6glichen. Sie wird nur nach Anspringen durch die ",(0,i.jsx)(n.strong,{children:"Tab-Taste"})," sichtbar."]}),"\n",(0,i.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,i.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<kol-skip-nav\n\t_aria-label=\"Ein versteckter Link\"\n\t_links=\"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]\"\n></kol-skip-nav>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsxs)(n.p,{children:["Um die ",(0,i.jsx)(n.strong,{children:"SkipNav"})," sehen zu k\xf6nnen, klicken Sie auf diesen Text und gehen dann mit der Tab-Taste einen Schritt weiter."]}),"\n",(0,i.jsx)("kol-skip-nav",{"_aria-label":"Ein versteckter Link",_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"}),"\n",(0,i.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.strong,{children:"SkipNav"})," wird durch \xdcbergabe eines JSON-Objekts erzeugt, das f\xfcr das Rendern der versteckten Links zust\xe4ndig ist."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"[\n\t{ _label: 'Navigation', _href: '#nav' },\n\t{ _label: 'Inhalt', _href: '#main' },\n\t{ _label: 'Kontakt', _href: '#kontakt' },\n\t{ _label: 'Links', _href: '#links' },\n];\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Taste"}),(0,i.jsx)(n.th,{children:"Funktion"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Tab"})}),(0,i.jsx)(n.td,{children:"Fokussiert die SkipNav und erm\xf6glicht das Durchlaufen der Men\xfcpunkte."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Enter"})}),(0,i.jsx)(n.td,{children:"Ruft den Link des fokussierten Men\xfcpunkts auf."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://webaim.org/techniques/skipnav/",children:"https://webaim.org/techniques/skipnav/"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"_ariaLabel"})," ",(0,i.jsx)(n.em,{children:"(required)"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_aria-label"})}),(0,i.jsx)(n.td,{children:"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"_links"})," ",(0,i.jsx)(n.em,{children:"(required)"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_links"})}),(0,i.jsx)(n.td,{children:"Setzt die Liste der darzustellenden Links."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"LinkProps[]"})," | ",(0,i.jsx)(n.code,{children:"string"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./link",children:"kol-link"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD;\n  kol-skip-nav --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  style kol-skip-nav fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,i.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var r=t(35863),o=t(94383);const d={title:"SkipNav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die SkipNav-Komponente.",tags:["SkipNav","Beschreibung","Spezifikation","Beispiele"]},c=void 0,u={id:"components/skip-nav",title:"SkipNav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die SkipNav-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/skip-nav.mdx",sourceDirName:"30-components",slug:"/components/skip-nav",permalink:"/en/docs/1.5/components/skip-nav",draft:!1,unlisted:!1,tags:[{label:"SkipNav",permalink:"/en/docs/1.5/tags/skip-nav"},{label:"Beschreibung",permalink:"/en/docs/1.5/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.5/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"SkipNav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die SkipNav-Komponente.",tags:["SkipNav","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Select",permalink:"/en/docs/1.5/components/select"},next:{title:"Span",permalink:"/en/docs/1.5/components/span"}},h={},p=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function b(e){const n={h2:"h2",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,i.jsx)(o._,{component:"skip-nav"}),"\n",(0,i.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsx)(r._,{component:"skip-nav",sample:"basic"})]})}function m(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},35863:(e,n,t)=>{t.d(n,{_:()=>d});var i=t(65636),l=t(50959),a=t(11527);const s=function(e,n,t,i,l){return void 0===l&&(l="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${t}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,a.jsxs)("div",{className:"m-2",children:[(0,a.jsx)("iframe",{src:n,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.jsx)(i.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,a.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:t}=e;const[d,c]=(0,l.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",h=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,p={angular:`${h}.html`,react:`${h}.tsx`,vue:`${h}.vue`,webcomponent:`${h}.html`},b=`/sample-react/#/${n}/${t}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,a.jsxs)(i.UD,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,a.jsx)("div",{children:"Preview"===d&&(0,a.jsx)("iframe",{src:b,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,a.jsx)("div",{children:"Angular"===d&&(0,a.jsx)(o,{url:s(u,n,t,p.angular)})}),(0,a.jsx)("div",{children:"React"===d&&(0,a.jsx)(o,{url:s(u,n,t,p.react)})}),(0,a.jsx)("div",{children:"Vue"===d&&(0,a.jsx)(o,{url:s(u,n,t,p.vue)})}),(0,a.jsx)("div",{children:"Web Component"===d&&(0,a.jsx)(o,{url:s(u,n,t,p.webcomponent)})})]})}},94383:(e,n,t)=>{t.d(n,{_:()=>_});var i=t(58801),l=t(65636),a=t(50959),s=t(89346),r=t(11527);function o(e){const{label:n,name:t,update:i,value:s}=e;return(0,a.useEffect)((()=>{s||i(t,"#000000")}),[]),(0,r.jsx)(l.Np,{_label:"",_on:{onChange:(e,n)=>i(t,n)},_value:s,children:(0,r.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:t,update:i}=e,[s,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[p,b]=(0,a.useState)("");let m=!1,x=!1,f=!1,j=!1;n.type.includes("KoliBriAllIcon")?(m=!0,x=!0,f=!0,j=!0):(n.type.includes("KoliBriVerticalIcon")&&(f=!0,j=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,x=!0)),(0,a.useEffect)((()=>{if(!s||d||u||p){const e={};s&&(e.left=`codicon codicon-${s}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${s}`)}),[s,d,u,p]);const k=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[t,m?(0,r.jsx)(l.ox,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:k.map((e=>(0,r.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,r.jsx)(l.ox,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:k.map((e=>(0,r.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",f?(0,r.jsx)(l.ox,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:k.map((e=>(0,r.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>h(e)}},e)))})}):"",j?(0,r.jsx)(l.ox,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:k.map((e=>(0,r.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>b(e)}},e)))})}):""]})}function c(e){const{name:n,label:t,types:i,update:a,value:s}=e,o=[];function d(e){return{label:e,value:e}}return i.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...i.filter((e=>"undefined"!==e)).map(d))):o.push(...i.filter((e=>"undefined"!==e)).map(d)),(0,r.jsx)(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onChange:(e,t)=>a(n,t[0])},_value:s?[s]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:t})})}function u(e){const{attribute:n,update:t,value:i}=e,s=(0,a.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),u=(0,a.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),a=(0,r.jsx)(l.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,r.jsx)(o,{name:n.name,label:a,update:t,value:i});case"_icons":return(0,r.jsx)(d,{attribute:n,label:a,update:t,value:i});default:switch(s){case"string":return(0,r.jsx)(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i||"",children:(0,r.jsx)("span",{slot:"expert",children:a})});case"number":return(0,r.jsx)(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i,children:(0,r.jsx)("span",{slot:"expert",children:a})});case"boolean":return(0,r.jsx)(l.TE,{className:"my-2",_checked:!0===i,_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:a})});default:return e.length>1?(0,r.jsx)(c,{label:a,name:n.name,types:e,update:t,value:i}):(0,r.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,r.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,r.jsx)(r.Fragment,{children:u})}var h=t(22115),p=t(77192),b=t(85630),m=t.n(b);function x(e){const{tag:n,params:t}=e,i=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,a.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],i=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${i}"`+t.substring(n)}else e+=`<div slot="${i}">${t}</div>`})),e}),[t]),o=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[a,r]of o)if(r){let e="";switch(typeof r){case"string":e=` ${a}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${a}="${r.toString()}"`;break;case"boolean":e=r?` ${a}`:"";break;case"object":e=` ${a}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${n}${l}>${s}</kol-${n}>`;let c;try{c=(0,p.format)(d,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(u){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(h.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function f(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,version:l.u_}[e.tag];return i?(0,r.jsx)(i,{...n,children:t.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function j(e){const{description:n,name:t,update:i,value:l}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:t||"default"}),": ",n,(0,r.jsx)("br",{}),(0,r.jsx)(h.ML,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const k=["_smart-button","_icon-align"],g={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[n,t]=(0,a.useState)(function(){const e={};return Object.values(i.p).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==g[t]?.[n.name]&&(e[t][n.name]=g[t][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,l=g[t]?.[i];l&&(e[t][i]=l)}))})),e}()),[o,d]=(0,a.useState)("badge");(0,a.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,a.useEffect)((()=>{!!i.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&h("_label","Label-Text");!!i.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&h("_heading","Heading-Text")}),[o]);const c=(0,a.useMemo)((()=>n[o]||{}),[n,o]);function h(e,n){t((t=>{const i={...t[o],[e]:n,defaultValues:t[o].defaultValues.filter((n=>n!==e))};return{...t,[o]:i}}))}const p=Object.values(i.p).find((e=>e.name===`kol-${o}`));return(0,r.jsx)(s.Z,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(f,{tag:o,params:c})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(x,{params:c,tag:o})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(l.HA,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.HA,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!k.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(u,{attribute:e,update:h,value:c[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(l.HA,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,r.jsx)(j,{description:e.description,name:e.name||"default",update:h,value:c["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);