/*! * KoliBri - The accessible HTML-Standard */ import{c as watchJsonArrayString}from"./prop.validators-0c664b0b.js";import{a as a11yHint}from"./a11y.tipps-7abac3bc.js";const validateSuggestions=(s,t)=>{watchJsonArrayString(s,"_suggestions",(s=>"string"==typeof s||"number"==typeof s),t,void 0,{hooks:{afterPatch:s=>{Array.isArray(s)&&s.length&&a11yHint("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})};export{validateSuggestions as v};