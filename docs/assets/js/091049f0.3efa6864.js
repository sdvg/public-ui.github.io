"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[38640],{82172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=n(76776),r=n(108),i=n(89544);const l={title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht."},d="Testergebnisse",o={id:"test-results",title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht.",source:"@site/versioned_docs/version-1.7/60-test-results.mdx",sourceDirName:".",slug:"/test-results",permalink:"/docs/1.7/test-results",draft:!1,unlisted:!1,tags:[],version:"1.7",sidebarPosition:60,frontMatter:{title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht."},sidebar:"tutorialSidebar",previous:{title:"Formular-Handling",permalink:"/docs/1.7/formular-handling"},next:{title:"Changelog und Backlog",permalink:"/docs/1.7/changelog"}},c={},a=[{value:"BITV-Test",id:"bitv-test",level:2},{value:"Ergebnisse",id:"ergebnisse",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"testergebnisse",children:"Testergebnisse"}),"\n",(0,s.jsxs)(t.p,{children:["Auf dieser Seite werden regelm\xe4\xdfig die Testergebnisse der Komponenten und Themes ver\xf6ffentlicht, die durch das ITZBund gepflegt werden. Die Tests werden mit dem ",(0,s.jsx)(t.a,{href:"https://www.bitvtest.de/bitv_test.html",children:"BITV-Test"})," durchgef\xfchrt."]}),"\n",(0,s.jsx)(t.h2,{id:"bitv-test",children:"BITV-Test"}),"\n",(0,s.jsxs)(t.p,{children:["Der ",(0,s.jsx)(t.a,{href:"https://www.bitvtest.de/bitv_test.html",children:"BITV-Test"})," ist ein Pr\xfcfverfahren zur \xdcberpr\xfcfung der Barrierefreiheit von Websites gem\xe4\xdf der Barrierefreie-Informationstechnik-Verordnung (BITV) in Deutschland. Dabei werden verschiedene Kriterien und Richtlinien ber\xfccksichtigt, um sicherzustellen, dass Menschen mit Behinderungen die Website problemlos nutzen k\xf6nnen. Der Test umfasst Aspekte wie die Zug\xe4nglichkeit von Inhalten f\xfcr Screenreader, die Anpassungsf\xe4higkeit der Website f\xfcr verschiedene Ger\xe4te und Bildschirmgr\xf6\xdfen, die Verwendung geeigneter Farbkontraste f\xfcr Menschen mit Sehbehinderungen, die Bereitstellung alternativer Texte f\xfcr Bilder und die Vermeidung von Technologien, die Zug\xe4nglichkeitsprobleme verursachen k\xf6nnen. Durch den ",(0,s.jsx)(t.a,{href:"https://www.bitvtest.de/bitv_test.html",children:"BITV-Test"})," k\xf6nnen Website-Betreiber sicherstellen, dass ihre Websites den gesetzlichen Anforderungen an Barrierefreiheit entsprechen und eine gleichberechtigte Nutzung f\xfcr alle Benutzer erm\xf6glichen."]}),"\n",(0,s.jsx)(t.h2,{id:"ergebnisse",children:"Ergebnisse"}),"\n",(0,s.jsx)(t.p,{children:"In der folgenden Tabelle sind die Testergebnisse der Komponenten und Themes aufgelistet, die durch das ITZBund gepflegt werden. Die Ergebnisse werden regelm\xe4\xdfig aktualisiert."}),"\n",(0,s.jsx)(i.E,{})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},89544:(e,t,n)=>{n.d(t,{E:()=>b});var s=n(94368),r=n(51376),i=n(80924),l=n(82520),d=n(552);const o=["Abbr","Accordion","Alert","Badge","Breadcrumb","Button","ButtonGroup","ButtonLink","Card","Details","Heading","Icon","IndentedText","InputCheckbox","InputColor","InputDate","InputEmail","InputFile"];async function c(e,t){return await(0,l.c)(e,{sheet:t})}function a(e,t){return void 0===t&&(t={}),new Promise((n=>{0===e.length&&n(t);const s=e.shift(),{sheet:r,promise:i}=s;i.then((s=>{t[r]=s,n(a(e,t))}))}))}const h=async()=>{try{const e=await fetch("/test-results/bitv-test.xlsx"),t=await e.blob(),n=await(0,d.c)(t),s=[];return n.forEach((e=>{o.includes(e)&&s.push({sheet:e,promise:c(t,e)})})),a(s)}catch(e){throw Error(`Excel file not found: ${e}`)}};var u=n(76776);function g(e,t){let n=0,s=0;for(let r=2;r<e.length;r++)switch(s++,e[r][t]){case"erf\xfcllt":n++;break;case"nicht erf\xfcllt":case"teilweise erf\xfcllt":break;default:s--}return`${n}/${s}`}const f=()=>{const[e,t]=(0,i.useState)([]);return(0,i.useEffect)((()=>{h().then((e=>{console.log(e);const n=[];for(const t in e)n.push((s=t,r=e[t],{component:s,bmf:g(r,2),zoll:g(r,4)}));var s,r;t(n),console.log(n)})).catch((e=>{console.warn(e)}))}),[]),(0,u.jsx)(r.Y9,{_label:"\xdcbersicht der Testergebnisse der KoliBri-Komponenten",_headers:{horizontal:[[{label:"Component",key:"component"},{label:"BMF",key:"bmf",textAlign:"center"},{label:"Zoll (v2)",key:"zoll",textAlign:"center"}]]},_data:e})},b=()=>(0,u.jsx)(s.c,{children:()=>(0,u.jsx)(f,{})})}}]);