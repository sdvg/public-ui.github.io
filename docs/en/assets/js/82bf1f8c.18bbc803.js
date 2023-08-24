"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8499],{17942:(e,n,i)=>{i.d(n,{Zo:()=>o,kt:()=>p});var t=i(50959);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function u(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?u(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},u=Object.keys(e);for(t=0;t<u.length;t++)i=u[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)i=u[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},o=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,u=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=c(i),g=r,p=h["".concat(s,".").concat(g)]||h[g]||d[g]||u;return i?t.createElement(p,a(a({ref:n},o),{},{components:i})):t.createElement(p,a({ref:n},o))}));function p(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=i.length,a=new Array(u);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[h]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<u;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},64267:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var t=i(15882),r=(i(50959),i(17942));const u={title:"KoliBri - intuitiv erlernen",authors:["chatgpt","deleonio"]},a=void 0,l={permalink:"/en/blog/2023/07/11/",source:"@site/blog/2023-07-11.mdx",title:"KoliBri - intuitiv erlernen",description:"Hinweis: Dieser Artikel wurde zu Teilen durch [ChatGPT] generiert. Die Inhalte wurden von einem Menschen \xfcberpr\xfcft und ggf. angepasst.",date:"2023-07-11T00:00:00.000Z",formattedDate:"July 11, 2023",tags:[],readingTime:2.095,hasTruncateMarker:!1,authors:[{name:"ChatGPT",title:"AI companion - Answering questions, sparking conversations, helping.",url:"https://chat.openai.com",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",key:"chatgpt"},{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"KoliBri - intuitiv erlernen",authors:["chatgpt","deleonio"]},prevItem:{title:"Aria-Attributen bei Button- und Link",permalink:"/en/blog/2023/07/26/"},nextItem:{title:"Component Library vs. Design System",permalink:"/en/blog/2023/06/28/"}},s={authorsImageUrls:[void 0,void 0]},c=[{value:"Einheitliche Property-Namen",id:"einheitliche-property-namen",level:2},{value:"Einheitliche Beschreibungen",id:"einheitliche-beschreibungen",level:2},{value:"Einheitliche Typen",id:"einheitliche-typen",level:2},{value:"Minimierung der Unterschiede",id:"minimierung-der-unterschiede",level:2},{value:"Fazit",id:"fazit",level:2},{value:"Ausblick",id:"ausblick",level:2}],o={toc:c},h="wrapper";function d(e){let{components:n,...i}=e;return(0,r.kt)(h,(0,t.Z)({},o,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hinweis: Dieser Artikel wurde zu Teilen durch ",(0,r.kt)("a",{parentName:"p",href:"https://chat.openai.com/"},"ChatGPT")," generiert. Die Inhalte wurden von einem Menschen \xfcberpr\xfcft und ggf. angepasst.")),(0,r.kt)("p",null,"Im Laufe der Jahre weisen die Benennung und Semantik in HTML teilweise gro\xdfe Unterschieden auf. Aufgrund der Abw\xe4rtskompatibilit\xe4t von HTML sind Korrekturen und \xc4nderungen nur \xe4u\xdferst schwierig umzusetzen. Diese Situation hat zu unz\xe4hligen Best Practices und How-to's gef\xfchrt, die versuchen, auf unterschiedliche Weise \xe4hnliche Anforderungen umzusetzen. Angesichts des wachsenden Bewusstseins f\xfcr Barrierefreiheit und den damit verbundenen gesetzlichen Anforderungen gewinnt die Semantik jedoch eine immense Bedeutung. Hier kommt KoliBri ins Spiel, indem es einen barrierefreien Webcomponent-Standard auf HTML schafft und gleichzeitig f\xfcr eine einheitlichere und somit leicht erlernbare Verwendung sorgt."),(0,r.kt)("h2",{id:"einheitliche-property-namen"},"Einheitliche Property-Namen"),(0,r.kt)("p",null,"Die Verwendung eines einzigen Property-Namens f\xfcr gleichartige Eigenschaften ist ein wichtiger Grundsatz, der die Konsistenz in der Entwicklung f\xf6rdert. Durch die einheitliche Benennung wird vermieden, dass Entwickler:innen nach unterschiedlichen Bezeichnungen f\xfcr \xe4hnliche Eigenschaften suchen m\xfcssen. Dies erh\xf6ht die Effizienz und die Erlernbarkeit des Codes erheblich."),(0,r.kt)("h2",{id:"einheitliche-beschreibungen"},"Einheitliche Beschreibungen"),(0,r.kt)("p",null,"Wenn m\xf6glich, sollen gleiche Property-Namen auch einheitliche Beschreibungen haben. Klar formulierte und konsistente Beschreibungen erleichtern es Entwickler:innen, die Funktionalit\xe4t einer Eigenschaft zu verstehen und richtig einzusetzen. Durch die Verwendung einheitlicher Beschreibungen wird die Dokumentation vereinfacht und die Fehleranf\xe4lligkeit reduziert."),(0,r.kt)("h2",{id:"einheitliche-typen"},"Einheitliche Typen"),(0,r.kt)("p",null,"\xc4hnlich wie bei den Beschreibungen ist es w\xfcnschenswert, dass gleiche Property-Namen auch einheitliche Typen haben, sofern dies m\xf6glich ist. Einheitliche Typen erleichtern die Verwendung und das Verst\xe4ndnis der Eigenschaften und tragen zur einheitlichen Handhabung bei."),(0,r.kt)("h2",{id:"minimierung-der-unterschiede"},"Minimierung der Unterschiede"),(0,r.kt)("p",null,"Um die Komplexit\xe4t zu reduzieren und die Erlernbarkeit zu verbessern, ist es wichtig, die Anzahl der unterschiedlichen Eigenschaften, Beschreibungen und Typen zu minimieren. Durch eine bewusste Entscheidung, nur die notwendigen und relevanten Eigenschaften zu definieren, wird der Entwicklungsprozess schlanker und effizienter. Dies erleichtert auch die Wartung und Weiterentwicklung der Komponenten \xfcber die Zeit hinweg."),(0,r.kt)("h2",{id:"fazit"},"Fazit"),(0,r.kt)("p",null,"Die Verwendung von einheitlichen Eigenschaften in der Entwicklung von Komponenten ist ein entscheidender Faktor f\xfcr eine bessere Erlernbarkeit und Effizienz. Durch die Einhaltung der definierten Anforderungen, wie die Verwendung eines einzigen Property-Namens, einheitliche Beschreibungen und Typen sowie die Minimierung von Unterschieden, k\xf6nnen Entwickler:innen einfacher und schneller mit den Komponenten arbeiten. Dies f\xfchrt zu qualitativ hochwertigerem Code, einer verbesserten Zusammenarbeit und letztendlich zu einer besseren Benutzererfahrung. Indem wir die Bedeutung der Einheitlichkeit in der Entwicklung betonen, k\xf6nnen wir die Barrierefreiheit und die Qualit\xe4t unserer digitalen L\xf6sungen weiter vorantreiben."),(0,r.kt)("h2",{id:"ausblick"},"Ausblick"),(0,r.kt)("p",null,"Und das Beste ist, alle Verbesserungen flie\xdfen soweit m\xf6glich schon in Version 1 ein und bereiten damit eine m\xf6glichst harmonische Migration auf Version 2 vor."))}d.isMDXComponent=!0}}]);