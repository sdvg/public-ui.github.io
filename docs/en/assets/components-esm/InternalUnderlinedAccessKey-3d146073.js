/*! * KoliBri - The accessible HTML-Standard */ import{h,F as Fragment}from"./index-5dfe6d77.js";const InternalUnderlinedAccessKey=({accessKey:e,label:n})=>{let[l,...t]=n.split(e);return 0===t.length&&(e=e.toUpperCase(),[l,...t]=n.split(e)),0===t.length&&(e=e.toLowerCase(),[l,...t]=n.split(e)),h(Fragment,null,l,t.length?h(Fragment,null,h("u",null,e),t.join(e)):null)};export{InternalUnderlinedAccessKey as I};