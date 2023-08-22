/*! For license information please see 3086.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3086],{93086:(e,t,i)=>{i.r(t),i.d(t,{kol_breadcrumb:()=>s});var n=i(72108),a=i(81577),l=i(47734),o=i(32864);const s=class{constructor(e){(0,n.r)(this,e),this.renderLink=(e,t)=>{const i=this.state._links.length-1,a=e._iconOnly||e._hideLabel;return(0,n.h)("li",{key:t},0!==t&&(0,n.h)("kol-icon",{_label:"",_icon:"codicon codicon-chevron-right"}),t===i?(0,n.h)("span",null,a?(0,n.h)("kol-icon",{_label:e._label,_icon:"string"==typeof e._icon?e._icon:"codicon codicon-symbol-event"}):(0,n.h)(n.F,null,e._label)):(0,n.h)("kol-link",Object.assign({},e)))},this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return(0,n.h)(n.H,null,(0,n.h)("nav",{"aria-label":this.state._label},(0,n.h)("ul",null,0===this.state._links.length&&(0,n.h)("li",null,(0,n.h)("kol-icon",{_label:"",_icon:"codicon codicon-home"}),"…"),this.state._links.map(this.renderLink))))}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e){(0,a.v)(this,e),(0,l.b)(e)}validateLinks(e){(0,o.w)("KolBreadcrumb",this,e)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}li,ul{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator):before{content:'\\f054';font-family:'Font Awesome 6 Free'}"}},81577:(e,t,i)=>{i.d(t,{a:()=>p,c:()=>r,h:()=>s,v:()=>d});var n=i(47734),a=i(68949);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return o.test(e)}function h(e){var t;return{hooks:{afterPatch:(t,i,a,l)=>{var o,h;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(t,i,a,l)),"string"==typeof t&&!1===s(t,3)&&!1===r(t)&&(0,n.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const c=new Set(["string"]),d=(e,t,i={})=>{(0,a.w)(e,"_label",(e=>"string"==typeof e),c,t,h(i))},b=new Set(["string","false"]),p=(e,t,i={})=>{""!==t&&"false"!==t||(t=!1),(0,a.w)(e,"_label",(e=>!1===e||"string"==typeof e),b,t,h(i))}},32864:(e,t,i)=>{i.d(t,{w:()=>l});var n=i(47734),a=i(68949);const l=(e,t,i)=>{(0,a.c)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),i),(0,n.c)(e,t.state._links.length)}}}]);