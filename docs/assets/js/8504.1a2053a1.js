"use strict";
exports.id = 8504;
exports.ids = [8504];
exports.modules = {

/***/ 7379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateAccessKey)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAccessKey=(a,s)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,"_accessKey",s)};

/***/ }),

/***/ 9983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateAlign),
/* harmony export */   v: () => (/* binding */ validateAlignment)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAlignment=(t,i,a)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.w)(t,i,(t=>"string"==typeof t&&alignPropTypeOptions.includes(t)),new Set(alignPropTypeOptions),a,{defaultValue:"top"})},horizontalAlignOptions=["left","right"],verticalAlignOptions=["top","bottom"],alignPropTypeOptions=[...horizontalAlignOptions,...verticalAlignOptions],validateAlign=(t,i)=>{validateAlignment(t,"_align",i)};

/***/ }),

/***/ 38016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateAlternativeButtonLinkRole)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAlternativeButtonLinkRole=(t,a)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,"_role",a)};

/***/ }),

/***/ 4636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AssociatedInputController)
/* harmony export */ });
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4144);
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateName=(t,e,i)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,"_name",e,i)},isAssociatedTagName=t=>"KOL-BUTTON"===t||"KOL-INPUT-CHECKBOX"===t||"KOL-INPUT-COLOR"===t||"KOL-INPUT-DATE"===t||"KOL-INPUT-EMAIL"===t||"KOL-INPUT-FILE"===t||"KOL-INPUT-NUMBER"===t||"KOL-INPUT-PASSWORD"===t||"KOL-INPUT-RADIO"===t||"KOL-INPUT-RANGE"===t||"KOL-INPUT-TEXT"===t||"KOL-SELECT"===t||"KOL-TEXTAREA"===t;class AssociatedInputController{constructor(t,e,i){var s,a,o;if(this.experimentalMode=(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_1__.a)(),this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.j)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const s=this.tryToStringifyValue(t);this.syncValue(t,s,this.formAssociated),this.syncValue(t,s,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.type=e,this.experimentalMode&&isAssociatedTagName(null===(s=this.host)||void 0===s?void 0:s.tagName)){switch(null===(a=this.host)||void 0===a||a.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(o=this.host)||void 0===o||o.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){if(this.experimentalMode)try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==e||e.setAttribute(t,`${i}`)}catch(i){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return (0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.l)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){if(i)switch(this.type){case"file":i.files=t;break;case"select":i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}));break;case"radio":"string"==typeof e&&(i.setAttribute("value",e),i.setAttribute("checked",""),i.value=e);break;default:"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value="")}}validateName(t){validateName(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.j)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}

/***/ }),

/***/ 69676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ propagateResetEventToForm),
/* harmony export */   p: () => (/* binding */ propagateSubmitEventToForm)
/* harmony export */ });
/* harmony import */ var _component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60848);
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15752);
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4144);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const searchFormElement=e=>{for((0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.a)()&&((0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.j)("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&e.tagName!==_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__.m.toUpperCase();){try{e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null}catch(e){}(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.a)()&&(console.log(e),(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.j)("↑ Search form element finished."))}return e},propagateResetEventToForm=(e={})=>{var t,o;const n=searchFormElement(e.form);if(n instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===n.tagName)(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.q)(e,n),n.dispatchEvent(e);else if(n.tagName===_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__.m.toUpperCase()){(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.q)(e,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.K.querySelector("form",n));const a=n;"function"==typeof(null===(t=a._on)||void 0===t?void 0:t.onReset)&&(null===(o=a._on)||void 0===o||o.onReset(e))}}},propagateSubmitEventToForm=(e={})=>{const t=searchFormElement(e.form);if(t instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t});if("FORM"===t.tagName)(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.a)()&&!1===t.noValidate&&(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.j)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof t.requestSubmit?t.requestSubmit():((0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.q)(e,t),t.dispatchEvent(e))}));else if(t.tagName===_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__.m.toUpperCase()){(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.q)(e,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.K.querySelector("form",t));const o=t;setTimeout((()=>{var t,n;"function"==typeof(null===(t=o._on)||void 0===t?void 0:t.onSubmit)&&(null===(n=o._on)||void 0===n||n.onSubmit(e))}))}}};

/***/ }),

/***/ 32448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateCustomClass)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateCustomClass=(a,s)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,"_customClass",s,{defaultValue:void 0})};

/***/ }),

/***/ 47836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateDisabled)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateDisabled=(a,o)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_disabled",o,{hooks:{afterPatch:a=>{!0===a&&(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.c)()}}})};

/***/ }),

/***/ 22004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ preventDefaultAndStopPropagation),
/* harmony export */   s: () => (/* binding */ stopPropagation),
/* harmony export */   t: () => (/* binding */ tryToDispatchKoliBriEvent)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
function stopPropagation(t){t.stopImmediatePropagation(),t.stopPropagation()}function createKoliBriEvent(t,o){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:o})}function dispatchKoliBriEvent(t,o,n){return t.dispatchEvent(createKoliBriEvent(o,n))}function tryToDispatchKoliBriEvent(t,o,n){o&&dispatchKoliBriEvent(o,t,n)}function preventDefaultAndStopPropagation(t){t.preventDefault(),stopPropagation(t)}

/***/ }),

/***/ 17584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateHideLabel)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateHideLabel=(a,e,o={})=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_hideLabel",e,o)};

/***/ }),

/***/ 19684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isIcon),
/* harmony export */   v: () => (/* binding */ validateIcons)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15752);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63312);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const mapCustomIcon=(t,o,e)=>{(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.c)(e)?t[o]=e:(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(e,1)&&(t[o]={icon:e})},mapIconProp2State=t=>{let o={};return (0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)?o={left:{icon:t}}:"object"==typeof t&&null!==t&&(mapCustomIcon(o,"top",t.top),mapCustomIcon(o,"right",t.right),mapCustomIcon(o,"bottom",t.bottom),mapCustomIcon(o,"left",t.left)),o},beforePatchIcon=t=>{var o,e,i;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icons")){const o=null===(e=t.nextState)||void 0===e?void 0:e.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",mapIconProp2State(o))}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.style))&&(void 0===t.label||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.label))&&(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.icon,1),validateIcons=(t,o,e={})=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{var i;try{o=(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_1__.w)(t,"_icons",(t=>{const o="object"==typeof t&&null!==t&&0===Object.keys(t).length;return null===t||o||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)||"object"==typeof t&&null!==t&&((0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.left,1)||isIcon(t.left)||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.right,1)||isIcon(t.right)||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.top,1)||isIcon(t.top)||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.bottom,1)||isIcon(t.bottom))}),new Set(["KoliBriIcon"]),o,Object.assign(Object.assign({},e),{defaultValue:{},hooks:{afterPatch:null===(i=e.hooks)||void 0===i?void 0:i.afterPatch,beforePatch:(t,o,i,n)=>{var s,a;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.beforePatch)&&(null===(a=e.hooks)||void 0===a||a.beforePatch(t,o,i,n)),beforePatchIcon(i)}}}))}))};

/***/ }),

/***/ 68504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_button_wc: () => (/* binding */ KolButtonWc)
/* harmony export */ });
/* harmony import */ var _index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86104);
/* harmony import */ var _events_29e84d75_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22004);
/* harmony import */ var _controller_f204bd94_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69676);
/* harmony import */ var _associated_controller_ad89c814_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4636);
/* harmony import */ var _component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60848);
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/* harmony import */ var _access_key_e22ec35a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7379);
/* harmony import */ var _icons_9784d978_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19684);
/* harmony import */ var _alternative_button_link_role_435f91d3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38016);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63312);
/* harmony import */ var _custom_class_9daf0e87_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32448);
/* harmony import */ var _disabled_7ce039e2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47836);
/* harmony import */ var _hide_label_f5e03637_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17584);
/* harmony import */ var _label_452f8c01_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25108);
/* harmony import */ var _tab_index_bffbd9f3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87424);
/* harmony import */ var _tooltip_align_676fe651_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13716);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAriaControls=(t,a)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,"_ariaControls",a)},validateAriaExpanded=(t,a)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,"_ariaExpanded",a)},validateAriaSelected=(t,a)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,"_ariaSelected",a)},validateButtonCallbacks=(t,a)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.w)(t,"_on",(t=>"object"==typeof t&&null!==t),new Set(["ButtonCallbacksPropType {Events.onClick, Events.onMouseDown}"]),a)},buttonTypePropTypeOptions=["button","reset","submit"],validateButtonType=(t,a)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.w)(t,"_type",(t=>"string"==typeof t&&buttonTypePropTypeOptions.includes(t)),new Set([`KoliBriButtonType {${buttonTypePropTypeOptions.join(", ")}`]),a)},buttonVariantPropTypeOptions=["primary","secondary","normal","tertiary","danger","ghost","custom"],validateButtonVariant=(t,a)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.w)(t,"_variant",(t=>"string"==typeof t&&buttonVariantPropTypeOptions.includes(t)),new Set([`KoliBriButtonVariant {${buttonVariantPropTypeOptions.join(", ")}`]),a,{defaultValue:"normal"})},KolButtonWc=class{render(){const t=(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.state._label);return (0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__.h)(_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__.H,{key:"c0d16e55ccda6586451460ed73035afc5094a20c",class:"kol-button-wc"},(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__.h)("button",Object.assign({key:"6ee3c6aa4c7eb2870b69369ae303b344f9243615",ref:this.catchRef,accessKey:this.state._accessKey||void 0,"aria-controls":this.state._ariaControls,"aria-expanded":(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.x)(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-selected":(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.y)(this.state._ariaSelected),class:{button:!0,disabled:!0===this.state._disabled,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id,name:this.state._name},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__.h)(_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_3__.f,{key:"89e898b52482ab8f2b991ee630d3c01eba2c5673",class:"button-inner",_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:t?"":this.state._label},(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot",{key:"c7f11890216223942c6adea500e5904409877564",name:"expert",slot:"expert"}))),(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__.h)(_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_3__.a,{key:"31d7ab91f54a8046442ffdb435f55cb4681d1b32","aria-hidden":"true",hidden:t||!this.state._hideLabel,_accessKey:this._accessKey,_align:this.state._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))}constructor(t){(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this,t),this.catchRef=t=>{this.ref=t,(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.host,this.ref)},this.onClick=t=>{var a,e;"submit"===this.state._type?(0,_controller_f204bd94_js__WEBPACK_IMPORTED_MODULE_4__.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,_controller_f204bd94_js__WEBPACK_IMPORTED_MODULE_4__.a)({form:this.host,ref:this.ref}):((0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_5__.s)(t),(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_5__.t)("click",this.host,this.state._value),this.controller.setFormAssociatedValue(this.state._value),"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)&&((0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.q)(t,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(t,this.state._value)))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icons:{},_label:"",_on:{},_type:"button",_variant:"normal"},this.controller=new _associated_controller_ad89c814_js__WEBPACK_IMPORTED_MODULE_6__.A(this,"button",this.host)}validateAccessKey(t){(0,_access_key_e22ec35a_js__WEBPACK_IMPORTED_MODULE_7__.v)(this,t)}validateAriaControls(t){validateAriaControls(this,t)}validateAriaExpanded(t){validateAriaExpanded(this,t)}validateAriaSelected(t){validateAriaSelected(this,t)}validateCustomClass(t){(0,_custom_class_9daf0e87_js__WEBPACK_IMPORTED_MODULE_8__.v)(this,t)}validateDisabled(t){(0,_disabled_7ce039e2_js__WEBPACK_IMPORTED_MODULE_9__.v)(this,t)}validateHideLabel(t){(0,_hide_label_f5e03637_js__WEBPACK_IMPORTED_MODULE_10__.v)(this,t)}validateIcons(t){(0,_icons_9784d978_js__WEBPACK_IMPORTED_MODULE_11__.v)(this,t)}validateId(t){(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.i)(this,"_id",t)}validateLabel(t){(0,_label_452f8c01_js__WEBPACK_IMPORTED_MODULE_12__.a)(this,t,{required:!0})}validateName(t){this.controller.validateName(t)}validateOn(t){validateButtonCallbacks(this,t)}validateRole(t){(0,_alternative_button_link_role_435f91d3_js__WEBPACK_IMPORTED_MODULE_13__.v)(this,t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){(0,_tab_index_bffbd9f3_js__WEBPACK_IMPORTED_MODULE_14__.v)(this,t)}validateTooltipAlign(t){(0,_tooltip_align_676fe651_js__WEBPACK_IMPORTED_MODULE_15__.v)(this,t)}validateType(t){validateButtonType(this,t)}validateValue(t){(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.s)(this,"_value",t),this.controller.setFormAssociatedValue(this.state._value)}validateVariant(t){validateButtonVariant(this,t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel),this.validateIcons(this._icons),this.validateId(this._id),this.validateLabel(this._label),this.validateName(this._name),this.validateOn(this._on),this.validateRole(this._role),this.validateSyncValueBySelector(this._syncValueBySelector),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return (0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_2__.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaExpanded:["validateAriaExpanded"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_role:["validateRole"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};

/***/ }),

/***/ 25108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateLabelWithExpertSlot),
/* harmony export */   b: () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   c: () => (/* binding */ containsOnlyNumbers),
/* harmony export */   h: () => (/* binding */ headingLevelOptions),
/* harmony export */   v: () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const headingLevelOptions=[0,1,2,3,4,5,6],READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var t;return"string"==typeof a&&(null===(t=a.match(READABLE_CHARS))||void 0===t?void 0:t.length)||0}function hasEnoughReadableChars(a,t=1){return countReadableChars(a)>=t}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}function getValidationOptions(a){var t;return Object.assign(Object.assign({},a),{hooks:{afterPatch:(t,e,n,o)=>{var i,s;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(s=a.hooks)||void 0===s||s.afterPatch(t,e,n,o)),"string"==typeof t&&!1===hasEnoughReadableChars(t,3)&&!1===containsOnlyNumbers(t)&&(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=a.hooks)||void 0===t?void 0:t.beforePatch}})}const LABEL_VALUES=new Set(["string"]),validateLabel=(a,t,e={})=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.w)(a,"_label",(a=>"string"==typeof a),LABEL_VALUES,t,getValidationOptions(e))},validateLabelWithExpertSlot=validateLabel;

/***/ }),

/***/ 15752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   B: () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   C: () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   D: () => (/* binding */ stringifyJson),
/* harmony export */   K: () => (/* binding */ KoliBriDevHelper),
/* harmony export */   a: () => (/* binding */ a11yHint),
/* harmony export */   b: () => (/* binding */ watchBoolean),
/* harmony export */   c: () => (/* binding */ a11yHintDisabled),
/* harmony export */   d: () => (/* binding */ s),
/* harmony export */   e: () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   f: () => (/* binding */ featureHint),
/* harmony export */   g: () => (/* binding */ watchJsonArrayString),
/* harmony export */   h: () => (/* binding */ uiUxHintMillerscheZahl),
/* harmony export */   i: () => (/* binding */ watchString),
/* harmony export */   j: () => (/* binding */ devHint),
/* harmony export */   k: () => (/* binding */ watchNumber),
/* harmony export */   l: () => (/* binding */ devWarning),
/* harmony export */   m: () => (/* binding */ mapString2Unknown),
/* harmony export */   n: () => (/* binding */ deprecatedHint),
/* harmony export */   o: () => (/* binding */ objectObjectHandler),
/* harmony export */   p: () => (/* binding */ parseJson),
/* harmony export */   q: () => (/* binding */ setEventTarget),
/* harmony export */   r: () => (/* binding */ rgba$1),
/* harmony export */   s: () => (/* binding */ setState),
/* harmony export */   t: () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   u: () => (/* binding */ uiUxHint),
/* harmony export */   v: () => (/* binding */ koliBriQuerySelector),
/* harmony export */   w: () => (/* binding */ watchValidator),
/* harmony export */   x: () => (/* binding */ mapBoolean2String),
/* harmony export */   y: () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   z: () => (/* binding */ KoliBriUtils)
/* harmony export */ });
/* harmony import */ var _index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1500);
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4144);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=(e,t)=>{(!1===a11yCache.has(e)||(null==t?void 0:t.force))&&(a11yCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"✋ a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=(e,t)=>{(!1===deprecatedCache.has(e)||(null==t?void 0:t.force))&&(deprecatedCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"🔥 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},devWarning=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"⚠️ dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,t=!1,r)=>{(!1===featureCache.has(e)||(null==r?void 0:r.force))&&(featureCache.add(e),e+=!0===t?" ✅":"",_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"🌟 feature",forceLog:!!(null==r?void 0:r.force),overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,t)=>{(!1===uiUxCache.has(e)||(null==t?void 0:t.force))&&(uiUxCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"📑 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,t=8)=>{t>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,i=o[1]/255,l=o[2]/255,s=a<=.03928?a*e:u(a),c=i<=.03928?i*e:u(i),d=l<=.03928?l*e:u(l);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var rgbaConvert={exports:{}};function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),i=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),i=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),i=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.exports=arr,rgbaConvert.exports.arr=arr,rgbaConvert.exports.obj=obj,rgbaConvert.exports.css=css,rgbaConvert.exports.hex=hex,rgbaConvert.exports.num=num;const rgba$1=rgbaConvert.exports,pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.a)()&&(_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map);e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)},logWarn=(e,t,r,o)=>{devHint(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):void 0===n&&!0!==a.required&&r(a.defaultValue)?setState(e,t,a.defaultValue,a.hooks):(a.required||o.add(null),logWarn(e,t,n,o))}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!r(e)));void 0===i&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(i,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&devHint(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgba$1.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgba$1.hex(r.color),a=s(o,n),i={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const i=Array.from(r);for(let r=0;r<i.length;r++){let o=KoliBriUtils.cache.get(i[r]);void 0===o&&(o=koliBriA11yColorContrast(i[r],t)),KoliBriUtils.cache.set(i[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.getCssStyle=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.p,KoliBriDevHelper.patchTheme=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.x,KoliBriDevHelper.patchThemeTag=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.z,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ }),

/***/ 87424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15752);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don't Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_f2b9a155_js__WEBPACK_IMPORTED_MODULE_0__.k)(a,"_tabIndex",t,options)};

/***/ }),

/***/ 13716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateTooltipAlign)
/* harmony export */ });
/* harmony import */ var _align_6595a6d6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9983);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateTooltipAlign=(i,l)=>{(0,_align_6595a6d6_js__WEBPACK_IMPORTED_MODULE_0__.v)(i,"_tooltipAlign",l)};

/***/ })

};
;