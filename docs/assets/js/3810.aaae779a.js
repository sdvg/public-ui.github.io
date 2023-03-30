"use strict"; exports.id = 3810; exports.ids = [3810]; exports.modules = { /***/ 38772: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ translate) /* harmony export */ }); /* unused harmony export t */ /* harmony import */ var _index_f3c76945_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92003); /* harmony import */ var _a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95934); /*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_f3c76945_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a}; /***/ }), /***/ 83810: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_form": () => (/* binding */ KolForm) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69379); /* harmony import */ var _prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14282); /* harmony import */ var _i18n_bc1e0dfd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38772); /*! * KoliBri - The accessible HTML-Standard */ const KolForm=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.onSubmit=t=>{var e,i;t.preventDefault(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=this.state._on)||void 0===i||i.onSubmit(t))},this.onReset=t=>{var e,i;t.preventDefault(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onReset)&&(null===(i=this.state._on)||void 0===i||i.onReset(t))},this._on=void 0,this._requiredText=!0,this.state={}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("form",{method:"post",onSubmit:this.onSubmit,onReset:this.onReset,autoComplete:"off",noValidate:!0},!0===this.state._requiredText?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-indented-text",null,(0,_i18n_bc1e0dfd_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-form-description"))):"string"==typeof this.state._requiredText&&this.state._requiredText.length>0?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-indented-text",null,this.state._requiredText)):null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRequiredText(t){"boolean"==typeof t?(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_requiredText",t):(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_requiredText",t)}componentWillLoad(){this.validateOn(this._on),this.validateRequiredText(this._requiredText)}static get watchers(){return{_on:["validateOn"],_requiredText:["validateRequiredText"]}}}; /***/ }) }; ;