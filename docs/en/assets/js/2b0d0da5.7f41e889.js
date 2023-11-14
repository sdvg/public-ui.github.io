"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[21097],{17942:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(50959);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(97605),i=(t(50959),t(17942));const o={title:"Swizzling",description:"Komplexere Anforderungen an die Komponenten k\xf6nnen mittels Swippling erm\xf6glicht werden.",tags:["Architektur","arc42","Konzept"]},a=void 0,l={unversionedId:"concepts/swizzling",id:"version-1.6/concepts/swizzling",title:"Swizzling",description:"Komplexere Anforderungen an die Komponenten k\xf6nnen mittels Swippling erm\xf6glicht werden.",source:"@site/versioned_docs/version-1.6/20-concepts/07-swizzling.md",sourceDirName:"20-concepts",slug:"/concepts/swizzling",permalink:"/en/docs/1.6/concepts/swizzling",draft:!1,tags:[{label:"Architektur",permalink:"/en/docs/1.6/tags/architektur"},{label:"arc42",permalink:"/en/docs/1.6/tags/arc-42"},{label:"Konzept",permalink:"/en/docs/1.6/tags/konzept"}],version:"1.6",sidebarPosition:7,frontMatter:{title:"Swizzling",description:"Komplexere Anforderungen an die Komponenten k\xf6nnen mittels Swippling erm\xf6glicht werden.",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Scss",permalink:"/en/docs/1.6/concepts/styling/scss"},next:{title:"Expert-Slot",permalink:"/en/docs/1.6/concepts/expert-slot"}},p={},s=[{value:"Motivation",id:"motivation",level:2},{value:"Definition",id:"definition",level:2},{value:"Varianten",id:"varianten",level:2},{value:"Wrapping",id:"wrapping",level:3},{value:"Overwriting",id:"overwriting",level:3}],c={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Zahlreiche teils komplexe Anforderungen an Komponenten von Design-Systemen oder Komponenten-Bibliotheken m\xfcssten nicht immer wieder aufs Neue betrachtet werden, wenn es kleinteilige, gut wiederverwendbare Basis-Komponenten g\xe4be, die diese Anforderungen mit sich bringen."),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Unter Swippling definieren wir die M\xf6glichkeit eine vorhandene Komponente entweder von Au\xdfen modifizieren zu k\xf6nnen oder die innere Konstruktion zu ersetzen. Beides zahlt in eine hohe Wiederverwendbarkeit ein."),(0,i.kt)("h2",{id:"varianten"},"Varianten"),(0,i.kt)("h3",{id:"wrapping"},"Wrapping"),(0,i.kt)("p",null,"Die einfachste Methode eine KoliBri-Komponente auf eigene Bed\xfcrfnisse anzupassen, ist das Wrapping. Hierbei wird eine eigene Komponente um die KoliBri-Komponente (Dekorator-Pattern) drumherum gebaut und au\xdfen individualisiert."),(0,i.kt)("h3",{id:"overwriting"},"Overwriting"),(0,i.kt)("p",null,"Eine andere Variante des Swippling ist das Overwriting der inneren Komponenten-Konstruktion. Bei Web Components wird dies h\xe4ufig mittels Slots gemacht. In KoliBri haben wir daf\xfcr die ",(0,i.kt)("kol-link",{_href:"expert-slot",_label:"Expert-Slots"})," eingef\xfchrt."))}u.isMDXComponent=!0}}]);