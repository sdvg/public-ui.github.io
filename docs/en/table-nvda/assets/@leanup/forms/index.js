!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@leanup/lib")):"function"==typeof define&&define.amd?define(["exports","@leanup/lib"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).LeanUpForm={},t.LeanUpLib)}(this,(function(t,e){"use strict";class r{}class s extends e.SetOf{constructor(){super(r),this.formatters=this}format(t){return this.formatters.forEach((e=>{t=e.format(t)})),t}parse(t){return this.formatters.forEach((e=>{t=e.parse(t)})),t}}class a{constructor(t){this.state={message:"An unknown validation error occurred."},this.message=t}set message(t){"string"==typeof t&&t.length>0?this.state.message=t:e.Log.error("The message of the validator should be type of string with a min-length of 1.")}get message(){return this.state.message}}class o extends e.SetOf{constructor(){super(a),this.validators=this,this.validators=this}validate(t,e=!1){const r=[];try{this.validators.forEach((s=>{if(!1===s.valid(t)&&(r.push(s.message),!0===e))throw new Error("Only one error is enough. Be quick and stop the execution of other validation functions.")}))}catch(t){}return r}}class n{constructor(t){this.changeListeners=new e.SetOf(Function),this._errors=new Set,this._parentForms=new Set,this._name="unnamed",this._validationHandler=new o,this.name=t}get name(){return this._name}set name(t){if("string"!=typeof t)throw new Error("The name of a control must be a string.");if(!(t.length>0))throw new Error("The name of a control must have a min-length of 1.");this._name=t}get error(){return this._errors.size>0?this._errors.values().next().value:null}getErrors(){return this._errors}get id(){let t=this.name;return this._parentForms.size>0&&(t=`${this._parentForms.values().next().value.id}_${t}`),t}get valid(){return 0===this._errors.size}findMeInParentForm(t){if(this===t)return!0;if(t instanceof h){const e=[];return this._parentForms.forEach((r=>{!0===r.findMeInParentForm(t)&&e.push(r)})),e.length>0}return!1}addParentForm(t){if(!1!==this._parentForms.has(t))throw new Error(`An form control with the name '${t.name}' already exists.`);if(!1!==t.findMeInParentForm(this))throw new Error(`The same form control (${t.name}) leads to a form control loop.`);this._parentForms.add(t)}removeParentForm(t){if(!0!==this._parentForms.has(t))throw new Error(`An form control with the name '${t.name}' does not exists.`);this._parentForms.delete(t)}setValidationHandler(t,e=null){this._validationHandler=t,this.validate(e),this.notify()}validate(t){this._errors.clear();this._validationHandler.validate(t).forEach((t=>{this._errors.add(t)})),this._parentForms.forEach((t=>{t.validate(t.getData())}))}notify(...t){this.changeListeners.forEach((e=>{e(...t)})),this._parentForms.forEach((t=>{t.notify(t.getData())}))}}var i;t.InputControlTypes=void 0,(i=t.InputControlTypes||(t.InputControlTypes={})).checkbox="checkbox",i.date="date",i.email="email",i.number="number",i.password="password",i.radio="radio",i.select="select",i.slider="slider",i.text="text";class l extends n{constructor(t,e){super(t),this._disabled=!1,this._label="",this._mandatory=!1,this._placeholder="",this._readonly=!1,this._type="text",this._value=null,this._oldValue=null,this._formatHandler=new s,"object"==typeof e&&null!==e&&(this.disabled=!0===e.disabled,this.label="string"==typeof e.label?e.label:"",this.mandatory=!0===e.mandatory,this.placeholder="string"==typeof e.placeholder?e.placeholder:"",this.readonly=!0===e.disabled,this.type="string"==typeof e.type?e.type:"text",this.value=void 0!==e.value?e.value:null)}get disabled(){return this._disabled}set disabled(t){if("boolean"!=typeof t)throw new Error("The disabled flag of a input control must be a string.");this._disabled=t,this.notify()}get mandatory(){return this._mandatory}set mandatory(t){if("boolean"!=typeof t)throw new Error("The mandatory flag of a input control must be a string.");this._mandatory=t,this.notify()}get readonly(){return this._readonly}set readonly(t){if("boolean"!=typeof t)throw new Error("The readonly flag of a input control must be a string.");this._readonly=t,this.notify()}get label(){return this._label}set label(t){if("string"!=typeof t)throw new Error("The label of a input control must be a string.");this._label=t,this.notify()}get placeholder(){return this._placeholder}set placeholder(t){if("string"!=typeof t)throw new Error("The placeholder of a input control must be a string.");this._placeholder=t,this.notify()}get type(){return this._type.toString()}set type(t){if("string"!=typeof t)throw new Error("The type of a input control must be a string.");switch(t){case"checkbox":case"date":case"email":case"number":case"password":case"radio":case"select":case"slider":case"text":this._type=t,this.notify();break;default:throw new Error("The type of a input control must be a of the following types: ???.")}}get oldValue(){return this._oldValue}get value(){return this._value}set value(t){this._oldValue=this._value,this._value=t,this.validate(t),this.notify()}get modelValue(){return this.value}set modelValue(t){this.value=t}get viewValue(){return this._formatHandler.format(this.modelValue)}set viewValue(t){this.modelValue=this._formatHandler.parse(t)}notify(){super.notify(this._value,this._oldValue)}setValidationHandler(t){super.setValidationHandler(t,this.value)}setFormatHandler(t){this._formatHandler=t}}class h extends n{constructor(){super(...arguments),this.controls=new Set}get disabled(){return 0===Array.from(this.controls).filter((t=>!1===t.disabled)).length}set disabled(t){this.controls.forEach((e=>{e.disabled=t}))}get readonly(){return 0===Array.from(this.controls).filter((t=>!1===t.readonly)).length}set readonly(t){this.controls.forEach((e=>{e.readonly=t}))}get valid(){return super.valid&&0===Array.from(this.controls).filter((t=>!1===t.valid)).length}addControl(t){if(!1!==this.controls.has(t))throw new Error(`A control with the same name '${t.name}' already exists.`);t.addParentForm(this),this.controls.add(t)}removeControl(t){if(!0!==this.controls.has(t))throw new Error(`A control with the name '${t.name}' does not exists.`);t instanceof n&&(t.removeParentForm(this),this.controls.delete(t))}getControls(){return Array.from(this.controls)}getControl(t){return Array.from(this.controls).find((e=>e.name===t))}getForms(){return Array.from(this.controls).filter((t=>t instanceof h))}getForm(t){return Array.from(this.getForms()).find((e=>e.name===t))}getInputs(){return Array.from(this.controls).filter((t=>t instanceof l))}getInput(t){return Array.from(this.getInputs()).find((e=>e.name===t))}setData(t){this.controls.forEach((e=>{if(void 0!==t[e.name])if(e instanceof h)e.setData(t[e.name]);else{if(!(e instanceof l))throw new Error("The control is neither an instance of FormControl or InputControl.");e.value=t[e.name]}}))}getData(){const t={};return this.controls.forEach((e=>{if(e instanceof h)t[e.name]=e.getData();else{if(!(e instanceof l))throw new Error("The control is neither an instance of FormControl or InputControl.");t[e.name]=e.value}})),t}setValidationHandler(t){super.setValidationHandler(t)}}class d{static createForm(t,e){const r=new h(t);for(const t in e)if(e.hasOwnProperty(t))if("object"==typeof e[t]&&null!==e[t])r.addControl(d.createForm(t,e[t]));else{const s=new l(t,{value:e[t]});r.addControl(s)}return r}}class u extends r{constructor(){super(...arguments),this.regExp=/([A-Z0-9]{1,4})/gi}format(t){if("string"==typeof t){const e=t.match(this.regExp);if(Array.isArray(e))return null==e?void 0:e.join(" ")}return t}parse(t){return"string"==typeof t?t.replace(/ /g,""):t}}const c=new u;class f extends a{constructor(t="Please enter a value."){super(t)}valid(t){return null!=t&&t.toString().length>0}}const m=new f;class p extends a{valid(t){return!1===m.valid(t)||this.validate(t)}}class g extends p{constructor(t,e="Please enter a valid value."){super(e),this._regExp=/^/g,this.regExp=t}set regExp(t){t instanceof RegExp?this._regExp=t:e.Log.debug("The regExp of the pattern validator should be type of RegExp.")}get regExp(){return this._regExp}validate(t){return this.regExp.test(t)}}const y=/^\d+$/;class v extends g{constructor(t="Please enter a number."){super(y,t)}}const _=new v,w=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;t.AbstractFormatter=r,t.AbstractValidator=a,t.DEFAULT_DIGITS_VALIDATOR=_,t.DEFAULT_IBAN_FORMATTER=c,t.DEFAULT_REQUIRED_VALIDATOR=m,t.DIGITS_VALIDATION_REGEXP=y,t.DigitsValidator=v,t.EMAIL_VALIDATION_REGEXP=w,t.EmailValidator=class extends g{constructor(t="The email address has not the correct format."){super(w,t)}},t.FormControl=h,t.FormFactory=d,t.FormatHandler=s,t.IbanFormatter=u,t.InputControl=l,t.IsTrueValidator=class extends p{constructor(t="Please confirm the note."){super(t)}validate(t){return!0===t}},t.MaxLengthValidator=class extends p{constructor(t,e=`The entry must not be longer than ${t} characters.`){super(e),this.maxLength=t}validate(t){return"string"==typeof t&&t.length<=this.maxLength}},t.MinLengthValidator=class extends p{constructor(t,e=`The entry must not be shorter than ${t} characters.`){super(e),this.minLength=t}validate(t){return"string"==typeof t&&t.length>=this.minLength}},t.NonRequiredValidator=p,t.NotPatternValidator=class extends g{validate(t){return!1===super.validate(t)}},t.NotValidator=class extends p{constructor(t,e){super(e),this.validator=t}validate(t){return!1===this.validator.valid(t)}},t.PatternValidator=g,t.RequiredValidator=f,t.ValidationHandler=o,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
