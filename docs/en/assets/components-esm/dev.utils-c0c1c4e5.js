/*!
 * KoliBri - The accessible HTML-Standard
 */
import{p as processEnv}from"./reuse-c2156413.js";class ModalService{constructor(){this.lockedElements=new Map,this.modalStack=new Map}lockElement(e){const t=e.getAttribute("tabindex");(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||"string"==typeof t||void 0!==e.dataset.kolModal)&&("string"==typeof t?this.lockedElements.set(e,{tabIndex:t}):this.lockedElements.set(e,{}),e.setAttribute("tabindex","-1"),e.setAttribute("aria-hidden","true"),e.style.userSelect="none")}unlockElement(e,t){"string"==typeof e.tabIndex?t.setAttribute("tabindex",e.tabIndex):t.removeAttribute("tabindex"),t.removeAttribute("aria-hidden"),t.style.userSelect="unset",this.lockedElements.delete(t)}unlockLockedElements(e){e.forEach(this.unlockElement.bind(this))}lockFocus(e,t){if(e!==t&&(e instanceof HTMLElement||e instanceof ShadowRoot)){e instanceof HTMLElement&&(this.lockElement(e),this.lockFocus(e.shadowRoot,t));for(let o=0;o<e.children.length;o++)this.lockFocus(e.children[o],t)}}renderModalIfExists(e){if(e instanceof HTMLElement){this.lockedElements.has(e)&&this.unlockElement(this.lockedElements.get(e),e);const t=setTimeout((()=>{clearTimeout(t),e.focus()}),500)}if(this.unlockLockedElements(this.lockedElements),this.modalStack.size>0){const e=Array.from(this.modalStack.keys()),t=e[e.length-1];this.modalStack.forEach(((e,o)=>{o.style.display=t===o?"inline":"none"})),getDocument().body.style.maxHeight="100vh",getDocument().body.style.overflow="hidden",this.lockFocus(getDocument().body,t)}else getDocument().body.style.maxHeight="unset",getDocument().body.style.overflow="unset"}openModal(e,t){e instanceof HTMLElement==!1?Log.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide."):(this.modalStack.set(e,{activeElement:t}),this.renderModalIfExists())}closeModal(e){var t;if(e instanceof HTMLElement==!1)Log.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide.");else{const o=null===(t=this.modalStack.get(e))||void 0===t?void 0:t.activeElement;this.modalStack.delete(e),this.renderModalIfExists(o)}}}let WINDOW=null,DOCUMENT=null;const configKoliBri=e=>{e instanceof Window?(WINDOW=e,WINDOW.document instanceof Document?DOCUMENT=e.document:console.warn("The given Window has no valid Document.")):console.warn("The given Window is not valid.")},getWindow=()=>WINDOW||"undefined"==typeof window?null:window,getDocument=()=>DOCUMENT||void 0===getWindow().document?null:getWindow().document;let META_CONFIG=null,DEV_MODE=null,EXPERIMENTAL_MODE=null,COLOR_CONTRAST_ANALYSIS=null;const getDevMode=()=>!0===DEV_MODE,getExperimentalMode=()=>!0===EXPERIMENTAL_MODE,getColorContrastAnalysis=()=>!0===COLOR_CONTRAST_ANALYSIS;class Log{static mapToArray(e){return Array.isArray(e)?e:[e]}static handleClassifier(e){return"string"==typeof e&&e.length>0?`${Log.shield.label} | ${e}`:Log.shield.label}static getShield(e){return[Log.handleClassifier(null==e?void 0:e.classifier),`${Log.shield.style};${(null==e?void 0:e.overwriteStyle)||""}`]}static debug(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.debug(...Log.getShield(t),...Log.mapToArray(e))}static info(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.info(...Log.getShield(t),...Log.mapToArray(e))}static trace(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.trace(...Log.getShield(t),...Log.mapToArray(e))}static warn(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.warn(...Log.getShield(t),...Log.mapToArray(e))}static error(e,t){(DEV_MODE||!0===(null==t?void 0:t.forceLog))&&console.error(...Log.getShield(t),...Log.mapToArray(e))}static throw(e,t){if(DEV_MODE||!0===(null==t?void 0:t.forceLog))throw new Error(...Log.getShield(t),...Log.mapToArray(e))}}Log.shield={label:"%cKoliBri",style:"color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000"};const initMeta=()=>{if(null===DEV_MODE&&null===EXPERIMENTAL_MODE&&null===COLOR_CONTRAST_ANALYSIS){const e=getDocument().querySelector('meta[name="kolibri"]');e&&e.hasAttribute("content")&&(META_CONFIG=e.getAttribute("content"),"string"==typeof META_CONFIG&&(DEV_MODE=META_CONFIG.includes("dev-mode=true"),EXPERIMENTAL_MODE=META_CONFIG.includes("experimental-mode=true"),COLOR_CONTRAST_ANALYSIS=META_CONFIG.includes("color-contrast-analysis=true")))}else console.warn("You can only initialize DEV_MODE and COLOR_CONTRAST_ANALYSIS once.")};let KoliBri=null;const getKoliBri=()=>KoliBri||{},initKoliBri=()=>{if(null===KoliBri){KoliBri=getWindow().KoliBri||{};const e=new ModalService;Object.defineProperty(KoliBri,"Modal",{get:function(){return e}}),initMeta(),Log.debug("\n\t,--. ,--.         ,--. ,--. ,-----.           ,--.\n\t|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n\t|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n\t|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\t`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n\t🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 1.6.1\n\t\t",{forceLog:!0})}else console.warn("You can only initialize KoliBri once.")},renderDevAdvice=()=>{void 0===getWindow().KoliBri&&Object.defineProperty(window,"KoliBri",{get:function(){return KoliBri}}),!0!==getKoliBri().adviceShown&&(Object.defineProperty(KoliBri,"adviceShown",{get:function(){return!0}}),Log.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let nonce=()=>Math.floor(16777215*Math.random()).toString(16);"test"===processEnv&&(nonce=()=>"nonce");export{KoliBri as K,Log as L,getWindow as a,getExperimentalMode as b,configKoliBri as c,getKoliBri as d,getDevMode as e,getColorContrastAnalysis as f,getDocument as g,initKoliBri as i,nonce as n,renderDevAdvice as r};