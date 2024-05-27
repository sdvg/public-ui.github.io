"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[81708],{38824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(76776),o=t(108);const s={},r="Architecture",a={id:"concepts/architecture",title:"Architecture",description:"Develop and change",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/01-architecture.md",sourceDirName:"20-concepts",slug:"/concepts/architecture",permalink:"/en/docs/1.7/concepts/architecture",draft:!1,unlisted:!1,tags:[],version:"1.7",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playground",permalink:"/en/docs/1.7/get-started/playground"},next:{title:"Properties",permalink:"/en/docs/1.7/concepts/properties"}},l={},c=[{value:"Develop and change",id:"develop-and-change",level:2},{value:"Install all",id:"install-all",level:3},{value:"Clear all",id:"clear-all",level:3},{value:"Web Component module (library)",id:"web-component-module-library",level:3},{value:"Modularization",id:"modularization",level:2},{value:"Simple",id:"simple",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Design system / style guides (UX)",id:"design-system--style-guides-ux",level:2},{value:"Where is the design system / style guide?",id:"where-is-the-design-system--style-guide",level:3},{value:"Why?",id:"why",level:3}];function h(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.h2,{id:"develop-and-change",children:"Develop and change"}),"\n",(0,i.jsxs)(n.p,{children:["For development, ",(0,i.jsx)(n.code,{children:"pnpm"})," is used as package manager with ",(0,i.jsx)(n.code,{children:"lerna"})," as monorepo manager."]}),"\n",(0,i.jsx)(n.h3,{id:"install-all",children:"Install all"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"pnpm i"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Due to the non-public KoliBri packages, the ",(0,i.jsx)(n.code,{children:"pnpm i"})," command and the ",(0,i.jsx)(n.code,{children:"pnpm :publish"})," command must be run alternately until all packages are once in the local registry (verdaccio) (",(0,i.jsx)(n.code,{children:"pnpm i"})," runs completely through)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once everything is installed, the individual modules can be modified and built."}),"\n",(0,i.jsxs)(n.p,{children:["The modules ",(0,i.jsx)(n.code,{children:"library"})," and ",(0,i.jsx)(n.code,{children:"storybook"})," in particular can be accessed and displayed in the browser using ",(0,i.jsx)(n.code,{children:"npm start"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"clear-all",children:"Clear all"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"pnpm clean"})}),"\n",(0,i.jsx)(n.h3,{id:"web-component-module-library",children:"Web Component module (library)"}),"\n",(0,i.jsxs)(n.p,{children:["The Web Component module is located in the package directory (",(0,i.jsx)(n.code,{children:"packages/library"}),"). After the general installation, the overview page of all components can be started with ",(0,i.jsx)(n.code,{children:"npm start"}),". This is also used to build or modify components."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"npm start"})}),"\n",(0,i.jsx)(n.h2,{id:"modularization",children:"Modularization"}),"\n",(0,i.jsx)(n.p,{children:"The aim of modularization is to limit the technical scope of each module to its core task and thus also to simplify maintenance and further development."}),"\n",(0,i.jsx)(n.p,{children:"In the core are functionalities which proved with the time for helpful with the conversion of components and in principle in each Web Component Lib potentially to use could."}),"\n",(0,i.jsx)(n.p,{children:"The schema, the components and Themes represent a concrete component library. Of it there could be several, which build onion-like from the inside (KoliBri) outward on each other (see below)."}),"\n",(0,i.jsx)(n.p,{children:"This practice promotes the emergence of new basic components from the subject-specific projects - which can be adopted and shared with others through a process in KoliBri after checking the qualities and standard."}),"\n",(0,i.jsx)(n.h3,{id:"simple",children:"Simple"}),"\n",(0,i.jsx)(n.p,{children:"The following illustration shows the basic structure of a component library (UI-Lib):"}),"\n",(0,i.jsx)(n.mermaid,{value:" flowchart BT\n subgraph UI-Lib\n Components --\x3e Schema\n Components .-> Themes\n Themes --\x3e Schema\n end\n Schema --\x3e Core\n FW-Adapter --\x3e Components\n App/Storybook .-> Components\n App/Storybook .-> FW-Adapter\n App/Storybook --\x3e Themes"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Module"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Core"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.em,{children:"Core"})," module contains the overall architecture (Generic Types) and useful functionalities (Utils) for Web Components."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UI-Lib"}),(0,i.jsx)(n.td,{children:"The component library module contains its schema and the components and theme(s) associated with the schema."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Schema"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.em,{children:"Schema"})," module is used for typed assurance that independently created themes are always compatible with the schema-specific components. ",(0,i.jsx)(n.strong,{children:"Note"}),": It seems obvious to the simplicity of the modules ",(0,i.jsx)(n.em,{children:"Schema"})," and ",(0,i.jsx)(n.em,{children:"Components"})," together. However, since the ",(0,i.jsx)(n.em,{children:"Themes"})," (then dependent on the ",(0,i.jsx)(n.em,{children:"Components"})," module) are helpful in implementing the components, this would lead to a technical dependency problem (loop)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Components"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.em,{children:"Components"})," module contains the implementation of the Web Components."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"App"}),(0,i.jsx)(n.td,{children:"The app module represents a concrete application implementation based on the component library (UI lib)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Storybook"}),(0,i.jsx)(n.td,{children:"The Storybook module serves as documentation and sample presentation for all stakeholders."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"advanced",children:"Advanced"}),"\n",(0,i.jsx)(n.p,{children:"In the extended representation of the modularization it becomes visible, how by the decoupling \u201conion-like\u201d more specific becoming component libraries can be strung together under an overall architecture."}),"\n",(0,i.jsx)(n.mermaid,{value:" flowchart BT\n subgraph CustomLib\n CustomLibComponents --\x3e CustomLibSchema\n CustomLibThemes --\x3e CustomLibSchema\n CustomLibComponents .-> CustomLibThemes\n end\n subgraph OtherCustomLib\n OtherCustomLibComponents --\x3eOtherCustomLibSchema\n OtherCustomLibThemes --\x3e OtherCustomLibSchema\n OtherCustomLibComponents .-> OtherCustomLibThemes\n end\n subgraph KoliBri\n KoliBriComponents --\x3e KoliBriSchema\n KoliBriThemes --\x3e KoliBriSchema\n KoliBriComponents .-> KoliBriThemes\n end\n subgraph Core\n Utils\n Types\n end\n\tOtherCustomLibComponents -.-o CustomLibComponents\n\tCustomLibComponents -.-o KoliBriComponents\n\n KoliBriSchema --\x3e Core\n CustomLibSchema --\x3e Core\n OtherCustomLibSchema --\x3e Core\n App/Storybook --\x3e CustomLibComponents\n App/Storybook --\x3e CustomLibThemes\n App/Storybook --\x3e OtherCustomLibComponents\n App/Storybook --\x3e OtherCustomLibThemes\n App/Storybook --\x3e KoliBriComponents\n App/Storybook --\x3e KoliBriThemes"}),"\n",(0,i.jsx)(n.h2,{id:"design-system--style-guides-ux",children:"Design system / style guides (UX)"}),"\n",(0,i.jsx)(n.p,{children:"It is important to understand that within a component library (UI-Lib) a uniform operating behavior applies to the components, since these are implemented only once concretely and according to the requirements."}),"\n",(0,i.jsx)(n.p,{children:"Within a component library, however, the possibility exists of creating several themes (styles). The theme is defined for this component-specific and loaded later with the components in pairs together."}),"\n",(0,i.jsx)(n.h3,{id:"where-is-the-design-system--style-guide",children:"Where is the design system / style guide?"}),"\n",(0,i.jsx)(n.p,{children:"A theme represents a concrete combination of the components and a theme. This combination represents a concrete design system or style guide."}),"\n",(0,i.jsx)(n.mermaid,{value:" flowchart LR\n subgraph Design System / Styleguide\n\t\t\t\tdirection LR\n Components --- Theme\n end"}),"\n",(0,i.jsx)(n.h3,{id:"why",children:"Why?"}),"\n",(0,i.jsx)(n.p,{children:"The starting point of the explanation is the fact that HTML and CSS are already decoupled according to their specification."}),"\n",(0,i.jsx)(n.p,{children:"Within a component library, the HTML is defined by the component implementation and the CSS through the style information."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Why the modular separation then?"})}),"\n",(0,i.jsx)(n.p,{children:"The claim of the total architecture and the quality criteria connected with it aim at the fact that the basic components are implemented semantically only once, tested and accepted."}),"\n",(0,i.jsx)(n.p,{children:"Here, the aim is to achieve the best possible structure (HTML) of the components between minimalism and flexibility and full compliance with HTML semantics. This premise pays into optimal compatibility with all devices and assistive technologies."}),"\n",(0,i.jsx)(n.p,{children:"Concluding from this premise, it is clear that not all different aesthetic ideas and operating concepts from design systems and style guides can be implemented."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"It often happens that initial design systems and style guides had to be adapted later in the realization due to accessibility requirements, so that in the end they come very close again in many points that were seen critically at the beginning."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In the end, the web components are displayed on the devices of the users through a technical realization. The technology has, however, with all creativity borders and gaps. To fathom these additionally under all requirements, to delimit and to find solutions is particularly complex."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"In the end, the aim is to standardize at least all complex basic components that represent a hurdle in terms of accessibility and to offer the best possible designability in the process."})})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},108:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(80924);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);