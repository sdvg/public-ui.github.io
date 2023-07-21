/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-2c046ff1.js";import{a as watchValidator,w as watchString}from"./prop.validators-e3c93395.js";import{v as validateImageSource}from"./image-source-a6d9c13f.js";import"./a11y.tipps-255c885e.js";import"./dev.utils-e98368e1.js";import"./reuse-c2156413.js";import"./index-37b5cbcf.js";const AVAILABLE_LOADING_VALUES=new Set(['"eager", "lazy"']);function validateLoading(t,a){watchValidator(t,"_loading",(t=>"eager"===t||"lazy"===t),AVAILABLE_LOADING_VALUES,a)}const defaultStyleCss="img{max-height:100%;max-width:100%}",KolImage=class{constructor(t){registerInstance(this,t),this._alt=void 0,this._loading="lazy",this._sizes=void 0,this._src=void 0,this._srcset=void 0,this.state={_alt:"…",_loading:"lazy",_src:"…"}}validateAlt(t){watchString(this,"_alt",t,{required:!0})}validateLoading(t){validateLoading(this,t)}validateSizes(t){watchString(this,"_sizes",t)}validateSrc(t){validateImageSource(this,t,{required:!0})}validateSrcset(t){watchString(this,"_srcset",t)}componentWillLoad(){this.validateAlt(this._alt),this.validateLoading(this._loading),this.validateSizes(this._sizes),this.validateSrc(this._src),this.validateSrcset(this._srcset)}render(){return h(Host,null,h("img",{alt:this.state._alt,loading:this.state._loading,sizes:this.state._sizes,src:this.state._src,srcset:this.state._srcset}))}static get watchers(){return{_alt:["validateAlt"],_loading:["validateLoading"],_sizes:["validateSizes"],_src:["validateSrc"],_srcset:["validateSrcset"]}}};KolImage.style={default:defaultStyleCss};export{KolImage as kol_image};