"use strict";
exports.id = 9657;
exports.ids = [9657];
exports.modules = {

/***/ 84669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a11yHint),
/* harmony export */   b: () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   c: () => (/* binding */ uiUxHintMillerscheZahl),
/* harmony export */   d: () => (/* binding */ devHint),
/* harmony export */   e: () => (/* binding */ a11yHintDisabled),
/* harmony export */   f: () => (/* binding */ featureHint),
/* harmony export */   g: () => (/* binding */ devWarning),
/* harmony export */   u: () => (/* binding */ uiUxHint)
/* harmony export */ });
/* harmony import */ var _dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60783);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=(e,i)=>{(!1===a11yCache.has(e)||(null==i?void 0:i.force))&&(a11yCache.add(e),_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},devCache=new Set,devHint=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},devWarning=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,i=!1,n)=>{(!1===featureCache.has(e)||(null==n?void 0:n.force))&&(featureCache.add(e),e+=!0===i?" ✅":"",_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,i)=>{(!1===uiUxCache.has(e)||(null==i?void 0:i.force))&&(uiUxCache.add(e),_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,i=8)=>{i>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};

/***/ }),

/***/ 36297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_daa35c44_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17127);
/* harmony import */ var _a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84669);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,a)=>(n[`kol-${a}`]=e[a],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const a=(0,_index_daa35c44_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===a)return (0,_a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let i=a.translate(e,n);return i===e&&((0,_a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(a.addResourceBundle(e,n),e))))),i=a.translate(e,n)),i};

/***/ }),

/***/ 29429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateImageSource)
/* harmony export */ });
/* harmony import */ var _prop_validators_0c664b0b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85123);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateImageSource=(a,r,t)=>{(0,_prop_validators_0c664b0b_js__WEBPACK_IMPORTED_MODULE_0__.d)(a,"_src",r,t)};

/***/ }),

/***/ 89657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_avatar_wc: () => (/* binding */ KolAvatarWc)
/* harmony export */ });
/* harmony import */ var _index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93873);
/* harmony import */ var _i18n_7d2a9d87_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36297);
/* harmony import */ var _image_source_28b214d4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29429);
/* harmony import */ var _label_ba8d055d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96043);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const formatNameAsInitial=a=>0===a.length?"":a[0].toUpperCase(),formatLabelAsInitials=a=>{const t=a.split(/\s+/),s=t.at(0),e=t.at(-1);return t.length>=2&&s&&e?`${formatNameAsInitial(s)}${formatNameAsInitial(e)}`:formatNameAsInitial(a)},KolAvatarWc=class{constructor(a){(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,a),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return (0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-label":(0,_i18n_7d2a9d87_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-hidden":"true",class:"initials"},formatLabelAsInitials(this.state._label))))}validateSrc(a){(0,_image_source_28b214d4_js__WEBPACK_IMPORTED_MODULE_2__.v)(this,a)}validateLabel(a){(0,_label_ba8d055d_js__WEBPACK_IMPORTED_MODULE_3__.v)(this,a)}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}};

/***/ }),

/***/ 96043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateLabelWithExpertSlot),
/* harmony export */   c: () => (/* binding */ containsOnlyNumbers),
/* harmony export */   h: () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   v: () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84669);
/* harmony import */ var _prop_validators_0c664b0b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85123);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var t;return"string"==typeof a&&(null===(t=a.match(READABLE_CHARS))||void 0===t?void 0:t.length)||0}function hasEnoughReadableChars(a,t=1){return countReadableChars(a)>=t}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}function getValidationOptions(a){var t;return{hooks:{afterPatch:(t,e,o,n)=>{var i,l;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(t,e,o,n)),"string"==typeof t&&!1===hasEnoughReadableChars(t,3)&&!1===containsOnlyNumbers(t)&&(0,_a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_0__.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,_a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_0__.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=a.hooks)||void 0===t?void 0:t.beforePatch}}}const LABEL_VALUES=new Set(["string"]),validateLabel=(a,t,e={})=>{(0,_prop_validators_0c664b0b_js__WEBPACK_IMPORTED_MODULE_1__.w)(a,"_label",(a=>"string"==typeof a),LABEL_VALUES,t,getValidationOptions(e))},validateLabelWithExpertSlot=validateLabel;

/***/ }),

/***/ 85123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ KoliBriDevHelper),
/* harmony export */   a: () => (/* binding */ watchBoolean),
/* harmony export */   b: () => (/* binding */ s),
/* harmony export */   c: () => (/* binding */ watchJsonArrayString),
/* harmony export */   d: () => (/* binding */ watchString),
/* harmony export */   e: () => (/* binding */ watchNumber),
/* harmony export */   f: () => (/* binding */ setEventTarget),
/* harmony export */   g: () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   h: () => (/* binding */ ariaCurrentSubject),
/* harmony export */   i: () => (/* binding */ mapBoolean2String),
/* harmony export */   j: () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   k: () => (/* binding */ koliBriQuerySelector),
/* harmony export */   l: () => (/* binding */ KoliBriUtils),
/* harmony export */   m: () => (/* binding */ mapString2Unknown),
/* harmony export */   n: () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   o: () => (/* binding */ objectObjectHandler),
/* harmony export */   p: () => (/* binding */ parseJson),
/* harmony export */   q: () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   r: () => (/* binding */ rgbaConvert),
/* harmony export */   s: () => (/* binding */ setState),
/* harmony export */   t: () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   u: () => (/* binding */ stringifyJson),
/* harmony export */   w: () => (/* binding */ watchValidator)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84669);
/* harmony import */ var _dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60783);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=obj,css_1=css,hex_1=hex,num_1=num;function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),i=num2hex(t[2]),s=isshort(o,n,i,t=num2hex(Math.round(t[3])));return r?s?"#"+o.charAt(0)+n.charAt(0)+i.charAt(0):"#"+o+n+i:s?"#"+o.charAt(0)+n.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+n+i+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),i=hex2num(t[2]),s=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(i)||isNaN(s))return;return[o,n,i,s]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),i=hex2num(t.slice(4,6)),s=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(i)||isNaN(s))return;return[o,n,i,s]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),i=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=i)return[r,o,n,i]}}function isFunction(e){return"function"==typeof e}function createErrorClass(e){const t=e((e=>{Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;const UnsubscriptionError=createErrorClass((e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map(((e,t)=>`${t+1}) ${e.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t}));function arrRemove(e,t){if(e){const r=e.indexOf(t);0<=r&&e.splice(r,1)}}class Subscription{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const e of t)e.remove(this);else t.remove(this);const{initialTeardown:r}=this;if(isFunction(r))try{r()}catch(t){e=t instanceof UnsubscriptionError?t.errors:[t]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const t of o)try{execFinalizer(t)}catch(t){e=null!=e?e:[],t instanceof UnsubscriptionError?e=[...e,...t.errors]:e.push(t)}}if(e)throw new UnsubscriptionError(e)}}add(e){var t;if(e&&e!==this)if(this.closed)execFinalizer(e);else{if(e instanceof Subscription){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(e)}}_hasParent(e){const{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){const{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&arrRemove(t,e)}remove(e){const{_finalizers:t}=this;t&&arrRemove(t,e),e instanceof Subscription&&e._removeParent(this)}}Subscription.EMPTY=(()=>{const e=new Subscription;return e.closed=!0,e})();const EMPTY_SUBSCRIPTION=Subscription.EMPTY;function isSubscription(e){return e instanceof Subscription||e&&"closed"in e&&isFunction(e.remove)&&isFunction(e.add)&&isFunction(e.unsubscribe)}function execFinalizer(e){isFunction(e)?e():e.unsubscribe()}const config={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},timeoutProvider={setTimeout(e,t,...r){const{delegate:o}=timeoutProvider;return(null==o?void 0:o.setTimeout)?o.setTimeout(e,t,...r):setTimeout(e,t,...r)},clearTimeout(e){const{delegate:t}=timeoutProvider;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function reportUnhandledError(e){timeoutProvider.setTimeout((()=>{const{onUnhandledError:t}=config;if(!t)throw e;t(e)}))}function noop(){}const COMPLETE_NOTIFICATION=createNotification("C",void 0,void 0);function errorNotification(e){return createNotification("E",void 0,e)}function nextNotification(e){return createNotification("N",e,void 0)}function createNotification(e,t,r){return{kind:e,value:t,error:r}}function errorContext(e){e()}class Subscriber extends Subscription{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,isSubscription(e)&&e.add(this)):this.destination=EMPTY_OBSERVER}static create(e,t,r){return new SafeSubscriber(e,t,r)}next(e){this.isStopped?handleStoppedNotification(nextNotification(e),this):this._next(e)}error(e){this.isStopped?handleStoppedNotification(errorNotification(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?handleStoppedNotification(COMPLETE_NOTIFICATION,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const _bind=Function.prototype.bind;function bind(e,t){return _bind.call(e,t)}class ConsumerObserver{constructor(e){this.partialObserver=e}next(e){const{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(e){handleUnhandledError(e)}}error(e){const{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(e){handleUnhandledError(e)}else handleUnhandledError(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(e){handleUnhandledError(e)}}}class SafeSubscriber extends Subscriber{constructor(e,t,r){let o;if(super(),isFunction(e)||!e)o={next:null!=e?e:void 0,error:null!=t?t:void 0,complete:null!=r?r:void 0};else{let t;this&&config.useDeprecatedNextContext?(t=Object.create(e),t.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&bind(e.next,t),error:e.error&&bind(e.error,t),complete:e.complete&&bind(e.complete,t)}):o=e}this.destination=new ConsumerObserver(o)}}function handleUnhandledError(e){reportUnhandledError(e)}function defaultErrorHandler(e){throw e}function handleStoppedNotification(e,t){const{onStoppedNotification:r}=config;r&&timeoutProvider.setTimeout((()=>r(e,t)))}const EMPTY_OBSERVER={closed:!0,next:noop,error:defaultErrorHandler,complete:noop},observable="function"==typeof Symbol&&Symbol.observable||"@@observable";function identity(e){return e}function pipeFromArray(e){return 0===e.length?identity:1===e.length?e[0]:function(t){return e.reduce(((e,t)=>t(e)),t)}}class Observable{constructor(e){e&&(this._subscribe=e)}lift(e){const t=new Observable;return t.source=this,t.operator=e,t}subscribe(e,t,r){const o=isSubscriber(e)?e:new SafeSubscriber(e,t,r);return errorContext((()=>{const{operator:e,source:t}=this;o.add(e?e.call(o,t):t?this._subscribe(o):this._trySubscribe(o))})),o}_trySubscribe(e){try{return this._subscribe(e)}catch(t){e.error(t)}}forEach(e,t){return new(t=getPromiseCtor(t))(((t,r)=>{const o=new SafeSubscriber({next:t=>{try{e(t)}catch(e){r(e),o.unsubscribe()}},error:r,complete:t});this.subscribe(o)}))}_subscribe(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)}[observable](){return this}pipe(...e){return pipeFromArray(e)(this)}toPromise(e){return new(e=getPromiseCtor(e))(((e,t)=>{let r;this.subscribe((e=>r=e),(e=>t(e)),(()=>e(r)))}))}}function getPromiseCtor(e){var t;return null!==(t=null!=e?e:config.Promise)&&void 0!==t?t:Promise}function isObserver(e){return e&&isFunction(e.next)&&isFunction(e.error)&&isFunction(e.complete)}function isSubscriber(e){return e&&e instanceof Subscriber||isObserver(e)&&isSubscription(e)}Observable.create=e=>new Observable(e);const ObjectUnsubscribedError=createErrorClass((e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}));class Subject extends Observable{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const t=new AnonymousSubject(this,this);return t.operator=e,t}_throwIfClosed(){if(this.closed)throw new ObjectUnsubscribedError}next(e){errorContext((()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const t of this.currentObservers)t.next(e)}}))}error(e){errorContext((()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:t}=this;for(;t.length;)t.shift().error(e)}}))}complete(){errorContext((()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}}))}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:t,isStopped:r,observers:o}=this;return t||r?EMPTY_SUBSCRIPTION:(this.currentObservers=null,o.push(e),new Subscription((()=>{this.currentObservers=null,arrRemove(o,e)})))}_checkFinalizedStatuses(e){const{hasError:t,thrownError:r,isStopped:o}=this;t?e.error(r):o&&e.complete()}asObservable(){const e=new Observable;return e.source=this,e}}Subject.create=(e,t)=>new AnonymousSubject(e,t);class AnonymousSubject extends Subject{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,e)}error(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,e)}complete(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)}_subscribe(e){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==r?r:EMPTY_SUBSCRIPTION}}var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var i=o[0]/255,s=o[1]/255,a=o[2]/255,c=i<=.03928?i*e:u(i),l=s<=.03928?s*e:u(s),h=a<=.03928?a*e:u(a);return c*n+l*r+h*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.d)()&&(_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,i;if(void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r){e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)}},logWarn=(e,t,r,o)=>{(0,_a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_1__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,i={}){r(n)?setState(e,t,n,i.hooks):null!=n||i.required?(i.required||o.add(null),logWarn(e,t,n,o)):setState(e,t,i.defaultValue,i.hooks)}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),i={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const s=o.find((e=>!r(e)));void 0===s&&n(o)?setState(e,t,o,i.hooks):objectObjectHandler(s,(()=>{throw _dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(s),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&(0,_a11y_tipps_7abac3bc_js__WEBPACK_IMPORTED_MODULE_1__.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.b)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.b)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.b)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),i=s(o,n),a={backgroundColor:o,color:n,domNode:e,level:f(i),score:i};return i<4.5&&_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:a.backgroundColor,color:a.color,level:a.level,score:a.score},a.domNode]),a},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)r.add(i[e]);const s=Array.from(r);for(let r=0;r<s.length;r++){let o=KoliBriUtils.cache.get(s[r]);void 0===o&&(o=koliBriA11yColorContrast(s[r],t)),KoliBriUtils.cache.set(s[r],o);const i=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==i){n=i;break}}}else _dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;const ariaCurrentSubject=new Subject;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.p,KoliBriDevHelper.patchThemeTag=_dev_utils_a3434f6d_js__WEBPACK_IMPORTED_MODULE_0__.a,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ })

};
;