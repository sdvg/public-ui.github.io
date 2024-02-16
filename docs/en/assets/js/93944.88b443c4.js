/*! For license information please see 93944.88b443c4.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[93944],{83408:(e,a,i)=>{i.d(a,{a:()=>g});var t=i(75224),r=i(28636);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"\xd6ffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Eintr\xe4ge {{start}} bis {{end}} von {{total}}"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},l=e=>Object.keys(e).reduce(((a,i)=>(a[`kol-${i}`]=e[i],a)),{}),o=new Set([e=>e("en",l(s)),e=>e("de",l(n))]),g=(e,a)=>{const i=(0,r.g)();if(void 0===i)return(0,t.h)("[I18n] I18nService not available! Please call the global register function."),e;let n=i.translate(e,a);return n===e&&((0,t.h)("[I18n] Locales not initialized! Initialize default locales automatically."),o.forEach((e=>e(((e,a)=>(i.addResourceBundle(e,a),e))))),n=i.translate(e,a)),n}},93944:(e,a,i)=>{i.r(a),i.d(a,{kol_avatar_wc:()=>l});var t=i(24236),r=i(75224),n=i(83408);const s=e=>0===e.length?"":e[0].toUpperCase(),l=class{constructor(e){(0,t.r)(this,e),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return(0,t.h)(t.H,null,(0,t.h)("div",{"aria-label":(0,n.a)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,t.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,t.h)("span",{"aria-hidden":"true",class:"initials"},(e=>{const a=e.split(/\s+/),i=a.at(0),t=a.at(-1);return a.length>=2&&i&&t?`${s(i)}${s(t)}`:s(e)})(this.state._label.trim()))))}validateSrc(e){(0,r.F)(this,e)}validateLabel(e){(0,r.v)(this,e,{required:!0})}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}}}}]);