/*! * KoliBri - The accessible HTML-Standard */ import{r as t,h as i,H as s,g as e}from"./index-330c31f9.js";import{w as a}from"./button-link-6460a64a.js";import{v as l,a as n}from"./disabled-afaa3ff9.js";import{v as h}from"./hide-label-742b016b.js";import{v as d,w as r}from"./icon-bab73759.js";import{a as o}from"./label-8d64163d.js";import{h as c,g as u}from"./a11y.tipps-beae7792.js";import{n as v}from"./dev.utils-5b0de6da.js";import{f,j as _,h as b,w as p,a as m,b as y,s as g}from"./prop.validators-0a66a178.js";import{a as j}from"./reuse-c2156413.js";import{v as A}from"./tab-index-83c69a92.js";import{p as C,a as L}from"./controller-b2239c17.js";import{a as w,w as x}from"./controller-1e40c612.js";import{w as I}from"./validation-441b613f.js";import"./index-3711603c.js";const k=class{constructor(i){t(this,i);this.nonce=v();this.catchRef=t=>{this.ref=t;j(this.host,this.ref)};this.onClick=t=>{var i,s;if(this.state._type==="submit"){C({form:this.host,ref:this.ref})}else if(this.state._type==="reset"){L({form:this.host,ref:this.ref})}else if(typeof((i=this.state._on)===null||i===void 0?void 0:i.onClick)==="function"){t.stopPropagation();f(t,this.ref);(s=this.state._on)===null||s===void 0?void 0:s.onClick(t,this.state._value)}else{c(`There was no button click callback configured! (_on.onClick)`)}};this._accessKey=undefined;this._ariaControls=undefined;this._ariaCurrent=undefined;this._ariaExpanded=undefined;this._ariaLabel=undefined;this._ariaSelected=undefined;this._customClass=undefined;this._disabled=false;this._hideLabel=false;this._icon=undefined;this._iconAlign=undefined;this._iconOnly=undefined;this._id=undefined;this._label=undefined;this._on=undefined;this._role=undefined;this._tabIndex=undefined;this._tooltipAlign="top";this._type="button";this._value=undefined;this._variant="normal";this.state={_icon:{},_label:false,_on:{},_type:"button",_variant:"normal"}}render(){const t=this.state._label===false;return i(s,null,i("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":_(this.state._ariaCurrent),"aria-expanded":b(this.state._ariaExpanded),"aria-labelledby":this.state._hideLabel?this.nonce:undefined,"aria-selected":_(this.state._ariaSelected),class:{[this.state._variant]:this.state._variant!=="custom",[this.state._customClass]:this.state._variant==="custom"&&typeof this.state._customClass==="string"&&this.state._customClass.length>0,"icon-only":this.state._hideLabel===true,"hide-label":this.state._hideLabel===true},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),i("kol-span-wc",{_icon:this.state._icon,_hideLabel:this.state._hideLabel,_label:t?false:this.state._label},i("slot",{name:"expert",slot:"expert"}))),i("kol-tooltip",{"aria-hidden":"true",hidden:t||!this.state._hideLabel,_align:this.state._tooltipAlign,_id:this.nonce,_label:typeof this.state._label==="string"?this.state._label:""}))}validateAccessKey(t){p(this,"_accessKey",t)}validateAriaControls(t){p(this,"_ariaControls",t)}validateAriaCurrent(t){m(this,"_ariaControls",(t=>t===true||t==="date"||t==="location"||t==="page"||t==="step"||t==="time"),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){l(this,t)}validateAriaLabel(t){this.validateLabel(t)}validateAriaSelected(t){y(this,"_ariaSelected",t)}validateCustomClass(t){p(this,"_customClass",t,{defaultValue:undefined})}validateDisabled(t){n(this,t);if(t===true){u()}}validateHideLabel(t){h(this,t)}validateIcon(t){d(this,t)}validateIconAlign(t){r(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateId(t){p(this,"_id",t)}validateLabel(t){o(this,t)}validateOn(t){if(typeof t==="object"&&t!==null){this.state=Object.assign(Object.assign({},this.state),{_on:t})}}validateRole(t){p(this,"_role",t)}validateTabIndex(t){A(this,t)}validateTooltipAlign(t){a(this,"_tooltipAlign",t)}validateType(t){w(this,"_type",t)}validateValue(t){g(this,"_value",t)}validateVariant(t){x(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey);this.validateAriaControls(this._ariaControls);this.validateAriaCurrent(this._ariaCurrent);this.validateAriaExpanded(this._ariaExpanded);this.validateAriaSelected(this._ariaSelected);this.validateCustomClass(this._customClass);this.validateDisabled(this._disabled);this.validateHideLabel(this._hideLabel||this._iconOnly);this.validateIcon(this._icon);this.validateIconAlign(this._iconAlign);this.validateId(this._id);this.validateLabel(this._label||this._ariaLabel);this.validateOn(this._on);this.validateRole(this._role);this.validateTabIndex(this._tabIndex);this.validateTooltipAlign(this._tooltipAlign);this.validateType(this._type);this.validateValue(this._value);this.validateVariant(this._variant)}get host(){return e(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};const O=class{constructor(s){t(this,s);this.renderHeadline=(t,s)=>{switch(s){case 1:return i("h1",{class:"headline"},t,i("slot",null));case 2:return i("h2",{class:"headline"},t,i("slot",null));case 3:return i("h3",{class:"headline"},t,i("slot",null));case 4:return i("h4",{class:"headline"},t,i("slot",null));case 5:return i("h5",{class:"headline"},t,i("slot",null));case 6:return i("h6",{class:"headline"},t,i("slot",null));default:return i("strong",{class:"headline"},t,i("slot",null))}};this.renderSecondaryHeadline=(t,s)=>{switch(s){case 1:return i("span",{class:"secondary-headline"},t);case 2:return i("h2",{class:"secondary-headline"},t);case 3:return i("h3",{class:"secondary-headline"},t);case 4:return i("h4",{class:"secondary-headline"},t);case 5:return i("h5",{class:"secondary-headline"},t);case 6:return i("h6",{class:"secondary-headline"},t);default:return i("strong",{class:"secondary-headline"},t)}};this._label=undefined;this._level=1;this._secondaryHeadline=undefined;this.state={_label:false,_level:1}}validateLabel(t){o(this,t)}validateLevel(t){I(this,t)}validateSecondaryHeadline(t){p(this,"_secondaryHeadline",t)}componentWillLoad(){this.validateLabel(this._label);this.validateLevel(this._level);this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return i(s,null,typeof this.state._secondaryHeadline==="string"&&this.state._secondaryHeadline.length>0?i("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}};export{k as kol_button_wc,O as kol_heading_wc}; //# sourceMappingURL=kol-button-wc_2.entry.js.map