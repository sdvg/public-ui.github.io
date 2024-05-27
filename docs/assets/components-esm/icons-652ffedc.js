/*! * KoliBri - The accessible HTML-Standard */ import{o as objectObjectHandler,p as parseJson,w as watchValidator}from"./prop.validators-28badc7d.js";import{i as isString,b as isStyle,c as isObject}from"./reuse-b66836de.js";const mapCustomIcon=(t,o,e)=>{isObject(e)?t[o]=e:isString(e,1)&&(t[o]={icon:e})},mapIconProp2State=t=>{let o={};return isString(t,1)?o={left:{icon:t}}:"object"==typeof t&&null!==t&&(mapCustomIcon(o,"top",t.top),mapCustomIcon(o,"right",t.right),mapCustomIcon(o,"bottom",t.bottom),mapCustomIcon(o,"left",t.left)),o},beforePatchIcon=t=>{var o,e,i;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icons")){const o=null===(e=t.nextState)||void 0===e?void 0:e.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",mapIconProp2State(o))}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||isStyle(t.style))&&(void 0===t.label||isString(t.label))&&isString(t.icon,1),validateIcons=(t,o,e={})=>{objectObjectHandler(o,(()=>{var i;try{o=parseJson(o)}catch(t){}watchValidator(t,"_icons",(t=>{const o="object"==typeof t&&null!==t&&0===Object.keys(t).length;return null===t||o||isString(t,1)||"object"==typeof t&&null!==t&&(isString(t.left,1)||isIcon(t.left)||isString(t.right,1)||isIcon(t.right)||isString(t.top,1)||isIcon(t.top)||isString(t.bottom,1)||isIcon(t.bottom))}),new Set(["KoliBriIcon"]),o,Object.assign(Object.assign({},e),{defaultValue:{},hooks:{afterPatch:null===(i=e.hooks)||void 0===i?void 0:i.afterPatch,beforePatch:(t,o,i,n)=>{var s,a;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.beforePatch)&&(null===(a=e.hooks)||void 0===a||a.beforePatch(t,o,i,n)),beforePatchIcon(i)}}}))}))};export{isIcon as i,validateIcons as v};