/*! For license information please see 4157.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[4157],{2694:(t,e,i)=>{i.d(e,{A:()=>s});var o=i(8445),a=i(5800),n=i(1202);class s{constructor(t,e,i){var o,s,l;if(this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,a.d)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.type=e,(0,n.d)()&&(t=>"KOL-BUTTON"===t||"KOL-INPUT"===t||"KOL-SELECT"===t||"KOL-TEXTAREA"===t)(null===(o=this.host)||void 0===o?void 0:o.tagName)){switch(null===(s=this.host)||void 0===s||s.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"checkbox":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){if((0,n.d)())try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==e||e.setAttribute(t,`${i}`)}catch(i){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,a.h)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){i&&("select"===this.type?(i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}))):"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value=""))}validateName(t){((t,e,i)=>{(0,o.d)(t,"_name",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,a.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if((0,n.d)()&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},3300:(t,e,i)=>{i.d(e,{I:()=>u,g:()=>h});var o=i(8445),a=i(6033),n=i(6759),s=i(5800),l=i(3985),r=i(1122),c=i(2694);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:o}};class d extends c.A{constructor(t,e,i){super(t,e,i),this.component=t}validateAlert(t){(0,o.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,o.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends d{constructor(t,e,i){super(t,e,i),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,o.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,o.a)(this.component,"_disabled",t),!0===t&&(0,s.g)()}validateError(t){(0,o.d)(this.component,"_error",t)}validateHideError(t){((t,e,i)=>{(0,o.a)(t,"_hideError",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,a.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,o.d)(this.component,"_hint",t)}validateId(t){(0,o.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,n.a)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,l.s)(t),(0,l.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;(0,l.t)("change",this.host,i),this.setFormAssociatedValue(i),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i),this.valueChangeListeners.forEach((t=>t(i)))}onClick(t){var e;(0,l.s)(t),(0,l.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,l.s)(t),(0,l.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},9581:(t,e,i)=>{i.d(e,{I:()=>r});var o=i(2687),a=i(8445),n=i(8125),s=i(3300);const l=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,n.i)(i.right,1)&&(i.right={icon:i.right}),(0,n.i)(i.left,1)&&(i.left={icon:i.left}),e.set("_icons",i))};class r extends s.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,n.i)(t.left,1)||(0,o.i)(t.left)||(0,n.i)(t.right,1)||(0,o.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},3985:(t,e,i)=>{function o(t){t.stopImmediatePropagation(),t.stopPropagation()}function a(t,e,i){e&&function(t,e,i){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,i))}(e,t,i)}i.d(e,{s:()=>o,t:()=>a})},6033:(t,e,i)=>{i.d(e,{v:()=>a});var o=i(8445);const a=(t,e,i={})=>{(0,o.a)(t,"_hideLabel",e,i)}},2687:(t,e,i)=>{i.d(e,{i:()=>l,v:()=>r,w:()=>c});var o=i(8445),a=i(8125);const n=(t,e,i)=>{(0,a.c)(i)?t[e]=i:(0,a.i)(i,1)&&(t[e]={icon:i})},s=t=>{var e,i,o;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icons");null===(o=t.nextState)||void 0===o||o.set("_icons",(t=>{let e={};return(0,a.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(n(e,"top",t.top),n(e,"right",t.right),n(e,"bottom",t.bottom),n(e,"left",t.left)),e})(e))}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,a.b)(t.style))&&(0,a.i)(t.icon,1),r=(t,e,i={})=>{(0,o.o)(e,(()=>{var n;try{e=(0,o.p)(e)}catch(t){}(0,o.w)(t,"_icons",(t=>null===t||(0,a.i)(t,1)||"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||l(t.left)||(0,a.i)(t.right,1)||l(t.right)||(0,a.i)(t.top,1)||l(t.top)||(0,a.i)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,Object.assign(Object.assign({},i),{defaultValue:{},hooks:{afterPatch:null===(n=i.hooks)||void 0===n?void 0:n.afterPatch,beforePatch:(t,e,o,a)=>{var n,l;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.beforePatch)&&(null===(l=i.hooks)||void 0===l||l.beforePatch(t,e,o,a)),s(o)}}}))}))},c=(t,e)=>{(0,o.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{s(t)}}})}},4157:(t,e,i)=>{i.r(e),i.d(e,{kol_input_color:()=>d});var o=i(5026),a=i(1202),n=i(8125),s=i(3300),l=i(7953),r=i(8445),c=i(9581);class h extends c.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAutoComplete(t){(0,r.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateList(){}validateSuggestions(t){(0,l.v)(this.component,t)}validateValue(t){(0,r.d)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateSuggestions(this.component._suggestions||this.component._list),this.validateValue(this.component._value)}}const d=class{render(){const{ariaDescribedBy:t}=(0,s.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,i=(0,n.s)(this.state._label);return(0,o.h)(o.H,{key:"0e16f9f2927ec02e72c4689044d48aa709e825e1"},(0,o.h)("kol-input",{key:"86fb6e8489c8828501bab5394c62a66bbb26df1e",class:{color:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_hideError:this.state._hideError,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,o.h)("span",{key:"187b54d97280c6fe4da049b9cd1304a703ab32c4",slot:"label"},i?(0,o.h)("slot",null):this.state._label),(0,o.h)("div",{key:"b18e47084eb0126f998b6567bb7b575b69538a15",slot:"input"},(0,o.h)("input",Object.assign({key:"9255e5f72c4a20639499aec845449317b4d71a4e",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,name:this.state._name,slot:"input",spellcheck:"false",type:"color",value:this.state._value},this.controller.onFacade)))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icon=void 0,this._icons=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._smartButton=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hideError:!1,_id:`id-${(0,a.n)()}`,_label:"…",_suggestions:[]},this.controller=new h(this,"color",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.validateIcons(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.validateSuggestions(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,option,select,textarea,.input-label){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input .input-slot{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input.required .input-tooltip .span-label::after{content:'*'}div.input{cursor:pointer}"}},6759:(t,e,i)=>{i.d(e,{a:()=>d,c:()=>r,h:()=>l,v:()=>h});var o=i(5800),a=i(8445);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const c=new Set(["string"]),h=(t,e,i={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),c,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,i,a,n)=>{var s,c;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,i,a,n)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(i))},d=h},7953:(t,e,i)=>{i.d(e,{v:()=>n});var o=i(8445),a=i(5800);const n=(t,e)=>{(0,o.c)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,a.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}},1122:(t,e,i)=>{i.d(e,{v:()=>s});var o=i(5800),a=i(8445);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,a.e)(t,"_tabIndex",e,n)}}}]);