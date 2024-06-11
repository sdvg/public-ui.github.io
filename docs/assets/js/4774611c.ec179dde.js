"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[10296],{42212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(76776),r=t(108);const s={title:"Scss",description:"Auf dieser Seite wird beschrieben, wie Scss zur Erstellung von KoliBri-Themes verwendet werden kann."},l="Scss",o={id:"concepts/styling/scss",title:"Scss",description:"Auf dieser Seite wird beschrieben, wie Scss zur Erstellung von KoliBri-Themes verwendet werden kann.",source:"@site/docs/20-concepts/05-styling/40-scss.md",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/scss",permalink:"/docs/next/concepts/styling/scss",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Scss",description:"Auf dieser Seite wird beschrieben, wie Scss zur Erstellung von KoliBri-Themes verwendet werden kann."},sidebar:"tutorialSidebar",previous:{title:"Designer",permalink:"/docs/next/concepts/styling/designer"},next:{title:"Swizzling",permalink:"/docs/next/concepts/swizzling"}},c={},d=[{value:"Hintergrund",id:"hintergrund",level:2},{value:"Erstellung",id:"erstellung",level:2},{value:"Prototyping",id:"prototyping",level:3},{value:"Bundling",id:"bundling",level:3},{value:"Patching",id:"patching",level:3},{value:"Referenzprojekt",id:"referenzprojekt",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"scss",children:"Scss"}),"\n",(0,i.jsx)(n.p,{children:"Dieser Artikel beschreibt, wie Scss zur Erstellung von KoliBri-Themes genutzt werden kann."}),"\n",(0,i.jsx)("kol-alert",{_label:"Designer oder Scss",_type:"info",_variant:"card",children:(0,i.jsxs)(n.p,{children:["KoliBri bietet zum Erstellen von Themes auch einen ",(0,i.jsx)("kol-link",{_href:"/docs/concepts/styling/designer",_label:"Designer"})," an. Je nach pers\xf6nlichen Pr\xe4ferenzen kann Scss oder der Designer verwendet werden."]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Scss ist eine Erweiterung von CSS, die es erm\xf6glicht, Variablen, Funktionen, Mixins und vieles mehr zu verwenden. Scss kann f\xfcr die Erstellung von KoliBri-Themes genutzt. Hierf\xfcr hat das Entwicklungsteam vom Projekt ",(0,i.jsx)("kol-link",{_href:"https://gitlab.opencode.de/kern-designsystem/pattern-library",_label:"KERN",_target:"kern"})," ein Build-Script geschrieben, um aus Scss-Dateien die entsprechenden KoliBri-Themes zu generieren."]}),"\n",(0,i.jsx)(n.h2,{id:"hintergrund",children:"Hintergrund"}),"\n",(0,i.jsxs)(n.p,{children:["Wir haben in den ",(0,i.jsx)("kol-link",{_href:"/docs/faq",_label:"FAQ"})," beschrieben, warum wir CSS in JavaScript verwalten. Das bedeutet, dass das einfach Einbinden von CSS in der Rahmenseite nicht die KoliBri-Komponenten styled. Denn jede Komponente wei\xdf \xfcber JavaScript selbst, welches CSS es verwenden soll. Das CSS muss also in JavaScript verpackt werden, so dass es bei der Ausf\xfchrung der Web Component geladen werden kann."]}),"\n",(0,i.jsx)(n.h2,{id:"erstellung",children:"Erstellung"}),"\n",(0,i.jsx)(n.p,{children:"Um ein Theme zu erstellen, kann in grob drei Schritten vorgegangen werden:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Erste Schritte:"})," Ein Theme prototypisch erstellen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Paketierung:"})," Theme-Paket erstellen und bauen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Optimierung:"})," Theme-Paket laden und durch Patchen modifizieren"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"prototyping",children:"Prototyping"}),"\n",(0,i.jsx)(n.p,{children:"Im ersten Schritt empfiehlt es sich zun\xe4chst mit der Art und Weise des Themings vertraut zu machen. Hierzu kann man einfach in einem KoliBri-Projekt (z.B. einer App) bei der Registrierung der KoliBri-Komponenten inline ein Theme zu erstellen und zu laden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { register } from '@public-ui/components';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { KoliBri } from '@public-ui/schema';\n\n// ts-prune-ignore-next\nexport default (): void => {\n\tregister(\n\t\tKoliBri.createTheme('my-theme-identifier', {\n\t\t\t'KOL-BUTTON': `button {\n background-color: #000;\n color: #fff;\n padding: .5em .75em;\n }`,\n\t\t}),\n\t\tdefineCustomElements,\n\t\t{\n\t\t\ttheme: {\n\t\t\t\tdetect: 'fixed',\n\t\t\t\tname: 'my-theme-identifier',\n\t\t\t},\n\t\t}\n\t).catch(console.warn);\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"bundling",children:"Bundling"}),"\n",(0,i.jsx)(n.p,{children:"Im zweiten Schritt sollte ein eigenst\xe4ndiges JavaScript-Projekt angelegt werden. Den Aufbau und die Scripte k\xf6nnen der Scss-Ansatz vom KERN-Team entnommen werden. Das Projekt hat grob folgende Struktur und kann um eigenen Code erweitert werden:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/scripts/\n compileAll.js\n compileOne.js\n sassCompiler.js\n/src/\n /themes/\n /my-theme/\n *.scss\n/package.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.code,{children:"package.json"})," beinhaltet folgende wesentliche Scripte:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"scripts": {\n\t\t"build": "unbuild",\n\t\t"compile": "node scripts/compileOne.js",\n\t\t"compile-all": "node scripts/compileAll.js",\n\t\t"compile-all-and-build": "npm run compile-all && npm run build",\n\t\t"prepack": "npm run compile-all-and-build"\n\t},\n\t"dependencies": {\n\t\t"sass": "1.62.1"\n\t},\n\t"devDependencies": {\n\t\t"@public-ui/components": "1.5.1",\n\t\t"@public-ui/schema": "1.5.1",\n\t\t"@types/node": "18.16.14",\n\t\t"typescript": "5.0.4",\n\t\t"unbuild": "1.1.2"\n\t},\n\t"peerDependencies": {\n\t\t"@public-ui/components": "1.5.1"\n\t}\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Mittels ",(0,i.jsx)(n.code,{children:"npm pack"})," kann ein Theme kompiliert werden. Das Ergebnis ist ein JavaScript-Modul, welches das Theme enth\xe4lt. Dieses kann dann in einem KoliBri-Projekt \xfcber die Register-Methode geladen werden."]}),"\n",(0,i.jsx)(n.h3,{id:"patching",children:"Patching"}),"\n",(0,i.jsx)(n.p,{children:"M\xf6chte man sp\xe4ter das Theme optimieren, ist es m\xf6glich dies \xfcber das Patching zu tun. Hierzu wird das Theme-Paket geladen und die entsprechenden CSS-Regeln \xfcberschrieben. Das Patching kann in einem KoliBri-Projekt erfolgen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { register, KoliBriDevHelper } from '@public-ui/components';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { KoliBri } from '@public-ui/schema';\n\n// ts-prune-ignore-next\nexport default (): void => {\n\tregister(\n\t\tKoliBri.createTheme('my-theme-identifier', {\n\t\t\t'KOL-BUTTON': `button {\n background-color: #000;\n color: #fff;\n padding: .5em .75em;\n }`,\n\t\t}),\n\t\tdefineCustomElements,\n\t\t{\n\t\t\ttheme: {\n\t\t\t\tdetect: 'fixed',\n\t\t\t\tname: 'my-theme-identifier',\n\t\t\t},\n\t\t}\n\t)\n\t\t.then(() => {\n\t\t\tKoliBriDevHelper.patchTheme('my-theme-identifier', {\n\t\t\t\t'KOL-BUTTON': `button {\n background-color: #fff;\n color: #000;\n }`,\n\t\t\t});\n\t\t})\n\t\t.catch(console.warn);\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Identifizierte \xc4nderungen k\xf6nnen dann sp\xe4ter wieder in den Scss-Dateien \xfcbernommen werden."}),"\n",(0,i.jsx)(n.h2,{id:"referenzprojekt",children:"Referenzprojekt"}),"\n",(0,i.jsxs)(n.p,{children:["Mehr zur Umsetzung des Scss-Ansatzen findet sich im ",(0,i.jsx)("kol-link",{_href:"https://gitlab.opencode.de/kern-designsystem/pattern-library/-/tree/main/packages/themes",_label:"Git-Repository von KERN",_target:"kern"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},108:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>l});var i=t(80924);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);