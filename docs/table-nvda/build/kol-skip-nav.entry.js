/*! * KoliBri - The accessible HTML-Standard */ import{r as i,h as t}from"./index-330c31f9.js";import{v as e}from"./label-8d64163d.js";import{w as n}from"./validation-78ce9756.js";import"./a11y.tipps-beae7792.js";import"./dev.utils-5b0de6da.js";import"./reuse-c2156413.js";import"./prop.validators-0a66a178.js";import"./index-3711603c.js";const a=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{display:grid;list-style:none;place-items:center}ul li{height:0}kol-link-wc a{left:-99999px;overflow:hidden;position:absolute;z-index:9999999;line-height:1em}kol-link-wc a:focus{background-color:#fff;left:unset;position:unset}";const s=class{constructor(t){i(this,t);this._ariaLabel=undefined;this._label=undefined;this._links=undefined;this.state={_label:"…",_links:[]}}render(){return t("nav",{"aria-label":this.state._label},t("ul",null,this.state._links.map(((i,e)=>t("li",{key:e},t("kol-link-wc",Object.assign({},i)))))))}validateAriaLabel(i){this.validateLabel(i)}validateLabel(i){e(this,i)}validateLinks(i){n("KolSkipNav",this,i)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel);this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};s.style={default:a};export{s as kol_skip_nav}; //# sourceMappingURL=kol-skip-nav.entry.js.map