/*! For license information please see 4027.e775326b.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4027],{44027:(t,e,i)=>{i.r(e),i.d(e,{kol_popover:()=>h});var s=i(76511),o=i(26876),n=i(24766),r=i(30151),a=i(11778),l=i(5530);const h=class{constructor(t){(0,s.r)(this,t),this.alignPopover=t=>{setTimeout((()=>{var e;if("test"!==r.p&&this.triggerElement&&this.popoverElement){const i=this.triggerElement,s=this.popoverElement,n=this.arrowElement,r=[(0,o.o)(null!==(e=null==n?void 0:n.offsetHeight)&&void 0!==e?e:10),(0,o.f)(),(0,o.s)()];n&&r.push((0,o.a)({element:n})),(0,o.c)(i,s,{placement:this.state._alignment,middleware:r}).then((({x:e,y:i,middlewareData:s,placement:o})=>{this.setPosition(e,i,s,o,t)}))}}))},this.showPopover=()=>{this.addListenersToBody(),this.alignPopover((()=>{this.state=Object.assign(Object.assign({},this.state),{_visible:!0})}))},this.hidePopoverByEscape=t=>{"Escape"===t.key&&this.hidePopover()},this.hidePopoverByClickOutside=t=>{this.host&&!this.host.contains(t.target)&&this.hidePopover()},this.catchHostAndTriggerElement=t=>{t&&(this.host=t,this.triggerElement=t.previousElementSibling)},this.catchPopoverElement=t=>{this.popoverElement=t},this.catchArrowElement=t=>{this.arrowElement=t},this._alignment="top",this._show=!1,this.state={_alignment:"top",_show:!1,_visible:!1}}setPosition(t,e,i,s,o){if(this.popoverElement){const n={left:this.popoverElement.style.left,top:this.popoverElement.style.top};if(Object.assign(this.popoverElement.style,{left:`${t}px`,top:`${e}px`}),this.arrowElement&&i.arrow)switch(s){case"top":this.arrowElement.style.inset=`100% auto auto ${i.arrow.x||0}px`,this.arrowElement.style.translate="0 -50%";break;case"right":this.arrowElement.style.inset=`${i.arrow.y||0}px 100% auto auto`,this.arrowElement.style.translate="50% 0";break;case"bottom":this.arrowElement.style.inset=`auto auto 100% ${i.arrow.x||0}px`,this.arrowElement.style.translate="0 50%";break;case"left":this.arrowElement.style.inset=`${i.arrow.y||0}px auto auto 100%`,this.arrowElement.style.translate="-50% 0"}n.left!==this.popoverElement.style.left||n.top!==this.popoverElement.style.top?this.alignPopover(o):"function"==typeof o&&o()}}hidePopover(){var t;this.state=Object.assign(Object.assign({},this.state),{_visible:!1}),this._show=!1,null===(t=this.triggerElement)||void 0===t||t.focus(),this.removeListenersToBody()}addListenersToBody(){var t;const e=(0,n.g)().body;e.addEventListener("keyup",this.hidePopoverByEscape),e.addEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.addEventListener("scroll",this.showPopover,{passive:!0})}removeListenersToBody(){var t;const e=(0,n.g)().body;e.removeEventListener("keyup",this.hidePopoverByEscape),e.removeEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.removeEventListener("scroll",this.showPopover)}render(){return(0,s.h)(s.H,{ref:this.catchHostAndTriggerElement},(0,s.h)("div",{class:{popover:!0,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},(0,s.h)("div",{class:`arrow ${this.state._alignment}`,ref:this.catchArrowElement}),(0,s.h)("slot",null)))}validateAlignment(t){((t,e)=>{(0,a.w)(t,"_alignment",e)})(this,t)}validateShow(t){(0,l.v)(this,t),t&&this.showPopover()}componentWillLoad(){this.validateAlignment(this._alignment),this.validateShow(this._show)}static get watchers(){return{_alignment:["validateAlignment"],_show:["validateShow"]}}};h.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{height:0;position:absolute}.popover{background-color:#fff;box-sizing:border-box;opacity:0;position:absolute}.hidden{display:none}.show{animation:0.3s ease-in forwards fadeInOpacity}.disappear{animation:0.3s ease-in backwards fadeInOpacity}.arrow{background-color:inherit;height:var(--font-size);position:absolute;rotate:0.125turn;width:var(--font-size);z-index:-1}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"}},5530:(t,e,i)=>{i.d(e,{v:()=>o});var s=i(11778);const o=(t,e,i)=>{(0,s.b)(t,"_show",e,i)}}}]);