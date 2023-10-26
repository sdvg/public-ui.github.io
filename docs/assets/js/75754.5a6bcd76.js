/*! For license information please see 75754.5a6bcd76.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[75754],{6809:(t,e,n)=>{n.d(e,{A:()=>l});var i=n(85123),o=n(84669),a=n(60783);const s=(0,a.d)();class l{constructor(t,e,n){var i,a;if(this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,o.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(t);this.syncValue(t,i,this.formAssociated),this.syncValue(t,i,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.name=e,s){switch(null===(i=this.host)||void 0===i||i.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(s)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,o.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){n&&("select"===this.name?(n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}))):"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value=""))}validateName(t){((t,e,n)=>{(0,i.d)(t,"_name",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,o.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion und f\xfcr das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(s&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},20242:(t,e,n)=>{n.d(e,{a:()=>l,p:()=>r});var i=n(84669),o=n(60783),a=n(85123);const s=t=>{for((0,o.d)()&&((0,i.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;){try{t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null}catch(t){}(0,o.d)()&&(console.log(t),(0,i.d)("\u2191 Search form element finished."))}return t},l=(t={})=>{var e,n;const i=s(t.form);if(i instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===i.tagName)(0,a.f)(t,i),i.dispatchEvent(t);else if("KOL-FORM"===i.tagName){(0,a.f)(t,a.K.querySelector("form",i));const o=i;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onReset)&&(null===(n=o._on)||void 0===n||n.onReset(t))}}},r=(t={})=>{var e,n;const i=s(t.form);if(i instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:i});if("FORM"===i.tagName)(0,a.f)(t,i),i.dispatchEvent(t),i.submit();else if("KOL-FORM"===i.tagName){(0,a.f)(t,a.K.querySelector("form",i));const o=i;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onSubmit)&&(null===(n=o._on)||void 0===n||n.onSubmit(t))}}}},50586:(t,e,n)=>{n.d(e,{I:()=>p,g:()=>h,v:()=>c});var i=n(85123),o=n(67467),a=n(96043),s=n(84669),l=n(18673),r=n(35948),d=n(6809);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}},c=(t,e,n)=>{(0,i.a)(t,"_hideError",e,n)};class u extends d.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,i.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class p extends u{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,i.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,i.a)(this.component,"_disabled",t),!0===t&&(0,s.e)()}validateError(t){(0,i.d)(this.component,"_error",t)}validateHideLabel(t){(0,o.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.d)(this.component,"_hint",t)}validateId(t){(0,i.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(t){(0,a.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,i.s)(this.component,"_on",t)}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,l.s)(t),(0,l.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,l.s)(t),(0,l.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,l.s)(t),(0,l.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,l.s)(t),(0,l.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var n;this.setFormAssociatedValue(e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},91848:(t,e,n)=>{n.d(e,{I:()=>r});var i=n(81132),o=n(85123),a=n(43547),s=n(50586);const l=(t,e)=>{const n=t;"object"==typeof n&&null!==n&&((0,a.i)(n.right,1)&&(n.right={icon:n.right}),(0,a.i)(n.left,1)&&(n.left={icon:n.left}),e.set("_icons",n))};class r extends s.I{constructor(t,e,n){super(t,e,n),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||(0,i.i)(t.left)||(0,a.i)(t.right,1)||(0,i.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},18673:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,n){return t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}function a(t,e,n){e&&o(e,t,n)}n.d(e,{s:()=>i,t:()=>a})},67467:(t,e,n)=>{n.d(e,{v:()=>o});var i=n(85123);const o=(t,e,n={})=>{(0,i.a)(t,"_hideLabel",e,n)}},81132:(t,e,n)=>{n.d(e,{i:()=>l,v:()=>r});var i=n(85123),o=n(43547);const a=(t,e,n)=>{(0,o.c)(n)?t[e]=n:(0,o.i)(n,1)&&(t[e]={icon:n})},s=t=>{var e,n,i;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(n=t.nextState)||void 0===n?void 0:n.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",(t=>{let e={};return(0,o.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(a(e,"top",t.top),a(e,"right",t.right),a(e,"bottom",t.bottom),a(e,"left",t.left)),e})(e))}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.b)(t.style))&&(0,o.i)(t.icon,1),r=(t,e)=>{(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(t){}(0,i.w)(t,"_icons",(t=>null===t||(0,o.i)(t,1)||"object"==typeof t&&null!==t&&((0,o.i)(t.left,1)||l(t.left)||(0,o.i)(t.right,1)||l(t.right)||(0,o.i)(t.top,1)||l(t.top)||(0,o.i)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,n)=>{null===e&&n.set("_icons",{}),s(t)}},required:!0})}))}},75754:(t,e,n)=>{n.r(e),n.d(e,{kol_input_number:()=>p});var i=n(93873),o=n(60783),a=n(43547),s=n(20242),l=n(50586),r=n(91849),d=n(84669),h=n(85123),c=n(91848);class u extends c.I{constructor(t,e,n){super(t,e,n),this.numberOrIsoDateRegex=/^\d+$|(^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])([T ][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?([+-][0-2]\d:[0-5]\d|Z)?)?$)|(^[0-2]\d:[0-5]\d(:[0-5]\d)?$)/,this.parseToString=t=>"string"==typeof t?t:"number"==typeof t?`${t}`:"object"==typeof t&&t instanceof Date?t.toISOString():"",this.validateIso8601=(t,e,n)=>{const i=parseFloat(e),o=i==e;return(0,h.w)(this.component,t,(t=>void 0===t||""===t||o&&"number"==typeof i||this.numberOrIsoDateRegex.test(t)),new Set(["number","Date","string{ISO-8601}"]),this.parseToString(e),{hooks:{afterPatch:t=>{"string"==typeof t&&n&&n(t)}}})},this.component=t}validateAutoComplete(t){(0,h.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHideError(t){(0,l.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,d.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateSuggestions(t){(0,r.v)(this.component,t)}onChange(t){super.onChange(t),!!t.target.value!=!!this.component._value&&(this.component._value=t.target.value)}validateMax(t){this.validateIso8601("_max",t)}validateMin(t){this.validateIso8601("_min",t)}validatePlaceholder(t){(0,h.d)(this.component,"_placeholder",t)}validateReadOnly(t){(0,h.a)(this.component,"_readOnly",t)}validateRequired(t){(0,h.a)(this.component,"_required",t)}validateStep(t){(0,h.e)(this.component,"_step",t)}validateValue(t){this.validateValueEx(t)}validateValueEx(t,e){this.validateIso8601("_value",t,e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHideError(this.component._hideError),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateSuggestions(this.component._suggestions),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateStep(this.component._step),this.validateValue(this.component._value)}}const p=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,a.s)(this.state._label);return(0,i.h)(i.H,{class:{"has-value":this.state._hasValue}},(0,i.h)("kol-input",{class:{number:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("span",{slot:"label"},n?(0,i.h)("slot",{name:"expert"}):this.state._label),(0,i.h)("div",{slot:"input"},(0,i.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,placeholder:this.state._placeholder,step:this.state._step,spellcheck:"false",type:"number",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,a.a)(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?(0,s.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._smartButton=void 0,this._suggestions=void 0,this._step=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hasValue:!1,_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"",_suggestions:[]},this.controller=new u(this,"input-number",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateStep(t){this.controller.validateStep(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValueEx(t,(t=>{""===t&&this.ref&&(this.ref.value="")}))}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};p.style={default:"@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, label, option, select, textarea) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n"}},96043:(t,e,n)=>{n.d(e,{a:()=>c,c:()=>r,h:()=>l,v:()=>h});var i=n(84669),o=n(85123);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const d=new Set(["string"]),h=(t,e,n={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return{hooks:{afterPatch:(e,n,o,a)=>{var s,d;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,n,o,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},c=h},91849:(t,e,n)=>{n.d(e,{v:()=>a});var i=n(85123),o=n(84669);const a=(t,e)=>{(0,i.c)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,o.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}},35948:(t,e,n)=>{n.d(e,{v:()=>s});var i=n(84669),o=n(85123);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,a)}}}]);