/*! For license information please see 9783.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9783],{7907:(t,e,i)=>{i.d(e,{I:()=>s});var a=i(5858),o=i(9060),n=i(7916);class s extends n.I{constructor(t,e,i){super(t,e,i),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,a.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=t}validateAutoComplete(t){(0,o.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(t){(0,o.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,o.w)(this.component,"_pattern",t)}validatePlaceholder(t){(0,o.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,o.b)(this.component,"_readOnly",t)}validateRequired(t){(0,o.b)(this.component,"_required",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(t){(0,o.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,o.w)(this.component,"_value",t)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},3311:(t,e,i)=>{i.d(e,{I:()=>n,a:()=>s});var a=i(9060),o=i(7907);class n extends o.I{constructor(t,e,i){super(t,e,i),this.component=t}validateList(t){(0,a.d)(this.component,"_list",(t=>"string"==typeof t),t)}componentWillLoad(){super.componentWillLoad(),this.validateList(this.component._list)}}class s extends n{constructor(t,e,i){super(t,e,i),this.hasError=!1,this.hasList=!1,this.component=t}validateType(t){(0,a.a)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type)}}},8360:(t,e,i)=>{i.d(e,{a:()=>l,p:()=>r});var a=i(5858),o=i(9311),n=i(9060);const s=t=>{for((0,o.b)()&&((0,a.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,o.b)()&&console.log(t);return(0,o.b)()&&(0,a.d)("↑ Search form element finished."),t},l=(t={})=>{const e=s(t.form);if(e instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===e.tagName)(0,n.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,n.f)(t,n.K.querySelector("form",e));const i=e;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onReset&&i._on.onReset(t)}}},r=(t={})=>{const e=s(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,n.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,n.f)(t,n.K.querySelector("form",e));const i=e;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onSubmit&&i._on.onSubmit(t)}}}},5936:(t,e,i)=>{i.d(e,{I:()=>c,g:()=>r});var a=i(5858),o=i(9060),n=i(3845),s=i(9311),l=i(7726);const r=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,a=[];return!0===e&&a.push(`${t._id}-error`),!0===i&&a.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:a}},h=(0,s.b)();class d{constructor(t,e,i){var a,o,n,s,l;if(this.syncFormAssociatedName=()=>{var t,e,i;h&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("id",this.component.state._id),null===(e=this.formAssociated)||void 0===e||e.setAttribute("name",this.component.state._name),null===(i=this.formAssociated)||void 0===i||i.setAttribute("value",this.component.state._value))},this.setFormAssociatedValue=(t=null)=>{var e;h&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,h){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(a=this.host)||void 0===a?void 0:a.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(o=this.host)||void 0===o?void 0:o.children[e].tagName)&&(null===(n=this.host)||void 0===n||n.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(t){(0,o.b)(this.component,"_alert",t)}validateTouched(t){(0,o.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class c extends d{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,o.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,o.b)(this.component,"_disabled",t),!0===t&&(0,a.g)()}validateError(t){(0,o.w)(this.component,"_error",t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t)}validateHint(t){(0,o.w)(this.component,"_hint",t)}validateId(t){(0,o.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,l.v)(this.component,t)}validateName(t){(0,o.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,a.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,n.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;this.setFormAssociatedValue(i),this.valueChangeListeners.forEach((t=>t(i))),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},7916:(t,e,i)=>{i.d(e,{I:()=>r});var a=i(7393),o=i(9060),n=i(7269),s=i(5936);const l=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,n.b)(i.right,1)&&(i.right={icon:i.right}),(0,n.b)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends s.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,n.b)(t.left,1)||(0,a.i)(t.left)||(0,n.b)(t.right,1)||(0,a.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},7393:(t,e,i)=>{i.d(e,{i:()=>l,v:()=>r,w:()=>h});var a=i(9060),o=i(7269);const n=(t,e,i)=>{(0,o.d)(i)?t[e]=i:(0,o.b)(i,1)&&(t[e]={icon:i})},s=t=>{var e,i,a,s,l,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,o.b)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.c)(t.style))&&(0,o.b)(t.icon,1),r=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(t,"_icon",(t=>null===t||(0,o.b)(t,1)||"object"==typeof t&&null!==t&&((0,o.b)(t.left,1)||l(t.left)||(0,o.b)(t.right,1)||l(t.right)||(0,o.b)(t.top,1)||l(t.top)||(0,o.b)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),s(t)}},required:!0})}))},h=(t,e)=>{(0,a.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{s(t)}}})}},9783:(t,e,i)=>{i.r(e),i.d(e,{kol_input_email:()=>c});var a=i(7747),o=i(9311),n=i(7269),s=i(8360),l=i(5936),r=i(9060),h=i(3311);class d extends h.I{constructor(t,e,i){super(t,e,i),this.component=t}validateMultiple(t){(0,r.b)(this.component,"_multiple",t)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const c=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0,i=""===this.state._label,o="…"===this.state._label;return(0,a.h)(a.H,{class:{"has-value":this.state._hasValue}},(0,a.h)("kol-input",{class:"email",_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,a.h)("span",{slot:"label"},i?(0,a.h)("slot",{name:"expert"}):o?(0,a.h)("slot",null):this.state._label),(0,a.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?(0,s.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._maxLength=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hasValue:!1,_id:(0,o.n)(),_label:"…",_list:[]},this.controller=new d(this,"email",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateMultiple(t){((t,e)=>{(0,r.b)(t,"_multiple",e)})(this,t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};c.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}"}},7726:(t,e,i)=>{i.d(e,{a:()=>c,b:()=>u,c:()=>h,h:()=>r,v:()=>p});var a=i(5858),o=i(9060),n=i(7269);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(s))||void 0===e?void 0:e.length)||0}(t)>=e}function h(t){return l.test(t)}const d=(t,e,i,o)=>{const s=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof s){const t=e.has("_label")?e.get("_label"):i.state._label;!1===(0,n.i)(t,s)&&("_ariaLabel"===o?e.set("_label",s):e.set("_ariaLabel",void 0),(0,a.a)("The different Aria label is not barrier-free. A different Aria label must start with the label text for reasons of accessibility for voice control."))}},c=(t,e)=>{((t,e,i={})=>{var n;(0,o.w)(t,"_ariaLabel",e,{hooks:{afterPatch:(t,e,o,n)=>{var s,l;"function"==typeof(null===(s=i.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(l=i.hooks)||void 0===l||l.afterPatch(t,e,o,n)),"string"==typeof t&&t.length>0&&!1===r(t,3)&&!1===h(t)&&(0,a.a)(`The different aria label ("${t}") is not accessible. A different aria label should consist of at least three readable characters.`)},beforePatch:null===(n=i.hooks)||void 0===n?void 0:n.beforePatch}})})(t,e,{hooks:{beforePatch:d}})},p=(t,e,i={})=>{var n;(0,o.w)(t,"_label",e,{hooks:{afterPatch:(t,e,o,n)=>{var s,l;"function"==typeof(null===(s=i.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(l=i.hooks)||void 0===l||l.afterPatch(t,e,o,n)),"string"==typeof t&&!1===r(t,3)&&!1===h(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=i.hooks)||void 0===n?void 0:n.beforePatch},required:!0})},u=(t,e)=>{p(t,e,{hooks:{beforePatch:d}})}},3845:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(5858),o=i(9060);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,n)}}}]);