/*! For license information please see 17327.38c4af6b.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[17327],{86697:(e,t,i)=>{i.d(t,{a:()=>h});var a=i(19456),s=i(18593);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"\xd6ffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Eintr\xe4ge {{start}} bis {{end}} von {{total}}"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},l=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),o=new Set([e=>e("en",l(r)),e=>e("de",l(n))]),h=(e,t)=>{const i=(0,s.g)();if(void 0===i)return(0,a.d)("[I18n] I18nService not available! Please call the global register function."),e;let n=i.translate(e,t);return n===e&&((0,a.d)("[I18n] Locales not initialized! Initialize default locales automatically."),o.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),n=i.translate(e,t)),n}},17327:(e,t,i)=>{i.r(t),i.d(t,{kol_link_wc:()=>o});var a=i(31707),s=i(19456),n=i(86697);let r;const l=[],o=class{constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,s.b)(this.host,this.ref)},this.onClick=e=>{var t,i;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),e.stopPropagation(),(0,s.$)(e,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(e,this.state._href))},this.getRenderValues=()=>{const e="string"==typeof this.state._target&&"_self"!==this.state._target,t={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:e?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,s.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn _hide-label gesetzt ist."),{isExternal:e,tagAttrs:t}},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._tooltipAlign="right",this.state={_ariaCurrentValue:"page",_href:"",_icons:{}}}render(){const{isExternal:e,tagAttrs:t}=this.getRenderValues(),i=(0,s.C)(this.state._label);return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{accessKey:this.state._accessKey,"aria-current":this.state._ariaCurrent,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?`${this.state._label}${e?` (${(0,n.a)("kol-open-link-in-tab")})`:""}`:void 0,class:{"external-link":e,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:i?"":this.state._label||this.state._href},(0,a.h)("slot",{name:"expert",slot:"expert"})),e&&(0,a.h)("kol-icon",{class:"external-link-icon",_label:this.state._hideLabel?"":(0,n.a)("kol-open-link-in-tab"),_icons:"codicon codicon-link-external","aria-hidden":this.state._hideLabel})),(0,a.h)("kol-tooltip-wc",{"aria-hidden":"true",hidden:i||!this.state._hideLabel,_accessKey:this.state._accessKey,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAccessKey(e){(0,s.am)(this,e)}validateAriaCurrentValue(e){(0,s.an)(this,e)}validateDownload(e){(0,s.ao)(this,e)}validateHideLabel(e){(0,s.H)(this,e)}validateHref(e){(0,s.ap)(this,e,{required:!0})}validateIcons(e){(0,s.aq)(this,e)}validateLabel(e){(0,s.J)(this,e)}validateOn(e){(0,s.ar)(this,e)}validateRole(e){(0,s.as)(this,e)}validateTabIndex(e){(0,s.L)(this,e)}validateTarget(e){(0,s.at)(this,e)}validateTooltipAlign(e){(0,s.a)(this,e)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTooltipAlign(this._tooltipAlign),this.unsubscribeOnLocationChange=((e,t=!0)=>(t&&"string"==typeof r&&e(r),l.push(e),()=>{const t=l.indexOf(e);t>=0&&l.splice(t,1)}))((e=>{this.state._ariaCurrent=e===this.state._href?this.state._ariaCurrentValue:void 0}))}disconnectedCallback(){this.unsubscribeOnLocationChange&&this.unsubscribeOnLocationChange()}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaCurrentValue:["validateAriaCurrentValue"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_tooltipAlign:["validateTooltipAlign"]}}}}}]);