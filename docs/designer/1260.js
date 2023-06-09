/*! For license information please see 1260.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1260],{1260:(t,e,a)=>{a.r(e),a.d(e,{kol_progress:()=>l});var i=a(77747),s=a(4300);const l=class{constructor(t){(0,i.r)(this,t),this._label=void 0,this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this._variant=void 0,this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return(0,i.h)(i.H,null,"cycle"===(t=this.state)._variant?(0,i.h)("svg",{class:"cycle",width:"100",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("circle",{fill:"none",stroke:"#efefef",cx:"6px",cy:"6px",r:"5px"}),(0,i.h)("text",{"aria-hidden":"true","font-size":"0.1em",x:"50%",y:"50%","text-anchor":"middle",fill:"currentColor"},t._label&&(0,i.h)("tspan",{"text-anchor":"middle",x:"50%",dy:"-0.5em"},t._label),(0,i.h)("tspan",{"text-anchor":"middle",x:"50%",dy:t._label?"1em":"0em"},t._value,t._unit)),(0,i.h)("circle",{class:"progress","stroke-linecap":"round","stroke-dasharray":`${Math.round(t._value/t._max*32)}px 32px`,fill:"none",stroke:"#0075ff",cx:"6px",cy:"6px",r:"5px"})):(0,i.h)("div",{class:"bar"},t._label&&(0,i.h)("div",null,t._label),(0,i.h)("div",{style:{display:"flex",gap:"0.3em"}},(0,i.h)("svg",{width:"100",viewBox:"0 0 24 2",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("line",{"stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:"23",y2:"1",fill:"#efefef",stroke:"#efefef"}),(0,i.h)("line",{class:"progress","stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:`${1+Math.round(t._value/t._max*22)}`,y2:"1",fill:"#0075ff",stroke:"#0075ff"})),(0,i.h)("text",{"aria-hidden":"true","font-size":"0.1em","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},t._value,t._unit))),(0,i.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,i.h)("span",{"aria-live":"polite","aria-relevant":"removals text",hidden:!0},this.state._liveValue," von ",this.state._max," ",this.state._unit));var t}validateLabel(t){(0,s.w)(this,"_label",t)}validateMax(t){"number"!=typeof t&&(t=100),(0,s.e)(this,"_max",t,{required:!0})}validateType(t){this.validateVariant(t)}validateUnit(t){(0,s.w)(this,"_unit",t)}validateValue(t){"number"!=typeof t&&(t=0),(0,s.e)(this,"_value",t,{required:!0})}validateVariant(t){!t&&this._type&&(t=this._type),"cycle"!==t&&(t="bar"),this.state=Object.assign(Object.assign({},this.state),{_variant:t})}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateUnit(this._unit),this.validateValue(this._value),this.validateVariant(this._variant||this._type),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};l.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}progress{display:block;height:0;overflow:hidden;width:0}.progress{transition:0.5s ease-in-out 0.25s}.cycle .progress{transform-origin:50% 50%;transform:rotate(-90deg)}"}}}]);