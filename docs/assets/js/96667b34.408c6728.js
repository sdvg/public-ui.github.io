"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[39155],{17942:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(50959);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=i,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||a;return t?r.createElement(g,l(l({ref:n},d),{},{components:t})):r.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},36665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(15882),i=(t(50959),t(17942));const a={title:"Formular-Handling",description:"Auf diese Seite wird beschrieben, wie komplexe Formulare mit KoliBri umgesetzt werden k\xf6nnen.",tags:["Architektur","Formular","Konzept"]},l=void 0,o={unversionedId:"formular-handling",id:"version-1.5.3/formular-handling",title:"Formular-Handling",description:"Auf diese Seite wird beschrieben, wie komplexe Formulare mit KoliBri umgesetzt werden k\xf6nnen.",source:"@site/versioned_docs/version-1.5.3/41-formular-handling.mdx",sourceDirName:".",slug:"/formular-handling",permalink:"/docs/1.5.3/formular-handling",draft:!1,tags:[{label:"Architektur",permalink:"/docs/1.5.3/tags/architektur"},{label:"Formular",permalink:"/docs/1.5.3/tags/formular"},{label:"Konzept",permalink:"/docs/1.5.3/tags/konzept"}],version:"1.5.3",sidebarPosition:41,frontMatter:{title:"Formular-Handling",description:"Auf diese Seite wird beschrieben, wie komplexe Formulare mit KoliBri umgesetzt werden k\xf6nnen.",tags:["Architektur","Formular","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/docs/1.5.3/project/roadmap"},next:{title:"Testergebnisse",permalink:"/docs/1.5.3/test-results"}},p={},s=[{value:"Design-Ans\xe4tze",id:"design-ans\xe4tze",level:2},{value:"Eingabe-Komponenten",id:"eingabe-komponenten",level:2},{value:"Handling-Adapter",id:"handling-adapter",level:2},{value:"Lean-Input-Adapter",id:"lean-input-adapter",level:3},{value:"Installation",id:"installation",level:4},{value:"Einbindung",id:"einbindung",level:4},{value:"Verwendung",id:"verwendung",level:4}],d={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fast alle ",(0,i.kt)("strong",{parentName:"p"},"KoliBri"),"-Komponenten dienen der Implementierung und Kapselung spezifischer barrierefreier HTML-Komponenten und geh\xf6ren zur ",(0,i.kt)("strong",{parentName:"p"},"View"),"."),(0,i.kt)("p",null,"Um sehr dynamische und komplexe Formulare umsetzen zu k\xf6nnen, sind zahlreiche Funktionalit\xe4ten, wie Change-Listener, Validatoren, Formatter u.a. erforderlich.\nDiese Logik sollte entkoppelt von der View implementiert werden und geh\xf6ren zum ",(0,i.kt)("strong",{parentName:"p"},"Controller"),"."),(0,i.kt)("h2",{id:"design-ans\xe4tze"},"Design-Ans\xe4tze"),(0,i.kt)("p",null,"In der ",(0,i.kt)("kol-abbr",{_title:"Single-Page-Application"},"SPA"),"-Entwicklung wird hier oft in den ",(0,i.kt)("i",null,"Template-driven"),"- und"),(0,i.kt)("i",null,"Model-driven"),"-Ansatz unterschieden.",(0,i.kt)("p",null,"Der Template-driven-Ansatz besagt dabei, dass die Formular-Logik auch ins Template also die View implementiert wird. Das kann schamant sein, aber auch zu\nun\xfcbersichtlichen Code f\xfchren."),(0,i.kt)("p",null,"Der Model-driven-Ansatz hingegen besagt dabei, dass die Formular-Logik ins Modell also den Controller implementiert wird. Das f\xfchrt zwar erstmal zu mehr\nAufwand, aber dadurch auch zu entkoppelten wartbareren Code."),(0,i.kt)("kol-alert",{_type:"info"},(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"KoliBri")," sind die Formular-Komponenten vom Formular-Handling entkoppelt. Das hat den Vorteil, dass die Komponenten universeller wiederverwendet werden\nk\xf6nnen. Quasi wie das HTML selbst auch.")),(0,i.kt)("h2",{id:"eingabe-komponenten"},"Eingabe-Komponenten"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Eingabe"),"-Komponenten sind die Komponenten mit den Formular-Eingaben gemacht werden k\xf6nnen. Sprich in erster Linie ",(0,i.kt)("kol-link",{_href:"/docs/konzepte/formular-input"},"Inputs, Select und Textarea"),"."),(0,i.kt)("h2",{id:"handling-adapter"},"Handling-Adapter"),(0,i.kt)("p",null,"Wie oben beschrieben ist das Formular-Handling von den ",(0,i.kt)("strong",{parentName:"p"},"Eingabe"),"-Komponenten entkoppelt. Somit kann jedes Entwicklungsteam in Abh\xe4ngigkeit zum eingesetzten\nFramework selbst entscheiden, welches Formular-Handling geeignet ist."),(0,i.kt)("kol-alert",{_type:"info"},(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Kopplung")," des Formular-Handlings mit den ",(0,i.kt)("strong",{parentName:"p"},"Eingabe"),"-Komponenten erfolgt dann \xfcber eine ",(0,i.kt)("strong",{parentName:"p"},"Adapter")," -Komponente, die den State der Komponenten\ndynamisch synchronisiert.")),(0,i.kt)("h3",{id:"lean-input-adapter"},"Lean-Input-Adapter"),(0,i.kt)("p",null,"F\xfcr die Entwicklung mit TypeScript bietet ",(0,i.kt)("strong",{parentName:"p"},"KoliBri")," die ",(0,i.kt)("strong",{parentName:"p"},"Adapter"),"-Komponente f\xfcr die Formular-Handling-Bibliothek ",(0,i.kt)("kol-link",{_href:"https://www.npmjs.com/package/@leanup/form",_label:"@leanup/form",_target:"npmjs"})," an."),(0,i.kt)("h4",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Der Adapter kann \xfcber die \xf6ffentliche NPM-Registry installiert werden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @leanup/form @leanup/kolibri-components @leanup/kolibri-react\n")),(0,i.kt)("h4",{id:"einbindung"},"Einbindung"),(0,i.kt)("p",null,"Bei der Einbindung ist darauf zu achten, dass die Leanup-Komponenten zun\xe4chst registriert werden m\xfcssen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n    <script type=\"module\">\n        import { register } from 'https://unpkg.com/@public-ui/components@1.4.0-rc.6';\n        import { defineCustomElements as kolibri } from 'https://unpkg.com/@public-ui/components@1.4.0-rc.6/dist/loader';\n        import { defineCustomElements as leanup } from 'https://unpkg.com/@leanup/kolibri-components@1.0.5/dist/loader';\n        import { BMF } from 'https://unpkg.com/@public-ui/themes@1.4.0-rc.6';\n        register([BMF], [kolibri, leanup])\n            .catch(console.warn);\n    <\/script>\n</head>\n<body>\n    <kol-spin _show>\n</body>\n")),(0,i.kt)("p",null,"Oder f\xfcr React:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { AppComponent } from './components/app/component';\n\nimport { register } from '@public-ui/components';\nimport { defineCustomElements as kolibri } from '@public-ui/components/dist/loader';\nimport { defineCustomElements as leanup } from '@leanup/kolibri-components/dist/loader';\nimport { BMF } from '@public-ui/themes';\n\nregister([BMF], [kolibri, leanup])\n    .then(() => {\n        const htmlDivElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('div#app');\n        if (htmlDivElement instanceof HTMLDivElement) {\n            const root = createRoot(htmlDivElement);\n            root.render(<AppComponent />);\n        }\n    })\n    .catch(console.warn);\n")),(0,i.kt)("h4",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Wie der Name (Adapter) schon sagt, stellt die Komponente die Synchronisation zwischen der spezifischen Formular-Logik\n(Controller) und der Formular-Darstellung (View) dar. Die Umsetzung im HTML-Code erfolgt in Form eines umschlie\xdfenden\nTags."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel (schematisch):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<lean-input-adapter>\n    <kol-input-text>Land</kol-input-text>\n</lean-input-adapter>\n\n<lean-input-adapter>\n    <kol-select _list="Deutschland, \xd6sterreich, Schweiz usw.">Land</kol-select>\n</lean-input-adapter>\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Im reinen HTML m\xfcssen die Controls nach dem DOM-Aufbau an die Adapter-Nodes geh\xe4ngt werden, damit das reaktive Verhalten funktioniert.")),(0,i.kt)("p",null,"Oder f\xfcr React:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<LeanInputAdapter _control={landControl as InputControl}>\n    <KolInputText>Land</KolInputText>\n</LeanInputAdapter>\n\n<LeanInputAdapter _control={landControl as InputControl}>\n    <KolSelect _list="Deutschland, \xd6sterreich, Schweiz usw.">Land</KolSelect>\n</LeanInputAdapter>\n')),(0,i.kt)("kol-alert",{_type:"info"},(0,i.kt)("p",null,"In diesem Beispiel ist sch\xf6n zu sehen, dass das Modell von der Darstellung entkoppelt ist. Ob also ein Formular-Wert als Text-Eingabefeld oder als Select-Feld\ndargestellt wird, ist auf Modell-Ebene irrelevant.")),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Adapter"),"-Komponente umschlie\xdft die ",(0,i.kt)("strong",{parentName:"p"},"Eingabe"),"-Komponente von KoliBri und stellt dadurch die Synchronisation\nzwischen Modell und Darstellung sicher."))}m.isMDXComponent=!0}}]);