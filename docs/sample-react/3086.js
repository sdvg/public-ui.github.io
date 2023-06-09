/*! For license information please see 3086.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[3086],{3086:(i,a,e)=>{e.r(a),e.d(a,{kol_breadcrumb:()=>s});var t=e(7747),n=e(5858),l=e(4300),o=e(6798);const s=class{constructor(i){(0,t.r)(this,i),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"…",_links:[]}}render(){const i=this.state._links.length-1;return(0,t.h)(t.H,null,(0,t.h)("nav",{"aria-label":this.state._ariaLabel},(0,t.h)("ul",null,0===this.state._links.length&&(0,t.h)("li",null,(0,t.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-home"}),"…"),this.state._links.map(((a,e)=>(0,t.h)("li",{key:e},0!==e&&(0,t.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-right"}),e===i?(0,t.h)("span",null,a._iconOnly?(0,t.h)("kol-icon",{_ariaLabel:a._label,_icon:"string"==typeof a._icon?a._icon:"codicon codicon-symbol-event"}):(0,t.h)(t.F,null,a._label)):(0,t.h)("kol-link",Object.assign({_useCase:"nav"},a,{_ariaLabel:a._label}),a._label)))))))}validateAriaLabel(i){(0,l.w)(this,"_ariaLabel",i,{required:!0}),(0,n.b)(i)}validateLinks(i){(0,o.w)("KolBreadcrumb",this,i)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}li,ul{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator):before{content:'\\f054';font-family:'Font Awesome 6 Free'}"}},6798:(i,a,e)=>{e.d(a,{w:()=>l});var t=e(5858),n=e(4300);const l=(i,a,e)=>{(0,n.d)(a,"_links",(i=>"object"==typeof i&&"string"==typeof i._label),e),(0,t.c)(i,a.state._links.length)}}}]);