/*! For license information please see 9502.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9502],{93:(t,e,i)=>{i.d(e,{A:()=>r,s:()=>a,t:()=>s});var o=i(6255),n=i(9285);function a(t){t.stopImmediatePropagation(),t.stopPropagation()}function s(t,e,i){e&&function(t,e,i){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,i))}(e,t,i)}const l=(0,i(3721).b)();class r{constructor(t,e,i){var o,a;if(this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,n.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.name=e,l){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){if(l)try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==e||e.setAttribute(t,`${i}`)}catch(i){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,n.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){i&&("select"===this.name?(i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}))):"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value=""))}validateName(t){((t,e,i)=>{(0,o.d)(t,"_name",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,n.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(l&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},5244:(t,e,i)=>{i.d(e,{I:()=>d,g:()=>c});var o=i(6255),n=i(2241),a=i(9285),s=i(93),l=i(8143),r=i(5055);const c=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:o}};class h extends s.A{constructor(t,e,i){super(t,e,i),this.component=t}validateAlert(t){(0,o.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,o.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class d extends h{constructor(t,e,i){super(t,e,i),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,o.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,o.a)(this.component,"_disabled",t),!0===t&&(0,a.h)()}validateError(t){(0,o.d)(this.component,"_error",t)}validateHideLabel(t){(0,r.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,o.d)(this.component,"_hint",t)}validateId(t){(0,o.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,n.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,s.s)(t),(0,s.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;(0,s.s)(t),(0,s.t)("change",this.host,i),this.setFormAssociatedValue(i),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i),this.valueChangeListeners.forEach((t=>t(i)))}onClick(t){var e;(0,s.s)(t),(0,s.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,s.s)(t),(0,s.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},9150:(t,e,i)=>{i.d(e,{I:()=>r});var o=i(5040),n=i(6255),a=i(1383),s=i(5244);const l=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,a.i)(i.right,1)&&(i.right={icon:i.right}),(0,a.i)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends s.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.w)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||(0,o.i)(t.left)||(0,a.i)(t.right,1)||(0,o.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},5055:(t,e,i)=>{i.d(e,{v:()=>n});var o=i(6255);const n=(t,e,i={})=>{(0,o.a)(t,"_hideLabel",e,i)}},5040:(t,e,i)=>{i.d(e,{i:()=>l,v:()=>r,w:()=>c});var o=i(6255),n=i(1383);const a=(t,e,i)=>{(0,n.c)(i)?t[e]=i:(0,n.i)(i,1)&&(t[e]={icon:i})},s=t=>{var e,i,o,s,l,r,c;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,n.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(a(i,"top",t.top),a(i,"right",t.right),a(i,"bottom",t.bottom),a(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(c=t.nextState)||void 0===c?void 0:c.get("_iconAlign")]:t.state._icon[e]})}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.b)(t.style))&&(0,n.i)(t.icon,1),r=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.w)(t,"_icon",(t=>null===t||(0,n.i)(t,1)||"object"==typeof t&&null!==t&&((0,n.i)(t.left,1)||l(t.left)||(0,n.i)(t.right,1)||l(t.right)||(0,n.i)(t.top,1)||l(t.top)||(0,n.i)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),s(t)}},required:!0})}))},c=(t,e)=>{(0,o.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{s(t)}}})}},9502:(t,e,i)=>{i.r(e),i.d(e,{kol_input_file:()=>d});var o=i(2108),n=i(3721),a=i(93),s=i(1383),l=i(5244),r=i(6255),c=i(9150);class h extends c.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAccept(t){(0,r.d)(this.component,"_accept",t)}validateMultiple(t){(0,r.a)(this.component,"_multiple",t)}validateRequired(t){(0,r.a)(this.component,"_required",t)}validateValue(t){(0,r.d)(this.component,"_value",t),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateAccept(this.component._accept),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}const d=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=!1===this.state._label;return(0,o.h)(o.H,null,(0,o.h)("kol-input",{class:{file:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,o.h)("span",{slot:"label"},e?(0,o.h)("slot",null):this.state._label),(0,o.h)("div",{slot:"input"},(0,o.h)("input",Object.assign({ref:this.catchRef,title:"",accept:this.state._accept,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,spellcheck:"false",type:"file",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})),(0,o.h)("kol-tooltip",{"aria-hidden":"true",hidden:e||!this.state._hideLabel,_align:this._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onChange=t=>{var e;if(this.ref instanceof HTMLInputElement&&"file"===this.ref.type){const i=this.ref.files;(0,a.s)(t),(0,a.t)("change",this.host,i),this.controller.setFormAssociatedValue(i),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,i)}},this._accept=void 0,this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_id:`id-${(0,n.n)()}`,_label:!1},this.controller=new h(this,"input-file",this.host)}validateAccept(t){this.controller.validateAccept(t)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accept:["validateAccept"],_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input.required .tooltip-content .span-label::after{content:'*'}label input[type='file']::-webkit-file-upload-button{display:none}label input[type='file']:before{content:'Datei auswählen'}label input[multiple]:before{content:'Dateien auswählen'}div.input{cursor:pointer}"}},2241:(t,e,i)=>{i.d(e,{a:()=>p,c:()=>r,h:()=>l,v:()=>d});var o=i(9285),n=i(6255);const a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}function c(t){var e;return{hooks:{afterPatch:(e,i,n,a)=>{var s,c;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,i,n,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const h=new Set(["string"]),d=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,c(i))},u=new Set(["string","false"]),p=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,n.w)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,c(i))}},8143:(t,e,i)=>{i.d(e,{v:()=>s});var o=i(9285),n=i(6255);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,n.e)(t,"_tabIndex",e,a)}}}]);