/*! For license information please see 1741.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1741],{91741:(t,e,i)=>{i.r(e),i.d(e,{kol_details:()=>a});var n=i(90578),o=i(32996);const a=class{constructor(t){(0,n.r)(this,t),this.onClick=()=>{setTimeout((()=>{var t;this._open=null===(t=this.htmlDetailsElement)||void 0===t?void 0:t.open}),25)},this._open=!1,this._summary=void 0,this.state={_summary:"…"}}render(){return(0,n.h)(n.H,null,(0,n.h)("details",{ref:t=>{this.htmlDetailsElement=t},open:this.state._open},(0,n.h)("summary",{onClick:this.onClick},this.state._open?(0,n.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-down"}):(0,n.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-right"}),(0,n.h)("span",null,this.state._summary)),(0,n.h)("div",{class:"content"},(0,n.h)("kol-indented-text",null,(0,n.h)("slot",null)))))}validateOpen(t){(0,o.b)(this,"_open",t)}validateSummary(t){(0,o.w)(this,"_summary",t,{required:!0})}componentWillLoad(){this.validateOpen(this._open),this.validateSummary(this._summary)}static get watchers(){return{_open:["validateOpen"],_summary:["validateSummary"]}}};a.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}details{display:grid}details>summary{cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:grey;border-bottom-style:solid}details>summary:focus>span,details>summary:hover>span,details[open]>summary>span{border-bottom-color:#000}details>kol-indented-text{margin:0.25em 0 0 0.5em}@keyframes details-show{to{opacity:1;scale:1}}.content{opacity:0;scale:1 0;transform-origin:top}details[open]>.content{animation:250ms ease-in-out forwards details-show}"}}}]);