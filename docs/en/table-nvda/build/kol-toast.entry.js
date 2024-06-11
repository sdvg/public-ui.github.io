/*! For license information please see kol-toast.entry.js.LICENSE.txt */ import{r as t,h as i,H as s}from"./index-330c31f9.js";import{v as e}from"./has-closer-a6d06cff.js";import{v as a}from"./show-8a6bea2a.js";import{b as o,w as n,s as h,e as r,a as l}from"./prop.validators-0a66a178.js";import{w as d}from"./validation-441b613f.js";import"./a11y.tipps-beae7792.js";import"./dev.utils-5b0de6da.js";import"./reuse-c2156413.js";import"./index-3711603c.js";const p=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host>div{background-color:#fff;height:0;left:0;position:fixed;top:0;width:100%;z-index:200}:host>div>kol-alert{display:block;margin:auto;max-width:750px}:host>div>kol-button-wc{display:block;margin:auto;position:relative;top:0;width:1em}",u=class{constructor(i){t(this,i),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{this.close()}),this.state._showDuration))},this.close=()=>{var t;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(t){o(this,"_alert",t)}validateHasCloser(t){e(this,t)}validateHeading(t){n(this,"_heading",t)}validateLevel(t){d(this,t)}validateOn(t){"object"!=typeof t||"function"!=typeof(null==t?void 0:t.onClose)&&!0!==t.onClose||h(this,"_on",{onClose:t.onClose})}validateShow(t){a(this,t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(t){r(this,"_showDuration",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(t){l(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return i(s,null,this.state._show&&i("div",null,i("kol-alert",{_alert:this.state._alert,_heading:this.state._heading,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on},i("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};u.style={default:p};export{u as kol_toast};