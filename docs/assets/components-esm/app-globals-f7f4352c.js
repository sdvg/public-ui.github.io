/*! * KoliBri - The accessible HTML-Standard */ import{L as Log,e as ee,S}from"./dev.utils-da51d5d8.js";import{a as setMode}from"./index-6ea18cec.js";import{r as register}from"./index-9fc5c44a.js";import{p as processEnv}from"./reuse-d79ab469.js";const appGlobalScript=async()=>{setMode((o=>{try{o.shadowRoot instanceof ShadowRoot&&ee(o,S(o))}catch(o){}return"default"})),await register([],[]),import("./devtools-308d0386.js").then((o=>{"object"==typeof o&&null!==o&&"function"==typeof o.initialize&&o.initialize()})).catch((o=>{Log.error(o)})),processEnv&&import("./index-a4a4df51.js")},globalScripts=appGlobalScript;export{globalScripts as g};