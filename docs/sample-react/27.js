/*! For license information please see 27.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[27],{27:(t,e,i)=>{i.r(e),i.d(e,{kol_skip_nav:()=>s});var a=i(578),n=i(6535),l=i(4026);const s=class{constructor(t){(0,a.r)(this,t),this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return(0,a.h)("nav",{"aria-label":this.state._label},(0,a.h)("ul",null,this.state._links.map(((t,e)=>(0,a.h)("li",{key:e},(0,a.h)("kol-link-wc",Object.assign({},t)))))))}validateAriaLabel(t){this.validateLabel(t)}validateLabel(t){(0,n.v)(this,t)}validateLinks(t){(0,l.w)("KolSkipNav",this,t)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{display:grid;list-style:none;place-items:center}ul li{height:0}kol-link-wc a{left:-99999px;overflow:hidden;position:absolute;z-index:9999999;line-height:1em}kol-link-wc a:focus{background-color:#fff;left:unset;position:unset}"}},6535:(t,e,i)=>{i.d(e,{a:()=>p,c:()=>r,h:()=>o,v:()=>d});var a=i(8242),n=i(2996);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function o(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,n,l)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,l)),"string"==typeof e&&!1===o(e,3)&&!1===r(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const c=new Set(["string"]),d=(t,e,i={})=>{(0,n.a)(t,"_label",(t=>"string"==typeof t),c,e,h(i))},u=new Set(["string","false"]),p=(t,e,i={})=>{""===e&&(e=!1),(0,n.a)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,h(i))}},4026:(t,e,i)=>{i.d(e,{w:()=>l});var a=i(8242),n=i(2996);const l=(t,e,i)=>{(0,n.d)(e,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),i),(0,a.c)(t,e.state._links.length)}}}]);