"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[29233],{55124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(76776),l=n(108);const s={title:"Button and link components",authors:"deleonio",tags:["button","link"]},r=void 0,o={permalink:"/en/blog/2023/01/09/",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-01-09.mdx",title:"Button and link components",description:'Today we offer the variants of Button, ButtonLink, Link and LinkButton. In the future we will also offer the ButtonToggle (Toogle button). All semantic links only support href and all buttons only on as a semantic "click". Visually, there are buttons that look exactly like links and links that look exactly like buttons.',date:"2023-01-09T00:00:00.000Z",tags:[{inline:!0,label:"button",permalink:"/en/blog/tags/button"},{inline:!0,label:"link",permalink:"/en/blog/tags/link"}],readingTime:3.06,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Button and link components",authors:"deleonio",tags:["button","link"]},unlisted:!1,prevItem:{title:"Eigene Themes unabh\xe4ngig umsetzen",permalink:"/en/blog/2023/02/02/"},nextItem:{title:"Translations",permalink:"/en/blog/2023/01/04/"}},c={authorsImageUrls:[void 0]},d=[{value:"Motivation",id:"motivation",level:2},{value:"Challenges",id:"challenges",level:2},{value:"React-Router",id:"react-router",level:3},{value:"Server side rendering",id:"server-side-rendering",level:3},{value:"Solution",id:"solution",level:2}];function a(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Today we offer the variants of Button, ButtonLink, Link and LinkButton. In the future we will also offer the ButtonToggle (Toogle button). All semantic links only support ",(0,i.jsx)(t.code,{children:"_href"})," and all buttons only ",(0,i.jsx)(t.code,{children:"_on"}),' as a semantic "click". Visually, there are buttons that look exactly like links and links that look exactly like buttons.']}),"\n",(0,i.jsx)(t.p,{children:"The following table provides an overview of the differences:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Merkmal"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Link"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"LinkButton"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Button"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"ButtonLink"}),(0,i.jsxs)(t.th,{style:{textAlign:"center"},children:["ToggleButton",(0,i.jsx)("sup",{children:"*"})]})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Design"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Link"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Button"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Button"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Link"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Button"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Semantics"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"a"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"a"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"button"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"button"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"input"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"_href"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"_on"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"focus()"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2795"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Value"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2796"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"boolean"})})]})]})]}),"\n",(0,i.jsx)("small",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)("sup",{children:"*"}),' The toggle button was implemented as a variant of the checkbox because it is a switch with a maximum of two states (either "on" or "off").']})}),"\n",(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"In addition to a high level of standard conformity, KoliBri also strives for very good reusability (Developer Experience DX).\nThis is addressed by the uniformity of the HTML attributes and the economical use of additional properties."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Rationale:"})," Given a link component intended for navigation, if we consider the two behaviors ",(0,i.jsx)(t.strong,{children:"Navigate"})," and ",(0,i.jsx)(t.strong,{children:"Click without navigating"}),"\nwould offer, then we would have a contradiction in behavior. Also when used in development we would need the properties ",(0,i.jsx)(t.code,{children:"_href"})," and ",(0,i.jsx)(t.code,{children:"_on"}),"\nmake it optional and we could no longer warn against misuse (static code checking)."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"challenges",children:"Challenges"}),"\n",(0,i.jsx)(t.p,{children:"This strict interpretation can cause problems when developing with other libraries and frameworks.\nEspecially when they expect a click on a link."}),"\n",(0,i.jsx)(t.h3,{id:"react-router",children:"React-Router"}),"\n",(0,i.jsx)(t.p,{children:"The React router maps navigation via clicks. When used with the link component, there are different implementation options."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Wrapping:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'<Link to="/">\n\t<KolLink _href="">Home</KolLink>\n</Link>\n<Link to="/test">\n\t<KolLink _href="">Test</KolLink>\n</Link>\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"With a click:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'<KolButtonLink\n\t_label="Home"\n\t_on={{\n\t\tonClick: () => navigate("/")\n\t}}\n>\n\tHome\n</KolButtonLink>\n<KolButtonLink\n\t_label="Test"\n\t_on={{\n\t\tonClick: () => navigate("/test")\n\t}}\n>\n\tTest\n</KolButtonLink>\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"React-Link:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'<KolLink\n\t_href=""\n\t_label="Home"\n\tonClick={() => navigate("/")}\n>\n\tHome\n</KolLink>\n<KolLink\n\t_href=""\n\t_label="Test"\n\tonClick={() => navigate("/test")}\n>\n\tTest\n</KolLink>\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notice:"})," ",(0,i.jsx)(t.code,{children:'_href=""'})," is actually not allowed."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["HThere is also a small code example here ",(0,i.jsx)("kol-link",{_href:"https://codesandbox.io/s/kolibri-sample-react-link-sample-1jgz8v?file=/src/Navigation.tsx:0-112",_label:"",_target:"sandbox",children:"Navigate with React router"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The provided examples show that the Link and ButtonLink components are suitable for direct use with React-Router. However, the link component is also used within other KoliBri components. ",(0,i.jsx)(t.strong,{children:"Where that wouldn't work!"})]}),"\n",(0,i.jsx)(t.h3,{id:"server-side-rendering",children:"Server side rendering"}),"\n",(0,i.jsx)(t.p,{children:"The server-side rendering is very similar to the React router because it is technically very strongly driven by the Remix framework.\nRemix is \u200b\u200ba framework for building hybrid client and server side web applications. This means that the implementation does not differ whether I want to build the application later as a client or server-side application.\nFor server-side applications, the one-click navigating links must work because these applications run on the server and not in the browser."}),"\n",(0,i.jsxs)(t.p,{children:["In order to ensure that KoliBri can also be used for server-side web applications, it must also be possible to change pages by ",(0,i.jsx)(t.strong,{children:"clicking without navigating"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(t.p,{children:"To solve the challenges, all components that are passed link definitions are expanded. If ButtonLink definitions can also be transferred to these components, then they can also display clicks without navigating, but they still look like links.\nThe following components must also be expanded:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Breadcrumb"}),"\n",(0,i.jsx)(t.li,{children:"LinkGroup"}),"\n",(0,i.jsx)(t.li,{children:"Nav"}),"\n",(0,i.jsx)(t.li,{children:"SkipNav"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},108:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var i=n(80924);const l={},s=i.createContext(l);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);