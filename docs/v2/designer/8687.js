/*! For license information please see 8687.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8687],{64606:(e,t,a)=>{function i(e){e.stopImmediatePropagation(),e.stopPropagation()}function s(e,t,a){t&&function(e,t,a){e.dispatchEvent(function(e,t){return new CustomEvent(`kol-${e}`,{bubbles:!0,cancelable:!0,composed:!0,detail:t})}(t,a))}(t,e,a)}function n(e){e.preventDefault(),i(e)}a.d(t,{p:()=>n,s:()=>i,t:()=>s})},35779:(e,t,a)=>{a.d(t,{a:()=>d});var i=a(13973),s=a(23975);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},r=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),o=new Set([e=>e("en",r(l)),e=>e("de",r(n))]),d=(e,t)=>{const a=(0,s.g)();if(void 0===a)return(0,i.h)("[I18n] I18nService not available! Please call the global register function."),e;let n=a.translate(e,t);return n===e&&((0,i.h)("[I18n] Locales not initialized! Initialize default locales automatically."),o.forEach((e=>e(((e,t)=>(a.addResourceBundle(e,t),e))))),n=a.translate(e,t)),n}},58687:(e,t,a)=>{a.r(t),a.d(t,{kol_link_wc:()=>o});var i=a(20173),s=a(13973),n=a(35779);const l=[];var r=a(64606);const o=class{constructor(e){(0,i.r)(this,e),this.catchRef=e=>{this.ref=e,(0,s.k)(this.host,this.ref)},this.onClick=e=>{var t,a;!0===this.state._disabled?(0,r.p)(e):"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),e.stopPropagation(),(0,s.a9)(e,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(e,this.state._href))},this.getRenderValues=()=>{const e="string"==typeof this.state._target&&"_self"!==this.state._target,t={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:e?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,s.h)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn _hide-label gesetzt ist."),{isExternal:e,tagAttrs:t}},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._disabled=!1,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._tooltipAlign="right",this.state={_ariaCurrentValue:"page",_href:"",_icons:{}}}render(){const{isExternal:e,tagAttrs:t}=this.getRenderValues(),a=(0,s.M)(this.state._label);return(0,i.h)(i.H,{key:"5af118226534baebdc688bbe495e5d1640d485e9"},(0,i.h)("a",Object.assign({key:"7327fe25769295d0786ddaf0c60b8758e3411715",ref:this.catchRef},t,{accessKey:this.state._accessKey,"aria-current":this.state._ariaCurrent,"aria-disabled":this.state._disabled?"true":void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?`${this.state._label}${e?` (${(0,n.a)("kol-open-link-in-tab")})`:""}`:void 0,class:{disabled:!0===this.state._disabled,"external-link":e,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._disabled?-1:this.state._tabIndex}),(0,i.h)("kol-span-wc",{key:"5d7506bc04fb5790b1ee3f6dfdc56d309c9c829e",_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:a?"":this.state._label||this.state._href},(0,i.h)("slot",{key:"7212d1125baffafd781c7bdd9aef082332fa1d58",name:"expert",slot:"expert"})),e&&(0,i.h)("kol-icon",{class:"external-link-icon",_label:this.state._hideLabel?"":(0,n.a)("kol-open-link-in-tab"),_icons:"codicon codicon-link-external","aria-hidden":this.state._hideLabel})),(0,i.h)("kol-tooltip-wc",{key:"8ad3681d1c91dc44b2282f8ba180d1c1868db92a","aria-hidden":"true",hidden:a||!this.state._hideLabel,_accessKey:this.state._accessKey,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAccessKey(e){(0,s.ax)(this,e)}validateAriaCurrentValue(e){(0,s.ay)(this,e)}validateDisabled(e){(0,s.l)(this,e)}validateDownload(e){(0,s.az)(this,e)}validateHideLabel(e){(0,s.R)(this,e)}validateHref(e){(0,s.aw)(this,e,{required:!0})}validateIcons(e){(0,s.aA)(this,e)}validateLabel(e){(0,s.U)(this,e)}validateOn(e){(0,s.aB)(this,e)}validateRole(e){(0,s.aC)(this,e)}validateTabIndex(e){(0,s.V)(this,e)}validateTarget(e){(0,s.aD)(this,e)}validateTooltipAlign(e){(0,s.i)(this,e)}componentWillLoad(){var e;this.validateAccessKey(this._accessKey),this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTooltipAlign(this._tooltipAlign),this.unsubscribeOnLocationChange=(e=e=>{this.state._ariaCurrent=e===this.state._href?this.state._ariaCurrentValue:void 0},l.push(e),()=>{const t=l.indexOf(e);t>=0&&l.splice(t,1)})}disconnectedCallback(){this.unsubscribeOnLocationChange&&this.unsubscribeOnLocationChange()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaCurrentValue:["validateAriaCurrentValue"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_tooltipAlign:["validateTooltipAlign"]}}}}}]);