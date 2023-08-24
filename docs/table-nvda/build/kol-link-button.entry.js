/*! * KoliBri - The accessible HTML-Standard */ import{r as t,h as i,H as e,g as n}from"./index-330c31f9.js";import{a as s}from"./i18n-931157b2.js";import{a as o}from"./reuse-c2156413.js";import"./index-fc511254.js";import"./index-3711603c.js";import"./a11y.tipps-beae7792.js";import"./dev.utils-5b0de6da.js";const a=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:inline-block}:is(a,button){display:inline-flex;place-items:center;text-align:center;text-decoration-line:none}:is(a,button)>kol-span-wc{margin:auto;width:100%}:is(button):disabled{cursor:not-allowed;opacity:0.5}";const r=class{constructor(i){t(this,i);this.catchRef=t=>{this.ref=t;o(this.host,this.ref)};this._ariaControls=undefined;this._ariaCurrent=undefined;this._ariaExpanded=undefined;this._ariaLabel=undefined;this._ariaSelected=undefined;this._customClass=undefined;this._disabled=false;this._download=false;this._hideLabel=false;this._href=undefined;this._icon=undefined;this._iconOnly=undefined;this._label=undefined;this._on=undefined;this._role=undefined;this._tabIndex=undefined;this._target=undefined;this._targetDescription=s("kol-open-link-in-tab");this._tooltipAlign="right";this._variant="normal"}render(){return i(e,null,i("kol-link-wc",{ref:this.catchRef,class:{button:true,[this._variant]:this._variant!=="custom",[this._customClass]:this._variant==="custom"&&typeof this._customClass==="string"&&this._customClass.length>0},_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_download:this._download,_hideLabel:this._hideLabel,_href:this._href,_icon:this._icon,_label:this._label,_on:this._on,_role:"button",_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},i("slot",{name:"expert",slot:"expert"})))}get host(){return n(this)}};r.style={default:a};export{r as kol_link_button}; //# sourceMappingURL=kol-link-button.entry.js.map