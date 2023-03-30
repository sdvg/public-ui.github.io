"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9205],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=i,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(15882),i=(n(59496),n(49613));const a={title:"FAQ",description:"H\xe4ufig gestellte Fragen zu KoliBri",tags:["Architektur","arc42","FAQ","Konzept","Lizenz","Rechtliches"]},o="H\xe4ufig gestellte Fragen (FAQ)",l={unversionedId:"faq",id:"faq",title:"FAQ",description:"H\xe4ufig gestellte Fragen zu KoliBri",source:"@site/docs/03-faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,tags:[{label:"Architektur",permalink:"/docs/tags/architektur"},{label:"arc42",permalink:"/docs/tags/arc-42"},{label:"FAQ",permalink:"/docs/tags/faq"},{label:"Konzept",permalink:"/docs/tags/konzept"},{label:"Lizenz",permalink:"/docs/tags/lizenz"},{label:"Rechtliches",permalink:"/docs/tags/rechtliches"}],version:"current",sidebarPosition:3,frontMatter:{title:"FAQ",description:"H\xe4ufig gestellte Fragen zu KoliBri",tags:["Architektur","arc42","FAQ","Konzept","Lizenz","Rechtliches"]},sidebar:"tutorialSidebar",previous:{title:"Lizenz",permalink:"/docs/license"},next:{title:"Get Started",permalink:"/docs/category/get-started"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"h\xe4ufig-gestellte-fragen-faq"},"H\xe4ufig gestellte Fragen (FAQ)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wie abh\xe4ngig mach ich mich, wenn ich KoliBri einsetze?"),(0,i.kt)("br",null),"\nVergleicht man KoliBri mit einem LEGO\xae-Set, dann kann man die enthaltenen Bausteine einfach mir anderen Bausteinen mischen, um die Gesamtanwendung abzubilden ",(0,i.kt)("em",{parentName:"li"},"(s. blaue, orange und graue Komponenten)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wie kann ich eine Komponente beeinflussen, wenn n\xf6tig?"),(0,i.kt)("br",null),"\nKoliBri-Komponenten sind zur Sicherstellung der Barrierefreiheit sehr restriktiv und werden durch Komposition wiederverwendet. Anpassungen von au\xdfen lassen sich nur durch das ",(0,i.kt)("strong",{parentName:"li"},"Wrappen")," oder den ",(0,i.kt)("strong",{parentName:"li"},"Expert-Slot")," vornehmen ",(0,i.kt)("em",{parentName:"li"},"(s. orange in blau, blau in orange)"),". Das Styling ist \xfcber das ",(0,i.kt)("strong",{parentName:"li"},"Theme-Konzept")," durch Konfiguration m\xf6glich."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Was mach ich, wenn eine Komponente oder Funktion fehlt?"),(0,i.kt)("br",null),"\nNeue ",(0,i.kt)("strong",{parentName:"li"},"fachlich neutrale Komponenten")," oder ",(0,i.kt)("strong",{parentName:"li"},"Funktionen")," sollen innerhalb von KoliBri realisiert werden. Hierbei ist das ",(0,i.kt)("strong",{parentName:"li"},"Mitwirken")," ausdr\xfccklich erw\xfcnscht und beschleunigt die Umsetzung.")))}p.isMDXComponent=!0}}]);