/*! For license information please see 3700.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3700],{12789:(t,e,i)=>{i.d(e,{I:()=>l,a:()=>r,f:()=>s});var n=i(16754),o=i(52573),a=i(45673);const s=(t,e,i="")=>{e.forEach(((e,n)=>{const o=`${i}-${n}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?s(t,e.options,o):t.set(o,e))}))};class l extends a.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){(0,n.b)(this.component,"_required",t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class r extends l{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchListValue=(t,e)=>{const i=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),s(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,n.a)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateList(t){(0,n.d)(this.component,"_list",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(t){t=(0,n.m)(t),t=Array.isArray(t)?t[0]:t,(0,n.s)(this.component,"_value",t,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(o.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},45673:(t,e,i)=>{i.d(e,{I:()=>h,g:()=>l});var n=i(23666),o=i(16754),a=i(99466),s=i(56420);const l=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===i&&n.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDiscribedBy:n}},r=(0,s.b)();class d{constructor(t,e,i){var n,o,a,s,l;if(this.syncFormAssociatedName=()=>{var t;r&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;r&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,r){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(n=this.host)||void 0===n?void 0:n.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(o=this.host)||void 0===o?void 0:o.children[e].tagName)&&(null===(a=this.host)||void 0===a||a.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(t){(0,o.b)(this.component,"_alert",t)}validateTouched(t){(0,o.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class h extends d{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,o.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,o.b)(this.component,"_disabled",t),!0===t&&(0,n.e)()}validateError(t){(0,o.w)(this.component,"_error",t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t)}validateHint(t){(0,o.w)(this.component,"_hint",t)}validateId(t){(0,o.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,n.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,o.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,n.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,a.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}}},73700:(t,e,i)=>{i.r(e),i.d(e,{kol_input_checkbox:()=>h});var n=i(99459),o=i(52573),a=i(45673),s=i(23666),l=i(16754),r=i(12789);class d extends r.I{constructor(t,e,i){super(t,e,i),this.component=t}validateChecked(t){(0,l.b)(this.component,"_checked",t),this.setFormAssociatedValue(this.component.state._checked)}validateIcon(t){(0,l.a)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,o.b)(t.checked,1)||(0,o.b)(t.indeterminate,1)||(0,o.b)(t.unchecked,1))),new Set(["InputCheckboxIcons"]),t)}validateIndeterminate(t){(0,l.b)(this.component,"_indeterminate",t)}validateType(t){(0,s.d)('The "_type" prop is deprecated. Use "_variant" instead.'),this.validateVariant(t)}validateValue(t){(0,l.s)(this.component,"_value",t)}validateVariant(t){(0,l.a)(this.component,"_variant",(t=>"string"==typeof t&&("button"===t||"checkbox"===t||"switch"===t)),new Set(["String {button, checkbox, switch}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateIcon(this.component._icon),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant||this.component._type)}}const h=class{render(){const{ariaDiscribedBy:t}=(0,a.g)(this.state);return(0,n.h)(n.H,null,(0,n.h)("kol-input",{class:{[this.state._variant]:!0},"data-role":"button"===this.state._variant?"button":void 0,onKeyPress:"button"===this.state._variant?this.onChange:void 0,tabIndex:"button"===this.state._variant?0:void 0,_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_required:this.state._required,_touched:this.state._touched},(0,n.h)("span",{slot:"label"},(0,n.h)("slot",null)),(0,n.h)("div",{slot:"input"},(0,n.h)("kol-icon",{onClick:this.onChange,_ariaLabel:"",_icon:this.state._indeterminate?this.state._icon.indeterminate:this.state._checked?this.state._icon.checked:this.state._icon.unchecked}),(0,n.h)("input",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,checked:!0===this.state._checked,disabled:!0===this.state._disabled,id:this.state._id,indeterminate:!0===this.state._indeterminate,name:this.state._name,required:!0===this.state._required,tabIndex:this.state._tabIndex,title:"",type:"checkbox",value:"string"==typeof this.state._value?this.state._value:""},this.controller.onFacade,{onChange:this.onChange})))))}constructor(t){(0,n.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.a)(this.host,this.ref)},this.onChange=t=>{this._checked=!1===this._checked,this._indeterminate=!1,this.controller.setValue(t,this._checked)},this._accessKey=void 0,this._alert=!0,this._checked=!1,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._indeterminate=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._type=void 0,this._value=void 0,this._variant=void 0,this.state={_checked:!1,_icon:{checked:"codicon codicon-check",indeterminate:"codicon codicon-remove",unchecked:"codicon codicon-add"},_id:"…",_indeterminate:!1,_variant:"checkbox"},this.controller=new d(this,"checkbox",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateChecked(t){this.controller.validateChecked(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateIndeterminate(t){this.controller.validateIndeterminate(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValue(t)}validateVariant(t){this.controller.validateVariant(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,n.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_checked:["validateChecked"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_indeterminate:["validateIndeterminate"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};h.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}.kol-required span::after{content:'*'}:host{display:block}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select[multiple] option,select:not([multiple]),textarea{font-size:1rem;padding:0 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}:is(button,input,option,select,textarea):disabled,.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}label{cursor:pointer}.required label>span::after{content:'*';padding-left:0.125em}kol-input{align-items:center;display:grid;justify-items:left;width:100}kol-input.checkbox,kol-input.switch{grid-template-columns:auto 1fr}kol-input .input{display:inline-flex;order:1}kol-input .input div{display:inline-flex}kol-input .input input{margin:0px}kol-input label{order:2}kol-input.error>kol-alert,kol-input .hint{grid-column:span 2}kol-input kol-alert.error{order:3}kol-input .hint{order:4}input{border-width:2px;border-style:solid;line-height:24px}input[type='checkbox']{appearance:none;background-color:white;cursor:pointer;transition:0.5s}input[type='checkbox'].kol-disabled:before{cursor:not-allowed}input[type='checkbox']:before{content:'';cursor:pointer}.disabled{opacity:0.33}.checkbox kol-icon,.switch kol-icon{display:none}.button{cursor:pointer;display:inline-flex;width:auto}.button input{display:none}.checkbox input[type='checkbox']{height:1.5em;width:1.5em}.checkbox input[type='checkbox']:before{background-color:transparent;display:block;height:1.5em;position:relative;width:1.5em}.checkbox input[type='checkbox']:checked:before{border-bottom-width:3px;border-color:white;border-radius:1px;border-right-width:3px;border-style:solid;border-width:0px 3px 3px 0px;height:0.75em;left:calc(0.375em - 2px);transform:rotate(40deg) translate(-50%, -50%);top:calc(0.7125em - 2px);width:0.375em}.checkbox input[type='checkbox']:indeterminate:before{height:0.35em;left:0.14em;top:0.45em;width:1em}.switch input[type='checkbox']{display:inline-block;height:1.7em;min-width:3.2em;position:relative;width:3.2em}.switch input[type='checkbox']:before{background-color:black;height:1.2em;left:calc(0.25em - 2px);top:calc(0.25em - 2px);position:absolute;-webkit-transition:0.5s;-moz-transition:0.5s;-ms-transition:0.5s;transition:0.5;width:1.2em}.switch input[type='checkbox']:checked:before{background-color:white;-webkit-transform:translateX(1.5em);-moz-transform:translateX(1.5em);-ms-transform:translateX(1.5em);transform:translateX(1.5em)}.switch input[type='checkbox']:indeterminate:before{transform:translateX(0.75em)}"}},99466:(t,e,i)=>{i.d(e,{v:()=>s});var n=i(23666),o=i(16754);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,n.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,a)}}}]);