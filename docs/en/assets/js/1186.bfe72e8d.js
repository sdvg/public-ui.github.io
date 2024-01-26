"use strict"; exports.id = 1186; exports.ids = [1186]; exports.modules = { /***/ 58584: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InternalUnderlinedAccessKey) /* harmony export */ }); /* harmony import */ var _index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31707); /*! * KoliBri - The accessible HTML-Standard */ const InternalUnderlinedAccessKey=({accessKey:e,label:n})=>{let[l,...t]=n.split(e);return 0===t.length&&(e=e.toUpperCase(),[l,...t]=n.split(e)),0===t.length&&(e=e.toLowerCase(),[l,...t]=n.split(e)),(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,l,t.length?(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_0__.h)("u",null,e),t.join(e)):null)}; /***/ }), /***/ 23700: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ A: () => (/* binding */ AssociatedInputController) /* harmony export */ }); /* harmony import */ var _index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19456); /*! * KoliBri - The accessible HTML-Standard */ class AssociatedInputController{constructor(t,e,i){this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.name=e}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return (0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.R)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){if(i)if("select"===this.name)i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}));else"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value="")}validateName(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.T)(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}} /***/ }), /***/ 91363: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InputController), /* harmony export */ g: () => (/* binding */ getRenderStates) /* harmony export */ }); /* harmony import */ var _index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19456); /* harmony import */ var _events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34209); /* harmony import */ var _associated_controller_ac43f4c8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23700); /*! * KoliBri - The accessible HTML-Standard */ const getRenderStates=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDescribedBy:n}};class ControlledInputController extends _associated_controller_ac43f4c8_js__WEBPACK_IMPORTED_MODULE_0__.A{constructor(t,e,o){super(t,e,o),this.component=t}validateAlert(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.component,"_alert",t)}validateTouched(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.D)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class InputController extends ControlledInputController{constructor(t,e,o){super(t,e,o),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.E)(this.component,t)}validateDisabled(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.component,"_disabled",t),!0===t&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.F)()}validateError(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_error",t)}validateHideError(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.G)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.I)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.H)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.I)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_hint",t)}validateId(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.J)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_on",t)}validateSmartButton(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.o)(t,(()=>{try{t=(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.j)(t)}catch(t){}(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.L)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const o=t.target.value;(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.t)("change",this.host,o),this.setFormAssociatedValue(o),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,o),this.valueChangeListeners.forEach((t=>t(o)))}onClick(t){var e;(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_fa760b68_js__WEBPACK_IMPORTED_MODULE_2__.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}} /***/ }), /***/ 62947: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InputIconController) /* harmony export */ }); /* harmony import */ var _index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19456); /* harmony import */ var _controller_04bfb6e9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91363); /*! * KoliBri - The accessible HTML-Standard */ const beforePatchIcons=(o,t)=>{const n=o;"object"==typeof n&&null!==n&&((0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.z)(n.right,1)&&(n.right={icon:n.right}),(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.z)(n.left,1)&&(n.left={icon:n.left}),t.set("_icons",n))};class InputIconController extends _controller_04bfb6e9_js__WEBPACK_IMPORTED_MODULE_1__.I{constructor(o,t,n){super(o,t,n),this.component=o}validateIcon(o){this.validateIcons(o)}validateIcons(o){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.o)(o,(()=>{try{o=(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.j)(o)}catch(o){}(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.w)(this.component,"_icons",(o=>"object"==typeof o&&null!==o&&((0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.z)(o.left,1)||(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.W)(o.left)||(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.z)(o.right,1)||(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_0__.W)(o.right))),new Set(["KoliBriHorizontalIcon"]),o,{hooks:{beforePatch:beforePatchIcons},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}} /***/ }), /***/ 34209: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ s: () => (/* binding */ stopPropagation), /* harmony export */ t: () => (/* binding */ tryToDispatchKoliBriEvent) /* harmony export */ }); /*! * KoliBri - The accessible HTML-Standard */ function stopPropagation(t){t.stopImmediatePropagation(),t.stopPropagation()}function createKoliBriEvent(t,o){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:o})}function dispatchKoliBriEvent(t,o,i){return t.dispatchEvent(createKoliBriEvent(o,i))}function tryToDispatchKoliBriEvent(t,o,i){o&&dispatchKoliBriEvent(o,t,i)} /***/ }), /***/ 1186: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_input_color: () => (/* binding */ KolInputColor) /* harmony export */ }); /* harmony import */ var _index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31707); /* harmony import */ var _index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19456); /* harmony import */ var _dev_utils_69ed2492_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65708); /* harmony import */ var _controller_04bfb6e9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91363); /* harmony import */ var _InternalUnderlinedAccessKey_43e30086_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58584); /* harmony import */ var _controller_icon_78968844_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62947); /*! * KoliBri - The accessible HTML-Standard */ class InputColorController extends _controller_icon_78968844_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(t,e,n){super(t,e,n),this.component=t}validateAutoComplete(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.U.includes(t)),new Set(_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.U),t)}validateSuggestions(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.V)(this.component,t)}validateValue(t){(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.q)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateSuggestions(this.component._suggestions),this.validateValue(this.component._value)}}const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, option, select, textarea, .input-label) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\tdiv.input {\n\t\tcursor: pointer;\n\t}\n\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n",KolInputColorDefaultStyle0=defaultStyleCss,KolInputColor=class{async getValue(){var t;return null===(t=this.ref)||void 0===t?void 0:t.value}render(){const{ariaDescribedBy:t}=(0,_controller_04bfb6e9_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.state._label);return (0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.H,null,(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)("kol-input",{class:{color:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_hideError:this.state._hideError,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",{slot:"label"},n?(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.F,null,(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)(_InternalUnderlinedAccessKey_43e30086_js__WEBPACK_IMPORTED_MODULE_4__.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",null,this.state._label)),(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)("div",{slot:"input"},(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,name:this.state._name,slot:"input",spellcheck:"false",type:"color",value:this.state._value},this.controller.onFacade)))))}constructor(t){(0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.r)(this,t),this.catchRef=t=>{this.ref=t,(0,_index_807d8631_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._smartButton=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hideError:!1,_id:`id-${(0,_dev_utils_69ed2492_js__WEBPACK_IMPORTED_MODULE_5__.n)()}`,_label:"",_suggestions:[]},this.controller=new InputColorController(this,"input-color",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return (0,_index_0b7aa54b_js__WEBPACK_IMPORTED_MODULE_3__.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolInputColor.style={default:KolInputColorDefaultStyle0}; /***/ }) }; ;