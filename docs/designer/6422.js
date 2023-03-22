/*! For license information please see 6422.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6422],{95176:(e,t,i)=>{i.d(t,{a:()=>n,w:()=>r});var a=i(16754);const n=(e,t,i)=>{(0,a.a)(e,t,(e=>"button"===e||"reset"===e||"submit"===e),new Set(["KoliBriButtonType {button, reset, submit}"]),i)},r=(e,t,i)=>{(0,a.a)(e,t,(e=>"primary"===e||"secondary"===e||"normal"===e||"danger"===e||"ghost"===e||"custom"===e),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),i,{defaultValue:"normal"})}},65195:(e,t,i)=>{i.d(t,{a:()=>c});var a=i(3537),n=i(23666);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},s=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),l=new Set([e=>e("en",s(o)),e=>e("de",s(r))]),c=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=i.translate(e,t);return r===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),r=i.translate(e,t)),r}},56422:(e,t,i)=>{i.r(t),i.d(t,{kol_link_button:()=>l});var a=i(99459),n=i(16754),r=i(52573),o=i(95176),s=i(65195);const l=class{constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,r.a)(this.host,this.ref)},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,s.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._variant="normal",this.state={_variant:"normal"}}render(){return(0,a.h)(a.H,null,(0,a.h)("kol-link-wc",{ref:this.catchRef,class:{button:!0,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0},_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_href:this._href,_icon:this._icon,_iconOnly:this._iconOnly,_label:this._label,_on:this._on,_role:"button",_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},(0,a.h)("slot",{name:"expert",slot:"expert"})))}validateCustomClass(e){(0,n.w)(this,"_customClass",e,{defaultValue:void 0})}validateVariant(e){(0,o.w)(this,"_variant",e)}componentWillLoad(){this.validateCustomClass(this._customClass),this.validateVariant(this._variant)}get host(){return(0,a.g)(this)}static get watchers(){return{_customClass:["validateCustomClass"],_variant:["validateVariant"]}}};l.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color;width:100%}:host{display:inline-block}:is(a,button){width:100%}a{text-decoration-line:none}:is(a,button){text-align:center}:is(a,button):disabled{cursor:not-allowed;opacity:0.5}a[role='button']{display:inline-flex}a[role='button']>kol-span-wc{margin:auto}"}}}]);