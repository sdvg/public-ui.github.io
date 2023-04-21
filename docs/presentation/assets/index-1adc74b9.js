import{defineCustomElements as Ug}from"https://esm.sh/@public-ui/components@1.5.0-rc.15/dist/loader";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();Ug();function ar(e,o){const t=Object.create(null),r=e.split(",");for(let n=0;n<r.length;n++)t[r[n]]=!0;return o?n=>!!t[n.toLowerCase()]:n=>!!t[n]}function no(e){if(ce(e)){const o={};for(let t=0;t<e.length;t++){const r=e[t],n=De(r)?Wg(r):no(r);if(n)for(const i in n)o[i]=n[i]}return o}else{if(De(e))return e;if(Ie(e))return e}}const Hg=/;(?![^(]*\))/g,qg=/:([^]+)/,Vg=/\/\*.*?\*\//gs;function Wg(e){const o={};return e.replace(Vg,"").split(Hg).forEach(t=>{if(t){const r=t.split(qg);r.length>1&&(o[r[0].trim()]=r[1].trim())}}),o}function qe(e){let o="";if(De(e))o=e;else if(ce(e))for(let t=0;t<e.length;t++){const r=qe(e[t]);r&&(o+=r+" ")}else if(Ie(e))for(const t in e)e[t]&&(o+=t+" ");return o.trim()}function ro(e){if(!e)return null;let{class:o,style:t}=e;return o&&!De(o)&&(e.class=qe(o)),t&&(e.style=no(t)),e}const Gg="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Xg="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",qu=ar(Gg),Yg=ar(Xg),Zg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jg=ar(Zg);function Vu(e){return!!e||e===""}const ot=e=>De(e)?e:e==null?"":ce(e)||Ie(e)&&(e.toString===Yu||!ue(e.toString))?JSON.stringify(e,Wu,2):String(e),Wu=(e,o)=>o&&o.__v_isRef?Wu(e,o.value):zr(o)?{[`Map(${o.size})`]:[...o.entries()].reduce((t,[r,n])=>(t[`${r} =>`]=n,t),{})}:Xu(o)?{[`Set(${o.size})`]:[...o.values()]}:Ie(o)&&!ce(o)&&!Zu(o)?String(o):o,je=Object.freeze({}),Jr=Object.freeze([]),So=()=>{},Gu=()=>!1,Qg=/^on[^a-z]/,pi=e=>Qg.test(e),ia=e=>e.startsWith("onUpdate:"),Be=Object.assign,qs=(e,o)=>{const t=e.indexOf(o);t>-1&&e.splice(t,1)},em=Object.prototype.hasOwnProperty,Se=(e,o)=>em.call(e,o),ce=Array.isArray,zr=e=>hi(e)==="[object Map]",Xu=e=>hi(e)==="[object Set]",om=e=>hi(e)==="[object RegExp]",ue=e=>typeof e=="function",De=e=>typeof e=="string",Vs=e=>typeof e=="symbol",Ie=e=>e!==null&&typeof e=="object",Ws=e=>Ie(e)&&ue(e.then)&&ue(e.catch),Yu=Object.prototype.toString,hi=e=>Yu.call(e),Gs=e=>hi(e).slice(8,-1),Zu=e=>hi(e)==="[object Object]",Xs=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gi=ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tm=ar("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Fa=e=>{const o=Object.create(null);return t=>o[t]||(o[t]=e(t))},rm=/-(\w)/g,ht=Fa(e=>e.replace(rm,(o,t)=>t?t.toUpperCase():"")),nm=/\B([A-Z])/g,Pt=Fa(e=>e.replace(nm,"-$1").toLowerCase()),Fr=Fa(e=>e.charAt(0).toUpperCase()+e.slice(1)),hr=Fa(e=>e?`on${Fr(e)}`:""),Gn=(e,o)=>!Object.is(e,o),mr=(e,o)=>{for(let t=0;t<e.length;t++)e[t](o)},aa=(e,o,t)=>{Object.defineProperty(e,o,{configurable:!0,enumerable:!1,value:t})},im=e=>{const o=parseFloat(e);return isNaN(o)?e:o},am=e=>{const o=De(e)?Number(e):NaN;return isNaN(o)?e:o};let Wc;const Ju=()=>Wc||(Wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function la(e,...o){console.warn(`[Vue warn] ${e}`,...o)}let Ao;class Qu{constructor(o=!1){this.detached=o,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ao,!o&&Ao&&(this.index=(Ao.scopes||(Ao.scopes=[])).push(this)-1)}get active(){return this._active}run(o){if(this._active){const t=Ao;try{return Ao=this,o()}finally{Ao=t}}else la("cannot run an inactive effect scope.")}on(){Ao=this}off(){Ao=this.parent}stop(o){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!o){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function lm(e){return new Qu(e)}function sm(e,o=Ao){o&&o.active&&o.effects.push(e)}function $a(){return Ao}function Ys(e){Ao?Ao.cleanups.push(e):la("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Zs=e=>{const o=new Set(e);return o.w=0,o.n=0,o},ep=e=>(e.w&tr)>0,op=e=>(e.n&tr)>0,cm=({deps:e})=>{if(e.length)for(let o=0;o<e.length;o++)e[o].w|=tr},dm=e=>{const{deps:o}=e;if(o.length){let t=0;for(let r=0;r<o.length;r++){const n=o[r];ep(n)&&!op(n)?n.delete(e):o[t++]=n,n.w&=~tr,n.n&=~tr}o.length=t}},sa=new WeakMap;let Tn=0,tr=1;const Dl=30;let ko;const Lr=Symbol("iterate"),Kl=Symbol("Map key iterate");class Js{constructor(o,t=null,r){this.fn=o,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,sm(this,r)}run(){if(!this.active)return this.fn();let o=ko,t=Wt;for(;o;){if(o===this)return;o=o.parent}try{return this.parent=ko,ko=this,Wt=!0,tr=1<<++Tn,Tn<=Dl?cm(this):Gc(this),this.fn()}finally{Tn<=Dl&&dm(this),tr=1<<--Tn,ko=this.parent,Wt=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ko===this?this.deferStop=!0:this.active&&(Gc(this),this.onStop&&this.onStop(),this.active=!1)}}function Gc(e){const{deps:o}=e;if(o.length){for(let t=0;t<o.length;t++)o[t].delete(e);o.length=0}}let Wt=!0;const tp=[];function Ir(){tp.push(Wt),Wt=!1}function Nr(){const e=tp.pop();Wt=e===void 0?!0:e}function Lo(e,o,t){if(Wt&&ko){let r=sa.get(e);r||sa.set(e,r=new Map);let n=r.get(t);n||r.set(t,n=Zs()),rp(n,{effect:ko,target:e,type:o,key:t})}}function rp(e,o){let t=!1;Tn<=Dl?op(e)||(e.n|=tr,t=!ep(e)):t=!e.has(ko),t&&(e.add(ko),ko.deps.push(e),ko.onTrack&&ko.onTrack(Object.assign({effect:ko},o)))}function Ct(e,o,t,r,n,i){const a=sa.get(e);if(!a)return;let l=[];if(o==="clear")l=[...a.values()];else if(t==="length"&&ce(e)){const c=Number(r);a.forEach((d,f)=>{(f==="length"||f>=c)&&l.push(d)})}else switch(t!==void 0&&l.push(a.get(t)),o){case"add":ce(e)?Xs(t)&&l.push(a.get("length")):(l.push(a.get(Lr)),zr(e)&&l.push(a.get(Kl)));break;case"delete":ce(e)||(l.push(a.get(Lr)),zr(e)&&l.push(a.get(Kl)));break;case"set":zr(e)&&l.push(a.get(Lr));break}const s={target:e,type:o,key:t,newValue:r,oldValue:n,oldTarget:i};if(l.length===1)l[0]&&Bl(l[0],s);else{const c=[];for(const d of l)d&&c.push(...d);Bl(Zs(c),s)}}function Bl(e,o){const t=ce(e)?e:[...e];for(const r of t)r.computed&&Xc(r,o);for(const r of t)r.computed||Xc(r,o)}function Xc(e,o){(e!==ko||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Be({effect:e},o)),e.scheduler?e.scheduler():e.run())}function fm(e,o){var t;return(t=sa.get(e))===null||t===void 0?void 0:t.get(o)}const um=ar("__proto__,__v_isRef,__isVue"),np=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vs)),pm=Ia(),hm=Ia(!1,!0),bm=Ia(!0),gm=Ia(!0,!0),Yc=mm();function mm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(o=>{e[o]=function(...t){const r=he(this);for(let i=0,a=this.length;i<a;i++)Lo(r,"get",i+"");const n=r[o](...t);return n===-1||n===!1?r[o](...t.map(he)):n}}),["push","pop","shift","unshift","splice"].forEach(o=>{e[o]=function(...t){Ir();const r=he(this)[o].apply(this,t);return Nr(),r}}),e}function vm(e){const o=he(this);return Lo(o,"has",e),o.hasOwnProperty(e)}function Ia(e=!1,o=!1){return function(r,n,i){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return o;if(n==="__v_raw"&&i===(e?o?up:fp:o?dp:cp).get(r))return r;const a=ce(r);if(!e){if(a&&Se(Yc,n))return Reflect.get(Yc,n,i);if(n==="hasOwnProperty")return vm}const l=Reflect.get(r,n,i);return(Vs(n)?np.has(n):um(n))||(e||Lo(r,"get",n),o)?l:Fe(l)?a&&Xs(n)?l:l.value:Ie(l)?e?Jo(l):Ke(l):l}}const km=ip(),wm=ip(!0);function ip(e=!1){return function(t,r,n,i){let a=t[r];if(rr(a)&&Fe(a)&&!Fe(n))return!1;if(!e&&(!ca(n)&&!rr(n)&&(a=he(a),n=he(n)),!ce(t)&&Fe(a)&&!Fe(n)))return a.value=n,!0;const l=ce(t)&&Xs(r)?Number(r)<t.length:Se(t,r),s=Reflect.set(t,r,n,i);return t===he(i)&&(l?Gn(n,a)&&Ct(t,"set",r,n,a):Ct(t,"add",r,n)),s}}function ym(e,o){const t=Se(e,o),r=e[o],n=Reflect.deleteProperty(e,o);return n&&t&&Ct(e,"delete",o,void 0,r),n}function xm(e,o){const t=Reflect.has(e,o);return(!Vs(o)||!np.has(o))&&Lo(e,"has",o),t}function _m(e){return Lo(e,"iterate",ce(e)?"length":Lr),Reflect.ownKeys(e)}const ap={get:pm,set:km,deleteProperty:ym,has:xm,ownKeys:_m},lp={get:bm,set(e,o){return la(`Set operation on key "${String(o)}" failed: target is readonly.`,e),!0},deleteProperty(e,o){return la(`Delete operation on key "${String(o)}" failed: target is readonly.`,e),!0}},Om=Be({},ap,{get:hm,set:wm}),Sm=Be({},lp,{get:gm}),Qs=e=>e,Na=e=>Reflect.getPrototypeOf(e);function Li(e,o,t=!1,r=!1){e=e.__v_raw;const n=he(e),i=he(o);t||(o!==i&&Lo(n,"get",o),Lo(n,"get",i));const{has:a}=Na(n),l=r?Qs:t?ec:Xn;if(a.call(n,o))return l(e.get(o));if(a.call(n,i))return l(e.get(i));e!==n&&e.get(o)}function Ei(e,o=!1){const t=this.__v_raw,r=he(t),n=he(e);return o||(e!==n&&Lo(r,"has",e),Lo(r,"has",n)),e===n?t.has(e):t.has(e)||t.has(n)}function Ti(e,o=!1){return e=e.__v_raw,!o&&Lo(he(e),"iterate",Lr),Reflect.get(e,"size",e)}function Zc(e){e=he(e);const o=he(this);return Na(o).has.call(o,e)||(o.add(e),Ct(o,"add",e,e)),this}function Jc(e,o){o=he(o);const t=he(this),{has:r,get:n}=Na(t);let i=r.call(t,e);i?sp(t,r,e):(e=he(e),i=r.call(t,e));const a=n.call(t,e);return t.set(e,o),i?Gn(o,a)&&Ct(t,"set",e,o,a):Ct(t,"add",e,o),this}function Qc(e){const o=he(this),{has:t,get:r}=Na(o);let n=t.call(o,e);n?sp(o,t,e):(e=he(e),n=t.call(o,e));const i=r?r.call(o,e):void 0,a=o.delete(e);return n&&Ct(o,"delete",e,void 0,i),a}function ed(){const e=he(this),o=e.size!==0,t=zr(e)?new Map(e):new Set(e),r=e.clear();return o&&Ct(e,"clear",void 0,void 0,t),r}function Ai(e,o){return function(r,n){const i=this,a=i.__v_raw,l=he(a),s=o?Qs:e?ec:Xn;return!e&&Lo(l,"iterate",Lr),a.forEach((c,d)=>r.call(n,s(c),s(d),i))}}function Pi(e,o,t){return function(...r){const n=this.__v_raw,i=he(n),a=zr(i),l=e==="entries"||e===Symbol.iterator&&a,s=e==="keys"&&a,c=n[e](...r),d=t?Qs:o?ec:Xn;return!o&&Lo(i,"iterate",s?Kl:Lr),{next(){const{value:f,done:u}=c.next();return u?{value:f,done:u}:{value:l?[d(f[0]),d(f[1])]:d(f),done:u}},[Symbol.iterator](){return this}}}}function Nt(e){return function(...o){{const t=o[0]?`on key "${o[0]}" `:"";console.warn(`${Fr(e)} operation ${t}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function zm(){const e={get(i){return Li(this,i)},get size(){return Ti(this)},has:Ei,add:Zc,set:Jc,delete:Qc,clear:ed,forEach:Ai(!1,!1)},o={get(i){return Li(this,i,!1,!0)},get size(){return Ti(this)},has:Ei,add:Zc,set:Jc,delete:Qc,clear:ed,forEach:Ai(!1,!0)},t={get(i){return Li(this,i,!0)},get size(){return Ti(this,!0)},has(i){return Ei.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Ai(!0,!1)},r={get(i){return Li(this,i,!0,!0)},get size(){return Ti(this,!0)},has(i){return Ei.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Ai(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Pi(i,!1,!1),t[i]=Pi(i,!0,!1),o[i]=Pi(i,!1,!0),r[i]=Pi(i,!0,!0)}),[e,t,o,r]}const[Lm,Em,Tm,Am]=zm();function Ra(e,o){const t=o?e?Am:Tm:e?Em:Lm;return(r,n,i)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?r:Reflect.get(Se(t,n)&&n in r?t:r,n,i)}const Pm={get:Ra(!1,!1)},Cm={get:Ra(!1,!0)},Fm={get:Ra(!0,!1)},$m={get:Ra(!0,!0)};function sp(e,o,t){const r=he(t);if(r!==t&&o.call(e,r)){const n=Gs(e);console.warn(`Reactive ${n} contains both the raw and reactive versions of the same object${n==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const cp=new WeakMap,dp=new WeakMap,fp=new WeakMap,up=new WeakMap;function Im(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nm(e){return e.__v_skip||!Object.isExtensible(e)?0:Im(Gs(e))}function Ke(e){return rr(e)?e:ja(e,!1,ap,Pm,cp)}function Rm(e){return ja(e,!1,Om,Cm,dp)}function Jo(e){return ja(e,!0,lp,Fm,fp)}function Yr(e){return ja(e,!0,Sm,$m,up)}function ja(e,o,t,r,n){if(!Ie(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(o&&e.__v_isReactive))return e;const i=n.get(e);if(i)return i;const a=Nm(e);if(a===0)return e;const l=new Proxy(e,a===2?r:t);return n.set(e,l),l}function Er(e){return rr(e)?Er(e.__v_raw):!!(e&&e.__v_isReactive)}function rr(e){return!!(e&&e.__v_isReadonly)}function ca(e){return!!(e&&e.__v_isShallow)}function da(e){return Er(e)||rr(e)}function he(e){const o=e&&e.__v_raw;return o?he(o):e}function Ma(e){return aa(e,"__v_skip",!0),e}const Xn=e=>Ie(e)?Ke(e):e,ec=e=>Ie(e)?Jo(e):e;function oc(e){Wt&&ko&&(e=he(e),rp(e.dep||(e.dep=Zs()),{target:e,type:"get",key:"value"}))}function tc(e,o){e=he(e);const t=e.dep;t&&Bl(t,{target:e,type:"set",key:"value",newValue:o})}function Fe(e){return!!(e&&e.__v_isRef===!0)}function H(e){return pp(e,!1)}function bt(e){return pp(e,!0)}function pp(e,o){return Fe(e)?e:new jm(e,o)}class jm{constructor(o,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?o:he(o),this._value=t?o:Xn(o)}get value(){return oc(this),this._value}set value(o){const t=this.__v_isShallow||ca(o)||rr(o);o=t?o:he(o),Gn(o,this._rawValue)&&(this._rawValue=o,this._value=t?o:Xn(o),tc(this,o))}}function S(e){return Fe(e)?e.value:e}const Mm={get:(e,o,t)=>S(Reflect.get(e,o,t)),set:(e,o,t,r)=>{const n=e[o];return Fe(n)&&!Fe(t)?(n.value=t,!0):Reflect.set(e,o,t,r)}};function hp(e){return Er(e)?e:new Proxy(e,Mm)}class Dm{constructor(o){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:r}=o(()=>oc(this),()=>tc(this));this._get=t,this._set=r}get value(){return this._get()}set value(o){this._set(o)}}function rc(e){return new Dm(e)}function Km(e){da(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const o=ce(e)?new Array(e.length):{};for(const t in e)o[t]=bp(e,t);return o}class Bm{constructor(o,t,r){this._object=o,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const o=this._object[this._key];return o===void 0?this._defaultValue:o}set value(o){this._object[this._key]=o}get dep(){return fm(he(this._object),this._key)}}function bp(e,o,t){const r=e[o];return Fe(r)?r:new Bm(e,o,t)}var gp;class Um{constructor(o,t,r,n){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[gp]=!1,this._dirty=!0,this.effect=new Js(o,()=>{this._dirty||(this._dirty=!0,tc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=r}get value(){const o=he(this);return oc(o),(o._dirty||!o._cacheable)&&(o._dirty=!1,o._value=o.effect.run()),o._value}set value(o){this._setter(o)}}gp="__v_isReadonly";function Hm(e,o,t=!1){let r,n;const i=ue(e);i?(r=e,n=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=e.get,n=e.set);const a=new Um(r,n,i||!n,t);return o&&!t&&(a.effect.onTrack=o.onTrack,a.effect.onTrigger=o.onTrigger),a}const Tr=[];function Xi(e){Tr.push(e)}function Yi(){Tr.pop()}function R(e,...o){Ir();const t=Tr.length?Tr[Tr.length-1].component:null,r=t&&t.appContext.config.warnHandler,n=qm();if(r)At(r,t,11,[e+o.join(""),t&&t.proxy,n.map(({vnode:i})=>`at <${Ga(t,i.type)}>`).join(`
`),n]);else{const i=[`[Vue warn]: ${e}`,...o];n.length&&i.push(`
`,...Vm(n)),console.warn(...i)}Nr()}function qm(){let e=Tr[Tr.length-1];if(!e)return[];const o=[];for(;e;){const t=o[0];t&&t.vnode===e?t.recurseCount++:o.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return o}function Vm(e){const o=[];return e.forEach((t,r)=>{o.push(...r===0?[]:[`
`],...Wm(t))}),o}function Wm({vnode:e,recurseCount:o}){const t=o>0?`... (${o} recursive calls)`:"",r=e.component?e.component.parent==null:!1,n=` at <${Ga(e.component,e.type,r)}`,i=">"+t;return e.props?[n,...Gm(e.props),i]:[n+i]}function Gm(e){const o=[],t=Object.keys(e);return t.slice(0,3).forEach(r=>{o.push(...mp(r,e[r]))}),t.length>3&&o.push(" ..."),o}function mp(e,o,t){return De(o)?(o=JSON.stringify(o),t?o:[`${e}=${o}`]):typeof o=="number"||typeof o=="boolean"||o==null?t?o:[`${e}=${o}`]:Fe(o)?(o=mp(e,he(o.value),!0),t?o:[`${e}=Ref<`,o,">"]):ue(o)?[`${e}=fn${o.name?`<${o.name}>`:""}`]:(o=he(o),t?o:[`${e}=`,o])}function Xm(e,o){e!==void 0&&(typeof e!="number"?R(`${o} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&R(`${o} is NaN - the duration expression might be incorrect.`))}const nc={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function At(e,o,t,r){let n;try{n=r?e(...r):e()}catch(i){Da(i,o,t)}return n}function Uo(e,o,t,r){if(ue(e)){const i=At(e,o,t,r);return i&&Ws(i)&&i.catch(a=>{Da(a,o,t)}),i}const n=[];for(let i=0;i<e.length;i++)n.push(Uo(e[i],o,t,r));return n}function Da(e,o,t,r=!0){const n=o?o.vnode:null;if(o){let i=o.parent;const a=o.proxy,l=nc[t];for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,l)===!1)return}i=i.parent}const s=o.appContext.config.errorHandler;if(s){At(s,null,10,[e,a,l]);return}}Ym(e,t,n,r)}function Ym(e,o,t,r=!0){{const n=nc[o];if(t&&Xi(t),R(`Unhandled error${n?` during execution of ${n}`:""}`),t&&Yi(),r)throw e;console.error(e)}}let Yn=!1,Ul=!1;const uo=[];let st=0;const Qr=[];let lt=null,Dt=0;const vp=Promise.resolve();let ic=null;const Zm=100;function so(e){const o=ic||vp;return e?o.then(this?e.bind(this):e):o}function Jm(e){let o=st+1,t=uo.length;for(;o<t;){const r=o+t>>>1;Zn(uo[r])<e?o=r+1:t=r}return o}function Ka(e){(!uo.length||!uo.includes(e,Yn&&e.allowRecurse?st+1:st))&&(e.id==null?uo.push(e):uo.splice(Jm(e.id),0,e),kp())}function kp(){!Yn&&!Ul&&(Ul=!0,ic=vp.then(xp))}function Qm(e){const o=uo.indexOf(e);o>st&&uo.splice(o,1)}function wp(e){ce(e)?Qr.push(...e):(!lt||!lt.includes(e,e.allowRecurse?Dt+1:Dt))&&Qr.push(e),kp()}function od(e,o=Yn?st+1:0){for(e=e||new Map;o<uo.length;o++){const t=uo[o];if(t&&t.pre){if(ac(e,t))continue;uo.splice(o,1),o--,t()}}}function yp(e){if(Qr.length){const o=[...new Set(Qr)];if(Qr.length=0,lt){lt.push(...o);return}for(lt=o,e=e||new Map,lt.sort((t,r)=>Zn(t)-Zn(r)),Dt=0;Dt<lt.length;Dt++)ac(e,lt[Dt])||lt[Dt]();lt=null,Dt=0}}const Zn=e=>e.id==null?1/0:e.id,ev=(e,o)=>{const t=Zn(e)-Zn(o);if(t===0){if(e.pre&&!o.pre)return-1;if(o.pre&&!e.pre)return 1}return t};function xp(e){Ul=!1,Yn=!0,e=e||new Map,uo.sort(ev);const o=t=>ac(e,t);try{for(st=0;st<uo.length;st++){const t=uo[st];if(t&&t.active!==!1){if(o(t))continue;At(t,null,14)}}}finally{st=0,uo.length=0,yp(e),Yn=!1,ic=null,(uo.length||Qr.length)&&xp(e)}}function ac(e,o){if(!e.has(o))e.set(o,1);else{const t=e.get(o);if(t>Zm){const r=o.ownerInstance,n=r&&oi(r.type);return R(`Maximum recursive updates exceeded${n?` in component <${n}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(o,t+1)}}let Gt=!1;const Gr=new Set;Ju().__VUE_HMR_RUNTIME__={createRecord:al(_p),rerender:al(rv),reload:al(nv)};const $r=new Map;function ov(e){const o=e.type.__hmrId;let t=$r.get(o);t||(_p(o,e.type),t=$r.get(o)),t.instances.add(e)}function tv(e){$r.get(e.type.__hmrId).instances.delete(e)}function _p(e,o){return $r.has(e)?!1:($r.set(e,{initialDef:$n(o),instances:new Set}),!0)}function $n(e){return th(e)?e.__vccOpts:e}function rv(e,o){const t=$r.get(e);t&&(t.initialDef.render=o,[...t.instances].forEach(r=>{o&&(r.render=o,$n(r.type).render=o),r.renderCache=[],Gt=!0,r.update(),Gt=!1}))}function nv(e,o){const t=$r.get(e);if(!t)return;o=$n(o),td(t.initialDef,o);const r=[...t.instances];for(const n of r){const i=$n(n.type);Gr.has(i)||(i!==t.initialDef&&td(i,o),Gr.add(i)),n.appContext.optionsCache.delete(n.type),n.ceReload?(Gr.add(i),n.ceReload(o.styles),Gr.delete(i)):n.parent?Ka(n.parent.update):n.appContext.reload?n.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}wp(()=>{for(const n of r)Gr.delete($n(n.type))})}function td(e,o){Be(e,o);for(const t in e)t!=="__file"&&!(t in o)&&delete e[t]}function al(e){return(o,t)=>{try{return e(o,t)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let ct,An=[],Hl=!1;function bi(e,...o){ct?ct.emit(e,...o):Hl||An.push({event:e,args:o})}function Op(e,o){var t,r;ct=e,ct?(ct.enabled=!0,An.forEach(({event:n,args:i})=>ct.emit(n,...i)),An=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(t=window.navigator)===null||t===void 0?void 0:t.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((o.__VUE_DEVTOOLS_HOOK_REPLAY__=o.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Op(i,o)}),setTimeout(()=>{ct||(o.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Hl=!0,An=[])},3e3)):(Hl=!0,An=[])}function iv(e,o){bi("app:init",e,o,{Fragment:Ce,Text:wi,Comment:io,Static:Zi})}function av(e){bi("app:unmount",e)}const ql=lc("component:added"),Sp=lc("component:updated"),lv=lc("component:removed"),sv=e=>{ct&&typeof ct.cleanupBuffer=="function"&&!ct.cleanupBuffer(e)&&lv(e)};function lc(e){return o=>{bi(e,o.appContext.app,o.uid,o.parent?o.parent.uid:void 0,o)}}const cv=zp("perf:start"),dv=zp("perf:end");function zp(e){return(o,t,r)=>{bi(e,o.appContext.app,o.uid,o,t,r)}}function fv(e,o,t){bi("component:emit",e.appContext.app,e,o,t)}function uv(e,o,...t){if(e.isUnmounted)return;const r=e.vnode.props||je;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(o in d))(!f||!(hr(o)in f))&&R(`Component emitted event "${o}" but it is neither declared in the emits option nor as an "${hr(o)}" prop.`);else{const u=d[o];ue(u)&&(u(...t)||R(`Invalid event arguments: event validation failed for event "${o}".`))}}let n=t;const i=o.startsWith("update:"),a=i&&o.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:u}=r[d]||je;u&&(n=t.map(h=>De(h)?h.trim():h)),f&&(n=t.map(im))}fv(e,o,n);{const d=o.toLowerCase();d!==o&&r[hr(d)]&&R(`Event "${d}" is emitted in component ${Ga(e,e.type)} but the handler is registered for "${o}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Pt(o)}" instead of "${o}".`)}let l,s=r[l=hr(o)]||r[l=hr(ht(o))];!s&&i&&(s=r[l=hr(Pt(o))]),s&&Uo(s,e,6,n);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Uo(c,e,6,n)}}function Lp(e,o,t=!1){const r=o.emitsCache,n=r.get(e);if(n!==void 0)return n;const i=e.emits;let a={},l=!1;if(!ue(e)){const s=c=>{const d=Lp(c,o,!0);d&&(l=!0,Be(a,d))};!t&&o.mixins.length&&o.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!i&&!l?(Ie(e)&&r.set(e,null),null):(ce(i)?i.forEach(s=>a[s]=null):Be(a,i),Ie(e)&&r.set(e,a),a)}function Ba(e,o){return!e||!pi(o)?!1:(o=o.slice(2).replace(/Once$/,""),Se(e,o[0].toLowerCase()+o.slice(1))||Se(e,Pt(o))||Se(e,o))}let to=null,Ua=null;function fa(e){const o=to;return to=e,Ua=e&&e.type.__scopeId||null,o}function ZT(e){Ua=e}function JT(){Ua=null}function ke(e,o=to,t){if(!o||e._n)return e;const r=(...n)=>{r._d&&bd(-1);const i=fa(o);let a;try{a=e(...n)}finally{fa(i),r._d&&bd(1)}return Sp(o),a};return r._n=!0,r._c=!0,r._d=!0,r}let Vl=!1;function ua(){Vl=!0}function ll(e){const{type:o,vnode:t,proxy:r,withProxy:n,props:i,propsOptions:[a],slots:l,attrs:s,emit:c,render:d,renderCache:f,data:u,setupState:h,ctx:b,inheritAttrs:g}=e;let m,k;const w=fa(e);Vl=!1;try{if(t.shapeFlag&4){const z=n||r;m=Zo(d.call(z,z,f,i,h,u,b)),k=s}else{const z=o;s===i&&ua(),m=Zo(z.length>1?z(i,{get attrs(){return ua(),s},slots:l,emit:c}):z(i,null)),k=o.props?s:hv(s)}}catch(z){Nn.length=0,Da(z,e,1),m=re(io)}let y=m,x;if(m.patchFlag>0&&m.patchFlag&2048&&([y,x]=pv(m)),k&&g!==!1){const z=Object.keys(k),{shapeFlag:L}=y;if(z.length){if(L&7)a&&z.some(ia)&&(k=bv(k,a)),y=tt(y,k);else if(!Vl&&y.type!==io){const $=Object.keys(s),O=[],T=[];for(let U=0,Z=$.length;U<Z;U++){const D=$[U];pi(D)?ia(D)||O.push(D[2].toLowerCase()+D.slice(3)):T.push(D)}T.length&&R(`Extraneous non-props attributes (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),O.length&&R(`Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return t.dirs&&(rd(y)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),y=tt(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(rd(y)||R("Component inside <Transition> renders non-element root node that cannot be animated."),y.transition=t.transition),x?x(y):m=y,fa(w),m}const pv=e=>{const o=e.children,t=e.dynamicChildren,r=Ep(o);if(!r)return[e,void 0];const n=o.indexOf(r),i=t?t.indexOf(r):-1,a=l=>{o[n]=l,t&&(i>-1?t[i]=l:l.patchFlag>0&&(e.dynamicChildren=[...t,l]))};return[Zo(r),a]};function Ep(e){let o;for(let t=0;t<e.length;t++){const r=e[t];if(gt(r)){if(r.type!==io||r.children==="v-if"){if(o)return;o=r}}else return}return o}const hv=e=>{let o;for(const t in e)(t==="class"||t==="style"||pi(t))&&((o||(o={}))[t]=e[t]);return o},bv=(e,o)=>{const t={};for(const r in e)(!ia(r)||!(r.slice(9)in o))&&(t[r]=e[r]);return t},rd=e=>e.shapeFlag&7||e.type===io;function gv(e,o,t){const{props:r,children:n,component:i}=e,{props:a,children:l,patchFlag:s}=o,c=i.emitsOptions;if((n||l)&&Gt||o.dirs||o.transition)return!0;if(t&&s>=0){if(s&1024)return!0;if(s&16)return r?nd(r,a,c):!!a;if(s&8){const d=o.dynamicProps;for(let f=0;f<d.length;f++){const u=d[f];if(a[u]!==r[u]&&!Ba(c,u))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?nd(r,a,c):!0:!!a;return!1}function nd(e,o,t){const r=Object.keys(o);if(r.length!==Object.keys(e).length)return!0;for(let n=0;n<r.length;n++){const i=r[n];if(o[i]!==e[i]&&!Ba(t,i))return!0}return!1}function mv({vnode:e,parent:o},t){for(;o&&o.subTree===e;)(e=o.vnode).el=t,o=o.parent}const Tp=e=>e.__isSuspense;function vv(e,o){o&&o.pendingBranch?ce(e)?o.effects.push(...e):o.effects.push(e):wp(e)}function Po(e,o){if(!He)R("provide() can only be used inside setup().");else{let t=He.provides;const r=He.parent&&He.parent.provides;r===t&&(t=He.provides=Object.create(r)),t[e]=o}}function Y(e,o,t=!1){const r=He||to;if(r){const n=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(n&&e in n)return n[e];if(arguments.length>1)return t&&ue(o)?o.call(r.proxy):o;R(`injection "${String(e)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function Rr(e,o){return sc(e,null,o)}const Ci={};function we(e,o,t){return ue(o)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),sc(e,o,t)}function sc(e,o,{immediate:t,deep:r,flush:n,onTrack:i,onTrigger:a}=je){o||(t!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=x=>{R("Invalid watch source: ",x,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},s=$a()===(He==null?void 0:He.scope)?He:null;let c,d=!1,f=!1;if(Fe(e)?(c=()=>e.value,d=ca(e)):Er(e)?(c=()=>e,r=!0):ce(e)?(f=!0,d=e.some(x=>Er(x)||ca(x)),c=()=>e.map(x=>{if(Fe(x))return x.value;if(Er(x))return _r(x);if(ue(x))return At(x,s,2);l(x)})):ue(e)?o?c=()=>At(e,s,2):c=()=>{if(!(s&&s.isUnmounted))return u&&u(),Uo(e,s,3,[h])}:(c=So,l(e)),o&&r){const x=c;c=()=>_r(x())}let u,h=x=>{u=w.onStop=()=>{At(x,s,4)}},b;if(ei)if(h=So,o?t&&Uo(o,s,3,[c(),f?[]:void 0,h]):c(),n==="sync"){const x=O0();b=x.__watcherHandles||(x.__watcherHandles=[])}else return So;let g=f?new Array(e.length).fill(Ci):Ci;const m=()=>{if(w.active)if(o){const x=w.run();(r||d||(f?x.some((z,L)=>Gn(z,g[L])):Gn(x,g)))&&(u&&u(),Uo(o,s,3,[x,g===Ci?void 0:f&&g[0]===Ci?[]:g,h]),g=x)}else w.run()};m.allowRecurse=!!o;let k;n==="sync"?k=m:n==="post"?k=()=>lo(m,s&&s.suspense):(m.pre=!0,s&&(m.id=s.uid),k=()=>Ka(m));const w=new Js(c,k);w.onTrack=i,w.onTrigger=a,o?t?m():g=w.run():n==="post"?lo(w.run.bind(w),s&&s.suspense):w.run();const y=()=>{w.stop(),s&&s.scope&&qs(s.scope.effects,w)};return b&&b.push(y),y}function kv(e,o,t){const r=this.proxy,n=De(e)?e.includes(".")?Ap(r,e):()=>r[e]:e.bind(r,r);let i;ue(o)?i=o:(i=o.handler,t=o);const a=He;an(this);const l=sc(n,i.bind(r),t);return a?an(a):Pr(),l}function Ap(e,o){const t=o.split(".");return()=>{let r=e;for(let n=0;n<t.length&&r;n++)r=r[t[n]];return r}}function _r(e,o){if(!Ie(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),Fe(e))_r(e.value,o);else if(ce(e))for(let t=0;t<e.length;t++)_r(e[t],o);else if(Xu(e)||zr(e))e.forEach(t=>{_r(t,o)});else if(Zu(e))for(const t in e)_r(e[t],o);return e}function Pp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vt(()=>{e.isMounted=!0}),mi(()=>{e.isUnmounting=!0}),e}const jo=[Function,Array],wv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jo,onEnter:jo,onAfterEnter:jo,onEnterCancelled:jo,onBeforeLeave:jo,onLeave:jo,onAfterLeave:jo,onLeaveCancelled:jo,onBeforeAppear:jo,onAppear:jo,onAfterAppear:jo,onAppearCancelled:jo},setup(e,{slots:o}){const t=xo(),r=Pp();let n;return()=>{const i=o.default&&cc(o.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){let g=!1;for(const m of i)if(m.type!==io){if(g){R("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=m,g=!0}}const l=he(e),{mode:s}=l;if(s&&s!=="in-out"&&s!=="out-in"&&s!=="default"&&R(`invalid <transition> mode: ${s}`),r.isLeaving)return sl(a);const c=id(a);if(!c)return sl(a);const d=Jn(c,l,r,t);rn(c,d);const f=t.subTree,u=f&&id(f);let h=!1;const{getTransitionKey:b}=c.type;if(b){const g=b();n===void 0?n=g:g!==n&&(n=g,h=!0)}if(u&&u.type!==io&&(!Ht(c,u)||h)){const g=Jn(u,l,r,t);if(rn(u,g),s==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},sl(a);s==="in-out"&&c.type!==io&&(g.delayLeave=(m,k,w)=>{const y=Cp(r,u);y[String(u.key)]=u,m._leaveCb=()=>{k(),m._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=w})}return a}}},yv=wv;function Cp(e,o){const{leavingVNodes:t}=e;let r=t.get(o.type);return r||(r=Object.create(null),t.set(o.type,r)),r}function Jn(e,o,t,r){const{appear:n,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:s,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:u,onAfterLeave:h,onLeaveCancelled:b,onBeforeAppear:g,onAppear:m,onAfterAppear:k,onAppearCancelled:w}=o,y=String(e.key),x=Cp(t,e),z=(O,T)=>{O&&Uo(O,r,9,T)},L=(O,T)=>{const U=T[1];z(O,T),ce(O)?O.every(Z=>Z.length<=1)&&U():O.length<=1&&U()},$={mode:i,persisted:a,beforeEnter(O){let T=l;if(!t.isMounted)if(n)T=g||l;else return;O._leaveCb&&O._leaveCb(!0);const U=x[y];U&&Ht(e,U)&&U.el._leaveCb&&U.el._leaveCb(),z(T,[O])},enter(O){let T=s,U=c,Z=d;if(!t.isMounted)if(n)T=m||s,U=k||c,Z=w||d;else return;let D=!1;const be=O._enterCb=de=>{D||(D=!0,de?z(Z,[O]):z(U,[O]),$.delayedLeave&&$.delayedLeave(),O._enterCb=void 0)};T?L(T,[O,be]):be()},leave(O,T){const U=String(e.key);if(O._enterCb&&O._enterCb(!0),t.isUnmounting)return T();z(f,[O]);let Z=!1;const D=O._leaveCb=be=>{Z||(Z=!0,T(),be?z(b,[O]):z(h,[O]),O._leaveCb=void 0,x[U]===e&&delete x[U])};x[U]=e,u?L(u,[O,D]):D()},clone(O){return Jn(O,o,t,r)}};return $}function sl(e){if(gi(e))return e=tt(e),e.children=null,e}function id(e){return gi(e)?e.children?e.children[0]:void 0:e}function rn(e,o){e.shapeFlag&6&&e.component?rn(e.component.subTree,o):e.shapeFlag&128?(e.ssContent.transition=o.clone(e.ssContent),e.ssFallback.transition=o.clone(e.ssFallback)):e.transition=o}function cc(e,o=!1,t){let r=[],n=0;for(let i=0;i<e.length;i++){let a=e[i];const l=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Ce?(a.patchFlag&128&&n++,r=r.concat(cc(a.children,o,l))):(o||a.type!==io)&&r.push(l!=null?tt(a,{key:l}):a)}if(n>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ae(e){return ue(e)?{setup:e,name:e.name}:e}const en=e=>!!e.type.__asyncLoader,gi=e=>e.type.__isKeepAlive,xv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:o}){const t=xo(),r=t.ctx;if(!r.renderer)return()=>{const w=o.default&&o.default();return w&&w.length===1?w[0]:w};const n=new Map,i=new Set;let a=null;t.__v_cache=n;const l=t.suspense,{renderer:{p:s,m:c,um:d,o:{createElement:f}}}=r,u=f("div");r.activate=(w,y,x,z,L)=>{const $=w.component;c(w,y,x,0,l),s($.vnode,w,y,x,$,l,z,w.slotScopeIds,L),lo(()=>{$.isDeactivated=!1,$.a&&mr($.a);const O=w.props&&w.props.onVnodeMounted;O&&Mo(O,$.parent,w)},l),ql($)},r.deactivate=w=>{const y=w.component;c(w,u,null,1,l),lo(()=>{y.da&&mr(y.da);const x=w.props&&w.props.onVnodeUnmounted;x&&Mo(x,y.parent,w),y.isDeactivated=!0},l),ql(y)};function h(w){cl(w),d(w,t,l,!0)}function b(w){n.forEach((y,x)=>{const z=oi(y.type);z&&(!w||!w(z))&&g(x)})}function g(w){const y=n.get(w);!a||!Ht(y,a)?h(y):a&&cl(a),n.delete(w),i.delete(w)}we(()=>[e.include,e.exclude],([w,y])=>{w&&b(x=>Pn(w,x)),y&&b(x=>!Pn(y,x))},{flush:"post",deep:!0});let m=null;const k=()=>{m!=null&&n.set(m,dl(t.subTree))};return vt(k),qa(k),mi(()=>{n.forEach(w=>{const{subTree:y,suspense:x}=t,z=dl(y);if(w.type===z.type&&w.key===z.key){cl(z);const L=z.component.da;L&&lo(L,x);return}h(w)})}),()=>{if(m=null,!o.default)return null;const w=o.default(),y=w[0];if(w.length>1)return R("KeepAlive should contain exactly one component child."),a=null,w;if(!gt(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return a=null,y;let x=dl(y);const z=x.type,L=oi(en(x)?x.type.__asyncResolved||{}:z),{include:$,exclude:O,max:T}=e;if($&&(!L||!Pn($,L))||O&&L&&Pn(O,L))return a=x,y;const U=x.key==null?z:x.key,Z=n.get(U);return x.el&&(x=tt(x),y.shapeFlag&128&&(y.ssContent=x)),m=U,Z?(x.el=Z.el,x.component=Z.component,x.transition&&rn(x,x.transition),x.shapeFlag|=512,i.delete(U),i.add(U)):(i.add(U),T&&i.size>parseInt(T,10)&&g(i.values().next().value)),x.shapeFlag|=256,a=x,Tp(y.type)?y:x}}},Fp=xv;function Pn(e,o){return ce(e)?e.some(t=>Pn(t,o)):De(e)?e.split(",").includes(o):om(e)?e.test(o):!1}function $p(e,o){Np(e,"a",o)}function Ip(e,o){Np(e,"da",o)}function Np(e,o,t=He){const r=e.__wdc||(e.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Ha(o,r,t),t){let n=t.parent;for(;n&&n.parent;)gi(n.parent.vnode)&&_v(r,o,t,n),n=n.parent}}function _v(e,o,t,r){const n=Ha(o,e,r,!0);vi(()=>{qs(r[o],n)},t)}function cl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function dl(e){return e.shapeFlag&128?e.ssContent:e}function Ha(e,o,t=He,r=!1){if(t){const n=t[e]||(t[e]=[]),i=o.__weh||(o.__weh=(...a)=>{if(t.isUnmounted)return;Ir(),an(t);const l=Uo(o,t,e,a);return Pr(),Nr(),l});return r?n.unshift(i):n.push(i),i}else{const n=hr(nc[e].replace(/ hook$/,""));R(`${n} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const It=e=>(o,t=He)=>(!ei||e==="sp")&&Ha(e,(...r)=>o(...r),t),Ov=It("bm"),vt=It("m"),Sv=It("bu"),qa=It("u"),mi=It("bum"),vi=It("um"),zv=It("sp"),Lv=It("rtg"),Ev=It("rtc");function Tv(e,o=He){Ha("ec",e,o)}function Rp(e){tm(e)&&R("Do not use built-in directive ids as custom directive id: "+e)}function ki(e,o){const t=to;if(t===null)return R("withDirectives can only be used inside render functions."),e;const r=Wa(t)||t.proxy,n=e.dirs||(e.dirs=[]);for(let i=0;i<o.length;i++){let[a,l,s,c=je]=o[i];a&&(ue(a)&&(a={mounted:a,updated:a}),a.deep&&_r(l),n.push({dir:a,instance:r,value:l,oldValue:void 0,arg:s,modifiers:c}))}return e}function cr(e,o,t,r){const n=e.dirs,i=o&&o.dirs;for(let a=0;a<n.length;a++){const l=n[a];i&&(l.oldValue=i[a].value);let s=l.dir[r];s&&(Ir(),Uo(s,t,8,[e.el,l,e,o]),Nr())}}const Wl="components",Av="directives";function pa(e,o){return jp(Wl,e,!0,o)||e}const Pv=Symbol();function ha(e){return jp(Av,e)}function jp(e,o,t=!0,r=!1){const n=to||He;if(n){const i=n.type;if(e===Wl){const l=oi(i,!1);if(l&&(l===o||l===ht(o)||l===Fr(ht(o))))return i}const a=ad(n[e]||i[e],o)||ad(n.appContext[e],o);if(!a&&r)return i;if(t&&!a){const l=e===Wl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${e.slice(0,-1)}: ${o}${l}`)}return a}else R(`resolve${Fr(e.slice(0,-1))} can only be used in render() or setup().`)}function ad(e,o){return e&&(e[o]||e[ht(o)]||e[Fr(ht(o))])}function dn(e,o,t,r){let n;const i=t&&t[r];if(ce(e)||De(e)){n=new Array(e.length);for(let a=0,l=e.length;a<l;a++)n[a]=o(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){Number.isInteger(e)||R(`The v-for range expect an integer value but got ${e}.`),n=new Array(e);for(let a=0;a<e;a++)n[a]=o(a+1,a,void 0,i&&i[a])}else if(Ie(e))if(e[Symbol.iterator])n=Array.from(e,(a,l)=>o(a,l,void 0,i&&i[l]));else{const a=Object.keys(e);n=new Array(a.length);for(let l=0,s=a.length;l<s;l++){const c=a[l];n[l]=o(e[c],c,l,i&&i[l])}}else n=[];return t&&(t[r]=n),n}function ao(e,o,t={},r,n){if(to.isCE||to.parent&&en(to.parent)&&to.parent.isCE)return o!=="default"&&(t.name=o),re("slot",t,r&&r());let i=e[o];i&&i.length>1&&(R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),A();const a=i&&Mp(i(t)),l=ee(Ce,{key:t.key||a&&a.key||`_${o}`},a||(r?r():[]),a&&e._===1?64:-2);return!n&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Mp(e){return e.some(o=>gt(o)?!(o.type===io||o.type===Ce&&!Mp(o.children)):!0)?e:null}const Gl=e=>e?Qp(e)?Wa(e)||e.proxy:Gl(e.parent):null,Ar=Be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>Yr(e.props),$attrs:e=>Yr(e.attrs),$slots:e=>Yr(e.slots),$refs:e=>Yr(e.refs),$parent:e=>Gl(e.parent),$root:e=>Gl(e.root),$emit:e=>e.emit,$options:e=>fc(e),$forceUpdate:e=>e.f||(e.f=()=>Ka(e.update)),$nextTick:e=>e.n||(e.n=so.bind(e.proxy)),$watch:e=>kv.bind(e)}),dc=e=>e==="_"||e==="$",fl=(e,o)=>e!==je&&!e.__isScriptSetup&&Se(e,o),Dp={get({_:e},o){const{ctx:t,setupState:r,data:n,props:i,accessCache:a,type:l,appContext:s}=e;if(o==="__isVue")return!0;let c;if(o[0]!=="$"){const h=a[o];if(h!==void 0)switch(h){case 1:return r[o];case 2:return n[o];case 4:return t[o];case 3:return i[o]}else{if(fl(r,o))return a[o]=1,r[o];if(n!==je&&Se(n,o))return a[o]=2,n[o];if((c=e.propsOptions[0])&&Se(c,o))return a[o]=3,i[o];if(t!==je&&Se(t,o))return a[o]=4,t[o];Xl&&(a[o]=0)}}const d=Ar[o];let f,u;if(d)return o==="$attrs"&&(Lo(e,"get",o),ua()),d(e);if((f=l.__cssModules)&&(f=f[o]))return f;if(t!==je&&Se(t,o))return a[o]=4,t[o];if(u=s.config.globalProperties,Se(u,o))return u[o];to&&(!De(o)||o.indexOf("__v")!==0)&&(n!==je&&dc(o[0])&&Se(n,o)?R(`Property ${JSON.stringify(o)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===to&&R(`Property ${JSON.stringify(o)} was accessed during render but is not defined on instance.`))},set({_:e},o,t){const{data:r,setupState:n,ctx:i}=e;return fl(n,o)?(n[o]=t,!0):n.__isScriptSetup&&Se(n,o)?(R(`Cannot mutate <script setup> binding "${o}" from Options API.`),!1):r!==je&&Se(r,o)?(r[o]=t,!0):Se(e.props,o)?(R(`Attempting to mutate prop "${o}". Props are readonly.`),!1):o[0]==="$"&&o.slice(1)in e?(R(`Attempting to mutate public property "${o}". Properties starting with $ are reserved and readonly.`),!1):(o in e.appContext.config.globalProperties?Object.defineProperty(i,o,{enumerable:!0,configurable:!0,value:t}):i[o]=t,!0)},has({_:{data:e,setupState:o,accessCache:t,ctx:r,appContext:n,propsOptions:i}},a){let l;return!!t[a]||e!==je&&Se(e,a)||fl(o,a)||(l=i[0])&&Se(l,a)||Se(r,a)||Se(Ar,a)||Se(n.config.globalProperties,a)},defineProperty(e,o,t){return t.get!=null?e._.accessCache[o]=0:Se(t,"value")&&this.set(e,o,t.value,null),Reflect.defineProperty(e,o,t)}};Dp.ownKeys=e=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Cv(e){const o={};return Object.defineProperty(o,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Ar).forEach(t=>{Object.defineProperty(o,t,{configurable:!0,enumerable:!1,get:()=>Ar[t](e),set:So})}),o}function Fv(e){const{ctx:o,propsOptions:[t]}=e;t&&Object.keys(t).forEach(r=>{Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>e.props[r],set:So})})}function $v(e){const{ctx:o,setupState:t}=e;Object.keys(he(t)).forEach(r=>{if(!t.__isScriptSetup){if(dc(r[0])){R(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>t[r],set:So})}})}function Iv(){const e=Object.create(null);return(o,t)=>{e[t]?R(`${o} property "${t}" is already defined in ${e[t]}.`):e[t]=o}}let Xl=!0;function Nv(e){const o=fc(e),t=e.proxy,r=e.ctx;Xl=!1,o.beforeCreate&&ld(o.beforeCreate,e,"bc");const{data:n,computed:i,methods:a,watch:l,provide:s,inject:c,created:d,beforeMount:f,mounted:u,beforeUpdate:h,updated:b,activated:g,deactivated:m,beforeDestroy:k,beforeUnmount:w,destroyed:y,unmounted:x,render:z,renderTracked:L,renderTriggered:$,errorCaptured:O,serverPrefetch:T,expose:U,inheritAttrs:Z,components:D,directives:be,filters:de}=o,ye=Iv();{const[G]=e.propsOptions;if(G)for(const oe in G)ye("Props",oe)}if(c&&Rv(c,r,ye,e.appContext.config.unwrapInjectedRef),a)for(const G in a){const oe=a[G];ue(oe)?(Object.defineProperty(r,G,{value:oe.bind(t),configurable:!0,enumerable:!0,writable:!0}),ye("Methods",G)):R(`Method "${G}" has type "${typeof oe}" in the component definition. Did you reference the function correctly?`)}if(n){ue(n)||R("The data option must be a function. Plain object usage is no longer supported.");const G=n.call(t,t);if(Ws(G)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ie(G))R("data() should return an object.");else{e.data=Ke(G);for(const oe in G)ye("Data",oe),dc(oe[0])||Object.defineProperty(r,oe,{configurable:!0,enumerable:!0,get:()=>G[oe],set:So})}}if(Xl=!0,i)for(const G in i){const oe=i[G],xe=ue(oe)?oe.bind(t,t):ue(oe.get)?oe.get.bind(t,t):So;xe===So&&R(`Computed property "${G}" has no getter.`);const Te=!ue(oe)&&ue(oe.set)?oe.set.bind(t):()=>{R(`Write operation failed: computed property "${G}" is readonly.`)},fo=P({get:xe,set:Te});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>fo.value,set:Ue=>fo.value=Ue}),ye("Computed",G)}if(l)for(const G in l)Kp(l[G],r,t,G);if(s){const G=ue(s)?s.call(t):s;Reflect.ownKeys(G).forEach(oe=>{Po(oe,G[oe])})}d&&ld(d,e,"c");function Ee(G,oe){ce(oe)?oe.forEach(xe=>G(xe.bind(t))):oe&&G(oe.bind(t))}if(Ee(Ov,f),Ee(vt,u),Ee(Sv,h),Ee(qa,b),Ee($p,g),Ee(Ip,m),Ee(Tv,O),Ee(Ev,L),Ee(Lv,$),Ee(mi,w),Ee(vi,x),Ee(zv,T),ce(U))if(U.length){const G=e.exposed||(e.exposed={});U.forEach(oe=>{Object.defineProperty(G,oe,{get:()=>t[oe],set:xe=>t[oe]=xe})})}else e.exposed||(e.exposed={});z&&e.render===So&&(e.render=z),Z!=null&&(e.inheritAttrs=Z),D&&(e.components=D),be&&(e.directives=be)}function Rv(e,o,t=So,r=!1){ce(e)&&(e=Yl(e));for(const n in e){const i=e[n];let a;Ie(i)?"default"in i?a=Y(i.from||n,i.default,!0):a=Y(i.from||n):a=Y(i),Fe(a)?r?Object.defineProperty(o,n,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):(R(`injected property "${n}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),o[n]=a):o[n]=a,t("Inject",n)}}function ld(e,o,t){Uo(ce(e)?e.map(r=>r.bind(o.proxy)):e.bind(o.proxy),o,t)}function Kp(e,o,t,r){const n=r.includes(".")?Ap(t,r):()=>t[r];if(De(e)){const i=o[e];ue(i)?we(n,i):R(`Invalid watch handler specified by key "${e}"`,i)}else if(ue(e))we(n,e.bind(t));else if(Ie(e))if(ce(e))e.forEach(i=>Kp(i,o,t,r));else{const i=ue(e.handler)?e.handler.bind(t):o[e.handler];ue(i)?we(n,i,e):R(`Invalid watch handler specified by key "${e.handler}"`,i)}else R(`Invalid watch option: "${r}"`,e)}function fc(e){const o=e.type,{mixins:t,extends:r}=o,{mixins:n,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(o);let s;return l?s=l:!n.length&&!t&&!r?s=o:(s={},n.length&&n.forEach(c=>ba(s,c,a,!0)),ba(s,o,a)),Ie(o)&&i.set(o,s),s}function ba(e,o,t,r=!1){const{mixins:n,extends:i}=o;i&&ba(e,i,t,!0),n&&n.forEach(a=>ba(e,a,t,!0));for(const a in o)if(r&&a==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=jv[a]||t&&t[a];e[a]=l?l(e[a],o[a]):o[a]}return e}const jv={data:sd,props:br,emits:br,methods:br,computed:br,beforeCreate:go,created:go,beforeMount:go,mounted:go,beforeUpdate:go,updated:go,beforeDestroy:go,beforeUnmount:go,destroyed:go,unmounted:go,activated:go,deactivated:go,errorCaptured:go,serverPrefetch:go,components:br,directives:br,watch:Dv,provide:sd,inject:Mv};function sd(e,o){return o?e?function(){return Be(ue(e)?e.call(this,this):e,ue(o)?o.call(this,this):o)}:o:e}function Mv(e,o){return br(Yl(e),Yl(o))}function Yl(e){if(ce(e)){const o={};for(let t=0;t<e.length;t++)o[e[t]]=e[t];return o}return e}function go(e,o){return e?[...new Set([].concat(e,o))]:o}function br(e,o){return e?Be(Be(Object.create(null),e),o):o}function Dv(e,o){if(!e)return o;if(!o)return e;const t=Be(Object.create(null),e);for(const r in o)t[r]=go(e[r],o[r]);return t}function Kv(e,o,t,r=!1){const n={},i={};aa(i,Va,1),e.propsDefaults=Object.create(null),Bp(e,o,n,i);for(const a in e.propsOptions[0])a in n||(n[a]=void 0);Hp(o||{},n,e),t?e.props=r?n:Rm(n):e.type.props?e.props=n:e.props=i,e.attrs=i}function Bv(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Uv(e,o,t,r){const{props:n,attrs:i,vnode:{patchFlag:a}}=e,l=he(n),[s]=e.propsOptions;let c=!1;if(!Bv(e)&&(r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let u=d[f];if(Ba(e.emitsOptions,u))continue;const h=o[u];if(s)if(Se(i,u))h!==i[u]&&(i[u]=h,c=!0);else{const b=ht(u);n[b]=Zl(s,l,b,h,e,!1)}else h!==i[u]&&(i[u]=h,c=!0)}}}else{Bp(e,o,n,i)&&(c=!0);let d;for(const f in l)(!o||!Se(o,f)&&((d=Pt(f))===f||!Se(o,d)))&&(s?t&&(t[f]!==void 0||t[d]!==void 0)&&(n[f]=Zl(s,l,f,void 0,e,!0)):delete n[f]);if(i!==l)for(const f in i)(!o||!Se(o,f))&&(delete i[f],c=!0)}c&&Ct(e,"set","$attrs"),Hp(o||{},n,e)}function Bp(e,o,t,r){const[n,i]=e.propsOptions;let a=!1,l;if(o)for(let s in o){if(Gi(s))continue;const c=o[s];let d;n&&Se(n,d=ht(s))?!i||!i.includes(d)?t[d]=c:(l||(l={}))[d]=c:Ba(e.emitsOptions,s)||(!(s in r)||c!==r[s])&&(r[s]=c,a=!0)}if(i){const s=he(t),c=l||je;for(let d=0;d<i.length;d++){const f=i[d];t[f]=Zl(n,s,f,c[f],e,!Se(c,f))}}return a}function Zl(e,o,t,r,n,i){const a=e[t];if(a!=null){const l=Se(a,"default");if(l&&r===void 0){const s=a.default;if(a.type!==Function&&ue(s)){const{propsDefaults:c}=n;t in c?r=c[t]:(an(n),r=c[t]=s.call(null,o),Pr())}else r=s}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Pt(t))&&(r=!0))}return r}function Up(e,o,t=!1){const r=o.propsCache,n=r.get(e);if(n)return n;const i=e.props,a={},l=[];let s=!1;if(!ue(e)){const d=f=>{s=!0;const[u,h]=Up(f,o,!0);Be(a,u),h&&l.push(...h)};!t&&o.mixins.length&&o.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!s)return Ie(e)&&r.set(e,Jr),Jr;if(ce(i))for(let d=0;d<i.length;d++){De(i[d])||R("props must be strings when using array syntax.",i[d]);const f=ht(i[d]);cd(f)&&(a[f]=je)}else if(i){Ie(i)||R("invalid props options",i);for(const d in i){const f=ht(d);if(cd(f)){const u=i[d],h=a[f]=ce(u)||ue(u)?{type:u}:Object.assign({},u);if(h){const b=fd(Boolean,h.type),g=fd(String,h.type);h[0]=b>-1,h[1]=g<0||b<g,(b>-1||Se(h,"default"))&&l.push(f)}}}}const c=[a,l];return Ie(e)&&r.set(e,c),c}function cd(e){return e[0]!=="$"?!0:(R(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Jl(e){const o=e&&e.toString().match(/^\s*(function|class) (\w+)/);return o?o[2]:e===null?"null":""}function dd(e,o){return Jl(e)===Jl(o)}function fd(e,o){return ce(o)?o.findIndex(t=>dd(t,e)):ue(o)&&dd(o,e)?0:-1}function Hp(e,o,t){const r=he(o),n=t.propsOptions[0];for(const i in n){let a=n[i];a!=null&&Hv(i,r[i],a,!Se(e,i)&&!Se(e,Pt(i)))}}function Hv(e,o,t,r){const{type:n,required:i,validator:a}=t;if(i&&r){R('Missing required prop: "'+e+'"');return}if(!(o==null&&!t.required)){if(n!=null&&n!==!0){let l=!1;const s=ce(n)?n:[n],c=[];for(let d=0;d<s.length&&!l;d++){const{valid:f,expectedType:u}=Vv(o,s[d]);c.push(u||""),l=f}if(!l){R(Wv(e,o,c));return}}a&&!a(o)&&R('Invalid prop: custom validator check failed for prop "'+e+'".')}}const qv=ar("String,Number,Boolean,Function,Symbol,BigInt");function Vv(e,o){let t;const r=Jl(o);if(qv(r)){const n=typeof e;t=n===r.toLowerCase(),!t&&n==="object"&&(t=e instanceof o)}else r==="Object"?t=Ie(e):r==="Array"?t=ce(e):r==="null"?t=e===null:t=e instanceof o;return{valid:t,expectedType:r}}function Wv(e,o,t){let r=`Invalid prop: type check failed for prop "${e}". Expected ${t.map(Fr).join(" | ")}`;const n=t[0],i=Gs(o),a=ud(o,n),l=ud(o,i);return t.length===1&&pd(n)&&!Gv(n,i)&&(r+=` with value ${a}`),r+=`, got ${i} `,pd(i)&&(r+=`with value ${l}.`),r}function ud(e,o){return o==="String"?`"${e}"`:o==="Number"?`${Number(e)}`:`${e}`}function pd(e){return["string","number","boolean"].some(t=>e.toLowerCase()===t)}function Gv(...e){return e.some(o=>o.toLowerCase()==="boolean")}const qp=e=>e[0]==="_"||e==="$stable",uc=e=>ce(e)?e.map(Zo):[Zo(e)],Xv=(e,o,t)=>{if(o._n)return o;const r=ke((...n)=>(He&&R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),uc(o(...n))),t);return r._c=!1,r},Vp=(e,o,t)=>{const r=e._ctx;for(const n in e){if(qp(n))continue;const i=e[n];if(ue(i))o[n]=Xv(n,i,r);else if(i!=null){R(`Non-function value encountered for slot "${n}". Prefer function slots for better performance.`);const a=uc(i);o[n]=()=>a}}},Wp=(e,o)=>{gi(e.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const t=uc(o);e.slots.default=()=>t},Yv=(e,o)=>{if(e.vnode.shapeFlag&32){const t=o._;t?(e.slots=he(o),aa(o,"_",t)):Vp(o,e.slots={})}else e.slots={},o&&Wp(e,o);aa(e.slots,Va,1)},Zv=(e,o,t)=>{const{vnode:r,slots:n}=e;let i=!0,a=je;if(r.shapeFlag&32){const l=o._;l?Gt?Be(n,o):t&&l===1?i=!1:(Be(n,o),!t&&l===1&&delete n._):(i=!o.$stable,Vp(o,n)),a=o}else o&&(Wp(e,o),a={default:1});if(i)for(const l in n)!qp(l)&&!(l in a)&&delete n[l]};function Gp(){return{app:null,config:{isNativeTag:Gu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jv=0;function Qv(e,o){return function(r,n=null){ue(r)||(r=Object.assign({},r)),n!=null&&!Ie(n)&&(R("root props passed to app.mount() must be an object."),n=null);const i=Gp(),a=new Set;let l=!1;const s=i.app={_uid:Jv++,_component:r,_props:n,_container:null,_context:i,_instance:null,version:ma,get config(){return i.config},set config(c){R("app.config cannot be replaced. Modify individual options instead.")},use(c,...d){return a.has(c)?R("Plugin has already been applied to target app."):c&&ue(c.install)?(a.add(c),c.install(s,...d)):ue(c)?(a.add(c),c(s,...d)):R('A plugin must either be a function or an object with an "install" function.'),s},mixin(c){return i.mixins.includes(c)?R("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):i.mixins.push(c),s},component(c,d){return os(c,i.config),d?(i.components[c]&&R(`Component "${c}" has already been registered in target app.`),i.components[c]=d,s):i.components[c]},directive(c,d){return Rp(c),d?(i.directives[c]&&R(`Directive "${c}" has already been registered in target app.`),i.directives[c]=d,s):i.directives[c]},mount(c,d,f){if(l)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const u=re(r,n);return u.appContext=i,i.reload=()=>{e(tt(u),c,f)},d&&o?o(u,c):e(u,c,f),l=!0,s._container=c,c.__vue_app__=s,s._instance=u.component,iv(s,ma),Wa(u.component)||u.component.proxy}},unmount(){l?(e(null,s._container),s._instance=null,av(s),delete s._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(c,d){return c in i.provides&&R(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),i.provides[c]=d,s}};return s}}function Ql(e,o,t,r,n=!1){if(ce(e)){e.forEach((u,h)=>Ql(u,o&&(ce(o)?o[h]:o),t,r,n));return}if(en(r)&&!n)return;const i=r.shapeFlag&4?Wa(r.component)||r.component.proxy:r.el,a=n?null:i,{i:l,r:s}=e;if(!l){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=o&&o.r,d=l.refs===je?l.refs={}:l.refs,f=l.setupState;if(c!=null&&c!==s&&(De(c)?(d[c]=null,Se(f,c)&&(f[c]=null)):Fe(c)&&(c.value=null)),ue(s))At(s,l,12,[a,d]);else{const u=De(s),h=Fe(s);if(u||h){const b=()=>{if(e.f){const g=u?Se(f,s)?f[s]:d[s]:s.value;n?ce(g)&&qs(g,i):ce(g)?g.includes(i)||g.push(i):u?(d[s]=[i],Se(f,s)&&(f[s]=d[s])):(s.value=[i],e.k&&(d[e.k]=s.value))}else u?(d[s]=a,Se(f,s)&&(f[s]=a)):h?(s.value=a,e.k&&(d[e.k]=a)):R("Invalid template ref type:",s,`(${typeof s})`)};a?(b.id=-1,lo(b,t)):b()}else R("Invalid template ref type:",s,`(${typeof s})`)}}let bn,Ut;function _t(e,o){e.appContext.config.performance&&ga()&&Ut.mark(`vue-${o}-${e.uid}`),cv(e,o,ga()?Ut.now():Date.now())}function Ot(e,o){if(e.appContext.config.performance&&ga()){const t=`vue-${o}-${e.uid}`,r=t+":end";Ut.mark(r),Ut.measure(`<${Ga(e,e.type)}> ${o}`,t,r),Ut.clearMarks(t),Ut.clearMarks(r)}dv(e,o,ga()?Ut.now():Date.now())}function ga(){return bn!==void 0||(typeof window<"u"&&window.performance?(bn=!0,Ut=window.performance):bn=!1),bn}function e0(){const e=[];if(e.length){const o=e.length>1;console.warn(`Feature flag${o?"s":""} ${e.join(", ")} ${o?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const lo=vv;function o0(e){return t0(e)}function t0(e,o){e0();const t=Ju();t.__VUE__=!0,Op(t.__VUE_DEVTOOLS_GLOBAL_HOOK__,t);const{insert:r,remove:n,patchProp:i,createElement:a,createText:l,createComment:s,setText:c,setElementText:d,parentNode:f,nextSibling:u,setScopeId:h=So,insertStaticContent:b}=e,g=(v,_,E,N=null,I=null,K=null,V=!1,M=null,q=Gt?!1:!!_.dynamicChildren)=>{if(v===_)return;v&&!Ht(v,_)&&(N=J(v),Je(v,I,K,!0),v=null),_.patchFlag===-2&&(q=!1,_.dynamicChildren=null);const{type:j,ref:te,shapeFlag:Q}=_;switch(j){case wi:m(v,_,E,N);break;case io:k(v,_,E,N);break;case Zi:v==null?w(_,E,N,V):y(v,_,E,V);break;case Ce:be(v,_,E,N,I,K,V,M,q);break;default:Q&1?L(v,_,E,N,I,K,V,M,q):Q&6?de(v,_,E,N,I,K,V,M,q):Q&64||Q&128?j.process(v,_,E,N,I,K,V,M,q,Le):R("Invalid VNode type:",j,`(${typeof j})`)}te!=null&&I&&Ql(te,v&&v.ref,K,_||v,!_)},m=(v,_,E,N)=>{if(v==null)r(_.el=l(_.children),E,N);else{const I=_.el=v.el;_.children!==v.children&&c(I,_.children)}},k=(v,_,E,N)=>{v==null?r(_.el=s(_.children||""),E,N):_.el=v.el},w=(v,_,E,N)=>{[v.el,v.anchor]=b(v.children,_,E,N,v.el,v.anchor)},y=(v,_,E,N)=>{if(_.children!==v.children){const I=u(v.anchor);z(v),[_.el,_.anchor]=b(_.children,E,I,N)}else _.el=v.el,_.anchor=v.anchor},x=({el:v,anchor:_},E,N)=>{let I;for(;v&&v!==_;)I=u(v),r(v,E,N),v=I;r(_,E,N)},z=({el:v,anchor:_})=>{let E;for(;v&&v!==_;)E=u(v),n(v),v=E;n(_)},L=(v,_,E,N,I,K,V,M,q)=>{V=V||_.type==="svg",v==null?$(_,E,N,I,K,V,M,q):U(v,_,I,K,V,M,q)},$=(v,_,E,N,I,K,V,M)=>{let q,j;const{type:te,props:Q,shapeFlag:ie,transition:me,dirs:ze}=v;if(q=v.el=a(v.type,K,Q&&Q.is,Q),ie&8?d(q,v.children):ie&16&&T(v.children,q,null,N,I,K&&te!=="foreignObject",V,M),ze&&cr(v,null,N,"created"),O(q,v,v.scopeId,V,N),Q){for(const Re in Q)Re!=="value"&&!Gi(Re)&&i(q,Re,null,Q[Re],K,v.children,N,I,B);"value"in Q&&i(q,"value",null,Q.value),(j=Q.onVnodeBeforeMount)&&Mo(j,N,v)}Object.defineProperty(q,"__vnode",{value:v,enumerable:!1}),Object.defineProperty(q,"__vueParentComponent",{value:N,enumerable:!1}),ze&&cr(v,null,N,"beforeMount");const Me=(!I||I&&!I.pendingBranch)&&me&&!me.persisted;Me&&me.beforeEnter(q),r(q,_,E),((j=Q&&Q.onVnodeMounted)||Me||ze)&&lo(()=>{j&&Mo(j,N,v),Me&&me.enter(q),ze&&cr(v,null,N,"mounted")},I)},O=(v,_,E,N,I)=>{if(E&&h(v,E),N)for(let K=0;K<N.length;K++)h(v,N[K]);if(I){let K=I.subTree;if(K.patchFlag>0&&K.patchFlag&2048&&(K=Ep(K.children)||K),_===K){const V=I.vnode;O(v,V,V.scopeId,V.slotScopeIds,I.parent)}}},T=(v,_,E,N,I,K,V,M,q=0)=>{for(let j=q;j<v.length;j++){const te=v[j]=M?Kt(v[j]):Zo(v[j]);g(null,te,_,E,N,I,K,V,M)}},U=(v,_,E,N,I,K,V)=>{const M=_.el=v.el;let{patchFlag:q,dynamicChildren:j,dirs:te}=_;q|=v.patchFlag&16;const Q=v.props||je,ie=_.props||je;let me;E&&dr(E,!1),(me=ie.onVnodeBeforeUpdate)&&Mo(me,E,_,v),te&&cr(_,v,E,"beforeUpdate"),E&&dr(E,!0),Gt&&(q=0,V=!1,j=null);const ze=I&&_.type!=="foreignObject";if(j?(Z(v.dynamicChildren,j,M,E,N,ze,K),E&&E.type.__hmrId&&In(v,_)):V||xe(v,_,M,null,E,N,ze,K,!1),q>0){if(q&16)D(M,_,Q,ie,E,N,I);else if(q&2&&Q.class!==ie.class&&i(M,"class",null,ie.class,I),q&4&&i(M,"style",Q.style,ie.style,I),q&8){const Me=_.dynamicProps;for(let Re=0;Re<Me.length;Re++){const Ge=Me[Re],Vo=Q[Ge],Kr=ie[Ge];(Kr!==Vo||Ge==="value")&&i(M,Ge,Vo,Kr,I,v.children,E,N,B)}}q&1&&v.children!==_.children&&d(M,_.children)}else!V&&j==null&&D(M,_,Q,ie,E,N,I);((me=ie.onVnodeUpdated)||te)&&lo(()=>{me&&Mo(me,E,_,v),te&&cr(_,v,E,"updated")},N)},Z=(v,_,E,N,I,K,V)=>{for(let M=0;M<_.length;M++){const q=v[M],j=_[M],te=q.el&&(q.type===Ce||!Ht(q,j)||q.shapeFlag&70)?f(q.el):E;g(q,j,te,null,N,I,K,V,!0)}},D=(v,_,E,N,I,K,V)=>{if(E!==N){if(E!==je)for(const M in E)!Gi(M)&&!(M in N)&&i(v,M,E[M],null,V,_.children,I,K,B);for(const M in N){if(Gi(M))continue;const q=N[M],j=E[M];q!==j&&M!=="value"&&i(v,M,j,q,V,_.children,I,K,B)}"value"in N&&i(v,"value",E.value,N.value)}},be=(v,_,E,N,I,K,V,M,q)=>{const j=_.el=v?v.el:l(""),te=_.anchor=v?v.anchor:l("");let{patchFlag:Q,dynamicChildren:ie,slotScopeIds:me}=_;(Gt||Q&2048)&&(Q=0,q=!1,ie=null),me&&(M=M?M.concat(me):me),v==null?(r(j,E,N),r(te,E,N),T(_.children,E,te,I,K,V,M,q)):Q>0&&Q&64&&ie&&v.dynamicChildren?(Z(v.dynamicChildren,ie,E,I,K,V,M),I&&I.type.__hmrId?In(v,_):(_.key!=null||I&&_===I.subTree)&&In(v,_,!0)):xe(v,_,E,te,I,K,V,M,q)},de=(v,_,E,N,I,K,V,M,q)=>{_.slotScopeIds=M,v==null?_.shapeFlag&512?I.ctx.activate(_,E,N,V,q):ye(_,E,N,I,K,V,q):Ee(v,_,q)},ye=(v,_,E,N,I,K,V)=>{const M=v.component=p0(v,N,I);if(M.type.__hmrId&&ov(M),Xi(v),_t(M,"mount"),gi(v)&&(M.ctx.renderer=Le),_t(M,"init"),b0(M),Ot(M,"init"),M.asyncDep){if(I&&I.registerDep(M,G),!v.el){const q=M.subTree=re(io);k(null,q,_,E)}return}G(M,v,_,E,I,K,V),Yi(),Ot(M,"mount")},Ee=(v,_,E)=>{const N=_.component=v.component;if(gv(v,_,E))if(N.asyncDep&&!N.asyncResolved){Xi(_),oe(N,_,E),Yi();return}else N.next=_,Qm(N.update),N.update();else _.el=v.el,N.vnode=_},G=(v,_,E,N,I,K,V)=>{const M=()=>{if(v.isMounted){let{next:te,bu:Q,u:ie,parent:me,vnode:ze}=v,Me=te,Re;Xi(te||v.vnode),dr(v,!1),te?(te.el=ze.el,oe(v,te,V)):te=ze,Q&&mr(Q),(Re=te.props&&te.props.onVnodeBeforeUpdate)&&Mo(Re,me,te,ze),dr(v,!0),_t(v,"render");const Ge=ll(v);Ot(v,"render");const Vo=v.subTree;v.subTree=Ge,_t(v,"patch"),g(Vo,Ge,f(Vo.el),J(Vo),v,I,K),Ot(v,"patch"),te.el=Ge.el,Me===null&&mv(v,Ge.el),ie&&lo(ie,I),(Re=te.props&&te.props.onVnodeUpdated)&&lo(()=>Mo(Re,me,te,ze),I),Sp(v),Yi()}else{let te;const{el:Q,props:ie}=_,{bm:me,m:ze,parent:Me}=v,Re=en(_);if(dr(v,!1),me&&mr(me),!Re&&(te=ie&&ie.onVnodeBeforeMount)&&Mo(te,Me,_),dr(v,!0),Q&&fe){const Ge=()=>{_t(v,"render"),v.subTree=ll(v),Ot(v,"render"),_t(v,"hydrate"),fe(Q,v.subTree,v,I,null),Ot(v,"hydrate")};Re?_.type.__asyncLoader().then(()=>!v.isUnmounted&&Ge()):Ge()}else{_t(v,"render");const Ge=v.subTree=ll(v);Ot(v,"render"),_t(v,"patch"),g(null,Ge,E,N,v,I,K),Ot(v,"patch"),_.el=Ge.el}if(ze&&lo(ze,I),!Re&&(te=ie&&ie.onVnodeMounted)){const Ge=_;lo(()=>Mo(te,Me,Ge),I)}(_.shapeFlag&256||Me&&en(Me.vnode)&&Me.vnode.shapeFlag&256)&&v.a&&lo(v.a,I),v.isMounted=!0,ql(v),_=E=N=null}},q=v.effect=new Js(M,()=>Ka(j),v.scope),j=v.update=()=>q.run();j.id=v.uid,dr(v,!0),q.onTrack=v.rtc?te=>mr(v.rtc,te):void 0,q.onTrigger=v.rtg?te=>mr(v.rtg,te):void 0,j.ownerInstance=v,j()},oe=(v,_,E)=>{_.component=v;const N=v.vnode.props;v.vnode=_,v.next=null,Uv(v,_.props,N,E),Zv(v,_.children,E),Ir(),od(),Nr()},xe=(v,_,E,N,I,K,V,M,q=!1)=>{const j=v&&v.children,te=v?v.shapeFlag:0,Q=_.children,{patchFlag:ie,shapeFlag:me}=_;if(ie>0){if(ie&128){fo(j,Q,E,N,I,K,V,M,q);return}else if(ie&256){Te(j,Q,E,N,I,K,V,M,q);return}}me&8?(te&16&&B(j,I,K),Q!==j&&d(E,Q)):te&16?me&16?fo(j,Q,E,N,I,K,V,M,q):B(j,I,K,!0):(te&8&&d(E,""),me&16&&T(Q,E,N,I,K,V,M,q))},Te=(v,_,E,N,I,K,V,M,q)=>{v=v||Jr,_=_||Jr;const j=v.length,te=_.length,Q=Math.min(j,te);let ie;for(ie=0;ie<Q;ie++){const me=_[ie]=q?Kt(_[ie]):Zo(_[ie]);g(v[ie],me,E,null,I,K,V,M,q)}j>te?B(v,I,K,!0,!1,Q):T(_,E,N,I,K,V,M,q,Q)},fo=(v,_,E,N,I,K,V,M,q)=>{let j=0;const te=_.length;let Q=v.length-1,ie=te-1;for(;j<=Q&&j<=ie;){const me=v[j],ze=_[j]=q?Kt(_[j]):Zo(_[j]);if(Ht(me,ze))g(me,ze,E,null,I,K,V,M,q);else break;j++}for(;j<=Q&&j<=ie;){const me=v[Q],ze=_[ie]=q?Kt(_[ie]):Zo(_[ie]);if(Ht(me,ze))g(me,ze,E,null,I,K,V,M,q);else break;Q--,ie--}if(j>Q){if(j<=ie){const me=ie+1,ze=me<te?_[me].el:N;for(;j<=ie;)g(null,_[j]=q?Kt(_[j]):Zo(_[j]),E,ze,I,K,V,M,q),j++}}else if(j>ie)for(;j<=Q;)Je(v[j],I,K,!0),j++;else{const me=j,ze=j,Me=new Map;for(j=ze;j<=ie;j++){const ho=_[j]=q?Kt(_[j]):Zo(_[j]);ho.key!=null&&(Me.has(ho.key)&&R("Duplicate keys found during update:",JSON.stringify(ho.key),"Make sure keys are unique."),Me.set(ho.key,j))}let Re,Ge=0;const Vo=ie-ze+1;let Kr=!1,Hc=0;const hn=new Array(Vo);for(j=0;j<Vo;j++)hn[j]=0;for(j=me;j<=Q;j++){const ho=v[j];if(Ge>=Vo){Je(ho,I,K,!0);continue}let it;if(ho.key!=null)it=Me.get(ho.key);else for(Re=ze;Re<=ie;Re++)if(hn[Re-ze]===0&&Ht(ho,_[Re])){it=Re;break}it===void 0?Je(ho,I,K,!0):(hn[it-ze]=j+1,it>=Hc?Hc=it:Kr=!0,g(ho,_[it],E,null,I,K,V,M,q),Ge++)}const qc=Kr?r0(hn):Jr;for(Re=qc.length-1,j=Vo-1;j>=0;j--){const ho=ze+j,it=_[ho],Vc=ho+1<te?_[ho+1].el:N;hn[j]===0?g(null,it,E,Vc,I,K,V,M,q):Kr&&(Re<0||j!==qc[Re]?Ue(it,E,Vc,2):Re--)}}},Ue=(v,_,E,N,I=null)=>{const{el:K,type:V,transition:M,children:q,shapeFlag:j}=v;if(j&6){Ue(v.component.subTree,_,E,N);return}if(j&128){v.suspense.move(_,E,N);return}if(j&64){V.move(v,_,E,Le);return}if(V===Ce){r(K,_,E);for(let Q=0;Q<q.length;Q++)Ue(q[Q],_,E,N);r(v.anchor,_,E);return}if(V===Zi){x(v,_,E);return}if(N!==2&&j&1&&M)if(N===0)M.beforeEnter(K),r(K,_,E),lo(()=>M.enter(K),I);else{const{leave:Q,delayLeave:ie,afterLeave:me}=M,ze=()=>r(K,_,E),Me=()=>{Q(K,()=>{ze(),me&&me()})};ie?ie(K,ze,Me):Me()}else r(K,_,E)},Je=(v,_,E,N=!1,I=!1)=>{const{type:K,props:V,ref:M,children:q,dynamicChildren:j,shapeFlag:te,patchFlag:Q,dirs:ie}=v;if(M!=null&&Ql(M,null,E,v,!0),te&256){_.ctx.deactivate(v);return}const me=te&1&&ie,ze=!en(v);let Me;if(ze&&(Me=V&&V.onVnodeBeforeUnmount)&&Mo(Me,_,v),te&6)W(v.component,E,N);else{if(te&128){v.suspense.unmount(E,N);return}me&&cr(v,null,_,"beforeUnmount"),te&64?v.type.remove(v,_,E,I,Le,N):j&&(K!==Ce||Q>0&&Q&64)?B(j,_,E,!1,!0):(K===Ce&&Q&384||!I&&te&16)&&B(q,_,E),N&&Ro(v)}(ze&&(Me=V&&V.onVnodeUnmounted)||me)&&lo(()=>{Me&&Mo(Me,_,v),me&&cr(v,null,_,"unmounted")},E)},Ro=v=>{const{type:_,el:E,anchor:N,transition:I}=v;if(_===Ce){v.patchFlag>0&&v.patchFlag&2048&&I&&!I.persisted?v.children.forEach(V=>{V.type===io?n(V.el):Ro(V)}):C(E,N);return}if(_===Zi){z(v);return}const K=()=>{n(E),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(v.shapeFlag&1&&I&&!I.persisted){const{leave:V,delayLeave:M}=I,q=()=>V(E,K);M?M(v.el,K,q):q()}else K()},C=(v,_)=>{let E;for(;v!==_;)E=u(v),n(v),v=E;n(_)},W=(v,_,E)=>{v.type.__hmrId&&tv(v);const{bum:N,scope:I,update:K,subTree:V,um:M}=v;N&&mr(N),I.stop(),K&&(K.active=!1,Je(V,v,_,E)),M&&lo(M,_),lo(()=>{v.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),sv(v)},B=(v,_,E,N=!1,I=!1,K=0)=>{for(let V=K;V<v.length;V++)Je(v[V],_,E,N,I)},J=v=>v.shapeFlag&6?J(v.component.subTree):v.shapeFlag&128?v.suspense.next():u(v.anchor||v.el),Oe=(v,_,E)=>{v==null?_._vnode&&Je(_._vnode,null,null,!0):g(_._vnode||null,v,_,null,null,null,E),od(),yp(),_._vnode=v},Le={p:g,um:Je,m:Ue,r:Ro,mt:ye,mc:T,pc:xe,pbc:Z,n:J,o:e};let ge,fe;return o&&([ge,fe]=o(Le)),{render:Oe,hydrate:ge,createApp:Qv(Oe,ge)}}function dr({effect:e,update:o},t){e.allowRecurse=o.allowRecurse=t}function In(e,o,t=!1){const r=e.children,n=o.children;if(ce(r)&&ce(n))for(let i=0;i<r.length;i++){const a=r[i];let l=n[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[i]=Kt(n[i]),l.el=a.el),t||In(a,l)),l.type===wi&&(l.el=a.el),l.type===io&&!l.el&&(l.el=a.el)}}function r0(e){const o=e.slice(),t=[0];let r,n,i,a,l;const s=e.length;for(r=0;r<s;r++){const c=e[r];if(c!==0){if(n=t[t.length-1],e[n]<c){o[r]=n,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,e[t[l]]<c?i=l+1:a=l;c<e[t[i]]&&(i>0&&(o[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=o[a];return t}const n0=e=>e.__isTeleport,on=e=>e&&(e.disabled||e.disabled===""),hd=e=>typeof SVGElement<"u"&&e instanceof SVGElement,es=(e,o)=>{const t=e&&e.to;if(De(t))if(o){const r=o(t);return r||R(`Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),r}else return R("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!t&&!on(e)&&R(`Invalid Teleport target: ${t}`),t},i0={__isTeleport:!0,process(e,o,t,r,n,i,a,l,s,c){const{mc:d,pc:f,pbc:u,o:{insert:h,querySelector:b,createText:g,createComment:m}}=c,k=on(o.props);let{shapeFlag:w,children:y,dynamicChildren:x}=o;if(Gt&&(s=!1,x=null),e==null){const z=o.el=m("teleport start"),L=o.anchor=m("teleport end");h(z,t,r),h(L,t,r);const $=o.target=es(o.props,b),O=o.targetAnchor=g("");$?(h(O,$),a=a||hd($)):k||R("Invalid Teleport target on mount:",$,`(${typeof $})`);const T=(U,Z)=>{w&16&&d(y,U,Z,n,i,a,l,s)};k?T(t,L):$&&T($,O)}else{o.el=e.el;const z=o.anchor=e.anchor,L=o.target=e.target,$=o.targetAnchor=e.targetAnchor,O=on(e.props),T=O?t:L,U=O?z:$;if(a=a||hd(L),x?(u(e.dynamicChildren,x,T,n,i,a,l),In(e,o,!0)):s||f(e,o,T,U,n,i,a,l,!1),k)O||Fi(o,t,z,c,1);else if((o.props&&o.props.to)!==(e.props&&e.props.to)){const Z=o.target=es(o.props,b);Z?Fi(o,Z,null,c,0):R("Invalid Teleport target on update:",L,`(${typeof L})`)}else O&&Fi(o,L,$,c,1)}Xp(o)},remove(e,o,t,r,{um:n,o:{remove:i}},a){const{shapeFlag:l,children:s,anchor:c,targetAnchor:d,target:f,props:u}=e;if(f&&i(d),(a||!on(u))&&(i(c),l&16))for(let h=0;h<s.length;h++){const b=s[h];n(b,o,t,!0,!!b.dynamicChildren)}},move:Fi,hydrate:a0};function Fi(e,o,t,{o:{insert:r},m:n},i=2){i===0&&r(e.targetAnchor,o,t);const{el:a,anchor:l,shapeFlag:s,children:c,props:d}=e,f=i===2;if(f&&r(a,o,t),(!f||on(d))&&s&16)for(let u=0;u<c.length;u++)n(c[u],o,t,2);f&&r(l,o,t)}function a0(e,o,t,r,n,i,{o:{nextSibling:a,parentNode:l,querySelector:s}},c){const d=o.target=es(o.props,s);if(d){const f=d._lpa||d.firstChild;if(o.shapeFlag&16)if(on(o.props))o.anchor=c(a(e),o,l(e),t,r,n,i),o.targetAnchor=f;else{o.anchor=a(e);let u=f;for(;u;)if(u=a(u),u&&u.nodeType===8&&u.data==="teleport anchor"){o.targetAnchor=u,d._lpa=o.targetAnchor&&a(o.targetAnchor);break}c(f,o,d,t,r,n,i)}Xp(o)}return o.anchor&&a(o.anchor)}const l0=i0;function Xp(e){const o=e.ctx;if(o&&o.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",o.uid),t=t.nextSibling;o.ut()}}const Ce=Symbol("Fragment"),wi=Symbol("Text"),io=Symbol("Comment"),Zi=Symbol("Static"),Nn=[];let Qo=null;function A(e=!1){Nn.push(Qo=e?null:[])}function s0(){Nn.pop(),Qo=Nn[Nn.length-1]||null}let Qn=1;function bd(e){Qn+=e}function Yp(e){return e.dynamicChildren=Qn>0?Qo||Jr:null,s0(),Qn>0&&Qo&&Qo.push(e),e}function X(e,o,t,r,n,i){return Yp(p(e,o,t,r,n,i,!0))}function ee(e,o,t,r,n){return Yp(re(e,o,t,r,n,!0))}function gt(e){return e?e.__v_isVNode===!0:!1}function Ht(e,o){return o.shapeFlag&6&&Gr.has(o.type)?(e.shapeFlag&=-257,o.shapeFlag&=-513,!1):e.type===o.type&&e.key===o.key}const c0=(...e)=>d0(...e),Va="__vInternal",Zp=({key:e})=>e??null,Ji=({ref:e,ref_key:o,ref_for:t})=>e!=null?De(e)||Fe(e)||ue(e)?{i:to,r:e,k:o,f:!!t}:e:null;function p(e,o=null,t=null,r=0,n=null,i=e===Ce?0:1,a=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:o,key:o&&Zp(o),ref:o&&Ji(o),scopeId:Ua,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:to};return l?(pc(s,t),i&128&&e.normalize(s)):t&&(s.shapeFlag|=De(t)?8:16),s.key!==s.key&&R("VNode created with invalid key (NaN). VNode type:",s.type),Qn>0&&!a&&Qo&&(s.patchFlag>0||i&6)&&s.patchFlag!==32&&Qo.push(s),s}const re=c0;function d0(e,o=null,t=null,r=0,n=null,i=!1){if((!e||e===Pv)&&(e||R(`Invalid vnode type when creating vnode: ${e}.`),e=io),gt(e)){const l=tt(e,o,!0);return t&&pc(l,t),Qn>0&&!i&&Qo&&(l.shapeFlag&6?Qo[Qo.indexOf(e)]=l:Qo.push(l)),l.patchFlag|=-2,l}if(th(e)&&(e=e.__vccOpts),o){o=Ze(o);let{class:l,style:s}=o;l&&!De(l)&&(o.class=qe(l)),Ie(s)&&(da(s)&&!ce(s)&&(s=Be({},s)),o.style=no(s))}const a=De(e)?1:Tp(e)?128:n0(e)?64:Ie(e)?4:ue(e)?2:0;return a&4&&da(e)&&(e=he(e),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),p(e,o,t,r,n,a,i,!0)}function Ze(e){return e?da(e)||Va in e?Be({},e):e:null}function tt(e,o,t=!1){const{props:r,ref:n,patchFlag:i,children:a}=e,l=o?nn(r||{},o):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Zp(l),ref:o&&o.ref?t&&n?ce(n)?n.concat(Ji(o)):[n,Ji(o)]:Ji(o):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i===-1&&ce(a)?a.map(Jp):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:o&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tt(e.ssContent),ssFallback:e.ssFallback&&tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Jp(e){const o=tt(e);return ce(e.children)&&(o.children=e.children.map(Jp)),o}function F(e=" ",o=0){return re(wi,null,e,o)}function ve(e="",o=!1){return o?(A(),ee(io,null,e)):re(io,null,e)}function Zo(e){return e==null||typeof e=="boolean"?re(io):ce(e)?re(Ce,null,e.slice()):typeof e=="object"?Kt(e):re(wi,null,String(e))}function Kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tt(e)}function pc(e,o){let t=0;const{shapeFlag:r}=e;if(o==null)o=null;else if(ce(o))t=16;else if(typeof o=="object")if(r&65){const n=o.default;n&&(n._c&&(n._d=!1),pc(e,n()),n._c&&(n._d=!0));return}else{t=32;const n=o._;!n&&!(Va in o)?o._ctx=to:n===3&&to&&(to.slots._===1?o._=1:(o._=2,e.patchFlag|=1024))}else ue(o)?(o={default:o,_ctx:to},t=32):(o=String(o),r&64?(t=16,o=[F(o)]):t=8);e.children=o,e.shapeFlag|=t}function nn(...e){const o={};for(let t=0;t<e.length;t++){const r=e[t];for(const n in r)if(n==="class")o.class!==r.class&&(o.class=qe([o.class,r.class]));else if(n==="style")o.style=no([o.style,r.style]);else if(pi(n)){const i=o[n],a=r[n];a&&i!==a&&!(ce(i)&&i.includes(a))&&(o[n]=i?[].concat(i,a):a)}else n!==""&&(o[n]=r[n])}return o}function Mo(e,o,t,r=null){Uo(e,o,7,[t,r])}const f0=Gp();let u0=0;function p0(e,o,t){const r=e.type,n=(o?o.appContext:e.appContext)||f0,i={uid:u0++,vnode:e,type:r,parent:o,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:o?o.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Up(r,n),emitsOptions:Lp(r,n),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=Cv(i),i.root=o?o.root:i,i.emit=uv.bind(null,i),e.ce&&e.ce(i),i}let He=null;const xo=()=>He||to,an=e=>{He=e,e.scope.on()},Pr=()=>{He&&He.scope.off(),He=null},h0=ar("slot,component");function os(e,o){const t=o.isNativeTag||Gu;(h0(e)||t(e))&&R("Do not use built-in or reserved HTML elements as component id: "+e)}function Qp(e){return e.vnode.shapeFlag&4}let ei=!1;function b0(e,o=!1){ei=o;const{props:t,children:r}=e.vnode,n=Qp(e);Kv(e,t,n,o),Yv(e,r);const i=n?g0(e,o):void 0;return ei=!1,i}function g0(e,o){var t;const r=e.type;{if(r.name&&os(r.name,e.appContext.config),r.components){const i=Object.keys(r.components);for(let a=0;a<i.length;a++)os(i[a],e.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let a=0;a<i.length;a++)Rp(i[a])}r.compilerOptions&&m0()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Ma(new Proxy(e.ctx,Dp)),Fv(e);const{setup:n}=r;if(n){const i=e.setupContext=n.length>1?oh(e):null;an(e),Ir();const a=At(n,e,0,[Yr(e.props),i]);if(Nr(),Pr(),Ws(a)){if(a.then(Pr,Pr),o)return a.then(l=>{gd(e,l,o)}).catch(l=>{Da(l,e,0)});if(e.asyncDep=a,!e.suspense){const l=(t=r.name)!==null&&t!==void 0?t:"Anonymous";R(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else gd(e,a,o)}else eh(e,o)}function gd(e,o,t){ue(o)?e.type.__ssrInlineRender?e.ssrRender=o:e.render=o:Ie(o)?(gt(o)&&R("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=o,e.setupState=hp(o),$v(e)):o!==void 0&&R(`setup() should return an object. Received: ${o===null?"null":typeof o}`),eh(e,t)}let ts;const m0=()=>!ts;function eh(e,o,t){const r=e.type;if(!e.render){if(!o&&ts&&!r.render){const n=r.template||fc(e).template;if(n){_t(e,"compile");const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:s}=r,c=Be(Be({isCustomElement:i,delimiters:l},a),s);r.render=ts(n,c),Ot(e,"compile")}}e.render=r.render||So}an(e),Ir(),Nv(e),Nr(),Pr(),!r.render&&e.render===So&&!o&&(r.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function v0(e){return new Proxy(e.attrs,{get(o,t){return ua(),Lo(e,"get","$attrs"),o[t]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}})}function oh(e){const o=r=>{if(e.exposed&&R("expose() should be called only once per setup()."),r!=null){let n=typeof r;n==="object"&&(ce(r)?n="array":Fe(r)&&(n="ref")),n!=="object"&&R(`expose() should be passed a plain object, received ${n}.`)}e.exposed=r||{}};let t;return Object.freeze({get attrs(){return t||(t=v0(e))},get slots(){return Yr(e.slots)},get emit(){return(r,...n)=>e.emit(r,...n)},expose:o})}function Wa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(hp(Ma(e.exposed)),{get(o,t){if(t in o)return o[t];if(t in Ar)return Ar[t](e)},has(o,t){return t in o||t in Ar}}))}const k0=/(?:^|[-_])(\w)/g,w0=e=>e.replace(k0,o=>o.toUpperCase()).replace(/[-_]/g,"");function oi(e,o=!0){return ue(e)?e.displayName||e.name:e.name||o&&e.__name}function Ga(e,o,t=!1){let r=oi(o);if(!r&&o.__file){const n=o.__file.match(/([^/\\]+)\.\w+$/);n&&(r=n[1])}if(!r&&e&&e.parent){const n=i=>{for(const a in i)if(i[a]===o)return a};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?w0(r):t?"App":"Anonymous"}function th(e){return ue(e)&&"__vccOpts"in e}const P=(e,o)=>Hm(e,o,ei);function y0(){return x0().slots}function x0(){const e=xo();return e||R("useContext() called without active instance."),e.setupContext||(e.setupContext=oh(e))}function oo(e,o,t){const r=arguments.length;return r===2?Ie(o)&&!ce(o)?gt(o)?re(e,null,[o]):re(e,o):re(e,null,o):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&gt(t)&&(t=[t]),re(e,o,t))}const _0=Symbol("ssrContext"),O0=()=>{{const e=Y(_0);return e||R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function ul(e){return!!(e&&e.__v_isShallow)}function S0(){if(typeof window>"u")return;const e={style:"color:#3ba776"},o={style:"color:#0b1bc9"},t={style:"color:#b62e24"},r={style:"color:#9d288c"},n={header(f){return Ie(f)?f.__isVue?["div",e,"VueInstance"]:Fe(f)?["div",{},["span",e,d(f)],"<",l(f.value),">"]:Er(f)?["div",{},["span",e,ul(f)?"ShallowReactive":"Reactive"],"<",l(f),`>${rr(f)?" (readonly)":""}`]:rr(f)?["div",{},["span",e,ul(f)?"ShallowReadonly":"Readonly"],"<",l(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...i(f.$)]}};function i(f){const u=[];f.type.props&&f.props&&u.push(a("props",he(f.props))),f.setupState!==je&&u.push(a("setup",f.setupState)),f.data!==je&&u.push(a("data",he(f.data)));const h=s(f,"computed");h&&u.push(a("computed",h));const b=s(f,"inject");return b&&u.push(a("injected",b)),u.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),u}function a(f,u){return u=Be({},u),Object.keys(u).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(u).map(h=>["div",{},["span",r,h+": "],l(u[h],!1)])]]:["span",{}]}function l(f,u=!0){return typeof f=="number"?["span",o,f]:typeof f=="string"?["span",t,JSON.stringify(f)]:typeof f=="boolean"?["span",r,f]:Ie(f)?["object",{object:u?he(f):f}]:["span",t,String(f)]}function s(f,u){const h=f.type;if(ue(h))return;const b={};for(const g in f.ctx)c(h,g,u)&&(b[g]=f.ctx[g]);return b}function c(f,u,h){const b=f[h];if(ce(b)&&b.includes(u)||Ie(b)&&u in b||f.extends&&c(f.extends,u,h)||f.mixins&&f.mixins.some(g=>c(g,u,h)))return!0}function d(f){return ul(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(n):window.devtoolsFormatters=[n]}const ma="3.2.47",z0="http://www.w3.org/2000/svg",vr=typeof document<"u"?document:null,md=vr&&vr.createElement("template"),L0={insert:(e,o,t)=>{o.insertBefore(e,t||null)},remove:e=>{const o=e.parentNode;o&&o.removeChild(e)},createElement:(e,o,t,r)=>{const n=o?vr.createElementNS(z0,e):vr.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&n.setAttribute("multiple",r.multiple),n},createText:e=>vr.createTextNode(e),createComment:e=>vr.createComment(e),setText:(e,o)=>{e.nodeValue=o},setElementText:(e,o)=>{e.textContent=o},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vr.querySelector(e),setScopeId(e,o){e.setAttribute(o,"")},insertStaticContent(e,o,t,r,n,i){const a=t?t.previousSibling:o.lastChild;if(n&&(n===i||n.nextSibling))for(;o.insertBefore(n.cloneNode(!0),t),!(n===i||!(n=n.nextSibling)););else{md.innerHTML=r?`<svg>${e}</svg>`:e;const l=md.content;if(r){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}o.insertBefore(l,t)}return[a?a.nextSibling:o.firstChild,t?t.previousSibling:o.lastChild]}};function E0(e,o,t){const r=e._vtc;r&&(o=(o?[o,...r]:[...r]).join(" ")),o==null?e.removeAttribute("class"):t?e.setAttribute("class",o):e.className=o}function T0(e,o,t){const r=e.style,n=De(t);if(t&&!n){if(o&&!De(o))for(const i in o)t[i]==null&&rs(r,i,"");for(const i in t)rs(r,i,t[i])}else{const i=r.display;n?o!==t&&(r.cssText=t):o&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const A0=/[^\\];\s*$/,vd=/\s*!important$/;function rs(e,o,t){if(ce(t))t.forEach(r=>rs(e,o,r));else if(t==null&&(t=""),A0.test(t)&&R(`Unexpected semicolon at the end of '${o}' style value: '${t}'`),o.startsWith("--"))e.setProperty(o,t);else{const r=P0(e,o);vd.test(t)?e.setProperty(Pt(r),t.replace(vd,""),"important"):e[r]=t}}const kd=["Webkit","Moz","ms"],pl={};function P0(e,o){const t=pl[o];if(t)return t;let r=ht(o);if(r!=="filter"&&r in e)return pl[o]=r;r=Fr(r);for(let n=0;n<kd.length;n++){const i=kd[n]+r;if(i in e)return pl[o]=i}return o}const wd="http://www.w3.org/1999/xlink";function C0(e,o,t,r,n){if(r&&o.startsWith("xlink:"))t==null?e.removeAttributeNS(wd,o.slice(6,o.length)):e.setAttributeNS(wd,o,t);else{const i=Jg(o);t==null||i&&!Vu(t)?e.removeAttribute(o):e.setAttribute(o,i?"":t)}}function F0(e,o,t,r,n,i,a){if(o==="innerHTML"||o==="textContent"){r&&a(r,n,i),e[o]=t??"";return}if(o==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const s=t??"";(e.value!==s||e.tagName==="OPTION")&&(e.value=s),t==null&&e.removeAttribute(o);return}let l=!1;if(t===""||t==null){const s=typeof e[o];s==="boolean"?t=Vu(t):t==null&&s==="string"?(t="",l=!0):s==="number"&&(t=0,l=!0)}try{e[o]=t}catch(s){l||R(`Failed setting prop "${o}" on <${e.tagName.toLowerCase()}>: value ${t} is invalid.`,s)}l&&e.removeAttribute(o)}function $0(e,o,t,r){e.addEventListener(o,t,r)}function I0(e,o,t,r){e.removeEventListener(o,t,r)}function N0(e,o,t,r,n=null){const i=e._vei||(e._vei={}),a=i[o];if(r&&a)a.value=r;else{const[l,s]=R0(o);if(r){const c=i[o]=D0(r,n);$0(e,l,c,s)}else a&&(I0(e,l,a,s),i[o]=void 0)}}const yd=/(?:Once|Passive|Capture)$/;function R0(e){let o;if(yd.test(e)){o={};let r;for(;r=e.match(yd);)e=e.slice(0,e.length-r[0].length),o[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),o]}let hl=0;const j0=Promise.resolve(),M0=()=>hl||(j0.then(()=>hl=0),hl=Date.now());function D0(e,o){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Uo(K0(r,t.value),o,5,[r])};return t.value=e,t.attached=M0(),t}function K0(e,o){if(ce(o)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},o.map(r=>n=>!n._stopped&&r&&r(n))}else return o}const xd=/^on[a-z]/,B0=(e,o,t,r,n=!1,i,a,l,s)=>{o==="class"?E0(e,r,n):o==="style"?T0(e,t,r):pi(o)?ia(o)||N0(e,o,t,r,a):(o[0]==="."?(o=o.slice(1),!0):o[0]==="^"?(o=o.slice(1),!1):U0(e,o,r,n))?F0(e,o,r,i,a,l,s):(o==="true-value"?e._trueValue=r:o==="false-value"&&(e._falseValue=r),C0(e,o,r,n))};function U0(e,o,t,r){return r?!!(o==="innerHTML"||o==="textContent"||o in e&&xd.test(o)&&ue(t)):o==="spellcheck"||o==="draggable"||o==="translate"||o==="form"||o==="list"&&e.tagName==="INPUT"||o==="type"&&e.tagName==="TEXTAREA"||xd.test(o)&&De(t)?!1:o in e}const Rt="transition",gn="animation",rh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},H0=Be({},yv.props,rh),fr=(e,o=[])=>{ce(e)?e.forEach(t=>t(...o)):e&&e(...o)},_d=e=>e?ce(e)?e.some(o=>o.length>1):e.length>1:!1;function q0(e){const o={};for(const D in e)D in rh||(o[D]=e[D]);if(e.css===!1)return o;const{name:t="v",type:r,duration:n,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:s=i,appearActiveClass:c=a,appearToClass:d=l,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:u=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,b=V0(n),g=b&&b[0],m=b&&b[1],{onBeforeEnter:k,onEnter:w,onEnterCancelled:y,onLeave:x,onLeaveCancelled:z,onBeforeAppear:L=k,onAppear:$=w,onAppearCancelled:O=y}=o,T=(D,be,de)=>{Mt(D,be?d:l),Mt(D,be?c:a),de&&de()},U=(D,be)=>{D._isLeaving=!1,Mt(D,f),Mt(D,h),Mt(D,u),be&&be()},Z=D=>(be,de)=>{const ye=D?$:w,Ee=()=>T(be,D,de);fr(ye,[be,Ee]),Od(()=>{Mt(be,D?s:i),St(be,D?d:l),_d(ye)||Sd(be,r,g,Ee)})};return Be(o,{onBeforeEnter(D){fr(k,[D]),St(D,i),St(D,a)},onBeforeAppear(D){fr(L,[D]),St(D,s),St(D,c)},onEnter:Z(!1),onAppear:Z(!0),onLeave(D,be){D._isLeaving=!0;const de=()=>U(D,be);St(D,f),ih(),St(D,u),Od(()=>{D._isLeaving&&(Mt(D,f),St(D,h),_d(x)||Sd(D,r,m,de))}),fr(x,[D,de])},onEnterCancelled(D){T(D,!1),fr(y,[D])},onAppearCancelled(D){T(D,!0),fr(O,[D])},onLeaveCancelled(D){U(D),fr(z,[D])}})}function V0(e){if(e==null)return null;if(Ie(e))return[bl(e.enter),bl(e.leave)];{const o=bl(e);return[o,o]}}function bl(e){const o=am(e);return Xm(o,"<transition> explicit duration"),o}function St(e,o){o.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(o)}function Mt(e,o){o.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:t}=e;t&&(t.delete(o),t.size||(e._vtc=void 0))}function Od(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let W0=0;function Sd(e,o,t,r){const n=e._endId=++W0,i=()=>{n===e._endId&&r()};if(t)return setTimeout(i,t);const{type:a,timeout:l,propCount:s}=nh(e,o);if(!a)return r();const c=a+"end";let d=0;const f=()=>{e.removeEventListener(c,u),i()},u=h=>{h.target===e&&++d>=s&&f()};setTimeout(()=>{d<s&&f()},l+1),e.addEventListener(c,u)}function nh(e,o){const t=window.getComputedStyle(e),r=b=>(t[b]||"").split(", "),n=r(`${Rt}Delay`),i=r(`${Rt}Duration`),a=zd(n,i),l=r(`${gn}Delay`),s=r(`${gn}Duration`),c=zd(l,s);let d=null,f=0,u=0;o===Rt?a>0&&(d=Rt,f=a,u=i.length):o===gn?c>0&&(d=gn,f=c,u=s.length):(f=Math.max(a,c),d=f>0?a>c?Rt:gn:null,u=d?d===Rt?i.length:s.length:0);const h=d===Rt&&/\b(transform|all)(,|$)/.test(r(`${Rt}Property`).toString());return{type:d,timeout:f,propCount:u,hasTransform:h}}function zd(e,o){for(;e.length<o.length;)e=e.concat(e);return Math.max(...o.map((t,r)=>Ld(t)+Ld(e[r])))}function Ld(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ih(){return document.body.offsetHeight}const ah=new WeakMap,lh=new WeakMap,sh={name:"TransitionGroup",props:Be({},H0,{tag:String,moveClass:String}),setup(e,{slots:o}){const t=xo(),r=Pp();let n,i;return qa(()=>{if(!n.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Q0(n[0].el,t.vnode.el,a))return;n.forEach(Y0),n.forEach(Z0);const l=n.filter(J0);ih(),l.forEach(s=>{const c=s.el,d=c.style;St(c,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=c._moveCb=u=>{u&&u.target!==c||(!u||/transform$/.test(u.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Mt(c,a))};c.addEventListener("transitionend",f)})}),()=>{const a=he(e),l=q0(a);let s=a.tag||Ce;n=i,i=o.default?cc(o.default()):[];for(let c=0;c<i.length;c++){const d=i[c];d.key!=null?rn(d,Jn(d,l,r,t)):R("<TransitionGroup> children must be keyed.")}if(n)for(let c=0;c<n.length;c++){const d=n[c];rn(d,Jn(d,l,r,t)),ah.set(d,d.el.getBoundingClientRect())}return re(s,null,i)}}},G0=e=>delete e.mode;sh.props;const X0=sh;function Y0(e){const o=e.el;o._moveCb&&o._moveCb(),o._enterCb&&o._enterCb()}function Z0(e){lh.set(e,e.el.getBoundingClientRect())}function J0(e){const o=ah.get(e),t=lh.get(e),r=o.left-t.left,n=o.top-t.top;if(r||n){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${n}px)`,i.transitionDuration="0s",e}}function Q0(e,o,t){const r=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const n=o.nodeType===1?o:o.parentNode;n.appendChild(r);const{hasTransform:i}=nh(r);return n.removeChild(r),i}const ek=["ctrl","shift","alt","meta"],ok={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,o)=>ek.some(t=>e[`${t}Key`]&&!o.includes(t))},tk=(e,o)=>(t,...r)=>{for(let n=0;n<o.length;n++){const i=ok[o[n]];if(i&&i(t,o))return}return e(t,...r)},rk={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$i=(e,o)=>t=>{if(!("key"in t))return;const r=Pt(t.key);if(o.some(n=>n===r||rk[n]===r))return e(t)},ch={beforeMount(e,{value:o},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&o?t.beforeEnter(e):mn(e,o)},mounted(e,{value:o},{transition:t}){t&&o&&t.enter(e)},updated(e,{value:o,oldValue:t},{transition:r}){!o!=!t&&(r?o?(r.beforeEnter(e),mn(e,!0),r.enter(e)):r.leave(e,()=>{mn(e,!1)}):mn(e,o))},beforeUnmount(e,{value:o}){mn(e,o)}};function mn(e,o){e.style.display=o?e._vod:"none"}const nk=Be({patchProp:B0},L0);let Ed;function ik(){return Ed||(Ed=o0(nk))}const ak=(...e)=>{const o=ik().createApp(...e);lk(o),sk(o);const{mount:t}=o;return o.mount=r=>{const n=ck(r);if(!n)return;const i=o._component;!ue(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.innerHTML="";const a=t(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),a},o};function lk(e){Object.defineProperty(e.config,"isNativeTag",{value:o=>qu(o)||Yg(o),writable:!1})}function sk(e){{const o=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return o},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const t=e.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return R(r),t},set(){R(r)}})}}function ck(e){if(De(e)){const o=document.querySelector(e);return o||R(`Failed to mount app: mount target selector "${e}" returned null.`),o}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function dk(){S0()}dk();function ns(e,o={},t){for(const r in e){const n=e[r],i=t?`${t}:${r}`:r;typeof n=="object"&&n!==null?ns(n,o,i):typeof n=="function"&&(o[i]=n)}return o}const fk={run:e=>e()},uk=()=>fk,dh=typeof console.createTask<"u"?console.createTask:uk;function pk(e,o){const t=o.shift(),r=dh(t);return e.reduce((n,i)=>n.then(()=>r.run(()=>i(...o))),Promise.resolve())}function hk(e,o){const t=o.shift(),r=dh(t);return Promise.all(e.map(n=>r.run(()=>n(...o))))}function gl(e,o){for(const t of[...e])t(o)}class bk{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(o,t,r={}){if(!o||typeof t!="function")return()=>{};const n=o;let i;for(;this._deprecatedHooks[o];)i=this._deprecatedHooks[o],o=i.to;if(i&&!r.allowDeprecated){let a=i.message;a||(a=`${n} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+o.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[o]=this._hooks[o]||[],this._hooks[o].push(t),()=>{t&&(this.removeHook(o,t),t=void 0)}}hookOnce(o,t){let r,n=(...i)=>(typeof r=="function"&&r(),r=void 0,n=void 0,t(...i));return r=this.hook(o,n),r}removeHook(o,t){if(this._hooks[o]){const r=this._hooks[o].indexOf(t);r!==-1&&this._hooks[o].splice(r,1),this._hooks[o].length===0&&delete this._hooks[o]}}deprecateHook(o,t){this._deprecatedHooks[o]=typeof t=="string"?{to:t}:t;const r=this._hooks[o]||[];delete this._hooks[o];for(const n of r)this.hook(o,n)}deprecateHooks(o){Object.assign(this._deprecatedHooks,o);for(const t in o)this.deprecateHook(t,o[t])}addHooks(o){const t=ns(o),r=Object.keys(t).map(n=>this.hook(n,t[n]));return()=>{for(const n of r.splice(0,r.length))n()}}removeHooks(o){const t=ns(o);for(const r in t)this.removeHook(r,t[r])}removeAllHooks(){for(const o in this._hooks)delete this._hooks[o]}callHook(o,...t){return t.unshift(o),this.callHookWith(pk,o,...t)}callHookParallel(o,...t){return t.unshift(o),this.callHookWith(hk,o,...t)}callHookWith(o,t,...r){const n=this._before||this._after?{name:t,args:r,context:{}}:void 0;this._before&&gl(this._before,n);const i=o(t in this._hooks?[...this._hooks[t]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&n&&gl(this._after,n)}):(this._after&&n&&gl(this._after,n),i)}beforeEach(o){return this._before=this._before||[],this._before.push(o),()=>{if(this._before!==void 0){const t=this._before.indexOf(o);t!==-1&&this._before.splice(t,1)}}}afterEach(o){return this._after=this._after||[],this._after.push(o),()=>{if(this._after!==void 0){const t=this._after.indexOf(o);t!==-1&&this._after.splice(t,1)}}}}function gk(){return new bk}function mk(e){return Array.isArray(e)?e:[e]}const fh=["title","script","style","noscript"],uh=["base","meta","link","style","script","noscript"],vk=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],kk=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],wk=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function ph(e){let o=9;for(let t=0;t<e.length;)o=Math.imul(o^e.charCodeAt(t++),9**9);return((o^o>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function is(e){return ph(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([o,t])=>`${o}:${String(t)}`).join(",")}`)}function yk(e){let o=9;for(const t of e)for(let r=0;r<t.length;)o=Math.imul(o^t.charCodeAt(r++),9**9);return((o^o>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function hh(e,o){const{props:t,tag:r}=e;if(kk.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const n=["id"];r==="meta"&&n.push("name","property","http-equiv");for(const i of n)if(typeof t[i]<"u"){const a=String(t[i]);return o&&!o(a)?!1:`${r}:${i}:${a}`}return!1}function Td(e,o){return e==null?o||null:typeof e=="function"?e(o):e}function Ii(e,o=!1,t){const{tag:r,$el:n}=e;n&&(Object.entries(r.props).forEach(([i,a])=>{a=String(a);const l=`attr:${i}`;if(i==="class"){if(!a)return;for(const s of a.split(" ")){const c=`${l}:${s}`;t&&t(e,c,()=>n.classList.remove(s)),n.classList.contains(s)||n.classList.add(s)}return}t&&!i.startsWith("data-h-")&&t(e,l,()=>n.removeAttribute(i)),(o||n.getAttribute(i)!==a)&&n.setAttribute(i,a)}),fh.includes(r.tag)&&(r.textContent&&r.textContent!==n.textContent?n.textContent=r.textContent:r.innerHTML&&r.innerHTML!==n.innerHTML&&(n.innerHTML=r.innerHTML)))}let vn=!1;async function bh(e,o={}){var u,h;const t={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const r=o.document||e.resolvedOptions.document||window.document,n=(await e.resolveTags()).map(l);if(e.resolvedOptions.experimentalHashHydration&&(vn=vn||e._hash||!1,vn)){const b=yk(n.map(g=>g.tag._h));if(vn===b)return;vn=b}const i=e._popSideEffectQueue();e.headEntries().map(b=>b._sde).forEach(b=>{Object.entries(b).forEach(([g,m])=>{i[g]=m})});const a=(b,g,m)=>{g=`${b.renderId}:${g}`,b.entry&&(b.entry._sde[g]=m),delete i[g]};function l(b){const g=e.headEntries().find(k=>k._i===b._e),m={renderId:b._d||is(b),$el:null,shouldRender:!0,tag:b,entry:g,markSideEffect:(k,w)=>a(m,k,w)};return m}const s=[],c={body:[],head:[]},d=b=>{e._elMap[b.renderId]=b.$el,s.push(b),a(b,"el",()=>{var g;(g=b.$el)==null||g.remove(),delete e._elMap[b.renderId]})};for(const b of n){if(await e.hooks.callHook("dom:beforeRenderTag",b),!b.shouldRender)continue;const{tag:g}=b;if(g.tag==="title"){r.title=g.textContent||"",s.push(b);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){b.$el=r[g.tag==="htmlAttrs"?"documentElement":"body"],Ii(b,!1,a),s.push(b);continue}if(b.$el=e._elMap[b.renderId],!b.$el&&g.key&&(b.$el=r.querySelector(`${(u=g.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),b.$el){b.tag._d&&Ii(b),d(b);continue}c[(h=g.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(b)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(c).forEach(([b,g])=>{var k;if(!g.length)return;const m=(k=r==null?void 0:r[b])==null?void 0:k.children;if(m){for(const w of[...m].reverse()){const y=w.tagName.toLowerCase();if(!uh.includes(y))continue;const x=w.getAttributeNames().reduce((O,T)=>({...O,[T]:w.getAttribute(T)}),{}),z={tag:y,props:x};w.innerHTML&&(z.innerHTML=w.innerHTML);const L=is(z);let $=g.findIndex(O=>(O==null?void 0:O.renderId)===L);if($===-1){const O=hh(z);$=g.findIndex(T=>(T==null?void 0:T.tag._d)&&T.tag._d===O)}if($!==-1){const O=g[$];O.$el=w,Ii(O),d(O),delete g[$]}}g.forEach(w=>{const y=w.tag.tagPosition||"head";f[y]=f[y]||r.createDocumentFragment(),w.$el||(w.$el=r.createElement(w.tag.tag),Ii(w,!0)),f[y].appendChild(w.$el),d(w)})}}),f.head&&r.head.appendChild(f.head),f.bodyOpen&&r.body.insertBefore(f.bodyOpen,r.body.firstChild),f.bodyClose&&r.body.appendChild(f.bodyClose);for(const b of s)await e.hooks.callHook("dom:renderTag",b);Object.values(i).forEach(b=>b())}let ml=null;async function gh(e,o={}){function t(){return ml=null,bh(e,o)}const r=o.delayFn||(n=>setTimeout(n,10));return ml=ml||new Promise(n=>r(()=>n(t())))}function xk(e){return{hooks:{"entries:updated":function(o){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let t=e==null?void 0:e.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),gh(o,{document:(e==null?void 0:e.document)||window.document,delayFn:t})}}}}function _k(e){var o;return((o=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:o.getAttribute("content"))||!1}const Ad={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Pd(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const o=e.tagPriority||e.tag;return o in Ad?Ad[o]:10}const Ok=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Sk(){return{hooks:{"tags:resolve":e=>{const o=t=>{var r;return(r=e.tags.find(n=>n._d===t))==null?void 0:r._p};for(const{prefix:t,offset:r}of Ok)for(const n of e.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(t))){const i=o(n.tagPriority.replace(t,""));typeof i<"u"&&(n._p=i+r)}e.tags.sort((t,r)=>t._p-r._p).sort((t,r)=>Pd(t)-Pd(r))}}}}function zk(){return{hooks:{"tags:resolve":e=>{const{tags:o}=e;let t=o.findIndex(n=>n.tag==="titleTemplate");const r=o.findIndex(n=>n.tag==="title");if(r!==-1&&t!==-1){const n=Td(o[t].textContent,o[r].textContent);n!==null?o[r].textContent=n||o[r].textContent:delete o[r]}else if(t!==-1){const n=Td(o[t].textContent);n!==null&&(o[t].textContent=n,o[t].tag="title",t=-1)}t!==-1&&delete o[t],e.tags=o.filter(Boolean)}}}}function Lk(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Ek=["link","style","script","noscript"];function Tk(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:o})=>{o.experimentalHashHydration===!0&&(e._h=is(e)),e.key&&Ek.includes(e.tag)&&(e._h=ph(e.key),e.props[`data-h-${e._h}`]="")}}}}const Cd=["script","link","bodyAttrs"];function Ak(){const e=(o,t)=>{const r={},n={};Object.entries(t.props).forEach(([a,l])=>{a.startsWith("on")&&typeof l=="function"?n[a]=l:r[a]=l});let i;return o==="dom"&&t.tag==="script"&&typeof r.src=="string"&&typeof n.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:n,delayedSrc:i}};return{hooks:{"ssr:render":function(o){o.tags=o.tags.map(t=>(!Cd.includes(t.tag)||!Object.entries(t.props).find(([r,n])=>r.startsWith("on")&&typeof n=="function")||(t.props=e("ssr",t).props),t))},"dom:beforeRenderTag":function(o){if(!Cd.includes(o.tag.tag)||!Object.entries(o.tag.props).find(([i,a])=>i.startsWith("on")&&typeof a=="function"))return;const{props:t,eventHandlers:r,delayedSrc:n}=e("dom",o.tag);Object.keys(r).length&&(o.tag.props=t,o.tag._eventHandlers=r,o.tag._delayedSrc=n)},"dom:renderTag":function(o){const t=o.$el;if(!o.tag._eventHandlers||!t)return;const r=o.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(o.tag._eventHandlers).forEach(([n,i])=>{const a=`${o.tag._d||o.tag._p}:${n}`,l=n.slice(2).toLowerCase(),s=`data-h-${l}`;if(o.markSideEffect(a,()=>{}),t.hasAttribute(s))return;const c=i;t.setAttribute(s,""),r.addEventListener(l,c),o.entry&&(o.entry._sde[a]=()=>{r.removeEventListener(l,c),t.removeAttribute(s)})}),o.tag._delayedSrc&&t.setAttribute("src",o.tag._delayedSrc)}}}}const Pk=["templateParams","htmlAttrs","bodyAttrs"];function Ck(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const t=hh(e)||(e.key?`${e.tag}:${e.key}`:!1);t&&(e._d=t)},"tags:resolve":function(e){const o={};e.tags.forEach(r=>{const n=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=o[n];if(i){let l=r==null?void 0:r.tagDuplicateStrategy;if(!l&&Pk.includes(r.tag)&&(l="merge"),l==="merge"){const s=i.props;["class","style"].forEach(c=>{r.props[c]&&s[c]&&(c==="style"&&!s[c].endsWith(";")&&(s[c]+=";"),r.props[c]=`${s[c]} ${r.props[c]}`)}),o[n].props={...s,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}}const a=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(uh.includes(r.tag)&&a===0){delete o[n];return}o[n]=r});const t=[];Object.values(o).forEach(r=>{const n=r._duped;delete r._duped,t.push(r),n&&t.push(...n)}),e.tags=t}}}}function Ni(e,o){function t(i){if(["s","pageTitle"].includes(i))return o.pageTitle;let a;return i.includes(".")?a=i.split(".").reduce((l,s)=>l&&l[s]||void 0,o):a=o[i],typeof a<"u"?a||"":!1}let r=e;try{r=decodeURI(e)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const a=t(i.slice(1));typeof a=="string"&&(e=e.replaceAll(new RegExp(`\\${i}(\\W|$)`,"g"),`${a}$1`).trim())}),o.separator&&(e.endsWith(o.separator)&&(e=e.slice(0,-o.separator.length).trim()),e.startsWith(o.separator)&&(e=e.slice(o.separator.length).trim()),e=e.replace(new RegExp(`\\${o.separator}\\s*\\${o.separator}`,"g"),o.separator)),e}function Fk(){return{hooks:{"tags:resolve":e=>{var i;const{tags:o}=e,t=(i=o.find(a=>a.tag==="title"))==null?void 0:i.textContent,r=o.findIndex(a=>a.tag==="templateParams"),n=r!==-1?o[r].props:{};n.pageTitle=n.pageTitle||t||"";for(const a of o)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=Ni(a.textContent,n);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=Ni(a.props.content,n);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=Ni(a.props.href,n);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(l,s)=>typeof s=="string"?Ni(s,n):s)}catch{}e.tags=o.filter(a=>a.tag!=="templateParams")}}}}const $k=typeof window<"u";let mh;function Ik(e){return mh=e}function Nk(){return mh}async function Rk(e,o){const t={tag:e,props:{}};return e==="templateParams"?(t.props=o,t):["title","titleTemplate"].includes(e)?(t.textContent=o instanceof Promise?await o:o,t):typeof o=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(o)||o.startsWith("/"))?t.props.src=o:t.innerHTML=o,t):!1:(t.props=await Mk(e,{...o}),t.props.children&&(t.props.innerHTML=t.props.children),delete t.props.children,Object.keys(t.props).filter(r=>wk.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||fh.includes(t.tag))&&(t[r]=t.props[r]),delete t.props[r]}),["innerHTML","textContent"].forEach(r=>{if(t.tag==="script"&&typeof t[r]=="string"&&["application/ld+json","application/json"].includes(t.props.type))try{t[r]=JSON.parse(t[r])}catch{t[r]=""}typeof t[r]=="object"&&(t[r]=JSON.stringify(t[r]))}),t.props.class&&(t.props.class=jk(t.props.class)),t.props.content&&Array.isArray(t.props.content)?t.props.content.map(r=>({...t,props:{...t.props,content:r}})):t)}function jk(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(o=>e[o])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(o=>o.trim()).filter(Boolean).join(" ")}async function Mk(e,o){for(const t of Object.keys(o)){const r=t.startsWith("data-");o[t]instanceof Promise&&(o[t]=await o[t]),String(o[t])==="true"?o[t]=r?"true":"":String(o[t])==="false"&&(r?o[t]="false":delete o[t])}return o}const Dk=10;async function Kk(e){const o=[];return Object.entries(e.resolvedInput).filter(([t,r])=>typeof r<"u"&&vk.includes(t)).forEach(([t,r])=>{const n=mk(r);o.push(...n.map(i=>Rk(t,i)).flat())}),(await Promise.all(o)).flat().filter(Boolean).map((t,r)=>(t._e=e._i,t._p=(e._i<<Dk)+r,t))}function Bk(){return[Ck(),Sk(),Fk(),zk(),Tk(),Ak(),Lk()]}function Uk(e={}){return[xk({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function Hk(e={}){const o=qk({...e,plugins:[...Uk(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&o.resolvedOptions.document&&(o._hash=_k(o.resolvedOptions.document)),Ik(o),o}function qk(e={}){let o=[],t={},r=0;const n=gk();e!=null&&e.hooks&&n.addHooks(e.hooks),e.plugins=[...Bk(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(l=>l.hooks&&n.addHooks(l.hooks)),e.document=e.document||($k?document:void 0);const i=()=>n.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return o},get hooks(){return n},use(l){l.hooks&&n.addHooks(l.hooks)},push(l,s){const c={_i:r++,input:l,_sde:{}};return s!=null&&s.mode&&(c._m=s==null?void 0:s.mode),s!=null&&s.transform&&(c._t=s==null?void 0:s.transform),o.push(c),i(),{dispose(){o=o.filter(d=>d._i!==c._i?!0:(t={...t,...d._sde||{}},d._sde={},i(),!1))},patch(d){o=o.map(f=>(f._i===c._i&&(c.input=f.input=d,i()),f))}}},async resolveTags(){const l={tags:[],entries:[...o]};await n.callHook("entries:resolve",l);for(const s of l.entries){const c=s._t||(d=>d);if(s.resolvedInput=c(s.resolvedInput||s.input),s.resolvedInput)for(const d of await Kk(s)){const f={tag:d,entry:s,resolvedOptions:a.resolvedOptions};await n.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await n.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...t};return t={},l},_elMap:{}};return a.hooks.callHook("init",a),a}function Vk(e){return typeof e=="function"?e():S(e)}function va(e,o=""){if(e instanceof Promise)return e;const t=Vk(e);return!e||!t?t:Array.isArray(t)?t.map(r=>va(r,o)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([r,n])=>r==="titleTemplate"||r.startsWith("on")?[r,S(n)]:[r,va(n,r)])):t}const Wk=ma.startsWith("3"),Gk=typeof window<"u",vh="usehead";function hc(){return xo()&&Y(vh)||Nk()}function Xk(e){return{install(t){Wk&&(t.config.globalProperties.$unhead=e,t.config.globalProperties.$head=e,t.provide(vh,e))}}.install}function Yk(e={}){const o=Hk({...e,domDelayFn:t=>setTimeout(()=>so(()=>t()),10),plugins:[Zk(),...(e==null?void 0:e.plugins)||[]]});return o.install=Xk(o),o}function Zk(){return{hooks:{"entries:resolve":function(e){for(const o of e.entries)o.resolvedInput=va(o.input)}}}}function Jk(e,o={}){const t=hc(),r=H(!1),n=H({});Rr(()=>{n.value=r.value?{}:va(e)});const i=t.push(n.value,o);return we(n,l=>{i.patch(l)}),xo()&&(mi(()=>{i.dispose()}),Ip(()=>{r.value=!0}),$p(()=>{r.value=!1})),i}function Qk(e,o={}){return hc().push(e,o)}function kh(e,o={}){var r;const t=hc();if(t){const n=Gk||!!((r=t.resolvedOptions)!=null&&r.document);return o.mode==="server"&&n||o.mode==="client"&&!n?void 0:n?Jk(e,o):Qk(e,o)}}function ew(e,o){const t=Yk(o||{}),r={unhead:t,install(n){ma.startsWith("3")&&(n.config.globalProperties.$head=t,n.provide("usehead",t))},use(n){t.use(n)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(n,i){return t.push(n,i)},addEntry(n,i){return t.push(n,i)},addHeadObjs(n,i){return t.push(n,i)},addReactiveEntry(n,i){const a=kh(n,i);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(n,i){i?bh(t,{document:n}):gh(t,{delayFn:a=>setTimeout(()=>a(),50),document:n})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=r.addHeadObjs,t.updateDOM=r.updateDOM,t.hooks.hook("dom:beforeRender",n=>{for(const i of r.hooks["before:dom"])i()===!1&&(n.shouldRender=!1)}),e&&r.addHeadObjs(e),r}const Rn=Symbol("v-click-clicks"),kr=Symbol("v-click-clicks-elements"),as=Symbol("v-click-clicks-order-map"),jn=Symbol("v-click-clicks-disabled"),wh=Symbol("slidev-slide-scale"),ne=Symbol("slidev-slidev-context"),ow=Symbol("slidev-route"),tw=Symbol("slidev-slide-context"),gr="slidev-vclick-target",vl="slidev-vclick-hidden",rw="slidev-vclick-fade",kl="slidev-vclick-hidden-explicitly",kn="slidev-vclick-current",Ri="slidev-vclick-prior",nw=["localhost","127.0.0.1"];let iw=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((o,t)=>(t&=63,t<36?o+=t.toString(36):t<62?o+=(t-26).toString(36).toUpperCase():t>62?o+="-":o+="_",o),"");function yh(e){return e=e??[],Array.isArray(e)?e:[e]}function ls(e,o){if(!e)return!1;const t=e.indexOf(o);return t>=0?(e.splice(t,1),!0):!1}function aw(...e){let o,t,r;e.length===1?(o=0,r=1,[t]=e):[o,t,r=1]=e;const n=[];let i=o;for(;i<t;)n.push(i),i+=r||1;return n}function lw(e){return e!=null}function sw(e,o){return Object.fromEntries(Object.entries(e).map(([t,r])=>o(t,r)).filter(lw))}const Cn={theme:"./theme",title:"Komponenten-Bibliothek für die Barrierefreiheit | KoliBri",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:[],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"fade"},Pe=Cn,Xt=Pe.aspectRatio??16/9,Yt=Pe.canvasWidth??980,bc=Math.ceil(Yt/Xt),gc=P(()=>sw(Pe.themeConfig||{},(e,o)=>[`--slidev-theme-${e}`,o]));function xh(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function qo(e,o,t){Object.defineProperty(e,o,{value:t,writable:!0,enumerable:!1})}const jr=Ke({page:0,clicks:0});let cw=[],dw=[];qo(jr,"$syncUp",!0);qo(jr,"$syncDown",!0);qo(jr,"$paused",!1);qo(jr,"$onSet",e=>cw.push(e));qo(jr,"$onPatch",e=>dw.push(e));xh();qo(jr,"$patch",async()=>!1);function _h(e,o,t=!1){const r=[];let n=!1,i=!1,a,l;const s=Ke(o);function c(h){r.push(h)}function d(h,b){s[h]!==b&&(clearTimeout(a),n=!0,s[h]=b,a=setTimeout(()=>n=!1,0))}function f(h){n||(clearTimeout(l),i=!0,Object.entries(h).forEach(([b,g])=>{s[b]=g}),l=setTimeout(()=>i=!1,0))}function u(h){let b;t?t&&window.addEventListener("storage",m=>{m&&m.key===h&&m.newValue&&f(JSON.parse(m.newValue))}):(b=new BroadcastChannel(h),b.addEventListener("message",m=>f(m.data)));function g(){!t&&b&&!i?b.postMessage(he(s)):t&&!i&&window.localStorage.setItem(h,JSON.stringify(s)),n||r.forEach(m=>m(s))}if(we(s,g,{deep:!0,flush:"sync"}),t){const m=window.localStorage.getItem(h);m&&f(JSON.parse(m))}}return{init:u,onPatch:c,patch:d,state:s}}const{init:fw,onPatch:uw,patch:wn,state:wl}=_h(jr,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Mr=Ke({});let pw=[],hw=[];qo(Mr,"$syncUp",!0);qo(Mr,"$syncDown",!0);qo(Mr,"$paused",!1);qo(Mr,"$onSet",e=>pw.push(e));qo(Mr,"$onPatch",e=>hw.push(e));xh();qo(Mr,"$patch",async()=>!1);const{init:bw,onPatch:gw,patch:Oh,state:ka}=_h(Mr,{},!1),mw="modulepreload",vw=function(e){return"/presentation/"+e},Fd={},Zt=function(o,t,r){if(!t||t.length===0)return o();const n=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=vw(i),i in Fd)return;Fd[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=n.length-1;d>=0;d--){const f=n[d];if(f.href===i&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":mw,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>o())};function kw(e,o){let t,r,n;const i=H(!0),a=()=>{i.value=!0,n()};we(e,a,{flush:"sync"});const l=typeof o=="function"?o:o.get,s=typeof o=="function"?void 0:o.set,c=rc((d,f)=>(r=d,n=f,{get(){return i.value&&(t=l(),i.value=!1),r(),t},set(u){s==null||s(u)}}));return Object.isExtensible(c)&&(c.trigger=a),c}function Ft(e){return $a()?(Ys(e),!0):!1}function eo(e){return typeof e=="function"?e():S(e)}function ww(e){if(!Fe(e))return Ke(e);const o=new Proxy({},{get(t,r,n){return S(Reflect.get(e.value,r,n))},set(t,r,n){return Fe(e.value[r])&&!Fe(n)?e.value[r].value=n:e.value[r]=n,!0},deleteProperty(t,r){return Reflect.deleteProperty(e.value,r)},has(t,r){return Reflect.has(e.value,r)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ke(o)}const rt=typeof window<"u",yw=e=>typeof e<"u",ss=()=>+Date.now(),Xa=()=>{},xw=_w();function _w(){var e;return rt&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Ow(e,o){function t(...r){return new Promise((n,i)=>{Promise.resolve(e(()=>o.apply(this,r),{fn:o,thisArg:this,args:r})).then(n).catch(i)})}return t}const Sh=e=>e();function Sw(e=Sh){const o=H(!0);function t(){o.value=!1}function r(){o.value=!0}const n=(...i)=>{o.value&&e(...i)};return{isActive:Jo(o),pause:t,resume:r,eventFilter:n}}function zw(e,o){var t;if(typeof e=="number")return e+o;const r=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",n=e.slice(r.length),i=parseFloat(r)+o;return Number.isNaN(i)?e:i+n}function zh(...e){if(e.length!==1)return bp(...e);const o=e[0];return typeof o=="function"?Jo(rc(()=>({get:o,set:Xa}))):H(o)}var Lw=Object.defineProperty,Ew=Object.defineProperties,Tw=Object.getOwnPropertyDescriptors,$d=Object.getOwnPropertySymbols,Aw=Object.prototype.hasOwnProperty,Pw=Object.prototype.propertyIsEnumerable,Id=(e,o,t)=>o in e?Lw(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Cw=(e,o)=>{for(var t in o||(o={}))Aw.call(o,t)&&Id(e,t,o[t]);if($d)for(var t of $d(o))Pw.call(o,t)&&Id(e,t,o[t]);return e},Fw=(e,o)=>Ew(e,Tw(o));function $w(e){if(!Fe(e))return Km(e);const o=Array.isArray(e.value)?new Array(e.value.length):{};for(const t in e.value)o[t]=rc(()=>({get(){return e.value[t]},set(r){if(Array.isArray(e.value)){const n=[...e.value];n[t]=r,e.value=n}else{const n=Fw(Cw({},e.value),{[t]:r});Object.setPrototypeOf(n,e.value),e.value=n}}}));return o}function Lh(e,o=!0){xo()?vt(e):o?e():so(e)}function Iw(e,o=1e3,t={}){const{immediate:r=!0,immediateCallback:n=!1}=t;let i=null;const a=H(!1);function l(){i&&(clearInterval(i),i=null)}function s(){a.value=!1,l()}function c(){const d=eo(o);d<=0||(a.value=!0,n&&e(),l(),i=setInterval(e,d))}if(r&&rt&&c(),Fe(o)||typeof o=="function"){const d=we(o,()=>{a.value&&rt&&c()});Ft(d)}return Ft(s),{isActive:a,pause:s,resume:c}}function Nw(e,o,t={}){const{immediate:r=!0}=t,n=H(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function l(){n.value=!1,a()}function s(...c){a(),n.value=!0,i=setTimeout(()=>{n.value=!1,i=null,e(...c)},eo(o))}return r&&(n.value=!0,rt&&s()),Ft(l),{isPending:Jo(n),start:s,stop:l}}function Eh(e=!1,o={}){const{truthyValue:t=!0,falsyValue:r=!1}=o,n=Fe(e),i=H(e);function a(l){if(arguments.length)return i.value=l,i.value;{const s=eo(t);return i.value=i.value===s?eo(r):s,i.value}}return n?a:[i,a]}var Nd=Object.getOwnPropertySymbols,Rw=Object.prototype.hasOwnProperty,jw=Object.prototype.propertyIsEnumerable,Mw=(e,o)=>{var t={};for(var r in e)Rw.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Nd)for(var r of Nd(e))o.indexOf(r)<0&&jw.call(e,r)&&(t[r]=e[r]);return t};function Dw(e,o,t={}){const r=t,{eventFilter:n=Sh}=r,i=Mw(r,["eventFilter"]);return we(e,Ow(n,o),i)}var Kw=Object.defineProperty,Bw=Object.defineProperties,Uw=Object.getOwnPropertyDescriptors,wa=Object.getOwnPropertySymbols,Th=Object.prototype.hasOwnProperty,Ah=Object.prototype.propertyIsEnumerable,Rd=(e,o,t)=>o in e?Kw(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Hw=(e,o)=>{for(var t in o||(o={}))Th.call(o,t)&&Rd(e,t,o[t]);if(wa)for(var t of wa(o))Ah.call(o,t)&&Rd(e,t,o[t]);return e},qw=(e,o)=>Bw(e,Uw(o)),Vw=(e,o)=>{var t={};for(var r in e)Th.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&wa)for(var r of wa(e))o.indexOf(r)<0&&Ah.call(e,r)&&(t[r]=e[r]);return t};function Ww(e,o,t={}){const r=t,{eventFilter:n}=r,i=Vw(r,["eventFilter"]),{eventFilter:a,pause:l,resume:s,isActive:c}=Sw(n);return{stop:Dw(e,o,qw(Hw({},i),{eventFilter:a})),pause:l,resume:s,isActive:c}}function Ko(e){var o;const t=eo(e);return(o=t==null?void 0:t.$el)!=null?o:t}const co=rt?window:void 0,Ph=rt?window.document:void 0,Gw=rt?window.navigator:void 0;function Ne(...e){let o,t,r,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,n]=e,o=co):[o,t,r,n]=e,!o)return Xa;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const i=[],a=()=>{i.forEach(d=>d()),i.length=0},l=(d,f,u,h)=>(d.addEventListener(f,u,h),()=>d.removeEventListener(f,u,h)),s=we(()=>[Ko(o),eo(n)],([d,f])=>{a(),d&&i.push(...t.flatMap(u=>r.map(h=>l(d,u,h,f))))},{immediate:!0,flush:"post"}),c=()=>{s(),a()};return Ft(c),c}let jd=!1;function Xw(e,o,t={}){const{window:r=co,ignore:n=[],capture:i=!0,detectIframe:a=!1}=t;if(!r)return;xw&&!jd&&(jd=!0,Array.from(r.document.body.children).forEach(u=>u.addEventListener("click",Xa)));let l=!0;const s=u=>n.some(h=>{if(typeof h=="string")return Array.from(r.document.querySelectorAll(h)).some(b=>b===u.target||u.composedPath().includes(b));{const b=Ko(h);return b&&(u.target===b||u.composedPath().includes(b))}}),d=[Ne(r,"click",u=>{const h=Ko(e);if(!(!h||h===u.target||u.composedPath().includes(h))){if(u.detail===0&&(l=!s(u)),!l){l=!0;return}o(u)}},{passive:!0,capture:i}),Ne(r,"pointerdown",u=>{const h=Ko(e);h&&(l=!u.composedPath().includes(h)&&!s(u))},{passive:!0}),a&&Ne(r,"blur",u=>{var h;const b=Ko(e);((h=r.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(b!=null&&b.contains(r.document.activeElement))&&o(u)})].filter(Boolean);return()=>d.forEach(u=>u())}function Yw(e){return typeof e=="function"?e:typeof e=="string"?o=>o.key===e:Array.isArray(e)?o=>e.includes(o.key):()=>!0}function Zw(...e){let o,t,r={};e.length===3?(o=e[0],t=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(o=!0,t=e[0],r=e[1]):(o=e[0],t=e[1]):(o=!0,t=e[0]);const{target:n=co,eventName:i="keydown",passive:a=!1,dedupe:l=!1}=r,s=Yw(o);return Ne(n,i,d=>{d.repeat&&eo(l)||s(d)&&t(d)},a)}function Jw(e={}){var o;const{window:t=co}=e,r=(o=e.document)!=null?o:t==null?void 0:t.document,n=kw(()=>null,()=>r==null?void 0:r.activeElement);return t&&(Ne(t,"blur",i=>{i.relatedTarget===null&&n.trigger()},!0),Ne(t,"focus",n.trigger,!0)),n}function Qw(){const e=H(!1);return xo()&&vt(()=>{e.value=!0}),e}function Ya(e){const o=Qw();return P(()=>(o.value,!!e()))}function ey(e,o={}){const{immediate:t=!0,window:r=co}=o,n=H(!1);let i=0,a=null;function l(d){if(!n.value||!r)return;const f=d-i;e({delta:f,timestamp:d}),i=d,a=r.requestAnimationFrame(l)}function s(){!n.value&&r&&(n.value=!0,a=r.requestAnimationFrame(l))}function c(){n.value=!1,a!=null&&r&&(r.cancelAnimationFrame(a),a=null)}return t&&s(),Ft(c),{isActive:Jo(n),pause:c,resume:s}}function wr(e,o={}){const{window:t=co}=o,r=Ya(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let n;const i=H(!1),a=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",l):n.removeListener(l))},l=()=>{r.value&&(a(),n=t.matchMedia(zh(e).value),i.value=!!(n!=null&&n.matches),n&&("addEventListener"in n?n.addEventListener("change",l):n.addListener(l)))};return Rr(l),Ft(()=>a()),i}const oy={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function ty(e,o={}){function t(l,s){let c=e[l];return s!=null&&(c=zw(c,s)),typeof c=="number"&&(c=`${c}px`),c}const{window:r=co}=o;function n(l){return r?r.matchMedia(l).matches:!1}const i=l=>wr(`(min-width: ${t(l)})`,o),a=Object.keys(e).reduce((l,s)=>(Object.defineProperty(l,s,{get:()=>i(s),enumerable:!0,configurable:!0}),l),{});return Object.assign(a,{greater(l){return wr(`(min-width: ${t(l,.1)})`,o)},greaterOrEqual:i,smaller(l){return wr(`(max-width: ${t(l,-.1)})`,o)},smallerOrEqual(l){return wr(`(max-width: ${t(l)})`,o)},between(l,s){return wr(`(min-width: ${t(l)}) and (max-width: ${t(s,-.1)})`,o)},isGreater(l){return n(`(min-width: ${t(l,.1)})`)},isGreaterOrEqual(l){return n(`(min-width: ${t(l)})`)},isSmaller(l){return n(`(max-width: ${t(l,-.1)})`)},isSmallerOrEqual(l){return n(`(max-width: ${t(l)})`)},isInBetween(l,s){return n(`(min-width: ${t(l)}) and (max-width: ${t(s,-.1)})`)},current(){const l=Object.keys(e).map(s=>[s,i(s)]);return P(()=>l.filter(([,s])=>s.value).map(([s])=>s))}})}function ry(e={}){const{navigator:o=Gw,read:t=!1,source:r,copiedDuring:n=1500,legacy:i=!1}=e,a=["copy","cut"],l=Ya(()=>o&&"clipboard"in o),s=P(()=>l.value||i),c=H(""),d=H(!1),f=Nw(()=>d.value=!1,n);function u(){l.value?o.clipboard.readText().then(m=>{c.value=m}):c.value=g()}if(s.value&&t)for(const m of a)Ne(m,u);async function h(m=eo(r)){s.value&&m!=null&&(l.value?await o.clipboard.writeText(m):b(m),c.value=m,d.value=!0,f.start())}function b(m){const k=document.createElement("textarea");k.value=m??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function g(){var m,k,w;return(w=(k=(m=document==null?void 0:document.getSelection)==null?void 0:m.call(document))==null?void 0:k.toString())!=null?w:""}return{isSupported:s,text:c,copied:d,copy:h}}function ny(e){return JSON.parse(JSON.stringify(e))}const ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mi="__vueuse_ssr_handlers__",iy=ay();function ay(){return Mi in ji||(ji[Mi]=ji[Mi]||{}),ji[Mi]}function ly(e,o){return iy[e]||o}function sy(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var cy=Object.defineProperty,Md=Object.getOwnPropertySymbols,dy=Object.prototype.hasOwnProperty,fy=Object.prototype.propertyIsEnumerable,Dd=(e,o,t)=>o in e?cy(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Kd=(e,o)=>{for(var t in o||(o={}))dy.call(o,t)&&Dd(e,t,o[t]);if(Md)for(var t of Md(o))fy.call(o,t)&&Dd(e,t,o[t]);return e};const uy={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Bd="vueuse-storage";function py(e,o,t,r={}){var n;const{flush:i="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:d,window:f=co,eventFilter:u,onError:h=O=>{console.error(O)}}=r,b=(d?bt:H)(o);if(!t)try{t=ly("getDefaultStorage",()=>{var O;return(O=co)==null?void 0:O.localStorage})()}catch(O){h(O)}if(!t)return b;const g=eo(o),m=sy(g),k=(n=r.serializer)!=null?n:uy[m],{pause:w,resume:y}=Ww(b,()=>x(b.value),{flush:i,deep:a,eventFilter:u});return f&&l&&(Ne(f,"storage",$),Ne(f,Bd,L)),$(),b;function x(O){try{if(O==null)t.removeItem(e);else{const T=k.write(O),U=t.getItem(e);U!==T&&(t.setItem(e,T),f&&f.dispatchEvent(new CustomEvent(Bd,{detail:{key:e,oldValue:U,newValue:T,storageArea:t}})))}}catch(T){h(T)}}function z(O){const T=O?O.newValue:t.getItem(e);if(T==null)return s&&g!==null&&t.setItem(e,k.write(g)),g;if(!O&&c){const U=k.read(T);return typeof c=="function"?c(U,g):m==="object"&&!Array.isArray(U)?Kd(Kd({},g),U):U}else return typeof T!="string"?T:k.read(T)}function L(O){$(O.detail)}function $(O){if(!(O&&O.storageArea!==t)){if(O&&O.key==null){b.value=g;return}if(!(O&&O.key!==e)){w();try{b.value=z(O)}catch(T){h(T)}finally{O?so(y):y()}}}}}function hy(e){return wr("(prefers-color-scheme: dark)",e)}var by=Object.defineProperty,gy=Object.defineProperties,my=Object.getOwnPropertyDescriptors,Ud=Object.getOwnPropertySymbols,vy=Object.prototype.hasOwnProperty,ky=Object.prototype.propertyIsEnumerable,Hd=(e,o,t)=>o in e?by(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,wy=(e,o)=>{for(var t in o||(o={}))vy.call(o,t)&&Hd(e,t,o[t]);if(Ud)for(var t of Ud(o))ky.call(o,t)&&Hd(e,t,o[t]);return e},yy=(e,o)=>gy(e,my(o));function QT(e,o={}){var t,r;const{pointerTypes:n,preventDefault:i,stopPropagation:a,exact:l,onMove:s,onEnd:c,onStart:d,initialValue:f,axis:u="both",draggingElement:h=co,handle:b=e}=o,g=H((t=eo(f))!=null?t:{x:0,y:0}),m=H(),k=L=>n?n.includes(L.pointerType):!0,w=L=>{eo(i)&&L.preventDefault(),eo(a)&&L.stopPropagation()},y=L=>{if(!k(L)||eo(l)&&L.target!==eo(e))return;const $=eo(e).getBoundingClientRect(),O={x:L.clientX-$.left,y:L.clientY-$.top};(d==null?void 0:d(O,L))!==!1&&(m.value=O,w(L))},x=L=>{if(!k(L)||!m.value)return;let{x:$,y:O}=g.value;(u==="x"||u==="both")&&($=L.clientX-m.value.x),(u==="y"||u==="both")&&(O=L.clientY-m.value.y),g.value={x:$,y:O},s==null||s(g.value,L),w(L)},z=L=>{k(L)&&m.value&&(m.value=void 0,c==null||c(g.value,L),w(L))};if(rt){const L={capture:(r=o.capture)!=null?r:!0};Ne(b,"pointerdown",y,L),Ne(h,"pointermove",x,L),Ne(h,"pointerup",z,L)}return yy(wy({},$w(g)),{position:g,isDragging:P(()=>!!m.value),style:P(()=>`left:${g.value.x}px;top:${g.value.y}px;`)})}var qd=Object.getOwnPropertySymbols,xy=Object.prototype.hasOwnProperty,_y=Object.prototype.propertyIsEnumerable,Oy=(e,o)=>{var t={};for(var r in e)xy.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&qd)for(var r of qd(e))o.indexOf(r)<0&&_y.call(e,r)&&(t[r]=e[r]);return t};function Sy(e,o,t={}){const r=t,{window:n=co}=r,i=Oy(r,["window"]);let a;const l=Ya(()=>n&&"ResizeObserver"in n),s=()=>{a&&(a.disconnect(),a=void 0)},c=P(()=>Array.isArray(e)?e.map(u=>Ko(u)):[Ko(e)]),d=we(c,u=>{if(s(),l.value&&n){a=new ResizeObserver(o);for(const h of u)h&&a.observe(h,i)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{s(),d()};return Ft(f),{isSupported:l,stop:f}}function zy(e,o={width:0,height:0},t={}){const{window:r=co,box:n="content-box"}=t,i=P(()=>{var s,c;return(c=(s=Ko(e))==null?void 0:s.namespaceURI)==null?void 0:c.includes("svg")}),a=H(o.width),l=H(o.height);return Sy(e,([s])=>{const c=n==="border-box"?s.borderBoxSize:n==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(r&&i.value){const d=Ko(e);if(d){const f=r.getComputedStyle(d);a.value=parseFloat(f.width),l.value=parseFloat(f.height)}}else if(c){const d=Array.isArray(c)?c:[c];a.value=d.reduce((f,{inlineSize:u})=>f+u,0),l.value=d.reduce((f,{blockSize:u})=>f+u,0)}else a.value=s.contentRect.width,l.value=s.contentRect.height},t),we(()=>Ko(e),s=>{a.value=s?o.width:0,l.value=s?o.height:0}),{width:a,height:l}}const Vd=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Ly(e,o={}){const{document:t=Ph,autoExit:r=!1}=o,n=P(()=>{var g;return(g=Ko(e))!=null?g:t==null?void 0:t.querySelector("html")}),i=H(!1),a=P(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(g=>t&&g in t||n.value&&g in n.value)),l=P(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(g=>t&&g in t||n.value&&g in n.value)),s=P(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(g=>t&&g in t||n.value&&g in n.value)),c=Ya(()=>n.value&&t&&a.value!==void 0&&l.value!==void 0&&s.value!==void 0),d=()=>{if(s.value){if(t&&t[s.value]!=null)return t[s.value];{const g=n.value;if((g==null?void 0:g[s.value])!=null)return!!g[s.value]}}return!1};async function f(){if(c.value){if(l.value)if((t==null?void 0:t[l.value])!=null)await t[l.value]();else{const g=n.value;(g==null?void 0:g[l.value])!=null&&await g[l.value]()}i.value=!1}}async function u(){if(!c.value)return;d()&&await f();const g=n.value;a.value&&(g==null?void 0:g[a.value])!=null&&(await g[a.value](),i.value=!0)}async function h(){await(i.value?f():u())}const b=()=>{i.value=d()};return Ne(t,Vd,b,!1),Ne(()=>Ko(n),Vd,b,!1),r&&Ft(f),{isSupported:c,isFullscreen:i,enter:u,exit:f,toggle:h}}function nt(e,o,t={}){const{window:r=co}=t;return py(e,o,r==null?void 0:r.localStorage,t)}const Ey={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Ty(e={}){const{reactive:o=!1,target:t=co,aliasMap:r=Ey,passive:n=!0,onEventFired:i=Xa}=e,a=Ke(new Set),l={toJSON(){return{}},current:a},s=o?Ke(l):l,c=new Set,d=new Set;function f(g,m){g in s&&(o?s[g]=m:s[g].value=m)}function u(){a.clear();for(const g of d)f(g,!1)}function h(g,m){var k,w;const y=(k=g.key)==null?void 0:k.toLowerCase(),z=[(w=g.code)==null?void 0:w.toLowerCase(),y].filter(Boolean);y&&(m?a.add(y):a.delete(y));for(const L of z)d.add(L),f(L,m);y==="meta"&&!m?(c.forEach(L=>{a.delete(L),f(L,!1)}),c.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&m&&[...a,...z].forEach(L=>c.add(L))}Ne(t,"keydown",g=>(h(g,!0),i(g)),{passive:n}),Ne(t,"keyup",g=>(h(g,!1),i(g)),{passive:n}),Ne("blur",u,{passive:!0}),Ne("focus",u,{passive:!0});const b=new Proxy(s,{get(g,m,k){if(typeof m!="string")return Reflect.get(g,m,k);if(m=m.toLowerCase(),m in r&&(m=r[m]),!(m in s))if(/[+_-]/.test(m)){const y=m.split(/[+_-]/g).map(x=>x.trim());s[m]=P(()=>y.every(x=>eo(b[x])))}else s[m]=H(!1);const w=Reflect.get(g,m,k);return o?eo(w):w}});return b}function e9(e={}){const{type:o="page",touch:t=!0,resetOnTouchEnds:r=!1,initialValue:n={x:0,y:0},window:i=co,eventFilter:a}=e,l=H(n.x),s=H(n.y),c=H(null),d=g=>{o==="page"?(l.value=g.pageX,s.value=g.pageY):o==="client"?(l.value=g.clientX,s.value=g.clientY):o==="screen"?(l.value=g.screenX,s.value=g.screenY):o==="movement"&&(l.value=g.movementX,s.value=g.movementY),c.value="mouse"},f=()=>{l.value=n.x,s.value=n.y},u=g=>{if(g.touches.length>0){const m=g.touches[0];o==="page"?(l.value=m.pageX,s.value=m.pageY):o==="client"?(l.value=m.clientX,s.value=m.clientY):o==="screen"&&(l.value=m.screenX,s.value=m.screenY),c.value="touch"}},h=g=>a===void 0?d(g):a(()=>d(g),{}),b=g=>a===void 0?u(g):a(()=>u(g),{});return i&&(Ne(i,"mousemove",h,{passive:!0}),Ne(i,"dragover",h,{passive:!0}),t&&o!=="movement"&&(Ne(i,"touchstart",b,{passive:!0}),Ne(i,"touchmove",b,{passive:!0}),r&&Ne(i,"touchend",f,{passive:!0}))),{x:l,y:s,sourceType:c}}function Ay(e,o={}){const t=zh(e),{threshold:r=50,onSwipe:n,onSwipeEnd:i,onSwipeStart:a}=o,l=Ke({x:0,y:0}),s=(L,$)=>{l.x=L,l.y=$},c=Ke({x:0,y:0}),d=(L,$)=>{c.x=L,c.y=$},f=P(()=>l.x-c.x),u=P(()=>l.y-c.y),{max:h,abs:b}=Math,g=P(()=>h(b(f.value),b(u.value))>=r),m=H(!1),k=H(!1),w=P(()=>g.value?b(f.value)>b(u.value)?f.value>0?"left":"right":u.value>0?"up":"down":"none"),y=L=>{var $,O,T;const U=L.buttons===0,Z=L.buttons===1;return(T=(O=($=o.pointerTypes)==null?void 0:$.includes(L.pointerType))!=null?O:U||Z)!=null?T:!0},x=[Ne(e,"pointerdown",L=>{var $,O;if(!y(L))return;k.value=!0,(O=($=t.value)==null?void 0:$.style)==null||O.setProperty("touch-action","none");const T=L.target;T==null||T.setPointerCapture(L.pointerId);const{clientX:U,clientY:Z}=L;s(U,Z),d(U,Z),a==null||a(L)}),Ne(e,"pointermove",L=>{if(!y(L)||!k.value)return;const{clientX:$,clientY:O}=L;d($,O),!m.value&&g.value&&(m.value=!0),m.value&&(n==null||n(L))}),Ne(e,"pointerup",L=>{var $,O;y(L)&&(m.value&&(i==null||i(L,w.value)),k.value=!1,m.value=!1,(O=($=t.value)==null?void 0:$.style)==null||O.setProperty("touch-action","initial"))})],z=()=>x.forEach(L=>L());return{isSwiping:Jo(m),direction:Jo(w),posStart:Jo(l),posEnd:Jo(c),distanceX:f,distanceY:u,stop:z}}let Py=0;function o9(e,o={}){const t=H(!1),{document:r=Ph,immediate:n=!0,manual:i=!1,id:a=`vueuse_styletag_${++Py}`}=o,l=H(e);let s=()=>{};const c=()=>{if(!r)return;const f=r.getElementById(a)||r.createElement("style");f.isConnected||(f.type="text/css",f.id=a,o.media&&(f.media=o.media),r.head.appendChild(f)),!t.value&&(s=we(l,u=>{f.textContent=u},{immediate:!0}),t.value=!0)},d=()=>{!r||!t.value||(s(),r.head.removeChild(r.getElementById(a)),t.value=!1)};return n&&!i&&Lh(c),i||Ft(d),{id:a,css:l,unload:d,load:c,isLoaded:Jo(t)}}var Cy=Object.defineProperty,Wd=Object.getOwnPropertySymbols,Fy=Object.prototype.hasOwnProperty,$y=Object.prototype.propertyIsEnumerable,Gd=(e,o,t)=>o in e?Cy(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Iy=(e,o)=>{for(var t in o||(o={}))Fy.call(o,t)&&Gd(e,t,o[t]);if(Wd)for(var t of Wd(o))$y.call(o,t)&&Gd(e,t,o[t]);return e};function t9(e={}){const{controls:o=!1,offset:t=0,immediate:r=!0,interval:n="requestAnimationFrame",callback:i}=e,a=H(ss()+t),l=()=>a.value=ss()+t,s=i?()=>{l(),i(a.value)}:l,c=n==="requestAnimationFrame"?ey(s,{immediate:r}):Iw(s,n,{immediate:r});return o?Iy({timestamp:a},c):a}function dt(e,o,t,r={}){var n,i,a;const{clone:l=!1,passive:s=!1,eventName:c,deep:d=!1,defaultValue:f,shouldEmit:u}=r,h=xo(),b=t||(h==null?void 0:h.emit)||((n=h==null?void 0:h.$emit)==null?void 0:n.bind(h))||((a=(i=h==null?void 0:h.proxy)==null?void 0:i.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let g=c;o||(o="modelValue"),g=c||g||`update:${o.toString()}`;const m=y=>l?typeof l=="function"?l(y):ny(y):y,k=()=>yw(e[o])?m(e[o]):f,w=y=>{u?u(y)&&b(g,y):b(g,y)};if(s){const y=k(),x=H(y);return we(()=>e[o],z=>x.value=m(z)),we(x,z=>{(z!==e[o]||d)&&w(z)},{deep:d}),x}else return P({get(){return k()},set(y){w(y)}})}function r9({window:e=co}={}){if(!e)return H(!1);const o=H(e.document.hasFocus());return Ne(e,"blur",()=>{o.value=!1}),Ne(e,"focus",()=>{o.value=!0}),o}function Ny(e={}){const{window:o=co,initialWidth:t=1/0,initialHeight:r=1/0,listenOrientation:n=!0,includeScrollbar:i=!0}=e,a=H(t),l=H(r),s=()=>{o&&(i?(a.value=o.innerWidth,l.value=o.innerHeight):(a.value=o.document.documentElement.clientWidth,l.value=o.document.documentElement.clientHeight))};if(s(),Lh(s),Ne("resize",s,{passive:!0}),n){const c=wr("(orientation: portrait)");we(c,()=>s())}return{width:a,height:l}}function Ry(){return Ch().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ch(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const jy=typeof Proxy=="function",My="devtools-plugin:setup",Dy="plugin:settings:set";let Br,cs;function Ky(){var e;return Br!==void 0||(typeof window<"u"&&window.performance?(Br=!0,cs=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Br=!0,cs=global.perf_hooks.performance):Br=!1),Br}function By(){return Ky()?cs.now():Date.now()}class Uy{constructor(o,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=o,this.hook=t;const r={};if(o.settings)for(const a in o.settings){const l=o.settings[a];r[a]=l.defaultValue}const n=`__vue-devtools-plugin-settings__${o.id}`;let i=Object.assign({},r);try{const a=localStorage.getItem(n),l=JSON.parse(a);Object.assign(i,l)}catch{}this.fallbacks={getSettings(){return i},setSettings(a){try{localStorage.setItem(n,JSON.stringify(a))}catch{}i=a},now(){return By()}},t&&t.on(Dy,(a,l)=>{a===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(a,l)=>this.target?this.target.on[l]:(...s)=>{this.onQueue.push({method:l,args:s})}}),this.proxiedTarget=new Proxy({},{get:(a,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...s)=>(this.targetQueue.push({method:l,args:s,resolve:()=>{}}),this.fallbacks[l](...s)):(...s)=>new Promise(c=>{this.targetQueue.push({method:l,args:s,resolve:c})})})}async setRealTarget(o){this.target=o;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function Hy(e,o){const t=e,r=Ch(),n=Ry(),i=jy&&t.enableEarlyProxy;if(n&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))n.emit(My,e,o);else{const a=i?new Uy(t,n):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:o,proxy:a}),a&&o(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Et=typeof window<"u";function qy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function yl(e,o){const t={};for(const r in o){const n=o[r];t[r]=$o(n)?n.map(e):e(n)}return t}const Mn=()=>{},$o=Array.isArray;function Ae(e){const o=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(o))}const Vy=/\/$/,Wy=e=>e.replace(Vy,"");function xl(e,o,t="/"){let r,n={},i="",a="";const l=o.indexOf("#");let s=o.indexOf("?");return l<s&&l>=0&&(s=-1),s>-1&&(r=o.slice(0,s),i=o.slice(s+1,l>-1?l:o.length),n=e(i)),l>-1&&(r=r||o.slice(0,l),a=o.slice(l,o.length)),r=Yy(r??o,t),{fullPath:r+(i&&"?")+i+a,path:r,query:n,hash:a}}function Gy(e,o){const t=o.query?e(o.query):"";return o.path+(t&&"?")+t+(o.hash||"")}function Xd(e,o){return!o||!e.toLowerCase().startsWith(o.toLowerCase())?e:e.slice(o.length)||"/"}function Yd(e,o,t){const r=o.matched.length-1,n=t.matched.length-1;return r>-1&&r===n&&nr(o.matched[r],t.matched[n])&&Fh(o.params,t.params)&&e(o.query)===e(t.query)&&o.hash===t.hash}function nr(e,o){return(e.aliasOf||e)===(o.aliasOf||o)}function Fh(e,o){if(Object.keys(e).length!==Object.keys(o).length)return!1;for(const t in e)if(!Xy(e[t],o[t]))return!1;return!0}function Xy(e,o){return $o(e)?Zd(e,o):$o(o)?Zd(o,e):e===o}function Zd(e,o){return $o(o)?e.length===o.length&&e.every((t,r)=>t===o[r]):e.length===1&&e[0]===o}function Yy(e,o){if(e.startsWith("/"))return e;if(!o.startsWith("/"))return Ae(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${o}". It should look like "/${o}".`),e;if(!e)return o;const t=o.split("/"),r=e.split("/");let n=t.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")n>1&&n--;else break;return t.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ti;(function(e){e.pop="pop",e.push="push"})(ti||(ti={}));var Dn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Dn||(Dn={}));function Zy(e){if(!e)if(Et){const o=document.querySelector("base");e=o&&o.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wy(e)}const Jy=/^[^#]+#/;function Qy(e,o){return e.replace(Jy,"#")+o}function e1(e,o){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:o.behavior,left:r.left-t.left-(o.left||0),top:r.top-t.top-(o.top||0)}}const Za=()=>({left:window.pageXOffset,top:window.pageYOffset});function o1(e){let o;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#");if(typeof e.el=="string"&&(!r||!document.getElementById(e.el.slice(1))))try{const i=document.querySelector(e.el);if(r&&i){Ae(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ae(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const n=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!n){Ae(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}o=e1(n,e)}else o=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(o):window.scrollTo(o.left!=null?o.left:window.pageXOffset,o.top!=null?o.top:window.pageYOffset)}function Jd(e,o){return(history.state?history.state.position-o:-1)+e}const ds=new Map;function t1(e,o){ds.set(e,o)}function r1(e){const o=ds.get(e);return ds.delete(e),o}let n1=()=>location.protocol+"//"+location.host;function $h(e,o){const{pathname:t,search:r,hash:n}=o,i=e.indexOf("#");if(i>-1){let l=n.includes(e.slice(i))?e.slice(i).length:1,s=n.slice(l);return s[0]!=="/"&&(s="/"+s),Xd(s,"")}return Xd(t,e)+r+n}function i1(e,o,t,r){let n=[],i=[],a=null;const l=({state:u})=>{const h=$h(e,location),b=t.value,g=o.value;let m=0;if(u){if(t.value=h,o.value=u,a&&a===b){a=null;return}m=g?u.position-g.position:0}else r(h);n.forEach(k=>{k(t.value,b,{delta:m,type:ti.pop,direction:m?m>0?Dn.forward:Dn.back:Dn.unknown})})};function s(){a=t.value}function c(u){n.push(u);const h=()=>{const b=n.indexOf(u);b>-1&&n.splice(b,1)};return i.push(h),h}function d(){const{history:u}=window;u.state&&u.replaceState($e({},u.state,{scroll:Za()}),"")}function f(){for(const u of i)u();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:s,listen:c,destroy:f}}function Qd(e,o,t,r=!1,n=!1){return{back:e,current:o,forward:t,replaced:r,position:window.history.length,scroll:n?Za():null}}function a1(e){const{history:o,location:t}=window,r={value:$h(e,t)},n={value:o.state};n.value||i(r.value,{back:null,current:r.value,forward:null,position:o.length-1,replaced:!0,scroll:null},!0);function i(s,c,d){const f=e.indexOf("#"),u=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+s:n1()+e+s;try{o[d?"replaceState":"pushState"](c,"",u),n.value=c}catch(h){Ae("Error with push/replace State",h),t[d?"replace":"assign"](u)}}function a(s,c){const d=$e({},o.state,Qd(n.value.back,s,n.value.forward,!0),c,{position:n.value.position});i(s,d,!0),r.value=s}function l(s,c){const d=$e({},n.value,o.state,{forward:s,scroll:Za()});o.state||Ae(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(d.current,d,!0);const f=$e({},Qd(r.value,s,null),{position:d.position+1},c);i(s,f,!1),r.value=s}return{location:r,state:n,push:l,replace:a}}function l1(e){e=Zy(e);const o=a1(e),t=i1(e,o.state,o.location,o.replace);function r(i,a=!0){a||t.pauseListeners(),history.go(i)}const n=$e({location:"",base:e,go:r,createHref:Qy.bind(null,e)},o,t);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>o.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>o.state.value}),n}function s1(e){return typeof e=="string"||e&&typeof e=="object"}function Ih(e){return typeof e=="string"||typeof e=="symbol"}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nh=Symbol("navigation failure");var ef;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ef||(ef={}));const c1={[1]({location:e,currentLocation:o}){return`No match for
 ${JSON.stringify(e)}${o?`
while being at
`+JSON.stringify(o):""}`},[2]({from:e,to:o}){return`Redirected from "${e.fullPath}" to "${f1(o)}" via a navigation guard.`},[4]({from:e,to:o}){return`Navigation aborted from "${e.fullPath}" to "${o.fullPath}" via a navigation guard.`},[8]({from:e,to:o}){return`Navigation cancelled from "${e.fullPath}" to "${o.fullPath}" with a new navigation.`},[16]({from:e,to:o}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function ln(e,o){return $e(new Error(c1[e](o)),{type:e,[Nh]:!0},o)}function yt(e,o){return e instanceof Error&&Nh in e&&(o==null||!!(e.type&o))}const d1=["params","query","hash"];function f1(e){if(typeof e=="string")return e;if("path"in e)return e.path;const o={};for(const t of d1)t in e&&(o[t]=e[t]);return JSON.stringify(o,null,2)}const of="[^/]+?",u1={sensitive:!1,strict:!1,start:!0,end:!0},p1=/[.+*?^${}()[\]/\\]/g;function h1(e,o){const t=$e({},u1,o),r=[];let n=t.start?"^":"";const i=[];for(const c of e){const d=c.length?[]:[90];t.strict&&!c.length&&(n+="/");for(let f=0;f<c.length;f++){const u=c[f];let h=40+(t.sensitive?.25:0);if(u.type===0)f||(n+="/"),n+=u.value.replace(p1,"\\$&"),h+=40;else if(u.type===1){const{value:b,repeatable:g,optional:m,regexp:k}=u;i.push({name:b,repeatable:g,optional:m});const w=k||of;if(w!==of){h+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${w}): `+x.message)}}let y=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),n+=y,h+=20,m&&(h+=-8),g&&(h+=-20),w===".*"&&(h+=-50)}d.push(h)}r.push(d)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(n+="/?"),t.end?n+="$":t.strict&&(n+="(?:/|$)");const a=new RegExp(n,t.sensitive?"":"i");function l(c){const d=c.match(a),f={};if(!d)return null;for(let u=1;u<d.length;u++){const h=d[u]||"",b=i[u-1];f[b.name]=h&&b.repeatable?h.split("/"):h}return f}function s(c){let d="",f=!1;for(const u of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of u)if(h.type===0)d+=h.value;else if(h.type===1){const{value:b,repeatable:g,optional:m}=h,k=b in c?c[b]:"";if($o(k)&&!g)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const w=$o(k)?k.join("/"):k;if(!w)if(m)u.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);d+=w}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:s}}function b1(e,o){let t=0;for(;t<e.length&&t<o.length;){const r=o[t]-e[t];if(r)return r;t++}return e.length<o.length?e.length===1&&e[0]===40+40?-1:1:e.length>o.length?o.length===1&&o[0]===40+40?1:-1:0}function g1(e,o){let t=0;const r=e.score,n=o.score;for(;t<r.length&&t<n.length;){const i=b1(r[t],n[t]);if(i)return i;t++}if(Math.abs(n.length-r.length)===1){if(tf(r))return 1;if(tf(n))return-1}return n.length-r.length}function tf(e){const o=e[e.length-1];return e.length>0&&o[o.length-1]<0}const m1={type:0,value:""},v1=/[a-zA-Z0-9_]/;function k1(e){if(!e)return[[]];if(e==="/")return[[m1]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function o(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,r=t;const n=[];let i;function a(){i&&n.push(i),i=[]}let l=0,s,c="",d="";function f(){c&&(t===0?i.push({type:0,value:c}):t===1||t===2||t===3?(i.length>1&&(s==="*"||s==="+")&&o(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:d,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):o("Invalid state to consume buffer"),c="")}function u(){c+=s}for(;l<e.length;){if(s=e[l++],s==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:s==="/"?(c&&f(),a()):s===":"?(f(),t=1):u();break;case 4:u(),t=r;break;case 1:s==="("?t=2:v1.test(s)?u():(f(),t=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+s:t=3:d+=s;break;case 3:f(),t=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,d="";break;default:o("Unknown state");break}}return t===2&&o(`Unfinished custom RegExp for param "${c}"`),f(),a(),n}function w1(e,o,t){const r=h1(k1(e.path),t);{const i=new Set;for(const a of r.keys)i.has(a.name)&&Ae(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),i.add(a.name)}const n=$e(r,{record:e,parent:o,children:[],alias:[]});return o&&!n.record.aliasOf==!o.record.aliasOf&&o.children.push(n),n}function y1(e,o){const t=[],r=new Map;o=af({strict:!1,end:!0,sensitive:!1},o);function n(d){return r.get(d)}function i(d,f,u){const h=!u,b=x1(d);z1(b,f),b.aliasOf=u&&u.record;const g=af(o,d),m=[b];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of y)m.push($e({},b,{components:u?u.record.components:b.components,path:x,aliasOf:u?u.record:b}))}let k,w;for(const y of m){const{path:x}=y;if(f&&x[0]!=="/"){const z=f.record.path,L=z[z.length-1]==="/"?"":"/";y.path=f.record.path+(x&&L+x)}if(y.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=w1(y,f,g),f&&x[0]==="/"&&L1(k,f),u?(u.alias.push(k),S1(u,k)):(w=w||k,w!==k&&w.alias.push(k),h&&d.name&&!nf(k)&&a(d.name)),b.children){const z=b.children;for(let L=0;L<z.length;L++)i(z[L],k,u&&u.children[L])}u=u||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&s(k)}return w?()=>{a(w)}:Mn}function a(d){if(Ih(d)){const f=r.get(d);f&&(r.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return t}function s(d){let f=0;for(;f<t.length&&g1(d,t[f])>=0&&(d.record.path!==t[f].record.path||!Rh(d,t[f]));)f++;t.splice(f,0,d),d.record.name&&!nf(d)&&r.set(d.record.name,d)}function c(d,f){let u,h={},b,g;if("name"in d&&d.name){if(u=r.get(d.name),!u)throw ln(1,{location:d});{const w=Object.keys(d.params||{}).filter(y=>!u.keys.find(x=>x.name===y));w.length&&Ae(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=u.record.name,h=$e(rf(f.params,u.keys.filter(w=>!w.optional).map(w=>w.name)),d.params&&rf(d.params,u.keys.map(w=>w.name))),b=u.stringify(h)}else if("path"in d)b=d.path,b.startsWith("/")||Ae(`The Matcher cannot resolve relative paths but received "${b}". Unless you directly called \`matcher.resolve("${b}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),u=t.find(w=>w.re.test(b)),u&&(h=u.parse(b),g=u.record.name);else{if(u=f.name?r.get(f.name):t.find(w=>w.re.test(f.path)),!u)throw ln(1,{location:d,currentLocation:f});g=u.record.name,h=$e({},f.params,d.params),b=u.stringify(h)}const m=[];let k=u;for(;k;)m.unshift(k.record),k=k.parent;return{name:g,path:b,params:h,matched:m,meta:O1(m)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:c,removeRoute:a,getRoutes:l,getRecordMatcher:n}}function rf(e,o){const t={};for(const r of o)r in e&&(t[r]=e[r]);return t}function x1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:_1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function _1(e){const o={},t=e.props||!1;if("component"in e)o.default=t;else for(const r in e.components)o[r]=typeof t=="boolean"?t:t[r];return o}function nf(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function O1(e){return e.reduce((o,t)=>$e(o,t.meta),{})}function af(e,o){const t={};for(const r in e)t[r]=r in o?o[r]:e[r];return t}function fs(e,o){return e.name===o.name&&e.optional===o.optional&&e.repeatable===o.repeatable}function S1(e,o){for(const t of e.keys)if(!t.optional&&!o.keys.find(fs.bind(null,t)))return Ae(`Alias "${o.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${t.name}"`);for(const t of o.keys)if(!t.optional&&!e.keys.find(fs.bind(null,t)))return Ae(`Alias "${o.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${t.name}"`)}function z1(e,o){o&&o.record.name&&!e.name&&!e.path&&Ae(`The route named "${String(o.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function L1(e,o){for(const t of o.keys)if(!e.keys.find(fs.bind(null,t)))return Ae(`Absolute path "${e.record.path}" must have the exact same param named "${t.name}" as its parent "${o.record.path}".`)}function Rh(e,o){return o.children.some(t=>t===e||Rh(e,t))}const jh=/#/g,E1=/&/g,T1=/\//g,A1=/=/g,P1=/\?/g,Mh=/\+/g,C1=/%5B/g,F1=/%5D/g,Dh=/%5E/g,$1=/%60/g,Kh=/%7B/g,I1=/%7C/g,Bh=/%7D/g,N1=/%20/g;function mc(e){return encodeURI(""+e).replace(I1,"|").replace(C1,"[").replace(F1,"]")}function R1(e){return mc(e).replace(Kh,"{").replace(Bh,"}").replace(Dh,"^")}function us(e){return mc(e).replace(Mh,"%2B").replace(N1,"+").replace(jh,"%23").replace(E1,"%26").replace($1,"`").replace(Kh,"{").replace(Bh,"}").replace(Dh,"^")}function j1(e){return us(e).replace(A1,"%3D")}function M1(e){return mc(e).replace(jh,"%23").replace(P1,"%3F")}function D1(e){return e==null?"":M1(e).replace(T1,"%2F")}function ri(e){try{return decodeURIComponent(""+e)}catch{Ae(`Error decoding "${e}". Using original value`)}return""+e}function K1(e){const o={};if(e===""||e==="?")return o;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<r.length;++n){const i=r[n].replace(Mh," "),a=i.indexOf("="),l=ri(a<0?i:i.slice(0,a)),s=a<0?null:ri(i.slice(a+1));if(l in o){let c=o[l];$o(c)||(c=o[l]=[c]),c.push(s)}else o[l]=s}return o}function lf(e){let o="";for(let t in e){const r=e[t];if(t=j1(t),r==null){r!==void 0&&(o+=(o.length?"&":"")+t);continue}($o(r)?r.map(i=>i&&us(i)):[r&&us(r)]).forEach(i=>{i!==void 0&&(o+=(o.length?"&":"")+t,i!=null&&(o+="="+i))})}return o}function B1(e){const o={};for(const t in e){const r=e[t];r!==void 0&&(o[t]=$o(r)?r.map(n=>n==null?null:""+n):r==null?r:""+r)}return o}const U1=Symbol("router view location matched"),sf=Symbol("router view depth"),vc=Symbol("router"),Uh=Symbol("route location"),ps=Symbol("router view location");function yn(){let e=[];function o(r){return e.push(r),()=>{const n=e.indexOf(r);n>-1&&e.splice(n,1)}}function t(){e=[]}return{add:o,list:()=>e,reset:t}}function Bt(e,o,t,r,n){const i=r&&(r.enterCallbacks[n]=r.enterCallbacks[n]||[]);return()=>new Promise((a,l)=>{const s=f=>{f===!1?l(ln(4,{from:t,to:o})):f instanceof Error?l(f):s1(f)?l(ln(2,{from:o,to:f})):(i&&r.enterCallbacks[n]===i&&typeof f=="function"&&i.push(f),a())},c=e.call(r&&r.instances[n],o,t,H1(s,o,t));let d=Promise.resolve(c);if(e.length<3&&(d=d.then(s)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)d=d.then(u=>s._called?u:(Ae(f),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!s._called){Ae(f),l(new Error("Invalid navigation guard"));return}}d.catch(f=>l(f))})}function H1(e,o,t){let r=0;return function(){r++===1&&Ae(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${o.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,r===1&&e.apply(null,arguments)}}function _l(e,o,t,r){const n=[];for(const i of e){!i.components&&!i.children.length&&Ae(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const a in i.components){let l=i.components[a];{if(!l||typeof l!="object"&&typeof l!="function")throw Ae(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Ae(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const s=l;l=()=>s}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Ae(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(o!=="beforeRouteEnter"&&!i.instances[a]))if(q1(l)){const c=(l.__vccOpts||l)[o];c&&n.push(Bt(c,t,r,i,a))}else{let s=l();"catch"in s||(Ae(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),s=Promise.resolve(s)),n.push(()=>s.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=qy(c)?c.default:c;i.components[a]=d;const u=(d.__vccOpts||d)[o];return u&&Bt(u,t,r,i,a)()}))}}}return n}function q1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cf(e){const o=Y(vc),t=Y(Uh),r=P(()=>o.resolve(S(e.to))),n=P(()=>{const{matched:s}=r.value,{length:c}=s,d=s[c-1],f=t.matched;if(!d||!f.length)return-1;const u=f.findIndex(nr.bind(null,d));if(u>-1)return u;const h=df(s[c-2]);return c>1&&df(d)===h&&f[f.length-1].path!==h?f.findIndex(nr.bind(null,s[c-2])):u}),i=P(()=>n.value>-1&&X1(t.params,r.value.params)),a=P(()=>n.value>-1&&n.value===t.matched.length-1&&Fh(t.params,r.value.params));function l(s={}){return G1(s)?o[S(e.replace)?"replace":"push"](S(e.to)).catch(Mn):Promise.resolve()}if(Et){const s=xo();if(s){const c={route:r.value,isActive:i.value,isExactActive:a.value};s.__vrl_devtools=s.__vrl_devtools||[],s.__vrl_devtools.push(c),Rr(()=>{c.route=r.value,c.isActive=i.value,c.isExactActive=a.value},{flush:"post"})}}return{route:r,href:P(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const V1=ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cf,setup(e,{slots:o}){const t=Ke(cf(e)),{options:r}=Y(vc),n=P(()=>({[ff(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[ff(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=o.default&&o.default(t);return e.custom?i:oo("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:n.value},i)}}}),W1=V1;function G1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const o=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(o))return}return e.preventDefault&&e.preventDefault(),!0}}function X1(e,o){for(const t in o){const r=o[t],n=e[t];if(typeof r=="string"){if(r!==n)return!1}else if(!$o(n)||n.length!==r.length||r.some((i,a)=>i!==n[a]))return!1}return!0}function df(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ff=(e,o,t)=>e??o??t,Y1=ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:o,slots:t}){J1();const r=Y(ps),n=P(()=>e.route||r.value),i=Y(sf,0),a=P(()=>{let c=S(i);const{matched:d}=n.value;let f;for(;(f=d[c])&&!f.components;)c++;return c}),l=P(()=>n.value.matched[a.value]);Po(sf,P(()=>a.value+1)),Po(U1,l),Po(ps,n);const s=H();return we(()=>[s.value,l.value,e.name],([c,d,f],[u,h,b])=>{d&&(d.instances[f]=c,h&&h!==d&&c&&c===u&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),c&&d&&(!h||!nr(d,h)||!u)&&(d.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=n.value,d=e.name,f=l.value,u=f&&f.components[d];if(!u)return uf(t.default,{Component:u,route:c});const h=f.props[d],b=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=oo(u,$e({},b,o,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[d]=null)},ref:s}));if(Et&&m.ref){const k={depth:a.value,name:f.name,path:f.path,meta:f.meta};($o(m.ref)?m.ref.map(y=>y.i):[m.ref.i]).forEach(y=>{y.__vrv_devtools=k})}return uf(t.default,{Component:m,route:c})||m}}});function uf(e,o){if(!e)return null;const t=e(o);return t.length===1?t[0]:t}const Z1=Y1;function J1(){const e=xo(),o=e.parent&&e.parent.type.name;if(o&&(o==="KeepAlive"||o.includes("Transition"))){const t=o==="KeepAlive"?"keep-alive":"transition";Ae(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${t}>
    <component :is="Component" />
  </${t}>
</router-view>`)}}function xn(e,o){const t=$e({},e,{matched:e.matched.map(r=>lx(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:o,value:t}}}function Di(e){return{_custom:{display:e}}}let Q1=0;function ex(e,o,t){if(o.__hasDevtools)return;o.__hasDevtools=!0;const r=Q1++;Hy({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},n=>{typeof n.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:xn(o.currentRoute.value,"Current Route")})}),n.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const u=f.__vrv_devtools;d.tags.push({label:(u.name?`${u.name.toString()}: `:"")+u.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Hh})}$o(f.__vrl_devtools)&&(f.__devtoolsApi=n,f.__vrl_devtools.forEach(u=>{let h=Wh,b="";u.isExactActive?(h=Vh,b="This is exactly active"):u.isActive&&(h=qh,b="This link is active"),d.tags.push({label:u.route.path,textColor:0,tooltip:b,backgroundColor:h})}))}),we(o.currentRoute,()=>{s(),n.notifyComponentUpdate(),n.sendInspectorTree(l),n.sendInspectorState(l)});const i="router:navigations:"+r;n.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),o.onError((d,f)=>{n.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:n.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;o.beforeEach((d,f)=>{const u={guard:Di("beforeEach"),from:xn(f,"Current Location during this navigation"),to:xn(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),n.addTimelineEvent({layerId:i,event:{time:n.now(),title:"Start of navigation",subtitle:d.fullPath,data:u,groupId:d.meta.__navigationId}})}),o.afterEach((d,f,u)=>{const h={guard:Di("afterEach")};u?(h.failure={_custom:{type:Error,readOnly:!0,display:u?u.message:"",tooltip:"Navigation Failure",value:u}},h.status=Di("❌")):h.status=Di("✅"),h.from=xn(f,"Current Location during this navigation"),h.to=xn(d,"Target location"),n.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:d.fullPath,time:n.now(),data:h,logType:u?"warning":"default",groupId:d.meta.__navigationId}})});const l="router-inspector:"+r;n.addInspector({id:l,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function s(){if(!c)return;const d=c;let f=t.getRoutes().filter(u=>!u.parent);f.forEach(Yh),d.filter&&(f=f.filter(u=>hs(u,d.filter.toLowerCase()))),f.forEach(u=>Xh(u,o.currentRoute.value)),d.rootNodes=f.map(Gh)}let c;n.on.getInspectorTree(d=>{c=d,d.app===e&&d.inspectorId===l&&s()}),n.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===l){const u=t.getRoutes().find(h=>h.record.__vd_id===d.nodeId);u&&(d.state={options:tx(u)})}}),n.sendInspectorTree(l),n.sendInspectorState(l)})}function ox(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function tx(e){const{record:o}=e,t=[{editable:!1,key:"path",value:o.path}];return o.name!=null&&t.push({editable:!1,key:"name",value:o.name}),t.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&t.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${ox(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),o.redirect!=null&&t.push({editable:!1,key:"redirect",value:o.redirect}),e.alias.length&&t.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),Object.keys(e.record.meta).length&&t.push({editable:!1,key:"meta",value:e.record.meta}),t.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),t}const Hh=15485081,qh=2450411,Vh=8702998,rx=2282478,Wh=16486972,nx=6710886;function Gh(e){const o=[],{record:t}=e;t.name!=null&&o.push({label:String(t.name),textColor:0,backgroundColor:rx}),t.aliasOf&&o.push({label:"alias",textColor:0,backgroundColor:Wh}),e.__vd_match&&o.push({label:"matches",textColor:0,backgroundColor:Hh}),e.__vd_exactActive&&o.push({label:"exact",textColor:0,backgroundColor:Vh}),e.__vd_active&&o.push({label:"active",textColor:0,backgroundColor:qh}),t.redirect&&o.push({label:typeof t.redirect=="string"?`redirect: ${t.redirect}`:"redirects",textColor:16777215,backgroundColor:nx});let r=t.__vd_id;return r==null&&(r=String(ix++),t.__vd_id=r),{id:r,label:t.path,tags:o,children:e.children.map(Gh)}}let ix=0;const ax=/^\/(.*)\/([a-z]*)$/;function Xh(e,o){const t=o.matched.length&&nr(o.matched[o.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=t,t||(e.__vd_active=o.matched.some(r=>nr(r,e.record))),e.children.forEach(r=>Xh(r,o))}function Yh(e){e.__vd_match=!1,e.children.forEach(Yh)}function hs(e,o){const t=String(e.re).match(ax);if(e.__vd_match=!1,!t||t.length<3)return!1;if(new RegExp(t[1].replace(/\$$/,""),t[2]).test(o))return e.children.forEach(a=>hs(a,o)),e.record.path!=="/"||o==="/"?(e.__vd_match=e.re.test(o),!0):!1;const n=e.record.path.toLowerCase(),i=ri(n);return!o.startsWith("/")&&(i.includes(o)||n.includes(o))||i.startsWith(o)||n.startsWith(o)||e.record.name&&String(e.record.name).includes(o)?!0:e.children.some(a=>hs(a,o))}function lx(e,o){const t={};for(const r in e)o.includes(r)||(t[r]=e[r]);return t}function sx(e){const o=y1(e.routes,e),t=e.parseQuery||K1,r=e.stringifyQuery||lf,n=e.history;if(!n)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=yn(),a=yn(),l=yn(),s=bt(jt);let c=jt;Et&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=yl.bind(null,C=>""+C),f=yl.bind(null,D1),u=yl.bind(null,ri);function h(C,W){let B,J;return Ih(C)?(B=o.getRecordMatcher(C),J=W):J=C,o.addRoute(J,B)}function b(C){const W=o.getRecordMatcher(C);W?o.removeRoute(W):Ae(`Cannot remove non-existent route "${String(C)}"`)}function g(){return o.getRoutes().map(C=>C.record)}function m(C){return!!o.getRecordMatcher(C)}function k(C,W){if(W=$e({},W||s.value),typeof C=="string"){const fe=xl(t,C,W.path),v=o.resolve({path:fe.path},W),_=n.createHref(fe.fullPath);return _.startsWith("//")?Ae(`Location "${C}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):v.matched.length||Ae(`No match found for location with path "${C}"`),$e(fe,v,{params:u(v.params),hash:ri(fe.hash),redirectedFrom:void 0,href:_})}let B;if("path"in C)"params"in C&&!("name"in C)&&Object.keys(C.params).length&&Ae(`Path "${C.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),B=$e({},C,{path:xl(t,C.path,W.path).path});else{const fe=$e({},C.params);for(const v in fe)fe[v]==null&&delete fe[v];B=$e({},C,{params:f(C.params)}),W.params=f(W.params)}const J=o.resolve(B,W),Oe=C.hash||"";Oe&&!Oe.startsWith("#")&&Ae(`A \`hash\` should always start with the character "#". Replace "${Oe}" with "#${Oe}".`),J.params=d(u(J.params));const Le=Gy(r,$e({},C,{hash:R1(Oe),path:J.path})),ge=n.createHref(Le);return ge.startsWith("//")?Ae(`Location "${C}" resolved to "${ge}". A resolved location cannot start with multiple slashes.`):J.matched.length||Ae(`No match found for location with path "${"path"in C?C.path:C}"`),$e({fullPath:Le,hash:Oe,query:r===lf?B1(C.query):C.query||{}},J,{redirectedFrom:void 0,href:ge})}function w(C){return typeof C=="string"?xl(t,C,s.value.path):$e({},C)}function y(C,W){if(c!==C)return ln(8,{from:W,to:C})}function x(C){return $(C)}function z(C){return x($e(w(C),{replace:!0}))}function L(C){const W=C.matched[C.matched.length-1];if(W&&W.redirect){const{redirect:B}=W;let J=typeof B=="function"?B(C):B;if(typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=w(J):{path:J},J.params={}),!("path"in J)&&!("name"in J))throw Ae(`Invalid redirect found:
${JSON.stringify(J,null,2)}
 when navigating to "${C.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return $e({query:C.query,hash:C.hash,params:"path"in J?{}:C.params},J)}}function $(C,W){const B=c=k(C),J=s.value,Oe=C.state,Le=C.force,ge=C.replace===!0,fe=L(B);if(fe)return $($e(w(fe),{state:typeof fe=="object"?$e({},Oe,fe.state):Oe,force:Le,replace:ge}),W||B);const v=B;v.redirectedFrom=W;let _;return!Le&&Yd(r,J,B)&&(_=ln(16,{to:v,from:J}),Te(J,J,!0,!1)),(_?Promise.resolve(_):T(v,J)).catch(E=>yt(E)?yt(E,2)?E:xe(E):G(E,v,J)).then(E=>{if(E){if(yt(E,2))return Yd(r,k(E.to),v)&&W&&(W._count=W._count?W._count+1:1)>10?(Ae(`Detected an infinite redirection in a navigation guard when going from "${J.fullPath}" to "${v.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):$($e({replace:ge},w(E.to),{state:typeof E.to=="object"?$e({},Oe,E.to.state):Oe,force:Le}),W||v)}else E=Z(v,J,!0,ge,Oe);return U(v,J,E),E})}function O(C,W){const B=y(C,W);return B?Promise.reject(B):Promise.resolve()}function T(C,W){let B;const[J,Oe,Le]=cx(C,W);B=_l(J.reverse(),"beforeRouteLeave",C,W);for(const fe of J)fe.leaveGuards.forEach(v=>{B.push(Bt(v,C,W))});const ge=O.bind(null,C,W);return B.push(ge),Ur(B).then(()=>{B=[];for(const fe of i.list())B.push(Bt(fe,C,W));return B.push(ge),Ur(B)}).then(()=>{B=_l(Oe,"beforeRouteUpdate",C,W);for(const fe of Oe)fe.updateGuards.forEach(v=>{B.push(Bt(v,C,W))});return B.push(ge),Ur(B)}).then(()=>{B=[];for(const fe of C.matched)if(fe.beforeEnter&&!W.matched.includes(fe))if($o(fe.beforeEnter))for(const v of fe.beforeEnter)B.push(Bt(v,C,W));else B.push(Bt(fe.beforeEnter,C,W));return B.push(ge),Ur(B)}).then(()=>(C.matched.forEach(fe=>fe.enterCallbacks={}),B=_l(Le,"beforeRouteEnter",C,W),B.push(ge),Ur(B))).then(()=>{B=[];for(const fe of a.list())B.push(Bt(fe,C,W));return B.push(ge),Ur(B)}).catch(fe=>yt(fe,8)?fe:Promise.reject(fe))}function U(C,W,B){for(const J of l.list())J(C,W,B)}function Z(C,W,B,J,Oe){const Le=y(C,W);if(Le)return Le;const ge=W===jt,fe=Et?history.state:{};B&&(J||ge?n.replace(C.fullPath,$e({scroll:ge&&fe&&fe.scroll},Oe)):n.push(C.fullPath,Oe)),s.value=C,Te(C,W,B,ge),xe()}let D;function be(){D||(D=n.listen((C,W,B)=>{if(!Ro.listening)return;const J=k(C),Oe=L(J);if(Oe){$($e(Oe,{replace:!0}),J).catch(Mn);return}c=J;const Le=s.value;Et&&t1(Jd(Le.fullPath,B.delta),Za()),T(J,Le).catch(ge=>yt(ge,12)?ge:yt(ge,2)?($(ge.to,J).then(fe=>{yt(fe,20)&&!B.delta&&B.type===ti.pop&&n.go(-1,!1)}).catch(Mn),Promise.reject()):(B.delta&&n.go(-B.delta,!1),G(ge,J,Le))).then(ge=>{ge=ge||Z(J,Le,!1),ge&&(B.delta&&!yt(ge,8)?n.go(-B.delta,!1):B.type===ti.pop&&yt(ge,20)&&n.go(-1,!1)),U(J,Le,ge)}).catch(Mn)}))}let de=yn(),ye=yn(),Ee;function G(C,W,B){xe(C);const J=ye.list();return J.length?J.forEach(Oe=>Oe(C,W,B)):(Ae("uncaught error during route navigation:"),console.error(C)),Promise.reject(C)}function oe(){return Ee&&s.value!==jt?Promise.resolve():new Promise((C,W)=>{de.add([C,W])})}function xe(C){return Ee||(Ee=!C,be(),de.list().forEach(([W,B])=>C?B(C):W()),de.reset()),C}function Te(C,W,B,J){const{scrollBehavior:Oe}=e;if(!Et||!Oe)return Promise.resolve();const Le=!B&&r1(Jd(C.fullPath,0))||(J||!B)&&history.state&&history.state.scroll||null;return so().then(()=>Oe(C,W,Le)).then(ge=>ge&&o1(ge)).catch(ge=>G(ge,C,W))}const fo=C=>n.go(C);let Ue;const Je=new Set,Ro={currentRoute:s,listening:!0,addRoute:h,removeRoute:b,hasRoute:m,getRoutes:g,resolve:k,options:e,push:x,replace:z,go:fo,back:()=>fo(-1),forward:()=>fo(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:ye.add,isReady:oe,install(C){const W=this;C.component("RouterLink",W1),C.component("RouterView",Z1),C.config.globalProperties.$router=W,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>S(s)}),Et&&!Ue&&s.value===jt&&(Ue=!0,x(n.location).catch(Oe=>{Ae("Unexpected error when starting the router:",Oe)}));const B={};for(const Oe in jt)B[Oe]=P(()=>s.value[Oe]);C.provide(vc,W),C.provide(Uh,Ke(B)),C.provide(ps,s);const J=C.unmount;Je.add(C),C.unmount=function(){Je.delete(C),Je.size<1&&(c=jt,D&&D(),D=null,s.value=jt,Ue=!1,Ee=!1),J()},Et&&ex(C,W,o)}};return Ro}function Ur(e){return e.reduce((o,t)=>o.then(()=>t()),Promise.resolve())}function cx(e,o){const t=[],r=[],n=[],i=Math.max(o.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=o.matched[a];l&&(e.matched.find(c=>nr(c,l))?r.push(l):t.push(l));const s=e.matched[a];s&&(o.matched.find(c=>nr(c,s))||n.push(s))}return[t,r,n]}const Ol=H(!1),Kn=H(!1),Zr=H(!1),dx=H(!0),bs=ty({xs:460,...oy}),Cr=Ny(),Zh=Ty(),fx=P(()=>Cr.height.value-Cr.width.value/Xt>180),Jh=Ly(rt?document.body:null),Jt=Jw(),ux=P(()=>{var e,o;return["INPUT","TEXTAREA"].includes(((e=Jt.value)==null?void 0:e.tagName)||"")||((o=Jt.value)==null?void 0:o.classList.contains("CodeMirror-code"))}),px=P(()=>{var e;return["BUTTON","A"].includes(((e=Jt.value)==null?void 0:e.tagName)||"")});nt("slidev-camera","default");nt("slidev-mic","default");const Qi=nt("slidev-scale",0),mo=nt("slidev-show-overview",!1),Sl=nt("slidev-presenter-cursor",!0),pf=nt("slidev-show-editor",!1);nt("slidev-editor-width",rt?window.innerWidth*.4:100);const Qh=Eh(mo);function hf(e,o,t,r=n=>n){return e*r(.5-o*(.5-t))}function hx(e){return[-e[0],-e[1]]}function Yo(e,o){return[e[0]+o[0],e[1]+o[1]]}function Do(e,o){return[e[0]-o[0],e[1]-o[1]]}function Xo(e,o){return[e[0]*o,e[1]*o]}function bx(e,o){return[e[0]/o,e[1]/o]}function _n(e){return[e[1],-e[0]]}function bf(e,o){return e[0]*o[0]+e[1]*o[1]}function gx(e,o){return e[0]===o[0]&&e[1]===o[1]}function mx(e){return Math.hypot(e[0],e[1])}function vx(e){return e[0]*e[0]+e[1]*e[1]}function gf(e,o){return vx(Do(e,o))}function eb(e){return bx(e,mx(e))}function kx(e,o){return Math.hypot(e[1]-o[1],e[0]-o[0])}function On(e,o,t){let r=Math.sin(t),n=Math.cos(t),i=e[0]-o[0],a=e[1]-o[1],l=i*n-a*r,s=i*r+a*n;return[l+o[0],s+o[1]]}function gs(e,o,t){return Yo(e,Xo(Do(o,e),t))}function mf(e,o,t){return Yo(e,Xo(o,t))}var{min:Hr,PI:wx}=Math,vf=.275,Sn=wx+1e-4;function yx(e,o={}){let{size:t=16,smoothing:r=.5,thinning:n=.5,simulatePressure:i=!0,easing:a=G=>G,start:l={},end:s={},last:c=!1}=o,{cap:d=!0,easing:f=G=>G*(2-G)}=l,{cap:u=!0,easing:h=G=>--G*G*G+1}=s;if(e.length===0||t<=0)return[];let b=e[e.length-1].runningLength,g=l.taper===!1?0:l.taper===!0?Math.max(t,b):l.taper,m=s.taper===!1?0:s.taper===!0?Math.max(t,b):s.taper,k=Math.pow(t*r,2),w=[],y=[],x=e.slice(0,10).reduce((G,oe)=>{let xe=oe.pressure;if(i){let Te=Hr(1,oe.distance/t),fo=Hr(1,1-Te);xe=Hr(1,G+(fo-G)*(Te*vf))}return(G+xe)/2},e[0].pressure),z=hf(t,n,e[e.length-1].pressure,a),L,$=e[0].vector,O=e[0].point,T=O,U=O,Z=T,D=!1;for(let G=0;G<e.length;G++){let{pressure:oe}=e[G],{point:xe,vector:Te,distance:fo,runningLength:Ue}=e[G];if(G<e.length-1&&b-Ue<3)continue;if(n){if(i){let Le=Hr(1,fo/t),ge=Hr(1,1-Le);oe=Hr(1,x+(ge-x)*(Le*vf))}z=hf(t,n,oe,a)}else z=t/2;L===void 0&&(L=z);let Je=Ue<g?f(Ue/g):1,Ro=b-Ue<m?h((b-Ue)/m):1;z=Math.max(.01,z*Math.min(Je,Ro));let C=(G<e.length-1?e[G+1]:e[G]).vector,W=G<e.length-1?bf(Te,C):1,B=bf(Te,$)<0&&!D,J=W!==null&&W<0;if(B||J){let Le=Xo(_n($),z);for(let ge=1/13,fe=0;fe<=1;fe+=ge)U=On(Do(xe,Le),xe,Sn*fe),w.push(U),Z=On(Yo(xe,Le),xe,Sn*-fe),y.push(Z);O=U,T=Z,J&&(D=!0);continue}if(D=!1,G===e.length-1){let Le=Xo(_n(Te),z);w.push(Do(xe,Le)),y.push(Yo(xe,Le));continue}let Oe=Xo(_n(gs(C,Te,W)),z);U=Do(xe,Oe),(G<=1||gf(O,U)>k)&&(w.push(U),O=U),Z=Yo(xe,Oe),(G<=1||gf(T,Z)>k)&&(y.push(Z),T=Z),x=oe,$=Te}let be=e[0].point.slice(0,2),de=e.length>1?e[e.length-1].point.slice(0,2):Yo(e[0].point,[1,1]),ye=[],Ee=[];if(e.length===1){if(!(g||m)||c){let G=mf(be,eb(_n(Do(be,de))),-(L||z)),oe=[];for(let xe=1/13,Te=xe;Te<=1;Te+=xe)oe.push(On(G,be,Sn*2*Te));return oe}}else{if(!(g||m&&e.length===1))if(d)for(let oe=1/13,xe=oe;xe<=1;xe+=oe){let Te=On(y[0],be,Sn*xe);ye.push(Te)}else{let oe=Do(w[0],y[0]),xe=Xo(oe,.5),Te=Xo(oe,.51);ye.push(Do(be,xe),Do(be,Te),Yo(be,Te),Yo(be,xe))}let G=_n(hx(e[e.length-1].vector));if(m||g&&e.length===1)Ee.push(de);else if(u){let oe=mf(de,G,z);for(let xe=1/29,Te=xe;Te<1;Te+=xe)Ee.push(On(oe,de,Sn*3*Te))}else Ee.push(Yo(de,Xo(G,z)),Yo(de,Xo(G,z*.99)),Do(de,Xo(G,z*.99)),Do(de,Xo(G,z)))}return w.concat(Ee,y.reverse(),ye)}function xx(e,o={}){var t;let{streamline:r=.5,size:n=16,last:i=!1}=o;if(e.length===0)return[];let a=.15+(1-r)*.85,l=Array.isArray(e[0])?e:e.map(({x:h,y:b,pressure:g=.5})=>[h,b,g]);if(l.length===2){let h=l[1];l=l.slice(0,-1);for(let b=1;b<5;b++)l.push(gs(l[0],h,b/4))}l.length===1&&(l=[...l,[...Yo(l[0],[1,1]),...l[0].slice(2)]]);let s=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,d=0,f=s[0],u=l.length-1;for(let h=1;h<l.length;h++){let b=i&&h===u?l[h].slice(0,2):gs(f.point,l[h],a);if(gx(f.point,b))continue;let g=kx(b,f.point);if(d+=g,h<u&&!c){if(d<n)continue;c=!0}f={point:b,pressure:l[h][2]>=0?l[h][2]:.5,vector:eb(Do(f.point,b)),distance:g,runningLength:d},s.push(f)}return s[0].vector=((t=s[1])==null?void 0:t.vector)||[0,0],s}function _x(e,o={}){return yx(xx(e,o),o)}var Ox=()=>({events:{},emit(e,...o){let t=this.events[e]||[];for(let r=0,n=t.length;r<n;r++)t[r](...o)},on(e,o){var t;return(t=this.events[e])!=null&&t.push(o)||(this.events[e]=[o]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>o!==n)}}});function ya(e,o){return e-o}function Sx(e){return e<0?-1:1}function xa(e){return[Math.abs(e),Sx(e)]}function ob(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var zx=2,Tt=zx,fn=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var o;const t=this.drauu.el,r=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const n=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-n.left)*r,y:(e.pageY-n.top)*r,pressure:e.pressure}}else{const n=this.drauu.svgPoint;n.x=e.clientX,n.y=e.clientY;const i=n.matrixTransform((o=t.getScreenCTM())==null?void 0:o.inverse());return{x:i.x*r,y:i.y*r,pressure:e.pressure}}}createElement(e,o){const t=document.createElementNS("http://www.w3.org/2000/svg",e),r=o?{...this.brush,...o}:this.brush;return t.setAttribute("fill",r.fill??"transparent"),t.setAttribute("stroke",r.color),t.setAttribute("stroke-width",r.size.toString()),t.setAttribute("stroke-linecap","round"),r.dasharray&&t.setAttribute("stroke-dasharray",r.dasharray),t}attr(e,o){this.el.setAttribute(e,typeof o=="string"?o:o.toFixed(Tt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Lx=class extends fn{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const o=_x(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!o.length)return"";const t=o.reduce((r,[n,i],a,l)=>{const[s,c]=l[(a+1)%l.length];return r.push(n,i,(n+s)/2,(i+c)/2),r},["M",...o[0],"Q"]);return t.push("Z"),t.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},Ex=class extends fn{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[o,t]=xa(e.x-this.start.x),[r,n]=xa(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(o,r);o=i,r=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",o),this.attr("ry",r);else{const[i,a]=[this.start.x,this.start.x+o*t].sort(ya),[l,s]=[this.start.y,this.start.y+r*n].sort(ya);this.attr("cx",(i+a)/2),this.attr("cy",(l+s)/2),this.attr("rx",(a-i)/2),this.attr("ry",(s-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function tb(e,o){const t=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("fill",o),r.setAttribute("id",e),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),n.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(n),t.appendChild(r),t}var Tx=class extends fn{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const o=ob(),t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.append(tb(o,this.brush.color)),t.append(this.el),this.attr("marker-end",`url(#${o})`),t}return this.el}onMove(e){if(!this.el)return!1;let{x:o,y:t}=e;if(this.shiftPressed){const r=e.x-this.start.x,n=e.y-this.start.y;if(n!==0){let i=r/n;i=Math.round(i),Math.abs(i)<=1?(o=this.start.x+n*i,t=this.start.y+n):(o=this.start.x+r,t=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-o),this.attr("y1",this.start.y*2-t),this.attr("x2",o),this.attr("y2",t)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",o),this.attr("y2",t)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Ax=class extends fn{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[o,t]=xa(e.x-this.start.x),[r,n]=xa(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(o,r);o=i,r=i}if(this.altPressed)this.attr("x",this.start.x-o),this.attr("y",this.start.y-r),this.attr("width",o*2),this.attr("height",r*2);else{const[i,a]=[this.start.x,this.start.x+o*t].sort(ya),[l,s]=[this.start.y,this.start.y+r*n].sort(ya);this.attr("x",i),this.attr("y",l),this.attr("width",a-i),this.attr("height",s-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Px(e,o){const t=e.x-o.x,r=e.y-o.y;return t*t+r*r}function Cx(e,o,t){let r=o.x,n=o.y,i=t.x-r,a=t.y-n;if(i!==0||a!==0){const l=((e.x-r)*i+(e.y-n)*a)/(i*i+a*a);l>1?(r=t.x,n=t.y):l>0&&(r+=i*l,n+=a*l)}return i=e.x-r,a=e.y-n,i*i+a*a}function Fx(e,o){let t=e[0];const r=[t];let n;for(let i=1,a=e.length;i<a;i++)n=e[i],Px(n,t)>o&&(r.push(n),t=n);return t!==n&&n&&r.push(n),r}function ms(e,o,t,r,n){let i=r,a=0;for(let l=o+1;l<t;l++){const s=Cx(e[l],e[o],e[t]);s>i&&(a=l,i=s)}i>r&&(a-o>1&&ms(e,o,a,r,n),n.push(e[a]),t-a>1&&ms(e,a,t,r,n))}function $x(e,o){const t=e.length-1,r=[e[0]];return ms(e,0,t,o,r),r.push(e[t]),r}function kf(e,o,t=!1){if(e.length<=2)return e;const r=o!==void 0?o*o:1;return e=t?e:Fx(e,r),e=$x(e,r),e}var Ix=class extends fn{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=ob();const o=tb(this.arrowId,this.brush.color);this.el.appendChild(o)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=kf(this.points,1,!0),this.count=0),this.attr("d",yf(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",yf(kf(this.points,1,!0))),!e.getTotalLength()))}};function Nx(e,o){const t=o.x-e.x,r=o.y-e.y;return{length:Math.sqrt(t**2+r**2),angle:Math.atan2(r,t)}}function wf(e,o,t,r){const n=o||e,i=t||e,a=.2,l=Nx(n,i),s=l.angle+(r?Math.PI:0),c=l.length*a,d=e.x+Math.cos(s)*c,f=e.y+Math.sin(s)*c;return{x:d,y:f}}function Rx(e,o,t){const r=wf(t[o-1],t[o-2],e),n=wf(e,t[o-1],t[o+1],!0);return`C ${r.x.toFixed(Tt)},${r.y.toFixed(Tt)} ${n.x.toFixed(Tt)},${n.y.toFixed(Tt)} ${e.x.toFixed(Tt)},${e.y.toFixed(Tt)}`}function yf(e){return e.reduce((o,t,r,n)=>r===0?`M ${t.x.toFixed(Tt)},${t.y.toFixed(Tt)}`:`${o} ${Rx(t,r,n)}`,"")}var jx=class extends fn{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const o=(t,r)=>{if(t&&t.length)for(let n=0;n<t.length;n++){const i=t[n];if(i.getTotalLength){const a=i.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const s=i.getPointAtLength(a*l/this.pathSubFactor),c=i.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:s.x,x2:c.x,y1:s.y,y2:c.y,segment:l,element:r||i})}}else i.children&&o(i.children,i)}};e&&o(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const o=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,o}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let o=0;o<this.pathFragments.length;o++){const t=this.pathFragments[o],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(t,r)&&(t.element.remove(),e.push(o))}return e.length&&(this.pathFragments=this.pathFragments.filter((o,t)=>!e.includes(t))),e.length>0}lineLineIntersect(e,o){const t=e.x1,r=e.x2,n=o.x1,i=o.x2,a=e.y1,l=e.y2,s=o.y1,c=o.y2,d=(t-r)*(s-c)-(a-l)*(n-i),f=(t*l-a*r)*(n-i)-(t-r)*(n*c-s*i),u=(t*l-a*r)*(s-c)-(a-l)*(n*c-s*i),h=(b,g,m)=>b>=g&&b<=m?!0:b>=m&&b<=g;if(d===0)return!1;{const b={x:f/d,y:u/d};return h(b.x,t,r)&&h(b.y,a,l)&&h(b.x,n,i)&&h(b.y,s,c)}}};function Mx(e){return{draw:new Ix(e),stylus:new Lx(e),line:new Tx(e),rectangle:new Ax(e),ellipse:new Ex(e),eraseLine:new jx(e)}}var Dx=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Ox(),this._models=Mx(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,o){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const t=this.resolveSelector(o)||this.el,r=this.eventStart.bind(this),n=this.eventMove.bind(this),i=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);t.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",n,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{t.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,o){return this._emitter.on(e,o)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const o=this.model._eventUp(e);o?(o instanceof Element&&o!==this._currentNode&&(this._currentNode=o),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Kx(e){return new Dx(e)}const vs=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],ft=nt("slidev-drawing-enabled",!1),n9=nt("slidev-drawing-pinned",!1),Bx=H(!1),Ux=H(!1),Hx=H(!1),ni=H(!1),Or=ww(nt("slidev-drawing-brush",{color:vs[0],size:4,mode:"stylus"})),xf=H("stylus"),rb=P(()=>Pe.drawings.syncAll||Oo.value);let ii=!1;const zn=P({get(){return xf.value},set(e){xf.value=e,e==="arrow"?(Or.mode="line",Or.arrowEnd=!0):(Or.mode=e,Or.arrowEnd=!1)}}),qx=Ke({brush:Or,acceptsInputTypes:P(()=>ft.value&&(!Pe.drawings.presenterOnly||Oo.value)?void 0:["pen"]),coordinateTransform:!1}),yo=Ma(Kx(qx));function Vx(){yo.clear(),rb.value&&Oh(Ve.value,"")}function kc(){var e;Ux.value=yo.canRedo(),Bx.value=yo.canUndo(),Hx.value=!!((e=yo.el)!=null&&e.children.length)}function Wx(e){ii=!0;const o=ka[e||Ve.value];o!=null?yo.load(o):yo.clear(),kc(),ii=!1}yo.on("changed",()=>{if(kc(),!ii){const e=yo.dump(),o=Ve.value;(ka[o]||"")!==e&&rb.value&&Oh(o,yo.dump())}});gw(e=>{ii=!0,e[Ve.value]!=null&&yo.load(e[Ve.value]||""),ii=!1,kc()});so(()=>{we(Ve,()=>{yo.mounted&&Wx()},{immediate:!0})});yo.on("start",()=>ni.value=!0);yo.on("end",()=>ni.value=!1);window.addEventListener("keydown",e=>{if(!ft.value)return;const o=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let t=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?yo.redo():yo.undo():e.code==="Escape"?ft.value=!1:e.code==="KeyL"&&o?zn.value="line":e.code==="KeyA"&&o?zn.value="arrow":e.code==="KeyS"&&o?zn.value="stylus":e.code==="KeyR"&&o?zn.value="rectangle":e.code==="KeyE"&&o?zn.value="ellipse":e.code==="KeyC"&&o?Vx():e.code.startsWith("Digit")&&o&&+e.code[5]<=vs.length?Or.color=vs[+e.code[5]-1]:t=!1,t&&(e.preventDefault(),e.stopPropagation())},!1);function Qe(...e){return P(()=>e.every(o=>eo(o)))}function To(e){return P(()=>!eo(e))}const _f=hy(),zl=nt("slidev-color-schema","auto"),ks=P(()=>Pe.colorSchema!=="auto"),wc=P({get(){return ks.value?Pe.colorSchema==="dark":zl.value==="auto"?_f.value:zl.value==="dark"},set(e){ks.value||(zl.value=e===_f.value?"auto":e?"dark":"light")}}),nb=Eh(wc);rt&&we(wc,e=>{const o=document.querySelector("html");o.classList.toggle("dark",e),o.classList.toggle("light",!e)},{immediate:!0});const ea=H(1),oa=P(()=>Xe.length-1),Fo=H(0),yc=H(0);function Gx(){Fo.value>ea.value&&(Fo.value-=1)}function Xx(){Fo.value<oa.value&&(Fo.value+=1)}function Yx(){if(Fo.value>ea.value){let e=Fo.value-yc.value;e<ea.value&&(e=ea.value),Fo.value=e}}function Zx(){if(Fo.value<oa.value){let e=Fo.value+yc.value;e>oa.value&&(e=oa.value),Fo.value=e}}function Jx(){const{escape:e,space:o,shift:t,left:r,right:n,up:i,down:a,enter:l,d:s,g:c,o:d}=Zh;let f=[{name:"next_space",key:Qe(o,To(t)),fn:Qt,autoRepeat:!0},{name:"prev_space",key:Qe(o,t),fn:er,autoRepeat:!0},{name:"next_right",key:Qe(n,To(t),To(mo)),fn:Qt,autoRepeat:!0},{name:"prev_left",key:Qe(r,To(t),To(mo)),fn:er,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Qt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:er,autoRepeat:!0},{name:"next_down",key:Qe(a,To(mo)),fn:li,autoRepeat:!0},{name:"prev_up",key:Qe(i,To(mo)),fn:()=>si(!1),autoRepeat:!0},{name:"next_shift",key:Qe(n,t),fn:li,autoRepeat:!0},{name:"prev_shift",key:Qe(r,t),fn:()=>si(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(s,To(ft)),fn:nb},{name:"toggle_overview",key:Qe(d,To(ft)),fn:Qh},{name:"hide_overview",key:Qe(e,To(ft)),fn:()=>mo.value=!1},{name:"goto",key:Qe(c,To(ft)),fn:()=>Zr.value=!Zr.value},{name:"next_overview",key:Qe(n,mo),fn:Xx},{name:"prev_overview",key:Qe(r,mo),fn:Gx},{name:"up_overview",key:Qe(i,mo),fn:Yx},{name:"down_overview",key:Qe(a,mo),fn:Zx},{name:"goto_from_overview",key:Qe(l,mo),fn:()=>{cn(Fo.value),mo.value=!1}}];const u=new Set(f.map(b=>b.name));if(f.filter(b=>b.name&&u.has(b.name)).length===0){const b=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(b),console.warn(b)}return f}const ib=Qe(To(ux),To(px),dx);function Qx(e,o,t=!1){typeof e=="string"&&(e=Zh[e]);const r=Qe(e,ib);let n=0,i;const a=()=>{if(clearTimeout(i),!r.value){n=0;return}t&&(i=setTimeout(a,Math.max(1e3-n*250,150)),n++),o()};return we(r,a,{flush:"sync"})}function e2(e,o){return Zw(e,t=>{ib.value&&(t.repeat||o())})}function o2(){const e=Jx();new Map(e.map(t=>[t.key,t])).forEach(t=>{t.fn&&Qx(t.key,t.fn,t.autoRepeat)}),e2("f",()=>Jh.toggle())}const t2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r2=p("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),n2=[r2];function i2(e,o){return A(),X("svg",t2,n2)}const a2={name:"carbon-close",render:i2};function xc(e,o=""){var n,i;const t=["slidev-page",o],r=(i=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:i.no;return r!=null&&t.push(`slidev-page-${r}`),t.filter(Boolean).join(" ")}const l2=ae({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const o=e;Y(ne);const t=H(),r=zy(t),n=P(()=>o.width?o.width:r.width.value),i=P(()=>o.width?o.width/Xt:r.height.value);o.width&&Rr(()=>{t.value&&(t.value.style.width=`${n.value}px`,t.value.style.height=`${i.value}px`)});const a=P(()=>n.value/i.value),l=P(()=>o.scale&&!sn.value?o.scale:a.value<Xt?n.value/Yt:i.value*Xt/Yt),s=P(()=>({height:`${bc}px`,width:`${Yt}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),c=P(()=>({"select-none":!Pe.selectable,"slidev-code-line-numbers":Pe.lineNumbers}));return Po(wh,l),(d,f)=>(A(),X("div",{id:"slide-container",ref_key:"root",ref:t,class:qe(S(c))},[p("div",{id:"slide-content",style:no(S(s))},[ao(d.$slots,"default")],4),ao(d.$slots,"controls")],2))}});const le=(e,o)=>{const t=e.__vccOpts||e;for(const[r,n]of o)t[r]=n;return t},ab=le(l2,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),_c=ae({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:o}){const t=dt(e,"clicks",o),r=dt(e,"clicksElements",o),n=dt(e,"clicksDisabled",o),i=dt(e,"clicksOrderMap",o);r.value.length=0,Po(ow,e.route),Po(tw,e.context),Po(Rn,t),Po(jn,n),Po(kr,r),Po(as,i)},render(){var e,o;return this.$props.is?oo(this.$props.is):(o=(e=this.$slots)==null?void 0:e.default)==null?void 0:o.call(e)}}),s2=["innerHTML"],c2=ae({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return Y(ne),(o,t)=>S(ka)[e.page]?(A(),X("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:S(ka)[e.page]},null,8,s2)):ve("v-if",!0)}}),lb=le(c2,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),d2=Object.freeze(Object.defineProperty({__proto__:null,default:lb},Symbol.toStringTag,{value:"Module"})),f2={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},u2=["onClick"],p2=ae({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:o}){const t=e;Y(ne);const r=dt(t,"modelValue",o);function n(){r.value=!1}function i(h){cn(h),n()}function a(h){return h===Fo.value}const l=bs.smaller("xs"),s=bs.smaller("sm"),c=4*16*2,d=2*16,f=P(()=>l.value?Cr.width.value-c:s.value?(Cr.width.value-c-d)/2:300),u=P(()=>Math.floor((Cr.width.value-c)/(f.value+d)));return Rr(()=>{Fo.value=Ve.value,yc.value=u.value}),(h,b)=>{const g=a2;return A(),X(Ce,null,[ki(p("div",f2,[p("div",{class:"grid gap-y-4 gap-x-8 w-full",style:no(`grid-template-columns: repeat(auto-fit,minmax(${S(f)}px,1fr))`)},[(A(!0),X(Ce,null,dn(S(Xe).slice(0,-1),(m,k)=>(A(),X("div",{key:m.path,class:"relative"},[p("div",{class:qe(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(k+1),"border-gray-400":!a(k+1)}]),style:no(S(gc)),onClick:w=>i(+m.path)},[(A(),ee(ab,{key:m.path,width:S(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:ke(()=>[m!=null&&m.component?(A(),ee(S(_c),{key:0,is:m.component,"clicks-disabled":!0,class:qe(S(xc)(m)),route:m,context:"overview"},null,8,["is","class","route"])):ve("v-if",!0),re(lb,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,u2),p("div",{class:"absolute top-0 opacity-50",style:no(`left: ${S(f)+5}px`)},ot(k+1),5)]))),128))],4)],512),[[ch,S(r)]]),S(r)?(A(),X("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:n},[re(g)])):ve("v-if",!0)],64)}}});const h2=le(p2,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),b2="/presentation/assets/logo-b72bde5d.png",g2={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},m2=ae({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:o}){const t=e;Y(ne);const r=dt(t,"modelValue",o);function n(){r.value=!1}return(i,a)=>(A(),ee(Fp,null,[S(r)?(A(),X("div",g2,[p("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>n())}),p("div",{class:qe(["m-auto rounded-md bg-main shadow",t.class]),"dark:border":"~ main"},[ao(i.$slots,"default")],2)])):ve("v-if",!0)],1024))}}),v2=le(m2,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),k2={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},w2=["innerHTML"],y2=p("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[p("div",{class:"flex gap-1 children:my-auto"},[p("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),p("img",{class:"w-5 h-5",src:b2,alt:"Slidev"}),p("div",{style:{color:"#2082A6"}},[p("b",null,"Sli"),F("dev ")])])],-1),x2=ae({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:o}){const t=e;Y(ne);const r=dt(t,"modelValue",o),n=P(()=>typeof Pe.info=="string");return(i,a)=>(A(),ee(v2,{modelValue:S(r),"onUpdate:modelValue":a[0]||(a[0]=l=>Fe(r)?r.value=l:null),class:"px-6 py-4"},{default:ke(()=>[p("div",k2,[S(n)?(A(),X("div",{key:0,class:"mb-4",innerHTML:S(Pe).info},null,8,w2)):ve("v-if",!0),y2])]),_:1},8,["modelValue"]))}});const _2=le(x2,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function $t(e){return Array.isArray?Array.isArray(e):db(e)==="[object Array]"}const O2=1/0;function S2(e){if(typeof e=="string")return e;let o=e+"";return o=="0"&&1/e==-O2?"-0":o}function z2(e){return e==null?"":S2(e)}function ut(e){return typeof e=="string"}function sb(e){return typeof e=="number"}function L2(e){return e===!0||e===!1||E2(e)&&db(e)=="[object Boolean]"}function cb(e){return typeof e=="object"}function E2(e){return cb(e)&&e!==null}function Co(e){return e!=null}function Ll(e){return!e.trim().length}function db(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const T2="Incorrect 'index' type",A2=e=>`Invalid value for key ${e}`,P2=e=>`Pattern length exceeds max of ${e}.`,C2=e=>`Missing ${e} property in key`,F2=e=>`Property 'weight' in key '${e}' must be a positive integer`,Of=Object.prototype.hasOwnProperty;class $2{constructor(o){this._keys=[],this._keyMap={};let t=0;o.forEach(r=>{let n=fb(r);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(r=>{r.weight/=t})}get(o){return this._keyMap[o]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function fb(e){let o=null,t=null,r=null,n=1,i=null;if(ut(e)||$t(e))r=e,o=Sf(e),t=ws(e);else{if(!Of.call(e,"name"))throw new Error(C2("name"));const a=e.name;if(r=a,Of.call(e,"weight")&&(n=e.weight,n<=0))throw new Error(F2(a));o=Sf(a),t=ws(a),i=e.getFn}return{path:o,id:t,weight:n,src:r,getFn:i}}function Sf(e){return $t(e)?e:e.split(".")}function ws(e){return $t(e)?e.join("."):e}function I2(e,o){let t=[],r=!1;const n=(i,a,l)=>{if(Co(i))if(!a[l])t.push(i);else{let s=a[l];const c=i[s];if(!Co(c))return;if(l===a.length-1&&(ut(c)||sb(c)||L2(c)))t.push(z2(c));else if($t(c)){r=!0;for(let d=0,f=c.length;d<f;d+=1)n(c[d],a,l+1)}else a.length&&n(c,a,l+1)}};return n(e,ut(o)?o.split("."):o,0),r?t:t[0]}const N2={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},R2={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,o)=>e.score===o.score?e.idx<o.idx?-1:1:e.score<o.score?-1:1},j2={location:0,threshold:.6,distance:100},M2={useExtendedSearch:!1,getFn:I2,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var pe={...R2,...N2,...j2,...M2};const D2=/[^ ]+/g;function K2(e=1,o=3){const t=new Map,r=Math.pow(10,o);return{get(n){const i=n.match(D2).length;if(t.has(i))return t.get(i);const a=1/Math.pow(i,.5*e),l=parseFloat(Math.round(a*r)/r);return t.set(i,l),l},clear(){t.clear()}}}class Oc{constructor({getFn:o=pe.getFn,fieldNormWeight:t=pe.fieldNormWeight}={}){this.norm=K2(t,3),this.getFn=o,this.isCreated=!1,this.setIndexRecords()}setSources(o=[]){this.docs=o}setIndexRecords(o=[]){this.records=o}setKeys(o=[]){this.keys=o,this._keysMap={},o.forEach((t,r)=>{this._keysMap[t.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ut(this.docs[0])?this.docs.forEach((o,t)=>{this._addString(o,t)}):this.docs.forEach((o,t)=>{this._addObject(o,t)}),this.norm.clear())}add(o){const t=this.size();ut(o)?this._addString(o,t):this._addObject(o,t)}removeAt(o){this.records.splice(o,1);for(let t=o,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(o,t){return o[this._keysMap[t]]}size(){return this.records.length}_addString(o,t){if(!Co(o)||Ll(o))return;let r={v:o,i:t,n:this.norm.get(o)};this.records.push(r)}_addObject(o,t){let r={i:t,$:{}};this.keys.forEach((n,i)=>{let a=n.getFn?n.getFn(o):this.getFn(o,n.path);if(Co(a)){if($t(a)){let l=[];const s=[{nestedArrIndex:-1,value:a}];for(;s.length;){const{nestedArrIndex:c,value:d}=s.pop();if(Co(d))if(ut(d)&&!Ll(d)){let f={v:d,i:c,n:this.norm.get(d)};l.push(f)}else $t(d)&&d.forEach((f,u)=>{s.push({nestedArrIndex:u,value:f})})}r.$[i]=l}else if(ut(a)&&!Ll(a)){let l={v:a,n:this.norm.get(a)};r.$[i]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function ub(e,o,{getFn:t=pe.getFn,fieldNormWeight:r=pe.fieldNormWeight}={}){const n=new Oc({getFn:t,fieldNormWeight:r});return n.setKeys(e.map(fb)),n.setSources(o),n.create(),n}function B2(e,{getFn:o=pe.getFn,fieldNormWeight:t=pe.fieldNormWeight}={}){const{keys:r,records:n}=e,i=new Oc({getFn:o,fieldNormWeight:t});return i.setKeys(r),i.setIndexRecords(n),i}function Ki(e,{errors:o=0,currentLocation:t=0,expectedLocation:r=0,distance:n=pe.distance,ignoreLocation:i=pe.ignoreLocation}={}){const a=o/e.length;if(i)return a;const l=Math.abs(r-t);return n?a+l/n:l?1:a}function U2(e=[],o=pe.minMatchCharLength){let t=[],r=-1,n=-1,i=0;for(let a=e.length;i<a;i+=1){let l=e[i];l&&r===-1?r=i:!l&&r!==-1&&(n=i-1,n-r+1>=o&&t.push([r,n]),r=-1)}return e[i-1]&&i-r>=o&&t.push([r,i-1]),t}const yr=32;function H2(e,o,t,{location:r=pe.location,distance:n=pe.distance,threshold:i=pe.threshold,findAllMatches:a=pe.findAllMatches,minMatchCharLength:l=pe.minMatchCharLength,includeMatches:s=pe.includeMatches,ignoreLocation:c=pe.ignoreLocation}={}){if(o.length>yr)throw new Error(P2(yr));const d=o.length,f=e.length,u=Math.max(0,Math.min(r,f));let h=i,b=u;const g=l>1||s,m=g?Array(f):[];let k;for(;(k=e.indexOf(o,b))>-1;){let $=Ki(o,{currentLocation:k,expectedLocation:u,distance:n,ignoreLocation:c});if(h=Math.min($,h),b=k+d,g){let O=0;for(;O<d;)m[k+O]=1,O+=1}}b=-1;let w=[],y=1,x=d+f;const z=1<<d-1;for(let $=0;$<d;$+=1){let O=0,T=x;for(;O<T;)Ki(o,{errors:$,currentLocation:u+T,expectedLocation:u,distance:n,ignoreLocation:c})<=h?O=T:x=T,T=Math.floor((x-O)/2+O);x=T;let U=Math.max(1,u-T+1),Z=a?f:Math.min(u+T,f)+d,D=Array(Z+2);D[Z+1]=(1<<$)-1;for(let de=Z;de>=U;de-=1){let ye=de-1,Ee=t[e.charAt(ye)];if(g&&(m[ye]=+!!Ee),D[de]=(D[de+1]<<1|1)&Ee,$&&(D[de]|=(w[de+1]|w[de])<<1|1|w[de+1]),D[de]&z&&(y=Ki(o,{errors:$,currentLocation:ye,expectedLocation:u,distance:n,ignoreLocation:c}),y<=h)){if(h=y,b=ye,b<=u)break;U=Math.max(1,2*u-b)}}if(Ki(o,{errors:$+1,currentLocation:u,expectedLocation:u,distance:n,ignoreLocation:c})>h)break;w=D}const L={isMatch:b>=0,score:Math.max(.001,y)};if(g){const $=U2(m,l);$.length?s&&(L.indices=$):L.isMatch=!1}return L}function q2(e){let o={};for(let t=0,r=e.length;t<r;t+=1){const n=e.charAt(t);o[n]=(o[n]||0)|1<<r-t-1}return o}class pb{constructor(o,{location:t=pe.location,threshold:r=pe.threshold,distance:n=pe.distance,includeMatches:i=pe.includeMatches,findAllMatches:a=pe.findAllMatches,minMatchCharLength:l=pe.minMatchCharLength,isCaseSensitive:s=pe.isCaseSensitive,ignoreLocation:c=pe.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:n,includeMatches:i,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:s,ignoreLocation:c},this.pattern=s?o:o.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(u,h)=>{this.chunks.push({pattern:u,alphabet:q2(u),startIndex:h})},f=this.pattern.length;if(f>yr){let u=0;const h=f%yr,b=f-h;for(;u<b;)d(this.pattern.substr(u,yr),u),u+=yr;if(h){const g=f-yr;d(this.pattern.substr(g),g)}}else d(this.pattern,0)}searchIn(o){const{isCaseSensitive:t,includeMatches:r}=this.options;if(t||(o=o.toLowerCase()),this.pattern===o){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,o.length-1]]),b}const{location:n,distance:i,threshold:a,findAllMatches:l,minMatchCharLength:s,ignoreLocation:c}=this.options;let d=[],f=0,u=!1;this.chunks.forEach(({pattern:b,alphabet:g,startIndex:m})=>{const{isMatch:k,score:w,indices:y}=H2(o,b,g,{location:n+m,distance:i,threshold:a,findAllMatches:l,minMatchCharLength:s,includeMatches:r,ignoreLocation:c});k&&(u=!0),f+=w,k&&y&&(d=[...d,...y])});let h={isMatch:u,score:u?f/this.chunks.length:1};return u&&r&&(h.indices=d),h}}class lr{constructor(o){this.pattern=o}static isMultiMatch(o){return zf(o,this.multiRegex)}static isSingleMatch(o){return zf(o,this.singleRegex)}search(){}}function zf(e,o){const t=e.match(o);return t?t[1]:null}class V2 extends lr{constructor(o){super(o)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(o){const t=o===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class W2 extends lr{constructor(o){super(o)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(o){const r=o.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,o.length-1]}}}class G2 extends lr{constructor(o){super(o)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(o){const t=o.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class X2 extends lr{constructor(o){super(o)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(o){const t=!o.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,o.length-1]}}}class Y2 extends lr{constructor(o){super(o)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(o){const t=o.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[o.length-this.pattern.length,o.length-1]}}}class Z2 extends lr{constructor(o){super(o)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(o){const t=!o.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,o.length-1]}}}class hb extends lr{constructor(o,{location:t=pe.location,threshold:r=pe.threshold,distance:n=pe.distance,includeMatches:i=pe.includeMatches,findAllMatches:a=pe.findAllMatches,minMatchCharLength:l=pe.minMatchCharLength,isCaseSensitive:s=pe.isCaseSensitive,ignoreLocation:c=pe.ignoreLocation}={}){super(o),this._bitapSearch=new pb(o,{location:t,threshold:r,distance:n,includeMatches:i,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:s,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(o){return this._bitapSearch.searchIn(o)}}class bb extends lr{constructor(o){super(o)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(o){let t=0,r;const n=[],i=this.pattern.length;for(;(r=o.indexOf(this.pattern,t))>-1;)t=r+i,n.push([r,t-1]);const a=!!n.length;return{isMatch:a,score:a?0:1,indices:n}}}const ys=[V2,bb,G2,X2,Z2,Y2,W2,hb],Lf=ys.length,J2=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Q2="|";function e5(e,o={}){return e.split(Q2).map(t=>{let r=t.trim().split(J2).filter(i=>i&&!!i.trim()),n=[];for(let i=0,a=r.length;i<a;i+=1){const l=r[i];let s=!1,c=-1;for(;!s&&++c<Lf;){const d=ys[c];let f=d.isMultiMatch(l);f&&(n.push(new d(f,o)),s=!0)}if(!s)for(c=-1;++c<Lf;){const d=ys[c];let f=d.isSingleMatch(l);if(f){n.push(new d(f,o));break}}}return n})}const o5=new Set([hb.type,bb.type]);class t5{constructor(o,{isCaseSensitive:t=pe.isCaseSensitive,includeMatches:r=pe.includeMatches,minMatchCharLength:n=pe.minMatchCharLength,ignoreLocation:i=pe.ignoreLocation,findAllMatches:a=pe.findAllMatches,location:l=pe.location,threshold:s=pe.threshold,distance:c=pe.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:r,minMatchCharLength:n,findAllMatches:a,ignoreLocation:i,location:l,threshold:s,distance:c},this.pattern=t?o:o.toLowerCase(),this.query=e5(this.pattern,this.options)}static condition(o,t){return t.useExtendedSearch}searchIn(o){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;o=n?o:o.toLowerCase();let i=0,a=[],l=0;for(let s=0,c=t.length;s<c;s+=1){const d=t[s];a.length=0,i=0;for(let f=0,u=d.length;f<u;f+=1){const h=d[f],{isMatch:b,indices:g,score:m}=h.search(o);if(b){if(i+=1,l+=m,r){const k=h.constructor.type;o5.has(k)?a=[...a,...g]:a.push(g)}}else{l=0,i=0,a.length=0;break}}if(i){let f={isMatch:!0,score:l/i};return r&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const xs=[];function r5(...e){xs.push(...e)}function _s(e,o){for(let t=0,r=xs.length;t<r;t+=1){let n=xs[t];if(n.condition(e,o))return new n(e,o)}return new pb(e,o)}const _a={AND:"$and",OR:"$or"},Os={PATH:"$path",PATTERN:"$val"},Ss=e=>!!(e[_a.AND]||e[_a.OR]),n5=e=>!!e[Os.PATH],i5=e=>!$t(e)&&cb(e)&&!Ss(e),Ef=e=>({[_a.AND]:Object.keys(e).map(o=>({[o]:e[o]}))});function gb(e,o,{auto:t=!0}={}){const r=n=>{let i=Object.keys(n);const a=n5(n);if(!a&&i.length>1&&!Ss(n))return r(Ef(n));if(i5(n)){const s=a?n[Os.PATH]:i[0],c=a?n[Os.PATTERN]:n[s];if(!ut(c))throw new Error(A2(s));const d={keyId:ws(s),pattern:c};return t&&(d.searcher=_s(c,o)),d}let l={children:[],operator:i[0]};return i.forEach(s=>{const c=n[s];$t(c)&&c.forEach(d=>{l.children.push(r(d))})}),l};return Ss(e)||(e=Ef(e)),r(e)}function a5(e,{ignoreFieldNorm:o=pe.ignoreFieldNorm}){e.forEach(t=>{let r=1;t.matches.forEach(({key:n,norm:i,score:a})=>{const l=n?n.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(o?1:i))}),t.score=r})}function l5(e,o){const t=e.matches;o.matches=[],Co(t)&&t.forEach(r=>{if(!Co(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let a={indices:n,value:i};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),o.matches.push(a)})}function s5(e,o){o.score=e.score}function c5(e,o,{includeMatches:t=pe.includeMatches,includeScore:r=pe.includeScore}={}){const n=[];return t&&n.push(l5),r&&n.push(s5),e.map(i=>{const{idx:a}=i,l={item:o[a],refIndex:a};return n.length&&n.forEach(s=>{s(i,l)}),l})}class un{constructor(o,t={},r){this.options={...pe,...t},this.options.useExtendedSearch,this._keyStore=new $2(this.options.keys),this.setCollection(o,r)}setCollection(o,t){if(this._docs=o,t&&!(t instanceof Oc))throw new Error(T2);this._myIndex=t||ub(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(o){Co(o)&&(this._docs.push(o),this._myIndex.add(o))}remove(o=()=>!1){const t=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];o(i,r)&&(this.removeAt(r),r-=1,n-=1,t.push(i))}return t}removeAt(o){this._docs.splice(o,1),this._myIndex.removeAt(o)}getIndex(){return this._myIndex}search(o,{limit:t=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:a,ignoreFieldNorm:l}=this.options;let s=ut(o)?ut(this._docs[0])?this._searchStringList(o):this._searchObjectList(o):this._searchLogical(o);return a5(s,{ignoreFieldNorm:l}),i&&s.sort(a),sb(t)&&t>-1&&(s=s.slice(0,t)),c5(s,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(o){const t=_s(o,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:a,n:l})=>{if(!Co(i))return;const{isMatch:s,score:c,indices:d}=t.searchIn(i);s&&n.push({item:i,idx:a,matches:[{score:c,value:i,norm:l,indices:d}]})}),n}_searchLogical(o){const t=gb(o,this.options),r=(l,s,c)=>{if(!l.children){const{keyId:f,searcher:u}=l,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(s,f),searcher:u});return h&&h.length?[{idx:c,item:s,matches:h}]:[]}const d=[];for(let f=0,u=l.children.length;f<u;f+=1){const h=l.children[f],b=r(h,s,c);if(b.length)d.push(...b);else if(l.operator===_a.AND)return[]}return d},n=this._myIndex.records,i={},a=[];return n.forEach(({$:l,i:s})=>{if(Co(l)){let c=r(t,l,s);c.length&&(i[s]||(i[s]={idx:s,item:l,matches:[]},a.push(i[s])),c.forEach(({matches:d})=>{i[s].matches.push(...d)}))}}),a}_searchObjectList(o){const t=_s(o,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:a,i:l})=>{if(!Co(a))return;let s=[];r.forEach((c,d)=>{s.push(...this._findMatches({key:c,value:a[d],searcher:t}))}),s.length&&i.push({idx:l,item:a,matches:s})}),i}_findMatches({key:o,value:t,searcher:r}){if(!Co(t))return[];let n=[];if($t(t))t.forEach(({v:i,i:a,n:l})=>{if(!Co(i))return;const{isMatch:s,score:c,indices:d}=r.searchIn(i);s&&n.push({score:c,key:o,value:i,idx:a,norm:l,indices:d})});else{const{v:i,n:a}=t,{isMatch:l,score:s,indices:c}=r.searchIn(i);l&&n.push({score:s,key:o,value:i,norm:a,indices:c})}return n}}un.version="6.6.2";un.createIndex=ub;un.parseIndex=B2;un.config=pe;un.parseQuery=gb;r5(t5);const d5={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},f5=["value","disabled","onKeydown"],u5=["border","onClick"],p5={"w-4":"","text-right":"",op50:"","text-sm":""},h5=ae({__name:"Goto",setup(e){Y(ne);const o=H(),t=H(),r=H(),n=H(),i=H(""),a=H(0);function l(y){return y!=null}const s=P(()=>new un(Xe.map(y=>{var x;return(x=y.meta)==null?void 0:x.slide}).filter(l),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),c=P(()=>i.value.startsWith("/")?i.value.substring(1):i.value),d=P(()=>s.value.search(c.value).map(y=>y.item)),f=P(()=>!!d.value.length);function u(){if(f.value){const y=d.value.at(a.value||0);y&&cn(y.no)}h()}function h(){i.value="",Zr.value=!1}function b(y){y.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),m()}function g(y){y.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),m()}function m(){var x;const y=(x=n.value)==null?void 0:x[a.value];y&&r.value&&(y.offsetTop+y.offsetHeight>r.value.offsetHeight+r.value.scrollTop?r.value.scrollTo({behavior:"smooth",top:y.offsetTop+y.offsetHeight-r.value.offsetHeight+1}):y.offsetTop<r.value.scrollTop&&r.value.scrollTo({behavior:"smooth",top:y.offsetTop}))}function k(y){a.value=0,i.value=y.target.value}function w(y){cn(y),h()}return we(Zr,async y=>{var x;y?(i.value="",a.value=0,setTimeout(()=>{var z;return(z=t.value)==null?void 0:z.focus()},0)):(x=t.value)==null||x.blur()}),we(Jt,()=>{var y;(y=o.value)!=null&&y.contains(Jt.value)||h()}),(y,x)=>(A(),X("div",{id:"slidev-goto-dialog",ref_key:"container",ref:o,class:qe(["fixed right-5 transition-all",S(Zr)?"top-5":"-top-20"])},[p("div",d5,[p("input",{ref_key:"input",ref:t,value:i.value,type:"text",disabled:!S(Zr),class:qe(["outline-none bg-transparent",{"text-red-400":!S(f)&&i.value}]),placeholder:"Goto...",onKeydown:[$i(u,["enter"]),$i(h,["escape"]),$i(b,["down"]),$i(g,["up"])],onInput:k},null,42,f5)]),S(d).length>0?(A(),X("ul",{key:0,ref_key:"list",ref:r,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(A(!0),X(Ce,null,dn(S(d),(z,L)=>(A(),X("li",{ref_for:!0,ref_key:"items",ref:n,key:z.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:L===0?"":"t main",class:qe(a.value===L?"bg-active op100":"op80"),onClick:tk($=>w(z.no),["stop"])},[p("div",p5,ot(z.no),1),F(" "+ot(z.title),1)],10,u5))),128))],512)):ve("v-if",!0)],2))}});const b5=le(h5,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),g5=ae({__name:"Controls",setup(e){Y(ne);const o=bt(),t=bt();return(r,n)=>(A(),X(Ce,null,[re(h2,{modelValue:S(mo),"onUpdate:modelValue":n[0]||(n[0]=i=>Fe(mo)?mo.value=i:null)},null,8,["modelValue"]),re(b5),S(o)?(A(),ee(S(o),{key:0})):ve("v-if",!0),S(t)?(A(),ee(S(t),{key:1,modelValue:S(Ol),"onUpdate:modelValue":n[1]||(n[1]=i=>Fe(Ol)?Ol.value=i:null)},null,8,["modelValue"])):ve("v-if",!0),S(Pe).info?(A(),ee(_2,{key:2,modelValue:S(Kn),"onUpdate:modelValue":n[2]||(n[2]=i=>Fe(Kn)?Kn.value=i:null)},null,8,["modelValue"])):ve("v-if",!0)],64))}}),m5=le(g5,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),v5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k5=p("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),w5=[k5];function y5(e,o){return A(),X("svg",v5,w5)}const x5={name:"carbon-settings-adjust",render:y5},_5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},O5=p("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),S5=p("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),z5=[O5,S5];function L5(e,o){return A(),X("svg",_5,z5)}const E5={name:"carbon-information",render:L5},T5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A5=p("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),P5=[A5];function C5(e,o){return A(),X("svg",T5,P5)}const F5={name:"carbon-download",render:C5},$5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I5=p("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),N5=p("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),R5=[I5,N5];function j5(e,o){return A(),X("svg",$5,R5)}const M5={name:"carbon-user-speaker",render:j5},D5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K5=p("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),B5=p("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),U5=[K5,B5];function H5(e,o){return A(),X("svg",D5,U5)}const q5={name:"carbon-presentation-file",render:H5},V5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W5=p("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),G5=[W5];function X5(e,o){return A(),X("svg",V5,G5)}const Y5={name:"carbon-pen",render:X5},Z5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},J5=p("g",{fill:"currentColor"},[p("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),p("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),Q5=[J5];function e_(e,o){return A(),X("svg",Z5,Q5)}const o_={name:"ph-cursor-duotone",render:e_},t_={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},r_=p("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),n_=[r_];function i_(e,o){return A(),X("svg",t_,n_)}const mb={name:"ph-cursor-fill",render:i_},a_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l_=p("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),s_=[l_];function c_(e,o){return A(),X("svg",a_,s_)}const d_={name:"carbon-sun",render:c_},f_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u_=p("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),p_=[u_];function h_(e,o){return A(),X("svg",f_,p_)}const b_={name:"carbon-moon",render:h_},g_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m_=p("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),v_=[m_];function k_(e,o){return A(),X("svg",g_,v_)}const w_={name:"carbon-apps",render:k_},y_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x_=p("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),__=[x_];function O_(e,o){return A(),X("svg",y_,__)}const S_={name:"carbon-arrow-right",render:O_},z_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L_=p("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),E_=[L_];function T_(e,o){return A(),X("svg",z_,E_)}const A_={name:"carbon-arrow-left",render:T_},P_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C_=p("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),F_=[C_];function $_(e,o){return A(),X("svg",P_,F_)}const I_={name:"carbon-maximize",render:$_},N_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R_=p("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),j_=[R_];function M_(e,o){return A(),X("svg",N_,j_)}const D_={name:"carbon-minimize",render:M_},K_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B_=p("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),U_=[B_];function H_(e,o){return A(),X("svg",K_,U_)}const q_={name:"carbon-checkmark",render:H_},V_={class:"select-list"},W_={class:"title"},G_={class:"items"},X_=["onClick"],Y_=ae({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:o}){const t=e;Y(ne);const r=dt(t,"modelValue",o,{passive:!0});return(n,i)=>{const a=q_;return A(),X("div",V_,[p("div",W_,ot(e.title),1),p("div",G_,[(A(!0),X(Ce,null,dn(e.items,l=>(A(),X("div",{key:l.value,class:qe(["item",{active:S(r)===l.value}]),onClick:()=>{var s;r.value=l.value,(s=l.onClick)==null||s.call(l)}},[re(a,{class:qe(["text-green-500",{"opacity-0":S(r)!==l.value}])},null,8,["class"]),F(" "+ot(l.display||l.value),1)],10,X_))),128))])])}}});const Z_=le(Y_,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),J_={class:"text-sm"},Q_=ae({__name:"Settings",setup(e){Y(ne);const o=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,r)=>(A(),X("div",J_,[re(Z_,{modelValue:S(Qi),"onUpdate:modelValue":r[0]||(r[0]=n=>Fe(Qi)?Qi.value=n:null),title:"Scale",items:o},null,8,["modelValue"])]))}}),e4=le(Q_,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),o4={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},t4=ae({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:o}){const t=e;Y(ne);const r=dt(t,"modelValue",o,{passive:!0}),n=H();return Xw(n,()=>{r.value=!1}),(i,a)=>(A(),X("div",{ref_key:"el",ref:n,class:"flex relative"},[p("button",{class:qe({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>r.value=!S(r))},[ao(i.$slots,"button",{class:qe({disabled:e.disabled})})],2),(A(),ee(Fp,null,[S(r)?(A(),X("div",o4,[ao(i.$slots,"menu")])):ve("v-if",!0)],1024))],512))}}),r4=le(t4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),n4={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},i4={__name:"VerticalDivider",setup(e){return Y(ne),(o,t)=>(A(),X("div",n4))}},Bi=le(i4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),a4={render(){return[]}},l4={class:"slidev-icon-btn"},s4={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},c4={class:"my-auto"},d4={class:"opacity-50"},f4=ae({__name:"NavControls",props:{persist:{default:!1}},setup(e){const o=e;Y(ne);const t=bs.smaller("md"),{isFullscreen:r,toggle:n}=Jh,i=P(()=>Ls.value?`?password=${Ls.value}`:""),a=P(()=>`/presenter/${Ve.value}${i.value}`),l=P(()=>`/${Ve.value}${i.value}`),s=H();function c(){s.value&&Jt.value&&s.value.contains(Jt.value)&&Jt.value.blur()}const d=P(()=>o.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=bt(),u=bt();return Zt(()=>import("./DrawingControls-91a431c1.js"),[]).then(h=>u.value=h.default),(h,b)=>{const g=D_,m=I_,k=A_,w=S_,y=w_,x=b_,z=d_,L=mb,$=o_,O=Y5,T=q5,U=pa("RouterLink"),Z=M5,D=F5,be=E5,de=x5;return A(),X("nav",{ref_key:"root",ref:s,class:"flex flex-col"},[p("div",{class:qe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",S(d)]),onMouseleave:c},[S(zt)?ve("v-if",!0):(A(),X("button",{key:0,class:"slidev-icon-btn",onClick:b[0]||(b[0]=(...ye)=>S(n)&&S(n)(...ye))},[S(r)?(A(),ee(g,{key:0})):(A(),ee(m,{key:1}))])),p("button",{class:qe(["slidev-icon-btn",{disabled:!S(mS)}]),onClick:b[1]||(b[1]=(...ye)=>S(er)&&S(er)(...ye))},[re(k)],2),p("button",{class:qe(["slidev-icon-btn",{disabled:!S(gS)}]),title:"Next",onClick:b[2]||(b[2]=(...ye)=>S(Qt)&&S(Qt)(...ye))},[re(w)],2),S(zt)?ve("v-if",!0):(A(),X("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:b[3]||(b[3]=ye=>S(Qh)())},[re(y)])),S(ks)?ve("v-if",!0):(A(),X("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:b[4]||(b[4]=ye=>S(nb)())},[S(wc)?(A(),ee(x,{key:0})):(A(),ee(z,{key:1}))])),re(Bi),S(zt)?ve("v-if",!0):(A(),X(Ce,{key:3},[!S(Oo)&&!S(t)&&S(f)?(A(),X(Ce,{key:0},[re(S(f)),re(Bi)],64)):ve("v-if",!0),S(Oo)?(A(),X("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:b[5]||(b[5]=ye=>Sl.value=!S(Sl))},[S(Sl)?(A(),ee(L,{key:0})):(A(),ee($,{key:1,class:"opacity-50"}))])):ve("v-if",!0)],64)),(!S(Pe).drawings.presenterOnly||S(Oo))&&!S(zt)?(A(),X(Ce,{key:4},[p("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:b[6]||(b[6]=ye=>ft.value=!S(ft))},[re(O),S(ft)?(A(),X("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:no({background:S(Or).color})},null,4)):ve("v-if",!0)]),re(Bi)],64)):ve("v-if",!0),S(zt)?ve("v-if",!0):(A(),X(Ce,{key:5},[S(Oo)?(A(),ee(U,{key:0,to:S(l),class:"slidev-icon-btn",title:"Play Mode"},{default:ke(()=>[re(T)]),_:1},8,["to"])):ve("v-if",!0),S(fS)?(A(),ee(U,{key:1,to:S(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:ke(()=>[re(Z)]),_:1},8,["to"])):ve("v-if",!0),ve("v-if",!0)],64)),(A(),X(Ce,{key:6},[S(Pe).download?(A(),X("button",{key:0,class:"slidev-icon-btn",onClick:b[8]||(b[8]=(...ye)=>S(Es)&&S(Es)(...ye))},[re(D)])):ve("v-if",!0)],64)),!S(Oo)&&S(Pe).info&&!S(zt)?(A(),X("button",{key:7,class:"slidev-icon-btn",onClick:b[9]||(b[9]=ye=>Kn.value=!S(Kn))},[re(be)])):ve("v-if",!0),!S(Oo)&&!S(zt)?(A(),ee(r4,{key:8},{button:ke(()=>[p("button",l4,[re(de)])]),menu:ke(()=>[re(e4)]),_:1})):ve("v-if",!0),S(zt)?ve("v-if",!0):(A(),ee(Bi,{key:9})),p("div",s4,[p("div",c4,[F(ot(S(Ve))+" ",1),p("span",d4,"/ "+ot(S(uS)),1)])]),re(S(a4))],34)],512)}}}),u4=le(f4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),vb={render(){return[]}},kb={render(){return[]}},p4={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},h4=ae({__name:"PresenterMouse",setup(e){return Y(ne),(o,t)=>{const r=mb;return S(wl).cursor?(A(),X("div",p4,[re(r,{class:"absolute",style:no({left:`${S(wl).cursor.x}%`,top:`${S(wl).cursor.y}%`})},null,8,["style"])])):ve("v-if",!0)}}}),b4=le(h4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),g4=ae({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){Y(ne),we(vo,()=>{var r,n;(r=vo.value)!=null&&r.meta&&vo.value.meta.preload!==!1&&(vo.value.meta.__preloaded=!0),(n=El.value)!=null&&n.meta&&El.value.meta.preload!==!1&&(El.value.meta.__preloaded=!0)},{immediate:!0});const o=bt();Zt(()=>import("./DrawingLayer-4fe701e9.js"),[]).then(r=>o.value=r.default);const t=P(()=>Xe.filter(r=>{var n;return((n=r.meta)==null?void 0:n.__preloaded)||r===vo.value}));return(r,n)=>(A(),X(Ce,null,[ve(" Global Bottom "),re(S(kb)),ve(" Slides "),re(X0,nn(S(wS),{id:"slideshow",tag:"div"}),{default:ke(()=>[(A(!0),X(Ce,null,dn(S(t),i=>{var a;return ki((A(),ee(S(_c),{key:i.path,is:i==null?void 0:i.component,clicks:i===S(vo)?S(Bo):0,"clicks-elements":((a=i.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:qe(S(xc)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ch,i===S(vo)]])}),128))]),_:1},16),ve(" Global Top "),re(S(vb)),S(o)?(A(),ee(S(o),{key:0})):ve("v-if",!0),S(Oo)?ve("v-if",!0):(A(),ee(b4,{key:1}))],64))}});const m4=le(g4,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),v4=ae({__name:"PrintStyle",setup(e){Y(ne);function o(t,{slots:r}){if(r.default)return oo("style",r.default())}return(t,r)=>(A(),ee(o,null,{default:ke(()=>[F(" @page { size: "+ot(S(Yt))+"px "+ot(S(bc))+"px; margin: 0px; } ",1)]),_:1}))}}),wb=le(v4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),k4=ae({__name:"Play",setup(e){Y(ne),o2();const o=H();function t(i){var a;pf.value||((a=i.target)==null?void 0:a.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?Qt():er())}yS(o);const r=P(()=>fx.value||pf.value);bt();const n=bt();return Zt(()=>import("./DrawingControls-91a431c1.js"),[]).then(i=>n.value=i.default),(i,a)=>(A(),X(Ce,null,[S(sn)?(A(),ee(wb,{key:0})):ve("v-if",!0),p("div",{id:"page-root",ref_key:"root",ref:o,class:"grid grid-cols-[1fr_max-content]",style:no(S(gc))},[re(ab,{class:"w-full h-full",style:no({background:"var(--slidev-slide-container-background, black)"}),width:S(sn)?S(Cr).width.value:void 0,scale:S(Qi),onPointerdown:t},{default:ke(()=>[re(m4,{context:"slide"})]),controls:ke(()=>[p("div",{class:qe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[S(r)?"opacity-100 right-0":"opacity-0 p-2",S(ni)?"pointer-events-none":""]])},[re(u4,{class:"m-auto",persist:S(r)},null,8,["persist"])],2),!S(Pe).drawings.presenterOnly&&!S(zt)&&S(n)?(A(),ee(S(n),{key:0,class:"ml-0"})):ve("v-if",!0)]),_:1},8,["style","width","scale"]),ve("v-if",!0)],4),re(m5)],64))}}),w4=le(k4,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function yb(e){return typeof e>"u"||e===null}function y4(e){return typeof e=="object"&&e!==null}function x4(e){return Array.isArray(e)?e:yb(e)?[]:[e]}function _4(e,o){var t,r,n,i;if(o)for(i=Object.keys(o),t=0,r=i.length;t<r;t+=1)n=i[t],e[n]=o[n];return e}function O4(e,o){var t="",r;for(r=0;r<o;r+=1)t+=e;return t}function S4(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var z4=yb,L4=y4,E4=x4,T4=O4,A4=S4,P4=_4,Sc={isNothing:z4,isObject:L4,toArray:E4,repeat:T4,isNegativeZero:A4,extend:P4};function xb(e,o){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!o&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function ai(e,o){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=o,this.message=xb(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ai.prototype=Object.create(Error.prototype);ai.prototype.constructor=ai;ai.prototype.toString=function(o){return this.name+": "+xb(this,o)};var xr=ai,C4=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],F4=["scalar","sequence","mapping"];function $4(e){var o={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){o[String(r)]=t})}),o}function I4(e,o){if(o=o||{},Object.keys(o).forEach(function(t){if(C4.indexOf(t)===-1)throw new xr('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=o,this.tag=e,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(t){return t},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.representName=o.representName||null,this.defaultStyle=o.defaultStyle||null,this.multi=o.multi||!1,this.styleAliases=$4(o.styleAliases||null),F4.indexOf(this.kind)===-1)throw new xr('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var po=I4;function Tf(e,o){var t=[];return e[o].forEach(function(r){var n=t.length;t.forEach(function(i,a){i.tag===r.tag&&i.kind===r.kind&&i.multi===r.multi&&(n=a)}),t[n]=r}),t}function N4(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},o,t;function r(n){n.multi?(e.multi[n.kind].push(n),e.multi.fallback.push(n)):e[n.kind][n.tag]=e.fallback[n.tag]=n}for(o=0,t=arguments.length;o<t;o+=1)arguments[o].forEach(r);return e}function zs(e){return this.extend(e)}zs.prototype.extend=function(o){var t=[],r=[];if(o instanceof po)r.push(o);else if(Array.isArray(o))r=r.concat(o);else if(o&&(Array.isArray(o.implicit)||Array.isArray(o.explicit)))o.implicit&&(t=t.concat(o.implicit)),o.explicit&&(r=r.concat(o.explicit));else throw new xr("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(i){if(!(i instanceof po))throw new xr("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new xr("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new xr("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(i){if(!(i instanceof po))throw new xr("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(zs.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=Tf(n,"implicit"),n.compiledExplicit=Tf(n,"explicit"),n.compiledTypeMap=N4(n.compiledImplicit,n.compiledExplicit),n};var R4=zs,j4=new po("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),M4=new po("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),D4=new po("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),K4=new R4({explicit:[j4,M4,D4]});function B4(e){if(e===null)return!0;var o=e.length;return o===1&&e==="~"||o===4&&(e==="null"||e==="Null"||e==="NULL")}function U4(){return null}function H4(e){return e===null}var q4=new po("tag:yaml.org,2002:null",{kind:"scalar",resolve:B4,construct:U4,predicate:H4,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function V4(e){if(e===null)return!1;var o=e.length;return o===4&&(e==="true"||e==="True"||e==="TRUE")||o===5&&(e==="false"||e==="False"||e==="FALSE")}function W4(e){return e==="true"||e==="True"||e==="TRUE"}function G4(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var X4=new po("tag:yaml.org,2002:bool",{kind:"scalar",resolve:V4,construct:W4,predicate:G4,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Y4(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Z4(e){return 48<=e&&e<=55}function J4(e){return 48<=e&&e<=57}function Q4(e){if(e===null)return!1;var o=e.length,t=0,r=!1,n;if(!o)return!1;if(n=e[t],(n==="-"||n==="+")&&(n=e[++t]),n==="0"){if(t+1===o)return!0;if(n=e[++t],n==="b"){for(t++;t<o;t++)if(n=e[t],n!=="_"){if(n!=="0"&&n!=="1")return!1;r=!0}return r&&n!=="_"}if(n==="x"){for(t++;t<o;t++)if(n=e[t],n!=="_"){if(!Y4(e.charCodeAt(t)))return!1;r=!0}return r&&n!=="_"}if(n==="o"){for(t++;t<o;t++)if(n=e[t],n!=="_"){if(!Z4(e.charCodeAt(t)))return!1;r=!0}return r&&n!=="_"}}if(n==="_")return!1;for(;t<o;t++)if(n=e[t],n!=="_"){if(!J4(e.charCodeAt(t)))return!1;r=!0}return!(!r||n==="_")}function e3(e){var o=e,t=1,r;if(o.indexOf("_")!==-1&&(o=o.replace(/_/g,"")),r=o[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),o=o.slice(1),r=o[0]),o==="0")return 0;if(r==="0"){if(o[1]==="b")return t*parseInt(o.slice(2),2);if(o[1]==="x")return t*parseInt(o.slice(2),16);if(o[1]==="o")return t*parseInt(o.slice(2),8)}return t*parseInt(o,10)}function o3(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Sc.isNegativeZero(e)}var t3=new po("tag:yaml.org,2002:int",{kind:"scalar",resolve:Q4,construct:e3,predicate:o3,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),r3=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function n3(e){return!(e===null||!r3.test(e)||e[e.length-1]==="_")}function i3(e){var o,t;return o=e.replace(/_/g,"").toLowerCase(),t=o[0]==="-"?-1:1,"+-".indexOf(o[0])>=0&&(o=o.slice(1)),o===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:o===".nan"?NaN:t*parseFloat(o,10)}var a3=/^[-+]?[0-9]+e/;function l3(e,o){var t;if(isNaN(e))switch(o){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(o){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(o){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Sc.isNegativeZero(e))return"-0.0";return t=e.toString(10),a3.test(t)?t.replace("e",".e"):t}function s3(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Sc.isNegativeZero(e))}var c3=new po("tag:yaml.org,2002:float",{kind:"scalar",resolve:n3,construct:i3,predicate:s3,represent:l3,defaultStyle:"lowercase"}),d3=K4.extend({implicit:[q4,X4,t3,c3]}),f3=d3,_b=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ob=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function u3(e){return e===null?!1:_b.exec(e)!==null||Ob.exec(e)!==null}function p3(e){var o,t,r,n,i,a,l,s=0,c=null,d,f,u;if(o=_b.exec(e),o===null&&(o=Ob.exec(e)),o===null)throw new Error("Date resolve error");if(t=+o[1],r=+o[2]-1,n=+o[3],!o[4])return new Date(Date.UTC(t,r,n));if(i=+o[4],a=+o[5],l=+o[6],o[7]){for(s=o[7].slice(0,3);s.length<3;)s+="0";s=+s}return o[9]&&(d=+o[10],f=+(o[11]||0),c=(d*60+f)*6e4,o[9]==="-"&&(c=-c)),u=new Date(Date.UTC(t,r,n,i,a,l,s)),c&&u.setTime(u.getTime()-c),u}function h3(e){return e.toISOString()}var b3=new po("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:u3,construct:p3,instanceOf:Date,represent:h3});function g3(e){return e==="<<"||e===null}var m3=new po("tag:yaml.org,2002:merge",{kind:"scalar",resolve:g3}),zc=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function v3(e){if(e===null)return!1;var o,t,r=0,n=e.length,i=zc;for(t=0;t<n;t++)if(o=i.indexOf(e.charAt(t)),!(o>64)){if(o<0)return!1;r+=6}return r%8===0}function k3(e){var o,t,r=e.replace(/[\r\n=]/g,""),n=r.length,i=zc,a=0,l=[];for(o=0;o<n;o++)o%4===0&&o&&(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)),a=a<<6|i.indexOf(r.charAt(o));return t=n%4*6,t===0?(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)):t===18?(l.push(a>>10&255),l.push(a>>2&255)):t===12&&l.push(a>>4&255),new Uint8Array(l)}function w3(e){var o="",t=0,r,n,i=e.length,a=zc;for(r=0;r<i;r++)r%3===0&&r&&(o+=a[t>>18&63],o+=a[t>>12&63],o+=a[t>>6&63],o+=a[t&63]),t=(t<<8)+e[r];return n=i%3,n===0?(o+=a[t>>18&63],o+=a[t>>12&63],o+=a[t>>6&63],o+=a[t&63]):n===2?(o+=a[t>>10&63],o+=a[t>>4&63],o+=a[t<<2&63],o+=a[64]):n===1&&(o+=a[t>>2&63],o+=a[t<<4&63],o+=a[64],o+=a[64]),o}function y3(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var x3=new po("tag:yaml.org,2002:binary",{kind:"scalar",resolve:v3,construct:k3,predicate:y3,represent:w3}),_3=Object.prototype.hasOwnProperty,O3=Object.prototype.toString;function S3(e){if(e===null)return!0;var o=[],t,r,n,i,a,l=e;for(t=0,r=l.length;t<r;t+=1){if(n=l[t],a=!1,O3.call(n)!=="[object Object]")return!1;for(i in n)if(_3.call(n,i))if(!a)a=!0;else return!1;if(!a)return!1;if(o.indexOf(i)===-1)o.push(i);else return!1}return!0}function z3(e){return e!==null?e:[]}var L3=new po("tag:yaml.org,2002:omap",{kind:"sequence",resolve:S3,construct:z3}),E3=Object.prototype.toString;function T3(e){if(e===null)return!0;var o,t,r,n,i,a=e;for(i=new Array(a.length),o=0,t=a.length;o<t;o+=1){if(r=a[o],E3.call(r)!=="[object Object]"||(n=Object.keys(r),n.length!==1))return!1;i[o]=[n[0],r[n[0]]]}return!0}function A3(e){if(e===null)return[];var o,t,r,n,i,a=e;for(i=new Array(a.length),o=0,t=a.length;o<t;o+=1)r=a[o],n=Object.keys(r),i[o]=[n[0],r[n[0]]];return i}var P3=new po("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:T3,construct:A3}),C3=Object.prototype.hasOwnProperty;function F3(e){if(e===null)return!0;var o,t=e;for(o in t)if(C3.call(t,o)&&t[o]!==null)return!1;return!0}function $3(e){return e!==null?e:{}}var I3=new po("tag:yaml.org,2002:set",{kind:"mapping",resolve:F3,construct:$3});f3.extend({implicit:[b3,m3],explicit:[x3,L3,P3,I3]});function Af(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var N3=new Array(256),R3=new Array(256);for(var qr=0;qr<256;qr++)N3[qr]=Af(qr)?1:0,R3[qr]=Af(qr);function j3(e){return Array.from(new Set(e))}function Pf(...e){let o,t,r;e.length===1?(o=0,r=1,[t]=e):[o,t,r=1]=e;const n=[];let i=o;for(;i<t;)n.push(i),i+=r||1;return n}function Sb(e,o){if(!o||o==="all"||o==="*")return Pf(1,e+1);const t=[];for(const r of o.split(/[,;]/g))if(!r.includes("-"))t.push(+r);else{const[n,i]=r.split("-",2);t.push(...Pf(+n,i?+i+1:e+1))}return j3(t).filter(r=>r<=e).sort((r,n)=>r-n)}function zb(e){const o=P(()=>e.value.path),t=P(()=>Xe.length-1),r=P(()=>parseInt(o.value.split(/\//g).slice(-1)[0])||1),n=P(()=>el(r.value)),i=P(()=>Xe.find(u=>u.path===`${r.value}`)),a=P(()=>{var u,h,b;return(b=(h=(u=i.value)==null?void 0:u.meta)==null?void 0:h.slide)==null?void 0:b.id}),l=P(()=>{var u,h;return((h=(u=i.value)==null?void 0:u.meta)==null?void 0:h.layout)||(r.value===1?"cover":"default")}),s=P(()=>Xe.find(u=>u.path===`${Math.min(Xe.length,r.value+1)}`)),c=P(()=>Xe.filter(u=>{var h,b;return(b=(h=u.meta)==null?void 0:h.slide)==null?void 0:b.title}).reduce((u,h)=>(Ec(u,h),u),[])),d=P(()=>Tc(c.value,i.value)),f=P(()=>Ac(d.value));return{route:e,path:o,total:t,currentPage:r,currentPath:n,currentRoute:i,currentSlideId:a,currentLayout:l,nextRoute:s,rawTree:c,treeWithActiveStatuses:d,tree:f,downloadPDF:Es,next:Qt,nextSlide:li,openInEditor:xS,prev:er,prevSlide:si}}function Lb(e,o,t){const r=H(0);so(()=>{zo.afterEach(async()=>{await so(),r.value+=1})});const n=P(()=>{var s,c;return r.value,((c=(s=o.value)==null?void 0:s.meta)==null?void 0:c.__clicksElements)||[]}),i=P(()=>{var s,c;return+(((c=(s=o.value)==null?void 0:s.meta)==null?void 0:c.clicks)??n.value.length)}),a=P(()=>t.value<Xe.length-1||e.value<i.value),l=P(()=>t.value>1||e.value>0);return{clicks:e,clicksElements:n,clicksTotal:i,hasNext:a,hasPrev:l}}const M3=["id"],D3=ae({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:o}){const t=e,r=dt(t,"clicksElements",o),n=P(()=>({height:`${bc}px`,width:`${Yt}px`})),i=bt();Zt(()=>Promise.resolve().then(()=>d2),void 0).then(c=>i.value=c.default);const a=P(()=>t.clicks),l=Lb(a,t.nav.currentRoute,t.nav.currentPage),s=P(()=>`${t.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Po(ne,Ke({nav:{...t.nav,...l},configs:Pe,themeConfigs:P(()=>Pe.themeConfig)})),(c,d)=>{var f;return A(),X("div",{id:S(s),class:"print-slide-container",style:no(S(n))},[re(S(kb)),re(S(_c),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":S(r),"onUpdate:clicksElements":d[0]||(d[0]=u=>Fe(r)?r.value=u:null),clicks:S(a),"clicks-disabled":!1,class:qe(S(xc)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),S(i)?(A(),ee(S(i),{key:0,page:+e.route.path},null,8,["page"])):ve("v-if",!0),re(S(vb))],12,M3)}}}),Cf=le(D3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),K3=ae({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var i;const o=e;Y(ne);const t=H(((i=o.route.meta)==null?void 0:i.__clicksElements)||[]),r=P(()=>o.route),n=zb(r);return(a,l)=>(A(),X(Ce,null,[re(Cf,{"clicks-elements":t.value,"onUpdate:clicksElements":l[0]||(l[0]=s=>t.value=s),clicks:0,nav:S(n),route:S(r)},null,8,["clicks-elements","nav","route"]),S(Bn)?ve("v-if",!0):(A(!0),X(Ce,{key:0},dn(t.value.length,s=>(A(),ee(Cf,{key:s,clicks:s,nav:S(n),route:S(r)},null,8,["clicks","nav","route"]))),128))],64))}}),B3=le(K3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),U3={id:"print-content"},H3=ae({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const o=e;Y(ne);const t=P(()=>o.width),r=P(()=>o.width/Xt),n=P(()=>t.value/r.value),i=P(()=>n.value<Xt?t.value/Yt:r.value*Xt/Yt);let a=Xe.slice(0,-1);Ho.value.query.range&&(a=Sb(a.length,Ho.value.query.range).map(c=>a[c-1]));const l=P(()=>({"select-none":!Pe.selectable,"slidev-code-line-numbers":Pe.lineNumbers}));return Po(wh,i),(s,c)=>(A(),X("div",{id:"print-container",class:qe(S(l))},[p("div",U3,[(A(!0),X(Ce,null,dn(S(a),d=>(A(),ee(B3,{key:d.path,route:d},null,8,["route"]))),128))]),ao(s.$slots,"controls")],2))}});const q3=le(H3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),V3=ae({__name:"Print",setup(e){return Y(ne),Rr(()=>{sn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,t)=>(A(),X(Ce,null,[S(sn)?(A(),ee(wb,{key:0})):ve("v-if",!0),p("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:no(S(gc))},[re(q3,{class:"w-full h-full",style:no({background:"var(--slidev-slide-container-background, black)"}),width:S(Cr).width.value},null,8,["style","width"])],4)],64))}});const W3=le(V3,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const G3={class:"slidev-layout end"},X3={__name:"end",setup(e){return Y(ne),(o,t)=>(A(),X("div",G3,[ao(o.$slots,"default",{},()=>[F("END")],!0)]))}},Y3=le(X3,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Z3(e){return e.startsWith("/")?"/presentation"+e.slice(1):e}const J3={key:0},Q3=["src"],e6=ae({__name:"LayoutHeader",props:{logoHeader:{type:String}},setup(e){const o=e;Y(ne);const t=P(()=>Z3(o.logoHeader));return(r,n)=>e.logoHeader?(A(),X("header",J3,[p("img",{src:S(t),width:"60",height:"60",class:"object-contain"},null,8,Q3)])):ve("v-if",!0)}}),Ff=le(e6,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/components/LayoutHeader.vue"]]),o6={key:0,class:"mt-auto grid grid-cols-3 justify-between w-full text-gray-500 dark:text-white"},t6=p("small",{class:"text-center"},[p("strong",null,"Ko"),F("mponenten-Bib"),p("strong",null,"li"),F("othek für die "),p("strong",null,"B"),F("ar"),p("strong",null,"ri"),F("erefreiheit")],-1),r6={class:"text-right"},n6=ae({__name:"LayoutFooter",props:{website:{type:String},middle:{type:String},handle:{type:String}},setup(e){return Y(ne),(o,t)=>e.website||e.handle?(A(),X("footer",o6,[p("small",null,ot(Intl.DateTimeFormat("de-DE",{month:"long",year:"numeric"}).format(Date.now())),1),t6,p("small",r6,ot(e.handle),1)])):ve("v-if",!0)}}),$f=le(n6,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/components/LayoutFooter.vue"]]),i6={class:"bg-main slidev-layout"},a6={class:"my-auto"},l6=ae({__name:"default",props:{logoHeader:{type:String},website:{type:String},handle:{type:String}},setup(e){return Y(ne),ae({LayoutHeader:Ff,LayoutFooter:$f}),(o,t)=>(A(),X("div",i6,[re(Ff,{logoHeader:e.logoHeader},null,8,["logoHeader"]),p("div",a6,[ao(o.$slots,"default")]),re($f,{website:e.website,handle:e.handle},null,8,["website","handle"])]))}}),Ye=le(l6,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/layouts/default.vue"]]),s6=ae({__name:"cover",setup(e){return Y(ne),ae({Default:Ye}),(o,t)=>(A(),ee(Ye,{class:"cover"},{default:ke(()=>[ao(o.$slots,"default")]),_:3}))}}),c6=le(s6,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/layouts/cover.vue"]]),d6=p("h1",null,[p("strong",null,"KoliBri"),F(" - Public UI")],-1),f6=p("h2",null,[p("em",null,"Die barrierefreie Komponentenbibliothek")],-1),u6={__name:"1",setup(e){const o={theme:"./theme",colorSchema:"light",highlighter:"shiki",lineNumbers:!0,transition:"fade",info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss"};return Y(ne),(t,r)=>(A(),ee(c6,ro(Ze(o)),{default:ke(()=>[d6,f6]),_:1},16))}},p6=le(u6,[["__file","/@slidev/slides/1.md"]]),h6={class:"grid gap-16 grid-cols-[1fr_3fr] ml-10"},b6=p("div",null,[p("kol-logo",{_org:"ITZBund",class:"w-75 m-auto"})],-1),g6=ae({__name:"about-itzbund",setup(e){return Y(ne),ae({Default:Ye}),(o,t)=>(A(),ee(Ye,null,{default:ke(()=>[p("div",h6,[b6,p("div",null,[ao(o.$slots,"default")])])]),_:3}))}}),m6=le(g6,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/about-itzbund.vue"]]),v6=p("h2",null,"Informationstechnikzentrum Bund",-1),k6=p("ul",null,[p("li",null,"Zentraler IT-Dienstleister des Bundes"),p("li",null,"Leitung: Dr. Alfred Kranstedt"),p("li",null,"4.100 Beschäftigte"),p("li",null,"12 Standorte in Deutschland")],-1),w6=p("h2",null,"Anforderungsanalyse und -management und SW-Design",-1),y6=p("ul",null,[p("li",null,"Referat mit über 50 Beschäftigten"),p("li",null,"Leitung: Christine Heinrich")],-1),x6={__name:"2",setup(e){const o={layout:"about-itzbund"};return Y(ne),(t,r)=>(A(),ee(m6,ro(Ze(o)),{default:ke(()=>[v6,k6,w6,y6]),_:1},16))}},_6=le(x6,[["__file","/@slidev/slides/2.md"]]),O6={class:"grid gap-16 grid-cols-[1fr_2fr] ml-10"},S6=p("div",null,[p("img",{class:"w-75 m-auto rounded-full p-1 bg-gradient-to-r from-teal-700 to-cyan-800 dark:from-white dark:to-cyan-50",src:"https://avatars.githubusercontent.com/u/6279703"})],-1),z6=ae({__name:"about-me",setup(e){return Y(ne),ae({Default:Ye}),(o,t)=>(A(),ee(Ye,null,{default:ke(()=>[p("div",O6,[S6,p("div",null,[ao(o.$slots,"default")])])]),_:3}))}}),L6=le(z6,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/about-me.vue"]]),E6=p("h1",null,"Speaker",-1),T6=p("ul",null,[p("li",null,"Mein Name ist Martin Oppitz"),p("li",null,"Inzwischen über 25 Jahre im Web unterwegs"),p("li",null,"Seit 3 Jahren beim ITZBund in der Architekturberatung"),p("li",null,"Interessen: Familie, Rad und Ski fahren, Reisen und Open Source")],-1),A6={__name:"3",setup(e){const o={layout:"about-me"};return Y(ne),(t,r)=>(A(),ee(L6,ro(Ze(o)),{default:ke(()=>[E6,T6]),_:1},16))}},P6=le(A6,[["__file","/@slidev/slides/3.md"]]),C6={class:"flex flex-col items-center justify-center text-center"},F6=ae({__name:"center",setup(e){return Y(ne),ae({Default:Ye}),(o,t)=>(A(),ee(Ye,{class:"center"},{default:ke(()=>[p("div",C6,[ao(o.$slots,"default")])]),_:3}))}}),Ja=le(F6,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/theme/layouts/center.vue"]]),$6=p("div",{class:"flex gap-2 mb-4","data-theme":"bmf"},[p("kol-button",{_label:"                          ",_variant:"danger"}),p("kol-button",{_label:"                          ",_variant:"primary"})],-1),I6=p("div",{class:"text-left border-l-3 border-gray-400 p-2 bg-gray-100"},[p("h3",null,"Ohne Farben nutzbar"),F(" Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen. ")],-1),N6={__name:"4",setup(e){const o={layout:"center"};return Y(ne),(t,r)=>(A(),ee(Ja,ro(Ze(o)),{default:ke(()=>[$6,I6]),_:1},16))}},R6=le(N6,[["__file","/@slidev/slides/4.md"]]),j6=p("div",{class:"flex gap-2 mb-4 grey","data-theme":"bmf"},[p("kol-button",{_label:"                          ",_variant:"danger"}),p("kol-button",{_label:"                          ",_variant:"primary"})],-1),M6=p("div",{class:"text-left border-l-3 border-gray-400 p-2 bg-gray-100"},[p("h3",null,"Ohne Farben nutzbar"),F(" Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen. ")],-1),D6={__name:"5",setup(e){const o={layout:"center"};return Y(ne),(t,r)=>(A(),ee(Ja,ro(Ze(o)),{default:ke(()=>[j6,M6]),_:1},16))}},K6=le(D6,[["__file","/@slidev/slides/5.md"]]),B6=ae({render(){var r,n;const e=ha("after");function o(i,a){return ki(i,[[a]])}let t=(n=(r=this.$slots).default)==null?void 0:n.call(r);if(t)return t=yh(t),t.map(i=>o(oo(i),e))}}),If=["ul","ol"],Eb=ae({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,s;const e=ha("click"),o=ha("after"),t=(c,d,f)=>ki(c,[[d,f,"",{hide:this.hide,fade:this.fade}]]);let r=(s=(l=this.$slots).default)==null?void 0:s.call(l);if(!r)return;r=yh(r);const n=(c,d=1)=>{let f=0;return[c.map(h=>{if(!gt(h))return h;if(If.includes(h.type)&&Array.isArray(h.children)){const[b,g]=a(h.children,d+1);return f+=g,oo(h,{},[b])}return oo(h)}),f]};let i=0;const a=(c,d=1)=>{let f=0;return[c.map(h=>{if(!gt(h))return h;const b=f%this.every===0?e:o;let g,m=0;if(d<+this.depth&&Array.isArray(h.children)){const[w,y]=n(h.children,d);g=oo(h,{},[w]),m=y,f+=y+1}else g=oo(h),f++;const k=this.at!=null?Number(this.at)+Math.floor(i/this.every)+d:(d-1-m).toString();return i++,t(g,b,typeof k=="string"&&!k.startsWith("-")?`+${k}`:k)}),f]};return r.length===1&&If.includes(r[0].type)&&Array.isArray(r[0].children)?oo(r[0],{},[a(r[0].children)[0]]):a(r)[0]}}),U6=ae({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return re(Eb,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),H6="/presentation/assets/avatar-2c63cf95.png",q6=p("img",{class:"m-auto block w-50 pb-15",src:H6},null,-1),V6={class:"h-0"},W6=p("h1",null,[p("strong",null,"Ko"),F("mponenten-Bib"),p("strong",null,"li"),F("othek für die "),p("strong",null,"B"),F("ar"),p("strong",null,"ri"),F("erefreiheit")],-1),G6=[W6],X6=p("h1",null,[p("strong",null,"KoliBri")],-1),Y6={__name:"6",setup(e){const o={layout:"center"};return Y(ne),(t,r)=>{const n=U6,i=B6,a=ha("click-hide");return A(),ee(Ja,ro(Ze(o)),{default:ke(()=>[re(n,null,{default:ke(()=>[q6]),_:1}),ki((A(),X("div",V6,G6)),[[a]]),re(i,null,{default:ke(()=>[X6]),_:1})]),_:1},16)}}},Z6=le(Y6,[["__file","/@slidev/slides/6.md"]]),J6={class:"grid gap-16 grid-cols-[1fr_3fr] ml-10"},Q6=p("div",null,[p("kol-kolibri",{class:"w-75 m-auto"})],-1),eO=ae({__name:"about-kolibri",setup(e){return Y(ne),ae({Default:Ye}),(o,t)=>(A(),ee(Ye,null,{default:ke(()=>[p("div",J6,[Q6,p("div",null,[ao(o.$slots,"default")])])]),_:3}))}}),oO=le(eO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/about-kolibri.vue"]]),tO=p("h1",null,"Facts",-1),rO=p("ul",null,[p("li",null,[p("strong",null,"Start 2021"),F(" als internes Projekt "),p("ul",null,[p("li",null,[p("strong",null,"cross-funktionales Team:"),F(" Softwarearchitektur, Koordinierende Stelle für die Barrierefreiheit, Barrierefreiheitstest und Architekturmanagement")])])]),p("li",null,[p("strong",null,"Erstes Release"),F(" Dezember 2021")]),p("li",null,[p("strong",null,"2022"),F(" geprägt durch "),p("strong",null,"Reifephase")]),p("li",null,[p("strong",null,"2023 Open Source"),F(" Standard")])],-1),nO={__name:"7",setup(e){const o={layout:"about-kolibri"};return Y(ne),(t,r)=>(A(),ee(oO,ro(Ze(o)),{default:ke(()=>[tO,rO]),_:1},16))}},iO=le(nO,[["__file","/@slidev/slides/7.md"]]),aO={class:"grid grid-cols-[2fr_1fr]"},lO={id:"egg-all"},sO=p("g",{id:"bottom_part"},[p("path",{id:"bottom",fill:"#E9E6DB",d:"M89.467,194c-1.531,7.035-2.359,14.405-2.36,22h0.075c0.009,52,32.391,86.761,72.409,86.761 c40.018,0,72.409-39.13,72.409-87.12v-0.119c0-0.003,0-0.005,0-0.008c0-0.004,0-0.009,0-0.014c0-7.551-0.694-14.729-1.981-21.5 l-26.185,6l-44-6l-42.334,6L89.467,194z"}),p("path",{id:"shbottom",fill:"#DEDAC9",d:"M99.182,215h-0.038c0.001-6.301,0.583-12.438,1.65-18.362l-11.539-2.469 c-1.375,6.676-2.11,13.651-2.111,20.831h0.038c-0.038,52.75,29.318,86.875,69.409,87.821c1.998,0.047,3.979-0.102,5.938-0.293 C125.355,299.196,99.19,264.344,99.182,215z"})],-1),cO=p("g",{id:"top_part"},[p("path",{id:"top",fill:"#E9E6DB",d:"M230.545,197c-6.561-41.887-35.882-68.88-71.082-68.88c-31.932,0-63.045,26.565-69.996,65.88 l28.7,6l40.667-6l45,6L230.545,197z"}),p("path",{id:"shtop_1_",fill:"#DEDAC9",d:`M100.794,196.638c7.403-35.642,33.679-65.285,65.013-68.344
          c-1.996-0.18-4.011-0.294-6.051-0.294c-33.982,0-62.634,28.294-70.5,66.169L100.794,196.638z`}),p("circle",{id:"highlight3",fill:"#FFFFFD",cx:"190.814",cy:"151.488",r:"4.146"}),p("circle",{id:"highlight2",fill:"#FFFFFD",cx:"199.877",cy:"159.502",r:"4.146"}),p("circle",{id:"highlight1",fill:"#FFFFFD",cx:"190.629",cy:"160.687",r:"2.612"})],-1),dO=ae({__name:"egg",setup(e){Y(ne),ae({Default:Ye});const o=H(null),t=H(null),r=["M89.467,194","117.5,200","159.834,194","203.834,200","230.019,194"];let n;const i=(a=0)=>{clearTimeout(n),t.value&&a<=5?(t.value.setAttribute("d",r.slice(0,a).join(" ")),n=setTimeout(()=>{i(a+1)},750)):n=setTimeout(()=>{i()},2500)};return vt(()=>{i()}),vi(()=>{clearTimeout(n)}),(a,l)=>(A(),ee(Ye,null,{default:ke(()=>[p("div",aO,[p("div",null,[ao(a.$slots,"default")]),p("div",null,[(A(),X("svg",{class:"cursor-pointer",ref_key:"egg",ref:o,version:"1.1",id:"egg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"300px",height:"400px",viewBox:"0 0 300 400","enable-background":"new 0 0 300 400","xml:space":"preserve"},[p("g",lO,[sO,cO,p("path",{ref_key:"eggBreak",ref:t,id:"break",fill:"none",stroke:"#79736f","stroke-miterlimit":"10",d:""},null,512)])],512))])])]),_:3}))}}),fO=le(dO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/egg.vue"]]),uO=p("h1",null,[F("Vom "),p("strong",null,"Ei"),F(" zum "),p("strong",null,"Open Source"),F("-Standard")],-1),pO=p("p",null,"Folgenden Fragen wollen wir auf den Grund gehen?",-1),hO=p("ul",null,[p("li",null,[F("Was ist die "),p("strong",null,"Motivation"),F(" für KoliBri?")]),p("li",null,[F("Worin liegt eigentlich das "),p("strong",null,"Problem"),F("?")]),p("li",null,[F("Was ist eine "),p("strong",null,"Web Component"),F("?")]),p("li",null,[F("Warum ist KoliBri so "),p("strong",null,"flexibel"),F("?")]),p("li",null,[F("Wo wird denn hier was "),p("strong",null,"eingespart"),F("?")]),p("li",null,[F("Was macht eigentlich den "),p("strong",null,"Unterschied"),F("?")]),p("li",null,[F("Wo steht KoliBri und wo will er "),p("strong",null,"hin"),F("?")]),p("li",null,[F("Was steckt hinter der "),p("strong",null,"Lizenz EUPL"),F("?")])],-1),bO={__name:"8",setup(e){const o={layout:"egg",handle:1};return Y(ne),(t,r)=>(A(),ee(fO,ro(Ze(o)),{default:ke(()=>[uO,pO,hO]),_:1},16))}},gO=le(bO,[["__file","/@slidev/slides/8.md"]]),mO={class:"grid grid-cols-[2fr_1fr] items-center"},vO=["src"],kO=ae({__name:"image-right",props:{image:{type:String},style:{type:String}},setup(e){const o=e;Y(ne),ae({Default:Ye});const t=P(()=>o.image);return(r,n)=>(A(),ee(Ye,null,{default:ke(()=>[p("div",mO,[p("div",null,[ao(r.$slots,"default")]),p("div",null,[p("img",{src:S(t),class:"mt-8 w-66% m-auto",style:no(o.style)},null,12,vO)])])]),_:3}))}}),Qa=le(kO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/image-right.vue"]]),wO=p("h1",null,"Motivation",-1),yO=p("p",null,[p("small",{class:"underline"},"Welche Ziele können damit verfolgt werden?")],-1),xO=p("ul",null,[p("li",null,"gesetzliche Verpflichtung zur Erstellung barrierefreier Benutzeroberflächen"),p("li",null,"Großteil der Komponentenbibliotheken haben den Fokus auf Design"),p("li",null,"Anforderungen werden immer wieder neu in Projekten umgesetzt"),p("li",null,"Reduzierung der Herstellerabhängigkeit (Digitale Souveränität)")],-1),_O=p("br",null,null,-1),OO=p("p",null,[p("strong",null,"Ziel:"),F(" Schaffung einer barrierefreien und wieder verwendbaren Standard-Bibliothek, ohne dabei die notwendige Flexibilität und Gestaltungsfreiheit zu verlieren.")],-1),SO={__name:"9",setup(e){const o={layout:"image-right",handle:2};return Y(ne),(t,r)=>(A(),ee(Qa,ro(Ze(o)),{default:ke(()=>[wO,yO,xO,_O,OO]),_:1},16))}},zO=le(SO,[["__file","/@slidev/slides/9.md"]]),LO={class:"grid grid-cols-2 items-center"},EO=["src"],TO=ae({__name:"image-right-50",props:{image:{type:String},style:{type:String}},setup(e){const o=e;Y(ne),ae({Default:Ye});const t=P(()=>o.image);return(r,n)=>(A(),ee(Ye,null,{default:ke(()=>[p("div",LO,[p("div",null,[ao(r.$slots,"default")]),p("div",null,[p("img",{src:S(t),class:"mt-8 w-50% m-auto",style:no(o.style)},null,12,EO)])])]),_:3}))}}),Lc=le(TO,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/image-right-50.vue"]]),AO=p("h1",null,"Viele Wege führen nach Rom",-1),PO=p("p",null,[p("small",{class:"underline"},"Worin liegt eigentlich das Problem?")],-1),CO=p("p",null,"Barrierefreie Benutzeroberflächen werden durch die semantisch korrekte Komposition von HTML-Elementen realisiert.",-1),FO=p("p",null,[F("Der HTML-Webstandard lässt aber das "),p("strong",null,"Wie"),F(' dabei offen. Somit liegt die Aufgabe, das "Problem" zu lösen, bei den Entwickelnden. Darüber hinaus gilt es, die Richtlinien der '),p("kol-abbr",{_title:"Web Content Accessibility Guidelines"},"WCAG"),F(" mit den gestalterischen Aspekten aus den vielseitigen Styleguides zu vereinen.")],-1),$O=p("p",null,[F("Der "),p("strong",null,"große Vorteil für die Bundesverwaltung"),F(" liegt darin, dass wir mittels des Web Component-Standards eine für uns "),p("strong",null,"ideale Lösung"),F(" gemeinsam "),p("strong",null,"umsetzen"),F(", "),p("strong",null,"wiederverwenden"),F(" (teilen), "),p("strong",null,"verbessern"),F(" und "),p("strong",null,"erweitern"),F(" können.")],-1),IO={__name:"10",setup(e){const o={layout:"image-right-50",image:"/presentation/assets/w3c.jpeg",handle:3};return Y(ne),(t,r)=>(A(),ee(Lc,ro(Ze(o)),{default:ke(()=>[AO,PO,CO,FO,$O]),_:1},16))}},NO=le(IO,[["__file","/@slidev/slides/10.md"]]),RO=p("h1",null,"Web Components",-1),jO=p("p",null,[p("small",{class:"underline"},"Was ist eine Web Component?")],-1),MO=p("p",null,"Webseiten werden mit HTML-Elementen umgesetzt.",-1),DO=p("ul",null,[p("li",null,[p("strong",null,"Web Components"),F("-Standard ermöglicht "),p("strong",null,"eigene"),F(" HTMl-Element zu definieren")]),p("li",null,[F("Das ist "),p("strong",null,"fixiert"),p("ul",null,[p("li",null,"Semantik (HTML) → Assistive Systems / Barrierefreiheit"),p("li",null,"Verhalten (JavaScript) → Usability & Barrierefreiheit")])]),p("li",null,[F("Das ist "),p("strong",null,"flexibel"),p("ul",null,[p("li",null,"Aussehen (CSS) → Corporate Design")])]),p("li",null,"so entstehen barrierefreie, robuste und wiederverwendbare „Bausteine“")],-1),KO={__name:"11",setup(e){const o={layout:"image-right-50",image:"/presentation/assets/html-js-css.png",handle:4};return Y(ne),(t,r)=>(A(),ee(Lc,ro(Ze(o)),{default:ke(()=>[RO,jO,MO,DO]),_:1},16))}},BO=le(KO,[["__file","/@slidev/slides/11.md"]]),UO="/presentation/assets/theming-03035132.png",HO=p("h1",null,"Theming",-1),qO=p("p",null,[p("small",{class:"underline"},"Wie ist KoliBri aufgestellt?")],-1),VO=p("img",{src:UO,class:"w-3/4 m-auto"},null,-1),WO={__name:"12",setup(e){const o={handle:5};return Y(ne),(t,r)=>(A(),ee(Ye,ro(Ze(o)),{default:ke(()=>[HO,qO,VO]),_:1},16))}},GO=le(WO,[["__file","/@slidev/slides/12.md"]]),XO={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},YO=p("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),ZO=[YO];function JO(e,o){return A(),X("svg",XO,ZO)}const QO={name:"ph-clipboard",render:JO},e7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},o7=p("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),t7=[o7];function r7(e,o){return A(),X("svg",e7,t7)}const n7={name:"ph-check-circle",render:r7},i7=["title"],a7=ae({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const o=e;Y(ne);const t=Y(Rn),r=Y(kr),n=Y(jn);function i(f=5){const u=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=h.length;for(let g=0;g<f;g++)u.push(h.charAt(Math.floor(Math.random()*b)));return u.join("")}const a=H(),l=xo();vt(()=>{const f=o.at==null?r==null?void 0:r.value.length:o.at,u=P(()=>n!=null&&n.value?o.ranges.length-1:Math.min(Math.max(0,((t==null?void 0:t.value)||0)-(f||0)),o.ranges.length-1)),h=P(()=>o.ranges[u.value]||"");if(o.ranges.length>=2&&!(n!=null&&n.value)){const b=i(),g=aw(o.ranges.length-1).map(m=>b+m);r!=null&&r.value&&(r.value.push(...g),vi(()=>g.forEach(m=>ls(r.value,m)),l))}Rr(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const m of g){const k=Array.from(m.querySelectorAll(".line")),w=Sb(k.length,h.value);if(k.forEach((y,x)=>{const z=w.includes(x+1);y.classList.toggle(gr,!0),y.classList.toggle("highlighted",z),y.classList.toggle("dishonored",!z)}),o.maxHeight){const y=Array.from(m.querySelectorAll(".line.highlighted"));y.reduce((z,L)=>L.offsetHeight+z,0)>a.value.offsetHeight?y[0].scrollIntoView({behavior:"smooth",block:"start"}):y.length>0&&y[Math.round((y.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:s,copy:c}=ry();function d(){var u,h;const f=(h=(u=a.value)==null?void 0:u.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&c(f)}return(f,u)=>{const h=n7,b=QO;return A(),X("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:no({"max-height":o.maxHeight,"overflow-y":o.maxHeight?"scroll":void 0})},[ao(f.$slots,"default"),S(Pe).codeCopy?(A(),X("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:S(s)?"Copied":"Copy",onClick:u[0]||(u[0]=g=>d())},[S(s)?(A(),ee(h,{key:0,class:"p-2 w-8 h-8"})):(A(),ee(b,{key:1,class:"p-2 w-8 h-8"}))],8,i7)):ve("v-if",!0)],4)}}}),l7=le(a7,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),s7=["data-theme"],c7={class:"grid gap-2"},d7={class:"pl-8",_heading:"Button-Komponente","_has-footer":""},f7=p("div",{slot:"content",class:"p-2 grid grid-cols-[1.5fr_1fr] items-center"},[p("div",{class:"grid gap-2"},[p("div",{class:"text-center"},[p("kol-button",{_label:"Primary",_icon:"codicon codicon-home",_variant:"primary"})]),p("div",{class:"text-center"},[p("kol-button",{_label:"Secondary",_icon:{right:"codicon codicon-edit"},_variant:"secondary"})]),p("div",{class:"text-center"},[p("kol-button",{_label:"Danger",_icon:"codicon codicon-trash",_variant:"danger"})]),p("div",{class:"text-center"},[p("kol-button",{_label:"Ghost",_icon:{right:"codicon codicon-lightbulb"},_variant:"ghost"})])]),p("div",{class:"grid gap-2"},[p("div",{class:"text-center"},[p("kol-button",{_label:"Primary",_icon:"codicon codicon-home","_icon-only":"",_variant:"primary"})]),p("div",{class:"text-center"},[p("kol-button",{_label:"Secondary",_icon:"codicon codicon-edit","_icon-only":"","_tooltip-align":"right",_variant:"secondary"})]),p("div",{class:"text-center"},[p("kol-button",{_label:"Danger",_icon:"codicon codicon-trash","_icon-only":"","_tooltip-align":"bottom",_variant:"danger"})]),p("div",{class:"text-center"},[p("kol-button",{_label:"Ghost",_icon:"codicon codicon-lightbulb","_icon-only":"","_tooltip-align":"left",_variant:"ghost"})])])],-1),u7={slot:"footer",class:"p-2 grid grid-cols-[1fr_auto] gap-4 items-end"},p7=["_value"],h7=ae({__name:"demo-time",setup(e){Y(ne);const o=[{label:"Bundes-Styleguide",value:"bpa"},{label:"BMF-Styleguide",value:"bmf"},{label:"European Commission-Styleguide",value:"ecl-ec"},{label:"European Union-Styleguide",value:"ecl-eu"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"},{label:"Freistaat Thüringen",value:"th"},{label:"Zoll-Designsystem",value:"zoll-v2"}],t=window.localStorage.getItem("kolibri");let r="ecl-eu";if(t)try{const a=JSON.parse(t);typeof a.theme=="string"&&(r=a.theme)}catch{}const n={onChange:(a,l)=>{Array.isArray(l)&&typeof l[0]=="string"&&r!==l[0]&&window.localStorage.setItem("kolibri",JSON.stringify({theme:l[0]}))}},i={onClick:()=>{console.log("click"),window.location.reload()}};return ae({Default:Ye}),(a,l)=>(A(),ee(Ye,null,{default:ke(()=>[p("div",{"data-theme":S(r),class:"grid grid-cols-2 items-center"},[p("div",null,[ao(a.$slots,"default")]),p("div",c7,[p("kol-card",d7,[f7,p("div",u7,[p("kol-select",{_list:o,_on:n,_value:[S(r)]},"Styleguide",8,p7),p("kol-button",{_label:"Übernehmen",_icon:"codicon codicon-reply","_icon-only":"",onClick:l[0]||(l[0]=(...s)=>i.onClick&&i.onClick(...s)),_on:i,_variant:"secondary"})])])])],8,s7)]),_:3}))}}),b7=le(h7,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/layouts/demo-time.vue"]]),g7=p("h1",null,"Live-Demo",-1),m7=p("p",null,[p("small",{class:"underline"},"Wo wird denn hier was eingespart?")],-1),v7=p("p",null,'Im Code-Beispiel wird dargestellt, wie die Anforderungen an die Barrierefreiheit im Button "weg gekapselt" werden.',-1),k7=p("pre",{class:"shiki-container"},[p("pre",{class:"slidev-code shiki shiki-dark min-dark",style:{"background-color":"#1f1f1f"},tabindex:"0"},[p("code",null,[p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"<"),p("span",{style:{color:"#79B8FF"}},"kol-button"),p("span",{style:{color:"#B392F0"}}," _icon"),p("span",{style:{color:"#F97583"}},"="),p("span",{style:{color:"#FFAB70"}},'"ui-home"'),p("span",{style:{color:"#B392F0"}}," _icon-only _label"),p("span",{style:{color:"#F97583"}},"="),p("span",{style:{color:"#FFAB70"}},'"Primary"'),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"	<"),p("span",{style:{color:"#FFAB70"}},"button"),p("span",{style:{color:"#B392F0"}}," aria-labelledby"),p("span",{style:{color:"#F97583"}},"="),p("span",{style:{color:"#FFAB70"}},'"574540"'),p("span",{style:{color:"#B392F0"}}," class"),p("span",{style:{color:"#F97583"}},"="),p("span",{style:{color:"#FFAB70"}},'"primary"'),p("span",{style:{color:"#B392F0"}}," type"),p("span",{style:{color:"#F97583"}},"="),p("span",{style:{color:"#FFAB70"}},'"button"'),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"		<"),p("span",{style:{color:"#FFAB70"}},"span"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"			<"),p("span",{style:{color:"#79B8FF"}},"kol-icon"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"				<"),p("span",{style:{color:"#FFAB70"}},"i"),p("span",{style:{color:"#B392F0"}}," aria-hidden"),p("span",{style:{color:"#F97583"}},"="),p("span",{style:{color:"#FFAB70"}},'"true"'),p("span",{style:{color:"#B392F0"}}," class"),p("span",{style:{color:"#F97583"}},"="),p("span",{style:{color:"#FFAB70"}},'"icofont-ui-home"'),p("span",{style:{color:"#B392F0"}},"></"),p("span",{style:{color:"#FFAB70"}},"i"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"			</"),p("span",{style:{color:"#79B8FF"}},"kol-icon"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"		</"),p("span",{style:{color:"#FFAB70"}},"span"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"	</"),p("span",{style:{color:"#FFAB70"}},"button"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"	<"),p("span",{style:{color:"#79B8FF"}},"kol-tooltip"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"		<"),p("span",{style:{color:"#79B8FF"}},"kol-badge"),p("span",{style:{color:"#B392F0"}}," id"),p("span",{style:{color:"#F97583"}},"="),p("span",{style:{color:"#FFAB70"}},'"574540"'),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"			<"),p("span",{style:{color:"#FFAB70"}},"span"),p("span",{style:{color:"#B392F0"}},">Primary</"),p("span",{style:{color:"#FFAB70"}},"span"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"		</"),p("span",{style:{color:"#79B8FF"}},"kol-badge"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"	</"),p("span",{style:{color:"#79B8FF"}},"kol-tooltip"),p("span",{style:{color:"#B392F0"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#B392F0"}},"</"),p("span",{style:{color:"#79B8FF"}},"kol-button"),p("span",{style:{color:"#B392F0"}},">")])])]),p("pre",{class:"slidev-code shiki shiki-light min-light",style:{"background-color":"#ffffff"},tabindex:"0"},[p("code",null,[p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"<"),p("span",{style:{color:"#1976D2"}},"kol-button"),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"_icon"),p("span",{style:{color:"#D32F2F"}},"="),p("span",{style:{color:"#22863A"}},'"ui-home"'),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"_icon-only"),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"_label"),p("span",{style:{color:"#D32F2F"}},"="),p("span",{style:{color:"#22863A"}},'"Primary"'),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"	<"),p("span",{style:{color:"#22863A"}},"button"),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"aria-labelledby"),p("span",{style:{color:"#D32F2F"}},"="),p("span",{style:{color:"#22863A"}},'"574540"'),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"class"),p("span",{style:{color:"#D32F2F"}},"="),p("span",{style:{color:"#22863A"}},'"primary"'),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"type"),p("span",{style:{color:"#D32F2F"}},"="),p("span",{style:{color:"#22863A"}},'"button"'),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"		<"),p("span",{style:{color:"#22863A"}},"span"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"			<"),p("span",{style:{color:"#1976D2"}},"kol-icon"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"				<"),p("span",{style:{color:"#22863A"}},"i"),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"aria-hidden"),p("span",{style:{color:"#D32F2F"}},"="),p("span",{style:{color:"#22863A"}},'"true"'),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"class"),p("span",{style:{color:"#D32F2F"}},"="),p("span",{style:{color:"#22863A"}},'"icofont-ui-home"'),p("span",{style:{color:"#24292EFF"}},"></"),p("span",{style:{color:"#22863A"}},"i"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"			</"),p("span",{style:{color:"#1976D2"}},"kol-icon"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"		</"),p("span",{style:{color:"#22863A"}},"span"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"	</"),p("span",{style:{color:"#22863A"}},"button"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"	<"),p("span",{style:{color:"#1976D2"}},"kol-tooltip"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"		<"),p("span",{style:{color:"#1976D2"}},"kol-badge"),p("span",{style:{color:"#24292EFF"}}," "),p("span",{style:{color:"#6F42C1"}},"id"),p("span",{style:{color:"#D32F2F"}},"="),p("span",{style:{color:"#22863A"}},'"574540"'),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"			<"),p("span",{style:{color:"#22863A"}},"span"),p("span",{style:{color:"#24292EFF"}},">Primary</"),p("span",{style:{color:"#22863A"}},"span"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"		</"),p("span",{style:{color:"#1976D2"}},"kol-badge"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"	</"),p("span",{style:{color:"#1976D2"}},"kol-tooltip"),p("span",{style:{color:"#24292EFF"}},">")]),F(`
`),p("span",{class:"line"},[p("span",{style:{color:"#24292EFF"}},"</"),p("span",{style:{color:"#1976D2"}},"kol-button"),p("span",{style:{color:"#24292EFF"}},">")])])])],-1),w7=p("p",null,[p("small",{class:"mt-8 text-xs"},[p("sup",null,"*"),F(" Quellcode ist für die bessere Nachvollziehbarkeit stark vereinfacht.")])],-1),y7={__name:"13",setup(e){const o={layout:"demo-time",handle:6};return Y(ne),(t,r)=>{const n=l7;return A(),ee(b7,ro(Ze(o)),{default:ke(()=>[g7,m7,v7,ve(` <kol-accordion _heading="test" _level="5">
<div slot="content"> `),re(n,nn({},{ranges:["1,14","2-8","9-13","all"]}),{default:ke(()=>[k7]),_:1},16),ve(` </div>
</kol-accordion> `),w7]),_:1},16)}}},x7=le(y7,[["__file","/@slidev/slides/13.md"]]),_7=p("h1",null,"Alleinstellungsmerkmale",-1),O7=p("p",null,[p("small",{class:"underline"},"Was macht eigentlich den Unterschied?")],-1),S7=p("p",null,"Aus Sicht der öffentlichen Verwaltung hat KoliBri eine ganze Reihe an Alleinstellungsmerkmalen:",-1),z7=p("ul",null,[p("li",null,[p("strong",null,"Barrierefreiheit"),F(" - kommt zuerst und vor Design")]),p("li",null,[p("strong",null,"Architektur"),F(" - universell im Web einsetzbar")]),p("li",null,[p("strong",null,"Wiederverwendbarkeit"),F(" - Kleinteilig und gestaltbar")]),p("li",null,[p("strong",null,"Digitale Souveränität"),F(" - Code-Hoheit liegt bei uns")]),p("li",null,[p("strong",null,"Robust"),F(" - vor Manipulationen geschützt")])],-1),L7={__name:"14",setup(e){const o={layout:"image-right",handle:7};return Y(ne),(t,r)=>(A(),ee(Qa,ro(Ze(o)),{default:ke(()=>[_7,O7,S7,z7]),_:1},16))}},E7=le(L7,[["__file","/@slidev/slides/14.md"]]),T7=p("h1",null,"Ausblick",-1),A7=p("p",null,[p("small",{class:"underline"},"Wo will KoliBri hin?")],-1),P7=p("p",null,[p("strong",null,"KoliBri"),F(" wurde durch den "),p("strong",null,"ITZBund"),F(" für die "),p("strong",null,"Open Source"),F("-Entwicklung "),p("strong",null,"freigegeben"),F(", um für alle zugänglich zu sein und um aus dem Feedback der Community kontinuierlich verbessert und erweitert werden zu können.")],-1),C7=p("p",null,[p("strong",null,"KoliBri"),F(" bietet hierfür eine optimale Wiederverwendbarkeit, weil er …")],-1),F7=p("ul",null,[p("li",null,[p("strong",null,"klein"),F(" - kleinteilige Komponenten,")]),p("li",null,[p("strong",null,"schnell"),F(" - automatisierte DevOps-Pipelines,")]),p("li",null,[p("strong",null,"wendig"),F(" - Framework-agnostisch und")]),p("li",null,[p("strong",null,"farbenfroh"),F(" - entkoppeltes Theming")])],-1),$7=p("br",null,null,-1),I7={__name:"15",setup(e){const o={layout:"image-right",image:"/presentation/assets/logo.kolibri.png",handle:8};return Y(ne),(t,r)=>(A(),ee(Qa,ro(Ze(o)),{default:ke(()=>[T7,A7,P7,C7,F7,$7,F(" … ist. ")]),_:1},16))}},N7=le(I7,[["__file","/@slidev/slides/15.md"]]),R7=p("h1",null,"Lizenz",-1),j7=p("p",null,[p("small",{class:"underline"},"Was steckt hinter der Lizenz EUPL?")],-1),M7=p("p",null,'Die "Open-Source-Lizenz für die Europäische Union" (EUPL) ist eine von der Europäischen Union herausgegebene Copyleft-Lizenz für die Lizenzierung freier Software.',-1),D7=p("ul",null,[p("li",null,[F("Die reine Verwendung von Artefakten ist vollkommen "),p("strong",null,"unproblematisch"),F(".")]),p("li",null,[F("Das Kopieren von Code ist durch die Lizenz geschützt ("),p("strong",null,"Copyleft"),F(")!")])],-1),K7=p("br",null,null,-1),B7=p("p",null,[p("strong",null,"EUPL"),F(" sichert die freie Nutzung und den Schutz des Urheberrechts.")],-1),U7={__name:"16",setup(e){const o={layout:"image-right",image:"/presentation/assets/eupl.jpeg",handle:9};return Y(ne),(t,r)=>(A(),ee(Qa,ro(Ze(o)),{default:ke(()=>[R7,j7,M7,D7,K7,B7]),_:1},16))}},H7=le(U7,[["__file","/@slidev/slides/16.md"]]),q7=p("h1",null,"Nächste Schritte",-1),V7=p("p",null,[F("Du kannst folgendes tun, um "),p("strong",null,"KoliBri"),F(" kennenzulernen …")],-1),W7=p("ul",null,[p("li",null,[p("kol-link",{_href:"https://public-ui.github.io",_target:"website"},"Lese mehr über KoliBri"),F(" (Dokumentation)")]),p("li",null,[p("kol-link",{_href:"https://public-ui.github.io/docs/get-started/erste-schritte",_target:"website"},"Probiere KoliBri aus"),F(" (Create-App)")]),p("li",null,[p("kol-link",{_href:"https://public-ui.github.io/docs/konzepte/architektur#erweitert",_target:"github"},"Nutze KoliBri in Deinem Design System"),F(" (Nutzen)")]),p("li",null,[p("kol-link",{_href:"https://public-ui.github.io/docs/concepts/styling/theming",_target:"website"},"Gestalte Dein eigenen KoliBri"),F(" (Designer)")]),p("li",null,[p("kol-link",{_href:"https://github.com/public-ui/kolibri/issues",_target:"github"},"Gib uns Feedback"),F(" (Feature, Issue)")]),p("li",null,[p("kol-link",{_href:"https://github.com/public-ui/kolibri",_target:"github"},"Folge und teile uns"),F(" (Follow-Button)")])],-1),G7={__name:"17",setup(e){const o={layout:"image-right-50",image:"/presentation/assets/website.png",handle:10,style:"width: 100%"};return Y(ne),(t,r)=>{const n=Eb;return A(),ee(Lc,ro(Ze(o)),{default:ke(()=>[q7,V7,re(n,null,{default:ke(()=>[W7]),_:1})]),_:1},16)}}},X7=le(G7,[["__file","/@slidev/slides/17.md"]]),Y7="/presentation/assets/qr-code-31558908.png",Z7=p("img",{class:"m-auto block w-50 pb-10",src:Y7},null,-1),J7=p("h1",null,"Vielen Dank für Eure Aufmerksamkeit",-1),Q7=p("br",null,null,-1),eS=p("small",{class:"underline"},[F(" Lasst uns gemeinsam KoliBri bunter und besser machen!"),p("br"),p("br")],-1),oS=p("ul",{class:"flex"},[p("li",{class:"list-none"},[p("kol-link",{_href:"https://public-ui.github.io",_target:"website"},[p("kol-icon",{_icon:"codicon codicon-book"}),F(" Dokumentation")])]),p("li",{class:"list-none"},"|"),p("li",{class:"list-none"},[p("kol-link",{_href:"mailto:kolibri@itzbund.de",_target:"mail"},[p("kol-icon",{_icon:"codicon codicon-mail"}),F(" kolibri@itzbund.de")])]),p("li",{class:"list-none"},"|"),p("li",{class:"list-none"},[p("kol-link",{_href:"https://github.com/public-ui/kolibri",_target:"github"},[p("kol-icon",{_icon:"codicon codicon-github"}),F(" GitHub")])])],-1),tS={__name:"18",setup(e){const o={layout:"center"};return Y(ne),(t,r)=>(A(),ee(Ja,ro(Ze(o)),{default:ke(()=>[Z7,J7,Q7,eS,oS]),_:1},16))}},rS=le(tS,[["__file","/@slidev/slides/18.md"]]),nS=p("kol-logo",{_org:"ITZBund",class:"m-auto pl-40 block w-140"},null,-1),iS={__name:"19",setup(e){const o={};return Y(ne),(t,r)=>(A(),ee(Ye,ro(Ze(o)),{default:ke(()=>[nS]),_:1},16))}},aS=le(iS,[["__file","/@slidev/slides/19.md"]]),lS=[{path:"1",name:"page-1",component:p6,meta:{theme:"./theme",colorSchema:"light",highlighter:"shiki",lineNumbers:!0,transition:"fade",info:`## Slidev Starter Template
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


# **KoliBri** - Public UI

## _Die barrierefreie Komponentenbibliothek_
`,title:"Komponenten-Bibliothek für die Barrierefreiheit | KoliBri",content:`# **KoliBri** - Public UI

## _Die barrierefreie Komponentenbibliothek_`,frontmatter:{theme:"./theme",colorSchema:"light",highlighter:"shiki",lineNumbers:!0,transition:"fade",info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"Komponenten-Bibliothek für die Barrierefreiheit | KoliBri"},index:0,start:0,end:22,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:_6,meta:{layout:"about-itzbund",slide:{raw:`---
layout: about-itzbund
---

## Informationstechnikzentrum Bund

- Zentraler IT-Dienstleister des Bundes
- Leitung: Dr. Alfred Kranstedt
- 4.100 Beschäftigte
- 12 Standorte in Deutschland

## Anforderungsanalyse und -management und SW-Design

- Referat mit über 50 Beschäftigten
- Leitung: Christine Heinrich
`,title:"Informationstechnikzentrum Bund",level:2,content:`## Informationstechnikzentrum Bund

- Zentraler IT-Dienstleister des Bundes
- Leitung: Dr. Alfred Kranstedt
- 4.100 Beschäftigte
- 12 Standorte in Deutschland

## Anforderungsanalyse und -management und SW-Design

- Referat mit über 50 Beschäftigten
- Leitung: Christine Heinrich`,frontmatter:{layout:"about-itzbund"},index:1,start:22,end:38,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:P6,meta:{layout:"about-me",slide:{raw:`---
layout: about-me
---

# Speaker

- Mein Name ist Martin Oppitz
- Inzwischen über 25 Jahre im Web unterwegs
- Seit 3 Jahren beim ITZBund in der Architekturberatung
- Interessen: Familie, Rad und Ski fahren, Reisen und Open Source
`,title:"Speaker",level:1,content:`# Speaker

- Mein Name ist Martin Oppitz
- Inzwischen über 25 Jahre im Web unterwegs
- Seit 3 Jahren beim ITZBund in der Architekturberatung
- Interessen: Familie, Rad und Ski fahren, Reisen und Open Source`,frontmatter:{layout:"about-me"},index:2,start:38,end:49,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:R6,meta:{layout:"center",slide:{raw:`---
layout: center
---

<div class="flex gap-2 mb-4"  data-theme="bmf">
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="danger" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="primary" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen.
</div>
`,content:`<div class="flex gap-2 mb-4"  data-theme="bmf">
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="danger" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="primary" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen.
</div>`,frontmatter:{layout:"center"},index:3,start:49,end:63,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:K6,meta:{layout:"center",slide:{raw:`---
layout: center
---

<div class="flex gap-2 mb-4 grey"  data-theme="bmf">
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="danger" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="primary" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen.
</div>
`,content:`<div class="flex gap-2 mb-4 grey"  data-theme="bmf">
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="danger" />
  <kol-button _label="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;" _variant="primary" />
</div>

<div class="text-left border-l-3 border-gray-400 p-2 bg-gray-100">
  <h3>Ohne Farben nutzbar</h3>
  Klicken Sie auf den roten Schalter, um den Vorgang abzubrechen.
</div>`,frontmatter:{layout:"center"},index:4,start:63,end:77,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Z6,meta:{layout:"center",slide:{raw:`---
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

</v-after>`,frontmatter:{layout:"center"},index:5,start:77,end:99,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:iO,meta:{layout:"about-kolibri",slide:{raw:`---
layout: about-kolibri
---

# Facts

- **Start 2021** als internes Projekt
  - **cross-funktionales Team:** Softwarearchitektur, Koordinierende Stelle für die Barrierefreiheit, Barrierefreiheitstest und Architekturmanagement
- **Erstes Release** Dezember 2021
- **2022** geprägt durch **Reifephase**
- **2023 Open Source** Standard
`,title:"Facts",level:1,content:`# Facts

- **Start 2021** als internes Projekt
  - **cross-funktionales Team:** Softwarearchitektur, Koordinierende Stelle für die Barrierefreiheit, Barrierefreiheitstest und Architekturmanagement
- **Erstes Release** Dezember 2021
- **2022** geprägt durch **Reifephase**
- **2023 Open Source** Standard`,frontmatter:{layout:"about-kolibri"},index:6,start:99,end:111,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:gO,meta:{layout:"egg",handle:1,slide:{raw:`---
layout: egg
handle: 1
---

# Vom **Ei** zum **Open Source**-Standard

Folgenden Fragen wollen wir auf den Grund gehen?

- Was ist die **Motivation** für KoliBri?
- Worin liegt eigentlich das **Problem**?
- Was ist eine **Web Component**?
- Warum ist KoliBri so **flexibel**?
- Wo wird denn hier was **eingespart**?
- Was macht eigentlich den **Unterschied**?
- Wo steht KoliBri und wo will er **hin**?
- Was steckt hinter der **Lizenz EUPL**?
`,title:"Vom **Ei** zum **Open Source**-Standard",level:1,content:`# Vom **Ei** zum **Open Source**-Standard

Folgenden Fragen wollen wir auf den Grund gehen?

- Was ist die **Motivation** für KoliBri?
- Worin liegt eigentlich das **Problem**?
- Was ist eine **Web Component**?
- Warum ist KoliBri so **flexibel**?
- Wo wird denn hier was **eingespart**?
- Was macht eigentlich den **Unterschied**?
- Wo steht KoliBri und wo will er **hin**?
- Was steckt hinter der **Lizenz EUPL**?`,frontmatter:{layout:"egg",handle:1},index:7,start:111,end:129,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:zO,meta:{layout:"image-right",handle:2,slide:{raw:`---
layout: image-right
handle: 2
---

# Motivation

<small class="underline">Welche Ziele können damit verfolgt werden?</small>

- gesetzliche Verpflichtung zur Erstellung barrierefreier Benutzeroberflächen
- Großteil der Komponentenbibliotheken haben den Fokus auf Design
- Anforderungen werden immer wieder neu in Projekten umgesetzt
- Reduzierung der Herstellerabhängigkeit (Digitale Souveränität)

<br/>

**Ziel:** Schaffung einer barrierefreien und wieder verwendbaren Standard-Bibliothek, ohne dabei die notwendige Flexibilität und
Gestaltungsfreiheit zu verlieren.
`,title:"Motivation",level:1,content:`# Motivation

<small class="underline">Welche Ziele können damit verfolgt werden?</small>

- gesetzliche Verpflichtung zur Erstellung barrierefreier Benutzeroberflächen
- Großteil der Komponentenbibliotheken haben den Fokus auf Design
- Anforderungen werden immer wieder neu in Projekten umgesetzt
- Reduzierung der Herstellerabhängigkeit (Digitale Souveränität)

<br/>

**Ziel:** Schaffung einer barrierefreien und wieder verwendbaren Standard-Bibliothek, ohne dabei die notwendige Flexibilität und
Gestaltungsfreiheit zu verlieren.`,frontmatter:{layout:"image-right",handle:2},index:8,start:129,end:148,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:NO,meta:{layout:"image-right-50",image:"/presentation/assets/w3c.jpeg",handle:3,slide:{raw:`---
layout: image-right-50
image: '/assets/w3c.jpeg'
handle: 3
---

# Viele Wege führen nach Rom

<small class="underline">Worin liegt eigentlich das Problem?</small>

Barrierefreie Benutzeroberflächen werden durch die semantisch korrekte Komposition von HTML-Elementen realisiert.

Der HTML-Webstandard lässt aber das **Wie** dabei offen. Somit liegt die Aufgabe, das "Problem" zu lösen, bei den Entwickelnden. Darüber hinaus gilt es, die Richtlinien der <kol-abbr _title="Web Content Accessibility Guidelines">WCAG</kol-abbr> mit den gestalterischen Aspekten aus den vielseitigen Styleguides zu vereinen.

Der **große Vorteil für die Bundesverwaltung** liegt darin, dass wir mittels des Web Component-Standards eine für uns **ideale Lösung** gemeinsam **umsetzen**, **wiederverwenden** (teilen), **verbessern** und **erweitern** können.
`,title:"Viele Wege führen nach Rom",level:1,content:`# Viele Wege führen nach Rom

<small class="underline">Worin liegt eigentlich das Problem?</small>

Barrierefreie Benutzeroberflächen werden durch die semantisch korrekte Komposition von HTML-Elementen realisiert.

Der HTML-Webstandard lässt aber das **Wie** dabei offen. Somit liegt die Aufgabe, das "Problem" zu lösen, bei den Entwickelnden. Darüber hinaus gilt es, die Richtlinien der <kol-abbr _title="Web Content Accessibility Guidelines">WCAG</kol-abbr> mit den gestalterischen Aspekten aus den vielseitigen Styleguides zu vereinen.

Der **große Vorteil für die Bundesverwaltung** liegt darin, dass wir mittels des Web Component-Standards eine für uns **ideale Lösung** gemeinsam **umsetzen**, **wiederverwenden** (teilen), **verbessern** und **erweitern** können.`,frontmatter:{layout:"image-right-50",image:"/presentation/assets/w3c.jpeg",handle:3},index:9,start:148,end:164,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:BO,meta:{layout:"image-right-50",image:"/presentation/assets/html-js-css.png",handle:4,slide:{raw:`---
layout: image-right-50
image: '/assets/html-js-css.png'
handle: 4
---

# Web Components

<small class="underline">Was ist eine Web Component?</small>

Webseiten werden mit HTML-Elementen umgesetzt.

- **Web Components**-Standard ermöglicht **eigene** HTMl-Element zu definieren
- Das ist **fixiert**
  - Semantik (HTML) → Assistive Systems / Barrierefreiheit
  - Verhalten (JavaScript) → Usability & Barrierefreiheit
- Das ist **flexibel**
  - Aussehen (CSS) → Corporate Design
- so entstehen barrierefreie, robuste und wiederverwendbare „Bausteine“
`,title:"Web Components",level:1,content:`# Web Components

<small class="underline">Was ist eine Web Component?</small>

Webseiten werden mit HTML-Elementen umgesetzt.

- **Web Components**-Standard ermöglicht **eigene** HTMl-Element zu definieren
- Das ist **fixiert**
  - Semantik (HTML) → Assistive Systems / Barrierefreiheit
  - Verhalten (JavaScript) → Usability & Barrierefreiheit
- Das ist **flexibel**
  - Aussehen (CSS) → Corporate Design
- so entstehen barrierefreie, robuste und wiederverwendbare „Bausteine“`,frontmatter:{layout:"image-right-50",image:"/presentation/assets/html-js-css.png",handle:4},index:10,start:164,end:184,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:GO,meta:{handle:5,slide:{raw:`---
handle: 5
---

# Theming

<small class="underline">Wie ist KoliBri aufgestellt?</small>

<img src="/presentation/assets/theming.png" class="w-3/4 m-auto"/>

`,title:"Theming",level:1,content:`# Theming

<small class="underline">Wie ist KoliBri aufgestellt?</small>

<img src="/presentation/assets/theming.png" class="w-3/4 m-auto"/>`,frontmatter:{handle:5},index:11,start:184,end:195,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:x7,meta:{layout:"demo-time",handle:6,slide:{raw:`---
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

<small class="mt-8 text-xs"><sup>\\*</sup> Quellcode ist für die bessere Nachvollziehbarkeit stark vereinfacht.</small>`,frontmatter:{layout:"demo-time",handle:6},index:12,start:195,end:231,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:E7,meta:{layout:"image-right",handle:7,slide:{raw:`---
layout: image-right
handle: 7
---

# Alleinstellungsmerkmale

<small class="underline">Was macht eigentlich den Unterschied?</small>

Aus Sicht der öffentlichen Verwaltung hat KoliBri eine ganze Reihe an Alleinstellungsmerkmalen:

- **Barrierefreiheit** - kommt zuerst und vor Design
- **Architektur** - universell im Web einsetzbar
- **Wiederverwendbarkeit** - Kleinteilig und gestaltbar
- **Digitale Souveränität** - Code-Hoheit liegt bei uns
- **Robust** - vor Manipulationen geschützt
`,title:"Alleinstellungsmerkmale",level:1,content:`# Alleinstellungsmerkmale

<small class="underline">Was macht eigentlich den Unterschied?</small>

Aus Sicht der öffentlichen Verwaltung hat KoliBri eine ganze Reihe an Alleinstellungsmerkmalen:

- **Barrierefreiheit** - kommt zuerst und vor Design
- **Architektur** - universell im Web einsetzbar
- **Wiederverwendbarkeit** - Kleinteilig und gestaltbar
- **Digitale Souveränität** - Code-Hoheit liegt bei uns
- **Robust** - vor Manipulationen geschützt`,frontmatter:{layout:"image-right",handle:7},index:13,start:231,end:248,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:N7,meta:{layout:"image-right",image:"/presentation/assets/logo.kolibri.png",handle:8,slide:{raw:`---
layout: image-right
image: '/assets/logo.kolibri.png'
handle: 8
---

# Ausblick

<small class="underline">Wo will KoliBri hin?</small>

**KoliBri** wurde durch den **ITZBund** für die **Open Source**-Entwicklung **freigegeben**, um für alle zugänglich zu sein und um aus dem Feedback der Community kontinuierlich verbessert und erweitert werden zu können.

**KoliBri** bietet hierfür eine optimale Wiederverwendbarkeit, weil er …

- **klein** - kleinteilige Komponenten,
- **schnell** - automatisierte DevOps-Pipelines,
- **wendig** - Framework-agnostisch und
- **farbenfroh** - entkoppeltes Theming

<br/>
… ist.
`,title:"Ausblick",level:1,content:`# Ausblick

<small class="underline">Wo will KoliBri hin?</small>

**KoliBri** wurde durch den **ITZBund** für die **Open Source**-Entwicklung **freigegeben**, um für alle zugänglich zu sein und um aus dem Feedback der Community kontinuierlich verbessert und erweitert werden zu können.

**KoliBri** bietet hierfür eine optimale Wiederverwendbarkeit, weil er …

- **klein** - kleinteilige Komponenten,
- **schnell** - automatisierte DevOps-Pipelines,
- **wendig** - Framework-agnostisch und
- **farbenfroh** - entkoppeltes Theming

<br/>
… ist.`,frontmatter:{layout:"image-right",image:"/presentation/assets/logo.kolibri.png",handle:8},index:14,start:248,end:270,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:H7,meta:{layout:"image-right",image:"/presentation/assets/eupl.jpeg",handle:9,slide:{raw:`---
layout: image-right
image: '/assets/eupl.jpeg'
handle: 9
---

# Lizenz

<small class="underline">Was steckt hinter der Lizenz EUPL?</small>

Die "Open-Source-Lizenz für die Europäische Union" (EUPL) ist eine von der Europäischen Union herausgegebene Copyleft-Lizenz für die Lizenzierung freier Software.

- Die reine Verwendung von Artefakten ist vollkommen **unproblematisch**.
- Das Kopieren von Code ist durch die Lizenz geschützt (**Copyleft**)!

<br/>

**EUPL** sichert die freie Nutzung und den Schutz des Urheberrechts.

`,title:"Lizenz",level:1,content:`# Lizenz

<small class="underline">Was steckt hinter der Lizenz EUPL?</small>

Die "Open-Source-Lizenz für die Europäische Union" (EUPL) ist eine von der Europäischen Union herausgegebene Copyleft-Lizenz für die Lizenzierung freier Software.

- Die reine Verwendung von Artefakten ist vollkommen **unproblematisch**.
- Das Kopieren von Code ist durch die Lizenz geschützt (**Copyleft**)!

<br/>

**EUPL** sichert die freie Nutzung und den Schutz des Urheberrechts.`,frontmatter:{layout:"image-right",image:"/presentation/assets/eupl.jpeg",handle:9},index:15,start:270,end:290,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:X7,meta:{layout:"image-right-50",image:"/presentation/assets/website.png",handle:10,style:"width: 100%",slide:{raw:`---
layout: image-right-50
image: '/assets/website.png'
handle: 10
style: 'width: 100%'
---

# Nächste Schritte

Du kannst folgendes tun, um **KoliBri** kennenzulernen …

<v-clicks>

- <kol-link _href="https://public-ui.github.io" _target="website">Lese mehr über KoliBri</kol-link> (Dokumentation)
- <kol-link _href="https://public-ui.github.io/docs/get-started/erste-schritte" _target="website">Probiere KoliBri aus</kol-link> (Create-App)
- <kol-link _href="https://public-ui.github.io/docs/konzepte/architektur#erweitert" _target="github">Nutze KoliBri in Deinem Design System</kol-link> (Nutzen)
- <kol-link _href="https://public-ui.github.io/docs/concepts/styling/theming" _target="website">Gestalte Dein eigenen KoliBri</kol-link> (Designer)
- <kol-link _href="https://github.com/public-ui/kolibri/issues" _target="github">Gib uns Feedback</kol-link> (Feature, Issue)
- <kol-link _href="https://github.com/public-ui/kolibri" _target="github">Folge und teile uns</kol-link> (Follow-Button)

</v-clicks>
`,title:"Nächste Schritte",level:1,content:`# Nächste Schritte

Du kannst folgendes tun, um **KoliBri** kennenzulernen …

<v-clicks>

- <kol-link _href="https://public-ui.github.io" _target="website">Lese mehr über KoliBri</kol-link> (Dokumentation)
- <kol-link _href="https://public-ui.github.io/docs/get-started/erste-schritte" _target="website">Probiere KoliBri aus</kol-link> (Create-App)
- <kol-link _href="https://public-ui.github.io/docs/konzepte/architektur#erweitert" _target="github">Nutze KoliBri in Deinem Design System</kol-link> (Nutzen)
- <kol-link _href="https://public-ui.github.io/docs/concepts/styling/theming" _target="website">Gestalte Dein eigenen KoliBri</kol-link> (Designer)
- <kol-link _href="https://github.com/public-ui/kolibri/issues" _target="github">Gib uns Feedback</kol-link> (Feature, Issue)
- <kol-link _href="https://github.com/public-ui/kolibri" _target="github">Folge und teile uns</kol-link> (Follow-Button)

</v-clicks>`,frontmatter:{layout:"image-right-50",image:"/presentation/assets/website.png",handle:10,style:"width: 100%"},index:16,start:290,end:312,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:rS,meta:{layout:"center",slide:{raw:`---
layout: center
---

<img class="m-auto block w-50 pb-10" src="/presentation/assets/qr-code.png" />

# Vielen Dank für Eure Aufmerksamkeit

<br/>
<small class="underline">
Lasst uns gemeinsam KoliBri bunter und besser machen!<br/><br/></small>


<ul class="flex">
  <li class="list-none"><kol-link _href="https://public-ui.github.io" _target="website"><kol-icon _icon="codicon codicon-book" /> Dokumentation</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="mailto:kolibri@itzbund.de" _target="mail"><kol-icon _icon="codicon codicon-mail" /> kolibri@itzbund.de</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="https://github.com/public-ui/kolibri" _target="github"><kol-icon _icon="codicon codicon-github" /> GitHub</kol-link></li>
</ul>
`,title:"Vielen Dank für Eure Aufmerksamkeit",level:1,content:`<img class="m-auto block w-50 pb-10" src="/presentation/assets/qr-code.png" />

# Vielen Dank für Eure Aufmerksamkeit

<br/>
<small class="underline">
Lasst uns gemeinsam KoliBri bunter und besser machen!<br/><br/></small>


<ul class="flex">
  <li class="list-none"><kol-link _href="https://public-ui.github.io" _target="website"><kol-icon _icon="codicon codicon-book" /> Dokumentation</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="mailto:kolibri@itzbund.de" _target="mail"><kol-icon _icon="codicon codicon-mail" /> kolibri@itzbund.de</kol-link></li>
  <li class="list-none">|</li>
  <li class="list-none"><kol-link _href="https://github.com/public-ui/kolibri" _target="github"><kol-icon _icon="codicon codicon-github" /> GitHub</kol-link></li>
</ul>`,frontmatter:{layout:"center"},index:17,start:312,end:333,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:aS,meta:{slide:{raw:`
<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />
`,content:'<kol-logo _org="ITZBund" class="m-auto pl-40 block w-140" />',frontmatter:{},index:18,start:334,end:337,noteHTML:"",filepath:"/home/runner/work/kolibri/kolibri/packages/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",component:Y3,meta:{layout:"end"}}],Xe=lS,Fn=[{name:"play",path:"/",component:w4,children:[...Xe]},{name:"print",path:"/print",component:W3},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(o){if(!Cn.remote||Cn.remote===o.query.password)return!0;if(Cn.remote&&o.query.password===void 0){const t=prompt("Enter password");if(Cn.remote===t)return!0}return o.params.no?{path:`/${o.params.no}`}:{path:""}};Fn.push({path:"/presenter/print",component:()=>Zt(()=>import("./PresenterPrint-85ef12fa.js"),["assets/PresenterPrint-85ef12fa.js","assets/NoteDisplay-4aba29b4.js"])}),Fn.push({name:"notes",path:"/notes",component:()=>Zt(()=>import("./NotesView-f11a5ade.js"),["assets/NotesView-f11a5ade.js","assets/NoteDisplay-4aba29b4.js"]),beforeEnter:e}),Fn.push({name:"presenter",path:"/presenter/:no",component:()=>Zt(()=>import("./Presenter-f6b0777b.js"),["assets/Presenter-f6b0777b.js","assets/NoteDisplay-4aba29b4.js","assets/DrawingControls-91a431c1.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),Fn.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const zo=sx({history:l1("/presentation"),routes:Fn});function sS(e,o,{mode:t="replace"}={}){return P({get(){const r=zo.currentRoute.value.query[e];return r==null?o??null:Array.isArray(r)?r.filter(Boolean):r},set(r){so(()=>{zo[S(t)]({query:{...zo.currentRoute.value.query,[e]:r}})})}})}const Tb=H(0);so(()=>{zo.afterEach(async()=>{await so(),Tb.value+=1})});const Ab=H(0),Ho=P(()=>zo.currentRoute.value),sn=P(()=>Ho.value.query.print!==void 0),cS=P(()=>Ho.value.query.print==="clicks"),zt=P(()=>Ho.value.query.embedded!==void 0),Oo=P(()=>Ho.value.path.startsWith("/presenter")),dS=P(()=>Ho.value.path.startsWith("/notes")),Bn=P(()=>sn.value&&!cS.value),Ls=P(()=>Ho.value.query.password),fS=P(()=>!Oo.value&&(!Pe.remote||Ls.value===Pe.remote)),Nf=sS("clicks","0"),uS=P(()=>Xe.length-1),pS=P(()=>Ho.value.path),Ve=P(()=>parseInt(pS.value.split(/\//g).slice(-1)[0])||1);P(()=>el(Ve.value));const vo=P(()=>Xe.find(e=>e.path===`${Ve.value}`));P(()=>{var e,o,t;return(t=(o=(e=vo.value)==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:t.id});P(()=>{var e,o;return((o=(e=vo.value)==null?void 0:e.meta)==null?void 0:o.layout)||(Ve.value===1?"cover":"default")});const El=P(()=>Xe.find(e=>e.path===`${Math.min(Xe.length,Ve.value+1)}`)),hS=P(()=>Xe.find(e=>e.path===`${Math.max(1,Ve.value-1)}`)),bS=P(()=>{var e,o;return Tb.value,((o=(e=vo.value)==null?void 0:e.meta)==null?void 0:o.__clicksElements)||[]}),Bo=P({get(){if(Bn.value)return 99999;let e=+(Nf.value||0);return isNaN(e)&&(e=0),e},set(e){Nf.value=e.toString()}}),Oa=P(()=>{var e,o;return+(((o=(e=vo.value)==null?void 0:e.meta)==null?void 0:o.clicks)??bS.value.length)}),gS=P(()=>Ve.value<Xe.length-1||Bo.value<Oa.value),mS=P(()=>Ve.value>1||Bo.value>0),vS=P(()=>Xe.filter(e=>{var o,t;return(t=(o=e.meta)==null?void 0:o.slide)==null?void 0:t.title}).reduce((e,o)=>(Ec(e,o),e),[])),kS=P(()=>Tc(vS.value,vo.value));P(()=>Ac(kS.value));const wS=P(()=>SS(Ab.value,vo.value,hS.value));we(vo,(e,o)=>{Ab.value=Number(e==null?void 0:e.path)-Number(o==null?void 0:o.path)});function Qt(){Oa.value<=Bo.value?li():Bo.value+=1}async function er(){Bo.value<=0?await si():Bo.value-=1}function el(e){return Oo.value?`/presenter/${e}`:`/${e}`}function li(){const e=Math.min(Xe.length,Ve.value+1);return cn(e)}async function si(e=!0){const o=Math.max(1,Ve.value-1);await cn(o),e&&Oa.value&&zo.replace({query:{...Ho.value.query,clicks:Oa.value}})}function cn(e,o){return zo.push({path:el(e),query:{...Ho.value.query,clicks:o}})}function yS(e){const o=H(0),{direction:t,distanceX:r,distanceY:n}=Ay(e,{onSwipeStart(i){i.pointerType==="touch"&&(ni.value||(o.value=ss()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!o.value||ni.value)return;const a=Math.abs(r.value),l=Math.abs(n.value);a/window.innerWidth>.3||a>100?t.value==="left"?Qt():er():(l/window.innerHeight>.4||l>200)&&(t.value==="down"?si():li())}})}async function Es(){const{saveAs:e}=await Zt(()=>import("./FileSaver.min-4e34f5f1.js").then(o=>o.F),[]);e(typeof Pe.download=="string"?Pe.download:Pe.exportFilename?`${Pe.exportFilename}.pdf`:"/presentationslidev-exported.pdf",`${Pe.title}.pdf`)}async function xS(e){var o,t;if(e==null){const r=(t=(o=vo.value)==null?void 0:o.meta)==null?void 0:t.slide;if(!(r!=null&&r.filepath))return!1;e=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ec(e,o,t=1){var n,i,a,l,s;const r=(i=(n=o.meta)==null?void 0:n.slide)==null?void 0:i.level;r&&r>t&&e.length>0?Ec(e[e.length-1].children,o,t+1):e.push({children:[],level:t,path:o.path,hideInToc:!!((a=o.meta)!=null&&a.hideInToc),title:(s=(l=o.meta)==null?void 0:l.slide)==null?void 0:s.title})}function Tc(e,o,t=!1,r){return e.map(n=>{const i={...n,active:n.path===(o==null?void 0:o.path),hasActiveParent:t};return i.children.length>0&&(i.children=Tc(i.children,o,i.active||i.hasActiveParent,i)),r&&(i.active||i.activeParent)&&(r.activeParent=!0),i})}function Ac(e,o=1){return e.filter(t=>!t.hideInToc).map(t=>({...t,children:Ac(t.children,o+1)}))}const _S={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function OS(e,o=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let t=e.name.includes("|")?e.name:_S[e.name]||e.name;if(t.includes("|")){const[r,n]=t.split("|").map(i=>i.trim());t=o?n:r}if(t)return{...e,name:t}}function SS(e,o,t){var n,i;let r=e>0?(n=t==null?void 0:t.meta)==null?void 0:n.transition:(i=o==null?void 0:o.meta)==null?void 0:i.transition;return r||(r=Pe.transition),OS(r,e<0)}function zS(){const e=Pe.titleTemplate.replace("%s",Pe.title||"Slidev");kh({title:e,htmlAttrs:Pe.htmlAttrs}),fw(`${e} - shared`),bw(`${e} - drawings`);const o=`${location.origin}_${iw()}`;function t(){dS.value||!Oo.value&&!nw.includes(location.host.split(":")[0])||(Oo.value?(wn("page",+Ve.value),wn("clicks",Bo.value)):(wn("viewerPage",+Ve.value),wn("viewerClicks",Bo.value)),wn("lastUpdate",{id:o,type:Oo.value?"presenter":"viewer",time:new Date().getTime()}))}zo.afterEach(t),we(Bo,t),uw(r=>{var i;zo.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((i=r.lastUpdate)==null?void 0:i.type)==="presenter"&&(+r.page!=+Ve.value||+Bo.value!=+r.clicks)&&zo.replace({path:el(r.page),query:{...zo.currentRoute.value.query,clicks:r.clicks||0}})})}const LS=ae({__name:"App",setup(e){return Y(ne),zS(),(o,t)=>{const r=pa("RouterView"),n=pa("StarportCarrier");return A(),X(Ce,null,[re(r),re(n)],64)}}}),ES=le(LS,[["__file","/home/runner/work/kolibri/kolibri/packages/slidev/node_modules/@slidev/client/App.vue"]]);function Tl(e){return e!==null&&typeof e=="object"}function Ts(e,o,t=".",r){if(!Tl(o))return Ts(e,{},t,r);const n=Object.assign({},o);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const a=e[i];a!=null&&(r&&r(n,i,a,t)||(Array.isArray(a)&&Array.isArray(n[i])?n[i]=[...a,...n[i]]:Tl(a)&&Tl(n[i])?n[i]=Ts(a,n[i],(t?`${t}.`:"")+i.toString(),r):n[i]=a))}return n}function TS(e){return(...o)=>o.reduce((t,r)=>Ts(t,r,"",e),{})}const AS=TS();var Rf;const Pb=typeof window<"u",PS=Object.prototype.toString,CS=e=>typeof e=="number",FS=e=>typeof e=="string",As=e=>PS.call(e)==="[object Object]",ta=()=>{};Pb&&((Rf=window==null?void 0:window.navigator)!=null&&Rf.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Cb(e){return typeof e=="function"?e():S(e)}function $S(e){return e}function Fb(e){return $a()?(Ys(e),!0):!1}function IS(e,o=!0){xo()?vt(e):o?e():so(e)}function NS(e){xo()&&vi(e)}function Sa(e){var o;const t=Cb(e);return(o=t==null?void 0:t.$el)!=null?o:t}const $b=Pb?window:void 0;function Wo(...e){let o,t,r,n;if(FS(e[0])||Array.isArray(e[0])?([t,r,n]=e,o=$b):[o,t,r,n]=e,!o)return ta;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const i=[],a=()=>{i.forEach(d=>d()),i.length=0},l=(d,f,u,h)=>(d.addEventListener(f,u,h),()=>d.removeEventListener(f,u,h)),s=we(()=>[Sa(o),Cb(n)],([d,f])=>{a(),d&&i.push(...t.flatMap(u=>r.map(h=>l(d,u,h,f))))},{immediate:!0,flush:"post"}),c=()=>{s(),a()};return Fb(c),c}function RS(e,o=!1){const t=H(),r=()=>t.value=!!e();return r(),IS(r,o),t}const jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mf="__vueuse_ssr_handlers__";jf[Mf]=jf[Mf]||{};function jS(e,o,t={}){const{root:r,rootMargin:n="0px",threshold:i=.1,window:a=$b}=t,l=RS(()=>a&&"IntersectionObserver"in a);let s=ta;const c=l.value?we(()=>({el:Sa(e),root:Sa(r)}),({el:f,root:u})=>{if(s(),!f)return;const h=new IntersectionObserver(o,{root:u,rootMargin:n,threshold:i});h.observe(f),s=()=>{h.disconnect(),s=ta}},{immediate:!0,flush:"post"}):ta,d=()=>{s(),c()};return Fb(d),{isSupported:l,stop:d}}var Df;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Df||(Df={}));var MS=Object.defineProperty,Kf=Object.getOwnPropertySymbols,DS=Object.prototype.hasOwnProperty,KS=Object.prototype.propertyIsEnumerable,Bf=(e,o,t)=>o in e?MS(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,BS=(e,o)=>{for(var t in o||(o={}))DS.call(o,t)&&Bf(e,t,o[t]);if(Kf)for(var t of Kf(o))KS.call(o,t)&&Bf(e,t,o[t]);return e};const US={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};BS({linear:$S},US);const Ib=1/60*1e3,HS=typeof performance<"u"?()=>performance.now():()=>Date.now(),Nb=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(HS()),Ib);function qS(e){let o=[],t=[],r=0,n=!1,i=!1;const a=new WeakSet,l={schedule:(s,c=!1,d=!1)=>{const f=d&&n,u=f?o:t;return c&&a.add(s),u.indexOf(s)===-1&&(u.push(s),f&&n&&(r=o.length)),s},cancel:s=>{const c=t.indexOf(s);c!==-1&&t.splice(c,1),a.delete(s)},process:s=>{if(n){i=!0;return}if(n=!0,[o,t]=[t,o],t.length=0,r=o.length,r)for(let c=0;c<r;c++){const d=o[c];d(s),a.has(d)&&(l.schedule(d),e())}n=!1,i&&(i=!1,l.process(s))}};return l}const VS=40;let Ps=!0,ci=!1,Cs=!1;const tn={delta:0,timestamp:0},yi=["read","update","preRender","render","postRender"],ol=yi.reduce((e,o)=>(e[o]=qS(()=>ci=!0),e),{}),Fs=yi.reduce((e,o)=>{const t=ol[o];return e[o]=(r,n=!1,i=!1)=>(ci||XS(),t.schedule(r,n,i)),e},{}),WS=yi.reduce((e,o)=>(e[o]=ol[o].cancel,e),{});yi.reduce((e,o)=>(e[o]=()=>ol[o].process(tn),e),{});const GS=e=>ol[e].process(tn),Rb=e=>{ci=!1,tn.delta=Ps?Ib:Math.max(Math.min(e-tn.timestamp,VS),1),tn.timestamp=e,Cs=!0,yi.forEach(GS),Cs=!1,ci&&(Ps=!1,Nb(Rb))},XS=()=>{ci=!0,Ps=!0,Cs||Nb(Rb)},jb=()=>tn;function Mb(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t}var Pc=function(){},di=function(){};Pc=function(e,o){!e&&typeof console<"u"&&console.warn(o)},di=function(e,o){if(!e)throw new Error(o)};const $s=(e,o,t)=>Math.min(Math.max(t,e),o),Al=.001,YS=.01,Uf=10,ZS=.05,JS=1;function QS({duration:e=800,bounce:o=.25,velocity:t=0,mass:r=1}){let n,i;Pc(e<=Uf*1e3,"Spring duration must be 10 seconds or less");let a=1-o;a=$s(ZS,JS,a),e=$s(YS,Uf,e/1e3),a<1?(n=c=>{const d=c*a,f=d*e,u=d-t,h=Is(c,a),b=Math.exp(-f);return Al-u/h*b},i=c=>{const f=c*a*e,u=f*t+t,h=Math.pow(a,2)*Math.pow(c,2)*e,b=Math.exp(-f),g=Is(Math.pow(c,2),a);return(-n(c)+Al>0?-1:1)*((u-h)*b)/g}):(n=c=>{const d=Math.exp(-c*e),f=(c-t)*e+1;return-Al+d*f},i=c=>{const d=Math.exp(-c*e),f=(t-c)*(e*e);return d*f});const l=5/e,s=oz(n,i,l);if(e=e*1e3,isNaN(s))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(s,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:e}}}const ez=12;function oz(e,o,t){let r=t;for(let n=1;n<ez;n++)r=r-e(r)/o(r);return r}function Is(e,o){return e*Math.sqrt(1-o*o)}const tz=["duration","bounce"],rz=["stiffness","damping","mass"];function Hf(e,o){return o.some(t=>e[t]!==void 0)}function nz(e){let o=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Hf(e,rz)&&Hf(e,tz)){const t=QS(e);o=Object.assign(Object.assign(Object.assign({},o),t),{velocity:0,mass:1}),o.isResolvedFromDuration=!0}return o}function Cc(e){var{from:o=0,to:t=1,restSpeed:r=2,restDelta:n}=e,i=Mb(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:o};let{stiffness:l,damping:s,mass:c,velocity:d,duration:f,isResolvedFromDuration:u}=nz(i),h=qf,b=qf;function g(){const m=d?-(d/1e3):0,k=t-o,w=s/(2*Math.sqrt(l*c)),y=Math.sqrt(l/c)/1e3;if(n===void 0&&(n=Math.min(Math.abs(t-o)/100,.4)),w<1){const x=Is(y,w);h=z=>{const L=Math.exp(-w*y*z);return t-L*((m+w*y*k)/x*Math.sin(x*z)+k*Math.cos(x*z))},b=z=>{const L=Math.exp(-w*y*z);return w*y*L*(Math.sin(x*z)*(m+w*y*k)/x+k*Math.cos(x*z))-L*(Math.cos(x*z)*(m+w*y*k)-x*k*Math.sin(x*z))}}else if(w===1)h=x=>t-Math.exp(-y*x)*(k+(m+y*k)*x);else{const x=y*Math.sqrt(w*w-1);h=z=>{const L=Math.exp(-w*y*z),$=Math.min(x*z,300);return t-L*((m+w*y*k)*Math.sinh($)+x*k*Math.cosh($))/x}}}return g(),{next:m=>{const k=h(m);if(u)a.done=m>=f;else{const w=b(m)*1e3,y=Math.abs(w)<=r,x=Math.abs(t-k)<=n;a.done=y&&x}return a.value=a.done?t:k,a},flipTarget:()=>{d=-d,[o,t]=[t,o],g()}}}Cc.needsInterpolation=(e,o)=>typeof e=="string"||typeof o=="string";const qf=e=>0,Db=(e,o,t)=>{const r=o-e;return r===0?1:(t-e)/r},Fc=(e,o,t)=>-t*e+t*o+e,Kb=(e,o)=>t=>Math.max(Math.min(t,o),e),Un=e=>e%1?Number(e.toFixed(5)):e,fi=/(-)?([\d]*\.?[\d])+/g,Ns=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,iz=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function xi(e){return typeof e=="string"}const _i={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Hn=Object.assign(Object.assign({},_i),{transform:Kb(0,1)}),Ui=Object.assign(Object.assign({},_i),{default:1}),$c=e=>({test:o=>xi(o)&&o.endsWith(e)&&o.split(" ").length===1,parse:parseFloat,transform:o=>`${o}${e}`}),ur=$c("deg"),qn=$c("%"),_e=$c("px"),Vf=Object.assign(Object.assign({},qn),{parse:e=>qn.parse(e)/100,transform:e=>qn.transform(e*100)}),Ic=(e,o)=>t=>!!(xi(t)&&iz.test(t)&&t.startsWith(e)||o&&Object.prototype.hasOwnProperty.call(t,o)),Bb=(e,o,t)=>r=>{if(!xi(r))return r;const[n,i,a,l]=r.match(fi);return{[e]:parseFloat(n),[o]:parseFloat(i),[t]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},Sr={test:Ic("hsl","hue"),parse:Bb("hue","saturation","lightness"),transform:({hue:e,saturation:o,lightness:t,alpha:r=1})=>"hsla("+Math.round(e)+", "+qn.transform(Un(o))+", "+qn.transform(Un(t))+", "+Un(Hn.transform(r))+")"},az=Kb(0,255),Pl=Object.assign(Object.assign({},_i),{transform:e=>Math.round(az(e))}),qt={test:Ic("rgb","red"),parse:Bb("red","green","blue"),transform:({red:e,green:o,blue:t,alpha:r=1})=>"rgba("+Pl.transform(e)+", "+Pl.transform(o)+", "+Pl.transform(t)+", "+Un(Hn.transform(r))+")"};function lz(e){let o="",t="",r="",n="";return e.length>5?(o=e.substr(1,2),t=e.substr(3,2),r=e.substr(5,2),n=e.substr(7,2)):(o=e.substr(1,1),t=e.substr(2,1),r=e.substr(3,1),n=e.substr(4,1),o+=o,t+=t,r+=r,n+=n),{red:parseInt(o,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:n?parseInt(n,16)/255:1}}const Rs={test:Ic("#"),parse:lz,transform:qt.transform},_o={test:e=>qt.test(e)||Rs.test(e)||Sr.test(e),parse:e=>qt.test(e)?qt.parse(e):Sr.test(e)?Sr.parse(e):Rs.parse(e),transform:e=>xi(e)?e:e.hasOwnProperty("red")?qt.transform(e):Sr.transform(e)},Ub="${c}",Hb="${n}";function sz(e){var o,t,r,n;return isNaN(e)&&xi(e)&&((t=(o=e.match(fi))===null||o===void 0?void 0:o.length)!==null&&t!==void 0?t:0)+((n=(r=e.match(Ns))===null||r===void 0?void 0:r.length)!==null&&n!==void 0?n:0)>0}function qb(e){typeof e=="number"&&(e=`${e}`);const o=[];let t=0;const r=e.match(Ns);r&&(t=r.length,e=e.replace(Ns,Ub),o.push(...r.map(_o.parse)));const n=e.match(fi);return n&&(e=e.replace(fi,Hb),o.push(...n.map(_i.parse))),{values:o,numColors:t,tokenised:e}}function Vb(e){return qb(e).values}function Wb(e){const{values:o,numColors:t,tokenised:r}=qb(e),n=o.length;return i=>{let a=r;for(let l=0;l<n;l++)a=a.replace(l<t?Ub:Hb,l<t?_o.transform(i[l]):Un(i[l]));return a}}const cz=e=>typeof e=="number"?0:e;function dz(e){const o=Vb(e);return Wb(e)(o.map(cz))}const Oi={test:sz,parse:Vb,createTransformer:Wb,getAnimatableNone:dz},fz=new Set(["brightness","contrast","saturate","opacity"]);function uz(e){let[o,t]=e.slice(0,-1).split("(");if(o==="drop-shadow")return e;const[r]=t.match(fi)||[];if(!r)return e;const n=t.replace(r,"");let i=fz.has(o)?1:0;return r!==t&&(i*=100),o+"("+i+n+")"}const pz=/([a-z-]*)\(.*?\)/g,js=Object.assign(Object.assign({},Oi),{getAnimatableNone:e=>{const o=e.match(pz);return o?o.map(uz).join(" "):e}});function Cl(e,o,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(o-e)*6*t:t<1/2?o:t<2/3?e+(o-e)*(2/3-t)*6:e}function Wf({hue:e,saturation:o,lightness:t,alpha:r}){e/=360,o/=100,t/=100;let n=0,i=0,a=0;if(!o)n=i=a=t;else{const l=t<.5?t*(1+o):t+o-t*o,s=2*t-l;n=Cl(s,l,e+1/3),i=Cl(s,l,e),a=Cl(s,l,e-1/3)}return{red:Math.round(n*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:r}}const hz=(e,o,t)=>{const r=e*e,n=o*o;return Math.sqrt(Math.max(0,t*(n-r)+r))},bz=[Rs,qt,Sr],Gf=e=>bz.find(o=>o.test(e)),Xf=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Gb=(e,o)=>{let t=Gf(e),r=Gf(o);di(!!t,Xf(e)),di(!!r,Xf(o));let n=t.parse(e),i=r.parse(o);t===Sr&&(n=Wf(n),t=qt),r===Sr&&(i=Wf(i),r=qt);const a=Object.assign({},n);return l=>{for(const s in a)s!=="alpha"&&(a[s]=hz(n[s],i[s],l));return a.alpha=Fc(n.alpha,i.alpha,l),t.transform(a)}},gz=e=>typeof e=="number",mz=(e,o)=>t=>o(e(t)),Xb=(...e)=>e.reduce(mz);function Yb(e,o){return gz(e)?t=>Fc(e,o,t):_o.test(e)?Gb(e,o):Jb(e,o)}const Zb=(e,o)=>{const t=[...e],r=t.length,n=e.map((i,a)=>Yb(i,o[a]));return i=>{for(let a=0;a<r;a++)t[a]=n[a](i);return t}},vz=(e,o)=>{const t=Object.assign(Object.assign({},e),o),r={};for(const n in t)e[n]!==void 0&&o[n]!==void 0&&(r[n]=Yb(e[n],o[n]));return n=>{for(const i in r)t[i]=r[i](n);return t}};function Yf(e){const o=Oi.parse(e),t=o.length;let r=0,n=0,i=0;for(let a=0;a<t;a++)r||typeof o[a]=="number"?r++:o[a].hue!==void 0?i++:n++;return{parsed:o,numNumbers:r,numRGB:n,numHSL:i}}const Jb=(e,o)=>{const t=Oi.createTransformer(o),r=Yf(e),n=Yf(o);return r.numHSL===n.numHSL&&r.numRGB===n.numRGB&&r.numNumbers>=n.numNumbers?Xb(Zb(r.parsed,n.parsed),t):(Pc(!0,`Complex values '${e}' and '${o}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?o:e}`)},kz=(e,o)=>t=>Fc(e,o,t);function wz(e){if(typeof e=="number")return kz;if(typeof e=="string")return _o.test(e)?Gb:Jb;if(Array.isArray(e))return Zb;if(typeof e=="object")return vz}function yz(e,o,t){const r=[],n=t||wz(e[0]),i=e.length-1;for(let a=0;a<i;a++){let l=n(e[a],e[a+1]);if(o){const s=Array.isArray(o)?o[a]:o;l=Xb(s,l)}r.push(l)}return r}function xz([e,o],[t]){return r=>t(Db(e,o,r))}function _z(e,o){const t=e.length,r=t-1;return n=>{let i=0,a=!1;if(n<=e[0]?a=!0:n>=e[r]&&(i=r-1,a=!0),!a){let s=1;for(;s<t&&!(e[s]>n||s===r);s++);i=s-1}const l=Db(e[i],e[i+1],n);return o[i](l)}}function Qb(e,o,{clamp:t=!0,ease:r,mixer:n}={}){const i=e.length;di(i===o.length,"Both input and output ranges must be the same length"),di(!r||!Array.isArray(r)||r.length===i-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[i-1]&&(e=[].concat(e),o=[].concat(o),e.reverse(),o.reverse());const a=yz(o,r,n),l=i===2?xz(e,a):_z(e,a);return t?s=>l($s(e[0],e[i-1],s)):l}const tl=e=>o=>1-e(1-o),Nc=e=>o=>o<=.5?e(2*o)/2:(2-e(2*(1-o)))/2,Oz=e=>o=>Math.pow(o,e),eg=e=>o=>o*o*((e+1)*o-e),Sz=e=>{const o=eg(e);return t=>(t*=2)<1?.5*o(t):.5*(2-Math.pow(2,-10*(t-1)))},og=1.525,zz=4/11,Lz=8/11,Ez=9/10,tg=e=>e,Rc=Oz(2),Tz=tl(Rc),rg=Nc(Rc),ng=e=>1-Math.sin(Math.acos(e)),ig=tl(ng),Az=Nc(ig),jc=eg(og),Pz=tl(jc),Cz=Nc(jc),Fz=Sz(og),$z=4356/361,Iz=35442/1805,Nz=16061/1805,za=e=>{if(e===1||e===0)return e;const o=e*e;return e<zz?7.5625*o:e<Lz?9.075*o-9.9*e+3.4:e<Ez?$z*o-Iz*e+Nz:10.8*e*e-20.52*e+10.72},Rz=tl(za),jz=e=>e<.5?.5*(1-za(1-e*2)):.5*za(e*2-1)+.5;function Mz(e,o){return e.map(()=>o||rg).splice(0,e.length-1)}function Dz(e){const o=e.length;return e.map((t,r)=>r!==0?r/(o-1):0)}function Kz(e,o){return e.map(t=>t*o)}function ra({from:e=0,to:o=1,ease:t,offset:r,duration:n=300}){const i={done:!1,value:e},a=Array.isArray(o)?o:[e,o],l=Kz(r&&r.length===a.length?r:Dz(a),n);function s(){return Qb(l,a,{ease:Array.isArray(t)?t:Mz(a,t)})}let c=s();return{next:d=>(i.value=c(d),i.done=d>=n,i),flipTarget:()=>{a.reverse(),c=s()}}}function Bz({velocity:e=0,from:o=0,power:t=.8,timeConstant:r=350,restDelta:n=.5,modifyTarget:i}){const a={done:!1,value:o};let l=t*e;const s=o+l,c=i===void 0?s:i(s);return c!==s&&(l=c-o),{next:d=>{const f=-l*Math.exp(-d/r);return a.done=!(f>n||f<-n),a.value=a.done?c:c+f,a},flipTarget:()=>{}}}const Zf={keyframes:ra,spring:Cc,decay:Bz};function Uz(e){if(Array.isArray(e.to))return ra;if(Zf[e.type])return Zf[e.type];const o=new Set(Object.keys(e));return o.has("ease")||o.has("duration")&&!o.has("dampingRatio")?ra:o.has("dampingRatio")||o.has("stiffness")||o.has("mass")||o.has("damping")||o.has("restSpeed")||o.has("restDelta")?Cc:ra}function ag(e,o,t=0){return e-o-t}function Hz(e,o,t=0,r=!0){return r?ag(o+-e,o,t):o-(e-o)+t}function qz(e,o,t,r){return r?e>=o+t:e<=-t}const Vz=e=>{const o=({delta:t})=>e(t);return{start:()=>Fs.update(o,!0),stop:()=>WS.update(o)}};function lg(e){var o,t,{from:r,autoplay:n=!0,driver:i=Vz,elapsed:a=0,repeat:l=0,repeatType:s="loop",repeatDelay:c=0,onPlay:d,onStop:f,onComplete:u,onRepeat:h,onUpdate:b}=e,g=Mb(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:m}=g,k,w=0,y=g.duration,x,z=!1,L=!0,$;const O=Uz(g);!((t=(o=O).needsInterpolation)===null||t===void 0)&&t.call(o,r,m)&&($=Qb([0,100],[r,m],{clamp:!1}),r=0,m=100);const T=O(Object.assign(Object.assign({},g),{from:r,to:m}));function U(){w++,s==="reverse"?(L=w%2===0,a=Hz(a,y,c,L)):(a=ag(a,y,c),s==="mirror"&&T.flipTarget()),z=!1,h&&h()}function Z(){k.stop(),u&&u()}function D(de){if(L||(de=-de),a+=de,!z){const ye=T.next(Math.max(0,a));x=ye.value,$&&(x=$(x)),z=L?ye.done:a<=0}b==null||b(x),z&&(w===0&&(y??(y=a)),w<l?qz(a,y,c,L)&&U():Z())}function be(){d==null||d(),k=i(D),k.start()}return n&&be(),{stop:()=>{f==null||f(),k.stop()}}}function sg(e,o){return o?e*(1e3/o):0}function Wz({from:e=0,velocity:o=0,min:t,max:r,power:n=.8,timeConstant:i=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:s=1,modifyTarget:c,driver:d,onUpdate:f,onComplete:u,onStop:h}){let b;function g(y){return t!==void 0&&y<t||r!==void 0&&y>r}function m(y){return t===void 0?r:r===void 0||Math.abs(t-y)<Math.abs(r-y)?t:r}function k(y){b==null||b.stop(),b=lg(Object.assign(Object.assign({},y),{driver:d,onUpdate:x=>{var z;f==null||f(x),(z=y.onUpdate)===null||z===void 0||z.call(y,x)},onComplete:u,onStop:h}))}function w(y){k(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:s},y))}if(g(e))w({from:e,velocity:o,to:m(e)});else{let y=n*o+e;typeof c<"u"&&(y=c(y));const x=m(y),z=x===t?-1:1;let L,$;const O=T=>{L=$,$=T,o=sg(T-L,jb().delta),(z===1&&T>x||z===-1&&T<x)&&w({from:T,to:x,velocity:o})};k({type:"decay",from:e,velocity:o,timeConstant:i,power:n,restDelta:s,modifyTarget:c,onUpdate:g(y)?O:void 0})}return{stop:()=>b==null?void 0:b.stop()}}const cg=(e,o)=>1-3*o+3*e,dg=(e,o)=>3*o-6*e,fg=e=>3*e,La=(e,o,t)=>((cg(o,t)*e+dg(o,t))*e+fg(o))*e,ug=(e,o,t)=>3*cg(o,t)*e*e+2*dg(o,t)*e+fg(o),Gz=1e-7,Xz=10;function Yz(e,o,t,r,n){let i,a,l=0;do a=o+(t-o)/2,i=La(a,r,n)-e,i>0?t=a:o=a;while(Math.abs(i)>Gz&&++l<Xz);return a}const Zz=8,Jz=.001;function Qz(e,o,t,r){for(let n=0;n<Zz;++n){const i=ug(o,t,r);if(i===0)return o;const a=La(o,t,r)-e;o-=a/i}return o}const na=11,Hi=1/(na-1);function e8(e,o,t,r){if(e===o&&t===r)return tg;const n=new Float32Array(na);for(let a=0;a<na;++a)n[a]=La(a*Hi,e,t);function i(a){let l=0,s=1;const c=na-1;for(;s!==c&&n[s]<=a;++s)l+=Hi;--s;const d=(a-n[s])/(n[s+1]-n[s]),f=l+d*Hi,u=ug(f,e,t);return u>=Jz?Qz(a,f,e,t):u===0?f:Yz(a,l,l+Hi,e,t)}return a=>a===0||a===1?a:La(i(a),o,r)}const Fl={};class o8{constructor(){this.subscriptions=new Set}add(o){return this.subscriptions.add(o),()=>this.subscriptions.delete(o)}notify(o,t,r){if(this.subscriptions.size)for(const n of this.subscriptions)n(o,t,r)}clear(){this.subscriptions.clear()}}const Jf=e=>!isNaN(parseFloat(e));class t8{constructor(o){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new o8,this.canTrackVelocity=!1,this.updateAndNotify=t=>{this.prev=this.current,this.current=t;const{delta:r,timestamp:n}=jb();this.lastUpdated!==n&&(this.timeDelta=r,this.lastUpdated=n),Fs.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Fs.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=Jf(this.current)),t!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=o,this.canTrackVelocity=Jf(this.current)}onChange(o){return this.updateSubscribers.add(o)}clearListeners(){this.updateSubscribers.clear()}set(o){this.updateAndNotify(o)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?sg(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(o){return this.stop(),new Promise(t=>{const{stop:r}=o(t);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function r8(e){return new t8(e)}const{isArray:n8}=Array;function i8(){const e=H({}),o=r=>{const n=i=>{e.value[i]&&(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};r?n8(r)?r.forEach(n):n(r):Object.keys(e.value).forEach(n)},t=(r,n,i)=>{if(e.value[r])return e.value[r];const a=r8(n);return a.onChange(l=>i[r]=l),e.value[r]=a,a};return NS(o),{motionValues:e,get:t,stop:o}}const a8=e=>Array.isArray(e),pr=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),$l=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),l8=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Il=()=>({type:"keyframes",ease:"linear",duration:300}),s8=e=>({type:"keyframes",duration:800,values:e}),Qf={default:l8,x:pr,y:pr,z:pr,rotate:pr,rotateX:pr,rotateY:pr,rotateZ:pr,scaleX:$l,scaleY:$l,scale:$l,backgroundColor:Il,color:Il,opacity:Il},pg=(e,o)=>{let t;return a8(o)?t=s8:t=Qf[e]||Qf.default,{to:o,...t(o)}},eu={..._i,transform:Math.round},hg={color:_o,backgroundColor:_o,outlineColor:_o,fill:_o,stroke:_o,borderColor:_o,borderTopColor:_o,borderRightColor:_o,borderBottomColor:_o,borderLeftColor:_o,borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,size:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scale:Ui,scaleX:Ui,scaleY:Ui,scaleZ:Ui,skew:ur,skewX:ur,skewY:ur,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:Hn,originX:Vf,originY:Vf,originZ:_e,zIndex:eu,filter:js,WebkitFilter:js,fillOpacity:Hn,strokeOpacity:Hn,numOctaves:eu},Mc=e=>hg[e],bg=(e,o)=>o&&typeof e=="number"&&o.transform?o.transform(e):e;function c8(e,o){let t=Mc(e);return t!==js&&(t=Oi),t.getAnimatableNone?t.getAnimatableNone(o):void 0}const d8={linear:tg,easeIn:Rc,easeInOut:rg,easeOut:Tz,circIn:ng,circInOut:Az,circOut:ig,backIn:jc,backInOut:Cz,backOut:Pz,anticipate:Fz,bounceIn:Rz,bounceInOut:jz,bounceOut:za},ou=e=>{if(Array.isArray(e)){const[o,t,r,n]=e;return e8(o,t,r,n)}else if(typeof e=="string")return d8[e];return e},f8=e=>Array.isArray(e)&&typeof e[0]!="number",tu=(e,o)=>e==="zIndex"?!1:!!(typeof o=="number"||Array.isArray(o)||typeof o=="string"&&Oi.test(o)&&!o.startsWith("url("));function u8(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function p8({ease:e,times:o,delay:t,...r}){const n={...r};return o&&(n.offset=o),e&&(n.ease=f8(e)?e.map(ou):ou(e)),t&&(n.elapsed=-t),n}function h8(e,o,t){return Array.isArray(o.to)&&(e.duration||(e.duration=800)),u8(o),b8(e)||(e={...e,...pg(t,o.to)}),{...o,...p8(e)}}function b8({delay:e,repeat:o,repeatType:t,repeatDelay:r,from:n,...i}){return!!Object.keys(i).length}function g8(e,o){return e[o]||e.default||e}function m8(e,o,t,r,n){const i=g8(r,e);let a=i.from===null||i.from===void 0?o.get():i.from;const l=tu(e,t);a==="none"&&l&&typeof t=="string"&&(a=c8(e,t));const s=tu(e,a);function c(f){const u={from:a,to:t,velocity:r.velocity?r.velocity:o.getVelocity(),onUpdate:h=>o.set(h)};return i.type==="inertia"||i.type==="decay"?Wz({...u,...i}):lg({...h8(i,u,e),onUpdate:h=>{u.onUpdate(h),i.onUpdate&&i.onUpdate(h)},onComplete:()=>{r.onComplete&&r.onComplete(),n&&n(),f&&f()}})}function d(f){return o.set(t),r.onComplete&&r.onComplete(),n&&n(),f&&f(),{stop:()=>{}}}return!s||!l||i.type===!1?d:c}function v8(){const{motionValues:e,stop:o,get:t}=i8();return{motionValues:e,stop:o,push:(n,i,a,l={},s)=>{const c=a[n],d=t(n,c,a);if(l&&l.immediate){d.set(i);return}const f=m8(n,d,i,l,s);d.start(f)}}}function k8(e,o={},{motionValues:t,push:r,stop:n}=v8()){const i=S(o),a=H(!1);we(t,f=>{a.value=Object.values(f).filter(u=>u.isAnimating()).length>0},{immediate:!0,deep:!0});const l=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},s=f=>(typeof f=="string"&&(f=l(f)),Promise.all(Object.entries(f).map(([u,h])=>{if(u!=="transition")return new Promise(b=>r(u,h,e,f.transition||pg(u,f[u]),b))}).filter(Boolean)));return{isAnimating:a,apply:s,set:f=>{const u=As(f)?f:l(f);Object.entries(u).forEach(([h,b])=>{h!=="transition"&&r(h,b,e,{immediate:!0})})},leave:async f=>{let u;if(i&&(i.leave&&(u=i.leave),!i.leave&&i.initial&&(u=i.initial)),!u){f();return}await s(u),f()},stop:n}}const Dc=typeof window<"u",w8=()=>Dc&&window.onpointerdown===null,y8=()=>Dc&&window.ontouchstart===null,x8=()=>Dc&&window.onmousedown===null;function _8({target:e,state:o,variants:t,apply:r}){const n=S(t),i=H(!1),a=H(!1),l=H(!1),s=P(()=>{let d=[];return n&&(n.hovered&&(d=[...d,...Object.keys(n.hovered)]),n.tapped&&(d=[...d,...Object.keys(n.tapped)]),n.focused&&(d=[...d,...Object.keys(n.focused)])),d}),c=P(()=>{const d={};Object.assign(d,o.value),i.value&&n.hovered&&Object.assign(d,n.hovered),a.value&&n.tapped&&Object.assign(d,n.tapped),l.value&&n.focused&&Object.assign(d,n.focused);for(const f in d)s.value.includes(f)||delete d[f];return d});n.hovered&&(Wo(e,"mouseenter",()=>i.value=!0),Wo(e,"mouseleave",()=>{i.value=!1,a.value=!1}),Wo(e,"mouseout",()=>{i.value=!1,a.value=!1})),n.tapped&&(x8()&&(Wo(e,"mousedown",()=>a.value=!0),Wo(e,"mouseup",()=>a.value=!1)),w8()&&(Wo(e,"pointerdown",()=>a.value=!0),Wo(e,"pointerup",()=>a.value=!1)),y8()&&(Wo(e,"touchstart",()=>a.value=!0),Wo(e,"touchend",()=>a.value=!1))),n.focused&&(Wo(e,"focus",()=>l.value=!0),Wo(e,"blur",()=>l.value=!1)),we(c,r)}function O8({set:e,target:o,apply:t,variants:r,variant:n}){const i=S(r);we(()=>o,()=>{i&&(i.initial&&e("initial"),i.enter&&(n.value="enter"))},{immediate:!0,flush:"pre"})}function S8({state:e,apply:o}){we(e,t=>{t&&o(t)},{immediate:!0})}function z8({target:e,variants:o,variant:t}){const r=S(o);r&&(r.visible||r.visibleOnce)&&jS(e,([{isIntersecting:n}])=>{r.visible?n?t.value="visible":t.value="initial":r.visibleOnce&&(n&&t.value!=="visibleOnce"?t.value="visibleOnce":t.value||(t.value="initial"))})}function L8(e,o={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){o.lifeCycleHooks&&O8(e),o.syncVariants&&S8(e),o.visibilityHooks&&z8(e),o.eventListeners&&_8(e)}function gg(e={}){const o=Ke({...e}),t=H({});return we(o,()=>{const r={};for(const[n,i]of Object.entries(o)){const a=Mc(n),l=bg(i,a);r[n]=l}t.value=r},{immediate:!0,deep:!0}),{state:o,style:t}}function Kc(e,o){we(()=>Sa(e),t=>{t&&o(t)},{immediate:!0})}const E8={x:"translateX",y:"translateY",z:"translateZ"};function mg(e={},o=!0){const t=Ke({...e}),r=H("");return we(t,n=>{let i="",a=!1;if(o&&(n.x||n.y||n.z)){const l=[n.x||0,n.y||0,n.z||0].map(_e.transform).join(",");i+=`translate3d(${l}) `,a=!0}for(const[l,s]of Object.entries(n)){if(o&&(l==="x"||l==="y"||l==="z"))continue;const c=Mc(l),d=bg(s,c);i+=`${E8[l]||l}(${d}) `}o&&!a&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:t,transform:r}}const T8=["","X","Y","Z"],A8=["perspective","translate","scale","rotate","skew"],vg=["transformPerspective","x","y","z"];A8.forEach(e=>{T8.forEach(o=>{const t=e+o;vg.push(t)})});const P8=new Set(vg);function Bc(e){return P8.has(e)}const C8=new Set(["originX","originY","originZ"]);function kg(e){return C8.has(e)}function F8(e){const o={},t={};return Object.entries(e).forEach(([r,n])=>{Bc(r)||kg(r)?o[r]=n:t[r]=n}),{transform:o,style:t}}function wg(e){const{transform:o,style:t}=F8(e),{transform:r}=mg(o),{style:n}=gg(t);return r.value&&(n.value.transform=r.value),n.value}function $8(e,o){let t,r;const{state:n,style:i}=gg();return Kc(e,a=>{r=a;for(const l of Object.keys(hg))a.style[l]===null||a.style[l]===""||Bc(l)||kg(l)||(n[l]=a.style[l]);t&&Object.entries(t).forEach(([l,s])=>a.style[l]=s),o&&o(n)}),we(i,a=>{if(!r){t=a;return}for(const l in a)r.style[l]=a[l]},{immediate:!0}),{style:n}}function I8(e){const o=e.trim().split(/\) |\)/);if(o.length===1)return{};const t=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return o.reduce((r,n)=>{if(!n)return r;const[i,a]=n.split("("),s=a.split(",").map(d=>t(d.endsWith(")")?d.replace(")",""):d.trim())),c=s.length===1?s[0]:s;return{...r,[i]:c}},{})}function N8(e,o){Object.entries(I8(o)).forEach(([t,r])=>{const n=["x","y","z"];if(t==="translate3d"){if(r===0){n.forEach(i=>e[i]=0);return}r.forEach((i,a)=>e[n[a]]=i);return}if(r=parseFloat(r),t==="translateX"){e.x=r;return}if(t==="translateY"){e.y=r;return}if(t==="translateZ"){e.z=r;return}e[t]=r})}function R8(e,o){let t,r;const{state:n,transform:i}=mg();return Kc(e,a=>{r=a,a.style.transform&&N8(n,a.style.transform),t&&(a.style.transform=t),o&&o(n)}),we(i,a=>{if(!r){t=a;return}r.style.transform=a},{immediate:!0}),{transform:n}}function j8(e,o){const t=Ke({}),r=a=>Object.entries(a).forEach(([l,s])=>t[l]=s),{style:n}=$8(e,r),{transform:i}=R8(e,r);return we(t,a=>{Object.entries(a).forEach(([l,s])=>{const c=Bc(l)?i:n;c[l]&&c[l]===s||(c[l]=s)})},{immediate:!0,deep:!0}),Kc(e,()=>o&&r(o)),{motionProperties:t,style:n,transform:i}}function M8(e={}){const o=S(e),t=H();return{state:P(()=>{if(t.value)return o[t.value]}),variant:t}}function yg(e,o={},t){const{motionProperties:r}=j8(e),{variant:n,state:i}=M8(o),a=k8(r,o),l={target:e,variant:n,variants:o,state:i,motionProperties:r,...a};return L8(l,t),l}const D8=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],K8=(e,o)=>{const t=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};t&&(t.variants&&As(t.variants)&&(o.value={...o.value,...t.variants}),D8.forEach(r=>{if(r==="delay"){if(t&&t[r]&&CS(t[r])){const n=t[r];o&&o.value&&(o.value.enter&&(o.value.enter.transition||(o.value.enter.transition={}),o.value.enter.transition={delay:n,...o.value.enter.transition}),o.value.visible&&(o.value.visible.transition||(o.value.visible.transition={}),o.value.visible.transition={delay:n,...o.value.visible.transition}),o.value.visibleOnce&&(o.value.visibleOnce.transition||(o.value.visibleOnce.transition={}),o.value.visibleOnce.transition={delay:n,...o.value.visibleOnce.transition}))}return}r==="visible-once"&&(r="visibleOnce"),t&&t[r]&&As(t[r])&&(o.value[r]=t[r])}))},Nl=e=>({created:(t,r,n)=>{const i=r.value&&typeof r.value=="string"?r.value:n.key;i&&Fl[i]&&Fl[i].stop();const a=H(e||{});typeof r.value=="object"&&(a.value=r.value),K8(n,a);const l=yg(t,a);t.motionInstance=l,i&&(Fl[i]=l)},getSSRProps(t,r){let{initial:n}=t.value||r&&(r==null?void 0:r.props)||{};n=S(n);const i=AS((e==null?void 0:e.initial)||{},n||{});return!i||Object.keys(i).length===0?void 0:{style:wg(i)}}}),B8={initial:{opacity:0},enter:{opacity:1}},U8={initial:{opacity:0},visible:{opacity:1}},H8={initial:{opacity:0},visibleOnce:{opacity:1}},q8={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},V8={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},W8={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},G8={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},X8={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Y8={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Z8={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},J8={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Q8={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},eL={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},oL={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},tL={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},rL={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},nL={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},iL={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},aL={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},lL={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},sL={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},cL={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},dL={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},fL={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},uL={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},pL={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},hL={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},bL={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},gL={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},mL={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ms={__proto__:null,fade:B8,fadeVisible:U8,fadeVisibleOnce:H8,pop:q8,popVisible:V8,popVisibleOnce:W8,rollBottom:rL,rollLeft:G8,rollRight:Z8,rollTop:eL,rollVisibleBottom:nL,rollVisibleLeft:X8,rollVisibleOnceBottom:iL,rollVisibleOnceLeft:Y8,rollVisibleOnceRight:Q8,rollVisibleOnceTop:tL,rollVisibleRight:J8,rollVisibleTop:oL,slideBottom:bL,slideLeft:aL,slideRight:cL,slideTop:uL,slideVisibleBottom:gL,slideVisibleLeft:lL,slideVisibleOnceBottom:mL,slideVisibleOnceLeft:sL,slideVisibleOnceRight:fL,slideVisibleOnceTop:hL,slideVisibleRight:dL,slideVisibleTop:pL},vL=ae({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const o=y0(),t=Ke({});if(!e.is&&!o.default)return()=>oo("div",{});const r=P(()=>{let s;return e.preset&&(s=Ms[e.preset]),s}),n=P(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=P(()=>{const s={...n.value,...r.value||{},...e.variants||{}};return e.delay&&(s.enter.transition={...s.enter.transition},s.enter.transition.delay=parseInt(e.delay)),s}),a=P(()=>{if(!e.is)return;let s=e.is;return typeof a.value=="string"&&!qu(s)&&(s=pa(s)),s});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||process!=null&&process.dev){const s=c=>{var d;(d=c.variants)!=null&&d.initial&&c.set("initial"),setTimeout(()=>{var f,u,h;(f=c.variants)!=null&&f.enter&&c.apply("enter"),(u=c.variants)!=null&&u.visible&&c.apply("visible"),(h=c.variants)!=null&&h.visibleOnce&&c.apply("visibleOnce")},10)};qa(()=>Object.entries(t).forEach(([c,d])=>s(d)))}return{slots:o,component:a,motionConfig:i,instances:t}},render({slots:e,motionConfig:o,instances:t,component:r}){var l;const n=wg(o.initial||{}),i=(s,c)=>(s.props||(s.props={}),s.props.style=n,s.props.onVnodeMounted=({el:d})=>{const f=yg(d,o);t[c]=f},s);if(r){const s=oo(r,void 0,e);return i(s,0),s}return(((l=e.default)==null?void 0:l.call(e))||[]).map((s,c)=>i(s,c))}});function kL(e){const o="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",t="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(o.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,n=>`-${n}`).toLowerCase().replace(/\s+/g,"-").replace(r,n=>t.charAt(o.indexOf(n))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const wL={install(e,o){if(e.directive("motion",Nl()),e.component("Motion",vL),!o||o&&!o.excludePresets)for(const t in Ms){const r=Ms[t];e.directive(`motion-${kL(t)}`,Nl(r))}if(o&&o.directives)for(const t in o.directives){const r=o.directives[t];r.initial,e.directive(`motion-${t}`,Nl(r))}}};var ru;const Vn=typeof window<"u",yL=Object.prototype.toString,xL=e=>yL.call(e)==="[object Object]";Vn&&((ru=window==null?void 0:window.navigator)!=null&&ru.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function _L(e){return $a()?(Ys(e),!0):!1}function OL(e){var o;const t=S(e);return(o=t==null?void 0:t.$el)!=null?o:t}const SL=Vn?window:void 0,nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},iu="__vueuse_ssr_handlers__";nu[iu]=nu[iu]||{};function zL(e,o={}){const{immediate:t=!0,window:r=SL}=o,n=H(!1);let i=null;function a(){!n.value||!r||(e(),i=r.requestAnimationFrame(a))}function l(){!n.value&&r&&(n.value=!0,a())}function s(){n.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return t&&l(),_L(s),{isActive:n,pause:s,resume:l}}var au;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(au||(au={}));const rl="vue-starport-injection",xg="vue-starport-options",LL={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},_g={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var EL=Object.defineProperty,Ea=Object.getOwnPropertySymbols,Og=Object.prototype.hasOwnProperty,Sg=Object.prototype.propertyIsEnumerable,lu=(e,o,t)=>o in e?EL(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,TL=(e,o)=>{for(var t in o||(o={}))Og.call(o,t)&&lu(e,t,o[t]);if(Ea)for(var t of Ea(o))Sg.call(o,t)&&lu(e,t,o[t]);return e},su=(e,o)=>{var t={};for(var r in e)Og.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Ea)for(var r of Ea(e))o.indexOf(r)<0&&Sg.call(e,r)&&(t[r]=e[r]);return t};const AL=ae({name:"StarportProxy",props:TL({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},_g),setup(e,o){const t=Y(rl),r=P(()=>t.getInstance(e.port,e.component)),n=H(),i=r.value.generateId(),a=H(!1);return r.value.isVisible||(r.value.land(),a.value=!0),vt(async()=>{if(r.value.el){console.error(`[Vue Starport] Multiple proxies of "${r.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(r.value.el=n.value,await so(),a.value=!0,r.value.rect.update(),r.value.rect.width===0||r.value.rect.height===0){const l=r.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${r.value.componentName}" (port "${e.port}") has no ${l} on initial render, have you set the size for it?`),console.warn("element:",r.value.el),console.warn("rect:",r.value.rect)}}),mi(async()=>{r.value.rect.update(),r.value.liftOff(),r.value.el=void 0,a.value=!1,!r.value.options.keepAlive&&(await so(),await so(),!r.value.el&&t.dispose(r.value.port))}),we(()=>e,async()=>{r.value.props&&await so();const l=e,{props:s}=l,c=su(l,["props"]);r.value.props=s||{},r.value.setLocalOptions(c)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:s,mountedProps:c}=l,d=su(l,["initialProps","mountedProps"]),f=nn(d,(a.value?c:s)||{});return oo("div",nn(f,{id:i,ref:n,"data-starport-proxy":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true"}),o.slots.default?oo(o.slots.default):void 0)}}});var PL=Object.defineProperty,CL=Object.defineProperties,FL=Object.getOwnPropertyDescriptors,cu=Object.getOwnPropertySymbols,$L=Object.prototype.hasOwnProperty,IL=Object.prototype.propertyIsEnumerable,du=(e,o,t)=>o in e?PL(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,NL=(e,o)=>{for(var t in o||(o={}))$L.call(o,t)&&du(e,t,o[t]);if(cu)for(var t of cu(o))IL.call(o,t)&&du(e,t,o[t]);return e},RL=(e,o)=>CL(e,FL(o));const jL=ae({name:"Starport",inheritAttrs:!0,props:_g,setup(e,o){const t=H(!1);return vt(()=>{if(t.value=!0,!Y(rl))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,l;const r=(l=(a=o.slots).default)==null?void 0:l.call(a);if(!r)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(r.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${r.length}`);const n=r[0];let i=n.type;return(!xL(i)||gt(i))&&(i={render(){return r}}),oo(AL,RL(NL({},e),{key:e.port,component:Ma(i),props:n.props}))}}});function ML(e){const o=Ke({height:0,width:0,left:0,top:0,update:r,listen:i,pause:a,margin:"0px",padding:"0px"}),t=Vn?document.documentElement||document.body:void 0;function r(){if(!Vn)return;const l=OL(e);if(!l)return;const{height:s,width:c,left:d,top:f}=l.getBoundingClientRect(),u=window.getComputedStyle(l),h=u.margin,b=u.padding;Object.assign(o,{height:s,width:c,left:d,top:t.scrollTop+f,margin:h,padding:b})}const n=zL(r,{immediate:!1});function i(){Vn&&(r(),n.resume())}function a(){n.pause()}return o}let DL=(e,o=21)=>(t=o)=>{let r="",n=t;for(;n--;)r+=e[Math.random()*e.length|0];return r};const fu=DL("abcdefghijklmnopqrstuvwxyz",5);function uu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function KL(e){var o;return e.name||((o=e.__file)==null?void 0:o.split(/[\/\\.]/).slice(-2)[0])||""}var BL=Object.defineProperty,pu=Object.getOwnPropertySymbols,UL=Object.prototype.hasOwnProperty,HL=Object.prototype.propertyIsEnumerable,hu=(e,o,t)=>o in e?BL(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Rl=(e,o)=>{for(var t in o||(o={}))UL.call(o,t)&&hu(e,t,o[t]);if(pu)for(var t of pu(o))HL.call(o,t)&&hu(e,t,o[t]);return e};function qL(e,o,t={}){const r=KL(o),n=uu(r)||fu(),i=H(),a=H(null),l=H(!1),s=H(!1),c=lm(!0),d=H({}),f=P(()=>Rl(Rl(Rl({},LL),t),d.value)),u=H(0);let h;c.run(()=>{h=ML(i),we(i,async k=>{k&&(s.value=!0),await so(),i.value||(s.value=!1)})});const b=uu(e);function g(){return`starport-${n}-${b}-${fu()}`}const m=g();return Ke({el:i,id:m,port:e,props:a,rect:h,scope:c,isLanded:l,isVisible:s,options:f,liftOffTime:u,component:o,componentName:r,componentId:n,generateId:g,setLocalOptions(k={}){d.value=JSON.parse(JSON.stringify(k))},elRef(){return i},liftOff(){l.value&&(l.value=!1,u.value=Date.now(),h.listen())},land(){l.value||(l.value=!0,h.pause())}})}function VL(e){const o=Ke(new Map);function t(n,i){let a=o.get(n);return a||(a=qL(n,i,e),o.set(n,a)),a.component=i,a}function r(n){var i;(i=o.get(n))==null||i.scope.stop(),o.delete(n)}return{portMap:o,dispose:r,getInstance:t}}var WL=Object.defineProperty,GL=Object.defineProperties,XL=Object.getOwnPropertyDescriptors,bu=Object.getOwnPropertySymbols,YL=Object.prototype.hasOwnProperty,ZL=Object.prototype.propertyIsEnumerable,gu=(e,o,t)=>o in e?WL(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,JL=(e,o)=>{for(var t in o||(o={}))YL.call(o,t)&&gu(e,t,o[t]);if(bu)for(var t of bu(o))ZL.call(o,t)&&gu(e,t,o[t]);return e},QL=(e,o)=>GL(e,XL(o));const eE=ae({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const o=Y(rl);if(!o)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const t=P(()=>o.getInstance(e.port,e.component)),r=P(()=>{var a;return((a=t.value.el)==null?void 0:a.id)||t.value.id}),n=P(()=>{const a=Date.now()-t.value.liftOffTime,l=Math.max(0,t.value.options.duration-a),s=t.value.rect,c={position:"absolute",left:0,top:0,width:`${s.width}px`,height:`${s.height}px`,margin:s.margin,padding:s.padding,transform:`translate3d(${s.left}px,${s.top}px,0px)`};return!t.value.isVisible||!t.value.el?QL(JL({},c),{zIndex:-1,display:"none"}):(t.value.isLanded?c.display="none":Object.assign(c,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:t.value.options.easing}),c)}),i={onTransitionend(a){t.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${t.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${t.value.options.duration/1e3}s).`)}};return()=>{const a=!!(t.value.isLanded&&t.value.el);return oo("div",{style:n.value,"data-starport-craft":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true",onTransitionend:t.value.land},oo(l0,{to:a?`#${r.value}`:"body",disabled:!a},oo(t.value.component,nn(i,t.value.props))))}}}),oE=ae({name:"StarportCarrier",setup(e,{slots:o}){const t=VL(Y(xg,{}));return xo().appContext.app.provide(rl,t),()=>{var n;return[(n=o.default)==null?void 0:n.call(o),Array.from(t.portMap.entries()).map(([i,{component:a}])=>oo(eE,{key:i,port:i,component:a}))]}}});function tE(e={}){return{install(o){o.provide(xg,e),o.component("Starport",jL),o.component("StarportCarrier",oE)}}}function rE(e){function o(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}o(),window.addEventListener("resize",o),e.app.use(wL),e.app.use(tE({keepAlive:!0}))}function Eo(e,o,t){var r;return((r=e.instance)==null?void 0:r.$).provides[o]??t}function nE(){return{install(e){e.directive("click",{name:"v-click",mounted(o,t){var d,f,u,h,b,g;if(Bn.value||(d=Eo(t,jn))!=null&&d.value)return;const r=Eo(t,kr),n=Eo(t,Rn),i=Eo(t,as),a=t.modifiers.hide!==!1&&t.modifiers.hide!=null,l=t.modifiers.fade!==!1&&t.modifiers.fade!=null,s=((f=r==null?void 0:r.value)==null?void 0:f.length)||0,c=l?rw:vl;if(r&&!((u=r==null?void 0:r.value)!=null&&u.includes(o))&&r.value.push(o),t.value==null&&(t.value=(h=r==null?void 0:r.value)==null?void 0:h.length),typeof t.value=="string"&&(t.value.startsWith("+")||t.value.startsWith("-"))&&(t.value=(((b=r==null?void 0:r.value)==null?void 0:b.length)||0)+Number(t.value)),!(i!=null&&i.value.has(t.value)))i==null||i.value.set(t.value,[o]);else if(!((g=i==null?void 0:i.value.get(t.value))!=null&&g.includes(o))){const m=(i==null?void 0:i.value.get(t.value))||[];i==null||i.value.set(t.value,[o].concat(m))}o==null||o.classList.toggle(gr,!0),n&&we(n,()=>{const m=(n==null?void 0:n.value)??0,k=t.value!=null?m>=t.value:m>s;o.classList.contains(kl)||o.classList.toggle(c,!k),a!==!1&&a!==void 0&&o.classList.toggle(c,k),o.classList.toggle(kn,!1);const w=i==null?void 0:i.value.get(m);w==null||w.forEach((y,x)=>{y.classList.toggle(Ri,!1),x===w.length-1?y.classList.toggle(kn,!0):y.classList.toggle(Ri,!0)}),o.classList.contains(kn)||o.classList.toggle(Ri,k)},{immediate:!0})},unmounted(o,t){o==null||o.classList.toggle(gr,!1);const r=Eo(t,kr);r!=null&&r.value&&ls(r.value,o)}}),e.directive("after",{name:"v-after",mounted(o,t){var l,s,c;if(Bn.value||(l=Eo(t,jn))!=null&&l.value)return;const r=Eo(t,kr),n=Eo(t,Rn),i=Eo(t,as),a=r==null?void 0:r.value.length;t.value==null&&(t.value=r==null?void 0:r.value.length),typeof t.value=="string"&&(t.value.startsWith("+")||t.value.startsWith("-"))&&(t.value=(((s=r==null?void 0:r.value)==null?void 0:s.length)||0)+Number(t.value)),i!=null&&i.value.has(t.value)?(c=i==null?void 0:i.value.get(t.value))==null||c.push(o):i==null||i.value.set(t.value,[o]),o==null||o.classList.toggle(gr,!0),n&&we(n,()=>{const d=(n.value??0)>=(t.value??a??0);o.classList.contains(kl)||o.classList.toggle(vl,!d),o.classList.toggle(kn,!1),o.classList.contains(kn)||o.classList.toggle(Ri,d)},{immediate:!0})},unmounted(o){o==null||o.classList.toggle(gr,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(o,t){var a,l,s;if(Bn.value||(a=Eo(t,jn))!=null&&a.value)return;const r=Eo(t,kr),n=Eo(t,Rn),i=((l=r==null?void 0:r.value)==null?void 0:l.length)||0;r&&!((s=r==null?void 0:r.value)!=null&&s.includes(o))&&r.value.push(o),o==null||o.classList.toggle(gr,!0),n&&we(n,()=>{const c=(n==null?void 0:n.value)??0,d=t.value!=null?c>=t.value:c>i;o.classList.toggle(vl,d),o.classList.toggle(kl,d)},{immediate:!0})},unmounted(o,t){o==null||o.classList.toggle(gr,!1);const r=Eo(t,kr);r!=null&&r.value&&ls(r.value,o)}})}}}function iE(e,o){const t=zb(e),r=Lb(o,t.currentRoute,t.currentPage);return{nav:{...t,...r},configs:Pe,themeConfigs:P(()=>Pe.themeConfig)}}function aE(){return{install(e){const o=iE(Ho,Bo);e.provide(ne,Ke(o))}}}/*!
 * KoliBri - The accessible HTML-Standard
 */var lE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sE(e,o,t){return e(t={path:o,exports:{},require:function(r,n){return cE()}},t.exports),t.exports}function cE(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Ta=sE(function(e){var o,t;o=lE,t=function(){var r=function(){},n="undefined",i=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"];function l(m,k){var w=m[k];if(typeof w.bind=="function")return w.bind(m);try{return Function.prototype.bind.call(w,m)}catch{return function(){return Function.prototype.apply.apply(w,[m,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function c(m,k){for(var w=0;w<a.length;w++){var y=a[w];this[y]=w<m?r:this.methodFactory(y,m,k)}this.log=this.debug}function d(m,k,w){return function(){typeof console!==n&&(c.call(this,k,w),this[m].apply(this,arguments))}}function f(m,k,w){return function(y){return y==="debug"&&(y="log"),typeof console!==n&&(y==="trace"&&i?s:console[y]!==void 0?l(console,y):console.log!==void 0?l(console,"log"):r)}(m)||d.apply(this,arguments)}function u(m,k,w){var y,x=this;k=k??"WARN";var z="loglevel";function L(){var O;if(typeof window!==n&&z){try{O=window.localStorage[z]}catch{}if(typeof O===n)try{var T=window.document.cookie,U=T.indexOf(encodeURIComponent(z)+"=");U!==-1&&(O=/^([^;]+)/.exec(T.slice(U))[1])}catch{}return x.levels[O]===void 0&&(O=void 0),O}}typeof m=="string"?z+=":"+m:typeof m=="symbol"&&(z=void 0),x.name=m,x.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},x.methodFactory=w||f,x.getLevel=function(){return y},x.setLevel=function(O,T){if(typeof O=="string"&&x.levels[O.toUpperCase()]!==void 0&&(O=x.levels[O.toUpperCase()]),!(typeof O=="number"&&O>=0&&O<=x.levels.SILENT))throw"log.setLevel() called with invalid level: "+O;if(y=O,T!==!1&&function(U){var Z=(a[U]||"silent").toUpperCase();if(typeof window!==n&&z){try{return void(window.localStorage[z]=Z)}catch{}try{window.document.cookie=encodeURIComponent(z)+"="+Z+";"}catch{}}}(O),c.call(x,O,m),typeof console===n&&O<x.levels.SILENT)return"No console available for logging"},x.setDefaultLevel=function(O){k=O,L()||x.setLevel(O,!1)},x.resetLevel=function(){x.setLevel(k,!1),function(){if(typeof window!==n&&z){try{return void window.localStorage.removeItem(z)}catch{}try{window.document.cookie=encodeURIComponent(z)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}()},x.enableAll=function(O){x.setLevel(x.levels.TRACE,O)},x.disableAll=function(O){x.setLevel(x.levels.SILENT,O)};var $=L();$==null&&($=k),x.setLevel($,!1)}var h=new u,b={};h.getLogger=function(m){if(typeof m!="symbol"&&typeof m!="string"||m==="")throw new TypeError("You must supply a name when creating a logger.");var k=b[m];return k||(k=b[m]=new u(m,h.getLevel(),h.methodFactory)),k};var g=typeof window!==n?window.log:void 0;return h.noConflict=function(){return typeof window!==n&&window.log===h&&(window.log=g),h},h.getLoggers=function(){return b},h.default=h,h},e.exports?e.exports=t():o.log=t()});const dE=(e,o)=>t=>t(e,o),fE=(e,o)=>t=>t(e,o),se=typeof window=="object"?window:typeof global=="object"?global:typeof self=="object"?self:{};let Ds=!0,mu=!1;const uE=/^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/,pE=e=>typeof e=="string"&&uE.test(e),zg=e=>{if(pE(e)===!1)throw new Error(`[Theming] The theme identifier "${typeof e=="string"?e:""}" (Type: ${typeof e}) is not valid. Please use only follow this pattern: /^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/`)},Lg=(e,o,t)=>{zg(e),Ds===!0&&mu===!1&&(mu=!0,Ta.warn(`[Theming] The theme process is locked. This means that the theme "${e}" should not be patched.

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
  .catch(console.warn);`)),typeof se.A11yUi=="object"&&se.A11yUi!==null||(se.A11yUi={}),typeof se.A11yUi!="object"||se.A11yUi===null||typeof se.A11yUi.Themes=="object"&&se.A11yUi.Themes!==null||(se.A11yUi.Themes={}),typeof se.A11yUi!="object"||se.A11yUi===null||typeof se.A11yUi.Themes!="object"||se.A11yUi.Themes===null||typeof se.A11yUi.Themes[e]=="object"&&se.A11yUi.Themes[e]!==null||(se.A11yUi.Themes[e]={}),typeof se.A11yUi=="object"&&se.A11yUi!==null&&typeof se.A11yUi.Themes=="object"&&se.A11yUi.Themes!==null&&typeof se.A11yUi.Themes[e]=="object"&&se.A11yUi.Themes[e]!==null&&(se.A11yUi.Themes[e][o]=t)},Eg=(e,o)=>(zg(e),typeof o=="object"&&o!==null&&Object.getOwnPropertyNames(o).forEach(t=>{const r=o[t];typeof r=="string"&&r.length>0&&Lg(e,t,r)}),e),hE=()=>typeof se.A11yUi=="object"&&se.A11yUi!==null&&typeof se.A11yUi.Theme=="object"&&se.A11yUi.Theme!==null&&typeof se.A11yUi.Theme.cache=="boolean"&&typeof se.A11yUi.Theme.encroachCss=="object"&&typeof se.A11yUi.Theme.encroachCss!==null&&typeof se.A11yUi.Theme.encroachCss.mode=="string"&&typeof se.A11yUi.Theme.name=="string",bE=(e,o)=>({cache:o.cache!==!1,detect:o.detect==="auto"?"auto":"fixed",encroachCss:o.encroachCss!==!1&&(typeof o.encroachCss!="object"||o.encroachCss==null||o.encroachCss.mode!=="after"&&o.encroachCss.mode!=="before"?{mode:"before"}:o.encroachCss),loglevel:o.loglevel==="debug"?o.loglevel:"silent",name:typeof o.name=="string"?o.name:e}),gE=(e,o)=>{hE()!==!1||(typeof se.A11yUi=="object"&&se.A11yUi!==null)!=0&&(typeof se.A11yUi.Theme=="object"&&se.A11yUi.Theme!==null)!=0&&se.A11yUi.Theme.name==="default"||typeof o=="object"&&o!==null&&((o=bE(e,o)).detect==="fixed"?(o.name===null&&typeof e=="string"&&(o.name=e),e===o.name&&(typeof se.A11yUi=="object"&&se.A11yUi!==null||(se.A11yUi={}),se.A11yUi.Theme=o,Ta.info(`[Theming] Theme "${e}" was set as default theme.`))):Ta.warn("[Theming] The presetting of theme options is only relevant by using 'fixed' detection mode."))};let vu=!1;const mE=(e,o,t={})=>{vu===!1&&(vu=!0,Ds=!1),typeof e=="function"?e=new Set([e]):Array.isArray(e)&&(e=new Set(e)),e instanceof Set&&e.forEach(n=>{var i,a,l,s;typeof n=="function"&&n.length===1?gE(n(Eg),{cache:(i=t.theme)==null?void 0:i.cache,detect:(a=t.theme)==null?void 0:a.detect,encroachCss:(l=t.theme)==null?void 0:l.encroachCss,name:(s=t.theme)==null?void 0:s.name}):Ta.error("[Theming] Es wurde versucht eine nicht kompatibles Theme zu laden.")}),Ds=!0,typeof o=="function"?o=new Set([o]):Array.isArray(o)&&(o=new Set(o));const r=[];return o.forEach(n=>r.push(n())),Promise.all(r)},ui=new Map,Tg=[],Ag=new Set,Xr=new Map,vE=/--[^;]+/g,kE=/:/;typeof se.A11yUi=="object"&&se.A11yUi!==null||(se.A11yUi={CSS_STYLE_CACHE:Xr,HYDRATED_HISTORY:Tg,STYLING_TASK_QUEUE:ui});const wE=(e,o)=>{var r;let t=o.match(vE);if(Array.isArray(t)){t=t.filter(i=>kE.test(i));const n=document.createElement("style");n.innerHTML=`.${e} {${t.join(";")}}`,(r=document.querySelector("head"))==null||r.appendChild(n)}Ag.add(e)},jl=(e,o)=>typeof se.A11yUi=="object"&&se.A11yUi!==null&&typeof se.A11yUi.Themes=="object"&&se.A11yUi.Themes!==null&&typeof se.A11yUi.Themes[e]=="object"&&se.A11yUi.Themes[e]!==null&&typeof se.A11yUi.Themes[e][o]=="string"?se.A11yUi.Themes[e][o].replace(/\r?\n/g,""):"",yE=e=>{for(const o of Array.from(e.childNodes)){if(!(o instanceof HTMLStyleElement&&o.tagName==="STYLE"))break;e.removeChild(o)}},xE=(e,o)=>{try{const t=[];o.forEach(r=>{const n=new CSSStyleSheet;n.replaceSync(r),t.push(n)}),e.adoptedStyleSheets=t}catch{o.reverse().forEach(r=>{const n=document.createElement("style");n.innerHTML=r,e.insertBefore(n,e.firstChild)})}},_E=(e,o,t)=>{if(t!==!1){const r=[...Array.from(e.childNodes).filter(i=>i instanceof HTMLStyleElement&&i.tagName==="STYLE")];let n;try{n=[...Array.from(e.adoptedStyleSheets)]}catch{n=[]}(t==null?void 0:t.mode)==="before"?(r.reverse().forEach(i=>o.unshift(i.innerHTML)),n.reverse().forEach(i=>o.unshift(Array.from(i.cssRules).map(a=>a.cssText).join("")))):(t==null?void 0:t.mode)==="after"&&(r.forEach(i=>o.push(i.innerHTML)),n.forEach(i=>o.push(Array.from(i.cssRules).map(a=>a.cssText).join(""))))}},OE=(e,o,t)=>{var i,a,l;const r=o.name||"default";let n;try{if(e.shadowRoot===null)throw new Error("ShadowRoot is null");n=e.shadowRoot}catch{n=e}if((i=Xr.get(r))!=null&&i.has(e.tagName))ku(e,n,(a=Xr.get(r))==null?void 0:a.get(e.tagName),t);else{const s=jl(r,"PROPERTIES"),c=jl(r,"GLOBAL"),d=jl(r,e.tagName);Ag.has(r)===!1&&wE(r,c);const f=[s,c,d];_E(n,f,o.encroachCss),o.loglevel==="debug"&&console.log(e.tagName,f),o.cache===!0&&(Xr.has(r)===!1&&Xr.set(r,new Map),(l=Xr.get(r))==null||l.set(e.tagName,f)),ku(e,n,f,t)}},ku=(e,o,t,r)=>{yE(o),xE(o,t),e.style.display=r},SE=e=>{e.loglevel==="debug"&&Tg.push({timestamp:Date.now(),numberOfTasks:ui.size})},zE=e=>{ui.delete(e)},LE=(e,o)=>{zE(e),SE(o)},EE=e=>{for(const o of e)if(ui.has(o.target)&&o.target.classList.contains("hydrated")){const{styleDisplay:t,themeDetails:r}=ui.get(o.target);OE(o.target,r,t),LE(o.target,r)}};let wu;try{wu=new MutationObserver(EE)}catch{wu=null}let TE=class{constructor(o,t,r){this.createTheme=(n,i)=>fE(n,i),this.createTranslation=(n,i)=>dE(n,i),this.Prefix=o,this.Key=Object.getOwnPropertyNames(t),this.Tag=Object.getOwnPropertyNames(r)}};/*!
 * KoliBri - The accessible HTML-Standard
 */function et(e){return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},et(e)}function kt(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function AE(e,o){if(et(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,o||"default");if(et(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}function Pg(e){var o=AE(e,"string");return et(o)==="symbol"?o:String(o)}function yu(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Pg(r.key),r)}}function wt(e,o,t){return o&&yu(e.prototype,o),t&&yu(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function or(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ks(e,o){return Ks=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Ks(e,o)}function nl(e,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),o&&Ks(e,o)}function Si(e,o){if(o&&(et(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return or(e)}function mt(e){return mt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},mt(e)}function sr(e,o,t){return(o=Pg(o))in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function PE(e){if(Array.isArray(e))return e}function CE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xu(e,o){(o==null||o>e.length)&&(o=e.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=e[t];return r}function FE(e,o){if(e){if(typeof e=="string")return xu(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?xu(e,o):void 0}}function $E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IE(e){return PE(e)||CE(e)||FE(e)||$E()}function _u(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Ou(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?_u(Object(t),!0).forEach(function(r){sr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_u(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var NE={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,o){console&&console[e]&&console[e].apply(console,o)}},RE=function(){function e(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};kt(this,e),this.init(o,t)}return wt(e,[{key:"init",value:function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=o||NE,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(o){this.debug=o}},{key:"log",value:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(o,t,r,n){return n&&!this.debug?null:(typeof o[0]=="string"&&(o[0]="".concat(r).concat(this.prefix," ").concat(o[0])),this.logger[t](o))}},{key:"create",value:function(o){return new e(this.logger,Ou(Ou({},{prefix:"".concat(this.prefix,":").concat(o,":")}),this.options))}},{key:"clone",value:function(o){return(o=o||this.options).prefix=o.prefix||this.prefix,new e(this.logger,o)}}]),e}(),pt=new RE,ir=function(){function e(){kt(this,e),this.observers={}}return wt(e,[{key:"on",value:function(o,t){var r=this;return o.split(" ").forEach(function(n){r.observers[n]=r.observers[n]||[],r.observers[n].push(t)}),this}},{key:"off",value:function(o,t){this.observers[o]&&(t?this.observers[o]=this.observers[o].filter(function(r){return r!==t}):delete this.observers[o])}},{key:"emit",value:function(o){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.observers[o]&&[].concat(this.observers[o]).forEach(function(i){i.apply(void 0,r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(i){i.apply(i,[o].concat(r))})}}]),e}();function Ln(){var e,o,t=new Promise(function(r,n){e=r,o=n});return t.resolve=e,t.reject=o,t}function Su(e){return e==null?"":""+e}function jE(e,o,t){e.forEach(function(r){o[r]&&(t[r]=o[r])})}function Uc(e,o,t){function r(l){return l&&l.indexOf("###")>-1?l.replace(/###/g,"."):l}function n(){return!e||typeof e=="string"}for(var i=typeof o!="string"?[].concat(o):o.split(".");i.length>1;){if(n())return{};var a=r(i.shift());!e[a]&&t&&(e[a]=new t),e=Object.prototype.hasOwnProperty.call(e,a)?e[a]:{}}return n()?{}:{obj:e,k:r(i.shift())}}function zu(e,o,t){var r=Uc(e,o,Object);r.obj[r.k]=t}function ME(e,o,t,r){var n=Uc(e,o,Object),i=n.obj,a=n.k;i[a]=i[a]||[],r&&(i[a]=i[a].concat(t)),r||i[a].push(t)}function Aa(e,o){var t=Uc(e,o),r=t.obj,n=t.k;if(r)return r[n]}function DE(e,o,t){var r=Aa(e,t);return r!==void 0?r:Aa(o,t)}function Cg(e,o,t){for(var r in o)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof o[r]=="string"||o[r]instanceof String?t&&(e[r]=o[r]):Cg(e[r],o[r],t):e[r]=o[r]);return e}function Vr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var KE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function BE(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(o){return KE[o]}):e}var il=typeof window<"u"&&window.navigator&&window.navigator.userAgentData===void 0&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,UE=[" ",",","?","!",";"];function HE(e,o,t){o=o||"",t=t||"";var r=UE.filter(function(l){return o.indexOf(l)<0&&t.indexOf(l)<0});if(r.length===0)return!0;var n=new RegExp("(".concat(r.map(function(l){return l==="?"?"\\?":l}).join("|"),")")),i=!n.test(e);if(!i){var a=e.indexOf(t);a>0&&!n.test(e.substring(0,a))&&(i=!0)}return i}function Pa(e,o){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[o])return e[o];for(var r=o.split(t),n=e,i=0;i<r.length;++i){if(!n||typeof n[r[i]]=="string"&&i+1<r.length)return;if(n[r[i]]===void 0){for(var a=2,l=r.slice(i,i+a).join(t),s=n[l];s===void 0&&r.length>i+a;)a++,s=n[l=r.slice(i,i+a).join(t)];if(s===void 0)return;if(s===null)return null;if(o.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}var c=r.slice(i+a).join(t);return c?Pa(s,c,t):void 0}n=n[r[i]]}return n}}function Lu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function qi(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Lu(Object(t),!0).forEach(function(r){sr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Lu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function qE(e){var o=VE();return function(){var t,r=mt(e);if(o){var n=mt(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Si(this,t)}}function VE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var WE=function(e){nl(t,ir);var o=qE(t);function t(r){var n,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return kt(this,t),n=o.call(this),il&&ir.call(or(n)),n.data=r||{},n.options=i,n.options.keySeparator===void 0&&(n.options.keySeparator="."),n.options.ignoreJSONStructure===void 0&&(n.options.ignoreJSONStructure=!0),n}return wt(t,[{key:"addNamespaces",value:function(r){this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}},{key:"removeNamespaces",value:function(r){var n=this.options.ns.indexOf(r);n>-1&&this.options.ns.splice(n,1)}},{key:"getResource",value:function(r,n,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,s=a.ignoreJSONStructure!==void 0?a.ignoreJSONStructure:this.options.ignoreJSONStructure,c=[r,n];i&&typeof i!="string"&&(c=c.concat(i)),i&&typeof i=="string"&&(c=c.concat(l?i.split(l):i)),r.indexOf(".")>-1&&(c=r.split("."));var d=Aa(this.data,c);return d||!s||typeof i!="string"?d:Pa(this.data&&this.data[r]&&this.data[r][n],i,l)}},{key:"addResource",value:function(r,n,i,a){var l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},s=this.options.keySeparator;s===void 0&&(s=".");var c=[r,n];i&&(c=c.concat(s?i.split(s):i)),r.indexOf(".")>-1&&(a=n,n=(c=r.split("."))[1]),this.addNamespaces(n),zu(this.data,c,a),l.silent||this.emit("added",r,n,i,a)}},{key:"addResources",value:function(r,n,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var l in i)typeof i[l]!="string"&&Object.prototype.toString.apply(i[l])!=="[object Array]"||this.addResource(r,n,l,i[l],{silent:!0});a.silent||this.emit("added",r,n,i)}},{key:"addResourceBundle",value:function(r,n,i,a,l){var s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},c=[r,n];r.indexOf(".")>-1&&(a=i,i=n,n=(c=r.split("."))[1]),this.addNamespaces(n);var d=Aa(this.data,c)||{};a?Cg(d,i,l):d=qi(qi({},d),i),zu(this.data,c,d),s.silent||this.emit("added",r,n,i)}},{key:"removeResourceBundle",value:function(r,n){this.hasResourceBundle(r,n)&&delete this.data[r][n],this.removeNamespaces(n),this.emit("removed",r,n)}},{key:"hasResourceBundle",value:function(r,n){return this.getResource(r,n)!==void 0}},{key:"getResourceBundle",value:function(r,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?qi(qi({},{}),this.getResource(r,n)):this.getResource(r,n)}},{key:"getDataByLanguage",value:function(r){return this.data[r]}},{key:"hasLanguageSomeTranslations",value:function(r){var n=this.getDataByLanguage(r);return!!(n&&Object.keys(n)||[]).find(function(i){return n[i]&&Object.keys(n[i]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),t}(),Fg={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,o,t,r,n){var i=this;return e.forEach(function(a){i.processors[a]&&(o=i.processors[a].process(o,t,r,n))}),o}};function Eu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function bo(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Eu(Object(t),!0).forEach(function(r){sr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Eu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function GE(e){var o=XE();return function(){var t,r=mt(e);if(o){var n=mt(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Si(this,t)}}function XE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Tu={},Au=function(e){nl(t,ir);var o=GE(t);function t(r){var n,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return kt(this,t),n=o.call(this),il&&ir.call(or(n)),jE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,or(n)),n.options=i,n.options.keySeparator===void 0&&(n.options.keySeparator="."),n.logger=pt.create("translator"),n}return wt(t,[{key:"changeLanguage",value:function(r){r&&(this.language=r)}},{key:"exists",value:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(r==null)return!1;var i=this.resolve(r,n);return i&&i.res!==void 0}},{key:"extractFromKey",value:function(r,n){var i=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");var a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,l=n.ns||this.options.defaultNS||[],s=i&&r.indexOf(i)>-1,c=!(this.options.userDefinedKeySeparator||n.keySeparator||this.options.userDefinedNsSeparator||n.nsSeparator||HE(r,i,a));if(s&&!c){var d=r.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:r,namespaces:l};var f=r.split(i);(i!==a||i===a&&this.options.ns.indexOf(f[0])>-1)&&(l=f.shift()),r=f.join(a)}return typeof l=="string"&&(l=[l]),{key:r,namespaces:l}}},{key:"translate",value:function(r,n,i){var a=this;if(et(n)!=="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),n||(n={}),r==null)return"";Array.isArray(r)||(r=[String(r)]);var l=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,c=this.extractFromKey(r[r.length-1],n),d=c.key,f=c.namespaces,u=f[f.length-1],h=n.lng||this.language,b=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(h&&h.toLowerCase()==="cimode"){if(b){var g=n.nsSeparator||this.options.nsSeparator;return l?{res:"".concat(u).concat(g).concat(d),usedKey:d,exactUsedKey:d,usedLng:h,usedNS:u}:"".concat(u).concat(g).concat(d)}return l?{res:d,usedKey:d,exactUsedKey:d,usedLng:h,usedNS:u}:d}var m=this.resolve(r,n),k=m&&m.res,w=m&&m.usedKey||d,y=m&&m.exactUsedKey||d,x=Object.prototype.toString.apply(k),z=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,L=!this.i18nFormat||this.i18nFormat.handleAsObject;if(L&&k&&typeof k!="string"&&typeof k!="boolean"&&typeof k!="number"&&["[object Number]","[object Function]","[object RegExp]"].indexOf(x)<0&&(typeof z!="string"||x!=="[object Array]")){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var $=this.options.returnedObjectHandler?this.options.returnedObjectHandler(w,k,bo(bo({},n),{},{ns:f})):"key '".concat(d," (").concat(this.language,")' returned an object instead of string.");return l?(m.res=$,m):$}if(s){var O=x==="[object Array]",T=O?[]:{},U=O?y:w;for(var Z in k)if(Object.prototype.hasOwnProperty.call(k,Z)){var D="".concat(U).concat(s).concat(Z);T[Z]=this.translate(D,bo(bo({},n),{joinArrays:!1,ns:f})),T[Z]===D&&(T[Z]=k[Z])}k=T}}else if(L&&typeof z=="string"&&x==="[object Array]")(k=k.join(z))&&(k=this.extendTranslation(k,r,n,i));else{var be=!1,de=!1,ye=n.count!==void 0&&typeof n.count!="string",Ee=t.hasDefaultValue(n),G=ye?this.pluralResolver.getSuffix(h,n.count,n):"",oe=n["defaultValue".concat(G)]||n.defaultValue;!this.isValidLookup(k)&&Ee&&(be=!0,k=oe),this.isValidLookup(k)||(de=!0,k=d);var xe=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&de?void 0:k,Te=Ee&&oe!==k&&this.options.updateMissing;if(de||be||Te){if(this.logger.log(Te?"updateKey":"missingKey",h,u,d,Te?oe:k),s){var fo=this.resolve(d,bo(bo({},n),{},{keySeparator:!1}));fo&&fo.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var Ue=[],Je=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Je&&Je[0])for(var Ro=0;Ro<Je.length;Ro++)Ue.push(Je[Ro]);else this.options.saveMissingTo==="all"?Ue=this.languageUtils.toResolveHierarchy(n.lng||this.language):Ue.push(n.lng||this.language);var C=function(W,B,J){var Oe=Ee&&J!==k?J:xe;a.options.missingKeyHandler?a.options.missingKeyHandler(W,u,B,Oe,Te,n):a.backendConnector&&a.backendConnector.saveMissing&&a.backendConnector.saveMissing(W,u,B,Oe,Te,n),a.emit("missingKey",W,u,B,k)};this.options.saveMissing&&(this.options.saveMissingPlurals&&ye?Ue.forEach(function(W){a.pluralResolver.getSuffixes(W,n).forEach(function(B){C([W],d+B,n["defaultValue".concat(B)]||oe)})}):C(Ue,d,oe))}k=this.extendTranslation(k,r,n,m,i),de&&k===d&&this.options.appendNamespaceToMissingKey&&(k="".concat(u,":").concat(d)),(de||be)&&this.options.parseMissingKeyHandler&&(k=this.options.compatibilityAPI!=="v1"?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(u,":").concat(d):d,be?k:void 0):this.options.parseMissingKeyHandler(k))}return l?(m.res=k,m):k}},{key:"extendTranslation",value:function(r,n,i,a,l){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)r=this.i18nFormat.parse(r,bo(bo({},this.options.interpolation.defaultVariables),i),a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init(bo(bo({},i),{interpolation:bo(bo({},this.options.interpolation),i.interpolation)}));var c,d=typeof r=="string"&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(d){var f=r.match(this.interpolator.nestingRegexp);c=f&&f.length}var u=i.replace&&typeof i.replace!="string"?i.replace:i;if(this.options.interpolation.defaultVariables&&(u=bo(bo({},this.options.interpolation.defaultVariables),u)),r=this.interpolator.interpolate(r,u,i.lng||this.language,i),d){var h=r.match(this.interpolator.nestingRegexp);c<(h&&h.length)&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&a&&a.res&&(i.lng=a.usedLng),i.nest!==!1&&(r=this.interpolator.nest(r,function(){for(var m=arguments.length,k=new Array(m),w=0;w<m;w++)k[w]=arguments[w];return l&&l[0]===k[0]&&!i.context?(s.logger.warn("It seems you are nesting recursively key: ".concat(k[0]," in key: ").concat(n[0])),null):s.translate.apply(s,k.concat([n]))},i)),i.interpolation&&this.interpolator.reset()}var b=i.postProcess||this.options.postProcess,g=typeof b=="string"?[b]:b;return r!=null&&g&&g.length&&i.applyPostProcessor!==!1&&(r=Fg.handle(g,r,n,this.options&&this.options.postProcessPassResolved?bo({i18nResolved:a},i):i,this)),r}},{key:"resolve",value:function(r){var n,i,a,l,s,c=this,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof r=="string"&&(r=[r]),r.forEach(function(f){if(!c.isValidLookup(n)){var u=c.extractFromKey(f,d),h=u.key;i=h;var b=u.namespaces;c.options.fallbackNS&&(b=b.concat(c.options.fallbackNS));var g=d.count!==void 0&&typeof d.count!="string",m=g&&!d.ordinal&&d.count===0&&c.pluralResolver.shouldUseIntlApi(),k=d.context!==void 0&&(typeof d.context=="string"||typeof d.context=="number")&&d.context!=="",w=d.lngs?d.lngs:c.languageUtils.toResolveHierarchy(d.lng||c.language,d.fallbackLng);b.forEach(function(y){c.isValidLookup(n)||(s=y,!Tu["".concat(w[0],"-").concat(y)]&&c.utils&&c.utils.hasLoadedNamespace&&!c.utils.hasLoadedNamespace(s)&&(Tu["".concat(w[0],"-").concat(y)]=!0,c.logger.warn('key "'.concat(i,'" for languages "').concat(w.join(", "),`" won't get resolved as namespace "`).concat(s,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(function(x){if(!c.isValidLookup(n)){l=x;var z,L=[h];if(c.i18nFormat&&c.i18nFormat.addLookupKeys)c.i18nFormat.addLookupKeys(L,h,x,y,d);else{var $;g&&($=c.pluralResolver.getSuffix(x,d.count,d));var O="".concat(c.options.pluralSeparator,"zero");if(g&&(L.push(h+$),m&&L.push(h+O)),k){var T="".concat(h).concat(c.options.contextSeparator).concat(d.context);L.push(T),g&&(L.push(T+$),m&&L.push(T+O))}}for(;z=L.pop();)c.isValidLookup(n)||(a=z,n=c.getResource(x,y,z,d))}}))})}}),{res:n,usedKey:i,exactUsedKey:a,usedLng:l,usedNS:s}}},{key:"isValidLookup",value:function(r){return!(r===void 0||!this.options.returnNull&&r===null||!this.options.returnEmptyString&&r==="")}},{key:"getResource",value:function(r,n,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(r,n,i,a):this.resourceStore.getResource(r,n,i,a)}}],[{key:"hasDefaultValue",value:function(r){var n="defaultValue";for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)&&n===i.substring(0,12)&&r[i]!==void 0)return!0;return!1}}]),t}();function Ml(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Pu=function(){function e(o){kt(this,e),this.options=o,this.supportedLngs=this.options.supportedLngs||!1,this.logger=pt.create("languageUtils")}return wt(e,[{key:"getScriptPartFromCode",value:function(o){if(!o||o.indexOf("-")<0)return null;var t=o.split("-");return t.length===2?null:(t.pop(),t[t.length-1].toLowerCase()==="x"?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(o){if(!o||o.indexOf("-")<0)return o;var t=o.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(o){if(typeof o=="string"&&o.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],r=o.split("-");return this.options.lowerCaseLng?r=r.map(function(n){return n.toLowerCase()}):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=Ml(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=Ml(r[1].toLowerCase())),t.indexOf(r[2].toLowerCase())>-1&&(r[2]=Ml(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?o.toLowerCase():o}},{key:"isSupportedCode",value:function(o){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(o=this.getLanguagePartFromCode(o)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(o)>-1}},{key:"getBestMatchFromCodes",value:function(o){var t,r=this;return o?(o.forEach(function(n){if(!t){var i=r.formatLanguageCode(n);r.options.supportedLngs&&!r.isSupportedCode(i)||(t=i)}}),!t&&this.options.supportedLngs&&o.forEach(function(n){if(!t){var i=r.getLanguagePartFromCode(n);if(r.isSupportedCode(i))return t=i;t=r.options.supportedLngs.find(function(a){return a===i?a:a.indexOf("-")<0&&i.indexOf("-")<0?void 0:a.indexOf(i)===0?a:void 0})}}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(o,t){if(!o)return[];if(typeof o=="function"&&(o=o(t)),typeof o=="string"&&(o=[o]),Object.prototype.toString.apply(o)==="[object Array]")return o;if(!t)return o.default||[];var r=o[t];return r||(r=o[this.getScriptPartFromCode(t)]),r||(r=o[this.formatLanguageCode(t)]),r||(r=o[this.getLanguagePartFromCode(t)]),r||(r=o.default),r||[]}},{key:"toResolveHierarchy",value:function(o,t){var r=this,n=this.getFallbackCodes(t||this.options.fallbackLng||[],o),i=[],a=function(l){l&&(r.isSupportedCode(l)?i.push(l):r.logger.warn("rejecting language code not found in supportedLngs: ".concat(l)))};return typeof o=="string"&&o.indexOf("-")>-1?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(o)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(o)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(o))):typeof o=="string"&&a(this.formatLanguageCode(o)),n.forEach(function(l){i.indexOf(l)<0&&a(r.formatLanguageCode(l))}),i}}]),e}(),YE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ZE={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}},JE=["v1","v2","v3"],Cu={zero:0,one:1,two:2,few:3,many:4,other:5};function QE(){var e={};return YE.forEach(function(o){o.lngs.forEach(function(t){e[t]={numbers:o.nr,plurals:ZE[o.fc]}})}),e}var eT=function(){function e(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};kt(this,e),this.languageUtils=o,this.options=t,this.logger=pt.create("pluralResolver"),this.options.compatibilityJSON&&this.options.compatibilityJSON!=="v4"||typeof Intl<"u"&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=QE()}return wt(e,[{key:"addRule",value:function(o,t){this.rules[o]=t}},{key:"getRule",value:function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(o,{type:t.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[o]||this.rules[this.languageUtils.getLanguagePartFromCode(o)]}},{key:"needsPlural",value:function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.getRule(o,t);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(o,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(o,r).map(function(n){return"".concat(t).concat(n)})}},{key:"getSuffixes",value:function(o){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.getRule(o,r);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort(function(i,a){return Cu[i]-Cu[a]}).map(function(i){return"".concat(t.options.prepend).concat(i)}):n.numbers.map(function(i){return t.getSuffix(o,i,r)}):[]}},{key:"getSuffix",value:function(o,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=this.getRule(o,r);return n?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(n.select(t)):this.getSuffixRetroCompatible(n,t):(this.logger.warn("no plural rule found for: ".concat(o)),"")}},{key:"getSuffixRetroCompatible",value:function(o,t){var r=this,n=o.noAbs?o.plurals(t):o.plurals(Math.abs(t)),i=o.numbers[n];this.options.simplifyPluralSuffix&&o.numbers.length===2&&o.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));var a=function(){return r.options.prepend&&i.toString()?r.options.prepend+i.toString():i.toString()};return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?"_plural_".concat(i.toString()):a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&o.numbers.length===2&&o.numbers[0]===1?a():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}},{key:"shouldUseIntlApi",value:function(){return!JE.includes(this.options.compatibilityJSON)}}]),e}();function Fu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Go(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Fu(Object(t),!0).forEach(function(r){sr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Fu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function $u(e,o,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],i=DE(e,o,t);return!i&&n&&typeof t=="string"&&(i=Pa(e,t,r))===void 0&&(i=Pa(o,t,r)),i}var oT=function(){function e(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};kt(this,e),this.logger=pt.create("interpolator"),this.options=o,this.format=o.interpolation&&o.interpolation.format||function(t){return t},this.init(o)}return wt(e,[{key:"init",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};o.interpolation||(o.interpolation={escapeValue:!0});var t=o.interpolation;this.escape=t.escape!==void 0?t.escape:BE,this.escapeValue=t.escapeValue===void 0||t.escapeValue,this.useRawValueToEscape=t.useRawValueToEscape!==void 0&&t.useRawValueToEscape,this.prefix=t.prefix?Vr(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?Vr(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?Vr(t.nestingPrefix):t.nestingPrefixEscaped||Vr("$t("),this.nestingSuffix=t.nestingSuffix?Vr(t.nestingSuffix):t.nestingSuffixEscaped||Vr(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=t.alwaysFormat!==void 0&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var o="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(o,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var r="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(r,"g")}},{key:"interpolate",value:function(o,t,r,n){var i,a,l,s=this,c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function d(b){return b.replace(/\$/g,"$$$$")}var f=function(b){if(b.indexOf(s.formatSeparator)<0){var g=$u(t,c,b,s.options.keySeparator,s.options.ignoreJSONStructure);return s.alwaysFormat?s.format(g,void 0,r,Go(Go(Go({},n),t),{},{interpolationkey:b})):g}var m=b.split(s.formatSeparator),k=m.shift().trim(),w=m.join(s.formatSeparator).trim();return s.format($u(t,c,k,s.options.keySeparator,s.options.ignoreJSONStructure),w,r,Go(Go(Go({},n),t),{},{interpolationkey:k}))};this.resetRegExp();var u=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,h=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(b){return d(b)}},{regex:this.regexp,safeValue:function(b){return s.escapeValue?d(s.escape(b)):d(b)}}].forEach(function(b){for(l=0;i=b.regex.exec(o);){var g=i[1].trim();if((a=f(g))===void 0)if(typeof u=="function"){var m=u(o,i,n);a=typeof m=="string"?m:""}else if(n&&Object.prototype.hasOwnProperty.call(n,g))a="";else{if(h){a=i[0];continue}s.logger.warn("missed to pass in variable ".concat(g," for interpolating ").concat(o)),a=""}else typeof a=="string"||s.useRawValueToEscape||(a=Su(a));var k=b.safeValue(a);if(o=o.replace(i[0],k),h?(b.regex.lastIndex+=a.length,b.regex.lastIndex-=i[0].length):b.regex.lastIndex=0,++l>=s.maxReplaces)break}}),o}},{key:"nest",value:function(o,t){var r,n,i,a=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};function s(u,h){var b=this.nestingOptionsSeparator;if(u.indexOf(b)<0)return u;var g=u.split(new RegExp("".concat(b,"[ ]*{"))),m="{".concat(g[1]);u=g[0];var k=(m=this.interpolate(m,i)).match(/'/g),w=m.match(/"/g);(k&&k.length%2==0&&!w||w.length%2!=0)&&(m=m.replace(/'/g,'"'));try{i=JSON.parse(m),h&&(i=Go(Go({},h),i))}catch(y){return this.logger.warn("failed parsing options string in nesting for key ".concat(u),y),"".concat(u).concat(b).concat(m)}return delete i.defaultValue,u}for(;r=this.nestingRegexp.exec(o);){var c=[];(i=(i=Go({},l)).replace&&typeof i.replace!="string"?i.replace:i).applyPostProcessor=!1,delete i.defaultValue;var d=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){var f=r[1].split(this.formatSeparator).map(function(u){return u.trim()});r[1]=f.shift(),c=f,d=!0}if((n=t(s.call(this,r[1].trim(),i),i))&&r[0]===o&&typeof n!="string")return n;typeof n!="string"&&(n=Su(n)),n||(this.logger.warn("missed to resolve ".concat(r[1]," for nesting ").concat(o)),n=""),d&&(n=c.reduce(function(u,h){return a.format(u,h,l.lng,Go(Go({},l),{},{interpolationkey:r[1].trim()}))},n.trim())),o=o.replace(r[0],n),this.regexp.lastIndex=0}return o}}]),e}();function Iu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function xt(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Iu(Object(t),!0).forEach(function(r){sr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Iu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function tT(e){var o=e.toLowerCase().trim(),t={};if(e.indexOf("(")>-1){var r=e.split("(");o=r[0].toLowerCase().trim();var n=r[1].substring(0,r[1].length-1);o==="currency"&&n.indexOf(":")<0?t.currency||(t.currency=n.trim()):o==="relativetime"&&n.indexOf(":")<0?t.range||(t.range=n.trim()):n.split(";").forEach(function(i){if(i){var a=IE(i.split(":")),l=a[0],s=a.slice(1).join(":").trim().replace(/^'+|'+$/g,"");t[l.trim()]||(t[l.trim()]=s),s==="false"&&(t[l.trim()]=!1),s==="true"&&(t[l.trim()]=!0),isNaN(s)||(t[l.trim()]=parseInt(s,10))}})}return{formatName:o,formatOptions:t}}function Wr(e){var o={};return function(t,r,n){var i=r+JSON.stringify(n),a=o[i];return a||(a=e(r,n),o[i]=a),a(t)}}var rT=function(){function e(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};kt(this,e),this.logger=pt.create("formatter"),this.options=o,this.formats={number:Wr(function(t,r){var n=new Intl.NumberFormat(t,xt({},r));return function(i){return n.format(i)}}),currency:Wr(function(t,r){var n=new Intl.NumberFormat(t,xt(xt({},r),{},{style:"currency"}));return function(i){return n.format(i)}}),datetime:Wr(function(t,r){var n=new Intl.DateTimeFormat(t,xt({},r));return function(i){return n.format(i)}}),relativetime:Wr(function(t,r){var n=new Intl.RelativeTimeFormat(t,xt({},r));return function(i){return n.format(i,r.range||"day")}}),list:Wr(function(t,r){var n=new Intl.ListFormat(t,xt({},r));return function(i){return n.format(i)}})},this.init(o)}return wt(e,[{key:"init",value:function(o){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}},{key:"add",value:function(o,t){this.formats[o.toLowerCase().trim()]=t}},{key:"addCached",value:function(o,t){this.formats[o.toLowerCase().trim()]=Wr(t)}},{key:"format",value:function(o,t,r){var n=this,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return t.split(this.formatSeparator).reduce(function(a,l){var s=tT(l),c=s.formatName,d=s.formatOptions;if(n.formats[c]){var f=a;try{var u=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},h=u.locale||u.lng||i.locale||i.lng||r;f=n.formats[c](a,h,xt(xt(xt({},d),i),u))}catch(b){n.logger.warn(b)}return f}return n.logger.warn("there was no format function for ".concat(c)),a},o)}}]),e}();function Nu(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Ru(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Nu(Object(t),!0).forEach(function(r){sr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Nu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function nT(e){var o=iT();return function(){var t,r=mt(e);if(o){var n=mt(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Si(this,t)}}function iT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function aT(e,o){e.pending[o]!==void 0&&(delete e.pending[o],e.pendingCount--)}var lT=function(e){nl(t,ir);var o=nT(t);function t(r,n,i){var a,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return kt(this,t),a=o.call(this),il&&ir.call(or(a)),a.backend=r,a.store=n,a.services=i,a.languageUtils=i.languageUtils,a.options=l,a.logger=pt.create("backendConnector"),a.waitingReads=[],a.maxParallelReads=l.maxParallelReads||10,a.readingCalls=0,a.maxRetries=l.maxRetries>=0?l.maxRetries:5,a.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,a.state={},a.queue=[],a.backend&&a.backend.init&&a.backend.init(i,l.backend,l),a}return wt(t,[{key:"queueLoad",value:function(r,n,i,a){var l=this,s={},c={},d={},f={};return r.forEach(function(u){var h=!0;n.forEach(function(b){var g="".concat(u,"|").concat(b);!i.reload&&l.store.hasResourceBundle(u,b)?l.state[g]=2:l.state[g]<0||(l.state[g]===1?c[g]===void 0&&(c[g]=!0):(l.state[g]=1,h=!1,c[g]===void 0&&(c[g]=!0),s[g]===void 0&&(s[g]=!0),f[b]===void 0&&(f[b]=!0)))}),h||(d[u]=!0)}),(Object.keys(s).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(s),pending:Object.keys(c),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(f)}}},{key:"loaded",value:function(r,n,i){var a=r.split("|"),l=a[0],s=a[1];n&&this.emit("failedLoading",l,s,n),i&&this.store.addResourceBundle(l,s,i),this.state[r]=n?-1:2;var c={};this.queue.forEach(function(d){ME(d.loaded,[l],s),aT(d,r),n&&d.errors.push(n),d.pendingCount!==0||d.done||(Object.keys(d.loaded).forEach(function(f){c[f]||(c[f]={});var u=d.loaded[f];u.length&&u.forEach(function(h){c[f][h]===void 0&&(c[f][h]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",c),this.queue=this.queue.filter(function(d){return!d.done})}},{key:"read",value:function(r,n,i){var a=this,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!r.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads)this.waitingReads.push({lng:r,ns:n,fcName:i,tried:l,wait:s,callback:c});else{this.readingCalls++;var d=function(h,b){if(a.readingCalls--,a.waitingReads.length>0){var g=a.waitingReads.shift();a.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}h&&b&&l<a.maxRetries?setTimeout(function(){a.read.call(a,r,n,i,l+1,2*s,c)},s):c(h,b)},f=this.backend[i].bind(this.backend);if(f.length!==2)return f(r,n,d);try{var u=f(r,n);u&&typeof u.then=="function"?u.then(function(h){return d(null,h)}).catch(d):d(null,u)}catch(h){d(h)}}}},{key:"prepareLoading",value:function(r,n){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();typeof r=="string"&&(r=this.languageUtils.toResolveHierarchy(r)),typeof n=="string"&&(n=[n]);var s=this.queueLoad(r,n,a,l);if(!s.toLoad.length)return s.pending.length||l(),null;s.toLoad.forEach(function(c){i.loadOne(c)})}},{key:"load",value:function(r,n,i){this.prepareLoading(r,n,{},i)}},{key:"reload",value:function(r,n,i){this.prepareLoading(r,n,{reload:!0},i)}},{key:"loadOne",value:function(r){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=r.split("|"),l=a[0],s=a[1];this.read(l,s,"read",void 0,void 0,function(c,d){c&&n.logger.warn("".concat(i,"loading namespace ").concat(s," for language ").concat(l," failed"),c),!c&&d&&n.logger.log("".concat(i,"loaded namespace ").concat(s," for language ").concat(l),d),n.loaded(r,c,d)})}},{key:"saveMissing",value:function(r,n,i,a,l){var s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n))this.logger.warn('did not save key "'.concat(i,'" as the namespace "').concat(n,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(i!=null&&i!==""){if(this.backend&&this.backend.create){var d=Ru(Ru({},s),{},{isUpdate:l}),f=this.backend.create.bind(this.backend);if(f.length<6)try{var u;(u=f.length===5?f(r,n,i,a,d):f(r,n,i,a))&&typeof u.then=="function"?u.then(function(h){return c(null,h)}).catch(c):c(null,u)}catch(h){c(h)}else f(r,n,i,a,c,d)}r&&r[0]&&this.store.addResource(r[0],n,i,a)}}}]),t}();function ju(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var o={};if(et(e[1])==="object"&&(o=e[1]),typeof e[1]=="string"&&(o.defaultValue=e[1]),typeof e[2]=="string"&&(o.tDescription=e[2]),et(e[2])==="object"||et(e[3])==="object"){var t=e[3]||e[2];Object.keys(t).forEach(function(r){o[r]=t[r]})}return o},interpolation:{escapeValue:!0,format:function(e,o,t,r){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Mu(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Du(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function at(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?arguments[o]:{};o%2?Du(Object(t),!0).forEach(function(r){sr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Du(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function sT(e){var o=cT();return function(){var t,r=mt(e);if(o){var n=mt(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Si(this,t)}}function cT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vi(){}function dT(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function(o){typeof e[o]=="function"&&(e[o]=e[o].bind(e))})}var Ca=function(e){nl(t,ir);var o=sT(t);function t(){var r,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(kt(this,t),r=o.call(this),il&&ir.call(or(r)),r.options=Mu(n),r.services={},r.logger=pt,r.modules={external:[]},dT(or(r)),i&&!r.isInitialized&&!n.isClone){if(!r.options.initImmediate)return r.init(n,i),Si(r,or(r));setTimeout(function(){r.init(n,i)},0)}return r}return wt(t,[{key:"init",value:function(){var r=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;typeof n=="function"&&(i=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));var a=ju();function l(b){return b?typeof b=="function"?new b:b:null}if(this.options=at(at(at({},a),this.options),Mu(n)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=at(at({},a.interpolation),this.options.interpolation)),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator),!this.options.isClone){var s;this.modules.logger?pt.init(l(this.modules.logger),this.options):pt.init(null,this.options),this.modules.formatter?s=this.modules.formatter:typeof Intl<"u"&&(s=rT);var c=new Pu(this.options);this.store=new WE(this.options.resources,this.options);var d=this.services;d.logger=pt,d.resourceStore=this.store,d.languageUtils=c,d.pluralResolver=new eT(c,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!s||this.options.interpolation.format&&this.options.interpolation.format!==a.interpolation.format||(d.formatter=l(s),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new oT(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new lT(l(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(b){for(var g=arguments.length,m=new Array(g>1?g-1:0),k=1;k<g;k++)m[k-1]=arguments[k];r.emit.apply(r,[b].concat(m))}),this.modules.languageDetector&&(d.languageDetector=l(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=l(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Au(this.services,this.options),this.translator.on("*",function(b){for(var g=arguments.length,m=new Array(g>1?g-1:0),k=1;k<g;k++)m[k-1]=arguments[k];r.emit.apply(r,[b].concat(m))}),this.modules.external.forEach(function(b){b.init&&b.init(r)})}if(this.format=this.options.interpolation.format,i||(i=Vi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(b){r[b]=function(){var g;return(g=r.store)[b].apply(g,arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(function(b){r[b]=function(){var g;return(g=r.store)[b].apply(g,arguments),r}});var u=Ln(),h=function(){var b=function(g,m){r.isInitialized&&!r.initializedStoreOnce&&r.logger.warn("init: i18next is already initialized. You should call init just once!"),r.isInitialized=!0,r.options.isClone||r.logger.log("initialized",r.options),r.emit("initialized",r.options),u.resolve(m),i(g,m)};if(r.languages&&r.options.compatibilityAPI!=="v1"&&!r.isInitialized)return b(null,r.t.bind(r));r.changeLanguage(r.options.lng,b)};return this.options.resources||!this.options.initImmediate?h():setTimeout(h,0),u}},{key:"loadResources",value:function(r){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi,a=typeof r=="string"?r:this.language;if(typeof r=="function"&&(i=r),!this.options.resources||this.options.partialBundledLanguages){if(a&&a.toLowerCase()==="cimode")return i();var l=[],s=function(c){c&&n.services.languageUtils.toResolveHierarchy(c).forEach(function(d){l.indexOf(d)<0&&l.push(d)})};a?s(a):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(c){return s(c)}),this.options.preload&&this.options.preload.forEach(function(c){return s(c)}),this.services.backendConnector.load(l,this.options.ns,function(c){c||n.resolvedLanguage||!n.language||n.setResolvedLanguage(n.language),i(c)})}else i(null)}},{key:"reloadResources",value:function(r,n,i){var a=Ln();return r||(r=this.languages),n||(n=this.options.ns),i||(i=Vi),this.services.backendConnector.reload(r,n,function(l){a.resolve(),i(l)}),a}},{key:"use",value:function(r){if(!r)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!r.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return r.type==="backend"&&(this.modules.backend=r),(r.type==="logger"||r.log&&r.warn&&r.error)&&(this.modules.logger=r),r.type==="languageDetector"&&(this.modules.languageDetector=r),r.type==="i18nFormat"&&(this.modules.i18nFormat=r),r.type==="postProcessor"&&Fg.addPostProcessor(r),r.type==="formatter"&&(this.modules.formatter=r),r.type==="3rdParty"&&this.modules.external.push(r),this}},{key:"setResolvedLanguage",value:function(r){if(r&&this.languages&&!(["cimode","dev"].indexOf(r)>-1))for(var n=0;n<this.languages.length;n++){var i=this.languages[n];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}},{key:"changeLanguage",value:function(r,n){var i=this;this.isLanguageChangingTo=r;var a=Ln();this.emit("languageChanging",r);var l=function(c){i.language=c,i.languages=i.services.languageUtils.toResolveHierarchy(c),i.resolvedLanguage=void 0,i.setResolvedLanguage(c)},s=function(c){r||c||!i.services.languageDetector||(c=[]);var d=typeof c=="string"?c:i.services.languageUtils.getBestMatchFromCodes(c);d&&(i.language||l(d),i.translator.language||i.translator.changeLanguage(d),i.services.languageDetector&&i.services.languageDetector.cacheUserLanguage&&i.services.languageDetector.cacheUserLanguage(d)),i.loadResources(d,function(f){(function(u,h){h?(l(h),i.translator.changeLanguage(h),i.isLanguageChangingTo=void 0,i.emit("languageChanged",h),i.logger.log("languageChanged",h)):i.isLanguageChangingTo=void 0,a.resolve(function(){return i.t.apply(i,arguments)}),n&&n(u,function(){return i.t.apply(i,arguments)})})(f,d)})};return r||!this.services.languageDetector||this.services.languageDetector.async?!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(r):s(this.services.languageDetector.detect()),a}},{key:"getFixedT",value:function(r,n,i){var a=this,l=function s(c,d){var f;if(et(d)!=="object"){for(var u=arguments.length,h=new Array(u>2?u-2:0),b=2;b<u;b++)h[b-2]=arguments[b];f=a.options.overloadTranslationOptionHandler([c,d].concat(h))}else f=at({},d);f.lng=f.lng||s.lng,f.lngs=f.lngs||s.lngs,f.ns=f.ns||s.ns,f.keyPrefix=f.keyPrefix||i||s.keyPrefix;var g,m=a.options.keySeparator||".";return g=f.keyPrefix&&Array.isArray(c)?c.map(function(k){return"".concat(f.keyPrefix).concat(m).concat(k)}):f.keyPrefix?"".concat(f.keyPrefix).concat(m).concat(c):c,a.t(g,f)};return typeof r=="string"?l.lng=r:l.lngs=r,l.ns=n,l.keyPrefix=i,l}},{key:"t",value:function(){var r;return this.translator&&(r=this.translator).translate.apply(r,arguments)}},{key:"exists",value:function(){var r;return this.translator&&(r=this.translator).exists.apply(r,arguments)}},{key:"setDefaultNamespace",value:function(r){this.options.defaultNS=r}},{key:"hasLoadedNamespace",value:function(r){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var a=this.resolvedLanguage||this.languages[0],l=!!this.options&&this.options.fallbackLng,s=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var c=function(f,u){var h=n.services.backendConnector.state["".concat(f,"|").concat(u)];return h===-1||h===2};if(i.precheck){var d=i.precheck(this,c);if(d!==void 0)return d}return!!this.hasResourceBundle(a,r)||!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!c(a,r)||l&&!c(s,r))}},{key:"loadNamespaces",value:function(r,n){var i=this,a=Ln();return this.options.ns?(typeof r=="string"&&(r=[r]),r.forEach(function(l){i.options.ns.indexOf(l)<0&&i.options.ns.push(l)}),this.loadResources(function(l){a.resolve(),n&&n(l)}),a):(n&&n(),Promise.resolve())}},{key:"loadLanguages",value:function(r,n){var i=Ln();typeof r=="string"&&(r=[r]);var a=this.options.preload||[],l=r.filter(function(s){return a.indexOf(s)<0});return l.length?(this.options.preload=a.concat(l),this.loadResources(function(s){i.resolve(),n&&n(s)}),i):(n&&n(),Promise.resolve())}},{key:"dir",value:function(r){if(r||(r=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!r)return"rtl";var n=this.services&&this.services.languageUtils||new Pu(ju());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(n.getLanguagePartFromCode(r))>-1||r.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var r=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vi,a=at(at(at({},this.options),n),{isClone:!0}),l=new t(a);return n.debug===void 0&&n.prefix===void 0||(l.logger=l.logger.clone(n)),["store","services","language"].forEach(function(s){l[s]=r[s]}),l.services=at({},this.services),l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l.translator=new Au(l.services,l.options),l.translator.on("*",function(s){for(var c=arguments.length,d=new Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];l.emit.apply(l,[s].concat(d))}),l.init(a,i),l.translator.options=l.options,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),t}();sr(Ca,"createInstance",function(){return new Ca(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},arguments.length>1?arguments[1]:void 0)});var $g=Ca.createInstance();$g.createInstance=Ca.createInstance;class fT{constructor(o,t){this.i18next=$g,Array.isArray(t)?t=new Set(t):typeof t=="function"&&(t=new Set([t])),this.i18next.isInitialized||this.i18next.init({lng:o}),t!==void 0&&t.forEach(r=>r((n,i)=>(this.addResourceBundle(n,i),n)))}addResourceBundle(o,t){this.i18next.addResourceBundle(o,"translation",t,!0)}translate(o,t){return this.i18next.t(o,Object.assign({count:t==null?void 0:t.count},t==null?void 0:t.placeholders))}}const uT=(e,o,t)=>{var r,n;try{se.I18n===void 0&&Object.defineProperty(se,"I18n",{value:new fT((n=(r=t==null?void 0:t.translation)===null||r===void 0?void 0:r.name)!==null&&n!==void 0?n:"de",t==null?void 0:t.translations),writable:!1})}catch{}return mE(e,o,t)};/*!
 * KoliBri - The accessible HTML-Standard
 */let pT=null,hT=null;const Bs=()=>pT||typeof window>"u"?null:window,Ig=()=>hT||Bs().document===void 0?null:Bs().document;let Ku=null;class We{static mapToArray(o){return Array.isArray(o)?o:[o]}static handleClassifier(o){return typeof o=="string"&&o.length>0?`${We.shield.label} | ${o}`:We.shield.label}static getShield(o){return[We.handleClassifier(o==null?void 0:o.classifier),`${We.shield.style};${(o==null?void 0:o.overwriteStyle)||""}`]}static debug(o,t){(t==null?void 0:t.forceLog)===!0&&console.debug(...We.getShield(t),...We.mapToArray(o))}static info(o,t){(t==null?void 0:t.forceLog)===!0&&console.info(...We.getShield(t),...We.mapToArray(o))}static trace(o,t){(t==null?void 0:t.forceLog)===!0&&console.trace(...We.getShield(t),...We.mapToArray(o))}static warn(o,t){(Ku||(t==null?void 0:t.forceLog)===!0)&&console.warn(...We.getShield(t),...We.mapToArray(o))}static error(o,t){(Ku||(t==null?void 0:t.forceLog)===!0)&&console.error(...We.getShield(t),...We.mapToArray(o))}static throw(o,t){if((t==null?void 0:t.forceLog)===!0)throw new Error(...We.getShield(t),...We.mapToArray(o))}}We.shield={label:"%cKoliBri",style:"color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000"};/*!
 * KoliBri - The accessible HTML-Standard
 */const Bu=new Set,Wn=e=>{Bu.has(e)===!1&&(Bu.add(e),We.debug(e,{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))};Wn("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");/*!
 * KoliBri - The accessible HTML-Standard
 */const Uu=(e,o)=>{o.forEach(t=>{e.has(t)===!1&&e.add(t)})},Ng=(e,o=document)=>{if(o instanceof Document||o instanceof HTMLElement||o instanceof ShadowRoot){const t=new Set;Uu(t,o.querySelectorAll(e));const r=o.querySelectorAll('[class*="hydrated"]');for(let n=0;n<r.length;n++){const i=r[n].shadowRoot;Uu(t,Ng(e,typeof i=="object"&&i!==null?i:r[n]))}return Array.from(t)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},Rg=(e,o=document)=>{if(o instanceof Document||o instanceof HTMLElement||o instanceof ShadowRoot){let t=o.querySelector(e);if(t===null){const r=o.querySelectorAll('[class*="hydrated"]');for(let n=0;n<r.length;n++){const i=r[n].shadowRoot;if(t=Rg(e,typeof i=="object"&&i!==null?i:r[n]),t!==null)break}}return t}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var En=jg,bT=jg,gT=wT,mT=yT,vT=xT,kT=_T;function jg(e){var o=zi(e);return o.length==3?o.concat(255):(o[3]=Math.round(o[3]),o)}function wT(e){var o=zi(e);return{r:o[0],g:o[1],b:o[2],a:o.length==3?255:Math.round(o[3])}}function yT(e){var o=zi(e);return o.length==3&&o.push(255),o[3]==255?"rgb("+o[0]+", "+o[1]+", "+o[2]+")":o[3]==0?"rgba("+o[0]+", "+o[1]+", "+o[2]+", 0)":"rgba("+o[0]+", "+o[1]+", "+o[2]+", "+String(o[3]/255).substr(1)+")"}function xT(e){(o=zi(e)).length==3&&o.push(255);var o,t=o[3]==255,r=Wi(o[0]),n=Wi(o[1]),i=Wi(o[2]),a=OT(r,n,i,o=Wi(Math.round(o[3])));return t?a?"#"+r.charAt(0)+n.charAt(0)+i.charAt(0):"#"+r+n+i:a?"#"+r.charAt(0)+n.charAt(0)+i.charAt(0)+o.charAt(0):"#"+r+n+i+o}function _T(e){var o=zi(e);return o.length==3?o.push(255):o[3]=Math.round(o[3]),(o[3]<<24>>>0|o[0]<<16|o[1]<<8|o[2])>>>0}function zi(e){return typeof e=="string"?ST(e=e.toLowerCase())||zT(e)||LT(e)||PT(e)||CT(e)||[0,0,0,255]:ET(e)||TT(e)||AT(e)||[0,0,0,255]}function Wi(e){var o=e.toString(16);return o.length==1?"0"+o:o}function OT(e,o,t,r){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return n.indexOf(e)!=-1&&n.indexOf(o)!=-1&&n.indexOf(t)!=-1&&n.indexOf(r)!=-1}function ST(e){return e=="red"?[255,0,0]:e=="green"?[0,255,0]:e=="blue"?[0,0,255]:e=="black"?[0,0,0]:e=="white"?[255,255,255]:e=="cyan"?[0,255,255]:e=="gray"||e=="grey"?[128,128,128]:e=="magenta"||e=="pink"?[255,0,255]:e=="yellow"?[255,255,0]:void 0}function Vt(e){return e.length==1?parseInt(e+e,16):parseInt(e,16)}function zT(e){var o=e.replace(/^#/,""),t=o.length;if(t==3||t==4){var r=Vt(o[0]),n=Vt(o[1]),i=Vt(o[2]),a=t==3?255:Vt(o[3]);return isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a)?void 0:[r,n,i,a]}}function LT(e){var o=e.replace(/^#/,""),t=o.length;if(t==6||t==8){var r=Vt(o.slice(0,2)),n=Vt(o.slice(2,4)),i=Vt(o.slice(4,6)),a=t==6?255:Vt(o.slice(6,8));return isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a)?void 0:[r,n,i,a]}}function wo(e,o){return typeof e!="number"||o===!0&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function ET(e){if(Object.prototype.toString.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var o=wo(e.r!=null?e.r:e.red!=null?e.red:0,!0),t=wo(e.g!=null?e.g:e.green!=null?e.green:0,!0),r=wo(e.b!=null?e.b:e.blue!=null?e.blue:0,!0),n=wo(e.a!=null?e.a:e.alpha!=null?e.alpha:255,!0);if(o!=-1&&t!=-1&&r!=-1&&n!=-1)return[o,t,r,n]}}function TT(e){if(Array.isArray(e)&&(e.length==3||e.length==4)){var o=wo(e[0],!0),t=wo(e[1],!0),r=wo(e[2],!0),n=wo(e[3]!=null?e[3]:255,!0);if(o!=-1&&t!=-1&&r!=-1&&n!=-1)return[o,t,r,n]}}function AT(e){if(typeof e=="number"&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function PT(e){if(e.substr(0,4)=="rgb("){var o=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=wo(o[0],!0),r=wo(o[1],!0),n=wo(o[2],!0);if(t!=-1&&r!=-1&&n!=-1)return[t,r,n,255]}}function CT(e){if(e.substr(0,5)=="rgba("){var o=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=wo(o[0],!0),r=wo(o[1],!0),n=wo(o[2],!0),i=wo(255*o[3]);if(t!=-1&&r!=-1&&n!=-1&&i!=-1)return[t,r,n,i]}}En.arr=bT,En.obj=gT,En.css=mT,En.hex=vT,En.num=kT;const FT=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch{throw We.warn(["stringifyJson",e]),We.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},Mg=(e,o)=>Rg(e,o||Ig()),$T=(e,o)=>Ng(e,o||Ig()),Dg=(e,o=window)=>{e instanceof HTMLElement?(o.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+Bs().pageYOffset-50}),e.focus()):Wn("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},IT=(e,o)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&typeof o=="string"){Wn("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const t=`${o}`;o=e,e=t}if(typeof e=="string"){const t=Mg(e,o);t instanceof HTMLElement?Dg(t):Wn(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else Wn("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class Lt{}Lt.patchTheme=Eg,Lt.patchThemeTag=Lg,Lt.querySelector=Mg,Lt.querySelectorAll=$T,Lt.scrollByHTMLElement=Dg,Lt.scrollBySelector=IT,Lt.stringifyJson=FT;/*!
 * KoliBri - The accessible HTML-Standard
 */var Us,Hs;(function(e){e[e.error=0]="error",e[e.warning=1]="warning",e[e.info=2]="info",e[e.success=3]="success",e[e.message=4]="message",e[e.close=5]="close",e[e["form-description"]=6]="form-description",e[e.of=7]="of",e[e.characters=8]="characters",e[e.new=9]="new",e[e["no-entries"]=10]="no-entries",e[e["change-order"]=11]="change-order",e[e["action-running"]=12]="action-running",e[e["action-done"]=13]="action-done",e[e["page-first"]=14]="page-first",e[e["page-back"]=15]="page-back",e[e["page-next"]=16]="page-next",e[e["page-last"]=17]="page-last",e[e["entries-per-site"]=18]="entries-per-site",e[e["page-current"]=19]="page-current",e[e["page-selected"]=20]="page-selected",e[e["page-per-site"]=21]="page-per-site",e[e["nav-maximize"]=22]="nav-maximize",e[e["nav-minimize"]=23]="nav-minimize",e[e["logo-description"]=24]="logo-description",e[e["open-link-in-tab"]=25]="open-link-in-tab",e[e["kolibri-logo"]=26]="kolibri-logo"})(Us||(Us={})),function(e){e[e.abbr=0]="abbr",e[e.accordion=1]="accordion",e[e["accordion-group"]=2]="accordion-group",e[e.alert=3]="alert",e[e.avatar=4]="avatar",e[e.badge=5]="badge",e[e.breadcrumb=6]="breadcrumb",e[e.button=7]="button",e[e["button-group"]=8]="button-group",e[e["button-link"]=9]="button-link",e[e.card=10]="card",e[e.details=11]="details",e[e.dialog=12]="dialog",e[e.dropdown=13]="dropdown",e[e.form=14]="form",e[e.heading=15]="heading",e[e.icon=16]="icon",e[e.image=17]="image",e[e["indented-text"]=18]="indented-text",e[e["input-checkbox"]=19]="input-checkbox",e[e["input-color"]=20]="input-color",e[e["input-date"]=21]="input-date",e[e["input-file"]=22]="input-file",e[e["input-email"]=23]="input-email",e[e["input-number"]=24]="input-number",e[e["input-password"]=25]="input-password",e[e["input-radio"]=26]="input-radio",e[e["input-range"]=27]="input-range",e[e["input-text"]=28]="input-text",e[e.link=29]="link",e[e["link-button"]=30]="link-button",e[e["link-group"]=31]="link-group",e[e.modal=32]="modal",e[e.nav=33]="nav",e[e.pagination=34]="pagination",e[e.popover=35]="popover",e[e.progress=36]="progress",e[e.select=37]="select",e[e.separator=38]="separator",e[e["skip-nav"]=39]="skip-nav",e[e.spin=40]="spin",e[e.symbol=41]="symbol",e[e.table=42]="table",e[e.tabs=43]="tabs",e[e.textarea=44]="textarea",e[e.toast=45]="toast",e[e.toolbar=46]="toolbar",e[e.tooltip=47]="tooltip"}(Hs||(Hs={}));const Io=new TE("kol",Us,Hs);Io.createTheme("bamf",{});const NT=Io.createTheme("bpa",{GLOBAL:`:host {
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
	}`});Io.createTheme("bzst",{GLOBAL:`/* colors */
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
}`});const RT=Io.createTheme("bmf",{GLOBAL:`/* Design Tokens */
	:host {
		--border-radius: 5px;
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
		padding: 0;
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
	kol-input .input:focus-within,
	summary:focus {
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
	}
	kol-tooltip .area {
		background-color: var(--color-metal);
		color: var(--color-white);
	}
	kol-tooltip kol-span-wc {
		border-radius: var(--border-radius);
		line-height: 1.5em;
		padding: 0.5rem 0.75rem;
	}
	kol-span-wc,
	kol-span-wc > span {
		gap: 0.5em;
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
		gap: 0.4em;
	}
	kol-input .error {
		order: 1;
	}
	kol-input label {
		order: 2;
	}
	kol-input .input {
		order: 3;
	}
	kol-input .hint {
		order: 4;
		font-size: 0.875em;
		font-style: italic;
	}
	input {
		border: none;
		line-height: 1em;
		min-height: 40px !important;
		padding: 0.625em 0;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	.input {
		border-color: var(--color-grey);
		border-radius: 0.3125rem;
		border-style: solid;
		border-width: 2px;
		height: 44px;
		padding: 0 0.5em;
	}
	.input > kol-icon {
		width: 1.5em;
	}
	.input > input:first-child {
		padding-left: 0.375em;
	}
	.input > input:last-child {
		padding-right: 0.375em;
	}
	.input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error .input:focus-within {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
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
		gap: 0.4em;
	}
	kol-input .error {
		order: 1;
	}
	kol-input label {
		order: 2;
	}
	kol-input .input {
		order: 3;
	}
	kol-input .hint {
		order: 4;
		font-size: 0.875em;
		font-style: italic;
	}
	input {
		border: none;
		line-height: 1em;
		min-height: 40px !important;
		padding: 0.625em 0;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	.input {
		border-color: var(--color-grey);
		border-radius: 0.3125rem;
		border-style: solid;
		border-width: 2px;
		height: 44px;
		padding: 0 0.5em;
	}
	.input > kol-icon {
		width: 1.5em;
	}
	.input > input:first-child {
		padding-left: 0.375em;
	}
	.input > input:last-child {
		padding-right: 0.375em;
	}
	.input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error .input:focus-within {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
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
		gap: 0.4em;
	}
	kol-input .error {
		order: 1;
	}
	kol-input label {
		order: 2;
	}
	kol-input .input {
		order: 3;
	}
	kol-input .hint {
		order: 4;
		font-size: 0.875em;
		font-style: italic;
	}
	input {
		border: none;
		line-height: 1em;
		min-height: 40px !important;
		padding: 0.625em 0;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	.input {
		border-color: var(--color-grey);
		border-radius: 0.3125rem;
		border-style: solid;
		border-width: 2px;
		height: 44px;
		padding: 0 0.5em;
	}
	.input > kol-icon {
		width: 1.5em;
	}
	.input > input:first-child {
		padding-left: 0.375em;
	}
	.input > input:last-child {
		padding-right: 0.375em;
	}
	.input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error .input:focus-within {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
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
		gap: 0.4em;
	}
	kol-input .error {
		order: 1;
	}
	kol-input label {
		order: 2;
	}
	kol-input .input {
		order: 3;
	}
	kol-input .hint {
		order: 4;
		font-size: 0.875em;
		font-style: italic;
	}
	input {
		border: none;
		line-height: 1em;
		min-height: 40px !important;
		padding: 0.625em 0;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	.input {
		border-color: var(--color-grey);
		border-radius: 0.3125rem;
		border-style: solid;
		border-width: 2px;
		height: 44px;
		padding: 0 0.5em;
	}
	.input > kol-icon {
		width: 1.5em;
	}
	.input > input:first-child {
		padding-left: 0.375em;
	}
	.input > input:last-child {
		padding-right: 0.375em;
	}
	.input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error .input:focus-within {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
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
		gap: 0.4em;
	}
	kol-input .error {
		order: 1;
	}
	kol-input label {
		order: 2;
	}
	kol-input .input {
		order: 3;
	}
	kol-input .hint {
		order: 4;
		font-size: 0.875em;
		font-style: italic;
	}
	input {
		border: none;
		line-height: 1em;
		min-height: 40px !important;
		padding: 0.625em 0;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	.input {
		border-color: var(--color-grey);
		border-radius: 0.3125rem;
		border-style: solid;
		border-width: 2px;
		height: 44px;
		padding: 0 0.5em;
	}
	.input > kol-icon {
		width: 1.5em;
	}
	.input > input:first-child {
		padding-left: 0.375em;
	}
	.input > input:last-child {
		padding-right: 0.375em;
	}
	.input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error .input:focus-within {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
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
		color: white;
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
		color: var(--color-midnight);
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
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
	}
	a,
	kol-span-wc > span {
		place-items: baseline;
	}
	kol-span-wc > span {
		gap: 0.25em;
	}`,"KOL-DETAILS":`details > summary {
		border-radius: var(--border-radius);
	}
	details kol-indented-text {
		margin: 0.25em 0px 0px 0.65em;
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
		gap: 0.4em;
	}
	kol-input .error {
		order: 1;
	}
	kol-input label {
		order: 2;
	}
	kol-input .input {
		order: 3;
	}
	kol-input .hint {
		order: 4;
		font-size: 0.875em;
		font-style: italic;
	}
	input {
		border: none;
		line-height: 1em;
		min-height: 40px !important;
		padding: 0.625em 0;
	}
	input::placeholder {
		color: var(--color-grey);
	}
	.input {
		border-color: var(--color-grey);
		border-radius: 0.3125rem;
		border-style: solid;
		border-width: 2px;
		height: 44px;
		padding: 0 0.5em;
	}
	.input > kol-icon {
		width: 1.5em;
	}
	.input > input:first-child {
		padding-left: 0.375em;
	}
	.input > input:last-child {
		padding-right: 0.375em;
	}
	.input:hover {
		border-color: var(--color-midnight);
	}
	input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {
		cursor: not-allowed;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}
	kol-input.error .input:focus-within {
		outline-color: var(--color-red) !important;
	}
	kol-input.error kol-alert.error {
		color: var(--color-red);
		font-weight: 700;
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
	}`,"KOL-ACCORDION":`:host > .accordion {
		padding: 0 0.5rem 0 0;
	}
	:host > div > kol-heading-wc button {
		border-radius: var(--border-radius);
	}
	:host > div > kol-heading-wc button kol-span-wc {
		font-weight: 700;
		font-size: 1.25rem;
		gap: 0.5rem;
		line-height: 1.75em;
		margin-left: 0.5rem;
	}
	:host > div > kol-heading-wc button kol-span-wc > span {
		gap: 0.5em;
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
		content: "\\f078";
	}
	:host > div {
		width: 100%;
		height: 100%;
		display: grid;
	}
	:host > div div[class="header"],
	:host > div[class*="open"] div[class="content"] {
		margin: 0;
		padding-left: 2em;
	}
	:host > div {
		background: var(--color-white);
	}
	:host > div[class*="open"] {
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
	.entry > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
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
	.entry > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {
		border-left-color: var(--color-ocean);
		font-weight: 700;
	}
	.selected :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
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
		color: var(--color-midnight);
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
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
	}
	a,
	kol-span-wc > span {
		place-items: baseline;
	}
	kol-span-wc > span {
		gap: 0.25em;
	}`,"KOL-ABBR":`abbr {
		border-bottom: dotted var(--color-metal) 1px;
		text-decoration: none !important;
	}`,"KOL-ICON":`@font-face {
		font-family: "Material Icons";
		font-style: normal;
		font-weight: 400;
		font-display: block;
		src: url("./material-icons.woff2") format("woff2"),
			url("./material-icons.woff") format("woff");
	}
	.material-icons {
		font-family: "Material Icons";
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga";
	}
	@font-face {
		font-family: "Material Icons Outlined";
		font-style: normal;
		font-weight: 400;
		font-display: block;
		src: url("./material-icons-outlined.woff2") format("woff2"),
			url("./material-icons-outlined.woff") format("woff");
	}
	.material-icons-outlined {
		font-family: "Material Icons Outlined";
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga";
	}
	@font-face {
		font-family: "Material Icons Round";
		font-style: normal;
		font-weight: 400;
		font-display: block;
		src: url("./material-icons-round.woff2") format("woff2"),
			url("./material-icons-round.woff") format("woff");
	}
	.material-icons-round {
		font-family: "Material Icons Round";
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga";
	}
	@font-face {
		font-family: "Material Icons Sharp";
		font-style: normal;
		font-weight: 400;
		font-display: block;
		src: url("./material-icons-sharp.woff2") format("woff2"),
			url("./material-icons-sharp.woff") format("woff");
	}
	.material-icons-sharp {
		font-family: "Material Icons Sharp";
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga";
	}
	@font-face {
		font-family: "Material Icons Two Tone";
		font-style: normal;
		font-weight: 400;
		font-display: block;
		src: url("./material-icons-two-tone.woff2") format("woff2"),
			url("./material-icons-two-tone.woff") format("woff");
	}
	.material-icons-two-tone {
		font-family: "Material Icons Two Tone";
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga";
	}
	@font-face {
		font-family: "Material Symbols Outlined";
		font-style: normal;
		font-weight: 100 700;
		font-display: block;
		src: url("./material-symbols-outlined.woff2") format("woff2");
	}
	.material-symbols-outlined {
		font-family: "Material Symbols Outlined";
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga";
	}
	@font-face {
		font-family: "Material Symbols Rounded";
		font-style: normal;
		font-weight: 100 700;
		font-display: block;
		src: url("./material-symbols-rounded.woff2") format("woff2");
	}
	.material-symbols-rounded {
		font-family: "Material Symbols Rounded";
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga";
	}
	@font-face {
		font-family: "Material Symbols Sharp";
		font-style: normal;
		font-weight: 100 700;
		font-display: block;
		src: url("./material-symbols-sharp.woff2") format("woff2");
	}
	.material-symbols-sharp {
		font-family: "Material Symbols Sharp";
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga";
	}
	[class*="material-icons"].home:after {
		content: "home";
	}
	[class*="material-icons"].east:after {
		content: "east";
	}
	[class*="material-symbols"].home:after {
		content: "home";
	}
	[class*="material-symbols"].arrow_right_alt:after {
		content: "arrow_right_alt";
	}`});Io.createTheme("desy-v1",{GLOBAL:`:host {
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
	}`});const jT=Io.createTheme("desy-v2",{GLOBAL:`
	kol-tooltip .area {
		background-color:#f2f2f2;
	}
	kol-tooltip #arrow {
		background-color: #626262;
	}
	kol-tooltip kol-span-wc {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 2px;
		border: 1px solid #626262;
	}
	:host {
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
	}`}),MT=Io.createTheme("ecl-ec",{GLOBAL:`
	kol-tooltip .area {
		background-color:#f2f2f2;
	}
	kol-tooltip #arrow {
		background-color: #626262;
	}
	kol-tooltip kol-span-wc {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 2px;
		border: 1px solid #626262;
	}
	:host {
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
	}`}),DT=Io.createTheme("ecl-eu",{GLOBAL:`
	kol-tooltip .area {
		background-color:#f2f2f2;
	}
	kol-tooltip #arrow {
		background-color: #626262;
	}
	kol-tooltip kol-span-wc {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 2px;
		border: 1px solid #626262;
	}
	:host {
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
	}`}),KT=Io.createTheme("itzbund",{GLOBAL:`
	kol-tooltip .area {
		background-color: #f2f2f2;
	}
	kol-tooltip #arrow {
		background-color: #626262;
	}
	kol-tooltip kol-span-wc {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 2px;
		border: 1px solid #626262;
	}
	:host {
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
	}`}),BT=Io.createTheme("mapz",{GLOBAL:`
	kol-tooltip .area {
		background-color:#f2f2f2;
	}
	kol-tooltip #arrow {
		background-color: #626262;
	}
	kol-tooltip kol-span-wc {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 2px;
		border: 1px solid #626262;
	}
	:host {
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
	}`}),UT=Io.createTheme("zoll-v2",{GLOBAL:`
	kol-tooltip .area {
		background-color:#f2f2f2;
	}
	kol-tooltip #arrow {
		background-color: #626262;
	}
	kol-tooltip kol-span-wc {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 2px;
		border: 1px solid #626262;
	}
	:host {
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
			kol-tooltip .area {
				background-color: #f2f2f2;
			}
			kol-tooltip #arrow {
				background-color: #626262;
			}
			kol-tooltip kol-span-wc {
				padding: 0.25rem 0.5rem;
				font-size: 0.875rem;
				line-height: 1.25rem;
				border-radius: 2px;
				border: 1px solid #626262;
			}
			:host {
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
				gap: .25em;
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
			}`}),Lt.patchTheme("th",{GLOBAL:`
			kol-tooltip .area {
				background-color: #f2f2f2;
			}
			kol-tooltip #arrow {
				background-color: #626262;
			}
			kol-tooltip kol-span-wc {
				padding: 0.25rem 0.5rem;
				font-size: 0.875rem;
				line-height: 1.25rem;
				border-radius: 2px;
				border: 1px solid #626262;
			}
			/* https: //thueringen.de/styleguide/styleguide.063.20210902/?p=dokumentation-basiselemente */ /* @import url("https://fonts.cdnfonts.com/css/source-sans-pro"); */:host {--th-color-unknown: rgb(222, 0, 222);--th-color-blau-darker: rgb(0, 100, 140);--th-color-blau-dark: rgb(0, 118, 166);--th-color-blau: rgb(0, 137, 193);--th-color-blau-light: rgb(91, 179, 218);--th-color-blau-lighter: rgb(148, 200, 228);--th-color-blau-lightest: rgb(200, 224, 239);--th-color-grau-darker: rgb(136, 136, 136);--th-color-grau-dark: rgb(156, 156, 156);--th-color-grau: rgb(177, 177, 177);--th-color-grau-light: rgb(197, 197, 197);--th-color-grau-lighter: rgb(217, 217, 217);--th-color-grau-lightest: rgb(230, 230, 230);--th-color-black: black;--th-color-white: white;--th-color-rot-darker: rgb(152, 35, 15);--th-color-rot-dark: rgb(190, 44, 19);--th-color-rot: rgb(229, 53, 23);--th-color-rot-lightest: rgb(253, 214, 195);--th-color-orange-darker: rgb(115, 67, 0);--th-color-orange-dark: rgb(166, 97, 0);--th-color-orange: rgb(241, 140, 0);--th-color-orange-lightest: rgb(254, 228, 201);--th-color-dunkelgruen-darker: rgb(50, 100, 0);--th-color-dunkelgruen-dark: rgb(65, 128, 0);--th-color-dunkelgruen: rgb(106, 176, 35);--th-color-dunkelgruen-lightest: rgb(222, 239, 212);--th-color-hellgruen-dark: rgb(170, 170, 12);--th-color-hellgruen: rgb(201, 211, 14);--th-color-hellgruen-lightest: rgb(233, 240, 196);--th-color-gelb-dark: rgb(216, 174, 0);--th-color-gelb: rgb(255, 204, 0);--th-color-gelb-lightest: rgb(255, 236, 189);--th-color-hellgelb-dark: rgb(235, 200, 0);--th-color-hellgelb: rgb(255, 232, 0);--th-color-hellgelb-lightest: rgb(255, 247, 193);--th-font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial,sans-serif; /* https: //fonts.google.com/specimen/Source+Sans+Pro */--font-size: 16px;--th-hyphens: auto;--th-line-height: 1.5em;--th-spacing: 0.25em;}:host * {box-sizing: border-box;font-family: var(--th-font-family);}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6 {margin: 0;font-family: var(--th-font-family);}a,button {align-items: center;background-color: transparent;border: 0;color: black;cursor: pointer;display: inline-flex;gap: 0.25rem;justify-items: center;}input,option,select,summary,textarea {display: inline-block;}a,button,input,option,select,summary,textarea {-ms-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;letter-spacing: inherit;word-break: break-word;}*[tabindex]:focus,a:focus,button:focus,input:focus,select:focus,summary:focus,textarea:focus {cursor: pointer;outline-color: var(--th-color-blau);outline-offset: 2px;outline-style: solid;outline-width: 3px;transition: outline-offset 0.2s linear;}@keyframes spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}
			}`}),new Promise(e=>e())),{theme:{detect:"auto"}}).then(()=>{document.body.dataset.theme="itzbund"}).catch(()=>console.warn);const pn=ak(ES);pn.use(zo);pn.use(ew());pn.use(nE());pn.use(aE());rE({app:pn,router:zo});pn.mount("#app");export{m4 as $,I_ as A,H as B,t9 as C,vo as D,qe as E,Ce as F,o2 as G,yS as H,Bo as I,Oa as J,gS as K,El as L,vt as M,Ke as N,e9 as O,r9 as P,we as Q,ke as R,ab as S,Fe as T,mo as U,h2 as V,ZT as W,JT as X,ni as Y,Sl as Z,le as _,ne as a,xc as a0,_c as a1,u4 as a2,Ve as a3,b5 as a4,HT as a5,QT as a6,ao as a7,zn as a8,Bi as a9,Or as aa,ft as ab,vs as ac,Bx as ad,Ux as ae,Hx as af,Vx as ag,ki as ah,ch as ai,n9 as aj,yo as ak,Y5 as al,wh as am,Wx as an,mi as ao,kh as b,Pe as c,ae as d,Hm as e,X as f,p as g,S as h,Y as i,Xe as j,uS as k,F as l,re as m,no as n,A as o,ve as p,gc as q,dn as r,nt as s,ot as t,o9 as u,P as v,wl as w,ee as x,Jh as y,D_ as z};