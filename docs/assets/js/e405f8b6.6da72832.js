"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[61434],{17652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=t(11527),r=t(16034);const l={title:"Button- und Link-Komponenten",authors:"deleonio",tags:["button","link"]},s=void 0,d={permalink:"/blog/2023/01/09/",source:"@site/blog/2023-01-09.mdx",title:"Button- und Link-Komponenten",description:"Wir bieten heute die Varianten von Button, ButtonLink, Link und LinkButton an. Zuk\xfcnftig werden wir zus\xe4tzlich den ButtonToggle (Toogle-Button) anbieten. Optisch gibt es Buttons die genau wie Links aussehen und Links die genauso wie Buttons aussehen.",date:"2023-01-09T00:00:00.000Z",formattedDate:"9. Januar 2023",tags:[{label:"button",permalink:"/blog/tags/button"},{label:"link",permalink:"/blog/tags/link"}],readingTime:2.915,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Button- und Link-Komponenten",authors:"deleonio",tags:["button","link"]},unlisted:!1,prevItem:{title:"Eigene Themes unabh\xe4ngig umsetzen",permalink:"/blog/2023/02/02/"},nextItem:{title:"\xdcbersetzungen",permalink:"/blog/2023/01/04/"}},c={authorsImageUrls:[void 0]},o=[{value:"Motivation",id:"motivation",level:2},{value:"Herausforderungen",id:"herausforderungen",level:2},{value:"React-Router",id:"react-router",level:3},{value:"Server-Side-Rendering",id:"server-side-rendering",level:3},{value:"L\xf6sung",id:"l\xf6sung",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Wir bieten heute die Varianten von Button, ButtonLink, Link und LinkButton an. Zuk\xfcnftig werden wir zus\xe4tzlich den ButtonToggle (Toogle-Button) anbieten. Optisch gibt es Buttons die genau wie Links aussehen und Links die genauso wie Buttons aussehen."}),"\n",(0,i.jsx)(n.p,{children:"In der folgenden Tabelle wir eine \xdcbersicht \xfcber die Unterschiede dargestellt:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Merkmal"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Link"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"LinkButton"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Button"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"ButtonLink"}),(0,i.jsxs)(n.th,{style:{textAlign:"center"},children:["ToogleButton",(0,i.jsx)("sup",{children:"*"})]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Design"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Link"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Button"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Button"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Link"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Button"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Semantik"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"a"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"a"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"button"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"button"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"input"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"_href"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2796"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"_on"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"focus()"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2795"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Wert"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"boolean"})})]})]})]}),"\n",(0,i.jsx)("small",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("sup",{children:"*"}),' Der Toogle-Button wurde als Variante der Checkbox umgesetzt, weil es ein Schalter mit maximal zwei\nZust\xe4nden (entweder "an" oder "aus") ist.']})}),"\n",(0,i.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(n.p,{children:"KoliBri strebt neben einer hohe Standardkonformit\xe4t auch eine sehr gute Wiederverwendbarkeit (Developer Experience DX) an.\nDiese wird durch die Einheitlichkeit zu den HTML-Attributen und dem sparsamen Umgang mit zus\xe4tzlichen Properties adressiert."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Rationale:"})," Wenn wir bei einer Link-Komponente, die zum Navigieren gedacht ist, die beiden Verhalten ",(0,i.jsx)(n.strong,{children:"Navigieren"})," und ",(0,i.jsx)(n.strong,{children:"Klick ohne Navigieren"}),"\nanbieten w\xfcrden, dann h\xe4tten wir einen Widerspruch im Verhalten. Auch bei der Verwendung in der Entwicklung m\xfcssten wir die Properties ",(0,i.jsx)(n.code,{children:"_href"})," und ",(0,i.jsx)(n.code,{children:"_on"}),"\noptional machen und wir k\xf6nnten nicht mehr vor der Falschverwendung warnen (Statische Codepr\xfcfung)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"herausforderungen",children:"Herausforderungen"}),"\n",(0,i.jsx)(n.p,{children:"Diese strenge Auslegung kann dazu f\xfchren, dass es bei der Entwicklung mit anderen Bibliotheken und Frameworks zu Problemen kommt.\nVor allem dann, wenn diese bei einem Link einen Klick erwarten."}),"\n",(0,i.jsx)(n.h3,{id:"react-router",children:"React-Router"}),"\n",(0,i.jsx)(n.p,{children:"Der React-Router bildet das Navigieren \xfcber Klicks ab. Bei der Verwendung mit der Link-Komponente gibt es unterschiedliche M\xf6glichkeiten der Implementierung."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Wrapping:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<Link to="/">\n\t<KolLink _href="" _label={`Home`}/>\n</Link>\n<Link to="/test">\n\t<KolLink _href="" _label={`Test`}/>\n</Link>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Per Klick:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<KolButtonLink\n\t_label="Home"\n\t_on={{\n\t\tonClick: () => navigate("/")\n\t}}\n>\n\tHome\n</KolButtonLink>\n<KolButtonLink\n\t_label="Test"\n\t_on={{\n\t\tonClick: () => navigate("/test")\n\t}}\n>\n\tTest\n</KolButtonLink>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"React-Link:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<KolLink\n\t_href=""\n\t_label="Home"\n\tonClick={() => navigate("/")}\n>\n\tHome\n</KolLink>\n<KolLink\n\t_href=""\n\t_label="Test"\n\tonClick={() => navigate("/test")}\n>\n\tTest\n</KolLink>\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hinweis:"})," ",(0,i.jsx)(n.code,{children:'_href=""'})," ist eigentlich nicht erlaubt."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Hier gibt es auch ein kleines Code-Beispiel zum ",(0,i.jsx)("kol-link",{_href:"https://codesandbox.io/s/kolibri-sample-react-link-sample-1jgz8v?file=/src/Navigation.tsx:0-112",_label:"",_target:"sandbox",_label:"Navigieren mit React-Router"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Die angegebenen Beispiele zeigen, dass die Link- und ButtonLink-Komponente f\xfcr die direkte Nutzung mit React-Router geeignet sind. Allerdings wird die Link-Komponente auch innerhalb anderer KoliBri-Komponenten verwendet. ",(0,i.jsx)(n.strong,{children:"Wo das so nicht funktionieren w\xfcrde!"})]}),"\n",(0,i.jsx)(n.h3,{id:"server-side-rendering",children:"Server-Side-Rendering"}),"\n",(0,i.jsx)(n.p,{children:"Das Server-Side-Rendering ist sehr \xe4hnlich zum React-Router, weil dieser technisch sehr stark durch das Framework Remix getrieben ist.\nRemix ist ein Framework zum Erstellen von hybriden Client- und Server-Side-Webapplications. Das hei\xdft die Implementierung unterscheiden sich nicht, ob ich die Anwendung sp\xe4ter als Client- oder Server-seitige Anwendung bauen m\xf6chte.\nF\xfcr Server-Side-Anwendungen m\xfcssen die navigierenden Links mit einem Klick funktionieren, weil diese Anwendungen auf dem Server und nicht im Browser ausgef\xfchrt werden."}),"\n",(0,i.jsxs)(n.p,{children:["Um die Wiederverwendbarkeit von KoliBri auch f\xfcr Server-Side-Webapplications zu gew\xe4hrleisten, muss der Seitenwechsel auch durch ",(0,i.jsx)(n.strong,{children:"Klick ohne Navigieren"})," m\xf6glich sein."]}),"\n",(0,i.jsx)(n.h2,{id:"l\xf6sung",children:"L\xf6sung"}),"\n",(0,i.jsx)(n.p,{children:"Um die Herausforderungen zu l\xf6sen, werden alle Komponenten, denen Link-Definitionen \xfcbergeben werden, erweitert. Wenn diesen Komponenten wahlweise auch ButtonLink-Definitionen \xfcbergeben werden k\xf6nnen, dann k\xf6nnen diese auch Klicks abbilden ohne zu Navigieren, sehen aber optisch weiterhin wie Links aus."}),"\n",(0,i.jsx)(n.p,{children:"Folgende Komponenten m\xfcssen dazu noch erweitert werden:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Breadcrumb"}),"\n",(0,i.jsx)(n.li,{children:"LinkGroup"}),"\n",(0,i.jsx)(n.li,{children:"Nav"}),"\n",(0,i.jsx)(n.li,{children:"SkipNav"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},16034:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(50959);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);