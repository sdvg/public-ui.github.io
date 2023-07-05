/*! For license information please see 2757.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[2757],{72757:(t,e,n)=>{n.d(e,{a:()=>O,b:()=>yt,c:()=>gt,f:()=>D,o:()=>C,s:()=>F});var o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&f(t,n,e[n]);if(l)for(var n of l(e))s.call(e,n)&&f(t,n,e[n]);return t},u=(t,e)=>i(t,r(e)),d=(t,e)=>{var n={};for(var o in t)c.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&l)for(var o of l(t))e.indexOf(o)<0&&s.call(t,o)&&(n[o]=t[o]);return n},p=(t,e,n)=>new Promise(((o,i)=>{var r=t=>{try{c(n.next(t))}catch(t){i(t)}},l=t=>{try{c(n.throw(t))}catch(t){i(t)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(r,l);c((n=n.apply(t,e)).next())}));function m(t){return t.split("-")[1]}function h(t){return"y"===t?"height":"width"}function y(t){return t.split("-")[0]}function g(t){return["top","bottom"].includes(y(t))?"x":"y"}function x(t,e,n){let{reference:o,floating:i}=t;const r=o.x+o.width/2-i.width/2,l=o.y+o.height/2-i.height/2,c=g(e),s=h(c),f=o[s]/2-i[s]/2,a="x"===c;let u;switch(y(e)){case"top":u={x:r,y:o.y-i.height};break;case"bottom":u={x:r,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:l};break;case"left":u={x:o.x-i.width,y:l};break;default:u={x:o.x,y:o.y}}switch(m(e)){case"start":u[c]-=f*(n&&a?-1:1);break;case"end":u[c]+=f*(n&&a?-1:1)}return u}function v(t,e){return"function"==typeof t?t(e):t}function b(t){return"number"!=typeof t?function(t){return a({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function w(t){return u(a({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function R(t,e){return p(this,null,(function*(){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:m=!1,padding:h=0}=v(e,t),y=b(h),g=c[m?"floating"===p?"reference":"floating":p],x=w(yield r.getClippingRect({element:null==(n=yield null==r.isElement?void 0:r.isElement(g))||n?g:g.contextElement||(yield null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:s})),R="floating"===p?u(a({},l.floating),{x:o,y:i}):l.reference,T=yield null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating),L=(yield null==r.isElement?void 0:r.isElement(T))&&(yield null==r.getScale?void 0:r.getScale(T))||{x:1,y:1},A=w(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:R,offsetParent:T,strategy:s}):R);return{top:(x.top-A.top+y.top)/L.y,bottom:(A.bottom-x.bottom+y.bottom)/L.y,left:(x.left-A.left+y.left)/L.x,right:(A.right-x.right+y.right)/L.x}}))}const T=Math.min,L=Math.max;function A(t,e,n){return L(t,T(e,n))}const O=t=>({name:"arrow",options:t,fn(e){return p(this,null,(function*(){const{x:n,y:o,placement:i,rects:r,platform:l,elements:c}=e,{element:s,padding:f=0}=v(t,e)||{};if(null==s)return{};const a=b(f),u={x:n,y:o},d=g(i),p=h(d),y=yield l.getDimensions(s),x="y"===d,w=x?"top":"left",R=x?"bottom":"right",L=x?"clientHeight":"clientWidth",O=r.reference[p]+r.reference[d]-u[d]-r.floating[p],E=u[d]-r.reference[d],P=yield null==l.getOffsetParent?void 0:l.getOffsetParent(s);let S=P?P[L]:0;S&&(yield null==l.isElement?void 0:l.isElement(P))||(S=c.floating[L]||r.floating[p]);const k=O/2-E/2,D=S/2-y[p]/2-1,C=T(a[w],D),F=T(a[R],D),W=C,H=S-y[p]-F,B=S/2-y[p]/2+k,M=A(W,B,H),V=null!=m(i)&&B!=M&&r.reference[p]/2-(B<W?C:F)-y[p]/2<0?B<W?W-B:H-B:0;return{[d]:u[d]-V,data:{[d]:M,centerOffset:B-M+V}}}))}}),E={left:"right",right:"left",bottom:"top",top:"bottom"};function P(t){return t.replace(/left|right|bottom|top/g,(t=>E[t]))}const S={start:"end",end:"start"};function k(t){return t.replace(/start|end/g,(t=>S[t]))}const D=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn(e){return p(this,null,(function*(){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:c,elements:s}=e,f=v(t,e),{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:w=!0}=f,T=d(f,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),L=y(o),A=y(l)===l,O=yield null==c.isRTL?void 0:c.isRTL(s.floating),E=p||(A||!w?[P(l)]:function(t){const e=P(t);return[k(t),e,k(e)]}(l));p||"none"===b||E.push(...function(t,e,n,o){const i=m(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(y(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(k)))),r}(l,w,b,O));const S=[l,...E],D=yield R(e,T),C=[];let F=(null==(n=i.flip)?void 0:n.overflows)||[];if(a&&C.push(D[L]),u){const{main:t,cross:e}=function(t,e,n){void 0===n&&(n=!1);const o=m(t),i=g(t),r=h(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=P(l)),{main:l,cross:P(l)}}(o,r,O);C.push(D[t],D[e])}if(F=[...F,{placement:o,overflows:C}],!C.every((t=>t<=0))){var W,H;const t=((null==(W=i.flip)?void 0:W.index)||0)+1,e=S[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(H=F.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:H.placement;if(!n)switch(x){case"bestFit":{var B;const t=null==(B=F.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:B[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}))}}},C=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn(e){return p(this,null,(function*(){const{x:n,y:o}=e,i=yield function(t,e){return p(this,null,(function*(){const{placement:n,platform:o,elements:i}=t,r=yield null==o.isRTL?void 0:o.isRTL(i.floating),l=y(n),c=m(n),s="x"===g(n),f=["left","top"].includes(l)?-1:1,u=r&&s?-1:1,d=v(e,t);let{mainAxis:p,crossAxis:h,alignmentAxis:x}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:a({mainAxis:0,crossAxis:0,alignmentAxis:null},d);return c&&"number"==typeof x&&(h="end"===c?-1*x:x),s?{x:h*u,y:p*f}:{x:p*f,y:h*u}}))}(e,t);return{x:n+i.x,y:o+i.y,data:i}}))}}},F=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn(e){return p(this,null,(function*(){const{x:n,y:o,placement:i}=e,r=v(t,e),{mainAxis:l=!0,crossAxis:c=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}}}=r,f=d(r,["mainAxis","crossAxis","limiter"]),p={x:n,y:o},m=yield R(e,f),h=g(y(i)),x=function(t){return"x"===t?"y":"x"}(h);let b=p[h],w=p[x];if(l){const t="y"===h?"bottom":"right";b=A(b+m["y"===h?"top":"left"],b,b-m[t])}if(c){const t="y"===x?"bottom":"right";w=A(w+m["y"===x?"top":"left"],w,w-m[t])}const T=s.fn(u(a({},e),{[h]:b,[x]:w}));return u(a({},T),{data:{x:T.x-n,y:T.y-o}})}))}}};function W(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function H(t){return W(t).getComputedStyle(t)}function B(t){return t instanceof W(t).Node}function M(t){return B(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){return t instanceof W(t).HTMLElement}function _(t){return t instanceof W(t).Element}function j(t){return"undefined"!=typeof ShadowRoot&&(t instanceof W(t).ShadowRoot||t instanceof ShadowRoot)}function z(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=H(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function N(t){return["table","td","th"].includes(M(t))}function I(t){const e=q(),n=H(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function q(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function X(t){return["html","body","#document"].includes(M(t))}const Y=Math.min,$=Math.max,G=Math.round,J=Math.floor,K=t=>({x:t,y:t});function Q(t){const e=H(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=V(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,c=G(n)!==r||G(o)!==l;return c&&(n=r,o=l),{width:n,height:o,$:c}}function U(t){return _(t)?t:t.contextElement}function Z(t){const e=U(t);if(!V(e))return K(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Q(e);let l=(r?G(n.width):n.width)/o,c=(r?G(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const tt=K(0);function et(t,e,n){var o,i;if(void 0===e&&(e=!0),!q())return tt;const r=t?W(t):window;return!n||e&&n!==r?tt:{x:(null==(o=r.visualViewport)?void 0:o.offsetLeft)||0,y:(null==(i=r.visualViewport)?void 0:i.offsetTop)||0}}function nt(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=U(t);let l=K(1);e&&(o?_(o)&&(l=Z(o)):l=Z(t));const c=et(r,n,o);let s=(i.left+c.x)/l.x,f=(i.top+c.y)/l.y,a=i.width/l.x,u=i.height/l.y;if(r){const t=W(r),e=o&&_(o)?W(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=Z(n),e=n.getBoundingClientRect(),o=getComputedStyle(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;s*=t.x,f*=t.y,a*=t.x,u*=t.y,s+=i,f+=r,n=W(n).frameElement}}return w({width:a,height:u,x:s,y:f})}function ot(t){return((B(t)?t.ownerDocument:t.document)||window.document).documentElement}function it(t){return _(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function rt(t){return nt(ot(t)).left+it(t).scrollLeft}function lt(t){if("html"===M(t))return t;const e=t.assignedSlot||t.parentNode||j(t)&&t.host||ot(t);return j(e)?e.host:e}function ct(t){const e=lt(t);return X(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&z(e)?e:ct(e)}function st(t,e){var n;void 0===e&&(e=[]);const o=ct(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=W(o);return i?e.concat(r,r.visualViewport||[],z(o)?o:[]):e.concat(o,st(o))}function ft(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=W(t),o=ot(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=q();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n);else if("document"===e)o=function(t){const e=ot(t),n=it(t),o=t.ownerDocument.body,i=$(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=$(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+rt(t);const c=-n.scrollTop;return"rtl"===H(o).direction&&(l+=$(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:c}}(ot(t));else if(_(e))o=function(t,e){const n=nt(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=V(t)?Z(t):K(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=et(t);o=u(a({},e),{x:e.x-n.x,y:e.y-n.y})}return w(o)}function at(t,e){const n=lt(t);return!(n===e||!_(n)||X(n))&&("fixed"===H(n).position||at(n,e))}function ut(t,e){const n=e.get(t);if(n)return n;let o=st(t).filter((t=>_(t)&&"body"!==M(t))),i=null;const r="fixed"===H(t).position;let l=r?lt(t):t;for(;_(l)&&!X(l);){const e=H(l),n=I(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||z(l)&&!n&&at(t,l))?o=o.filter((t=>t!==l)):i=e,l=lt(l)}return e.set(t,o),o}function dt(t,e){return V(t)&&"fixed"!==H(t).position?e?e(t):t.offsetParent:null}function pt(t,e){const n=W(t);if(!V(t))return n;let o=dt(t,e);for(;o&&N(o)&&"static"===H(o).position;)o=dt(o,e);return o&&("html"===M(o)||"body"===M(o)&&"static"===H(o).position&&!I(o))?n:o||function(t){let e=lt(t);for(;V(e)&&!X(e);){if(I(e))return e;e=lt(e)}return null}(t)||n}function mt(t,e,n){const o=V(e),i=ot(e),r="fixed"===n,l=nt(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const s=K(0);if(o||!o&&!r)if(("body"!==M(e)||z(i))&&(c=it(e)),V(e)){const t=nt(e,!0,r,e);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=rt(i));return{x:l.left+c.scrollLeft-s.x,y:l.top+c.scrollTop-s.y,width:l.width,height:l.height}}const ht={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?ut(e,this._c):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=ft(e,n,i);return t.top=$(o.top,t.top),t.right=Y(o.right,t.right),t.bottom=Y(o.bottom,t.bottom),t.left=$(o.left,t.left),t}),ft(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=V(n),r=ot(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c=K(1);const s=K(0);if((i||!i&&"fixed"!==o)&&(("body"!==M(n)||z(r))&&(l=it(n)),V(n))){const t=nt(n);c=Z(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+s.x,y:e.y*c.y-l.scrollTop*c.y+s.y}},isElement:_,getDimensions:function(t){return Q(t)},getOffsetParent:pt,getDocumentElement:ot,getScale:Z,getElementRects(t){return p(this,null,(function*(){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||pt,r=this.getDimensions;return{reference:mt(e,yield i(n),o),floating:a({x:0,y:0},yield r(n))}}))},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===H(t).direction};function yt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,f=U(t),d=i||r?[...f?st(f):[],...st(e)]:[];d.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const p=f&&c?function(t,e){let n,o=null;const i=ot(t);function r(){clearTimeout(n),o&&o.disconnect(),o=null}return function l(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),r();const{left:f,top:d,width:p,height:m}=t.getBoundingClientRect();if(c||e(),!p||!m)return;const h={rootMargin:-J(d)+"px "+-J(i.clientWidth-(f+p))+"px "+-J(i.clientHeight-(d+m))+"px "+-J(f)+"px",threshold:$(0,Y(1,s))||1};let y=!0;function g(t){const e=t[0].intersectionRatio;if(e!==s){if(!y)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}y=!1}try{o=new IntersectionObserver(g,u(a({},h),{root:i.ownerDocument}))}catch(t){o=new IntersectionObserver(g,h)}o.observe(t)}(!0),r}(f,n):null;let m,h=-1,y=null;l&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===f&&y&&(y.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{y&&y.observe(e)}))),n()})),f&&!s&&y.observe(f),y.observe(e));let g=s?nt(t):null;return s&&function e(){const o=nt(t);!g||o.x===g.x&&o.y===g.y&&o.width===g.width&&o.height===g.height||n(),g=o,m=requestAnimationFrame(e)}(),n(),()=>{d.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),p&&p(),y&&y.disconnect(),y=null,s&&cancelAnimationFrame(m)}}const gt=(t,e,n)=>{const o=new Map,i=a({platform:ht},n),r=u(a({},i.platform),{_c:o});return((t,e,n)=>p(void 0,null,(function*(){const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=yield null==l.isRTL?void 0:l.isRTL(e);let f=yield l.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:p}=x(f,o,s),m=o,h={},y=0;for(let n=0;n<c.length;n++){const{name:r,fn:g}=c[n],{x:v,y:b,data:w,reset:R}=yield g({x:d,y:p,initialPlacement:o,placement:m,strategy:i,middlewareData:h,rects:f,platform:l,elements:{reference:t,floating:e}});d=null!=v?v:d,p=null!=b?b:p,h=u(a({},h),{[r]:a(a({},h[r]),w)}),R&&y<=50&&(y++,"object"==typeof R&&(R.placement&&(m=R.placement),R.rects&&(f=!0===R.rects?yield l.getElementRects({reference:t,floating:e,strategy:i}):R.rects),({x:d,y:p}=x(f,m,s))),n=-1)}return{x:d,y:p,placement:m,strategy:i,middlewareData:h}})))(t,e,u(a({},i),{platform:r}))}}}]);