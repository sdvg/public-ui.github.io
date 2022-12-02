"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[648],{"./node_modules/@public-ui/components/dist/esm/controller-59c20a25.js":(b,m,n)=>{n.d(m,{I:()=>u,g:()=>p});var s=n("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),a=n("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js"),l=n("./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js"),c=n("./node_modules/@public-ui/components/dist/esm/icon-930845a6.js"),r=n("./node_modules/@public-ui/components/dist/esm/tab-index-8a0b3a31.js");/*!
 * KoliBri - the accessible web component library
 */const p=i=>{const e=typeof i._error=="string"&&i._error.length>0&&i._touched===!0,t=typeof i._hint=="string"&&i._hint.length>0,h=[];return e===!0&&h.push(`${i._id}-error`),t===!0&&h.push(`${i._id}-hint`),{hasError:e,hasHint:t,ariaDiscribedBy:h}};class o{constructor(e,t){this.component=e,this.name=t}validateAlert(e){(0,a.b)(this.component,"_alert",e)}validateTouched(e){(0,a.b)(this.component,"_touched",e)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const d=(i,e)=>{const t=i;typeof t=="object"&&t!==null&&((0,l.i)(t.right,1)&&(t.right={icon:t.right}),(0,l.i)(t.left,1)&&(t.left={icon:t.left}),e.set("_icon",t))};class u extends o{constructor(e,t){super(e,t),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=e}validateAccessKey(e){(0,a.w)(this.component,"_accessKey",e)}validateAdjustHeight(e){(0,a.b)(this.component,"_adjustHeight",e)}validateDisabled(e){(0,a.b)(this.component,"_disabled",e),e===!0&&(0,s.b)()}validateError(e){(0,a.w)(this.component,"_error",e)}validateHideLabel(e){(0,a.b)(this.component,"_hideLabel",e)}validateHint(e){(0,a.w)(this.component,"_hint",e)}validateIcon(e){(0,a.o)(e,()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(this.component,"_icon",t=>typeof t=="object"&&t!==null&&((0,l.i)(t.left,1)||(0,c.i)(t.left)||(0,l.i)(t.right,1)||(0,c.i)(t.right)),new Set(["KoliBriInputIcon"]),e,{hooks:{beforePatch:d},required:!0})})}validateId(e){(0,a.w)(this.component,"_id",e),e===void 0&&(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xF6nnte aber f\xFCr die E2E-Tests relevant sein.")}validateName(e){(0,a.w)(this.component,"_name",e),e===void 0&&(0,s.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, k\xF6nnte aber f\xFCr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(e){typeof e=="object"&&(0,a.s)(this.component,"_on",e)}validateSmartButton(e){(0,a.o)(e,()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.s)(this.component,"_smartButton",e)})}validateTabIndex(e){(0,r.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,typeof((t=this.component._on)===null||t===void 0?void 0:t.onBlur)=="function"&&this.component._on.onBlur(e)}onChange(e){var t;typeof((t=this.component._on)===null||t===void 0?void 0:t.onChange)=="function"&&this.component._on.onChange(e,e.target.value)}onClick(e){var t;typeof((t=this.component._on)===null||t===void 0?void 0:t.onClick)=="function"&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,typeof((t=this.component._on)===null||t===void 0?void 0:t.onFocus)=="function"&&this.component._on.onFocus(e)}setValue(e,t){var h;typeof((h=this.component._on)===null||h===void 0?void 0:h.onChange)=="function"&&this.component._on.onChange(e,t)}}},"./node_modules/@public-ui/components/dist/esm/icon-930845a6.js":(b,m,n)=>{n.d(m,{i:()=>o,v:()=>d,w:()=>u});var s=n("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),a=n("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js"),l=n("./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js");/*!
 * KoliBri - the accessible web component library
 */const c=(i,e,t)=>{(0,l.b)(t)?i[e]=t:(0,l.i)(t,1)&&(i[e]={icon:t})},r=(i,e)=>{let t={};return(0,l.i)(i,1)?e==="right"?t={right:{icon:i}}:t={left:{icon:i}}:typeof i=="object"&&i!==null&&(c(t,"top",i.top),c(t,"right",i.right),c(t,"bottom",i.bottom),c(t,"left",i.left)),t},p=i=>{var e,t,h,_,g,w,f;if(!((e=i.nextState)===null||e===void 0)&&e.has("_icon")){const v=(t=i.nextState)===null||t===void 0?void 0:t.get("_icon"),y=((h=i.nextState)===null||h===void 0?void 0:h.get("_iconAlign"))||i.state._iconAlign;(_=i.nextState)===null||_===void 0||_.set("_icon",r(v,y))}else if(!((g=i.nextState)===null||g===void 0)&&g.has("_iconAlign")){const v=i.state._iconAlign;(w=i.nextState)===null||w===void 0||w.set("_icon",{[v]:void 0,[(f=i.nextState)===null||f===void 0?void 0:f.get("_iconAlign")]:i.state._icon[v]})}},o=i=>typeof i=="object"&&i!==null&&(i.style===void 0||(0,l.a)(i.style))&&(0,l.i)(i.icon,1),d=(i,e)=>{(0,a.o)(e,()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(i,"_icon",t=>t===null||(0,l.i)(t,1)||typeof t=="object"&&t!==null&&((0,l.i)(t.left,1)||o(t.left)||(0,l.i)(t.right,1)||o(t.right)||(0,l.i)(t.top,1)||o(t.top)||(0,l.i)(t.bottom,1)||o(t.bottom)),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(t,h)=>{t===null&&h.set("_icon",{}),p(i)}},required:!0})})},u=(i,e)=>{(0,s.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xFCber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,a.a)(i,"_iconAlign",t=>t==="left"||t==="right",new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{p(i)}}})}},"./node_modules/@public-ui/components/dist/esm/kol-input-color.entry.js":(b,m,n)=>{n.r(m),n.d(m,{kol_input_color:()=>p});var s=n("./node_modules/@public-ui/components/dist/esm/index-bc1a7f22.js"),a=n("./node_modules/@public-ui/components/dist/esm/controller-59c20a25.js"),l=n("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js");/*!
 * KoliBri - the accessible web component library
 */class c extends a.I{constructor(d,u){super(d,u),this.component=d}validateAutoComplete(d){(0,l.a)(this.component,"_autoComplete",u=>typeof u=="string"&&(u==="on"||u==="off"),new Set(["on | off"]),d)}validateList(d){(0,l.c)(this.component,"_list",u=>typeof u=="string",d)}validateValue(d){(0,l.w)(this.component,"_value",d)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateList(this.component._list),this.validateValue(this.component._value)}}const r=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b{font-weight:bolder}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.text-normal{color:var(--kolibri-color-normal)}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}.kol-required span::after{content:"*"}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input.error,select.error,textarea.error{border-color:var(--kolibri-border-error)}input:focus,input:hover,select:focus,select:hover,textarea:focus,textarea:hover{border-color:#999}input:not([type=checkbox]),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{background-color:white;display:block;line-height:1em;padding:0.5em}input[type=color]{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}`,p=class{constructor(o){(0,s.r)(this,o),this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"\u26A0",_list:[],_name:"\u26A0"},this.controller=new c(this,"color")}render(){const{ariaDiscribedBy:o}=(0,a.g)(this.state),d=Array.isArray(this.state._list)&&this.state._list.length>0;return(0,s.h)(s.H,null,(0,s.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,s.h)("span",{slot:"label"},(0,s.h)("slot",null)),(0,s.h)("input",Object.assign({part:"input",title:"","aria-describedby":o.length>0?o.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled===!0,id:this.state._id,list:d?`${this.state._id}-list`:void 0,name:this.state._name,slot:"input",spellcheck:"false",type:"color",value:this.state._value},this.controller.onFacade))))}validateAccessKey(o){this.controller.validateAccessKey(o)}validateAlert(o){this.controller.validateAlert(o)}validateAutoComplete(o){this.controller.validateAutoComplete(o)}validateDisabled(o){this.controller.validateDisabled(o)}validateError(o){this.controller.validateError(o)}validateHideLabel(o){this.controller.validateHideLabel(o)}validateHint(o){this.controller.validateHint(o)}validateIcon(o){this.controller.validateIcon(o)}validateId(o){this.controller.validateId(o)}validateList(o){this.controller.validateList(o)}validateName(o){this.controller.validateName(o)}validateOn(o){this.controller.validateOn(o)}validateSmartButton(o){this.controller.validateSmartButton(o)}validateTabIndex(o){this.controller.validateTabIndex(o)}validateTouched(o){this.controller.validateTouched(o)}validateValue(o){this.controller.validateValue(o)}componentWillLoad(){this._alert=this._alert===!0,this._touched=this._touched===!0,this.controller.componentWillLoad()}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};p.style={default:r}},"./node_modules/@public-ui/components/dist/esm/tab-index-8a0b3a31.js":(b,m,n)=>{n.d(m,{v:()=>c});var s=n("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),a=n("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js");/*!
 * KoliBri - the accessible web component library
 */const l={hooks:{afterPatch:r=>{r!==-1&&r!==0&&(0,s.e)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},c=(r,p)=>{(0,a.f)(r,"_tabIndex",p,l)}},"./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js":(b,m,n)=>{n.d(m,{S:()=>c,a:()=>l,b:()=>s,i:()=>a});/*!
 * KoliBri - the accessible web component library
 */const s=r=>typeof r=="object"&&r!==null,a=(r,p=0)=>typeof r=="string"&&r.length>=p,l=r=>{if(typeof r!="object"||r===null)return a(r,1);for(const p in r)if(a(p,1)===!1)return!1;return!0},c=new Event("StateChange")}}]);