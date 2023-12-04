/*! For license information please see 66034.31508e31.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[66034],{92093:(t,e,n)=>{n.d(e,{a:()=>ct,b:()=>rt});var o=n(68353);const i=Math.min,r=Math.max,l=Math.round,c=Math.floor,s=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},f={start:"end",end:"start"};function u(t,e,n){return r(t,i(e,n))}function d(t,e){return"function"==typeof t?t(e):t}function p(t){return t.split("-")[0]}function m(t){return t.split("-")[1]}function h(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function y(t){return["top","bottom"].includes(p(t))?"y":"x"}function x(t){return h(y(t))}function w(t){return t.replace(/start|end/g,(t=>f[t]))}function v(t){return t.replace(/left|right|bottom|top/g,(t=>a[t]))}function b(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function R(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function E(t,e,n){let{reference:o,floating:i}=t;const r=y(e),l=x(e),c=g(l),s=p(e),a="y"===r,f=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,d=o[c]/2-i[c]/2;let h;switch(s){case"top":h={x:f,y:o.y-i.height};break;case"bottom":h={x:f,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:u};break;case"left":h={x:o.x-i.width,y:u};break;default:h={x:o.x,y:o.y}}switch(m(e)){case"start":h[l]-=d*(n&&a?-1:1);break;case"end":h[l]+=d*(n&&a?-1:1)}return h}async function T(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:s}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:p=!1,padding:m=0}=d(e,t),h=b(m),g=c[p?"floating"===u?"reference":"floating":u],y=R(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:f,strategy:s})),x="floating"===u?{...l.floating,x:o,y:i}:l.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),v=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},E=R(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:w,strategy:s}):x);return{top:(y.top-E.top+h.top)/v.y,bottom:(E.bottom-y.bottom+h.bottom)/v.y,left:(y.left-E.left+h.left)/v.x,right:(E.right-y.right+h.right)/v.x}}const L=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:c,elements:s}=e,{mainAxis:a=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:b=!0,...R}=d(t,e),E=p(o),L=p(l)===l,A=await(null==c.isRTL?void 0:c.isRTL(s.floating)),O=u||(L||!b?[v(l)]:function(t){const e=v(t);return[w(t),e,w(e)]}(l));u||"none"===y||O.push(...function(t,e,n,o){const i=m(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(p(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(w)))),r}(l,b,y,A));const D=[l,...O],S=await T(e,R),k=[];let C=(null==(n=i.flip)?void 0:n.overflows)||[];if(a&&k.push(S[E]),f){const t=function(t,e,n){void 0===n&&(n=!1);const o=m(t),i=x(t),r=g(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=v(l)),[l,v(l)]}(o,r,A);k.push(S[t[0]],S[t[1]])}if(C=[...C,{placement:o,overflows:k}],!k.every((t=>t<=0))){var P,F;const t=((null==(P=i.flip)?void 0:P.index)||0)+1,e=D[t];if(e)return{data:{index:t,overflows:C},reset:{placement:e}};let n=null==(F=C.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:F.placement;if(!n)switch(h){case"bestFit":{var H;const t=null==(H=C.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:H[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}};const A=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=p(n),c=m(n),s="y"===y(n),a=["left","top"].includes(l)?-1:1,f=r&&s?-1:1,u=d(e,t);let{mainAxis:h,crossAxis:g,alignmentAxis:x}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&"number"==typeof x&&(g="end"===c?-1*x:x),s?{x:g*f,y:h*a}:{x:h*a,y:g*f}}(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},O=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...s}=d(t,e),a={x:n,y:o},f=await T(e,s),m=y(p(i)),g=h(m);let x=a[g],w=a[m];if(r){const t="y"===g?"bottom":"right";x=u(x+f["y"===g?"top":"left"],x,x-f[t])}if(l){const t="y"===m?"bottom":"right";w=u(w+f["y"===m?"top":"left"],w,w-f[t])}const v=c.fn({...e,[g]:x,[m]:w});return{...v,data:{x:v.x-n,y:v.y-o}}}}};function D(t){return C(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function k(t){var e;return null==(e=(C(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function C(t){return t instanceof Node||t instanceof S(t).Node}function P(t){return t instanceof Element||t instanceof S(t).Element}function F(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function H(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof S(t).ShadowRoot)}function W(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function V(t){return["table","td","th"].includes(D(t))}function B(t){const e=M(),n=N(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function M(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function z(t){return["html","body","#document"].includes(D(t))}function N(t){return S(t).getComputedStyle(t)}function $(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(t){if("html"===D(t))return t;const e=t.assignedSlot||t.parentNode||H(t)&&t.host||k(t);return H(e)?e.host:e}function I(t){const e=j(t);return z(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&W(e)?e:I(e)}function _(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=I(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=S(i);return r?e.concat(l,l.visualViewport||[],W(i)?i:[],l.frameElement&&n?_(l.frameElement):[]):e.concat(i,_(i))}function q(t){const e=N(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:n,c=i?t.offsetHeight:o,s=l(n)!==r||l(o)!==c;return s&&(n=r,o=c),{width:n,height:o,$:s}}function X(t){return P(t)?t:t.contextElement}function Y(t){const e=X(t);if(!F(e))return s(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=q(e);let c=(r?l(n.width):n.width)/o,a=(r?l(n.height):n.height)/i;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}const G=s(0);function J(t){const e=S(t);return M()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:G}function K(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=X(t);let l=s(1);e&&(o?P(o)&&(l=Y(o)):l=Y(t));const c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==S(t))&&e}(r,n,o)?J(r):s(0);let a=(i.left+c.x)/l.x,f=(i.top+c.y)/l.y,u=i.width/l.x,d=i.height/l.y;if(r){const t=S(r),e=o&&P(o)?S(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=Y(n),e=n.getBoundingClientRect(),o=N(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,f*=t.y,u*=t.x,d*=t.y,a+=i,f+=r,n=S(n).frameElement}}return R({width:u,height:d,x:a,y:f})}function Q(t){return K(k(t)).left+$(t).scrollLeft}function U(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=S(t),o=k(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=M();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n);else if("document"===e)o=function(t){const e=k(t),n=$(t),o=t.ownerDocument.body,i=r(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),l=r(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let c=-n.scrollLeft+Q(t);const s=-n.scrollTop;return"rtl"===N(o).direction&&(c+=r(e.clientWidth,o.clientWidth)-i),{width:i,height:l,x:c,y:s}}(k(t));else if(P(e))o=function(t,e){const n=K(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=F(t)?Y(t):s(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=J(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return R(o)}function Z(t,e){const n=j(t);return!(n===e||!P(n)||z(n))&&("fixed"===N(n).position||Z(n,e))}function tt(t,e){const n=e.get(t);if(n)return n;let o=_(t,[],!1).filter((t=>P(t)&&"body"!==D(t))),i=null;const r="fixed"===N(t).position;let l=r?j(t):t;for(;P(l)&&!z(l);){const e=N(l),n=B(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||W(l)&&!n&&Z(t,l))?o=o.filter((t=>t!==l)):i=e,l=j(l)}return e.set(t,o),o}function et(t,e,n){const o=F(e),i=k(e),r="fixed"===n,l=K(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=s(0);if(o||!o&&!r)if(("body"!==D(e)||W(i))&&(c=$(e)),o){const t=K(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=Q(i));return{x:l.left+c.scrollLeft-a.x,y:l.top+c.scrollTop-a.y,width:l.width,height:l.height}}function nt(t,e){return F(t)&&"fixed"!==N(t).position?e?e(t):t.offsetParent:null}function ot(t,e){const n=S(t);if(!F(t))return n;let o=nt(t,e);for(;o&&V(o)&&"static"===N(o).position;)o=nt(o,e);return o&&("html"===D(o)||"body"===D(o)&&"static"===N(o).position&&!B(o))?n:o||function(t){let e=j(t);for(;F(e)&&!z(e);){if(B(e))return e;e=j(e)}return null}(t)||n}const it={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=F(n),r=k(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c=s(1);const a=s(0);if((i||!i&&"fixed"!==o)&&(("body"!==D(n)||W(r))&&(l=$(n)),F(n))){const t=K(n);c=Y(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+a.x,y:e.y*c.y-l.scrollTop*c.y+a.y}},getDocumentElement:k,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:l}=t;const c=[..."clippingAncestors"===n?tt(e,this._c):[].concat(n),o],s=c[0],a=c.reduce(((t,n)=>{const o=U(e,n,l);return t.top=r(o.top,t.top),t.right=i(o.right,t.right),t.bottom=i(o.bottom,t.bottom),t.left=r(o.left,t.left),t}),U(e,s,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ot,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||ot,r=this.getDimensions;return{reference:et(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return q(t)},getScale:Y,isElement:P,isRTL:function(t){return"rtl"===N(t).direction}};function rt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:u=!1}=o,d=X(t),p=l||s?[...d?_(d):[],..._(e)]:[];p.forEach((t=>{l&&t.addEventListener("scroll",n,{passive:!0}),s&&t.addEventListener("resize",n)}));const m=d&&f?function(t,e){let n,o=null;const l=k(t);function s(){clearTimeout(n),o&&o.disconnect(),o=null}return function a(f,u){void 0===f&&(f=!1),void 0===u&&(u=1),s();const{left:d,top:p,width:m,height:h}=t.getBoundingClientRect();if(f||e(),!m||!h)return;const g={rootMargin:-c(p)+"px "+-c(l.clientWidth-(d+m))+"px "+-c(l.clientHeight-(p+h))+"px "+-c(d)+"px",threshold:r(0,i(1,u))||1};let y=!0;function x(t){const e=t[0].intersectionRatio;if(e!==u){if(!y)return a();e?a(!1,e):n=setTimeout((()=>{a(!1,1e-7)}),100)}y=!1}try{o=new IntersectionObserver(x,{...g,root:l.ownerDocument})}catch(t){o=new IntersectionObserver(x,g)}o.observe(t)}(!0),s}(d,n):null;let h,g=-1,y=null;a&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===d&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{y&&y.observe(e)}))),n()})),d&&!u&&y.observe(d),y.observe(e));let x=u?K(t):null;return u&&function e(){const o=K(t);!x||o.x===x.x&&o.y===x.y&&o.width===x.width&&o.height===x.height||n(),x=o,h=requestAnimationFrame(e)}(),n(),()=>{p.forEach((t=>{l&&t.removeEventListener("scroll",n),s&&t.removeEventListener("resize",n)})),m&&m(),y&&y.disconnect(),y=null,u&&cancelAnimationFrame(h)}}const lt=(t,e,n)=>{const o=new Map,i={platform:it,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(e));let a=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=E(a,o,s),d=o,p={},m=0;for(let h=0;h<c.length;h++){const{name:n,fn:r}=c[h],{x:g,y:y,data:x,reset:w}=await r({x:f,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:p,rects:a,platform:l,elements:{reference:t,floating:e}});f=null!=g?g:f,u=null!=y?y:u,p={...p,[n]:{...p[n],...x}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(a=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),({x:f,y:u}=E(a,d,s))),h=-1)}return{x:f,y:u,placement:d,strategy:i,middlewareData:p}})(t,e,{...i,platform:r})},ct=async({floatingElement:t,referenceElement:e,arrowElement:n,align:r="top"})=>{var l,c,s;if("test"!==o.p){const o=[A(null!==(l=null==n?void 0:n.offsetHeight)&&void 0!==l?l:10),L(),O()];n&&o.push((t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:l,platform:c,elements:s,middlewareData:a}=e,{element:f,padding:p=0}=d(t,e)||{};if(null==f)return{};const h=b(p),y={x:n,y:o},w=x(r),v=g(w),R=await c.getDimensions(f),E="y"===w,T=E?"top":"left",L=E?"bottom":"right",A=E?"clientHeight":"clientWidth",O=l.reference[v]+l.reference[w]-y[w]-l.floating[v],D=y[w]-l.reference[w],S=await(null==c.getOffsetParent?void 0:c.getOffsetParent(f));let k=S?S[A]:0;k&&await(null==c.isElement?void 0:c.isElement(S))||(k=s.floating[A]||l.floating[v]);const C=O/2-D/2,P=k/2-R[v]/2-1,F=i(h[T],P),H=i(h[L],P),W=F,V=k-R[v]-H,B=k/2-R[v]/2+C,M=u(W,B,V),z=!a.arrow&&null!=m(r)&&B!=M&&l.reference[v]/2-(B<W?F:H)-R[v]/2<0,N=z?B<W?W-B:V-B:0;return{[w]:y[w]-N,data:{[w]:M,centerOffset:B-M+N},reset:z}}}))({element:n}));const{x:a,y:f,middlewareData:p,placement:h}=await lt(e,t,{placement:r,middleware:o});Object.assign(t.style,{left:`${a}px`,top:`${f}px`,visibility:"visible"}),n&&((null===(c=p.arrow)||void 0===c?void 0:c.x)?Object.assign(n.style,{left:`${p.arrow.x}px`,top:"bottom"===h?-n.offsetHeight/2+"px":"",bottom:"top"===h?-n.offsetHeight/2+"px":""}):(null===(s=p.arrow)||void 0===s?void 0:s.y)&&Object.assign(n.style,{left:"right"===h?-n.offsetWidth/2+"px":"",right:"left"===h?-n.offsetWidth/2+"px":"",top:`${p.arrow.y}px`}))}}},23589:(t,e,n)=>{n.d(e,{a:()=>r,v:()=>l});var o=n(48167);const i=["left","right","top","bottom"],r=(t,e)=>{l(t,"_align",e)},l=(t,e,n)=>{(0,o.w)(t,e,(t=>"string"==typeof t&&i.includes(t)),new Set(i),n,{defaultValue:"top"})}}}]);