"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[82079],{22888:(e,t,n)=>{n.d(t,{Z:()=>a,p:()=>r});var o=n(58532),i=n(93700),s=n(50959);const r=()=>s.createElement(i.T5,{_title:(0,o.I)({id:"custom.component-library-for-the-accessibility",message:"Komponentenbibliothek f\xfcr die Barrierefreiheit"})},"KoliBri"),a=r},41345:(e,t,n)=>{n.d(t,{G$:()=>r});var o=n(50959),i=n(89252);let s;const r=e=>{let{code:t,config:n}=e;return(0,o.useEffect)((()=>{(e=>{e&&i.L.initialize(Object.assign({startOnLoad:!0},e)),clearTimeout(s),s=setTimeout((()=>{clearTimeout(s),i.L.contentLoaded()}),500)})(n)}),[]),o.createElement("div",null,o.createElement("div",{className:"mermaid"},t))}},90551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=n(15882),i=(n(50959),n(17942)),s=n(93700),r=n(22888),a=n(41345);const l={},d="Theming",c={unversionedId:"concepts/styling/theming",id:"concepts/styling/theming",title:"Theming",description:"You can switch the theme from our site (KoliBri) using the switch in the toolbar above.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/05-styling/34-theming.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/theming",permalink:"/en/docs/next/concepts/styling/theming",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test procedure",permalink:"/en/docs/next/concepts/testprocedure"},next:{title:"Designer",permalink:"/en/docs/next/concepts/styling/designer"}},p={},m=[],h=(g="MermaidDesignProcess",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var g;const u={toc:m},f="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"theming"},"Theming"),(0,i.kt)("kol-alert",{_type:"info"},(0,i.kt)("img",{width:"100%",src:"/assets/theme-switch.png",alt:"Shows where the switch for switching the theme is in the toolbar."}),(0,i.kt)("p",null,(0,i.kt)("kol-icon",{_icon:"codicon codicon-arrow-right"}),"You can switch the theme from our site (KoliBri) using the switch in the toolbar above.")),(0,i.kt)("br",null),(0,i.kt)("p",null,"The unique feature of ",(0,i.kt)(r.p,{mdxType:"KoliBri"})," is the ",(0,i.kt)("strong",null,"reference implementation")," of components that are"," ",(0,i.kt)("strong",null,"semantically W3C- and WCAG-compliant")," from the ground up and thus ",(0,i.kt)("strong",null,"completely accessible")," regarding assistive support. All components are implemented as"," ",(0,i.kt)(s.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components?retiredLocale=de",_target:"mozilla",mdxType:"KolLink"},"Web Components")," ","and are therefore reusable in all web-based projects. In the following figure, these components are represented by the gray-dashed shapes in the center."),(0,i.kt)("p",null,(0,i.kt)(s.CV,{mdxType:"KolIndentedText"},(0,i.kt)("strong",null,"1. KoliBri components could be reused as a basis for all design systems or component libraries."))),(0,i.kt)("img",{src:"/assets/abgrenzung.jpg",alt:"Illustration of how components become custom components using various style guides."}),(0,i.kt)("p",null,"In the first release (v1.0) ",(0,i.kt)(r.p,{mdxType:"KoliBri"})," had directly implemented the individualization of the standard design using so-called"," ",(0,i.kt)("strong",null,(0,i.kt)(s.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",_target:"mozilla",mdxType:"KolLink"},"CSS-Properties"))," ","(",(0,i.kt)(s.Nv,{_href:"https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71",_target:"uxdesign",mdxType:"KolLink"},"Design-Tokens"),", ",(0,i.kt)(s.Nv,{_href:"https://tailwindcss.com",_target:"tailwindcss",mdxType:"KolLink"},"Tailwind CSS"),"). With the implementation of further themes, however, we have found that we would have to introduce more and more CSS-Properties to be able to implement the flexibility for the desired design/UX (Corporate Design/Style guide). In case of doubt, a separate property would have to be provided for each customizability. The example of the ",(0,i.kt)(s.Nv,{_href:"https://mui.com/material-ui/api/button/#css",_target:"mui",mdxType:"KolLink"},"MUI-Button CSS")," shows well how the CSS properties (design tokens) become more and more."),(0,i.kt)("p",null,(0,i.kt)(s.CV,{mdxType:"KolIndentedText"},(0,i.kt)("strong",null,"2. We have completely decoupled the whole CSS from the components (like"," ",(0,i.kt)(s.Nv,{_href:"https://styled-components.com",_target:"styled-components",mdxType:"KolLink"},"Styled-Components"),")."))),(0,i.kt)("p",null,"Using the designer, a \u201cclient\u201d can design the components individually and completely independently with all the CSS freedom. Within a \u201cclient\u201d theme, custom CSS properties can be introduced. The use of CSS properties (design tokens) is thus preserved at the theme level, but with a much smaller and maintainable scope."),(0,i.kt)("p",null,(0,i.kt)(s.CV,{mdxType:"KolIndentedText"},(0,i.kt)("strong",null,"3. KoliBri allows the reuse of tested, accessible and robust components (constructions) with almost individual design and thus represents a freely customizable HTML standard in the context of accessibility."))),(0,i.kt)("p",null,"The following diagram shows an exemplary design process with KoliBri, which can be applied completely independent of the KoliBri team."),(0,i.kt)(h,{mdxType:"MermaidDesignProcess"}),(0,i.kt)(a.G$,{code:"\nstateDiagram-v2\n\tdirection LR\n\ts1: <strong>Specifikation</strong>\n\ts1: UI/UX-Team\n\ts2: <strong>Design-Tokens</strong>\n\ts2: JSON\n\ts3: <strong>Style-Files</strong>\n\ts3: CSS\n\ts4: <strong>Designer</strong>\n\ts4: KoliBri\n\ts5: <strong>Theme</strong>\n\ts5: KoliBri\n\tnote right of s1\n\t\t<strong>Tools:</strong> Adobe XD, Figma, Sketch u.a.\n\t\t<strong>Technique:</strong> CSS-Properties, Design-Tokens\n\tend note\n\tnote right of s2\n\t\tExport-<strong>Plugin</strong>\n\tend note\n\tnote right of s3\n\t\tSet of CSS-Properties\n\tend note\n\tnote right of s5\n\t\tSharable <strong>NPM-Paket</strong>\n\tend note\n\t[*] --\x3e s1\n\ts1 --\x3e s2 : Plugin\n\ts2 --\x3e s3 : Script\n\ts3 --\x3e s5\n\ts1 --\x3e s4\n\ts4 --\x3e s5\n\ts5 --\x3e [*]",mdxType:"Mermaid"}),(0,i.kt)("p",null,"For example, the UI/UX team specifies the components of their design system with Figma. When the specification is transferred to implementation, the design is \u201ctransferred\u201d to the basic components in the form of pure CSS using ",(0,i.kt)(s.Nv,{_href:"/docs/concepts/styling/designer",mdxType:"KolLink"},"KoliBri-Designers"),". If customizability is desired in your design system, CSS properties or design tokens can be defined in the Designer for this purpose. So that the own theme can be shared across projects, the theme is packaged in an NPM package and can be made available via any registry."),(0,i.kt)("p",null,(0,i.kt)(s.ox,{_summary:"Design-Tokens",mdxType:"KolDetails"},"Optionally, design schemes can be exported from Figma, for example, using design tokens. These can then be transferred into separate CSS files that contain the respective values for the CSS properties. Later, one of these CSS files is used to apply the concrete design in combination with the Web Components and the theme on the website.")),(0,i.kt)("p",null,(0,i.kt)(s.ox,{_summary:"Dark-Mode",mdxType:"KolDetails"},"Optionally, a \u201cdark mode\u201d theme can also be implemented. For this, the required CSS can be stored in the globals of the KoliBri theme.")),(0,i.kt)(s.K5,{_heading:"KoliBri-Factory",_type:"info",_variant:"card",mdxType:"KolAlert"},(0,i.kt)("p",null,"Own specific components, which are not provided by KoliBri and unfortunately do not fit to the KoliBri component variety, can be built in own component libraries and maintained independently. For this purpose, we offer the so-called ",(0,i.kt)("strong",null,"KoliBri-Factory")," (Stack) (see"," ",(0,i.kt)(s.Nv,{_href:"https://github.com/public-ui/kolibri/blob/main/docs/ARCHITECTURE.md#erweitert",_target:"github",mdxType:"KolLink"},"Modularization"),").")))}k.isMDXComponent=!0}}]);