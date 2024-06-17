/*! For license information please see 4014.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[4014],{4014:(t,i,e)=>{e.r(i),e.d(i,{kol_tooltip_wc:()=>c});var o=e(6954),s=e(1914),n=e(5674),l=e(4626),a=e(4266),h=e(1263),r=e(5206),d=e(6633);const p=new Set,c=class{constructor(t){(0,o.r)(this,t),this.hasFocusIn=!1,this.hasMouseIn=!1,this.alignTooltip=()=>{var t;if("test"!==r.p&&this.previousSibling&&this.tooltipElement){const i=this.previousSibling,e=this.tooltipElement,o=this.arrowElement,n=[(0,s.o)(null!==(t=null==o?void 0:o.offsetHeight)&&void 0!==t?t:10),(0,s.f)(),(0,s.s)()];o&&n.push((0,s.a)({element:o})),(0,s.c)(i,e,{placement:this.state._align,middleware:n}).then((({x:t,y:i,middlewareData:s,placement:n})=>{var l,a;Object.assign(e.style,{left:`${t}px`,top:`${i}px`,visibility:"visible"}),o&&((null===(l=s.arrow)||void 0===l?void 0:l.x)?Object.assign(o.style,{left:`${s.arrow.x}px`,top:"bottom"===n?-o.offsetHeight/2+"px":"",bottom:"top"===n?-o.offsetHeight/2+"px":""}):(null===(a=s.arrow)||void 0===a?void 0:a.y)&&Object.assign(o.style,{left:"right"===n?-o.offsetWidth/2+"px":"",right:"left"===n?-o.offsetWidth/2+"px":"",top:`${s.arrow.y}px`}))}))}},this.showTooltip=()=>{if(this.previousSibling&&this.tooltipElement){t=this.tooltipElement,p.forEach((t=>{t.style.setProperty("z-index","999")})),p.add(t),t.style.setProperty("z-index","1000"),this.tooltipElement.style.setProperty("display","block"),(0,h.g)().addEventListener("keyup",this.hideTooltipByEscape);const i=this.previousSibling,e=this.tooltipElement;this.cleanupAutoPositioning=(0,s.b)(i,e,this.alignTooltip)}var t},this.hideTooltip=()=>{this.tooltipElement&&(function(t){if(p.delete(t),p.size>0){const t=Array.from(p).pop();t&&t.style.setProperty("z-index","1000")}}(this.tooltipElement),this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),this.cleanupAutoPositioning&&(this.cleanupAutoPositioning(),this.cleanupAutoPositioning=void 0)),(0,h.g)().removeEventListener("keyup",this.hideTooltipByEscape)},this.hideTooltipByEscape=t=>{"Escape"===t.key&&this.hideTooltip()},this.addListeners=t=>{t.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),t.addEventListener("mouseleave",this.handleMouseleave.bind(this)),t.addEventListener("focusin",this.handleFocusIn.bind(this)),t.addEventListener("focusout",this.handleFocusout.bind(this))},this.removeListeners=t=>{t.removeEventListener("mouseenter",this.handleMouseEnter.bind(this)),t.removeEventListener("mouseleave",this.handleMouseleave.bind(this)),t.removeEventListener("focusin",this.handleFocusIn.bind(this)),t.removeEventListener("focusout",this.handleFocusout.bind(this))},this.resyncListeners=(t,i,e=!1)=>{t&&this.removeListeners(t),i&&(e&&(this.previousSibling=i),this.addListeners(i))},this.catchTooltipElement=t=>{this.tooltipElement=t},this.catchArrowElement=t=>{this.arrowElement=t},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{this.hasMouseIn||this.hasFocusIn?this.showTooltip():this.hideTooltip()}),300)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_label:"…"}}handleMouseEnter(){this.hasMouseIn=!0,this.showOrHideTooltip()}handleMouseleave(){this.hasMouseIn=!1,this.showOrHideTooltip()}handleFocusIn(){this.hasFocusIn=!0,this.showOrHideTooltip()}handleFocusout(){this.hasFocusIn=!1,this.showOrHideTooltip()}render(){return(0,o.h)(o.H,{key:"7f8ecf9c0a2290dfd6906b51ff94c044fb244312",class:"kol-tooltip-wc"},""!==this.state._label&&(0,o.h)("div",{key:"1a19732e88a727300b48f71a7747e2258a94b57f",class:"tooltip-floating",ref:this.catchTooltipElement},(0,o.h)("div",{key:"c61adf4a1eef293b9c3d6f6685fca8b7243d7a8e",class:"tooltip-area tooltip-arrow",ref:this.catchArrowElement}),(0,o.h)(d.g,{key:"92da4f72212174f0d0ae65a31f4d06065a707844",class:"tooltip-area tooltip-content",id:this.state._id,_label:this.state._label})))}validateAlign(t){(0,n.v)(this,t)}validateId(t){((t,i)=>{(0,l.d)(t,"_id",i)})(this,t)}validateLabel(t){(0,a.v)(this,t,{required:!0})}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}handleEventListeners(){var t;this.resyncListeners(this.previousSibling,null===(t=this.host)||void 0===t?void 0:t.previousElementSibling,!0),this.resyncListeners(this.tooltipElement,this.tooltipElement)}connectedCallback(){var t;this.previousSibling=null===(t=this.host)||void 0===t?void 0:t.previousElementSibling}componentDidRender(){this.handleEventListeners()}disconnectedCallback(){this.previousSibling&&(this.removeListeners(this.previousSibling),this.previousSibling=void 0),this.tooltipElement&&this.removeListeners(this.tooltipElement),this.cleanupAutoPositioning&&this.cleanupAutoPositioning()}get host(){return(0,o.g)(this)}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};c.style=":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.kol-tooltip-wc .tooltip-floating{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeInOpacity;animation-timing-function:ease-in;box-sizing:border-box;display:none;position:absolute;visibility:hidden;top:0;left:0;max-width:90vw;max-height:90vh;width:var(--kol-tooltip-width)}.kol-tooltip-wc .tooltip-area{background-color:#fff;color:#000}.kol-tooltip-wc .tooltip-arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}.kol-tooltip-wc .tooltip-content{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"},4266:(t,i,e)=>{e.d(i,{a:()=>p,c:()=>h,h:()=>a,v:()=>d});var o=e(7784),s=e(4626);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function a(t,i=1){return function(t){var i;return"string"==typeof t&&(null===(i=t.match(n))||void 0===i?void 0:i.length)||0}(t)>=i}function h(t){return l.test(t)}const r=new Set(["string"]),d=(t,i,e={})=>{(0,s.w)(t,"_label",(t=>"string"==typeof t),r,i,function(t){var i;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(i,e,s,n)=>{var l,r;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(r=t.hooks)||void 0===r||r.afterPatch(i,e,s,n)),"string"==typeof i&&!1===a(i,3)&&!1===h(i)&&(0,o.a)(`The heading or label ("${i}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof i&&i.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(i=t.hooks)||void 0===i?void 0:i.beforePatch}})}(e))},p=d}}]);