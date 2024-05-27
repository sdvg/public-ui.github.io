/*! * KoliBri - The accessible HTML-Standard */ import{q as setEventTarget,K as KoliBriDevHelper,j as devHint}from"./prop.validators-28badc7d.js";import{a as getExperimentalMode}from"./dev.utils-1ca991a2.js";const searchFormElement=e=>{for(getExperimentalMode()&&(devHint("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;){try{e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null}catch(e){}getExperimentalMode()&&(console.log(e),devHint("↑ Search form element finished."))}return e},propagateResetEventToForm=(e={})=>{var t,o;const n=searchFormElement(e.form);if(n instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===n.tagName)setEventTarget(e,n),n.dispatchEvent(e);else if("KOL-FORM"===n.tagName){setEventTarget(e,KoliBriDevHelper.querySelector("form",n));const a=n;"function"==typeof(null===(t=a._on)||void 0===t?void 0:t.onReset)&&(null===(o=a._on)||void 0===o||o.onReset(e))}}},propagateSubmitEventToForm=(e={})=>{const t=searchFormElement(e.form);if(t instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t});if("FORM"===t.tagName)getExperimentalMode()&&!1===t.noValidate&&devHint("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof t.requestSubmit?t.requestSubmit():(setEventTarget(e,t),t.dispatchEvent(e))}));else if("KOL-FORM"===t.tagName){setEventTarget(e,KoliBriDevHelper.querySelector("form",t));const o=t;setTimeout((()=>{var t,n;"function"==typeof(null===(t=o._on)||void 0===t?void 0:t.onSubmit)&&(null===(n=o._on)||void 0===n||n.onSubmit(e))}))}}};export{propagateResetEventToForm as a,propagateSubmitEventToForm as p};