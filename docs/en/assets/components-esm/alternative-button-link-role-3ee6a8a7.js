/*! * KoliBri - The accessible HTML-Standard */ import{d as watchString,w as watchValidator}from"./prop.validators-fba03cca.js";const validateAriaControls=(a,t)=>{watchString(a,"_ariaControls",t)},validate=(a,t,i)=>{watchValidator(a,t,(a=>"date"===a||"location"===a||"page"===a||"step"===a||"time"===a||!0===a||!1===a),new Set(["String {data, location, page, step, time}","boolean"]),i)},validateAriaCurrent=(a,t)=>{validate(a,"_ariaCurrent",t)},validateListenAriaCurrent=(a,t)=>{validate(a,"_listenAriaCurrent",t)},validateAlternativeButtonLinkRole=(a,t)=>{watchString(a,"_role",t)};export{validateAriaCurrent as a,validateListenAriaCurrent as b,validateAlternativeButtonLinkRole as c,validateAriaControls as v};