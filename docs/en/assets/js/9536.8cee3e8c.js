"use strict"; exports.id = 9536; exports.ids = [9536]; exports.modules = { /***/ 59536: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_link_group: () => (/* binding */ KolLinkGroup) /* harmony export */ }); /* harmony import */ var _index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24236); /* harmony import */ var _index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75224); /* harmony import */ var _unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41012); /* harmony import */ var _validation_f540005c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30964); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\n\t/* This is the text label. */\n\t.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\n\t.disabled label,\n\t[aria-disabled='true'],\n\t[disabled] {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t\toutline: none;\n\t}\n}\n\n@layer kol-component {\n\tul {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\tnav.horizontal ul {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\n\tnav.horizontal li {\n\t\tmargin-left: 1.25rem;\n\t\tmargin-right: 0.25rem;\n\t}\n\n\tnav.horizontal li:first-child {\n\t\tmargin-left: 0;\n\t}\n\n\tnav.horizontal li:last-child {\n\t\tmargin-right: 0;\n\t}\n\n\tnav.vertical li {\n\t\tmargin-left: 1.75rem;\n\t\tmargin-right: 0.5rem;\n\t}\n\n\tli.list-none {\n\t\tlist-style-type: none !important;\n\t\tmargin-left: 0;\n\t}\n}\n",KolLinkGroupDefaultStyle0=defaultStyleCss,ListItem=t=>{const n=[];return t.links.map(((e,i)=>{n.push((0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:i,class:{ident:i>0&&"vertical"===t.orientation,"list-none":0===i&&"horizontal"===t.orientation},style:{listStyleType:t.listStyleType}},(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link",Object.assign({},e))))})),n},KolLinkGroup=class{constructor(t){(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.isUl=!0,this._listStyleType=void 0,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_label:"",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){return (0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":this.state._label,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},!1===this.isUl?(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",null,(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)(ListItem,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",null,(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)(ListItem,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateLabel(t,n,e=!1){e||(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.state._label),(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_2__.v)(this,t,{required:!0}),(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.state._label)}validateListStyleType(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_listStyleType",(t=>{switch(t){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),t,{defaultValue:"disc"})}validateLinks(t){(0,_validation_f540005c_js__WEBPACK_IMPORTED_MODULE_3__.w)("KolLinkGroup",this,t)}validateOrientation(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateListStyleType(this._listStyleType),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.state._label)}static get watchers(){return{_label:["validateLabel"],_listStyleType:["validateListStyleType"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};KolLinkGroup.style={default:KolLinkGroupDefaultStyle0}; /***/ }), /***/ 41012: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ addNavLabel), /* harmony export */ r: () => (/* binding */ removeNavLabel) /* harmony export */ }); /*! * KoliBri - The accessible HTML-Standard */ const UNIQUE_LABELS=new Set;function addNavLabel(e){UNIQUE_LABELS.has(e)?console.error(`There already is a nav element with the label "${e}"`):UNIQUE_LABELS.add(e)}function removeNavLabel(e){UNIQUE_LABELS.delete(e)} /***/ }), /***/ 30964: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ w: () => (/* binding */ watchNavLinks) /* harmony export */ }); /* harmony import */ var _index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75224); /*! * KoliBri - The accessible HTML-Standard */ const watchNavLinks=(t,a,i)=>{(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_0__.y)(a,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),i),(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_0__.z)(t,a.state._links.length)}; /***/ }) }; ;