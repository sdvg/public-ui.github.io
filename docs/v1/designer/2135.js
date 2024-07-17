/*! For license information please see 2135.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[2135],{70612:(t,e,a)=>{a.d(e,{v:()=>n});var i=a(85779);const n=(t,e)=>{(0,i.v)(t,"_align",e)}},85779:(t,e,a)=>{a.d(e,{v:()=>o});var i=a(40555);const n=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),o=(t,e,a)=>{(0,i.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),n,a,{defaultValue:"top"})}},8891:(t,e,a)=>{a.d(e,{t:()=>d});var i=a(93303),n=a(54627);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},l=t=>Object.keys(t).reduce(((e,a)=>(e[`kol-${a}`]=t[a],e)),{}),r=new Set([t=>t("en",l(s)),t=>t("de",l(o))]);let d=(t,e)=>{const a=(0,i.g)();let n=a.translate(t,e);return n===t&&(a.addTranslations(r),n=a.translate(t,e)),n};"test"===n.p&&(d=t=>t)},32135:(t,e,a)=>{a.r(e),a.d(e,{kol_tabs:()=>b});var i=a(55895),n=a(8891),o=a(70612),s=a(75567),l=a(92114),r=a(89435),d=a(40555),h=a(84912);const b=class{constructor(t){(0,i.r)(this,t),this.onCreateLabel=`${(0,n.t)("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,a)=>{if(a>0){if(e+a<t.length)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a+1):e+a}else if(a<0&&e+a>=0)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a-1):e+a;return e},this.onKeyDown=t=>{let e=null;switch(t.key){case"ArrowRight":e=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":e=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==e&&this.onSelect(t,e)},this.onClickSelect=(t,e)=>{this.onSelect(t,e)},this.onMouseDown=t=>{t.preventDefault(),t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,a=!0,i)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===a){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,i||t);t=i||t,a=!1}if(!1===a){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,i||t);(0,l.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,a,i)=>{let n,o;n="_selected"===i?t:this.state._selected,o="_tabs"===i?t:this.state._tabs,o.length>0&&e.set("_selected",this.selectNextNotDisabledTab(n,o))},this.handleTabPanels=()=>{var t,e,a;if(this.tabPanelHost instanceof HTMLDivElement)for(let i=this.tabPanelHost.children.length;i<this.state._tabs.length;i++){const n=document.createElement("div");n.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${i}`),n.setAttribute("id",`tabpanel-${i}`),n.setAttribute("role","tabpanel"),n.setAttribute("hidden","");const o=document.createElement("slot");o.setAttribute("name",`tabpanel-slot-${i}`),n.appendChild(o),this.tabPanelHost.appendChild(n),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[i])&&(null===(a=this.host)||void 0===a||a.children[i].setAttribute("slot",`tabpanel-slot-${i}`))}},this.onCreate=t=>{var e,a;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(a=this.state._on)||void 0===a||a.onCreate(t))},this._align="top",this._ariaLabel=void 0,this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_align:"top",_label:"…",_selected:0,_tabs:[]}}renderButtonGroup(){return(0,i.h)(h.j,{role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown,class:"kol-tabs"},this.state._tabs.map(((t,e)=>(0,i.h)(h.d,{_disabled:t._disabled,_icons:t._icons||t._icon,_hideLabel:t._hideLabel||t._iconOnly,_label:t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,i.h)(h.d,{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,i.h)(i.H,{key:"52f45558aab0cd4c7ac416f1194b9dd73363997a"},(0,i.h)("div",{key:"a566fffe475f6e28c9a3c2f345e7e31f607acd3a",ref:t=>{this.tabPanelsElement=t},class:{"kol-tabs-wc":!0,[`tabs-align-${this.state._align}`]:!0}},this.renderButtonGroup(),(0,i.h)("div",{key:"366b6a45d8028b171b06d6e426936667294904da",ref:this.catchTabPanelHost})))}validateAlign(t){(0,o.v)(this,t)}validateAriaLabel(t){(0,s.v)(this,t,{required:!0})}validateLabel(t){(0,s.v)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,l.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:r.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:r.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,d.s)(this,"_on",e)}}validateSelected(t){(0,d.e)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,d.c)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,l.c)("KolTabs",this.state._tabs.length)}validateTabsAlign(t){this.validateAlign(t)}componentWillLoad(){this.validateAlign(this._align||this._tabsAlign),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e){var a,i;if(this._selected=e,"function"==typeof(null===(a=this._on)||void 0===a?void 0:a.onSelect)&&(null===(i=this._on)||void 0===i||i.onSelect(t,e)),this.tabPanelsElement){const t=(0,d.k)(`button#${this.state._label.replace(/\s/g,"-")}-tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}get host(){return(0,i.g)(this)}static get watchers(){return{_align:["validateAlign"],_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};b.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host{display:block}.kol-button-group-wc{display:inline-flex;flex-wrap:wrap}.kol-button-group-wc button{border-bottom-color:transparent;border-bottom-style:solid;display:block}div.grid,div[role=tabpanel]{height:100%}:host>.tabs-align-right{display:grid;grid-template-columns:1fr auto}:host>.tabs-align-right .kol-button-group-wc{display:grid;order:2}:host>.tabs-align-left{display:grid;grid-template-columns:auto 1fr}:host>.tabs-align-left .kol-button-group-wc{display:grid;order:0}:host>.tabs-align-bottom{display:grid;grid-template-rows:1fr auto}:host>.tabs-align-bottom .kol-button-group-wc{order:2}:host>.tabs-align-bottom .kol-button-group-wc>div{display:flex}:host>.tabs-align-bottom>.kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-bottom>.kol-button-group-wc>div>div{margin:0 1em}:host>.tabs-align-top{display:grid;grid-template-rows:auto 1fr}:host>.tabs-align-top .kol-button-group-wc{order:0}:host>.tabs-align-top .kol-button-group-wc>div{display:flex}:host>.tabs-align-top>.kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-top>.kol-button-group-wc>div>div{margin:0 1em}:host>div{display:grid}:host>.tabs-align-left .kol-button-group-wc,:host>.tabs-align-top .kol-button-group-wc{order:0}:host>.tabs-align-bottom .kol-button-group-wc,:host>.tabs-align-right .kol-button-group-wc{order:1}:host>div.tabs-align-left .kol-button-group-wc>div,:host>div.tabs-align-left .kol-button-group-wc>div>div,:host>div.tabs-align-right .kol-button-group-wc>div,:host>div.tabs-align-right .kol-button-group-wc>div>div{display:grid}:host>div.tabs-align-left .kol-button-group-wc>div>div .kol-button-wc,:host>div.tabs-align-right .kol-button-group-wc>div>div .kol-button-wc{width:100%}:host>div.tabs-align-bottom .kol-button-group-wc div,:host>div.tabs-align-top .kol-button-group-wc div{display:flex;flex-wrap:wrap}"}},75567:(t,e,a)=>{a.d(e,{a:()=>b,c:()=>r,h:()=>l,v:()=>h});var i=a(92114),n=a(40555);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const d=new Set(["string"]),h=(t,e,a={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,a,n,o)=>{var s,d;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,a,n,o)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(a))},b=h}}]);