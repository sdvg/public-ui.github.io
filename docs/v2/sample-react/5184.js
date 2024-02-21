/*! For license information please see 5184.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5184],{9092:(t,e,n)=>{n.d(e,{I:()=>a});var i=n(173);const a=({accessKey:t,label:e})=>{let[n,...a]=e.split(t);return 0===a.length&&(t=t.toUpperCase(),[n,...a]=e.split(t)),0===a.length&&(t=t.toLowerCase(),[n,...a]=e.split(t)),(0,i.h)(i.F,null,n,a.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),a.join(t)):null)}},7139:(t,e,n)=>{n.d(e,{A:()=>a});var i=n(473);class a{constructor(t,e,n){var a,o,s;if(this.experimentalMode=(0,i.a0)(),this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,i.h)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const a=this.tryToStringifyValue(t);this.syncValue(t,a,this.formAssociated),this.syncValue(t,a,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.type=e,(0,i.a0)()&&(t=>"KOL-BUTTON"===t||"KOL-INPUT"===t||"KOL-SELECT"===t||"KOL-TEXTAREA"===t)(null===(a=this.host)||void 0===a?void 0:a.tagName)){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"checkbox":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(this.experimentalMode)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,i.a1)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){n&&("select"===this.type?(n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}))):"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value=""))}validateName(t){(0,i.a2)(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,i.h)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},9915:(t,e,n)=>{n.d(e,{I:()=>r,g:()=>s});var i=n(473),a=n(4606),o=n(7139);const s=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}};class l extends o.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.B)(this.component,"_alert",t)}validateTouched(t){(0,i.N)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class r extends l{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.C)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,i.O)(this.component,t)}validateDisabled(t){(0,i.B)(this.component,"_disabled",t),!0===t&&(0,i.P)()}validateError(t){(0,i.C)(this.component,"_error",t)}validateHideError(t){(0,i.Q)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,i.T)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,i.R)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,i.T)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.C)(this.component,"_hint",t)}validateId(t){(0,i.C)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,i.h)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,i.U)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,i.m)(this.component,"_on",t)}validateSmartButton(t){(0,i.t)(t,(()=>{try{t=(0,i.u)(t)}catch(t){}(0,i.m)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,i.V)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,a.s)(t),(0,a.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,a.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,a.s)(t),(0,a.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,a.s)(t),(0,a.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},2975:(t,e,n)=>{n.d(e,{I:()=>s,a:()=>l,f:()=>o});var i=n(473),a=n(9915);const o=(t,e,n="")=>{e.forEach(((e,i)=>{const a=`${n}-${i}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?o(t,e.options,a):t.set(a,e))}))};class s extends a.I{constructor(t,e,n){super(t,e,n),this.component=t}validateRequired(t){(0,i.W)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class l extends s{constructor(t,e,n){super(t,e,n),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.afterPatchOptions=(t,e,n,i)=>{"_value"===i&&this.setFormAssociatedValue(t)},this.beforePatchOptions=(t,e)=>{const n=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),o(this.keyOptionMap,n);const t=e.has("_value")?e.get("_value"):this.component.state._value;!1===this.isValueInOptions(t,n)&&(e.set("_value",n[0].value),this.onStateChange())}},this.component=t}validateOrientation(t){(0,i.w)(this.component,"_orientation",(t=>"string"==typeof t&&i.X.includes(t)),new Set([`Orientation {${i.X.join(", ")}`]),t,{defaultValue:"vertical"})}validateOptions(t){(0,i.Y)(this.component,t,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,i.Z)(t),t=Array.isArray(t)?t[0]:t,(0,i.m)(this.component,"_value",t,{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions})}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(i.$)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options),this.validateValue(this.component._value)}}},4606:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function a(t,e,n){e&&function(t,e,n){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}(e,t,n)}function o(t){t.preventDefault(),i(t)}n.d(e,{p:()=>o,s:()=>i,t:()=>a})},7275:(t,e,n)=>{n.d(e,{F:()=>a});var i=n(173);const a=({_alert:t,_error:e,_hideError:n,_id:a})=>(0,i.h)("kol-alert",{"aria-hidden":"true",id:`${a}-error`,_alert:t,_type:"error",class:{error:!0,"visually-hidden":!0===n}},e)},5184:(t,e,n)=>{n.r(e),n.d(e,{kol_input_radio:()=>c});var i=n(173),a=n(473),o=n(6304),s=n(4606),l=n(9915),r=n(9092),d=n(2975),h=n(7275);const c=class{getValue(){return t=this,null,e=function*(){return this.currentValue},new Promise(((n,i)=>{var a=t=>{try{s(e.next(t))}catch(t){i(t)}},o=t=>{try{s(e.throw(t))}catch(t){i(t)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(a,o);s((e=e.apply(t,null)).next())}));var t,e}render(){const{ariaDescribedBy:t,hasError:e}=(0,l.g)(this.state),n=(0,a.M)(this.state._label);return(0,i.h)(i.H,{key:"c9e64d8efb3ce0debe7b9532eb6071425d6f2201"},(0,i.h)("fieldset",{key:"d8fbd35669f5f399aed3bedb07ff429f34306022",class:{fieldset:!0,disabled:!0===this.state._disabled,error:!0===e,required:!0===this.state._required,"hidden-error":!0===this._hideError,[this.state._orientation]:!0}},(0,i.h)("legend",{key:"df0ecf4b0dbdd28aa9340f2d13da7e1d792c38bd",class:"block w-full mb-1 leading-normal"},(0,i.h)("span",{key:"51e28dd4824425a92cedd525da59f1bdef3bdf07"},(0,i.h)("span",{key:"5dddfbcc63e57962de5ea5b98c3642e3f8373b95",slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this._accessKey?(0,i.h)(r.I,{accessKey:this._accessKey,label:this._label}):this._label))),this.state._options.map(((e,n)=>{const a=`${this.state._id}-${n}`,o=`radio-${n}`;return(0,i.h)("kol-input",{class:{radio:!0,disabled:Boolean(this.state._disabled||e.disabled)},key:a,_accessKey:this.state._accessKey,_disabled:this.state._disabled||e.disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:a,_label:e.label,_renderNoLabel:!0,_required:this.state._required,_slotName:o,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("div",{slot:o,class:"radio-input-wrapper"},(0,i.h)("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof e.label?e.label:void 0,type:"radio",id:a,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${n}`},this.controller.onFacade,{onChange:this.onChange,onClick:void 0})),(0,i.h)("label",{class:"radio-label",htmlFor:`${a}`,style:{height:this.state._hideLabel?"0":void 0,margin:this.state._hideLabel?"0":void 0,padding:this.state._hideLabel?"0":void 0,visibility:this.state._hideLabel?"hidden":void 0}},(0,i.h)("span",null,(0,i.h)("span",{class:"radio-label-span-inner"},e.label)))))})),e&&(0,i.h)(h.F,{_alert:this.state._alert,_hideError:this.state._hideError,_error:this.state._error,_id:this.state._id})))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{(0,a.k)(this.host,t)},this.onChange=t=>{var e;if(t.target instanceof HTMLInputElement){const n=this.controller.getOptionByKey(t.target.value);void 0!==n&&((0,s.s)(t),(0,s.t)("change",this.host,n.value),this.controller.setFormAssociatedValue(n.value),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,n.value),this.currentValue=n.value)}},this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._options=void 0,this._orientation="vertical",this._required=!1,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"",_options:[],_orientation:"vertical"},this.controller=new d.a(this,"radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHideError(t){this.controller.validateHideError(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOptions(t){this.controller.validateOptions(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.currentValue=this._value,this.controller.componentWillLoad(this.onChange)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hideError:["validateHideError"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_orientation:["validateOrientation"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};c.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\n\t/* This is the text label. */\n\t.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\n\t.disabled label,\n\t[aria-disabled='true'],\n\t[disabled] {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t\toutline: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\t--border-width: 2px;\n\t\t--input-size: 1.5em;\n\t}\n\n\tkol-input .icons {\n\t\tdisplay: none;\n\t}\n\n\tlabel {\n\t\tcursor: pointer;\n\t}\n\n\tinput {\n\t\tappearance: none;\n\t\tborder-width: var(--border-width);\n\t\tborder-style: solid;\n\t\tborder-radius: 100%;\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\theight: var(--input-size);\n\t\tmargin: 0;\n\t\tmin-height: var(--input-size);\n\t\tmin-width: var(--input-size);\n\t\tpadding: 0;\n\t\twidth: var(--input-size);\n\t}\n\n\tinput:before {\n\t\tborder-radius: 100%;\n\t\tcontent: '';\n\t\tmargin: auto;\n\t\theight: calc(var(--input-size) / 2);\n\t\twidth: calc(var(--input-size) / 2);\n\t}\n\n\tinput:checked:before {\n\t\tbackground-color: #000;\n\t}\n\t@media (forced-colors: active) {\n\t\tinput:checked:before {\n\t\t\tbackground: highlight !important; /* Give it a visible background in forced colors mode */\n\t\t}\n\t}\n\n\tfieldset {\n\t\tdisplay: flex;\n\t}\n\n\tfieldset.vertical {\n\t\tflex-direction: column;\n\t}\n\n\tfieldset .input-slot {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t}\n\n\t/* required star is on fieldset legend */\n\t.required label > span::after {\n\t\tcontent: '';\n\t}\n}\n"}}}]);