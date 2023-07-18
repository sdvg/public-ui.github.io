/*! For license information please see 6298.8b6e07b7.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6298],{86298:(t,e,a)=>{a.r(e),a.d(e,{kol_textarea:()=>h});var i=a(11315),l=a(99898),s=a(91300),o=a(75958),n=a(25408);class r extends n.I{constructor(t,e,a){super(t,e,a),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=t}validateHasCounter(t){(0,s.b)(this.component,"_hasCounter",t,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(t){(0,s.e)(this.component,"_maxLength",t,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(t){(0,s.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,s.b)(this.component,"_readOnly",t)}validateResize(t){(0,s.a)(this.component,"_resize",(t=>"string"==typeof t&&("both"===t||"horizontal"===t||"none"===t||"vertical"===t)),new Set("String {both, horizontal, vertical, none}"),t)}validateRequired(t){(0,s.b)(this.component,"_required",t)}validateRows(t){(0,s.e)(this.component,"_rows",t)}validateValue(t){(0,s.w)(this.component,"_value",t,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const h=class{render(){const{ariaDescribedBy:t}=(0,n.g)(this.state),e=!1===this.state._label;return(0,i.h)(i.H,{class:{"has-value":this.state._hasValue}},(0,i.h)("kol-input",{class:{textarea:!0,"hide-label":!!this.state._hideLabel,"has-counter":!!this.state._hasCounter},_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,i.h)("span",{slot:"label"},e?(0,i.h)("slot",null):this.state._label),(0,i.h)("div",{slot:"input"},(0,i.h)("textarea",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onKeyUp:this.onChange,style:{resize:this.state._resize},value:this.state._value})),(0,i.h)("kol-tooltip",{"aria-hidden":"true",hidden:e||!this.state._hideLabel,_align:this._tooltipAlign,_id:`${this.state._id}-tooltip`,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.a)(this.host,this.ref)},this.onChange=t=>{this.ref instanceof HTMLTextAreaElement&&((0,s.s)(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=(t=>{t.style.overflow="hidden";const e=t.rows,a=t.clientHeight/e;t.rows=1;const i=Math.round(t.scrollHeight/a);return t.rows=e,i})(this.ref))),"function"==typeof this.controller.onFacade.onChange&&this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hasCounter=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._label=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=void 0,this._resize="vertical",this._required=void 0,this._rows=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_hasValue:!1,_id:`id-${(0,l.n)()}`,_label:!1,_resize:"vertical"},this.controller=new r(this,"textarea",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAdjustHeight(t){this.controller.validateAdjustHeight(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateResize(t){this.controller.validateResize(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}"}}}]);