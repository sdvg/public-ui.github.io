/*! * KoliBri - The accessible HTML-Standard */ import{a as setMode}from"./index-9c30809b.js";import{r as register}from"./index-b79e4012.js";import{L as Log,s as setThemeStyle,g as getThemeDetails}from"./dev.utils-075f4e7b.js";import{p as processEnv}from"./reuse-b3566e4c.js";const appGlobalScript=async()=>{setMode((e=>{try{e.shadowRoot instanceof ShadowRoot&&setThemeStyle(e,getThemeDetails(e))}catch(e){}return"default"})),await register([],[]),import("./devtools-d3472315.js").then((e=>{"object"==typeof e&&null!==e&&"function"==typeof e.initialize&&e.initialize()})).catch((e=>{Log.error(e)})),processEnv&&import("./index-a098db81.js")},globalScripts=appGlobalScript;export{globalScripts as g};