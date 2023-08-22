/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{v as validateLabel}from"./label-8e3a47aa.js";import{f as featureHint}from"./a11y.tipps-c9af0838.js";import{d as getKoliBri}from"./dev.utils-8129fd91.js";import{w as watchValidator,s as setState,d as watchString}from"./prop.validators-98b8554f.js";import"./reuse-c2156413.js";import"./index-37b5cbcf.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.overlay{background-color:rgba(0, 0, 0, 0.33);display:flex;height:100%;inset:0;position:fixed;width:100%;z-index:100}.modal{margin:auto;max-height:100%;max-width:100%}",KolModal=class{constructor(t){registerInstance(this,t),this.onKeyDown=t=>{t&&"Escape"===t.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._label=void 0,this._on=void 0,this._width="100%",this.state={_activeElement:null,_label:"…",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?getKoliBri().Modal.openModal(this.hostElement,this.state._activeElement):getKoliBri().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&getKoliBri().Modal.closeModal(this.hostElement)}render(){return h(Host,{ref:t=>{this.hostElement=t}},this.state._activeElement&&h("div",{class:"overlay"},h("div",{class:"modal",style:{width:this.state._width},"aria-label":this.state._label,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:t=>{t&&(t.setAttribute("tabindex","0"),setTimeout((()=>t.focus()),250))}},h("slot",null))))}validateActiveElement(t){watchValidator(this,"_activeElement",(t=>"object"==typeof t||null===t),new Set(["HTMLElement","null"]),t,{defaultValue:null})}validateAriaLabel(t){this.validateLabel(t)}validateLabel(t){validateLabel(this,t)}validateOn(t){if("object"==typeof t&&null!==t){featureHint("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),setState(this,"_on",e)}}validateWidth(t){watchString(this,"_width",t,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_on:["validateOn"],_width:["validateWidth"]}}};KolModal.style={default:defaultStyleCss};export{KolModal as kol_modal};