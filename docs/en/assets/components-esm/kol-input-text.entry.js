/*! * KoliBri - The accessible HTML-Standard */ import{h,H as Host,r as registerInstance,g as getElement}from"./index-5ab2ea42.js";import{a as watchBoolean,s as setState}from"./prop.validators-eed6b0ae.js";import{f as featureHint}from"./a11y.tipps-de9972d7.js";import{n as nonce}from"./dev.utils-eba8f2da.js";import{a as propagateFocus}from"./reuse-c2156413.js";import{p as propagateSubmitEventToForm}from"./controller-68483d1f.js";import{g as getRenderStates}from"./controller-4377db26.js";import{a as InputTextController}from"./controller-513bb459.js";import"./index-accc567c.js";import"./label-14bf9651.js";import"./associated.controller-d0b8d035.js";import"./tab-index-2eec0401.js";import"./hide-label-e9d64d0e.js";import"./controller-c2312abc.js";import"./controller-icon-5dd8ca8b.js";import"./icon-b683fb48.js";import"./suggestions-2b03c4a1.js";const validateAlert=(t,e)=>{watchBoolean(t,"_alert",e)},defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input.required .input-tooltip .span-label::after{content:'*'}";featureHint("[KolInputText] Pre- und post-Label für Währung usw.");const KolInputText=class{render(){const{ariaDescribedBy:t}=getRenderStates(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,a=!1===this.state._label;return h(Host,{class:{"has-value":this.state._hasValue}},h("kol-input",{class:{[this.state._type]:!0,"hide-label":!!this.state._hideLabel},_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_suggestions:this.state._suggestions,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},h("span",{slot:"label"},a?h("slot",null):this.state._label),h("div",{slot:"input"},h("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,spellcheck:"false",type:this.state._type,value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})),h("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",hidden:a||!this.state._hideLabel,_align:this._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){registerInstance(this,t),this.catchRef=t=>{var e;this.ref=t,propagateFocus(this.host,this.ref),this.disconnectedCallback(),null===(e=this.ref)||void 0===e||e.addEventListener("search",this.onChange)},this.onKeyUp=t=>{setState(this,"_currentLength",t.target.value.length),"Enter"===t.code||"NumpadEnter"===t.code?propagateSubmitEventToForm({form:this.host,ref:this.ref}):this.onChange(t)},this.onChange=t=>{var e,a;this.oldValue!==(null===(e=this.ref)||void 0===e?void 0:e.value)&&(this.oldValue=null===(a=this.ref)||void 0===a?void 0:a.value,this.controller.onFacade.onChange(t))},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hasCounter=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._suggestions=void 0,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type="text",this._value=void 0,this.state={_autoComplete:"off",_currentLength:0,_id:`id-${nonce()}`,_hasValue:!1,_label:!1,_suggestions:[],_type:"text"},this.controller=new InputTextController(this,"input-text",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){validateAlert(this,t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.validateSuggestions(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.oldValue=this._value,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}disconnectedCallback(){var t;null===(t=this.ref)||void 0===t||t.removeEventListener("search",this.onChange)}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_suggestions:["validateSuggestions"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};KolInputText.style={default:defaultStyleCss};export{KolInputText as kol_input_text};