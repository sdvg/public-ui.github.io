/*! For license information please see 6927.01c45c40.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6927],{21102:(t,e,i)=>{i.d(e,{a:()=>s,p:()=>r});var a=i(38583),o=i(67790),l=i(9708);const n=t=>{for((0,o.b)()&&((0,a.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,o.b)()&&console.log(t);return(0,o.b)()&&(0,a.d)("\u2191 Search form element finished."),t},s=(t={})=>{var e,i;const a=n(t.form);if(a instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,l.f)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,l.f)(t,l.K.querySelector("form",a));const o=a;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onReset)&&(null===(i=o._on)||void 0===i||i.onReset(t))}}},r=(t={})=>{var e,i;const a=n(t.form);if(a instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:a});if("FORM"===a.tagName)(0,l.f)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,l.f)(t,l.K.querySelector("form",a));const o=a;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=o._on)||void 0===i||i.onSubmit(t))}}}},97032:(t,e,i)=>{i.d(e,{I:()=>r});var a=i(97524),o=i(9708),l=i(95583),n=i(85796);const s=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,l.i)(i.right,1)&&(i.right={icon:i.right}),(0,l.i)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends n.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,l.i)(t.left,1)||(0,a.i)(t.left)||(0,l.i)(t.right,1)||(0,a.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:s},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},97524:(t,e,i)=>{i.d(e,{i:()=>s,v:()=>r,w:()=>d});var a=i(9708),o=i(95583);const l=(t,e,i)=>{(0,o.c)(i)?t[e]=i:(0,o.i)(i,1)&&(t[e]={icon:i})},n=t=>{var e,i,a,n,s,r,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),s=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,e)=>{let i={};return(0,o.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(l(i,"top",t.top),l(i,"right",t.right),l(i,"bottom",t.bottom),l(i,"left",t.left)),i})(e,s))}else if(null===(s=t.nextState)||void 0===s?void 0:s.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.b)(t.style))&&(0,o.i)(t.icon,1),r=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(t,"_icon",(t=>null===t||(0,o.i)(t,1)||"object"==typeof t&&null!==t&&((0,o.i)(t.left,1)||s(t.left)||(0,o.i)(t.right,1)||s(t.right)||(0,o.i)(t.top,1)||s(t.top)||(0,o.i)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),n(t)}},required:!0})}))},d=(t,e)=>{(0,a.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{n(t)}}})}},6927:(t,e,i)=>{i.r(e),i.d(e,{kol_input_range:()=>c});var a=i(85432),o=i(67790),l=i(95583),n=i(21102),s=i(85796),r=i(9708),d=i(97032);class h extends d.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAutoComplete(t){(0,r.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateList(t){(0,r.d)(this.component,"_list",(t=>"object"==typeof t&&"string"==typeof t.label&&t.label.length>0),t)}validateMax(t){(0,r.e)(this.component,"_max",t)}validateMin(t){(0,r.e)(this.component,"_min",t)}validateStep(t){(0,r.e)(this.component,"_step",t)}validateValue(t){(0,r.e)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateList(this.component._list),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateStep(this.component._step),this.validateValue(this.component._value)}}const c=class{render(){const{ariaDescribedBy:t}=(0,s.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0,i=!1===this.state._label;return(0,a.h)(a.H,null,(0,a.h)("kol-input",{class:{range:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_touched:this.state._touched},(0,a.h)("span",{slot:"label"},i?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{slot:"input",class:"inputs-wrapper"},(0,a.h)("input",Object.assign({title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-range`:void 0,spellcheck:"false",step:this.state._step,tabIndex:-1,type:"range",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})),(0,a.h)("input",Object.assign({ref:this.catchInputNumberRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-number`:void 0,step:this.state._step,type:"number",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp,onChange:this.onChange})),(0,a.h)("kol-tooltip",{"aria-hidden":"true",hidden:i||!this.state._hideLabel,_align:this._tooltipAlign,_id:`${this.state._id}-tooltip`,_label:"string"==typeof this.state._label?this.state._label:""}),e&&[(0,a.h)("datalist",{id:`${this.state._id}-list`},this.state._list.map((t=>(0,a.h)("option",{value:t.value}))))])))}constructor(t){(0,a.r)(this,t),this.catchInputNumberRef=t=>{var e;t&&(this.ref=t,(0,l.a)(this.host,t),!this._value&&(null===(e=this.ref)||void 0===e?void 0:e.value)&&this.validateValue(parseFloat(this.ref.value)))},this.onChange=t=>{var e,i;let a=parseFloat(t.target.value);this.state._max&&a>this.state._max&&(a=this.state._max),this.state._min&&a<this.state._min&&(a=this.state._min),this.validateValue(a),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&(null===(i=this.state._on)||void 0===i||i.onChange(t,a))},this.onKeyUp=t=>{"Enter"===t.code?(0,n.p)({form:this.host,ref:this.ref}):this.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._step=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:`id-${(0,o.n)()}`,_label:!1,_list:[]},this.controller=new h(this,"input-range",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateStep(t){this.controller.validateStep(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};c.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}input[type='range']{appearance:none;background-color:#d3d3d3;border:1px solid #000;display:inline-block;height:0.5rem;line-height:1.5em;padding:0;margin:0}input[type='range']::-webkit-slider-thumb{box-sizing:border-box;background-color:#000;height:20px;width:20px;border-radius:20px;cursor:pointer;-webkit-appearance:none}input[type='range']::-moz-range-thumb{box-sizing:border-box;background-color:#000;height:20px;width:20px;border-radius:20px;cursor:pointer;-moz-appearance:none}"}}}]);