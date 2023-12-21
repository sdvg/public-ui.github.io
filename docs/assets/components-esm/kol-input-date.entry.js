/*! * KoliBri - The accessible HTML-Standard */ import{h,F as Fragment,H as Host,r as registerInstance,g as getElement}from"./index-5dfe6d77.js";import{n as nonce}from"./dev.utils-889226ab.js";import{a as propagateFocus,s as showExpertSlot}from"./reuse-d79ab469.js";import{p as propagateSubmitEventToForm}from"./controller-b2e189a7.js";import{g as getRenderStates}from"./controller-3577ccfd.js";import{a as watchBoolean,w as watchValidator,s as setState,e as watchNumber}from"./prop.validators-c12923a5.js";import{v as validateSuggestions}from"./suggestions-dc12a293.js";import{I as InputIconController}from"./controller-icon-508a2cb1.js";import{I as InternalUnderlinedAccessKey}from"./InternalUnderlinedAccessKey-3d146073.js";import"./a11y.tipps-f14bff66.js";import"./hide-label-6593df3f.js";import"./label-8258848f.js";import"./events-fa760b68.js";import"./tab-index-9e8a3c00.js";import"./associated.controller-e642039e.js";import"./icons-44b68720.js";const inputDateTypeOptions=["date","datetime-local","month","time","week"],validateReadOnly=(t,e)=>{watchBoolean(t,"_readOnly",e)};class InputDateController extends InputIconController{constructor(t,e,n){super(t,e,n),this.validateIso8601=(t,e,n)=>watchValidator(this.component,t,(t=>void 0===t||null==t||""===t||this.validateDateString(t)),new Set(["Date","string{ISO-8601}"]),this.tryParseToString(e),{hooks:{afterPatch:t=>{"string"==typeof t&&n&&n(t)}}}),this.component=t}validateAutoComplete(t){watchValidator(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateSuggestions(t){validateSuggestions(this.component,t)}tryParseToString(t,e){const n=null!=t?t:e;if("string"==typeof n)return n;if("object"==typeof n&&n instanceof Date)switch(this.component._type){case"date":return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`;case"datetime-local":return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}T${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;case"month":return`${n.getFullYear()}-${n.getMonth()+1}`;case"time":return void 0===this.component._step||"string"==typeof this.component._step&&"60"===this.component._step||"number"==typeof this.component._step&&60===this.component._step?`${n.getHours()}:${n.getMinutes()}`:`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}return null===t?null:void 0}validateDateString(t){switch(this.component._type){case"date":return InputDateController.isoDateRegex.test(t);case"datetime-local":return InputDateController.isoLocalDateTimeRegex.test(t);case"month":return InputDateController.isoMonthRegex.test(t);case"time":return InputDateController.isoTimeRegex.test(t);case"week":return InputDateController.isoWeekRegex.test(t);default:return!1}}onChange(t){super.onChange(t),!!t.target.value!=!!this.component._value&&(this.component._value=t.target.value)}validateMax(t){watchValidator(this.component,"_max",(t=>void 0===t||null!==t&&this.validateDateString(t)),new Set(["Iso8601","Date"]),this.tryParseToString(t,"date"===this.component._type||"month"===this.component._type||"datetime-local"===this.component._type?InputDateController.DEFAULT_MAX_DATE:void 0))}validateMin(t){watchValidator(this.component,"_min",(t=>void 0===t||null!==t&&this.validateDateString(t)),new Set(["Iso8601","Date"]),this.tryParseToString(t))}validateOn(t){setState(this.component,"_on",Object.assign(Object.assign({},t),{onChange:(e,n)=>{!!n!=!!this.component._value&&(this.component._value=n),(null==t?void 0:t.onChange)&&t.onChange(e,n)}}))}validateReadOnly(t){validateReadOnly(this.component,t)}validateRequired(t){watchBoolean(this.component,"_required",t)}validateStep(t){watchNumber(this.component,"_step",t)}validateType(t){watchValidator(this.component,"_type",(t=>"string"==typeof t&&inputDateTypeOptions.includes(t)),new Set([`String {${inputDateTypeOptions.join(", ")}`]),t)}validateValue(t){this.validateValueEx(t)}validateValueEx(t,e){this.validateIso8601("_value",t,e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateLabel(this.component._label),this.validateSuggestions(this.component._suggestions),this.validateOn(this.component._on),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateStep(this.component._step),this.validateType(this.component._type),this.validateValue(this.component._value)}}InputDateController.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,InputDateController.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,InputDateController.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,InputDateController.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,InputDateController.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,InputDateController.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59);const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, option, select, textarea, .input-label) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\tkol-input-number {\n\t\tdisplay: block;\n\t}\n\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n",KolInputDate=class{async getValue(){var t;return null===(t=this.ref)||void 0===t?void 0:t.value}render(){const{ariaDescribedBy:t}=getRenderStates(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=showExpertSlot(this.state._label);return h(Host,{class:{"has-value":this.state._hasValue}},h("kol-input",{class:{[this.state._type]:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},h("span",{slot:"label"},n?h("slot",{name:"expert"}):"string"==typeof this.state._accessKey?h(Fragment,null,h(InternalUnderlinedAccessKey,{accessKey:this.state._accessKey,label:this.state._label})," ",h("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):h("span",null,this.state._label)),h("div",{slot:"input"},h("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,step:this.state._step,spellcheck:"false",type:this.state._type,value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})))))}constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?propagateSubmitEventToForm({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=!1,this._required=!1,this._smartButton=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._step=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type="date",this._value=void 0,this.state={_autoComplete:"off",_hasValue:!1,_hideError:!1,_id:`id-${nonce()}`,_label:"",_suggestions:[],_type:"datetime-local"},this.controller=new InputDateController(this,"input-date",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateStep(t){this.controller.validateStep(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValueEx(t,(t=>{""===t&&this.ref&&(this.ref.value="")}))}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};KolInputDate.style={default:defaultStyleCss};export{KolInputDate as kol_input_date};