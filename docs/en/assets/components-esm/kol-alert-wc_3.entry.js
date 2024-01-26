/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as registerInstance,h,H as Host,g as getElement}from"./index-0b7aa54b.js";import{n as watchBoolean,m as validateHasCloser,v as validateLabel,s as setState,w as watchValidator,av as alertTypeOptions,aw as alertVariantOptions,ax as mapBoolean2String,ay as mapStringOrBoolean2String,b as propagateFocus,$ as setEventTarget,am as validateAccessKey,az as validateAriaControls,aA as validateAriaExpanded,aB as validateAriaSelected,a7 as validateCustomClass,aC as validateDisabled,F as a11yHintDisabled,H as validateHideLabel,aq as validateIcons,q as watchString,J as validateLabelWithExpertSlot,aD as validateButtonCallbacks,as as validateAlternativeButtonLinkRole,L as validateTabIndex,a as validateTooltipAlign,aE as validateButtonType,aF as validateButtonVariant,C as showExpertSlot,aG as validateHeadingVariant}from"./index-807d8631.js";import{a as translate}from"./i18n-6e523906.js";import{L as Log}from"./dev.utils-69ed2492.js";import{w as watchHeadingLevel}from"./validation-223a4d10.js";import{s as stopPropagation,t as tryToDispatchKoliBriEvent}from"./events-fa760b68.js";import{p as propagateSubmitEventToForm,a as propagateResetEventToForm}from"./controller-90bf3a75.js";import{A as AssociatedInputController}from"./associated.controller-ac43f4c8.js";import"./index-7c986198.js";const Icon=t=>h("kol-icon",{class:"heading-icon",_label:"string"==typeof t.label&&t.label.length>0?"":t.ariaLabel,_icons:t.icon}),AlertIcon=t=>{switch(t.type){case"error":return h(Icon,{ariaLabel:translate("kol-error"),icon:"codicon codicon-error",label:t.label});case"info":return h(Icon,{ariaLabel:translate("kol-info"),icon:"codicon codicon-info",label:t.label});case"warning":return h(Icon,{ariaLabel:translate("kol-warning"),icon:"codicon codicon-warning",label:t.label});case"success":return h(Icon,{ariaLabel:translate("kol-success"),icon:"codicon codicon-pass",label:t.label});default:return h(Icon,{ariaLabel:translate("kol-message"),icon:"codicon codicon-comment",label:t.label})}},KolAlertWc=class{constructor(t){registerInstance(this,t),this.close=()=>{var t;void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=t=>"object"==typeof t&&null!==t&&"function"==typeof t.onClose,this._alert=!1,this._hasCloser=!1,this._label=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var t;if(this.state._alert){try{Log.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(t){Log.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return h(Host,{class:{alert:!0,[this.state._type]:!0,[this.state._variant]:!0,hasCloser:!!this.state._hasCloser},role:this.state._alert?"alert":void 0},h("div",{class:"heading"},h(AlertIcon,{label:this.state._label,type:this.state._type}),h("div",{class:"heading-content"},"string"==typeof this.state._label&&(null===(t=this.state._label)||void 0===t?void 0:t.length)>0&&h("kol-heading-wc",{_label:this.state._label,_level:this.state._level}),"msg"===this.state._variant&&h("div",{class:"content"},h("slot",null))),this.state._hasCloser&&h("kol-button-wc",{class:"close",_hideLabel:!0,_icons:{left:{icon:"codicon codicon-close"}},_label:translate("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this.state._variant&&h("div",{class:"content"},h("slot",null)))}validateAlert(t){watchBoolean(this,"_alert",t)}validateHasCloser(t){validateHasCloser(this,t)}validateLabel(t){validateLabel(this,t)}validateLevel(t){watchHeadingLevel(this,t)}validateOn(t){this.validateOnValue(t)&&setState(this,"_on",{onClose:t.onClose})}validateType(t){watchValidator(this,"_type",(t=>"string"==typeof t&&alertTypeOptions.includes(t)),new Set(`String {${alertTypeOptions.join(", ")}`),t)}validateVariant(t){watchValidator(this,"_variant",(t=>"string"==typeof t&&alertVariantOptions.includes(t)),new Set(`AlertVariant {${alertVariantOptions.join(", ")}`),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}},KolButtonWc=class{render(){const t=showExpertSlot(this.state._label);return h(Host,null,h("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey||void 0,"aria-controls":this.state._ariaControls,"aria-expanded":mapBoolean2String(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-selected":mapStringOrBoolean2String(this.state._ariaSelected),class:{button:!0,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id,name:this.state._name},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),h("kol-span-wc",{class:"button-inner",_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:t?"":this.state._label},h("slot",{name:"expert",slot:"expert"}))),h("kol-tooltip-wc",{"aria-hidden":"true",hidden:t||!this.state._hideLabel,_accessKey:this._accessKey,_align:this.state._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))}constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onClick=t=>{var a,e;"submit"===this.state._type?propagateSubmitEventToForm({form:this.host,ref:this.ref}):"reset"===this.state._type?propagateResetEventToForm({form:this.host,ref:this.ref}):(stopPropagation(t),tryToDispatchKoliBriEvent("click",this.host,this.state._value),this.controller.setFormAssociatedValue(this.state._value),"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)&&(setEventTarget(t,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(t,this.state._value)))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icons:{},_label:"",_on:{},_type:"button",_variant:"normal"},this.controller=new AssociatedInputController(this,"button",this.host)}validateAccessKey(t){validateAccessKey(this,t)}validateAriaControls(t){validateAriaControls(this,t)}validateAriaExpanded(t){validateAriaExpanded(this,t)}validateAriaSelected(t){validateAriaSelected(this,t)}validateCustomClass(t){validateCustomClass(this,t)}validateDisabled(t){validateDisabled(this,t),!0===t&&a11yHintDisabled()}validateHideLabel(t){validateHideLabel(this,t)}validateIcons(t){validateIcons(this,t)}validateId(t){watchString(this,"_id",t)}validateLabel(t){validateLabelWithExpertSlot(this,t,{required:!0})}validateName(t){this.controller.validateName(t)}validateOn(t){validateButtonCallbacks(this,t)}validateRole(t){validateAlternativeButtonLinkRole(this,t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){validateTabIndex(this,t)}validateTooltipAlign(t){validateTooltipAlign(this,t)}validateType(t){validateButtonType(this,t)}validateValue(t){setState(this,"_value",t),this.controller.setFormAssociatedValue(this.state._value)}validateVariant(t){validateButtonVariant(this,t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel),this.validateIcons(this._icons),this.validateId(this._id),this.validateLabel(this._label),this.validateName(this._name),this.validateOn(this._on),this.validateRole(this._role),this.validateSyncValueBySelector(this._syncValueBySelector),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaExpanded:["validateAriaExpanded"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_role:["validateRole"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},KolHeadingWc=class{constructor(t){registerInstance(this,t),this.renderHeadline=(t,a)=>{const e="number"==typeof a&&a>0&&a<=6?`h${a}`:"strong",i=this._variant||e;return h(e,{class:{headline:!0,[`headline-${i}`]:!0}},t,h("slot",{name:"expert"}))},this.renderSecondaryHeadline=(t,a)=>{switch(a){case 1:return h("span",{class:"secondary-headline"},t);case 2:return h("h2",{class:"secondary-headline"},t);case 3:return h("h3",{class:"secondary-headline"},t);case 4:return h("h4",{class:"secondary-headline"},t);case 5:return h("h5",{class:"secondary-headline"},t);case 6:return h("h6",{class:"secondary-headline"},t);default:return h("strong",{class:"secondary-headline"},t)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this._variant=void 0,this.state={_label:"",_level:1}}validateLabel(t){validateLabelWithExpertSlot(this,t)}validateLevel(t){watchHeadingLevel(this,t)}validateSecondaryHeadline(t){watchString(this,"_secondaryHeadline",t)}validateVariant(t){validateHeadingVariant(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline),this.validateVariant(this._variant)}render(){return h(Host,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?h("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"],_variant:["validateVariant"]}}};export{KolAlertWc as kol_alert_wc,KolButtonWc as kol_button_wc,KolHeadingWc as kol_heading_wc};