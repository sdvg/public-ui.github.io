/*! For license information please see 3578.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3578],{53578:(t,e,a)=>{a.r(e),a.d(e,{kol_input_password:()=>c});var i=a(72108),l=a(47734),s=a(9612),o=a(68949),n=a(11383),r=a(1476),d=a(78517),h=a(70197);const c=class{render(){const{ariaDescribedBy:t}=(0,d.g)(this.state),e=!1===this.state._label;return(0,i.h)(i.H,{class:{"has-value":this.state._hasValue}},(0,i.h)("kol-input",{class:{"hide-label":!!this.state._hideLabel,password:!0},_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,i.h)("span",{slot:"label"},e?(0,i.h)("slot",null):this.state._label),(0,i.h)("div",{slot:"input"},(0,i.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,spellcheck:"false",type:"password",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})),(0,i.h)("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",hidden:e||!this.state._hideLabel,_align:this._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this.onKeyUp=t=>{(0,o.s)(this,"_currentLength",t.target.value.length),"Enter"===t.code?(0,r.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hasCounter=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_currentLength:0,_id:`id-${(0,s.n)()}`,_label:!1,_hasValue:!1},this.controller=new h.I(this,"input-password",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t),"on"===t&&(0,l.d)("[KolInputPassword] Die Option 'autocomplete' sollte bei einem Passwort-Eingabefeld nicht auf \"on\" gesetzt werden.")}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};c.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input.required .input-tooltip .span-label::after{content:'*'}"}}}]);