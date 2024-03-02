/*! For license information please see 1457.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1457],{1457:(e,t,i)=>{i.r(t),i.d(t,{kol_popover_wc:()=>h});var o=i(5026),s=i(1374),a=i(5175),n=i(8889),r=i(6430),l=i(8125);const h=class{constructor(e){(0,o.r)(this,e),this.alignPopover=e=>{setTimeout((()=>{var t;if("test"!==l.p&&this.triggerElement&&this.popoverElement){const i=this.triggerElement,o=this.popoverElement,a=this.arrowElement,n=[(0,s.o)(null!==(t=null==a?void 0:a.offsetHeight)&&void 0!==t?t:10),(0,s.f)(),(0,s.s)()];a&&n.push((0,s.a)({element:a})),(0,s.c)(i,o,{placement:this.state._align,middleware:n}).then((({x:t,y:i,middlewareData:o,placement:s})=>{this.setPosition(t,i,o,s,e)}))}}))},this.showPopover=()=>{this.addListenersToBody(),this.alignPopover((()=>{this.state=Object.assign(Object.assign({},this.state),{_visible:!0})}))},this.hidePopoverByEscape=e=>{"Escape"===e.key&&this.hidePopover()},this.hidePopoverByClickOutside=e=>{this.host&&!this.host.contains(e.target)&&this.hidePopover()},this.catchHostAndTriggerElement=e=>{e&&(this.host=e,this.triggerElement=e.previousElementSibling)},this.catchPopoverElement=e=>{this.popoverElement=e},this.catchArrowElement=e=>{this.arrowElement=e},this._align="top",this._show=!1,this.state={_align:"top",_show:!1,_visible:!1}}setPosition(e,t,i,o,s){if(this.popoverElement){const a={left:this.popoverElement.style.left,top:this.popoverElement.style.top};if(Object.assign(this.popoverElement.style,{left:`${e}px`,top:`${t}px`}),this.arrowElement&&i.arrow)switch(o){case"top":this.arrowElement.style.inset=`100% auto auto ${i.arrow.x||0}px`,this.arrowElement.style.translate="0 -50%";break;case"right":this.arrowElement.style.inset=`${i.arrow.y||0}px 100% auto auto`,this.arrowElement.style.translate="50% 0";break;case"bottom":this.arrowElement.style.inset=`auto auto 100% ${i.arrow.x||0}px`,this.arrowElement.style.translate="0 50%";break;case"left":this.arrowElement.style.inset=`${i.arrow.y||0}px auto auto 100%`,this.arrowElement.style.translate="-50% 0"}a.left!==this.popoverElement.style.left||a.top!==this.popoverElement.style.top?this.alignPopover(s):"function"==typeof s&&s()}}hidePopover(){var e;this.state=Object.assign(Object.assign({},this.state),{_visible:!1}),this._show=!1,null===(e=this.triggerElement)||void 0===e||e.focus(),this.removeListenersToBody()}addListenersToBody(){var e;const t=(0,r.a)().body;t.addEventListener("keyup",this.hidePopoverByEscape),t.addEventListener("click",this.hidePopoverByClickOutside),null===(e=document.scrollingElement)||void 0===e||e.addEventListener("scroll",this.showPopover,{passive:!0})}removeListenersToBody(){var e;const t=(0,r.a)().body;t.removeEventListener("keyup",this.hidePopoverByEscape),t.removeEventListener("click",this.hidePopoverByClickOutside),null===(e=document.scrollingElement)||void 0===e||e.removeEventListener("scroll",this.showPopover)}render(){return(0,o.h)(o.H,{key:"b9ad440781d509a2deb99be46507e3e37d103ba7",ref:this.catchHostAndTriggerElement},(0,o.h)("div",{key:"fe44ce0a39ffbe34fb387d91d4e00d2e165f0f53",class:{popover:!0,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},(0,o.h)("div",{key:"6b704521719e9ff8882224e5ffa0ea5132efdfa0",class:`arrow ${this.state._align}`,ref:this.catchArrowElement}),(0,o.h)("slot",{key:"1e254c30190427e09ad64d726e3735d49781dc86"})))}validateAlign(e){(0,a.v)(this,e)}validateShow(e){(0,n.v)(this,e),e&&this.showPopover()}componentWillLoad(){this.validateAlign(this._align),this.validateShow(this._show)}static get watchers(){return{_align:["validateAlign"],_show:["validateShow"]}}};h.style=":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}kol-popover{height:0;position:absolute}kol-popover .popover{background-color:#fff;min-height:max-content;min-width:max-content;opacity:0;position:absolute}kol-popover .show{animation:0.3s ease-in forwards fadeInOpacity}kol-popover .disappear{animation:0.3s ease-in backwards fadeInOpacity}kol-popover .arrow{background-color:inherit;height:var(--font-size);position:absolute;rotate:0.125turn;width:var(--font-size);z-index:-1}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"},8889:(e,t,i)=>{i.d(t,{v:()=>s});var o=i(8126);const s=(e,t,i)=>{(0,o.a)(e,"_show",t,i)}}}]);