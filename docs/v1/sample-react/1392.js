/*! For license information please see 1392.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1392],{5175:(t,e,n)=>{n.d(e,{v:()=>i});var o=n(9672);const i=(t,e)=>{(0,o.v)(t,"_align",e)}},9672:(t,e,n)=>{n.d(e,{v:()=>r});var o=n(8126);const i=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),r=(t,e,n)=>{(0,o.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),i,n,{defaultValue:"top"})}},1374:(t,e,n)=>{n.d(e,{a:()=>xt,b:()=>ht,c:()=>vt,f:()=>gt,o:()=>W,s:()=>yt});var o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&f(t,n,e[n]);if(l)for(var n of l(e))s.call(e,n)&&f(t,n,e[n]);return t},u=(t,e)=>i(t,r(e)),d=(t,e)=>{var n={};for(var o in t)c.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&l)for(var o of l(t))e.indexOf(o)<0&&s.call(t,o)&&(n[o]=t[o]);return n},m=(t,e,n)=>new Promise(((o,i)=>{var r=t=>{try{c(n.next(t))}catch(t){i(t)}},l=t=>{try{c(n.throw(t))}catch(t){i(t)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(r,l);c((n=n.apply(t,e)).next())}));const p=Math.min,h=Math.max,y=Math.round,g=Math.floor,x=t=>({x:t,y:t}),v={left:"right",right:"left",bottom:"top",top:"bottom"},w={start:"end",end:"start"};function b(t,e,n){return h(t,p(e,n))}function R(t,e){return"function"==typeof t?t(e):t}function E(t){return t.split("-")[0]}function O(t){return t.split("-")[1]}function T(t){return"x"===t?"y":"x"}function L(t){return"y"===t?"height":"width"}function A(t){return["top","bottom"].includes(E(t))?"y":"x"}function P(t){return T(A(t))}function S(t){return t.replace(/start|end/g,(t=>w[t]))}function D(t){return t.replace(/left|right|bottom|top/g,(t=>v[t]))}function k(t){return"number"!=typeof t?function(t){return a({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function C(t){return u(a({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function F(t,e,n){let{reference:o,floating:i}=t;const r=A(e),l=P(e),c=L(l),s=E(e),f="y"===r,a=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,d=o[c]/2-i[c]/2;let m;switch(s){case"top":m={x:a,y:o.y-i.height};break;case"bottom":m={x:a,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:u};break;case"left":m={x:o.x-i.width,y:u};break;default:m={x:o.x,y:o.y}}switch(O(e)){case"start":m[l]-=d*(n&&f?-1:1);break;case"end":m[l]+=d*(n&&f?-1:1)}return m}function H(t,e){return m(this,null,(function*(){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:p=!1,padding:h=0}=R(e,t),y=k(h),g=c[p?"floating"===m?"reference":"floating":m],x=C(yield r.getClippingRect({element:null==(n=yield null==r.isElement?void 0:r.isElement(g))||n?g:g.contextElement||(yield null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:s})),v="floating"===m?u(a({},l.floating),{x:o,y:i}):l.reference,w=yield null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating),b=(yield null==r.isElement?void 0:r.isElement(w))&&(yield null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},E=C(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:w,strategy:s}):v);return{top:(x.top-E.top+y.top)/b.y,bottom:(E.bottom-x.bottom+y.bottom)/b.y,left:(x.left-E.left+y.left)/b.x,right:(E.right-x.right+y.right)/b.x}}))}const W=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn(e){return m(this,null,(function*(){var n,o;const{x:i,y:r,placement:l,middlewareData:c}=e,s=yield function(t,e){return m(this,null,(function*(){const{placement:n,platform:o,elements:i}=t,r=yield null==o.isRTL?void 0:o.isRTL(i.floating),l=E(n),c=O(n),s="y"===A(n),f=["left","top"].includes(l)?-1:1,u=r&&s?-1:1,d=R(e,t);let{mainAxis:m,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:a({mainAxis:0,crossAxis:0,alignmentAxis:null},d);return c&&"number"==typeof h&&(p="end"===c?-1*h:h),s?{x:p*u,y:m*f}:{x:m*f,y:p*u}}))}(e,t);return l===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+s.x,y:r+s.y,data:u(a({},s),{placement:l})}}))}}};function _(t){return M(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function B(t){var e;return null==(e=(M(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function M(t){return t instanceof Node||t instanceof V(t).Node}function j(t){return t instanceof Element||t instanceof V(t).Element}function z(t){return t instanceof HTMLElement||t instanceof V(t).HTMLElement}function N(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof V(t).ShadowRoot)}function I(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=G(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function q(t){return["table","td","th"].includes(_(t))}function X(t){const e=Y(),n=G(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function Y(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function $(t){return["html","body","#document"].includes(_(t))}function G(t){return V(t).getComputedStyle(t)}function J(t){return j(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function K(t){if("html"===_(t))return t;const e=t.assignedSlot||t.parentNode||N(t)&&t.host||B(t);return N(e)?e.host:e}function Q(t){const e=K(t);return $(e)?t.ownerDocument?t.ownerDocument.body:t.body:z(e)&&I(e)?e:Q(e)}function U(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=Q(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=V(i);return r?e.concat(l,l.visualViewport||[],I(i)?i:[],l.frameElement&&n?U(l.frameElement):[]):e.concat(i,U(i,[],n))}function Z(t){const e=G(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=z(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,c=y(n)!==r||y(o)!==l;return c&&(n=r,o=l),{width:n,height:o,$:c}}function tt(t){return j(t)?t:t.contextElement}function et(t){const e=tt(t);if(!z(e))return x(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Z(e);let l=(r?y(n.width):n.width)/o,c=(r?y(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const nt=x(0);function ot(t){const e=V(t);return Y()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:nt}function it(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=tt(t);let l=x(1);e&&(o?j(o)&&(l=et(o)):l=et(t));const c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==V(t))&&e}(r,n,o)?ot(r):x(0);let s=(i.left+c.x)/l.x,f=(i.top+c.y)/l.y,a=i.width/l.x,u=i.height/l.y;if(r){const t=V(r),e=o&&j(o)?V(o):o;let n=t,i=n.frameElement;for(;i&&o&&e!==n;){const t=et(i),e=i.getBoundingClientRect(),o=G(i),r=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;s*=t.x,f*=t.y,a*=t.x,u*=t.y,s+=r,f+=l,n=V(i),i=n.frameElement}}return C({width:a,height:u,x:s,y:f})}const rt=[":popover-open",":modal"];function lt(t){return rt.some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function ct(t){return it(B(t)).left+J(t).scrollLeft}function st(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=V(t),o=B(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=Y();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n);else if("document"===e)o=function(t){const e=B(t),n=J(t),o=t.ownerDocument.body,i=h(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=h(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+ct(t);const c=-n.scrollTop;return"rtl"===G(o).direction&&(l+=h(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:c}}(B(t));else if(j(e))o=function(t,e){const n=it(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=z(t)?et(t):x(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=ot(t);o=u(a({},e),{x:e.x-n.x,y:e.y-n.y})}return C(o)}function ft(t,e){const n=K(t);return!(n===e||!j(n)||$(n))&&("fixed"===G(n).position||ft(n,e))}function at(t,e){const n=e.get(t);if(n)return n;let o=U(t,[],!1).filter((t=>j(t)&&"body"!==_(t))),i=null;const r="fixed"===G(t).position;let l=r?K(t):t;for(;j(l)&&!$(l);){const e=G(l),n=X(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||I(l)&&!n&&ft(t,l))?o=o.filter((t=>t!==l)):i=e,l=K(l)}return e.set(t,o),o}function ut(t,e,n){const o=z(e),i=B(e),r="fixed"===n,l=it(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const s=x(0);if(o||!o&&!r)if(("body"!==_(e)||I(i))&&(c=J(e)),o){const t=it(e,!0,r,e);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=ct(i));return{x:l.left+c.scrollLeft-s.x,y:l.top+c.scrollTop-s.y,width:l.width,height:l.height}}function dt(t,e){return z(t)&&"fixed"!==G(t).position?e?e(t):t.offsetParent:null}function mt(t,e){const n=V(t);if(!z(t)||lt(t))return n;let o=dt(t,e);for(;o&&q(o)&&"static"===G(o).position;)o=dt(o,e);return o&&("html"===_(o)||"body"===_(o)&&"static"===G(o).position&&!X(o))?n:o||function(t){let e=K(t);for(;z(e)&&!$(e);){if(X(e))return e;e=K(e)}return null}(t)||n}const pt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r="fixed"===i,l=B(o),c=!!e&&lt(e.floating);if(o===l||c&&r)return n;let s={scrollLeft:0,scrollTop:0},f=x(1);const a=x(0),u=z(o);if((u||!u&&!r)&&(("body"!==_(o)||I(l))&&(s=J(o)),z(o))){const t=it(o);f=et(o),a.x=t.x+o.clientLeft,a.y=t.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-s.scrollLeft*f.x+a.x,y:n.y*f.y-s.scrollTop*f.y+a.y}},getDocumentElement:B,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?at(e,this._c):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=st(e,n,i);return t.top=h(o.top,t.top),t.right=p(o.right,t.right),t.bottom=p(o.bottom,t.bottom),t.left=h(o.left,t.left),t}),st(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:mt,getElementRects:function(t){return m(this,null,(function*(){const e=this.getOffsetParent||mt,n=this.getDimensions;return{reference:ut(t.reference,yield e(t.floating),t.strategy),floating:a({x:0,y:0},yield n(t.floating))}}))},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=Z(t);return{width:e,height:n}},getScale:et,isElement:j,isRTL:function(t){return"rtl"===G(t).direction}};function ht(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,f=tt(t),d=i||r?[...f?U(f):[],...U(e)]:[];d.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const m=f&&c?function(t,e){let n,o=null;const i=B(t);function r(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function l(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),r();const{left:f,top:d,width:m,height:y}=t.getBoundingClientRect();if(c||e(),!m||!y)return;const x={rootMargin:-g(d)+"px "+-g(i.clientWidth-(f+m))+"px "+-g(i.clientHeight-(d+y))+"px "+-g(f)+"px",threshold:h(0,p(1,s))||1};let v=!0;function w(t){const e=t[0].intersectionRatio;if(e!==s){if(!v)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}v=!1}try{o=new IntersectionObserver(w,u(a({},x),{root:i.ownerDocument}))}catch(t){o=new IntersectionObserver(w,x)}o.observe(t)}(!0),r}(f,n):null;let y,x=-1,v=null;l&&(v=new ResizeObserver((t=>{let[o]=t;o&&o.target===f&&v&&(v.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame((()=>{var t;null==(t=v)||t.observe(e)}))),n()})),f&&!s&&v.observe(f),v.observe(e));let w=s?it(t):null;return s&&function e(){const o=it(t);!w||o.x===w.x&&o.y===w.y&&o.width===w.width&&o.height===w.height||n(),w=o,y=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==m||m(),null==(t=v)||t.disconnect(),v=null,s&&cancelAnimationFrame(y)}}const yt=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn(e){return m(this,null,(function*(){const{x:n,y:o,placement:i}=e,r=R(t,e),{mainAxis:l=!0,crossAxis:c=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}}}=r,f=d(r,["mainAxis","crossAxis","limiter"]),m={x:n,y:o},p=yield H(e,f),h=A(E(i)),y=T(h);let g=m[y],x=m[h];if(l){const t="y"===y?"bottom":"right";g=b(g+p["y"===y?"top":"left"],g,g-p[t])}if(c){const t="y"===h?"bottom":"right";x=b(x+p["y"===h?"top":"left"],x,x-p[t])}const v=s.fn(u(a({},e),{[y]:g,[h]:x}));return u(a({},v),{data:{x:v.x-n,y:v.y-o}})}))}}},gt=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn(e){return m(this,null,(function*(){var n,o;const{placement:i,middlewareData:r,rects:l,initialPlacement:c,platform:s,elements:f}=e,a=R(t,e),{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:g=!0}=a,x=d(a,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const v=E(i),w=E(c)===c,b=yield null==s.isRTL?void 0:s.isRTL(f.floating),T=p||(w||!g?[D(c)]:function(t){const e=D(t);return[S(t),e,S(e)]}(c));p||"none"===y||T.push(...function(t,e,n,o){const i=O(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(E(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(S)))),r}(c,g,y,b));const A=[c,...T],k=yield H(e,x),C=[];let F=(null==(o=r.flip)?void 0:o.overflows)||[];if(u&&C.push(k[v]),m){const t=function(t,e,n){void 0===n&&(n=!1);const o=O(t),i=P(t),r=L(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=D(l)),[l,D(l)]}(i,l,b);C.push(k[t[0]],k[t[1]])}if(F=[...F,{placement:i,overflows:C}],!C.every((t=>t<=0))){var W,_;const t=((null==(W=r.flip)?void 0:W.index)||0)+1,e=A[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(_=F.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:_.placement;if(!n)switch(h){case"bestFit":{var V;const t=null==(V=F.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:V[0];t&&(n=t);break}case"initialPlacement":n=c}if(i!==n)return{reset:{placement:n}}}return{}}))}}},xt=t=>({name:"arrow",options:t,fn(e){return m(this,null,(function*(){const{x:n,y:o,placement:i,rects:r,platform:l,elements:c,middlewareData:s}=e,{element:f,padding:u=0}=R(t,e)||{};if(null==f)return{};const d=k(u),m={x:n,y:o},h=P(i),y=L(h),g=yield l.getDimensions(f),x="y"===h,v=x?"top":"left",w=x?"bottom":"right",E=x?"clientHeight":"clientWidth",T=r.reference[y]+r.reference[h]-m[h]-r.floating[y],A=m[h]-r.reference[h],S=yield null==l.getOffsetParent?void 0:l.getOffsetParent(f);let D=S?S[E]:0;D&&(yield null==l.isElement?void 0:l.isElement(S))||(D=c.floating[E]||r.floating[y]);const C=T/2-A/2,F=D/2-g[y]/2-1,H=p(d[v],F),W=p(d[w],F),_=H,V=D-g[y]-W,B=D/2-g[y]/2+C,M=b(_,B,V),j=!s.arrow&&null!=O(i)&&B!==M&&r.reference[y]/2-(B<_?H:W)-g[y]/2<0,z=j?B<_?B-_:B-V:0;return{[h]:m[h]+z,data:a({[h]:M,centerOffset:B-M-z},j&&{alignmentOffset:z}),reset:j}}))}}),vt=(t,e,n)=>{const o=new Map,i=a({platform:pt},n),r=u(a({},i.platform),{_c:o});return((t,e,n)=>m(void 0,null,(function*(){const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=yield null==l.isRTL?void 0:l.isRTL(e);let f=yield l.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:m}=F(f,o,s),p=o,h={},y=0;for(let n=0;n<c.length;n++){const{name:r,fn:g}=c[n],{x,y:v,data:w,reset:b}=yield g({x:d,y:m,initialPlacement:o,placement:p,strategy:i,middlewareData:h,rects:f,platform:l,elements:{reference:t,floating:e}});d=null!=x?x:d,m=null!=v?v:m,h=u(a({},h),{[r]:a(a({},h[r]),w)}),b&&y<=50&&(y++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(f=!0===b.rects?yield l.getElementRects({reference:t,floating:e,strategy:i}):b.rects),({x:d,y:m}=F(f,p,s))),n=-1)}return{x:d,y:m,placement:p,strategy:i,middlewareData:h}})))(t,e,u(a({},i),{platform:r}))}}}]);