/*! For license information please see 24155.4521a37c.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[24155],{24155:(t,n,e)=>{e.r(n),e.d(n,{kol_split_button:()=>o});var i=e(37210);const o=class{constructor(t){(0,i.r)(this,t),this.clickButtonHandler={onClick:t=>{var n,e;"function"==typeof(null===(n=this._on)||void 0===n?void 0:n.onClick)?null===(e=this._on)||void 0===e||e.onClick(t,this._value):this.toggleDropdown()}},this.clickToggleHandler={onClick:()=>this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_show:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_show:!1}))},this.toggleDropdown=t=>{("boolean"==typeof t?t:!this.state._show)?this.openDropdown():this.closeDropdown()},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild})))},this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_show:!1}}render(){return(0,i.h)(i.H,null,(0,i.h)("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_ariaControls:this._ariaControls,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icons:this._icons,_hideLabel:this._hideLabel,_label:this._label,_name:this._name,_on:this.clickButtonHandler,_role:this._role,_syncValueBySelector:this._syncValueBySelector,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,i.h)("div",{class:"horizontal-line"}),(0,i.h)("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,_hideLabel:!0,_icons:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._show?"schlie\xdfen":"\xf6ffnen"),_on:this.clickToggleHandler}),(0,i.h)("div",{class:"popover",ref:this.catchDropdownElements},(0,i.h)("div",{class:"popover-content"},(0,i.h)("slot",null))))}};o.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t}\n\n\t.main-button {\n\t\tflex-grow: 1;\n\t\ttext-align: left;\n\t}\n\n\t.main-button kol-span-wc {\n\t\tplace-items: start;\n\t}\n\n\t.secondary-button button {\n\t\theight: 100%;\n\t}\n\n\t.horizontal-line {\n\t\tbackground-color: rgba(0, 0, 0, 0.2);\n\t\tborder-radius: 2px;\n\t\theight: 70%;\n\t\tmargin-block: auto;\n\t\twidth: 1px;\n\t}\n\n\t/* popover */\n\t.popover {\n\t\theight: 0;\n\t\tleft: 0;\n\t\tmin-width: 100%;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\ttop: 100%;\n\t\ttransition: height 0.3s ease-in-out;\n\t}\n\n\t.popover-content {\n\t\tinset: 0 0 auto 0;\n\t\tmin-width: 100%;\n\t\tposition: absolute;\n\t}\n}\n"}}}]);