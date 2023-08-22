/*! For license information please see 9583.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9583],{2651:(t,i,e)=>{e.d(i,{v:()=>s});var o=e(8949);const s=(t,i,e={})=>{(0,o.a)(t,"_hideLabel",i,e)}},6931:(t,i,e)=>{e.d(i,{i:()=>a,v:()=>h,w:()=>r});var o=e(8949),s=e(1383);const n=(t,i,e)=>{(0,s.c)(e)?t[i]=e:(0,s.i)(e,1)&&(t[i]={icon:e})},l=t=>{var i,e,o,l,a,h,r;if(null===(i=t.nextState)||void 0===i?void 0:i.has("_icon")){const i=null===(e=t.nextState)||void 0===e?void 0:e.get("_icon"),a=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(l=t.nextState)||void 0===l||l.set("_icon",((t,i)=>{let e={};return(0,s.i)(t,1)?e="right"===i?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(e,"top",t.top),n(e,"right",t.right),n(e,"bottom",t.bottom),n(e,"left",t.left)),e})(i,a))}else if(null===(a=t.nextState)||void 0===a?void 0:a.has("_iconAlign")){const i=t.state._iconAlign;null===(h=t.nextState)||void 0===h||h.set("_icon",{[i]:void 0,[null===(r=t.nextState)||void 0===r?void 0:r.get("_iconAlign")]:t.state._icon[i]})}},a=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,s.b)(t.style))&&(0,s.i)(t.icon,1),h=(t,i)=>{(0,o.o)(i,(()=>{try{i=(0,o.p)(i)}catch(t){}(0,o.w)(t,"_icon",(t=>null===t||(0,s.i)(t,1)||"object"==typeof t&&null!==t&&((0,s.i)(t.left,1)||a(t.left)||(0,s.i)(t.right,1)||a(t.right)||(0,s.i)(t.top,1)||a(t.top)||(0,s.i)(t.bottom,1)||a(t.bottom))),new Set(["KoliBriIcon"]),i,{hooks:{beforePatch:(i,e)=>{null===i&&e.set("_icon",{}),l(t)}},required:!0})}))},r=(t,i)=>{(0,o.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),i,{hooks:{beforePatch:()=>{l(t)}}})}},9583:(t,i,e)=>{e.r(i),e.d(i,{kol_span_wc:()=>p,kol_tooltip_wc:()=>v});var o=e(2108),s=e(2651),n=e(6931),l=e(1577),a=e(386),h=e(3924),r=e(8949),c=e(9612),d=e(1383);const p=class{constructor(t){(0,o.r)(this,t),this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this.state={_hideLabel:!1,_icon:{},_label:!1}}render(){const t="string"==typeof this.state._label;return(0,o.h)(o.H,{class:{"icon-only":!!this.state._hideLabel,"hide-label":!!this.state._hideLabel}},this.state._icon.top&&(0,o.h)("kol-icon",{class:"icon top",style:this.state._icon.top.style,_label:"",_icon:this.state._icon.top.icon}),(0,o.h)("span",null,this.state._icon.left&&(0,o.h)("kol-icon",{class:"icon left",style:this.state._icon.left.style,_label:"",_icon:this.state._icon.left.icon}),!this.state._hideLabel&&t?(0,o.h)("span",{class:"span-label"},this.state._label):"",(0,o.h)("span",{"aria-hidden":t?"true":void 0,class:"span-label",hidden:t},(0,o.h)("slot",{name:"expert"})),this.state._icon.right&&(0,o.h)("kol-icon",{class:"icon right",style:this.state._icon.right.style,_label:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&(0,o.h)("kol-icon",{class:"icon bottom",style:this.state._icon.bottom.style,_label:"",_icon:this.state._icon.bottom.icon}))}validateHideLabel(t){(0,s.v)(this,t)}validateIcon(t){(0,n.v)(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateLabel(t){(0,l.a)(this,t)}componentWillLoad(){this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateLabel(this._label)}static get watchers(){return{_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}},u=new Set,v=class{constructor(t){(0,o.r)(this,t),this.alignTooltip=()=>{var t;if("test"!==d.p&&this.previousSibling&&this.tooltipElement){const i=this.previousSibling,e=this.tooltipElement,o=this.arrowElement,s=[(0,a.o)(null!==(t=null==o?void 0:o.offsetHeight)&&void 0!==t?t:10),(0,a.f)(),(0,a.s)()];o&&s.push((0,a.a)({element:o})),(0,a.c)(i,e,{placement:this.state._align,middleware:s}).then((({x:t,y:i,middlewareData:s,placement:n})=>{var l,a;Object.assign(e.style,{left:`${t}px`,top:`${i}px`,visibility:"visible"}),o&&((null===(l=s.arrow)||void 0===l?void 0:l.x)?Object.assign(o.style,{left:`${s.arrow.x}px`,top:"bottom"===n?-o.offsetHeight/2+"px":"",bottom:"top"===n?-o.offsetHeight/2+"px":""}):(null===(a=s.arrow)||void 0===a?void 0:a.y)&&Object.assign(o.style,{left:"right"===n?-o.offsetWidth/2+"px":"",right:"left"===n?-o.offsetWidth/2+"px":"",top:`${s.arrow.y}px`}))}))}},this.showTooltip=()=>{if(this.previousSibling&&this.tooltipElement){(function(t){u.forEach((t=>{t.style.setProperty("z-index","999")})),u.add(t),t.style.setProperty("z-index","1000")})(this.tooltipElement),this.tooltipElement.style.setProperty("display","block"),(0,c.g)().body.addEventListener("keyup",this.hideTooltipByEscape);const t=this.previousSibling,i=this.tooltipElement;this.cleanupAutoPositioning=(0,a.b)(t,i,this.alignTooltip)}},this.hideTooltip=()=>{this.tooltipElement&&(function(t){if(u.delete(t),u.size>0){const t=Array.from(u).pop();t&&t.style.setProperty("z-index","1000")}}(this.tooltipElement),this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),this.cleanupAutoPositioning&&(this.cleanupAutoPositioning(),this.cleanupAutoPositioning=void 0))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,c.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,c.n)(),_label:"…"}}render(){return(0,o.h)(o.H,{ref:this.catchHostElement},""!==this.state._label&&(0,o.h)("div",{class:"tooltip-floating",ref:this.catchTooltipElement},(0,o.h)("div",{class:"tooltip-area tooltip-arrow",ref:this.catchArrowElement}),(0,o.h)("kol-span-wc",{class:"tooltip-area tooltip-content",id:this.state._id,_label:this.state._label})))}validateAlign(t){(0,h.v)(this,t)}validateId(t){((t,i)=>{(0,r.d)(t,"_id",i)})(this,t)}validateLabel(t){(0,l.v)(this,t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement),this.cleanupAutoPositioning&&this.cleanupAutoPositioning()}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};v.style=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip-wc .tooltip-floating{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeInOpacity;animation-timing-function:ease-in;box-sizing:border-box;display:none;position:absolute;visibility:hidden;top:0;left:0;max-width:90vw;max-height:90vh}kol-tooltip-wc .tooltip-area{background-color:#fff;color:#000}kol-tooltip-wc .tooltip-arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip-wc .tooltip-content{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"},1577:(t,i,e)=>{e.d(i,{a:()=>u,c:()=>h,h:()=>a,v:()=>d});var o=e(7734),s=e(8949);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function a(t,i=1){return function(t){var i;return"string"==typeof t&&(null===(i=t.match(n))||void 0===i?void 0:i.length)||0}(t)>=i}function h(t){return l.test(t)}function r(t){var i;return{hooks:{afterPatch:(i,e,s,n)=>{var l,r;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(r=t.hooks)||void 0===r||r.afterPatch(i,e,s,n)),"string"==typeof i&&!1===a(i,3)&&!1===h(i)&&(0,o.a)(`The heading or label ("${i}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof i&&i.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(i=t.hooks)||void 0===i?void 0:i.beforePatch}}}const c=new Set(["string"]),d=(t,i,e={})=>{(0,s.w)(t,"_label",(t=>"string"==typeof t),c,i,r(e))},p=new Set(["string","false"]),u=(t,i,e={})=>{""!==i&&"false"!==i||(i=!1),(0,s.w)(t,"_label",(t=>!1===t||"string"==typeof t),p,i,r(e))}}}]);