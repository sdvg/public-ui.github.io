"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8816],{7096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var i=t(2488),r=t(16592);function s(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Buttons"})," dienen dazu, Nutzer",":innen"," Auswahlm\xf6glichkeiten f\xfcr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen den Nutzer",":innen",", die wichtigsten Aktionen einer Seite oder innerhalb eines Applikation zu finden und erm\xf6glichen es ihm, diese Aktionen auszuf\xfchren."]}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.strong,{children:"ButtonGroup"}),"-Komponente fasst mehrere Buttons zu einer optischen und funktionalen Einheit zusammen."]}),"\n",(0,i.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,i.jsxs)(n.p,{children:["Die Komponente ",(0,i.jsx)(n.strong,{children:"ButtonGroup"})," besteht aus einem Hauptelement ",(0,i.jsx)(n.code,{children:"<kol-button-group></kol-button-group>"}),". In ihm werden beliebig viele ",(0,i.jsx)(n.strong,{children:"Button"}),"-Komponenten zu einer Gruppe zusammengefasst. Die einzelnen ",(0,i.jsx)(n.strong,{children:"Buttons"})," entsprechen in ihrer Konstruktion der Beschreibung\nzur ",(0,i.jsx)(n.strong,{children:"Button"}),"-Komponente."]}),"\n",(0,i.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<kol-button-group>\n\t<kol-button _label="Speichern" _variant="primary"></kol-button>\n\t<kol-button _label="Speichern & Schlie\xdfen" _variant="normal"></kol-button>\n\t<kol-button _label="Abbrechen" _variant="secondary"></kol-button>\n\t<kol-button _label="L\xf6schen" _variant="danger"></kol-button>\n\t<kol-button _label="Ghost" _variant="ghost"></kol-button>\n\t<kol-button _label="Deaktiviert" _disabled></kol-button>\n</kol-button-group>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsxs)("kol-button-group",{children:[(0,i.jsx)("kol-button",{_label:"Speichern",_variant:"primary"}),(0,i.jsx)("kol-button",{_label:"Speichern & Schlie\xdfen",_variant:"normal"}),(0,i.jsx)("kol-button",{_label:"Abbrechen",_variant:"secondary"}),(0,i.jsx)("kol-button",{_label:"L\xf6schen",_variant:"danger"}),(0,i.jsx)("kol-button",{_label:"Ghost",_variant:"ghost"}),(0,i.jsx)("kol-button",{_label:"Deaktiviert",_disabled:!0})]}),"\n",(0,i.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,i.jsx)(n.h3,{id:"einfache-buttongroup",children:"Einfache ButtonGroup"}),"\n",(0,i.jsxs)(n.p,{children:["Im einfachsten Fall besteht die ",(0,i.jsx)(n.strong,{children:"ButtonGroup"}),"-Komponente aus einer Liste beschrifteter Schaltfl\xe4chen. F\xfcr die Beschriftung der Buttons wird lediglich das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:'_label="Ihre Beschriftung"'})})," verwendet."]}),"\n",(0,i.jsx)(n.h3,{id:"buttongroup-mit-text-icon-und-text-mit-icon",children:"ButtonGroup mit Text, Icon und Text mit Icon"}),"\n",(0,i.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:'_icons="xxx"'})})," wird festgelegt, ob und welches Icon verwendet werden soll."]}),"\n",(0,i.jsxs)(n.p,{children:["Eine \xdcbersicht \xfcber die zur Verf\xfcgung stehenden Icons in KoliBri finden Sie ",(0,i.jsx)("kol-link",{_href:"https://icofont.com/icons",_target:"_blank",_label:"hier"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_hide-label"})})," legen Sie fest, ob nur das Icon angezeigt werden soll. Der Inhalt des Attributs ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_label"})})," wird nicht mehr angezeigt."]}),"\n",(0,i.jsx)(n.h3,{id:"ausgabe-verschiedener-styles-f\xfcr-buttons-in-der-buttongroup",children:"Ausgabe verschiedener Styles f\xfcr Buttons in der ButtonGroup"}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcr die Standardausgabe eines Buttons stehen die Werte ",(0,i.jsx)(n.strong,{children:"primary"}),", ",(0,i.jsx)(n.strong,{children:"secondary"}),", ",(0,i.jsx)(n.strong,{children:"normal"}),", ",(0,i.jsx)(n.strong,{children:"danger"})," und ",(0,i.jsx)(n.strong,{children:"ghost"})," zur Verf\xfcgung. Hier\xfcber wird die farbliche Gestaltung des Buttons festgelegt."]}),"\n",(0,i.jsx)(n.h3,{id:"optische-ausrichtung",children:"Optische Ausrichtung"}),"\n",(0,i.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_nestled"})})," kann eine optische Ausrichtung der ButtonGroup bestimmt werden. An der angegebenen Position werden die abgerundeten Ecken entfernt, so dass der Eindruck einer Button-Leiste entsteht. M\xf6glich sind die Werte ",(0,i.jsx)(n.code,{children:"bottom"}),", ",(0,i.jsx)(n.code,{children:"top"}),", ",(0,i.jsx)(n.code,{children:"left"}),"und ",(0,i.jsx)(n.code,{children:"right"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verwenden Sie eine prim\xe4re Schaltfl\xe4che f\xfcr die n\xe4chstbeste Aktion. Verbleibende Calls-to-Actions sollten als sekund\xe4re Schaltfl\xe4che dargestellt werden."}),"\n",(0,i.jsx)(n.li,{children:"Verwenden Sie Schaltfl\xe4chen an einheitlichen Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."}),"\n",(0,i.jsx)(n.li,{children:"Verwenden Sie nur eine prim\xe4re Schaltfl\xe4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten."}),"\n",(0,i.jsx)(n.li,{children:"Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xe4che ausf\xfchrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xe4gnante, spezifische, selbsterkl\xe4rende Beschriftungen."}),"\n",(0,i.jsx)(n.li,{children:'Schaltfl\xe4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xfcr Interpretationen dar\xfcber gibt, wof\xfcr das Verb zust\xe4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".'}),"\n",(0,i.jsxs)(n.li,{children:["Wenn Sie mehrere Buttons kombinieren oder anordnen m\xf6chten, verwenden Sie die ",(0,i.jsx)(n.strong,{children:"ButtonGroup"}),"-Komponente."]}),"\n",(0,i.jsxs)(n.li,{children:['Verwenden Sie nicht mehrere Buttons im Style "prim\xe4r" in einer ',(0,i.jsx)(n.strong,{children:"ButtonGroup"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Verwenden Sie Buttons nicht als Link oder als Navigationselement."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,i.jsxs)(n.p,{children:["Bei Verwendung der ",(0,i.jsx)(n.strong,{children:"ButtonGroup"}),"-Komponente sind keine besonderen Ma\xdfnahmen in Bezug auf die barrierefreiheit zu ber\xfccksichtigen. Die innerhalb der ButtonGroup enthaltenen ",(0,i.jsx)(n.strong,{children:"Button"}),"-Komponenten besitzen jedoch einige wichtige Aspekte in diesem Zusammenhang:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In der Button-Komponente werden die optionalen ",(0,i.jsx)(n.strong,{children:"Icons"})," links ausgerichtet, um Nutzer*innen mit eingeschr\xe4nktem Sichtfeld eine bessere Bedienbarkeit zu erm\xf6glichen."]}),"\n",(0,i.jsxs)(n.li,{children:["Die Farben der ",(0,i.jsx)(n.strong,{children:"Variant-Typen"})," ",(0,i.jsx)(n.code,{children:"primary"}),", ",(0,i.jsx)(n.code,{children:"secondary"}),", ",(0,i.jsx)(n.code,{children:"normal"}),", ",(0,i.jsx)(n.code,{children:"danger"})," und ",(0,i.jsx)(n.code,{children:"ghost"})," wurden in Hinblick auf bestm\xf6glichen Kontrast gew\xe4hlt. Die Schriftfarbe ist per default immer wei\xdf."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Taste"}),(0,i.jsx)(n.th,{children:"Funktion"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Tab"})}),(0,i.jsx)(n.td,{children:"Springt den einzelnen Button der ButtonGroup an und fokussiert ihn."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Enter"})}),(0,i.jsx)(n.td,{children:"\xd6ffnet den Link des fokussierten Button oder f\xfchrt dessen onClick-Methode aus."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#button",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:".",children:"kol-button-group"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tabs",children:"kol-tabs"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD;\n  kol-button-group --\x3e kol-button-group-wc\n  kol-tabs --\x3e kol-button-group-wc\n  style kol-button-group-wc stroke:#333,stroke-width:4px"}),"\n",(0,i.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var o=t(37704),a=t(54592);const d={title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",tags:["ButtonGroup","Beschreibung","Spezifikation","Beispiele"]},c=void 0,u={id:"components/button-group",title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",source:"@site/docs/30-components/button-group.mdx",sourceDirName:"30-components",slug:"/components/button-group",permalink:"/en/docs/next/components/button-group",draft:!1,unlisted:!1,tags:[{label:"ButtonGroup",permalink:"/en/docs/next/tags/button-group"},{label:"Beschreibung",permalink:"/en/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",tags:["ButtonGroup","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Breadcrumb",permalink:"/en/docs/next/components/breadcrumb"},next:{title:"ButtonLink",permalink:"/en/docs/next/components/button-link"}},h={},p=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function b(e){const n={h2:"h2",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{}),"\n",(0,i.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,i.jsx)(a.o,{component:"button-group"}),"\n",(0,i.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsx)(o.Q,{component:"button-group",sample:"basic"})]})}function m(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},37704:(e,n,t)=>{t.d(n,{Q:()=>d});var i=t(57920),r=t(96651),s=t(2488);const l=function(e,n,t,i,r){return void 0===r&&(r="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${t}&view=${r}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},a=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(i.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:t}=e;const[d,c]=(0,r.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",h=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,p={angular:`${h}.html`,react:`${h}.tsx`,vue:`${h}.vue`,webcomponent:`${h}.html`},b=`/sample-react/#/${n}/${t}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,s.jsxs)(i._,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===d&&(0,s.jsx)("iframe",{src:b,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===d&&(0,s.jsx)(a,{url:l(u,n,t,p.angular)})}),(0,s.jsx)("div",{children:"React"===d&&(0,s.jsx)(a,{url:l(u,n,t,p.react)})}),(0,s.jsx)("div",{children:"Vue"===d&&(0,s.jsx)(a,{url:l(u,n,t,p.vue)})}),(0,s.jsx)("div",{children:"Web Component"===d&&(0,s.jsx)(a,{url:l(u,n,t,p.webcomponent)})})]})}},54592:(e,n,t)=>{t.d(n,{o:()=>k});var i=t(36016),r=t(57920),s=t(96651),l=t(19356),o=t(2488);function a(e){const{label:n,name:t,update:i,value:l}=e;return(0,s.useEffect)((()=>{l||i(t,"#000000")}),[]),(0,o.jsx)(r.eK,{_label:"",_on:{onChange:(e,n)=>i(t,n)},_value:l,children:(0,o.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:t,update:i}=e,[l,a]=(0,s.useState)(""),[d,c]=(0,s.useState)(""),[u,h]=(0,s.useState)(""),[p,b]=(0,s.useState)("");let m=!1,g=!1,x=!1,f=!1;n.type.includes("KoliBriAllIcon")?(m=!0,g=!0,x=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(x=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,g=!0)),(0,s.useEffect)((()=>{if(!l||d||u||p){const e={};l&&(e.left=`codicon codicon-${l}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${l}`)}),[l,d,u,p]);const j=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,o.jsxs)("div",{children:[t,m?(0,o.jsx)(r.Si,{_label:"Links",children:(0,o.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,o.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",g?(0,o.jsx)(r.Si,{_label:"Rechts",children:(0,o.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,o.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",x?(0,o.jsx)(r.Si,{_label:"Oben",children:(0,o.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,o.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>h(e)}},e)))})}):"",f?(0,o.jsx)(r.Si,{_label:"Unten",children:(0,o.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,o.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>b(e)}},e)))})}):""]})}function c(e){const{name:n,label:t,types:i,update:s,value:l}=e,a=[];function d(e){return{label:e,value:e}}return i.includes("undefined")?(a.push({label:"-",value:void 0}),a.push(...i.filter((e=>"undefined"!==e)).map(d))):a.push(...i.filter((e=>"undefined"!==e)).map(d)),(0,o.jsx)(r.qy,{className:"my-2",_label:"",_options:JSON.stringify(a),_on:{onChange:(e,t)=>s(n,t[0])},_value:l?[l]:void 0,children:(0,o.jsx)("span",{slot:"expert",children:t})})}function u(e){const{attribute:n,update:t,value:i}=e,l=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),u=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,o.jsx)(r.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,o.jsx)(a,{name:n.name,label:s,update:t,value:i});case"_icons":return(0,o.jsx)(d,{attribute:n,label:s,update:t,value:i});default:switch(l){case"string":return(0,o.jsx)(r.Uh,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i||"",children:(0,o.jsx)("span",{slot:"expert",children:s})});case"number":return(0,o.jsx)(r.QL,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i,children:(0,o.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,o.jsx)(r.Q7,{className:"my-2",_checked:!0===i,_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_variant:"switch",_value:!0,children:(0,o.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,o.jsx)(c,{label:s,name:n.name,types:e,update:t,value:i}):(0,o.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,o.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,o.jsx)(o.Fragment,{children:u})}var h=t(47184),p=t(28256),b=t(39452),m=t.n(b);function g(e){const{tag:n,params:t}=e,i=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let r="";const l=(0,s.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],i=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${i}"`+t.substring(n)}else e+=`<div slot="${i}">${t}</div>`})),e}),[t]),a=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[s,o]of a)if(o){let e="";switch(typeof o){case"string":e=` ${s}="${o.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${o.toString()}"`;break;case"boolean":e=o?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(o)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const d=`<kol-${n}${r}>${l}</kol-${n}>`;let c;try{c=(0,p.format)(d,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(u){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,o.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,o.jsx)(h.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function x(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:r.s1,accordion:r.IP,alert:r.mW,avatar:r.aq,badge:r.cX,breadcrumb:r.If,button:r.qC,"button-group":r.Os,"button-link":r.u_,card:r.Yh,details:r.Si,form:r.OO,heading:r.ch,icon:r.SA,image:r.iu,"indented-text":r.MV,"input-checkbox":r.Q7,"input-color":r.eK,"input-date":r.QZ,"input-email":r.kN,"input-file":r.Ex,"input-number":r.QL,"input-password":r.EH,"input-radio":r.wJ,"input-range":r.Ef,"input-text":r.Uh,kolibri:r.aY,link:r.GQ,"link-button":r._k,"link-group":r.O_,logo:r.ae,modal:r.cT,nav:r.Y4,pagination:r.kj,progress:r.O0,quote:r.SY,select:r.qy,"skip-nav":r.Ig,spin:r.kP,"split-button":r.a,symbol:r.OM,table:r.Y9,tabs:r._,textarea:r.DG,version:r.k1}[e.tag];return i?(0,o.jsx)(i,{...n,children:t.map((e=>(0,o.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,o.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:t,update:i,value:r}=e;return(0,o.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,o.jsx)("b",{children:t||"default"}),": ",n,(0,o.jsx)("br",{}),(0,o.jsx)(h.GW,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r})]})}const j=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,t]=(0,s.useState)(function(){const e={};return Object.values(i.Q).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==_[t]?.[n.name]&&(e[t][n.name]=_[t][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,r=_[t]?.[i];r&&(e[t][i]=r)}))})),e}()),[a,d]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!i.Q.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_label"===e.name))&&!n[a]?._label&&h("_label","Label-Text");!!i.Q.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_heading"===e.name))&&!n[a]?._heading&&h("_heading","Heading-Text")}),[a]);const c=(0,s.useMemo)((()=>n[a]||{}),[n,a]);function h(e,n){t((t=>{const i={...t[a],[e]:n,defaultValues:t[a].defaultValues.filter((n=>n!==e))};return{...t,[a]:i}}))}const p=Object.values(i.Q).find((e=>e.name===`kol-${a}`));return(0,o.jsx)(l.c,{children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,o.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,o.jsxs)(r._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,o.jsx)("div",{className:"p-2",children:(0,o.jsx)(x,{tag:a,params:c})}),(0,o.jsx)("div",{className:"lg:col-span-2",children:(0,o.jsx)(g,{params:c,tag:a})})]}),(0,o.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,o.jsx)(r.ch,{_level:3,_label:"Konfigurator"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(r.ch,{_level:4,_label:"Properties"}),(0,o.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,o.jsx)(o.Fragment,{children:!j.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,o.jsx)(u,{attribute:e,update:h,value:c[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,o.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,o.jsx)(r.ch,{_level:4,_label:"Slots"}),(0,o.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,o.jsx)(f,{description:e.description,name:e.name||"default",update:h,value:c["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,o.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);