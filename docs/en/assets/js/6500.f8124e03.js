/*! For license information please see 6500.f8124e03.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6500],{96500:(t,o,a)=>{a.r(o),a.d(o,{kol_badge:()=>h});var e=a(73621),i=a(84548),s=a(76649),r=a(93262),l=a(1694),n=a(17534);(0,s.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const h=class{constructor(t){(0,e.r)(this,t),this.bgColorStr="#000",this.colorStr="#fff",this.id=(0,l.n)(),this.handleColorChange=t=>{const o=(0,i.h)(t);this.bgColorStr=o.backgroundColor,this.colorStr=o.foregroundColor},this._color="#000",this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"},_label:"\u2026"}}render(){return(0,e.h)(e.H,null,(0,e.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,e.h)("kol-span-wc",{id:this.id,_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label}),"object"==typeof this.state._smartButton&&null!==this.state._smartButton&&(0,e.h)("kol-button-wc",{_ariaControls:this.id,_ariaLabel:this.state._smartButton._ariaLabel,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_icon:this.state._smartButton._icon,_iconOnly:!0,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant})))}validateColor(t){(0,i.v)(this,t,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateLabel(t){(0,n.v)(this,t,{hooks:{afterPatch:t=>{"string"==typeof t&&t.length>32&&(0,s.a)(`[KolBadge] The label is too long for a badge (${t.length} > 32).`)}}})}validateSmartButton(t){(0,r.o)(t,(()=>{try{t=(0,r.p)(t)}catch(t){}(0,r.s)(this,"_smartButton",t)}))}componentWillLoad(){this.validateColor(this._color),this.validateLabel(this._label),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_label:["validateLabel"],_smartButton:["validateSmartButton"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>span{display:inline-flex;place-items:center}:host>span>kol-button-wc button{color:inherit}"}},17534:(t,o,a)=>{a.d(o,{a:()=>d,b:()=>u,c:()=>h,h:()=>n,v:()=>b});var e=a(76649),i=a(93262),s=a(71337);const r=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function n(t,o=1){return function(t){var o;return"string"==typeof t&&(null===(o=t.match(r))||void 0===o?void 0:o.length)||0}(t)>=o}function h(t){return l.test(t)}const c=(t,o,a,i)=>{const r=o.has("_ariaLabel")?o.get("_ariaLabel"):a.state._ariaLabel;if("string"==typeof r){const t=o.has("_label")?o.get("_label"):a.state._label;!1===(0,s.i)(t,r)&&("_ariaLabel"===i?o.set("_label",r):o.set("_ariaLabel",void 0),(0,e.a)("The different Aria label is not barrier-free. A different Aria label must start with the label text for reasons of accessibility for voice control."))}},d=(t,o)=>{((t,o,a={})=>{var s;(0,i.w)(t,"_ariaLabel",o,{hooks:{afterPatch:(t,o,i,s)=>{var r,l;"function"==typeof(null===(r=a.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(t,o,i,s)),"string"==typeof t&&t.length>0&&!1===n(t,3)&&!1===h(t)&&(0,e.a)(`The different aria label ("${t}") is not accessible. A different aria label should consist of at least three readable characters.`)},beforePatch:null===(s=a.hooks)||void 0===s?void 0:s.beforePatch}})})(t,o,{hooks:{beforePatch:c}})},b=(t,o,a={})=>{var s;(0,i.w)(t,"_label",o,{hooks:{afterPatch:(t,o,i,s)=>{var r,l;"function"==typeof(null===(r=a.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(t,o,i,s)),"string"==typeof t&&!1===n(t,3)&&!1===h(t)&&(0,e.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,e.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(s=a.hooks)||void 0===s?void 0:s.beforePatch},required:!0})},u=(t,o)=>{b(t,o,{hooks:{beforePatch:c}})}}}]);