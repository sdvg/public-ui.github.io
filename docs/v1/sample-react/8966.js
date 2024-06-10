/*! For license information please see 8966.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[8966],{2695:(t,e,i)=>{i.d(e,{I:()=>l,a:()=>n});var a=i(4612),o=i(7159),s=i(8325);class l extends a.I{constructor(t,e,i){super(t,e,i),this.component=t}validateList(){}validateSuggestions(t){(0,o.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateSuggestions(this.component._suggestions||this.component._list)}}class n extends l{constructor(t,e,i){super(t,e,i),this.hasError=!1,this.component=t}validateType(t){(0,s.w)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}validateHasCounter(t){(0,a.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}}},4612:(t,e,i)=>{i.d(e,{I:()=>l,v:()=>s});var a=i(8325),o=i(9288);const s=(t,e)=>{(0,a.a)(t,"_hasCounter",e)};class l extends o.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAutoComplete(t){(0,a.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHasCounter(t){s(this.component,t)}validateMaxLength(t){(0,a.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,a.d)(this.component,"_pattern",t)}validatePlaceholder(t){(0,a.d)(this.component,"_placeholder",t)}validateReadOnly(t){(0,a.a)(this.component,"_readOnly",t)}validateRequired(t){(0,a.a)(this.component,"_required",t)}validateSize(t){(0,a.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,a.d)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}}},2421:(t,e,i)=>{i.d(e,{a:()=>n,p:()=>r});var a=i(9018),o=i(1709),s=i(8325);const l=t=>{for((0,o.a)()&&((0,a.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,o.a)()&&console.log(t);return(0,o.a)()&&(0,a.d)("↑ Search form element finished."),t},n=(t={})=>{var e,i;const a=l(t.form);if(a instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,s.f)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,s.f)(t,s.K.querySelector("form",a));const o=a;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onReset)&&(null===(i=o._on)||void 0===i||i.onReset(t))}}},r=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,o.a)()&&!1===e.noValidate&&(0,a.d)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof e.requestSubmit?e.requestSubmit():((0,s.f)(t,e),e.dispatchEvent(t))}));else if("KOL-FORM"===e.tagName){(0,s.f)(t,s.K.querySelector("form",e));const i=e;setTimeout((()=>{var e,a;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onSubmit)&&(null===(a=i._on)||void 0===a||a.onSubmit(t))}))}}}},8966:(t,e,i)=>{i.r(e),i.d(e,{kol_input_text:()=>u});var a=i(4566),o=i(8325),s=i(9018),l=i(1709),n=i(4186),r=i(2421),d=i(3072),h=i(2695),c=i(5109);(0,s.f)("[KolInputText] Pre- und post-Label für Währung usw.");const u=class{render(){const{ariaDescribedBy:t}=(0,d.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,i=(0,n.s)(this.state._label);return(0,a.h)(a.H,{key:"63069144573cd9e9373f5f3df6b6d150d084846d",class:{"kol-input-text":!0,"has-value":this.state._hasValue}},(0,a.h)(c.m,{key:"77907708b03f69b212e0e822ebbdd995dc5a8ee3",class:{[this.state._type]:!0,"hide-label":!!this.state._hideLabel},_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,a.h)("span",{key:"428f66bab5cf5b8d13d9ce4b8889f643b782c9cf",slot:"label"},i?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{key:"2972a9ece1988162d27b7d76c171a6e8ee226869",slot:"input"},(0,a.h)("input",Object.assign({key:"dc234b2039b0839956c86906f8dd65ce090520bb",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,spellcheck:"false",type:this.state._type,value:this.state._value},this.controller.onFacade,{onChange:this.onChange,onInput:this.onInput,onKeyDown:this.onKeyDown})))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this.onChange=t=>{var e,i;this.oldValue!==(null===(e=this.ref)||void 0===e?void 0:e.value)&&(this.oldValue=null===(i=this.ref)||void 0===i?void 0:i.value,this.controller.onFacade.onChange(t))},this.onInput=t=>{(0,o.s)(this,"_currentLength",t.target.value.length),this.controller.onFacade.onInput(t)},this.onKeyDown=t=>{"Enter"!==t.code&&"NumpadEnter"!==t.code||(0,r.p)({form:this.host,ref:this.ref})},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icon=void 0,this._icons=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._size=void 0,this._suggestions=void 0,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type="text",this._value=void 0,this.state={_autoComplete:"off",_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${(0,l.n)()}`,_label:"…",_suggestions:[],_type:"text"},this.controller=new h.a(this,"text",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){((t,e)=>{(0,o.a)(t,"_alert",e)})(this,t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.validateIcons(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.validateSuggestions(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.oldValue=this._value,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_suggestions:["validateSuggestions"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};u.style={default:':host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.required label>span::after,.required legend>span::after{content:"*"}:host{display:block}input,textarea{cursor:text}input[type=checkbox],input[type=color],input[type=file],input[type=radio],input[type=range],label,option,select{cursor:pointer}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,select[multiple] option,textarea{font-size:calc(16rem / var(--kolibri-root-font-size, 16));width:100%}input[type=file]{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em}.kol-input.disabled :is(button,input,option,select,textarea,.input-label){cursor:not-allowed;opacity:0.5}.kol-input{display:grid}.kol-input .input-slot{flex-grow:1}input:not([type=checkbox],[type=radio]),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>.kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}.kol-input.required .input-tooltip .span-label::after{content:"*"}'}},7159:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(8325),o=i(9018);const s=(t,e)=>{(0,a.c)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,o.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}}}]);