"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[499],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(n),d=r,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[k]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(15882),r=(n(50959),n(17942));const o={title:"Button and link components",authors:"deleonio",tags:["button","link"]},i=void 0,l={permalink:"/en/blog/2023/01/09/",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-01-09.mdx",title:"Button and link components",description:'Today we offer the variants of Button, ButtonLink, Link and LinkButton. In the future we will also offer the ButtonToggle (Toogle button). All semantic links only support href and all buttons only on as a semantic "click". Visually, there are buttons that look exactly like links and links that look exactly like buttons.',date:"2023-01-09T00:00:00.000Z",formattedDate:"January 9, 2023",tags:[{label:"button",permalink:"/en/blog/tags/button"},{label:"link",permalink:"/en/blog/tags/link"}],readingTime:3.06,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Button and link components",authors:"deleonio",tags:["button","link"]},prevItem:{title:"Eigene Themes unabh\xe4ngig umsetzen",permalink:"/en/blog/2023/02/02/"},nextItem:{title:"Translations",permalink:"/en/blog/2023/01/04/"}},s={authorsImageUrls:[void 0]},p=[{value:"Motivation",id:"motivation",level:2},{value:"Challenges",id:"challenges",level:2},{value:"React-Router",id:"react-router",level:3},{value:"Server side rendering",id:"server-side-rendering",level:3},{value:"Solution",id:"solution",level:2}],c={toc:p},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Today we offer the variants of Button, ButtonLink, Link and LinkButton. In the future we will also offer the ButtonToggle (Toogle button). All semantic links only support ",(0,r.kt)("inlineCode",{parentName:"p"},"_href")," and all buttons only ",(0,r.kt)("inlineCode",{parentName:"p"},"_on"),' as a semantic "click". Visually, there are buttons that look exactly like links and links that look exactly like buttons.'),(0,r.kt)("p",null,"The following table provides an overview of the differences:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Merkmal"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Link"),(0,r.kt)("th",{parentName:"tr",align:"center"},"LinkButton"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Button"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ButtonLink"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ToggleButton",(0,r.kt)("sup",null,"*")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Design"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Link"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Link"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Semantics"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"a")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"a")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"button")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"button")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"input"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"_href")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"focus()")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2795")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("small",null,(0,r.kt)("sup",null,"*"),' The toggle button was implemented as a variant of the checkbox because it is a switch with a maximum of two states (either "on" or "off").'),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"In addition to a high level of standard conformity, KoliBri also strives for very good reusability (Developer Experience DX).\nThis is addressed by the uniformity of the HTML attributes and the economical use of additional properties."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Rationale:")," Given a link component intended for navigation, if we consider the two behaviors ",(0,r.kt)("strong",{parentName:"p"},"Navigate")," and ",(0,r.kt)("strong",{parentName:"p"},"Click without navigating"),"\nwould offer, then we would have a contradiction in behavior. Also when used in development we would need the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"_href")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_on"),"\nmake it optional and we could no longer warn against misuse (static code checking).")),(0,r.kt)("h2",{id:"challenges"},"Challenges"),(0,r.kt)("p",null,"This strict interpretation can cause problems when developing with other libraries and frameworks.\nEspecially when they expect a click on a link."),(0,r.kt)("h3",{id:"react-router"},"React-Router"),(0,r.kt)("p",null,"The React router maps navigation via clicks. When used with the link component, there are different implementation options."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wrapping:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link to="/">\n    <KolLink _href="">Home</KolLink>\n</Link>\n<Link to="/test">\n    <KolLink _href="">Test</KolLink>\n</Link>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"With a click:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolButtonLink\n    _label="Home"\n    _on={{\n        onClick: () => navigate("/")\n    }}\n>\n    Home\n</KolButtonLink>\n<KolButtonLink\n    _label="Test"\n    _on={{\n        onClick: () => navigate("/test")\n    }}\n>\n    Test\n</KolButtonLink>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"React-Link:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolLink\n    _href=""\n    _label="Home"\n    onClick={() => navigate("/")}\n>\n    Home\n</KolLink>\n<KolLink\n    _href=""\n    _label="Test"\n    onClick={() => navigate("/test")}\n>\n    Test\n</KolLink>\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Notice:")," ",(0,r.kt)("inlineCode",{parentName:"p"},'_href=""')," is actually not allowed.")),(0,r.kt)("p",null,"HThere is also a small code example here ",(0,r.kt)("kol-link",{_href:"https://codesandbox.io/s/kolibri-sample-react-link-sample-1jgz8v?file=/src/Navigation.tsx:0-112",_label:"",_target:"sandbox"},"Navigate with React router"),"."),(0,r.kt)("p",null,"The provided examples show that the Link and ButtonLink components are suitable for direct use with React-Router. However, the link component is also used within other KoliBri components. ",(0,r.kt)("strong",{parentName:"p"},"Where that wouldn't work!")),(0,r.kt)("h3",{id:"server-side-rendering"},"Server side rendering"),(0,r.kt)("p",null,"The server-side rendering is very similar to the React router because it is technically very strongly driven by the Remix framework.\nRemix is \u200b\u200ba framework for building hybrid client and server side web applications. This means that the implementation does not differ whether I want to build the application later as a client or server-side application.\nFor server-side applications, the one-click navigating links must work because these applications run on the server and not in the browser."),(0,r.kt)("p",null,"In order to ensure that KoliBri can also be used for server-side web applications, it must also be possible to change pages by ",(0,r.kt)("strong",{parentName:"p"},"clicking without navigating"),"."),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"To solve the challenges, all components that are passed link definitions are expanded. If ButtonLink definitions can also be transferred to these components, then they can also display clicks without navigating, but they still look like links.\nThe following components must also be expanded:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Breadcrumb"),(0,r.kt)("li",{parentName:"ul"},"LinkGroup"),(0,r.kt)("li",{parentName:"ul"},"Nav"),(0,r.kt)("li",{parentName:"ul"},"SkipNav")))}u.isMDXComponent=!0}}]);