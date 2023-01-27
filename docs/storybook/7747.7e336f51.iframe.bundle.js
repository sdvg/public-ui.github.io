"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7747],{"./node_modules/@public-ui/components/dist/esm/controller-1753b7f0.js":(f,p,s)=>{s.d(p,{I:()=>c});var d=s("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),a=s("./node_modules/@public-ui/components/dist/esm/prop.validators-ceeab1fe.js"),r=s("./node_modules/@public-ui/components/dist/esm/controller-9bcf44e5.js");/*!
 * KoliBri - The accessible HTML-Standard
 */class c extends r.I{constructor(o,n,_){super(o,n,_),this.handleHiddenLabelAndRequired=()=>{this.component.state._hideLabel===!0&&this.component.state._required===!0?((0,d.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=this.component.state._hideLabel===!0},this.component=o}validateAutoComplete(o){(0,a.a)(this.component,"_autoComplete",n=>typeof n=="string"&&(n==="on"||n==="off"),new Set(["on | off"]),o)}validateHideLabel(o){(0,a.b)(this.component,"_hideLabel",o,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(o){(0,a.d)(this.component,"_maxLength",o,{min:0})}validatePattern(o){(0,a.w)(this.component,"_pattern",o)}validatePlaceholder(o){(0,a.w)(this.component,"_placeholder",o)}validateReadOnly(o){(0,a.b)(this.component,"_readOnly",o)}validateRequired(o){(0,a.b)(this.component,"_required",o,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(o){(0,a.d)(this.component,"_size",o,{min:1})}validateValue(o){(0,a.w)(this.component,"_value",o)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(o){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(o)}onFocus(o){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(o)}}},"./node_modules/@public-ui/components/dist/esm/controller-46b28944.js":(f,p,s)=>{s.d(p,{I:()=>r,a:()=>c});var d=s("./node_modules/@public-ui/components/dist/esm/prop.validators-ceeab1fe.js"),a=s("./node_modules/@public-ui/components/dist/esm/controller-1753b7f0.js");/*!
 * KoliBri - The accessible HTML-Standard
 */class r extends a.I{constructor(o,n,_){super(o,n,_),this.component=o}validateList(o){(0,d.c)(this.component,"_list",n=>typeof n=="string",o)}componentWillLoad(){super.componentWillLoad(),this.validateList(this.component._list)}}class c extends r{constructor(o,n,_){super(o,n,_),this.hasError=!1,this.hasList=!1,this.component=o}validateType(o){(0,d.a)(this.component,"_type",n=>typeof n=="string"&&(n==="text"||n==="search"||n==="url"||n==="tel"),new Set(["String {text, search, url, tel}"]),o)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type)}}},"./node_modules/@public-ui/components/dist/esm/controller-9bcf44e5.js":(f,p,s)=>{s.d(p,{I:()=>e,g:()=>o});var d=s("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),a=s("./node_modules/@public-ui/components/dist/esm/prop.validators-ceeab1fe.js"),r=s("./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js"),c=s("./node_modules/@public-ui/components/dist/esm/tab-index-4314d33e.js"),v=s("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const o=l=>{const t=typeof l._error=="string"&&l._error.length>0&&l._touched===!0,i=typeof l._hint=="string"&&l._hint.length>0,h=[];return t===!0&&h.push(`${l._id}-error`),i===!0&&h.push(`${l._id}-hint`),{hasError:t,hasHint:i,ariaDiscribedBy:h}},n=(0,v.b)();class _{constructor(t,i,h){var y,E,L,g,C;if(this.syncFormAssociatedName=()=>{var m;n&&((m=this.formAssociated)===null||m===void 0||m.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(m=null)=>{var u;n&&((u=this.formAssociated)===null||u===void 0||u.setAttribute("value",m))},this.component=t,this.name=i,this.host=h,n){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const m=((y=this.host)===null||y===void 0?void 0:y.children)||[];for(let u=0;u<m.length;u++)((E=this.host)===null||E===void 0?void 0:E.children[u].tagName)==="INPUT"&&((L=this.host)===null||L===void 0||L.removeChild((g=this.host)===null||g===void 0?void 0:g.children[u]));(C=this.host)===null||C===void 0||C.appendChild(this.formAssociated)}}validateAlert(t){(0,a.b)(this.component,"_alert",t)}validateTouched(t){(0,a.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const b=(l,t)=>{const i=l;typeof i=="object"&&i!==null&&((0,r.a)(i.right,1)&&(i.right={icon:i.right}),(0,r.a)(i.left,1)&&(i.left={icon:i.left}),t.set("_icon",i))};class e extends _{constructor(t,i,h){super(t,i,h),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,a.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,a.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,a.b)(this.component,"_disabled",t),t===!0&&(0,d.c)()}validateError(t){(0,a.w)(this.component,"_error",t)}validateHideLabel(t){(0,a.b)(this.component,"_hideLabel",t)}validateHint(t){(0,a.w)(this.component,"_hint",t)}validateIcon(t){(0,a.o)(t,()=>{try{t=(0,a.p)(t)}catch(i){}(0,a.a)(this.component,"_icon",i=>typeof i=="object"&&i!==null&&((0,r.a)(i.left,1)||(0,c.i)(i.left)||(0,r.a)(i.right,1)||(0,c.i)(i.right)),new Set(["KoliBriInputIcon"]),t,{hooks:{beforePatch:b},required:!0})})}validateId(t){(0,a.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),t===void 0&&(0,d.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xF6nnte aber f\xFCr die E2E-Tests relevant sein.")}validateName(t){(0,a.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),t===void 0&&(0,d.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xFCr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){typeof t=="object"&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,()=>{try{t=(0,a.p)(t)}catch(i){}(0,a.s)(this.component,"_smartButton",t)})}validateTabIndex(t){(0,c.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var i;this.component._alert=!0,this.component._touched=!0,typeof((i=this.component._on)===null||i===void 0?void 0:i.onBlur)=="function"&&this.component._on.onBlur(t)}onChange(t){var i;this.setFormAssociatedValue(t.target.value),typeof((i=this.component._on)===null||i===void 0?void 0:i.onChange)=="function"&&this.component._on.onChange(t,t.target.value)}onClick(t){var i;typeof((i=this.component._on)===null||i===void 0?void 0:i.onClick)=="function"&&this.component._on.onClick(t)}onFocus(t){var i;this.component._alert=!0,typeof((i=this.component._on)===null||i===void 0?void 0:i.onFocus)=="function"&&this.component._on.onFocus(t)}setValue(t,i){var h;this.setFormAssociatedValue(i),typeof((h=this.component._on)===null||h===void 0?void 0:h.onChange)=="function"&&this.component._on.onChange(t,i)}}},"./node_modules/@public-ui/components/dist/esm/kol-input-email.entry.js":(f,p,s)=>{s.r(p),s.d(p,{kol_input_email:()=>b});var d=s("./node_modules/@public-ui/components/dist/esm/index-0dce65d2.js"),a=s("./node_modules/@public-ui/components/dist/esm/reuse-f9be4952.js"),r=s("./node_modules/@public-ui/components/dist/esm/controller-01ace904.js"),c=s("./node_modules/@public-ui/components/dist/esm/controller-9bcf44e5.js"),v=s("./node_modules/@public-ui/components/dist/esm/prop.validators-ceeab1fe.js"),o=s("./node_modules/@public-ui/components/dist/esm/controller-46b28944.js");/*!
 * KoliBri - The accessible HTML-Standard
 */class n extends o.I{constructor(l,t,i){super(l,t,i),this.component=l}validateMultiple(l){(0,v.b)(this.component,"_multiple",l)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const _="@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}",b=class{render(){const{ariaDiscribedBy:e}=(0,c.g)(this.state),l=Array.isArray(this.state._list)&&this.state._list.length>0;return(0,d.h)(d.H,null,(0,d.h)("kol-input",{_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,d.h)("span",{slot:"label"},(0,d.h)("slot",null)),(0,d.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:l?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(e){(0,d.r)(this,e),this.catchRef=l=>{this.ref=l,(0,a.p)(this.host,this.ref)},this.onKeyUp=l=>{l.code==="Enter"?(0,r.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(l)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._maxLength=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"\u26A0",_list:[]},this.controller=new n(this,"email",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcon(e){this.controller.validateIcon(e)}validateId(e){this.controller.validateId(e)}validateList(e){this.controller.validateList(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateMultiple(e){this.controller.validateMultiple(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePattern(e){this.controller.validatePattern(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateRequired(e){this.controller.validateRequired(e)}validateSize(e){this.controller.validateSize(e)}validateSmartButton(e){this.controller.validateSmartButton(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=this._alert===!0,this._touched=this._touched===!0,this.controller.componentWillLoad()}get host(){return(0,d.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};b.style={default:_}}}]);