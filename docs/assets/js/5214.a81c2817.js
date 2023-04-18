"use strict"; exports.id = 5214; exports.ids = [5214]; exports.modules = { /***/ 88498: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "w": () => (/* binding */ watchTooltipAlignment) /* harmony export */ }); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71689); /*! * KoliBri - The accessible HTML-Standard */ const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}; /***/ }), /***/ 43167: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ translate) /* harmony export */ }); /* unused harmony export t */ /* harmony import */ var _index_a007a589_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55487); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51200); /*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_a007a589_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a}; /***/ }), /***/ 20730: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "i": () => (/* binding */ isIcon), /* harmony export */ "v": () => (/* binding */ validateIcon), /* harmony export */ "w": () => (/* binding */ watchIconAlign) /* harmony export */ }); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71689); /* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95169); /*! * KoliBri - The accessible HTML-Standard */ const mapCustomIcon=(t,o,i)=>{(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.d)(i)?t[o]=i:(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(i,1)&&(t[o]={icon:i})},mapIconProp2State=(t,o)=>{let i={};if((0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,1))if("right"===o)i={right:{icon:t}};else i={left:{icon:t}};else"object"==typeof t&&null!==t&&(mapCustomIcon(i,"top",t.top),mapCustomIcon(i,"right",t.right),mapCustomIcon(i,"bottom",t.bottom),mapCustomIcon(i,"left",t.left));return i},beforePatchIcon=t=>{var o,i,n,e,c,a,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),c=(null===(n=t.nextState)||void 0===n?void 0:n.get("_iconAlign"))||t.state._iconAlign;null===(e=t.nextState)||void 0===e||e.set("_icon",mapIconProp2State(o,c))}else if(null===(c=t.nextState)||void 0===c?void 0:c.has("_iconAlign")){const o=t.state._iconAlign;null===(a=t.nextState)||void 0===a||a.set("_icon",{[o]:void 0,[null===(s=t.nextState)||void 0===s?void 0:s.get("_iconAlign")]:t.state._icon[o]})}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.c)(t.style))&&(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.icon,1),validateIcon=(t,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_icon",(t=>null===t||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,1)||"object"==typeof t&&null!==t&&((0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.left,1)||isIcon(t.left)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.right,1)||isIcon(t.right)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.top,1)||isIcon(t.top)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icon",{}),beforePatchIcon(t)}},required:!0})}))},watchIconAlign=(t,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{beforePatchIcon(t)}}})}; /***/ }), /***/ 5214: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_link_wc": () => (/* binding */ KolLinkWc) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64521); /* harmony import */ var _i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43167); /* harmony import */ var _button_link_0f3cba87_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88498); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51200); /* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32878); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71689); /* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95169); /* harmony import */ var _icon_00018c54_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20730); /* harmony import */ var _label_d51b1a57_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41244); /* harmony import */ var _tab_index_63d1379d_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70475); /*! * KoliBri - The accessible HTML-Standard */ const validateAriaCurrent=(t,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,"_ariaCurrent",(t=>"date"===t||"location"===t||"page"===t||"step"===t||"time"===t||!0===t),new Set(["String {data, location, page, step, time}","boolean"]),a)},validateAriaSelected=(t,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,"_ariaSelected",a)},validateStealth=(t,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,"_stealth",a)},KolLinkWc=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,t),this.nonce=(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_2__.n)(),this.catchRef=t=>{this.ref=t,(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.host,this.ref)},this.onClick=t=>{var a,e;"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)&&(t.preventDefault(),(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.f)(t,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(t,this.state._href))},this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.state._selector)},onKeyPress:()=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.i)(this.state._selector)}});const a="string"==typeof this.state._target&&"_self"!==this.state._target,e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:a?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_4__.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{isExternal:a,tagAttrs:e,goToProps:t}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_5__.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_href:"javascript:void(0)",_icon:{},_label:""}}render(){const{isExternal:t,tagAttrs:a,goToProps:e}=this.getRenderValues();return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("a",Object.assign({ref:this.catchRef},a,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly,"external-link":t}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},e,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"expert",slot:"expert"})),t&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"codicon codicon-link-external"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_ariaControls",t)}validateAriaCurrent(t){validateAriaCurrent(this,t)}validateAriaExpanded(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,_label_d51b1a57_js__WEBPACK_IMPORTED_MODULE_6__.a)(this,t)}validateAriaSelected(t){validateAriaSelected(this,t)}validateDisabled(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(this,"_disabled",t),!0===t&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_4__.e)()}validateHref(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_href",t)}validateIcon(t){(0,_icon_00018c54_js__WEBPACK_IMPORTED_MODULE_7__.v)(this,t)}validateIconAlign(t){(0,_icon_00018c54_js__WEBPACK_IMPORTED_MODULE_7__.w)(this,t)}validateIconOnly(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(this,"_iconOnly",t)}validateLabel(t){(0,_label_d51b1a57_js__WEBPACK_IMPORTED_MODULE_6__.b)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&Object.prototype.hasOwnProperty.call(t,"onClick")&&"function"==typeof t.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_role",t)}validateSelector(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_selector",t)}validateStealth(t){validateStealth(this,t)}validateTabIndex(t){(0,_tab_index_63d1379d_js__WEBPACK_IMPORTED_MODULE_8__.v)(this,t)}validateTarget(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_target",t)}validateTargetDescription(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_targetDescription",t)}validateTooltipAlign(t){(0,_button_link_0f3cba87_js__WEBPACK_IMPORTED_MODULE_9__.w)(this,"_tooltipAlign",t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}; /***/ }), /***/ 41244: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ validateAriaLabelWithLabel), /* harmony export */ "b": () => (/* binding */ validateLabelWithAriaLabel), /* harmony export */ "c": () => (/* binding */ containsOnlyNumbers), /* harmony export */ "h": () => (/* binding */ hasEnoughReadableChars), /* harmony export */ "v": () => (/* binding */ validateLabel) /* harmony export */ }); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51200); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71689); /* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95169); /*! * KoliBri - The accessible HTML-Standard */ const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var e;return"string"==typeof a&&(null===(e=a.match(READABLE_CHARS))||void 0===e?void 0:e.length)||0}function hasEnoughReadableChars(a,e=1){return countReadableChars(a)>=e}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}const syncAriaLabelBeforePatch=(a,e,i,t)=>{const r=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof r){const a=e.has("_label")?e.get("_label"):i.state._label;!1===(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,r)&&("_ariaLabel"===t?e.set("_label",r):e.set("_ariaLabel",void 0),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(a,e,i={})=>{var t;(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_ariaLabel",e,{hooks:{afterPatch:(a,e,t,r)=>{var n,s;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(a,e,t,r)),"string"==typeof a&&a.length>0&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein abweichendes Aria-Label (${a}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch}})},validateAriaLabelWithLabel=(a,e)=>{validateAriaLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(a,e,i={})=>{var t;(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_label",e,{hooks:{afterPatch:(a,e,t,r)=>{var n,s;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(a,e,t,r)),"string"==typeof a&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein Label (${a}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch},required:!0})},validateLabelWithAriaLabel=(a,e)=>{validateLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})}; /***/ }), /***/ 70475: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "v": () => (/* binding */ validateTabIndex) /* harmony export */ }); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51200); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71689); /*! * KoliBri - The accessible HTML-Standard */ const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)}; /***/ }) }; ;