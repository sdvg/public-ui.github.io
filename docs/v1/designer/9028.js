/*! For license information please see 9028.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9028],{5180:(e,a,i)=>{i.d(a,{a:()=>g});var t=i(76410),n=i(81851);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},l=e=>Object.keys(e).reduce(((a,i)=>(a[`kol-${i}`]=e[i],a)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(r))]),g=(e,a)=>{const i=(0,t.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=i.translate(e,a);return r===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,a)=>(i.addResourceBundle(e,a),e))))),r=i.translate(e,a)),r}},39028:(e,a,i)=>{i.r(a),i.d(a,{kol_symbol:()=>l});var t=i(95026),n=i(5180),r=i(32024),o=i(88126);const l=class{constructor(e){(0,t.r)(this,e),this._ariaLabel=void 0,this._label=void 0,this._symbol=void 0,this.state={_label:(0,n.a)("kol-warning"),_symbol:"…"}}render(){return(0,t.h)(t.H,{key:"2d5a491f86548d3ae09f56e3445ca224fe6a7db9"},(0,t.h)("span",{key:"8c23febba820e390d90650f88affa5fe59325a5f","aria-label":this.state._label,role:"term"},this.state._symbol))}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e){(0,r.v)(this,e,{defaultValue:(0,n.a)("kol-warning")})}validateSymbol(e){(0,o.d)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateSymbol(this._symbol)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_symbol:["validateSymbol"]}}}},32024:(e,a,i)=>{i.d(a,{a:()=>d,c:()=>s,h:()=>l,v:()=>c});var t=i(81851),n=i(88126);const r=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function l(e,a=1){return function(e){var a;return"string"==typeof e&&(null===(a=e.match(r))||void 0===a?void 0:a.length)||0}(e)>=a}function s(e){return o.test(e)}const g=new Set(["string"]),c=(e,a,i={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),g,a,function(e){var a;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(a,i,n,r)=>{var o,g;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(g=e.hooks)||void 0===g||g.afterPatch(a,i,n,r)),"string"==typeof a&&!1===l(a,3)&&!1===s(a)&&(0,t.a)(`The heading or label ("${a}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof a&&a.length>80&&(0,t.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(a=e.hooks)||void 0===a?void 0:a.beforePatch}})}(i))},d=c}}]);