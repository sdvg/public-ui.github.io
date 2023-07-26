/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host,F as Fragment}from"./index-2c046ff1.js";import{a as translate}from"./i18n-2b2ccdd6.js";import{v as validateHasCloser}from"./has-closer-4415fbda.js";import{L as Log}from"./dev.utils-e98368e1.js";import{b as watchBoolean,w as watchString,s as setState,a as watchValidator}from"./prop.validators-e3c93395.js";import{w as watchHeadingLevel}from"./validation-a9f13bf5.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";import"./a11y.tipps-255c885e.js";import"./reuse-c2156413.js";const Icon=t=>h("kol-icon",{class:"heading-icon",_ariaLabel:"string"==typeof t.heading&&t.heading.length>0?"":t.ariaLabel,_icon:t.icon}),AlertIcon=t=>{switch(t.type){case"error":return h(Icon,{ariaLabel:translate("kol-error"),icon:"codicon codicon-error",heading:t.heading});case"info":return h(Icon,{ariaLabel:translate("kol-info"),icon:"codicon codicon-info",heading:t.heading});case"warning":return h(Icon,{ariaLabel:translate("kol-warning"),icon:"codicon codicon-warning",heading:t.heading});case"success":return h(Icon,{ariaLabel:translate("kol-success"),icon:"codicon codicon-pass",heading:t.heading});default:return h(Icon,{ariaLabel:translate("kol-message"),icon:"codicon codicon-comment",heading:t.heading})}},KolAlertWc=class{constructor(t){registerInstance(this,t),this.close=()=>{var t;void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=t=>"object"==typeof t&&null!==t&&"function"==typeof t.onClose,this._alert=!1,this._hasCloser=!1,this._heading=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var t;if(this.state._alert){try{Log.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(t){Log.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return h(Host,{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},h("div",{class:"heading"},h(AlertIcon,{heading:this.state._heading,type:this.state._type}),h("div",null,"string"==typeof this.state._heading&&(null===(t=this.state._heading)||void 0===t?void 0:t.length)>0&&h("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),"msg"===this._variant&&h("div",{class:"content"},h("slot",null))),this.state._hasCloser&&h("kol-button-wc",{class:"close",_hideLabel:!0,_icon:{left:{icon:"codicon codicon-close"}},_label:translate("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&h("div",{class:"content"},h("slot",null)))}validateAlert(t){watchBoolean(this,"_alert",t)}validateHasCloser(t){validateHasCloser(this,t)}validateHeading(t){watchString(this,"_heading",t)}validateLevel(t){watchHeadingLevel(this,t)}validateOn(t){this.validateOnValue(t)&&setState(this,"_on",{onClose:t.onClose})}validateType(t){watchValidator(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}validateVariant(t){watchValidator(this,"_variant",(t=>"card"===t||"msg"===t),new Set("AlertVariant {card, msg}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}},KolInput=class{constructor(t){registerInstance(this,t),this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=void 0,this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._smartButton=void 0,this._touched=!1}render(){var t,i,a,e;const s="string"==typeof this._error&&this._error.length>0&&!0===this._touched,o="string"==typeof this._hint&&this._hint.length>0,n=!0===this._hideLabel&&!0!==this._required,l=this._slotName?this._slotName:"input";return h(Host,{class:{disabled:!0===this._disabled,error:!0===s,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&h("label",{id:`${this._id}-label`,hidden:n,htmlFor:this._id},h("span",null,h("slot",{name:"label"}))),o&&h("span",{class:"hint",id:`${this._id}-hint`},this._hint),h("div",{class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(i=this._icon)||void 0===i?void 0:i.right)}},(null===(a=this._icon)||void 0===a?void 0:a.left)&&h("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}),h("slot",{name:l}),"object"==typeof this._smartButton&&null!==this._smartButton&&h("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(e=this._icon)||void 0===e?void 0:e.right)&&h("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon})),s&&h("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&h("datalist",{id:`${this._id}-list`},this._list.map((t=>h("option",{value:t})))),this._hasCounter&&h("span",{"aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&h(Fragment,null,h("span",{"aria-label":translate("kol-of"),role:"img"},"/"),this._maxLength)," ",h("span",null,translate("kol-characters"))))}};export{KolAlertWc as kol_alert_wc,KolInput as kol_input};