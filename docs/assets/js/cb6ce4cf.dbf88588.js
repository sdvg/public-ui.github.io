"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[98948],{49842:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var r=i(11527),t=i(16034),s=i(32404);const l={},d="Designer",o={id:"concepts/styling/designer",title:"Designer",description:"Klicken Sie hier, um den Designer in einem neuen Browser-Fenster zu \xf6ffnen.",source:"@site/docs/20-concepts/05-styling/35-designer.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/designer",permalink:"/docs/next/concepts/styling/designer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Theming",permalink:"/docs/next/concepts/styling/theming"},next:{title:"Scss",permalink:"/docs/next/concepts/styling/scss"}},a={},h=[{value:"Globales CSS",id:"globales-css",level:2},{value:"Aufbau",id:"aufbau",level:2},{value:"Oben links: Theme",id:"oben-links-theme",level:3},{value:"Mitte links: Editor",id:"mitte-links-editor",level:3},{value:"Oben rechts: Komponenten",id:"oben-rechts-komponenten",level:3},{value:"Oben mitte: Vorschau",id:"oben-mitte-vorschau",level:3},{value:"Unten: Importieren / Exportieren / Zur\xfccksetzen",id:"unten-importieren--exportieren--zur\xfccksetzen",level:3},{value:"Abh\xe4ngigkeiten der Komponenten voneinander",id:"abh\xe4ngigkeiten-der-komponenten-voneinander",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"designer",children:"Designer"}),"\n",(0,r.jsx)("div",{className:"grid grid-cols-2",children:(0,r.jsx)(s.Gc,{_label:"Eigenes Theme erstellen",_level:2,children:(0,r.jsx)(s.Nv,{slot:"","data-removed-_useCase":"nav",_href:"/designer",_target:"designer",_label:"",children:(0,r.jsxs)("div",{slot:"expert",className:"flex gap-4 py-2",children:[(0,r.jsx)(s.Jl,{className:"homepage",_icons:"codicon codicon-paintcan"}),(0,r.jsx)("span",{children:"Klicken Sie hier, um den Designer in einem neuen Browser-Fenster zu \xf6ffnen."})]})})})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.p,{children:["Mithilfe des KoliBri-Designers k\xf6nnen Benutzer f\xfcr die KoliBri-Bibliothek schnell einen eigenen Style entwickeln. Die Wirkungen der eigenen CSS-Anweisungen werden direkt an der Komponente sichtbar.",(0,r.jsx)("br",{}),"\nDie fertigen Styles k\xf6nnen anschlie\xdfend als Theme heruntergeladen und im eigenen Projekt eingef\xfcgt werden."]}),"\n",(0,r.jsx)("kol-alert",{_label:"Designer oder Scss",_type:"info",_variant:"card",children:(0,r.jsxs)(n.p,{children:["KoliBri bietet zum Erstellen von Themes auch einen ",(0,r.jsx)("kol-link",{_href:"/docs/concepts/styling/scss",_label:"Scss"}),"\n-Ansatz an. Je nach pers\xf6nlichen Pr\xe4ferenzen kann der Designer oder Scss verwendet werden."]})}),"\n",(0,r.jsx)(n.h2,{id:"globales-css",children:"Globales CSS"}),"\n",(0,r.jsx)(n.p,{children:"Damit sich alle HTML-Elemente bei der Verwendung von assistiven Werkzeugen und bei hohe Zoomstufen optimal verhalten,\nm\xfcssen spezifische CSS-Styles gesetzt werden. Hierzu werden initial folgende CSS bei allen Komponenten gesetzt und\nk\xf6nnen bei Bedarf vom Theme-spezifischen CSS \xfcberschrieben werden."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"* {\n\tfont-size: inherit; /* erm\xf6glicht proportionales Skalieren */\n\thyphens: auto; /* aktiviert die sprachspezifische Silbentrennung */\n\tletter-spacing: inherit; /* erm\xf6glicht das \xc4ndern des Buchstabenabstands */\n\tword-break: break-word; /* erm\xf6glicht das Umbrechen von W\xf6rtern */\n\tword-spacing: inherit; /* erm\xf6glicht das \xc4nderen des Wortabstands */\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"aufbau",children:"Aufbau"}),"\n",(0,r.jsx)(n.p,{children:"Der KoliBri-Designer ist in drei Bereiche aufgeteilt."}),"\n",(0,r.jsx)(n.h3,{id:"oben-links-theme",children:"Oben links: Theme"}),"\n",(0,r.jsxs)(n.p,{children:["Das eigene Theme kann wahlweise auf Basis eines Standard-Theme (default) oder direkt mit einem leeren Theme aufgebaut\nwerden. Standardm\xe4\xdfig wird im Feld ",(0,r.jsx)("b",{children:"Theme"})," durch den Eintrag ",(0,r.jsx)("i",{children:"\u201edefault\u201c"})," ein Standard-Theme als Basis ausgew\xe4hlt.\nHier werden zur Anschauung einige CSS-Anweisungen in den Editor-Bereich eingef\xfcgt, deren Wirkung beispielhaft auf die\nStandard-Komponente ",(0,r.jsx)("b",{children:"Button"})," angewendet wird.",(0,r.jsx)("br",{}),"\nWird in das Feld ",(0,r.jsx)("b",{children:"Theme"})," ein eigener Wert f\xfcr das zu erstellende Theme eingegeben, setzt der KoliBri-Designer s\xe4mtliche\nStyling-Anweisungen zur\xfcck und es kann mit einem v\xf6llig leeren Theme begonnen werden."]}),"\n",(0,r.jsx)("kol-indented-text",{children:"Bitte beachten Sie, dass einige KoliBri-Komponenten bei Auswahl eines leeren Standard-Themes naturgem\xe4\xdf entweder\ngar nicht, ungewohnt oder mit Browser-Default-Layout angezeigt werden."}),"\n",(0,r.jsx)(n.h3,{id:"mitte-links-editor",children:"Mitte links: Editor"}),"\n",(0,r.jsxs)(n.p,{children:["Zur einfachen Eingabe eigener CSS-Anweisungen besitzt der KoliBri-Designer einen ",(0,r.jsx)("i",{children:"VS Code-Editor"}),". Anweisungen, die Benutzer",":innen"," in den Editorbereich schreiben, werden nach Dr\xfccken der Tastenkombination ",(0,r.jsx)("code",{children:"Strg + S"})," oder ",(0,r.jsx)("code",{children:"Command + S"})," automatisch \xfcbernommen und die Auswirkungen auf die gerade gew\xe4hlte Komponente \xfcbertragen."]}),"\n",(0,r.jsx)(n.h3,{id:"oben-rechts-komponenten",children:"Oben rechts: Komponenten"}),"\n",(0,r.jsxs)(n.p,{children:["\xdcber die Auswahlbox ",(0,r.jsx)("b",{children:"Komponenten"})," kann die zu bearbeitende KoliBri-Komponente ausgew\xe4hlt werden. Es stehen alle KoliBri-Komponenten zur Verf\xfcgung, die eine optische Ausgabe aufweisen. Nicht enthalten sind rein funktionale Komponenten, wie z. B. Modal, InputLeandUpAdapter oder auch SkipNav.",(0,r.jsx)("br",{}),"\nNach Auswahl einer Komponente l\xe4dt der KoliBri-Designer eine typische Basisausgabe der Komponente. Bei Komponenten, die unterschiedliche Varianten besitzen, wie z. B. Button, werden alle Varianten ausgegeben."]}),"\n",(0,r.jsxs)("kol-indented-text",{children:["Bitte beachten Sie, dass einige KoliBri-Komponenten Abh\xe4ngigkeiten voneinander besitzen. So besteht die Komponente ",(0,r.jsx)("b",{children:" LinkGroup"}),"\nbeispielsweise aus der Link-Komponente, IconIcofont-Komponte und Tooltip-Komponente. Es empfiehlt sich, zun\xe4chst mit der ",(0,r.jsx)("i",{children:"kleinsten"}),"\nKomponente zu beginnen und nachfolgend auf die eigentliche Hauptkomponente zu wechseln. Eine detaillierte Beschreibung folgt weiter unten."]}),"\n",(0,r.jsx)(n.h3,{id:"oben-mitte-vorschau",children:"Oben mitte: Vorschau"}),"\n",(0,r.jsx)(n.p,{children:"In diesem Bereich wird die aktuell geladene Komponente mit einer typischen Ausgabe dargestellt. Je nach Auswahl des Vorgabe-Themes stellt sich die Komponente entweder im Default-Browser-Layout dar oder besitzt bereits Styling-Merkmale, die aus dem Vorgabe-Theme stammen."}),"\n",(0,r.jsx)(n.h3,{id:"unten-importieren--exportieren--zur\xfccksetzen",children:"Unten: Importieren / Exportieren / Zur\xfccksetzen"}),"\n",(0,r.jsx)(n.p,{children:"Der KoliBri-Designer bietet verschiedene M\xf6glichkeiten, Ihre eigenen Einstellungen zu speichern und sie erneut zur weiteren Bearbeitung zu laden."}),"\n",(0,r.jsxs)(n.p,{children:["\xdcber den Button ",(0,r.jsx)("b",{children:"\u201eTheme erstellen\u201c"})," werden die eigenen CSS-Anweisungen als eigenst\xe4ndiges Theme zusammengefasst und im Editor zur Ansicht und zum Kopieren bereitgestellt.",(0,r.jsx)("br",{}),"\nDer Button ",(0,r.jsx)("b",{children:"\u201eTheme herunterladen\u201c"})," erm\xf6glicht es, das eigene Theme als JSON-Datei zu speichern.",(0,r.jsx)("br",{}),"\nUm alle \xc4nderungen r\xfcckg\xe4ngig zu machen, klicken Sie auf den Button ",(0,r.jsx)("b",{children:"\u201eAlle \xc4nderungen verwerfen\u201c"}),". Der KoliBri-Designer wird auf das Vorgabe-Theme ",(0,r.jsx)("b",{children:"\u201edefault\u201c"})," zur\xfcckgesetzt.",(0,r.jsx)("br",{}),"\nMit dem Upload-Feld ",(0,r.jsx)("b",{children:"\u201eTheme laden\u201c"})," kann eine bereits erstellte Theme-Datei (JSON-Datei) zur erneuten Bearbeitung in den KoliBri-Designer geladen werden."]}),"\n",(0,r.jsx)(n.h2,{id:"abh\xe4ngigkeiten-der-komponenten-voneinander",children:"Abh\xe4ngigkeiten der Komponenten voneinander"}),"\n",(0,r.jsxs)(n.p,{children:["Die meisten KoliBri-Komponenten bestehen technisch aus einer Sammlung anderer KoliBri-Komponenten, die zusammengenommen dann eine neue KoliBri-Komponente ergeben und \xe4hnliche, aber weitergehende, Anwendungsfelder besitzen.",(0,r.jsx)("br",{}),"\nDie Kenntnis der technischen Konstruktion der zu bearbeitenden Komponente ist f\xfcr die richtige Reihenfolge beim Erstellen des eigenen Themes wichtig."]}),"\n",(0,r.jsxs)("kol-indented-text",{children:["Die Abh\xe4ngigkeiten der KoliBri-Komponenten voneinander werden im Storybook, im Abschnitt ",(0,r.jsx)("b",{children:"Beschreibung"}),"\nder jeweiligen Komponente, im Detail anhand eines Diagramms beschrieben."]}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("b",{children:"Beispiel:"})}),"\n",(0,r.jsx)("kol-link-group",{_label:"\xdcberschrift",_links:"[{'_label':'Link 1', '_icon':'icofont-home','_href':'test'},{'_label':'Link 2', '_icon':'icofont-phone','_href':'test'}]","_list-style-type":"none"}),"\n",(0,r.jsx)(n.p,{children:"Die in diesem Beispiel verwendete LinkGroup besteht aus den weiteren KoliBri-Komponenten:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"kol-heading"}),"\n",(0,r.jsx)(n.li,{children:"kol-link \u2192 nutzt au\xdferdem kol-tooltip und kol-badge"}),"\n",(0,r.jsx)(n.li,{children:"kol-icon-icofont"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Legen Sie zun\xe4chst die CSS-Anweisungen f\xfcr die \xdcberschrift der LinkGroup fest. Die \xdcberschrift besteht aus der KoliBri-Komponente ",(0,r.jsx)("b",{children:"kol-heading"}),". Wechsel Sie daher im Auswahlfeld ",(0,r.jsx)("b",{children:"Komponenten"})," zur Komponente ",(0,r.jsx)("b",{children:"kol-heading"}),". Passen Sie hier im Editor z. B. f\xfcr h1 die Schriftfarbe an. Diese Einstellung gilt nun f\xfcr alle Komponenten, in denen die Komponente kol-heading genutzt wird. Die Schriftfarbe hat sich also nicht nur f\xfcr die Komponente kol-heading selbst ver\xe4ndert, sondern synchron f\xfcr alle Komponenten, die ",(0,r.jsx)("b",{children:"kol-heading"})," au\xdferdem nutzen. Unter anderem die im Beispiel genutzte ",(0,r.jsx)("b",{children:"kol-link-group"}),".",(0,r.jsx)("br",{}),"Wechseln Sie im Auswahlfeld ",(0,r.jsx)("b",{children:"Komponenten"})," zur\xfcck zur Komponente ",(0,r.jsx)("b",{children:"kol-link-group"}),". Auch hier hat sich die Schriftfarbe der \xdcberschrift gem\xe4\xdf der CSS-Anweisung der Komponente ",(0,r.jsx)("b",{children:"kol-eading"})," ge\xe4ndert."]}),"\n",(0,r.jsxs)(n.li,{children:["\xc4ndern Sie jetzt die Schriftfarbe der Links. Wechseln Sie im Auswahlfeld ",(0,r.jsx)("b",{children:"Komponenten"})," zu ",(0,r.jsx)("b",{children:"kol-link"}),". \xc4ndern Sie im Editor den Color-Wert f\xfcr ",(0,r.jsx)("b",{children:"a"}),". Wechseln Sie zur\xfcck zur Komponente ",(0,r.jsx)("b",{children:"kol-link-group"}),". Die Schriftfarbe der einzelnen Links hat sich ebenfalls ge\xe4ndert."]}),"\n",(0,r.jsxs)(n.li,{children:["Wenn Sie versuchen, die zuvor genannten Einstellungen direkt in der Komponente ",(0,r.jsx)("b",{children:"kol-link-group"})," zu \xe4ndern, werden Sie keine Ver\xe4nderungen sehen. Es w\xe4re hier aber z. B. m\xf6glich, die Hintergrundfarbe der ganzen Komponente ",(0,r.jsx)("b",{children:"kol-link-group"})," zu \xe4ndern."]}),"\n",(0,r.jsxs)(n.li,{children:["Beachten Sie, dass Sie \xfcber den KoliBri-Designer nur Komponenten stylen k\xf6nnen, die sich innerhalb eines Shadow-Doms befinden. Es w\xe4re beim Beispiel ",(0,r.jsx)("b",{children:"kol-link-group"})," nicht m\xf6glich, das Element ",(0,r.jsx)("b",{children:(0,r.jsx)("kol-link-group",{_label:""})})," selbst zu stylen, da sich dieses nicht innerhalb eines Shadow-Doms befindet."]}),"\n",(0,r.jsxs)(n.li,{children:["Beachten Sie, dass \xc4nderungen im KoliBri-Designer nur solche KoliBri-Komponenten m\xf6glich sind, die beim Rendern einen Shadow-Dom besitzen. Das ist z. B. bei der Komponente ",(0,r.jsx)("b",{children:"kol-icon-icofont"})," oder ",(0,r.jsx)("b",{children:"kol-icon-fontawesome"})," nicht der Fall."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},16034:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var r=i(50959);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);