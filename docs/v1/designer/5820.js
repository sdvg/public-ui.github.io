/*! For license information please see 5820.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5820],{55820:(t,i,o)=>{o.r(i),o.d(i,{kol_split_button:()=>a});var e=o(76215),s=o(61099),n=o(29076);const a=class{constructor(t){(0,e.r)(this,t),this.clickButtonHandler={onClick:t=>{var i,o;"function"==typeof(null===(i=this._on)||void 0===i?void 0:i.onClick)?null===(o=this._on)||void 0===o||o.onClick(t,this._value):this.toggleDropdown()}},this.clickToggleHandler={onClick:()=>this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_show:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_show:!1}))},this.toggleDropdown=t=>{("boolean"==typeof t?t:!this.state._show)?this.openDropdown():this.closeDropdown()},this.forceCounter=100,this.forceOpenDropdown=()=>{var t;this.forceCounter>0&&((null===(t=this.dropdownContent)||void 0===t?void 0:t.clientHeight)?this.openDropdown():setTimeout(this.forceOpenDropdown,10),this.forceCounter--)},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild,this._show&&this.forceOpenDropdown()})))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._show=!1,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_show:!1}}render(){return(0,e.h)(e.H,{key:"5f65c3778d75fd93923ead109475ab3392c2b563",class:"kol-split-button split-button"},(0,e.h)(n.d,{key:"1588e58289a4d19c947ca2965ac88c03bc196336",class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icons:this._icons||this._icon,_hideLabel:this._hideLabel,_label:this._label,_name:this._name,_on:this.clickButtonHandler,_role:this._role,_syncValueBySelector:this._syncValueBySelector,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,e.h)("div",{key:"3206518e4228e4011d6c181104bfebf0d73e246c",class:"horizontal-line"}),(0,e.h)(n.d,{key:"cc159485592d6a0a95fb33f138bd90e87c0bbade",class:"secondary-button",_disabled:this._disabled,_hideLabel:!0,_icons:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._show?"schließen":"öffnen"),_on:this.clickToggleHandler}),(0,e.h)("div",{key:"024c2cf521d436ae3ff531e97a87be523f432899",class:"popover",ref:this.catchDropdownElements},(0,e.h)("div",{key:"e082c7caf610b57dee6311e50200d696a41caf41",class:"popover-content"},(0,e.h)("slot",{key:"f8a25f4b8a2f728de9cee06591f0799d561a0950"}))))}validateShowDropdown(t){this.validateShow(t)}validateShow(t){(0,s.v)(this,t,{hooks:{afterPatch:t=>{this.toggleDropdown(!!t)}}})}componentWillLoad(){this.validateShow(this._show||this._show)}static get watchers(){return{_show:["validateShowDropdown","validateShow"]}}};a.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button .kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}"}},61099:(t,i,o)=>{o.d(i,{v:()=>s});var e=o(97659);const s=(t,i,o)=>{(0,e.a)(t,"_show",i,o)}}}]);