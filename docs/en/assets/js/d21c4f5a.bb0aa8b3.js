"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1485],{83854:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=i(11527),o=i(16034);const t={},s="Migration",a={id:"migration",title:"Migration",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/50-migration.mdx",sourceDirName:".",slug:"/migration",permalink:"/en/docs/next/migration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/en/docs/next/project/roadmap"},next:{title:"Testergebnisse",permalink:"/en/docs/next/test-results"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Migration from version 1 to version 2",id:"migration-from-version-1-to-version-2",level:2},{value:"Notes on upgrading to version 2",id:"notes-on-upgrading-to-version-2",level:3},{value:"Breaking changes for version 2",id:"breaking-changes-for-version-2",level:3},{value:"Perform migration",id:"perform-migration",level:2},{value:"Migration with migration tool",id:"migration-with-migration-tool",level:3},{value:"Perform migration manually",id:"perform-migration-manually",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"migration",children:"Migration"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"New major versions of KoliBri are developed with the aim of simplifying maintenance and support and promoting further development."}),"\n",(0,r.jsx)(n.p,{children:"This means that components, features or functionalities may be removed and technological prerequisites created to promote future innovative change."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Maintenance and care strategy:"}),(0,r.jsx)("br",{}),"\nWe will always maintain the latest and previous major version of KoliBri. This means that we will fix bugs and close security gaps for these versions. For all other versions, we will no longer provide bug fixes or security updates without further notice."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Further development:"}),(0,r.jsx)("br",{}),"\nWe will always continue to develop the latest major version of KoliBri. This means that we will provide new features and functionalities for these versions. For all other versions, we will no longer provide any new features or functionalities without further ado."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Save an executable version before migration:"}),(0,r.jsx)("br",{}),"\nBefore the migration takes place, we recommend checking in an executable version so that there are no uncommitted changes to the source code to be migrated. This means that all changes can be easily tracked and checked during and after the migration."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Migrationstool:"}),(0,r.jsx)("br",{}),"\nWe provide a migration tool that generally supports the migration of source code with KoliBri. This tool is able to migrate most breaking changes automatically. Further information can be found in the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@public-ui/kolibri-cli",children:"Tool-Dokumentation (EN)"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Help and feedback:"}),(0,r.jsx)("br",{}),"\nIf there are any problems with the migration, we are happy to help. Please open an ",(0,r.jsx)(n.a,{href:"https://github.com/public-ui/kolibri/issues/new/choose",children:"Issue on GitHub"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"migration-from-version-1-to-version-2",children:"Migration from version 1 to version 2"}),"\n",(0,r.jsx)(n.h3,{id:"notes-on-upgrading-to-version-2",children:"Notes on upgrading to version 2"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New features in version 2 already available from version 1.7:"}),(0,r.jsx)("br",{}),"\nMost of the new features introduced in version 2 are already available from version 1.7 and higher. This means that applications based on version 1.7 or higher may already have the necessary functions to enable a smooth migration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Removed properties, components and functionalities were already marked as obsolete in version 1.7 and higher:"}),(0,r.jsx)("br",{}),"\nAll features, components and functionalities that were removed in version 2 were already marked as deprecated in version 1.7 and higher. So if you have regularly updated your code base, you should already be prepared to replace these elements."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Migration from version 1.7 minimizes potential changes:"}),(0,r.jsx)("br",{}),"\nA migration from version 1.7 and higher to version 2 will probably require the least adjustments. The likelihood of incompatibilities is low, as most changes and removals have already been marked as obsolete in previous versions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Migration from version 1.4 is possible:"}),(0,r.jsx)("br",{}),"\nAlthough a migration from version 1.7 is recommended, it is also possible to migrate from version 1.4 to version 2. Please note, however, that this may require additional adjustments, as some of the necessary functions may only be available from version 1.7."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note simplified registration:"}),(0,r.jsx)("br",{}),"\nWe have simplified the modularization of KoliBri in version 1 and for version 2. The module ",(0,r.jsx)(n.code,{children:"@public-ui/core"})," has been removed and the functionalities moved to the module ",(0,r.jsx)(n.code,{children:"@public-ui/components"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" - import { register } from '@public-ui/core';\n + import { register } from '@public-ui/components';\n import { defineCustomElements } from '@public-ui/components/dist/loader';\n import { MyTheme } from '...';\n await register(MyTheme, defineCustomElements);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"breaking-changes-for-version-2",children:"Breaking changes for version 2"}),"\n",(0,r.jsxs)(n.p,{children:["You can find more information about Breaking Changes in the documentation ",(0,r.jsx)(n.a,{href:"https://github.com/public-ui/kolibri/blob/develop/docs/BREAKING_CHANGES.v2.md",children:"BREAKING_CHANGES.v2.md (EN)"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"perform-migration",children:"Perform migration"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["[!TIP]\nWe recommend carrying out the migration with the migration tool. This tool is able to migrate most breaking changes automatically. Further information can be found in the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@public-ui/kolibri-cli",children:"Tool-Dokumentation (EN)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"migration-with-migration-tool",children:"Migration with migration tool"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Preparation:"}),(0,r.jsx)("br",{}),"\nThe project is on an earlier version, all dependencies are installed, the project is executable and all changes are checked in and safely pushed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Execute migration:"}),(0,r.jsx)("br",{}),"\nExecute the following command to perform the migration: ",(0,r.jsx)(n.code,{children:"npx @public-ui/kolibri-cli migrate src"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Check migration:"}),(0,r.jsx)("br",{}),"\nCheck the changes and run the application to make sure everything works as expected."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"perform-migration-manually",children:"Perform migration manually"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Preparation:"}),(0,r.jsx)("br",{}),"\nThe project is on an earlier version, all dependencies are installed, the project is executable and all changes are checked in and safely pushed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Perform migration:"}),(0,r.jsx)("br",{}),"\nCarry out the migration by making the breaking changes in the respective documentation."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},16034:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var r=i(50959);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);