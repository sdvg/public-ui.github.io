/*! For license information please see 2252.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[2252],{842:(t,e,i)=>{i.d(e,{a:()=>n,p:()=>r});var a=i(7784),o=i(1263),s=i(4626);const l=t=>{for((0,o.a)()&&((0,a.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,o.a)()&&console.log(t);return(0,o.a)()&&(0,a.d)("↑ Search form element finished."),t},n=(t={})=>{var e,i;const a=l(t.form);if(a instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,s.f)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,s.f)(t,s.K.querySelector("form",a));const o=a;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onReset)&&(null===(i=o._on)||void 0===i||i.onReset(t))}}},r=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,o.a)()&&!1===e.noValidate&&(0,a.d)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof e.requestSubmit?e.requestSubmit():((0,s.f)(t,e),e.dispatchEvent(t))}));else if("KOL-FORM"===e.tagName){(0,s.f)(t,s.K.querySelector("form",e));const i=e;setTimeout((()=>{var e,a;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onSubmit)&&(null===(a=i._on)||void 0===a||a.onSubmit(t))}))}}}},2252:(t,e,i)=>{i.r(e),i.d(e,{kol_input_number:()=>u});var a=i(6954),o=i(1263),s=i(5206),l=i(842),n=i(5764),r=i(3682),d=i(4626),h=i(1999),c=i(6633);class p extends h.I{constructor(t,e,i){super(t,e,i),this.numberOrIsoDateRegex=/^\d+$|(^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])([T ][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?([+-][0-2]\d:[0-5]\d|Z)?)?$)|(^[0-2]\d:[0-5]\d(:[0-5]\d)?$)/,this.parseToString=t=>"string"==typeof t?t:"number"==typeof t?`${t}`:"object"==typeof t&&t instanceof Date?t.toISOString():"",this.validateIso8601=(t,e,i)=>{const a=parseFloat(e),o=a==e;return(0,d.w)(this.component,t,(t=>void 0===t||""===t||o&&"number"==typeof a||this.numberOrIsoDateRegex.test(t)),new Set(["number","Date","string{ISO-8601}"]),this.parseToString(e),{hooks:{afterPatch:t=>{"string"==typeof t&&i&&i(t)}}})},this.component=t}validateAutoComplete(t){(0,d.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateList(){}validateSuggestions(t){(0,r.v)(this.component,t)}onChange(t){super.onChange(t),!!t.target.value!=!!this.component._value&&(this.component._value=t.target.value)}validateMax(t){this.validateIso8601("_max",t)}validateMin(t){this.validateIso8601("_min",t)}validatePlaceholder(t){(0,d.d)(this.component,"_placeholder",t)}validateReadOnly(t){(0,d.a)(this.component,"_readOnly",t)}validateRequired(t){(0,d.a)(this.component,"_required",t)}validateStep(t){(0,d.e)(this.component,"_step",t)}validateType(t){(0,d.w)(this.component,"_type",(t=>"string"==typeof t&&("date"===t||"datetime-local"===t||"month"===t||"number"===t||"time"===t||"week"===t)),new Set(["String {date, datetime-local, month, number, time, week}"]),t)}validateValue(t){this.validateValueEx(t)}validateValueEx(t,e){this.validateIso8601("_value",t,e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateSuggestions(this.component._suggestions||this.component._list),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateStep(this.component._step),this.validateType(this.component._type),this.validateValue(this.component._value)}}const u=class{render(){const{ariaDescribedBy:t}=(0,n.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,i=(0,s.s)(this.state._label);return(0,a.h)(a.H,{key:"ee8be4c26ffc14e163fe9f3c41c218055ea80b64",class:{"kol-input-number":!0,"has-value":this.state._hasValue}},(0,a.h)(c.m,{key:"c216415777ea384065f4461d14b4bd4235c67b92",class:{[this.state._type]:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,a.h)("span",{key:"fad89040c6ed3b8537c20e063dfcb4f1f3c6ddaa",slot:"label"},i?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{key:"a0b221921a881dfe9714db6c26c1203e65a8d9ae",slot:"input"},(0,a.h)("input",Object.assign({key:"9012a67a6279a0c79300e91680d420eee4276f32",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,placeholder:this.state._placeholder,step:this.state._step,spellcheck:"false",type:this.state._type,value:this.state._value},this.controller.onFacade,{onKeyDown:this.onKeyDown})))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onKeyDown=t=>{"Enter"!==t.code&&"NumpadEnter"!==t.code||(0,l.p)({form:this.host,ref:this.ref})},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icon=void 0,this._icons=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._smartButton=void 0,this._suggestions=void 0,this._step=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type="number",this._value=void 0,this.state={_autoComplete:"off",_hasValue:!1,_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"…",_suggestions:[],_type:"number"},this.controller=new p(this,"number",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.validateIcons(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.validateSuggestions(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateStep(t){this.controller.validateStep(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValueEx(t,(t=>{""===t&&this.ref&&(this.ref.value="")}))}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};u.style={default:':host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.required label>span::after,.required legend>span::after{content:"*"}:host{display:block}input,textarea{cursor:text}input[type=checkbox],input[type=color],input[type=file],input[type=radio],input[type=range],label,option,select{cursor:pointer}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,select[multiple] option,textarea{font-size:calc(16rem / var(--kolibri-root-font-size, 16));width:100%}input[type=file]{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em}.kol-input.disabled :is(button,input,option,select,textarea,.input-label){cursor:not-allowed;opacity:0.5}.kol-input{display:grid}.kol-input .input-slot{flex-grow:1}input:not([type=checkbox],[type=radio]),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>.kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}.kol-input.required .input-tooltip .span-label::after{content:"*"}'}},3682:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(4626),o=i(7784);const s=(t,e)=>{(0,a.c)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,o.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}}}]);