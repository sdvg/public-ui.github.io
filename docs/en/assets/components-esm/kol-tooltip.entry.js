/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-2c046ff1.js";import{c as computePosition,b as autoUpdate,o as offset,f as flip,s as shift,a as arrow}from"./floating-ui.dom.esm-26e61da8.js";import{w as watchTooltipAlignment}from"./button-link-e7a5fabf.js";import{v as validateLabel}from"./label-35927418.js";import{g as getDocument,n as nonce}from"./dev.utils-e98368e1.js";import{w as watchString}from"./prop.validators-e3c93395.js";import{p as processEnv}from"./reuse-c2156413.js";import"./a11y.tipps-255c885e.js";import"./index-37b5cbcf.js";const VISIBLE_OVERLAYS=new Set;function showOverlay(t){VISIBLE_OVERLAYS.forEach((t=>{t.style.setProperty("z-index","999")})),VISIBLE_OVERLAYS.add(t),t.style.setProperty("z-index","1000")}function hideOverlay(t){if(VISIBLE_OVERLAYS.delete(t),VISIBLE_OVERLAYS.size>0){const t=Array.from(VISIBLE_OVERLAYS).pop();t&&t.style.setProperty("z-index","1000")}}const styleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip #floating{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeInOpacity;animation-timing-function:ease-in;box-sizing:border-box;display:none;position:absolute;visibility:hidden;width:max-content;top:0;left:0}kol-tooltip #arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip .area{background-color:#fff;color:#000}kol-tooltip kol-span-wc{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}",KolTooltip=class{constructor(t){registerInstance(this,t),this.alignTooltip=()=>{var t;if("test"!==processEnv&&this.previousSibling&&this.tooltipElement){const i=this.previousSibling,e=this.tooltipElement,o=this.arrowElement,s=[offset(null!==(t=null==o?void 0:o.offsetHeight)&&void 0!==t?t:10),flip(),shift()];o&&s.push(arrow({element:o})),computePosition(i,e,{placement:this.state._align,middleware:s}).then((({x:t,y:i,middlewareData:s,placement:n})=>{var l,a;Object.assign(e.style,{left:`${t}px`,top:`${i}px`,visibility:"visible"}),o&&((null===(l=s.arrow)||void 0===l?void 0:l.x)?Object.assign(o.style,{left:`${s.arrow.x}px`,top:"bottom"===n?-o.offsetHeight/2+"px":"",bottom:"top"===n?-o.offsetHeight/2+"px":""}):(null===(a=s.arrow)||void 0===a?void 0:a.y)&&Object.assign(o.style,{left:"right"===n?-o.offsetWidth/2+"px":"",right:"left"===n?-o.offsetWidth/2+"px":"",top:`${s.arrow.y}px`}))}))}},this.showTooltip=()=>{if(this.previousSibling&&this.tooltipElement){showOverlay(this.tooltipElement),this.tooltipElement.style.setProperty("display","block"),getDocument().body.addEventListener("keyup",this.hideTooltipByEscape);const t=this.previousSibling,i=this.tooltipElement;this.cleanupAutoPositioning=autoUpdate(t,i,this.alignTooltip)}},this.hideTooltip=()=>{this.tooltipElement&&(hideOverlay(this.tooltipElement),this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),this.cleanupAutoPositioning&&(this.cleanupAutoPositioning(),this.cleanupAutoPositioning=void 0))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&(getDocument().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:nonce(),_label:"…"}}render(){return h(Host,{ref:this.catchHostElement},""!==this.state._label&&h("div",{id:"floating",ref:this.catchTooltipElement},h("div",{class:"area",id:"arrow",ref:this.catchArrowElement}),h("kol-span-wc",{class:"area",id:this.state._id,_label:this.state._label})))}validateAlign(t){watchTooltipAlignment(this,"_align",t)}validateId(t){watchString(this,"_id",t)}validateLabel(t){validateLabel(this,t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement),this.cleanupAutoPositioning&&this.cleanupAutoPositioning()}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};KolTooltip.style=styleCss;export{KolTooltip as kol_tooltip};