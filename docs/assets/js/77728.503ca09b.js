/*! For license information please see 77728.503ca09b.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[77728],{42332:(e,i,t)=>{t.d(i,{a:()=>o,b:()=>f,c:()=>k,d:()=>l,e:()=>a,f:()=>h,g:()=>u,h:()=>b,u:()=>v});var n=t(73773);const r=new Set,o=(e,i)=>{(!1===r.has(e)||(null==i?void 0:i.force))&&(r.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},d=new Set,a=(e,i)=>{(!1===d.has(e)||(null==i?void 0:i.force))&&(d.add(e),n.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"\ud83d\udd25 deprecated",overwriteStyle:"; background-color: #f00"}))},s=new Set,l=(e,i)=>{(!1===s.has(e)||(null==i?void 0:i.force))&&(s.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=(e,i)=>{(!1===s.has(e)||(null==i?void 0:i.force))&&(s.add(e),n.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,h=(e,i=!1,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),e+=!0===i?" \u2705":"",n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};l("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const _=new Set,v=(e,i)=>{(!1===_.has(e)||(null==i?void 0:i.force))&&(_.add(e),n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},b=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},f=e=>{"string"==typeof e&&""!==e||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},k=(e,i=8)=>{i>7&&v(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},77728:(e,i,t)=>{t.r(i),t.d(i,{kol_input_radio_group:()=>o});var n=t(13723),r=t(42332);const o=class{constructor(e){(0,n.r)(this,e),this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._label=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0}render(){return(0,r.e)("[KolInputRadioGroup] Die Komponenten Input-Radio-Group und Input-Radio werden zur Komponente Input-Radio zusammengef\xfchrt. Wir empfehlen den Tag <kol-input-radio> statt <kol-input-radio-group> zu verwenden.\n\nMit der Version 1.1 wird die Komponente KolInputRadioGroup aus der Bibliothek entfernt."),(0,n.h)("kol-input-radio",{_accessKey:this._accessKey,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_id:this._id,_label:this._label,_list:this._list,_name:this._name,_on:this._on,_orientation:this._orientation,_required:this._required,_tabIndex:this._tabIndex,_touched:this._touched,_value:this._value},(0,n.h)("slot",null))}}}}]);</kol-input-radio-group></kol-input-radio>