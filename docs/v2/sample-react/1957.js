/*! For license information please see 1957.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1957],{5181:(e,t,a)=>{a.d(t,{v:()=>i});var l=a(8921);const i=(e,t)=>{(0,l.b)(e,"_hasCloser",t)}},7186:(e,t,a)=>{a.d(t,{t:()=>s});var l=a(9177),i=a(1330);let s=(e,t)=>{var a;return(null!==(a=(0,l.g)())&&void 0!==a?a:(0,l.i)("de")).translate(e,t)};"test"===i.p&&(s=e=>e)},1957:(e,t,a)=>{a.r(t),a.d(t,{kol_alert_wc:()=>u});var l=a(6981),i=a(7186),s=a(9157),o=a(3189),n=a(3713),r=a(8921),c=a(5181),d=a(6385);const h=["default","info","success","warning","error"],b=["card","msg"],v=e=>(0,l.h)(o.g,{class:"heading-icon",_label:"string"==typeof e.label&&e.label.length>0?"":e.ariaLabel,_icons:e.icon}),f=e=>{switch(e.type){case"error":return(0,l.h)(v,{ariaLabel:(0,i.t)("kol-error"),icon:"codicon codicon-error",label:e.label});case"info":return(0,l.h)(v,{ariaLabel:(0,i.t)("kol-info"),icon:"codicon codicon-info",label:e.label});case"warning":return(0,l.h)(v,{ariaLabel:(0,i.t)("kol-warning"),icon:"codicon codicon-warning",label:e.label});case"success":return(0,l.h)(v,{ariaLabel:(0,i.t)("kol-success"),icon:"codicon codicon-pass",label:e.label});default:return(0,l.h)(v,{ariaLabel:(0,i.t)("kol-message"),icon:"codicon codicon-comment",label:e.label})}},u=class{constructor(e){(0,l.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._label=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{n.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){n.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,l.h)(l.H,{key:"ecb2cd45b14f92cc1c337d2b81382a8cc820e869",class:{"kol-alert-wc":!0,alert:!0,[this.state._type]:!0,[this.state._variant]:!0,hasCloser:!!this.state._hasCloser},role:this.state._alert?"alert":void 0},(0,l.h)("div",{key:"b190de9f62c33d970daabc1b5638132da33c936e",class:"heading"},(0,l.h)(f,{key:"e1da8b194a13ec6f9270efc2234caadcee77e827",label:this.state._label,type:this.state._type}),(0,l.h)("div",{key:"7ffd000cfbe218c582791e8646ff5caf9bad5b25",class:"heading-content"},"string"==typeof this.state._label&&(null===(e=this.state._label)||void 0===e?void 0:e.length)>0&&(0,l.h)(o.b,{key:"f9e7c598243a4868b80b248fdf4dfdeed5d24a2b",_label:this.state._label,_level:this.state._level}),"msg"===this.state._variant&&(0,l.h)("div",{key:"b5b70319b6c7747872e9d8072a1fe7565938f7c1",class:"content"},(0,l.h)("slot",{key:"b75edf24762d861147d5ee5fa0701b4c5a30eed1"}))),this.state._hasCloser&&(0,l.h)(o.c,{key:"cd46afacd1afbc415e1184604b3b1ac9af901c97",class:"close",_hideLabel:!0,_icons:{left:{icon:"codicon codicon-close"}},_label:(0,i.t)("kol-close-alert",{placeholders:{label:this.state._label}}),_on:this.on,_tooltipAlign:"left"})),"card"===this.state._variant&&(0,l.h)("div",{key:"2a9670974b00907497abd255e02194301df0c0a2",class:"content"},(0,l.h)("slot",{key:"9bd3de7e485b9865d5f74dfbce4f421d4b1dc9b5"})))}validateAlert(e){(0,r.b)(this,"_alert",e)}validateHasCloser(e){(0,c.v)(this,e)}validateLabel(e){(0,d.v)(this,e)}validateLevel(e){(0,s.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,r.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,r.w)(this,"_type",(e=>"string"==typeof e&&h.includes(e)),new Set(`String {${h.join(", ")}`),e)}validateVariant(e){(0,r.w)(this,"_variant",(e=>"string"==typeof e&&b.includes(e)),new Set(`AlertVariant {${b.join(", ")}`),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}}},6385:(e,t,a)=>{a.d(t,{a:()=>h,b:()=>n,c:()=>r,h:()=>i,v:()=>d});var l=a(8921);const i=[0,1,2,3,4,5,6],s=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function n(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(s))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return o.test(e)}const c=new Set(["string"]),d=(e,t,a={})=>{(0,l.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,a,i,s)=>{var o,c;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,i,s)),"string"==typeof t&&!1===n(t,3)&&!1===r(t)&&(0,l.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,l.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(a))},h=d},1330:(e,t,a)=>{a.d(t,{S:()=>o,a:()=>n,b:()=>s,c:()=>l,h:()=>c,i:()=>i,p:()=>r,s:()=>d});const l=e=>"object"==typeof e&&null!==e,i=(e,t=0)=>"string"==typeof e&&e.length>=t,s=e=>{if("object"!=typeof e||null===e)return i(e,1);for(const t in e)if(!1===i(t,1))return!1;return!0},o=new Event("StateChange"),n=(e,t)=>{l(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))};let r="development";try{r="production"}catch(e){r="production"}const c=(e,t,a)=>{if(e&&t&&"string"==typeof a){const l=e.querySelector(`[slot="${a}"]`);l&&t.appendChild(l)}},d=e=>""===e},9157:(e,t,a)=>{a.d(t,{w:()=>s});var l=a(6385),i=a(8921);const s=(e,t)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&l.h.includes(e)),new Set([`Number {${l.h.join(", ")}`]),t,{defaultValue:1,required:!0})}}}]);