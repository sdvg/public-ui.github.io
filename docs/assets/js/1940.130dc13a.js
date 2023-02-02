/*! For license information please see 1940.130dc13a.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[1940],{8879:(t,e,i)=>{i.d(e,{I:()=>v,g:()=>h});var o=i(254),a=i(2731),n=i(3663),s=i(3427),l=i(6220);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDiscribedBy:o}},r=(0,l.b)();class d{constructor(t,e,i){var o,a,n,s,l;if(this.syncFormAssociatedName=()=>{var t;r&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;r&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,r){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(a=this.host)||void 0===a?void 0:a.children[e].tagName)&&(null===(n=this.host)||void 0===n||n.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(t){(0,a.b)(this.component,"_alert",t)}validateTouched(t){(0,a.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const c=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,n.a)(i.right,1)&&(i.right={icon:i.right}),(0,n.a)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class v extends d{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,a.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,a.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,a.b)(this.component,"_disabled",t),!0===t&&(0,o.c)()}validateError(t){(0,a.w)(this.component,"_error",t)}validateHideLabel(t){(0,a.b)(this.component,"_hideLabel",t)}validateHint(t){(0,a.w)(this.component,"_hint",t)}validateIcon(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,n.a)(t.left,1)||(0,s.i)(t.left)||(0,n.a)(t.right,1)||(0,s.i)(t.right))),new Set(["KoliBriInputIcon"]),t,{hooks:{beforePatch:c},required:!0})}))}validateId(t){(0,a.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateName(t){(0,a.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,s.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}}},1940:(t,e,i)=>{i.r(e),i.d(e,{kol_textarea:()=>r});var o=i(7492),a=i(1126),n=i(2731),s=i(7575),l=i(8879);class h extends l.I{constructor(t,e,i){super(t,e,i),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=t}validateHasCounter(t){(0,n.b)(this.component,"_hasCounter",t,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(t){(0,n.d)(this.component,"_maxLength",t,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(t){(0,n.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,n.b)(this.component,"_readOnly",t)}validateResize(t){(0,n.a)(this.component,"_resize",(t=>"string"==typeof t&&("both"===t||"horizontal"===t||"none"===t||"vertical"===t)),new Set("String {both, horizontal, vertical, none}"),t)}validateRequired(t){(0,n.b)(this.component,"_required",t)}validateRows(t){(0,n.d)(this.component,"_rows",t)}validateValue(t){(0,n.w)(this.component,"_value",t,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const r=class{render(){const{ariaDiscribedBy:t}=(0,l.g)(this.state);return(0,o.h)(o.H,null,(0,o.h)("kol-input",{_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_readOnly:this.state._readOnly,_required:this.state._required,_touched:this.state._touched},(0,o.h)("span",{slot:"label"},(0,o.h)("slot",null)),(0,o.h)("div",{slot:"input"},(0,o.h)("textarea",Object.assign({ref:this.catchRef,part:"textarea",title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onKeyUp:this.onChange,style:{resize:this.state._resize},value:this.state._value})),this.state._hasCounter&&(0,o.h)("span",{"aria-atomic":"true","aria-live":"polite"},this.state._currentLength,this.state._maxLength&&(0,o.h)(o.F,null,(0,o.h)("span",{"aria-label":(0,a.a)("kol-of"),role:"img"},"/"),this.state._maxLength)," ",(0,o.h)("span",null,(0,a.a)("kol-characters"))))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.p)(this.host,this.ref)},this.onChange=t=>{this.ref instanceof HTMLTextAreaElement&&((0,n.s)(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=(t=>{t.style.overflow="hidden";const e=t.rows,i=t.clientHeight/e;t.rows=1;const o=Math.round(t.scrollHeight/i);return t.rows=e,o})(this.ref))),"function"==typeof this.controller.onFacade.onChange&&this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._hasCounter=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=void 0,this._resize="vertical",this._required=void 0,this._rows=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_id:"\u26a0",_resize:"vertical"},this.controller=new h(this,"textarea",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAdjustHeight(t){this.controller.validateAdjustHeight(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateResize(t){this.controller.validateResize(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.validateAdjustHeight(this._adjustHeight)}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};r.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},7575:(t,e,i)=>{i.d(e,{p:()=>a,s:()=>n});var o=i(3663);const a=(t,e)=>{(0,o.i)(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))},n=(t,e)=>{const i=setTimeout((()=>{clearTimeout(i),t()}),e)}},3427:(t,e,i)=>{i.d(e,{a:()=>r,i:()=>h,v:()=>v,w:()=>d});var o=i(254),a=i(2731),n=i(3663);const s=(t,e,i)=>{(0,n.i)(i)?t[e]=i:(0,n.a)(i,1)&&(t[e]={icon:i})},l=t=>{var e,i,o,a,l,h,r;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(a=t.nextState)||void 0===a||a.set("_icon",((t,e)=>{let i={};return(0,n.a)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(s(i,"top",t.top),s(i,"right",t.right),s(i,"bottom",t.bottom),s(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(h=t.nextState)||void 0===h||h.set("_icon",{[e]:void 0,[null===(r=t.nextState)||void 0===r?void 0:r.get("_iconAlign")]:t.state._icon[e]})}},h=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.b)(t.style))&&(0,n.a)(t.icon,1),r=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(t,"_icon",(t=>null===t||(0,n.a)(t,1)||"object"==typeof t&&null!==t&&((0,n.a)(t.left,1)||h(t.left)||(0,n.a)(t.right,1)||h(t.right)||(0,n.a)(t.top,1)||h(t.top)||(0,n.a)(t.bottom,1)||h(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),l(t)}},required:!0})}))},d=(t,e)=>{(0,o.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xfcber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,a.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})},c={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.e)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},v=(t,e)=>{(0,a.d)(t,"_tabIndex",e,c)}},3663:(t,e,i)=>{i.d(e,{S:()=>l,a:()=>a,b:()=>n,c:()=>s,i:()=>o});const o=t=>"object"==typeof t&&null!==t,a=(t,e=0)=>"string"==typeof t&&t.length>=e,n=t=>{if("object"!=typeof t||null===t)return a(t,1);for(const e in t)if(!1===a(e,1))return!1;return!0},s=(t,e)=>0===e.length||((t,e)=>new RegExp(`^${t}`).test(e))(t,e),l=new Event("StateChange")}}]);