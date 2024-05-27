/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-40be4caf.js";import{c as colorRgba,v as validateColor}from"./color-7b8f14f1.js";import{t as translate}from"./i18n-a7081f2c.js";import{j as devHint,b as watchBoolean}from"./prop.validators-28badc7d.js";import"./i18n-9eed57c7.js";import"./reuse-b66836de.js";import"./index-4a3076fc.js";import"./dev.utils-1ca991a2.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: inline-block;\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n text {\n font-size: 90px;\n letter-spacing: normal;\n word-spacing: normal;\n }\n svg {\n max-height: 100%;\n }\n}",KolKolibriDefaultStyle0=defaultStyleCss,KolKolibri=class{constructor(e){registerInstance(this,e),this.handleColorChange=(e,n)=>{if("string"==typeof e){const t=colorRgba(e);n.set("_color",{red:t[0],green:t[1],blue:t[2]})}else devHint("[KolKolibri] You used the complex color schema. For the KoliBri we use need the color as hex string.")},this._color="#003c78",this._labeled=!0,this.state={_color:{red:0,green:60,blue:120},_labeled:!0}}render(){const e=`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return h(Host,{key:"5fa07f54481e954f3ada11dde5d42b88350932d0",class:"kol-kolibri"},h("svg",{key:"84d3c6b420079d3a8d26bc0eb6a33f5b09471ec6",role:"img","aria-label":translate("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:e},h("path",{key:"e64b0df6ca04f01f4b428f04f665bc73fc984f24",d:"M353 322L213 304V434L353 322Z"}),h("path",{key:"eab9abfd4ff3d50bbd87fbdbf5386be5f7918eb1",d:"M209 564V304L149 434L209 564Z"}),h("path",{key:"bf7dbd997df13f831cd93c0bd74203ad58a400c6",d:"M357 316L417 250L361 210L275 244L357 316Z"}),h("path",{key:"b92bc28b3225115e6167ccd64d536c6503516c43",d:"M329 218L237 92L250 222L272 241L329 218Z"}),h("path",{key:"4c5eadac3cf237a08d978bd47275a98b75bee325",d:"M353 318L35 36L213 300L353 318Z"}),h("path",{key:"0affb05d6011a26a8323c3e45bd40abdbd1cc5af",d:"M391 286L565 272L421 252L391 286Z"}),!0===this.state._labeled&&h("text",{key:"08b76cb8e49176c705da4f2f3b0e0c7ba7110f97",x:"250",y:"525",fill:e},"KoliBri")))}validateColor(e){validateColor(this,e,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(e){watchBoolean(this,"_labeled",e,{defaultValue:!0})}componentWillLoad(){this.validateColor(this._color),this.validateLabeled(this._labeled)}static get watchers(){return{_color:["validateColor"],_labeled:["validateLabeled"]}}};KolKolibri.style={default:KolKolibriDefaultStyle0};export{KolKolibri as kol_kolibri};