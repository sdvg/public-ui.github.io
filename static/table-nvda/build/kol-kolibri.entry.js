/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as t,h as e,H as i}from"./index-330c31f9.js";import{a as o}from"./i18n-931157b2.js";import{c as a,v as s}from"./color-fcb559a6.js";import{d as r}from"./a11y.tipps-beae7792.js";import{b as n}from"./prop.validators-0a66a178.js";import"./index-fc511254.js";import"./index-3711603c.js";import"./dev.utils-5b0de6da.js";import"./reuse-c2156413.js";const l=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}text{font-size:90px;letter-spacing:normal;word-spacing:normal}";const h=360;function d(t){return t*Math.PI/180}function c(t){return Math.round((Math.cos(d(t))+1)/2*225)}const p=class{constructor(e){t(this,e);this.handleColorChange=(t,e)=>{if(typeof t==="string"){const i=a(t);e.set("_color",{red:i[0],green:i[1],blue:i[2]})}else{r(`[KolKolibri] You used the complex color schema. For the KoliBri we use need the color as hex string.`)}};this._animate=undefined;this._color="#003c78";this._labeled=undefined;this.state={_animate:false,_color:{red:0,green:60,blue:120},_labeled:true}}render(){const t=this.state._animate===true?`rgb(${c(this.state._color.red)},${c(this.state._color.green)},${c(this.state._color.blue)})`:`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return e(i,null,e("svg",{role:"img","aria-label":o("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:t},e("path",{d:"M353 322L213 304V434L353 322Z"}),e("path",{d:"M209 564V304L149 434L209 564Z"}),e("path",{d:"M357 316L417 250L361 210L275 244L357 316Z"}),e("path",{d:"M329 218L237 92L250 222L272 241L329 218Z"}),e("path",{d:"M353 318L35 36L213 300L353 318Z"}),e("path",{d:"M391 286L565 272L421 252L391 286Z"}),this.state._labeled===true&&e("text",{x:"250",y:"525",fill:t},"KoliBri")))}validateAnimate(t){n(this,"_animate",t)}validateColor(t){s(this,t,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(t){n(this,"_labeled",t)}componentWillLoad(){this.validateAnimate(this._animate);this.validateColor(this._color);this.validateLabeled(this._labeled)}componentDidRender(){clearInterval(this.interval);if(this.state._animate){this.interval=setInterval((()=>{this.state=Object.assign(Object.assign({},this.state),{_color:{red:(this.state._color.red+1)%h,green:(this.state._color.green+2)%h,blue:(this.state._color.blue+3)%h}})}),50)}}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_animate:["validateAnimate"],_color:["validateColor"],_labeled:["validateLabeled"]}}};p.style={default:l};export{p as kol_kolibri};
//# sourceMappingURL=kol-kolibri.entry.js.map