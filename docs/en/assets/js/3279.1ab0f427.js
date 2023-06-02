/*! For license information please see 3279.1ab0f427.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3279],{73279:(t,e,o)=>{o.r(e),o.d(e,{kol_popover:()=>h});var i=o(83957),s=o(80954),n=o(63091),r=o(11228),a=o(82361),l=o(90323);const h=class{constructor(t){(0,i.r)(this,t),this.alignPopover=t=>{setTimeout((()=>{var e;if("test"!==r.p&&this.triggerElement&&this.popoverElement){const o=this.triggerElement,i=this.popoverElement,n=this.arrowElement,r=[(0,s.o)(null!==(e=null==n?void 0:n.offsetHeight)&&void 0!==e?e:10),(0,s.f)(),(0,s.s)()];n&&r.push((0,s.a)({element:n})),(0,s.c)(o,i,{placement:this.state._alignment,middleware:r}).then((({x:e,y:o,middlewareData:i,placement:s})=>{this.setPosition(e,o,i,s,t)}))}}))},this.showPopover=()=>{this.addListenersToBody(),this.alignPopover((()=>{this.state=Object.assign(Object.assign({},this.state),{_visible:!0})}))},this.hidePopoverByEscape=t=>{"Escape"===t.key&&this.hidePopover()},this.hidePopoverByClickOutside=t=>{this.host&&!this.host.contains(t.target)&&this.hidePopover()},this.catchHostAndTriggerElement=t=>{t&&(this.host=t,this.triggerElement=t.previousElementSibling)},this.catchPopoverElement=t=>{this.popoverElement=t},this.catchArrowElement=t=>{this.arrowElement=t},this._alignment="top",this._show=!1,this.state={_alignment:"top",_show:!1,_visible:!1}}setPosition(t,e,o,i,s){if(this.popoverElement){const n={left:this.popoverElement.style.left,top:this.popoverElement.style.top};if(Object.assign(this.popoverElement.style,{left:`${t}px`,top:`${e}px`}),this.arrowElement&&o.arrow)switch(i){case"top":this.arrowElement.style.inset=`100% auto auto ${o.arrow.x||0}px`,this.arrowElement.style.translate="0 -50%";break;case"right":this.arrowElement.style.inset=`${o.arrow.y||0}px 100% auto auto`,this.arrowElement.style.translate="50% 0";break;case"bottom":this.arrowElement.style.inset=`auto auto 100% ${o.arrow.x||0}px`,this.arrowElement.style.translate="0 50%";break;case"left":this.arrowElement.style.inset=`${o.arrow.y||0}px auto auto 100%`,this.arrowElement.style.translate="-50% 0"}n.left!==this.popoverElement.style.left||n.top!==this.popoverElement.style.top?this.alignPopover(s):"function"==typeof s&&s()}}hidePopover(){var t;this.state=Object.assign(Object.assign({},this.state),{_visible:!1}),this._show=!1,null===(t=this.triggerElement)||void 0===t||t.focus(),this.removeListenersToBody()}addListenersToBody(){var t;const e=(0,n.g)().body;e.addEventListener("keyup",this.hidePopoverByEscape),e.addEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.addEventListener("scroll",this.showPopover,{passive:!0})}removeListenersToBody(){var t;const e=(0,n.g)().body;e.removeEventListener("keyup",this.hidePopoverByEscape),e.removeEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.removeEventListener("scroll",this.showPopover)}render(){return(0,i.h)(i.H,{ref:this.catchHostAndTriggerElement},(0,i.h)("div",{class:{popover:!0,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},(0,i.h)("div",{class:`arrow ${this.state._alignment}`,ref:this.catchArrowElement}),(0,i.h)("slot",null)))}validateAlignment(t){((t,e)=>{(0,a.w)(t,"_alignment",e)})(this,t)}validateShow(t){(0,l.v)(this,t),t&&this.showPopover()}componentWillLoad(){this.validateAlignment(this._alignment),this.validateShow(this._show)}static get watchers(){return{_alignment:["validateAlignment"],_show:["validateShow"]}}};h.style=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-popover{height:0;position:absolute}kol-popover .popover{background-color:#fff;min-height:max-content;min-width:max-content;opacity:0;position:absolute}kol-popover .hidden{display:none}kol-popover .show{animation:0.3s ease-in forwards fadeInOpacity}kol-popover .disappear{animation:0.3s ease-in backwards fadeInOpacity}kol-popover .arrow{background-color:inherit;height:var(--font-size);position:absolute;rotate:0.125turn;width:var(--font-size);z-index:-1}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"},90323:(t,e,o)=>{o.d(e,{v:()=>s});var i=o(82361);const s=(t,e,o)=>{(0,i.b)(t,"_show",e,o)}}}]);