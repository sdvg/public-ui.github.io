/*! For license information please see 37276.98f7cc47.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[37276],{27520:(e,r,t)=>{t.d(r,{a:()=>a,b:()=>h,c:()=>p,d:()=>i,e:()=>f,f:()=>c,g:()=>s,u:()=>g});var n=t(40480);const o=new Set,a=(e,r)=>{(!1===o.has(e)||(null==r?void 0:r.force))&&(o.add(e),n.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,i=(e,r)=>{(!1===l.has(e)||(null==r?void 0:r.force))&&(l.add(e),n.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},s=(e,r)=>{(!1===l.has(e)||(null==r?void 0:r.force))&&(l.add(e),n.L.warn([e].concat((null==r?void 0:r.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,c=(e,r=!1,t)=>{(!1===u.has(e)||(null==t?void 0:t.force))&&(u.add(e),e+=!0===r?" \u2705":"",n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};i("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const d=new Set,g=(e,r)=>{(!1===d.has(e)||(null==r?void 0:r.force))&&(d.add(e),n.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},f=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},h=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,r=8)=>{r>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},37276:(e,r,t)=>{t.d(r,{c:()=>s,h:()=>y,v:()=>b});var n=t(28854),o=t(27520),a={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},l=function(e){var r,t,n=[],o=1;if("string"==typeof e)if(e=e.toLowerCase(),a[e])n=a[e].slice(),t="rgb";else if("transparent"===e)o=0,t="rgb",n=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var l=e.slice(1);o=1,(c=l.length)<=4?(n=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===c&&(o=parseInt(l[3]+l[3],16)/255)):(n=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===c&&(o=parseInt(l[6]+l[7],16)/255)),n[0]||(n[0]=0),n[1]||(n[1]=0),n[2]||(n[2]=0),t="rgb"}else if(r=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=r[1],u="rgb"===s;t=l=s.replace(/a$/,"");var c="cmyk"===l?4:"gray"===l?1:3;n=r[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,r){if(/%$/.test(e))return r===c?parseFloat(e)/100:"rgb"===l?255*parseFloat(e)/100:parseFloat(e);if("h"===l[r]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==i[e])return i[e]}return parseFloat(e)})),s===l&&n.push(1),o=u||void 0===n[c]?1:n[c],n=n.slice(0,c)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(n=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),t=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(n=[e[0],e[1],e[2]],t="rgb",o=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(t="rgb",n=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(t="hsl",n=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),o=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(o/=100)):(t="rgb",n=[e>>>16,(65280&e)>>>8,255&e]);return{space:t,values:n,alpha:o}},i={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var s=function(e){var r;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var t=l(e);if(!t.space)return[];var n=[0,0,0],o="h"===t.space[0]?[360,100,100]:[255,255,255];return(r=Array(3))[0]=Math.min(Math.max(t.values[0],n[0]),o[0]),r[1]=Math.min(Math.max(t.values[1],n[1]),o[1]),r[2]=Math.min(Math.max(t.values[2],n[2]),o[2]),"h"===t.space[0]&&(r=function(e){var r,t,n,o,a,l=e[0]/360,i=e[1]/100,s=e[2]/100,u=0;if(0===i)return[a=255*s,a,a];for(r=2*s-(t=s<.5?s*(1+i):s+i-s*i),o=[0,0,0];u<3;)(n=l+1/3*-(u-1))<0?n++:n>1&&n--,a=6*n<1?r+6*(t-r)*n:2*n<1?t:3*n<2?r+(t-r)*(2/3-n)*6:r,o[u++]=255*a;return o}(r)),r.push(Math.min(Math.max(t.alpha,0),1)),r};const u=(e,r,t,o=1)=>{const a=[Math.max(Math.min(Math.round(r[0]+o*Math.max(1,r[0]/100)),255),0),Math.max(Math.min(Math.round(r[1]+o*Math.max(1,r[1]/100)),255),0),Math.max(Math.min(Math.round(r[2]+o*Math.max(1,r[2]/100)),255),0)],l=(0,n.b)(n.r.hex(`rgba(${e.join(",")},1)`),n.r.hex(`rgba(${a.join(",")},1)`)),i=a[0]+a[1]+a[2];return 0===i||765===i||l>t?{background:e,foreground:a,contrast:l}:u(e,a,t,o)},c=new Map,d=(e,r=7)=>{let t=[0,0,0,1],o=[255,255,255,1];"string"==typeof e?(t=s(e),o=t):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(t=s(e.background),o="string"==typeof e.foreground?s(e.foreground):t);const a=((e,r,t)=>(299*e+587*r+114*t)/1e3>=128?-1:1)(t[0],t[1],t[2]),l=((e,r,t,n=1)=>{if(c.has(e))return c.get(e);const o=u(e,r,t,n);return c.set(e,o),o})([t[0],t[1],t[2]],[o[0],o[1],o[2]],r,a);return o=[...l.foreground,1],{background:n.r.hex(`rgba(${t.join(",")})`),foreground:n.r.hex(`rgba(${o.join(",")})`),contrast:l.contrast}},g=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function f(e){if(e)if("string"==typeof e){if(function(e){return g.test(e)}(e))return{type:"string",valid:!0,value:e};{const r=function(e){if(e.startsWith("{"))try{const r=JSON.parse(e);if(h(r))return{type:"ColorPair",value:r}}catch(e){return{type:null,value:null}}return{type:null,value:null}}(e);if(r.value)return{type:r.type,valid:!0,value:r.value}}}else{const r=e;if(h(r))return{type:"ColorPair",valid:!0,value:r}}return{type:null,valid:!1,value:""}}function h(e){return!("object"!=typeof e||!e||"string"!=typeof e.backgroundColor||!("string"==typeof e.foregroundColor||e.foregroundColor&&"string"==typeof e.foregroundColor.primary&&"string"==typeof e.foregroundColor.secondary&&"string"==typeof e.foregroundColor.neutral))}function p(e){const r=f(e);switch(r.type){case null:return!1;case"string":case"ColorPair":return r.valid}}const b=(e,r,t)=>{(0,n.w)(e,"_color",p,new Set(["rgb in hex","ColorPair"]),r,t)},y=e=>{var r;let t;const n=f(e);switch(n.type){case"string":t=d(n.value);break;case"ColorPair":{const e=n.value;let o="";"string"==typeof e.foregroundColor?o=e.foregroundColor:(null===(r=e.foregroundColor)||void 0===r?void 0:r.primary)&&(o=e.foregroundColor.primary),o&&"string"==typeof o||(o="#fff"),t=d({background:e.backgroundColor,foreground:o});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(e)})`),t=d({background:"#000",foreground:"#000"})}return t.contrast<7&&(0,o.a)(`[KolBadge] The contrast of ${t.contrast} (\u22657, AAA) is to low, between the color pair ${t.background} and ${t.foreground}.`),{backgroundColor:t.background,foregroundColor:t.foreground}}},28854:(e,r,t)=>{t.d(r,{K:()=>ne,a:()=>D,b:()=>L,c:()=>z,d:()=>I,e:()=>T,f:()=>q,g:()=>O,h:()=>U,i:()=>Z,j:()=>te,k:()=>V,l:()=>ee,m:()=>W,n:()=>G,o:()=>j,p:()=>K,q:()=>re,r:()=>s,s:()=>E,t:()=>B,w:()=>H});var n=t(40480),o=t(27520);const a=(e,r)=>{r.forEach((r=>{!1===e.has(r)&&e.add(r)}))},l=(e,r=document)=>{if(r instanceof Document||r instanceof HTMLElement||r instanceof ShadowRoot){const t=new Set;a(t,r.querySelectorAll(e));const n=r.querySelectorAll('[class*="hydrated"]');for(let r=0;r<n.length;r++){const o=n[r].shadowRoot;a(t,l(e,"object"==typeof o&&null!==o?o:n[r]))}return Array.from(t)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},i=(e,r=document)=>{if(r instanceof Document||r instanceof HTMLElement||r instanceof ShadowRoot){let t=r.querySelector(e);if(null===t){const n=r.querySelectorAll('[class*="hydrated"]');for(let r=0;r<n.length;r++){const o=n[r].shadowRoot;if(t=i(e,"object"==typeof o&&null!==o?o:n[r]),null!==t)break}}return t}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var s=h,u=h,c=function(e){var r=p(e);return{r:r[0],g:r[1],b:r[2],a:3==r.length?255:Math.round(r[3])}},d=function(e){var r=p(e);return 3==r.length&&r.push(255),255==r[3]?"rgb("+r[0]+", "+r[1]+", "+r[2]+")":0==r[3]?"rgba("+r[0]+", "+r[1]+", "+r[2]+", 0)":"rgba("+r[0]+", "+r[1]+", "+r[2]+", "+String(r[3]/255).substr(1)+")"},g=function(e){3==(r=p(e)).length&&r.push(255);var r,t=255==r[3],n=b(r[0]),o=b(r[1]),a=b(r[2]),l=function(e,r,t,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(r)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)}(n,o,a,r=b(Math.round(r[3])));return t?l?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0):"#"+n+o+a:l?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0)+r.charAt(0):"#"+n+o+a+r},f=function(e){var r=p(e);return 3==r.length?r.push(255):r[3]=Math.round(r[3]),(r[3]<<24>>>0|r[0]<<16|r[1]<<8|r[2])>>>0};function h(e){var r=p(e);return 3==r.length?r.concat(255):(r[3]=Math.round(r[3]),r)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var r=e.replace(/^#/,""),t=r.length;if(3==t||4==t){var n=y(r[0]),o=y(r[1]),a=y(r[2]),l=3==t?255:y(r[3]);if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(l))return;return[n,o,a,l]}}(e)||function(e){var r=e.replace(/^#/,""),t=r.length;if(6==t||8==t){var n=y(r.slice(0,2)),o=y(r.slice(2,4)),a=y(r.slice(4,6)),l=6==t?255:y(r.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(l))return;return[n,o,a,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var r=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=m(r[0],!0),n=m(r[1],!0),o=m(r[2],!0);if(-1!=t&&-1!=n&&-1!=o)return[t,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var r=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=m(r[0],!0),n=m(r[1],!0),o=m(r[2],!0),a=m(255*r[3]);if(-1!=t&&-1!=n&&-1!=o&&-1!=a)return[t,n,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var r=m(null!=e.r?e.r:null!=e.red?e.red:0,!0),t=m(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=m(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=m(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=r&&-1!=t&&-1!=n&&-1!=o)return[r,t,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var r=m(e[0],!0),t=m(e[1],!0),n=m(e[2],!0),o=m(null!=e[3]?e[3]:255,!0);if(-1!=r&&-1!=t&&-1!=n&&-1!=o)return[r,t,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var r=e.toString(16);return 1==r.length?"0"+r:r}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function m(e,r){return"number"!=typeof e||!0===r&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}s.arr=u,s.obj=c,s.css=d,s.hex=g,s.num=f;var v=.2126,w=.7152,k=.0722,S=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function N(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255,o=r<=.03928?r*S:x(r),a=t<=.03928?t*S:x(t),l=n<=.03928?n*S:x(n);return o*v+a*w+l*k}function M(e){var r=255;8===(e=e.replace(/^#/,"")).length&&(r=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(r=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,r]}function A(e,r){return function(e,r){return(Math.max(e,r)+.05)/(Math.min(e,r)+.05)}(N(e),N(r))}function L(e,r){return A(M(e),M(r))}function C(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const $=/\[object Object\]/,j=(e,r)=>{"string"==typeof e&&$.test(e)||r()},O=(e,r)=>{"string"==typeof e&&""===e||r()},q=(e,r)=>{(0,n.d)()&&(n.L.debug([e,r]),n.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:r,writable:!1})},E=(e,r,t,n={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(r)!==t&&(e.nextHooks.get(r)instanceof Map==0&&e.nextHooks.set(r,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(r))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(r))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(r,t),(e=>{var r,t,n;null===(r=e.nextHooks)||void 0===r||r.forEach(((r,t)=>{var n;const o=r.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(t),e.nextState,e,t)})),(null===(t=e.nextState)||void 0===t?void 0:t.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((r,t)=>{const n=r.get("afterPatch");"function"==typeof n&&n(e.state[t],e.state,e,t)}))),delete e.nextHooks})(e))},P=(e,r,t,n)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${t}) f\xfcr '${r}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)};function H(e,r,t,n,o,a={}){t(o)?E(e,r,o,a.hooks):null!=o||a.required?(a.required||n.add(null),P(e,r,o,n)):E(e,r,a.defaultValue,a.hooks)}const D=(e,r,t,n)=>{H(e,r,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),t,n)},I=(e,r,t,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;H(e,r,(e=>"string"==typeof e&&e.length>=o&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),t,n)},T=(e,r,t,n)=>{H(e,r,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),t,n)},z=(e,r,t,o,a=(e=>e==e),l={})=>{O(o,(()=>{j(o,(()=>{void 0===o&&(o=[]);try{try{o=K(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!t(e)));void 0===i&&a(o)?E(e,r,o,l.hooks):j(i,(()=>{throw n.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else j(o,(()=>{throw n.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){n.L.debug(e)}}))}))},R=/^(true|false)$/,F=/^-?(0|[1-9]\d*)$/,J=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const r=typeof e,t=`${e}`;if("string"==typeof e)if(R.test(e))e="true"===e;else if(F.test(e))e=parseInt(e);else if(J.test(e))e=parseFloat(e);else if(_.test(e))try{e=K(e)}catch(e){}return r!==typeof e&&(0,o.d)(`You have used a stringified property value (${t} to ${JSON.stringify(e)}) which type switched from ${r} to ${typeof e}!`),e},B=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},_=/^[{[]/,K=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(_.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){n.L.warn(["parseJson",e]),n.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:U(e),V=(e,r)=>i(e,r||(0,n.a)()),G=(e,r)=>l(e,r||(0,n.a)());let Y=null;const Q=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.a)().body,level:"Fail",score:1},Y),X=/(\d+, ){3}0\)/,ee=(e,r=Q())=>{const t=getComputedStyle(e),o=X.test(t.backgroundColor)?r.backgroundColor:s.hex(t.backgroundColor),a=X.test(t.color)?r.color:s.hex(t.color),l=L(o,a),i={backgroundColor:o,color:a,domNode:e,level:C(l),score:l};return l<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},re=(e,r=Q())=>{r.domNode instanceof HTMLElement&&(r=ee(r.domNode,r));const t=r.domNode.querySelector(e);if(null===t){const t=r.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<t.length&&(r.domNode=t[n],null===(r=re(e,r)).domNode);n++);return r}return ee(t,r)};class te{static queryHtmlElementColors(e,r,t=!1,o=!0){let a=null;if(!0===t||!1===te.executionLock)if(!1===t&&(te.cache.clear(),te.cache.set(r.domNode,r),te.executionLock=!0,!0===o&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===r.domNode)a=r;else{const t=new Set;if(r.domNode.shadowRoot){const e=r.domNode.shadowRoot.children;for(let r=0;r<e.length;r++)t.add(e[r])}const n=r.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let r=0;r<e.length;r++)e[r]instanceof HTMLElement&&t.add(e[r])}const o=r.domNode.children;for(let e=0;e<o.length;e++)t.add(o[e]);const l=Array.from(t);for(let i=0;i<l.length;i++){let t=te.cache.get(l[i]);void 0===t&&(t=ee(l[i],r)),te.cache.set(l[i],t);const n=te.queryHtmlElementColors(e,t,!0,!1);if(null!==n){a=n;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===t&&(!0===o&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),a}}te.executionLock=!1,te.cache=new Map;class ne{}ne.patchTheme=n.b,ne.patchThemeTag=n.A,ne.querySelector=V,ne.querySelectorAll=G,ne.stringifyJson=B}}]);