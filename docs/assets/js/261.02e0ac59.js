/*! For license information please see 261.02e0ac59.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[261],{24965:(e,t,i)=>{i.d(t,{a:()=>d});var a=i(49976),o=i(97432);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},n={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),s=new Set([e=>e("en",l(n)),e=>e("de",l(r))]),d=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=i.translate(e,t);return r===e&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),r=i.translate(e,t)),r}},90261:(e,t,i)=>{i.r(t),i.d(t,{kol_textarea:()=>d});var a=i(55891),o=i(24965),r=i(49452),n=i(58435),l=i(53807);class s extends l.I{constructor(e,t,i){super(e,t,i),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=e}validateHasCounter(e){(0,r.b)(this.component,"_hasCounter",e,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(e){(0,r.e)(this.component,"_maxLength",e,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(e){(0,r.w)(this.component,"_placeholder",e)}validateReadOnly(e){(0,r.b)(this.component,"_readOnly",e)}validateResize(e){(0,r.a)(this.component,"_resize",(e=>"string"==typeof e&&("both"===e||"horizontal"===e||"none"===e||"vertical"===e)),new Set("String {both, horizontal, vertical, none}"),e)}validateRequired(e){(0,r.b)(this.component,"_required",e)}validateRows(e){(0,r.e)(this.component,"_rows",e)}validateValue(e){(0,r.w)(this.component,"_value",e,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const d=class{render(){const{ariaDiscribedBy:e}=(0,l.g)(this.state);return(0,a.h)(a.H,null,(0,a.h)("kol-input",{_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_readOnly:this.state._readOnly,_required:this.state._required,_touched:this.state._touched},(0,a.h)("span",{slot:"label"},(0,a.h)("slot",null)),(0,a.h)("div",{slot:"input"},(0,a.h)("textarea",Object.assign({ref:this.catchRef,part:"textarea",title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onKeyUp:this.onChange,style:{resize:this.state._resize},value:this.state._value})),this.state._hasCounter&&(0,a.h)("span",{"aria-atomic":"true","aria-live":"polite"},this.state._currentLength,this.state._maxLength&&(0,a.h)(a.F,null,(0,a.h)("span",{"aria-label":(0,o.a)("kol-of"),role:"img"},"/"),this.state._maxLength)," ",(0,a.h)("span",null,(0,o.a)("kol-characters"))))))}constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,n.a)(this.host,this.ref)},this.onChange=e=>{this.ref instanceof HTMLTextAreaElement&&((0,r.s)(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=(e=>{e.style.overflow="hidden";const t=e.rows,i=e.clientHeight/t;e.rows=1;const a=Math.round(e.scrollHeight/i);return e.rows=t,a})(this.ref))),"function"==typeof this.controller.onFacade.onChange&&this.controller.onFacade.onChange(e)},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._hasCounter=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=void 0,this._resize="vertical",this._required=void 0,this._rows=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_id:"\u2026",_resize:"vertical"},this.controller=new s(this,"textarea",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAdjustHeight(e){this.controller.validateAdjustHeight(e)}validateAlert(e){this.controller.validateAlert(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHasCounter(e){this.controller.validateHasCounter(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateId(e){this.controller.validateId(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateResize(e){this.controller.validateResize(e)}validateRequired(e){this.controller.validateRequired(e)}validateRows(e){this.controller.validateRows(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.validateAdjustHeight(this._adjustHeight)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size)}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}.kol-required span::after{content:'*'}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;font-size:1rem;line-height:1.5em;min-height:44px;padding:0.5em 0.75em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:calc(var(--kolibri-spacing) / 2)}.error :is(input,select,textarea){border-color:var(--kolibri-border-error)}:is(input,select,textarea):is(:focus,:hover){border-color:var(--kolibri-color-text)}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}kol-input{display:grid;gap:calc(2 * var(--kolibri-spacing))}input,select,textarea{background-color:white;border-color:var(--kolibri-border-color);border-radius:var(--kolibri-border-radius);border-style:solid;border-width:var(--kolibri-border-width);font-size:1em;font-family:var(--kolibri-font-family-sans);line-height:2.5em;overflow:hidden;width:100%}input,select:not([multiple]){height:2.75em}input::placeholder{color:var(--kolibri-color-normal)}input:hover{border-color:var(--kolibri-color-primary)}input:disabled,select:disabled,textarea:disabled,input:not([type='color']):read-only,textarea:read-only{cursor:not-allowed}.required label>span::after{content:'*';padding-left:var(--kolibri-spacing)}.icons{display:flex;justify-content:space-between;height:0}.icons>kol-icon{display:grid;height:44px;padding:0 0.75em;place-items:center}.icon-left input,.icon-left select{padding-left:2em}kol-button-wc{position:relative;float:right;z-index:1000;margin-top:-44px}kol-button-wc button{background-color:transparent;display:inline-block;min-height:44px;min-width:44px}.icon-right kol-button-wc{margin-right:44px}.disabled{opacity:0.5}select[multiple],textarea{overflow:auto}textarea{display:block}select option{margin:var(--kolibri-spacing) 0;padding:0.5em;border-radius:0.25em;cursor:pointer}select option:disabled{cursor:not-allowed}option:not(:disabled):is(:active,:checked,:focus,:hover){background-color:var(--kolibri-color-primary);color:white}"}}}]);