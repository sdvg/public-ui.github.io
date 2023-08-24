/*! * KoliBri - The accessible HTML-Standard */ import{r as t,h as i,H as n,g as e}from"./index-330c31f9.js";import{a as s}from"./reuse-c2156413.js";const o=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:inline-block}:is(a,button){display:inline-flex;place-items:center;text-align:center;text-decoration-line:none}:is(a,button)>kol-span-wc{margin:auto;width:100%}:is(button):disabled{cursor:not-allowed;opacity:0.5}";const a=class{constructor(i){t(this,i);this.catchRef=t=>{this.ref=t;s(this.host,this.ref)};this._accessKey=undefined;this._ariaControls=undefined;this._ariaCurrent=undefined;this._ariaExpanded=undefined;this._ariaLabel=undefined;this._ariaSelected=undefined;this._customClass=undefined;this._disabled=false;this._hideLabel=false;this._icon=undefined;this._iconAlign=undefined;this._iconOnly=undefined;this._id=undefined;this._label=undefined;this._on=undefined;this._role=undefined;this._tabIndex=undefined;this._tooltipAlign="top";this._type="button";this._value=undefined;this._variant="normal"}render(){return i(n,null,i("kol-button-wc",{ref:this.catchRef,class:{button:true,[this._variant]:this._variant!=="custom",[this._customClass]:this._variant==="custom"&&typeof this._customClass==="string"&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_hideLabel:this._hideLabel||this._iconOnly,_icon:this._icon,_iconAlign:this._iconAlign,_id:this._id,_label:this._label,_on:this._on,_role:this._role,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant},i("slot",{name:"expert",slot:"expert"})))}get host(){return e(this)}};a.style={default:o};export{a as kol_button}; //# sourceMappingURL=kol-button.entry.js.map