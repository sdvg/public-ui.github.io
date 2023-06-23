"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9715],{17942:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(50959);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:l,r[1]=a;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var o=n(15882),l=(n(50959),n(17942)),i=n(17520);const r={},a="Designer",s={unversionedId:"concepts/styling/designer",id:"concepts/styling/designer",title:"Designer",description:"Click here to open the designer in a new browser window.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/05-styling/35-designer.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/designer",permalink:"/en/docs/concepts/styling/designer",draft:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Theming",permalink:"/en/docs/concepts/styling/theming"},next:{title:"Scss",permalink:"/en/docs/concepts/styling/scss"}},c={},h=[{value:"Global CSS",id:"global-css",level:2},{value:"Structure",id:"structure",level:2},{value:"Top left: Theme",id:"top-left-theme",level:3},{value:"Center left: Editor",id:"center-left-editor",level:3},{value:"Top right: Componoents",id:"top-right-componoents",level:3},{value:"Top center: Preview",id:"top-center-preview",level:3},{value:"Bottom: Import / Export / Reset",id:"bottom-import--export--reset",level:3},{value:"Interdependencies of the components",id:"interdependencies-of-the-components",level:2}],p={toc:h},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"designer"},"Designer"),(0,l.kt)("div",{className:"grid grid-cols-2"},(0,l.kt)(i.Gc,{_headline:"Create own theme",_level:2,mdxType:"KolCard"},(0,l.kt)(i.Nv,{slot:"content",_useCase:"nav",_href:"/designer",_target:"designer",mdxType:"KolLink"},(0,l.kt)("div",{className:"flex gap-4 py-2"},(0,l.kt)(i.Jl,{className:"homepage",_icon:"codicon codicon-paintcan",mdxType:"KolIcon"}),(0,l.kt)("span",null,"Click here to open the designer in a new browser window."))))),(0,l.kt)("br",null),(0,l.kt)("p",null,"Thanks to KoliBri Designer, users can quickly develop their own style for the KoliBri library. The effects of their own CSS instructions are visible directly on the component.",(0,l.kt)("br",null),"\nThe finished styles can then be downloaded as a theme and inserted into the user's own project."),(0,l.kt)("h2",{id:"global-css"},"Global CSS"),(0,l.kt)("p",null,"To ensure that all HTML elements behave optimally when using assistive tools and at high zoom levels, specific CSS styles must be set. For this purpose, the following CSS are initially set for all components and can be overridden by the theme-specific CSS if required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"* {\n    font-size: inherit; /* allows proportional scaling */\n    hyphens: auto; /* activates the language-specific hyphenation */\n    letter-spacing: inherit; /* allows changing the letter spacing */\n    word-break: break-word; /* enables word wrapping */\n    word-spacing: inherit; /* allows changing the word spacing */\n}\n")),(0,l.kt)("h2",{id:"structure"},"Structure"),(0,l.kt)("p",null,"The KoliBri Designer is divided into three sections."),(0,l.kt)("h3",{id:"top-left-theme"},"Top left: Theme"),(0,l.kt)("p",null,"The custom theme can be built either based on a standard theme (default) or directly with an empty theme. By default, a standard ",(0,l.kt)("b",null,"theme")," is selected as the basis in the Theme field by the ",(0,l.kt)("i",null,"\u201cdefault\u201d")," entry. Here, for illustration purposes, some CSS statements are inserted into the editor area, the effect of which is applied to the default ",(0,l.kt)("b",null,"Button")," component as an example.",(0,l.kt)("br",null),"\nIf you enter your value for the theme to be created in the ",(0,l.kt)("b",null,"Theme")," field, the KoliBri Designer resets all styling instructions, and you can start with an empty theme."),(0,l.kt)("p",null,(0,l.kt)("kol-indented-text",null,"Please note that some KoliBri components are naturally displayed either not at all, unfamiliar or with browser default layout, when selecting an empty default theme.")),(0,l.kt)("h3",{id:"center-left-editor"},"Center left: Editor"),(0,l.kt)("p",null,"For easy input of own CSS instructions, the KoliBri Designer has a ",(0,l.kt)("i",null,"VS Code Editor"),". Instructions that users write in the editor area are automatically taken over after pressing the key combination ",(0,l.kt)("code",null,"Ctrl + S")," or ",(0,l.kt)("code",null,"Command + S")," and the effects are transferred to the currently selected component."),(0,l.kt)("h3",{id:"top-right-componoents"},"Top right: Componoents"),(0,l.kt)("p",null,"Via the selection box ",(0,l.kt)("b",null,"Components"),", the KoliBri component to be edited can be selected. All KoliBri components are available, that have a visual output. Not included are purely functional components, such as Modal, InputLeandUpAdapter or SkipNav.",(0,l.kt)("br",null),"\nAfter selecting a component, the KoliBri designer loads a typical basic output of the component. For components that have different variants, such as Button, all variants are output."),(0,l.kt)("p",null,(0,l.kt)("kol-indented-text",null,"Kindly note that some KoliBri components have dependencies on each other. For example, the ",(0,l.kt)("b",null,"LinkGroup")," component consists of the Link component, IconIcofont component and Tooltip component. It is recommended to start with the ",(0,l.kt)("i",null,"smallest")," component first and then switch to the actual main component. A detailed description follows below.")),(0,l.kt)("h3",{id:"top-center-preview"},"Top center: Preview"),(0,l.kt)("p",null,"This area displays the currently loaded component with a typical output. Depending on the selection of the default theme, the component either presents itself in the default browser layout or already has styling features that come from the default theme."),(0,l.kt)("h3",{id:"bottom-import--export--reset"},"Bottom: Import / Export / Reset"),(0,l.kt)("p",null,"The KoliBri Designer offers different possibilities to save your settings and load them again for further editing."),(0,l.kt)("p",null,"The button ",(0,l.kt)("b",null,"\u201cCreate Theme\u201d")," summarizes your CSS instructions as a standalone theme and makes them available in the editor for viewing and copying.",(0,l.kt)("br",null),"\nThe ",(0,l.kt)("b",null,"\u201cDownload Theme\u201d")," button allows you to save your theme as a JSON file.",(0,l.kt)("br",null),"\nTo undo all changes, click the ",(0,l.kt)("b",null,"\u201cDiscard all changes\u201d")," button. The KoliBri Designer will be reset to the default theme ",(0,l.kt)("b",null,"\u201cdefault\u201d"),".",(0,l.kt)("br",null),"\nWith the upload field ",(0,l.kt)("b",null,"\u201cLoad Theme\u201d")," an already created theme file (JSON file) can be loaded into the KoliBri Designer for editing again."),(0,l.kt)("h2",{id:"interdependencies-of-the-components"},"Interdependencies of the components"),(0,l.kt)("p",null,"Most KoliBri components are technically made up of a collection of other KoliBri components, which together then make up a new KoliBri component and have similar, but broader, fields of application.",(0,l.kt)("br",null),"\nKnowing the technical construction of the component you are working on is important for the correct sequence when creating your own theme."),(0,l.kt)("p",null,(0,l.kt)("kol-indented-text",null,"The dependencies of the KoliBri components on each other are described in detail by a diagram in the Storybook, in the section Description of the respective component.")),(0,l.kt)("p",null,(0,l.kt)("b",null,"Example:")),(0,l.kt)("p",null,(0,l.kt)("kol-link-group",{_heading:"Headline",_links:"[{'_label':'Link 1', '_icon':'icofont-home','_href':'test'},{'_label':'Link 2', '_icon':'icofont-phone','_href':'test'}]","_list-style-type":"none"})),(0,l.kt)("p",null,"The LinkGroup used in this example consists of the other KoliBri components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-heading"),(0,l.kt)("li",{parentName:"ul"},"kol-link \u2192 also uses kol-tooltip and kol-badge"),(0,l.kt)("li",{parentName:"ul"},"kol-icon-icofont")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First, set the CSS instructions for the LinkGroup heading. The heading consists of the KoliBri component \u201ckol-heading\u201d. Therefore, change in the selection field ",(0,l.kt)("b",null,"Components")," to the component ",(0,l.kt)("b",null,"kol-heading"),". Adjust here in the editor, e.g. for h1 the font color. This setting now applies to all components in which the kol-heading component is used. The font color has changed not only for the kol-heading component itself, but also for all components that use ",(0,l.kt)("b",null,"kol-heading"),". Among others, the ",(0,l.kt)("b",null,"kol-link-group")," used in the example.",(0,l.kt)("br",null),"\nSwitch back to the ",(0,l.kt)("b",null,"kol-link-group")," component in the ",(0,l.kt)("b",null,"Components")," selection box. Again, the font color of the heading has changed according to the CSS statement of the ",(0,l.kt)("b",null,"kol-eading")," component."),(0,l.kt)("li",{parentName:"ol"},"Now change the font color of the links. In the ",(0,l.kt)("b",null,"Components")," selection box, switch to ",(0,l.kt)("b",null,"kol-link"),". In the editor, change the Color value for ",(0,l.kt)("b",null,"a"),". Switch back to the ",(0,l.kt)("b",null,"kol-link-group")," component. The font color of the individual links has also changed."),(0,l.kt)("li",{parentName:"ol"},"If you try to change the previously mentioned settings directly in the ",(0,l.kt)("b",null,"kol-link-group")," component, you will not see any changes. However, it would be possible here, for example, to change the background color of the entire ",(0,l.kt)("b",null,"kol-link-group")," component."),(0,l.kt)("li",{parentName:"ol"},"Note that you can only style components that are inside a shadow DOM via the KoliBri designer. For the ",(0,l.kt)("b",null,"kol-link-group")," example, it would not be possible to style the ",(0,l.kt)("b",null,(0,l.kt)("kol-link-group",null))," element itself because it is not inside a shadow DOM."),(0,l.kt)("li",{parentName:"ol"},"Note that changes in KoliBri Designer are possible only for those KoliBri components that have a shadow DOM during rendering. This is not the case, for example, with the ",(0,l.kt)("b",null,"kol-icon-icofont")," or ",(0,l.kt)("b",null,"kol-icon-fontawesome")," component.")))}d.isMDXComponent=!0}}]);