/*!
 * KoliBri - The accessible HTML-Standard
 */
import{T as ToasterService}from"./toaster-d95de236.js";import"./component-names-791b1799.js";import"./index-4a3076fc.js";import"./i18n-9eed57c7.js";var _a,_b;const toaster=ToasterService.getInstance(document);toaster.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"});let myToastId=0;null===(_a=document.getElementById("oneToast"))||void 0===_a||_a.addEventListener("kol-click",(()=>{toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})})),null===(_b=document.getElementById("manyToast"))||void 0===_b||_b.addEventListener("kol-click",(()=>{for(let e=0;e<5;e++)toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})}));