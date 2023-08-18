/*! For license information please see 9915.e013ac5f.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9915],{9915:(t,e,i)=>{i.r(e),i.d(e,{kol_skip_nav:()=>o});var a=i(75481),n=i(59225),l=i(37861);const o=class{constructor(t){(0,a.r)(this,t),this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"\u2026",_links:[]}}render(){return(0,a.h)("nav",{"aria-label":this.state._label},(0,a.h)("ul",null,this.state._links.map(((t,e)=>(0,a.h)("li",{key:e},(0,a.h)("kol-link-wc",Object.assign({},t)))))))}validateAriaLabel(t){this.validateLabel(t)}validateLabel(t){(0,n.v)(this,t)}validateLinks(t){(0,l.w)("KolSkipNav",this,t)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};o.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{display:grid;list-style:none;place-items:center}ul li{height:0}kol-link-wc a{left:-99999px;overflow:hidden;position:absolute;z-index:9999999;line-height:1em}kol-link-wc a:focus{background-color:#fff;left:unset;position:unset}"}},59225:(t,e,i)=>{i.d(e,{a:()=>b,c:()=>r,h:()=>s,v:()=>d});var a=i(43785),n=i(28300);const l=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,o=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return o.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,n,l)=>{var o,h;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,l)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const c=new Set(["string"]),d=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),c,e,h(i))},u=new Set(["string","false"]),b=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,n.w)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,h(i))}},37861:(t,e,i)=>{i.d(e,{w:()=>l});var a=i(43785),n=i(28300);const l=(t,e,i)=>{(0,n.c)(e,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),i),(0,a.c)(t,e.state._links.length)}}}]);