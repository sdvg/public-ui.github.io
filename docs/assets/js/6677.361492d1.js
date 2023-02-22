/*! For license information please see 6677.361492d1.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6677],{55735:(e,t,a)=>{a.d(t,{I:()=>n});var i=a(74711),o=a(7106),l=a(47730);class n extends l.I{constructor(e,t,a){super(e,t,a),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,i.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=e}validateAutoComplete(e){(0,o.a)(this.component,"_autoComplete",(e=>"string"==typeof e&&("on"===e||"off"===e)),new Set(["on | off"]),e)}validateHideLabel(e){(0,o.b)(this.component,"_hideLabel",e,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(e){(0,o.e)(this.component,"_maxLength",e,{min:0})}validatePattern(e){(0,o.w)(this.component,"_pattern",e)}validatePlaceholder(e){(0,o.w)(this.component,"_placeholder",e)}validateReadOnly(e){(0,o.b)(this.component,"_readOnly",e)}validateRequired(e){(0,o.b)(this.component,"_required",e,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(e){(0,o.e)(this.component,"_size",e,{min:1})}validateValue(e){(0,o.w)(this.component,"_value",e)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(e){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(e)}onFocus(e){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(e)}}},9626:(e,t,a)=>{a.d(t,{a:()=>s,p:()=>r});var i=a(74711),o=a(67451),l=a(7106);const n=e=>{for((0,o.b)()&&((0,i.d)("\u2193 Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;)e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null,(0,o.b)()&&console.log(e);return(0,o.b)()&&(0,i.d)("\u2191 Search form element finished."),e},s=(e={})=>{const t=n(e.form);if(t instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===t.tagName)(0,l.f)(e,t),t.dispatchEvent(e);else if("KOL-FORM"===t.tagName){(0,l.f)(e,l.K.querySelector("form",t));const a=t;"object"==typeof a._on&&null!==typeof a._on&&"function"==typeof a._on.onReset&&a._on.onReset(e)}}},r=(e={})=>{const t=n(e.form);if(t instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t});if("FORM"===t.tagName)(0,l.f)(e,t),t.dispatchEvent(e);else if("KOL-FORM"===t.tagName){(0,l.f)(e,l.K.querySelector("form",t));const a=t;"object"==typeof a._on&&null!==typeof a._on&&"function"==typeof a._on.onSubmit&&a._on.onSubmit(e)}}}},26677:(e,t,a)=>{a.r(t),a.d(t,{kol_input_password:()=>d});var i=a(65640),o=a(74711),l=a(47121),n=a(9626),s=a(56925),r=a(55735);const d=class{render(){const{ariaDiscribedBy:e}=(0,s.g)(this.state);return(0,i.h)(i.H,null,(0,i.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,i.h)("span",{slot:"label"},(0,i.h)("slot",null)),(0,i.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"password",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(e){(0,i.r)(this,e),this.catchRef=e=>{this.ref=e,(0,l.a)(this.host,this.ref)},this.onKeyUp=e=>{"Enter"===e.code?(0,n.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onClick(e)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"\u26a0"},this.controller=new r.I(this,"password",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e),"on"===e&&(0,o.d)("[KolInputPassword] Die Option 'autocomplete' sollte bei einem Passwort-Eingabefeld nicht auf \"on\" gesetzt werden.")}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcon(e){this.controller.validateIcon(e)}validateId(e){this.controller.validateId(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePattern(e){this.controller.validatePattern(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateRequired(e){this.controller.validateRequired(e)}validateSize(e){this.controller.validateSize(e)}validateSmartButton(e){this.controller.validateSmartButton(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}"}}}]);