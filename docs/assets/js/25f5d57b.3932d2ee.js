"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[75288],{51816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(76776),s=n(108),l=n(83716);const i={title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",tags:["Architektur","arc42","Qualit\xe4t"]},o=void 0,r={id:"health-state",title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",source:"@site/versioned_docs/version-1.7/90-health-state.mdx",sourceDirName:".",slug:"/health-state",permalink:"/docs/1.7/health-state",draft:!1,unlisted:!1,tags:[{label:"Architektur",permalink:"/docs/1.7/tags/architektur"},{label:"arc42",permalink:"/docs/1.7/tags/arc-42"},{label:"Qualit\xe4t",permalink:"/docs/1.7/tags/qualitat"}],version:"1.7",sidebarPosition:90,frontMatter:{title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",tags:["Architektur","arc42","Qualit\xe4t"]},sidebar:"tutorialSidebar",previous:{title:"Changelog und Backlog",permalink:"/docs/1.7/changelog"},next:{title:"Impressum",permalink:"/docs/1.7/impressum"}},c={},p=[];function m(e){const t={p:"p",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In der nachfolgenden Tabelle werden zahlreiche Informationen zu den Paketen angezeigt, um einen \xdcberblick \xfcber deren Gesundheitszustand zu erhalten."}),"\n",(0,a.jsx)(l.F,{lang:"de",version:"1"}),"\n",(0,a.jsx)("div",{style:{display:"block",padding:"1rem"}})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},83716:(e,t,n)=>{n.d(t,{F:()=>r});var a=n(51376),s=(n(80924),n(89248)),l=n(76776);const i=[{scope:"@public-ui",name:"components"},{scope:"@public-ui",name:"core"},{scope:"@public-ui",name:"schema"},{scope:"@public-ui",name:"themes"},{scope:"@public-ui",name:"angular-v17"},{scope:"@public-ui",name:"angular-v16"},{scope:"@public-ui",name:"angular-v15"},{scope:"@public-ui",name:"angular-v14"},{scope:"@public-ui",name:"angular-v13"},{scope:"@public-ui",name:"angular-v12"},{scope:"@public-ui",name:"angular-v11"},{scope:"@public-ui",name:"preact"},{scope:"@public-ui",name:"react"},{scope:"@public-ui",name:"solid"},{scope:"@public-ui",name:"vue"},{scope:"@public-ui",name:"hydrate"}],o=[{scope:"@public-ui",name:"components"},{scope:"@public-ui",name:"schema"},{scope:"@public-ui",name:"themes"},{scope:"@public-ui",name:"theme-default"},{scope:"@public-ui",name:"angular-v17"},{scope:"@public-ui",name:"angular-v16"},{scope:"@public-ui",name:"angular-v15"},{scope:"@public-ui",name:"angular-v14"},{scope:"@public-ui",name:"angular-v13"},{scope:"@public-ui",name:"angular-v12"},{scope:"@public-ui",name:"angular-v11"},{scope:"@public-ui",name:"preact"},{scope:"@public-ui",name:"react"},{scope:"@public-ui",name:"react-standalone"},{scope:"@public-ui",name:"solid"},{scope:"@public-ui",name:"vue"},{scope:"@public-ui",name:"hydrate"}],r=e=>{let{lang:t,version:n}=e;return"en"===t?(0,l.jsx)(a.Y9,{className:"col-12",_label:"List of status values for the packages",_minWidth:"95em",_headers:{horizontal:[[{label:"Package",key:"name",render:(e,t,n)=>`${(0,s.Y)(n.scope,n.name)}`,width:"15em"},{label:"Version",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://www.npmjs.com/package/${(0,s.Y)(n.scope,n.name)}" _target="npmjs">\n\t\t\t<img alt="NPM page of the package ${n.name}" src="https://img.shields.io/npm/v/${(0,s.Y)(n.scope,n.name)}" />\n\t\t</kol-link>`)},{label:"Downloads",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://npmcharts.com/compare/${(0,s.Y)(n.scope,n.name)}" _target="npmcharts">\n\t\t\t<img alt="NPM chart of the package ${n.name}" src="https://img.shields.io/npm/dt/${(0,s.Y)(n.scope,n.name)}.svg" />\n\t\t</kol-link>`)},{label:"Quality",key:"name",textAlign:"center",render:e=>(0,s.G)(e,'<img alt="" src="https://packagequality.com/shield/create-kolibri.svg" />')},{label:"Install size",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://packagephobia.com/result?p=${(0,s.Y)(n.scope,n.name)}" _target="packagephobia">\n\t\t\t<img alt="" src="https://packagephobia.now.sh/badge?p=${(0,s.Y)(n.scope,n.name)}" />\n\t\t</kol-link>`)},{label:"Dependencies",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://libraries.io/npm/${(0,s.Y)(n.scope,n.name,"%2F")}" _target="libraries">\n\t\t\t<img alt="" src="https://img.shields.io/librariesio/release/npm/${(0,s.Y)(n.scope,n.name)}" />\n\t\t</kol-link>`)},{label:"Health",key:"name",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,s.Y)(n.scope,n.name)}" _target="snyk">\n\t\t\t<img alt="" src="https://snyk.io/advisor/npm-package/${(0,s.Y)(n.scope,n.name)}/badge.svg" />\n\t\t</kol-link>`)},{label:"Vulnerabilities*",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,s.Y)(n.scope,n.name,"%2F")}" _target="snyk">\n\t\t\t<img alt="" src="https://snyk.io/test/npm/${(0,s.Y)(n.scope,n.name)}/badge.svg" />\n\t\t</kol-link>`)}]]},_data:"1"===n?i:o}):(0,l.jsx)(a.Y9,{className:"col-12",_label:"Liste von Statuswerte zu den Paketen",_minWidth:"95em",_headers:{horizontal:[[{label:"Package",key:"name",render:(e,t,n)=>`${(0,s.Y)(n.scope,n.name)}`,width:"15em"},{label:"Version",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://www.npmjs.com/package/${(0,s.Y)(n.scope,n.name)}" _target="npmjs" _label="">\n\t\t<img alt="NPM-Seite von dem Paket ${n.name}" slot="expert" src="https://img.shields.io/npm/v/${(0,s.Y)(n.scope,n.name)}" />\n\t</kol-link>`)},{label:"Downloads",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://npmcharts.com/compare/${(0,s.Y)(n.scope,n.name)}" _target="npmcharts" _label="">\n\t\t<img alt="NPM-Chart von dem Paket ${n.name}" slot="expert" src="https://img.shields.io/npm/dt/${(0,s.Y)(n.scope,n.name)}.svg" />\n\t</kol-link>`)},{label:"Quality",key:"name",textAlign:"center",render:e=>(0,s.G)(e,'<img alt="" slot="expert" src="https://packagequality.com/shield/create-kolibri.svg" />')},{label:"Install size",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://packagephobia.com/result?p=${(0,s.Y)(n.scope,n.name)}" _target="packagephobia" _label="">\n\t\t<img alt="" slot="expert" src="https://packagephobia.now.sh/badge?p=${(0,s.Y)(n.scope,n.name)}" />\n\t</kol-link>`)},{label:"Dependencies",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://libraries.io/npm/${(0,s.Y)(n.scope,n.name,"%2F")}" _target="libraries" _label="">\n\t\t<img alt="" slot="expert" src="https://img.shields.io/librariesio/release/npm/${(0,s.Y)(n.scope,n.name)}" />\n\t</kol-link>`)},{label:"Health",key:"name",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,s.Y)(n.scope,n.name)}" _target="snyk" _label="">\n\t\t<img alt="" slot="expert" src="https://snyk.io/advisor/npm-package/${(0,s.Y)(n.scope,n.name)}/badge.svg" />\n\t</kol-link>`)},{label:"Vulnerabilities*",key:"name",textAlign:"center",render:(e,t,n)=>(0,s.G)(e,`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,s.Y)(n.scope,n.name,"%2F")}" _target="snyk" _label="">\n\t\t<img alt="" slot="expert" src="https://snyk.io/test/npm/${(0,s.Y)(n.scope,n.name)}/badge.svg" />\n\t</kol-link>`)}]]},_data:"1"===n?i:o})}},89248:(e,t,n)=>{n.d(t,{G:()=>s,Y:()=>a});const a=function(e,t,n){return void 0===n&&(n="/"),e?`${e}${n}${t}`:`${t}`},s=(e,t)=>{e.innerHTML=t}},108:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>i});var a=n(80924);const s={},l=a.createContext(s);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);