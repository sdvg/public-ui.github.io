"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[4032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,k=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},l="Accordion",o={unversionedId:"components/accordion/readme",id:"components/accordion/readme",title:"Accordion",description:"Die Accordion-Komponente ist ein Aufklapp-Men\xfc. Klickt man auf den Kopfbereich, bestehend aus Icon und \xdcberschrift, \xf6ffnet sich ein Textfeld mit zus\xe4tzlichen Informationen. Somit ist es ein interaktives Navigationselement, welches dazu dient, umfangreiche Inhalte platzsparend darzustellen.",source:"@site/docs/30-components/accordion/readme.md",sourceDirName:"30-components/accordion",slug:"/components/accordion/",permalink:"/docs/components/accordion/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/30-components/accordion/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Beispiele f\xfcr Abbr-Komponente",permalink:"/docs/components/abbr/samples"},next:{title:"Beispiele f\xfcr Accordion-Komponente",permalink:"/docs/components/accordion/samples"}},d={},s=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift im Accordion-Tab",id:"\xfcberschrift-im-accordion-tab",level:3},{value:"Gr\xf6\xdfe der \xdcberschrift",id:"gr\xf6\xdfe-der-\xfcberschrift",level:3},{value:"Inhalt im Kopfbereich des Accordion",id:"inhalt-im-kopfbereich-des-accordion",level:3},{value:"Inhalt des Accordion",id:"inhalt-des-accordion",level:3},{value:"Accordion ge\xf6ffnet anzeigen",id:"accordion-ge\xf6ffnet-anzeigen",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Shadow Parts",id:"shadow-parts",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accordion"},"Accordion"),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Accordion"),"-Komponente ist ein Aufklapp-Men\xfc. Klickt man auf den Kopfbereich, bestehend aus Icon und \xdcberschrift, \xf6ffnet sich ein Textfeld mit zus\xe4tzlichen Informationen. Somit ist es ein interaktives Navigationselement, welches dazu dient, umfangreiche Inhalte platzsparend darzustellen."),(0,r.kt)("p",null,"Accordions kommen immer dann zum Einsatz, wenn einem thematischen Oberbegriff zugeordnete Inhalte angezeigt oder verborgen werden sollen. Sie erlauben umfangreichere Detailinformationen zu einem Oberbegriff, als es aus Gr\xfcnden der \xdcbersichtlichkeit eigentlich sinnvoll w\xe4re. Sie \xfcberlassen es den Besucher:innen selbst, ob sie sich diese Informationen anzeigen lassen m\xf6chten."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<kol-accordion _heading="\xdcberschrift" _level="1" _open>\n    <div slot="content">Beispieltext</div>\n</kol-accordion>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("div",{class:"grid gap-2"},(0,r.kt)("kol-accordion",{_heading:"Element 1"},(0,r.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,r.kt)("div",{slot:"header"},"Inhalt eines Header")),(0,r.kt)("kol-accordion",{_heading:"Element 2"},(0,r.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")),(0,r.kt)("kol-accordion",{_heading:"Element 3"},(0,r.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,r.kt)("div",{slot:"header"},"Inhalt eines Header"))),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"\xfcberschrift-im-accordion-tab"},"\xdcberschrift im Accordion-Tab"),(0,r.kt)("p",null,"Der Text, der als \xdcberschrift im Accordion-Tab angezeigt werden soll, wird durch das Attribut ",(0,r.kt)("strong",{parentName:"p"},"_","heading")," \xfcbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten."),(0,r.kt)("h3",{id:"gr\xf6\xdfe-der-\xfcberschrift"},"Gr\xf6\xdfe der \xdcberschrift"),(0,r.kt)("p",null,"Die Schriftgr\xf6\xdfe, mit der die \xdcberschrift im Accordion-Tab angezeigt wird, wird durch das Attribut ",(0,r.kt)("strong",{parentName:"p"},"_","level")," \xfcbergeben. M\xf6glich sind die Level ",(0,r.kt)("strong",{parentName:"p"},"1")," bis ",(0,r.kt)("strong",{parentName:"p"},"6")),(0,r.kt)("h3",{id:"inhalt-im-kopfbereich-des-accordion"},"Inhalt im Kopfbereich des Accordion"),(0,r.kt)("p",null,"Ein optisch abgetrennter Inhalt im Kopfbereich des Accordions wird \xfcber einen eigenen Slot \xfcbergeben. Gibt es diesen Slot nicht oder wird er leer \xfcbergeben, ist der Kopfbereich nicht sichtbar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'<div slot="header">Inhalt im Kopfbereich</div>'))),(0,r.kt)("h3",{id:"inhalt-des-accordion"},"Inhalt des Accordion"),(0,r.kt)("p",null,"Der Hauptinhalt des Accordions wird \xfcber einen eigenen Slot \xfcbergeben."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'<div slot="content">Inhalt im Kopfbereich</div>'))),(0,r.kt)("h3",{id:"accordion-ge\xf6ffnet-anzeigen"},"Accordion ge\xf6ffnet anzeigen"),(0,r.kt)("p",null,"Standardm\xe4\xdfig wird das Accordion nach dem Laden der Seite im geschlossenen Zustand angezeigt. Soll das Accordion ge\xf6ffnet angezeigt werden, setzen Sie das Attribut ",(0,r.kt)("strong",{parentName:"p"},"_","open")," zus\xe4tzlich ein."),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie ein Accordion, um lange Textabschnitte unter einem thematischen Oberbegriff zusammenzufassen"),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie ein Accordion, um weniger wichtige Informationen, als Erg\xe4nzung zu Hauptinformationen, zur Verf\xfcgung zu stellen."),(0,r.kt)("li",{parentName:"ul"},"Mit einem Accordion k\xf6nnen Sie die L\xe4nge Ihrer Webseite deutlich reduzieren und stellen gleichzeitig die Erreichbarkeit aller Informationen f\xfcr die Nutzer:innen sicher."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie eindeutige \xdcberschriften, um die Nutzer:innen auf die weiteren Informationen des Accordions hinzuweisen."),(0,r.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige ",(0,r.kt)("inlineCode",{parentName:"li"},"Call-To-Action"),"-Elemente innerhalb eines Accordions zu verbergen."),(0,r.kt)("li",{parentName:"ul"},"Lassen Sie Fehlermeldungen nicht innerhalb des Accordions anzeigen, um zu vermeiden, dass Nutzer:innen wichtige Informationen \xfcbersehen."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie ein Accordion nicht als Auswahl-Element f\xfcr Nutzer:innen."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie ein Accordion nicht, um wichtige Informationen zu rechtlichen Angaben oder zum Datenschutz anzuzeigen.")),(0,r.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H\xe4ufig gestellte Fragen (FAQ)")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"In der ",(0,r.kt)("strong",{parentName:"p"},"Accordion"),"-Komponente wird das \xd6ffnen-/Schlie\xdfen-Icon links ausgerichtet, um Nutzer:innen mit eingeschr\xe4nktem Sichtfeld eine bessere Bedienbarkeit zu erm\xf6glichen."),(0,r.kt)("p",null,"Es wurde bewusst auf die Verwendung von Icons, wie z.B. ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},">")," verzichtet. Die Verwendung der Icons ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," gew\xe4hrleistet eine bessere Sicht- und Erkennbarkeit bez\xfcglich des Ge\xf6ffnet- und Geschlossen-Status."),(0,r.kt)("p",null,"Bei der farblichen Gestaltung wurde besonders Wert auf einen h\xf6chstm\xf6glichen Kontrast in der\nStandardansicht gelegt."),(0,r.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Springt die einzelnen Accordion-Tabs an.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Enter")),(0,r.kt)("td",{parentName:"tr",align:null},"\xd6ffnet bzw. schlie\xdft den fokussierten Accordion-Tab.")))),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#accordion"},"https://www.w3.org/TR/wai-aria-practices/#accordion"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_heading")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die \xdcberschrift des Accordions an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_level")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen H-Level von 1 bis 6 die \xdcberschrift hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1 \\| 2 \\| 3 \\| 4 \\| 5 \\| 6 \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined \\| { onClick?: EventValueCallback<Event, boolean> \\| undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_open")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_open")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Accordion ge\xf6ffnet ist."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Slot"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"content"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich des Accordions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"header"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Kopfbereich des Accordions.")))),(0,r.kt)("h2",{id:"shadow-parts"},"Shadow Parts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Part"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"accordion"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen des \xe4u\xdferen Container des Accordions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"close"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen des geschlossenen Zustands und Icons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"content"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen des Inhaltsbereichs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"header"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen des Kopfbereichs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"icon"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen der Icons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"open"')),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen des ge\xf6ffneten Zustands und Icons.")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../heading"},"kol-heading-wc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../icon"},"kol-icon"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-accordion --\x3e kol-heading-wc\n  kol-accordion --\x3e kol-icon\n  style kol-accordion fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);