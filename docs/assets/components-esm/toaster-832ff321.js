/*! * KoliBri - The accessible HTML-Standard */ class ToasterService{constructor(t){this.document=t,this.queue=new Set,this.isOpen=!1,this.toastElement=this.document.createElement("kol-toast"),this.toastElement.setAttribute("_level","0"),this.toastElement.setAttribute("_show","false"),this.toastElement.setAttribute("_show-duration","-1"),this.toastElement.setAttribute("_has-closer","true"),this.toastElement._on={onClose:()=>{const t=this.queue.values().next();t.value?(this.queue.delete(t.value),setTimeout((()=>{this.showToast(t.value)}),200)):this.isOpen=!1}},this.document.body.insertBefore(this.toastElement,this.document.body.firstChild)}static getInstance(t){let e=this.instances.get(t);return e||(e=new ToasterService(t),this.instances.set(t,e)),e}dispose(){const t=this.toastElement;if(t){this.toastElement=void 0,this.queue.clear(),t.remove();const e=t._on;e&&e.onClose&&e.onClose(new Event("dispose"))}else console.warn("Toaster service is already disposed.")}enqueue(t){this.isOpen?this.queue.add(t):this.showToast(t)}showToast(t){const e=t.label||t.heading;if(void 0===e)throw new Error("Toast requires a label.");this.toastElement?(this.toastElement.setAttribute("_label",e),this.toastElement.setAttribute("_show","true"),this.toastElement.setAttribute("_type",t.type),this.toastElement.innerText=t.description,this.isOpen=!0):console.warn("Tried to show a new toast at a disposed toaster service!")}}ToasterService.instances=new Map;export{ToasterService as T};