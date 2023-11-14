"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[89889],{17942:(e,n,i)=>{i.d(n,{Zo:()=>d,kt:()=>g});var t=i(50959);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},d=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(i),h=r,g=c["".concat(o,".").concat(h)]||c[h]||m[h]||a;return i?t.createElement(g,s(s({ref:n},d),{},{components:i})):t.createElement(g,s({ref:n},d))}));function g(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=h;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=i[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,i)}h.displayName="MDXCreateElement"},39414:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(97605),r=(i(50959),i(17942)),a=i(72526);const s={title:"FAQ",description:"H\xe4ufig gestellte Fragen zu KoliBri",tags:["Architektur","arc42","FAQ","Konzept","Lizenz","Rechtliches"]},l="H\xe4ufig gestellte Fragen (FAQ)",o={unversionedId:"faq",id:"version-1.6/faq",title:"FAQ",description:"H\xe4ufig gestellte Fragen zu KoliBri",source:"@site/versioned_docs/version-1.6/03-faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docs/1.6/faq",draft:!1,tags:[{label:"Architektur",permalink:"/docs/1.6/tags/architektur"},{label:"arc42",permalink:"/docs/1.6/tags/arc-42"},{label:"FAQ",permalink:"/docs/1.6/tags/faq"},{label:"Konzept",permalink:"/docs/1.6/tags/konzept"},{label:"Lizenz",permalink:"/docs/1.6/tags/lizenz"},{label:"Rechtliches",permalink:"/docs/1.6/tags/rechtliches"}],version:"1.6",sidebarPosition:3,frontMatter:{title:"FAQ",description:"H\xe4ufig gestellte Fragen zu KoliBri",tags:["Architektur","arc42","FAQ","Konzept","Lizenz","Rechtliches"]},sidebar:"tutorialSidebar",previous:{title:"Manifest",permalink:"/docs/1.6/manifest"},next:{title:"Erste Schritte",permalink:"/docs/1.6/get-started/first-steps"}},u={},d=[{value:"Allgemeines",id:"allgemeines",level:2},{value:"Theming und Styling",id:"theming-und-styling",level:2},{value:"Technisches",id:"technisches",level:2},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Noch Fragen offen?",id:"noch-fragen-offen",level:2}],c={toc:d},m="wrapper";function h(e){let{components:n,...i}=e;return(0,r.kt)(m,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"h\xe4ufig-gestellte-fragen-faq"},"H\xe4ufig gestellte Fragen (FAQ)"),(0,r.kt)("h2",{id:"allgemeines"},"Allgemeines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Was ist das Besondere an KoliBri?"),(0,r.kt)("br",null),"\nKoliBri bietet granulare, gut wiederverwendbare HTML-Kompositionen an, die in sich semantisch barrierefrei und von der Gestaltung entkoppelt sind. Mittels des Basis-Stylings, welches sich ausschlie\xdflich auf das Layout beschr\xe4nkt, k\xf6nnen die Komponenten einfacher an eigene Corporate Designs angepasst werden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wodurch spart man durch KoliBri ein?"),(0,r.kt)("br",null),"\nWebseiten/-anwendungen werden mit unterschiedlichen HTML-Elementen und Varianten von Elementen umgesetzt. Jede dieser HTML-Strukturen muss semantisch barrierefrei aufgebaut und ausgezeichnet werden. KoliBri fokussiert sich auf genau solche HTML-Strukturen und deren Varianten und fasst sie in klar definierte Komponenten zusammen. Die Entwicklungsteams, die KoliBri sp\xe4ter wiederverwenden, k\xf6nnen diese Komponenten nun einsetzen und \xfcber Parameter anpassen, um unterschiedliche Varianten barrierefrei darzustellen, ohne dabei \xfcber die Korrektheit der HTML-Struktur innerhalb der Komponente nachdenken zu m\xfcssen. Sie werden entlastet und k\xf6nnen ihren Fokus mehr auf die Umsetzung eigentlichen Fachlichkeit legen.",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wie kann man KoliBri nicht technisch erkl\xe4ren?"),(0,r.kt)("br",null),"\nKoliBri ist f\xfcr die Barrierefreiheit, wie ein Thermomix\xae f\xfcr das Kochen. Er erleichtert einem das Kochen, indem man sich einfach ein passendes Gericht (Komponente) aussuchen kann, ohne wissen zu m\xfcssen, wie man es genau kochen muss. Der Thermomix\xae (KoliBri) f\xfchrt einem beim Kochen durch den Prozess (Parameter f\xfcr unterschiedliche Varianten) und stellt sicher, dass am Ende das passende Gericht (barrierefreie Benutzeroberfl\xe4che) herauskommt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wie abh\xe4ngig mache ich mich, wenn ich KoliBri einsetze?"),(0,r.kt)("br",null),"\nVergleicht man KoliBri mit einem LEGO\xae-Set, dann kann man die enthaltenen Bausteine einfach mit anderen Bausteinen mischen, um die Gesamtanwendung abzubilden. Man begibt sich in eine teilweise Abh\xe4ngigkeit (logisch), um im Gegenzug, Vorteile bei der Sicherstellung der Barrierefreiheit zu bekommen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wie kann ich eine Komponente beeinflussen, wenn n\xf6tig?"),(0,r.kt)("br",null),"\nKoliBri-Komponenten sind zur Sicherstellung der Barrierefreiheit sehr restriktiv und werden durch Komposition wiederverwendet. Anpassungen von au\xdfen lassen sich nur durch das Wrappen oder den Expert-Slot vornehmen. Das Styling ist \xfcber das Theme-Konzept durch Konfiguration m\xf6glich."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Was mache ich, wenn eine Komponente oder Funktion fehlt?"),(0,r.kt)("br",null),"\nNeue fachlich neutrale Komponenten oder Funktionen sollen innerhalb von KoliBri realisiert werden. Hierbei ist das Mitwirken ausdr\xfccklich erw\xfcnscht und beschleunigt die Umsetzung."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Was besagt die Lizenzierung?"),(0,r.kt)("br",null),"\nDie EUPL erlaubt die uneingeschr\xe4nkte Nutzung der Artefakt, die auf konfigurative Weise an die eigenen Bed\xfcrfnisse angepasst werden k\xf6nnen.\nAndererseits erzwingt sie die Offenlegung von \xc4nderungen, die beim Kopieren von Quellcode aus KoliBri hervorgegangen sind (Copy-Left).\nMehr hierzu finden Sie in der ",(0,r.kt)(a.Nv,{_href:"/docs/license",_label:"Lizenz",mdxType:"KolLink"}),".")),(0,r.kt)("h2",{id:"theming-und-styling"},"Theming und Styling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wer erstellt ein Theme, wenn es noch nicht existiert?"),(0,r.kt)("br",null),"\nAktuell ist es so, dass das ITZBund zahlreiche Themes seiner Kundenbeh\xf6rden und Beispiel-Themes umgesetzt hat und pflegt. Das Theme-Konzept sieht allerdings vor, dass Themes unabh\xe4ngig erstellt und gepflegt werden k\xf6nnen. Gerne stehen wir f\xfcr R\xfcckfragen zur Verf\xfcgung und k\xf6nnen punktuell unterst\xfctzen. Sobald ein eigenes Theme erstellt wurde, ist ein eigenst\xe4ndiger Barrierefreiheitstest notwendig, um beispielsweise die Kontrastverh\xe4ltnisse der Farbwerte ebenfalls sicherzustellen. Einmal erstelle und getestete Themes k\xf6nnen von nun an in anderen Projekten wieder verwendet werden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wie funktioniert das Theming?"),(0,r.kt)("br",null),"\nIn der Regel werden Web Components mit festem Styling erstellt. KoliBri trennt die semantisch barrierefreien Komponenten vom Styling und stellt daf\xfcr eine Register-Methode zum Kombinieren zur Verf\xfcgung. Da die Web Components im Browser grunds\xe4tzlich registriert (define) werden m\xfcssen, besteht hier die M\xf6glichkeit, die Komponenten mit einem definierten Theme zu laden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wie kann man ein eigenes Theme erstellen?"),(0,r.kt)("br",null),"\nWir arbeiten stets daran, das Erstellen und Pflegen von Themes weiter zu vereinfachen. Hierzu dienen z.B. das Basis-Styling (reines Layout) der Komponenten ab Version 1.5. Aufsetzen kann man einfach durch die Erstellung einer Theme-Definition, z.B. mit einem eigenen Theme-Projekt (NPM-Paket) mittels der ",(0,r.kt)(a.Nv,{_href:"https://github.com/public-ui/kolibri/blob/45726c50d7f28c9c595442b2241582816eca5670/packages/create-kolibri/templates/kolibri-library/packages/components/src/global/script.ts#L8",_label:"TS-Datei",_target:"github",mdxType:"KolLink"}),". Hilfreich um Erstellen und Pflegen von Themes ist auch unser",(0,r.kt)(a.Nv,{_href:"/designer/",_label:" Theme-Designer",_target:"designer",mdxType:"KolLink"}),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Warum muss CSS in JavaScript verwalten werden?"),(0,r.kt)("br",null),"\nDas Stylen von KoliBri-Komponenten erfolgt nicht allein eingebundenes CSS oder die Verwendung von CSS-Frameworks (wie z.B. Bootstrap, Material-UI, Tailwind CSS, etc.), sondern\n\xfcber das technische Setzen von CSS an der Komponente. Das hat den Vorteil, dass die Komponenten vom \xe4u\xdferen CSS unabh\xe4ngig sind. Die Robustheit ist ein architektonischen Qualit\xe4tsziel. Sie spiegelt sich darin wieder, das nur die Komponente selbst \xfcber ihr Styling entscheidet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wozu braucht man das Schema?"),(0,r.kt)("br",null),"\nKoliBri basiert auf einer ausgekl\xfcgelten ",(0,r.kt)(a.Nv,{_href:"/docs/concepts/architecture",_label:"Architektur",mdxType:"KolLink"}),". Beispielsweise dient das kleine Schema-Paket (@public-ui/schema) dazu, die Tag-Namen und Sprach-Keys der KoliBri-Komponenten unabh\xe4ngig von der konkreten Implementierung zu definieren. Dies erm\xf6glicht bei der Theme-Erstellung ein komplett losgel\xf6stes Arbeiten mit Autovervollst\xe4ndigung, ohne aber die Komponenten und deren Abh\xe4ngigkeiten zu ben\xf6tigen. Das hat Vorteile bei manchen Integrationsszenarien, wie z.B. bei statischen Seiten oder Content-Management-Systemen (CMS).")),(0,r.kt)("h2",{id:"technisches"},"Technisches"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wieso k\xf6nnen KoliBri-Komponenten wirklich barrierefrei sein?"),(0,r.kt)("br",null),"\nDie KoliBri-Komponenten sind softwarearchitektonisch so designed, dass sie sich nur \xfcber Properties instrumentieren lassen und nicht \xfcber eignenes reingebbares HTML. Das bedeutet, dass die Komponenten nur \xfcber die API (Properties) gesteuert werden k\xf6nnen. Das ist ein Qualit\xe4tsmerkmal, da die Komponenten so nicht von au\xdfen manipuliert werden k\xf6nnen. Die Komponenten sind sehr restriktiv und k\xf6nnen somit in sich immer barrierefrei sein.",(0,r.kt)("br",null),"\nUm aus dieser Restriktivit\xe4t ausbrechen zu k\xf6nnen, gibt es den ",(0,r.kt)(a.Nv,{_href:"/docs/concepts/expert-slot",_label:"Expert-Slot",mdxType:"KolLink"}),", der es erm\xf6glicht, eigenes HTML in die Komponente einzubetten. Die Barrierefreiheit \xfcber den Expert-Slot liegt in den H\xe4nden des Experten (Developers) und sollte nur in Ausnahmef\xe4llen verwendet werden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Warum werden die Eigenschaften von Komponenten manchmal abweichend vom HTML-Naming benannt?"),(0,r.kt)("br",null),"\nUm die Erlernbarkeit von KoliBri zu einfach zu halten, wird in der Regel immer das Naming des HTML verwenden. Doch auch der HTML-Standard ist in seinem Naming \xfcber mehrerer Element (Komponenten) nicht einheitlich. Und daher kommt es dazu, dass wir in KoliBri f\xfcr gleichartige Eigenschaften \xfcbergreifend einheitliche Namen gew\xe4hlt haben. Mehr dazu finden Sie im Konzept ",(0,r.kt)(a.Nv,{_href:"/docs/concepts/properties",_label:"Eigenschaften",mdxType:"KolLink"}),".")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Warum m\xfcssen bei interaktiven Elementen das Label und Aria-Label gleich sein?"),(0,r.kt)("br",null),"\nBei Button/Schaltern und Links muss die sichtbare Bezeichnung (Label) und die assistive Bezeichnung (Aria-Label) identisch sein, damit die Nutzung per Sprachsteuerung zug\xe4nglich und somit barrierefrei ist.")),(0,r.kt)("h2",{id:"noch-fragen-offen"},"Noch Fragen offen?"),(0,r.kt)("p",null,"Wenn noch Fragen offen sind, dann schreiben Sie uns gerne eine E-Mail an ",(0,r.kt)(a.Nv,{_href:"mailto:kolibri@itzbund.de",_label:"kolibri@itzbund.de",_target:"email",_icons:"codicon codicon-mail",mdxType:"KolLink"}),"."))}h.isMDXComponent=!0}}]);