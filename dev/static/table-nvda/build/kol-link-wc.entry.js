/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as i,h as t,H as e,g as s}from"./index-330c31f9.js";import{a}from"./i18n-931157b2.js";import{w as l}from"./button-link-6460a64a.js";import{v as n,a as h}from"./aria-selected-b1c50b49.js";import{b as d,w as o,f as r,h as c,i as f}from"./prop.validators-0a66a178.js";import{v}from"./hide-label-742b016b.js";import{v as p,w as b}from"./icon-bab73759.js";import{a as _}from"./label-8d64163d.js";import{d as u,g}from"./a11y.tipps-beae7792.js";import{n as m}from"./dev.utils-5b0de6da.js";import{a as x}from"./reuse-c2156413.js";import{v as j}from"./tab-index-83c69a92.js";import"./index-fc511254.js";import"./index-3711603c.js";const A=(i,t)=>{if(typeof t==="boolean")d(i,"_download",t);else o(i,"_download",t)};const k=(i,t,e={})=>{o(i,"_href",t,e)};const y=(i,t)=>{d(i,"_stealth",t)};const w=class{constructor(t){i(this,t);this.nonce=m();this.catchRef=i=>{this.ref=i;x(this.host,this.ref)};this.onClick=i=>{var t,e;if(typeof((t=this.state._on)===null||t===void 0?void 0:t.onClick)==="function"){i.preventDefault();r(i,this.ref);(e=this.state._on)===null||e===void 0?void 0:e.onClick(i,this.state._href)}};this.getRenderValues=()=>{let i={};if(typeof this.state._selector==="string"){i={role:"link",tabIndex:0,onClick:()=>{f(this.state._selector)},onKeyPress:()=>{f(this.state._selector)}}}const t=typeof this.state._target==="string"&&this.state._target!=="_self";const e={href:typeof this.state._href==="string"&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:typeof this.state._target==="string"&&this.state._target.length>0?this.state._target:undefined,rel:t?"noopener":undefined};if((this.state._useCase==="image"||this.state._hideLabel===true)&&!this.state._label){u(`[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der _hide-label gesetzt ist.`)}return{isExternal:t,tagAttrs:e,goToProps:i}};this._ariaControls=undefined;this._ariaCurrent=undefined;this._ariaExpanded=undefined;this._ariaLabel=undefined;this._ariaSelected=undefined;this._disabled=false;this._download=false;this._hideLabel=false;this._href=undefined;this._icon=undefined;this._iconAlign=undefined;this._iconOnly=undefined;this._label=undefined;this._on=undefined;this._role=undefined;this._selector=undefined;this._stealth=false;this._tabIndex=undefined;this._target=undefined;this._targetDescription=a("kol-open-link-in-tab");this._tooltipAlign="right";this._useCase="text";this.state={_href:"…",_icon:{},_label:false}}render(){const{isExternal:i,tagAttrs:s,goToProps:a}=this.getRenderValues();const l=this.state._label===false;return t(e,null,t("a",Object.assign({ref:this.catchRef},s,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":c(this.state._ariaExpanded),"aria-labelledby":this.state._hideLabel?this.nonce:undefined,"aria-selected":c(this.state._ariaSelected),class:{disabled:this.state._disabled===true,"skip ":this.state._stealth!==false,"icon-only":this.state._hideLabel===true,"hide-label":this.state._hideLabel===true,"external-link":i}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},a,{role:this.state._role,tabIndex:this.state._tabIndex}),t("kol-span-wc",{_icon:this.state._icon,_hideLabel:this.state._hideLabel,_label:l?false:this.state._label||this.state._href},t("slot",{name:"expert",slot:"expert"})),i&&t("kol-icon",{class:"external-link-icon",_label:this.state._targetDescription,_icon:"codicon codicon-link-external"})),t("kol-tooltip",{"aria-hidden":"true",hidden:l||!this.state._hideLabel,_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label||this.state._href}))}validateAriaControls(i){o(this,"_ariaControls",i)}validateAriaCurrent(i){n(this,i)}validateAriaExpanded(i){d(this,"_ariaExpanded",i)}validateAriaLabel(i){this.validateLabel(i)}validateAriaSelected(i){h(this,i)}validateDisabled(i){d(this,"_disabled",i);if(i===true){g()}}validateDownload(i){A(this,i)}validateHideLabel(i){v(this,i)}validateHref(i){k(this,i)}validateIcon(i){p(this,i)}validateIconAlign(i){b(this,i)}validateIconOnly(i){this.validateHideLabel(i)}validateLabel(i){_(this,i)}validateOn(i){if(typeof i==="object"&&typeof(i===null||i===void 0?void 0:i.onClick)==="function"){this.state=Object.assign(Object.assign({},this.state),{_on:i})}}validateRole(i){o(this,"_role",i)}validateSelector(i){o(this,"_selector",i)}validateStealth(i){y(this,i)}validateTabIndex(i){j(this,i)}validateTarget(i){o(this,"_target",i)}validateTargetDescription(i){o(this,"_targetDescription",i)}validateTooltipAlign(i){l(this,"_tooltipAlign",i)}validateUseCase(i){if(typeof i==="string"){this.state=Object.assign(Object.assign({},this.state),{_useCase:i})}}componentWillLoad(){this.validateAriaControls(this._ariaControls);this.validateAriaCurrent(this._ariaCurrent);this.validateAriaExpanded(this._ariaExpanded);this.validateAriaSelected(this._ariaSelected);this.validateDisabled(this._disabled);this.validateDownload(this._download);this.validateHideLabel(this._hideLabel||this._iconOnly);this.validateHref(this._href);this.validateIcon(this._icon);this.validateIconAlign(this._iconAlign);this.validateLabel(this._label||this._ariaLabel);this.validateOn(this._on);this.validateRole(this._role);this.validateSelector(this._selector);this.validateStealth(this._stealth);this.validateTabIndex(this._tabIndex);this.validateTarget(this._target);this.validateTargetDescription(this._targetDescription);this.validateTooltipAlign(this._tooltipAlign);this.validateUseCase(this._useCase)}get host(){return s(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}};export{w as kol_link_wc};
//# sourceMappingURL=kol-link-wc.entry.js.map