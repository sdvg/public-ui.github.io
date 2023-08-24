/*!
 * KoliBri - The accessible HTML-Standard
 */
import{h as t,H as e,r as i,g as a}from"./index-330c31f9.js";import{n as s}from"./dev.utils-5b0de6da.js";import{b as n,s as l}from"./prop.validators-0a66a178.js";import{a as d}from"./reuse-c2156413.js";import{p as o}from"./controller-b2239c17.js";import{g as r}from"./controller-19c67d91.js";import{I as h}from"./controller-4cc44010.js";import"./a11y.tipps-beae7792.js";import"./index-3711603c.js";import"./label-8d64163d.js";import"./tab-index-83c69a92.js";import"./controller-e738a35c.js";import"./controller-icon-0c03c842.js";import"./icon-bab73759.js";const u=(t,e)=>{n(t,"_multiple",e)};class p extends h{constructor(t,e,i){super(t,e,i);this.component=t}validateMultiple(t){u(this.component,t)}componentWillLoad(){super.componentWillLoad();this.validateMultiple(this.component._multiple)}}const c=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}";const m=class{render(){const{ariaDescribedBy:i}=r(this.state);const a=Array.isArray(this.state._list)&&this.state._list.length>0;const s=this.state._label==="";const n=this.state._label==="…";return t(e,{class:{"has-value":this.state._hasValue}},t("kol-input",{class:{email:true,"hide-label":!!this.state._hideLabel},_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return(t=this.ref)===null||t===void 0?void 0:t.focus()}},t("span",{slot:"label"},s?t("slot",{name:"expert"}):n?t("slot",null):this.state._label),t("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":i.length>0?i.join(" "):undefined,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:a?`${this.state._id}-list`:undefined,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){i(this,t);this.catchRef=t=>{this.ref=t;d(this.host,this.ref)};this.onKeyUp=t=>{l(this,"_currentLength",t.target.value.length);if(t.code==="Enter"){o({form:this.host,ref:this.ref})}else{this.controller.onFacade.onChange(t)}};this._accessKey=undefined;this._alert=true;this._autoComplete=undefined;this._disabled=undefined;this._error=undefined;this._hasCounter=undefined;this._hideLabel=undefined;this._hint="";this._icon=undefined;this._id=undefined;this._label=undefined;this._list=undefined;this._maxLength=undefined;this._multiple=undefined;this._name=undefined;this._on=undefined;this._pattern=undefined;this._placeholder=undefined;this._readOnly=undefined;this._required=undefined;this._size=undefined;this._smartButton=undefined;this._syncValueBySelector=undefined;this._tabIndex=undefined;this._touched=false;this._value=undefined;this.state={_autoComplete:"off",_currentLength:0,_hasValue:false,_id:s(),_label:false,_list:[]};this.controller=new p(this,"email",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=this._alert===true;this._touched=this._touched===true;this.controller.componentWillLoad();this.state._hasValue=!!this.state._value;this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return a(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};m.style={default:c};export{m as kol_input_email};
//# sourceMappingURL=kol-input-email.entry.js.map