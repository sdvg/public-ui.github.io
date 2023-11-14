/*! For license information please see 78252.f5666d5c.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[78252],{78252:(t,n,e)=>{e.r(n),e.d(n,{kol_popover_wc:()=>l});var i=e(37210),o=e(79235),s=e(54175),a=e(10102),r=e(42740);const l=class{constructor(t){(0,i.r)(this,t),this.hidePopoverByEscape=t=>{"Escape"===t.key&&this.hidePopover()},this.hidePopoverByClickOutside=t=>{this.host&&!this.host.contains(t.target)&&this.hidePopover()},this.catchHostAndTriggerElement=t=>{t&&(this.host=t,this.triggerElement=t.previousElementSibling)},this.catchPopoverElement=t=>{this.popoverElement=t},this.catchArrowElement=t=>{this.arrowElement=t},this._align="top",this._show=!1,this.state={_align:"top",_show:!1,_visible:!1}}async showPopover(){this.addListenersToBody(),this.triggerElement&&this.popoverElement&&(await(0,r.a)({align:this._align,referenceElement:this.triggerElement,arrowElement:this.arrowElement,floatingElement:this.popoverElement}),this.state=Object.assign(Object.assign({},this.state),{_visible:!0}))}hidePopover(){var t;this.state=Object.assign(Object.assign({},this.state),{_visible:!1}),this._show=!1,null===(t=this.triggerElement)||void 0===t||t.focus(),this.removeListenersToBody()}addListenersToBody(){var t;const n=(0,a.b)().body;n.addEventListener("keyup",this.hidePopoverByEscape),n.addEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.addEventListener("scroll",(()=>{this.showPopover()}),{passive:!0})}removeListenersToBody(){var t;const n=(0,a.b)().body;n.removeEventListener("keyup",this.hidePopoverByEscape),n.removeEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.removeEventListener("scroll",(()=>{this.showPopover()}))}render(){return(0,i.h)(i.H,{ref:this.catchHostAndTriggerElement},(0,i.h)("div",{class:{popover:!0,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},(0,i.h)("div",{class:`arrow ${this.state._align}`,ref:this.catchArrowElement}),(0,i.h)("slot",null)))}validateAlign(t){(0,o.a)(this,t)}validateShow(t){(0,s.v)(this,t),t&&this.showPopover()}componentWillLoad(){this.validateAlign(this._align),this.validateShow(this._show)}static get watchers(){return{_align:["validateAlign"],_show:["validateShow"]}}};l.style="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tkol-popover {\n\t\theight: 0;\n\t\tposition: absolute;\n\t}\n\n\tkol-popover .popover {\n\t\tbackground-color: #fff;\n\t\tmin-height: max-content;\n\t\tmin-width: max-content;\n\t\topacity: 0;\n\t\tposition: absolute;\n\t}\n\n\tkol-popover .hidden {\n\t\tdisplay: none;\n\t}\n\n\tkol-popover .show {\n\t\tanimation: 0.3s ease-in forwards fadeInOpacity;\n\t}\n\n\tkol-popover .disappear {\n\t\tanimation: 0.3s ease-in backwards fadeInOpacity;\n\t}\n\n\tkol-popover .arrow {\n\t\tbackground-color: inherit;\n\t\theight: var(--font-size);\n\t\tposition: absolute;\n\t\trotate: 0.125turn;\n\t\twidth: var(--font-size);\n\t\tz-index: -1;\n\t}\n\n\t@keyframes fadeInOpacity {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n"},54175:(t,n,e)=>{e.d(n,{v:()=>o});var i=e(50888);const o=(t,n,e)=>{(0,i.a)(t,"_show",n,e)}}}]);