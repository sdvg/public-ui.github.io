"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8257],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(15882),a=(n(50959),n(17942));const o={},l="First steps",i={unversionedId:"get-started/erste-schritte",id:"get-started/erste-schritte",title:"First steps",description:"Click here to view and download the cheat sheet for developing.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10-get-started/1-erste-schritte.mdx",sourceDirName:"10-get-started",slug:"/get-started/erste-schritte",permalink:"/en/docs/get-started/erste-schritte",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/en/docs/faq"},next:{title:"Frameworks",permalink:"/en/docs/get-started/frameworks"}},s={},c=[{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Integration into existing projects",id:"integration-into-existing-projects",level:2},{value:"1. Install the packages",id:"1-install-the-packages",level:3},{value:"2. Embedding fonts",id:"2-embedding-fonts",level:3},{value:"3. Registering the component loaders",id:"3-registering-the-component-loaders",level:3},{value:"Variant A: Static project",id:"variant-a-static-project",level:4},{value:"Variant B: React project",id:"variant-b-react-project",level:4},{value:"Integration",id:"integration",level:5},{value:"Install adapter",id:"install-adapter",level:5},{value:"Use component",id:"use-component",level:5},{value:"Special features",id:"special-features",level:2},{value:"Developer tools",id:"developer-tools",level:3},{value:"Experimental mode / lab",id:"experimental-mode--lab",level:3},{value:"Color-Contrast-Analysis",id:"color-contrast-analysis",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-steps"},"First steps"),(0,a.kt)("div",{class:"grid md:grid-cols-2 mb-4"},(0,a.kt)("kol-card",{_headline:"Download Cheat Sheet",_level:"2"},(0,a.kt)("kol-link",{slot:"content",_useCase:"nav",_href:"https://public-ui.github.io/cheat-sheet/",_target:"cheat-sheet"},(0,a.kt)("div",{className:"d-flex gap-4 py-2"},(0,a.kt)("kol-link",{className:"homepage",_icon:"codicon codicon-code"}),(0,a.kt)("span",null,"Click here to view and download the cheat sheet for developing."))))),(0,a.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,a.kt)("p",null,"A new React project can be created quickly using the command line wizard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm init kolibri@latest my-kolibri-app\n")),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/public-ui/.github/main/profile/create-kolibri.gif",alt:"Shows how to create a new app with create-kolibri."}),(0,a.kt)("h2",{id:"integration-into-existing-projects"},"Integration into existing projects"),(0,a.kt)("h3",{id:"1-install-the-packages"},"1. Install the packages"),(0,a.kt)("p",null,"To be able to use the components the required npm packages have to be installed.\nDepending on the package manager used, these can be added to the project using one of the following commands."),(0,a.kt)("p",null,"NPM ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i @public-ui/components @public-ui/themes")," or"),(0,a.kt)("p",null,"PNPM ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm i @public-ui/components @public-ui/themes")," or"),(0,a.kt)("p",null,"YARN ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @public-ui/components @public-ui/themes")),(0,a.kt)("h3",{id:"2-embedding-fonts"},"2. Embedding fonts"),(0,a.kt)("p",null,"Fonts are loaded by nature detached from the CSS and must be included in the frame page (HTML file) depending on the KoliBri theme (style guide)."),(0,a.kt)("p",null,"For this purpose, the fonts supplied in the library can be copied into your own assets."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cp -r node_modules/@public-ui/themes/assets public/assets")),(0,a.kt)("p",null,"Then the relevant CSS files can be included with the font definitions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," of the HTML file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="de" dir="ltr">\n    <head>\n        <title>Webapplication | KoliBri</title>\n        <meta charset="UTF-8" />\n        <meta name="description" content="..." />\n        <base href="/" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="shortcut icon" type="image/x-icon" href="assets/kolibri.ico" />\n        <link rel="stylesheet" href="assets/bpa-icons/style.css" />\n        <link rel="stylesheet" href="assets/bundes/style.css" />\n        <link rel="stylesheet" href="assets/codicons/codicon.css" />\n        <link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css" />\n        <link rel="stylesheet" href="assets/icofont/icofont.min.css" />\n        <link rel="stylesheet" href="assets/noto-sans/noto-sans.css" />\n        <link rel="stylesheet" href="assets/kreon/style.css" />\n        <link rel="stylesheet" href="assets/material-icons/iconfont/material-icons.css" />\n        <link rel="stylesheet" href="assets/material-symbols/index.css" />\n        <link rel="stylesheet" href="assets/roboto/roboto.css" />\n        <link rel="stylesheet" href="assets/tabler-icons/tabler-icons.css" />\n    </head>\n</html>\n')),(0,a.kt)("h3",{id:"3-registering-the-component-loaders"},"3. Registering the component loaders"),(0,a.kt)("p",null,"After the preparations are complete, only the component loader needs to be registered.\nIt ensures that the Web Components are reloaded asychronously (lazy) as soon as they are used in the web page."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"register"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets a theme and then registers the loader")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BMF"),(0,a.kt)("td",{parentName:"tr",align:null},"Registers the loader for e.g. the BMF theme")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"defineCustomElements"),(0,a.kt)("td",{parentName:"tr",align:null},"Registers the loader for the Web Components")))),(0,a.kt)("h4",{id:"variant-a-static-project"},"Variant A: Static project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n    <script type=\"module\">\n        import { register } from 'https://esm.sh/@public-ui/components@1.4.0-rc.6';\n        import { defineCustomElements } from 'https://esm.sh/@public-ui/components@1.4.0-rc.6/dist/loader';\n        import { BMF } from 'https://esm.sh/@public-ui/themes@1.4.0-rc.6';\n        register([BMF], defineCustomElements)\n            .then(() => {})\n            .catch(console.warn);\n    <\/script>\n</head>\n<body>\n    <kol-spin _show>\n</body>\n")),(0,a.kt)("h4",{id:"variant-b-react-project"},"Variant B: React project"),(0,a.kt)("h5",{id:"integration"},"Integration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { AppComponent } from './components/app/component';\n\nimport { register } from '@public-ui/components';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { BMF } from '@public-ui/themes';\n\nregister(BMF, defineCustomElements)\n    .then(() => {\n        const htmlDivElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('div#app');\n        if (htmlDivElement instanceof HTMLDivElement) {\n            const root = createRoot(htmlDivElement);\n            root.render(<AppComponent />);\n        }\n    })\n    .catch(console.warn);\n")),(0,a.kt)("h5",{id:"install-adapter"},"Install adapter"),(0,a.kt)("p",null,"An adapter is available for React that allows seamless and typed usage in TSX."),(0,a.kt)("p",null,"NPM ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i @public-ui/react")," or"),(0,a.kt)("p",null,"PNPM ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm i @public-ui/react")," or"),(0,a.kt)("p",null,"YARN ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @public-ui/react")),(0,a.kt)("h5",{id:"use-component"},"Use component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { FunctionComponent } from 'react';\nimport { KolSpin } from '@public-ui/react';\n\nexport const App: FunctionComponent = () => <KolSpin _show />;\n")),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"special-features"},"Special features"),(0,a.kt)("h3",{id:"developer-tools"},"Developer tools"),(0,a.kt)("p",null,"By using the following configuration in the HTML file the developer tools of KoliBri can be activated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\u2026\n<html>\n    <head>\n        <meta name="kolibri" content="dev-mode=true" />\n        \x3c!-- <meta name="kolibri" content="dev-mode=true,experimental-mode=true" /> --\x3e\n    </head>\n    \u2026\n</html>\n')),(0,a.kt)("h3",{id:"experimental-mode--lab"},"Experimental mode / lab"),(0,a.kt)("p",null,"By using the following configuration in the HTML file the experimental mode can be activated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\u2026\n<html>\n    <head>\n        <meta name="kolibri" content="experimental-mode=true" />\n    </head>\n    \u2026\n</html>\n')),(0,a.kt)("h3",{id:"color-contrast-analysis"},"Color-Contrast-Analysis"),(0,a.kt)("p",null,"The color contrast analysis allows detecting color contrast errors within the DOM. By adding the following configuration to the meta tag, the color contrast analysis is enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\u2026\n<html>\n    <head>\n        <meta name="kolibri" content="color-constrast-analysis=true" />\n    </head>\n    \u2026\n</html>\n')))}m.isMDXComponent=!0}}]);