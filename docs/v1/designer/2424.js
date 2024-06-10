/*! For license information please see 2424.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[2424],{29698:(t,e,i)=>{i.d(e,{v:()=>o});var a=i(66376);const n=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),o=(t,e,i)=>{(0,a.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),n,i,{defaultValue:"top"})}},22424:(t,e,i)=>{i.r(e),i.d(e,{kol_abbr:()=>r});var a=i(74643),n=i(29696),o=i(6531),l=i(65388),s=i(52296);const r=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,l.n)(),this._label=void 0,this._tooltipAlign="top",this._title=void 0,this.state={_label:"…",_tooltipAlign:"top"}}render(){return(0,a.h)(a.H,{key:"a46ac71482509b92664dc13d3472ef68aec7d027",class:"kol-abbr"},(0,a.h)("abbr",{key:"ada270714e4d278ea403ad4cf7d846a3ecbf2364","aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,a.h)("span",{key:"a45d0386b16906e48974021e119a67bcf8d63637",title:""},(0,a.h)("slot",{key:"4bd1ddb2394460948f7f20c27b772a4f75d693de"}))),(0,a.h)(s.b,{key:"8cd3dba6e8e9262e2cbf64f05309eab1df57dc61",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(t){(0,n.v)(this,t,{required:!0})}validateTitle(t){this.validateLabel(t)}validateTooltipAlign(t){(0,o.v)(this,t)}componentWillLoad(){this.validateLabel(this._label||this._title),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_title:["validateTitle"],_tooltipAlign:["validateTooltipAlign"]}}};r.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host>abbr{cursor:help}"}},29696:(t,e,i)=>{i.d(e,{a:()=>c,c:()=>r,h:()=>s,v:()=>h});var a=i(37733),n=i(66376);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return l.test(t)}const d=new Set(["string"]),h=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,i,n,o)=>{var l,d;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,i,n,o)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(i))},c=h},6531:(t,e,i)=>{i.d(e,{v:()=>n});var a=i(29698);const n=(t,e)=>{(0,a.v)(t,"_tooltipAlign",e)}}}]);