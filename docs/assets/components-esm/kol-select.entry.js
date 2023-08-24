/*!
 * KoliBri - The accessible HTML-Standard
 */
import{h,H as Host,r as registerInstance,g as getElement}from"./index-5ab2ea42.js";import{n as nonce}from"./dev.utils-c0c1c4e5.js";import{s as stopPropagation,t as tryToDispatchKoliBriEvent}from"./associated.controller-e261bc1a.js";import{S as STATE_CHANGE_EVENT,a as propagateFocus}from"./reuse-c2156413.js";import{g as getRenderStates}from"./controller-ac00e430.js";import{f as fillKeyOptionMap,v as validateOptionsWithOptgroup}from"./controller-04ef05b8.js";import{v as validateRows}from"./rows-4f484519.js";import{d as watchString,a as watchBoolean,c as watchJsonArrayString}from"./prop.validators-fba03cca.js";import{I as InputIconController}from"./controller-icon-caaea418.js";import"./a11y.tipps-3205ae7d.js";import"./label-f1600f9b.js";import"./tab-index-047d5fa8.js";import"./hide-label-7ff2d26a.js";import"./index-37b5cbcf.js";import"./icon-995dad86.js";class SelectController extends InputIconController{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>"string"==typeof e.value?e.value===t:!!Array.isArray(e.options)&&this.isValueInOptions(t,e.options))),this.filterValuesInOptions=(t,e)=>t.filter((t=>void 0!==this.isValueInOptions(t,e))),this.beforePatchOptions=(t,e)=>{const i=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),fillKeyOptionMap(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value,a=this.filterValuesInOptions(Array.isArray(t)&&t.length>0?t:[],i);!1===this.component._multiple&&0===a.length?(e.set("_value",[i[0].value]),this.onStateChange()):Array.isArray(t)&&a.length<t.length&&(e.set("_value",a),this.onStateChange())}},this.component=t}validateHeight(t){watchString(this.component,"_height",t)}validateOptions(t){validateOptionsWithOptgroup(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateMultiple(t){watchBoolean(this.component,"_multiple",t,{hooks:{beforePatch:this.beforePatchOptions}})}validateRequired(t){watchBoolean(this.component,"_required",t)}validateRows(t){validateRows(this.component,t)}validateValue(t){watchJsonArrayString(this.component,"_value",(()=>!0),t,void 0,{hooks:{beforePatch:this.beforePatchOptions}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(STATE_CHANGE_EVENT)}))}},this.validateHeight(this.component._height),this.validateOptions(this.component._options||this.component._list),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateRows(this.component._rows||this.component._size),this.validateValue(this.component._value)}}const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input.required .input-tooltip .span-label::after{content:'*'}",isSelected=(t,e)=>Array.isArray(t)&&t.includes(e),KolSelect=class{renderOptgroup(t,e){var i;return h("optgroup",{disabled:t.disabled,label:t.label},null===(i=t.options)||void 0===i?void 0:i.map(((t,i)=>{const a=`${e}-${i}`;return Array.isArray(t.options)?this.renderOptgroup(t,a):h("option",{disabled:t.disabled,key:a,selected:isSelected(this.state._value,t.value),value:a},t.label)})))}render(){const{ariaDescribedBy:t}=getRenderStates(this.state),e=!1===this.state._label;return h(Host,{class:{"has-value":this.state._hasValue}},h("kol-input",{class:{"hide-label":!!this.state._hideLabel,select:!0},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},h("span",{slot:"label"},e?h("slot",null):this.state._label),h("div",{slot:"input"},h("select",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,size:this.state._rows,spellcheck:"false",style:{height:this.state._height}},{onClick:this.controller.onFacade.onClick,onBlur:this.controller.onFacade.onBlur,onFocus:this.controller.onFacade.onFocus},{onChange:this.onChange}),this.state._options.map(((t,e)=>{const i=`-${e}`;return Array.isArray(t.options)?this.renderOptgroup(t,i):h("option",{disabled:t.disabled,key:i,selected:isSelected(this.state._value,t.value),value:i},t.label)}))),h("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",hidden:e||!this.state._hideLabel,_align:this._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onChange=t=>{var e,i;this._value=Array.from((null===(e=this.ref)||void 0===e?void 0:e.options)||[]).filter((t=>!0===t.selected)).map((t=>{var e;return null===(e=this.controller.getOptionByKey(t.value))||void 0===e?void 0:e.value})),stopPropagation(t),tryToDispatchKoliBriEvent("change",this.host,this._value),this.controller.setFormAssociatedValue(this._value),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onChange)&&this.state._on.onChange(t,this._value)},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._height=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._options=void 0,this._required=void 0,this._rows=void 0,this._size=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hasValue:!1,_height:"",_id:`id-${nonce()}`,_label:!1,_options:[],_multiple:!1,_value:[]},this.controller=new SelectController(this,"select",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHeight(t){this.controller.validateHeight(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.validateOptions(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOptions(t){this.controller.validateOptions(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateSize(t){this.controller.validateRows(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_height:["validateHeight"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_required:["validateRequired"],_rows:["validateRows"],_size:["validateSize"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolSelect.style={default:defaultStyleCss};export{KolSelect as kol_select};