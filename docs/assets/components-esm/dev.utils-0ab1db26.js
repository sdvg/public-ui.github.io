/*!
 * KoliBri - The accessible HTML-Standard
 */
import{p as processEnv}from"./reuse-b3566e4c.js";var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t,o){return e(o={path:t,exports:{},require:function(e,t){return commonjsRequire()}},o.exports),o.exports}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var loglevel=createCommonjsModule((function(e){var t,o;t=commonjsGlobal,o=function(){var e=function(){},t="undefined",o=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function l(e,t){var o=e[t];if("function"==typeof o.bind)return o.bind(e);try{return Function.prototype.bind.call(o,e)}catch(t){return function(){return Function.prototype.apply.apply(o,[e,arguments])}}}function i(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(t,o){for(var l=0;l<n.length;l++){var i=n[l];this[i]=l<t?e:this.methodFactory(i,t,o)}this.log=this.debug}function r(e,o,n){return function(){typeof console!==t&&(s.call(this,o,n),this[e].apply(this,arguments))}}function a(n,s,a){return function(n){return"debug"===n&&(n="log"),typeof console!==t&&("trace"===n&&o?i:void 0!==console[n]?l(console,n):void 0!==console.log?l(console,"log"):e)}(n)||r.apply(this,arguments)}function c(e,o,l){var i,r=this;o=null==o?"WARN":o;var c="loglevel";function d(){var e;if(typeof window!==t&&c){try{e=window.localStorage[c]}catch(e){}if(typeof e===t)try{var o=window.document.cookie,n=o.indexOf(encodeURIComponent(c)+"=");-1!==n&&(e=/^([^;]+)/.exec(o.slice(n))[1])}catch(e){}return void 0===r.levels[e]&&(e=void 0),e}}"string"==typeof e?c+=":"+e:"symbol"==typeof e&&(c=void 0),r.name=e,r.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},r.methodFactory=l||a,r.getLevel=function(){return i},r.setLevel=function(o,l){if("string"==typeof o&&void 0!==r.levels[o.toUpperCase()]&&(o=r.levels[o.toUpperCase()]),!("number"==typeof o&&o>=0&&o<=r.levels.SILENT))throw"log.setLevel() called with invalid level: "+o;if(i=o,!1!==l&&function(e){var o=(n[e]||"silent").toUpperCase();if(typeof window!==t&&c){try{return void(window.localStorage[c]=o)}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"="+o+";"}catch(e){}}}(o),s.call(r,o,e),typeof console===t&&o<r.levels.SILENT)return"No console available for logging"},r.setDefaultLevel=function(e){o=e,d()||r.setLevel(e,!1)},r.resetLevel=function(){r.setLevel(o,!1),function(){if(typeof window!==t&&c){try{return void window.localStorage.removeItem(c)}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},r.enableAll=function(e){r.setLevel(r.levels.TRACE,e)},r.disableAll=function(e){r.setLevel(r.levels.SILENT,e)};var h=d();null==h&&(h=o),r.setLevel(h,!1)}var d=new c,h={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=h[e];return t||(t=h[e]=new c(e,d.getLevel(),d.methodFactory)),t};var T=typeof window!==t?window.log:void 0;return d.noConflict=function(){return typeof window!==t&&window.log===d&&(window.log=T),d},d.getLoggers=function(){return h},d.default=d,d},e.exports?e.exports=o():t.log=o()}));const STORE="object"==typeof window?window:"object"==typeof global?global:"object"==typeof self?self:{};let lockThemePatching=!0,warrentyWarning=!1;const THEME_NAME_PATTERN=/^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/,isThemeNameValid=e=>"string"==typeof e&&THEME_NAME_PATTERN.test(e),validateThemeName=e=>{if(!1===isThemeNameValid(e))throw new Error(`[Theming] The theme identifier "${"string"==typeof e?e:""}" (Type: ${typeof e}) is not valid. Please use only follow this pattern: /^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/`)},patchThemeTag=(e,t,o,n=!1)=>{validateThemeName(e),!0===lockThemePatching&&!1===warrentyWarning&&(warrentyWarning=!0,loglevel.warn(`[Theming] The theme process is locked. This means that the theme "${e}" should not be patched.\n\n\timport { register } from 'adopted-style-sheets';\n\timport { defineCustomElements } from '...';\n\timport { THEME } from '...';\n\n\tregister(THEME, defineCustomElements)\n\t.then(() => {\n\t\t// run your app or website\n\t})\n\t.catch(console.warn);`)),"object"==typeof STORE.A11yUi&&null!==STORE.A11yUi||(STORE.A11yUi={}),"object"!=typeof STORE.A11yUi||null===STORE.A11yUi||"object"==typeof STORE.A11yUi.Themes&&null!==STORE.A11yUi.Themes||(STORE.A11yUi.Themes={}),"object"!=typeof STORE.A11yUi||null===STORE.A11yUi||"object"!=typeof STORE.A11yUi.Themes||null===STORE.A11yUi.Themes||"object"==typeof STORE.A11yUi.Themes[e]&&null!==STORE.A11yUi.Themes[e]||(STORE.A11yUi.Themes[e]={}),"object"==typeof STORE.A11yUi&&null!==STORE.A11yUi&&"object"==typeof STORE.A11yUi.Themes&&null!==STORE.A11yUi.Themes&&"object"==typeof STORE.A11yUi.Themes[e]&&null!==STORE.A11yUi.Themes[e]&&(n&&"string"==typeof STORE.A11yUi.Themes[e][t]?STORE.A11yUi.Themes[e][t]+=o:STORE.A11yUi.Themes[e][t]=o)},patchTheme=(e,t,o=!1)=>(validateThemeName(e),"object"==typeof t&&null!==t&&Object.getOwnPropertyNames(t).forEach((n=>{const l=t[n];"string"==typeof l&&l.length>0&&patchThemeTag(e,n,l,o)})),e),getThemeNode=e=>{if(e instanceof HTMLElement){if("string"==typeof e.dataset.theme)return e;{let t=e.parentNode;for(;t instanceof ShadowRoot;)t=t.host;return getThemeNode(t)}}return null},getEncroachCss=(e={})=>"false"!==e.themeEncroachCss&&"true"!==e.themeReset&&{mode:"after"===e.themeEncroachCssMode||"before"===e.themeEncroachCssMode?e.themeEncroachCssMode:"before"},isTheCurrentThemeConfigValid=()=>"object"==typeof STORE.A11yUi&&null!==STORE.A11yUi&&"object"==typeof STORE.A11yUi.Theme&&null!==STORE.A11yUi.Theme&&"boolean"==typeof STORE.A11yUi.Theme.cache&&"object"==typeof STORE.A11yUi.Theme.encroachCss&&null!==typeof STORE.A11yUi.Theme.encroachCss&&"string"==typeof STORE.A11yUi.Theme.encroachCss.mode&&"string"==typeof STORE.A11yUi.Theme.name,isTheCurrentThemeNotDefault=()=>0==("object"==typeof STORE.A11yUi&&null!==STORE.A11yUi)||0==("object"==typeof STORE.A11yUi.Theme&&null!==STORE.A11yUi.Theme)||"default"!==STORE.A11yUi.Theme.name,getThemeDetails=e=>{if(isTheCurrentThemeConfigValid())return STORE.A11yUi.Theme;{const t={cache:!0,encroachCss:getEncroachCss(),loglevel:"silent",name:null},o=getThemeNode(e);return o instanceof HTMLElement&&(t.cache="false"!==o.dataset.themeCache,t.encroachCss=getEncroachCss(o.dataset),t.loglevel="debug"===o.dataset.themeLoglevel?o.dataset.themeLoglevel:"silent",t.name=o.dataset.theme||null),t}},getThemeOptionDefaults=(e,t)=>({cache:!1!==t.cache,detect:"auto"===t.detect?"auto":"fixed",encroachCss:!1!==t.encroachCss&&("object"!=typeof t.encroachCss||null==t.encroachCss||"after"!==t.encroachCss.mode&&"before"!==t.encroachCss.mode?{mode:"before"}:t.encroachCss),loglevel:"debug"===t.loglevel?t.loglevel:"silent",name:"string"==typeof t.name?t.name:e}),setConfigureTheme=(e,t)=>{!1===isTheCurrentThemeConfigValid()&&isTheCurrentThemeNotDefault()&&"object"==typeof t&&null!==t&&("fixed"===(t=getThemeOptionDefaults(e,t)).detect?(null===t.name&&"string"==typeof e&&(t.name=e),e===t.name&&("object"==typeof STORE.A11yUi&&null!==STORE.A11yUi||(STORE.A11yUi={}),STORE.A11yUi.Theme=t,loglevel.info(`[Theming] Theme "${e}" was set as default theme.`))):loglevel.warn("[Theming] The presetting of theme options is only relevant by using 'fixed' detection mode."))};let registered=!1;const register=(e,t,o={})=>{!1===registered&&(registered=!0,lockThemePatching=!1),"function"==typeof e?e=new Set([e]):Array.isArray(e)&&(e=new Set(e)),e instanceof Set&&e.forEach((e=>{"function"==typeof e&&1===e.length?setConfigureTheme(e(patchTheme),{cache:o.theme?.cache,detect:o.theme?.detect,encroachCss:o.theme?.encroachCss,name:o.theme?.name}):loglevel.error("[Theming] Es wurde versucht eine nicht kompatibles Theme zu laden.")})),lockThemePatching=!0,"function"==typeof t?t=new Set([t]):Array.isArray(t)&&(t=new Set(t));const n=[];return t.forEach((e=>n.push(e()))),Promise.all(n)},STYLING_TASK_QUEUE=new Map,HYDRATED_HISTORY=[],CSS_PROPERTIES_REGISTERED=new Set,CSS_STYLE_CACHE=new Map,REGEX_CSS_PROPERTIES=/--[^;]+/g,REGEX_SPLIT_CSS_PROPERTY=/:/;"object"==typeof STORE.A11yUi&&null!==STORE.A11yUi||(STORE.A11yUi={CSS_STYLE_CACHE:CSS_STYLE_CACHE,HYDRATED_HISTORY:HYDRATED_HISTORY,STYLING_TASK_QUEUE:STYLING_TASK_QUEUE});const extractProperties=(e,t)=>{let o=t.match(REGEX_CSS_PROPERTIES);if(Array.isArray(o)){o=o.filter((e=>REGEX_SPLIT_CSS_PROPERTY.test(e)));const t=document.createElement("style");t.innerHTML=`.${e} {${o.join(";")}}`,document.querySelector("head")?.appendChild(t)}CSS_PROPERTIES_REGISTERED.add(e)},getCssStyle=(e,t)=>"object"==typeof STORE.A11yUi&&null!==STORE.A11yUi&&"object"==typeof STORE.A11yUi.Themes&&null!==STORE.A11yUi.Themes&&"object"==typeof STORE.A11yUi.Themes[e]&&null!==STORE.A11yUi.Themes[e]&&"string"==typeof STORE.A11yUi.Themes[e][t]?STORE.A11yUi.Themes[e][t].replace(/\r?\n/g,""):"",removeStyle=e=>{for(const t of Array.from(e.childNodes)){if(!(t instanceof HTMLStyleElement&&"STYLE"===t.tagName))break;e.removeChild(t)}},patchStyle=(e,t)=>{try{const o=[];t.forEach((e=>{const t=new CSSStyleSheet;t.replaceSync(e),o.push(t)})),e.adoptedStyleSheets=o}catch(o){t.reverse().forEach((t=>{const o=document.createElement("style");o.innerHTML=t,e.insertBefore(o,e.firstChild)}))}},encroachStyles=(e,t,o)=>{if(!1!==o){const n=[...Array.from(e.childNodes).filter((e=>e instanceof HTMLStyleElement&&"STYLE"===e.tagName))];let l;try{l=[...Array.from(e.adoptedStyleSheets)]}catch(e){l=[]}"before"===o?.mode?(n.reverse().forEach((e=>t.unshift(e.innerHTML))),l.reverse().forEach((e=>t.unshift(Array.from(e.cssRules).map((e=>e.cssText)).join(""))))):"after"===o?.mode&&(n.forEach((e=>t.push(e.innerHTML))),l.forEach((e=>t.push(Array.from(e.cssRules).map((e=>e.cssText)).join("")))))}},setThemeStyleAfterHydrated=(e,t,o)=>{const n=t.name||"default";let l;try{if(null===e.shadowRoot)throw new Error("ShadowRoot is null");l=e.shadowRoot}catch(t){l=e}if(CSS_STYLE_CACHE.get(n)?.has(e.tagName))switchStyle(e,l,CSS_STYLE_CACHE.get(n)?.get(e.tagName),o);else{const i=getCssStyle(n,"PROPERTIES"),s=getCssStyle(n,"GLOBAL"),r=getCssStyle(n,e.tagName);!1===CSS_PROPERTIES_REGISTERED.has(n)&&extractProperties(n,s);const a=[i,s,r];encroachStyles(l,a,t.encroachCss),"debug"===t.loglevel&&console.log(e.tagName,a),!0===t.cache&&(!1===CSS_STYLE_CACHE.has(n)&&CSS_STYLE_CACHE.set(n,new Map),CSS_STYLE_CACHE.get(n)?.set(e.tagName,a)),switchStyle(e,l,a,o)}},switchStyle=(e,t,o,n)=>{removeStyle(t),patchStyle(t,o),e.style.display=n},logHydratedHistory=e=>{"debug"===e.loglevel&&HYDRATED_HISTORY.push({timestamp:Date.now(),numberOfTasks:STYLING_TASK_QUEUE.size})},pushToDoTask=(e,t)=>{STYLING_TASK_QUEUE.set(e,{styleDisplay:e.style.display?`${e.style.display}`:null,themeDetails:t})},loggedPushToDoTask=(e,t)=>{pushToDoTask(e,t),logHydratedHistory(t)},deleteDoneTask=e=>{STYLING_TASK_QUEUE.delete(e)},loggedDeleteDoneTask=(e,t)=>{deleteDoneTask(e),logHydratedHistory(t)},waitForHydrated=e=>{const t=setTimeout((()=>{if(clearTimeout(t),STYLING_TASK_QUEUE.has(e)&&e.classList.contains("hydrated")){const{styleDisplay:t,themeDetails:o}=STYLING_TASK_QUEUE.get(e);setThemeStyleAfterHydrated(e,o,t),loggedDeleteDoneTask(e,o)}else waitForHydrated(e)}),25)},observerCallback=e=>{for(const t of e)if(STYLING_TASK_QUEUE.has(t.target)&&t.target.classList.contains("hydrated")){const{styleDisplay:e,themeDetails:o}=STYLING_TASK_QUEUE.get(t.target);setThemeStyleAfterHydrated(t.target,o,e),loggedDeleteDoneTask(t.target,o)}},observerOptions={attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1};let observer;try{observer=new MutationObserver(observerCallback)}catch(e){observer=null}const setThemeStyle=(e,t)=>{loggedPushToDoTask(e,t),observer?observer.observe(e,observerOptions):waitForHydrated(e),e.style.display="none"};class ModalService{constructor(){this.lockedElements=new Map,this.modalStack=new Map}lockElement(e){const t=e.getAttribute("tabindex");(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||"string"==typeof t||void 0!==e.dataset.kolModal)&&("string"==typeof t?this.lockedElements.set(e,{tabIndex:t}):this.lockedElements.set(e,{}),e.setAttribute("tabindex","-1"),e.setAttribute("aria-hidden","true"),e.style.userSelect="none")}unlockElement(e,t){"string"==typeof e.tabIndex?t.setAttribute("tabindex",e.tabIndex):t.removeAttribute("tabindex"),t.removeAttribute("aria-hidden"),t.style.userSelect="unset",this.lockedElements.delete(t)}unlockLockedElements(e){e.forEach(this.unlockElement.bind(this))}lockFocus(e,t){try{if(e!==t&&(e instanceof HTMLElement||e instanceof ShadowRoot)){e instanceof HTMLElement&&(this.lockElement(e),this.lockFocus(e.shadowRoot,t));for(let o=0;o<e.children.length;o++)this.lockFocus(e.children[o],t)}}catch(e){}}renderModalIfExists(e){if(e instanceof HTMLElement){this.lockedElements.has(e)&&this.unlockElement(this.lockedElements.get(e),e);const t=setTimeout((()=>{clearTimeout(t),e.focus()}),500)}if(this.unlockLockedElements(this.lockedElements),this.modalStack.size>0){const e=Array.from(this.modalStack.keys()),t=e[e.length-1];this.modalStack.forEach(((e,o)=>{o.style.display=t===o?"inline":"none"})),getDocument().body.style.maxHeight="100vh",getDocument().body.style.overflow="hidden",this.lockFocus(getDocument().body,t)}else getDocument().body.style.maxHeight="unset",getDocument().body.style.overflow="unset"}openModal(e,t){e instanceof HTMLElement==!1?Log.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide."):(this.modalStack.set(e,{activeElement:t}),this.renderModalIfExists())}closeModal(e){var t;if(e instanceof HTMLElement==!1)Log.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide.");else{const o=null===(t=this.modalStack.get(e))||void 0===t?void 0:t.activeElement;this.modalStack.delete(e),this.renderModalIfExists(o)}}}let WINDOW=null,DOCUMENT=null;const configKoliBri=e=>{e instanceof Window?(WINDOW=e,WINDOW.document instanceof Document?DOCUMENT=e.document:console.warn("The given Window has no valid Document.")):console.warn("The given Window is not valid.")},getWindow=()=>WINDOW||"undefined"==typeof window?null:window,getDocument=()=>DOCUMENT||void 0===getWindow().document?null:getWindow().document;let META_CONFIG=null,DEV_MODE=null,EXPERIMENTAL_MODE=null,COLOR_CONTRAST_ANALYSIS=null;const getDevMode=()=>!0===DEV_MODE,getExperimentalMode=()=>!0===EXPERIMENTAL_MODE,getColorContrastAnalysis=()=>!0===COLOR_CONTRAST_ANALYSIS;class Log{static mapToArray(e){return Array.isArray(e)?e:[e]}static handleClassifier(e){return"string"==typeof e&&e.length>0?`${Log.shield.label} | ${e}`:Log.shield.label}static getShield(e){return[Log.handleClassifier(null==e?void 0:e.classifier),`${Log.shield.style};${(null==e?void 0:e.overwriteStyle)||""}`]}static debug(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.debug(...Log.getShield(t),...Log.mapToArray(e))}static info(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.info(...Log.getShield(t),...Log.mapToArray(e))}static trace(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.trace(...Log.getShield(t),...Log.mapToArray(e))}static warn(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.warn(...Log.getShield(t),...Log.mapToArray(e))}static error(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.error(...Log.getShield(t),...Log.mapToArray(e))}static throw(e,t){if(DEV_MODE||!0===(null==t?void 0:t.forceLog))throw new Error(...Log.getShield(t),...Log.mapToArray(e))}}Log.shield={label:"%cKoliBri",style:"color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000"};const initMeta=()=>{if(null===DEV_MODE&&null===EXPERIMENTAL_MODE&&null===COLOR_CONTRAST_ANALYSIS){const e=getDocument().querySelector('meta[name="kolibri"]');e&&e.hasAttribute("content")&&(META_CONFIG=e.getAttribute("content"),"string"==typeof META_CONFIG&&(DEV_MODE=META_CONFIG.includes("dev-mode=true"),EXPERIMENTAL_MODE=META_CONFIG.includes("experimental-mode=true"),COLOR_CONTRAST_ANALYSIS=META_CONFIG.includes("color-contrast-analysis=true")))}else console.warn("You can only initialize DEV_MODE and COLOR_CONTRAST_ANALYSIS once.")};let KoliBri=null;const getKoliBri=()=>KoliBri||{},initKoliBri=()=>{if(null===KoliBri){KoliBri=getWindow().KoliBri||{};const e=new ModalService;Object.defineProperty(KoliBri,"Modal",{get:function(){return e}}),initMeta(),Log.debug("\n\t,--. ,--.         ,--. ,--. ,-----.           ,--.\n\t|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n\t|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n\t|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\t`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n\t🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.0.0-rc.9\n\t\t",{forceLog:!0})}else console.warn("You can only initialize KoliBri once.")},renderDevAdvice=()=>{void 0===getWindow().KoliBri&&Object.defineProperty(window,"KoliBri",{get:function(){return KoliBri}}),!0!==getKoliBri().adviceShown&&(Object.defineProperty(KoliBri,"adviceShown",{get:function(){return!0}}),Log.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let nonce=()=>Math.floor(16777215*Math.random()).toString(16);"test"===processEnv&&(nonce=()=>"nonce");export{KoliBri as K,Log as L,STORE as S,patchThemeTag as a,getDocument as b,configKoliBri as c,getExperimentalMode as d,getKoliBri as e,createCommonjsModule as f,getThemeDetails as g,getDevMode as h,initKoliBri as i,renderDevAdvice as j,getColorContrastAnalysis as k,nonce as n,patchTheme as p,register as r,setThemeStyle as s};