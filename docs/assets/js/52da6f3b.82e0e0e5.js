"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[40165],{17942:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),k=p(n),N=i,s=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(s,r(r({ref:t},m),{},{components:n})):a.createElement(s,r({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=N;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[k]="string"==typeof e?e:i,r[1]=d;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},58824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(15882),i=(n(50959),n(17942));const l={},r=void 0,d={unversionedId:"readmes/input-email/readme",id:"version-1.5.3/readmes/input-email/readme",title:"readme",description:"Der Input-Typ E-Mail erzeugt ein Eingabefeld f\xfcr E-Mails.",source:"@site/versioned_docs/version-1.5.3/readmes/input-email/readme.md",sourceDirName:"readmes/input-email",slug:"/readmes/input-email/",permalink:"/docs/1.5.3/readmes/input-email/",draft:!1,tags:[],version:"1.5.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/1.5.3/readmes/input-date/"},next:{title:"readme",permalink:"/docs/1.5.3/readmes/input-file/"}},o={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],m={toc:p},k="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Der Input-Typ ",(0,i.kt)("strong",{parentName:"p"},"E-Mail")," erzeugt ein Eingabefeld f\xfcr E-Mails."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<kol-input-email _id="meine_email" _name="meine_email" _icon="codicon codicon-mail"> E-Mail-Adresse </kol-input-email>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-input-email",{_id:"meine_email",_name:"meine_email",_icon:"codicon codicon-mail"},"E-Mail-Adresse")),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Setzen Sie die ",(0,i.kt)("strong",{parentName:"p"},"InputEmail"),"-Komponente auf Formularen ein, wenn dort die Eingabe einer oder mehrerer E-Mail-Adressen erforderlich ist."),(0,i.kt)("p",null,"Standardm\xe4\xdfig ist die Komponente f\xfcr die Erfassung einer einzelnen E-Mail-Adresse vorgesehen. Setzen Sie das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_multiple")),", um mehrere E-Mail-Adressen zu erfassen. Trennen Sie die einzelnen E-Mail-Adressen mit einem Komma (,) voneinander."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Achten sie darauf ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Eine Validierung der erfassten E-Mail-Adressen innerhalb der Komponente erfolgt nicht.\nUm eine fehlgeschlagene Validierung anzuzeigen, setzen Sie das Attrbut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_error"))," mit der entsprechenden Fehlermeldung, diese wird dann via ",(0,i.kt)("strong",{parentName:"p"},"kol-alert")," unterhalb angezeigt."),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Fokussiert das Eingabefeld.")))),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"},"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/"},"https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_alert")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_alert")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_autoComplete")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_auto-complete")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld autovervollst\xe4ndigt werden kann."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"on"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt das Feld in einen inaktiven Zustand, in dem es keine Interaktion erlaubt."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_error")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_error")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Versteckt das sichtbare Label des Elements."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hint")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hint")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Hinweistext an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ right?: IconOrIconClass")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; left?: IconOrIconClass")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die technische ID des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_list")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_list")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Vorschlagsw\xf6rter an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string[]")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_maxLength")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_max-length")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Zeichen man maximal eingeben kann."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_multiple")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_multiple")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob mehrere Werte eingegeben werden k\xf6nnen."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_name")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den technischen Namen des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_on")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_pattern")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_pattern")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt ein Pr\xfcfpattern f\xfcr das Eingabefeld an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_placeholder")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_placeholder")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Platzhalter des Eingabefeldes an, wenn es leer ist."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_readOnly")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_read-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt das Eingabefeld in den schreibgesch\xfctzten Modus."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_required")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_required")),(0,i.kt)("td",{parentName:"tr",align:null},"Macht das Eingabeelement zu einem Pflichtfeld."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_size")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_size")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt die Breite des Eingabefeldes in Buchstabenbreiten."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht eine Schaltfl\xe4che ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (ohne label)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ _label: string; } & { _ariaControls?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaLabel?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _icon?: Stringified<KoliBriIconProp>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _iconAlign?: Alignment")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _iconOnly?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _role?: AlternativButtonLinkRole")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tabIndex?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tooltipAlign?: Alignment")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaCurrent?: AriaCurrent")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaExpanded?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaSelected?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _disabled?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _accessKey?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _id?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _on?: KoliBriButtonCallbacks<unknown>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _type?: KoliBriButtonType")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _value?: unknown; _variant?: KoliBriButtonVariant")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _customClass?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index dieses Input hat."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_touched")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_touched")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xfchrt wurde."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_value")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_value")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Wert des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"slots"},"Slots"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Slot"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Die Beschriftung des Eingabefeldes.")))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-input")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-input-email --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-input-email fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);