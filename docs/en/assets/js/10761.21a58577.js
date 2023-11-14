/*! For license information please see 10761.21a58577.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[10761],{30406:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(37210);const o=({accessKey:t,label:e})=>{let[n,...o]=e.split(t);return 0===o.length&&(t=t.toUpperCase(),[n,...o]=e.split(t)),0===o.length&&(t=t.toLowerCase(),[n,...o]=e.split(t)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),o.join(t)):null)}},39813:(t,e,n)=>{n.d(e,{A:()=>l});var i=n(50888),o=n(25528),a=n(10102);const s=(0,a.d)();class l{constructor(t,e,n){var i,a;if(this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,o.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(t);this.syncValue(t,i,this.formAssociated),this.syncValue(t,i,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.name=e,s){switch(null===(i=this.host)||void 0===i||i.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(s)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,o.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){n&&("select"===this.name?(n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}))):"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value=""))}validateName(t){((t,e,n)=>{(0,i.d)(t,"_name",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,o.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion und f\xfcr das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(s&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},7044:(t,e,n)=>{n.d(e,{I:()=>p,g:()=>d,v:()=>c});var i=n(50888),o=n(19760),a=n(58169),s=n(25528),l=n(56667),r=n(90243),h=n(39813);const d=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}},c=(t,e,n)=>{(0,i.a)(t,"_hideError",e,n)};class u extends h.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,i.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class p extends u{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,i.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,i.a)(this.component,"_disabled",t),!0===t&&(0,s.e)()}validateError(t){(0,i.d)(this.component,"_error",t)}validateHideLabel(t){(0,o.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.d)(this.component,"_hint",t)}validateId(t){(0,i.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(t){(0,a.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,i.s)(this.component,"_on",t)}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,l.s)(t),(0,l.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,l.s)(t),(0,l.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,l.s)(t),(0,l.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,l.s)(t),(0,l.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var n;this.setFormAssociatedValue(e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},57866:(t,e,n)=>{n.d(e,{I:()=>u,a:()=>p,f:()=>c,v:()=>d});var i=n(7044),o=n(50888),a=n(58169),s=n(25528),l=n(19877);const r=["horizontal","vertical"],h=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===(0,a.h)(t.label,3)&&!1===(0,a.c)(t.label)&&(0,s.a)(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===h(t)));if("number"==typeof t.label)return!0}return!1},d=(t,e,n={})=>{(0,o.c)(t,"_options",h,e,void 0,n)},c=(t,e,n="")=>{e.forEach(((e,i)=>{const o=`${n}-${i}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?c(t,e.options,o):t.set(o,e))}))};class u extends i.I{constructor(t,e,n){super(t,e,n),this.component=t}validateHideError(t){(0,i.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateRequired(t){((t,e)=>{(0,o.a)(t,"_required",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class p extends u{constructor(t,e,n){super(t,e,n),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchOptions=(t,e)=>{const n=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),c(this.keyOptionMap,n);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,n)){const t=n[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,o.w)(this.component,"_orientation",(t=>"string"==typeof t&&r.includes(t)),new Set([`Orientation {${r.join(", ")}`]),t,{defaultValue:"vertical"})}validateOptions(t){((t,e,n={})=>{(0,o.c)(t,"_options",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),e,void 0,n)})(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,o.m)(t),t=Array.isArray(t)?t[0]:t,(0,o.s)(this.component,"_value",t,{beforePatch:this.beforePatchOptions}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(l.S)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options),this.validateHideError(this.component._hideError),this.validateValue(this.component._value)}}},56667:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,n){return t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}function a(t,e,n){e&&o(e,t,n)}n.d(e,{s:()=>i,t:()=>a})},19760:(t,e,n)=>{n.d(e,{v:()=>o});var i=n(50888);const o=(t,e,n={})=>{(0,i.a)(t,"_hideLabel",e,n)}},10761:(t,e,n)=>{n.r(e),n.d(e,{kol_input_radio:()=>d});var i=n(37210),o=n(10102),a=n(56667),s=n(19877),l=n(7044),r=n(57866),h=n(30406);const d=class{render(){const{ariaDescribedBy:t,hasError:e}=(0,l.g)(this.state),n=(0,s.s)(this.state._label);return(0,i.h)(i.H,null,(0,i.h)("fieldset",{class:{disabled:!0===this.state._disabled,error:!0===e,required:!0===this.state._required,"hidden-error":!0===this._hideError,[this.state._orientation]:!0}},(0,i.h)("legend",{class:"block w-full mb-1 leading-normal"},(0,i.h)("span",null,(0,i.h)("span",{slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this._accessKey?(0,i.h)(h.I,{accessKey:this._accessKey,label:this._label}):this._label))),this.state._options.map(((e,n)=>{const o=`${this.state._id}-${n}`,a=`radio-${n}`;return(0,i.h)("kol-input",{class:"radio",key:o,_accessKey:this.state._accessKey,_disabled:this.state._disabled||e.disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:o,_label:e.label,_renderNoLabel:!0,_required:this.state._required,_slotName:a,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("div",{slot:a,class:"radio-input-wrapper"},(0,i.h)("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof e.label?e.label:void 0,type:"radio",id:o,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${n}`},this.controller.onFacade,{onChange:this.onChange,onClick:void 0})),(0,i.h)("label",{class:"radio-label",htmlFor:`${o}`,style:{height:this.state._hideLabel?"0":void 0,margin:this.state._hideLabel?"0":void 0,padding:this.state._hideLabel?"0":void 0,visibility:this.state._hideLabel?"hidden":void 0}},(0,i.h)("span",null,(0,i.h)("span",null,e.label)))))})),e&&(0,i.h)("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg","aria-hidden":this._hideError,class:"error"+(this._hideError?" hidden":"")},this.state._error)))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{(0,s.a)(this.host,t)},this.onChange=t=>{var e;if(t.target instanceof HTMLInputElement){const n=this.controller.getOptionByKey(t.target.value);void 0!==n&&((0,a.s)(t),(0,a.t)("change",this.host,n.value),this.controller.setFormAssociatedValue(n.value),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,n.value),this.controller.setValue(t,n.value))}},this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._options=void 0,this._orientation="vertical",this._required=!1,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"",_options:[],_orientation:"vertical"},this.controller=new r.a(this,"input-radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHideError(t){this.controller.validateHideError(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOptions(t){this.controller.validateOptions(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hideError:["validateHideError"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_orientation:["validateOrientation"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, label, option, select, textarea) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\t--border-width: 2px;\n\t\t--input-size: 1.5em;\n\t}\n\n\tkol-input .icons {\n\t\tdisplay: none;\n\t}\n\n\tlabel {\n\t\tcursor: pointer;\n\t}\n\n\tinput {\n\t\tappearance: none;\n\t\tborder-width: var(--border-width);\n\t\tborder-style: solid;\n\t\tborder-radius: 100%;\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\theight: var(--input-size);\n\t\tmargin: 0;\n\t\tmin-height: var(--input-size);\n\t\tmin-width: var(--input-size);\n\t\tpadding: 0;\n\t\twidth: var(--input-size);\n\t}\n\n\tinput:before {\n\t\tborder-radius: 100%;\n\t\tcontent: '';\n\t\tmargin: auto;\n\t\theight: calc(var(--input-size) / 2);\n\t\twidth: calc(var(--input-size) / 2);\n\t}\n\n\tinput:checked:before {\n\t\tbackground-color: #000;\n\t}\n\n\tfieldset {\n\t\tdisplay: flex;\n\t}\n\n\tfieldset.vertical {\n\t\tflex-direction: column;\n\t}\n\n\tfieldset .input-slot {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t}\n\n\t/* required star is on fieldset legend */\n\t.required label > span::after {\n\t\tcontent: '';\n\t}\n\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n"}},58169:(t,e,n)=>{n.d(e,{a:()=>c,c:()=>r,h:()=>l,v:()=>d});var i=n(25528),o=n(50888);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const h=new Set(["string"]),d=(t,e,n={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,n,o,a)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,n,o,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},c=d},90243:(t,e,n)=>{n.d(e,{v:()=>s});var i=n(25528),o=n(50888);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,a)}}}]);