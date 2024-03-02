/*! For license information please see 1288.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1288],{7275:(e,i,t)=>{t.d(i,{F:()=>a});var s=t(20173);const a=({_alert:e,_error:i,_hideError:t,_id:a})=>(0,s.h)("kol-alert",{"aria-hidden":"true",id:`${a}-error`,_alert:e,_type:"error",class:{error:!0,"visually-hidden":!0===t}},i)},35779:(e,i,t)=>{t.d(i,{a:()=>h});var s=t(13973),a=t(23975);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},o=e=>Object.keys(e).reduce(((i,t)=>(i[`kol-${t}`]=e[t],i)),{}),l=new Set([e=>e("en",o(r)),e=>e("de",o(n))]),h=(e,i)=>{const t=(0,a.g)();if(void 0===t)return(0,s.h)("[I18n] I18nService not available! Please call the global register function."),e;let n=t.translate(e,i);return n===e&&((0,s.h)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,i)=>(t.addResourceBundle(e,i),e))))),n=t.translate(e,i)),n}},61288:(e,i,t)=>{t.r(i),t.d(i,{kol_input:()=>o});var s=t(20173),a=t(13973),n=t(35779),r=t(7275);const o=class{constructor(e){(0,s.r)(this,e),this.slotName="input",this.catchInputSlot=e=>{(0,a.aE)(this.host,e,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(e){return e&&"object"==typeof e&&e.style?e.style:{}}render(){var e,i,t,o,l,h,c,d;const g=!this._readOnly&&"string"==typeof this._error&&this._error.length>0&&!0===this._touched,_=(0,a.M)(this._label),u="string"==typeof this._hint&&this._hint.length>0,b=!_&&this._hideLabel;return(0,s.h)(s.H,{key:"425833ef3b83f11817c250db934eb4eead3fab32",class:{disabled:!0===this._disabled,error:!0===g,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError}},(0,s.h)("label",{key:"47f75e963ba13cc58644feb3214dc65c280cbb72",class:"input-label",id:b?void 0:`${this._id}-label`,hidden:b,htmlFor:this._id},(0,s.h)("span",{key:"9021927b01061be0d6c9da8e19e2077ad4921036",class:"input-label-span"},(0,s.h)("slot",{key:"02a42734edcee2dae5e813ee29bcb8069b475625",name:"label"}))),u&&(0,s.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,s.h)("div",{key:"6e717081b7779d4657db57bfeac0c4d5e240b1c8",class:{input:!0,"icon-left":"object"==typeof(null===(e=this._icons)||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(i=this._icons)||void 0===i?void 0:i.right)}},(null===(t=this._icons)||void 0===t?void 0:t.left)&&(0,s.h)("kol-icon",{_label:"",_icons:(null===(o=this._icons)||void 0===o?void 0:o.left).icon,style:this.getIconStyles(null===(l=this._icons)||void 0===l?void 0:l.left)}),(0,s.h)("div",{key:"b96b0e1ef626d6f8c13532b0e14da8f32f44f450",ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,s.h)("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(h=this._icons)||void 0===h?void 0:h.right)&&(0,s.h)("kol-icon",{_label:"",_icons:(null===(c=this._icons)||void 0===c?void 0:c.right).icon,style:this.getIconStyles(null===(d=this._icons)||void 0===d?void 0:d.right)})),b&&(0,s.h)("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),g&&(0,s.h)(r.F,{_alert:this._alert,_hideError:this._hideError,_error:this._error,_id:this._id}),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,s.h)("datalist",{id:`${this._id}-list`},this._suggestions.map((e=>(0,s.h)("option",{value:e})))),this._hasCounter&&(0,s.h)("span",{class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,s.h)(s.F,null,(0,s.h)("span",{"aria-label":(0,n.a)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,s.h)("span",null,(0,n.a)("kol-characters"))))}get host(){return(0,s.g)(this)}}}}]);