/*! * KoliBri - The accessible HTML-Standard */ import{i as o}from"./icon-bab73759.js";import{o as t,p as s,a as i}from"./prop.validators-0a66a178.js";import{i as r}from"./reuse-c2156413.js";import{I as c}from"./controller-19c67d91.js";const e=(o,t)=>{const s=o;if(typeof s==="object"&&s!==null){if(r(s.right,1)){s.right={icon:s.right}}if(r(s.left,1)){s.left={icon:s.left}}t.set("_icon",s)}};class a extends c{constructor(o,t,s){super(o,t,s);this.component=o}validateIcon(c){t(c,(()=>{try{c=s(c)}catch(o){}i(this.component,"_icon",(t=>typeof t==="object"&&t!==null&&(r(t.left,1)||o(t.left)||r(t.right,1)||o(t.right))),new Set(["KoliBriHorizontalIcon"]),c,{hooks:{beforePatch:e},required:true})}))}componentWillLoad(){super.componentWillLoad();this.validateIcon(this.component._icon)}}export{a as I}; //# sourceMappingURL=controller-icon-0c03c842.js.map