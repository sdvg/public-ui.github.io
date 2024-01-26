/*! For license information please see 81531.0d435afb.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[81531],{86697:(e,a,i)=>{i.d(a,{a:()=>g});var t=i(19456),n=i(18593);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"\xd6ffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Eintr\xe4ge {{start}} bis {{end}} von {{total}}"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},l=e=>Object.keys(e).reduce(((a,i)=>(a[`kol-${i}`]=e[i],a)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(r))]),g=(e,a)=>{const i=(0,n.g)();if(void 0===i)return(0,t.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=i.translate(e,a);return r===e&&((0,t.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,a)=>(i.addResourceBundle(e,a),e))))),r=i.translate(e,a)),r}},81531:(e,a,i)=>{i.r(a),i.d(a,{kol_symbol:()=>o});var t=i(31707),n=i(19456),r=i(86697);const o=class{constructor(e){(0,t.r)(this,e),this._label=void 0,this._symbol=void 0,this.state={_label:(0,r.a)("kol-warning"),_symbol:""}}render(){return(0,t.h)(t.H,null,(0,t.h)("span",{"aria-label":this.state._label,role:"term"},this.state._symbol))}validateLabel(e){(0,n.v)(this,e,{required:!0})}validateSymbol(e){(0,n.q)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateLabel(this._label),this.validateSymbol(this._symbol)}static get watchers(){return{_label:["validateLabel"],_symbol:["validateSymbol"]}}}}}]);