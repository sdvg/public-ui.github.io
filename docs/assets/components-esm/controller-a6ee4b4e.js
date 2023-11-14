/*! * KoliBri - The accessible HTML-Standard */ import{I as InputController,v as validateHideError}from"./controller-7a31f90c.js";import{c as watchJsonArrayString,a as watchBoolean,w as watchValidator,m as mapString2Unknown,s as setState}from"./prop.validators-4ca765d6.js";import{h as hasEnoughReadableChars,c as containsOnlyNumbers}from"./label-8090b77e.js";import{a as a11yHint}from"./a11y.tipps-db7fb79f.js";import{S as STATE_CHANGE_EVENT}from"./reuse-b3566e4c.js";const orientationOptions=["horizontal","vertical"],validateInputSelectOptions=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===hasEnoughReadableChars(t.label,3)&&!1===containsOnlyNumbers(t.label)&&a11yHint(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===validateInputSelectOptions(t)));if("number"==typeof t.label)return!0}return!1},validateOptions=(t,e,o={})=>{watchJsonArrayString(t,"_options",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),e,void 0,o)},validateOptionsWithOptgroup=(t,e,o={})=>{watchJsonArrayString(t,"_options",validateInputSelectOptions,e,void 0,o)},validateRequired=(t,e)=>{watchBoolean(t,"_required",e)},fillKeyOptionMap=(t,e,o="")=>{e.forEach(((e,i)=>{const a=`${o}-${i}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?fillKeyOptionMap(t,e.options,a):t.set(a,e))}))};class InputCheckboxRadioController extends InputController{constructor(t,e,o){super(t,e,o),this.component=t}validateHideError(t){validateHideError(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&a11yHint("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateRequired(t){validateRequired(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class InputRadioController extends InputCheckboxRadioController{constructor(t,e,o){super(t,e,o),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchOptions=(t,e)=>{const o=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(o)&&o.length>0){this.keyOptionMap.clear(),fillKeyOptionMap(this.keyOptionMap,o);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,o)){const t=o[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){watchValidator(this.component,"_orientation",(t=>"string"==typeof t&&orientationOptions.includes(t)),new Set([`Orientation {${orientationOptions.join(", ")}`]),t,{defaultValue:"vertical"})}validateOptions(t){validateOptions(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateValue(t){t=mapString2Unknown(t),t=Array.isArray(t)?t[0]:t,setState(this.component,"_value",t,{beforePatch:this.beforePatchOptions}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(STATE_CHANGE_EVENT)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options),this.validateHideError(this.component._hideError),this.validateValue(this.component._value)}}export{InputCheckboxRadioController as I,InputRadioController as a,fillKeyOptionMap as f,validateOptionsWithOptgroup as v};