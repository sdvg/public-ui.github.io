/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{v as validateHideLabel}from"./hide-label-41eaffe3.js";import{v as validateIcon}from"./icon-69eb017d.js";import{a as validateLabelWithExpertSlot,v as validateLabel}from"./label-8e3a47aa.js";import{c as computePosition,b as autoUpdate,o as offset,f as flip,s as shift,a as arrow}from"./floating-ui.dom.esm-0bd7d943.js";import{v as validateAlign}from"./align-14031ad2.js";import{d as watchString}from"./prop.validators-98b8554f.js";import{g as getDocument,n as nonce}from"./dev.utils-8129fd91.js";import{p as processEnv}from"./reuse-c2156413.js";import"./a11y.tipps-c9af0838.js";import"./alignment-a0230c86.js";import"./index-37b5cbcf.js";const KolSpanWc=class{constructor(t){registerInstance(this,t),this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this.state={_hideLabel:!1,_icon:{},_label:!1}}render(){const t="string"==typeof this.state._label;return h(Host,{class:{"icon-only":!!this.state._hideLabel,"hide-label":!!this.state._hideLabel}},this.state._icon.top&&h("kol-icon",{class:"icon top",style:this.state._icon.top.style,_label:"",_icon:this.state._icon.top.icon}),h("span",null,this.state._icon.left&&h("kol-icon",{class:"icon left",style:this.state._icon.left.style,_label:"",_icon:this.state._icon.left.icon}),!this.state._hideLabel&&t?h("span",{class:"span-label"},this.state._label):"",h("span",{"aria-hidden":t?"true":void 0,class:"span-label",hidden:t},h("slot",{name:"expert"})),this.state._icon.right&&h("kol-icon",{class:"icon right",style:this.state._icon.right.style,_label:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&h("kol-icon",{class:"icon bottom",style:this.state._icon.bottom.style,_label:"",_icon:this.state._icon.bottom.icon}))}validateHideLabel(t){validateHideLabel(this,t)}validateIcon(t){validateIcon(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateLabel(t){validateLabelWithExpertSlot(this,t)}componentWillLoad(){this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateLabel(this._label)}static get watchers(){return{_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}},validateId=(t,i)=>{watchString(t,"_id",i)},VISIBLE_OVERLAYS=new Set;function showOverlay(t){VISIBLE_OVERLAYS.forEach((t=>{t.style.setProperty("z-index","999")})),VISIBLE_OVERLAYS.add(t),t.style.setProperty("z-index","1000")}function hideOverlay(t){if(VISIBLE_OVERLAYS.delete(t),VISIBLE_OVERLAYS.size>0){const t=Array.from(VISIBLE_OVERLAYS).pop();t&&t.style.setProperty("z-index","1000")}}const styleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip-wc .tooltip-floating{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeInOpacity;animation-timing-function:ease-in;box-sizing:border-box;display:none;position:absolute;visibility:hidden;top:0;left:0;max-width:90vw;max-height:90vh}kol-tooltip-wc .tooltip-area{background-color:#fff;color:#000}kol-tooltip-wc .tooltip-arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip-wc .tooltip-content{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}",KolTooltip=class{constructor(t){registerInstance(this,t),this.alignTooltip=()=>{var t;if("test"!==processEnv&&this.previousSibling&&this.tooltipElement){const i=this.previousSibling,e=this.tooltipElement,o=this.arrowElement,s=[offset(null!==(t=null==o?void 0:o.offsetHeight)&&void 0!==t?t:10),flip(),shift()];o&&s.push(arrow({element:o})),computePosition(i,e,{placement:this.state._align,middleware:s}).then((({x:t,y:i,middlewareData:s,placement:a})=>{var n,l;Object.assign(e.style,{left:`${t}px`,top:`${i}px`,visibility:"visible"}),o&&((null===(n=s.arrow)||void 0===n?void 0:n.x)?Object.assign(o.style,{left:`${s.arrow.x}px`,top:"bottom"===a?-o.offsetHeight/2+"px":"",bottom:"top"===a?-o.offsetHeight/2+"px":""}):(null===(l=s.arrow)||void 0===l?void 0:l.y)&&Object.assign(o.style,{left:"right"===a?-o.offsetWidth/2+"px":"",right:"left"===a?-o.offsetWidth/2+"px":"",top:`${s.arrow.y}px`}))}))}},this.showTooltip=()=>{if(this.previousSibling&&this.tooltipElement){showOverlay(this.tooltipElement),this.tooltipElement.style.setProperty("display","block"),getDocument().body.addEventListener("keyup",this.hideTooltipByEscape);const t=this.previousSibling,i=this.tooltipElement;this.cleanupAutoPositioning=autoUpdate(t,i,this.alignTooltip)}},this.hideTooltip=()=>{this.tooltipElement&&(hideOverlay(this.tooltipElement),this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),this.cleanupAutoPositioning&&(this.cleanupAutoPositioning(),this.cleanupAutoPositioning=void 0))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&(getDocument().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:nonce(),_label:"…"}}render(){return h(Host,{ref:this.catchHostElement},""!==this.state._label&&h("div",{class:"tooltip-floating",ref:this.catchTooltipElement},h("div",{class:"tooltip-area tooltip-arrow",ref:this.catchArrowElement}),h("kol-span-wc",{class:"tooltip-area tooltip-content",id:this.state._id,_label:this.state._label})))}validateAlign(t){validateAlign(this,t)}validateId(t){validateId(this,t)}validateLabel(t){validateLabel(this,t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement),this.cleanupAutoPositioning&&this.cleanupAutoPositioning()}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};KolTooltip.style=styleCss;export{KolSpanWc as kol_span_wc,KolTooltip as kol_tooltip_wc};