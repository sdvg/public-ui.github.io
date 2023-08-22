/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{h as handleColorChange,v as validateColor}from"./color-35cf63a9.js";import{f as featureHint}from"./a11y.tipps-c9af0838.js";import{n as nonce}from"./dev.utils-8129fd91.js";import{o as objectObjectHandler,p as parseJson,s as setState}from"./prop.validators-98b8554f.js";import"./reuse-c2156413.js";import"./index-37b5cbcf.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>span{display:inline-flex;place-items:center}:host>span>kol-button-wc button{color:inherit}";featureHint("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const KolBadge=class{constructor(t){registerInstance(this,t),this.bgColorStr="#000",this.colorStr="#fff",this.id=nonce(),this.handleColorChange=t=>{const o=handleColorChange(t);this.bgColorStr=o.backgroundColor,this.colorStr=o.foregroundColor},this._color="#000",this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"}}}renderSmartButton(t){return h("kol-button-wc",{_ariaControls:this.id,_customClass:t._customClass,_disabled:t._disabled,_hideLabel:!0,_icon:t._icon,_id:t._id,_label:t._label,_on:t._on,_tooltipAlign:t._tooltipAlign,_variant:t._variant})}render(){const t="object"==typeof this.state._smartButton&&null!==this.state._smartButton;return h(Host,null,h("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},h("kol-span-wc",{id:t?this.id:void 0,_hideLabel:this._hideLabel||this._iconOnly,_icon:this._icon,_label:this._label}),t&&this.renderSmartButton(this.state._smartButton)))}validateColor(t){validateColor(this,t,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateSmartButton(t){objectObjectHandler(t,(()=>{try{t=parseJson(t)}catch(t){}setState(this,"_smartButton",t)}))}componentWillLoad(){this.validateColor(this._color),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_smartButton:["validateSmartButton"]}}};KolBadge.style={default:defaultStyleCss};export{KolBadge as kol_badge};