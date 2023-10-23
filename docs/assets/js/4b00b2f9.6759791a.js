"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[32976],{17942:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(50959);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(52319),i=(t(50959),t(17942));const s={title:"Manifest",description:"Das Manifest setzt den Orientierungsrahmen bei unseren Entscheidungen.",tags:["Architektur","arc42","Manifest"]},a=void 0,o={unversionedId:"manifest",id:"version-1.6/manifest",title:"Manifest",description:"Das Manifest setzt den Orientierungsrahmen bei unseren Entscheidungen.",source:"@site/versioned_docs/version-1.6/01-manifest.mdx",sourceDirName:".",slug:"/manifest",permalink:"/docs/1.6/manifest",draft:!1,tags:[{label:"Architektur",permalink:"/docs/1.6/tags/architektur"},{label:"arc42",permalink:"/docs/1.6/tags/arc-42"},{label:"Manifest",permalink:"/docs/1.6/tags/manifest"}],version:"1.6",sidebarPosition:1,frontMatter:{title:"Manifest",description:"Das Manifest setzt den Orientierungsrahmen bei unseren Entscheidungen.",tags:["Architektur","arc42","Manifest"]},sidebar:"tutorialSidebar",previous:{title:"Willkommen",permalink:"/docs/1.6/"},next:{title:"FAQ",permalink:"/docs/1.6/faq"}},l={},u=[],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"manifest"},(0,i.kt)("blockquote",null,"We make the HTML accessible and themeable for reuse."),(0,i.kt)("h2",null,"\xa7 1 Benutzerfreundlichkeit"),(0,i.kt)("p",null,"Das oberste Ziel ist die Bereitstellung standardisierter, semantisch barrierefreier Komponenten f\xfcr das Web. Wir stellen das mittels klar definierter Komponenten-APIs und einem restriktiven Zugriff auf das Innere der Komponenten sicher. Die Usability der Komponenten wird ma\xdfgeblich durch die Pr\xfcfschritte der WCAG und BITV getrieben, wodurch das Verhalten der einzelnen interaktiven Elemente standardisiert wird. Aufbauend auf dieser Basis, kann die \xc4sthetik der Komponenten mittels des entkoppelten KoliBri-Designers frei gestaltet werden."),(0,i.kt)("h2",null,"\xa7 2 Kompatibilit\xe4t"),(0,i.kt)("p",null,"Alle Komponenten werden Framework-agnostisch als Web Components umgesetzt und lassen sich somit universell in allen webbasierten Projekten leicht wiederverwenden. Zus\xe4tzlich bieten wir zahlreiche Adapter f\xfcr die popul\xe4rsten Frameworks an, um eine noch bessere Developer Experience (DX) bereitzustellen."),(0,i.kt)("h2",null,"\xa7 3 Portabilit\xe4t"),(0,i.kt)("p",null,"Der Fokus liegt auf kleinteilige Komponenten (z.B. Button), die sich gut wiederverwenden lassen. Das Besondere daran ist, dass ein HTML-Button oder -Input nicht ohne Weiteres barrierefrei ist. Ein KoliBri-Button oder -Input ber\xfccksichtigt jedoch die zahlreichen Anwendungsf\xe4lle und die dabei zu beachtende semantische Konstruktion der Komponenten."),(0,i.kt)("h2",null,"\xa7 4 Wartbarkeit"),(0,i.kt)("p",null,"F\xfcr die Realisierung werden die modernsten und popul\xe4rsten Tools aus der Webentwicklung verwendet. Neben der Programmiersprache TypeScript sind auch Aspekte der Wiederverwendbarkeit f\xfcr andere Design-Systeme und Komponenten-Bibliotheken eingeflossen. Die Architektur unterliegt eine entkoppelten Modularit\xe4t und hohen Automatisierungsgrad (DevOps)."),(0,i.kt)("h2",null,"\xa7 5 Funktionale Eignung"),(0,i.kt)("p",null,"Es gibt keine vollkommene L\xf6sung. Es ist jedoch der Anspruch, funktional alles zu erm\xf6glichen, was \xfcbergreifend und mit dem strengen Blick auf die W3C Webstandards vereinbar ist. Funktionalit\xe4ten k\xf6nnen somit entweder in die Komponenten von KoliBri selbst einflie\xdfen oder mittels des Swizzling-Konzepts hinzugef\xfcgt werden."),(0,i.kt)("h2",null,"\xa7 6 Sicherheit"),(0,i.kt)("p",null,"Alle Komponenten dienen ausschlie\xdflich der im Sinne eines Corporate Designs oder Design Systems angestrebten konsistenten und barrierefreien Darstellung von webbasierten Benutzeroberfl\xe4chen. Wir stellen eine allgemeing\xfcltige und fachlich neutrale Bibliothek ohne jegliche Daten\xfcbertragungsfunktionalit\xe4ten und -speicherung bereit.")))}p.isMDXComponent=!0}}]);