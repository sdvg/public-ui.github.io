/*! For license information please see 6506.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6506],{86506:(i,t,o)=>{o.r(t),o.d(t,{kol_toast:()=>n});var e=o(99459),a=o(27289),s=o(70104),l=o(65815);const n=class{constructor(i){(0,e.r)(this,i),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{clearTimeout(this.durationTimeout),this.close()}),this.state._showDuration))},this.close=()=>{var i;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(i=this._on)||void 0===i?void 0:i.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(i){(0,a.b)(this,"_alert",i)}validateHasCloser(i){(0,a.b)(this,"_hasCloser",i)}validateHeading(i){(0,a.w)(this,"_heading",i)}validateLevel(i){(0,s.w)(this,i)}validateOn(i){if("object"==typeof i&&null!==i){(0,l.f)("[KolToast] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const t={};"function"!=typeof i.onClose&&!0!==i.onClose||(t.onClose=i.onClose),(0,a.s)(this,"_on",t)}}validateShow(i){(0,a.b)(this,"_show",i,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(i){(0,a.e)(this,"_showDuration",i,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(i){(0,a.a)(this,"_type",(i=>"string"==typeof i&&("default"===i||"error"===i||"info"===i||"success"===i||"warning"===i)),new Set("String {success, info, warning, error}"),i)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return(0,e.h)(e.H,null,this.state._show&&(0,e.h)("div",null,(0,e.h)("kol-alert",{_alert:this.state._alert,_heading:this.state._heading,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on},(0,e.h)("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};n.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}:host{display:block}:host>div{height:0;left:0;position:fixed;top:0;width:100%;z-index:200}:host>div>kol-alert{display:block;margin:auto;max-width:750px;padding:calc(4 * var(--kolibri-spacing))}:host>div>kol-button-wc{display:block;margin:auto;position:relative;top:0;width:1em}"}},70104:(i,t,o)=>{o.d(t,{w:()=>a});var e=o(27289);const a=(i,t)=>{(0,e.a)(i,"_level",(i=>"number"==typeof i&&1<=i&&i<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);