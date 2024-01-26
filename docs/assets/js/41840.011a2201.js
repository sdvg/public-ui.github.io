/*! For license information please see 41840.011a2201.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[41840],{86697:(e,t,i)=>{i.d(t,{a:()=>h});var s=i(19456),n=i(18593);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"\xd6ffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Eintr\xe4ge {{start}} bis {{end}} von {{total}}"},a={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},r=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),l=new Set([e=>e("en",r(a)),e=>e("de",r(o))]),h=(e,t)=>{const i=(0,n.g)();if(void 0===i)return(0,s.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=i.translate(e,t);return o===e&&((0,s.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),o=i.translate(e,t)),o}},41840:(e,t,i)=>{i.r(t),i.d(t,{kol_input:()=>a});var s=i(31707),n=i(19456),o=i(86697);const a=class{constructor(e){(0,s.r)(this,e),this.slotName="input",this.catchInputSlot=e=>{(0,n.au)(this.host,e,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(e){return e&&"object"==typeof e&&e.style?e.style:{}}render(){var e,t,i,a,r,l,h,c;const d="string"==typeof this._error&&this._error.length>0&&!0===this._touched,g=(0,n.C)(this._label),_="string"==typeof this._hint&&this._hint.length>0,u=!g&&this._hideLabel;return(0,s.h)(s.H,{class:{disabled:!0===this._disabled,error:!0===d,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError}},(0,s.h)("label",{class:"input-label",id:u?void 0:`${this._id}-label`,hidden:u,htmlFor:this._id},(0,s.h)("span",{class:"input-label-span"},(0,s.h)("slot",{name:"label"}))),_&&(0,s.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,s.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(e=this._icons)||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(t=this._icons)||void 0===t?void 0:t.right)}},(null===(i=this._icons)||void 0===i?void 0:i.left)&&(0,s.h)("kol-icon",{_label:"",_icons:(null===(a=this._icons)||void 0===a?void 0:a.left).icon,style:this.getIconStyles(null===(r=this._icons)||void 0===r?void 0:r.left)}),(0,s.h)("div",{ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,s.h)("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(l=this._icons)||void 0===l?void 0:l.right)&&(0,s.h)("kol-icon",{_label:"",_icons:(null===(h=this._icons)||void 0===h?void 0:h.right).icon,style:this.getIconStyles(null===(c=this._icons)||void 0===c?void 0:c.right)})),u&&(0,s.h)("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),d&&(0,s.h)("kol-alert",{_alert:this._alert,_type:"error",class:"error"+(this._hideError?" hidden":""),id:`${this._id}-error`},this._error),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,s.h)("datalist",{id:`${this._id}-list`},this._suggestions.map((e=>(0,s.h)("option",{value:e})))),this._hasCounter&&(0,s.h)("span",{class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,s.h)(s.F,null,(0,s.h)("span",{"aria-label":(0,o.a)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,s.h)("span",null,(0,o.a)("kol-characters"))))}get host(){return(0,s.g)(this)}}}}]);