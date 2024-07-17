/*! For license information please see toaster-3755abc8.js.LICENSE.txt */ import{s as setCustomTagNames,K as KolToastContainerTag}from"./component-names-e522484e.js";import{G}from"./index-db4aa6e4.js";import{i as initializeI18n}from"./i18n-ebe0c4cb.js";let initialized=!1;const bootstrap=async(t,e,i)=>{var n,o;initializeI18n(null!==(o=null===(n=null==i?void 0:i.translation)||void 0===n?void 0:n.name)&&void 0!==o?o:"de",null==i?void 0:i.translations),(null==i?void 0:i.transformTagName)&&setCustomTagNames(null==i?void 0:i.transformTagName);const s=await G(t,e,i);return initialized=!0,s},register=bootstrap,isInitialized=()=>initialized;class ToasterService{constructor(t,e){this.document=t,this.options=e,this.toastContainerElement=this.document.createElement(KolToastContainerTag),this.document.body.prepend(this.toastContainerElement)}static getInstance(t,e){if(!isInitialized())throw new Error("Toaster: Call KoliBri bootstrap/register method first.");let i=this.instances.get(t);return i||(i=new ToasterService(t,e),this.instances.set(t,i)),i}dispose(){const t=this.toastContainerElement;t?(this.toastContainerElement=void 0,t.remove()):console.warn("Toaster service is already disposed.")}enqueue(t){var e,i;if(this.toastContainerElement&&"function"==typeof this.toastContainerElement.enqueue)return!t.alertVariant&&(null===(e=this.options)||void 0===e?void 0:e.defaultAlertVariant)&&(t.alertVariant=null===(i=this.options)||void 0===i?void 0:i.defaultAlertVariant),this.toastContainerElement.enqueue(t)}closeAll(t=!1){this.toastContainerElement&&"function"==typeof this.toastContainerElement.closeAll&&this.toastContainerElement.closeAll(t)}}ToasterService.instances=new Map;export{ToasterService as T,bootstrap as b,register as r};