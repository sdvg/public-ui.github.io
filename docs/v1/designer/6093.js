/*! For license information please see 6093.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6093],{2014:(t,e,i)=>{i.d(e,{A:()=>s});var a=i(66376),o=i(37733),n=i(65388);class s{constructor(t,e,i){var a,s,r,l;if(this.experimentalMode=(0,n.a)(),this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,o.d)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const a=this.tryToStringifyValue(t);this.syncValue(t,a,this.formAssociated),this.syncValue(t,a,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.type=e,this.experimentalMode&&("KOL-BUTTON"===(l=null===(a=this.host)||void 0===a?void 0:a.tagName)||"KOL-INPUT-CHECKBOX"===l||"KOL-INPUT-COLOR"===l||"KOL-INPUT-DATE"===l||"KOL-INPUT-EMAIL"===l||"KOL-INPUT-FILE"===l||"KOL-INPUT-NUMBER"===l||"KOL-INPUT-PASSWORD"===l||"KOL-INPUT-RADIO"===l||"KOL-INPUT-RANGE"===l||"KOL-INPUT-TEXT"===l||"KOL-SELECT"===l||"KOL-TEXTAREA"===l)){switch(null===(s=this.host)||void 0===s||s.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(r=this.host)||void 0===r||r.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){if(this.experimentalMode)try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==e||e.setAttribute(t,`${i}`)}catch(i){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,o.h)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){if(i)switch(this.type){case"file":i.files=t;break;case"select":i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}));break;default:"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value="")}}validateName(t){((t,e,i)=>{(0,a.d)(t,"_name",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,o.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},97123:(t,e,i)=>{i.d(e,{I:()=>u,g:()=>d});var a=i(66376),o=i(92915),n=i(29696),s=i(37733),r=i(91394),l=i(43139),h=i(2014);const d=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,a=[];return!0===e&&a.push(`${t._id}-error`),!0===i&&a.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:a}};class c extends h.A{constructor(t,e,i){super(t,e,i),this.component=t}validateAlert(t){(0,a.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,a.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends c{constructor(t,e,i){super(t,e,i),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this),onInput:this.onInput.bind(this)},this.component=t}validateAccessKey(t){(0,a.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,a.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,a.a)(this.component,"_disabled",t),!0===t&&(0,s.g)()}validateError(t){(0,a.d)(this.component,"_error",t)}validateHideError(t){((t,e,i)=>{(0,a.a)(t,"_hideError",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,o.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,a.d)(this.component,"_hint",t)}validateId(t){(0,a.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,n.a)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,r.s)(t),(0,r.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t,e){var i;e=null!=e?e:t.target.value,(0,r.t)("change",this.host,e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e),this.valueChangeListeners.forEach((t=>t(e)))}onClick(t){var e;(0,r.s)(t),(0,r.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,r.s)(t),(0,r.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}onInput(t,e=!0,i){var a;i=null!=i?i:t.target.value,(0,r.s)(t),(0,r.t)("input",this.host,i),e&&this.setFormAssociatedValue(i),"function"==typeof(null===(a=this.component._on)||void 0===a?void 0:a.onInput)&&this.component._on.onInput(t,i)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},91394:(t,e,i)=>{function a(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,i){e&&function(t,e,i){const a=t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,i))}(e,t,i)}i.d(e,{s:()=>a,t:()=>o})},92915:(t,e,i)=>{i.d(e,{v:()=>o});var a=i(66376);const o=(t,e,i={})=>{(0,a.a)(t,"_hideLabel",e,i)}},6093:(t,e,i)=>{i.r(e),i.d(e,{kol_textarea:()=>u});var a=i(74643),o=i(65388),n=i(66376),s=i(82559),r=i(97123),l=i(79370),h=i(52296);class d extends r.I{constructor(t,e,i){super(t,e,i),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=t}validateHasCounter(t){(0,n.a)(this.component,"_hasCounter",t,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(t){(0,n.e)(this.component,"_maxLength",t,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(t){(0,n.d)(this.component,"_placeholder",t)}validateReadOnly(t){(0,n.a)(this.component,"_readOnly",t)}validateResize(t){(0,n.w)(this.component,"_resize",(t=>"string"==typeof t&&("both"===t||"horizontal"===t||"none"===t||"vertical"===t)),new Set("String {both, horizontal, vertical, none}"),t)}validateRequired(t){(0,n.a)(this.component,"_required",t)}validateRows(t){(0,l.v)(this.component,t)}validateValue(t){(0,n.d)(this.component,"_value",t,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const c=t=>{t.style.overflow="hidden";const e=t.rows,i=t.clientHeight/e;t.rows=1;const a=Math.round(t.scrollHeight/i);return t.rows=e,a},u=class{render(){const{ariaDescribedBy:t}=(0,r.g)(this.state),e=(0,s.s)(this.state._label);return(0,a.h)(a.H,{key:"720aae0c55d6ae89fffb833263cb08ea34f8aff7",class:{"kol-textarea":!0,"has-value":this.state._hasValue}},(0,a.h)(h.m,{key:"98a20921cf6a7a3da8bb746add054daa3683b0c6",class:{textarea:!0,"hide-label":!!this.state._hideLabel,"has-counter":!!this.state._hasCounter},_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_label:this.state._label,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,a.h)("span",{key:"efbe731ad3f37e96023e340c6cc144f6a2b187fa",slot:"label"},e?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{key:"80c1b5a93d30e8323fbc76ef92dbec7d328e51e4",slot:"input"},(0,a.h)("textarea",Object.assign({key:"89c802de4220d0db3864c0b318d85b30034388d8",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onInput:this.onInput,style:{resize:this.state._resize},value:this.state._value})))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onInput=t=>{this.ref instanceof HTMLTextAreaElement&&((0,n.s)(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=c(this.ref)),this.controller.onFacade.onInput(t))},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=!1,this._resize="vertical",this._required=!1,this._rows=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"…",_resize:"vertical"},this.controller=new d(this,"textarea",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAdjustHeight(t){this.controller.validateAdjustHeight(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateResize(t){this.controller.validateResize(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentDidLoad(){setTimeout((()=>{var t;this.ref&&(this._rows=(null===(t=this.state)||void 0===t?void 0:t._rows)&&this.state._rows>c(this.ref)?this.state._rows:c(this.ref))}),0)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};u.style={default:':host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.required label>span::after,.required legend>span::after{content:"*"}:host{display:block}input,textarea{cursor:text}input[type=checkbox],input[type=color],input[type=file],input[type=radio],input[type=range],label,option,select{cursor:pointer}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,select[multiple] option,textarea{font-size:calc(16rem / var(--kolibri-root-font-size, 16));width:100%}input[type=file]{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em}.kol-input.disabled :is(button,input,option,select,textarea,.input-label){cursor:not-allowed;opacity:0.5}.kol-input{display:grid}.kol-input .input-slot{flex-grow:1}input:not([type=checkbox],[type=radio]),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>.kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}.kol-input.required .input-tooltip .span-label::after{content:"*"}'}},29696:(t,e,i)=>{i.d(e,{a:()=>c,c:()=>l,h:()=>r,v:()=>d});var a=i(37733),o=i(66376);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function l(t){return s.test(t)}const h=new Set(["string"]),d=(t,e,i={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,i,o,n)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,o,n)),"string"==typeof e&&!1===r(e,3)&&!1===l(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(i))},c=d},79370:(t,e,i)=>{i.d(e,{v:()=>o});var a=i(66376);const o=(t,e)=>{(0,a.e)(t,"_rows",e,{min:1})}},43139:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(37733),o=i(66376);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,n)}}}]);