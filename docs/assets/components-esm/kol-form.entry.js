/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h}from"./index-e9d20d00.js";import{a as translate}from"./i18n-0541aaa5.js";import{a as watchBoolean,d as watchString}from"./prop.validators-ddc1812f.js";import"./index-8700da1a.js";import"./dev.utils-04fa5759.js";import"./reuse-d79ab469.js";import"./a11y.tipps-69a12284.js";const KolForm=class{constructor(t){registerInstance(this,t),this.onSubmit=t=>{var e,i;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=this.state._on)||void 0===i||i.onSubmit(t))},this.onReset=t=>{var e,i;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onReset)&&(null===(i=this.state._on)||void 0===i||i.onReset(t))},this._on=void 0,this._requiredText=!0,this.state={}}render(){return h("form",{method:"post",onSubmit:this.onSubmit,onReset:this.onReset,autoComplete:"off",noValidate:!0},!0===this.state._requiredText?h("p",null,h("kol-indented-text",null,translate("kol-form-description"))):"string"==typeof this.state._requiredText&&this.state._requiredText.length>0?h("p",null,h("kol-indented-text",null,this.state._requiredText)):null,h("slot",null))}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRequiredText(t){"boolean"==typeof t?watchBoolean(this,"_requiredText",t):watchString(this,"_requiredText",t)}componentWillLoad(){this.validateOn(this._on),this.validateRequiredText(this._requiredText)}static get watchers(){return{_on:["validateOn"],_requiredText:["validateRequiredText"]}}};export{KolForm as kol_form};