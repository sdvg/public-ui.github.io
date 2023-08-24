/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as t,h as i,H as s}from"./index-330c31f9.js";import{c as o,o as e,f as a,s as n,a as h}from"./floating-ui.dom.esm-0dc6aa99.js";import{w as r}from"./prop.validators-0a66a178.js";import{v as p}from"./show-8a6bea2a.js";import{g as l}from"./dev.utils-5b0de6da.js";import{p as c}from"./reuse-c2156413.js";import"./a11y.tipps-beae7792.js";import"./index-3711603c.js";const d=(t,i)=>{r(t,"_align",i)};const f=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-popover{height:0;position:absolute}kol-popover .popover{background-color:#fff;min-height:max-content;min-width:max-content;opacity:0;position:absolute}kol-popover .hidden{display:none}kol-popover .show{animation:0.3s ease-in forwards fadeInOpacity}kol-popover .disappear{animation:0.3s ease-in backwards fadeInOpacity}kol-popover .arrow{background-color:inherit;height:var(--font-size);position:absolute;rotate:0.125turn;width:var(--font-size);z-index:-1}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}";const u=class{constructor(i){t(this,i);this.alignPopover=t=>{setTimeout((()=>{var i;if(c!=="test"&&this.triggerElement&&this.popoverElement){const s=this.triggerElement;const r=this.popoverElement;const p=this.arrowElement;const l=[e((i=p===null||p===void 0?void 0:p.offsetHeight)!==null&&i!==void 0?i:10),a(),n()];if(p){l.push(h({element:p}))}void o(s,r,{placement:this.state._align,middleware:l}).then((({x:i,y:s,middlewareData:o,placement:e})=>{this.setPosition(i,s,o,e,t)}))}}))};this.showPopover=()=>{this.addListenersToBody();this.alignPopover((()=>{this.state=Object.assign(Object.assign({},this.state),{_visible:true})}))};this.hidePopoverByEscape=t=>{if(t.key==="Escape")this.hidePopover()};this.hidePopoverByClickOutside=t=>{if(this.host&&!this.host.contains(t.target)){this.hidePopover()}};this.catchHostAndTriggerElement=t=>{if(t){this.host=t;this.triggerElement=t.previousElementSibling}};this.catchPopoverElement=t=>{this.popoverElement=t};this.catchArrowElement=t=>{this.arrowElement=t};this._align="top";this._show=false;this.state={_align:"top",_show:false,_visible:false}}setPosition(t,i,s,o,e){if(this.popoverElement){const a={left:this.popoverElement.style.left,top:this.popoverElement.style.top};Object.assign(this.popoverElement.style,{left:`${t}px`,top:`${i}px`});if(this.arrowElement&&s.arrow){switch(o){case"top":this.arrowElement.style.inset=`100% auto auto ${s.arrow.x||0}px`;this.arrowElement.style.translate="0 -50%";break;case"right":this.arrowElement.style.inset=`${s.arrow.y||0}px 100% auto auto`;this.arrowElement.style.translate="50% 0";break;case"bottom":this.arrowElement.style.inset=`auto auto 100% ${s.arrow.x||0}px`;this.arrowElement.style.translate="0 50%";break;case"left":this.arrowElement.style.inset=`${s.arrow.y||0}px auto auto 100%`;this.arrowElement.style.translate="-50% 0";break}}if(a.left!==this.popoverElement.style.left||a.top!==this.popoverElement.style.top){this.alignPopover(e)}else if(typeof e==="function"){e()}}}hidePopover(){var t;this.state=Object.assign(Object.assign({},this.state),{_visible:false});this._show=false;(t=this.triggerElement)===null||t===void 0?void 0:t.focus();this.removeListenersToBody()}addListenersToBody(){var t;const i=l().body;i.addEventListener("keyup",this.hidePopoverByEscape);i.addEventListener("click",this.hidePopoverByClickOutside);(t=document.scrollingElement)===null||t===void 0?void 0:t.addEventListener("scroll",this.showPopover,{passive:true})}removeListenersToBody(){var t;const i=l().body;i.removeEventListener("keyup",this.hidePopoverByEscape);i.removeEventListener("click",this.hidePopoverByClickOutside);(t=document.scrollingElement)===null||t===void 0?void 0:t.removeEventListener("scroll",this.showPopover)}render(){return i(s,{ref:this.catchHostAndTriggerElement},i("div",{class:{popover:true,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},i("div",{class:`arrow ${this.state._align}`,ref:this.catchArrowElement}),i("slot",null)))}validateAlign(t){d(this,t)}validateShow(t){p(this,t);if(t)this.showPopover()}componentWillLoad(){this.validateAlign(this._align);this.validateShow(this._show)}static get watchers(){return{_align:["validateAlign"],_show:["validateShow"]}}};u.style=f;export{u as kol_popover};
//# sourceMappingURL=kol-popover.entry.js.map