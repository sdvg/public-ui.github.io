/*! For license information please see 900.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[900],{900:(e,t,n)=>{var l,a;n.r(t);const i=n(4046).T.getInstance(document);i.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"});let s=0;null===(l=document.getElementById("oneToast"))||void 0===l||l.addEventListener("kol-click",(()=>{i.enqueue({description:"Toasty "+ ++s,label:"Label",type:"warning"})})),null===(a=document.getElementById("manyToast"))||void 0===a||a.addEventListener("kol-click",(()=>{for(let e=0;e<5;e++)i.enqueue({description:"Toasty "+ ++s,label:"Label",type:"warning"})}))}}]);