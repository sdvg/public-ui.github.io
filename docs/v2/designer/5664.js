/*! For license information please see 5664.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5664],{79570:(e,t,n)=>{n.d(t,{I:()=>o});var i=n(66148);const o=({accessKey:e,label:t})=>{let[n,...o]=t.split(e);return 0===o.length&&(e=e.toUpperCase(),[n,...o]=t.split(e)),0===o.length&&(e=e.toLowerCase(),[n,...o]=t.split(e)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,e),o.join(e)):null)}},91829:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(88886);class o{constructor(e,t,n){var o,a,s;if(this.experimentalMode=(0,i.Z)(),this.setFormAssociatedValue=e=>{var t;const n=null===(t=this.formAssociated)||void 0===t?void 0:t.getAttribute("name");null!==n&&""!==n||(0,i.R)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(e);this.syncValue(e,o,this.formAssociated),this.syncValue(e,o,this.syncToOwnInput)},this.component=e,this.host=this.findHostWithShadowRoot(n),this.type=t,this.experimentalMode&&(e=>"KOL-BUTTON"===e||"KOL-INPUT-CHECKBOX"===e||"KOL-INPUT-COLOR"===e||"KOL-INPUT-DATE"===e||"KOL-INPUT-EMAIL"===e||"KOL-INPUT-FILE"===e||"KOL-INPUT-NUMBER"===e||"KOL-INPUT-PASSWORD"===e||"KOL-INPUT-RADIO"===e||"KOL-INPUT-RANGE"===e||"KOL-INPUT-TEXT"===e||"KOL-SELECT"===e||"KOL-TEXTAREA"===e)(null===(o=this.host)||void 0===o?void 0:o.tagName)){switch(null===(a=this.host)||void 0===a||a.querySelectorAll("input,select,textarea").forEach((e=>{var t;null===(t=this.host)||void 0===t||t.removeChild(e)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}findHostWithShadowRoot(e){for(;null===(null==e?void 0:e.shadowRoot)&&e!==document.body;)(e=null==e?void 0:e.parentNode).host&&(e=e.host);return e}setAttribute(e,t,n){if(this.experimentalMode)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==t||t.setAttribute(e,`${n}`)}catch(n){null==t||t.removeAttribute(e)}}tryToStringifyValue(e){try{return"object"==typeof e&&null!==e?JSON.stringify(e).toString():null==e?null:e.toString()}catch(e){return(0,i.$)(`The form field raw value is not able to stringify! ${e}`),""}}syncValue(e,t,n){if(n)switch(this.type){case"file":n.files=e;break;case"select":n.querySelectorAll("option").forEach((e=>{n.removeChild(e)})),Array.isArray(e)&&e.forEach((e=>{const t=this.tryToStringifyValue(e);if("string"==typeof t){const e=document.createElement("option");e.setAttribute("value",t),e.setAttribute("selected",""),n.appendChild(e)}}));break;default:"string"==typeof t?(n.setAttribute("value",t),n.value=t):(n.removeAttribute("value"),n.value="")}}validateName(e){(0,i.a0)(this.component,e,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===e&&(0,i.R)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(e){if(this.experimentalMode&&"string"==typeof e){const t=document.querySelector(e);t&&(this.syncToOwnInput=t)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},52472:(e,t,n)=>{n.d(t,{I:()=>r,g:()=>s});var i=n(88886),o=n(64606),a=n(91829);const s=e=>{var t,n;const i=Boolean("error"===(null===(t=e._msg)||void 0===t?void 0:t._type)&&e._msg._description&&(null===(n=e._msg._description)||void 0===n?void 0:n.length)>0)&&!0===e._touched,o="string"==typeof e._hint&&e._hint.length>0,a=[];return!0===i&&a.push(`${e._id}-error`),!0===o&&a.push(`${e._id}-hint`),{hasError:i,hasHint:o,ariaDescribedBy:a}};class l extends a.A{constructor(e,t,n){super(e,t,n),this.component=e}validateAlert(e){(0,i.z)(this.component,"_alert",e)}validateTouched(e){(0,i.J)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class r extends l{constructor(e,t,n){super(e,t,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=e}validateAccessKey(e){(0,i.A)(this.component,"_accessKey",e)}validateAdjustHeight(e){(0,i.M)(this.component,e)}validateDisabled(e){(0,i.z)(this.component,"_disabled",e),!0===e&&(0,i.N)()}validateError(e){const t=e?{_description:e,_type:"error"}:void 0;this.validateMsg(t)}validateHideError(e){(0,i.O)(this.component,e,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,i.Q)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(e){(0,i.P)(this.component,e,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,i.Q)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(e){(0,i.A)(this.component,"_hint",e)}validateId(e){(0,i.A)(this.component,"_id",e,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==e&&void 0!==e||(0,i.R)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(e){(0,i.S)(this.component,e,{required:!0})}validateMsg(e){(0,i.T)(this.component,e)}validateOn(e){"object"==typeof e&&(0,i.k)(this.component,"_on",e)}validateSmartButton(e){(0,i.q)(e,(()=>{try{e=(0,i.r)(e)}catch(e){}(0,i.k)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,i.U)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateMsg(this.component._msg),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,(0,o.s)(e),(0,o.t)("blur",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e){var t;const n=e.target.value;(0,o.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onChange)&&this.component._on.onChange(e,n),this.valueChangeListeners.forEach((e=>e(n)))}onClick(e){var t;(0,o.s)(e),(0,o.t)("click",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,(0,o.s)(e),(0,o.t)("focus",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}addValueChangeListener(e){this.valueChangeListeners.push(e)}}},10010:(e,t,n)=>{n.d(t,{a:()=>a,p:()=>s});var i=n(88886);const o=e=>{for((0,i.Z)()&&((0,i.R)("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;){try{e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null}catch(e){}(0,i.Z)()&&(console.log(e),(0,i.R)("↑ Search form element finished."))}return e},a=(e={})=>{var t,n;const a=o(e.form);if(a instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,i.a7)(e,a),a.dispatchEvent(e);else if("KOL-FORM"===a.tagName){(0,i.a7)(e,i.K.querySelector("form",a));const o=a;"function"==typeof(null===(t=o._on)||void 0===t?void 0:t.onReset)&&(null===(n=o._on)||void 0===n||n.onReset(e))}}},s=(e={})=>{var t,n;const a=o(e.form);if(a instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:a});if("FORM"===a.tagName)(0,i.a7)(e,a),a.dispatchEvent(e),(0,i.Z)()&&!1===a.noValidate&&(0,i.R)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),"function"==typeof a.requestSubmit&&a.requestSubmit();else if("KOL-FORM"===a.tagName){(0,i.a7)(e,i.K.querySelector("form",a));const o=a;"function"==typeof(null===(t=o._on)||void 0===t?void 0:t.onSubmit)&&(null===(n=o._on)||void 0===n||n.onSubmit(e))}}}},15825:(e,t,n)=>{n.d(t,{I:()=>s});var i=n(88886),o=n(52472);const a=(e,t)=>{const n=e;"object"==typeof n&&null!==n&&((0,i.F)(n.right,1)&&(n.right={icon:n.right}),(0,i.F)(n.left,1)&&(n.left={icon:n.left}),t.set("_icons",n))};class s extends o.I{constructor(e,t,n){super(e,t,n),this.component=e}validateIcon(e){this.validateIcons(e)}validateIcons(e){(0,i.q)(e,(()=>{try{e=(0,i.r)(e)}catch(e){}(0,i.w)(this.component,"_icons",(e=>"object"==typeof e&&null!==e&&((0,i.F)(e.left,1)||(0,i.a3)(e.left)||(0,i.F)(e.right,1)||(0,i.a3)(e.right))),new Set(["KoliBriHorizontalIcon"]),e,{hooks:{beforePatch:a},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},64908:(e,t,n)=>{n.d(t,{i:()=>a,n:()=>l,r:()=>s});var i=n(88886);const o=()=>{let e=(0,i.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,i.d)(),"KoliBri",{value:e,writable:!1})),e},a=()=>{(()=>{const e=(0,i.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,i.s)(t.includes("dev-mode=true")),(0,i.b)(t.includes("experimental-mode=true")),(0,i.c)(t.includes("color-contrast-analysis=true")))}})(),i.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.0.8\n\t",{forceLog:!0})},s=()=>{!0!==o().adviceShown&&(Object.defineProperty(o(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let l=()=>Math.floor(16777215*Math.random()).toString(16);"test"===i.p&&(l=()=>"nonce")},64606:(e,t,n)=>{function i(e){e.stopImmediatePropagation(),e.stopPropagation()}function o(e,t,n){t&&function(e,t,n){e.dispatchEvent(function(e,t){return new CustomEvent(`kol-${e}`,{bubbles:!0,cancelable:!0,composed:!0,detail:t})}(t,n))}(t,e,n)}function a(e){e.preventDefault(),i(e)}n.d(t,{p:()=>a,s:()=>i,t:()=>o})},45664:(e,t,n)=>{n.r(t),n.d(t,{kol_input_range:()=>u});var i=n(66148),o=n(88886),a=n(64908),s=n(10010),l=n(52472),r=n(79570),d=n(15825),h=n(90057);class c extends d.I{constructor(e,t,n){super(e,t,n),this.component=e}validateAutoComplete(e){(0,o.w)(this.component,"_autoComplete",(e=>"string"==typeof e&&("on"===e||"off"===e)),new Set(["on | off"]),e)}validateMax(e){(0,o.a5)(this.component,"_max",e)}validateMin(e){(0,o.a5)(this.component,"_min",e)}validateStep(e){(0,o.a5)(this.component,"_step",e)}validateSuggestions(e){(0,o.a2)(this.component,e)}validateValue(e){(0,o.a5)(this.component,"_value",e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateStep(this.component._step),this.validateSuggestions(this.component._suggestions),this.validateValue(this.component._value)}}const u=class{getSanitizedFloatValue(e){const t=parseFloat(e);return this.state._max&&t>this.state._max?this.state._max:this.state._min&&t<this.state._min?this.state._min:t}getValue(){return e=this,null,t=function*(){if(void 0!==this.refInputNumber){const e=this.refInputNumber.value;return this.getSanitizedFloatValue(e)}},new Promise(((n,i)=>{var o=e=>{try{s(t.next(e))}catch(e){i(e)}},a=e=>{try{s(t.throw(e))}catch(e){i(e)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,a);s((t=t.apply(e,null)).next())}));var e,t}componentDidLoad(){var e;!this._value&&(null===(e=this.refInputRange)||void 0===e?void 0:e.value)&&this.validateValue(parseFloat(this.refInputRange.value))}render(){const{ariaDescribedBy:e}=(0,l.g)(this.state),t=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,o.I)(this.state._label);return(0,i.h)(i.H,{key:"daa820a11f452c4c27286a26efcdf3c95dabd4bc",class:"kol-input-range"},(0,i.h)(h.l,{key:"5585abbb12f0b28d2c36bbe92263dad61e1893e0",class:{range:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_msg:this.state._msg,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("span",{key:"8b2685dbec0987c59dbc1a57db93950ab5dd376b",slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(r.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{key:"4d9f324e73b7d8ee2458d73acc42f6d26986128f",slot:"input"},(0,i.h)("div",{key:"830d403d6b8764919a40298977d39a122966f39f",class:"inputs-wrapper",style:{"--kolibri-input-range--input-number--width":`${this.state._max}`.length+.5+"em"}},(0,i.h)("input",Object.assign({key:"102466df79b26a6fc2a806c65cfa9069e778e4e6",ref:this.catchInputRangeRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-hidden":"true",autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,list:t?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-range`:void 0,spellcheck:"false",step:this.state._step,tabIndex:-1,type:"range",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})),(0,i.h)("input",Object.assign({key:"2bc1cf961259e9d8f4ac01ce2ca5bcc8ee960f3c",ref:this.catchInputNumberRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:t?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-number`:void 0,step:this.state._step,type:"number",value:this.state._value},this.controller.onFacade,{onKeyDown:this.onKeyDown,onChange:this.onChange}))),t&&[(0,i.h)("datalist",{id:`${this.state._id}-list`},this.state._suggestions.map((e=>(0,i.h)("option",{value:e}))))])))}constructor(e){(0,i.r)(this,e),this.catchInputNumberRef=e=>{var t;e&&(this.refInputNumber=e,(0,o.h)(this.host,e),!this._value&&(null===(t=this.refInputNumber)||void 0===t?void 0:t.value)&&this.validateValue(parseFloat(this.refInputNumber.value)))},this.catchInputRangeRef=e=>{e&&(this.refInputRange=e)},this.onChange=e=>{var t,n;const i=e.target.value,o=this.getSanitizedFloatValue(i);this.validateValue(o),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onChange)&&(null===(n=this.state._on)||void 0===n||n.onChange(e,o))},this.onKeyDown=e=>{"Enter"===e.code||"NumpadEnter"===e.code?(0,s.p)({form:this.host,ref:this.refInputNumber}):this.onChange(e)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._max=void 0,this._min=void 0,this._msg=void 0,this._name=void 0,this._on=void 0,this._step=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hideError:!1,_id:`id-${(0,a.n)()}`,_label:"",_suggestions:[]},this.controller=new c(this,"range",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideError(e){this.controller.validateHideError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateId(e){this.controller.validateId(e)}validateLabel(e){this.controller.validateLabel(e)}validateMax(e){this.controller.validateMax(e)}validateMin(e){this.controller.validateMin(e)}validateMsg(e){this.controller.validateMsg(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateStep(e){this.controller.validateStep(e)}validateSuggestions(e){this.controller.validateSuggestions(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_step:["validateStep"],_suggestions:["validateSuggestions"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};u.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  .required label > span::after,\n  .required legend > span::after {\n    content: \"*\";\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  input,\n  textarea {\n    cursor: text;\n  }\n  input[type=checkbox],\n  input[type=color],\n  input[type=file],\n  input[type=radio],\n  input[type=range],\n  label,\n  option,\n  select {\n    cursor: pointer;\n  }\n  /* input[type='checkbox'], */\n  /* input[type='radio'], */\n  /* input[type='range'], */\n  input[type=color],\n  input[type=date],\n  input[type=datetime-local],\n  input[type=email],\n  input[type=file],\n  input[type=month],\n  input[type=number],\n  input[type=password],\n  input[type=search],\n  input[type=tel],\n  input[type=text],\n  input[type=time],\n  input[type=url],\n  input[type=week],\n  select,\n  select[multiple] option,\n  textarea {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n    width: 100%;\n  }\n  /* needed hack for vertical alignment */\n  input[type=file] {\n    padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em;\n  }\n  /* needed hack for vertical alignment */\n  select[multiple] option {\n    padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em;\n  }\n}\n@layer kol-component {\n  .kol-input {\n    display: grid;\n  }\n  .kol-input .input-slot {\n    flex-grow: 1;\n  }\n  input:not([type=checkbox], [type=radio]),\n  select:not([multiple], [size]) {\n    height: 2.75em;\n  }\n  input:focus,\n  option:focus,\n  select:focus,\n  textarea:focus {\n    outline: 0;\n  }\n  .input {\n    display: flex;\n    align-items: center;\n  }\n  .input > .kol-icon {\n    display: grid;\n    height: var(--a11y-min-size);\n    place-items: center;\n  }\n  .kol-input.required .input-tooltip .span-label::after {\n    content: \"*\";\n  }\n}\n@layer kol-component {\n  .kol-alert-wc {\n    display: grid;\n  }\n  .kol-alert-wc .heading {\n    display: flex;\n    place-items: center;\n  }\n  .kol-alert-wc .heading > div {\n    flex-grow: 1;\n  }\n  .close {\n    /* Visible with forced colors */\n    outline: transparent solid 1px;\n  }\n}\n@layer kol-component {\n  .inputs-wrapper {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n  }\n  input[type=number] {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    width: var(--kolibri-input-range--input-number--width);\n  }\n  /*\n    * For Chrome and Firefox is it needed to use redundant style definitions with separate selectors. The reason is unknown.\n    */\n  input[type=range] {\n    appearance: none;\n    background-color: #d3d3d3;\n    border: 1px solid #000;\n    display: inline-block;\n    flex-grow: 1;\n    height: calc(8rem / var(--kolibri-root-font-size, 16));\n    line-height: 1.5em;\n    padding: 0;\n    margin: 0;\n    /* Design-Hack - related with flex-grow */\n    width: 0;\n  }\n  input[type=range]::-webkit-slider-thumb {\n    box-sizing: border-box;\n    background-color: #000;\n    height: 20px;\n    width: 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    -webkit-appearance: none;\n  }\n  input[type=range]::-moz-range-thumb {\n    box-sizing: border-box;\n    background-color: #000;\n    height: 20px;\n    width: 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    -moz-appearance: none;\n  }\n}\n/* Fix missing outline in Chromium-based browsers on Windows in high contrast mode. */\n@media (prefers-contrast: more) {\n  ::-webkit-slider-thumb {\n    outline: 1px solid currentColor;\n  }\n}"}}}]);