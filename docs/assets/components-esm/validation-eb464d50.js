/*! * KoliBri - The accessible HTML-Standard */ import{c as uiUxHintMillerscheZahl}from"./a11y.tipps-8ac27a12.js";import{c as watchJsonArrayString}from"./prop.validators-e3efc9be.js";const watchNavLinks=(t,a,s)=>{watchJsonArrayString(a,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),s),uiUxHintMillerscheZahl(t,a.state._links.length)};export{watchNavLinks as w};