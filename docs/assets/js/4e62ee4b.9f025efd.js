"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[57368],{86327:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(11527),r=i(16034);const o={title:"Swizzling",description:"Komplexere Anforderungen an die Komponenten k\xf6nnen mittels Swippling erm\xf6glicht werden.",tags:["Architektur","arc42","Konzept"]},s=void 0,a={id:"concepts/swizzling",title:"Swizzling",description:"Komplexere Anforderungen an die Komponenten k\xf6nnen mittels Swippling erm\xf6glicht werden.",source:"@site/versioned_docs/version-1.7/20-concepts/07-swizzling.md",sourceDirName:"20-concepts",slug:"/concepts/swizzling",permalink:"/docs/1.7/concepts/swizzling",draft:!1,unlisted:!1,tags:[{label:"Architektur",permalink:"/docs/1.7/tags/architektur"},{label:"arc42",permalink:"/docs/1.7/tags/arc-42"},{label:"Konzept",permalink:"/docs/1.7/tags/konzept"}],version:"1.7",sidebarPosition:7,frontMatter:{title:"Swizzling",description:"Komplexere Anforderungen an die Komponenten k\xf6nnen mittels Swippling erm\xf6glicht werden.",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Scss",permalink:"/docs/1.7/concepts/styling/scss"},next:{title:"Expert-Slot",permalink:"/docs/1.7/concepts/expert-slot"}},l={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Definition",id:"definition",level:2},{value:"Varianten",id:"varianten",level:2},{value:"Wrapping",id:"wrapping",level:3},{value:"Overwriting",id:"overwriting",level:3}];function c(e){const n={h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsx)(n.p,{children:"Zahlreiche teils komplexe Anforderungen an Komponenten von Design-Systemen oder Komponenten-Bibliotheken m\xfcssten nicht immer wieder aufs Neue betrachtet werden, wenn es kleinteilige, gut wiederverwendbare Basis-Komponenten g\xe4be, die diese Anforderungen mit sich bringen."}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.p,{children:"Unter Swippling definieren wir die M\xf6glichkeit eine vorhandene Komponente entweder von Au\xdfen modifizieren zu k\xf6nnen oder die innere Konstruktion zu ersetzen. Beides zahlt in eine hohe Wiederverwendbarkeit ein."}),"\n",(0,t.jsx)(n.h2,{id:"varianten",children:"Varianten"}),"\n",(0,t.jsx)(n.h3,{id:"wrapping",children:"Wrapping"}),"\n",(0,t.jsx)(n.p,{children:"Die einfachste Methode eine KoliBri-Komponente auf eigene Bed\xfcrfnisse anzupassen, ist das Wrapping. Hierbei wird eine eigene Komponente um die KoliBri-Komponente (Dekorator-Pattern) drumherum gebaut und au\xdfen individualisiert."}),"\n",(0,t.jsx)(n.h3,{id:"overwriting",children:"Overwriting"}),"\n",(0,t.jsxs)(n.p,{children:["Eine andere Variante des Swippling ist das Overwriting der inneren Komponenten-Konstruktion. Bei Web Components wird dies h\xe4ufig mittels Slots gemacht. In KoliBri haben wir daf\xfcr die ",(0,t.jsx)("kol-link",{_href:"expert-slot",_label:"Expert-Slots"})," eingef\xfchrt."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},16034:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(50959);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);