/*! * KoliBri - The accessible HTML-Standard */ import{t as emptyStringByArrayHandler,o as objectObjectHandler,p as parseJson,s as setState}from"./prop.validators-28badc7d.js";const validateTableData=(a,t,e)=>{emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{void 0===t&&(t=[]);try{t=parseJson(t)}catch(a){}Array.isArray(t)&&t.every((a=>"object"==typeof a&&null!==a))&&setState(a,"_data",t,e)}))}))},validateTableDataFoot=(a,t,e)=>{emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{void 0===t&&(t=[]);try{t=parseJson(t)}catch(a){}Array.isArray(t)&&t.every((a=>"object"==typeof a&&null!==a))&&setState(a,"_dataFoot",t,e)}))}))};export{validateTableDataFoot as a,validateTableData as v};