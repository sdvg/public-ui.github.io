/*! For license information please see 5428.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5428],{9018:(e,i,t)=>{t.d(i,{a:()=>r,b:()=>v,c:()=>p,d:()=>s,e:()=>a,f:()=>h,g:()=>f,h:()=>c,u:()=>b});var n=t(1709);const o=new Set,r=(e,i)=>{(!1===o.has(e)||(null==i?void 0:i.force))&&(o.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",forceLog:!!(null==i?void 0:i.force),overwriteStyle:"; background-color: #09f"}))},d=new Set,a=(e,i)=>{(!1===d.has(e)||(null==i?void 0:i.force))&&(d.add(e),n.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"🔥 deprecated",forceLog:!!(null==i?void 0:i.force),overwriteStyle:"; background-color: #f00"}))},l=new Set,s=(e,i)=>{(!1===l.has(e)||(null==i?void 0:i.force))&&(l.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",forceLog:!!(null==i?void 0:i.force),overwriteStyle:"; background-color: #f09"}))},c=(e,i)=>{(!1===l.has(e)||(null==i?void 0:i.force))&&(l.add(e),n.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"⚠️ dev",forceLog:!!(null==i?void 0:i.force),overwriteStyle:"; background-color: #f09"}))},u=new Set,h=(e,i=!1,t)=>{(!1===u.has(e)||(null==t?void 0:t.force))&&(u.add(e),e+=!0===i?" ✅":"",n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"🌟 feature",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #309"}))};s("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const _=new Set,b=(e,i)=>{(!1===_.has(e)||(null==i?void 0:i.force))&&(_.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",forceLog:!!(null==i?void 0:i.force),overwriteStyle:"; background-color: #060;"}))},f=()=>{r('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},v=e=>{"string"==typeof e&&""!==e||r("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,i=8)=>{i>7&&b(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},5428:(e,i,t)=>{t.r(i),t.d(i,{kol_input_radio_group:()=>d});var n=t(4566),o=t(9018),r=t(5109);const d=class{constructor(e){(0,n.r)(this,e),this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=!1,this._tabIndex=void 0,this._touched=!1,this._value=void 0}render(){return(0,o.e)("[KolInputRadioGroup] Die Komponenten Input-Radio-Group und Input-Radio werden zur Komponente Input-Radio zusammengeführt. Wir empfehlen den Tag <kol-input-radio> statt <kol-input-radio-group> zu verwenden.\n\nMit der Version 1.1 wird die Komponente KolInputRadioGroup aus der Bibliothek entfernt."),(0,n.h)(n.H,{key:"703277288208b1f166440ca94cd3307bb78f5188",class:"kol-input-radio-group"},(0,n.h)(r.u,{key:"2f7fde548b067f0f49dba96b4c5cd1557aeea808",_accessKey:this._accessKey,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_id:this._id,_label:this._label,_list:this._list,_name:this._name,_on:this._on,_orientation:this._orientation,_required:this._required,_tabIndex:this._tabIndex,_touched:this._touched,_value:this._value},(0,n.h)("slot",{key:"2eb606879a5ed9cf54e43d1d486777fee719a901"})))}}}}]);