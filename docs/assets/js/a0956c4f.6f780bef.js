"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[81849],{17942:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(c,i(i({ref:t},s),{},{components:n})):r.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},21522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(15882),a=(n(50959),n(17942));const l={},i=void 0,d={unversionedId:"readmes/alert/readme",id:"version-1.5.3/readmes/alert/readme",title:"readme",description:"Die Alert-Komponente gibt ein optisches Feedback an die Nutzer:innen. Sie besteht aus einem farblich gestalteten Container, einer \xdcberschrift, einem Inhaltstext sowie einem Icon. Das verwendete Icon und die farbliche Gestaltung sind abh\xe4ngig vom Typ _type des Alert.",source:"@site/versioned_docs/version-1.5.3/readmes/alert/readme.md",sourceDirName:"readmes/alert",slug:"/readmes/alert/",permalink:"/docs/1.5.3/readmes/alert/",draft:!1,tags:[],version:"1.5.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/1.5.3/readmes/accordion/"},next:{title:"readme",permalink:"/docs/1.5.3/readmes/badge/"}},o={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift",id:"\xfcberschrift",level:3},{value:"\xdcberschriftenebene",id:"\xfcberschriftenebene",level:3},{value:"Typ des Alert",id:"typ-des-alert",level:3},{value:"Inhalt des Alert",id:"inhalt-des-alert",level:3},{value:"Variante des Alert",id:"variante-des-alert",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Alert"),"-Komponente gibt ein optisches Feedback an die Nutzer:innen. Sie besteht aus einem farblich gestalteten Container, einer \xdcberschrift, einem Inhaltstext sowie einem Icon. Das verwendete Icon und die farbliche Gestaltung sind abh\xe4ngig vom Typ ",(0,a.kt)("inlineCode",{parentName:"p"},"_type")," des Alert."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-alert _alert _heading="\xdcberschrift im Alert" _level="1" _type="info" _variant="msg"\n    >Textbereich im Alert</kol-alert\n>\n<kol-alert _alert _heading="\xdcberschrift im Alert" _level="1" _type="info" _variant="card"\n    >Textbereich im Alert</kol-alert\n>\n')),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,(0,a.kt)("kol-alert",{_alert:!0,_heading:"\xdcberschrift im Alert",_level:"1",_type:"info",_variant:"msg"},"Textbereich im Alert"),"\n",(0,a.kt)("kol-alert",{_alert:!0,_heading:"\xdcberschrift im Alert",_level:"1",_type:"info",_variant:"card"},"Textbereich im Alert")),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("h3",{id:"\xfcberschrift"},"\xdcberschrift"),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"\xdcberschrift")," der Alert-Komponente wird \xfcber das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_heading")," bestimmt."),(0,a.kt)("h3",{id:"\xfcberschriftenebene"},"\xdcberschriftenebene"),(0,a.kt)("p",null,"Die \xdcberschriftenebene wird durch das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_level"))," \xfcbergeben. M\xf6glich sind die Level ",(0,a.kt)("strong",{parentName:"p"},"1")," bis ",(0,a.kt)("strong",{parentName:"p"},"6")),(0,a.kt)("h3",{id:"typ-des-alert"},"Typ des Alert"),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Alert"),"-Komponente bietet ",(0,a.kt)("strong",{parentName:"p"},"vier")," unterschiedliche Typen, die sich jeweils auf die farbliche Gestaltung und das verwendetet Icon im Alert beziehen. Zur Wahl stehen:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Success"),(0,a.kt)("li",null,"Error"),(0,a.kt)("li",null,"Info"),(0,a.kt)("li",null,"Warning")),(0,a.kt)("p",null,"Der Typ eines Alert wird \xfcber das Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_type")," festgelegt."),(0,a.kt)("h3",{id:"inhalt-des-alert"},"Inhalt des Alert"),(0,a.kt)("p",null,"Der Inhalt des Alert wird zwischen das \xf6ffnende Element ",(0,a.kt)("inlineCode",{parentName:"p"},"<kol-alert>")," und das schlie\xdfende ",(0,a.kt)("inlineCode",{parentName:"p"},"</kol-alert>")," geschrieben. Der Inhalt kann aus beliebigem ",(0,a.kt)("strong",{parentName:"p"},"HTML-Code"),", aber auch aus weiteren ",(0,a.kt)("strong",{parentName:"p"},"KoliBri"),"-Komponenten bestehen."),(0,a.kt)("h3",{id:"variante-des-alert"},"Variante des Alert"),(0,a.kt)("p",null,"\xdcber das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_variant"))," kann festgelegt werden, in welcher Darstellungsvariante das Alert angezeigt wird. ",(0,a.kt)("inlineCode",{parentName:"p"},"msg")," l\xe4sst die linke, farbig hinterlegte Spalte mit dem Icon \xfcber die gesamte H\xf6he des Alerts gehen, ",(0,a.kt)("inlineCode",{parentName:"p"},"card")," setzt die linke Spalte nur neben die \xdcberchrift."),(0,a.kt)("h3",{id:"best-practices"},"Best practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,a.kt)("strong",{parentName:"li"},"Alert"),"-Komponente an geeigneten Positionen auf Ihrer Webseite, um Informationen im richtigen Zusammenhang darzustellen."),(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie immer den richtigen ",(0,a.kt)("strong",{parentName:"li"},"Type")," der ",(0,a.kt)("strong",{parentName:"li"},"Alert"),"-Komponente, um bei den Benutzer:innen die gew\xfcnschte Reaktion zu erzeugen. Vermeiden Sie bspw. den Typ ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Error")),", wenn Sie auf den erfolgreichen Abschluss eines Speichervorgangs hinweisen m\xf6chten."),(0,a.kt)("li",{parentName:"ul"},"Vermeiden Sie, zu viele ",(0,a.kt)("strong",{parentName:"li"},"Alert"),"-Komponenten auf einer Seite zu platzieren, da der Informationsgehalt von den Benutzer:innen dann oft nicht mehr als besonders wichtig wahrgenommen wird.")),(0,a.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,a.kt)("strong",{parentName:"li"},"Alert"),"-Komponente, wenn Sie die Benutzer:innen auf Fehler bei der Eingabe in Formularen hinweisen m\xf6chten."),(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,a.kt)("strong",{parentName:"li"},"Alert"),"-Komponente, um Nutzer:innen auf die erfolgreiche Ausf\xfchrung von Funktionen hinzuweisen, z.B. ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Ihre Anfrage wurde erfolgreich gespeichert")),"."),(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,a.kt)("strong",{parentName:"li"},"Alert"),"-Komponente, um Nutzer:innen weitere Informationen zu einem Thema zur Verf\xfcgung zu stellen.")),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Alert"),"-Komponente wurde auf die Darstellung mit h\xf6chstm\xf6glichen Kontrast optimiert."),(0,a.kt)("p",null,"Das zus\xe4tzliche Icon (je nach gew\xe4hltem Typ) gew\xe4hrleistet, dass die Information vom Nutzer nicht allein \xfcber die Farbe klassifiziert werden muss."),(0,a.kt)("p",null,"Bei der ",(0,a.kt)("strong",{parentName:"p"},"Alert"),"-Komponente wurden insbesondere folgende Punkte der Barrierefreiheit betrachtet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Schriftfarbe ist entweder wei\xdf oder schwarz."),(0,a.kt)("li",{parentName:"ul"},"Die Schriftfarbe ist abh\xe4ngig von der Hintergrundfarbe und wechselt immer auf die Schriftfarbe mit dem gr\xf6\xdferen Farbkontrast zur Hintergrundfarbe."),(0,a.kt)("li",{parentName:"ul"},"Ist der Farbkontrast f\xfcr AA nicht ausreichend, wird die Hintergrundfarbe \xfcberschrieben.")),(0,a.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#alert"},"https://www.w3.org/TR/wai-aria-practices/#alert"))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_alert")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_alert")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Screenreader die Meldung vorlesen soll."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_hasCloser")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_has-closer")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Alert ein Schlie\xdfen-Icon hat."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_heading")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_heading")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt den Titel der Meldung an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt den H-Level, von 1 bis 6, der \xdcberschrift."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_on")),(0,a.kt)("td",{parentName:"tr",align:null},"--"),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Alerts an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_type")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, ob es sich um eine Erfolgs-, Info-, Warnung- oder Fehlermeldung handelt."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"default"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"error"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"info"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"success"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"warning"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_variant")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_variant")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Benachrichtigungsvariante dargestellt wird."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"card"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"msg"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'msg'"))))),(0,a.kt)("h2",{id:"slots"},"Slots"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Slot"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Der Inhalt der Meldung.")))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"used-by"},"Used by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"."},"kol-alert"))),(0,a.kt)("h3",{id:"depends-on"},"Depends on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc")),(0,a.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./icon"},"kol-icon"))),(0,a.kt)("h3",{id:"graph"},"Graph"),(0,a.kt)("mermaid",{value:"graph TD;\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  style kol-alert-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);