/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-2c046ff1.js";import{c as computePosition,o as offset,f as flip,s as shift,a as arrow}from"./floating-ui.dom.esm-26e61da8.js";import{w as watchString}from"./prop.validators-601f1068.js";import{v as validateShow}from"./show-6d33a33f.js";import{g as getDocument}from"./dev.utils-4290338e.js";import{p as processEnv}from"./reuse-c2156413.js";import"./a11y.tipps-9f948961.js";import"./index-37b5cbcf.js";const validateAlign=(t,e)=>{watchString(t,"_align",e)},styleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-popover{height:0;position:absolute}kol-popover .popover{background-color:#fff;min-height:max-content;min-width:max-content;opacity:0;position:absolute}kol-popover .hidden{display:none}kol-popover .show{animation:0.3s ease-in forwards fadeInOpacity}kol-popover .disappear{animation:0.3s ease-in backwards fadeInOpacity}kol-popover .arrow{background-color:inherit;height:var(--font-size);position:absolute;rotate:0.125turn;width:var(--font-size);z-index:-1}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}",KolPopover=class{constructor(t){registerInstance(this,t),this.alignPopover=t=>{setTimeout((()=>{var e;if("test"!==processEnv&&this.triggerElement&&this.popoverElement){const o=this.triggerElement,i=this.popoverElement,s=this.arrowElement,r=[offset(null!==(e=null==s?void 0:s.offsetHeight)&&void 0!==e?e:10),flip(),shift()];s&&r.push(arrow({element:s})),computePosition(o,i,{placement:this.state._align,middleware:r}).then((({x:e,y:o,middlewareData:i,placement:s})=>{this.setPosition(e,o,i,s,t)}))}}))},this.showPopover=()=>{this.addListenersToBody(),this.alignPopover((()=>{this.state=Object.assign(Object.assign({},this.state),{_visible:!0})}))},this.hidePopoverByEscape=t=>{"Escape"===t.key&&this.hidePopover()},this.hidePopoverByClickOutside=t=>{this.host&&!this.host.contains(t.target)&&this.hidePopover()},this.catchHostAndTriggerElement=t=>{t&&(this.host=t,this.triggerElement=t.previousElementSibling)},this.catchPopoverElement=t=>{this.popoverElement=t},this.catchArrowElement=t=>{this.arrowElement=t},this._align="top",this._show=!1,this.state={_align:"top",_show:!1,_visible:!1}}setPosition(t,e,o,i,s){if(this.popoverElement){const r={left:this.popoverElement.style.left,top:this.popoverElement.style.top};if(Object.assign(this.popoverElement.style,{left:`${t}px`,top:`${e}px`}),this.arrowElement&&o.arrow)switch(i){case"top":this.arrowElement.style.inset=`100% auto auto ${o.arrow.x||0}px`,this.arrowElement.style.translate="0 -50%";break;case"right":this.arrowElement.style.inset=`${o.arrow.y||0}px 100% auto auto`,this.arrowElement.style.translate="50% 0";break;case"bottom":this.arrowElement.style.inset=`auto auto 100% ${o.arrow.x||0}px`,this.arrowElement.style.translate="0 50%";break;case"left":this.arrowElement.style.inset=`${o.arrow.y||0}px auto auto 100%`,this.arrowElement.style.translate="-50% 0"}r.left!==this.popoverElement.style.left||r.top!==this.popoverElement.style.top?this.alignPopover(s):"function"==typeof s&&s()}}hidePopover(){var t;this.state=Object.assign(Object.assign({},this.state),{_visible:!1}),this._show=!1,null===(t=this.triggerElement)||void 0===t||t.focus(),this.removeListenersToBody()}addListenersToBody(){var t;const e=getDocument().body;e.addEventListener("keyup",this.hidePopoverByEscape),e.addEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.addEventListener("scroll",this.showPopover,{passive:!0})}removeListenersToBody(){var t;const e=getDocument().body;e.removeEventListener("keyup",this.hidePopoverByEscape),e.removeEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.removeEventListener("scroll",this.showPopover)}render(){return h(Host,{ref:this.catchHostAndTriggerElement},h("div",{class:{popover:!0,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},h("div",{class:`arrow ${this.state._align}`,ref:this.catchArrowElement}),h("slot",null)))}validateAlign(t){validateAlign(this,t)}validateShow(t){validateShow(this,t),t&&this.showPopover()}componentWillLoad(){this.validateAlign(this._align),this.validateShow(this._show)}static get watchers(){return{_align:["validateAlign"],_show:["validateShow"]}}};KolPopover.style=styleCss;export{KolPopover as kol_popover};