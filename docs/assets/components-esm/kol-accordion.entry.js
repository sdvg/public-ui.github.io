/*! For license information please see kol-accordion.entry.js.LICENSE.txt */ import{r as registerInstance,h,H as Host,g as getElement}from"./index-360ad69b.js";import{n as nonce}from"./dev.utils-eeeb0158.js";import{w as watchHeadingLevel}from"./validation-00baa068.js";import{b as KolHeadingWcTag,c as KolButtonWcTag}from"./component-names-e522484e.js";import{f as featureHint,s as setState}from"./prop.validators-f2b9a155.js";import{a as propagateFocus}from"./reuse-b66836de.js";import{v as validateDisabled}from"./disabled-7ce039e2.js";import{v as validateOpen}from"./open-ef237788.js";import{v as validateLabel}from"./label-452f8c01.js";import"./dev.utils-1ca991a2.js";import"./index-db4aa6e4.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n :host {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n /* For animation technique see https://css-tricks.com/css-grid-can-do-auto-height-transitions/ */\n .wrapper {\n display: grid;\n grid-template-rows: 0fr;\n overflow: hidden;\n transition: grid-template-rows 0.3s;\n }\n .accordion.open .wrapper {\n grid-template-rows: 1fr;\n }\n .animation-wrapper {\n min-height: 0;\n transition: visibility 0.3s;\n /* This property is important to keep in sync with the visual transition (template-rows). Without it interactive elements within the accordion would stay focusable. */\n visibility: hidden;\n }\n .accordion.open .animation-wrapper {\n visibility: visible;\n }\n @media (prefers-reduced-motion) {\n .animation-wrapper,\n .wrapper {\n transition-duration: 0s;\n }\n }\n /* @see https://github.com/public-ui/kolibri/issues/5952 */\n @media print {\n .accordion:not(.open) .animation-wrapper {\n display: none;\n }\n }\n /*\n * Inside a button, the caption text is always centered.\n * So we have to align the text to the left.\n */\n .accordion .kol-heading-wc .kol-button-wc button .kol-span-wc {\n justify-items: start;\n }\n}",KolAccordionDefaultStyle0=defaultStyleCss;featureHint("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion ge\xf6ffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event pr\xfcft den _open-Status der Accordions\n- Logik \xd6ffnet und Schlie\xdft entsprechend"),featureHint("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const KolAccordion=class{constructor(n){registerInstance(this,n),this.nonce=nonce(),this.catchRef=n=>{propagateFocus(this.host,n)},this.onClick=n=>{this._open=!this._open,setTimeout((()=>{var e;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&this.state._on.onClick(n,!0===this._open)}))},this._disabled=!1,this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"",_level:1}}render(){return h(Host,{key:"f1672f2cf8b9aa85b1f63ab68d00300b74638dd8",class:"kol-accordion"},h("div",{key:"e80bb532a6f148e9608b9d5b4eca382cf8c01e8d",class:{accordion:!0,disabled:!0===this.state._disabled,open:!0===this.state._open}},h(KolHeadingWcTag,{key:"e221fc0ccd86504a3e491a8e32c55da5fa76a365",_label:"",_level:this.state._level,class:"accordion-heading"},h(KolButtonWcTag,{key:"f65af86aab71ff029bba8108495477d7be05c2f3",class:"accordion-button",ref:this.catchRef,slot:"expert",_ariaControls:this.nonce,_ariaExpanded:this.state._open,_disabled:this.state._disabled,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),h("div",{key:"5435d015a21707724c7180dbb96e7a0af30f9d42",class:"wrapper"},h("div",{key:"5a9958a91c49d8b807627f7029ad975e52c6e1ea",class:"animation-wrapper"},h("div",{key:"367a024dca25373063df9ec0e679161ad26bffb8","aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},h("slot",{key:"dfbbf47f20297d5f5052d7df8f74bd659ce054fd"}))))))}validateDisabled(n){validateDisabled(this,n)}validateLabel(n){validateLabel(this,n,{required:!0})}validateLevel(n){watchHeadingLevel(this,n)}validateOn(n){"object"==typeof n&&null!==n&&"function"==typeof n.onClick&&setState(this,"_on",n)}validateOpen(n){validateOpen(this,n)}componentWillLoad(){this.validateDisabled(this._disabled),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}get host(){return getElement(this)}static get watchers(){return{_disabled:["validateDisabled"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};KolAccordion.style={default:KolAccordionDefaultStyle0};export{KolAccordion as kol_accordion};