/*! For license information please see 51427.0f5868e0.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[51427],{62197:(t,e,o)=>{o.d(e,{v:()=>r});var i=o(80741);const n=new Set(['"left", "right"']),a=new Set(['"bottom", "top"']),l=new Set([...n,...a]),r=(t,e,o)=>{(0,i.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),l,o,{defaultValue:"top"})}},51427:(t,e,o)=>{o.r(e),o.d(e,{kol_abbr:()=>r});var i=o(39384),n=o(7249),a=o(10387),l=o(60736);const r=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,l.n)(),this._label=void 0,this._tooltipAlign="top",this.state={_label:"\u2026",_tooltipAlign:"top"}}render(){return(0,i.h)(i.H,null,(0,i.h)("abbr",{"aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,i.h)("span",{title:""},(0,i.h)("slot",null))),(0,i.h)("kol-tooltip-wc",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(t){(0,n.v)(this,t)}validateTooltipAlign(t){(0,a.v)(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_tooltipAlign:["validateTooltipAlign"]}}};r.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>abbr{cursor:help}"}},7249:(t,e,o)=>{o.d(e,{a:()=>p,c:()=>s,h:()=>r,v:()=>c});var i=o(93638),n=o(80741);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function s(t){return l.test(t)}const h=new Set(["string"]),c=(t,e,o={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,o,n,a)=>{var l,h;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,o,n,a)),"string"==typeof e&&!1===r(e,3)&&!1===s(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(o))},p=c},10387:(t,e,o)=>{o.d(e,{v:()=>n});var i=o(62197);const n=(t,e)=>{(0,i.v)(t,"_tooltipAlign",e)}}}]);