/*! For license information please see 6254.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[6254],{3081:(e,t,i)=>{i.d(t,{a:()=>c});var a=i(6989),n=i(8242);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),s=new Set([e=>e("en",l(r)),e=>e("de",l(o))]),c=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=i.translate(e,t);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),o=i.translate(e,t)),o}},6254:(e,t,i)=>{i.r(t),i.d(t,{kol_nav:()=>c});var a=i(578),n=i(3081),o=i(8242),r=i(2996),l=i(4026),s=i(618);const c=class{constructor(e){(0,a.r)(this,e),this.onClick=e=>{e._active=!e._active,this.state=Object.assign({},this.state)},this.hasActiveChild=e=>!!(Array.isArray(e._children)&&e._children.length>0)&&e._children.some(this.hasActiveChild),this.linkList=e=>(0,a.h)("ul",{class:"list "+(0===e.deep&&"horizontal"===e.orientation?" horizontal":" vertical"),"data-deep":e.deep},e.links.map(((t,i)=>this.li(e.collapsible,e.compact,e.deep,i,t,e.orientation)))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!0,this._compact=!1,this._hasCompactButton=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this._variant="primary",this.state={_ariaCurrentValue:!1,_label:"…",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}entry(e,t,i,n,o){return(0,a.h)("div",{class:"entry"},(0,a.h)("kol-button-link-text-switch",{"_has-children":i,"_hide-label":t,_link:n,_selected:o}),i?this.expandButton(e,n,o):"")}expandButton(e,t,i){return(0,a.h)("kol-button-wc",{class:"expand-button",_ariaExpanded:i,_disabled:!e,_icon:"codicon codicon-"+(i?"remove":"add"),_hideLabel:!0,_label:`Untermenü zu ${t._label} ${i?"schließen":"öffnen"}`,_on:{onClick:()=>this.onClick(t)}})}li(e,t,i,n,o,r){const l=Array.isArray(o._children)&&o._children.length>0,s=!!o._active,c=l&&!!o._active;return(0,a.h)("li",{class:{expanded:c,selected:s,"has-children":l},key:n},this.entry(e,t,l,o,s),l&&s?(0,a.h)(this.linkList,{collapsible:e,compact:t,deep:i+1,links:o._children||[],orientation:r}):"")}render(){let e=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,(0,o.h)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const t=!0===this.state._collapsible,i=!0===this.state._compact,r=this.state._orientation;return(0,a.h)(a.H,null,(0,a.h)("div",{class:{[r]:!0,[this.state._variant]:!0}},(0,a.h)("nav",{"aria-label":this.state._label,id:"nav"},(0,a.h)(this.linkList,{collapsible:t,compact:i,deep:0,links:this.state._links,orientation:r})),e&&(0,a.h)("div",{class:"mt-2 w-full compact"},(0,a.h)("kol-button",{_ariaControls:"nav",_ariaExpanded:!i,_icon:i?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:(0,n.a)(i?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(e){(0,r.a)(this,"_ariaCurrentValue",(e=>!0===e||"date"===e||"location"===e||"page"===e||"step"===e||"time"===e),new Set(["boolean","String {data, location, page, step, time}"]),e)}validateAriaLabel(e){this.validateLabel(e)}validateCollapsible(e){((e,t)=>{(0,r.b)(e,"_collapsible",t)})(this,e)}validateCompact(e){((e,t)=>{(0,r.b)(e,"_compact",t)})(this,e)}validateHasCompactButton(e){((e,t)=>{(0,r.b)(e,"_hasCompactButton",t)})(this,e)}validateLabel(e){(0,s.v)(this,e),(0,o.b)(e)}validateLinks(e){(0,l.w)("KolNav",this,e),(0,o.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(e){(0,r.a)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateVariant(e){(0,r.a)(this,"_variant",(e=>"primary"===e||"secondary"===e),new Set(["KoliBriNavVariant {primary, secondary}"]),e,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};c.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div{display:grid;place-items:center}nav{width:100%}.list{display:flex;list-style:none;margin:0;padding:0}.list.vertical{flex-direction:column}.entry{display:flex}.entry kol-button-wc:first-child,.entry kol-link-wc,.entry kol-span-wc{flex-grow:1}.entry kol-span-wc{justify-items:start}"}},618:(e,t,i)=>{i.d(t,{c:()=>s,h:()=>l,v:()=>c});var a=i(8242),n=i(2996);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,r=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(o))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return r.test(e)}const c=(e,t,i={})=>{var o;(0,n.w)(e,"_label",t,{hooks:{afterPatch:(e,t,n,o)=>{var r,c;"function"==typeof(null===(r=i.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(c=i.hooks)||void 0===c||c.afterPatch(e,t,n,o)),"string"==typeof e&&!1===l(e,3)&&!1===s(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(o=i.hooks)||void 0===o?void 0:o.beforePatch},required:!0})}},4026:(e,t,i)=>{i.d(t,{w:()=>o});var a=i(8242),n=i(2996);const o=(e,t,i)=>{(0,n.d)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),i),(0,a.c)(e,t.state._links.length)}}}]);