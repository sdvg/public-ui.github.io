/*! For license information please see 5536.js.LICENSE.txt */ "use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5536],{5536:(a,i,e)=>{e.r(i),e.d(i,{kol_breadcrumb:()=>s});var t=e(454),n=e(3684),l=e(1540),o=e(7544);const s=class{constructor(a){(0,t.r)(this,a),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"…",_links:[]}}render(){const a=this.state._links.length-1;return(0,t.h)(t.H,null,(0,t.h)("nav",{"aria-label":this.state._ariaLabel},(0,t.h)("ul",null,0===this.state._links.length&&(0,t.h)("li",null,(0,t.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-home"}),"…"),this.state._links.map(((i,e)=>(0,t.h)("li",{key:e},0!==e&&(0,t.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-right"}),e===a?(0,t.h)("span",null,i._iconOnly?(0,t.h)("kol-icon",{_ariaLabel:i._label,_icon:"string"==typeof i._icon?i._icon:"codicon codicon-symbol-event"}):(0,t.h)(t.F,null,i._label)):(0,t.h)("kol-link",Object.assign({_useCase:"nav"},i,{_ariaLabel:i._label}),i._label)))))))}validateAriaLabel(a){(0,l.w)(this,"_ariaLabel",a,{required:!0}),(0,n.b)(a)}validateLinks(a){(0,o.w)("KolBreadcrumb",this,a)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};s.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}li,ul{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator):before{content:'\\f054';font-family:'Font Awesome 6 Free'}"}},7544:(a,i,e)=>{e.d(i,{w:()=>l});var t=e(3684),n=e(1540);const l=(a,i,e)=>{(0,n.d)(i,"_links",(a=>"object"==typeof a&&"string"==typeof a._label),e),(0,t.u)(a,i.state._links.length)}}}]);