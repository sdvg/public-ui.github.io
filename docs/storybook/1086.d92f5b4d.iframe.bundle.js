"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1086],{"./node_modules/@public-ui/components/dist/esm/kol-alert.entry.js":(u,d,i)=>{i.r(d),i.d(d,{kol_alert:()=>_});var t=i("./node_modules/@public-ui/components/dist/esm/index-0dce65d2.js"),h=i("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),r=i("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),s=i("./node_modules/@public-ui/components/dist/esm/prop.validators-ceeab1fe.js"),l=i("./node_modules/@public-ui/components/dist/esm/validation-819f310a.js"),n=i("./node_modules/@public-ui/components/dist/esm/i18n-640debcf.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const v="@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}",o=e=>(0,t.h)("kol-icon",{class:"icon",_ariaLabel:typeof e.heading=="string"&&e.heading.length>0?"":e.ariaLabel,_icon:e.icon}),c=e=>{switch(e.type){case"error":return(0,t.h)(o,{ariaLabel:(0,n.a)("kol-error"),icon:"fa-solid fa-circle-xmark",heading:e.heading});case"info":return(0,t.h)(o,{ariaLabel:(0,n.a)("kol-info"),icon:"fa-solid fa-circle-info",heading:e.heading});case"warning":return(0,t.h)(o,{ariaLabel:(0,n.a)("kol-warning"),icon:"fa-solid fa-triangle-exclamation",heading:e.heading});case"success":return(0,t.h)(o,{ariaLabel:(0,n.a)("kol-success"),icon:"fa-solid fa-circle-check",heading:e.heading});default:return(0,t.h)(o,{ariaLabel:(0,n.a)("kol-message"),icon:"fa-regular fa-comment",heading:e.heading})}},_=class{constructor(e){(0,t.r)(this,e),this.close=()=>{var a;((a=this._on)===null||a===void 0?void 0:a.onClose)!==void 0&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this._alert=!1,this._hasCloser=!1,this._heading=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){if(this.state._alert){try{r.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){r.L.debug("Navigator does not support vibration.")}setTimeout(()=>{this.validateAlert(!1)},1e4)}return(0,t.h)(t.H,null,(0,t.h)("div",{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},this.state._variant==="msg"&&(0,t.h)(c,{heading:this.state._heading,type:this.state._type}),(0,t.h)("div",null,(typeof this.state._heading=="string"&&this.state._heading.length>0||this.state._variant==="card")&&(0,t.h)("kol-heading-wc",{class:"heading",_level:this.state._level},this.state._variant==="card"&&(0,t.h)(c,{heading:this.state._heading,type:this.state._type}),this.state._heading),(0,t.h)("div",{class:"content"},(0,t.h)("slot",null)),this.state._hasCloser&&(0,t.h)("kol-button-wc",{class:"close",_icon:{left:{icon:"fa-solid fa-circle-xmark"}},_iconOnly:!0,_label:(0,n.a)("kol-close"),_on:this.on,_tooltipAlign:"left"}))))}validateAlert(e){(0,s.b)(this,"_alert",e)}validateHasCloser(e){(0,s.b)(this,"_hasCloser",e)}validateHeading(e){(0,s.w)(this,"_heading",e)}validateLevel(e){(0,l.w)(this,e)}validateOn(e){if(typeof e=="object"&&e!==null){(0,h.f)("[KolAlert] Pr\xFCfen, wie man auch einen EventCallback einzeln \xE4ndern kann.");const a={};typeof e.onClose!="function"&&e.onClose!==!0||(a.onClose=e.onClose),(0,s.s)(this,"_on",a)}}validateType(e){(0,s.a)(this,"_type",a=>typeof a=="string"&&(a==="default"||a==="error"||a==="info"||a==="success"||a==="warning"),new Set("String {success, info, warning, error}"),e)}validateVariant(e){(0,s.a)(this,"_variant",a=>a==="card"||a==="msg",new Set("AlertVariant {card, msg}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}};_.style={default:v}},"./node_modules/@public-ui/components/dist/esm/validation-819f310a.js":(u,d,i)=>{i.d(d,{w:()=>h});var t=i("./node_modules/@public-ui/components/dist/esm/prop.validators-ceeab1fe.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const h=(r,s)=>{(0,t.a)(r,"_level",l=>typeof l=="number"&&1<=l&&l<=6,new Set(["Number {1, 2, 3, 4, 5, 6}"]),s,{defaultValue:1,required:!0})}}}]);