/*! For license information please see 5734.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5734],{7865:(t,e,i)=>{function n(t){t.stopImmediatePropagation(),t.stopPropagation()}function a(t,e,i){e&&function(t,e,i){const n=t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,i))}(e,t,i)}i.d(e,{s:()=>n,t:()=>a})},5734:(t,e,i)=>{i.r(e),i.d(e,{kol_details:()=>r});var n=i(4566),a=i(8229),s=i(9565),o=i(7865),l=i(8325),h=i(4186),d=i(5109);class c{constructor(t,e,i){this.detailsElement=t,this.summaryElement=e,this.contentElement=i,this.isClosing=!1,this.isExpanding=!1,this.summaryElement.addEventListener("click",this.handleSummaryClick.bind(this))}handleSummaryClick(t){t.preventDefault(),this.isClosing||!this.detailsElement.open?this.open():(this.isExpanding||this.detailsElement.open)&&this.collapse()}open(){this.detailsElement.open=!0,window.requestAnimationFrame(this.expand.bind(this))}expand(){this.isExpanding=!0,this.animateContentHeight("expand")}collapse(){this.isClosing=!0,this.animateContentHeight("collapse")}animateContentHeight(t){let e="expand"===t?0:this.contentElement.offsetHeight,i="expand"===t?this.contentElement.offsetHeight:0;this.animation&&(e=this.contentElement.offsetHeight,this.animation.cancel(),"expand"===t&&(i=this.contentElement.offsetHeight)),this.animation=this.contentElement.animate({height:[`${e}px`,`${i}px`]},{duration:matchMedia("(prefers-reduced-motion)").matches?0:250,easing:"ease-out"}),this.animation.addEventListener("finish",(()=>{this.onAnimationFinish()}),{once:!0}),this.animation.addEventListener("cancel",(()=>{"expand"===t?this.isExpanding=!1:this.isClosing=!1}),{once:!0})}onAnimationFinish(){this.detailsElement.open=this.isExpanding,this.animation=void 0,this.isClosing=!1,this.isExpanding=!1}}const r=class{constructor(t){(0,n.r)(this,t),this.catchRef=t=>{this.summaryElement=t,(0,h.a)(this.host,this.summaryElement)},this.handleToggle=t=>{clearTimeout(this.toggleTimeout),this.toggleTimeout=setTimeout((()=>{var e,i,n,a;Boolean(null===(e=this.detailsElement)||void 0===e?void 0:e.open)!==this.state._open&&(this._open=Boolean(null===(i=this.detailsElement)||void 0===i?void 0:i.open),(0,o.t)("toggle",this.host,this._open),"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onToggle)&&(null===(a=this.state._on)||void 0===a||a.onToggle(t,this._open)))}),25)},this._label=void 0,this._on=void 0,this._open=!1,this._summary=void 0,this.state={_label:"…",_on:{}}}render(){return(0,n.h)(n.H,{key:"834db1f44b6f303529970130a4908da948e9229e",class:"kol-details"},(0,n.h)("details",{key:"bfd680ce25e33c3589a1951a7b95bcb5c5cc0faf",ref:t=>{this.detailsElement=t},onToggle:this.handleToggle},(0,n.h)("summary",{key:"694f15b8ce703dcdcf7d671e84b299dfb5134711",ref:this.catchRef},this.state._open?(0,n.h)(d.h,{_label:"",_icons:"codicon codicon-chevron-down"}):(0,n.h)(d.h,{_label:"",_icons:"codicon codicon-chevron-right"}),(0,n.h)("span",{key:"9b506dc7ad5e93122918ea5700880c1d298bdf34"},this.state._label)),(0,n.h)("div",{key:"5133cc2714aa66ca99463fec56cd489fbcd8fa54","aria-hidden":!1===this.state._open?"true":void 0,class:"content",ref:t=>this.contentElement=t},(0,n.h)(d.k,{key:"5ccd0044b4d2c648d664b206aff861ead5f7ed41"},(0,n.h)("slot",{key:"d08f0cc2d5aa38744707b83d5ab56db2ea5a1d24"})))))}validateLabel(t){(0,a.v)(this,t,{required:!0})}validateOn(t){"object"==typeof t&&null!==t&&"function"==typeof t.onToggle&&(0,l.s)(this,"_on",t)}validateOpen(t){(0,s.v)(this,t)}validateSummary(t){this.validateLabel(t)}componentWillLoad(){this.validateLabel(this._label||this._summary),this.validateOn(this._on),this.validateOpen(this._open)}componentDidLoad(){if(this.detailsElement&&this.summaryElement&&this.contentElement){const t=new c(this.detailsElement,this.summaryElement,this.contentElement);this.state._open&&t.open()}}get host(){return(0,n.g)(this)}static get watchers(){return{_label:["validateLabel"],_on:["validateOn"],_open:["validateOpen"],_summary:["validateSummary"]}}};r.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host{display:block}details{display:grid}details>summary{cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:grey;border-bottom-style:solid}details>summary:focus>span,details>summary:hover>span,details[open]>summary>span{border-bottom-color:#000}.content{overflow:hidden}details>.kol-indented-text{margin:0.25em 0 0 0.5em}"}},8229:(t,e,i)=>{i.d(e,{a:()=>r,c:()=>h,h:()=>l,v:()=>c});var n=i(9018),a=i(8325);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(s))||void 0===e?void 0:e.length)||0}(t)>=e}function h(t){return o.test(t)}const d=new Set(["string"]),c=(t,e,i={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,i,a,s)=>{var o,d;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,i,a,s)),"string"==typeof e&&!1===l(e,3)&&!1===h(e)&&(0,n.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(i))},r=c},9565:(t,e,i)=>{i.d(e,{v:()=>a});var n=i(8325);const a=(t,e,i)=>{(0,n.a)(t,"_open",e,i)}}}]);