"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[30329],{17942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(15882),i=(n(50959),n(17942));const a={},o=void 0,l={unversionedId:"readmes/indented-text/readme",id:"version-1.6.2/readmes/indented-text/readme",title:"readme",description:"Heben Sie einzelne Informationen auf Ihrer Webseite optisch mit der IndentedText-Komponente hervor. Die Komponente eignet sich nicht nur f\xfcr besondere Abschnitte auf der Webseite, sondern auch beispielsweise f\xfcr Zitate (f\xfcr verlinkte Zitate kann auch die  verwendet werden.).",source:"@site/versioned_docs/version-1.6.2/readmes/indented-text/readme.md",sourceDirName:"readmes/indented-text",slug:"/readmes/indented-text/",permalink:"/en/docs/readmes/indented-text/",draft:!1,tags:[],version:"1.6.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/en/docs/readmes/image/"},next:{title:"readme",permalink:"/en/docs/readmes/input-adapter-leanup/"}},d={},s=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}],u={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Heben Sie einzelne Informationen auf Ihrer Webseite optisch mit der ",(0,i.kt)("strong",{parentName:"p"},"IndentedText"),"-Komponente hervor. Die Komponente eignet sich nicht nur f\xfcr besondere Abschnitte auf der Webseite, sondern auch beispielsweise f\xfcr Zitate (f\xfcr verlinkte Zitate kann auch die ",(0,i.kt)("kol-link",{_href:"/docs/components/quote/",_label:"/docs/components/quote/",_label:"kol-quote-Komponente"})," verwendet werden.)."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<kol-indented-text>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore\n    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing\n    elitr, sed diam nonumy eirmod tempor invidunt.\n</kol-indented-text>\n")),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("kol-indented-text",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Die Komponente besitzt keine weiteren Attribute. Der hervorzuhebende Text wird zwischen das \xf6ffnende und das schlie\xdfende Tag geschrieben."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,i.kt)("strong",{parentName:"li"},"IndentedText"),"-Komponente, um erg\xe4nzende Informationen zu einem Hauptthema optisch hervorzuheben."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Informationen in der Komponente auszugeben, die eine Aktion der Nutzer:innen erfordern."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, viele ",(0,i.kt)("strong",{parentName:"li"},"IndentedText"),"-Komponenten auf einer Einzelseite zu integrieren, da hierdurch die \xdcbersichtlichkeit sinkt.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("p",null,"Verwenden Sie die ",(0,i.kt)("strong",{parentName:"p"},"IndentedText"),"-Komponente, um Textpassagen oder Informationen optisch hervorzuheben."),(0,i.kt)("h2",{id:"slots"},"Slots"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Slot"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Der Text.")))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./details"},"kol-details")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./form"},"kol-form"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-details --\x3e kol-indented-text\n  kol-form --\x3e kol-indented-text\n  style kol-indented-text fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);