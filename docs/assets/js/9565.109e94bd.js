/*! For license information please see 9565.109e94bd.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9565],{900:(t,e,i)=>{i.d(e,{I:()=>r});var o=i(6896),a=i(5940),l=i(2293),s=i(4673);const n=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,a.a)(i.right,1)&&(i.right={icon:i.right}),(0,a.a)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends s.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.a)(t.left,1)||(0,l.i)(t.left)||(0,a.a)(t.right,1)||(0,l.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:n},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},2293:(t,e,i)=>{i.d(e,{i:()=>r,v:()=>d,w:()=>c});var o=i(5298),a=i(6896),l=i(5940);const s=(t,e,i)=>{(0,l.i)(i)?t[e]=i:(0,l.a)(i,1)&&(t[e]={icon:i})},n=t=>{var e,i,o,a,n,r,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),n=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(a=t.nextState)||void 0===a||a.set("_icon",((t,e)=>{let i={};return(0,l.a)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(s(i,"top",t.top),s(i,"right",t.right),s(i,"bottom",t.bottom),s(i,"left",t.left)),i})(e,n))}else if(null===(n=t.nextState)||void 0===n?void 0:n.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,l.b)(t.style))&&(0,l.a)(t.icon,1),d=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(t,"_icon",(t=>null===t||(0,l.a)(t,1)||"object"==typeof t&&null!==t&&((0,l.a)(t.left,1)||r(t.left)||(0,l.a)(t.right,1)||r(t.right)||(0,l.a)(t.top,1)||r(t.top)||(0,l.a)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),n(t)}},required:!0})}))},c=(t,e)=>{(0,o.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xfcber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,a.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{n(t)}}})}},9565:(t,e,i)=>{i.r(e),i.d(e,{kol_input_color:()=>d});var o=i(2339),a=i(2690),l=i(4673),s=i(6896),n=i(900);class r extends n.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAutoComplete(t){(0,s.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateList(t){(0,s.c)(this.component,"_list",(t=>"string"==typeof t),t)}validateValue(t){(0,s.w)(this.component,"_value",t)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateList(this.component._list),this.validateValue(this.component._value)}}const d=class{render(){const{ariaDiscribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0;return(0,o.h)(o.H,null,(0,o.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,o.h)("span",{slot:"label"},(0,o.h)("slot",null)),(0,o.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:!0===this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,name:this.state._name,slot:"input",spellcheck:"false",type:"color",value:this.state._value},this.controller.onFacade))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,a.p)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"\u26a0",_list:[]},this.controller=new r(this,"color",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}}}]);