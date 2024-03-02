/*! For license information please see 2333.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[2333],{96855:(e,a,t)=>{t.d(a,{v:()=>n});var i=t(88126);const n=(e,a)=>{(0,i.a)(e,"_hasCloser",a)}},5180:(e,a,t)=>{t.d(a,{a:()=>d});var i=t(76410),n=t(81851);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},s=e=>Object.keys(e).reduce(((a,t)=>(a[`kol-${t}`]=e[t],a)),{}),r=new Set([e=>e("en",s(l)),e=>e("de",s(o))]),d=(e,a)=>{const t=(0,i.g)();if(void 0===t)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=t.translate(e,a);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((e=>e(((e,a)=>(t.addResourceBundle(e,a),e))))),o=t.translate(e,a)),o}},82333:(e,a,t)=>{t.r(a),t.d(a,{kol_card:()=>d});var i=t(95026),n=t(5180),o=t(96855),l=t(88126),s=t(32024),r=t(97739);const d=class{constructor(e){(0,i.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._on=void 0,this._hasCloser=!1,this._hasFooter=!1,this._heading=void 0,this._headline=void 0,this._label=void 0,this._level=1,this.state={_label:"…"}}render(){return(0,i.h)(i.H,{key:"2dd3cc783017435d353f8adb502d5890376913f1"},(0,i.h)("div",{key:"9e29c17db8ea146c073cb242bec79775dfa5c28f",class:"card"},(0,i.h)("div",{key:"ea56bf87b7198566e16fb13321c633fdef2a4543",class:"header"},(0,i.h)("kol-heading-wc",{key:"6f8b51f50b5babc49d3415ed25864bf8573c48db",_label:this.state._label,_level:this.state._level}),(0,i.h)("slot",{key:"dca749785cb87a36d6421069c5ea3cfe51845d75",name:"header"})),(0,i.h)("div",{key:"b3e49bc23d11a3bf4b9bea78368faed3fddfbced",class:"content"},(0,i.h)("slot",{key:"6a1ab1ada8acfddc6a8ae4df30bc3943f29e3a8c",name:"content"}),(0,i.h)("slot",{key:"b1169b0a9870c3420c581d095eb0c15073df55df"})),this.state._hasFooter&&(0,i.h)("div",{class:"footer"},(0,i.h)("slot",{name:"footer"})),this.state._hasCloser&&(0,i.h)("kol-button-wc",{class:"close",_hideLabel:!0,_icons:{left:{icon:"codicon codicon-close"}},_label:(0,n.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})))}validateOn(e){this.validateOnValue(e)&&(0,l.s)(this,"_on",{onClose:e.onClose})}validateHasCloser(e){(0,o.v)(this,e)}validateHasFooter(e){((e,a)=>{(0,l.a)(e,"_hasFooter",a)})(this,e)}validateHeading(e){this.validateLabel(e)}validateHeadline(e){this.validateLabel(e)}validateLabel(e){(0,s.v)(this,e,{defaultValue:"…"})}validateLevel(e){(0,r.w)(this,e)}componentWillLoad(){this.validateHasCloser(this._hasCloser),this.validateHasFooter(this._hasFooter),this.validateLabel(this._label||this._heading||this._headline),this.validateLevel(this._level),this.validateOn(this._on)}static get watchers(){return{_on:["validateOn"],_hasCloser:["validateHasCloser"],_hasFooter:["validateHasFooter"],_heading:["validateHeading"],_headline:["validateHeadline"],_label:["validateLabel"],_level:["validateLevel"]}}};d.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host>div.card{height:100%;position:relative}.close{position:absolute;top:0;right:0}"}},32024:(e,a,t)=>{t.d(a,{a:()=>h,c:()=>r,h:()=>s,v:()=>c});var i=t(81851),n=t(88126);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(e,a=1){return function(e){var a;return"string"==typeof e&&(null===(a=e.match(o))||void 0===a?void 0:a.length)||0}(e)>=a}function r(e){return l.test(e)}const d=new Set(["string"]),c=(e,a,t={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),d,a,function(e){var a;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(a,t,n,o)=>{var l,d;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(a,t,n,o)),"string"==typeof a&&!1===s(a,3)&&!1===r(a)&&(0,i.a)(`The heading or label ("${a}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof a&&a.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(a=e.hooks)||void 0===a?void 0:a.beforePatch}})}(t))},h=c},97739:(e,a,t)=>{t.d(a,{w:()=>n});var i=t(88126);const n=(e,a)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})}}}]);