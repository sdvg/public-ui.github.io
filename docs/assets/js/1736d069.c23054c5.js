"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[72332],{73548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=t(2488),i=t(16592);const l={title:"Formular-Handling",description:"Auf diese Seite wird beschrieben, wie komplexe Formulare mit KoliBri umgesetzt werden k\xf6nnen.",tags:["Architektur","Formular","Konzept"]},o=void 0,s={id:"formular-handling",title:"Formular-Handling",description:"Auf diese Seite wird beschrieben, wie komplexe Formulare mit KoliBri umgesetzt werden k\xf6nnen.",source:"@site/versioned_docs/version-1.5/41-formular-handling.mdx",sourceDirName:".",slug:"/formular-handling",permalink:"/docs/1.5/formular-handling",draft:!1,unlisted:!1,tags:[{label:"Architektur",permalink:"/docs/1.5/tags/architektur"},{label:"Formular",permalink:"/docs/1.5/tags/formular"},{label:"Konzept",permalink:"/docs/1.5/tags/konzept"}],version:"1.5",sidebarPosition:41,frontMatter:{title:"Formular-Handling",description:"Auf diese Seite wird beschrieben, wie komplexe Formulare mit KoliBri umgesetzt werden k\xf6nnen.",tags:["Architektur","Formular","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/docs/1.5/project/roadmap"},next:{title:"Testergebnisse",permalink:"/docs/1.5/test-results"}},a={},d=[{value:"Design-Ans\xe4tze",id:"design-ans\xe4tze",level:2},{value:"Eingabe-Komponenten",id:"eingabe-komponenten",level:2},{value:"Handling-Adapter",id:"handling-adapter",level:2},{value:"Lean-Input-Adapter",id:"lean-input-adapter",level:3},{value:"Installation",id:"installation",level:4},{value:"Einbindung",id:"einbindung",level:4},{value:"Verwendung",id:"verwendung",level:4}];function p(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Fast alle ",(0,r.jsx)(n.strong,{children:"KoliBri"}),"-Komponenten dienen der Implementierung und Kapselung spezifischer barrierefreier HTML-Komponenten und geh\xf6ren zur ",(0,r.jsx)(n.strong,{children:"View"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Um sehr dynamische und komplexe Formulare umsetzen zu k\xf6nnen, sind zahlreiche Funktionalit\xe4ten, wie Change-Listener, Validatoren, Formatter u.a. erforderlich.\nDiese Logik sollte entkoppelt von der View implementiert werden und geh\xf6ren zum ",(0,r.jsx)(n.strong,{children:"Controller"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"design-ans\xe4tze",children:"Design-Ans\xe4tze"}),"\n",(0,r.jsxs)(n.p,{children:["In der ",(0,r.jsx)("kol-abbr",{_label:"Single-Page-Application",children:"SPA"}),"-Entwicklung wird hier oft in den ",(0,r.jsx)("i",{children:"Template-driven"}),"- und"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("i",{children:"Model-driven"}),"-Ansatz unterschieden."]}),"\n",(0,r.jsx)(n.p,{children:"Der Template-driven-Ansatz besagt dabei, dass die Formular-Logik auch ins Template also die View implementiert wird. Das kann schamant sein, aber auch zu\nun\xfcbersichtlichen Code f\xfchren."}),"\n",(0,r.jsx)(n.p,{children:"Der Model-driven-Ansatz hingegen besagt dabei, dass die Formular-Logik ins Modell also den Controller implementiert wird. Das f\xfchrt zwar erstmal zu mehr\nAufwand, aber dadurch auch zu entkoppelten wartbareren Code."}),"\n",(0,r.jsx)("kol-alert",{_type:"info",children:(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.strong,{children:"KoliBri"})," sind die Formular-Komponenten vom Formular-Handling entkoppelt. Das hat den Vorteil, dass die Komponenten universeller wiederverwendet werden\nk\xf6nnen. Quasi wie das HTML selbst auch."]})}),"\n",(0,r.jsx)(n.h2,{id:"eingabe-komponenten",children:"Eingabe-Komponenten"}),"\n",(0,r.jsxs)(n.p,{children:["Die ",(0,r.jsx)(n.strong,{children:"Eingabe"}),"-Komponenten sind die Komponenten mit den Formular-Eingaben gemacht werden k\xf6nnen. Sprich in erster Linie ",(0,r.jsx)("kol-link",{_href:"/docs/konzepte/formular-input",_label:"Inputs, Select und Textarea"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"handling-adapter",children:"Handling-Adapter"}),"\n",(0,r.jsxs)(n.p,{children:["Wie oben beschrieben ist das Formular-Handling von den ",(0,r.jsx)(n.strong,{children:"Eingabe"}),"-Komponenten entkoppelt. Somit kann jedes Entwicklungsteam in Abh\xe4ngigkeit zum eingesetzten\nFramework selbst entscheiden, welches Formular-Handling geeignet ist."]}),"\n",(0,r.jsx)("kol-alert",{_type:"info",children:(0,r.jsxs)(n.p,{children:["Die ",(0,r.jsx)(n.strong,{children:"Kopplung"})," des Formular-Handlings mit den ",(0,r.jsx)(n.strong,{children:"Eingabe"}),"-Komponenten erfolgt dann \xfcber eine ",(0,r.jsx)(n.strong,{children:"Adapter"})," -Komponente, die den State der Komponenten\ndynamisch synchronisiert."]})}),"\n",(0,r.jsx)(n.h3,{id:"lean-input-adapter",children:"Lean-Input-Adapter"}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr die Entwicklung mit TypeScript bietet ",(0,r.jsx)(n.strong,{children:"KoliBri"})," die ",(0,r.jsx)(n.strong,{children:"Adapter"}),"-Komponente f\xfcr die Formular-Handling-Bibliothek ",(0,r.jsx)("kol-link",{_href:"https://www.npmjs.com/package/@leanup/form",_label:"@leanup/form",_target:"npmjs"})," an."]}),"\n",(0,r.jsx)(n.h4,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Der Adapter kann \xfcber die \xf6ffentliche NPM-Registry installiert werden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i @leanup/form @leanup/kolibri-components @leanup/kolibri-react\n"})}),"\n",(0,r.jsx)(n.h4,{id:"einbindung",children:"Einbindung"}),"\n",(0,r.jsx)(n.p,{children:"Bei der Einbindung ist darauf zu achten, dass die Leanup-Komponenten zun\xe4chst registriert werden m\xfcssen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<head>\n\t<script type=\"module\">\n\t\timport { register } from 'https://unpkg.com/@public-ui/components@1.4.0-rc.6';\n\t\timport { defineCustomElements as kolibri } from 'https://unpkg.com/@public-ui/components@1.4.0-rc.6/dist/loader';\n\t\timport { defineCustomElements as leanup } from 'https://unpkg.com/@leanup/kolibri-components@1.0.5/dist/loader';\n\t\timport { BMF } from 'https://unpkg.com/@public-ui/themes@1.4.0-rc.6';\n\t\tregister([BMF], [kolibri, leanup])\n\t\t\t.catch(console.warn);\n\t<\/script>\n</head>\n<body>\n\t<kol-spin _show>\n</body>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Oder f\xfcr React:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { AppComponent } from './components/app/component';\n\nimport { register } from '@public-ui/components';\nimport { defineCustomElements as kolibri } from '@public-ui/components/dist/loader';\nimport { defineCustomElements as leanup } from '@leanup/kolibri-components/dist/loader';\nimport { BMF } from '@public-ui/themes';\n\nregister([BMF], [kolibri, leanup])\n\t.then(() => {\n\t\tconst htmlDivElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('div#app');\n\t\tif (htmlDivElement instanceof HTMLDivElement) {\n\t\t\tconst root = createRoot(htmlDivElement);\n\t\t\troot.render(<AppComponent />);\n\t\t}\n\t})\n\t.catch(console.warn);\n"})}),"\n",(0,r.jsx)(n.h4,{id:"verwendung",children:"Verwendung"}),"\n",(0,r.jsx)(n.p,{children:"Wie der Name (Adapter) schon sagt, stellt die Komponente die Synchronisation zwischen der spezifischen Formular-Logik\n(Controller) und der Formular-Darstellung (View) dar. Die Umsetzung im HTML-Code erfolgt in Form eines umschlie\xdfenden\nTags."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Beispiel (schematisch):"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<lean-input-adapter>\n\t<kol-input-text _label="Land"></kol-input-text>\n</lean-input-adapter>\n\n<lean-input-adapter>\n\t<kol-select _options="Deutschland, \xd6sterreich, Schweiz usw." _label="Land"></kol-select>\n</lean-input-adapter>\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Im reinen HTML m\xfcssen die Controls nach dem DOM-Aufbau an die Adapter-Nodes geh\xe4ngt werden, damit das reaktive Verhalten funktioniert."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Oder f\xfcr React:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'<LeanInputAdapter _control={landControl as InputControl}>\n\t<KolInputText _label={`Land`}/>\n</LeanInputAdapter>\n\n<LeanInputAdapter _control={landControl as InputControl}>\n\t<KolSelect _options="Deutschland, \xd6sterreich, Schweiz usw." _label={`Land`}/>\n</LeanInputAdapter>\n'})}),"\n",(0,r.jsx)("kol-alert",{_type:"info",children:(0,r.jsx)(n.p,{children:"In diesem Beispiel ist sch\xf6n zu sehen, dass das Modell von der Darstellung entkoppelt ist. Ob also ein Formular-Wert als Text-Eingabefeld oder als Select-Feld\ndargestellt wird, ist auf Modell-Ebene irrelevant."})}),"\n",(0,r.jsxs)(n.p,{children:["Die ",(0,r.jsx)(n.strong,{children:"Adapter"}),"-Komponente umschlie\xdft die ",(0,r.jsx)(n.strong,{children:"Eingabe"}),"-Komponente von KoliBri und stellt dadurch die Synchronisation\nzwischen Modell und Darstellung sicher."]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},16592:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>o});var r=t(96651);const i={},l=r.createContext(i);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);