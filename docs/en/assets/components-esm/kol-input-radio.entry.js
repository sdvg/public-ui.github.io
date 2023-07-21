/*! * KoliBri - The accessible HTML-Standard */ import{h,H as Host,r as registerInstance,g as getElement}from"./index-2c046ff1.js";import{n as nonce}from"./dev.utils-e98368e1.js";import{a as propagateFocus}from"./reuse-c2156413.js";import{g as getRenderStates}from"./controller-a27433b4.js";import{a as InputRadioController}from"./controller-9d4a30f8.js";import"./prop.validators-e3c93395.js";import"./a11y.tipps-255c885e.js";import"./index-37b5cbcf.js";import"./label-35927418.js";import"./tab-index-841e81ba.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}:host{--border-width:2px;--input-size:1.5em}kol-input .icons{display:none}label{cursor:pointer}input{appearance:none;border-width:var(--border-width);border-style:solid;border-radius:100%;cursor:pointer;display:flex;height:var(--input-size);margin:0;min-height:var(--input-size);min-width:var(--input-size);padding:0;width:var(--input-size)}input:before{border-radius:100%;content:'';margin:auto;height:calc(var(--input-size) / 2);width:calc(var(--input-size) / 2)}input:checked:before{background-color:#000}fieldset{display:flex}fieldset.vertical{flex-direction:column}fieldset [slot='input']{align-items:center;display:flex}.required label>span::after{content:''}",KolInputRadio=class{render(){const{ariaDescribedBy:t,hasError:e}=getRenderStates(this.state),i=!1===this.state._label;return h(Host,null,h("fieldset",{class:{disabled:!0===this.state._disabled,error:!0===e,required:!0===this.state._required,[this.state._orientation]:!0}},h("legend",{class:"block w-full mb-1 leading-normal"},h("span",null,h("span",{slot:"label"},i?h("slot",null):this.state._label))),this.state._list.map(((e,a)=>{const l=`${this.state._id}-${a}`,s=`radio-${a}`;return h("kol-input",{class:"radio",key:l,_disabled:this.state._disabled||e.disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:l,_renderNoLabel:!0,_required:this.state._required,_slotName:s,_touched:this.state._touched},h("div",{slot:s},h("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${l}-label`,type:"radio",id:l,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${a}`},this.controller.onFacade,{onChange:this.onChange})),h("kol-tooltip",{"aria-hidden":"true",hidden:i||!this.state._hideLabel,_id:`${this.state._id}-tooltip`,_label:"string"==typeof this.state._label?this.state._label:""}),h("label",{htmlFor:`${l}`,id:`${l}-label`,style:{height:this.state._hideLabel&&!0!==this.state._required?"0":void 0,margin:this.state._hideLabel&&!0!==this.state._required?"0":void 0,padding:this.state._hideLabel&&!0!==this.state._required?"0":void 0,visibility:this.state._hideLabel&&!0!==this.state._required?"hidden":void 0}},h("span",null,h("span",null,e.label)))))})),e&&h("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg"},this.state._error)))}constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onChange=t=>{if(t.target instanceof HTMLInputElement){const e=this.controller.getOptionByKey(t.target.value);void 0!==e&&this.controller.setValue(t,e.value)}},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._label=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_id:`id-${nonce()}`,_label:!1,_list:[],_orientation:"vertical"},this.controller=new InputRadioController(this,"input-radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_orientation:["validateOrientation"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolInputRadio.style={default:defaultStyleCss};export{KolInputRadio as kol_input_radio};