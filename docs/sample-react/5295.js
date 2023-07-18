/*! For license information please see 5295.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5295],{7544:(t,e,i)=>{i.d(e,{v:()=>l});var o=i(3170);const l=(t,e)=>{(0,o.b)(t,"_hideLabel",e)}},886:(t,e,i)=>{i.d(e,{i:()=>s,v:()=>c,w:()=>h});var o=i(3170),l=i(1383);const n=(t,e,i)=>{(0,l.c)(i)?t[e]=i:(0,l.i)(i,1)&&(t[e]={icon:i})},a=t=>{var e,i,o,a,s,c,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),s=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(a=t.nextState)||void 0===a||a.set("_icon",((t,e)=>{let i={};return(0,l.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,s))}else if(null===(s=t.nextState)||void 0===s?void 0:s.has("_iconAlign")){const e=t.state._iconAlign;null===(c=t.nextState)||void 0===c||c.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,l.b)(t.style))&&(0,l.i)(t.icon,1),c=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.a)(t,"_icon",(t=>null===t||(0,l.i)(t,1)||"object"==typeof t&&null!==t&&((0,l.i)(t.left,1)||s(t.left)||(0,l.i)(t.right,1)||s(t.right)||(0,l.i)(t.top,1)||s(t.top)||(0,l.i)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),a(t)}},required:!0})}))},h=(t,e)=>{(0,o.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{a(t)}}})}},5295:(t,e,i)=>{i.r(e),i.d(e,{kol_span_wc:()=>s});var o=i(578),l=i(7544),n=i(886),a=i(4420);const s=class{constructor(t){(0,o.r)(this,t),this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this.state={_hideLabel:!1,_icon:{},_label:!1}}render(){const t="string"==typeof this.state._label;return(0,o.h)(o.H,{class:{"icon-only":!!this.state._hideLabel,"hide-label":!!this.state._hideLabel}},this.state._icon.top&&(0,o.h)("kol-icon",{class:"icon top",style:this.state._icon.top.style,_label:"",_icon:this.state._icon.top.icon}),(0,o.h)("span",null,this.state._icon.left&&(0,o.h)("kol-icon",{class:"icon left",style:this.state._icon.left.style,_label:"",_icon:this.state._icon.left.icon}),!this.state._hideLabel&&t?(0,o.h)("span",null,this.state._label):"",(0,o.h)("span",{"aria-hidden":t?"true":void 0,hidden:t},(0,o.h)("slot",{name:"expert"})),this.state._icon.right&&(0,o.h)("kol-icon",{class:"icon right",style:this.state._icon.right.style,_label:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&(0,o.h)("kol-icon",{class:"icon bottom",style:this.state._icon.bottom.style,_label:"",_icon:this.state._icon.bottom.icon}))}validateHideLabel(t){(0,l.v)(this,t)}validateIcon(t){(0,n.v)(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateLabel(t){(0,a.a)(this,t)}componentWillLoad(){this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateLabel(this._label)}static get watchers(){return{_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}}},4420:(t,e,i)=>{i.d(e,{a:()=>b,c:()=>c,h:()=>s,v:()=>d});var o=i(2977),l=i(3170);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,a=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function c(t){return a.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,l,n)=>{var a,h;"function"==typeof(null===(a=t.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,l,n)),"string"==typeof e&&!1===s(e,3)&&!1===c(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const r=new Set(["string"]),d=(t,e,i={})=>{(0,l.a)(t,"_label",(t=>"string"==typeof t),r,e,h(i))},_=new Set(["string","false"]),b=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,l.a)(t,"_label",(t=>!1===t||"string"==typeof t),_,e,h(i))}}}]);