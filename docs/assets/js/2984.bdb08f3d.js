/*! For license information please see 2984.bdb08f3d.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2984],{41104:(t,e,i)=>{i.d(e,{I:()=>o,a:()=>r,f:()=>n});var a=i(93262),l=i(71337),s=i(8397);const n=(t,e,i="")=>{e.forEach(((e,a)=>{const l=`${i}-${a}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?n(t,e.options,l):t.set(l,e))}))};class o extends s.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){(0,a.b)(this.component,"_required",t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class r extends o{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchListValue=(t,e)=>{const i=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),n(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,a.a)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateList(t){(0,a.d)(this.component,"_list",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(t){t=(0,a.m)(t),t=Array.isArray(t)?t[0]:t,(0,a.s)(this.component,"_value",t,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(l.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},72984:(t,e,i)=>{i.r(e),i.d(e,{kol_input_radio:()=>r});var a=i(73621),l=i(1694),s=i(71337),n=i(8397),o=i(41104);const r=class{render(){const{ariaDescribedBy:t,hasError:e}=(0,n.g)(this.state),i=""===this.state._label,l="\u2026"===this.state._label;return(0,a.h)(a.H,null,(0,a.h)("fieldset",{class:{disabled:!0===this.state._disabled,error:!0===e,required:!0===this.state._required,[this.state._orientation]:!0}},(0,a.h)("legend",{class:"block w-full mb-1 leading-normal"},(0,a.h)("span",null,i?(0,a.h)("slot",{name:"expert"}):l?(0,a.h)("slot",null):this.state._label)),this.state._list.map(((e,i)=>{const l=`${this.state._id}-${i}`;return(0,a.h)("kol-input",{class:{radio:!0},key:l,_disabled:this.state._disabled||e.disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:l,_renderNoLabel:!0,_required:this.state._required,_touched:this.state._touched},(0,a.h)("div",{slot:"input"},(0,a.h)("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${l}-label`,title:"",type:"radio",id:l,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${i}`},this.controller.onFacade,{onChange:this.onChange})),(0,a.h)("label",{htmlFor:`${l}`,id:`${l}-label`,style:{height:this.state._hideLabel&&!0!==this.state._required?"0":void 0,margin:this.state._hideLabel&&!0!==this.state._required?"0":void 0,padding:this.state._hideLabel&&!0!==this.state._required?"0":void 0,visibility:this.state._hideLabel&&!0!==this.state._required?"hidden":void 0}},(0,a.h)("span",null,(0,a.h)("span",null,e.label)))))})),e&&(0,a.h)("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg"},this.state._error)))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onChange=t=>{if(t.target instanceof HTMLInputElement){const e=this.controller.getOptionByKey(t.target.value);void 0!==e&&this.controller.setValue(t,e.value)}},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._label=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:(0,l.n)(),_label:"\u2026",_list:[],_orientation:"vertical"},this.controller=new o.a(this,"radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_orientation:["validateOrientation"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};r.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}:host{--border-width:2px;--input-size:1.5em}kol-input .icons{display:none}label{cursor:pointer}input{appearance:none;border-width:var(--border-width);border-style:solid;border-radius:100%;cursor:pointer;display:flex;height:var(--input-size);margin:0;min-height:var(--input-size);min-width:var(--input-size);padding:0;width:var(--input-size)}input:before{border-radius:100%;content:'';margin:auto;height:calc(var(--input-size) / 2);width:calc(var(--input-size) / 2)}input:checked:before{background-color:#000}fieldset{display:flex}fieldset.vertical{flex-direction:column}fieldset [slot='input']{align-items:center;display:flex}.required label>span::after{content:''}"}}}]);