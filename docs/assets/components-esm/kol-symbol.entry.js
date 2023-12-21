/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5dfe6d77.js";import{a as translate}from"./i18n-9a4c8edc.js";import{v as validateLabel}from"./label-8258848f.js";import{d as watchString}from"./prop.validators-c12923a5.js";import"./index-12eec578.js";import"./dev.utils-889226ab.js";import"./reuse-d79ab469.js";import"./a11y.tipps-f14bff66.js";const KolSymbol=class{constructor(t){registerInstance(this,t),this._label=void 0,this._symbol=void 0,this.state={_label:translate("kol-warning"),_symbol:"…"}}render(){return h(Host,null,h("span",{"aria-label":this.state._label,role:"term"},this.state._symbol))}validateLabel(t){validateLabel(this,t)}validateSymbol(t){watchString(this,"_symbol",t,{required:!0})}componentWillLoad(){this.validateLabel(this._label),this.validateSymbol(this._symbol)}static get watchers(){return{_label:["validateLabel"],_symbol:["validateSymbol"]}}};export{KolSymbol as kol_symbol};