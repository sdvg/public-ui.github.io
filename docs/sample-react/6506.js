/*! For license information please see 6506.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[6506],{6506:(t,e,i)=>{i.r(e),i.d(e,{kol_toast:()=>l});var a=i(7747),s=i(4300),o=i(2712),n=i(5858),h=i(4807);const l=class{constructor(t){(0,a.r)(this,t),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{this.close()}),this.state._showDuration))},this.close=()=>{var t;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(t){(0,s.b)(this,"_alert",t)}validateHasCloser(t){((t,e)=>{(0,s.b)(t,"_hasCloser",e)})(this,t)}validateHeading(t){(0,s.w)(this,"_heading",t)}validateLevel(t){(0,o.w)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,n.f)("[KolToast] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),(0,s.s)(this,"_on",e)}}validateShow(t){(0,h.v)(this,t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(t){(0,s.e)(this,"_showDuration",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(t){(0,s.a)(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return(0,a.h)(a.H,null,this.state._show&&(0,a.h)("div",null,(0,a.h)("kol-alert",{_alert:this.state._alert,_heading:this.state._heading,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on},(0,a.h)("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};l.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host>div{background-color:#fff;height:0;left:0;position:fixed;top:0;width:100%;z-index:200}:host>div>kol-alert{display:block;margin:auto;max-width:750px}:host>div>kol-button-wc{display:block;margin:auto;position:relative;top:0;width:1em}"}},4807:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(4300);const s=(t,e,i)=>{(0,a.b)(t,"_show",e,i)}},2712:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(4300);const s=(t,e)=>{(0,a.a)(t,"_level",(t=>"number"==typeof t&&0<=t&&t<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);