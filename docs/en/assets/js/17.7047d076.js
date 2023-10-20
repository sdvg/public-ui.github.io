"use strict"; exports.id = 17; exports.ids = [17]; exports.modules = { /***/ 10017: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_split_button: () => (/* binding */ KolSplitButton) /* harmony export */ }); /* harmony import */ var _index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39384); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}",KolSplitButton=class{constructor(t){(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.clickButtonHandler={onClick:t=>{var i,o;"function"==typeof(null===(i=this._on)||void 0===i?void 0:i.onClick)?null===(o=this._on)||void 0===o||o.onClick(t,this._value):this.toggleDropdown()}},this.clickToggleHandler={onClick:()=>this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_show:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_show:!1}))},this.toggleDropdown=t=>{("boolean"==typeof t?t:!this.state._show)?this.openDropdown():this.closeDropdown()},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild})))},this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_show:!1}}render(){return (0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_ariaControls:this._ariaControls,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icons:this._icons,_hideLabel:this._hideLabel,_label:this._label,_name:this._name,_on:this.clickButtonHandler,_role:this._role,_syncValueBySelector:this._syncValueBySelector,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"horizontal-line"}),(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,_hideLabel:!0,_icons:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._show?"schließen":"öffnen"),_on:this.clickToggleHandler}),(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"popover",ref:this.catchDropdownElements},(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"popover-content"},(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}};KolSplitButton.style={default:defaultStyleCss}; /***/ }) }; ;