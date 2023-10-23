/*! For license information please see 96381.c10ca098.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[96381],{56374:(t,e,n)=>{n.d(e,{v:()=>a});var i=n(13920);const a=(t,e)=>{(0,i.v)(t,"_align",e)}},13920:(t,e,n)=>{n.d(e,{v:()=>s});var i=n(64342);const a=new Set(['"left", "right"']),o=new Set(['"bottom", "top"']),l=new Set([...a,...o]),s=(t,e,n)=>{(0,i.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),l,n,{defaultValue:"top"})}},26982:(t,e,n)=>{n.d(e,{a:()=>d});var i=n(1358),a=n(92660);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},s=t=>Object.keys(t).reduce(((e,n)=>(e[`kol-${n}`]=t[n],e)),{}),r=new Set([t=>t("en",s(l)),t=>t("de",s(o))]),d=(t,e)=>{const n=(0,i.g)();if(void 0===n)return(0,a.d)("[I18n] I18nService not available! Please call the global register function."),t;let o=n.translate(t,e);return o===t&&((0,a.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((t=>t(((t,e)=>(n.addResourceBundle(t,e),t))))),o=n.translate(t,e)),o}},96381:(t,e,n)=>{n.r(e),n.d(e,{kol_tabs:()=>h});var i=n(49168),a=n(26982),o=n(56374),l=n(86700),s=n(92660),r=n(25516),d=n(64342);const h=class{constructor(t){(0,i.r)(this,t),this.onCreateLabel=`${(0,a.a)("kol-new")} \u2026`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,n)=>{if(n>0){if(e+n<t.length)return t[e+n]._disabled?this.nextPossibleTabIndex(t,e,n+1):e+n}else if(n<0&&e+n>=0)return t[e+n]._disabled?this.nextPossibleTabIndex(t,e,n-1):e+n;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let n=null;switch(t.key){case"ArrowRight":n=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":n=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==n&&this.onSelect(t,n,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.preventDefault(),t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,n=!0,i)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===n){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,i||t);t=i||t,n=!1}if(!1===n){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,i||t);(0,s.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,n,i)=>{let a,o;a="_selected"===i?t:this.state._selected,o="_tabs"===i?t:this.state._tabs,o.length>0&&e.set("_selected",this.selectNextNotDisabledTab(a,o))},this.handleTabPanels=()=>{var t,e,n;if(this.tabPanelHost instanceof HTMLDivElement)for(let i=this.tabPanelHost.children.length;i<this.state._tabs.length;i++){const a=document.createElement("div");a.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${i}`),a.setAttribute("id",`tabpanel-${i}`),a.setAttribute("role","tabpanel"),a.setAttribute("hidden","");const o=document.createElement("slot");o.setAttribute("name",`tabpanel-slot-${i}`),a.appendChild(o),this.tabPanelHost.appendChild(a),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[i])&&(null===(n=this.host)||void 0===n||n.children[i].setAttribute("slot",`tabpanel-slot-${i}`))}},this.onCreate=t=>{var e,n;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(n=this.state._on)||void 0===n||n.onCreate(t))},this._align="top",this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this.state={_align:"top",_label:"\u2026",_selected:0,_tabs:[]}}renderButtonGroup(){return(0,i.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,i.h)("kol-button-wc",{_disabled:t._disabled,_icons:t._icons,_hideLabel:t._hideLabel,_label:t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,i.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._align}`]:!0}},this.renderButtonGroup(),(0,i.h)("div",{ref:this.catchTabPanelHost})))}validateAlign(t){(0,o.v)(this,t)}validateLabel(t){(0,l.v)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,s.f)("[KolTabs] Pr\xfcfen, wie man auch einen EventCallback einzeln \xe4ndern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:r.L.debug("[KolTabs] Der Label-Text f\xfcr Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:r.L.debug("[KolTabs] Die onCreate-Callback-Funktion f\xfcr Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,d.s)(this,"_on",e)}}validateSelected(t){(0,d.e)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,d.c)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,s.c)("KolTabs",this.state._tabs.length)}componentWillLoad(){this.validateAlign(this._align),this.validateLabel(this._label),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,n=!1){var i,a;this._selected=e,"function"==typeof(null===(i=this._on)||void 0===i?void 0:i.onSelect)&&(null===(a=this._on)||void 0===a||a.onSelect(t,e)),!0===n&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=(0,d.k)(`button#${this.state._label.replace(/\s/g,"-")}-tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return(0,i.g)(this)}static get watchers(){return{_align:["validateAlign"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"]}}};h.style={default:"@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tkol-button-group-wc {\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t}\n\n\tkol-button-group-wc button {\n\t\tborder-bottom-color: transparent;\n\t\tborder-bottom-style: solid;\n\t\tdisplay: block;\n\t}\n\n\tdiv.grid,\n\tdiv[role='tabpanel'] {\n\t\theight: 100%;\n\t}\n\n\t:host > .tabs-align-right {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 2;\n\t}\n\n\t:host > .tabs-align-left {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\n\t:host > .tabs-align-left kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 0;\n\t}\n\n\t:host > .tabs-align-bottom {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr auto;\n\t}\n\n\t:host > .tabs-align-bottom kol-button-group-wc {\n\t\torder: 2;\n\t}\n\n\t:host > .tabs-align-bottom kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0 1em 0 0;\n\t}\n\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div {\n\t\tmargin: 0 1em;\n\t}\n\n\t:host > .tabs-align-top {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: auto 1fr;\n\t}\n\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\n\t:host > .tabs-align-top kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\n\t:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0 1em 0 0;\n\t}\n\n\t:host > .tabs-align-top > kol-button-group-wc > div > div {\n\t\tmargin: 0 1em;\n\t}\n\n\t:host > div {\n\t\tdisplay: grid;\n\t}\n\n\t:host > .tabs-align-left kol-button-group-wc,\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\n\t:host > .tabs-align-bottom kol-button-group-wc,\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\torder: 1;\n\t}\n\n\t:host > div.tabs-align-left kol-button-group-wc > div,\n\t:host > div.tabs-align-left kol-button-group-wc > div > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div {\n\t\tdisplay: grid;\n\t}\n\n\t:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n\t\twidth: 100%;\n\t}\n\n\t:host > div.tabs-align-bottom kol-button-group-wc div,\n\t:host > div.tabs-align-top kol-button-group-wc div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n}\n"}},86700:(t,e,n)=>{n.d(e,{a:()=>c,c:()=>r,h:()=>s,v:()=>h});var i=n(92660),a=n(64342);const o=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return l.test(t)}const d=new Set(["string"]),h=(t,e,n={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return{hooks:{afterPatch:(e,n,a,o)=>{var l,d;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,n,a,o)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},c=h}}]);