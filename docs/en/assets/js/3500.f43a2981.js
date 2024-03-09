"use strict"; exports.id = 3500; exports.ids = [3500]; exports.modules = { /***/ 13500: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_skip_nav: () => (/* binding */ KolSkipNav) /* harmony export */ }); /* harmony import */ var _index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32924); /* harmony import */ var _unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1872); /* harmony import */ var _validation_cd55e47b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28240); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed !important;\n opacity: 0.5 !important;\n outline: none !important;\n }\n [aria-disabled=true]:focus kol-span-wc,\n [disabled]:focus kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n ul {\n display: grid;\n list-style: none;\n place-items: center;\n }\n ul li {\n height: 0;\n }\n kol-link-wc a {\n left: -99999px;\n overflow: hidden;\n position: absolute;\n z-index: 9999999;\n line-height: 1em;\n }\n kol-link-wc a:focus {\n background-color: #fff;\n left: unset;\n position: unset;\n }\n}",KolSkipNavDefaultStyle0=defaultStyleCss,KolSkipNav=class{constructor(n){(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,n),this._label=void 0,this._links=void 0,this.state={_label:"",_links:[]}}render(){return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"844dd7028e266ff6868958d79177cf7810bbce15","aria-label":this.state._label},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{key:"fe3ecbc861fc27669dfac7897e71bb4d0b7b4d3a"},this.state._links.map(((n,e)=>(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:e},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link-wc",Object.assign({},n)))))))}validateLabel(n,e,t=!1){t||(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.state._label),(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.v)(this,n,{required:!0}),(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.state._label)}validateLinks(n){(0,_validation_cd55e47b_js__WEBPACK_IMPORTED_MODULE_3__.w)("KolSkipNav",this,n)}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.state._label)}static get watchers(){return{_label:["validateLabel"],_links:["validateLinks"]}}};KolSkipNav.style={default:KolSkipNavDefaultStyle0}; /***/ }), /***/ 1872: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ addNavLabel), /* harmony export */ r: () => (/* binding */ removeNavLabel) /* harmony export */ }); /*! * KoliBri - The accessible HTML-Standard */ const UNIQUE_LABELS=new Set;function addNavLabel(e){UNIQUE_LABELS.has(e)?console.error(`There already is a nav element with the label "${e}"`):UNIQUE_LABELS.add(e)}function removeNavLabel(e){UNIQUE_LABELS.delete(e)} /***/ }), /***/ 28240: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ w: () => (/* binding */ watchNavLinks) /* harmony export */ }); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32924); /*! * KoliBri - The accessible HTML-Standard */ const watchNavLinks=(t,e,i)=>{(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.y)(e,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),i),(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.z)(t,e.state._links.length)}; /***/ }) }; ;