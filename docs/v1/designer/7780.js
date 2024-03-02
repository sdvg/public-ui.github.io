"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7780],{85223:(e,r,t)=>{t.d(r,{c:()=>s,h:()=>m,v:()=>y});var o=t(88126),a=t(81851),n={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},i={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},l=function(e){var r,t,o=[],a=1;if("string"==typeof e)if(e=e.toLowerCase(),n[e])o=n[e].slice(),t="rgb";else if("transparent"===e)a=0,t="rgb",o=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var l=e.slice(1);a=1,(d=l.length)<=4?(o=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===d&&(a=parseInt(l[3]+l[3],16)/255)):(o=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===d&&(a=parseInt(l[6]+l[7],16)/255)),o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0),t="rgb"}else if(r=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=r[1],u="rgb"===s;t=l=s.replace(/a$/,"");var d="cmyk"===l?4:"gray"===l?1:3;o=r[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,r){if(/%$/.test(e))return r===d?parseFloat(e)/100:"rgb"===l?255*parseFloat(e)/100:parseFloat(e);if("h"===l[r]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==i[e])return i[e]}return parseFloat(e)})),s===l&&o.push(1),a=u||void 0===o[d]?1:o[d],o=o.slice(0,d)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(o=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),t=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(o=[e[0],e[1],e[2]],t="rgb",a=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(t="rgb",o=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(t="hsl",o=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),a=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(a/=100)):(t="rgb",o=[e>>>16,(65280&e)>>>8,255&e]);return{space:t,values:o,alpha:a}};const s=function(e){var r;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var t=l(e);if(!t.space)return[];var o=[0,0,0],a="h"===t.space[0]?[360,100,100]:[255,255,255];return(r=Array(3))[0]=Math.min(Math.max(t.values[0],o[0]),a[0]),r[1]=Math.min(Math.max(t.values[1],o[1]),a[1]),r[2]=Math.min(Math.max(t.values[2],o[2]),a[2]),"h"===t.space[0]&&(r=function(e){var r,t,o,a,n,i=e[0]/360,l=e[1]/100,s=e[2]/100,u=0;if(0===l)return[n=255*s,n,n];for(r=2*s-(t=s<.5?s*(1+l):s+l-s*l),a=[0,0,0];u<3;)(o=i+1/3*-(u-1))<0?o++:o>1&&o--,n=6*o<1?r+6*(t-r)*o:2*o<1?t:3*o<2?r+(t-r)*(2/3-o)*6:r,a[u++]=255*n;return a}(r)),r.push(Math.min(Math.max(t.alpha,0),1)),r},u=(e,r,t,a=1)=>{const n=[Math.max(Math.min(Math.round(r[0]+a*Math.max(1,r[0]/100)),255),0),Math.max(Math.min(Math.round(r[1]+a*Math.max(1,r[1]/100)),255),0),Math.max(Math.min(Math.round(r[2]+a*Math.max(1,r[2]/100)),255),0)],i=(0,o.b)(o.r.hex(`rgba(${e.join(",")},1)`),o.r.hex(`rgba(${n.join(",")},1)`)),l=n[0]+n[1]+n[2];return 0===l||765===l||i>t?{background:e,foreground:n,contrast:i}:u(e,n,t,a)},d=new Map,c=(e,r=7)=>{let t=[0,0,0,1],a=[255,255,255,1];"string"==typeof e?(t=s(e),a=t):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(t=s(e.background),a="string"==typeof e.foreground?s(e.foreground):t);const n=((e,r,t)=>(299*e+587*r+114*t)/1e3>=128?-1:1)(t[0],t[1],t[2]),i=((e,r,t,o=1)=>{if(d.has(e))return d.get(e);const a=u(e,r,t,o);return d.set(e,a),a})([t[0],t[1],t[2]],[a[0],a[1],a[2]],r,n);return a=[...i.foreground,1],{background:o.r.hex(`rgba(${t.join(",")})`),foreground:o.r.hex(`rgba(${a.join(",")})`),contrast:i.contrast}},h=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function g(e){if(e)if("string"==typeof e){if(function(e){return h.test(e)}(e))return{type:"string",valid:!0,value:e};{const r=function(e){if(e.startsWith("{"))try{const r=JSON.parse(e);if(p(r))return{type:"ColorPair",value:r};if(b(r))return{type:"DeprecatedColorPair",value:r}}catch(e){return{type:null,value:null}}return{type:null,value:null}}(e);if(r.value)return{type:r.type,valid:!0,value:r.value}}}else{const r=e;if(p(r))return{type:"ColorPair",valid:!0,value:r};const t=e;if(b(t))return{type:"DeprecatedColorPair",valid:!0,value:t}}return{type:null,valid:!1,value:""}}function p(e){return!("object"!=typeof e||!e||"string"!=typeof e.backgroundColor||!("string"==typeof e.foregroundColor||e.foregroundColor&&"string"==typeof e.foregroundColor.primary&&"string"==typeof e.foregroundColor.secondary&&"string"==typeof e.foregroundColor.neutral))}function b(e){return"object"==typeof e&&e&&"string"==typeof e.backgroundColor&&"string"==typeof e.color}function f(e){const r=g(e);switch(r.type){case null:return!1;case"string":case"ColorPair":case"DeprecatedColorPair":return r.valid}}const y=(e,r,t)=>{(0,o.w)(e,"_color",f,new Set(["rgb in hex","ColorPair"]),r,t)},m=e=>{var r;let t;const o=g(e);switch(o.type){case"string":t=c(o.value);break;case"ColorPair":case"DeprecatedColorPair":{const e=o.value,a=o.value;let n="";a.color?n=a.color:"string"==typeof e.foregroundColor?n=e.foregroundColor:(null===(r=e.foregroundColor)||void 0===r?void 0:r.primary)&&(n=e.foregroundColor.primary),n&&"string"==typeof n||(n="#fff"),t=c({background:e.backgroundColor,foreground:n});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(e)})`),t=c({background:"#000",foreground:"#000"})}return t.contrast<7&&(0,a.a)(`[KolBadge] The contrast of ${t.contrast} (≥7, AAA) is to low, between the color pair ${t.background} and ${t.foreground}.`),{backgroundColor:t.background,foregroundColor:t.foreground}}},27780:(e,r,t)=>{t.r(r),t.d(r,{kol_badge:()=>s});var o=t(95026),a=t(85223),n=t(81851),i=t(66430),l=t(88126);(0,n.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const s=class{constructor(e){(0,o.r)(this,e),this.bgColorStr="#000",this.colorStr="#fff",this.id=(0,i.n)(),this.handleColorChange=e=>{const r=(0,a.h)(e);this.bgColorStr=r.backgroundColor,this.colorStr=r.foregroundColor},this._color="#000",this._hideLabel=!1,this._icon=void 0,this._icons=void 0,this._iconOnly=void 0,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"}}}renderSmartButton(e){return(0,o.h)("kol-button-wc",{_ariaControls:this.id,_customClass:e._customClass,_disabled:e._disabled,_hideLabel:!0,_icons:e._icons||e._icon,_id:e._id,_label:e._label,_on:e._on,_tooltipAlign:e._tooltipAlign,_variant:e._variant})}render(){const e="object"==typeof this.state._smartButton&&null!==this.state._smartButton;return(0,o.h)(o.H,{key:"bf9258dcf78d52dbe6070a5e03749314fc2ce564"},(0,o.h)("span",{key:"98823cb251327b9901738970b6782fe181499d33",class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,o.h)("kol-span-wc",{key:"4e5e765ebc23034ca6932377f3788d01a3ffab4c",id:e?this.id:void 0,_allowMarkdown:!0,_hideLabel:this._hideLabel||this._iconOnly,_icons:this._icons||this._icon,_label:this._label}),e&&this.renderSmartButton(this.state._smartButton)))}validateColor(e){(0,a.v)(this,e,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateSmartButton(e){(0,l.o)(e,(()=>{try{e=(0,l.p)(e)}catch(e){}(0,l.s)(this,"_smartButton",e)}))}componentWillLoad(){this.validateColor(this._color),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_smartButton:["validateSmartButton"]}}};s.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host>span{display:inline-flex;place-items:center}:host>span>kol-button-wc button{color:inherit}"}}}]);