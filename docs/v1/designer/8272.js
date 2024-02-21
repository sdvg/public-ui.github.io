/*! For license information please see 8272.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8272],{92342:(e,i,n)=>{n.d(i,{a:()=>c});var a=n(75993),t=n(85800);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},l=e=>Object.keys(e).reduce(((i,n)=>(i[`kol-${n}`]=e[n],i)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(r))]),c=(e,i)=>{const n=(0,a.g)();if(void 0===n)return(0,t.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=n.translate(e,i);return r===e&&((0,t.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,i)=>(n.addResourceBundle(e,i),e))))),r=n.translate(e,i)),r}},78272:(e,i,n)=>{n.r(i),n.d(i,{kol_version:()=>s});var a,t,r=n(95026),o=n(86759),l=n(92342);(t=a||(a={})).Violett="#5f316e",t.Dunkelrot="#780f2d",t.Rot="#c0003c",t.Orange="#cd5038",t.Hellorange="#f7bb3d",t.Gelb="#f9e03a",t["Hellgrün"]="#c1ca31",t.Oliv="#597c39",t["Dunkelgrün"]="#005c45",t["Grün"]="#00854a",t["Türkis"]="#00818b",t.Hellblau="#80cdec",t.Blau="#0077b6",t.Petrol="#007194",t.Dunkelblau="#004b76",t.Dunkelgrau="#576164",t.Hellgrau="#bec5c9";const s=class{constructor(e){(0,r.r)(this,e),this._label=void 0,this._version=void 0,this.state={_label:"0.0.0-alpha.0"}}render(){return(0,r.h)("kol-badge",{key:"517d542f789eabd86874a6a592d7d7c0f55b549e",_color:a.Hellgrau,_icons:{left:{icon:"codicon codicon-versions",label:(0,l.a)("kol-version")}},_label:this.state._label})}validateLabel(e){(0,o.v)(this,e,{required:!0})}validateVersion(e){this.validateLabel(e)}componentWillLoad(){this.validateLabel(this._label||this._version)}static get watchers(){return{_label:["validateLabel"],_version:["validateVersion"]}}};s.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}"}},86759:(e,i,n)=>{n.d(i,{a:()=>d,c:()=>s,h:()=>l,v:()=>g});var a=n(85800),t=n(28445);const r=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function l(e,i=1){return function(e){var i;return"string"==typeof e&&(null===(i=e.match(r))||void 0===i?void 0:i.length)||0}(e)>=i}function s(e){return o.test(e)}const c=new Set(["string"]),g=(e,i,n={})=>{(0,t.w)(e,"_label",(e=>"string"==typeof e),c,i,function(e){var i;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(i,n,t,r)=>{var o,c;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(i,n,t,r)),"string"==typeof i&&!1===l(i,3)&&!1===s(i)&&(0,a.a)(`The heading or label ("${i}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof i&&i.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(i=e.hooks)||void 0===i?void 0:i.beforePatch}})}(n))},d=g}}]);