/*! For license information please see 5979.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5979],{78069:(e,t,a)=>{a.d(t,{t:()=>s});var l=a(25098),o=a(45515);let s=(e,t)=>{var a;return(null!==(a=(0,l.g)())&&void 0!==a?a:(0,l.i)("de")).translate(e,t)};"test"===o.p&&(s=e=>e)},25979:(e,t,a)=>{a.r(t),a.d(t,{kol_symbol:()=>r});var l=a(21700),o=a(78069),s=a(40748),n=a(68524);const r=class{constructor(e){(0,l.r)(this,e),this._label=void 0,this._symbol=void 0,this.state={_label:(0,o.t)("kol-warning"),_symbol:""}}render(){return(0,l.h)(l.H,{key:"34b75c8f44124c57103e84e6f4f33ed6df1fe998",class:"kol-symbol"},(0,l.h)("span",{key:"57a61aba5a3b316f0ef65a4685ac2e7eed690c28","aria-label":this.state._label,role:"term"},this.state._symbol))}validateLabel(e){(0,s.v)(this,e,{required:!0})}validateSymbol(e){(0,n.i)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateLabel(this._label),this.validateSymbol(this._symbol)}static get watchers(){return{_label:["validateLabel"],_symbol:["validateSymbol"]}}}},40748:(e,t,a)=>{a.d(t,{a:()=>b,b:()=>r,c:()=>i,h:()=>o,v:()=>h});var l=a(68524);const o=[0,1,2,3,4,5,6],s=/[a-zA-Z0-9äöüÄÖÜß]/g,n=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(s))||void 0===t?void 0:t.length)||0}(e)>=t}function i(e){return n.test(e)}const c=new Set(["string"]),h=(e,t,a={})=>{(0,l.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,a,o,s)=>{var n,c;"function"==typeof(null===(n=e.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,o,s)),"string"==typeof t&&!1===r(t,3)&&!1===i(t)&&(0,l.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,l.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(a))},b=h},45515:(e,t,a)=>{a.d(t,{S:()=>n,a:()=>r,b:()=>s,c:()=>l,h:()=>c,i:()=>o,p:()=>i,s:()=>h});const l=e=>"object"==typeof e&&null!==e,o=(e,t=0)=>"string"==typeof e&&e.length>=t,s=e=>{if("object"!=typeof e||null===e)return o(e,1);for(const t in e)if(!1===o(t,1))return!1;return!0},n=new Event("StateChange"),r=(e,t)=>{l(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))};let i="development";try{i="production"}catch(e){i="production"}const c=(e,t,a)=>{if(e&&t&&"string"==typeof a){const l=e.querySelector(`[slot="${a}"]`);l&&t.appendChild(l)}},h=e=>""===e}}]);