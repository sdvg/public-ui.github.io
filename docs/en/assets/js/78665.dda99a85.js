/*! For license information please see 78665.dda99a85.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[78665],{27520:(t,e,n)=>{n.d(e,{a:()=>o,b:()=>p,c:()=>m,d:()=>s,e:()=>g,f:()=>c,g:()=>l,u:()=>u});var i=n(40480);const a=new Set,o=(t,e)=>{(!1===a.has(t)||(null==e?void 0:e.force))&&(a.add(t),i.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,s=(t,e)=>{(!1===r.has(t)||(null==e?void 0:e.force))&&(r.add(t),i.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},l=(t,e)=>{(!1===r.has(t)||(null==e?void 0:e.force))&&(r.add(t),i.L.warn([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,c=(t,e=!1,n)=>{(!1===d.has(t)||(null==n?void 0:n.force))&&(d.add(t),t+=!0===e?" \u2705":"",i.L.debug([t].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};s("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,u=(t,e)=>{(!1===h.has(t)||(null==e?void 0:e.force))&&(h.add(t),i.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},g=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=t=>{"string"==typeof t&&""!==t||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(t,e=8)=>{e>7&&u(`[${t}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},45364:(t,e,n)=>{n.d(e,{a:()=>d});var i=n(38696),a=n(27520);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-ascending":"Die Spalte {{column}} ist aufsteigend{{multi}} sortiert.","sort-descending":"Die Spalte {{column}} ist absteigend{{multi}} sortiert.","sort-then-ascending":", dann die Spalte {{column}} aufsteigend","sort-then-descending":", dann die Spalte {{column}} absteigend","sort-then-last-ascending":" und dann die Spalte {{column}} aufsteigend","sort-then-last-descending":" und dann die Spalte {{column}} absteigend","sort-none":"Spalte {{column}} nicht sortiert","table-sort-none":"Keine Spalte ist sortiert.","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"Sorted column {{column}} descending{{multi}}","sort-ascending":"Sorted column {{column}} ascending{{multi}}","sort-then-ascending":", then column {{column}} acending","sort-then-descending":", then column {{column}} descending","sort-then-last-ascending":" and then column {{column}} acending","sort-then-last-descending":" and then column {{column}} descending","sort-none":"column {{column}} not sorted","table-sort-none":"No column is sorted.","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},s=t=>Object.keys(t).reduce(((e,n)=>(e[`kol-${n}`]=t[n],e)),{}),l=new Set([t=>t("en",s(r)),t=>t("de",s(o))]),d=(t,e)=>{const n=(0,i.g)();if(void 0===n)return(0,a.d)("[I18n] I18nService not available! Please call the global register function."),t;let o=n.translate(t,e);return o===t&&((0,a.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((t=>t(((t,e)=>(n.addResourceBundle(t,e),t))))),o=n.translate(t,e)),o}},78665:(t,e,n)=>{n.r(e),n.d(e,{kol_link_button:()=>r});var i=n(26231),a=n(45364),o=n(8868);const r=class{constructor(t){(0,i.r)(this,t),this.catchRef=t=>{(0,o.a)(this.host,t)},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._customClass=void 0,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,a.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._variant="normal"}render(){return(0,i.h)(i.H,null,(0,i.h)("kol-link-wc",{ref:this.catchRef,class:{button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaCurrentValue:this._ariaCurrentValue,_download:this._download,_hideLabel:this._hideLabel,_href:this._href,_icons:this._icons,_label:this._label,_on:this._on,_role:"button",_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},(0,i.h)("slot",{name:"expert",slot:"expert"})))}get host(){return(0,i.g)(this)}};r.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: inline-block;\n\t}\n\t:is(a, button) {\n\t\tdisplay: inline-flex;\n\t\tplace-items: center;\n\t\ttext-align: center;\n\t\ttext-decoration-line: none;\n\n\t\t&::before {\n\t\t\t/* Render zero-width character as first element to set the baseline correctly. */\n\t\t\tcontent: '\\200B';\n\t\t}\n\t}\n\t/* TODO: Why we need this? */\n\t:is(a, button) > kol-span-wc {\n\t\tmargin: auto;\n\t\twidth: 100%;\n\t}\n\t:is(button):disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n"}}}]);