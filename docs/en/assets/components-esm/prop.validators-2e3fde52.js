/*!
 * KoliBri - The accessible HTML-Standard
 */
import{d as devHint}from"./a11y.tipps-e9cad37c.js";import{p as patchTheme,a as patchThemeTag,L as Log,b as getDocument,d as getExperimentalMode}from"./dev.utils-61c61d76.js";const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=obj,css_1=css,hex_1=hex,num_1=num;function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),l=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),l=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),l=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,l=o[1]/255,i=o[2]/255,s=a<=.03928?a*e:u(a),c=l<=.03928?l*e:u(l),g=i<=.03928?i*e:u(i);return s*n+c*r+g*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{getExperimentalMode()&&(Log.debug([e,t]),Log.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;if(void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r){e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)}},logWarn=(e,t,r,o)=>{devHint(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):null!=n||a.required?(a.required||o.add(null),logWarn(e,t,n,o)):setState(e,t,a.defaultValue,a.hooks)}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(l,(()=>{throw Log.debug(l),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw Log.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){Log.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&devHint(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw Log.warn(["stringifyJson",e]),Log.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){Log.warn(["parseJson",e]),Log.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||getDocument()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||getDocument());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:getDocument().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),a=s(o,n),l={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&Log.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&Log.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const l=Array.from(r);for(let r=0;r<l.length;r++){let o=KoliBriUtils.cache.get(l[r]);void 0===o&&(o=koliBriA11yColorContrast(l[r],t)),KoliBriUtils.cache.set(l[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else Log.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&Log.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=patchTheme,KoliBriDevHelper.patchThemeTag=patchThemeTag,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;export{KoliBriDevHelper as K,watchBoolean as a,s as b,watchJsonArrayString as c,watchString as d,watchNumber as e,setEventTarget as f,emptyStringByArrayHandler as g,mapBoolean2String as h,mapStringOrBoolean2String as i,KoliBriUtils as j,koliBriQuerySelector as k,koliBriA11yColorContrast as l,mapString2Unknown as m,koliBriQuerySelectorAll as n,objectObjectHandler as o,parseJson as p,koliBriQuerySelectorColors as q,rgbaConvert as r,setState as s,stringifyJson as t,watchValidator as w};