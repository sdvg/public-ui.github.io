"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[85445],{2873:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=i(11527),r=i(16034);const o={authors:"deleonio",tags:["theming","icon","font"]},s="Wie kann ich Icons im Theme \xe4ndern?",l={permalink:"/blog/2023/05/12/",source:"@site/blog/2023-05-12.mdx",title:"Wie kann ich Icons im Theme \xe4ndern?",description:"Heute wollen wir in einem kurzen Blog-Post zeigen, wie Ihr die standardm\xe4\xdfig hinterlegten Icons \xfcber das Theming (Theme-Designer) \xe4ndern k\xf6nnt.",date:"2023-05-12T00:00:00.000Z",formattedDate:"12. Mai 2023",tags:[{label:"theming",permalink:"/blog/tags/theming"},{label:"icon",permalink:"/blog/tags/icon"},{label:"font",permalink:"/blog/tags/font"}],readingTime:2.09,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{authors:"deleonio",tags:["theming","icon","font"]},unlisted:!1,prevItem:{title:"Wie kann ich einen eigenen Button-Typ hinzuf\xfcgen?",permalink:"/blog/2023/06/05/"},nextItem:{title:"Ank\xfcndigung Release 1.5",permalink:"/blog/2023/05/03/"}},c={authorsImageUrls:[void 0]},a=[{value:"1. Icon-Font integrieren",id:"1-icon-font-integrieren",level:2},{value:"Icon-Font im Theme hinterlegen",id:"icon-font-im-theme-hinterlegen",level:2},{value:"Standard-Icons im Theme \xe4ndern",id:"standard-icons-im-theme-\xe4ndern",level:2},{value:"FAQ",id:"faq",level:2},{value:"Warum h\xe4ngt das Icon im KolIcon etwas tiefer?",id:"warum-h\xe4ngt-das-icon-im-kolicon-etwas-tiefer",level:3},{value:"Warum kann ich die Schriftgr\xf6\xdfe nicht \xe4ndern?",id:"warum-kann-ich-die-schriftgr\xf6\xdfe-nicht-\xe4ndern",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Heute wollen wir in einem kurzen Blog-Post zeigen, wie Ihr die standardm\xe4\xdfig hinterlegten Icons \xfcber das Theming (Theme-Designer) \xe4ndern k\xf6nnt."}),"\n",(0,t.jsx)(n.h2,{id:"1-icon-font-integrieren",children:"1. Icon-Font integrieren"}),"\n",(0,t.jsx)(n.p,{children:"Damit Icons angezeigt werden k\xf6nnen, muss zun\xe4chst die gew\xfcnschte Icon-Font (z.B. Font Awesome Free) in der Webseite (HTML) eingebunden werden. Dies geschieht in der Regel mittels folgendem HTML:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<head>\n\t<link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css">\n</head>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"icon-font-im-theme-hinterlegen",children:"Icon-Font im Theme hinterlegen"}),"\n",(0,t.jsx)(n.p,{children:"Die Icon-Komponente von KoliBri kapselt die Icon-Font und muss daher die CSS-Definitionen von den im Design System ausgew\xe4hlten Icon-Identifier kennen.\nDazu muss das CSS aus der gleichen CSS-Datei, wie aus 1., in das Theme kopiert und damit hinterlegt werden."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Theme-Designer \xf6ffnen"}),"\n",(0,t.jsx)(n.li,{children:"Theme ausw\xe4hlen"}),"\n",(0,t.jsx)(n.li,{children:"Icon-Komponente ausw\xe4hlen"}),"\n",(0,t.jsx)(n.li,{children:"Schalter auf Komponent-Styling umstellen"}),"\n",(0,t.jsx)(n.li,{children:"CSS aus der Icon-Font einf\xfcgen und speichern"}),"\n",(0,t.jsx)(n.li,{children:"Theme in Projekt \xfcbernehmen"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"standard-icons-im-theme-\xe4ndern",children:"Standard-Icons im Theme \xe4ndern"}),"\n",(0,t.jsxs)(n.p,{children:["Das \xc4ndern eines Icons ist ganz einfach, wenn folgendes Prinzip klar ist. Alle Icons werden durch die Web Component ",(0,t.jsx)(n.code,{children:"kol-icon"})," abgebildet. Diese Komponente\nexportiert immer den Part ",(0,t.jsx)(n.code,{children:"icon"}),". \xdcber einen Part kann man auf festgelegte CSS-Eigenschaften innerhalb einer Web Component zugreifen. Exemplarisch sieht das\nso aus:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"kol-icon::part(icon) {\n\tfont-family: 'Font Awesome 6 Free';\n\tfont-weight: 900;\n}\nkol-icon::part(icon):before {\n\tcontent: '\ud83d\ude03';\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Um ein Icon \xfcber den Designer zu \xe4ndern, sind folgende Schritte zu durchlaufen:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Theme-Designer \xf6ffnen"}),"\n",(0,t.jsx)(n.li,{children:"Theme ausw\xe4hlen"}),"\n",(0,t.jsx)(n.li,{children:"Komponente ausw\xe4hlen, wo ein Icon ge\xe4ndert werden soll"}),"\n",(0,t.jsx)(n.li,{children:"Schalter auf Komponent-Styling umstellen"}),"\n",(0,t.jsx)(n.li,{children:"Spezifischen Selektor auf ein Icon ermitteln"}),"\n",(0,t.jsx)(n.li,{children:"Spezifischen Selektor verwenden, um Schriftart und Content anzupassen"}),"\n",(0,t.jsx)(n.li,{children:"Komponent-CSS speichern"}),"\n",(0,t.jsx)(n.li,{children:"Theme in Projekt \xfcbernehmen"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Hier mal ein komplexeres Beispiel f\xfcr die Pagination:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"kol-button::part(icon) {\n\tfont-family: 'Font Awesome 6 Free';\n\tfont-weight: 900;\n}\nkol-button.first::part(icon):before,\nkol-button.previous::part(icon):before,\nkol-button.next::part(icon):before,\nkol-button.last::part(icon):before {\n\tcontent: '\ud83d\ude03';\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.h3,{id:"warum-h\xe4ngt-das-icon-im-kolicon-etwas-tiefer",children:"Warum h\xe4ngt das Icon im KolIcon etwas tiefer?"}),"\n",(0,t.jsxs)(n.p,{children:["Mit der CSS-Definition ",(0,t.jsx)(n.code,{children:"display: contents;"})," am ",(0,t.jsx)(n.code,{children:"kol-icon"}),"-Tag wird das Icon passend ausgerichtet. Die Ausrichtung der Icon-Komponente innerhalb anderer Komponenten h\xe4ngt immer von der jeweiligen Verwendung ab."]}),"\n",(0,t.jsx)(n.h3,{id:"warum-kann-ich-die-schriftgr\xf6\xdfe-nicht-\xe4ndern",children:"Warum kann ich die Schriftgr\xf6\xdfe nicht \xe4ndern?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"kol-icon::part(icon) {\n\tfont-family: 'Font Awesome 6 Free';\n\tfont-size: 2rem !important;\n\tfont-weight: 900;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Der Grund liegt in der ",(0,t.jsx)(n.code,{children:"font"})," CSS-Definition in der Icon-Font selbst und in der Notwendigkeit, die Schriftgr\xf6\xdfe\nbei Icons von Au\xdfen setzen \xfcbernehmen (erben)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".codicon[class*='codicon-'] {\n\tfont: 16px / 1 codicon;\n}\n:host > i,\n:host > i::before {\n\tfont-size: inherit !important;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"M\xf6chte man ein Icon in seiner Gr\xf6\xdfe anpassen, so kann man das einfach von Au\xdfen tun."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"kol-icon {\n\tfont-size: 2rem;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},16034:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(50959);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);