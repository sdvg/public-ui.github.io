/*! For license information please see 6254.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[6254],{4418:(t,e,n)=>{n.d(e,{v:()=>a});var i=n(5873);const a=(t,e,n={})=>{(0,i.a)(t,"_hideLabel",e,n)}},6504:(t,e,n)=>{n.d(e,{a:()=>c});var i=n(3673),a=n(3707);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-ascending":"Die Spalte {{column}} ist aufsteigend{{multi}} sortiert.","sort-descending":"Die Spalte {{column}} ist absteigend{{multi}} sortiert.","sort-then-ascending":", dann die Spalte {{column}} aufsteigend","sort-then-descending":", dann die Spalte {{column}} absteigend","sort-then-last-ascending":" und dann die Spalte {{column}} aufsteigend","sort-then-last-descending":" und dann die Spalte {{column}} absteigend","sort-none":"Spalte {{column}} nicht sortiert","table-sort-none":"Keine Spalte ist sortiert.","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"Sorted column {{column}} descending{{multi}}","sort-ascending":"Sorted column {{column}} ascending{{multi}}","sort-then-ascending":", then column {{column}} acending","sort-then-descending":", then column {{column}} descending","sort-then-last-ascending":" and then column {{column}} acending","sort-then-last-descending":" and then column {{column}} descending","sort-none":"column {{column}} not sorted","table-sort-none":"No column is sorted.","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},s=t=>Object.keys(t).reduce(((e,n)=>(e[`kol-${n}`]=t[n],e)),{}),r=new Set([t=>t("en",s(l)),t=>t("de",s(o))]),c=(t,e)=>{const n=(0,i.g)();if(void 0===n)return(0,a.d)("[I18n] I18nService not available! Please call the global register function."),t;let o=n.translate(t,e);return o===t&&((0,a.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((t=>t(((t,e)=>(n.addResourceBundle(t,e),t))))),o=n.translate(t,e)),o}},6254:(t,e,n)=>{n.r(e),n.d(e,{kol_nav:()=>h});var i=n(5946),a=n(6504),o=n(5873),l=n(4418),s=n(4332),r=n(3707),c=n(3087),d=n(2057);const h=class{constructor(t){(0,i.r)(this,t),this.onClick=t=>{t._active=!t._active,this.state=Object.assign({},this.state)},this.hasActiveChild=t=>!!(Array.isArray(t._children)&&t._children.length>0)&&t._children.some(this.hasActiveChild),this.linkList=t=>(0,i.h)("ul",{class:"list "+(0===t.deep&&"horizontal"===t.orientation?" horizontal":" vertical"),"data-deep":t.deep},t.links.map(((e,n)=>this.li(t.collapsible,t.hideLabel,t.deep,n,e,t.orientation)))),this._collapsible=!0,this._hasCompactButton=!1,this._hideLabel=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_collapsible:!0,_hasCompactButton:!1,_hideLabel:!1,_label:"…",_links:[],_orientation:"vertical"}}entry(t,e,n,a,o){return(0,i.h)("div",{class:{entry:!0,"hide-label":e}},(0,i.h)("kol-button-link-text-switch",{class:"button-link-text-switch",_link:Object.assign(Object.assign({},a),{_hideLabel:e})}),n?this.expandButton(t,a,o):"")}expandButton(t,e,n){return(0,i.h)("kol-button-wc",{class:"expand-button",_ariaExpanded:n,_disabled:!t,_icons:"codicon codicon-"+(n?"remove":"add"),_hideLabel:!0,_label:`Untermenü zu ${e._label} ${n?"schließen":"öffnen"}`,_on:{onClick:()=>this.onClick(e)}})}li(t,e,n,a,o,l){const s=!!o._active,r=Array.isArray(o._children)&&o._children.length>0,c=r&&s;return(0,i.h)("li",{class:{active:s,expanded:c,"has-children":r},key:a},this.entry(t,e,r,o,s),c?(0,i.h)(this.linkList,{collapsible:t,hideLabel:e,deep:n+1,links:o._children||[],orientation:l}):"")}render(){let t=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(t=!1,(0,r.g)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const e=!0===this.state._collapsible,n=!0===this.state._hideLabel,o=this.state._orientation;return(0,i.h)(i.H,null,(0,i.h)("div",{class:{[o]:!0}},(0,i.h)("nav",{"aria-label":this.state._label,id:"nav"},(0,i.h)(this.linkList,{collapsible:e,hideLabel:n,deep:0,links:this.state._links,orientation:o})),t&&(0,i.h)("div",{class:"compact"},(0,i.h)("kol-button",{_ariaControls:"nav",_ariaExpanded:!n,_icons:n?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:(0,a.a)(n?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_hideLabel:!1===this.state._hideLabel})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateCollapsible(t){((t,e)=>{(0,o.a)(t,"_collapsible",e)})(this,t)}validateHasCompactButton(t){((t,e)=>{(0,o.a)(t,"_hasCompactButton",e)})(this,t)}validateHideLabel(t){(0,l.v)(this,t)}validateLabel(t,e,n=!1){n||(0,c.r)(this.state._label),(0,s.v)(this,t),(0,r.b)(t),(0,c.a)(this.state._label)}validateLinks(t){(0,d.w)("KolNav",this,t),(0,r.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(t){(0,o.w)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateCollapsible(this._collapsible),this.validateHideLabel(this._hideLabel),this.validateHasCompactButton(this._hasCompactButton),this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){(0,c.r)(this.state._label)}static get watchers(){return{_collapsible:["validateCollapsible"],_hasCompactButton:["validateHasCompactButton"],_hideLabel:["validateHideLabel"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};h.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host > div {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\tnav {\n\t\twidth: 100%;\n\t}\n\n\t.list {\n\t\tdisplay: flex;\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\t.list.vertical {\n\t\tflex-direction: column;\n\t}\n\n\t.entry {\n\t\tdisplay: flex;\n\t}\n\n\t.button-link-text-switch {\n\t\tflex-grow: 1;\n\t}\n\n\t.entry kol-span-wc {\n\t\tjustify-items: start;\n\t}\n}\n"}},4332:(t,e,n)=>{n.d(e,{a:()=>h,c:()=>r,h:()=>s,v:()=>d});var i=n(3707),a=n(5873);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return l.test(t)}const c=new Set(["string"]),d=(t,e,n={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),c,e,function(t){var e;return{hooks:{afterPatch:(e,n,a,o)=>{var l,c;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,n,a,o)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},h=d},3087:(t,e,n)=>{n.d(e,{a:()=>a,r:()=>o});const i=new Set;function a(t){i.has(t)?console.error(`There already is a nav element with the label "${t}"`):i.add(t)}function o(t){i.delete(t)}},2057:(t,e,n)=>{n.d(e,{w:()=>o});var i=n(3707),a=n(5873);const o=(t,e,n)=>{(0,a.c)(e,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),n),(0,i.c)(t,e.state._links.length)}}}]);