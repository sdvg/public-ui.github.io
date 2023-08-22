/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h}from"./index-5ab2ea42.js";import{v as validateLabel}from"./label-8e3a47aa.js";import{w as watchNavLinks}from"./validation-bd2dfadc.js";import"./a11y.tipps-c9af0838.js";import"./dev.utils-8129fd91.js";import"./reuse-c2156413.js";import"./prop.validators-98b8554f.js";import"./index-37b5cbcf.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{display:grid;list-style:none;place-items:center}ul li{height:0}kol-link-wc a{left:-99999px;overflow:hidden;position:absolute;z-index:9999999;line-height:1em}kol-link-wc a:focus{background-color:#fff;left:unset;position:unset}",KolSkipNav=class{constructor(i){registerInstance(this,i),this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return h("nav",{"aria-label":this.state._label},h("ul",null,this.state._links.map(((i,a)=>h("li",{key:a},h("kol-link-wc",Object.assign({},i)))))))}validateAriaLabel(i){this.validateLabel(i)}validateLabel(i){validateLabel(this,i)}validateLinks(i){watchNavLinks("KolSkipNav",this,i)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};KolSkipNav.style={default:defaultStyleCss};export{KolSkipNav as kol_skip_nav};