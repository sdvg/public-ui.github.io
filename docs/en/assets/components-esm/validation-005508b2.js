/*! * KoliBri - The accessible HTML-Standard */ import{w as watchValidator,o as headingLevelOptions}from"./index-c3ae175d.js";const watchHeadingLevel=(e,a)=>{watchValidator(e,"_level",(e=>"number"==typeof e&&headingLevelOptions.includes(e)),new Set([`Number {${headingLevelOptions.join(", ")}`]),a,{defaultValue:1,required:!0})};export{watchHeadingLevel as w};