/*! For license information please see 9502.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9502],{68134:(t,e,i)=>{i.d(e,{I:()=>h,g:()=>l});var o=i(25858),n=i(19060),a=i(23845),s=i(99311);const l=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:o}},r=(0,s.b)();class d{constructor(t,e,i){var o,n,a,s,l;if(this.syncFormAssociatedName=()=>{var t;r&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;r&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,r){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(n=this.host)||void 0===n?void 0:n.children[e].tagName)&&(null===(a=this.host)||void 0===a||a.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(t){(0,n.b)(this.component,"_alert",t)}validateTouched(t){(0,n.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class h extends d{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,n.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,n.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,n.b)(this.component,"_disabled",t),!0===t&&(0,o.g)()}validateError(t){(0,n.w)(this.component,"_error",t)}validateHideLabel(t){(0,n.b)(this.component,"_hideLabel",t)}validateHint(t){(0,n.w)(this.component,"_hint",t)}validateId(t){(0,n.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName},minLength:1}),""!==t&&void 0!==t||(0,o.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,n.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,n.s)(this.component,"_on",t)}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,a.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;this.setFormAssociatedValue(i),this.valueChangeListeners.forEach((t=>t(i))),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},5274:(t,e,i)=>{i.d(e,{I:()=>r});var o=i(19060),n=i(7269),a=i(47393),s=i(68134);const l=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,n.b)(i.right,1)&&(i.right={icon:i.right}),(0,n.b)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends s.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,n.b)(t.left,1)||(0,a.i)(t.left)||(0,n.b)(t.right,1)||(0,a.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},47393:(t,e,i)=>{i.d(e,{i:()=>l,v:()=>r,w:()=>d});var o=i(19060),n=i(7269);const a=(t,e,i)=>{(0,n.d)(i)?t[e]=i:(0,n.b)(i,1)&&(t[e]={icon:i})},s=t=>{var e,i,o,s,l,r,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,n.b)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(a(i,"top",t.top),a(i,"right",t.right),a(i,"bottom",t.bottom),a(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.c)(t.style))&&(0,n.b)(t.icon,1),r=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.a)(t,"_icon",(t=>null===t||(0,n.b)(t,1)||"object"==typeof t&&null!==t&&((0,n.b)(t.left,1)||l(t.left)||(0,n.b)(t.right,1)||l(t.right)||(0,n.b)(t.top,1)||l(t.top)||(0,n.b)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),s(t)}},required:!0})}))},d=(t,e)=>{(0,o.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{s(t)}}})}},89502:(t,e,i)=>{i.r(e),i.d(e,{kol_input_file:()=>h});var o=i(99459),n=i(7269),a=i(68134),s=i(19060),l=i(5274),r=i(99311);class d extends l.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAccept(t){(0,s.w)(this.component,"_accept",t)}validateMultiple(t){(0,s.b)(this.component,"_multiple",t)}validateRequired(t){(0,s.b)(this.component,"_required",t)}validateValue(t){(0,s.w)(this.component,"_value",t),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateAccept(this.component._accept),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}const h=class{render(){const{ariaDescribedBy:t}=(0,a.g)(this.state);return(0,o.h)(o.H,null,(0,o.h)("kol-input",{class:{file:!0},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,o.h)("span",{slot:"label"},(0,o.h)("slot",null)),(0,o.h)("input",Object.assign({ref:this.catchRef,title:"",accept:this.state._accept,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,slot:"input",spellcheck:"false",type:"file",value:this.state._value},this.controller.onFacade,{onChange:this.onChange}))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this.onChange=t=>{var e;this.ref instanceof HTMLInputElement&&"file"===this.ref.type&&"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,this.ref.files)},this._accept=void 0,this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:(0,r.n)()},this.controller=new d(this,"file",this.host)}validateAccept(t){this.controller.validateAccept(t)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accept:["validateAccept"],_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}label input[type='file']::-webkit-file-upload-button{display:none}label input[type='file']:before{content:'Datei auswählen'}label input[multiple]:before{content:'Dateien auswählen'}div.input{cursor:pointer}"}},23845:(t,e,i)=>{i.d(e,{v:()=>s});var o=i(25858),n=i(19060);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,n.e)(t,"_tabIndex",e,a)}}}]);