"use strict"; exports.id = 9009; exports.ids = [9009]; exports.modules = { /***/ 21491: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ a11yHint), /* harmony export */ b: () => (/* binding */ a11yHintLabelingLandmarks), /* harmony export */ c: () => (/* binding */ uiUxHintMillerscheZahl), /* harmony export */ d: () => (/* binding */ devHint), /* harmony export */ e: () => (/* binding */ a11yHintDisabled), /* harmony export */ f: () => (/* binding */ featureHint), /* harmony export */ g: () => (/* binding */ devWarning), /* harmony export */ u: () => (/* binding */ uiUxHint) /* harmony export */ }); /* harmony import */ var _dev_utils_04fa5759_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9724); /*! * KoliBri - The accessible HTML-Standard */ const a11yCache=new Set,a11yHint=(e,i)=>{(!1===a11yCache.has(e)||(null==i?void 0:i.force))&&(a11yCache.add(e),_dev_utils_04fa5759_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},devCache=new Set,devHint=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_04fa5759_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},devWarning=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_04fa5759_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,i=!1,n)=>{(!1===featureCache.has(e)||(null==n?void 0:n.force))&&(featureCache.add(e),e+=!0===i?" ✅":"",_dev_utils_04fa5759_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,i)=>{(!1===uiUxCache.has(e)||(null==i?void 0:i.force))&&(uiUxCache.add(e),_dev_utils_04fa5759_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,i=8)=>{i>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}; /***/ }), /***/ 30301: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ translate) /* harmony export */ }); /* unused harmony export t */ /* harmony import */ var _index_8700da1a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3708); /* harmony import */ var _a11y_tipps_69a12284_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21491); /*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-ascending":"Die Spalte {{column}} ist aufsteigend{{multi}} sortiert.","sort-descending":"Die Spalte {{column}} ist absteigend{{multi}} sortiert.","sort-then-ascending":", dann die Spalte {{column}} aufsteigend","sort-then-descending":", dann die Spalte {{column}} absteigend","sort-then-last-ascending":" und dann die Spalte {{column}} aufsteigend","sort-then-last-descending":" und dann die Spalte {{column}} absteigend","sort-none":"Spalte {{column}} nicht sortiert","table-sort-none":"Keine Spalte ist sortiert.","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"Sorted column {{column}} descending{{multi}}","sort-ascending":"Sorted column {{column}} ascending{{multi}}","sort-then-ascending":", then column {{column}} acending","sort-then-descending":", then column {{column}} descending","sort-then-last-ascending":" and then column {{column}} acending","sort-then-last-descending":" and then column {{column}} descending","sort-none":"column {{column}} not sorted","table-sort-none":"No column is sorted.","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,a)=>(n[`kol-${a}`]=e[a],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const a=(0,_index_8700da1a_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===a)return (0,_a11y_tipps_69a12284_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let t=a.translate(e,n);return t===e&&((0,_a11y_tipps_69a12284_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(a.addResourceBundle(e,n),e))))),t=a.translate(e,n)),t}; /***/ }), /***/ 19009: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_toast_container: () => (/* binding */ KolToastContainer) /* harmony export */ }); /* harmony import */ var _index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78331); /* harmony import */ var _i18n_0541aaa5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30301); /* harmony import */ var _dev_utils_04fa5759_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9724); /*! * KoliBri - The accessible HTML-Standard */ const InternalToast=({toastState:t,onClose:s,key:a})=>(0,_index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`toast ${t.status}`,key:a},(0,_index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{class:"alert",_alert:!0,_label:t.toast.label,_level:0,_hasCloser:!0,_type:t.toast.type,_variant:t.toast.alertVariant||"card",_on:{onClose:s}},(0,_index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:a=>{"function"==typeof t.toast.render&&a&&t.toast.render(a,{close:()=>s()})}},"string"==typeof t.toast.description?t.toast.description:null))),defaultStyleCss="@layer kol-component {\n\t:host {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: fixed;\n\t\tz-index: 200;\n\t}\n\n\t.close-all {\n\t\talign-self: flex-end;\n\t}\n}\n",TRANSITION_TIMEOUT=300,KolToastContainer=class{constructor(t){(0,_index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.state={_toastStates:[]}}async enqueue(t){const s={toast:t,status:"adding",id:`toast-${(0,_dev_utils_04fa5759_js__WEBPACK_IMPORTED_MODULE_1__.n)()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[s,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>t.id===s.id?Object.assign(Object.assign({},t),{status:"settled"}):t))})}),300),()=>{this.handleClose(s)}}handleClose(t){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((s=>(s.id===t.id&&(s.status="removing"),s)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((s=>s.id!==t.id))})}),300)}async closeAll(){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>Object.assign(Object.assign({},t),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]})}),300)}render(){return (0,_index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__.F,null,this.state._toastStates.length>1&&(0,_index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{_label:(0,_i18n_0541aaa5_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((t=>(0,_index_e9d20d00_js__WEBPACK_IMPORTED_MODULE_0__.h)(InternalToast,{toastState:t,onClose:()=>this.handleClose(t),key:t.id}))))}};KolToastContainer.style={default:defaultStyleCss}; /***/ }) }; ;