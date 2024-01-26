/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,F as Fragment,H as Host,g as getElement}from"./index-0b7aa54b.js";import{au as handleSlotContent,C as showExpertSlot}from"./index-807d8631.js";import{a as translate}from"./i18n-6e523906.js";import"./index-7c986198.js";import"./dev.utils-69ed2492.js";const KolInput=class{constructor(t){registerInstance(this,t),this.slotName="input",this.catchInputSlot=t=>{handleSlotContent(this.host,t,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(t){return t&&"object"==typeof t&&t.style?t.style:{}}render(){var t,i,s,e,o,l,n,a;const r="string"==typeof this._error&&this._error.length>0&&!0===this._touched,_=showExpertSlot(this._label),d="string"==typeof this._hint&&this._hint.length>0,c=!_&&this._hideLabel;return h(Host,{class:{disabled:!0===this._disabled,error:!0===r,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError}},h("label",{class:"input-label",id:c?void 0:`${this._id}-label`,hidden:c,htmlFor:this._id},h("span",{class:"input-label-span"},h("slot",{name:"label"}))),d&&h("span",{class:"hint",id:`${this._id}-hint`},this._hint),h("div",{class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icons)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(i=this._icons)||void 0===i?void 0:i.right)}},(null===(s=this._icons)||void 0===s?void 0:s.left)&&h("kol-icon",{_label:"",_icons:(null===(e=this._icons)||void 0===e?void 0:e.left).icon,style:this.getIconStyles(null===(o=this._icons)||void 0===o?void 0:o.left)}),h("div",{ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&h("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(l=this._icons)||void 0===l?void 0:l.right)&&h("kol-icon",{_label:"",_icons:(null===(n=this._icons)||void 0===n?void 0:n.right).icon,style:this.getIconStyles(null===(a=this._icons)||void 0===a?void 0:a.right)})),c&&h("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),r&&h("kol-alert",{_alert:this._alert,_type:"error",class:"error"+(this._hideError?" hidden":""),id:`${this._id}-error`},this._error),Array.isArray(this._suggestions)&&this._suggestions.length>0&&h("datalist",{id:`${this._id}-list`},this._suggestions.map((t=>h("option",{value:t})))),this._hasCounter&&h("span",{class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&h(Fragment,null,h("span",{"aria-label":translate("kol-of"),role:"img"},"/"),this._maxLength)," ",h("span",null,translate("kol-characters"))))}get host(){return getElement(this)}};export{KolInput as kol_input};