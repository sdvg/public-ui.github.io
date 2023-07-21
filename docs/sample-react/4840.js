/*! For license information please see 4840.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[4840],{6254:(e,i,n)=>{n.d(i,{a:()=>c});var a=n(1201),t=n(2977);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","avatar-alt":"Avatar-Bild von {{name}}"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","avatar-alt":"Avatar picture of {{name}}"},s=e=>Object.keys(e).reduce(((i,n)=>(i[`kol-${n}`]=e[n],i)),{}),l=new Set([e=>e("en",s(o)),e=>e("de",s(r))]),c=(e,i)=>{const n=(0,a.g)();if(void 0===n)return(0,t.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=n.translate(e,i);return r===e&&((0,t.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,i)=>(n.addResourceBundle(e,i),e))))),r=n.translate(e,i)),r}},4840:(e,i,n)=>{n.r(i),n.d(i,{kol_spin:()=>o});var a=n(578),t=n(6254),r=n(3170);const o=class{constructor(e){(0,a.r)(this,e),this.showToggled=!1,this._show=!1,this._variant="dot",this.state={_variant:"dot"}}render(){return(0,a.h)(a.H,null,this.state._show?(0,a.h)("span",{"aria-busy":"true","aria-label":(0,t.a)("kol-action-running"),"aria-live":"polite",class:{spin:!0,[this.state._variant]:!0},role:"alert"},function(e){switch(e){case"cycle":return(0,a.h)("span",{class:"loader"});case"none":return(0,a.h)("slot",{name:"expert"});default:return(0,a.h)(a.F,null,(0,a.h)("span",{class:"bg-spin-1"}),(0,a.h)("span",{class:"bg-spin-2"}),(0,a.h)("span",{class:"bg-spin-3"}),(0,a.h)("span",{class:"bg-neutral"}))}}(this.state._variant)):this.showToggled&&(0,a.h)("span",{"aria-label":(0,t.a)("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(e){this.showToggled=!0===this.state._show&&!1===this._show,(0,r.b)(this,"_show",e)}validateVariant(e){((e,i)=>{(0,r.a)(e,"_variant",(e=>"cycle"===e||"dot"===e||"none"===e),new Set(["cycle","dot","none"]),i)})(this,e)}componentWillLoad(){this.validateShow(this._show),this.validateVariant(this._variant)}static get watchers(){return{_show:["validateShow"],_variant:["validateVariant"]}}};o.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.spin.cycle{width:3rem;height:3rem}.spin.cycle>.loader{display:block;width:100%;height:100%;border-radius:50%;position:relative;animation:2s linear infinite rotate}.spin.cycle>.loader::before{content:'';box-sizing:border-box;position:absolute;inset:0px;border-radius:50%;border:5px solid #333;animation:3s linear infinite prixClipFix}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes prixClipFix{0%{border-color:#fff;clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}25%{border-color:#666;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}50%{border-color:#fc0;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}75%{border-color:red;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}100%{border-color:#000;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}}@media (prefers-reduced-motion){.spin.cycle>.loader{animation-duration:4s}.spin.cycle>.loader::before{animation-duration:6s}}.spin.dot{height:1rem;width:3rem}.spin.dot>span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border-radius:50%;border:0.1rem solid #fff;height:0.8rem;position:absolute;top:0.1rem;width:0.8rem}.spin.dot>span:first-child{background-color:#fc0;z-index:0;animation:1s infinite spin1;left:0.1rem}.spin.dot>span:nth-child(2){background-color:red;z-index:1;animation:1s infinite spin2;left:0.1rem}.spin.dot>span:nth-child(3){background-color:#000;z-index:1;animation:1s infinite spin2;left:1.1rem}.spin.dot>span:nth-child(4){background-color:#666;z-index:0;animation:1s infinite spin3;left:2.1rem}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(1rem, 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}@media (prefers-reduced-motion){.spin.dot>span:first-child,.spin.dot>span:nth-child(2),.spin.dot>span:nth-child(3),.spin.dot>span:nth-child(4){animation-duration:2s}}.spin{display:block;padding:0.125rem;position:relative}"}}}]);