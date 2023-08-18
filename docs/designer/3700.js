/*! For license information please see 3700.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3700],{30093:(t,e,i)=>{i.d(e,{A:()=>r,s:()=>a,t:()=>s});var o=i(46255),n=i(9285);function a(t){t.stopImmediatePropagation(),t.stopPropagation()}function s(t,e,i){e&&function(t,e,i){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,i))}(e,t,i)}const l=(0,i(63721).b)();class r{constructor(t,e,i){var o,a;if(this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,n.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.name=e,l){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){if(l)try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==e||e.setAttribute(t,`${i}`)}catch(i){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,n.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){i&&("select"===this.name?(i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}))):"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value=""))}validateName(t){((t,e,i)=>{(0,o.d)(t,"_name",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,n.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(l&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},25244:(t,e,i)=>{i.d(e,{I:()=>d,g:()=>h});var o=i(46255),n=i(72241),a=i(9285),s=i(30093),l=i(8143),r=i(55055);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:o}};class c extends s.A{constructor(t,e,i){super(t,e,i),this.component=t}validateAlert(t){(0,o.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,o.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class d extends c{constructor(t,e,i){super(t,e,i),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,o.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,o.a)(this.component,"_disabled",t),!0===t&&(0,a.h)()}validateError(t){(0,o.d)(this.component,"_error",t)}validateHideLabel(t){(0,r.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,o.d)(this.component,"_hint",t)}validateId(t){(0,o.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,n.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,s.s)(t),(0,s.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;(0,s.s)(t),(0,s.t)("change",this.host,i),this.setFormAssociatedValue(i),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i),this.valueChangeListeners.forEach((t=>t(i)))}onClick(t){var e;(0,s.s)(t),(0,s.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,s.s)(t),(0,s.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},76795:(t,e,i)=>{i.d(e,{I:()=>d,a:()=>u,f:()=>c,v:()=>h});var o=i(46255),n=i(72241),a=i(9285),s=i(11383),l=i(25244);const r=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===(0,n.h)(t.label,3)&&!1===(0,n.c)(t.label)&&(0,a.a)(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===r(t)));if("number"==typeof t.label)return!0}return!1},h=(t,e,i={})=>{(0,o.c)(t,"_options",r,e,void 0,i)},c=(t,e,i="")=>{e.forEach(((e,o)=>{const n=`${i}-${o}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?c(t,e.options,n):t.set(n,e))}))};class d extends l.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){((t,e)=>{(0,o.a)(t,"_required",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class u extends d{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchOptions=(t,e)=>{const i=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),c(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,o.w)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateOptions(t){((t,e,i={})=>{(0,o.c)(t,"_options",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),e,void 0,i)})(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,o.m)(t),t=Array.isArray(t)?t[0]:t,(0,o.s)(this.component,"_value",t,{beforePatch:this.beforePatchOptions}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(s.S)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options||this.component._list),this.validateValue(this.component._value)}}},55055:(t,e,i)=>{i.d(e,{v:()=>n});var o=i(46255);const n=(t,e,i={})=>{(0,o.a)(t,"_hideLabel",e,i)}},73700:(t,e,i)=>{i.r(e),i.d(e,{kol_input_checkbox:()=>u});var o=i(72108),n=i(63721),a=i(30093),s=i(11383),l=i(25244),r=i(46255),h=i(9285),c=i(76795);class d extends c.I{constructor(t,e,i){super(t,e,i),this.setFormAssociatedCheckboxValue=t=>{this.component._checked?this.setFormAssociatedValue(t):this.setFormAssociatedValue(null)},this.component=t}validateChecked(t){((t,e)=>{(0,r.a)(t,"_checked",e)})(this.component,t),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateIcon(t){(0,r.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,s.i)(t.checked,1)||(0,s.i)(t.indeterminate,1)||(0,s.i)(t.unchecked,1))),new Set(["InputCheckboxIcons"]),t)}validateIndeterminate(t){((t,e)=>{(0,r.a)(t,"_indeterminate",e)})(this.component,t)}validateType(t){(0,h.d)('The "_type" prop is deprecated. Use "_variant" instead.'),this.validateVariant(t)}validateValue(t){(0,r.s)(this.component,"_value",t),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateVariant(t){"checkbox"===t&&((0,h.d)("[KolCheckbox] The \"_variant\" value 'checkbox' is deprecated. Use the new value 'default' instead."),t="default"),(0,r.w)(this.component,"_variant",(t=>"string"==typeof t&&("button"===t||"default"===t||"switch"===t)),new Set(["String {button, default, switch}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateIcon(this.component._icon),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant||this.component._type)}}const u=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=!1===this.state._label;return(0,o.h)(o.H,null,(0,o.h)("kol-input",{class:{checkbox:!0,[this.state._variant]:!0,"hide-label":!!this.state._hideLabel},"data-role":"button"===this.state._variant?"button":void 0,onKeyPress:"button"===this.state._variant?this.onChange:void 0,tabIndex:"button"===this.state._variant?0:void 0,_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_required:this.state._required,_touched:this.state._touched},(0,o.h)("span",{slot:"label"},e?(0,o.h)("slot",null):this.state._label),(0,o.h)("div",{slot:"input"},(0,o.h)("kol-icon",{onClick:this.onChange,_ariaLabel:"",_icon:this.state._indeterminate?this.state._icon.indeterminate:this.state._checked?this.state._icon.checked:this.state._icon.unchecked}),(0,o.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,checked:this.state._checked,disabled:this.state._disabled,id:this.state._id,indeterminate:this.state._indeterminate,name:this.state._name,required:this.state._required,tabIndex:this.state._tabIndex,type:"checkbox"},this.controller.onFacade,{onChange:this.onChange,onClick:void 0})),(0,o.h)("kol-tooltip",{"aria-hidden":"true",hidden:e||!this.state._hideLabel,_align:this._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onChange=t=>{var e;this._checked=!this._checked,this._indeterminate=!1;const i=this._checked?this.state._value:null;(0,a.s)(t),(0,a.t)("change",this.host,i),this.controller.setFormAssociatedValue(i),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,i)},this._accessKey=void 0,this._alert=!0,this._checked=!1,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._indeterminate=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type=void 0,this._value=void 0,this._variant=void 0,this.state={_checked:!1,_icon:{checked:"codicon codicon-check",indeterminate:"codicon codicon-remove",unchecked:"codicon codicon-add"},_id:`id-${(0,n.n)()}`,_indeterminate:!1,_label:!1,_value:null,_variant:"default"},this.controller=new d(this,"input-checkbox",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateChecked(t){this.controller.validateChecked(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateIndeterminate(t){this.controller.validateIndeterminate(t)}validateLabel(t){this.controller.validateLabel(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValue(t)}validateVariant(t){this.controller.validateVariant(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_checked:["validateChecked"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_indeterminate:["validateIndeterminate"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};u.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}label{cursor:pointer}kol-input{align-items:center;display:grid;justify-items:left;width:100}kol-input.default,kol-input.switch{grid-template-columns:auto 1fr}kol-input .input{align-items:center;display:grid;order:1}kol-input .input div{display:inline-flex}kol-input .input input{margin:0}kol-input label{order:2}kol-input .hint,kol-input.error>kol-alert{grid-column:span 2}kol-input kol-alert.error{order:3}kol-input .hint{order:4}input{border-width:2px;border-style:solid;line-height:24px}input[type='checkbox']{appearance:none;background-color:#fff;cursor:pointer;transition:0.5s}input[type='checkbox'].kol-disabled:before{cursor:not-allowed}input[type='checkbox']:before{content:'';cursor:pointer}.default kol-icon,.switch kol-icon{display:none}kol-input.required .tooltip-content .span-label::after{content:'*'}.button{cursor:pointer;display:inline-flex;width:auto}.button input{display:none}.default input[type='checkbox']{height:1.5em;width:1.5em}.default input[type='checkbox']:before{display:block;height:1.5em;position:relative;width:1.5em}.default input[type='checkbox']:checked:before{border-radius:1px;border-style:solid;border-width:0 3px 3px 0;height:0.75em;left:calc(0.375em - 2px);transform:rotate(40deg) translate(-50%, -50%);top:calc(0.7125em - 2px);width:0.375em}.default input[type='checkbox']:indeterminate:before{background-color:#000;height:0.2em;left:0.24em;top:0.575em;width:0.8em}.switch input[type='checkbox']{display:inline-block;height:1.7em;min-width:3.2em;position:relative;width:3.2em}.switch input[type='checkbox']:before{background-color:#000;height:1.2em;left:calc(0.25em - 2px);top:calc(0.25em - 2px);position:absolute;-webkit-transition:0.5s;-moz-transition:0.5s;-ms-transition:0.5s;transition:0.5s;width:1.2em}.switch input[type='checkbox']:checked:before{-webkit-transform:translateX(1.5em);-moz-transform:translateX(1.5em);-ms-transform:translateX(1.5em);transform:translateX(1.5em)}.switch input[type='checkbox']:indeterminate:before{transform:translateX(0.75em)}"}},72241:(t,e,i)=>{i.d(e,{a:()=>p,c:()=>r,h:()=>l,v:()=>d});var o=i(9285),n=i(46255);const a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,n,a)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const c=new Set(["string"]),d=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),c,e,h(i))},u=new Set(["string","false"]),p=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,n.w)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,h(i))}},8143:(t,e,i)=>{i.d(e,{v:()=>s});var o=i(9285),n=i(46255);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,n.e)(t,"_tabIndex",e,a)}}}]);