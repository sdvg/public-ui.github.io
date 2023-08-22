/*! For license information please see 43.68f45afe.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[43],{52816:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(59659);const n=(e,t)=>{(0,a.a)(e,"_hasCloser",t)}},75958:(e,t,i)=>{i.d(t,{a:()=>h});var a=i(79543),n=i(14868);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}"},l=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),r=new Set([e=>e("en",l(s)),e=>e("de",l(o))]),h=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=i.translate(e,t);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),o=i.translate(e,t)),o}},43:(e,t,i)=>{i.r(t),i.d(t,{kol_alert_wc:()=>g,kol_input:()=>_});var a=i(69199),n=i(75958),o=i(52816),s=i(2618),l=i(83622),r=i(59659),h=i(8744);const c=e=>(0,a.h)("kol-icon",{class:"heading-icon",_ariaLabel:"string"==typeof e.label&&e.label.length>0?"":e.ariaLabel,_icon:e.icon}),d=e=>{switch(e.type){case"error":return(0,a.h)(c,{ariaLabel:(0,n.a)("kol-error"),icon:"codicon codicon-error",label:e.label});case"info":return(0,a.h)(c,{ariaLabel:(0,n.a)("kol-info"),icon:"codicon codicon-info",label:e.label});case"warning":return(0,a.h)(c,{ariaLabel:(0,n.a)("kol-warning"),icon:"codicon codicon-warning",label:e.label});case"success":return(0,a.h)(c,{ariaLabel:(0,n.a)("kol-success"),icon:"codicon codicon-pass",label:e.label});default:return(0,a.h)(c,{ariaLabel:(0,n.a)("kol-message"),icon:"codicon codicon-comment",label:e.label})}},g=class{constructor(e){(0,a.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._label=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{l.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){l.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,a.h)(a.H,{class:{[this.state._type]:!0,[this.state._variant]:!0,hasCloser:!!this.state._hasCloser},role:this.state._alert?"alert":void 0},(0,a.h)("div",{class:"heading"},(0,a.h)(d,{label:this.state._label,type:this.state._type}),(0,a.h)("div",null,"string"==typeof this.state._label&&(null===(e=this.state._label)||void 0===e?void 0:e.length)>0&&(0,a.h)("kol-heading-wc",{_label:this.state._label,_level:this.state._level}),"msg"===this._variant&&(0,a.h)("div",{class:"content"},(0,a.h)("slot",null))),this.state._hasCloser&&(0,a.h)("kol-button-wc",{class:"close",_hideLabel:!0,_icon:{left:{icon:"codicon codicon-close"}},_label:(0,n.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&(0,a.h)("div",{class:"content"},(0,a.h)("slot",null)))}validateAlert(e){(0,r.a)(this,"_alert",e)}validateHasCloser(e){(0,o.v)(this,e)}validateLabel(e){(0,s.v)(this,e)}validateLevel(e){(0,h.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,r.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,r.w)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}validateVariant(e){(0,r.w)(this,"_variant",(e=>"card"===e||"msg"===e),new Set("AlertVariant {card, msg}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}},_=class{constructor(e){(0,a.r)(this,e),this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=void 0,this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._touched=!1}render(){var e,t,i,o;const s="string"==typeof this._error&&this._error.length>0&&!0===this._touched,l="string"==typeof this._hint&&this._hint.length>0,r=this._slotName?this._slotName:"input";return(0,a.h)(a.H,{class:{disabled:!0===this._disabled,error:!0===s,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,a.h)("label",{id:`${this._id}-label`,hidden:this._hideLabel,htmlFor:this._id},(0,a.h)("span",null,(0,a.h)("slot",{name:"label"}))),l&&(0,a.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,a.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(e=this._icon)||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.right)}},(null===(i=this._icon)||void 0===i?void 0:i.left)&&(0,a.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}),(0,a.h)("slot",{name:r}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,a.h)("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(o=this._icon)||void 0===o?void 0:o.right)&&(0,a.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon})),s&&(0,a.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,a.h)("datalist",{id:`${this._id}-list`},this._suggestions.map((e=>(0,a.h)("option",{value:e})))),this._hasCounter&&(0,a.h)("span",{"aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,a.h)(a.F,null,(0,a.h)("span",{"aria-label":(0,n.a)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,a.h)("span",null,(0,n.a)("kol-characters"))))}}},2618:(e,t,i)=>{i.d(t,{a:()=>_,c:()=>r,h:()=>l,v:()=>d});var a=i(14868),n=i(59659);const o=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(o))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return s.test(e)}function h(e){var t;return{hooks:{afterPatch:(t,i,n,o)=>{var s,h;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(t,i,n,o)),"string"==typeof t&&!1===l(t,3)&&!1===r(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const c=new Set(["string"]),d=(e,t,i={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),c,t,h(i))},g=new Set(["string","false"]),_=(e,t,i={})=>{""!==t&&"false"!==t||(t=!1),(0,n.w)(e,"_label",(e=>!1===e||"string"==typeof e),g,t,h(i))}},8744:(e,t,i)=>{i.d(t,{w:()=>n});var a=i(59659);const n=(e,t)=>{(0,a.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);