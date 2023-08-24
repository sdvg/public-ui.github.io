/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as t,h as i,H as s}from"./index-330c31f9.js";import{a as e,w as a}from"./prop.validators-0a66a178.js";import"./a11y.tipps-beae7792.js";import"./dev.utils-5b0de6da.js";import"./reuse-c2156413.js";import"./index-3711603c.js";const r=new Set(['"eager", "lazy"']);function d(t,i){e(t,"_loading",(t=>t==="eager"||t==="lazy"),r,i)}const l="img{max-height:100%;max-width:100%}";const h=class{constructor(i){t(this,i);this._alt=undefined;this._loading="lazy";this._sizes=undefined;this._src=undefined;this._srcset=undefined;this.state={_alt:"…",_loading:"lazy",_src:"…"}}validateAlt(t){a(this,"_alt",t,{required:true})}validateLoading(t){d(this,t)}validateSizes(t){a(this,"_sizes",t)}validateSrc(t){a(this,"_src",t,{required:true})}validateSrcset(t){a(this,"_srcset",t)}componentWillLoad(){this.validateAlt(this._alt);this.validateLoading(this._loading);this.validateSizes(this._sizes);this.validateSrc(this._src);this.validateSrcset(this._srcset)}render(){return i(s,null,i("img",{alt:this.state._alt,loading:this.state._loading,sizes:this.state._sizes,src:this.state._src,srcset:this.state._srcset}))}static get watchers(){return{_alt:["validateAlt"],_loading:["validateLoading"],_sizes:["validateSizes"],_src:["validateSrc"],_srcset:["validateSrcset"]}}};h.style={default:l};export{h as kol_image};
//# sourceMappingURL=kol-image.entry.js.map