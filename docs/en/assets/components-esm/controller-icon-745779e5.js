/*! * KoliBri - The accessible HTML-Standard */ import{i as isIcon}from"./icons-6e5f46e1.js";import{o as objectObjectHandler,p as parseJson,w as watchValidator}from"./prop.validators-2e3fde52.js";import{i as isString}from"./reuse-d79ab469.js";import{I as InputController}from"./controller-bca2b59f.js";const beforePatchIcons=(o,t)=>{const n=o;"object"==typeof n&&null!==n&&(isString(n.right,1)&&(n.right={icon:n.right}),isString(n.left,1)&&(n.left={icon:n.left}),t.set("_icons",n))};class InputIconController extends InputController{constructor(o,t,n){super(o,t,n),this.component=o}validateIcon(o){this.validateIcons(o)}validateIcons(o){objectObjectHandler(o,(()=>{try{o=parseJson(o)}catch(o){}watchValidator(this.component,"_icons",(o=>"object"==typeof o&&null!==o&&(isString(o.left,1)||isIcon(o.left)||isString(o.right,1)||isIcon(o.right))),new Set(["KoliBriHorizontalIcon"]),o,{hooks:{beforePatch:beforePatchIcons},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}export{InputIconController as I};