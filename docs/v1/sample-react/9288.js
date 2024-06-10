/*! For license information please see 9288.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9288],{5044:(t,e,o)=>{o.d(e,{A:()=>a});var n=o(8325),i=o(9018),s=o(1709);class a{constructor(t,e,o){var n,a,r,c;if(this.experimentalMode=(0,s.a)(),this.setFormAssociatedValue=t=>{var e;const o=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==o&&""!==o||(0,i.d)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const n=this.tryToStringifyValue(t);this.syncValue(t,n,this.formAssociated),this.syncValue(t,n,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(o),this.type=e,this.experimentalMode&&("KOL-BUTTON"===(c=null===(n=this.host)||void 0===n?void 0:n.tagName)||"KOL-INPUT-CHECKBOX"===c||"KOL-INPUT-COLOR"===c||"KOL-INPUT-DATE"===c||"KOL-INPUT-EMAIL"===c||"KOL-INPUT-FILE"===c||"KOL-INPUT-NUMBER"===c||"KOL-INPUT-PASSWORD"===c||"KOL-INPUT-RADIO"===c||"KOL-INPUT-RANGE"===c||"KOL-INPUT-TEXT"===c||"KOL-SELECT"===c||"KOL-TEXTAREA"===c)){switch(null===(a=this.host)||void 0===a||a.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(r=this.host)||void 0===r||r.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,o){if(this.experimentalMode)try{if("boolean"!=typeof(o="object"==typeof o&&null!==o?JSON.stringify(o):o)&&"number"!=typeof o&&"string"!=typeof o)throw new Error("Invalid value type: "+typeof o);null==e||e.setAttribute(t,`${o}`)}catch(o){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,i.h)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,o){if(o)switch(this.type){case"file":o.files=t;break;case"select":o.querySelectorAll("option").forEach((t=>{o.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),o.appendChild(t)}}));break;default:"string"==typeof e?(o.setAttribute("value",e),o.value=e):(o.removeAttribute("value"),o.value="")}}validateName(t){((t,e,o)=>{(0,n.d)(t,"_name",e,o)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,i.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},3072:(t,e,o)=>{o.d(e,{I:()=>u,g:()=>h});var n=o(8325),i=o(7012),s=o(8229),a=o(9018),r=o(7865),c=o(4938),l=o(5044);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDescribedBy:n}};class d extends l.A{constructor(t,e,o){super(t,e,o),this.component=t}validateAlert(t){(0,n.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,n.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends d{constructor(t,e,o){super(t,e,o),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this),onInput:this.onInput.bind(this)},this.component=t}validateAccessKey(t){(0,n.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,n.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,n.a)(this.component,"_disabled",t),!0===t&&(0,a.g)()}validateError(t){(0,n.d)(this.component,"_error",t)}validateHideError(t){((t,e,o)=>{(0,n.a)(t,"_hideError",e,o)})(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,a.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,i.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,n.d)(this.component,"_hint",t)}validateId(t){(0,n.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,s.a)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,n.s)(this.component,"_on",t)}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,c.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,r.s)(t),(0,r.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t,e){var o;e=null!=e?e:t.target.value,(0,r.t)("change",this.host,e),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,e),this.valueChangeListeners.forEach((t=>t(e)))}onClick(t){var e;(0,r.s)(t),(0,r.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,r.s)(t),(0,r.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}onInput(t,e=!0,o){var n;o=null!=o?o:t.target.value,(0,r.s)(t),(0,r.t)("input",this.host,o),e&&this.setFormAssociatedValue(o),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onInput)&&this.component._on.onInput(t,o)}setValue(t,e){var o;this.setFormAssociatedValue(e),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},9288:(t,e,o)=>{o.d(e,{I:()=>c});var n=o(8521),i=o(8325),s=o(4186),a=o(3072);const r=(t,e)=>{const o=t;"object"==typeof o&&null!==o&&((0,s.i)(o.right,1)&&(o.right={icon:o.right}),(0,s.i)(o.left,1)&&(o.left={icon:o.left}),e.set("_icons",o))};class c extends a.I{constructor(t,e,o){super(t,e,o),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,s.i)(t.left,1)||(0,n.i)(t.left)||(0,s.i)(t.right,1)||(0,n.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:r},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},7865:(t,e,o)=>{function n(t){t.stopImmediatePropagation(),t.stopPropagation()}function i(t,e,o){e&&function(t,e,o){const n=t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,o))}(e,t,o)}o.d(e,{s:()=>n,t:()=>i})},7012:(t,e,o)=>{o.d(e,{v:()=>i});var n=o(8325);const i=(t,e,o={})=>{(0,n.a)(t,"_hideLabel",e,o)}},8521:(t,e,o)=>{o.d(e,{i:()=>r,v:()=>c,w:()=>l});var n=o(8325),i=o(4186);const s=(t,e,o)=>{(0,i.c)(o)?t[e]=o:(0,i.i)(o,1)&&(t[e]={icon:o})},a=t=>{var e,o,n;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(o=t.nextState)||void 0===o?void 0:o.get("_icons");null===(n=t.nextState)||void 0===n||n.set("_icons",(t=>{let e={};return(0,i.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(s(e,"top",t.top),s(e,"right",t.right),s(e,"bottom",t.bottom),s(e,"left",t.left)),e})(e))}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,i.b)(t.style))&&(0,i.i)(t.icon,1),c=(t,e,o={})=>{(0,n.o)(e,(()=>{var s;try{e=(0,n.p)(e)}catch(t){}(0,n.w)(t,"_icons",(t=>null===t||(0,i.i)(t,1)||"object"==typeof t&&null!==t&&((0,i.i)(t.left,1)||r(t.left)||(0,i.i)(t.right,1)||r(t.right)||(0,i.i)(t.top,1)||r(t.top)||(0,i.i)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,Object.assign(Object.assign({},o),{defaultValue:{},hooks:{afterPatch:null===(s=o.hooks)||void 0===s?void 0:s.afterPatch,beforePatch:(t,e,n,i)=>{var s,r;"function"==typeof(null===(s=o.hooks)||void 0===s?void 0:s.beforePatch)&&(null===(r=o.hooks)||void 0===r||r.beforePatch(t,e,n,i)),a(n)}}}))}))},l=(t,e)=>{(0,n.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{a(t)}}})}},8229:(t,e,o)=>{o.d(e,{a:()=>d,c:()=>c,h:()=>r,v:()=>h});var n=o(9018),i=o(8325);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,a=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(s))||void 0===e?void 0:e.length)||0}(t)>=e}function c(t){return a.test(t)}const l=new Set(["string"]),h=(t,e,o={})=>{(0,i.w)(t,"_label",(t=>"string"==typeof t),l,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,o,i,s)=>{var a,l;"function"==typeof(null===(a=t.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(l=t.hooks)||void 0===l||l.afterPatch(e,o,i,s)),"string"==typeof e&&!1===r(e,3)&&!1===c(e)&&(0,n.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(o))},d=h},4938:(t,e,o)=>{o.d(e,{v:()=>a});var n=o(9018),i=o(8325);const s={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,n.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},a=(t,e)=>{(0,i.e)(t,"_tabIndex",e,s)}}}]);