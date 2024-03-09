"use strict"; exports.id = 5396; exports.ids = [5396]; exports.modules = { /***/ 56264: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ F: () => (/* binding */ FormFieldMsg) /* harmony export */ }); /* harmony import */ var _index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388); /*! * KoliBri - The accessible HTML-Standard */ const FormFieldMsg=({_alert:r,_error:e,_hideError:o,_id:i})=>(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{"aria-hidden":"true",id:`${i}-error`,_alert:r,_type:"error",class:{error:!0,"visually-hidden":!0===o}},e); /***/ }), /***/ 10259: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ translate) /* harmony export */ }); /* unused harmony export t */ /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32924); /* harmony import */ var _index_8cb3c3b2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49888); /*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},mapLocaleKeys=e=>Object.keys(e).reduce(((a,n)=>(a[`kol-${n}`]=e[n],a)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,a)=>{const n=(0,_index_8cb3c3b2_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===n)return (0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.h)("[I18n] I18nService not available! Please call the global register function."),e;let i=n.translate(e,a);return i===e&&((0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.h)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,a)=>(n.addResourceBundle(e,a),e))))),i=n.translate(e,a)),i}; /***/ }), /***/ 45396: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_input: () => (/* binding */ KolInput) /* harmony export */ }); /* harmony import */ var _index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32924); /* harmony import */ var _i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10259); /* harmony import */ var _form_field_msg_8ba9ac0f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56264); /*! * KoliBri - The accessible HTML-Standard */ const KolInput=class{constructor(t){(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.slotName="input",this.catchInputSlot=t=>{(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.aE)(this.host,t,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(t){return t&&"object"==typeof t&&t.style?t.style:{}}render(){var t,i,s,e,o,l,n,a;const r=!this._readOnly&&"string"==typeof this._error&&this._error.length>0&&!0===this._touched,d=(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.M)(this._label),_="string"==typeof this._hint&&this._hint.length>0,c=!d&&this._hideLabel;return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"425833ef3b83f11817c250db934eb4eead3fab32",class:{disabled:!0===this._disabled,error:!0===r,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError}},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"47f75e963ba13cc58644feb3214dc65c280cbb72",class:"input-label",id:c?void 0:`${this._id}-label`,hidden:c,htmlFor:this._id},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"9021927b01061be0d6c9da8e19e2077ad4921036",class:"input-label-span"},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"02a42734edcee2dae5e813ee29bcb8069b475625",name:"label"}))),_&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6e717081b7779d4657db57bfeac0c4d5e240b1c8",class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icons)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(i=this._icons)||void 0===i?void 0:i.right)}},(null===(s=this._icons)||void 0===s?void 0:s.left)&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_label:"",_icons:(null===(e=this._icons)||void 0===e?void 0:e.left).icon,style:this.getIconStyles(null===(o=this._icons)||void 0===o?void 0:o.left)}),(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b96b0e1ef626d6f8c13532b0e14da8f32f44f450",ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(l=this._icons)||void 0===l?void 0:l.right)&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_label:"",_icons:(null===(n=this._icons)||void 0===n?void 0:n.right).icon,style:this.getIconStyles(null===(a=this._icons)||void 0===a?void 0:a.right)})),c&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),r&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_field_msg_8ba9ac0f_js__WEBPACK_IMPORTED_MODULE_2__.F,{_alert:this._alert,_hideError:this._hideError,_error:this._error,_id:this._id}),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{id:`${this._id}-list`},this._suggestions.map((t=>(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:t})))),this._hasCounter&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-label":(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-characters"))))}get host(){return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}; /***/ }) }; ;