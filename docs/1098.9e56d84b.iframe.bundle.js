"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1098],{"./node_modules/@public-ui/components/dist/esm/controller-1d744727.js":(y,_,a)=>{a.d(_,{I:()=>d,a:()=>m,f:()=>v});var r=a("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js"),o=a("./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js"),l=a("./node_modules/@public-ui/components/dist/esm/controller-59c20a25.js");/*!
 * KoliBri - the accessible web component library
 */const v=(b,c,p="")=>{c.forEach((i,t)=>{const e=`${p}-${t}`;typeof i=="object"&&i!==null&&typeof i.label=="string"&&i.label.length>0&&(Array.isArray(i.options)?v(b,i.options,e):b.set(e,i))})};class d extends l.I{constructor(c,p){super(c,p),this.component=c}validateRequired(c){(0,r.b)(this.component,"_required",c)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class m extends d{constructor(c,p){super(c,p),this.keyOptionMap=new Map,this.getOptionByKey=i=>this.keyOptionMap.get(i),this.isValueInOptions=(i,t)=>t.find(e=>typeof e.value=="string"&&e.value===i)!==void 0,this.beforePatchListValue=(i,t)=>{const e=t.has("_list")?t.get("_list"):this.component.state._list;if(Array.isArray(e)&&e.length>0){this.keyOptionMap.clear(),v(this.keyOptionMap,e);const n=t.has("_value")?t.get("_value"):this.component.state._value;if(this.isValueInOptions(n,e)===!1){const s=e[0].value;t.set("_value",s),this.onStateChange()}}},this.component=c}validateOrientation(c){(0,r.a)(this.component,"_orientation",p=>p==="horizontal"||p==="vertical",new Set(["Orientation {horizontal, vertical}"]),c,{defaultValue:"vertical"})}validateList(c){(0,r.c)(this.component,"_list",p=>typeof p=="object"&&p!==null&&typeof p.label=="string"&&p.label.length>0,c,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(c){(0,r.s)(this.component,"_value",c,{beforePatch:this.beforePatchListValue})}componentWillLoad(c){super.componentWillLoad(),this.onStateChange=()=>{if(typeof c=="function"){const p=setTimeout(()=>{clearTimeout(p),c(o.S)})}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},"./node_modules/@public-ui/components/dist/esm/controller-59c20a25.js":(y,_,a)=>{a.d(_,{I:()=>p,g:()=>m});var r=a("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),o=a("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js"),l=a("./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js"),v=a("./node_modules/@public-ui/components/dist/esm/icon-930845a6.js"),d=a("./node_modules/@public-ui/components/dist/esm/tab-index-8a0b3a31.js");/*!
 * KoliBri - the accessible web component library
 */const m=i=>{const t=typeof i._error=="string"&&i._error.length>0&&i._touched===!0,e=typeof i._hint=="string"&&i._hint.length>0,n=[];return t===!0&&n.push(`${i._id}-error`),e===!0&&n.push(`${i._id}-hint`),{hasError:t,hasHint:e,ariaDiscribedBy:n}};class b{constructor(t,e){this.component=t,this.name=e}validateAlert(t){(0,o.b)(this.component,"_alert",t)}validateTouched(t){(0,o.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const c=(i,t)=>{const e=i;typeof e=="object"&&e!==null&&((0,l.i)(e.right,1)&&(e.right={icon:e.right}),(0,l.i)(e.left,1)&&(e.left={icon:e.left}),t.set("_icon",e))};class p extends b{constructor(t,e){super(t,e),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,o.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,o.b)(this.component,"_disabled",t),t===!0&&(0,r.b)()}validateError(t){(0,o.w)(this.component,"_error",t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t)}validateHint(t){(0,o.w)(this.component,"_hint",t)}validateIcon(t){(0,o.o)(t,()=>{try{t=(0,o.p)(t)}catch(e){}(0,o.a)(this.component,"_icon",e=>typeof e=="object"&&e!==null&&((0,l.i)(e.left,1)||(0,v.i)(e.left)||(0,l.i)(e.right,1)||(0,v.i)(e.right)),new Set(["KoliBriInputIcon"]),t,{hooks:{beforePatch:c},required:!0})})}validateId(t){(0,o.w)(this.component,"_id",t),t===void 0&&(0,r.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xF6nnte aber f\xFCr die E2E-Tests relevant sein.")}validateName(t){(0,o.w)(this.component,"_name",t),t===void 0&&(0,r.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, k\xF6nnte aber f\xFCr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){typeof t=="object"&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,()=>{try{t=(0,o.p)(t)}catch(e){}(0,o.s)(this.component,"_smartButton",t)})}validateTabIndex(t){(0,d.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,typeof((e=this.component._on)===null||e===void 0?void 0:e.onBlur)=="function"&&this.component._on.onBlur(t)}onChange(t){var e;typeof((e=this.component._on)===null||e===void 0?void 0:e.onChange)=="function"&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;typeof((e=this.component._on)===null||e===void 0?void 0:e.onClick)=="function"&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,typeof((e=this.component._on)===null||e===void 0?void 0:e.onFocus)=="function"&&this.component._on.onFocus(t)}setValue(t,e){var n;typeof((n=this.component._on)===null||n===void 0?void 0:n.onChange)=="function"&&this.component._on.onChange(t,e)}}},"./node_modules/@public-ui/components/dist/esm/icon-930845a6.js":(y,_,a)=>{a.d(_,{i:()=>b,v:()=>c,w:()=>p});var r=a("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),o=a("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js"),l=a("./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js");/*!
 * KoliBri - the accessible web component library
 */const v=(i,t,e)=>{(0,l.b)(e)?i[t]=e:(0,l.i)(e,1)&&(i[t]={icon:e})},d=(i,t)=>{let e={};return(0,l.i)(i,1)?t==="right"?e={right:{icon:i}}:e={left:{icon:i}}:typeof i=="object"&&i!==null&&(v(e,"top",i.top),v(e,"right",i.right),v(e,"bottom",i.bottom),v(e,"left",i.left)),e},m=i=>{var t,e,n,s,u,h,g;if(!((t=i.nextState)===null||t===void 0)&&t.has("_icon")){const f=(e=i.nextState)===null||e===void 0?void 0:e.get("_icon"),w=((n=i.nextState)===null||n===void 0?void 0:n.get("_iconAlign"))||i.state._iconAlign;(s=i.nextState)===null||s===void 0||s.set("_icon",d(f,w))}else if(!((u=i.nextState)===null||u===void 0)&&u.has("_iconAlign")){const f=i.state._iconAlign;(h=i.nextState)===null||h===void 0||h.set("_icon",{[f]:void 0,[(g=i.nextState)===null||g===void 0?void 0:g.get("_iconAlign")]:i.state._icon[f]})}},b=i=>typeof i=="object"&&i!==null&&(i.style===void 0||(0,l.a)(i.style))&&(0,l.i)(i.icon,1),c=(i,t)=>{(0,o.o)(t,()=>{try{t=(0,o.p)(t)}catch(e){}(0,o.a)(i,"_icon",e=>e===null||(0,l.i)(e,1)||typeof e=="object"&&e!==null&&((0,l.i)(e.left,1)||b(e.left)||(0,l.i)(e.right,1)||b(e.right)||(0,l.i)(e.top,1)||b(e.top)||(0,l.i)(e.bottom,1)||b(e.bottom)),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(e,n)=>{e===null&&n.set("_icon",{}),m(i)}},required:!0})})},p=(i,t)=>{(0,r.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xFCber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,o.a)(i,"_iconAlign",e=>e==="left"||e==="right",new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{m(i)}}})}},"./node_modules/@public-ui/components/dist/esm/kol-select.entry.js":(y,_,a)=>{a.r(_),a.d(_,{kol_select:()=>i});var r=a("./node_modules/@public-ui/components/dist/esm/index-bc1a7f22.js"),o=a("./node_modules/@public-ui/components/dist/esm/controller-59c20a25.js"),l=a("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js"),v=a("./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js"),d=a("./node_modules/@public-ui/components/dist/esm/controller-1d744727.js");/*!
 * KoliBri - the accessible web component library
 */const m=t=>typeof t=="object"&&t!==null&&typeof t.label=="string"&&t.label.length>0&&(!Array.isArray(t.options)||t.options.find(e=>m(e)===!1)===void 0);class b extends o.I{constructor(e,n){super(e,n),this.keyOptionMap=new Map,this.getOptionByKey=s=>this.keyOptionMap.get(s),this.isValueInOptions=(s,u)=>u.find(h=>typeof h.value=="string"?h.value===s:!!Array.isArray(h.options)&&this.isValueInOptions(s,h.options))!==void 0,this.filterValuesInOptions=(s,u)=>s.filter(h=>this.isValueInOptions(h,u)!==void 0),this.beforePatchListValue=(s,u)=>{const h=u.has("_list")?u.get("_list"):this.component.state._list;if(Array.isArray(h)&&h.length>0){this.keyOptionMap.clear(),(0,d.f)(this.keyOptionMap,h);const g=u.has("_value")?u.get("_value"):this.component.state._value,f=this.filterValuesInOptions(Array.isArray(g)&&g.length>0?g:[],h);this.component._multiple!==!0&&f.length===0?(u.set("_value",[h[0].value]),this.onStateChange()):Array.isArray(g)&&f.length<g.length&&(u.set("_value",f),this.onStateChange())}},this.component=e}validateHeight(e){(0,l.w)(this.component,"_height",e)}validateList(e){(0,l.c)(this.component,"_list",m,e,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateMultiple(e){(0,l.b)(this.component,"_multiple",e,{hooks:{beforePatch:this.beforePatchListValue}})}validateRequired(e){(0,l.b)(this.component,"_required",e)}validateSize(e){(0,l.f)(this.component,"_size",e,{min:1})}validateValue(e){(0,l.c)(this.component,"_value",()=>!0,e,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}componentWillLoad(e){super.componentWillLoad(),this.onStateChange=()=>{if(typeof e=="function"){const n=setTimeout(()=>{clearTimeout(n),e(v.S)})}},this.validateHeight(this.component._height),this.validateList(this.component._list),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}}const c=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b{font-weight:bolder}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.text-normal{color:var(--kolibri-color-normal)}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}.kol-required span::after{content:"*"}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input.error,select.error,textarea.error{border-color:var(--kolibri-border-error)}input:focus,input:hover,select:focus,select:hover,textarea:focus,textarea:hover{border-color:#999}input:not([type=checkbox]),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{background-color:white;display:block;line-height:1em;padding:0.5em}input[type=color]{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}`,p=(t,e)=>Array.isArray(t)&&t.includes(e),i=class{constructor(t){(0,r.r)(this,t),this.onChange=e=>{var n,s;this._value=Array.from(((n=this.htmlSelect)===null||n===void 0?void 0:n.options)||[]).filter(u=>u.selected===!0).map(u=>{var h;return(h=this.controller.getOptionByKey(u.value))===null||h===void 0?void 0:h.value}),typeof((s=this.state._on)===null||s===void 0?void 0:s.onChange)=="function"&&this.state._on.onChange(e,this._value)},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._height=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._size=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_height:"",_id:"\u26A0",_list:[],_name:"\u26A0",_value:[]},this.controller=new b(this,"textarea")}renderOptgroup(t,e){var n;return(0,r.h)("optgroup",{disabled:t.disabled===!0,label:t.label},(n=t.options)===null||n===void 0?void 0:n.map((s,u)=>{const h=`${e}-${u}`;return Array.isArray(s.options)?this.renderOptgroup(s,h):(0,r.h)("option",{disabled:s.disabled===!0,key:h,selected:p(this.state._value,s.value),value:h},s.label)}))}render(){const{ariaDiscribedBy:t}=(0,o.g)(this.state);return(0,r.h)(r.H,null,(0,r.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_touched:this.state._touched},(0,r.h)("span",{slot:"label"},(0,r.h)("slot",null)),(0,r.h)("select",Object.assign({part:"select",title:"",ref:e=>this.htmlSelect=e,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,slot:"input",spellcheck:"false",style:{height:this.state._height}},{onClick:this.controller.onFacade.onClick,onBlur:this.controller.onFacade.onBlur,onFocus:this.controller.onFacade.onFocus},{onChange:this.onChange}),this.state._list.map((e,n)=>{const s=`-${n}`;return Array.isArray(e.options)?this.renderOptgroup(e,s):(0,r.h)("option",{disabled:e.disabled===!0,key:s,selected:p(this.state._value,e.value),value:s},e.label)}))))}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHeight(t){this.controller.validateHeight(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=this._alert===!0,this._touched=this._touched===!0,this.controller.componentWillLoad(this.onChange)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_height:["validateHeight"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_size:["validateSize"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};i.style={default:c}},"./node_modules/@public-ui/components/dist/esm/tab-index-8a0b3a31.js":(y,_,a)=>{a.d(_,{v:()=>v});var r=a("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),o=a("./node_modules/@public-ui/components/dist/esm/prop.validators-920f01f1.js");/*!
 * KoliBri - the accessible web component library
 */const l={hooks:{afterPatch:d=>{d!==-1&&d!==0&&(0,r.e)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},v=(d,m)=>{(0,o.f)(d,"_tabIndex",m,l)}},"./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js":(y,_,a)=>{a.d(_,{S:()=>v,a:()=>l,b:()=>r,i:()=>o});/*!
 * KoliBri - the accessible web component library
 */const r=d=>typeof d=="object"&&d!==null,o=(d,m=0)=>typeof d=="string"&&d.length>=m,l=d=>{if(typeof d!="object"||d===null)return o(d,1);for(const m in d)if(o(m,1)===!1)return!1;return!0},v=new Event("StateChange")}}]);