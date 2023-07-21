/*! * KoliBri - The accessible HTML-Standard */ import{h as t,H as e,r as i,g as a}from"./index-330c31f9.js";import{n as s}from"./dev.utils-5b0de6da.js";import{a as n}from"./reuse-c2156413.js";import{p as l}from"./controller-b2239c17.js";import{g as d}from"./controller-19c67d91.js";import{b as o,a as h,d as r,s as u,e as p}from"./prop.validators-0a66a178.js";import{I as c}from"./controller-icon-0c03c842.js";import"./a11y.tipps-beae7792.js";import"./label-8d64163d.js";import"./tab-index-83c69a92.js";import"./index-3711603c.js";import"./icon-bab73759.js";const f=(t,e)=>{o(t,"_readOnly",e)};class m extends c{constructor(t,e,i){super(t,e,i);this.validateIso8601=(t,e,i)=>h(this.component,t,(t=>t===undefined||t==null||t===""||this.validateDateString(t)),new Set(["Date","string{ISO-8601}"]),this.tryParseToString(e),{hooks:{afterPatch:t=>{if(typeof t==="string"&&i){i(t)}}}});this.component=t}validateAutoComplete(t){h(this.component,"_autoComplete",(t=>typeof t==="string"&&(t==="on"||t==="off")),new Set(["on | off"]),t)}validateList(t){r(this.component,"_list",(t=>typeof t==="string"),t)}tryParseToString(t,e){const i=t!==null&&t!==void 0?t:e;if(typeof i==="string"){return i}if(typeof i==="object"&&i instanceof Date){switch(this.component._type){case"date":return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`;case"datetime-local":return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}T${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}`;case"month":return`${i.getFullYear()}-${i.getMonth()+1}`;case"time":if(this.component._step===undefined||typeof this.component._step==="string"&&this.component._step==="60"||typeof this.component._step==="number"&&this.component._step===60){return`${i.getHours()}:${i.getMinutes()}`}else{return`${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}`}case"week":throw new Error("Auto convert to week is not supported!")}}if(t===null){return null}return undefined}validateDateString(t){switch(this.component._type){case"date":return m.isoDateRegex.test(t);case"datetime-local":return m.isoLocalDateTimeRegex.test(t);case"month":return m.isoMonthRegex.test(t);case"time":return m.isoTimeRegex.test(t);case"week":return m.isoWeekRegex.test(t);default:return false}}onChange(t){super.onChange(t);if(!!t.target.value!==!!this.component._value){this.component._value=t.target.value}}validateMax(t){h(this.component,"_max",(t=>t===undefined||t!==null&&this.validateDateString(t)),new Set(["Iso8601","Date"]),this.tryParseToString(t,this.component._type==="date"||this.component._type==="month"||this.component._type==="datetime-local"?m.DEFAULT_MAX_DATE:undefined))}validateMin(t){h(this.component,"_min",(t=>t===undefined||t!==null&&this.validateDateString(t)),new Set(["Iso8601","Date"]),this.tryParseToString(t))}validateOn(t){u(this.component,"_on",Object.assign(Object.assign({},t),{onChange:(e,i)=>{if(!!i!==!!this.component._value){this.component._value=i}if(t===null||t===void 0?void 0:t.onChange){t.onChange(e,i)}}}))}validateReadOnly(t){f(this.component,t)}validateRequired(t){o(this.component,"_required",t)}validateStep(t){p(this.component,"_step",t)}validateType(t){h(this.component,"_type",(t=>typeof t==="string"&&(t==="date"||t==="datetime-local"||t==="month"||t==="number"||t==="time"||t==="week")),new Set(["String {date, datetime-local, month, number, time, week}"]),t)}validateValue(t){this.validateValueEx(t)}validateValueEx(t,e){this.validateIso8601("_value",t,e);this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad();this.validateAutoComplete(this.component._autoComplete);this.validateMax(this.component._max);this.validateMin(this.component._min);this.validateLabel(this.component._label);this.validateList(this.component._list);this.validateOn(this.component._on);this.validateReadOnly(this.component._readOnly);this.validateRequired(this.component._required);this.validateStep(this.component._step);this.validateType(this.component._type);this.validateValue(this.component._value)}}m.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/;m.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/;m.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/;m.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/;m.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/;m.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59);const y=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input-number{display:block}";const v=class{render(){const{ariaDescribedBy:i}=d(this.state);const a=Array.isArray(this.state._list)&&this.state._list.length>0;const s=this.state._label==="";const n=this.state._label==="…";return t(e,{class:{"has-value":this.state._hasValue}},t("kol-input",{class:{[this.state._type]:true,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},t("span",{slot:"label"},s?t("slot",{name:"expert"}):n?t("slot",null):this.state._label),t("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":i.length>0?i.join(" "):undefined,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:a?`${this.state._id}-list`:undefined,max:this.state._max,min:this.state._min,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,slot:"input",step:this.state._step,spellcheck:"false",type:this.state._type,value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){i(this,t);this.catchRef=t=>{this.ref=t;n(this.host,this.ref)};this.onKeyUp=t=>{if(t.code==="Enter"){l({form:this.host,ref:this.ref})}else{this.controller.onFacade.onChange(t)}};this._accessKey=undefined;this._alert=true;this._autoComplete=undefined;this._disabled=undefined;this._error=undefined;this._hideLabel=undefined;this._hint="";this._icon=undefined;this._id=undefined;this._label=undefined;this._list=undefined;this._max=undefined;this._min=undefined;this._name=undefined;this._on=undefined;this._readOnly=undefined;this._required=undefined;this._smartButton=undefined;this._syncValueBySelector=undefined;this._step=undefined;this._tabIndex=undefined;this._touched=false;this._type="date";this._value=undefined;this.state={_autoComplete:"off",_hasValue:false,_id:s(),_label:false,_list:[],_type:"datetime-local"};this.controller=new m(this,"date",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateStep(t){this.controller.validateStep(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValueEx(t,(t=>{if(t===""&&this.ref){this.ref.value=""}}))}componentWillLoad(){this._alert=this._alert===true;this._touched=this._touched===true;this.controller.componentWillLoad();this.state._hasValue=!!this.state._value;this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return a(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};v.style={default:y};export{v as kol_input_date}; //# sourceMappingURL=kol-input-date.entry.js.map