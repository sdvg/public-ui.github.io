/*! * KoliBri - The accessible HTML-Standard */ import{i as initKoliBri,h as getDevMode,j as renderDevAdvice,b as getDocument,L as Log,d as getExperimentalMode,k as getColorContrastAnalysis,K as KoliBri}from"./dev.utils-babc1742.js";import{l as KoliBriUtils,n as koliBriA11yColorContrast,k as koliBriQuerySelector,q as koliBriQuerySelectorAll,t as koliBriQuerySelectorColors,p as parseJson,u as stringifyJson}from"./prop.validators-445950f8.js";import"./reuse-b3566e4c.js";import"./a11y.tipps-1e89ea61.js";function prototypeKoliBri(e,o){try{Object.defineProperty(KoliBri,e,{get:function(){return o}})}catch(o){Log.debug(`KoliBri property ${e} is already bind.`)}}const metaModeLog=(e,o)=>Log.debug(`${e} ${o?"":"not "}activated`),initialize=()=>{if(initKoliBri(),getDevMode()){renderDevAdvice(),prototypeKoliBri("a11yColorContrast",koliBriA11yColorContrast),prototypeKoliBri("querySelector",koliBriQuerySelector),prototypeKoliBri("querySelectorAll",koliBriQuerySelectorAll),prototypeKoliBri("querySelectorColors",koliBriQuerySelectorColors),prototypeKoliBri("utils",(function(){return KoliBriUtils})),prototypeKoliBri("parseJson",parseJson),prototypeKoliBri("stringifyJson",stringifyJson);const e=getDocument().body,o=getDocument().createElement("svg");if(o.setAttribute("aria-label","KoliBri-DevTools"),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("role","toolbar"),o.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),o.innerHTML='<svg \n xmlns="http://www.w3.org/2000/svg" \n width="50" \n height="50" \n viewBox="0 0 600 600" \n>\n <path d="M353 322L213 304V434L353 322Z" fill="#047"/>\n <path d="M209 564V304L149 434L209 564Z" fill="#047"/>\n <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047"/>\n <path d="M353 318L35 36L213 300L353 318Z" fill="#047"/>\n <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047"/>\n <path d="M391 286L565 272L421 252L391 286Z" fill="#047"/>\n</svg>',getDocument().body.appendChild(o),metaModeLog("Development mode",getDevMode()),metaModeLog("Experimental mode",getExperimentalMode()),metaModeLog("Color contrast analysis",getColorContrastAnalysis()),getColorContrastAnalysis()){const o=setTimeout((()=>{clearTimeout(o),setInterval((()=>{KoliBriUtils.queryHtmlElementColors(getDocument().createElement("div"),koliBriA11yColorContrast(e),!1,!1)}),1e4)}),2500)}}};export{initialize};