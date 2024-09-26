/*!
 * KoliBri - The accessible HTML-Standard
 */
const t="kolibri";let e;let n;let s;let l=false;let o=false;let i=false;let f=false;const c=(t,e="")=>{{return()=>{}}};const r=(t,e)=>{{return()=>{}}};const u="r";const a="o";const $="s";const d="t";const h="s-id";const p="sty-id";const y="c-id";const m="{visibility:hidden}.hydrated{visibility:inherit}";const w="http://www.w3.org/1999/xlink";const b={};const g="http://www.w3.org/2000/svg";const v="http://www.w3.org/1999/xhtml";const k=t=>t!=null;const S=t=>{t=typeof t;return t==="object"||t==="function"};function j(t){var e,n,s;return(s=(n=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const x=(t,e,...n)=>{let s=null;let l=null;let o=null;let i=false;let f=false;const c=[];const r=e=>{for(let n=0;n<e.length;n++){s=e[n];if(Array.isArray(s)){r(s)}else if(s!=null&&typeof s!=="boolean"){if(i=typeof t!=="function"&&!S(s)){s=String(s)}if(i&&f){c[c.length-1].t+=s}else{c.push(i?O(null,s):s)}f=i}}};r(n);if(e){if(e.key){l=e.key}if(e.name){o=e.name}{const t=e.className||e.class;if(t){e.class=typeof t!=="object"?t:Object.keys(t).filter((e=>t[e])).join(" ")}}}if(typeof t==="function"){return t(e===null?{}:e,c,R)}const u=O(t,null);u.l=e;if(c.length>0){u.o=c}{u.i=l}{u.u=o}return u};const O=(t,e)=>{const n={$:0,h:t,t:e,p:null,o:null};{n.l=null}{n.i=null}{n.u=null}return n};const C={};const M=t=>t&&t.h===C;const R={forEach:(t,e)=>t.map(I).forEach(e),map:(t,e)=>t.map(I).map(e).map(P)};const I=t=>({vattrs:t.l,vchildren:t.o,vkey:t.i,vname:t.u,vtag:t.h,vtext:t.t});const P=t=>{if(typeof t.vtag==="function"){const e=Object.assign({},t.vattrs);if(t.vkey){e.key=t.vkey}if(t.vname){e.name=t.vname}return x(t.vtag,e,...t.vchildren||[])}const e=O(t.vtag,t.vtext);e.l=t.vattrs;e.o=t.vchildren;e.i=t.vkey;e.u=t.vname;return e};const T=(t,e,n,s)=>{const l=c("hydrateClient",e);const o=t.shadowRoot;const i=[];const f=[];const r=o?[]:null;const u=s.m=O(e,null);if(!_t.g){N(Vt.body,_t.g=new Map)}t[h]=n;t.removeAttribute(h);E(u,i,f,r,t,t,n);i.map((t=>{const n=t.v+"."+t.k;const s=_t.g.get(n);const l=t.p;if(s&&zt&&s["s-en"]===""){s.parentNode.insertBefore(l,s.nextSibling)}if(!o){l["s-hn"]=e;if(s){l["s-ol"]=s;l["s-ol"]["s-nr"]=l}}_t.g.delete(n)}));if(o){r.map((t=>{if(t){o.appendChild(t)}}))}l()};const E=(t,e,n,s,l,o,i)=>{let f;let c;let r;let a;if(o.nodeType===1){f=o.getAttribute(y);if(f){c=f.split(".");if(c[0]===i||c[0]==="0"){r={$:0,v:c[0],k:c[1],S:c[2],j:c[3],h:o.tagName.toLowerCase(),p:o,l:null,o:null,i:null,u:null,t:null};e.push(r);o.removeAttribute(y);if(!t.o){t.o=[]}t.o[r.j]=r;t=r;if(s&&r.S==="0"){s[r.j]=r.p}}}for(a=o.childNodes.length-1;a>=0;a--){E(t,e,n,s,l,o.childNodes[a],i)}if(o.shadowRoot){for(a=o.shadowRoot.childNodes.length-1;a>=0;a--){E(t,e,n,s,l,o.shadowRoot.childNodes[a],i)}}}else if(o.nodeType===8){c=o.nodeValue.split(".");if(c[1]===i||c[1]==="0"){f=c[0];r={$:0,v:c[1],k:c[2],S:c[3],j:c[4],p:o,l:null,o:null,i:null,u:null,h:null,t:null};if(f===d){r.p=o.nextSibling;if(r.p&&r.p.nodeType===3){r.t=r.p.textContent;e.push(r);o.remove();if(!t.o){t.o=[]}t.o[r.j]=r;if(s&&r.S==="0"){s[r.j]=r.p}}}else if(r.v===i){if(f===$){r.h="slot";if(c[5]){o["s-sn"]=r.u=c[5]}else{o["s-sn"]=""}o["s-sr"]=true;if(s){r.p=Vt.createElement(r.h);if(r.u){r.p.setAttribute("name",r.u)}o.parentNode.insertBefore(r.p,o);o.remove();if(r.S==="0"){s[r.j]=r.p}}n.push(r);if(!t.o){t.o=[]}t.o[r.j]=r}else if(f===u){if(s){o.remove()}else{l["s-cr"]=o;o["s-cn"]=true}}}}}else if(t&&t.h==="style"){const e=O(null,o.textContent);e.p=o;e.j="0";t.o=[e]}};const N=(t,e)=>{if(t.nodeType===1){let n=0;for(;n<t.childNodes.length;n++){N(t.childNodes[n],e)}if(t.shadowRoot){for(n=0;n<t.shadowRoot.childNodes.length;n++){N(t.shadowRoot.childNodes[n],e)}}}else if(t.nodeType===8){const n=t.nodeValue.split(".");if(n[0]===a){e.set(n[1]+"."+n[2],t);t.nodeValue="";t["s-en"]=n[3]}}};const U=t=>qt.map((e=>e(t))).find((t=>!!t));const F=t=>qt.push(t);const L=(t,e)=>{if(t!=null&&!S(t)){if(e&4){return t==="false"?false:t===""||!!t}if(e&2){return parseFloat(t)}if(e&1){return String(t)}return t}return t};const W=t=>Et(t).O;const A=(t,e,n)=>{const s=_t.ce(e,n);t.dispatchEvent(s);return s};const H=new WeakMap;const q=(t,e,n)=>{let s=Ht.get(t);if(Gt&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=e}else{s.replaceSync(e)}}else{s=e}Ht.set(t,s)};const D=(t,e,n)=>{var s;const l=_(e,n);const o=Ht.get(l);t=t.nodeType===11?t:Vt;if(o){if(typeof o==="string"){t=t.head||t;let e=H.get(t);let n;if(!e){H.set(t,e=new Set)}if(!e.has(l)){if(t.host&&(n=t.querySelector(`[${p}="${l}"]`))){n.innerHTML=o}else{n=Vt.createElement("style");n.innerHTML=o;const e=(s=_t.C)!==null&&s!==void 0?s:j(Vt);if(e!=null){n.setAttribute("nonce",e)}t.insertBefore(n,t.querySelector("link"))}if(e){e.add(l)}}}else if(!t.adoptedStyleSheets.includes(o)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]}}return l};const V=t=>{const e=t.M;const n=t.O;const s=e.$;const l=c("attachStyles",e.R);const o=D(n.shadowRoot?n.shadowRoot:n.getRootNode(),e,t.I);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h")}l()};const _=(t,e)=>"sc-"+(e&&t.$&32?t.R+"-"+e:t.R);const z=t=>t.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{");const B=(t,e,n,s,l,o)=>{if(n!==s){let i=Ft(t,e);let f=e.toLowerCase();if(e==="class"){const e=t.classList;const l=J(n);const o=J(s);e.remove(...l.filter((t=>t&&!o.includes(t))));e.add(...o.filter((t=>t&&!l.includes(t))))}else if(e==="style"){{for(const e in n){if(!s||s[e]==null){if(e.includes("-")){t.style.removeProperty(e)}else{t.style[e]=""}}}}for(const e in s){if(!n||s[e]!==n[e]){if(e.includes("-")){t.style.setProperty(e,s[e])}else{t.style[e]=s[e]}}}}else if(e==="key");else if(e==="ref"){if(s){s(t)}}else if(!i&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(Ft(Dt,f)){e=f.slice(2)}else{e=f[2]+e.slice(3)}if(n){_t.rel(t,e,n,false)}if(s){_t.ael(t,e,s,false)}}else{const c=S(s);if((i||c&&s!==null)&&!l){try{if(!t.tagName.includes("-")){const l=s==null?"":s;if(e==="list"){i=false}else if(n==null||t[e]!=l){t[e]=l}}else{t[e]=s}}catch(t){}}let r=false;{if(f!==(f=f.replace(/^xlink\:?/,""))){e=f;r=true}}if(s==null||s===false){if(s!==false||t.getAttribute(e)===""){if(r){t.removeAttributeNS(w,e)}else{t.removeAttribute(e)}}}else if((!i||o&4||l)&&!c){s=s===true?"":s;if(r){t.setAttributeNS(w,e,s)}else{t.setAttribute(e,s)}}}}};const G=/\s/;const J=t=>!t?[]:t.split(G);const K=(t,e,n,s)=>{const l=e.p.nodeType===11&&e.p.host?e.p.host:e.p;const o=t&&t.l||b;const i=e.l||b;{for(s in o){if(!(s in i)){B(l,s,o[s],undefined,n,e.$)}}}for(s in i){B(l,s,o[s],i[s],n,e.$)}};const Q=(t,o,c,r)=>{const u=o.o[c];let a=0;let $;let d;let h;if(!l){i=true;if(u.h==="slot"){if(e){r.classList.add(e+"-s")}u.$|=u.o?2:1}}if(u.t!==null){$=u.p=Vt.createTextNode(u.t)}else if(u.$&1){$=u.p=Vt.createTextNode("")}else{if(!f){f=u.h==="svg"}$=u.p=Vt.createElementNS(f?g:v,u.$&2?"slot-fb":u.h);if(f&&u.h==="foreignObject"){f=false}{K(null,u,f)}if(k(e)&&$["s-si"]!==e){$.classList.add($["s-si"]=e)}if(u.o){for(a=0;a<u.o.length;++a){d=Q(t,u,a,$);if(d){$.appendChild(d)}}}{if(u.h==="svg"){f=false}else if($.tagName==="foreignObject"){f=true}}}{$["s-hn"]=s;if(u.$&(2|1)){$["s-sr"]=true;$["s-cr"]=n;$["s-sn"]=u.u||"";h=t&&t.o&&t.o[c];if(h&&h.h===u.h&&t.p){X(t.p,false)}}}return $};const X=(t,e)=>{_t.$|=1;const n=t.childNodes;for(let t=n.length-1;t>=0;t--){const l=n[t];if(l["s-hn"]!==s&&l["s-ol"]){st(l).insertBefore(l,nt(l));l["s-ol"].remove();l["s-ol"]=undefined;i=true}if(e){X(l,e)}}_t.$&=~1};const Y=(t,e,n,l,o,i)=>{let f=t["s-cr"]&&t["s-cr"].parentNode||t;let c;if(f.shadowRoot&&f.tagName===s){f=f.shadowRoot}for(;o<=i;++o){if(l[o]){c=Q(null,n,o,t);if(c){l[o].p=c;f.insertBefore(c,nt(e))}}}};const Z=(t,e,n)=>{for(let s=e;s<=n;++s){const e=t[s];if(e){const t=e.p;rt(e);if(t){{o=true;if(t["s-ol"]){t["s-ol"].remove()}else{X(t,true)}}t.remove()}}}};const tt=(t,e,n,s)=>{let l=0;let o=0;let i=0;let f=0;let c=e.length-1;let r=e[0];let u=e[c];let a=s.length-1;let $=s[0];let d=s[a];let h;let p;while(l<=c&&o<=a){if(r==null){r=e[++l]}else if(u==null){u=e[--c]}else if($==null){$=s[++o]}else if(d==null){d=s[--a]}else if(et(r,$)){lt(r,$);r=e[++l];$=s[++o]}else if(et(u,d)){lt(u,d);u=e[--c];d=s[--a]}else if(et(r,d)){if(r.h==="slot"||d.h==="slot"){X(r.p.parentNode,false)}lt(r,d);t.insertBefore(r.p,u.p.nextSibling);r=e[++l];d=s[--a]}else if(et(u,$)){if(r.h==="slot"||d.h==="slot"){X(u.p.parentNode,false)}lt(u,$);t.insertBefore(u.p,r.p);u=e[--c];$=s[++o]}else{i=-1;{for(f=l;f<=c;++f){if(e[f]&&e[f].i!==null&&e[f].i===$.i){i=f;break}}}if(i>=0){p=e[i];if(p.h!==$.h){h=Q(e&&e[o],n,i,t)}else{lt(p,$);e[i]=undefined;h=p.p}$=s[++o]}else{h=Q(e&&e[o],n,o,t);$=s[++o]}if(h){{st(r.p).insertBefore(h,nt(r.p))}}}}if(l>c){Y(t,s[a+1]==null?null:s[a+1].p,n,s,o,a)}else if(o>a){Z(e,l,c)}};const et=(t,e)=>{if(t.h===e.h){if(t.h==="slot"){return t.u===e.u}{return t.i===e.i}}return false};const nt=t=>t&&t["s-ol"]||t;const st=t=>(t["s-ol"]?t["s-ol"]:t).parentNode;const lt=(t,e)=>{const n=e.p=t.p;const s=t.o;const l=e.o;const o=e.h;const i=e.t;let c;if(i===null){{f=o==="svg"?true:o==="foreignObject"?false:f}{if(o==="slot");else{K(t,e,f)}}if(s!==null&&l!==null){tt(n,s,e,l)}else if(l!==null){if(t.t!==null){n.textContent=""}Y(n,null,e,l,0,l.length-1)}else if(s!==null){Z(s,0,s.length-1)}if(f&&o==="svg"){f=false}}else if(c=n["s-cr"]){c.parentNode.textContent=i}else if(t.t!==i){n.data=i}};const ot=t=>{const e=t.childNodes;let n;let s;let l;let o;let i;let f;for(s=0,l=e.length;s<l;s++){n=e[s];if(n.nodeType===1){if(n["s-sr"]){i=n["s-sn"];n.hidden=false;for(o=0;o<l;o++){f=e[o].nodeType;if(e[o]["s-hn"]!==n["s-hn"]||i!==""){if(f===1&&i===e[o].getAttribute("slot")){n.hidden=true;break}}else{if(f===1||f===3&&e[o].textContent.trim()!==""){n.hidden=true;break}}}}ot(n)}}};const it=[];const ft=t=>{let e;let n;let s;let l;let i;let f;let c=0;const r=t.childNodes;const u=r.length;for(;c<u;c++){e=r[c];if(e["s-sr"]&&(n=e["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;l=e["s-sn"];for(f=s.length-1;f>=0;f--){n=s[f];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==e["s-hn"]){if(ct(n,l)){i=it.find((t=>t.P===n));o=true;n["s-sn"]=n["s-sn"]||l;if(i){i.T=e}else{it.push({T:e,P:n})}if(n["s-sr"]){it.map((t=>{if(ct(t.P,n["s-sn"])){i=it.find((t=>t.P===n));if(i&&!t.T){t.T=i.T}}}))}}else if(!it.some((t=>t.P===n))){it.push({P:n})}}}}if(e.nodeType===1){ft(e)}}};const ct=(t,e)=>{if(t.nodeType===1){if(t.getAttribute("slot")===null&&e===""){return true}if(t.getAttribute("slot")===e){return true}return false}if(t["s-sn"]===e){return true}return e===""};const rt=t=>{{t.l&&t.l.ref&&t.l.ref(null);t.o&&t.o.map(rt)}};const ut=(t,f)=>{const c=t.O;const r=t.M;const u=t.m||O(null,null);const a=M(f)?f:x(null,null,f);s=c.tagName;if(r.N){a.l=a.l||{};r.N.map((([t,e])=>a.l[e]=c[t]))}a.h=null;a.$|=4;t.m=a;a.p=u.p=c.shadowRoot||c;{e=c["s-sc"]}{n=c["s-cr"];l=(r.$&1)!==0;o=false}lt(u,a);{_t.$|=1;if(i){ft(a.p);let t;let e;let n;let s;let l;let o;let i=0;for(;i<it.length;i++){t=it[i];e=t.P;if(!e["s-ol"]){n=Vt.createTextNode("");n["s-nr"]=e;e.parentNode.insertBefore(e["s-ol"]=n,e)}}for(i=0;i<it.length;i++){t=it[i];e=t.P;if(t.T){s=t.T.parentNode;l=t.T.nextSibling;n=e["s-ol"];while(n=n.previousSibling){o=n["s-nr"];if(o&&o["s-sn"]===e["s-sn"]&&s===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&s!==e.parentNode||e.nextSibling!==l){if(e!==l){if(!e["s-hn"]&&e["s-ol"]){e["s-hn"]=e["s-ol"].parentNode.nodeName}s.insertBefore(e,l)}}}else{if(e.nodeType===1){e.hidden=true}}}}if(o){ot(a.p)}_t.$&=~1;it.length=0}};const at=(t,e)=>{if(e&&!t.U&&e["s-p"]){e["s-p"].push(new Promise((e=>t.U=e)))}};const $t=(t,e)=>{if(t.$&4){t.$|=512;return}at(t,t.F);const n=()=>dt(t,e);return n()};const dt=(t,e)=>{const n=c("scheduleUpdate",t.M.R);const s=t.L;let l;if(e){{l=gt(s,"componentWillLoad")}}n();return ht(l,(()=>yt(t,s,e)))};const ht=(t,e)=>pt(t)?t.then(e):e();const pt=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const yt=async(t,e,n)=>{var s;const l=t.O;const o=c("update",t.M.R);const i=l["s-rc"];if(n){V(t)}const f=c("render",t.M.R);{mt(t,e)}if(i){i.map((t=>t()));l["s-rc"]=undefined}f();o();{const e=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>wt(t);if(e.length===0){n()}else{Promise.all(e).then(n);t.$|=4;e.length=0}}};const mt=(t,e,n)=>{try{e=e.render();{t.$|=2}{{{ut(t,e)}}}}catch(e){Lt(e,t.O)}return null};const wt=t=>{const e=t.M.R;const n=t.O;const s=c("postUpdate",e);const l=t.L;const o=t.F;{gt(l,"componentDidRender")}if(!(t.$&64)){t.$|=64;{vt(n)}s();{t.W(n);if(!o){bt()}}}else{s()}{if(t.U){t.U();t.U=undefined}if(t.$&512){Jt((()=>$t(t,false)))}t.$&=~(4|512)}};const bt=e=>{{vt(Vt.documentElement)}Jt((()=>A(Dt,"appload",{detail:{namespace:t}})))};const gt=(t,e,n)=>{if(t&&t[e]){try{return t[e](n)}catch(t){Lt(t)}}return undefined};const vt=t=>t.classList.add("hydrated");const kt=(t,e)=>Et(t).A.get(e);const St=(t,e,n,s)=>{const l=Et(t);const o=l.O;const i=l.A.get(e);const f=l.$;const c=l.L;n=L(n,s.H[e][0]);const r=Number.isNaN(i)&&Number.isNaN(n);const u=n!==i&&!r;if((!(f&8)||i===undefined)&&u){l.A.set(e,n);if(c){if(s.q&&f&128){const t=s.q[e];if(t){t.map((t=>{try{c[t](n,i,e)}catch(t){Lt(t,o)}}))}}if((f&(2|16))===2){$t(l,false)}}}};const jt=(t,e,n)=>{if(e.H){if(t.watchers){e.q=t.watchers}const s=Object.entries(e.H);const l=t.prototype;s.map((([t,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,t,{get(){return kt(this,t)},set(n){St(this,t,n,e)},configurable:true,enumerable:true})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(t,e,s){_t.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(l.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,e])=>e[0]&15)).map((([t,s])=>{const l=s[1]||t;n.set(l,t);if(s[0]&512){e.N.push([t,l])}return l}))}}return t};const xt=async(t,e,n,s,l)=>{if((e.$&32)===0){e.$|=32;{l=At(n);if(l.then){const t=r();l=await l;t()}if(!l.isProxied){{n.q=l.watchers}jt(l,n,2);l.isProxied=true}const t=c("createInstance",n.R);{e.$|=8}try{new l(e)}catch(t){Lt(t)}{e.$&=~8}{e.$|=128}t()}if(l.style){let s=l.style;if(typeof s!=="string"){s=s[e.I=U(t)]}const o=_(n,e.I);if(!Ht.has(o)){const t=c("registerStyles",n.R);q(o,s,!!(n.$&1));t()}}}const o=e.F;const i=()=>$t(e,true);if(o&&o["s-rc"]){o["s-rc"].push(i)}else{i()}};const Ot=t=>{if((_t.$&1)===0){const e=Et(t);const n=e.M;const s=c("connectedCallback",n.R);if(!(e.$&1)){e.$|=1;let s;{s=t.getAttribute(h);if(s){if(n.$&1){const e=D(t.shadowRoot,n,t.getAttribute("s-mode"));t.classList.remove(e+"-h",e+"-s")}T(t,n.R,s,e)}}if(!s){if(n.$&(4|8)){Ct(t)}}{let n=t;while(n=n.parentNode||n.host){if(n.nodeType===1&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){at(e,e.F=n);break}}}if(n.H){Object.entries(n.H).map((([e,[n]])=>{if(n&31&&t.hasOwnProperty(e)){const n=t[e];delete t[e];t[e]=n}}))}{xt(t,e,n)}}s()}};const Ct=t=>{const e=t["s-cr"]=Vt.createComment("");e["s-cn"]=true;t.insertBefore(e,t.firstChild)};const Mt=t=>{if((_t.$&1)===0){const e=Et(t);const n=e.L;{gt(n,"disconnectedCallback")}}};const Rt=(t,e={})=>{var n;const s=c();const l=[];const o=e.exclude||[];const i=Dt.customElements;const f=Vt.head;const r=f.querySelector("meta[charset]");const u=Vt.createElement("style");const a=[];const $=Vt.querySelectorAll(`[${p}]`);let d;let h=true;let y=0;Object.assign(_t,e);_t.D=new URL(e.resourcesUrl||"./",Vt.baseURI).href;{_t.$|=2}{for(;y<$.length;y++){q($[y].getAttribute(p),z($[y].innerHTML),true)}}t.map((t=>{t[1].map((e=>{const n={$:e[0],R:e[1],H:e[2],V:e[3]};{n.H=e[2]}{n.N=[]}{n.q={}}const s=n.R;const f=class extends HTMLElement{constructor(t){super(t);t=this;Ut(t,n);if(n.$&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(d){clearTimeout(d);d=null}if(h){a.push(this)}else{_t.jmp((()=>Ot(this)))}}disconnectedCallback(){_t.jmp((()=>Mt(this)))}componentOnReady(){return Et(this)._}};n.B=t[0];if(!o.includes(s)&&!i.get(s)){l.push(s);i.define(s,jt(f,n,1))}}))}));{u.innerHTML=l+m;u.setAttribute("data-styles","");const t=(n=_t.C)!==null&&n!==void 0?n:j(Vt);if(t!=null){u.setAttribute("nonce",t)}f.insertBefore(u,r?r.nextSibling:f.firstChild)}h=false;if(a.length){a.map((t=>t.connectedCallback()))}else{{_t.jmp((()=>d=setTimeout(bt,30)))}}s()};const It=(t,e)=>e;const Pt=t=>_t.C=t;const Tt=new WeakMap;const Et=t=>Tt.get(t);const Nt=(t,e)=>Tt.set(e.L=t,e);const Ut=(t,e)=>{const n={$:0,O:t,M:e,A:new Map};{n._=new Promise((t=>n.W=t));t["s-p"]=[];t["s-rc"]=[]}return Tt.set(t,n)};const Ft=(t,e)=>e in t;const Lt=(t,e)=>(0,console.error)(t,e);const Wt=new Map;const At=(t,e,n)=>{const s=t.R.replace(/-/g,"_");const l=t.B;const o=Wt.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((t=>{{Wt.set(l,t)}return t[s]}),Lt)};const Ht=new Map;const qt=[];const Dt=typeof window!=="undefined"?window:{};const Vt=Dt.document||{head:{}};const _t={$:0,D:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)};const zt=true;const Bt=t=>Promise.resolve(t);const Gt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const Jt=t=>Bt().then(t);export{It as F,C as H,F as a,Rt as b,W as g,x as h,Bt as p,Nt as r,Pt as s};
//# sourceMappingURL=index-330c31f9.js.map