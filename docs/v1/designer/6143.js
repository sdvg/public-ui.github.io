/*! For license information please see 6143.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6143],{66143:(t,e,i)=>{i.r(e),i.d(e,{kol_quote:()=>s});var a=i(95946),n=i(48279),o=i(4688),r=i(48125);const s=class{constructor(t){(0,a.r)(this,t),this._caption=void 0,this._label=void 0,this._href=void 0,this._quote=void 0,this._variant="inline",this.state={_href:"…",_quote:"…",_variant:"inline"}}validateCaption(t){this.validateLabel(t)}validateLabel(t){(0,n.v)(this,t)}validateHref(t){(0,o.d)(this,"_href",t,{required:!0})}validateQuote(t){(0,o.d)(this,"_quote",t,{required:!0})}validateVariant(t){(0,o.w)(this,"_variant",(t=>"block"===t||"inline"===t),new Set(["block","inline"]),t)}componentWillLoad(){this.validateHref(this._href),this.validateLabel(this._label||this._caption),this.validateQuote(this._quote),this.validateVariant(this._variant)}render(){const t=(0,r.s)(this.state._quote);return(0,a.h)(a.H,null,(0,a.h)("figure",{class:{[this.state._variant]:!0}},"block"===this.state._variant?(0,a.h)("blockquote",{cite:this.state._href},this.state._quote,(0,a.h)("span",{"aria-hidden":t?void 0:"true",hidden:!t},(0,a.h)("slot",{name:"expert"}))):(0,a.h)("q",{cite:this.state._href},this.state._quote,(0,a.h)("span",{"aria-hidden":t?void 0:"true",hidden:!t},(0,a.h)("slot",{name:"expert"}))),"string"==typeof this.state._label&&this.state._label.length>0&&(0,a.h)("figcaption",null,(0,a.h)("cite",null,(0,a.h)("kol-link",{_href:this.state._href,_label:this.state._label,_target:"_blank"})))))}static get watchers(){return{_caption:["validateCaption"],_label:["validateLabel"],_href:["validateHref"],_quote:["validateQuote"],_variant:["validateVariant"]}}};s.style={default:":host{--a11y-min-size:44px;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}cite,figure,q+figcaption{display:inline;margin:0;padding:0}blockquote:before{content:open-quote}blockquote::after{content:close-quote}cite:before{content:'—'}.block cite:before{padding-right:0.5em}.inline cite:before{padding:0.5em}"}},48279:(t,e,i)=>{i.d(e,{a:()=>c,c:()=>l,h:()=>s,v:()=>d});var a=i(6931),n=i(4688);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,r=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function l(t){return r.test(t)}const h=new Set(["string"]),d=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,i,n,o)=>{var r,h;"function"==typeof(null===(r=t.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,o)),"string"==typeof e&&!1===s(e,3)&&!1===l(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(i))},c=d}}]);