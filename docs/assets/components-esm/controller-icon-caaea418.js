/*! * KoliBri - The accessible HTML-Standard */ import{i as isIcon}from"./icon-995dad86.js";import{o as objectObjectHandler,p as parseJson,w as watchValidator}from"./prop.validators-fba03cca.js";import{i as isString}from"./reuse-c2156413.js";import{I as InputController}from"./controller-ac00e430.js";const beforePatchIcon=(o,t)=>{const n=o;"object"==typeof n&&null!==n&&(isString(n.right,1)&&(n.right={icon:n.right}),isString(n.left,1)&&(n.left={icon:n.left}),t.set("_icon",n))};class InputIconController extends InputController{constructor(o,t,n){super(o,t,n),this.component=o}validateIcon(o){objectObjectHandler(o,(()=>{try{o=parseJson(o)}catch(o){}watchValidator(this.component,"_icon",(o=>"object"==typeof o&&null!==o&&(isString(o.left,1)||isIcon(o.left)||isString(o.right,1)||isIcon(o.right))),new Set(["KoliBriHorizontalIcon"]),o,{hooks:{beforePatch:beforePatchIcon},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}export{InputIconController as I};