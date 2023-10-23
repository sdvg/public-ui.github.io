/*! * KoliBri - The accessible HTML-Standard */ import{v as validateHasCounter,I as InputPasswordController}from"./controller-80bbd1af.js";import{v as validateHideError}from"./controller-d3cc38da.js";import{v as validateSuggestions}from"./suggestions-0dffe4b8.js";import{a as a11yHint}from"./a11y.tipps-ba9cd030.js";import{w as watchValidator}from"./prop.validators-3d72b47e.js";class InputTextEmailController extends InputPasswordController{constructor(t,o,e){super(t,o,e),this.component=t}validateHideError(t){validateHideError(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&a11yHint("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateSuggestions(t){validateSuggestions(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateSuggestions(this.component._suggestions)}}class InputTextController extends InputTextEmailController{constructor(t,o,e){super(t,o,e),this.hasError=!1,this.component=t}validateType(t){watchValidator(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}validateHasCounter(t){validateHasCounter(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateHideError(this.component._hideError),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}}export{InputTextEmailController as I,InputTextController as a};