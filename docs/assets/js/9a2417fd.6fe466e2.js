"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[37398],{25987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(11527),r=t(16034);const s={title:"Inputs, Select und Textarea",description:"KoliBri schafft barrierefreie HTML-Kompositionen und h\xe4lt sich dabei streng an die W3C-Spezifikation.",tags:["Architektur","arc42","Konzept"]},l=void 0,o={id:"concepts/formular",title:"Inputs, Select und Textarea",description:"KoliBri schafft barrierefreie HTML-Kompositionen und h\xe4lt sich dabei streng an die W3C-Spezifikation.",source:"@site/versioned_docs/version-2.0/20-concepts/09-formular.mdx",sourceDirName:"20-concepts",slug:"/concepts/formular",permalink:"/docs/concepts/formular",draft:!1,unlisted:!1,tags:[{label:"Architektur",permalink:"/docs/tags/architektur"},{label:"arc42",permalink:"/docs/tags/arc-42"},{label:"Konzept",permalink:"/docs/tags/konzept"}],version:"2.0",sidebarPosition:9,frontMatter:{title:"Inputs, Select und Textarea",description:"KoliBri schafft barrierefreie HTML-Kompositionen und h\xe4lt sich dabei streng an die W3C-Spezifikation.",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Expert-Slot",permalink:"/docs/concepts/expert-slot"},next:{title:"Datenschutz",permalink:"/docs/concepts/datenschutz"}},a={},c=[{value:"Vergleich zum HTML-Tag &lt;input&gt;",id:"vergleich-zum-html-tag-input",level:2},{value:"Aufteilung",id:"aufteilung",level:2}];function u(e){const n={h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Im Rahmen des Refactorings zur Verbesserung der Developer Experience haben wir die Input-Komponenten neu strukturiert\nund sie gem\xe4\xdf der ",(0,i.jsx)("kol-link",{_href:"https://html.spec.whatwg.org/multipage/input.html",_target:"w3c",_label:"W3C-Aufteilung"}),' in separierte Komponenten umgesetzt.\nAuf diese Weise stellen die jeweiligen Komponenten nur noch die Eigenschaften zur Verf\xfcgung, die beim jeweiligen Typ auch eine Funktion haben. Eigenschaften die zuvor\n"mitgeschleppt" wurden, aber keinerlei Funktion haben, wurden aus der Programmierung entfernt.']}),"\n",(0,i.jsx)(n.h2,{id:"vergleich-zum-html-tag-input",children:"Vergleich zum HTML-Tag <input>"}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.p,{children:["Schaut man sich die"," "]}),(0,i.jsx)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/Input",_target:"mozilla",_label:"",children:(0,i.jsxs)(n.p,{children:["Umsetzung des ",(0,i.jsx)("code",{children:"<input>"}),"-Tags"]})})," ",(0,i.jsx)(n.p,{children:"an, dann werden alle Typen eines Eingabefelds mit nur einem Tag (Komponente) umgesetzt. Dadurch kommt es dazu, dass\nzwar alle Eigenschaften (Attribute/Properties) m\xf6glich sind, aber in Abh\xe4ngigkeit vom Typ keinerlei Funktion haben."})]}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Diese Umsetzung des Standard-",(0,i.jsx)("code",{children:"<input>"}),"-Tags f\xfchrt dazu, dass i.d.R. mehr Eigenschaften angeboten\nwerden, als eigentlich funktional zum Typ des Eingabefeldes passen. Das kann zu Missverst\xe4ndnissen bei der Entwicklung\nf\xfchren."]})}),"\n",(0,i.jsx)(n.h2,{id:"aufteilung",children:"Aufteilung"}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Die verschiedenen Typen der Eingabefelder wurden in folgende ",(0,i.jsx)("b",{children:"KoliBri"}),"-Komponenten aufgeteilt:"]})}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"KolInputCheckbox"}),(0,i.jsx)("li",{children:"KolInputColor"}),(0,i.jsx)("li",{children:"KolInputDate (ab v1.1.10)"}),(0,i.jsx)("li",{children:"KolInputEmail"}),(0,i.jsx)("li",{children:"KolInputFile"}),(0,i.jsx)("li",{children:"KolInputLocalDateTime (offen, in KolInputDate enthalten)"}),(0,i.jsx)("li",{children:"KolInputNumber"}),(0,i.jsx)("li",{children:"KolInputPassword"}),(0,i.jsx)("li",{children:"KolInputRadio (KolInputRadioGroup wird abgel\xf6st)"}),(0,i.jsx)("li",{children:"KolInputRange"}),(0,i.jsx)("li",{children:"KolInputText"}),(0,i.jsx)("li",{children:"KolSelect"}),(0,i.jsx)("li",{children:"KolTextarea"})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},16034:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(50959);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);