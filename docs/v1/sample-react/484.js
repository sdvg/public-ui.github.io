/*! For license information please see 484.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[484],{2421:(t,e,i)=>{i.d(e,{a:()=>l,p:()=>r});var a=i(9018),o=i(1709),s=i(8325);const n=t=>{for((0,o.a)()&&((0,a.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,o.a)()&&console.log(t);return(0,o.a)()&&(0,a.d)("↑ Search form element finished."),t},l=(t={})=>{var e,i;const a=n(t.form);if(a instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,s.f)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,s.f)(t,s.K.querySelector("form",a));const o=a;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onReset)&&(null===(i=o._on)||void 0===i||i.onReset(t))}}},r=(t={})=>{const e=n(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,o.a)()&&!1===e.noValidate&&(0,a.d)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof e.requestSubmit?e.requestSubmit():((0,s.f)(t,e),e.dispatchEvent(t))}));else if("KOL-FORM"===e.tagName){(0,s.f)(t,s.K.querySelector("form",e));const i=e;setTimeout((()=>{var e,a;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onSubmit)&&(null===(a=i._on)||void 0===a||a.onSubmit(t))}))}}}},484:(t,e,i)=>{i.r(e),i.d(e,{kol_input_range:()=>u});var a=i(4566),o=i(1709),s=i(4186),n=i(2421),l=i(3072),r=i(7159),d=i(8325),h=i(9288),c=i(5109);class p extends h.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAutoComplete(t){(0,d.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateList(t){Array.isArray(t)&&this.validateSuggestions(t.map((t=>t.value)))}validateMax(t){(0,d.e)(this.component,"_max",t)}validateMin(t){(0,d.e)(this.component,"_min",t)}validateStep(t){(0,d.e)(this.component,"_step",t)}validateSuggestions(t){(0,r.v)(this.component,t)}validateValue(t){(0,d.e)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateList(this.component._list),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateStep(this.component._step),this.validateSuggestions(this.component._suggestions),this.validateValue(this.component._value)}}const u=class{componentDidLoad(){var t;!this._value&&(null===(t=this.refInputRange)||void 0===t?void 0:t.value)&&this.validateValue(parseFloat(this.refInputRange.value))}render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,i=(0,s.s)(this.state._label);return(0,a.h)(a.H,{key:"839bb7ecf6af83fd0746a1f95af6b2560c643bf8",class:"kol-input-range"},(0,a.h)(c.m,{key:"8af3e6473cfa0f3468bf2eadde838f8e63169876",class:{range:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,a.h)("span",{key:"558add1d2fe8dad818c0c06e42afc5a32b84b5ed",slot:"label"},i?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{key:"8d39a4217aa1ee8f1b7a83f1b979bfbbcea7f944",slot:"input"},(0,a.h)("div",{key:"0ac0c57e940d9ba46f49c567350051a0c7b67358",class:"inputs-wrapper",style:{"--kolibri-input-range--input-number--width":`${this.state._max}`.length+.5+"em"}},(0,a.h)("input",Object.assign({key:"cade7e1e98e30e13b2597f15922db1e9464e6f04",ref:this.catchInputRangeRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-hidden":"true",autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-range`:void 0,spellcheck:"false",step:this.state._step,tabIndex:-1,type:"range",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})),(0,a.h)("input",Object.assign({key:"4a1b806e1c23386ea0bae30f447cc05e8fa12aed",ref:this.catchInputNumberRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-number`:void 0,step:this.state._step,type:"number",value:this.state._value},this.controller.onFacade,{onKeyDown:this.onKeyDown,onChange:this.onChange}))),e&&[(0,a.h)("datalist",{key:"dd91dfd93302c32f934913c70ded4934ac038f3d",id:`${this.state._id}-list`},this.state._suggestions.map((t=>(0,a.h)("option",{value:t}))))])))}constructor(t){(0,a.r)(this,t),this.catchInputNumberRef=t=>{var e;t&&(this.refInputNumber=t,(0,s.a)(this.host,t),!this._value&&(null===(e=this.refInputNumber)||void 0===e?void 0:e.value)&&this.validateValue(parseFloat(this.refInputNumber.value)))},this.catchInputRangeRef=t=>{t&&(this.refInputRange=t)},this.onChange=t=>{var e,i;let a=parseFloat(t.target.value);this.state._max&&a>this.state._max&&(a=this.state._max),this.state._min&&a<this.state._min&&(a=this.state._min),this.validateValue(a),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&(null===(i=this.state._on)||void 0===i||i.onChange(t,a))},this.onKeyDown=t=>{"Enter"!==t.code&&"NumpadEnter"!==t.code||(0,n.p)({form:this.host,ref:this.refInputRange})},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icon=void 0,this._icons=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._step=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"…",_suggestions:[]},this.controller=new p(this,"range",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.validateIcons(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateStep(t){this.controller.validateStep(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_step:["validateStep"],_suggestions:["validateSuggestions"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};u.style={default:':host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.required label>span::after,.required legend>span::after{content:"*"}:host{display:block}input,textarea{cursor:text}input[type=checkbox],input[type=color],input[type=file],input[type=radio],input[type=range],label,option,select{cursor:pointer}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,select[multiple] option,textarea{font-size:calc(16rem / var(--kolibri-root-font-size, 16));width:100%}input[type=file]{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em}.kol-input.disabled :is(button,input,option,select,textarea,.input-label){cursor:not-allowed;opacity:0.5}.kol-input{display:grid}.kol-input .input-slot{flex-grow:1}input:not([type=checkbox],[type=radio]),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>.kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}.kol-input.required .input-tooltip .span-label::after{content:"*"}.inputs-wrapper{align-items:center;display:flex;flex-direction:row}input[type=number]{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size);width:var(--kolibri-input-range--input-number--width)}input[type=range]{appearance:none;background-color:#d3d3d3;border:1px solid #000;display:inline-block;flex-grow:1;height:calc(8rem / var(--kolibri-root-font-size, 16));line-height:1.5em;padding:0;margin:0;width:0}input[type=range]::-webkit-slider-thumb{box-sizing:border-box;background-color:#000;height:20px;width:20px;border-radius:20px;cursor:pointer;-webkit-appearance:none}input[type=range]::-moz-range-thumb{box-sizing:border-box;background-color:#000;height:20px;width:20px;border-radius:20px;cursor:pointer;-moz-appearance:none}@media (prefers-contrast: more){::-webkit-slider-thumb{outline:1px solid currentColor}}'}},7159:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(8325),o=i(9018);const s=(t,e)=>{(0,a.c)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,o.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}}}]);