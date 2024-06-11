"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[12840],{48964:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>h,toc:()=>p});var t=i(76776),l=i(108);function r(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Eine ",(0,t.jsx)(n.strong,{children:"Navigationsleiste"})," ist eine Gruppe von verwandten Links oder Navigationselementen, die durch Anklicken eine Aktion ausf\xfchren oder Inhalte anzeigen. Sie navigiert Nutzer",":innen"," direkt zu bestimmten Inhalten der aktuellen Seite oder zu externen Seiten. Au\xdferdem dient sie Nutzer",":innen"," (\xe4hnlich wie Registerkarten) als Steuerelement, um Inhalte anzuzeigen, auszublenden und zwischen ihnen zu wechseln."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"KoliBri"})," stellt eine umfangreich konfigurierbare, vertikale oder horizontale ",(0,t.jsx)(n.strong,{children:"Navigationsleiste"})," zur Verf\xfcgung, die mehrere Ebenen darstellen und in der Breite variiert werden kann.\n\xdcbergeordnete Men\xfcpunkte die Untermen\xfcpunkte enthalten, werden mit einem ",(0,t.jsx)(n.strong,{children:"Plus-Icon"})," am rechten Rand angezeigt. Wird der \xfcbergeordnete Men\xfcpunkt mit dem Plus-Icon ge\xf6ffnet, \xe4ndert sich das Plus-Icon automatisch zu einem ",(0,t.jsx)(n.strong,{children:"Minus-Icon"}),", mit dem der Men\xfcpunkt wieder geschlossen werden kann."]}),"\n",(0,t.jsx)(n.p,{children:"Aktive Men\xfcpunkte werden mit einer farbigen Markierung dargestellt."}),"\n",(0,t.jsxs)(n.p,{children:["\xdcber eine optionale Schaltfl\xe4che unterhalb der Navigation kann die Breite der ",(0,t.jsx)(n.strong,{children:"Nav"}),"-Komponente ver\xe4ndert werden. In der kleinsten Breite werden die Men\xfctitel ausgeblendet und nur\nnoch die Icons ausgegeben."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<kol-nav\n\t_ariaLabel=\"Navigation\"\n\t_links=\"[\n\t{\n\t\t_href: 'startseite',\n\t\t_icon: 'codicon codicon-home',\n\t\t_label: 'Startseite',\n\t\t_children: [\n\t\t\t{ _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },\n\t\t\t{ _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },\n\t\t],\n\t},\n\t{ _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' },\n]\"\n\t_has-compact-button\n></kol-nav>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)("kol-nav",{_ariaLabel:"Navigation",_links:"[{'_href':'startseite','_icon':'codicon codicon-home','_label':'Startseite','_children':[{'_href':'startseite/1-untermenuepunkt','_icon':'codicon codicon-home','_label':'1. Untermen\xfcpunkt'},{'_href':'startseite/2-untermenuepunkt','_icon':'codicon codicon-home','_label':'2. Untermen\xfcpunkt'}]},{'_href':'unterseite','_icon':'codicon codicon-home','_label':'2. Men\xfcpunkt'}]","_has-compact-button":!0}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsx)(n.h3,{id:"links-in-der-navigationsleiste-definieren",children:"Links in der Navigationsleiste definieren"}),"\n",(0,t.jsxs)(n.p,{children:["Die Navigationsstruktur wird als Objekt oder JSON-String an das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_links"})})," \xfcbergeben. Die Struktur ist als Wert/Parameter-Paar aufgebaut:\nUm Untermen\xfcpunkte zu erzeugen, erweitern Sie die JSON-Struktur um das zus\xe4tzliche Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_children"})})," im \xfcbergeordneten Element."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n\t{\n\t\t_href: 'startseite',\n\t\t_icon: 'codicon codicon-home',\n\t\t_label: 'Startseite',\n\t\t_children: [\n\t\t\t{ _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },\n\t\t\t{ _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },\n\t\t],\n\t},\n\t{ _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' },\n];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"kompakte-navigationsleiste-anzeigen",children:"Kompakte Navigationsleiste anzeigen"}),"\n",(0,t.jsxs)(n.p,{children:["Um die Navigationsleiste in der kompakten Darstellung auszugeben, setzen Sie das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_compact"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"umschalter-normalekompakte-darstellung",children:"Umschalter normale/kompakte Darstellung"}),"\n",(0,t.jsxs)(n.p,{children:["Um eine Schaltfl\xe4che einzublenden, die die kompakte Darstellung an/aus schaltet, setzen Sie das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_hasCompact-button"})}),".\nDiese Schaltfl\xe4che erscheint unterhalb der Navigation und wird nur bei vertikaler Ausrichtung angezeigt."]}),"\n",(0,t.jsx)(n.h3,{id:"umschaltung-horizontalevertikale-ausrichtung",children:"Umschaltung horizontale/vertikale Ausrichtung"}),"\n",(0,t.jsxs)(n.p,{children:["Die Ausrichtung der Navigationsleiste kann mit dem Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_orientation"})})," umgeschaltet werden. M\xf6gliche Werte sind:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"horizontal"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vertical"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie ",(0,t.jsx)(n.strong,{children:"Navigationsleisten"}),", um ",(0,t.jsx)(n.strong,{children:"Navigation"})," oder navigations\xe4hnliche Aktionen darzustellen (z. B. interne oder externe Links, Abmelden, Kontrolle der Sichtbarkeit auf der Seite)."]}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie das Label, um eine klare und pr\xe4zise Beschreibung des Inhalts zu diesem bestimmten Navigationselement bereitzustellen."}),"\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie keine ",(0,t.jsx)(n.strong,{children:"Navigationsleisten"})," f\xfcr Aktionen, die besser als Schaltfl\xe4chen dargestellt werden (z. B. \u201eSpeichern\u201c, \u201eL\xf6schen\u201c, \u201eArtikel in den Warenkorb legen\u201c)."]}),"\n",(0,t.jsxs)(n.li,{children:["Stapeln Sie nicht mehrere ",(0,t.jsx)(n.strong,{children:"Navigationsleisten"})," direkt nebeneinander."]}),"\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie keine ",(0,t.jsx)(n.strong,{children:"Navigationsleisten"})," zum Vergleichen von Inhalten (z. B. unterschiedliche Leistungen)."]}),"\n",(0,t.jsxs)(n.li,{children:["Ber\xfccksichtigen Sie die Anzahl der Navigationselemente, die Sie in die ",(0,t.jsx)(n.strong,{children:"Navigationsleiste"})," einf\xfcgen. Wenn Sie das Gef\xfchl haben, dass die Zahl zu gro\xdf wird, ziehen Sie alternative Ans\xe4tze zur Pr\xe4sentation des Inhalts in Betracht oder verwenden Sie ein anderes Navigationsmuster/eine andere Komponente."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie ",(0,t.jsx)(n.strong,{children:"Navigationsleisten"})," als In-Page-Navigation auf einer Landingpage."]}),"\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie ",(0,t.jsx)(n.strong,{children:"Navigationsleisten"}),", um verwandte Informationen auf einer Landingpage zu organisieren."]}),"\n",(0,t.jsxs)(n.li,{children:["Nutzen Sie ",(0,t.jsx)(n.strong,{children:"Navigationsleisten"}),", um Angebote oder Vorteile in verschiedene Kategorien einzuordnen (z.B. Formulare)."]}),"\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie ",(0,t.jsx)(n.strong,{children:"Navigationsleisten"}),", um FAQs in verschiedene Kategorien zu unterteilen."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Fokussiert den ersten Men\xfcpunkt in der Navigation. Nachfolgend kann mit der Tab-Taste jeder Men\xfcpunkt angesprungen werden. Wenn der Has-compact-Button aktiviert wurde, ist dieser ebenfalls mit der Tab-Taste erreichbar."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Enter"})}),(0,t.jsx)(n.td,{children:"Klappt Unterpunkte auf/zu, sofern eine Ausklappschaltfl\xe4che fokussiert ist, aktiviert die Schaltfl\xe4che oder \xf6ffnet den Link anderenfalls."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_ariaCurrentValue"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-current-value"})}),(0,t.jsx)(n.td,{children:"Gibt den Wert von aria-current an, der bei dem aktuellen Kontext innerhalb der Navigation verwendet werden soll."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"date"'})," | ",(0,t.jsx)(n.code,{children:'"location"'})," | ",(0,t.jsx)(n.code,{children:'"page"'})," | ",(0,t.jsx)(n.code,{children:'"step"'})," | ",(0,t.jsx)(n.code,{children:'"time"'})," | ",(0,t.jsx)(n.code,{children:"boolean"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_ariaLabel"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-label"})}),(0,t.jsx)(n.td,{children:"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_collapsible"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_collapsible"})}),(0,t.jsx)(n.td,{children:"Gibt an, ob Knoten in der Navigation zusammengeklappt werden k\xf6nnen. Ist standardm\xe4\xdfig aktiv."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_compact"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_compact"})}),(0,t.jsx)(n.td,{children:"Gibt an, ob die Navigation kompakt angezeigt wird."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hasCompactButton"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_has-compact-button"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Version 2",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Gibt an, ob die Navigation eine zus\xe4tzliche Schaltfl\xe4che zum Aus- und Einklappen der Navigation anzeigen soll."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_links"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_links"})}),(0,t.jsx)(n.td,{children:"Gibt die geordnete Liste der Seitenhierarchie an."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"ButtonOrLinkOrTextWithChildrenProps[]"})," | ",(0,t.jsx)(n.code,{children:"string"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_orientation"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_orientation"})}),(0,t.jsx)(n.td,{children:"Gibt die Ausrichtung der Navigation an."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"horizontal"'})," | ",(0,t.jsx)(n.code,{children:'"vertical"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'vertical'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_variant"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_variant"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," This property is deprecated and will be removed in the next major version.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Stellt verschiedene Varianten der Navigation zur Verf\xfcgung."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"primary"'})," | ",(0,t.jsx)(n.code,{children:'"secondary"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'primary'"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"kol-button-wc"}),"\n",(0,t.jsx)(n.li,{children:"kol-span-wc"}),"\n",(0,t.jsx)(n.li,{children:"kol-link-wc"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./button",children:"kol-button"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n  kol-nav --\x3e kol-button-wc\n  kol-nav --\x3e kol-span-wc\n  kol-nav --\x3e kol-link-wc\n  kol-nav --\x3e kol-button\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-button --\x3e kol-button-wc\n  style kol-nav fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}var a=i(37704),d=i(54592);const o={title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",tags:["Nav","Beschreibung","Spezifikation","Beispiele"]},c=void 0,h={id:"components/nav",title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/nav.mdx",sourceDirName:"30-components",slug:"/components/nav",permalink:"/docs/1.5/components/nav",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Nav",permalink:"/docs/1.5/tags/nav"},{inline:!0,label:"Beschreibung",permalink:"/docs/1.5/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/1.5/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",tags:["Nav","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/docs/1.5/components/modal"},next:{title:"Pagination",permalink:"/docs/1.5/components/pagination"}},u={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Links in der Navigationsleiste definieren",id:"links-in-der-navigationsleiste-definieren",level:3},{value:"Kompakte Navigationsleiste anzeigen",id:"kompakte-navigationsleiste-anzeigen",level:3},{value:"Umschalter normale/kompakte Darstellung",id:"umschalter-normalekompakte-darstellung",level:3},{value:"Umschaltung horizontale/vertikale Ausrichtung",id:"umschaltung-horizontalevertikale-ausrichtung",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function x(e){const n={h2:"h2",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(d.o,{component:"nav"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(a.Q,{component:"nav",sample:"basic"}),"\n",(0,t.jsx)(a.Q,{component:"nav",sample:"horizontal"})]})}function m(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>o});var t=i(83488),l=i(80924),r=i(76776);const s=function(e,n,i,t,l){return void 0===l&&(l="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${l}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(t.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,c]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},x=`/sample-react/#/${n}/${i}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(t._,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===o&&(0,r.jsx)("iframe",{src:x,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===o&&(0,r.jsx)(d,{url:s(h,n,i,p.angular)})}),(0,r.jsx)("div",{children:"React"===o&&(0,r.jsx)(d,{url:s(h,n,i,p.react)})}),(0,r.jsx)("div",{children:"Vue"===o&&(0,r.jsx)(d,{url:s(h,n,i,p.vue)})}),(0,r.jsx)("div",{children:"Web Component"===o&&(0,r.jsx)(d,{url:s(h,n,i,p.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>f});var t=i(30440),l=i(83488),r=i(80924),s=i(6960),a=i(76776);function d(e){const{label:n,name:i,update:t,value:s}=e;return(0,r.useEffect)((()=>{s||t(i,"#000000")}),[]),(0,a.jsx)(l.eK,{_label:"",_on:{onInput:(e,n)=>t(i,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:t}=e,[s,d]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[p,x]=(0,r.useState)("");let m=!1,j=!1,b=!1,g=!1;n.type.includes("KoliBriAllIcon")?(m=!0,j=!0,b=!0,g=!0):(n.type.includes("KoliBriVerticalIcon")&&(b=!0,g=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,j=!0)),(0,r.useEffect)((()=>{if(!s||o||h||p){const e={};s&&(e.left=`codicon codicon-${s}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${s}`)}),[s,o,h,p]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,m?(0,a.jsx)(l.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:v.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",j?(0,a.jsx)(l.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:v.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",b?(0,a.jsx)(l.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:v.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",g?(0,a.jsx)(l.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:v.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:t,update:r,value:s}=e,d=[];function o(e){return{label:e,value:e}}return t.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...t.filter((e=>"undefined"!==e)).map(o))):d.push(...t.filter((e=>"undefined"!==e)).map(o)),(0,a.jsx)(l.qy,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onInput:(e,i)=>r(n,i[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(l.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(d,{name:n.name,label:r,update:i,value:t});case"_icons":return(0,a.jsx)(o,{attribute:n,label:r,update:i,value:t});default:switch(s){case"string":return(0,a.jsx)(l.Uh,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(l.QL,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(l.Q7,{className:"my-2",_checked:!0===t,_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:n.name,types:e,update:i,value:t}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(63136),p=i(28256),x=i(39452),m=i.n(x);function j(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,r.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),d=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,a]of d)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const o=`<kol-${n}${l}>${s}</kol-${n}>`;let c;try{c=(0,p.format)(o,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function b(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:l.s1,accordion:l.IP,alert:l.mW,avatar:l.aq,badge:l.cX,breadcrumb:l.If,button:l.qC,"button-group":l.Os,"button-link":l.u_,card:l.Yh,details:l.Si,form:l.OO,heading:l.ch,icon:l.SA,image:l.iu,"indented-text":l.MV,"input-checkbox":l.Q7,"input-color":l.eK,"input-date":l.QZ,"input-email":l.kN,"input-file":l.Ex,"input-number":l.QL,"input-password":l.EH,"input-radio":l.wJ,"input-range":l.Ef,"input-text":l.Uh,kolibri:l.aY,link:l.GQ,"link-button":l._k,"link-group":l.O_,logo:l.ae,modal:l.cT,nav:l.Y4,pagination:l.kj,progress:l.O0,quote:l.SY,select:l.qy,"skip-nav":l.Ig,spin:l.kP,"split-button":l.a,symbol:l.OM,table:l.Y9,tabs:l._,textarea:l.DG,version:l.k1}[e.tag];return t?(0,a.jsx)(t,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:n,name:i,update:t,value:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const v=["_smart-button","_icon-align"],k={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function f(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(t.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==k[i]?.[n.name]&&(e[i][n.name]=k[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,l=k[i]?.[t];l&&(e[i][t]=l)}))})),e}()),[d,o]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!t.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!n[d]?._label&&u("_label","Label-Text");!!t.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!n[d]?._heading&&u("_heading","Heading-Text")}),[d]);const c=(0,r.useMemo)((()=>n[d]||{}),[n,d]);function u(e,n){i((i=>{const t={...i[d],[e]:n,defaultValues:i[d].defaultValues.filter((n=>n!==e))};return{...i,[d]:t}}))}const p=Object.values(t.Q).find((e=>e.name===`kol-${d}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(l._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(b,{tag:d,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(j,{params:c,tag:d})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(l.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!v.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(l.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(g,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);