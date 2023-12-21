/*! For license information please see 43252.a3212226.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[43252],{43252:(t,n,e)=>{e.r(n),e.d(n,{kol_link:()=>s});var i=e(26231),o=e(8868);const s=class{constructor(t){(0,i.r)(this,t),this.catchRef=t=>{(0,o.a)(this.host,t)},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription="Der Link wird in einem neuen Tab ge\xf6ffnet.",this._tooltipAlign="right"}render(){return(0,i.h)(i.H,null,(0,i.h)("kol-link-wc",{ref:this.catchRef,_accessKey:this._accessKey,_ariaCurrentValue:this._ariaCurrentValue,_download:this._download,_hideLabel:this._hideLabel,_href:this._href,_icons:this._icons,_label:this._label,_on:this._on,_role:this._role,_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},(0,i.h)("slot",{name:"expert",slot:"expert"})))}get host(){return(0,i.g)(this)}};s.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: inline-block;\n\t}\n\n\t:is(a, button) {\n\t\talign-items: baseline;\n\t\tdisplay: inline-flex;\n\t\tplace-items: center;\n\t\ttext-align: left;\n\t\ttext-decoration-line: underline;\n\t}\n\n\t:is(a, button):is(:focus, :hover) {\n\t\ttext-decoration-thickness: 0.2em;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\n\t.skip {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t\tline-height: 1em;\n\t}\n\n\t.skip:focus {\n\t\tbackground-color: #fff;\n\t\tleft: unset;\n\t\tpadding: 1em;\n\t\tposition: unset;\n\t}\n\n\tkol-icon.external-link-icon {\n\t\tdisplay: inline-flex;\n\t}\n}\n\n"}}}]);