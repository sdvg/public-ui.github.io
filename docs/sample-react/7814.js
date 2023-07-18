/*! For license information please see 7814.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[7814],{1998:(e,i,t)=>{t.d(i,{v:()=>n});var a=t(3170);const n=(e,i)=>{(0,a.b)(e,"_hasCloser",i)}},6536:(e,i,t)=>{t.d(i,{a:()=>h});var a=t(1201),n=t(2977);const s={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},r=e=>Object.keys(e).reduce(((i,t)=>(i[`kol-${t}`]=e[t],i)),{}),l=new Set([e=>e("en",r(o)),e=>e("de",r(s))]),h=(e,i)=>{const t=(0,a.g)();if(void 0===t)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let s=t.translate(e,i);return s===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,i)=>(t.addResourceBundle(e,i),e))))),s=t.translate(e,i)),s}},7814:(e,i,t)=>{t.r(i),t.d(i,{kol_alert_wc:()=>c,kol_input:()=>_});var a=t(578),n=t(6536),s=t(1998),o=t(9953),r=t(3170),l=t(5400);const h=e=>(0,a.h)("kol-icon",{class:"heading-icon",_ariaLabel:"string"==typeof e.heading&&e.heading.length>0?"":e.ariaLabel,_icon:e.icon}),d=e=>{switch(e.type){case"error":return(0,a.h)(h,{ariaLabel:(0,n.a)("kol-error"),icon:"codicon codicon-error",heading:e.heading});case"info":return(0,a.h)(h,{ariaLabel:(0,n.a)("kol-info"),icon:"codicon codicon-info",heading:e.heading});case"warning":return(0,a.h)(h,{ariaLabel:(0,n.a)("kol-warning"),icon:"codicon codicon-warning",heading:e.heading});case"success":return(0,a.h)(h,{ariaLabel:(0,n.a)("kol-success"),icon:"codicon codicon-pass",heading:e.heading});default:return(0,a.h)(h,{ariaLabel:(0,n.a)("kol-message"),icon:"codicon codicon-comment",heading:e.heading})}},c=class{constructor(e){(0,a.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._heading=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{o.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){o.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,a.h)(a.H,{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},(0,a.h)("div",{class:"heading"},(0,a.h)(d,{heading:this.state._heading,type:this.state._type}),(0,a.h)("div",null,"string"==typeof this.state._heading&&(null===(e=this.state._heading)||void 0===e?void 0:e.length)>0&&(0,a.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),"msg"===this._variant&&(0,a.h)("div",{class:"content"},(0,a.h)("slot",null))),this.state._hasCloser&&(0,a.h)("kol-button-wc",{class:"close",_hideLabel:!0,_icon:{left:{icon:"codicon codicon-close"}},_label:(0,n.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&(0,a.h)("div",{class:"content"},(0,a.h)("slot",null)))}validateAlert(e){(0,r.b)(this,"_alert",e)}validateHasCloser(e){(0,s.v)(this,e)}validateHeading(e){(0,r.w)(this,"_heading",e)}validateLevel(e){(0,l.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,r.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,r.a)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}validateVariant(e){(0,r.a)(this,"_variant",(e=>"card"===e||"msg"===e),new Set("AlertVariant {card, msg}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}},_=class{constructor(e){(0,a.r)(this,e),this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=void 0,this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._smartButton=void 0,this._touched=!1}render(){var e,i,t,s;const o="string"==typeof this._error&&this._error.length>0&&!0===this._touched,r="string"==typeof this._hint&&this._hint.length>0,l=!0===this._hideLabel&&!0!==this._required,h=this._slotName?this._slotName:"input";return(0,a.h)(a.H,{class:{disabled:!0===this._disabled,error:!0===o,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,a.h)("label",{id:`${this._id}-label`,hidden:l,htmlFor:this._id},(0,a.h)("span",null,(0,a.h)("slot",{name:"label"}))),r&&(0,a.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,a.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(e=this._icon)||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(i=this._icon)||void 0===i?void 0:i.right)}},(null===(t=this._icon)||void 0===t?void 0:t.left)&&(0,a.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}),(0,a.h)("slot",{name:h}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,a.h)("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(s=this._icon)||void 0===s?void 0:s.right)&&(0,a.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon})),o&&(0,a.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,a.h)("datalist",{id:`${this._id}-list`},this._list.map((e=>(0,a.h)("option",{value:e})))),this._hasCounter&&(0,a.h)("span",{"aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,a.h)(a.F,null,(0,a.h)("span",{"aria-label":(0,n.a)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,a.h)("span",null,(0,n.a)("kol-characters"))))}}},5400:(e,i,t)=>{t.d(i,{w:()=>n});var a=t(3170);const n=(e,i)=>{(0,a.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),i,{defaultValue:1,required:!0})}}}]);