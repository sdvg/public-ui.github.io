/*! For license information please see 3523.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3523],{43523:(t,e,i)=>{i.r(e),i.d(e,{initialize:()=>a});var r=i(60473),l=i(26304);function n(t,e){try{Object.defineProperty((0,l.g)(),t,{get:function(){return e}})}catch(e){r.L.debug(`KoliBri property ${t} is already bind.`)}}const o=(t,e)=>r.L.debug(`${t} ${e?"":"not "}activated`),a=()=>{if((0,l.i)(),(0,r.aR)()){(0,l.r)(),n("a11yColorContrast",r.aU),n("querySelector",r.at),n("querySelectorAll",r.aV),n("querySelectorColors",r.aW),n("utils",(function(){return r.aT})),n("parseJson",r.u),n("stringifyJson",r.aX);const t=(0,r.g)().body,e=(0,r.g)().createElement("svg");if(e.setAttribute("aria-label","KoliBri-DevTools"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("role","toolbar"),e.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),e.innerHTML='<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="50"\n  height="50"\n  viewBox="0 0 600 600"\n>\n  <path d="M353 322L213 304V434L353 322Z" fill="#047" />\n  <path d="M209 564V304L149 434L209 564Z" fill="#047" />\n  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />\n  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />\n  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />\n  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />\n</svg>',(0,r.g)().body.appendChild(e),o("Development mode",(0,r.aR)()),o("Experimental mode",(0,r.a0)()),o("Color contrast analysis",(0,r.aS)()),(0,r.aS)()){const e=setTimeout((()=>{clearTimeout(e),setInterval((()=>{r.aT.queryHtmlElementColors((0,r.g)().createElement("div"),(0,r.aU)(t),!1,!1)}),1e4)}),2500)}}}}}]);