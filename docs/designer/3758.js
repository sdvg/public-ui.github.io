/*! For license information please see 3758.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3758],{79035:(t,e,n)=>{n.d(e,{I:()=>d,g:()=>r});var o=n(43170),i=n(54420),a=n(72977),s=n(73418),l=n(9953);const r=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===n&&o.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:o}},c=(0,l.b)();class h{constructor(t,e,n){var o,i;if(this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,a.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.name=e,this.host=n,c){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(i=this.host)||void 0===i||i.appendChild(this.formAssociated)}}setAttribute(t,e,n){if(c)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return null!==t?JSON.stringify(t):""}catch(t){return(0,a.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){if(n)switch(n.setAttribute("value",e),this.name){case"select":n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.length>0&&t.forEach((t=>{const e=this.tryToStringifyValue(t),o=document.createElement("option");o.setAttribute("value",e),o.setAttribute("selected",""),n.appendChild(o)}));break;case"textarea":n.innerHTML=e;break;default:n.value=e}}validateAlert(t){(0,o.b)(this.component,"_alert",t)}validateSyncValueBySelector(t){if(c&&"string"==typeof t){const e=document.querySelector(t);e instanceof HTMLInputElement&&(this.syncToOwnInput=e)}}validateTouched(t){((t,e)=>{(0,o.b)(t,"_touched",e)})(this.component,t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateSyncValueBySelector(this.component._syncValueBySelector),this.validateTouched(this.component._touched)}}class d extends h{constructor(t,e,n){super(t,e,n),this.hideLabel=!1,this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,o.b)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,o.b)(this.component,"_disabled",t),!0===t&&(0,a.h)()}validateError(t){(0,o.w)(this.component,"_error",t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t)}validateHint(t){(0,o.w)(this.component,"_hint",t)}validateId(t){(0,o.w)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,i.a)(this.component,t)}validateName(t){(0,o.w)(this.component,"_name",t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,a.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,s.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;this.setFormAssociatedValue(n),this.valueChangeListeners.forEach((t=>t(n))),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var n;this.setFormAssociatedValue(e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},67022:(t,e,n)=>{n.d(e,{I:()=>a,a:()=>s});var o=n(43369),i=n(43170);class a extends o.I{constructor(t,e,n){super(t,e,n),this.component=t}validateList(t){(0,i.d)(this.component,"_list",(t=>"string"==typeof t),t)}componentWillLoad(){super.componentWillLoad(),this.validateList(this.component._list)}}class s extends a{constructor(t,e,n){super(t,e,n),this.hasError=!1,this.hasList=!1,this.component=t}validateType(t){(0,i.a)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}validateHasCounter(t){(0,o.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}}},63841:(t,e,n)=>{n.d(e,{a:()=>l,p:()=>r});var o=n(72977),i=n(9953),a=n(43170);const s=t=>{for((0,i.b)()&&((0,o.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,i.b)()&&console.log(t);return(0,i.b)()&&(0,o.d)("↑ Search form element finished."),t},l=(t={})=>{var e,n;const o=s(t.form);if(o instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===o.tagName)(0,a.f)(t,o),o.dispatchEvent(t);else if("KOL-FORM"===o.tagName){(0,a.f)(t,a.K.querySelector("form",o));const i=o;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onReset)&&(null===(n=i._on)||void 0===n||n.onReset(t))}}},r=(t={})=>{var e,n;const o=s(t.form);if(o instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:o});if("FORM"===o.tagName)(0,a.f)(t,o),o.dispatchEvent(t);else if("KOL-FORM"===o.tagName){(0,a.f)(t,a.K.querySelector("form",o));const i=o;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onSubmit)&&(null===(n=i._on)||void 0===n||n.onSubmit(t))}}}},43369:(t,e,n)=>{n.d(e,{I:()=>l,v:()=>s});var o=n(43170),i=n(72977),a=n(67169);const s=(t,e)=>{(0,o.b)(t,"_hasCounter",e)};class l extends a.I{constructor(t,e,n){super(t,e,n),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,i.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=t}validateAutoComplete(t){(0,o.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHasCounter(t){s(this.component,t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(t){(0,o.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,o.w)(this.component,"_pattern",t)}validatePlaceholder(t){(0,o.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,o.b)(this.component,"_readOnly",t)}validateRequired(t){(0,o.b)(this.component,"_required",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(t){(0,o.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,o.w)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},67169:(t,e,n)=>{n.d(e,{I:()=>r});var o=n(50886),i=n(43170),a=n(11383),s=n(79035);const l=(t,e)=>{const n=t;"object"==typeof n&&null!==n&&((0,a.i)(n.right,1)&&(n.right={icon:n.right}),(0,a.i)(n.left,1)&&(n.left={icon:n.left}),e.set("_icon",n))};class r extends s.I{constructor(t,e,n){super(t,e,n),this.component=t}validateIcon(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||(0,o.i)(t.left)||(0,a.i)(t.right,1)||(0,o.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},50886:(t,e,n)=>{n.d(e,{i:()=>l,v:()=>r,w:()=>c});var o=n(43170),i=n(11383);const a=(t,e,n)=>{(0,i.c)(n)?t[e]=n:(0,i.i)(n,1)&&(t[e]={icon:n})},s=t=>{var e,n,o,s,l,r,c;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(n=t.nextState)||void 0===n?void 0:n.get("_icon"),l=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let n={};return(0,i.i)(t,1)?n="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(a(n,"top",t.top),a(n,"right",t.right),a(n,"bottom",t.bottom),a(n,"left",t.left)),n})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(c=t.nextState)||void 0===c?void 0:c.get("_iconAlign")]:t.state._icon[e]})}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,i.b)(t.style))&&(0,i.i)(t.icon,1),r=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.a)(t,"_icon",(t=>null===t||(0,i.i)(t,1)||"object"==typeof t&&null!==t&&((0,i.i)(t.left,1)||l(t.left)||(0,i.i)(t.right,1)||l(t.right)||(0,i.i)(t.top,1)||l(t.top)||(0,i.i)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,n)=>{null===e&&n.set("_icon",{}),s(t)}},required:!0})}))},c=(t,e)=>{(0,o.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{s(t)}}})}},54420:(t,e,n)=>{n.d(e,{a:()=>m,c:()=>r,h:()=>l,v:()=>d});var o=n(72977),i=n(43170);const a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}function c(t){var e;return{hooks:{afterPatch:(e,n,i,a)=>{var s,c;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,n,i,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const h=new Set(["string"]),d=(t,e,n={})=>{(0,i.a)(t,"_label",(t=>"string"==typeof t),h,e,c(n))},u=new Set(["string","false"]),m=(t,e,n={})=>{""!==e&&"false"!==e||(e=!1),(0,i.a)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,c(n))}},73418:(t,e,n)=>{n.d(e,{v:()=>s});var o=n(72977),i=n(43170);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,i.e)(t,"_tabIndex",e,a)}}}]);