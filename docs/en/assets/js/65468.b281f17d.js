/*! For license information please see 65468.b281f17d.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[65468],{85372:(e,t,n)=>{n.d(t,{I:()=>o});var i=n(86104);const o=({accessKey:e,label:t})=>{let[n,...o]=t.split(e);return 0===o.length&&(e=e.toUpperCase(),[n,...o]=t.split(e)),0===o.length&&(e=e.toLowerCase(),[n,...o]=t.split(e)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,e),o.join(e)):null)}},82660:(e,t,n)=>{n.d(t,{I:()=>u,g:()=>c,v:()=>h});var i=n(22004),o=n(4636),a=n(15752),s=n(17584),l=n(25108),r=n(87424),d=n(13716);const h=(e,t)=>{(0,a.w)(e,"_msg",(e=>"object"==typeof e),new Set(["Object"]),t)},c=e=>{var t,n;const i=Boolean("error"===(null===(t=e._msg)||void 0===t?void 0:t._type)&&e._msg._description&&(null===(n=e._msg._description)||void 0===n?void 0:n.length)>0)&&!0===e._touched,o="string"==typeof e._hint&&e._hint.length>0,a=[];return!0===i&&a.push(`${e._id}-error`),!0===o&&a.push(`${e._id}-hint`),{hasError:i,hasHint:o,ariaDescribedBy:a}};class p extends o.A{constructor(e,t,n){super(e,t,n),this.component=e}validateAlert(e){(0,a.b)(this.component,"_alert",e)}validateTouched(e){((e,t)=>{(0,a.b)(e,"_touched",t)})(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends p{constructor(e,t,n){super(e,t,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this),onInput:this.onInput.bind(this)},this.component=e}validateAccessKey(e){(0,a.i)(this.component,"_accessKey",e)}validateAdjustHeight(e){((e,t)=>{(0,a.b)(e,"_adjustHeight",t)})(this.component,e)}validateDisabled(e){(0,a.b)(this.component,"_disabled",e),!0===e&&(0,a.c)()}validateTooltipAlign(e){(0,d.v)(this.component,e)}validateError(e){const t=e?{_description:e,_type:"error"}:void 0;this.validateMsg(t)}validateHideError(e){((e,t,n)=>{(0,a.b)(e,"_hideError",t,n)})(this.component,e,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,a.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(e){(0,s.v)(this.component,e,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(e){(0,a.i)(this.component,"_hint",e)}validateId(e){(0,a.i)(this.component,"_id",e,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==e&&void 0!==e||(0,a.j)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(e){(0,l.a)(this.component,e,{required:!0})}validateMsg(e){h(this.component,e)}validateOn(e){"object"==typeof e&&(0,a.s)(this.component,"_on",e)}validateSmartButton(e){(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(e){}(0,a.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,r.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateMsg(this.component._msg),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,(0,i.s)(e),(0,i.t)("blur",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e,t){var n;t=null!=t?t:e.target.value,(0,i.t)("change",this.host,t),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(e,t),this.valueChangeListeners.forEach((e=>e(t)))}onInput(e,t=!0,n){var o;n=null!=n?n:e.target.value,(0,i.s)(e),(0,i.t)("input",this.host,n),t&&this.setFormAssociatedValue(n),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onInput)&&this.component._on.onInput(e,n)}onClick(e){var t;(0,i.s)(e),(0,i.t)("click",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,(0,i.s)(e),(0,i.t)("focus",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}addValueChangeListener(e){this.valueChangeListeners.push(e)}}},55832:(e,t,n)=>{n.d(t,{I:()=>h,a:()=>c,f:()=>d,v:()=>l});var i=n(82660),o=n(15752),a=n(25108);const s=e=>{if("object"==typeof e&&null!==e){if("string"==typeof e.label&&e.label.length>0)return e.disabled=!0===e.disabled,e.label=`${e.label}`.trim(),!1===(0,a.b)(e.label,3)&&!1===(0,a.c)(e.label)&&(0,o.a)(`Ein abweichendes Aria-Label (${e.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(e.options)||void 0===e.options.find((e=>!1===s(e)));if("number"==typeof e.label)return!0}return!1},l=(e,t,n={})=>{(0,o.g)(e,"_options",s,t,void 0,n)},r=["horizontal","vertical"],d=(e,t,n="")=>{t.forEach(((t,i)=>{const o=`${n}-${i}`;"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0&&(Array.isArray(t.options)?d(e,t.options,o):e.set(o,t))}))};class h extends i.I{constructor(e,t,n){super(e,t,n),this.component=e}validateRequired(e){((e,t)=>{(0,o.b)(e,"_required",t)})(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class c extends h{constructor(e,t,n){super(e,t,n),this.keyOptionMap=new Map,this.getOptionByKey=e=>this.keyOptionMap.get(e),this.afterPatchOptions=(e,t,n,i)=>{"_value"===i&&this.setFormAssociatedValue(e)},this.beforePatchOptions=(e,t)=>{const n=t.has("_options")?t.get("_options"):this.component.state._options;Array.isArray(n)&&n.length>0&&(this.keyOptionMap.clear(),d(this.keyOptionMap,n))},this.component=e}validateOrientation(e){(0,o.w)(this.component,"_orientation",(e=>"string"==typeof e&&r.includes(e)),new Set([`Orientation {${r.join(", ")}`]),e,{defaultValue:"vertical"})}validateOptions(e){((e,t,n={})=>{(0,o.g)(e,"_options",(e=>"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0),t,void 0,n)})(this.component,e,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateValue(e){e=(0,o.m)(e),e=Array.isArray(e)?e[0]:e,(0,o.s)(this.component,"_value",e,{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions})}componentWillLoad(){super.componentWillLoad(),this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options),this.validateValue(this.component._value)}}},69676:(e,t,n)=>{n.d(t,{a:()=>l,p:()=>r});var i=n(60848),o=n(15752),a=n(4144);const s=e=>{for((0,a.a)()&&((0,o.j)("\u2193 Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&e.tagName!==i.m.toUpperCase();){try{e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null}catch(e){}(0,a.a)()&&(console.log(e),(0,o.j)("\u2191 Search form element finished."))}return e},l=(e={})=>{var t,n;const a=s(e.form);if(a instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,o.q)(e,a),a.dispatchEvent(e);else if(a.tagName===i.m.toUpperCase()){(0,o.q)(e,o.K.querySelector("form",a));const i=a;"function"==typeof(null===(t=i._on)||void 0===t?void 0:t.onReset)&&(null===(n=i._on)||void 0===n||n.onReset(e))}}},r=(e={})=>{const t=s(e.form);if(t instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t});if("FORM"===t.tagName)(0,a.a)()&&!1===t.noValidate&&(0,o.j)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof t.requestSubmit?t.requestSubmit():((0,o.q)(e,t),t.dispatchEvent(e))}));else if(t.tagName===i.m.toUpperCase()){(0,o.q)(e,o.K.querySelector("form",t));const n=t;setTimeout((()=>{var t,i;"function"==typeof(null===(t=n._on)||void 0===t?void 0:t.onSubmit)&&(null===(i=n._on)||void 0===i||i.onSubmit(e))}))}}}},79488:(e,t,n)=>{n.d(t,{i:()=>s,n:()=>r,r:()=>l});var i=n(4144),o=n(63312);const a=()=>{let e=(0,i.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,i.d)(),"KoliBri",{value:e,writable:!1})),e},s=()=>{(()=>{const e=(0,i.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,i.s)(t.includes("dev-mode=true")),(0,i.b)(t.includes("experimental-mode=true")),(0,i.c)(t.includes("color-contrast-analysis=true")))}})(),i.L.debug("\n,--. ,--. ,--. ,--. ,-----. ,--.\n| .' / ,---. | | `--' | |) /_ ,--.--. `--'\n| . ' | .-. | | | ,--. | .-. \\ | .--' ,--.\n| |\\ \\ | '-' | | | | | | '--' / | | | |\n`--' `--\xb4 `---\xb4 `--' `--' `------\xb4 `--' `--'\n\ud83d\udeb9 The accessible HTML-Standard | \ud83d\udc49 https://public-ui.github.io | 2.1.2\n\t",{forceLog:!0})},l=()=>{!0!==a().adviceShown&&(Object.defineProperty(a(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let r=()=>Math.floor(16777215*Math.random()).toString(16);"test"===o.p&&(r=()=>"nonce")},67824:(e,t,n)=>{n.d(t,{F:()=>a});var i=n(86104),o=n(60848);const a=({_alert:e,_msg:t,_hideError:n,_id:a})=>(0,i.h)(o.d,Object.assign({"aria-hidden":"true",id:`${a}-error`,_alert:e,_type:"error",class:{error:!0,"visually-hidden":!0===n}},t),(null==t?void 0:t._description)||void 0)},65468:(e,t,n)=>{n.r(t),n.d(t,{kol_input_radio:()=>u});var i=n(86104),o=n(79488),a=n(22004),s=n(82660),l=n(85372),r=n(55832),d=n(67824),h=n(60848),c=n(69676),p=n(63312);const u=class{async getValue(){return this.currentValue}render(){const{ariaDescribedBy:e,hasError:t}=(0,s.g)(this.state),n=(0,p.s)(this.state._label);return(0,i.h)(i.H,{key:"dc19a19da83ae3ffccc837a267a2fe423d27be0d",class:"kol-input-radio"},(0,i.h)("fieldset",{key:"337fa81ae7fa85cbb7fc2b44d5027857240ba311",class:{fieldset:!0,disabled:!0===this.state._disabled,error:!0===t,required:!0===this.state._required,"hidden-error":!0===this._hideError,[this.state._orientation]:!0}},(0,i.h)("legend",{key:"8a53c6ed784cd1132b97e5cc13c1ff7c7c1d7525",class:"block w-full mb-1 leading-normal"},(0,i.h)("span",{key:"88742ed2d353ea338fdf6946472e39fa3d59889d"},(0,i.h)("span",{key:"f78f94e8263d72325462a980d6e01b378f6ef507",slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this._accessKey?(0,i.h)(l.I,{accessKey:this._accessKey,label:this._label}):this._label))),this.state._options.map(((t,n)=>{const o=`${this.state._id}-${n}`,a=`radio-${n}`,s=this.state._value===t.value;return(0,i.h)(h.l,{class:{radio:!0,disabled:Boolean(this.state._disabled||t.disabled)},key:o,_accessKey:this.state._accessKey,_disabled:this.state._disabled||t.disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:o,_label:t.label,_renderNoLabel:!0,_required:this.state._required,_slotName:a,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("div",{slot:a,class:"radio-input-wrapper"},(0,i.h)("input",Object.assign({ref:this.state._value===t.value?this.catchRef:void 0,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof t.label?t.label:void 0,type:"radio",id:o,checked:s,name:this.state._name||this.state._id,disabled:this.state._disabled||t.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${n}`},this.controller.onFacade,{onChange:this.onChange,onClick:void 0,onInput:this.onInput,onKeyDown:this.onKeyDown.bind(this)})),(0,i.h)("label",{class:"radio-label",htmlFor:`${o}`,style:{height:this.state._hideLabel?"0":void 0,margin:this.state._hideLabel?"0":void 0,padding:this.state._hideLabel?"0":void 0,visibility:this.state._hideLabel?"hidden":void 0}},(0,i.h)("span",null,(0,i.h)("span",{class:"radio-label-span-inner"},t.label)))))})),t&&(0,i.h)(d.F,{key:"7d00d6ffde6ed693bdf763c63c56cf1c0e930126",_alert:this.state._alert,_hideError:this.state._hideError,_msg:this.state._msg,_id:this.state._id})))}constructor(e){(0,i.r)(this,e),this.catchRef=e=>{this.ref=e,(0,p.a)(this.host,e)},this.onInput=e=>{var t;if(e.target instanceof HTMLInputElement){const n=this.controller.getOptionByKey(e.target.value);void 0!==n&&((0,a.t)("input",this.host,n.value),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onInput)&&this.state._on.onInput(e,n.value))}},this.onChange=e=>{var t;if(e.target instanceof HTMLInputElement){const n=this.controller.getOptionByKey(e.target.value);void 0!==n&&((0,a.s)(e),(0,a.t)("change",this.host,n.value),this.controller.setFormAssociatedValue(n.value),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onChange)&&this.state._on.onChange(e,n.value),this.currentValue=n.value)}},this.onKeyDown=e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||(0,c.p)({form:this.host,ref:this.ref})},this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._msg=void 0,this._name=void 0,this._on=void 0,this._options=void 0,this._orientation="vertical",this._required=!1,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"",_options:[],_orientation:"vertical"},this.controller=new r.a(this,"radio",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateTooltipAlign(e){this.controller.validateTooltipAlign(e)}validateAlert(e){this.controller.validateAlert(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHideError(e){this.controller.validateHideError(e)}validateHint(e){this.controller.validateHint(e)}validateId(e){this.controller.validateId(e)}validateLabel(e){this.controller.validateLabel(e)}validateMsg(e){this.controller.validateMsg(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateOptions(e){this.controller.validateOptions(e)}validateOrientation(e){this.controller.validateOrientation(e)}validateRequired(e){this.controller.validateRequired(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.currentValue=this._value,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_tooltipAlign:["validateTooltipAlign"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hideError:["validateHideError"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_orientation:["validateOrientation"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};u.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .required label > span::after,\n .required legend > span::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n input,\n textarea {\n cursor: text;\n }\n input[type=checkbox],\n input[type=color],\n input[type=file],\n input[type=radio],\n input[type=range],\n label,\n option,\n select {\n cursor: pointer;\n }\n /* input[type='checkbox'], */\n /* input[type='radio'], */\n /* input[type='range'], */\n input[type=color],\n input[type=date],\n input[type=datetime-local],\n input[type=email],\n input[type=file],\n input[type=month],\n input[type=number],\n input[type=password],\n input[type=search],\n input[type=tel],\n input[type=text],\n input[type=time],\n input[type=url],\n input[type=week],\n select,\n select[multiple] option,\n textarea {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n width: 100%;\n }\n /* needed hack for vertical alignment */\n input[type=file] {\n padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em;\n }\n /* needed hack for vertical alignment */\n select[multiple] option {\n padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em;\n }\n}\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n .kol-alert-wc {\n display: grid;\n }\n .kol-alert-wc .heading {\n display: flex;\n place-items: center;\n }\n .kol-alert-wc .heading > div {\n flex-grow: 1;\n }\n .close {\n /* Visible with forced colors */\n outline: transparent solid 1px;\n }\n}\n@layer kol-component {\n :host {\n --border-width: 2px;\n --input-size: 1.5em;\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n .kol-input .icons {\n display: none;\n }\n label {\n cursor: pointer;\n }\n input {\n appearance: none;\n border-width: var(--border-width);\n border-style: solid;\n border-radius: 100%;\n cursor: pointer;\n display: flex;\n height: var(--input-size);\n margin: 0;\n min-height: var(--input-size);\n min-width: var(--input-size);\n padding: 0;\n width: var(--input-size);\n }\n input:before {\n border-radius: 100%;\n content: \"\";\n margin: auto;\n height: calc(var(--input-size) / 2);\n width: calc(var(--input-size) / 2);\n }\n input:checked:before {\n background-color: #000;\n }\n @media (forced-colors: active) {\n input:checked:before {\n /* Give it a visible background in forced colors mode */\n background: selectedItem !important;\n }\n }\n fieldset {\n display: flex;\n }\n fieldset.vertical {\n flex-direction: column;\n }\n fieldset .input-slot {\n align-items: center;\n display: flex;\n }\n /* required star is on fieldset legend */\n .required label > span::after {\n content: \"\";\n }\n}"}}}]);