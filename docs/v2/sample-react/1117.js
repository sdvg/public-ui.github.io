/*! For license information please see 1117.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1117],{8891:(e,a,t)=>{t.d(a,{t:()=>g});var i=t(8886),r=t(1508);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},l=e=>Object.keys(e).reduce(((a,t)=>(a[`kol-${t}`]=e[t],a)),{}),o=new Set([e=>e("en",l(s)),e=>e("de",l(n))]);let g=(e,a)=>{const t=(0,r.g)();let i=t.translate(e,a);return i===e&&(t.addTranslations(o),i=t.translate(e,a)),i};"test"===i.p&&(g=e=>e)},1117:(e,a,t)=>{t.r(a),t.d(a,{kol_avatar_wc:()=>l});var i=t(6148),r=t(8886),n=t(8891);const s=e=>0===e.length?"":e[0].toUpperCase(),l=class{constructor(e){(0,i.r)(this,e),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return(0,i.h)(i.H,{key:"f0faaa1a4b75a9e31a241db182d9995b847c7c2b",class:"kol-avatar-wc"},(0,i.h)("div",{key:"2a06a185324e0bc06e2843f909b236fa4dfed4f9","aria-label":(0,n.t)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,i.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,i.h)("span",{"aria-hidden":"true",class:"initials"},(e=>{const a=e.split(/\s+/),t=a.at(0),i=a.at(-1);return a.length>=2&&t&&i?`${s(t)}${s(i)}`:s(e)})(this.state._label.trim()))))}validateSrc(e){(0,r.D)(this,e)}validateLabel(e){(0,r.v)(this,e,{required:!0})}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}}}}]);