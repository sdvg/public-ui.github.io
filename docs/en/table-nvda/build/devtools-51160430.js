/*! For license information please see devtools-51160430.js.LICENSE.txt */ import{i as t,e as o,r as s,g as e,L as a,b as r,f as i,K as l}from"./dev.utils-5b0de6da.js";import{l as n,n as p,k as c,q as d,t as f,p as L,u as m}from"./prop.validators-0a66a178.js";import"./reuse-c2156413.js";import"./a11y.tipps-beae7792.js";import"./index-3711603c.js";function u(t,e){try{Object.defineProperty(l,t,{get:function(){return e}})}catch(e){a.debug(`KoliBri property ${t} is already bind.`)}}const h=(t,e)=>a.debug(`${t} ${e?"":"not "}activated`),v=()=>{if(t(),o()){s(),u("a11yColorContrast",p),u("querySelector",c),u("querySelectorAll",d),u("querySelectorColors",f),u("utils",(function(){return n})),u("parseJson",L),u("stringifyJson",m);const t=e().body,a=e().createElement("svg");if(a.setAttribute("aria-label","KoliBri-DevTools"),a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("role","toolbar"),a.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),a.innerHTML='<svg \n xmlns="http://www.w3.org/2000/svg" \n width="50" \n height="50" \n viewBox="0 0 600 600" \n>\n <path d="M353 322L213 304V434L353 322Z" fill="#047"/>\n <path d="M209 564V304L149 434L209 564Z" fill="#047"/>\n <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047"/>\n <path d="M353 318L35 36L213 300L353 318Z" fill="#047"/>\n <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047"/>\n <path d="M391 286L565 272L421 252L391 286Z" fill="#047"/>\n</svg>',e().body.appendChild(a),h("Development mode",o()),h("Experimental mode",r()),h("Color contrast analysis",i()),i()){const o=setTimeout((()=>{clearTimeout(o),setInterval((()=>{n.queryHtmlElementColors(e().createElement("div"),p(t),!1,!1)}),1e4)}),2500)}}};export{v as initialize};