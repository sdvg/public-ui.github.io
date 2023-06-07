/*! For license information please see 7780.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7780],{48836:(e,t,r)=>{r.d(t,{c:()=>i,h:()=>y,v:()=>p});var a=r(19060),o=r(25858),n={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},l={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},i=function(e){var t;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var r=function(e){var t,r,a=[],o=1;if("string"==typeof e)if(n[e])a=n[e].slice(),r="rgb";else if("transparent"===e)o=0,r="rgb",a=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var i=e.slice(1);o=1,(h=i.length)<=4?(a=[parseInt(i[0]+i[0],16),parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16)],4===h&&(o=parseInt(i[3]+i[3],16)/255)):(a=[parseInt(i[0]+i[1],16),parseInt(i[2]+i[3],16),parseInt(i[4]+i[5],16)],8===h&&(o=parseInt(i[6]+i[7],16)/255)),a[0]||(a[0]=0),a[1]||(a[1]=0),a[2]||(a[2]=0),r="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=t[1],u="rgb"===s;r=i=s.replace(/a$/,"");var h="cmyk"===i?4:"gray"===i?1:3;a=t[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,t){if(/%$/.test(e))return t===h?parseFloat(e)/100:"rgb"===i?255*parseFloat(e)/100:parseFloat(e);if("h"===i[t]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==l[e])return l[e]}return parseFloat(e)})),s===i&&a.push(1),o=u||void 0===a[h]?1:a[h],a=a.slice(0,h)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(a=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),r=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(a=[e[0],e[1],e[2]],r="rgb",o=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(r="rgb",a=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(r="hsl",a=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),o=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(o/=100)):(r="rgb",a=[e>>>16,(65280&e)>>>8,255&e]);return{space:r,values:a,alpha:o}}(e);if(!r.space)return[];var a=[0,0,0],o="h"===r.space[0]?[360,100,100]:[255,255,255];return(t=Array(3))[0]=Math.min(Math.max(r.values[0],a[0]),o[0]),t[1]=Math.min(Math.max(r.values[1],a[1]),o[1]),t[2]=Math.min(Math.max(r.values[2],a[2]),o[2]),"h"===r.space[0]&&(t=function(e){var t,r,a,o,n,l=e[0]/360,i=e[1]/100,s=e[2]/100,u=0;if(0===i)return[n=255*s,n,n];for(t=2*s-(r=s<.5?s*(1+i):s+i-s*i),o=[0,0,0];u<3;)(a=l+1/3*-(u-1))<0?a++:a>1&&a--,n=6*a<1?t+6*(r-t)*a:2*a<1?r:3*a<2?t+(r-t)*(2/3-a)*6:t,o[u++]=255*n;return o}(t)),t.push(Math.min(Math.max(r.alpha,0),1)),t};const s=(e,t,r,o=1)=>{const n=[Math.max(Math.min(Math.round(t[0]+o*Math.max(1,t[0]/100)),255),0),Math.max(Math.min(Math.round(t[1]+o*Math.max(1,t[1]/100)),255),0),Math.max(Math.min(Math.round(t[2]+o*Math.max(1,t[2]/100)),255),0)],l=(0,a.c)(a.r.hex(`rgba(${e.join(",")},1)`),a.r.hex(`rgba(${n.join(",")},1)`)),i=n[0]+n[1]+n[2];return 0===i||765===i||l>r?{background:e,foreground:n,contrast:l}:s(e,n,r,o)},u=new Map,h=(e,t=7)=>{let r=[0,0,0,1],o=[255,255,255,1];"string"==typeof e?(r=i(e),o=r):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(r=i(e.background),o="string"==typeof e.foreground?i(e.foreground):r);const n=(299*r[0]+587*r[1]+114*r[2])/1e3>=128?-1:1,l=((e,t,r,a=1)=>{if(u.has(e))return u.get(e);const o=s(e,t,r,a);return u.set(e,o),o})([r[0],r[1],r[2]],[o[0],o[1],o[2]],t,n);return o=[...l.foreground,1],{background:a.r.hex(`rgba(${r.join(",")})`),foreground:a.r.hex(`rgba(${o.join(",")})`),contrast:l.contrast}},c=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function d(e){if(e)if("string"==typeof e){if(function(e){return c.test(e)}(e))return{type:"string",valid:!0,value:e};{const t=function(e){if(e.startsWith("{"))try{const t=JSON.parse(e);if(g(t))return{type:"ColorPair",value:t};if(b(t))return{type:"DeprecatedColorPair",value:t}}catch(e){return{type:null,value:null}}return{type:null,value:null}}(e);if(t.value)return{type:t.type,valid:!0,value:t.value}}}else{const t=e;if(g(t))return{type:"ColorPair",valid:!0,value:t};const r=e;if(b(r))return{type:"DeprecatedColorPair",valid:!0,value:r}}return{type:null,valid:!1,value:""}}function g(e){return!("object"!=typeof e||!e||"string"!=typeof e.backgroundColor||!("string"==typeof e.foregroundColor||e.foregroundColor&&"string"==typeof e.foregroundColor.primary&&"string"==typeof e.foregroundColor.secondary&&"string"==typeof e.foregroundColor.neutral))}function b(e){return"object"==typeof e&&e&&"string"==typeof e.backgroundColor&&"string"==typeof e.color}function f(e){const t=d(e);switch(t.type){case null:return!1;case"string":case"ColorPair":case"DeprecatedColorPair":return t.valid}}const p=(e,t,r)=>{(0,a.a)(e,"_color",f,new Set(["rgb in hex","ColorPair"]),t,r)},y=e=>{var t;let r;const a=d(e);switch(a.type){case"string":r=h(a.value);break;case"ColorPair":case"DeprecatedColorPair":{const e=a.value,o=a.value;let n="";o.color?n=o.color:"string"==typeof e.foregroundColor?n=e.foregroundColor:(null===(t=e.foregroundColor)||void 0===t?void 0:t.primary)&&(n=e.foregroundColor.primary),n&&"string"==typeof n||(n="#fff"),r=h({background:e.backgroundColor,foreground:n});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(e)})`),r=h({background:"#000",foreground:"#000"})}return r.contrast<7&&(0,o.a)(`[KolBadge] The contrast of ${r.contrast} (≥7, AAA) is to low, between the color pair ${r.background} and ${r.foreground}.`),{backgroundColor:r.background,foregroundColor:r.foreground}}},27780:(e,t,r)=>{r.r(t),r.d(t,{kol_badge:()=>u});var a=r(77747),o=r(48836),n=r(25858),l=r(19060),i=r(99311),s=r(27726);(0,n.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const u=class{constructor(e){(0,a.r)(this,e),this.bgColorStr="#000",this.colorStr="#fff",this.id=(0,i.n)(),this.handleColorChange=e=>{const t=(0,o.h)(e);this.bgColorStr=t.backgroundColor,this.colorStr=t.foregroundColor},this._color="#000",this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"},_label:"…"}}render(){return(0,a.h)(a.H,null,(0,a.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,a.h)("kol-span-wc",{id:this.id,_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label}),"object"==typeof this.state._smartButton&&null!==this.state._smartButton&&(0,a.h)("kol-button-wc",{_ariaControls:this.id,_ariaLabel:this.state._smartButton._ariaLabel,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_icon:this.state._smartButton._icon,_iconOnly:!0,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant})))}validateColor(e){(0,o.v)(this,e,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateLabel(e){(0,s.v)(this,e,{hooks:{afterPatch:e=>{"string"==typeof e&&e.length>32&&(0,n.a)(`[KolBadge] The label is too long for a badge (${e.length} > 32).`)}}})}validateSmartButton(e){(0,l.o)(e,(()=>{try{e=(0,l.p)(e)}catch(e){}(0,l.s)(this,"_smartButton",e)}))}componentWillLoad(){this.validateColor(this._color),this.validateLabel(this._label),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_label:["validateLabel"],_smartButton:["validateSmartButton"]}}};u.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>span{display:inline-flex;place-items:center}:host>span>kol-button-wc button{color:inherit}"}},27726:(e,t,r)=>{r.d(t,{a:()=>c,b:()=>g,c:()=>u,h:()=>s,v:()=>d});var a=r(25858),o=r(19060),n=r(7269);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,i=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function u(e){return i.test(e)}const h=(e,t,r,o)=>{const l=t.has("_ariaLabel")?t.get("_ariaLabel"):r.state._ariaLabel;if("string"==typeof l){const e=t.has("_label")?t.get("_label"):r.state._label;!1===(0,n.i)(e,l)&&("_ariaLabel"===o?t.set("_label",l):t.set("_ariaLabel",void 0),(0,a.a)("The different Aria label is not barrier-free. A different Aria label must start with the label text for reasons of accessibility for voice control."))}},c=(e,t)=>{((e,t,r={})=>{var n;(0,o.w)(e,"_ariaLabel",t,{hooks:{afterPatch:(e,t,o,n)=>{var l,i;"function"==typeof(null===(l=r.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(i=r.hooks)||void 0===i||i.afterPatch(e,t,o,n)),"string"==typeof e&&e.length>0&&!1===s(e,3)&&!1===u(e)&&(0,a.a)(`The different aria label ("${e}") is not accessible. A different aria label should consist of at least three readable characters.`)},beforePatch:null===(n=r.hooks)||void 0===n?void 0:n.beforePatch}})})(e,t,{hooks:{beforePatch:h}})},d=(e,t,r={})=>{var n;(0,o.w)(e,"_label",t,{hooks:{afterPatch:(e,t,o,n)=>{var l,i;"function"==typeof(null===(l=r.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(i=r.hooks)||void 0===i||i.afterPatch(e,t,o,n)),"string"==typeof e&&!1===s(e,3)&&!1===u(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=r.hooks)||void 0===n?void 0:n.beforePatch},required:!0})},g=(e,t)=>{d(e,t,{hooks:{beforePatch:h}})}}}]);