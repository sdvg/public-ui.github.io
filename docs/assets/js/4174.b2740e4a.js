"use strict";
exports.id = 4174;
exports.ids = [4174];
exports.modules = {

/***/ 80015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ colorRgba)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
var colorName={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},colorParse=parse,baseHues={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function parse(e){var r,a,l=[],t=1;if("string"==typeof e)if(colorName[e])l=colorName[e].slice(),a="rgb";else if("transparent"===e)t=0,a="rgb",l=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var n=e.slice(1);t=1,(o=n.length)<=4?(l=[parseInt(n[0]+n[0],16),parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16)],4===o&&(t=parseInt(n[3]+n[3],16)/255)):(l=[parseInt(n[0]+n[1],16),parseInt(n[2]+n[3],16),parseInt(n[4]+n[5],16)],8===o&&(t=parseInt(n[6]+n[7],16)/255)),l[0]||(l[0]=0),l[1]||(l[1]=0),l[2]||(l[2]=0),a="rgb"}else if(r=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var i=r[1],s="rgb"===i;a=n=i.replace(/a$/,"");var o="cmyk"===n?4:"gray"===n?1:3;l=r[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,r){if(/%$/.test(e))return r===o?parseFloat(e)/100:"rgb"===n?255*parseFloat(e)/100:parseFloat(e);if("h"===n[r]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==baseHues[e])return baseHues[e]}return parseFloat(e)})),i===n&&l.push(1),t=s||void 0===l[o]?1:l[o],l=l.slice(0,o)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(l=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),a=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(l=[e[0],e[1],e[2]],a="rgb",t=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(a="rgb",l=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(a="hsl",l=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),t=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(t/=100)):(a="rgb",l=[e>>>16,(65280&e)>>>8,255&e]);return{space:a,values:l,alpha:t}}var colorRgba=function(e){var r;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var a=colorParse(e);if(!a.space)return[];var l=[0,0,0],t="h"===a.space[0]?[360,100,100]:[255,255,255];return(r=Array(3))[0]=Math.min(Math.max(a.values[0],l[0]),t[0]),r[1]=Math.min(Math.max(a.values[1],l[1]),t[1]),r[2]=Math.min(Math.max(a.values[2],l[2]),t[2]),"h"===a.space[0]&&(r=hsl2rgb(r)),r.push(Math.min(Math.max(a.alpha,0),1)),r};function hsl2rgb(e){var r,a,l,t,n,i=e[0]/360,s=e[1]/100,o=e[2]/100,g=0;if(0===s)return[n=255*o,n,n];for(r=2*o-(a=o<.5?o*(1+s):o+s-o*s),t=[0,0,0];g<3;)(l=i+1/3*-(g-1))<0?l++:l>1&&l--,n=6*l<1?r+6*(a-r)*l:2*l<1?a:3*l<2?r+(a-r)*(2/3-l)*6:r,t[g++]=255*n;return t}

/***/ }),

/***/ 54174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_badge": () => (/* binding */ KolBadge)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69379);
/* harmony import */ var _a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95934);
/* harmony import */ var _prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14282);
/* harmony import */ var _label_f8bdc301_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48034);
/* harmony import */ var _index_d14da386_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80015);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const getContrastYIQ=(t,o,a)=>(299*t+587*o+114*a)/1e3>=128?-1:1,calcColorContrast=(t,o,a,e=1)=>{const r=[Math.max(Math.min(Math.round(o[0]+e*Math.max(1,o[0]/100)),255),0),Math.max(Math.min(Math.round(o[1]+e*Math.max(1,o[1]/100)),255),0),Math.max(Math.min(Math.round(o[2]+e*Math.max(1,o[2]/100)),255),0)],n=(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.c)(_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.r.hex(`rgba(${t.join(",")},1)`),_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.r.hex(`rgba(${r.join(",")},1)`)),i=r[0]+r[1]+r[2];return 0===i||765===i||n>a?{background:t,foreground:r,contrast:n}:calcColorContrast(t,r,a,e)},cache=new Map,getColorContrast=(t,o,a,e=1)=>{if(cache.has(t))return cache.get(t);const r=calcColorContrast(t,o,a,e);return cache.set(t,r),r},createContrastColorPair=(t,o=7)=>{let a=[0,0,0,1],e=[255,255,255,1];"string"==typeof t?(a=(0,_index_d14da386_js__WEBPACK_IMPORTED_MODULE_1__.c)(t),e=a):"object"==typeof t&&null!==t&&"string"==typeof t.background&&"string"==typeof t.foreground&&(a=(0,_index_d14da386_js__WEBPACK_IMPORTED_MODULE_1__.c)(t.background),e="string"==typeof t.foreground?(0,_index_d14da386_js__WEBPACK_IMPORTED_MODULE_1__.c)(t.foreground):a);const r=(n=a[0],s=a[1],i=a[2],(299*n+587*s+114*i)/1e3>=128?-1:1);var n,s,i;const l=getColorContrast([a[0],a[1],a[2]],[e[0],e[1],e[2]],o,r);return e=[...l.foreground,1],{background:_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.r.hex(`rgba(${a.join(",")})`),foreground:_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.r.hex(`rgba(${e.join(",")})`),contrast:l.contrast}},defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>span{display:inline-flex;place-items:center}:host>span.smart-button>kol-span-wc{border-right:1px solid rgba(0, 0, 0, 0.25)}:host>span>kol-button-wc button{color:inherit}";(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_2__.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const HACK_REG_EX=/^([a-f0-9]{3}|[a-f0-9]{6})$/,KolBadge=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.r)(this,t),this.bgColorStr="#000",this.colorStr="#fff",this.handleColorChange=t=>{let o,a=t;"string"==typeof a?(HACK_REG_EX.test(a)&&((0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_2__.d)("[KolBadge] Bitte verwenden Sie zukünftig nur noch das Standard-Farbformat für CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)."),a=`#${a}`),o=createContrastColorPair(a)):o=createContrastColorPair({background:a.backgroundColor,foreground:a.color}),o.contrast<7&&(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_2__.a)(`[KolBadge] The contrast of ${o.contrast} (≥7, AAA) is too low, between the color pair ${o.background} and ${o.foreground}.`),this.bgColorStr=o.background,this.colorStr=o.foreground},this._color="#000",this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._smartButton=void 0,this.state={_color:"#000",_label:"…"}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label}),"object"==typeof this.state._smartButton&&null!==this.state._smartButton&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)("kol-button-wc",{_ariaLabel:this.state._smartButton._ariaLabel,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_icon:this.state._smartButton._icon,_iconOnly:!0,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant})))}validateColor(t){(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.a)(this,"_color",(t=>"string"==typeof t||"object"==typeof t&&null!==t&&"string"==typeof t.backgroundColor&&"string"==typeof t.color),new Set(["string","KoliBriColor"]),t,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateLabel(t){(0,_label_f8bdc301_js__WEBPACK_IMPORTED_MODULE_4__.v)(this,t,{hooks:{afterPatch:t=>{"string"==typeof t&&t.length>32&&(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_2__.a)(`[KolBadge] The label is too long for a badge (${t.length} > 32).`)}}})}validateSmartButton(t){(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.o)(t,(()=>{try{t=(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.p)(t)}catch(t){}(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.s)(this,"_smartButton",t)}))}componentWillLoad(){this.validateColor(this._color),this.validateLabel(this._label),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_label:["validateLabel"],_smartButton:["validateSmartButton"]}}};KolBadge.style={default:defaultStyleCss};

/***/ }),

/***/ 48034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ validateAriaLabelWithLabel),
/* harmony export */   "b": () => (/* binding */ validateLabelWithAriaLabel),
/* harmony export */   "c": () => (/* binding */ containsOnlyNumbers),
/* harmony export */   "h": () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   "v": () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95934);
/* harmony import */ var _prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14282);
/* harmony import */ var _reuse_56bb5a4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90031);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/,countReadableChars=a=>{var e;return"string"==typeof a&&(null===(e=a.match(READABLE_CHARS))||void 0===e?void 0:e.length)||0},hasEnoughReadableChars=(a,e=1)=>countReadableChars(a)>=e,containsOnlyNumbers=a=>ONLY_NUMBERS.test(a),syncAriaLabelBeforePatch=(a,e,i,t)=>{const r=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof r){const a=e.has("_label")?e.get("_label"):i.state._label;!1===(0,_reuse_56bb5a4b_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,r)&&("_ariaLabel"===t?e.set("_label",r):e.set("_ariaLabel",void 0),(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(a,e,i={})=>{var t;(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_ariaLabel",e,{hooks:{afterPatch:(a,e,t,r)=>{var s,l;"function"==typeof(null===(s=i.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(l=i.hooks)||void 0===l||l.afterPatch(a,e,t,r)),"string"==typeof a&&a.length>0&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein abweichendes Aria-Label (${a}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch}})},validateAriaLabelWithLabel=(a,e)=>{validateAriaLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(a,e,i={})=>{var t;(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_label",e,{hooks:{afterPatch:(a,e,t,r)=>{var s,l;"function"==typeof(null===(s=i.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(l=i.hooks)||void 0===l||l.afterPatch(a,e,t,r)),"string"==typeof a&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein Label (${a}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch},required:!0})},validateLabelWithAriaLabel=(a,e)=>{validateLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})};

/***/ })

};
;