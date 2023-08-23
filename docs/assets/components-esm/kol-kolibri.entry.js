/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{a as translate}from"./i18n-45aa3c6d.js";import{c as colorRgba,v as validateColor}from"./color-e03668b8.js";import{d as devHint}from"./a11y.tipps-3205ae7d.js";import{a as watchBoolean}from"./prop.validators-fba03cca.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";import"./dev.utils-c0c1c4e5.js";import"./reuse-c2156413.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}text{font-size:90px;letter-spacing:normal;word-spacing:normal}",max=360;function degreeToRadians(t){return t*Math.PI/180}function getColorNumber(t){return Math.round((Math.cos(degreeToRadians(t))+1)/2*225)}const KolKolibri=class{constructor(t){registerInstance(this,t),this.handleColorChange=(t,e)=>{if("string"==typeof t){const a=colorRgba(t);e.set("_color",{red:a[0],green:a[1],blue:a[2]})}else devHint("[KolKolibri] You used the complex color schema. For the KoliBri we use need the color as hex string.")},this._animate=void 0,this._color="#003c78",this._labeled=void 0,this.state={_animate:!1,_color:{red:0,green:60,blue:120},_labeled:!0}}render(){const t=!0===this.state._animate?`rgb(${getColorNumber(this.state._color.red)},${getColorNumber(this.state._color.green)},${getColorNumber(this.state._color.blue)})`:`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return h(Host,null,h("svg",{role:"img","aria-label":translate("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:t},h("path",{d:"M353 322L213 304V434L353 322Z"}),h("path",{d:"M209 564V304L149 434L209 564Z"}),h("path",{d:"M357 316L417 250L361 210L275 244L357 316Z"}),h("path",{d:"M329 218L237 92L250 222L272 241L329 218Z"}),h("path",{d:"M353 318L35 36L213 300L353 318Z"}),h("path",{d:"M391 286L565 272L421 252L391 286Z"}),!0===this.state._labeled&&h("text",{x:"250",y:"525",fill:t},"KoliBri")))}validateAnimate(t){watchBoolean(this,"_animate",t)}validateColor(t){validateColor(this,t,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(t){watchBoolean(this,"_labeled",t)}componentWillLoad(){this.validateAnimate(this._animate),this.validateColor(this._color),this.validateLabeled(this._labeled)}componentDidRender(){clearInterval(this.interval),this.state._animate&&(this.interval=setInterval((()=>{this.state=Object.assign(Object.assign({},this.state),{_color:{red:(this.state._color.red+1)%360,green:(this.state._color.green+2)%360,blue:(this.state._color.blue+3)%360}})}),50))}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_animate:["validateAnimate"],_color:["validateColor"],_labeled:["validateLabeled"]}}};KolKolibri.style={default:defaultStyleCss};export{KolKolibri as kol_kolibri};