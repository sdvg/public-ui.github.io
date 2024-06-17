/*! For license information please see 7533.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[7533],{3164:(e,t,a)=>{a.d(t,{t:()=>c});var s=a(3460),i=a(5206);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},r=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),l=new Set([e=>e("en",r(o)),e=>e("de",r(n))]);let c=(e,t)=>{const a=(0,s.g)();let i=a.translate(e,t);return i===e&&(a.addTranslations(l),i=a.translate(e,t)),i};"test"===i.p&&(c=e=>e)},7533:(e,t,a)=>{a.r(t),a.d(t,{kol_toast_container:()=>c});var s=a(6954),i=a(3164),n=a(1263),o=a(6633),r=(e,t,a)=>new Promise(((s,i)=>{var n=e=>{try{r(a.next(e))}catch(e){i(e)}},o=e=>{try{r(a.throw(e))}catch(e){i(e)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,o);r((a=a.apply(e,t)).next())}));const l=({toastState:e,onClose:t,key:a})=>(0,s.h)("div",{class:`toast ${e.status}`,key:a},(0,s.h)(o.l,{class:"kol-alert alert",_alert:!0,_label:e.toast.label,_level:0,_hasCloser:!0,_type:e.toast.type,_variant:"card",_on:{onClose:t}},(0,s.h)("div",{ref:a=>{"function"==typeof e.toast.render&&a&&e.toast.render(a,{close:()=>t()})}},"string"==typeof e.toast.description?e.toast.description:null))),c=class{constructor(e){(0,s.r)(this,e),this.state={_toastStates:[]}}enqueue(e){return r(this,null,(function*(){const t={toast:e,status:"adding",id:`toast-${(0,n.n)()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[t,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((e=>e.id===t.id?Object.assign(Object.assign({},e),{status:"settled"}):e))})}),300),()=>{this.handleClose(t)}}))}handleClose(e){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>(t.id===e.id&&(t.status="removing"),t)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((t=>t.id!==e.id))})}),300)}closeAll(){return r(this,null,(function*(){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((e=>Object.assign(Object.assign({},e),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]})}),300)}))}render(){return(0,s.h)(s.H,{key:"ec2876a778c1c986f7963ca9c3b22cf074614a65",class:"kol-toast-container"},(0,s.h)(s.F,{key:"2b66532d05219daa75c8aa2e1be42a9ce4681b0b"},this.state._toastStates.length>1&&(0,s.h)(o.p,{key:"52cebc7ce0ec46564c7fb0b871abbac04be6a205",_label:(0,i.t)("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((e=>(0,s.h)(l,{toastState:e,onClose:()=>this.handleClose(e),key:e.id})))))}};c.style={default:"@layer kol-component {\n  :host {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    z-index: 200;\n  }\n  .close-all {\n    align-self: flex-end;\n  }\n}"}}}]);