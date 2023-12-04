"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[86411],{18776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(11527),s=t(16034);const l={title:"Wie style ich eine Komponente?",authors:"deleonio",tags:["theme","tutorial"]},a="Wie style ich eine Komponente?",o={permalink:"/blog/2023/02/23/",source:"@site/blog/2023-02-23.mdx",title:"Wie style ich eine Komponente?",description:"Am Beispiel der Badge-Komponente wollen wir einmal schauen, wie das Stylen funktioniert.",date:"2023-02-23T00:00:00.000Z",formattedDate:"23. Februar 2023",tags:[{label:"theme",permalink:"/blog/tags/theme"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:1.74,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Wie style ich eine Komponente?",authors:"deleonio",tags:["theme","tutorial"]},unlisted:!1,prevItem:{title:"Ank\xfcndigung Release 1.5",permalink:"/blog/2023/05/03/"},nextItem:{title:"Eigene Themes unabh\xe4ngig umsetzen",permalink:"/blog/2023/02/02/"}},r={authorsImageUrls:[void 0]},d=[{value:"Herausforderung",id:"herausforderung",level:2},{value:"L\xf6sung",id:"l\xf6sung",level:2},{value:"Idee 1",id:"idee-1",level:3},{value:"Idee 2",id:"idee-2",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Am Beispiel der Badge-Komponente wollen wir einmal schauen, wie das Stylen funktioniert."}),"\n",(0,i.jsx)(n.h2,{id:"herausforderung",children:"Herausforderung"}),"\n",(0,i.jsx)(n.p,{children:"Die Badge-Komponente hat einen Smart-Button und der soll optisch kleiner aussehen, wie ein Button, der immer mindestens\n44px hoch und breit ist."}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Bild einf\xfcgen vorher"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Wir sehen im nachfolgenden HTML-Snippet, dass der umschlie\xdfende Span die Badge-Hintergrundfarbe bestimmt. Da\nder Button innerhalb des Span ist, wird die Hintergrundfarbe auch auf den Button gesetzt. Der Button muss\nmindestens 44px hoch und breit sein, also wird auch der \xe4u\xdfere Span mindestens 44px hoch und breit.\n",(0,i.jsx)(n.strong,{children:"Das wollen wir nicht."})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<span class="smart-button" style="background-color: rgb(204, 222, 218); color: rgb(0, 78, 55);">\n\t<kol-span-wc class="hydrated">\n\t\t<span>\n\t\t\t<span>Badge mit Schalter</span>\n\t\t</span>\n\t</kol-span-wc>\n\t<kol-button-wc _hide-label="" class="hydrated">\n\t\t<button aria-labelledby="cf22bf" class="normal icon-only" type="button">\n\t\t\t<kol-span-wc class="icon-only hydrated" _hide-label="">\n\t\t\t\t<span>\n\t\t\t\t\t<kol-icon class="icon left hydrated" style=""></kol-icon>\n\t\t\t\t</span>\n\t\t\t</kol-span-wc>\n\t\t</button>\n\t\t<kol-tooltip aria-hidden="true" class="hydrated">\n\t\t\t<div id="floating" style="left: 1233.91px; top: 312.5px; display: none; visibility: hidden;">\n\t\t\t\t<div id="arrow" style="left: 19px; bottom: -5px;"></div>\n\t\t\t\t<kol-badge id="cf22bf" class="hydrated" style=""></kol-badge>\n\t\t\t</div>\n\t\t</kol-tooltip>\n\t</kol-button-wc>\n</span>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"l\xf6sung",children:"L\xf6sung"}),"\n",(0,i.jsx)(n.h3,{id:"idee-1",children:"Idee 1"}),"\n",(0,i.jsx)(n.p,{children:"Wir optimieren die Komponente, indem wir die Hintergrundfarbe vom umschlie\xdfenden Span entfernen und auf die beiden\ninneren Span-Elemente \xfcbertragen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<span class="smart-button" style="color: rgb(0, 78, 55);">\n\t<kol-span-wc class="hydrated" style="background-color: rgb(204, 222, 218);">\n\t\t<span>\n\t\t\t<span>Badge mit Schalter</span>\n\t\t</span>\n\t</kol-span-wc>\n\t<kol-button-wc _hide-label="" class="hydrated">\n\t\t<button aria-labelledby="cf22bf" class="normal icon-only" type="button">\n\t\t\t<kol-span-wc class="icon-only hydrated" _hide-label="" style="background-color: rgb(204, 222, 218);">\n\t\t\t\t<span>\n\t\t\t\t\t<kol-icon class="icon left hydrated" style=""></kol-icon>\n\t\t\t\t</span>\n\t\t\t</kol-span-wc>\n\t\t</button>\n\t\t<kol-tooltip aria-hidden="true" class="hydrated">\n\t\t\t<div id="floating" style="left: 1233.91px; top: 312.5px; display: none; visibility: hidden;">\n\t\t\t\t<div id="arrow" style="left: 19px; bottom: -5px;"></div>\n\t\t\t\t<kol-badge id="cf22bf" class="hydrated" style=""></kol-badge>\n\t\t\t</div>\n\t\t</kol-tooltip>\n\t</kol-button-wc>\n</span>\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Das geht aber nicht"}),", weil wir an den 2. Span nicht rankommen. Wir m\xfcssen also eine andere L\xf6sung finden."]}),"\n",(0,i.jsx)(n.h3,{id:"idee-2",children:"Idee 2"}),"\n",(0,i.jsx)(n.p,{children:"Es bleibt beim der initialen Komponenten-Konstruktion. Wir versuchen es mit CSS und erzwingen eine Zeilenh\xf6he f\xfcr\nden umschlie\xdfenden Span."}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Bild Heihgt 1.75rem einf\xfcgen"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Wir sehen im Bild, dass der linke Rand des Button oben rausragt. Das k\xf6nnen wir aber leicht l\xf6sen, indem wir\nden linken Rand des Buttons auf 0 setzen und stattdessen einen rechten Rand am Text-Span setzen."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},16034:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(50959);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);