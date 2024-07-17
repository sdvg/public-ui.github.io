/*! For license information please see 882.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[882],{882:(e,t,i)=>{i.r(t),i.d(t,{kol_accordion:()=>p});var n=i(1418),a=i(9166),o=i(713),s=i(2617),r=i(7302),l=i(2214),c=i(3206),d=i(3919),h=i(173);(0,s.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,s.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const p=class{constructor(e){(0,n.r)(this,e),this.nonce=(0,r.n)(),this.catchRef=e=>{(0,c.a)(this.host,e)},this.onClick=e=>{this._open=!this._open,setTimeout((()=>{var t;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._heading=void 0,this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"…",_level:1}}render(){return(0,n.h)(n.H,{key:"26756c33579f148fc313e753254e72d940881f37",class:"kol-accordion"},(0,n.h)("div",{key:"c24191f390ebd5493a419bb9e3d595d633698c01",class:{accordion:!0,open:!0===this.state._open}},(0,n.h)(h.c,{key:"391b4c52eea084a8c7e466e5fa13e23a9229fbd7",_label:"",_level:this.state._level},(0,n.h)(h.d,{key:"3ed06114b524b065c7036123e1f59c0cc5e6d236",ref:this.catchRef,_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),(0,n.h)("div",{key:"4743ba570d910d7fafa47d9cefb77bf588cdbc11",class:"header"},(0,n.h)("slot",{key:"54b679517bbccc8dac3180304385cb4859e30c16",name:"header"})),(0,n.h)("div",{key:"88e7e85b24bf9f8a0a1a24500bb05fb27611e5eb",class:"wrapper"},(0,n.h)("div",{key:"9ed25706124200e14b31efecc4a94bb531e8d4b3",class:"animation-wrapper"},(0,n.h)("div",{key:"e7ddd719e5d8e9628e455ee1773ff19f51dd7543","aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},(0,n.h)("slot",{key:"26e2a88c98262a11a0c5e3ebbcccfb6a6e8fe478",name:"content"})," ",(0,n.h)("slot",{key:"24c428c3ce362dd83f3e00d0555647333b7ebb14"}))))))}validateHeading(e){this.validateLabel(e)}validateLabel(e){(0,a.v)(this,e,{required:!0})}validateLevel(e){(0,d.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,l.s)(this,"_on",e)}validateOpen(e){(0,o.v)(this,e)}componentWillLoad(){this.validateLabel(this._label||this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}get host(){return(0,n.g)(this)}static get watchers(){return{_heading:["validateHeading"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};p.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host{display:block}.wrapper{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 0.3s}.accordion.open .wrapper{grid-template-rows:1fr}.animation-wrapper{min-height:0;transition:visibility 0.3s;visibility:hidden}.accordion.open .animation-wrapper{visibility:visible}@media (prefers-reduced-motion){.animation-wrapper,.wrapper{transition-duration:0s}}@media print{.accordion:not(.open) .animation-wrapper{display:none}}.accordion .kol-heading-wc .kol-button-wc button .kol-span-wc{justify-items:start}"}},9166:(e,t,i)=>{i.d(t,{a:()=>h,c:()=>l,h:()=>r,v:()=>d});var n=i(2617),a=i(2214);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(o))||void 0===t?void 0:t.length)||0}(e)>=t}function l(e){return s.test(e)}const c=new Set(["string"]),d=(e,t,i={})=>{(0,a.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,i,a,o)=>{var s,c;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,i,a,o)),"string"==typeof t&&!1===r(t,3)&&!1===l(t)&&(0,n.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(i))},h=d},713:(e,t,i)=>{i.d(t,{v:()=>a});var n=i(2214);const a=(e,t,i)=>{(0,n.a)(e,"_open",t,i)}},3919:(e,t,i)=>{i.d(t,{w:()=>a});var n=i(2214);const a=(e,t)=>{(0,n.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);