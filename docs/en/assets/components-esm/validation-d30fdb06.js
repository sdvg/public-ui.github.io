/*! * KoliBri - The accessible HTML-Standard */ import{g as watchJsonArrayString,h as uiUxHintMillerscheZahl}from"./prop.validators-28badc7d.js";const watchNavLinks=(t,a,s)=>{watchJsonArrayString(a,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),s),uiUxHintMillerscheZahl(t,a.state._links.length)};export{watchNavLinks as w};