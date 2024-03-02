/*! For license information please see 9931.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9931],{35779:(e,t,i)=>{i.d(t,{a:()=>g});var r=i(13973),n=i(23975);const a={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},s=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),l=new Set([e=>e("en",s(o)),e=>e("de",s(a))]),g=(e,t)=>{const i=(0,n.g)();if(void 0===i)return(0,r.h)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,t);return a===e&&((0,r.h)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),a=i.translate(e,t)),a}},69931:(e,t,i)=>{i.r(t),i.d(t,{kol_form:()=>o});var r=i(20173),n=i(13973),a=i(35779);const o=class{constructor(e){(0,r.r)(this,e),this.onSubmit=e=>{var t,i;e.preventDefault(),e.stopPropagation(),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onSubmit)&&(null===(i=this.state._on)||void 0===i||i.onSubmit(e))},this.onReset=e=>{var t,i;e.preventDefault(),e.stopPropagation(),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onReset)&&(null===(i=this.state._on)||void 0===i||i.onReset(e))},this.handleLinkClick=e=>{var t;const i=null===(t=e.target)||void 0===t?void 0:t.href;if(i){const e=new URL(i),t=document.querySelector(e.hash);t&&"function"==typeof t.focus&&(t.scrollIntoView({behavior:"smooth"}),t.focus())}},this._on=void 0,this._requiredText=!0,this._errorList=void 0,this.state={}}render(){return(0,r.h)("form",{key:"dea80b85f061a10604684cdd6fc7e19493a01dbe",method:"post",onSubmit:this.onSubmit,onReset:this.onReset,autoComplete:"off",noValidate:!0},this._errorList&&this._errorList.length>0&&(0,r.h)("kol-alert",{_type:"error"},(0,a.a)("kol-error-list-message"),(0,r.h)("nav",{"aria-label":(0,a.a)("kol-error-list")},(0,r.h)("ul",null,this._errorList.map(((e,t)=>(0,r.h)("li",{key:t},(0,r.h)("kol-link",{_href:e.selector,_label:e.message,_on:{onClick:this.handleLinkClick},ref:e=>{0===t&&(this.errorListElement=e)}}))))))),!0===this.state._requiredText?(0,r.h)("p",null,(0,r.h)("kol-indented-text",null,(0,a.a)("kol-form-description"))):"string"==typeof this.state._requiredText&&this.state._requiredText.length>0?(0,r.h)("p",null,(0,r.h)("kol-indented-text",null,this.state._requiredText)):null,(0,r.h)("slot",{key:"6c5120cbfab3903b5f8e1f5d29ed0849c646f5d1"}))}validateOn(e){"object"==typeof e&&null!==e&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRequiredText(e){"boolean"==typeof e?(0,n.B)(this,"_requiredText",e):(0,n.C)(this,"_requiredText",e)}validateErrorList(e){(0,n.D)(this,e)}componentWillLoad(){this.validateOn(this._on),this.validateRequiredText(this._requiredText),this.validateErrorList(this._errorList)}componentDidRender(){var e;this._errorList&&this._errorList.length>0&&(null===(e=this.errorListElement)||void 0===e||e.focus())}static get watchers(){return{_on:["validateOn"],_requiredText:["validateRequiredText"],_errorList:["validateErrorList"]}}}}}]);