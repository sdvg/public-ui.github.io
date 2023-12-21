/*! * KoliBri - The accessible HTML-Standard */ import{v as validateHasCounter,I as InputPasswordController}from"./controller-7d1c3e92.js";import{v as validateSuggestions}from"./suggestions-dc12a293.js";import{w as watchValidator}from"./prop.validators-c12923a5.js";const inputTextTypeOptions=["text","search","url","tel"];class InputTextEmailController extends InputPasswordController{constructor(t,o,e){super(t,o,e),this.component=t}validateSuggestions(t){validateSuggestions(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateSuggestions(this.component._suggestions)}}class InputTextController extends InputTextEmailController{constructor(t,o,e){super(t,o,e),this.hasError=!1,this.component=t}validateType(t){watchValidator(this.component,"_type",(t=>"string"==typeof t&&inputTextTypeOptions.includes(t)),new Set([`String {${inputTextTypeOptions.join(", ")}`]),t)}validateHasCounter(t){validateHasCounter(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}}export{InputTextEmailController as I,InputTextController as a};