/*! For license information please see 5054.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5054],{8134:(e,t,i)=>{i.d(t,{I:()=>d,g:()=>r});var a=i(5858),n=i(9060),o=i(3845),s=i(9311);const r=e=>{const t="string"==typeof e._error&&e._error.length>0&&!0===e._touched,i="string"==typeof e._hint&&e._hint.length>0,a=[];return!0===t&&a.push(`${e._id}-error`),!0===i&&a.push(`${e._id}-hint`),{hasError:t,hasHint:i,ariaDescribedBy:a}},l=(0,s.b)();class h{constructor(e,t,i){var a,n,o,s,r;if(this.syncFormAssociatedName=()=>{var e;l&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(e=null)=>{var t;l&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("value",e))},this.component=e,this.name=t,this.host=i,l){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const e=(null===(a=this.host)||void 0===a?void 0:a.children)||[];for(let t=0;t<e.length;t++)"INPUT"===(null===(n=this.host)||void 0===n?void 0:n.children[t].tagName)&&(null===(o=this.host)||void 0===o||o.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[t]));null===(r=this.host)||void 0===r||r.appendChild(this.formAssociated)}}validateAlert(e){(0,n.b)(this.component,"_alert",e)}validateTouched(e){(0,n.b)(this.component,"_touched",e)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class d extends h{constructor(e,t,i){super(e,t,i),this.hideLabel=!1,this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=e}validateAccessKey(e){(0,n.w)(this.component,"_accessKey",e)}validateAdjustHeight(e){(0,n.b)(this.component,"_adjustHeight",e)}validateDisabled(e){(0,n.b)(this.component,"_disabled",e),!0===e&&(0,a.g)()}validateError(e){(0,n.w)(this.component,"_error",e)}validateHideLabel(e){(0,n.b)(this.component,"_hideLabel",e)}validateHint(e){(0,n.w)(this.component,"_hint",e)}validateId(e){(0,n.w)(this.component,"_id",e,{hooks:{afterPatch:this.syncFormAssociatedName},minLength:1}),""!==e&&void 0!==e||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(e){(0,n.w)(this.component,"_name",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,a.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateOn(e){"object"==typeof e&&(0,n.s)(this.component,"_on",e)}validateSmartButton(e){(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(e){}(0,n.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,o.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e){var t;const i=e.target.value;this.setFormAssociatedValue(i),this.valueChangeListeners.forEach((e=>e(i))),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onChange)&&this.component._on.onChange(e,i)}onClick(e){var t;"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}setValue(e,t){var i;this.setFormAssociatedValue(t),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(e,t)}addValueChangeListener(e){this.valueChangeListeners.push(e)}}},8483:(e,t,i)=>{i.d(t,{a:()=>h});var a=i(6556),n=i(5858);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},r=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),l=new Set([e=>e("en",r(s)),e=>e("de",r(o))]),h=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=i.translate(e,t);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),o=i.translate(e,t)),o}},5054:(e,t,i)=>{i.r(t),i.d(t,{kol_textarea:()=>d});var a=i(9459),n=i(8483),o=i(9060),s=i(7269),r=i(8134),l=i(9311);class h extends r.I{constructor(e,t,i){super(e,t,i),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=e}validateHasCounter(e){(0,o.b)(this.component,"_hasCounter",e,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(e){(0,o.e)(this.component,"_maxLength",e,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(e){(0,o.w)(this.component,"_placeholder",e)}validateReadOnly(e){(0,o.b)(this.component,"_readOnly",e)}validateResize(e){(0,o.a)(this.component,"_resize",(e=>"string"==typeof e&&("both"===e||"horizontal"===e||"none"===e||"vertical"===e)),new Set("String {both, horizontal, vertical, none}"),e)}validateRequired(e){(0,o.b)(this.component,"_required",e)}validateRows(e){(0,o.e)(this.component,"_rows",e)}validateValue(e){(0,o.w)(this.component,"_value",e,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const d=class{render(){const{ariaDescribedBy:e}=(0,r.g)(this.state);return(0,a.h)(a.H,{class:{"has-value":this.state._hasValue}},(0,a.h)("kol-input",{class:{textarea:!0},_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_readOnly:this.state._readOnly,_required:this.state._required,_touched:this.state._touched,onClick:()=>{var e;return null===(e=this.ref)||void 0===e?void 0:e.focus()}},(0,a.h)("span",{slot:"label"},(0,a.h)("slot",null)),(0,a.h)("div",{slot:"input"},(0,a.h)("textarea",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onKeyUp:this.onChange,style:{resize:this.state._resize},value:this.state._value})),this.state._hasCounter&&(0,a.h)("span",{"aria-atomic":"true","aria-live":"polite"},this.state._currentLength,this.state._maxLength&&(0,a.h)(a.F,null,(0,a.h)("span",{"aria-label":(0,n.a)("kol-of"),role:"img"},"/"),this.state._maxLength)," ",(0,a.h)("span",null,(0,n.a)("kol-characters"))))))}constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,s.a)(this.host,this.ref)},this.onChange=e=>{this.ref instanceof HTMLTextAreaElement&&((0,o.s)(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=(e=>{e.style.overflow="hidden";const t=e.rows,i=e.clientHeight/t;e.rows=1;const a=Math.round(e.scrollHeight/i);return e.rows=t,a})(this.ref))),"function"==typeof this.controller.onFacade.onChange&&this.controller.onFacade.onChange(e)},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._hasCounter=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=void 0,this._resize="vertical",this._required=void 0,this._rows=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_hasValue:!1,_id:(0,l.n)(),_resize:"vertical"},this.controller=new h(this,"textarea",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAdjustHeight(e){((e,t)=>{(0,o.b)(e,"_adjustHeight",t)})(this,e)}validateAlert(e){this.controller.validateAlert(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHasCounter(e){((e,t)=>{(0,o.b)(e,"_hasCounter",t)})(this,e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateId(e){this.controller.validateId(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateResize(e){this.controller.validateResize(e)}validateRequired(e){this.controller.validateRequired(e)}validateRows(e){this.controller.validateRows(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.validateAdjustHeight(this._adjustHeight),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((e=>this.state._hasValue=!!e))}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}"}},3845:(e,t,i)=>{i.d(t,{v:()=>s});var a=i(5858),n=i(9060);const o={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(e,t)=>{(0,n.e)(e,"_tabIndex",t,o)}}}]);