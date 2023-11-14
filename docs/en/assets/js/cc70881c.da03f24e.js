"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[82297],{17942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return n?i.createElement(d,r(r({ref:t},u),{},{components:n})):i.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(97605),a=(n(50959),n(17942)),o=n(72526);const r={title:"FAQ",description:"Frequently asked questions about KoliBri",tags:["Architecture","arc42","Faq","Concept","License","Legal"]},s="Frequently Asked Questions (FAQ)",l={unversionedId:"faq",id:"faq",title:"FAQ",description:"Frequently asked questions about KoliBri",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03-faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/en/docs/next/faq",draft:!1,tags:[{label:"Architecture",permalink:"/en/docs/next/tags/architecture"},{label:"arc42",permalink:"/en/docs/next/tags/arc-42"},{label:"Faq",permalink:"/en/docs/next/tags/faq"},{label:"Concept",permalink:"/en/docs/next/tags/concept"},{label:"License",permalink:"/en/docs/next/tags/license"},{label:"Legal",permalink:"/en/docs/next/tags/legal"}],version:"current",sidebarPosition:3,frontMatter:{title:"FAQ",description:"Frequently asked questions about KoliBri",tags:["Architecture","arc42","Faq","Concept","License","Legal"]},sidebar:"tutorialSidebar",previous:{title:"Manifest",permalink:"/en/docs/next/manifest"},next:{title:"First steps",permalink:"/en/docs/next/get-started/first-steps"}},c={},u=[{value:"General",id:"general",level:2},{value:"Theming and styling",id:"theming-and-styling",level:2},{value:"Technical",id:"technical",level:2},{value:"Any questions?",id:"any-questions",level:2}],p={toc:u},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"What is so special about KoliBri?"),(0,a.kt)("br",null),"\nKoliBri offers granular, easily reusable HTML compositions that are semantically accessible and decoupled from the design. Using the basic styling, which is limited exclusively to the layout, the components can be easily adapted to your own corporate design."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How \u200b\u200bdo you save with KoliBri?"),(0,a.kt)("br",null),"\nWebsites/applications are implemented with different HTML elements and variants of elements. Each of these HTML structures must be semantically accessible and marked. KoliBri focuses on exactly such HTML structures and their variants and summarizes them in clearly defined components. The development teams that later reuse KoliBri can now use these components and adjust parameters to display different variants without having to think about the correctness of the HTML structure within the component. You are relieved and can focus more on the implementation of the actual technicality.",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How \u200b\u200bcan you not explain KoliBri technically?"),(0,a.kt)("br",null),"\nKoliBri is for accessibility like a Thermomix\xae is for cooking. It makes cooking easier because you can simply choose a suitable dish (component) without having to know how to cook it exactly. The Thermomix\xae (KoliBri) guides you through the cooking process (parameters for different variants) and ensures that the right dish (accessible user interface) comes out at the end."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How \u200b\u200bdependent will I be if I use KoliBri?"),(0,a.kt)("br",null),"\nIf you compare KoliBri with a LEGO\xae set, you can simply mix the building blocks it contains with other building blocks to depict the overall application. You enter into a partial dependency (logical) in order to receive advantages in ensuring accessibility in return."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How \u200b\u200bcan I influence a component if necessary?"),(0,a.kt)("br",null),"\nKoliBri components are very restrictive to ensure accessibility and are reused through composition. Adjustments from the outside can only be made through wrapping or the Expert slot. The styling is possible via the theme concept through configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"What do I do if a component or feature is missing?"),(0,a.kt)("br",null),"\nNew technically neutral components or functions are to be implemented within KoliBri. Participation in this is expressly desired and will speed up implementation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"What does the licensing say?"),(0,a.kt)("br",null),"\nThe EUPL allows unrestricted use of the artifacts, which can be customized in a configurative way to suit one's needs.\nOn the other hand, it forces the disclosure of changes made when copying source code from KoliBri (Copy-Left).\nSee the ",(0,a.kt)(o.Nv,{_href:"/docs/license",_label:"License",mdxType:"KolLink"})," for more information.")),(0,a.kt)("h2",{id:"theming-and-styling"},"Theming and styling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Who creates a theme if it doesn't already exist?"),(0,a.kt)("br",null),"\nThe current situation is that the ITZBund has implemented and maintains numerous themes of its customer authorities and example themes. However, the theme concept provides that themes can be created and maintained independently. We are happy to answer any questions and can provide selective support. As soon as your own theme has been created, an independent accessibility test is necessary to ensure, for example, the contrast ratios of the color values. Themes that have been created and tested can now be used again in other projects."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How \u200b\u200bdoes theming work?"),(0,a.kt)("br",null),"\nTypically, web components are created with fixed styling. KoliBri separates the semantically accessible components from the styling and provides a register method for combining them. Since the web components must always be registered (defined) in the browser, there is the option here of loading the components with a defined theme."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How \u200b\u200bto create your own theme?"),(0,a.kt)("br",null),"\nWe are always working to further simplify the creation and maintenance of themes. For example, the basic styling (pure layout) of the components from version 1.5 is used for this. You can set it up simply by creating a theme definition, e.g. with your own theme project (NPM package) using the ",(0,a.kt)(o.Nv,{_href:"https://github.com/public-ui/kolibri/blob/45726c50d7f28c9c595442b2241582816eca5670/packages /create-kolibri/templates/kolibri-library/packages/components/src/global/script.ts#L8",_label:"TS file",_target:"github",mdxType:"KolLink"}),". Our ",(0,a.kt)(o.Nv,{_href:"/designer/",_label:" Theme Designer",_target:"designer",mdxType:"KolLink"})," is also helpful for creating and maintaining themes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Why does CSS need to be managed in JavaScript?"),(0,a.kt)("br",null),"\nKoliBri components are not styled solely using embedded CSS or the use of CSS frameworks (such as Bootstrap, Material-UI, Tailwind CSS, etc.), but\nabout the technical setting of CSS on the component. This has the advantage that the components are independent of the external CSS. Robustness is an architectural quality objective. It is reflected in the fact that only the component itself decides on its styling."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Why do you need the scheme?"),(0,a.kt)("br",null),"\nKoliBri is based on a sophisticated ",(0,a.kt)(o.Nv,{_href:"/docs/concepts/architecture",_label:"Architecture",mdxType:"KolLink"}),". For example, the small schema package (@public-ui/schema) is used to define the tag names and language keys of the KoliBri components independently of the concrete implementation. This enables completely detached work with auto-completion when creating the theme, but without needing the components and their dependencies. This has advantages in some integration scenarios, such as static pages or content management systems (CMS).")),(0,a.kt)("h2",{id:"technical"},"Technical"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Why can KoliBri components really be accessible?"),(0,a.kt)("br",null),"\nThe KoliBri components are designed in terms of software architecture in such a way that they can only be instrumented via properties and not via their own HTML that can be entered. This means that the components can only be controlled via the API (properties). This is a quality feature because the components cannot be manipulated from the outside. The components are very restrictive and can therefore always be accessible.",(0,a.kt)("br",null),"\nIn order to be able to break out of this restriction, there is the ",(0,a.kt)(o.Nv,{_href:"/docs/concepts/expert-slot",_label:"Expert-Slot",mdxType:"KolLink"}),", which makes it possible to embed your own HTML in the component. Accessibility via the expert slot is in the hands of the expert (developer) and should only be used in exceptional cases."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Why are component properties sometimes named differently from HTML naming?"),(0,a.kt)("br",null),"\nIn order to keep KoliBri easy to learn, the HTML naming is usually used. But even the HTML standard is not uniform in its naming across several elements (components). And that is why we have chosen uniform names for similar properties in KoliBri. See concept ",(0,a.kt)(o.Nv,{_href:"/docs/concepts/properties",_label:"Properties",mdxType:"KolLink"})," for more information.")),(0,a.kt)("h2",{id:"any-questions"},"Any questions?"),(0,a.kt)("p",null,"If you still have questions, please send us an email to ",(0,a.kt)(o.Nv,{_href:"mailto:kolibri@itzbund.de",_label:"kolibri@itzbund.de",_target:"email",_icons:"codicon codicon-mail ",mdxType:"KolLink"}),"."))}m.isMDXComponent=!0}}]);