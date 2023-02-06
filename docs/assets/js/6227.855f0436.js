"use strict";
exports.id = 6227;
exports.ids = [6227];
exports.modules = {

/***/ 55298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   "b": () => (/* binding */ deprecatedHint),
/* harmony export */   "c": () => (/* binding */ a11yHintDisabled),
/* harmony export */   "d": () => (/* binding */ devHint),
/* harmony export */   "e": () => (/* binding */ a11yHint),
/* harmony export */   "f": () => (/* binding */ featureHint),
/* harmony export */   "u": () => (/* binding */ uiUxHintMillerscheZahl)
/* harmony export */ });
/* harmony import */ var _dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28764);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=e=>{!1===a11yCache.has(e)&&(a11yCache.add(e),_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.info(e,{classifier:"✋a11y",overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=e=>{!1===deprecatedCache.has(e)&&(deprecatedCache.add(e),_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(e,{classifier:"🔥deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=e=>{!1===devCache.has(e)&&(devCache.add(e),_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"💻dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,a=!1)=>{!1===featureCache.has(e)&&(featureCache.add(e),e+=!0===a?" ✅":"",_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"🌟feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=e=>{!1===uiUxCache.has(e)&&(uiUxCache.add(e),Log.debug(e,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,a=8)=>{var i;a>7&&(i=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===uiUxCache.has(i)&&(uiUxCache.add(i),_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"})))};

/***/ }),

/***/ 91471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchTooltipAlignment)
/* harmony export */ });
/* harmony import */ var _prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86896);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})};

/***/ }),

/***/ 49162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_5cef3ddc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94874);
/* harmony import */ var _a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55298);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const error$1="Fehler",warning$1="Warnung",info$1="Hinweis",success$1="Erfolg",message$1="Nachricht",close$1="Schließen",of$1="von",characters$1="Zeichen",locale_de={error:error$1,warning:"Warnung",info:info$1,success:"Erfolg",message:message$1,close:close$1,"form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:of$1,characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},error="Error",warning="Warning",info="Note",success="Success",message="Message",close="Close",of="of",characters="characters",locale_en={error:error,warning:warning,info:info,success:success,message:message,close:close,"form-description":"Form fields marked with an asterisk (*) are mandatory.",of:of,characters:characters,new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_5cef3ddc_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a};

/***/ }),

/***/ 22293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isIcon),
/* harmony export */   "v": () => (/* binding */ validateIcon),
/* harmony export */   "w": () => (/* binding */ watchIconAlign)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55298);
/* harmony import */ var _prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86896);
/* harmony import */ var _validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45940);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const mapCustomIcon=(t,o,i)=>{(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.i)(i)?t[o]=i:(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.a)(i,1)&&(t[o]={icon:i})},mapIconProp2State=(t,o)=>{let i={};if((0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,1))if("right"===o)i={right:{icon:t}};else i={left:{icon:t}};else"object"==typeof t&&null!==t&&(mapCustomIcon(i,"top",t.top),mapCustomIcon(i,"right",t.right),mapCustomIcon(i,"bottom",t.bottom),mapCustomIcon(i,"left",t.left));return i},beforePatchIcon=t=>{var o,i,e,n,a,c,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),a=(null===(e=t.nextState)||void 0===e?void 0:e.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",mapIconProp2State(o,a))}else if(null===(a=t.nextState)||void 0===a?void 0:a.has("_iconAlign")){const o=t.state._iconAlign;null===(c=t.nextState)||void 0===c||c.set("_icon",{[o]:void 0,[null===(s=t.nextState)||void 0===s?void 0:s.get("_iconAlign")]:t.state._icon[o]})}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.style))&&(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.a)(t.icon,1),validateIcon=(t,o)=>{(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_icon",(t=>null===t||(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,1)||"object"==typeof t&&null!==t&&((0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.a)(t.left,1)||isIcon(t.left)||(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.a)(t.right,1)||isIcon(t.right)||(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.a)(t.top,1)||isIcon(t.top)||(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.a)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icon",{}),beforePatchIcon(t)}},required:!0})}))},watchIconAlign=(t,o)=>{(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_2__.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{beforePatchIcon(t)}}})};

/***/ }),

/***/ 56970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ f),
/* harmony export */   "s": () => (/* binding */ s)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(n){return Math.pow((n+.055)/1.055,2.4)}function a(a){var i=a[0]/255,c=a[1]/255,o=a[2]/255,s=i<=.03928?i*e:u(i),f=c<=.03928?c*e:u(c),l=o<=.03928?o*e:u(o);return s*n+f*r+l*t}function i(n){var r=255;8===(n=n.replace(/^#/,"")).length&&(r=parseInt(n.slice(6,8),16),n=n.substring(0,6)),4===n.length&&(r=parseInt(n.slice(3,4).repeat(2),16),n=n.substring(0,3)),3===n.length&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var t=parseInt(n,16);return[t>>16,t>>8&255,255&t,r]}function c(n,r){return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function o(n,r){return c(a(n),a(r))}function s(n,r){return o(i(n),i(r))}function f(n){return n>=7?"AAA":n>=4.5?"AA":n>=3?"AA Large":"Fail"}

/***/ }),

/***/ 66227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_link_wc": () => (/* binding */ KolLinkWc)
/* harmony export */ });
/* harmony import */ var _index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82339);
/* harmony import */ var _i18n_b31d8a52_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49162);
/* harmony import */ var _button_link_d9d215b8_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91471);
/* harmony import */ var _a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55298);
/* harmony import */ var _dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28764);
/* harmony import */ var _prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86896);
/* harmony import */ var _reuse_2f7da8fc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82690);
/* harmony import */ var _icon_22dfdb71_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22293);
/* harmony import */ var _label_3f6eb03e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26197);
/* harmony import */ var _tab_index_e15e7adc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80367);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const KolLinkWc=class{constructor(t){(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.nonce=(0,_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_1__.n)(),this.catchRef=t=>{this.ref=t,(0,_reuse_2f7da8fc_js__WEBPACK_IMPORTED_MODULE_2__.p)(this.host,this.ref)},this.onClick=t=>{var a,e;"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)&&(t.preventDefault(),(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.e)(t,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(t,this.state._href))},this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.state._selector)},onKeyPress:()=>{(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.state._selector)}});const a="string"==typeof this.state._target&&"_self"!==this.state._target,e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:a?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_4__.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{isExternal:a,tagAttrs:e,goToProps:t}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,_i18n_b31d8a52_js__WEBPACK_IMPORTED_MODULE_5__.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_ariaLabel:"",_href:"javascript:void(0)",_icon:{},_iconAlign:"left",_label:""}}render(){const{isExternal:t,tagAttrs:a,goToProps:e}=this.getRenderValues();return (0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({ref:this.catchRef},a,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly,"external-link":t}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},e,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert",slot:"expert"})),t&&(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"fa-solid fa-arrow-up-right-from-square"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,"_ariaCurrent",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,_label_3f6eb03e_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateAriaSelected(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_ariaSelected",t)}validateDisabled(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_disabled",t),!0===t&&(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_4__.c)()}validateHref(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_href",t)}validateIcon(t){(0,_icon_22dfdb71_js__WEBPACK_IMPORTED_MODULE_7__.v)(this,t)}validateIconAlign(t){(0,_icon_22dfdb71_js__WEBPACK_IMPORTED_MODULE_7__.w)(this,t)}validateIconOnly(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_iconOnly",t)}validateLabel(t){(0,_label_3f6eb03e_js__WEBPACK_IMPORTED_MODULE_6__.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&Object.prototype.hasOwnProperty.call(t,"onClick")&&"function"==typeof t.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_role",t)}validateSelector(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_selector",t)}validateStealth(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_stealth",t)}validateTabIndex(t){(0,_tab_index_e15e7adc_js__WEBPACK_IMPORTED_MODULE_8__.v)(this,t)}validateTarget(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_target",t)}validateTargetDescription(t){(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_targetDescription",t)}validateTooltipAlign(t){(0,_button_link_d9d215b8_js__WEBPACK_IMPORTED_MODULE_9__.w)(this,"_tooltipAlign",t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return (0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}};

/***/ }),

/***/ 26197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ validateLabel),
/* harmony export */   "v": () => (/* binding */ validateAriaLabel)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55298);
/* harmony import */ var _prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86896);
/* harmony import */ var _validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45940);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const syncAriaLabelBeforePatch=(a,e,r,i)=>{const t=e.has("_ariaLabel")?e.get("_ariaLabel"):r.state._ariaLabel;if("string"==typeof t){const a=e.has("_label")?e.get("_label"):r.state._label;!1===(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.c)(a,t)&&("_ariaLabel"===i?e.set("_label",t):e.set("_ariaLabel",a),(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(a,e)=>{(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_ariaLabel",e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(a,e)=>{(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_label",e,{hooks:{beforePatch:syncAriaLabelBeforePatch},required:!0})};

/***/ }),

/***/ 86896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ KoliBriDevHelper),
/* harmony export */   "a": () => (/* binding */ watchValidator),
/* harmony export */   "b": () => (/* binding */ watchBoolean),
/* harmony export */   "c": () => (/* binding */ watchJsonArrayString),
/* harmony export */   "d": () => (/* binding */ watchNumber),
/* harmony export */   "e": () => (/* binding */ setEventTargetAndStopPropagation),
/* harmony export */   "f": () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   "g": () => (/* binding */ mapBoolean2String),
/* harmony export */   "h": () => (/* binding */ scrollBySelector),
/* harmony export */   "i": () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   "j": () => (/* binding */ KoliBriUtils),
/* harmony export */   "k": () => (/* binding */ koliBriQuerySelector),
/* harmony export */   "l": () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   "m": () => (/* binding */ mapString2Unknown),
/* harmony export */   "n": () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   "o": () => (/* binding */ objectObjectHandler),
/* harmony export */   "p": () => (/* binding */ parseJson),
/* harmony export */   "q": () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   "r": () => (/* binding */ rgbaConvert),
/* harmony export */   "s": () => (/* binding */ setState),
/* harmony export */   "t": () => (/* binding */ stringifyJson),
/* harmony export */   "w": () => (/* binding */ watchString)
/* harmony export */ });
/* harmony import */ var _index_2eac13ad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51728);
/* harmony import */ var _index_m_86dc8c44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56970);
/* harmony import */ var _a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55298);
/* harmony import */ var _dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28764);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=obj,css_1=css,hex_1=hex,num_1=num;function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),l=num2hex(t[2]),a=isshort(o,n,l,t=num2hex(Math.round(t[3])));return r?a?"#"+o.charAt(0)+n.charAt(0)+l.charAt(0):"#"+o+n+l:a?"#"+o.charAt(0)+n.charAt(0)+l.charAt(0)+t.charAt(0):"#"+o+n+l+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),l=hex2num(t[2]),a=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(l)||isNaN(a))return;return[o,n,l,a]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),l=hex2num(t.slice(4,6)),a=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(l)||isNaN(a))return;return[o,n,l,a]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),l=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=l)return[r,o,n,l]}}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTargetAndStopPropagation=(e,t)=>{(0,_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&(_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,l;if(void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r){e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(l=e.nextHooks.get(t))||void 0===l||l.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)}},logWarn=(e,t,r,o)=>{(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)},watchValidator=(e,t,r,o,n,l={})=>{r(n)?setState(e,t,n,null==l?void 0:l.hooks):void 0===n||null===n&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?setState(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||o.add(null),logWarn(e,t,n,o))},watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n),new Set([`String (Mindestlänge ${n})`]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),l={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const a=o.find((e=>!r(e)));void 0===a&&n(o)?setState(e,t,o,l.hooks):objectObjectHandler(a,(()=>{throw _dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(a),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),l=(0,_index_m_86dc8c44_js__WEBPACK_IMPORTED_MODULE_2__.s)(o,n),a={backgroundColor:o,color:n,domNode:e,level:(0,_index_m_86dc8c44_js__WEBPACK_IMPORTED_MODULE_2__.f)(l),score:l};return l<4.5&&_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:a.backgroundColor,color:a.color,level:a.level,score:a.score},a.domNode]),a},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)},scrollByHTMLElement=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.a)().pageYOffset-50}),e.focus()):(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},scrollBySelector=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=koliBriQuerySelector(e,t);r instanceof HTMLElement?scrollByHTMLElement(r):(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else (0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_1__.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const l=t.domNode.children;for(let e=0;e<l.length;e++)r.add(l[e]);const a=Array.from(r);for(let r=0;r<a.length;r++){let o=KoliBriUtils.cache.get(a[r]);void 0===o&&(o=koliBriA11yColorContrast(a[r],t)),KoliBriUtils.cache.set(a[r],o);const l=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==l){n=l;break}}}else _dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_daaf2f39_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_index_2eac13ad_js__WEBPACK_IMPORTED_MODULE_3__.p,KoliBriDevHelper.patchThemeTag=_index_2eac13ad_js__WEBPACK_IMPORTED_MODULE_3__.a,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.scrollByHTMLElement=scrollByHTMLElement,KoliBriDevHelper.scrollBySelector=scrollBySelector,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ }),

/***/ 82690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ propergateFocus),
/* harmony export */   "s": () => (/* binding */ smartSetTimeout)
/* harmony export */ });
/* harmony import */ var _validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45940);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const propergateFocus=(t,o)=>{(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.i)(t)&&t&&(t.focus=t=>null==o?void 0:o.focus(t))},smartSetTimeout=(t,o)=>{const e=setTimeout((()=>{clearTimeout(e),t()}),o)};

/***/ }),

/***/ 80367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55298);
/* harmony import */ var _prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86896);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_ff5a1a99_js__WEBPACK_IMPORTED_MODULE_0__.e)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_0ce5851c_js__WEBPACK_IMPORTED_MODULE_1__.d)(a,"_tabIndex",t,options)};

/***/ }),

/***/ 45940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ STATE_CHANGE_EVENT),
/* harmony export */   "a": () => (/* binding */ isString),
/* harmony export */   "b": () => (/* binding */ isStyle),
/* harmony export */   "c": () => (/* binding */ isEmptyOrPrefixOf),
/* harmony export */   "i": () => (/* binding */ isObject)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
const isObject=t=>"object"==typeof t&&null!==t,isString=(t,e=0)=>"string"==typeof t&&t.length>=e,isStyle=t=>{if("object"!=typeof t||null===t)return isString(t,1);for(const e in t)if(!1===isString(e,1))return!1;return!0},isPrefixOf=(t,e)=>new RegExp(`^${t}`).test(e),isEmptyOrPrefixOf=(t,e)=>0===e.length||isPrefixOf(t,e),STATE_CHANGE_EVENT=new Event("StateChange");

/***/ })

};
;