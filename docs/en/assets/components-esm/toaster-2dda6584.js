/*! * KoliBri - The accessible HTML-Standard */ class ToasterService{constructor(e){this.document=e,this.toastContainerElement=this.document.createElement("kol-toast-container"),this.document.body.prepend(this.toastContainerElement)}static getInstance(e){let t=this.instances.get(e);return t||(t=new ToasterService(e),this.instances.set(e,t)),t}dispose(){const e=this.toastContainerElement;e?(this.toastContainerElement=void 0,e.remove()):console.warn("Toaster service is already disposed.")}async enqueue(e){var t;await(null===(t=this.toastContainerElement)||void 0===t?void 0:t.enqueue(e))}}ToasterService.instances=new Map;export{ToasterService as T};