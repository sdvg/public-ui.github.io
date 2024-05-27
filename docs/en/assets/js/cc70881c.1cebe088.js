"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[41799],{92356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=n(76776),s=n(108),o=n(51376);const a={title:"FAQ",description:"Frequently asked questions about KoliBri",tags:["Architecture","arc42","Faq","Concept","License","Legal"]},r="Frequently Asked Questions (FAQ)",c={id:"faq",title:"FAQ",description:"Frequently asked questions about KoliBri",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03-faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/en/docs/next/faq",draft:!1,unlisted:!1,tags:[{label:"Architecture",permalink:"/en/docs/next/tags/architecture"},{label:"arc42",permalink:"/en/docs/next/tags/arc-42"},{label:"Faq",permalink:"/en/docs/next/tags/faq"},{label:"Concept",permalink:"/en/docs/next/tags/concept"},{label:"License",permalink:"/en/docs/next/tags/license"},{label:"Legal",permalink:"/en/docs/next/tags/legal"}],version:"current",sidebarPosition:3,frontMatter:{title:"FAQ",description:"Frequently asked questions about KoliBri",tags:["Architecture","arc42","Faq","Concept","License","Legal"]},sidebar:"tutorialSidebar",previous:{title:"Manifest",permalink:"/en/docs/next/manifest"},next:{title:"First steps",permalink:"/en/docs/next/get-started/first-steps"}},l={},h=[{value:"General",id:"general",level:2},{value:"Theming and styling",id:"theming-and-styling",level:2},{value:"Technical",id:"technical",level:2},{value:"Any questions?",id:"any-questions",level:2}];function d(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"frequently-asked-questions-faq",children:"Frequently Asked Questions (FAQ)"}),"\n",(0,i.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"What is so special about KoliBri?"}),(0,i.jsx)("br",{}),"\nKoliBri offers granular, easily reusable HTML compositions that are semantically accessible and decoupled from the design. Using the basic styling, which is limited exclusively to the layout, the components can be easily adapted to your own corporate design."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How \u200b\u200bdo you save with KoliBri?"}),(0,i.jsx)("br",{}),"\nWebsites/applications are implemented with different HTML elements and variants of elements. Each of these HTML structures must be semantically accessible and marked. KoliBri focuses on exactly such HTML structures and their variants and summarizes them in clearly defined components. The development teams that later reuse KoliBri can now use these components and adjust parameters to display different variants without having to think about the correctness of the HTML structure within the component. You are relieved and can focus more on the implementation of the actual technicality.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How \u200b\u200bcan you not explain KoliBri technically?"}),(0,i.jsx)("br",{}),"\nKoliBri is for accessibility like a Thermomix\xae is for cooking. It makes cooking easier because you can simply choose a suitable dish (component) without having to know how to cook it exactly. The Thermomix\xae (KoliBri) guides you through the cooking process (parameters for different variants) and ensures that the right dish (accessible user interface) comes out at the end."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How \u200b\u200bdependent will I be if I use KoliBri?"}),(0,i.jsx)("br",{}),"\nIf you compare KoliBri with a LEGO\xae set, you can simply mix the building blocks it contains with other building blocks to depict the overall application. You enter into a partial dependency (logical) in order to receive advantages in ensuring accessibility in return."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How \u200b\u200bcan I influence a component if necessary?"}),(0,i.jsx)("br",{}),"\nKoliBri components are very restrictive to ensure accessibility and are reused through composition. Adjustments from the outside can only be made through wrapping or the Expert slot. The styling is possible via the theme concept through configuration."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"What do I do if a component or feature is missing?"}),(0,i.jsx)("br",{}),"\nNew technically neutral components or functions are to be implemented within KoliBri. Participation in this is expressly desired and will speed up implementation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"What does the licensing say?"}),(0,i.jsx)("br",{}),"\nThe EUPL allows unrestricted use of the artifacts, which can be customized in a configurative way to suit one's needs.\nOn the other hand, it forces the disclosure of changes made when copying source code from KoliBri (Copy-Left).\nSee the ",(0,i.jsx)(o.GQ,{_href:"/docs/license",_label:"License"})," for more information."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"theming-and-styling",children:"Theming and styling"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Who creates a theme if it doesn't already exist?"}),(0,i.jsx)("br",{}),"\nThe current situation is that the ITZBund has implemented and maintains numerous themes of its customer authorities and example themes. However, the theme concept provides that themes can be created and maintained independently. We are happy to answer any questions and can provide selective support. As soon as your own theme has been created, an independent accessibility test is necessary to ensure, for example, the contrast ratios of the color values. Themes that have been created and tested can now be used again in other projects."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How \u200b\u200bdoes theming work?"}),(0,i.jsx)("br",{}),"\nTypically, web components are created with fixed styling. KoliBri separates the semantically accessible components from the styling and provides a register method for combining them. Since the web components must always be registered (defined) in the browser, there is the option here of loading the components with a defined theme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"How \u200b\u200bto create your own theme?"}),(0,i.jsx)("br",{}),"\nWe are always working to further simplify the creation and maintenance of themes. For example, the basic styling (pure layout) of the components from version 1.5 is used for this. You can set it up simply by creating a theme definition, e.g. with your own theme project (NPM package) using the ",(0,i.jsx)(o.GQ,{_href:"https://github.com/public-ui/kolibri/blob/45726c50d7f28c9c595442b2241582816eca5670/packages /create-kolibri/templates/kolibri-library/packages/components/src/global/script.ts#L8",_label:"TS file",_target:"github"}),". Our ",(0,i.jsx)(o.GQ,{_href:"/designer/",_label:" Theme Designer",_target:"designer"})," is also helpful for creating and maintaining themes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Why does CSS need to be managed in JavaScript?"}),(0,i.jsx)("br",{}),"\nKoliBri components are not styled solely using embedded CSS or the use of CSS frameworks (such as Bootstrap, Material-UI, Tailwind CSS, etc.), but\nabout the technical setting of CSS on the component. This has the advantage that the components are independent of the external CSS. Robustness is an architectural quality objective. It is reflected in the fact that only the component itself decides on its styling."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Why do you need the scheme?"}),(0,i.jsx)("br",{}),"\nKoliBri is based on a sophisticated ",(0,i.jsx)(o.GQ,{_href:"/docs/concepts/architecture",_label:"Architecture"}),". For example, the small schema package (@public-ui/schema) is used to define the tag names and language keys of the KoliBri components independently of the concrete implementation. This enables completely detached work with auto-completion when creating the theme, but without needing the components and their dependencies. This has advantages in some integration scenarios, such as static pages or content management systems (CMS)."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"technical",children:"Technical"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Why can KoliBri components really be accessible?"}),(0,i.jsx)("br",{}),"\nThe KoliBri components are designed in terms of software architecture in such a way that they can only be instrumented via properties and not via their own HTML that can be entered. This means that the components can only be controlled via the API (properties). This is a quality feature because the components cannot be manipulated from the outside. The components are very restrictive and can therefore always be accessible.",(0,i.jsx)("br",{}),"\nIn order to be able to break out of this restriction, there is the ",(0,i.jsx)(o.GQ,{_href:"/docs/concepts/expert-slot",_label:"Expert-Slot"}),", which makes it possible to embed your own HTML in the component. Accessibility via the expert slot is in the hands of the expert (developer) and should only be used in exceptional cases."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Why are component properties sometimes named differently from HTML naming?"}),(0,i.jsx)("br",{}),"\nIn order to keep KoliBri easy to learn, the HTML naming is usually used. But even the HTML standard is not uniform in its naming across several elements (components). And that is why we have chosen uniform names for similar properties in KoliBri. See concept ",(0,i.jsx)(o.GQ,{_href:"/docs/concepts/properties",_label:"Properties"})," for more information."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"any-questions",children:"Any questions?"}),"\n",(0,i.jsxs)(t.p,{children:["If you still have questions, please send us an email to ",(0,i.jsx)(o.GQ,{_href:"mailto:kolibri@itzbund.de",_label:"kolibri@itzbund.de",_target:"email",_icons:"codicon codicon-mail "}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},108:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>a});var i=n(80924);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);