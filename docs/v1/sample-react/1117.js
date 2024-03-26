/*! For license information please see 1117.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1117],{6175:(e,a,t)=>{t.d(a,{t:()=>c});var i=t(1508),r=t(8125);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},o=e=>Object.keys(e).reduce(((a,t)=>(a[`kol-${t}`]=e[t],a)),{}),l=new Set([e=>e("en",o(s)),e=>e("de",o(n))]);let c=(e,a)=>{const t=(0,i.g)();let r=t.translate(e,a);return r===e&&(t.addTranslations(l),r=t.translate(e,a)),r};"test"===r.p&&(c=e=>e)},1430:(e,a,t)=>{t.d(a,{v:()=>r});var i=t(2016);const r=(e,a,t)=>{(0,i.d)(e,"_src",a,t)}},1117:(e,a,t)=>{t.r(a),t.d(a,{kol_avatar_wc:()=>l});var i=t(2951),r=t(6175),n=t(1430),s=t(9415);const o=e=>0===e.length?"":e[0].toUpperCase(),l=class{constructor(e){(0,i.r)(this,e),this._src=void 0,this._label=void 0,this.state={_src:"",_label:"…"}}render(){return(0,i.h)(i.H,{key:"2f2414fc7a3719e1655faf3d3425d16185619365",class:"kol-avatar-wc"},(0,i.h)("div",{key:"81b68bcf427acaa7484cbf9fc11b6235025f3eae","aria-label":(0,r.t)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,i.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,i.h)("span",{"aria-hidden":"true",class:"initials"},(e=>{const a=e.split(/\s+/),t=a.at(0),i=a.at(-1);return a.length>=2&&t&&i?`${o(t)}${o(i)}`:o(e)})(this.state._label.trim()))))}validateSrc(e){(0,n.v)(this,e)}validateLabel(e){(0,s.v)(this,e,{required:!0})}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}}},9415:(e,a,t)=>{t.d(a,{a:()=>h,c:()=>l,h:()=>o,v:()=>g});var i=t(7703),r=t(2016);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function o(e,a=1){return function(e){var a;return"string"==typeof e&&(null===(a=e.match(n))||void 0===a?void 0:a.length)||0}(e)>=a}function l(e){return s.test(e)}const c=new Set(["string"]),g=(e,a,t={})=>{(0,r.w)(e,"_label",(e=>"string"==typeof e),c,a,function(e){var a;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(a,t,r,n)=>{var s,c;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(a,t,r,n)),"string"==typeof a&&!1===o(a,3)&&!1===l(a)&&(0,i.a)(`The heading or label ("${a}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof a&&a.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(a=e.hooks)||void 0===a?void 0:a.beforePatch}})}(t))},h=g}}]);