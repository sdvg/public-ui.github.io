"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[74732],{17942:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var i=t(50959);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),d=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(a.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,g=c["".concat(a,".").concat(m)]||c[m]||h[m]||l;return t?i.createElement(g,o(o({ref:n},u),{},{components:t})):i.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=t(15882),r=(t(50959),t(17942)),l=t(93700);const o={},s="Designer",a={unversionedId:"concepts/styling/designer",id:"version-1.5.3/concepts/styling/designer",title:"Designer",description:"Klicken Sie hier, um den Designer in einem neuen Browser-Fenster zu \xf6ffnen.",source:"@site/versioned_docs/version-1.5.3/20-concepts/05-styling/35-designer.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/designer",permalink:"/docs/1.5.3/concepts/styling/designer",draft:!1,tags:[],version:"1.5.3",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Theming",permalink:"/docs/1.5.3/concepts/styling/theming"},next:{title:"Scss",permalink:"/docs/1.5.3/concepts/styling/scss"}},d={},u=[{value:"Globales CSS",id:"globales-css",level:2},{value:"Aufbau",id:"aufbau",level:2},{value:"Oben links: Theme",id:"oben-links-theme",level:3},{value:"Mitte links: Editor",id:"mitte-links-editor",level:3},{value:"Oben rechts: Komponenten",id:"oben-rechts-komponenten",level:3},{value:"Oben mitte: Vorschau",id:"oben-mitte-vorschau",level:3},{value:"Unten: Importieren / Exportieren / Zur\xfccksetzen",id:"unten-importieren--exportieren--zur\xfccksetzen",level:3},{value:"Abh\xe4ngigkeiten der Komponenten voneinander",id:"abh\xe4ngigkeiten-der-komponenten-voneinander",level:2}],c={toc:u},h="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"designer"},"Designer"),(0,r.kt)("div",{className:"grid grid-cols-2"},(0,r.kt)(l.Gc,{_headline:"Eigenes Theme erstellen",_level:2,mdxType:"KolCard"},(0,r.kt)(l.Nv,{slot:"content",_useCase:"nav",_href:"/designer",_target:"designer",mdxType:"KolLink"},(0,r.kt)("div",{className:"flex gap-4 py-2"},(0,r.kt)(l.Jl,{className:"homepage",_icon:"codicon codicon-paintcan",mdxType:"KolIcon"}),(0,r.kt)("span",null,"Klicken Sie hier, um den Designer in einem neuen Browser-Fenster zu \xf6ffnen."))))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Mithilfe des KoliBri-Designers k\xf6nnen Benutzer f\xfcr die KoliBri-Bibliothek schnell einen eigenen Style entwickeln. Die Wirkungen der eigenen CSS-Anweisungen werden direkt an der Komponente sichtbar.",(0,r.kt)("br",null),"\nDie fertigen Styles k\xf6nnen anschlie\xdfend als Theme heruntergeladen und im eigenen Projekt eingef\xfcgt werden."),(0,r.kt)("kol-alert",{_heading:"Designer oder Scss",_type:"info",_variant:"card"},"KoliBri bietet zum Erstellen von Themes auch einen ",(0,r.kt)("kol-link",{_href:"/docs/concepts/styling/scss",_label:"Scss"}),"-Ansatz an. Je nach pers\xf6nlichen Pr\xe4ferenzen kann der Designer oder Scss verwendet werden."),(0,r.kt)("h2",{id:"globales-css"},"Globales CSS"),(0,r.kt)("p",null,"Damit sich alle HTML-Elemente bei der Verwendung von assistiven Werkzeugen und bei hohe Zoomstufen optimal verhalten,\nm\xfcssen spezifische CSS-Styles gesetzt werden. Hierzu werden initial folgende CSS bei allen Komponenten gesetzt und\nk\xf6nnen bei Bedarf vom Theme-spezifischen CSS \xfcberschrieben werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"* {\n    font-size: inherit; /* erm\xf6glicht proportionales Skalieren */\n    hyphens: auto; /* aktiviert die sprachspezifische Silbentrennung */\n    letter-spacing: inherit; /* erm\xf6glicht das \xc4ndern des Buchstabenabstands */\n    word-break: break-word; /* erm\xf6glicht das Umbrechen von W\xf6rtern */\n    word-spacing: inherit; /* erm\xf6glicht das \xc4nderen des Wortabstands */\n}\n")),(0,r.kt)("h2",{id:"aufbau"},"Aufbau"),(0,r.kt)("p",null,"Der KoliBri-Designer ist in drei Bereiche aufgeteilt."),(0,r.kt)("h3",{id:"oben-links-theme"},"Oben links: Theme"),(0,r.kt)("p",null,"Das eigene Theme kann wahlweise auf Basis eines Standard-Theme (default) oder direkt mit einem leeren Theme aufgebaut\nwerden. Standardm\xe4\xdfig wird im Feld ",(0,r.kt)("b",null,"Theme")," durch den Eintrag ",(0,r.kt)("i",null,"\u201edefault\u201c")," ein Standard-Theme als Basis ausgew\xe4hlt.\nHier werden zur Anschauung einige CSS-Anweisungen in den Editor-Bereich eingef\xfcgt, deren Wirkung beispielhaft auf die\nStandard-Komponente ",(0,r.kt)("b",null,"Button")," angewendet wird.",(0,r.kt)("br",null),"\nWird in das Feld ",(0,r.kt)("b",null,"Theme")," ein eigener Wert f\xfcr das zu erstellende Theme eingegeben, setzt der KoliBri-Designer s\xe4mtliche\nStyling-Anweisungen zur\xfcck und es kann mit einem v\xf6llig leeren Theme begonnen werden."),(0,r.kt)("p",null,(0,r.kt)("kol-indented-text",null,"Bitte beachten Sie, dass einige KoliBri-Komponenten bei Auswahl eines leeren Standard-Themes naturgem\xe4\xdf entweder\ngar nicht, ungewohnt oder mit Browser-Default-Layout angezeigt werden.")),(0,r.kt)("h3",{id:"mitte-links-editor"},"Mitte links: Editor"),(0,r.kt)("p",null,"Zur einfachen Eingabe eigener CSS-Anweisungen besitzt der KoliBri-Designer einen ",(0,r.kt)("i",null,"VS Code-Editor"),". Anweisungen, die Benutzer:innen in den Editorbereich schreiben, werden nach Dr\xfccken der Tastenkombination ",(0,r.kt)("code",null,"Strg + S")," oder ",(0,r.kt)("code",null,"Command + S")," automatisch \xfcbernommen und die Auswirkungen auf die gerade gew\xe4hlte Komponente \xfcbertragen."),(0,r.kt)("h3",{id:"oben-rechts-komponenten"},"Oben rechts: Komponenten"),(0,r.kt)("p",null,"\xdcber die Auswahlbox ",(0,r.kt)("b",null,"Komponenten")," kann die zu bearbeitende KoliBri-Komponente ausgew\xe4hlt werden. Es stehen alle KoliBri-Komponenten zur Verf\xfcgung, die eine optische Ausgabe aufweisen. Nicht enthalten sind rein funktionale Komponenten, wie z. B. Modal, InputLeandUpAdapter oder auch SkipNav.",(0,r.kt)("br",null),"\nNach Auswahl einer Komponente l\xe4dt der KoliBri-Designer eine typische Basisausgabe der Komponente. Bei Komponenten, die unterschiedliche Varianten besitzen, wie z. B. Button, werden alle Varianten ausgegeben."),(0,r.kt)("p",null,(0,r.kt)("kol-indented-text",null,"Bitte beachten Sie, dass einige KoliBri-Komponenten Abh\xe4ngigkeiten voneinander besitzen. So besteht die Komponente ",(0,r.kt)("b",null," LinkGroup"),"\nbeispielsweise aus der Link-Komponente, IconIcofont-Komponte und Tooltip-Komponente. Es empfiehlt sich, zun\xe4chst mit der ",(0,r.kt)("i",null,"kleinsten"),"\nKomponente zu beginnen und nachfolgend auf die eigentliche Hauptkomponente zu wechseln. Eine detaillierte Beschreibung folgt weiter unten.")),(0,r.kt)("h3",{id:"oben-mitte-vorschau"},"Oben mitte: Vorschau"),(0,r.kt)("p",null,"In diesem Bereich wird die aktuell geladene Komponente mit einer typischen Ausgabe dargestellt. Je nach Auswahl des Vorgabe-Themes stellt sich die Komponente entweder im Default-Browser-Layout dar oder besitzt bereits Styling-Merkmale, die aus dem Vorgabe-Theme stammen."),(0,r.kt)("h3",{id:"unten-importieren--exportieren--zur\xfccksetzen"},"Unten: Importieren / Exportieren / Zur\xfccksetzen"),(0,r.kt)("p",null,"Der KoliBri-Designer bietet verschiedene M\xf6glichkeiten, Ihre eigenen Einstellungen zu speichern und sie erneut zur weiteren Bearbeitung zu laden."),(0,r.kt)("p",null,"\xdcber den Button ",(0,r.kt)("b",null,"\u201eTheme erstellen\u201c")," werden die eigenen CSS-Anweisungen als eigenst\xe4ndiges Theme zusammengefasst und im Editor zur Ansicht und zum Kopieren bereitgestellt.",(0,r.kt)("br",null),"\nDer Button ",(0,r.kt)("b",null,"\u201eTheme herunterladen\u201c")," erm\xf6glicht es, das eigene Theme als JSON-Datei zu speichern.",(0,r.kt)("br",null),"\nUm alle \xc4nderungen r\xfcckg\xe4ngig zu machen, klicken Sie auf den Button ",(0,r.kt)("b",null,"\u201eAlle \xc4nderungen verwerfen\u201c"),". Der KoliBri-Designer wird auf das Vorgabe-Theme ",(0,r.kt)("b",null,"\u201edefault\u201c")," zur\xfcckgesetzt.",(0,r.kt)("br",null),"\nMit dem Upload-Feld ",(0,r.kt)("b",null,"\u201eTheme laden\u201c")," kann eine bereits erstellte Theme-Datei (JSON-Datei) zur erneuten Bearbeitung in den KoliBri-Designer geladen werden."),(0,r.kt)("h2",{id:"abh\xe4ngigkeiten-der-komponenten-voneinander"},"Abh\xe4ngigkeiten der Komponenten voneinander"),(0,r.kt)("p",null,"Die meisten KoliBri-Komponenten bestehen technisch aus einer Sammlung anderer KoliBri-Komponenten, die zusammengenommen dann eine neue KoliBri-Komponente ergeben und \xe4hnliche, aber weitergehende, Anwendungsfelder besitzen.",(0,r.kt)("br",null),"\nDie Kenntnis der technischen Konstruktion der zu bearbeitenden Komponente ist f\xfcr die richtige Reihenfolge beim Erstellen des eigenen Themes wichtig."),(0,r.kt)("p",null,(0,r.kt)("kol-indented-text",null,"Die Abh\xe4ngigkeiten der KoliBri-Komponenten voneinander werden im Storybook, im Abschnitt ",(0,r.kt)("b",null,"Beschreibung"),"\nder jeweiligen Komponente, im Detail anhand eines Diagramms beschrieben.")),(0,r.kt)("p",null,(0,r.kt)("b",null,"Beispiel:")),(0,r.kt)("p",null,(0,r.kt)("kol-link-group",{_heading:"\xdcberschrift",_links:"[{'_label':'Link 1', '_icon':'icofont-home','_href':'test'},{'_label':'Link 2', '_icon':'icofont-phone','_href':'test'}]","_list-style-type":"none"})),(0,r.kt)("p",null,"Die in diesem Beispiel verwendete LinkGroup besteht aus den weiteren KoliBri-Komponenten:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kol-heading"),(0,r.kt)("li",{parentName:"ul"},"kol-link \u2192 nutzt au\xdferdem kol-tooltip und kol-badge"),(0,r.kt)("li",{parentName:"ul"},"kol-icon-icofont")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Legen Sie zun\xe4chst die CSS-Anweisungen f\xfcr die \xdcberschrift der LinkGroup fest. Die \xdcberschrift besteht aus der KoliBri-Komponente ",(0,r.kt)("b",null,"kol-heading"),". Wechsel Sie daher im Auswahlfeld ",(0,r.kt)("b",null,"Komponenten")," zur Komponente ",(0,r.kt)("b",null,"kol-heading"),". Passen Sie hier im Editor z. B. f\xfcr h1 die Schriftfarbe an. Diese Einstellung gilt nun f\xfcr alle Komponenten, in denen die Komponente kol-heading genutzt wird. Die Schriftfarbe hat sich also nicht nur f\xfcr die Komponente kol-heading selbst ver\xe4ndert, sondern synchron f\xfcr alle Komponenten, die ",(0,r.kt)("b",null,"kol-heading")," au\xdferdem nutzen. Unter anderem die im Beispiel genutzte ",(0,r.kt)("b",null,"kol-link-group"),".",(0,r.kt)("br",null),"Wechseln Sie im Auswahlfeld ",(0,r.kt)("b",null,"Komponenten")," zur\xfcck zur Komponente ",(0,r.kt)("b",null,"kol-link-group"),". Auch hier hat sich die Schriftfarbe der \xdcberschrift gem\xe4\xdf der CSS-Anweisung der Komponente ",(0,r.kt)("b",null,"kol-eading")," ge\xe4ndert."),(0,r.kt)("li",{parentName:"ol"},"\xc4ndern Sie jetzt die Schriftfarbe der Links. Wechseln Sie im Auswahlfeld ",(0,r.kt)("b",null,"Komponenten")," zu ",(0,r.kt)("b",null,"kol-link"),". \xc4ndern Sie im Editor den Color-Wert f\xfcr ",(0,r.kt)("b",null,"a"),". Wechseln Sie zur\xfcck zur Komponente ",(0,r.kt)("b",null,"kol-link-group"),". Die Schriftfarbe der einzelnen Links hat sich ebenfalls ge\xe4ndert."),(0,r.kt)("li",{parentName:"ol"},"Wenn Sie versuchen, die zuvor genannten Einstellungen direkt in der Komponente ",(0,r.kt)("b",null,"kol-link-group")," zu \xe4ndern, werden Sie keine Ver\xe4nderungen sehen. Es w\xe4re hier aber z. B. m\xf6glich, die Hintergrundfarbe der ganzen Komponente ",(0,r.kt)("b",null,"kol-link-group")," zu \xe4ndern."),(0,r.kt)("li",{parentName:"ol"},"Beachten Sie, dass Sie \xfcber den KoliBri-Designer nur Komponenten stylen k\xf6nnen, die sich innerhalb eines Shadow-Doms befinden. Es w\xe4re beim Beispiel ",(0,r.kt)("b",null,"kol-link-group")," nicht m\xf6glich, das Element ",(0,r.kt)("b",null,(0,r.kt)("kol-link-group",null))," selbst zu stylen, da sich dieses nicht innerhalb eines Shadow-Doms befindet."),(0,r.kt)("li",{parentName:"ol"},"Beachten Sie, dass \xc4nderungen im KoliBri-Designer nur solche KoliBri-Komponenten m\xf6glich sind, die beim Rendern einen Shadow-Dom besitzen. Das ist z. B. bei der Komponente ",(0,r.kt)("b",null,"kol-icon-icofont")," oder ",(0,r.kt)("b",null,"kol-icon-fontawesome")," nicht der Fall.")))}m.isMDXComponent=!0}}]);