/*! For license information please see 5184.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5184],{91257:(t,e,i)=>{i.d(e,{I:()=>u,g:()=>r});var o=i(26737),n=i(73681),a=i(67706),s=i(7e3),l=i(33810);const r=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDiscribedBy:o}},h=(0,l.b)();class d{constructor(t,e,i){var o,n,a,s,l;if(this.syncFormAssociatedName=()=>{var t;h&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;h&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,h){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(n=this.host)||void 0===n?void 0:n.children[e].tagName)&&(null===(a=this.host)||void 0===a||a.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(t){(0,n.b)(this.component,"_alert",t)}validateTouched(t){(0,n.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const c=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,a.a)(i.right,1)&&(i.right={icon:i.right}),(0,a.a)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class u extends d{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,n.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,n.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,n.b)(this.component,"_disabled",t),!0===t&&(0,o.c)()}validateError(t){(0,n.w)(this.component,"_error",t)}validateHideLabel(t){(0,n.b)(this.component,"_hideLabel",t)}validateHint(t){(0,n.w)(this.component,"_hint",t)}validateIcon(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.a)(t.left,1)||(0,s.i)(t.left)||(0,a.a)(t.right,1)||(0,s.i)(t.right))),new Set(["KoliBriInputIcon"]),t,{hooks:{beforePatch:c},required:!0})}))}validateId(t){(0,n.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,n.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,n.s)(this.component,"_on",t)}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,s.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}}},44265:(t,e,i)=>{i.d(e,{I:()=>l,a:()=>r,f:()=>s});var o=i(73681),n=i(67706),a=i(91257);const s=(t,e,i="")=>{e.forEach(((e,o)=>{const n=`${i}-${o}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?s(t,e.options,n):t.set(n,e))}))};class l extends a.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){(0,o.b)(this.component,"_required",t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class r extends l{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchListValue=(t,e)=>{const i=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),s(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,o.a)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateList(t){(0,o.c)(this.component,"_list",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(t){t=(0,o.m)(t),t=Array.isArray(t)?t[0]:t,(0,o.s)(this.component,"_value",t,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(n.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},35184:(t,e,i)=>{i.r(e),i.d(e,{kol_input_radio:()=>l});var o=i(46266),n=i(49750),a=i(91257),s=i(44265);const l=class{render(){const{ariaDiscribedBy:t,hasError:e}=(0,a.g)(this.state);return(0,o.h)(o.H,null,(0,o.h)("fieldset",{class:{error:!0===e,disabled:!0===this.state._disabled,required:!0===this.state._required,[this.state._orientation]:!0}},(0,o.h)("legend",{class:"block w-full mb-1 leading-normal"},(0,o.h)("span",null,(0,o.h)("slot",null))),this.state._list.map(((e,i)=>{const n=`${this.state._id}-${i}`;return(0,o.h)("kol-input",{key:n,_disabled:this.state._disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:n,_renderNoLabel:!0,_required:this.state._required,_touched:this.state._touched},(0,o.h)("div",{slot:"input"},(0,o.h)("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${n}-label`,part:"input",title:"",type:"radio",id:n,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${i}`},this.controller.onFacade,{onChange:this.onChange})),(0,o.h)("label",{htmlFor:`${n}`,id:`${n}-label`,style:{height:this.state._hideLabel&&!0!==this.state._required?"0":void 0,margin:this.state._hideLabel&&!0!==this.state._required?"0":void 0,padding:this.state._hideLabel&&!0!==this.state._required?"0":void 0,visibility:this.state._hideLabel&&!0!==this.state._required?"hidden":void 0}},(0,o.h)("span",null,(0,o.h)("span",null,e.label)))))})),e&&(0,o.h)("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg"},this.state._error)))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.p)(this.host,this.ref)},this.onChange=t=>{if(t.target instanceof HTMLInputElement){const e=this.controller.getOptionByKey(t.target.value);void 0!==e&&this.controller.setValue(t,e.value)}},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:"⚠",_list:[],_orientation:"vertical"},this.controller=new s.a(this,"radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_orientation:["validateOrientation"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};l.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},49750:(t,e,i)=>{i.d(e,{p:()=>n});var o=i(67706);const n=(t,e)=>{(0,o.i)(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))}},7e3:(t,e,i)=>{i.d(e,{a:()=>h,i:()=>r,v:()=>u,w:()=>d});var o=i(26737),n=i(73681),a=i(67706);const s=(t,e,i)=>{(0,a.i)(i)?t[e]=i:(0,a.a)(i,1)&&(t[e]={icon:i})},l=t=>{var e,i,o,n,l,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,e)=>{let i={};return(0,a.a)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(s(i,"top",t.top),s(i,"right",t.right),s(i,"bottom",t.bottom),s(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,a.b)(t.style))&&(0,a.a)(t.icon,1),h=(t,e)=>{(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(t){}(0,n.a)(t,"_icon",(t=>null===t||(0,a.a)(t,1)||"object"==typeof t&&null!==t&&((0,a.a)(t.left,1)||r(t.left)||(0,a.a)(t.right,1)||r(t.right)||(0,a.a)(t.top,1)||r(t.top)||(0,a.a)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),l(t)}},required:!0})}))},d=(t,e)=>{(0,o.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,n.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})},c={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.e)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},u=(t,e)=>{(0,n.d)(t,"_tabIndex",e,c)}},67706:(t,e,i)=>{i.d(e,{S:()=>l,a:()=>n,b:()=>a,c:()=>s,i:()=>o});const o=t=>"object"==typeof t&&null!==t,n=(t,e=0)=>"string"==typeof t&&t.length>=e,a=t=>{if("object"!=typeof t||null===t)return n(t,1);for(const e in t)if(!1===n(e,1))return!1;return!0},s=(t,e)=>0===e.length||((t,e)=>0===e.length&&new RegExp(`^${t}`).test(e))(t,e),l=new Event("StateChange")}}]);