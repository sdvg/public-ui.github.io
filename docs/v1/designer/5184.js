/*! For license information please see 5184.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5184],{36973:(t,e,i)=>{i.d(e,{A:()=>s});var a=i(88126),o=i(81851),n=i(66430);class s{constructor(t,e,i){var a,s,r;if(this.experimentalMode=(0,n.d)(),this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,o.d)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const a=this.tryToStringifyValue(t);this.syncValue(t,a,this.formAssociated),this.syncValue(t,a,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.type=e,this.experimentalMode&&(t=>"KOL-BUTTON"===t||"KOL-INPUT-CHECKBOX"===t||"KOL-INPUT-COLOR"===t||"KOL-INPUT-DATE"===t||"KOL-INPUT-EMAIL"===t||"KOL-INPUT-FILE"===t||"KOL-INPUT-NUMBER"===t||"KOL-INPUT-PASSWORD"===t||"KOL-INPUT-RADIO"===t||"KOL-INPUT-RANGE"===t||"KOL-INPUT-TEXT"===t||"KOL-SELECT"===t||"KOL-TEXTAREA"===t)(null===(a=this.host)||void 0===a?void 0:a.tagName)){switch(null===(s=this.host)||void 0===s||s.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(r=this.host)||void 0===r||r.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){if(this.experimentalMode)try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==e||e.setAttribute(t,`${i}`)}catch(i){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,o.h)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){if(i)switch(this.type){case"file":i.files=t;break;case"select":i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}));break;default:"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value="")}}validateName(t){((t,e,i)=>{(0,a.d)(t,"_name",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,o.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},99650:(t,e,i)=>{i.d(e,{I:()=>c,a:()=>u,f:()=>h,v:()=>d});var a=i(88126),o=i(32024),n=i(81851),s=i(48125),r=i(34615);const l=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===(0,o.h)(t.label,3)&&!1===(0,o.c)(t.label)&&(0,n.a)(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===l(t)));if("number"==typeof t.label)return!0}return!1},d=(t,e,i={})=>{(0,a.c)(t,"_options",l,e,void 0,i)},h=(t,e,i="")=>{e.forEach(((e,a)=>{const o=`${i}-${a}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?h(t,e.options,o):t.set(o,e))}))};class c extends r.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){((t,e)=>{(0,a.a)(t,"_required",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class u extends c{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.afterPatchOptions=(t,e,i,a)=>{"_value"===a&&this.setFormAssociatedValue(t)},this.beforePatchOptions=(t,e)=>{const i=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),h(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;!1===this.isValueInOptions(t,i)&&(e.set("_value",i[0].value),this.onStateChange())}},this.component=t}validateOrientation(t){(0,a.w)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateOptions(t){((t,e,i={})=>{(0,a.c)(t,"_options",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),e,void 0,i)})(this.component,t,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,a.m)(t),t=Array.isArray(t)?t[0]:t,(0,a.s)(this.component,"_value",t,{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions})}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(s.S)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options||this.component._list),this.validateValue(this.component._value)}}},34615:(t,e,i)=>{i.d(e,{I:()=>u,g:()=>h});var a=i(88126),o=i(56131),n=i(32024),s=i(81851),r=i(43985),l=i(79809),d=i(36973);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,a=[];return!0===e&&a.push(`${t._id}-error`),!0===i&&a.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:a}};class c extends d.A{constructor(t,e,i){super(t,e,i),this.component=t}validateAlert(t){(0,a.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,a.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends c{constructor(t,e,i){super(t,e,i),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,a.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,a.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,a.a)(this.component,"_disabled",t),!0===t&&(0,s.g)()}validateError(t){(0,a.d)(this.component,"_error",t)}validateHideError(t){((t,e,i)=>{(0,a.a)(t,"_hideError",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,o.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,a.d)(this.component,"_hint",t)}validateId(t){(0,a.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,n.a)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,r.s)(t),(0,r.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;(0,r.t)("change",this.host,i),this.setFormAssociatedValue(i),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i),this.valueChangeListeners.forEach((t=>t(i)))}onClick(t){var e;(0,r.s)(t),(0,r.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,r.s)(t),(0,r.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},43985:(t,e,i)=>{function a(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,i){e&&function(t,e,i){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,i))}(e,t,i)}i.d(e,{s:()=>a,t:()=>o})},32200:(t,e,i)=>{i.d(e,{F:()=>o});var a=i(95026);const o=({_alert:t,_error:e,_hideError:i,_id:o})=>(0,a.h)("kol-alert",{"aria-hidden":"true",id:`${o}-error`,_alert:t,_type:"error",class:{error:!0,"visually-hidden":!0===i}},e)},56131:(t,e,i)=>{i.d(e,{v:()=>o});var a=i(88126);const o=(t,e,i={})=>{(0,a.a)(t,"_hideLabel",e,i)}},35184:(t,e,i)=>{i.r(e),i.d(e,{kol_input_radio:()=>h});var a=i(95026),o=i(66430),n=i(43985),s=i(48125),r=i(32200),l=i(34615),d=i(99650);const h=class{render(){const{ariaDescribedBy:t,hasError:e}=(0,l.g)(this.state),i=(0,s.s)(this.state._label);return(0,a.h)(a.H,{key:"6f035ee29d0b195a1126daa56ce30201fc574853"},(0,a.h)("fieldset",{key:"85bf6561e3e7ff2b4e86a8e68150f772135405fa",class:{disabled:!0===this.state._disabled,error:!0===e,required:!0===this.state._required,"hidden-error":!0===this._hideError,[this.state._orientation]:!0}},(0,a.h)("legend",{key:"5938136e609d6a79e0c5ce5ec6947b84538d1160",class:"block w-full mb-1 leading-normal"},(0,a.h)("span",{key:"dbdb7a487e30772853d6a1cd3e706157e3badd7a"},(0,a.h)("span",{key:"37b9172988a368b9fbef4130e70e2b251d7f699c",slot:"label"},i?(0,a.h)("slot",null):this.state._label))),this.state._options.map(((e,i)=>{const o=`${this.state._id}-${i}`,n=`radio-${i}`;return(0,a.h)("kol-input",{class:{radio:!0,disabled:Boolean(this.state._disabled||e.disabled)},key:o,_disabled:this.state._disabled||e.disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:o,_label:e.label,_renderNoLabel:!0,_required:this.state._required,_slotName:n,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,a.h)("div",{slot:n,class:"radio-input-wrapper"},(0,a.h)("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof e.label?e.label:void 0,type:"radio",id:o,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${i}`},this.controller.onFacade,{onChange:this.onChange,onClick:void 0})),(0,a.h)("label",{class:"radio-label",htmlFor:`${o}`,style:{height:this.state._hideLabel?"0":void 0,margin:this.state._hideLabel?"0":void 0,padding:this.state._hideLabel?"0":void 0,visibility:this.state._hideLabel?"hidden":void 0}},(0,a.h)("span",null,(0,a.h)("span",null,e.label)))))})),e&&(0,a.h)(r.F,{_alert:this.state._alert,_hideError:this.state._hideError,_error:this.state._error,_id:this.state._id})))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{(0,s.a)(this.host,t)},this.onChange=t=>{var e;if(t.target instanceof HTMLInputElement){const i=this.controller.getOptionByKey(t.target.value);void 0!==i&&((0,n.s)(t),(0,n.t)("change",this.host,i.value),this.controller.setFormAssociatedValue(i.value),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,i.value),this.controller.setValue(t,i.value))}},this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._options=void 0,this._orientation="vertical",this._required=!1,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"…",_options:[],_orientation:"vertical"},this.controller=new d.a(this,"radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHideError(t){this.controller.validateHideError(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.validateOptions(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOptions(t){this.controller.validateOptions(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hideError:["validateHideError"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_orientation:["validateOrientation"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};h.style={default:':host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.required label>span::after,.required legend>span::after{content:"*"}:host{display:block}input,textarea{cursor:text}input[type=checkbox],input[type=color],input[type=file],input[type=radio],input[type=range],label,option,select{cursor:pointer}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,select[multiple] option,textarea{font-size:1rem;width:100%}input[type=file]{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,option,select,textarea,.input-label){cursor:not-allowed;opacity:0.5}:host{--border-width:2px;--input-size:1.5em}kol-input .icons{display:none}label{cursor:pointer}input{appearance:none;border-width:var(--border-width);border-style:solid;border-radius:100%;cursor:pointer;display:flex;height:var(--input-size);margin:0;min-height:var(--input-size);min-width:var(--input-size);padding:0;width:var(--input-size)}input:before{border-radius:100%;content:"";margin:auto;height:calc(var(--input-size) / 2);width:calc(var(--input-size) / 2)}input:checked:before{background-color:#000}@media (forced-colors: active){input:checked:before{background:highlight !important}}fieldset{display:flex}fieldset.vertical{flex-direction:column}fieldset .input-slot{align-items:center;display:flex}.required label>span::after{content:""}'}},32024:(t,e,i)=>{i.d(e,{a:()=>c,c:()=>l,h:()=>r,v:()=>h});var a=i(81851),o=i(88126);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function l(t){return s.test(t)}const d=new Set(["string"]),h=(t,e,i={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,i,o,n)=>{var s,d;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,i,o,n)),"string"==typeof e&&!1===r(e,3)&&!1===l(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(i))},c=h},79809:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(81851),o=i(88126);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,n)}}}]);