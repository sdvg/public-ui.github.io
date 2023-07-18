/*! For license information please see 916.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[916],{90916:(t,e,n)=>{n.d(e,{a:()=>A,b:()=>yt,c:()=>gt,f:()=>C,o:()=>D,s:()=>F});var o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&f(t,n,e[n]);if(l)for(var n of l(e))s.call(e,n)&&f(t,n,e[n]);return t},u=(t,e)=>i(t,r(e)),d=(t,e)=>{var n={};for(var o in t)c.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&l)for(var o of l(t))e.indexOf(o)<0&&s.call(t,o)&&(n[o]=t[o]);return n},p=(t,e,n)=>new Promise(((o,i)=>{var r=t=>{try{c(n.next(t))}catch(t){i(t)}},l=t=>{try{c(n.throw(t))}catch(t){i(t)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(r,l);c((n=n.apply(t,e)).next())}));function m(t){return t.split("-")[1]}function h(t){return"y"===t?"height":"width"}function y(t){return t.split("-")[0]}function g(t){return["top","bottom"].includes(y(t))?"x":"y"}function x(t,e,n){let{reference:o,floating:i}=t;const r=o.x+o.width/2-i.width/2,l=o.y+o.height/2-i.height/2,c=g(e),s=h(c),f=o[s]/2-i[s]/2,a="x"===c;let u;switch(y(e)){case"top":u={x:r,y:o.y-i.height};break;case"bottom":u={x:r,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:l};break;case"left":u={x:o.x-i.width,y:l};break;default:u={x:o.x,y:o.y}}switch(m(e)){case"start":u[c]-=f*(n&&a?-1:1);break;case"end":u[c]+=f*(n&&a?-1:1)}return u}function v(t,e){return"function"==typeof t?t(e):t}function b(t){return"number"!=typeof t?function(t){return a({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function w(t){return u(a({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function R(t,e){return p(this,null,(function*(){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:m=!1,padding:h=0}=v(e,t),y=b(h),g=c[m?"floating"===p?"reference":"floating":p],x=w(yield r.getClippingRect({element:null==(n=yield null==r.isElement?void 0:r.isElement(g))||n?g:g.contextElement||(yield null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:s})),R="floating"===p?u(a({},l.floating),{x:o,y:i}):l.reference,T=yield null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating),L=(yield null==r.isElement?void 0:r.isElement(T))&&(yield null==r.getScale?void 0:r.getScale(T))||{x:1,y:1},E=w(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:R,offsetParent:T,strategy:s}):R);return{top:(x.top-E.top+y.top)/L.y,bottom:(E.bottom-x.bottom+y.bottom)/L.y,left:(x.left-E.left+y.left)/L.x,right:(E.right-x.right+y.right)/L.x}}))}const T=Math.min,L=Math.max;function E(t,e,n){return L(t,T(e,n))}const A=t=>({name:"arrow",options:t,fn(e){return p(this,null,(function*(){const{x:n,y:o,placement:i,rects:r,platform:l,elements:c}=e,{element:s,padding:f=0}=v(t,e)||{};if(null==s)return{};const a=b(f),u={x:n,y:o},d=g(i),p=h(d),y=yield l.getDimensions(s),x="y"===d,w=x?"top":"left",R=x?"bottom":"right",L=x?"clientHeight":"clientWidth",A=r.reference[p]+r.reference[d]-u[d]-r.floating[p],O=u[d]-r.reference[d],P=yield null==l.getOffsetParent?void 0:l.getOffsetParent(s);let S=P?P[L]:0;S&&(yield null==l.isElement?void 0:l.isElement(P))||(S=c.floating[L]||r.floating[p]);const k=A/2-O/2,C=S/2-y[p]/2-1,D=T(a[w],C),F=T(a[R],C),H=D,W=S-y[p]-F,M=S/2-y[p]/2+k,B=E(H,M,W),V=null!=m(i)&&M!=B&&r.reference[p]/2-(M<H?D:F)-y[p]/2<0?M<H?H-M:W-M:0;return{[d]:u[d]-V,data:{[d]:B,centerOffset:M-B+V}}}))}}),O={left:"right",right:"left",bottom:"top",top:"bottom"};function P(t){return t.replace(/left|right|bottom|top/g,(t=>O[t]))}const S={start:"end",end:"start"};function k(t){return t.replace(/start|end/g,(t=>S[t]))}const C=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn(e){return p(this,null,(function*(){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:c,elements:s}=e,f=v(t,e),{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:w=!0}=f,T=d(f,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),L=y(o),E=y(l)===l,A=yield null==c.isRTL?void 0:c.isRTL(s.floating),O=p||(E||!w?[P(l)]:function(t){const e=P(t);return[k(t),e,k(e)]}(l));p||"none"===b||O.push(...function(t,e,n,o){const i=m(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(y(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(k)))),r}(l,w,b,A));const S=[l,...O],C=yield R(e,T),D=[];let F=(null==(n=i.flip)?void 0:n.overflows)||[];if(a&&D.push(C[L]),u){const{main:t,cross:e}=function(t,e,n){void 0===n&&(n=!1);const o=m(t),i=g(t),r=h(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=P(l)),{main:l,cross:P(l)}}(o,r,A);D.push(C[t],C[e])}if(F=[...F,{placement:o,overflows:D}],!D.every((t=>t<=0))){var H,W;const t=((null==(H=i.flip)?void 0:H.index)||0)+1,e=S[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(W=F.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:W.placement;if(!n)switch(x){case"bestFit":{var M;const t=null==(M=F.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:M[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}))}}},D=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn(e){return p(this,null,(function*(){const{x:n,y:o}=e,i=yield function(t,e){return p(this,null,(function*(){const{placement:n,platform:o,elements:i}=t,r=yield null==o.isRTL?void 0:o.isRTL(i.floating),l=y(n),c=m(n),s="x"===g(n),f=["left","top"].includes(l)?-1:1,u=r&&s?-1:1,d=v(e,t);let{mainAxis:p,crossAxis:h,alignmentAxis:x}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:a({mainAxis:0,crossAxis:0,alignmentAxis:null},d);return c&&"number"==typeof x&&(h="end"===c?-1*x:x),s?{x:h*u,y:p*f}:{x:p*f,y:h*u}}))}(e,t);return{x:n+i.x,y:o+i.y,data:i}}))}}},F=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn(e){return p(this,null,(function*(){const{x:n,y:o,placement:i}=e,r=v(t,e),{mainAxis:l=!0,crossAxis:c=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}}}=r,f=d(r,["mainAxis","crossAxis","limiter"]),p={x:n,y:o},m=yield R(e,f),h=g(y(i)),x=function(t){return"x"===t?"y":"x"}(h);let b=p[h],w=p[x];if(l){const t="y"===h?"bottom":"right";b=E(b+m["y"===h?"top":"left"],b,b-m[t])}if(c){const t="y"===x?"bottom":"right";w=E(w+m["y"===x?"top":"left"],w,w-m[t])}const T=s.fn(u(a({},e),{[h]:b,[x]:w}));return u(a({},T),{data:{x:T.x-n,y:T.y-o}})}))}}};function H(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function W(t){return H(t).getComputedStyle(t)}function M(t){return t instanceof H(t).Node}function B(t){return M(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){return t instanceof HTMLElement||t instanceof H(t).HTMLElement}function _(t){return"undefined"!=typeof ShadowRoot&&(t instanceof H(t).ShadowRoot||t instanceof ShadowRoot)}function j(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=W(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function z(t){return["table","td","th"].includes(B(t))}function N(t){const e=I(),n=W(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function I(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function q(t){return["html","body","#document"].includes(B(t))}const X=Math.min,Y=Math.max,$=Math.round,G=Math.floor,J=t=>({x:t,y:t});function K(t){const e=W(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=V(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,c=$(n)!==r||$(o)!==l;return c&&(n=r,o=l),{width:n,height:o,$:c}}function Q(t){return t instanceof Element||t instanceof H(t).Element}function U(t){return Q(t)?t:t.contextElement}function Z(t){const e=U(t);if(!V(e))return J(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=K(e);let l=(r?$(n.width):n.width)/o,c=(r?$(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const tt=J(0);function et(t){const e=H(t);return I()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:tt}function nt(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=U(t);let l=J(1);e&&(o?Q(o)&&(l=Z(o)):l=Z(t));const c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==H(t))&&e}(r,n,o)?et(r):J(0);let s=(i.left+c.x)/l.x,f=(i.top+c.y)/l.y,a=i.width/l.x,u=i.height/l.y;if(r){const t=H(r),e=o&&Q(o)?H(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=Z(n),e=n.getBoundingClientRect(),o=getComputedStyle(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;s*=t.x,f*=t.y,a*=t.x,u*=t.y,s+=i,f+=r,n=H(n).frameElement}}return w({width:a,height:u,x:s,y:f})}function ot(t){return Q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function it(t){var e;return null==(e=(M(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function rt(t){return nt(it(t)).left+ot(t).scrollLeft}function lt(t){if("html"===B(t))return t;const e=t.assignedSlot||t.parentNode||_(t)&&t.host||it(t);return _(e)?e.host:e}function ct(t){const e=lt(t);return q(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&j(e)?e:ct(e)}function st(t,e){var n;void 0===e&&(e=[]);const o=ct(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=H(o);return i?e.concat(r,r.visualViewport||[],j(o)?o:[]):e.concat(o,st(o))}function ft(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=H(t),o=it(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=I();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n);else if("document"===e)o=function(t){const e=it(t),n=ot(t),o=t.ownerDocument.body,i=Y(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=Y(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+rt(t);const c=-n.scrollTop;return"rtl"===W(o).direction&&(l+=Y(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:c}}(it(t));else if(Q(e))o=function(t,e){const n=nt(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=V(t)?Z(t):J(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=et(t);o=u(a({},e),{x:e.x-n.x,y:e.y-n.y})}return w(o)}function at(t,e){const n=lt(t);return!(n===e||!Q(n)||q(n))&&("fixed"===W(n).position||at(n,e))}function ut(t,e){const n=e.get(t);if(n)return n;let o=st(t).filter((t=>Q(t)&&"body"!==B(t))),i=null;const r="fixed"===W(t).position;let l=r?lt(t):t;for(;Q(l)&&!q(l);){const e=W(l),n=N(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||j(l)&&!n&&at(t,l))?o=o.filter((t=>t!==l)):i=e,l=lt(l)}return e.set(t,o),o}function dt(t,e,n){const o=V(e),i=it(e),r="fixed"===n,l=nt(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const s=J(0);if(o||!o&&!r)if(("body"!==B(e)||j(i))&&(c=ot(e)),V(e)){const t=nt(e,!0,r,e);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=rt(i));return{x:l.left+c.scrollLeft-s.x,y:l.top+c.scrollTop-s.y,width:l.width,height:l.height}}function pt(t,e){return V(t)&&"fixed"!==W(t).position?e?e(t):t.offsetParent:null}function mt(t,e){const n=H(t);if(!V(t))return n;let o=pt(t,e);for(;o&&z(o)&&"static"===W(o).position;)o=pt(o,e);return o&&("html"===B(o)||"body"===B(o)&&"static"===W(o).position&&!N(o))?n:o||function(t){let e=lt(t);for(;V(e)&&!q(e);){if(N(e))return e;e=lt(e)}return null}(t)||n}const ht={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=V(n),r=it(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c=J(1);const s=J(0);if((i||!i&&"fixed"!==o)&&(("body"!==B(n)||j(r))&&(l=ot(n)),V(n))){const t=nt(n);c=Z(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+s.x,y:e.y*c.y-l.scrollTop*c.y+s.y}},getDocumentElement:it,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?ut(e,this._c):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=ft(e,n,i);return t.top=Y(o.top,t.top),t.right=X(o.right,t.right),t.bottom=X(o.bottom,t.bottom),t.left=Y(o.left,t.left),t}),ft(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:mt,getElementRects:function(t){return p(this,null,(function*(){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||mt,r=this.getDimensions;return{reference:dt(e,yield i(n),o),floating:a({x:0,y:0},yield r(n))}}))},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return K(t)},getScale:Z,isElement:Q,isRTL:function(t){return"rtl"===getComputedStyle(t).direction}};function yt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,f=U(t),d=i||r?[...f?st(f):[],...st(e)]:[];d.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const p=f&&c?function(t,e){let n,o=null;const i=it(t);function r(){clearTimeout(n),o&&o.disconnect(),o=null}return function l(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),r();const{left:f,top:d,width:p,height:m}=t.getBoundingClientRect();if(c||e(),!p||!m)return;const h={rootMargin:-G(d)+"px "+-G(i.clientWidth-(f+p))+"px "+-G(i.clientHeight-(d+m))+"px "+-G(f)+"px",threshold:Y(0,X(1,s))||1};let y=!0;function g(t){const e=t[0].intersectionRatio;if(e!==s){if(!y)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}y=!1}try{o=new IntersectionObserver(g,u(a({},h),{root:i.ownerDocument}))}catch(t){o=new IntersectionObserver(g,h)}o.observe(t)}(!0),r}(f,n):null;let m,h=-1,y=null;l&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===f&&y&&(y.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{y&&y.observe(e)}))),n()})),f&&!s&&y.observe(f),y.observe(e));let g=s?nt(t):null;return s&&function e(){const o=nt(t);!g||o.x===g.x&&o.y===g.y&&o.width===g.width&&o.height===g.height||n(),g=o,m=requestAnimationFrame(e)}(),n(),()=>{d.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),p&&p(),y&&y.disconnect(),y=null,s&&cancelAnimationFrame(m)}}const gt=(t,e,n)=>{const o=new Map,i=a({platform:ht},n),r=u(a({},i.platform),{_c:o});return((t,e,n)=>p(void 0,null,(function*(){const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=yield null==l.isRTL?void 0:l.isRTL(e);let f=yield l.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:p}=x(f,o,s),m=o,h={},y=0;for(let n=0;n<c.length;n++){const{name:r,fn:g}=c[n],{x:v,y:b,data:w,reset:R}=yield g({x:d,y:p,initialPlacement:o,placement:m,strategy:i,middlewareData:h,rects:f,platform:l,elements:{reference:t,floating:e}});d=null!=v?v:d,p=null!=b?b:p,h=u(a({},h),{[r]:a(a({},h[r]),w)}),R&&y<=50&&(y++,"object"==typeof R&&(R.placement&&(m=R.placement),R.rects&&(f=!0===R.rects?yield l.getElementRects({reference:t,floating:e,strategy:i}):R.rects),({x:d,y:p}=x(f,m,s))),n=-1)}return{x:d,y:p,placement:m,strategy:i,middlewareData:h}})))(t,e,u(a({},i),{platform:r}))}}}]);