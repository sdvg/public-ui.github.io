"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1347],{69406:(e,n,t)=>{t.d(n,{Z:()=>o,p:()=>s});var i=t(76897),r=t(59496);const s=()=>r.createElement(i.T5,{_title:"Komponenten-Bibliothek f\xfcr die Barrierefreiheit"},"KoliBri"),o=s},1265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>p,default:()=>f,frontMatter:()=>m,metadata:()=>u,toc:()=>c});var i=t(15882),r=t(59496),s=t(49613),o=t(76897),l=t(69406),d=t(16654);let a;const g=e=>{let{code:n,config:t}=e;return(0,r.useEffect)((()=>{(e=>{e&&d.Z.initialize(Object.assign({startOnLoad:!0},e)),clearTimeout(a),a=setTimeout((()=>{clearTimeout(a),d.Z.contentLoaded()}),500)})(t)}),[]),r.createElement("div",null,r.createElement("div",{className:"mermaid"},n))},m={},p="Theming",u={unversionedId:"concepts/styling/theming",id:"concepts/styling/theming",title:"Theming",description:"\xdcber den Schalter in der Toolbar oben k\xf6nnen Sie das Theme von unserer Seite (KoliBri) umschalten.",source:"@site/docs/20-concepts/05-styling/34-theming.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/theming",permalink:"/docs/concepts/styling/theming",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Styling & Design",permalink:"/docs/category/styling--design"},next:{title:"Designer",permalink:"/docs/concepts/styling/designer"}},k={},c=[],h=(b="MermaidDesignProcess",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var b;const S={toc:c};function f(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},S,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"theming"},"Theming"),(0,s.kt)("kol-alert",{_type:"info"},(0,s.kt)("img",{width:"100%",src:"/assets/theme-switch.png",alt:"Zeigt, wo der Schalter zum Umschalten des Themes in der Toolbar ist."}),(0,s.kt)("p",null,(0,s.kt)("kol-icon",{_icon:"codicon codicon-arrow-right"}),"\xdcber den Schalter in der Toolbar oben k\xf6nnen Sie das Theme von unserer Seite (KoliBri) umschalten.")),(0,s.kt)("br",null),(0,s.kt)("p",null,"Das Einzigartige an ",(0,s.kt)(l.p,{mdxType:"KoliBri"})," ist die ",(0,s.kt)("strong",null,"Referenzimplementierung")," von Komponenten, die von Grund auf"," ",(0,s.kt)("strong",null,"semantisch W3C- und WCAG-konform")," und damit ",(0,s.kt)("strong",null,"vollst\xe4ndig barrierefrei")," bez\xfcglich der assistiven Unterst\xfctzung sind. Alle Komponenten werden dabei als"," ",(0,s.kt)(o.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components?retiredLocale=de",_target:"mozilla",mdxType:"KolLink"},"Web Components")," ","umgesetzt und sind somit in allen webbasierten Projekten wiederverwendbar. In der folgenden Abbildung werden diese Komponenten durch die grau-gestrichelten Formen in der Mitte dargestellt."),(0,s.kt)("p",null,(0,s.kt)(o.CV,{mdxType:"KolIndentedText"},(0,s.kt)("strong",null,"1. KoliBri-Komponenten k\xf6nnten als Basis f\xfcr alle Design Systeme oder Komponenten-Bibliotheken wiederverwendet werden."))),(0,s.kt)("img",{src:"/assets/abgrenzung.jpg",alt:"Darstellung, wie die Komponenten mittels verschiedener Styleguides zu kundenspezifischen Komponenten werden."}),(0,s.kt)("p",null,"Im ersten Release (v1.0) hatte ",(0,s.kt)(l.p,{mdxType:"KoliBri"})," noch direkt das Individualisieren des Standard-Designs mittels sogenannter"," ",(0,s.kt)("strong",null,(0,s.kt)(o.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",_target:"mozilla",mdxType:"KolLink"},"CSS-Properties"))," ","(",(0,s.kt)(o.Nv,{_href:"https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71",_target:"uxdesign",mdxType:"KolLink"},"Design-Tokens"),", ",(0,s.kt)(o.Nv,{_href:"https://tailwindcss.com",_target:"tailwindcss",mdxType:"KolLink"},"Tailwind CSS"),") umgesetzt. Mit der Umsetzung weiterer Themes haben wir jedoch festgestellt, dass wir immer mehr CSS-Properties einf\xfchren m\xfcssten, um die Flexiblit\xe4t f\xfcr das gew\xfcnschte Design/UX (Corporate Design/Styleguide) umsetzen zu k\xf6nnen. Im Zweifel m\xfcsste f\xfcr jede Anpassbarkeit ein separates Property vorgesehen werden. Am Beispiel des ",(0,s.kt)(o.Nv,{_href:"https://mui.com/material-ui/api/button/#css",_target:"mui",mdxType:"KolLink"},"MUI-Button CSS")," ist gut erkennbar, wie die CSS-Properties (Design Token) immer mehr werden."),(0,s.kt)("p",null,(0,s.kt)(o.CV,{mdxType:"KolIndentedText"},(0,s.kt)("strong",null,"2. Wir haben das ganze CSS vollst\xe4ndig von den Components entkoppelt (like"," ",(0,s.kt)(o.Nv,{_href:"https://styled-components.com",_target:"styled-components",mdxType:"KolLink"},"Styled-Components"),")."))),(0,s.kt)("p",null,"Mithilfe des Designers kann ein \u201eMandant\u201c die Komponenten einzeln und vollst\xe4ndig unabh\xe4ngig voneinander mit der gesamten CSS-Freiheit gestalten. Innerhalb eines \u201eMandanten\u201c-Themes k\xf6nnen eigene CSS-Properties eingef\xfchrt werden. Die Nutzung von CSS-Properties (Design-Tokens) bleibt somit auf Theme-Ebene erhalten, jedoch mit einem viel kleineren und pflegbaren Scope."),(0,s.kt)("p",null,(0,s.kt)(o.CV,{mdxType:"KolIndentedText"},(0,s.kt)("strong",null,"3. KoliBri erm\xf6glicht die Wiederverwendung getesteter, barrierefreier und robuster Komponenten(-konstruktionen) bei nahezu individuellem Design und stellt damit einen im Rahmen der Barrierefreiheit frei gestaltbaren HTML-Standard dar."))),(0,s.kt)("p",null,"Im folgenden Diagramm wird ein beispielhafter Design-Prozess mit KoliBri dargestellt, der vollkommen unabh\xe4ngig vom KoliBri-Team angewendet werden kann."),(0,s.kt)(h,{mdxType:"MermaidDesignProcess"}),(0,s.kt)(g,{code:"\nstateDiagram-v2\n\tdirection LR\n\ts1: <strong>Spezifikation</strong>\n\ts1: UI/UX-Team\n\ts2: <strong>Design-Tokens</strong>\n\ts2: JSON\n\ts3: <strong>Style-Files</strong>\n\ts3: CSS\n\ts4: <strong>Designer</strong>\n\ts4: KoliBri\n\ts5: <strong>Theme</strong>\n\ts5: KoliBri\n\tnote right of s1\n\t\t<strong>Tools:</strong> Adobe XD, Figma, Sketch u.a.\n\t\t<strong>Technik:</strong> CSS-Properties, Design-Tokens\n\tend note\n\tnote right of s2\n\t\tExport-<strong>Plugin</strong>\n\tend note\n\tnote right of s3\n\t\tSet of CSS-Properties\n\tend note\n\tnote right of s5\n\t\tSharable <strong>NPM-Paket</strong>\n\tend note\n\t[*] --\x3e s1\n\ts1 --\x3e s2 : Plugin\n\ts2 --\x3e s3 : Script\n\ts3 --\x3e s5\n\ts1 --\x3e s4\n\ts4 --\x3e s5\n\ts5 --\x3e [*]",mdxType:"Mermaid"}),(0,s.kt)("p",null,"Das UI/UX-Team spezifiziert beispielsweise mit Figma die Komponenten ihres Design-Systems. Bei der \xdcberf\xfchrung der Spezifikation in die Realisierung wird das Design in Form von reinem CSS mittels des ",(0,s.kt)(o.Nv,{_href:"/docs/concepts/styling/designer",mdxType:"KolLink"},"KoliBri-Designers")," auf die Basis-Komponenten \u201e\xfcbertragen\u201c. Wenn im eigenen Design-System eine Individualisierbarkeit gew\xfcnscht ist, k\xf6nnen im Designer daf\xfcr CSS-Properties oder Design-Tokens definiert werden. Damit das eigene Theme \xfcber Projekte hinweg geteilt werden kann, wird das Theme in ein NPM-Paket paketiert und kann \xfcber eine beliebige Registry bereitgestellt werden."),(0,s.kt)("p",null,(0,s.kt)(o.ox,{_summary:"Design-Tokens",mdxType:"KolDetails"},"Optional k\xf6nnen beispielsweise aus Figma, mittels Design-Tokens, Design-Schemata exportiert werden. Diese k\xf6nnen dann in separate CSS-Dateien \xfcberf\xfchrt werden, die die jeweiligen Werte zu den CSS-Properties enthalten. Sp\xe4ter wird eine dieser CSS-Dateien verwendet, um das konkrete Design in Kombination mit den Web Components und dem Theme in der Webseite anzuwenden.")),(0,s.kt)("p",null,(0,s.kt)(o.ox,{_summary:"Dark-Mode",mdxType:"KolDetails"},'Optional kann auch ein "Dark-Mode"-Theme umgesetzt werden. Hierzu kann das erforderliche CSS in den Globals des KoliBri-Themes hinterlegt werden.')),(0,s.kt)(o.K5,{_heading:"KoliBri-Factory",_type:"info",_variant:"card",mdxType:"KolAlert"},(0,s.kt)("p",null,"Eigene spezifische Komponenten, die nicht von KoliBri bereitgestellt werden und leider nicht zur KoliBri-Komponenten-Vielfalt passen, k\xf6nnen in eigenen Komponenten-Bibliotheken aufgebaut und unabh\xe4ngig gepflegt werden. Hierf\xfcr bieten wir die sogenannte ",(0,s.kt)("strong",null,"KoliBri-Factory")," (Stack) an (siehe"," ",(0,s.kt)(o.Nv,{_href:"https://github.com/public-ui/kolibri/blob/main/docs/ARCHITECTURE.md#erweitert",_target:"github",mdxType:"KolLink"},"Modularisierung"),").")))}f.isMDXComponent=!0}}]);