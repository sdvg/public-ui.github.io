/*! For license information please see 63152.3ae82032.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[63152],{85372:(e,t,n)=>{n.d(t,{I:()=>o});var i=n(86104);const o=({accessKey:e,label:t})=>{let[n,...o]=t.split(e);return 0===o.length&&(e=e.toUpperCase(),[n,...o]=t.split(e)),0===o.length&&(e=e.toLowerCase(),[n,...o]=t.split(e)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,e),o.join(e)):null)}},60280:(e,t,n)=>{n.d(t,{I:()=>u,g:()=>c,v:()=>h});var i=n(22004),o=n(4636),a=n(15752),s=n(17584),l=n(25108),r=n(87424),d=n(13716);const h=(e,t)=>{(0,a.w)(e,"_msg",(e=>"object"==typeof e),new Set(["Object"]),t)},c=e=>{var t,n;const i=Boolean("error"===(null===(t=e._msg)||void 0===t?void 0:t._type)&&e._msg._description&&(null===(n=e._msg._description)||void 0===n?void 0:n.length)>0)&&!0===e._touched,o="string"==typeof e._hint&&e._hint.length>0,a=[];return!0===i&&a.push(`${e._id}-error`),!0===o&&a.push(`${e._id}-hint`),{hasError:i,hasHint:o,ariaDescribedBy:a}};class p extends o.A{constructor(e,t,n){super(e,t,n),this.component=e}validateAlert(e){(0,a.b)(this.component,"_alert",e)}validateTouched(e){((e,t)=>{(0,a.b)(e,"_touched",t)})(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends p{constructor(e,t,n){super(e,t,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this),onInput:this.onInput.bind(this)},this.component=e}validateAccessKey(e){(0,a.i)(this.component,"_accessKey",e)}validateAdjustHeight(e){((e,t)=>{(0,a.b)(e,"_adjustHeight",t)})(this.component,e)}validateDisabled(e){(0,a.b)(this.component,"_disabled",e),!0===e&&(0,a.c)()}validateTooltipAlign(e){(0,d.v)(this.component,e)}validateError(e){const t=e?{_description:e,_type:"error"}:void 0;this.validateMsg(t)}validateHideError(e){((e,t,n)=>{(0,a.b)(e,"_hideError",t,n)})(this.component,e,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,a.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(e){(0,s.v)(this.component,e,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(e){(0,a.i)(this.component,"_hint",e)}validateId(e){(0,a.i)(this.component,"_id",e,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==e&&void 0!==e||(0,a.j)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(e){(0,l.a)(this.component,e,{required:!0})}validateMsg(e){h(this.component,e)}validateOn(e){"object"==typeof e&&(0,a.s)(this.component,"_on",e)}validateSmartButton(e){(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(e){}(0,a.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,r.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateMsg(this.component._msg),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,(0,i.s)(e),(0,i.t)("blur",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e,t){var n;t=null!=t?t:e.target.value,(0,i.t)("change",this.host,t),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(e,t),this.valueChangeListeners.forEach((e=>e(t)))}onInput(e,t=!0,n){var o;n=null!=n?n:e.target.value,(0,i.s)(e),(0,i.t)("input",this.host,n),t&&this.setFormAssociatedValue(n),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onInput)&&this.component._on.onInput(e,n)}onClick(e){var t;(0,i.s)(e),(0,i.t)("click",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,(0,i.s)(e),(0,i.t)("focus",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}addValueChangeListener(e){this.valueChangeListeners.push(e)}}},69676:(e,t,n)=>{n.d(t,{a:()=>l,p:()=>r});var i=n(60848),o=n(15752),a=n(4144);const s=e=>{for((0,a.a)()&&((0,o.j)("\u2193 Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&e.tagName!==i.m.toUpperCase();){try{e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null}catch(e){}(0,a.a)()&&(console.log(e),(0,o.j)("\u2191 Search form element finished."))}return e},l=(e={})=>{var t,n;const a=s(e.form);if(a instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,o.q)(e,a),a.dispatchEvent(e);else if(a.tagName===i.m.toUpperCase()){(0,o.q)(e,o.K.querySelector("form",a));const i=a;"function"==typeof(null===(t=i._on)||void 0===t?void 0:t.onReset)&&(null===(n=i._on)||void 0===n||n.onReset(e))}}},r=(e={})=>{const t=s(e.form);if(t instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t});if("FORM"===t.tagName)(0,a.a)()&&!1===t.noValidate&&(0,o.j)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof t.requestSubmit?t.requestSubmit():((0,o.q)(e,t),t.dispatchEvent(e))}));else if(t.tagName===i.m.toUpperCase()){(0,o.q)(e,o.K.querySelector("form",t));const n=t;setTimeout((()=>{var t,i;"function"==typeof(null===(t=n._on)||void 0===t?void 0:t.onSubmit)&&(null===(i=n._on)||void 0===i||i.onSubmit(e))}))}}}},26296:(e,t,n)=>{n.d(t,{I:()=>r});var i=n(60280),o=n(19684),a=n(15752),s=n(63312);const l=(e,t)=>{const n=e;"object"==typeof n&&null!==n&&((0,s.i)(n.right,1)&&(n.right={icon:n.right}),(0,s.i)(n.left,1)&&(n.left={icon:n.left}),t.set("_icons",n))};class r extends i.I{constructor(e,t,n){super(e,t,n),this.component=e}validateIcon(e){this.validateIcons(e)}validateIcons(e){(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(e){}(0,a.w)(this.component,"_icons",(e=>"object"==typeof e&&null!==e&&((0,s.i)(e.left,1)||(0,o.i)(e.left)||(0,s.i)(e.right,1)||(0,o.i)(e.right))),new Set(["KoliBriHorizontalIcon"]),e,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},79488:(e,t,n)=>{n.d(t,{i:()=>s,n:()=>r,r:()=>l});var i=n(4144),o=n(63312);const a=()=>{let e=(0,i.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,i.d)(),"KoliBri",{value:e,writable:!1})),e},s=()=>{(()=>{const e=(0,i.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,i.s)(t.includes("dev-mode=true")),(0,i.b)(t.includes("experimental-mode=true")),(0,i.c)(t.includes("color-contrast-analysis=true")))}})(),i.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--\xb4  `---\xb4  `--' `--' `------\xb4  `--'    `--'\n\ud83d\udeb9 The accessible HTML-Standard | \ud83d\udc49 https://public-ui.github.io | 2.1.2\n\t",{forceLog:!0})},l=()=>{!0!==a().adviceShown&&(Object.defineProperty(a(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let r=()=>Math.floor(16777215*Math.random()).toString(16);"test"===o.p&&(r=()=>"nonce")},19684:(e,t,n)=>{n.d(t,{i:()=>l,v:()=>r});var i=n(15752),o=n(63312);const a=(e,t,n)=>{(0,o.c)(n)?e[t]=n:(0,o.i)(n,1)&&(e[t]={icon:n})},s=e=>{var t,n,i;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icons")){const t=null===(n=e.nextState)||void 0===n?void 0:n.get("_icons");null===(i=e.nextState)||void 0===i||i.set("_icons",(e=>{let t={};return(0,o.i)(e,1)?t={left:{icon:e}}:"object"==typeof e&&null!==e&&(a(t,"top",e.top),a(t,"right",e.right),a(t,"bottom",e.bottom),a(t,"left",e.left)),t})(t))}},l=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,o.b)(e.style))&&(void 0===e.label||(0,o.i)(e.label))&&(0,o.i)(e.icon,1),r=(e,t,n={})=>{(0,i.o)(t,(()=>{var a;try{t=(0,i.p)(t)}catch(e){}(0,i.w)(e,"_icons",(e=>{const t="object"==typeof e&&null!==e&&0===Object.keys(e).length;return null===e||t||(0,o.i)(e,1)||"object"==typeof e&&null!==e&&((0,o.i)(e.left,1)||l(e.left)||(0,o.i)(e.right,1)||l(e.right)||(0,o.i)(e.top,1)||l(e.top)||(0,o.i)(e.bottom,1)||l(e.bottom))}),new Set(["KoliBriIcon"]),t,Object.assign(Object.assign({},n),{defaultValue:{},hooks:{afterPatch:null===(a=n.hooks)||void 0===a?void 0:a.afterPatch,beforePatch:(e,t,i,o)=>{var a,l;"function"==typeof(null===(a=n.hooks)||void 0===a?void 0:a.beforePatch)&&(null===(l=n.hooks)||void 0===l||l.beforePatch(e,t,i,o)),s(i)}}}))}))}},63152:(e,t,n)=>{n.r(t),n.d(t,{kol_input_range:()=>m});var i=n(86104),o=n(79488),a=n(69676),s=n(60280),l=n(85372),r=n(26296),d=n(15752),h=n(8944),c=n(60848),p=n(63312);class u extends r.I{constructor(e,t,n){super(e,t,n),this.component=e}validateAutoComplete(e){(0,d.w)(this.component,"_autoComplete",(e=>"string"==typeof e&&("on"===e||"off"===e)),new Set(["on | off"]),e)}validateMax(e){(0,d.k)(this.component,"_max",e)}validateMin(e){(0,d.k)(this.component,"_min",e)}validateStep(e){(0,d.k)(this.component,"_step",e)}validateSuggestions(e){(0,h.v)(this.component,e)}validateValue(e){(0,d.k)(this.component,"_value",e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateStep(this.component._step),this.validateSuggestions(this.component._suggestions),this.validateValue(this.component._value)}}const m=class{getSanitizedFloatValue(e){const t=parseFloat(e);return this.state._max&&t>this.state._max?this.state._max:this.state._min&&t<this.state._min?this.state._min:t}async getValue(){if(void 0!==this.refInputNumber){const e=this.refInputNumber.value;return this.getSanitizedFloatValue(e)}}componentDidLoad(){var e;!this._value&&(null===(e=this.refInputRange)||void 0===e?void 0:e.value)&&this.validateValue(parseFloat(this.refInputRange.value))}render(){const{ariaDescribedBy:e}=(0,s.g)(this.state),t=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,p.s)(this.state._label);return(0,i.h)(i.H,{key:"7b64631487a3803774d80e3e70370c94490a9857",class:"kol-input-range"},(0,i.h)(c.l,{key:"85101ed185396991337d173ce303ba75f2074c06",class:{range:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_msg:this.state._msg,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("span",{key:"3e171dbf810c32a19e852a04744f247168803238",slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(l.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{key:"9d600093cff9813f86c7da0462412bc7defd99b0",slot:"input"},(0,i.h)("div",{key:"f57c4c85cb9922268eb0690a4a5fbc1fd39ddbcc",class:"inputs-wrapper",style:{"--kolibri-input-range--input-number--width":`${this.state._max}`.length+.5+"em"}},(0,i.h)("input",Object.assign({key:"733e6dfef18d2999fb242016b22f514e5569d2a6",ref:this.catchInputRangeRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-hidden":"true",autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,list:t?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-range`:void 0,spellcheck:"false",step:this.state._step,tabIndex:-1,type:"range",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})),(0,i.h)("input",Object.assign({key:"76d774a129cb72c84f9ec4af991c9d26ff5b5099",ref:this.catchInputNumberRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:t?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-number`:void 0,step:this.state._step,type:"number",value:this.state._value},this.controller.onFacade,{onKeyDown:this.onKeyDown,onChange:this.onChange}))),t&&[(0,i.h)("datalist",{key:"b1c6c238050830f943300523363a08eae7c7d4d9",id:`${this.state._id}-list`},this.state._suggestions.map((e=>(0,i.h)("option",{value:e}))))])))}constructor(e){(0,i.r)(this,e),this.catchInputNumberRef=e=>{var t;e&&(this.refInputNumber=e,(0,p.a)(this.host,e),!this._value&&(null===(t=this.refInputNumber)||void 0===t?void 0:t.value)&&this.validateValue(parseFloat(this.refInputNumber.value)))},this.catchInputRangeRef=e=>{e&&(this.refInputRange=e)},this.onChange=e=>{var t,n;const i=e.target.value,o=this.getSanitizedFloatValue(i);this.validateValue(o),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onChange)&&(null===(n=this.state._on)||void 0===n||n.onChange(e,o))},this.onKeyDown=e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||(0,a.p)({form:this.host,ref:this.refInputNumber})},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._max=void 0,this._min=void 0,this._msg=void 0,this._name=void 0,this._on=void 0,this._step=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"",_suggestions:[]},this.controller=new u(this,"range",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideError(e){this.controller.validateHideError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateId(e){this.controller.validateId(e)}validateLabel(e){this.controller.validateLabel(e)}validateMax(e){this.controller.validateMax(e)}validateMin(e){this.controller.validateMin(e)}validateMsg(e){this.controller.validateMsg(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateStep(e){this.controller.validateStep(e)}validateSuggestions(e){this.controller.validateSuggestions(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_step:["validateStep"],_suggestions:["validateSuggestions"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};m.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  .required label > span::after,\n  .required legend > span::after {\n    content: \"*\";\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  input,\n  textarea {\n    cursor: text;\n  }\n  input[type=checkbox],\n  input[type=color],\n  input[type=file],\n  input[type=radio],\n  input[type=range],\n  label,\n  option,\n  select {\n    cursor: pointer;\n  }\n  /* input[type='checkbox'], */\n  /* input[type='radio'], */\n  /* input[type='range'], */\n  input[type=color],\n  input[type=date],\n  input[type=datetime-local],\n  input[type=email],\n  input[type=file],\n  input[type=month],\n  input[type=number],\n  input[type=password],\n  input[type=search],\n  input[type=tel],\n  input[type=text],\n  input[type=time],\n  input[type=url],\n  input[type=week],\n  select,\n  select[multiple] option,\n  textarea {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n    width: 100%;\n  }\n  /* needed hack for vertical alignment */\n  input[type=file] {\n    padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em;\n  }\n  /* needed hack for vertical alignment */\n  select[multiple] option {\n    padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em;\n  }\n}\n@layer kol-component {\n  .kol-input {\n    display: grid;\n  }\n  .kol-input .input-slot {\n    flex-grow: 1;\n  }\n  input:not([type=checkbox], [type=radio]),\n  select:not([multiple], [size]) {\n    height: 2.75em;\n  }\n  input:focus,\n  option:focus,\n  select:focus,\n  textarea:focus {\n    outline: 0;\n  }\n  .input {\n    display: flex;\n    align-items: center;\n  }\n  .input > .kol-icon {\n    display: grid;\n    height: var(--a11y-min-size);\n    place-items: center;\n  }\n  .kol-input.required .input-tooltip .span-label::after {\n    content: \"*\";\n  }\n}\n@layer kol-component {\n  .kol-alert-wc {\n    display: grid;\n  }\n  .kol-alert-wc .heading {\n    display: flex;\n    place-items: center;\n  }\n  .kol-alert-wc .heading > div {\n    flex-grow: 1;\n  }\n  .close {\n    /* Visible with forced colors */\n    outline: transparent solid 1px;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  .inputs-wrapper {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n  }\n  input[type=number] {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    width: var(--kolibri-input-range--input-number--width);\n  }\n  /*\n    * For Chrome and Firefox is it needed to use redundant style definitions with separate selectors. The reason is unknown.\n    */\n  input[type=range] {\n    appearance: none;\n    background-color: #d3d3d3;\n    border: 1px solid #000;\n    display: inline-block;\n    flex-grow: 1;\n    height: calc(8rem / var(--kolibri-root-font-size, 16));\n    line-height: 1.5em;\n    padding: 0;\n    margin: 0;\n    /* Design-Hack - related with flex-grow */\n    width: 0;\n  }\n  input[type=range]::-webkit-slider-thumb {\n    box-sizing: border-box;\n    background-color: #000;\n    height: 20px;\n    width: 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    -webkit-appearance: none;\n  }\n  input[type=range]::-moz-range-thumb {\n    box-sizing: border-box;\n    background-color: #000;\n    height: 20px;\n    width: 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    -moz-appearance: none;\n  }\n}\n/* Fix missing outline in Chromium-based browsers on Windows in high contrast mode. */\n@media (prefers-contrast: more) {\n  ::-webkit-slider-thumb {\n    outline: 1px solid currentColor;\n  }\n}"}},8944:(e,t,n)=>{n.d(t,{v:()=>o});var i=n(15752);const o=(e,t)=>{(0,i.g)(e,"_suggestions",(e=>"string"==typeof e||"number"==typeof e),t,void 0,{hooks:{afterPatch:e=>{Array.isArray(e)&&e.length&&(0,i.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}}}]);