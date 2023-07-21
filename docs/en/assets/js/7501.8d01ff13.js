"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7501],{17942:(r,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>m});var n=t(50959);function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function a(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function u(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var c=n.createContext({}),f=function(r){var e=n.useContext(c),t=e;return r&&(t="function"==typeof r?r(e):a(a({},e),r)),t},l=function(r){var e=f(r.components);return n.createElement(c.Provider,{value:e},r.children)},s="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(r,e){var t=r.components,o=r.mdxType,i=r.originalType,c=r.parentName,l=u(r,["components","mdxType","originalType","parentName"]),s=f(t),y=o,m=s["".concat(c,".").concat(y)]||s[y]||p[y]||i;return t?n.createElement(m,a(a({ref:e},l),{},{components:t})):n.createElement(m,a({ref:e},l))}));function m(r,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var i=t.length,a=new Array(i);a[0]=y;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=r,u[s]="string"==typeof r?r:o,a[1]=u;for(var f=2;f<i;f++)a[f]=t[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},71010:(r,e,t)=>{t.d(e,{Z:()=>o});var n=t(76393);function o(r){return(0,n.Z)(r,{getSheets:!0}).then((function(r){return r.map((function(r){return r.name}))}))}},76393:(r,e,t)=>{t.d(e,{Z:()=>de});const n={createDocument:function(r){return(new DOMParser).parseFromString(r.trim(),"text/xml")}};var o=Uint8Array,i=Uint16Array,a=Uint32Array,u=new o([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),c=new o([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),f=new o([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),l=function(r,e){for(var t=new i(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];var o=new a(t[30]);for(n=1;n<30;++n)for(var u=t[n];u<t[n+1];++u)o[u]=u-t[n]<<5|n;return[t,o]},s=l(u,2),p=s[0],y=s[1];p[28]=258,y[258]=28;for(var m=l(c,0),b=m[0],v=(m[1],new i(32768)),d=0;d<32768;++d){var h=(43690&d)>>>1|(21845&d)<<1;h=(61680&(h=(52428&h)>>>2|(13107&h)<<2))>>>4|(3855&h)<<4,v[d]=((65280&h)>>>8|(255&h)<<8)>>>1}var g=function(r,e,t){for(var n=r.length,o=0,a=new i(e);o<n;++o)r[o]&&++a[r[o]-1];var u,c=new i(e);for(o=0;o<e;++o)c[o]=c[o-1]+a[o-1]<<1;if(t){u=new i(1<<e);var f=15-e;for(o=0;o<n;++o)if(r[o])for(var l=o<<4|r[o],s=e-r[o],p=c[r[o]-1]++<<s,y=p|(1<<s)-1;p<=y;++p)u[v[p]>>>f]=l}else for(u=new i(n),o=0;o<n;++o)r[o]&&(u[o]=v[c[r[o]-1]++]>>>15-r[o]);return u},w=new o(288);for(d=0;d<144;++d)w[d]=8;for(d=144;d<256;++d)w[d]=9;for(d=256;d<280;++d)w[d]=7;for(d=280;d<288;++d)w[d]=8;var O=new o(32);for(d=0;d<32;++d)O[d]=5;var j=g(w,9,1),S=g(O,5,1),A=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},E=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(7&e)&t},P=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(7&e)},x=function(r){return(r+7)/8|0},k=function(r,e,t){(null==e||e<0)&&(e=0),(null==t||t>r.length)&&(t=r.length);var n=new(2==r.BYTES_PER_ELEMENT?i:4==r.BYTES_PER_ELEMENT?a:o)(t-e);return n.set(r.subarray(e,t)),n},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],I=function(r,e,t){var n=new Error(e||T[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,I),!t)throw n;return n},D=function(r,e,t){var n=r.length;if(!n||t&&t.f&&!t.l)return e||new o(0);var i=!e||t,a=!t||t.i;t||(t={}),e||(e=new o(3*n));var l=function(r){var t=e.length;if(r>t){var n=new o(Math.max(2*t,r));n.set(e),e=n}},s=t.f||0,y=t.p||0,m=t.b||0,v=t.l,d=t.d,h=t.m,w=t.n,O=8*n;do{if(!v){s=E(r,y,1);var T=E(r,y+1,3);if(y+=3,!T){var D=r[(V=x(y)+4)-4]|r[V-3]<<8,C=V+D;if(C>n){a&&I(0);break}i&&l(m+D),e.set(r.subarray(V,C),m),t.b=m+=D,t.p=y=8*C,t.f=s;continue}if(1==T)v=j,d=S,h=9,w=5;else if(2==T){var N=E(r,y,31)+257,_=E(r,y+10,15)+4,F=N+E(r,y+5,31)+1;y+=14;for(var M=new o(F),U=new o(19),R=0;R<_;++R)U[f[R]]=E(r,y+3*R,7);y+=3*_;var $=A(U),B=(1<<$)-1,L=g(U,$,1);for(R=0;R<F;){var V,X=L[E(r,y,B)];if(y+=15&X,(V=X>>>4)<16)M[R++]=V;else{var z=0,Z=0;for(16==V?(Z=3+E(r,y,3),y+=2,z=M[R-1]):17==V?(Z=3+E(r,y,7),y+=3):18==V&&(Z=11+E(r,y,127),y+=7);Z--;)M[R++]=z}}var q=M.subarray(0,N),G=M.subarray(N);h=A(q),w=A(G),v=g(q,h,1),d=g(G,w,1)}else I(1);if(y>O){a&&I(0);break}}i&&l(m+131072);for(var Y=(1<<h)-1,W=(1<<w)-1,H=y;;H=y){var J=(z=v[P(r,y)&Y])>>>4;if((y+=15&z)>O){a&&I(0);break}if(z||I(2),J<256)e[m++]=J;else{if(256==J){H=y,v=null;break}var K=J-254;if(J>264){var Q=u[R=J-257];K=E(r,y,(1<<Q)-1)+p[R],y+=Q}var rr=d[P(r,y)&W],er=rr>>>4;rr||I(3),y+=15&rr;G=b[er];if(er>3){Q=c[er];G+=P(r,y)&(1<<Q)-1,y+=Q}if(y>O){a&&I(0);break}i&&l(m+131072);for(var tr=m+K;m<tr;m+=4)e[m]=e[m-G],e[m+1]=e[m+1-G],e[m+2]=e[m+2-G],e[m+3]=e[m+3-G];m=tr}}t.l=v,t.p=H,t.b=m,t.f=s,v&&(s=1,t.m=h,t.d=d,t.n=w)}while(!s);return m==e.length?e:k(e,0,m)},C=new o(0),N=function(r,e){return r[e]|r[e+1]<<8},_=function(r,e){return(r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24)>>>0},F=function(r,e){return _(r,e)+4294967296*_(r,e+4)};function M(r,e){return D(r,e)}var U="undefined"!=typeof TextDecoder&&new TextDecoder;try{U.decode(C,{stream:!0}),1}catch(he){}var R=function(r){for(var e="",t=0;;){var n=r[t++],o=(n>127)+(n>223)+(n>239);if(t+o>r.length)return[e,k(r,t-1)];o?3==o?(n=((15&n)<<18|(63&r[t++])<<12|(63&r[t++])<<6|63&r[t++])-65536,e+=String.fromCharCode(55296|n>>10,56320|1023&n)):e+=1&o?String.fromCharCode((31&n)<<6|63&r[t++]):String.fromCharCode((15&n)<<12|(63&r[t++])<<6|63&r[t++]):e+=String.fromCharCode(n)}};function $(r,e){if(e){for(var t="",n=0;n<r.length;n+=16384)t+=String.fromCharCode.apply(null,r.subarray(n,n+16384));return t}if(U)return U.decode(r);var o=R(r),i=o[0];return o[1].length&&I(8),i}var B=function(r,e){return e+30+N(r,e+26)+N(r,e+28)},L=function(r,e,t){var n=N(r,e+28),o=$(r.subarray(e+46,e+46+n),!(2048&N(r,e+8))),i=e+46+n,a=_(r,e+20),u=t&&4294967295==a?V(r,i):[a,_(r,e+24),_(r,e+42)],c=u[0],f=u[1],l=u[2];return[N(r,e+10),c,f,o,i+N(r,e+30)+N(r,e+32),l]},V=function(r,e){for(;1!=N(r,e);e+=4+N(r,e+2));return[F(r,e+12),F(r,e+4),F(r,e+20)]};"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout;function X(r){var e=function(r,e){for(var t={},n=r.length-22;101010256!=_(r,n);--n)(!n||r.length-n>65558)&&I(13);var i=N(r,n+8);if(!i)return{};var a=_(r,n+16),u=4294967295==a||65535==i;if(u){var c=_(r,n-12);(u=101075792==_(r,c))&&(i=_(r,c+32),a=_(r,c+48))}for(var f=e&&e.filter,l=0;l<i;++l){var s=L(r,a,u),p=s[0],y=s[1],m=s[2],b=s[3],v=s[4],d=s[5],h=B(r,d);a=v,f&&!f({name:b,size:y,originalSize:m,compression:p})||(p?8==p?t[b]=M(r.subarray(h,h+y),new o(m)):I(14,"unknown compression type "+p):t[b]=k(r,h,h+y))}return t}(new Uint8Array(r));return Promise.resolve(function(r){for(var e=[],t=0,n=Object.keys(r);t<n.length;t++){var o=n[t];e[o]=$(r[o])}return e}(e))}function z(r,e){for(var t=0;t<r.childNodes.length;){var n=r.childNodes[t];if(1===n.nodeType&&Y(n)===e)return n;t++}}function Z(r,e){for(var t=[],n=0;n<r.childNodes.length;){var o=r.childNodes[n];1===o.nodeType&&Y(o)===e&&t.push(o),n++}return t}function q(r,e,t){for(var n=0;n<r.childNodes.length;){var o=r.childNodes[n];e?1===o.nodeType&&Y(o)===e&&t(o,n):t(o,n),n++}}var G=/.+\:/;function Y(r){return r.tagName.replace(G,"")}function W(r){if(1!==r.nodeType)return r.textContent;for(var e="<"+Y(r),t=0;t<r.attributes.length;)e+=" "+r.attributes[t].name+'="'+r.attributes[t].value+'"',t++;e+=">";for(var n=0;n<r.childNodes.length;)e+=W(r.childNodes[n]),n++;return e+="</"+Y(r)+">"}function H(r){var e,t,n=r.documentElement;return e=function(r){var e=z(r,"t");if(e)return e.textContent;var t="";return q(r,"r",(function(r){t+=z(r,"t").textContent})),t},t=[],q(n,"si",(function(r,n){t.push(e(r,n))})),t}function J(r,e){var t=e.createDocument(r),n={},o=z(t.documentElement,"workbookPr");o&&"1"===o.getAttribute("date1904")&&(n.epoch1904=!0),n.sheets=[];return function(r){return Z(z(r.documentElement,"sheets"),"sheet")}(t).forEach((function(r){r.getAttribute("name")&&n.sheets.push({id:r.getAttribute("sheetId"),name:r.getAttribute("name"),relationId:r.getAttribute("r:id")})})),n}function K(r,e){var t=e.createDocument(r),n={sheets:{},sharedStrings:void 0,styles:void 0};return function(r){return Z(r.documentElement,"Relationship")}(t).forEach((function(r){var e=r.getAttribute("Target");switch(r.getAttribute("Type")){case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":n.styles=Q(e);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":n.sharedStrings=Q(e);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":n.sheets[r.getAttribute("Id")]=Q(e)}})),n}function Q(r){return"/"===r[0]?r.slice(1):"xl/"+r}function rr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function er(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?rr(Object(t),!0).forEach((function(e){tr(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):rr(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function tr(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function nr(r,e){if(!r)return{};var t,n,o=e.createDocument(r),i=(t=o,n=z(t.documentElement,"cellStyleXfs"),n?Z(n,"xf"):[]).map(ir),a=function(r){var e=z(r.documentElement,"numFmts");return e?Z(e,"numFmt"):[]}(o).map(or).reduce((function(r,e){return r[e.id]=e,r}),[]);return function(r){var e=z(r.documentElement,"cellXfs");return e?Z(e,"xf"):[]}(o).map((function(r){return r.hasAttribute("xfId")?er(er({},i[r.xfId]),ir(r,a)):ir(r,a)}))}function or(r){return{id:r.getAttribute("numFmtId"),template:r.getAttribute("formatCode")}}function ir(r,e){var t={};if(r.hasAttribute("numFmtId")){var n=r.getAttribute("numFmtId");e[n]?t.numberFormat=e[n]:t.numberFormat={id:n}}return t}function ar(r,e){e&&e.epoch1904&&(r+=1462);return new Date(Math.round(24*(r-25569)*36e5))}function ur(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=function(r,e){if(!r)return;if("string"==typeof r)return cr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return cr(r,e)}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function cr(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function fr(r,e,t,n){if(e){var o=t[e];if(!o)throw new Error("Cell style not found: ".concat(e));if(!o.numberFormat)return!1;if(lr.indexOf(Number(o.numberFormat.id))>=0||n.dateFormat&&o.numberFormat.template===n.dateFormat||!1!==n.smartDateParser&&o.numberFormat.template&&function(r){for(var e,t=ur((r=(r=(r=r.toLowerCase()).replace(sr,"")).replace(pr,"")).split(/\W+/));!(e=t()).done;){var n=e.value;if(yr.indexOf(n)<0)return!1}return!0}(o.numberFormat.template))return!0}}var lr=[14,15,16,17,18,19,20,21,22,27,30,36,45,46,47,50,57],sr=/^\[\$-414\]/,pr=/;@$/;var yr=["ss","mm","h","hh","am","pm","d","dd","m","mm","mmm","mmmm","yy","yyyy","e"];function mr(r,e,t){var n=t.getInlineStringValue,o=t.getInlineStringXml,i=t.getStyleId,a=t.styles,u=t.values,c=t.properties,f=t.options;switch(e||(e="n"),e){case"str":r=br(r,f);break;case"inlineStr":if(void 0===(r=n()))throw new Error('Unsupported "inline string" cell value structure: '.concat(o()));r=br(r,f);break;case"s":var l=Number(r);if(isNaN(l))throw new Error('Invalid "shared" string index: '.concat(r));if(l>=u.length)throw new Error('An out-of-bounds "shared" string index: '.concat(r));r=br(r=u[l],f);break;case"b":if("1"===r)r=!0;else{if("0"!==r)throw new Error('Unsupported "boolean" cell value: '.concat(r));r=!1}break;case"z":r=void 0;break;case"e":r=function(r){switch(r){case 0:return"#NULL!";case 7:return"#DIV/0!";case 15:return"#VALUE!";case 23:return"#REF!";case 29:return"#NAME?";case 36:return"#NUM!";case 42:return"#N/A";case 43:return"#GETTING_DATA";default:return"#ERROR_".concat(r)}}(r);break;case"d":if(void 0===r)break;var s=new Date(r);if(isNaN(s.valueOf()))throw new Error('Unsupported "date" cell value: '.concat(r));r=s;break;case"n":if(void 0===r)break;var p=Number(r);if(isNaN(p))throw new Error('Invalid "numeric" cell value: '.concat(r));r=p,fr(0,i(),a,f)&&(r=ar(r,c));break;default:throw new TypeError("Cell type not supported: ".concat(e))}return void 0===r&&(r=null),r}function br(r,e){return!1!==e.trim&&(r=r.trim()),""===r&&(r=void 0),r}var vr=["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function dr(r){for(var e=0,t=0;t<r.length;)e*=26,e+=vr.indexOf(r[t]),t++;return e}function hr(r){return r=r.split(/(\d+)/),[parseInt(r[1]),dr(r[0].trim())]}function gr(r,e,t,n,o,i,a){var u,c=hr(r.getAttribute("r")),f=function(r,e){return z(e,"v")}(0,r),l=f&&f.textContent;return r.hasAttribute("t")&&(u=r.getAttribute("t")),{row:c[0],column:c[1],value:mr(l,u,{getInlineStringValue:function(){return function(r,e){if(e.firstChild&&"is"===Y(e.firstChild)&&e.firstChild.firstChild&&"t"===Y(e.firstChild.firstChild))return e.firstChild.firstChild.textContent}(0,r)},getInlineStringXml:function(){return W(r)},getStyleId:function(){return r.getAttribute("s")},styles:o,values:n,properties:i,options:a})}}function wr(r,e,t,n,o,i){var a=function(r){var e=z(r.documentElement,"sheetData"),t=[];return q(e,"row",(function(r){q(r,"c",(function(r){t.push(r)}))})),t}(r);return 0===a.length?[]:a.map((function(r){return gr(r,0,0,t,n,o,i)}))}function Or(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,u=!1;try{for(t=t.call(r);!(a=(n=t.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(I){u=!0,o=I}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return jr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return jr(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jr(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Sr(r){var e=function(r){var e=z(r.documentElement,"dimension");if(e)return e.getAttribute("ref")}(r);if(e)return 1===(e=e.split(":").map(hr).map((function(r){var e=Or(r,2);return{row:e[0],column:e[1]}}))).length&&(e=[e[0],e[0]]),e}function Ar(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=function(r,e){if(!r)return;if("string"==typeof r)return Er(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Er(r,e)}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Er(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Pr(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=function(r,e){if(!r)return;if("string"==typeof r)return xr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xr(r,e)}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function xr(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function kr(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,u=!1;try{for(t=t.call(r);!(a=(n=t.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(I){u=!0,o=I}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}(r,e)||Tr(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tr(r,e){if(r){if("string"==typeof r)return Ir(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ir(r,e):void 0}}function Ir(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Dr(r,e){var t=r.dimensions,n=r.cells;if(0===n.length)return[];for(var o=kr(t,2),i=(o[0],o[1]),a=i.column,u=i.row,c=new Array(u),f=0;f<u;){c[f]=new Array(a);for(var l=0;l<a;)c[f][l]=null,l++;f++}for(var s,p=function(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=Tr(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n);!(s=p()).done;){var y=s.value,m=y.row-1,b=y.column-1;b<a&&m<u&&(c[m][b]=y.value)}var v=e.rowMap;if(v)for(var d=0;d<c.length;)v[d]=d,d++;return c=function(r){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.rowMap,n=e.accessor,o=void 0===n?function(r){return r}:n,i=e.onlyTrimAtTheEnd,a=r.length-1;a>=0;){for(var u,c=!0,f=Ar(r[a]);!(u=f()).done;)if(null!==o(u.value)){c=!1;break}if(c)r.splice(a,1),t&&t.splice(a,1);else if(i)break;a--}return r}(function(r){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.accessor,n=void 0===t?function(r){return r}:t,o=e.onlyTrimAtTheEnd,i=r[0].length-1;i>=0;){for(var a,u=!0,c=Pr(r);!(a=c()).done;)if(null!==n(a.value[i])){u=!1;break}if(u)for(var f=0;f<r.length;)r[f].splice(i,1),f++;else if(o)break;i--}return r}(c,{onlyTrimAtTheEnd:!0}),{onlyTrimAtTheEnd:!0,rowMap:v}),e.transformData&&(c=e.transformData(c)),c}function Cr(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=function(r,e){if(!r)return;if("string"==typeof r)return Nr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Nr(r,e)}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Nr(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function _r(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function Fr(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Mr(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t.sheet||(t=function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_r(Object(t),!0).forEach((function(e){Fr(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):_r(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}({sheet:1},t));var n=function(e){if(!r[e])throw new Error('"'.concat(e,'" file not found inside the *.xlsx file zip archive'));return r[e]},o=K(n("xl/_rels/workbook.xml.rels"),e),i=o.sharedStrings?function(r,e){return r?H(e.createDocument(r)):[]}(n(o.sharedStrings),e):[],a=o.styles?nr(n(o.styles),e):{},u=J(n("xl/workbook.xml"),e);if(t.getSheets)return u.sheets.map((function(r){return{name:r.name}}));var c=function(r,e){if("number"==typeof r){var t=e[r-1];return t&&t.relationId}for(var n,o=Cr(e);!(n=o()).done;){var i=n.value;if(i.name===r)return i.relationId}}(t.sheet,u.sheets);if(!c||!o.sheets[c])throw function(r,e){var t=e&&e.map((function(r,e){return'"'.concat(r.name,'" (#').concat(e+1,")")})).join(", ");return new Error("Sheet ".concat("number"==typeof r?"#"+r:'"'+r+'"'," not found in the *.xlsx file.").concat(e?" Available sheets: "+t+".":""))}(t.sheet,u.sheets);var f=function(r,e,t,n,o,i){var a=e.createDocument(r),u=wr(a,0,t,n,o,i),c=Sr(a)||function(r){var e=function(r,e){return r-e},t=r.map((function(r){return r.row})).sort(e),n=r.map((function(r){return r.column})).sort(e),o=t[0],i=t[t.length-1];return[{row:o,column:n[0]},{row:i,column:n[n.length-1]}]}(u);return{cells:u,dimensions:c}}(n(o.sheets[c]),e,i,a,u,t),l=Dr(f,t);return t.properties?{data:l,properties:u}:l}function Ur(r){return Ur="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ur(r)}function Rr(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function $r(r){var e=Vr();return function(){var t,n=zr(r);if(e){var o=zr(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return function(r,e){if(e&&("object"===Ur(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}(this,t)}}function Br(r){var e="function"==typeof Map?new Map:void 0;return Br=function(r){if(null===r||(t=r,-1===Function.toString.call(t).indexOf("[native code]")))return r;var t;if("function"!=typeof r)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(r))return e.get(r);e.set(r,n)}function n(){return Lr(r,arguments,zr(this).constructor)}return n.prototype=Object.create(r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Xr(n,r)},Br(r)}function Lr(r,e,t){return Lr=Vr()?Reflect.construct:function(r,e,t){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(r,n));return t&&Xr(o,t.prototype),o},Lr.apply(null,arguments)}function Vr(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(he){return!1}}function Xr(r,e){return Xr=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},Xr(r,e)}function zr(r){return zr=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},zr(r)}var Zr=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Xr(r,e)}(i,r);var e,t,n,o=$r(i);function i(r){var e;return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,"invalid")).reason=r,e}return e=i,t&&Rr(e.prototype,t),n&&Rr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(Br(Error));function qr(r){if("string"==typeof r){var e=r;if(r=Number(r),String(r)!==e)throw new Zr("not_a_number")}if("number"!=typeof r)throw new Zr("not_a_number");if(isNaN(r))throw new Zr("invalid_number");if(!isFinite(r))throw new Zr("out_of_bounds");return r}function Gr(r){if("string"==typeof r)return r;if("number"==typeof r){if(isNaN(r))throw new Zr("invalid_number");if(!isFinite(r))throw new Zr("out_of_bounds");return String(r)}throw new Zr("not_a_string")}function Yr(r){if("boolean"==typeof r)return r;throw new Zr("not_a_boolean")}function Wr(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,u=!1;try{for(t=t.call(r);!(a=(n=t.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(I){u=!0,o=I}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}(r,e)||Jr(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Hr(r){return Hr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Hr(r)}function Jr(r,e){if(r){if("string"==typeof r)return Kr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Kr(r,e):void 0}}function Kr(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Qr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function re(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Qr(Object(t),!0).forEach((function(e){ee(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Qr(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function ee(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var te={isColumnOriented:!1};function ne(r,e,t){var n=t=t?re(re({},te),t):te,o=n.isColumnOriented,i=n.rowMap,a=n.ignoreEmptyRows;!function(r){for(var e=0,t=Object.keys(r);e<t.length;e++){var n=t[e];if(!r[n].prop)throw new Error('"prop" not defined for schema entry "'.concat(n,'".'))}}(e),o&&(r=ce(r));for(var u=r[0],c=[],f=[],l=1;l<r.length;l++){var s=oe(e,r[l],l,u,f,t);null===s&&!1!==a||c.push(s)}if(i)for(var p,y=function(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=Jr(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(f);!(p=y()).done;){var m=p.value;m.row=i[m.row-1]+1}return{rows:c,errors:f}}function oe(r,e,t,n,o,i){for(var a={},u=!0,c=function(){var c=l[f],s=r[c],p="object"===Hr(s.type)&&!Array.isArray(s.type),y=e[n.indexOf(c)];void 0===y&&(y=null);var m=void 0,b=void 0,v=void 0;if(p)m=oe(s.type,e,t,n,o,i);else if(null===y)m=null;else if(Array.isArray(s.type)){var d=!1,h=function(r){var e=[],t=0;for(;t<r.length;){var n=Wr(ue(r,",",t),2),o=n[0];t+=n[1]+1,e.push(o.trim())}return e}(y).map((function(r){var e=ie(r,s,i);return e.error&&(m=r,b=e.error,v=e.reason),null!==e.value&&(d=!0),e.value}));b||(m=d?h:null)}else{var g=ie(y,s,i);b=g.error,v=g.reason,m=b?y:g.value}!b&&null===m&&s.required&&(b="required"),b?(b={error:b,row:t+1,column:c,value:m},v&&(b.reason=v),s.type&&(b.type=s.type),o.push(b)):(u&&null!==m&&(u=!1),(null!==m||i.includeNullValues)&&(a[s.prop]=m))},f=0,l=Object.keys(r);f<l.length;f++)c();return u?null:a}function ie(r,e,t){if(null===r)return{value:null};var n;if(n=e.parse?ae(r,e.parse):e.type?function(r,e,t){switch(e){case String:return ae(r,Gr);case Number:return ae(r,qr);case Date:return ae(r,(function(r){return function(r,e){var t=e.properties;if(r instanceof Date){if(isNaN(r.valueOf()))throw new Zr("out_of_bounds");return r}if("number"==typeof r){if(isNaN(r))throw new Zr("invalid_number");if(!isFinite(r))throw new Zr("out_of_bounds");var n=ar(r,t);if(isNaN(n.valueOf()))throw new Zr("out_of_bounds");return n}throw new Zr("not_a_date")}(r,{properties:t.properties})}));case Boolean:return ae(r,Yr);default:if("function"==typeof e)return ae(r,e);throw new Error("Unsupported schema type: ".concat(e&&e.name||e))}}(r,Array.isArray(e.type)?e.type[0]:e.type,t):{value:r},n.error)return n;if(null!==n.value){if(e.oneOf&&e.oneOf.indexOf(n.value)<0)return{error:"invalid",reason:"unknown"};if(e.validate)try{e.validate(n.value)}catch(o){return{error:o.message}}}return n}function ae(r,e){try{return void 0===(r=e(r))?{value:null}:{value:r}}catch(n){var t={error:n.message};return n.reason&&(t.reason=n.reason),t}}function ue(r,e,t){for(var n=0,o="";t+n<r.length;){var i=r[t+n];if(i===e)return[o,n];if('"'===i){var a=ue(r,'"',t+n+1);o+=a[0],n+=1+a[1]+1}else o+=i,n++}return[o,n]}var ce=function(r){return r[0].map((function(e,t){return r.map((function(r){return r[t]}))}))};function fe(r){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},fe(r)}function le(r){for(var e={},t=0,n=Object.keys(r);t<n.length;t++){var o=n[t],i=r[o],a=void 0;"object"===fe(i)&&(i=Object.keys(r[o])[0],a=le(r[o][i])),e[o]={prop:i},a&&(e[o].type=a)}return e}var se=["schema","map"];function pe(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function ye(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?pe(Object(t),!0).forEach((function(e){me(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function me(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function be(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}function ve(r,e,t){var n=t.schema,o=t.map,i=be(t,se);!n&&o&&(n=le(o));var a=Mr(r,e,ye(ye({},i),{},{properties:n||i.properties}));return n?ne(a.data,n,ye(ye({},i),{},{properties:a.properties})):a}function de(r){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e=r,e instanceof File||e instanceof Blob?e.arrayBuffer().then(X):X(e)).then((function(r){return ve(r,n,t)}))}}}]);