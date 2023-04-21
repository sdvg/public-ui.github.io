"use strict";
exports.id = 6275;
exports.ids = [6275];
exports.modules = {

/***/ 46275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_link_group": () => (/* binding */ KolLinkGroup)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21622);
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60090);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85982);
/* harmony import */ var _validation_a42d9cc9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74692);
/* harmony import */ var _validation_ab9a6c0d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82771);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{list-style:none;margin:0;padding:0}nav.horizontal ul{display:flex;flex-wrap:wrap}nav.horizontal li{margin-left:1.25rem;margin-right:0.25rem}nav.horizontal li:first-child{margin-left:0}nav.horizontal li:last-child{margin-right:0}nav.vertical li{margin-left:1.75rem;margin-right:0.5rem}li.list-none{list-style-type:none !important;margin-left:0}",ListItem=t=>{const i=[];return t.links.map(((a,e)=>{i.push((0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:e,class:{ident:e>0&&"vertical"===t.orientation,"list-none":0===e&&"horizontal"===t.orientation},style:{listStyleType:t.listStyleType}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link",Object.assign({},a))))})),i},KolLinkGroup=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.isUl=!0,this._ariaLabel=void 0,this._listStyleType=void 0,this._heading=void 0,this._level=void 0,this._links=void 0,this._ordered=void 0,this._orientation="vertical",this.state={_ariaLabel:"…",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){var t;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":this.state._ariaLabel,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},"string"==typeof this.state._heading&&(null===(t=this.state._heading)||void 0===t?void 0:t.length)>0&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),!1===this.isUl?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(ListItem,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(ListItem,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateAriaLabel(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_ariaLabel",t,{required:!0}),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.b)(t)}validateListStyleType(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_listStyleType",(t=>{switch(t){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),t)}validateHeading(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_heading",t)}validateLevel(t){(0,_validation_a42d9cc9_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,t)}validateLinks(t){(0,_validation_ab9a6c0d_js__WEBPACK_IMPORTED_MODULE_4__.w)("KolLinkGroup",this,t)}validateOrdered(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_ordered",t)}validateOrientation(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateListStyleType(this._listStyleType),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateLinks(this._links),this.validateOrientation(this._orientation)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_listStyleType:["validateListStyleType"],_heading:["validateHeading"],_level:["validateLevel"],_links:["validateLinks"],_ordered:["validateOrdered"],_orientation:["validateOrientation"]}}};KolLinkGroup.style={default:defaultStyleCss};

/***/ }),

/***/ 74692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85982);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(e,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};

/***/ }),

/***/ 82771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchNavLinks)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60090);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85982);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchNavLinks=(t,a,s)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.d)(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),s),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.u)(t,a.state._links.length)};

/***/ })

};
;