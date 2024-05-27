/*! For license information please see 99484.92f8de19.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[99484],{77452:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(33432);const o=({accessKey:t,label:e})=>{let[n,...o]=e.split(t);return 0===o.length&&(t=t.toUpperCase(),[n,...o]=e.split(t)),0===o.length&&(t=t.toLowerCase(),[n,...o]=e.split(t)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),o.join(t)):null)}},30236:(t,e,n)=>{n.d(e,{I:()=>l,a:()=>r});var i=n(18452),o=n(29808),a=n(80152);const s=["text","search","url","tel"];class l extends i.I{constructor(t,e,n){super(t,e,n),this.component=t}validateSuggestions(t){(0,a.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateSuggestions(this.component._suggestions)}}class r extends l{constructor(t,e,n){super(t,e,n),this.hasError=!1,this.component=t}validateType(t){(0,o.w)(this.component,"_type",(t=>"string"==typeof t&&s.includes(t)),new Set([`String {${s.join(", ")}`]),t)}validateHasCounter(t){(0,i.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}}},34824:(t,e,n)=>{n.d(e,{a:()=>s,p:()=>l});var i=n(29808),o=n(74520);const a=t=>{for((0,o.a)()&&((0,i.j)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;){try{t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null}catch(t){}(0,o.a)()&&(console.log(t),(0,i.j)("\u2191 Search form element finished."))}return t},s=(t={})=>{var e,n;const o=a(t.form);if(o instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===o.tagName)(0,i.q)(t,o),o.dispatchEvent(t);else if("KOL-FORM"===o.tagName){(0,i.q)(t,i.K.querySelector("form",o));const a=o;"function"==typeof(null===(e=a._on)||void 0===e?void 0:e.onReset)&&(null===(n=a._on)||void 0===n||n.onReset(t))}}},l=(t={})=>{const e=a(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,o.a)()&&!1===e.noValidate&&(0,i.j)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof e.requestSubmit?e.requestSubmit():((0,i.q)(t,e),e.dispatchEvent(t))}));else if("KOL-FORM"===e.tagName){(0,i.q)(t,i.K.querySelector("form",e));const n=e;setTimeout((()=>{var e,i;"function"==typeof(null===(e=n._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=n._on)||void 0===i||i.onSubmit(t))}))}}}},18452:(t,e,n)=>{n.d(e,{I:()=>s,v:()=>a});var i=n(80936),o=n(29808);const a=(t,e)=>{(0,o.b)(t,"_hasCounter",e)};class s extends i.I{constructor(t,e,n){super(t,e,n),this.component=t}validateAutoComplete(t){(0,o.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHasCounter(t){a(this.component,t)}validateMaxLength(t){(0,o.k)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,o.i)(this.component,"_pattern",t)}validatePlaceholder(t){(0,o.i)(this.component,"_placeholder",t)}validateReadOnly(t){(0,o.b)(this.component,"_readOnly",t)}validateRequired(t){(0,o.b)(this.component,"_required",t)}validateValue(t){(0,o.i)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}},10744:(t,e,n)=>{n.d(e,{I:()=>p,g:()=>c,v:()=>h});var i=n(26768),o=n(7104),a=n(29808),s=n(40556),l=n(72784),r=n(99747),d=n(38036);const h=(t,e)=>{(0,a.w)(t,"_msg",(t=>"object"==typeof t),new Set(["Object"]),e)},c=t=>{var e,n;const i=Boolean("error"===(null===(e=t._msg)||void 0===e?void 0:e._type)&&t._msg._description&&(null===(n=t._msg._description)||void 0===n?void 0:n.length)>0)&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,a=[];return!0===i&&a.push(`${t._id}-error`),!0===o&&a.push(`${t._id}-hint`),{hasError:i,hasHint:o,ariaDescribedBy:a}};class u extends o.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,a.b)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,a.b)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class p extends u{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this),onInput:this.onInput.bind(this)},this.component=t}validateAccessKey(t){(0,a.i)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,a.b)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,a.b)(this.component,"_disabled",t),!0===t&&(0,a.c)()}validateTooltipAlign(t){(0,d.v)(this.component,t)}validateError(t){const e=t?{_description:t,_type:"error"}:void 0;this.validateMsg(e)}validateHideError(t){((t,e,n)=>{(0,a.b)(t,"_hideError",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,a.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,s.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,a.i)(this.component,"_hint",t)}validateId(t){(0,a.i)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,a.j)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(t){(0,l.a)(this.component,t,{required:!0})}validateMsg(t){h(this.component,t)}validateOn(t){"object"==typeof t&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateMsg(this.component._msg),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,i.s)(t),(0,i.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t,e){var n;e=null!=e?e:t.target.value,(0,i.t)("change",this.host,e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e),this.valueChangeListeners.forEach((t=>t(e)))}onInput(t,e=!0,n){var o;n=null!=n?n:t.target.value,(0,i.s)(t),(0,i.t)("input",this.host,n),e&&this.setFormAssociatedValue(n),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onInput)&&this.component._on.onInput(t,n)}onClick(t){var e;(0,i.s)(t),(0,i.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,i.s)(t),(0,i.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},80936:(t,e,n)=>{n.d(e,{I:()=>r});var i=n(10744),o=n(41149),a=n(29808),s=n(31604);const l=(t,e)=>{const n=t;"object"==typeof n&&null!==n&&((0,s.i)(n.right,1)&&(n.right={icon:n.right}),(0,s.i)(n.left,1)&&(n.left={icon:n.left}),e.set("_icons",n))};class r extends i.I{constructor(t,e,n){super(t,e,n),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,s.i)(t.left,1)||(0,o.i)(t.left)||(0,s.i)(t.right,1)||(0,o.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},43440:(t,e,n)=>{n.d(e,{i:()=>s,n:()=>r,r:()=>l});var i=n(74520),o=n(31604);const a=()=>{let t=(0,i.d)().KoliBri;return void 0===t&&(t={},Object.defineProperty((0,i.d)(),"KoliBri",{value:t,writable:!1})),t},s=()=>{(()=>{const t=(0,i.g)().querySelector('meta[name="kolibri"]');if(t&&t.hasAttribute("content")){const e=t.getAttribute("content");"string"==typeof e&&((0,i.s)(e.includes("dev-mode=true")),(0,i.b)(e.includes("experimental-mode=true")),(0,i.c)(e.includes("color-contrast-analysis=true")))}})(),i.L.debug("\n,--. ,--. ,--. ,--. ,-----. ,--.\n| .' / ,---. | | `--' | |) /_ ,--.--. `--'\n| . ' | .-. | | | ,--. | .-. \\ | .--' ,--.\n| |\\ \\ | '-' | | | | | | '--' / | | | |\n`--' `--\xb4 `---\xb4 `--' `--' `------\xb4 `--' `--'\n\ud83d\udeb9 The accessible HTML-Standard | \ud83d\udc49 https://public-ui.github.io | 2.1.1\n\t",{forceLog:!0})},l=()=>{!0!==a().adviceShown&&(Object.defineProperty(a(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let r=()=>Math.floor(16777215*Math.random()).toString(16);"test"===o.p&&(r=()=>"nonce")},41149:(t,e,n)=>{n.d(e,{i:()=>l,v:()=>r});var i=n(29808),o=n(31604);const a=(t,e,n)=>{(0,o.c)(n)?t[e]=n:(0,o.i)(n,1)&&(t[e]={icon:n})},s=t=>{var e,n,i;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(n=t.nextState)||void 0===n?void 0:n.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",(t=>{let e={};return(0,o.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(a(e,"top",t.top),a(e,"right",t.right),a(e,"bottom",t.bottom),a(e,"left",t.left)),e})(e))}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.b)(t.style))&&(void 0===t.label||(0,o.i)(t.label))&&(0,o.i)(t.icon,1),r=(t,e,n={})=>{(0,i.o)(e,(()=>{var a;try{e=(0,i.p)(e)}catch(t){}(0,i.w)(t,"_icons",(t=>{const e="object"==typeof t&&null!==t&&0===Object.keys(t).length;return null===t||e||(0,o.i)(t,1)||"object"==typeof t&&null!==t&&((0,o.i)(t.left,1)||l(t.left)||(0,o.i)(t.right,1)||l(t.right)||(0,o.i)(t.top,1)||l(t.top)||(0,o.i)(t.bottom,1)||l(t.bottom))}),new Set(["KoliBriIcon"]),e,Object.assign(Object.assign({},n),{defaultValue:{},hooks:{afterPatch:null===(a=n.hooks)||void 0===a?void 0:a.afterPatch,beforePatch:(t,e,i,o)=>{var a,l;"function"==typeof(null===(a=n.hooks)||void 0===a?void 0:a.beforePatch)&&(null===(l=n.hooks)||void 0===l||l.beforePatch(t,e,i,o)),s(i)}}}))}))}},99484:(t,e,n)=>{n.r(e),n.d(e,{kol_input_email:()=>p});var i=n(33432),o=n(43440),a=n(34824),s=n(10744),l=n(77452),r=n(30236),d=n(29808),h=n(83852),c=n(31604);class u extends r.I{constructor(t,e,n){super(t,e,n),this.component=t}validateMultiple(t){((t,e)=>{(0,d.b)(t,"_multiple",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const p=class{async getValue(){var t;return null===(t=this.ref)||void 0===t?void 0:t.value}render(){const{ariaDescribedBy:t}=(0,s.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,c.s)(this.state._label);return(0,i.h)(i.H,{key:"d9e5fc37a05a1fa49e0206d45943f8c789bd3780",class:{"kol-input-email":!0,"has-value":this.state._hasValue}},(0,i.h)(h.l,{key:"1f252d60c0808ced9529b92e113d782c1c61dbb6",class:{email:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_msg:this.state._msg,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,i.h)("span",{key:"f9269342577e13a1955967c354df3745b8e4072f",slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(l.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{key:"385b7b1c58c3fcb68588d5e8d390f2625e09d381",slot:"input"},(0,i.h)("input",Object.assign({key:"d53a875e911643f0d88fc4be69866e082f561831",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyDown:this.onKeyDown,onInput:this.onInput})))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,c.a)(this.host,this.ref)},this.onKeyDown=t=>{"Enter"!==t.code&&"NumpadEnter"!==t.code||(0,a.p)({form:this.host,ref:this.ref})},this.onInput=t=>{(0,d.s)(this,"_currentLength",t.target.value.length),this.controller.onFacade.onInput(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._msg=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._smartButton=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"",_suggestions:[]},this.controller=new u(this,"email",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateMsg(t){this.controller.validateMsg(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_msg:["validateMsg"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_suggestions:["validateSuggestions"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};p.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .required label > span::after,\n .required legend > span::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n input,\n textarea {\n cursor: text;\n }\n input[type=checkbox],\n input[type=color],\n input[type=file],\n input[type=radio],\n input[type=range],\n label,\n option,\n select {\n cursor: pointer;\n }\n /* input[type='checkbox'], */\n /* input[type='radio'], */\n /* input[type='range'], */\n input[type=color],\n input[type=date],\n input[type=datetime-local],\n input[type=email],\n input[type=file],\n input[type=month],\n input[type=number],\n input[type=password],\n input[type=search],\n input[type=tel],\n input[type=text],\n input[type=time],\n input[type=url],\n input[type=week],\n select,\n select[multiple] option,\n textarea {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n width: 100%;\n }\n /* needed hack for vertical alignment */\n input[type=file] {\n padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em;\n }\n /* needed hack for vertical alignment */\n select[multiple] option {\n padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em;\n }\n}\n@layer kol-component {\n .kol-input {\n display: grid;\n }\n .kol-input .input-slot {\n flex-grow: 1;\n }\n input:not([type=checkbox], [type=radio]),\n select:not([multiple], [size]) {\n height: 2.75em;\n }\n input:focus,\n option:focus,\n select:focus,\n textarea:focus {\n outline: 0;\n }\n .input {\n display: flex;\n align-items: center;\n }\n .input > .kol-icon {\n display: grid;\n height: var(--a11y-min-size);\n place-items: center;\n }\n .kol-input.required .input-tooltip .span-label::after {\n content: \"*\";\n }\n}\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n .kol-alert-wc {\n display: grid;\n }\n .kol-alert-wc .heading {\n display: flex;\n place-items: center;\n }\n .kol-alert-wc .heading > div {\n flex-grow: 1;\n }\n .close {\n /* Visible with forced colors */\n outline: transparent solid 1px;\n }\n}\n@layer kol-component {\n :host {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n}"}},80152:(t,e,n)=>{n.d(e,{v:()=>o});var i=n(29808);const o=(t,e)=>{(0,i.g)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,i.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}}}]);