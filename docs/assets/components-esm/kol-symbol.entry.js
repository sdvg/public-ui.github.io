/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{a as translate}from"./i18n-45aa3c6d.js";import{v as validateLabel}from"./label-f1600f9b.js";import{d as watchString}from"./prop.validators-fba03cca.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";import"./a11y.tipps-3205ae7d.js";import"./dev.utils-c0c1c4e5.js";import"./reuse-c2156413.js";const KolSymbol=class{constructor(a){registerInstance(this,a),this._ariaLabel=void 0,this._label=void 0,this._symbol=void 0,this.state={_label:translate("kol-warning"),_symbol:"…"}}render(){return h(Host,null,h("span",{"aria-label":this.state._label,role:"term"},this.state._symbol))}validateAriaLabel(a){this.validateLabel(a)}validateLabel(a){validateLabel(this,a)}validateSymbol(a){watchString(this,"_symbol",a,{required:!0})}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateSymbol(this._symbol)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_symbol:["validateSymbol"]}}};export{KolSymbol as kol_symbol};