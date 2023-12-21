"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[34930],{86524:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var l=i(11527),t=i(16034),r=i(32404);const s={title:"Ank\xfcndigung Release 1.6",authors:"deleonio",tags:["release","neuerungen"]},o="Ank\xfcndigung - Release 1.6",d={permalink:"/en/blog/2023/06/08/",source:"@site/blog/2023-06-08.mdx",title:"Ank\xfcndigung Release 1.6",description:"WIP: Dieser Artikel wird immer wieder entwicklungsbegleitend aktualisiert.",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"release",permalink:"/en/blog/tags/release"},{label:"neuerungen",permalink:"/en/blog/tags/neuerungen"}],readingTime:1.01,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Ank\xfcndigung Release 1.6",authors:"deleonio",tags:["release","neuerungen"]},unlisted:!1,prevItem:{title:"Component Library vs. Design System",permalink:"/en/blog/2023/06/28/"},nextItem:{title:"How can I add a custom button type?",permalink:"/en/blog/2023/06/05/"}},c={authorsImageUrls:[void 0]},a=[];function u(e){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WIP:"})," Dieser Artikel wird immer wieder entwicklungsbegleitend aktualisiert."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Die wichtigsten \xc4nderungen sind:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Verbesserungen"}),"\n",(0,l.jsxs)(n.li,{children:["Refactorings","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Vereinheitlichung von Properties der Komponenten (siehe ",(0,l.jsx)(r.Nv,{_href:"/docs/concepts/properties",_label:"Eigenschaften"}),"-Konzept)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_alignment"})," vom Popover in ",(0,l.jsx)(n.code,{children:"_align"})," umbenannt"]}),"\n",(0,l.jsxs)(n.li,{children:["Typ ",(0,l.jsx)(n.code,{children:"Alignment"})," wurde intern in ",(0,l.jsx)(n.code,{children:"Align"})," umbenannt"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_label"})," wird in Version 2 folgende Properties ersetzen:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_aria-label"})," von Breadcrumb, Button, ButtonLink, Icon, Link, LinkButton, Modal, Nav, SkipNav, SplitButton, Symbol und Tabs"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_caption"})," von Quote und Table"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_heading"})," von Accordion, Alert, Card und Toast"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_headline"})," von Card"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_quote"})," von Quote (?)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_summary"})," von Details"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_symbol"})," von Symbol"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_title"})," von Abbr"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Properties, die zuk\xfcnftig nicht mehr ben\xf6tigt werden","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_has-footer"})," von Card"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_height_"})," von Select"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_icon-align"})," ..."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_part"})," ..."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"_show-dropdown"})," ..."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Expert-Slot","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Alle Inputs-, Select- und Textarea-Komponenten haben nun einen Expert-Slot und das ",(0,l.jsx)(n.code,{children:"_label"})," ist Pflicht. Wenn das ",(0,l.jsx)(n.code,{children:'_label=""'})," leer bleibt, dann wird das Label \xfcber den Slot, wie gewohnt angezeigt."]}),"\n",(0,l.jsxs)(n.li,{children:["Code-Replacement - am besten einzeln ersetzen:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"(<Kol(Button|Button|Link|Heading|Input[^>]+|Link|LinkButton|Select|Textarea))>(\\n?\\t*)([^\\n]+)[^<]+<\\/Kol(Button|Button|Link|Heading|Input[^>]+|Link|LinkButton|Select|Textarea)>"})," -> ",(0,l.jsx)(n.code,{children:'$1 _label="$5" />'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Theming"}),"\n",(0,l.jsx)(n.li,{children:"Dokumentation"}),"\n",(0,l.jsxs)(n.li,{children:["Adapter","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Vaadin: Optimierungen am Code-Generator"}),"\n",(0,l.jsx)(n.li,{children:"JSF: Verbesserung f\xfcr statische/klassische Formulare (experimental)"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},16034:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var l=i(50959);const t={},r=l.createContext(t);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);