/*! For license information please see 1325.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1325],{5507:(t,e,s)=>{s.d(e,{i:()=>i,n:()=>r,r:()=>l});var a=s(1330),n=s(3713);const o=()=>{let t=(0,n.d)().KoliBri;return void 0===t&&(t={},Object.defineProperty((0,n.d)(),"KoliBri",{value:t,writable:!1})),t},i=()=>{(()=>{const t=(0,n.g)().querySelector('meta[name="kolibri"]');if(t&&t.hasAttribute("content")){const e=t.getAttribute("content");"string"==typeof e&&((0,n.s)(e.includes("dev-mode=true")),(0,n.b)(e.includes("experimental-mode=true")),(0,n.c)(e.includes("color-contrast-analysis=true")))}})(),n.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.1.3\n\t",{forceLog:!0})},l=()=>{!0!==o().adviceShown&&(Object.defineProperty(o(),"adviceShown",{get:function(){return!0}}),n.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let r=()=>Math.floor(16777215*Math.random()).toString(16);"test"===a.p&&(r=()=>"nonce")},7186:(t,e,s)=>{s.d(e,{t:()=>o});var a=s(9177),n=s(1330);let o=(t,e)=>{var s;return(null!==(s=(0,a.g)())&&void 0!==s?s:(0,a.i)("de")).translate(t,e)};"test"===n.p&&(o=t=>t)},1325:(t,e,s)=>{s.r(e),s.d(e,{kol_toast_container:()=>c});var a=s(6981),n=s(7186),o=s(5507),i=s(3189),l=(t,e,s)=>new Promise(((a,n)=>{var o=t=>{try{l(s.next(t))}catch(t){n(t)}},i=t=>{try{l(s.throw(t))}catch(t){n(t)}},l=t=>t.done?a(t.value):Promise.resolve(t.value).then(o,i);l((s=s.apply(t,e)).next())}));const r=({key:t,onClose:e,onRef:s,toastState:n})=>(0,a.h)("div",{class:`toast ${n.status}`,key:t},(0,a.h)(i.k,{class:"alert",_alert:!0,_label:n.toast.label,_level:0,_hasCloser:!0,_type:n.toast.type,_variant:n.toast.alertVariant||"card",_on:{onClose:e}},(0,a.h)("div",{ref:s},"string"==typeof n.toast.description?n.toast.description:null))),c=class{constructor(t){(0,a.r)(this,t),this.knownRenderFunctions=new Set,this.state={_toastStates:[]}}enqueue(t){return l(this,null,(function*(){const e={toast:t,status:"adding",id:`toast-${(0,o.n)()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[e,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>t.id===e.id&&"removing"!==t.status?Object.assign(Object.assign({},t),{status:"settled"}):t))})}),300),()=>{this.handleClose(e)}}))}handleClose(t){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((e=>(e.id===t.id&&(e.status="removing"),e)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((e=>e.id!==t.id))})}),300)}closeAll(t=!1){return l(this,null,(function*(){if(t)this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]});else{const t=[...this.state._toastStates];this.state=Object.assign(Object.assign({},this.state),{_toastStates:t.map((t=>Object.assign(Object.assign({},t),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((e=>t.every((t=>t.id!==e.id))))})}),300)}}))}handleToastRef(t,e){e&&"function"==typeof t.toast.render&&!this.knownRenderFunctions.has(t.toast.render)&&(this.knownRenderFunctions.add(t.toast.render),t.toast.render(e,{close:()=>this.handleClose(t)}))}render(){return(0,a.h)(a.H,{key:"4d7752f9c0213f4f307f79934a7c36ed0dc62087",class:"kol-toast-container"},this.state._toastStates.length>1&&(0,a.h)(i.o,{key:"8837aeb34d2d0185e7c69997da07eeb95119177a",_label:(0,n.t)("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((t=>(0,a.h)(r,{key:t.id,onClose:()=>this.handleClose(t),onRef:e=>this.handleToastRef(t,e),toastState:t}))))}};c.style={default:"@layer kol-component {\n  :host {\n    display: flex;\n    flex-direction: column;\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n    position: fixed;\n    z-index: 200;\n  }\n  .close-all {\n    align-self: flex-end;\n  }\n}"}},1330:(t,e,s)=>{s.d(e,{S:()=>i,a:()=>l,b:()=>o,c:()=>a,h:()=>c,i:()=>n,p:()=>r,s:()=>d});const a=t=>"object"==typeof t&&null!==t,n=(t,e=0)=>"string"==typeof t&&t.length>=e,o=t=>{if("object"!=typeof t||null===t)return n(t,1);for(const e in t)if(!1===n(e,1))return!1;return!0},i=new Event("StateChange"),l=(t,e)=>{a(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))};let r="development";try{r="production"}catch(t){r="production"}const c=(t,e,s)=>{if(t&&e&&"string"==typeof s){const a=t.querySelector(`[slot="${s}"]`);a&&e.appendChild(a)}},d=t=>""===t}}]);