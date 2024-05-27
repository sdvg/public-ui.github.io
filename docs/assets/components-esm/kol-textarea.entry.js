/*! * KoliBri - The accessible HTML-Standard */ import{h,F as Fragment,H as Host,r as registerInstance,g as getElement}from"./index-40be4caf.js";import{n as nonce}from"./dev.utils-60f0cf1e.js";import{I as InputController,g as getRenderStates}from"./controller-e9be8fce.js";import{I as InternalUnderlinedAccessKey}from"./InternalUnderlinedAccessKey-761081d1.js";import{b as watchBoolean,k as watchNumber,i as watchString,w as watchValidator,s as setState}from"./prop.validators-28badc7d.js";import{v as validateRows}from"./rows-7ae440b2.js";import{l as KolInputTag}from"./component-names-791b1799.js";import{s as showExpertSlot,a as propagateFocus}from"./reuse-b66836de.js";import"./dev.utils-1ca991a2.js";import"./events-29e84d75.js";import"./associated.controller-78cca038.js";import"./hide-label-80a2c6d3.js";import"./label-af70fdc5.js";import"./tab-index-4c88df26.js";import"./tooltip-align-0c6ee8c8.js";import"./align-d1a156ea.js";import"./index-4a3076fc.js";const cssResizeOptions=["both","horizontal","vertical","none"];class TextareaController extends InputController{constructor(e,t,n){super(e,t,n),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=e}validateHasCounter(e){watchBoolean(this.component,"_hasCounter",e,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(e){watchNumber(this.component,"_maxLength",e,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(e){watchString(this.component,"_placeholder",e)}validateReadOnly(e){watchBoolean(this.component,"_readOnly",e)}validateResize(e){watchValidator(this.component,"_resize",(e=>"string"==typeof e&&cssResizeOptions.includes(e)),new Set(`String {${cssResizeOptions.join(", ")}`),e)}validateRequired(e){watchBoolean(this.component,"_required",e)}validateRows(e){validateRows(this.component,e)}validateValue(e){watchString(this.component,"_value",e,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .required label > span::after,\n .required legend > span::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n input,\n textarea {\n cursor: text;\n }\n input[type=checkbox],\n input[type=color],\n input[type=file],\n input[type=radio],\n input[type=range],\n label,\n option,\n select {\n cursor: pointer;\n }\n /* input[type='checkbox'], */\n /* input[type='radio'], */\n /* input[type='range'], */\n input[type=color],\n input[type=date],\n input[type=datetime-local],\n input[type=email],\n input[type=file],\n input[type=month],\n input[type=number],\n input[type=password],\n input[type=search],\n input[type=tel],\n input[type=text],\n input[type=time],\n input[type=url],\n input[type=week],\n select,\n select[multiple] option,\n textarea {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n width: 100%;\n }\n /* needed hack for vertical alignment */\n input[type=file] {\n padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em;\n }\n /* needed hack for vertical alignment */\n select[multiple] option {\n padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em;\n }\n}\n@layer kol-component {\n .kol-input {\n display: grid;\n }\n .kol-input .input-slot {\n flex-grow: 1;\n }\n input:not([type=checkbox], [type=radio]),\n select:not([multiple], [size]) {\n height: 2.75em;\n }\n input:focus,\n option:focus,\n select:focus,\n textarea:focus {\n outline: 0;\n }\n .input {\n display: flex;\n align-items: center;\n }\n .input > .kol-icon {\n display: grid;\n height: var(--a11y-min-size);\n place-items: center;\n }\n .kol-input.required .input-tooltip .span-label::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n :host {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n}",KolTextareaDefaultStyle0=defaultStyleCss,increaseTextareaHeight=e=>{e.style.overflow="hidden";const t=e.rows,n=e.clientHeight/t;e.rows=1;const a=Math.round(e.scrollHeight/n);return e.rows=t,a},KolTextarea=class{async getValue(){var e;return null===(e=this.ref)||void 0===e?void 0:e.value}render(){const{ariaDescribedBy:e}=getRenderStates(this.state),t=showExpertSlot(this.state._label);return h(Host,{key:"3fb37506318e70c539392ce92a3b085cbb70d494",class:{"kol-textarea":!0,"has-value":this.state._hasValue}},h(KolInputTag,{key:"4f62032fa24ba9174666ac5c461a72e1971d4737",class:{textarea:!0,"hide-label":!!this.state._hideLabel,"has-counter":!!this.state._hasCounter},_accessKey:this.state._accessKey,_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_label:this.state._label,_maxLength:this.state._maxLength,_msg:this.state._msg,_readOnly:this.state._readOnly,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var e;return null===(e=this.ref)||void 0===e?void 0:e.focus()},role:"presentation"},h("span",{key:"1736aece511a856b04798f5588fde232151c3ccf",slot:"label"},t?h("slot",{name:"expert"}):"string"==typeof this.state._accessKey?h(Fragment,null,h(InternalUnderlinedAccessKey,{accessKey:this.state._accessKey,label:this.state._label})," ",h("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):h("span",null,this.state._label)),h("div",{key:"a8170f1cff8b1c6dfebc85f8fb682cf9360256c2",slot:"input"},h("textarea",Object.assign({key:"206e2e545f4e103cf719f5fb68bc837b18d6d514",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onInput:this.onInput,style:{resize:this.state._resize},value:this.state._value})))))}constructor(e){registerInstance(this,e),this.catchRef=e=>{this.ref=e,propagateFocus(this.host,this.ref)},this.onInput=e=>{this.ref instanceof HTMLTextAreaElement&&(setState(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=increaseTextareaHeight(this.ref)),this.controller.onFacade.onInput(e))},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._maxLength=void 0,this._msg=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=!1,this._resize="vertical",this._required=!1,this._rows=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${nonce()}`,_label:"",_resize:"vertical"},this.controller=new TextareaController(this,"textarea",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAdjustHeight(e){this.controller.validateAdjustHeight(e)}validateAlert(e){this.controller.validateAlert(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHasCounter(e){this.controller.validateHasCounter(e)}validateHideError(e){this.controller.validateHideError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateId(e){this.controller.validateId(e)}validateLabel(e){this.controller.validateLabel(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateMsg(e){this.controller.validateMsg(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateResize(e){this.controller.validateResize(e)}validateRequired(e){this.controller.validateRequired(e)}validateRows(e){this.controller.validateRows(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentDidLoad(){setTimeout((()=>{var e;this.ref&&(this._rows=(null===(e=this.state)||void 0===e?void 0:e._rows)&&this.state._rows>increaseTextareaHeight(this.ref)?this.state._rows:increaseTextareaHeight(this.ref))}),0)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((e=>this.state._hasValue=!!e))}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_msg:["validateMsg"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolTextarea.style={default:KolTextareaDefaultStyle0};export{KolTextarea as kol_textarea};