/*! For license information please see 7788.f0b09892.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7788],{47788:(t,e,i)=>{i.r(e),i.d(e,{kol_input_range:()=>h});var o=i(69491),a=i(19222),s=i(12489),l=i(65717),r=i(60341);class n extends r.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAutoComplete(t){(0,l.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateList(t){(0,l.d)(this.component,"_list",(t=>"object"==typeof t&&"string"==typeof t.label&&t.label.length>0),t)}validateMax(t){(0,l.e)(this.component,"_max",t)}validateMin(t){(0,l.e)(this.component,"_min",t)}validateStep(t){(0,l.e)(this.component,"_step",t)}validateValue(t){(0,l.e)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateList(this.component._list),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateStep(this.component._step),this.validateValue(this.component._value)}}const h=class{render(){const{ariaDiscribedBy:t}=(0,s.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0;return(0,o.h)(o.H,null,(0,o.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_touched:this.state._touched},(0,o.h)("span",{slot:"label"},(0,o.h)("slot",null)),(0,o.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name,slot:"input",spellcheck:"false",step:this.state._step,type:"range",value:this.state._value},this.controller.onFacade)),e&&[(0,o.h)("datalist",{id:`${this.state._id}-list`},this.state._list.map((t=>(0,o.h)("option",{value:t.value}))))]))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,a.a)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"\u26a0",_list:[]},this.controller=new n(this,"range",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateStep(t){this.controller.validateStep(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_step:["validateStep"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};h.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{font-family:inherit;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}:host *{box-sizing:border-box}:host kol-icon{color:inherit}:host kol-span-wc{display:grid;place-items:center;width:100%}:host kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}:host button{margin:0;min-height:44px;min-width:44px;padding:0}:host a,:host button,:host input,:host select,:host textarea{cursor:pointer}:host a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}:host a{display:inline-flex;place-items:baseline}:host button{background-color:transparent;border-width:0}:host .kol-required span::after{content:'*'}:host input,:host select,:host textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}:host input input.error,:host input select.error,:host input textarea.error,:host select input.error,:host select select.error,:host select textarea.error,:host textarea input.error,:host textarea select.error,:host textarea textarea.error{border-color:var(--kolibri-border-error)}:host input input:focus,:host input input:hover,:host input select:focus,:host input select:hover,:host input textarea:focus,:host input textarea:hover,:host select input:focus,:host select input:hover,:host select select:focus,:host select select:hover,:host select textarea:focus,:host select textarea:hover,:host textarea input:focus,:host textarea input:hover,:host textarea select:focus,:host textarea select:hover,:host textarea textarea:focus,:host textarea textarea:hover{border-color:#999}:host input:not([type='checkbox']),:host option,:host select,:host textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}:host .kol-disabled{opacity:0.5}:host .kol-cursor-not-allowed,:host .kol-cursor-not-allowed *{cursor:not-allowed}:host input[type='color'],:host input[type='date'],:host input[type='datetime-local'],:host input[type='email'],:host input[type='file'],:host input[type='month'],:host input[type='number'],:host input[type='password'],:host input[type='search'],:host input[type='tel'],:host input[type='text'],:host input[type='time'],:host input[type='url'],:host input[type='week'],:host select,:host textarea{background-color:white;display:block;line-height:1em;padding:0.5em}:host input[type='color']{height:2.5em;padding:0.25em 0.5em}:host textarea{padding:0.5em}"}}}]);