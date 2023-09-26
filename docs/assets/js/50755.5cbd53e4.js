/*! For license information please see 50755.5cbd53e4.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[50755],{50755:(e,t,n)=>{n.r(t),n.d(t,{kol_accordion:()=>h});var i=n(47691),o=n(45457),a=n(56669),s=n(2910),l=n(3067),r=n(69999),d=n(69084);(0,s.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion ge\xf6ffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event pr\xfcft den _open-Status der Accordions\n- Logik \xd6ffnet und Schlie\xdft entsprechend"),(0,s.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const h=class{constructor(e){(0,i.r)(this,e),this.nonce=(0,l.n)(),this.onClick=e=>{this._open=!this._open,setTimeout((()=>{var t;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._heading=void 0,this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"\u2026",_level:1}}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{accordion:!0,open:!0===this.state._open}},(0,i.h)("kol-heading-wc",{_label:"",_level:this.state._level},(0,i.h)("kol-button-wc",{_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icon:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),(0,i.h)("div",{class:"header"},(0,i.h)("slot",{name:"header"})),(0,i.h)("div",{class:"wrapper"},(0,i.h)("div",{class:"animation-wrapper"},(0,i.h)("div",{"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},(0,i.h)("slot",{name:"content"})," ",(0,i.h)("slot",null))))))}validateHeading(e){this.validateLabel(e)}validateLabel(e){(0,o.v)(this,e)}validateLevel(e){(0,d.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,r.s)(this,"_on",e)}validateOpen(e){(0,a.v)(this,e)}componentWillLoad(){this.validateLabel(this._label||this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_heading:["validateHeading"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}.wrapper{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 0.3s}.accordion.open .wrapper{grid-template-rows:1fr}.animation-wrapper{min-height:0;transition:visibility 0.3s;visibility:hidden}.accordion.open .animation-wrapper{visibility:visible}@media (prefers-reduced-motion){.animation-wrapper,.wrapper{transition-duration:0s}}.accordion kol-heading-wc kol-button-wc button kol-span-wc{justify-items:start}"}},45457:(e,t,n)=>{n.d(t,{a:()=>c,c:()=>r,h:()=>l,v:()=>h});var i=n(2910),o=n(69999);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(a))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return s.test(e)}const d=new Set(["string"]),h=(e,t,n={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),d,t,function(e){var t;return{hooks:{afterPatch:(t,n,o,a)=>{var s,d;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(t,n,o,a)),"string"==typeof t&&!1===l(t,3)&&!1===r(t)&&(0,i.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}(n))},c=h},56669:(e,t,n)=>{n.d(t,{v:()=>o});var i=n(69999);const o=(e,t,n)=>{(0,i.a)(e,"_open",t,n)}},69084:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(69999);const o=(e,t)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);