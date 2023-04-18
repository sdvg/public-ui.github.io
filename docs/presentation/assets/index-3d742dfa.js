import{defineCustomElements as mg}from"https://esm.sh/@public-ui/components@1.5.0-rc.12/dist/loader";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();mg();function rr(e,o){const t=Object.create(null),r=e.split(",");for(let n=0;n<r.length;n++)t[r[n]]=!0;return o?n=>!!t[n.toLowerCase()]:n=>!!t[n]}function oo(e){if(de(e)){const o={};for(let t=0;t<e.length;t++){const r=e[t],n=Ke(r)?yg(r):oo(r);if(n)for(const i in n)o[i]=n[i]}return o}else{if(Ke(e))return e;if(Ne(e))return e}}const vg=/;(?![^(]*\))/g,kg=/:([^]+)/,wg=/\/\*.*?\*\//gs;function yg(e){const o={};return e.replace(wg,"").split(vg).forEach(t=>{if(t){const r=t.split(kg);r.length>1&&(o[r[0].trim()]=r[1].trim())}}),o}function qe(e){let o="";if(Ke(e))o=e;else if(de(e))for(let t=0;t<e.length;t++){const r=qe(e[t]);r&&(o+=r+" ")}else if(Ne(e))for(const t in e)e[t]&&(o+=t+" ");return o.trim()}function Ye(e){if(!e)return null;let{class:o,style:t}=e;return o&&!Ke(o)&&(e.class=qe(o)),t&&(e.style=oo(t)),e}const xg="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",_g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Fu=rr(xg),Og=rr(_g),Sg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zg=rr(Sg);function $u(e){return!!e||e===""}const Jo=e=>Ke(e)?e:e==null?"":de(e)||Ne(e)&&(e.toString===ju||!pe(e.toString))?JSON.stringify(e,Iu,2):String(e),Iu=(e,o)=>o&&o.__v_isRef?Iu(e,o.value):xr(o)?{[`Map(${o.size})`]:[...o.entries()].reduce((t,[r,n])=>(t[`${r} =>`]=n,t),{})}:Ru(o)?{[`Set(${o.size})`]:[...o.values()]}:Ne(o)&&!de(o)&&!Mu(o)?String(o):o,je=Object.freeze({}),Xr=Object.freeze([]),xo=()=>{},Nu=()=>!1,Eg=/^on[^a-z]/,hi=e=>Eg.test(e),ea=e=>e.startsWith("onUpdate:"),De=Object.assign,Ns=(e,o)=>{const t=e.indexOf(o);t>-1&&e.splice(t,1)},Lg=Object.prototype.hasOwnProperty,ze=(e,o)=>Lg.call(e,o),de=Array.isArray,xr=e=>bi(e)==="[object Map]",Ru=e=>bi(e)==="[object Set]",Tg=e=>bi(e)==="[object RegExp]",pe=e=>typeof e=="function",Ke=e=>typeof e=="string",Rs=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",js=e=>Ne(e)&&pe(e.then)&&pe(e.catch),ju=Object.prototype.toString,bi=e=>ju.call(e),Ms=e=>bi(e).slice(8,-1),Mu=e=>bi(e)==="[object Object]",Ks=e=>Ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hi=rr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ag=rr("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),za=e=>{const o=Object.create(null);return t=>o[t]||(o[t]=e(t))},Cg=/-(\w)/g,ut=za(e=>e.replace(Cg,(o,t)=>t?t.toUpperCase():"")),Pg=/\B([A-Z])/g,Tt=za(e=>e.replace(Pg,"-$1").toLowerCase()),Tr=za(e=>e.charAt(0).toUpperCase()+e.slice(1)),fr=za(e=>e?`on${Tr(e)}`:""),Wn=(e,o)=>!Object.is(e,o),hr=(e,o)=>{for(let t=0;t<e.length;t++)e[t](o)},oa=(e,o,t)=>{Object.defineProperty(e,o,{configurable:!0,enumerable:!1,value:t})},Fg=e=>{const o=parseFloat(e);return isNaN(o)?e:o},$g=e=>{const o=Ke(e)?Number(e):NaN;return isNaN(o)?e:o};let Mc;const Ku=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ta(e,...o){console.warn(`[Vue warn] ${e}`,...o)}let Eo;class Bu{constructor(o=!1){this.detached=o,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Eo,!o&&Eo&&(this.index=(Eo.scopes||(Eo.scopes=[])).push(this)-1)}get active(){return this._active}run(o){if(this._active){const t=Eo;try{return Eo=this,o()}finally{Eo=t}}else ta("cannot run an inactive effect scope.")}on(){Eo=this}off(){Eo=this.parent}stop(o){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!o){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Ig(e){return new Bu(e)}function Ng(e,o=Eo){o&&o.active&&o.effects.push(e)}function Bs(){return Eo}function Du(e){Eo?Eo.cleanups.push(e):ta("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Ds=e=>{const o=new Set(e);return o.w=0,o.n=0,o},Uu=e=>(e.w&Qt)>0,Hu=e=>(e.n&Qt)>0,Rg=({deps:e})=>{if(e.length)for(let o=0;o<e.length;o++)e[o].w|=Qt},jg=e=>{const{deps:o}=e;if(o.length){let t=0;for(let r=0;r<o.length;r++){const n=o[r];Uu(n)&&!Hu(n)?n.delete(e):o[t++]=n,n.w&=~Qt,n.n&=~Qt}o.length=t}},ra=new WeakMap;let Tn=0,Qt=1;const Al=30;let vo;const _r=Symbol("iterate"),Cl=Symbol("Map key iterate");class Us{constructor(o,t=null,r){this.fn=o,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ng(this,r)}run(){if(!this.active)return this.fn();let o=vo,t=Ht;for(;o;){if(o===this)return;o=o.parent}try{return this.parent=vo,vo=this,Ht=!0,Qt=1<<++Tn,Tn<=Al?Rg(this):Kc(this),this.fn()}finally{Tn<=Al&&jg(this),Qt=1<<--Tn,vo=this.parent,Ht=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vo===this?this.deferStop=!0:this.active&&(Kc(this),this.onStop&&this.onStop(),this.active=!1)}}function Kc(e){const{deps:o}=e;if(o.length){for(let t=0;t<o.length;t++)o[t].delete(e);o.length=0}}let Ht=!0;const qu=[];function Cr(){qu.push(Ht),Ht=!1}function Pr(){const e=qu.pop();Ht=e===void 0?!0:e}function Oo(e,o,t){if(Ht&&vo){let r=ra.get(e);r||ra.set(e,r=new Map);let n=r.get(t);n||r.set(t,n=Ds()),Vu(n,{effect:vo,target:e,type:o,key:t})}}function Vu(e,o){let t=!1;Tn<=Al?Hu(e)||(e.n|=Qt,t=!Uu(e)):t=!e.has(vo),t&&(e.add(vo),vo.deps.push(e),vo.onTrack&&vo.onTrack(Object.assign({effect:vo},o)))}function At(e,o,t,r,n,i){const a=ra.get(e);if(!a)return;let l=[];if(o==="clear")l=[...a.values()];else if(t==="length"&&de(e)){const c=Number(r);a.forEach((d,f)=>{(f==="length"||f>=c)&&l.push(d)})}else switch(t!==void 0&&l.push(a.get(t)),o){case"add":de(e)?Ks(t)&&l.push(a.get("length")):(l.push(a.get(_r)),xr(e)&&l.push(a.get(Cl)));break;case"delete":de(e)||(l.push(a.get(_r)),xr(e)&&l.push(a.get(Cl)));break;case"set":xr(e)&&l.push(a.get(_r));break}const s={target:e,type:o,key:t,newValue:r,oldValue:n,oldTarget:i};if(l.length===1)l[0]&&Pl(l[0],s);else{const c=[];for(const d of l)d&&c.push(...d);Pl(Ds(c),s)}}function Pl(e,o){const t=de(e)?e:[...e];for(const r of t)r.computed&&Bc(r,o);for(const r of t)r.computed||Bc(r,o)}function Bc(e,o){(e!==vo||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(De({effect:e},o)),e.scheduler?e.scheduler():e.run())}function Mg(e,o){var t;return(t=ra.get(e))===null||t===void 0?void 0:t.get(o)}const Kg=rr("__proto__,__v_isRef,__isVue"),Wu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rs)),Bg=Ea(),Dg=Ea(!1,!0),Ug=Ea(!0),Hg=Ea(!0,!0),Dc=qg();function qg(){const e={};return["includes","indexOf","lastIndexOf"].forEach(o=>{e[o]=function(...t){const r=be(this);for(let i=0,a=this.length;i<a;i++)Oo(r,"get",i+"");const n=r[o](...t);return n===-1||n===!1?r[o](...t.map(be)):n}}),["push","pop","shift","unshift","splice"].forEach(o=>{e[o]=function(...t){Cr();const r=be(this)[o].apply(this,t);return Pr(),r}}),e}function Vg(e){const o=be(this);return Oo(o,"has",e),o.hasOwnProperty(e)}function Ea(e=!1,o=!1){return function(r,n,i){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return o;if(n==="__v_raw"&&i===(e?o?op:ep:o?Qu:Ju).get(r))return r;const a=de(r);if(!e){if(a&&ze(Dc,n))return Reflect.get(Dc,n,i);if(n==="hasOwnProperty")return Vg}const l=Reflect.get(r,n,i);return(Rs(n)?Wu.has(n):Kg(n))||(e||Oo(r,"get",n),o)?l:$e(l)?a&&Ks(n)?l:l.value:Ne(l)?e?lt(l):Be(l):l}}const Wg=Gu(),Gg=Gu(!0);function Gu(e=!1){return function(t,r,n,i){let a=t[r];if(er(a)&&$e(a)&&!$e(n))return!1;if(!e&&(!na(n)&&!er(n)&&(a=be(a),n=be(n)),!de(t)&&$e(a)&&!$e(n)))return a.value=n,!0;const l=de(t)&&Ks(r)?Number(r)<t.length:ze(t,r),s=Reflect.set(t,r,n,i);return t===be(i)&&(l?Wn(n,a)&&At(t,"set",r,n,a):At(t,"add",r,n)),s}}function Xg(e,o){const t=ze(e,o),r=e[o],n=Reflect.deleteProperty(e,o);return n&&t&&At(e,"delete",o,void 0,r),n}function Yg(e,o){const t=Reflect.has(e,o);return(!Rs(o)||!Wu.has(o))&&Oo(e,"has",o),t}function Zg(e){return Oo(e,"iterate",de(e)?"length":_r),Reflect.ownKeys(e)}const Xu={get:Bg,set:Wg,deleteProperty:Xg,has:Yg,ownKeys:Zg},Yu={get:Ug,set(e,o){return ta(`Set operation on key "${String(o)}" failed: target is readonly.`,e),!0},deleteProperty(e,o){return ta(`Delete operation on key "${String(o)}" failed: target is readonly.`,e),!0}},Jg=De({},Xu,{get:Dg,set:Gg}),Qg=De({},Yu,{get:Hg}),Hs=e=>e,La=e=>Reflect.getPrototypeOf(e);function zi(e,o,t=!1,r=!1){e=e.__v_raw;const n=be(e),i=be(o);t||(o!==i&&Oo(n,"get",o),Oo(n,"get",i));const{has:a}=La(n),l=r?Hs:t?qs:Gn;if(a.call(n,o))return l(e.get(o));if(a.call(n,i))return l(e.get(i));e!==n&&e.get(o)}function Ei(e,o=!1){const t=this.__v_raw,r=be(t),n=be(e);return o||(e!==n&&Oo(r,"has",e),Oo(r,"has",n)),e===n?t.has(e):t.has(e)||t.has(n)}function Li(e,o=!1){return e=e.__v_raw,!o&&Oo(be(e),"iterate",_r),Reflect.get(e,"size",e)}function Uc(e){e=be(e);const o=be(this);return La(o).has.call(o,e)||(o.add(e),At(o,"add",e,e)),this}function Hc(e,o){o=be(o);const t=be(this),{has:r,get:n}=La(t);let i=r.call(t,e);i?Zu(t,r,e):(e=be(e),i=r.call(t,e));const a=n.call(t,e);return t.set(e,o),i?Wn(o,a)&&At(t,"set",e,o,a):At(t,"add",e,o),this}function qc(e){const o=be(this),{has:t,get:r}=La(o);let n=t.call(o,e);n?Zu(o,t,e):(e=be(e),n=t.call(o,e));const i=r?r.call(o,e):void 0,a=o.delete(e);return n&&At(o,"delete",e,void 0,i),a}function Vc(){const e=be(this),o=e.size!==0,t=xr(e)?new Map(e):new Set(e),r=e.clear();return o&&At(e,"clear",void 0,void 0,t),r}function Ti(e,o){return function(r,n){const i=this,a=i.__v_raw,l=be(a),s=o?Hs:e?qs:Gn;return!e&&Oo(l,"iterate",_r),a.forEach((c,d)=>r.call(n,s(c),s(d),i))}}function Ai(e,o,t){return function(...r){const n=this.__v_raw,i=be(n),a=xr(i),l=e==="entries"||e===Symbol.iterator&&a,s=e==="keys"&&a,c=n[e](...r),d=t?Hs:o?qs:Gn;return!o&&Oo(i,"iterate",s?Cl:_r),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:l?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function $t(e){return function(...o){{const t=o[0]?`on key "${o[0]}" `:"";console.warn(`${Tr(e)} operation ${t}failed: target is readonly.`,be(this))}return e==="delete"?!1:this}}function em(){const e={get(i){return zi(this,i)},get size(){return Li(this)},has:Ei,add:Uc,set:Hc,delete:qc,clear:Vc,forEach:Ti(!1,!1)},o={get(i){return zi(this,i,!1,!0)},get size(){return Li(this)},has:Ei,add:Uc,set:Hc,delete:qc,clear:Vc,forEach:Ti(!1,!0)},t={get(i){return zi(this,i,!0)},get size(){return Li(this,!0)},has(i){return Ei.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:Ti(!0,!1)},r={get(i){return zi(this,i,!0,!0)},get size(){return Li(this,!0)},has(i){return Ei.call(this,i,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:Ti(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ai(i,!1,!1),t[i]=Ai(i,!0,!1),o[i]=Ai(i,!1,!0),r[i]=Ai(i,!0,!0)}),[e,t,o,r]}const[om,tm,rm,nm]=em();function Ta(e,o){const t=o?e?nm:rm:e?tm:om;return(r,n,i)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?r:Reflect.get(ze(t,n)&&n in r?t:r,n,i)}const im={get:Ta(!1,!1)},am={get:Ta(!1,!0)},lm={get:Ta(!0,!1)},sm={get:Ta(!0,!0)};function Zu(e,o,t){const r=be(t);if(r!==t&&o.call(e,r)){const n=Ms(e);console.warn(`Reactive ${n} contains both the raw and reactive versions of the same object${n==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ju=new WeakMap,Qu=new WeakMap,ep=new WeakMap,op=new WeakMap;function cm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dm(e){return e.__v_skip||!Object.isExtensible(e)?0:cm(Ms(e))}function Be(e){return er(e)?e:Aa(e,!1,Xu,im,Ju)}function fm(e){return Aa(e,!1,Jg,am,Qu)}function lt(e){return Aa(e,!0,Yu,lm,ep)}function Wr(e){return Aa(e,!0,Qg,sm,op)}function Aa(e,o,t,r,n){if(!Ne(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(o&&e.__v_isReactive))return e;const i=n.get(e);if(i)return i;const a=dm(e);if(a===0)return e;const l=new Proxy(e,a===2?r:t);return n.set(e,l),l}function Or(e){return er(e)?Or(e.__v_raw):!!(e&&e.__v_isReactive)}function er(e){return!!(e&&e.__v_isReadonly)}function na(e){return!!(e&&e.__v_isShallow)}function ia(e){return Or(e)||er(e)}function be(e){const o=e&&e.__v_raw;return o?be(o):e}function Ca(e){return oa(e,"__v_skip",!0),e}const Gn=e=>Ne(e)?Be(e):e,qs=e=>Ne(e)?lt(e):e;function Vs(e){Ht&&vo&&(e=be(e),Vu(e.dep||(e.dep=Ds()),{target:e,type:"get",key:"value"}))}function Ws(e,o){e=be(e);const t=e.dep;t&&Pl(t,{target:e,type:"set",key:"value",newValue:o})}function $e(e){return!!(e&&e.__v_isRef===!0)}function H(e){return tp(e,!1)}function pt(e){return tp(e,!0)}function tp(e,o){return $e(e)?e:new um(e,o)}class um{constructor(o,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?o:be(o),this._value=t?o:Gn(o)}get value(){return Vs(this),this._value}set value(o){const t=this.__v_isShallow||na(o)||er(o);o=t?o:be(o),Wn(o,this._rawValue)&&(this._rawValue=o,this._value=t?o:Gn(o),Ws(this,o))}}function z(e){return $e(e)?e.value:e}const pm={get:(e,o,t)=>z(Reflect.get(e,o,t)),set:(e,o,t,r)=>{const n=e[o];return $e(n)&&!$e(t)?(n.value=t,!0):Reflect.set(e,o,t,r)}};function rp(e){return Or(e)?e:new Proxy(e,pm)}class hm{constructor(o){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:r}=o(()=>Vs(this),()=>Ws(this));this._get=t,this._set=r}get value(){return this._get()}set value(o){this._set(o)}}function np(e){return new hm(e)}function bm(e){ia(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const o=de(e)?new Array(e.length):{};for(const t in e)o[t]=mm(e,t);return o}class gm{constructor(o,t,r){this._object=o,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const o=this._object[this._key];return o===void 0?this._defaultValue:o}set value(o){this._object[this._key]=o}get dep(){return Mg(be(this._object),this._key)}}function mm(e,o,t){const r=e[o];return $e(r)?r:new gm(e,o,t)}var ip;class vm{constructor(o,t,r,n){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ip]=!1,this._dirty=!0,this.effect=new Us(o,()=>{this._dirty||(this._dirty=!0,Ws(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=r}get value(){const o=be(this);return Vs(o),(o._dirty||!o._cacheable)&&(o._dirty=!1,o._value=o.effect.run()),o._value}set value(o){this._setter(o)}}ip="__v_isReadonly";function km(e,o,t=!1){let r,n;const i=pe(e);i?(r=e,n=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=e.get,n=e.set);const a=new vm(r,n,i||!n,t);return o&&!t&&(a.effect.onTrack=o.onTrack,a.effect.onTrigger=o.onTrigger),a}const Sr=[];function qi(e){Sr.push(e)}function Vi(){Sr.pop()}function R(e,...o){Cr();const t=Sr.length?Sr[Sr.length-1].component:null,r=t&&t.appContext.config.warnHandler,n=wm();if(r)Lt(r,t,11,[e+o.join(""),t&&t.proxy,n.map(({vnode:i})=>`at <${Ka(t,i.type)}>`).join(`
`),n]);else{const i=[`[Vue warn]: ${e}`,...o];n.length&&i.push(`
`,...ym(n)),console.warn(...i)}Pr()}function wm(){let e=Sr[Sr.length-1];if(!e)return[];const o=[];for(;e;){const t=o[0];t&&t.vnode===e?t.recurseCount++:o.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return o}function ym(e){const o=[];return e.forEach((t,r)=>{o.push(...r===0?[]:[`
`],...xm(t))}),o}function xm({vnode:e,recurseCount:o}){const t=o>0?`... (${o} recursive calls)`:"",r=e.component?e.component.parent==null:!1,n=` at <${Ka(e.component,e.type,r)}`,i=">"+t;return e.props?[n,..._m(e.props),i]:[n+i]}function _m(e){const o=[],t=Object.keys(e);return t.slice(0,3).forEach(r=>{o.push(...ap(r,e[r]))}),t.length>3&&o.push(" ..."),o}function ap(e,o,t){return Ke(o)?(o=JSON.stringify(o),t?o:[`${e}=${o}`]):typeof o=="number"||typeof o=="boolean"||o==null?t?o:[`${e}=${o}`]:$e(o)?(o=ap(e,be(o.value),!0),t?o:[`${e}=Ref<`,o,">"]):pe(o)?[`${e}=fn${o.name?`<${o.name}>`:""}`]:(o=be(o),t?o:[`${e}=`,o])}function Om(e,o){e!==void 0&&(typeof e!="number"?R(`${o} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&R(`${o} is NaN - the duration expression might be incorrect.`))}const Gs={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Lt(e,o,t,r){let n;try{n=r?e(...r):e()}catch(i){Pa(i,o,t)}return n}function Bo(e,o,t,r){if(pe(e)){const i=Lt(e,o,t,r);return i&&js(i)&&i.catch(a=>{Pa(a,o,t)}),i}const n=[];for(let i=0;i<e.length;i++)n.push(Bo(e[i],o,t,r));return n}function Pa(e,o,t,r=!0){const n=o?o.vnode:null;if(o){let i=o.parent;const a=o.proxy,l=Gs[t];for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,l)===!1)return}i=i.parent}const s=o.appContext.config.errorHandler;if(s){Lt(s,null,10,[e,a,l]);return}}Sm(e,t,n,r)}function Sm(e,o,t,r=!0){{const n=Gs[o];if(t&&qi(t),R(`Unhandled error${n?` during execution of ${n}`:""}`),t&&Vi(),r)throw e;console.error(e)}}let Xn=!1,Fl=!1;const co=[];let it=0;const Yr=[];let nt=null,jt=0;const lp=Promise.resolve();let Xs=null;const zm=100;function fo(e){const o=Xs||lp;return e?o.then(this?e.bind(this):e):o}function Em(e){let o=it+1,t=co.length;for(;o<t;){const r=o+t>>>1;Yn(co[r])<e?o=r+1:t=r}return o}function Fa(e){(!co.length||!co.includes(e,Xn&&e.allowRecurse?it+1:it))&&(e.id==null?co.push(e):co.splice(Em(e.id),0,e),sp())}function sp(){!Xn&&!Fl&&(Fl=!0,Xs=lp.then(fp))}function Lm(e){const o=co.indexOf(e);o>it&&co.splice(o,1)}function cp(e){de(e)?Yr.push(...e):(!nt||!nt.includes(e,e.allowRecurse?jt+1:jt))&&Yr.push(e),sp()}function Wc(e,o=Xn?it+1:0){for(e=e||new Map;o<co.length;o++){const t=co[o];if(t&&t.pre){if(Ys(e,t))continue;co.splice(o,1),o--,t()}}}function dp(e){if(Yr.length){const o=[...new Set(Yr)];if(Yr.length=0,nt){nt.push(...o);return}for(nt=o,e=e||new Map,nt.sort((t,r)=>Yn(t)-Yn(r)),jt=0;jt<nt.length;jt++)Ys(e,nt[jt])||nt[jt]();nt=null,jt=0}}const Yn=e=>e.id==null?1/0:e.id,Tm=(e,o)=>{const t=Yn(e)-Yn(o);if(t===0){if(e.pre&&!o.pre)return-1;if(o.pre&&!e.pre)return 1}return t};function fp(e){Fl=!1,Xn=!0,e=e||new Map,co.sort(Tm);const o=t=>Ys(e,t);try{for(it=0;it<co.length;it++){const t=co[it];if(t&&t.active!==!1){if(o(t))continue;Lt(t,null,14)}}}finally{it=0,co.length=0,dp(e),Xn=!1,Xs=null,(co.length||Yr.length)&&fp(e)}}function Ys(e,o){if(!e.has(o))e.set(o,1);else{const t=e.get(o);if(t>zm){const r=o.ownerInstance,n=r&&oi(r.type);return R(`Maximum recursive updates exceeded${n?` in component <${n}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(o,t+1)}}let qt=!1;const Hr=new Set;Ku().__VUE_HMR_RUNTIME__={createRecord:Ya(up),rerender:Ya(Pm),reload:Ya(Fm)};const Ar=new Map;function Am(e){const o=e.type.__hmrId;let t=Ar.get(o);t||(up(o,e.type),t=Ar.get(o)),t.instances.add(e)}function Cm(e){Ar.get(e.type.__hmrId).instances.delete(e)}function up(e,o){return Ar.has(e)?!1:(Ar.set(e,{initialDef:$n(o),instances:new Set}),!0)}function $n(e){return qp(e)?e.__vccOpts:e}function Pm(e,o){const t=Ar.get(e);t&&(t.initialDef.render=o,[...t.instances].forEach(r=>{o&&(r.render=o,$n(r.type).render=o),r.renderCache=[],qt=!0,r.update(),qt=!1}))}function Fm(e,o){const t=Ar.get(e);if(!t)return;o=$n(o),Gc(t.initialDef,o);const r=[...t.instances];for(const n of r){const i=$n(n.type);Hr.has(i)||(i!==t.initialDef&&Gc(i,o),Hr.add(i)),n.appContext.optionsCache.delete(n.type),n.ceReload?(Hr.add(i),n.ceReload(o.styles),Hr.delete(i)):n.parent?Fa(n.parent.update):n.appContext.reload?n.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}cp(()=>{for(const n of r)Hr.delete($n(n.type))})}function Gc(e,o){De(e,o);for(const t in e)t!=="__file"&&!(t in o)&&delete e[t]}function Ya(e){return(o,t)=>{try{return e(o,t)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let at,An=[],$l=!1;function gi(e,...o){at?at.emit(e,...o):$l||An.push({event:e,args:o})}function pp(e,o){var t,r;at=e,at?(at.enabled=!0,An.forEach(({event:n,args:i})=>at.emit(n,...i)),An=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(t=window.navigator)===null||t===void 0?void 0:t.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((o.__VUE_DEVTOOLS_HOOK_REPLAY__=o.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{pp(i,o)}),setTimeout(()=>{at||(o.__VUE_DEVTOOLS_HOOK_REPLAY__=null,$l=!0,An=[])},3e3)):($l=!0,An=[])}function $m(e,o){gi("app:init",e,o,{Fragment:Fe,Text:ki,Comment:to,Static:Wi})}function Im(e){gi("app:unmount",e)}const Il=Zs("component:added"),hp=Zs("component:updated"),Nm=Zs("component:removed"),Rm=e=>{at&&typeof at.cleanupBuffer=="function"&&!at.cleanupBuffer(e)&&Nm(e)};function Zs(e){return o=>{gi(e,o.appContext.app,o.uid,o.parent?o.parent.uid:void 0,o)}}const jm=bp("perf:start"),Mm=bp("perf:end");function bp(e){return(o,t,r)=>{gi(e,o.appContext.app,o.uid,o,t,r)}}function Km(e,o,t){gi("component:emit",e.appContext.app,e,o,t)}function Bm(e,o,...t){if(e.isUnmounted)return;const r=e.vnode.props||je;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(o in d))(!f||!(fr(o)in f))&&R(`Component emitted event "${o}" but it is neither declared in the emits option nor as an "${fr(o)}" prop.`);else{const p=d[o];pe(p)&&(p(...t)||R(`Invalid event arguments: event validation failed for event "${o}".`))}}let n=t;const i=o.startsWith("update:"),a=i&&o.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=r[d]||je;p&&(n=t.map(b=>Ke(b)?b.trim():b)),f&&(n=t.map(Fg))}Km(e,o,n);{const d=o.toLowerCase();d!==o&&r[fr(d)]&&R(`Event "${d}" is emitted in component ${Ka(e,e.type)} but the handler is registered for "${o}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Tt(o)}" instead of "${o}".`)}let l,s=r[l=fr(o)]||r[l=fr(ut(o))];!s&&i&&(s=r[l=fr(Tt(o))]),s&&Bo(s,e,6,n);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Bo(c,e,6,n)}}function gp(e,o,t=!1){const r=o.emitsCache,n=r.get(e);if(n!==void 0)return n;const i=e.emits;let a={},l=!1;if(!pe(e)){const s=c=>{const d=gp(c,o,!0);d&&(l=!0,De(a,d))};!t&&o.mixins.length&&o.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!i&&!l?(Ne(e)&&r.set(e,null),null):(de(i)?i.forEach(s=>a[s]=null):De(a,i),Ne(e)&&r.set(e,a),a)}function $a(e,o){return!e||!hi(o)?!1:(o=o.slice(2).replace(/Once$/,""),ze(e,o[0].toLowerCase()+o.slice(1))||ze(e,Tt(o))||ze(e,o))}let eo=null,Ia=null;function aa(e){const o=eo;return eo=e,Ia=e&&e.type.__scopeId||null,o}function hT(e){Ia=e}function bT(){Ia=null}function ne(e,o=eo,t){if(!o||e._n)return e;const r=(...n)=>{r._d&&ld(-1);const i=aa(o);let a;try{a=e(...n)}finally{aa(i),r._d&&ld(1)}return hp(o),a};return r._n=!0,r._c=!0,r._d=!0,r}let Nl=!1;function la(){Nl=!0}function Za(e){const{type:o,vnode:t,proxy:r,withProxy:n,props:i,propsOptions:[a],slots:l,attrs:s,emit:c,render:d,renderCache:f,data:p,setupState:b,ctx:h,inheritAttrs:g}=e;let m,k;const w=aa(e);Nl=!1;try{if(t.shapeFlag&4){const E=n||r;m=Xo(d.call(E,E,f,i,b,p,h)),k=s}else{const E=o;s===i&&la(),m=Xo(E.length>1?E(i,{get attrs(){return la(),s},slots:l,emit:c}):E(i,null)),k=o.props?s:Um(s)}}catch(E){Nn.length=0,Pa(E,e,1),m=X(to)}let y=m,x;if(m.patchFlag>0&&m.patchFlag&2048&&([y,x]=Dm(m)),k&&g!==!1){const E=Object.keys(k),{shapeFlag:P}=y;if(E.length){if(P&7)a&&E.some(ea)&&(k=Hm(k,a)),y=Qo(y,k);else if(!Nl&&y.type!==to){const $=Object.keys(s),S=[],T=[];for(let U=0,J=$.length;U<J;U++){const K=$[U];hi(K)?ea(K)||S.push(K[2].toLowerCase()+K.slice(3)):T.push(K)}T.length&&R(`Extraneous non-props attributes (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),S.length&&R(`Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return t.dirs&&(Xc(y)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),y=Qo(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(Xc(y)||R("Component inside <Transition> renders non-element root node that cannot be animated."),y.transition=t.transition),x?x(y):m=y,aa(w),m}const Dm=e=>{const o=e.children,t=e.dynamicChildren,r=mp(o);if(!r)return[e,void 0];const n=o.indexOf(r),i=t?t.indexOf(r):-1,a=l=>{o[n]=l,t&&(i>-1?t[i]=l:l.patchFlag>0&&(e.dynamicChildren=[...t,l]))};return[Xo(r),a]};function mp(e){let o;for(let t=0;t<e.length;t++){const r=e[t];if(ht(r)){if(r.type!==to||r.children==="v-if"){if(o)return;o=r}}else return}return o}const Um=e=>{let o;for(const t in e)(t==="class"||t==="style"||hi(t))&&((o||(o={}))[t]=e[t]);return o},Hm=(e,o)=>{const t={};for(const r in e)(!ea(r)||!(r.slice(9)in o))&&(t[r]=e[r]);return t},Xc=e=>e.shapeFlag&7||e.type===to;function qm(e,o,t){const{props:r,children:n,component:i}=e,{props:a,children:l,patchFlag:s}=o,c=i.emitsOptions;if((n||l)&&qt||o.dirs||o.transition)return!0;if(t&&s>=0){if(s&1024)return!0;if(s&16)return r?Yc(r,a,c):!!a;if(s&8){const d=o.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(a[p]!==r[p]&&!$a(c,p))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Yc(r,a,c):!0:!!a;return!1}function Yc(e,o,t){const r=Object.keys(o);if(r.length!==Object.keys(e).length)return!0;for(let n=0;n<r.length;n++){const i=r[n];if(o[i]!==e[i]&&!$a(t,i))return!0}return!1}function Vm({vnode:e,parent:o},t){for(;o&&o.subTree===e;)(e=o.vnode).el=t,o=o.parent}const vp=e=>e.__isSuspense;function Wm(e,o){o&&o.pendingBranch?de(e)?o.effects.push(...e):o.effects.push(e):cp(e)}function Lo(e,o){if(!He)R("provide() can only be used inside setup().");else{let t=He.provides;const r=He.parent&&He.parent.provides;r===t&&(t=He.provides=Object.create(r)),t[e]=o}}function Z(e,o,t=!1){const r=He||eo;if(r){const n=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(n&&e in n)return n[e];if(arguments.length>1)return t&&pe(o)?o.call(r.proxy):o;R(`injection "${String(e)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function Fr(e,o){return Js(e,null,o)}const Ci={};function _e(e,o,t){return pe(o)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Js(e,o,t)}function Js(e,o,{immediate:t,deep:r,flush:n,onTrack:i,onTrigger:a}=je){o||(t!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=x=>{R("Invalid watch source: ",x,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},s=Bs()===(He==null?void 0:He.scope)?He:null;let c,d=!1,f=!1;if($e(e)?(c=()=>e.value,d=na(e)):Or(e)?(c=()=>e,r=!0):de(e)?(f=!0,d=e.some(x=>Or(x)||na(x)),c=()=>e.map(x=>{if($e(x))return x.value;if(Or(x))return kr(x);if(pe(x))return Lt(x,s,2);l(x)})):pe(e)?o?c=()=>Lt(e,s,2):c=()=>{if(!(s&&s.isUnmounted))return p&&p(),Bo(e,s,3,[b])}:(c=xo,l(e)),o&&r){const x=c;c=()=>kr(x())}let p,b=x=>{p=w.onStop=()=>{Lt(x,s,4)}},h;if(ei)if(b=xo,o?t&&Bo(o,s,3,[c(),f?[]:void 0,b]):c(),n==="sync"){const x=Qv();h=x.__watcherHandles||(x.__watcherHandles=[])}else return xo;let g=f?new Array(e.length).fill(Ci):Ci;const m=()=>{if(w.active)if(o){const x=w.run();(r||d||(f?x.some((E,P)=>Wn(E,g[P])):Wn(x,g)))&&(p&&p(),Bo(o,s,3,[x,g===Ci?void 0:f&&g[0]===Ci?[]:g,b]),g=x)}else w.run()};m.allowRecurse=!!o;let k;n==="sync"?k=m:n==="post"?k=()=>io(m,s&&s.suspense):(m.pre=!0,s&&(m.id=s.uid),k=()=>Fa(m));const w=new Us(c,k);w.onTrack=i,w.onTrigger=a,o?t?m():g=w.run():n==="post"?io(w.run.bind(w),s&&s.suspense):w.run();const y=()=>{w.stop(),s&&s.scope&&Ns(s.scope.effects,w)};return h&&h.push(y),y}function Gm(e,o,t){const r=this.proxy,n=Ke(e)?e.includes(".")?kp(r,e):()=>r[e]:e.bind(r,r);let i;pe(o)?i=o:(i=o.handler,t=o);const a=He;rn(this);const l=Js(n,i.bind(r),t);return a?rn(a):Er(),l}function kp(e,o){const t=o.split(".");return()=>{let r=e;for(let n=0;n<t.length&&r;n++)r=r[t[n]];return r}}function kr(e,o){if(!Ne(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),$e(e))kr(e.value,o);else if(de(e))for(let t=0;t<e.length;t++)kr(e[t],o);else if(Ru(e)||xr(e))e.forEach(t=>{kr(t,o)});else if(Mu(e))for(const t in e)kr(e[t],o);return e}function wp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ft(()=>{e.isMounted=!0}),vi(()=>{e.isUnmounting=!0}),e}const Ro=[Function,Array],Xm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ro,onEnter:Ro,onAfterEnter:Ro,onEnterCancelled:Ro,onBeforeLeave:Ro,onLeave:Ro,onAfterLeave:Ro,onLeaveCancelled:Ro,onBeforeAppear:Ro,onAppear:Ro,onAfterAppear:Ro,onAppearCancelled:Ro},setup(e,{slots:o}){const t=Fo(),r=wp();let n;return()=>{const i=o.default&&Qs(o.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){let g=!1;for(const m of i)if(m.type!==to){if(g){R("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=m,g=!0}}const l=be(e),{mode:s}=l;if(s&&s!=="in-out"&&s!=="out-in"&&s!=="default"&&R(`invalid <transition> mode: ${s}`),r.isLeaving)return Ja(a);const c=Zc(a);if(!c)return Ja(a);const d=Zn(c,l,r,t);on(c,d);const f=t.subTree,p=f&&Zc(f);let b=!1;const{getTransitionKey:h}=c.type;if(h){const g=h();n===void 0?n=g:g!==n&&(n=g,b=!0)}if(p&&p.type!==to&&(!Dt(c,p)||b)){const g=Zn(p,l,r,t);if(on(p,g),s==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},Ja(a);s==="in-out"&&c.type!==to&&(g.delayLeave=(m,k,w)=>{const y=yp(r,p);y[String(p.key)]=p,m._leaveCb=()=>{k(),m._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=w})}return a}}},Ym=Xm;function yp(e,o){const{leavingVNodes:t}=e;let r=t.get(o.type);return r||(r=Object.create(null),t.set(o.type,r)),r}function Zn(e,o,t,r){const{appear:n,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:s,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:b,onLeaveCancelled:h,onBeforeAppear:g,onAppear:m,onAfterAppear:k,onAppearCancelled:w}=o,y=String(e.key),x=yp(t,e),E=(S,T)=>{S&&Bo(S,r,9,T)},P=(S,T)=>{const U=T[1];E(S,T),de(S)?S.every(J=>J.length<=1)&&U():S.length<=1&&U()},$={mode:i,persisted:a,beforeEnter(S){let T=l;if(!t.isMounted)if(n)T=g||l;else return;S._leaveCb&&S._leaveCb(!0);const U=x[y];U&&Dt(e,U)&&U.el._leaveCb&&U.el._leaveCb(),E(T,[S])},enter(S){let T=s,U=c,J=d;if(!t.isMounted)if(n)T=m||s,U=k||c,J=w||d;else return;let K=!1;const ge=S._enterCb=fe=>{K||(K=!0,fe?E(J,[S]):E(U,[S]),$.delayedLeave&&$.delayedLeave(),S._enterCb=void 0)};T?P(T,[S,ge]):ge()},leave(S,T){const U=String(e.key);if(S._enterCb&&S._enterCb(!0),t.isUnmounting)return T();E(f,[S]);let J=!1;const K=S._leaveCb=ge=>{J||(J=!0,T(),ge?E(h,[S]):E(b,[S]),S._leaveCb=void 0,x[U]===e&&delete x[U])};x[U]=e,p?P(p,[S,K]):K()},clone(S){return Zn(S,o,t,r)}};return $}function Ja(e){if(mi(e))return e=Qo(e),e.children=null,e}function Zc(e){return mi(e)?e.children?e.children[0]:void 0:e}function on(e,o){e.shapeFlag&6&&e.component?on(e.component.subTree,o):e.shapeFlag&128?(e.ssContent.transition=o.clone(e.ssContent),e.ssFallback.transition=o.clone(e.ssFallback)):e.transition=o}function Qs(e,o=!1,t){let r=[],n=0;for(let i=0;i<e.length;i++){let a=e[i];const l=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Fe?(a.patchFlag&128&&n++,r=r.concat(Qs(a.children,o,l))):(o||a.type!==to)&&r.push(l!=null?Qo(a,{key:l}):a)}if(n>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function se(e){return pe(e)?{setup:e,name:e.name}:e}const Zr=e=>!!e.type.__asyncLoader,mi=e=>e.type.__isKeepAlive,Zm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:o}){const t=Fo(),r=t.ctx;if(!r.renderer)return()=>{const w=o.default&&o.default();return w&&w.length===1?w[0]:w};const n=new Map,i=new Set;let a=null;t.__v_cache=n;const l=t.suspense,{renderer:{p:s,m:c,um:d,o:{createElement:f}}}=r,p=f("div");r.activate=(w,y,x,E,P)=>{const $=w.component;c(w,y,x,0,l),s($.vnode,w,y,x,$,l,E,w.slotScopeIds,P),io(()=>{$.isDeactivated=!1,$.a&&hr($.a);const S=w.props&&w.props.onVnodeMounted;S&&jo(S,$.parent,w)},l),Il($)},r.deactivate=w=>{const y=w.component;c(w,p,null,1,l),io(()=>{y.da&&hr(y.da);const x=w.props&&w.props.onVnodeUnmounted;x&&jo(x,y.parent,w),y.isDeactivated=!0},l),Il(y)};function b(w){Qa(w),d(w,t,l,!0)}function h(w){n.forEach((y,x)=>{const E=oi(y.type);E&&(!w||!w(E))&&g(x)})}function g(w){const y=n.get(w);!a||!Dt(y,a)?b(y):a&&Qa(a),n.delete(w),i.delete(w)}_e(()=>[e.include,e.exclude],([w,y])=>{w&&h(x=>Cn(w,x)),y&&h(x=>!Cn(y,x))},{flush:"post",deep:!0});let m=null;const k=()=>{m!=null&&n.set(m,el(t.subTree))};return Ft(k),Ra(k),vi(()=>{n.forEach(w=>{const{subTree:y,suspense:x}=t,E=el(y);if(w.type===E.type&&w.key===E.key){Qa(E);const P=E.component.da;P&&io(P,x);return}b(w)})}),()=>{if(m=null,!o.default)return null;const w=o.default(),y=w[0];if(w.length>1)return R("KeepAlive should contain exactly one component child."),a=null,w;if(!ht(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return a=null,y;let x=el(y);const E=x.type,P=oi(Zr(x)?x.type.__asyncResolved||{}:E),{include:$,exclude:S,max:T}=e;if($&&(!P||!Cn($,P))||S&&P&&Cn(S,P))return a=x,y;const U=x.key==null?E:x.key,J=n.get(U);return x.el&&(x=Qo(x),y.shapeFlag&128&&(y.ssContent=x)),m=U,J?(x.el=J.el,x.component=J.component,x.transition&&on(x,x.transition),x.shapeFlag|=512,i.delete(U),i.add(U)):(i.add(U),T&&i.size>parseInt(T,10)&&g(i.values().next().value)),x.shapeFlag|=256,a=x,vp(y.type)?y:x}}},xp=Zm;function Cn(e,o){return de(e)?e.some(t=>Cn(t,o)):Ke(e)?e.split(",").includes(o):Tg(e)?e.test(o):!1}function _p(e,o){Sp(e,"a",o)}function Op(e,o){Sp(e,"da",o)}function Sp(e,o,t=He){const r=e.__wdc||(e.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Na(o,r,t),t){let n=t.parent;for(;n&&n.parent;)mi(n.parent.vnode)&&Jm(r,o,t,n),n=n.parent}}function Jm(e,o,t,r){const n=Na(o,e,r,!0);cn(()=>{Ns(r[o],n)},t)}function Qa(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function el(e){return e.shapeFlag&128?e.ssContent:e}function Na(e,o,t=He,r=!1){if(t){const n=t[e]||(t[e]=[]),i=o.__weh||(o.__weh=(...a)=>{if(t.isUnmounted)return;Cr(),rn(t);const l=Bo(o,t,e,a);return Er(),Pr(),l});return r?n.unshift(i):n.push(i),i}else{const n=fr(Gs[e].replace(/ hook$/,""));R(`${n} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Pt=e=>(o,t=He)=>(!ei||e==="sp")&&Na(e,(...r)=>o(...r),t),Qm=Pt("bm"),Ft=Pt("m"),ev=Pt("bu"),Ra=Pt("u"),vi=Pt("bum"),cn=Pt("um"),ov=Pt("sp"),tv=Pt("rtg"),rv=Pt("rtc");function nv(e,o=He){Na("ec",e,o)}function zp(e){Ag(e)&&R("Do not use built-in directive ids as custom directive id: "+e)}function dn(e,o){const t=eo;if(t===null)return R("withDirectives can only be used inside render functions."),e;const r=Ma(t)||t.proxy,n=e.dirs||(e.dirs=[]);for(let i=0;i<o.length;i++){let[a,l,s,c=je]=o[i];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&kr(l),n.push({dir:a,instance:r,value:l,oldValue:void 0,arg:s,modifiers:c}))}return e}function ar(e,o,t,r){const n=e.dirs,i=o&&o.dirs;for(let a=0;a<n.length;a++){const l=n[a];i&&(l.oldValue=i[a].value);let s=l.dir[r];s&&(Cr(),Bo(s,t,8,[e.el,l,e,o]),Pr())}}const Rl="components",iv="directives";function sa(e,o){return Ep(Rl,e,!0,o)||e}const av=Symbol();function Jn(e){return Ep(iv,e)}function Ep(e,o,t=!0,r=!1){const n=eo||He;if(n){const i=n.type;if(e===Rl){const l=oi(i,!1);if(l&&(l===o||l===ut(o)||l===Tr(ut(o))))return i}const a=Jc(n[e]||i[e],o)||Jc(n.appContext[e],o);if(!a&&r)return i;if(t&&!a){const l=e===Rl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${e.slice(0,-1)}: ${o}${l}`)}return a}else R(`resolve${Tr(e.slice(0,-1))} can only be used in render() or setup().`)}function Jc(e,o){return e&&(e[o]||e[ut(o)]||e[Tr(ut(o))])}function fn(e,o,t,r){let n;const i=t&&t[r];if(de(e)||Ke(e)){n=new Array(e.length);for(let a=0,l=e.length;a<l;a++)n[a]=o(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){Number.isInteger(e)||R(`The v-for range expect an integer value but got ${e}.`),n=new Array(e);for(let a=0;a<e;a++)n[a]=o(a+1,a,void 0,i&&i[a])}else if(Ne(e))if(e[Symbol.iterator])n=Array.from(e,(a,l)=>o(a,l,void 0,i&&i[l]));else{const a=Object.keys(e);n=new Array(a.length);for(let l=0,s=a.length;l<s;l++){const c=a[l];n[l]=o(e[c],c,l,i&&i[l])}}else n=[];return t&&(t[r]=n),n}function ao(e,o,t={},r,n){if(eo.isCE||eo.parent&&Zr(eo.parent)&&eo.parent.isCE)return o!=="default"&&(t.name=o),X("slot",t,r&&r());let i=e[o];i&&i.length>1&&(R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),A();const a=i&&Lp(i(t)),l=oe(Fe,{key:t.key||a&&a.key||`_${o}`},a||(r?r():[]),a&&e._===1?64:-2);return!n&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Lp(e){return e.some(o=>ht(o)?!(o.type===to||o.type===Fe&&!Lp(o.children)):!0)?e:null}const jl=e=>e?Dp(e)?Ma(e)||e.proxy:jl(e.parent):null,zr=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>Wr(e.props),$attrs:e=>Wr(e.attrs),$slots:e=>Wr(e.slots),$refs:e=>Wr(e.refs),$parent:e=>jl(e.parent),$root:e=>jl(e.root),$emit:e=>e.emit,$options:e=>oc(e),$forceUpdate:e=>e.f||(e.f=()=>Fa(e.update)),$nextTick:e=>e.n||(e.n=fo.bind(e.proxy)),$watch:e=>Gm.bind(e)}),ec=e=>e==="_"||e==="$",ol=(e,o)=>e!==je&&!e.__isScriptSetup&&ze(e,o),Tp={get({_:e},o){const{ctx:t,setupState:r,data:n,props:i,accessCache:a,type:l,appContext:s}=e;if(o==="__isVue")return!0;let c;if(o[0]!=="$"){const b=a[o];if(b!==void 0)switch(b){case 1:return r[o];case 2:return n[o];case 4:return t[o];case 3:return i[o]}else{if(ol(r,o))return a[o]=1,r[o];if(n!==je&&ze(n,o))return a[o]=2,n[o];if((c=e.propsOptions[0])&&ze(c,o))return a[o]=3,i[o];if(t!==je&&ze(t,o))return a[o]=4,t[o];Ml&&(a[o]=0)}}const d=zr[o];let f,p;if(d)return o==="$attrs"&&(Oo(e,"get",o),la()),d(e);if((f=l.__cssModules)&&(f=f[o]))return f;if(t!==je&&ze(t,o))return a[o]=4,t[o];if(p=s.config.globalProperties,ze(p,o))return p[o];eo&&(!Ke(o)||o.indexOf("__v")!==0)&&(n!==je&&ec(o[0])&&ze(n,o)?R(`Property ${JSON.stringify(o)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===eo&&R(`Property ${JSON.stringify(o)} was accessed during render but is not defined on instance.`))},set({_:e},o,t){const{data:r,setupState:n,ctx:i}=e;return ol(n,o)?(n[o]=t,!0):n.__isScriptSetup&&ze(n,o)?(R(`Cannot mutate <script setup> binding "${o}" from Options API.`),!1):r!==je&&ze(r,o)?(r[o]=t,!0):ze(e.props,o)?(R(`Attempting to mutate prop "${o}". Props are readonly.`),!1):o[0]==="$"&&o.slice(1)in e?(R(`Attempting to mutate public property "${o}". Properties starting with $ are reserved and readonly.`),!1):(o in e.appContext.config.globalProperties?Object.defineProperty(i,o,{enumerable:!0,configurable:!0,value:t}):i[o]=t,!0)},has({_:{data:e,setupState:o,accessCache:t,ctx:r,appContext:n,propsOptions:i}},a){let l;return!!t[a]||e!==je&&ze(e,a)||ol(o,a)||(l=i[0])&&ze(l,a)||ze(r,a)||ze(zr,a)||ze(n.config.globalProperties,a)},defineProperty(e,o,t){return t.get!=null?e._.accessCache[o]=0:ze(t,"value")&&this.set(e,o,t.value,null),Reflect.defineProperty(e,o,t)}};Tp.ownKeys=e=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function lv(e){const o={};return Object.defineProperty(o,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(zr).forEach(t=>{Object.defineProperty(o,t,{configurable:!0,enumerable:!1,get:()=>zr[t](e),set:xo})}),o}function sv(e){const{ctx:o,propsOptions:[t]}=e;t&&Object.keys(t).forEach(r=>{Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>e.props[r],set:xo})})}function cv(e){const{ctx:o,setupState:t}=e;Object.keys(be(t)).forEach(r=>{if(!t.__isScriptSetup){if(ec(r[0])){R(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>t[r],set:xo})}})}function dv(){const e=Object.create(null);return(o,t)=>{e[t]?R(`${o} property "${t}" is already defined in ${e[t]}.`):e[t]=o}}let Ml=!0;function fv(e){const o=oc(e),t=e.proxy,r=e.ctx;Ml=!1,o.beforeCreate&&Qc(o.beforeCreate,e,"bc");const{data:n,computed:i,methods:a,watch:l,provide:s,inject:c,created:d,beforeMount:f,mounted:p,beforeUpdate:b,updated:h,activated:g,deactivated:m,beforeDestroy:k,beforeUnmount:w,destroyed:y,unmounted:x,render:E,renderTracked:P,renderTriggered:$,errorCaptured:S,serverPrefetch:T,expose:U,inheritAttrs:J,components:K,directives:ge,filters:fe}=o,ke=dv();{const[G]=e.propsOptions;if(G)for(const te in G)ke("Props",te)}if(c&&uv(c,r,ke,e.appContext.config.unwrapInjectedRef),a)for(const G in a){const te=a[G];pe(te)?(Object.defineProperty(r,G,{value:te.bind(t),configurable:!0,enumerable:!0,writable:!0}),ke("Methods",G)):R(`Method "${G}" has type "${typeof te}" in the component definition. Did you reference the function correctly?`)}if(n){pe(n)||R("The data option must be a function. Plain object usage is no longer supported.");const G=n.call(t,t);if(js(G)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ne(G))R("data() should return an object.");else{e.data=Be(G);for(const te in G)ke("Data",te),ec(te[0])||Object.defineProperty(r,te,{configurable:!0,enumerable:!0,get:()=>G[te],set:xo})}}if(Ml=!0,i)for(const G in i){const te=i[G],ye=pe(te)?te.bind(t,t):pe(te.get)?te.get.bind(t,t):xo;ye===xo&&R(`Computed property "${G}" has no getter.`);const Ae=!pe(te)&&pe(te.set)?te.set.bind(t):()=>{R(`Write operation failed: computed property "${G}" is readonly.`)},lo=C({get:ye,set:Ae});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>lo.value,set:Ue=>lo.value=Ue}),ke("Computed",G)}if(l)for(const G in l)Ap(l[G],r,t,G);if(s){const G=pe(s)?s.call(t):s;Reflect.ownKeys(G).forEach(te=>{Lo(te,G[te])})}d&&Qc(d,e,"c");function Te(G,te){de(te)?te.forEach(ye=>G(ye.bind(t))):te&&G(te.bind(t))}if(Te(Qm,f),Te(Ft,p),Te(ev,b),Te(Ra,h),Te(_p,g),Te(Op,m),Te(nv,S),Te(rv,P),Te(tv,$),Te(vi,w),Te(cn,x),Te(ov,T),de(U))if(U.length){const G=e.exposed||(e.exposed={});U.forEach(te=>{Object.defineProperty(G,te,{get:()=>t[te],set:ye=>t[te]=ye})})}else e.exposed||(e.exposed={});E&&e.render===xo&&(e.render=E),J!=null&&(e.inheritAttrs=J),K&&(e.components=K),ge&&(e.directives=ge)}function uv(e,o,t=xo,r=!1){de(e)&&(e=Kl(e));for(const n in e){const i=e[n];let a;Ne(i)?"default"in i?a=Z(i.from||n,i.default,!0):a=Z(i.from||n):a=Z(i),$e(a)?r?Object.defineProperty(o,n,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):(R(`injected property "${n}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),o[n]=a):o[n]=a,t("Inject",n)}}function Qc(e,o,t){Bo(de(e)?e.map(r=>r.bind(o.proxy)):e.bind(o.proxy),o,t)}function Ap(e,o,t,r){const n=r.includes(".")?kp(t,r):()=>t[r];if(Ke(e)){const i=o[e];pe(i)?_e(n,i):R(`Invalid watch handler specified by key "${e}"`,i)}else if(pe(e))_e(n,e.bind(t));else if(Ne(e))if(de(e))e.forEach(i=>Ap(i,o,t,r));else{const i=pe(e.handler)?e.handler.bind(t):o[e.handler];pe(i)?_e(n,i,e):R(`Invalid watch handler specified by key "${e.handler}"`,i)}else R(`Invalid watch option: "${r}"`,e)}function oc(e){const o=e.type,{mixins:t,extends:r}=o,{mixins:n,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(o);let s;return l?s=l:!n.length&&!t&&!r?s=o:(s={},n.length&&n.forEach(c=>ca(s,c,a,!0)),ca(s,o,a)),Ne(o)&&i.set(o,s),s}function ca(e,o,t,r=!1){const{mixins:n,extends:i}=o;i&&ca(e,i,t,!0),n&&n.forEach(a=>ca(e,a,t,!0));for(const a in o)if(r&&a==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=pv[a]||t&&t[a];e[a]=l?l(e[a],o[a]):o[a]}return e}const pv={data:ed,props:ur,emits:ur,methods:ur,computed:ur,beforeCreate:bo,created:bo,beforeMount:bo,mounted:bo,beforeUpdate:bo,updated:bo,beforeDestroy:bo,beforeUnmount:bo,destroyed:bo,unmounted:bo,activated:bo,deactivated:bo,errorCaptured:bo,serverPrefetch:bo,components:ur,directives:ur,watch:bv,provide:ed,inject:hv};function ed(e,o){return o?e?function(){return De(pe(e)?e.call(this,this):e,pe(o)?o.call(this,this):o)}:o:e}function hv(e,o){return ur(Kl(e),Kl(o))}function Kl(e){if(de(e)){const o={};for(let t=0;t<e.length;t++)o[e[t]]=e[t];return o}return e}function bo(e,o){return e?[...new Set([].concat(e,o))]:o}function ur(e,o){return e?De(De(Object.create(null),e),o):o}function bv(e,o){if(!e)return o;if(!o)return e;const t=De(Object.create(null),e);for(const r in o)t[r]=bo(e[r],o[r]);return t}function gv(e,o,t,r=!1){const n={},i={};oa(i,ja,1),e.propsDefaults=Object.create(null),Cp(e,o,n,i);for(const a in e.propsOptions[0])a in n||(n[a]=void 0);Fp(o||{},n,e),t?e.props=r?n:fm(n):e.type.props?e.props=n:e.props=i,e.attrs=i}function mv(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function vv(e,o,t,r){const{props:n,attrs:i,vnode:{patchFlag:a}}=e,l=be(n),[s]=e.propsOptions;let c=!1;if(!mv(e)&&(r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if($a(e.emitsOptions,p))continue;const b=o[p];if(s)if(ze(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const h=ut(p);n[h]=Bl(s,l,h,b,e,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{Cp(e,o,n,i)&&(c=!0);let d;for(const f in l)(!o||!ze(o,f)&&((d=Tt(f))===f||!ze(o,d)))&&(s?t&&(t[f]!==void 0||t[d]!==void 0)&&(n[f]=Bl(s,l,f,void 0,e,!0)):delete n[f]);if(i!==l)for(const f in i)(!o||!ze(o,f))&&(delete i[f],c=!0)}c&&At(e,"set","$attrs"),Fp(o||{},n,e)}function Cp(e,o,t,r){const[n,i]=e.propsOptions;let a=!1,l;if(o)for(let s in o){if(Hi(s))continue;const c=o[s];let d;n&&ze(n,d=ut(s))?!i||!i.includes(d)?t[d]=c:(l||(l={}))[d]=c:$a(e.emitsOptions,s)||(!(s in r)||c!==r[s])&&(r[s]=c,a=!0)}if(i){const s=be(t),c=l||je;for(let d=0;d<i.length;d++){const f=i[d];t[f]=Bl(n,s,f,c[f],e,!ze(c,f))}}return a}function Bl(e,o,t,r,n,i){const a=e[t];if(a!=null){const l=ze(a,"default");if(l&&r===void 0){const s=a.default;if(a.type!==Function&&pe(s)){const{propsDefaults:c}=n;t in c?r=c[t]:(rn(n),r=c[t]=s.call(null,o),Er())}else r=s}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Tt(t))&&(r=!0))}return r}function Pp(e,o,t=!1){const r=o.propsCache,n=r.get(e);if(n)return n;const i=e.props,a={},l=[];let s=!1;if(!pe(e)){const d=f=>{s=!0;const[p,b]=Pp(f,o,!0);De(a,p),b&&l.push(...b)};!t&&o.mixins.length&&o.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!s)return Ne(e)&&r.set(e,Xr),Xr;if(de(i))for(let d=0;d<i.length;d++){Ke(i[d])||R("props must be strings when using array syntax.",i[d]);const f=ut(i[d]);od(f)&&(a[f]=je)}else if(i){Ne(i)||R("invalid props options",i);for(const d in i){const f=ut(d);if(od(f)){const p=i[d],b=a[f]=de(p)||pe(p)?{type:p}:Object.assign({},p);if(b){const h=rd(Boolean,b.type),g=rd(String,b.type);b[0]=h>-1,b[1]=g<0||h<g,(h>-1||ze(b,"default"))&&l.push(f)}}}}const c=[a,l];return Ne(e)&&r.set(e,c),c}function od(e){return e[0]!=="$"?!0:(R(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Dl(e){const o=e&&e.toString().match(/^\s*(function|class) (\w+)/);return o?o[2]:e===null?"null":""}function td(e,o){return Dl(e)===Dl(o)}function rd(e,o){return de(o)?o.findIndex(t=>td(t,e)):pe(o)&&td(o,e)?0:-1}function Fp(e,o,t){const r=be(o),n=t.propsOptions[0];for(const i in n){let a=n[i];a!=null&&kv(i,r[i],a,!ze(e,i)&&!ze(e,Tt(i)))}}function kv(e,o,t,r){const{type:n,required:i,validator:a}=t;if(i&&r){R('Missing required prop: "'+e+'"');return}if(!(o==null&&!t.required)){if(n!=null&&n!==!0){let l=!1;const s=de(n)?n:[n],c=[];for(let d=0;d<s.length&&!l;d++){const{valid:f,expectedType:p}=yv(o,s[d]);c.push(p||""),l=f}if(!l){R(xv(e,o,c));return}}a&&!a(o)&&R('Invalid prop: custom validator check failed for prop "'+e+'".')}}const wv=rr("String,Number,Boolean,Function,Symbol,BigInt");function yv(e,o){let t;const r=Dl(o);if(wv(r)){const n=typeof e;t=n===r.toLowerCase(),!t&&n==="object"&&(t=e instanceof o)}else r==="Object"?t=Ne(e):r==="Array"?t=de(e):r==="null"?t=e===null:t=e instanceof o;return{valid:t,expectedType:r}}function xv(e,o,t){let r=`Invalid prop: type check failed for prop "${e}". Expected ${t.map(Tr).join(" | ")}`;const n=t[0],i=Ms(o),a=nd(o,n),l=nd(o,i);return t.length===1&&id(n)&&!_v(n,i)&&(r+=` with value ${a}`),r+=`, got ${i} `,id(i)&&(r+=`with value ${l}.`),r}function nd(e,o){return o==="String"?`"${e}"`:o==="Number"?`${Number(e)}`:`${e}`}function id(e){return["string","number","boolean"].some(t=>e.toLowerCase()===t)}function _v(...e){return e.some(o=>o.toLowerCase()==="boolean")}const $p=e=>e[0]==="_"||e==="$stable",tc=e=>de(e)?e.map(Xo):[Xo(e)],Ov=(e,o,t)=>{if(o._n)return o;const r=ne((...n)=>(He&&R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),tc(o(...n))),t);return r._c=!1,r},Ip=(e,o,t)=>{const r=e._ctx;for(const n in e){if($p(n))continue;const i=e[n];if(pe(i))o[n]=Ov(n,i,r);else if(i!=null){R(`Non-function value encountered for slot "${n}". Prefer function slots for better performance.`);const a=tc(i);o[n]=()=>a}}},Np=(e,o)=>{mi(e.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const t=tc(o);e.slots.default=()=>t},Sv=(e,o)=>{if(e.vnode.shapeFlag&32){const t=o._;t?(e.slots=be(o),oa(o,"_",t)):Ip(o,e.slots={})}else e.slots={},o&&Np(e,o);oa(e.slots,ja,1)},zv=(e,o,t)=>{const{vnode:r,slots:n}=e;let i=!0,a=je;if(r.shapeFlag&32){const l=o._;l?qt?De(n,o):t&&l===1?i=!1:(De(n,o),!t&&l===1&&delete n._):(i=!o.$stable,Ip(o,n)),a=o}else o&&(Np(e,o),a={default:1});if(i)for(const l in n)!$p(l)&&!(l in a)&&delete n[l]};function Rp(){return{app:null,config:{isNativeTag:Nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ev=0;function Lv(e,o){return function(r,n=null){pe(r)||(r=Object.assign({},r)),n!=null&&!Ne(n)&&(R("root props passed to app.mount() must be an object."),n=null);const i=Rp(),a=new Set;let l=!1;const s=i.app={_uid:Ev++,_component:r,_props:n,_container:null,_context:i,_instance:null,version:fa,get config(){return i.config},set config(c){R("app.config cannot be replaced. Modify individual options instead.")},use(c,...d){return a.has(c)?R("Plugin has already been applied to target app."):c&&pe(c.install)?(a.add(c),c.install(s,...d)):pe(c)?(a.add(c),c(s,...d)):R('A plugin must either be a function or an object with an "install" function.'),s},mixin(c){return i.mixins.includes(c)?R("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):i.mixins.push(c),s},component(c,d){return ql(c,i.config),d?(i.components[c]&&R(`Component "${c}" has already been registered in target app.`),i.components[c]=d,s):i.components[c]},directive(c,d){return zp(c),d?(i.directives[c]&&R(`Directive "${c}" has already been registered in target app.`),i.directives[c]=d,s):i.directives[c]},mount(c,d,f){if(l)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const p=X(r,n);return p.appContext=i,i.reload=()=>{e(Qo(p),c,f)},d&&o?o(p,c):e(p,c,f),l=!0,s._container=c,c.__vue_app__=s,s._instance=p.component,$m(s,fa),Ma(p.component)||p.component.proxy}},unmount(){l?(e(null,s._container),s._instance=null,Im(s),delete s._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(c,d){return c in i.provides&&R(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),i.provides[c]=d,s}};return s}}function Ul(e,o,t,r,n=!1){if(de(e)){e.forEach((p,b)=>Ul(p,o&&(de(o)?o[b]:o),t,r,n));return}if(Zr(r)&&!n)return;const i=r.shapeFlag&4?Ma(r.component)||r.component.proxy:r.el,a=n?null:i,{i:l,r:s}=e;if(!l){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=o&&o.r,d=l.refs===je?l.refs={}:l.refs,f=l.setupState;if(c!=null&&c!==s&&(Ke(c)?(d[c]=null,ze(f,c)&&(f[c]=null)):$e(c)&&(c.value=null)),pe(s))Lt(s,l,12,[a,d]);else{const p=Ke(s),b=$e(s);if(p||b){const h=()=>{if(e.f){const g=p?ze(f,s)?f[s]:d[s]:s.value;n?de(g)&&Ns(g,i):de(g)?g.includes(i)||g.push(i):p?(d[s]=[i],ze(f,s)&&(f[s]=d[s])):(s.value=[i],e.k&&(d[e.k]=s.value))}else p?(d[s]=a,ze(f,s)&&(f[s]=a)):b?(s.value=a,e.k&&(d[e.k]=a)):R("Invalid template ref type:",s,`(${typeof s})`)};a?(h.id=-1,io(h,t)):h()}else R("Invalid template ref type:",s,`(${typeof s})`)}}let gn,Bt;function yt(e,o){e.appContext.config.performance&&da()&&Bt.mark(`vue-${o}-${e.uid}`),jm(e,o,da()?Bt.now():Date.now())}function xt(e,o){if(e.appContext.config.performance&&da()){const t=`vue-${o}-${e.uid}`,r=t+":end";Bt.mark(r),Bt.measure(`<${Ka(e,e.type)}> ${o}`,t,r),Bt.clearMarks(t),Bt.clearMarks(r)}Mm(e,o,da()?Bt.now():Date.now())}function da(){return gn!==void 0||(typeof window<"u"&&window.performance?(gn=!0,Bt=window.performance):gn=!1),gn}function Tv(){const e=[];if(e.length){const o=e.length>1;console.warn(`Feature flag${o?"s":""} ${e.join(", ")} ${o?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const io=Wm;function Av(e){return Cv(e)}function Cv(e,o){Tv();const t=Ku();t.__VUE__=!0,pp(t.__VUE_DEVTOOLS_GLOBAL_HOOK__,t);const{insert:r,remove:n,patchProp:i,createElement:a,createText:l,createComment:s,setText:c,setElementText:d,parentNode:f,nextSibling:p,setScopeId:b=xo,insertStaticContent:h}=e,g=(v,_,L,N=null,I=null,B=null,V=!1,M=null,q=qt?!1:!!_.dynamicChildren)=>{if(v===_)return;v&&!Dt(v,_)&&(N=Q(v),Ze(v,I,B,!0),v=null),_.patchFlag===-2&&(q=!1,_.dynamicChildren=null);const{type:j,ref:re,shapeFlag:ee}=_;switch(j){case ki:m(v,_,L,N);break;case to:k(v,_,L,N);break;case Wi:v==null?w(_,L,N,V):y(v,_,L,V);break;case Fe:ge(v,_,L,N,I,B,V,M,q);break;default:ee&1?P(v,_,L,N,I,B,V,M,q):ee&6?fe(v,_,L,N,I,B,V,M,q):ee&64||ee&128?j.process(v,_,L,N,I,B,V,M,q,Le):R("Invalid VNode type:",j,`(${typeof j})`)}re!=null&&I&&Ul(re,v&&v.ref,B,_||v,!_)},m=(v,_,L,N)=>{if(v==null)r(_.el=l(_.children),L,N);else{const I=_.el=v.el;_.children!==v.children&&c(I,_.children)}},k=(v,_,L,N)=>{v==null?r(_.el=s(_.children||""),L,N):_.el=v.el},w=(v,_,L,N)=>{[v.el,v.anchor]=h(v.children,_,L,N,v.el,v.anchor)},y=(v,_,L,N)=>{if(_.children!==v.children){const I=p(v.anchor);E(v),[_.el,_.anchor]=h(_.children,L,I,N)}else _.el=v.el,_.anchor=v.anchor},x=({el:v,anchor:_},L,N)=>{let I;for(;v&&v!==_;)I=p(v),r(v,L,N),v=I;r(_,L,N)},E=({el:v,anchor:_})=>{let L;for(;v&&v!==_;)L=p(v),n(v),v=L;n(_)},P=(v,_,L,N,I,B,V,M,q)=>{V=V||_.type==="svg",v==null?$(_,L,N,I,B,V,M,q):U(v,_,I,B,V,M,q)},$=(v,_,L,N,I,B,V,M)=>{let q,j;const{type:re,props:ee,shapeFlag:le,transition:ve,dirs:Ee}=v;if(q=v.el=a(v.type,B,ee&&ee.is,ee),le&8?d(q,v.children):le&16&&T(v.children,q,null,N,I,B&&re!=="foreignObject",V,M),Ee&&ar(v,null,N,"created"),S(q,v,v.scopeId,V,N),ee){for(const Re in ee)Re!=="value"&&!Hi(Re)&&i(q,Re,null,ee[Re],B,v.children,N,I,D);"value"in ee&&i(q,"value",null,ee.value),(j=ee.onVnodeBeforeMount)&&jo(j,N,v)}Object.defineProperty(q,"__vnode",{value:v,enumerable:!1}),Object.defineProperty(q,"__vueParentComponent",{value:N,enumerable:!1}),Ee&&ar(v,null,N,"beforeMount");const Me=(!I||I&&!I.pendingBranch)&&ve&&!ve.persisted;Me&&ve.beforeEnter(q),r(q,_,L),((j=ee&&ee.onVnodeMounted)||Me||Ee)&&io(()=>{j&&jo(j,N,v),Me&&ve.enter(q),Ee&&ar(v,null,N,"mounted")},I)},S=(v,_,L,N,I)=>{if(L&&b(v,L),N)for(let B=0;B<N.length;B++)b(v,N[B]);if(I){let B=I.subTree;if(B.patchFlag>0&&B.patchFlag&2048&&(B=mp(B.children)||B),_===B){const V=I.vnode;S(v,V,V.scopeId,V.slotScopeIds,I.parent)}}},T=(v,_,L,N,I,B,V,M,q=0)=>{for(let j=q;j<v.length;j++){const re=v[j]=M?Mt(v[j]):Xo(v[j]);g(null,re,_,L,N,I,B,V,M)}},U=(v,_,L,N,I,B,V)=>{const M=_.el=v.el;let{patchFlag:q,dynamicChildren:j,dirs:re}=_;q|=v.patchFlag&16;const ee=v.props||je,le=_.props||je;let ve;L&&lr(L,!1),(ve=le.onVnodeBeforeUpdate)&&jo(ve,L,_,v),re&&ar(_,v,L,"beforeUpdate"),L&&lr(L,!0),qt&&(q=0,V=!1,j=null);const Ee=I&&_.type!=="foreignObject";if(j?(J(v.dynamicChildren,j,M,L,N,Ee,B),L&&L.type.__hmrId&&In(v,_)):V||ye(v,_,M,null,L,N,Ee,B,!1),q>0){if(q&16)K(M,_,ee,le,L,N,I);else if(q&2&&ee.class!==le.class&&i(M,"class",null,le.class,I),q&4&&i(M,"style",ee.style,le.style,I),q&8){const Me=_.dynamicProps;for(let Re=0;Re<Me.length;Re++){const Ge=Me[Re],qo=ee[Ge],Rr=le[Ge];(Rr!==qo||Ge==="value")&&i(M,Ge,qo,Rr,I,v.children,L,N,D)}}q&1&&v.children!==_.children&&d(M,_.children)}else!V&&j==null&&K(M,_,ee,le,L,N,I);((ve=le.onVnodeUpdated)||re)&&io(()=>{ve&&jo(ve,L,_,v),re&&ar(_,v,L,"updated")},N)},J=(v,_,L,N,I,B,V)=>{for(let M=0;M<_.length;M++){const q=v[M],j=_[M],re=q.el&&(q.type===Fe||!Dt(q,j)||q.shapeFlag&70)?f(q.el):L;g(q,j,re,null,N,I,B,V,!0)}},K=(v,_,L,N,I,B,V)=>{if(L!==N){if(L!==je)for(const M in L)!Hi(M)&&!(M in N)&&i(v,M,L[M],null,V,_.children,I,B,D);for(const M in N){if(Hi(M))continue;const q=N[M],j=L[M];q!==j&&M!=="value"&&i(v,M,j,q,V,_.children,I,B,D)}"value"in N&&i(v,"value",L.value,N.value)}},ge=(v,_,L,N,I,B,V,M,q)=>{const j=_.el=v?v.el:l(""),re=_.anchor=v?v.anchor:l("");let{patchFlag:ee,dynamicChildren:le,slotScopeIds:ve}=_;(qt||ee&2048)&&(ee=0,q=!1,le=null),ve&&(M=M?M.concat(ve):ve),v==null?(r(j,L,N),r(re,L,N),T(_.children,L,re,I,B,V,M,q)):ee>0&&ee&64&&le&&v.dynamicChildren?(J(v.dynamicChildren,le,L,I,B,V,M),I&&I.type.__hmrId?In(v,_):(_.key!=null||I&&_===I.subTree)&&In(v,_,!0)):ye(v,_,L,re,I,B,V,M,q)},fe=(v,_,L,N,I,B,V,M,q)=>{_.slotScopeIds=M,v==null?_.shapeFlag&512?I.ctx.activate(_,L,N,V,q):ke(_,L,N,I,B,V,q):Te(v,_,q)},ke=(v,_,L,N,I,B,V)=>{const M=v.component=Dv(v,N,I);if(M.type.__hmrId&&Am(M),qi(v),yt(M,"mount"),mi(v)&&(M.ctx.renderer=Le),yt(M,"init"),Hv(M),xt(M,"init"),M.asyncDep){if(I&&I.registerDep(M,G),!v.el){const q=M.subTree=X(to);k(null,q,_,L)}return}G(M,v,_,L,I,B,V),Vi(),xt(M,"mount")},Te=(v,_,L)=>{const N=_.component=v.component;if(qm(v,_,L))if(N.asyncDep&&!N.asyncResolved){qi(_),te(N,_,L),Vi();return}else N.next=_,Lm(N.update),N.update();else _.el=v.el,N.vnode=_},G=(v,_,L,N,I,B,V)=>{const M=()=>{if(v.isMounted){let{next:re,bu:ee,u:le,parent:ve,vnode:Ee}=v,Me=re,Re;qi(re||v.vnode),lr(v,!1),re?(re.el=Ee.el,te(v,re,V)):re=Ee,ee&&hr(ee),(Re=re.props&&re.props.onVnodeBeforeUpdate)&&jo(Re,ve,re,Ee),lr(v,!0),yt(v,"render");const Ge=Za(v);xt(v,"render");const qo=v.subTree;v.subTree=Ge,yt(v,"patch"),g(qo,Ge,f(qo.el),Q(qo),v,I,B),xt(v,"patch"),re.el=Ge.el,Me===null&&Vm(v,Ge.el),le&&io(le,I),(Re=re.props&&re.props.onVnodeUpdated)&&io(()=>jo(Re,ve,re,Ee),I),hp(v),Vi()}else{let re;const{el:ee,props:le}=_,{bm:ve,m:Ee,parent:Me}=v,Re=Zr(_);if(lr(v,!1),ve&&hr(ve),!Re&&(re=le&&le.onVnodeBeforeMount)&&jo(re,Me,_),lr(v,!0),ee&&ue){const Ge=()=>{yt(v,"render"),v.subTree=Za(v),xt(v,"render"),yt(v,"hydrate"),ue(ee,v.subTree,v,I,null),xt(v,"hydrate")};Re?_.type.__asyncLoader().then(()=>!v.isUnmounted&&Ge()):Ge()}else{yt(v,"render");const Ge=v.subTree=Za(v);xt(v,"render"),yt(v,"patch"),g(null,Ge,L,N,v,I,B),xt(v,"patch"),_.el=Ge.el}if(Ee&&io(Ee,I),!Re&&(re=le&&le.onVnodeMounted)){const Ge=_;io(()=>jo(re,Me,Ge),I)}(_.shapeFlag&256||Me&&Zr(Me.vnode)&&Me.vnode.shapeFlag&256)&&v.a&&io(v.a,I),v.isMounted=!0,Il(v),_=L=N=null}},q=v.effect=new Us(M,()=>Fa(j),v.scope),j=v.update=()=>q.run();j.id=v.uid,lr(v,!0),q.onTrack=v.rtc?re=>hr(v.rtc,re):void 0,q.onTrigger=v.rtg?re=>hr(v.rtg,re):void 0,j.ownerInstance=v,j()},te=(v,_,L)=>{_.component=v;const N=v.vnode.props;v.vnode=_,v.next=null,vv(v,_.props,N,L),zv(v,_.children,L),Cr(),Wc(),Pr()},ye=(v,_,L,N,I,B,V,M,q=!1)=>{const j=v&&v.children,re=v?v.shapeFlag:0,ee=_.children,{patchFlag:le,shapeFlag:ve}=_;if(le>0){if(le&128){lo(j,ee,L,N,I,B,V,M,q);return}else if(le&256){Ae(j,ee,L,N,I,B,V,M,q);return}}ve&8?(re&16&&D(j,I,B),ee!==j&&d(L,ee)):re&16?ve&16?lo(j,ee,L,N,I,B,V,M,q):D(j,I,B,!0):(re&8&&d(L,""),ve&16&&T(ee,L,N,I,B,V,M,q))},Ae=(v,_,L,N,I,B,V,M,q)=>{v=v||Xr,_=_||Xr;const j=v.length,re=_.length,ee=Math.min(j,re);let le;for(le=0;le<ee;le++){const ve=_[le]=q?Mt(_[le]):Xo(_[le]);g(v[le],ve,L,null,I,B,V,M,q)}j>re?D(v,I,B,!0,!1,ee):T(_,L,N,I,B,V,M,q,ee)},lo=(v,_,L,N,I,B,V,M,q)=>{let j=0;const re=_.length;let ee=v.length-1,le=re-1;for(;j<=ee&&j<=le;){const ve=v[j],Ee=_[j]=q?Mt(_[j]):Xo(_[j]);if(Dt(ve,Ee))g(ve,Ee,L,null,I,B,V,M,q);else break;j++}for(;j<=ee&&j<=le;){const ve=v[ee],Ee=_[le]=q?Mt(_[le]):Xo(_[le]);if(Dt(ve,Ee))g(ve,Ee,L,null,I,B,V,M,q);else break;ee--,le--}if(j>ee){if(j<=le){const ve=le+1,Ee=ve<re?_[ve].el:N;for(;j<=le;)g(null,_[j]=q?Mt(_[j]):Xo(_[j]),L,Ee,I,B,V,M,q),j++}}else if(j>le)for(;j<=ee;)Ze(v[j],I,B,!0),j++;else{const ve=j,Ee=j,Me=new Map;for(j=Ee;j<=le;j++){const po=_[j]=q?Mt(_[j]):Xo(_[j]);po.key!=null&&(Me.has(po.key)&&R("Duplicate keys found during update:",JSON.stringify(po.key),"Make sure keys are unique."),Me.set(po.key,j))}let Re,Ge=0;const qo=le-Ee+1;let Rr=!1,Nc=0;const bn=new Array(qo);for(j=0;j<qo;j++)bn[j]=0;for(j=ve;j<=ee;j++){const po=v[j];if(Ge>=qo){Ze(po,I,B,!0);continue}let tt;if(po.key!=null)tt=Me.get(po.key);else for(Re=Ee;Re<=le;Re++)if(bn[Re-Ee]===0&&Dt(po,_[Re])){tt=Re;break}tt===void 0?Ze(po,I,B,!0):(bn[tt-Ee]=j+1,tt>=Nc?Nc=tt:Rr=!0,g(po,_[tt],L,null,I,B,V,M,q),Ge++)}const Rc=Rr?Pv(bn):Xr;for(Re=Rc.length-1,j=qo-1;j>=0;j--){const po=Ee+j,tt=_[po],jc=po+1<re?_[po+1].el:N;bn[j]===0?g(null,tt,L,jc,I,B,V,M,q):Rr&&(Re<0||j!==Rc[Re]?Ue(tt,L,jc,2):Re--)}}},Ue=(v,_,L,N,I=null)=>{const{el:B,type:V,transition:M,children:q,shapeFlag:j}=v;if(j&6){Ue(v.component.subTree,_,L,N);return}if(j&128){v.suspense.move(_,L,N);return}if(j&64){V.move(v,_,L,Le);return}if(V===Fe){r(B,_,L);for(let ee=0;ee<q.length;ee++)Ue(q[ee],_,L,N);r(v.anchor,_,L);return}if(V===Wi){x(v,_,L);return}if(N!==2&&j&1&&M)if(N===0)M.beforeEnter(B),r(B,_,L),io(()=>M.enter(B),I);else{const{leave:ee,delayLeave:le,afterLeave:ve}=M,Ee=()=>r(B,_,L),Me=()=>{ee(B,()=>{Ee(),ve&&ve()})};le?le(B,Ee,Me):Me()}else r(B,_,L)},Ze=(v,_,L,N=!1,I=!1)=>{const{type:B,props:V,ref:M,children:q,dynamicChildren:j,shapeFlag:re,patchFlag:ee,dirs:le}=v;if(M!=null&&Ul(M,null,L,v,!0),re&256){_.ctx.deactivate(v);return}const ve=re&1&&le,Ee=!Zr(v);let Me;if(Ee&&(Me=V&&V.onVnodeBeforeUnmount)&&jo(Me,_,v),re&6)W(v.component,L,N);else{if(re&128){v.suspense.unmount(L,N);return}ve&&ar(v,null,_,"beforeUnmount"),re&64?v.type.remove(v,_,L,I,Le,N):j&&(B!==Fe||ee>0&&ee&64)?D(j,_,L,!1,!0):(B===Fe&&ee&384||!I&&re&16)&&D(q,_,L),N&&No(v)}(Ee&&(Me=V&&V.onVnodeUnmounted)||ve)&&io(()=>{Me&&jo(Me,_,v),ve&&ar(v,null,_,"unmounted")},L)},No=v=>{const{type:_,el:L,anchor:N,transition:I}=v;if(_===Fe){v.patchFlag>0&&v.patchFlag&2048&&I&&!I.persisted?v.children.forEach(V=>{V.type===to?n(V.el):No(V)}):F(L,N);return}if(_===Wi){E(v);return}const B=()=>{n(L),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(v.shapeFlag&1&&I&&!I.persisted){const{leave:V,delayLeave:M}=I,q=()=>V(L,B);M?M(v.el,B,q):q()}else B()},F=(v,_)=>{let L;for(;v!==_;)L=p(v),n(v),v=L;n(_)},W=(v,_,L)=>{v.type.__hmrId&&Cm(v);const{bum:N,scope:I,update:B,subTree:V,um:M}=v;N&&hr(N),I.stop(),B&&(B.active=!1,Ze(V,v,_,L)),M&&io(M,_),io(()=>{v.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),Rm(v)},D=(v,_,L,N=!1,I=!1,B=0)=>{for(let V=B;V<v.length;V++)Ze(v[V],_,L,N,I)},Q=v=>v.shapeFlag&6?Q(v.component.subTree):v.shapeFlag&128?v.suspense.next():p(v.anchor||v.el),Oe=(v,_,L)=>{v==null?_._vnode&&Ze(_._vnode,null,null,!0):g(_._vnode||null,v,_,null,null,null,L),Wc(),dp(),_._vnode=v},Le={p:g,um:Ze,m:Ue,r:No,mt:ke,mc:T,pc:ye,pbc:J,n:Q,o:e};let me,ue;return o&&([me,ue]=o(Le)),{render:Oe,hydrate:me,createApp:Lv(Oe,me)}}function lr({effect:e,update:o},t){e.allowRecurse=o.allowRecurse=t}function In(e,o,t=!1){const r=e.children,n=o.children;if(de(r)&&de(n))for(let i=0;i<r.length;i++){const a=r[i];let l=n[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[i]=Mt(n[i]),l.el=a.el),t||In(a,l)),l.type===ki&&(l.el=a.el),l.type===to&&!l.el&&(l.el=a.el)}}function Pv(e){const o=e.slice(),t=[0];let r,n,i,a,l;const s=e.length;for(r=0;r<s;r++){const c=e[r];if(c!==0){if(n=t[t.length-1],e[n]<c){o[r]=n,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,e[t[l]]<c?i=l+1:a=l;c<e[t[i]]&&(i>0&&(o[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=o[a];return t}const Fv=e=>e.__isTeleport,Jr=e=>e&&(e.disabled||e.disabled===""),ad=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Hl=(e,o)=>{const t=e&&e.to;if(Ke(t))if(o){const r=o(t);return r||R(`Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),r}else return R("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!t&&!Jr(e)&&R(`Invalid Teleport target: ${t}`),t},$v={__isTeleport:!0,process(e,o,t,r,n,i,a,l,s,c){const{mc:d,pc:f,pbc:p,o:{insert:b,querySelector:h,createText:g,createComment:m}}=c,k=Jr(o.props);let{shapeFlag:w,children:y,dynamicChildren:x}=o;if(qt&&(s=!1,x=null),e==null){const E=o.el=m("teleport start"),P=o.anchor=m("teleport end");b(E,t,r),b(P,t,r);const $=o.target=Hl(o.props,h),S=o.targetAnchor=g("");$?(b(S,$),a=a||ad($)):k||R("Invalid Teleport target on mount:",$,`(${typeof $})`);const T=(U,J)=>{w&16&&d(y,U,J,n,i,a,l,s)};k?T(t,P):$&&T($,S)}else{o.el=e.el;const E=o.anchor=e.anchor,P=o.target=e.target,$=o.targetAnchor=e.targetAnchor,S=Jr(e.props),T=S?t:P,U=S?E:$;if(a=a||ad(P),x?(p(e.dynamicChildren,x,T,n,i,a,l),In(e,o,!0)):s||f(e,o,T,U,n,i,a,l,!1),k)S||Pi(o,t,E,c,1);else if((o.props&&o.props.to)!==(e.props&&e.props.to)){const J=o.target=Hl(o.props,h);J?Pi(o,J,null,c,0):R("Invalid Teleport target on update:",P,`(${typeof P})`)}else S&&Pi(o,P,$,c,1)}jp(o)},remove(e,o,t,r,{um:n,o:{remove:i}},a){const{shapeFlag:l,children:s,anchor:c,targetAnchor:d,target:f,props:p}=e;if(f&&i(d),(a||!Jr(p))&&(i(c),l&16))for(let b=0;b<s.length;b++){const h=s[b];n(h,o,t,!0,!!h.dynamicChildren)}},move:Pi,hydrate:Iv};function Pi(e,o,t,{o:{insert:r},m:n},i=2){i===0&&r(e.targetAnchor,o,t);const{el:a,anchor:l,shapeFlag:s,children:c,props:d}=e,f=i===2;if(f&&r(a,o,t),(!f||Jr(d))&&s&16)for(let p=0;p<c.length;p++)n(c[p],o,t,2);f&&r(l,o,t)}function Iv(e,o,t,r,n,i,{o:{nextSibling:a,parentNode:l,querySelector:s}},c){const d=o.target=Hl(o.props,s);if(d){const f=d._lpa||d.firstChild;if(o.shapeFlag&16)if(Jr(o.props))o.anchor=c(a(e),o,l(e),t,r,n,i),o.targetAnchor=f;else{o.anchor=a(e);let p=f;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){o.targetAnchor=p,d._lpa=o.targetAnchor&&a(o.targetAnchor);break}c(f,o,d,t,r,n,i)}jp(o)}return o.anchor&&a(o.anchor)}const Nv=$v;function jp(e){const o=e.ctx;if(o&&o.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",o.uid),t=t.nextSibling;o.ut()}}const Fe=Symbol("Fragment"),ki=Symbol("Text"),to=Symbol("Comment"),Wi=Symbol("Static"),Nn=[];let Yo=null;function A(e=!1){Nn.push(Yo=e?null:[])}function Rv(){Nn.pop(),Yo=Nn[Nn.length-1]||null}let Qn=1;function ld(e){Qn+=e}function Mp(e){return e.dynamicChildren=Qn>0?Yo||Xr:null,Rv(),Qn>0&&Yo&&Yo.push(e),e}function Y(e,o,t,r,n,i){return Mp(u(e,o,t,r,n,i,!0))}function oe(e,o,t,r,n){return Mp(X(e,o,t,r,n,!0))}function ht(e){return e?e.__v_isVNode===!0:!1}function Dt(e,o){return o.shapeFlag&6&&Hr.has(o.type)?(e.shapeFlag&=-257,o.shapeFlag&=-513,!1):e.type===o.type&&e.key===o.key}const jv=(...e)=>Mv(...e),ja="__vInternal",Kp=({key:e})=>e??null,Gi=({ref:e,ref_key:o,ref_for:t})=>e!=null?Ke(e)||$e(e)||pe(e)?{i:eo,r:e,k:o,f:!!t}:e:null;function u(e,o=null,t=null,r=0,n=null,i=e===Fe?0:1,a=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:o,key:o&&Kp(o),ref:o&&Gi(o),scopeId:Ia,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:eo};return l?(rc(s,t),i&128&&e.normalize(s)):t&&(s.shapeFlag|=Ke(t)?8:16),s.key!==s.key&&R("VNode created with invalid key (NaN). VNode type:",s.type),Qn>0&&!a&&Yo&&(s.patchFlag>0||i&6)&&s.patchFlag!==32&&Yo.push(s),s}const X=jv;function Mv(e,o=null,t=null,r=0,n=null,i=!1){if((!e||e===av)&&(e||R(`Invalid vnode type when creating vnode: ${e}.`),e=to),ht(e)){const l=Qo(e,o,!0);return t&&rc(l,t),Qn>0&&!i&&Yo&&(l.shapeFlag&6?Yo[Yo.indexOf(e)]=l:Yo.push(l)),l.patchFlag|=-2,l}if(qp(e)&&(e=e.__vccOpts),o){o=We(o);let{class:l,style:s}=o;l&&!Ke(l)&&(o.class=qe(l)),Ne(s)&&(ia(s)&&!de(s)&&(s=De({},s)),o.style=oo(s))}const a=Ke(e)?1:vp(e)?128:Fv(e)?64:Ne(e)?4:pe(e)?2:0;return a&4&&ia(e)&&(e=be(e),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),u(e,o,t,r,n,a,i,!0)}function We(e){return e?ia(e)||ja in e?De({},e):e:null}function Qo(e,o,t=!1){const{props:r,ref:n,patchFlag:i,children:a}=e,l=o?tn(r||{},o):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Kp(l),ref:o&&o.ref?t&&n?de(n)?n.concat(Gi(o)):[n,Gi(o)]:Gi(o):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i===-1&&de(a)?a.map(Bp):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:o&&e.type!==Fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qo(e.ssContent),ssFallback:e.ssFallback&&Qo(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Bp(e){const o=Qo(e);return de(e.children)&&(o.children=e.children.map(Bp)),o}function O(e=" ",o=0){return X(ki,null,e,o)}function we(e="",o=!1){return o?(A(),oe(to,null,e)):X(to,null,e)}function Xo(e){return e==null||typeof e=="boolean"?X(to):de(e)?X(Fe,null,e.slice()):typeof e=="object"?Mt(e):X(ki,null,String(e))}function Mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qo(e)}function rc(e,o){let t=0;const{shapeFlag:r}=e;if(o==null)o=null;else if(de(o))t=16;else if(typeof o=="object")if(r&65){const n=o.default;n&&(n._c&&(n._d=!1),rc(e,n()),n._c&&(n._d=!0));return}else{t=32;const n=o._;!n&&!(ja in o)?o._ctx=eo:n===3&&eo&&(eo.slots._===1?o._=1:(o._=2,e.patchFlag|=1024))}else pe(o)?(o={default:o,_ctx:eo},t=32):(o=String(o),r&64?(t=16,o=[O(o)]):t=8);e.children=o,e.shapeFlag|=t}function tn(...e){const o={};for(let t=0;t<e.length;t++){const r=e[t];for(const n in r)if(n==="class")o.class!==r.class&&(o.class=qe([o.class,r.class]));else if(n==="style")o.style=oo([o.style,r.style]);else if(hi(n)){const i=o[n],a=r[n];a&&i!==a&&!(de(i)&&i.includes(a))&&(o[n]=i?[].concat(i,a):a)}else n!==""&&(o[n]=r[n])}return o}function jo(e,o,t,r=null){Bo(e,o,7,[t,r])}const Kv=Rp();let Bv=0;function Dv(e,o,t){const r=e.type,n=(o?o.appContext:e.appContext)||Kv,i={uid:Bv++,vnode:e,type:r,parent:o,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:o?o.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pp(r,n),emitsOptions:gp(r,n),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=lv(i),i.root=o?o.root:i,i.emit=Bm.bind(null,i),e.ce&&e.ce(i),i}let He=null;const Fo=()=>He||eo,rn=e=>{He=e,e.scope.on()},Er=()=>{He&&He.scope.off(),He=null},Uv=rr("slot,component");function ql(e,o){const t=o.isNativeTag||Nu;(Uv(e)||t(e))&&R("Do not use built-in or reserved HTML elements as component id: "+e)}function Dp(e){return e.vnode.shapeFlag&4}let ei=!1;function Hv(e,o=!1){ei=o;const{props:t,children:r}=e.vnode,n=Dp(e);gv(e,t,n,o),Sv(e,r);const i=n?qv(e,o):void 0;return ei=!1,i}function qv(e,o){var t;const r=e.type;{if(r.name&&ql(r.name,e.appContext.config),r.components){const i=Object.keys(r.components);for(let a=0;a<i.length;a++)ql(i[a],e.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let a=0;a<i.length;a++)zp(i[a])}r.compilerOptions&&Vv()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Ca(new Proxy(e.ctx,Tp)),sv(e);const{setup:n}=r;if(n){const i=e.setupContext=n.length>1?Hp(e):null;rn(e),Cr();const a=Lt(n,e,0,[Wr(e.props),i]);if(Pr(),Er(),js(a)){if(a.then(Er,Er),o)return a.then(l=>{sd(e,l,o)}).catch(l=>{Pa(l,e,0)});if(e.asyncDep=a,!e.suspense){const l=(t=r.name)!==null&&t!==void 0?t:"Anonymous";R(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else sd(e,a,o)}else Up(e,o)}function sd(e,o,t){pe(o)?e.type.__ssrInlineRender?e.ssrRender=o:e.render=o:Ne(o)?(ht(o)&&R("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=o,e.setupState=rp(o),cv(e)):o!==void 0&&R(`setup() should return an object. Received: ${o===null?"null":typeof o}`),Up(e,t)}let Vl;const Vv=()=>!Vl;function Up(e,o,t){const r=e.type;if(!e.render){if(!o&&Vl&&!r.render){const n=r.template||oc(e).template;if(n){yt(e,"compile");const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:s}=r,c=De(De({isCustomElement:i,delimiters:l},a),s);r.render=Vl(n,c),xt(e,"compile")}}e.render=r.render||xo}rn(e),Cr(),fv(e),Pr(),Er(),!r.render&&e.render===xo&&!o&&(r.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function Wv(e){return new Proxy(e.attrs,{get(o,t){return la(),Oo(e,"get","$attrs"),o[t]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}})}function Hp(e){const o=r=>{if(e.exposed&&R("expose() should be called only once per setup()."),r!=null){let n=typeof r;n==="object"&&(de(r)?n="array":$e(r)&&(n="ref")),n!=="object"&&R(`expose() should be passed a plain object, received ${n}.`)}e.exposed=r||{}};let t;return Object.freeze({get attrs(){return t||(t=Wv(e))},get slots(){return Wr(e.slots)},get emit(){return(r,...n)=>e.emit(r,...n)},expose:o})}function Ma(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(rp(Ca(e.exposed)),{get(o,t){if(t in o)return o[t];if(t in zr)return zr[t](e)},has(o,t){return t in o||t in zr}}))}const Gv=/(?:^|[-_])(\w)/g,Xv=e=>e.replace(Gv,o=>o.toUpperCase()).replace(/[-_]/g,"");function oi(e,o=!0){return pe(e)?e.displayName||e.name:e.name||o&&e.__name}function Ka(e,o,t=!1){let r=oi(o);if(!r&&o.__file){const n=o.__file.match(/([^/\\]+)\.\w+$/);n&&(r=n[1])}if(!r&&e&&e.parent){const n=i=>{for(const a in i)if(i[a]===o)return a};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?Xv(r):t?"App":"Anonymous"}function qp(e){return pe(e)&&"__vccOpts"in e}const C=(e,o)=>km(e,o,ei);function Yv(){return Zv().slots}function Zv(){const e=Fo();return e||R("useContext() called without active instance."),e.setupContext||(e.setupContext=Hp(e))}function Qe(e,o,t){const r=arguments.length;return r===2?Ne(o)&&!de(o)?ht(o)?X(e,null,[o]):X(e,o):X(e,null,o):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&ht(t)&&(t=[t]),X(e,o,t))}const Jv=Symbol("ssrContext"),Qv=()=>{{const e=Z(Jv);return e||R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function tl(e){return!!(e&&e.__v_isShallow)}function e0(){if(typeof window>"u")return;const e={style:"color:#3ba776"},o={style:"color:#0b1bc9"},t={style:"color:#b62e24"},r={style:"color:#9d288c"},n={header(f){return Ne(f)?f.__isVue?["div",e,"VueInstance"]:$e(f)?["div",{},["span",e,d(f)],"<",l(f.value),">"]:Or(f)?["div",{},["span",e,tl(f)?"ShallowReactive":"Reactive"],"<",l(f),`>${er(f)?" (readonly)":""}`]:er(f)?["div",{},["span",e,tl(f)?"ShallowReadonly":"Readonly"],"<",l(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...i(f.$)]}};function i(f){const p=[];f.type.props&&f.props&&p.push(a("props",be(f.props))),f.setupState!==je&&p.push(a("setup",f.setupState)),f.data!==je&&p.push(a("data",be(f.data)));const b=s(f,"computed");b&&p.push(a("computed",b));const h=s(f,"inject");return h&&p.push(a("injected",h)),p.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),p}function a(f,p){return p=De({},p),Object.keys(p).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(p).map(b=>["div",{},["span",r,b+": "],l(p[b],!1)])]]:["span",{}]}function l(f,p=!0){return typeof f=="number"?["span",o,f]:typeof f=="string"?["span",t,JSON.stringify(f)]:typeof f=="boolean"?["span",r,f]:Ne(f)?["object",{object:p?be(f):f}]:["span",t,String(f)]}function s(f,p){const b=f.type;if(pe(b))return;const h={};for(const g in f.ctx)c(b,g,p)&&(h[g]=f.ctx[g]);return h}function c(f,p,b){const h=f[b];if(de(h)&&h.includes(p)||Ne(h)&&p in h||f.extends&&c(f.extends,p,b)||f.mixins&&f.mixins.some(g=>c(g,p,b)))return!0}function d(f){return tl(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(n):window.devtoolsFormatters=[n]}const fa="3.2.47",o0="http://www.w3.org/2000/svg",br=typeof document<"u"?document:null,cd=br&&br.createElement("template"),t0={insert:(e,o,t)=>{o.insertBefore(e,t||null)},remove:e=>{const o=e.parentNode;o&&o.removeChild(e)},createElement:(e,o,t,r)=>{const n=o?br.createElementNS(o0,e):br.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&n.setAttribute("multiple",r.multiple),n},createText:e=>br.createTextNode(e),createComment:e=>br.createComment(e),setText:(e,o)=>{e.nodeValue=o},setElementText:(e,o)=>{e.textContent=o},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>br.querySelector(e),setScopeId(e,o){e.setAttribute(o,"")},insertStaticContent(e,o,t,r,n,i){const a=t?t.previousSibling:o.lastChild;if(n&&(n===i||n.nextSibling))for(;o.insertBefore(n.cloneNode(!0),t),!(n===i||!(n=n.nextSibling)););else{cd.innerHTML=r?`<svg>${e}</svg>`:e;const l=cd.content;if(r){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}o.insertBefore(l,t)}return[a?a.nextSibling:o.firstChild,t?t.previousSibling:o.lastChild]}};function r0(e,o,t){const r=e._vtc;r&&(o=(o?[o,...r]:[...r]).join(" ")),o==null?e.removeAttribute("class"):t?e.setAttribute("class",o):e.className=o}function n0(e,o,t){const r=e.style,n=Ke(t);if(t&&!n){if(o&&!Ke(o))for(const i in o)t[i]==null&&Wl(r,i,"");for(const i in t)Wl(r,i,t[i])}else{const i=r.display;n?o!==t&&(r.cssText=t):o&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const i0=/[^\\];\s*$/,dd=/\s*!important$/;function Wl(e,o,t){if(de(t))t.forEach(r=>Wl(e,o,r));else if(t==null&&(t=""),i0.test(t)&&R(`Unexpected semicolon at the end of '${o}' style value: '${t}'`),o.startsWith("--"))e.setProperty(o,t);else{const r=a0(e,o);dd.test(t)?e.setProperty(Tt(r),t.replace(dd,""),"important"):e[r]=t}}const fd=["Webkit","Moz","ms"],rl={};function a0(e,o){const t=rl[o];if(t)return t;let r=ut(o);if(r!=="filter"&&r in e)return rl[o]=r;r=Tr(r);for(let n=0;n<fd.length;n++){const i=fd[n]+r;if(i in e)return rl[o]=i}return o}const ud="http://www.w3.org/1999/xlink";function l0(e,o,t,r,n){if(r&&o.startsWith("xlink:"))t==null?e.removeAttributeNS(ud,o.slice(6,o.length)):e.setAttributeNS(ud,o,t);else{const i=zg(o);t==null||i&&!$u(t)?e.removeAttribute(o):e.setAttribute(o,i?"":t)}}function s0(e,o,t,r,n,i,a){if(o==="innerHTML"||o==="textContent"){r&&a(r,n,i),e[o]=t??"";return}if(o==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const s=t??"";(e.value!==s||e.tagName==="OPTION")&&(e.value=s),t==null&&e.removeAttribute(o);return}let l=!1;if(t===""||t==null){const s=typeof e[o];s==="boolean"?t=$u(t):t==null&&s==="string"?(t="",l=!0):s==="number"&&(t=0,l=!0)}try{e[o]=t}catch(s){l||R(`Failed setting prop "${o}" on <${e.tagName.toLowerCase()}>: value ${t} is invalid.`,s)}l&&e.removeAttribute(o)}function c0(e,o,t,r){e.addEventListener(o,t,r)}function d0(e,o,t,r){e.removeEventListener(o,t,r)}function f0(e,o,t,r,n=null){const i=e._vei||(e._vei={}),a=i[o];if(r&&a)a.value=r;else{const[l,s]=u0(o);if(r){const c=i[o]=b0(r,n);c0(e,l,c,s)}else a&&(d0(e,l,a,s),i[o]=void 0)}}const pd=/(?:Once|Passive|Capture)$/;function u0(e){let o;if(pd.test(e)){o={};let r;for(;r=e.match(pd);)e=e.slice(0,e.length-r[0].length),o[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),o]}let nl=0;const p0=Promise.resolve(),h0=()=>nl||(p0.then(()=>nl=0),nl=Date.now());function b0(e,o){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Bo(g0(r,t.value),o,5,[r])};return t.value=e,t.attached=h0(),t}function g0(e,o){if(de(o)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},o.map(r=>n=>!n._stopped&&r&&r(n))}else return o}const hd=/^on[a-z]/,m0=(e,o,t,r,n=!1,i,a,l,s)=>{o==="class"?r0(e,r,n):o==="style"?n0(e,t,r):hi(o)?ea(o)||f0(e,o,t,r,a):(o[0]==="."?(o=o.slice(1),!0):o[0]==="^"?(o=o.slice(1),!1):v0(e,o,r,n))?s0(e,o,r,i,a,l,s):(o==="true-value"?e._trueValue=r:o==="false-value"&&(e._falseValue=r),l0(e,o,r,n))};function v0(e,o,t,r){return r?!!(o==="innerHTML"||o==="textContent"||o in e&&hd.test(o)&&pe(t)):o==="spellcheck"||o==="draggable"||o==="translate"||o==="form"||o==="list"&&e.tagName==="INPUT"||o==="type"&&e.tagName==="TEXTAREA"||hd.test(o)&&Ke(t)?!1:o in e}const It="transition",mn="animation",Vp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},k0=De({},Ym.props,Vp),sr=(e,o=[])=>{de(e)?e.forEach(t=>t(...o)):e&&e(...o)},bd=e=>e?de(e)?e.some(o=>o.length>1):e.length>1:!1;function w0(e){const o={};for(const K in e)K in Vp||(o[K]=e[K]);if(e.css===!1)return o;const{name:t="v",type:r,duration:n,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:s=i,appearActiveClass:c=a,appearToClass:d=l,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:b=`${t}-leave-to`}=e,h=y0(n),g=h&&h[0],m=h&&h[1],{onBeforeEnter:k,onEnter:w,onEnterCancelled:y,onLeave:x,onLeaveCancelled:E,onBeforeAppear:P=k,onAppear:$=w,onAppearCancelled:S=y}=o,T=(K,ge,fe)=>{Rt(K,ge?d:l),Rt(K,ge?c:a),fe&&fe()},U=(K,ge)=>{K._isLeaving=!1,Rt(K,f),Rt(K,b),Rt(K,p),ge&&ge()},J=K=>(ge,fe)=>{const ke=K?$:w,Te=()=>T(ge,K,fe);sr(ke,[ge,Te]),gd(()=>{Rt(ge,K?s:i),_t(ge,K?d:l),bd(ke)||md(ge,r,g,Te)})};return De(o,{onBeforeEnter(K){sr(k,[K]),_t(K,i),_t(K,a)},onBeforeAppear(K){sr(P,[K]),_t(K,s),_t(K,c)},onEnter:J(!1),onAppear:J(!0),onLeave(K,ge){K._isLeaving=!0;const fe=()=>U(K,ge);_t(K,f),Gp(),_t(K,p),gd(()=>{K._isLeaving&&(Rt(K,f),_t(K,b),bd(x)||md(K,r,m,fe))}),sr(x,[K,fe])},onEnterCancelled(K){T(K,!1),sr(y,[K])},onAppearCancelled(K){T(K,!0),sr(S,[K])},onLeaveCancelled(K){U(K),sr(E,[K])}})}function y0(e){if(e==null)return null;if(Ne(e))return[il(e.enter),il(e.leave)];{const o=il(e);return[o,o]}}function il(e){const o=$g(e);return Om(o,"<transition> explicit duration"),o}function _t(e,o){o.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(o)}function Rt(e,o){o.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:t}=e;t&&(t.delete(o),t.size||(e._vtc=void 0))}function gd(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let x0=0;function md(e,o,t,r){const n=e._endId=++x0,i=()=>{n===e._endId&&r()};if(t)return setTimeout(i,t);const{type:a,timeout:l,propCount:s}=Wp(e,o);if(!a)return r();const c=a+"end";let d=0;const f=()=>{e.removeEventListener(c,p),i()},p=b=>{b.target===e&&++d>=s&&f()};setTimeout(()=>{d<s&&f()},l+1),e.addEventListener(c,p)}function Wp(e,o){const t=window.getComputedStyle(e),r=h=>(t[h]||"").split(", "),n=r(`${It}Delay`),i=r(`${It}Duration`),a=vd(n,i),l=r(`${mn}Delay`),s=r(`${mn}Duration`),c=vd(l,s);let d=null,f=0,p=0;o===It?a>0&&(d=It,f=a,p=i.length):o===mn?c>0&&(d=mn,f=c,p=s.length):(f=Math.max(a,c),d=f>0?a>c?It:mn:null,p=d?d===It?i.length:s.length:0);const b=d===It&&/\b(transform|all)(,|$)/.test(r(`${It}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:b}}function vd(e,o){for(;e.length<o.length;)e=e.concat(e);return Math.max(...o.map((t,r)=>kd(t)+kd(e[r])))}function kd(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Gp(){return document.body.offsetHeight}const Xp=new WeakMap,Yp=new WeakMap,Zp={name:"TransitionGroup",props:De({},k0,{tag:String,moveClass:String}),setup(e,{slots:o}){const t=Fo(),r=wp();let n,i;return Ra(()=>{if(!n.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!L0(n[0].el,t.vnode.el,a))return;n.forEach(S0),n.forEach(z0);const l=n.filter(E0);Gp(),l.forEach(s=>{const c=s.el,d=c.style;_t(c,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=c._moveCb=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Rt(c,a))};c.addEventListener("transitionend",f)})}),()=>{const a=be(e),l=w0(a);let s=a.tag||Fe;n=i,i=o.default?Qs(o.default()):[];for(let c=0;c<i.length;c++){const d=i[c];d.key!=null?on(d,Zn(d,l,r,t)):R("<TransitionGroup> children must be keyed.")}if(n)for(let c=0;c<n.length;c++){const d=n[c];on(d,Zn(d,l,r,t)),Xp.set(d,d.el.getBoundingClientRect())}return X(s,null,i)}}},_0=e=>delete e.mode;Zp.props;const O0=Zp;function S0(e){const o=e.el;o._moveCb&&o._moveCb(),o._enterCb&&o._enterCb()}function z0(e){Yp.set(e,e.el.getBoundingClientRect())}function E0(e){const o=Xp.get(e),t=Yp.get(e),r=o.left-t.left,n=o.top-t.top;if(r||n){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${n}px)`,i.transitionDuration="0s",e}}function L0(e,o,t){const r=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const n=o.nodeType===1?o:o.parentNode;n.appendChild(r);const{hasTransform:i}=Wp(r);return n.removeChild(r),i}const T0=["ctrl","shift","alt","meta"],A0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,o)=>T0.some(t=>e[`${t}Key`]&&!o.includes(t))},C0=(e,o)=>(t,...r)=>{for(let n=0;n<o.length;n++){const i=A0[o[n]];if(i&&i(t,o))return}return e(t,...r)},P0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fi=(e,o)=>t=>{if(!("key"in t))return;const r=Tt(t.key);if(o.some(n=>n===r||P0[n]===r))return e(t)},Jp={beforeMount(e,{value:o},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&o?t.beforeEnter(e):vn(e,o)},mounted(e,{value:o},{transition:t}){t&&o&&t.enter(e)},updated(e,{value:o,oldValue:t},{transition:r}){!o!=!t&&(r?o?(r.beforeEnter(e),vn(e,!0),r.enter(e)):r.leave(e,()=>{vn(e,!1)}):vn(e,o))},beforeUnmount(e,{value:o}){vn(e,o)}};function vn(e,o){e.style.display=o?e._vod:"none"}const F0=De({patchProp:m0},t0);let wd;function $0(){return wd||(wd=Av(F0))}const I0=(...e)=>{const o=$0().createApp(...e);N0(o),R0(o);const{mount:t}=o;return o.mount=r=>{const n=j0(r);if(!n)return;const i=o._component;!pe(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.innerHTML="";const a=t(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),a},o};function N0(e){Object.defineProperty(e.config,"isNativeTag",{value:o=>Fu(o)||Og(o),writable:!1})}function R0(e){{const o=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return o},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const t=e.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return R(r),t},set(){R(r)}})}}function j0(e){if(Ke(e)){const o=document.querySelector(e);return o||R(`Failed to mount app: mount target selector "${e}" returned null.`),o}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function M0(){e0()}M0();function Gl(e,o={},t){for(const r in e){const n=e[r],i=t?`${t}:${r}`:r;typeof n=="object"&&n!==null?Gl(n,o,i):typeof n=="function"&&(o[i]=n)}return o}const K0={run:e=>e()},B0=()=>K0,Qp=typeof console.createTask<"u"?console.createTask:B0;function D0(e,o){const t=o.shift(),r=Qp(t);return e.reduce((n,i)=>n.then(()=>r.run(()=>i(...o))),Promise.resolve())}function U0(e,o){const t=o.shift(),r=Qp(t);return Promise.all(e.map(n=>r.run(()=>n(...o))))}function al(e,o){for(const t of[...e])t(o)}class H0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(o,t,r={}){if(!o||typeof t!="function")return()=>{};const n=o;let i;for(;this._deprecatedHooks[o];)i=this._deprecatedHooks[o],o=i.to;if(i&&!r.allowDeprecated){let a=i.message;a||(a=`${n} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+o.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[o]=this._hooks[o]||[],this._hooks[o].push(t),()=>{t&&(this.removeHook(o,t),t=void 0)}}hookOnce(o,t){let r,n=(...i)=>(typeof r=="function"&&r(),r=void 0,n=void 0,t(...i));return r=this.hook(o,n),r}removeHook(o,t){if(this._hooks[o]){const r=this._hooks[o].indexOf(t);r!==-1&&this._hooks[o].splice(r,1),this._hooks[o].length===0&&delete this._hooks[o]}}deprecateHook(o,t){this._deprecatedHooks[o]=typeof t=="string"?{to:t}:t;const r=this._hooks[o]||[];delete this._hooks[o];for(const n of r)this.hook(o,n)}deprecateHooks(o){Object.assign(this._deprecatedHooks,o);for(const t in o)this.deprecateHook(t,o[t])}addHooks(o){const t=Gl(o),r=Object.keys(t).map(n=>this.hook(n,t[n]));return()=>{for(const n of r.splice(0,r.length))n()}}removeHooks(o){const t=Gl(o);for(const r in t)this.removeHook(r,t[r])}removeAllHooks(){for(const o in this._hooks)delete this._hooks[o]}callHook(o,...t){return t.unshift(o),this.callHookWith(D0,o,...t)}callHookParallel(o,...t){return t.unshift(o),this.callHookWith(U0,o,...t)}callHookWith(o,t,...r){const n=this._before||this._after?{name:t,args:r,context:{}}:void 0;this._before&&al(this._before,n);const i=o(t in this._hooks?[...this._hooks[t]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&n&&al(this._after,n)}):(this._after&&n&&al(this._after,n),i)}beforeEach(o){return this._before=this._before||[],this._before.push(o),()=>{if(this._before!==void 0){const t=this._before.indexOf(o);t!==-1&&this._before.splice(t,1)}}}afterEach(o){return this._after=this._after||[],this._after.push(o),()=>{if(this._after!==void 0){const t=this._after.indexOf(o);t!==-1&&this._after.splice(t,1)}}}}function q0(){return new H0}function V0(e){return Array.isArray(e)?e:[e]}const eh=["title","script","style","noscript"],W0=["base","meta","link","style","script","noscript"],G0=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],X0=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Y0=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function oh(e){let o=9;for(let t=0;t<e.length;)o=Math.imul(o^e.charCodeAt(t++),9**9);return((o^o>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Xl(e){return oh(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([o,t])=>`${o}:${String(t)}`).join(",")}`)}function Z0(e){let o=9;for(const t of e)for(let r=0;r<t.length;)o=Math.imul(o^t.charCodeAt(r++),9**9);return((o^o>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function th(e,o){const{props:t,tag:r}=e;if(X0.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const n=["id"];r==="meta"&&n.push("name","property","http-equiv");for(const i of n)if(typeof t[i]<"u"){const a=String(t[i]);return o&&!o(a)?!1:`${r}:${i}:${a}`}return!1}const yd=(e,o)=>e==null?o||null:typeof e=="function"?e(o):e,$i=(e,o=!1,t)=>{const{tag:r,$el:n}=e;n&&(Object.entries(r.props).forEach(([i,a])=>{a=String(a);const l=`attr:${i}`;if(i==="class"){if(!a)return;for(const s of a.split(" ")){const c=`${l}:${s}`;t&&t(e,c,()=>n.classList.remove(s)),n.classList.contains(s)||n.classList.add(s)}return}t&&!i.startsWith("data-h-")&&t(e,l,()=>n.removeAttribute(i)),(o||n.getAttribute(i)!==a)&&n.setAttribute(i,a)}),eh.includes(r.tag)&&(r.textContent&&r.textContent!==n.textContent?n.textContent=r.textContent:r.innerHTML&&r.innerHTML!==n.innerHTML&&(n.innerHTML=r.innerHTML)))};let kn=!1;async function rh(e,o={}){var p,b;const t={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const r=o.document||e.resolvedOptions.document||window.document,n=(await e.resolveTags()).map(l);if(e.resolvedOptions.experimentalHashHydration&&(kn=kn||e._hash||!1,kn)){const h=Z0(n.map(g=>g.tag._h));if(kn===h)return;kn=h}const i=e._popSideEffectQueue();e.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([g,m])=>{i[g]=m})});const a=(h,g,m)=>{g=`${h.renderId}:${g}`,h.entry&&(h.entry._sde[g]=m),delete i[g]};function l(h){const g=e.headEntries().find(k=>k._i===h._e),m={renderId:!h.key&&h._d?h._d:Xl(h),$el:null,shouldRender:!0,tag:h,entry:g,markSideEffect:(k,w)=>a(m,k,w)};return m}const s=[],c={body:[],head:[]},d=h=>{e._elMap[h.renderId]=h.$el,s.push(h),a(h,"el",()=>{var g;(g=h.$el)==null||g.remove(),delete e._elMap[h.renderId]})};for(const h of n){if(await e.hooks.callHook("dom:beforeRenderTag",h),!h.shouldRender)continue;const{tag:g}=h;if(g.tag==="title"){r.title=g.textContent||"",s.push(h);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){h.$el=r[g.tag==="htmlAttrs"?"documentElement":"body"],$i(h,!1,a),s.push(h);continue}if(h.$el=e._elMap[h.renderId],!h.$el&&g.key&&(h.$el=r.querySelector(`${(p=g.tagPosition)!=null&&p.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),h.$el){h.tag._d&&$i(h),d(h);continue}c[(b=g.tagPosition)!=null&&b.startsWith("body")?"body":"head"].push(h)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(c).forEach(([h,g])=>{var k;if(!g.length)return;const m=(k=r==null?void 0:r[h])==null?void 0:k.children;if(m){for(const w of[...m].reverse()){const y=w.tagName.toLowerCase();if(!W0.includes(y))continue;const x=w.getAttributeNames().reduce((S,T)=>({...S,[T]:w.getAttribute(T)}),{}),E={tag:y,props:x};w.innerHTML&&(E.innerHTML=w.innerHTML);const P=Xl(E);let $=g.findIndex(S=>(S==null?void 0:S.renderId)===P);if($===-1){const S=th(E);$=g.findIndex(T=>(T==null?void 0:T.tag._d)&&T.tag._d===S)}if($!==-1){const S=g[$];S.$el=w,$i(S),d(S),delete g[$]}}g.forEach(w=>{const y=w.tag.tagPosition||"head";f[y]=f[y]||r.createDocumentFragment(),w.$el||(w.$el=r.createElement(w.tag.tag),$i(w,!0)),f[y].appendChild(w.$el),d(w)})}}),f.head&&r.head.appendChild(f.head),f.bodyOpen&&r.body.insertBefore(f.bodyOpen,r.body.firstChild),f.bodyClose&&r.body.appendChild(f.bodyClose);for(const h of s)await e.hooks.callHook("dom:renderTag",h);Object.values(i).forEach(h=>h())}let ll=null;async function nh(e,o={}){function t(){return ll=null,rh(e,o)}const r=o.delayFn||(n=>setTimeout(n,10));return ll=ll||new Promise(n=>r(()=>n(t())))}const J0=e=>({hooks:{"entries:updated":function(o){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let t=e==null?void 0:e.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),nh(o,{document:(e==null?void 0:e.document)||window.document,delayFn:t})}}});function Q0(e){var o;return((o=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:o.getAttribute("content"))||!1}const xd={critical:2,high:9,low:12,base:-1,title:1,meta:10};function _d(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const o=e.tagPriority||e.tag;return o in xd?xd[o]:10}const ek=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function ok(){return{hooks:{"tags:resolve":e=>{const o=t=>{var r;return(r=e.tags.find(n=>n._d===t))==null?void 0:r._p};for(const{prefix:t,offset:r}of ek)for(const n of e.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(t))){const i=o(n.tagPriority.replace(t,""));typeof i<"u"&&(n._p=i+r)}e.tags.sort((t,r)=>t._p-r._p).sort((t,r)=>_d(t)-_d(r))}}}}const tk=()=>({hooks:{"tags:resolve":e=>{const{tags:o}=e;let t=o.findIndex(n=>n.tag==="titleTemplate");const r=o.findIndex(n=>n.tag==="title");if(r!==-1&&t!==-1){const n=yd(o[t].textContent,o[r].textContent);n!==null?o[r].textContent=n||o[r].textContent:delete o[r]}else if(t!==-1){const n=yd(o[t].textContent);n!==null&&(o[t].textContent=n,o[t].tag="title",t=-1)}t!==-1&&delete o[t],e.tags=o.filter(Boolean)}}}),rk=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),nk=["link","style","script","noscript"],ik=()=>({hooks:{"tag:normalise":({tag:e,resolvedOptions:o})=>{o.experimentalHashHydration===!0&&(e._h=Xl(e)),e.key&&nk.includes(e.tag)&&(e._h=oh(e.key),e.props[`data-h-${e._h}`]="")}}}),Od=["script","link","bodyAttrs"],ak=()=>{const e=(o,t)=>{const r={},n={};Object.entries(t.props).forEach(([a,l])=>{a.startsWith("on")&&typeof l=="function"?n[a]=l:r[a]=l});let i;return o==="dom"&&t.tag==="script"&&typeof r.src=="string"&&typeof n.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:n,delayedSrc:i}};return{hooks:{"ssr:render":function(o){o.tags=o.tags.map(t=>(!Od.includes(t.tag)||!Object.entries(t.props).find(([r,n])=>r.startsWith("on")&&typeof n=="function")||(t.props=e("ssr",t).props),t))},"dom:beforeRenderTag":function(o){if(!Od.includes(o.tag.tag)||!Object.entries(o.tag.props).find(([i,a])=>i.startsWith("on")&&typeof a=="function"))return;const{props:t,eventHandlers:r,delayedSrc:n}=e("dom",o.tag);Object.keys(r).length&&(o.tag.props=t,o.tag._eventHandlers=r,o.tag._delayedSrc=n)},"dom:renderTag":function(o){const t=o.$el;if(!o.tag._eventHandlers||!t)return;const r=o.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(o.tag._eventHandlers).forEach(([n,i])=>{const a=`${o.tag._d||o.tag._p}:${n}`,l=n.slice(2).toLowerCase(),s=`data-h-${l}`;if(o.markSideEffect(a,()=>{}),t.hasAttribute(s))return;const c=i;t.setAttribute(s,""),r.addEventListener(l,c),o.entry&&(o.entry._sde[a]=()=>{r.removeEventListener(l,c),t.removeAttribute(s)})}),o.tag._delayedSrc&&t.setAttribute("src",o.tag._delayedSrc)}}}},lk=["templateParams","htmlAttrs","bodyAttrs"],sk=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(t=>{e.props[t]&&(e.key=e.props[t],delete e.props[t])});const o=e.key?`${e.tag}:${e.key}`:th(e);o&&(e._d=o)},"tags:resolve":function(e){const o={};e.tags.forEach(r=>{const n=r._d||r._p,i=o[n];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&lk.includes(r.tag)&&(a="merge"),a==="merge"){const s=i.props;["class","style"].forEach(c=>{r.props[c]&&s[c]&&(c==="style"&&!s[c].endsWith(";")&&(s[c]+=";"),r.props[c]=`${s[c]} ${r.props[c]}`)}),o[n].props={...s,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}const l=Object.keys(r.props).length;if((l===0||l===1&&typeof r.props["data-h-key"]<"u")&&!r.innerHTML&&!r.textContent){delete o[n];return}}o[n]=r});const t=[];Object.values(o).forEach(r=>{const n=r._duped;delete r._duped,t.push(r),n&&t.push(...n)}),e.tags=t}}});function Ii(e,o){function t(i){if(["s","pageTitle"].includes(i))return o.pageTitle;let a;return i.includes(".")?a=i.split(".").reduce((l,s)=>l&&l[s]||void 0,o):a=o[i],typeof a<"u"?a||"":!1}let r=e;try{r=decodeURI(e)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const a=t(i.slice(1));typeof a=="string"&&(e=e.replaceAll(new RegExp(`\\${i}(\\W|$)`,"g"),`${a}$1`).trim())}),o.separator&&(e.endsWith(o.separator)&&(e=e.slice(0,-o.separator.length).trim()),e.startsWith(o.separator)&&(e=e.slice(o.separator.length).trim()),e=e.replace(new RegExp(`\\${o.separator}\\s*\\${o.separator}`,"g"),o.separator)),e}function ck(){return{hooks:{"tags:resolve":e=>{var i;const{tags:o}=e,t=(i=o.find(a=>a.tag==="title"))==null?void 0:i.textContent,r=o.findIndex(a=>a.tag==="templateParams"),n=r!==-1?o[r].props:{};n.pageTitle=n.pageTitle||t||"";for(const a of o)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=Ii(a.textContent,n);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=Ii(a.props.content,n);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=Ii(a.props.href,n);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(l,s)=>typeof s=="string"?Ii(s,n):s)}catch{}e.tags=o.filter(a=>a.tag!=="templateParams")}}}}const dk=typeof window<"u";let ih;const fk=e=>ih=e,uk=()=>ih;async function pk(e,o){const t={tag:e,props:{}};return e==="templateParams"?(t.props=o,t):["title","titleTemplate"].includes(e)?(t.textContent=o instanceof Promise?await o:o,t):typeof o=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(o)||o.startsWith("/"))?t.props.src=o:t.innerHTML=o,t):!1:(t.props=await bk(e,{...o}),t.props.children&&(t.props.innerHTML=t.props.children),delete t.props.children,Object.keys(t.props).filter(r=>Y0.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||eh.includes(t.tag))&&(t[r]=t.props[r]),delete t.props[r]}),["innerHTML","textContent"].forEach(r=>{if(t.tag==="script"&&typeof t[r]=="string"&&["application/ld+json","application/json"].includes(t.props.type))try{t[r]=JSON.parse(t[r])}catch{t[r]=""}typeof t[r]=="object"&&(t[r]=JSON.stringify(t[r]))}),t.props.class&&(t.props.class=hk(t.props.class)),t.props.content&&Array.isArray(t.props.content)?t.props.content.map(r=>({...t,props:{...t.props,content:r}})):t)}function hk(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(o=>e[o])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(o=>o.trim()).filter(Boolean).join(" ")}async function bk(e,o){for(const t of Object.keys(o)){const r=t.startsWith("data-");o[t]instanceof Promise&&(o[t]=await o[t]),String(o[t])==="true"?o[t]=r?"true":"":String(o[t])==="false"&&(r?o[t]="false":delete o[t])}return o}const gk=10;async function mk(e){const o=[];return Object.entries(e.resolvedInput).filter(([t,r])=>typeof r<"u"&&G0.includes(t)).forEach(([t,r])=>{const n=V0(r);o.push(...n.map(i=>pk(t,i)).flat())}),(await Promise.all(o)).flat().filter(Boolean).map((t,r)=>(t._e=e._i,t._p=(e._i<<gk)+r,t))}const vk=()=>[sk(),ok(),ck(),tk(),ik(),ak(),rk()],kk=(e={})=>[J0({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function wk(e={}){const o=yk({...e,plugins:[...kk(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&o.resolvedOptions.document&&(o._hash=Q0(o.resolvedOptions.document)),fk(o),o}function yk(e={}){let o=[],t={},r=0;const n=q0();e!=null&&e.hooks&&n.addHooks(e.hooks),e.plugins=[...vk(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(l=>l.hooks&&n.addHooks(l.hooks)),e.document=e.document||(dk?document:void 0);const i=()=>n.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return o},get hooks(){return n},use(l){l.hooks&&n.addHooks(l.hooks)},push(l,s){const c={_i:r++,input:l,_sde:{}};return s!=null&&s.mode&&(c._m=s==null?void 0:s.mode),s!=null&&s.transform&&(c._t=s==null?void 0:s.transform),o.push(c),i(),{dispose(){o=o.filter(d=>d._i!==c._i?!0:(t={...t,...d._sde||{}},d._sde={},i(),!1))},patch(d){o=o.map(f=>(f._i===c._i&&(c.input=f.input=d,i()),f))}}},async resolveTags(){const l={tags:[],entries:[...o]};await n.callHook("entries:resolve",l);for(const s of l.entries){const c=s._t||(d=>d);if(s.resolvedInput=c(s.resolvedInput||s.input),s.resolvedInput)for(const d of await mk(s)){const f={tag:d,entry:s,resolvedOptions:a.resolvedOptions};await n.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await n.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...t};return t={},l},_elMap:{}};return a.hooks.callHook("init",a),a}function xk(e){return typeof e=="function"?e():z(e)}function ua(e,o=""){if(e instanceof Promise)return e;const t=xk(e);return!e||!t?t:Array.isArray(t)?t.map(r=>ua(r,o)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([r,n])=>r==="titleTemplate"||r.startsWith("on")?[r,z(n)]:[r,ua(n,r)])):t}const _k=fa.startsWith("3"),Ok=typeof window<"u",ah="usehead";function nc(){return Fo()&&Z(ah)||uk()}function Sk(e){return{install(t){_k&&(t.config.globalProperties.$unhead=e,t.config.globalProperties.$head=e,t.provide(ah,e))}}.install}function zk(e={}){const o=wk({...e,domDelayFn:t=>setTimeout(()=>fo(()=>t()),10),plugins:[Ek(),...(e==null?void 0:e.plugins)||[]]});return o.install=Sk(o),o}const Ek=()=>({hooks:{"entries:resolve":function(e){for(const o of e.entries)o.resolvedInput=ua(o.input)}}});function Lk(e,o={}){const t=nc(),r=H(!1),n=H({});Fr(()=>{n.value=r.value?{}:ua(e)});const i=t.push(n.value,o);return _e(n,l=>{i.patch(l)}),Fo()&&(vi(()=>{i.dispose()}),Op(()=>{r.value=!0}),_p(()=>{r.value=!1})),i}function Tk(e,o={}){return nc().push(e,o)}function ic(e,o={}){var r;const t=nc();if(t){const n=Ok||!!((r=t.resolvedOptions)!=null&&r.document);return o.mode==="server"&&n||o.mode==="client"&&!n?void 0:n?Lk(e,o):Tk(e,o)}}const Ak=e=>ic({htmlAttrs:e});function Ck(e,o){const t=zk(o||{}),r={unhead:t,install(n){fa.startsWith("3")&&(n.config.globalProperties.$head=t,n.provide("usehead",t))},use(n){t.use(n)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(n,i){return t.push(n,i)},addEntry(n,i){return t.push(n,i)},addHeadObjs(n,i){return t.push(n,i)},addReactiveEntry(n,i){const a=ic(n,i);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(n,i){i?rh(t,{document:n}):nh(t,{delayFn:a=>setTimeout(()=>a(),50),document:n})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=r.addHeadObjs,t.updateDOM=r.updateDOM,t.hooks.hook("dom:beforeRender",n=>{for(const i of r.hooks["before:dom"])i()===!1&&(n.shouldRender=!1)}),e&&r.addHeadObjs(e),r}const Rn=Symbol("v-click-clicks"),gr=Symbol("v-click-clicks-elements"),Yl=Symbol("v-click-clicks-order-map"),jn=Symbol("v-click-clicks-disabled"),lh=Symbol("slidev-slide-scale"),ie=Symbol("slidev-slidev-context"),Pk=Symbol("slidev-route"),Fk=Symbol("slidev-slide-context"),pr="slidev-vclick-target",sl="slidev-vclick-hidden",$k="slidev-vclick-fade",cl="slidev-vclick-hidden-explicitly",wn="slidev-vclick-current",Ni="slidev-vclick-prior",Ik=["localhost","127.0.0.1"];let Nk=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((o,t)=>(t&=63,t<36?o+=t.toString(36):t<62?o+=(t-26).toString(36).toUpperCase():t>62?o+="-":o+="_",o),"");function sh(e){return e=e??[],Array.isArray(e)?e:[e]}function Zl(e,o){if(!e)return!1;const t=e.indexOf(o);return t>=0?(e.splice(t,1),!0):!1}function Rk(...e){let o,t,r;e.length===1?(o=0,r=1,[t]=e):[o,t,r=1]=e;const n=[];let i=o;for(;i<t;)n.push(i),i+=r||1;return n}function jk(e){return e!=null}function Mk(e,o){return Object.fromEntries(Object.entries(e).map(([t,r])=>o(t,r)).filter(jk))}const Pn={theme:"./theme",title:"Komponenten-Bibliothek für die Barrierefreiheit | KoliBri",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"fade"},Pe=Pn,Vt=Pe.aspectRatio??16/9,Wt=Pe.canvasWidth??980,ac=Math.ceil(Wt/Vt),lc=C(()=>Mk(Pe.themeConfig||{},(e,o)=>[`--slidev-theme-${e}`,o]));function Uo(e,o,t){Object.defineProperty(e,o,{value:t,writable:!0,enumerable:!1})}const $r=Be({page:0,clicks:0});let Kk=[],Bk=[];Uo($r,"$syncUp",!0);Uo($r,"$syncDown",!0);Uo($r,"$paused",!1);Uo($r,"$onSet",e=>Kk.push(e));Uo($r,"$onPatch",e=>Bk.push(e));Uo($r,"$patch",async()=>!1);function ch(e,o,t=!1){const r=[];let n=!1,i=!1,a,l;const s=Be(o);function c(b){r.push(b)}function d(b,h){s[b]!==h&&(clearTimeout(a),n=!0,s[b]=h,a=setTimeout(()=>n=!1,0))}function f(b){n||(clearTimeout(l),i=!0,Object.entries(b).forEach(([h,g])=>{s[h]=g}),l=setTimeout(()=>i=!1,0))}function p(b){let h;t?t&&window.addEventListener("storage",m=>{m&&m.key===b&&m.newValue&&f(JSON.parse(m.newValue))}):(h=new BroadcastChannel(b),h.addEventListener("message",m=>f(m.data)));function g(){!t&&h&&!i?h.postMessage(be(s)):t&&!i&&window.localStorage.setItem(b,JSON.stringify(s)),n||r.forEach(m=>m(s))}if(_e(s,g,{deep:!0}),t){const m=window.localStorage.getItem(b);m&&f(JSON.parse(m))}}return{init:p,onPatch:c,patch:d,state:s}}const{init:Dk,onPatch:Uk,patch:yn,state:dl}=ch($r,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ir=Be({});let Hk=[],qk=[];Uo(Ir,"$syncUp",!0);Uo(Ir,"$syncDown",!0);Uo(Ir,"$paused",!1);Uo(Ir,"$onSet",e=>Hk.push(e));Uo(Ir,"$onPatch",e=>qk.push(e));Uo(Ir,"$patch",async()=>!1);const{init:Vk,onPatch:Wk,patch:dh,state:pa}=ch(Ir,{},!1),Gk="modulepreload",Xk=function(e){return"/presentation/"+e},Sd={},Gt=function(o,t,r){if(!t||t.length===0)return o();const n=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Xk(i),i in Sd)return;Sd[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=n.length-1;d>=0;d--){const f=n[d];if(f.href===i&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Gk,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>o())};var zd;const et=typeof window<"u",Yk=e=>typeof e<"u",Zk=Object.prototype.toString,ti=e=>typeof e=="function",Jk=e=>typeof e=="number",fh=e=>typeof e=="string",Jl=e=>Zk.call(e)==="[object Object]",Ql=()=>+Date.now(),Qr=()=>{},Qk=et&&((zd=window==null?void 0:window.navigator)==null?void 0:zd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function so(e){return typeof e=="function"?e():z(e)}function ew(e,o){function t(...r){return new Promise((n,i)=>{Promise.resolve(e(()=>o.apply(this,r),{fn:o,thisArg:this,args:r})).then(n).catch(i)})}return t}const uh=e=>e();function ow(e=uh){const o=H(!0);function t(){o.value=!1}function r(){o.value=!0}const n=(...i)=>{o.value&&e(...i)};return{isActive:lt(o),pause:t,resume:r,eventFilter:n}}function tw(e){return e}function rw(e,o){var t;if(typeof e=="number")return e+o;const r=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",n=e.slice(r.length),i=parseFloat(r)+o;return Number.isNaN(i)?e:i+n}function nw(e,o){let t,r,n;const i=H(!0),a=()=>{i.value=!0,n()};_e(e,a,{flush:"sync"});const l=ti(o)?o:o.get,s=ti(o)?void 0:o.set,c=np((d,f)=>(r=d,n=f,{get(){return i.value&&(t=l(),i.value=!1),r(),t},set(p){s==null||s(p)}}));return Object.isExtensible(c)&&(c.trigger=a),c}function bt(e){return Bs()?(Du(e),!0):!1}function iw(e){if(!$e(e))return Be(e);const o=new Proxy({},{get(t,r,n){return z(Reflect.get(e.value,r,n))},set(t,r,n){return $e(e.value[r])&&!$e(n)?e.value[r].value=n:e.value[r]=n,!0},deleteProperty(t,r){return Reflect.deleteProperty(e.value,r)},has(t,r){return Reflect.has(e.value,r)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(o)}function ph(e){return typeof e=="function"?C(e):H(e)}var aw=Object.defineProperty,lw=Object.defineProperties,sw=Object.getOwnPropertyDescriptors,Ed=Object.getOwnPropertySymbols,cw=Object.prototype.hasOwnProperty,dw=Object.prototype.propertyIsEnumerable,Ld=(e,o,t)=>o in e?aw(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,fw=(e,o)=>{for(var t in o||(o={}))cw.call(o,t)&&Ld(e,t,o[t]);if(Ed)for(var t of Ed(o))dw.call(o,t)&&Ld(e,t,o[t]);return e},uw=(e,o)=>lw(e,sw(o));function pw(e){if(!$e(e))return bm(e);const o=Array.isArray(e.value)?new Array(e.value.length):{};for(const t in e.value)o[t]=np(()=>({get(){return e.value[t]},set(r){if(Array.isArray(e.value)){const n=[...e.value];n[t]=r,e.value=n}else{const n=uw(fw({},e.value),{[t]:r});Object.setPrototypeOf(n,e.value),e.value=n}}}));return o}function sc(e,o=!0){Fo()?Ft(e):o?e():fo(e)}function hw(e){Fo()&&cn(e)}function bw(e,o=1e3,t={}){const{immediate:r=!0,immediateCallback:n=!1}=t;let i=null;const a=H(!1);function l(){i&&(clearInterval(i),i=null)}function s(){a.value=!1,l()}function c(){const d=so(o);d<=0||(a.value=!0,n&&e(),l(),i=setInterval(e,d))}if(r&&et&&c(),$e(o)||ti(o)){const d=_e(o,()=>{a.value&&et&&c()});bt(d)}return bt(s),{isActive:a,pause:s,resume:c}}function gw(e,o,t={}){const{immediate:r=!0}=t,n=H(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function l(){n.value=!1,a()}function s(...c){a(),n.value=!0,i=setTimeout(()=>{n.value=!1,i=null,e(...c)},so(o))}return r&&(n.value=!0,et&&s()),bt(l),{isPending:lt(n),start:s,stop:l}}function hh(e=!1,o={}){const{truthyValue:t=!0,falsyValue:r=!1}=o,n=$e(e),i=H(e);function a(l){if(arguments.length)return i.value=l,i.value;{const s=so(t);return i.value=i.value===s?so(r):s,i.value}}return n?a:[i,a]}var Td=Object.getOwnPropertySymbols,mw=Object.prototype.hasOwnProperty,vw=Object.prototype.propertyIsEnumerable,kw=(e,o)=>{var t={};for(var r in e)mw.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Td)for(var r of Td(e))o.indexOf(r)<0&&vw.call(e,r)&&(t[r]=e[r]);return t};function ww(e,o,t={}){const r=t,{eventFilter:n=uh}=r,i=kw(r,["eventFilter"]);return _e(e,ew(n,o),i)}var yw=Object.defineProperty,xw=Object.defineProperties,_w=Object.getOwnPropertyDescriptors,ha=Object.getOwnPropertySymbols,bh=Object.prototype.hasOwnProperty,gh=Object.prototype.propertyIsEnumerable,Ad=(e,o,t)=>o in e?yw(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Ow=(e,o)=>{for(var t in o||(o={}))bh.call(o,t)&&Ad(e,t,o[t]);if(ha)for(var t of ha(o))gh.call(o,t)&&Ad(e,t,o[t]);return e},Sw=(e,o)=>xw(e,_w(o)),zw=(e,o)=>{var t={};for(var r in e)bh.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&ha)for(var r of ha(e))o.indexOf(r)<0&&gh.call(e,r)&&(t[r]=e[r]);return t};function Ew(e,o,t={}){const r=t,{eventFilter:n}=r,i=zw(r,["eventFilter"]),{eventFilter:a,pause:l,resume:s,isActive:c}=ow(n);return{stop:ww(e,o,Sw(Ow({},i),{eventFilter:a})),pause:l,resume:s,isActive:c}}function Ao(e){var o;const t=so(e);return(o=t==null?void 0:t.$el)!=null?o:t}const ro=et?window:void 0,mh=et?window.document:void 0,Lw=et?window.navigator:void 0;function Se(...e){let o,t,r,n;if(fh(e[0])||Array.isArray(e[0])?([t,r,n]=e,o=ro):[o,t,r,n]=e,!o)return Qr;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const i=[],a=()=>{i.forEach(d=>d()),i.length=0},l=(d,f,p,b)=>(d.addEventListener(f,p,b),()=>d.removeEventListener(f,p,b)),s=_e(()=>[Ao(o),so(n)],([d,f])=>{a(),d&&i.push(...t.flatMap(p=>r.map(b=>l(d,p,b,f))))},{immediate:!0,flush:"post"}),c=()=>{s(),a()};return bt(c),c}let Cd=!1;function Tw(e,o,t={}){const{window:r=ro,ignore:n=[],capture:i=!0,detectIframe:a=!1}=t;if(!r)return;Qk&&!Cd&&(Cd=!0,Array.from(r.document.body.children).forEach(p=>p.addEventListener("click",Qr)));let l=!0;const s=p=>n.some(b=>{if(typeof b=="string")return Array.from(r.document.querySelectorAll(b)).some(h=>h===p.target||p.composedPath().includes(h));{const h=Ao(b);return h&&(p.target===h||p.composedPath().includes(h))}}),d=[Se(r,"click",p=>{const b=Ao(e);if(!(!b||b===p.target||p.composedPath().includes(b))){if(p.detail===0&&(l=!s(p)),!l){l=!0;return}o(p)}},{passive:!0,capture:i}),Se(r,"pointerdown",p=>{const b=Ao(e);b&&(l=!p.composedPath().includes(b)&&!s(p))},{passive:!0}),a&&Se(r,"blur",p=>{var b;const h=Ao(e);((b=r.document.activeElement)==null?void 0:b.tagName)==="IFRAME"&&!(h!=null&&h.contains(r.document.activeElement))&&o(p)})].filter(Boolean);return()=>d.forEach(p=>p())}const Aw=e=>typeof e=="function"?e:typeof e=="string"?o=>o.key===e:Array.isArray(e)?o=>e.includes(o.key):()=>!0;function Cw(...e){let o,t,r={};e.length===3?(o=e[0],t=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(o=!0,t=e[0],r=e[1]):(o=e[0],t=e[1]):(o=!0,t=e[0]);const{target:n=ro,eventName:i="keydown",passive:a=!1}=r,l=Aw(o);return Se(n,i,c=>{l(c)&&t(c)},a)}function Pw(e={}){var o;const{window:t=ro}=e,r=(o=e.document)!=null?o:t==null?void 0:t.document,n=nw(()=>null,()=>r==null?void 0:r.activeElement);return t&&(Se(t,"blur",i=>{i.relatedTarget===null&&n.trigger()},!0),Se(t,"focus",n.trigger,!0)),n}function wi(e,o=!1){const t=H(),r=()=>t.value=!!e();return r(),sc(r,o),t}function qr(e,o={}){const{window:t=ro}=o,r=wi(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let n;const i=H(!1),a=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",l):n.removeListener(l))},l=()=>{r.value&&(a(),n=t.matchMedia(ph(e).value),i.value=n.matches,"addEventListener"in n?n.addEventListener("change",l):n.addListener(l))};return Fr(l),bt(()=>a()),i}const Fw={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var $w=Object.defineProperty,Pd=Object.getOwnPropertySymbols,Iw=Object.prototype.hasOwnProperty,Nw=Object.prototype.propertyIsEnumerable,Fd=(e,o,t)=>o in e?$w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Rw=(e,o)=>{for(var t in o||(o={}))Iw.call(o,t)&&Fd(e,t,o[t]);if(Pd)for(var t of Pd(o))Nw.call(o,t)&&Fd(e,t,o[t]);return e};function jw(e,o={}){function t(l,s){let c=e[l];return s!=null&&(c=rw(c,s)),typeof c=="number"&&(c=`${c}px`),c}const{window:r=ro}=o;function n(l){return r?r.matchMedia(l).matches:!1}const i=l=>qr(`(min-width: ${t(l)})`,o),a=Object.keys(e).reduce((l,s)=>(Object.defineProperty(l,s,{get:()=>i(s),enumerable:!0,configurable:!0}),l),{});return Rw({greater(l){return qr(`(min-width: ${t(l,.1)})`,o)},greaterOrEqual:i,smaller(l){return qr(`(max-width: ${t(l,-.1)})`,o)},smallerOrEqual(l){return qr(`(max-width: ${t(l)})`,o)},between(l,s){return qr(`(min-width: ${t(l)}) and (max-width: ${t(s,-.1)})`,o)},isGreater(l){return n(`(min-width: ${t(l,.1)})`)},isGreaterOrEqual(l){return n(`(min-width: ${t(l)})`)},isSmaller(l){return n(`(max-width: ${t(l,-.1)})`)},isSmallerOrEqual(l){return n(`(max-width: ${t(l)})`)},isInBetween(l,s){return n(`(min-width: ${t(l)}) and (max-width: ${t(s,-.1)})`)}},a)}function Mw(e={}){const{navigator:o=Lw,read:t=!1,source:r,copiedDuring:n=1500,legacy:i=!1}=e,a=["copy","cut"],l=wi(()=>o&&"clipboard"in o),s=C(()=>l.value||i),c=H(""),d=H(!1),f=gw(()=>d.value=!1,n);function p(){l.value?o.clipboard.readText().then(m=>{c.value=m}):c.value=g()}if(s.value&&t)for(const m of a)Se(m,p);async function b(m=so(r)){s.value&&m!=null&&(l.value?await o.clipboard.writeText(m):h(m),c.value=m,d.value=!0,f.start())}function h(m){const k=document.createElement("textarea");k.value=m??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function g(){var m,k,w;return(w=(k=(m=document==null?void 0:document.getSelection)==null?void 0:m.call(document))==null?void 0:k.toString())!=null?w:""}return{isSupported:s,text:c,copied:d,copy:b}}function Kw(e){return JSON.parse(JSON.stringify(e))}const es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},os="__vueuse_ssr_handlers__";es[os]=es[os]||{};const Bw=es[os];function Dw(e,o){return Bw[e]||o}function Uw(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Hw=Object.defineProperty,$d=Object.getOwnPropertySymbols,qw=Object.prototype.hasOwnProperty,Vw=Object.prototype.propertyIsEnumerable,Id=(e,o,t)=>o in e?Hw(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Nd=(e,o)=>{for(var t in o||(o={}))qw.call(o,t)&&Id(e,t,o[t]);if($d)for(var t of $d(o))Vw.call(o,t)&&Id(e,t,o[t]);return e};const Ww={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Rd="vueuse-storage";function Gw(e,o,t,r={}){var n;const{flush:i="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:d,window:f=ro,eventFilter:p,onError:b=S=>{console.error(S)}}=r,h=(d?pt:H)(o);if(!t)try{t=Dw("getDefaultStorage",()=>{var S;return(S=ro)==null?void 0:S.localStorage})()}catch(S){b(S)}if(!t)return h;const g=so(o),m=Uw(g),k=(n=r.serializer)!=null?n:Ww[m],{pause:w,resume:y}=Ew(h,()=>x(h.value),{flush:i,deep:a,eventFilter:p});return f&&l&&(Se(f,"storage",$),Se(f,Rd,P)),$(),h;function x(S){try{if(S==null)t.removeItem(e);else{const T=k.write(S),U=t.getItem(e);U!==T&&(t.setItem(e,T),f&&f.dispatchEvent(new CustomEvent(Rd,{detail:{key:e,oldValue:U,newValue:T,storageArea:t}})))}}catch(T){b(T)}}function E(S){const T=S?S.newValue:t.getItem(e);if(T==null)return s&&g!==null&&t.setItem(e,k.write(g)),g;if(!S&&c){const U=k.read(T);return ti(c)?c(U,g):m==="object"&&!Array.isArray(U)?Nd(Nd({},g),U):U}else return typeof T!="string"?T:k.read(T)}function P(S){$(S.detail)}function $(S){if(!(S&&S.storageArea!==t)){if(S&&S.key==null){h.value=g;return}if(!(S&&S.key!==e)){w();try{h.value=E(S)}catch(T){b(T)}finally{S?fo(y):y()}}}}}function Xw(e){return qr("(prefers-color-scheme: dark)",e)}var Yw=Object.defineProperty,Zw=Object.defineProperties,Jw=Object.getOwnPropertyDescriptors,jd=Object.getOwnPropertySymbols,Qw=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,Md=(e,o,t)=>o in e?Yw(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,oy=(e,o)=>{for(var t in o||(o={}))Qw.call(o,t)&&Md(e,t,o[t]);if(jd)for(var t of jd(o))ey.call(o,t)&&Md(e,t,o[t]);return e},ty=(e,o)=>Zw(e,Jw(o));function gT(e,o={}){var t,r,n;const i=(t=o.draggingElement)!=null?t:ro,a=(r=o.handle)!=null?r:e,l=H((n=so(o.initialValue))!=null?n:{x:0,y:0}),s=H(),c=h=>o.pointerTypes?o.pointerTypes.includes(h.pointerType):!0,d=h=>{so(o.preventDefault)&&h.preventDefault(),so(o.stopPropagation)&&h.stopPropagation()},f=h=>{var g;if(!c(h)||so(o.exact)&&h.target!==so(e))return;const m=so(e).getBoundingClientRect(),k={x:h.clientX-m.left,y:h.clientY-m.top};((g=o.onStart)==null?void 0:g.call(o,k,h))!==!1&&(s.value=k,d(h))},p=h=>{var g;c(h)&&s.value&&(l.value={x:h.clientX-s.value.x,y:h.clientY-s.value.y},(g=o.onMove)==null||g.call(o,l.value,h),d(h))},b=h=>{var g;c(h)&&s.value&&(s.value=void 0,(g=o.onEnd)==null||g.call(o,l.value,h),d(h))};return et&&(Se(a,"pointerdown",f,!0),Se(i,"pointermove",p,!0),Se(i,"pointerup",b,!0)),ty(oy({},pw(l)),{position:l,isDragging:C(()=>!!s.value),style:C(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var Kd=Object.getOwnPropertySymbols,ry=Object.prototype.hasOwnProperty,ny=Object.prototype.propertyIsEnumerable,iy=(e,o)=>{var t={};for(var r in e)ry.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Kd)for(var r of Kd(e))o.indexOf(r)<0&&ny.call(e,r)&&(t[r]=e[r]);return t};function ay(e,o,t={}){const r=t,{window:n=ro}=r,i=iy(r,["window"]);let a;const l=wi(()=>n&&"ResizeObserver"in n),s=()=>{a&&(a.disconnect(),a=void 0)},c=_e(()=>Ao(e),f=>{s(),l.value&&n&&f&&(a=new ResizeObserver(o),a.observe(f,i))},{immediate:!0,flush:"post"}),d=()=>{s(),c()};return bt(d),{isSupported:l,stop:d}}function ly(e,o={}){const{immediate:t=!0,window:r=ro}=o,n=H(!1);let i=0,a=null;function l(d){if(!n.value||!r)return;const f=d-i;e({delta:f,timestamp:d}),i=d,a=r.requestAnimationFrame(l)}function s(){!n.value&&r&&(n.value=!0,a=r.requestAnimationFrame(l))}function c(){n.value=!1,a!=null&&r&&(r.cancelAnimationFrame(a),a=null)}return t&&s(),bt(c),{isActive:lt(n),pause:c,resume:s}}function sy(e,o={width:0,height:0},t={}){const{window:r=ro,box:n="content-box"}=t,i=C(()=>{var s,c;return(c=(s=Ao(e))==null?void 0:s.namespaceURI)==null?void 0:c.includes("svg")}),a=H(o.width),l=H(o.height);return ay(e,([s])=>{const c=n==="border-box"?s.borderBoxSize:n==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(r&&i.value){const d=Ao(e);if(d){const f=r.getComputedStyle(d);a.value=parseFloat(f.width),l.value=parseFloat(f.height)}}else if(c){const d=Array.isArray(c)?c:[c];a.value=d.reduce((f,{inlineSize:p})=>f+p,0),l.value=d.reduce((f,{blockSize:p})=>f+p,0)}else a.value=s.contentRect.width,l.value=s.contentRect.height},t),_e(()=>Ao(e),s=>{a.value=s?o.width:0,l.value=s?o.height:0}),{width:a,height:l}}const Bd=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function cy(e,o={}){const{document:t=mh,autoExit:r=!1}=o,n=e||(t==null?void 0:t.querySelector("html")),i=H(!1);let a=Bd[0];const l=wi(()=>{if(t){for(const g of Bd)if(g[1]in t)return a=g,!0}else return!1;return!1}),[s,c,d,,f]=a;async function p(){l.value&&(t!=null&&t[d]&&await t[c](),i.value=!1)}async function b(){if(!l.value)return;await p();const g=Ao(n);g&&(await g[s](),i.value=!0)}async function h(){i.value?await p():await b()}return t&&Se(t,f,()=>{i.value=!!(t!=null&&t[d])},!1),r&&bt(p),{isSupported:l,isFullscreen:i,enter:b,exit:p,toggle:h}}function dy(e,o,t={}){const{root:r,rootMargin:n="0px",threshold:i=.1,window:a=ro}=t,l=wi(()=>a&&"IntersectionObserver"in a);let s=Qr;const c=l.value?_e(()=>({el:Ao(e),root:Ao(r)}),({el:f,root:p})=>{if(s(),!f)return;const b=new IntersectionObserver(o,{root:p,rootMargin:n,threshold:i});b.observe(f),s=()=>{b.disconnect(),s=Qr}},{immediate:!0,flush:"post"}):Qr,d=()=>{s(),c()};return bt(d),{isSupported:l,stop:d}}function ot(e,o,t={}){const{window:r=ro}=t;return Gw(e,o,r==null?void 0:r.localStorage,t)}const fy={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function uy(e={}){const{reactive:o=!1,target:t=ro,aliasMap:r=fy,passive:n=!0,onEventFired:i=Qr}=e,a=Be(new Set),l={toJSON(){return{}},current:a},s=o?Be(l):l,c=new Set,d=new Set;function f(g,m){g in s&&(o?s[g]=m:s[g].value=m)}function p(){a.clear();for(const g of d)f(g,!1)}function b(g,m){var k,w;const y=(k=g.key)==null?void 0:k.toLowerCase(),E=[(w=g.code)==null?void 0:w.toLowerCase(),y].filter(Boolean);y&&(m?a.add(y):a.delete(y));for(const P of E)d.add(P),f(P,m);y==="meta"&&!m?(c.forEach(P=>{a.delete(P),f(P,!1)}),c.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&m&&[...a,...E].forEach(P=>c.add(P))}Se(t,"keydown",g=>(b(g,!0),i(g)),{passive:n}),Se(t,"keyup",g=>(b(g,!1),i(g)),{passive:n}),Se("blur",p,{passive:!0}),Se("focus",p,{passive:!0});const h=new Proxy(s,{get(g,m,k){if(typeof m!="string")return Reflect.get(g,m,k);if(m=m.toLowerCase(),m in r&&(m=r[m]),!(m in s))if(/[+_-]/.test(m)){const y=m.split(/[+_-]/g).map(x=>x.trim());s[m]=C(()=>y.every(x=>z(h[x])))}else s[m]=H(!1);const w=Reflect.get(g,m,k);return o?z(w):w}});return h}function mT(e={}){const{type:o="page",touch:t=!0,resetOnTouchEnds:r=!1,initialValue:n={x:0,y:0},window:i=ro,eventFilter:a}=e,l=H(n.x),s=H(n.y),c=H(null),d=g=>{o==="page"?(l.value=g.pageX,s.value=g.pageY):o==="client"?(l.value=g.clientX,s.value=g.clientY):o==="movement"&&(l.value=g.movementX,s.value=g.movementY),c.value="mouse"},f=()=>{l.value=n.x,s.value=n.y},p=g=>{if(g.touches.length>0){const m=g.touches[0];o==="page"?(l.value=m.pageX,s.value=m.pageY):o==="client"&&(l.value=m.clientX,s.value=m.clientY),c.value="touch"}},b=g=>a===void 0?d(g):a(()=>d(g),{}),h=g=>a===void 0?p(g):a(()=>p(g),{});return i&&(Se(i,"mousemove",b,{passive:!0}),Se(i,"dragover",b,{passive:!0}),t&&o!=="movement"&&(Se(i,"touchstart",h,{passive:!0}),Se(i,"touchmove",h,{passive:!0}),r&&Se(i,"touchend",f,{passive:!0}))),{x:l,y:s,sourceType:c}}var Et;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Et||(Et={}));function py(e,o={}){const t=ph(e),{threshold:r=50,onSwipe:n,onSwipeEnd:i,onSwipeStart:a}=o,l=Be({x:0,y:0}),s=(P,$)=>{l.x=P,l.y=$},c=Be({x:0,y:0}),d=(P,$)=>{c.x=P,c.y=$},f=C(()=>l.x-c.x),p=C(()=>l.y-c.y),{max:b,abs:h}=Math,g=C(()=>b(h(f.value),h(p.value))>=r),m=H(!1),k=H(!1),w=C(()=>g.value?h(f.value)>h(p.value)?f.value>0?Et.LEFT:Et.RIGHT:p.value>0?Et.UP:Et.DOWN:Et.NONE),y=P=>{var $,S,T;const U=P.buttons===0,J=P.buttons===1;return(T=(S=($=o.pointerTypes)==null?void 0:$.includes(P.pointerType))!=null?S:U||J)!=null?T:!0},x=[Se(e,"pointerdown",P=>{var $,S;if(!y(P))return;k.value=!0,(S=($=t.value)==null?void 0:$.style)==null||S.setProperty("touch-action","none");const T=P.target;T==null||T.setPointerCapture(P.pointerId);const{clientX:U,clientY:J}=P;s(U,J),d(U,J),a==null||a(P)}),Se(e,"pointermove",P=>{if(!y(P)||!k.value)return;const{clientX:$,clientY:S}=P;d($,S),!m.value&&g.value&&(m.value=!0),m.value&&(n==null||n(P))}),Se(e,"pointerup",P=>{var $,S;y(P)&&(m.value&&(i==null||i(P,w.value)),k.value=!1,m.value=!1,(S=($=t.value)==null?void 0:$.style)==null||S.setProperty("touch-action","initial"))})],E=()=>x.forEach(P=>P());return{isSwiping:lt(m),direction:lt(w),posStart:lt(l),posEnd:lt(c),distanceX:f,distanceY:p,stop:E}}let hy=0;function vT(e,o={}){const t=H(!1),{document:r=mh,immediate:n=!0,manual:i=!1,id:a=`vueuse_styletag_${++hy}`}=o,l=H(e);let s=()=>{};const c=()=>{if(!r)return;const f=r.getElementById(a)||r.createElement("style");f.isConnected||(f.type="text/css",f.id=a,o.media&&(f.media=o.media),r.head.appendChild(f)),!t.value&&(s=_e(l,p=>{f.textContent=p},{immediate:!0}),t.value=!0)},d=()=>{!r||!t.value||(s(),r.head.removeChild(r.getElementById(a)),t.value=!1)};return n&&!i&&sc(c),i||bt(d),{id:a,css:l,unload:d,load:c,isLoaded:lt(t)}}var by=Object.defineProperty,Dd=Object.getOwnPropertySymbols,gy=Object.prototype.hasOwnProperty,my=Object.prototype.propertyIsEnumerable,Ud=(e,o,t)=>o in e?by(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,vy=(e,o)=>{for(var t in o||(o={}))gy.call(o,t)&&Ud(e,t,o[t]);if(Dd)for(var t of Dd(o))my.call(o,t)&&Ud(e,t,o[t]);return e};function kT(e={}){const{controls:o=!1,offset:t=0,immediate:r=!0,interval:n="requestAnimationFrame",callback:i}=e,a=H(Ql()+t),l=()=>a.value=Ql()+t,s=i?()=>{l(),i(a.value)}:l,c=n==="requestAnimationFrame"?ly(s,{immediate:r}):bw(s,n,{immediate:r});return o?vy({timestamp:a},c):a}var ky=Object.defineProperty,Hd=Object.getOwnPropertySymbols,wy=Object.prototype.hasOwnProperty,yy=Object.prototype.propertyIsEnumerable,qd=(e,o,t)=>o in e?ky(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,xy=(e,o)=>{for(var t in o||(o={}))wy.call(o,t)&&qd(e,t,o[t]);if(Hd)for(var t of Hd(o))yy.call(o,t)&&qd(e,t,o[t]);return e};const _y={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};xy({linear:tw},_y);function st(e,o,t,r={}){var n,i,a;const{clone:l=!1,passive:s=!1,eventName:c,deep:d=!1,defaultValue:f}=r,p=Fo(),b=t||(p==null?void 0:p.emit)||((n=p==null?void 0:p.$emit)==null?void 0:n.bind(p))||((a=(i=p==null?void 0:p.proxy)==null?void 0:i.$emit)==null?void 0:a.bind(p==null?void 0:p.proxy));let h=c;o||(o="modelValue"),h=c||h||`update:${o.toString()}`;const g=k=>l?ti(l)?l(k):Kw(k):k,m=()=>Yk(e[o])?g(e[o]):f;if(s){const k=m(),w=H(k);return _e(()=>e[o],y=>w.value=g(y)),_e(w,y=>{(y!==e[o]||d)&&b(h,y)},{deep:d}),w}else return C({get(){return m()},set(k){b(h,k)}})}function wT({window:e=ro}={}){if(!e)return H(!1);const o=H(e.document.hasFocus());return Se(e,"blur",()=>{o.value=!1}),Se(e,"focus",()=>{o.value=!0}),o}function Oy(e={}){const{window:o=ro,initialWidth:t=1/0,initialHeight:r=1/0,listenOrientation:n=!0,includeScrollbar:i=!0}=e,a=H(t),l=H(r),s=()=>{o&&(i?(a.value=o.innerWidth,l.value=o.innerHeight):(a.value=o.document.documentElement.clientWidth,l.value=o.document.documentElement.clientHeight))};return s(),sc(s),Se("resize",s,{passive:!0}),n&&Se("orientationchange",s,{passive:!0}),{width:a,height:l}}function Sy(){return vh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function vh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const zy=typeof Proxy=="function",Ey="devtools-plugin:setup",Ly="plugin:settings:set";let jr,ts;function Ty(){var e;return jr!==void 0||(typeof window<"u"&&window.performance?(jr=!0,ts=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(jr=!0,ts=global.perf_hooks.performance):jr=!1),jr}function Ay(){return Ty()?ts.now():Date.now()}class Cy{constructor(o,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=o,this.hook=t;const r={};if(o.settings)for(const a in o.settings){const l=o.settings[a];r[a]=l.defaultValue}const n=`__vue-devtools-plugin-settings__${o.id}`;let i=Object.assign({},r);try{const a=localStorage.getItem(n),l=JSON.parse(a);Object.assign(i,l)}catch{}this.fallbacks={getSettings(){return i},setSettings(a){try{localStorage.setItem(n,JSON.stringify(a))}catch{}i=a},now(){return Ay()}},t&&t.on(Ly,(a,l)=>{a===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(a,l)=>this.target?this.target.on[l]:(...s)=>{this.onQueue.push({method:l,args:s})}}),this.proxiedTarget=new Proxy({},{get:(a,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...s)=>(this.targetQueue.push({method:l,args:s,resolve:()=>{}}),this.fallbacks[l](...s)):(...s)=>new Promise(c=>{this.targetQueue.push({method:l,args:s,resolve:c})})})}async setRealTarget(o){this.target=o;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function Py(e,o){const t=e,r=vh(),n=Sy(),i=zy&&t.enableEarlyProxy;if(n&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))n.emit(Ey,e,o);else{const a=i?new Cy(t,n):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:o,proxy:a}),a&&o(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const St=typeof window<"u";function Fy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function fl(e,o){const t={};for(const r in o){const n=o[r];t[r]=Po(n)?n.map(e):e(n)}return t}const Mn=()=>{},Po=Array.isArray;function Ce(e){const o=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(o))}const $y=/\/$/,Iy=e=>e.replace($y,"");function ul(e,o,t="/"){let r,n={},i="",a="";const l=o.indexOf("#");let s=o.indexOf("?");return l<s&&l>=0&&(s=-1),s>-1&&(r=o.slice(0,s),i=o.slice(s+1,l>-1?l:o.length),n=e(i)),l>-1&&(r=r||o.slice(0,l),a=o.slice(l,o.length)),r=jy(r??o,t),{fullPath:r+(i&&"?")+i+a,path:r,query:n,hash:a}}function Ny(e,o){const t=o.query?e(o.query):"";return o.path+(t&&"?")+t+(o.hash||"")}function Vd(e,o){return!o||!e.toLowerCase().startsWith(o.toLowerCase())?e:e.slice(o.length)||"/"}function Wd(e,o,t){const r=o.matched.length-1,n=t.matched.length-1;return r>-1&&r===n&&or(o.matched[r],t.matched[n])&&kh(o.params,t.params)&&e(o.query)===e(t.query)&&o.hash===t.hash}function or(e,o){return(e.aliasOf||e)===(o.aliasOf||o)}function kh(e,o){if(Object.keys(e).length!==Object.keys(o).length)return!1;for(const t in e)if(!Ry(e[t],o[t]))return!1;return!0}function Ry(e,o){return Po(e)?Gd(e,o):Po(o)?Gd(o,e):e===o}function Gd(e,o){return Po(o)?e.length===o.length&&e.every((t,r)=>t===o[r]):e.length===1&&e[0]===o}function jy(e,o){if(e.startsWith("/"))return e;if(!o.startsWith("/"))return Ce(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${o}". It should look like "/${o}".`),e;if(!e)return o;const t=o.split("/"),r=e.split("/");let n=t.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")n>1&&n--;else break;return t.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ri;(function(e){e.pop="pop",e.push="push"})(ri||(ri={}));var Kn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Kn||(Kn={}));function My(e){if(!e)if(St){const o=document.querySelector("base");e=o&&o.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Iy(e)}const Ky=/^[^#]+#/;function By(e,o){return e.replace(Ky,"#")+o}function Dy(e,o){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:o.behavior,left:r.left-t.left-(o.left||0),top:r.top-t.top-(o.top||0)}}const Ba=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uy(e){let o;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#");if(typeof e.el=="string"&&(!r||!document.getElementById(e.el.slice(1))))try{const i=document.querySelector(e.el);if(r&&i){Ce(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ce(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const n=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!n){Ce(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}o=Dy(n,e)}else o=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(o):window.scrollTo(o.left!=null?o.left:window.pageXOffset,o.top!=null?o.top:window.pageYOffset)}function Xd(e,o){return(history.state?history.state.position-o:-1)+e}const rs=new Map;function Hy(e,o){rs.set(e,o)}function qy(e){const o=rs.get(e);return rs.delete(e),o}let Vy=()=>location.protocol+"//"+location.host;function wh(e,o){const{pathname:t,search:r,hash:n}=o,i=e.indexOf("#");if(i>-1){let l=n.includes(e.slice(i))?e.slice(i).length:1,s=n.slice(l);return s[0]!=="/"&&(s="/"+s),Vd(s,"")}return Vd(t,e)+r+n}function Wy(e,o,t,r){let n=[],i=[],a=null;const l=({state:p})=>{const b=wh(e,location),h=t.value,g=o.value;let m=0;if(p){if(t.value=b,o.value=p,a&&a===h){a=null;return}m=g?p.position-g.position:0}else r(b);n.forEach(k=>{k(t.value,h,{delta:m,type:ri.pop,direction:m?m>0?Kn.forward:Kn.back:Kn.unknown})})};function s(){a=t.value}function c(p){n.push(p);const b=()=>{const h=n.indexOf(p);h>-1&&n.splice(h,1)};return i.push(b),b}function d(){const{history:p}=window;p.state&&p.replaceState(Ie({},p.state,{scroll:Ba()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:s,listen:c,destroy:f}}function Yd(e,o,t,r=!1,n=!1){return{back:e,current:o,forward:t,replaced:r,position:window.history.length,scroll:n?Ba():null}}function Gy(e){const{history:o,location:t}=window,r={value:wh(e,t)},n={value:o.state};n.value||i(r.value,{back:null,current:r.value,forward:null,position:o.length-1,replaced:!0,scroll:null},!0);function i(s,c,d){const f=e.indexOf("#"),p=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+s:Vy()+e+s;try{o[d?"replaceState":"pushState"](c,"",p),n.value=c}catch(b){Ce("Error with push/replace State",b),t[d?"replace":"assign"](p)}}function a(s,c){const d=Ie({},o.state,Yd(n.value.back,s,n.value.forward,!0),c,{position:n.value.position});i(s,d,!0),r.value=s}function l(s,c){const d=Ie({},n.value,o.state,{forward:s,scroll:Ba()});o.state||Ce(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(d.current,d,!0);const f=Ie({},Yd(r.value,s,null),{position:d.position+1},c);i(s,f,!1),r.value=s}return{location:r,state:n,push:l,replace:a}}function Xy(e){e=My(e);const o=Gy(e),t=Wy(e,o.state,o.location,o.replace);function r(i,a=!0){a||t.pauseListeners(),history.go(i)}const n=Ie({location:"",base:e,go:r,createHref:By.bind(null,e)},o,t);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>o.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>o.state.value}),n}function Yy(e){return typeof e=="string"||e&&typeof e=="object"}function yh(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xh=Symbol("navigation failure");var Zd;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Zd||(Zd={}));const Zy={[1]({location:e,currentLocation:o}){return`No match for
 ${JSON.stringify(e)}${o?`
while being at
`+JSON.stringify(o):""}`},[2]({from:e,to:o}){return`Redirected from "${e.fullPath}" to "${Qy(o)}" via a navigation guard.`},[4]({from:e,to:o}){return`Navigation aborted from "${e.fullPath}" to "${o.fullPath}" via a navigation guard.`},[8]({from:e,to:o}){return`Navigation cancelled from "${e.fullPath}" to "${o.fullPath}" with a new navigation.`},[16]({from:e,to:o}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function nn(e,o){return Ie(new Error(Zy[e](o)),{type:e,[xh]:!0},o)}function kt(e,o){return e instanceof Error&&xh in e&&(o==null||!!(e.type&o))}const Jy=["params","query","hash"];function Qy(e){if(typeof e=="string")return e;if("path"in e)return e.path;const o={};for(const t of Jy)t in e&&(o[t]=e[t]);return JSON.stringify(o,null,2)}const Jd="[^/]+?",e1={sensitive:!1,strict:!1,start:!0,end:!0},o1=/[.+*?^${}()[\]/\\]/g;function t1(e,o){const t=Ie({},e1,o),r=[];let n=t.start?"^":"";const i=[];for(const c of e){const d=c.length?[]:[90];t.strict&&!c.length&&(n+="/");for(let f=0;f<c.length;f++){const p=c[f];let b=40+(t.sensitive?.25:0);if(p.type===0)f||(n+="/"),n+=p.value.replace(o1,"\\$&"),b+=40;else if(p.type===1){const{value:h,repeatable:g,optional:m,regexp:k}=p;i.push({name:h,repeatable:g,optional:m});const w=k||Jd;if(w!==Jd){b+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${h}" (${w}): `+x.message)}}let y=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),n+=y,b+=20,m&&(b+=-8),g&&(b+=-20),w===".*"&&(b+=-50)}d.push(b)}r.push(d)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(n+="/?"),t.end?n+="$":t.strict&&(n+="(?:/|$)");const a=new RegExp(n,t.sensitive?"":"i");function l(c){const d=c.match(a),f={};if(!d)return null;for(let p=1;p<d.length;p++){const b=d[p]||"",h=i[p-1];f[h.name]=b&&h.repeatable?b.split("/"):b}return f}function s(c){let d="",f=!1;for(const p of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const b of p)if(b.type===0)d+=b.value;else if(b.type===1){const{value:h,repeatable:g,optional:m}=b,k=h in c?c[h]:"";if(Po(k)&&!g)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const w=Po(k)?k.join("/"):k;if(!w)if(m)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);d+=w}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:s}}function r1(e,o){let t=0;for(;t<e.length&&t<o.length;){const r=o[t]-e[t];if(r)return r;t++}return e.length<o.length?e.length===1&&e[0]===40+40?-1:1:e.length>o.length?o.length===1&&o[0]===40+40?1:-1:0}function n1(e,o){let t=0;const r=e.score,n=o.score;for(;t<r.length&&t<n.length;){const i=r1(r[t],n[t]);if(i)return i;t++}if(Math.abs(n.length-r.length)===1){if(Qd(r))return 1;if(Qd(n))return-1}return n.length-r.length}function Qd(e){const o=e[e.length-1];return e.length>0&&o[o.length-1]<0}const i1={type:0,value:""},a1=/[a-zA-Z0-9_]/;function l1(e){if(!e)return[[]];if(e==="/")return[[i1]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function o(b){throw new Error(`ERR (${t})/"${c}": ${b}`)}let t=0,r=t;const n=[];let i;function a(){i&&n.push(i),i=[]}let l=0,s,c="",d="";function f(){c&&(t===0?i.push({type:0,value:c}):t===1||t===2||t===3?(i.length>1&&(s==="*"||s==="+")&&o(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:d,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):o("Invalid state to consume buffer"),c="")}function p(){c+=s}for(;l<e.length;){if(s=e[l++],s==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:s==="/"?(c&&f(),a()):s===":"?(f(),t=1):p();break;case 4:p(),t=r;break;case 1:s==="("?t=2:a1.test(s)?p():(f(),t=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+s:t=3:d+=s;break;case 3:f(),t=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,d="";break;default:o("Unknown state");break}}return t===2&&o(`Unfinished custom RegExp for param "${c}"`),f(),a(),n}function s1(e,o,t){const r=t1(l1(e.path),t);{const i=new Set;for(const a of r.keys)i.has(a.name)&&Ce(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),i.add(a.name)}const n=Ie(r,{record:e,parent:o,children:[],alias:[]});return o&&!n.record.aliasOf==!o.record.aliasOf&&o.children.push(n),n}function c1(e,o){const t=[],r=new Map;o=tf({strict:!1,end:!0,sensitive:!1},o);function n(d){return r.get(d)}function i(d,f,p){const b=!p,h=d1(d);h1(h,f),h.aliasOf=p&&p.record;const g=tf(o,d),m=[h];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of y)m.push(Ie({},h,{components:p?p.record.components:h.components,path:x,aliasOf:p?p.record:h}))}let k,w;for(const y of m){const{path:x}=y;if(f&&x[0]!=="/"){const E=f.record.path,P=E[E.length-1]==="/"?"":"/";y.path=f.record.path+(x&&P+x)}if(y.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=s1(y,f,g),f&&x[0]==="/"&&b1(k,f),p?(p.alias.push(k),p1(p,k)):(w=w||k,w!==k&&w.alias.push(k),b&&d.name&&!of(k)&&a(d.name)),h.children){const E=h.children;for(let P=0;P<E.length;P++)i(E[P],k,p&&p.children[P])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&s(k)}return w?()=>{a(w)}:Mn}function a(d){if(yh(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return t}function s(d){let f=0;for(;f<t.length&&n1(d,t[f])>=0&&(d.record.path!==t[f].record.path||!_h(d,t[f]));)f++;t.splice(f,0,d),d.record.name&&!of(d)&&r.set(d.record.name,d)}function c(d,f){let p,b={},h,g;if("name"in d&&d.name){if(p=r.get(d.name),!p)throw nn(1,{location:d});{const w=Object.keys(d.params||{}).filter(y=>!p.keys.find(x=>x.name===y));w.length&&Ce(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=p.record.name,b=Ie(ef(f.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),d.params&&ef(d.params,p.keys.map(w=>w.name))),h=p.stringify(b)}else if("path"in d)h=d.path,h.startsWith("/")||Ce(`The Matcher cannot resolve relative paths but received "${h}". Unless you directly called \`matcher.resolve("${h}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),p=t.find(w=>w.re.test(h)),p&&(b=p.parse(h),g=p.record.name);else{if(p=f.name?r.get(f.name):t.find(w=>w.re.test(f.path)),!p)throw nn(1,{location:d,currentLocation:f});g=p.record.name,b=Ie({},f.params,d.params),h=p.stringify(b)}const m=[];let k=p;for(;k;)m.unshift(k.record),k=k.parent;return{name:g,path:h,params:b,matched:m,meta:u1(m)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:c,removeRoute:a,getRoutes:l,getRecordMatcher:n}}function ef(e,o){const t={};for(const r of o)r in e&&(t[r]=e[r]);return t}function d1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:f1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function f1(e){const o={},t=e.props||!1;if("component"in e)o.default=t;else for(const r in e.components)o[r]=typeof t=="boolean"?t:t[r];return o}function of(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function u1(e){return e.reduce((o,t)=>Ie(o,t.meta),{})}function tf(e,o){const t={};for(const r in e)t[r]=r in o?o[r]:e[r];return t}function ns(e,o){return e.name===o.name&&e.optional===o.optional&&e.repeatable===o.repeatable}function p1(e,o){for(const t of e.keys)if(!t.optional&&!o.keys.find(ns.bind(null,t)))return Ce(`Alias "${o.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${t.name}"`);for(const t of o.keys)if(!t.optional&&!e.keys.find(ns.bind(null,t)))return Ce(`Alias "${o.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${t.name}"`)}function h1(e,o){o&&o.record.name&&!e.name&&!e.path&&Ce(`The route named "${String(o.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function b1(e,o){for(const t of o.keys)if(!e.keys.find(ns.bind(null,t)))return Ce(`Absolute path "${e.record.path}" must have the exact same param named "${t.name}" as its parent "${o.record.path}".`)}function _h(e,o){return o.children.some(t=>t===e||_h(e,t))}const Oh=/#/g,g1=/&/g,m1=/\//g,v1=/=/g,k1=/\?/g,Sh=/\+/g,w1=/%5B/g,y1=/%5D/g,zh=/%5E/g,x1=/%60/g,Eh=/%7B/g,_1=/%7C/g,Lh=/%7D/g,O1=/%20/g;function cc(e){return encodeURI(""+e).replace(_1,"|").replace(w1,"[").replace(y1,"]")}function S1(e){return cc(e).replace(Eh,"{").replace(Lh,"}").replace(zh,"^")}function is(e){return cc(e).replace(Sh,"%2B").replace(O1,"+").replace(Oh,"%23").replace(g1,"%26").replace(x1,"`").replace(Eh,"{").replace(Lh,"}").replace(zh,"^")}function z1(e){return is(e).replace(v1,"%3D")}function E1(e){return cc(e).replace(Oh,"%23").replace(k1,"%3F")}function L1(e){return e==null?"":E1(e).replace(m1,"%2F")}function ni(e){try{return decodeURIComponent(""+e)}catch{Ce(`Error decoding "${e}". Using original value`)}return""+e}function T1(e){const o={};if(e===""||e==="?")return o;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<r.length;++n){const i=r[n].replace(Sh," "),a=i.indexOf("="),l=ni(a<0?i:i.slice(0,a)),s=a<0?null:ni(i.slice(a+1));if(l in o){let c=o[l];Po(c)||(c=o[l]=[c]),c.push(s)}else o[l]=s}return o}function rf(e){let o="";for(let t in e){const r=e[t];if(t=z1(t),r==null){r!==void 0&&(o+=(o.length?"&":"")+t);continue}(Po(r)?r.map(i=>i&&is(i)):[r&&is(r)]).forEach(i=>{i!==void 0&&(o+=(o.length?"&":"")+t,i!=null&&(o+="="+i))})}return o}function A1(e){const o={};for(const t in e){const r=e[t];r!==void 0&&(o[t]=Po(r)?r.map(n=>n==null?null:""+n):r==null?r:""+r)}return o}const C1=Symbol("router view location matched"),nf=Symbol("router view depth"),dc=Symbol("router"),Th=Symbol("route location"),as=Symbol("router view location");function xn(){let e=[];function o(r){return e.push(r),()=>{const n=e.indexOf(r);n>-1&&e.splice(n,1)}}function t(){e=[]}return{add:o,list:()=>e,reset:t}}function Kt(e,o,t,r,n){const i=r&&(r.enterCallbacks[n]=r.enterCallbacks[n]||[]);return()=>new Promise((a,l)=>{const s=f=>{f===!1?l(nn(4,{from:t,to:o})):f instanceof Error?l(f):Yy(f)?l(nn(2,{from:o,to:f})):(i&&r.enterCallbacks[n]===i&&typeof f=="function"&&i.push(f),a())},c=e.call(r&&r.instances[n],o,t,P1(s,o,t));let d=Promise.resolve(c);if(e.length<3&&(d=d.then(s)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)d=d.then(p=>s._called?p:(Ce(f),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!s._called){Ce(f),l(new Error("Invalid navigation guard"));return}}d.catch(f=>l(f))})}function P1(e,o,t){let r=0;return function(){r++===1&&Ce(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${o.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,r===1&&e.apply(null,arguments)}}function pl(e,o,t,r){const n=[];for(const i of e){!i.components&&!i.children.length&&Ce(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const a in i.components){let l=i.components[a];{if(!l||typeof l!="object"&&typeof l!="function")throw Ce(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Ce(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const s=l;l=()=>s}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Ce(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(o!=="beforeRouteEnter"&&!i.instances[a]))if(F1(l)){const c=(l.__vccOpts||l)[o];c&&n.push(Kt(c,t,r,i,a))}else{let s=l();"catch"in s||(Ce(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),s=Promise.resolve(s)),n.push(()=>s.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=Fy(c)?c.default:c;i.components[a]=d;const p=(d.__vccOpts||d)[o];return p&&Kt(p,t,r,i,a)()}))}}}return n}function F1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function af(e){const o=Z(dc),t=Z(Th),r=C(()=>o.resolve(z(e.to))),n=C(()=>{const{matched:s}=r.value,{length:c}=s,d=s[c-1],f=t.matched;if(!d||!f.length)return-1;const p=f.findIndex(or.bind(null,d));if(p>-1)return p;const b=lf(s[c-2]);return c>1&&lf(d)===b&&f[f.length-1].path!==b?f.findIndex(or.bind(null,s[c-2])):p}),i=C(()=>n.value>-1&&R1(t.params,r.value.params)),a=C(()=>n.value>-1&&n.value===t.matched.length-1&&kh(t.params,r.value.params));function l(s={}){return N1(s)?o[z(e.replace)?"replace":"push"](z(e.to)).catch(Mn):Promise.resolve()}if(St){const s=Fo();if(s){const c={route:r.value,isActive:i.value,isExactActive:a.value};s.__vrl_devtools=s.__vrl_devtools||[],s.__vrl_devtools.push(c),Fr(()=>{c.route=r.value,c.isActive=i.value,c.isExactActive=a.value},{flush:"post"})}}return{route:r,href:C(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const $1=se({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:af,setup(e,{slots:o}){const t=Be(af(e)),{options:r}=Z(dc),n=C(()=>({[sf(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[sf(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=o.default&&o.default(t);return e.custom?i:Qe("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:n.value},i)}}}),I1=$1;function N1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const o=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(o))return}return e.preventDefault&&e.preventDefault(),!0}}function R1(e,o){for(const t in o){const r=o[t],n=e[t];if(typeof r=="string"){if(r!==n)return!1}else if(!Po(n)||n.length!==r.length||r.some((i,a)=>i!==n[a]))return!1}return!0}function lf(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const sf=(e,o,t)=>e??o??t,j1=se({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:o,slots:t}){K1();const r=Z(as),n=C(()=>e.route||r.value),i=Z(nf,0),a=C(()=>{let c=z(i);const{matched:d}=n.value;let f;for(;(f=d[c])&&!f.components;)c++;return c}),l=C(()=>n.value.matched[a.value]);Lo(nf,C(()=>a.value+1)),Lo(C1,l),Lo(as,n);const s=H();return _e(()=>[s.value,l.value,e.name],([c,d,f],[p,b,h])=>{d&&(d.instances[f]=c,b&&b!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),c&&d&&(!b||!or(d,b)||!p)&&(d.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=n.value,d=e.name,f=l.value,p=f&&f.components[d];if(!p)return cf(t.default,{Component:p,route:c});const b=f.props[d],h=b?b===!0?c.params:typeof b=="function"?b(c):b:null,m=Qe(p,Ie({},h,o,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[d]=null)},ref:s}));if(St&&m.ref){const k={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Po(m.ref)?m.ref.map(y=>y.i):[m.ref.i]).forEach(y=>{y.__vrv_devtools=k})}return cf(t.default,{Component:m,route:c})||m}}});function cf(e,o){if(!e)return null;const t=e(o);return t.length===1?t[0]:t}const M1=j1;function K1(){const e=Fo(),o=e.parent&&e.parent.type.name;if(o&&(o==="KeepAlive"||o.includes("Transition"))){const t=o==="KeepAlive"?"keep-alive":"transition";Ce(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${t}>
    <component :is="Component" />
  </${t}>
</router-view>`)}}function _n(e,o){const t=Ie({},e,{matched:e.matched.map(r=>X1(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:o,value:t}}}function Ri(e){return{_custom:{display:e}}}let B1=0;function D1(e,o,t){if(o.__hasDevtools)return;o.__hasDevtools=!0;const r=B1++;Py({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},n=>{typeof n.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:_n(o.currentRoute.value,"Current Route")})}),n.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const p=f.__vrv_devtools;d.tags.push({label:(p.name?`${p.name.toString()}: `:"")+p.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Ah})}Po(f.__vrl_devtools)&&(f.__devtoolsApi=n,f.__vrl_devtools.forEach(p=>{let b=Fh,h="";p.isExactActive?(b=Ph,h="This is exactly active"):p.isActive&&(b=Ch,h="This link is active"),d.tags.push({label:p.route.path,textColor:0,tooltip:h,backgroundColor:b})}))}),_e(o.currentRoute,()=>{s(),n.notifyComponentUpdate(),n.sendInspectorTree(l),n.sendInspectorState(l)});const i="router:navigations:"+r;n.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),o.onError((d,f)=>{n.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:n.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;o.beforeEach((d,f)=>{const p={guard:Ri("beforeEach"),from:_n(f,"Current Location during this navigation"),to:_n(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),n.addTimelineEvent({layerId:i,event:{time:n.now(),title:"Start of navigation",subtitle:d.fullPath,data:p,groupId:d.meta.__navigationId}})}),o.afterEach((d,f,p)=>{const b={guard:Ri("afterEach")};p?(b.failure={_custom:{type:Error,readOnly:!0,display:p?p.message:"",tooltip:"Navigation Failure",value:p}},b.status=Ri("❌")):b.status=Ri("✅"),b.from=_n(f,"Current Location during this navigation"),b.to=_n(d,"Target location"),n.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:d.fullPath,time:n.now(),data:b,logType:p?"warning":"default",groupId:d.meta.__navigationId}})});const l="router-inspector:"+r;n.addInspector({id:l,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function s(){if(!c)return;const d=c;let f=t.getRoutes().filter(p=>!p.parent);f.forEach(Nh),d.filter&&(f=f.filter(p=>ls(p,d.filter.toLowerCase()))),f.forEach(p=>Ih(p,o.currentRoute.value)),d.rootNodes=f.map($h)}let c;n.on.getInspectorTree(d=>{c=d,d.app===e&&d.inspectorId===l&&s()}),n.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===l){const p=t.getRoutes().find(b=>b.record.__vd_id===d.nodeId);p&&(d.state={options:H1(p)})}}),n.sendInspectorTree(l),n.sendInspectorState(l)})}function U1(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function H1(e){const{record:o}=e,t=[{editable:!1,key:"path",value:o.path}];return o.name!=null&&t.push({editable:!1,key:"name",value:o.name}),t.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&t.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${U1(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),o.redirect!=null&&t.push({editable:!1,key:"redirect",value:o.redirect}),e.alias.length&&t.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),Object.keys(e.record.meta).length&&t.push({editable:!1,key:"meta",value:e.record.meta}),t.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),t}const Ah=15485081,Ch=2450411,Ph=8702998,q1=2282478,Fh=16486972,V1=6710886;function $h(e){const o=[],{record:t}=e;t.name!=null&&o.push({label:String(t.name),textColor:0,backgroundColor:q1}),t.aliasOf&&o.push({label:"alias",textColor:0,backgroundColor:Fh}),e.__vd_match&&o.push({label:"matches",textColor:0,backgroundColor:Ah}),e.__vd_exactActive&&o.push({label:"exact",textColor:0,backgroundColor:Ph}),e.__vd_active&&o.push({label:"active",textColor:0,backgroundColor:Ch}),t.redirect&&o.push({label:typeof t.redirect=="string"?`redirect: ${t.redirect}`:"redirects",textColor:16777215,backgroundColor:V1});let r=t.__vd_id;return r==null&&(r=String(W1++),t.__vd_id=r),{id:r,label:t.path,tags:o,children:e.children.map($h)}}let W1=0;const G1=/^\/(.*)\/([a-z]*)$/;function Ih(e,o){const t=o.matched.length&&or(o.matched[o.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=t,t||(e.__vd_active=o.matched.some(r=>or(r,e.record))),e.children.forEach(r=>Ih(r,o))}function Nh(e){e.__vd_match=!1,e.children.forEach(Nh)}function ls(e,o){const t=String(e.re).match(G1);if(e.__vd_match=!1,!t||t.length<3)return!1;if(new RegExp(t[1].replace(/\$$/,""),t[2]).test(o))return e.children.forEach(a=>ls(a,o)),e.record.path!=="/"||o==="/"?(e.__vd_match=e.re.test(o),!0):!1;const n=e.record.path.toLowerCase(),i=ni(n);return!o.startsWith("/")&&(i.includes(o)||n.includes(o))||i.startsWith(o)||n.startsWith(o)||e.record.name&&String(e.record.name).includes(o)?!0:e.children.some(a=>ls(a,o))}function X1(e,o){const t={};for(const r in e)o.includes(r)||(t[r]=e[r]);return t}function Y1(e){const o=c1(e.routes,e),t=e.parseQuery||T1,r=e.stringifyQuery||rf,n=e.history;if(!n)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=xn(),a=xn(),l=xn(),s=pt(Nt);let c=Nt;St&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=fl.bind(null,F=>""+F),f=fl.bind(null,L1),p=fl.bind(null,ni);function b(F,W){let D,Q;return yh(F)?(D=o.getRecordMatcher(F),Q=W):Q=F,o.addRoute(Q,D)}function h(F){const W=o.getRecordMatcher(F);W?o.removeRoute(W):Ce(`Cannot remove non-existent route "${String(F)}"`)}function g(){return o.getRoutes().map(F=>F.record)}function m(F){return!!o.getRecordMatcher(F)}function k(F,W){if(W=Ie({},W||s.value),typeof F=="string"){const ue=ul(t,F,W.path),v=o.resolve({path:ue.path},W),_=n.createHref(ue.fullPath);return _.startsWith("//")?Ce(`Location "${F}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):v.matched.length||Ce(`No match found for location with path "${F}"`),Ie(ue,v,{params:p(v.params),hash:ni(ue.hash),redirectedFrom:void 0,href:_})}let D;if("path"in F)"params"in F&&!("name"in F)&&Object.keys(F.params).length&&Ce(`Path "${F.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),D=Ie({},F,{path:ul(t,F.path,W.path).path});else{const ue=Ie({},F.params);for(const v in ue)ue[v]==null&&delete ue[v];D=Ie({},F,{params:f(F.params)}),W.params=f(W.params)}const Q=o.resolve(D,W),Oe=F.hash||"";Oe&&!Oe.startsWith("#")&&Ce(`A \`hash\` should always start with the character "#". Replace "${Oe}" with "#${Oe}".`),Q.params=d(p(Q.params));const Le=Ny(r,Ie({},F,{hash:S1(Oe),path:Q.path})),me=n.createHref(Le);return me.startsWith("//")?Ce(`Location "${F}" resolved to "${me}". A resolved location cannot start with multiple slashes.`):Q.matched.length||Ce(`No match found for location with path "${"path"in F?F.path:F}"`),Ie({fullPath:Le,hash:Oe,query:r===rf?A1(F.query):F.query||{}},Q,{redirectedFrom:void 0,href:me})}function w(F){return typeof F=="string"?ul(t,F,s.value.path):Ie({},F)}function y(F,W){if(c!==F)return nn(8,{from:W,to:F})}function x(F){return $(F)}function E(F){return x(Ie(w(F),{replace:!0}))}function P(F){const W=F.matched[F.matched.length-1];if(W&&W.redirect){const{redirect:D}=W;let Q=typeof D=="function"?D(F):D;if(typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=w(Q):{path:Q},Q.params={}),!("path"in Q)&&!("name"in Q))throw Ce(`Invalid redirect found:
${JSON.stringify(Q,null,2)}
 when navigating to "${F.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:F.query,hash:F.hash,params:"path"in Q?{}:F.params},Q)}}function $(F,W){const D=c=k(F),Q=s.value,Oe=F.state,Le=F.force,me=F.replace===!0,ue=P(D);if(ue)return $(Ie(w(ue),{state:typeof ue=="object"?Ie({},Oe,ue.state):Oe,force:Le,replace:me}),W||D);const v=D;v.redirectedFrom=W;let _;return!Le&&Wd(r,Q,D)&&(_=nn(16,{to:v,from:Q}),Ae(Q,Q,!0,!1)),(_?Promise.resolve(_):T(v,Q)).catch(L=>kt(L)?kt(L,2)?L:ye(L):G(L,v,Q)).then(L=>{if(L){if(kt(L,2))return Wd(r,k(L.to),v)&&W&&(W._count=W._count?W._count+1:1)>10?(Ce(`Detected an infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${v.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):$(Ie({replace:me},w(L.to),{state:typeof L.to=="object"?Ie({},Oe,L.to.state):Oe,force:Le}),W||v)}else L=J(v,Q,!0,me,Oe);return U(v,Q,L),L})}function S(F,W){const D=y(F,W);return D?Promise.reject(D):Promise.resolve()}function T(F,W){let D;const[Q,Oe,Le]=Z1(F,W);D=pl(Q.reverse(),"beforeRouteLeave",F,W);for(const ue of Q)ue.leaveGuards.forEach(v=>{D.push(Kt(v,F,W))});const me=S.bind(null,F,W);return D.push(me),Mr(D).then(()=>{D=[];for(const ue of i.list())D.push(Kt(ue,F,W));return D.push(me),Mr(D)}).then(()=>{D=pl(Oe,"beforeRouteUpdate",F,W);for(const ue of Oe)ue.updateGuards.forEach(v=>{D.push(Kt(v,F,W))});return D.push(me),Mr(D)}).then(()=>{D=[];for(const ue of F.matched)if(ue.beforeEnter&&!W.matched.includes(ue))if(Po(ue.beforeEnter))for(const v of ue.beforeEnter)D.push(Kt(v,F,W));else D.push(Kt(ue.beforeEnter,F,W));return D.push(me),Mr(D)}).then(()=>(F.matched.forEach(ue=>ue.enterCallbacks={}),D=pl(Le,"beforeRouteEnter",F,W),D.push(me),Mr(D))).then(()=>{D=[];for(const ue of a.list())D.push(Kt(ue,F,W));return D.push(me),Mr(D)}).catch(ue=>kt(ue,8)?ue:Promise.reject(ue))}function U(F,W,D){for(const Q of l.list())Q(F,W,D)}function J(F,W,D,Q,Oe){const Le=y(F,W);if(Le)return Le;const me=W===Nt,ue=St?history.state:{};D&&(Q||me?n.replace(F.fullPath,Ie({scroll:me&&ue&&ue.scroll},Oe)):n.push(F.fullPath,Oe)),s.value=F,Ae(F,W,D,me),ye()}let K;function ge(){K||(K=n.listen((F,W,D)=>{if(!No.listening)return;const Q=k(F),Oe=P(Q);if(Oe){$(Ie(Oe,{replace:!0}),Q).catch(Mn);return}c=Q;const Le=s.value;St&&Hy(Xd(Le.fullPath,D.delta),Ba()),T(Q,Le).catch(me=>kt(me,12)?me:kt(me,2)?($(me.to,Q).then(ue=>{kt(ue,20)&&!D.delta&&D.type===ri.pop&&n.go(-1,!1)}).catch(Mn),Promise.reject()):(D.delta&&n.go(-D.delta,!1),G(me,Q,Le))).then(me=>{me=me||J(Q,Le,!1),me&&(D.delta&&!kt(me,8)?n.go(-D.delta,!1):D.type===ri.pop&&kt(me,20)&&n.go(-1,!1)),U(Q,Le,me)}).catch(Mn)}))}let fe=xn(),ke=xn(),Te;function G(F,W,D){ye(F);const Q=ke.list();return Q.length?Q.forEach(Oe=>Oe(F,W,D)):(Ce("uncaught error during route navigation:"),console.error(F)),Promise.reject(F)}function te(){return Te&&s.value!==Nt?Promise.resolve():new Promise((F,W)=>{fe.add([F,W])})}function ye(F){return Te||(Te=!F,ge(),fe.list().forEach(([W,D])=>F?D(F):W()),fe.reset()),F}function Ae(F,W,D,Q){const{scrollBehavior:Oe}=e;if(!St||!Oe)return Promise.resolve();const Le=!D&&qy(Xd(F.fullPath,0))||(Q||!D)&&history.state&&history.state.scroll||null;return fo().then(()=>Oe(F,W,Le)).then(me=>me&&Uy(me)).catch(me=>G(me,F,W))}const lo=F=>n.go(F);let Ue;const Ze=new Set,No={currentRoute:s,listening:!0,addRoute:b,removeRoute:h,hasRoute:m,getRoutes:g,resolve:k,options:e,push:x,replace:E,go:lo,back:()=>lo(-1),forward:()=>lo(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:ke.add,isReady:te,install(F){const W=this;F.component("RouterLink",I1),F.component("RouterView",M1),F.config.globalProperties.$router=W,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>z(s)}),St&&!Ue&&s.value===Nt&&(Ue=!0,x(n.location).catch(Oe=>{Ce("Unexpected error when starting the router:",Oe)}));const D={};for(const Oe in Nt)D[Oe]=C(()=>s.value[Oe]);F.provide(dc,W),F.provide(Th,Be(D)),F.provide(as,s);const Q=F.unmount;Ze.add(F),F.unmount=function(){Ze.delete(F),Ze.size<1&&(c=Nt,K&&K(),K=null,s.value=Nt,Ue=!1,Te=!1),Q()},St&&D1(F,W,o)}};return No}function Mr(e){return e.reduce((o,t)=>o.then(()=>t()),Promise.resolve())}function Z1(e,o){const t=[],r=[],n=[],i=Math.max(o.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=o.matched[a];l&&(e.matched.find(c=>or(c,l))?r.push(l):t.push(l));const s=e.matched[a];s&&(o.matched.find(c=>or(c,s))||n.push(s))}return[t,r,n]}const hl=H(!1),Bn=H(!1),Gr=H(!1),J1=H(!0),ss=jw({xs:460,...Fw}),Lr=Oy(),Rh=uy(),Q1=C(()=>Lr.height.value-Lr.width.value/Vt>180),jh=cy(et?document.body:null),Xt=Pw(),ex=C(()=>{var e,o;return["INPUT","TEXTAREA"].includes(((e=Xt.value)==null?void 0:e.tagName)||"")||((o=Xt.value)==null?void 0:o.classList.contains("CodeMirror-code"))}),ox=C(()=>{var e;return["BUTTON","A"].includes(((e=Xt.value)==null?void 0:e.tagName)||"")});ot("slidev-camera","default");ot("slidev-mic","default");const Xi=ot("slidev-scale",0),go=ot("slidev-show-overview",!1),bl=ot("slidev-presenter-cursor",!0),df=ot("slidev-show-editor",!1);ot("slidev-editor-width",et?window.innerWidth*.4:100);const Mh=hh(go);function ff(e,o,t,r=n=>n){return e*r(.5-o*(.5-t))}function tx(e){return[-e[0],-e[1]]}function Go(e,o){return[e[0]+o[0],e[1]+o[1]]}function Mo(e,o){return[e[0]-o[0],e[1]-o[1]]}function Wo(e,o){return[e[0]*o,e[1]*o]}function rx(e,o){return[e[0]/o,e[1]/o]}function On(e){return[e[1],-e[0]]}function uf(e,o){return e[0]*o[0]+e[1]*o[1]}function nx(e,o){return e[0]===o[0]&&e[1]===o[1]}function ix(e){return Math.hypot(e[0],e[1])}function ax(e){return e[0]*e[0]+e[1]*e[1]}function pf(e,o){return ax(Mo(e,o))}function Kh(e){return rx(e,ix(e))}function lx(e,o){return Math.hypot(e[1]-o[1],e[0]-o[0])}function Sn(e,o,t){let r=Math.sin(t),n=Math.cos(t),i=e[0]-o[0],a=e[1]-o[1],l=i*n-a*r,s=i*r+a*n;return[l+o[0],s+o[1]]}function cs(e,o,t){return Go(e,Wo(Mo(o,e),t))}function hf(e,o,t){return Go(e,Wo(o,t))}var{min:Kr,PI:sx}=Math,bf=.275,zn=sx+1e-4;function cx(e,o={}){let{size:t=16,smoothing:r=.5,thinning:n=.5,simulatePressure:i=!0,easing:a=G=>G,start:l={},end:s={},last:c=!1}=o,{cap:d=!0,easing:f=G=>G*(2-G)}=l,{cap:p=!0,easing:b=G=>--G*G*G+1}=s;if(e.length===0||t<=0)return[];let h=e[e.length-1].runningLength,g=l.taper===!1?0:l.taper===!0?Math.max(t,h):l.taper,m=s.taper===!1?0:s.taper===!0?Math.max(t,h):s.taper,k=Math.pow(t*r,2),w=[],y=[],x=e.slice(0,10).reduce((G,te)=>{let ye=te.pressure;if(i){let Ae=Kr(1,te.distance/t),lo=Kr(1,1-Ae);ye=Kr(1,G+(lo-G)*(Ae*bf))}return(G+ye)/2},e[0].pressure),E=ff(t,n,e[e.length-1].pressure,a),P,$=e[0].vector,S=e[0].point,T=S,U=S,J=T,K=!1;for(let G=0;G<e.length;G++){let{pressure:te}=e[G],{point:ye,vector:Ae,distance:lo,runningLength:Ue}=e[G];if(G<e.length-1&&h-Ue<3)continue;if(n){if(i){let Le=Kr(1,lo/t),me=Kr(1,1-Le);te=Kr(1,x+(me-x)*(Le*bf))}E=ff(t,n,te,a)}else E=t/2;P===void 0&&(P=E);let Ze=Ue<g?f(Ue/g):1,No=h-Ue<m?b((h-Ue)/m):1;E=Math.max(.01,E*Math.min(Ze,No));let F=(G<e.length-1?e[G+1]:e[G]).vector,W=G<e.length-1?uf(Ae,F):1,D=uf(Ae,$)<0&&!K,Q=W!==null&&W<0;if(D||Q){let Le=Wo(On($),E);for(let me=1/13,ue=0;ue<=1;ue+=me)U=Sn(Mo(ye,Le),ye,zn*ue),w.push(U),J=Sn(Go(ye,Le),ye,zn*-ue),y.push(J);S=U,T=J,Q&&(K=!0);continue}if(K=!1,G===e.length-1){let Le=Wo(On(Ae),E);w.push(Mo(ye,Le)),y.push(Go(ye,Le));continue}let Oe=Wo(On(cs(F,Ae,W)),E);U=Mo(ye,Oe),(G<=1||pf(S,U)>k)&&(w.push(U),S=U),J=Go(ye,Oe),(G<=1||pf(T,J)>k)&&(y.push(J),T=J),x=te,$=Ae}let ge=e[0].point.slice(0,2),fe=e.length>1?e[e.length-1].point.slice(0,2):Go(e[0].point,[1,1]),ke=[],Te=[];if(e.length===1){if(!(g||m)||c){let G=hf(ge,Kh(On(Mo(ge,fe))),-(P||E)),te=[];for(let ye=1/13,Ae=ye;Ae<=1;Ae+=ye)te.push(Sn(G,ge,zn*2*Ae));return te}}else{if(!(g||m&&e.length===1))if(d)for(let te=1/13,ye=te;ye<=1;ye+=te){let Ae=Sn(y[0],ge,zn*ye);ke.push(Ae)}else{let te=Mo(w[0],y[0]),ye=Wo(te,.5),Ae=Wo(te,.51);ke.push(Mo(ge,ye),Mo(ge,Ae),Go(ge,Ae),Go(ge,ye))}let G=On(tx(e[e.length-1].vector));if(m||g&&e.length===1)Te.push(fe);else if(p){let te=hf(fe,G,E);for(let ye=1/29,Ae=ye;Ae<1;Ae+=ye)Te.push(Sn(te,fe,zn*3*Ae))}else Te.push(Go(fe,Wo(G,E)),Go(fe,Wo(G,E*.99)),Mo(fe,Wo(G,E*.99)),Mo(fe,Wo(G,E)))}return w.concat(Te,y.reverse(),ke)}function dx(e,o={}){var t;let{streamline:r=.5,size:n=16,last:i=!1}=o;if(e.length===0)return[];let a=.15+(1-r)*.85,l=Array.isArray(e[0])?e:e.map(({x:b,y:h,pressure:g=.5})=>[b,h,g]);if(l.length===2){let b=l[1];l=l.slice(0,-1);for(let h=1;h<5;h++)l.push(cs(l[0],b,h/4))}l.length===1&&(l=[...l,[...Go(l[0],[1,1]),...l[0].slice(2)]]);let s=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,d=0,f=s[0],p=l.length-1;for(let b=1;b<l.length;b++){let h=i&&b===p?l[b].slice(0,2):cs(f.point,l[b],a);if(nx(f.point,h))continue;let g=lx(h,f.point);if(d+=g,b<p&&!c){if(d<n)continue;c=!0}f={point:h,pressure:l[b][2]>=0?l[b][2]:.5,vector:Kh(Mo(f.point,h)),distance:g,runningLength:d},s.push(f)}return s[0].vector=((t=s[1])==null?void 0:t.vector)||[0,0],s}function fx(e,o={}){return cx(dx(e,o),o)}var ux=()=>({events:{},emit(e,...o){let t=this.events[e]||[];for(let r=0,n=t.length;r<n;r++)t[r](...o)},on(e,o){var t;return(t=this.events[e])!=null&&t.push(o)||(this.events[e]=[o]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>o!==n)}}});function ba(e,o){return e-o}function px(e){return e<0?-1:1}function ga(e){return[Math.abs(e),px(e)]}function Bh(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var hx=2,zt=hx,un=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var o;const t=this.drauu.el,r=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const n=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-n.left)*r,y:(e.pageY-n.top)*r,pressure:e.pressure}}else{const n=this.drauu.svgPoint;n.x=e.clientX,n.y=e.clientY;const i=n.matrixTransform((o=t.getScreenCTM())==null?void 0:o.inverse());return{x:i.x*r,y:i.y*r,pressure:e.pressure}}}createElement(e,o){const t=document.createElementNS("http://www.w3.org/2000/svg",e),r=o?{...this.brush,...o}:this.brush;return t.setAttribute("fill",r.fill??"transparent"),t.setAttribute("stroke",r.color),t.setAttribute("stroke-width",r.size.toString()),t.setAttribute("stroke-linecap","round"),r.dasharray&&t.setAttribute("stroke-dasharray",r.dasharray),t}attr(e,o){this.el.setAttribute(e,typeof o=="string"?o:o.toFixed(zt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},bx=class extends un{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const o=fx(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!o.length)return"";const t=o.reduce((r,[n,i],a,l)=>{const[s,c]=l[(a+1)%l.length];return r.push(n,i,(n+s)/2,(i+c)/2),r},["M",...o[0],"Q"]);return t.push("Z"),t.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},gx=class extends un{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[o,t]=ga(e.x-this.start.x),[r,n]=ga(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(o,r);o=i,r=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",o),this.attr("ry",r);else{const[i,a]=[this.start.x,this.start.x+o*t].sort(ba),[l,s]=[this.start.y,this.start.y+r*n].sort(ba);this.attr("cx",(i+a)/2),this.attr("cy",(l+s)/2),this.attr("rx",(a-i)/2),this.attr("ry",(s-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Dh(e,o){const t=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("fill",o),r.setAttribute("id",e),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),n.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(n),t.appendChild(r),t}var mx=class extends un{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const o=Bh(),t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.append(Dh(o,this.brush.color)),t.append(this.el),this.attr("marker-end",`url(#${o})`),t}return this.el}onMove(e){if(!this.el)return!1;let{x:o,y:t}=e;if(this.shiftPressed){const r=e.x-this.start.x,n=e.y-this.start.y;if(n!==0){let i=r/n;i=Math.round(i),Math.abs(i)<=1?(o=this.start.x+n*i,t=this.start.y+n):(o=this.start.x+r,t=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-o),this.attr("y1",this.start.y*2-t),this.attr("x2",o),this.attr("y2",t)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",o),this.attr("y2",t)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},vx=class extends un{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[o,t]=ga(e.x-this.start.x),[r,n]=ga(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(o,r);o=i,r=i}if(this.altPressed)this.attr("x",this.start.x-o),this.attr("y",this.start.y-r),this.attr("width",o*2),this.attr("height",r*2);else{const[i,a]=[this.start.x,this.start.x+o*t].sort(ba),[l,s]=[this.start.y,this.start.y+r*n].sort(ba);this.attr("x",i),this.attr("y",l),this.attr("width",a-i),this.attr("height",s-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function kx(e,o){const t=e.x-o.x,r=e.y-o.y;return t*t+r*r}function wx(e,o,t){let r=o.x,n=o.y,i=t.x-r,a=t.y-n;if(i!==0||a!==0){const l=((e.x-r)*i+(e.y-n)*a)/(i*i+a*a);l>1?(r=t.x,n=t.y):l>0&&(r+=i*l,n+=a*l)}return i=e.x-r,a=e.y-n,i*i+a*a}function yx(e,o){let t=e[0];const r=[t];let n;for(let i=1,a=e.length;i<a;i++)n=e[i],kx(n,t)>o&&(r.push(n),t=n);return t!==n&&n&&r.push(n),r}function ds(e,o,t,r,n){let i=r,a=0;for(let l=o+1;l<t;l++){const s=wx(e[l],e[o],e[t]);s>i&&(a=l,i=s)}i>r&&(a-o>1&&ds(e,o,a,r,n),n.push(e[a]),t-a>1&&ds(e,a,t,r,n))}function xx(e,o){const t=e.length-1,r=[e[0]];return ds(e,0,t,o,r),r.push(e[t]),r}function gf(e,o,t=!1){if(e.length<=2)return e;const r=o!==void 0?o*o:1;return e=t?e:yx(e,r),e=xx(e,r),e}var _x=class extends un{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Bh();const o=Dh(this.arrowId,this.brush.color);this.el.appendChild(o)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=gf(this.points,1,!0),this.count=0),this.attr("d",vf(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",vf(gf(this.points,1,!0))),!e.getTotalLength()))}};function Ox(e,o){const t=o.x-e.x,r=o.y-e.y;return{length:Math.sqrt(t**2+r**2),angle:Math.atan2(r,t)}}function mf(e,o,t,r){const n=o||e,i=t||e,a=.2,l=Ox(n,i),s=l.angle+(r?Math.PI:0),c=l.length*a,d=e.x+Math.cos(s)*c,f=e.y+Math.sin(s)*c;return{x:d,y:f}}function Sx(e,o,t){const r=mf(t[o-1],t[o-2],e),n=mf(e,t[o-1],t[o+1],!0);return`C ${r.x.toFixed(zt)},${r.y.toFixed(zt)} ${n.x.toFixed(zt)},${n.y.toFixed(zt)} ${e.x.toFixed(zt)},${e.y.toFixed(zt)}`}function vf(e){return e.reduce((o,t,r,n)=>r===0?`M ${t.x.toFixed(zt)},${t.y.toFixed(zt)}`:`${o} ${Sx(t,r,n)}`,"")}var zx=class extends un{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const o=(t,r)=>{if(t&&t.length)for(let n=0;n<t.length;n++){const i=t[n];if(i.getTotalLength){const a=i.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const s=i.getPointAtLength(a*l/this.pathSubFactor),c=i.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:s.x,x2:c.x,y1:s.y,y2:c.y,segment:l,element:r||i})}}else i.children&&o(i.children,i)}};e&&o(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const o=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,o}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let o=0;o<this.pathFragments.length;o++){const t=this.pathFragments[o],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(t,r)&&(t.element.remove(),e.push(o))}return e.length&&(this.pathFragments=this.pathFragments.filter((o,t)=>!e.includes(t))),e.length>0}lineLineIntersect(e,o){const t=e.x1,r=e.x2,n=o.x1,i=o.x2,a=e.y1,l=e.y2,s=o.y1,c=o.y2,d=(t-r)*(s-c)-(a-l)*(n-i),f=(t*l-a*r)*(n-i)-(t-r)*(n*c-s*i),p=(t*l-a*r)*(s-c)-(a-l)*(n*c-s*i),b=(h,g,m)=>h>=g&&h<=m?!0:h>=m&&h<=g;if(d===0)return!1;{const h={x:f/d,y:p/d};return b(h.x,t,r)&&b(h.y,a,l)&&b(h.x,n,i)&&b(h.y,s,c)}}};function Ex(e){return{draw:new _x(e),stylus:new bx(e),line:new mx(e),rectangle:new vx(e),ellipse:new gx(e),eraseLine:new zx(e)}}var Lx=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=ux(),this._models=Ex(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,o){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const t=this.resolveSelector(o)||this.el,r=this.eventStart.bind(this),n=this.eventMove.bind(this),i=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);t.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",n,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{t.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,o){return this._emitter.on(e,o)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const o=this.model._eventUp(e);o?(o instanceof Element&&o!==this._currentNode&&(this._currentNode=o),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Tx(e){return new Lx(e)}const fs=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],ct=ot("slidev-drawing-enabled",!1),yT=ot("slidev-drawing-pinned",!1),Ax=H(!1),Cx=H(!1),Px=H(!1),ii=H(!1),wr=iw(ot("slidev-drawing-brush",{color:fs[0],size:4,mode:"stylus"})),kf=H("stylus"),Uh=C(()=>Pe.drawings.syncAll||yo.value);let ai=!1;const En=C({get(){return kf.value},set(e){kf.value=e,e==="arrow"?(wr.mode="line",wr.arrowEnd=!0):(wr.mode=e,wr.arrowEnd=!1)}}),Fx=Be({brush:wr,acceptsInputTypes:C(()=>ct.value&&(!Pe.drawings.presenterOnly||yo.value)?void 0:["pen"]),coordinateTransform:!1}),ko=Ca(Tx(Fx));function $x(){ko.clear(),Uh.value&&dh(Ve.value,"")}function fc(){var e;Cx.value=ko.canRedo(),Ax.value=ko.canUndo(),Px.value=!!((e=ko.el)!=null&&e.children.length)}function Ix(e){ai=!0;const o=pa[e||Ve.value];o!=null?ko.load(o):ko.clear(),fc(),ai=!1}ko.on("changed",()=>{if(fc(),!ai){const e=ko.dump(),o=Ve.value;(pa[o]||"")!==e&&Uh.value&&dh(o,ko.dump())}});Wk(e=>{ai=!0,e[Ve.value]!=null&&ko.load(e[Ve.value]||""),ai=!1,fc()});fo(()=>{_e(Ve,()=>{ko.mounted&&Ix()},{immediate:!0})});ko.on("start",()=>ii.value=!0);ko.on("end",()=>ii.value=!1);window.addEventListener("keydown",e=>{if(!ct.value)return;const o=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let t=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ko.redo():ko.undo():e.code==="Escape"?ct.value=!1:e.code==="KeyL"&&o?En.value="line":e.code==="KeyA"&&o?En.value="arrow":e.code==="KeyS"&&o?En.value="stylus":e.code==="KeyR"&&o?En.value="rectangle":e.code==="KeyE"&&o?En.value="ellipse":e.code==="KeyC"&&o?$x():e.code.startsWith("Digit")&&o&&+e.code[5]<=fs.length?wr.color=fs[+e.code[5]-1]:t=!1,t&&(e.preventDefault(),e.stopPropagation())},!1);function Je(...e){return C(()=>e.every(o=>so(o)))}function zo(e){return C(()=>!so(e))}const wf=Xw(),gl=ot("slidev-color-schema","auto"),us=C(()=>Pe.colorSchema!=="auto"),uc=C({get(){return us.value?Pe.colorSchema==="dark":gl.value==="auto"?wf.value:gl.value==="dark"},set(e){us.value||(gl.value=e===wf.value?"auto":e?"dark":"light")}}),Hh=hh(uc);et&&_e(uc,e=>{const o=document.querySelector("html");o.classList.toggle("dark",e),o.classList.toggle("light",!e)},{immediate:!0});const Yi=H(1),Zi=C(()=>Xe.length-1),Co=H(0),pc=H(0);function Nx(){Co.value>Yi.value&&(Co.value-=1)}function Rx(){Co.value<Zi.value&&(Co.value+=1)}function jx(){if(Co.value>Yi.value){let e=Co.value-pc.value;e<Yi.value&&(e=Yi.value),Co.value=e}}function Mx(){if(Co.value<Zi.value){let e=Co.value+pc.value;e>Zi.value&&(e=Zi.value),Co.value=e}}function Kx(){const{escape:e,space:o,shift:t,left:r,right:n,up:i,down:a,enter:l,d:s,g:c,o:d}=Rh;let f=[{name:"next_space",key:Je(o,zo(t)),fn:Yt,autoRepeat:!0},{name:"prev_space",key:Je(o,t),fn:Zt,autoRepeat:!0},{name:"next_right",key:Je(n,zo(t),zo(go)),fn:Yt,autoRepeat:!0},{name:"prev_left",key:Je(r,zo(t),zo(go)),fn:Zt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Yt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Zt,autoRepeat:!0},{name:"next_down",key:Je(a,zo(go)),fn:si,autoRepeat:!0},{name:"prev_up",key:Je(i,zo(go)),fn:()=>ci(!1),autoRepeat:!0},{name:"next_shift",key:Je(n,t),fn:si,autoRepeat:!0},{name:"prev_shift",key:Je(r,t),fn:()=>ci(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(s,zo(ct)),fn:Hh},{name:"toggle_overview",key:Je(d,zo(ct)),fn:Mh},{name:"hide_overview",key:Je(e,zo(ct)),fn:()=>go.value=!1},{name:"goto",key:Je(c,zo(ct)),fn:()=>Gr.value=!Gr.value},{name:"next_overview",key:Je(n,go),fn:Rx},{name:"prev_overview",key:Je(r,go),fn:Nx},{name:"up_overview",key:Je(i,go),fn:jx},{name:"down_overview",key:Je(a,go),fn:Mx},{name:"goto_from_overview",key:Je(l,go),fn:()=>{sn(Co.value),go.value=!1}}];const p=new Set(f.map(h=>h.name));if(f.filter(h=>h.name&&p.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return f}const qh=Je(zo(ex),zo(ox),J1);function Bx(e,o,t=!1){typeof e=="string"&&(e=Rh[e]);const r=Je(e,qh);let n=0,i;const a=()=>{if(clearTimeout(i),!r.value){n=0;return}t&&(i=setTimeout(a,Math.max(1e3-n*250,150)),n++),o()};return _e(r,a,{flush:"sync"})}function Dx(e,o){return Cw(e,t=>{qh.value&&(t.repeat||o())})}function Ux(){const e=Kx();new Map(e.map(t=>[t.key,t])).forEach(t=>{t.fn&&Bx(t.key,t.fn,t.autoRepeat)}),Dx("f",()=>jh.toggle())}const Hx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qx=u("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Vx=[qx];function Wx(e,o){return A(),Y("svg",Hx,Vx)}const Gx={name:"carbon-close",render:Wx};function hc(e,o=""){var n,i;const t=["slidev-page",o],r=(i=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:i.no;return r!=null&&t.push(`slidev-page-${r}`),t.filter(Boolean).join(" ")}const Xx=se({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const o=e;Z(ie);const t=H(),r=sy(t),n=C(()=>o.width?o.width:r.width.value),i=C(()=>o.width?o.width/Vt:r.height.value);o.width&&Fr(()=>{t.value&&(t.value.style.width=`${n.value}px`,t.value.style.height=`${i.value}px`)});const a=C(()=>n.value/i.value),l=C(()=>o.scale&&!ln.value?o.scale:a.value<Vt?n.value/Wt:i.value*Vt/Wt),s=C(()=>({height:`${ac}px`,width:`${Wt}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),c=C(()=>({"select-none":!Pe.selectable,"slidev-code-line-numbers":Pe.lineNumbers}));return Lo(lh,l),(d,f)=>(A(),Y("div",{id:"slide-container",ref_key:"root",ref:t,class:qe(z(c))},[u("div",{id:"slide-content",style:oo(z(s))},[ao(d.$slots,"default")],4),ao(d.$slots,"controls")],2))}});const ae=(e,o)=>{const t=e.__vccOpts||e;for(const[r,n]of o)t[r]=n;return t},Vh=ae(Xx,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),bc=se({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:o}){const t=st(e,"clicks",o),r=st(e,"clicksElements",o),n=st(e,"clicksDisabled",o),i=st(e,"clicksOrderMap",o);r.value.length=0,Lo(Pk,e.route),Lo(Fk,e.context),Lo(Rn,t),Lo(jn,n),Lo(gr,r),Lo(Yl,i)},render(){var e,o;return this.$props.is?Qe(this.$props.is):(o=(e=this.$slots)==null?void 0:e.default)==null?void 0:o.call(e)}}),Yx=["innerHTML"],Zx=se({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return Z(ie),(o,t)=>z(pa)[e.page]?(A(),Y("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:z(pa)[e.page]},null,8,Yx)):we("v-if",!0)}}),Wh=ae(Zx,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Jx=Object.freeze(Object.defineProperty({__proto__:null,default:Wh},Symbol.toStringTag,{value:"Module"})),Qx={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},e2=["onClick"],o2=se({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:o}){const t=e;Z(ie);const r=st(t,"modelValue",o);function n(){r.value=!1}function i(b){sn(b),n()}function a(b){return b===Co.value}const l=ss.smaller("xs"),s=ss.smaller("sm"),c=4*16*2,d=2*16,f=C(()=>l.value?Lr.width.value-c:s.value?(Lr.width.value-c-d)/2:300),p=C(()=>Math.floor((Lr.width.value-c)/(f.value+d)));return Fr(()=>{Co.value=Ve.value,pc.value=p.value}),(b,h)=>{const g=Gx;return A(),Y(Fe,null,[dn(u("div",Qx,[u("div",{class:"grid gap-y-4 gap-x-8 w-full",style:oo(`grid-template-columns: repeat(auto-fit,minmax(${z(f)}px,1fr))`)},[(A(!0),Y(Fe,null,fn(z(Xe).slice(0,-1),(m,k)=>(A(),Y("div",{key:m.path,class:"relative"},[u("div",{class:qe(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(k+1),"border-gray-400":!a(k+1)}]),style:oo(z(lc)),onClick:w=>i(+m.path)},[(A(),oe(Vh,{key:m.path,width:z(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:ne(()=>[X(z(bc),{is:m==null?void 0:m.component,"clicks-disabled":!0,class:qe(z(hc)(m)),route:m,context:"overview"},null,8,["is","class","route"]),X(Wh,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,e2),u("div",{class:"absolute top-0 opacity-50",style:oo(`left: ${z(f)+5}px`)},Jo(k+1),5)]))),128))],4)],512),[[Jp,z(r)]]),z(r)?(A(),Y("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:n},[X(g)])):we("v-if",!0)],64)}}});const t2=ae(o2,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),r2="/presentation/assets/logo-b72bde5d.png",n2={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},i2=se({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:o}){const t=e;Z(ie);const r=st(t,"modelValue",o);function n(){r.value=!1}return(i,a)=>(A(),oe(xp,null,[z(r)?(A(),Y("div",n2,[u("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>n())}),u("div",{class:qe(["m-auto rounded-md bg-main shadow",t.class]),"dark:border":"~ main"},[ao(i.$slots,"default")],2)])):we("v-if",!0)],1024))}}),a2=ae(i2,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),l2={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},s2=["innerHTML"],c2=u("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[u("div",{class:"flex gap-1 children:my-auto"},[u("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),u("img",{class:"w-5 h-5",src:r2,alt:"Slidev"}),u("div",{style:{color:"#2082A6"}},[u("b",null,"Sli"),O("dev ")])])],-1),d2=se({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:o}){const t=e;Z(ie);const r=st(t,"modelValue",o),n=C(()=>typeof Pe.info=="string");return(i,a)=>(A(),oe(a2,{modelValue:z(r),"onUpdate:modelValue":a[0]||(a[0]=l=>$e(r)?r.value=l:null),class:"px-6 py-4"},{default:ne(()=>[u("div",l2,[z(n)?(A(),Y("div",{key:0,class:"mb-4",innerHTML:z(Pe).info},null,8,s2)):we("v-if",!0),c2])]),_:1},8,["modelValue"]))}});const f2=ae(d2,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function Ct(e){return Array.isArray?Array.isArray(e):Yh(e)==="[object Array]"}const u2=1/0;function p2(e){if(typeof e=="string")return e;let o=e+"";return o=="0"&&1/e==-u2?"-0":o}function h2(e){return e==null?"":p2(e)}function dt(e){return typeof e=="string"}function Gh(e){return typeof e=="number"}function b2(e){return e===!0||e===!1||g2(e)&&Yh(e)=="[object Boolean]"}function Xh(e){return typeof e=="object"}function g2(e){return Xh(e)&&e!==null}function To(e){return e!=null}function ml(e){return!e.trim().length}function Yh(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const m2="Incorrect 'index' type",v2=e=>`Invalid value for key ${e}`,k2=e=>`Pattern length exceeds max of ${e}.`,w2=e=>`Missing ${e} property in key`,y2=e=>`Property 'weight' in key '${e}' must be a positive integer`,yf=Object.prototype.hasOwnProperty;class x2{constructor(o){this._keys=[],this._keyMap={};let t=0;o.forEach(r=>{let n=Zh(r);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(r=>{r.weight/=t})}get(o){return this._keyMap[o]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Zh(e){let o=null,t=null,r=null,n=1,i=null;if(dt(e)||Ct(e))r=e,o=xf(e),t=ps(e);else{if(!yf.call(e,"name"))throw new Error(w2("name"));const a=e.name;if(r=a,yf.call(e,"weight")&&(n=e.weight,n<=0))throw new Error(y2(a));o=xf(a),t=ps(a),i=e.getFn}return{path:o,id:t,weight:n,src:r,getFn:i}}function xf(e){return Ct(e)?e:e.split(".")}function ps(e){return Ct(e)?e.join("."):e}function _2(e,o){let t=[],r=!1;const n=(i,a,l)=>{if(To(i))if(!a[l])t.push(i);else{let s=a[l];const c=i[s];if(!To(c))return;if(l===a.length-1&&(dt(c)||Gh(c)||b2(c)))t.push(h2(c));else if(Ct(c)){r=!0;for(let d=0,f=c.length;d<f;d+=1)n(c[d],a,l+1)}else a.length&&n(c,a,l+1)}};return n(e,dt(o)?o.split("."):o,0),r?t:t[0]}const O2={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},S2={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,o)=>e.score===o.score?e.idx<o.idx?-1:1:e.score<o.score?-1:1},z2={location:0,threshold:.6,distance:100},E2={useExtendedSearch:!1,getFn:_2,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...S2,...O2,...z2,...E2};const L2=/[^ ]+/g;function T2(e=1,o=3){const t=new Map,r=Math.pow(10,o);return{get(n){const i=n.match(L2).length;if(t.has(i))return t.get(i);const a=1/Math.pow(i,.5*e),l=parseFloat(Math.round(a*r)/r);return t.set(i,l),l},clear(){t.clear()}}}class gc{constructor({getFn:o=he.getFn,fieldNormWeight:t=he.fieldNormWeight}={}){this.norm=T2(t,3),this.getFn=o,this.isCreated=!1,this.setIndexRecords()}setSources(o=[]){this.docs=o}setIndexRecords(o=[]){this.records=o}setKeys(o=[]){this.keys=o,this._keysMap={},o.forEach((t,r)=>{this._keysMap[t.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,dt(this.docs[0])?this.docs.forEach((o,t)=>{this._addString(o,t)}):this.docs.forEach((o,t)=>{this._addObject(o,t)}),this.norm.clear())}add(o){const t=this.size();dt(o)?this._addString(o,t):this._addObject(o,t)}removeAt(o){this.records.splice(o,1);for(let t=o,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(o,t){return o[this._keysMap[t]]}size(){return this.records.length}_addString(o,t){if(!To(o)||ml(o))return;let r={v:o,i:t,n:this.norm.get(o)};this.records.push(r)}_addObject(o,t){let r={i:t,$:{}};this.keys.forEach((n,i)=>{let a=n.getFn?n.getFn(o):this.getFn(o,n.path);if(To(a)){if(Ct(a)){let l=[];const s=[{nestedArrIndex:-1,value:a}];for(;s.length;){const{nestedArrIndex:c,value:d}=s.pop();if(To(d))if(dt(d)&&!ml(d)){let f={v:d,i:c,n:this.norm.get(d)};l.push(f)}else Ct(d)&&d.forEach((f,p)=>{s.push({nestedArrIndex:p,value:f})})}r.$[i]=l}else if(dt(a)&&!ml(a)){let l={v:a,n:this.norm.get(a)};r.$[i]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Jh(e,o,{getFn:t=he.getFn,fieldNormWeight:r=he.fieldNormWeight}={}){const n=new gc({getFn:t,fieldNormWeight:r});return n.setKeys(e.map(Zh)),n.setSources(o),n.create(),n}function A2(e,{getFn:o=he.getFn,fieldNormWeight:t=he.fieldNormWeight}={}){const{keys:r,records:n}=e,i=new gc({getFn:o,fieldNormWeight:t});return i.setKeys(r),i.setIndexRecords(n),i}function ji(e,{errors:o=0,currentLocation:t=0,expectedLocation:r=0,distance:n=he.distance,ignoreLocation:i=he.ignoreLocation}={}){const a=o/e.length;if(i)return a;const l=Math.abs(r-t);return n?a+l/n:l?1:a}function C2(e=[],o=he.minMatchCharLength){let t=[],r=-1,n=-1,i=0;for(let a=e.length;i<a;i+=1){let l=e[i];l&&r===-1?r=i:!l&&r!==-1&&(n=i-1,n-r+1>=o&&t.push([r,n]),r=-1)}return e[i-1]&&i-r>=o&&t.push([r,i-1]),t}const mr=32;function P2(e,o,t,{location:r=he.location,distance:n=he.distance,threshold:i=he.threshold,findAllMatches:a=he.findAllMatches,minMatchCharLength:l=he.minMatchCharLength,includeMatches:s=he.includeMatches,ignoreLocation:c=he.ignoreLocation}={}){if(o.length>mr)throw new Error(k2(mr));const d=o.length,f=e.length,p=Math.max(0,Math.min(r,f));let b=i,h=p;const g=l>1||s,m=g?Array(f):[];let k;for(;(k=e.indexOf(o,h))>-1;){let $=ji(o,{currentLocation:k,expectedLocation:p,distance:n,ignoreLocation:c});if(b=Math.min($,b),h=k+d,g){let S=0;for(;S<d;)m[k+S]=1,S+=1}}h=-1;let w=[],y=1,x=d+f;const E=1<<d-1;for(let $=0;$<d;$+=1){let S=0,T=x;for(;S<T;)ji(o,{errors:$,currentLocation:p+T,expectedLocation:p,distance:n,ignoreLocation:c})<=b?S=T:x=T,T=Math.floor((x-S)/2+S);x=T;let U=Math.max(1,p-T+1),J=a?f:Math.min(p+T,f)+d,K=Array(J+2);K[J+1]=(1<<$)-1;for(let fe=J;fe>=U;fe-=1){let ke=fe-1,Te=t[e.charAt(ke)];if(g&&(m[ke]=+!!Te),K[fe]=(K[fe+1]<<1|1)&Te,$&&(K[fe]|=(w[fe+1]|w[fe])<<1|1|w[fe+1]),K[fe]&E&&(y=ji(o,{errors:$,currentLocation:ke,expectedLocation:p,distance:n,ignoreLocation:c}),y<=b)){if(b=y,h=ke,h<=p)break;U=Math.max(1,2*p-h)}}if(ji(o,{errors:$+1,currentLocation:p,expectedLocation:p,distance:n,ignoreLocation:c})>b)break;w=K}const P={isMatch:h>=0,score:Math.max(.001,y)};if(g){const $=C2(m,l);$.length?s&&(P.indices=$):P.isMatch=!1}return P}function F2(e){let o={};for(let t=0,r=e.length;t<r;t+=1){const n=e.charAt(t);o[n]=(o[n]||0)|1<<r-t-1}return o}class Qh{constructor(o,{location:t=he.location,threshold:r=he.threshold,distance:n=he.distance,includeMatches:i=he.includeMatches,findAllMatches:a=he.findAllMatches,minMatchCharLength:l=he.minMatchCharLength,isCaseSensitive:s=he.isCaseSensitive,ignoreLocation:c=he.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:n,includeMatches:i,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:s,ignoreLocation:c},this.pattern=s?o:o.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(p,b)=>{this.chunks.push({pattern:p,alphabet:F2(p),startIndex:b})},f=this.pattern.length;if(f>mr){let p=0;const b=f%mr,h=f-b;for(;p<h;)d(this.pattern.substr(p,mr),p),p+=mr;if(b){const g=f-mr;d(this.pattern.substr(g),g)}}else d(this.pattern,0)}searchIn(o){const{isCaseSensitive:t,includeMatches:r}=this.options;if(t||(o=o.toLowerCase()),this.pattern===o){let h={isMatch:!0,score:0};return r&&(h.indices=[[0,o.length-1]]),h}const{location:n,distance:i,threshold:a,findAllMatches:l,minMatchCharLength:s,ignoreLocation:c}=this.options;let d=[],f=0,p=!1;this.chunks.forEach(({pattern:h,alphabet:g,startIndex:m})=>{const{isMatch:k,score:w,indices:y}=P2(o,h,g,{location:n+m,distance:i,threshold:a,findAllMatches:l,minMatchCharLength:s,includeMatches:r,ignoreLocation:c});k&&(p=!0),f+=w,k&&y&&(d=[...d,...y])});let b={isMatch:p,score:p?f/this.chunks.length:1};return p&&r&&(b.indices=d),b}}class nr{constructor(o){this.pattern=o}static isMultiMatch(o){return _f(o,this.multiRegex)}static isSingleMatch(o){return _f(o,this.singleRegex)}search(){}}function _f(e,o){const t=e.match(o);return t?t[1]:null}class $2 extends nr{constructor(o){super(o)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(o){const t=o===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class I2 extends nr{constructor(o){super(o)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(o){const r=o.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,o.length-1]}}}class N2 extends nr{constructor(o){super(o)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(o){const t=o.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class R2 extends nr{constructor(o){super(o)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(o){const t=!o.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,o.length-1]}}}class j2 extends nr{constructor(o){super(o)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(o){const t=o.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[o.length-this.pattern.length,o.length-1]}}}class M2 extends nr{constructor(o){super(o)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(o){const t=!o.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,o.length-1]}}}class eb extends nr{constructor(o,{location:t=he.location,threshold:r=he.threshold,distance:n=he.distance,includeMatches:i=he.includeMatches,findAllMatches:a=he.findAllMatches,minMatchCharLength:l=he.minMatchCharLength,isCaseSensitive:s=he.isCaseSensitive,ignoreLocation:c=he.ignoreLocation}={}){super(o),this._bitapSearch=new Qh(o,{location:t,threshold:r,distance:n,includeMatches:i,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:s,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(o){return this._bitapSearch.searchIn(o)}}class ob extends nr{constructor(o){super(o)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(o){let t=0,r;const n=[],i=this.pattern.length;for(;(r=o.indexOf(this.pattern,t))>-1;)t=r+i,n.push([r,t-1]);const a=!!n.length;return{isMatch:a,score:a?0:1,indices:n}}}const hs=[$2,ob,N2,R2,M2,j2,I2,eb],Of=hs.length,K2=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,B2="|";function D2(e,o={}){return e.split(B2).map(t=>{let r=t.trim().split(K2).filter(i=>i&&!!i.trim()),n=[];for(let i=0,a=r.length;i<a;i+=1){const l=r[i];let s=!1,c=-1;for(;!s&&++c<Of;){const d=hs[c];let f=d.isMultiMatch(l);f&&(n.push(new d(f,o)),s=!0)}if(!s)for(c=-1;++c<Of;){const d=hs[c];let f=d.isSingleMatch(l);if(f){n.push(new d(f,o));break}}}return n})}const U2=new Set([eb.type,ob.type]);class H2{constructor(o,{isCaseSensitive:t=he.isCaseSensitive,includeMatches:r=he.includeMatches,minMatchCharLength:n=he.minMatchCharLength,ignoreLocation:i=he.ignoreLocation,findAllMatches:a=he.findAllMatches,location:l=he.location,threshold:s=he.threshold,distance:c=he.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:r,minMatchCharLength:n,findAllMatches:a,ignoreLocation:i,location:l,threshold:s,distance:c},this.pattern=t?o:o.toLowerCase(),this.query=D2(this.pattern,this.options)}static condition(o,t){return t.useExtendedSearch}searchIn(o){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;o=n?o:o.toLowerCase();let i=0,a=[],l=0;for(let s=0,c=t.length;s<c;s+=1){const d=t[s];a.length=0,i=0;for(let f=0,p=d.length;f<p;f+=1){const b=d[f],{isMatch:h,indices:g,score:m}=b.search(o);if(h){if(i+=1,l+=m,r){const k=b.constructor.type;U2.has(k)?a=[...a,...g]:a.push(g)}}else{l=0,i=0,a.length=0;break}}if(i){let f={isMatch:!0,score:l/i};return r&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const bs=[];function q2(...e){bs.push(...e)}function gs(e,o){for(let t=0,r=bs.length;t<r;t+=1){let n=bs[t];if(n.condition(e,o))return new n(e,o)}return new Qh(e,o)}const ma={AND:"$and",OR:"$or"},ms={PATH:"$path",PATTERN:"$val"},vs=e=>!!(e[ma.AND]||e[ma.OR]),V2=e=>!!e[ms.PATH],W2=e=>!Ct(e)&&Xh(e)&&!vs(e),Sf=e=>({[ma.AND]:Object.keys(e).map(o=>({[o]:e[o]}))});function tb(e,o,{auto:t=!0}={}){const r=n=>{let i=Object.keys(n);const a=V2(n);if(!a&&i.length>1&&!vs(n))return r(Sf(n));if(W2(n)){const s=a?n[ms.PATH]:i[0],c=a?n[ms.PATTERN]:n[s];if(!dt(c))throw new Error(v2(s));const d={keyId:ps(s),pattern:c};return t&&(d.searcher=gs(c,o)),d}let l={children:[],operator:i[0]};return i.forEach(s=>{const c=n[s];Ct(c)&&c.forEach(d=>{l.children.push(r(d))})}),l};return vs(e)||(e=Sf(e)),r(e)}function G2(e,{ignoreFieldNorm:o=he.ignoreFieldNorm}){e.forEach(t=>{let r=1;t.matches.forEach(({key:n,norm:i,score:a})=>{const l=n?n.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(o?1:i))}),t.score=r})}function X2(e,o){const t=e.matches;o.matches=[],To(t)&&t.forEach(r=>{if(!To(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let a={indices:n,value:i};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),o.matches.push(a)})}function Y2(e,o){o.score=e.score}function Z2(e,o,{includeMatches:t=he.includeMatches,includeScore:r=he.includeScore}={}){const n=[];return t&&n.push(X2),r&&n.push(Y2),e.map(i=>{const{idx:a}=i,l={item:o[a],refIndex:a};return n.length&&n.forEach(s=>{s(i,l)}),l})}class pn{constructor(o,t={},r){this.options={...he,...t},this.options.useExtendedSearch,this._keyStore=new x2(this.options.keys),this.setCollection(o,r)}setCollection(o,t){if(this._docs=o,t&&!(t instanceof gc))throw new Error(m2);this._myIndex=t||Jh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(o){To(o)&&(this._docs.push(o),this._myIndex.add(o))}remove(o=()=>!1){const t=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];o(i,r)&&(this.removeAt(r),r-=1,n-=1,t.push(i))}return t}removeAt(o){this._docs.splice(o,1),this._myIndex.removeAt(o)}getIndex(){return this._myIndex}search(o,{limit:t=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:a,ignoreFieldNorm:l}=this.options;let s=dt(o)?dt(this._docs[0])?this._searchStringList(o):this._searchObjectList(o):this._searchLogical(o);return G2(s,{ignoreFieldNorm:l}),i&&s.sort(a),Gh(t)&&t>-1&&(s=s.slice(0,t)),Z2(s,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(o){const t=gs(o,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:a,n:l})=>{if(!To(i))return;const{isMatch:s,score:c,indices:d}=t.searchIn(i);s&&n.push({item:i,idx:a,matches:[{score:c,value:i,norm:l,indices:d}]})}),n}_searchLogical(o){const t=tb(o,this.options),r=(l,s,c)=>{if(!l.children){const{keyId:f,searcher:p}=l,b=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(s,f),searcher:p});return b&&b.length?[{idx:c,item:s,matches:b}]:[]}const d=[];for(let f=0,p=l.children.length;f<p;f+=1){const b=l.children[f],h=r(b,s,c);if(h.length)d.push(...h);else if(l.operator===ma.AND)return[]}return d},n=this._myIndex.records,i={},a=[];return n.forEach(({$:l,i:s})=>{if(To(l)){let c=r(t,l,s);c.length&&(i[s]||(i[s]={idx:s,item:l,matches:[]},a.push(i[s])),c.forEach(({matches:d})=>{i[s].matches.push(...d)}))}}),a}_searchObjectList(o){const t=gs(o,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:a,i:l})=>{if(!To(a))return;let s=[];r.forEach((c,d)=>{s.push(...this._findMatches({key:c,value:a[d],searcher:t}))}),s.length&&i.push({idx:l,item:a,matches:s})}),i}_findMatches({key:o,value:t,searcher:r}){if(!To(t))return[];let n=[];if(Ct(t))t.forEach(({v:i,i:a,n:l})=>{if(!To(i))return;const{isMatch:s,score:c,indices:d}=r.searchIn(i);s&&n.push({score:c,key:o,value:i,idx:a,norm:l,indices:d})});else{const{v:i,n:a}=t,{isMatch:l,score:s,indices:c}=r.searchIn(i);l&&n.push({score:s,key:o,value:i,norm:a,indices:c})}return n}}pn.version="6.6.2";pn.createIndex=Jh;pn.parseIndex=A2;pn.config=he;pn.parseQuery=tb;q2(H2);const J2={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Q2=["value","disabled","onKeydown"],e5=["border","onClick"],o5={"w-4":"","text-right":"",op50:"","text-sm":""},t5=se({__name:"Goto",setup(e){Z(ie);const o=H(),t=H(),r=H(),n=H(),i=H(""),a=H(0);function l(y){return y!=null}const s=C(()=>new pn(Xe.map(y=>{var x;return(x=y.meta)==null?void 0:x.slide}).filter(l),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),c=C(()=>i.value.startsWith("/")?i.value.substring(1):i.value),d=C(()=>s.value.search(c.value).map(y=>y.item)),f=C(()=>!!d.value.length);function p(){if(f.value){const y=d.value.at(a.value||0);y&&sn(y.no)}b()}function b(){i.value="",Gr.value=!1}function h(y){y.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),m()}function g(y){y.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),m()}function m(){var x;const y=(x=n.value)==null?void 0:x[a.value];y&&r.value&&(y.offsetTop+y.offsetHeight>r.value.offsetHeight+r.value.scrollTop?r.value.scrollTo({behavior:"smooth",top:y.offsetTop+y.offsetHeight-r.value.offsetHeight+1}):y.offsetTop<r.value.scrollTop&&r.value.scrollTo({behavior:"smooth",top:y.offsetTop}))}function k(y){a.value=0,i.value=y.target.value}function w(y){sn(y),b()}return _e(Gr,async y=>{var x;y?(i.value="",a.value=0,setTimeout(()=>{var E;return(E=t.value)==null?void 0:E.focus()},0)):(x=t.value)==null||x.blur()}),_e(Xt,()=>{var y;(y=o.value)!=null&&y.contains(Xt.value)||b()}),(y,x)=>(A(),Y("div",{id:"slidev-goto-dialog",ref_key:"container",ref:o,class:qe(["fixed right-5 transition-all",z(Gr)?"top-5":"-top-20"])},[u("div",J2,[u("input",{ref_key:"input",ref:t,value:i.value,type:"text",disabled:!z(Gr),class:qe(["outline-none bg-transparent",{"text-red-400":!z(f)&&i.value}]),placeholder:"Goto...",onKeydown:[Fi(p,["enter"]),Fi(b,["escape"]),Fi(h,["down"]),Fi(g,["up"])],onInput:k},null,42,Q2)]),z(d).length>0?(A(),Y("ul",{key:0,ref_key:"list",ref:r,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(A(!0),Y(Fe,null,fn(z(d),(E,P)=>(A(),Y("li",{ref_for:!0,ref_key:"items",ref:n,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:P===0?"":"t main",class:qe(a.value===P?"bg-active op100":"op80"),onClick:C0($=>w(E.no),["stop"])},[u("div",o5,Jo(E.no),1),O(" "+Jo(E.title),1)],10,e5))),128))],512)):we("v-if",!0)],2))}});const r5=ae(t5,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),n5=se({__name:"Controls",setup(e){Z(ie);const o=pt(),t=pt();return(r,n)=>(A(),Y(Fe,null,[X(t2,{modelValue:z(go),"onUpdate:modelValue":n[0]||(n[0]=i=>$e(go)?go.value=i:null)},null,8,["modelValue"]),X(r5),z(o)?(A(),oe(z(o),{key:0})):we("v-if",!0),z(t)?(A(),oe(z(t),{key:1,modelValue:z(hl),"onUpdate:modelValue":n[1]||(n[1]=i=>$e(hl)?hl.value=i:null)},null,8,["modelValue"])):we("v-if",!0),z(Pe).info?(A(),oe(f2,{key:2,modelValue:z(Bn),"onUpdate:modelValue":n[2]||(n[2]=i=>$e(Bn)?Bn.value=i:null)},null,8,["modelValue"])):we("v-if",!0)],64))}}),i5=ae(n5,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),a5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l5=u("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),s5=[l5];function c5(e,o){return A(),Y("svg",a5,s5)}const d5={name:"carbon-settings-adjust",render:c5},f5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u5=u("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),p5=u("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),h5=[u5,p5];function b5(e,o){return A(),Y("svg",f5,h5)}const g5={name:"carbon-information",render:b5},m5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v5=u("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),k5=[v5];function w5(e,o){return A(),Y("svg",m5,k5)}const y5={name:"carbon-download",render:w5},x5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_5=u("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),O5=u("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),S5=[_5,O5];function z5(e,o){return A(),Y("svg",x5,S5)}const E5={name:"carbon-user-speaker",render:z5},L5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T5=u("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),A5=u("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),C5=[T5,A5];function P5(e,o){return A(),Y("svg",L5,C5)}const F5={name:"carbon-presentation-file",render:P5},$5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I5=u("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),N5=[I5];function R5(e,o){return A(),Y("svg",$5,N5)}const j5={name:"carbon-pen",render:R5},M5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},K5=u("g",{fill:"currentColor"},[u("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),u("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),B5=[K5];function D5(e,o){return A(),Y("svg",M5,B5)}const U5={name:"ph-cursor-duotone",render:D5},H5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},q5=u("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),V5=[q5];function W5(e,o){return A(),Y("svg",H5,V5)}const rb={name:"ph-cursor-fill",render:W5},G5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X5=u("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Y5=[X5];function Z5(e,o){return A(),Y("svg",G5,Y5)}const J5={name:"carbon-sun",render:Z5},Q5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e_=u("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),o_=[e_];function t_(e,o){return A(),Y("svg",Q5,o_)}const r_={name:"carbon-moon",render:t_},n_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i_=u("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),a_=[i_];function l_(e,o){return A(),Y("svg",n_,a_)}const s_={name:"carbon-apps",render:l_},c_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d_=u("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),f_=[d_];function u_(e,o){return A(),Y("svg",c_,f_)}const p_={name:"carbon-arrow-right",render:u_},h_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},b_=u("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),g_=[b_];function m_(e,o){return A(),Y("svg",h_,g_)}const v_={name:"carbon-arrow-left",render:m_},k_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w_=u("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),y_=[w_];function x_(e,o){return A(),Y("svg",k_,y_)}const __={name:"carbon-maximize",render:x_},O_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S_=u("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),z_=[S_];function E_(e,o){return A(),Y("svg",O_,z_)}const L_={name:"carbon-minimize",render:E_},T_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A_=u("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),C_=[A_];function P_(e,o){return A(),Y("svg",T_,C_)}const F_={name:"carbon-checkmark",render:P_},$_={class:"select-list"},I_={class:"title"},N_={class:"items"},R_=["onClick"],j_=se({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:o}){const t=e;Z(ie);const r=st(t,"modelValue",o,{passive:!0});return(n,i)=>{const a=F_;return A(),Y("div",$_,[u("div",I_,Jo(e.title),1),u("div",N_,[(A(!0),Y(Fe,null,fn(e.items,l=>(A(),Y("div",{key:l.value,class:qe(["item",{active:z(r)===l.value}]),onClick:()=>{var s;r.value=l.value,(s=l.onClick)==null||s.call(l)}},[X(a,{class:qe(["text-green-500",{"opacity-0":z(r)!==l.value}])},null,8,["class"]),O(" "+Jo(l.display||l.value),1)],10,R_))),128))])])}}});const M_=ae(j_,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),K_={class:"text-sm"},B_=se({__name:"Settings",setup(e){Z(ie);const o=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,r)=>(A(),Y("div",K_,[X(M_,{modelValue:z(Xi),"onUpdate:modelValue":r[0]||(r[0]=n=>$e(Xi)?Xi.value=n:null),title:"Scale",items:o},null,8,["modelValue"])]))}}),D_=ae(B_,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),U_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},H_=se({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:o}){const t=e;Z(ie);const r=st(t,"modelValue",o,{passive:!0}),n=H();return Tw(n,()=>{r.value=!1}),(i,a)=>(A(),Y("div",{ref_key:"el",ref:n,class:"flex relative"},[u("button",{class:qe({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>r.value=!z(r))},[ao(i.$slots,"button",{class:qe({disabled:e.disabled})})],2),(A(),oe(xp,null,[z(r)?(A(),Y("div",U_,[ao(i.$slots,"menu")])):we("v-if",!0)],1024))],512))}}),q_=ae(H_,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),V_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},W_={__name:"VerticalDivider",setup(e){return Z(ie),(o,t)=>(A(),Y("div",V_))}},Mi=ae(W_,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),G_={render(){return[]}},X_={class:"slidev-icon-btn"},Y_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Z_={class:"my-auto"},J_={class:"opacity-50"},Q_=se({__name:"NavControls",props:{persist:{default:!1}},setup(e){const o=e;Z(ie);const t=ss.smaller("md"),{isFullscreen:r,toggle:n}=jh,i=C(()=>ws.value?`?password=${ws.value}`:""),a=C(()=>`/presenter/${Ve.value}${i.value}`),l=C(()=>`/${Ve.value}${i.value}`),s=H();function c(){s.value&&Xt.value&&s.value.contains(Xt.value)&&Xt.value.blur()}const d=C(()=>o.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=pt(),p=pt();return Gt(()=>import("./DrawingControls-37ec2b0a.js"),[]).then(b=>p.value=b.default),(b,h)=>{const g=L_,m=__,k=v_,w=p_,y=s_,x=r_,E=J5,P=rb,$=U5,S=j5,T=F5,U=sa("RouterLink"),J=E5,K=y5,ge=g5,fe=d5;return A(),Y("nav",{ref_key:"root",ref:s,class:"flex flex-col"},[u("div",{class:qe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",z(d)]),onMouseleave:c},[z(Ot)?we("v-if",!0):(A(),Y("button",{key:0,class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...ke)=>z(n)&&z(n)(...ke))},[z(r)?(A(),oe(g,{key:0})):(A(),oe(m,{key:1}))])),u("button",{class:qe(["slidev-icon-btn",{disabled:!z(hS)}]),onClick:h[1]||(h[1]=(...ke)=>z(Zt)&&z(Zt)(...ke))},[X(k)],2),u("button",{class:qe(["slidev-icon-btn",{disabled:!z(pS)}]),title:"Next",onClick:h[2]||(h[2]=(...ke)=>z(Yt)&&z(Yt)(...ke))},[X(w)],2),z(Ot)?we("v-if",!0):(A(),Y("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=ke=>z(Mh)())},[X(y)])),z(us)?we("v-if",!0):(A(),Y("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=ke=>z(Hh)())},[z(uc)?(A(),oe(x,{key:0})):(A(),oe(E,{key:1}))])),X(Mi),z(Ot)?we("v-if",!0):(A(),Y(Fe,{key:3},[!z(yo)&&!z(t)&&z(f)?(A(),Y(Fe,{key:0},[X(z(f)),X(Mi)],64)):we("v-if",!0),z(yo)?(A(),Y("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=ke=>bl.value=!z(bl))},[z(bl)?(A(),oe(P,{key:0})):(A(),oe($,{key:1,class:"opacity-50"}))])):we("v-if",!0)],64)),(!z(Pe).drawings.presenterOnly||z(yo))&&!z(Ot)?(A(),Y(Fe,{key:4},[u("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=ke=>ct.value=!z(ct))},[X(S),z(ct)?(A(),Y("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:oo({background:z(wr).color})},null,4)):we("v-if",!0)]),X(Mi)],64)):we("v-if",!0),z(Ot)?we("v-if",!0):(A(),Y(Fe,{key:5},[z(yo)?(A(),oe(U,{key:0,to:z(l),class:"slidev-icon-btn",title:"Play Mode"},{default:ne(()=>[X(T)]),_:1},8,["to"])):we("v-if",!0),z(sS)?(A(),oe(U,{key:1,to:z(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:ne(()=>[X(J)]),_:1},8,["to"])):we("v-if",!0),we("v-if",!0)],64)),(A(),Y(Fe,{key:6},[z(Pe).download?(A(),Y("button",{key:0,class:"slidev-icon-btn",onClick:h[8]||(h[8]=(...ke)=>z(ys)&&z(ys)(...ke))},[X(K)])):we("v-if",!0)],64)),!z(yo)&&z(Pe).info&&!z(Ot)?(A(),Y("button",{key:7,class:"slidev-icon-btn",onClick:h[9]||(h[9]=ke=>Bn.value=!z(Bn))},[X(ge)])):we("v-if",!0),!z(yo)&&!z(Ot)?(A(),oe(q_,{key:8},{button:ne(()=>[u("button",X_,[X(fe)])]),menu:ne(()=>[X(D_)]),_:1})):we("v-if",!0),z(Ot)?we("v-if",!0):(A(),oe(Mi,{key:9})),u("div",Y_,[u("div",Z_,[O(Jo(z(Ve))+" ",1),u("span",J_,"/ "+Jo(z(cS)),1)])]),X(z(G_))],34)],512)}}}),e4=ae(Q_,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),nb={render(){return[]}},ib={render(){return[]}},o4={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},t4=se({__name:"PresenterMouse",setup(e){return Z(ie),(o,t)=>{const r=rb;return z(dl).cursor?(A(),Y("div",o4,[X(r,{class:"absolute",style:oo({left:`${z(dl).cursor.x}%`,top:`${z(dl).cursor.y}%`})},null,8,["style"])])):we("v-if",!0)}}}),r4=ae(t4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),n4=se({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){Z(ie),_e(mo,()=>{var r,n;(r=mo.value)!=null&&r.meta&&mo.value.meta.preload!==!1&&(mo.value.meta.__preloaded=!0),(n=vl.value)!=null&&n.meta&&vl.value.meta.preload!==!1&&(vl.value.meta.__preloaded=!0)},{immediate:!0});const o=pt();Gt(()=>import("./DrawingLayer-6a6ccf43.js"),[]).then(r=>o.value=r.default);const t=C(()=>Xe.filter(r=>{var n;return((n=r.meta)==null?void 0:n.__preloaded)||r===mo.value}));return(r,n)=>(A(),Y(Fe,null,[we(" Global Bottom "),X(z(ib)),we(" Slides "),X(O0,tn(z(mS),{id:"slideshow",tag:"div"}),{default:ne(()=>[(A(!0),Y(Fe,null,fn(z(t),i=>{var a;return dn((A(),oe(z(bc),{key:i.path,is:i==null?void 0:i.component,clicks:i===z(mo)?z(Ko):0,"clicks-elements":((a=i.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:qe(z(hc)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Jp,i===z(mo)]])}),128))]),_:1},16),we(" Global Top "),X(z(nb)),z(o)?(A(),oe(z(o),{key:0})):we("v-if",!0),z(yo)?we("v-if",!0):(A(),oe(r4,{key:1}))],64))}});const i4=ae(n4,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),a4=se({__name:"PrintStyle",setup(e){Z(ie);function o(t,{slots:r}){if(r.default)return Qe("style",r.default())}return(t,r)=>(A(),oe(o,null,{default:ne(()=>[O(" @page { size: "+Jo(z(Wt))+"px "+Jo(z(ac))+"px; margin: 0px; } ",1)]),_:1}))}}),ab=ae(a4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),l4=se({__name:"Play",setup(e){Z(ie),Ux();const o=H();function t(i){var a;df.value||((a=i.target)==null?void 0:a.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?Yt():Zt())}vS(o);const r=C(()=>Q1.value||df.value);pt();const n=pt();return Gt(()=>import("./DrawingControls-37ec2b0a.js"),[]).then(i=>n.value=i.default),(i,a)=>(A(),Y(Fe,null,[z(ln)?(A(),oe(ab,{key:0})):we("v-if",!0),u("div",{id:"page-root",ref_key:"root",ref:o,class:"grid grid-cols-[1fr_max-content]",style:oo(z(lc))},[X(Vh,{class:"w-full h-full",style:oo({background:"var(--slidev-slide-container-background, black)"}),width:z(ln)?z(Lr).width.value:void 0,scale:z(Xi),onPointerdown:t},{default:ne(()=>[X(i4,{context:"slide"})]),controls:ne(()=>[u("div",{class:qe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[z(r)?"opacity-100 right-0":"opacity-0 p-2",z(ii)?"pointer-events-none":""]])},[X(e4,{class:"m-auto",persist:z(r)},null,8,["persist"])],2),!z(Pe).drawings.presenterOnly&&!z(Ot)&&z(n)?(A(),oe(z(n),{key:0,class:"ml-0"})):we("v-if",!0)]),_:1},8,["style","width","scale"]),we("v-if",!0)],4),X(i5)],64))}}),s4=ae(l4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function lb(e){return typeof e>"u"||e===null}function c4(e){return typeof e=="object"&&e!==null}function d4(e){return Array.isArray(e)?e:lb(e)?[]:[e]}function f4(e,o){var t,r,n,i;if(o)for(i=Object.keys(o),t=0,r=i.length;t<r;t+=1)n=i[t],e[n]=o[n];return e}function u4(e,o){var t="",r;for(r=0;r<o;r+=1)t+=e;return t}function p4(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var h4=lb,b4=c4,g4=d4,m4=u4,v4=p4,k4=f4,mc={isNothing:h4,isObject:b4,toArray:g4,repeat:m4,isNegativeZero:v4,extend:k4};function sb(e,o){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!o&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function li(e,o){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=o,this.message=sb(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}li.prototype=Object.create(Error.prototype);li.prototype.constructor=li;li.prototype.toString=function(o){return this.name+": "+sb(this,o)};var vr=li,w4=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],y4=["scalar","sequence","mapping"];function x4(e){var o={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){o[String(r)]=t})}),o}function _4(e,o){if(o=o||{},Object.keys(o).forEach(function(t){if(w4.indexOf(t)===-1)throw new vr('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=o,this.tag=e,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(t){return t},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.representName=o.representName||null,this.defaultStyle=o.defaultStyle||null,this.multi=o.multi||!1,this.styleAliases=x4(o.styleAliases||null),y4.indexOf(this.kind)===-1)throw new vr('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var uo=_4;function zf(e,o){var t=[];return e[o].forEach(function(r){var n=t.length;t.forEach(function(i,a){i.tag===r.tag&&i.kind===r.kind&&i.multi===r.multi&&(n=a)}),t[n]=r}),t}function O4(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},o,t;function r(n){n.multi?(e.multi[n.kind].push(n),e.multi.fallback.push(n)):e[n.kind][n.tag]=e.fallback[n.tag]=n}for(o=0,t=arguments.length;o<t;o+=1)arguments[o].forEach(r);return e}function ks(e){return this.extend(e)}ks.prototype.extend=function(o){var t=[],r=[];if(o instanceof uo)r.push(o);else if(Array.isArray(o))r=r.concat(o);else if(o&&(Array.isArray(o.implicit)||Array.isArray(o.explicit)))o.implicit&&(t=t.concat(o.implicit)),o.explicit&&(r=r.concat(o.explicit));else throw new vr("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(i){if(!(i instanceof uo))throw new vr("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new vr("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new vr("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(i){if(!(i instanceof uo))throw new vr("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(ks.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=zf(n,"implicit"),n.compiledExplicit=zf(n,"explicit"),n.compiledTypeMap=O4(n.compiledImplicit,n.compiledExplicit),n};var S4=ks,z4=new uo("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),E4=new uo("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),L4=new uo("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),T4=new S4({explicit:[z4,E4,L4]});function A4(e){if(e===null)return!0;var o=e.length;return o===1&&e==="~"||o===4&&(e==="null"||e==="Null"||e==="NULL")}function C4(){return null}function P4(e){return e===null}var F4=new uo("tag:yaml.org,2002:null",{kind:"scalar",resolve:A4,construct:C4,predicate:P4,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function $4(e){if(e===null)return!1;var o=e.length;return o===4&&(e==="true"||e==="True"||e==="TRUE")||o===5&&(e==="false"||e==="False"||e==="FALSE")}function I4(e){return e==="true"||e==="True"||e==="TRUE"}function N4(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var R4=new uo("tag:yaml.org,2002:bool",{kind:"scalar",resolve:$4,construct:I4,predicate:N4,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function j4(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function M4(e){return 48<=e&&e<=55}function K4(e){return 48<=e&&e<=57}function B4(e){if(e===null)return!1;var o=e.length,t=0,r=!1,n;if(!o)return!1;if(n=e[t],(n==="-"||n==="+")&&(n=e[++t]),n==="0"){if(t+1===o)return!0;if(n=e[++t],n==="b"){for(t++;t<o;t++)if(n=e[t],n!=="_"){if(n!=="0"&&n!=="1")return!1;r=!0}return r&&n!=="_"}if(n==="x"){for(t++;t<o;t++)if(n=e[t],n!=="_"){if(!j4(e.charCodeAt(t)))return!1;r=!0}return r&&n!=="_"}if(n==="o"){for(t++;t<o;t++)if(n=e[t],n!=="_"){if(!M4(e.charCodeAt(t)))return!1;r=!0}return r&&n!=="_"}}if(n==="_")return!1;for(;t<o;t++)if(n=e[t],n!=="_"){if(!K4(e.charCodeAt(t)))return!1;r=!0}return!(!r||n==="_")}function D4(e){var o=e,t=1,r;if(o.indexOf("_")!==-1&&(o=o.replace(/_/g,"")),r=o[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),o=o.slice(1),r=o[0]),o==="0")return 0;if(r==="0"){if(o[1]==="b")return t*parseInt(o.slice(2),2);if(o[1]==="x")return t*parseInt(o.slice(2),16);if(o[1]==="o")return t*parseInt(o.slice(2),8)}return t*parseInt(o,10)}function U4(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!mc.isNegativeZero(e)}var H4=new uo("tag:yaml.org,2002:int",{kind:"scalar",resolve:B4,construct:D4,predicate:U4,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),q4=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function V4(e){return!(e===null||!q4.test(e)||e[e.length-1]==="_")}function W4(e){var o,t;return o=e.replace(/_/g,"").toLowerCase(),t=o[0]==="-"?-1:1,"+-".indexOf(o[0])>=0&&(o=o.slice(1)),o===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:o===".nan"?NaN:t*parseFloat(o,10)}var G4=/^[-+]?[0-9]+e/;function X4(e,o){var t;if(isNaN(e))switch(o){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(o){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(o){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(mc.isNegativeZero(e))return"-0.0";return t=e.toString(10),G4.test(t)?t.replace("e",".e"):t}function Y4(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||mc.isNegativeZero(e))}var Z4=new uo("tag:yaml.org,2002:float",{kind:"scalar",resolve:V4,construct:W4,predicate:Y4,represent:X4,defaultStyle:"lowercase"}),J4=T4.extend({implicit:[F4,R4,H4,Z4]}),Q4=J4,cb=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),db=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function e3(e){return e===null?!1:cb.exec(e)!==null||db.exec(e)!==null}function o3(e){var o,t,r,n,i,a,l,s=0,c=null,d,f,p;if(o=cb.exec(e),o===null&&(o=db.exec(e)),o===null)throw new Error("Date resolve error");if(t=+o[1],r=+o[2]-1,n=+o[3],!o[4])return new Date(Date.UTC(t,r,n));if(i=+o[4],a=+o[5],l=+o[6],o[7]){for(s=o[7].slice(0,3);s.length<3;)s+="0";s=+s}return o[9]&&(d=+o[10],f=+(o[11]||0),c=(d*60+f)*6e4,o[9]==="-"&&(c=-c)),p=new Date(Date.UTC(t,r,n,i,a,l,s)),c&&p.setTime(p.getTime()-c),p}function t3(e){return e.toISOString()}var r3=new uo("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:e3,construct:o3,instanceOf:Date,represent:t3});function n3(e){return e==="<<"||e===null}var i3=new uo("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n3}),vc=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function a3(e){if(e===null)return!1;var o,t,r=0,n=e.length,i=vc;for(t=0;t<n;t++)if(o=i.indexOf(e.charAt(t)),!(o>64)){if(o<0)return!1;r+=6}return r%8===0}function l3(e){var o,t,r=e.replace(/[\r\n=]/g,""),n=r.length,i=vc,a=0,l=[];for(o=0;o<n;o++)o%4===0&&o&&(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)),a=a<<6|i.indexOf(r.charAt(o));return t=n%4*6,t===0?(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)):t===18?(l.push(a>>10&255),l.push(a>>2&255)):t===12&&l.push(a>>4&255),new Uint8Array(l)}function s3(e){var o="",t=0,r,n,i=e.length,a=vc;for(r=0;r<i;r++)r%3===0&&r&&(o+=a[t>>18&63],o+=a[t>>12&63],o+=a[t>>6&63],o+=a[t&63]),t=(t<<8)+e[r];return n=i%3,n===0?(o+=a[t>>18&63],o+=a[t>>12&63],o+=a[t>>6&63],o+=a[t&63]):n===2?(o+=a[t>>10&63],o+=a[t>>4&63],o+=a[t<<2&63],o+=a[64]):n===1&&(o+=a[t>>2&63],o+=a[t<<4&63],o+=a[64],o+=a[64]),o}function c3(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var d3=new uo("tag:yaml.org,2002:binary",{kind:"scalar",resolve:a3,construct:l3,predicate:c3,represent:s3}),f3=Object.prototype.hasOwnProperty,u3=Object.prototype.toString;function p3(e){if(e===null)return!0;var o=[],t,r,n,i,a,l=e;for(t=0,r=l.length;t<r;t+=1){if(n=l[t],a=!1,u3.call(n)!=="[object Object]")return!1;for(i in n)if(f3.call(n,i))if(!a)a=!0;else return!1;if(!a)return!1;if(o.indexOf(i)===-1)o.push(i);else return!1}return!0}function h3(e){return e!==null?e:[]}var b3=new uo("tag:yaml.org,2002:omap",{kind:"sequence",resolve:p3,construct:h3}),g3=Object.prototype.toString;function m3(e){if(e===null)return!0;var o,t,r,n,i,a=e;for(i=new Array(a.length),o=0,t=a.length;o<t;o+=1){if(r=a[o],g3.call(r)!=="[object Object]"||(n=Object.keys(r),n.length!==1))return!1;i[o]=[n[0],r[n[0]]]}return!0}function v3(e){if(e===null)return[];var o,t,r,n,i,a=e;for(i=new Array(a.length),o=0,t=a.length;o<t;o+=1)r=a[o],n=Object.keys(r),i[o]=[n[0],r[n[0]]];return i}var k3=new uo("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:m3,construct:v3}),w3=Object.prototype.hasOwnProperty;function y3(e){if(e===null)return!0;var o,t=e;for(o in t)if(w3.call(t,o)&&t[o]!==null)return!1;return!0}function x3(e){return e!==null?e:{}}var _3=new uo("tag:yaml.org,2002:set",{kind:"mapping",resolve:y3,construct:x3});Q4.extend({implicit:[r3,i3],explicit:[d3,b3,k3,_3]});function Ef(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var O3=new Array(256),S3=new Array(256);for(var Br=0;Br<256;Br++)O3[Br]=Ef(Br)?1:0,S3[Br]=Ef(Br);function z3(e){return Array.from(new Set(e))}function Lf(...e){let o,t,r;e.length===1?(o=0,r=1,[t]=e):[o,t,r=1]=e;const n=[];let i=o;for(;i<t;)n.push(i),i+=r||1;return n}function fb(e,o){if(!o||o==="all"||o==="*")return Lf(1,e+1);const t=[];for(const r of o.split(/[,;]/g))if(!r.includes("-"))t.push(+r);else{const[n,i]=r.split("-",2);t.push(...Lf(+n,i?+i+1:e+1))}return z3(t).filter(r=>r<=e).sort((r,n)=>r-n)}function ub(e){const o=C(()=>e.value.path),t=C(()=>Xe.length-1),r=C(()=>parseInt(o.value.split(/\//g).slice(-1)[0])||1),n=C(()=>Ha(r.value)),i=C(()=>Xe.find(p=>p.path===`${r.value}`)),a=C(()=>{var p,b,h;return(h=(b=(p=i.value)==null?void 0:p.meta)==null?void 0:b.slide)==null?void 0:h.id}),l=C(()=>{var p,b;return((b=(p=i.value)==null?void 0:p.meta)==null?void 0:b.layout)||(r.value===1?"cover":"default")}),s=C(()=>Xe.find(p=>p.path===`${Math.min(Xe.length,r.value+1)}`)),c=C(()=>Xe.filter(p=>{var b,h;return(h=(b=p.meta)==null?void 0:b.slide)==null?void 0:h.title}).reduce((p,b)=>(wc(p,b),p),[])),d=C(()=>yc(c.value,i.value)),f=C(()=>xc(d.value));return{route:e,path:o,total:t,currentPage:r,currentPath:n,currentRoute:i,currentSlideId:a,currentLayout:l,nextRoute:s,rawTree:c,treeWithActiveStatuses:d,tree:f,downloadPDF:ys,next:Yt,nextSlide:si,openInEditor:kS,prev:Zt,prevSlide:ci}}function pb(e,o,t){const r=H(0);fo(()=>{_o.afterEach(async()=>{await fo(),r.value+=1})});const n=C(()=>{var s,c;return r.value,((c=(s=o.value)==null?void 0:s.meta)==null?void 0:c.__clicksElements)||[]}),i=C(()=>{var s,c;return+(((c=(s=o.value)==null?void 0:s.meta)==null?void 0:c.clicks)??n.value.length)}),a=C(()=>t.value<Xe.length-1||e.value<i.value),l=C(()=>t.value>1||e.value>0);return{clicks:e,clicksElements:n,clicksTotal:i,hasNext:a,hasPrev:l}}const E3=["id"],L3=se({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:o}){const t=e,r=st(t,"clicksElements",o),n=C(()=>({height:`${ac}px`,width:`${Wt}px`})),i=pt();Gt(()=>Promise.resolve().then(()=>Jx),void 0).then(c=>i.value=c.default);const a=C(()=>t.clicks),l=pb(a,t.nav.currentRoute,t.nav.currentPage),s=C(()=>`${t.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Lo(ie,Be({nav:{...t.nav,...l},configs:Pe,themeConfigs:C(()=>Pe.themeConfig)})),(c,d)=>{var f;return A(),Y("div",{id:z(s),class:"print-slide-container",style:oo(z(n))},[X(z(ib)),X(z(bc),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":z(r),"onUpdate:clicksElements":d[0]||(d[0]=p=>$e(r)?r.value=p:null),clicks:z(a),"clicks-disabled":!1,class:qe(z(hc)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),z(i)?(A(),oe(z(i),{key:0,page:+e.route.path},null,8,["page"])):we("v-if",!0),X(z(nb))],12,E3)}}}),Tf=ae(L3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),T3=se({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var i;const o=e;Z(ie);const t=H(((i=o.route.meta)==null?void 0:i.__clicksElements)||[]),r=C(()=>o.route),n=ub(r);return(a,l)=>(A(),Y(Fe,null,[X(Tf,{"clicks-elements":t.value,"onUpdate:clicksElements":l[0]||(l[0]=s=>t.value=s),clicks:0,nav:z(n),route:z(r)},null,8,["clicks-elements","nav","route"]),z(Dn)?we("v-if",!0):(A(!0),Y(Fe,{key:0},fn(t.value.length,s=>(A(),oe(Tf,{key:s,clicks:s,nav:z(n),route:z(r)},null,8,["clicks","nav","route"]))),128))],64))}}),A3=ae(T3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),C3={id:"print-content"},P3=se({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const o=e;Z(ie);const t=C(()=>o.width),r=C(()=>o.width/Vt),n=C(()=>t.value/r.value),i=C(()=>n.value<Vt?t.value/Wt:r.value*Vt/Wt);let a=Xe.slice(0,-1);Do.value.query.range&&(a=fb(a.length,Do.value.query.range).map(c=>a[c-1]));const l=C(()=>({"select-none":!Pe.selectable,"slidev-code-line-numbers":Pe.lineNumbers}));return Lo(lh,i),(s,c)=>(A(),Y("div",{id:"print-container",class:qe(z(l))},[u("div",C3,[(A(!0),Y(Fe,null,fn(z(a),d=>(A(),oe(A3,{key:d.path,route:d},null,8,["route"]))),128))]),ao(s.$slots,"controls")],2))}});const F3=ae(P3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),$3=se({__name:"Print",setup(e){return Z(ie),Fr(()=>{ln?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,t)=>(A(),Y(Fe,null,[z(ln)?(A(),oe(ab,{key:0})):we("v-if",!0),u("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:oo(z(lc))},[X(F3,{class:"w-full h-full",style:oo({background:"var(--slidev-slide-container-background, black)"}),width:z(Lr).width.value},null,8,["style","width"])],4)],64))}});const I3=ae($3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const N3={class:"slidev-layout end"},R3={__name:"end",setup(e){return Z(ie),(o,t)=>(A(),Y("div",N3," END "))}},j3=ae(R3,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function M3(e){return e.startsWith("/")?"/presentation"+e.slice(1):e}const K3={key:0},B3=["src"],D3=se({__name:"LayoutHeader",props:{logoHeader:{type:String}},setup(e){const o=e;Z(ie);const t=C(()=>M3(o.logoHeader));return(r,n)=>e.logoHeader?(A(),Y("header",K3,[u("img",{src:z(t),width:"60",height:"60",class:"object-contain"},null,8,B3)])):we("v-if",!0)}}),Af=ae(D3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/components/LayoutHeader.vue"]]),U3={key:0,class:"mt-auto grid grid-cols-3 justify-between w-full text-gray-500 dark:text-white"},H3=u("small",{class:"text-center"},[u("strong",null,"Ko"),O("mponenten-Bib"),u("strong",null,"li"),O("othek für die "),u("strong",null,"B"),O("ar"),u("strong",null,"ri"),O("erefreiheit")],-1),q3={class:"text-right"},V3=se({__name:"LayoutFooter",props:{website:{type:String},middle:{type:String},handle:{type:String}},setup(e){return Z(ie),(o,t)=>e.website||e.handle?(A(),Y("footer",U3,[u("small",null,Jo(Intl.DateTimeFormat("de-DE",{month:"long",day:"2-digit",year:"numeric"}).format(Date.now())),1),H3,u("small",q3,Jo(e.handle),1)])):we("v-if",!0)}}),Cf=ae(V3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/components/LayoutFooter.vue"]]),W3={class:"bg-main slidev-layout"},G3={class:"my-auto"},X3=se({__name:"default",props:{logoHeader:{type:String},website:{type:String},handle:{type:String}},setup(e){return Z(ie),se({LayoutHeader:Af,LayoutFooter:Cf}),(o,t)=>(A(),Y("div",W3,[X(Af,{logoHeader:e.logoHeader},null,8,["logoHeader"]),u("div",G3,[ao(o.$slots,"default")]),X(Cf,{website:e.website,handle:e.handle},null,8,["website","handle"])]))}}),no=ae(X3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/layouts/default.vue"]]),Y3=se({__name:"cover",setup(e){return Z(ie),se({Default:no}),(o,t)=>(A(),oe(no,{class:"cover"},{default:ne(()=>[ao(o.$slots,"default")]),_:3}))}}),Z3=ae(Y3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/layouts/cover.vue"]]),J3=u("kol-logo",{_org:"ITZBund",class:"m-auto pl-40 block w-140"},null,-1),Q3={__name:"1",setup(e){const o={theme:"./theme",colorSchema:"light",highlighter:"shiki",lineNumbers:!0,transition:"fade",info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss"};return Z(ie),(t,r)=>(A(),oe(Z3,Ye(We(o)),{default:ne(()=>[J3]),_:1},16))}},eO=ae(Q3,[["__file","/@slidev/slides/1.md"]]),oO={class:"flex flex-col items-center justify-center text-center"},tO=se({__name:"center",setup(e){return Z(ie),se({Default:no}),(o,t)=>(A(),oe(no,{class:"center"},{default:ne(()=>[u("div",oO,[ao(o.$slots,"default")])]),_:3}))}}),an=ae(tO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/layouts/center.vue"]]),rO=u("p",null,[u("button",{class:"border-1 mb-30 h-4 w-4 border-gray-700 rounded shadow bg-gray-100 p-1 hover:outline"},[u("i",{class:"absolute -pl fa-solid fa-arrow-pointer"})])],-1),nO=u("div",{class:"text-left border-l-3 border-gray-400 p-2 bg-gray-100"},[u("h3",null,"Größe der Schaltfläche"),O(" Verwende Deine andere Hand, um mit der Maus den Schalter in der Mitte der Folie zu klicken. ")],-1),iO={__name:"2",setup(e){const o={layout:"center"};return Z(ie),(t,r)=>(A(),oe(an,Ye(We(o)),{default:ne(()=>[rO,nO]),_:1},16))}},aO=ae(iO,[["__file","/@slidev/slides/2.md"]]),lO="/presentation/assets/torte-df92463d.png",sO=u("img",{src:lO,class:"block w-50 mb-15"},null,-1),cO=u("div",{class:"text-left border-l-3 border-gray-400 p-2 bg-gray-100"},[u("h3",null,"Ohne Farben nutzbar"),O(" Ist das rote oder das grüne Diagrammsegment größer? ")],-1),dO={__name:"3",setup(e){const o={layout:"center"};return Z(ie),(t,r)=>(A(),oe(an,Ye(We(o)),{default:ne(()=>[sO,cO]),_:1},16))}},fO=ae(dO,[["__file","/@slidev/slides/3.md"]]),uO="/presentation/assets/accordion-94c3614d.png",pO=se({__name:"tunnel",setup(e){Z(ie),se({Default:an});const o=H(null),t=r=>{if(o.value instanceof HTMLDivElement){const n=o.value.getBoundingClientRect();o.value.style.outlineColor="rgba(0,0,0,0.85)",o.value.style.outlineStyle="solid",o.value.style.outlineWidth="9999px",o.value.style.boxShadow="inset 0px 0px 25px rgba(0,0,0,1), inset 0px 0px 15px rgba(0,0,0,1)",o.value.style.left=`${r.clientX-n.width*1.5}px`,o.value.style.top=`${r.clientY-n.height}px`,o.value.style.filter="blur"}};return Ft(()=>{document.body.addEventListener("mousemove",t),document.body.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0,cancelable:!0,view:window,clientX:500,clientY:200}))}),cn(()=>{document.body.removeEventListener("mousemove",t)}),(r,n)=>(A(),oe(an,null,{default:ne(()=>[ao(r.$slots,"default"),u("div",{ref_key:"tunnel",ref:o,class:"absolute left-50 top-50 w-50 bg-transparent h-50 rounded-full border-black transparent"}," ",512)]),_:3}))}}),hO=ae(pO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/tunnel.vue"]]),bO=u("img",{src:uO,class:"block w-150 mb-15"},null,-1),gO=u("div",{class:"text-left border-l-3 border-gray-400 p-2 bg-gray-100"},[u("h3",null,"Alles im Blick‽"),O(" Gesichtsfeldbeeinträchtigungen können auf nur einem Auge oder auch auf beiden Augen vorkommen? ")],-1),mO={__name:"4",setup(e){const o={layout:"tunnel"};return Z(ie),(t,r)=>(A(),oe(hO,Ye(We(o)),{default:ne(()=>[bO,gO]),_:1},16))}},vO=ae(mO,[["__file","/@slidev/slides/4.md"]]),Pf=["ul","ol"],Ho=se({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,s;const e=Jn("click"),o=Jn("after"),t=(c,d,f)=>dn(c,[[d,f,"",{hide:this.hide,fade:this.fade}]]);let r=(s=(l=this.$slots).default)==null?void 0:s.call(l);if(!r)return;r=sh(r);const n=(c,d=1)=>{let f=0;return[c.map(b=>{if(!ht(b))return b;if(Pf.includes(b.type)&&Array.isArray(b.children)){const[h,g]=a(b.children,d+1);return f+=g,Qe(b,{},[h])}return Qe(b)}),f]};let i=0;const a=(c,d=1)=>{let f=0;return[c.map(b=>{if(!ht(b))return b;const h=f%this.every===0?e:o;let g,m=0;if(d<this.depth&&Array.isArray(b.children)){const[w,y]=n(b.children,d);g=Qe(b,{},[w]),m=y,f+=y+1}else g=Qe(b),f++;const k=this.at!=null?Number(this.at)+Math.floor(i/this.every)+d:(d-1-m).toString();return i++,t(g,h,typeof k=="string"&&!k.startsWith("-")?`+${k}`:k)}),f]};return r.length===1&&Pf.includes(r[0].type)&&Array.isArray(r[0].children)?Qe(r[0],{},[a(r[0].children)[0]]):a(r)[0]}}),kO={class:"grid gap-16 grid-cols-[1fr_2fr] ml-10"},wO=u("div",null,[u("img",{class:"w-75 m-auto rounded-full p-1 bg-gradient-to-r from-teal-700 to-cyan-800 dark:from-white dark:to-cyan-50",src:"https://avatars.githubusercontent.com/u/6279703"})],-1),yO=se({__name:"about-me",setup(e){return Z(ie),se({Default:no}),(o,t)=>(A(),oe(no,null,{default:ne(()=>[u("div",kO,[wO,u("div",null,[ao(o.$slots,"default")])])]),_:3}))}}),xO=ae(yO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/about-me.vue"]]),_O=u("h1",null,"Speaker",-1),OO=u("ul",null,[u("li",null,[O("Mein Name ist "),u("strong",null,"Martin"),O(" Oppitz")]),u("li",null,[O("Inzwischen "),u("strong",null,"über 25 Jahre"),O(" im Web unterwegs")]),u("li",null,[O("Seit 3 Jahren beim "),u("strong",null,"ITZBund"),O(" in der "),u("strong",null,"Architektur-Beratung")]),u("li",null,[u("strong",null,"Interessen:"),O(" Familie, Rad und Ski fahren, Reisen und Open Source")])],-1),SO={__name:"5",setup(e){const o={layout:"about-me"};return Z(ie),(t,r)=>{const n=Ho;return A(),oe(xO,Ye(We(o)),{default:ne(()=>[_O,X(n,null,{default:ne(()=>[OO]),_:1})]),_:1},16)}}},zO=ae(SO,[["__file","/@slidev/slides/5.md"]]),kc=se({render(){var r,n;const e=Jn("after");function o(i,a){return dn(i,[[a]])}let t=(n=(r=this.$slots).default)==null?void 0:n.call(r);if(t)return t=sh(t),t.map(i=>o(Qe(i),e))}}),hb=se({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return X(Ho,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),EO="/presentation/assets/avatar-2c63cf95.png",LO=u("img",{class:"m-auto block w-50 pb-15",src:EO},null,-1),TO={class:"h-0"},AO=u("h1",null,[u("strong",null,"Ko"),O("mponenten-Bib"),u("strong",null,"li"),O("othek für die "),u("strong",null,"B"),O("ar"),u("strong",null,"ri"),O("erefreiheit")],-1),CO=[AO],PO=u("h1",null,[u("strong",null,"KoliBri")],-1),FO={__name:"6",setup(e){const o={layout:"center"};return Z(ie),(t,r)=>{const n=hb,i=kc,a=Jn("click-hide");return A(),oe(an,Ye(We(o)),{default:ne(()=>[X(n,null,{default:ne(()=>[LO]),_:1}),dn((A(),Y("div",TO,CO)),[[a]]),X(i,null,{default:ne(()=>[PO]),_:1})]),_:1},16)}}},$O=ae(FO,[["__file","/@slidev/slides/6.md"]]),IO={class:"grid grid-cols-[2fr_1fr]"},NO={id:"egg-all"},RO=u("g",{id:"bottom_part"},[u("path",{id:"bottom",fill:"#E9E6DB",d:"M89.467,194c-1.531,7.035-2.359,14.405-2.36,22h0.075c0.009,52,32.391,86.761,72.409,86.761 c40.018,0,72.409-39.13,72.409-87.12v-0.119c0-0.003,0-0.005,0-0.008c0-0.004,0-0.009,0-0.014c0-7.551-0.694-14.729-1.981-21.5 l-26.185,6l-44-6l-42.334,6L89.467,194z"}),u("path",{id:"shbottom",fill:"#DEDAC9",d:"M99.182,215h-0.038c0.001-6.301,0.583-12.438,1.65-18.362l-11.539-2.469 c-1.375,6.676-2.11,13.651-2.111,20.831h0.038c-0.038,52.75,29.318,86.875,69.409,87.821c1.998,0.047,3.979-0.102,5.938-0.293 C125.355,299.196,99.19,264.344,99.182,215z"})],-1),jO=u("g",{id:"top_part"},[u("path",{id:"top",fill:"#E9E6DB",d:"M230.545,197c-6.561-41.887-35.882-68.88-71.082-68.88c-31.932,0-63.045,26.565-69.996,65.88 l28.7,6l40.667-6l45,6L230.545,197z"}),u("path",{id:"shtop_1_",fill:"#DEDAC9",d:`M100.794,196.638c7.403-35.642,33.679-65.285,65.013-68.344
          c-1.996-0.18-4.011-0.294-6.051-0.294c-33.982,0-62.634,28.294-70.5,66.169L100.794,196.638z`}),u("circle",{id:"highlight3",fill:"#FFFFFD",cx:"190.814",cy:"151.488",r:"4.146"}),u("circle",{id:"highlight2",fill:"#FFFFFD",cx:"199.877",cy:"159.502",r:"4.146"}),u("circle",{id:"highlight1",fill:"#FFFFFD",cx:"190.629",cy:"160.687",r:"2.612"})],-1),MO=se({__name:"egg",setup(e){Z(ie),se({Default:no});const o=H(null),t=H(null),r=["M89.467,194","117.5,200","159.834,194","203.834,200","230.019,194"];let n;const i=(a=0)=>{clearTimeout(n),t.value&&a<=5?(t.value.setAttribute("d",r.slice(0,a).join(" ")),n=setTimeout(()=>{i(a+1)},750)):n=setTimeout(()=>{i()},2500)};return Ft(()=>{i()}),cn(()=>{clearTimeout(n)}),(a,l)=>(A(),oe(no,null,{default:ne(()=>[u("div",IO,[u("div",null,[ao(a.$slots,"default")]),u("div",null,[(A(),Y("svg",{class:"cursor-pointer",ref_key:"egg",ref:o,version:"1.1",id:"egg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"300px",height:"400px",viewBox:"0 0 300 400","enable-background":"new 0 0 300 400","xml:space":"preserve"},[u("g",NO,[RO,jO,u("path",{ref_key:"eggBreak",ref:t,id:"break",fill:"none",stroke:"#79736f","stroke-miterlimit":"10",d:""},null,512)])],512))])])]),_:3}))}}),KO=ae(MO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/egg.vue"]]),BO=u("h1",null,[O("Vom "),u("strong",null,"Ei"),O(" zum "),u("strong",null,"Open Source"),O("-Standard")],-1),DO=u("p",null,[u("strong",null,"KoliBri"),O(" hat den "),u("strong",null,[u("kol-abbr",{_title:"Beschreibt einen Augenblick einer besonderen Zufriedenheit. (Web Components-Durchbruch, 2021)"},"Magic-Moment")]),O(" der Web Components abgepasst und einen Standard zur Umsetzung zugänglicher Benutzeroberflächen realisiert.")],-1),UO=u("ul",null,[u("li",null,[O("Was ist eine "),u("strong",null,"Web Component"),O("?")]),u("li",null,[O("Worin liegt eigentlich das "),u("strong",null,"Problem"),O("?")]),u("li",null,[O("Welche "),u("strong",null,"Ziele"),O(" können mit KoliBri verfolgt werden?")]),u("li",null,[O("Wie ist KoliBri "),u("strong",null,"aufgestellt"),O("?")]),u("li",null,[O("Wo wird denn hier was "),u("strong",null,"eingespart"),O("?")]),u("li",null,[O("Was macht eigentlich den "),u("strong",null,"Unterschied"),O("?")]),u("li",null,[O("Wo steht KoliBri und wo will er "),u("strong",null,"hin"),O("?")]),u("li",null,[O('Die EUPL ist die "perfekte" '),u("strong",null,"Lizenz"),O("‽")]),u("li",null,[O("Häufig gestellte "),u("strong",null,"Fragen"),O(".")])],-1),HO={__name:"7",setup(e){const o={layout:"egg",handle:1};return Z(ie),(t,r)=>{const n=Ho;return A(),oe(KO,Ye(We(o)),{default:ne(()=>[BO,DO,X(n,null,{default:ne(()=>[UO]),_:1})]),_:1},16)}}},qO=ae(HO,[["__file","/@slidev/slides/7.md"]]),VO={class:"grid grid-cols-2 items-center"},WO=["src"],GO=se({__name:"image-right-50",props:{image:{type:String},style:{type:String}},setup(e){const o=e;Z(ie),se({Default:no});const t=C(()=>o.image);return(r,n)=>(A(),oe(no,null,{default:ne(()=>[u("div",VO,[u("div",null,[ao(r.$slots,"default")]),u("div",null,[u("img",{src:z(t),class:"mt-8 w-50% m-auto",style:oo(o.style)},null,12,WO)])])]),_:3}))}}),Da=ae(GO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/image-right-50.vue"]]),XO=u("h1",null,"Web Components",-1),YO=u("p",null,[u("small",{class:"underline"},"Was ist eine Web Component?")],-1),ZO=u("p",null,[u("strong",null,"Web Components"),O(" sind seit Juli 2014 ein "),u("strong",null,"Webstandard"),O(" des "),u("strong",null,[u("kol-abbr",{_title:"World Wide Web Consortium"},"W3C")]),O(".")],-1),JO=u("ul",null,[u("li",null,[O("Komponente ≙ "),u("strong",null,"eigene"),O(" HTML-Elemente")]),u("li",null,[O("Komponente besteht aus … "),u("ul",null,[u("li",null,[O("HTML "),u("kol-icon",{_icon:"codicon codicon-arrow-right"}),O(),u("strong",null,"Semantik")]),u("li",null,[O("JavaScript "),u("kol-icon",{_icon:"codicon codicon-arrow-right"}),O(),u("strong",null,"Verhalten")]),u("li",null,[O("CSS "),u("kol-icon",{_icon:"codicon codicon-arrow-right"}),O(),u("strong",null,"Aussehen")])])]),u("li",null,[u("strong",null,"Robuster, konsistenter und teilbarer"),O(" Baustein (Shadow DOM)")]),u("li",null,[u("strong",null,"erst 2021"),O(" technischer Durchbruch ("),u("kol-abbr",{_title:"Microsoft Internet Explorer 11"},"IE11"),O(" & "),u("kol-abbr",{_title:"Microsoft Edge Webbrowser"},"EDGE"),O(")")]),u("li",null,[O("in allen webbasierten Benutzeroberflächen wiederverwendbar (Web & App)"),u("sup",null,"1")])],-1),QO={class:"mt-8 float-right text-xs"},e7=u("sup",null,"1",-1),o7=u("kol-link",{_href:"https://dev.to/pahanperera/visual-explanation-and-comparison-of-csr-ssr-ssg-and-isr-34ea",_target:"dev.to"},[u("kol-abbr",{_title:"Client Side Rendering"},"CSR"),O(", "),u("kol-abbr",{_title:"Server Side Rendering"},"SSR"),O(", "),u("kol-abbr",{_title:"Static Side Gerneration"},"SSG"),O(", "),u("kol-abbr",{_title:"Incremental Static Regeneration"},"IRS")],-1),t7={__name:"8",setup(e){const o={layout:"image-right-50",image:"/presentation/assets/html-js-css.png",handle:2};return Z(ie),(t,r)=>{const n=Ho,i=Jn("after");return A(),oe(Da,Ye(We(o)),{default:ne(()=>[XO,YO,ZO,X(n,null,{default:ne(()=>[JO]),_:1}),u("p",null,[dn((A(),Y("small",QO,[e7,O(" Es gibt ausführungseitig unterschiedliche Randbedingungen ("),o7,O(")")])),[[i]])])]),_:1},16)}}},r7=ae(t7,[["__file","/@slidev/slides/8.md"]]),n7=u("h1",null,"Viele Wege führen nach Rom",-1),i7=u("p",null,[u("small",{class:"underline"},"Worin liegt eigentlich das Problem?")],-1),a7=u("p",null,"Barrierefreie Benutzeroberflächen werden durch die semantisch korrekte Komposition von HTML-Elementen realisiert.",-1),l7=u("p",null,[O("Der HTML-Webstandard lässt aber das "),u("strong",null,"Wie"),O(' dabei offen. Somit liegt die Aufgabe, das "Problem" zu lösen, bei den Entwickelnden. Darüber hinaus gilt es, die Richtlinien der '),u("kol-abbr",{_title:"Web Content Accessibility Guidelines"},"WCAG"),O(" mit den gestalterischen Aspekten aus den vielseitigen Styleguides zu vereinen.")],-1),s7=u("p",null,[O("Der "),u("strong",null,"große Vorteil für die Bundesverwaltung"),O(" liegt darin, dass wir mittels des Web Component-Standards eine für uns "),u("strong",null,"ideale Lösung"),O(" gemeinsam "),u("strong",null,"umsetzen"),O(", "),u("strong",null,"wiederverwenden"),O(" (teilen), "),u("strong",null,"verbessern"),O(" und "),u("strong",null,"erweitern"),O(" können.")],-1),c7={__name:"9",setup(e){const o={layout:"image-right-50",image:"/presentation/assets/w3c.jpeg",handle:3};return Z(ie),(t,r)=>{const n=Ho;return A(),oe(Da,Ye(We(o)),{default:ne(()=>[n7,i7,a7,X(n,null,{default:ne(()=>[l7,s7]),_:1})]),_:1},16)}}},d7=ae(c7,[["__file","/@slidev/slides/9.md"]]),f7=u("h1",null,"Motivation",-1),u7=u("p",null,[u("small",{class:"underline"},"Welche Ziele können damit verfolgt werden?")],-1),p7=u("p",null,[O("Wir wollen "),u("strong",null,"benutzerfreundliche"),O(", "),u("strong",null,"barrierefreie"),O(", "),u("strong",null,"Styleguide-konforme"),O(" und "),u("strong",null,"wiederverwendbare"),O(" Benutzeroberflächen realisieren.")],-1),h7=u("ul",null,[u("li",null,[O("benutzerfreundlich: "),u("strong",null,"Standard-konform"),O(" und "),u("strong",null,"Geräte-agnostisch")]),u("li",null,[O("barrierefrei: "),u("strong",null,"semantisch"),O("es HTML und "),u("strong",null,"kontrastreich"),O("e Farben")]),u("li",null,[O("Styleguide-konform: "),u("strong",null,"Komponenten-spezifisches"),O(" CSS")]),u("li",null,[O("wiederverwendbar: Web Component + "),u("strong",null,"Shadow DOM")])],-1),b7=u("br",null,null,-1),g7=u("br",null,null,-1),m7={__name:"10",setup(e){const o={layout:"image-right-50",image:"/presentation/assets/reaktionsschnell.png",handle:4};return Z(ie),(t,r)=>{const n=Ho;return A(),oe(Da,Ye(We(o)),{default:ne(()=>[f7,u7,p7,X(n,null,{default:ne(()=>[h7]),_:1}),b7,g7]),_:1},16)}}},v7=ae(m7,[["__file","/@slidev/slides/10.md"]]),k7={class:"grid grid-cols-[1fr_3fr] items-center"},w7=["src"],y7=se({__name:"image-right-66",props:{image:{type:String},style:{type:String}},setup(e){const o=e;Z(ie),se({Default:no});const t=C(()=>o.image);return(r,n)=>(A(),oe(no,null,{default:ne(()=>[u("div",k7,[u("div",null,[ao(r.$slots,"default")]),u("div",null,[u("img",{src:z(t),class:"mt-8 w-66% m-auto",style:oo(o.style)},null,12,w7)])])]),_:3}))}}),x7=ae(y7,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/image-right-66.vue"]]),_7=u("h1",null,"Theming",-1),O7=u("p",null,[u("small",{class:"underline"},"Wie ist KoliBri aufgestellt?")],-1),S7=u("p",null,"Das Theming entkoppelt das Aussehen vollständig von den barrierefreien Komponenten.",-1),z7=u("ol",null,[u("li",null,[O("Komponenten"),u("br"),u("em",null,"(Semantik und Verhalten)")]),u("li",null,[O("Styleguide/Corporate Design"),u("br"),u("em",null,"(Aussehen)")]),u("li",null,[O("Kundenspezifischer Kolibri"),u("br"),u("em",null,"(Design System)")])],-1),E7={__name:"11",setup(e){const o={layout:"image-right-66",image:"/presentation/assets/theming.png",handle:5};return Z(ie),(t,r)=>{const n=Ho;return A(),oe(x7,Ye(We(o)),{default:ne(()=>[_7,O7,S7,X(n,null,{default:ne(()=>[z7]),_:1})]),_:1},16)}}},L7=ae(E7,[["__file","/@slidev/slides/11.md"]]),T7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},A7=u("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),C7=[A7];function P7(e,o){return A(),Y("svg",T7,C7)}const F7={name:"ph-clipboard",render:P7},$7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},I7=u("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),N7=[I7];function R7(e,o){return A(),Y("svg",$7,N7)}const j7={name:"ph-check-circle",render:R7},M7=["title"],K7=se({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const o=e;Z(ie);const t=Z(Rn),r=Z(gr),n=Z(jn);function i(f=5){const p=[],b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=b.length;for(let g=0;g<f;g++)p.push(b.charAt(Math.floor(Math.random()*h)));return p.join("")}const a=H(),l=Fo();Ft(()=>{const f=o.at==null?r==null?void 0:r.value.length:o.at,p=C(()=>n!=null&&n.value?o.ranges.length-1:Math.min(Math.max(0,((t==null?void 0:t.value)||0)-(f||0)),o.ranges.length-1)),b=C(()=>o.ranges[p.value]||"");if(o.ranges.length>=2&&!(n!=null&&n.value)){const h=i(),g=Rk(o.ranges.length-1).map(m=>h+m);r!=null&&r.value&&(r.value.push(...g),cn(()=>g.forEach(m=>Zl(r.value,m)),l))}Fr(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const m of g){const k=Array.from(m.querySelectorAll(".line")),w=fb(k.length,b.value);if(k.forEach((y,x)=>{const E=w.includes(x+1);y.classList.toggle(pr,!0),y.classList.toggle("highlighted",E),y.classList.toggle("dishonored",!E)}),o.maxHeight){const y=Array.from(m.querySelectorAll(".line.highlighted"));y.reduce((E,P)=>P.offsetHeight+E,0)>a.value.offsetHeight?y[0].scrollIntoView({behavior:"smooth",block:"start"}):y.length>0&&y[Math.round((y.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:s,copy:c}=Mw();function d(){var p,b;const f=(b=(p=a.value)==null?void 0:p.querySelector(".slidev-code"))==null?void 0:b.textContent;f&&c(f)}return(f,p)=>{const b=j7,h=F7;return A(),Y("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:oo({"max-height":o.maxHeight,"overflow-y":o.maxHeight?"scroll":void 0})},[ao(f.$slots,"default"),z(Pe).codeCopy?(A(),Y("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:z(s)?"Copied":"Copy",onClick:p[0]||(p[0]=g=>d())},[z(s)?(A(),oe(b,{key:0,class:"p-2 w-8 h-8"})):(A(),oe(h,{key:1,class:"p-2 w-8 h-8"}))],8,M7)):we("v-if",!0)],4)}}}),B7=ae(K7,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),D7=["data-theme"],U7={class:"grid gap-2"},H7={class:"pl-8",_heading:"Button-Komponente","_has-footer":""},q7=u("div",{slot:"content",class:"p-2 grid grid-cols-[1.5fr_1fr] items-center"},[u("div",{class:"grid gap-2"},[u("div",{class:"text-center"},[u("kol-button",{_label:"Primary",_icon:"codicon codicon-home",_variant:"primary"})]),u("div",{class:"text-center"},[u("kol-button",{_label:"Secondary",_icon:{right:"codicon codicon-edit"},_variant:"secondary"})]),u("div",{class:"text-center"},[u("kol-button",{_label:"Danger",_icon:"codicon codicon-trash",_variant:"danger"})]),u("div",{class:"text-center"},[u("kol-button",{_label:"Ghost",_icon:{right:"codicon codicon-lightbulb"},_variant:"ghost"})])]),u("div",{class:"grid gap-2"},[u("div",{class:"text-center"},[u("kol-button",{_label:"Primary",_icon:"codicon codicon-home","_icon-only":"",_variant:"primary"})]),u("div",{class:"text-center"},[u("kol-button",{_label:"Secondary",_icon:"codicon codicon-edit","_icon-only":"","_tooltip-align":"right",_variant:"secondary"})]),u("div",{class:"text-center"},[u("kol-button",{_label:"Danger",_icon:"codicon codicon-trash","_icon-only":"","_tooltip-align":"bottom",_variant:"danger"})]),u("div",{class:"text-center"},[u("kol-button",{_label:"Ghost",_icon:"codicon codicon-lightbulb","_icon-only":"","_tooltip-align":"left",_variant:"ghost"})])])],-1),V7={slot:"footer",class:"p-2 grid grid-cols-[1fr_auto] gap-4 items-end"},W7=["_value"],G7=se({__name:"demo-time",setup(e){Z(ie);const o=[{label:"Bundes-Styleguide (WIP)",value:"bpa"},{label:"BMF-Styleguide",value:"bmf"},{label:"DEZY-Styleguide (untested)",value:"desy-v2"},{label:"European Commission-Styleguide (WIP)",value:"ecl-ec"},{label:"European Union-Styleguide (WIP)",value:"ecl-eu"},{label:"ITZBund-Styleguide (untested)",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"},{label:"Zoll-Designsystem (untested)",value:"zoll-v2"}],t=window.localStorage.getItem("kolibri");let r="itzbund";if(t)try{const a=JSON.parse(t);typeof a.theme=="string"&&(r=a.theme)}catch{}const n={onChange:(a,l)=>{Array.isArray(l)&&typeof l[0]=="string"&&r!==l[0]&&window.localStorage.setItem("kolibri",JSON.stringify({theme:l[0]}))}},i={onClick:()=>{console.log("click"),window.location.reload()}};return se({Default:no}),(a,l)=>(A(),oe(no,null,{default:ne(()=>[u("div",{"data-theme":z(r),class:"grid grid-cols-2 items-center"},[u("div",null,[ao(a.$slots,"default")]),u("div",U7,[u("kol-card",H7,[q7,u("div",V7,[u("kol-select",{_list:o,_on:n,_value:[z(r)]},"Styleguide",8,W7),u("kol-button",{_label:"Übernehmen",_icon:"codicon codicon-reply","_icon-only":"",onClick:l[0]||(l[0]=(...s)=>i.onClick&&i.onClick(...s)),_on:i,_variant:"secondary"})])])])],8,D7)]),_:3}))}}),X7=ae(G7,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/demo-time.vue"]]),Y7=u("h1",null,"Live-Demo",-1),Z7=u("p",null,[u("small",{class:"underline"},"Wo wird denn hier was eingespart?")],-1),J7=u("p",null,'Im Code-Beispiel wird dargestellt, wie die Anforderungen an die Barrierefreiheit im Button "weg gekapselt" werden.',-1),Q7=u("pre",{class:"shiki-container"},[u("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[u("code",null,[u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"<"),u("span",{style:{color:"#79B8FF"}},"kol-button"),u("span",{style:{color:"#B392F0"}}," _icon"),u("span",{style:{color:"#F97583"}},"="),u("span",{style:{color:"#FFAB70"}},'"ui-home"'),u("span",{style:{color:"#B392F0"}}," _icon-only _label"),u("span",{style:{color:"#F97583"}},"="),u("span",{style:{color:"#FFAB70"}},'"Primary"'),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"	<"),u("span",{style:{color:"#FFAB70"}},"button"),u("span",{style:{color:"#B392F0"}}," aria-labelledby"),u("span",{style:{color:"#F97583"}},"="),u("span",{style:{color:"#FFAB70"}},'"574540"'),u("span",{style:{color:"#B392F0"}}," class"),u("span",{style:{color:"#F97583"}},"="),u("span",{style:{color:"#FFAB70"}},'"primary"'),u("span",{style:{color:"#B392F0"}}," type"),u("span",{style:{color:"#F97583"}},"="),u("span",{style:{color:"#FFAB70"}},'"button"'),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"		<"),u("span",{style:{color:"#FFAB70"}},"span"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"			<"),u("span",{style:{color:"#79B8FF"}},"kol-icon"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"				<"),u("span",{style:{color:"#FFAB70"}},"i"),u("span",{style:{color:"#B392F0"}}," aria-hidden"),u("span",{style:{color:"#F97583"}},"="),u("span",{style:{color:"#FFAB70"}},'"true"'),u("span",{style:{color:"#B392F0"}}," class"),u("span",{style:{color:"#F97583"}},"="),u("span",{style:{color:"#FFAB70"}},'"icofont-ui-home"'),u("span",{style:{color:"#B392F0"}},"></"),u("span",{style:{color:"#FFAB70"}},"i"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"			</"),u("span",{style:{color:"#79B8FF"}},"kol-icon"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"		</"),u("span",{style:{color:"#FFAB70"}},"span"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"	</"),u("span",{style:{color:"#FFAB70"}},"button"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"	<"),u("span",{style:{color:"#79B8FF"}},"kol-tooltip"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"		<"),u("span",{style:{color:"#79B8FF"}},"kol-badge"),u("span",{style:{color:"#B392F0"}}," id"),u("span",{style:{color:"#F97583"}},"="),u("span",{style:{color:"#FFAB70"}},'"574540"'),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"			<"),u("span",{style:{color:"#FFAB70"}},"span"),u("span",{style:{color:"#B392F0"}},">Primary</"),u("span",{style:{color:"#FFAB70"}},"span"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"		</"),u("span",{style:{color:"#79B8FF"}},"kol-badge"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"	</"),u("span",{style:{color:"#79B8FF"}},"kol-tooltip"),u("span",{style:{color:"#B392F0"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#B392F0"}},"</"),u("span",{style:{color:"#79B8FF"}},"kol-button"),u("span",{style:{color:"#B392F0"}},">")])])]),u("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[u("code",null,[u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"<"),u("span",{style:{color:"#1976D2"}},"kol-button"),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"_icon"),u("span",{style:{color:"#D32F2F"}},"="),u("span",{style:{color:"#22863A"}},'"ui-home"'),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"_icon-only"),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"_label"),u("span",{style:{color:"#D32F2F"}},"="),u("span",{style:{color:"#22863A"}},'"Primary"'),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"	<"),u("span",{style:{color:"#22863A"}},"button"),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"aria-labelledby"),u("span",{style:{color:"#D32F2F"}},"="),u("span",{style:{color:"#22863A"}},'"574540"'),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"class"),u("span",{style:{color:"#D32F2F"}},"="),u("span",{style:{color:"#22863A"}},'"primary"'),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"type"),u("span",{style:{color:"#D32F2F"}},"="),u("span",{style:{color:"#22863A"}},'"button"'),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"		<"),u("span",{style:{color:"#22863A"}},"span"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"			<"),u("span",{style:{color:"#1976D2"}},"kol-icon"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"				<"),u("span",{style:{color:"#22863A"}},"i"),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"aria-hidden"),u("span",{style:{color:"#D32F2F"}},"="),u("span",{style:{color:"#22863A"}},'"true"'),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"class"),u("span",{style:{color:"#D32F2F"}},"="),u("span",{style:{color:"#22863A"}},'"icofont-ui-home"'),u("span",{style:{color:"#24292EFF"}},"></"),u("span",{style:{color:"#22863A"}},"i"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"			</"),u("span",{style:{color:"#1976D2"}},"kol-icon"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"		</"),u("span",{style:{color:"#22863A"}},"span"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"	</"),u("span",{style:{color:"#22863A"}},"button"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"	<"),u("span",{style:{color:"#1976D2"}},"kol-tooltip"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"		<"),u("span",{style:{color:"#1976D2"}},"kol-badge"),u("span",{style:{color:"#24292EFF"}}," "),u("span",{style:{color:"#6F42C1"}},"id"),u("span",{style:{color:"#D32F2F"}},"="),u("span",{style:{color:"#22863A"}},'"574540"'),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"			<"),u("span",{style:{color:"#22863A"}},"span"),u("span",{style:{color:"#24292EFF"}},">Primary</"),u("span",{style:{color:"#22863A"}},"span"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"		</"),u("span",{style:{color:"#1976D2"}},"kol-badge"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"	</"),u("span",{style:{color:"#1976D2"}},"kol-tooltip"),u("span",{style:{color:"#24292EFF"}},">")]),O(`
`),u("span",{class:"line"},[u("span",{style:{color:"#24292EFF"}},"</"),u("span",{style:{color:"#1976D2"}},"kol-button"),u("span",{style:{color:"#24292EFF"}},">")])])])],-1),e6=u("p",null,[u("small",{class:"mt-8 text-xs"},[u("sup",null,"*"),O(" Quellcode ist für die bessere Nachvollziehbarkeit stark vereinfacht.")])],-1),o6={__name:"12",setup(e){const o={layout:"demo-time",handle:6};return Z(ie),(t,r)=>{const n=B7;return A(),oe(X7,Ye(We(o)),{default:ne(()=>[Y7,Z7,J7,we(` <kol-accordion _heading="test" _level="5">
<div slot="content"> `),X(n,tn({},{ranges:["1,14","2-8","9-13","all"]}),{default:ne(()=>[Q7]),_:1},16),we(` </div>
</kol-accordion> `),e6]),_:1},16)}}},t6=ae(o6,[["__file","/@slidev/slides/12.md"]]),r6={class:"grid grid-cols-[2fr_1fr] items-center"},n6=["src"],i6=se({__name:"image-right",props:{image:{type:String},style:{type:String}},setup(e){const o=e;Z(ie),se({Default:no});const t=C(()=>o.image);return(r,n)=>(A(),oe(no,null,{default:ne(()=>[u("div",r6,[u("div",null,[ao(r.$slots,"default")]),u("div",null,[u("img",{src:z(t),class:"mt-8 w-66% m-auto",style:oo(o.style)},null,12,n6)])])]),_:3}))}}),Ua=ae(i6,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/image-right.vue"]]),a6=u("h1",null,"Alleinstellungsmerkmale",-1),l6=u("p",null,[u("small",{class:"underline"},"Was macht eigentlich den Unterschied?")],-1),s6=u("p",null,"Aus Sicht der öffentlichen Verwaltung hat KoliBri eine ganze Reihe an Alleinstellungsmerkmalen:",-1),c6=u("ul",null,[u("li",null,[u("strong",null,"Spezifikation"),O(" - "),u("span",{class:"text-gray-500"},"Barrierefreiheit kommt zuerst (by Design)")]),u("li",null,[u("strong",null,"Theming"),O(" - "),u("span",{class:"text-gray-500"},"Entkoppeltes Styling im Shadow-Root (Theming)")]),u("li",null,[u("strong",null,"Zugänglichkeit"),O(" - "),u("span",{class:"text-gray-500"},"Code-Hoheit liegt beim Bund (Digitale Souveränität)")]),u("li",null,[u("strong",null,"Architektur"),O(" - "),u("span",{class:"text-gray-500"},"Einmalige Implementierung (Framework-agnostisch)")]),u("li",null,[u("strong",null,"Robustheit"),O(" - "),u("span",{class:"text-gray-500"},"Web Components im restriktiven Modus (Shadow-Root)")])],-1),d6={__name:"13",setup(e){const o={layout:"image-right",image:"/presentation/assets/usp.png",handle:7};return Z(ie),(t,r)=>{const n=Ho;return A(),oe(Ua,Ye(We(o)),{default:ne(()=>[a6,l6,s6,X(n,null,{default:ne(()=>[c6]),_:1})]),_:1},16)}}},f6=ae(d6,[["__file","/@slidev/slides/13.md"]]),u6=u("h1",null,"Ausblick",-1),p6=u("p",null,[u("small",{class:"underline"},"Wo will KoliBri hin?")],-1),h6=u("p",null,[u("strong",null,"KoliBri"),O(" wurde durch den "),u("strong",null,"ITZBund"),O(" für die "),u("strong",null,"Open Source"),O("-Entwicklung "),u("strong",null,"freigegeben"),O(", um für alle zugänglich zu sein und um aus dem Feedback der Community kontinuierlich verbessert und erweitert werden zu können.")],-1),b6=u("p",null,[u("strong",null,"KoliBri"),O(" bietet hierfür eine optimale Wiederverwendbarkeit, weil er …")],-1),g6=u("ul",null,[u("li",null,[u("strong",null,"klein"),O(" - "),u("span",{class:"text-gray-500"},"kleinteilige Komponenten"),O(",")]),u("li",null,[u("strong",null,"schnell"),O(" - "),u("span",{class:"text-gray-500"},"automatisierte DevOps-Pipelines"),O(",")]),u("li",null,[u("strong",null,"wendig"),O(" - "),u("span",{class:"text-gray-500"},"Framework-agnostisch"),O(" und")]),u("li",null,[u("strong",null,"farbenfroh"),O(" - "),u("span",{class:"text-gray-500"},"entkoppeltes Theming")])],-1),m6=u("p",null,"… ist.",-1),v6={__name:"14",setup(e){const o={layout:"image-right",image:"/presentation/assets/oss.png",handle:9};return Z(ie),(t,r)=>{const n=hb,i=Ho,a=kc;return A(),oe(Ua,Ye(We(o)),{default:ne(()=>[u6,p6,h6,X(n,null,{default:ne(()=>[b6]),_:1}),X(i,null,{default:ne(()=>[g6]),_:1}),X(a,null,{default:ne(()=>[m6]),_:1})]),_:1},16)}}},k6=ae(v6,[["__file","/@slidev/slides/14.md"]]),w6=u("h1",null,"Lizenz",-1),y6=u("p",null,[u("small",{class:"underline"},'Die EUPL ist die "perfekte" Lizenz‽')],-1),x6=u("p",null,'Die "Open-Source-Lizenz für die Europäische Union" (EUPL) ist eine von der Europäischen Union herausgegebene Copyleft-Lizenz für die Lizenzierung freier Software.',-1),_6=u("ul",null,[u("li",null,[O("Der "),u("strong",null,"Quellcode"),O(" ist die konkrete Implementierung der Komponenten und beinhaltet das schützenswerte geistige Eigentum der Urheber:innen. Es wird durch das Code-Repository (Git) repräsentiert und durch die Copyleft-Klausel geschützt, wenn davon eine Kopie (z.B. Fork) erstellt wird."),u("br"),u("br")]),u("li",null,[O("Aus dem Quellcode werden die sogenannten "),u("strong",null,"Artefakte"),O(' "gebauten" und über eine öffentliche Plattform (npm) verteilt. Alle Projekte können diese Artefakte herunterladen und die darin enthaltenen Komponenten uneingeschränkt in ihren Anwendungen wiederverwenden und von außen, wie vorgesehen, konfigurieren.')])],-1),O6=u("br",null,null,-1),S6=u("ul",null,[u("li",null,[O("🤗 Die reine Wiederverwendung der Artefakte ist vollkommen "),u("strong",null,"unproblematisch"),O("!")]),u("li",null,[O("🤔 "),u("strong",null,"Achtung"),O(" beim Kopieren von Code! "),u("em",null,[O("(zieht "),u("strong",null,"Copyleft"),O(" nach sich)")])]),u("li",null,[O("😉 Dann einfach Änderungswünsche direkt bei KoliBri "),u("strong",null,"einbringen"),O("!")])],-1),z6={__name:"15",setup(e){const o={layout:"image-right",image:"/presentation/assets/eupl.jpeg",handle:10};return Z(ie),(t,r)=>{const n=Ho;return A(),oe(Ua,Ye(We(o)),{default:ne(()=>[w6,y6,x6,u("small",null,[X(n,null,{default:ne(()=>[_6]),_:1}),O6]),X(n,null,{default:ne(()=>[S6]),_:1})]),_:1},16)}}},E6=ae(z6,[["__file","/@slidev/slides/15.md"]]),L6=u("h1",null,"Fragen",-1),T6=u("p",null,[u("small",{class:"underline"},"Häufig gestellt Fragen.")],-1),A6=u("ul",null,[u("li",null,[u("strong",null,"Wie abhängig mache ich mich, wenn ich KoliBri einsetze?"),u("br"),O(" Vergleicht man KoliBri mit einem LEGO®-Set, dann kann man die enthaltenen Bausteine einfach mir anderen Bausteinen mischen, um die Gesamtanwendung abzubilden "),u("em",null,"(s. blaue, orange und graue Komponenten)"),O("."),u("br"),u("br")]),u("li",null,[u("strong",null,"Wie kann ich eine Komponente beeinflussen, wenn nötig?"),u("br"),O(" KoliBri-Komponenten sind zur Sicherstellung der Barrierefreiheit sehr restriktiv und werden durch Komposition wiederverwendet. Anpassungen von außen lassen sich nur durch das "),u("strong",null,"Wrappen"),O(" oder den "),u("strong",null,"Expert-Slot"),O(" vornehmen "),u("em",null,"(s. Orange in Blau, Blau in Orange)"),O(". Das Styling ist über das "),u("strong",null,"Theme-Konzept"),O(" durch Konfiguration möglich."),u("br"),u("br")]),u("li",null,[u("strong",null,"Was mache ich, wenn eine Komponente oder Funktion fehlt?"),u("br"),O(" Neue "),u("strong",null,"fachlich neutrale Komponenten"),O(" oder "),u("strong",null,"Funktionen"),O(" sollen innerhalb von KoliBri realisiert werden. Hierbei ist das "),u("strong",null,"Mitwirken"),O(" ausdrücklich erwünscht und beschleunigt die Umsetzung.")])],-1),C6={__name:"16",setup(e){const o={layout:"image-right",image:"/presentation/assets/swizzling.png",handle:11};return Z(ie),(t,r)=>{const n=Ho;return A(),oe(Ua,Ye(We(o)),{default:ne(()=>[L6,T6,u("small",null,[X(n,null,{default:ne(()=>[A6]),_:1})])]),_:1},16)}}},P6=ae(C6,[["__file","/@slidev/slides/16.md"]]),F6=u("h1",null,"Erste Schritte",-1),$6=u("p",null,[O("Du kannst folgendes tun, um "),u("strong",null,"KoliBri"),O(" kennenzulernen …")],-1),I6=u("ul",null,[u("li",null,[u("kol-link",{_href:"https://public-ui.github.io",_target:"website"},"Lese mehr über KoliBri"),O(" (Dokumentation)")]),u("li",null,[u("kol-link",{_href:"https://public-ui.github.io/docs/get-started/erste-schritte",_target:"website"},"Probiere KoliBri aus"),O(" (Create-App)")]),u("li",null,[u("kol-link",{_href:"https://github.com/public-ui/kolibri/releases",_target:"github"},"Informiere Dich über die Neuerungen"),O(" (Changelog)")]),u("li",null,[u("kol-link",{_href:"https://public-ui.github.io/docs/concepts/styling/theming",_target:"website"},"Gestalte Dein eigenen KoliBri"),O(" (Designer)")]),u("li",null,[u("kol-link",{_href:"https://github.com/public-ui/kolibri/issues",_target:"github"},"Gib uns Feedback"),O(" (Feature, Issue)")]),u("li",null,[u("kol-link",{_href:"https://github.com/public-ui/kolibri",_target:"github"},"Folge uns auf GitHub"),O(" (Follow-Button)")])],-1),N6=u("br",null,null,-1),R6=u("p",null,[u("strong",null,"Lasst uns KoliBri bunter und besser machen!")],-1),j6={__name:"17",setup(e){const o={layout:"image-right-50",image:"/presentation/assets/get-started.png",handle:10,style:"width: 100%"};return Z(ie),(t,r)=>{const n=Ho,i=kc;return A(),oe(Da,Ye(We(o)),{default:ne(()=>[F6,$6,X(n,null,{default:ne(()=>[I6]),_:1}),N6,X(i,null,{default:ne(()=>[R6]),_:1})]),_:1},16)}}},M6=ae(j6,[["__file","/@slidev/slides/17.md"]]),K6="/presentation/assets/qr-code-31558908.png",B6=u("img",{class:"m-auto block w-50 pb-15",src:K6},null,-1),D6=u("small",{class:"underline"},"Lasst uns gemeinsam KoliBri bunter und besser machen!",-1),U6=u("h1",null,"Vielen Dank für Ihre Aufmerksamkeit",-1),H6=u("ul",{class:"flex"},[u("li",{class:"list-none"},[u("kol-link",{_href:"https://public-ui.github.io",_target:"storybook"},[u("kol-icon",{_icon:"codicon codicon-book"}),O(" Dokumentation")])]),u("li",{class:"list-none"},"|"),u("li",{class:"list-none"},[u("kol-link",{_href:"mailto:kolibri@itzbund.de",_target:"storybook"},[u("kol-icon",{_icon:"codicon codicon-mail"}),O(" kolibri@itzbund.de")])]),u("li",{class:"list-none"},"|"),u("li",{class:"list-none"},[u("kol-link",{_href:"https://github.com/public-ui",_target:"storybook"},[u("kol-icon",{_icon:"codicon codicon-github"}),O(" GitHub")])])],-1),q6={__name:"18",setup(e){const o={layout:"center"};return Z(ie),(t,r)=>(A(),oe(an,Ye(We(o)),{default:ne(()=>[B6,D6,U6,H6]),_:1},16))}},V6=ae(q6,[["__file","/@slidev/slides/18.md"]]),W6=u("kol-logo",{_org:"ITZBund",class:"m-auto pl-40 block w-140"},null,-1),G6={__name:"19",setup(e){const o={};return Z(ie),(t,r)=>(A(),oe(no,Ye(We(o)),{default:ne(()=>[W6]),_:1},16))}},X6=ae(G6,[["__file","/@slidev/slides/19.md"]]),Y6="/presentation/assets/reaktionsschnell-caefc57e.png",Z6="/presentation/assets/usp-3079675b.png",J6="/presentation/assets/berge-796c2cb3.png",Q6="/presentation/assets/teleskop-5ccfd212.png",eS=u("h1",null,"Bildnachweise",-1),oS=u("div",{class:"grid grid-cols-[10rem_auto_4rem_10rem_auto] items-center gap-4"},[u("div",null,[u("img",{src:Y6,class:"mt-8 w-20 m-auto"})]),u("div",{class:"mt-6"},[u("kol-link",{_href:"https://www.flaticon.com/de/kostenlose-icons/reaktionsschnell",_target:"flaticon"},"Reaktionsschnell Icons erstellt von Freepik - Flaticon")]),u("div"),u("div",null,[u("img",{src:Z6,class:"mt-8 w-20 m-auto"})]),u("div",{class:"mt-6"},[u("kol-link",{_href:"https://www.flaticon.com/de/kostenlose-icons/usp",_target:"flaticon"},"Usp Icons erstellt von Freepik - Flaticon")]),u("div",null,[u("img",{src:J6,class:"mt-8 w-20 m-auto"})]),u("div",{class:"mt-6"},[u("kol-link",{_href:"https://www.flaticon.com/de/kostenlose-icons/berg",_target:"flaticon"},"Berg Icons erstellt von Freepik - Flaticon")]),u("div"),u("div",null,[u("img",{src:Q6,class:"mt-8 w-20 m-auto"})]),u("div",{class:"mt-6"},[u("kol-link",{_href:"https://www.flaticon.com/de/kostenlose-icons/fernglas",_target:"flaticon"},"Fernglas Icons erstellt von Freepik - Flaticon")])],-1),tS={__name:"20",setup(e){const o={};return Z(ie),(t,r)=>(A(),oe(no,Ye(We(o)),{default:ne(()=>[eS,oS]),_:1},16))}},rS=ae(tS,[["__file","/@slidev/slides/20.md"]]),nS=[{path:"1",name:"page-1",component:eO,meta:{theme:"./theme",colorSchema:"light",highlighter:"shiki",lineNumbers:!0,transition:"fade",info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"Komponenten-Bibliothek für die Barrierefreiheit | KoliBri",slide:{raw:`---
theme: ./theme
colorSchema: light
highlighter: shiki
lineNumbers: true
transition: fade
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
title: Komponenten-Bibliothek für die Barrierefreiheit | KoliBri
---

<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />
`,title:"Komponenten-Bibliothek für die Barrierefreiheit | KoliBri",content:'<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />',frontmatter:{theme:"./theme",colorSchema:"light",highlighter:"shiki",lineNumbers:!0,transition:"fade",info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"Komponenten-Bibliothek für die Barrierefreiheit | KoliBri"},index:0,start:0,end:19,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:aO,meta:{layout:"center",slide:{raw:`---
layout: center
---

<button class="border-1 mb-30 h-4 w-4 border-gray-700 rounded shadow bg-gray-100 p-1 hover:outline"><i class="absolute -pl fa-solid fa-arrow-pointer"></i></button>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Größe der Schaltfläche</h3>
  Verwende Deine andere Hand, um mit der Maus den Schalter in der Mitte der Folie zu klicken.
</div>
`,content:`<button class="border-1 mb-30 h-4 w-4 border-gray-700 rounded shadow bg-gray-100 p-1 hover:outline"><i class="absolute -pl fa-solid fa-arrow-pointer"></i></button>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Größe der Schaltfläche</h3>
  Verwende Deine andere Hand, um mit der Maus den Schalter in der Mitte der Folie zu klicken.
</div>`,frontmatter:{layout:"center"},index:1,start:19,end:30,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:fO,meta:{layout:"center",slide:{raw:`---
layout: center
---

<img src="/presentation/assets/torte.png" class="block w-50 mb-15"/>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Ist das rote oder das grüne Diagrammsegment größer?
</div>
`,content:`<img src="/presentation/assets/torte.png" class="block w-50 mb-15"/>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Ist das rote oder das grüne Diagrammsegment größer?
</div>`,frontmatter:{layout:"center"},index:2,start:30,end:41,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:vO,meta:{layout:"tunnel",slide:{raw:`---
layout: tunnel
---

<img src="/presentation/assets/accordion.png" class="block w-150 mb-15"/>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Alles im Blick‽</h3>
  Gesichtsfeldbeeinträchtigungen können auf nur einem Auge oder auch auf beiden Augen vorkommen?
</div>
`,content:`<img src="/presentation/assets/accordion.png" class="block w-150 mb-15"/>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Alles im Blick‽</h3>
  Gesichtsfeldbeeinträchtigungen können auf nur einem Auge oder auch auf beiden Augen vorkommen?
</div>`,frontmatter:{layout:"tunnel"},index:3,start:41,end:52,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:zO,meta:{layout:"about-me",slide:{raw:`---
layout: about-me
---

# Speaker

<v-clicks>

- Mein Name ist **Martin** Oppitz
- Inzwischen **über 25 Jahre** im Web unterwegs
- Seit 3 Jahren beim **ITZBund** in der **Architektur-Beratung**
- **Interessen:** Familie, Rad und Ski fahren, Reisen und Open Source

</v-clicks>
`,title:"Speaker",level:1,content:`# Speaker

<v-clicks>

- Mein Name ist **Martin** Oppitz
- Inzwischen **über 25 Jahre** im Web unterwegs
- Seit 3 Jahren beim **ITZBund** in der **Architektur-Beratung**
- **Interessen:** Familie, Rad und Ski fahren, Reisen und Open Source

</v-clicks>`,frontmatter:{layout:"about-me"},index:4,start:52,end:67,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:$O,meta:{layout:"center",slide:{raw:`---
layout: center
---

<v-click>

<img class="m-auto block w-50 pb-15" src="/presentation/assets/avatar.png" />

</v-click>

<div v-click-hide class="h-0">

# **Ko**mponenten-Bib**li**othek für die **B**ar**ri**erefreiheit

</div>

<v-after>

# **KoliBri**

</v-after>
`,title:"**Ko**mponenten-Bib**li**othek für die **B**ar**ri**erefreiheit",level:1,content:`<v-click>

<img class="m-auto block w-50 pb-15" src="/presentation/assets/avatar.png" />

</v-click>

<div v-click-hide class="h-0">

# **Ko**mponenten-Bib**li**othek für die **B**ar**ri**erefreiheit

</div>

<v-after>

# **KoliBri**

</v-after>`,frontmatter:{layout:"center"},index:5,start:67,end:89,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:qO,meta:{layout:"egg",handle:1,slide:{raw:`---
layout: egg
handle: 1
---

# Vom **Ei** zum **Open Source**-Standard

**KoliBri** hat den **<kol-abbr _title="Beschreibt einen Augenblick einer besonderen Zufriedenheit. (Web Components-Durchbruch, 2021)">Magic-Moment</kol-abbr>** der Web Components abgepasst und einen Standard zur Umsetzung zugänglicher Benutzeroberflächen realisiert.

<v-clicks>

- Was ist eine **Web Component**?
- Worin liegt eigentlich das **Problem**?
- Welche **Ziele** können mit KoliBri verfolgt werden?
- Wie ist KoliBri **aufgestellt**?
- Wo wird denn hier was **eingespart**?
- Was macht eigentlich den **Unterschied**?
- Wo steht KoliBri und wo will er **hin**?
- Die EUPL ist die "perfekte" **Lizenz**‽
- Häufig gestellte **Fragen**.

</v-clicks>
`,title:"Vom **Ei** zum **Open Source**-Standard",level:1,content:`# Vom **Ei** zum **Open Source**-Standard

**KoliBri** hat den **<kol-abbr _title="Beschreibt einen Augenblick einer besonderen Zufriedenheit. (Web Components-Durchbruch, 2021)">Magic-Moment</kol-abbr>** der Web Components abgepasst und einen Standard zur Umsetzung zugänglicher Benutzeroberflächen realisiert.

<v-clicks>

- Was ist eine **Web Component**?
- Worin liegt eigentlich das **Problem**?
- Welche **Ziele** können mit KoliBri verfolgt werden?
- Wie ist KoliBri **aufgestellt**?
- Wo wird denn hier was **eingespart**?
- Was macht eigentlich den **Unterschied**?
- Wo steht KoliBri und wo will er **hin**?
- Die EUPL ist die "perfekte" **Lizenz**‽
- Häufig gestellte **Fragen**.

</v-clicks>`,frontmatter:{layout:"egg",handle:1},index:6,start:89,end:112,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:r7,meta:{layout:"image-right-50",image:"/presentation/assets/html-js-css.png",handle:2,slide:{raw:`---
layout: image-right-50
image: '/assets/html-js-css.png'
handle: 2
---

# Web Components

<small class="underline">Was ist eine Web Component?</small>

<strong>Web Components</strong> sind seit Juli 2014 ein <strong>Webstandard</strong> des <strong><kol-abbr _title="World Wide Web Consortium">W3C</kol-abbr></strong>.

<v-clicks>

- Komponente ≙ <strong>eigene</strong> HTML-Elemente
- Komponente besteht aus …
  - HTML <kol-icon _icon="codicon codicon-arrow-right"></kol-icon> <strong>Semantik</strong>
  - JavaScript <kol-icon _icon="codicon codicon-arrow-right"></kol-icon> <strong>Verhalten</strong>
  - CSS <kol-icon _icon="codicon codicon-arrow-right"></kol-icon> <strong>Aussehen</strong>
- <strong>Robuster, konsistenter und teilbarer</strong> Baustein (Shadow DOM)
- **erst 2021** technischer Durchbruch (<kol-abbr _title="Microsoft Internet Explorer 11">IE11</kol-abbr> & <kol-abbr _title="Microsoft Edge Webbrowser">EDGE</kol-abbr>)
- in allen webbasierten Benutzeroberflächen wiederverwendbar (Web & App)<sup>1</sup>

</v-clicks>

<small v-after class="mt-8 float-right text-xs"><sup>1</sup> Es gibt ausführungseitig unterschiedliche Randbedingungen (<kol-link _href="https://dev.to/pahanperera/visual-explanation-and-comparison-of-csr-ssr-ssg-and-isr-34ea" _target="dev.to"><kol-abbr _title="Client Side Rendering">CSR</kol-abbr>, <kol-abbr _title="Server Side Rendering">SSR</kol-abbr>, <kol-abbr _title="Static Side Gerneration">SSG</kol-abbr>, <kol-abbr _title="Incremental Static Regeneration">IRS</kol-abbr></kol-link>)</small>
`,title:"Web Components",level:1,content:`# Web Components

<small class="underline">Was ist eine Web Component?</small>

<strong>Web Components</strong> sind seit Juli 2014 ein <strong>Webstandard</strong> des <strong><kol-abbr _title="World Wide Web Consortium">W3C</kol-abbr></strong>.

<v-clicks>

- Komponente ≙ <strong>eigene</strong> HTML-Elemente
- Komponente besteht aus …
  - HTML <kol-icon _icon="codicon codicon-arrow-right"></kol-icon> <strong>Semantik</strong>
  - JavaScript <kol-icon _icon="codicon codicon-arrow-right"></kol-icon> <strong>Verhalten</strong>
  - CSS <kol-icon _icon="codicon codicon-arrow-right"></kol-icon> <strong>Aussehen</strong>
- <strong>Robuster, konsistenter und teilbarer</strong> Baustein (Shadow DOM)
- **erst 2021** technischer Durchbruch (<kol-abbr _title="Microsoft Internet Explorer 11">IE11</kol-abbr> & <kol-abbr _title="Microsoft Edge Webbrowser">EDGE</kol-abbr>)
- in allen webbasierten Benutzeroberflächen wiederverwendbar (Web & App)<sup>1</sup>

</v-clicks>

<small v-after class="mt-8 float-right text-xs"><sup>1</sup> Es gibt ausführungseitig unterschiedliche Randbedingungen (<kol-link _href="https://dev.to/pahanperera/visual-explanation-and-comparison-of-csr-ssr-ssg-and-isr-34ea" _target="dev.to"><kol-abbr _title="Client Side Rendering">CSR</kol-abbr>, <kol-abbr _title="Server Side Rendering">SSR</kol-abbr>, <kol-abbr _title="Static Side Gerneration">SSG</kol-abbr>, <kol-abbr _title="Incremental Static Regeneration">IRS</kol-abbr></kol-link>)</small>`,frontmatter:{layout:"image-right-50",image:"/presentation/assets/html-js-css.png",handle:2},index:7,start:112,end:139,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:d7,meta:{layout:"image-right-50",image:"/presentation/assets/w3c.jpeg",handle:3,slide:{raw:`---
layout: image-right-50
image: '/assets/w3c.jpeg'
handle: 3
---

# Viele Wege führen nach Rom

<small class="underline">Worin liegt eigentlich das Problem?</small>

Barrierefreie Benutzeroberflächen werden durch die semantisch korrekte Komposition von HTML-Elementen realisiert.

<v-clicks>

Der HTML-Webstandard lässt aber das **Wie** dabei offen. Somit liegt die Aufgabe, das "Problem" zu lösen, bei den Entwickelnden. Darüber hinaus gilt es, die Richtlinien der <kol-abbr _title="Web Content Accessibility Guidelines">WCAG</kol-abbr> mit den gestalterischen Aspekten aus den vielseitigen Styleguides zu vereinen.

Der **große Vorteil für die Bundesverwaltung** liegt darin, dass wir mittels des Web Component-Standards eine für uns **ideale Lösung** gemeinsam **umsetzen**, **wiederverwenden** (teilen), **verbessern** und **erweitern** können.

</v-clicks>
`,title:"Viele Wege führen nach Rom",level:1,content:`# Viele Wege führen nach Rom

<small class="underline">Worin liegt eigentlich das Problem?</small>

Barrierefreie Benutzeroberflächen werden durch die semantisch korrekte Komposition von HTML-Elementen realisiert.

<v-clicks>

Der HTML-Webstandard lässt aber das **Wie** dabei offen. Somit liegt die Aufgabe, das "Problem" zu lösen, bei den Entwickelnden. Darüber hinaus gilt es, die Richtlinien der <kol-abbr _title="Web Content Accessibility Guidelines">WCAG</kol-abbr> mit den gestalterischen Aspekten aus den vielseitigen Styleguides zu vereinen.

Der **große Vorteil für die Bundesverwaltung** liegt darin, dass wir mittels des Web Component-Standards eine für uns **ideale Lösung** gemeinsam **umsetzen**, **wiederverwenden** (teilen), **verbessern** und **erweitern** können.

</v-clicks>`,frontmatter:{layout:"image-right-50",image:"/presentation/assets/w3c.jpeg",handle:3},index:8,start:139,end:159,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:v7,meta:{layout:"image-right-50",image:"/presentation/assets/reaktionsschnell.png",handle:4,slide:{raw:`---
layout: image-right-50
image: '/assets/reaktionsschnell.png'
handle: 4
---

# Motivation

<small class="underline">Welche Ziele können damit verfolgt werden?</small>

Wir wollen **benutzerfreundliche**, **barrierefreie**, **Styleguide-konforme** und **wiederverwendbare** Benutzeroberflächen realisieren.

<v-clicks>

- benutzerfreundlich: **Standard-konform** und **Geräte-agnostisch**
- barrierefrei: **semantisch**es HTML und **kontrastreich**e Farben
- Styleguide-konform: **Komponenten-spezifisches** CSS
- wiederverwendbar: Web Component + **Shadow DOM**

</v-clicks>

<br />
<br />
`,title:"Motivation",level:1,content:`# Motivation

<small class="underline">Welche Ziele können damit verfolgt werden?</small>

Wir wollen **benutzerfreundliche**, **barrierefreie**, **Styleguide-konforme** und **wiederverwendbare** Benutzeroberflächen realisieren.

<v-clicks>

- benutzerfreundlich: **Standard-konform** und **Geräte-agnostisch**
- barrierefrei: **semantisch**es HTML und **kontrastreich**e Farben
- Styleguide-konform: **Komponenten-spezifisches** CSS
- wiederverwendbar: Web Component + **Shadow DOM**

</v-clicks>

<br />
<br />`,frontmatter:{layout:"image-right-50",image:"/presentation/assets/reaktionsschnell.png",handle:4},index:9,start:159,end:183,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:L7,meta:{layout:"image-right-66",image:"/presentation/assets/theming.png",handle:5,slide:{raw:`---
layout: image-right-66
image: '/assets/theming.png'
handle: 5
---

# Theming

<small class="underline">Wie ist KoliBri aufgestellt?</small>

Das Theming entkoppelt das Aussehen vollständig von den barrierefreien Komponenten.

<v-clicks>

1. Komponenten<br/>_(Semantik und Verhalten)_
2. Styleguide/Corporate Design<br/>_(Aussehen)_
3. Kundenspezifischer Kolibri<br/>_(Design System)_


</v-clicks>
`,title:"Theming",level:1,content:`# Theming

<small class="underline">Wie ist KoliBri aufgestellt?</small>

Das Theming entkoppelt das Aussehen vollständig von den barrierefreien Komponenten.

<v-clicks>

1. Komponenten<br/>_(Semantik und Verhalten)_
2. Styleguide/Corporate Design<br/>_(Aussehen)_
3. Kundenspezifischer Kolibri<br/>_(Design System)_


</v-clicks>`,frontmatter:{layout:"image-right-66",image:"/presentation/assets/theming.png",handle:5},index:10,start:183,end:204,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:t6,meta:{layout:"demo-time",handle:6,slide:{raw:`---
layout: demo-time
handle: 6
---

# Live-Demo

<small class="underline">Wo wird denn hier was eingespart?</small>

Im Code-Beispiel wird dargestellt, wie die Anforderungen an die Barrierefreiheit im Button "weg gekapselt" werden.

<!-- <kol-accordion _heading="test" _level="5">
<div slot="content"> -->

\`\`\`tsx {1,14|2-8|9-13|all}
<kol-button _icon="ui-home" _icon-only _label="Primary">
	<button aria-labelledby="574540" class="primary" type="button">
		<span>
			<kol-icon>
				<i aria-hidden="true" class="icofont-ui-home"></i>
			</kol-icon>
		</span>
	</button>
	<kol-tooltip>
		<kol-badge id="574540">
			<span>Primary</span>
		</kol-badge>
	</kol-tooltip>
</kol-button>
\`\`\`

<!-- </div>
</kol-accordion> -->

<small class="mt-8 text-xs"><sup>\\*</sup> Quellcode ist für die bessere Nachvollziehbarkeit stark vereinfacht.</small>
`,title:"Live-Demo",level:1,content:`# Live-Demo

<small class="underline">Wo wird denn hier was eingespart?</small>

Im Code-Beispiel wird dargestellt, wie die Anforderungen an die Barrierefreiheit im Button "weg gekapselt" werden.

<!-- <kol-accordion _heading="test" _level="5">
<div slot="content"> -->

\`\`\`tsx {1,14|2-8|9-13|all}
<kol-button _icon="ui-home" _icon-only _label="Primary">
	<button aria-labelledby="574540" class="primary" type="button">
		<span>
			<kol-icon>
				<i aria-hidden="true" class="icofont-ui-home"></i>
			</kol-icon>
		</span>
	</button>
	<kol-tooltip>
		<kol-badge id="574540">
			<span>Primary</span>
		</kol-badge>
	</kol-tooltip>
</kol-button>
\`\`\`

<!-- </div>
</kol-accordion> -->

<small class="mt-8 text-xs"><sup>\\*</sup> Quellcode ist für die bessere Nachvollziehbarkeit stark vereinfacht.</small>`,frontmatter:{layout:"demo-time",handle:6},index:11,start:204,end:240,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:f6,meta:{layout:"image-right",image:"/presentation/assets/usp.png",handle:7,slide:{raw:`---
layout: image-right
image: '/assets/usp.png'
handle: 7
---

# Alleinstellungsmerkmale

<small class="underline">Was macht eigentlich den Unterschied?</small>

Aus Sicht der öffentlichen Verwaltung hat KoliBri eine ganze Reihe an Alleinstellungsmerkmalen:

<v-clicks>

- **Spezifikation** - <span class="text-gray-500">Barrierefreiheit kommt zuerst (by Design)</span>
- **Theming** - <span class="text-gray-500">Entkoppeltes Styling im Shadow-Root (Theming)</span>
- **Zugänglichkeit** - <span class="text-gray-500">Code-Hoheit liegt beim Bund (Digitale Souveränität)</span>
- **Architektur** - <span class="text-gray-500">Einmalige Implementierung (Framework-agnostisch)</span>
- **Robustheit** - <span class="text-gray-500">Web Components im restriktiven Modus (Shadow-Root)</span>

</v-clicks>
`,title:"Alleinstellungsmerkmale",level:1,content:`# Alleinstellungsmerkmale

<small class="underline">Was macht eigentlich den Unterschied?</small>

Aus Sicht der öffentlichen Verwaltung hat KoliBri eine ganze Reihe an Alleinstellungsmerkmalen:

<v-clicks>

- **Spezifikation** - <span class="text-gray-500">Barrierefreiheit kommt zuerst (by Design)</span>
- **Theming** - <span class="text-gray-500">Entkoppeltes Styling im Shadow-Root (Theming)</span>
- **Zugänglichkeit** - <span class="text-gray-500">Code-Hoheit liegt beim Bund (Digitale Souveränität)</span>
- **Architektur** - <span class="text-gray-500">Einmalige Implementierung (Framework-agnostisch)</span>
- **Robustheit** - <span class="text-gray-500">Web Components im restriktiven Modus (Shadow-Root)</span>

</v-clicks>`,frontmatter:{layout:"image-right",image:"/presentation/assets/usp.png",handle:7},index:12,start:240,end:262,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:k6,meta:{layout:"image-right",image:"/presentation/assets/oss.png",handle:9,slide:{raw:`---
layout: image-right
image: '/assets/oss.png'
handle: 9
---

# Ausblick

<small class="underline">Wo will KoliBri hin?</small>

**KoliBri** wurde durch den **ITZBund** für die **Open Source**-Entwicklung **freigegeben**, um für alle zugänglich zu sein und um aus dem Feedback der Community kontinuierlich verbessert und erweitert werden zu können.

<v-click>

**KoliBri** bietet hierfür eine optimale Wiederverwendbarkeit, weil er …

</v-click>

<v-clicks>

- **klein** - <span class="text-gray-500">kleinteilige Komponenten</span>,
- **schnell** - <span class="text-gray-500">automatisierte DevOps-Pipelines</span>,
- **wendig** - <span class="text-gray-500">Framework-agnostisch</span> und
- **farbenfroh** - <span class="text-gray-500">entkoppeltes Theming</span>

</v-clicks>

<v-after>

… ist.

</v-after>
`,title:"Ausblick",level:1,content:`# Ausblick

<small class="underline">Wo will KoliBri hin?</small>

**KoliBri** wurde durch den **ITZBund** für die **Open Source**-Entwicklung **freigegeben**, um für alle zugänglich zu sein und um aus dem Feedback der Community kontinuierlich verbessert und erweitert werden zu können.

<v-click>

**KoliBri** bietet hierfür eine optimale Wiederverwendbarkeit, weil er …

</v-click>

<v-clicks>

- **klein** - <span class="text-gray-500">kleinteilige Komponenten</span>,
- **schnell** - <span class="text-gray-500">automatisierte DevOps-Pipelines</span>,
- **wendig** - <span class="text-gray-500">Framework-agnostisch</span> und
- **farbenfroh** - <span class="text-gray-500">entkoppeltes Theming</span>

</v-clicks>

<v-after>

… ist.

</v-after>`,frontmatter:{layout:"image-right",image:"/presentation/assets/oss.png",handle:9},index:13,start:262,end:295,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:E6,meta:{layout:"image-right",image:"/presentation/assets/eupl.jpeg",handle:10,slide:{raw:`---
layout: image-right
image: '/assets/eupl.jpeg'
handle: 10
---

# Lizenz

<small class="underline">Die EUPL ist die "perfekte" Lizenz‽</small>

Die "Open-Source-Lizenz für die Europäische Union" (EUPL) ist eine von der Europäischen Union herausgegebene Copyleft-Lizenz für die Lizenzierung freier Software.

<small>

<v-clicks>

- Der **Quellcode** ist die konkrete Implementierung der Komponenten und beinhaltet das schützenswerte geistige Eigentum der Urheber:innen. Es wird durch das Code-Repository (Git) repräsentiert und durch die Copyleft-Klausel geschützt, wenn davon eine Kopie (z.B. Fork) erstellt wird.<br/><br/>
- Aus dem Quellcode werden die sogenannten **Artefakte** "gebauten" und über eine öffentliche Plattform (npm) verteilt. Alle Projekte können diese Artefakte herunterladen und die darin enthaltenen Komponenten uneingeschränkt in ihren Anwendungen wiederverwenden und von außen, wie vorgesehen, konfigurieren.

</v-clicks>

<br/>
</small>

<v-clicks>

- 🤗 Die reine Wiederverwendung der Artefakte ist vollkommen **unproblematisch**!
- 🤔 **Achtung** beim Kopieren von Code! _(zieht **Copyleft** nach sich)_
- 😉 Dann einfach Änderungswünsche direkt bei KoliBri **einbringen**!

</v-clicks>
`,title:"Lizenz",level:1,content:`# Lizenz

<small class="underline">Die EUPL ist die "perfekte" Lizenz‽</small>

Die "Open-Source-Lizenz für die Europäische Union" (EUPL) ist eine von der Europäischen Union herausgegebene Copyleft-Lizenz für die Lizenzierung freier Software.

<small>

<v-clicks>

- Der **Quellcode** ist die konkrete Implementierung der Komponenten und beinhaltet das schützenswerte geistige Eigentum der Urheber:innen. Es wird durch das Code-Repository (Git) repräsentiert und durch die Copyleft-Klausel geschützt, wenn davon eine Kopie (z.B. Fork) erstellt wird.<br/><br/>
- Aus dem Quellcode werden die sogenannten **Artefakte** "gebauten" und über eine öffentliche Plattform (npm) verteilt. Alle Projekte können diese Artefakte herunterladen und die darin enthaltenen Komponenten uneingeschränkt in ihren Anwendungen wiederverwenden und von außen, wie vorgesehen, konfigurieren.

</v-clicks>

<br/>
</small>

<v-clicks>

- 🤗 Die reine Wiederverwendung der Artefakte ist vollkommen **unproblematisch**!
- 🤔 **Achtung** beim Kopieren von Code! _(zieht **Copyleft** nach sich)_
- 😉 Dann einfach Änderungswünsche direkt bei KoliBri **einbringen**!

</v-clicks>`,frontmatter:{layout:"image-right",image:"/presentation/assets/eupl.jpeg",handle:10},index:14,start:295,end:327,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:P6,meta:{layout:"image-right",image:"/presentation/assets/swizzling.png",handle:11,slide:{raw:`---
layout: image-right
image: '/assets/swizzling.png'
handle: 11
---

# Fragen

<small class="underline">Häufig gestellt Fragen.</small>

<small>
<v-clicks>

- **Wie abhängig mache ich mich, wenn ich KoliBri einsetze?**<br/>
  Vergleicht man KoliBri mit einem LEGO®-Set, dann kann man die enthaltenen Bausteine einfach mir anderen Bausteinen mischen, um die Gesamtanwendung abzubilden _(s. blaue, orange und graue Komponenten)_.<br/><br/>
- **Wie kann ich eine Komponente beeinflussen, wenn nötig?**<br/>
  KoliBri-Komponenten sind zur Sicherstellung der Barrierefreiheit sehr restriktiv und werden durch Komposition wiederverwendet. Anpassungen von außen lassen sich nur durch das **Wrappen** oder den **Expert-Slot** vornehmen _(s. Orange in Blau, Blau in Orange)_. Das Styling ist über das **Theme-Konzept** durch Konfiguration möglich.<br/><br/>
- **Was mache ich, wenn eine Komponente oder Funktion fehlt?**<br/>
  Neue **fachlich neutrale Komponenten** oder **Funktionen** sollen innerhalb von KoliBri realisiert werden. Hierbei ist das **Mitwirken** ausdrücklich erwünscht und beschleunigt die Umsetzung.

</v-clicks>
</small>
`,title:"Fragen",level:1,content:`# Fragen

<small class="underline">Häufig gestellt Fragen.</small>

<small>
<v-clicks>

- **Wie abhängig mache ich mich, wenn ich KoliBri einsetze?**<br/>
  Vergleicht man KoliBri mit einem LEGO®-Set, dann kann man die enthaltenen Bausteine einfach mir anderen Bausteinen mischen, um die Gesamtanwendung abzubilden _(s. blaue, orange und graue Komponenten)_.<br/><br/>
- **Wie kann ich eine Komponente beeinflussen, wenn nötig?**<br/>
  KoliBri-Komponenten sind zur Sicherstellung der Barrierefreiheit sehr restriktiv und werden durch Komposition wiederverwendet. Anpassungen von außen lassen sich nur durch das **Wrappen** oder den **Expert-Slot** vornehmen _(s. Orange in Blau, Blau in Orange)_. Das Styling ist über das **Theme-Konzept** durch Konfiguration möglich.<br/><br/>
- **Was mache ich, wenn eine Komponente oder Funktion fehlt?**<br/>
  Neue **fachlich neutrale Komponenten** oder **Funktionen** sollen innerhalb von KoliBri realisiert werden. Hierbei ist das **Mitwirken** ausdrücklich erwünscht und beschleunigt die Umsetzung.

</v-clicks>
</small>`,frontmatter:{layout:"image-right",image:"/presentation/assets/swizzling.png",handle:11},index:15,start:327,end:350,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:M6,meta:{layout:"image-right-50",image:"/presentation/assets/get-started.png",handle:10,style:"width: 100%",slide:{raw:`---
layout: image-right-50
image: '/assets/get-started.png'
handle: 10
style: 'width: 100%'
---

# Erste Schritte

Du kannst folgendes tun, um **KoliBri** kennenzulernen …

<v-clicks>

- <kol-link _href="https://public-ui.github.io" _target="website">Lese mehr über KoliBri</kol-link> (Dokumentation)
- <kol-link _href="https://public-ui.github.io/docs/get-started/erste-schritte" _target="website">Probiere KoliBri aus</kol-link> (Create-App)
- <kol-link _href="https://github.com/public-ui/kolibri/releases" _target="github">Informiere Dich über die Neuerungen</kol-link> (Changelog)
- <kol-link _href="https://public-ui.github.io/docs/concepts/styling/theming" _target="website">Gestalte Dein eigenen KoliBri</kol-link> (Designer)
- <kol-link _href="https://github.com/public-ui/kolibri/issues" _target="github">Gib uns Feedback</kol-link> (Feature, Issue)
- <kol-link _href="https://github.com/public-ui/kolibri" _target="github">Folge uns auf GitHub</kol-link> (Follow-Button)

</v-clicks>

<br />

<v-after>

<strong>Lasst uns KoliBri bunter und besser machen!</strong>

</v-after>
`,title:"Erste Schritte",level:1,content:`# Erste Schritte

Du kannst folgendes tun, um **KoliBri** kennenzulernen …

<v-clicks>

- <kol-link _href="https://public-ui.github.io" _target="website">Lese mehr über KoliBri</kol-link> (Dokumentation)
- <kol-link _href="https://public-ui.github.io/docs/get-started/erste-schritte" _target="website">Probiere KoliBri aus</kol-link> (Create-App)
- <kol-link _href="https://github.com/public-ui/kolibri/releases" _target="github">Informiere Dich über die Neuerungen</kol-link> (Changelog)
- <kol-link _href="https://public-ui.github.io/docs/concepts/styling/theming" _target="website">Gestalte Dein eigenen KoliBri</kol-link> (Designer)
- <kol-link _href="https://github.com/public-ui/kolibri/issues" _target="github">Gib uns Feedback</kol-link> (Feature, Issue)
- <kol-link _href="https://github.com/public-ui/kolibri" _target="github">Folge uns auf GitHub</kol-link> (Follow-Button)

</v-clicks>

<br />

<v-after>

<strong>Lasst uns KoliBri bunter und besser machen!</strong>

</v-after>`,frontmatter:{layout:"image-right-50",image:"/presentation/assets/get-started.png",handle:10,style:"width: 100%"},index:16,start:350,end:380,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:V6,meta:{layout:"center",slide:{raw:`---
layout: center
---

<img class="m-auto block w-50 pb-15" src="/presentation/assets/qr-code.png" />
<small class="underline">Lasst uns gemeinsam KoliBri bunter und besser machen!</small>

# Vielen Dank für Ihre Aufmerksamkeit

<ul class="flex">
  <li class="list-none"><kol-link _href="https://public-ui.github.io" _target="storybook"><kol-icon _icon="codicon codicon-book" /> Dokumentation</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="mailto:kolibri@itzbund.de" _target="storybook"><kol-icon _icon="codicon codicon-mail" /> kolibri@itzbund.de</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="https://github.com/public-ui" _target="storybook"><kol-icon _icon="codicon codicon-github" /> GitHub</kol-link></li>
</ul>
`,title:"Vielen Dank für Ihre Aufmerksamkeit",level:1,content:`<img class="m-auto block w-50 pb-15" src="/presentation/assets/qr-code.png" />
<small class="underline">Lasst uns gemeinsam KoliBri bunter und besser machen!</small>

# Vielen Dank für Ihre Aufmerksamkeit

<ul class="flex">
  <li class="list-none"><kol-link _href="https://public-ui.github.io" _target="storybook"><kol-icon _icon="codicon codicon-book" /> Dokumentation</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="mailto:kolibri@itzbund.de" _target="storybook"><kol-icon _icon="codicon codicon-mail" /> kolibri@itzbund.de</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="https://github.com/public-ui" _target="storybook"><kol-icon _icon="codicon codicon-github" /> GitHub</kol-link></li>
</ul>`,frontmatter:{layout:"center"},index:17,start:380,end:397,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:X6,meta:{slide:{raw:`
<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />
`,content:'<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />',frontmatter:{},index:18,start:398,end:401,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:rS,meta:{slide:{raw:`
# Bildnachweise

<div class="grid grid-cols-[10rem_auto_4rem_10rem_auto] items-center gap-4">
  <div>
    <img src="/presentation/assets/reaktionsschnell.png" class="mt-8 w-20 m-auto" />
  </div>
  <div class="mt-6">
    <kol-link _href="https://www.flaticon.com/de/kostenlose-icons/reaktionsschnell" _target="flaticon">Reaktionsschnell Icons erstellt von Freepik - Flaticon</kol-link>
  </div>
  <div></div>
  <div>
    <img src="/presentation/assets/usp.png" class="mt-8 w-20 m-auto" />
  </div>
  <div class="mt-6">
    <kol-link _href="https://www.flaticon.com/de/kostenlose-icons/usp" _target="flaticon">Usp Icons erstellt von Freepik - Flaticon</kol-link>
  </div>
  <div>
    <img src="/presentation/assets/berge.png" class="mt-8 w-20 m-auto" />
  </div>
  <div class="mt-6">
    <kol-link _href="https://www.flaticon.com/de/kostenlose-icons/berg" _target="flaticon">Berg Icons erstellt von Freepik - Flaticon</kol-link>
  </div>
  <div></div>
  <div>
    <img src="/presentation/assets/teleskop.png" class="mt-8 w-20 m-auto" />
  </div>
  <div class="mt-6">
    <kol-link _href="https://www.flaticon.com/de/kostenlose-icons/fernglas" _target="flaticon">Fernglas Icons erstellt von Freepik - Flaticon</kol-link>
  </div>
</div>
`,title:"Bildnachweise",level:1,content:`# Bildnachweise

<div class="grid grid-cols-[10rem_auto_4rem_10rem_auto] items-center gap-4">
  <div>
    <img src="/presentation/assets/reaktionsschnell.png" class="mt-8 w-20 m-auto" />
  </div>
  <div class="mt-6">
    <kol-link _href="https://www.flaticon.com/de/kostenlose-icons/reaktionsschnell" _target="flaticon">Reaktionsschnell Icons erstellt von Freepik - Flaticon</kol-link>
  </div>
  <div></div>
  <div>
    <img src="/presentation/assets/usp.png" class="mt-8 w-20 m-auto" />
  </div>
  <div class="mt-6">
    <kol-link _href="https://www.flaticon.com/de/kostenlose-icons/usp" _target="flaticon">Usp Icons erstellt von Freepik - Flaticon</kol-link>
  </div>
  <div>
    <img src="/presentation/assets/berge.png" class="mt-8 w-20 m-auto" />
  </div>
  <div class="mt-6">
    <kol-link _href="https://www.flaticon.com/de/kostenlose-icons/berg" _target="flaticon">Berg Icons erstellt von Freepik - Flaticon</kol-link>
  </div>
  <div></div>
  <div>
    <img src="/presentation/assets/teleskop.png" class="mt-8 w-20 m-auto" />
  </div>
  <div class="mt-6">
    <kol-link _href="https://www.flaticon.com/de/kostenlose-icons/fernglas" _target="flaticon">Fernglas Icons erstellt von Freepik - Flaticon</kol-link>
  </div>
</div>`,frontmatter:{},index:19,start:402,end:434,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",component:j3,meta:{layout:"end"}}],Xe=nS,Fn=[{name:"play",path:"/",component:s4,children:[...Xe]},{name:"print",path:"/print",component:I3},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(o){if(!Pn.remote||Pn.remote===o.query.password)return!0;if(Pn.remote&&o.query.password===void 0){const t=prompt("Enter password");if(Pn.remote===t)return!0}return o.params.no?{path:`/${o.params.no}`}:{path:""}};Fn.push({path:"/presenter/print",component:()=>Gt(()=>import("./PresenterPrint-700c6b0c.js"),["assets/PresenterPrint-700c6b0c.js","assets/NoteDisplay-fe284b20.js"])}),Fn.push({name:"notes",path:"/notes",component:()=>Gt(()=>import("./NotesView-64d33662.js"),["assets/NotesView-64d33662.js","assets/NoteDisplay-fe284b20.js"]),beforeEnter:e}),Fn.push({name:"presenter",path:"/presenter/:no",component:()=>Gt(()=>import("./Presenter-62e7ad43.js"),["assets/Presenter-62e7ad43.js","assets/NoteDisplay-fe284b20.js","assets/DrawingControls-37ec2b0a.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),Fn.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const _o=Y1({history:Xy("/presentation"),routes:Fn});function iS(e,o,{mode:t="replace"}={}){return C({get(){const r=_o.currentRoute.value.query[e];return r==null?o??null:Array.isArray(r)?r.filter(Boolean):r},set(r){fo(()=>{_o[z(t)]({query:{..._o.currentRoute.value.query,[e]:r}})})}})}const bb=H(0);fo(()=>{_o.afterEach(async()=>{await fo(),bb.value+=1})});const gb=H(0),Do=C(()=>_o.currentRoute.value),ln=C(()=>Do.value.query.print!==void 0),aS=C(()=>Do.value.query.print==="clicks"),Ot=C(()=>Do.value.query.embedded!==void 0),yo=C(()=>Do.value.path.startsWith("/presenter")),lS=C(()=>Do.value.path.startsWith("/notes")),Dn=C(()=>ln.value&&!aS.value),ws=C(()=>Do.value.query.password),sS=C(()=>!yo.value&&(!Pe.remote||ws.value===Pe.remote)),Ff=iS("clicks","0"),cS=C(()=>Xe.length-1),dS=C(()=>Do.value.path),Ve=C(()=>parseInt(dS.value.split(/\//g).slice(-1)[0])||1);C(()=>Ha(Ve.value));const mo=C(()=>Xe.find(e=>e.path===`${Ve.value}`));C(()=>{var e,o,t;return(t=(o=(e=mo.value)==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:t.id});C(()=>{var e,o;return((o=(e=mo.value)==null?void 0:e.meta)==null?void 0:o.layout)||(Ve.value===1?"cover":"default")});const vl=C(()=>Xe.find(e=>e.path===`${Math.min(Xe.length,Ve.value+1)}`)),fS=C(()=>Xe.find(e=>e.path===`${Math.max(1,Ve.value-1)}`)),uS=C(()=>{var e,o;return bb.value,((o=(e=mo.value)==null?void 0:e.meta)==null?void 0:o.__clicksElements)||[]}),Ko=C({get(){if(Dn.value)return 99999;let e=+(Ff.value||0);return isNaN(e)&&(e=0),e},set(e){Ff.value=e.toString()}}),va=C(()=>{var e,o;return+(((o=(e=mo.value)==null?void 0:e.meta)==null?void 0:o.clicks)??uS.value.length)}),pS=C(()=>Ve.value<Xe.length-1||Ko.value<va.value),hS=C(()=>Ve.value>1||Ko.value>0),bS=C(()=>Xe.filter(e=>{var o,t;return(t=(o=e.meta)==null?void 0:o.slide)==null?void 0:t.title}).reduce((e,o)=>(wc(e,o),e),[])),gS=C(()=>yc(bS.value,mo.value));C(()=>xc(gS.value));const mS=C(()=>xS(gb.value,mo.value,fS.value));_e(mo,(e,o)=>{gb.value=Number(e==null?void 0:e.path)-Number(o==null?void 0:o.path)});function Yt(){va.value<=Ko.value?si():Ko.value+=1}async function Zt(){Ko.value<=0?await ci():Ko.value-=1}function Ha(e){return yo.value?`/presenter/${e}`:`/${e}`}function si(){const e=Math.min(Xe.length,Ve.value+1);return sn(e)}async function ci(e=!0){const o=Math.max(1,Ve.value-1);await sn(o),e&&va.value&&_o.replace({query:{...Do.value.query,clicks:va.value}})}function sn(e,o){return _o.push({path:Ha(e),query:{...Do.value.query,clicks:o}})}function vS(e){const o=H(0),{direction:t,distanceX:r,distanceY:n}=py(e,{onSwipeStart(i){i.pointerType==="touch"&&(ii.value||(o.value=Ql()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!o.value||ii.value)return;const a=Math.abs(r.value),l=Math.abs(n.value);a/window.innerWidth>.3||a>100?t.value===Et.LEFT?Yt():Zt():(l/window.innerHeight>.4||l>200)&&(t.value===Et.DOWN?ci():si())}})}async function ys(){const{saveAs:e}=await Gt(()=>import("./FileSaver.min-a6a2be5b.js").then(o=>o.F),[]);e(fh(Pe.download)?Pe.download:Pe.exportFilename?`${Pe.exportFilename}.pdf`:"/presentationslidev-exported.pdf",`${Pe.title}.pdf`)}async function kS(e){var o,t;if(e==null){const r=(t=(o=mo.value)==null?void 0:o.meta)==null?void 0:t.slide;if(!(r!=null&&r.filepath))return!1;e=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function wc(e,o,t=1){var n,i,a,l,s;const r=(i=(n=o.meta)==null?void 0:n.slide)==null?void 0:i.level;r&&r>t&&e.length>0?wc(e[e.length-1].children,o,t+1):e.push({children:[],level:t,path:o.path,hideInToc:!!((a=o.meta)!=null&&a.hideInToc),title:(s=(l=o.meta)==null?void 0:l.slide)==null?void 0:s.title})}function yc(e,o,t=!1,r){return e.map(n=>{const i={...n,active:n.path===(o==null?void 0:o.path),hasActiveParent:t};return i.children.length>0&&(i.children=yc(i.children,o,i.active||i.hasActiveParent,i)),r&&(i.active||i.activeParent)&&(r.activeParent=!0),i})}function xc(e,o=1){return e.filter(t=>!t.hideInToc).map(t=>({...t,children:xc(t.children,o+1)}))}const wS={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function yS(e,o=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let t=e.name.includes("|")?e.name:wS[e.name]||e.name;if(t.includes("|")){const[r,n]=t.split("|").map(i=>i.trim());t=o?n:r}if(t)return{...e,name:t}}function xS(e,o,t){var n,i;let r=e>0?(n=t==null?void 0:t.meta)==null?void 0:n.transition:(i=o==null?void 0:o.meta)==null?void 0:i.transition;return r||(r=Pe.transition),yS(r,e<0)}function _S(){const e=Pe.titleTemplate.replace("%s",Pe.title||"Slidev");ic({title:e}),Ak(Pe.htmlAttrs),Dk(`${e} - shared`),Vk(`${e} - drawings`);const o=`${location.origin}_${Nk()}`;function t(){lS.value||!yo.value&&!Ik.includes(location.host.split(":")[0])||(yo.value?(yn("page",+Ve.value),yn("clicks",Ko.value)):(yn("viewerPage",+Ve.value),yn("viewerClicks",Ko.value)),yn("lastUpdate",{id:o,type:yo.value?"presenter":"viewer",time:new Date().getTime()}))}_o.afterEach(t),_e(Ko,t),Uk(r=>{var i;_o.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((i=r.lastUpdate)==null?void 0:i.type)==="presenter"&&(+r.page!=+Ve.value||+Ko.value!=+r.clicks)&&_o.replace({path:Ha(r.page),query:{..._o.currentRoute.value.query,clicks:r.clicks||0}})})}const OS=se({__name:"App",setup(e){return Z(ie),_S(),(o,t)=>{const r=sa("RouterView"),n=sa("StarportCarrier");return A(),Y(Fe,null,[X(r),X(n)],64)}}}),SS=ae(OS,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/App.vue"]]);function kl(e){return e!==null&&typeof e=="object"}function xs(e,o,t=".",r){if(!kl(o))return xs(e,{},t,r);const n=Object.assign({},o);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const a=e[i];a!=null&&(r&&r(n,i,a,t)||(Array.isArray(a)&&Array.isArray(n[i])?n[i]=[...a,...n[i]]:kl(a)&&kl(n[i])?n[i]=xs(a,n[i],(t?`${t}.`:"")+i.toString(),r):n[i]=a))}return n}function zS(e){return(...o)=>o.reduce((t,r)=>xs(t,r,"",e),{})}const ES=zS(),mb=1/60*1e3,LS=typeof performance<"u"?()=>performance.now():()=>Date.now(),vb=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(LS()),mb);function TS(e){let o=[],t=[],r=0,n=!1,i=!1;const a=new WeakSet,l={schedule:(s,c=!1,d=!1)=>{const f=d&&n,p=f?o:t;return c&&a.add(s),p.indexOf(s)===-1&&(p.push(s),f&&n&&(r=o.length)),s},cancel:s=>{const c=t.indexOf(s);c!==-1&&t.splice(c,1),a.delete(s)},process:s=>{if(n){i=!0;return}if(n=!0,[o,t]=[t,o],t.length=0,r=o.length,r)for(let c=0;c<r;c++){const d=o[c];d(s),a.has(d)&&(l.schedule(d),e())}n=!1,i&&(i=!1,l.process(s))}};return l}const AS=40;let _s=!0,di=!1,Os=!1;const en={delta:0,timestamp:0},yi=["read","update","preRender","render","postRender"],qa=yi.reduce((e,o)=>(e[o]=TS(()=>di=!0),e),{}),Ss=yi.reduce((e,o)=>{const t=qa[o];return e[o]=(r,n=!1,i=!1)=>(di||FS(),t.schedule(r,n,i)),e},{}),CS=yi.reduce((e,o)=>(e[o]=qa[o].cancel,e),{});yi.reduce((e,o)=>(e[o]=()=>qa[o].process(en),e),{});const PS=e=>qa[e].process(en),kb=e=>{di=!1,en.delta=_s?mb:Math.max(Math.min(e-en.timestamp,AS),1),en.timestamp=e,Os=!0,yi.forEach(PS),Os=!1,di&&(_s=!1,vb(kb))},FS=()=>{di=!0,_s=!0,Os||vb(kb)},wb=()=>en;function yb(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t}var _c=function(){},fi=function(){};_c=function(e,o){!e&&typeof console<"u"&&console.warn(o)},fi=function(e,o){if(!e)throw new Error(o)};const zs=(e,o,t)=>Math.min(Math.max(t,e),o),wl=.001,$S=.01,$f=10,IS=.05,NS=1;function RS({duration:e=800,bounce:o=.25,velocity:t=0,mass:r=1}){let n,i;_c(e<=$f*1e3,"Spring duration must be 10 seconds or less");let a=1-o;a=zs(IS,NS,a),e=zs($S,$f,e/1e3),a<1?(n=c=>{const d=c*a,f=d*e,p=d-t,b=Es(c,a),h=Math.exp(-f);return wl-p/b*h},i=c=>{const f=c*a*e,p=f*t+t,b=Math.pow(a,2)*Math.pow(c,2)*e,h=Math.exp(-f),g=Es(Math.pow(c,2),a);return(-n(c)+wl>0?-1:1)*((p-b)*h)/g}):(n=c=>{const d=Math.exp(-c*e),f=(c-t)*e+1;return-wl+d*f},i=c=>{const d=Math.exp(-c*e),f=(t-c)*(e*e);return d*f});const l=5/e,s=MS(n,i,l);if(e=e*1e3,isNaN(s))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(s,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:e}}}const jS=12;function MS(e,o,t){let r=t;for(let n=1;n<jS;n++)r=r-e(r)/o(r);return r}function Es(e,o){return e*Math.sqrt(1-o*o)}const KS=["duration","bounce"],BS=["stiffness","damping","mass"];function If(e,o){return o.some(t=>e[t]!==void 0)}function DS(e){let o=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!If(e,BS)&&If(e,KS)){const t=RS(e);o=Object.assign(Object.assign(Object.assign({},o),t),{velocity:0,mass:1}),o.isResolvedFromDuration=!0}return o}function Oc(e){var{from:o=0,to:t=1,restSpeed:r=2,restDelta:n}=e,i=yb(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:o};let{stiffness:l,damping:s,mass:c,velocity:d,duration:f,isResolvedFromDuration:p}=DS(i),b=Nf,h=Nf;function g(){const m=d?-(d/1e3):0,k=t-o,w=s/(2*Math.sqrt(l*c)),y=Math.sqrt(l/c)/1e3;if(n===void 0&&(n=Math.min(Math.abs(t-o)/100,.4)),w<1){const x=Es(y,w);b=E=>{const P=Math.exp(-w*y*E);return t-P*((m+w*y*k)/x*Math.sin(x*E)+k*Math.cos(x*E))},h=E=>{const P=Math.exp(-w*y*E);return w*y*P*(Math.sin(x*E)*(m+w*y*k)/x+k*Math.cos(x*E))-P*(Math.cos(x*E)*(m+w*y*k)-x*k*Math.sin(x*E))}}else if(w===1)b=x=>t-Math.exp(-y*x)*(k+(m+y*k)*x);else{const x=y*Math.sqrt(w*w-1);b=E=>{const P=Math.exp(-w*y*E),$=Math.min(x*E,300);return t-P*((m+w*y*k)*Math.sinh($)+x*k*Math.cosh($))/x}}}return g(),{next:m=>{const k=b(m);if(p)a.done=m>=f;else{const w=h(m)*1e3,y=Math.abs(w)<=r,x=Math.abs(t-k)<=n;a.done=y&&x}return a.value=a.done?t:k,a},flipTarget:()=>{d=-d,[o,t]=[t,o],g()}}}Oc.needsInterpolation=(e,o)=>typeof e=="string"||typeof o=="string";const Nf=e=>0,xb=(e,o,t)=>{const r=o-e;return r===0?1:(t-e)/r},Sc=(e,o,t)=>-t*e+t*o+e,_b=(e,o)=>t=>Math.max(Math.min(t,o),e),Un=e=>e%1?Number(e.toFixed(5)):e,ui=/(-)?([\d]*\.?[\d])+/g,Ls=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,US=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function xi(e){return typeof e=="string"}const _i={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Hn=Object.assign(Object.assign({},_i),{transform:_b(0,1)}),Ki=Object.assign(Object.assign({},_i),{default:1}),zc=e=>({test:o=>xi(o)&&o.endsWith(e)&&o.split(" ").length===1,parse:parseFloat,transform:o=>`${o}${e}`}),cr=zc("deg"),qn=zc("%"),xe=zc("px"),Rf=Object.assign(Object.assign({},qn),{parse:e=>qn.parse(e)/100,transform:e=>qn.transform(e*100)}),Ec=(e,o)=>t=>!!(xi(t)&&US.test(t)&&t.startsWith(e)||o&&Object.prototype.hasOwnProperty.call(t,o)),Ob=(e,o,t)=>r=>{if(!xi(r))return r;const[n,i,a,l]=r.match(ui);return{[e]:parseFloat(n),[o]:parseFloat(i),[t]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},yr={test:Ec("hsl","hue"),parse:Ob("hue","saturation","lightness"),transform:({hue:e,saturation:o,lightness:t,alpha:r=1})=>"hsla("+Math.round(e)+", "+qn.transform(Un(o))+", "+qn.transform(Un(t))+", "+Un(Hn.transform(r))+")"},HS=_b(0,255),yl=Object.assign(Object.assign({},_i),{transform:e=>Math.round(HS(e))}),Ut={test:Ec("rgb","red"),parse:Ob("red","green","blue"),transform:({red:e,green:o,blue:t,alpha:r=1})=>"rgba("+yl.transform(e)+", "+yl.transform(o)+", "+yl.transform(t)+", "+Un(Hn.transform(r))+")"};function qS(e){let o="",t="",r="",n="";return e.length>5?(o=e.substr(1,2),t=e.substr(3,2),r=e.substr(5,2),n=e.substr(7,2)):(o=e.substr(1,1),t=e.substr(2,1),r=e.substr(3,1),n=e.substr(4,1),o+=o,t+=t,r+=r,n+=n),{red:parseInt(o,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:n?parseInt(n,16)/255:1}}const Ts={test:Ec("#"),parse:qS,transform:Ut.transform},wo={test:e=>Ut.test(e)||Ts.test(e)||yr.test(e),parse:e=>Ut.test(e)?Ut.parse(e):yr.test(e)?yr.parse(e):Ts.parse(e),transform:e=>xi(e)?e:e.hasOwnProperty("red")?Ut.transform(e):yr.transform(e)},Sb="${c}",zb="${n}";function VS(e){var o,t,r,n;return isNaN(e)&&xi(e)&&((t=(o=e.match(ui))===null||o===void 0?void 0:o.length)!==null&&t!==void 0?t:0)+((n=(r=e.match(Ls))===null||r===void 0?void 0:r.length)!==null&&n!==void 0?n:0)>0}function Eb(e){typeof e=="number"&&(e=`${e}`);const o=[];let t=0;const r=e.match(Ls);r&&(t=r.length,e=e.replace(Ls,Sb),o.push(...r.map(wo.parse)));const n=e.match(ui);return n&&(e=e.replace(ui,zb),o.push(...n.map(_i.parse))),{values:o,numColors:t,tokenised:e}}function Lb(e){return Eb(e).values}function Tb(e){const{values:o,numColors:t,tokenised:r}=Eb(e),n=o.length;return i=>{let a=r;for(let l=0;l<n;l++)a=a.replace(l<t?Sb:zb,l<t?wo.transform(i[l]):Un(i[l]));return a}}const WS=e=>typeof e=="number"?0:e;function GS(e){const o=Lb(e);return Tb(e)(o.map(WS))}const Oi={test:VS,parse:Lb,createTransformer:Tb,getAnimatableNone:GS},XS=new Set(["brightness","contrast","saturate","opacity"]);function YS(e){let[o,t]=e.slice(0,-1).split("(");if(o==="drop-shadow")return e;const[r]=t.match(ui)||[];if(!r)return e;const n=t.replace(r,"");let i=XS.has(o)?1:0;return r!==t&&(i*=100),o+"("+i+n+")"}const ZS=/([a-z-]*)\(.*?\)/g,As=Object.assign(Object.assign({},Oi),{getAnimatableNone:e=>{const o=e.match(ZS);return o?o.map(YS).join(" "):e}});function xl(e,o,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(o-e)*6*t:t<1/2?o:t<2/3?e+(o-e)*(2/3-t)*6:e}function jf({hue:e,saturation:o,lightness:t,alpha:r}){e/=360,o/=100,t/=100;let n=0,i=0,a=0;if(!o)n=i=a=t;else{const l=t<.5?t*(1+o):t+o-t*o,s=2*t-l;n=xl(s,l,e+1/3),i=xl(s,l,e),a=xl(s,l,e-1/3)}return{red:Math.round(n*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:r}}const JS=(e,o,t)=>{const r=e*e,n=o*o;return Math.sqrt(Math.max(0,t*(n-r)+r))},QS=[Ts,Ut,yr],Mf=e=>QS.find(o=>o.test(e)),Kf=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Ab=(e,o)=>{let t=Mf(e),r=Mf(o);fi(!!t,Kf(e)),fi(!!r,Kf(o));let n=t.parse(e),i=r.parse(o);t===yr&&(n=jf(n),t=Ut),r===yr&&(i=jf(i),r=Ut);const a=Object.assign({},n);return l=>{for(const s in a)s!=="alpha"&&(a[s]=JS(n[s],i[s],l));return a.alpha=Sc(n.alpha,i.alpha,l),t.transform(a)}},e8=e=>typeof e=="number",o8=(e,o)=>t=>o(e(t)),Cb=(...e)=>e.reduce(o8);function Pb(e,o){return e8(e)?t=>Sc(e,o,t):wo.test(e)?Ab(e,o):$b(e,o)}const Fb=(e,o)=>{const t=[...e],r=t.length,n=e.map((i,a)=>Pb(i,o[a]));return i=>{for(let a=0;a<r;a++)t[a]=n[a](i);return t}},t8=(e,o)=>{const t=Object.assign(Object.assign({},e),o),r={};for(const n in t)e[n]!==void 0&&o[n]!==void 0&&(r[n]=Pb(e[n],o[n]));return n=>{for(const i in r)t[i]=r[i](n);return t}};function Bf(e){const o=Oi.parse(e),t=o.length;let r=0,n=0,i=0;for(let a=0;a<t;a++)r||typeof o[a]=="number"?r++:o[a].hue!==void 0?i++:n++;return{parsed:o,numNumbers:r,numRGB:n,numHSL:i}}const $b=(e,o)=>{const t=Oi.createTransformer(o),r=Bf(e),n=Bf(o);return r.numHSL===n.numHSL&&r.numRGB===n.numRGB&&r.numNumbers>=n.numNumbers?Cb(Fb(r.parsed,n.parsed),t):(_c(!0,`Complex values '${e}' and '${o}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?o:e}`)},r8=(e,o)=>t=>Sc(e,o,t);function n8(e){if(typeof e=="number")return r8;if(typeof e=="string")return wo.test(e)?Ab:$b;if(Array.isArray(e))return Fb;if(typeof e=="object")return t8}function i8(e,o,t){const r=[],n=t||n8(e[0]),i=e.length-1;for(let a=0;a<i;a++){let l=n(e[a],e[a+1]);if(o){const s=Array.isArray(o)?o[a]:o;l=Cb(s,l)}r.push(l)}return r}function a8([e,o],[t]){return r=>t(xb(e,o,r))}function l8(e,o){const t=e.length,r=t-1;return n=>{let i=0,a=!1;if(n<=e[0]?a=!0:n>=e[r]&&(i=r-1,a=!0),!a){let s=1;for(;s<t&&!(e[s]>n||s===r);s++);i=s-1}const l=xb(e[i],e[i+1],n);return o[i](l)}}function Ib(e,o,{clamp:t=!0,ease:r,mixer:n}={}){const i=e.length;fi(i===o.length,"Both input and output ranges must be the same length"),fi(!r||!Array.isArray(r)||r.length===i-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[i-1]&&(e=[].concat(e),o=[].concat(o),e.reverse(),o.reverse());const a=i8(o,r,n),l=i===2?a8(e,a):l8(e,a);return t?s=>l(zs(e[0],e[i-1],s)):l}const Va=e=>o=>1-e(1-o),Lc=e=>o=>o<=.5?e(2*o)/2:(2-e(2*(1-o)))/2,s8=e=>o=>Math.pow(o,e),Nb=e=>o=>o*o*((e+1)*o-e),c8=e=>{const o=Nb(e);return t=>(t*=2)<1?.5*o(t):.5*(2-Math.pow(2,-10*(t-1)))},Rb=1.525,d8=4/11,f8=8/11,u8=9/10,jb=e=>e,Tc=s8(2),p8=Va(Tc),Mb=Lc(Tc),Kb=e=>1-Math.sin(Math.acos(e)),Bb=Va(Kb),h8=Lc(Bb),Ac=Nb(Rb),b8=Va(Ac),g8=Lc(Ac),m8=c8(Rb),v8=4356/361,k8=35442/1805,w8=16061/1805,ka=e=>{if(e===1||e===0)return e;const o=e*e;return e<d8?7.5625*o:e<f8?9.075*o-9.9*e+3.4:e<u8?v8*o-k8*e+w8:10.8*e*e-20.52*e+10.72},y8=Va(ka),x8=e=>e<.5?.5*(1-ka(1-e*2)):.5*ka(e*2-1)+.5;function _8(e,o){return e.map(()=>o||Mb).splice(0,e.length-1)}function O8(e){const o=e.length;return e.map((t,r)=>r!==0?r/(o-1):0)}function S8(e,o){return e.map(t=>t*o)}function Ji({from:e=0,to:o=1,ease:t,offset:r,duration:n=300}){const i={done:!1,value:e},a=Array.isArray(o)?o:[e,o],l=S8(r&&r.length===a.length?r:O8(a),n);function s(){return Ib(l,a,{ease:Array.isArray(t)?t:_8(a,t)})}let c=s();return{next:d=>(i.value=c(d),i.done=d>=n,i),flipTarget:()=>{a.reverse(),c=s()}}}function z8({velocity:e=0,from:o=0,power:t=.8,timeConstant:r=350,restDelta:n=.5,modifyTarget:i}){const a={done:!1,value:o};let l=t*e;const s=o+l,c=i===void 0?s:i(s);return c!==s&&(l=c-o),{next:d=>{const f=-l*Math.exp(-d/r);return a.done=!(f>n||f<-n),a.value=a.done?c:c+f,a},flipTarget:()=>{}}}const Df={keyframes:Ji,spring:Oc,decay:z8};function E8(e){if(Array.isArray(e.to))return Ji;if(Df[e.type])return Df[e.type];const o=new Set(Object.keys(e));return o.has("ease")||o.has("duration")&&!o.has("dampingRatio")?Ji:o.has("dampingRatio")||o.has("stiffness")||o.has("mass")||o.has("damping")||o.has("restSpeed")||o.has("restDelta")?Oc:Ji}function Db(e,o,t=0){return e-o-t}function L8(e,o,t=0,r=!0){return r?Db(o+-e,o,t):o-(e-o)+t}function T8(e,o,t,r){return r?e>=o+t:e<=-t}const A8=e=>{const o=({delta:t})=>e(t);return{start:()=>Ss.update(o,!0),stop:()=>CS.update(o)}};function Ub(e){var o,t,{from:r,autoplay:n=!0,driver:i=A8,elapsed:a=0,repeat:l=0,repeatType:s="loop",repeatDelay:c=0,onPlay:d,onStop:f,onComplete:p,onRepeat:b,onUpdate:h}=e,g=yb(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:m}=g,k,w=0,y=g.duration,x,E=!1,P=!0,$;const S=E8(g);!((t=(o=S).needsInterpolation)===null||t===void 0)&&t.call(o,r,m)&&($=Ib([0,100],[r,m],{clamp:!1}),r=0,m=100);const T=S(Object.assign(Object.assign({},g),{from:r,to:m}));function U(){w++,s==="reverse"?(P=w%2===0,a=L8(a,y,c,P)):(a=Db(a,y,c),s==="mirror"&&T.flipTarget()),E=!1,b&&b()}function J(){k.stop(),p&&p()}function K(fe){if(P||(fe=-fe),a+=fe,!E){const ke=T.next(Math.max(0,a));x=ke.value,$&&(x=$(x)),E=P?ke.done:a<=0}h==null||h(x),E&&(w===0&&(y??(y=a)),w<l?T8(a,y,c,P)&&U():J())}function ge(){d==null||d(),k=i(K),k.start()}return n&&ge(),{stop:()=>{f==null||f(),k.stop()}}}function Hb(e,o){return o?e*(1e3/o):0}function C8({from:e=0,velocity:o=0,min:t,max:r,power:n=.8,timeConstant:i=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:s=1,modifyTarget:c,driver:d,onUpdate:f,onComplete:p,onStop:b}){let h;function g(y){return t!==void 0&&y<t||r!==void 0&&y>r}function m(y){return t===void 0?r:r===void 0||Math.abs(t-y)<Math.abs(r-y)?t:r}function k(y){h==null||h.stop(),h=Ub(Object.assign(Object.assign({},y),{driver:d,onUpdate:x=>{var E;f==null||f(x),(E=y.onUpdate)===null||E===void 0||E.call(y,x)},onComplete:p,onStop:b}))}function w(y){k(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:s},y))}if(g(e))w({from:e,velocity:o,to:m(e)});else{let y=n*o+e;typeof c<"u"&&(y=c(y));const x=m(y),E=x===t?-1:1;let P,$;const S=T=>{P=$,$=T,o=Hb(T-P,wb().delta),(E===1&&T>x||E===-1&&T<x)&&w({from:T,to:x,velocity:o})};k({type:"decay",from:e,velocity:o,timeConstant:i,power:n,restDelta:s,modifyTarget:c,onUpdate:g(y)?S:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const qb=(e,o)=>1-3*o+3*e,Vb=(e,o)=>3*o-6*e,Wb=e=>3*e,wa=(e,o,t)=>((qb(o,t)*e+Vb(o,t))*e+Wb(o))*e,Gb=(e,o,t)=>3*qb(o,t)*e*e+2*Vb(o,t)*e+Wb(o),P8=1e-7,F8=10;function $8(e,o,t,r,n){let i,a,l=0;do a=o+(t-o)/2,i=wa(a,r,n)-e,i>0?t=a:o=a;while(Math.abs(i)>P8&&++l<F8);return a}const I8=8,N8=.001;function R8(e,o,t,r){for(let n=0;n<I8;++n){const i=Gb(o,t,r);if(i===0)return o;const a=wa(o,t,r)-e;o-=a/i}return o}const Qi=11,Bi=1/(Qi-1);function j8(e,o,t,r){if(e===o&&t===r)return jb;const n=new Float32Array(Qi);for(let a=0;a<Qi;++a)n[a]=wa(a*Bi,e,t);function i(a){let l=0,s=1;const c=Qi-1;for(;s!==c&&n[s]<=a;++s)l+=Bi;--s;const d=(a-n[s])/(n[s+1]-n[s]),f=l+d*Bi,p=Gb(f,e,t);return p>=N8?R8(a,f,e,t):p===0?f:$8(a,l,l+Bi,e,t)}return a=>a===0||a===1?a:wa(i(a),o,r)}const _l={};class M8{constructor(){this.subscriptions=new Set}add(o){return this.subscriptions.add(o),()=>this.subscriptions.delete(o)}notify(o,t,r){if(this.subscriptions.size)for(const n of this.subscriptions)n(o,t,r)}clear(){this.subscriptions.clear()}}const Uf=e=>!isNaN(parseFloat(e));class K8{constructor(o){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new M8,this.canTrackVelocity=!1,this.updateAndNotify=t=>{this.prev=this.current,this.current=t;const{delta:r,timestamp:n}=wb();this.lastUpdated!==n&&(this.timeDelta=r,this.lastUpdated=n),Ss.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ss.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=Uf(this.current)),t!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=o,this.canTrackVelocity=Uf(this.current)}onChange(o){return this.updateSubscribers.add(o)}clearListeners(){this.updateSubscribers.clear()}set(o){this.updateAndNotify(o)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Hb(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(o){return this.stop(),new Promise(t=>{const{stop:r}=o(t);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function B8(e){return new K8(e)}const{isArray:D8}=Array;function U8(){const e=H({}),o=r=>{const n=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};r?D8(r)?r.forEach(n):n(r):Object.keys(e.value).forEach(n)},t=(r,n,i)=>{if(e.value[r])return e.value[r];const a=B8(n);return a.onChange(l=>i[r]=l),e.value[r]=a,a};return hw(o),{motionValues:e,get:t,stop:o}}const H8=e=>Array.isArray(e),dr=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ol=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),q8=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Sl=()=>({type:"keyframes",ease:"linear",duration:300}),V8=e=>({type:"keyframes",duration:800,values:e}),Hf={default:q8,x:dr,y:dr,z:dr,rotate:dr,rotateX:dr,rotateY:dr,rotateZ:dr,scaleX:Ol,scaleY:Ol,scale:Ol,backgroundColor:Sl,color:Sl,opacity:Sl},Xb=(e,o)=>{let t;return H8(o)?t=V8:t=Hf[e]||Hf.default,{to:o,...t(o)}},qf={..._i,transform:Math.round},Yb={color:wo,backgroundColor:wo,outlineColor:wo,fill:wo,stroke:wo,borderColor:wo,borderTopColor:wo,borderRightColor:wo,borderBottomColor:wo,borderLeftColor:wo,borderWidth:xe,borderTopWidth:xe,borderRightWidth:xe,borderBottomWidth:xe,borderLeftWidth:xe,borderRadius:xe,radius:xe,borderTopLeftRadius:xe,borderTopRightRadius:xe,borderBottomRightRadius:xe,borderBottomLeftRadius:xe,width:xe,maxWidth:xe,height:xe,maxHeight:xe,size:xe,top:xe,right:xe,bottom:xe,left:xe,padding:xe,paddingTop:xe,paddingRight:xe,paddingBottom:xe,paddingLeft:xe,margin:xe,marginTop:xe,marginRight:xe,marginBottom:xe,marginLeft:xe,rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:Ki,scaleX:Ki,scaleY:Ki,scaleZ:Ki,skew:cr,skewX:cr,skewY:cr,distance:xe,translateX:xe,translateY:xe,translateZ:xe,x:xe,y:xe,z:xe,perspective:xe,transformPerspective:xe,opacity:Hn,originX:Rf,originY:Rf,originZ:xe,zIndex:qf,filter:As,WebkitFilter:As,fillOpacity:Hn,strokeOpacity:Hn,numOctaves:qf},Cc=e=>Yb[e],Zb=(e,o)=>o&&typeof e=="number"&&o.transform?o.transform(e):e;function W8(e,o){let t=Cc(e);return t!==As&&(t=Oi),t.getAnimatableNone?t.getAnimatableNone(o):void 0}const G8={linear:jb,easeIn:Tc,easeInOut:Mb,easeOut:p8,circIn:Kb,circInOut:h8,circOut:Bb,backIn:Ac,backInOut:g8,backOut:b8,anticipate:m8,bounceIn:y8,bounceInOut:x8,bounceOut:ka},Vf=e=>{if(Array.isArray(e)){const[o,t,r,n]=e;return j8(o,t,r,n)}else if(typeof e=="string")return G8[e];return e},X8=e=>Array.isArray(e)&&typeof e[0]!="number",Wf=(e,o)=>e==="zIndex"?!1:!!(typeof o=="number"||Array.isArray(o)||typeof o=="string"&&Oi.test(o)&&!o.startsWith("url("));function Y8(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Z8({ease:e,times:o,delay:t,...r}){const n={...r};return o&&(n.offset=o),e&&(n.ease=X8(e)?e.map(Vf):Vf(e)),t&&(n.elapsed=-t),n}function J8(e,o,t){return Array.isArray(o.to)&&(e.duration||(e.duration=800)),Y8(o),Q8(e)||(e={...e,...Xb(t,o.to)}),{...o,...Z8(e)}}function Q8({delay:e,repeat:o,repeatType:t,repeatDelay:r,from:n,...i}){return!!Object.keys(i).length}function ez(e,o){return e[o]||e.default||e}function oz(e,o,t,r,n){const i=ez(r,e);let a=i.from===null||i.from===void 0?o.get():i.from;const l=Wf(e,t);a==="none"&&l&&typeof t=="string"&&(a=W8(e,t));const s=Wf(e,a);function c(f){const p={from:a,to:t,velocity:r.velocity?r.velocity:o.getVelocity(),onUpdate:b=>o.set(b)};return i.type==="inertia"||i.type==="decay"?C8({...p,...i}):Ub({...J8(i,p,e),onUpdate:b=>{p.onUpdate(b),i.onUpdate&&i.onUpdate(b)},onComplete:()=>{r.onComplete&&r.onComplete(),n&&n(),f&&f()}})}function d(f){return o.set(t),r.onComplete&&r.onComplete(),n&&n(),f&&f(),{stop:()=>{}}}return!s||!l||i.type===!1?d:c}function tz(){const{motionValues:e,stop:o,get:t}=U8();return{motionValues:e,stop:o,push:(n,i,a,l={},s)=>{const c=a[n],d=t(n,c,a);if(l&&l.immediate){d.set(i);return}const f=oz(n,d,i,l,s);d.start(f)}}}function rz(e,o={},{motionValues:t,push:r,stop:n}=tz()){const i=z(o),a=H(!1);_e(t,f=>{a.value=Object.values(f).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const l=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},s=f=>(typeof f=="string"&&(f=l(f)),Promise.all(Object.entries(f).map(([p,b])=>{if(p!=="transition")return new Promise(h=>r(p,b,e,f.transition||Xb(p,f[p]),h))}).filter(Boolean)));return{isAnimating:a,apply:s,set:f=>{const p=Jl(f)?f:l(f);Object.entries(p).forEach(([b,h])=>{b!=="transition"&&r(b,h,e,{immediate:!0})})},leave:async f=>{let p;if(i&&(i.leave&&(p=i.leave),!i.leave&&i.initial&&(p=i.initial)),!p){f();return}await s(p),f()},stop:n}}const Pc=typeof window<"u",nz=()=>Pc&&window.onpointerdown===null,iz=()=>Pc&&window.ontouchstart===null,az=()=>Pc&&window.onmousedown===null;function lz({target:e,state:o,variants:t,apply:r}){const n=z(t),i=H(!1),a=H(!1),l=H(!1),s=C(()=>{let d=[];return n&&(n.hovered&&(d=[...d,...Object.keys(n.hovered)]),n.tapped&&(d=[...d,...Object.keys(n.tapped)]),n.focused&&(d=[...d,...Object.keys(n.focused)])),d}),c=C(()=>{const d={};Object.assign(d,o.value),i.value&&n.hovered&&Object.assign(d,n.hovered),a.value&&n.tapped&&Object.assign(d,n.tapped),l.value&&n.focused&&Object.assign(d,n.focused);for(const f in d)s.value.includes(f)||delete d[f];return d});n.hovered&&(Se(e,"mouseenter",()=>i.value=!0),Se(e,"mouseleave",()=>{i.value=!1,a.value=!1}),Se(e,"mouseout",()=>{i.value=!1,a.value=!1})),n.tapped&&(az()&&(Se(e,"mousedown",()=>a.value=!0),Se(e,"mouseup",()=>a.value=!1)),nz()&&(Se(e,"pointerdown",()=>a.value=!0),Se(e,"pointerup",()=>a.value=!1)),iz()&&(Se(e,"touchstart",()=>a.value=!0),Se(e,"touchend",()=>a.value=!1))),n.focused&&(Se(e,"focus",()=>l.value=!0),Se(e,"blur",()=>l.value=!1)),_e(c,r)}function sz({set:e,target:o,apply:t,variants:r,variant:n}){const i=z(r);_e(()=>o,()=>{i&&(i.initial&&e("initial"),i.enter&&(n.value="enter"))},{immediate:!0,flush:"pre"})}function cz({state:e,apply:o}){_e(e,t=>{t&&o(t)},{immediate:!0})}function dz({target:e,variants:o,variant:t}){const r=z(o);r&&(r.visible||r.visibleOnce)&&dy(e,([{isIntersecting:n}])=>{r.visible?n?t.value="visible":t.value="initial":r.visibleOnce&&(n&&t.value!=="visibleOnce"?t.value="visibleOnce":t.value||(t.value="initial"))})}function fz(e,o={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){o.lifeCycleHooks&&sz(e),o.syncVariants&&cz(e),o.visibilityHooks&&dz(e),o.eventListeners&&lz(e)}function Jb(e={}){const o=Be({...e}),t=H({});return _e(o,()=>{const r={};for(const[n,i]of Object.entries(o)){const a=Cc(n),l=Zb(i,a);r[n]=l}t.value=r},{immediate:!0,deep:!0}),{state:o,style:t}}function Fc(e,o){_e(()=>Ao(e),t=>{t&&o(t)},{immediate:!0})}const uz={x:"translateX",y:"translateY",z:"translateZ"};function Qb(e={},o=!0){const t=Be({...e}),r=H("");return _e(t,n=>{let i="",a=!1;if(o&&(n.x||n.y||n.z)){const l=[n.x||0,n.y||0,n.z||0].map(xe.transform).join(",");i+=`translate3d(${l}) `,a=!0}for(const[l,s]of Object.entries(n)){if(o&&(l==="x"||l==="y"||l==="z"))continue;const c=Cc(l),d=Zb(s,c);i+=`${uz[l]||l}(${d}) `}o&&!a&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:t,transform:r}}const pz=["","X","Y","Z"],hz=["perspective","translate","scale","rotate","skew"],eg=["transformPerspective","x","y","z"];hz.forEach(e=>{pz.forEach(o=>{const t=e+o;eg.push(t)})});const bz=new Set(eg);function $c(e){return bz.has(e)}const gz=new Set(["originX","originY","originZ"]);function og(e){return gz.has(e)}function mz(e){const o={},t={};return Object.entries(e).forEach(([r,n])=>{$c(r)||og(r)?o[r]=n:t[r]=n}),{transform:o,style:t}}function tg(e){const{transform:o,style:t}=mz(e),{transform:r}=Qb(o),{style:n}=Jb(t);return r.value&&(n.value.transform=r.value),n.value}function vz(e,o){let t,r;const{state:n,style:i}=Jb();return Fc(e,a=>{r=a;for(const l of Object.keys(Yb))a.style[l]===null||a.style[l]===""||$c(l)||og(l)||(n[l]=a.style[l]);t&&Object.entries(t).forEach(([l,s])=>a.style[l]=s),o&&o(n)}),_e(i,a=>{if(!r){t=a;return}for(const l in a)r.style[l]=a[l]},{immediate:!0}),{style:n}}function kz(e){const o=e.trim().split(/\) |\)/);if(o.length===1)return{};const t=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return o.reduce((r,n)=>{if(!n)return r;const[i,a]=n.split("("),s=a.split(",").map(d=>t(d.endsWith(")")?d.replace(")",""):d.trim())),c=s.length===1?s[0]:s;return{...r,[i]:c}},{})}function wz(e,o){Object.entries(kz(o)).forEach(([t,r])=>{const n=["x","y","z"];if(t==="translate3d"){if(r===0){n.forEach(i=>e[i]=0);return}r.forEach((i,a)=>e[n[a]]=i);return}if(r=parseFloat(r),t==="translateX"){e.x=r;return}if(t==="translateY"){e.y=r;return}if(t==="translateZ"){e.z=r;return}e[t]=r})}function yz(e,o){let t,r;const{state:n,transform:i}=Qb();return Fc(e,a=>{r=a,a.style.transform&&wz(n,a.style.transform),t&&(a.style.transform=t),o&&o(n)}),_e(i,a=>{if(!r){t=a;return}r.style.transform=a},{immediate:!0}),{transform:n}}function xz(e,o){const t=Be({}),r=a=>Object.entries(a).forEach(([l,s])=>t[l]=s),{style:n}=vz(e,r),{transform:i}=yz(e,r);return _e(t,a=>{Object.entries(a).forEach(([l,s])=>{const c=$c(l)?i:n;c[l]&&c[l]===s||(c[l]=s)})},{immediate:!0,deep:!0}),Fc(e,()=>o&&r(o)),{motionProperties:t,style:n,transform:i}}function _z(e={}){const o=z(e),t=H();return{state:C(()=>{if(t.value)return o[t.value]}),variant:t}}function rg(e,o={},t){const{motionProperties:r}=xz(e),{variant:n,state:i}=_z(o),a=rz(r,o),l={target:e,variant:n,variants:o,state:i,motionProperties:r,...a};return fz(l,t),l}const Oz=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Sz=(e,o)=>{const t=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};t&&(t.variants&&Jl(t.variants)&&(o.value={...o.value,...t.variants}),Oz.forEach(r=>{if(r==="delay"){if(t&&t[r]&&Jk(t[r])){const n=t[r];o&&o.value&&(o.value.enter&&(o.value.enter.transition||(o.value.enter.transition={}),o.value.enter.transition={delay:n,...o.value.enter.transition}),o.value.visible&&(o.value.visible.transition||(o.value.visible.transition={}),o.value.visible.transition={delay:n,...o.value.visible.transition}),o.value.visibleOnce&&(o.value.visibleOnce.transition||(o.value.visibleOnce.transition={}),o.value.visibleOnce.transition={delay:n,...o.value.visibleOnce.transition}))}return}r==="visible-once"&&(r="visibleOnce"),t&&t[r]&&Jl(t[r])&&(o.value[r]=t[r])}))},zl=e=>({created:(t,r,n)=>{const i=r.value&&typeof r.value=="string"?r.value:n.key;i&&_l[i]&&_l[i].stop();const a=H(e||{});typeof r.value=="object"&&(a.value=r.value),Sz(n,a);const l=rg(t,a);t.motionInstance=l,i&&(_l[i]=l)},getSSRProps(t,r){let{initial:n}=t.value||r&&(r==null?void 0:r.props)||{};n=z(n);const i=ES((e==null?void 0:e.initial)||{},n||{});return!i||Object.keys(i).length===0?void 0:{style:tg(i)}}}),zz={initial:{opacity:0},enter:{opacity:1}},Ez={initial:{opacity:0},visible:{opacity:1}},Lz={initial:{opacity:0},visibleOnce:{opacity:1}},Tz={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Az={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Cz={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Pz={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Fz={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$z={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Iz={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Nz={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Rz={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},jz={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Mz={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Kz={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Bz={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Dz={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Uz={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Hz={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},qz={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Vz={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Wz={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Gz={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Xz={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Yz={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Zz={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Jz={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Qz={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},eE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},oE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Cs={__proto__:null,fade:zz,fadeVisible:Ez,fadeVisibleOnce:Lz,pop:Tz,popVisible:Az,popVisibleOnce:Cz,rollBottom:Bz,rollLeft:Pz,rollRight:Iz,rollTop:jz,rollVisibleBottom:Dz,rollVisibleLeft:Fz,rollVisibleOnceBottom:Uz,rollVisibleOnceLeft:$z,rollVisibleOnceRight:Rz,rollVisibleOnceTop:Kz,rollVisibleRight:Nz,rollVisibleTop:Mz,slideBottom:Qz,slideLeft:Hz,slideRight:Wz,slideTop:Yz,slideVisibleBottom:eE,slideVisibleLeft:qz,slideVisibleOnceBottom:oE,slideVisibleOnceLeft:Vz,slideVisibleOnceRight:Xz,slideVisibleOnceTop:Jz,slideVisibleRight:Gz,slideVisibleTop:Zz},tE=se({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const o=Yv(),t=Be({});if(!e.is&&!o.default)return()=>Qe("div",{});const r=C(()=>{let s;return e.preset&&(s=Cs[e.preset]),s}),n=C(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=C(()=>{const s={...n.value,...r.value||{},...e.variants||{}};return e.delay&&(s.enter.transition={...s.enter.transition},s.enter.transition.delay=parseInt(e.delay)),s}),a=C(()=>{if(!e.is)return;let s=e.is;return typeof a.value=="string"&&!Fu(s)&&(s=sa(s)),s});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||process!=null&&process.dev){const s=c=>{var d;(d=c.variants)!=null&&d.initial&&c.set("initial"),setTimeout(()=>{var f,p,b;(f=c.variants)!=null&&f.enter&&c.apply("enter"),(p=c.variants)!=null&&p.visible&&c.apply("visible"),(b=c.variants)!=null&&b.visibleOnce&&c.apply("visibleOnce")},10)};Ra(()=>Object.entries(t).forEach(([c,d])=>s(d)))}return{slots:o,component:a,motionConfig:i,instances:t}},render({slots:e,motionConfig:o,instances:t,component:r}){var l;const n=tg(o.initial||{}),i=(s,c)=>(s.props||(s.props={}),s.props.style=n,s.props.onVnodeMounted=({el:d})=>{const f=rg(d,o);t[c]=f},s);if(r){const s=Qe(r,void 0,e);return i(s,0),s}return(((l=e.default)==null?void 0:l.call(e))||[]).map((s,c)=>i(s,c))}});function rE(e){const o="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",t="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(o.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,n=>`-${n}`).toLowerCase().replace(/\s+/g,"-").replace(r,n=>t.charAt(o.indexOf(n))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const nE={install(e,o){if(e.directive("motion",zl()),e.component("Motion",tE),!o||o&&!o.excludePresets)for(const t in Cs){const r=Cs[t];e.directive(`motion-${rE(t)}`,zl(r))}if(o&&o.directives)for(const t in o.directives){const r=o.directives[t];r.initial,e.directive(`motion-${t}`,zl(r))}}};var Gf;const Vn=typeof window<"u",iE=Object.prototype.toString,aE=e=>iE.call(e)==="[object Object]";Vn&&((Gf=window==null?void 0:window.navigator)!=null&&Gf.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function lE(e){return Bs()?(Du(e),!0):!1}function sE(e){var o;const t=z(e);return(o=t==null?void 0:t.$el)!=null?o:t}const cE=Vn?window:void 0,Xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yf="__vueuse_ssr_handlers__";Xf[Yf]=Xf[Yf]||{};function dE(e,o={}){const{immediate:t=!0,window:r=cE}=o,n=H(!1);let i=null;function a(){!n.value||!r||(e(),i=r.requestAnimationFrame(a))}function l(){!n.value&&r&&(n.value=!0,a())}function s(){n.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return t&&l(),lE(s),{isActive:n,pause:s,resume:l}}var Zf;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Zf||(Zf={}));const Wa="vue-starport-injection",ng="vue-starport-options",fE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},ig={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var uE=Object.defineProperty,ya=Object.getOwnPropertySymbols,ag=Object.prototype.hasOwnProperty,lg=Object.prototype.propertyIsEnumerable,Jf=(e,o,t)=>o in e?uE(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,pE=(e,o)=>{for(var t in o||(o={}))ag.call(o,t)&&Jf(e,t,o[t]);if(ya)for(var t of ya(o))lg.call(o,t)&&Jf(e,t,o[t]);return e},Qf=(e,o)=>{var t={};for(var r in e)ag.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&ya)for(var r of ya(e))o.indexOf(r)<0&&lg.call(e,r)&&(t[r]=e[r]);return t};const hE=se({name:"StarportProxy",props:pE({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},ig),setup(e,o){const t=Z(Wa),r=C(()=>t.getInstance(e.port,e.component)),n=H(),i=r.value.generateId(),a=H(!1);return r.value.isVisible||(r.value.land(),a.value=!0),Ft(async()=>{if(r.value.el){console.error(`[Vue Starport] Multiple proxies of "${r.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(r.value.el=n.value,await fo(),a.value=!0,r.value.rect.update(),r.value.rect.width===0||r.value.rect.height===0){const l=r.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${r.value.componentName}" (port "${e.port}") has no ${l} on initial render, have you set the size for it?`),console.warn("element:",r.value.el),console.warn("rect:",r.value.rect)}}),vi(async()=>{r.value.rect.update(),r.value.liftOff(),r.value.el=void 0,a.value=!1,!r.value.options.keepAlive&&(await fo(),await fo(),!r.value.el&&t.dispose(r.value.port))}),_e(()=>e,async()=>{r.value.props&&await fo();const l=e,{props:s}=l,c=Qf(l,["props"]);r.value.props=s||{},r.value.setLocalOptions(c)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:s,mountedProps:c}=l,d=Qf(l,["initialProps","mountedProps"]),f=tn(d,(a.value?c:s)||{});return Qe("div",tn(f,{id:i,ref:n,"data-starport-proxy":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true"}),o.slots.default?Qe(o.slots.default):void 0)}}});var bE=Object.defineProperty,gE=Object.defineProperties,mE=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,vE=Object.prototype.hasOwnProperty,kE=Object.prototype.propertyIsEnumerable,ou=(e,o,t)=>o in e?bE(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,wE=(e,o)=>{for(var t in o||(o={}))vE.call(o,t)&&ou(e,t,o[t]);if(eu)for(var t of eu(o))kE.call(o,t)&&ou(e,t,o[t]);return e},yE=(e,o)=>gE(e,mE(o));const xE=se({name:"Starport",inheritAttrs:!0,props:ig,setup(e,o){const t=H(!1);return Ft(()=>{if(t.value=!0,!Z(Wa))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,l;const r=(l=(a=o.slots).default)==null?void 0:l.call(a);if(!r)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(r.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${r.length}`);const n=r[0];let i=n.type;return(!aE(i)||ht(i))&&(i={render(){return r}}),Qe(hE,yE(wE({},e),{key:e.port,component:Ca(i),props:n.props}))}}});function _E(e){const o=Be({height:0,width:0,left:0,top:0,update:r,listen:i,pause:a,margin:"0px",padding:"0px"}),t=Vn?document.documentElement||document.body:void 0;function r(){if(!Vn)return;const l=sE(e);if(!l)return;const{height:s,width:c,left:d,top:f}=l.getBoundingClientRect(),p=window.getComputedStyle(l),b=p.margin,h=p.padding;Object.assign(o,{height:s,width:c,left:d,top:t.scrollTop+f,margin:b,padding:h})}const n=dE(r,{immediate:!1});function i(){Vn&&(r(),n.resume())}function a(){n.pause()}return o}let OE=(e,o=21)=>(t=o)=>{let r="",n=t;for(;n--;)r+=e[Math.random()*e.length|0];return r};const tu=OE("abcdefghijklmnopqrstuvwxyz",5);function ru(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function SE(e){var o;return e.name||((o=e.__file)==null?void 0:o.split(/[\/\\.]/).slice(-2)[0])||""}var zE=Object.defineProperty,nu=Object.getOwnPropertySymbols,EE=Object.prototype.hasOwnProperty,LE=Object.prototype.propertyIsEnumerable,iu=(e,o,t)=>o in e?zE(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,El=(e,o)=>{for(var t in o||(o={}))EE.call(o,t)&&iu(e,t,o[t]);if(nu)for(var t of nu(o))LE.call(o,t)&&iu(e,t,o[t]);return e};function TE(e,o,t={}){const r=SE(o),n=ru(r)||tu(),i=H(),a=H(null),l=H(!1),s=H(!1),c=Ig(!0),d=H({}),f=C(()=>El(El(El({},fE),t),d.value)),p=H(0);let b;c.run(()=>{b=_E(i),_e(i,async k=>{k&&(s.value=!0),await fo(),i.value||(s.value=!1)})});const h=ru(e);function g(){return`starport-${n}-${h}-${tu()}`}const m=g();return Be({el:i,id:m,port:e,props:a,rect:b,scope:c,isLanded:l,isVisible:s,options:f,liftOffTime:p,component:o,componentName:r,componentId:n,generateId:g,setLocalOptions(k={}){d.value=JSON.parse(JSON.stringify(k))},elRef(){return i},liftOff(){l.value&&(l.value=!1,p.value=Date.now(),b.listen())},land(){l.value||(l.value=!0,b.pause())}})}function AE(e){const o=Be(new Map);function t(n,i){let a=o.get(n);return a||(a=TE(n,i,e),o.set(n,a)),a.component=i,a}function r(n){var i;(i=o.get(n))==null||i.scope.stop(),o.delete(n)}return{portMap:o,dispose:r,getInstance:t}}var CE=Object.defineProperty,PE=Object.defineProperties,FE=Object.getOwnPropertyDescriptors,au=Object.getOwnPropertySymbols,$E=Object.prototype.hasOwnProperty,IE=Object.prototype.propertyIsEnumerable,lu=(e,o,t)=>o in e?CE(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,NE=(e,o)=>{for(var t in o||(o={}))$E.call(o,t)&&lu(e,t,o[t]);if(au)for(var t of au(o))IE.call(o,t)&&lu(e,t,o[t]);return e},RE=(e,o)=>PE(e,FE(o));const jE=se({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const o=Z(Wa);if(!o)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const t=C(()=>o.getInstance(e.port,e.component)),r=C(()=>{var a;return((a=t.value.el)==null?void 0:a.id)||t.value.id}),n=C(()=>{const a=Date.now()-t.value.liftOffTime,l=Math.max(0,t.value.options.duration-a),s=t.value.rect,c={position:"absolute",left:0,top:0,width:`${s.width}px`,height:`${s.height}px`,margin:s.margin,padding:s.padding,transform:`translate3d(${s.left}px,${s.top}px,0px)`};return!t.value.isVisible||!t.value.el?RE(NE({},c),{zIndex:-1,display:"none"}):(t.value.isLanded?c.display="none":Object.assign(c,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:t.value.options.easing}),c)}),i={onTransitionend(a){t.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${t.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${t.value.options.duration/1e3}s).`)}};return()=>{const a=!!(t.value.isLanded&&t.value.el);return Qe("div",{style:n.value,"data-starport-craft":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true",onTransitionend:t.value.land},Qe(Nv,{to:a?`#${r.value}`:"body",disabled:!a},Qe(t.value.component,tn(i,t.value.props))))}}}),ME=se({name:"StarportCarrier",setup(e,{slots:o}){const t=AE(Z(ng,{}));return Fo().appContext.app.provide(Wa,t),()=>{var n;return[(n=o.default)==null?void 0:n.call(o),Array.from(t.portMap.entries()).map(([i,{component:a}])=>Qe(jE,{key:i,port:i,component:a}))]}}});function KE(e={}){return{install(o){o.provide(ng,e),o.component("Starport",xE),o.component("StarportCarrier",ME)}}}function BE(e){function o(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}o(),window.addEventListener("resize",o),e.app.use(nE),e.app.use(KE({keepAlive:!0}))}function So(e,o,t){var r;return((r=e.instance)==null?void 0:r.$).provides[o]??t}function DE(){return{install(e){e.directive("click",{name:"v-click",mounted(o,t){var d,f,p,b,h,g;if(Dn.value||(d=So(t,jn))!=null&&d.value)return;const r=So(t,gr),n=So(t,Rn),i=So(t,Yl),a=t.modifiers.hide!==!1&&t.modifiers.hide!=null,l=t.modifiers.fade!==!1&&t.modifiers.fade!=null,s=((f=r==null?void 0:r.value)==null?void 0:f.length)||0,c=l?$k:sl;if(r&&!((p=r==null?void 0:r.value)!=null&&p.includes(o))&&r.value.push(o),t.value==null&&(t.value=(b=r==null?void 0:r.value)==null?void 0:b.length),typeof t.value=="string"&&(t.value.startsWith("+")||t.value.startsWith("-"))&&(t.value=(((h=r==null?void 0:r.value)==null?void 0:h.length)||0)+Number(t.value)),!(i!=null&&i.value.has(t.value)))i==null||i.value.set(t.value,[o]);else if(!((g=i==null?void 0:i.value.get(t.value))!=null&&g.includes(o))){const m=(i==null?void 0:i.value.get(t.value))||[];i==null||i.value.set(t.value,[o].concat(m))}o==null||o.classList.toggle(pr,!0),n&&_e(n,()=>{const m=(n==null?void 0:n.value)??0,k=t.value!=null?m>=t.value:m>s;o.classList.contains(cl)||o.classList.toggle(c,!k),a!==!1&&a!==void 0&&o.classList.toggle(c,k),o.classList.toggle(wn,!1);const w=i==null?void 0:i.value.get(m);w==null||w.forEach((y,x)=>{y.classList.toggle(Ni,!1),x===w.length-1?y.classList.toggle(wn,!0):y.classList.toggle(Ni,!0)}),o.classList.contains(wn)||o.classList.toggle(Ni,k)},{immediate:!0})},unmounted(o,t){o==null||o.classList.toggle(pr,!1);const r=So(t,gr);r!=null&&r.value&&Zl(r.value,o)}}),e.directive("after",{name:"v-after",mounted(o,t){var l,s,c;if(Dn.value||(l=So(t,jn))!=null&&l.value)return;const r=So(t,gr),n=So(t,Rn),i=So(t,Yl),a=r==null?void 0:r.value.length;t.value==null&&(t.value=r==null?void 0:r.value.length),typeof t.value=="string"&&(t.value.startsWith("+")||t.value.startsWith("-"))&&(t.value=(((s=r==null?void 0:r.value)==null?void 0:s.length)||0)+Number(t.value)),i!=null&&i.value.has(t.value)?(c=i==null?void 0:i.value.get(t.value))==null||c.push(o):i==null||i.value.set(t.value,[o]),o==null||o.classList.toggle(pr,!0),n&&_e(n,()=>{const d=(n.value??0)>=(t.value??a??0);o.classList.contains(cl)||o.classList.toggle(sl,!d),o.classList.toggle(wn,!1),o.classList.contains(wn)||o.classList.toggle(Ni,d)},{immediate:!0})},unmounted(o){o==null||o.classList.toggle(pr,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(o,t){var a,l,s;if(Dn.value||(a=So(t,jn))!=null&&a.value)return;const r=So(t,gr),n=So(t,Rn),i=((l=r==null?void 0:r.value)==null?void 0:l.length)||0;r&&!((s=r==null?void 0:r.value)!=null&&s.includes(o))&&r.value.push(o),o==null||o.classList.toggle(pr,!0),n&&_e(n,()=>{const c=(n==null?void 0:n.value)??0,d=t.value!=null?c>=t.value:c>i;o.classList.toggle(sl,d),o.classList.toggle(cl,d)},{immediate:!0})},unmounted(o,t){o==null||o.classList.toggle(pr,!1);const r=So(t,gr);r!=null&&r.value&&Zl(r.value,o)}})}}}function UE(e,o){const t=ub(e),r=pb(o,t.currentRoute,t.currentPage);return{nav:{...t,...r},configs:Pe,themeConfigs:C(()=>Pe.themeConfig)}}function HE(){return{install(e){const o=UE(Do,Ko);e.provide(ie,Be(o))}}}/*!
 * KoliBri - The accessible HTML-Standard
 */var qE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function VE(e,o,t){return e(t={path:o,exports:{},require:function(r,n){return WE()}},t.exports),t.exports}function WE(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var xa=VE(function(e){var o,t;o=qE,t=function(){var r=function(){},n="undefined",i=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"];function l(m,k){var w=m[k];if(typeof w.bind=="function")return w.bind(m);try{return Function.prototype.bind.call(w,m)}catch{return function(){return Function.prototype.apply.apply(w,[m,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function c(m,k){for(var w=0;w<a.length;w++){var y=a[w];this[y]=w<m?r:this.methodFactory(y,m,k)}this.log=this.debug}function d(m,k,w){return function(){typeof console!==n&&(c.call(this,k,w),this[m].apply(this,arguments))}}function f(m,k,w){return function(y){return y==="debug"&&(y="log"),typeof console!==n&&(y==="trace"&&i?s:console[y]!==void 0?l(console,y):console.log!==void 0?l(console,"log"):r)}(m)||d.apply(this,arguments)}function p(m,k,w){var y,x=this;k=k??"WARN";var E="loglevel";function P(){var S;if(typeof window!==n&&E){try{S=window.localStorage[E]}catch{}if(typeof S===n)try{var T=window.document.cookie,U=T.indexOf(encodeURIComponent(E)+"=");U!==-1&&(S=/^([^;]+)/.exec(T.slice(U))[1])}catch{}return x.levels[S]===void 0&&(S=void 0),S}}typeof m=="string"?E+=":"+m:typeof m=="symbol"&&(E=void 0),x.name=m,x.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},x.methodFactory=w||f,x.getLevel=function(){return y},x.setLevel=function(S,T){if(typeof S=="string"&&x.levels[S.toUpperCase()]!==void 0&&(S=x.levels[S.toUpperCase()]),!(typeof S=="number"&&S>=0&&S<=x.levels.SILENT))throw"log.setLevel() called with invalid level: "+S;if(y=S,T!==!1&&function(U){var J=(a[U]||"silent").toUpperCase();if(typeof window!==n&&E){try{return void(window.localStorage[E]=J)}catch{}try{window.document.cookie=encodeURIComponent(E)+"="+J+";"}catch{}}}(S),c.call(x,S,m),typeof console===n&&S<x.levels.SILENT)return"No console available for logging"},x.setDefaultLevel=function(S){k=S,P()||x.setLevel(S,!1)},x.resetLevel=function(){x.setLevel(k,!1),function(){if(typeof window!==n&&E){try{return void window.localStorage.removeItem(E)}catch{}try{window.document.cookie=encodeURIComponent(E)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}()},x.enableAll=function(S){x.setLevel(x.levels.TRACE,S)},x.disableAll=function(S){x.setLevel(x.levels.SILENT,S)};var $=P();$==null&&($=k),x.setLevel($,!1)}var b=new p,h={};b.getLogger=function(m){if(typeof m!="symbol"&&typeof m!="string"||m==="")throw new TypeError("You must supply a name when creating a logger.");var k=h[m];return k||(k=h[m]=new p(m,b.getLevel(),b.methodFactory)),k};var g=typeof window!==n?window.log:void 0;return b.noConflict=function(){return typeof window!==n&&window.log===b&&(window.log=g),b},b.getLoggers=function(){return h},b.default=b,b},e.exports?e.exports=t():o.log=t()});const GE=(e,o)=>t=>t(e,o),XE=(e,o)=>t=>t(e,o),ce=typeof window=="object"?window:typeof global=="object"?global:typeof self=="object"?self:{};let Ps=!0,su=!1;const YE=/^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/,ZE=e=>typeof e=="string"&&YE.test(e),sg=e=>{if(ZE(e)===!1)throw new Error(`[Theming] The theme identifier "${typeof e=="string"?e:""}" (Type: ${typeof e}) is not valid. Please use only follow this pattern: /^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/`)},JE=(e,o,t)=>{sg(e),Ps===!0&&su===!1&&(su=!0,xa.warn(`[Theming] The theme process is locked. This means that the theme "${e}" should not be patched.

import { register } from '@a11y-ui/core';
import { defineCustomElements } from '...';
import { THEME } from '...';

register(THEME, defineCustomElements)
	.then(() => {
		const htmlDivElement: HTMLElement | null = document.querySelector<HTMLElement>('#my-app');
    if (htmlDivElement instanceof HTMLElement) {
      const root = createRoot(htmlDivElement);
      root.render(<App />);
    }
  })
  .catch(console.warn);`)),typeof ce.A11yUi=="object"&&ce.A11yUi!==null||(ce.A11yUi={}),typeof ce.A11yUi!="object"||ce.A11yUi===null||typeof ce.A11yUi.Themes=="object"&&ce.A11yUi.Themes!==null||(ce.A11yUi.Themes={}),typeof ce.A11yUi!="object"||ce.A11yUi===null||typeof ce.A11yUi.Themes!="object"||ce.A11yUi.Themes===null||typeof ce.A11yUi.Themes[e]=="object"&&ce.A11yUi.Themes[e]!==null||(ce.A11yUi.Themes[e]={}),typeof ce.A11yUi=="object"&&ce.A11yUi!==null&&typeof ce.A11yUi.Themes=="object"&&ce.A11yUi.Themes!==null&&typeof ce.A11yUi.Themes[e]=="object"&&ce.A11yUi.Themes[e]!==null&&(ce.A11yUi.Themes[e][o]=t)},QE=(e,o)=>(sg(e),typeof o=="object"&&o!==null&&Object.getOwnPropertyNames(o).forEach(t=>{const r=o[t];typeof r=="string"&&r.length>0&&JE(e,t,r)}),e),eL=()=>typeof ce.A11yUi=="object"&&ce.A11yUi!==null&&typeof ce.A11yUi.Theme=="object"&&ce.A11yUi.Theme!==null&&typeof ce.A11yUi.Theme.cache=="boolean"&&typeof ce.A11yUi.Theme.encroachCss=="object"&&typeof ce.A11yUi.Theme.encroachCss!==null&&typeof ce.A11yUi.Theme.encroachCss.mode=="string"&&typeof ce.A11yUi.Theme.name=="string",oL=(e,o)=>({cache:o.cache!==!1,detect:o.detect==="auto"?"auto":"fixed",encroachCss:o.encroachCss!==!1&&(typeof o.encroachCss!="object"||o.encroachCss==null||o.encroachCss.mode!=="after"&&o.encroachCss.mode!=="before"?{mode:"before"}:o.encroachCss),loglevel:o.loglevel==="debug"?o.loglevel:"silent",name:typeof o.name=="string"?o.name:e}),tL=(e,o)=>{eL()!==!1||(typeof ce.A11yUi=="object"&&ce.A11yUi!==null)!=0&&(typeof ce.A11yUi.Theme=="object"&&ce.A11yUi.Theme!==null)!=0&&ce.A11yUi.Theme.name==="default"||typeof o=="object"&&o!==null&&((o=oL(e,o)).detect==="fixed"?(o.name===null&&typeof e=="string"&&(o.name=e),e===o.name&&(typeof ce.A11yUi=="object"&&ce.A11yUi!==null||(ce.A11yUi={}),ce.A11yUi.Theme=o,xa.info(`[Theming] Theme "${e}" was set as default theme.`))):xa.warn("[Theming] The presetting of theme options is only relevant by using 'fixed' detection mode."))};let cu=!1;const rL=(e,o,t={})=>{cu===!1&&(cu=!0,Ps=!1),typeof e=="function"?e=new Set([e]):Array.isArray(e)&&(e=new Set(e)),e instanceof Set&&e.forEach(n=>{var i,a,l,s;typeof n=="function"&&n.length===1?tL(n(QE),{cache:(i=t.theme)==null?void 0:i.cache,detect:(a=t.theme)==null?void 0:a.detect,encroachCss:(l=t.theme)==null?void 0:l.encroachCss,name:(s=t.theme)==null?void 0:s.name}):xa.error("[Theming] Es wurde versucht eine nicht kompatibles Theme zu laden.")}),Ps=!0,typeof o=="function"?o=new Set([o]):Array.isArray(o)&&(o=new Set(o));const r=[];return o.forEach(n=>r.push(n())),Promise.all(r)},pi=new Map,cg=[],dg=new Set,Vr=new Map,nL=/--[^;]+/g,iL=/:/;typeof ce.A11yUi=="object"&&ce.A11yUi!==null||(ce.A11yUi={CSS_STYLE_CACHE:Vr,HYDRATED_HISTORY:cg,STYLING_TASK_QUEUE:pi});const aL=(e,o)=>{var r;let t=o.match(nL);if(Array.isArray(t)){t=t.filter(i=>iL.test(i));const n=document.createElement("style");n.innerHTML=`.${e} {${t.join(";")}}`,(r=document.querySelector("head"))==null||r.appendChild(n)}dg.add(e)},Ll=(e,o)=>typeof ce.A11yUi=="object"&&ce.A11yUi!==null&&typeof ce.A11yUi.Themes=="object"&&ce.A11yUi.Themes!==null&&typeof ce.A11yUi.Themes[e]=="object"&&ce.A11yUi.Themes[e]!==null&&typeof ce.A11yUi.Themes[e][o]=="string"?ce.A11yUi.Themes[e][o].replace(/\r?\n/g,""):"",lL=e=>{for(const o of Array.from(e.childNodes)){if(!(o instanceof HTMLStyleElement&&o.tagName==="STYLE"))break;e.removeChild(o)}},sL=(e,o)=>{try{const t=[];o.forEach(r=>{const n=new CSSStyleSheet;n.replaceSync(r),t.push(n)}),e.adoptedStyleSheets=t}catch{o.reverse().forEach(r=>{const n=document.createElement("style");n.innerHTML=r,e.insertBefore(n,e.firstChild)})}},cL=(e,o,t)=>{if(t!==!1){const r=[...Array.from(e.childNodes).filter(i=>i instanceof HTMLStyleElement&&i.tagName==="STYLE")];let n;try{n=[...Array.from(e.adoptedStyleSheets)]}catch{n=[]}(t==null?void 0:t.mode)==="before"?(r.reverse().forEach(i=>o.unshift(i.innerHTML)),n.reverse().forEach(i=>o.unshift(Array.from(i.cssRules).map(a=>a.cssText).join("")))):(t==null?void 0:t.mode)==="after"&&(r.forEach(i=>o.push(i.innerHTML)),n.forEach(i=>o.push(Array.from(i.cssRules).map(a=>a.cssText).join(""))))}},dL=(e,o,t)=>{var i,a,l;const r=o.name||"default";let n;try{if(e.shadowRoot===null)throw new Error("ShadowRoot is null");n=e.shadowRoot}catch{n=e}if((i=Vr.get(r))!=null&&i.has(e.tagName))du(e,n,(a=Vr.get(r))==null?void 0:a.get(e.tagName),t);else{const s=Ll(r,"PROPERTIES"),c=Ll(r,"GLOBAL"),d=Ll(r,e.tagName);dg.has(r)===!1&&aL(r,c);const f=[s,c,d];cL(n,f,o.encroachCss),o.loglevel==="debug"&&console.log(e.tagName,f),o.cache===!0&&(Vr.has(r)===!1&&Vr.set(r,new Map),(l=Vr.get(r))==null||l.set(e.tagName,f)),du(e,n,f,t)}},du=(e,o,t,r)=>{lL(o),sL(o,t),e.style.display=r},fL=e=>{e.loglevel==="debug"&&cg.push({timestamp:Date.now(),numberOfTasks:pi.size})},uL=e=>{pi.delete(e)},pL=(e,o)=>{uL(e),fL(o)},hL=e=>{for(const o of e)if(pi.has(o.target)&&o.target.classList.contains("hydrated")){const{styleDisplay:t,themeDetails:r}=pi.get(o.target);dL(o.target,r,t),pL(o.target,r)}};let fu;try{fu=new MutationObserver(hL)}catch{fu=null}let bL=class{constructor(o,t,r){this.createTheme=(n,i)=>XE(n,i),this.createTranslation=(n,i)=>GE(n,i),this.Prefix=o,this.Key=Object.getOwnPropertyNames(t),this.Tag=Object.getOwnPropertyNames(r)}};/*!
 * KoliBri - The accessible HTML-Standard
 */function Zo(e){return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Zo(e)}function mt(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function gL(e,o){if(Zo(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,o||"default");if(Zo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}function fg(e){var o=gL(e,"string");return Zo(o)==="symbol"?o:String(o)}function uu(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,fg(r.key),r)}}function vt(e,o,t){return o&&uu(e.prototype,o),t&&uu(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Fs(e,o){return Fs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Fs(e,o)}function Ga(e,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),o&&Fs(e,o)}function Si(e,o){if(o&&(Zo(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jt(e)}function gt(e){return gt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},gt(e)}function ir(e,o,t){return(o=fg(o))in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function mL(e){if(Array.isArray(e))return e}function vL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pu(e,o){(o==null||o>e.length)&&(o=e.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=e[t];return r}function kL(e,o){if(e){if(typeof e=="string")return pu(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?pu(e,o):void 0}}function wL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yL(e){return mL(e)||vL(e)||kL(e)||wL()}function hu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function bu(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?hu(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):hu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var xL={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,o){console&&console[e]&&console[e].apply(console,o)}},_L=function(){function e(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};mt(this,e),this.init(o,t)}return vt(e,[{key:"init",value:function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=o||xL,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(o){this.debug=o}},{key:"log",value:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(o,t,r,n){return n&&!this.debug?null:(typeof o[0]=="string"&&(o[0]="".concat(r).concat(this.prefix," ").concat(o[0])),this.logger[t](o))}},{key:"create",value:function(o){return new e(this.logger,bu(bu({},{prefix:"".concat(this.prefix,":").concat(o,":")}),this.options))}},{key:"clone",value:function(o){return(o=o||this.options).prefix=o.prefix||this.prefix,new e(this.logger,o)}}]),e}(),ft=new _L,tr=function(){function e(){mt(this,e),this.observers={}}return vt(e,[{key:"on",value:function(o,t){var r=this;return o.split(" ").forEach(function(n){r.observers[n]=r.observers[n]||[],r.observers[n].push(t)}),this}},{key:"off",value:function(o,t){this.observers[o]&&(t?this.observers[o]=this.observers[o].filter(function(r){return r!==t}):delete this.observers[o])}},{key:"emit",value:function(o){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.observers[o]&&[].concat(this.observers[o]).forEach(function(i){i.apply(void 0,r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(i){i.apply(i,[o].concat(r))})}}]),e}();function Ln(){var e,o,t=new Promise(function(r,n){e=r,o=n});return t.resolve=e,t.reject=o,t}function gu(e){return e==null?"":""+e}function OL(e,o,t){e.forEach(function(r){o[r]&&(t[r]=o[r])})}function Ic(e,o,t){function r(l){return l&&l.indexOf("###")>-1?l.replace(/###/g,"."):l}function n(){return!e||typeof e=="string"}for(var i=typeof o!="string"?[].concat(o):o.split(".");i.length>1;){if(n())return{};var a=r(i.shift());!e[a]&&t&&(e[a]=new t),e=Object.prototype.hasOwnProperty.call(e,a)?e[a]:{}}return n()?{}:{obj:e,k:r(i.shift())}}function mu(e,o,t){var r=Ic(e,o,Object);r.obj[r.k]=t}function SL(e,o,t,r){var n=Ic(e,o,Object),i=n.obj,a=n.k;i[a]=i[a]||[],r&&(i[a]=i[a].concat(t)),r||i[a].push(t)}function _a(e,o){var t=Ic(e,o),r=t.obj,n=t.k;if(r)return r[n]}function zL(e,o,t){var r=_a(e,t);return r!==void 0?r:_a(o,t)}function ug(e,o,t){for(var r in o)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof o[r]=="string"||o[r]instanceof String?t&&(e[r]=o[r]):ug(e[r],o[r],t):e[r]=o[r]);return e}function Dr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var EL={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function LL(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(o){return EL[o]}):e}var Xa=typeof window<"u"&&window.navigator&&window.navigator.userAgentData===void 0&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,TL=[" ",",","?","!",";"];function AL(e,o,t){o=o||"",t=t||"";var r=TL.filter(function(l){return o.indexOf(l)<0&&t.indexOf(l)<0});if(r.length===0)return!0;var n=new RegExp("(".concat(r.map(function(l){return l==="?"?"\\?":l}).join("|"),")")),i=!n.test(e);if(!i){var a=e.indexOf(t);a>0&&!n.test(e.substring(0,a))&&(i=!0)}return i}function Oa(e,o){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[o])return e[o];for(var r=o.split(t),n=e,i=0;i<r.length;++i){if(!n||typeof n[r[i]]=="string"&&i+1<r.length)return;if(n[r[i]]===void 0){for(var a=2,l=r.slice(i,i+a).join(t),s=n[l];s===void 0&&r.length>i+a;)a++,s=n[l=r.slice(i,i+a).join(t)];if(s===void 0)return;if(s===null)return null;if(o.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}var c=r.slice(i+a).join(t);return c?Oa(s,c,t):void 0}n=n[r[i]]}return n}}function vu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Di(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?vu(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function CL(e){var o=PL();return function(){var t,r=gt(e);if(o){var n=gt(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Si(this,t)}}function PL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var FL=function(e){Ga(t,tr);var o=CL(t);function t(r){var n,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return mt(this,t),n=o.call(this),Xa&&tr.call(Jt(n)),n.data=r||{},n.options=i,n.options.keySeparator===void 0&&(n.options.keySeparator="."),n.options.ignoreJSONStructure===void 0&&(n.options.ignoreJSONStructure=!0),n}return vt(t,[{key:"addNamespaces",value:function(r){this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}},{key:"removeNamespaces",value:function(r){var n=this.options.ns.indexOf(r);n>-1&&this.options.ns.splice(n,1)}},{key:"getResource",value:function(r,n,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,s=a.ignoreJSONStructure!==void 0?a.ignoreJSONStructure:this.options.ignoreJSONStructure,c=[r,n];i&&typeof i!="string"&&(c=c.concat(i)),i&&typeof i=="string"&&(c=c.concat(l?i.split(l):i)),r.indexOf(".")>-1&&(c=r.split("."));var d=_a(this.data,c);return d||!s||typeof i!="string"?d:Oa(this.data&&this.data[r]&&this.data[r][n],i,l)}},{key:"addResource",value:function(r,n,i,a){var l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},s=this.options.keySeparator;s===void 0&&(s=".");var c=[r,n];i&&(c=c.concat(s?i.split(s):i)),r.indexOf(".")>-1&&(a=n,n=(c=r.split("."))[1]),this.addNamespaces(n),mu(this.data,c,a),l.silent||this.emit("added",r,n,i,a)}},{key:"addResources",value:function(r,n,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var l in i)typeof i[l]!="string"&&Object.prototype.toString.apply(i[l])!=="[object Array]"||this.addResource(r,n,l,i[l],{silent:!0});a.silent||this.emit("added",r,n,i)}},{key:"addResourceBundle",value:function(r,n,i,a,l){var s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},c=[r,n];r.indexOf(".")>-1&&(a=i,i=n,n=(c=r.split("."))[1]),this.addNamespaces(n);var d=_a(this.data,c)||{};a?ug(d,i,l):d=Di(Di({},d),i),mu(this.data,c,d),s.silent||this.emit("added",r,n,i)}},{key:"removeResourceBundle",value:function(r,n){this.hasResourceBundle(r,n)&&delete this.data[r][n],this.removeNamespaces(n),this.emit("removed",r,n)}},{key:"hasResourceBundle",value:function(r,n){return this.getResource(r,n)!==void 0}},{key:"getResourceBundle",value:function(r,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?Di(Di({},{}),this.getResource(r,n)):this.getResource(r,n)}},{key:"getDataByLanguage",value:function(r){return this.data[r]}},{key:"hasLanguageSomeTranslations",value:function(r){var n=this.getDataByLanguage(r);return!!(n&&Object.keys(n)||[]).find(function(i){return n[i]&&Object.keys(n[i]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),t}(),pg={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,o,t,r,n){var i=this;return e.forEach(function(a){i.processors[a]&&(o=i.processors[a].process(o,t,r,n))}),o}};function ku(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function ho(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?ku(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ku(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function $L(e){var o=IL();return function(){var t,r=gt(e);if(o){var n=gt(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Si(this,t)}}function IL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var wu={},yu=function(e){Ga(t,tr);var o=$L(t);function t(r){var n,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return mt(this,t),n=o.call(this),Xa&&tr.call(Jt(n)),OL(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Jt(n)),n.options=i,n.options.keySeparator===void 0&&(n.options.keySeparator="."),n.logger=ft.create("translator"),n}return vt(t,[{key:"changeLanguage",value:function(r){r&&(this.language=r)}},{key:"exists",value:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(r==null)return!1;var i=this.resolve(r,n);return i&&i.res!==void 0}},{key:"extractFromKey",value:function(r,n){var i=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");var a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,l=n.ns||this.options.defaultNS||[],s=i&&r.indexOf(i)>-1,c=!(this.options.userDefinedKeySeparator||n.keySeparator||this.options.userDefinedNsSeparator||n.nsSeparator||AL(r,i,a));if(s&&!c){var d=r.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:r,namespaces:l};var f=r.split(i);(i!==a||i===a&&this.options.ns.indexOf(f[0])>-1)&&(l=f.shift()),r=f.join(a)}return typeof l=="string"&&(l=[l]),{key:r,namespaces:l}}},{key:"translate",value:function(r,n,i){var a=this;if(Zo(n)!=="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),n||(n={}),r==null)return"";Array.isArray(r)||(r=[String(r)]);var l=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,c=this.extractFromKey(r[r.length-1],n),d=c.key,f=c.namespaces,p=f[f.length-1],b=n.lng||this.language,h=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(b&&b.toLowerCase()==="cimode"){if(h){var g=n.nsSeparator||this.options.nsSeparator;return l?{res:"".concat(p).concat(g).concat(d),usedKey:d,exactUsedKey:d,usedLng:b,usedNS:p}:"".concat(p).concat(g).concat(d)}return l?{res:d,usedKey:d,exactUsedKey:d,usedLng:b,usedNS:p}:d}var m=this.resolve(r,n),k=m&&m.res,w=m&&m.usedKey||d,y=m&&m.exactUsedKey||d,x=Object.prototype.toString.apply(k),E=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,P=!this.i18nFormat||this.i18nFormat.handleAsObject;if(P&&k&&typeof k!="string"&&typeof k!="boolean"&&typeof k!="number"&&["[object Number]","[object Function]","[object RegExp]"].indexOf(x)<0&&(typeof E!="string"||x!=="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var $=this.options.returnedObjectHandler?this.options.returnedObjectHandler(w,k,ho(ho({},n),{},{ns:f})):"key '".concat(d," (").concat(this.language,")' returned an object instead of string.");return l?(m.res=$,m):$}if(s){var S=x==="[object Array]",T=S?[]:{},U=S?y:w;for(var J in k)if(Object.prototype.hasOwnProperty.call(k,J)){var K="".concat(U).concat(s).concat(J);T[J]=this.translate(K,ho(ho({},n),{joinArrays:!1,ns:f})),T[J]===K&&(T[J]=k[J])}k=T}}else if(P&&typeof E=="string"&&x==="[object Array]")(k=k.join(E))&&(k=this.extendTranslation(k,r,n,i));else{var ge=!1,fe=!1,ke=n.count!==void 0&&typeof n.count!="string",Te=t.hasDefaultValue(n),G=ke?this.pluralResolver.getSuffix(b,n.count,n):"",te=n["defaultValue".concat(G)]||n.defaultValue;!this.isValidLookup(k)&&Te&&(ge=!0,k=te),this.isValidLookup(k)||(fe=!0,k=d);var ye=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&fe?void 0:k,Ae=Te&&te!==k&&this.options.updateMissing;if(fe||ge||Ae){if(this.logger.log(Ae?"updateKey":"missingKey",b,p,d,Ae?te:k),s){var lo=this.resolve(d,ho(ho({},n),{},{keySeparator:!1}));lo&&lo.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var Ue=[],Ze=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Ze&&Ze[0])for(var No=0;No<Ze.length;No++)Ue.push(Ze[No]);else this.options.saveMissingTo==="all"?Ue=this.languageUtils.toResolveHierarchy(n.lng||this.language):Ue.push(n.lng||this.language);var F=function(W,D,Q){var Oe=Te&&Q!==k?Q:ye;a.options.missingKeyHandler?a.options.missingKeyHandler(W,p,D,Oe,Ae,n):a.backendConnector&&a.backendConnector.saveMissing&&a.backendConnector.saveMissing(W,p,D,Oe,Ae,n),a.emit("missingKey",W,p,D,k)};this.options.saveMissing&&(this.options.saveMissingPlurals&&ke?Ue.forEach(function(W){a.pluralResolver.getSuffixes(W,n).forEach(function(D){F([W],d+D,n["defaultValue".concat(D)]||te)})}):F(Ue,d,te))}k=this.extendTranslation(k,r,n,m,i),fe&&k===d&&this.options.appendNamespaceToMissingKey&&(k="".concat(p,":").concat(d)),(fe||ge)&&this.options.parseMissingKeyHandler&&(k=this.options.compatibilityAPI!=="v1"?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(p,":").concat(d):d,ge?k:void 0):this.options.parseMissingKeyHandler(k))}return l?(m.res=k,m):k}},{key:"extendTranslation",value:function(r,n,i,a,l){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)r=this.i18nFormat.parse(r,ho(ho({},this.options.interpolation.defaultVariables),i),a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init(ho(ho({},i),{interpolation:ho(ho({},this.options.interpolation),i.interpolation)}));var c,d=typeof r=="string"&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(d){var f=r.match(this.interpolator.nestingRegexp);c=f&&f.length}var p=i.replace&&typeof i.replace!="string"?i.replace:i;if(this.options.interpolation.defaultVariables&&(p=ho(ho({},this.options.interpolation.defaultVariables),p)),r=this.interpolator.interpolate(r,p,i.lng||this.language,i),d){var b=r.match(this.interpolator.nestingRegexp);c<(b&&b.length)&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&a&&a.res&&(i.lng=a.usedLng),i.nest!==!1&&(r=this.interpolator.nest(r,function(){for(var m=arguments.length,k=new Array(m),w=0;w<m;w++)k[w]=arguments[w];return l&&l[0]===k[0]&&!i.context?(s.logger.warn("It seems you are nesting recursively key: ".concat(k[0]," in key: ").concat(n[0])),null):s.translate.apply(s,k.concat([n]))},i)),i.interpolation&&this.interpolator.reset()}var h=i.postProcess||this.options.postProcess,g=typeof h=="string"?[h]:h;return r!=null&&g&&g.length&&i.applyPostProcessor!==!1&&(r=pg.handle(g,r,n,this.options&&this.options.postProcessPassResolved?ho({i18nResolved:a},i):i,this)),r}},{key:"resolve",value:function(r){var n,i,a,l,s,c=this,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof r=="string"&&(r=[r]),r.forEach(function(f){if(!c.isValidLookup(n)){var p=c.extractFromKey(f,d),b=p.key;i=b;var h=p.namespaces;c.options.fallbackNS&&(h=h.concat(c.options.fallbackNS));var g=d.count!==void 0&&typeof d.count!="string",m=g&&!d.ordinal&&d.count===0&&c.pluralResolver.shouldUseIntlApi(),k=d.context!==void 0&&(typeof d.context=="string"||typeof d.context=="number")&&d.context!=="",w=d.lngs?d.lngs:c.languageUtils.toResolveHierarchy(d.lng||c.language,d.fallbackLng);h.forEach(function(y){c.isValidLookup(n)||(s=y,!wu["".concat(w[0],"-").concat(y)]&&c.utils&&c.utils.hasLoadedNamespace&&!c.utils.hasLoadedNamespace(s)&&(wu["".concat(w[0],"-").concat(y)]=!0,c.logger.warn('key "'.concat(i,'" for languages "').concat(w.join(", "),`" won't get resolved as namespace "`).concat(s,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(function(x){if(!c.isValidLookup(n)){l=x;var E,P=[b];if(c.i18nFormat&&c.i18nFormat.addLookupKeys)c.i18nFormat.addLookupKeys(P,b,x,y,d);else{var $;g&&($=c.pluralResolver.getSuffix(x,d.count,d));var S="".concat(c.options.pluralSeparator,"zero");if(g&&(P.push(b+$),m&&P.push(b+S)),k){var T="".concat(b).concat(c.options.contextSeparator).concat(d.context);P.push(T),g&&(P.push(T+$),m&&P.push(T+S))}}for(;E=P.pop();)c.isValidLookup(n)||(a=E,n=c.getResource(x,y,E,d))}}))})}}),{res:n,usedKey:i,exactUsedKey:a,usedLng:l,usedNS:s}}},{key:"isValidLookup",value:function(r){return!(r===void 0||!this.options.returnNull&&r===null||!this.options.returnEmptyString&&r==="")}},{key:"getResource",value:function(r,n,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(r,n,i,a):this.resourceStore.getResource(r,n,i,a)}}],[{key:"hasDefaultValue",value:function(r){var n="defaultValue";for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)&&n===i.substring(0,n.length)&&r[i]!==void 0)return!0;return!1}}]),t}();function Tl(e){return e.charAt(0).toUpperCase()+e.slice(1)}var xu=function(){function e(o){mt(this,e),this.options=o,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ft.create("languageUtils")}return vt(e,[{key:"getScriptPartFromCode",value:function(o){if(!o||o.indexOf("-")<0)return null;var t=o.split("-");return t.length===2?null:(t.pop(),t[t.length-1].toLowerCase()==="x"?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(o){if(!o||o.indexOf("-")<0)return o;var t=o.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(o){if(typeof o=="string"&&o.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],r=o.split("-");return this.options.lowerCaseLng?r=r.map(function(n){return n.toLowerCase()}):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=Tl(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=Tl(r[1].toLowerCase())),t.indexOf(r[2].toLowerCase())>-1&&(r[2]=Tl(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?o.toLowerCase():o}},{key:"isSupportedCode",value:function(o){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(o=this.getLanguagePartFromCode(o)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(o)>-1}},{key:"getBestMatchFromCodes",value:function(o){var t,r=this;return o?(o.forEach(function(n){if(!t){var i=r.formatLanguageCode(n);r.options.supportedLngs&&!r.isSupportedCode(i)||(t=i)}}),!t&&this.options.supportedLngs&&o.forEach(function(n){if(!t){var i=r.getLanguagePartFromCode(n);if(r.isSupportedCode(i))return t=i;t=r.options.supportedLngs.find(function(a){return a===i?a:a.indexOf("-")<0&&i.indexOf("-")<0?void 0:a.indexOf(i)===0?a:void 0})}}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(o,t){if(!o)return[];if(typeof o=="function"&&(o=o(t)),typeof o=="string"&&(o=[o]),Object.prototype.toString.apply(o)==="[object Array]")return o;if(!t)return o.default||[];var r=o[t];return r||(r=o[this.getScriptPartFromCode(t)]),r||(r=o[this.formatLanguageCode(t)]),r||(r=o[this.getLanguagePartFromCode(t)]),r||(r=o.default),r||[]}},{key:"toResolveHierarchy",value:function(o,t){var r=this,n=this.getFallbackCodes(t||this.options.fallbackLng||[],o),i=[],a=function(l){l&&(r.isSupportedCode(l)?i.push(l):r.logger.warn("rejecting language code not found in supportedLngs: ".concat(l)))};return typeof o=="string"&&o.indexOf("-")>-1?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(o)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(o)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(o))):typeof o=="string"&&a(this.formatLanguageCode(o)),n.forEach(function(l){i.indexOf(l)<0&&a(r.formatLanguageCode(l))}),i}}]),e}(),NL=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],RL={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}},jL=["v1","v2","v3"],_u={zero:0,one:1,two:2,few:3,many:4,other:5};function ML(){var e={};return NL.forEach(function(o){o.lngs.forEach(function(t){e[t]={numbers:o.nr,plurals:RL[o.fc]}})}),e}var KL=function(){function e(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};mt(this,e),this.languageUtils=o,this.options=t,this.logger=ft.create("pluralResolver"),this.options.compatibilityJSON&&this.options.compatibilityJSON!=="v4"||typeof Intl<"u"&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=ML()}return vt(e,[{key:"addRule",value:function(o,t){this.rules[o]=t}},{key:"getRule",value:function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(o,{type:t.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[o]||this.rules[this.languageUtils.getLanguagePartFromCode(o)]}},{key:"needsPlural",value:function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(o,t);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(o,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(o,r).map(function(n){return"".concat(t).concat(n)})}},{key:"getSuffixes",value:function(o){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.getRule(o,r);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort(function(i,a){return _u[i]-_u[a]}).map(function(i){return"".concat(t.options.prepend).concat(i)}):n.numbers.map(function(i){return t.getSuffix(o,i,r)}):[]}},{key:"getSuffix",value:function(o,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=this.getRule(o,r);return n?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(n.select(t)):this.getSuffixRetroCompatible(n,t):(this.logger.warn("no plural rule found for: ".concat(o)),"")}},{key:"getSuffixRetroCompatible",value:function(o,t){var r=this,n=o.noAbs?o.plurals(t):o.plurals(Math.abs(t)),i=o.numbers[n];this.options.simplifyPluralSuffix&&o.numbers.length===2&&o.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));var a=function(){return r.options.prepend&&i.toString()?r.options.prepend+i.toString():i.toString()};return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?"_plural_".concat(i.toString()):a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&o.numbers.length===2&&o.numbers[0]===1?a():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}},{key:"shouldUseIntlApi",value:function(){return!jL.includes(this.options.compatibilityJSON)}}]),e}();function Ou(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Vo(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Ou(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ou(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Su(e,o,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],i=zL(e,o,t);return!i&&n&&typeof t=="string"&&(i=Oa(e,t,r))===void 0&&(i=Oa(o,t,r)),i}var BL=function(){function e(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};mt(this,e),this.logger=ft.create("interpolator"),this.options=o,this.format=o.interpolation&&o.interpolation.format||function(t){return t},this.init(o)}return vt(e,[{key:"init",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};o.interpolation||(o.interpolation={escapeValue:!0});var t=o.interpolation;this.escape=t.escape!==void 0?t.escape:LL,this.escapeValue=t.escapeValue===void 0||t.escapeValue,this.useRawValueToEscape=t.useRawValueToEscape!==void 0&&t.useRawValueToEscape,this.prefix=t.prefix?Dr(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?Dr(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?Dr(t.nestingPrefix):t.nestingPrefixEscaped||Dr("$t("),this.nestingSuffix=t.nestingSuffix?Dr(t.nestingSuffix):t.nestingSuffixEscaped||Dr(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=t.alwaysFormat!==void 0&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var o="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(o,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var r="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(r,"g")}},{key:"interpolate",value:function(o,t,r,n){var i,a,l,s=this,c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function d(h){return h.replace(/\$/g,"$$$$")}var f=function(h){if(h.indexOf(s.formatSeparator)<0){var g=Su(t,c,h,s.options.keySeparator,s.options.ignoreJSONStructure);return s.alwaysFormat?s.format(g,void 0,r,Vo(Vo(Vo({},n),t),{},{interpolationkey:h})):g}var m=h.split(s.formatSeparator),k=m.shift().trim(),w=m.join(s.formatSeparator).trim();return s.format(Su(t,c,k,s.options.keySeparator,s.options.ignoreJSONStructure),w,r,Vo(Vo(Vo({},n),t),{},{interpolationkey:k}))};this.resetRegExp();var p=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,b=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(h){return d(h)}},{regex:this.regexp,safeValue:function(h){return s.escapeValue?d(s.escape(h)):d(h)}}].forEach(function(h){for(l=0;i=h.regex.exec(o);){var g=i[1].trim();if((a=f(g))===void 0)if(typeof p=="function"){var m=p(o,i,n);a=typeof m=="string"?m:""}else if(n&&Object.prototype.hasOwnProperty.call(n,g))a="";else{if(b){a=i[0];continue}s.logger.warn("missed to pass in variable ".concat(g," for interpolating ").concat(o)),a=""}else typeof a=="string"||s.useRawValueToEscape||(a=gu(a));var k=h.safeValue(a);if(o=o.replace(i[0],k),b?(h.regex.lastIndex+=a.length,h.regex.lastIndex-=i[0].length):h.regex.lastIndex=0,++l>=s.maxReplaces)break}}),o}},{key:"nest",value:function(o,t){var r,n,i,a=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};function s(p,b){var h=this.nestingOptionsSeparator;if(p.indexOf(h)<0)return p;var g=p.split(new RegExp("".concat(h,"[ ]*{"))),m="{".concat(g[1]);p=g[0];var k=(m=this.interpolate(m,i)).match(/'/g),w=m.match(/"/g);(k&&k.length%2==0&&!w||w.length%2!=0)&&(m=m.replace(/'/g,'"'));try{i=JSON.parse(m),b&&(i=Vo(Vo({},b),i))}catch(y){return this.logger.warn("failed parsing options string in nesting for key ".concat(p),y),"".concat(p).concat(h).concat(m)}return delete i.defaultValue,p}for(;r=this.nestingRegexp.exec(o);){var c=[];(i=(i=Vo({},l)).replace&&typeof i.replace!="string"?i.replace:i).applyPostProcessor=!1,delete i.defaultValue;var d=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){var f=r[1].split(this.formatSeparator).map(function(p){return p.trim()});r[1]=f.shift(),c=f,d=!0}if((n=t(s.call(this,r[1].trim(),i),i))&&r[0]===o&&typeof n!="string")return n;typeof n!="string"&&(n=gu(n)),n||(this.logger.warn("missed to resolve ".concat(r[1]," for nesting ").concat(o)),n=""),d&&(n=c.reduce(function(p,b){return a.format(p,b,l.lng,Vo(Vo({},l),{},{interpolationkey:r[1].trim()}))},n.trim())),o=o.replace(r[0],n),this.regexp.lastIndex=0}return o}}]),e}();function zu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function wt(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?zu(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):zu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function DL(e){var o=e.toLowerCase().trim(),t={};if(e.indexOf("(")>-1){var r=e.split("(");o=r[0].toLowerCase().trim();var n=r[1].substring(0,r[1].length-1);o==="currency"&&n.indexOf(":")<0?t.currency||(t.currency=n.trim()):o==="relativetime"&&n.indexOf(":")<0?t.range||(t.range=n.trim()):n.split(";").forEach(function(i){if(i){var a=yL(i.split(":")),l=a[0],s=a.slice(1).join(":").trim().replace(/^'+|'+$/g,"");t[l.trim()]||(t[l.trim()]=s),s==="false"&&(t[l.trim()]=!1),s==="true"&&(t[l.trim()]=!0),isNaN(s)||(t[l.trim()]=parseInt(s,10))}})}return{formatName:o,formatOptions:t}}function Ur(e){var o={};return function(t,r,n){var i=r+JSON.stringify(n),a=o[i];return a||(a=e(r,n),o[i]=a),a(t)}}var UL=function(){function e(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};mt(this,e),this.logger=ft.create("formatter"),this.options=o,this.formats={number:Ur(function(t,r){var n=new Intl.NumberFormat(t,wt({},r));return function(i){return n.format(i)}}),currency:Ur(function(t,r){var n=new Intl.NumberFormat(t,wt(wt({},r),{},{style:"currency"}));return function(i){return n.format(i)}}),datetime:Ur(function(t,r){var n=new Intl.DateTimeFormat(t,wt({},r));return function(i){return n.format(i)}}),relativetime:Ur(function(t,r){var n=new Intl.RelativeTimeFormat(t,wt({},r));return function(i){return n.format(i,r.range||"day")}}),list:Ur(function(t,r){var n=new Intl.ListFormat(t,wt({},r));return function(i){return n.format(i)}})},this.init(o)}return vt(e,[{key:"init",value:function(o){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}},{key:"add",value:function(o,t){this.formats[o.toLowerCase().trim()]=t}},{key:"addCached",value:function(o,t){this.formats[o.toLowerCase().trim()]=Ur(t)}},{key:"format",value:function(o,t,r){var n=this,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return t.split(this.formatSeparator).reduce(function(a,l){var s=DL(l),c=s.formatName,d=s.formatOptions;if(n.formats[c]){var f=a;try{var p=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},b=p.locale||p.lng||i.locale||i.lng||r;f=n.formats[c](a,b,wt(wt(wt({},d),i),p))}catch(h){n.logger.warn(h)}return f}return n.logger.warn("there was no format function for ".concat(c)),a},o)}}]),e}();function Eu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Lu(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Eu(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Eu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function HL(e){var o=qL();return function(){var t,r=gt(e);if(o){var n=gt(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Si(this,t)}}function qL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function VL(e,o){e.pending[o]!==void 0&&(delete e.pending[o],e.pendingCount--)}var WL=function(e){Ga(t,tr);var o=HL(t);function t(r,n,i){var a,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return mt(this,t),a=o.call(this),Xa&&tr.call(Jt(a)),a.backend=r,a.store=n,a.services=i,a.languageUtils=i.languageUtils,a.options=l,a.logger=ft.create("backendConnector"),a.waitingReads=[],a.maxParallelReads=l.maxParallelReads||10,a.readingCalls=0,a.maxRetries=l.maxRetries>=0?l.maxRetries:5,a.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,a.state={},a.queue=[],a.backend&&a.backend.init&&a.backend.init(i,l.backend,l),a}return vt(t,[{key:"queueLoad",value:function(r,n,i,a){var l=this,s={},c={},d={},f={};return r.forEach(function(p){var b=!0;n.forEach(function(h){var g="".concat(p,"|").concat(h);!i.reload&&l.store.hasResourceBundle(p,h)?l.state[g]=2:l.state[g]<0||(l.state[g]===1?c[g]===void 0&&(c[g]=!0):(l.state[g]=1,b=!1,c[g]===void 0&&(c[g]=!0),s[g]===void 0&&(s[g]=!0),f[h]===void 0&&(f[h]=!0)))}),b||(d[p]=!0)}),(Object.keys(s).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(s),pending:Object.keys(c),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(f)}}},{key:"loaded",value:function(r,n,i){var a=r.split("|"),l=a[0],s=a[1];n&&this.emit("failedLoading",l,s,n),i&&this.store.addResourceBundle(l,s,i),this.state[r]=n?-1:2;var c={};this.queue.forEach(function(d){SL(d.loaded,[l],s),VL(d,r),n&&d.errors.push(n),d.pendingCount!==0||d.done||(Object.keys(d.loaded).forEach(function(f){c[f]||(c[f]={});var p=d.loaded[f];p.length&&p.forEach(function(b){c[f][b]===void 0&&(c[f][b]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",c),this.queue=this.queue.filter(function(d){return!d.done})}},{key:"read",value:function(r,n,i){var a=this,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!r.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads)this.waitingReads.push({lng:r,ns:n,fcName:i,tried:l,wait:s,callback:c});else{this.readingCalls++;var d=function(b,h){if(a.readingCalls--,a.waitingReads.length>0){var g=a.waitingReads.shift();a.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}b&&h&&l<a.maxRetries?setTimeout(function(){a.read.call(a,r,n,i,l+1,2*s,c)},s):c(b,h)},f=this.backend[i].bind(this.backend);if(f.length!==2)return f(r,n,d);try{var p=f(r,n);p&&typeof p.then=="function"?p.then(function(b){return d(null,b)}).catch(d):d(null,p)}catch(b){d(b)}}}},{key:"prepareLoading",value:function(r,n){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();typeof r=="string"&&(r=this.languageUtils.toResolveHierarchy(r)),typeof n=="string"&&(n=[n]);var s=this.queueLoad(r,n,a,l);if(!s.toLoad.length)return s.pending.length||l(),null;s.toLoad.forEach(function(c){i.loadOne(c)})}},{key:"load",value:function(r,n,i){this.prepareLoading(r,n,{},i)}},{key:"reload",value:function(r,n,i){this.prepareLoading(r,n,{reload:!0},i)}},{key:"loadOne",value:function(r){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=r.split("|"),l=a[0],s=a[1];this.read(l,s,"read",void 0,void 0,function(c,d){c&&n.logger.warn("".concat(i,"loading namespace ").concat(s," for language ").concat(l," failed"),c),!c&&d&&n.logger.log("".concat(i,"loaded namespace ").concat(s," for language ").concat(l),d),n.loaded(r,c,d)})}},{key:"saveMissing",value:function(r,n,i,a,l){var s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n))this.logger.warn('did not save key "'.concat(i,'" as the namespace "').concat(n,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(i!=null&&i!==""){if(this.backend&&this.backend.create){var d=Lu(Lu({},s),{},{isUpdate:l}),f=this.backend.create.bind(this.backend);if(f.length<6)try{var p;(p=f.length===5?f(r,n,i,a,d):f(r,n,i,a))&&typeof p.then=="function"?p.then(function(b){return c(null,b)}).catch(c):c(null,p)}catch(b){c(b)}else f(r,n,i,a,c,d)}r&&r[0]&&this.store.addResource(r[0],n,i,a)}}}]),t}();function Tu(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var o={};if(Zo(e[1])==="object"&&(o=e[1]),typeof e[1]=="string"&&(o.defaultValue=e[1]),typeof e[2]=="string"&&(o.tDescription=e[2]),Zo(e[2])==="object"||Zo(e[3])==="object"){var t=e[3]||e[2];Object.keys(t).forEach(function(r){o[r]=t[r]})}return o},interpolation:{escapeValue:!0,format:function(e,o,t,r){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Au(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Cu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function rt(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Cu(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Cu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function GL(e){var o=XL();return function(){var t,r=gt(e);if(o){var n=gt(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Si(this,t)}}function XL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ui(){}function YL(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function(o){typeof e[o]=="function"&&(e[o]=e[o].bind(e))})}var Sa=function(e){Ga(t,tr);var o=GL(t);function t(){var r,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(mt(this,t),r=o.call(this),Xa&&tr.call(Jt(r)),r.options=Au(n),r.services={},r.logger=ft,r.modules={external:[]},YL(Jt(r)),i&&!r.isInitialized&&!n.isClone){if(!r.options.initImmediate)return r.init(n,i),Si(r,Jt(r));setTimeout(function(){r.init(n,i)},0)}return r}return vt(t,[{key:"init",value:function(){var r=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(i=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));var a=Tu();function l(h){return h?typeof h=="function"?new h:h:null}if(this.options=rt(rt(rt({},a),this.options),Au(n)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=rt(rt({},a.interpolation),this.options.interpolation)),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator),!this.options.isClone){var s;this.modules.logger?ft.init(l(this.modules.logger),this.options):ft.init(null,this.options),this.modules.formatter?s=this.modules.formatter:typeof Intl<"u"&&(s=UL);var c=new xu(this.options);this.store=new FL(this.options.resources,this.options);var d=this.services;d.logger=ft,d.resourceStore=this.store,d.languageUtils=c,d.pluralResolver=new KL(c,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!s||this.options.interpolation.format&&this.options.interpolation.format!==a.interpolation.format||(d.formatter=l(s),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new BL(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new WL(l(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(h){for(var g=arguments.length,m=new Array(g>1?g-1:0),k=1;k<g;k++)m[k-1]=arguments[k];r.emit.apply(r,[h].concat(m))}),this.modules.languageDetector&&(d.languageDetector=l(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=l(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new yu(this.services,this.options),this.translator.on("*",function(h){for(var g=arguments.length,m=new Array(g>1?g-1:0),k=1;k<g;k++)m[k-1]=arguments[k];r.emit.apply(r,[h].concat(m))}),this.modules.external.forEach(function(h){h.init&&h.init(r)})}if(this.format=this.options.interpolation.format,i||(i=Ui),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(h){r[h]=function(){var g;return(g=r.store)[h].apply(g,arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(function(h){r[h]=function(){var g;return(g=r.store)[h].apply(g,arguments),r}});var p=Ln(),b=function(){var h=function(g,m){r.isInitialized&&!r.initializedStoreOnce&&r.logger.warn("init: i18next is already initialized. You should call init just once!"),r.isInitialized=!0,r.options.isClone||r.logger.log("initialized",r.options),r.emit("initialized",r.options),p.resolve(m),i(g,m)};if(r.languages&&r.options.compatibilityAPI!=="v1"&&!r.isInitialized)return h(null,r.t.bind(r));r.changeLanguage(r.options.lng,h)};return this.options.resources||!this.options.initImmediate?b():setTimeout(b,0),p}},{key:"loadResources",value:function(r){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ui,a=typeof r=="string"?r:this.language;if(typeof r=="function"&&(i=r),!this.options.resources||this.options.partialBundledLanguages){if(a&&a.toLowerCase()==="cimode")return i();var l=[],s=function(c){c&&n.services.languageUtils.toResolveHierarchy(c).forEach(function(d){l.indexOf(d)<0&&l.push(d)})};a?s(a):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(c){return s(c)}),this.options.preload&&this.options.preload.forEach(function(c){return s(c)}),this.services.backendConnector.load(l,this.options.ns,function(c){c||n.resolvedLanguage||!n.language||n.setResolvedLanguage(n.language),i(c)})}else i(null)}},{key:"reloadResources",value:function(r,n,i){var a=Ln();return r||(r=this.languages),n||(n=this.options.ns),i||(i=Ui),this.services.backendConnector.reload(r,n,function(l){a.resolve(),i(l)}),a}},{key:"use",value:function(r){if(!r)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!r.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return r.type==="backend"&&(this.modules.backend=r),(r.type==="logger"||r.log&&r.warn&&r.error)&&(this.modules.logger=r),r.type==="languageDetector"&&(this.modules.languageDetector=r),r.type==="i18nFormat"&&(this.modules.i18nFormat=r),r.type==="postProcessor"&&pg.addPostProcessor(r),r.type==="formatter"&&(this.modules.formatter=r),r.type==="3rdParty"&&this.modules.external.push(r),this}},{key:"setResolvedLanguage",value:function(r){if(r&&this.languages&&!(["cimode","dev"].indexOf(r)>-1))for(var n=0;n<this.languages.length;n++){var i=this.languages[n];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}},{key:"changeLanguage",value:function(r,n){var i=this;this.isLanguageChangingTo=r;var a=Ln();this.emit("languageChanging",r);var l=function(c){i.language=c,i.languages=i.services.languageUtils.toResolveHierarchy(c),i.resolvedLanguage=void 0,i.setResolvedLanguage(c)},s=function(c){r||c||!i.services.languageDetector||(c=[]);var d=typeof c=="string"?c:i.services.languageUtils.getBestMatchFromCodes(c);d&&(i.language||l(d),i.translator.language||i.translator.changeLanguage(d),i.services.languageDetector&&i.services.languageDetector.cacheUserLanguage&&i.services.languageDetector.cacheUserLanguage(d)),i.loadResources(d,function(f){(function(p,b){b?(l(b),i.translator.changeLanguage(b),i.isLanguageChangingTo=void 0,i.emit("languageChanged",b),i.logger.log("languageChanged",b)):i.isLanguageChangingTo=void 0,a.resolve(function(){return i.t.apply(i,arguments)}),n&&n(p,function(){return i.t.apply(i,arguments)})})(f,d)})};return r||!this.services.languageDetector||this.services.languageDetector.async?!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(r):s(this.services.languageDetector.detect()),a}},{key:"getFixedT",value:function(r,n,i){var a=this,l=function s(c,d){var f;if(Zo(d)!=="object"){for(var p=arguments.length,b=new Array(p>2?p-2:0),h=2;h<p;h++)b[h-2]=arguments[h];f=a.options.overloadTranslationOptionHandler([c,d].concat(b))}else f=rt({},d);f.lng=f.lng||s.lng,f.lngs=f.lngs||s.lngs,f.ns=f.ns||s.ns,f.keyPrefix=f.keyPrefix||i||s.keyPrefix;var g,m=a.options.keySeparator||".";return g=f.keyPrefix&&Array.isArray(c)?c.map(function(k){return"".concat(f.keyPrefix).concat(m).concat(k)}):f.keyPrefix?"".concat(f.keyPrefix).concat(m).concat(c):c,a.t(g,f)};return typeof r=="string"?l.lng=r:l.lngs=r,l.ns=n,l.keyPrefix=i,l}},{key:"t",value:function(){var r;return this.translator&&(r=this.translator).translate.apply(r,arguments)}},{key:"exists",value:function(){var r;return this.translator&&(r=this.translator).exists.apply(r,arguments)}},{key:"setDefaultNamespace",value:function(r){this.options.defaultNS=r}},{key:"hasLoadedNamespace",value:function(r){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var a=this.resolvedLanguage||this.languages[0],l=!!this.options&&this.options.fallbackLng,s=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var c=function(f,p){var b=n.services.backendConnector.state["".concat(f,"|").concat(p)];return b===-1||b===2};if(i.precheck){var d=i.precheck(this,c);if(d!==void 0)return d}return!!this.hasResourceBundle(a,r)||!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!c(a,r)||l&&!c(s,r))}},{key:"loadNamespaces",value:function(r,n){var i=this,a=Ln();return this.options.ns?(typeof r=="string"&&(r=[r]),r.forEach(function(l){i.options.ns.indexOf(l)<0&&i.options.ns.push(l)}),this.loadResources(function(l){a.resolve(),n&&n(l)}),a):(n&&n(),Promise.resolve())}},{key:"loadLanguages",value:function(r,n){var i=Ln();typeof r=="string"&&(r=[r]);var a=this.options.preload||[],l=r.filter(function(s){return a.indexOf(s)<0});return l.length?(this.options.preload=a.concat(l),this.loadResources(function(s){i.resolve(),n&&n(s)}),i):(n&&n(),Promise.resolve())}},{key:"dir",value:function(r){if(r||(r=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!r)return"rtl";var n=this.services&&this.services.languageUtils||new xu(Tu());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(n.getLanguagePartFromCode(r))>-1||r.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var r=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ui,a=rt(rt(rt({},this.options),n),{isClone:!0}),l=new t(a);return n.debug===void 0&&n.prefix===void 0||(l.logger=l.logger.clone(n)),["store","services","language"].forEach(function(s){l[s]=r[s]}),l.services=rt({},this.services),l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l.translator=new yu(l.services,l.options),l.translator.on("*",function(s){for(var c=arguments.length,d=new Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];l.emit.apply(l,[s].concat(d))}),l.init(a,i),l.translator.options=l.options,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),t}();ir(Sa,"createInstance",function(){return new Sa(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},arguments.length>1?arguments[1]:void 0)});var hg=Sa.createInstance();hg.createInstance=Sa.createInstance;class ZL{constructor(o,t){this.i18next=hg,Array.isArray(t)?t=new Set(t):typeof t=="function"&&(t=new Set([t])),this.i18next.isInitialized||this.i18next.init({lng:o}),t!==void 0&&t.forEach(r=>r((n,i)=>(this.addResourceBundle(n,i),n)))}addResourceBundle(o,t){this.i18next.addResourceBundle(o,"translation",t,!0)}translate(o,t){return this.i18next.t(o,Object.assign({count:t==null?void 0:t.count},t==null?void 0:t.placeholders))}}const JL=(e,o,t)=>{var r,n;try{ce.I18n===void 0&&Object.defineProperty(ce,"I18n",{value:new ZL((n=(r=t==null?void 0:t.translation)===null||r===void 0?void 0:r.name)!==null&&n!==void 0?n:"de",t==null?void 0:t.translations),writable:!1})}catch{}return rL(e,o,t)};/*!
 * KoliBri - The accessible HTML-Standard
 */var $s,Is;(function(e){e[e.error=0]="error",e[e.warning=1]="warning",e[e.info=2]="info",e[e.success=3]="success",e[e.message=4]="message",e[e.close=5]="close",e[e["form-description"]=6]="form-description",e[e.of=7]="of",e[e.characters=8]="characters",e[e.new=9]="new",e[e["no-entries"]=10]="no-entries",e[e["change-order"]=11]="change-order",e[e["action-running"]=12]="action-running",e[e["action-done"]=13]="action-done",e[e["page-first"]=14]="page-first",e[e["page-back"]=15]="page-back",e[e["page-next"]=16]="page-next",e[e["page-last"]=17]="page-last",e[e["entries-per-site"]=18]="entries-per-site",e[e["page-current"]=19]="page-current",e[e["page-selected"]=20]="page-selected",e[e["page-per-site"]=21]="page-per-site",e[e["nav-maximize"]=22]="nav-maximize",e[e["nav-minimize"]=23]="nav-minimize",e[e["logo-description"]=24]="logo-description",e[e["open-link-in-tab"]=25]="open-link-in-tab",e[e["kolibri-logo"]=26]="kolibri-logo"})($s||($s={})),function(e){e[e.abbr=0]="abbr",e[e.accordion=1]="accordion",e[e["accordion-group"]=2]="accordion-group",e[e.alert=3]="alert",e[e.avatar=4]="avatar",e[e.badge=5]="badge",e[e.breadcrumb=6]="breadcrumb",e[e.button=7]="button",e[e["button-group"]=8]="button-group",e[e["button-link"]=9]="button-link",e[e.card=10]="card",e[e.details=11]="details",e[e.dialog=12]="dialog",e[e.dropdown=13]="dropdown",e[e.form=14]="form",e[e.heading=15]="heading",e[e.icon=16]="icon",e[e.image=17]="image",e[e["indented-text"]=18]="indented-text",e[e["input-checkbox"]=19]="input-checkbox",e[e["input-color"]=20]="input-color",e[e["input-date"]=21]="input-date",e[e["input-file"]=22]="input-file",e[e["input-email"]=23]="input-email",e[e["input-number"]=24]="input-number",e[e["input-password"]=25]="input-password",e[e["input-radio"]=26]="input-radio",e[e["input-range"]=27]="input-range",e[e["input-text"]=28]="input-text",e[e.link=29]="link",e[e["link-button"]=30]="link-button",e[e["link-group"]=31]="link-group",e[e.modal=32]="modal",e[e.nav=33]="nav",e[e.pagination=34]="pagination",e[e.popover=35]="popover",e[e.progress=36]="progress",e[e.select=37]="select",e[e.separator=38]="separator",e[e["skip-nav"]=39]="skip-nav",e[e.spin=40]="spin",e[e.symbol=41]="symbol",e[e.table=42]="table",e[e.tabs=43]="tabs",e[e.textarea=44]="textarea",e[e.toast=45]="toast",e[e.toolbar=46]="toolbar",e[e.tooltip=47]="tooltip"}(Is||(Is={}));const $o=new bL("kol",$s,Is);$o.createTheme("bamf",{});const QL=$o.createTheme("bmf",{GLOBAL:`/* Design Tokens */
	:host {
		--color-midnight: #004b76;
		--color-ocean: #0077b6;
		--color-sky: #99c9e2;
		--color-ice: #cce4f0;
		--color-crimson: #780f2d;
		--color-red: #c0003c;
		--color-pink: #f2ccd8;
		--color-olive: #004d38;
		--color-green: #005c45;
		--color-jungle: #00854a;
		--color-lime: #c1ca31;
		--color-mint: #ccdeda;
		--color-fire: #7a2e1f;
		--color-orange: #c44931;
		--color-coral: #f5dcd7;
		--color-bronze: #c44931;
		--color-yellow: #c44931;
		--color-ivory: #c44931;
		--color-purple: #c44931;
		--color-lavender: #c44931;
		--color-black: #202020;
		--color-metal: #454d4f;
		--color-grey: #576164;
		--color-granite: #bec5c9;
		--color-silver: #e5e8e9;
		--color-smoke: #f2f3f4;
		--color-white: #ffffff;
		--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;
		--font-size: 16px;
		--spacing: 0.25em;
	}
	:host {
		font-family: var(--font-family);
		font-size: var(--font-size);
	}
	* {
		box-sizing: border-box;
	}
	*:not(i) {
		font-family: var(--font-family);
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--font-family);
		font-size: var(--font-size);
		margin: 0;
	}
	a,
	button {
		align-items: center;
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-flex;
		gap: 0.25rem;
		justify-items: center;
	}
	input,
	option,
	select,
	summary,
	textarea {
		display: inline-block;
	}
	a,
	button,
	input,
	option,
	select,
	summary,
	textarea {
		-ms-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		letter-spacing: inherit;
		word-break: break-word;
	}
	*[tabindex]:focus,
	a:focus,
	button:focus,
	input:focus,
	select:focus,
	summary:focus,
	textarea:focus {
		cursor: pointer;
		outline-color: var(--color-ocean);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 3px;
		transition: outline-offset 0.2s linear;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	kol-heading-wc {
		font-weight: 700;
	}`,"KOL-BUTTON":`:host {
		display: inline-block;
	}
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		border-radius: 1.5em;
		min-width: 44px;
		min-height: 44px;
		padding: 0;
		text-decoration: none !important;
	}
	button > kol-span-wc {
		min-width: 44px;
		min-height: 44px;
		display: grid;
		gap: 0.25em;
		line-height: 1.5rem;
		font-family: var(--font-family);
		font-weight: 700;
		cursor: pointer;
		border-radius: 1.5em;
		border-style: solid;
		border-width: 2px;
		font-size: 1rem;
		align-items: center;
		padding: 8px 14px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		text-transform: uppercase;
		width: inherit;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
	}
	button:disabled > kol-span-wc {
		cursor: not-allowed;
		opacity: 0.5;
	}
	button.primary > kol-span-wc,
	button.primary:disabled:hover > kol-span-wc {
		background-color: var(--color-midnight);
		border-color: var(--color-midnight);
		color: var(--color-white);
	}
	button.secondary > kol-span-wc,
	button.secondary:disabled:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:disabled:hover > kol-span-wc {
		background-color: var(--color-white);
		border-color: var(--color-midnight);
		color: var(--color-midnight);
	}
	button.danger > kol-span-wc,
	button.danger:disabled:hover > kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
		color: var(--color-white);
	}
	button.ghost > kol-span-wc,
	button.ghost:disabled:hover > kol-span-wc {
		border-color: var(--color-white);
		background-color: var(--color-white);
		box-shadow: none;
		color: var(--color-midnight);
	} /*-----------*/
	button.primary:active > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.secondary:active > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.normal:active > kol-span-wc,
	button.normal:hover > kol-span-wc,
	button.danger:active > kol-span-wc,
	button.danger:hover > kol-span-wc,
	button.ghost:active > kol-span-wc,
	button.ghost:hover > kol-span-wc {
		background-color: var(--color-ocean);
		border-color: var(--color-ocean);
		box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		color: var(--color-white);
	}
	button.danger:active > kol-span-wc,
	button.danger:hover > kol-span-wc {
		background-color: var(--color-crimson);
		border-color: var(--color-crimson);
	}
	button:disabled:hover > kol-span-wc,
	button:focus:hover > kol-span-wc {
		box-shadow: none;
	}
	button.primary:active > kol-span-wc,
	button.secondary:active > kol-span-wc,
	button.normal:active > kol-span-wc,
	button.danger:active > kol-span-wc,
	button.ghost:active > kol-span-wc {
		border-color: var(--color-white);
		box-shadow: none;
		outline: none;
	}
	:host button > kol-span-wc > span {
		display: flex;
		gap: 0.5em;
		margin: auto;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.75px;
	}
	button.icon-only > kol-span-wc {
		padding: 8px;
	}
	button.icon-only > kol-span-wc > span > span {
		display: none;
	}
	button.icon-only > kol-span-wc kol-icon {
		width: 1.5em;
		height: 1.5em;
	}
	button.loading > kol-span-wc kol-icon {
		animation: spin 5s infinite linear;
	} /** small ghost button */
	button.small.ghost > kol-span-wc {
		border: none;
		background-color: transparent;
		box-shadow: none;
	}
	button.small.ghost > kol-span-wc > span {
		border-radius: 1.5em;
		border-style: solid;
		border-width: 2px;
		border-color: var(--color-white);
		background-color: var(--color-white);
	}
	button.small.ghost:active > kol-span-wc > span,
	button.small.ghost:hover > kol-span-wc > span,
	button.small.ghost.transparent:active > kol-span-wc > span,
	button.small.ghost.transparent:hover > kol-span-wc > span {
		background-color: var(--color-ocean);
		border-color: var(--color-ocean);
		box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		color: var(--color-white);
	} /** button with transparent background */
	button.transparent > kol-span-wc > span,
	button.small.ghost.transparent > kol-span-wc > span,
	button.transparent > kol-span-wc {
		background-color: transparent;
		border-color: transparent;
	}`,"KOL-INPUT-TEXT":`kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.625em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: 100%;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
	}
	kol-button-wc button kol-span-wc {
		border: 1px solid var(--color-grey);
		display: grid;
		min-height: 44px;
		min-width: 44px;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-ocean);
		color: white;
	}`,"KOL-INPUT-PASSWORD":`kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.625em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: 100%;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
	}
	kol-button-wc button kol-span-wc {
		border: 1px solid var(--color-grey);
		display: grid;
		min-height: 44px;
		min-width: 44px;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-ocean);
		color: white;
	}`,"KOL-INPUT-NUMBER":`kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.625em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: 100%;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
	}
	kol-button-wc button kol-span-wc {
		border: 1px solid var(--color-grey);
		display: grid;
		min-height: 44px;
		min-width: 44px;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-ocean);
		color: white;
	}`,"KOL-INPUT-EMAIL":`kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.625em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: 100%;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
	}
	kol-button-wc button kol-span-wc {
		border: 1px solid var(--color-grey);
		display: grid;
		min-height: 44px;
		min-width: 44px;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-ocean);
		color: white;
	}`,"KOL-INPUT-FILE":`kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.625em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: 100%;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
	}
	kol-button-wc button kol-span-wc {
		border: 1px solid var(--color-grey);
		display: grid;
		min-height: 44px;
		min-width: 44px;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-ocean);
		color: white;
	}`,"KOL-TEXTAREA":`kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.625em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: 100%;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
	}
	kol-button-wc button kol-span-wc {
		border: 1px solid var(--color-grey);
		display: grid;
		min-height: 44px;
		min-width: 44px;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-ocean);
		color: white;
	}`,"KOL-ALERT":`:host .msg,
	:host .msg {
		border-width: 0;
	}
	:host > div {
		border-width: 2px;
		border-style: solid;
		border-radius: 5px;
		display: flex;
		width: 100%;
		overflow: unset;
		border-color: transparent;
		background-color: white;
	}
	:host > div > div.heading {
		display: flex;
		gap: 0.5em;
		place-items: center;
	}
	:host > div > div.heading > div {
		display: grid;
		gap: var(--kolibri-spacing);
	}
	:host > div.msg > div.heading > kol-icon {
		place-self: baseline;
	}
	:host > div > div.heading > div {
		display: grid;
		gap: var(--spacing);
	}
	:host > div > div.heading > kol-button-wc.close {
		place-self: center;
	}
	:host > div.msg {
		align-items: start;
	}
	:host > div.default {
		border-color: var(--color-grey);
	}
	:host > div.default.msg .heading-icon {
		color: var(--color-grey);
	}
	:host > div.error {
		border-color: var(--color-red);
	}
	:host > div.error.msg .heading-icon {
		color: var(--color-red);
	}
	:host > div.info {
		border-color: var(--color-midnight);
	}
	:host > div.info.msg .heading-icon {
		color: var(--color-midnight);
	}
	:host > div.success {
		border-color: var(--color-green);
	}
	:host > div.success.msg .heading-icon {
		color: var(--color-green);
	}
	:host > div.warning {
		border-color: var(--color-orange);
	}
	:host > div.warning.msg .heading-icon {
		color: var(--color-orange);
	}
	:host .heading-icon {
		align-items: center;
		color: white;
		display: inline-flex;
	}
	:host > div > div.heading .heading-icon {
		padding: 0;
	}
	:host > div.msg > .heading > .heading-icon {
		padding-top: 0;
		place-items: baseline;
	}
	:host > div.msg > .heading > .heading-icon::part(icon) {
		line-height: 1.375rem;
	}
	:host > div.msg.default .heading > div > kol-heading-wc {
		color: var(--color-grey);
	}
	:host > div.msg.error .heading > div > kol-heading-wc {
		color: var(--color-red);
	}
	:host > div.msg.info .heading > div > kol-heading-wc {
		color: var(--color-midnight);
	}
	:host > div.msg.success .heading > div > kol-heading-wc {
		color: var(--color-green);
	}
	:host > div.msg.warning .heading > div > kol-heading-wc {
		color: var(--color-orange);
	} /*:host > div.msg > .heading > div {display: grid;grid-template-columns: 1fr auto;}:host > div.msg > .heading > div > .content {grid-row: 2;grid-column: 1;}:host > div.msg > div > .close {display: flex;}*/
	:host > div.msg.default .close .icon {
		color: var(--color-grey);
	}
	:host > div.msg.error .close .icon {
		color: var(--color-red);
	}
	:host > div.msg.info .close .icon {
		color: var(--color-midnight);
	}
	:host > div.msg.success .close .icon {
		color: var(--color-green);
	}
	:host > div.msg.warning .close .icon {
		color: var(--color-orange);
	} /** CARD **/
	:host .card,
	:host .card {
		border: 3px solid #004b76;
		filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));
		flex-direction: column;
	}
	:host > div.card > .heading {
		grid-template-columns: 2.5em auto 44px;
		gap: 8px;
		min-height: 44px;
		padding: 0.5rem 1rem;
	}
	:host > div.card > .heading > div {
		width: 100%;
	}
	:host > div.card > .heading .heading-icon {
		justify-self: right;
	}
	:host > div.card > .heading kol-heading-wc {
		width: 100%;
		color: white;
		display: flex;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host > div.card > .heading kol-heading-wc > * {
		margin: auto 0;
	}
	:host > div.card > div.content {
		padding: 0.5rem 1rem;
	}
	:host > div.card.default > .heading {
		background-color: var(--color-grey);
	}
	:host > div.card.error > .heading {
		background-color: var(--color-red);
	}
	:host > div.card.info > .heading {
		background-color: var(--color-midnight);
	}
	:host > div.card.success > .heading {
		background-color: var(--color-green);
	}
	:host > div.card.warning > .heading {
		background-color: var(--color-orange);
	}
	:is(.error, .info, .success, .warning) .heading-icon::part(icon) {
		font-family: "Font Awesome 6 Free" !important;
		font-weight: 900;
	}
	:host > div.error .heading-icon::part(icon)::before {
		content: "\\f06a";
	}
	:host > div.info .heading-icon::part(icon)::before {
		content: "\\f05a";
	}
	:host > div.success .heading-icon::part(icon)::before {
		content: "\\f058";
	}
	:host > div.warning .heading-icon::part(icon)::before {
		content: "\\f071";
	}
	:host > div.card > div > .content {
		grid-row: 2;
		grid-column: 1 / span 2;
	}
	:host > div.card.default .close {
		background-color: var(--color-grey);
	}
	:host > div.card.error .close {
		background-color: var(--color-red);
	}
	:host > div.card.info .close {
		background-color: var(--color-midnight);
	}
	:host > div.card.success .close {
		background-color: var(--color-green);
	}
	:host > div.card.warning .close {
		background-color: var(--color-orange);
	}
	.close > button {
		min-width: 44px;
		color: var(--color-white);
		min-height: 44px;
		display: grid;
		gap: 0.25em;
		line-height: 1.5rem;
		font-family: var(--font-family);
		font-weight: 700;
		cursor: pointer;
		border-radius: 1.5em;
		border-style: solid;
		border-width: 2px;
		font-size: 1rem;
		align-items: center;
		padding: 8px 14px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		text-transform: uppercase;
		width: inherit;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
		background-color: rgba(0, 0, 0, 0);
		border-color: rgba(0, 0, 0, 0);
	}
	.close > button.icon-only {
		padding: 8px;
	}
	.close > button.icon-only kol-icon {
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
	}
	.close > button:active {
		box-shadow: none;
		outline: none;
	}`,"KOL-HEADING":`h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: inherit;
		font-style: normal;
		margin: 0;
		padding: 0;
	}
	h1,
	h2,
	h3 {
		font-weight: 700;
	}
	h1 {
		font-size: 1.5rem;
		line-height: 3.25rem;
	}
	h2 {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	h3 {
		font-size: 1.125rem;
		line-height: 1.5rem;
	}`,"KOL-BADGE":`:host {
		display: inline-block;
	}
	:host > span {
		border-radius: 0.3125rem;
		display: inline-flex;
		font-size: 0.875em;
		font-style: normal;
		font-weight: 700;
		line-height: 1rem;
	}
	:host > span.smart-button {
		align-items: center;
	}
	:host > span kol-button-wc:hover > button {
		background-color: var(--color-ocean);
		color: var(--color-white);
	}
	:host > span kol-button-wc > button {
		color: inherit;
		font-size: 1rem;
		border-top-right-radius: 0.3125rem;
		border-bottom-right-radius: 0.3125rem;
		padding: 2px;
	}
	:host > span kol-span-wc {
		padding: 0.25rem 0.5rem;
	}
	:host > span > kol-span-wc {
		align-items: center;
		font-style: normal;
		gap: 0.5rem;
	}
	:host > span > kol-span-wc > span {
		display: flex;
		gap: 0.25rem;
	}`,"KOL-BUTTON-GROUP":`:host > kol-button-group-wc {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}`,"KOL-INDENTED-TEXT":`:host > div {
		background-color: var(--color-white);
		border-left: none;
		box-shadow: -4px 0px 0px var(--color-ocean);
		padding: 0.25em 0.5em;
		width: 100%;
	}`,"KOL-LINK":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
		margin: 0;
		padding: 0;
	}
	kol-link-wc,
	kol-link-button-wc {
		display: inline-block;
	}
	a,
	button {
		color: var(--color-midnight);
		font-style: normal;
		font-weight: 400;
		display: inline-flex;
		line-height: 1.5em;
		text-decoration-line: underline;
		border-radius: 0.25rem;
	}
	a:hover,
	button:hover {
		text-decoration-thickness: 0.25em;
	}
	a:visited,
	button:visited {
		color: var(--visited);
	}
	kol-icon {
		padding: 0 0.25em;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`,"KOL-DETAILS":`details summary:focus-visible {
		border-radius: 4px;
	}
	details kol-indented-text {
		margin: 0.25em 0px 0px 0.6em;
	}`,"KOL-SPIN":`.spin {
		display: inline-block;
		height: 1rem;
		position: relative;
		width: 3rem;
	}
	.spin span {
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		border: 0.1rem solid rgb(255, 255, 255);
		border-radius: 50%;
		height: 0.8rem;
		width: 0.8rem;
		top: 0.1rem;
		position: absolute;
	}
	.spin span:nth-child(1) {
		background-color: #fc0;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin1;
		left: 0.1rem;
	}
	.spin span:nth-child(2) {
		background-color: #f00;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 0.1rem;
	}
	.spin span:nth-child(3) {
		background-color: #000;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 1.1rem;
	}
	.spin span:nth-child(4) {
		background-color: #666;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin3;
		left: 2.1rem;
	}
	@keyframes spin1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes spin2 {
		0% {
			transform: translate(0px, 0px);
		}
		100% {
			transform: translate(1rem, 0px);
		}
	}
	@keyframes spin3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}`,"KOL-PROGRESS":`:host progress,
	:host span {
		display: block;
		height: 0px;
		overflow: hidden;
		width: 0px;
	}
	:host svg line:first-child,
	:host svg circle:first-child {
		fill: transparent;
		stroke: var(--color-ice);
	}
	:host svg line:last-child,
	:host svg circle:last-child {
		fill: transparent;
		stroke: var(--color-midnight);
	}`,"KOL-SELECT":`kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 2.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.125em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: 100%;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
	}
	kol-button-wc button kol-span-wc {
		border: 1px solid var(--color-grey);
		display: grid;
		min-height: 44px;
		min-width: 44px;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-ocean);
		color: white;
	}`,"KOL-INPUT-COLOR":`kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.625em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: 100%;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
	}
	kol-button-wc button kol-span-wc {
		border: 1px solid var(--color-grey);
		display: grid;
		min-height: 44px;
		min-width: 44px;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-ocean);
		color: white;
	}`,"KOL-ACCORDION":`:host > div {
		font-family: var(--font-family);
		padding: 0 0.5rem 0 0;
	}
	:host > div > kol-heading-wc {
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host > div > kol-heading-wc button {
		cursor: pointer;
		width: 100%;
		margin: 0;
		display: flex;
		gap: 0.5em;
		border: 0;
		align-items: center;
		overflow: hidden;
		font-size: inherit;
		line-height: 1.75em;
		background-color: transparent;
		padding: 0;
	}
	:host > div > kol-heading-wc button kol-icon {
		text-align: center;
		width: 1em;
		margin-left: 0.5em;
	}
	:host > div[part*="open"] > kol-heading-wc button {
		padding-bottom: 0;
	}
	:host > div > kol-heading-wc button kol-icon::part(icon) {
		font-family: "Font Awesome 6 Free";
		font-weight: 900;
		color: var(--color-midnight);
	}
	:host > div.open > kol-heading-wc button kol-icon::part(icon)::before {
		content: "\\f077";
	}
	:host > div.close > kol-heading-wc button kol-icon::part(icon)::before {
		font-family: "Font Awesome 6 Free";
		content: "\\f078";
	}
	:host > div {
		width: 100%;
		height: 100%;
		display: grid;
	}
	:host > div div[part="header"],
	:host > div[part*="open"] div[part="content"] {
		margin: 0;
		padding-left: 2em;
	}
	button {
		font-weight: inherit;
		font-size: inherit;
		line-height: inherit;
	}
	:host > div {
		background: var(--color-white);
	}
	:host > div[part*="open"] {
		padding-bottom: 1em;
	}`,"KOL-TABLE":`:host * {
		hyphens: var(--kolibri-hyphens);
		font-family: var(--kolibri-font-family);
		line-height: var(--kolibri-line-height);
		word-break: break-word;
	}
	:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	caption {
		padding: 0.5em;
	}
	th {
		font-weight: normal;
		color: var(--color-midnight);
	}
	:host table thead tr:first-child th,
	:host table thead tr:first-child td {
		border-width: 0;
		border-top-width: 2px;
		border-style: solid;
		border-color: var(--color-ice);
	}
	table {
		width: 100%;
		border-spacing: 0;
	}
	table,
	:host table thead tr:last-child th,
	:host table thead tr:last-child td {
		border-width: 0;
		border-bottom-width: 2px;
		border-style: solid;
		border-color: var(--color-ice);
	}
	th {
		background-color: var(--color-white);
	}
	th div {
		width: 100%;
		display: flex;
		gap: 0.5em;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	th div.center {
		justify-content: center;
	}
	th div.right {
		justify-content: end;
	}
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	th,
	td {
		padding: 0.5em;
	}
	td.center > div {
		display: flex;
		justify-content: center;
	}
	td.right > div {
		display: flex;
		justify-content: end;
	}
	th[aria-sort="ascending"],
	th[aria-sort="descending"] {
		font-weight: 700;
	}
	:host > div:last-child {
		padding: 0.5em;
	}
	:host > div:last-child,
	:host > div:last-child > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 1em;
	}
	@media (min-width: 1024px) {
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			grid-auto-flow: column;
		}
		:host > div:last-child kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,"KOL-NAV":`* {
		margin: 0;
		padding: 0;
	}
	nav {
		font-family: var(--font-family);
		font-size: var(--font-size);
		background-color: var(--color-smoke);
	}
	ul {
		list-style: none;
	}
	a {
		background-color: var(--color-white);
		text-decoration: none;
		color: var(--color-midnight);
		width: 100%;
		display: flex;
		align-items: center;
		font-style: normal;
		padding: 0.75rem 0.5rem 0.75rem 0;
		border-left-color: var(--color-white);
		border-left-style: solid;
		border-left-width: 0.5rem;
		line-height: 1.5rem;
		min-height: 44px;
		min-width: 44px;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
		letter-spacing: 0.175px;
	}
	a:hover {
		border-left-color: var(--color-ocean);
		font-weight: 700;
		letter-spacing: unset;
	}
	.selected a,
	[exportparts*="selected"] a {
		background-color: var(--color-ice);
		border-left-color: var(--color-midnight);
		color: var(--color-midnight);
		font-weight: 700;
		letter-spacing: unset;
	}
	a:hover,
	.selected a:hover,
	[exportparts*="selected"] a:hover {
		background-color: var(--color-ocean);
		color: var(--color-white);
	}
	a.icon-only > kol-span-wc {
		justify-items: center;
	}
	a.icon-only > kol-span-wc kol-icon {
		display: inline-block;
		text-align: center;
		width: 44px;
		flex-shrink: 0;
	}
	kol-icon ~ span {
		padding-left: 0.5rem;
	}
	.hidden {
		display: none;
	}
	:host > div {
		width: 100%;
	}
	:host > div > div:last-child {
		margin-top: 0.5em;
		width: 100%;
		text-align: center;
	} /* horizontal */
	ul.flex {
		display: flex;
	}
	li > div > div.absolute {
		position: absolute;
	}
	.horizontal a {
		display: block;
	}
	:host kol-span-wc {
		margin: 0 0.25rem;
		justify-items: baseline;
	}`,"KOL-CARD":`/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */
	:host > div {
		display: grid;
		width: 100%;
		height: 100%;
		background-color: white;
		grid-template-rows: min-content 2fr min-content;
		box-shadow: 0 0 0.25rem var(--color-grey);
		border-radius: 0.25rem;
	}
	:host kol-heading-wc {
		display: inline-flex;
		font-style: normal;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host div.header {
		padding: 1rem 1rem 0.5rem 1rem;
	}
	:host div.content {
		padding: 0.5rem 1rem 1rem;
		overflow: hidden;
	}
	:host div.footer {
		padding: 0.5rem 1rem;
	}
	:host > div > div.content + div.footer {
		border-top: 2px solid var(--color-ice);
	}`,"KOL-INPUT-CHECKBOX":`/* INPUT */
	:host kol-input {
		display: grid;
		align-items: center;
		justify-items: left;
		width: 100%;
		min-height: 44px;
		gap: 0.4em;
	}
	:host kol-input.checkbox {
		grid-template-columns: 2rem auto;
	}
	:host kol-input.switch {
		grid-template-columns: 4rem auto;
	}
	:host kol-input > div.input {
		display: inherit;
		min-height: 44px;
		order: 2;
	}
	:host kol-input > div.input input {
		margin: 0px;
	}
	:host kol-input > label {
		cursor: pointer;
		order: 3;
	}
	:host kol-input > kol-alert.error {
		order: 1;
		padding-top: 0.25em;
		grid-column: span 2 / auto;
	}
	:host kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	:host kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	:host kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	:host input {
		cursor: pointer;
		order: 1;
		width: 100%;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 1rem;
	}
	:host input:hover {
		border-color: var(--color-midnight);
		box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
	}
	:host input:focus:hover {
		box-shadow: none;
	}
	:host input:active {
		box-shadow: none;
	}
	:host kol-alert {
		display: block;
		width: 100%;
	} /* CHECKBOX */
	:host kol-input label span {
		margin-top: 0.125rem;
	}
	:host .required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	:host kol-input input[type="checkbox"] {
		appearance: none;
		background-color: white;
		cursor: pointer;
		transition: 0.5s;
	}
	:host kol-input input[type="checkbox"].kol-disabled:before {
		cursor: not-allowed;
	}
	:host kol-input input[type="checkbox"]:before {
		content: "";
		cursor: pointer;
	}
	:host kol-input input[type="checkbox"]:checked {
		background-color: var(--color-midnight);
		border-color: var(--color-midnight);
	}
	:host kol-input.checkbox input[type="checkbox"] {
		border-radius: 0.25em;
		height: calc(6 * var(--spacing));
		min-width: calc(6 * var(--spacing));
		width: calc(6 * var(--spacing));
	}
	:host kol-input.checkbox input[type="checkbox"]:before {
		border-radius: 1.5em;
		background-color: transparent;
		display: block;
		height: calc(6 * var(--spacing));
		position: relative;
		width: calc(6 * var(--spacing));
	}
	:host kol-input.checkbox input[type="checkbox"]:checked:before {
		border-right-width: 3px;
		border-bottom-width: 3px;
		left: calc(1.5 * var(--spacing) - 2px);
		top: calc(2.85 * var(--spacing) - 2px);
		transform: rotate(40deg) translate(-50%, -50%);
		background-color: transparent;
		border-width: 0px 3px 3px 0px;
		border-color: white;
		border-radius: 1px;
		border-style: solid;
		height: calc(3 * var(--spacing));
		width: calc(1.5 * var(--spacing));
	}
	:host kol-input.checkbox input[type="checkbox"]:indeterminate {
		--tw-bg-opacity: 1; /* background-color: white; */
	}
	:host kol-input.checkbox input[type="checkbox"]:indeterminate:before {
		background-color: var(--color-white);
		height: 0.125rem;
		top: 0.6rem;
		left: 0.1rem;
		width: calc(4 * var(--spacing));
		transform: inherit;
	}
	:host kol-input.checkbox input[type="checkbox"]:checked:indeterminate:before {
		border-width: 0px 1px 1px 0px;
	}
	:host kol-input.switch input[type="checkbox"] {
		min-width: 3.5em;
		width: 3.5em;
		background-color: var(--color-grey);
		border-width: 0;
		height: 1.5em;
		border-radius: 1.25em;
		display: inline-block;
		position: relative;
	}
	:host kol-input.switch input[type="checkbox"]:before {
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-ms-transition: 0.5s;
		transition: 0.5;
		width: 1.25em;
		height: 1.25em;
		left: calc(0.25em - 2px);
		top: calc(0.25em - 2px);
		border-radius: 1.25em;
		background-color: white;
		position: absolute;
	}
	:host kol-input.switch input[type="checkbox"]:checked {
		background-color: var(--color-midnight);
	}
	:host kol-input.switch input[type="checkbox"]:checked:before {
		-webkit-transform: translateX(2em);
		-moz-transform: translateX(2em);
		-ms-transform: translateX(2em);
		transform: translateX(2em);
		--tw-bg-opacity: 1;
	}
	:host kol-input.switch input[type="checkbox"]:indeterminate {
		--tw-bg-opacity: 1;
	}
	:host kol-input.switch input[type="checkbox"]:indeterminate:before {
		-webkit-transform: translateX(1em);
		-moz-transform: translateX(1em);
		-ms-transform: translateX(1em);
		transform: translateX(1em);
	}
	:host .disabled {
		opacity: 0.33;
	}`,"KOL-INPUT-RADIO":`/* INPUT */
	kol-input {
		display: grid;
		gap: 0.4em;
	}
	label {
		cursor: pointer;
		display: grid;
		line-height: 20px;
		gap: 8px;
		width: 100%;
	}
	input {
		cursor: pointer;
		width: 100%;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 16px;
	}
	input:hover {
		border-color: var(--color-midnight);
		box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
	}
	input:focus:hover {
		box-shadow: none;
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	kol-alert {
		display: block;
		width: 100%;
	}
	.required legend > span::after {
		content: "*";
		padding-left: 0.125em;
	} /* RADIO */
	fieldset {
		border: 0px;
		margin: 0px;
		padding: 0px;
		display: grid;
		gap: 0.25em;
	}
	fieldset div {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		min-height: 44px;
		margin: 0;
	}
	fieldset div label {
		cursor: pointer;
		display: flex;
		padding-left: 0.25em;
		width: 100%;
	}
	fieldset div label span {
		margin-top: 0.125em;
	}
	fieldset div input[type="radio"] {
		appearance: none;
		transition: 0.5s;
		border-radius: 100%;
		height: calc(6 * var(--spacing));
		min-width: calc(6 * var(--spacing));
		width: calc(6 * var(--spacing));
	}
	fieldset div input[type="radio"]:before {
		content: "";
		cursor: pointer;
		left: calc(1.5 * var(--spacing) - 2px);
		top: calc(1.5 * var(--spacing) - 2px);
		position: relative;
		border-radius: 100%;
		display: block;
		height: calc(3 * var(--spacing));
		width: calc(3 * var(--spacing));
	}
	fieldset div input[type="radio"]:checked:before {
		background-color: var(--color-midnight);
	}
	fieldset div input[type="radio"]:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
		background-color: var(--background-light-grey);
	}
	fieldset #error {
		order: 1;
	}
	fieldset legend {
		order: 2;
		display: contents;
	}
	fieldset kol-input {
		order: 3;
	}
	fieldset.error {
		padding-left: 1em;
		border-left: 3px solid var(--color-red);
	}
	fieldset kol-alert#error {
		color: var(--color-red);
		font-weight: 700;
	}
	fieldset.error input:focus,
	fieldset.error select:focus,
	fieldset.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	fieldset.error kol-alert.error {
		margin-left: -0.25em;
		color: var(--color-red);
		font-weight: 700;
	}
	.disabled {
		opacity: 0.33;
	}
	fieldset.horizontal {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
	}
	fieldset.horizontal legend {
		display: inline-block;
		margin-bottom: 0.25em;
	}`,"KOL-TOAST":`:host > div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		z-index: 200;
	}
	:host > div > kol-alert {
		display: block;
		margin: auto;
		padding: 1rem;
		max-width: 750px;
	}
	:host > div > kol-button-wc {
		top: 0;
		position: relative;
		display: block;
		margin: auto;
		width: 1em;
	}`,"KOL-TABS":`button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	:host kol-button-group-wc {
		display: inline-flex;
		gap: 2rem;
		flex-wrap: wrap;
	}
	button {
		box-sizing: border-box;
		background-color: transparent;
		border: 0;
		border-radius: 0.25rem;
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		min-height: 44px;
		min-width: 44px;
		text-transform: uppercase;
		color: var(--color-grey);
		padding: 0;
	}
	button:hover {
		color: var(--color-midnight);
	}
	button.primary,
	button.selected {
		/* border-bottom: 0.025rem solid var(--color-midnight); */
		color: var(--color-midnight);
	}
	button kol-span-wc > span {
		border-bottom: 0.25em solid;
	}
	button kol-span-wc > span {
		gap: 0.5rem;
	}
	:host > div > div {
		padding: 0.25em 0;
	}
	.close-button {
		display: none;
		font-size: 25%;
		height: fit-content;
		width: 0;
	}
	.close-button button {
		width: 1rem;
		position: relative;
		height: 1rem;
		left: -4.25em;
		top: 0.25em;
	}
	div[role="tabpanel"] {
		height: 100%;
	}
	div.grid {
		height: 100%;
	}
	:host > .tabs-align-right {
		display: grid;
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-right kol-button-group-wc {
		display: grid;
		order: 2;
	}
	:host > .tabs-align-left {
		display: grid;
		grid-template-columns: auto 1fr;
	}
	:host > .tabs-align-left kol-button-group-wc {
		display: grid;
		order: 0;
	}
	:host > .tabs-align-bottom {
		display: grid;
		grid-template-rows: 1fr auto;
	}
	:host > .tabs-align-bottom kol-button-group-wc {
		order: 2;
	}
	:host > .tabs-align-bottom kol-button-group-wc > div {
		display: flex;
	}
	:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {
		margin: 0px 1em 0px 0px;
	}
	:host > .tabs-align-bottom > kol-button-group-wc > div > div {
		margin: 0px 1em;
	}
	:host > .tabs-align-top {
		display: grid;
		grid-template-rows: auto 1fr;
	}
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-top kol-button-group-wc > div {
		display: flex;
	}
	:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {
		margin: 0px 1em 0px 0px;
	}
	:host > .tabs-align-top > kol-button-group-wc > div > div {
		margin: 0px 1em;
	}
	:host > div {
		display: grid;
	}
	:host > div.tabs-align-left {
		grid-template-columns: auto 1fr;
	}
	:host > div.tabs-align-right {
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-bottom kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		order: 1;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		gap: inherit;
	}
	:host > div.tabs-align-left kol-button-group-wc > div,
	:host > div.tabs-align-left kol-button-group-wc > div > div,
	:host > div.tabs-align-right kol-button-group-wc > div,
	:host > div.tabs-align-right kol-button-group-wc > div > div {
		display: grid;
	}
	:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
	:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
		width: 100%;
	}
	:host > div.tabs-align-bottom kol-button-group-wc div,
	:host > div.tabs-align-top kol-button-group-wc div {
		display: flex;
		flex-wrap: wrap;
	}
	:host kol-button-group-wc button {
		border: none;
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: 1rem;
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5em;
	}
	:host .selected button {
		min-width: 44px;
		min-height: 44px;
		display: grid;
		line-height: 1.5rem;
		font-family: var(--font-family);
		cursor: not-allowed;
		font-weight: 700;
		padding: 10px 12px;
		border-radius: 1.5em;
		border: none;
		font-size: 16px;
		font-style: normal;
		text-align: center;
		text-transform: uppercase;
		width: inherit;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
		color: var(--color-midnight);
		background-color: var(--color-ice);
		border-color: var(--color-ice);
	}
	:host > div > span {
		align-self: flex-end;
		padding-bottom: 0.5rem;
		color: var(--color-midnight);
	}`,"KOL-INPUT-RANGE":`/* https://www.cssportal.com/style-input-range/ */
	kol-input {
		display: grid;
		gap: 0.4em;
	}
	kol-input label {
		order: 2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 3;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		order: 1;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grey);
		border-width: 2px;
		border-style: solid;
		padding: 0.625em 0.875em;
		border-radius: 0.3125rem;
		overflow: hidden;
		width: calc(100% - 4em);
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required #label::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.725em 0.875em;
		box-sizing: border-box;
		border-color: transparent;
		border-width: 2px;
		border-style: solid;
	}
	.icon-left input,
	.icon-left select {
		padding-left: calc(0.875em + 1em + 0.5em);
	}
	.icon-right input,
	.icon-right select {
		padding-right: calc(0.875em + 1em + 0.5em);
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -33px;
	}
	kol-button-wc button {
		border: 1px solid var(--color-grey);
		border-radius: 0.25rem;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	.icon-left input,
	.icon-left select {
		margin-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		margin-right: 2em;
	}
	input[type="range"] {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}
	input[type="range"] {
		overflow: visible;
		background-color: var(--color-ice);
		border: 0;
		height: 0.5rem;
		padding: 0;
		padding-bottom: 0;
		margin-bottom: 0;
	}
	input[type="range"]::-webkit-slider-thumb {
		box-sizing: border-box;
		background-color: var(--color-midnight);
		height: 20px;
		width: 20px;
		border-radius: 20px;
		cursor: pointer;
		-webkit-appearance: none;
	}`,"KOL-LINK-BUTTON":`a {
		display: inline-flex;
		gap: 0.25rem;
		align-items: center;
		justify-items: center;
	}
	a {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		border-radius: 1.5em;
		min-width: 44px;
		min-height: 44px;
		padding: 0;
		text-decoration: none !important;
	}
	a > kol-span-wc {
		display: grid;
		min-width: 44px;
		min-height: 44px;
		gap: 0.25em;
		line-height: 1.5rem;
		font-family: var(--font-family);
		font-weight: 700;
		cursor: pointer;
		border-radius: 1.5em;
		border-style: solid;
		border-width: 2px;
		font-size: 1rem;
		align-items: center;
		padding: 8px 14px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		text-transform: uppercase;
		width: inherit;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
	}
	a:disabled > kol-span-wc {
		cursor: not-allowed;
		opacity: 0.5;
	}
	.primary a > kol-span-wc,
	.primary a:disabled:hover > kol-span-wc {
		background-color: var(--color-midnight);
		border-color: var(--color-midnight);
		color: var(--color-white);
	}
	.secondary a > kol-span-wc,
	.secondary a:disabled:hover > kol-span-wc,
	.normal a > kol-span-wc,
	.normal a:disabled:hover > kol-span-wc {
		background-color: var(--color-white);
		border-color: var(--color-midnight);
		color: var(--color-midnight);
	}
	.danger a > kol-span-wc,
	.danger a:disabled:hover > kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
		color: var(--color-white);
	}
	.ghost a > kol-span-wc,
	.ghost a:disabled:hover > kol-span-wc {
		border-color: var(--color-white);
		background-color: var(--color-white);
		box-shadow: none;
		color: var(--color-midnight);
	} /*-----------*/
	.primary a:active > kol-span-wc,
	.primary a:hover > kol-span-wc,
	.secondary a:active > kol-span-wc,
	.secondary a:hover > kol-span-wc,
	.normal a:active > kol-span-wc,
	.normal a:hover > kol-span-wc,
	.danger a:active > kol-span-wc,
	.danger a:hover > kol-span-wc,
	.ghost a:active > kol-span-wc,
	.ghost a:hover > kol-span-wc {
		background-color: var(--color-ocean);
		border-color: var(--color-ocean);
		box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		color: var(--color-white);
	}
	.danger a:active > kol-span-wc,
	.danger a:hover > kol-span-wc {
		background-color: var(--color-crimson);
		border-color: var(--color-crimson);
	}
	a:disabled:hover > kol-span-wc,
	a:focus:hover > kol-span-wc {
		box-shadow: none;
	}
	.primary a:active > kol-span-wc,
	.secondary a:active > kol-span-wc,
	.normal a:active > kol-span-wc,
	.danger a:active > kol-span-wc,
	.ghost a:active > kol-span-wc {
		border-color: var(--color-white);
		box-shadow: none;
		outline: none;
	}
	:host a > kol-span-wc > span {
		display: flex;
		gap: 0.5em;
		margin: auto;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.75px;
	}
	a.icon-only > kol-span-wc {
		padding: 8px;
	}
	a.icon-only > kol-span-wc > span > span {
		display: none;
	}
	a.icon-only > kol-span-wc kol-icon {
		width: 1.5em;
		height: 1.5em;
	}
	a.loading > kol-span-wc kol-icon {
		animation: spin 5s infinite linear;
	} /** small ghost a */
	.ghost.small a > kol-span-wc {
		border: none;
		background-color: transparent;
		box-shadow: none;
	}
	.ghost.small a > kol-span-wc > span {
		border-radius: 1.5em;
		border-style: solid;
		border-width: 2px;
		border-color: var(--color-white);
		background-color: var(--color-white);
	}
	.ghost.small a:active > kol-span-wc > span,
	.ghost.small a:hover > kol-span-wc > span,
	.ghost.small.transparent a:active > kol-span-wc > span,
	.ghost.small.transparent a:hover > kol-span-wc > span {
		background-color: var(--color-ocean);
		border-color: var(--color-ocean);
		box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		color: var(--color-white);
	} /** a with transparent background */
	.transparent a > kol-span-wc > span,
	.ghost.small.transparent a > kol-span-wc > span,
	.transparent a > kol-span-wc {
		background-color: transparent;
		border-color: transparent;
	}
	.loading a > kol-span-wc kol-icon {
		animation: spin 5s infinite linear;
	}`,"KOL-BUTTON-LINK":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
		margin: 0;
		padding: 0;
	}
	kol-link-wc,
	kol-link-button-wc {
		display: inline-block;
	}
	a,
	button {
		color: var(--color-midnight);
		font-style: normal;
		font-weight: 400;
		display: inline-flex;
		line-height: 1.5em;
		text-decoration-line: underline;
		border-radius: 0.25rem;
	}
	a:hover,
	button:hover {
		text-decoration-thickness: 0.25em;
	}
	a:visited,
	button:visited {
		color: var(--visited);
	}
	kol-icon {
		padding: 0 0.25em;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`,"KOL-ABBR":`abbr {
		border-bottom: dotted var(--color-metal) 1px;
		text-decoration: none !important;
	}`}),eT=$o.createTheme("bpa",{GLOBAL:`:host {
		--font-family-sans: BundesSans Web, Arial, Helvetica, sans-serif;
		--font-family-serif: BundesSerif Web, var(--kolibri-font-family-sans);
		--font-family: var(--kolibri-font-family-sans), Helvetica, sans-serif;
		--font-weight: 400;
		--font-weight-bold: bold;
		--color-white: white;
		--color-black: #111314;
		--color-blue: #0077b6;
		--color-darkblue: #004b76;
		--color-darkgray: #576164;
		--color-lightgray: #bec5c9;
		--color-lightgray-40: #e5e8e9;
		--color-red: #c0003c;
		--color-lightorange: #f7bb3d;
		--color-orange: #e19688;
		--color-green: #00854a;
		--color-cyan: #00818b;
		--color-violet-40: #bfadbc;
		--color-violet-20: #dfd6de;
	}
	@keyframes blinker {
		50% {
			opacity: 0.25;
		}
	}
	:host {
		font-family: var(--font-family-sans);
		color: var(--color-black);
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: var(--font-weight-bold);
		line-height: var(--line-height-heading);
		margin: 0;
		padding: 0;
	}
	a,
	button {
		font-size: var(--font-size);
		outline: none;
	}
	p {
		font-size: 1.5rem;
	}
	kol-span-wc,
	kol-span-wc > span {
		gap: 0.5em;
	}
	kol-tooltip #arrow {
		display: none;
	}
	kol-tooltip .area {
		background-color: var(--color-lightgray-40);
	}
	kol-tooltip kol-span-wc {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 2px;
		border: 1px solid var(--color-lightgray);
		margin: 0.25rem;
	}
	@media only screen and (min-width: 600px) {
		kol-tooltip kol-span-wc {
			font-size: 1rem;
			line-height: 1.375rem;
		}
	}`,"KOL-HEADING":`/* https://styleguide.bundesregierung.de/sg-de/medien/digitale-medien/webanwendungen/komponenten/atome/heading */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--font-family-heading);
	}
	h1 {
		margin-bottom: 1.5rem;
		font-size: 2rem;
		font-weight: 400;
		line-height: 2.5rem;
	}
	@media (min-width: 64rem) {
		h1 {
			font-size: 2.875rem;
			line-height: 3.125rem;
		}
	}
	@media (min-width: 85.375rem) {
		h1 {
			font-size: 3.5rem;
			line-height: 4.5rem;
		}
	}
	h2 {
		margin-bottom: 1.5rem;
		font-size: 1.75rem;
		font-weight: 400;
		line-height: 2rem;
		color: var(--color-blue);
	}
	@media (min-width: 64rem) {
		h2 {
			font-size: 2.5rem;
			line-height: 3rem;
		}
	}
	@media (min-width: 85.375rem) {
		h2 {
			font-size: 2.875rem;
			line-height: 3.125rem;
		}
	}
	h3 {
		margin-bottom: 1.5rem;
		font-size: 1.625rem;
		font-weight: 400;
		line-height: 2rem;
	}
	@media (min-width: 64rem) {
		h3 {
			font-size: 1.75rem;
			line-height: 2.25rem;
		}
	}
	@media (min-width: 85.375rem) {
		h3 {
			font-size: 2rem;
			line-height: 2.625rem;
		}
	}
	h4 {
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.75rem;
	}
	@media (min-width: 64rem) {
		h4 {
			font-size: 1.625rem;
			line-height: 1.875rem;
		}
	}
	@media (min-width: 85.375rem) {
		h4 {
			font-size: 1.75rem;
			line-height: 2.25rem;
		}
	}
	h5 {
		margin-bottom: 1.5rem;
		font-size: 1.1875rem;
		font-weight: 700;
		line-height: 1.75rem;
	}
	@media (min-width: 64rem) {
		h5 {
			font-size: 1.375rem;
			line-height: 1.875rem;
		}
	}
	@media (min-width: 85.375rem) {
		h5 {
			font-size: 1.5rem;
			line-height: 2.125rem;
		}
	}
	h6 {
		color: #f0f;
		animation: blinker 0.25s linear infinite;
	}`,"KOL-BADGE":`:host > span {
		border-radius: 2px;
	}
	:host > span > kol-span-wc {
		font-family: var(--font-family-heading);
		padding: 0.25rem 0.5rem;
	}
	:host > span > kol-span-wc > span {
		gap: 0.5rem;
	}`,"KOL-BUTTON":`button > kol-span-wc {
		padding: 0.625rem 1.125rem;
		font-family: var(--font);
		font-size: 1rem;
		line-height: 1.125rem;
		border: 1px solid var(--color-darkgray);
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
	button.ghost > kol-span-wc {
		border: none;
	}
	button > kol-span-wc > span {
		gap: 0.625rem;
	}
	button > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	button > kol-span-wc kol-icon {
		color: var(--color-blue);
	}
	button:not(:disabled):is(:hover, :focus) > kol-span-wc kol-icon {
		color: var(--color-white);
	}
	button:not(:disabled):is(:hover, :focus) > kol-span-wc {
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	button:focus > kol-span-wc {
		outline: 1px dotted var(--color-black);
		border: none;
	}
	button:focus {
		outline: none;
	}`,"KOL-ALERT":`:host .success {
		color: var(--color-green);
	}
	:host .warning {
		color: var(--color-orange);
	}
	:host .error {
		color: var(--color-red);
	}
	:host .info {
		color: var(--color-cyan);
	}
	:host > div {
		border: none;
		background-color: var(--color-white);
	}
	@media only screen and (min-width: 600px) {
		:host > div {
			font-size: 1.125rem;
		}
	}
	.heading .heading-icon {
		height: 100%;
		width: 2em;
	}
	.success .heading-icon {
		color: var(--color-green);
	}
	.warning .heading-icon {
		color: var(--color-orange);
	}
	.error .heading-icon {
		color: var(--color-red);
	}
	.info .heading-icon {
		color: var(--color-cyan);
	}
	.default .heading-icon {
		color: var(--color-black);
	}
	.close {
		align-self: start;
	}
	.card.success {
		border: 1px solid var(--color-green);
	}
	.card.warning {
		border: 1px solid var(--color-orange);
	}
	.card.error {
		border: 1px solid var(--color-red);
	}
	.card.info {
		border: 1px solid var(--color-cyan);
	}
	.card.default {
		border: 1px solid var(--color-black);
	}
	.card .heading {
		padding: 0.5rem;
	}
	.card .content {
		padding: 0.5rem;
	}`,"KOL-INDENTED-TEXT":`:host > div {
		border-left: none;
		box-shadow: -4px 0px 0px var(--color-blue);
		padding: 0.25em 0.5em;
		width: 100%;
	}`,"KOL-CARD":`:host {
		color: var(--color-white);
		background-color: var(--color-darkblue);
		padding: 4.5454545455%;
	}
	:host .headline {
		font-size: 1.375rem;
		line-height: 1.5rem;
		margin: 1rem 0;
	}
	@media only screen and (min-width: 600px) and (max-width: 1023px) {
		:host .headline {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
	}
	@media only screen and (min-width: 1024px) {
		:host .headline {
			font-size: 2rem;
			line-height: 2.25rem;
		}
	}
	:host .content {
		font-size: 1.1875rem;
		line-height: 1.6875rem;
	}
	@media only screen and (min-width: 600px) and (max-width: 1023px) {
		:host .content {
			font-size: 1.375rem;
			line-height: 2rem;
		}
	}
	@media only screen and (min-width: 1024px) {
		:host.content {
			font-size: 1.5rem;
			line-height: 2.125rem;
		}
	}
	:host .footer {
		margin: 1rem 0;
	}
	:is(h1, h2, h3, h4, h5, h6) {
		font-weight: 400;
	}`,"KOL-INPUT-CHECKBOX":`kol-input {
		gap: 0.1rem 0.75rem;
		font-size: 1.375rem;
	}
	input[type="checkbox"]:focus {
		outline: var(--color-black) dotted 1px;
		outline-offset: 0.15rem;
	}
	.hint {
		font-size: 1.125rem;
	}
	.checkbox input[type="checkbox"] {
		border-width: 1px;
		padding: 0.125rem;
		width: 1.375rem;
		height: 1.375rem;
	}
	.checkbox input[type="checkbox"]:checked {
		color: var(--color-white);
		background-color: var(--color-blue);
		border-color: var(--color-blue);
		padding: 0;
	}
	.checkbox input[type="checkbox"]:checked:before {
		left: 0.35rem;
		top: 45%;
		height: 0.6rem;
		width: 0.25rem;
		transform: rotate(45deg) translate(-50%, -50%);
		border-width: 0px 2px 2px 0px;
	}
	.checkbox input[type="checkbox"]:indeterminate:before {
		background-color: var(--color-blue);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	kol-input > kol-alert {
		order: 3;
	}
	.switch input[type="checkbox"] {
		border-width: 1px;
	}
	.switch input[type="checkbox"]:before {
		background-color: var(--color-blue);
		height: 1.3em;
		width: 1.3em;
	}
	kol-input.button {
		font-family: var(----font-family);
		font-size: 1rem;
		line-height: 1.125rem;
		padding: 0.625rem 1.125rem;
		border: 1px solid var(--color-darkgray);
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
		gap: 0.625rem;
	}
	kol-input.button {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	kol-input.button kol-icon {
		color: var(--color-blue);
	}
	kol-input.button:is(:hover, :focus) kol-icon {
		color: var(--color-white);
	}
	kol-input.button:is(:hover, :focus) {
		cursor: pointer;
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	kol-input.button:is(:hover, :focus) {
		outline: 1px dotted var(--color-black);
		border: 1px solid var(--color-blue);
	}`,"KOL-ICON":"/* https: //styleguide.bundesregierung.de/sg-de/medien/digitale-medien/webanwendungen/komponenten/atome/icon */","KOL-ABBR":`:host abbr {
		text-decoration: none;
		border-bottom: 1px dotted currentColor;
	}`,"KOL-LINK-BUTTON":`.button a kol-span-wc {
		font-family: var(----font-family);
		font-size: 1rem;
		line-height: 1.125rem;
		padding: 0.625rem 1.125rem;
		border: 1px solid var(--color-darkgray);
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
	.icon-only > kol-span-wc {
		padding: 0.625rem;
	}
	.button.ghost a kol-span-wc {
		border: none;
	}
	.button a kol-span-wc > span {
		gap: 0.625rem;
	}
	.button a kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	.button a kol-span-wc kol-icon {
		color: var(--color-blue);
	}
	a:is(:hover, :focus) kol-span-wc kol-icon {
		color: var(--color-white);
	}
	a:is(:hover, :focus) kol-span-wc {
		cursor: pointer;
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	a:is(:hover, :focus) kol-span-wc {
		outline: 1px dotted var(--color-black);
		border: 1px solid var(--color-blue);
	}
	a:is(:hover, :focus) {
		outline: none;
	}`,"KOL-INPUT-TEXT":`:host label {
		color: var(--color-darkblue);
		font-size: 0.9375rem;
	}
	@media (min-width: 37.5rem) {
		:host label {
			font-size: 1.125rem;
		}
	} /* Move label over input as placeholder */
	:host label {
		transition: all 0.3s ease-in-out 0ms;
		transform-origin: 0;
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label {
		transform: translateY(1.9375rem) scale(1.3333333333);
		cursor: text;
	}
	:host(:not(.has-value)) kol-input:not(:focus-within):has(div.icon-left) label {
		transform: translateX(2.5rem) translateY(1.9375rem) scale(1.3333333333);
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label,
	input::placeholder {
		color: var(--color-darkgray);
	}
	:host([_error]:not(.has-value)) kol-input:not(:focus-within) label {
		color: var(--color-red);
	} /* Move hint under input */
	span.hint {
		order: 1;
	}
	span.hint::before {
		font-family: codicon;
		font-size: 1rem;
		content: "\\ea74";
	}
	kol-alert {
		order: 2;
	}
	:host([_error]) label {
		color: var(--color-red);
	}
	div.input {
		border-bottom: 1px solid var(--color-lightgray);
	}
	div.input:focus-within {
		border-bottom: 1px solid var(--color-darkgray);
	}
	div.input input {
		border: none;
		background-color: var(--color-white);
		outline: none;
		height: 2.5rem;
		font-size: 1.5rem;
		padding: 0;
	}
	kol-input:has(label:not([hidden])) div.input input::placeholder {
		color: transparent;
	}
	kol-alert {
		margin-top: 1.5rem;
	}
	kol-button-wc > button > kol-span-wc {
		padding: 0.625rem 1.125rem;
		font-family: var(--font);
		font-size: 1rem;
		line-height: 1.125rem;
		border: none;
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
	kol-button-wc > button > kol-span-wc > span {
		gap: 0.625rem;
	}
	kol-button-wc > button > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	kol-button-wc > button > kol-span-wc kol-icon {
		color: var(--color-blue);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc kol-icon {
		color: var(--color-white);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc {
		cursor: pointer;
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	kol-button-wc > button:focus > kol-span-wc {
		outline: 1px dotted var(--color-black);
		border: none;
	}
	kol-button-wc > button:focus {
		outline: none;
	}`,"KOL-INPUT-EMAIL":`:host label {
		color: var(--color-darkblue);
		font-size: 0.9375rem;
	}
	@media (min-width: 37.5rem) {
		:host label {
			font-size: 1.125rem;
		}
	} /* Move label over input as placeholder */
	:host label {
		transition: all 0.3s ease-in-out 0ms;
		transform-origin: 0;
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label {
		transform: translateY(1.9375rem) scale(1.3333333333);
		cursor: text;
	}
	:host(:not(.has-value)) kol-input:not(:focus-within):has(div.icon-left) label {
		transform: translateX(2.5rem) translateY(1.9375rem) scale(1.3333333333);
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label,
	input::placeholder {
		color: var(--color-darkgray);
	}
	:host([_error]) kol-input:not(:focus-within) label {
		color: var(--color-red);
	} /* Move hint under input */
	span.hint {
		order: 1;
	}
	kol-alert {
		order: 2;
	}
	:host([_error]) label {
		color: var(--color-red);
	}
	div.input {
		border-bottom: 1px solid var(--color-lightgray);
	}
	div.input:focus-within {
		border-bottom: 1px solid var(--color-darkgray);
	}
	div.input input {
		border: none;
		background-color: var(--color-white);
		outline: none;
		height: 2.5rem;
		font-size: 1.5rem;
		padding: 0;
	}
	kol-input:has(label:not([hidden])) div.input input::placeholder {
		color: transparent;
	}
	kol-alert {
		margin-top: 1.5rem;
	}
	kol-button-wc > button > kol-span-wc {
		padding: 0.625rem 1.125rem;
		font-family: var(--font);
		font-size: 1rem;
		line-height: 1.125rem;
		border: none;
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
	kol-button-wc > button > kol-span-wc > span {
		gap: 0.625rem;
	}
	kol-button-wc > button > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	kol-button-wc > button > kol-span-wc kol-icon {
		color: var(--color-blue);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc kol-icon {
		color: var(--color-white);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc {
		cursor: pointer;
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	kol-button-wc > button:focus > kol-span-wc {
		outline: 1px dotted var(--color-black);
		border: none;
	}
	kol-button-wc > button:focus {
		outline: none;
	}`,"KOL-INPUT-NUMBER":`:host label {
		color: var(--color-darkblue);
		font-size: 0.9375rem;
	}
	@media (min-width: 37.5rem) {
		:host label {
			font-size: 1.125rem;
		}
	} /* Move label over input as placeholder */
	:host(:not(.has-value)) kol-input:has(input[type="number"]) label {
		transition: all 0.3s ease-in-out 0ms;
		transform-origin: 0;
	}
	:host(:not(.has-value)) kol-input:has(input[type="number"]):not(:focus-within) label {
		transform: translateY(1.9375rem) scale(1.3333333333);
		cursor: text;
	}
	:host(:not(.has-value)) kol-input:has(input[type="number"]):not(:focus-within):has(div.icon-left) label {
		transform: translateX(2.5rem) translateY(1.9375rem) scale(1.3333333333);
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label,
	input::placeholder {
		color: var(--color-darkgray);
	}
	:host([_error]) kol-input:not(:focus-within) label {
		color: var(--color-red);
	}
	span.hint {
		order: 1;
	}
	kol-alert {
		order: 2;
	}
	:host([_error]) label {
		color: var(--color-red);
	}
	div.input {
		border-bottom: 1px solid var(--color-lightgray);
	}
	div.input:focus-within {
		border-bottom: 1px solid var(--color-darkgray);
	}
	div.input input {
		border: none;
		background-color: var(--color-white);
		outline: none;
		height: 2.5rem;
		font-size: 1.5rem;
		padding: 0;
	}
	kol-input:has(label:not([hidden])) div.input input::placeholder {
		color: transparent;
	}
	kol-alert {
		margin-top: 1.5rem;
	}
	kol-button-wc > button > kol-span-wc {
		padding: 0.625rem 1.125rem;
		font-family: var(--font);
		font-size: 1rem;
		line-height: 1.125rem;
		border: none;
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
	kol-button-wc > button > kol-span-wc > span {
		gap: 0.625rem;
	}
	kol-button-wc > button > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	kol-button-wc > button > kol-span-wc kol-icon {
		color: var(--color-blue);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc kol-icon {
		color: var(--color-white);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc {
		cursor: pointer;
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	kol-button-wc > button:focus > kol-span-wc {
		outline: 1px dotted var(--color-black);
		border: none;
	}
	kol-button-wc > button:focus {
		outline: none;
	}`,"KOL-INPUT-COLOR":`:host label {
		color: var(--color-darkblue);
		font-size: 0.9375rem;
	}
	@media (min-width: 37.5rem) {
		:host label {
			font-size: 1.125rem;
		}
	} /* Move hint under input */
	span.hint {
		order: 1;
	}
	kol-alert {
		order: 2;
	}
	:host([_error]) label {
		color: var(--color-red);
	}
	div.input {
		border-bottom: 1px solid var(--color-lightgray);
	}
	div.input:focus-within {
		border-bottom: 1px solid var(--color-darkgray);
	}
	div.input input {
		border: none;
		background-color: var(--color-white);
		outline: none;
		height: 2.5rem;
		font-size: 1.5rem;
		padding: 0;
	}
	kol-input:has(label:not([hidden])) div.input input::placeholder {
		color: transparent;
	}
	kol-alert {
		margin-top: 1.5rem;
	}
	kol-button-wc > button > kol-span-wc {
		padding: 0.625rem 1.125rem;
		font-family: var(--font);
		font-size: 1rem;
		line-height: 1.125rem;
		border: none;
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
	kol-button-wc > button > kol-span-wc > span {
		gap: 0.625rem;
	}
	kol-button-wc > button > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	kol-button-wc > button > kol-span-wc kol-icon {
		color: var(--color-blue);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc kol-icon {
		color: var(--color-white);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc {
		cursor: pointer;
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	kol-button-wc > button:focus > kol-span-wc {
		outline: 1px dotted var(--color-black);
		border: none;
	}
	kol-button-wc > button:focus {
		outline: none;
	}`,"KOL-INPUT-FILE":`:host label {
		color: var(--color-darkblue);
		font-size: 0.9375rem;
	}
	@media (min-width: 37.5rem) {
		:host label {
			font-size: 1.125rem;
		}
	} /* Move hint under input */
	span.hint {
		order: 1;
	}
	kol-alert {
		order: 2;
	}
	:host([_error]) label {
		color: var(--color-red);
	}
	div.input {
		align-items: baseline;
		border-bottom: 1px solid var(--color-lightgray);
	}
	div.input:focus-within {
		border-bottom: 1px solid var(--color-darkgray);
	}
	div.input input {
		border: none;
		background-color: var(--color-white);
		outline: none;
		height: 3.2rem;
		font-size: 1.5rem;
		padding: 0;
	}
	kol-input:has(label:not([hidden])) div.input input::placeholder {
		color: transparent;
	}
	kol-alert {
		margin-top: 1.5rem;
	}
	kol-button-wc > button > kol-span-wc {
		padding: 0.625rem 1.125rem;
		font-family: var(--font);
		font-size: 1rem;
		line-height: 1.125rem;
		border: none;
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
	kol-button-wc > button > kol-span-wc > span {
		gap: 0.625rem;
	}
	kol-button-wc > button > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	kol-button-wc > button > kol-span-wc kol-icon {
		color: var(--color-blue);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc kol-icon {
		color: var(--color-white);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc {
		cursor: pointer;
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	kol-button-wc > button:focus > kol-span-wc {
		outline: 1px dotted var(--color-black);
		border: none;
	}
	kol-button-wc > button:focus {
		outline: none;
	}`,"KOL-INPUT-PASSWORD":`:host label {
		color: var(--color-darkblue);
		font-size: 0.9375rem;
	}
	@media (min-width: 37.5rem) {
		:host label {
			font-size: 1.125rem;
		}
	} /* Move label over input as placeholder */
	:host label {
		transition: all 0.3s ease-in-out 0ms;
		transform-origin: 0;
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label {
		transform: translateY(1.9375rem) scale(1.3333333333);
		cursor: text;
	}
	:host(:not(.has-value)) kol-input:not(:focus-within):has(div.icon-left) label {
		transform: translateX(2.5rem) translateY(1.9375rem) scale(1.3333333333);
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label,
	input::placeholder {
		color: var(--color-darkgray);
	}
	:host([_error]) kol-input:not(:focus-within) label {
		color: var(--color-red);
	} /* Move hint under input */
	span.hint {
		order: 1;
	}
	kol-alert {
		order: 2;
	}
	:host([_error]) label {
		color: var(--color-red);
	}
	div.input {
		align-items: baseline;
		border-bottom: 1px solid var(--color-lightgray);
	}
	div.input:focus-within {
		border-bottom: 1px solid var(--color-darkgray);
	}
	div.input input {
		border: none;
		background-color: var(--color-white);
		outline: none;
		height: 2.5rem;
		font-size: 1.5rem;
		padding: 0;
	}
	kol-input:has(label:not([hidden])) div.input input::placeholder {
		color: transparent;
	}
	kol-alert {
		margin-top: 1.5rem;
	}
	kol-button-wc > button > kol-span-wc {
		padding: 0.625rem 1.125rem;
		font-family: var(--font);
		font-size: 1rem;
		line-height: 1.125rem;
		border: none;
		border-radius: 0.125rem;
		transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
	kol-button-wc > button > kol-span-wc > span {
		gap: 0.625rem;
	}
	kol-button-wc > button > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-black);
	}
	kol-button-wc > button > kol-span-wc kol-icon {
		color: var(--color-blue);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc kol-icon {
		color: var(--color-white);
	}
	kol-button-wc > button:is(:hover, :focus) > kol-span-wc {
		cursor: pointer;
		background-color: var(--color-blue);
		color: var(--color-white);
	}
	kol-button-wc > button:focus > kol-span-wc {
		outline: 1px dotted var(--color-black);
		border: none;
	}
	kol-button-wc > button:focus {
		outline: none;
	}`,"KOL-TEXTAREA":`:host label {
		color: var(--color-darkblue);
		font-size: 0.9375rem;
		line-height: 0.9375rem;
	}
	@media (min-width: 37.5rem) {
		:host label {
			font-size: 1.125rem;
			line-height: 1.125rem;
		}
	} /* Move label over input as placeholder */
	:host label {
		transition: all 0.3s ease-in-out 0ms;
		transform-origin: 0;
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label {
		transform: translateY(1.9375rem) scale(1.3333333333);
		cursor: text;
	}
	:host(:not(.has-value)) kol-input:not(:focus-within):has(div.icon-left) label {
		transform: translateX(2.5rem) translateY(1.9375rem) scale(1.3333333333);
	}
	:host(:not(.has-value)) kol-input:not(:focus-within) label,
	textarea::placeholder {
		color: var(--color-darkgray);
	}
	:host([_error]:not(.has-value)) kol-input:not(:focus-within) label {
		color: var(--color-red);
	} /* Move hint under input */
	span.hint {
		order: 1;
	}
	kol-alert {
		order: 2;
	}
	:host([_error]) label {
		color: var(--color-red);
	}
	div.input textarea:focus {
		border-bottom: 1px solid var(--color-darkgray);
	}
	div.input textarea {
		border: none;
		border-bottom: 1px solid var(--color-lightgray);
		background-color: var(--color-white);
		outline: none;
		height: 2.5rem;
		font-size: 1.5rem;
		padding: 0;
	}
	kol-input:has(label:not([hidden])) div.input textarea::placeholder {
		color: transparent;
	}
	kol-alert {
		margin-top: 1.5rem;
	}`,"KOL-INPUT-RANGE":`input[type="range"] {
		height: 3em;
		background-color: transparent;
		outline: none;
	}
	input[type="range"]::-webkit-slider-thumb {
		border: none;
		margin-top: -0.5em;
		height: 1.5em;
		width: 1.5em;
		border-radius: 100%;
		background: var(--color-darkblue);
		cursor: pointer;
	}
	input[type="range"]::-moz-range-thumb {
		border: 1px solid var(--color-darkblue);
		height: 2em;
		width: 1em;
		border-radius: 3px;
		background: var(--color-blue);
		cursor: pointer;
		box-shadow: 1px 1px 1px var(--color-black), 0px 0px 1px var(--color-darkgray);
	}
	input[type="range"]::-webkit-slider-runnable-track {
		width: 100%;
		height: 0.5em;
		cursor: pointer;
		background: var(--color-lightgray);
		border-radius: 0.25em;
		border: none;
	}
	input[type="range"]:focus::-webkit-slider-runnable-track {
		outline: var(--color-black) dotted 1px;
		outline-offset: 0.25em;
	}
	input[type="range"]::-moz-range-track {
		width: 100%;
		height: 0.5em;
		cursor: pointer;
		background: var(--color-lightgray);
		border-radius: 0.25em;
		border: none;
	}`,"KOL-PROGRESS":`:host progress,
	:host span {
		display: block;
		height: 0px;
		overflow: hidden;
		width: 0px;
	}
	svg line:first-child,
	svg circle:first-child {
		fill: transparent;
		stroke: var(--color-lightgray);
	}
	svg line:last-child,
	svg circle:last-child {
		stroke: var(--color-darkblue);
		fill: transparent;
	}
	progress {
		display: none;
	}`,"KOL-INPUT-RADIO":`:host {
		font-size: 1.375rem;
		line-height: 2rem;
	}
	input {
		border: 1px solid var(--color-blue);
	}
	input:focus {
		border: 1px dashed var(--color-blue);
		outline: none;
	}
	.disabled {
		opacity: 0.5;
	}
	.disabled label,
	.disabled input {
		cursor: not-allowed;
	}
	input:checked::before {
		background-color: var(--color-blue);
	}
	fieldset {
		border: none;
	}
	fieldset.vertical {
		gap: 0.5rem;
	}
	fieldset.horizontal {
		gap: 2.5rem;
	}
	div[slot="input"] {
		gap: 0.5rem;
	}`,"KOL-LINK":`a {
		margin-bottom: 0;
		font-weight: 700;
		vertical-align: top;
		text-decoration: none;
		color: var(--color-blue);
		gap: 0.25rem;
	}
	a:focus,
	a:hover {
		color: var(--color-darkblue);
	}
	a:focus {
		outline: var(--color-darkblue) solid 1px;
		outline-offset: 2px;
		border-radius: 2px;
	}
	a:visited {
		text-decoration: underline;
	}
	kol-icon {
		color: var(--color-blue);
	}
	kol-icon:hover {
		color: var(--color-darkblue);
	}
	kol-span-wc > span {
		gap: 0.25rem;
	}`,"KOL-BUTTON-LINK":`button {
		margin-bottom: 0;
		font-weight: 700;
		vertical-align: top;
		text-decoration: none;
		color: var(--color-blue);
	}
	button:focus,
	button:hover {
		color: var(--color-darkblue);
	}
	button:focus {
		outline: var(--color-darkblue) solid 1px;
		outline-offset: 2px;
		border-radius: 2px;
	}
	kol-icon {
		color: var(--color-blue);
	}
	kol-icon:hover {
		color: var(--color-darkblue);
	}
	kol-span-wc > span {
		gap: 0.25rem;
	}`,"KOL-SELECT":`:host label {
		color: var(--color-darkblue);
		font-size: 0.9375rem;
	}
	@media (min-width: 37.5rem) {
		:host label {
			font-size: 1.125rem;
		}
	}
	span.hint {
		order: 1;
	}
	kol-alert {
		order: 2;
	}
	:host([_error]) label {
		color: var(--color-red);
	}
	div.input {
		border-bottom: 1px solid var(--color-lightgray);
	}
	div.input:focus-within {
		border-bottom: 1px solid var(--color-darkgray);
	}
	div.input select {
		border: none;
		background-color: var(--color-white);
		outline: none;
		font-size: 1.5rem;
		padding: 0;
	}
	div.input select:not([multiple]) {
		height: 2.5rem;
	}
	kol-alert {
		margin-top: 1.5rem;
	}`,"KOL-ACCORDION":`.headline button {
		font-size: 1.1875rem;
		line-height: 1.6875rem;
	}
	@media only screen and (min-width: 600px) and (max-width: 1023px) {
		.headline button {
			font-size: 1.375rem;
			line-height: 2rem;
		}
	}
	@media only screen and (min-width: 1024px) {
		.headline button {
			font-size: 1.5rem;
			line-height: 2.125rem;
		}
	}
	.headline {
		margin: 0;
		padding: 0;
	}
	.headline button {
		padding: 1rem 1rem 1rem 3.125rem;
	}
	.headline button:is(:focus, :hover) {
		text-decoration: underline;
	}
	.headline kol-span-wc {
		display: block;
	}
	.headline kol-span-wc > span {
		align-items: flex-start;
	}
	.headline kol-span-wc > span > kol-icon {
		display: block;
		order: 2;
	}
	.headline kol-span-wc > span > span {
		flex-grow: 1;
		order: 1;
		text-align: start;
	}
	:host {
		border-top: 1px solid var(--color-violet-40);
	}
	.content {
		padding: 3.125rem;
		background-color: var(--color-violet-20);
	}
	button {
		outline: none;
	}
	:host > div > kol-heading-wc button kol-icon {
		font-size: 1rem;
	}
	:host > div > kol-heading-wc button kol-icon::part(icon) {
		font-family: "Font Awesome 6 Free";
		font-weight: 900;
	}
	:host > div.open > kol-heading-wc button kol-icon::part(icon)::before {
		content: "\\f077";
	}
	:host > div.close > kol-heading-wc button kol-icon::part(icon)::before {
		content: "\\f078";
	}`,"KOL-TABLE":`:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	caption {
		padding: 0.5em;
	}
	:host th {
		font-weight: normal;
		background-color: var(--color-darkblue);
		color: var(--color-white);
	}
	:host table thead tr:first-child th,
	:host table thead tr:first-child td {
		border-width: 0;
		border-top-width: 2px;
		border-style: solid;
		border-color: var(--color-darkgray);
	}
	table {
		width: 100%;
		border-spacing: 0;
	}
	table,
	:host table thead tr:last-child th,
	:host table thead tr:last-child td {
		border-width: 0;
		border-bottom-width: 2px;
		border-style: solid;
		border-color: var(--color-darkgray);
	}
	th {
		background-color: var(--color-white);
	}
	th div {
		width: 100%;
		display: flex;
		gap: 0.5em;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	th div.center {
		justify-content: center;
	}
	th div.right {
		justify-content: end;
	}
	tbody tr:nth-child(odd) {
		background-color: var(--color-lightgray-40);
	}
	th,
	td {
		padding: 0.5em;
	}
	td.center > div {
		display: flex;
		justify-content: center;
	}
	td.right > div {
		display: flex;
		justify-content: end;
	}
	th[aria-sort="ascending"],
	th[aria-sort="descending"] {
		font-weight: 700;
	}
	:host > div:last-child {
		padding: 0.5em;
	}
	:host > div:last-child,
	:host > div:last-child > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 1em;
	}
	@media (min-width: 1024px) {
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			grid-auto-flow: column;
		}
		:host > div:last-child kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,"KOL-TABS":`:host {
		--kolibri-spacing: 0.25rem;
	}
	kol-button-group-wc {
		border-bottom: 1px solid var(--color-lightgray);
		margin-bottom: -1px;
	}
	kol-button-group-wc button {
		border: none;
		margin-bottom: -1px;
	}
	kol-button-group-wc button kol-span-wc {
		padding: 0.5rem;
		min-height: 44px;
		min-width: 44px;
	}
	kol-button-group-wc button.selected kol-span-wc {
		border-color: var(--color-lightgray-40);
		border-style: solid;
		border-width: 1px;
		border-bottom-color: white;
		border-top-color: var(--color-blue);
		box-shadow: 0 -3px var(--color-blue);
		font-weight: var(--font-weight-bold);
		color: var(--color-blue);
	}
	kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
		color: var(--color-darkblue);
	}
	kol-button-group-wc button:focus kol-span-wc {
		outline-color: var(--color-darkblue);
		outline-style: solid;
		outline-width: 2px;
	}`,"KOL-BUTTON-GROUP":`kol-button-group-wc {
		gap: 0.5rem;
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: var(--spacing-m);
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.25rem;
	}
	.selected button {
		min-width: 44px;
		min-height: 44px;
		display: grid;
		line-height: 1.5rem;
		font-family: var(--font-family);
		cursor: not-allowed;
		font-weight: 700;
		padding: 10px 12px;
		border: none;
		font-size: 16px;
		font-style: normal;
		text-align: center;
		text-decoration: underline;
		text-transform: uppercase;
		width: inherit;
		color: var(--color-white);
		background-color: var(--color-darkblue);
		border-color: var(--color-darkblue);
	}`});$o.createTheme("bzst",{GLOBAL:`/* colors */
:root,
:host {
  /* token */
  --color-bleached-silk: #f2f2f2;
  --color-carbon: #333;
  --color-chilled-lemonade: #ffe695;
  --color-green: #4d7f6f;
  --color-green-light: #a7c0b8;
  --color-green-dark: #23614e;
  --color-heroic-blue: #126dff;
  --color-mercury: #ebebeb;
  --color-red-epiphyllum: #d00000;
  --color-speedwell: #595f73;
  --color-tropic-sea: #007194;
  --color-white: #fff; /* template */ /* general */
  --colorDark: var(--color-carbon);
  --colorLight: var(--color-white); /* primary color */
  --colorPrimary: var(--color-green-dark);
  --colorPrimaryFront: var(--color-white);
  --colorPrimarySuccess: var(--color-green);
  --colorPrimarySuccessFront: var(--color-white);
  --colorPrimaryActive: var(--color-green-light);
  --colorPrimaryActiveFront: var(--color-carbon); /* secondary color */
  --colorSecondary: var(--color-white);
  --colorSecondaryFront: var(--color-carbon);
  --colorSecondarySuccess: var(--color-bleached-silk);
  --colorSecondarySuccessFront: var(--color-carbon);
  --colorSecondaryActive: var(--color-mercury);
  --colorSecondaryActiveFront: var(--color-carbon); /* text */
  --colorText: var(--color-carbon);
  --colorTextBg: var(--color-white);
  --colorTextLight: var(--color-white);
  --colorTextLightBg: var(--color-carbon);
  --colorTextDisabled: var(--color-speedwell);
  --colorTextDisabledBg: var(--color-mercury);
  --colorTextActive: var(--color-green-dark);
  --colorTextActiveBg: var(--color-white); /* signal */
  --colorSignal: var(--color-tropic-sea);
  --colorSignalFront: var(
    --color-white
  ); /* colorSignalFocus hat keine Frontfarbe */
  --colorSignalFocus: var(--color-heroic-blue);
  --colorSignalSuccess: var(--color-green);
  --colorSignalSuccessFront: var(--color-white);
  --colorSignalWarn: var(--color-chilled-lemonade);
  --colorSignalWarnFront: var(--color-carbon);
  --colorSignalError: var(--color-red-epiphyllum);
  --colorSignalErrorFront: var(--color-white); /* disabled */
  --colorDisabled: var(--color-mercury);
} /* font, headline, text */
:root,
:host {
  /* token */
  --font-family: "BundesSans Web", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif; /* Basis-Größe: html, rem */
  --font-size: 100%;
  --line-height: 1.6875rem; /* template */ /* h1 */
  --headline1FontSize: 2.5rem;
  --headline1LineHeight: 2.8125rem; /* h2 */
  --headline2FontSize: 2rem;
  --headline2LineHeight: 2.5rem; /* h3 */
  --headline3FontSize: 1.3125rem;
  --headline3LineHeight: 1.6875rem; /* h4 */
  --headline4FontSize: 1rem;
  --headline4LineHeight: 1.6875rem; /* text */
  --textFont: var(--font-family);
  --textFontColor: var(--colorText);
  --textFontSerif: "BundesSerif Web", var(--textFont);
  --textFontSize: 1rem;
  --textFontLineHeight: 1.6875rem;
  --textFontWeight: normal;
} /* Abstände */
:root,
:host {
  /* template */
  --gap: 2rem;
  --gapDouble: calc(var(--gap) * 2);
  --gapSmall: 1.25rem; /* TODO: benötigt nur außerhalb KoliBri Komponenten? */
  --gapSmallest: 0.625rem;
  --gapLarge: 2.5rem;
} /* formular */
:root,
:host {
  /* template */
  --formBorderWidthAndStyle: 1px solid;
  --formBorderColor: var(
    --color-green
  ); /* TODO: eigentlich --color-green sein, aber im Styleguide ist der Wert: #23614E */
  --formBorder: var(--formBorderWidthAndStyle) var(--color-green);
  --formBorderHover: var(--formBorderWidthAndStyle) var(--color-green-light);
  --formBorderDisabled: var(--formBorderWidthAndStyle) var(--color-mercury);
  --formBorderInvalid: var(--formBorderWidthAndStyle)
    var(--color-red-epiphyllum);
  --focusOutline: var(--colorSignalFocus) solid 2px;
  --formFieldBackground: var(--color-white); /*Select option */
  --formFieldBackgroundHover: var(--color-green-dark); /* Select options */
  --formFieldBackgroundEven: var(--formFieldBackground); /* Select options */
  --formFieldBackgroundOdd: var(--color-mercury);
  --formFieldBackgroundDisabled: var(--color-bleached-silk);
  --formFieldTextColorDisabled: var(--colorTextDisabled);
} /* ********************************* */ /* ********************************* */ /* ********************************* */ /* ********************************* */
:host {
  /* Primärfarbe und Abstufungen */
  --color-gruen-dunkel: var(--colorPrimary);
  --color-gruen: var(--colorPrimarySuccess);
  --color-gruen-hell: var(--colorPrimaryActive); /* Sekundärfarben */
  --color-weiss: var(--colorSecondary);
  --color-grau-dunkel: var(--colorSecondaryFront);
  --color-grau-hell: var(--colorSecondaryActive);
  --color-grau-weiss: var(--colorSecondarySuccess); /* Textfarben */
  --color-graublau: var(--colorTextDisabled); /* Signalfarben */
  --color-blau: var(--colorSignalFocus);
  --color-blau-dunkel: var(--colorSignal);
  --color-gelb: var(--colorSignalWarn);
  --color-rot: var(--colorSignalError);
  --color-disabled: var(--colorTextDisabled);
  --text-size: var(--textFontSize);
  --color-focus: var(--color-blau);
  --spacing: 4px;
  --color-text: var(--color-grau-dunkel);
}
:host {
  color: var(--color-black);
  font-family: var(--font-family);
}
:host * {
  box-sizing: border-box;
}
:host h1,
:host h2 {
  font-family: var(--textFontSerif);
  font-weight: var(--textFontWeight);
}
:host h1 {
  font-size: var(--headline1FontSize);
  line-height: var(--headline1LineHeight);
}
:host h2 {
  font-size: var(--headline2FontSize);
  line-height: var(--headline2LineHeight);
}
:host h3 {
  font-size: var(--headline3FontSize);
  line-height: var(--headline3LineHeight);
}
:host h4,
:host h5,
:host h6 {
  font-size: var(--headline4FontSize);
  line-height: var(--headline4LineHeight);
}
a,
button,
input,
option,
select,
summary,
textarea {
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  letter-spacing: inherit;
  display: block;
} /* a,button,caption,input,option,select,summary,table,textarea {font-size: 1rem;} */
a:focus,
button:focus,
input:focus,
select:focus,
summary:focus,
textarea:focus {
  cursor: pointer;
  outline-color: var(--color-focus);
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 0;
  transition: outline-offset 0.2s linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,"KOL-BUTTON":`:host {
  --background-color: var(--color-gruen-dunkel);
  --border-color: var(--color-gruen-dunkel);
  --border-size: 1px;
  --min-size: 2.75rem;
  display: inline-block;
}
button {
  border-width: var(--border-size);
  border-style: solid;
  min-width: var(--min-size);
  min-height: var(--min-size);
  display: grid;
  gap: 0.25em;
  line-height: 1.5;
  font-family: var(--font-family);
  cursor: pointer;
  font-size: var(--text-size);
  align-items: center;
  padding: 0.5rem 0.875rem !important;
  justify-content: center;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  width: inherit;
  transition-duration: 0.5s;
  transition-property: background-color, color, border-color;
}
button:hover:enabled {
  text-decoration: underline;
}
button:focus {
  outline: var(--color-focus) solid 2px;
}
button.primary,
button.primary:active,
button.primary:hover {
  background-color: var(--background-color);
  border-color: var(--border-color);
  color: var(--color-weiss);
}
button.secondary,
button.danger,
button.normal,
button.ghost {
  background-color: var(--color-weiss);
  border-color: var(--color-gruen-hell);
  color: var(--color-grau-dunkel);
}
button.ghost {
  background-color: transparent;
  color: inherit;
  border: calc(var(--border-size) * 2) solid transparent;
}
button.secondary:active,
button.secondary:hover {
  background-color: var(--background-color);
  border-color: var(--background-color);
  border-width: var(--border-size);
  color: var(--color-weiss);
}
button:disabled,
button:disabled:hover {
  background-color: var(--color-weiss);
  border-color: var(--color-grau-hell);
  color: var(--color-disabled);
  cursor: not-allowed;
}
button > span {
  display: flex;
  gap: 0.5em;
  margin: auto;
  align-items: center;
  justify-content: center;
}
button.icon-only {
  padding: 0.5rem;
}
button.icon-only kol-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
}
button.loading kol-icon {
  animation: spin 5s infinite linear;
}`,"KOL-INPUT-TEXT":`kol-input {
  display: grid;
  padding: 0;
  margin: 0;
  font-size: var(--text-size);
}
input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  border-color: var(--color-gruen-hell);
}
.error input:invalid,
.error select:invalid,
.error textarea:invalid {
  border-color: var(--color-rot);
}
input:focus-within,
select:focus-within,
textarea:focus-within {
  outline: var(--color-focus) solid 2px;
}
kol-input > label {
  order: 1;
  margin-bottom: var(--gapSmallest);
}
kol-input > label > span {
  color: var(--color-text);
  line-height: 1.5;
}
kol-input > div.input {
  background-color: white;
  display: block;
  order: 2;
}
kol-input > kol-alert.error {
  margin-top: 0.25rem;
  order: 3;
}
input,
select,
textarea {
  font-family: var(--font-family);
  background-color: transparent;
  box-sizing: border-box;
  font-size: var(--text-size);
  display: inline-flex;
  line-height: 1.5;
  color: black;
  border-color: var(--color-gruen);
  border-width: 1px;
  border-style: solid;
  padding: 0.5em 0.75em;
  overflow: hidden;
  width: 100%;
}
input:not([type="range"]),
select:not([multiple]) {
  height: 2.75em;
}
textarea {
  display: inherit;
}
input::placeholder {
  color: var(--color-grau-dunkel);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.75em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1000;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grau-dunkel);
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
select[multiple],
textarea {
  overflow: auto;
}
textarea {
  display: block;
}
select option {
  margin: 1px 0;
  padding: 0.5em;
  cursor: pointer;
}
select option:disabled {
  cursor: not-allowed;
}
option:active:not(:disabled),
option:checked:not(:disabled),
option:focus:not(:disabled),
option:hover:not(:disabled) {
  color: white;
}`,"KOL-INPUT-PASSWORD":`kol-input {
  display: grid;
  padding: 0;
  margin: 0;
}
input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  border-color: black;
}
kol-input > label {
  order: 1;
  margin-bottom: 0.25em;
}
kol-input > label > span {
  color: black;
  font-size: 0.875rem;
  line-height: 1.5rem;
}
kol-input > div.input {
  background-color: white;
  display: block;
  order: 2;
}
kol-input > kol-alert.error {
  margin-top: 0.25em;
  order: 3;
}
input,
select,
textarea {
  font-family: var(--font-family);
  background-color: transparent;
  box-sizing: border-box;
  font-size: 1rem;
  display: inline-flex;
  line-height: 1.5em;
  color: black;
  border-color: var(--color-grau-dunkel);
  border-width: 1px;
  border-style: solid;
  padding: 0.5em 0.75em;
  overflow: hidden;
  width: 100%;
}
input:not([type="range"]),
select:not([multiple]) {
  height: 2.75em;
}
textarea {
  display: inherit;
}
input::placeholder {
  color: var(--color-grau-dunkel);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.75em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1000;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grau-dunkel);
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
select[multiple],
textarea {
  overflow: auto;
}
textarea {
  display: block;
}
select option {
  margin: 1px 0;
  padding: 0.5em;
  cursor: pointer;
}
select option:disabled {
  cursor: not-allowed;
}
option:active:not(:disabled),
option:checked:not(:disabled),
option:focus:not(:disabled),
option:hover:not(:disabled) {
  color: white;
}`,"KOL-INPUT-NUMBER":`kol-input {
  display: grid;
  padding: 0;
  margin: 0;
}
input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  border-color: black;
}
input:focus-within,
select:focus-within,
textarea:focus-within {
  outline: var(--color-focus) solid 2px;
}
kol-input > label {
  order: 1;
  margin-bottom: var(--gapSmallest);
}
kol-input > label > span {
  color: black;
  font-size: 0.875rem;
  line-height: 1.5rem;
}
kol-input > div.input {
  background-color: white;
  display: block;
  order: 2;
}
kol-input > kol-alert.error {
  margin-top: 0.25em;
  order: 3;
}
input,
select,
textarea {
  font-family: var(--textFont);
  background-color: transparent;
  box-sizing: border-box;
  font-size: var(--textFontSize);
  display: inline-flex;
  line-height: 1.5;
  color: black;
  border-color: var(--color-gruen);
  border-width: 1px;
  border-style: solid;
  padding: 0.5em;
  overflow: hidden;
  width: 100%;
}
input:not([type="range"]),
select:not([multiple]) {
  height: 2.75em;
}
textarea {
  display: inherit;
}
input::placeholder {
  color: var(--color-grau-dunkel);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.75em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grau-dunkel);
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
select[multiple],
textarea {
  overflow: auto;
}
textarea {
  display: block;
}
select option {
  margin: 1px 0;
  padding: 0.5em;
  cursor: pointer;
}
select option:disabled {
  cursor: not-allowed;
}
option:active:not(:disabled),
option:checked:not(:disabled),
option:focus:not(:disabled),
option:hover:not(:disabled) {
  background: var(--color-ocean);
  color: white;
}`,"KOL-INPUT-EMAIL":`kol-input {
  display: grid;
  padding: 0;
  margin: 0;
}
input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  border-color: black;
}
kol-input > label {
  order: 1;
  margin-bottom: 0.25em;
}
kol-input > label > span {
  color: black;
  font-size: 0.875rem;
  line-height: 1.5rem;
}
kol-input > div.input {
  background-color: white;
  display: block;
  order: 2;
}
kol-input > kol-alert.error {
  margin-top: 0.25em;
  order: 3;
}
input,
select,
textarea {
  font-family: var(--font-family);
  background-color: transparent;
  box-sizing: border-box;
  font-size: 1rem;
  display: inline-flex;
  line-height: 1.5em;
  color: black;
  border-color: var(--color-grau-dunkel);
  border-width: 1px;
  border-style: solid;
  padding: 0.5em 0.75em;
  overflow: hidden;
  width: 100%;
}
input:not([type="range"]),
select:not([multiple]) {
  height: 2.75em;
}
textarea {
  display: inherit;
}
input::placeholder {
  color: var(--color-grau-dunkel);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.75em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1000;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grau-dunkel);
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
select[multiple],
textarea {
  overflow: auto;
}
textarea {
  display: block;
}
select option {
  margin: 1px 0;
  padding: 0.5em;
  cursor: pointer;
}
select option:disabled {
  cursor: not-allowed;
}
option:active:not(:disabled),
option:checked:not(:disabled),
option:focus:not(:disabled),
option:hover:not(:disabled) {
  color: white;
}`,"KOL-INPUT-FILE":`kol-input {
  display: grid;
  padding: 0;
  margin: 0;
}
input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  border-color: black;
}
kol-input > label {
  order: 1;
  margin-bottom: 0.25em;
}
kol-input > label > span {
  color: black;
  font-size: 0.875rem;
  line-height: 1.5rem;
}
kol-input > div.input {
  background-color: white;
  display: block;
  order: 2;
}
kol-input > kol-alert.error {
  margin-top: 0.25em;
  order: 3;
}
input,
select,
textarea {
  font-family: var(--font-family);
  background-color: transparent;
  box-sizing: border-box;
  font-size: 1rem;
  display: inline-flex;
  line-height: 1.5em;
  color: black;
  border-color: var(--color-grau-dunkel);
  border-width: 1px;
  border-style: solid;
  padding: 0.5em 0.75em;
  overflow: hidden;
  width: 100%;
}
input:not([type="range"]),
select:not([multiple]) {
  height: 2.75em;
}
textarea {
  display: inherit;
}
input::placeholder {
  color: var(--color-grau-dunkel);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.75em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1000;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grau-dunkel);
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
select[multiple],
textarea {
  overflow: auto;
}
textarea {
  display: block;
}
select option {
  margin: 1px 0;
  padding: 0.5em;
  cursor: pointer;
}
select option:disabled {
  cursor: not-allowed;
}
option:active:not(:disabled),
option:checked:not(:disabled),
option:focus:not(:disabled),
option:hover:not(:disabled) {
  color: white;
}`,"KOL-TEXTAREA":`/* input */
kol-input {
  display: grid;
  padding: 0;
  margin: 0;
  font-size: var(--text-size);
}
input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  border-color: var(--color-gruen-hell);
}
.error input:invalid,
.error select:invalid,
.error textarea:invalid {
  border-color: var(--color-rot);
}
input:focus-within,
select:focus-within,
textarea:focus-within {
  outline: var(--color-focus) solid 2px;
}
kol-input > label {
  order: 1;
  margin-bottom: var(--gapSmallest);
}
kol-input > label > span {
  color: var(--color-text);
  line-height: 1.5;
}
kol-input > div.input {
  background-color: white;
  display: block;
  order: 2;
}
kol-input > kol-alert.error {
  margin-top: 0.25rem;
  order: 3;
}
input,
select,
textarea {
  font-family: var(--font-family);
  background-color: transparent;
  box-sizing: border-box;
  font-size: var(--text-size);
  display: inline-flex;
  line-height: 1.5;
  color: black;
  border-color: var(--color-gruen);
  border-width: 1px;
  border-style: solid;
  padding: 0.5em 0.75em;
  overflow: hidden;
  width: 100%;
}
input:not([type="range"]),
select:not([multiple]) {
  height: 2.75em;
}
textarea {
  display: inherit;
}
input::placeholder {
  color: var(--color-grau-dunkel);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.75em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grau-dunkel);
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
select[multiple],
textarea {
  overflow: auto;
}
textarea {
  display: block;
}
select option {
  margin: 1px 0;
  padding: 0.5em;
  cursor: pointer;
}
select option:disabled {
  cursor: not-allowed;
}
option:active:not(:disabled),
option:checked:not(:disabled),
option:focus:not(:disabled),
option:hover:not(:disabled) {
  color: white;
}`,"KOL-ALERT":`:host > div {
  background-color: white;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.25rem;
  display: flex;
  overflow: unset;
}
:host > div.default {
  border-color: var(--color-grau-dunkel);
}
:host > div.default > .icon {
  background-color: var(--color-grau-dunkel);
}
:host > div.error {
  border-color: var(--color-rot);
}
:host > div.error > .icon {
  background-color: var(--color-rot);
}
:host > div.info {
  border-color: var(--color-blau);
}
:host > div.info > .icon {
  background-color: var(--color-blau);
}
:host > div.success {
  border-color: var(--color-gruen);
}
:host > div.success > .icon {
  background-color: var(--color-gruen);
}
:host > div.warning {
  border-color: var(--color-gelb);
}
:host > div.warning > .icon {
  background-color: var(--color-gelb);
}
:host > div.msg > .icon {
  color: white;
  padding: 0.5em;
  align-items: center;
  display: inline-flex;
}
:host > div.msg.warning > .icon {
  color: black;
}
:host > div.card.default .heading .icon {
  background-color: var(--color-grau-dunkel);
}
:host > div.card.error .heading .icon {
  background-color: var(--color-rot);
}
:host > div.card.info .heading .icon {
  background-color: var(--color-blau);
}
:host > div.card.success .heading .icon {
  background-color: var(--color-gruen);
}
:host > div.card.warning .heading .icon {
  background-color: var(--color-gelb);
}
:host > div.card .heading .icon {
  color: white;
  padding: 0.5em;
  align-items: center;
  display: inline-flex;
}
:host > div.card.warning .heading .icon {
  color: black;
}
:host > div kol-heading-wc .icon {
  margin-right: 0.5em;
}
:host > div.card .heading .icon {
  border-radius: 0 0 0.25rem 0;
}
:host > div.msg > div {
  padding: 0.25em;
}
:host > div.msg > div > .heading {
  padding: 0.25em;
  display: inline-block;
}
:host > div .content {
  padding: 0.25em;
}
:host > div > div {
  display: grid;
  grid-template-columns: 1fr auto;
}
:host > div > div > .content {
  grid-row: 2;
  grid-column: 1;
}
:host > div > div > .close {
  grid-row: 1 / span 2;
  display: flex;
}
:host > div.msg > div > .close > * {
  margin: auto;
}
:host > div.msg.default .close .icon {
  color: var(--color-grau-dunkel);
}
:host > div.msg.error .close .icon {
  color: var(--color-rot);
}
:host > div.msg.info .close .icon {
  color: var(--color-blau);
}
:host > div.msg.success .close .icon {
  color: var(--color-gruen);
}
:host > div.msg.warning .close .icon {
  color: var(--color-gelb);
}
:host > div.card > div > .heading {
  width: 100%;
}
.close > button {
  min-width: 44px;
  min-height: 44px;
  display: grid;
  gap: 0.25em;
  line-height: 1.5rem;
  font-family: var(--font-family);
  font-weight: 700;
  cursor: pointer;
  border-radius: 1.5em;
  border-style: solid;
  border-width: 2px;
  font-size: 1rem;
  align-items: center;
  padding: 8px 14px;
  justify-content: center;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  width: inherit;
  transition-duration: 0.5s;
  transition-property: background-color, color, border-color;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}
.close > button.icon-only {
  padding: 8px;
}
.close > button.icon-only kol-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
}
.close > button:active {
  box-shadow: none;
  outline: none;
}
.close kol-icon::part(icon)::before {
  content: "\\f00d";
}`,"KOL-BADGE":`:host {
  display: inline-block;
}
kol-span-wc {
  align-items: center;
  border-radius: 0.3125rem;
  display: grid;
  gap: 0.5rem;
  line-height: 1.25rem;
  padding: 0.25rem 0.75rem;
}
kol-span-wc span {
  display: flex;
  gap: 0.25rem;
}`,"KOL-BUTTON-GROUP":`div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}`,"KOL-INDENTED-TEXT":`:host > div {
  width: 100%;
  padding: 15px;
  background: var(--color-grau-weiss);
  box-shadow: -4px 0px 0px var(--color-gruen);
}`,"KOL-LINK":`kol-link-wc {
  display: inline-block;
}
a {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: var(--external-link-color, var(--color-gruen));
  display: inline-flex;
  padding: var(--external-link-padding, 0);
  text-decoration-line: none !important; /* outline: none !important; */
}
a:focus-within {
  outline: var(--color-focus) solid 2px;
}
a:hover {
  box-shadow: inset 0 -1px 0 0 var(--external-link-color, var(--color-gruen));
}
kol-icon {
  padding: 0 0.25rem;
  display: inline-block;
}
.hidden {
  display: none;
  visibility: hidden;
}
.skip {
  left: -99999px;
  overflow: hidden;
  position: absolute;
  z-index: 9999999;
  line-height: 1em;
}
.skip:focus {
  background: white;
  left: unset;
  position: unset;
}`,"KOL-DETAILS":`details {
  display: grid;
  width: 100%;
}
summary {
  cursor: pointer;
  display: flow-root;
  margin: 0;
  padding: 0;
}
summary span {
  margin-left: 0.25rem;
  text-decoration: underline;
}
summary span:hover {
  text-decoration-thickness: 0.25em;
}
details > kol-indented-text {
  margin: 0.25em 0 0 0.6em;
}`,"KOL-SPIN":`.spin {
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 3rem;
}
.spin span {
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  border: 0.1rem solid rgb(255, 255, 255);
  border-radius: 50%;
  height: 0.8rem;
  width: 0.8rem;
  top: 0.1rem;
  position: absolute;
}
.spin span:nth-child(1) {
  background-color: #fc0;
  z-index: 0;
  animation: 2s ease 0s infinite normal none running spin1;
  left: 0.1rem;
}
.spin span:nth-child(2) {
  background-color: #f00;
  z-index: 1;
  animation: 2s ease 0s infinite normal none running spin2;
  left: 0.1rem;
}
.spin span:nth-child(3) {
  background-color: #000;
  z-index: 1;
  animation: 2s ease 0s infinite normal none running spin2;
  left: 1.1rem;
}
.spin span:nth-child(4) {
  background-color: #666;
  z-index: 0;
  animation: 2s ease 0s infinite normal none running spin3;
  left: 2.1rem;
}
@keyframes spin1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes spin2 {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(1rem, 0px);
  }
}
@keyframes spin3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}`,"KOL-PROGRESS":`:host progress,
:host span {
  display: block;
  height: 0px;
  overflow: hidden;
  width: 0px;
}
svg line:first-child,
svg circle:first-child {
  fill: transparent;
  stroke: var(--color-ice);
}
svg line:last-child,
svg circle:last-child {
  stroke: var(--color-midnight);
  fill: transparent;
}
progress {
  display: none;
}`,"KOL-SELECT":`kol-input {
  display: grid;
  padding: 0;
  margin: 0;
  font-size: var(--textFontSize);
}
input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  border-color: var(--color-gruen-hell);
}
.error input:invalid,
.error select:invalid,
.error textarea:invalid {
  border-color: var(--color-rot);
}
input:focus-within,
select:focus-within,
textarea:focus-within {
  outline: var(--color-focus) solid 2px;
}
kol-input > label {
  order: 1;
  margin-bottom: var(--gapSmallest);
}
kol-input > label > span {
  color: var(--color-text);
  line-height: 1.5;
}
kol-input > div.input {
  background-color: white;
  display: block;
  order: 2;
}
kol-input > kol-alert.error {
  margin-top: 0.25rem;
  order: 3;
}
input,
select,
textarea {
  font-family: var(--textFont);
  background-color: transparent;
  box-sizing: border-box;
  font-size: var(--textFontSize);
  display: inline-flex;
  line-height: 1.5;
  color: black;
  border-color: var(--color-gruen);
  border-width: 1px;
  border-style: solid;
  padding: 0.5em 0.75em;
  overflow: hidden;
  width: 100%;
}
select {
  padding-top: 0.6115em;
  padding-bottom: 0.6115em;
}
input:not([type="range"])/* ,select:not([multiple]) */ {
  height: 2.75em;
}
textarea {
  display: inherit;
}
input::placeholder {
  color: var(--color-grau-dunkel);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.6em;
}
.icons > *:last-child:not(:first-child) {
  margin-right: 1em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grau-dunkel);
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
select[multiple],
textarea {
  overflow: auto;
}
textarea {
  display: block;
}
select option {
  margin: 1px 0;
  padding: 0.5em;
  cursor: pointer;
}
select option:disabled {
  cursor: not-allowed;
}
option:active:not(:disabled),
option:checked:not(:disabled),
option:focus:not(:disabled),
option:hover:not(:disabled) {
  color: white;
}`,"KOL-INPUT-COLOR":`kol-input {
  display: grid;
  padding: 0;
  margin: 0;
}
input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  border-color: black;
}
kol-input > label {
  order: 1;
  margin-bottom: 0.25em;
}
kol-input > label > span {
  color: black;
  font-size: 0.875rem;
  line-height: 1.5rem;
}
kol-input > div.input {
  background-color: white;
  display: block;
  order: 2;
}
kol-input > kol-alert.error {
  margin-top: 0.25em;
  order: 3;
}
input,
select,
textarea {
  font-family: var(--font-family);
  background-color: transparent;
  box-sizing: border-box;
  font-size: 1rem;
  display: inline-flex;
  line-height: 1.5em;
  color: black;
  border-color: var(--color-grau-dunkel);
  border-width: 1px;
  border-style: solid;
  padding: 0.5em 0.75em;
  overflow: hidden;
  width: 100%;
}
input:not([type="range"]),
select:not([multiple]) {
  height: 2.75em;
}
textarea {
  display: inherit;
}
input::placeholder {
  color: var(--color-grau-dunkel);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.75em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1000;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grau-dunkel);
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
select[multiple],
textarea {
  overflow: auto;
}
textarea {
  display: block;
}
select option {
  margin: 1px 0;
  padding: 0.5em;
  cursor: pointer;
}
select option:disabled {
  cursor: not-allowed;
}
option:active:not(:disabled),
option:checked:not(:disabled),
option:focus:not(:disabled),
option:hover:not(:disabled) {
  color: white;
}`,"KOL-ACCORDION":`:host > div {
  font-family: var(--font-family);
  padding: 0 0.5rem 0 0;
}
:host > div > kol-heading-wc {
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
:host > div > kol-heading-wc button {
  cursor: pointer;
  width: 100%;
  margin: 0;
  display: flex;
  gap: 0.5em;
  border: 0;
  align-items: center;
  overflow: hidden;
  font-size: inherit;
  line-height: 1.5em;
  background-color: transparent;
  padding: 0.5em;
  padding-left: 0;
}
:host > div[part*="open"] > kol-heading-wc button {
  padding: 0.5em;
  padding-left: 0;
}
:host > div > kol-heading-wc button kol-icon::part(icon) {
  font-weight: 900;
  color: var(--color-midnight);
}
:host > div > kol-heading-wc button kol-icon::part(close)::before {
  font-family: "Font Awesome 6 Free";
  content: "\\f068";
}
:host > div > kol-heading-wc button kol-icon::part(open)::before {
  font-family: "Font Awesome 6 Free";
  content: "\\2b";
}
:host > div {
  width: 100%;
  height: 100%;
  display: grid;
}
:host > div[part*="open"] div[part="header"] {
  padding-left: 2em;
}
:host > div[part*="open"] div[part="content"] {
  padding-top: 1rem;
}
button {
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
}
:host > div {
  background: var(--color-white);
}
:host > div[part*="open"] {
  padding-bottom: 1em;
} /* :host > div > [part="header"] {height: 0;} */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}`,"KOL-TABLE":`:host * {
  hyphens: var(--hyphens);
  line-height: var(--textFontLineHeight);
}
:host > div:first-child {
  overflow-x: auto;
  overflow-y: hidden;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
caption {
  height: auto;
  text-align: left;
}
table,
tr,
th,
td {
  border: 0 solid var(--color-weiss);
}
tr {
  border-top-width: 2px;
}
th {
  background-color: var(--color-gruen);
  color: var(--color-weiss);
  font-weight: normal;
}
tbody > tr:nth-child(odd) {
  background-color: #f2f2f2;
}
tbody > tr:hover {
  background-color: var(--color-gruen-dunkel);
  color: var(--color-weiss);
}
th,
td {
  border-right-width: 2px;
  padding: 0.25em 0.5em;
}
th > div {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.25em;
}
:host > div.pagination {
  padding: 0.5em;
  font-size: var(--textFontSize);
}
:host > div:last-child,
:host > div.pagination > div:last-child {
  display: grid;
  align-items: center;
  justify-items: center;
  gap: var(--gapSmallest);
}
@media (min-width: 1024px) {
  :host > div:last-child,
  :host > div.pagination > div:last-child {
    grid-auto-flow: column;
    justify-content: start;
  }
  :host > div.pagination kol-pagination {
    display: flex;
    gap: 1rem;
  }
}
th kol-button button {
  padding: 0.5rem;
}`,"KOL-NAV":`* {
  margin: 0;
  padding: 0;
}
nav {
  font-family: var(--font-family);
  font-size: 18px;
  background-color: var(--color-grau-hell);
}
ul {
  list-style: none;
}
a {
  background-color: var(--color-white);
  text-decoration: none;
  color: var(--color-dunkel);
  width: 100%;
  display: block;
  font-style: normal;
  font-weight: 700;
  padding: 0.75rem 0.5rem 0.75rem 0;
  border-left-color: var(--color-gruen-dunkel);
  border-left-style: solid;
  border-left-width: 0.5rem;
  line-height: 1.5rem;
  min-height: 44px;
  min-width: 44px;
  transition-duration: 0.5s;
  transition-property: background-color, color, border-color;
}
a:hover {
  border-left-color: var(--color-gruen-dunkel);
  background-color: var(--color-gruen-hell);
  color: var(--color-grau-dunkel);
}
a > kol-icon {
  display: inline-block;
  text-align: center;
  width: 44px;
}
button {
  background-color: var(--color-gruen-dunkel);
}
a[part*="selected"] {
  background-color: var(--color-ice);
  border-left-color: var(--color-midnight);
  color: var(--color-midnight);
}
.hidden {
  display: none;
}
:host > div > div:last-child {
  margin-top: 0.5em;
  width: 100%;
  text-align: center;
} /* horizontal */
ul.flex {
  display: flex;
}
li > div > div.absolute {
  position: absolute;
}`,"KOL-CARD":`:host > div {
  --card-padding: var(--gap);
  border-color: var(--color-gruen);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 1.875rem 0px rgba(0, 0, 0, 0.3);
  display: grid;
  width: 100%;
  height: 100%;
  background-color: white;
  grid-template-rows: min-content 2fr min-content;
  padding-bottom: var(--gapLarge);
}
:host kol-heading-wc {
  display: inline-flex;
  font-style: normal;
}
:host kol-heading-wc h1,
:host kol-heading-wc h2 {
  font-family: var(--textFontSerif);
  font-weight: var(--textFontWeight);
  margin: 0;
}
:host kol-heading-wc h1 {
  font-size: var(--headline1FontSize);
  line-height: var(--headline1LineHeight);
}
:host kol-heading-wc h2 {
  font-size: var(--headline2FontSize);
  line-height: var(--headline2LineHeight);
}
:host kol-heading-wc h3 {
  font-size: var(--headline3FontSize);
  line-height: var(--headline3LineHeight);
}
:host kol-heading-wc h4 {
  font-size: var(--headline4FontSize);
  line-height: var(--headline4LineHeight);
}
:host div.header {
  border-bottom: 1px solid var(--color-gruen);
  padding: var(--card-padding);
  align-items: flex-start;
  display: flex;
  gap: 0 var(--gapSmall);
  justify-content: space-between;
}
:host div.content {
  padding: var(--card-padding) var(--card-padding) 0;
}
:host div.footer {
  margin-top: 3rem;
  padding: 0 var(--card-padding);
}`,"KOL-INPUT-CHECKBOX":`:host {
  --border-width: 1px;
  --spacing: 0.25rem;
}
label {
  cursor: pointer;
}
input {
  color: black;
  border-color: var(--color-grau-dunkel);
  border-width: var(--border-width);
  border-style: solid;
  line-height: 24px;
  font-size: 16px;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}
input:hover {
  border-color: var(--color-blau);
} /* NEU */
kol-input {
  display: grid;
  align-items: center;
  justify-items: left;
  width: 100%;
}
kol-input.checkbox {
  grid-template-columns: calc(6 * var(--spacing)) auto;
}
kol-input.switch {
  grid-template-columns: calc(13 * var(--spacing)) auto;
}
kol-input > div.input {
  display: inline-flex;
  order: 1;
}
kol-input > div.input input {
  margin: 0px;
}
kol-input > label {
  order: 2;
  padding-left: calc(2 * var(--spacing));
}
kol-input > kol-alert.error {
  order: 3;
  padding-top: 0.25em;
  grid-column: span 2 / auto;
} /* CHECKBOX */
input[type="checkbox"] {
  appearance: none;
  background-color: white;
  cursor: pointer;
  transition: 0.5s;
}
input[type="checkbox"].kol-disabled:before {
  cursor: not-allowed;
}
input[type="checkbox"]:before {
  content: "";
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background-color: var(--color-blau);
  border-color: var(--color-blau);
}
.checkbox input[type="checkbox"] {
  height: calc(6 * var(--spacing));
  min-width: calc(6 * var(--spacing));
  width: calc(6 * var(--spacing));
}
.checkbox input[type="checkbox"]:before {
  background-color: transparent;
  display: block;
  height: calc(6 * var(--spacing));
  position: relative;
  width: calc(6 * var(--spacing));
}
.checkbox input[type="checkbox"]:checked:before {
  border-right-width: 3px;
  border-bottom-width: 3px;
  left: calc(1.5 * var(--spacing) - var(--border-width));
  top: calc(2.85 * var(--spacing) - var(--border-width));
  transform: rotate(40deg) translate(-50%, -50%);
  background-color: transparent;
  border-width: 0px 3px 3px 0px;
  border-color: white;
  border-style: solid;
  height: calc(3 * var(--spacing));
  width: calc(1.5 * var(--spacing));
}
.checkbox input[type="checkbox"]:indeterminate:before {
  background-color: var(--color-grau-dunkel);
  height: 0.375rem;
  top: 0.5rem;
  left: 0.2rem;
  width: calc(4 * var(--spacing));
}
.switch input[type="checkbox"] {
  min-width: 3.2em;
  width: 3.2em;
  height: 1.7em;
  display: inline-block;
  position: relative;
}
.switch input[type="checkbox"]:before {
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  transition: 0.5;
  width: 1.2em;
  height: 1.2em;
  left: calc(0.25em - var(--border-width));
  top: calc(0.25em - var(--border-width));
  background-color: black;
  position: absolute;
}
.switch input[type="checkbox"]:checked:before {
  -webkit-transform: translateX(1.5em);
  -moz-transform: translateX(1.5em);
  -ms-transform: translateX(1.5em);
  transform: translateX(1.5em);
  background-color: white;
}
.switch input[type="checkbox"]:indeterminate:before {
  -webkit-transform: translateX(0.75em);
  -moz-transform: translateX(0.75em);
  -ms-transform: translateX(0.75em);
  transform: translateX(0.75em);
  background-color: var(--color-blau);
}
.disabled {
  opacity: 0.33;
}`,"KOL-INPUT-RADIO":`:host {
  --border-width: 1px;
  --input-color: var(--color-gruen-dunkel);
  --input-inner-position: calc(var(--spacing) + var(--border-width));
  --input-inner-size: calc(var(--spacing) * 3);
  --input-outer-size: calc(var(--spacing) * 6);
}
div[slot="input"] {
  align-items: center;
  display: flex;
  gap: calc(var(--spacing) * 2);
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
fieldset.horizontal {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 32px;
}
input {
  cursor: pointer;
  border: var(--border-width) solid var(--input-color);
  appearance: none;
  border-radius: 100%;
  height: var(--input-outer-size);
  width: var(--input-outer-size);
  margin: 0;
}
input:hover {
  --border-width: 2px;
}
input:focus:hover {
  box-shadow: none;
}
input:disabled {
  --input-color: var(--color-disabled);
}
input:disabled:hover {
  --border-width: 1px;
}
input:disabled + label {
  color: var(--color-disabled);
}
input::before {
  content: "";
  cursor: pointer;
  left: var(--input-inner-position);
  top: var(--input-inner-position);
  position: relative;
  border-radius: 100%;
  display: block;
  height: var(--input-inner-size);
  width: var(--input-inner-size);
}
input:hover::before {
  --input-inner-position: var(--spacing);
}
input:checked::before {
  background-color: var(--input-color);
}
kol-input {
  display: grid;
}
kol-input {
  margin-bottom: 1rem;
}
kol-input.error input {
  border-color: var(--color-rot);
  padding-left: 1em;
}
kol-input.error input:focus,
kol-input.error select:focus,
kol-input.error textarea:focus {
  outline: var(--color-focus) solid 2px !important;
}
kol-input kol-alert.error {
  margin-bottom: 0.4em;
  order: 1;
}
kol-input.error kol-alert.error {
  color: var(--color-rot);
  font-weight: 700;
}
label {
  color: var(--color-text);
  cursor: pointer;
  display: grid;
  font-size: var(--text-size); /* order: 2; */
}
legend {
  font-size: var(--text-size);
  margin-bottom: var(--text-size);
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.75em;
}
.icon-left input,
.icon-left select {
  padding-left: 2em;
}
.icon-right input,
.icon-right select {
  padding-right: 2em;
}
.required label > span::after {
  content: "*";
  padding-left: 0.125em;
}`,"KOL-TOAST":`:host > div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 200;
}
:host > div > kol-alert {
  display: block;
  margin: auto;
  padding: 1rem;
  max-width: 750px;
}
:host > div > kol-button-wc {
  top: 0;
  position: relative;
  display: block;
  margin: auto;
  width: 1em;
}`,"KOL-TABS":`button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
:host {
  font-family: var(--font-family);
}
:host > div {
  display: block;
  width: 100%;
}
:host kol-button-group-wc {
  display: inline-block;
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: var(--kolibri-color-normal);
}
:host kol-button-group-wc > div {
  display: inline-flex;
}
:host kol-button-group-wc > div + div {
  margin-left: 0.25em;
}
:host > div > div {
  padding: 0.25em;
  border: 1px solid var(--kolibri-border-color);
  border-radius: 0 0 0.25rem 0.25rem;
}
button {
  box-sizing: border-box;
  font-size: inherit;
  line-height: 1.25em;
  cursor: pointer;
  border-width: 2px;
  box-shadow: 0 0 0.25em gray;
  font-family: var(--kolibri-font-family);
  width: inherit;
  border-radius: var(--kolibri-border-radius);
  border-style: solid;
  padding: calc(2 * var(--kolibri-spacing));
  display: grid;
  gap: 0.25em;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition-duration: 0.5s;
  transition-property: background-color, color, border-color;
}
kol-button-wc[aria-selected="true"] button {
  border-bottom-width: 0.25em !important;
  border-bottom-style: solid;
  border-bottom-color: var(--kolibri-color-accent) !important;
}
button > kol-span-wc span {
  display: flex;
  gap: 0.25em;
  align-items: center;
  justify-content: center;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
button.primary,
button.primary:disabled:hover {
  background-color: var(--kolibri-color-primary);
  border-color: var(--kolibri-color-primary);
  color: white;
}
button.primary:hover,
button.primary:focus {
  color: var(--kolibri-color-primary);
}
button.secondary,
button.secondary:disabled:hover {
  background-color: var(--kolibri-color-secondary);
  border-color: var(--kolibri-color-secondary);
  color: white;
}
button.secondary:hover,
button.secondary:focus {
  color: var(--kolibri-color-secondary);
}
button.normal,
button.normal:disabled:hover {
  background-color: var(--kolibri-color-normal);
  border-color: var(--kolibri-color-normal);
  color: white;
}
button.normal:hover,
button.normal:focus {
  color: var(--kolibri-color-normal);
}
button.danger,
button.danger:disabled:hover {
  background-color: var(--kolibri-color-danger);
  border-color: var(--kolibri-color-danger);
  color: white;
}
button.danger:hover,
button.danger:focus {
  color: var(--kolibri-color-danger);
}
button.ghost,
button.ghost:disabled:hover {
  background-color: white;
  border-color: var(--kolibri-color-ghost);
  color: var(--kolibri-color-ghost);
}
button.ghost:hover,
button.ghost:focus {
  background-color: var(--kolibri-color-ghost);
  color: white;
}
button:hover,
button:focus {
  background-color: white;
  box-shadow: 0 0 0.25em black;
}
button:active {
  outline: 0 !important;
  box-shadow: none !important;
}
.close-button {
  font-size: 25%;
  height: fit-content;
  width: 0;
}
.close-button button {
  width: 1rem;
  position: relative;
  height: 1rem;
  left: -4.25em;
  top: 0.25em;
}
:host > div {
  display: grid;
}
:host > div.tabs-align-left {
  grid-template-columns: auto 1fr;
}
:host > div.tabs-align-right {
  grid-template-columns: 1fr auto;
}
:host > .tabs-align-left kol-button-group-wc,
:host > .tabs-align-top kol-button-group-wc {
  order: 0;
}
:host > .tabs-align-bottom kol-button-group-wc,
:host > .tabs-align-right kol-button-group-wc {
  order: 1;
}
:host > div.tabs-align-left kol-button-group-wc > div,
:host > div.tabs-align-left kol-button-group-wc > div > div,
:host > div.tabs-align-right kol-button-group-wc > div,
:host > div.tabs-align-right kol-button-group-wc > div > div {
  display: grid;
}
:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
  width: 100%;
}
:host > div.tabs-align-bottom kol-button-group-wc div,
:host > div.tabs-align-top kol-button-group-wc div {
  display: flex;
  flex-wrap: wrap;
}
:host > div.tabs-align-bottom > kol-button-group-wc {
  border-radius: 0 0 0.25rem 0.25rem;
}
:host > div.tabs-align-bottom > div {
  border-radius: 0.25rem 0.25rem 0 0;
}
:host > div.tabs-align-top > kol-button-group-wc {
  border-radius: 0.25rem 0.25rem 0 0;
}
:host > div.tabs-align-top > div {
  border-radius: 0 0 0.25rem 0.25rem;
}
:host > div.tabs-align-left > kol-button-group-wc {
  border-radius: 0.25rem 0 0 0.25rem;
}
:host > div.tabs-align-left > div {
  border-radius: 0 0.25rem 0.25rem 0;
}
:host > div.tabs-align-right > kol-button-group-wc {
  border-radius: 0 0.25rem 0.25rem 0;
}
:host > div.tabs-align-right > div {
  border-radius: 0.25rem 0 0 0.25rem;
}`,"KOL-PAGINATION":`:host {
  display: grid;
  gap: 1rem;
}
:host > div {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;
}
:host .selected button {
  min-width: 44px;
  min-height: 44px;
  display: grid;
  line-height: 1.5;
  font-family: var(--textFont);
  cursor: not-allowed;
  font-weight: 700;
  padding: 10px 12px;
  border-radius: 1.5em;
  border: none;
  font-size: var(--textFontSize);
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  width: inherit;
  transition-duration: 0.5s;
  transition-property: background-color, color, border-color;
  color: var(--color-midnight);
  background-color: var(--color-ice);
  border-color: var(--color-ice);
}
:host > div > span {
  align-self: flex-end;
  padding-bottom: 0.5rem;
  color: var(--color-midnight);
}`,"KOL-INPUT-RANGE":`/* https://www.cssportal.com/style-input-range/ */
kol-input {
  display: grid;
}
kol-input label {
  display: grid;
  order: 2;
  margin-bottom: 0.4em;
}
kol-input div.input {
  box-sizing: border-box;
  order: 3;
  background-color: white;
  border-radius: 0.3125rem;
}
kol-input kol-alert.error {
  margin-bottom: 0.4em;
  order: 1;
}
input,
select,
textarea {
  font-family: var(--font-family);
  background-color: transparent;
  box-sizing: border-box;
  font-size: 1rem;
  display: inline-flex;
  line-height: 1.5em;
  border-color: var(--color-grey);
  border-width: 2px;
  border-style: solid;
  padding: 0.625em 0.875em;
  border-radius: 0.3125rem;
  overflow: hidden;
  width: calc(100% - 4em);
}
input,
select:not([multiple]) {
  height: 2.75em;
}
input::placeholder {
  color: var(--color-grey);
}
input:hover {
  border-color: var(--color-midnight);
}
input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
  cursor: not-allowed;
  border-color: var(--border-default);
}
.required #label::after {
  content: "*";
  padding-left: 0.125em;
}
.icons {
  display: flex;
  justify-content: space-between;
  height: 0;
}
.icons > * {
  margin: 0.725em 0.875em;
  box-sizing: border-box;
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
}
.icon-left input,
.icon-left select {
  padding-left: calc(0.875em + 1em + 0.5em);
}
.icon-right input,
.icon-right select {
  padding-right: calc(0.875em + 1em + 0.5em);
}
kol-input.error {
  border-left: 3px solid var(--color-red);
  padding-left: 1em;
}
kol-input.error input:focus,
kol-input.error select:focus,
kol-input.error textarea:focus {
  outline-color: var(--color-red) !important;
}
kol-input.error kol-alert.error {
  color: var(--color-red);
  font-weight: 700;
}
kol-button-wc {
  position: relative;
  float: right;
  z-index: 1000;
  margin-top: -33px;
}
kol-button-wc button {
  border: 1px solid var(--color-grey);
  border-radius: 0.25rem;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
}
.icon-right kol-button-wc {
  margin-right: 2.5em;
}
.disabled {
  opacity: 0.33;
}
.icon-left input,
.icon-left select {
  margin-left: 2em;
}
.icon-right input,
.icon-right select {
  margin-right: 2em;
}
input[type="range"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"] {
  overflow: visible;
  background-color: var(--color-ice);
  border: 0;
  height: 0.5rem;
  padding: 0;
  padding-bottom: 0;
  margin-bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  box-sizing: border-box;
  background-color: var(--color-midnight);
  height: 20px;
  width: 20px;
  border-radius: 20px;
  cursor: pointer;
  -webkit-appearance: none;
}`,"KOL-LINK-BUTTON":`:host {
  display: inline-block;
} /*-----------*/
a {
  border-width: 1px;
  border-style: solid;
  min-width: 44px;
  min-height: 44px;
  display: grid;
  gap: 0.25em;
  line-height: 1.5rem;
  font-family: var(--font-family);
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  padding: 8px 14px;
  justify-content: center;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  width: inherit;
  transition-duration: 0.5s;
  transition-property: background-color, color, border-color;
}
a:hover:enabled {
  text-decoration: underline;
}
.primary a,
.primary a:active,
.primary a:hover {
  background-color: var(--color-gruen-dunkel);
  border-color: var(--color-gruen-dunkel);
  color: var(--color-weiss);
}
.secondary a,
.danger a,
.normal a,
.ghost a {
  background-color: var(--color-weiss);
  border-color: var(--color-gruen-hell);
  color: var(--color-grau-dunkel);
}
.secondary a:active,
.secondary a:hover {
  background-color: var(--color-gruen-dunkel);
  border-color: var(--color-gruen-dunkel);
  border-width: 1px;
  color: var(--color-weiss);
}
a:disabled,
a:disabled:hover {
  background-color: var(--color-weiss);
  border-color: var(--color-grau-hell);
  color: var(--color-graublau);
  cursor: not-allowed;
}
a > span {
  display: flex;
  gap: 0.5em;
  margin: auto;
  align-items: center;
  justify-content: center;
}
a.icon-only {
  padding: 8px;
}
a.icon-only kol-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
}
a.loading kol-icon {
  animation: spin 5s infinite linear;
}`,"KOL-BUTTON-LINK":`button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
kol-link-button-wc {
  display: inline-block;
}
button {
  color: var(--textFontColorblau);
  font-style: normal;
  font-weight: 400;
  display: inline-flex;
  line-height: 1.5em;
  text-decoration-line: none !important;
  outline: none !important;
}
button:focus-within,
button:hover {
  box-shadow: inset 0 -1px 0 0 currentColor;
}
kol-icon {
  padding: 0 0.25em;
  display: inline-block;
}`,"KOL-ABBR":`abbr {
  text-decoration: none;
  border-bottom: dotted var(--color-metal) 1px;
}`,"KOL-BREADCRUMB":`nav {
  width: 100%;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
kol-link {
  display: inline;
}
:host kol-icon[exportparts*="separator"] {
  padding: 0 0.5rem;
}
:host kol-icon::part(icon separator) {
  font-weight: 900;
  font-size: 0.875rem;
}
:host kol-icon::part(icon separator)::before {
  color: black;
  content: "\\f054";
  font-family: "Font Awesome 6 Free";
}
:host li > kol-link > kol-link-wc > a {
  color: red !important;
}`,"KOL-LINK-GROUP":`ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
nav.horizontal ul {
  display: flex;
  flex-wrap: wrap;
}
nav.horizontal li {
  list-style: none;
  margin-left: 1.25rem;
  margin-right: 0.25rem;
}
nav.horizontal li:first-child {
  margin-left: 0;
}
nav.horizontal li:last-child {
  margin-right: 0;
}
nav.vertical li {
  margin-left: 1.75rem;
  margin-right: 0.5rem;
}
li.list-none {
  list-style-type: none !important;
  margin-left: 0;
}`,"KOL-ICON":"","KOL-TOOLTIP":`:host {
  --kolibri-font-size: var(--textFontSize);
}`});const oT=$o.createTheme("itzbund",{GLOBAL:`:host {
		--kolibri-border-color: unset;
		--kolibri-border-radius: unset;
		--kolibri-border-width: unset;
		--kolibri-color-error: unset;
		--kolibri-color-info: unset;
		--kolibri-color-success: unset;
		--kolibri-color-warning: unset;
		--kolibri-color-primary: unset;
		--kolibri-color-secondary: unset;
		--kolibri-color-normal: unset;
		--kolibri-color-danger: unset;
		--kolibri-color-ghost: unset;
		--kolibri-color-disabled: unset;
		--kolibri-color-text: unset;
		--kolibri-color-visited: unset;
		--kolibri-font-family: unset;
		--kolibri-font-size: unset;
		--kolibri-spacing: unset;
	}
	:host {
		--border-color: var(--color-anthrazit);
		--border-radius: 0.125rem;
		--color-anthrazit: #333;
		--color-jade: #f3f7fb;
		--color-weiss: #fff;
		--color-petrol: #007a89;
		--color-achat: #0b4d59;
		--color-teal: #056773;
		--color-fluorit: #66ddec;
		--color-rotton: rgba(188, 0, 0, 1);
		--color-rotton-20: rgba(188, 0, 0, 0.2);
		--color-gras: #138510;
		--color-warn: #f0541e;
		--color-blut: var(--color-rotton);
		--color-input-bg-default: #e8edf2;
		--gradient-petrol-achat: linear-gradient(
			67deg,
			var(--color-petrol),
			var(--color-achat)
		);
		--color-citrin: #d4c912;
		--color-umber: #494500;
		--color-gelb: #fff443;
		--color-lichtgelb: #eeff6c;
		--gradient-gelb-citrin: linear-gradient(
			67deg,
			var(--color-gelb),
			var(--color-citrin)
		);
		--font-family-sans: BundesSans Web;
		--font-family-serif: BundesSerif Web;
		--font-size: 16px;
		--spacing: 0.125em;
		--kolibri-spacing: calc(2 * var(--spacing));
	}
	*[tabindex]:focus,
	a:focus,
	button:focus,
	input:focus,
	select:focus,
	summary:focus,
	textarea:focus {
		cursor: pointer;
		outline-color: var(--color-petrol);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 3px;
		transition: outline-offset 0.2s linear;
	}`,"KOL-BUTTON":`button {
		background-color: transparent;
	}
	a,
	button {
		border-radius: 2rem !important;
		font-family: var(--font-family-sans);
		text-transform: uppercase;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		border-radius: 2rem;
		border-style: solid;
		min-width: 44px;
		min-height: 44px;
		border-width: var(--spacing);
		font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
		padding: 0 1rem;
	}
	.button a.icon-only > kol-span-wc,
	.button button.icon-only > kol-span-wc {
		padding: 0 0.5rem;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
		transition-delay: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 0.5s;
		transition-property: background, color, border-color;
	}
	kol-link-wc.primary > a > kol-span-wc,
	kol-link-wc.primary > a:disabled:hover > kol-span-wc,
	button.primary > kol-span-wc,
	button.primary:disabled:hover > kol-span-wc {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
	}
	kol-link-wc.primary > a:hover > kol-span-wc,
	kol-link-wc.primary > a:focus > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.primary:focus > kol-span-wc {
		background-color: var(--color-achat);
		border-color: var(--color-achat);
	}
	kol-link-wc.secondary > a > kol-span-wc,
	kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
	button.secondary > kol-span-wc,
	button.secondary:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-petrol);
		color: var(--color-petrol);
	}
	kol-link-wc.secondary > a:hover > kol-span-wc,
	kol-link-wc.secondary > a:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.secondary:focus > kol-span-wc {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
	}
	kol-link-wc.normal > a > kol-span-wc,
	kol-link-wc.normal > a:disabled:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-anthrazit);
		color: var(--color-anthrazit);
	}
	kol-link-wc.normal > a:hover > kol-span-wc,
	kol-link-wc.normal > a:focus > kol-span-wc,
	button.normal:hover > kol-span-wc,
	button.normal:focus > kol-span-wc {
		background-color: var(--color-anthrazit);
		border-color: var(--color-anthrazit);
		color: var(--color-weiss);
	}
	kol-link-wc.danger > a > kol-span-wc,
	kol-link-wc.danger > a:disabled:hover > kol-span-wc,
	button.danger > kol-span-wc,
	button.danger:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-blut);
		color: var(--color-blut);
	}
	kol-link-wc.danger > a:hover > kol-span-wc,
	kol-link-wc.danger > a:focus > kol-span-wc,
	button.danger:hover > kol-span-wc,
	button.danger:focus > kol-span-wc {
		background-color: var(--color-blut);
		border-color: var(--color-blut);
		color: var(--color-weiss);
	}
	kol-link-wc.ghost > a > kol-span-wc,
	kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
	button.ghost > kol-span-wc,
	button.ghost:disabled:hover > kol-span-wc {
		background-color: var(--color-ghost);
		border-color: transparent;
		color: var(--color-anthrazit);
	}
	kol-link-wc.ghost > a:hover > kol-span-wc,
	kol-link-wc.ghost > a:focus > kol-span-wc,
	button.ghost:hover > kol-span-wc,
	button.ghost:focus > kol-span-wc {
		background-color: var(--color-ghost);
		border-color: var(--color-ghost);
		color: var(--color-anthrazit);
	}`,"KOL-BUTTON-GROUP":`:host > kol-button-group-wc {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}`,"KOL-LINK-BUTTON":`a,
	button {
		border-radius: 2rem !important;
		font-family: var(--font-family-sans);
		text-transform: uppercase;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		border-radius: 2rem;
		border-style: solid;
		min-width: 44px;
		min-height: 44px;
		border-width: var(--spacing);
		font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
		padding: 0 1rem;
	}
	.button a.icon-only > kol-span-wc,
	.button button.icon-only > kol-span-wc {
		padding: 0 0.5rem;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
		transition-delay: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 0.5s;
		transition-property: background, color, border-color;
	}
	kol-link-wc.primary > a > kol-span-wc,
	kol-link-wc.primary > a:disabled:hover > kol-span-wc,
	button.primary > kol-span-wc,
	button.primary:disabled:hover > kol-span-wc {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
	}
	kol-link-wc.primary > a:hover > kol-span-wc,
	kol-link-wc.primary > a:focus > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.primary:focus > kol-span-wc {
		background-color: var(--color-achat);
		border-color: var(--color-achat);
	}
	kol-link-wc.secondary > a > kol-span-wc,
	kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
	button.secondary > kol-span-wc,
	button.secondary:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-petrol);
		color: var(--color-petrol);
	}
	kol-link-wc.secondary > a:hover > kol-span-wc,
	kol-link-wc.secondary > a:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.secondary:focus > kol-span-wc {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
	}
	kol-link-wc.normal > a > kol-span-wc,
	kol-link-wc.normal > a:disabled:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-anthrazit);
		color: var(--color-anthrazit);
	}
	kol-link-wc.normal > a:hover > kol-span-wc,
	kol-link-wc.normal > a:focus > kol-span-wc,
	button.normal:hover > kol-span-wc,
	button.normal:focus > kol-span-wc {
		background-color: var(--color-anthrazit);
		border-color: var(--color-anthrazit);
		color: var(--color-weiss);
	}
	kol-link-wc.danger > a > kol-span-wc,
	kol-link-wc.danger > a:disabled:hover > kol-span-wc,
	button.danger > kol-span-wc,
	button.danger:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-blut);
		color: var(--color-blut);
	}
	kol-link-wc.danger > a:hover > kol-span-wc,
	kol-link-wc.danger > a:focus > kol-span-wc,
	button.danger:hover > kol-span-wc,
	button.danger:focus > kol-span-wc {
		background-color: var(--color-blut);
		border-color: var(--color-blut);
		color: var(--color-weiss);
	}
	kol-link-wc.ghost > a > kol-span-wc,
	kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
	button.ghost > kol-span-wc,
	button.ghost:disabled:hover > kol-span-wc {
		background-color: var(--color-ghost);
		border-color: transparent;
		color: var(--color-anthrazit);
	}
	kol-link-wc.ghost > a:hover > kol-span-wc,
	kol-link-wc.ghost > a:focus > kol-span-wc,
	button.ghost:hover > kol-span-wc,
	button.ghost:focus > kol-span-wc {
		background-color: var(--color-ghost);
		border-color: var(--color-ghost);
		color: var(--color-anthrazit);
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: 1rem;
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5em;
	}
	button > kol-span-wc {
		cursor: not-allowed;
		background-color: var(--color-achat);
		border-color: var(--color-achat);
		border-radius: 2rem;
		border-style: solid;
		color: var(--color-weiss);
		min-width: 44px;
		min-height: 44px;
		border-width: var(--spacing);
		font-size: inherit;
		font-weight: bold;
		line-height: 1.25em;
		padding: calc(4 * var(--spacing));
		text-decoration: underline;
	}`,"KOL-BUTTON-LINK":`kol-link-wc a,
	kol-button-wc button {
		text-decoration-line: none;
	}
	a,
	button {
		background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
		background-repeat: no-repeat;
		background-position: left 0 bottom 0;
		background-size: 25% 0.25ex;
		border-radius: var(--spacing);
		color: var(--color-petrol);
		font-family: var(--font-family-sans);
		font-size: inherit;
		text-transform: uppercase;
		transition-delay: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 0.5s;
		transition-property: background, color, border-color;
	}
	a:focus,
	a:hover,
	button:focus,
	button:hover {
		background-size: 100% 0.25ex;
		color: var(--color-achat);
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	a.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
	}
	a.skip:focus {
		background-color: white;
		box-shadow: 0 0 0.5rem 0.5rem white;
		left: unset;
		position: unset;
	}`,"KOL-INPUT-TEXT":`input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,"KOL-INPUT-PASSWORD":`input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,"KOL-INPUT-NUMBER":`input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,"KOL-INPUT-EMAIL":`input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,"KOL-INPUT-FILE":`input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,"KOL-TEXTAREA":`textarea:hover,
	textarea:focus {
		border-color: var(--default-border-hover);
		outline-color: var(--primary) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--default-letter);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	textarea.error {
		background-color: var(--danger-light) !important;
		border-color: var(--danger);
	}
	textarea {
		width: 100%;
		color: var(--default-letter);
		border-width: 1px;
		border-style: solid;
		line-height: 24px;
		font-size: 16px;
		border-color: var(--kolibri-color-normal);
		border-radius: 0;
		background-color: #e8edf2 !important;
	}
	textarea::placeholder {
		color: var(--default-border);
	}
	textarea:read-only,
	textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
		background-color: var(--background-light-grey);
	}
	.kol-required span::after {
		content: "*";
	}
	kol-alert {
		margin-top: var(--spacing);
		display: block;
	}`,"KOL-ALERT":`:host {
		--kolibri-border-width: 1px;
	}
	:host .default {
		border-color: var(--color-anthrazit);
	}
	.default .heading-icon {
		background-color: var(--color-anthrazit);
	}
	:host .error {
		border-color: var(--color-rotton);
	}
	.error .heading-icon {
		background-color: var(--color-rotton);
	}
	:host .info {
		border-color: var(--color-petrol);
	}
	.info .heading-icon {
		background-color: var(--color-petrol);
	}
	:host .success {
		border-color: var(--color-gras);
	}
	:host .success .heading-icon {
		background-color: var(--color-gras);
	}
	:host .warning {
		border-color: var(--color-warn);
	}
	.warning .heading-icon {
		background-color: var(--color-warn);
	}`,"KOL-HEADING":`h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1em;
		margin: 0;
		padding: 0;
	}
	h1 {
		font-family: var(--font-family-serif);
		font-size: 54px;
		font-weight: bold;
	}
	h2 {
		font-family: var(--font-family-serif);
		font-size: 32px;
		font-weight: bold;
	}
	h3 {
		font-family: var(--font-family-serif);
		font-size: 26px;
		font-weight: bold;
	}
	h4 {
		font-family: var(--font-family-serif);
		font-size: 20px;
		font-weight: normal;
	}
	h5 {
		font-family: var(--font-family-serif);
		font-size: 17px;
		font-weight: bold;
	}
	h6 {
		font-family: var(--font-family-sans);
		font-size: 17px;
		font-weight: normal;
	}`,"KOL-BADGE":`:host {
		display: inline-block;
	}
	:host > span {
		border-radius: 0.3125rem;
		display: inline-flex;
		line-height: 1.25rem;
	}
	:host > span kol-button-wc {
		border-left: 1px solid rgba(0, 0, 0, 0.25);
	}
	:host > span kol-span-wc {
		padding: 0.25rem 0.5rem;
	}
	:host > span > kol-span-wc {
		align-items: center;
		font-style: normal;
		gap: 0.5rem;
	}
	:host > span > kol-span-wc > span {
		display: flex;
		gap: 0.25rem;
	}
	:host button {
		border-radius: 0 var(--spacing) var(--spacing) 0;
	}`,"KOL-INDENTED-TEXT":`:host > div {
		background: var(--color-white);
		border-left: none;
		box-shadow: -4px 0px 0px var(--color-petrol);
		padding: 0.25em 0.5em;
		width: 100%;
	}`,"KOL-LINK":`kol-link-wc a,
	kol-button-wc button {
		text-decoration-line: none;
	}
	a,
	button {
		background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
		background-repeat: no-repeat;
		background-position: left 0 bottom 0;
		background-size: 25% 0.25ex;
		border-radius: var(--spacing);
		color: var(--color-petrol);
		font-family: var(--font-family-sans);
		font-size: inherit;
		text-transform: uppercase;
		transition-delay: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 0.5s;
		transition-property: background, color, border-color;
	}
	a:focus,
	a:hover,
	button:focus,
	button:hover {
		background-size: 100% 0.25ex;
		color: var(--color-achat);
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	a.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
	}
	a.skip:focus {
		background-color: white;
		box-shadow: 0 0 0.5rem 0.5rem white;
		left: unset;
		position: unset;
	}`,"KOL-BREADCRUMB":`li > span {
		font-weight: bold;
		text-transform: uppercase;
	}`,"KOL-SPIN":`.spin {
		display: inline-block;
		height: 1rem;
		position: relative;
		width: 3rem;
	}
	.spin span {
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		border: 0.1rem solid rgb(255, 255, 255);
		border-radius: 50%;
		height: 0.8rem;
		width: 0.8rem;
		top: 0.1rem;
		position: absolute;
	}
	.spin span:nth-child(1) {
		background-color: #fc0;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin1;
		left: 0.1rem;
	}
	.spin span:nth-child(2) {
		background-color: #f00;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 0.1rem;
	}
	.spin span:nth-child(3) {
		background-color: #000;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 1.1rem;
	}
	.spin span:nth-child(4) {
		background-color: #666;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin3;
		left: 2.1rem;
	}
	@keyframes spin1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes spin2 {
		0% {
			transform: translate(0px, 0px);
		}
		100% {
			transform: translate(1rem, 0px);
		}
	}
	@keyframes spin3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}`,"KOL-PROGRESS":`:host progress,
	:host span {
		display: block;
		height: 0px;
		overflow: hidden;
		width: 0px;
	}
	svg line:first-child,
	svg circle:first-child {
		fill: transparent;
		stroke: var(--color-fluorit);
	}
	svg line:last-child,
	svg circle:last-child {
		stroke: var(--color-achat);
		fill: transparent;
	}
	progress {
		display: none;
	}`,"KOL-SELECT":`select:hover,
	select:focus {
		border-color: var(--default-border-hover);
		outline-color: var(--primary) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--default-letter);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	select.error {
		background-color: var(--danger-light) !important;
		border-color: var(--danger);
	}
	select {
		width: 100%;
		color: var(--default-letter);
		border-width: 1px;
		border-style: solid;
		line-height: 24px;
		font-size: 16px;
		border-color: var(--kolibri-color-normal);
		border-radius: 0;
		background-color: #e8edf2 !important;
	}
	select:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
		background-color: var(--background-light-grey);
	}
	option {
		height: 2em;
		padding: 0.5em;
	}
	kol-alert {
		margin-top: var(--spacing);
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}`,"KOL-INPUT-COLOR":`input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,"KOL-ACCORDION":`:host > div {
		font-family: var(--font-family);
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		display: grid;
		border-color: var(--kolibri-border-color);
		border-width: 1px;
		border-style: solid;
		border-radius: 0.25rem;
	}
	:host > div > kol-heading-wc {
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host > div > kol-heading-wc button {
		cursor: pointer;
		width: 100%;
		margin: 0;
		display: flex;
		gap: 0.5em;
		border: 0;
		align-items: center;
		overflow: hidden;
		font-size: inherit;
		line-height: 1.75em;
		background-color: transparent;
		padding: 0.5rem;
	}
	:host > div[part*="open"] > kol-heading-wc button {
		padding-bottom: 0;
	}
	:host > div[part*="open"] > kol-heading-wc button kol-icon {
		width: 1em;
	}
	:host > div div[part="header"],
	:host > div[part*="open"] div[part="content"] {
		margin: 0;
	}
	:host > div div[part="header"] {
		padding-left: 2rem;
	}
	:host > div[part*="open"] div[part="content"] {
		margin: 0;
		padding: 0 1rem 1rem 2.25rem;
	}
	:host > div > kol-heading-wc button kol-icon::part(icon) {
		color: var(--color-midnight);
	}
	button {
		cursor: pointer;
		font-weight: inherit;
		font-size: inherit;
		line-height: inherit;
	}
	:host > div > kol-heading-wc button kol-icon::part(close)::before {
		font-family: "Font Awesome 6 Free";
		content: "\f077";
	}
	:host > div > kol-heading-wc button kol-icon::part(open)::before {
		font-family: "Font Awesome 6 Free";
		content: "\f078";
	}`,"KOL-TABLE":`:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	:host > div:first-child {
		border-style: solid;
		border-width: 1px;
		border-color: var(--border-color);
	}
	table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
	}
	table,
	tr,
	th,
	td {
		border: 0 solid var(--border-color);
	}
	tr {
		border-top-width: 1px;
	}
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	th,
	td {
		border-right-width: 1px;
		padding: 0.25em 0.5em;
	}
	th {
		background-color: #eee;
	}
	th > div {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 0.25em;
	}
	:host > div.pagination {
		padding: 0.5em;
	}
	:host > div.pagination,
	:host > div.pagination > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 0.5em;
	}
	@media (min-width: 1024px) {
		:host > div.pagination,
		:host > div.pagination > div:last-child {
			grid-auto-flow: column;
		}
		:host > div.pagination kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,"KOL-NAV":`:host .hidden {
		display: none;
	}
	:host > div > nav ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
		border-radius: var(--border-radius);
		background-color: var(--color-petrol);
	}
	:host > div > nav ul > li {
		border-radius: var(--border-radius);
		overflow: hidden;
		padding: 0.125em;
	}
	:host > div > nav ul > li[part*="vertical"] + li {
		border-radius: 0;
		border-top: 0.1em dotted white;
	}
	:host > div > nav ul > li[part*="vertical selected"] {
		border-right: 0.375em solid var(--color-citrin);
	}
	:host > div > nav ul > li[part*="horizontal"] + li {
		border-radius: 0;
		border-left: 0.1em dotted white;
	}
	:host > div > nav ul > li[part*="horizontal selected"] {
		border-bottom: 0.375em solid var(--color-citrin);
	}
	:host > div > nav ul > li > div {
		height: 100%;
	}
	:host > div > nav kol-link-wc {
		width: 100%; /*height: 100%;font-weight: 600;*/
		display: block;
	}
	:host > div > nav kol-link-wc a {
		border-radius: var(--border-radius);
		background-color: var(--color-petrol);
		border: 1px solid transparent;
		grid: flex;
		line-height: 2em;
		padding: 0.5em;
		color: white;
		height: 100%;
		-webkit-box-align: center;
		align-items: center;
		display: flex;
		cursor: pointer;
		text-decoration: inherit;
	}
	:host > div > nav kol-link-wc[exportparts*="selected"] a {
		background-color: var(--color-achat);
		font-weight: 700;
	}
	:host > div > nav kol-link-wc a kol-icon.mr-2 {
		margin-right: calc(2 * 2 * var(--spacing));
	}
	:host > div > nav kol-link-wc a kol-icon.ml-2 {
		margin-left: calc(2 * 2 * var(--spacing));
	}
	:host > div > nav kol-link-wc a:focus,
	:host > div > nav kol-link-wc a:hover {
		border: 1px solid white;
		background-color: var(--color-fluorit);
		color: var(--color-anthrazit);
	} /* compact button */
	:host > div > div:last-child {
		margin-top: 0.5em;
		width: 100%;
		text-align: center;
	}
	:host > div > nav kol-link-wc a.text-center {
		display: grid;
		align-items: center;
		justify-items: center;
	} /* horizontal */
	ul.flex {
		display: flex;
	}
	li > div > div.absolute {
		position: absolute;
	}
	kol-span-wc {
		justify-items: baseline;
	}`,"KOL-CARD":`:host > div {
		background-color: white;
		border-color: var(--border-color);
		border-style: solid;
		border-width: 1px;
		border-radius: calc(2 * var(--border-radius));
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	kol-heading {
		padding: 0.5rem;
		display: block;
		border-bottom-style: solid;
		border-bottom-color: var(--border-color);
		border-bottom-width: 1px;
	}
	:host > div > div {
		display: block;
		padding: 0.5rem;
	}
	:host > div > div:last-child {
		display: block;
		padding: 0.5rem;
		border-top-style: solid;
		border-top-color: var(--color-achat);
		border-top-width: 1px;
	}`,"KOL-INPUT-CHECKBOX":`/* ALL INPUT, SELECT, TEXTAREA */
	label {
		cursor: pointer;
	}
	input {
		color: var(--default-letter);
		border-color: var(--default-border);
		border-width: 2px;
		border-style: solid;
		line-height: 24px;
		font-size: 16px;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	input:hover {
		border-color: var(--color-petrol);
	} /* NEU */
	kol-input {
		display: grid;
		align-items: center;
		justify-items: left;
		width: 100%;
	}
	kol-input.checkbox {
		grid-template-columns: calc(6 * 2 * var(--spacing)) auto;
	}
	kol-input.switch {
		grid-template-columns: calc(13 * 2 * var(--spacing)) auto;
	}
	kol-input > div.input {
		display: inline-flex;
		order: 1;
	}
	kol-input > div.input input {
		margin: 0px;
	}
	kol-input > label {
		order: 2;
		padding-left: calc(2 * 2 * var(--spacing));
	}
	kol-input > kol-alert.error {
		order: 3;
		padding-top: 0.25em;
		grid-column: span 2 / auto;
	} /* CHECKBOX */
	input[type="checkbox"] {
		appearance: none;
		background-color: white;
		cursor: pointer;
		transition: 0.5s;
	}
	input[type="checkbox"].kol-disabled:before {
		cursor: not-allowed;
	}
	input[type="checkbox"]:before {
		content: "";
		cursor: pointer;
	}
	input[type="checkbox"]:checked {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
	}
	.checkbox input[type="checkbox"] {
		/* border-radius: 0.25em; */
		height: calc(6 * 2 * var(--spacing));
		min-width: calc(6 * 2 * var(--spacing));
		width: calc(6 * 2 * var(--spacing));
	}
	.checkbox input[type="checkbox"]:before {
		/* border-radius: 0.25em; */
		background-color: transparent;
		display: block;
		height: calc(6 * 2 * var(--spacing));
		position: relative;
		width: calc(6 * 2 * var(--spacing));
	}
	.checkbox input[type="checkbox"]:checked:before {
		border-right-width: 3px;
		border-bottom-width: 3px;
		left: calc(1.5 * 2 * var(--spacing) - 2px);
		top: calc(2.85 * 2 * var(--spacing) - 2px);
		transform: rotate(40deg) translate(-50%, -50%);
		background-color: transparent;
		border-width: 0px 3px 3px 0px;
		border-color: white;
		border-radius: 1px;
		border-style: solid;
		height: calc(3 * 2 * var(--spacing));
		width: calc(1.5 * 2 * var(--spacing));
	}
	.checkbox input[type="checkbox"]:indeterminate:before {
		background-color: var(--kolibri-color-normal);
		height: 0.375rem;
		top: 0.45rem;
		left: 0.15rem;
		width: calc(4 * 2 * var(--spacing));
	}
	.switch input[type="checkbox"] {
		/* border-radius: 0.25em; */
		min-width: 3.2em;
		width: 3.2em;
		height: 1.7em;
		display: inline-block;
		position: relative;
	}
	.switch input[type="checkbox"]:before {
		/* border-radius: 0.25em; */
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-ms-transition: 0.5s;
		transition: 0.5;
		width: 1.2em;
		height: 1.2em;
		left: calc(0.25em - 2px);
		top: calc(0.25em - 2px);
		background-color: black;
		position: absolute;
	}
	.switch input[type="checkbox"]:checked:before {
		-webkit-transform: translateX(1.5em);
		-moz-transform: translateX(1.5em);
		-ms-transform: translateX(1.5em);
		transform: translateX(1.5em);
		background-color: white;
	}
	.switch input[type="checkbox"]:indeterminate:before {
		-webkit-transform: translateX(0.75em);
		-moz-transform: translateX(0.75em);
		-ms-transform: translateX(0.75em);
		transform: translateX(0.75em);
		background-color: var(--color-petrol);
	}
	.disabled {
		opacity: 0.33;
	}
	.checkbox kol-icon,
	.switch kol-icon {
		display: none;
	}
	kol-input span.hint {
		grid-column: span 2;
		font-style: italic;
		color: gray;
		display: block;
		order: 3;
		padding: 0 var(--spacing);
	}`,"KOL-INPUT-RADIO":`/* INPUT */
	:host input:focus {
		outline-color: var(--color-achat) !important;
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 3px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
	}
	input {
		width: 100%;
		color: var(--color-anthrazit);
		border-color: var(--default-border);
		border-width: 2px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 16px;
	}
	input:hover {
		border-color: var(--color-achat);
	}
	kol-alert {
		display: block;
		width: 100%;
	}
	.kol-required span::after {
		content: "*";
	} /* RADIO */
	fieldset {
		border: 0px;
		margin: 0px;
		padding: 0px;
		display: grid;
		gap: 0.25em;
	}
	fieldset legend {
		display: block;
		width: 100%;
		line-height: 1.5em;
	}
	fieldset div {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		margin-top: 0.25em;
		margin-bottom: 0.25em;
		align-items: center;
		position: relative;
	}
	fieldset div label {
		cursor: pointer;
		display: flex;
		width: 100%;
	}
	fieldset div label span {
		margin-top: 0.125em;
	}
	fieldset div input[type="radio"] {
		appearance: none;
		transition: 0.5s;
		border-radius: 100%;
		height: calc(6 * 2 * var(--spacing));
		min-width: calc(6 * 2 * var(--spacing));
		width: calc(6 * 2 * var(--spacing));
	}
	fieldset div input[type="radio"]:before {
		content: "";
		cursor: pointer;
		left: calc(1.5 * 2 * var(--spacing) - 2px);
		top: calc(1.5 * 2 * var(--spacing) - 2px);
		position: relative;
		border-radius: 100%;
		display: block;
		height: calc(3 * 2 * var(--spacing));
		width: calc(3 * 2 * var(--spacing));
	}
	fieldset div input[type="radio"]:checked:before {
		box-shadow: 0 0 0.1rem black;
		background-color: var(--color-petrol);
	}
	fieldset div input[type="radio"]:disabled {
		background-color: var(--color-input-bg-default);
		border-color: #999;
		cursor: not-allowed;
	}`,"KOL-TOAST":`:host > div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		z-index: 200;
	}
	:host > div > kol-alert {
		display: block;
		margin: auto;
		padding: 1rem;
		max-width: 750px;
	}
	:host > div > kol-button-wc {
		top: 0;
		position: relative;
		display: block;
		margin: auto;
		width: 1em;
	}`,"KOL-TABS":`:host > div {
		display: block;
		width: 100%;
	}
	:host kol-button-group-wc {
		display: flex;
		background-color: var(--color-petrol);
	}
	:host kol-button-group-wc > div {
		display: inline-flex;
	}
	:host kol-button-group-wc > div + div {
		margin-left: 0.25em;
	}
	:host > div > div {
		padding: 0.25em;
		border: 1px solid var(--border-color);
	}
	button {
		box-sizing: border-box;
		font-size: inherit;
		line-height: 1.25em;
		cursor: pointer;
		border-width: 2px;
		box-shadow: 0 0 0.25em gray;
		width: inherit;
		overflow: hidden;
		border-style: solid;
		padding: calc(4 * var(--spacing));
		display: grid;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
		text-align: center;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
	}
	kol-button-wc button.selected,
	kol-button-wc[aria-selected="true"] button {
		background-color: white;
		border-bottom-width: 0.25em !important;
		border-bottom-style: solid;
		border-bottom-color: var(--color-citrin) !important;
	}
	button > kol-span-wc span {
		display: flex;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
	}
	button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	button.primary,
	button.primary:disabled:hover {
		background-color: var(--kolibri-color-primary);
		border-color: var(--kolibri-color-primary);
		color: white;
	}
	button.primary:hover,
	button.primary:focus {
		color: var(--kolibri-color-primary);
	}
	button.secondary,
	button.secondary:disabled:hover {
		background-color: var(--kolibri-color-secondary);
		border-color: var(--kolibri-color-secondary);
		color: white;
	}
	button.secondary:hover,
	button.secondary:focus {
		color: var(--kolibri-color-secondary);
	}
	button.normal,
	button.normal:disabled:hover {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: white;
	}
	button.normal:hover,
	button.normal:focus {
		color: var(--color-petrol);
	}
	button.danger,
	button.danger:disabled:hover {
		background-color: var(--kolibri-color-danger);
		border-color: var(--kolibri-color-danger);
		color: white;
	}
	button.danger:hover,
	button.danger:focus {
		color: var(--kolibri-color-danger);
	}
	button.ghost,
	button.ghost:disabled:hover {
		background-color: white;
		border-color: var(--kolibri-color-ghost);
		color: var(--kolibri-color-ghost);
	}
	button.ghost:hover,
	button.ghost:focus {
		background-color: var(--kolibri-color-ghost);
		color: white;
	}
	button:hover,
	button:focus {
		background-color: white;
		box-shadow: 0 0 0.25em black;
	}
	button:active {
		outline: 0 !important;
		box-shadow: none !important;
	}
	.close-button {
		font-size: 25%;
		height: fit-content;
		width: 0;
	}
	.close-button button {
		width: 1rem;
		position: relative;
		height: 1rem;
		left: -4.25em;
		top: 0.25em;
	}
	:host > div {
		display: grid;
	}
	:host > div.tabs-align-left {
		grid-template-columns: auto 1fr;
	}
	:host > div.tabs-align-right {
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-bottom kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		order: 1;
	}
	:host > div.tabs-align-left kol-button-group-wc > div,
	:host > div.tabs-align-left kol-button-group-wc > div > div,
	:host > div.tabs-align-right kol-button-group-wc > div,
	:host > div.tabs-align-right kol-button-group-wc > div > div {
		display: grid;
	}
	:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
	:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
		width: 100%;
	}
	:host > div.tabs-align-bottom kol-button-group-wc div,
	:host > div.tabs-align-top kol-button-group-wc div {
		display: flex;
		flex-wrap: wrap;
	}`});$o.createTheme("desy-v1",{GLOBAL:`:host {
		--color-primary: #326cae;
		--color-primary-10: #1e538f;
		--color-primary-20: #08335e;
		--color-yellow-neutral: #ef9e48;
		--color-dark-yellow-neutral: #a8672c;
		--color-warning: #a94442;
		--color-success: #5cb85c;
		--color-background: #edf4f7;
		--color-black: #000000;
		--color-gray-10: #333333;
		--color-gray-20: #666666;
		--color-gray-30: #737373;
		--color-gray-40: #999999;
		--color-gray-50: #b3b3b3;
		--color-gray-60: #dddddd;
		--color-gray-70: #f2f2f2;
		--color-white: #ffffff;
		--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;
		--font-size: 14px;
		--spacing: 0.25em;
	}
	:host {
		color: var(--color-black);
	}
	:host * {
		box-sizing: border-box;
		font-family: var(--font-family);
	}
	:host h1,
	:host h2,
	:host h3,
	:host h4,
	:host h5,
	:host h6 {
		margin: 0;
		font-family: var(--font-family);
	}
	a,
	button {
		align-items: center;
		background-color: transparent;
		border: 0;
		color: black;
		cursor: pointer;
		display: inline-flex;
		gap: 0.25rem;
		justify-items: center;
	}
	input,
	option,
	select,
	summary,
	textarea {
		display: inline-block;
	}
	a,
	button,
	input,
	option,
	select,
	summary,
	textarea {
		-ms-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		letter-spacing: inherit;
		word-break: break-word;
	}
	*[tabindex]:focus,
	a:focus,
	button:focus,
	input:focus,
	select:focus,
	summary:focus,
	textarea:focus {
		cursor: pointer;
		outline-color: var(--color-ocean);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 0;
		transition: outline-offset 0.2s linear;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	kol-heading-wc {
		font-weight: 700;
	}`,"KOL-BUTTON":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
	}
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		min-width: 44px;
		min-height: 44px;
		padding: 0;
		text-decoration: none !important;
	}
	button > kol-span-wc {
		display: grid;
		gap: 0.25em;
		line-height: 1.5rem;
		font-family: Roboto;
		font-weight: 700;
		cursor: pointer;
		font-size: 1rem;
		align-items: center;
		padding: 6px 8px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		outline: none;
		border-style: solid;
		border-width: 2px;
	}
	button:active > kol-span-wc {
		transform: translateY(1px);
	}
	button.primary:disabled > kol-span-wc,
	button.danger:disabled > kol-span-wc,
	button.normal:disabled > kol-span-wc {
		cursor: not-allowed;
		color: var(--color-white);
		background-color: var(--color-gray-40);
		border-color: var(--color-gray-40);
	}
	button.ghost:disabled > kol-span-wc,
	button.loading:disabled > kol-span-wc,
	button.help:disabled > kol-span-wc,
	button.secondary:disabled > kol-span-wc {
		cursor: not-allowed;
		color: var(--color-gray-40);
		background-color: var(--color-white);
		border-color: var(--color-white);
	}
	button.primary > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:hover > kol-span-wc {
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--color-white);
	}
	button.loading > kol-span-wc,
	button.loading:hover > kol-span-wc,
	button.help > kol-span-wc,
	button.help:hover > kol-span-wc,
	button.secondary > kol-span-wc,
	button.secondary:hover > kol-span-wc {
		background-color: var(--color-white);
		border-color: var(--color-primary);
		color: var(--color-primary);
	}
	button.danger > kol-span-wc,
	button.danger:hover > kol-span-wc {
		background-color: var(--color-warning);
		border-color: var(--color-warning);
		color: var(--color-white);
	}
	button.ghost,
	button.ghost:hover > kol-span-wc {
		background-color: transparent;
		border-color: transparent;
		color: var(--color-primary);
	}
	button.primary:active > kol-span-wc,
	button.primary:focus > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.loading:active > kol-span-wc,
	button.loading:focus > kol-span-wc,
	button.loading:hover > kol-span-wc,
	button.help:active > kol-span-wc,
	button.help:focus > kol-span-wc,
	button.help:hover > kol-span-wc,
	button.secondary:active > kol-span-wc,
	button.secondary:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.normal:active > kol-span-wc,
	button.normal:focus > kol-span-wc,
	button.normal:hover > kol-span-wc {
		background-color: var(--color-primary-20);
		border-color: var(--color-primary-20);
		color: var(--color-white);
		outline: none;
	}
	button.loading:active > kol-span-wc,
	button.loading:focus > kol-span-wc,
	button.loading:hover > kol-span-wc,
	button.help:active > kol-span-wc,
	button.help:focus > kol-span-wc,
	button.help:hover > kol-span-wc,
	button.secondary:active > kol-span-wc,
	button.secondary:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc {
		border-color: var(--color-primary-20);
	}
	button.danger:active > kol-span-wc,
	button.danger:hover > kol-span-wc {
		background-color: var(--color-dark-yellow-neutral);
		border-color: var(--color-dark-yellow-neutral);
		color: var(--color-white);
		outline: none;
	}
	button.ghost:active > kol-span-wc,
	button.ghost:hover > kol-span-wc {
		color: var(--color-primary);
		outline: none;
	}
	button > kol-span-wc > span {
		display: flex;
		gap: 0.5em;
		margin: auto;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.75px;
	}
	button.icon-only > kol-span-wc {
		padding: 8px;
	}
	button.icon-only > kol-span-wc > span > span {
		display: none;
	}
	button.icon-only > kol-span-wc kol-icon {
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
	}
	button.loading > kol-span-wc kol-icon {
		animation: spin 5s infinite linear;
	}
	button.loading > kol-span-wc,
	button.help > kol-span-wc {
		display: inline-block;
		padding: 0;
	}`,"KOL-BADGE":`:host {
		display: inline-block;
	}
	kol-span-wc {
		align-items: center;
		border-radius: 0.3125rem;
		display: grid;
		gap: 0.5rem;
		line-height: 1.25rem;
		padding: 0.25rem 0.75rem;
	}
	kol-span-wc span {
		display: flex;
		gap: 0.25rem;
	}`,"KOL-HEADING":`h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: inherit;
		font-style: normal;
		margin: 0;
		padding: 0;
	}
	h1,
	h2,
	h3 {
		font-weight: 700;
	}
	h1 {
		font-size: 1.5rem;
		line-height: 3.25rem;
	}
	h2 {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	h3 {
		font-size: 1.125rem;
		line-height: 1.5rem;
	}`,"KOL-ACCORDION":`:host > div {
		font-family: var(--font-family);
		font-size: var(--font-size);
		padding: 0 0.5rem 0 0;
	}
	:host > div > kol-heading-wc {
		background-color: var(--color-background);
		color: var(--color-gray-10);
		line-height: 1.75rem;
		padding: 16px;
	}
	:host > div > kol-heading-wc:focus-within,
	:host > div > kol-heading-wc:hover {
		box-shadow: 0px 0px 0px 2px var(--color-primary) inset;
		outline: none;
	}
	:host > div > kol-heading-wc button {
		cursor: pointer;
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		gap: 2em;
		border: 0;
		align-items: center;
		overflow: hidden;
		font-size: inherit;
		font-weight: normal;
		line-height: 1.75em;
		background-color: transparent;
		padding: 0;
		outline: none;
	}
	:host > div[part*="open"] > kol-heading-wc button {
		padding-bottom: 0;
	}
	:host > div > kol-heading-wc button kol-icon::part(icon) {
		font-weight: 900;
		font-size: 26px;
		color: var(--color-black);
	}
	:host > div > kol-heading-wc button kol-icon::part(close)::before {
		font-family: "Font Awesome 6 Free";
		font-size: 14px;
		content: "\f077";
	}
	:host > div > kol-heading-wc button kol-icon::part(open)::before {
		font-family: "Font Awesome 6 Free";
		font-size: 14px;
		content: "\f078";
	}
	:host > div {
		width: 100%;
		height: 100%;
		display: grid;
	}
	:host > div div[part="content"] {
		transition: height 200ms;
	}
	:host > div div[part="header"],
	:host > div[part*="open"] div[part="content"] {
		margin: 0;
		background-color: var(--color-white);
	}
	:host > div div[part="header"] {
		padding: 0 1em;
	}
	:host > div[part*="open"] div[part="content"] {
		padding: 1em;
	}
	button {
		font-weight: inherit;
		font-size: inherit;
		line-height: inherit;
	}
	:host > div {
		background: var(--color-white);
	}
	:host > div[part*="open"] {
		padding-bottom: 1em;
	}`,"KOL-ALERT":':host > div {background-color: white;// border-width: 2px;// border-style: solid;display: flex;overflow: unset;}:host > div.default {border-color: var(--color-gray-30);}:host > div.default > .icon {background-color: var(--color-gray-30);}:host > div.error {border-color: var(--color-warning);}:host > div.error > .icon {background-color: var(--color-warning);}:host > div.info {border-color: var(--color-primary);}:host > div.info > .icon {background-color: var(--color-primary);}:host > div.success {border-color: var(--color-success);}:host > div.success > .icon {background-color: var(--color-success);}:host > div.warning {border-color: var(--color-yellow-neutral);}:host > div.warning > .icon {background-color: var(--color-yellow-neutral);}:host > div.msg > .icon {color: white;padding: 0.5em;align-items: center;display: inline-flex;}:host > div.card {border-width: 2px;border-style: solid;}:host > div.card.default .heading .icon {background-color: var(--color-gray-30);}:host > div.card.error .heading .icon {background-color: var(--color-warning);}:host > div.card.info .heading .icon {background-color: var(--color-primary);}:host > div.card.success .heading .icon {background-color: var(--color-success);}:host > div.card.warning .heading .icon {background-color: var(--color-yellow-neutral);}:host > div.card .heading .icon {color: white;padding: 0.5em;align-items: center;display: inline-flex;}:host > div kol-heading-wc .icon {margin-right: 0.5em;}:host > div.card .heading .icon {border-radius: 0 0 0.25rem 0;}:host > div.msg > div {padding: 0.25em;}:host > div.msg > div > .heading {padding: 0.25em;display: inline-block;}:host > div .content {padding: 0.25em;}:host > div > div {display: grid;grid-template-columns: 1fr auto;}:host > div > div > .content {grid-row: 2;grid-column: 1;}:host > div > div > .close {grid-row: 1 / span 2;}:host > div.card > div > .heading {width: 100%;}.close > button {min-width: 44px;min-height: 44px;display: grid;gap: 0.25em;line-height: 1.5rem;font-family: var(--font-family);font-weight: 700;cursor: pointer;border-radius: 1.5em;border-style: solid;border-width: 2px;font-size: 1rem;align-items: center;padding: 8px 14px;justify-content: center;font-style: normal;text-align: center;text-transform: uppercase;width: inherit;transition-duration: 0.5s;transition-property: background-color, color, border-color;background-color: rgba(0, 0, 0, 0);border-color: rgba(0, 0, 0, 0);}.close > button.icon-only {padding: 8px;}.close > button.icon-only kol-icon {display: inline-block;width: 1.5em;height: 1.5em;}.close > button:active {box-shadow: none;outline: none;}.close kol-icon::part(icon)::before {content: "x";color: var(--color-primary);font-family: "Font Awesome 6 Free";}',"KOL-CARD":`/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */
	:host > div {
		display: grid;
		width: 100%;
		height: 100%;
		background-color: var(--color-background);
		grid-template-rows: min-content 2fr min-content;
		box-shadow: 0 0 0.25rem var(--color-grey);
		padding: 8px;
	}
	:host kol-heading-wc {
		display: inline-flex;
		font-style: normal;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host div.content {
		padding-top: 1em;
	}
	:host div.footer {
		padding-top: 1em;
	}`,"KOL-INDENTED-TEXT":`:host > div {
		padding: 0.25em 0.5em;
		width: 100%;
	}
	:host > div {
		background: var(--color-white);
		border: 0;
		box-shadow: -4px 0px 0px var(--color-primary);
	}`,"KOL-DETAILS":`:host details > kol-indented-text {
		margin: 0.25em 0 0 0.5em;
	}`,"KOL-LINK-GROUP":`ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	nav.horizontal ul {
		display: flex;
		flex-wrap: wrap;
	}
	nav.horizontal li {
		margin-left: 1.25rem;
		margin-right: 0.25rem;
	}
	nav.horizontal li:first-child {
		margin-left: 0;
	}
	nav.horizontal li:last-child {
		margin-right: 0;
	}
	nav.vertical li {
		margin-left: 1.75rem;
		margin-right: 0.5rem;
	}
	li.list-none {
		list-style-type: none !important;
		margin-left: 0;
	}`,"KOL-PROGRESS":`:host progress,
	:host span {
		display: block;
		height: 0px;
		overflow: hidden;
		width: 0px;
	}
	svg line:first-child,
	svg circle:first-child {
		fill: transparent;
		stroke: var(--color-gray-60);
	}
	svg line:last-child,
	svg circle:last-child {
		stroke: var(--color-primary);
		fill: transparent;
	}
	progress {
		display: none;
	}`,"KOL-SPIN":`.spin {
		display: inline-block;
		height: 1rem;
		position: relative;
		width: 3rem;
	}
	.spin span {
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		border: 0.1rem solid rgb(255, 255, 255);
		border-radius: 50%;
		height: 0.8rem;
		width: 0.8rem;
		top: 0.1rem;
		position: absolute;
	}
	.spin span:nth-child(1) {
		background-color: #fc0;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin1;
		left: 0.1rem;
	}
	.spin span:nth-child(2) {
		background-color: #f00;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 0.1rem;
	}
	.spin span:nth-child(3) {
		background-color: #000;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 1.1rem;
	}
	.spin span:nth-child(4) {
		background-color: #666;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin3;
		left: 2.1rem;
	}
	@keyframes spin1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes spin2 {
		0% {
			transform: translate(0px, 0px);
		}
		100% {
			transform: translate(1rem, 0px);
		}
	}
	@keyframes spin3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}`,"KOL-TABLE":`:host * {
		hyphens: var(--kolibri-hyphens);
		font-family: var(--kolibri-font-family);
		line-height: var(--kolibri-line-height);
		word-break: break-word;
	}
	:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	table {
		width: 100%;
		border-spacing: 0;
		border-collapse: collapse;
	}
	th,
	td {
		padding: 0.25em 0.5em;
	}
	th {
		background-color: var(--color-gray-70);
	}
	th > div {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 0.25em;
	}
	:host > div:last-child {
		padding: 0.5em;
	}
	tbody > tr:nth-child(even) {
		background-color: var(--color-gray-70);
	}
	:host > div:last-child,
	:host > div:last-child > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 0.5em;
	}
	@media (min-width: 1024px) {
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			grid-auto-flow: column;
		}
		:host > div:last-child kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,"KOL-TABS":`button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	kol-button-group > div {
		margin: 0 1rem;
	}
	kol-button-group > div:first-child {
		margin-left: 0;
	}
	kol-button-group > div:last-child {
		margin-right: 0;
	}
	kol-button-group > div {
		margin: 0;
	}
	button {
		background-color: transparent;
		border: 0;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;
		color: var(--color-primary);
		padding: 0.3em 1em;
		box-shadow: inset 0px -3px 0 0 var(--color-gray-70);
	}
	button:enabled {
		box-shadow: inset 0px -3px 0 0 var(--color-primary-10);
	}
	button:hover {
		color: var(--color-midnight);
	}
	button.primary {
		text-underline-offset: 5px;
		text-decoration-thickness: 0.25em;
		font-weight: bold;
		color: var(--color-gray-10);
		box-shadow: inset 0px -3px 0 0 var(--color-gray-70),
			inset 0px -6px 0 0 var(--color-primary-10);
	}
	button:hover,
	button:focus {
		color: var(--color-gray-10);
		box-shadow: inset 0px -6px 0 0 var(--color-primary-10);
		outline: none;
	}
	button:not(.primary) {
		cursor: pointer;
	}
	:host > div > div {
		padding: 0.25em 0;
	}
	.close-button {
		display: none;
		font-size: 25%;
		height: fit-content;
		width: 0;
	}
	.close-button button {
		width: 1rem;
		position: relative;
		height: 1rem;
		left: -4.25em;
		top: 0.25em;
	}
	div[role="tabpanel"] {
		height: 100%;
	}
	div.grid {
		height: 100%;
	}
	div.grid {
		height: 100%;
	}
	:host > .tabs-align-right {
		display: grid;
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-right kol-button-group-wc {
		display: grid;
		order: 2;
	}
	:host > .tabs-align-left {
		display: grid;
		grid-template-columns: auto 1fr;
	}
	:host > .tabs-align-left kol-button-group-wc {
		display: grid;
		order: 0;
	}
	:host > .tabs-align-bottom {
		display: grid;
		grid-template-rows: 1fr auto;
	}
	:host > .tabs-align-bottom kol-button-group-wc {
		order: 2;
	}
	:host > .tabs-align-bottom kol-button-group-wc > div {
		display: flex;
	}
	:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {
		margin: 0px 1em 0px 0px;
	}
	:host > .tabs-align-bottom > kol-button-group-wc > div > div {
		margin: 0px 1em;
	}
	:host > .tabs-align-top {
		display: grid;
		grid-template-rows: auto 1fr;
	}
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-top kol-button-group-wc > div {
		display: flex;
	}
	:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {
		margin: 0px 1em 0px 0px;
	}
	:host > .tabs-align-top > kol-button-group-wc > div > div {
		margin: 0px 1em;
	}
	:host > div {
		display: grid;
	}
	:host > div.tabs-align-left {
		grid-template-columns: auto 1fr;
	}
	:host > div.tabs-align-right {
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-bottom kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		order: 1;
	}
	:host > div.tabs-align-left kol-button-group-wc > div,
	:host > div.tabs-align-left kol-button-group-wc > div > div,
	:host > div.tabs-align-right kol-button-group-wc > div,
	:host > div.tabs-align-right kol-button-group-wc > div > div {
		display: grid;
	}
	:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
	:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
		width: 100%;
	}
	:host > div.tabs-align-bottom kol-button-group-wc div,
	:host > div.tabs-align-top kol-button-group-wc div {
		display: flex;
		flex-wrap: wrap;
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: 1rem;
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5em;
	}
	:host kol-button-wc.selected button {
		min-width: 44px;
		min-height: 44px;
		display: grid;
		gap: 0.25em;
		line-height: 1.5rem;
		font-weight: 700;
		cursor: default;
		font-size: 1rem;
		align-items: center;
		padding: 0px 7px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		outline: none;
		color: var(--color-white);
		border: unset;
		background-color: var(--color-primary);
	}
	:host kol-button-wc.selected button:focus,
	:host kol-button-wc.selected button:hover {
		background-color: var(--color-primary-20);
	}`,"KOL-LINK":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
	}
	kol-link-wc,
	kol-link-button-wc {
		display: inline-block;
	}
	a,
	button {
		color: var(--color-primary);
		font-style: normal;
		font-weight: 400;
		display: inline-flex;
		line-height: 1.5em;
		text-decoration-line: none !important;
		outline: none !important;
	}
	a:focus-within,
	a:hover,
	button:focus-within,
	button:hover {
		box-shadow: inset 0 -1px 0 0 var(--color-primary);
	}
	kol-icon {
		padding: 0 0.25em;
		display: inline-block;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`,"KOL-INPUT-TEXT":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-CHECKBOX":`/* INPUT */
	kol-input {
		display: grid;
		align-items: center;
		justify-items: left;
		width: 100%;
		min-height: 44px;
	}
	kol-input.checkbox {
		grid-template-columns: 2rem auto;
	}
	kol-input.switch {
		grid-template-columns: 4rem auto;
	}
	kol-input > div.input {
		display: inline-flex;
		order: 1;
	}
	kol-input > div.input input {
		margin: 0px;
	}
	kol-input > label {
		cursor: pointer;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
		padding-top: 0.25em;
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		grid-column: span 2 / auto;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning) !important;
		box-shadow: 0 0 0 1px var(--color-warning) inset;
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	input {
		cursor: pointer;
		order: 1;
		width: 100%;
		border-color: var(--color-gray-30);
		border-width: 1px;
		border-style: solid;
		line-height: 24px;
		font-size: 1rem;
	}
	input:focus,
	input:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus:hover {
		box-shadow: none;
	}
	input:active {
		box-shadow: none;
	}
	kol-alert {
		display: block;
		width: 100%;
	} /* CHECKBOX */
	kol-input label span {
		margin-top: 0.125rem;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	kol-input input[type="checkbox"] {
		appearance: none;
		background-color: white;
		cursor: pointer;
		transition: 0.5s;
	}
	kol-input input[type="checkbox"].kol-disabled:before {
		cursor: not-allowed;
	}
	kol-input input[type="checkbox"]:before {
		content: "";
		cursor: pointer;
	}
	kol-input input[type="checkbox"]:checked {
		background-color: var(--color-primary-20);
		border-color: var(--color-primary-20);
	}
	kol-input.checkbox input[type="checkbox"] {
		width: 1rem;
		height: 1rem;
	}
	kol-input.checkbox input[type="checkbox"]:before {
		background-color: transparent;
		display: block;
		height: calc(2 * var(--spacing));
		position: relative;
		width: calc(2 * var(--spacing));
	}
	kol-input.checkbox input[type="checkbox"]:checked:before {
		border-right-width: 1px;
		border-bottom-width: 1px;
		left: calc(1.2 * var(--spacing) - 2px);
		top: calc(2.2 * var(--spacing) - 2px);
		transform: rotate(40deg) translate(-50%, -50%);
		background-color: transparent;
		border-width: 0px 3px 3px 0px;
		border-color: white;
		border-radius: 1px;
		border-style: solid;
		height: calc(2 * var(--spacing));
		width: calc(1 * var(--spacing));
	}
	kol-input.checkbox input[type="checkbox"]:indeterminate {
		--tw-bg-opacity: 1;
		background-color: white;
	}
	kol-input.checkbox input[type="checkbox"]:indeterminate:before {
		background-color: var(--color-gray-30);
		height: 0.2rem;
		top: 0.35rem;
		left: 0.15rem;
		width: calc(2.5 * var(--spacing));
	}
	kol-input.switch input[type="checkbox"] {
		min-width: 3.5em;
		width: 3.5em;
		background-color: var(--color-gray-30);
		border-width: 0;
		height: 1.5em;
		border-radius: 1.25em;
		display: inline-block;
		position: relative;
	}
	kol-input.switch input[type="checkbox"]:before {
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-ms-transition: 0.5s;
		transition: 0.5;
		width: 1.25em;
		height: 1.25em;
		left: calc(0.25em - 2px);
		top: calc(0.25em - 2px);
		border-radius: 1.25em;
		background-color: white;
		position: absolute;
	}
	kol-input.switch input[type="checkbox"]:checked {
		background-color: var(--color-primary-20);
	}
	kol-input.switch input[type="checkbox"]:checked:before {
		-webkit-transform: translateX(2em);
		-moz-transform: translateX(2em);
		-ms-transform: translateX(2em);
		transform: translateX(2em);
		--tw-bg-opacity: 1;
	}
	kol-input.switch input[type="checkbox"]:indeterminate {
		--tw-bg-opacity: 1;
	}
	kol-input.switch input[type="checkbox"]:indeterminate:before {
		-webkit-transform: translateX(1em);
		-moz-transform: translateX(1em);
		-ms-transform: translateX(1em);
		transform: translateX(1em);
	}
	.disabled {
		opacity: 0.33;
	}`,"KOL-INPUT-RADIO":`/* INPUT */
	label {
		cursor: pointer;
		display: grid;
		line-height: 20px;
		gap: 8px;
		width: 100%;
	}
	input {
		cursor: pointer;
		width: 100%;
		border-color: var(--color-grey-20);
		border-width: 1px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 16px;
	}
	:host fieldset div input[type="radio"]:hover {
		border-color: var(--color-midnight);
		box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
	}
	:host fieldset div input[type="radio"]:focus:hover {
		box-shadow: none;
	}
	:host fieldset div input[type="radio"]:active {
		box-shadow: none;
	}
	kol-alert {
		display: block;
		width: 100%;
		margin-bottom: 0.4em;
	}
	.required legend > span::after {
		content: "*";
		padding-left: 0.125em;
	} /* RADIO */
	:host fieldset {
		border: 0px;
		margin: 0px;
		padding: 0px;
		display: grid;
		gap: 0.25em;
	}
	:host fieldset div {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		min-height: 44px;
	}
	:host fieldset div label {
		cursor: pointer;
		display: flex;
		padding-left: 0.25em;
		width: 100%;
	}
	:host fieldset div label span {
		margin-top: 0.125em;
	}
	:host fieldset div input[type="radio"] {
		appearance: none;
		transition: 0.5s;
		border-radius: 100%;
		height: 1rem;
		min-width: 1rem;
		width: 1rem;
	}
	:host fieldset div input[type="radio"]:before {
		content: "";
		cursor: pointer;
		left: calc(1 * var(--spacing) - 1px);
		top: calc(1 * var(--spacing) - 1px);
		position: relative;
		border-radius: 100%;
		display: block;
		height: calc(2 * var(--spacing));
		width: calc(2 * var(--spacing));
	}
	:host fieldset div input[type="radio"]:checked:before {
		background-color: var(--color-primary-20);
	}
	:host fieldset div input[type="radio"]:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
		background-color: var(--background-light-grey);
	}
	:host fieldset #error {
		order: 3;
	}
	:host fieldset legend {
		order: 1;
		display: contents;
	}
	:host fieldset kol-input {
		order: 2;
	}
	:host fieldset kol-alert#error {
		padding-left: 0.5em;
		color: var(--color-warning);
	}
	fieldset.error input:focus,
	fieldset.error select:focus,
	fieldset.error textarea:focus {
		border-color: var(--color-warning) !important;
		box-shadow: 0 0 0 1px var(--color-warning) inset;
	}
	:host fieldset.error kol-alert.error {
		margin-left: -0.25em;
		color: var(--color-warning);
	}
	.disabled {
		opacity: 0.33;
	}
	:host fieldset.horizontal {
		display: flex;
		flex-wrap: wrap;
	}
	:host fieldset.horizontal legend {
		display: inline-block;
		margin-bottom: 0.25em;
	}`,"KOL-SELECT":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-TEXTAREA":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-PASSWORD":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-NUMBER":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-EMAIL":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-FILE":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-COLOR":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-RANGE":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-NAV":`/* :host * {hyphens: var(--hyphens);font-family: var(--font-family);line-height: var(--line-height);word-break: break-word;} */
	:host .hidden {
		display: none;
	}
	:host > div > nav ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
		border-radius: var(--border-radius);
		background-color: var(--color-primary);
	}
	:host > div > nav ul > li {
		border-radius: var(--border-radius);
		overflow: hidden;
		padding: 0.125em;
	}
	:host > div > nav ul > li[part*="vertical"] + li {
		border-radius: 0;
		border-top: 0.1em dotted white;
	}
	:host > div > nav ul > li[part*="vertical selected"] {
		border-right: 0.375em solid var(--color-yellow-neutral);
	}
	:host > div > nav ul > li[part*="horizontal"] + li {
		border-radius: 0;
		border-left: 0.1em dotted white;
	}
	:host > div > nav ul > li[part*="horizontal selected"] {
		border-bottom: 0.375em solid var(--color-yellow-neutral);
	}
	:host > div > nav ul > li > div {
		height: 100%;
	}
	:host > div > nav kol-link-wc {
		width: 100%; /*height: 100%;font-weight: 600;*/
		display: block;
	}
	:host > div > nav kol-link-wc a {
		border-radius: var(--border-radius);
		background-color: var(--color-primary);
		border: 1px solid transparent;
		grid: flex;
		line-height: 2em;
		padding: 0.5em;
		color: white;
		height: 100%;
		-webkit-box-align: center;
		align-items: center;
		display: flex;
		cursor: pointer;
		text-decoration: inherit;
	}
	:host > div > nav kol-link-wc[exportparts*="selected"] a {
		background-color: var(--color-primary-20);
		font-weight: 700;
	}
	:host > div > nav kol-link-wc a kol-icon.mr-2 {
		margin-right: calc(2 * var(--spacing));
	}
	:host > div > nav kol-link-wc a kol-icon.ml-2 {
		margin-left: calc(2 * var(--spacing));
	}
	:host > div > nav kol-link-wc a:focus,
	:host > div > nav kol-link-wc a:hover {
		border: 1px solid white;
		background-color: var(--kolibri-color-focus);
	} /* compact button */
	:host > div > div:last-child {
		margin-top: 0.5em;
		width: 100%;
		text-align: center;
	}
	:host > div > nav kol-link-wc a.text-center {
		display: grid;
		align-items: center;
		justify-items: center;
	} /* horizontal */
	ul.flex {
		display: flex;
	}
	li > div > div.absolute {
		position: absolute;
	}
	kol-span-wc {
		justify-items: baseline;
	}`,"KOL-BREADCRUMB":`nav {
		width: 100%;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	kol-link {
		display: inline;
	}
	:host kol-icon[exportparts*="separator"] {
		padding: 0 0.5rem;
	}
	:host kol-icon::part(icon separator) {
		font-weight: 900;
		font-size: 0.875rem;
	}
	:host kol-icon::part(icon separator)::before {
		color: black;
		content: "\f054";
		font-family: "Font Awesome 6 Free";
	}
	:host li > kol-link > kol-link-wc > a {
		color: red !important;
	}`,"KOL-TOAST":`:host > div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		z-index: 200;
	}
	:host > div > kol-alert {
		display: block;
		margin: auto;
		padding: 1rem;
		max-width: 750px;
	}
	:host > div > kol-button-wc {
		top: 0;
		position: relative;
		display: block;
		margin: auto;
		width: 1em;
	}`,"KOL-LINK-BUTTON":`a {
		min-width: 44px;
		min-height: 44px;
		background-color: transparent;
		border: 0;
		cursor: pointer;
		padding: 0;
		display: flex;
		gap: 0.25rem;
		justify-items: center;
		align-items: center;
		text-decoration: none !important;
	}
	a > kol-span-wc {
		display: grid;
		min-width: 44px;
		min-height: 44px;
		gap: 0.25em;
		line-height: 1.5rem;
		font-family: Roboto;
		font-weight: 700;
		cursor: pointer;
		font-size: 1rem;
		align-items: center;
		padding: 0px 7px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		border: none;
		outline: none;
	}
	a:active > kol-span-wc {
		transform: translateY(1px);
	}
	.primary a:disabled > kol-span-wc,
	.danger a:disabled > kol-span-wc,
	.normal a:disabled > kol-span-wc {
		cursor: not-allowed;
		color: var(--color-white);
		background-color: var(--color-gray-40);
	}
	.ghost a:disabled > kol-span-wc,
	.loading a:disabled > kol-span-wc,
	.secondary a:disabled > kol-span-wc {
		cursor: not-allowed;
		color: var(--color-gray-40);
		background-color: var(--color-white);
		border: var(--color-gray-40) solid 3px;
	}
	.primary a > kol-span-wc,
	.primary a:hover > kol-span-wc,
	.normal a > kol-span-wc,
	.normal a:hover > kol-span-wc {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.loading a > kol-span-wc,
	.loading a:hover > kol-span-wc,
	.secondary a > kol-span-wc,
	.secondary a:hover > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-primary);
		border: 2px solid var(--color-primary);
	}
	.danger a > kol-span-wc,
	.danger a:hover > kol-span-wc {
		background-color: var(--color-warning);
		border-color: var(--color-warning);
		color: var(--color-white);
		box-shadow: unset;
	}
	.ghost a,
	.ghost a:hover > kol-span-wc {
		background-color: unset;
		color: var(--color-primary);
		box-shadow: unset;
	}
	.primary a:active > kol-span-wc,
	.primary a:focus > kol-span-wc,
	.primary a:hover > kol-span-wc,
	.loading a:active > kol-span-wc,
	.loading a:focus > kol-span-wc,
	.loading a:hover > kol-span-wc,
	.secondary a:active > kol-span-wc,
	.secondary a:focus > kol-span-wc,
	.secondary a:hover > kol-span-wc,
	.normal a:active > kol-span-wc,
	.normal a:focus > kol-span-wc,
	.normal a:hover > kol-span-wc {
		background-color: var(--color-primary-20);
		color: var(--color-white);
		outline: none;
	}
	.loading a:active > kol-span-wc,
	.loading a:focus > kol-span-wc,
	.loading a:hover > kol-span-wc,
	.secondary a:active > kol-span-wc,
	.secondary a:focus > kol-span-wc,
	.secondary a:hover > kol-span-wc {
		border: 2px solid var(--color-primary-20);
	}
	.danger a:active > kol-span-wc,
	.danger a:hover > kol-span-wc {
		color: var(--color-white);
		background-color: var(--color-dark-yellow-neutral);
		outline: none;
	}
	.ghost a:active > kol-span-wc,
	.ghost a:hover > kol-span-wc {
		color: var(--color-primary);
		box-shadow: inset 0 0 0 2px var(--color-primary);
		outline: none;
	}
	a > kol-span-wc > span {
		display: flex;
		gap: 0.5em;
		margin: auto;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.75px;
	}
	a.icon-only > kol-span-wc {
		padding: 8px;
	}
	a.icon-only > kol-span-wc > span > span {
		display: none;
	}
	a.icon-only > kol-span-wc kol-icon {
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
	}
	.loading a > kol-span-wc kol-icon {
		animation: spin 5s infinite linear;
	}
	.loading a > kol-span-wc {
		min-height: unset !important;
		min-width: unset !important;
	}`,"KOL-BUTTON-LINK":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
	}
	kol-link-wc,
	kol-link-button-wc {
		display: inline-block;
	}
	a,
	button {
		color: var(--color-primary);
		font-style: normal;
		font-weight: 400;
		display: inline-flex;
		line-height: 1.5em;
		text-decoration-line: none !important;
		outline: none !important;
	}
	a:focus-within,
	a:hover,
	button:focus-within,
	button:hover {
		box-shadow: inset 0 -1px 0 0 var(--color-primary);
	}
	kol-icon {
		padding: 0 0.25em;
		display: inline-block;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`});const tT=$o.createTheme("desy-v2",{GLOBAL:`:host {
		--color-primary: #326cae;
		--color-primary-10: #1e538f;
		--color-primary-20: #08335e;
		--color-yellow-neutral: #ef9e48;
		--color-dark-yellow-neutral: #a8672c;
		--color-warning: #a94442;
		--color-success: #5cb85c;
		--color-background: #edf4f7;
		--color-black: #000000;
		--color-gray-10: #333333;
		--color-gray-20: #666666;
		--color-gray-30: #737373;
		--color-gray-40: #999999;
		--color-gray-50: #b3b3b3;
		--color-gray-60: #dddddd;
		--color-gray-70: #f2f2f2;
		--color-white: #ffffff;
		--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;
		--font-size: 14px;
		--spacing: 0.25em;
	}
	:host {
		color: var(--color-black);
	}
	:host * {
		box-sizing: border-box;
		font-family: var(--font-family);
	}
	:host h1,
	:host h2,
	:host h3,
	:host h4,
	:host h5,
	:host h6 {
		margin: 0;
		font-family: var(--font-family);
	}
	a,
	button {
		align-items: center;
		background-color: transparent;
		border: 0;
		color: black;
		cursor: pointer;
		display: inline-flex;
		gap: 0.25rem;
		justify-items: center;
	}
	input,
	option,
	select,
	summary,
	textarea {
		display: inline-block;
	}
	a,
	button,
	input,
	option,
	select,
	summary,
	textarea {
		-ms-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		letter-spacing: inherit;
		word-break: break-word;
	}
	*[tabindex]:focus,
	a:focus,
	button:focus,
	input:focus,
	select:focus,
	summary:focus,
	textarea:focus {
		cursor: pointer;
		outline-color: var(--color-ocean);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 0;
		transition: outline-offset 0.2s linear;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	kol-heading-wc {
		font-weight: 700;
	}`,"KOL-BUTTON":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
	}
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		min-width: 44px;
		min-height: 44px;
		padding: 0;
		text-decoration: none !important;
	}
	button > kol-span-wc {
		display: grid;
		gap: 0.25em;
		line-height: 1.5rem;
		font-family: Roboto;
		font-weight: 700;
		cursor: pointer;
		font-size: 1rem;
		align-items: center;
		padding: 6px 8px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		outline: none;
		border-style: solid;
		border-width: 2px;
	}
	button:active > kol-span-wc {
		transform: translateY(1px);
	}
	button.primary:disabled > kol-span-wc,
	button.danger:disabled > kol-span-wc,
	button.normal:disabled > kol-span-wc {
		cursor: not-allowed;
		color: var(--color-white);
		background-color: var(--color-gray-40);
		border-color: var(--color-gray-40);
	}
	button.ghost:disabled > kol-span-wc,
	button.loading:disabled > kol-span-wc,
	button.help:disabled > kol-span-wc,
	button.secondary:disabled > kol-span-wc {
		cursor: not-allowed;
		color: var(--color-gray-40);
		background-color: var(--color-white);
		border-color: var(--color-white);
	}
	button.primary > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:hover > kol-span-wc {
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--color-white);
	}
	button.loading > kol-span-wc,
	button.loading:hover > kol-span-wc,
	button.help > kol-span-wc,
	button.help:hover > kol-span-wc,
	button.secondary > kol-span-wc,
	button.secondary:hover > kol-span-wc {
		background-color: var(--color-white);
		border-color: var(--color-primary);
		color: var(--color-primary);
	}
	button.danger > kol-span-wc,
	button.danger:hover > kol-span-wc {
		background-color: var(--color-warning);
		border-color: var(--color-warning);
		color: var(--color-white);
	}
	button.ghost,
	button.ghost:hover > kol-span-wc {
		background-color: transparent;
		border-color: transparent;
		color: var(--color-primary);
	}
	button.primary:active > kol-span-wc,
	button.primary:focus > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.loading:active > kol-span-wc,
	button.loading:focus > kol-span-wc,
	button.loading:hover > kol-span-wc,
	button.help:active > kol-span-wc,
	button.help:focus > kol-span-wc,
	button.help:hover > kol-span-wc,
	button.secondary:active > kol-span-wc,
	button.secondary:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.normal:active > kol-span-wc,
	button.normal:focus > kol-span-wc,
	button.normal:hover > kol-span-wc {
		background-color: var(--color-primary-20);
		border-color: var(--color-primary-20);
		color: var(--color-white);
		outline: none;
	}
	button.loading:active > kol-span-wc,
	button.loading:focus > kol-span-wc,
	button.loading:hover > kol-span-wc,
	button.help:active > kol-span-wc,
	button.help:focus > kol-span-wc,
	button.help:hover > kol-span-wc,
	button.secondary:active > kol-span-wc,
	button.secondary:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc {
		border-color: var(--color-primary-20);
	}
	button.danger:active > kol-span-wc,
	button.danger:hover > kol-span-wc {
		background-color: var(--color-dark-yellow-neutral);
		border-color: var(--color-dark-yellow-neutral);
		color: var(--color-white);
		outline: none;
	}
	button.ghost:active > kol-span-wc,
	button.ghost:hover > kol-span-wc {
		color: var(--color-primary);
		outline: none;
	}
	button > kol-span-wc > span {
		display: flex;
		gap: 0.5em;
		margin: auto;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.75px;
	}
	button.icon-only > kol-span-wc {
		padding: 8px;
	}
	button.icon-only > kol-span-wc > span > span {
		display: none;
	}
	button.icon-only > kol-span-wc kol-icon {
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
	}
	button.loading > kol-span-wc kol-icon {
		animation: spin 5s infinite linear;
	}
	button.loading > kol-span-wc,
	button.help > kol-span-wc {
		display: inline-block;
		padding: 0;
	}`,"KOL-BADGE":`:host {
		display: inline-block;
	}
	kol-span-wc {
		align-items: center;
		border-radius: 0.3125rem;
		display: grid;
		gap: 0.5rem;
		line-height: 1.25rem;
		padding: 0.25rem 0.75rem;
	}
	kol-span-wc span {
		display: flex;
		gap: 0.25rem;
	}`,"KOL-HEADING":`h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: inherit;
		font-style: normal;
		margin: 0;
		padding: 0;
	}
	h1,
	h2,
	h3 {
		font-weight: 700;
	}
	h1 {
		font-size: 1.5rem;
		line-height: 3.25rem;
	}
	h2 {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	h3 {
		font-size: 1.125rem;
		line-height: 1.5rem;
	}`,"KOL-ACCORDION":`:host > div {
		font-family: var(--font-family);
		font-size: var(--font-size);
		padding: 0 0.5rem 0 0;
	}
	:host > div > kol-heading-wc {
		background-color: var(--color-background);
		color: var(--color-gray-10);
		line-height: 1.75rem;
		padding: 16px;
	}
	:host > div > kol-heading-wc:focus-within,
	:host > div > kol-heading-wc:hover {
		box-shadow: 0px 0px 0px 2px var(--color-primary) inset;
		outline: none;
	}
	:host > div > kol-heading-wc button {
		cursor: pointer;
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		gap: 2em;
		border: 0;
		align-items: center;
		overflow: hidden;
		font-size: inherit;
		font-weight: normal;
		line-height: 1.75em;
		background-color: transparent;
		padding: 0;
		outline: none;
	}
	:host > div[part*="open"] > kol-heading-wc button {
		padding-bottom: 0;
	}
	:host > div > kol-heading-wc button kol-icon::part(icon) {
		font-weight: 900;
		font-size: 26px;
		color: var(--color-black);
	}
	:host > div > kol-heading-wc button kol-icon::part(close)::before {
		font-family: "Font Awesome 6 Free";
		font-size: 14px;
		content: "\f077";
	}
	:host > div > kol-heading-wc button kol-icon::part(open)::before {
		font-family: "Font Awesome 6 Free";
		font-size: 14px;
		content: "\f078";
	}
	:host > div {
		width: 100%;
		height: 100%;
		display: grid;
	}
	:host > div div[part="content"] {
		transition: height 200ms;
	}
	:host > div div[part="header"],
	:host > div[part*="open"] div[part="content"] {
		margin: 0;
		background-color: var(--color-white);
	}
	:host > div div[part="header"] {
		padding: 0 1em;
	}
	:host > div[part*="open"] div[part="content"] {
		padding: 1em;
	}
	button {
		font-weight: inherit;
		font-size: inherit;
		line-height: inherit;
	}
	:host > div {
		background: var(--color-white);
	}
	:host > div[part*="open"] {
		padding-bottom: 1em;
	}`,"KOL-ALERT":':host > div {background-color: white;// border-width: 2px;// border-style: solid;display: flex;overflow: unset;}:host > div.default {border-color: var(--color-gray-30);}:host > div.default > .icon {background-color: var(--color-gray-30);}:host > div.error {border-color: var(--color-warning);}:host > div.error > .icon {background-color: var(--color-warning);}:host > div.info {border-color: var(--color-primary);}:host > div.info > .icon {background-color: var(--color-primary);}:host > div.success {border-color: var(--color-success);}:host > div.success > .icon {background-color: var(--color-success);}:host > div.warning {border-color: var(--color-yellow-neutral);}:host > div.warning > .icon {background-color: var(--color-yellow-neutral);}:host > div.msg > .icon {color: white;padding: 0.5em;align-items: center;display: inline-flex;}:host > div.card {border-width: 2px;border-style: solid;}:host > div.card.default .heading .icon {background-color: var(--color-gray-30);}:host > div.card.error .heading .icon {background-color: var(--color-warning);}:host > div.card.info .heading .icon {background-color: var(--color-primary);}:host > div.card.success .heading .icon {background-color: var(--color-success);}:host > div.card.warning .heading .icon {background-color: var(--color-yellow-neutral);}:host > div.card .heading .icon {color: white;padding: 0.5em;align-items: center;display: inline-flex;}:host > div kol-heading-wc .icon {margin-right: 0.5em;}:host > div.card .heading .icon {border-radius: 0 0 0.25rem 0;}:host > div.msg > div {padding: 0.25em;}:host > div.msg > div > .heading {padding: 0.25em;display: inline-block;}:host > div .content {padding: 0.25em;}:host > div > div {display: grid;grid-template-columns: 1fr auto;}:host > div > div > .content {grid-row: 2;grid-column: 1;}:host > div > div > .close {grid-row: 1 / span 2;}:host > div.card > div > .heading {width: 100%;}.close > button {min-width: 44px;min-height: 44px;display: grid;gap: 0.25em;line-height: 1.5rem;font-family: var(--font-family);font-weight: 700;cursor: pointer;border-radius: 1.5em;border-style: solid;border-width: 2px;font-size: 1rem;align-items: center;padding: 8px 14px;justify-content: center;font-style: normal;text-align: center;text-transform: uppercase;width: inherit;transition-duration: 0.5s;transition-property: background-color, color, border-color;background-color: rgba(0, 0, 0, 0);border-color: rgba(0, 0, 0, 0);}.close > button.icon-only {padding: 8px;}.close > button.icon-only kol-icon {display: inline-block;width: 1.5em;height: 1.5em;}.close > button:active {box-shadow: none;outline: none;}.close kol-icon::part(icon)::before {content: "x";color: var(--color-primary);font-family: "Font Awesome 6 Free";}',"KOL-CARD":`/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */
	:host > div {
		display: grid;
		width: 100%;
		height: 100%;
		background-color: var(--color-background);
		grid-template-rows: min-content 2fr min-content;
		box-shadow: 0 0 0.25rem var(--color-grey);
		padding: 8px;
	}
	:host kol-heading-wc {
		display: inline-flex;
		font-style: normal;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host div.content {
		padding-top: 1em;
	}
	:host div.footer {
		padding-top: 1em;
	}`,"KOL-INDENTED-TEXT":`:host > div {
		padding: 0.25em 0.5em;
		width: 100%;
	}
	:host > div {
		background: var(--color-white);
		border: 0;
		box-shadow: -4px 0px 0px var(--color-primary);
	}`,"KOL-DETAILS":`:host details > kol-indented-text {
		margin: 0.25em 0 0 0.5em;
	}`,"KOL-LINK-GROUP":`ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	nav.horizontal ul {
		display: flex;
		flex-wrap: wrap;
	}
	nav.horizontal li {
		margin-left: 1.25rem;
		margin-right: 0.25rem;
	}
	nav.horizontal li:first-child {
		margin-left: 0;
	}
	nav.horizontal li:last-child {
		margin-right: 0;
	}
	nav.vertical li {
		margin-left: 1.75rem;
		margin-right: 0.5rem;
	}
	li.list-none {
		list-style-type: none !important;
		margin-left: 0;
	}`,"KOL-PROGRESS":`:host progress,
	:host span {
		display: block;
		height: 0px;
		overflow: hidden;
		width: 0px;
	}
	svg line:first-child,
	svg circle:first-child {
		fill: transparent;
		stroke: var(--color-gray-60);
	}
	svg line:last-child,
	svg circle:last-child {
		stroke: var(--color-primary);
		fill: transparent;
	}
	progress {
		display: none;
	}`,"KOL-SPIN":`.spin {
		display: inline-block;
		height: 1rem;
		position: relative;
		width: 3rem;
	}
	.spin span {
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		border: 0.1rem solid rgb(255, 255, 255);
		border-radius: 50%;
		height: 0.8rem;
		width: 0.8rem;
		top: 0.1rem;
		position: absolute;
	}
	.spin span:nth-child(1) {
		background-color: #fc0;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin1;
		left: 0.1rem;
	}
	.spin span:nth-child(2) {
		background-color: #f00;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 0.1rem;
	}
	.spin span:nth-child(3) {
		background-color: #000;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 1.1rem;
	}
	.spin span:nth-child(4) {
		background-color: #666;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin3;
		left: 2.1rem;
	}
	@keyframes spin1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes spin2 {
		0% {
			transform: translate(0px, 0px);
		}
		100% {
			transform: translate(1rem, 0px);
		}
	}
	@keyframes spin3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}`,"KOL-TABLE":`:host * {
		hyphens: var(--kolibri-hyphens);
		font-family: var(--kolibri-font-family);
		line-height: var(--kolibri-line-height);
		word-break: break-word;
	}
	:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	table {
		width: 100%;
		border-spacing: 0;
		border-collapse: collapse;
	}
	th,
	td {
		padding: 0.25em 0.5em;
	}
	th {
		background-color: var(--color-gray-70);
	}
	th > div {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 0.25em;
	}
	:host > div:last-child {
		padding: 0.5em;
	}
	tbody > tr:nth-child(even) {
		background-color: var(--color-gray-70);
	}
	:host > div:last-child,
	:host > div:last-child > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 0.5em;
	}
	@media (min-width: 1024px) {
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			grid-auto-flow: column;
		}
		:host > div:last-child kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,"KOL-TABS":`button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	kol-button-group > div {
		margin: 0 1rem;
	}
	kol-button-group > div:first-child {
		margin-left: 0;
	}
	kol-button-group > div:last-child {
		margin-right: 0;
	}
	kol-button-group > div {
		margin: 0;
	}
	button {
		background-color: transparent;
		border: 0;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;
		color: var(--color-primary);
		padding: 0.3em 1em;
		box-shadow: inset 0px -3px 0 0 var(--color-gray-70);
	}
	button:enabled {
		box-shadow: inset 0px -3px 0 0 var(--color-primary-10);
	}
	button:hover {
		color: var(--color-midnight);
	}
	button.primary {
		text-underline-offset: 5px;
		text-decoration-thickness: 0.25em;
		font-weight: bold;
		color: var(--color-gray-10);
		box-shadow: inset 0px -3px 0 0 var(--color-gray-70),
			inset 0px -6px 0 0 var(--color-primary-10);
	}
	button:hover,
	button:focus {
		color: var(--color-gray-10);
		box-shadow: inset 0px -6px 0 0 var(--color-primary-10);
		outline: none;
	}
	button:not(.primary) {
		cursor: pointer;
	}
	:host > div > div {
		padding: 0.25em 0;
	}
	.close-button {
		display: none;
		font-size: 25%;
		height: fit-content;
		width: 0;
	}
	.close-button button {
		width: 1rem;
		position: relative;
		height: 1rem;
		left: -4.25em;
		top: 0.25em;
	}
	div[role="tabpanel"] {
		height: 100%;
	}
	div.grid {
		height: 100%;
	}
	div.grid {
		height: 100%;
	}
	:host > .tabs-align-right {
		display: grid;
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-right kol-button-group-wc {
		display: grid;
		order: 2;
	}
	:host > .tabs-align-left {
		display: grid;
		grid-template-columns: auto 1fr;
	}
	:host > .tabs-align-left kol-button-group-wc {
		display: grid;
		order: 0;
	}
	:host > .tabs-align-bottom {
		display: grid;
		grid-template-rows: 1fr auto;
	}
	:host > .tabs-align-bottom kol-button-group-wc {
		order: 2;
	}
	:host > .tabs-align-bottom kol-button-group-wc > div {
		display: flex;
	}
	:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {
		margin: 0px 1em 0px 0px;
	}
	:host > .tabs-align-bottom > kol-button-group-wc > div > div {
		margin: 0px 1em;
	}
	:host > .tabs-align-top {
		display: grid;
		grid-template-rows: auto 1fr;
	}
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-top kol-button-group-wc > div {
		display: flex;
	}
	:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {
		margin: 0px 1em 0px 0px;
	}
	:host > .tabs-align-top > kol-button-group-wc > div > div {
		margin: 0px 1em;
	}
	:host > div {
		display: grid;
	}
	:host > div.tabs-align-left {
		grid-template-columns: auto 1fr;
	}
	:host > div.tabs-align-right {
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-bottom kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		order: 1;
	}
	:host > div.tabs-align-left kol-button-group-wc > div,
	:host > div.tabs-align-left kol-button-group-wc > div > div,
	:host > div.tabs-align-right kol-button-group-wc > div,
	:host > div.tabs-align-right kol-button-group-wc > div > div {
		display: grid;
	}
	:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
	:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
		width: 100%;
	}
	:host > div.tabs-align-bottom kol-button-group-wc div,
	:host > div.tabs-align-top kol-button-group-wc div {
		display: flex;
		flex-wrap: wrap;
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: 1rem;
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5em;
	}
	:host kol-button-wc.selected button {
		min-width: 44px;
		min-height: 44px;
		display: grid;
		gap: 0.25em;
		line-height: 1.5rem;
		font-weight: 700;
		cursor: default;
		font-size: 1rem;
		align-items: center;
		padding: 0px 7px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		outline: none;
		color: var(--color-white);
		border: unset;
		background-color: var(--color-primary);
	}
	:host kol-button-wc.selected button:focus,
	:host kol-button-wc.selected button:hover {
		background-color: var(--color-primary-20);
	}`,"KOL-LINK":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
	}
	kol-link-wc,
	kol-link-button-wc {
		display: inline-block;
	}
	a,
	button {
		color: var(--color-primary);
		font-style: normal;
		font-weight: 400;
		display: inline-flex;
		line-height: 1.5em;
		text-decoration-line: none !important;
		outline: none !important;
	}
	a:focus-within,
	a:hover,
	button:focus-within,
	button:hover {
		box-shadow: inset 0 -1px 0 0 var(--color-primary);
	}
	kol-icon {
		padding: 0 0.25em;
		display: inline-block;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`,"KOL-INPUT-TEXT":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-CHECKBOX":`/* INPUT */
	kol-input {
		display: grid;
		align-items: center;
		justify-items: left;
		width: 100%;
		min-height: 44px;
	}
	kol-input.checkbox {
		grid-template-columns: 2rem auto;
	}
	kol-input.switch {
		grid-template-columns: 4rem auto;
	}
	kol-input > div.input {
		display: inline-flex;
		order: 1;
	}
	kol-input > div.input input {
		margin: 0px;
	}
	kol-input > label {
		cursor: pointer;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
		padding-top: 0.25em;
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		grid-column: span 2 / auto;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning) !important;
		box-shadow: 0 0 0 1px var(--color-warning) inset;
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	input {
		cursor: pointer;
		order: 1;
		width: 100%;
		border-color: var(--color-gray-30);
		border-width: 1px;
		border-style: solid;
		line-height: 24px;
		font-size: 1rem;
	}
	input:focus,
	input:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus:hover {
		box-shadow: none;
	}
	input:active {
		box-shadow: none;
	}
	kol-alert {
		display: block;
		width: 100%;
	} /* CHECKBOX */
	kol-input label span {
		margin-top: 0.125rem;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	kol-input input[type="checkbox"] {
		appearance: none;
		background-color: white;
		cursor: pointer;
		transition: 0.5s;
	}
	kol-input input[type="checkbox"].kol-disabled:before {
		cursor: not-allowed;
	}
	kol-input input[type="checkbox"]:before {
		content: "";
		cursor: pointer;
	}
	kol-input input[type="checkbox"]:checked {
		background-color: var(--color-primary-20);
		border-color: var(--color-primary-20);
	}
	kol-input.checkbox input[type="checkbox"] {
		width: 1rem;
		height: 1rem;
	}
	kol-input.checkbox input[type="checkbox"]:before {
		background-color: transparent;
		display: block;
		height: calc(2 * var(--spacing));
		position: relative;
		width: calc(2 * var(--spacing));
	}
	kol-input.checkbox input[type="checkbox"]:checked:before {
		border-right-width: 1px;
		border-bottom-width: 1px;
		left: calc(1.2 * var(--spacing) - 2px);
		top: calc(2.2 * var(--spacing) - 2px);
		transform: rotate(40deg) translate(-50%, -50%);
		background-color: transparent;
		border-width: 0px 3px 3px 0px;
		border-color: white;
		border-radius: 1px;
		border-style: solid;
		height: calc(2 * var(--spacing));
		width: calc(1 * var(--spacing));
	}
	kol-input.checkbox input[type="checkbox"]:indeterminate {
		--tw-bg-opacity: 1;
		background-color: white;
	}
	kol-input.checkbox input[type="checkbox"]:indeterminate:before {
		background-color: var(--color-gray-30);
		height: 0.2rem;
		top: 0.35rem;
		left: 0.15rem;
		width: calc(2.5 * var(--spacing));
	}
	kol-input.switch input[type="checkbox"] {
		min-width: 3.5em;
		width: 3.5em;
		background-color: var(--color-gray-30);
		border-width: 0;
		height: 1.5em;
		border-radius: 1.25em;
		display: inline-block;
		position: relative;
	}
	kol-input.switch input[type="checkbox"]:before {
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-ms-transition: 0.5s;
		transition: 0.5;
		width: 1.25em;
		height: 1.25em;
		left: calc(0.25em - 2px);
		top: calc(0.25em - 2px);
		border-radius: 1.25em;
		background-color: white;
		position: absolute;
	}
	kol-input.switch input[type="checkbox"]:checked {
		background-color: var(--color-primary-20);
	}
	kol-input.switch input[type="checkbox"]:checked:before {
		-webkit-transform: translateX(2em);
		-moz-transform: translateX(2em);
		-ms-transform: translateX(2em);
		transform: translateX(2em);
		--tw-bg-opacity: 1;
	}
	kol-input.switch input[type="checkbox"]:indeterminate {
		--tw-bg-opacity: 1;
	}
	kol-input.switch input[type="checkbox"]:indeterminate:before {
		-webkit-transform: translateX(1em);
		-moz-transform: translateX(1em);
		-ms-transform: translateX(1em);
		transform: translateX(1em);
	}
	.disabled {
		opacity: 0.33;
	}`,"KOL-INPUT-RADIO":`/* INPUT */
	label {
		cursor: pointer;
		display: grid;
		line-height: 20px;
		gap: 8px;
		width: 100%;
	}
	input {
		cursor: pointer;
		width: 100%;
		border-color: var(--color-grey-20);
		border-width: 1px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 16px;
	}
	:host fieldset div input[type="radio"]:hover {
		border-color: var(--color-midnight);
		box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
	}
	:host fieldset div input[type="radio"]:focus:hover {
		box-shadow: none;
	}
	:host fieldset div input[type="radio"]:active {
		box-shadow: none;
	}
	kol-alert {
		display: block;
		width: 100%;
		margin-bottom: 0.4em;
	}
	.required legend > span::after {
		content: "*";
		padding-left: 0.125em;
	} /* RADIO */
	:host fieldset {
		border: 0px;
		margin: 0px;
		padding: 0px;
		display: grid;
		gap: 0.25em;
	}
	:host fieldset div {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		min-height: 44px;
	}
	:host fieldset div label {
		cursor: pointer;
		display: flex;
		padding-left: 0.25em;
		width: 100%;
	}
	:host fieldset div label span {
		margin-top: 0.125em;
	}
	:host fieldset div input[type="radio"] {
		appearance: none;
		transition: 0.5s;
		border-radius: 100%;
		height: 1rem;
		min-width: 1rem;
		width: 1rem;
	}
	:host fieldset div input[type="radio"]:before {
		content: "";
		cursor: pointer;
		left: calc(1 * var(--spacing) - 1px);
		top: calc(1 * var(--spacing) - 1px);
		position: relative;
		border-radius: 100%;
		display: block;
		height: calc(2 * var(--spacing));
		width: calc(2 * var(--spacing));
	}
	:host fieldset div input[type="radio"]:checked:before {
		background-color: var(--color-primary-20);
	}
	:host fieldset div input[type="radio"]:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
		background-color: var(--background-light-grey);
	}
	:host fieldset #error {
		order: 3;
	}
	:host fieldset legend {
		order: 1;
		display: contents;
	}
	:host fieldset kol-input {
		order: 2;
	}
	:host fieldset kol-alert#error {
		padding-left: 0.5em;
		color: var(--color-warning);
	}
	fieldset.error input:focus,
	fieldset.error select:focus,
	fieldset.error textarea:focus {
		border-color: var(--color-warning) !important;
		box-shadow: 0 0 0 1px var(--color-warning) inset;
	}
	:host fieldset.error kol-alert.error {
		margin-left: -0.25em;
		color: var(--color-warning);
	}
	.disabled {
		opacity: 0.33;
	}
	:host fieldset.horizontal {
		display: flex;
		flex-wrap: wrap;
	}
	:host fieldset.horizontal legend {
		display: inline-block;
		margin-bottom: 0.25em;
	}`,"KOL-SELECT":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-TEXTAREA":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-PASSWORD":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-NUMBER":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-EMAIL":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-FILE":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-COLOR":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-INPUT-RANGE":`kol-input {
		display: grid;
	}
	kol-input label {
		order: 1;
		padding: 0.125rem 0 0.4rem;
		vertical-align: text-top;
		line-height: 1.2;
	}
	kol-input div.input {
		box-sizing: border-box;
		order: 2;
		background-color: white;
		border-radius: 0.3125rem;
	}
	kol-input kol-alert.error {
		margin-bottom: 0.4em;
		margin-top: 0.2em;
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		border-color: var(--color-grey);
		border-width: 1px;
		border-style: solid;
		overflow: hidden;
		width: 100%;
		line-height: normal;
		padding: 0.4rem 8px;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: #2d6f9e;
		box-shadow: 0 0 0 1px #2d6f9e inset;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--color-primary-20);
		box-shadow: inset 0 0 0 1px var(--color-primary-20);
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 2.75em;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icons {
		display: flex;
		justify-content: space-between;
		height: 0;
	}
	.icons > * {
		margin: 0.75em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-input.error input:focus,
	kol-input.error select:focus,
	kol-input.error textarea:focus {
		border-color: var(--color-warning);
		box-shadow: inset 0 0 0 1px var(--color-warning);
	}
	kol-input.error kol-alert.error {
		color: var(--color-warning);
	}
	kol-button-wc {
		position: relative;
		float: right;
		z-index: 1000;
		margin-top: -2.7em;
	}
	kol-button-wc button {
		border: 0;
		height: 2.7em;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	kol-button-wc button:focus,
	kol-button-wc button:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background: var(--color-primary);
		color: white;
	}`,"KOL-NAV":`/* :host * {hyphens: var(--hyphens);font-family: var(--font-family);line-height: var(--line-height);word-break: break-word;} */
	:host .hidden {
		display: none;
	}
	:host > div > nav ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
		border-radius: var(--border-radius);
		background-color: var(--color-primary);
	}
	:host > div > nav ul > li {
		border-radius: var(--border-radius);
		overflow: hidden;
		padding: 0.125em;
	}
	:host > div > nav ul > li[part*="vertical"] + li {
		border-radius: 0;
		border-top: 0.1em dotted white;
	}
	:host > div > nav ul > li[part*="vertical selected"] {
		border-right: 0.375em solid var(--color-yellow-neutral);
	}
	:host > div > nav ul > li[part*="horizontal"] + li {
		border-radius: 0;
		border-left: 0.1em dotted white;
	}
	:host > div > nav ul > li[part*="horizontal selected"] {
		border-bottom: 0.375em solid var(--color-yellow-neutral);
	}
	:host > div > nav ul > li > div {
		height: 100%;
	}
	:host > div > nav kol-link-wc {
		width: 100%; /*height: 100%;font-weight: 600;*/
		display: block;
	}
	:host > div > nav kol-link-wc a {
		border-radius: var(--border-radius);
		background-color: var(--color-primary);
		border: 1px solid transparent;
		grid: flex;
		line-height: 2em;
		padding: 0.5em;
		color: white;
		height: 100%;
		-webkit-box-align: center;
		align-items: center;
		display: flex;
		cursor: pointer;
		text-decoration: inherit;
	}
	:host > div > nav kol-link-wc[exportparts*="selected"] a {
		background-color: var(--color-primary-20);
		font-weight: 700;
	}
	:host > div > nav kol-link-wc a kol-icon.mr-2 {
		margin-right: calc(2 * var(--spacing));
	}
	:host > div > nav kol-link-wc a kol-icon.ml-2 {
		margin-left: calc(2 * var(--spacing));
	}
	:host > div > nav kol-link-wc a:focus,
	:host > div > nav kol-link-wc a:hover {
		border: 1px solid white;
		background-color: var(--kolibri-color-focus);
	} /* compact button */
	:host > div > div:last-child {
		margin-top: 0.5em;
		width: 100%;
		text-align: center;
	}
	:host > div > nav kol-link-wc a.text-center {
		display: grid;
		align-items: center;
		justify-items: center;
	} /* horizontal */
	ul.flex {
		display: flex;
	}
	li > div > div.absolute {
		position: absolute;
	}
	kol-span-wc {
		justify-items: baseline;
	}`,"KOL-BREADCRUMB":`nav {
		width: 100%;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	kol-link {
		display: inline;
	}
	:host kol-icon[exportparts*="separator"] {
		padding: 0 0.5rem;
	}
	:host kol-icon::part(icon separator) {
		font-weight: 900;
		font-size: 0.875rem;
	}
	:host kol-icon::part(icon separator)::before {
		color: black;
		content: "\f054";
		font-family: "Font Awesome 6 Free";
	}
	:host li > kol-link > kol-link-wc > a {
		color: red !important;
	}`,"KOL-TOAST":`:host > div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		z-index: 200;
	}
	:host > div > kol-alert {
		display: block;
		margin: auto;
		padding: 1rem;
		max-width: 750px;
	}
	:host > div > kol-button-wc {
		top: 0;
		position: relative;
		display: block;
		margin: auto;
		width: 1em;
	}`,"KOL-LINK-BUTTON":`a {
		min-width: 44px;
		min-height: 44px;
		background-color: transparent;
		border: 0;
		cursor: pointer;
		padding: 0;
		display: flex;
		gap: 0.25rem;
		justify-items: center;
		align-items: center;
		text-decoration: none !important;
	}
	a > kol-span-wc {
		display: grid;
		min-width: 44px;
		min-height: 44px;
		gap: 0.25em;
		line-height: 1.5rem;
		font-family: Roboto;
		font-weight: 700;
		cursor: pointer;
		font-size: 1rem;
		align-items: center;
		padding: 0px 7px;
		justify-content: center;
		font-style: normal;
		text-align: center;
		border: none;
		outline: none;
	}
	a:active > kol-span-wc {
		transform: translateY(1px);
	}
	.primary a:disabled > kol-span-wc,
	.danger a:disabled > kol-span-wc,
	.normal a:disabled > kol-span-wc {
		cursor: not-allowed;
		color: var(--color-white);
		background-color: var(--color-gray-40);
	}
	.ghost a:disabled > kol-span-wc,
	.loading a:disabled > kol-span-wc,
	.secondary a:disabled > kol-span-wc {
		cursor: not-allowed;
		color: var(--color-gray-40);
		background-color: var(--color-white);
		border: var(--color-gray-40) solid 3px;
	}
	.primary a > kol-span-wc,
	.primary a:hover > kol-span-wc,
	.normal a > kol-span-wc,
	.normal a:hover > kol-span-wc {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	.loading a > kol-span-wc,
	.loading a:hover > kol-span-wc,
	.secondary a > kol-span-wc,
	.secondary a:hover > kol-span-wc {
		background-color: var(--color-white);
		color: var(--color-primary);
		border: 2px solid var(--color-primary);
	}
	.danger a > kol-span-wc,
	.danger a:hover > kol-span-wc {
		background-color: var(--color-warning);
		border-color: var(--color-warning);
		color: var(--color-white);
		box-shadow: unset;
	}
	.ghost a,
	.ghost a:hover > kol-span-wc {
		background-color: unset;
		color: var(--color-primary);
		box-shadow: unset;
	}
	.primary a:active > kol-span-wc,
	.primary a:focus > kol-span-wc,
	.primary a:hover > kol-span-wc,
	.loading a:active > kol-span-wc,
	.loading a:focus > kol-span-wc,
	.loading a:hover > kol-span-wc,
	.secondary a:active > kol-span-wc,
	.secondary a:focus > kol-span-wc,
	.secondary a:hover > kol-span-wc,
	.normal a:active > kol-span-wc,
	.normal a:focus > kol-span-wc,
	.normal a:hover > kol-span-wc {
		background-color: var(--color-primary-20);
		color: var(--color-white);
		outline: none;
	}
	.loading a:active > kol-span-wc,
	.loading a:focus > kol-span-wc,
	.loading a:hover > kol-span-wc,
	.secondary a:active > kol-span-wc,
	.secondary a:focus > kol-span-wc,
	.secondary a:hover > kol-span-wc {
		border: 2px solid var(--color-primary-20);
	}
	.danger a:active > kol-span-wc,
	.danger a:hover > kol-span-wc {
		color: var(--color-white);
		background-color: var(--color-dark-yellow-neutral);
		outline: none;
	}
	.ghost a:active > kol-span-wc,
	.ghost a:hover > kol-span-wc {
		color: var(--color-primary);
		box-shadow: inset 0 0 0 2px var(--color-primary);
		outline: none;
	}
	a > kol-span-wc > span {
		display: flex;
		gap: 0.5em;
		margin: auto;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.75px;
	}
	a.icon-only > kol-span-wc {
		padding: 8px;
	}
	a.icon-only > kol-span-wc > span > span {
		display: none;
	}
	a.icon-only > kol-span-wc kol-icon {
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
	}
	.loading a > kol-span-wc kol-icon {
		animation: spin 5s infinite linear;
	}
	.loading a > kol-span-wc {
		min-height: unset !important;
		min-width: unset !important;
	}`,"KOL-BUTTON-LINK":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
	}
	kol-link-wc,
	kol-link-button-wc {
		display: inline-block;
	}
	a,
	button {
		color: var(--color-primary);
		font-style: normal;
		font-weight: 400;
		display: inline-flex;
		line-height: 1.5em;
		text-decoration-line: none !important;
		outline: none !important;
	}
	a:focus-within,
	a:hover,
	button:focus-within,
	button:hover {
		box-shadow: inset 0 -1px 0 0 var(--color-primary);
	}
	kol-icon {
		padding: 0 0.25em;
		display: inline-block;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`}),rT=$o.createTheme("ecl-ec",{GLOBAL:`:host {
		--color-blue: #004494;
		--color-yellow: #ffd617;
		--color-grey: #404040;
		--color-blue-130: #002f67;
		--color-blue-120: #003776;
		--color-blue-110: #003d84;
		--color-blue-100: var(--color-blue);
		--color-blue-75: #4073af;
		--color-blue-50: #bfd0e4;
		--color-blue-25: #bfd0e4;
		--color-blue-5: #f2f5f9;
		--color-yellow-120: #f8ae21;
		--color-yellow-110: #fbc11d;
		--color-yellow-100: var(--color-yellow);
		--color-yellow-75: #ffde39;
		--color-yellow-50: #ffe879;
		--color-yellow-25: #fff4bb;
		--color-grey-100: var(--color-grey);
		--color-grey-75: #707070;
		--color-grey-50: #9f9f9f;
		--color-grey-25: #cfcfcf;
		--color-grey-20: #d9d9d9;
		--color-grey-15: #e3e3e3;
		--color-grey-10: #ebebeb;
		--color-grey-5: #f5f5f5;
		--color-grey-3: #f9f9f9;
		--color-blue-n: #006fb4;
		--color-orange: #f29527;
		--color-green: #467a39;
		--color-red: #da2131;
		--color-red-1xx: #981722;
		--color-black: #000;
		--color-white: #fff;
		--font-family: Arial, sans-serif;
		--font-size: 16px;
		--font-weight: 400;
		--font-weight-bold: 600;
		--line-height: 1.5em;
		--line-height-heading: 1.2em; /* ?! */
		--spacing-4xl: 64px;
		--spacing-3xl: 48px;
		--spacing-2xl: 40px;
		--spacing-xl: 32px;
		--spacing-l: 24px;
		--spacing-m: 16px;
		--spacing-s: 12px;
		--spacing-xs: 8px;
		--spacing-2xs: 4px; /* ?! */
	}
	:host {
		display: inline-block;
		font-family: var(--font-family);
	}
	a,
	button {
		font-size: var(--font-size);
		outline: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: var(--font-weight-bold);
		line-height: var(--line-height-heading);
		margin: 0;
		padding: 0;
	}
	p {
		font-weight: var(--font-weight);
	}
	kol-span-wc,
	kol-span-wc > span {
		gap: 0.5em;
	}
	.required label span::after,
	.required legend span::after {
		color: var(--color-red);
		padding-left: 0.25em;
	}`,"KOL-HEADING":`h1 {
		font-size: 2rem;
		line-height: 2.5rem;
	}
	h2 {
		font-size: 1.75rem;
		line-height: 2rem;
	}
	h3 {
		font-size: 1.5rem;
		line-height: 1.75rem;
	}
	h4 {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	h5 {
		font-size: 1rem;
		line-height: 1.5rem;
	}
	h6 {
		color: rgb(234, 0, 255);
	}`,"KOL-ACCORDION":`:host > div {
		background-color: var(--color-grey-5);
		border-color: var(--color-grey-25);
		border-style: solid;
		border-width: 1px;
	}
	:host > div .headline button {
		text-align: left;
		width: 100%;
		padding: 0 var(--spacing-m);
		display: flex;
		place-items: center;
	}
	:host > div .headline button kol-icon {
		margin-bottom: 0.75rem;
		margin-inline-end: 1rem;
		margin-inline-start: 0;
		margin-top: 0.75rem;
	}
	:host > div .headline button span {
		color: var(--color-grey);
		font-weight: var(--font-weight-bold);
		padding: 0.75rem 0;
		width: 100%;
	}
	:host > div[part*="open"] .headline button span {
		border-bottom: 1px solid var(--color-grey);
	}
	:host > div .headline button:focus,
	:host > div .headline button:hover {
		background-color: var(--color-grey-25);
	}
	:host > div .headline button:focus {
		outline: 2px solid var(--color-blue);
		outline-offset: -2px;
	}
	div[part="content"] {
		padding: var(--spacing-s) var(--spacing-m);
	}`,"KOL-INDENTED-TEXT":`:host > div {
		border-end-start-radius: 0;
		border-inline-start: 10px solid var(--color-yellow);
		border-start-start-radius: 0;
		padding-bottom: 1rem;
		padding-inline-start: 1.5rem;
		padding-top: 1rem;
		margin: 0;
	}`,"KOL-BUTTON":`a,
	button {
		appearance: none;
		background: none;
		outline: none;
		text-decoration: none;
	}
	a kol-span-wc,
	button kol-span-wc {
		border-radius: 0;
		border-style: solid;
		border-width: 2px;
		font-weight: var(--font-weight-bold);
		margin: 0;
		min-height: 44px;
		min-width: 44px;
		padding: 0.25em 0.75em;
	}
	a:focus kol-span-wc,
	button:focus kol-span-wc {
		outline-offset: -4px;
		outline-width: 2px;
		outline-style: solid;
	}
	button.ghost:focus kol-span-wc {
		outline-offset: -2px;
	}
	.primary a kol-span-wc,
	.primary button kol-span-wc {
		background-color: var(--color-blue);
		border-color: var(--color-blue);
		color: var(--color-white);
	}
	.primary a:focus kol-span-wc,
	.primary button:focus kol-span-wc {
		outline-color: var(--color-white);
	}
	.primary a:hover kol-span-wc,
	.primary button:hover kol-span-wc {
		background-color: var(--color-blue-130);
		border-color: var(--color-blue-130);
	}
	.secondary a kol-span-wc,
	.secondary button kol-span-wc {
		background-color: var(--color-white);
		border-color: var(--color-blue);
		color: var(--color-blue);
	}
	.secondary a:focus kol-span-wc,
	.secondary button:focus kol-span-wc {
		outline-color: var(--color-blue);
		outline-offset: -6px;
	}
	.secondary a:hover kol-span-wc,
	.secondary button:hover kol-span-wc {
		border-color: var(--color-blue-130);
		color: var(--color-blue-130);
	}
	.normal a kol-span-wc, /* CTA */.normal button kol-span-wc {
		background-color: var(--color-yellow);
		border-color: var(--color-yellow);
		color: var(--color-black);
	}
	.normal a:hover kol-span-wc, /* CTA */.normal button:hover kol-span-wc {
		background-color: var(--color-yellow-120);
		border-color: var(--color-yellow-120);
	}
	.danger a kol-span-wc,
	.danger button kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
		color: var(--color-white);
	}
	.danger a:hover kol-span-wc,
	.danger button:hover kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
	}
	.ghost a kol-span-wc,
	.ghost button kol-span-wc {
		background-color: transparent;
		border-color: transparent;
		color: var(--color-blue);
	}
	.ghost a:focus kol-span-wc,
	.ghost button:focus kol-span-wc {
		outline-color: var(--color-blue);
	}
	.ghost a:hover kol-span-wc,
	.ghost button:hover kol-span-wc {
		color: var(--color-blue-130);
	}`,"KOL-LINK-BUTTON":`a,
	button {
		appearance: none;
		background: none;
		outline: none;
		text-decoration: none;
	}
	a kol-span-wc,
	button kol-span-wc {
		appearance: none;
		background: none;
		border-radius: 0;
		border-style: solid;
		border-width: 2px;
		font-weight: var(--font-weight-bold);
		margin: 0;
		min-height: 44px;
		min-width: 44px;
		padding: 0.25em 0.75em;
	}
	a:focus kol-span-wc,
	button:focus kol-span-wc {
		outline-offset: -4px;
		outline-width: 2px;
		outline-style: solid;
	}
	button.ghost:focus kol-span-wc {
		outline-offset: -2px;
	}
	.primary a kol-span-wc,
	.primary button kol-span-wc {
		background-color: var(--color-blue);
		border-color: var(--color-blue);
		color: var(--color-white);
	}
	.primary a:focus kol-span-wc,
	.primary button:focus kol-span-wc {
		outline-color: var(--color-white);
	}
	.primary a:hover kol-span-wc,
	.primary button:hover kol-span-wc {
		background-color: var(--color-blue-130);
		border-color: var(--color-blue-130);
	}
	.secondary a kol-span-wc,
	.secondary button kol-span-wc {
		background-color: var(--color-white);
		border-color: var(--color-blue);
		color: var(--color-blue);
	}
	.secondary a:focus kol-span-wc,
	.secondary button:focus kol-span-wc {
		outline-color: var(--color-blue);
		outline-offset: -6px;
	}
	.secondary a:hover kol-span-wc,
	.secondary button:hover kol-span-wc {
		border-color: var(--color-blue-130);
		color: var(--color-blue-130);
	}
	.normal a kol-span-wc, /* CTA */.normal button kol-span-wc {
		background-color: var(--color-yellow);
		border-color: var(--color-yellow);
		color: var(--color-black);
	}
	.normal a:hover kol-span-wc, /* CTA */.normal button:hover kol-span-wc {
		background-color: var(--color-yellow-120);
		border-color: var(--color-yellow-120);
	}
	.danger a kol-span-wc,
	.danger button kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
		color: var(--color-white);
	}
	.danger a:hover kol-span-wc,
	.danger button:hover kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
	}
	.ghost a kol-span-wc,
	.ghost button kol-span-wc {
		background-color: transparent;
		border-color: transparent;
		color: var(--color-blue);
	}
	.ghost a:focus kol-span-wc,
	.ghost button:focus kol-span-wc {
		outline-color: var(--color-blue);
	}
	.ghost a:hover kol-span-wc,
	.ghost button:hover kol-span-wc {
		color: var(--color-blue-130);
	}`,"KOL-BADGE":`:host > span {
		font: normal normal var(--font-weight) 0.875rem/1em var(--font-family);
		padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
		text-transform: uppercase;
	}`,"KOL-ALERT":`:host > div {
		background-color: var(--color-white);
	}
	:host > div.card {
		border-style: solid;
		border-width: 2px;
	}
	:host > div.msg {
		border: none;
	}
	:host .msg .heading kol-icon {
		font-size: 1.5em;
		margin: var(--spacing-2xs);
	}
	:host .msg .heading > div {
		padding: var(--spacing-2xs);
	}
	:host .card {
		padding-bottom: 1.5rem;
		padding-inline-end: 0.5rem;
		padding-inline-start: 1.5rem;
		padding-top: 1.5rem;
	}
	:host .card .heading {
		gap: 0.5rem;
	}
	:host .card .content {
		margin-left: 2.5rem;
	}
	:host .card .heading kol-icon {
		font-size: 2rem;
	}
	:host .default {
		border-color: var(--color-grey);
	}
	:host .default .heading kol-icon {
		color: var(--color-grey);
	}
	:host .error {
		border-color: var(--color-red);
	}
	:host .error .heading kol-icon {
		color: var(--color-red);
	}
	:host .info {
		border-color: var(--color-blue);
	}
	:host .info .heading kol-icon {
		color: var(--color-blue);
	}
	:host .success {
		border-color: var(--color-green);
	}
	:host .success .heading kol-icon {
		color: var(--color-green);
	}
	:host .warning {
		border-color: var(--color-orange);
	}
	:host .warning .heading kol-icon {
		color: var(--color-orange);
	}`,"KOL-TABS":`:host {
		--kolibri-spacing: 0.25rem;
	}
	kol-button-group-wc {
		border-bottom: 1px solid var(--color-grey-25);
		margin-bottom: -1px;
	}
	kol-button-group-wc button {
		border: none;
		margin-bottom: -1px;
	}
	kol-button-group-wc button kol-span-wc {
		padding: 0.5rem;
		min-height: 44px;
		min-width: 44px;
	}
	kol-button-group-wc button.selected kol-span-wc {
		border-color: var(--color-grey-25);
		border-style: solid;
		border-width: 1px;
		border-bottom-color: white;
		border-top-color: var(--color-blue);
		box-shadow: 0 -3px var(--color-blue);
		font-weight: var(--font-weight-bold);
		color: var(--color-blue);
	}
	kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
		color: var(--color-blue-130);
	}
	kol-button-group-wc button:focus kol-span-wc {
		outline-color: var(--color-blue-130);
		outline-style: solid;
		outline-width: 2px;
	}`,"KOL-LINK":`a,
	button {
		appearance: none;
		color: var(--color-blue);
		text-decoration: underline;
	}
	a:hover,
	button:hover {
		color: var(--color-blue-130);
	}`,"KOL-BUTTON-LINK":`:host {
		--kolibri-spacing: 0.25rem;
	}
	a,
	button {
		appearance: none;
		color: var(--color-blue);
		text-decoration: underline;
	}
	a:hover,
	button:hover {
		color: var(--color-blue-130);
	}`,"KOL-BREADCRUMB":`:host {
		font: normal normal 400 0.875rem/1rem arial, sans-serif;
		font-weight: var(--font-weight-bold);
	}
	kol-icon::part(icon separator)::before {
		color: var(--color-blue);
	}
	li:last-child {
		color: var(--color-grey-75);
	}
	kol-icon[exportparts*="separator"] {
		margin-inline-end: 0.5rem;
		margin-inline-start: 0.5rem;
		padding: 0;
	}`,"KOL-DETAILS":`details > kol-indented-text {
		margin: 0.175rem;
		padding: 0;
	}`,"KOL-PROGRESS":`:host progress,
	:host span {
		display: block;
		height: 0px;
		overflow: hidden;
		width: 0px;
	}
	svg line:first-child,
	svg circle:first-child {
		fill: transparent;
		stroke: var(--color-grey-25);
	}
	svg line:last-child,
	svg circle:last-child {
		stroke: var(--color-blue-130);
		fill: transparent;
	}
	progress {
		display: none;
	}`,"KOL-SPIN":`.spin span:nth-child(1) {
		background-color: var(--color-blue-75);
	}
	.spin span:nth-child(2) {
		background-color: var(--color-blue);
	}
	.spin span:nth-child(3) {
		background-color: var(--color-blue-130);
	}
	.spin span:nth-child(4) {
		background-color: var(--color-grey-25);
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: var(--spacing-m);
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--spacing-xs);
	}
	.selected button {
		min-width: 44px;
		min-height: 44px;
		display: grid;
		line-height: 1.5rem;
		font-family: var(--font-family);
		cursor: not-allowed;
		font-weight: 700;
		padding: 10px 12px;
		border: none;
		font-size: 16px;
		font-style: normal;
		text-align: center;
		text-decoration: underline;
		text-transform: uppercase;
		width: inherit;
		color: var(--color-white);
		background-color: var(--color-blue);
		border-color: var(--color-blue);
	}`,"KOL-INPUT-CHECKBOX":`input[type="checkbox"] {
		background-color: var(--color-white);
		border-width: 2px;
		border-style: solid;
		color: var(--color-grey);
		line-height: 1.5em;
		font-size: 1rem;
	}
	input[type="checkbox"]:focus {
		outline-color: var(--color-blue);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 2px;
	}
	input[type="checkbox"] {
		border-color: var(--color-grey-75);
	}
	input[type="checkbox"]:checked {
		background-color: var(--color-blue);
		border-color: var(--color-blue);
	}
	input[type="checkbox"]:hover {
		border-color: var(--color-blue);
	}
	input[type="checkbox"]:checked:hover {
		background-color: var(--color-blue-130);
		border-color: var(--color-blue-130);
	}
	input[type="checkbox"]:checked::before {
		border-color: var(--color-white);
	}
	input[type="checkbox"]:indeterminate:hover::before {
		background-color: var(--color-blue-130);
	}
	.error input[type="checkbox"] {
		border-color: var(--color-red);
	}
	.error input[type="checkbox"]:checked {
		background-color: var(--color-red);
		border-color: var(--color-red);
	}
	.error input[type="checkbox"]:hover {
		border-color: var(--color-red);
	}
	.error input[type="checkbox"]:checked:hover {
		background-color: var(--color-red-1xx);
		border-color: var(--color-red-1xx);
	}
	.error input[type="checkbox"]:indeterminate:hover::before {
		background-color: var(--color-red-1xx);
	}
	.error.required label > span::after {
		color: var(--color-red);
	}
	.switch input[type="checkbox"]::before,
	.switch input[type="checkbox"]:indeterminate::before {
		background-color: var(--color-grey-75);
	}
	.switch input[type="checkbox"]:hover::before,
	.switch input[type="checkbox"]:indeterminate:hover::before {
		background-color: var(--color-blue);
	}
	.switch input[type="checkbox"]:checked::before,
	.switch input[type="checkbox"]:checked:hover::before {
		background-color: var(--color-white);
	}
	.switch.error input[type="checkbox"]::before {
		background-color: var(--color-red);
	}
	.switch.error input[type="checkbox"]:checked::before {
		background-color: var(--color-white);
	}
	.switch.error input[type="checkbox"]:indeterminate:hover::before {
		background-color: var(--color-red-1xx);
	}
	kol-input {
		gap: var(--spacing-xs);
	}
	kol-input > .input {
		order: 2;
	}
	kol-input > label {
		order: 3;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 4;
	}`,"KOL-INPUT-COLOR":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-CARD":`:host > div {
		display: grid;
		width: 100%;
		height: 100%;
		background-color: white;
		grid-template-rows: min-content 2fr min-content;
		box-shadow: 0 0 calc(var(--spacing-2xs) / 2) var(--color-black);
	}
	:host kol-heading-wc {
		display: inline-flex;
		font-style: normal;
		font-weight: 700;
		font-size: 1.25em;
		line-height: 1.75em;
	}
	:host div.header {
		padding: var(--spacing-m) var(--spacing-m) var(--spacing-xs) var(--spacing-m);
	}
	:host div.content {
		padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
		overflow: hidden;
	}
	:host div.footer {
		padding: var(--spacing-xs) var(--spacing-m);
	}
	:host > div > div.content + div.footer {
		border-top: 2px solid var(--color-blue);
	}`,"KOL-BUTTON-GROUP":`:host > kol-button-group-wc {
		display: inline-flex;
		flex-wrap: wrap;
		gap: var(--spacing-2xs);
	}`,"KOL-INPUT-RADIO":`fieldset {
		border: 0;
		gap: 0.5rem;
	}
	div[slot="input"] {
		gap: 0.25rem;
	}
	fieldset kol-alert {
		order: 1;
	}
	fieldset .hint {
		order: 2;
	}
	fieldset kol-alert {
		order: 3;
	}
	fieldset kol-input {
		order: 4;
	}
	input[type="radio"] {
		border: 2px solid var(--color-grey-75);
	}
	input[type="radio"]:before {
		display: none;
	}
	input[type="radio"]:checked {
		border-color: var(--color-blue);
		border-width: 7px;
	}
	input[type="radio"]:focus {
		outline: 2px solid var(--color-blue);
		outline-offset: 2px;
	}
	input[type="radio"]:not(:disabled):hover {
		border-color: var(--color-blue);
	}
	label,
	legend {
		color: var(--color-grey);
	}
	legend {
		font-weight: var(--font-weight-bold);
	}
	.error input[type="radio"] {
		border: 2px solid var(--color-red);
	}
	.error input[type="radio"]:before {
		display: none;
	}
	.error input[type="radio"]:checked {
		border-color: var(--color-red);
		border-width: 7px;
	}
	.error input[type="radio"]:not(:disabled):hover {
		border-color: var(--color-red-1xx);
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-xs));
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 4;
	}`,"KOL-INPUT-RANGE":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input:not([type="range"]):focus,
	select:focus,
	textarea:focus {
		border-top: 1px solid var(--color-blue);
		border-bottom: 1px solid var(--color-blue);
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-TEXT":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		outline: none;
	}
	input:not([type="range"]):focus,
	select:focus,
	textarea:focus {
		border-top: 1px solid var(--color-blue);
		border-bottom: 1px solid var(--color-blue);
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-PASSWORD":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px 0.5em;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-NUMBER":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px 0.5em;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-EMAIL":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px 0.5em;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-FILE":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-SELECT":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px 0.5em;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-TEXTAREA":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px 0.5em;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 40px !important;
		min-height: 40px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-ICON":`:host {
		height: 1em;
		width: 1em;
	}`,"KOL-TABLE":`:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	caption {
		padding: 0.5em;
	}
	th {
		font-weight: normal;
		color: var(--color-midnight);
	}
	:host table thead tr:first-child th,
	:host table thead tr:first-child td {
		border-width: 0;
		border-top-width: 2px;
		border-style: solid;
		border-color: var(--color-ice);
	}
	table {
		width: 100%;
		border-spacing: 0;
	}
	table,
	:host table thead tr:last-child th,
	:host table thead tr:last-child td {
		border-width: 0;
		border-bottom-width: 2px;
		border-style: solid;
		border-color: var(--color-ice);
	}
	th {
		background-color: var(--color-white);
	}
	th div {
		width: 100%;
		display: flex;
		gap: 0.5em;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	th div.center {
		justify-content: center;
	}
	th div.right {
		justify-content: end;
	}
	tbody tr:nth-child(odd) {
		background-color: var(--color-grey-10);
	}
	th,
	td {
		padding: 0.5em;
	}
	td.center > div {
		display: flex;
		justify-content: center;
	}
	td.right > div {
		display: flex;
		justify-content: end;
	}
	th[aria-sort="ascending"],
	th[aria-sort="descending"] {
		font-weight: 700;
	}
	:host > div:last-child {
		padding: 0.5em;
	}
	:host > div:last-child,
	:host > div:last-child > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 1em;
	}
	@media (min-width: 1024px) {
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			grid-auto-flow: column;
		}
		:host > div:last-child kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,"KOL-NAV":`.list {
		display: flex;
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	.list.vertical {
		flex-direction: column;
	}
	.entry {
		display: flex;
	}
	.entry kol-button-wc:first-child,
	.entry kol-link-wc,
	.entry kol-span-wc {
		flex-grow: 1;
	} /* custom. */
	nav {
		background-color: var(--color-blue);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.expand-button button {
		background-color: var(--color-blue-130);
		margin: auto;
		height: 100%;
	}
	kol-span-wc {
		border-color: transparent;
		border-style: solid;
		border-width: 2px;
		color: var(--color-white);
		font-size: 18px;
		justify-items: start;
		padding: 1rem;
		height: 100%;
	}
	li > ul,
	li + li {
		border-color: var(--color-blue-75);
		border-style: solid;
		border-width: 0;
		border-top-width: 2px;
	}
	a {
		text-decoration: none;
	}
	:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
		border-color: var(--color-white);
	}
	:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
	:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
		text-decoration: underline;
	}
	div > .expand-button kol-icon::part(icon)::before {
		content: "\\eab6";
	}
	.expanded > div > .expand-button kol-icon::part(icon)::before {
		content: "\\eab4";
	}`}),nT=$o.createTheme("ecl-eu",{GLOBAL:`:host {
		--color-blue: #0e47cb;
		--color-blue-140: #082b7a;
		--color-blue-130: #082b7a;
		--color-blue-120: #0b39a2;
		--color-blue-110: #0d40b7;
		--color-blue-100: #0e47cb;
		--color-blue-80: #3e6cd5;
		--color-blue-60: #6e91e0;
		--color-blue-40: #9fb5ea;
		--color-blue-20: #cfdaf5;
		--color-blue-10: #e7edfa;
		--color-blue-5: #f3f6fc;
		--color-yellow: #ffcc00;
		--color-yellow-140: #997a00;
		--color-yellow-130: #b38f00;
		--color-yellow-120: #cca300;
		--color-yellow-110: #e6b800;
		--color-yellow-100: #ffcc00;
		--color-yellow-80: #ffd633;
		--color-yellow-60: #ffe066;
		--color-yellow-40: #ffeb99;
		--color-yellow-20: #fff5cc;
		--color-yellow-10: #fffae6;
		--color-yellow-5: #fffcf2;
		--color-grey: #262b38;
		--color-grey-140: #171a22;
		--color-grey-130: #1b1e27;
		--color-grey-120: #1e222d;
		--color-grey-110: #222732;
		--color-grey-100: #262b38;
		--color-grey-80: #515560;
		--color-grey-60: #7d8088;
		--color-grey-40: #a8aaaf;
		--color-grey-20: #d4d5d7;
		--color-grey-10: #e9eaeb;
		--color-grey-5: #f4f5f5;
		--color-grey-3: #f9f9f9;
		--color-orange: #ff6200;
		--color-orange-140: #993b00;
		--color-orange-130: #b34500;
		--color-orange-120: #cc4e00;
		--color-orange-110: #e65800;
		--color-orange-100: #e65800;
		--color-orange-80: #ff8133;
		--color-orange-60: #ff914d;
		--color-orange-40: #ffb180;
		--color-orange-20: #ffd0b3;
		--color-orange-10: #ffefe6;
		--color-orange-5: #fff7f2;
		--color-green: #00c991;
		--color-green-140: #007957;
		--color-green-130: #008d66;
		--color-green-120: #008d66;
		--color-green-110: #00b583;
		--color-green-100: #00c991;
		--color-green-80: #00c991;
		--color-green-60: #66dfbd;
		--color-green-40: #99e9d3;
		--color-green-20: #ccf4e9;
		--color-green-10: #e6faf4;
		--color-green-5: #f2fcf9;
		--color-red: #ef0044;
		--color-red-140: #8f0029;
		--color-red-130: #a70030;
		--color-red-120: #bf0036;
		--color-red-110: #d7003d;
		--color-red-100: #ef0044;
		--color-red-80: #f23369;
		--color-red-60: #f5668f;
		--color-red-40: #f999b4;
		--color-red-20: #fcccda;
		--color-red-10: #fde6ec;
		--color-red-5: #fef2f5;
		--color-accent-blue-100: #00e9ff;
		--color-accent-blue-30: #b3f8ff;
		--color-purple: #510dcd;
		--color-purple-140: #31087b;
		--color-purple-130: #390990;
		--color-purple-120: #410aa4;
		--color-purple-110: #490cb9;
		--color-purple-100: #510dcd;
		--color-purple-80: #743dd7;
		--color-purple-60: #976ee1;
		--color-purple-40: #bf9af1;
		--color-purple-20: #dccff5;
		--color-purple-10: #eee7fa;
		--color-purple-5: #eee7fa;
		--color-white: #fff;
		--color-black: #000;
		--font-family: Arial, sans-serif;
		--font-size: 16px;
		--font-weight-regular: 400;
		--font-weight-bold: 700;
		--line-height-regular: 1.5em;
		--line-height-heading: 1.2em;
		--spacing-4xl: 64px;
		--spacing-3xl: 48px;
		--spacing-2xl: 40px;
		--spacing-xl: 32px;
		--spacing-l: 24px;
		--spacing-m: 16px;
		--spacing-s: 12px;
		--spacing-xs: 8px;
		--spacing-2xs: 4px; /* ?! */
	}
	:host {
		display: inline-block;
		font-family: var(--font-family);
	}
	a,
	button {
		font-size: var(--font-size);
		outline: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: var(--font-weight-bold);
		line-height: var(--line-height-heading);
		margin: 0;
		padding: 0;
	}
	p {
		font-weight: var(--font-weight);
	}
	kol-span-wc,
	kol-span-wc > span {
		gap: 0.5em;
	}
	.required label span::after,
	.required legend span::after {
		color: var(--color-red);
		padding-left: 0.25em;
	}
	p.l,
	p.lead {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	p,
	p.m,
	p.medium {
		font-size: 1rem;
		line-height: 1.5rem;
	}
	p.s,
	p.small {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	p.xs,
	p.extra-small {
		font-size: 0.75rem;
		line-height: 1.25rem;
	}`,"KOL-HEADING":`h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: var(--font-weight-bold);
	}
	h1 {
		font-size: 2.625rem;
		line-height: 3.25rem;
	}
	h2 {
		font-size: 2.25rem;
		line-height: 2.75rem;
	}
	h3 {
		font-size: 2rem;
		line-height: 2.5rem;
	}
	h4 {
		font-size: 1.75rem;
		line-height: 2rem;
	}
	h5 {
		font-size: 1.5rem;
		line-height: 1.75rem;
	}
	h6 {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}`,"KOL-ACCORDION":`.accordion,
	div[part*="accordion"] {
		border-radius: 8px;
		box-shadow: 0 2px 4px rgb(9 49 142 / 8%), 0 0 10px rgb(9 49 142 / 4%),
			0 4px 5px rgb(9 49 142 / 4%), 0 -4px 4px rgb(9 49 142 / 4%);
		margin: 0;
		overflow: hidden;
	}
	.headline {
		font-size: 2em;
	}
	div[part*="close"] .headline button {
		border-radius: 8px;
	}
	div[part*="open"] .headline button {
		border-start-end-radius: 8px;
		border-start-start-radius: 8px;
	}
	.headline button {
		outline-offset: -1px;
		border: 0;
		border-bottom-color: #cfdaf5;
		border-bottom-style: solid;
		border-bottom-width: 2px;
		color: #171a22;
		position: relative;
		display: block;
		font: normal normal 400 1.125rem/1.75rem arial, sans-serif;
		padding: 1.5rem;
		text-align: start;
		width: 100%;
	}
	.headline button::before {
		background-color: #fc0;
		border-end-end-radius: 2px;
		border-end-start-radius: 2px;
		content: "";
		height: 4px;
		position: absolute;
		left: 1.5rem;
		top: 0;
		width: 32px;
	}
	.headline button kol-icon {
		margin-right: 0.75rem;
	}
	.headline button kol-icon::part(icon)::before {
		color: #0e47cb;
		font-weight: 900;
		font-family: "Font Awesome 6 Free";
	}
	.open .headline button kol-icon::part(icon)::before {
		content: "\\f077";
	}
	.close .headline button kol-icon::part(icon)::before {
		content: "\\f078";
	}
	.content,
	div[part="content"] {
		-webkit-border-start: 4px solid #0e47cb;
		-webkit-margin-start: 0;
		border-bottom: 2px solid #cfdaf5;
		border-inline-start: 4px solid #0e47cb;
		color: #515560;
		font: normal normal 400 1rem/1.5rem arial, sans-serif;
		margin-inline-start: 0;
		padding: 1.5rem;
	}
	kol-span-wc > span {
		align-items: baseline;
	}`,"KOL-INDENTED-TEXT":`:host > div {
		-webkit-border-start: 8px solid #0e47cb;
		-webkit-padding-start: 1.5rem;
		border-end-start-radius: 4px;
		border-inline-start: 8px solid #0e47cb;
		border-start-start-radius: 4px;
		display: inline-block;
		padding-bottom: 1rem;
		padding-inline-start: 1.5rem;
		padding-top: 1rem;
	}`,"KOL-BUTTON":`:host {
		--kolibri-spacing: 0.25rem;
	}
	a,
	button {
		appearance: none;
		border-radius: 4px;
		text-decoration: none;
	}
	a:focus,
	button:focus {
		outline: none;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		min-height: 44px;
		min-width: 44px;
		border-radius: 4px;
		font: normal normal 400 1rem/1.25rem arial, sans-serif;
		font-weight: 400;
		margin: 0;
		padding: 0.75rem;
	}
	a:focus-visible > kol-span-wc,
	button:focus-visible > kol-span-wc {
		outline-offset: -4px;
		outline-style: solid;
		outline-width: 2px;
	}
	a:active > kol-span-wc,
	button:active > kol-span-wc,
	a:hover > kol-span-wc,
	button:hover > kol-span-wc {
		box-shadow: 0 2px 4px rgb(9 49 142 / 8%), 0 0 10px rgb(9 49 142 / 4%),
			0 4px 5px rgb(9 49 142 / 4%), 0 -4px 4px rgb(9 49 142 / 4%);
	}
	.primary a > kol-span-wc,
	.primary button > kol-span-wc {
		background-color: #0e47cb;
		color: #fff;
	}
	.primary a:focus-visible > kol-span-wc,
	.primary button:focus-visible > kol-span-wc {
		outline-color: #fff;
	}
	.primary a:hover > kol-span-wc,
	.primary button:hover > kol-span-wc {
		background-color: #3e6cd5;
	}
	.secondary a > kol-span-wc,
	.secondary button > kol-span-wc {
		background-color: #fff;
		border: 2px solid #0e47cb;
		color: #0e47cb;
		padding: calc(0.75rem - 2px) calc(1rem - 2px);
	}
	.secondary a:focus-visible > kol-span-wc,
	.secondary button:focus-visible > kol-span-wc {
		box-shadow: inset 0 0 0 4px #0e47cb;
		outline-color: #fff;
	}
	.secondary a:hover > kol-span-wc,
	.secondary button:hover > kol-span-wc {
		border-color: #0e47cb;
		color: #0e47cb;
	}
	.normal a > kol-span-wc,
	.normal button > kol-span-wc {
		background-color: #fc0;
		color: #171a22;
	}
	.normal a:focus-visible > kol-span-wc,
	.normal button:focus-visible > kol-span-wc {
		outline-color: #000;
	}
	.normal a:hover > kol-span-wc,
	.normal button:hover > kol-span-wc {
		background-color: #fc0;
		border-color: #fc0;
	}
	.danger a kol-span-wc,
	.danger button kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
		color: var(--color-white);
	}
	.danger a:hover kol-span-wc,
	.danger button:hover kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
	}
	.ghost a > kol-span-wc,
	.ghost button > kol-span-wc {
		color: #0e47cb;
	}
	.ghost a:focus-visible > kol-span-wc,
	.ghost button:focus-visible > kol-span-wc {
		outline-color: #0e47cb;
	}
	.ghost a:hover > kol-span-wc,
	.ghost button:hover > kol-span-wc {
		color: #0e47cb;
	}`,"KOL-LINK-BUTTON":`:host {
		--kolibri-spacing: 0.25rem;
	}
	a,
	button {
		appearance: none;
		border-radius: 4px;
		text-decoration: none;
	}
	a:focus,
	button:focus {
		outline: none;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		min-height: 44px;
		min-width: 44px;
		border-radius: 4px;
		font: normal normal 400 1rem/1.25rem arial, sans-serif;
		font-weight: 400;
		margin: 0;
		padding: 0.75rem;
	}
	a:focus-visible > kol-span-wc,
	button:focus-visible > kol-span-wc {
		outline-offset: -4px;
		outline-style: solid;
		outline-width: 2px;
	}
	a:active > kol-span-wc,
	button:active > kol-span-wc,
	a:hover > kol-span-wc,
	button:hover > kol-span-wc {
		box-shadow: 0 2px 4px rgb(9 49 142 / 8%), 0 0 10px rgb(9 49 142 / 4%),
			0 4px 5px rgb(9 49 142 / 4%), 0 -4px 4px rgb(9 49 142 / 4%);
	}
	.primary a > kol-span-wc,
	.primary button > kol-span-wc {
		background-color: #0e47cb;
		color: #fff;
	}
	.primary a:focus-visible > kol-span-wc,
	.primary button:focus-visible > kol-span-wc {
		outline-color: #fff;
	}
	.primary a:hover > kol-span-wc,
	.primary button:hover > kol-span-wc {
		background-color: #3e6cd5;
	}
	.secondary a > kol-span-wc,
	.secondary button > kol-span-wc {
		background-color: #fff;
		border: 2px solid #0e47cb;
		color: #0e47cb;
		padding: calc(0.75rem - 2px) calc(1rem - 2px);
	}
	.secondary a:focus-visible > kol-span-wc,
	.secondary button:focus-visible > kol-span-wc {
		box-shadow: inset 0 0 0 4px #0e47cb;
		outline-color: #fff;
	}
	.secondary a:hover > kol-span-wc,
	.secondary button:hover > kol-span-wc {
		border-color: #0e47cb;
		color: #0e47cb;
	}
	.normal a > kol-span-wc,
	.normal button > kol-span-wc {
		background-color: #fc0;
		color: #171a22;
	}
	.normal a:focus-visible > kol-span-wc,
	.normal button:focus-visible > kol-span-wc {
		outline-color: #000;
	}
	.normal a:hover > kol-span-wc,
	.normal button:hover > kol-span-wc {
		background-color: #fc0;
		border-color: #fc0;
	}
	.danger a kol-span-wc,
	.danger button kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
		color: var(--color-white);
	}
	.danger a:hover kol-span-wc,
	.danger button:hover kol-span-wc {
		background-color: var(--color-red);
		border-color: var(--color-red);
	}
	.ghost a > kol-span-wc,
	.ghost button > kol-span-wc {
		color: #0e47cb;
	}
	.ghost a:focus-visible > kol-span-wc,
	.ghost button:focus-visible > kol-span-wc {
		outline-color: #0e47cb;
	}
	.ghost a:hover > kol-span-wc,
	.ghost button:hover > kol-span-wc {
		color: #0e47cb;
	}`,"KOL-BUTTON-GROUP":`:host > kol-button-group-wc {
		gap: var(--spacing-2xs);
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: var(--spacing-m);
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--spacing-xs);
	}
	.selected button {
		min-width: 44px;
		min-height: 44px;
		display: grid;
		line-height: 1.5rem;
		font-family: var(--font-family);
		cursor: not-allowed;
		font-weight: 700;
		padding: 10px 12px;
		border: none;
		font-size: 16px;
		font-style: normal;
		text-align: center;
		text-decoration: underline;
		text-transform: uppercase;
		width: inherit;
		color: var(--color-white);
		background-color: var(--color-blue);
		border-color: var(--color-blue);
	}`,"KOL-NAV":`.list {
		display: flex;
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	.list.vertical {
		flex-direction: column;
	}
	.entry {
		display: flex;
	}
	.entry kol-button-wc:first-child,
	.entry kol-link-wc,
	.entry kol-span-wc {
		flex-grow: 1;
	} /* custom. */
	nav {
		background-color: var(--color-blue);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.expand-button button {
		background-color: var(--color-blue-130);
		margin: auto;
		height: 100%;
	}
	kol-span-wc {
		border-color: transparent;
		border-style: solid;
		border-width: 2px;
		color: var(--color-white);
		font-size: 18px;
		justify-items: start;
		padding: 1rem;
		height: 100%;
	}
	li > ul,
	li + li {
		border-color: var(--color-blue-75);
		border-style: solid;
		border-width: 0;
		border-top-width: 2px;
	}
	a {
		text-decoration: none;
	}
	:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
		border-color: var(--color-white);
	}
	:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
	:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
		text-decoration: underline;
	}
	div > .expand-button kol-icon::part(icon)::before {
		content: "\\eab6";
	}
	.expanded > div > .expand-button kol-icon::part(icon)::before {
		content: "\\eab4";
	}`,"KOL-BADGE":`:host > span {
		font: normal normal var(--font-weight) 0.875rem/1em var(--font-family);
		padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
		text-transform: uppercase;
	}`,"KOL-ALERT":`:host > div {
		background-color: var(--color-white);
	}
	:host > div.card {
		border-style: solid;
		border-width: 2px;
	}
	:host > div.msg {
		border: none;
	}
	:host .msg .heading kol-icon {
		font-size: 1.5em;
		margin: var(--spacing-2xs);
	}
	:host .msg .heading > div {
		padding: var(--spacing-2xs);
	}
	:host .card {
		padding-bottom: 1.5rem;
		padding-inline-end: 0.5rem;
		padding-inline-start: 1.5rem;
		padding-top: 1.5rem;
	}
	:host .card .heading {
		gap: 0.5rem;
	}
	:host .card .content {
		margin-left: 2.5rem;
	}
	:host .card .heading kol-icon {
		font-size: 2rem;
	}
	:host .default {
		border-color: var(--color-grey);
	}
	:host .default .heading kol-icon {
		color: var(--color-grey);
	}
	:host .error {
		border-color: var(--color-red);
	}
	:host .error .heading kol-icon {
		color: var(--color-red);
	}
	:host .info {
		border-color: var(--color-blue);
	}
	:host .info .heading kol-icon {
		color: var(--color-blue);
	}
	:host .success {
		border-color: var(--color-green);
	}
	:host .success .heading kol-icon {
		color: var(--color-green);
	}
	:host .warning {
		border-color: var(--color-orange);
	}
	:host .warning .heading kol-icon {
		color: var(--color-orange);
	}`,"KOL-CARD":`:host > div {
		display: grid;
		width: 100%;
		height: 100%;
		background-color: white;
		grid-template-rows: min-content 2fr min-content;
		box-shadow: 0 0 calc(var(--spacing-2xs) / 2) var(--color-black);
	}
	:host kol-heading-wc {
		display: inline-flex;
		font-style: normal;
		font-weight: 700;
		font-size: 1.25em;
		line-height: 1.75em;
	}
	:host div.header {
		padding: var(--spacing-m) var(--spacing-m) var(--spacing-xs) var(--spacing-m);
	}
	:host div.content {
		padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
		overflow: hidden;
	}
	:host div.footer {
		padding: var(--spacing-xs) var(--spacing-m);
	}
	:host > div > div.content + div.footer {
		border-top: 2px solid var(--color-blue);
	}`,"KOL-INPUT-CHECKBOX":`input[type="checkbox"] {
		background-color: var(--color-white);
		border-width: 2px;
		border-style: solid;
		color: var(--color-grey);
		line-height: 1.5em;
		font-size: 1rem;
	}
	input[type="checkbox"]:focus {
		outline-color: var(--color-blue);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 2px;
	}
	input[type="checkbox"] {
		border-color: var(--color-grey-75);
	}
	input[type="checkbox"]:checked {
		background-color: var(--color-blue);
		border-color: var(--color-blue);
	}
	input[type="checkbox"]:hover {
		border-color: var(--color-blue);
	}
	input[type="checkbox"]:checked:hover {
		background-color: var(--color-blue-130);
		border-color: var(--color-blue-130);
	}
	input[type="checkbox"]:checked::before {
		border-color: var(--color-white);
	}
	input[type="checkbox"]:indeterminate:hover::before {
		background-color: var(--color-blue-130);
	}
	.error input[type="checkbox"] {
		border-color: var(--color-red);
	}
	.error input[type="checkbox"]:checked {
		background-color: var(--color-red);
		border-color: var(--color-red);
	}
	.error input[type="checkbox"]:hover {
		border-color: var(--color-red);
	}
	.error input[type="checkbox"]:checked:hover {
		background-color: var(--color-red-1xx);
		border-color: var(--color-red-1xx);
	}
	.error input[type="checkbox"]:indeterminate:hover::before {
		background-color: var(--color-red-1xx);
	}
	.error.required label > span::after {
		color: var(--color-red);
	}
	.switch input[type="checkbox"]::before,
	.switch input[type="checkbox"]:indeterminate::before {
		background-color: var(--color-grey-75);
	}
	.switch input[type="checkbox"]:hover::before,
	.switch input[type="checkbox"]:indeterminate:hover::before {
		background-color: var(--color-blue);
	}
	.switch input[type="checkbox"]:checked::before,
	.switch input[type="checkbox"]:checked:hover::before {
		background-color: var(--color-white);
	}
	.switch.error input[type="checkbox"]::before {
		background-color: var(--color-red);
	}
	.switch.error input[type="checkbox"]:checked::before {
		background-color: var(--color-white);
	}
	.switch.error input[type="checkbox"]:indeterminate:hover::before {
		background-color: var(--color-red-1xx);
	}
	kol-input {
		gap: var(--spacing-xs);
	}
	kol-input > .input {
		order: 2;
	}
	kol-input > label {
		order: 3;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 4;
	}`,"KOL-INPUT-COLOR":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-FILE":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-EMAIL":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-NUMBER":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-PASSWORD":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-INPUT-TEXT":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-SELECT":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-TEXTAREA":`kol-input {
		color: var(--color-grey);
		gap: var(--spacing-xs);
	}
	input,
	select,
	textarea {
		border: none;
		margin: 1px;
		outline: none;
	}
	input,
	select:not([multiple]) {
		height: 44px !important;
		min-height: 44px !important;
	}
	label {
		font-weight: var(--font-weight-bold);
		order: 1;
	}
	.hint {
		font-size: 0.875rem;
		order: 2;
	}
	kol-alert {
		color: var(--color-red);
		font-size: 0.875em;
		margin-left: calc(-1 * var(--spacing-2xs));
		order: 3;
	}
	.input {
		min-height: 44px !important;
		border: 1px solid var(--color-grey-75);
		color: var(--color-grey);
		order: 4;
		align-items: center;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--color-grey-50);
	}
	.input:focus-within {
		box-shadow: inset 1px 1px var(--color-blue), inset -1px -1px var(--color-blue);
		outline: none;
	}
	.input:focus-within,
	.input:hover {
		border-color: var(--color-blue) !important;
	}
	.error .input {
		border-color: var(--color-red);
	}`,"KOL-TABLE":`:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	caption {
		padding: 0.5em;
	}
	th {
		font-weight: normal;
		color: var(--color-midnight);
	}
	:host table thead tr:first-child th,
	:host table thead tr:first-child td {
		border-width: 0;
		border-top-width: 2px;
		border-style: solid;
		border-color: var(--color-ice);
	}
	table {
		width: 100%;
		border-spacing: 0;
	}
	table,
	:host table thead tr:last-child th,
	:host table thead tr:last-child td {
		border-width: 0;
		border-bottom-width: 2px;
		border-style: solid;
		border-color: var(--color-ice);
	}
	th {
		background-color: var(--color-white);
	}
	th div {
		width: 100%;
		display: flex;
		gap: 0.5em;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	th div.center {
		justify-content: center;
	}
	th div.right {
		justify-content: end;
	}
	tbody tr:nth-child(odd) {
		background-color: var(--color-grey-10);
	}
	th,
	td {
		padding: 0.5em;
	}
	td.center > div {
		display: flex;
		justify-content: center;
	}
	td.right > div {
		display: flex;
		justify-content: end;
	}
	th[aria-sort="ascending"],
	th[aria-sort="descending"] {
		font-weight: 700;
	}
	:host > div:last-child {
		padding: 0.5em;
	}
	:host > div:last-child,
	:host > div:last-child > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 1em;
	}
	@media (min-width: 1024px) {
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			grid-auto-flow: column;
		}
		:host > div:last-child kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,"KOL-TABS":`:host {
		--kolibri-spacing: 0.25rem;
	}
	kol-button-group-wc {
		border-bottom: 1px solid var(--color-grey-25);
		margin-bottom: -1px;
	}
	kol-button-group-wc button {
		border: none;
		margin-bottom: -1px;
	}
	kol-button-group-wc button kol-span-wc {
		padding: 0.5rem;
		min-height: 44px;
		min-width: 44px;
	}
	kol-button-group-wc button.selected kol-span-wc {
		border-color: var(--color-grey-25);
		border-style: solid;
		border-width: 1px;
		border-bottom-color: white;
		border-top-color: var(--color-blue);
		box-shadow: 0 -3px var(--color-blue);
		font-weight: var(--font-weight-bold);
		color: var(--color-blue);
	}
	kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
		color: var(--color-blue-130);
	}
	kol-button-group-wc button:focus kol-span-wc {
		outline-color: var(--color-blue-130);
		outline-style: solid;
		outline-width: 2px;
	}`,"KOL-LINK":`a,
	button {
		appearance: none;
		color: var(--color-blue);
		text-decoration: underline;
	}
	a:hover,
	button:hover {
		color: var(--color-blue-130);
	}`,"KOL-BUTTON-LINK":`a,
	button {
		appearance: none;
		color: var(--color-blue);
		text-decoration: underline;
	}
	a:hover,
	button:hover {
		color: var(--color-blue-130);
	}`}),iT=$o.createTheme("mapz",{GLOBAL:`:host {
		--kolibri-border-color: unset;
		--kolibri-border-radius: unset;
		--kolibri-border-width: unset;
		--kolibri-color-error: unset;
		--kolibri-color-info: unset;
		--kolibri-color-success: unset;
		--kolibri-color-warning: unset;
		--kolibri-color-primary: unset;
		--kolibri-color-secondary: unset;
		--kolibri-color-normal: unset;
		--kolibri-color-danger: unset;
		--kolibri-color-ghost: unset;
		--kolibri-color-disabled: unset;
		--kolibri-color-text: unset;
		--kolibri-color-visited: unset;
		--kolibri-font-family: unset;
		--kolibri-font-size: unset;
		--kolibri-spacing: unset;
	}
	:host {
		--kolibri-background-color: white;
		--kolibri-background-color-modal: rgba(0, 0, 0, 0.5);
		--kolibri-border-color: #aaaaaa;
		--kolibri-border-radius: 0.25rem;
		--kolibri-border-width: 2px;
		--kolibri-color: black;
		--kolibri-color-undefined: #fb00d2;
		--kolibri-color-visited: #880b73;
		--kolibri-color-accent: #ffb752; /* #ef9e48 */
		--kolibri-color-active: #1e538f;
		--kolibri-color-hover: #1e538f;
		--kolibri-color-focus: #1e538f;
		--kolibri-color-danger: #ad0e0b; /* --kolibri-color-dark: #222222; */
		--kolibri-color-error: #ad0e0b;
		--kolibri-color-ghost: #333333;
		--kolibri-color-info: #28568a; /* --kolibri-color-light: #f2f2f2; */
		--kolibri-color-normal: #326cae;
		--kolibri-color-outline: var(--kolibri-color-focus);
		--kolibri-color-primary: #1e538f;
		--kolibri-color-secondary: #444444;
		--kolibri-color-spin-1: #000000;
		--kolibri-color-spin-2: #ff0000;
		--kolibri-color-spin-3: #ffcc00;
		--kolibri-color-success: #12632f;
		--kolibri-color-warning: #854000;
		--kolibri-color-gray: #666;
		--kolibri-font-family: var(--font-family);
		--kolibri-font-size: var(--font-size);
		--kolibri-hyphens: auto;
		--kolibri-line-height: 1.5em;
		--kolibri-shadow-color: black;
		--kolibri-spacing: 0.25em;
		--spacing: 0.25em;
		--font-family: Roboto, Droid Sans, Arial, Helvetica, sans-serif;
		--font-size: 16px;
	}
	*[tabindex]:focus,
	a:focus,
	button:focus,
	input:focus,
	select:focus,
	summary:focus,
	textarea:focus {
		cursor: pointer;
		outline-color: var(--kolibri-color-outline);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 3px;
		transition: outline-offset 0.2s linear;
	}`,"KOL-BUTTON":`a,
	button {
		border-radius: var(--kolibri-border-radius);
		overflow: hidden;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		border-radius: var(--kolibri-border-radius);
		border-style: solid;
		border-width: 2px;
		min-height: 44px;
		min-width: 44px;
		box-shadow: 0 0 0.25em gray;
		font-family: var(--kolibri-font-family);
		font-size: inherit;
		line-height: 1.25em;
		padding: calc(2 * var(--kolibri-spacing));
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
	}
	kol-link-wc.primary > a > kol-span-wc,
	kol-link-wc.primary > a:disabled:hover > kol-span-wc,
	button.primary > kol-span-wc,
	button.primary:disabled:hover > kol-span-wc {
		background-color: var(--kolibri-color-primary);
		border-color: var(--kolibri-color-primary);
		color: white;
	}
	kol-link-wc.primary > a:hover > kol-span-wc,
	kol-link-wc.primary > a:focus > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.primary:focus > kol-span-wc {
		color: var(--kolibri-color-primary);
	}
	kol-link-wc.secondary > a > kol-span-wc,
	kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
	button.secondary > kol-span-wc,
	button.secondary:disabled:hover > kol-span-wc {
		background-color: var(--kolibri-color-secondary);
		border-color: var(--kolibri-color-secondary);
		color: white;
	}
	kol-link-wc.secondary > a:hover > kol-span-wc,
	kol-link-wc.secondary > a:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.secondary:focus > kol-span-wc {
		color: var(--kolibri-color-secondary);
	}
	kol-link-wc.normal > a > kol-span-wc,
	kol-link-wc.normal > a:disabled:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:disabled:hover > kol-span-wc {
		background-color: var(--kolibri-color-normal);
		border-color: var(--kolibri-color-normal);
		color: white;
	}
	kol-link-wc.normal > a:hover > kol-span-wc,
	kol-link-wc.normal > a:focus > kol-span-wc,
	button.normal:hover > kol-span-wc,
	button.normal:focus > kol-span-wc {
		color: var(--kolibri-color-normal);
	}
	kol-link-wc.danger > a > kol-span-wc,
	kol-link-wc.danger > a:disabled:hover > kol-span-wc,
	button.danger > kol-span-wc,
	button.danger:disabled:hover > kol-span-wc {
		background-color: var(--kolibri-color-danger);
		border-color: var(--kolibri-color-danger);
		color: white;
	}
	kol-link-wc.danger > a:hover > kol-span-wc,
	kol-link-wc.danger > a:focus > kol-span-wc,
	button.danger:hover > kol-span-wc,
	button.danger:focus > kol-span-wc {
		color: var(--kolibri-color-danger);
	}
	kol-link-wc.ghost > a > kol-span-wc,
	kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
	button.ghost > kol-span-wc,
	button.ghost:disabled:hover > kol-span-wc {
		background-color: white;
		border-color: var(--kolibri-color-ghost);
		color: var(--kolibri-color-ghost);
	}
	kol-link-wc.ghost > a:hover > kol-span-wc,
	kol-link-wc.ghost > a:focus > kol-span-wc,
	button.ghost:hover > kol-span-wc,
	button.ghost:focus > kol-span-wc {
		background-color: var(--kolibri-color-ghost);
		color: white;
	}
	kol-link-wc > a:hover > kol-span-wc,
	kol-link-wc > a:focus > kol-span-wc,
	button:hover > kol-span-wc,
	button:focus > kol-span-wc {
		background-color: white;
		box-shadow: 0 0 0.25em black;
	}`,"KOL-ALERT":`:host {
		--kolibri-border-width: 1px;
	}
	.heading kol-icon {
		align-self: stretch;
		align-items: center;
	}
	.heading .heading-icon {
		height: 100%;
		width: 2em;
		padding: calc(2 * var(--kolibri-spacing));
	}
	div.default {
		border-color: var(--kolibri-color-gray);
	}
	.default .heading-icon {
		background-color: var(--kolibri-color-gray);
	}
	div.error {
		border-color: var(--kolibri-color-error);
	}
	.error .heading-icon {
		background-color: var(--kolibri-color-error);
	}
	div.info {
		border-color: var(--kolibri-color-info);
	}
	.info .heading-icon {
		background-color: var(--kolibri-color-info);
	}
	div.success {
		border-color: var(--kolibri-color-success);
	}
	.success .heading-icon {
		background-color: var(--kolibri-color-success);
	}
	div.warning {
		border-color: var(--kolibri-color-warning);
	}
	.warning .heading-icon {
		background-color: var(--kolibri-color-warning);
	}`,"KOL-INPUT-TEXT":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--kolibri-color-secondary);
	}
	kol-input > label {
		order: 1;
	}
	kol-input > label > span {
		color: var(--default-letter);
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		color: var(--default-letter);
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input::placeholder {
		color: var(--default-border-hover);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--background-light-grey);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--kolibri-color-primary);
		color: white;
	}`,"KOL-BUTTON-GROUP":`div {
		display: inline-flex;
		flex-wrap: wrap;
		padding: 0.25em;
		border-radius: 5px;
		gap: 0.25em;
	}`,"KOL-INPUT-PASSWORD":`:host {
		--kolibri-spacing: 0.25rem;
	}
	kol-input {
		display: grid;
		padding: 0;
		margin: 0;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--kolibri-color-secondary);
	}
	kol-input > label {
		order: 1;
	}
	kol-input > label > span {
		color: var(--default-letter);
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		color: var(--default-letter);
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input::placeholder {
		color: var(--default-border-hover);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--background-light-grey);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--kolibri-color-primary);
		color: white;
	}`,"KOL-INPUT-NUMBER":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--kolibri-color-secondary);
	}
	kol-input > label {
		order: 1;
	}
	kol-input > label > span {
		color: var(--default-letter);
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		color: var(--default-letter);
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input::placeholder {
		color: var(--default-border-hover);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--background-light-grey);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--kolibri-color-primary);
		color: white;
	}`,"KOL-INPUT-EMAIL":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--kolibri-color-secondary);
	}
	kol-input > label {
		order: 1;
	}
	kol-input > label > span {
		color: var(--default-letter);
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		color: var(--default-letter);
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input::placeholder {
		color: var(--default-border-hover);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--background-light-grey);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--kolibri-color-primary);
		color: white;
	}`,"KOL-INPUT-FILE":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--kolibri-color-secondary);
	}
	kol-input > label {
		order: 1;
	}
	kol-input > label > span {
		color: var(--default-letter);
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		color: var(--default-letter);
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input::placeholder {
		color: var(--default-border-hover);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--background-light-grey);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--kolibri-color-primary);
		color: white;
	}`,"KOL-TEXTAREA":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--kolibri-color-secondary);
	}
	kol-input > label {
		order: 1;
	}
	kol-input > label > span {
		color: var(--default-letter);
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		color: var(--default-letter);
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input::placeholder {
		color: var(--default-border-hover);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--background-light-grey);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--kolibri-color-primary);
		color: white;
	}`,"KOL-HEADING":`h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1.25em;
		margin: 0;
		padding: 0;
	}
	h1 {
		font-size: 1.5rem !important;
	}
	h2 {
		font-size: 1.4rem !important;
	}
	h3 {
		font-size: 1.3rem !important;
	}
	h4 {
		font-size: 1.2rem !important;
	}
	h5 {
		font-size: 1.1rem !important;
	}
	h6 {
		font-size: 1rem !important;
	}`,"KOL-INPUT-CHECKBOX":`/* ALL INPUT, SELECT, TEXTAREA */
	label {
		cursor: pointer;
	}
	input {
		color: var(--default-letter);
		border-color: var(--default-border);
		border-width: 2px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 16px;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	input:hover {
		border-color: var(--kolibri-color-primary);
	} /* NEU */
	kol-input {
		display: grid;
		align-items: center;
		justify-items: left;
		width: 100%;
	}
	kol-input.checkbox {
		grid-template-columns: calc(6 * var(--spacing)) auto;
	}
	kol-input.switch {
		grid-template-columns: calc(13 * var(--spacing)) auto;
	}
	kol-input > div.input {
		display: inline-flex;
		order: 1;
	}
	kol-input > div.input input {
		margin: 0px;
	}
	kol-input > label {
		order: 2;
		padding-left: calc(2 * var(--spacing));
	}
	kol-input > kol-alert.error {
		order: 3;
		padding-top: 0.25em;
		grid-column: span 2 / auto;
	} /* CHECKBOX */
	input[type="checkbox"] {
		appearance: none;
		background-color: white;
		cursor: pointer;
		transition: 0.5s;
	}
	input[type="checkbox"].kol-disabled:before {
		cursor: not-allowed;
	}
	input[type="checkbox"]:before {
		content: "";
		cursor: pointer;
	}
	input[type="checkbox"]:checked {
		background-color: var(--kolibri-color-primary);
		border-color: var(--kolibri-color-primary);
	}
	.checkbox input[type="checkbox"] {
		border-radius: 0.25em;
		height: calc(6 * var(--kolibri-spacing));
		min-width: calc(6 * var(--kolibri-spacing));
		width: calc(6 * var(--kolibri-spacing));
	}
	.checkbox input[type="checkbox"]:before {
		border-radius: 0.25em;
		background-color: transparent;
		display: block;
		height: calc(6 * var(--kolibri-spacing));
		position: relative;
		width: calc(6 * var(--kolibri-spacing));
	}
	.checkbox input[type="checkbox"]:checked:before {
		border-right-width: 3px;
		border-bottom-width: 3px;
		left: calc(1.5 * var(--kolibri-spacing) - 2px);
		top: calc(2.85 * var(--kolibri-spacing) - 2px);
		transform: rotate(40deg) translate(-50%, -50%);
		background-color: transparent;
		border-width: 0px 3px 3px 0px;
		border-color: white;
		border-radius: 1px;
		border-style: solid;
		height: calc(3 * var(--kolibri-spacing));
		width: calc(1.5 * var(--kolibri-spacing));
	}
	.checkbox input[type="checkbox"]:indeterminate:before {
		background-color: var(--kolibri-color-normal);
		height: 0.375rem;
		top: 0.45rem;
		left: 0.15rem;
		width: calc(4 * var(--kolibri-spacing));
	}
	.switch input[type="checkbox"] {
		min-width: 3.2em;
		width: 3.2em;
		height: 1.7em;
		border-radius: 0.25em;
		display: inline-block;
		position: relative;
	}
	.switch input[type="checkbox"]:before {
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-ms-transition: 0.5s;
		transition: 0.5;
		width: 1.2em;
		height: 1.2em;
		left: calc(0.25em - 2px);
		top: calc(0.25em - 2px);
		border-radius: 0.25em;
		background-color: black;
		position: absolute;
	}
	.switch input[type="checkbox"]:checked:before {
		-webkit-transform: translateX(1.5em);
		-moz-transform: translateX(1.5em);
		-ms-transform: translateX(1.5em);
		transform: translateX(1.5em);
		background-color: white;
	}
	.switch input[type="checkbox"]:indeterminate:before {
		-webkit-transform: translateX(0.75em);
		-moz-transform: translateX(0.75em);
		-ms-transform: translateX(0.75em);
		transform: translateX(0.75em);
		background-color: var(--kolibri-color-primary);
	}
	.disabled {
		opacity: 0.33;
	}`,"KOL-INPUT-RADIO":`label {
		cursor: pointer;
		display: grid;
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
	}
	input {
		cursor: pointer;
		width: 100%;
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 16px;
	}
	input:hover {
		border-color: var(--kolibri-color-primary);
	}
	kol-alert {
		display: block;
		width: 100%;
		margin-bottom: 0.4em;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	} /* RADIO */
	fieldset {
		border: 0px;
		margin: 0px;
		padding: 0px;
		display: grid;
		gap: 0.25em;
	}
	fieldset div {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		margin-top: 0.125em;
		margin-bottom: 0.125em;
		align-items: center;
		position: relative;
	}
	fieldset div label {
		cursor: pointer;
		display: flex;
		padding-left: 0.25em;
		width: 100%;
	}
	fieldset div label span {
		margin-top: 0.125em;
	}
	fieldset div input[type="radio"] {
		appearance: none;
		transition: 0.5s;
		border-radius: 100%;
		height: calc(6 * var(--spacing));
		min-width: calc(6 * var(--spacing));
		width: calc(6 * var(--spacing));
	}
	fieldset div input[type="radio"]:before {
		content: "";
		cursor: pointer;
		left: calc(1.5 * var(--spacing) - 2px);
		top: calc(1.5 * var(--spacing) - 2px);
		position: relative;
		border-radius: 100%;
		display: block;
		height: calc(3 * var(--spacing));
		width: calc(3 * var(--spacing));
	}
	fieldset div input[type="radio"]:checked:before {
		box-shadow: 0 0 0.1rem black;
		background-color: var(--kolibri-color-primary);
	}
	fieldset #error {
		margin: 0.4em 0;
		order: 3;
	}
	fieldset legend {
		order: 1;
		display: contents;
	}
	fieldset kol-input {
		order: 2;
	}
	.disabled {
		opacity: 0.33;
	}
	fieldset.horizontal {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
	}
	fieldset.horizontal legend {
		display: inline-block;
		margin-bottom: 0.25em;
	}`,"KOL-BADGE":`:host {
		display: inline-block;
	}
	:host > span {
		border-radius: 0.3125rem;
		gap: 0.5rem;
		line-height: 1.25rem;
	}`,"KOL-LINK":`kol-link-wc,
	kol-link-button-wc {
		display: inline-block;
	}
	a,
	button {
		color: var(--kolibri-color-primary);
		text-decoration-line: underline;
	}
	a:hover,
	button:hover {
		text-decoration-thickness: 0.2em;
	}
	kol-icon {
		padding: 0 0.25em;
		display: inline-block;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`,"KOL-SPIN":`.spin {
		display: inline-block;
		height: 1rem;
		position: relative;
		width: 3rem;
	}
	.spin span {
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		border: 0.1rem solid rgb(255, 255, 255);
		border-radius: 50%;
		height: 0.8rem;
		width: 0.8rem;
		top: 0.1rem;
		position: absolute;
	}
	.spin span:nth-child(1) {
		background-color: #fc0;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin1;
		left: 0.1rem;
	}
	.spin span:nth-child(2) {
		background-color: #f00;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 0.1rem;
	}
	.spin span:nth-child(3) {
		background-color: #000;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 1.1rem;
	}
	.spin span:nth-child(4) {
		background-color: #666;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin3;
		left: 2.1rem;
	}
	@keyframes spin1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes spin2 {
		0% {
			transform: translate(0px, 0px);
		}
		100% {
			transform: translate(1rem, 0px);
		}
	}
	@keyframes spin3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}`,"KOL-PROGRESS":`:host progress,
	:host span {
		display: block;
		height: 0px;
		overflow: hidden;
		width: 0px;
	}
	svg line:first-child,
	svg circle:first-child {
		fill: transparent;
		stroke: #efefef;
	}
	svg line:last-child,
	svg circle:last-child {
		stroke: var(--kolibri-color-normal);
		fill: transparent;
	}`,"KOL-SELECT":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--kolibri-color-secondary);
	}
	kol-input > label {
		order: 1;
	}
	kol-input > label > span {
		color: var(--default-letter);
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		color: var(--default-letter);
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input::placeholder {
		color: var(--default-border-hover);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--background-light-grey);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--kolibri-color-primary);
		color: white;
	}`,"KOL-INPUT-COLOR":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--kolibri-color-secondary);
	}
	kol-input > label {
		order: 1;
	}
	kol-input > label > span {
		color: var(--default-letter);
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		color: var(--default-letter);
		border-color: var(--kolibri-border-color);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input::placeholder {
		color: var(--default-border-hover);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--background-light-grey);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--kolibri-color-primary);
		color: white;
	}`,"KOL-ACCORDION":`:host > div {
		font-family: var(--font-family);
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		display: grid;
		border-color: var(--kolibri-border-color);
		border-width: 1px;
		border-style: solid;
		border-radius: 0.25rem;
	}
	:host > div > kol-heading-wc {
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host > div > kol-heading-wc button {
		cursor: pointer;
		width: 100%;
		margin: 0;
		display: flex;
		gap: 0.5em;
		border: 0;
		align-items: center;
		overflow: hidden;
		font-size: inherit;
		line-height: 1.75em;
		background-color: transparent;
		padding: 0.5rem;
	}
	:host > div > kol-heading-wc button kol-icon {
		width: 1.5em;
	}
	:host > div div[part="header"],
	:host > div[part*="open"] div[part="content"] {
		margin: 0;
		padding-left: 2.5em;
	}
	:host > div > kol-heading-wc button kol-icon::part(icon) {
		color: var(--color-midnight);
	}
	button {
		cursor: pointer;
		font-weight: inherit;
		font-size: inherit;
		line-height: inherit;
	}`,"KOL-CARD":`:host > div {
		border-color: var(--kolibri-border-color);
		border-style: solid;
		border-width: 2px;
		border-radius: 0.25rem;
		display: grid;
		width: 100%;
		height: 100%;
		background-color: white;
		grid-template-rows: min-content 2fr min-content;
	}
	:host kol-heading-wc {
		display: inline-flex;
		font-style: normal;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host div.footer,
	:host div.header {
		padding: 0.5rem;
	}
	:host div.content {
		padding: 0;
	}
	:host div.content,
	:host div.content + div.footer {
		border-top: 1px solid var(--kolibri-border-color);
	}`,"KOL-LINK-GROUP":`ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	nav.horizontal ul {
		display: flex;
		flex-wrap: wrap;
	}
	nav.horizontal li {
		margin-left: 1.25rem;
		margin-right: 0.25rem;
	}
	nav.horizontal li:first-child {
		margin-left: 0;
	}
	nav.horizontal li:last-child {
		margin-right: 0;
	}
	nav.vertical li {
		margin-left: 1.75rem;
		margin-right: 0.5rem;
	}
	li.list-none {
		list-style-type: none !important;
		margin-left: 0;
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: 1rem;
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5em;
	}
	:host .selected button {
		min-width: 44px;
		min-height: 44px;
		box-sizing: border-box;
		line-height: 1.25em;
		font-size: inherit;
		cursor: pointer;
		border-width: 2px;
		box-shadow: 0 0 0.25em gray;
		font-family: var(--kolibri-font-family);
		width: inherit;
		border-radius: var(--kolibri-border-radius);
		border-style: solid;
		padding: calc(2 * var(--kolibri-spacing));
		display: grid;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
		text-align: center;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
	}
	:host .selected button {
		background-color: var(--kolibri-color-primary);
		border-color: var(--kolibri-color-primary);
		color: white;
		cursor: not-allowed;
		font-weight: 700;
		text-decoration: underline;
	}`,"KOL-TABS":`:host {
		font-family: var(--font-family);
	}
	:host > div {
		display: block;
		width: 100%;
	}
	:host kol-button-group-wc {
		border-radius: 0.25rem 0.25rem 0 0;
		background-color: var(--kolibri-color-normal);
	}
	:host kol-button-group-wc > div {
		display: inline-flex;
	}
	:host kol-button-group-wc > div + div {
		margin-left: 0.25em;
	}
	:host kol-button-group-wc button {
		width: 100%;
	}
	:host > div > div {
		padding: 0.25em;
		border: 1px solid var(--kolibri-border-color);
		border-radius: 0 0 0.25rem 0.25rem;
	}
	button {
		box-sizing: border-box;
		font-size: inherit;
		line-height: 1.25em;
		cursor: pointer;
		border-width: 2px;
		box-shadow: 0 0 0.25em gray;
		font-family: var(--kolibri-font-family);
		width: inherit;
		border-radius: var(--kolibri-border-radius);
		border-style: solid;
		padding: calc(2 * var(--kolibri-spacing));
		display: grid;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
		text-align: center;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
	}
	kol-button-wc button.selected,
	kol-button-wc[aria-selected="true"] button {
		background-color: white;
		border-bottom-width: 0.25em !important;
		border-bottom-style: solid;
		border-bottom-color: var(--kolibri-color-accent) !important;
	}
	button > kol-span-wc span {
		display: flex;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
	}
	button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	button.primary,
	button.primary:disabled:hover {
		background-color: var(--kolibri-color-primary);
		border-color: var(--kolibri-color-primary);
		color: white;
	}
	button.primary:hover,
	button.primary:focus {
		color: var(--kolibri-color-primary);
	}
	button.secondary,
	button.secondary:disabled:hover {
		background-color: var(--kolibri-color-secondary);
		border-color: var(--kolibri-color-secondary);
		color: white;
	}
	button.secondary:hover,
	button.secondary:focus {
		color: var(--kolibri-color-secondary);
	}
	button.normal,
	button.normal:disabled:hover {
		background-color: var(--kolibri-color-normal);
		border-color: var(--kolibri-color-normal);
		color: white;
	}
	button.normal:hover,
	button.normal:focus {
		color: var(--kolibri-color-normal);
	}
	button.danger,
	button.danger:disabled:hover {
		background-color: var(--kolibri-color-danger);
		border-color: var(--kolibri-color-danger);
		color: white;
	}
	button.danger:hover,
	button.danger:focus {
		color: var(--kolibri-color-danger);
	}
	button.ghost,
	button.ghost:disabled:hover {
		background-color: white;
		border-color: var(--kolibri-color-ghost);
		color: var(--kolibri-color-ghost);
	}
	button.ghost:hover,
	button.ghost:focus {
		background-color: var(--kolibri-color-ghost);
		color: white;
	}
	button:hover,
	button:focus {
		background-color: white;
		box-shadow: 0 0 0.25em black;
	}
	button:active {
		outline: 0 !important;
		box-shadow: none !important;
	}
	.close-button {
		font-size: 25%;
		height: fit-content;
		width: 0;
	}
	.close-button button {
		width: 1rem;
		position: relative;
		height: 1rem;
		left: -4.25em;
		top: 0.25em;
	}
	:host > div {
		display: grid;
	}
	:host > div.tabs-align-left {
		grid-template-columns: auto 1fr;
	}
	:host > div.tabs-align-right {
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-bottom kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		order: 1;
	}
	:host > div.tabs-align-left kol-button-group-wc > div,
	:host > div.tabs-align-left kol-button-group-wc > div > div,
	:host > div.tabs-align-right kol-button-group-wc > div,
	:host > div.tabs-align-right kol-button-group-wc > div > div {
		display: grid;
	}
	:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
	:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
		width: 100%;
	}
	:host > div.tabs-align-bottom kol-button-group-wc div,
	:host > div.tabs-align-top kol-button-group-wc div {
		display: flex;
		flex-wrap: wrap;
	}
	:host > div.tabs-align-bottom > kol-button-group-wc {
		border-radius: 0 0 0.25rem 0.25rem;
	}
	:host > div.tabs-align-bottom > div {
		border-radius: 0.25rem 0.25rem 0 0;
	}
	:host > div.tabs-align-top > kol-button-group-wc {
		border-radius: 0.25rem 0.25rem 0 0;
	}
	:host > div.tabs-align-top > div {
		border-radius: 0 0 0.25rem 0.25rem;
	}
	:host > div.tabs-align-left > kol-button-group-wc {
		border-radius: 0.25rem 0 0 0.25rem;
	}
	:host > div.tabs-align-left > div {
		border-radius: 0 0.25rem 0.25rem 0;
	}
	:host > div.tabs-align-right > kol-button-group-wc {
		border-radius: 0 0.25rem 0.25rem 0;
	}
	:host > div.tabs-align-right > div {
		border-radius: 0.25rem 0 0 0.25rem;
	}`,"KOL-TOAST":`:host > div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		z-index: 200;
	}
	:host > div > kol-alert {
		display: block;
		margin: auto;
		padding: 1rem;
		max-width: 750px;
	}
	:host > div > kol-button-wc {
		top: 0;
		position: relative;
		display: block;
		margin: auto;
		width: 1em;
	}`,"KOL-NAV":`* {
		hyphens: var(--kolibri-hyphens);
		font-family: var(--font-family);
		line-height: var(--kolibri-line-height);
		word-break: break-word;
	}
	.list {
		background-color: var(--kolibri-color-normal);
		border-radius: var(--kolibri-border-radius);
		color: white;
	}
	.list.vertical > li:not(:first-child) {
		border-top: 0.1em dotted white;
	}
	.list.horizontal > li:not(:first-child) {
		border-left: 0.1em dotted white;
	}
	.vertical li.has-children.selected {
		border-right: 0.375em solid var(--kolibri-color-accent);
	}
	.entry {
		padding: 0.125em;
	}
	.entry:focus,
	.entry:hover {
		background-color: var(--kolibri-color-focus);
	}
	.entry.selected {
		background-color: hsla(0, 0%, 100%, 0.2);
	}
	a {
		border: 1px solid transparent;
		border-radius: var(--kolibri-border-radius);
		color: inherit;
		display: flex;
		line-height: 2em;
		padding: 0.5em;
		text-decoration: none;
	}
	a:focus-visible {
		position: relative;
		z-index: 1;
	}
	a kol-icon + span {
		margin-left: 0.5rem;
	}
	.expand-button-container {
		margin-right: 3px;
	}
	.expand-button {
		color: inherit;
	}
	.has-link .expand-button {
		background-color: hsla(0, 0%, 100%, 0.2);
	}
	.has-link .expand-button:hover {
		background-color: hsla(0, 0%, 100%, 0.4);
	}`,"KOL-TABLE":`:host * {
		hyphens: var(--kolibri-hyphens);
		font-family: var(--kolibri-font-family);
		line-height: var(--kolibri-line-height);
		word-break: break-word;
	}
	:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	:host > div:first-child {
		border-radius: var(--kolibri-border-radius);
		border-style: solid;
		border-width: 1px;
		border-color: var(--kolibri-border-color);
	}
	:host table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
	}
	:host table,
	:host tr,
	:host th,
	:host td {
		border: 0 solid var(--kolibri-border-color);
	}
	:host tr {
		border-top-width: 1px;
	}
	:host tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	:host th,
	:host td {
		border-right-width: 1px;
		padding: 0.25em 0.5em;
	}
	:host th {
		background-color: #eee;
	}
	:host th > div {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 0.25em;
	}
	:host > div.pagination {
		padding: 0.5em;
	}
	:host > div.pagination,
	:host > div.pagination > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 0.5em;
	}
	@media (min-width: 1024px) {
		:host > div.pagination,
		:host > div.pagination > div:last-child {
			grid-auto-flow: column;
		}
		:host > div.pagination kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,"KOL-LINK-BUTTON":`a > kol-span-wc,
	button > kol-span-wc {
		border-radius: var(--kolibri-border-radius);
		border-style: solid;
		border-width: 2px;
		min-height: 44px;
		min-width: 44px;
		box-shadow: 0 0 0.25em gray;
		font-family: var(--kolibri-font-family);
		font-size: inherit;
		line-height: 1.25em;
		padding: calc(2 * var(--kolibri-spacing));
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
	}
	kol-link-wc.primary > a > kol-span-wc,
	kol-link-wc.primary > a:disabled:hover > kol-span-wc,
	button.primary > kol-span-wc,
	button.primary:disabled:hover > kol-span-wc {
		background-color: var(--kolibri-color-primary);
		border-color: var(--kolibri-color-primary);
		color: white;
	}
	kol-link-wc.primary > a:hover > kol-span-wc,
	kol-link-wc.primary > a:focus > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.primary:focus > kol-span-wc {
		color: var(--kolibri-color-primary);
	}
	kol-link-wc.secondary > a > kol-span-wc,
	kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
	button.secondary > kol-span-wc,
	button.secondary:disabled:hover > kol-span-wc {
		background-color: var(--kolibri-color-secondary);
		border-color: var(--kolibri-color-secondary);
		color: white;
	}
	kol-link-wc.secondary > a:hover > kol-span-wc,
	kol-link-wc.secondary > a:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.secondary:focus > kol-span-wc {
		color: var(--kolibri-color-secondary);
	}
	kol-link-wc.normal > a > kol-span-wc,
	kol-link-wc.normal > a:disabled:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:disabled:hover > kol-span-wc {
		background-color: var(--kolibri-color-normal);
		border-color: var(--kolibri-color-normal);
		color: white;
	}
	kol-link-wc.normal > a:hover > kol-span-wc,
	kol-link-wc.normal > a:focus > kol-span-wc,
	button.normal:hover > kol-span-wc,
	button.normal:focus > kol-span-wc {
		color: var(--kolibri-color-normal);
	}
	kol-link-wc.danger > a > kol-span-wc,
	kol-link-wc.danger > a:disabled:hover > kol-span-wc,
	button.danger > kol-span-wc,
	button.danger:disabled:hover > kol-span-wc {
		background-color: var(--kolibri-color-danger);
		border-color: var(--kolibri-color-danger);
		color: white;
	}
	kol-link-wc.danger > a:hover > kol-span-wc,
	kol-link-wc.danger > a:focus > kol-span-wc,
	button.danger:hover > kol-span-wc,
	button.danger:focus > kol-span-wc {
		color: var(--kolibri-color-danger);
	}
	kol-link-wc.ghost > a > kol-span-wc,
	kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
	button.ghost > kol-span-wc,
	button.ghost:disabled:hover > kol-span-wc {
		background-color: white;
		border-color: var(--kolibri-color-ghost);
		color: var(--kolibri-color-ghost);
	}
	kol-link-wc.ghost > a:hover > kol-span-wc,
	kol-link-wc.ghost > a:focus > kol-span-wc,
	button.ghost:hover > kol-span-wc,
	button.ghost:focus > kol-span-wc {
		background-color: var(--kolibri-color-ghost);
		color: white;
	}
	kol-link-wc > a:hover > kol-span-wc,
	kol-link-wc > a:focus > kol-span-wc,
	button:hover > kol-span-wc,
	button:focus > kol-span-wc {
		background-color: white;
		box-shadow: 0 0 0.25em black;
	}`,"KOL-BUTTON-LINK":`a,
	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		display: inline-block;
	}
	kol-link-wc,
	kol-link-button-wc {
		display: inline-block;
	}
	a,
	button {
		color: var(--kolibri-color-primary);
		display: inline-flex;
		flex-wrap: wrap;
		text-decoration-line: underline;
	}
	a:hover,
	button:hover {
		text-decoration-thickness: 0.2em;
	}
	kol-icon {
		padding: 0 0.25em;
		display: inline-block;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`,"KOL-INDENTED-TEXT":`:host > div {
		border-left: none;
		box-shadow: -4px 0px 0px var(--kolibri-color-primary);
		padding: 0.25em 0.5em;
		width: 100%;
	}`}),aT=$o.createTheme("zoll-v2",{GLOBAL:`:host {
		--border-color: var(--color-neutral);
		--border-radius: 0.25rem;
		--box-shadow: rgba(0, 0, 0, 0.12) 0 12px 12px -4px,
			rgba(0, 0, 0, 0.04) 0 4px 4px -4px;
		--color-blau: #264f8e;
		--color-blau-dark: #08335e;
		--color-blau-light: #326cae;
		--color-akzent: #ef9e48;
		--color-akzent-dark: #da793c;
		--color-akzent-light: #f5ba6c;
		--color-neutral: #e3e3e3;
		--color-neutral-dark: #333;
		--color-neutral-light: #f7f7f7;
		--color-rot: #ce3033;
		--color-gelb: #f6cd35;
		--color-gruen: #008549;
		--color-grau-100: hsl(0 0% 0%);
		--color-grau-90: hsl(0 0% 10%);
		--color-grau-80: hsl(0 0% 20%);
		--color-grau-70: hsl(0 0% 30%);
		--color-grau-60: hsl(0 0% 40%);
		--color-grau-50: hsl(0 0% 50%);
		--color-grau-40: hsl(0 0% 60%);
		--color-grau-30: hsl(0 0% 70%);
		--color-grau-20: hsl(0 0% 80%);
		--color-grau-10: hsl(0 0% 90%);
		--color-grau-0: hsl(0 0% 100%);
		--gap: 0.25rem;
		--spacing: 0.25rem;
		--font-family: Roboto, Kreon, Georgia, Times New Roman, sans-serif;
		--font-size: 16px;
		--font-weight-bold: 700;
		--line-height-bold: 1.2em; /* em! */
		--line-height-regular: 1.5em; /* em! */
	}
	*[tabindex]:focus,a:focus,button:focus,/* input:focus, *//* select:focus, */summary:focus,/* textarea:focus, */kol-input .input:focus-within
	{
		border-radius: var(--border-radius);
		outline-color: var(--color-blau-dark);
		outline-offset: 0.125rem;
		outline-style: solid;
		outline-width: 0.125rem;
		transition: outline-offset 0.25s linear;
	}
	:host {
		display: inline-block;
		font-family: var(--font-family);
	}
	a,
	button {
		font-size: var(--font-size);
		outline: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: var(--font-weight-bold);
		line-height: var(--line-height-heading);
		margin: 0;
		padding: 0;
	}
	p {
		font-weight: var(--font-weight);
	}
	kol-span-wc,
	kol-span-wc > span {
		gap: 0.5em;
	}
	.required label span::after,
	.required legend span::after {
		color: var(--color-red);
		padding-left: 0.25em;
	}`,"KOL-BADGE":`:host {
		display: inline-block;
	}
	:host > span {
		border-radius: 0.3125rem;
		display: inline-flex;
		line-height: 1.25rem;
	}
	:host > span kol-span-wc {
		padding: 0.25rem 0.5rem;
	}
	:host > span > kol-span-wc {
		align-items: center;
		font-style: normal;
		gap: 0.5rem;
	}
	:host > span > kol-span-wc > span {
		display: flex;
		gap: 0.25rem;
	}
	:host button {
		border-radius: 0 var(--spacing) var(--spacing) 0;
	}`,"KOL-HEADING":`h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: var(--font-weight-bold);
		margin: 0;
		padding: 1rem 0;
		text-align: left;
	}
	h1 {
		font-size: 2.5rem;
		line-height: 1.2;
		padding: 0 0 1rem 0;
	}
	h2 {
		font-size: 2rem;
		line-height: 1.25;
	}
	h3 {
		font-size: 1.75rem;
		line-height: 1.29;
	}
	h4 {
		font-size: 1.5rem;
		line-height: 1.33;
	}
	h5 {
		font-size: 1.25rem;
		line-height: 1.4;
	}
	h6 {
		font-size: 1rem;
		line-height: 1.5;
	}`,"KOL-LINK":`:is(a, button) {
		align-items: baseline;
		color: var(--color-blau);
		gap: 0.25em;
	}
	a:active,
	a:focus,
	a:hover,
	button:active,
	button:focus,
	button:hover {
		outline-width: 0;
		text-decoration-line: underline;
		text-decoration-thickness: 0.1rem !important;
	}
	:is(a, button) > kol-span-wc {
		order: 1;
		gap: 0.25em;
	}
	:is(a, button) > kol-span-wc > span {
		align-items: baseline;
		gap: 0.25em;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`,"KOL-BUTTON-LINK":`button:not([role="button"]) {
		min-height: 1em;
	}
	:is(a, button) {
		align-items: baseline;
		color: var(--color-blau);
		gap: 0.25em;
	}
	a:active,
	a:focus,
	a:hover,
	button:active,
	button:focus,
	button:hover {
		outline-width: 0;
		text-decoration-line: underline;
		text-decoration-thickness: 0.1rem !important;
	}
	:is(a, button) > kol-span-wc {
		order: 1;
		gap: 0.25em;
	}
	:is(a, button) > kol-span-wc > span {
		align-items: baseline;
		gap: 0.25em;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
		line-height: 1em;
	}
	.skip:focus {
		background: white;
		left: unset;
		position: unset;
	}`,"KOL-SPIN":`.spin {
		display: inline-block;
		height: 1rem;
		position: relative;
		width: 3rem;
	}
	.spin span {
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		border: 0.1rem solid rgb(255, 255, 255);
		border-radius: 50%;
		height: 0.8rem;
		width: 0.8rem;
		top: 0.1rem;
		position: absolute;
	}
	.spin span:nth-child(1) {
		background-color: #fc0;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin1;
		left: 0.1rem;
	}
	.spin span:nth-child(2) {
		background-color: #f00;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 0.1rem;
	}
	.spin span:nth-child(3) {
		background-color: #000;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 1.1rem;
	}
	.spin span:nth-child(4) {
		background-color: #666;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin3;
		left: 2.1rem;
	}
	@keyframes spin1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes spin2 {
		0% {
			transform: translate(0px, 0px);
		}
		100% {
			transform: translate(1rem, 0px);
		}
	}
	@keyframes spin3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}`,"KOL-TABLE":`caption {
		background-color: var(--color-neutral);
		caption-side: TOP;
		font-size: 1.5rem; /* 1.75rem */ /* line-height: 3rem; */
		margin-bottom: 0.25rem;
		padding: 0.75rem;
		text-align: left;
	}
	table {
		border-spacing: 0;
		border-color: var(--color-neutral);
		border-style: solid;
		border-width: 0;
		border-top-width: 1px;
	}
	td,
	th {
		color: var(--color-neutral-dark);
		border-color: var(--color-neutral);
		border-style: solid;
		border-width: 0;
		border-bottom-width: 1px;
		padding: 0.5rem;
	}
	tbody tr:nth-child(odd) {
		background-color: var(--color-grau-10);
	}`,"KOL-ACCORDION":`:host > div {
		border-color: var(--border-color);
		border-radius: var(--border-radius);
		border-style: solid;
		border-width: 1px;
	}
	:host > div > kol-heading-wc > * {
		display: grid;
		margin: -1px;
	}
	:host > div > kol-heading-wc button > kol-span-wc {
		background-color: var(--color-neutral-light);
		border-color: var(--border-color);
		border-radius: var(--border-radius);
		border-style: solid;
		border-width: 2px;
		color: var(--color-blau);
		font-weight: var(--font-weight-bold);
		text-align: left;
		padding: 1.5rem;
	}
	:host > div > kol-heading-wc button:hover > kol-span-wc {
		border-color: var(--color-blau-dark);
	}
	:host > div > kol-heading-wc button > kol-span-wc > span {
		gap: 0.5em;
	}
	.content,
	[part*="content"] {
		padding: 1.5rem 1.5rem 2rem 1.5rem;
	}
	:host > div > kol-heading-wc button kol-icon::part(icon) {
		font-family: "Font Awesome 6 Free";
		font-weight: 900;
	}
	:host > div.open > kol-heading-wc button kol-icon::part(icon)::before {
		content: "\\f077";
	}
	:host > div.close > kol-heading-wc button kol-icon::part(icon)::before {
		content: "\\f078";
	}`,"KOL-ALERT":`:host > div {
		background-color: white;
		border-width: 2px;
		border-style: solid;
		border-radius: 0.25rem;
		color: var(--color-neutral-dark);
	}
	div > div.heading .heading-icon {
		color: inherit;
	}
	div.card {
		display: grid;
		gap: 0.625rem;
		padding: 1.5rem 1.5rem 2rem 1.5rem;
	}
	div.card .heading {
		display: flex;
	}
	div.card .heading .heading-icon {
		align-items: center;
		display: inline-flex;
		font-size: 2rem;
		margin-right: 1.5rem;
		padding: 0;
	}
	div.default {
		border-color: var(--color-neutral-dark);
	}
	div.card.default .heading {
		color: var(--color-neutral-dark);
	}
	div.info {
		border-color: var(--color-blau);
	}
	div.card.info .heading {
		color: var(--color-blau);
	}
	div.warning {
		background-color: var(--color-gelb);
		border-color: var(--color-gelb);
	}
	div.card.warning .heading {
		color: var(--color-neutral-dark);
	}
	div.error {
		border-color: var(--color-rot);
	}
	div.card.error .heading {
		color: var(--color-rot);
	}
	div.success {
		border-color: var(--color-gruen);
	}
	div.card.success .heading {
		color: var(--color-gruen);
	}
	div.card div.content {
		line-height: 1.5rem;
		padding-left: 3.5rem;
	}
	div.msg {
		border-width: 0;
		display: flex;
		gap: calc(2 * var(--gap));
		padding: var(--gap);
		font-style: italic;
		font-size: 0.8rem;
	}
	div.msg.default {
		color: var(--color-neutral-dark);
	}
	div.msg.error {
		color: var(--color-rot);
	}
	div.msg.info {
		color: var(--color-blau);
	}
	div.msg.warning {
		color: var(--color-neutral-dark);
	}
	div.msg.success {
		color: var(--color-gruen);
	}
	div > div {
		display: grid;
		gap: var(--gap);
		grid-template-columns: auto auto auto;
	}
	div > div > kol-heading-wc {
		grid-column: 1 / span 3;
	}
	:host .close button {
		border-radius: var(--border-radius);
		min-height: 44px;
		min-width: 44px;
		background-color: var(--color-neutral);
		padding: 0.75rem;
		color: var(--color-blau);
	}
	div.card .close button {
		transform: translateX(1.5rem) translateY(-2.5rem);
	}
	kol-icon::part(icon) {
		font-family: "Font Awesome 6 Free";
		font-weight: 900;
	}
	div.default kol-icon::part(icon)::before {
		content: "\\f05a";
	}
	div.error kol-icon::part(icon)::before {
		content: "\\f06a";
	}
	div.info kol-icon::part(icon)::before {
		content: "\\f0eb";
	}
	div.success kol-icon::part(icon)::before {
		content: "\\f058";
	}
	div.warning kol-icon::part(icon)::before {
		content: "\\f0eb";
	}
	:host .close button kol-icon::part(icon)::before {
		content: "\\f00d";
	}`,"KOL-CARD":`:host > div {
		border-color: var(--border-color);
		border-radius: var(--border-radius);
		border-style: solid;
		border-width: 1px;
	}
	:host > div .header {
		padding: 1.5rem;
	}`,"KOL-BUTTON":`:host > kol-button-wc > button > kol-span-wc,
	:host > kol-link-wc > a > kol-span-wc {
		border-radius: var(--border-radius);
		border-style: solid;
		border-width: 2px;
		gap: 0.5rem;
		line-height: 1rem;
	}
	:host > kol-button-wc > button > kol-span-wc:not(.icon-only),
	:host > kol-link-wc > a > kol-span-wc:not(.icon-only) {
		padding: 0.75rem 1rem;
	}
	:host > kol-button-wc > button > kol-span-wc.icon-only,
	:host > kol-link-wc > a > kol-span-wc.icon-only {
		padding: 0.75rem;
	}
	:host > kol-button-wc > button > kol-span-wc span,
	:host > kol-link-wc > a > kol-span-wc span {
		gap: 0.5rem;
	}
	:host > kol-button-wc.primary > button > kol-span-wc,
	:host > kol-link-wc.primary > a > kol-span-wc {
		background-color: var(--color-akzent);
		border-color: var(--color-akzent);
		color: white;
	}
	:host > kol-button-wc.primary > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.primary > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.primary > a:focus > kol-span-wc,
	:host > kol-link-wc.primary > a:hover > kol-span-wc {
		background-color: var(--color-akzent-dark);
	}
	:host > kol-button-wc.secondary > button > kol-span-wc,
	:host > kol-link-wc.secondary > a > kol-span-wc {
		background-color: white;
		border-color: var(--color-blau);
		color: var(--color-blau);
	}
	:host > kol-button-wc.secondary > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.secondary > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.secondary > a:focus > kol-span-wc,
	:host > kol-link-wc.secondary > a:hover > kol-span-wc {
		border-color: var(--color-blau-dark);
		color: var(--color-blau-dark);
	}
	:host > kol-button-wc.normal > button > kol-span-wc,
	:host > kol-link-wc.normal > a > kol-span-wc {
		background-color: var(--color-blau);
		border-color: var(--color-blau);
		color: white;
	}
	:host > kol-button-wc.normal > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.normal > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.normal > a:focus > kol-span-wc,
	:host > kol-link-wc.normal > a:hover > kol-span-wc {
		background-color: var(--color-blau-dark);
	}
	:host > kol-button-wc.danger > button > kol-span-wc,
	:host > kol-link-wc.danger > a > kol-span-wc {
		background-color: var(--color-rot);
		border-color: var(--color-rot);
		color: white;
	}
	:host > kol-button-wc.danger > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.danger > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.danger > a:focus > kol-span-wc,
	:host > kol-link-wc.danger > a:hover > kol-span-wc {
		background-color: var(--color-rot);
	}
	:host > kol-button-wc.ghost > button > kol-span-wc,
	:host > kol-link-wc.ghost > a > kol-span-wc {
		background-color: transparent;
		border-color: transparent;
		color: var(--color-blau);
	}
	:host > kol-button-wc.ghost > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.ghost > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.ghost > a:focus > kol-span-wc,
	:host > kol-link-wc.ghost > a:hover > kol-span-wc {
		color: var(--color-blau-dark);
	}
	:host > kol-button-wc > button:not(:disabeld):hover,
	:host > kol-link-wc > a:hover {
		outline-color: var(--color-blau-dark);
		outline-offset: 0.125rem;
		outline-style: solid;
		outline-width: 0.125rem;
		transition: outline-offset 0.2s linear;
	}
	a:focus,
	button:not(:disabled):focus {
		cursor: pointer;
		outline-color: var(--color-blau-dark);
		outline-offset: 0.125rem;
		outline-style: solid;
		outline-width: 0.125rem;
		transition: outline-offset 0.2s linear;
	}`,"KOL-LINK-BUTTON":`:host > kol-button-wc > button > kol-span-wc,
	:host > kol-link-wc > a > kol-span-wc {
		border-radius: var(--border-radius);
		border-style: solid;
		border-width: 2px;
		gap: 0.5rem;
		line-height: 1rem;
	}
	:host > kol-button-wc > button > kol-span-wc:not(.icon-only),
	:host > kol-link-wc > a > kol-span-wc:not(.icon-only) {
		padding: 0.75rem 1rem;
	}
	:host > kol-button-wc > button > kol-span-wc.icon-only,
	:host > kol-link-wc > a > kol-span-wc.icon-only {
		padding: 0.75rem;
	}
	:host > kol-button-wc > button > kol-span-wc span,
	:host > kol-link-wc > a > kol-span-wc span {
		gap: 0.5rem;
	}
	:host > kol-button-wc.primary > button > kol-span-wc,
	:host > kol-link-wc.primary > a > kol-span-wc {
		background-color: var(--color-akzent);
		border-color: var(--color-akzent);
		color: white;
	}
	:host > kol-button-wc.primary > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.primary > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.primary > a:focus > kol-span-wc,
	:host > kol-link-wc.primary > a:hover > kol-span-wc {
		background-color: var(--color-akzent-dark);
	}
	:host > kol-button-wc.secondary > button > kol-span-wc,
	:host > kol-link-wc.secondary > a > kol-span-wc {
		background-color: white;
		border-color: var(--color-blau);
		color: var(--color-blau);
	}
	:host > kol-button-wc.secondary > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.secondary > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.secondary > a:focus > kol-span-wc,
	:host > kol-link-wc.secondary > a:hover > kol-span-wc {
		border-color: var(--color-blau-dark);
		color: var(--color-blau-dark);
	}
	:host > kol-button-wc.normal > button > kol-span-wc,
	:host > kol-link-wc.normal > a > kol-span-wc {
		background-color: var(--color-blau);
		border-color: var(--color-blau);
		color: white;
	}
	:host > kol-button-wc.normal > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.normal > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.normal > a:focus > kol-span-wc,
	:host > kol-link-wc.normal > a:hover > kol-span-wc {
		background-color: var(--color-blau-dark);
	}
	:host > kol-button-wc.danger > button > kol-span-wc,
	:host > kol-link-wc.danger > a > kol-span-wc {
		background-color: var(--color-rot);
		border-color: var(--color-rot);
		color: white;
	}
	:host > kol-button-wc.danger > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.danger > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.danger > a:focus > kol-span-wc,
	:host > kol-link-wc.danger > a:hover > kol-span-wc {
		background-color: var(--color-rot);
	}
	:host > kol-button-wc.ghost > button > kol-span-wc,
	:host > kol-link-wc.ghost > a > kol-span-wc {
		background-color: transparent;
		border-color: transparent;
		color: var(--color-blau);
	}
	:host > kol-button-wc.ghost > button:not(:disabled):focus > kol-span-wc,
	:host > kol-button-wc.ghost > button:not(:disabled):hover > kol-span-wc,
	:host > kol-link-wc.ghost > a:focus > kol-span-wc,
	:host > kol-link-wc.ghost > a:hover > kol-span-wc {
		color: var(--color-blau-dark);
	}
	:host > kol-button-wc > button:not(:disabeld):hover,
	:host > kol-link-wc > a:hover {
		outline-color: var(--color-blau-dark);
		outline-offset: 0.125rem;
		outline-style: solid;
		outline-width: 0.125rem;
		transition: outline-offset 0.2s linear;
	}
	a:focus,
	button:not(:disabled):focus {
		cursor: pointer;
		outline-color: var(--color-blau-dark);
		outline-offset: 0.125rem;
		outline-style: solid;
		outline-width: 0.125rem;
		transition: outline-offset 0.2s linear;
	}`,"KOL-BUTTON-GROUP":`:host > kol-button-group-wc {
		background-color: var(--color-neutral);
		border-radius: var(--border-radius);
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}`,"KOL-PAGINATION":`:host {
		display: grid;
		gap: 1rem;
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5em;
	}
	:host .selected button > kol-span-wc {
		background-color: var(--color-akzent);
		border-color: var(--color-akzent-dark);
		border-radius: var(--border-radius);
		border-style: solid;
		border-width: 2px;
		color: white;
		cursor: not-allowed;
		font-weight: 700;
		line-height: 1rem;
		padding: 0.75rem 1rem;
		text-decoration: underline;
	}`,"KOL-TOAST":`:host > div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		z-index: 200;
	}
	:host > div > kol-alert {
		display: block;
		margin: auto;
		padding: 1rem;
		max-width: 750px;
	}
	:host > div > kol-button-wc {
		top: 0;
		position: relative;
		display: block;
		margin: auto;
		width: 1em;
	}`,"KOL-PROGRESS":`svg line:first-child,
	svg circle:first-child {
		stroke: var(--color-neutral);
	}
	svg line:last-child,
	svg circle:last-child {
		stroke: var(--color-blau);
	}`,"KOL-INPUT-CHECKBOX":`/* ALL INPUT, SELECT, TEXTAREA */
	:host {
		--spacing: 0.25rem;
	}
	input {
		border-color: var(--color-neutral);
		border-width: 2px;
		border-style: solid;
	}
	label {
		cursor: pointer;
	}
	kol-input:hover input,
	input:focus {
		border-color: var(--color-neutral-dark);
	}
	kol-input:hover label,
	kol-input:has(input:focus, select:focus, textarea:focus, ) label {
		text-decoration: underline;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	} /* NEU */
	kol-input {
		display: grid;
		align-items: center;
		justify-items: left;
		width: 100%;
	}
	kol-input.checkbox {
		grid-template-columns: calc(6 * var(--spacing)) auto;
	}
	kol-input.switch {
		grid-template-columns: calc(13 * var(--spacing)) auto;
	}
	kol-input > div.input {
		display: inline-flex;
		order: 1;
	}
	kol-input > div.input input {
		margin: 0px;
	}
	kol-input > label {
		order: 2;
		padding-left: calc(2 * var(--spacing));
	}
	kol-input > kol-alert.error {
		order: 3;
		padding-top: 0.25em;
		grid-column: span 2 / auto;
	} /* CHECKBOX */
	input[type="checkbox"] {
		appearance: none;
		background-color: white;
		cursor: pointer;
		transition: 0.5s;
	}
	input[type="checkbox"].kol-disabled:before {
		cursor: not-allowed;
	}
	input[type="checkbox"]:before {
		content: "";
		cursor: pointer;
	}
	input[type="checkbox"]:checked,
	input[type="checkbox"]:indeterminate {
		background-color: var(--color-blau);
		border-color: var(--color-blau);
	}
	.checkbox input[type="checkbox"] {
		border-radius: 0.25em;
		height: calc(6 * var(--spacing));
		min-width: calc(6 * var(--spacing));
		width: calc(6 * var(--spacing));
	}
	.checkbox input[type="checkbox"]:before {
		border-radius: 0.25em;
		background-color: transparent;
		display: block;
		height: calc(6 * var(--spacing));
		position: relative;
		width: calc(6 * var(--spacing));
	}
	.checkbox input[type="checkbox"]:checked:before {
		border-right-width: 3px;
		border-bottom-width: 3px;
		left: calc(1.5 * var(--spacing) - 2px);
		top: calc(2.85 * var(--spacing) - 2px);
		transform: rotate(40deg) translate(-50%, -50%);
		background-color: transparent;
		border-width: 0px 3px 3px 0px;
		border-color: white;
		border-radius: 1px;
		border-style: solid;
		height: calc(3 * var(--spacing));
		width: calc(1.5 * var(--spacing));
	}
	.checkbox input[type="checkbox"]:indeterminate {
		background-color: var(--color-blau);
	}
	.checkbox input[type="checkbox"]:indeterminate:before {
		background-color: white;
		height: 0.25rem;
		top: 0.5rem;
		left: 0.25rem;
		width: 0.75rem;
	}
	.switch input[type="checkbox"] {
		min-width: 3.2em;
		width: 3.2em;
		height: 1.7em;
		border-radius: 0.25em;
		display: inline-block;
		position: relative;
	}
	.switch input[type="checkbox"]:before {
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-ms-transition: 0.5s;
		transition: 0.5;
		width: 1.2em;
		height: 1.2em;
		left: calc(0.25em - 2px);
		top: calc(0.25em - 2px);
		border-radius: 0.25em;
		background-color: black;
		position: absolute;
	}
	.switch input[type="checkbox"]:checked:before {
		-webkit-transform: translateX(1.5em);
		-moz-transform: translateX(1.5em);
		-ms-transform: translateX(1.5em);
		transform: translateX(1.5em);
		background-color: white;
	}
	.switch input[type="checkbox"]:indeterminate {
		background-color: var(--color-blau);
	}
	.switch input[type="checkbox"]:indeterminate:before {
		-webkit-transform: translateX(0.75em);
		-moz-transform: translateX(0.75em);
		-ms-transform: translateX(0.75em);
		transform: translateX(0.75em);
		background-color: white;
	}
	.disabled {
		opacity: 0.33;
	}`,"KOL-INPUT-RADIO":`/* ALL INPUT, SELECT, TEXTAREA */
	:host {
		--spacing: 0.25rem;
	}
	input {
		border-color: var(--color-neutral);
		border-width: 2px;
		border-style: solid;
	}
	label {
		cursor: pointer;
	}
	kol-input:has(input:disabled) input,
	kol-input:has(input:disabled) label {
		cursor: not-allowed !important;
		opacity: 0.5;
	}
	kol-input:hover input,
	input:focus {
		border-color: var(--color-neutral-dark);
	}
	kol-input:hover label,
	kol-input:has(input:focus, select:focus, textarea:focus, ) label {
		text-decoration: underline;
	}
	.required legend > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	label {
		display: grid;
		gap: 8px;
		width: 100%;
	}
	input {
		width: 100%;
		border-color: var(--border-color);
		border-width: 2px;
		border-style: solid;
	}
	input:hover {
		border-color: var(--color-blau);
	}
	kol-alert {
		display: block;
		width: 100%;
		margin-bottom: 0.4em;
	} /* RADIO */
	fieldset {
		border: 0px;
		margin: 0px;
		padding: 0px;
		display: grid;
		gap: 0.25em;
	}
	fieldset div {
		display: flex;
		flex-direction: row;
		margin-top: 0.125em;
		margin-bottom: 0.125em;
		align-items: center;
		position: relative;
	}
	fieldset div label {
		display: flex;
		padding-left: 0.25em;
		width: 100%;
	}
	fieldset div label span {
		margin-top: 0.125em;
	}
	fieldset div input[type="radio"] {
		appearance: none;
		transition: 0.5s;
		border-radius: 100%;
		height: calc(6 * var(--spacing));
		min-width: calc(6 * var(--spacing));
		width: calc(6 * var(--spacing));
	}
	fieldset div input[type="radio"]:before {
		content: "";
		cursor: pointer;
		left: calc(1.5 * var(--spacing) - 2px);
		top: calc(1.5 * var(--spacing) - 2px);
		position: relative;
		border-radius: 100%;
		display: block;
		height: calc(3 * var(--spacing));
		width: calc(3 * var(--spacing));
	}
	fieldset div input[type="radio"]:checked:before {
		box-shadow: 0 0 0.1rem black;
		background-color: var(--color-blau);
	}
	fieldset #error {
		margin: 0.4em 0;
		order: 3;
	}
	fieldset legend {
		order: 1;
		display: contents;
	}
	fieldset kol-input {
		order: 2;
	}
	.disabled {
		opacity: 0.33;
	}
	fieldset.horizontal {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
	}
	fieldset.horizontal legend {
		display: inline-block;
		margin-bottom: 0.25em;
	}`,"KOL-INPUT-COLOR":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
		gap: 0.25rem;
	}
	kol-input > label {
		font-weight: var(--font-weight-bold);
		order: 1;
		margin-bottom: 0.25rem;
	}
	kol-input > label > span {
		color: var(--default-letter);
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > span.hint {
		color: var(--color-grau-40);
		font-style: italic;
		order: 4;
		font-size: 0.8rem;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	kol-input > .input:focus-within,
	kol-input > .input:hover {
		border-color: var(--color-grau-60);
	}
	kol-input > .input {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grau-30);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--color-grau-10);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--color-blau);
		color: white;
	}`,"KOL-INPUT-FILE":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
		gap: 0.25rem;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--color-grau-60);
	}
	kol-input > label {
		font-weight: var(--font-weight-bold);
		order: 1;
		margin-bottom: 0.25rem;
	}
	kol-input > label > span {
		color: var(--default-letter);
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > span.hint {
		color: var(--color-grau-40);
		font-style: italic;
		order: 4;
		font-size: 0.8rem;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grau-30);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--color-grau-10);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--color-blau);
		color: white;
	}`,"KOL-INPUT-EMAIL":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
		gap: 0.25rem;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--color-grau-60);
	}
	kol-input > label {
		font-weight: var(--font-weight-bold);
		order: 1;
		margin-bottom: 0.25rem;
	}
	kol-input > label > span {
		color: var(--default-letter);
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > span.hint {
		color: var(--color-grau-40);
		font-style: italic;
		order: 4;
		font-size: 0.8rem;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grau-30);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--color-grau-10);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--color-blau);
		color: white;
	}`,"KOL-INPUT-NUMBER":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
		gap: 0.25rem;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--color-grau-60);
	}
	kol-input > label {
		font-weight: var(--font-weight-bold);
		order: 1;
		margin-bottom: 0.25rem;
	}
	kol-input > label > span {
		color: var(--default-letter);
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > span.hint {
		color: var(--color-grau-40);
		font-style: italic;
		order: 4;
		font-size: 0.8rem;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grau-30);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--color-grau-10);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--color-blau);
		color: white;
	}`,"KOL-INPUT-TEXT":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
		gap: 0.25rem;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--color-grau-60);
	}
	kol-input > label {
		font-weight: var(--font-weight-bold);
		order: 1;
		margin-bottom: 0.25rem;
	}
	kol-input > label > span {
		color: var(--default-letter);
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > span.hint {
		color: var(--color-grau-40);
		font-style: italic;
		order: 4;
		font-size: 0.8rem;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grau-30);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--color-grau-10);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--color-blau);
		color: white;
	}`,"KOL-SELECT":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
		gap: 0.25rem;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--color-grau-60);
	}
	kol-input > label {
		font-weight: var(--font-weight-bold);
		order: 1;
		margin-bottom: 0.25rem;
	}
	kol-input > label > span {
		color: var(--default-letter);
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > span.hint {
		color: var(--color-grau-40);
		font-style: italic;
		order: 4;
		font-size: 0.8rem;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grau-30);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--color-grau-10);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--color-blau);
		color: white;
	}`,"KOL-TEXTAREA":`kol-input {
		display: grid;
		padding: 0;
		margin: 0;
		gap: 0.25rem;
	}
	input:focus,
	input:hover,
	select:focus,
	select:hover,
	textarea:focus,
	textarea:hover {
		border-color: var(--color-grau-60);
	}
	kol-input > label {
		font-weight: var(--font-weight-bold);
		order: 1;
		margin-bottom: 0.25rem;
	}
	kol-input > label > span {
		color: var(--default-letter);
	}
	kol-input > div.input {
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		order: 2;
	}
	kol-input > span.hint {
		color: var(--color-grau-40);
		font-style: italic;
		order: 4;
		font-size: 0.8rem;
	}
	kol-input > kol-alert.error {
		order: 3;
	}
	input,
	select,
	textarea {
		font-family: var(--font-family);
		background-color: transparent;
		box-sizing: border-box;
		font-size: 1rem;
		display: inline-flex;
		line-height: 1.5em;
		border-color: var(--color-grau-30);
		border-width: 2px;
		border-style: solid;
		padding: 0.5em 0.75em;
		border-radius: 0.25rem;
		overflow: hidden;
		width: 100%;
	}
	input:not([type="range"]),
	select:not([multiple]) {
		height: 2.75em;
	}
	textarea {
		display: inherit;
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
		background-color: var(--color-grau-10);
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	.icon-left input,
	.icon-left select {
		padding-left: 2em;
	}
	.icon-right input,
	.icon-right select {
		padding-right: 2em;
	}
	kol-button-wc button {
		border-radius: 0.25rem;
		box-sizing: border-box;
		background-color: transparent;
		cursor: pointer;
	}
	.icon-right kol-button-wc {
		margin-right: 2.5em;
	}
	.disabled {
		opacity: 0.33;
	}
	select[multiple],
	textarea {
		overflow: auto;
	}
	textarea {
		display: block;
	}
	select option {
		margin: 1px 0;
		padding: 0.5em;
		border-radius: 0.25em;
		cursor: pointer;
	}
	select option:disabled {
		cursor: not-allowed;
	}
	option:active:not(:disabled),
	option:checked:not(:disabled),
	option:focus:not(:disabled),
	option:hover:not(:disabled) {
		background-color: var(--color-blau);
		color: white;
	}`,"KOL-INDENTED-TEXT":`:host > div {
		background: white;
		border-left: none;
		box-shadow: calc(-1 * var(--gap)) 0px 0px var(--color-blau);
		padding: var(--gap) calc(2 * var(--gap));
		width: 100%;
	}`,"KOL-DETAILS":`:host details > kol-indented-text {
		margin: 0.25em 0 0 0.65em;
	}`,"KOL-NAV":`.list {
		display: flex;
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
	.list.vertical {
		flex-direction: column;
	}
	.entry {
		display: flex;
	}
	.entry kol-button-wc:first-child,
	.entry kol-link-wc,
	.entry kol-span-wc {
		flex-grow: 1;
	} /* custom. */
	nav {
		background-color: var(--color-blue);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.expand-button button {
		background-color: var(--color-blue-130);
		margin: auto;
		height: 100%;
	}
	kol-span-wc {
		border-color: transparent;
		border-style: solid;
		border-width: 2px;
		color: var(--color-white);
		font-size: 18px;
		justify-items: start;
		padding: 1rem;
		height: 100%;
	}
	li > ul,
	li + li {
		border-color: var(--color-blue-75);
		border-style: solid;
		border-width: 0;
		border-top-width: 2px;
	}
	a {
		text-decoration: none;
	}
	:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
		border-color: var(--color-white);
	}
	:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
	:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
		text-decoration: underline;
	}
	div > .expand-button kol-icon::part(icon)::before {
		content: "\\eab6";
	}
	.expanded > div > .expand-button kol-icon::part(icon)::before {
		content: "\\eab4";
	}`,"KOL-TABS":`:host > div {
		display: block;
		width: 100%;
	}
	:host kol-button-group-wc {
		border-radius: 0.25rem 0.25rem 0 0;
		background-color: var(--color-blau-light);
	}
	:host kol-button-group-wc > div {
		display: inline-flex;
	}
	:host kol-button-group-wc > div + div {
		margin-left: 0.25em;
	}
	:host kol-button-group-wc button {
		width: 100%;
	}
	:host > div > div {
		padding: 0.25em;
		border: 1px solid var(--border-color);
		border-radius: 0 0 0.25rem 0.25rem;
	}
	button {
		box-sizing: border-box;
		font-size: inherit;
		line-height: 1.25em;
		cursor: pointer;
		border-width: 2px;
		box-shadow: 0 0 0.25em gray;
		font-family: var(--font-family);
		width: inherit;
		border-radius: var(--border-radius);
		border-style: solid;
		padding: calc(2 * var(--spacing));
		display: grid;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
		text-align: center;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
	}
	kol-button-wc button.selected,
	kol-button-wc[aria-selected="true"] button {
		background-color: white;
		border-bottom-width: 0.25em !important;
		border-bottom-style: solid;
		border-bottom-color: var(--color-akzent) !important;
	}
	button > kol-span-wc span {
		display: flex;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
	}
	button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	button.primary,
	button.primary:disabled:hover {
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
	}
	button.primary:hover,
	button.primary:focus {
		color: var(--color-primary);
	}
	button.secondary,
	button.secondary:disabled:hover {
		background-color: var(--color-secondary);
		border-color: var(--color-secondary);
		color: white;
	}
	button.secondary:hover,
	button.secondary:focus {
		color: var(--color-secondary);
	}
	button.normal,
	button.normal:disabled:hover {
		background-color: var(--color-normal);
		border-color: var(--color-normal);
		color: white;
	}
	button.normal:hover,
	button.normal:focus {
		color: var(--color-normal);
	}
	button.danger,
	button.danger:disabled:hover {
		background-color: var(--color-danger);
		border-color: var(--color-danger);
		color: white;
	}
	button.danger:hover,
	button.danger:focus {
		color: var(--color-danger);
	}
	button.ghost,
	button.ghost:disabled:hover {
		background-color: white;
		border-color: var(--color-ghost);
		color: var(--color-ghost);
	}
	button.ghost:hover,
	button.ghost:focus {
		background-color: var(--color-ghost);
		color: white;
	}
	button:hover,
	button:focus {
		background-color: white;
		box-shadow: 0 0 0.25em black;
	}
	button:active {
		outline: 0 !important;
		box-shadow: none !important;
	}
	.close-button {
		font-size: 25%;
		height: fit-content;
		width: 0;
	}
	.close-button button {
		width: 1rem;
		position: relative;
		height: 1rem;
		left: -4.25em;
		top: 0.25em;
	}
	:host > div {
		display: grid;
	}
	:host > div.tabs-align-left {
		grid-template-columns: auto 1fr;
	}
	:host > div.tabs-align-right {
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-bottom kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		order: 1;
	}
	:host > div.tabs-align-left kol-button-group-wc > div,
	:host > div.tabs-align-left kol-button-group-wc > div > div,
	:host > div.tabs-align-right kol-button-group-wc > div,
	:host > div.tabs-align-right kol-button-group-wc > div > div {
		display: grid;
	}
	:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
	:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
		width: 100%;
	}
	:host > div.tabs-align-bottom kol-button-group-wc div,
	:host > div.tabs-align-top kol-button-group-wc div {
		display: flex;
		flex-wrap: wrap;
	}
	:host > div.tabs-align-bottom > kol-button-group-wc {
		border-radius: 0 0 0.25rem 0.25rem;
	}
	:host > div.tabs-align-bottom > div {
		border-radius: 0.25rem 0.25rem 0 0;
	}
	:host > div.tabs-align-top > kol-button-group-wc {
		border-radius: 0.25rem 0.25rem 0 0;
	}
	:host > div.tabs-align-top > div {
		border-radius: 0 0 0.25rem 0.25rem;
	}
	:host > div.tabs-align-left > kol-button-group-wc {
		border-radius: 0.25rem 0 0 0.25rem;
	}
	:host > div.tabs-align-left > div {
		border-radius: 0 0.25rem 0.25rem 0;
	}
	:host > div.tabs-align-right > kol-button-group-wc {
		border-radius: 0 0.25rem 0.25rem 0;
	}
	:host > div.tabs-align-right > div {
		border-radius: 0.25rem 0 0 0.25rem;
	}`,"KOL-BREADCRUMB":`kol-icon::part(icon):before {
		content: "/";