/*! * KoliBri - The accessible HTML-Standard */ import{h,H as Host,r as registerInstance,g as getElement}from"./index-5ab2ea42.js";import{v as validateAriaControls,a as validateAriaCurrent,c as validateAlternativeButtonLinkRole}from"./alternative-button-link-role-244f2dd4.js";import{a as watchBoolean,w as watchValidator,l as mapStringOrBoolean2String,i as mapBoolean2String,f as setEventTarget,d as watchString,s as setState}from"./prop.validators-f76b82ff.js";import{v as validateHideLabel}from"./hide-label-3260d69a.js";import{v as validateIcon,w as watchIconAlign}from"./icon-8fc8202c.js";import{a as validateLabelWithExpertSlot}from"./label-07fc28f5.js";import{h as a11yHintDisabled}from"./a11y.tipps-d11c3322.js";import{s as stopPropagation,t as tryToDispatchKoliBriEvent,A as AssociatedInputController}from"./associated.controller-d175340e.js";import{a as propagateFocus}from"./reuse-c2156413.js";import{v as validateTabIndex}from"./tab-index-96981cc3.js";import{p as propagateSubmitEventToForm,a as propagateResetEventToForm}from"./controller-7ece1f6d.js";import{v as validateCustomClass,a as validateButtonVariant}from"./custom-class-50c7601c.js";import{v as validateTooltipAlign}from"./tooltip-align-1d539e33.js";import{w as watchHeadingLevel}from"./validation-830c4705.js";import"./dev.utils-38b5f4df.js";import"./index-37b5cbcf.js";import"./alignment-5d25e1ca.js";const validateAriaExpanded=(t,a)=>{watchBoolean(t,"_ariaExpanded",a)},validateDisabled=(t,a)=>{watchBoolean(t,"_disabled",a)},validateButtonCallbacks=(t,a)=>{watchValidator(t,"_on",(t=>"object"==typeof t&&null!==t),new Set(["ButtonCallbacksPropType {Events.onClick, Events.onMouseDown}"]),a)},validateButtonType=(t,a)=>{watchValidator(t,"_type",(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),a)},KolButtonWc=class{render(){const t=!1===this.state._label;return h(Host,null,h("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":mapStringOrBoolean2String(this.state._ariaCurrent),"aria-expanded":mapBoolean2String(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-selected":mapStringOrBoolean2String(this.state._ariaSelected),class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id,name:this.state._name},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),h("kol-span-wc",{_icon:this.state._icon,_hideLabel:this.state._hideLabel,_label:!t&&this.state._label},h("slot",{name:"expert",slot:"expert"}))),h("kol-tooltip",{"aria-hidden":"true",hidden:t||!this.state._hideLabel,_align:this.state._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))}constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onClick=t=>{var a,e;"submit"===this.state._type?propagateSubmitEventToForm({form:this.host,ref:this.ref}):"reset"===this.state._type?propagateResetEventToForm({form:this.host,ref:this.ref}):(stopPropagation(t),tryToDispatchKoliBriEvent("click",this.host,this.state._value),this.controller.setFormAssociatedValue(this.state._value),"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)&&(setEventTarget(t,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(t,this.state._value)))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:{},_label:!1,_on:{},_type:"button",_variant:"normal"},this.controller=new AssociatedInputController(this,"button",this.host)}validateAccessKey(t){watchString(this,"_accessKey",t)}validateAriaControls(t){validateAriaControls(this,t)}validateAriaCurrent(t){validateAriaCurrent(this,t)}validateAriaExpanded(t){validateAriaExpanded(this,t)}validateAriaLabel(t){this.validateLabel(t)}validateAriaSelected(t){watchBoolean(this,"_ariaSelected",t)}validateCustomClass(t){validateCustomClass(this,t)}validateDisabled(t){validateDisabled(this,t),!0===t&&a11yHintDisabled()}validateHideLabel(t){validateHideLabel(this,t)}validateIcon(t){validateIcon(this,t)}validateIconAlign(t){watchIconAlign(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateId(t){watchString(this,"_id",t)}validateLabel(t){validateLabelWithExpertSlot(this,t)}validateName(t){this.controller.validateName(t)}validateOn(t){validateButtonCallbacks(this,t)}validateRole(t){validateAlternativeButtonLinkRole(this,t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){validateTabIndex(this,t)}validateTooltipAlign(t){validateTooltipAlign(this,t)}validateType(t){validateButtonType(this,t)}validateValue(t){setState(this,"_value",t),this.controller.setFormAssociatedValue(this.state._value)}validateVariant(t){validateButtonVariant(this,t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateId(this._id),this.validateLabel(this._label||this._ariaLabel),this.validateName(this._name),this.validateOn(this._on),this.validateRole(this._role),this.validateSyncValueBySelector(this._syncValueBySelector),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_role:["validateRole"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},KolHeadingWc=class{constructor(t){registerInstance(this,t),this.renderHeadline=(t,a)=>{switch(a){case 1:return h("h1",{class:"headline"},t,h("slot",null));case 2:return h("h2",{class:"headline"},t,h("slot",null));case 3:return h("h3",{class:"headline"},t,h("slot",null));case 4:return h("h4",{class:"headline"},t,h("slot",null));case 5:return h("h5",{class:"headline"},t,h("slot",null));case 6:return h("h6",{class:"headline"},t,h("slot",null));default:return h("strong",{class:"headline"},t,h("slot",null))}},this.renderSecondaryHeadline=(t,a)=>{switch(a){case 1:return h("span",{class:"secondary-headline"},t);case 2:return h("h2",{class:"secondary-headline"},t);case 3:return h("h3",{class:"secondary-headline"},t);case 4:return h("h4",{class:"secondary-headline"},t);case 5:return h("h5",{class:"secondary-headline"},t);case 6:return h("h6",{class:"secondary-headline"},t);default:return h("strong",{class:"secondary-headline"},t)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_label:!1,_level:1}}validateLabel(t){validateLabelWithExpertSlot(this,t)}validateLevel(t){watchHeadingLevel(this,t)}validateSecondaryHeadline(t){watchString(this,"_secondaryHeadline",t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return h(Host,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?h("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}};export{KolButtonWc as kol_button_wc,KolHeadingWc as kol_heading_wc};