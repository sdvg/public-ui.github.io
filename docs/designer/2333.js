/*! For license information please see 2333.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[2333],{82333:(e,a,i)=>{i.r(a),i.d(a,{kol_card:()=>n});var t=i(2786),s=i(96905),l=i(27456);const n=class{constructor(e){(0,t.r)(this,e),this._hasFooter=!1,this._heading=void 0,this._headline=void 0,this._level=1,this.state={_heading:"…"}}render(){return(0,t.h)(t.H,null,(0,t.h)("div",null,(0,t.h)("div",{class:"header"},(0,t.h)("kol-heading-wc",{_level:this.state._level},this.state._heading),(0,t.h)("slot",{name:"header"})),(0,t.h)("div",{class:"content"},(0,t.h)("slot",{name:"content"})),!0===this.state._hasFooter&&(0,t.h)("div",{class:"footer"},(0,t.h)("slot",{name:"footer"}))))}validateHasFooter(e){(0,s.b)(this,"_hasFooter",e)}validateHeading(e){(0,s.w)(this,"_heading",e,{required:!0})}validateHeadline(e){this.validateHeading(e)}validateLevel(e){(0,l.w)(this,e)}componentWillLoad(){this.validateHasFooter(this._hasFooter),this.validateHeading(this._heading||this._headline),this.validateLevel(this._level)}static get watchers(){return{_hasFooter:["validateHasFooter"],_heading:["validateHeading"],_headline:["validateHeadline"],_level:["validateLevel"]}}};n.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},27456:(e,a,i)=>{i.d(a,{w:()=>s});var t=i(96905);const s=(e,a)=>{(0,t.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})}}}]);