/*! For license information please see 6254.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6254],{86254:(a,i,t)=>{t.r(i),t.d(i,{kol_nav:()=>h});var e=t(2786),l=t(64847),o=t(98626),s=t(71107),n=t(47214);const r=[],c=a=>{const i=r.indexOf(a);i>=0&&r.splice(i,1)},h=class{constructor(a){(0,e.r)(this,a),this.onClick=a=>{a._active=!1===a._active,this.state=Object.assign({},this.state)},this.hasActiveChild=a=>!!(Array.isArray(a._children)&&a._children.length>0)&&a._children.some(this.hasActiveChild),this.linkList=a=>(0,e.h)("ul",{class:{flex:0===a.deep&&"horizontal"===this.state._orientation},part:`nav ${this.state._orientation}`},a.links.map(((i,t)=>(0,e.h)("li",{key:t,part:`li ${0===a.deep?this.state._orientation:"vertical"}${i._active?" selected":""}${t<a.links.length-1?"":" last"}`},Array.isArray(i._children)&&i._children.length>0?(0,e.h)("div",{class:"h-full"},(0,e.h)("div",{class:{"h-full":!0}},(0,e.h)("kol-link-wc",{class:"block w-full h-full",exportparts:"icon,link,span"+(!0===i._active?",selected":""),_ariaLabel:!0===this.state._compact||!0===i._iconOnly?i._label:void 0,_ariaExpanded:!0===i._active,_disabled:i._disabled,_href:"javascript:void(0)",_icon:!0===this.state._collapsible?!0===i._active?"fa-solid fa-minus":"fa-solid fa-plus":"string"==typeof i._icon?i._icon:"fa-solid fa-link-slash",_iconOnly:!0===this.state._compact||!0===i._iconOnly,_label:i._label,onClick:()=>this.onClick(i)})),!0===i._active&&(0,e.h)("div",{class:{expanded:!0,active:!0===i._active,"active-child":this.hasActiveChild(i),"absolute ":0===a.deep&&"horizontal"===this.state._orientation}},(0,e.h)(this.linkList,{links:i._children,deep:a.deep+1}))):(0,e.h)("div",{class:{"h-full":!0,"text-center":!0===this.state._compact||!0===i._iconOnly}},(0,e.h)("kol-link-wc",{class:{"block w-full h-full":!0,active:!0===i._active},exportparts:"icon,link,span"+(!0===i._active?",selected":""),_ariaCurrent:!0===i._active&&this.state._ariaCurrentValue,_ariaLabel:!0===this.state._compact||!0===i._iconOnly?i._label:void 0,_href:i._href,_icon:"string"==typeof i._icon?i._icon:"fa-solid fa-link-slash","_icon-only":!0===this.state._compact||!0===i._iconOnly,_label:i._label,_on:i._on,_selector:i._selector,_tooltipAlign:i._tooltipAlign,_target:i._target})))))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!1,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"…",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}render(){let a=this.state._hasCompactButton;return"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(a=!1,(0,l.d)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden.")),(0,e.h)(e.H,null,(0,e.h)("div",{class:{[this.state._orientation]:!0,"inline-block":!0===this.state._compact,[this.state._variant]:!0}},(0,e.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav",part:"nav"},(0,e.h)(this.linkList,{links:this.state._links,deep:0})),a&&(0,e.h)("div",{class:"mt-2 w-full text-center"},(0,e.h)("kol-button",{exportparts:"button,ghost",_ariaControls:"nav",_ariaExpanded:!0===this.state._compact,_ariaLabel:(0,n.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_icon:this.state._compact?"fa-solid fa-angles-right":"fa-solid fa-angles-left",_iconOnly:!0,_label:(0,n.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(a){(0,o.a)(this,"_ariaCurrentValue",(a=>!0===a||"date"===a||"location"===a||"page"===a||"step"===a||"time"===a),new Set(["boolean","String {data, location, page, step, time}"]),a)}validateAriaLabel(a){(0,o.w)(this,"_ariaLabel",a,{hooks:{afterPatch:()=>{r.includes(this.state._ariaLabel)&&(0,l.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde für die Rolle Navigation mehrfach verwendet!`),r.push(this.state._ariaLabel)},beforePatch:()=>{c(this.state._ariaLabel)}},required:!0}),(0,l.b)(a)}validateCollapsible(a){(0,o.b)(this,"_collapsible",a)}validateCompact(a){(0,o.b)(this,"_compact",a)}validateHasCompactButton(a){(0,o.b)(this,"_hasCompactButton",a)}validateLinks(a){(0,s.w)("KolNav",this,a),(0,l.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(a){(0,o.a)(this,"_orientation",(a=>"horizontal"===a||"vertical"===a),new Set(["Orientation {horizontal, vertical}"]),a,{defaultValue:"vertical"})}validateVariant(a){(0,o.a)(this,"_variant",(a=>"primary"===a||"secondary"===a),new Set(["KoliBriNavVariant {primary, secondary}"]),a,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){c(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};h.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{box-sizing:border-box;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}:host>div{display:inline-block}"}},71107:(a,i,t)=>{t.d(i,{w:()=>o});var e=t(64847),l=t(98626);const o=(a,i,t)=>{(0,l.d)(i,"_links",(a=>"object"==typeof a&&"string"==typeof a._label),t),(0,e.u)(a,i.state._links.length)}}}]);