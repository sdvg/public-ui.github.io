/*! For license information please see tab-index-bffbd9f3.js.LICENSE.txt */ import{k as watchNumber,a as a11yHint}from"./prop.validators-f2b9a155.js";const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&a11yHint("Don't Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{watchNumber(a,"_tabIndex",t,options)};export{validateTabIndex as v};