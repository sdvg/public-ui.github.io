"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[54363],{69572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var s=t(11527),i=t(16034);function r(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"toaster",children:"Toaster"}),"\n",(0,s.jsxs)(n.p,{children:["Mit dem ",(0,s.jsx)(n.strong,{children:"Toaster"})," geben Sie ein optisches Feedback an die Nutzer",":innen",". Sie wird am Kopf des Browserfenster\nangezeigt, bis sie geschlossen wird. Werden mehrere Toasts ge\xf6ffnet, ohne das die bisherigen geschlossen wurden, so werden diese untereinander angezeigt."]}),"\n",(0,s.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,s.jsx)(n.p,{children:"Ein Toast wird nicht direkt verwendet, sondern immer \xfcber den ToasterService konstruiert."}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { ToasterService } from '@public-ui/components';\n\n// Get the toaster instance for the current HTML document.\nconst toaster = ToasterService.getInstance(document);\n\n// Enqueue a new toast to the toaster to display:\ntoaster.enqueue({\n\tlabel: 'This is the title',\n\tdescription: 'Magna eu sit adipisicing cillum amet esse in aute quis in dolore.',\n\ttype: 'info',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,s.jsx)(n.h3,{id:"\xfcberschrift",children:"\xdcberschrift"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_label"})}),", um die \xdcberschrift des Toasts zu bestimmen."]}),"\n",(0,s.jsx)(n.h3,{id:"inhalt",children:"Inhalt"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_description"})}),", um den Text-Inhalt des Toasts zu bestimmen."]}),"\n",(0,s.jsx)(n.h3,{id:"anzeigetyp-des-toast",children:"Anzeigetyp des Toast"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_type"})}),", um den Typ des Toasts festzulegen. M\xf6gliche Werte sind:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"default"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"error"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"info"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"success"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"warning"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}const c={title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",tags:["Toast","Beschreibung","Spezifikation","Beispiele"]},d=void 0,a={id:"components/toaster",title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",source:"@site/versioned_docs/version-2.0/30-components/toaster.mdx",sourceDirName:"30-components",slug:"/components/toaster",permalink:"/en/docs/components/toaster",draft:!1,unlisted:!1,tags:[{label:"Toast",permalink:"/en/docs/tags/toast"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"2.0",frontMatter:{title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",tags:["Toast","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Textarea",permalink:"/en/docs/components/textarea"},next:{title:"Tooltip",permalink:"/en/docs/components/tooltip"}},l={},h=[];function p(e){return(0,s.jsx)(o,{})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p()}},16034:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(50959);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);