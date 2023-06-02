"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8626],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(15882),i=(n(50959),n(17942));const o={title:"Testvorgehen",description:"Auf dieser Seite wird das Testkonzept beschrieben.",tags:["Barrierefreiheit","BIK BITV","Konzept"]},s="Testvorgehen",a={unversionedId:"concepts/test",id:"concepts/test",title:"Testvorgehen",description:"Auf dieser Seite wird das Testkonzept beschrieben.",source:"@site/docs/20-concepts/03-test.md",sourceDirName:"20-concepts",slug:"/concepts/test",permalink:"/docs/concepts/test",draft:!1,tags:[{label:"Barrierefreiheit",permalink:"/docs/tags/barrierefreiheit"},{label:"BIK BITV",permalink:"/docs/tags/bik-bitv"},{label:"Konzept",permalink:"/docs/tags/konzept"}],version:"current",sidebarPosition:3,frontMatter:{title:"Testvorgehen",description:"Auf dieser Seite wird das Testkonzept beschrieben.",tags:["Barrierefreiheit","BIK BITV","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Architektur",permalink:"/docs/concepts/architecture"},next:{title:"Theming",permalink:"/docs/concepts/styling/theming"}},l={},u=[{value:"Test neuer Komponenten und Funktionalit\xe4ten",id:"test-neuer-komponenten-und-funktionalit\xe4ten",level:2},{value:"Testergebnisse und Transparenz",id:"testergebnisse-und-transparenz",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testvorgehen"},"Testvorgehen"),(0,i.kt)("p",null,"Nur durch umfangreiche und kontinuierliche Durchf\xfchrung von Tests k\xf6nnen die Funktionalit\xe4t und die Barrierefreiheit als elementare Qualit\xe4tsziele von KoliBri dauerhaft sichergestellt werden."),(0,i.kt)("p",null,"Zur Sicherstellung der korrekten Funktionsweise der Komponenten werden dabei etablierte Test-Methoden wie Unit-Test, Snapshot-Test und visuelle Screenshot-Tests angewendet."),(0,i.kt)("p",null,"Um die Barrierefreiheit der KoliBri-Komponentenbibliothek zu gew\xe4hrleisten, wurde ein Testvorgehen basierend auf dem BIK BITV-Test etabliert, das an die Besonderheiten der Entwicklung von Web Components angepasst wurde. Dazu wurden die einzelnen Pr\xfcfschritte des BIK BITV-Tests hinsichtlich ihrer Anwendbarkeit auf jede zu testende Komponenten \xfcberpr\xfcft und somit ein auf die Komponentenbibliothek abgestimmter Testkatalog definiert. Die Verantwortung f\xfcr die Durchf\xfchrung obliegt dabei dem ITZBund-internen Barrierefreiheitstestteam."),(0,i.kt)("h2",{id:"test-neuer-komponenten-und-funktionalit\xe4ten"},"Test neuer Komponenten und Funktionalit\xe4ten"),(0,i.kt)("p",null,"Neue Komponenten oder Funktionalit\xe4ten k\xf6nnen als ungetestet markiert sein, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten ggf. erst nach einem abgeschlossenen Release erfolgen."),(0,i.kt)("h2",{id:"testergebnisse-und-transparenz"},"Testergebnisse und Transparenz"),(0,i.kt)("p",null,"Wir arbeiten aktuell daran alle Test-Ergebnisse in die Komponent-Dokumentation zu \xfcbernehmen, um eine bestm\xf6gliche Transparenz zu erm\xf6glichen. So ist es m\xf6glich den Test-Umfang zu sehen, nachvollziehen zu k\xf6nnen und ggf. Hinweise geben zu k\xf6nnen, wo der Test verbessert werden kann."))}p.isMDXComponent=!0}}]);