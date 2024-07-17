/*! For license information please see 1661.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1661],{1661:(e,t,a)=>{a.r(t),a.d(t,{kol_skip_nav:()=>r});var i=a(1418),n=a(9166),l=a(1869),s=a(9585),o=a(173);const r=class{constructor(e){(0,i.r)(this,e),this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return(0,i.h)(i.H,{key:"0e6d86d9542b0b61bcf2b1f16aa6e06cb6857b9a",class:"kol-skip-nav"},(0,i.h)("nav",{key:"66f4d2a10303d500b2f103017fcf80ecd34a80ef","aria-label":this.state._label},(0,i.h)("ul",{key:"1e32a6232952c0bd6b723c37833c382e9e84013e"},this.state._links.map(((e,t)=>(0,i.h)("li",{key:t},(0,i.h)(o.n,Object.assign({},e))))))))}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e,t,a=!1){a||(0,l.r)(this.state._label),(0,n.v)(this,e,{required:!0}),(0,l.a)(this.state._label)}validateLinks(e){(0,s.w)("KolSkipNav",this,e)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){(0,l.r)(this.state._label)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};r.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}ul{display:grid;list-style:none;place-items:center}ul li{height:0}.kol-link-wc a{left:-99999px;overflow:hidden;position:absolute;z-index:9999999;line-height:1em}.kol-link-wc a:focus{background-color:#fff;left:unset;position:unset}"}},9166:(e,t,a)=>{a.d(t,{a:()=>d,c:()=>r,h:()=>o,v:()=>c});var i=a(2617),n=a(2214);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function o(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return s.test(e)}const h=new Set(["string"]),c=(e,t,a={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),h,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,a,n,l)=>{var s,h;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(t,a,n,l)),"string"==typeof t&&!1===o(t,3)&&!1===r(t)&&(0,i.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(a))},d=c},1869:(e,t,a)=>{a.d(t,{a:()=>l,r:()=>s});var i=a(7302);const n=new Set;function l(e){n.has(e)?i.L.error(`There already is a nav element with the label "${e}"`,{forceLog:!0}):n.add(e)}function s(e){n.delete(e)}},9585:(e,t,a)=>{a.d(t,{w:()=>l});var i=a(2617),n=a(2214);const l=(e,t,a)=>{(0,n.c)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),a),(0,i.c)(e,t.state._links.length)}}}]);