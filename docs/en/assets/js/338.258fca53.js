/*! For license information please see 338.258fca53.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[338],{75612:(t,i,a)=>{a.d(i,{a:()=>s,v:()=>o});var e=a(82361);const o=(t,i)=>{(0,e.a)(t,"_ariaCurrent",(t=>"date"===t||"location"===t||"page"===t||"step"===t||"time"===t||!0===t),new Set(["String {data, location, page, step, time}","boolean"]),i)},s=(t,i)=>{(0,e.b)(t,"_ariaSelected",i)}},61358:(t,i,a)=>{a.d(i,{v:()=>o});var e=a(82361);const o=(t,i)=>{(0,e.b)(t,"_hideLabel",i)}},40338:(t,i,a)=>{a.r(i),a.d(i,{kol_split_button:()=>p});var e=a(83957),o=a(82361),s=a(66199),n=a(23340),l=a(48108),d=a(5245),h=a(55511),r=a(75612),c=a(66198),_=a(61358);const p=class{constructor(t){(0,e.r)(this,t),this.clickHandler=t=>{"function"==typeof this.state._on.onClick?this.state._on.onClick(t):this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!1}))},this.toggleDropdown=t=>{("boolean"==typeof t?t:!this.state._showDropdown)?this.openDropdown():this.closeDropdown()},this.forceCounter=100,this.forceOpenDropdown=()=>{var t;this.forceCounter>0&&((null===(t=this.dropdownContent)||void 0===t?void 0:t.clientHeight)?this.openDropdown():setTimeout(this.forceOpenDropdown,10),this.forceCounter--)},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild,this._showDropdown&&this.forceOpenDropdown()})))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:"",_label:"",_on:{},_showDropdown:!1}}render(){return(0,e.h)(e.H,null,(0,e.h)("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icon:this._icon,_iconOnly:this._hideLabel,_label:this._label,_on:{onClick:this.clickHandler},_role:this._role,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,e.h)("div",{class:"horizontal-line"}),(0,e.h)("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,"_icon-only":!0,_icon:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._showDropdown?"schlie\xdfen":"\xf6ffnen"),_on:{onClick:()=>this.toggleDropdown()}}),(0,e.h)("div",{class:"popover",ref:this.catchDropdownElements},(0,e.h)("div",{class:"popover-content"},(0,e.h)("slot",null))))}validateAccessKey(t){(0,o.w)(this,"_accessKey",t)}validateAriaControls(t){(0,o.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,r.v)(this,t)}validateAriaExpanded(t){(0,c.v)(this,t)}validateAriaLabel(t){(0,s.a)(this,t)}validateAriaSelected(t){(0,r.a)(this,t)}validateCustomClass(t){(0,o.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,c.a)(this,t),t&&(0,n.g)()}validateHideLabel(t){(0,_.v)(this,t)}validateIcon(t){(0,o.w)(this,"_icon",t)}validateIconOnly(t){(0,_.v)(this,t)}validateLabel(t){(0,s.b)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,o.w)(this,"_role",t)}validateShowDropdown(t){(0,o.b)(this,"_showDropdown",t),this.toggleDropdown(t)}validateTabIndex(t){(0,l.v)(this,t)}validateTooltipAlign(t){(0,d.w)(this,"_tooltipAlign",t)}validateType(t){(0,h.a)(this,"_type",t)}validateValue(t){(0,o.s)(this,"_value",t)}validateVariant(t){(0,h.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateShowDropdown(this._showDropdown),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_showDropdown:["validateShowDropdown"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};p.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}"}}}]);