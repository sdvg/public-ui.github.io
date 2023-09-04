"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[19467],{17942:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(50959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(15882),o=(t(50959),t(17942));const i={},a="Interne Komponenten",c={unversionedId:"components/internal/index",id:"version-1.5.3/components/internal/index",title:"Interne Komponenten",description:"In KoliBri gibt es eine Reihe von Komponenten, die innerhalb von anderen Komponenten wiederverwendet werden und nicht f\xfcr die direkte Verwendung vorgesehen sind. Sie unterst\xfctzen die Wartbarkeit und Funktionalit\xe4t des Systems.",source:"@site/versioned_docs/version-1.5.3/30-components/10-internal/index.md",sourceDirName:"30-components/10-internal",slug:"/components/internal/",permalink:"/docs/1.5.3/components/internal/",draft:!1,tags:[],version:"1.5.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Komponenten",permalink:"/docs/1.5.3/components/"},next:{title:"Veraltete Komponenten",permalink:"/docs/1.5.3/components/deprecated/"}},l={},s=[],p={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interne-komponenten"},"Interne Komponenten"),(0,o.kt)("p",null,"In KoliBri gibt es eine Reihe von Komponenten, die innerhalb von anderen Komponenten wiederverwendet werden und nicht f\xfcr die direkte Verwendung vorgesehen sind. Sie unterst\xfctzen die Wartbarkeit und Funktionalit\xe4t des Systems."),(0,o.kt)("p",null,"Damit Sie optimal wiederverwendet werden k\xf6nnen, haben Sie meistens auch keinen aktiven Shadow-Root und sind nicht explizit stylebar. Sie werden h\xe4ufig \xfcber das Styling der umgebenden Komponente gestaltet."),(0,o.kt)("p",null,"Zudem sind sie alleinstehend nicht barrierefrei, weil Sie ja als Teil einer Gesamtkomponente konzipiert sind. Sie sind also nicht f\xfcr die direkte Verwendung gedacht."))}u.isMDXComponent=!0}}]);