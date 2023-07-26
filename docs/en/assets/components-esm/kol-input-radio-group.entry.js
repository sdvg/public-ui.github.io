/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h}from"./index-2c046ff1.js";import{e as deprecatedHint}from"./a11y.tipps-d701911f.js";import"./dev.utils-d53ab83f.js";import"./reuse-c2156413.js";const KolInputRadioGroup=class{constructor(i){registerInstance(this,i),this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._label=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0}render(){return deprecatedHint("[KolInputRadioGroup] Die Komponenten Input-Radio-Group und Input-Radio werden zur Komponente Input-Radio zusammengeführt. Wir empfehlen den Tag <kol-input-radio> statt <kol-input-radio-group> zu verwenden.\n\nMit der Version 1.1 wird die Komponente KolInputRadioGroup aus der Bibliothek entfernt."),h("kol-input-radio",{_accessKey:this._accessKey,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_id:this._id,_label:this._label,_list:this._list,_name:this._name,_on:this._on,_orientation:this._orientation,_required:this._required,_tabIndex:this._tabIndex,_touched:this._touched,_value:this._value},h("slot",null))}};export{KolInputRadioGroup as kol_input_radio_group};</kol-input-radio-group></kol-input-radio>