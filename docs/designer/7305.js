/*! For license information please see 7305.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7305],{7305:(t,e,i)=>{i.r(e),i.d(e,{kol_link_group:()=>h});var a=i(90578),l=i(24145),n=i(79160),s=i(4950),r=i(22539);const o=t=>{const e=[];return t.links.map(((i,l)=>{e.push((0,a.h)("li",{key:l,class:{ident:l>0&&"vertical"===t.orientation,"list-none":0===l&&"horizontal"===t.orientation},style:{listStyleType:t.listStyleType}},(0,a.h)("kol-link",Object.assign({},i))))})),e},h=class{constructor(t){(0,a.r)(this,t),this.isUl=!0,this._ariaLabel=void 0,this._listStyleType=void 0,this._heading=void 0,this._label=void 0,this._level=void 0,this._links=void 0,this._ordered=void 0,this._orientation="vertical",this.state={_label:"…",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){var t;return(0,a.h)("nav",{"aria-label":this.state._label,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},"string"==typeof this.state._heading&&(null===(t=this.state._heading)||void 0===t?void 0:t.length)>0&&(0,a.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),!1===this.isUl?(0,a.h)("ol",null,(0,a.h)(o,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,a.h)("ul",null,(0,a.h)(o,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateAriaLabel(t){this.validateLabel(t)}validateHeading(t){(0,n.d)(this,"_heading",t)}validateLabel(t){(0,l.v)(this,t)}validateLevel(t){(0,s.w)(this,t)}validateListStyleType(t){(0,n.w)(this,"_listStyleType",(t=>{switch(t){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),t)}validateLinks(t){(0,r.w)("KolLinkGroup",this,t)}validateOrdered(t){(0,n.a)(this,"_ordered",t)}validateOrientation(t){(0,n.w)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateHeading(this._heading),this.validateLabel(this._label||this._ariaLabel),this.validateLevel(this._level),this.validateListStyleType(this._listStyleType),this.validateLinks(this._links),this.validateOrientation(this._orientation)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_heading:["validateHeading"],_label:["validateLabel"],_level:["validateLevel"],_listStyleType:["validateListStyleType"],_links:["validateLinks"],_ordered:["validateOrdered"],_orientation:["validateOrientation"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{list-style:none;margin:0;padding:0}nav.horizontal ul{display:flex;flex-wrap:wrap}nav.horizontal li{margin-left:1.25rem;margin-right:0.25rem}nav.horizontal li:first-child{margin-left:0}nav.horizontal li:last-child{margin-right:0}nav.vertical li{margin-left:1.75rem;margin-right:0.5rem}li.list-none{list-style-type:none !important;margin-left:0}"}},24145:(t,e,i)=>{i.d(e,{a:()=>v,c:()=>o,h:()=>r,v:()=>c});var a=i(1141),l=i(79160);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function o(t){return s.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,l,n)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,l,n)),"string"==typeof e&&!1===r(e,3)&&!1===o(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const d=new Set(["string"]),c=(t,e,i={})=>{(0,l.w)(t,"_label",(t=>"string"==typeof t),d,e,h(i))},p=new Set(["string","false"]),v=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,l.w)(t,"_label",(t=>!1===t||"string"==typeof t),p,e,h(i))}},4950:(t,e,i)=>{i.d(e,{w:()=>l});var a=i(79160);const l=(t,e)=>{(0,a.w)(t,"_level",(t=>"number"==typeof t&&0<=t&&t<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}},22539:(t,e,i)=>{i.d(e,{w:()=>n});var a=i(1141),l=i(79160);const n=(t,e,i)=>{(0,l.c)(e,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),i),(0,a.c)(t,e.state._links.length)}}}]);