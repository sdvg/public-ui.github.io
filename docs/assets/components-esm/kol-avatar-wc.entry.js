/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{a as translate}from"./i18n-a1e6f17e.js";import{v as validateImageSource}from"./image-source-02189a77.js";import{v as validateLabel}from"./label-14bf9651.js";import"./index-2bab8f5e.js";import"./index-accc567c.js";import"./a11y.tipps-de9972d7.js";import"./dev.utils-eba8f2da.js";import"./reuse-c2156413.js";import"./prop.validators-eed6b0ae.js";const formatNameAsInitial=a=>0===a.length?"":a[0].toUpperCase(),formatLabelAsInitials=a=>{const t=a.split(/\s+/),e=t.at(0),s=t.at(-1);return t.length>=2&&e&&s?`${formatNameAsInitial(e)}${formatNameAsInitial(s)}`:formatNameAsInitial(a)},KolAvatarWc=class{constructor(a){registerInstance(this,a),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return h(Host,null,h("div",{"aria-label":translate("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?h("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):h("span",{"aria-hidden":"true",class:"initials"},formatLabelAsInitials(this.state._label))))}validateSrc(a){validateImageSource(this,a)}validateLabel(a){validateLabel(this,a)}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}};export{KolAvatarWc as kol_avatar_wc};