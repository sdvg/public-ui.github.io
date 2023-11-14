"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[17607],{17942:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(50959);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(97605),l=(n(50959),n(17942)),i=n(72526);const r={title:"Announcement Release 1.5",authors:"deleonio",tags:["release","neuerungen"]},o="Announcement - Release 1.5",s={permalink:"/en/blog/2023/05/03/",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-05-03.mdx",title:"Announcement Release 1.5",description:"Release 1.5 will be released soon and will bring numerous new components, improvements and simplified theming.",date:"2023-05-03T00:00:00.000Z",formattedDate:"May 3, 2023",tags:[{label:"release",permalink:"/en/blog/tags/release"},{label:"neuerungen",permalink:"/en/blog/tags/neuerungen"}],readingTime:4.56,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Announcement Release 1.5",authors:"deleonio",tags:["release","neuerungen"]},prevItem:{title:"How can I change icons in the theme?",permalink:"/en/blog/2023/05/12/"},nextItem:{title:"Wie style ich eine Komponente?",permalink:"/en/blog/2023/02/23/"}},p={authorsImageUrls:[void 0]},m=[],u={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Release 1.5 will be released soon and will bring numerous new components, improvements and simplified theming."),(0,l.kt)("p",null,"The most important changes are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New components"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Image"),(0,l.kt)("li",{parentName:"ul"},"Popover"),(0,l.kt)("li",{parentName:"ul"},"Split button"),(0,l.kt)("li",{parentName:"ul"},"ToggleButton (see InputCheckbox)"),(0,l.kt)("li",{parentName:"ul"},"Quote"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Improvements"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Performance"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Performance was affected by the oversized CSS definitions in the icon component. The background are the many icon selectors in the icon fonts. However, only a fraction of these CSS definitions are really needed for a design system. For the components we went with the lightweight Visual Studio Code (Codicon) icon font and removed Iconont and Font-Awesome by default (can be upgraded again). Thus, this release brings with it a significant performance improvement when rendering the components."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Assets (Fonts and Icons)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Icon font versions have been updated"),(0,l.kt)("li",{parentName:"ul"},"Assets have been split across themes where relevant. As a result, the KoliBri artifact (NPM package) can be reduced in size and thus downloaded and installed faster."),(0,l.kt)("li",{parentName:"ul"},"By storing a postinstall script, the assets can be automatically copied to the ",(0,l.kt)("inlineCode",{parentName:"li"},"public/assets")," folder after each installation of the KoliBri packages.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    // package.json\n    "scripts": {\n        \u2026\n        "postinstall": "npm-run-all postinstall:*",\n        "postinstall:components-assets": "cpy \\"node_modules/@public-ui/components/assets/**/*\\" public/assets --dot",\n        "postinstall:themes-assets": "cpy \\"node_modules/@public-ui/themes/assets/**/*\\" public/assets --dot",\n    },\n    "devDependencies": {\n        "cpy-cli": "^4.2.0",\n        "npm-run-all": "^4.1.5",\n        \u2026\n    }\n'))),(0,l.kt)("li",{parentName:"ul"},"Then do a ",(0,l.kt)("inlineCode",{parentName:"li"},"npm i")," (",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm i"),") to automatically copy all assets to the ",(0,l.kt)("inlineCode",{parentName:"li"},"public/assets")," folder."),(0,l.kt)("li",{parentName:"ul"},"So that the assets do not have to be checked in, they can be excluded in the ",(0,l.kt)("inlineCode",{parentName:"li"},".gitignore")," file.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-gitignore"},"# .gitignore\n/public/assets/bundes/\n/public/assets/codicons/\n/public/assets/fontawesome-free/\n/public/assets/icofont/\n/public/assets/kreon/\n/public/assets/material-icons/\n/public/assets/material-symbols/\n/public/assets/noto-sans/\n/public/assets/roboto/\n/public/assets/tabler-icons/\n/public/assets/kolibri.ico\n"))),(0,l.kt)("li",{parentName:"ul"},"More icon fonts have been used in themes:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Microsoft Codicons"),(0,l.kt)("li",{parentName:"ul"},"Google Material Icons"),(0,l.kt)("li",{parentName:"ul"},"Google Material Symbols"),(0,l.kt)("li",{parentName:"ul"},"Tabler Icons"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Refactorings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We refactored a few components to extend functionality and improve maintainability.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Accordions"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The header of the accordion is now implemented using KoliBri heading, button and span."),(0,l.kt)("li",{parentName:"ul"},"Accordions can now be opened and closed with animation."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Alert"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The construction of the alerts has been revised to allow full flexibility for the design."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Heading")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The heading component was provided with an expert slot."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Inputs, Select and Textarea",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The construction of all input fields has been revised to improve designability and maintainability."))),(0,l.kt)("li",{parentName:"ul"},"Nav",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Expandable submenus now have a separate expand button. In this way, the actual menu item can be used independently of the opening and closing."),(0,l.kt)("li",{parentName:"ul"},"Menu items can now be links, buttons or plain text."))),(0,l.kt)("li",{parentName:"ul"},"Table\nPagination is now always at the top of the DOM to allow faster navigation for blind users. For sighted users, the pagination can be displayed either above or below the table via the theming."),(0,l.kt)("li",{parentName:"ul"},"Tabs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The tabs now use the KoliBri button component."))),(0,l.kt)("li",{parentName:"ul"},"Tooltip"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The tooltip is only intended for internal use in KoliBri components. To improve the designability, the tooltip is now provided without a shadow root. If the component is used outside of KoliBri, the styling must be added to the CSS styling of the project (website, app)."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"All relevant themes have been revised with regard to refactorings"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Adapter"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Added new adapter for Angular 16"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KoliBri CLI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Templates",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The templates have been revised and updated."),(0,l.kt)("li",{parentName:"ul"},"Angular template updated to version 16"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Expert slot"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The Expert slot can be used to paste any HTML instead of the text label at your own risk.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When introducing an expert slot, the property ",(0,l.kt)("inlineCode",{parentName:"p"},"_label")," usually becomes mandatory. Either the label contains a text that is then displayed without a slot. Or it is empty and the Expert slot is activated."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-heading _label="Inhalt einer H4-\xdcberschrift" _level="4"></kol-heading>\n<kol-heading _label="" _level="4">\n    <span slot="expert"> Inhalt einer H4-\xdcberschrift \u2026 </span>\n</kol-heading>\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Heading: The heading now allows you to insert any content in expert mode. The required property ",(0,l.kt)("inlineCode",{parentName:"p"},"_label")," was introduced for this purpose. Leaving the property empty (",(0,l.kt)("inlineCode",{parentName:"p"},'_label=""'),") activates the expert slot.")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Theming"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Basic styling: We have reduced the CSS on the components to the essentials. The styling primarily only contains layout definitions without colors, distances and tokens. This makes creating your own themes much easier."),(0,l.kt)("li",{parentName:"ul"},"All of our themes have been adapted to the new basic styling definitions and have been significantly simplified as a result."),(0,l.kt)("li",{parentName:"ul"},"New themes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Theme of the European Commission"),(0,l.kt)("li",{parentName:"ul"},"European Union theme"),(0,l.kt)("li",{parentName:"ul"},"Theme for the new version of the Customs Design System (v2)"),(0,l.kt)("li",{parentName:"ul"},"Theme of the federal style guide (federal government)"),(0,l.kt)("li",{parentName:"ul"},"Theme of the Federal Central Tax Office (WIP)"),(0,l.kt)("li",{parentName:"ul"},"Theme of the Free State of Thuringia (for demo purposes)"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Documentation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Code examples",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"There is an example application (",(0,l.kt)(i.Nv,{_href:"/sample-react/#/handout",_label:"Sample-App",_target:"samples",mdxType:"KolLink"}),") with numerous code examples."),(0,l.kt)("li",{parentName:"ul"},"Code samples have been expanded and updated"),(0,l.kt)("li",{parentName:"ul"},"Example application can be checked out and started locally (is in the KoliBri repository)."),(0,l.kt)("li",{parentName:"ul"},"Code examples are now displayed in the documentation."),(0,l.kt)("li",{parentName:"ul"},"Code Examples includes a handout view for theme presentations."))),(0,l.kt)("li",{parentName:"ul"},"Texts",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The texts have been revised and updated."),(0,l.kt)("li",{parentName:"ul"},"The texts have been translated into English."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Live Editor (beta): All components can now be reconfigured live. The changes are displayed directly on the component in the viewer next to it.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Functionalities"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The link now allows specifying a filename for the download link."),(0,l.kt)("li",{parentName:"ul"},"The progress can now also display the progress as readable text and have a label.")))))}d.isMDXComponent=!0}}]);