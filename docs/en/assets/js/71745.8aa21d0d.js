/*! For license information please see 71745.8aa21d0d.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[71745],{71745:(t,n,e)=>{e.r(n),e.d(n,{kol_breadcrumb:()=>r});var i=e(37210),l=e(58169),a=e(25528),o=e(37375),s=e(37977);const r=class{constructor(t){(0,i.r)(this,t),this.renderLink=(t,n)=>{const e=this.state._links.length-1;return(0,i.h)("li",{key:n},0!==n&&(0,i.h)("kol-icon",{_label:"",_icons:"codicon codicon-chevron-right"}),n===e?(0,i.h)("span",null,t._hideLabel?(0,i.h)("kol-icon",{_label:t._label,_icons:"string"==typeof t._icons?t._icons:"codicon codicon-symbol-event"}):(0,i.h)(i.F,null,t._label)):(0,i.h)("kol-link",Object.assign({},t)))},this._label=void 0,this._links=void 0,this.state={_label:"\u2026",_links:[]}}render(){return(0,i.h)(i.H,null,(0,i.h)("nav",{"aria-label":this.state._label},(0,i.h)("ul",null,0===this.state._links.length&&(0,i.h)("li",null,(0,i.h)("kol-icon",{_label:"",_icons:"codicon codicon-home"}),"\u2026"),this.state._links.map(this.renderLink))))}validateLabel(t,n,e=!1){e||(0,o.r)(this.state._label),(0,l.v)(this,t),(0,a.b)(t),(0,o.a)(this.state._label)}validateLinks(t){(0,s.w)("KolBreadcrumb",this,t)}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){(0,o.r)(this.state._label)}static get watchers(){return{_label:["validateLabel"],_links:["validateLinks"]}}};r.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tli,\n\tul {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tflex-wrap: wrap;\n\t\tplace-items: center;\n\t}\n\n\tkol-icon::part(separator) {\n\t\tfont-weight: 900;\n\t\tfont-size: 0.7em;\n\t}\n\n\tkol-icon::part(separator):before {\n\t\tcontent: '\\f054';\n\t\tfont-family: 'Font Awesome 6 Free';\n\t}\n}\n"}},58169:(t,n,e)=>{e.d(n,{a:()=>c,c:()=>r,h:()=>s,v:()=>d});var i=e(25528),l=e(50888);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,o=/^\d+$/;function s(t,n=1){return function(t){var n;return"string"==typeof t&&(null===(n=t.match(a))||void 0===n?void 0:n.length)||0}(t)>=n}function r(t){return o.test(t)}const h=new Set(["string"]),d=(t,n,e={})=>{(0,l.w)(t,"_label",(t=>"string"==typeof t),h,n,function(t){var n;return{hooks:{afterPatch:(n,e,l,a)=>{var o,h;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(n,e,l,a)),"string"==typeof n&&!1===s(n,3)&&!1===r(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=t.hooks)||void 0===n?void 0:n.beforePatch}}}(e))},c=d},37375:(t,n,e)=>{e.d(n,{a:()=>l,r:()=>a});const i=new Set;function l(t){i.has(t)?console.error(`There already is a nav element with the label "${t}"`):i.add(t)}function a(t){i.delete(t)}},37977:(t,n,e)=>{e.d(n,{w:()=>a});var i=e(25528),l=e(50888);const a=(t,n,e)=>{(0,l.c)(n,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),e),(0,i.c)(t,n.state._links.length)}}}]);