/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-d0c806ea.js";import{v as validateLabel}from"./label-c130b72e.js";import{v as validateOpen}from"./open-fac63e17.js";import{f as featureHint}from"./a11y.tipps-348ca42a.js";import{n as nonce}from"./dev.utils-9b878520.js";import{s as setState}from"./prop.validators-e40c3380.js";import{w as watchHeadingLevel}from"./validation-36d55135.js";import"./reuse-b3566e4c.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}.wrapper{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 0.3s}.accordion.open .wrapper{grid-template-rows:1fr}.animation-wrapper{min-height:0;transition:visibility 0.3s;visibility:hidden}.accordion.open .animation-wrapper{visibility:visible}@media (prefers-reduced-motion){.animation-wrapper,.wrapper{transition-duration:0s}}.accordion kol-heading-wc kol-button-wc button kol-span-wc{justify-items:start}";featureHint("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),featureHint("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const KolAccordion=class{constructor(e){registerInstance(this,e),this.nonce=nonce(),this.onClick=e=>{this._open=!this._open,setTimeout((()=>{var t;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"…",_level:1}}render(){return h(Host,null,h("div",{class:{accordion:!0,open:!0===this.state._open}},h("kol-heading-wc",{_label:"",_level:this.state._level},h("kol-button-wc",{_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),h("div",{class:"wrapper"},h("div",{class:"animation-wrapper"},h("div",{"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},h("slot",null))))))}validateLabel(e){validateLabel(this,e)}validateLevel(e){watchHeadingLevel(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&setState(this,"_on",e)}validateOpen(e){validateOpen(this,e)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};KolAccordion.style={default:defaultStyleCss};export{KolAccordion as kol_accordion};