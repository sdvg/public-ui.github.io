"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8619],{17942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(15882),a=(n(50959),n(17942)),l=n(4012);const o={},s="Frameworks",i={unversionedId:"get-started/frameworks",id:"get-started/frameworks",title:"Frameworks",description:"KoliBri can be used to implement web-based user interfaces.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10-get-started/5-frameworks.mdx",sourceDirName:"10-get-started",slug:"/get-started/frameworks",permalink:"/en/docs/get-started/frameworks",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"First steps",permalink:"/en/docs/get-started/erste-schritte"},next:{title:"Playground",permalink:"/en/docs/get-started/playground"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Integration variants",id:"integration-variants",level:2},{value:"Client-Side frameworks",id:"client-side-frameworks",level:3},{value:"Server-Side-Frameworks",id:"server-side-frameworks",level:3},{value:"Aktuelle Trends",id:"aktuelle-trends",level:2}],m={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frameworks"},"Frameworks"),(0,a.kt)("kol-alert",{_type:"success"},(0,a.kt)("b",null,"KoliBri")," can be used to implement web-based user interfaces."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"All packages/artifacts of KoliBri are provided versioned in the public ",(0,a.kt)("kol-link",{_href:"https://www.npmjs.com/search?q=%40public-ui",_target:"npmjs"},"NPM-Registry"),"."),(0,a.kt)(l.Vp,{_caption:"Packages overview",_headers:{horizontal:[[{label:"Package",key:"name"},{label:"Description",key:"desc"}]]},_data:[{name:"create-kolibri",desc:"CLI to create new project based on KoliBri."},{name:"@public-ui/components",desc:"Includes the accessible Web Components without styling."},{name:"@public-ui/core",desc:"Contains central functionalities for a component library."},{name:"@public-ui/schema",desc:"Contains the scheme for the KoliBri base components."},{name:"@public-ui/themes",desc:"Includes numerous themes for the KoliBri base components."},{name:"@public-ui/react",desc:"Adapter for the React framework."},{name:"@public-ui/solid",desc:"Adapter for the Solid framework."},{name:"@public-ui/angular-v15",desc:"Adapter for the Angular v15 framework."},{name:"@public-ui/angular-v14",desc:"Adapter for the Angular v14 framework."},{name:"@public-ui/angular-v13",desc:"Adapter for the Angular v13 framework."},{name:"@public-ui/angular-v12",desc:"Adapter for the Angular v12 framework."},{name:"@public-ui/angular-v11",desc:"Adapter for the Angular v11 framework."},{name:"@public-ui/preact",desc:"Adapter for the Preact framework."},{name:"@public-ui/vue",desc:"Adapter for the Vue framework."},{name:"@public-ui/hydrate",desc:"Contains functions to generate HTML strings of the components (SSR)."},{name:"<s>@public-ui/angular</s>",desc:"This package is deprecated because Angular requires version-specific adapters."}],mdxType:"KolTable"}),(0,a.kt)("h2",{id:"integration-variants"},"Integration variants"),(0,a.kt)("b",null,"KoliBri")," is currently offered in the following variants:",(0,a.kt)("h3",{id:"client-side-frameworks"},"Client-Side frameworks"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Static websites"),(0,a.kt)("th",{parentName:"tr",align:null},"Dynamic web applications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Technically, Web Components, such as those included in KoliBri, are universally reusable, as is standard HTML."),(0,a.kt)("td",{parentName:"tr",align:null},"For implementation of dynamic web applications there are a number of frameworks for which KoliBri can be reused. Depending on the framework, the deployment of KoliBri is different. Particularly well suited are JSX/TSX based frameworks, such as React or Solid, since here the maximum possibilities of type support and autocompletion are possible. In contrast, frameworks with their own template languages, such as Angular, Vue or Svelte, the development support can be differently easily implemented.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Framework"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/webcomponent.png",width:"150",alt:"Web Component logo"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Web Components"),(0,a.kt)("br",null),"All components of ",(0,a.kt)("b",null,"KoliBri")," are implemented according to the Web Components Standard. Thus, the components can usually be reused in all modern projects. ",(0,a.kt)("kol-alert",{_type:"info"},"KoliBri can be integrated like jQuery and is therefore also interesting for server-side rendering, such as PHP or JSF."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/react.png",width:"150",alt:"React logo"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"React-Components")," (",(0,a.kt)("kol-icon",{"_aira-label":"",_icon:"icofont-star"})," recommended)",(0,a.kt)("br",null),"As an alternative to the pure Web Components, we offer an adapter for ",(0,a.kt)("strong",{parentName:"td"},"React"),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/solid.png",width:"150",alt:"Solid logo"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Solid-Components"),(0,a.kt)("br",null),"As an alternative to the pure Web Components, we offer an adapter for ",(0,a.kt)("strong",{parentName:"td"},"Solid"),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/angular.png",width:"150",alt:"Angular logo"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Angular-Components")," (>= 11)",(0,a.kt)("br",null),"As an alternative to the pure Web Components, we offer an adapter for ",(0,a.kt)("strong",{parentName:"td"},"Angular"),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/vue.png",width:"150",alt:"Vue logo"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Vue-Components")," ",(0,a.kt)("br",null),"Alternativ zu den reinen Web Componenten bieten wir einen Adapter f\xfcr ",(0,a.kt)("strong",{parentName:"td"},"Vue")," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/preact.png",width:"150",alt:"Preact logo"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Preact-Components")," (experimental)",(0,a.kt)("br",null),"As an alternative to the pure Web Components, we offer an adapter for ",(0,a.kt)("strong",{parentName:"td"},"Preact"),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/svelte.png",width:"150",alt:"Svelte logo"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Svelte-Components")," (open)",(0,a.kt)("br",null),"As an alternative to the pure Web Components, we offer an adapter for ",(0,a.kt)("strong",{parentName:"td"},"Svelte"),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/ember.png",width:"150",alt:"Ember logo"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Ember-Components")," (open)",(0,a.kt)("br",null),"As an alternative to the pure Web Components, we offer an adapter for ",(0,a.kt)("strong",{parentName:"td"},"Ember"),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development.")))),(0,a.kt)("h3",{id:"server-side-frameworks"},"Server-Side-Frameworks"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Framework"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/astro.png",width:"150",alt:"Astro logo"})),(0,a.kt)("td",{parentName:"tr",align:null},"The integration is done using the ",(0,a.kt)("b",null,"React and Preact components"),". The framework components are rendered server-side and the web components are rendered client-side.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/next.js.png",width:"150",alt:"Next.js logo"})),(0,a.kt)("td",{parentName:"tr",align:null},"The integration is done through the ",(0,a.kt)("b",null,"React-Components")," (CSR of the Web Components). The framework components are rendered on the server side and the Web Components on the client side.")))),(0,a.kt)("h2",{id:"aktuelle-trends"},"Aktuelle Trends"),(0,a.kt)("iframe",{src:"https://npmtrends.com/@angular/core-vs-next-vs-preact-vs-react-vs-vue-vs-astro-vs-svelte",style:{width:"100%",border:"0",height:"800px"}}))}c.isMDXComponent=!0}}]);