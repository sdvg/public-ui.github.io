/*! For license information please see 2465.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[2465],{20415:(t,e,i)=>{i.d(e,{I:()=>o,a:()=>n});var a=i(37418),l=i(56745),s=i(4688);class o extends a.I{constructor(t,e,i){super(t,e,i),this.component=t}validateList(){}validateSuggestions(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateSuggestions(this.component._suggestions||this.component._list)}}class n extends o{constructor(t,e,i){super(t,e,i),this.hasError=!1,this.component=t}validateType(t){(0,s.w)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}validateHasCounter(t){(0,a.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}}},79783:(t,e,i)=>{i.r(e),i.d(e,{kol_input_email:()=>c});var a=i(95946),l=i(77263),s=i(4688),o=i(48125),n=i(30970),r=i(48187),d=i(20415);class h extends d.I{constructor(t,e,i){super(t,e,i),this.component=t}validateMultiple(t){((t,e)=>{(0,s.a)(t,"_multiple",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const c=class{render(){const{ariaDescribedBy:t}=(0,r.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,i=(0,o.s)(this.state._label);return(0,a.h)(a.H,{class:{"has-value":this.state._hasValue}},(0,a.h)("kol-input",{class:{email:!0,"hide-label":!!this.state._hideLabel},_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,a.h)("span",{slot:"label"},i?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{slot:"input"},(0,a.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.a)(this.host,this.ref)},this.onKeyUp=t=>{(0,s.s)(this,"_currentLength",t.target.value.length),"Enter"===t.code?(0,n.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icon=void 0,this._icons=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._maxLength=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._size=void 0,this._smartButton=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${(0,l.n)()}`,_label:"",_suggestions:[]},this.controller=new h(this,"input-email",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.validateIcons(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.validateSuggestions(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_suggestions:["validateSuggestions"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};c.style={default:":host{--a11y-min-size:44px;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input .input-slot{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input.required .input-tooltip .span-label::after{content:'*'}.error.hidden{display:none}"}},56745:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(4688),l=i(6931);const s=(t,e)=>{(0,a.c)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,l.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}}}]);