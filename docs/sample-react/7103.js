/*! For license information please see 7103.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[7103],{9300:(t,e,i)=>{i.d(e,{a:()=>d});var a=i(9014),n=i(5858);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=t=>Object.keys(t).reduce(((e,i)=>(e[`kol-${i}`]=t[i],e)),{}),r=new Set([t=>t("en",l(s)),t=>t("de",l(o))]),d=(t,e)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),t;let o=i.translate(t,e);return o===t&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((t=>t(((t,e)=>(i.addResourceBundle(t,e),t))))),o=i.translate(t,e)),o}},7103:(t,e,i)=>{i.r(e),i.d(e,{kol_tabs:()=>d});var a=i(7747),n=i(5858),o=i(4300),s=i(9300),l=i(9311);const r=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),d=class{constructor(t){(0,a.r)(this,t),this.onCreateLabel=`${(0,s.a)("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,i)=>{if(i>0){if(e+i<t.length)return t[e+i]._disabled?this.nextPossibleTabIndex(t,e,i+1):e+i}else if(i<0&&e+i>=0)return t[e+i]._disabled?this.nextPossibleTabIndex(t,e,i-1):e+i;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let i=null;switch(t.key){case"ArrowRight":i=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":i=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==i&&this.onSelect(t,i,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,i=!0,a)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===i){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,a||t);t=a||t,i=!1}if(!1===i){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,a||t);(0,n.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,i,a)=>{let n,o;n="_selected"===a?t:this.state._selected,o="_tabs"===a?t:this.state._tabs,o.length>0&&e.set("_selected",this.selectNextNotDisabledTab(n,o))},this.handleTabPanels=()=>{var t,e,i;if(this.tabPanelHost instanceof HTMLDivElement)for(let a=this.tabPanelHost.children.length;a<this.state._tabs.length;a++){const n=document.createElement("div");n.setAttribute("aria-labelledby",`tab-${a}`),n.setAttribute("id",`tabpanel-${a}`),n.setAttribute("role","tabpanel"),n.setAttribute("hidden","");const o=document.createElement("slot");o.setAttribute("name",`tabpanel-slot-${a}`),n.appendChild(o),this.tabPanelHost.appendChild(n),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[a])&&(null===(i=this.host)||void 0===i||i.children[a].setAttribute("slot",`tabpanel-slot-${a}`))}},this.onCreate=t=>{var e,i;t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(i=this.state._on)||void 0===i||i.onCreate(t))},this._ariaLabel=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_ariaLabel:"…",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return(0,a.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._ariaLabel,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,a.h)("kol-button-wc",{_disabled:t._disabled,_icon:t._icon,_iconOnly:t._iconOnly,_label:t._label&&t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,a.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,a.h)("div",{ref:this.catchTabPanelHost})))}validateAriaLabel(t){(0,o.w)(this,"_ariaLabel",t,{required:!0}),(0,n.b)(t)}validateOn(t){if("object"==typeof t&&null!==t){(0,n.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:l.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:l.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,o.s)(this,"_on",e)}}validateSelected(t){(0,o.e)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,o.d)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,n.c)("KolTabs",this.state._tabs.length)}validateTabsAlign(t){((t,e,i)=>{(0,o.a)(t,"_tabsAlign",(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),r,i)})(this,0,t)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,i=!1){var a,n;this._selected=e,"function"==typeof(null===(a=this._on)||void 0===a?void 0:a.onSelect)&&(null===(n=this._on)||void 0===n||n.onSelect(t,e)),!0===i&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=(0,o.k)(`button#tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};d.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}kol-button-group-wc{display:inline-flex;flex-wrap:wrap}kol-button-group-wc button{border:0;border-bottom-color:transparent;border-bottom-style:solid;display:block}div.grid,div[role='tabpanel']{height:100%}:host>.tabs-align-right{display:grid;grid-template-columns:1fr auto}:host>.tabs-align-right kol-button-group-wc{display:grid;order:2}:host>.tabs-align-left{display:grid;grid-template-columns:auto 1fr}:host>.tabs-align-left kol-button-group-wc{display:grid;order:0}:host>.tabs-align-bottom{display:grid;grid-template-rows:1fr auto}:host>.tabs-align-bottom kol-button-group-wc{order:2}:host>.tabs-align-bottom kol-button-group-wc>div{display:flex}:host>.tabs-align-bottom>kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-bottom>kol-button-group-wc>div>div{margin:0 1em}:host>.tabs-align-top{display:grid;grid-template-rows:auto 1fr}:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-top kol-button-group-wc>div{display:flex}:host>.tabs-align-top>kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-top>kol-button-group-wc>div>div{margin:0 1em}:host>div{display:grid}:host>.tabs-align-left kol-button-group-wc,:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-bottom kol-button-group-wc,:host>.tabs-align-right kol-button-group-wc{order:1}:host>div.tabs-align-left kol-button-group-wc>div,:host>div.tabs-align-left kol-button-group-wc>div>div,:host>div.tabs-align-right kol-button-group-wc>div,:host>div.tabs-align-right kol-button-group-wc>div>div{display:grid}:host>div.tabs-align-left kol-button-group-wc>div>div kol-button-wc,:host>div.tabs-align-right kol-button-group-wc>div>div kol-button-wc{width:100%}:host>div.tabs-align-bottom kol-button-group-wc div,:host>div.tabs-align-top kol-button-group-wc div{display:flex;flex-wrap:wrap}"}}}]);