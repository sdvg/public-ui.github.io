"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[21016],{77444:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var l=i(11527),r=i(16034);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.strong,{children:"LinkGroup"}),"-Komponente bildet einen umfassenden Container f\xfcr eine vertikale oder horizontale Liste von Links. Sie rendert eine auf Barrierefreiheit optimierte Liste von Links, die als Text, als Icon oder auch in Kombination ausgegeben werden kann. M\xf6glich ist auch die Ausgabe von versteckten Links."]}),"\n",(0,l.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,l.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<kol-link-group\n\t_label=\"Einfache LinkGroup\"\n\t_links=\"[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]\"\n\t_list-style-type=\"disc\"\n\t_orientation=\"'vertical\"\n></kol-link-group>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,l.jsx)("kol-link-group",{_label:"Einfache LinkGroup",_caption:"\xdcberschrift der LinkGroup",_links:"[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]","_list-style-type":"disc",_orientation:"'vertical"}),"\n",(0,l.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,l.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,l.jsxs)(n.p,{children:["Die auszugebenden Links werden als JSON-Objekt an das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_links"})})," \xfcbergeben. Dort k\xf6nnen die Attribute des ",(0,l.jsx)("kol-link",{_href:"",_label:"Links"})," \xfcbergeben werden, ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_href"})})," und ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_label"})})," sind jedoch Pflicht."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n\t{ _label: 'Link 1', _href: 'https://www.w3.org' },\n\t{ _label: 'Link 2', _href: 'https://www.w3.org' },\n\t{ _label: 'Link 3', _href: 'https://www.w3.org' },\n];\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\xfcberschrift",children:"\xdcberschrift"}),"\n",(0,l.jsxs)(n.p,{children:["Die \xdcberschrift der LinkGroup wird \xfcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_heading"})})," \xfcbergeben."]}),"\n",(0,l.jsx)(n.h3,{id:"ausrichtung",children:"Ausrichtung"}),"\n",(0,l.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_orientation"})})," kann die Ausrichtung der LinkGroup bestimmt werden. M\xf6gliche Werte sind ",(0,l.jsx)(n.code,{children:"horizontal"})," und ",(0,l.jsx)(n.code,{children:"vertical"})," (Standard)."]}),"\n",(0,l.jsx)(n.h3,{id:"list-style-type",children:"List-Style-Type"}),"\n",(0,l.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_list-style-type"})})," kann bestimmt werden, mit welchem Symbol die einzelnen Zeilen der Group dargestellt werden sollen. Es stehen diese vier M\xf6glichkeiten zur Auswahl:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"disc"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"circle"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"square"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"none"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,l.jsx)(n.h4,{id:"linkgroup-innerhalb-eines-flie\xdftextes",children:"LinkGroup innerhalb eines Flie\xdftextes"}),"\n",(0,l.jsxs)("p",{children:[(0,l.jsx)(n.p,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis\nnemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus."}),(0,l.jsx)("kol-link-group",{_label:"LinkGroup innerhalb eines Flie\xdftextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"}),(0,l.jsx)(n.p,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis\nnemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus."})]}),"\n",(0,l.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,l.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Taste"}),(0,l.jsx)(n.th,{children:"Funktion"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"Tab"})}),(0,l.jsx)(n.td,{children:"Fokussiert das erste Element der LinkGroup."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"Enter"})}),(0,l.jsx)(n.td,{children:"Ruft den hinterlegten Link auf."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_ariaLabel"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_aria-label"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)("span",{className:"text-red-500",children:(0,l.jsx)(n.strong,{children:"[DEPRECATED]"})})," use _label instead",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Deprecated: Setzt die semantische Beschriftung der Komponente."]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_heading"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_heading"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)("span",{className:"text-red-500",children:(0,l.jsx)(n.strong,{children:"[DEPRECATED]"})})," remove in the next major version",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Deprecated: Gibt die optionale \xdcberschrift zur Link-Gruppe an."]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_level"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_level"})}),(0,l.jsx)(n.td,{children:"Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"0"})," | ",(0,l.jsx)(n.code,{children:"1"})," | ",(0,l.jsx)(n.code,{children:"2"})," | ",(0,l.jsx)(n.code,{children:"3"})," | ",(0,l.jsx)(n.code,{children:"4"})," | ",(0,l.jsx)(n.code,{children:"5"})," | ",(0,l.jsx)(n.code,{children:"6"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_links"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_links"})}),(0,l.jsx)(n.td,{children:"Defines the list of links to render."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"LinkProps[]"})," | ",(0,l.jsx)(n.code,{children:"string"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_listStyleType"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_list-style-type"})}),(0,l.jsx)(n.td,{children:"Gibt den List-Style-Typen f\xfcr ungeordnete Listen aus. Wird bei horizontalen LinkGroups als Trenner verwendet"}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"circle"'})," | ",(0,l.jsx)(n.code,{children:'"decimal"'})," | ",(0,l.jsx)(n.code,{children:'"decimal-leading-zero"'})," | ",(0,l.jsx)(n.code,{children:'"disc"'})," | ",(0,l.jsx)(n.code,{children:'"lower-alpha"'})," | ",(0,l.jsx)(n.code,{children:'"lower-greek"'})," | ",(0,l.jsx)(n.code,{children:'"lower-latin"'})," | ",(0,l.jsx)(n.code,{children:'"lower-roman"'})," | ",(0,l.jsx)(n.code,{children:'"none"'})," | ",(0,l.jsx)(n.code,{children:'"square"'})," | ",(0,l.jsx)(n.code,{children:'"upper-alpha"'})," | ",(0,l.jsx)(n.code,{children:'"upper-latin"'})," | ",(0,l.jsx)(n.code,{children:'"upper-roman"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_ordered"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_ordered"})}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)("span",{className:"text-red-500",children:(0,l.jsx)(n.strong,{children:"[DEPRECATED]"})})," Wird mittels der Property _list-style-type automatisch gesteuert.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Deprecated: Gibt an, ob eine Ordered- oder eine Unordered-List verwendet werden soll."]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"false"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_orientation"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_orientation"})}),(0,l.jsx)(n.td,{children:"Defines whether the orientation of the component is horizontal or vertical."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"horizontal"'})," | ",(0,l.jsx)(n.code,{children:'"vertical"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'vertical'"})})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,l.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./heading",children:"kol-heading-wc"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./link",children:"kol-link"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph TD;\n  kol-link-group --\x3e kol-heading-wc\n  kol-link-group --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  style kol-link-group fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,l.jsx)(n.hr,{})]})}function t(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}i(35863);var d=i(94383);const o={title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",tags:["LinkGroup","Beschreibung","Spezifikation","Beispiele"]},a=void 0,c={id:"components/link-group",title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/link-group.mdx",sourceDirName:"30-components",slug:"/components/link-group",permalink:"/docs/1.7/components/link-group",draft:!1,unlisted:!1,tags:[{label:"LinkGroup",permalink:"/docs/1.7/tags/link-group"},{label:"Beschreibung",permalink:"/docs/1.7/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/1.7/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",tags:["LinkGroup","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"LinkButton",permalink:"/docs/1.7/components/link-button"},next:{title:"Link",permalink:"/docs/1.7/components/link"}},h={},u=[{value:"Live-Editor",id:"live-editor",level:2}];function x(e){const n={h2:"h2",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(d._,{component:"link-group"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},35863:(e,n,i)=>{i.d(n,{_:()=>a});var l=i(32404),r=i(50959),s=i(11527);const t=function(e,n,i,l,r){return void 0===r&&(r="editor"),`${e}&module=${l}&initialpath=%23%2F${n}%2F${i}&view=${r}`},d={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(l.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},a=e=>{let{component:n,sample:i}=e;const[a,c]=(0,r.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${n}/${i}?hideMenus`,j={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,s.jsxs)(l.UD,{className:"w-full",_label:"Code-Beispiel",_on:j,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===a&&(0,s.jsx)("iframe",{src:p,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===a&&(0,s.jsx)(o,{url:t(h,n,i,x.angular)})}),(0,s.jsx)("div",{children:"React"===a&&(0,s.jsx)(o,{url:t(h,n,i,x.react)})}),(0,s.jsx)("div",{children:"Vue"===a&&(0,s.jsx)(o,{url:t(h,n,i,x.vue)})}),(0,s.jsx)("div",{children:"Web Component"===a&&(0,s.jsx)(o,{url:t(h,n,i,x.webcomponent)})})]})}},94383:(e,n,i)=>{i.d(n,{_:()=>k});var l=i(7794),r=i(32404),s=i(50959),t=i(1206),d=i(11527);function o(e){const{label:n,name:i,update:l,value:t}=e;return(0,s.useEffect)((()=>{t||l(i,"#000000")}),[]),(0,d.jsx)(r.Np,{_label:"",_on:{onChange:(e,n)=>l(i,n)},_value:t,children:(0,d.jsx)("span",{slot:"expert",children:n})})}function a(e){const{attribute:n,label:i,update:l}=e,[t,o]=(0,s.useState)(""),[a,c]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[x,p]=(0,s.useState)("");let j=!1,b=!1,m=!1,g=!1;n.type.includes("KoliBriAllIcon")?(j=!0,b=!0,m=!0,g=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,g=!0),n.type.includes("KoliBriHorizontalIcon")&&(j=!0,b=!0)),(0,s.useEffect)((()=>{if(!t||a||h||x){const e={};t&&(e.left=`codicon codicon-${t}`),a&&(e.right=`codicon codicon-${a}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&l(n.name,JSON.stringify(e))}else l(n.name,`codicon codicon-${t}`)}),[t,a,h,x]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,d.jsxs)("div",{children:[i,j?(0,d.jsx)(r.ox,{_label:"Links",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,d.jsx)(r.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",b?(0,d.jsx)(r.ox,{_label:"Rechts",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,d.jsx)(r.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",m?(0,d.jsx)(r.ox,{_label:"Oben",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,d.jsx)(r.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",g?(0,d.jsx)(r.ox,{_label:"Unten",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,d.jsx)(r.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:l,update:s,value:t}=e,o=[];function a(e){return{label:e,value:e}}return l.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...l.filter((e=>"undefined"!==e)).map(a))):o.push(...l.filter((e=>"undefined"!==e)).map(a)),(0,d.jsx)(r.r7,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onChange:(e,i)=>s(n,i[0])},_value:t?[t]:void 0,children:(0,d.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:l}=e,t=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,d.jsx)(r.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,d.jsx)(o,{name:n.name,label:s,update:i,value:l});case"_icon":return(0,d.jsx)(a,{attribute:n,label:s,update:i,value:l});default:switch(t){case"string":return(0,d.jsx)(r.WD,{className:"my-2",_label:"",_on:{onChange:(e,l)=>i(n.name,l)},_value:l||"",children:(0,d.jsx)("span",{slot:"expert",children:s})});case"number":return(0,d.jsx)(r.c2,{className:"my-2",_label:"",_on:{onChange:(e,l)=>i(n.name,l)},_value:l,children:(0,d.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,d.jsx)(r.TE,{className:"my-2",_checked:!0===l,_label:"",_on:{onChange:(e,l)=>i(n.name,l)},_variant:"switch",_value:!0,children:(0,d.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,d.jsx)(c,{label:s,name:n.name,types:e,update:i,value:l}):(0,d.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,d.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,l]);return(0,d.jsx)(d.Fragment,{children:h})}var u=i(22115),x=i(77192),p=i(85630),j=i.n(p);function b(e){const{tag:n,params:i}=e,l=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let r="";const t=(0,s.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],l=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${l}"`+i.substring(n)}else e+=`<div slot="${l}">${i}</div>`})),e}),[i]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[s,d]of o)if(d){let e="";switch(typeof d){case"string":e=` ${s}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${d.toString()}"`;break;case"boolean":e=d?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const a=`<kol-${n}${r}>${t}</kol-${n}>`;let c;try{c=(0,x.format)(a,{plugins:[j()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${a}`}return(0,d.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,d.jsx)(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),l={abbr:r.T5,accordion:r.RZ,alert:r.K5,avatar:r.Ek,badge:r.Er,breadcrumb:r.lo,button:r.ic,"button-group":r.uz,"button-link":r.f6,card:r.Gc,details:r.ox,form:r.m5,heading:r.HA,icon:r.Jl,image:r.Cd,"indented-text":r.CV,"input-checkbox":r.TE,"input-color":r.Np,"input-date":r.O,"input-email":r.Lj,"input-file":r.CX,"input-number":r.c2,"input-password":r.z5,"input-radio":r.sy,"input-range":r.TQ,"input-text":r.WD,kolibri:r.Vs,link:r.Nv,"link-button":r.Kc,"link-group":r.$o,logo:r.QK,modal:r.Ud,nav:r.MA,pagination:r.Q4,progress:r.WR,quote:r.VZ,select:r.r7,"skip-nav":r.P,spin:r.qq,"split-button":r.KJ,symbol:r.is,table:r.Vp,tabs:r.UD,textarea:r.Qs,version:r.u_}[e.tag];return l?(0,d.jsx)(l,{...n,children:i.map((e=>(0,d.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,d.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:n,name:i,update:l,value:r}=e;return(0,d.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,d.jsx)("b",{children:i||"default"}),": ",n,(0,d.jsx)("br",{}),(0,d.jsx)(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r})]})}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,s.useState)(function(){const e={};return Object.values(l.p).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const l=`slot-${n.name||"default"}`,r=_[i]?.[l];r&&(e[i][l]=r)}))})),e}()),[o,a]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&a(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&u("_label","Label-Text");!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&u("_heading","Heading-Text")}),[o]);const c=(0,s.useMemo)((()=>n[o]||{}),[n,o]);function u(e,n){i((i=>{const l={...i[o],[e]:n,defaultValues:i[o].defaultValues.filter((n=>n!==e))};return{...i,[o]:l}}))}const x=Object.values(l.p).find((e=>e.name===`kol-${o}`));return(0,d.jsx)(t.Z,{children:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,d.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,d.jsxs)(r.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(m,{tag:o,params:c})}),(0,d.jsx)("div",{className:"lg:col-span-2",children:(0,d.jsx)(b,{params:c,tag:o})})]}),(0,d.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,d.jsx)(r.HA,{_level:3,_label:"Konfigurator"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(r.HA,{_level:4,_label:"Properties"}),(0,d.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,d.jsx)(d.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,d.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,d.jsx)(r.HA,{_level:4,_label:"Slots"}),(0,d.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,d.jsx)(g,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);