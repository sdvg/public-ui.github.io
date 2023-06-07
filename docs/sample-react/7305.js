/*! For license information please see 7305.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[7305],{7305:(t,i,e)=>{e.r(i),e.d(i,{kol_link_group:()=>h});var a=e(7747),l=e(5858),n=e(9060),s=e(2765),r=e(1496);const o=t=>{const i=[];return t.links.map(((e,l)=>{i.push((0,a.h)("li",{key:l,class:{ident:l>0&&"vertical"===t.orientation,"list-none":0===l&&"horizontal"===t.orientation},style:{listStyleType:t.listStyleType}},(0,a.h)("kol-link",Object.assign({},e))))})),i},h=class{constructor(t){(0,a.r)(this,t),this.isUl=!0,this._ariaLabel=void 0,this._listStyleType=void 0,this._heading=void 0,this._level=void 0,this._links=void 0,this._ordered=void 0,this._orientation="vertical",this.state={_ariaLabel:"…",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){var t;return(0,a.h)("nav",{"aria-label":this.state._ariaLabel,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},"string"==typeof this.state._heading&&(null===(t=this.state._heading)||void 0===t?void 0:t.length)>0&&(0,a.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),!1===this.isUl?(0,a.h)("ol",null,(0,a.h)(o,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,a.h)("ul",null,(0,a.h)(o,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateAriaLabel(t){(0,n.w)(this,"_ariaLabel",t,{required:!0}),(0,l.b)(t)}validateListStyleType(t){(0,n.a)(this,"_listStyleType",(t=>{switch(t){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),t)}validateHeading(t){(0,n.w)(this,"_heading",t)}validateLevel(t){(0,s.w)(this,t)}validateLinks(t){(0,r.w)("KolLinkGroup",this,t)}validateOrdered(t){(0,n.b)(this,"_ordered",t)}validateOrientation(t){(0,n.a)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateListStyleType(this._listStyleType),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateLinks(this._links),this.validateOrientation(this._orientation)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_listStyleType:["validateListStyleType"],_heading:["validateHeading"],_level:["validateLevel"],_links:["validateLinks"],_ordered:["validateOrdered"],_orientation:["validateOrientation"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{list-style:none;margin:0;padding:0}nav.horizontal ul{display:flex;flex-wrap:wrap}nav.horizontal li{margin-left:1.25rem;margin-right:0.25rem}nav.horizontal li:first-child{margin-left:0}nav.horizontal li:last-child{margin-right:0}nav.vertical li{margin-left:1.75rem;margin-right:0.5rem}li.list-none{list-style-type:none !important;margin-left:0}"}},1496:(t,i,e)=>{e.d(i,{w:()=>n});var a=e(5858),l=e(9060);const n=(t,i,e)=>{(0,l.d)(i,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),e),(0,a.c)(t,i.state._links.length)}},2765:(t,i,e)=>{e.d(i,{w:()=>l});var a=e(9060);const l=(t,i)=>{(0,a.a)(t,"_level",(t=>"number"==typeof t&&0<=t&&t<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),i,{defaultValue:1,required:!0})}}}]);