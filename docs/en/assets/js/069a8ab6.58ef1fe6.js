"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[37258],{80944:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=i(76776),t=i(108);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("kol-alert",{_type:"info",_variant:"card",children:["Die ",(0,r.jsx)(n.strong,{children:"Tooltip"}),"-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird."]}),"\n",(0,r.jsxs)(n.p,{children:["Die ",(0,r.jsx)(n.strong,{children:"Tooltip"}),"-Komponente implementiert das Gegenst\xfcck zum ",(0,r.jsx)(n.code,{children:"Aria-Label"}),". Es ist also explizit nur daf\xfcr vorgesehen, dem/der Nutzer",":in"," ohne Screenreader die Beschriftung eines Elementes anzuzeigen."]}),"\n",(0,r.jsxs)(n.p,{children:["Ein ge\xf6ffneter Tooltip l\xe4sst sich mit der ",(0,r.jsx)(n.code,{children:"Escape"}),"-Taste schlie\xdfen, um ggf. \xfcberlagerte Seiteninformationen wieder sichtbar zu machen."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Hinweis:"})," Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht ",(0,r.jsx)(n.code,{children:"display: inline"})," haben."]}),"\n",(0,r.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,r.jsxs)(n.p,{children:["Die Tooltip-Komponente wird bei Fokus oder bei Bewegen der Maus \xfcber dem Referenzelement angezeigt und dient ausschlie\xdflich dem/der sehenden Nutzer",":in"," ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xf6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xfcr die Screenreader versteckt."]}),"\n",(0,r.jsx)("kol-alert",{_type:"info",children:(0,r.jsx)(n.p,{children:"Aus Sicht des Barrierefreiheitstests k\xf6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird."})}),"\n",(0,r.jsx)(n.h2,{id:"breite",children:"Breite"}),"\n",(0,r.jsxs)(n.p,{children:["Die Breite des Tooltips richtet sich normalerweise nach ihrem Inhalt.\nUm die Breite eines Tooltips zu konfigurieren, kann auf dem umgebenden Container eine ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS-Custom-Property"})," wie folgt definiert werden:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".container {\n --kol-tooltip-width': '40rem';\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_accessKey"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_access-key"})}),(0,r.jsx)(n.td,{children:"Defines the elements access key."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.code,{children:"undefined"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"undefined"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_align"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_align"})}),(0,r.jsx)(n.td,{children:"Defines the alignment of the tooltip, popover or tabs in relation to the element."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:'"bottom"'})," | ",(0,r.jsx)(n.code,{children:'"left"'})," | ",(0,r.jsx)(n.code,{children:'"right"'})," | ",(0,r.jsx)(n.code,{children:'"top"'})," | ",(0,r.jsx)(n.code,{children:"undefined"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'top'"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_id"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_id"})}),(0,r.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.code,{children:"undefined"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"undefined"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"_label"})," ",(0,r.jsx)(n.em,{children:"(required)"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_label"})}),(0,r.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,r.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const o={title:"Tooltip",description:"Beschreibung und Spezifikation f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation"]},l=void 0,c={id:"components/tooltip",title:"Tooltip",description:"Beschreibung und Spezifikation f\xfcr die Tooltip-Komponente.",source:"@site/versioned_docs/version-2.1/30-components/tooltip.mdx",sourceDirName:"30-components",slug:"/components/tooltip",permalink:"/en/docs/components/tooltip",draft:!1,unlisted:!1,tags:[{label:"Tooltip",permalink:"/en/docs/tags/tooltip"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"}],version:"2.1",frontMatter:{title:"Tooltip",description:"Beschreibung und Spezifikation f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation"]},sidebar:"tutorialSidebar",previous:{title:"Toaster",permalink:"/en/docs/components/toaster"},next:{title:"Tree Item",permalink:"/en/docs/components/tree-item"}},h={},a=[{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Breite",id:"breite",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2}];function p(e){return(0,r.jsx)(d,{})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p()}},108:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>d});var r=i(80924);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);