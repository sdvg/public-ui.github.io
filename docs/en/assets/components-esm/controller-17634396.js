/*! * KoliBri - The accessible HTML-Standard */ import{d as devHint}from"./a11y.tipps-7abac3bc.js";import{d as getExperimentalMode}from"./dev.utils-a3434f6d.js";import{f as setEventTarget,K as KoliBriDevHelper}from"./prop.validators-0c664b0b.js";const searchFormElement=e=>{for(getExperimentalMode()&&(devHint("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;){try{e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null}catch(e){}getExperimentalMode()&&(console.log(e),devHint("↑ Search form element finished."))}return e},propagateResetEventToForm=(e={})=>{var t,o;const n=searchFormElement(e.form);if(n instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===n.tagName)setEventTarget(e,n),n.dispatchEvent(e);else if("KOL-FORM"===n.tagName){setEventTarget(e,KoliBriDevHelper.querySelector("form",n));const a=n;"function"==typeof(null===(t=a._on)||void 0===t?void 0:t.onReset)&&(null===(o=a._on)||void 0===o||o.onReset(e))}}},propagateSubmitEventToForm=(e={})=>{var t,o;const n=searchFormElement(e.form);if(n instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:n});if("FORM"===n.tagName)setEventTarget(e,n),n.dispatchEvent(e),n.submit();else if("KOL-FORM"===n.tagName){setEventTarget(e,KoliBriDevHelper.querySelector("form",n));const a=n;"function"==typeof(null===(t=a._on)||void 0===t?void 0:t.onSubmit)&&(null===(o=a._on)||void 0===o||o.onSubmit(e))}}};export{propagateResetEventToForm as a,propagateSubmitEventToForm as p};