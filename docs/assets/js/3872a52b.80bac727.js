"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4032],{17942:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(50959);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return t?r.createElement(h,a(a({ref:n},m),{},{components:t})):r.createElement(h,a({ref:n},m))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(15882),i=(t(50959),t(17942));const o={authors:"deleonio",tags:["theming","icon","font"]},a="Wie kann ich Icons im Theme \xe4ndern?",l={permalink:"/blog/2023/05/12/",source:"@site/blog/2023-05-12.mdx",title:"Wie kann ich Icons im Theme \xe4ndern?",description:"Heute wollen wir in einem kurzen Blog-Post zeigen, wie Ihr die standardm\xe4\xdfig hinterlegten Icons \xfcber das Theming (Theme-Designer) \xe4ndern k\xf6nnt.",date:"2023-05-12T00:00:00.000Z",formattedDate:"12. Mai 2023",tags:[{label:"theming",permalink:"/blog/tags/theming"},{label:"icon",permalink:"/blog/tags/icon"},{label:"font",permalink:"/blog/tags/font"}],readingTime:2.09,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{authors:"deleonio",tags:["theming","icon","font"]},prevItem:{title:"Wie kann ich einen eigenen Button-Typ hinzuf\xfcgen?",permalink:"/blog/2023/06/05/"},nextItem:{title:"Ank\xfcndigung Release 1.5",permalink:"/blog/2023/05/03/"}},s={authorsImageUrls:[void 0]},c=[{value:"1. Icon-Font integrieren",id:"1-icon-font-integrieren",level:2},{value:"Icon-Font im Theme hinterlegen",id:"icon-font-im-theme-hinterlegen",level:2},{value:"Standard-Icons im Theme \xe4ndern",id:"standard-icons-im-theme-\xe4ndern",level:2},{value:"FAQ",id:"faq",level:2},{value:"Warum h\xe4ngt das Icon im KolIcon etwas tiefer?",id:"warum-h\xe4ngt-das-icon-im-kolicon-etwas-tiefer",level:3},{value:"Warum kann ich die Schriftgr\xf6\xdfe nicht \xe4ndern?",id:"warum-kann-ich-die-schriftgr\xf6\xdfe-nicht-\xe4ndern",level:3}],m={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Heute wollen wir in einem kurzen Blog-Post zeigen, wie Ihr die standardm\xe4\xdfig hinterlegten Icons \xfcber das Theming (Theme-Designer) \xe4ndern k\xf6nnt."),(0,i.kt)("h2",{id:"1-icon-font-integrieren"},"1. Icon-Font integrieren"),(0,i.kt)("p",null,"Damit Icons angezeigt werden k\xf6nnen, muss zun\xe4chst die gew\xfcnschte Icon-Font (z.B. Font Awesome Free) in der Webseite (HTML) eingebunden werden. Dies geschieht in der Regel mittels folgendem HTML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n    <link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css" />\n</head>\n')),(0,i.kt)("h2",{id:"icon-font-im-theme-hinterlegen"},"Icon-Font im Theme hinterlegen"),(0,i.kt)("p",null,"Die Icon-Komponente von KoliBri kapselt die Icon-Font und muss daher die CSS-Definitionen von den im Design System ausgew\xe4hlten Icon-Identifier kennen.\nDazu muss das CSS aus der gleichen CSS-Datei, wie aus 1., in das Theme kopiert und damit hinterlegt werden."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Theme-Designer \xf6ffnen"),(0,i.kt)("li",{parentName:"ol"},"Theme ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ol"},"Icon-Komponente ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ol"},"Schalter auf Komponent-Styling umstellen"),(0,i.kt)("li",{parentName:"ol"},"CSS aus der Icon-Font einf\xfcgen und speichern"),(0,i.kt)("li",{parentName:"ol"},"Theme in Projekt \xfcbernehmen")),(0,i.kt)("h2",{id:"standard-icons-im-theme-\xe4ndern"},"Standard-Icons im Theme \xe4ndern"),(0,i.kt)("p",null,"Das \xc4ndern eines Icons ist ganz einfach, wenn folgendes Prinzip klar ist. Alle Icons werden durch die Web Component ",(0,i.kt)("inlineCode",{parentName:"p"},"kol-icon")," abgebildet. Diese Komponente\nexportiert immer den Part ",(0,i.kt)("inlineCode",{parentName:"p"},"icon"),". \xdcber einen Part kann man auf festgelegte CSS-Eigenschaften innerhalb einer Web Component zugreifen. Exemplarisch sieht das\nso aus:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"kol-icon::part(icon) {\n    font-family: 'Font Awesome 6 Free';\n    font-weight: 900;\n}\nkol-icon::part(icon):before {\n    content: '\ud83d\ude03';\n}\n")),(0,i.kt)("p",null,"Um ein Icon \xfcber den Designer zu \xe4ndern, sind folgende Schritte zu durchlaufen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Theme-Designer \xf6ffnen"),(0,i.kt)("li",{parentName:"ol"},"Theme ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ol"},"Komponente ausw\xe4hlen, wo ein Icon ge\xe4ndert werden soll"),(0,i.kt)("li",{parentName:"ol"},"Schalter auf Komponent-Styling umstellen"),(0,i.kt)("li",{parentName:"ol"},"Spezifischen Selektor auf ein Icon ermitteln"),(0,i.kt)("li",{parentName:"ol"},"Spezifischen Selektor verwenden, um Schriftart und Content anzupassen"),(0,i.kt)("li",{parentName:"ol"},"Komponent-CSS speichern"),(0,i.kt)("li",{parentName:"ol"},"Theme in Projekt \xfcbernehmen")),(0,i.kt)("p",null,"Hier mal ein komplexeres Beispiel f\xfcr die Pagination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"kol-button::part(icon) {\n    font-family: 'Font Awesome 6 Free';\n    font-weight: 900;\n}\nkol-button.first::part(icon):before,\nkol-button.previous::part(icon):before,\nkol-button.next::part(icon):before,\nkol-button.last::part(icon):before {\n    content: '\ud83d\ude03';\n}\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"warum-h\xe4ngt-das-icon-im-kolicon-etwas-tiefer"},"Warum h\xe4ngt das Icon im KolIcon etwas tiefer?"),(0,i.kt)("p",null,"Mit der CSS-Definition ",(0,i.kt)("inlineCode",{parentName:"p"},"display: contents;")," am ",(0,i.kt)("inlineCode",{parentName:"p"},"kol-icon"),"-Tag wird das Icon passend ausgerichtet. Die Ausrichtung der Icon-Komponente innerhalb anderer Komponenten h\xe4ngt immer von der jeweiligen Verwendung ab."),(0,i.kt)("h3",{id:"warum-kann-ich-die-schriftgr\xf6\xdfe-nicht-\xe4ndern"},"Warum kann ich die Schriftgr\xf6\xdfe nicht \xe4ndern?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"kol-icon::part(icon) {\n    font-family: 'Font Awesome 6 Free';\n    font-size: 2rem !important;\n    font-weight: 900;\n}\n")),(0,i.kt)("p",null,"Der Grund liegt in der ",(0,i.kt)("inlineCode",{parentName:"p"},"font")," CSS-Definition in der Icon-Font selbst und in der Notwendigkeit, die Schriftgr\xf6\xdfe\nbei Icons von Au\xdfen setzen \xfcbernehmen (erben)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".codicon[class*='codicon-'] {\n    font: 16px / 1 codicon;\n}\n:host > i,\n:host > i::before {\n    font-size: inherit !important;\n}\n")),(0,i.kt)("p",null,"M\xf6chte man ein Icon in seiner Gr\xf6\xdfe anpassen, so kann man das einfach von Au\xdfen tun."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"kol-icon {\n    font-size: 2rem;\n}\n")))}d.isMDXComponent=!0}}]);