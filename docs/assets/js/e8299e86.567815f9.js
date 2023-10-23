"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[82079],{17942:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(50959);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return t?i.createElement(k,o(o({ref:n},d),{},{components:t})):i.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<l;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var i=t(52319),r=(t(50959),t(17942));const l={},o="Erste Schritte",a={unversionedId:"get-started/first-steps",id:"version-1.6/get-started/first-steps",title:"Erste Schritte",description:"<kol-link",source:"@site/versioned_docs/version-1.6/10-get-started/1-first-steps.mdx",sourceDirName:"10-get-started",slug:"/get-started/first-steps",permalink:"/docs/1.6/get-started/first-steps",draft:!1,tags:[],version:"1.6",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/1.6/faq"},next:{title:"Frameworks",permalink:"/docs/1.6/get-started/frameworks"}},s={},p=[{value:"Neues Projekt erstellen",id:"neues-projekt-erstellen",level:2},{value:"Einbinden in ein bestehendes Projekt",id:"einbinden-in-ein-bestehendes-projekt",level:2},{value:"Einbinden von Schriftarten",id:"einbinden-von-schriftarten",level:3},{value:"Typescript",id:"typescript",level:3},{value:"I Vite + React",id:"i-vite--react",level:3},{value:"1. Installieren der KoliBri-Bibliotheken",id:"1-installieren-der-kolibri-bibliotheken",level:4},{value:"2. Integration",id:"2-integration",level:4},{value:"3. module einbinden",id:"3-module-einbinden",level:4},{value:"4. Beispiel",id:"4-beispiel",level:4},{value:"II Vite + Vue",id:"ii-vite--vue",level:3},{value:"1. Installieren der KoliBri-Bibliotheken",id:"1-installieren-der-kolibri-bibliotheken-1",level:4},{value:"2. Plugin",id:"2-plugin",level:4},{value:"3. module einbinden",id:"3-module-einbinden-1",level:4},{value:"4. Konfiguration anpassen",id:"4-konfiguration-anpassen",level:4},{value:"5. Beispiel",id:"5-beispiel",level:4},{value:"III React",id:"iii-react",level:3},{value:"1. Installieren der KoliBri-Bibliotheken",id:"1-installieren-der-kolibri-bibliotheken-2",level:4},{value:"2. Registrieren des KoliBri-Loaders",id:"2-registrieren-des-kolibri-loaders",level:4},{value:"3. Integration",id:"3-integration",level:4},{value:"4. Beispiel",id:"4-beispiel-1",level:4},{value:"IV ohne Framework",id:"iv-ohne-framework",level:3},{value:"V statische Webseite",id:"v-statische-webseite",level:3},{value:"Weitere Optionen",id:"weitere-optionen",level:2},{value:"Developer Tools",id:"developer-tools",level:3},{value:"Experimenteller Modus",id:"experimenteller-modus",level:3},{value:"Farbkontrastanalyse",id:"farbkontrastanalyse",level:3}],d={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"erste-schritte"},"Erste Schritte"),(0,r.kt)("div",{class:"grid md:grid-cols-2 mb-4"},(0,r.kt)("kol-card",{_headline:"Cheat Sheet herunterladen",_level:"2"},(0,r.kt)("kol-link",{slot:"content",_href:"https://public-ui.github.io/cheat-sheet/",_icon:"codicon codicon-code",_label:"false",_target:"cheat-sheet"},"Klicken Sie hier, um sich das Cheat-Sheet zum Entwickeln anzuschauen und herunterzuladen."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Hinweis:")," F\xfcr Projekt im ITZBund gibt es ein vorgegebenes Seed-Projekt, welches \xfcber die internen Kommunikationswege angefragt werden kann.")),(0,r.kt)("h2",{id:"neues-projekt-erstellen"},"Neues Projekt erstellen"),(0,r.kt)("p",null,"Ein neues Projekt kann mit Hilfe des Kommandozeilenassistenten schnell erstellt werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm init kolibri@latest my-kolibri-app\n")),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/public-ui/.github/main/profile/create-kolibri.gif",alt:"Zeigt wie man mit create-kolibri eine neue App anlegen kann."}),(0,r.kt)("h2",{id:"einbinden-in-ein-bestehendes-projekt"},"Einbinden in ein bestehendes Projekt"),(0,r.kt)("h3",{id:"einbinden-von-schriftarten"},"Einbinden von Schriftarten"),(0,r.kt)("p",null,"Schriftarten werden von Natur aus losgel\xf6st vom CSS geladen und m\xfcssen je nach ",(0,r.kt)("strong",{parentName:"p"},"KoliBri"),"-Theme in die projektspezifische Rahmenseite (",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),") eingebunden werden."),(0,r.kt)("p",null,"Hierzu k\xf6nnen die in der Bibliothek mitgelieferten Schriftarten in die eigenen Assets kopiert werden: ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/@public-ui/themes/assets"),", oder eigene verwendet werden."),(0,r.kt)("p",null,"Bitte importieren Sie nur die Schriftarten und Icons, die Sie verwenden, um unn\xf6tigen Datentransfer zu vermeiden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="de" dir="ltr">\n    <head>\n        <title>Webapplication | KoliBri</title>\n        <meta charset="UTF-8" />\n        <meta name="description" content="..." />\n        <base href="/" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="shortcut icon" type="image/x-icon" href="assets/kolibri.ico" />\n        <link rel="stylesheet" href="assets/bundes/style.css" />\n        <link rel="stylesheet" href="assets/codicons/codicon.css" />\n        <link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css" />\n        <link rel="stylesheet" href="assets/icofont/icofont.min.css" />\n        <link rel="stylesheet" href="assets/kreon/style.css" />\n        <link rel="stylesheet" href="assets/noto-sans/noto-sans.css" />\n        <link rel="stylesheet" href="assets/material-icons/iconfont/material-icons.css" />\n        <link rel="stylesheet" href="assets/material-symbols/index.css" />\n        <link rel="stylesheet" href="assets/roboto/roboto.css" />\n        <link rel="stylesheet" href="assets/tabler-icons/tabler-icons.css" />\n    </head>\n</html>\n')),(0,r.kt)("h3",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"Um eine umf\xe4ngliche Codevervollst\xe4ndigung zu erhalten, ben\xf6tigen Sie folgenden Eintrag in der ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n        ...\n    "moduleResolution": "Node",\n        ...\n  },\n    ...\n}\n')),(0,r.kt)("h3",{id:"i-vite--react"},"I Vite + React"),(0,r.kt)("h4",{id:"1-installieren-der-kolibri-bibliotheken"},"1. Installieren der KoliBri-Bibliotheken"),(0,r.kt)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]'},(0,r.kt)("div",null,"npm i @public-ui/components @public-ui/themes @public-ui/react"),(0,r.kt)("div",null,"pnpm i @public-ui/components @public-ui/themes @public-ui/react"),(0,r.kt)("div",null,"yarn add @public-ui/components @public-ui/themes @public-ui/react")),(0,r.kt)("h4",{id:"2-integration"},"2. Integration"),(0,r.kt)("p",null,"main.tsx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App.tsx";\nimport "./index.css";\n\n+import { register } from "@public-ui/components";\n+import { defineCustomElements } from "@public-ui/components/dist/loader";\n+import { DE } from "@public-ui/themes";\n\n+register(DE, defineCustomElements)\n+  .then(() => {\n    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(\n      <React.StrictMode>\n        <App />\n      </React.StrictMode>\n    );\n+  })\n+  .catch(console.warn);\n')),(0,r.kt)("h4",{id:"3-module-einbinden"},"3. module einbinden"),(0,r.kt)("p",null,"index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite + React + TS</title>\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/main.tsx"><\/script>\n  </body>\n</html>\n')),(0,r.kt)("h4",{id:"4-beispiel"},"4. Beispiel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { KolSpin } from '@public-ui/react';\n\nexport const AppComponent = () => {\n    return (\n        <div>\n            <KolSpin _show />\n        </div>\n    );\n};\n")),(0,r.kt)("h3",{id:"ii-vite--vue"},"II Vite + Vue"),(0,r.kt)("h4",{id:"1-installieren-der-kolibri-bibliotheken-1"},"1. Installieren der KoliBri-Bibliotheken"),(0,r.kt)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]'},(0,r.kt)("div",null,"npm i @public-ui/components @public-ui/themes @public-ui/vue"),(0,r.kt)("div",null,"pnpm i @public-ui/components @public-ui/themes @public-ui/vue"),(0,r.kt)("div",null,"yarn add @public-ui/components @public-ui/themes @public-ui/vue")),(0,r.kt)("h4",{id:"2-plugin"},"2. Plugin"),(0,r.kt)("p",null,"kolibri.plugin.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import type { Plugin } from 'vue';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { register } from '@public-ui/components';\nimport { ITZBund } from '@public-ui/themes';\nexport const ComponentLibrary: Plugin = {\n    install() {\n        register(ITZBund, defineCustomElements)\n            .then(() => console.log('Components registered'))\n            .catch(console.warn);\n    },\n};\n")),(0,r.kt)("p",null,"main.ts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import { createApp } from 'vue'\nimport App from './App.vue'\nimport './assets/main.css'\n+ import { ComponentLibrary } from './vue.plugin'\n\nconst app = createApp(App)\n\n+ app.use(ComponentLibrary)\n\napp.mount('#app')\n")),(0,r.kt)("h4",{id:"3-module-einbinden-1"},"3. module einbinden"),(0,r.kt)("p",null,"index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"><\/script>\n  </body>\n</html>\n')),(0,r.kt)("h4",{id:"4-konfiguration-anpassen"},"4. Konfiguration anpassen"),(0,r.kt)("p",null,"vite.config.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import { fileURLToPath, URL } from 'node:url'\n\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n-  plugins: [],\n+  plugins: [\n+    vue({\n+      template: {\n+        compilerOptions: {\n+          // treat all tags with a dash as custom elements\n+          isCustomElement: (tag) => tag.includes('-')\n+        }\n+      }\n+    })\n+  ],\n  resolve: {\n    alias: {\n      '@': fileURLToPath(new URL('./src', import.meta.url))\n    }\n  }\n})\n")),(0,r.kt)("h4",{id:"5-beispiel"},"5. Beispiel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<KolInputText :_value="text" :_on="{ onChange: (e: unknown, v: string) => (text = v) }"></KolInputText>\n<KolButton _label="Text l\xf6schen" :_on="{ onClick: () => (text = \'\') }"></KolButton>\n')),(0,r.kt)("p",null,"Hinweis: KoliBri-Inputs \xfcbergeben in der Regel das Ursprungsevent als ersten Parameter und den Wert des Feldes als Zweiten."),(0,r.kt)("h3",{id:"iii-react"},"III React"),(0,r.kt)("h4",{id:"1-installieren-der-kolibri-bibliotheken-2"},"1. Installieren der KoliBri-Bibliotheken"),(0,r.kt)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]'},(0,r.kt)("div",null,"npm i @public-ui/components @public-ui/themes @public-ui/react"),(0,r.kt)("div",null,"pnpm i @public-ui/components @public-ui/themes @public-ui/react"),(0,r.kt)("div",null,"yarn add @public-ui/components @public-ui/themes @public-ui/react")),(0,r.kt)("h4",{id:"2-registrieren-des-kolibri-loaders"},"2. Registrieren des KoliBri-Loaders"),(0,r.kt)("p",null,"Nachdem die Vorbereitungen abgeschlossen sind, muss nur noch der KoliBri-Loader registriert werden.\nEr sorgt daf\xfcr, dass die Web Components asynchron (lazy) nachgeladen werden, sobald sie in der Webseite verwendet werden."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methode"),(0,r.kt)("th",{parentName:"tr",align:null},"Erl\xe4uterung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"register"),(0,r.kt)("td",{parentName:"tr",align:null},"Setzt ein Theme und registriert anschlie\xdfend den Loader")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT"),(0,r.kt)("td",{parentName:"tr",align:null},"Registriert den Loader f\xfcr z.B. das DEFAULT-Theme")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defineCustomElements"),(0,r.kt)("td",{parentName:"tr",align:null},"Registriert den Loader f\xfcr die Web Components")))),(0,r.kt)("h4",{id:"3-integration"},"3. Integration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { AppComponent } from './components/app/component';\n\nimport { register } from '@public-ui/core';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { DEFAULT } from '@public-ui/themes';\n\nregister(DEFAULT, defineCustomElements)\n    .then(() => {\n        const htmlDivElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('div#app');\n        if (htmlDivElement instanceof HTMLDivElement) {\n            const root = createRoot(htmlDivElement);\n            root.render(<AppComponent />);\n        }\n    })\n    .catch(console.warn);\n")),(0,r.kt)("h4",{id:"4-beispiel-1"},"4. Beispiel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { KolSpin } from '@public-ui/react';\n\nexport const AppComponent = () => {\n    return (\n        <div>\n            <KolSpin _show />\n        </div>\n    );\n};\n")),(0,r.kt)("h3",{id:"iv-ohne-framework"},"IV ohne Framework"),(0,r.kt)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]'},(0,r.kt)("div",null,"npm i @public-ui/components @public-ui/themes"),(0,r.kt)("div",null,"pnpm i @public-ui/components @public-ui/themes"),(0,r.kt)("div",null,"yarn add @public-ui/components @public-ui/themes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Title</title>\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"><\/script>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"Um Codevervollst\xe4ndigung zu erhalten kann es notwendig sein ",(0,r.kt)("inlineCode",{parentName:"p"},".vscode/settings.json")," zu erstellen und Folgendes einzuf\xfcgen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "html.customData": ["./node_modules/@public-ui/components/vscode-custom-data.json"]\n}\n')),(0,r.kt)("p",null,"Hierbei ist die Web-Component Schreibweise (kebab-case) zu verwenden. (z.B.: ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-heading>"),")"),(0,r.kt)("h3",{id:"v-statische-webseite"},"V statische Webseite"),(0,r.kt)("p",null,"Um KoliBri in eine statische Webseite einzubauen muss lediglich das folgende Script-Tag eingebunden werden.\nSofern Schriftarten und/oder Icons verwendet werden, m\xfcssen diese, wie oben beschrieben, eingebunden werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script type=\"module\">\n    import { register } from 'https://unpkg.com/@public-ui/components/dist/esm/index.js';\n    import { defineCustomElements } from 'https://unpkg.com/@public-ui/components/dist/loader/index.js';\n    import { ITZBund } from 'https://unpkg.com/@public-ui/themes/dist/index.mjs';\n    register(ITZBund, defineCustomElements).catch(console.warn);\n<\/script>\n")),(0,r.kt)("p",null,"Hierbei ist die Web-Component Schreibweise (kebab-case) zu verwenden. (z.B.: ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-heading>"),")"),(0,r.kt)("h2",{id:"weitere-optionen"},"Weitere Optionen"),(0,r.kt)("h3",{id:"developer-tools"},"Developer Tools"),(0,r.kt)("p",null,"Mittels der folgenden Konfiguration in der HTML-Datei k\xf6nnen die Developer-Tools von KoliBri aktiviert werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\u2026\n<html>\n    <head>\n        <meta name="kolibri" content="dev-mode=true" />\n    </head>\n    \u2026\n</html>\n')),(0,r.kt)("h3",{id:"experimenteller-modus"},"Experimenteller Modus"),(0,r.kt)("p",null,"Mittels der folgenden Konfiguration in der HTML-Datei kann der experimentelle Modus aktiviert werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\u2026\n<html>\n    <head>\n        <meta name="kolibri" content="experimental-mode=true" />\n    </head>\n    \u2026\n</html>\n')),(0,r.kt)("h3",{id:"farbkontrastanalyse"},"Farbkontrastanalyse"),(0,r.kt)("p",null,"Um Farbkontrastfehler innerhalb des DOMs zu erkennen, k\xf6nnen Sie mittels der folgenden Konfiguration die Farbkontrastanalyse aktivieren."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\u2026\n<html>\n    <head>\n        <meta name="kolibri" content="color-constrast-analysis=true" />\n    </head>\n    \u2026\n</html>\n')))}m.isMDXComponent=!0}}]);