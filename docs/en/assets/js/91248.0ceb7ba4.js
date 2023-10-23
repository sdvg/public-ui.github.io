/*! For license information please see 91248.0ceb7ba4.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[91248],{21464:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(12608);const n=(e,t,i={})=>{(0,a.a)(e,"_hideLabel",t,i)}},27754:(e,t,i)=>{i.d(t,{a:()=>c});var a=i(80687),n=i(14037);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},r=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),s=new Set([e=>e("en",r(l)),e=>e("de",r(o))]),c=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=i.translate(e,t);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),o=i.translate(e,t)),o}},91248:(e,t,i)=>{i.r(t),i.d(t,{kol_nav:()=>d});var a=i(88905),n=i(27754),o=i(12608),l=i(21464),r=i(79035),s=i(14037),c=i(64408),h=i(2494);const d=class{constructor(e){(0,a.r)(this,e),this.onClick=e=>{e._active=!e._active,this.state=Object.assign({},this.state)},this.hasActiveChild=e=>!!(Array.isArray(e._children)&&e._children.length>0)&&e._children.some(this.hasActiveChild),this.linkList=e=>(0,a.h)("ul",{class:"list "+(0===e.deep&&"horizontal"===e.orientation?" horizontal":" vertical"),"data-deep":e.deep},e.links.map(((t,i)=>this.li(e.collapsible,e.hideLabel,e.deep,i,t,e.orientation)))),this._ariaCurrentValue=!1,this._collapsible=!0,this._hasCompactButton=!1,this._hideLabel=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_ariaCurrentValue:!1,_collapsible:!0,_hasCompactButton:!1,_hideLabel:!1,_label:"\u2026",_links:[],_orientation:"vertical"}}entry(e,t,i,n,o){return(0,a.h)("div",{class:{entry:!0,"hide-label":t}},(0,a.h)("kol-button-link-text-switch",{_link:Object.assign(Object.assign({},n),{_hideLabel:t})}),i?this.expandButton(e,n,o):"")}expandButton(e,t,i){return(0,a.h)("kol-button-wc",{class:"expand-button",_ariaExpanded:i,_disabled:!e,_icons:"codicon codicon-"+(i?"remove":"add"),_hideLabel:!0,_label:`Untermen\xfc zu ${t._label} ${i?"schlie\xdfen":"\xf6ffnen"}`,_on:{onClick:()=>this.onClick(t)}})}li(e,t,i,n,o,l){const r=!!o._active,s=Array.isArray(o._children)&&o._children.length>0,c=s&&r;return(0,a.h)("li",{class:{active:r,expanded:c,"has-children":s},key:n},this.entry(e,t,s,o,r),c?(0,a.h)(this.linkList,{collapsible:e,hideLabel:t,deep:i+1,links:o._children||[],orientation:l}):"")}render(){let e=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,(0,s.g)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const t=!0===this.state._collapsible,i=!0===this.state._hideLabel,o=this.state._orientation;return(0,a.h)(a.H,null,(0,a.h)("div",{class:{[o]:!0}},(0,a.h)("nav",{"aria-label":this.state._label,id:"nav"},(0,a.h)(this.linkList,{collapsible:t,hideLabel:i,deep:0,links:this.state._links,orientation:o})),e&&(0,a.h)("div",{class:"compact"},(0,a.h)("kol-button",{_ariaControls:"nav",_ariaExpanded:!i,_icons:i?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:(0,n.a)(i?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_hideLabel:!1===this.state._hideLabel})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(e){(0,o.w)(this,"_ariaCurrentValue",(e=>!0===e||"date"===e||"location"===e||"page"===e||"step"===e||"time"===e),new Set(["boolean","String {data, location, page, step, time}"]),e)}validateCollapsible(e){((e,t)=>{(0,o.a)(e,"_collapsible",t)})(this,e)}validateHasCompactButton(e){((e,t)=>{(0,o.a)(e,"_hasCompactButton",t)})(this,e)}validateHideLabel(e){(0,l.v)(this,e)}validateLabel(e,t,i=!1){i||(0,c.r)(this.state._label),(0,r.v)(this,e),(0,s.b)(e),(0,c.a)(this.state._label)}validateLinks(e){(0,h.w)("KolNav",this,e),(0,s.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(e){(0,o.w)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateCollapsible(this._collapsible),this.validateHideLabel(this._hideLabel),this.validateHasCompactButton(this._hasCompactButton),this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){(0,c.r)(this.state._label)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_collapsible:["validateCollapsible"],_hasCompactButton:["validateHasCompactButton"],_hideLabel:["validateHideLabel"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};d.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div{display:grid;place-items:center}nav{width:100%}.list{display:flex;list-style:none;margin:0;padding:0}.list.vertical{flex-direction:column}.entry{display:flex}.entry kol-button-wc:first-child,.entry kol-link-wc,.entry kol-span-wc{flex-grow:1}.entry kol-span-wc{justify-items:start}"}},79035:(e,t,i)=>{i.d(t,{a:()=>d,c:()=>s,h:()=>r,v:()=>h});var a=i(14037),n=i(12608);const o=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(o))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return l.test(e)}const c=new Set(["string"]),h=(e,t,i={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return{hooks:{afterPatch:(t,i,n,o)=>{var l,c;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,i,n,o)),"string"==typeof t&&!1===r(t,3)&&!1===s(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}(i))},d=h},64408:(e,t,i)=>{i.d(t,{a:()=>n,r:()=>o});const a=new Set;function n(e){a.has(e)?console.error(`There already is a nav element with the label "${e}"`):a.add(e)}function o(e){a.delete(e)}},2494:(e,t,i)=>{i.d(t,{w:()=>o});var a=i(14037),n=i(12608);const o=(e,t,i)=>{(0,n.c)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),i),(0,a.c)(e,t.state._links.length)}}}]);