/*! For license information please see 76632.55cd3a89.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[76632],{95491:(t,e,i)=>{i.d(e,{v:()=>r});var a=i(12608);const n=new Set(['"left", "right"']),o=new Set(['"bottom", "top"']),s=new Set([...n,...o]),r=(t,e,i)=>{(0,a.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),s,i,{defaultValue:"top"})}},88081:(t,e,i)=>{i.d(e,{v:()=>n});var a=i(12608);const n=(t,e)=>{(0,a.d)(t,"_role",e)}},21464:(t,e,i)=>{i.d(e,{v:()=>n});var a=i(12608);const n=(t,e,i={})=>{(0,a.a)(t,"_hideLabel",e,i)}},27754:(t,e,i)=>{i.d(e,{a:()=>h});var a=i(80687),n=i(14037);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},r=t=>Object.keys(t).reduce(((e,i)=>(e[`kol-${i}`]=t[i],e)),{}),l=new Set([t=>t("en",r(s)),t=>t("de",r(o))]),h=(t,e)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),t;let o=i.translate(t,e);return o===t&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((t=>t(((t,e)=>(i.addResourceBundle(t,e),t))))),o=i.translate(t,e)),o}},37717:(t,e,i)=>{i.d(e,{i:()=>r,v:()=>l});var a=i(12608),n=i(78926);const o=(t,e,i)=>{(0,n.c)(i)?t[e]=i:(0,n.i)(i,1)&&(t[e]={icon:i})},s=t=>{var e,i,a;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icons");null===(a=t.nextState)||void 0===a||a.set("_icons",(t=>{let e={};return(0,n.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(o(e,"top",t.top),o(e,"right",t.right),o(e,"bottom",t.bottom),o(e,"left",t.left)),e})(e))}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.b)(t.style))&&(0,n.i)(t.icon,1),l=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.w)(t,"_icons",(t=>null===t||(0,n.i)(t,1)||"object"==typeof t&&null!==t&&((0,n.i)(t.left,1)||r(t.left)||(0,n.i)(t.right,1)||r(t.right)||(0,n.i)(t.top,1)||r(t.top)||(0,n.i)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icons",{}),s(t)}},required:!0})}))}},76632:(t,e,i)=>{i.r(e),i.d(e,{kol_link_wc:()=>b});var a=i(88905),n=i(27754),o=i(88081),s=i(12608),r=i(37717),l=i(79035),h=i(12099),d=i(14037),c=i(78926),g=i(3847),v=i(21464);const u=(t,e,i)=>{(0,s.w)(t,e,(t=>"date"===t||"location"===t||"page"===t||"step"===t||"time"===t||!0===t||!1===t),new Set(["String {data, location, page, step, time}","boolean"]),i)},b=class{constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,c.a)(this.host,this.ref)},this.onClick=t=>{var e,i;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&(t.preventDefault(),t.stopPropagation(),(0,s.f)(t,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(t,this.state._href))},this.getRenderValues=()=>{const t="string"==typeof this.state._target&&"_self"!==this.state._target,e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,d.d)("[KolLink] Es muss ein Aria-Label gesetzt werden _hide-label gesetzt ist."),{isExternal:t,tagAttrs:e}},this.unsubscribeAriaCurrentSubject=s.h.subscribe((t=>{try{this.state._listenAriaCurrent&&this.state._listenAriaCurrent===t.ariaCurrent&&(this.state._href===t.href?this.validateAriaCurrent(t.ariaCurrent):this.validateAriaCurrent(!1))}catch(t){(0,d.g)("The aria-current event is not valid.")}})),this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._listenAriaCurrent=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,n.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this.state={_href:"\u2026",_icons:{}}}render(){const{isExternal:t,tagAttrs:e}=this.getRenderValues(),i=(0,c.s)(this.state._label);return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},e,{"aria-current":this.state._ariaCurrent,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,class:{"external-link":t,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:i?"":this.state._label||this.state._href},(0,a.h)("slot",{name:"expert",slot:"expert"})),t&&(0,a.h)("kol-icon",{class:"external-link-icon",_label:this.state._targetDescription,_icons:"codicon codicon-link-external"})),(0,a.h)("kol-tooltip-wc",{"aria-hidden":"true",hidden:i||!this.state._hideLabel,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAriaCurrent(t){((t,e)=>{u(t,"_ariaCurrent",e)})(this,t)}validateDownload(t){((t,e)=>{(0,s.d)(t,"_download",e)})(this,t)}validateHideLabel(t){(0,v.v)(this,t)}validateHref(t){((t,e,i={})=>{(0,s.d)(t,"_href",e,i)})(this,t)}validateIcons(t){(0,r.v)(this,t)}validateLabel(t){(0,l.a)(this,t)}validateListenAriaCurrent(t){((t,e)=>{u(t,"_listenAriaCurrent",e)})(this,t)}validateOn(t){((t,e)=>{"object"==typeof e&&"function"==typeof(null==e?void 0:e.onClick)&&(t.state=Object.assign(Object.assign({},t.state),{_on:e}))})(this,t)}validateRole(t){(0,o.v)(this,t)}validateTabIndex(t){(0,g.v)(this,t)}validateTarget(t){((t,e)=>{(0,s.d)(t,"_target",e)})(this,t)}validateTargetDescription(t){(0,s.d)(this,"_targetDescription",t)}validateTooltipAlign(t){(0,h.v)(this,t)}componentWillLoad(){this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateListenAriaCurrent(this._listenAriaCurrent),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign)}disconnectedCallback(){this.unsubscribeAriaCurrentSubject.unsubscribe()}get host(){return(0,a.g)(this)}static get watchers(){return{_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_listenAriaCurrent:["validateListenAriaCurrent"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"]}}}},79035:(t,e,i)=>{i.d(e,{a:()=>c,c:()=>l,h:()=>r,v:()=>d});var a=i(14037),n=i(12608);const o=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function l(t){return s.test(t)}const h=new Set(["string"]),d=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,i,n,o)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,o)),"string"==typeof e&&!1===r(e,3)&&!1===l(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(i))},c=d},3847:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(14037),n=i(12608);const o={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,n.e)(t,"_tabIndex",e,o)}},12099:(t,e,i)=>{i.d(e,{v:()=>n});var a=i(95491);const n=(t,e)=>{(0,a.v)(t,"_tooltipAlign",e)}}}]);