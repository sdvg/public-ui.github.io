/*! * KoliBri - The accessible HTML-Standard */ import{v as validateHasCounter,I as InputPasswordController}from"./controller-00d56583.js";import{v as validateHideError}from"./controller-8b71bf6d.js";import{v as validateSuggestions}from"./suggestions-50aff467.js";import{a as a11yHint}from"./a11y.tipps-68791110.js";import{w as watchValidator}from"./prop.validators-3fb6bedf.js";const inputTextTypeOptions=["text","search","url","tel"];class InputTextEmailController extends InputPasswordController{constructor(t,o,e){super(t,o,e),this.component=t}validateHideError(t){validateHideError(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&a11yHint("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateSuggestions(t){validateSuggestions(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateSuggestions(this.component._suggestions)}}class InputTextController extends InputTextEmailController{constructor(t,o,e){super(t,o,e),this.hasError=!1,this.component=t}validateType(t){watchValidator(this.component,"_type",(t=>"string"==typeof t&&inputTextTypeOptions.includes(t)),new Set([`String {${inputTextTypeOptions.join(", ")}`]),t)}validateHasCounter(t){validateHasCounter(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateHideError(this.component._hideError),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}}export{InputTextEmailController as I,InputTextController as a};