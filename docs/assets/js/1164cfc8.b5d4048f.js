"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[75486],{16786:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>g,toc:()=>h});var t=i(11527),s=i(16034),r=i(32404),o=i(3782),d=i(1176);const l={},a="Theming",g={id:"concepts/styling/theming",title:"Theming",description:"<img",source:"@site/versioned_docs/version-2.0/20-concepts/05-styling/34-theming.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/theming",permalink:"/docs/concepts/styling/theming",draft:!1,unlisted:!1,tags:[],version:"2.0",sidebarPosition:34,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testvorgehen",permalink:"/docs/concepts/test"},next:{title:"Designer",permalink:"/docs/concepts/styling/designer"}},c={},h=[];function m(e){const n={h1:"h1",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"theming",children:"Theming"}),"\n",(0,t.jsxs)("kol-alert",{_type:"info",children:[(0,t.jsx)("img",{width:"100%",src:"/assets/theme-switch.png",alt:"Zeigt, wo der Schalter zum Umschalten des Themes in der Toolbar ist."}),(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("kol-icon",{_icons:"codicon codicon-arrow-right"}),"\xdcber den Schalter in der Toolbar oben k\xf6nnen Sie das Theme\nvon unserer Seite (KoliBri) umschalten."]})})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.p,{children:["Das Einzigartige an ",(0,t.jsx)(o.p,{})," ist die ",(0,t.jsx)("strong",{children:"Referenzimplementierung"})," von Komponenten, die von Grund auf"," ","\n",(0,t.jsx)("strong",{children:"semantisch W3C- und WCAG-konform"})," und damit ",(0,t.jsx)("strong",{children:"vollst\xe4ndig barrierefrei"})," bez\xfcglich der\nassistiven Unterst\xfctzung sind. Alle Komponenten werden dabei als"," "]}),(0,t.jsx)(r.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components?retiredLocale=de",_target:"mozilla",_label:"Web Components"})," ",(0,t.jsx)(n.p,{children:"umgesetzt und sind somit in allen webbasierten Projekten wiederverwendbar. In der folgenden Abbildung werden diese\nKomponenten durch die grau-gestrichelten Formen in der Mitte dargestellt."})]}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)(r.CV,{children:(0,t.jsx)("strong",{children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"KoliBri-Komponenten k\xf6nnten als Basis f\xfcr alle Design Systeme oder Komponenten-Bibliotheken wiederverwendet\nwerden."}),"\n"]})})})}),"\n",(0,t.jsx)("img",{src:"/assets/abgrenzung.jpg",alt:"Darstellung, wie die Komponenten mittels verschiedener Styleguides zu kundenspezifischen Komponenten werden."}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.p,{children:["Im ersten Release (v1.0) hatte ",(0,t.jsx)(o.p,{})," noch direkt das Individualisieren des Standard-Designs mittels sogenannter"," "]}),(0,t.jsx)("strong",{children:(0,t.jsx)(r.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",_target:"mozilla",_label:"CSS-Properties"})})," ",(0,t.jsx)(n.p,{children:"("}),(0,t.jsx)(r.Nv,{_href:"https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71",_target:"uxdesign",_label:"Design-Tokens"}),(0,t.jsxs)(n.p,{children:[", ",(0,t.jsx)(r.Nv,{_href:"https://tailwindcss.com",_target:"tailwindcss",_label:"Tailwind CSS"}),") umgesetzt. Mit der\nUmsetzung weiterer Themes haben wir jedoch festgestellt, dass wir immer mehr CSS-Properties einf\xfchren m\xfcssten, um die\nFlexiblit\xe4t f\xfcr das gew\xfcnschte Design/UX (Corporate Design/Styleguide) umsetzen zu k\xf6nnen. Im Zweifel m\xfcsste f\xfcr jede\nAnpassbarkeit ein separates Property vorgesehen werden. Am Beispiel des"," ","\n",(0,t.jsx)(r.Nv,{_href:"https://mui.com/material-ui/api/button/#css",_target:"mui",_label:"MUI-Button CSS"})," ist gut\nerkennbar, wie die CSS-Properties (Design Token) immer mehr werden."]})]}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)(r.CV,{children:(0,t.jsxs)("strong",{children:[(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Wir haben das ganze CSS vollst\xe4ndig von den Components entkoppelt (like"," "]}),"\n"]}),(0,t.jsx)(r.Nv,{_href:"https://styled-components.com",_target:"styled-components",_label:"Styled-Components"}),(0,t.jsx)(n.p,{children:")."})]})})}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)(n.p,{children:"Mithilfe des Designers kann ein \u201eMandant\u201c die Komponenten einzeln und vollst\xe4ndig unabh\xe4ngig voneinander mit der\ngesamten CSS-Freiheit gestalten. Innerhalb eines \u201eMandanten\u201c-Themes k\xf6nnen eigene CSS-Properties eingef\xfchrt werden.\nDie Nutzung von CSS-Properties (Design-Tokens) bleibt somit auf Theme-Ebene erhalten, jedoch mit einem viel kleineren\nund pflegbaren Scope."})}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)(r.CV,{children:(0,t.jsx)("strong",{children:(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"KoliBri erm\xf6glicht die Wiederverwendung getesteter, barrierefreier und robuster Komponenten(-konstruktionen)\nbei nahezu individuellem Design und stellt damit einen im Rahmen der Barrierefreiheit frei gestaltbaren\nHTML-Standard dar."}),"\n"]})})})}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)(n.p,{children:"Im folgenden Diagramm wird ein beispielhafter Design-Prozess mit KoliBri dargestellt, der vollkommen unabh\xe4ngig vom\nKoliBri-Team angewendet werden kann."})}),"\n",(0,t.jsx)(d.G$,{code:"\nstateDiagram-v2\n\tdirection LR\n\ts1: <strong>Spezifikation</strong>\n\ts1: UI/UX-Team\n\ts2: <strong>Design-Tokens</strong>\n\ts2: JSON\n\ts3: <strong>Style-Files</strong>\n\ts3: CSS\n\ts4: <strong>Designer</strong>\n\ts4: KoliBri\n\ts5: <strong>Theme</strong>\n\ts5: KoliBri\n\tnote right of s1\n\t\t<strong>Tools:</strong> Adobe XD, Figma, Sketch u.a.\n\t\t<strong>Technik:</strong> CSS-Properties, Design-Tokens\n\tend note\n\tnote right of s2\n\t\tExport-<strong>Plugin</strong>\n\tend note\n\tnote right of s3\n\t\tSet of CSS-Properties\n\tend note\n\tnote right of s5\n\t\tSharable <strong>NPM-Paket</strong>\n\tend note\n\t[*] --\x3e s1\n\ts1 --\x3e s2 : Plugin\n\ts2 --\x3e s3 : Script\n\ts3 --\x3e s5\n\ts1 --\x3e s4\n\ts4 --\x3e s5\n\ts5 --\x3e [*]"}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Das UI/UX-Team spezifiziert beispielsweise mit Figma die Komponenten ihres Design-Systems. Bei der \xdcberf\xfchrung der\nSpezifikation in die Realisierung wird das Design in Form von reinem CSS mittels des"," ","\n",(0,t.jsx)(r.Nv,{_href:"/docs/concepts/styling/designer",_label:"KoliBri-Designers"})," auf die Basis-Komponenten\n\u201e\xfcbertragen\u201c. Wenn im eigenen Design-System eine Individualisierbarkeit gew\xfcnscht ist, k\xf6nnen im Designer daf\xfcr\nCSS-Properties oder Design-Tokens definiert werden. Damit das eigene Theme \xfcber Projekte hinweg geteilt werden kann,\nwird das Theme in ein NPM-Paket paketiert und kann \xfcber eine beliebige Registry bereitgestellt werden."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)(r.ox,{_label:"Design-Tokens",children:(0,t.jsx)(n.p,{children:"Optional k\xf6nnen beispielsweise aus Figma, mittels Design-Tokens, Design-Schemata exportiert werden. Diese k\xf6nnen\ndann in separate CSS-Dateien \xfcberf\xfchrt werden, die die jeweiligen Werte zu den CSS-Properties enthalten. Sp\xe4ter wird\neine dieser CSS-Dateien verwendet, um das konkrete Design in Kombination mit den Web Components und dem Theme in der\nWebseite anzuwenden."})})}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)(r.ox,{_label:"Dark-Mode",children:(0,t.jsx)(n.p,{children:'Optional kann auch ein "Dark-Mode"-Theme umgesetzt werden. Hierzu kann das erforderliche CSS in den Globals des\nKoliBri-Themes hinterlegt werden.'})})}),"\n",(0,t.jsx)(r.K5,{_label:"KoliBri-Factory",_type:"info",_variant:"card",children:(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.p,{children:["Eigene spezifische Komponenten, die nicht von KoliBri bereitgestellt werden und leider nicht zu den\nKoliBri-Komponenten passen, k\xf6nnen in eigenen Komponenten-Bibliotheken aufgebaut und unabh\xe4ngig gepflegt werden.\nHierf\xfcr bieten wir die sogenannte ",(0,t.jsx)("strong",{children:"KoliBri-Factory"})," (Stack) an (siehe"," "]}),(0,t.jsx)(r.Nv,{_href:"https://github.com/public-ui/kolibri/blob/main/docs/ARCHITECTURE.md#erweitert",_target:"github",_label:"Modularisierung"}),(0,t.jsx)(n.p,{children:")."})]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},3782:(e,n,i)=>{i.d(n,{Z:()=>d,p:()=>o});var t=i(91956),s=i(32404),r=(i(50959),i(11527));const o=()=>(0,r.jsx)(s.T5,{_label:(0,t.I)({id:"custom.component-library-for-the-accessibility",message:"Komponentenbibliothek f\xfcr die Barrierefreiheit"}),children:"KoliBri"}),d=o},1176:(e,n,i)=>{i.d(n,{G$:()=>d});var t=i(50959),s=i(73584),r=i(11527);let o;const d=e=>{let{code:n,config:i}=e;return(0,t.useEffect)((()=>{(e=>{e&&s.L.initialize(Object.assign({startOnLoad:!0},e)),clearTimeout(o),o=setTimeout((()=>{clearTimeout(o),s.L.contentLoaded()}),500)})(i)}),[]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"mermaid",children:n})})}}}]);