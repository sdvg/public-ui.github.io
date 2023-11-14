/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host,g as getElement}from"./index-0bc40dc4.js";import{v as validateLabel}from"./label-8090b77e.js";import{v as validateOpen}from"./open-79862e90.js";import{f as featureHint}from"./a11y.tipps-db7fb79f.js";import{n as nonce}from"./dev.utils-0ab1db26.js";import{s as setState}from"./prop.validators-4ca765d6.js";import{a as propagateFocus}from"./reuse-b3566e4c.js";import{w as watchHeadingLevel}from"./validation-24372ccc.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\t/* For animation technique see https://css-tricks.com/css-grid-can-do-auto-height-transitions/ */\n\t.wrapper {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 0fr;\n\t\toverflow: hidden;\n\t\ttransition: grid-template-rows 0.3s;\n\t}\n\n\t.accordion.open .wrapper {\n\t\tgrid-template-rows: 1fr;\n\t}\n\n\t.animation-wrapper {\n\t\tmin-height: 0;\n\t\ttransition: visibility 0.3s;\n\t\t/* This property is important to keep in sync with the visual transition (template-rows). Without it interactive elements within the accordion would stay focusable. */\n\t\tvisibility: hidden;\n\t}\n\n\t.accordion.open .animation-wrapper {\n\t\tvisibility: visible;\n\t}\n\n\t@media (prefers-reduced-motion) {\n\t\t.animation-wrapper,\n\t\t.wrapper {\n\t\t\ttransition-duration: 0s;\n\t\t}\n\t} /*\n * Inside a button, the caption text is always centered.\n * So we have to align the text to the left.\n */\n\t.accordion kol-heading-wc kol-button-wc button kol-span-wc {\n\t\tjustify-items: start;\n\t}\n}\n";featureHint("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),featureHint("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const KolAccordion=class{constructor(t){registerInstance(this,t),this.nonce=nonce(),this.catchRef=t=>{propagateFocus(this.host,t)},this.onClick=t=>{this._open=!this._open,setTimeout((()=>{var n;"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onClick)&&this.state._on.onClick(t,!0===this._open)}))},this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"…",_level:1}}render(){return h(Host,null,h("div",{class:{accordion:!0,open:!0===this.state._open}},h("kol-heading-wc",{_label:"",_level:this.state._level},h("kol-button-wc",{ref:this.catchRef,slot:"expert",_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),h("div",{class:"wrapper"},h("div",{class:"animation-wrapper"},h("div",{"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},h("slot",null))))))}validateLabel(t){validateLabel(this,t)}validateLevel(t){watchHeadingLevel(this,t)}validateOn(t){"object"==typeof t&&null!==t&&"function"==typeof t.onClick&&setState(this,"_on",t)}validateOpen(t){validateOpen(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}get host(){return getElement(this)}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};KolAccordion.style={default:defaultStyleCss};export{KolAccordion as kol_accordion};