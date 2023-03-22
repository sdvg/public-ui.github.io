/*! For license information please see 6143.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6143],{66143:(t,e,i)=>{i.r(e),i.d(e,{kol_quote:()=>o});var a=i(99459),n=i(16754);const o=class{constructor(t){(0,a.r)(this,t),this._caption=void 0,this._href=void 0,this._quote=void 0,this._variant="inline",this.state={_href:"…",_quote:"…",_variant:"inline"}}validateCaption(t){(0,n.w)(this,"_caption",t)}validateHref(t){(0,n.w)(this,"_href",t,{required:!0})}validateQuote(t){(0,n.w)(this,"_quote",t,{required:!0})}validateVariant(t){(0,n.a)(this,"_variant",(t=>"block"===t||"inline"===t),new Set(["block","inline"]),t)}componentWillLoad(){this.validateCaption(this._caption),this.validateHref(this._href),this.validateQuote(this._quote),this.validateVariant(this._variant)}render(){const t=""!==this.state._quote;return(0,a.h)(a.H,null,(0,a.h)("figure",{class:{[this.state._variant]:!0}},"block"===this.state._variant?(0,a.h)("blockquote",{cite:this.state._href},this.state._quote,(0,a.h)("span",{"aria-hidden":t?"true":void 0,hidden:t},(0,a.h)("slot",{name:"expert"}))):(0,a.h)("q",{cite:this.state._href},this.state._quote,(0,a.h)("span",{"aria-hidden":t?"true":void 0,hidden:t},(0,a.h)("slot",{name:"expert"}))),"string"==typeof this.state._caption&&this.state._caption.length>0&&(0,a.h)("figcaption",null,(0,a.h)("cite",null,(0,a.h)("kol-link",{_href:this.state._href,_label:this.state._caption,_target:"_blank"})))))}static get watchers(){return{_caption:["validateCaption"],_href:["validateHref"],_quote:["validateQuote"],_variant:["validateVariant"]}}};o.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}cite,figure,q+figcaption{display:inline;margin:0;padding:0}blockquote::before{content:open-quote}blockquote::after{content:close-quote}cite::before{content:'—'}.block cite::before{padding-right:0.5em}.inline cite::before{padding:0.5em}"}}}]);