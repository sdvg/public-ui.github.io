/*! For license information please see 4622.72c7e241.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4622],{78101:(e,t,i)=>{i.d(t,{I:()=>s,a:()=>n,f:()=>l});var a=i(56538),o=i(61097),r=i(94882);const l=(e,t,i="")=>{t.forEach(((t,a)=>{const o=`${i}-${a}`;"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0&&(Array.isArray(t.options)?l(e,t.options,o):e.set(o,t))}))};class s extends r.I{constructor(e,t,i){super(e,t,i),this.component=e}validateRequired(e){(0,a.b)(this.component,"_required",e)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class n extends s{constructor(e,t,i){super(e,t,i),this.keyOptionMap=new Map,this.getOptionByKey=e=>this.keyOptionMap.get(e),this.isValueInOptions=(e,t)=>void 0!==t.find((t=>t.value===e)),this.beforePatchListValue=(e,t)=>{const i=t.has("_list")?t.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),l(this.keyOptionMap,i);const e=t.has("_value")?t.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(e,i)){const e=i[0].value;t.set("_value",e),this.onStateChange()}}},this.component=e}validateOrientation(e){(0,a.a)(this.component,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateList(e){(0,a.d)(this.component,"_list",(e=>"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0),e,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(e){e=(0,a.m)(e),e=Array.isArray(e)?e[0]:e,(0,a.s)(this.component,"_value",e,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(e){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof e){const t=setTimeout((()=>{clearTimeout(t),e(o.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},54622:(e,t,i)=>{i.r(t),i.d(t,{kol_select:()=>b});var a=i(61126),o=i(61097),r=i(94882),l=i(56538),s=i(55375),n=i(78101),d=i(57274),h=i(64507);const c=e=>{if("object"==typeof e&&null!==e){if("string"==typeof e.label&&e.label.length>0)return e.disabled=!0===e.disabled,e.label=`${e.label}`.trim(),!1===(0,h.h)(e.label,3)&&!1===(0,h.c)(e.label)&&(0,d.a)(`Ein abweichendes Aria-Label (${e.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(e.options)||void 0===e.options.find((e=>!1===c(e)));if("number"==typeof e.label)return!0}return!1};class p extends s.I{constructor(e,t,i){super(e,t,i),this.keyOptionMap=new Map,this.getOptionByKey=e=>this.keyOptionMap.get(e),this.isValueInOptions=(e,t)=>void 0!==t.find((t=>"string"==typeof t.value?t.value===e:!!Array.isArray(t.options)&&this.isValueInOptions(e,t.options))),this.filterValuesInOptions=(e,t)=>e.filter((e=>void 0!==this.isValueInOptions(e,t))),this.beforePatchListValue=(e,t)=>{const i=t.has("_list")?t.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),(0,n.f)(this.keyOptionMap,i);const e=t.has("_value")?t.get("_value"):this.component.state._value,a=this.filterValuesInOptions(Array.isArray(e)&&e.length>0?e:[],i);!1===this.component._multiple&&0===a.length?(t.set("_value",[i[0].value]),this.onStateChange()):Array.isArray(e)&&a.length<e.length&&(t.set("_value",a),this.onStateChange())}},this.component=e}validateHeight(e){(0,l.w)(this.component,"_height",e)}validateList(e){(0,l.d)(this.component,"_list",c,e,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateMultiple(e){(0,l.b)(this.component,"_multiple",e,{hooks:{beforePatch:this.beforePatchListValue}})}validateRequired(e){(0,l.b)(this.component,"_required",e)}validateSize(e){(0,l.e)(this.component,"_size",e,{min:1})}validateValue(e){(0,l.d)(this.component,"_value",(()=>!0),e,void 0,{hooks:{beforePatch:this.beforePatchListValue}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(e){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof e){const t=setTimeout((()=>{clearTimeout(t),e(o.S)}))}},this.validateHeight(this.component._height),this.validateList(this.component._list),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}}const u=(e,t)=>Array.isArray(e)&&e.includes(t),b=class{renderOptgroup(e,t){var i;return(0,a.h)("optgroup",{disabled:!0===e.disabled,label:e.label},null===(i=e.options)||void 0===i?void 0:i.map(((e,i)=>{const o=`${t}-${i}`;return Array.isArray(e.options)?this.renderOptgroup(e,o):(0,a.h)("option",{disabled:!0===e.disabled,key:o,selected:u(this.state._value,e.value),value:o},e.label)})))}render(){const{ariaDiscribedBy:e}=(0,r.g)(this.state);return(0,a.h)(a.H,null,(0,a.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_touched:this.state._touched},(0,a.h)("span",{slot:"label"},(0,a.h)("slot",null)),(0,a.h)("select",Object.assign({ref:this.catchRef,part:"select",title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",style:{height:this.state._height}},{onClick:this.controller.onFacade.onClick,onBlur:this.controller.onFacade.onBlur,onFocus:this.controller.onFacade.onFocus},{onChange:this.onChange}),this.state._list.map(((e,t)=>{const i=`-${t}`;return Array.isArray(e.options)?this.renderOptgroup(e,i):(0,a.h)("option",{disabled:!0===e.disabled,key:i,selected:u(this.state._value,e.value),value:i},e.label)})))))}constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,o.a)(this.host,this.ref)},this.onChange=e=>{var t,i;this._value=Array.from((null===(t=this.ref)||void 0===t?void 0:t.options)||[]).filter((e=>!0===e.selected)).map((e=>{var t;return null===(t=this.controller.getOptionByKey(e.value))||void 0===t?void 0:t.value})),this.controller.setFormAssociatedValue(this._value),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onChange)&&this.state._on.onChange(e,this._value)},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._height=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._required=void 0,this._size=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_height:"",_id:"\u26a0",_list:[],_multiple:!1,_value:[]},this.controller=new p(this,"textarea",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHeight(e){this.controller.validateHeight(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcon(e){this.controller.validateIcon(e)}validateId(e){this.controller.validateId(e)}validateList(e){this.controller.validateList(e)}validateMultiple(e){this.controller.validateMultiple(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateRequired(e){this.controller.validateRequired(e)}validateSize(e){this.controller.validateSize(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_height:["validateHeight"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_size:["validateSize"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};b.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}.kol-required span::after{content:'*'}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;font-size:1rem;line-height:1.5em;min-height:44px;padding:0.5em 0.75em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:calc(var(--kolibri-spacing) / 2)}input input.error,input select.error,input textarea.error,select input.error,select select.error,select textarea.error,textarea input.error,textarea select.error,textarea textarea.error{border-color:var(--kolibri-border-error)}input input:focus,input input:hover,input select:focus,input select:hover,input textarea:focus,input textarea:hover,select input:focus,select input:hover,select select:focus,select select:hover,select textarea:focus,select textarea:hover,textarea input:focus,textarea input:hover,textarea select:focus,textarea select:hover,textarea textarea:focus,textarea textarea:hover{border-color:var(--kolibri-color-text)}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}kol-input{display:grid;gap:calc(2 * var(--kolibri-spacing))}input,select,textarea{background-color:white;border-color:var(--kolibri-border-color);border-radius:var(--kolibri-border-radius);border-style:solid;border-width:var(--kolibri-border-width);font-size:1em;font-family:var(--kolibri-font-family-sans);line-height:2.5em;overflow:hidden;width:100%}input,select:not([multiple]){height:2.75em}input::placeholder{color:var(--kolibri-color-normal)}input:hover{border-color:var(--kolibri-color-primary)}input:not([type='color']):read-only,input:disabled,select:read-only,select:disabled,textarea:read-only,textarea:disabled{cursor:not-allowed}.required label>span::after{content:'*';padding-left:var(--kolibri-spacing)}.icons{display:flex;justify-content:space-between;height:0}.icons>kol-icon{display:grid;height:44px;padding:0 0.75em;place-items:center}.icon-left input,.icon-left select{padding-left:2em}.icon-right input,.icon-right select{padding-right:2em}kol-button-wc{position:relative;float:right;z-index:1000;margin-top:-44px}kol-button-wc button{background-color:transparent;display:inline-block;min-height:44px;min-width:44px}.icon-right kol-button-wc{margin-right:44px}.disabled{opacity:0.5}select[multiple],textarea{overflow:auto}textarea{display:block}select option{margin:var(--kolibri-spacing) 0;padding:0.5em;border-radius:0.25em;cursor:pointer}select option:disabled{cursor:not-allowed}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled){background-color:var(--kolibri-color-primary);color:white}"}},64507:(e,t,i)=>{i.d(t,{a:()=>c,b:()=>u,c:()=>d,h:()=>n,v:()=>p});var a=i(57274),o=i(56538),r=i(61097);const l=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/,n=(e,t=1)=>(e=>{var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0})(e)>=t,d=e=>s.test(e),h=(e,t,i,o)=>{const l=t.has("_ariaLabel")?t.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof l){const e=t.has("_label")?t.get("_label"):i.state._label;!1===(0,r.i)(e,l)&&("_ariaLabel"===o?t.set("_label",l):t.set("_ariaLabel",e),(0,a.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xfcndern der Barrierefreiheit f\xfcr die Sprachsteuerung mit dem Label-Text beginnen."))}},c=(e,t)=>{((e,t,i={})=>{var r;(0,o.w)(e,"_ariaLabel",t,{hooks:{afterPatch:(e,t,o,r)=>{var l,s;"function"==typeof(null===(l=i.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(e,t,o,r)),"string"==typeof e&&e.length>0&&!1===n(e,3)&&!1===d(e)&&(0,a.a)(`Ein abweichendes Aria-Label (${e}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(r=i.hooks)||void 0===r?void 0:r.beforePatch}})})(e,t,{hooks:{beforePatch:h}})},p=(e,t,i={})=>{var r;(0,o.w)(e,"_label",t,{hooks:{afterPatch:(e,t,o,r)=>{var l,s;"function"==typeof(null===(l=i.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(e,t,o,r)),"string"==typeof e&&!1===n(e,3)&&!1===d(e)&&(0,a.a)(`Ein Label (${e}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(r=i.hooks)||void 0===r?void 0:r.beforePatch},required:!0})},u=(e,t)=>{p(e,t,{hooks:{beforePatch:h}})}}}]);