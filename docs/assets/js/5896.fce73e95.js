/*! For license information please see 5896.fce73e95.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5896],{18075:(t,e,i)=>{i.d(e,{A:()=>c,s:()=>s,t:()=>r});var o=i(59659),n=i(14868),a=i(83622);function s(t){t.stopImmediatePropagation(),t.stopPropagation()}function l(t,e,i){return t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,i))}function r(t,e,i){e&&l(e,t,i)}const h=(0,a.b)();class c{constructor(t,e,i){var o,a;if(this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,n.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.name=e,h){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){if(h)try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==e||e.setAttribute(t,`${i}`)}catch(i){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,n.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){i&&("select"===this.name?(i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}))):"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value=""))}validateName(t){((t,e,i)=>{(0,o.d)(t,"_name",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,n.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion und f\xfcr das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(h&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},6668:(t,e,i)=>{i.d(e,{I:()=>d,a:()=>u,f:()=>c,v:()=>h});var o=i(59659),n=i(2618),a=i(14868),s=i(70730),l=i(89864);const r=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===(0,n.h)(t.label,3)&&!1===(0,n.c)(t.label)&&(0,a.a)(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===r(t)));if("number"==typeof t.label)return!0}return!1},h=(t,e,i={})=>{(0,o.c)(t,"_options",r,e,void 0,i)},c=(t,e,i="")=>{e.forEach(((e,o)=>{const n=`${i}-${o}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?c(t,e.options,n):t.set(n,e))}))};class d extends l.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){((t,e)=>{(0,o.a)(t,"_required",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class u extends d{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchOptions=(t,e)=>{const i=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),c(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,o.w)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateOptions(t){((t,e,i={})=>{(0,o.c)(t,"_options",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),e,void 0,i)})(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,o.m)(t),t=Array.isArray(t)?t[0]:t,(0,o.s)(this.component,"_value",t,{beforePatch:this.beforePatchOptions}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(s.S)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options||this.component._list),this.validateValue(this.component._value)}}},89864:(t,e,i)=>{i.d(e,{I:()=>d,g:()=>h});var o=i(59659),n=i(2618),a=i(14868),s=i(18075),l=i(50999),r=i(89099);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:o}};class c extends s.A{constructor(t,e,i){super(t,e,i),this.component=t}validateAlert(t){(0,o.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,o.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class d extends c{constructor(t,e,i){super(t,e,i),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,o.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,o.a)(this.component,"_disabled",t),!0===t&&(0,a.h)()}validateError(t){(0,o.d)(this.component,"_error",t)}validateHideLabel(t){(0,r.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,o.d)(this.component,"_hint",t)}validateId(t){(0,o.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(t){(0,n.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,s.s)(t),(0,s.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;(0,s.s)(t),(0,s.t)("change",this.host,i),this.setFormAssociatedValue(i),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i),this.valueChangeListeners.forEach((t=>t(i)))}onClick(t){var e;(0,s.s)(t),(0,s.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,s.s)(t),(0,s.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},77278:(t,e,i)=>{i.d(e,{I:()=>r});var o=i(24499),n=i(59659),a=i(70730),s=i(89864);const l=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,a.i)(i.right,1)&&(i.right={icon:i.right}),(0,a.i)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends s.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.w)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||(0,o.i)(t.left)||(0,a.i)(t.right,1)||(0,o.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},89099:(t,e,i)=>{i.d(e,{v:()=>n});var o=i(59659);const n=(t,e,i={})=>{(0,o.a)(t,"_hideLabel",e,i)}},24499:(t,e,i)=>{i.d(e,{i:()=>l,v:()=>r,w:()=>h});var o=i(59659),n=i(70730);const a=(t,e,i)=>{(0,n.c)(i)?t[e]=i:(0,n.i)(i,1)&&(t[e]={icon:i})},s=t=>{var e,i,o,s,l,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,n.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(a(i,"top",t.top),a(i,"right",t.right),a(i,"bottom",t.bottom),a(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.b)(t.style))&&(0,n.i)(t.icon,1),r=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.w)(t,"_icon",(t=>null===t||(0,n.i)(t,1)||"object"==typeof t&&null!==t&&((0,n.i)(t.left,1)||l(t.left)||(0,n.i)(t.right,1)||l(t.right)||(0,n.i)(t.top,1)||l(t.top)||(0,n.i)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),s(t)}},required:!0})}))},h=(t,e)=>{(0,o.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{s(t)}}})}},65896:(t,e,i)=>{i.r(e),i.d(e,{kol_select:()=>v});var o=i(69199),n=i(83622),a=i(18075),s=i(70730),l=i(89864),r=i(6668),h=i(22585),c=i(59659),d=i(77278);class u extends d.I{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>"string"==typeof e.value?e.value===t:!!Array.isArray(e.options)&&this.isValueInOptions(t,e.options))),this.filterValuesInOptions=(t,e)=>t.filter((t=>void 0!==this.isValueInOptions(t,e))),this.beforePatchOptions=(t,e)=>{const i=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),(0,r.f)(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value,o=this.filterValuesInOptions(Array.isArray(t)&&t.length>0?t:[],i);!1===this.component._multiple&&0===o.length?(e.set("_value",[i[0].value]),this.onStateChange()):Array.isArray(t)&&o.length<t.length&&(e.set("_value",o),this.onStateChange())}},this.component=t}validateHeight(t){(0,c.d)(this.component,"_height",t)}validateOptions(t){(0,r.v)(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateMultiple(t){(0,c.a)(this.component,"_multiple",t,{hooks:{beforePatch:this.beforePatchOptions}})}validateRequired(t){(0,c.a)(this.component,"_required",t)}validateRows(t){(0,h.v)(this.component,t)}validateValue(t){(0,c.c)(this.component,"_value",(()=>!0),t,void 0,{hooks:{beforePatch:this.beforePatchOptions}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(s.S)}))}},this.validateHeight(this.component._height),this.validateOptions(this.component._options||this.component._list),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateRows(this.component._rows||this.component._size),this.validateValue(this.component._value)}}const p=(t,e)=>Array.isArray(t)&&t.includes(e),v=class{renderOptgroup(t,e){var i;return(0,o.h)("optgroup",{disabled:t.disabled,label:t.label},null===(i=t.options)||void 0===i?void 0:i.map(((t,i)=>{const n=`${e}-${i}`;return Array.isArray(t.options)?this.renderOptgroup(t,n):(0,o.h)("option",{disabled:t.disabled,key:n,selected:p(this.state._value,t.value),value:n},t.label)})))}render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=!1===this.state._label;return(0,o.h)(o.H,{class:{"has-value":this.state._hasValue}},(0,o.h)("kol-input",{class:{"hide-label":!!this.state._hideLabel,select:!0},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,o.h)("span",{slot:"label"},e?(0,o.h)("slot",null):this.state._label),(0,o.h)("div",{slot:"input"},(0,o.h)("select",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,size:this.state._rows,spellcheck:"false",style:{height:this.state._height}},{onClick:this.controller.onFacade.onClick,onBlur:this.controller.onFacade.onBlur,onFocus:this.controller.onFacade.onFocus},{onChange:this.onChange}),this.state._options.map(((t,e)=>{const i=`-${e}`;return Array.isArray(t.options)?this.renderOptgroup(t,i):(0,o.h)("option",{disabled:t.disabled,key:i,selected:p(this.state._value,t.value),value:i},t.label)}))),(0,o.h)("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",hidden:e||!this.state._hideLabel,_align:this._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onChange=t=>{var e,i;this._value=Array.from((null===(e=this.ref)||void 0===e?void 0:e.options)||[]).filter((t=>!0===t.selected)).map((t=>{var e;return null===(e=this.controller.getOptionByKey(t.value))||void 0===e?void 0:e.value})),(0,a.s)(t),(0,a.t)("change",this.host,this._value),this.controller.setFormAssociatedValue(this._value),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onChange)&&this.state._on.onChange(t,this._value)},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._height=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._options=void 0,this._required=void 0,this._rows=void 0,this._size=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hasValue:!1,_height:"",_id:`id-${(0,n.n)()}`,_label:!1,_options:[],_multiple:!1,_value:[]},this.controller=new u(this,"select",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHeight(t){this.controller.validateHeight(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.validateOptions(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOptions(t){this.controller.validateOptions(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateSize(t){this.controller.validateRows(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_height:["validateHeight"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_required:["validateRequired"],_rows:["validateRows"],_size:["validateSize"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};v.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input.required .input-tooltip .span-label::after{content:'*'}"}},2618:(t,e,i)=>{i.d(e,{a:()=>p,c:()=>r,h:()=>l,v:()=>d});var o=i(14868),n=i(59659);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,n,a)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const c=new Set(["string"]),d=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),c,e,h(i))},u=new Set(["string","false"]),p=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,n.w)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,h(i))}},22585:(t,e,i)=>{i.d(e,{v:()=>n});var o=i(59659);const n=(t,e)=>{(0,o.e)(t,"_rows",e,{min:1})}},50999:(t,e,i)=>{i.d(e,{v:()=>s});var o=i(14868),n=i(59659);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,n.e)(t,"_tabIndex",e,a)}}}]);