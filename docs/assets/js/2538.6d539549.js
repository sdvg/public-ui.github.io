"use strict";
exports.id = 2538;
exports.ids = [2538];
exports.modules = {

/***/ 52538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_progress": () => (/* binding */ KolProcess)
/* harmony export */ });
/* harmony import */ var _index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97571);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10723);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}[hidden],progress{display:block;height:0;overflow:hidden;width:0}.bar,.cycle{transition:0.5s ease-in-out 0.25s}.cycle{transform-origin:50% 50%;transform:rotate(-90deg)}",createProgressSVG=e=>"cycle"===e._type?h("svg",{width:"100",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},h("circle",{fill:"none",stroke:"#efefef",cx:"6px",cy:"6px",r:"5px"}),h("text",{"aria-hidden":"true","font-size":"0.1em",x:"50%",y:"50%","text-anchor":"middle",fill:"currentColor"},e._label&&h("tspan",{"text-anchor":"middle",x:"50%",dy:"-0.5em"},e._label),h("tspan",{"text-anchor":"middle",x:"50%",dy:e._label?"1em":"0em"},e._value,e._unit)),h("circle",{class:"cycle","stroke-linecap":"round","stroke-dasharray":`${Math.round(e._value/e._max*32)}px 32px`,fill:"none",stroke:"#0075ff",cx:"6px",cy:"6px",r:"5px"})):h("div",null,e._label&&h("div",null,e._label),h("div",{style:{display:"flex",gap:"0.3em"}},h("svg",{width:"100",viewBox:"0 0 24 2",xmlns:"http://www.w3.org/2000/svg"},h("line",{"stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:"23",y2:"1",fill:"#efefef",stroke:"#efefef"}),h("line",{class:"bar","stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:`${1+Math.round(e._value/e._max*22)}`,y2:"1",fill:"#0075ff",stroke:"#0075ff"})),h("text",{"aria-hidden":"true","font-size":"0.1em","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},e._value,e._unit))),KolProcess=class{constructor(e){(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this._label=void 0,this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this.state={_max:100,_type:"bar",_unit:"%",_value:0,_liveValue:0}}render(){return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.H,null,"cycle"===(e=this.state)._type?(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{width:"100",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{fill:"none",stroke:"#efefef",cx:"6px",cy:"6px",r:"5px"}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("text",{"aria-hidden":"true","font-size":"0.1em",x:"50%",y:"50%","text-anchor":"middle",fill:"currentColor"},e._label&&(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("tspan",{"text-anchor":"middle",x:"50%",dy:"-0.5em"},e._label),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("tspan",{"text-anchor":"middle",x:"50%",dy:e._label?"1em":"0em"},e._value,e._unit)),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{class:"cycle","stroke-linecap":"round","stroke-dasharray":`${Math.round(e._value/e._max*32)}px 32px`,fill:"none",stroke:"#0075ff",cx:"6px",cy:"6px",r:"5px"})):(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,e._label&&(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,e._label),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{display:"flex",gap:"0.3em"}},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{width:"100",viewBox:"0 0 24 2",xmlns:"http://www.w3.org/2000/svg"},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("line",{"stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:"23",y2:"1",fill:"#efefef",stroke:"#efefef"}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("line",{class:"bar","stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:`${1+Math.round(e._value/e._max*22)}`,y2:"1",fill:"#0075ff",stroke:"#0075ff"})),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("text",{"aria-hidden":"true","font-size":"0.1em","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},e._value,e._unit))),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-live":"polite","aria-relevant":"removals text",hidden:!0},this.state._liveValue," von ",this.state._max," ",this.state._unit));var e}validateLabel(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_label",e)}validateMax(e){"number"!=typeof e&&(e=100),(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,"_max",e,{required:!0})}validateType(e){if("cycle"===e);else e="bar";this.state=Object.assign(Object.assign({},this.state),{_type:e})}validateUnit(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_unit",e)}validateValue(e){"number"!=typeof e&&(e=0),(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,"_value",e,{required:!0})}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateType(this._type),this.validateUnit(this._unit),this.validateValue(this._value),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"]}}};KolProcess.style={default:defaultStyleCss};

/***/ })

};
;