"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[72116],{68718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var i=t(11527),r=t(16034);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die ",(0,i.jsx)(n.strong,{children:"Card"}),"-Komponente an. Mit ihrer Hilfe k\xf6nnen Sie Ihre Inhalte sehr einfach strukturieren."]}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.strong,{children:"Card"}),"-Komponente besteht aus einem ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Titel-Bereich"})}),", einem ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Inhalts-Bereich"})})," und einem ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Fu\xdf-Bereich"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Der ",(0,i.jsx)(n.strong,{children:"Titel-Bereich"})," wird in einer gr\xf6\xdferen Schrift dargestellt. Der ",(0,i.jsx)(n.strong,{children:"Inhalts-Bereich"})," ist optisch durch eine horizontale Trennlinie unterhalb des Titel-Bereichs abgetrennt und wird in der Standardschrift ausgegeben.\nDer ",(0,i.jsx)(n.strong,{children:"Fu\xdf-Bereich"})," wird optional durch das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_has-footer"})})," aktiviert und stellt dann Platz f\xfcr weitere Inhalte, z.B. eine ",(0,i.jsx)(n.strong,{children:"Button"}),"-Komponente bereit. Der Fu\xdf-Bereich ist optisch durch eine horizontale Trennlinie vom Inhalts-Bereich abgetrennt."]}),"\n",(0,i.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,i.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<kol-card _label="Testtitel">\n\t<div slot="content">\n\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore\n\t\tmagna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n\t\tgubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing\n\t\telitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero\n\t\teos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum\n\t\tdolor sit amet.\n\t</div>\n</kol-card>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsx)("kol-card",{_label:"Testtitel",children:(0,i.jsx)("div",{slot:"content",children:(0,i.jsx)(n.p,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\ndolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos\net accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})})}),"\n",(0,i.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,i.jsx)(n.h3,{id:"einfache-standard-card",children:"Einfache Standard-Card"}),"\n",(0,i.jsxs)(n.p,{children:["In der Standardansicht besteht eine ",(0,i.jsx)(n.strong,{children:"Card"})," aus einem Titel-Bereich, und einem leeren Inhalts-Bereich.\nDie horizontale Trennlinie zwischen beiden Bereichen setzt KoliBri automatisch."]}),"\n",(0,i.jsx)(n.h3,{id:"titel-der-card-komponente",children:"Titel der Card-Komponente"}),"\n",(0,i.jsxs)(n.p,{children:["Den Titel der Card bestimmen Sie durch Setzen des Attributs ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_label"})}),". Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nBeachten Sie, dass ",(0,i.jsx)(n.strong,{children:"HTML-Code"})," nicht erlaubt ist. Sofern nicht gesetzt werden drei Punkte dargestellt.\nDie \xdcberschriftenebene des Titels wird durch das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_level"})})," \xfcbergeben. M\xf6glich sind die Level ",(0,i.jsx)(n.strong,{children:"1"})," bis ",(0,i.jsx)(n.strong,{children:"6"})]}),"\n",(0,i.jsx)(n.h3,{id:"inhalts-container",children:"Inhalts-Container"}),"\n",(0,i.jsxs)(n.p,{children:["Die Inhalte im Header/Content/Footer-Bereich der Card bestimmen Sie durch Einf\xfcgen eines ",(0,i.jsx)(n.strong,{children:"Inhalts-Containers"})," innerhalb des ",(0,i.jsx)(n.code,{children:"<kol-card></kol-card>-Elements"}),". Der Container muss als Attribut ",(0,i.jsx)(n.strong,{children:'slot="header/coontent/footer"'})," enthalten. Hier k\xf6nnen Sie beliebigen ",(0,i.jsx)(n.strong,{children:"HTML-Code"})," einf\xfcgen."]}),"\n",(0,i.jsxs)(n.p,{children:["Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xf6nnen, es aber empfohlen wird ein ",(0,i.jsx)(n.code,{children:"<div></div>"}),"-Tag zu verwenden."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<kol-card _label="Beispiel" _level="1">\n\t<div slot="content">Text im Inhalts-Bereich</div>\n</kol-card>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Verwenden Sie die ",(0,i.jsx)(n.strong,{children:"Card"}),"-Komponente, um in sich geschlossene Themenbereiche optisch zu kapseln."]}),"\n",(0,i.jsxs)(n.li,{children:["Verwenden Sie die ",(0,i.jsx)(n.strong,{children:"Card"}),"-Komponente, um Ihre Inhalte semantisch zu strukturieren."]}),"\n",(0,i.jsx)(n.li,{children:"Vermeiden Sie, zu viele Cards auf einer Inhaltsseite zu verwenden."}),"\n",(0,i.jsx)(n.li,{children:"Vermeiden Sie, wichtige Inhalte innerhalb der Card-Komponente zu platzieren, wenn sich die zugeh\xf6rigen Aktions-Elemente (Buttons, Links, etc.) nicht innerhalb der gleichen Card befinden."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_hasCloser"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_has-closer"})}),(0,i.jsx)(n.td,{children:"Defines whether the element can be closed."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_hasFooter"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_has-footer"})}),(0,i.jsx)(n.td,{children:'Shows the slot="footer".'}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_heading"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_heading"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)("span",{className:"text-red-500",children:(0,i.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _label.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Deprecated: Gibt die Beschriftung der Komponente an."]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_headline"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_headline"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)("span",{className:"text-red-500",children:(0,i.jsx)(n.strong,{children:"[DEPRECATED]"})})," Verwende stattdessen das Property _heading.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Deprecated: Gibt die Beschriftung der Komponente an."]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_label"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_label"})}),(0,i.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_level"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_level"})}),(0,i.jsx)(n.td,{children:"Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"0"})," | ",(0,i.jsx)(n.code,{children:"1"})," | ",(0,i.jsx)(n.code,{children:"2"})," | ",(0,i.jsx)(n.code,{children:"3"})," | ",(0,i.jsx)(n.code,{children:"4"})," | ",(0,i.jsx)(n.code,{children:"5"})," | ",(0,i.jsx)(n.code,{children:"6"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_on"})}),(0,i.jsx)(n.td,{children:"--"}),(0,i.jsx)(n.td,{children:"Defines the event callback functions for the component."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"undefined"})," | ",(0,i.jsx)(n.code,{children:"{ onClose?: EventCallback<Event>"})," | ",(0,i.jsx)(n.code,{children:"undefined; }"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Slot"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich der Card."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"content"'})}),(0,i.jsx)(n.td,{children:"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich der Card."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"footer"'})}),(0,i.jsx)(n.td,{children:"Deprecated f\xfcr Version 2: Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Fu\xdfbereich der Card."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"header"'})}),(0,i.jsx)(n.td,{children:"Deprecated f\xfcr Version 2: Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Kopfbereich unterhalb der \xdcberschrift der Card."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./heading",children:"kol-heading-wc"})}),"\n",(0,i.jsx)(n.li,{children:"kol-button-wc"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD;\n  kol-card --\x3e kol-heading-wc\n  kol-card --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  style kol-card fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,i.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var a=t(35863),d=t(94383);const o={title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},c=void 0,h={id:"components/card",title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",source:"@site/versioned_docs/version-1.6/30-components/card.mdx",sourceDirName:"30-components",slug:"/components/card",permalink:"/docs/1.6/components/card",draft:!1,unlisted:!1,tags:[{label:"Card",permalink:"/docs/1.6/tags/card"},{label:"Beschreibung",permalink:"/docs/1.6/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/1.6/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/1.6/tags/beispiele"}],version:"1.6",frontMatter:{title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/1.6/components/button"},next:{title:"Details",permalink:"/docs/1.6/components/details"}},u={},x=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Card",id:"card",level:3},{value:"Best\xe4tigingscard",id:"best\xe4tigingscard",level:3},{value:"Cards im Grid-Flu\xdf",id:"cards-im-grid-flu\xdf",level:3},{value:"Card als Artikelliste",id:"card-als-artikelliste",level:3}];function m(e){const n={h2:"h2",h3:"h3",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{}),"\n",(0,i.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,i.jsx)(d._,{component:"card"}),"\n",(0,i.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsx)(n.h3,{id:"card",children:"Card"}),"\n",(0,i.jsx)(a._,{component:"card",sample:"basic"}),"\n",(0,i.jsx)(n.h3,{id:"best\xe4tigingscard",children:"Best\xe4tigingscard"}),"\n",(0,i.jsx)(a._,{component:"card",sample:"confirm"}),"\n",(0,i.jsx)(n.h3,{id:"cards-im-grid-flu\xdf",children:"Cards im Grid-Flu\xdf"}),"\n",(0,i.jsx)(a._,{component:"card",sample:"flex"}),"\n",(0,i.jsx)(n.h3,{id:"card-als-artikelliste",children:"Card als Artikelliste"}),"\n",(0,i.jsx)(a._,{component:"card",sample:"selection"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},35863:(e,n,t)=>{t.d(n,{_:()=>o});var i=t(43818),r=t(50959),s=t(11527);const l=function(e,n,t,i,r){return void 0===r&&(r="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${t}&view=${r}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(i.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:t}=e;const[o,c]=(0,r.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},m=`/sample-react/#/${n}/${t}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,s.jsxs)(i.UD,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===o&&(0,s.jsx)("iframe",{src:m,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===o&&(0,s.jsx)(d,{url:l(h,n,t,x.angular)})}),(0,s.jsx)("div",{children:"React"===o&&(0,s.jsx)(d,{url:l(h,n,t,x.react)})}),(0,s.jsx)("div",{children:"Vue"===o&&(0,s.jsx)(d,{url:l(h,n,t,x.vue)})}),(0,s.jsx)("div",{children:"Web Component"===o&&(0,s.jsx)(d,{url:l(h,n,t,x.webcomponent)})})]})}},94383:(e,n,t)=>{t.d(n,{_:()=>_});var i=t(15682),r=t(43818),s=t(50959),l=t(6122),a=t(11527);function d(e){const{label:n,name:t,update:i,value:l}=e;return(0,s.useEffect)((()=>{l||i(t,"#000000")}),[]),(0,a.jsx)(r.Np,{_label:"",_on:{onChange:(e,n)=>i(t,n)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:t,update:i}=e,[l,d]=(0,s.useState)(""),[o,c]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[x,m]=(0,s.useState)("");let p=!1,b=!1,j=!1,g=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,j=!0,g=!0):(n.type.includes("KoliBriVerticalIcon")&&(j=!0,g=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,s.useEffect)((()=>{if(!l||o||h||x){const e={};l&&(e.left=`codicon codicon-${l}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${l}`)}),[l,o,h,x]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[t,p?(0,a.jsx)(r.ox,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,a.jsx)(r.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",b?(0,a.jsx)(r.ox,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,a.jsx)(r.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",j?(0,a.jsx)(r.ox,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,a.jsx)(r.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",g?(0,a.jsx)(r.ox,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,a.jsx)(r.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function c(e){const{name:n,label:t,types:i,update:s,value:l}=e,d=[];function o(e){return{label:e,value:e}}return i.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...i.filter((e=>"undefined"!==e)).map(o))):d.push(...i.filter((e=>"undefined"!==e)).map(o)),(0,a.jsx)(r.r7,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onChange:(e,t)=>s(n,t[0])},_value:l?[l]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function h(e){const{attribute:n,update:t,value:i}=e,l=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,a.jsx)(r.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(d,{name:n.name,label:s,update:t,value:i});case"_icon":return(0,a.jsx)(o,{attribute:n,label:s,update:t,value:i});default:switch(l){case"string":return(0,a.jsx)(r.WD,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i||"",children:(0,a.jsx)("span",{slot:"expert",children:s})});case"number":return(0,a.jsx)(r.c2,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i,children:(0,a.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,a.jsx)(r.TE,{className:"my-2",_checked:!0===i,_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,a.jsx)(c,{label:s,name:n.name,types:e,update:t,value:i}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,a.jsx)(a.Fragment,{children:h})}var u=t(22115),x=t(77192),m=t(85630),p=t.n(m);function b(e){const{tag:n,params:t}=e,i=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let r="";const l=(0,s.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],i=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${i}"`+t.substring(n)}else e+=`<div slot="${i}">${t}</div>`})),e}),[t]),d=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[s,a]of d)if(a){let e="";switch(typeof a){case"string":e=` ${s}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${a.toString()}"`;break;case"boolean":e=a?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const o=`<kol-${n}${r}>${l}</kol-${n}>`;let c;try{c=(0,x.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function j(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:r.T5,accordion:r.RZ,alert:r.K5,avatar:r.Ek,badge:r.Er,breadcrumb:r.lo,button:r.ic,"button-group":r.uz,"button-link":r.f6,card:r.Gc,details:r.ox,form:r.m5,heading:r.HA,icon:r.Jl,image:r.Cd,"indented-text":r.CV,"input-checkbox":r.TE,"input-color":r.Np,"input-date":r.O,"input-email":r.Lj,"input-file":r.CX,"input-number":r.c2,"input-password":r.z5,"input-radio":r.sy,"input-range":r.TQ,"input-text":r.WD,kolibri:r.Vs,link:r.Nv,"link-button":r.Kc,"link-group":r.$o,logo:r.QK,modal:r.Ud,nav:r.MA,pagination:r.Q4,popover:r.KolPopover,progress:r.WR,quote:r.VZ,select:r.r7,"skip-nav":r.P,spin:r.qq,"split-button":r.KJ,symbol:r.is,table:r.Vp,tabs:r.UD,textarea:r.Qs,toast:r.KolToast,version:r.u_}[e.tag];return i?(0,a.jsx)(i,{...n,children:t.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:n,name:t,update:i,value:r}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:t||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r})]})}const f=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[n,t]=(0,s.useState)(function(){const e={};return Object.values(i.p).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==v[t]?.[n.name]&&(e[t][n.name]=v[t][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,r=v[t]?.[i];r&&(e[t][i]=r)}))})),e}()),[d,o]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!i.p.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!n[d]?._label&&u("_label","Label-Text");!!i.p.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!n[d]?._heading&&u("_heading","Heading-Text")}),[d]);const c=(0,s.useMemo)((()=>n[d]||{}),[n,d]);function u(e,n){t((t=>{const i={...t[d],[e]:n,defaultValues:t[d].defaultValues.filter((n=>n!==e))};return{...t,[d]:i}}))}const x=Object.values(i.p).find((e=>e.name===`kol-${d}`));return(0,a.jsx)(l.Z,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(r.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(j,{tag:d,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(b,{params:c,tag:d})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(r.HA,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(r.HA,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(r.HA,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,a.jsx)(g,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);