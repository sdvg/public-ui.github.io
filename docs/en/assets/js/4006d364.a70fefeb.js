"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[51581],{75610:(e,t,n)=>{n.d(t,{O:()=>b});var r=n(60112),s=n(94047),i=n(50959),l=n(46956),o=n(78367);const d=["Abbr","Accordion","Alert","Badge","Breadcrumb","Button","ButtonGroup","ButtonLink","Card","Details","Heading","Icon","IndentedText","InputCheckbox","InputColor","InputDate","InputEmail","InputFile"];async function a(e,t){return await(0,l.Z)(e,{sheet:t})}function u(e,t){return void 0===t&&(t={}),new Promise((n=>{0===e.length&&n(t);const r=e.shift(),{sheet:s,promise:i}=r;i.then((r=>{t[s]=r,n(u(e,t))}))}))}const c=async()=>{try{const e=await fetch("/test-results/bitv-test.xlsx"),t=await e.blob(),n=await(0,o.Z)(t),r=[];return n.forEach((e=>{d.includes(e)&&r.push({sheet:e,promise:a(t,e)})})),u(r)}catch(e){throw Error(`Excel file not found: ${e}`)}};function h(e,t){let n=0,r=0;for(let s=2;s<e.length;s++)switch(r++,e[s][t]){case"erf\xfcllt":n++;break;case"nicht erf\xfcllt":case"teilweise erf\xfcllt":break;default:r--}return`${n}/${r}`}const g=()=>{const[e,t]=(0,i.useState)([]);return(0,i.useEffect)((()=>{c().then((e=>{console.log(e);const n=[];for(const t in e)n.push((r=t,s=e[t],{component:r,bmf:h(s,2),zoll:h(s,4)}));var r,s;t(n),console.log(n)})).catch((e=>{console.warn(e)}))}),[]),i.createElement(s.Vp,{_label:"\xdcbersicht der Testergebnisse der KoliBri-Komponenten",_headers:{horizontal:[[{label:"Component",key:"component"},{label:"BMF",key:"bmf",textAlign:"center"},{label:"Zoll (v2)",key:"zoll",textAlign:"center"}]]},_data:e})},b=()=>i.createElement(r.Z,null,(()=>i.createElement(g,null)))},1913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(52319),s=(n(50959),n(17942)),i=n(75610);const l={title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht."},o="Testergebnisse",d={unversionedId:"test-results",id:"test-results",title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht.",source:"@site/docs/60-test-results.mdx",sourceDirName:".",slug:"/test-results",permalink:"/en/docs/next/test-results",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht."},sidebar:"tutorialSidebar",previous:{title:"Form handling",permalink:"/en/docs/next/formular-handling"},next:{title:"Changelog und Backlog",permalink:"/en/docs/next/changelog"}},a={},u=[{value:"BITV-Test",id:"bitv-test",level:2},{value:"Ergebnisse",id:"ergebnisse",level:2}],c={toc:u},h="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testergebnisse"},"Testergebnisse"),(0,s.kt)("p",null,"Auf dieser Seite werden regelm\xe4\xdfig die Testergebnisse der Komponenten und Themes ver\xf6ffentlicht, die durch das ITZBund gepflegt werden. Die Tests werden mit dem ",(0,s.kt)("a",{parentName:"p",href:"https://www.bitvtest.de/bitv_test.html"},"BITV-Test")," durchgef\xfchrt."),(0,s.kt)("h2",{id:"bitv-test"},"BITV-Test"),(0,s.kt)("p",null,"Der ",(0,s.kt)("a",{parentName:"p",href:"https://www.bitvtest.de/bitv_test.html"},"BITV-Test")," ist ein Pr\xfcfverfahren zur \xdcberpr\xfcfung der Barrierefreiheit von Websites gem\xe4\xdf der Barrierefreie-Informationstechnik-Verordnung (BITV) in Deutschland. Dabei werden verschiedene Kriterien und Richtlinien ber\xfccksichtigt, um sicherzustellen, dass Menschen mit Behinderungen die Website problemlos nutzen k\xf6nnen. Der Test umfasst Aspekte wie die Zug\xe4nglichkeit von Inhalten f\xfcr Screenreader, die Anpassungsf\xe4higkeit der Website f\xfcr verschiedene Ger\xe4te und Bildschirmgr\xf6\xdfen, die Verwendung geeigneter Farbkontraste f\xfcr Menschen mit Sehbehinderungen, die Bereitstellung alternativer Texte f\xfcr Bilder und die Vermeidung von Technologien, die Zug\xe4nglichkeitsprobleme verursachen k\xf6nnen. Durch den ",(0,s.kt)("a",{parentName:"p",href:"https://www.bitvtest.de/bitv_test.html"},"BITV-Test")," k\xf6nnen Website-Betreiber sicherstellen, dass ihre Websites den gesetzlichen Anforderungen an Barrierefreiheit entsprechen und eine gleichberechtigte Nutzung f\xfcr alle Benutzer erm\xf6glichen."),(0,s.kt)("h2",{id:"ergebnisse"},"Ergebnisse"),(0,s.kt)("p",null,"In der folgenden Tabelle sind die Testergebnisse der Komponenten und Themes aufgelistet, die durch das ITZBund gepflegt werden. Die Ergebnisse werden regelm\xe4\xdfig aktualisiert."),(0,s.kt)(i.O,{mdxType:"BitvTestResults"}))}g.isMDXComponent=!0}}]);