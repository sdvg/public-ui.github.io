/*! * KoliBri - The accessible HTML-Standard */ import{a as watchValidator,b as watchBoolean}from"./prop.validators-601f1068.js";const validateAriaCurrent=(a,t)=>{watchValidator(a,"_ariaCurrent",(a=>"date"===a||"location"===a||"page"===a||"step"===a||"time"===a||!0===a),new Set(["String {data, location, page, step, time}","boolean"]),t)},validateAriaSelected=(a,t)=>{watchBoolean(a,"_ariaSelected",t)};export{validateAriaSelected as a,validateAriaCurrent as v};