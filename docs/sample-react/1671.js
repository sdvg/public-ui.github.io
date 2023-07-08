/*! For license information please see 1671.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1671],{9970:(t,e,i)=>{i.d(e,{w:()=>s});var o=i(2996);const s=(t,e,i)=>{(0,o.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},1671:(t,e,i)=>{i.r(e),i.d(e,{kol_tooltip:()=>c});var o=i(578),s=i(1461),n=i(9970),l=i(6535),r=i(834),a=i(2996),h=i(1383);const p=new Set,c=class{constructor(t){(0,o.r)(this,t),this.alignTooltip=()=>{var t;if("test"!==h.p&&this.previousSibling&&this.tooltipElement){const e=this.previousSibling,i=this.tooltipElement,o=this.arrowElement,n=[(0,s.o)(null!==(t=null==o?void 0:o.offsetHeight)&&void 0!==t?t:10),(0,s.f)(),(0,s.s)()];o&&n.push((0,s.a)({element:o})),(0,s.c)(e,i,{placement:this.state._align,middleware:n}).then((({x:t,y:e,middlewareData:s,placement:n})=>{var l,r;Object.assign(i.style,{left:`${t}px`,top:`${e}px`,visibility:"visible"}),o&&((null===(l=s.arrow)||void 0===l?void 0:l.x)?Object.assign(o.style,{left:`${s.arrow.x}px`,top:"bottom"===n?-o.offsetHeight/2+"px":"",bottom:"top"===n?-o.offsetHeight/2+"px":""}):(null===(r=s.arrow)||void 0===r?void 0:r.y)&&Object.assign(o.style,{left:"right"===n?-o.offsetWidth/2+"px":"",right:"left"===n?-o.offsetWidth/2+"px":"",top:`${s.arrow.y}px`}))}))}},this.showTooltip=()=>{if(this.previousSibling&&this.tooltipElement){(function(t){p.forEach((t=>{t.style.setProperty("z-index","999")})),p.add(t),t.style.setProperty("z-index","1000")})(this.tooltipElement),this.tooltipElement.style.setProperty("display","block"),(0,r.g)().body.addEventListener("keyup",this.hideTooltipByEscape);const t=this.previousSibling,e=this.tooltipElement;this.cleanupAutoPositioning=(0,s.b)(t,e,this.alignTooltip)}},this.hideTooltip=()=>{this.tooltipElement&&(function(t){if(p.delete(t),p.size>0){const t=Array.from(p).pop();t&&t.style.setProperty("z-index","1000")}}(this.tooltipElement),this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),this.cleanupAutoPositioning&&(this.cleanupAutoPositioning(),this.cleanupAutoPositioning=void 0))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,r.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,r.n)(),_label:"…"}}render(){return(0,o.h)(o.H,{ref:this.catchHostElement},""!==this.state._label&&(0,o.h)("div",{id:"floating",ref:this.catchTooltipElement},(0,o.h)("div",{class:"area",id:"arrow",ref:this.catchArrowElement}),(0,o.h)("kol-span-wc",{class:"area",id:this.state._id,_label:this.state._label})))}validateAlign(t){(0,n.w)(this,"_align",t)}validateId(t){(0,a.w)(this,"_id",t)}validateLabel(t){(0,l.v)(this,t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement),this.cleanupAutoPositioning&&this.cleanupAutoPositioning()}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};c.style=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip #floating{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeInOpacity;animation-timing-function:ease-in;box-sizing:border-box;display:none;position:absolute;visibility:hidden;width:max-content;top:0;left:0}kol-tooltip #arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip .area{background-color:#fff;color:#000}kol-tooltip kol-span-wc{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"},6535:(t,e,i)=>{i.d(e,{a:()=>u,c:()=>a,h:()=>r,v:()=>c});var o=i(8242),s=i(2996);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function a(t){return l.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,s,n)=>{var l,h;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,s,n)),"string"==typeof e&&!1===r(e,3)&&!1===a(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const p=new Set(["string"]),c=(t,e,i={})=>{(0,s.a)(t,"_label",(t=>"string"==typeof t),p,e,h(i))},d=new Set(["string","false"]),u=(t,e,i={})=>{""===e&&(e=!1),(0,s.a)(t,"_label",(t=>!1===t||"string"==typeof t),d,e,h(i))}}}]);