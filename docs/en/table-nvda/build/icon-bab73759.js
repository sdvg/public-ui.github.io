/*! For license information please see icon-bab73759.js.LICENSE.txt */ import{o,p as i,a as n}from"./prop.validators-0a66a178.js";import{i as t,b as e,c as l}from"./reuse-c2156413.js";const c=(o,e,i)=>{l(i)?o[e]=i:t(i,1)&&(o[e]={icon:i})},s=(o,e)=>{let i={};if(t(o,1))if("right"===e)i={right:{icon:o}};else i={left:{icon:o}};else"object"==typeof o&&null!==o&&(c(i,"top",o.top),c(i,"right",o.right),c(i,"bottom",o.bottom),c(i,"left",o.left));return i},r=t=>{var o,e,i,n,l,c,a;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(e=t.nextState)||void 0===e?void 0:e.get("_icon"),l=(null===(i=t.nextState)||void 0===i?void 0:i.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",s(o,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const o=t.state._iconAlign;null===(c=t.nextState)||void 0===c||c.set("_icon",{[o]:void 0,[null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign")]:t.state._icon[o]})}},f=o=>"object"==typeof o&&null!==o&&(void 0===o.style||e(o.style))&&t(o.icon,1),a=(e,l)=>{o(l,(()=>{try{l=i(l)}catch(o){}n(e,"_icon",(o=>null===o||t(o,1)||"object"==typeof o&&null!==o&&(t(o.left,1)||f(o.left)||t(o.right,1)||f(o.right)||t(o.top,1)||f(o.top)||t(o.bottom,1)||f(o.bottom))),new Set(["KoliBriIcon"]),l,{hooks:{beforePatch:(t,o)=>{null===t&&o.set("_icon",{}),r(e)}},required:!0})}))},d=(t,o)=>{n(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{r(t)}}})};export{f as i,a as v,d as w};