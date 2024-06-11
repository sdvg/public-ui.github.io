/*! For license information please see controller-7b7973c3.js.LICENSE.txt */ import{I as InputIconController}from"./controller-icon-94ae3b11.js";import{b as watchBoolean,w as watchValidator,k as watchNumber,i as watchString}from"./prop.validators-28badc7d.js";const validateHasCounter=(t,e)=>{watchBoolean(t,"_hasCounter",e)};class InputPasswordController extends InputIconController{constructor(t,e,a){super(t,e,a),this.component=t}validateAutoComplete(t){watchValidator(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHasCounter(t){validateHasCounter(this.component,t)}validateMaxLength(t){watchNumber(this.component,"_maxLength",t,{min:0})}validatePattern(t){watchString(this.component,"_pattern",t)}validatePlaceholder(t){watchString(this.component,"_placeholder",t)}validateReadOnly(t){watchBoolean(this.component,"_readOnly",t)}validateRequired(t){watchBoolean(this.component,"_required",t)}validateValue(t){watchString(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}export{InputPasswordController as I,validateHasCounter as v};