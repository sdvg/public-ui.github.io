/*! For license information please see 73704.c51d2f78.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[73704],{85372:(e,t,n)=>{n.d(t,{I:()=>o});var i=n(86104);const o=({accessKey:e,label:t})=>{let[n,...o]=t.split(e);return 0===o.length&&(e=e.toUpperCase(),[n,...o]=t.split(e)),0===o.length&&(e=e.toLowerCase(),[n,...o]=t.split(e)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,e),o.join(e)):null)}},60280:(e,t,n)=>{n.d(t,{I:()=>u,g:()=>h,v:()=>c});var i=n(22004),o=n(4636),a=n(15752),s=n(17584),l=n(25108),r=n(87424),d=n(13716);const c=(e,t)=>{(0,a.w)(e,"_msg",(e=>"object"==typeof e),new Set(["Object"]),t)},h=e=>{var t,n;const i=Boolean("error"===(null===(t=e._msg)||void 0===t?void 0:t._type)&&e._msg._description&&(null===(n=e._msg._description)||void 0===n?void 0:n.length)>0)&&!0===e._touched,o="string"==typeof e._hint&&e._hint.length>0,a=[];return!0===i&&a.push(`${e._id}-error`),!0===o&&a.push(`${e._id}-hint`),{hasError:i,hasHint:o,ariaDescribedBy:a}};class p extends o.A{constructor(e,t,n){super(e,t,n),this.component=e}validateAlert(e){(0,a.b)(this.component,"_alert",e)}validateTouched(e){((e,t)=>{(0,a.b)(e,"_touched",t)})(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends p{constructor(e,t,n){super(e,t,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this),onInput:this.onInput.bind(this)},this.component=e}validateAccessKey(e){(0,a.i)(this.component,"_accessKey",e)}validateAdjustHeight(e){((e,t)=>{(0,a.b)(e,"_adjustHeight",t)})(this.component,e)}validateDisabled(e){(0,a.b)(this.component,"_disabled",e),!0===e&&(0,a.c)()}validateTooltipAlign(e){(0,d.v)(this.component,e)}validateError(e){const t=e?{_description:e,_type:"error"}:void 0;this.validateMsg(t)}validateHideError(e){((e,t,n)=>{(0,a.b)(e,"_hideError",t,n)})(this.component,e,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,a.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(e){(0,s.v)(this.component,e,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,a.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(e){(0,a.i)(this.component,"_hint",e)}validateId(e){(0,a.i)(this.component,"_id",e,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==e&&void 0!==e||(0,a.j)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(e){(0,l.a)(this.component,e,{required:!0})}validateMsg(e){c(this.component,e)}validateOn(e){"object"==typeof e&&(0,a.s)(this.component,"_on",e)}validateSmartButton(e){(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(e){}(0,a.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,r.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateMsg(this.component._msg),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,(0,i.s)(e),(0,i.t)("blur",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e,t){var n;t=null!=t?t:e.target.value,(0,i.t)("change",this.host,t),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(e,t),this.valueChangeListeners.forEach((e=>e(t)))}onInput(e,t=!0,n){var o;n=null!=n?n:e.target.value,(0,i.s)(e),(0,i.t)("input",this.host,n),t&&this.setFormAssociatedValue(n),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onInput)&&this.component._on.onInput(e,n)}onClick(e){var t;(0,i.s)(e),(0,i.t)("click",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,(0,i.s)(e),(0,i.t)("focus",this.host),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}addValueChangeListener(e){this.valueChangeListeners.push(e)}}},596:(e,t,n)=>{n.d(t,{I:()=>c,a:()=>h,f:()=>d,v:()=>l});var i=n(60280),o=n(15752),a=n(25108);const s=e=>{if("object"==typeof e&&null!==e){if("string"==typeof e.label&&e.label.length>0)return e.disabled=!0===e.disabled,e.label=`${e.label}`.trim(),!1===(0,a.b)(e.label,3)&&!1===(0,a.c)(e.label)&&(0,o.a)(`Ein abweichendes Aria-Label (${e.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(e.options)||void 0===e.options.find((e=>!1===s(e)));if("number"==typeof e.label)return!0}return!1},l=(e,t,n={})=>{(0,o.g)(e,"_options",s,t,void 0,n)},r=["horizontal","vertical"],d=(e,t,n="")=>{t.forEach(((t,i)=>{const o=`${n}-${i}`;"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0&&(Array.isArray(t.options)?d(e,t.options,o):e.set(o,t))}))};class c extends i.I{constructor(e,t,n){super(e,t,n),this.component=e}validateRequired(e){((e,t)=>{(0,o.b)(e,"_required",t)})(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class h extends c{constructor(e,t,n){super(e,t,n),this.keyOptionMap=new Map,this.getOptionByKey=e=>this.keyOptionMap.get(e),this.afterPatchOptions=(e,t,n,i)=>{"_value"===i&&this.setFormAssociatedValue(e)},this.beforePatchOptions=(e,t)=>{const n=t.has("_options")?t.get("_options"):this.component.state._options;Array.isArray(n)&&n.length>0&&(this.keyOptionMap.clear(),d(this.keyOptionMap,n))},this.component=e}validateOrientation(e){(0,o.w)(this.component,"_orientation",(e=>"string"==typeof e&&r.includes(e)),new Set([`Orientation {${r.join(", ")}`]),e,{defaultValue:"vertical"})}validateOptions(e){((e,t,n={})=>{(0,o.g)(e,"_options",(e=>"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0),t,void 0,n)})(this.component,e,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateValue(e){e=(0,o.m)(e),e=Array.isArray(e)?e[0]:e,(0,o.s)(this.component,"_value",e,{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions})}componentWillLoad(){super.componentWillLoad(),this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options),this.validateValue(this.component._value)}}},79488:(e,t,n)=>{n.d(t,{i:()=>s,n:()=>r,r:()=>l});var i=n(4144),o=n(63312);const a=()=>{let e=(0,i.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,i.d)(),"KoliBri",{value:e,writable:!1})),e},s=()=>{(()=>{const e=(0,i.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,i.s)(t.includes("dev-mode=true")),(0,i.b)(t.includes("experimental-mode=true")),(0,i.c)(t.includes("color-contrast-analysis=true")))}})(),i.L.debug("\n,--. ,--. ,--. ,--. ,-----. ,--.\n| .' / ,---. | | `--' | |) /_ ,--.--. `--'\n| . ' | .-. | | | ,--. | .-. \\ | .--' ,--.\n| |\\ \\ | '-' | | | | | | '--' / | | | |\n`--' `--\xb4 `---\xb4 `--' `--' `------\xb4 `--' `--'\n\ud83d\udeb9 The accessible HTML-Standard | \ud83d\udc49 https://public-ui.github.io | 2.1.2\n\t",{forceLog:!0})},l=()=>{!0!==a().adviceShown&&(Object.defineProperty(a(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let r=()=>Math.floor(16777215*Math.random()).toString(16);"test"===o.p&&(r=()=>"nonce")},73704:(e,t,n)=>{n.r(t),n.d(t,{kol_input_checkbox:()=>b});var i=n(86104),o=n(79488),a=n(22004),s=n(60280),l=n(85372),r=n(596),d=n(15752),c=n(63312),h=n(60848);const p=["button","default","switch"];class u extends r.I{constructor(e,t,n){super(e,t,n),this.setFormAssociatedCheckboxValue=e=>{this.component._checked?this.setFormAssociatedValue(e):this.setFormAssociatedValue(null)},this.component=e}validateChecked(e){((e,t)=>{(0,d.b)(e,"_checked",t)})(this.component,e),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateIcons(e){(0,d.w)(this.component,"_icons",(e=>"object"==typeof e&&null!==e&&((0,c.i)(e.checked,1)||(0,c.i)(e.indeterminate,1)||(0,c.i)(e.unchecked,1))),new Set(["InputCheckboxIcons"]),e,{hooks:{beforePatch:(e,t,n)=>{t.set("_icons",Object.assign(Object.assign({},n.state._icons),e))}}})}validateIndeterminate(e){((e,t)=>{(0,d.b)(e,"_indeterminate",t)})(this.component,e)}validateValue(e){(0,d.s)(this.component,"_value",e),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateVariant(e){(0,d.w)(this.component,"_variant",(e=>"string"==typeof e&&p.includes(e)),new Set([`String {${p.join(", ")}`]),e)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateIcons(this.component._icons),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant)}}const b=class{async getValue(){var e;return null===(e=this.ref)||void 0===e?void 0:e.checked}render(){const{ariaDescribedBy:e}=(0,s.g)(this.state),t=(0,c.s)(this.state._label);return(0,i.h)(i.H,{key:"4bbd14ed1be5a8fcee66e53d521b60ec28fbca76",class:"kol-input-checkbox"},(0,i.h)(h.l,{key:"31c26f5e16cf054c71209e63296e4512abadb3f1",class:{checkbox:!0,[this.state._variant]:!0,"hide-label":!!this.state._hideLabel,checked:this.state._checked,indeterminate:this.state._indeterminate},"data-role":"button"===this.state._variant?"button":void 0,_accessKey:this.state._accessKey,_alert:this.state._alert,_disabled:this.state._disabled,_msg:this.state._msg,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_label:this.state._label,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("span",{key:"de4179e0c0a786ac351854f7cc56205b3fd574e7",slot:"label"},t?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(l.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("label",{key:"4490983fa447210d3c09697209b6d991ca6bb14d",slot:"input",class:"checkbox-container"},(0,i.h)(h.g,{key:"4d5dc7fda79b3b4d38dd907504b5d0afef62a6e9",class:"icon",_icons:this.state._indeterminate?this.state._icons.indeterminate:this.state._checked?this.state._icons.checked:this.state._icons.unchecked,_label:""}),(0,i.h)("input",Object.assign({key:"826bec83165ce558f104249234a974c0b40e9459",class:"checkbox-input-element"+("button"===this.state._variant?" visually-hidden":""),ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,checked:this.state._checked,disabled:this.state._disabled,id:this.state._id,indeterminate:this.state._indeterminate,name:this.state._name,required:this.state._required,tabIndex:this.state._tabIndex,type:"checkbox"},this.controller.onFacade,{onInput:this.onInput,onChange:this.onChange,onClick:void 0})))))}constructor(e){(0,i.r)(this,e),this.catchRef=e=>{this.ref=e,(0,c.a)(this.host,e)},this.onInput=e=>{var t;this._checked=!this._checked,this._indeterminate=!1;const n=this._checked?this.state._value:null;(0,a.t)("input",this.host,n),"function"==typeof(null===(t=this._on)||void 0===t?void 0:t.onInput)&&this._on.onInput(e,n)},this.onChange=e=>{var t;const n=this._checked?this.state._value:null;(0,a.t)("change",this.host,n),this.controller.setFormAssociatedCheckboxValue(n),"function"==typeof(null===(t=this._on)||void 0===t?void 0:t.onChange)&&this._on.onChange(e,n)},this._accessKey=void 0,this._alert=!0,this._checked=!1,this._hideError=!1,this._disabled=!1,this._error=void 0,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._indeterminate=void 0,this._label=void 0,this._msg=void 0,this._name=void 0,this._on=void 0,this._required=!1,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=!0,this._variant="default",this.state={_checked:!1,_hideError:!1,_icons:{checked:"codicon codicon-check",indeterminate:"codicon codicon-remove",unchecked:"codicon codicon-close"},_id:`id-${(0,o.n)()}`,_indeterminate:!1,_label:"",_value:!0,_variant:"default"},this.controller=new u(this,"checkbox",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateChecked(e){this.controller.validateChecked(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideError(e){this.controller.validateHideError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateId(e){this.controller.validateId(e)}validateIndeterminate(e){this.controller.validateIndeterminate(e)}validateLabel(e){this.controller.validateLabel(e)}validateMsg(e){this.controller.validateMsg(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateRequired(e){this.controller.validateRequired(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}validateVariant(e){this.controller.validateVariant(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_checked:["validateChecked"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_indeterminate:["validateIndeterminate"],_label:["validateLabel"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"],_variant:["validateVariant"]}}};b.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .required label > span::after,\n .required legend > span::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n input,\n textarea {\n cursor: text;\n }\n input[type=checkbox],\n input[type=color],\n input[type=file],\n input[type=radio],\n input[type=range],\n label,\n option,\n select {\n cursor: pointer;\n }\n /* input[type='checkbox'], */\n /* input[type='radio'], */\n /* input[type='range'], */\n input[type=color],\n input[type=date],\n input[type=datetime-local],\n input[type=email],\n input[type=file],\n input[type=month],\n input[type=number],\n input[type=password],\n input[type=search],\n input[type=tel],\n input[type=text],\n input[type=time],\n input[type=url],\n input[type=week],\n select,\n select[multiple] option,\n textarea {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n width: 100%;\n }\n /* needed hack for vertical alignment */\n input[type=file] {\n padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em;\n }\n /* needed hack for vertical alignment */\n select[multiple] option {\n padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em;\n }\n}\n@layer kol-component {\n :host {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n label {\n cursor: pointer;\n }\n .kol-input {\n align-items: center;\n display: grid;\n justify-items: left;\n }\n .kol-input.default,\n .kol-input.switch {\n grid-template-columns: auto 1fr;\n }\n .kol-input .input {\n align-items: center;\n display: grid;\n order: 1;\n }\n .kol-input .input div {\n display: inline-flex;\n }\n .kol-input .input input {\n margin: 0;\n }\n .kol-input label {\n order: 2;\n }\n .kol-input .hint,\n .kol-input.error > .kol-alert {\n grid-column: span 2;\n }\n .kol-input .kol-alert.error {\n order: 3;\n }\n .kol-input .hint {\n order: 4;\n }\n input {\n border-style: solid;\n border-width: 2px;\n line-height: 24px;\n }\n input[type=checkbox] {\n appearance: none;\n background-color: #fff;\n cursor: pointer;\n transition: 0.5s;\n }\n input[type=checkbox]:before {\n content: \"\";\n cursor: pointer;\n }\n input[type=checkbox]:disabled:before {\n cursor: not-allowed;\n }\n .kol-input.required .tooltip-content .span-label::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n .button {\n display: grid;\n grid-template-columns: var(--a11y-min-size) auto;\n grid-template-areas: \"error error\" \"input label\" \"hint hint\";\n }\n .button:focus-within {\n /* override global `[tabindex]:focus` style */\n cursor: inherit;\n outline-color: black;\n outline-style: solid;\n }\n .button > .error {\n grid-area: error;\n }\n .button > label {\n grid-area: label;\n }\n .button > .input {\n grid-area: input;\n }\n .button > .hint {\n grid-area: hint;\n }\n .button .icon {\n display: flex;\n align-items: center;\n justify-content: center;\n width: var(--a11y-min-size);\n height: var(--a11y-min-size);\n }\n}\n@layer kol-component {\n .default .checkbox-container {\n align-items: center;\n display: flex;\n height: var(--a11y-min-size);\n justify-content: center;\n position: relative;\n width: var(--a11y-min-size);\n }\n .default .icon {\n display: block;\n inset: auto;\n position: absolute;\n z-index: 1;\n }\n .default:not(.checked):not(.indeterminate) .icon::part(icon) {\n display: none;\n }\n .default .checkbox-input-element {\n width: 22px;\n height: 22px;\n }\n}\n@layer kol-component {\n .switch .input {\n position: relative;\n }\n .switch input[type=checkbox] {\n display: inline-block;\n height: 1.7em;\n min-width: 3.2em;\n position: relative;\n width: 3.2em;\n }\n .switch input[type=checkbox]::before {\n background-color: #000;\n height: 1.2em;\n left: calc(0.25em - 2px);\n top: calc(0.25em - 2px);\n position: absolute;\n transition: 0.5s;\n width: 1.2em;\n }\n .switch input[type=checkbox]:checked::before {\n transform: translateX(1.5em);\n }\n .switch input[type=checkbox]:indeterminate::before {\n transform: translateX(0.75em);\n }\n .switch .icon {\n cursor: pointer;\n display: flex;\n align-items: center;\n justify-content: center;\n width: 1.2em;\n height: 1.2em;\n position: absolute;\n z-index: 1;\n top: 50%;\n left: 4px;\n transform: translate(0, -50%);\n transition: 0.5s;\n color: #000;\n }\n .switch.checked .icon {\n transform: translate(1.5em, -50%);\n }\n .switch.indeterminate .icon {\n transform: translate(0.75em, -50%);\n }\n}\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n .kol-alert-wc {\n display: grid;\n }\n .kol-alert-wc .heading {\n display: flex;\n place-items: center;\n }\n .kol-alert-wc .heading > div {\n flex-grow: 1;\n }\n .close {\n /* Visible with forced colors */\n outline: transparent solid 1px;\n }\n}"}}}]);