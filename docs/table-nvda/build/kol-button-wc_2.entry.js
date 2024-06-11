/*! For license information please see kol-button-wc_2.entry.js.LICENSE.txt */ import{r as t,h as i,H as s,g as e}from"./index-330c31f9.js";import{w as a}from"./button-link-6460a64a.js";import{v as l,a as n}from"./disabled-afaa3ff9.js";import{v as h}from"./hide-label-742b016b.js";import{v as d,w as r}from"./icon-bab73759.js";import{a as o}from"./label-8d64163d.js";import{h as c,g as u}from"./a11y.tipps-beae7792.js";import{n as v}from"./dev.utils-5b0de6da.js";import{f,j as _,h as b,w as p,a as m,b as y,s as g}from"./prop.validators-0a66a178.js";import{a as j}from"./reuse-c2156413.js";import{v as A}from"./tab-index-83c69a92.js";import{p as C,a as L}from"./controller-b2239c17.js";import{a as w,w as x}from"./controller-1e40c612.js";import{w as I}from"./validation-441b613f.js";import"./index-3711603c.js";const k=class{constructor(a){t(this,a),this.nonce=v(),this.catchRef=a=>{this.ref=a,j(this.host,this.ref)},this.onClick=a=>{var t,e;"submit"===this.state._type?C({form:this.host,ref:this.ref}):"reset"===this.state._type?L({form:this.host,ref:this.ref}):"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)?(a.stopPropagation(),f(a,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(a,this.state._value)):c("There was no button click callback configured! (_on.onClick)")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:{},_label:!1,_on:{},_type:"button",_variant:"normal"}}render(){const a=!1===this.state._label;return i(s,null,i("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":_(this.state._ariaCurrent),"aria-expanded":b(this.state._ariaExpanded),"aria-labelledby":this.state._hideLabel?this.nonce:void 0,"aria-selected":_(this.state._ariaSelected),class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),i("kol-span-wc",{_icon:this.state._icon,_hideLabel:this.state._hideLabel,_label:!a&&this.state._label},i("slot",{name:"expert",slot:"expert"}))),i("kol-tooltip",{"aria-hidden":"true",hidden:a||!this.state._hideLabel,_align:this.state._tooltipAlign,_id:this.nonce,_label:"string"==typeof this.state._label?this.state._label:""}))}validateAccessKey(a){p(this,"_accessKey",a)}validateAriaControls(a){p(this,"_ariaControls",a)}validateAriaCurrent(a){m(this,"_ariaControls",(a=>!0===a||"date"===a||"location"===a||"page"===a||"step"===a||"time"===a),new Set(["boolean","String {data, location, page, step, time}"]),a)}validateAriaExpanded(a){l(this,a)}validateAriaLabel(a){this.validateLabel(a)}validateAriaSelected(a){y(this,"_ariaSelected",a)}validateCustomClass(a){p(this,"_customClass",a,{defaultValue:void 0})}validateDisabled(a){n(this,a),!0===a&&u()}validateHideLabel(a){h(this,a)}validateIcon(a){d(this,a)}validateIconAlign(a){r(this,a)}validateIconOnly(a){this.validateHideLabel(a)}validateId(a){p(this,"_id",a)}validateLabel(a){o(this,a)}validateOn(a){"object"==typeof a&&null!==a&&(this.state=Object.assign(Object.assign({},this.state),{_on:a}))}validateRole(a){p(this,"_role",a)}validateTabIndex(a){A(this,a)}validateTooltipAlign(t){a(this,"_tooltipAlign",t)}validateType(a){w(this,"_type",a)}validateValue(a){g(this,"_value",a)}validateVariant(a){x(this,"_variant",a)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateId(this._id),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return e(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},O=class{constructor(a){t(this,a),this.renderHeadline=(a,t)=>{switch(t){case 1:return i("h1",{class:"headline"},a,i("slot",null));case 2:return i("h2",{class:"headline"},a,i("slot",null));case 3:return i("h3",{class:"headline"},a,i("slot",null));case 4:return i("h4",{class:"headline"},a,i("slot",null));case 5:return i("h5",{class:"headline"},a,i("slot",null));case 6:return i("h6",{class:"headline"},a,i("slot",null));default:return i("strong",{class:"headline"},a,i("slot",null))}},this.renderSecondaryHeadline=(a,t)=>{switch(t){case 1:return i("span",{class:"secondary-headline"},a);case 2:return i("h2",{class:"secondary-headline"},a);case 3:return i("h3",{class:"secondary-headline"},a);case 4:return i("h4",{class:"secondary-headline"},a);case 5:return i("h5",{class:"secondary-headline"},a);case 6:return i("h6",{class:"secondary-headline"},a);default:return i("strong",{class:"secondary-headline"},a)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_label:!1,_level:1}}validateLabel(a){o(this,a)}validateLevel(a){I(this,a)}validateSecondaryHeadline(a){p(this,"_secondaryHeadline",a)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return i(s,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?i("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}};export{k as kol_button_wc,O as kol_heading_wc};