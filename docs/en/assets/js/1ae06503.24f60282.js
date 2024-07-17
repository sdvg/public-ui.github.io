"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[14172],{73464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(76776),i=t(108),s=t(83488);const r={},l="Designer",a={id:"concepts/styling/designer",title:"Designer",description:"Click here to open the designer in a new browser window.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/05-styling/35-designer.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/designer",permalink:"/en/docs/next/concepts/styling/designer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Theming",permalink:"/en/docs/next/concepts/styling/theming"},next:{title:"Scss",permalink:"/en/docs/next/concepts/styling/scss"}},h={},c=[{value:"Global CSS",id:"global-css",level:2},{value:"Structure",id:"structure",level:2},{value:"Top left: Theme",id:"top-left-theme",level:3},{value:"Center left: Editor",id:"center-left-editor",level:3},{value:"Top right: Componoents",id:"top-right-componoents",level:3},{value:"Top center: Preview",id:"top-center-preview",level:3},{value:"Bottom: Import / Export / Reset",id:"bottom-import--export--reset",level:3},{value:"Interdependencies of the components",id:"interdependencies-of-the-components",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"designer",children:"Designer"}),"\n",(0,o.jsx)("div",{className:"grid grid-cols-2",children:(0,o.jsx)(s.Yh,{_headline:"Create own theme",_level:2,children:(0,o.jsx)(s.GQ,{slot:"content",_useCase:"nav",_href:"/designer",_target:"designer",children:(0,o.jsxs)("div",{className:"flex gap-4 py-2",children:[(0,o.jsx)(s.SA,{className:"homepage",_icons:"codicon codicon-paintcan"}),(0,o.jsx)("span",{children:"Click here to open the designer in a new browser window."})]})})})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.p,{children:["Thanks to KoliBri Designer, users can quickly develop their own style for the KoliBri library. The effects of their own CSS instructions are visible directly on the component.",(0,o.jsx)("br",{}),"\nThe finished styles can then be downloaded as a theme and inserted into the user's own project."]}),"\n",(0,o.jsx)(n.h2,{id:"global-css",children:"Global CSS"}),"\n",(0,o.jsx)(n.p,{children:"To ensure that all HTML elements behave optimally when using assistive tools and at high zoom levels, specific CSS styles must be set. For this purpose, the following CSS are initially set for all components and can be overridden by the theme-specific CSS if required."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"* {\n\tfont-size: inherit; /* allows proportional scaling */\n\thyphens: auto; /* activates the language-specific hyphenation */\n\tletter-spacing: inherit; /* allows changing the letter spacing */\n\tword-break: break-word; /* enables word wrapping */\n\tword-spacing: inherit; /* allows changing the word spacing */\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,o.jsx)(n.p,{children:"The KoliBri Designer is divided into three sections."}),"\n",(0,o.jsx)(n.h3,{id:"top-left-theme",children:"Top left: Theme"}),"\n",(0,o.jsxs)(n.p,{children:["The custom theme can be built either based on a standard theme (default) or directly with an empty theme. By default, a standard ",(0,o.jsx)("b",{children:"theme"})," is selected as the basis in the Theme field by the ",(0,o.jsx)("i",{children:"\u201cdefault\u201d"})," entry. Here, for illustration purposes, some CSS statements are inserted into the editor area, the effect of which is applied to the default ",(0,o.jsx)("b",{children:"Button"})," component as an example.",(0,o.jsx)("br",{}),"\nIf you enter your value for the theme to be created in the ",(0,o.jsx)("b",{children:"Theme"})," field, the KoliBri Designer resets all styling instructions, and you can start with an empty theme."]}),"\n",(0,o.jsx)("kol-indented-text",{children:"Please note that some KoliBri components are naturally displayed either not at all, unfamiliar or with browser default layout, when selecting an empty default theme."}),"\n",(0,o.jsx)(n.h3,{id:"center-left-editor",children:"Center left: Editor"}),"\n",(0,o.jsxs)(n.p,{children:["For easy input of own CSS instructions, the KoliBri Designer has a ",(0,o.jsx)("i",{children:"VS Code Editor"}),". Instructions that users write in the editor area are automatically taken over after pressing the key combination ",(0,o.jsx)("code",{children:"Ctrl + S"})," or ",(0,o.jsx)("code",{children:"Command + S"})," and the effects are transferred to the currently selected component."]}),"\n",(0,o.jsx)(n.h3,{id:"top-right-componoents",children:"Top right: Componoents"}),"\n",(0,o.jsxs)(n.p,{children:["Via the selection box ",(0,o.jsx)("b",{children:"Components"}),", the KoliBri component to be edited can be selected. All KoliBri components are available, that have a visual output. Not included are purely functional components, such as Modal, InputLeandUpAdapter or SkipNav.",(0,o.jsx)("br",{}),"\nAfter selecting a component, the KoliBri designer loads a typical basic output of the component. For components that have different variants, such as Button, all variants are output."]}),"\n",(0,o.jsxs)("kol-indented-text",{children:["Kindly note that some KoliBri components have dependencies on each other. For example, the ",(0,o.jsx)("b",{children:"LinkGroup"})," component consists of the Link component, IconIcofont component and Tooltip component. It is recommended to start with the ",(0,o.jsx)("i",{children:"smallest"})," component first and then switch to the actual main component. A detailed description follows below."]}),"\n",(0,o.jsx)(n.h3,{id:"top-center-preview",children:"Top center: Preview"}),"\n",(0,o.jsx)(n.p,{children:"This area displays the currently loaded component with a typical output. Depending on the selection of the default theme, the component either presents itself in the default browser layout or already has styling features that come from the default theme."}),"\n",(0,o.jsx)(n.h3,{id:"bottom-import--export--reset",children:"Bottom: Import / Export / Reset"}),"\n",(0,o.jsx)(n.p,{children:"The KoliBri Designer offers different possibilities to save your settings and load them again for further editing."}),"\n",(0,o.jsxs)(n.p,{children:["The button ",(0,o.jsx)("b",{children:"\u201cCreate Theme\u201d"})," summarizes your CSS instructions as a standalone theme and makes them available in the editor for viewing and copying.",(0,o.jsx)("br",{}),"\nThe ",(0,o.jsx)("b",{children:"\u201cDownload Theme\u201d"})," button allows you to save your theme as a JSON file.",(0,o.jsx)("br",{}),"\nTo undo all changes, click the ",(0,o.jsx)("b",{children:"\u201cDiscard all changes\u201d"})," button. The KoliBri Designer will be reset to the default theme ",(0,o.jsx)("b",{children:"\u201cdefault\u201d"}),".",(0,o.jsx)("br",{}),"\nWith the upload field ",(0,o.jsx)("b",{children:"\u201cLoad Theme\u201d"})," an already created theme file (JSON file) can be loaded into the KoliBri Designer for editing again."]}),"\n",(0,o.jsx)(n.h2,{id:"interdependencies-of-the-components",children:"Interdependencies of the components"}),"\n",(0,o.jsxs)(n.p,{children:["Most KoliBri components are technically made up of a collection of other KoliBri components, which together then make up a new KoliBri component and have similar, but broader, fields of application.",(0,o.jsx)("br",{}),"\nKnowing the technical construction of the component you are working on is important for the correct sequence when creating your own theme."]}),"\n",(0,o.jsx)("kol-indented-text",{children:"The dependencies of the KoliBri components on each other are described in detail by a diagram in the Storybook, in the section Description of the respective component."}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Example:"})}),"\n",(0,o.jsx)("kol-link-group",{_heading:"Headline",_links:"[{'_label':'Link 1', '_icon':'icofont-home','_href':'test'},{'_label':'Link 2', '_icon':'icofont-phone','_href':'test'}]","_list-style-type":"none"}),"\n",(0,o.jsx)(n.p,{children:"The LinkGroup used in this example consists of the other KoliBri components:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"kol-heading"}),"\n",(0,o.jsx)(n.li,{children:"kol-link \u2192 also uses kol-tooltip and kol-badge"}),"\n",(0,o.jsx)(n.li,{children:"kol-icon-icofont"}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["First, set the CSS instructions for the LinkGroup heading. The heading consists of the KoliBri component \u201ckol-heading\u201d. Therefore, change in the selection field ",(0,o.jsx)("b",{children:"Components"})," to the component ",(0,o.jsx)("b",{children:"kol-heading"}),". Adjust here in the editor, e.g. for h1 the font color. This setting now applies to all components in which the kol-heading component is used. The font color has changed not only for the kol-heading component itself, but also for all components that use ",(0,o.jsx)("b",{children:"kol-heading"}),". Among others, the ",(0,o.jsx)("b",{children:"kol-link-group"})," used in the example.",(0,o.jsx)("br",{}),"\nSwitch back to the ",(0,o.jsx)("b",{children:"kol-link-group"})," component in the ",(0,o.jsx)("b",{children:"Components"})," selection box. Again, the font color of the heading has changed according to the CSS statement of the ",(0,o.jsx)("b",{children:"kol-eading"})," component."]}),"\n",(0,o.jsxs)(n.li,{children:["Now change the font color of the links. In the ",(0,o.jsx)("b",{children:"Components"})," selection box, switch to ",(0,o.jsx)("b",{children:"kol-link"}),". In the editor, change the Color value for ",(0,o.jsx)("b",{children:"a"}),". Switch back to the ",(0,o.jsx)("b",{children:"kol-link-group"})," component. The font color of the individual links has also changed."]}),"\n",(0,o.jsxs)(n.li,{children:["If you try to change the previously mentioned settings directly in the ",(0,o.jsx)("b",{children:"kol-link-group"})," component, you will not see any changes. However, it would be possible here, for example, to change the background color of the entire ",(0,o.jsx)("b",{children:"kol-link-group"})," component."]}),"\n",(0,o.jsxs)(n.li,{children:["Note that you can only style components that are inside a shadow DOM via the KoliBri designer. For the ",(0,o.jsx)("b",{children:"kol-link-group"})," example, it would not be possible to style the ",(0,o.jsx)("b",{children:(0,o.jsx)("kol-link-group",{})})," element itself because it is not inside a shadow DOM."]}),"\n",(0,o.jsxs)(n.li,{children:["Note that changes in KoliBri Designer are possible only for those KoliBri components that have a shadow DOM during rendering. This is not the case, for example, with the ",(0,o.jsx)("b",{children:"kol-icon-icofont"})," or ",(0,o.jsx)("b",{children:"kol-icon-fontawesome"})," component."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},108:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var o=t(80924);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);