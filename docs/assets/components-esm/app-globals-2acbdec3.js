/*! * KoliBri - The accessible HTML-Standard */ import{L as Log,p as processEnv,e as ee,S}from"./index-c3ae175d.js";import{a as setMode}from"./index-a5e15b1e.js";import{r as register}from"./index-eb50dd62.js";const appGlobalScript=async()=>{setMode((e=>{try{e.shadowRoot instanceof ShadowRoot&&ee(e,S(e))}catch(e){}return"default"})),await register([],[]),import("./devtools-4bcff5b1.js").then((e=>{"object"==typeof e&&null!==e&&"function"==typeof e.initialize&&e.initialize()})).catch((e=>{Log.error(e)})),processEnv&&import("./index-12a653a5.js")},globalScripts=appGlobalScript;export{globalScripts as g};