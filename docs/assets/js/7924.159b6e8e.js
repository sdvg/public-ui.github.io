/*! For license information please see 7924.159b6e8e.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7924],{7924:(t,e,a)=>{a.r(e),a.d(e,{kol_progress:()=>c});var r,i,l=a(69199),s=a(2618),o=a(59659);(i=r||(r={})).bar="bar",i.cycle="cycle",i["cycle-value-label"]="cycle-value-label",i["cycle-label-value"]="cycle-label-value";const n=Object.keys(r),c=class{constructor(t){(0,l.r)(this,t),this._label=void 0,this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this._variant=void 0,this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return(0,l.h)(l.H,null,(t=>{let e="43%",a=t._label?"57%":"50%";switch(t._variant){case"cycle-value-label":t._label&&(e="57%",a="43%");case"cycle":case"cycle-label-value":return(0,l.h)("svg",{class:"cycle",width:"100",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},(0,l.h)("circle",{class:"background",cx:"60",cy:"60",r:"54.5",fill:"currentColor",stroke:"currentColor","stroke-width":"8"}),(0,l.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"3"}),(0,l.h)("circle",{class:"border",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,l.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"51",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,l.h)("circle",{class:"border",cx:"60",cy:"60",r:"50",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,l.h)("circle",{class:"progress",fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-dasharray":`${Math.round(t._value/t._max*342)}px 342px`,"stroke-width":"6",cx:"60",cy:"60",r:"54.5"}),t._label&&(0,l.h)("text",{"aria-hidden":"true",x:"50%",y:e,"text-anchor":"middle",fill:"currentColor"},t._label),(0,l.h)("text",{"aria-hidden":"true",x:"50%",y:a,"text-anchor":"middle",fill:"currentColor"},t._value,t._unit));default:return(0,l.h)("div",{class:"bar"},t._label&&(0,l.h)("div",null,t._label),(0,l.h)("div",{style:{display:"flex",gap:"0.3em"}},(0,l.h)("svg",{width:"100",viewBox:"0 0 102 8",xmlns:"http://www.w3.org/2000/svg"},(0,l.h)("rect",{class:"background",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100"}),(0,l.h)("rect",{class:"progress",x:"2.5",y:"2.5",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:t._value/t._max*95}),(0,l.h)("rect",{class:"border",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100"})),(0,l.h)("text",{"aria-hidden":"true","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},t._value,t._unit)))}})(this.state),(0,l.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,l.h)("span",{"aria-live":"polite","aria-relevant":"removals text",hidden:!0},this.state._liveValue," von ",this.state._max," ",this.state._unit))}validateLabel(t){(0,s.v)(this,t)}validateMax(t){"number"!=typeof t&&(t=100),(0,o.e)(this,"_max",t,{required:!0})}validateType(t){this.validateVariant(t)}validateUnit(t){(0,o.d)(this,"_unit",t)}validateValue(t){"number"!=typeof t&&(t=0),(0,o.e)(this,"_value",t,{required:!0})}validateVariant(t){(0,o.w)(this,"_variant",(t=>"string"==typeof t&&n.includes(t)),new Set(n),t)}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateUnit(this._unit),this.validateValue(this._value),this.validateVariant(this._variant||this._type),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};c.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}progress{display:block;height:0;overflow:hidden;width:0}.bar .border{fill:transparent;stroke:black}.bar .background{fill:lightgray;stroke:white}.bar .progress{fill:#0075ff;stroke:transparent;transition:250ms ease-in-out 50ms}.cycle .background{fill:transparent;stroke:lightgray}.cycle .border{fill:transparent;stroke:black}.cycle .whitespace{fill:transparent;stroke:white}.cycle .progress{fill:transparent;stroke:#0075ff;transform-origin:50% 50%;transform:rotate(-90deg);transition:250ms ease-in-out 50ms}@media (prefers-reduced-motion){.progress{transition-duration:0s;transition-delay:0s}}"}},2618:(t,e,a)=>{a.d(e,{a:()=>v,c:()=>n,h:()=>o,v:()=>d});var r=a(14868),i=a(59659);const l=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function o(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function n(t){return s.test(t)}function c(t){var e;return{hooks:{afterPatch:(e,a,i,l)=>{var s,c;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,a,i,l)),"string"==typeof e&&!1===o(e,3)&&!1===n(e)&&(0,r.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,r.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const h=new Set(["string"]),d=(t,e,a={})=>{(0,i.w)(t,"_label",(t=>"string"==typeof t),h,e,c(a))},u=new Set(["string","false"]),v=(t,e,a={})=>{""!==e&&"false"!==e||(e=!1),(0,i.w)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,c(a))}}}]);