"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6819],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||l;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:r,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=n(15882),r=(n(50959),n(17942));const l={title:"Sicherheit",description:"Auf dieser Seite werden das Sicherheitskonzept zu KoliBri beschrieben.",tags:["Architektur","Konzept","Sicherheit","Rechtliches"]},o="Sicherheitskonzept",a={unversionedId:"concepts/sicherheit",id:"concepts/sicherheit",title:"Sicherheit",description:"Auf dieser Seite werden das Sicherheitskonzept zu KoliBri beschrieben.",source:"@site/docs/20-concepts/15-sicherheit.mdx",sourceDirName:"20-concepts",slug:"/concepts/sicherheit",permalink:"/docs/concepts/sicherheit",draft:!1,tags:[{label:"Architektur",permalink:"/docs/tags/architektur"},{label:"Konzept",permalink:"/docs/tags/konzept"},{label:"Sicherheit",permalink:"/docs/tags/sicherheit"},{label:"Rechtliches",permalink:"/docs/tags/rechtliches"}],version:"current",sidebarPosition:15,frontMatter:{title:"Sicherheit",description:"Auf dieser Seite werden das Sicherheitskonzept zu KoliBri beschrieben.",tags:["Architektur","Konzept","Sicherheit","Rechtliches"]},sidebar:"tutorialSidebar",previous:{title:"Datenschutz",permalink:"/docs/concepts/datenschutz"},next:{title:"Komponenten",permalink:"/docs/components/"}},s={},u=[{value:"Einleitung",id:"einleitung",level:2},{value:"Initialer Commit",id:"initialer-commit",level:2},{value:"Ma\xdfnahmen",id:"ma\xdfnahmen",level:2},{value:"Code Review",id:"code-review",level:3},{value:"Contributor",id:"contributor",level:3}],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sicherheitskonzept"},"Sicherheitskonzept"),(0,r.kt)("h2",{id:"einleitung"},"Einleitung"),(0,r.kt)("p",null,"Im Manifest wird der Fokus der Komponenten-Bibliothek definiert. Bezogen auf die Sicherheit k\xf6nnen folgende Punkte herausgestellt werden:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Ziel der Bibliothek ist es, konsistente und barrierefreie Benutzeroberfl\xe4chen f\xfcr webbasierte Projekte bereitzustellen."),(0,r.kt)("li",{parentName:"ul"},"Dabei beschr\xe4nkt sich der technische Scope der Bibliothek ausschlie\xdflich auf die Pr\xe4sentationsschicht."),(0,r.kt)("li",{parentName:"ul"},"Zudem beinhalten die Komponenten keinerlei fachlichen Bezug und sind vollkommen allgemeing\xfcltig konzipiert."),(0,r.kt)("li",{parentName:"ul"},"Jeglicher fachlicher Kontext wird einer Komponente von au\xdfen \u201ereingegeben\u201c und lediglich dargestellt."),(0,r.kt)("li",{parentName:"ul"},"Es gibt dar\xfcber hinaus keinerlei Daten\xfcbertragungsfunktionalit\xe4ten und -speicherung.")),(0,r.kt)("h2",{id:"initialer-commit"},"Initialer Commit"),(0,r.kt)("p",null,"Bevor der Quellcode ver\xf6ffentlicht wurde, wurden u. a. folgende Reviews durchgef\xfchrt:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Qualit\xe4tssicherung:")," Grunds\xe4tzlich werden alle sinnvollen qualit\xe4tssteigernden Werkzeuge eingesetzt, die automatisiert und permanent den Quellcode pr\xfcfen (z. B. ESLint, TS-Prune, Tests, DepCheck, Prettier, Axe u. v. m.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatisches Code-Review:")," Mittels Teamscale wurde der gesamte Quellcode \xfcberpr\xfcft. Hierbei kamen u. a. Tools wie ESLint, Prettier und zahlreiche Pr\xfcfschritte zur Einhaltung der JavaScript/TypeScript-Programmierrichtlinien des ITZBund zum Einsatz."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manuelles Code-Review:")," Zus\xe4tzlich wurde ein Code-Review mittels eines Dienstleisters durchgef\xfchrt, um die Aufbereitung f\xfcr ein \xf6ffentliches Repository bestm\xf6glich umzusetzen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lizenz-Pr\xfcfung:")," Bei der Auswahl der Open-Source-Lizenz folgen wir den Bestrebungen der Europ\xe4ischen Kommission mit der European Union Public Licence v1.2.")),(0,r.kt)("h2",{id:"ma\xdfnahmen"},"Ma\xdfnahmen"),(0,r.kt)("p",null,"In diesen Abschnitt wird beschrieben, welche Ma\xdfnahmen ergriffen werden, um die Sicherheit dauerhaft sicherzustellen."),(0,r.kt)("h3",{id:"code-review"},"Code Review"),(0,r.kt)("p",null,"Alle Git-Repositories sind so konfiguriert, dass \xc4nderungen ausschlie\xdflich \xfcber einen Pull Request verbunden mit einem\nmanuellen Code Review erfolgen k\xf6nnen. Wird eine \xc4nderung \xfcber einen Pull Request bereitgestellt, starten erst einmal alle\neingerichteten Pr\xfcf-Pipelines automatisch und geben \xfcber die Erf\xfcllung aller Qualit\xe4tsma\xdfst\xe4be Feedback. Ist die \xc4nderung\nvollst\xe4ndig und alle automatisierten Pr\xfcfungen waren erfolgreich, muss ein manuelles Review eines Core-Team-Mitglieds erfolgen.\nHierbei darf ein Core-Mitglied nicht seine eigene \xc4nderung mergen."),(0,r.kt)("p",null,"Beim Review ist besonders auf folgende Punkte zu achten:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"der Code darf keine personenbezogenen Daten oder Markennamen enthalten"),(0,r.kt)("li",{parentName:"ul"},"der Contributor muss die CLA akzeptiert haben"),(0,r.kt)("li",{parentName:"ul"},"der Umfang der Code-\xc4nderung muss reviewbar sein (kleinteilig)")),(0,r.kt)("h3",{id:"contributor"},"Contributor"),(0,r.kt)("p",null,"Es gibt interne und externe Contributoren (Beitragende). Interne Contributoren (Core-Team) haben umfangreiche Berechtigungen im Git-Repository und damit direkt am Quellcode und den daraus entstehenden Artefakten. Die externen Contributoren hingegen haben jeweils ein eigenes Git-Repository, sogenannt Forks oder eine Kopie. Auf die geforkten Git-Repositories oder Kopie haben wir (Core-Team) keinen Einfluss."))}h.isMDXComponent=!0}}]);