/*! For license information please see 27.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[27],{70027:(e,t,i)=>{i.r(t),i.d(t,{kol_skip_nav:()=>o});var a=i(95946),n=i(48279),l=i(53087),s=i(56581);const o=class{constructor(e){(0,a.r)(this,e),this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return(0,a.h)("nav",{"aria-label":this.state._label},(0,a.h)("ul",null,this.state._links.map(((e,t)=>(0,a.h)("li",{key:t},(0,a.h)("kol-link-wc",Object.assign({},e)))))))}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e,t,i=!1){i||(0,l.r)(this.state._label),(0,n.v)(this,e),(0,l.a)(this.state._label)}validateLinks(e){(0,s.w)("KolSkipNav",this,e)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){(0,l.r)(this.state._label)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};o.style={default:":host{--a11y-min-size:44px;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}ul{display:grid;list-style:none;place-items:center}ul li{height:0}kol-link-wc a{left:-99999px;overflow:hidden;position:absolute;z-index:9999999;line-height:1em}kol-link-wc a:focus{background-color:#fff;left:unset;position:unset}"}},48279:(e,t,i)=>{i.d(t,{a:()=>d,c:()=>r,h:()=>o,v:()=>c});var a=i(6931),n=i(4688);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function o(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return s.test(e)}const h=new Set(["string"]),c=(e,t,i={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),h,t,function(e){var t;return{hooks:{afterPatch:(t,i,n,l)=>{var s,h;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(t,i,n,l)),"string"==typeof t&&!1===o(t,3)&&!1===r(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}(i))},d=c},53087:(e,t,i)=>{i.d(t,{a:()=>n,r:()=>l});const a=new Set;function n(e){a.has(e)?console.error(`There already is a nav element with the label "${e}"`):a.add(e)}function l(e){a.delete(e)}},56581:(e,t,i)=>{i.d(t,{w:()=>l});var a=i(6931),n=i(4688);const l=(e,t,i)=>{(0,n.c)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),i),(0,a.c)(e,t.state._links.length)}}}]);