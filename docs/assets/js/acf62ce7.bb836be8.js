"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[64996],{99780:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=i(76776),r=i(108);const s={},d="Architektur",o={id:"concepts/architecture",title:"Architektur",description:"Entwickeln und \xc4ndern",source:"@site/versioned_docs/version-1.5/20-concepts/01-architecture.md",sourceDirName:"20-concepts",slug:"/concepts/architecture",permalink:"/docs/1.5/concepts/architecture",draft:!1,unlisted:!1,tags:[],version:"1.5",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playground",permalink:"/docs/1.5/get-started/playground"},next:{title:"Eigenschaften",permalink:"/docs/1.5/concepts/properties"}},l={},a=[{value:"Entwickeln und \xc4ndern",id:"entwickeln-und-\xe4ndern",level:2},{value:"Alles installieren",id:"alles-installieren",level:3},{value:"Alles bereinigen",id:"alles-bereinigen",level:3},{value:"Web Component-Modul",id:"web-component-modul",level:3},{value:"Modularisierung",id:"modularisierung",level:2},{value:"Einfach",id:"einfach",level:3},{value:"Erweitert",id:"erweitert",level:3},{value:"Design System / Styleguides (UX)",id:"design-system--styleguides-ux",level:2},{value:"Wo ist das Design System / der Styleguide?",id:"wo-ist-das-design-system--der-styleguide",level:3},{value:"Warum?",id:"warum",level:3}];function h(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"architektur",children:"Architektur"}),"\n",(0,t.jsx)(n.h2,{id:"entwickeln-und-\xe4ndern",children:"Entwickeln und \xc4ndern"}),"\n",(0,t.jsxs)(n.p,{children:["F\xfcr die Entwicklung wird ",(0,t.jsx)(n.code,{children:"pnpm"})," als Paketmanager in Verbindung mit ",(0,t.jsx)(n.code,{children:"lerna"})," als Monorepo-Manager verwendet."]}),"\n",(0,t.jsx)(n.h3,{id:"alles-installieren",children:"Alles installieren"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"pnpm i"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Aufgrund der nicht \xf6ffentlich verf\xfcgbaren KoliBri-Pakete muss der ",(0,t.jsx)(n.code,{children:"pnpm i"})," Befehl und der ",(0,t.jsx)(n.code,{children:"pnpm :publish"})," Befehl abwechselnd ausgef\xfchrt werden, bis alle Pakete einmal in der lokalen Registry (verdaccio) liegen (",(0,t.jsx)(n.code,{children:"pnpm i"})," l\xe4uft komplett durch)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sobald alles installiert ist, k\xf6nnen die einzelnen Module modifiziert und gebaut werden."}),"\n",(0,t.jsxs)(n.p,{children:["Die Module ",(0,t.jsx)(n.code,{children:"library"})," und ",(0,t.jsx)(n.code,{children:"storybook"})," k\xf6nnen insbesondere mittels ",(0,t.jsx)(n.code,{children:"npm start"})," angesurft und im Browser angezeigt werden."]}),"\n",(0,t.jsx)(n.h3,{id:"alles-bereinigen",children:"Alles bereinigen"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"pnpm clean"})}),"\n",(0,t.jsx)(n.h3,{id:"web-component-modul",children:"Web Component-Modul"}),"\n",(0,t.jsxs)(n.p,{children:["Im Paket-Verzeichnis (",(0,t.jsx)(n.code,{children:"packages/components"}),") befindet sich das Web Component-Modul. Nach der generellem Installation kann mittels ",(0,t.jsx)(n.code,{children:"npm start"})," die \xdcbersichtsseite aller Komponenten gestartet werden. Diese wird auch verwendet, um Komponenten aufzubauen oder zu modifizieren."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"npm start"})}),"\n",(0,t.jsx)(n.h2,{id:"modularisierung",children:"Modularisierung"}),"\n",(0,t.jsx)(n.p,{children:"Ziel der Modularisierung ist es den technischen Scope pro Modul auf dessen Kernaufgabe zu beschr\xe4nken und damit auch die Pflege und Weiterentwicklung zu vereinfachen."}),"\n",(0,t.jsx)(n.p,{children:"Im Kern befinden sich Funktionalit\xe4ten die sich mit der Zeit f\xfcr hilfreich bei der Umsetzung von Komponenten erwiesen haben und prinzipiell in jeder Web Component-Lib potenziell zu Einsatz kommen k\xf6nnten."}),"\n",(0,t.jsx)(n.p,{children:"Das Schema, die Komponenten und Themes repr\xe4sentieren eine konkrete Komponentenbibliothek. Davon k\xf6nnte es mehrere geben, die zwiebelartig von Innen (KoliBri) nach Au\xdfen aufeinander Aufbauen (s.u.)."}),"\n",(0,t.jsx)(n.p,{children:"Diese Praxis f\xf6rdert die Entstehung neuer Basiskomponenten aus den fachspezifischen Projekten - die durch einen Prozess in KoliBri nach Pr\xfcfung der Qualit\xe4ten und Standard \xfcbernommen werden und mit anderen geteilt kann."}),"\n",(0,t.jsx)(n.h3,{id:"einfach",children:"Einfach"}),"\n",(0,t.jsx)(n.p,{children:"In der folgenden Darstellung wird der Grundaufbau einer Komponentenbibliothek (UI-Lib) dargestellt:"}),"\n",(0,t.jsx)(n.mermaid,{value:" flowchart BT\n subgraph UI-Lib\n Themes .-> Components\n Themes --\x3e Schema\n Components --\x3e Schema\n end\n Schema --\x3e Core\n App/Storybook .-> Components\n App/Storybook .-> FW-Adapter\n App/Storybook --\x3e Themes\n FW-Adapter --\x3e Components"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Module"}),(0,t.jsx)(n.th,{children:"Erl\xe4uterung"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Core"}),(0,t.jsxs)(n.td,{children:["Das ",(0,t.jsx)(n.em,{children:"Core"}),"-Modul beinhaltet die Gesamtarchitektur (Generic Types) und n\xfctzliche Funktionalit\xe4ten (Utils) f\xfcr Web Components."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UI-Lib"}),(0,t.jsx)(n.td,{children:"Das Komponentenbibliotheks-Modul beinhaltet sein Schema und die zum Schema geh\xf6rigen Komponenten und Theme(s)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Schema"}),(0,t.jsxs)(n.td,{children:["Das ",(0,t.jsx)(n.em,{children:"Schema"}),"-Modul dient der typisierten Sicherstellung, dass unabh\xe4ngig erstellte Themes stets kompatibel mit den Schema-spezifischen Komponenten sind. ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.strong,{children:"Hinweis:"})," Es scheint nahezuliegen der einfachheithalber die Module ",(0,t.jsx)(n.em,{children:"Schema"})," und ",(0,t.jsx)(n.em,{children:"Components"})," zusammenzuf\xfchren. Da jedoch die ",(0,t.jsx)(n.em,{children:"Themes"})," (dann abh\xe4ngig vom ",(0,t.jsx)(n.em,{children:"Components"}),"-Modul) bei der Umsetzung der Komponenten hilfreich sind, w\xfcrde das zu einem technischen Abh\xe4ngigkeitsproblem f\xfchren (Loop)."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Components"}),(0,t.jsxs)(n.td,{children:["Das ",(0,t.jsx)(n.em,{children:"Components"}),"-Modul beinhaltet die Implementierung der Web Components."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"App"}),(0,t.jsx)(n.td,{children:"Das App-Modul repr\xe4sentiert eine konkrete Anwendungsimplementierung auf Basis der Komponentenbibliothek (UI-Lib)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Storybook"}),(0,t.jsx)(n.td,{children:"Das Storybook-Modul dient als Dokumentation und Beispiel-Pr\xe4sentation f\xfcr alle Stakeholder."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"erweitert",children:"Erweitert"}),"\n",(0,t.jsx)(n.p,{children:'In der erweiterten Darstellung der Modularisierung wird sichtbar, wie durch die Entkopplung "zwiebelartig" spezifischer werdende Komponentenbibliotheken unter einer Gesamtarchitektur aneinander gereiht werden k\xf6nnen.'}),"\n",(0,t.jsx)(n.mermaid,{value:" flowchart BT\n OtherCustomLibComponents -.-o CustomLibComponents\n subgraph CustomLib\n CustomLibThemes --\x3e CustomLibSchema\n CustomLibThemes .-> CustomLibComponents\n CustomLibComponents --\x3e CustomLibSchema\n end\n subgraph OtherCustomLib\n OtherCustomLibThemes .-> OtherCustomLibComponents\n OtherCustomLibThemes --\x3e OtherCustomLibSchema\n OtherCustomLibComponents --\x3eOtherCustomLibSchema\n end\n subgraph KoliBri\n KoliBriThemes .-> KoliBriComponents\n KoliBriThemes --\x3e KoliBriSchema\n KoliBriComponents --\x3e KoliBriSchema\n end\n subgraph Core\n Utils\n Types\n end\n CustomLibComponents -.-o KoliBriComponents\n KoliBriSchema --\x3e Core\n CustomLibSchema --\x3e Core\n OtherCustomLibSchema --\x3e Core\n App/Storybook --\x3e CustomLibThemes\n App/Storybook --\x3e CustomLibComponents\n App/Storybook --\x3e OtherCustomLibComponents\n App/Storybook --\x3e OtherCustomLibThemes\n App/Storybook --\x3e KoliBriComponents\n App/Storybook --\x3e KoliBriThemes"}),"\n",(0,t.jsx)(n.h2,{id:"design-system--styleguides-ux",children:"Design System / Styleguides (UX)"}),"\n",(0,t.jsx)(n.p,{children:"Es ist wichtig zu verstehen, dass innerhalb einer Komponentenbibliothek (UI-Lib) ein einheitliches Bedienverhalten f\xfcr die Komponenten gilt. Da diese nur einmal konkret und den Anforderungen entsprechend umgesetzt werden."}),"\n",(0,t.jsx)(n.p,{children:"Innerhalb einer Komponentenbibliothek besteht jedoch die M\xf6glichkeit mehrere Themes (Styles) zu erstellen. Das Theme wird dazu Komponenten-spezifische definiert und sp\xe4ter mit den Komponenten paarweise zusammen geladen."}),"\n",(0,t.jsx)(n.h3,{id:"wo-ist-das-design-system--der-styleguide",children:"Wo ist das Design System / der Styleguide?"}),"\n",(0,t.jsx)(n.p,{children:"Ein Theme steht f\xfcr eine konkrete Kombination aus den Komponenten und einem Theme. Genau diese Kombination repr\xe4sentiert dann ein konkretes Design System oder einen konkreten Styleguide."}),"\n",(0,t.jsx)(n.mermaid,{value:" flowchart LR\n subgraph Design System / Styleguide\n direction LR\n Components --- Theme\n end"}),"\n",(0,t.jsx)(n.h3,{id:"warum",children:"Warum?"}),"\n",(0,t.jsx)(n.p,{children:"Ausgangspunkt der Erl\xe4uterung ist die Tatsache, dass HTML und CSS gem\xe4\xdf ihrer Spezifikation schon entkoppelt sind."}),"\n",(0,t.jsx)(n.p,{children:"Innerhalb einer Komponentenbibliothek wird das HTML mittels der Komponenten-Implementierung und das CSS mittels der Style-Informationen definiert."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Wozu dann die modulare Auftrennung?"})}),"\n",(0,t.jsx)(n.p,{children:"Der Anspruch der Gesamtarchitektur und die damit verbundenen Qualit\xe4tskriterien zielen darauf ab, dass die Basiskomponenten nur einmal semantisch implementiert, erprobt und abgenommen werden."}),"\n",(0,t.jsx)(n.p,{children:"Hier bei wird ein bestm\xf6glicher Aufbau (HTML) der Komponenten zwischen Minimalismus und Flexibilit\xe4t und der vollst\xe4ndigen Einhaltung der HTML-Semantik angestrebt. Diese Pr\xe4misse zahlt in die optimale Kompatibilit\xe4t mit allen Ger\xe4ten und assistiven Technologien ein."}),"\n",(0,t.jsx)(n.p,{children:"Schlussfolgernd aus dieser Pr\xe4misse ist klar, dass nicht alle verschiedenen \xe4sthetischen Ideen und Bedienkonzepte aus Design Systemen und Styleguides umgesetzt werden k\xf6nnen."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Anmerkung:"})," Es kommt h\xe4ufig vor, das initiale Design Systeme und Styleguides sp\xe4ter in der Realisierung aufgrund der Anforderungen an die Barrierefreiheit angepasst werden mussten, so dass sie sich am Ende in vielen anfangs kritisch gesehenen Punkten wieder sehr nahe kommen."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Am Ende werden die Webkomponenten auf den Ger\xe4ten der Nutzenden durch eine technische Realisierung zu Anzeige gebracht. Die Technik hat aber bei aller Kreativit\xe4t Grenzen und L\xfccken. Diese zus\xe4tzlich unter allen Anforderungen zu ergr\xfcnden, abzugrenzen und L\xf6sungen zu finden, ist besonders aufwendig."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Schlussendlich wird angestrebt mindestens alle komplexen Basiskomponenten, die im Bezug auf die Barrierefreiheit eine H\xfcrde darstellen, zu standardisieren und dabei die bestm\xf6gliche Gestaltbarkeit anzubieten."})})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},108:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>d});var t=i(80924);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);