/*! For license information please see 9095.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9095],{3540:(e,r,t)=>{t.d(r,{c:()=>l,h:()=>m,v:()=>f});var a=t(2996),n=t(8242),o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},i={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},l=function(e){var r;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var t=function(e){var r,t,a=[],n=1;if("string"==typeof e)if(o[e])a=o[e].slice(),t="rgb";else if("transparent"===e)n=0,t="rgb",a=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var l=e.slice(1);n=1,(c=l.length)<=4?(a=[parseInt(l[0]+l[0],16),parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16)],4===c&&(n=parseInt(l[3]+l[3],16)/255)):(a=[parseInt(l[0]+l[1],16),parseInt(l[2]+l[3],16),parseInt(l[4]+l[5],16)],8===c&&(n=parseInt(l[6]+l[7],16)/255)),a[0]||(a[0]=0),a[1]||(a[1]=0),a[2]||(a[2]=0),t="rgb"}else if(r=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=r[1],g="rgb"===s;t=l=s.replace(/a$/,"");var c="cmyk"===l?4:"gray"===l?1:3;a=r[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,r){if(/%$/.test(e))return r===c?parseFloat(e)/100:"rgb"===l?255*parseFloat(e)/100:parseFloat(e);if("h"===l[r]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==i[e])return i[e]}return parseFloat(e)})),s===l&&a.push(1),n=g||void 0===a[c]?1:a[c],a=a.slice(0,c)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(a=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),t=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(a=[e[0],e[1],e[2]],t="rgb",n=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(t="rgb",a=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(t="hsl",a=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),n=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(n/=100)):(t="rgb",a=[e>>>16,(65280&e)>>>8,255&e]);return{space:t,values:a,alpha:n}}(e);if(!t.space)return[];var a=[0,0,0],n="h"===t.space[0]?[360,100,100]:[255,255,255];return(r=Array(3))[0]=Math.min(Math.max(t.values[0],a[0]),n[0]),r[1]=Math.min(Math.max(t.values[1],a[1]),n[1]),r[2]=Math.min(Math.max(t.values[2],a[2]),n[2]),"h"===t.space[0]&&(r=function(e){var r,t,a,n,o,i=e[0]/360,l=e[1]/100,s=e[2]/100,g=0;if(0===l)return[o=255*s,o,o];for(r=2*s-(t=s<.5?s*(1+l):s+l-s*l),n=[0,0,0];g<3;)(a=i+1/3*-(g-1))<0?a++:a>1&&a--,o=6*a<1?r+6*(t-r)*a:2*a<1?t:3*a<2?r+(t-r)*(2/3-a)*6:r,n[g++]=255*o;return n}(r)),r.push(Math.min(Math.max(t.alpha,0),1)),r};const s=(e,r,t,n=1)=>{const o=[Math.max(Math.min(Math.round(r[0]+n*Math.max(1,r[0]/100)),255),0),Math.max(Math.min(Math.round(r[1]+n*Math.max(1,r[1]/100)),255),0),Math.max(Math.min(Math.round(r[2]+n*Math.max(1,r[2]/100)),255),0)],i=(0,a.c)(a.r.hex(`rgba(${e.join(",")},1)`),a.r.hex(`rgba(${o.join(",")},1)`)),l=o[0]+o[1]+o[2];return 0===l||765===l||i>t?{background:e,foreground:o,contrast:i}:s(e,o,t,n)},g=new Map,c=(e,r=7)=>{let t=[0,0,0,1],n=[255,255,255,1];"string"==typeof e?(t=l(e),n=t):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(t=l(e.background),n="string"==typeof e.foreground?l(e.foreground):t);const o=(299*t[0]+587*t[1]+114*t[2])/1e3>=128?-1:1,i=((e,r,t,a=1)=>{if(g.has(e))return g.get(e);const n=s(e,r,t,a);return g.set(e,n),n})([t[0],t[1],t[2]],[n[0],n[1],n[2]],r,o);return n=[...i.foreground,1],{background:a.r.hex(`rgba(${t.join(",")})`),foreground:a.r.hex(`rgba(${n.join(",")})`),contrast:i.contrast}},u=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function d(e){if(e)if("string"==typeof e){if(function(e){return u.test(e)}(e))return{type:"string",valid:!0,value:e};{const r=function(e){if(e.startsWith("{"))try{const r=JSON.parse(e);if(h(r))return{type:"ColorPair",value:r};if(p(r))return{type:"DeprecatedColorPair",value:r}}catch(e){return{type:null,value:null}}return{type:null,value:null}}(e);if(r.value)return{type:r.type,valid:!0,value:r.value}}}else{const r=e;if(h(r))return{type:"ColorPair",valid:!0,value:r};const t=e;if(p(t))return{type:"DeprecatedColorPair",valid:!0,value:t}}return{type:null,valid:!1,value:""}}function h(e){return!("object"!=typeof e||!e||"string"!=typeof e.backgroundColor||!("string"==typeof e.foregroundColor||e.foregroundColor&&"string"==typeof e.foregroundColor.primary&&"string"==typeof e.foregroundColor.secondary&&"string"==typeof e.foregroundColor.neutral))}function p(e){return"object"==typeof e&&e&&"string"==typeof e.backgroundColor&&"string"==typeof e.color}function b(e){const r=d(e);switch(r.type){case null:return!1;case"string":case"ColorPair":case"DeprecatedColorPair":return r.valid}}const f=(e,r,t)=>{(0,a.a)(e,"_color",b,new Set(["rgb in hex","ColorPair"]),r,t)},m=e=>{var r;let t;const a=d(e);switch(a.type){case"string":t=c(a.value);break;case"ColorPair":case"DeprecatedColorPair":{const e=a.value,n=a.value;let o="";n.color?o=n.color:"string"==typeof e.foregroundColor?o=e.foregroundColor:(null===(r=e.foregroundColor)||void 0===r?void 0:r.primary)&&(o=e.foregroundColor.primary),o&&"string"==typeof o||(o="#fff"),t=c({background:e.backgroundColor,foreground:o});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(e)})`),t=c({background:"#000",foreground:"#000"})}return t.contrast<7&&(0,n.a)(`[KolBadge] The contrast of ${t.contrast} (≥7, AAA) is to low, between the color pair ${t.background} and ${t.foreground}.`),{backgroundColor:t.background,foregroundColor:t.foreground}}},2863:(e,r,t)=>{t.d(r,{a:()=>g});var a=t(1201),n=t(8242);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},i={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((r,t)=>(r[`kol-${t}`]=e[t],r)),{}),s=new Set([e=>e("en",l(i)),e=>e("de",l(o))]),g=(e,r)=>{const t=(0,a.g)();if(void 0===t)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=t.translate(e,r);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,r)=>(t.addResourceBundle(e,r),e))))),o=t.translate(e,r)),o}},9095:(e,r,t)=>{t.r(r),t.d(r,{kol_kolibri:()=>g});var a=t(578),n=t(2863),o=t(3540),i=t(8242),l=t(2996);function s(e){return Math.round((Math.cos(function(e){return e*Math.PI/180}(e))+1)/2*225)}const g=class{constructor(e){(0,a.r)(this,e),this.handleColorChange=(e,r)=>{if("string"==typeof e){const t=(0,o.c)(e);r.set("_color",{red:t[0],green:t[1],blue:t[2]})}else(0,i.d)("[KolKolibri] You used the complex color schema. For the KoliBri we use need the color as hex string.")},this._animate=void 0,this._color="#003c78",this._labeled=void 0,this.state={_animate:!1,_color:{red:0,green:60,blue:120},_labeled:!0}}render(){const e=!0===this.state._animate?`rgb(${s(this.state._color.red)},${s(this.state._color.green)},${s(this.state._color.blue)})`:`rgb(${this.state._color.red},${this.state._color.green},${this.state._color.blue})`;return(0,a.h)(a.H,null,(0,a.h)("svg",{role:"img","aria-label":(0,n.a)("kol-kolibri-logo"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",fill:e},(0,a.h)("path",{d:"M353 322L213 304V434L353 322Z"}),(0,a.h)("path",{d:"M209 564V304L149 434L209 564Z"}),(0,a.h)("path",{d:"M357 316L417 250L361 210L275 244L357 316Z"}),(0,a.h)("path",{d:"M329 218L237 92L250 222L272 241L329 218Z"}),(0,a.h)("path",{d:"M353 318L35 36L213 300L353 318Z"}),(0,a.h)("path",{d:"M391 286L565 272L421 252L391 286Z"}),!0===this.state._labeled&&(0,a.h)("text",{x:"250",y:"525",fill:e},"KoliBri")))}validateAnimate(e){(0,l.b)(this,"_animate",e)}validateColor(e){(0,o.v)(this,e,{defaultValue:"#003c78",hooks:{beforePatch:this.handleColorChange}})}validateLabeled(e){(0,l.b)(this,"_labeled",e)}componentWillLoad(){this.validateAnimate(this._animate),this.validateColor(this._color),this.validateLabeled(this._labeled)}componentDidRender(){clearInterval(this.interval),this.state._animate&&(this.interval=setInterval((()=>{this.state=Object.assign(Object.assign({},this.state),{_color:{red:(this.state._color.red+1)%360,green:(this.state._color.green+2)%360,blue:(this.state._color.blue+3)%360}})}),50))}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_animate:["validateAnimate"],_color:["validateColor"],_labeled:["validateLabeled"]}}};g.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}text{font-size:90px;letter-spacing:normal;word-spacing:normal}"}}}]);