"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[67995],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(97605),i=(n(50959),n(17942));const l={title:"Inputs, Select und Textarea",description:"KoliBri schafft barrierefreie HTML-Kompositionen und h\xe4lt sich dabei streng an die W3C-Spezifikation.",tags:["Architektur","arc42","Konzept"]},o=void 0,a={unversionedId:"concepts/formular",id:"version-1.7/concepts/formular",title:"Inputs, Select und Textarea",description:"KoliBri schafft barrierefreie HTML-Kompositionen und h\xe4lt sich dabei streng an die W3C-Spezifikation.",source:"@site/versioned_docs/version-1.7/20-concepts/09-formular.mdx",sourceDirName:"20-concepts",slug:"/concepts/formular",permalink:"/docs/concepts/formular",draft:!1,tags:[{label:"Architektur",permalink:"/docs/tags/architektur"},{label:"arc42",permalink:"/docs/tags/arc-42"},{label:"Konzept",permalink:"/docs/tags/konzept"}],version:"1.7",sidebarPosition:9,frontMatter:{title:"Inputs, Select und Textarea",description:"KoliBri schafft barrierefreie HTML-Kompositionen und h\xe4lt sich dabei streng an die W3C-Spezifikation.",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Expert-Slot",permalink:"/docs/concepts/expert-slot"},next:{title:"Datenschutz",permalink:"/docs/concepts/datenschutz"}},u={},s=[{value:"Vergleich zum HTML-Tag &lt;input&gt;",id:"vergleich-zum-html-tag-input",level:2},{value:"Aufteilung",id:"aufteilung",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Im Rahmen des Refactorings zur Verbesserung der Developer Experience haben wir die Input-Komponenten neu strukturiert\nund sie gem\xe4\xdf der ",(0,i.kt)("kol-link",{_href:"https://html.spec.whatwg.org/multipage/input.html",_target:"w3c",_label:"W3C-Aufteilung"}),' in separierte Komponenten umgesetzt.\nAuf diese Weise stellen die jeweiligen Komponenten nur noch die Eigenschaften zur Verf\xfcgung, die beim jeweiligen Typ auch eine Funktion haben. Eigenschaften die zuvor\n"mitgeschleppt" wurden, aber keinerlei Funktion haben, wurden aus der Programmierung entfernt.'),(0,i.kt)("h2",{id:"vergleich-zum-html-tag-input"},"Vergleich zum HTML-Tag ","<","input",">"),(0,i.kt)("p",null,"Schaut man sich die"," ",(0,i.kt)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/Input",_target:"mozilla",_label:""},"Umsetzung des ",(0,i.kt)("code",null,"<input>"),"-Tags")," ","an, dann werden alle Typen eines Eingabefelds mit nur einem Tag (Komponente) umgesetzt. Dadurch kommt es dazu, dass zwar alle Eigenschaften (Attribute/Properties) m\xf6glich sind, aber in Abh\xe4ngigkeit vom Typ keinerlei Funktion haben."),(0,i.kt)("p",null,"Diese Umsetzung des Standard-",(0,i.kt)("code",null,"<input>"),"-Tags f\xfchrt dazu, dass i.d.R. mehr Eigenschaften angeboten werden, als eigentlich funktional zum Typ des Eingabefeldes passen. Das kann zu Missverst\xe4ndnissen bei der Entwicklung f\xfchren."),(0,i.kt)("h2",{id:"aufteilung"},"Aufteilung"),(0,i.kt)("p",null,"Die verschiedenen Typen der Eingabefelder wurden in folgende ",(0,i.kt)("b",null,"KoliBri"),"-Komponenten aufgeteilt:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"KolInputCheckbox"),(0,i.kt)("li",null,"KolInputColor"),(0,i.kt)("li",null,"KolInputDate (ab v1.1.10)"),(0,i.kt)("li",null,"KolInputEmail"),(0,i.kt)("li",null,"KolInputFile"),(0,i.kt)("li",null,"KolInputLocalDateTime (offen, in KolInputDate enthalten)"),(0,i.kt)("li",null,"KolInputNumber"),(0,i.kt)("li",null,"KolInputPassword"),(0,i.kt)("li",null,"KolInputRadio (KolInputRadioGroup wird abgel\xf6st)"),(0,i.kt)("li",null,"KolInputRange"),(0,i.kt)("li",null,"KolInputText"),(0,i.kt)("li",null,"KolSelect"),(0,i.kt)("li",null,"KolTextarea")))}d.isMDXComponent=!0}}]);