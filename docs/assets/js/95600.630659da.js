/*! For license information please see 95600.630659da.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[95600],{14037:(e,i,t)=>{t.d(i,{a:()=>o,b:()=>p,c:()=>b,d:()=>s,e:()=>u,f:()=>d,g:()=>l,u:()=>h});var n=t(57830);const a=new Set,o=(e,i)=>{(!1===a.has(e)||(null==i?void 0:i.force))&&(a.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,s=(e,i)=>{(!1===r.has(e)||(null==i?void 0:i.force))&&(r.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},l=(e,i)=>{(!1===r.has(e)||(null==i?void 0:i.force))&&(r.add(e),n.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,d=(e,i=!1,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),e+=!0===i?" \u2705":"",n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};s("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,h=(e,i)=>{(!1===g.has(e)||(null==i?void 0:i.force))&&(g.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},u=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,i=8)=>{i>7&&h(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},27754:(e,i,t)=>{t.d(i,{a:()=>c});var n=t(80687),a=t(14037);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},s=e=>Object.keys(e).reduce(((i,t)=>(i[`kol-${t}`]=e[t],i)),{}),l=new Set([e=>e("en",s(r)),e=>e("de",s(o))]),c=(e,i)=>{const t=(0,n.g)();if(void 0===t)return(0,a.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=t.translate(e,i);return o===e&&((0,a.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,i)=>(t.addResourceBundle(e,i),e))))),o=t.translate(e,i)),o}},95600:(e,i,t)=>{t.r(i),t.d(i,{kol_link_button:()=>r});var n=t(88905),a=t(27754),o=t(78926);const r=class{constructor(e){(0,n.r)(this,e),this.catchRef=e=>{this.ref=e,(0,o.a)(this.host,this.ref)},this._customClass=void 0,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._listenAriaCurrent=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,a.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._variant="normal"}render(){return(0,n.h)(n.H,null,(0,n.h)("kol-link-wc",{ref:this.catchRef,class:{button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_download:this._download,_hideLabel:this._hideLabel,_href:this._href,_icons:this._icons,_label:this._label,_listenAriaCurrent:this._listenAriaCurrent,_on:this._on,_role:"button",_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},(0,n.h)("slot",{name:"expert",slot:"expert"})))}get host(){return(0,n.g)(this)}};r.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:inline-block}:is(a,button){display:inline-flex;place-items:center;text-align:center;text-decoration-line:none}:is(a,button)>kol-span-wc{margin:auto;width:100%}:is(button):disabled{cursor:not-allowed;opacity:0.5}"}}}]);