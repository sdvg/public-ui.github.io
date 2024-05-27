"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2204],{63180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(76776),l=n(108),r=n(51376);const i={slug:"/concepts/expert-slot",title:"Expert-slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",tags:["Architektur","arc42","Konzept"]},c=void 0,d={id:"concepts/expert-slot",title:"Expert-slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.1/20-concepts/08-expert-slot.mdx",sourceDirName:"20-concepts",slug:"/concepts/expert-slot",permalink:"/en/docs/concepts/expert-slot",draft:!1,unlisted:!1,tags:[{label:"Architektur",permalink:"/en/docs/tags/architektur"},{label:"arc42",permalink:"/en/docs/tags/arc-42"},{label:"Konzept",permalink:"/en/docs/tags/konzept"}],version:"2.1",sidebarPosition:8,frontMatter:{slug:"/concepts/expert-slot",title:"Expert-slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Swizzling",permalink:"/en/docs/concepts/swizzling"},next:{title:"Inputs, Select und Textarea",permalink:"/en/docs/concepts/form-input"}},x={},o=[{value:"Motivation",id:"motivation",level:2},{value:"&quot;Expert&quot;-slot",id:"expert-slot",level:2},{value:"Component list",id:"component-list",level:3},{value:"Beispiel",id:"beispiel",level:3}];function h(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:(0,s.jsx)("kol-abbr",{"_tooltip-align":"right",_title:"Accessibility component library",children:(0,s.jsx)(t.p,{children:"KoliBri"})})})," ",(0,s.jsx)(t.p,{children:"provides self-contained and accessible components and allows the \u201cfilling\u201d of the components, usually only via the properties of the components. All incoming\nproperty values are validated and mapped to the internal state."})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("kol-indented-text",{children:(0,s.jsx)("strong",{children:"Through this, we retain control over the components and their semantic construction."})})}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsxs)(t.p,{children:["However, to further improve the reusability of"," "]}),(0,s.jsx)("strong",{children:(0,s.jsx)("kol-abbr",{"_tooltip-align":"right",_title:"Accessibility component library",children:(0,s.jsx)(t.p,{children:"KoliBri"})})})," ",(0,s.jsxs)(t.p,{children:[", we will extend the flexibility with a so-called ",(0,s.jsx)("strong",{children:"expert"})," mode. The expert mode defines the point where the ",(0,s.jsx)("strong",{children:"expert"})," gets more\ndesign space within the component and in return takes responsibility for accessibility."]})]}),"\n",(0,s.jsx)(t.h2,{id:"expert-slot",children:'"Expert"-slot'}),"\n",(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["The \u201cExpert\u201d slot can be used to \u201coverwrite\u201d the internal construction of some components. If necessary, it is necessary to set the regular required property\nvalues of the component to ",(0,s.jsx)("code",{children:"empty"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"component-list",children:"Component list"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Component"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Available from"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Slot name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Without slot name"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Badge"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("code",{children:"expert"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Button"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("code",{children:"expert"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"ButtonLink"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.15"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("code",{children:"expert"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"ButtonToggle"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("code",{children:"expert"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"InputCheckbox"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"InputDate"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"InputEmail"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"InputNumber"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"InputPassword"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"InputRange"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"InputRadio"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"InputText"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Select"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Textarea"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Link"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.16"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"LinkButton"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.16"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)("code",{children:"expert"})," | ",(0,s.jsx)("code",{})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("sup",{children:"*"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Span"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("code",{children:"expert"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Tooltip"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)("code",{children:"expert"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("sup",{children:"*"})," The blank slot name is only supported due to backwards compatibility up to major release 2."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,s.jsx)("p",{children:"A button is regularly used as follows:"}),"\n",(0,s.jsx)(r.qC,{_label:"I am a button"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<kolbutton _label="I am a button"></kolbutton>\n'})}),"\n",(0,s.jsx)("p",{children:"With the Expert slot, the button can now be used in this way:"}),"\n",(0,s.jsx)(r.qC,{_label:"",children:(0,s.jsx)("span",{slot:"expert",children:"I am more than just a button"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<kolbutton _label="">\n\t<span slot="expert">I am more than just a button</span>\n</kolbutton>\n'})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("kol-alert",{_type:"info",children:(0,s.jsx)("strong",{children:(0,s.jsxs)(t.p,{children:["The property ",(0,s.jsx)("code",{children:'slot="expert"'})," enables a traceable handover point and clearly defines the context change."]})})})})]})}function j(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},108:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>i});var s=n(80924);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);