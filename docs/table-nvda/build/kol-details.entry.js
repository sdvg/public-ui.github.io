/*! * KoliBri - The accessible HTML-Standard */ import{r as t,h as i,H as e}from"./index-330c31f9.js";import{b as o,w as s}from"./prop.validators-0a66a178.js";import"./a11y.tipps-beae7792.js";import"./dev.utils-5b0de6da.js";import"./reuse-c2156413.js";import"./index-3711603c.js";const a=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}details{display:grid}details>summary{cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:grey;border-bottom-style:solid}details>summary:focus>span,details>summary:hover>span,details[open]>summary>span{border-bottom-color:#000}details>kol-indented-text{margin:0.25em 0 0 0.5em}@keyframes details-show{to{opacity:1;scale:1}}.content{opacity:0;scale:1 0;transform-origin:top}details[open]>.content{animation:250ms ease-in-out forwards details-show}";const n=class{constructor(i){t(this,i);this.onClick=()=>{setTimeout((()=>{var t;this._open=(t=this.htmlDetailsElement)===null||t===void 0?void 0:t.open}),25)};this._open=false;this._summary=undefined;this.state={_summary:"…"}}render(){return i(e,null,i("details",{ref:t=>{this.htmlDetailsElement=t},open:this.state._open},i("summary",{onClick:this.onClick},this.state._open?i("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-down"}):i("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-right"}),i("span",null,this.state._summary)),i("div",{class:"content"},i("kol-indented-text",null,i("slot",null)))))}validateOpen(t){o(this,"_open",t)}validateSummary(t){s(this,"_summary",t,{required:true})}componentWillLoad(){this.validateOpen(this._open);this.validateSummary(this._summary)}static get watchers(){return{_open:["validateOpen"],_summary:["validateSummary"]}}};n.style={default:a};export{n as kol_details}; //# sourceMappingURL=kol-details.entry.js.map