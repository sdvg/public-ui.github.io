/*! For license information please see 13893.fe50f3a0.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[13893],{27520:(e,t,n)=>{n.d(t,{a:()=>s,b:()=>b,c:()=>m,d:()=>r,e:()=>h,f:()=>d,g:()=>l,u:()=>u});var a=n(40480);const i=new Set,s=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},o=new Set,r=(e,t)=>{(!1===o.has(e)||(null==t?void 0:t.force))&&(o.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},l=(e,t)=>{(!1===o.has(e)||(null==t?void 0:t.force))&&(o.add(e),a.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,d=(e,t=!1,n)=>{(!1===c.has(e)||(null==n?void 0:n.force))&&(c.add(e),e+=!0===t?" \u2705":"",a.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};r("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,u=(e,t)=>{(!1===g.has(e)||(null==t?void 0:t.force))&&(g.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},h=()=>{s('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},b=e=>{"string"==typeof e&&""!==e||s("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&u(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},45364:(e,t,n)=>{n.d(t,{a:()=>c});var a=n(38696),i=n(27520);const s={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-ascending":"Die Spalte {{column}} ist aufsteigend{{multi}} sortiert.","sort-descending":"Die Spalte {{column}} ist absteigend{{multi}} sortiert.","sort-then-ascending":", dann die Spalte {{column}} aufsteigend","sort-then-descending":", dann die Spalte {{column}} absteigend","sort-then-last-ascending":" und dann die Spalte {{column}} aufsteigend","sort-then-last-descending":" und dann die Spalte {{column}} absteigend","sort-none":"Spalte {{column}} nicht sortiert","table-sort-none":"Keine Spalte ist sortiert.","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"Sorted column {{column}} descending{{multi}}","sort-ascending":"Sorted column {{column}} ascending{{multi}}","sort-then-ascending":", then column {{column}} acending","sort-then-descending":", then column {{column}} descending","sort-then-last-ascending":" and then column {{column}} acending","sort-then-last-descending":" and then column {{column}} descending","sort-none":"column {{column}} not sorted","table-sort-none":"No column is sorted.","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},r=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),l=new Set([e=>e("en",r(o)),e=>e("de",r(s))]),c=(e,t)=>{const n=(0,a.g)();if(void 0===n)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let s=n.translate(e,t);return s===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),s=n.translate(e,t)),s}},13893:(e,t,n)=>{n.r(t),n.d(t,{kol_toast_container:()=>r});var a=n(26231),i=n(45364),s=n(40480);const o=({toastState:e,onClose:t,key:n})=>(0,a.h)("div",{class:`toast ${e.status}`,key:n},(0,a.h)("kol-alert",{class:"alert",_alert:!0,_label:e.toast.label,_level:0,_hasCloser:!0,_type:e.toast.type,_variant:e.toast.alertVariant||"card",_on:{onClose:t}},(0,a.h)("div",{ref:n=>{"function"==typeof e.toast.render&&n&&e.toast.render(n,{close:()=>t()})}},"string"==typeof e.toast.description?e.toast.description:null))),r=class{constructor(e){(0,a.r)(this,e),this.state={_toastStates:[]}}async enqueue(e){const t={toast:e,status:"adding",id:`toast-${(0,s.n)()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[t,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((e=>e.id===t.id?Object.assign(Object.assign({},e),{status:"settled"}):e))})}),300),()=>{this.handleClose(t)}}handleClose(e){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>(t.id===e.id&&(t.status="removing"),t)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((t=>t.id!==e.id))})}),300)}async closeAll(){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((e=>Object.assign(Object.assign({},e),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]})}),300)}render(){return(0,a.h)(a.F,null,this.state._toastStates.length>1&&(0,a.h)("kol-button",{_label:(0,i.a)("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((e=>(0,a.h)(o,{toastState:e,onClose:()=>this.handleClose(e),key:e.id}))))}};r.style={default:"@layer kol-component {\n\t:host {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: fixed;\n\t\tz-index: 200;\n\t}\n\n\t.close-all {\n\t\talign-self: flex-end;\n\t}\n}\n"}}}]);