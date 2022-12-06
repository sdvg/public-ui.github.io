"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1896],{"./node_modules/@public-ui/components/dist/esm/controller-8f43642b.js":(v,u,l)=>{l.d(u,{I:()=>n,g:()=>p});var r=l("./node_modules/@public-ui/components/dist/esm/a11y.tipps-7e981511.js"),a=l("./node_modules/@public-ui/components/dist/esm/prop.validators-13dda64d.js"),s=l("./node_modules/@public-ui/components/dist/esm/validator-fe8c60ef.js"),c=l("./node_modules/@public-ui/components/dist/esm/icon-63fac1a4.js"),d=l("./node_modules/@public-ui/components/dist/esm/tab-index-92fe8657.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const p=i=>{const t=typeof i._error=="string"&&i._error.length>0&&i._touched===!0,e=typeof i._hint=="string"&&i._hint.length>0,h=[];return t===!0&&h.push(`${i._id}-error`),e===!0&&h.push(`${i._id}-hint`),{hasError:t,hasHint:e,ariaDiscribedBy:h}};class m{constructor(t,e){this.component=t,this.name=e}validateAlert(t){(0,a.b)(this.component,"_alert",t)}validateTouched(t){(0,a.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const o=(i,t)=>{const e=i;typeof e=="object"&&e!==null&&((0,s.i)(e.right,1)&&(e.right={icon:e.right}),(0,s.i)(e.left,1)&&(e.left={icon:e.left}),t.set("_icon",e))};class n extends m{constructor(t,e){super(t,e),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,a.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,a.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,a.b)(this.component,"_disabled",t),t===!0&&(0,r.b)()}validateError(t){(0,a.w)(this.component,"_error",t)}validateHideLabel(t){(0,a.b)(this.component,"_hideLabel",t)}validateHint(t){(0,a.w)(this.component,"_hint",t)}validateIcon(t){(0,a.o)(t,()=>{try{t=(0,a.p)(t)}catch(e){}(0,a.a)(this.component,"_icon",e=>typeof e=="object"&&e!==null&&((0,s.i)(e.left,1)||(0,c.i)(e.left)||(0,s.i)(e.right,1)||(0,c.i)(e.right)),new Set(["KoliBriInputIcon"]),t,{hooks:{beforePatch:o},required:!0})})}validateId(t){(0,a.w)(this.component,"_id",t),t===void 0&&(0,r.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xF6nnte aber f\xFCr die E2E-Tests relevant sein.")}validateName(t){(0,a.w)(this.component,"_name",t),t===void 0&&(0,r.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, k\xF6nnte aber f\xFCr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){typeof t=="object"&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,()=>{try{t=(0,a.p)(t)}catch(e){}(0,a.s)(this.component,"_smartButton",t)})}validateTabIndex(t){(0,d.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,typeof((e=this.component._on)===null||e===void 0?void 0:e.onBlur)=="function"&&this.component._on.onBlur(t)}onChange(t){var e;typeof((e=this.component._on)===null||e===void 0?void 0:e.onChange)=="function"&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;typeof((e=this.component._on)===null||e===void 0?void 0:e.onClick)=="function"&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,typeof((e=this.component._on)===null||e===void 0?void 0:e.onFocus)=="function"&&this.component._on.onFocus(t)}setValue(t,e){var h;typeof((h=this.component._on)===null||h===void 0?void 0:h.onChange)=="function"&&this.component._on.onChange(t,e)}}},"./node_modules/@public-ui/components/dist/esm/icon-63fac1a4.js":(v,u,l)=>{l.d(u,{i:()=>m,v:()=>o,w:()=>n});var r=l("./node_modules/@public-ui/components/dist/esm/a11y.tipps-7e981511.js"),a=l("./node_modules/@public-ui/components/dist/esm/prop.validators-13dda64d.js"),s=l("./node_modules/@public-ui/components/dist/esm/validator-fe8c60ef.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const c=(i,t,e)=>{(0,s.b)(e)?i[t]=e:(0,s.i)(e,1)&&(i[t]={icon:e})},d=(i,t)=>{let e={};return(0,s.i)(i,1)?t==="right"?e={right:{icon:i}}:e={left:{icon:i}}:typeof i=="object"&&i!==null&&(c(e,"top",i.top),c(e,"right",i.right),c(e,"bottom",i.bottom),c(e,"left",i.left)),e},p=i=>{var t,e,h,b,g,f,y;if(!((t=i.nextState)===null||t===void 0)&&t.has("_icon")){const _=(e=i.nextState)===null||e===void 0?void 0:e.get("_icon"),w=((h=i.nextState)===null||h===void 0?void 0:h.get("_iconAlign"))||i.state._iconAlign;(b=i.nextState)===null||b===void 0||b.set("_icon",d(_,w))}else if(!((g=i.nextState)===null||g===void 0)&&g.has("_iconAlign")){const _=i.state._iconAlign;(f=i.nextState)===null||f===void 0||f.set("_icon",{[_]:void 0,[(y=i.nextState)===null||y===void 0?void 0:y.get("_iconAlign")]:i.state._icon[_]})}},m=i=>typeof i=="object"&&i!==null&&(i.style===void 0||(0,s.a)(i.style))&&(0,s.i)(i.icon,1),o=(i,t)=>{(0,a.o)(t,()=>{try{t=(0,a.p)(t)}catch(e){}(0,a.a)(i,"_icon",e=>e===null||(0,s.i)(e,1)||typeof e=="object"&&e!==null&&((0,s.i)(e.left,1)||m(e.left)||(0,s.i)(e.right,1)||m(e.right)||(0,s.i)(e.top,1)||m(e.top)||(0,s.i)(e.bottom,1)||m(e.bottom)),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(e,h)=>{e===null&&h.set("_icon",{}),p(i)}},required:!0})})},n=(i,t)=>{(0,r.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xFCber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,a.a)(i,"_iconAlign",e=>e==="left"||e==="right",new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{p(i)}}})}},"./node_modules/@public-ui/components/dist/esm/kol-textarea.entry.js":(v,u,l)=>{l.r(u),l.d(u,{kol_textarea:()=>m});var r=l("./node_modules/@public-ui/components/dist/esm/index-5878bd01.js"),a=l("./node_modules/@public-ui/components/dist/esm/prop.validators-13dda64d.js"),s=l("./node_modules/@public-ui/components/dist/esm/controller-8f43642b.js");/*!
 * KoliBri - The accessible HTML-Standard
 */class c extends s.I{constructor(n,i){super(n,i),this.afterSyncCharCounter=()=>{typeof this.component._value=="string"&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=n}validateHasCounter(n){(0,a.b)(this.component,"_hasCounter",n,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(n){(0,a.f)(this.component,"_maxLength",n,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(n){(0,a.w)(this.component,"_placeholder",n)}validateReadOnly(n){(0,a.b)(this.component,"_readOnly",n)}validateResize(n){(0,a.a)(this.component,"_resize",i=>typeof i=="string"&&(i==="both"||i==="horizontal"||i==="none"||i==="vertical"),new Set("String {both, horizontal, vertical, none}"),n)}validateRequired(n){(0,a.b)(this.component,"_required",n)}validateRows(n){(0,a.f)(this.component,"_rows",n)}validateValue(n){(0,a.w)(this.component,"_value",n,{hooks:{afterPatch:this.afterSyncCharCounter}})}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const d=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-y-visible{overflow-y:visible}.px{padding-left:1px;padding-right:1px}.pl-8{padding-left:2rem}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.text-normal{color:var(--kolibri-color-normal)}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}.kol-required span::after{content:"*"}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input.error,select.error,textarea.error{border-color:var(--kolibri-border-error)}input:focus,input:hover,select:focus,select:hover,textarea:focus,textarea:hover{border-color:#999}input:not([type=checkbox]),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{background-color:white;display:block;line-height:1em;padding:0.5em}input[type=color]{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}`,p=o=>{o.style.overflow="hidden";const n=o.rows,i=o.clientHeight/n;o.rows=1;const t=Math.round(o.scrollHeight/i);return o.rows=n,t},m=class{constructor(o){(0,r.r)(this,o),this.onChange=n=>{const i=n==null?void 0:n.path;Array.isArray(i)&&i[0]instanceof HTMLTextAreaElement&&((0,a.s)(this,"_currentLength",i[0].value.length),this.state._adjustHeight&&(this._rows=p(i[0]))),typeof this.controller.onFacade.onChange=="function"&&this.controller.onFacade.onChange(n)},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._hasCounter=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=void 0,this._resize="vertical",this._required=void 0,this._rows=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_id:"\u26A0",_name:"\u26A0",_resize:"vertical"},this.controller=new c(this,"textarea")}render(){const{ariaDiscribedBy:o}=(0,s.g)(this.state);return(0,r.h)(r.H,null,(0,r.h)("kol-input",{_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_readOnly:this.state._readOnly,_required:this.state._required,_touched:this.state._touched},(0,r.h)("span",{slot:"label"},(0,r.h)("slot",null)),(0,r.h)("div",{slot:"input"},(0,r.h)("textarea",Object.assign({part:"textarea",title:"","aria-describedby":o.length>0?o.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off","aria-hidden":"true",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onKeyUp:this.onChange,style:{resize:this.state._resize},value:this.state._value})),this.state._hasCounter&&(0,r.h)("span",{"aria-atomic":"true","aria-live":"polite"},this.state._currentLength,this.state._maxLength&&(0,r.h)(r.F,null,(0,r.h)("span",{"aria-label":"von",role:"img"},"/"),this.state._maxLength)," ",(0,r.h)("span",null,"Zeichen")))))}validateAccessKey(o){this.controller.validateAccessKey(o)}validateAdjustHeight(o){this.controller.validateAdjustHeight(o)}validateAlert(o){this.controller.validateAlert(o)}validateDisabled(o){this.controller.validateDisabled(o)}validateError(o){this.controller.validateError(o)}validateHasCounter(o){this.controller.validateHasCounter(o)}validateHideLabel(o){this.controller.validateHideLabel(o)}validateHint(o){this.controller.validateHint(o)}validateId(o){this.controller.validateId(o)}validateMaxLength(o){this.controller.validateMaxLength(o)}validateName(o){this.controller.validateName(o)}validateOn(o){this.controller.validateOn(o)}validatePlaceholder(o){this.controller.validatePlaceholder(o)}validateReadOnly(o){this.controller.validateReadOnly(o)}validateResize(o){this.controller.validateResize(o)}validateRequired(o){this.controller.validateRequired(o)}validateRows(o){this.controller.validateRows(o)}validateTabIndex(o){this.controller.validateTabIndex(o)}validateTouched(o){this.controller.validateTouched(o)}validateValue(o){this.controller.validateValue(o)}componentWillLoad(){this._alert=this._alert===!0,this._touched=this._touched===!0,this.controller.componentWillLoad(),this.validateAdjustHeight(this._adjustHeight)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};m.style={default:d}},"./node_modules/@public-ui/components/dist/esm/tab-index-92fe8657.js":(v,u,l)=>{l.d(u,{v:()=>c});var r=l("./node_modules/@public-ui/components/dist/esm/a11y.tipps-7e981511.js"),a=l("./node_modules/@public-ui/components/dist/esm/prop.validators-13dda64d.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const s={hooks:{afterPatch:d=>{d!==-1&&d!==0&&(0,r.e)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},c=(d,p)=>{(0,a.f)(d,"_tabIndex",p,s)}},"./node_modules/@public-ui/components/dist/esm/validator-fe8c60ef.js":(v,u,l)=>{l.d(u,{S:()=>c,a:()=>s,b:()=>r,i:()=>a});/*!
 * KoliBri - The accessible HTML-Standard
 */const r=d=>typeof d=="object"&&d!==null,a=(d,p=0)=>typeof d=="string"&&d.length>=p,s=d=>{if(typeof d!="object"||d===null)return a(d,1);for(const p in d)if(a(p,1)===!1)return!1;return!0},c=new Event("StateChange")}}]);