/*! For license information please see 14165.36c6d29d.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[14165],{14165:(t,e,n)=>{n.r(e),n.d(e,{kol_breadcrumb:()=>r});var a=n(47691),i=n(45457),l=n(2910),o=n(60597),s=n(50752);const r=class{constructor(t){(0,a.r)(this,t),this.renderLink=(t,e)=>{const n=this.state._links.length-1,i=t._iconOnly||t._hideLabel;return(0,a.h)("li",{key:e},0!==e&&(0,a.h)("kol-icon",{_label:"",_icon:"codicon codicon-chevron-right"}),e===n?(0,a.h)("span",null,i?(0,a.h)("kol-icon",{_label:t._label,_icon:"string"==typeof t._icon?t._icon:"codicon codicon-symbol-event"}):(0,a.h)(a.F,null,t._label)):(0,a.h)("kol-link",Object.assign({},t)))},this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"\u2026",_links:[]}}render(){return(0,a.h)(a.H,null,(0,a.h)("nav",{"aria-label":this.state._label},(0,a.h)("ul",null,0===this.state._links.length&&(0,a.h)("li",null,(0,a.h)("kol-icon",{_label:"",_icon:"codicon codicon-home"}),"\u2026"),this.state._links.map(this.renderLink))))}validateAriaLabel(t){this.validateLabel(t)}validateLabel(t,e,n=!1){n||(0,o.r)(this.state._label),(0,i.v)(this,t),(0,l.b)(t),(0,o.a)(this.state._label)}validateLinks(t){(0,s.w)("KolBreadcrumb",this,t)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){(0,o.r)(this.state._label)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};r.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}li,ul{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator):before{content:'\\f054';font-family:'Font Awesome 6 Free'}"}},45457:(t,e,n)=>{n.d(e,{a:()=>d,c:()=>r,h:()=>s,v:()=>c});var a=n(2910),i=n(69999);const l=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,o=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return o.test(t)}const h=new Set(["string"]),c=(t,e,n={})=>{(0,i.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,n,i,l)=>{var o,h;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,n,i,l)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},d=c},60597:(t,e,n)=>{n.d(e,{a:()=>i,r:()=>l});const a=new Set;function i(t){a.has(t)?console.error(`There already is a nav element with the label "${t}"`):a.add(t)}function l(t){a.delete(t)}},50752:(t,e,n)=>{n.d(e,{w:()=>l});var a=n(2910),i=n(69999);const l=(t,e,n)=>{(0,i.c)(e,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),n),(0,a.c)(t,e.state._links.length)}}}]);