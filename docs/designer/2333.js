/*! For license information please see 2333.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[2333],{82333:(e,t,i)=>{i.r(t),i.d(t,{kol_card:()=>l});var a=i(77747),n=i(19060),s=i(92765);const l=class{constructor(e){(0,a.r)(this,e),this._hasFooter=!1,this._heading=void 0,this._headline=void 0,this._level=1,this.state={_heading:"…"}}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"card"},(0,a.h)("div",{class:"header"},(0,a.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),(0,a.h)("slot",{name:"header"})),(0,a.h)("div",{class:"content"},(0,a.h)("slot",{name:"content"})," ",(0,a.h)("slot",null)),this.state._hasFooter&&(0,a.h)("div",{class:"footer"},(0,a.h)("slot",{name:"footer"}))))}validateHasFooter(e){((e,t)=>{(0,n.b)(e,"_hasFooter",t)})(this,e)}validateHeading(e){(0,n.w)(this,"_heading",e,{required:!0})}validateHeadline(e){this.validateHeading(e)}validateLevel(e){(0,s.w)(this,e)}componentWillLoad(){this.validateHasFooter(this._hasFooter),this.validateHeading(this._heading||this._headline),this.validateLevel(this._level)}static get watchers(){return{_hasFooter:["validateHasFooter"],_heading:["validateHeading"],_headline:["validateHeadline"],_level:["validateLevel"]}}};l.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div.card{height:100%}"}},92765:(e,t,i)=>{i.d(t,{w:()=>n});var a=i(19060);const n=(e,t)=>{(0,a.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);