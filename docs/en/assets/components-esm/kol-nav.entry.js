/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-40be4caf.js";import{t as translate}from"./i18n-a7081f2c.js";import{r as removeNavLabel,a as addNavLabel}from"./unique-nav-labels-62d9802d.js";import{w as watchNavLinks}from"./validation-d30fdb06.js";import{m as KolLinkWcTag,c as KolButtonWcTag,n as KolButtonTag}from"./component-names-791b1799.js";import{b as watchBoolean,l as devWarning,e as a11yHintLabelingLandmarks,j as devHint,w as watchValidator}from"./prop.validators-28badc7d.js";import{v as validateHideLabel}from"./hide-label-80a2c6d3.js";import{v as validateLabel}from"./label-af70fdc5.js";import"./i18n-9eed57c7.js";import"./reuse-b66836de.js";import"./index-4a3076fc.js";import"./dev.utils-1ca991a2.js";const validateCollapsible=(e,n)=>{watchBoolean(e,"_collapsible",n)},validateHasCompactButton=(e,n)=>{watchBoolean(e,"_hasCompactButton",n)},validateHasIconsWhenExpanded=(e,n)=>{watchBoolean(e,"_hasIconsWhenExpanded",n)},defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n :host > div {\n display: grid;\n place-items: center;\n }\n :not(.is-compact) nav {\n width: 100%;\n }\n .list {\n display: flex;\n list-style: none;\n margin: 0;\n padding: 0;\n }\n .list.vertical {\n flex-direction: column;\n }\n .entry {\n display: flex;\n }\n .entry-item {\n flex-grow: 1;\n }\n}",KolNavDefaultStyle0=defaultStyleCss,entryIsLink=e=>"string"==typeof e._href,entryIsButton=e=>{var n;return void 0===e._href&&"function"==typeof(null===(n=e._on)||void 0===n?void 0:n.onClick)},KolNav=class{constructor(e){registerInstance(this,e),this.handleToggleExpansionClick=e=>{e&&(this.state._expandedChildren.includes(e)?this.collapseChildren(e):this.expandChildren(e))},this.linkList=e=>h("ul",{class:"list "+(0===e.deep&&"horizontal"===e.orientation?" horizontal":" vertical"),"data-deep":e.deep},e.links.map(((n,t)=>this.li(e.collapsible,e.hideLabel,e.deep,t,n,e.orientation)))),this._collapsible=!0,this._hasCompactButton=!1,this._hasIconsWhenExpanded=!1,this._hideLabel=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_collapsible:!0,_hasCompactButton:!1,_hasIconsWhenExpanded:!1,_hideLabel:!1,_label:"",_links:[],_orientation:"vertical",_expandedChildren:[]}}expandChildren(e){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:[...this.state._expandedChildren,e]})}collapseChildren(e){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:this.state._expandedChildren.filter((n=>n!=e))})}entry(e,n,t,a,i){const l=this.state._hasIconsWhenExpanded||this.state._hideLabel?a._icons||(this.state._hideLabel?"codicon codicon-symbol-method":void 0):void 0;return h("div",{class:{entry:!0,"hide-label":n}},entryIsLink(a)?h(KolLinkWcTag,Object.assign({class:"entry-item"},a,{_hideLabel:n,_icons:l})):h(KolButtonWcTag,{class:"entry-item",_label:a._label,_hideLabel:n,_icons:l,_on:{onClick:(e,n)=>{entryIsButton(a)&&"function"==typeof a._on.onClick?a._on.onClick(e,n):this.handleToggleExpansionClick(a._children)}}}),t?this.expandButton(e,a,i):"")}expandButton(e,n,t){return h(KolButtonWcTag,{class:"expand-button",_ariaExpanded:t,_disabled:!e,_icons:"codicon codicon-"+(t?"remove":"add"),_hideLabel:!0,_label:`${translate(t?"kol-nav-label-close":"kol-nav-label-open",{placeholders:{label:n._label}})}`,_on:{onClick:()=>this.handleToggleExpansionClick(n._children)}})}li(e,n,t,a,i,l){const s=!!i._active,o=Array.isArray(i._children)&&i._children.length>0,d=Boolean(i._children&&this.state._expandedChildren.includes(i._children));return h("li",{class:{active:s,expanded:d,"has-children":o},key:a},this.entry(e,n,o,i,d),d&&h(this.linkList,{collapsible:e,hideLabel:n,deep:t+1,links:i._children||[],orientation:l}))}initializeExpandedChildren(){const e=n=>{if(n._active)return n._children&&this.expandChildren(n._children),!0;if(n._children)for(const t of n._children)if(e(t))return this.expandChildren(n._children),!0;return!1};this.state._links.forEach(e)}render(){let e=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,devWarning("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const n=!0===this.state._collapsible,t=!0===this.state._hideLabel,a=this.state._orientation;return h(Host,{key:"4951b63a418b6fc0123a31a2fb476dde8e21473d",class:"kol-nav"},h("div",{key:"dc600fafad6b24fe459eded63de61813c46d0ac5",class:{nav:!0,[a]:!0,"is-compact":this.state._hideLabel}},h("nav",{key:"d0f33bd11c7983a92255d6ddb8edb406c9e12626","aria-label":this.state._label,id:"nav"},h(this.linkList,{key:"5e495bac9ebb8bb5d61e51a3ebdb75460da152fc",collapsible:n,hideLabel:t,deep:0,links:this.state._links,orientation:a})),e&&h("div",{key:"32542c1fce11f62447a47b258db708798b31dabd",class:"compact"},h(KolButtonTag,{key:"c654ae9be921c674f7dd499c9e4ca282fd2be804",_ariaControls:"nav",_ariaExpanded:!t,_icons:t?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:translate(t?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_hideLabel:!1===this.state._hideLabel})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateCollapsible(e){validateCollapsible(this,e)}validateHasCompactButton(e){validateHasCompactButton(this,e)}validateHasIconsWhenExpanded(e){validateHasIconsWhenExpanded(this,e)}validateHideLabel(e){validateHideLabel(this,e)}validateLabel(e,n,t=!1){t||removeNavLabel(this.state._label),validateLabel(this,e,{required:!0}),a11yHintLabelingLandmarks(e),addNavLabel(this.state._label)}validateLinks(e){watchNavLinks("KolNav",this,e),devHint("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(e){watchValidator(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}componentWillLoad(){this.validateCollapsible(this._collapsible),this.validateHideLabel(this._hideLabel),this.validateHasCompactButton(this._hasCompactButton),this.validateHasIconsWhenExpanded(this._hasIconsWhenExpanded),this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.initializeExpandedChildren()}disconnectedCallback(){removeNavLabel(this.state._label)}static get watchers(){return{_collapsible:["validateCollapsible"],_hasCompactButton:["validateHasCompactButton"],_hasIconsWhenExpanded:["validateHasIconsWhenExpanded"],_hideLabel:["validateHideLabel"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};KolNav.style={default:KolNavDefaultStyle0};export{KolNav as kol_nav};