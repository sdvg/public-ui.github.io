"use strict"; exports.id = 7781; exports.ids = [7781]; exports.modules = { /***/ 92660: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ a11yHint), /* harmony export */ b: () => (/* binding */ a11yHintLabelingLandmarks), /* harmony export */ c: () => (/* binding */ uiUxHintMillerscheZahl), /* harmony export */ d: () => (/* binding */ devHint), /* harmony export */ e: () => (/* binding */ a11yHintDisabled), /* harmony export */ f: () => (/* binding */ featureHint), /* harmony export */ g: () => (/* binding */ devWarning), /* harmony export */ u: () => (/* binding */ uiUxHint) /* harmony export */ }); /* harmony import */ var _dev_utils_b947b740_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25516); /*! * KoliBri - The accessible HTML-Standard */ const a11yCache=new Set,a11yHint=(e,i)=>{(!1===a11yCache.has(e)||(null==i?void 0:i.force))&&(a11yCache.add(e),_dev_utils_b947b740_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},devCache=new Set,devHint=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_b947b740_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},devWarning=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_b947b740_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,i=!1,n)=>{(!1===featureCache.has(e)||(null==n?void 0:n.force))&&(featureCache.add(e),e+=!0===i?" ✅":"",_dev_utils_b947b740_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,i)=>{(!1===uiUxCache.has(e)||(null==i?void 0:i.force))&&(uiUxCache.add(e),_dev_utils_b947b740_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,i=8)=>{i>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}; /***/ }), /***/ 26982: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ translate) /* harmony export */ }); /* unused harmony export t */ /* harmony import */ var _index_bb626a4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358); /* harmony import */ var _a11y_tipps_ba9cd030_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92660); /*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,a)=>(n[`kol-${a}`]=e[a],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const a=(0,_index_bb626a4b_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===a)return (0,_a11y_tipps_ba9cd030_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let i=a.translate(e,n);return i===e&&((0,_a11y_tipps_ba9cd030_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(a.addResourceBundle(e,n),e))))),i=a.translate(e,n)),i}; /***/ }), /***/ 47781: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_toast_container: () => (/* binding */ KolToastContainer) /* harmony export */ }); /* harmony import */ var _index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49168); /* harmony import */ var _i18n_81875570_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26982); /* harmony import */ var _dev_utils_b947b740_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25516); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss="@layer kol-component {\n\t:host {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: fixed;\n\t\tz-index: 200;\n\t}\n\n\t.close-all {\n\t\talign-self: flex-end;\n\t}\n}\n",TRANSITION_TIMEOUT=300,KolToastContainer=class{constructor(t){(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.state={_toastStates:[]}}async enqueue(t){const s={toast:t,status:"adding",id:`toast-${(0,_dev_utils_b947b740_js__WEBPACK_IMPORTED_MODULE_1__.n)()}`};this.state=Object.assign(Object.assign({},this.state),{_toastStates:[s,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>t===s?Object.assign(Object.assign({},t),{status:"settled"}):t))})}),300)}handleClose(t){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((s=>(s===t&&(s.status="removing"),s)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((s=>s!==t))})}),300)}handleCloseAllClick(){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>Object.assign(Object.assign({},t),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]})}),300)}render(){return (0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.F,null,this.state._toastStates.length>1&&(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{_label:(0,_i18n_81875570_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-toast-close-all"),class:"close-all",_on:{onClick:this.handleCloseAllClick.bind(this)}}),this.state._toastStates.map((t=>(0,_index_d0c806ea_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-toast",{_label:t.toast.label,_status:t.status,_type:t.toast.type,_on:{onClose:()=>this.handleClose(t)},key:t.id},t.toast.description))))}};KolToastContainer.style={default:defaultStyleCss}; /***/ }) }; ;