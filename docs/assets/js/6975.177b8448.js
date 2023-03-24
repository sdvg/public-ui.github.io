"use strict"; exports.id = 6975; exports.ids = [6975]; exports.modules = { /***/ 16975: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_breadcrumb": () => (/* binding */ KolBreadcrumb) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69379); /* harmony import */ var _a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95934); /* harmony import */ var _prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14282); /* harmony import */ var _validation_8f8d53e5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72937); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}ul,li{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator)::before{content:'\\f054';font-family:'Font Awesome 6 Free'}",KolBreadcrumb=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"…",_links:[]}}render(){const t=this.state._links.length-1;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":this.state._ariaLabel},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",null,0===this.state._links.length&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-home"}),"…"),this.state._links.map(((a,e)=>(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:e},0!==e&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-right"}),e===t?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,a._iconOnly?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:a._label,_icon:"string"==typeof a._icon?a._icon:"codicon codicon-symbol-event"}):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.F,null,a._label)):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link",Object.assign({exportparts:"link",_useCase:"nav"},a,{_ariaLabel:a._label}),a._label)))))))}validateAriaLabel(t){(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_ariaLabel",t,{required:!0}),(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_2__.b)(t)}validateLinks(t){(0,_validation_8f8d53e5_js__WEBPACK_IMPORTED_MODULE_3__.w)("KolBreadcrumb",this,t)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};KolBreadcrumb.style={default:defaultStyleCss}; /***/ }), /***/ 72937: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "w": () => (/* binding */ watchNavLinks) /* harmony export */ }); /* harmony import */ var _a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95934); /* harmony import */ var _prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14282); /*! * KoliBri - The accessible HTML-Standard */ const watchNavLinks=(a,t,s)=>{(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.d)(t,"_links",(a=>"object"==typeof a&&"string"==typeof a._label),s),(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__.u)(a,t.state._links.length)}; /***/ }) }; ;