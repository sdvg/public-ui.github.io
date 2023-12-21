/*! For license information please see 7100.cdfc4db8.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7100],{892:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(26231);const o=({accessKey:t,label:e})=>{let[n,...o]=e.split(t);return 0===o.length&&(t=t.toUpperCase(),[n,...o]=e.split(t)),0===o.length&&(t=t.toLowerCase(),[n,...o]=e.split(t)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),o.join(t)):null)}},69983:(t,e,n)=>{n.d(e,{I:()=>p,g:()=>d});var i=n(28854),o=n(96880),a=n(48995),s=n(27520),l=n(34754),r=n(20416),h=n(22765);const d=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}};class c extends h.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,i.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class p extends c{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,i.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,i.a)(this.component,"_disabled",t),!0===t&&(0,s.e)()}validateError(t){(0,i.d)(this.component,"_error",t)}validateHideError(t){((t,e,n)=>{(0,i.a)(t,"_hideError",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,o.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.d)(this.component,"_hint",t)}validateId(t){(0,i.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(t){(0,a.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,i.s)(this.component,"_on",t)}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,l.s)(t),(0,l.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,l.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,l.s)(t),(0,l.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,l.s)(t),(0,l.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},99316:(t,e,n)=>{n.d(e,{a:()=>l,p:()=>r});var i=n(27520),o=n(40480),a=n(28854);const s=t=>{for((0,o.d)()&&((0,i.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;){try{t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null}catch(t){}(0,o.d)()&&(console.log(t),(0,i.d)("\u2191 Search form element finished."))}return t},l=(t={})=>{var e,n;const i=s(t.form);if(i instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===i.tagName)(0,a.f)(t,i),i.dispatchEvent(t);else if("KOL-FORM"===i.tagName){(0,a.f)(t,a.K.querySelector("form",i));const o=i;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onReset)&&(null===(n=o._on)||void 0===n||n.onReset(t))}}},r=(t={})=>{var e,n;const i=s(t.form);if(i instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:i});if("FORM"===i.tagName)(0,a.f)(t,i),i.dispatchEvent(t),i.submit();else if("KOL-FORM"===i.tagName){(0,a.f)(t,a.K.querySelector("form",i));const o=i;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onSubmit)&&(null===(n=o._on)||void 0===n||n.onSubmit(t))}}}},91949:(t,e,n)=>{n.d(e,{I:()=>r});var i=n(49957),o=n(28854),a=n(8868),s=n(69983);const l=(t,e)=>{const n=t;"object"==typeof n&&null!==n&&((0,a.i)(n.right,1)&&(n.right={icon:n.right}),(0,a.i)(n.left,1)&&(n.left={icon:n.left}),e.set("_icons",n))};class r extends s.I{constructor(t,e,n){super(t,e,n),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||(0,i.i)(t.left)||(0,a.i)(t.right,1)||(0,i.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},49957:(t,e,n)=>{n.d(e,{i:()=>l,v:()=>r});var i=n(28854),o=n(8868);const a=(t,e,n)=>{(0,o.c)(n)?t[e]=n:(0,o.i)(n,1)&&(t[e]={icon:n})},s=t=>{var e,n,i;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(n=t.nextState)||void 0===n?void 0:n.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",(t=>{let e={};return(0,o.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(a(e,"top",t.top),a(e,"right",t.right),a(e,"bottom",t.bottom),a(e,"left",t.left)),e})(e))}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.b)(t.style))&&(0,o.i)(t.icon,1),r=(t,e)=>{(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(t){}(0,i.w)(t,"_icons",(t=>null===t||(0,o.i)(t,1)||"object"==typeof t&&null!==t&&((0,o.i)(t.left,1)||l(t.left)||(0,o.i)(t.right,1)||l(t.right)||(0,o.i)(t.top,1)||l(t.top)||(0,o.i)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,n)=>{null===e&&n.set("_icons",{}),s(t)}},required:!0})}))}},7100:(t,e,n)=>{n.r(e),n.d(e,{kol_input_range:()=>u});var i=n(26231),o=n(40480),a=n(8868),s=n(99316),l=n(69983),r=n(85459),h=n(28854),d=n(91949),c=n(892);class p extends d.I{constructor(t,e,n){super(t,e,n),this.component=t}validateAutoComplete(t){(0,h.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateMax(t){(0,h.e)(this.component,"_max",t)}validateMin(t){(0,h.e)(this.component,"_min",t)}validateStep(t){(0,h.e)(this.component,"_step",t)}validateSuggestions(t){(0,r.v)(this.component,t)}validateValue(t){(0,h.e)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateStep(this.component._step),this.validateSuggestions(this.component._suggestions),this.validateValue(this.component._value)}}const u=class{getSanitizedFloatValue(t){const e=parseFloat(t);return this.state._max&&e>this.state._max?this.state._max:this.state._min&&e<this.state._min?this.state._min:e}async getValue(){if(void 0!==this.refInputNumber){const t=this.refInputNumber.value;return this.getSanitizedFloatValue(t)}}componentDidLoad(){var t;!this._value&&(null===(t=this.refInputRange)||void 0===t?void 0:t.value)&&this.validateValue(parseFloat(this.refInputRange.value))}render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,a.s)(this.state._label);return(0,i.h)(i.H,null,(0,i.h)("kol-input",{class:{range:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("span",{slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(c.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{slot:"input"},(0,i.h)("div",{class:"inputs-wrapper",style:{"--kolibri-input-range--input-number--width":`${this.state._max}`.length+.5+"em"}},(0,i.h)("input",Object.assign({ref:this.catchInputRangeRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-hidden":"true",autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-range`:void 0,spellcheck:"false",step:this.state._step,tabIndex:-1,type:"range",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})),(0,i.h)("input",Object.assign({ref:this.catchInputNumberRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-number`:void 0,step:this.state._step,type:"number",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp,onChange:this.onChange}))),e&&[(0,i.h)("datalist",{id:`${this.state._id}-list`},this.state._suggestions.map((t=>(0,i.h)("option",{value:t}))))])))}constructor(t){(0,i.r)(this,t),this.catchInputNumberRef=t=>{var e;t&&(this.refInputNumber=t,(0,a.a)(this.host,t),!this._value&&(null===(e=this.refInputNumber)||void 0===e?void 0:e.value)&&this.validateValue(parseFloat(this.refInputNumber.value)))},this.catchInputRangeRef=t=>{t&&(this.refInputRange=t)},this.onChange=t=>{var e,n;const i=t.target.value,o=this.getSanitizedFloatValue(i);this.validateValue(o),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&(null===(n=this.state._on)||void 0===n||n.onChange(t,o))},this.onKeyUp=t=>{"Enter"===t.code?(0,s.p)({form:this.host,ref:this.refInputNumber}):this.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._step=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"",_suggestions:[]},this.controller=new p(this,"input-range",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateStep(t){this.controller.validateStep(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_step:["validateStep"],_suggestions:["validateSuggestions"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};u.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, option, select, textarea, .input-label) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t.inputs-wrapper {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\n\tinput[type='number'] {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t\twidth: var(--kolibri-input-range--input-number--width);\n\t}\n\n\t/*\n   * For Chrome and Firefox is it needed to use redundant style definitions with separate selectors. The reason is unknown.\n   */\n\tinput[type='range'] {\n\t\tappearance: none;\n\t\tbackground-color: #d3d3d3;\n\t\tborder: 1px solid #000;\n\t\tdisplay: inline-block;\n\t\tflex-grow: 1;\n\t\theight: 0.5rem;\n\t\tline-height: 1.5em;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\twidth: 0; /* Design-Hack - related with flex-grow */\n\t}\n\n\tinput[type='range']::-webkit-slider-thumb {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: #000;\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tborder-radius: 20px;\n\t\tcursor: pointer;\n\t\t-webkit-appearance: none;\n\t}\n\n\tinput[type='range']::-moz-range-thumb {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: #000;\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tborder-radius: 20px;\n\t\tcursor: pointer;\n\t\t-moz-appearance: none;\n\t}\n\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n\n/* Fix missing outline in Chromium-based browsers on Windows in high contrast mode. */\n@media (prefers-contrast: more) {\n\t::-webkit-slider-thumb {\n\t\toutline: 1px solid currentColor;\n\t}\n}\n"}},85459:(t,e,n)=>{n.d(e,{v:()=>a});var i=n(28854),o=n(27520);const a=(t,e)=>{(0,i.c)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,o.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}}}]);