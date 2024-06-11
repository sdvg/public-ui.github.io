"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[93316],{89564:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var t=r(76776),i=r(108);function s(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"preview"})}),"\n",(0,t.jsx)("kol-alert",{_type:"warning",_variant:"card",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("kol-badge",{_color:"#476af5",_label:"Preview"})," Diese neue Komponente wird als ungetestet markiert, da die Barrierefreiheitstests noch ausstehen. Die verschiedenen Tests k\xf6nnen aufgrund der Modularit\xe4t bei neuen Komponenten und Funktionalit\xe4ten meist erst nach einem Release erfolgen. Wir empfehlen daher, die Komponente noch nicht in Produktion zu verwenden."]})}),"\n",(0,t.jsxs)(n.p,{children:["Die Komponente ",(0,t.jsx)(n.strong,{children:"Toolbar"})," ist eine Sammlung h\xe4ufig verwendeter Steuerelemente f\xfcr Schaltfl\xe4chen und Links, die in einer kompakten visuellen Form zusammengefasst sind. Die Toolbar ist in der Regel eine Untermenge von Funktionen, die in einer Men\xfcleiste zu finden sind, um den Aufwand f\xfcr den Benutzer zu verringern."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<kol-toolbar _label=\"Label\" _items=\"[{'_label': 'Button',},{'_href': '#','_label': 'Link'}]\"> </kol-toolbar>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)("kol-toolbar",{_label:"Label",_items:"[{'_label': 'Button',},{'_href': '#','_label': 'Link'}]"}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsxs)(n.p,{children:["Verwenden Sie die ",(0,t.jsx)(n.strong,{children:"Toolbar"}),"-Komponente wenn die Navigation von verschiedenen Buttons und Links erm\xf6glicht werden soll, z.B. um den Inhalt einer Textarea zu formatieren.\nMit Hilfe des Attributs ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_label"})})," kann das ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"aria-label"})})," gesetzt werden.\n\xdcber das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_items"})})," werden die einzelnen Funktionen in der Toolbar gesetzt.\nDer ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"tabIndex"})})," wird von der ",(0,t.jsx)(n.strong,{children:"Toolbar"}),"-Komponente gesteuert. Default ist hierbei immer das erste aktive Elemente in der ",(0,t.jsx)(n.strong,{children:"Toolbar"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"unterst\xfctzte-toolbar-komponenten",children:["Unterst\xfctzte ",(0,t.jsx)(n.strong,{children:"Toolbar"}),"-Komponenten"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Link"}),"\n",(0,t.jsx)(n.li,{children:"Button"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.strong,{children:"Toolbar"}),"-Komponente erkennt hierbei selbst\xe4ndig durch das ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_href"})}),"-Attribut, ob es sich um eine ",(0,t.jsx)(n.strong,{children:"Link"}),"- oder ",(0,t.jsx)(n.strong,{children:"Button"}),"-Komponente handelt."]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Erster Tab fokussiert die Toolbar. Zweiter das erste aktive Element und dritter setzt den Standard wieder her."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Pfeil-Tasten"})}),(0,t.jsx)(n.td,{children:"K\xf6nnen f\xfcr die Navigation der Element in der fokussierten Toolbar verwendet werden."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_items"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Defines the functional elements of toolbar to render (e.g. kol-link, kol-button)."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ToolbarItemPropType[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_label"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:"Defines the semantic aria-label of the component."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const l={title:"Toolbar",description:"Beschreibung und Spezifikation f\xfcr die Toolbar-Komponente.",tags:["Toolbar","Beschreibung","Spezifikation"]},d=void 0,a={id:"components/toolbar",title:"Toolbar",description:"Beschreibung und Spezifikation f\xfcr die Toolbar-Komponente.",source:"@site/docs/30-components/toolbar.mdx",sourceDirName:"30-components",slug:"/components/toolbar",permalink:"/docs/next/components/toolbar",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Toolbar",permalink:"/docs/next/tags/toolbar"},{inline:!0,label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"}],version:"current",frontMatter:{title:"Toolbar",description:"Beschreibung und Spezifikation f\xfcr die Toolbar-Komponente.",tags:["Toolbar","Beschreibung","Spezifikation"]},sidebar:"tutorialSidebar",previous:{title:"Toaster",permalink:"/docs/next/components/toaster"},next:{title:"Tooltip",permalink:"/docs/next/components/tooltip"}},c={},h=[{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Unterst\xfctzte <strong>Toolbar</strong>-Komponenten",id:"unterst\xfctzte-toolbar-komponenten",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2}];function u(e){return(0,t.jsx)(o,{})}function x(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u()}},108:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var t=r(80924);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);