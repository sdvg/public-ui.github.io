/*! For license information please see 4826.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[4826],{64826:(t,e,i)=>{i.r(e),i.d(e,{kol_input_date:()=>n});var s=i(2786),a=i(32288),o=i(79212);const n=class{constructor(t){(0,s.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.a)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,s.h)(s.H,null,(0,s.h)("kol-input-number",{ref:this.catchRef,_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,s.h)("slot",null)))}valueAsIsoDate(t,e){const i=null!=t?t:e;if("string"==typeof i)return i;if("object"==typeof i&&i instanceof Date)switch(this._type){case"date":return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`;case"datetime-local":return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}T${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}`;case"month":return`${i.getFullYear()}-${i.getMonth()+1}`;case"time":return`${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}}validateDateString(t){switch(this._type){case"date":return n.isoDateRegex.test(t);case"datetime-local":return n.isoLocalDateTimeRegex.test(t);case"month":return n.isoMonthRegex.test(t);case"time":return n.isoTimeRegex.test(t);case"week":return n.isoWeekRegex.test(t)}}validateMax(t){(0,a.a)(this,"_max",(t=>void 0===t||this.validateDateString(t)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(t,"date"===this._type||"month"===this._type||"datetime-local"===this._type?n.DEFAULT_MAX_DATE:void 0))}validateMin(t){(0,a.a)(this,"_min",(t=>void 0===t||this.validateDateString(t)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(t))}validateValue(t){(0,a.a)(this,"_value",(t=>void 0===t||this.validateDateString(t)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(t))}componentWillLoad(){this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}get host(){return(0,s.g)(this)}static get watchers(){return{_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};n.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),n.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,n.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,n.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,n.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,n.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,n.style={default:"*{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:bold}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}"}}}]);