/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-2c046ff1.js";import{a as translate}from"./i18n-23b83118.js";import{b as watchBoolean,a as watchValidator}from"./prop.validators-601f1068.js";import{v as validateLabel}from"./label-223fef8f.js";import{g as devWarning,b as a11yHintLabelingLandmarks,d as devHint}from"./a11y.tipps-9f948961.js";import{w as watchNavLinks}from"./validation-4acc18ad.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";import"./dev.utils-4290338e.js";import"./reuse-c2156413.js";const validateCollapsible=(t,a)=>{watchBoolean(t,"_collapsible",a)},validateCompact=(t,a)=>{watchBoolean(t,"_compact",a)},validateHasCompactButton=(t,a)=>{watchBoolean(t,"_hasCompactButton",a)},defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div{display:grid;place-items:center}nav{width:100%}.list{display:flex;list-style:none;margin:0;padding:0}.list.vertical{flex-direction:column}.entry{display:flex}.entry kol-button-wc:first-child,.entry kol-link-wc,.entry kol-span-wc{flex-grow:1}.entry kol-span-wc{justify-items:start}",UNIQUE_ARIA_LABEL=new Set;function addAriaLabel(t){UNIQUE_ARIA_LABEL.has(t)?console.error(`There already is a kol-nav with the label "${t}"`):UNIQUE_ARIA_LABEL.add(t)}function removeAriaLabel(t){UNIQUE_ARIA_LABEL.delete(t)}const KolNav=class{constructor(t){registerInstance(this,t),this.onClick=t=>{t._active=!t._active,this.state=Object.assign({},this.state)},this.hasActiveChild=t=>!!(Array.isArray(t._children)&&t._children.length>0)&&t._children.some(this.hasActiveChild),this.linkList=t=>h("ul",{class:"list "+(0===t.deep&&"horizontal"===t.orientation?" horizontal":" vertical"),"data-deep":t.deep},t.links.map(((a,i)=>this.li(t.collapsible,t.compact,t.deep,i,a,t.orientation)))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!0,this._compact=!1,this._hasCompactButton=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this._variant="primary",this.state={_ariaCurrentValue:!1,_label:"…",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}entry(t,a,i,e,l){return h("div",{class:"entry"},h("kol-button-link-text-switch",{"_has-children":i,"_hide-label":a,_link:e,_selected:l}),i?this.expandButton(t,e,l):"")}expandButton(t,a,i){return h("kol-button-wc",{class:"expand-button",_ariaExpanded:i,_disabled:!t,_icon:"codicon codicon-"+(i?"remove":"add"),_hideLabel:!0,_label:`Untermenü zu ${a._label} ${i?"schließen":"öffnen"}`,_on:{onClick:()=>this.onClick(a)}})}li(t,a,i,e,l,n){const o=Array.isArray(l._children)&&l._children.length>0,s=!!l._active,r=o&&!!l._active;return h("li",{class:{expanded:r,selected:s,"has-children":o},key:e},this.entry(t,a,o,l,s),o&&s?h(this.linkList,{collapsible:t,compact:a,deep:i+1,links:l._children||[],orientation:n}):"")}render(){let t=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(t=!1,devWarning("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const a=!0===this.state._collapsible,i=!0===this.state._compact,e=this.state._orientation;return h(Host,null,h("div",{class:{[e]:!0,[this.state._variant]:!0}},h("nav",{"aria-label":this.state._label,id:"nav"},h(this.linkList,{collapsible:a,compact:i,deep:0,links:this.state._links,orientation:e})),t&&h("div",{class:"mt-2 w-full compact"},h("kol-button",{_ariaControls:"nav",_ariaExpanded:!i,_icon:i?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:translate(i?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(t){watchValidator(this,"_ariaCurrentValue",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaLabel(t){this.validateLabel(t)}validateCollapsible(t){validateCollapsible(this,t)}validateCompact(t){validateCompact(this,t)}validateHasCompactButton(t){validateHasCompactButton(this,t)}validateLabel(t){removeAriaLabel(this.state._label),validateLabel(this,t),a11yHintLabelingLandmarks(t),addAriaLabel(this.state._label)}validateLinks(t){watchNavLinks("KolNav",this,t),devHint("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(t){watchValidator(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateVariant(t){watchValidator(this,"_variant",(t=>"primary"===t||"secondary"===t),new Set(["KoliBriNavVariant {primary, secondary}"]),t,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){removeAriaLabel(this.state._label)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};KolNav.style={default:defaultStyleCss};export{KolNav as kol_nav};