"use strict"; exports.id = 4868; exports.ids = [4868]; exports.modules = { /***/ 58584: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InternalUnderlinedAccessKey) /* harmony export */ }); /* harmony import */ var _index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31707); /*! * KoliBri - The accessible HTML-Standard */ const InternalUnderlinedAccessKey=({accessKey:e,label:n})=>{let[l,...t]=n.split(e);return 0===t.length&&(e=e.toUpperCase(),[l,...t]=n.split(e)),0===t.length&&(e=e.toLowerCase(),[l,...t]=n.split(e)),(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,l,t.length?(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.h)("u",null,e),t.join(e)):null)}; /***/ }), /***/ 23700: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ A: () => (/* binding */ AssociatedInputController) /* harmony export */ }); /* harmony import */ var _index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19456); /*! * KoliBri - The accessible HTML-Standard */ class AssociatedInputController{constructor(t,e,i){this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.name=e}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return (0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.R)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){if(i)if("select"===this.name)i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}));else"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value="")}validateName(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.T)(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}} /***/ }), /***/ 91363: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InputController), /* harmony export */ g: () => (/* binding */ getRenderStates) /* harmony export */ }); /* harmony import */ var _index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19456); /* harmony import */ var _events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34209); /* harmony import */ var _associated_controller_ac43f4c8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23700); /*! * KoliBri - The accessible HTML-Standard */ const getRenderStates=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDescribedBy:n}};class ControlledInputController extends _associated_controller_ac43f4c8_js__WEBPACK_IMPORTED_MODULE_0__.A{constructor(t,e,o){super(t,e,o),this.component=t}validateAlert(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.component,"_alert",t)}validateTouched(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.D)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class InputController extends ControlledInputController{constructor(t,e,o){super(t,e,o),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.E)(this.component,t)}validateDisabled(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.component,"_disabled",t),!0===t&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.F)()}validateError(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_error",t)}validateHideError(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.G)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.I)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.H)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.I)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_hint",t)}validateId(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.J)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_on",t)}validateSmartButton(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.o)(t,(()=>{try{t=(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.j)(t)}catch(t){}(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.L)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const o=t.target.value;(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.t)("change",this.host,o),this.setFormAssociatedValue(o),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,o),this.valueChangeListeners.forEach((t=>t(o)))}onClick(t){var e;(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}} /***/ }), /***/ 34209: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ s: () => (/* binding */ stopPropagation), /* harmony export */ t: () => (/* binding */ tryToDispatchKoliBriEvent) /* harmony export */ }); /*! * KoliBri - The accessible HTML-Standard */ function stopPropagation(t){t.stopImmediatePropagation(),t.stopPropagation()}function createKoliBriEvent(t,o){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:o})}function dispatchKoliBriEvent(t,o,i){return t.dispatchEvent(createKoliBriEvent(o,i))}function tryToDispatchKoliBriEvent(t,o,i){o&&dispatchKoliBriEvent(o,t,i)} /***/ }), /***/ 84868: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_textarea: () => (/* binding */ KolTextarea) /* harmony export */ }); /* harmony import */ var _index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31707); /* harmony import */ var _index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19456); /* harmony import */ var _dev_utils_69ed2492_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65708); /* harmony import */ var _controller_04bfb6e9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91363); /* harmony import */ var _InternalUnderlinedAccessKey_43e30086_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58584); /*! * KoliBri - The accessible HTML-Standard */ class TextareaController extends _controller_04bfb6e9_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(t,e,n){super(t,e,n),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=t}validateHasCounter(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.component,"_hasCounter",t,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.Y)(this.component,"_maxLength",t,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_placeholder",t)}validateReadOnly(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.component,"_readOnly",t)}validateResize(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_resize",(t=>"string"==typeof t&&_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.ak.includes(t)),new Set(`String {${_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.ak.join(", ")}`),t)}validateRequired(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.component,"_required",t)}validateRows(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.ac)(this.component,t)}validateValue(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_value",t,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, option, select, textarea, .input-label) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n",KolTextareaDefaultStyle0=defaultStyleCss,increaseTextareaHeight=t=>{t.style.overflow="hidden";const e=t.rows,n=t.clientHeight/e;t.rows=1;const a=Math.round(t.scrollHeight/n);return t.rows=e,a},KolTextarea=class{async getValue(){var t;return null===(t=this.ref)||void 0===t?void 0:t.value}render(){const{ariaDescribedBy:t}=(0,_controller_04bfb6e9_js__WEBPACK_IMPORTED_MODULE_0__.g)(this.state),e=(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.state._label);return (0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)(_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.H,{class:{"has-value":this.state._hasValue}},(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)("kol-input",{class:{textarea:!0,"hide-label":!!this.state._hideLabel,"has-counter":!!this.state._hasCounter},_accessKey:this.state._accessKey,_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_label:this.state._label,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",{slot:"label"},e?(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)(_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.F,null,(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)(_InternalUnderlinedAccessKey_43e30086_js__WEBPACK_IMPORTED_MODULE_3__.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",null,this.state._label)),(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{slot:"input"},(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.h)("textarea",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onInput:this.onInput,style:{resize:this.state._resize},value:this.state._value})))))}constructor(t){(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this,t),this.catchRef=t=>{this.ref=t,(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.host,this.ref)},this.onInput=()=>{this.ref instanceof HTMLTextAreaElement&&((0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=increaseTextareaHeight(this.ref)))},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=!1,this._resize="vertical",this._required=!1,this._rows=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${(0,_dev_utils_69ed2492_js__WEBPACK_IMPORTED_MODULE_4__.n)()}`,_label:"",_resize:"vertical"},this.controller=new TextareaController(this,"textarea",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAdjustHeight(t){this.controller.validateAdjustHeight(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateResize(t){this.controller.validateResize(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentDidLoad(){setTimeout((()=>{var t;this.ref&&(this._rows=(null===(t=this.state)||void 0===t?void 0:t._rows)&&this.state._rows>increaseTextareaHeight(this.ref)?this.state._rows:increaseTextareaHeight(this.ref))}),0)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return (0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_2__.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolTextarea.style={default:KolTextareaDefaultStyle0}; /***/ }) }; ;