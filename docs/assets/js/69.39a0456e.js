/*! For license information please see 69.39a0456e.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[69],{50266:(t,e,i)=>{i.d(e,{a:()=>s,p:()=>r});var a=i(83162),o=i(24766),n=i(11778);const l=t=>{for((0,o.b)()&&((0,a.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,o.b)()&&console.log(t);return(0,o.b)()&&(0,a.d)("\u2191 Search form element finished."),t},s=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===e.tagName)(0,n.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,n.f)(t,n.K.querySelector("form",e));const i=e;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onReset&&i._on.onReset(t)}}},r=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,n.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,n.f)(t,n.K.querySelector("form",e));const i=e;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onSubmit&&i._on.onSubmit(t)}}}},78770:(t,e,i)=>{i.d(e,{I:()=>l});var a=i(83162),o=i(11778),n=i(82726);class l extends n.I{constructor(t,e,i){super(t,e,i),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,a.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=t}validateAutoComplete(t){(0,o.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(t){(0,o.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,o.w)(this.component,"_pattern",t)}validatePlaceholder(t){(0,o.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,o.b)(this.component,"_readOnly",t)}validateRequired(t){(0,o.b)(this.component,"_required",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(t){(0,o.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,o.w)(this.component,"_value",t)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},63198:(t,e,i)=>{i.d(e,{I:()=>n,a:()=>l});var a=i(11778),o=i(78770);class n extends o.I{constructor(t,e,i){super(t,e,i),this.component=t}validateList(t){(0,a.d)(this.component,"_list",(t=>"string"==typeof t),t)}componentWillLoad(){super.componentWillLoad(),this.validateList(this.component._list)}}class l extends n{constructor(t,e,i){super(t,e,i),this.hasError=!1,this.hasList=!1,this.component=t}validateType(t){(0,a.a)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type)}}},82726:(t,e,i)=>{i.d(e,{I:()=>r});var a=i(11778),o=i(30151),n=i(56773),l=i(79635);const s=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,o.b)(i.right,1)&&(i.right={icon:i.right}),(0,o.b)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends l.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,o.b)(t.left,1)||(0,n.i)(t.left)||(0,o.b)(t.right,1)||(0,n.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:s},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},6660:(t,e,i)=>{i.d(e,{v:()=>o});var a=i(11778);const o=(t,e)=>{(0,a.b)(t,"_hideLabel",e)}},56773:(t,e,i)=>{i.d(e,{i:()=>s,v:()=>r,w:()=>d});var a=i(11778),o=i(30151);const n=(t,e,i)=>{(0,o.d)(i)?t[e]=i:(0,o.b)(i,1)&&(t[e]={icon:i})},l=t=>{var e,i,a,l,s,r,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),s=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(l=t.nextState)||void 0===l||l.set("_icon",((t,e)=>{let i={};return(0,o.b)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,s))}else if(null===(s=t.nextState)||void 0===s?void 0:s.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.c)(t.style))&&(0,o.b)(t.icon,1),r=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(t,"_icon",(t=>null===t||(0,o.b)(t,1)||"object"==typeof t&&null!==t&&((0,o.b)(t.left,1)||s(t.left)||(0,o.b)(t.right,1)||s(t.right)||(0,o.b)(t.top,1)||s(t.top)||(0,o.b)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),l(t)}},required:!0})}))},d=(t,e)=>{(0,a.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})}},50069:(t,e,i)=>{i.r(e),i.d(e,{kol_input_text:()=>c});var a=i(76511),o=i(83162),n=i(30151),l=i(50266),s=i(79635),r=i(63198),d=i(11778),h=i(6660);(0,o.f)("[KolInputText] Pre- und post-Label f\xfcr W\xe4hrung usw.");const c=class{render(){const{ariaDescribedBy:t}=(0,s.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0;return(0,a.h)(a.H,{class:{"has-value":this.state._hasValue}},this.state._accessKey,(0,a.h)("kol-input",{class:{[this.state._type]:!0},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,a.h)("span",{slot:"label"},(0,a.h)("slot",null)),(0,a.h)("input",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",title:"",type:this.state._type,value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{var e;this.ref=t,(0,n.a)(this.host,this.ref),this.disconnectedCallback(),null===(e=this.ref)||void 0===e||e.addEventListener("search",this.onChange)},this.onKeyUp=t=>{"Enter"===t.code||"NumpadEnter"===t.code?(0,l.p)({form:this.host,ref:this.ref}):this.onChange(t)},this.onChange=t=>{var e,i;this.oldValue!==(null===(e=this.ref)||void 0===e?void 0:e.value)&&(this.oldValue=null===(i=this.ref)||void 0===i?void 0:i.value,this.controller.onFacade.onChange(t))},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._type="text",this._value=void 0,this.state={_autoComplete:"off",_id:"id",_hasValue:!1,_list:[],_type:"text"},this.controller=new r.a(this,"text",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){((t,e)=>{(0,d.b)(t,"_alert",e)})(this,t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){(0,h.v)(this,t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){((t,e)=>{(0,d.b)(t,"_readOnly",e)})(this,t)}validateRequired(t){((t,e)=>{(0,d.b)(t,"_required",e)})(this,t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){((t,e)=>{(0,d.b)(t,"_touched",e)})(this,t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.oldValue=this._value,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}disconnectedCallback(){var t;null===(t=this.ref)||void 0===t||t.removeEventListener("search",this.onChange)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};c.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}div.input{cursor:text}"}}}]);