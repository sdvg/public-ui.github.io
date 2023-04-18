/*! For license information please see 729.2bc316d7.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[729],{75558:(e,t,a)=>{a.d(t,{c:()=>i});var r={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},o=function(e){var t,a,o=[],i=1;if("string"==typeof e)if(r[e])o=r[e].slice(),a="rgb";else if("transparent"===e)i=0,a="rgb",o=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var l=e.slice(1);i=1,(u=l.length)<=4?(o=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===u&&(i=parseInt(l[3]+l[3],16)/255)):(o=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===u&&(i=parseInt(l[6]+l[7],16)/255)),o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0),a="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=t[1],h="rgb"===s;a=l=s.replace(/a$/,"");var u="cmyk"===l?4:"gray"===l?1:3;o=t[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,t){if(/%$/.test(e))return t===u?parseFloat(e)/100:"rgb"===l?255*parseFloat(e)/100:parseFloat(e);if("h"===l[t]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==n[e])return n[e]}return parseFloat(e)})),s===l&&o.push(1),i=h||void 0===o[u]?1:o[u],o=o.slice(0,u)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(o=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),a=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(o=[e[0],e[1],e[2]],a="rgb",i=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(a="rgb",o=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(a="hsl",o=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),i=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(i/=100)):(a="rgb",o=[e>>>16,(65280&e)>>>8,255&e]);return{space:a,values:o,alpha:i}},n={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var i=function(e){var t;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var a=o(e);if(!a.space)return[];var r=[0,0,0],n="h"===a.space[0]?[360,100,100]:[255,255,255];return(t=Array(3))[0]=Math.min(Math.max(a.values[0],r[0]),n[0]),t[1]=Math.min(Math.max(a.values[1],r[1]),n[1]),t[2]=Math.min(Math.max(a.values[2],r[2]),n[2]),"h"===a.space[0]&&(t=l(t)),t.push(Math.min(Math.max(a.alpha,0),1)),t};function l(e){var t,a,r,o,n,i=e[0]/360,l=e[1]/100,s=e[2]/100,h=0;if(0===l)return[n=255*s,n,n];for(t=2*s-(a=s<.5?s*(1+l):s+l-s*l),o=[0,0,0];h<3;)(r=i+1/3*-(h-1))<0?r++:r>1&&r--,n=6*r<1?t+6*(a-t)*r:2*r<1?a:3*r<2?t+(a-t)*(2/3-r)*6:t,o[h++]=255*n;return o}},70729:(e,t,a)=>{a.r(t),a.d(t,{kol_badge:()=>c});var r=a(64521),o=a(51200),n=a(71689),i=a(41244),l=a(75558);const s=(e,t,a,r=1)=>{const o=[Math.max(Math.min(Math.round(t[0]+r*Math.max(1,t[0]/100)),255),0),Math.max(Math.min(Math.round(t[1]+r*Math.max(1,t[1]/100)),255),0),Math.max(Math.min(Math.round(t[2]+r*Math.max(1,t[2]/100)),255),0)],i=(0,n.c)(n.r.hex(`rgba(${e.join(",")},1)`),n.r.hex(`rgba(${o.join(",")},1)`)),l=o[0]+o[1]+o[2];return 0===l||765===l||i>a?{background:e,foreground:o,contrast:i}:s(e,o,a,r)},h=new Map,u=(e,t=7)=>{let a=[0,0,0,1],r=[255,255,255,1];"string"==typeof e?(a=(0,l.c)(e),r=a):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(a=(0,l.c)(e.background),r="string"==typeof e.foreground?(0,l.c)(e.foreground):a);const o=(299*a[0]+587*a[1]+114*a[2])/1e3>=128?-1:1;const i=((e,t,a,r=1)=>{if(h.has(e))return h.get(e);const o=s(e,t,a,r);return h.set(e,o),o})([a[0],a[1],a[2]],[r[0],r[1],r[2]],t,o);return r=[...i.foreground,1],{background:n.r.hex(`rgba(${a.join(",")})`),foreground:n.r.hex(`rgba(${r.join(",")})`),contrast:i.contrast}};(0,o.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const d=/^([a-f0-9]{3}|[a-f0-9]{6})$/,c=class{constructor(e){(0,r.r)(this,e),this.bgColorStr="#000",this.colorStr="#fff",this.handleColorChange=e=>{let t,a=e;"string"==typeof a?(d.test(a)&&((0,o.d)("[KolBadge] Bitte verwenden Sie zuk\xfcnftig nur noch das Standard-Farbformat f\xfcr CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)."),a=`#${a}`),t=u(a)):t=u({background:a.backgroundColor,foreground:a.color}),t.contrast<7&&(0,o.a)(`[KolBadge] The contrast of ${t.contrast} (\u22657, AAA) is too low, between the color pair ${t.background} and ${t.foreground}.`),this.bgColorStr=t.background,this.colorStr=t.foreground},this._color="#000",this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._smartButton=void 0,this.state={_color:"#000",_label:"\u2026"}}render(){return(0,r.h)(r.H,null,(0,r.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,r.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label}),"object"==typeof this.state._smartButton&&null!==this.state._smartButton&&(0,r.h)("kol-button-wc",{_ariaLabel:this.state._smartButton._ariaLabel,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_icon:this.state._smartButton._icon,_iconOnly:!0,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant})))}validateColor(e){(0,n.a)(this,"_color",(e=>"string"==typeof e||"object"==typeof e&&null!==e&&"string"==typeof e.backgroundColor&&"string"==typeof e.color),new Set(["string","KoliBriColor"]),e,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateLabel(e){(0,i.v)(this,e,{hooks:{afterPatch:e=>{"string"==typeof e&&e.length>32&&(0,o.a)(`[KolBadge] The label is too long for a badge (${e.length} > 32).`)}}})}validateSmartButton(e){(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(e){}(0,n.s)(this,"_smartButton",e)}))}componentWillLoad(){this.validateColor(this._color),this.validateLabel(this._label),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_label:["validateLabel"],_smartButton:["validateSmartButton"]}}};c.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>span{display:inline-flex;place-items:center}:host>span>kol-button-wc button{color:inherit}"}},41244:(e,t,a)=>{a.d(t,{a:()=>d,b:()=>g,c:()=>h,h:()=>s,v:()=>c});var r=a(51200),o=a(71689),n=a(95169);const i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(i))||void 0===t?void 0:t.length)||0}(e)>=t}function h(e){return l.test(e)}const u=(e,t,a,o)=>{const i=t.has("_ariaLabel")?t.get("_ariaLabel"):a.state._ariaLabel;if("string"==typeof i){const e=t.has("_label")?t.get("_label"):a.state._label;!1===(0,n.i)(e,i)&&("_ariaLabel"===o?t.set("_label",i):t.set("_ariaLabel",void 0),(0,r.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xfcndern der Barrierefreiheit f\xfcr die Sprachsteuerung mit dem Label-Text beginnen."))}},d=(e,t)=>{((e,t,a={})=>{var n;(0,o.w)(e,"_ariaLabel",t,{hooks:{afterPatch:(e,t,o,n)=>{var i,l;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(e,t,o,n)),"string"==typeof e&&e.length>0&&!1===s(e,3)&&!1===h(e)&&(0,r.a)(`Ein abweichendes Aria-Label (${e}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(n=a.hooks)||void 0===n?void 0:n.beforePatch}})})(e,t,{hooks:{beforePatch:u}})},c=(e,t,a={})=>{var n;(0,o.w)(e,"_label",t,{hooks:{afterPatch:(e,t,o,n)=>{var i,l;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(e,t,o,n)),"string"==typeof e&&!1===s(e,3)&&!1===h(e)&&(0,r.a)(`Ein Label (${e}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(n=a.hooks)||void 0===n?void 0:n.beforePatch},required:!0})},g=(e,t)=>{c(e,t,{hooks:{beforePatch:u}})}}}]);