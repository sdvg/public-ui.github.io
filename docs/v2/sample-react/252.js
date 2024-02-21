/*! For license information please see 252.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[252],{252:(t,n,e)=>{e.r(n),e.d(n,{kol_accordion:()=>l});var i=e(173),a=e(473),o=e(6304),s=e(5667);(0,a.j)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,a.j)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const l=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,o.n)(),this.catchRef=t=>{(0,a.k)(this.host,t)},this.onClick=t=>{this._open=!this._open,setTimeout((()=>{var n;"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onClick)&&this.state._on.onClick(t,!0===this._open)}))},this._disabled=!1,this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"",_level:1}}render(){return(0,i.h)(i.H,{key:"3ab8adaec7d4f0b9958ed3c2694a6e2001a5775d"},(0,i.h)("div",{key:"f55779b5c6fde69de6510614742d1a2ade7d8225",class:{accordion:!0,disabled:!0===this.state._disabled,open:!0===this.state._open}},(0,i.h)("kol-heading-wc",{key:"e7625190a24a0d4a0faa99ae41ac2fcb8ca313cb",_label:"",_level:this.state._level,class:"accordion-heading"},(0,i.h)("kol-button-wc",{key:"f0cd4bbd5a68ddbbf77d8d7de42dd609f8e63524",class:"accordion-button",ref:this.catchRef,slot:"expert",_ariaControls:this.nonce,_ariaExpanded:this.state._open,_disabled:this.state._disabled,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),(0,i.h)("div",{key:"c43fb947876253f1d6d0abf27bb11513f193a4bf",class:"wrapper"},(0,i.h)("div",{key:"80440135831c357d57bcd909fc4f89243fd1a9c2",class:"animation-wrapper"},(0,i.h)("div",{key:"ce90b614d3c0b50297c28aa4408fe49f87aa108b","aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},(0,i.h)("slot",{key:"f9b15c4efd666d4799f9a2b51b18ec2479d38540"}))))))}validateDisabled(t){(0,a.l)(this,t)}validateLabel(t){(0,a.v)(this,t,{required:!0})}validateLevel(t){(0,s.w)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&"function"==typeof t.onClick&&(0,a.m)(this,"_on",t)}validateOpen(t){(0,a.n)(this,t)}componentWillLoad(){this.validateDisabled(this._disabled),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}get host(){return(0,i.g)(this)}static get watchers(){return{_disabled:["validateDisabled"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};l.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\n\t/* This is the text label. */\n\t.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\n\t.disabled label,\n\t[aria-disabled='true'],\n\t[disabled] {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t\toutline: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\t/* For animation technique see https://css-tricks.com/css-grid-can-do-auto-height-transitions/ */\n\t.wrapper {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 0fr;\n\t\toverflow: hidden;\n\t\ttransition: grid-template-rows 0.3s;\n\t}\n\n\t.accordion.open .wrapper {\n\t\tgrid-template-rows: 1fr;\n\t}\n\n\t.animation-wrapper {\n\t\tmin-height: 0;\n\t\ttransition: visibility 0.3s;\n\t\t/* This property is important to keep in sync with the visual transition (template-rows). Without it interactive elements within the accordion would stay focusable. */\n\t\tvisibility: hidden;\n\t}\n\n\t.accordion.open .animation-wrapper {\n\t\tvisibility: visible;\n\t}\n\n\t@media (prefers-reduced-motion) {\n\t\t.animation-wrapper,\n\t\t.wrapper {\n\t\t\ttransition-duration: 0s;\n\t\t}\n\t}\n\n\t/* @see https://github.com/public-ui/kolibri/issues/5952 */\n\t@media print {\n\t\t.accordion:not(.open) .animation-wrapper {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t/*\n * Inside a button, the caption text is always centered.\n * So we have to align the text to the left.\n */\n\t.accordion kol-heading-wc kol-button-wc button kol-span-wc {\n\t\tjustify-items: start;\n\t}\n}\n"}},5667:(t,n,e)=>{e.d(n,{w:()=>a});var i=e(473);const a=(t,n)=>{(0,i.w)(t,"_level",(t=>"number"==typeof t&&i.o.includes(t)),new Set([`Number {${i.o.join(", ")}`]),n,{defaultValue:1,required:!0})}}}]);