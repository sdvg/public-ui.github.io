"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[60038],{17942:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?o.createElement(u,r(r({ref:t},m),{},{components:n})):o.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(97605),a=(n(50959),n(17942));const i={},r="Architecture",l={unversionedId:"concepts/architecture",id:"version-1.7/concepts/architecture",title:"Architecture",description:"Develop and change",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/01-architecture.md",sourceDirName:"20-concepts",slug:"/concepts/architecture",permalink:"/en/docs/concepts/architecture",draft:!1,tags:[],version:"1.7",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playground",permalink:"/en/docs/get-started/playground"},next:{title:"Properties",permalink:"/en/docs/concepts/properties"}},s={},p=[{value:"Develop and change",id:"develop-and-change",level:2},{value:"Install all",id:"install-all",level:3},{value:"Clear all",id:"clear-all",level:3},{value:"Web Component module (library)",id:"web-component-module-library",level:3},{value:"Modularization",id:"modularization",level:2},{value:"Simple",id:"simple",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Design system / style guides (UX)",id:"design-system--style-guides-ux",level:2},{value:"Where is the design system / style guide?",id:"where-is-the-design-system--style-guide",level:3},{value:"Why?",id:"why",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("h2",{id:"develop-and-change"},"Develop and change"),(0,a.kt)("p",null,"For development, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," is used as package manager with ",(0,a.kt)("inlineCode",{parentName:"p"},"lerna")," as monorepo manager."),(0,a.kt)("h3",{id:"install-all"},"Install all"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm i")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Due to the non-public KoliBri packages, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm i")," command and the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm :publish")," command must be run alternately until all packages are once in the local registry (verdaccio) (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm i")," runs completely through).")),(0,a.kt)("p",null,"Once everything is installed, the individual modules can be modified and built."),(0,a.kt)("p",null,"The modules ",(0,a.kt)("inlineCode",{parentName:"p"},"library")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"storybook")," in particular can be accessed and displayed in the browser using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,a.kt)("h3",{id:"clear-all"},"Clear all"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm clean")),(0,a.kt)("h3",{id:"web-component-module-library"},"Web Component module (library)"),(0,a.kt)("p",null,"The Web Component module is located in the package directory (",(0,a.kt)("inlineCode",{parentName:"p"},"packages/library"),"). After the general installation, the overview page of all components can be started with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start"),". This is also used to build or modify components."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm start")),(0,a.kt)("h2",{id:"modularization"},"Modularization"),(0,a.kt)("p",null,"The aim of modularization is to limit the technical scope of each module to its core task and thus also to simplify maintenance and further development."),(0,a.kt)("p",null,"In the core are functionalities which proved with the time for helpful with the conversion of components and in principle in each Web Component Lib potentially to use could."),(0,a.kt)("p",null,"The schema, the components and Themes represent a concrete component library. Of it there could be several, which build onion-like from the inside (KoliBri) outward on each other (see below)."),(0,a.kt)("p",null,"This practice promotes the emergence of new basic components from the subject-specific projects - which can be adopted and shared with others through a process in KoliBri after checking the qualities and standard."),(0,a.kt)("h3",{id:"simple"},"Simple"),(0,a.kt)("p",null,"The following illustration shows the basic structure of a component library (UI-Lib):"),(0,a.kt)("mermaid",{value:"  flowchart BT\n    subgraph UI-Lib\n      Components --\x3e Schema\n      Components .-> Themes\n      Themes --\x3e Schema\n    end\n    Schema --\x3e Core\n    FW-Adapter --\x3e Components\n    App/Storybook .-> Components\n    App/Storybook .-> FW-Adapter\n    App/Storybook --\x3e Themes"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Module"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Core"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("em",{parentName:"td"},"Core")," module contains the overall architecture (Generic Types) and useful functionalities (Utils) for Web Components.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UI-Lib"),(0,a.kt)("td",{parentName:"tr",align:null},"The component library module contains its schema and the components and theme(s) associated with the schema.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("em",{parentName:"td"},"Schema")," module is used for typed assurance that independently created themes are always compatible with the schema-specific components. ",(0,a.kt)("strong",{parentName:"td"},"Note"),": It seems obvious to the simplicity of the modules ",(0,a.kt)("em",{parentName:"td"},"Schema")," and ",(0,a.kt)("em",{parentName:"td"},"Components")," together. However, since the ",(0,a.kt)("em",{parentName:"td"},"Themes")," (then dependent on the ",(0,a.kt)("em",{parentName:"td"},"Components")," module) are helpful in implementing the components, this would lead to a technical dependency problem (loop).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Components"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("em",{parentName:"td"},"Components")," module contains the implementation of the Web Components.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"App"),(0,a.kt)("td",{parentName:"tr",align:null},"The app module represents a concrete application implementation based on the component library (UI lib).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Storybook"),(0,a.kt)("td",{parentName:"tr",align:null},"The Storybook module serves as documentation and sample presentation for all stakeholders.")))),(0,a.kt)("h3",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"In the extended representation of the modularization it becomes visible, how by the decoupling \u201conion-like\u201d more specific becoming component libraries can be strung together under an overall architecture."),(0,a.kt)("mermaid",{value:"  flowchart BT\n    subgraph CustomLib\n      CustomLibComponents --\x3e CustomLibSchema\n      CustomLibThemes --\x3e CustomLibSchema\n      CustomLibComponents .-> CustomLibThemes\n    end\n    subgraph OtherCustomLib\n      OtherCustomLibComponents --\x3eOtherCustomLibSchema\n      OtherCustomLibThemes --\x3e OtherCustomLibSchema\n      OtherCustomLibComponents .-> OtherCustomLibThemes\n    end\n    subgraph KoliBri\n      KoliBriComponents --\x3e KoliBriSchema\n      KoliBriThemes --\x3e KoliBriSchema\n      KoliBriComponents .-> KoliBriThemes\n    end\n    subgraph Core\n      Utils\n      Types\n    end\n\tOtherCustomLibComponents -.-o CustomLibComponents\n\tCustomLibComponents -.-o KoliBriComponents\n\n    KoliBriSchema --\x3e Core\n    CustomLibSchema --\x3e Core\n    OtherCustomLibSchema --\x3e Core\n    App/Storybook --\x3e CustomLibComponents\n    App/Storybook --\x3e CustomLibThemes\n    App/Storybook --\x3e OtherCustomLibComponents\n    App/Storybook --\x3e OtherCustomLibThemes\n    App/Storybook --\x3e KoliBriComponents\n    App/Storybook --\x3e KoliBriThemes"}),(0,a.kt)("h2",{id:"design-system--style-guides-ux"},"Design system / style guides (UX)"),(0,a.kt)("p",null,"It is important to understand that within a component library (UI-Lib) a uniform operating behavior applies to the components, since these are implemented only once concretely and according to the requirements."),(0,a.kt)("p",null,"Within a component library, however, the possibility exists of creating several themes (styles). The theme is defined for this component-specific and loaded later with the components in pairs together."),(0,a.kt)("h3",{id:"where-is-the-design-system--style-guide"},"Where is the design system / style guide?"),(0,a.kt)("p",null,"A theme represents a concrete combination of the components and a theme. This combination represents a concrete design system or style guide."),(0,a.kt)("mermaid",{value:"  flowchart LR\n    subgraph Design System / Styleguide\n\t\t\t\tdirection LR\n      Components --- Theme\n    end"}),(0,a.kt)("h3",{id:"why"},"Why?"),(0,a.kt)("p",null,"The starting point of the explanation is the fact that HTML and CSS are already decoupled according to their specification."),(0,a.kt)("p",null,"Within a component library, the HTML is defined by the component implementation and the CSS through the style information."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why the modular separation then?")),(0,a.kt)("p",null,"The claim of the total architecture and the quality criteria connected with it aim at the fact that the basic components are implemented semantically only once, tested and accepted."),(0,a.kt)("p",null,"Here, the aim is to achieve the best possible structure (HTML) of the components between minimalism and flexibility and full compliance with HTML semantics. This premise pays into optimal compatibility with all devices and assistive technologies."),(0,a.kt)("p",null,"Concluding from this premise, it is clear that not all different aesthetic ideas and operating concepts from design systems and style guides can be implemented."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It often happens that initial design systems and style guides had to be adapted later in the realization due to accessibility requirements, so that in the end they come very close again in many points that were seen critically at the beginning.")),(0,a.kt)("p",null,"In the end, the web components are displayed on the devices of the users through a technical realization. The technology has, however, with all creativity borders and gaps. To fathom these additionally under all requirements, to delimit and to find solutions is particularly complex."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In the end, the aim is to standardize at least all complex basic components that represent a hurdle in terms of accessibility and to offer the best possible designability in the process.")))}d.isMDXComponent=!0}}]);