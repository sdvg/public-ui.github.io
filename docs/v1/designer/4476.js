/*! For license information please see 4476.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[4476],{38728:(e,a,t)=>{t.d(a,{v:()=>n});var i=t(97659);const n=(e,a)=>{(0,i.a)(e,"_hasCloser",a)}},49371:(e,a,t)=>{t.d(a,{t:()=>c});var i=t(50135),n=t(74947);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},s=e=>Object.keys(e).reduce(((a,t)=>(a[`kol-${t}`]=e[t],a)),{}),o=new Set([e=>e("en",s(l)),e=>e("de",s(r))]);let c=(e,a)=>{const t=(0,i.g)();let n=t.translate(e,a);return n===e&&(t.addTranslations(o),n=t.translate(e,a)),n};"test"===n.p&&(c=e=>e)},24476:(e,a,t)=>{t.r(a),t.d(a,{kol_alert_wc:()=>b});var i=t(76215),n=t(49371),r=t(38728),l=t(23651),s=t(50926),o=t(97659),c=t(2831),d=t(29076);const h=e=>(0,i.h)(d.h,{class:"heading-icon",_ariaLabel:"string"==typeof e.label&&e.label.length>0?"":e.ariaLabel,_icons:e.icon}),g=e=>{switch(e.type){case"error":return(0,i.h)(h,{ariaLabel:(0,n.t)("kol-error"),icon:"codicon codicon-error",label:e.label});case"info":return(0,i.h)(h,{ariaLabel:(0,n.t)("kol-info"),icon:"codicon codicon-info",label:e.label});case"warning":return(0,i.h)(h,{ariaLabel:(0,n.t)("kol-warning"),icon:"codicon codicon-warning",label:e.label});case"success":return(0,i.h)(h,{ariaLabel:(0,n.t)("kol-success"),icon:"codicon codicon-pass",label:e.label});default:return(0,i.h)(h,{ariaLabel:(0,n.t)("kol-message"),icon:"codicon codicon-comment",label:e.label})}},b=class{constructor(e){(0,i.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._label=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{s.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){s.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,i.h)(i.H,{key:"2debfccd984d4a2db619936c39e15944e1b3946c",class:{"kol-alert-wc":!0,[this.state._type]:!0,[this.state._variant]:!0,hasCloser:!!this.state._hasCloser},role:this.state._alert?"alert":void 0},(0,i.h)("div",{key:"689e142ed81d2bb63a70fc86281adaa51010722b",class:"heading"},(0,i.h)(g,{key:"bdce3632cef1dbc7d3ad7321ef9e1e8cc06a8d25",label:this.state._label,type:this.state._type}),(0,i.h)("div",{key:"4f4f8e13f88b33c17e10b723f177db57bbcbdbe8"},"string"==typeof this.state._label&&(null===(e=this.state._label)||void 0===e?void 0:e.length)>0&&(0,i.h)(d.c,{key:"24903f587fc99732f63183a0a210137494861c7b",_label:this.state._label,_level:this.state._level}),"msg"===this.state._variant&&(0,i.h)("div",{key:"250ad893b53102aa37665dd931a9a721964d22a6",class:"content"},(0,i.h)("slot",{key:"1c893defe75ebc344d5223b957070624bd741fc4"}))),this.state._hasCloser&&(0,i.h)(d.d,{key:"ce9b41c884f872a273b8911939358a5c6ffa94f5",class:"close",_hideLabel:!0,_icons:{left:{icon:"codicon codicon-close"}},_label:(0,n.t)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this.state._variant&&(0,i.h)("div",{key:"96affeacd2911505b3bca066dc840b17ca3f4042",class:"content"},(0,i.h)("slot",{key:"1e5a41f19ee541f8de0c3175718e2d1a1cffb1ce"})))}validateAlert(e){(0,o.a)(this,"_alert",e)}validateHasCloser(e){(0,r.v)(this,e)}validateLabel(e){(0,l.v)(this,e)}validateLevel(e){(0,c.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,o.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,o.w)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}validateVariant(e){(0,o.w)(this,"_variant",(e=>"card"===e||"msg"===e),new Set("AlertVariant {card, msg}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}}},23651:(e,a,t)=>{t.d(a,{a:()=>h,c:()=>o,h:()=>s,v:()=>d});var i=t(61651),n=t(97659);const r=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(e,a=1){return function(e){var a;return"string"==typeof e&&(null===(a=e.match(r))||void 0===a?void 0:a.length)||0}(e)>=a}function o(e){return l.test(e)}const c=new Set(["string"]),d=(e,a,t={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),c,a,function(e){var a;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(a,t,n,r)=>{var l,c;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(a,t,n,r)),"string"==typeof a&&!1===s(a,3)&&!1===o(a)&&(0,i.a)(`The heading or label ("${a}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof a&&a.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(a=e.hooks)||void 0===a?void 0:a.beforePatch}})}(t))},h=d},2831:(e,a,t)=>{t.d(a,{w:()=>n});var i=t(97659);const n=(e,a)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})}}}]);