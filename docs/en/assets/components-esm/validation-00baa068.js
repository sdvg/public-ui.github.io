/*! For license information please see validation-00baa068.js.LICENSE.txt */ import{h as headingLevelOptions}from"./label-452f8c01.js";import{w as watchValidator}from"./prop.validators-f2b9a155.js";const watchHeadingLevel=(e,a)=>{watchValidator(e,"_level",(e=>"number"==typeof e&&headingLevelOptions.includes(e)),new Set([`Number {${headingLevelOptions.join(", ")}`]),a,{defaultValue:1,required:!0})};export{watchHeadingLevel as w};