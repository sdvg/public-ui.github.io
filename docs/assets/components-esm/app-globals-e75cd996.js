/*! * KoliBri - The accessible HTML-Standard */ import{a as setMode}from"./index-0bc40dc4.js";import{r as register}from"./index-328ae082.js";import{L as Log,s as setThemeStyle,g as getThemeDetails}from"./dev.utils-0ab1db26.js";import{p as processEnv}from"./reuse-b3566e4c.js";const appGlobalScript=async()=>{setMode((e=>{try{e.shadowRoot instanceof ShadowRoot&&setThemeStyle(e,getThemeDetails(e))}catch(e){}return"default"})),await register([],[]),import("./devtools-7e61d88e.js").then((e=>{"object"==typeof e&&null!==e&&"function"==typeof e.initialize&&e.initialize()})).catch((e=>{Log.error(e)})),processEnv&&import("./index-9b519d08.js")},globalScripts=appGlobalScript;export{globalScripts as g};