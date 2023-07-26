"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7116],{86396:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(15882),l=(n(50959),n(17942));const i={toc:[{value:"Verwendung von <code>dialog</code>-Tag",id:"verwendung-von-dialog-tag",level:2},{value:"Modal",id:"modal",level:2},{value:"Funktionsweise",id:"funktionsweise",level:3},{value:"Konstruktion",id:"konstruktion",level:3},{value:"Code",id:"code",level:4},{value:"Verwendung",id:"verwendung",level:3},{value:"Best practices",id:"best-practices",level:4},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:4},{value:"Barrierefreiheit",id:"barrierefreiheit",level:3},{value:"Tastatursteuerung",id:"tastatursteuerung",level:4},{value:"Links und Referenzen",id:"links-und-referenzen",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Vielen Dank, dass Sie diese Komponente zur Umsetzung eines Modals verwenden wollen. Inzwischen ist das native ",(0,l.kt)("inlineCode",{parentName:"p"},"<dialog>")," Element sehr gut unterst\xfctzt (",(0,l.kt)("kol-link",{_href:"https://caniuse.com/?search=dialog",_label:"https://caniuse.com/?search=dialog",_target:"_blank",_label:"caniuse"}),"), barrierefrei, einfach zu benutzen und performanter (da nativ), daher empfehlen wir dieses zu verwenden. Wenn Sie aufgrund von Abw\xe4rtskompatibilit\xe4t, oder weil Sie die ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente bereits eingebaut haben, die Dokumentation zu unserem KolModal suchen, finden Sie diese etwas weiter unten. Die ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente wird in Version 2 noch zur Verf\xfcgung stehen."),(0,l.kt)("h2",{id:"verwendung-von-dialog-tag"},"Verwendung von ",(0,l.kt)("inlineCode",{parentName:"h2"},"dialog"),"-Tag"),(0,l.kt)("p",null,"Die Dokumentation des ",(0,l.kt)("inlineCode",{parentName:"p"},"<dialog>")," finden Sie ",(0,l.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",_label:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",_target:"_blank",_label:"hier(MDN)"}),".\nDas ",(0,l.kt)("strong",{parentName:"p"},"Dialog"),"-Element kann wie jedes andere HTML-Tag verwendet werden, alle Elemente innerhalb werden wie gewohnt dargestellt.\nDer Dialog ist standardm\xe4\xdfig nicht sichtbar, \xfcber das Setzen des Attributs ",(0,l.kt)("inlineCode",{parentName:"p"},"open"),", oder \xfcber die Funktionen ",(0,l.kt)("inlineCode",{parentName:"p"},"show()")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"showModal()")," wird er sichtbar.\n",(0,l.kt)("inlineCode",{parentName:"p"},"open")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"show()")," \xf6ffnen das Element mit ",(0,l.kt)("inlineCode",{parentName:"p"},"position: absolute"),", w\xe4hrend ",(0,l.kt)("inlineCode",{parentName:"p"},"showModal()")," ",(0,l.kt)("inlineCode",{parentName:"p"},"position: fixed")," setzt."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Beide Varianten haben eine ",(0,l.kt)("inlineCode",{parentName:"li"},"max-width"),", die unter ",(0,l.kt)("inlineCode",{parentName:"li"},"box-sizing: content-box")," der gesamten Bildschirmbreite entspricht (bzw des ",(0,l.kt)("inlineCode",{parentName:"li"},"position")," Elters)"),(0,l.kt)("li",{parentName:"ul"},"Die Modalvariante hat einen Hintergrund, der eine sanfte Abdunklung verursacht (unser Tipp: die Opacity der Hintergrundfarbe erh\xf6hen), der \xfcber ",(0,l.kt)("inlineCode",{parentName:"li"},"::backdrop")," gestylt werden kann und Klickevents auf den Dialog weiterleitet."),(0,l.kt)("li",{parentName:"ul"},"Die Modalvariante ist in der Bildschirmmitte zentriert (via ",(0,l.kt)("inlineCode",{parentName:"li"},"margin: auto"),", kann von CSS Resets \xfcberschrieben werden)")),(0,l.kt)("h2",{id:"modal"},"Modal"),(0,l.kt)("p",null,"Mit Hilfe der ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente k\xf6nnen zus\xe4tzliche Informationen oder auch Eingabeformulare in einem Dialogfenster angezeigt werden. Ein offenes ",(0,l.kt)("strong",{parentName:"p"},"Modal")," kann via ",(0,l.kt)("strong",{parentName:"p"},"ESC")," geschlossen werden.\nDie ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente ist standardm\xe4\xdfig versteckt. Sie wird i.d.R. erst nach Klick auf einen Button oder sonstigem Trigger angezeigt. Dabei wird der Hintergrund des Fensters deaktiviert und allein der Inhalt des Modal-Fensters ist aktiv."),(0,l.kt)("h3",{id:"funktionsweise"},"Funktionsweise"),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," realisiert die Basis f\xfcr barrierefreie Overlays und erm\xf6glicht es beliebige HTML-Inhalte anzuzeigen. Beispielsweise w\xe4re eine Dialog-Komponente eine Komposition aus einer Card-Komponente die in einer ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente eingef\xfcgt wird."),(0,l.kt)("p",null,"Sobald ein ",(0,l.kt)("strong",{parentName:"p"},"Modal")," ge\xf6ffnet wird, werden alle selektierbaren Elemente in der Webseite deaktiviert, au\xdfer die innerhalb des aktiven Modals."),(0,l.kt)("h3",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h4",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-modal id="test-modal" _label="Beschreibung zur Modalbox">\n    <kol-card _heading="Vorgang l\xf6schen" _has-footer style="background-color: bisque">\n        <p slot="content">Wollen Sie den Vorgang wirklich l\xf6schen?</p>\n        <div slot="footer">\n            <kol-button className="close-modal" _label="Ok" _variant="primary"></kol-button>\n            <kol-button className="close-modal" _label="Abbrechen"></kol-button>\n        </div>\n    </kol-card>\n</kol-modal>\n<kol-button id="modal-open-button" _label="Modal \xf6ffnen"></kol-button>\n<script>\n    const modal = document.querySelector(\'#test-modal\');\n    const modalOpenButton = document.querySelector(\'#modal-open-button\');\n    function openModal() {\n        modal._activeElement = modalOpenButton;\n        modal._open = true;\n    }\n    function closeModal() {\n        modal._activeElement = null;\n    }\n    document.querySelectorAll(\'.close-modal\').forEach((b) => (b._on = { onClick: closeModal }));\n    modalOpenButton._on = { onClick: openModal };\n<\/script>\n')),(0,l.kt)("h3",{id:"verwendung"},"Verwendung"),(0,l.kt)("p",null,"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_width"))," geben Sie die gew\xfcnschte Breite der Modalbox an. Sie wird in der gew\xe4hlten Gr\xf6\xdfe immer mittig auf dem Bildschirm angezeigt."),(0,l.kt)("p",null,"Da das Modal vom eigentlichen Modal entkoppelt ist, aber f\xfcr eine teilweisen Sperrung der Inhalte sorgt. Muss es auch eine M\xf6glichkeit bieten, das Schlie\xdfen (Sperrung aufheben) aus dem Modal-Kontext zu erm\xf6glichen."),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_type:"info"},"Es wird empfohlen einen Close-Button oben rechts einzubauen.")),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," hat einen ",(0,l.kt)("inlineCode",{parentName:"p"},"z-index")," von ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,l.kt)("h4",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die Modalbox, um weiterf\xfchrende Informationen zu einem Thema anzuzeigen."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die Modalbox, um umfangreiche Inhalte optisch kompakter zu gestalten."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie es, wichtige Informationen wie z.B. rechtliche Themen, auf die Nutzer:innen reagieren m\xfcssen, in Modalboxen zu platzieren.")),(0,l.kt)("h4",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, als Erkl\xe4rungshilfe zu einzelnen Eingabefeldern in Formularen."),(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, um erg\xe4nzende Informationen erst nach Anforderung durch die Nutzer:innen anzuzeigen."),(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, um ein Feedback zu Speichervorg\xe4ngen oder \xe4hnliches anzuzeigen, z.B. ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Vielen Dank f\xfcr Ihre R\xfcckmeldung"))," nach Absenden eines Formulars.")),(0,l.kt)("h3",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xe4nkung der Barrierefreiheit f\xfchren.")),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," ist so realisiert, dass der Fokus darauf liegt, wenn es ge\xf6ffnet wird. Elemente au\xdferhalb des Modals sind dann nicht mehr fokussierbar."),(0,l.kt)("p",null,"Wird das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," geschlossen, liegt der Fokus wieder auf dem Element, welches unter ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_activeElement"))," angegeben wurde."),(0,l.kt)("p",null,"Bei der Realisierung dieser Funktionalit\xe4t haben wir auf die Verwendung der CSS-Properties ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"user-select"))," und ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"pointer-events"))," verzichtet, um das Navigieren aus der Webseite in die Browser-Men\xfc's weiterhin zu erm\xf6glichen. Ebenfalls haben wir darauf verzichtet die ",(0,l.kt)("em",{parentName:"p"},"Event-Propagation")," zu manipulieren."),(0,l.kt)("p",null,"Achten Sie f\xfcr eine optimale Ausgabe der ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente in Screenreadern darauf, das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"aria-label"))," korrekt zu setzen."),(0,l.kt)("p",null,"Des Weiteren gibt es immer nur maximal ein aktives Modal, welches alle selektierbaren Elemente deaktiviert au\xdfer die innerhalb des eigenen Modals. Hierbei ist zu beachten, dass KoliBri nur Elemente deaktiviert die sich im Browser-Seitenbereich befinden. Das Fokussieren den Browser-Men\xfc's ist weiterhin m\xf6glich."),(0,l.kt)("h4",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Bei ge\xf6ffnetem Modal werden alle fokussierbaren Elemente der Reihenfolge nach angesprungen.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ESC")),(0,l.kt)("td",{parentName:"tr",align:null},"Schlie\xdft das Modal.")))),(0,l.kt)("h3",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",_label:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html",_label:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html",_target:"_blank"}))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_activeElement")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die Referenz auf das ausl\xf6sende HTML-Element an, wodurch das Modal ge\xf6ffnet wurde."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLElement")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use _label instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Modals an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_width")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_width")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Breite des Modals. (max-width: 100%)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'100%'"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Der Inhalt des Modals.")))),(0,l.kt)("hr",null))}o.isMDXComponent=!0},63739:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(52270),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:p,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:i(m,t,n,c.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:i(m,t,n,c.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:i(m,t,n,c.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:i(m,t,n,c.webcomponent)})))}},49433:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(57338),l=n(52270),i=n(50959),r=n(90787);function o(e){const{attribute:t,label:n,update:a,value:r}=e,[o,d]=(0,i.useState)(""),[s,m]=(0,i.useState)(""),[u,c]=(0,i.useState)(""),[p,k]=(0,i.useState)("");let g=!1,b=!1,h=!1,f=!1;t.type.includes("KoliBriAllIcon")?(g=!0,b=!0,h=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,b=!0)),(0,i.useEffect)((()=>{if(!o||s||u||p){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,s,u,p]);const N=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,g?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},N.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",b?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},N.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},N.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",f?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},N.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function d(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o},n)}function m(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(d,{name:t.name,label:m,update:n,value:a});case"_icon":return i.createElement(o,{attribute:t,label:m,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return i.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?i.createElement(s,{label:m,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,m)}var u=n(80376),c=n(77192),p=n(85630),k=n.n(p);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,u]of o)if(u){let e="";switch(typeof u){case"string":e=` ${i}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${u.toString()}"`;break;case"boolean":e=u?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${r}</kol-${t}>`;let s;try{s=(0,c.format)(d,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(m){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function N(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const s=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const c=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(b,{tag:o,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(g,{params:s,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},c&&c.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&i.createElement(m,{key:e.name,attribute:e,update:u,value:s[e.name]})))),c&&0===c.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},c&&c.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:u,value:s["slot-"+e.name]}))),c&&0===c.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},3044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>c});var a=n(15882),l=(n(50959),n(17942)),i=n(86396),r=n(63739),o=n(49433);const d={title:"Modal",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Modal-Komponente.",tags:["Dialog","Modal","Beschreibung","Spezifikation","Beispiele"]},s=void 0,m={unversionedId:"components/modal",id:"components/modal",title:"Modal",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Modal-Komponente.",source:"@site/docs/30-components/modal.mdx",sourceDirName:"30-components",slug:"/components/modal",permalink:"/docs/components/modal",draft:!1,tags:[{label:"Dialog",permalink:"/docs/tags/dialog"},{label:"Modal",permalink:"/docs/tags/modal"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Modal",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Modal-Komponente.",tags:["Dialog","Modal","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Logo",permalink:"/docs/components/logo"},next:{title:"Nav",permalink:"/docs/components/nav"}},u={},c=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],p={toc:c},k="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.ZP,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(o._,{component:"modal",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(r._,{component:"modal",sample:"basic",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);