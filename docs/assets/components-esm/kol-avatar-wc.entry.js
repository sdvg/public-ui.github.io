/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-2c046ff1.js";import{v as validateLabel}from"./label-35927418.js";import{v as validateImageSource}from"./image-source-a6d9c13f.js";import{a as translate}from"./i18n-2b2ccdd6.js";import"./a11y.tipps-255c885e.js";import"./dev.utils-e98368e1.js";import"./reuse-c2156413.js";import"./prop.validators-e3c93395.js";import"./index-37b5cbcf.js";import"./index-d8ac1088.js";const formatNameAsInitial=a=>0===a.length?"":a[0].toUpperCase(),formatLabelAsInitials=a=>{const t=a.split(/\s+/),s=t.at(0),e=t.at(-1);return t.length>=2&&s&&e?`${formatNameAsInitial(s)}${formatNameAsInitial(e)}`:formatNameAsInitial(a)},KolAvatarWc=class{constructor(a){registerInstance(this,a),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return h(Host,null,h("div",{"aria-description":this.state._label,class:"container"},this.state._src?h("kol-image",{_alt:translate("kol-avatar-alt",{placeholders:{name:this.state._label}}),_src:this.state._src,class:"image"}):h("span",{"aria-hidden":"true",class:"initials"},formatLabelAsInitials(this.state._label))))}validateSrc(a){validateImageSource(this,a)}validateLabel(a){validateLabel(this,a)}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}};export{KolAvatarWc as kol_avatar_wc};