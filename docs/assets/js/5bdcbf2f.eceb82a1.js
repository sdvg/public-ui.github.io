"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[14354],{17942:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var i=t(50959);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),h=r,c=m["".concat(s,".").concat(h)]||m[h]||p[h]||a;return t?i.createElement(c,o(o({ref:n},u),{},{components:t})):i.createElement(c,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},41664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(97605),r=(t(50959),t(17942));const a={},o="Architektur",l={unversionedId:"concepts/architecture",id:"version-1.7/concepts/architecture",title:"Architektur",description:"Entwickeln und \xc4ndern",source:"@site/versioned_docs/version-1.7/20-concepts/01-architecture.md",sourceDirName:"20-concepts",slug:"/concepts/architecture",permalink:"/docs/concepts/architecture",draft:!1,tags:[],version:"1.7",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playground",permalink:"/docs/get-started/playground"},next:{title:"Eigenschaften",permalink:"/docs/concepts/properties"}},s={},d=[{value:"Entwickeln und \xc4ndern",id:"entwickeln-und-\xe4ndern",level:2},{value:"Alles installieren",id:"alles-installieren",level:3},{value:"Alles bereinigen",id:"alles-bereinigen",level:3},{value:"Web Component-Modul",id:"web-component-modul",level:3},{value:"Modularisierung",id:"modularisierung",level:2},{value:"Einfach",id:"einfach",level:3},{value:"Erweitert",id:"erweitert",level:3},{value:"Design System / Styleguides (UX)",id:"design-system--styleguides-ux",level:2},{value:"Wo ist das Design System / der Styleguide?",id:"wo-ist-das-design-system--der-styleguide",level:3},{value:"Warum?",id:"warum",level:3}],u={toc:d},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architektur"},"Architektur"),(0,r.kt)("h2",{id:"entwickeln-und-\xe4ndern"},"Entwickeln und \xc4ndern"),(0,r.kt)("p",null,"F\xfcr die Entwicklung wird ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," als Paketmanager in Verbindung mit ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," als Monorepo-Manager verwendet."),(0,r.kt)("h3",{id:"alles-installieren"},"Alles installieren"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm i")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Aufgrund der nicht \xf6ffentlich verf\xfcgbaren KoliBri-Pakete muss der ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm i")," Befehl und der ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm :publish")," Befehl abwechselnd ausgef\xfchrt werden, bis alle Pakete einmal in der lokalen Registry (verdaccio) liegen (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm i")," l\xe4uft komplett durch).")),(0,r.kt)("p",null,"Sobald alles installiert ist, k\xf6nnen die einzelnen Module modifiziert und gebaut werden."),(0,r.kt)("p",null,"Die Module ",(0,r.kt)("inlineCode",{parentName:"p"},"library")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"storybook")," k\xf6nnen insbesondere mittels ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," angesurft und im Browser angezeigt werden."),(0,r.kt)("h3",{id:"alles-bereinigen"},"Alles bereinigen"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm clean")),(0,r.kt)("h3",{id:"web-component-modul"},"Web Component-Modul"),(0,r.kt)("p",null,"Im Paket-Verzeichnis (",(0,r.kt)("inlineCode",{parentName:"p"},"packages/components"),") befindet sich das Web Component-Modul. Nach der generellem Installation kann mittels ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," die \xdcbersichtsseite aller Komponenten gestartet werden. Diese wird auch verwendet, um Komponenten aufzubauen oder zu modifizieren."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm start")),(0,r.kt)("h2",{id:"modularisierung"},"Modularisierung"),(0,r.kt)("p",null,"Ziel der Modularisierung ist es den technischen Scope pro Modul auf dessen Kernaufgabe zu beschr\xe4nken und damit auch die Pflege und Weiterentwicklung zu vereinfachen."),(0,r.kt)("p",null,"Im Kern befinden sich Funktionalit\xe4ten die sich mit der Zeit f\xfcr hilfreich bei der Umsetzung von Komponenten erwiesen haben und prinzipiell in jeder Web Component-Lib potenziell zu Einsatz kommen k\xf6nnten."),(0,r.kt)("p",null,"Das Schema, die Komponenten und Themes repr\xe4sentieren eine konkrete Komponentenbibliothek. Davon k\xf6nnte es mehrere geben, die zwiebelartig von Innen (KoliBri) nach Au\xdfen aufeinander Aufbauen (s.u.)."),(0,r.kt)("p",null,"Diese Praxis f\xf6rdert die Entstehung neuer Basiskomponenten aus den fachspezifischen Projekten - die durch einen Prozess in KoliBri nach Pr\xfcfung der Qualit\xe4ten und Standard \xfcbernommen werden und mit anderen geteilt kann."),(0,r.kt)("h3",{id:"einfach"},"Einfach"),(0,r.kt)("p",null,"In der folgenden Darstellung wird der Grundaufbau einer Komponentenbibliothek (UI-Lib) dargestellt:"),(0,r.kt)("mermaid",{value:"  flowchart BT\n    subgraph UI-Lib\n      Themes .-> Components\n      Themes --\x3e Schema\n      Components --\x3e Schema\n    end\n    Schema --\x3e Core\n    App/Storybook .-> Components\n    App/Storybook .-> FW-Adapter\n    App/Storybook --\x3e Themes\n    FW-Adapter --\x3e Components"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Module"),(0,r.kt)("th",{parentName:"tr",align:null},"Erl\xe4uterung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Core"),(0,r.kt)("td",{parentName:"tr",align:null},"Das ",(0,r.kt)("em",{parentName:"td"},"Core"),"-Modul beinhaltet die Gesamtarchitektur (Generic Types) und n\xfctzliche Funktionalit\xe4ten (Utils) f\xfcr Web Components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UI-Lib"),(0,r.kt)("td",{parentName:"tr",align:null},"Das Komponentenbibliotheks-Modul beinhaltet sein Schema und die zum Schema geh\xf6rigen Komponenten und Theme(s).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Das ",(0,r.kt)("em",{parentName:"td"},"Schema"),"-Modul dient der typisierten Sicherstellung, dass unabh\xe4ngig erstellte Themes stets kompatibel mit den Schema-spezifischen Komponenten sind. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Hinweis:")," Es scheint nahezuliegen der einfachheithalber die Module ",(0,r.kt)("em",{parentName:"td"},"Schema")," und ",(0,r.kt)("em",{parentName:"td"},"Components")," zusammenzuf\xfchren. Da jedoch die ",(0,r.kt)("em",{parentName:"td"},"Themes")," (dann abh\xe4ngig vom ",(0,r.kt)("em",{parentName:"td"},"Components"),"-Modul) bei der Umsetzung der Komponenten hilfreich sind, w\xfcrde das zu einem technischen Abh\xe4ngigkeitsproblem f\xfchren (Loop).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Components"),(0,r.kt)("td",{parentName:"tr",align:null},"Das ",(0,r.kt)("em",{parentName:"td"},"Components"),"-Modul beinhaltet die Implementierung der Web Components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App"),(0,r.kt)("td",{parentName:"tr",align:null},"Das App-Modul repr\xe4sentiert eine konkrete Anwendungsimplementierung auf Basis der Komponentenbibliothek (UI-Lib).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Storybook"),(0,r.kt)("td",{parentName:"tr",align:null},"Das Storybook-Modul dient als Dokumentation und Beispiel-Pr\xe4sentation f\xfcr alle Stakeholder.")))),(0,r.kt)("h3",{id:"erweitert"},"Erweitert"),(0,r.kt)("p",null,'In der erweiterten Darstellung der Modularisierung wird sichtbar, wie durch die Entkopplung "zwiebelartig" spezifischer werdende Komponentenbibliotheken unter einer Gesamtarchitektur aneinander gereiht werden k\xf6nnen.'),(0,r.kt)("mermaid",{value:"  flowchart BT\n    OtherCustomLibComponents -.-o CustomLibComponents\n    subgraph CustomLib\n      CustomLibThemes --\x3e CustomLibSchema\n      CustomLibThemes .-> CustomLibComponents\n      CustomLibComponents --\x3e CustomLibSchema\n    end\n    subgraph OtherCustomLib\n      OtherCustomLibThemes .-> OtherCustomLibComponents\n      OtherCustomLibThemes --\x3e OtherCustomLibSchema\n      OtherCustomLibComponents --\x3eOtherCustomLibSchema\n    end\n    subgraph KoliBri\n      KoliBriThemes .-> KoliBriComponents\n      KoliBriThemes --\x3e KoliBriSchema\n      KoliBriComponents --\x3e KoliBriSchema\n    end\n    subgraph Core\n      Utils\n      Types\n    end\n    CustomLibComponents -.-o KoliBriComponents\n    KoliBriSchema --\x3e Core\n    CustomLibSchema --\x3e Core\n    OtherCustomLibSchema --\x3e Core\n    App/Storybook --\x3e CustomLibThemes\n    App/Storybook --\x3e CustomLibComponents\n    App/Storybook --\x3e OtherCustomLibComponents\n    App/Storybook --\x3e OtherCustomLibThemes\n    App/Storybook --\x3e KoliBriComponents\n    App/Storybook --\x3e KoliBriThemes"}),(0,r.kt)("h2",{id:"design-system--styleguides-ux"},"Design System / Styleguides (UX)"),(0,r.kt)("p",null,"Es ist wichtig zu verstehen, dass innerhalb einer Komponentenbibliothek (UI-Lib) ein einheitliches Bedienverhalten f\xfcr die Komponenten gilt. Da diese nur einmal konkret und den Anforderungen entsprechend umgesetzt werden."),(0,r.kt)("p",null,"Innerhalb einer Komponentenbibliothek besteht jedoch die M\xf6glichkeit mehrere Themes (Styles) zu erstellen. Das Theme wird dazu Komponenten-spezifische definiert und sp\xe4ter mit den Komponenten paarweise zusammen geladen."),(0,r.kt)("h3",{id:"wo-ist-das-design-system--der-styleguide"},"Wo ist das Design System / der Styleguide?"),(0,r.kt)("p",null,"Ein Theme steht f\xfcr eine konkrete Kombination aus den Komponenten und einem Theme. Genau diese Kombination repr\xe4sentiert dann ein konkretes Design System oder einen konkreten Styleguide."),(0,r.kt)("mermaid",{value:"  flowchart LR\n    subgraph Design System / Styleguide\n        direction LR\n      Components --- Theme\n    end"}),(0,r.kt)("h3",{id:"warum"},"Warum?"),(0,r.kt)("p",null,"Ausgangspunkt der Erl\xe4uterung ist die Tatsache, dass HTML und CSS gem\xe4\xdf ihrer Spezifikation schon entkoppelt sind."),(0,r.kt)("p",null,"Innerhalb einer Komponentenbibliothek wird das HTML mittels der Komponenten-Implementierung und das CSS mittels der Style-Informationen definiert."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wozu dann die modulare Auftrennung?")),(0,r.kt)("p",null,"Der Anspruch der Gesamtarchitektur und die damit verbundenen Qualit\xe4tskriterien zielen darauf ab, dass die Basiskomponenten nur einmal semantisch implementiert, erprobt und abgenommen werden."),(0,r.kt)("p",null,"Hier bei wird ein bestm\xf6glicher Aufbau (HTML) der Komponenten zwischen Minimalismus und Flexibilit\xe4t und der vollst\xe4ndigen Einhaltung der HTML-Semantik angestrebt. Diese Pr\xe4misse zahlt in die optimale Kompatibilit\xe4t mit allen Ger\xe4ten und assistiven Technologien ein."),(0,r.kt)("p",null,"Schlussfolgernd aus dieser Pr\xe4misse ist klar, dass nicht alle verschiedenen \xe4sthetischen Ideen und Bedienkonzepte aus Design Systemen und Styleguides umgesetzt werden k\xf6nnen."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Anmerkung:")," Es kommt h\xe4ufig vor, das initiale Design Systeme und Styleguides sp\xe4ter in der Realisierung aufgrund der Anforderungen an die Barrierefreiheit angepasst werden mussten, so dass sie sich am Ende in vielen anfangs kritisch gesehenen Punkten wieder sehr nahe kommen.")),(0,r.kt)("p",null,"Am Ende werden die Webkomponenten auf den Ger\xe4ten der Nutzenden durch eine technische Realisierung zu Anzeige gebracht. Die Technik hat aber bei aller Kreativit\xe4t Grenzen und L\xfccken. Diese zus\xe4tzlich unter allen Anforderungen zu ergr\xfcnden, abzugrenzen und L\xf6sungen zu finden, ist besonders aufwendig."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Schlussendlich wird angestrebt mindestens alle komplexen Basiskomponenten, die im Bezug auf die Barrierefreiheit eine H\xfcrde darstellen, zu standardisieren und dabei die bestm\xf6gliche Gestaltbarkeit anzubieten.")))}p.isMDXComponent=!0}}]);