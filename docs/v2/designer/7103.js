/*! For license information please see 7103.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7103],{25009:(t,e,n)=>{n.d(e,{a:()=>d});var i=n(60473),a=n(93172);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},s=t=>Object.keys(t).reduce(((e,n)=>(e[`kol-${n}`]=t[n],e)),{}),r=new Set([t=>t("en",s(l)),t=>t("de",s(o))]),d=(t,e)=>{const n=(0,a.g)();if(void 0===n)return(0,i.h)("[I18n] I18nService not available! Please call the global register function."),t;let o=n.translate(t,e);return o===t&&((0,i.h)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((t=>t(((t,e)=>(n.addResourceBundle(t,e),t))))),o=n.translate(t,e)),o}},57103:(t,e,n)=>{n.r(e),n.d(e,{kol_tabs:()=>l});var i=n(20173),a=n(60473),o=n(25009);const l=class{constructor(t){(0,i.r)(this,t),this.onCreateLabel=`${(0,o.a)("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,n)=>{if(n>0){if(e+n<t.length)return t[e+n]._disabled?this.nextPossibleTabIndex(t,e,n+1):e+n}else if(n<0&&e+n>=0)return t[e+n]._disabled?this.nextPossibleTabIndex(t,e,n-1):e+n;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let n=null;switch(t.key){case"ArrowRight":n=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":n=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==n&&this.onSelect(t,n,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.preventDefault(),t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,n=!0,i)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===n){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,i||t);t=i||t,n=!1}if(!1===n){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,i||t);(0,a.h)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,n,i)=>{let a,o;a="_selected"===i?t:this.state._selected,o="_tabs"===i?t:this.state._tabs,o.length>0&&e.set("_selected",this.selectNextNotDisabledTab(a,o))},this.handleTabPanels=()=>{var t,e,n;if(this.tabPanelHost instanceof HTMLDivElement)for(let i=this.tabPanelHost.children.length;i<this.state._tabs.length;i++){const a=document.createElement("div");a.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${i}`),a.setAttribute("id",`tabpanel-${i}`),a.setAttribute("role","tabpanel"),a.setAttribute("hidden","");const o=document.createElement("slot");o.setAttribute("name",`tabpanel-slot-${i}`),a.appendChild(o),this.tabPanelHost.appendChild(a),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[i])&&(null===(n=this.host)||void 0===n||n.children[i].setAttribute("slot",`tabpanel-slot-${i}`))}},this.onCreate=t=>{var e,n;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(n=this.state._on)||void 0===n||n.onCreate(t))},this._align="top",this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this.state={_align:"top",_label:"",_selected:0,_tabs:[]}}renderButtonGroup(){return(0,i.h)("kol-button-group-wc",{class:"tabs-button-group",role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,i.h)("kol-button-wc",{_disabled:t._disabled,_icons:t._icons,_hideLabel:t._hideLabel,_label:t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,i.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,i.h)(i.H,{key:"5036574493deb60734b6c17bffe39890fda4ebfb"},(0,i.h)("div",{key:"4bd78978770f15cc8682196c903a07b75d483b6a",ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._align}`]:!0}},this.renderButtonGroup(),(0,i.h)("div",{key:"5436e5f663a2ba7979e26f58e1bf8ba54ee5c919",class:"tabs-content",ref:this.catchTabPanelHost})))}validateAlign(t){(0,a.as)(this,t)}validateLabel(t){(0,a.v)(this,t,{required:!0})}validateOn(t){if("object"==typeof t&&null!==t){(0,a.j)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:a.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:a.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,a.m)(this,"_on",e)}}validateSelected(t){(0,a.a7)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,a.y)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,a.z)("KolTabs",this.state._tabs.length)}componentWillLoad(){this.validateAlign(this._align),this.validateLabel(this._label),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,n=!1){var i,o;this._selected=e,"function"==typeof(null===(i=this._on)||void 0===i?void 0:i.onSelect)&&(null===(o=this._on)||void 0===o||o.onSelect(t,e)),!0===n&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=(0,a.at)(`button#${this.state._label.replace(/\s/g,"-")}-tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return(0,i.g)(this)}static get watchers(){return{_align:["validateAlign"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"]}}};l.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\n\t/* This is the text label. */\n\t.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\n\t.disabled label,\n\t[aria-disabled='true'],\n\t[disabled] {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t\toutline: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tkol-button-group-wc {\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t}\n\n\tkol-button-group-wc button {\n\t\tborder-bottom-color: transparent;\n\t\tborder-bottom-style: solid;\n\t\tdisplay: block;\n\t}\n\n\tdiv.grid,\n\tdiv[role='tabpanel'] {\n\t\theight: 100%;\n\t}\n\n\t:host > .tabs-align-right {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 2;\n\t}\n\n\t:host > .tabs-align-left {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\n\t:host > .tabs-align-left kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 0;\n\t}\n\n\t:host > .tabs-align-bottom {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr auto;\n\t}\n\n\t:host > .tabs-align-bottom kol-button-group-wc {\n\t\torder: 2;\n\t}\n\n\t:host > .tabs-align-bottom kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0 1em 0 0;\n\t}\n\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div {\n\t\tmargin: 0 1em;\n\t}\n\n\t:host > .tabs-align-top {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: auto 1fr;\n\t}\n\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\n\t:host > .tabs-align-top kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\n\t:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0 1em 0 0;\n\t}\n\n\t:host > .tabs-align-top > kol-button-group-wc > div > div {\n\t\tmargin: 0 1em;\n\t}\n\n\t:host > div {\n\t\tdisplay: grid;\n\t}\n\n\t:host > .tabs-align-left kol-button-group-wc,\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\n\t:host > .tabs-align-bottom kol-button-group-wc,\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\torder: 1;\n\t}\n\n\t:host > div.tabs-align-left kol-button-group-wc > div,\n\t:host > div.tabs-align-left kol-button-group-wc > div > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div {\n\t\tdisplay: grid;\n\t}\n\n\t:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n\t\twidth: 100%;\n\t}\n\n\t:host > div.tabs-align-bottom kol-button-group-wc div,\n\t:host > div.tabs-align-top kol-button-group-wc div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n}\n"}}}]);