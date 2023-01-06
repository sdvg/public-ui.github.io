/*! For license information please see 1671.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1671],{80718:(t,e,i)=>{i.d(e,{w:()=>l});var o=i(68424);const l=(t,e,i)=>{(0,o.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["TooltipAlignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},81671:(t,e,i)=>{i.r(e),i.d(e,{kol_tooltip:()=>n});var o=i(72947),l=i(80718),s=i(33810),a=i(68424);const n=class{constructor(t){(0,o.r)(this,t),this.hydrated=!1,this.hostElement=null,this.childElements=[],this.alignTooltip=()=>{const t=this.childElements[0];{const e=t.getBoundingClientRect();if(this.tooltipElement instanceof HTMLElement){switch(this.state._align){case"top":case"bottom":this.tooltipElement.style.left=e.left+t.offsetWidth/2-this.tooltipElement.offsetWidth/2+"px";break;default:this.tooltipElement.style.top=e.top+e.height/2-this.tooltipElement.offsetHeight/2+"px"}switch(this.state._align){case"left":this.tooltipElement.style.left=`calc(${e.left-this.tooltipElement.offsetWidth}px - 0.5em)`;break;case"right":this.tooltipElement.style.left=`calc(${e.right}px + 0.5em)`;break;case"bottom":this.tooltipElement.style.top=`calc(${e.bottom}px + 0.5em)`;break;default:this.tooltipElement.style.top=`calc(${e.top-this.tooltipElement.offsetHeight}px - 0.5em)`}}}},this.showTooltip=()=>{this.tooltipElement instanceof HTMLElement&&(this.tooltipElement.style.setProperty("display","block"),(0,s.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip(),this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.alignTooltip))},this.hideTooltip=()=>{this.tooltipElement instanceof HTMLElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.alignTooltip))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,s.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.catchHostElement=t=>{if(this.hostElement=t,this.hostElement instanceof HTMLElement){const t=this.hostElement.previousElementSibling;t instanceof HTMLElement&&(t.removeEventListener("mouseover",this.showTooltip),t.addEventListener("mouseover",this.showTooltip),t.removeEventListener("focus",this.showTooltip),t.addEventListener("focus",this.showTooltip),t.removeEventListener("mouseout",this.hideTooltip),t.addEventListener("mouseout",this.hideTooltip),t.removeEventListener("blur",this.hideTooltip),t.addEventListener("blur",this.hideTooltip),this.childElements.push(t))}},this.catchTooltipElement=t=>{this.tooltipElement=t},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,s.n)(),_label:""}}render(){const t=setTimeout((()=>{clearTimeout(t),this.alignTooltip()}),250);return(0,o.h)(o.H,{ref:this.catchHostElement,style:{maxWidth:"300px"}},""!==this.state._label&&(0,o.h)("kol-badge",{class:{"arrow-bottom":"top"===this.state._align,"arrow-left":"right"===this.state._align,"arrow-top":"bottom"===this.state._align,"arrow-right":"left"===this.state._align},id:this.state._id,ref:this.catchTooltipElement,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label}))}validateAlign(t){(0,l.w)(this,"_align",t)}validateId(t){(0,a.w)(this,"_id",t)}validateLabel(t){(0,a.w)(this,"_label",t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label),this.hydrated=!0}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};n.style={default:'kol-badge,.tooltip{font-size:1rem;position:fixed;animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;display:none;z-index:1000;max-width:300px;box-shadow:0 0 0.15rem rgba(255, 255, 255, 0.8)}kol-badge::after,.tooltip::after{content:" ";position:absolute;border-style:solid;border-width:5px}kol-badge.arrow-left::after,.tooltip.arrow-left::after{margin-top:-5px;top:50%;right:100%;border-color:transparent black transparent transparent}kol-badge.arrow-right::after,.tooltip.arrow-right::after{margin-top:-5px;top:50%;left:100%;border-color:transparent transparent transparent black}kol-badge.arrow-top::after,.tooltip.arrow-top::after{margin-left:-5px;left:50%;bottom:100%;border-color:transparent transparent black transparent}kol-badge.arrow-bottom::after,.tooltip.arrow-bottom::after{margin-left:-5px;left:50%;top:100%;border-color:black transparent transparent transparent}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}'}}}]);