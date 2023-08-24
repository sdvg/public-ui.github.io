/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host,F as Fragment}from"./index-5ab2ea42.js";import{a as translate}from"./i18n-45aa3c6d.js";import{w as watchValidator}from"./prop.validators-fba03cca.js";import{v as validateShow}from"./show-7c8e9658.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";import"./a11y.tipps-3205ae7d.js";import"./dev.utils-c0c1c4e5.js";import"./reuse-c2156413.js";const validateSpinVariant=(i,t)=>{watchValidator(i,"_variant",(i=>"cycle"===i||"dot"===i||"none"===i),new Set(["cycle","dot","none"]),t)},defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.spin.cycle{width:3rem;height:3rem}.spin.cycle>.loader{display:block;width:100%;height:100%;border-radius:50%;position:relative;animation:2s linear infinite rotate}.spin.cycle>.loader::before{content:'';box-sizing:border-box;position:absolute;inset:0px;border-radius:50%;border:5px solid #333;animation:3s linear infinite prixClipFix}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes prixClipFix{0%{border-color:#fff;clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}25%{border-color:#666;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}50%{border-color:#fc0;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}75%{border-color:red;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}100%{border-color:#000;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}}@media (prefers-reduced-motion){.spin.cycle>.loader{animation-duration:4s}.spin.cycle>.loader::before{animation-duration:6s}}.spin.dot{height:1rem;width:3rem}.spin.dot>span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border-radius:50%;border:0.1rem solid #fff;height:0.8rem;position:absolute;top:0.1rem;width:0.8rem}.spin.dot>span:first-child{background-color:#fc0;z-index:0;animation:1s infinite spin1;left:0.1rem}.spin.dot>span:nth-child(2){background-color:red;z-index:1;animation:1s infinite spin2;left:0.1rem}.spin.dot>span:nth-child(3){background-color:#000;z-index:1;animation:1s infinite spin2;left:1.1rem}.spin.dot>span:nth-child(4){background-color:#666;z-index:0;animation:1s infinite spin3;left:2.1rem}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(1rem, 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}@media (prefers-reduced-motion){.spin.dot>span:first-child,.spin.dot>span:nth-child(2),.spin.dot>span:nth-child(3),.spin.dot>span:nth-child(4){animation-duration:2s}}.spin{display:block;padding:0.125rem;position:relative}";function renderSpin(i){switch(i){case"cycle":return h("span",{class:"loader"});case"none":return h("slot",{name:"expert"});default:return h(Fragment,null,h("span",{class:"bg-spin-1"}),h("span",{class:"bg-spin-2"}),h("span",{class:"bg-spin-3"}),h("span",{class:"bg-neutral"}))}}const KolSpin=class{constructor(i){registerInstance(this,i),this.showToggled=!1,this._show=!1,this._variant="dot",this.state={_variant:"dot"}}render(){return h(Host,null,this.state._show?h("span",{"aria-busy":"true","aria-label":translate("kol-action-running"),"aria-live":"polite",class:{spin:!0,[this.state._variant]:!0},role:"alert"},renderSpin(this.state._variant)):this.showToggled&&h("span",{"aria-label":translate("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(i){this.showToggled=!0===this.state._show&&!1===this._show,validateShow(this,i)}validateVariant(i){validateSpinVariant(this,i)}componentWillLoad(){this.validateShow(this._show),this.validateVariant(this._variant)}static get watchers(){return{_show:["validateShow"],_variant:["validateVariant"]}}};KolSpin.style={default:defaultStyleCss};export{KolSpin as kol_spin};