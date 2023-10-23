"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[80866],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88445:(e,t,n)=>{n.d(t,{d:()=>a});const a=function(e,t,n){return void 0===n&&(n="/"),e?`${e}${n}${t}`:`${t}`}},75799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(52319),r=(n(50959),n(17942)),i=n(28548),l=n(88445);const o={title:"Health state",description:"It is important that all modules of KoliBri remain up-to-date and healthy.",tags:["architekture","arc42","quality"]},s=void 0,c={unversionedId:"health-state",id:"health-state",title:"Health state",description:"It is important that all modules of KoliBri remain up-to-date and healthy.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/90-health-state.mdx",sourceDirName:".",slug:"/health-state",permalink:"/en/docs/next/health-state",draft:!1,tags:[{label:"architekture",permalink:"/en/docs/next/tags/architekture"},{label:"arc42",permalink:"/en/docs/next/tags/arc-42"},{label:"quality",permalink:"/en/docs/next/tags/quality"}],version:"current",sidebarPosition:90,frontMatter:{title:"Health state",description:"It is important that all modules of KoliBri remain up-to-date and healthy.",tags:["architekture","arc42","quality"]},sidebar:"tutorialSidebar",previous:{title:"Changelog und Backlog",permalink:"/en/docs/next/changelog"},next:{title:"Legal notice",permalink:"/en/docs/next/impressum"}},p={},u=[],m={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In der nachfolgenden Tabelle werden zahlreiche Informationen zu den Paketen angezeigt, um einen \xdcberblick \xfcber deren Gesundheitszustand zu erhalten."),(0,r.kt)(i.Vp,{className:"col-12",_caption:"List of status values for the packages",_minWidth:"95em",_headers:{horizontal:[[{label:"Package",key:"name",render:(e,t,n)=>`${(0,l.d)(n.scope,n.name)}`,width:"15em"},{label:"Version",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://www.npmjs.com/package/${(0,l.d)(n.scope,n.name)}" _target="npmjs">\n\t<img alt="" src="https://img.shields.io/npm/v/${(0,l.d)(n.scope,n.name)}" />\n</kol-link>`},{label:"Downloads",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://npmcharts.com/compare/${(0,l.d)(n.scope,n.name)}" _target="npmcharts">\n\t<img alt="" src="https://img.shields.io/npm/dt/${(0,l.d)(n.scope,n.name)}.svg" />\n</kol-link>`},{label:"Quality",key:"name",textAlign:"center",render:()=>'<img alt="" src="https://packagequality.com/shield/create-kolibri.svg" />'},{label:"Install size",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://packagephobia.com/result?p=${(0,l.d)(n.scope,n.name)}" _target="packagephobia">\n\t<img alt="" src="https://packagephobia.now.sh/badge?p=${(0,l.d)(n.scope,n.name)}" />\n</kol-link>`},{label:"Dependencies",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://libraries.io/npm/${(0,l.d)(n.scope,n.name,"%2F")}" _target="libraries">\n\t<img alt="" src="https://img.shields.io/librariesio/release/npm/${(0,l.d)(n.scope,n.name)}" />\n</kol-link>`},{label:"Health",key:"name",render:(e,t,n)=>`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,l.d)(n.scope,n.name)}" _target="snyk">\n\t<img alt="" src="https://snyk.io/advisor/npm-package/${(0,l.d)(n.scope,n.name)}/badge.svg" />\n</kol-link>`},{label:"Vulnerabilities*",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,l.d)(n.scope,n.name,"%2F")}" _target="snyk">\n\t<img alt="" src="https://snyk.io/test/npm/${(0,l.d)(n.scope,n.name)}/badge.svg" />\n</kol-link>`}]]},_data:[{scope:"@public-ui",name:"components"},{scope:"@public-ui",name:"core"},{scope:"@public-ui",name:"schema"},{scope:"@public-ui",name:"themes"},{scope:"@public-ui",name:"angular-v15"},{scope:"@public-ui",name:"angular-v14"},{scope:"@public-ui",name:"angular-v13"},{scope:"@public-ui",name:"angular-v12"},{scope:"@public-ui",name:"angular-v11"},{scope:"@public-ui",name:"preact"},{scope:"@public-ui",name:"react"},{scope:"@public-ui",name:"solid"},{scope:"@public-ui",name:"vue"},{scope:"@public-ui",name:"hydrate"}],mdxType:"KolTable"}),(0,r.kt)("div",{style:{display:"block",padding:"1rem"}}))}h.isMDXComponent=!0}}]);