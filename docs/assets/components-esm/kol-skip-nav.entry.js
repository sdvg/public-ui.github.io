/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h}from"./index-0bc40dc4.js";import{v as validateLabel}from"./label-8090b77e.js";import{r as removeNavLabel,a as addNavLabel}from"./unique-nav-labels-c6750f60.js";import{w as watchNavLinks}from"./validation-4f6082a5.js";import"./a11y.tipps-db7fb79f.js";import"./dev.utils-0ab1db26.js";import"./reuse-b3566e4c.js";import"./prop.validators-4ca765d6.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tul {\n\t\tdisplay: grid;\n\t\tlist-style: none;\n\t\tplace-items: center;\n\t}\n\n\tul li {\n\t\theight: 0;\n\t}\n\n\tkol-link-wc a {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t\tline-height: 1em;\n\t}\n\n\tkol-link-wc a:focus {\n\t\tbackground-color: #fff;\n\t\tleft: unset;\n\t\tposition: unset;\n\t}\n}\n",KolSkipNav=class{constructor(t){registerInstance(this,t),this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return h("nav",{"aria-label":this.state._label},h("ul",null,this.state._links.map(((t,n)=>h("li",{key:n},h("kol-link-wc",Object.assign({},t)))))))}validateLabel(t,n,e=!1){e||removeNavLabel(this.state._label),validateLabel(this,t),addNavLabel(this.state._label)}validateLinks(t){watchNavLinks("KolSkipNav",this,t)}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){removeNavLabel(this.state._label)}static get watchers(){return{_label:["validateLabel"],_links:["validateLinks"]}}};KolSkipNav.style={default:defaultStyleCss};export{KolSkipNav as kol_skip_nav};