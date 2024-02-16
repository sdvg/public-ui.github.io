/*! For license information please see 52304.3464e88b.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[52304],{83408:(t,n,e)=>{e.d(n,{a:()=>d});var i=e(75224),a=e(28636);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"\xd6ffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Eintr\xe4ge {{start}} bis {{end}} von {{total}}"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},s=t=>Object.keys(t).reduce(((n,e)=>(n[`kol-${e}`]=t[e],n)),{}),l=new Set([t=>t("en",s(r)),t=>t("de",s(o))]),d=(t,n)=>{const e=(0,a.g)();if(void 0===e)return(0,i.h)("[I18n] I18nService not available! Please call the global register function."),t;let o=e.translate(t,n);return o===t&&((0,i.h)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((t=>t(((t,n)=>(e.addResourceBundle(t,n),t))))),o=e.translate(t,n)),o}},52304:(t,n,e)=>{e.r(n),e.d(n,{kol_spin:()=>r});var i=e(24236),a=e(75224),o=e(83408);const r=class{constructor(t){(0,i.r)(this,t),this.showToggled=!1,this._show=!1,this._variant="dot",this.state={_variant:"dot"}}render(){return(0,i.h)(i.H,null,this.state._show?(0,i.h)("span",{"aria-busy":"true","aria-label":(0,o.a)("kol-action-running"),"aria-live":"polite",class:{spin:!0,[this.state._variant]:!0},role:"alert"},function(t){switch(t){case"cycle":return(0,i.h)("span",{class:"loader"});case"none":return(0,i.h)("slot",{name:"expert"});default:return(0,i.h)(i.F,null,(0,i.h)("span",{class:"bg-spin-1"}),(0,i.h)("span",{class:"bg-spin-2"}),(0,i.h)("span",{class:"bg-spin-3"}),(0,i.h)("span",{class:"bg-neutral"}))}}(this.state._variant)):this.showToggled&&(0,i.h)("span",{"aria-label":(0,o.a)("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(t){this.showToggled=!0===this.state._show&&!1===this._show,(0,a.ao)(this,t)}validateVariant(t){(0,a.ap)(this,t)}componentWillLoad(){this.validateShow(this._show),this.validateVariant(this._variant)}static get watchers(){return{_show:["validateShow"],_variant:["validateVariant"]}}};r.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\n\t/* This is the text label. */\n\t.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\n\t.disabled label,\n\t[aria-disabled='true'],\n\t[disabled] {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t\toutline: none;\n\t}\n}\n\n@layer kol-component {\n\t.spin.cycle {\n\t\twidth: 3rem;\n\t\theight: 3rem;\n\t}\n\n\t.spin.cycle > .loader {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 50%;\n\t\tposition: relative;\n\t\tanimation: 2s linear infinite rotate;\n\t}\n\n\t.spin.cycle > .loader::before {\n\t\tcontent: '';\n\t\tbox-sizing: border-box;\n\t\tposition: absolute;\n\t\tinset: 0px;\n\t\tborder-radius: 50%;\n\t\tborder: 5px solid #333;\n\t\tanimation: 3s linear infinite prixClipFix;\n\t}\n\n\t@keyframes rotate {\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\t@keyframes prixClipFix {\n\t\t0% {\n\t\t\tborder-color: #fff;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\n\t\t}\n\t\t25% {\n\t\t\tborder-color: #666;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\n\t\t}\n\t\t50% {\n\t\t\tborder-color: #fc0;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\n\t\t}\n\t\t75% {\n\t\t\tborder-color: red;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\n\t\t}\n\t\t100% {\n\t\t\tborder-color: #000;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\n\t\t}\n\t} /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n\t@media (prefers-reduced-motion) {\n\t\t.spin.cycle > .loader {\n\t\t\tanimation-duration: 4s;\n\t\t}\n\n\t\t.spin.cycle > .loader::before {\n\t\t\tanimation-duration: 6s;\n\t\t}\n\t}\n}\n\n@layer kol-component {\n\t.spin.dot {\n\t\theight: 1rem;\n\t\twidth: 3rem;\n\t}\n\n\t.spin.dot > span {\n\t\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n\t\tborder-radius: 50%;\n\t\tborder: 0.1rem solid #fff;\n\t\theight: 0.8rem;\n\t\tposition: absolute;\n\t\ttop: 0.1rem;\n\t\twidth: 0.8rem;\n\t}\n\n\t.spin.dot > span:first-child {\n\t\tbackground-color: #fc0;\n\t\tz-index: 0;\n\t\tanimation: 1s infinite spin1;\n\t\tleft: 0.1rem;\n\t}\n\n\t.spin.dot > span:nth-child(2) {\n\t\tbackground-color: red;\n\t\tz-index: 1;\n\t\tanimation: 1s infinite spin2;\n\t\tleft: 0.1rem;\n\t}\n\n\t.spin.dot > span:nth-child(3) {\n\t\tbackground-color: #000;\n\t\tz-index: 1;\n\t\tanimation: 1s infinite spin2;\n\t\tleft: 1.1rem;\n\t}\n\n\t.spin.dot > span:nth-child(4) {\n\t\tbackground-color: #666;\n\t\tz-index: 0;\n\t\tanimation: 1s infinite spin3;\n\t\tleft: 2.1rem;\n\t}\n\n\t@keyframes spin1 {\n\t\t0% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n\t@keyframes spin2 {\n\t\t0% {\n\t\t\ttransform: translate(0, 0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: translate(1rem, 0);\n\t\t}\n\t}\n\t@keyframes spin3 {\n\t\t0% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t} /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n\t@media (prefers-reduced-motion) {\n\t\t.spin.dot > span:first-child,\n\t\t.spin.dot > span:nth-child(2),\n\t\t.spin.dot > span:nth-child(3),\n\t\t.spin.dot > span:nth-child(4) {\n\t\t\tanimation-duration: 2s;\n\t\t}\n\t}\n}\n\n@layer kol-component {\n\t.spin {\n\t\tdisplay: block;\n\t\tpadding: 0.125rem;\n\t\tposition: relative;\n\t}\n}\n"}}}]);