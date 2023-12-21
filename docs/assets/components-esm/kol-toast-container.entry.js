/*! * KoliBri - The accessible HTML-Standard */ import{h,r as registerInstance,F as Fragment}from"./index-5dfe6d77.js";import{a as translate}from"./i18n-9a4c8edc.js";import{n as nonce}from"./dev.utils-889226ab.js";import"./index-12eec578.js";import"./a11y.tipps-f14bff66.js";import"./reuse-d79ab469.js";const InternalToast=({toastState:t,onClose:s,key:e})=>h("div",{class:`toast ${t.status}`,key:e},h("kol-alert",{class:"alert",_alert:!0,_label:t.toast.label,_level:0,_hasCloser:!0,_type:t.toast.type,_variant:t.toast.alertVariant||"card",_on:{onClose:s}},h("div",{ref:e=>{"function"==typeof t.toast.render&&e&&t.toast.render(e,{close:()=>s()})}},"string"==typeof t.toast.description?t.toast.description:null))),defaultStyleCss="@layer kol-component {\n\t:host {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: fixed;\n\t\tz-index: 200;\n\t}\n\n\t.close-all {\n\t\talign-self: flex-end;\n\t}\n}\n",TRANSITION_TIMEOUT=300,KolToastContainer=class{constructor(t){registerInstance(this,t),this.state={_toastStates:[]}}async enqueue(t){const s={toast:t,status:"adding",id:`toast-${nonce()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[s,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>t.id===s.id?Object.assign(Object.assign({},t),{status:"settled"}):t))})}),300),()=>{this.handleClose(s)}}handleClose(t){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((s=>(s.id===t.id&&(s.status="removing"),s)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((s=>s.id!==t.id))})}),300)}async closeAll(){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>Object.assign(Object.assign({},t),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]})}),300)}render(){return h(Fragment,null,this.state._toastStates.length>1&&h("kol-button",{_label:translate("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((t=>h(InternalToast,{toastState:t,onClose:()=>this.handleClose(t),key:t.id}))))}};KolToastContainer.style={default:defaultStyleCss};export{KolToastContainer as kol_toast_container};