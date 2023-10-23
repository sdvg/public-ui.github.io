/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-d0c806ea.js";import{a as translate}from"./i18n-9c7e636f.js";import{a as watchBoolean,w as watchValidator}from"./prop.validators-e40c3380.js";import{v as validateHideLabel}from"./hide-label-ff12ad0b.js";import{v as validateLabel}from"./label-c130b72e.js";import{g as devWarning,b as a11yHintLabelingLandmarks,d as devHint}from"./a11y.tipps-348ca42a.js";import{r as removeNavLabel,a as addNavLabel}from"./unique-nav-labels-c6750f60.js";import{w as watchNavLinks}from"./validation-3a52d0f0.js";import"./index-5d267931.js";import"./dev.utils-9b878520.js";import"./reuse-b3566e4c.js";const validateCollapsible=(t,a)=>{watchBoolean(t,"_collapsible",a)},validateHasCompactButton=(t,a)=>{watchBoolean(t,"_hasCompactButton",a)},defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div{display:grid;place-items:center}nav{width:100%}.list{display:flex;list-style:none;margin:0;padding:0}.list.vertical{flex-direction:column}.entry{display:flex}.entry kol-button-wc:first-child,.entry kol-link-wc,.entry kol-span-wc{flex-grow:1}.entry kol-span-wc{justify-items:start}",KolNav=class{constructor(t){registerInstance(this,t),this.onClick=t=>{t._active=!t._active,this.state=Object.assign({},this.state)},this.hasActiveChild=t=>!!(Array.isArray(t._children)&&t._children.length>0)&&t._children.some(this.hasActiveChild),this.linkList=t=>h("ul",{class:"list "+(0===t.deep&&"horizontal"===t.orientation?" horizontal":" vertical"),"data-deep":t.deep},t.links.map(((a,i)=>this.li(t.collapsible,t.hideLabel,t.deep,i,a,t.orientation)))),this._ariaCurrentValue=!1,this._collapsible=!0,this._hasCompactButton=!1,this._hideLabel=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_ariaCurrentValue:!1,_collapsible:!0,_hasCompactButton:!1,_hideLabel:!1,_label:"…",_links:[],_orientation:"vertical"}}entry(t,a,i,e,l){return h("div",{class:{entry:!0,"hide-label":a}},h("kol-button-link-text-switch",{_link:Object.assign(Object.assign({},e),{_hideLabel:a})}),i?this.expandButton(t,e,l):"")}expandButton(t,a,i){return h("kol-button-wc",{class:"expand-button",_ariaExpanded:i,_disabled:!t,_icons:"codicon codicon-"+(i?"remove":"add"),_hideLabel:!0,_label:`Untermenü zu ${a._label} ${i?"schließen":"öffnen"}`,_on:{onClick:()=>this.onClick(a)}})}li(t,a,i,e,l,n){const s=!!l._active,o=Array.isArray(l._children)&&l._children.length>0,r=o&&s;return h("li",{class:{active:s,expanded:r,"has-children":o},key:e},this.entry(t,a,o,l,s),r?h(this.linkList,{collapsible:t,hideLabel:a,deep:i+1,links:l._children||[],orientation:n}):"")}render(){let t=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(t=!1,devWarning("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const a=!0===this.state._collapsible,i=!0===this.state._hideLabel,e=this.state._orientation;return h(Host,null,h("div",{class:{[e]:!0}},h("nav",{"aria-label":this.state._label,id:"nav"},h(this.linkList,{collapsible:a,hideLabel:i,deep:0,links:this.state._links,orientation:e})),t&&h("div",{class:"compact"},h("kol-button",{_ariaControls:"nav",_ariaExpanded:!i,_icons:i?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:translate(i?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_hideLabel:!1===this.state._hideLabel})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(t){watchValidator(this,"_ariaCurrentValue",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateCollapsible(t){validateCollapsible(this,t)}validateHasCompactButton(t){validateHasCompactButton(this,t)}validateHideLabel(t){validateHideLabel(this,t)}validateLabel(t,a,i=!1){i||removeNavLabel(this.state._label),validateLabel(this,t),a11yHintLabelingLandmarks(t),addNavLabel(this.state._label)}validateLinks(t){watchNavLinks("KolNav",this,t),devHint("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(t){watchValidator(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateCollapsible(this._collapsible),this.validateHideLabel(this._hideLabel),this.validateHasCompactButton(this._hasCompactButton),this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){removeNavLabel(this.state._label)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_collapsible:["validateCollapsible"],_hasCompactButton:["validateHasCompactButton"],_hideLabel:["validateHideLabel"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};KolNav.style={default:defaultStyleCss};export{KolNav as kol_nav};