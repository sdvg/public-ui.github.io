/*! For license information please see kol-button-link.entry.js.LICENSE.txt */ import{r as i,h as t,H as e,g as n}from"./index-330c31f9.js";import{a as s}from"./reuse-c2156413.js";const o=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:inline-block}:is(a,button){align-items:baseline;display:inline-flex;place-items:center;text-align:left;text-decoration-line:underline}:is(a,button):is(:focus,:hover){text-decoration-thickness:0.2em}.hidden{display:none;visibility:hidden}.skip{left:-99999px;overflow:hidden;position:absolute;z-index:9999999;line-height:1em}.skip:focus{background-color:#fff;left:unset;padding:1em;position:unset}kol-icon.external-link-icon{display:inline-flex}",a=class{constructor(t){i(this,t),this.catchRef=i=>{this.ref=i,s(this.host,this.ref)},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0}render(){return t(e,null,t("kol-button-wc",{ref:this.catchRef,_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_icon:this._icon,_hideLabel:this._hideLabel||this._iconOnly,_id:this._id,_label:this._label,_on:this._on,_role:"link",_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value},t("slot",{name:"expert",slot:"expert"})))}get host(){return n(this)}};a.style={default:o};export{a as kol_button_link};