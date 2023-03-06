/*! For license information please see 773.4f3235a1.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[773],{64169:(e,t,r)=>{r.d(t,{c:()=>i});var o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},n=function(e){var t,r,n=[],i=1;if("string"==typeof e)if(o[e])n=o[e].slice(),r="rgb";else if("transparent"===e)i=0,r="rgb",n=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var l=e.slice(1);i=1,(d=l.length)<=4?(n=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===d&&(i=parseInt(l[3]+l[3],16)/255)):(n=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===d&&(i=parseInt(l[6]+l[7],16)/255)),n[0]||(n[0]=0),n[1]||(n[1]=0),n[2]||(n[2]=0),r="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=t[1],c="rgb"===s;r=l=s.replace(/a$/,"");var d="cmyk"===l?4:"gray"===l?1:3;n=t[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,t){if(/%$/.test(e))return t===d?parseFloat(e)/100:"rgb"===l?255*parseFloat(e)/100:parseFloat(e);if("h"===l[t]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==a[e])return a[e]}return parseFloat(e)})),s===l&&n.push(1),i=c||void 0===n[d]?1:n[d],n=n.slice(0,d)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(n=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),r=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(n=[e[0],e[1],e[2]],r="rgb",i=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(r="rgb",n=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(r="hsl",n=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),i=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(i/=100)):(r="rgb",n=[e>>>16,(65280&e)>>>8,255&e]);return{space:r,values:n,alpha:i}},a={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var i=function(e){var t;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var r=n(e);if(!r.space)return[];var o=[0,0,0],a="h"===r.space[0]?[360,100,100]:[255,255,255];return(t=Array(3))[0]=Math.min(Math.max(r.values[0],o[0]),a[0]),t[1]=Math.min(Math.max(r.values[1],o[1]),a[1]),t[2]=Math.min(Math.max(r.values[2],o[2]),a[2]),"h"===r.space[0]&&(t=l(t)),t.push(Math.min(Math.max(r.alpha,0),1)),t};function l(e){var t,r,o,n,a,i=e[0]/360,l=e[1]/100,s=e[2]/100,c=0;if(0===l)return[a=255*s,a,a];for(t=2*s-(r=s<.5?s*(1+l):s+l-s*l),n=[0,0,0];c<3;)(o=i+1/3*-(c-1))<0?o++:o>1&&o--,a=6*o<1?t+6*(r-t)*o:2*o<1?r:3*o<2?t+(r-t)*(2/3-o)*6:t,n[c++]=255*a;return n}},20773:(e,t,r)=>{r.r(t),r.d(t,{kol_badge:()=>h});var o=r(61126),n=r(57274),a=r(56538),i=r(64507),l=r(64169);const s=(e,t,r,o=1)=>{const n=[Math.max(Math.min(Math.round(t[0]+o*Math.max(1,t[0]/100)),255),0),Math.max(Math.min(Math.round(t[1]+o*Math.max(1,t[1]/100)),255),0),Math.max(Math.min(Math.round(t[2]+o*Math.max(1,t[2]/100)),255),0)],i=(0,a.c)(a.r.hex(`rgba(${e.join(",")},1)`),a.r.hex(`rgba(${n.join(",")},1)`)),l=n[0]+n[1]+n[2];return 0===l||765===l||i>r?{background:e,foreground:n,contrast:i}:s(e,n,r,o)},c=new Map,d=(e,t=7)=>{let r=[0,0,0,1],o=[255,255,255,1];"string"==typeof e?(r=(0,l.c)(e),o=r):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(r=(0,l.c)(e.background),o="string"==typeof e.foreground?(0,l.c)(e.foreground):r);const n=(299*r[0]+587*r[1]+114*r[2])/1e3>=128?-1:1;const i=((e,t,r,o=1)=>{if(c.has(e))return c.get(e);const n=s(e,t,r,o);return c.set(e,n),n})([r[0],r[1],r[2]],[o[0],o[1],o[2]],t,n);return o=[...i.foreground,1],{background:a.r.hex(`rgba(${r.join(",")})`),foreground:a.r.hex(`rgba(${o.join(",")})`),contrast:i.contrast}};(0,n.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const u=/^([a-f0-9]{3}|[a-f0-9]{6})$/,h=class{constructor(e){(0,o.r)(this,e),this.bgColorStr="#000",this.colorStr="#fff",this.handleColorChange=e=>{let t,r=e;"string"==typeof r?(u.test(r)&&((0,n.d)("[KolBadge] Bitte verwenden Sie zuk\xfcnftig nur noch das Standard-Farbformat f\xfcr CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)."),r=`#${r}`),t=d(r)):t=d({background:r.backgroundColor,foreground:r.color}),t.contrast<7&&(0,n.a)(`[KolBadge] The contrast of ${t.contrast} (\u22657, AAA) is too low, between the color pair ${t.background} and ${t.foreground}.`),this.bgColorStr=t.background,this.colorStr=t.foreground},this._color="#000",this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._smartButton=void 0,this.state={_color:"#000",_label:""}}render(){return(0,o.h)(o.H,null,(0,o.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,o.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label}),"object"==typeof this.state._smartButton&&null!==this.state._smartButton&&(0,o.h)("kol-button-wc",{_ariaLabel:this.state._smartButton._ariaLabel,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_icon:this.state._smartButton._icon,_iconOnly:!0,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant})))}validateColor(e){(0,a.a)(this,"_color",(e=>"string"==typeof e||"object"==typeof e&&null!==e&&"string"==typeof e.backgroundColor&&"string"==typeof e.color),new Set(["string","KoliBriColor"]),e,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateLabel(e){(0,i.v)(this,e,{hooks:{afterPatch:e=>{"string"==typeof e&&e.length>32&&(0,n.a)(`[KolBadge] The label is too long for a badge (${e.length} > 32).`)}}})}validateSmartButton(e){(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(e){}(0,a.s)(this,"_smartButton",e)}))}componentWillLoad(){this.validateColor(this._color),this.validateLabel(this._label),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_label:["validateLabel"],_smartButton:["validateSmartButton"]}}};h.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}:host{display:inline-block}:host>span{border-radius:var(--kolibri-border-radius);display:flex;line-height:calc(1rem + var(--kolibri-spacing));place-items:center}:host>span kol-span-wc{padding:var(--kolibri-spacing) calc(2 * var(--kolibri-spacing))}:host>span>kol-span-wc{align-items:center;font-style:normal;gap:calc(2 * var(--kolibri-spacing))}:host>span.smart-button>kol-span-wc{border-right:1px solid rgba(0, 0, 0, 0.25)}:host>span>kol-span-wc>span{display:flex;gap:var(--kolibri-spacing)}:host>span>kol-button-wc button{border-radius:0 var(--kolibri-spacing) var(--kolibri-spacing) 0;color:inherit}"}},64507:(e,t,r)=>{r.d(t,{a:()=>u,b:()=>g,c:()=>c,h:()=>s,v:()=>h});var o=r(57274),n=r(56538),a=r(61097);const i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/,s=(e,t=1)=>(e=>{var t;return"string"==typeof e&&(null===(t=e.match(i))||void 0===t?void 0:t.length)||0})(e)>=t,c=e=>l.test(e),d=(e,t,r,n)=>{const i=t.has("_ariaLabel")?t.get("_ariaLabel"):r.state._ariaLabel;if("string"==typeof i){const e=t.has("_label")?t.get("_label"):r.state._label;!1===(0,a.i)(e,i)&&("_ariaLabel"===n?t.set("_label",i):t.set("_ariaLabel",e),(0,o.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xfcndern der Barrierefreiheit f\xfcr die Sprachsteuerung mit dem Label-Text beginnen."))}},u=(e,t)=>{((e,t,r={})=>{var a;(0,n.w)(e,"_ariaLabel",t,{hooks:{afterPatch:(e,t,n,a)=>{var i,l;"function"==typeof(null===(i=r.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(l=r.hooks)||void 0===l||l.afterPatch(e,t,n,a)),"string"==typeof e&&e.length>0&&!1===s(e,3)&&!1===c(e)&&(0,o.a)(`Ein abweichendes Aria-Label (${e}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(a=r.hooks)||void 0===a?void 0:a.beforePatch}})})(e,t,{hooks:{beforePatch:d}})},h=(e,t,r={})=>{var a;(0,n.w)(e,"_label",t,{hooks:{afterPatch:(e,t,n,a)=>{var i,l;"function"==typeof(null===(i=r.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(l=r.hooks)||void 0===l||l.afterPatch(e,t,n,a)),"string"==typeof e&&!1===s(e,3)&&!1===c(e)&&(0,o.a)(`Ein Label (${e}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(a=r.hooks)||void 0===a?void 0:a.beforePatch},required:!0})},g=(e,t)=>{h(e,t,{hooks:{beforePatch:d}})}},56538:(e,t,r)=>{r.d(t,{K:()=>re,a:()=>P,b:()=>$,c:()=>L,d:()=>j,e:()=>q,f:()=>B,g:()=>C,h:()=>J,i:()=>ee,j:()=>K,k:()=>W,l:()=>te,m:()=>D,n:()=>Y,o:()=>N,p:()=>R,q:()=>U,r:()=>c,s:()=>E,t:()=>Q,u:()=>I,w:()=>O});var o=r(91836),n=r(57274),a=r(50696);const i=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;i(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;i(r,l(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=s(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,u=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=p(e)).length&&t.push(255);var t,r=255==t[3],o=m(t[0]),n=m(t[1]),a=m(t[2]),i=function(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}(o,n,a,t=m(Math.round(t[3])));return r?i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t},f=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=y(t[0]),n=y(t[1]),a=y(t[2]),i=3==r?255:y(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=y(t.slice(0,2)),n=y(t.slice(2,4)),a=y(t.slice(4,6)),i=6==r?255:y(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=v(t[0],!0),o=v(t[1],!0),n=v(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=v(t[0],!0),o=v(t[1],!0),n=v(t[2],!0),a=v(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),r=v(e[1],!0),o=v(e[2],!0),n=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=h,c.hex=g,c.num=f;var k=1/12.92;function w(e){return Math.pow((e+.055)/1.055,2.4)}function S(e){var t=e[0]/255,r=e[1]/255,o=e[2]/255;return.2126*(t<=.03928?t*k:w(t))+.7152*(r<=.03928?r*k:w(r))+.0722*(o<=.03928?o*k:w(o))}function _(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function x(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(S(e),S(t))}function L(e,t){return x(_(e),_(t))}function M(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const A=/\[object Object\]/,N=(e,t)=>{"string"==typeof e&&A.test(e)||t()},C=(e,t)=>{"string"==typeof e&&""===e||t()},B=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},E=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},P=(e,t,r,o,a,i={})=>{r(a)?E(e,t,a,null==i?void 0:i.hooks):void 0===a||null===a&&(void 0===(null==i?void 0:i.required)||!1===(null==i?void 0:i.required))?E(e,t,null==i?void 0:i.defaultValue,null==i?void 0:i.hooks):(void 0!==(null==i?void 0:i.required)&&!1!==(null==i?void 0:i.required)||o.add(null),((e,t,r,o)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,a,o))},$=(e,t,r,o)=>{P(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},O=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;P(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},q=(e,t,r,o)=>{P(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},j=(e,t,r,o,n=(e=>e==e),i={})=>{C(o,(()=>{N(o,(()=>{void 0===o&&(o=[]);try{try{o=R(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&n(o)?E(e,t,o,i.hooks):N(l,(()=>{throw a.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else N(o,(()=>{throw a.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},H=/^(true|false)$/,T=/^-?(0|[1-9]\d*)$/,z=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,D=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(H.test(e))e="true"===e;else if(T.test(e))e=parseInt(e);else if(z.test(e))e=parseFloat(e);else if(F.test(e))try{e=R(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},I=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,R=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(F.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},J=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,K=e=>"string"==typeof e?e:J(e),W=(e,t)=>s(e,t||(0,a.g)()),U=(e,t)=>l(e,t||(0,a.g)());let V=null;const Z=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},V),G=/(\d+, ){3}0\)/,Y=(e,t=Z())=>{const r=getComputedStyle(e),o=G.test(r.backgroundColor)?t.backgroundColor:c.hex(r.backgroundColor),n=G.test(r.color)?t.color:c.hex(r.color),i=L(o,n),l={backgroundColor:o,color:n,domNode:e,level:M(i),score:i};return i<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},Q=(e,t=Z())=>{t.domNode instanceof HTMLElement&&(t=Y(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=Q(e,t)).domNode);o++);return t}return Y(r,t)},X=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=W(e,t);r instanceof HTMLElement?X(r):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===te.executionLock)if(!1===r&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const i=Array.from(r);for(let l=0;l<i.length;l++){let r=te.cache.get(i[l]);void 0===r&&(r=Y(i[l],t)),te.cache.set(i[l],r);const o=te.queryHtmlElementColors(e,r,!0,!1);if(null!==o){n=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),n}}te.executionLock=!1,te.cache=new Map;class re{}re.patchTheme=o.p,re.patchThemeTag=o.a,re.querySelector=W,re.querySelectorAll=U,re.scrollByHTMLElement=X,re.scrollBySelector=ee,re.stringifyJson=I}}]);