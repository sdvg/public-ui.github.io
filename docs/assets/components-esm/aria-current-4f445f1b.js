/*! * KoliBri - The accessible HTML-Standard */ import{d as watchString,w as watchValidator}from"./prop.validators-464644b7.js";const validateAriaControls=(a,t)=>{watchString(a,"_ariaControls",t)},validate=(a,t,r)=>{watchValidator(a,t,(a=>"date"===a||"location"===a||"page"===a||"step"===a||"time"===a||!0===a||!1===a),new Set(["String {data, location, page, step, time}","boolean"]),r)},validateAriaCurrent=(a,t)=>{validate(a,"_ariaCurrent",t)},validateListenAriaCurrent=(a,t)=>{validate(a,"_listenAriaCurrent",t)};export{validateAriaCurrent as a,validateListenAriaCurrent as b,validateAriaControls as v};