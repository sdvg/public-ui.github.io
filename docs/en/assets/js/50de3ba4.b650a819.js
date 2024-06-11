"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[52692],{73952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(76776),i=a(108),l=a(83716);const s={title:"Health state",description:"It is important that all modules of KoliBri remain up-to-date and healthy.",tags:["architekture","arc42","quality"]},o=void 0,r={id:"health-state",title:"Health state",description:"It is important that all modules of KoliBri remain up-to-date and healthy.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/90-health-state.mdx",sourceDirName:".",slug:"/health-state",permalink:"/en/docs/1.5/health-state",draft:!1,unlisted:!1,tags:[{inline:!0,label:"architekture",permalink:"/en/docs/1.5/tags/architekture"},{inline:!0,label:"arc42",permalink:"/en/docs/1.5/tags/arc-42"},{inline:!0,label:"quality",permalink:"/en/docs/1.5/tags/quality"}],version:"1.5",sidebarPosition:90,frontMatter:{title:"Health state",description:"It is important that all modules of KoliBri remain up-to-date and healthy.",tags:["architekture","arc42","quality"]},sidebar:"tutorialSidebar",previous:{title:"Changelog und Backlog",permalink:"/en/docs/1.5/changelog"},next:{title:"Legal notice",permalink:"/en/docs/1.5/impressum"}},c={},p=[];function m(e){const t={p:"p",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The following table shows a wide range of information on the packages to provide an overview of their health status."}),"\n",(0,n.jsx)(l.F,{lang:"en",version:"2"}),"\n",(0,n.jsx)("div",{style:{display:"block",padding:"1rem"}})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},83716:(e,t,a)=>{a.d(t,{F:()=>r});var n=a(83488),i=(a(80924),a(89248)),l=a(76776);const s=[{scope:"@public-ui",name:"components"},{scope:"@public-ui",name:"core"},{scope:"@public-ui",name:"schema"},{scope:"@public-ui",name:"themes"},{scope:"@public-ui",name:"angular-v17"},{scope:"@public-ui",name:"angular-v16"},{scope:"@public-ui",name:"angular-v15"},{scope:"@public-ui",name:"angular-v14"},{scope:"@public-ui",name:"angular-v13"},{scope:"@public-ui",name:"angular-v12"},{scope:"@public-ui",name:"angular-v11"},{scope:"@public-ui",name:"preact"},{scope:"@public-ui",name:"react"},{scope:"@public-ui",name:"solid"},{scope:"@public-ui",name:"vue"},{scope:"@public-ui",name:"hydrate"}],o=[{scope:"@public-ui",name:"components"},{scope:"@public-ui",name:"schema"},{scope:"@public-ui",name:"themes"},{scope:"@public-ui",name:"theme-default"},{scope:"@public-ui",name:"angular-v17"},{scope:"@public-ui",name:"angular-v16"},{scope:"@public-ui",name:"angular-v15"},{scope:"@public-ui",name:"angular-v14"},{scope:"@public-ui",name:"angular-v13"},{scope:"@public-ui",name:"angular-v12"},{scope:"@public-ui",name:"angular-v11"},{scope:"@public-ui",name:"preact"},{scope:"@public-ui",name:"react"},{scope:"@public-ui",name:"react-standalone"},{scope:"@public-ui",name:"solid"},{scope:"@public-ui",name:"vue"},{scope:"@public-ui",name:"hydrate"}],r=e=>{let{lang:t,version:a}=e;return"en"===t?(0,l.jsx)(n.Y9,{className:"col-12",_label:"List of status values for the packages",_minWidth:"95em",_headers:{horizontal:[[{label:"Package",key:"name",render:(e,t,a)=>`${(0,i.Y)(a.scope,a.name)}`,width:"15em"},{label:"Version",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://www.npmjs.com/package/${(0,i.Y)(a.scope,a.name)}" _target="npmjs">\n\t\t\t<img alt="NPM page of the package ${a.name}" src="https://img.shields.io/npm/v/${(0,i.Y)(a.scope,a.name)}" />\n\t\t</kol-link>`)},{label:"Downloads",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://npmcharts.com/compare/${(0,i.Y)(a.scope,a.name)}" _target="npmcharts">\n\t\t\t<img alt="NPM chart of the package ${a.name}" src="https://img.shields.io/npm/dt/${(0,i.Y)(a.scope,a.name)}.svg" />\n\t\t</kol-link>`)},{label:"Quality",key:"name",textAlign:"center",render:e=>(0,i.G)(e,'<img alt="" src="https://packagequality.com/shield/create-kolibri.svg" />')},{label:"Install size",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://packagephobia.com/result?p=${(0,i.Y)(a.scope,a.name)}" _target="packagephobia">\n\t\t\t<img alt="" src="https://packagephobia.now.sh/badge?p=${(0,i.Y)(a.scope,a.name)}" />\n\t\t</kol-link>`)},{label:"Dependencies",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://libraries.io/npm/${(0,i.Y)(a.scope,a.name,"%2F")}" _target="libraries">\n\t\t\t<img alt="" src="https://img.shields.io/librariesio/release/npm/${(0,i.Y)(a.scope,a.name)}" />\n\t\t</kol-link>`)},{label:"Health",key:"name",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,i.Y)(a.scope,a.name)}" _target="snyk">\n\t\t\t<img alt="" src="https://snyk.io/advisor/npm-package/${(0,i.Y)(a.scope,a.name)}/badge.svg" />\n\t\t</kol-link>`)},{label:"Vulnerabilities*",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,i.Y)(a.scope,a.name,"%2F")}" _target="snyk">\n\t\t\t<img alt="" src="https://snyk.io/test/npm/${(0,i.Y)(a.scope,a.name)}/badge.svg" />\n\t\t</kol-link>`)}]]},_data:"1"===a?s:o}):(0,l.jsx)(n.Y9,{className:"col-12",_label:"Liste von Statuswerte zu den Paketen",_minWidth:"95em",_headers:{horizontal:[[{label:"Package",key:"name",render:(e,t,a)=>`${(0,i.Y)(a.scope,a.name)}`,width:"15em"},{label:"Version",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://www.npmjs.com/package/${(0,i.Y)(a.scope,a.name)}" _target="npmjs" _label="">\n\t\t<img alt="NPM-Seite von dem Paket ${a.name}" slot="expert" src="https://img.shields.io/npm/v/${(0,i.Y)(a.scope,a.name)}" />\n\t</kol-link>`)},{label:"Downloads",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://npmcharts.com/compare/${(0,i.Y)(a.scope,a.name)}" _target="npmcharts" _label="">\n\t\t<img alt="NPM-Chart von dem Paket ${a.name}" slot="expert" src="https://img.shields.io/npm/dt/${(0,i.Y)(a.scope,a.name)}.svg" />\n\t</kol-link>`)},{label:"Quality",key:"name",textAlign:"center",render:e=>(0,i.G)(e,'<img alt="" slot="expert" src="https://packagequality.com/shield/create-kolibri.svg" />')},{label:"Install size",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://packagephobia.com/result?p=${(0,i.Y)(a.scope,a.name)}" _target="packagephobia" _label="">\n\t\t<img alt="" slot="expert" src="https://packagephobia.now.sh/badge?p=${(0,i.Y)(a.scope,a.name)}" />\n\t</kol-link>`)},{label:"Dependencies",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://libraries.io/npm/${(0,i.Y)(a.scope,a.name,"%2F")}" _target="libraries" _label="">\n\t\t<img alt="" slot="expert" src="https://img.shields.io/librariesio/release/npm/${(0,i.Y)(a.scope,a.name)}" />\n\t</kol-link>`)},{label:"Health",key:"name",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,i.Y)(a.scope,a.name)}" _target="snyk" _label="">\n\t\t<img alt="" slot="expert" src="https://snyk.io/advisor/npm-package/${(0,i.Y)(a.scope,a.name)}/badge.svg" />\n\t</kol-link>`)},{label:"Vulnerabilities*",key:"name",textAlign:"center",render:(e,t,a)=>(0,i.G)(e,`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,i.Y)(a.scope,a.name,"%2F")}" _target="snyk" _label="">\n\t\t<img alt="" slot="expert" src="https://snyk.io/test/npm/${(0,i.Y)(a.scope,a.name)}/badge.svg" />\n\t</kol-link>`)}]]},_data:"1"===a?s:o})}},89248:(e,t,a)=>{a.d(t,{G:()=>i,Y:()=>n});const n=function(e,t,a){return void 0===a&&(a="/"),e?`${e}${a}${t}`:`${t}`},i=(e,t)=>{e.innerHTML=t}},108:(e,t,a)=>{a.d(t,{I:()=>o,M:()=>s});var n=a(80924);const i={},l=n.createContext(i);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);