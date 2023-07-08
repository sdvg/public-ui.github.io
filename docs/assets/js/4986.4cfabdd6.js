/*! For license information please see 4986.4cfabdd6.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4986],{26323:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>p,c:()=>y,d:()=>s,e:()=>c,f:()=>d,g:()=>m,h:()=>u,u:()=>g});var o=n(53915);const r=new Set,i=e=>{!1===r.has(e)&&(r.add(e),o.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),o.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},a=new Set,s=e=>{!1===a.has(e)&&(a.add(e),o.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=e=>{!1===a.has(e)&&(a.add(e),o.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},f=new Set,d=(e,t=!1)=>{!1===f.has(e)&&(f.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};s("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,g=e=>{!1===h.has(e)&&(h.add(e),o.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},m=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},y=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},97566:(e,t,n)=>{function o(e){return e.split("-")[1]}function r(e){return"y"===e?"height":"width"}function i(e){return e.split("-")[0]}function l(e){return["top","bottom"].includes(i(e))?"x":"y"}function c(e,t,n){let{reference:c,floating:a}=e;const s=c.x+c.width/2-a.width/2,u=c.y+c.height/2-a.height/2,f=l(t),d=r(f),h=c[d]/2-a[d]/2,g="x"===f;let m;switch(i(t)){case"top":m={x:s,y:c.y-a.height};break;case"bottom":m={x:s,y:c.y+c.height};break;case"right":m={x:c.x+c.width,y:u};break;case"left":m={x:c.x-a.width,y:u};break;default:m={x:c.x,y:c.y}}switch(o(t)){case"start":m[f]-=h*(n&&g?-1:1);break;case"end":m[f]+=h*(n&&g?-1:1)}return m}n.d(t,{a:()=>m,b:()=>ie,c:()=>le,f:()=>v,o:()=>x,s:()=>S});function a(e,t){return"function"==typeof e?e(t):e}function s(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function u(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function f(e,t){var n;void 0===t&&(t={});const{x:o,y:r,platform:i,rects:l,elements:c,strategy:f}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:g="floating",altBoundary:m=!1,padding:p=0}=a(t,e),y=s(p),b=c[m?"floating"===g?"reference":"floating":g],w=u(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(b)))||n?b:b.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(c.floating)),boundary:d,rootBoundary:h,strategy:f})),v="floating"===g?{...l.floating,x:o,y:r}:l.reference,x=await(null==i.getOffsetParent?void 0:i.getOffsetParent(c.floating)),S=await(null==i.isElement?void 0:i.isElement(x))&&await(null==i.getScale?void 0:i.getScale(x))||{x:1,y:1},k=u(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:x,strategy:f}):v);return{top:(w.top-k.top+y.top)/S.y,bottom:(k.bottom-w.bottom+y.bottom)/S.y,left:(w.left-k.left+y.left)/S.x,right:(k.right-w.right+y.right)/S.x}}const d=Math.min,h=Math.max;function g(e,t,n){return h(e,d(t,n))}const m=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:i,placement:c,rects:u,platform:f,elements:h}=t,{element:m,padding:p=0}=a(e,t)||{};if(null==m)return{};const y=s(p),b={x:n,y:i},w=l(c),v=r(w),x=await f.getDimensions(m),S="y"===w,k=S?"top":"left",L=S?"bottom":"right",A=S?"clientHeight":"clientWidth",E=u.reference[v]+u.reference[w]-b[w]-u.floating[v],R=b[w]-u.reference[w],N=await(null==f.getOffsetParent?void 0:f.getOffsetParent(m));let T=N?N[A]:0;T&&await(null==f.isElement?void 0:f.isElement(N))||(T=h.floating[A]||u.floating[v]);const M=E/2-R/2,O=T/2-x[v]/2-1,C=d(y[k],O),D=d(y[L],O),H=C,P=T-x[v]-D,F=T/2-x[v]/2+M,W=g(H,F,P),z=null!=o(c)&&F!=W&&u.reference[v]/2-(F<H?C:D)-x[v]/2<0?F<H?H-F:P-F:0;return{[w]:b[w]-z,data:{[w]:W,centerOffset:F-W+z}}}}),p={left:"right",right:"left",bottom:"top",top:"bottom"};function y(e){return e.replace(/left|right|bottom|top/g,(e=>p[e]))}const b={start:"end",end:"start"};function w(e){return e.replace(/start|end/g,(e=>b[e]))}const v=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:c,middlewareData:s,rects:u,initialPlacement:d,platform:h,elements:g}=t,{mainAxis:m=!0,crossAxis:p=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:S=!0,...k}=a(e,t),L=i(c),A=i(d)===d,E=await(null==h.isRTL?void 0:h.isRTL(g.floating)),R=b||(A||!S?[y(d)]:function(e){const t=y(e);return[w(e),t,w(t)]}(d));b||"none"===x||R.push(...function(e,t,n,r){const l=o(e);let c=function(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:l;default:return[]}}(i(e),"start"===n,r);return l&&(c=c.map((e=>e+"-"+l)),t&&(c=c.concat(c.map(w)))),c}(d,S,x,E));const N=[d,...R],T=await f(t,k),M=[];let O=(null==(n=s.flip)?void 0:n.overflows)||[];if(m&&M.push(T[L]),p){const{main:e,cross:t}=function(e,t,n){void 0===n&&(n=!1);const i=o(e),c=l(e),a=r(c);let s="x"===c?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[a]>t.floating[a]&&(s=y(s)),{main:s,cross:y(s)}}(c,u,E);M.push(T[e],T[t])}if(O=[...O,{placement:c,overflows:M}],!M.every((e=>e<=0))){var C,D;const e=((null==(C=s.flip)?void 0:C.index)||0)+1,t=N[e];if(t)return{data:{index:e,overflows:O},reset:{placement:t}};let n=null==(D=O.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:D.placement;if(!n)switch(v){case"bestFit":{var H;const e=null==(H=O.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:H[0];e&&(n=e);break}case"initialPlacement":n=d}if(c!==n)return{reset:{placement:n}}}return{}}}};const x=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,c=await async function(e,t){const{placement:n,platform:r,elements:c}=e,s=await(null==r.isRTL?void 0:r.isRTL(c.floating)),u=i(n),f=o(n),d="x"===l(n),h=["left","top"].includes(u)?-1:1,g=s&&d?-1:1,m=a(t,e);let{mainAxis:p,crossAxis:y,alignmentAxis:b}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return f&&"number"==typeof b&&(y="end"===f?-1*b:b),d?{x:y*g,y:p*h}:{x:p*h,y:y*g}}(t,e);return{x:n+c.x,y:r+c.y,data:c}}}};const S=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:c=!0,crossAxis:s=!1,limiter:u={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...d}=a(e,t),h={x:n,y:o},m=await f(t,d),p=l(i(r)),y=function(e){return"x"===e?"y":"x"}(p);let b=h[p],w=h[y];if(c){const e="y"===p?"bottom":"right";b=g(b+m["y"===p?"top":"left"],b,b-m[e])}if(s){const e="y"===y?"bottom":"right";w=g(w+m["y"===y?"top":"left"],w,w-m[e])}const v=u.fn({...t,[p]:b,[y]:w});return{...v,data:{x:v.x-n,y:v.y-o}}}}};function k(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function L(e){return k(e).getComputedStyle(e)}function A(e){return e instanceof k(e).Node}function E(e){return A(e)?(e.nodeName||"").toLowerCase():"#document"}function R(e){return e instanceof k(e).HTMLElement}function N(e){return"undefined"!=typeof ShadowRoot&&(e instanceof k(e).ShadowRoot||e instanceof ShadowRoot)}function T(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=L(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function M(e){return["table","td","th"].includes(E(e))}function O(e){const t=C(),n=L(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function C(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function D(e){return["html","body","#document"].includes(E(e))}const H=Math.min,P=Math.max,F=Math.round,W=Math.floor,z=e=>({x:e,y:e});function B(e){const t=L(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=R(e),i=r?e.offsetWidth:n,l=r?e.offsetHeight:o,c=F(n)!==i||F(o)!==l;return c&&(n=i,o=l),{width:n,height:o,$:c}}function j(e){return e instanceof k(e).Element}function q(e){return j(e)?e:e.contextElement}function $(e){const t=q(e);if(!R(t))return z(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=B(t);let l=(i?F(n.width):n.width)/o,c=(i?F(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const I=z(0);function V(e){const t=k(e);return C()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:I}function J(e,t,n,o){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=e.getBoundingClientRect(),i=q(e);let l=z(1);t&&(o?j(o)&&(l=$(o)):l=$(e));const c=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==k(e))&&t}(i,n,o)?V(i):z(0);let a=(r.left+c.x)/l.x,s=(r.top+c.y)/l.y,f=r.width/l.x,d=r.height/l.y;if(i){const e=k(i),t=o&&j(o)?k(o):o;let n=e.frameElement;for(;n&&o&&t!==e;){const e=$(n),t=n.getBoundingClientRect(),o=getComputedStyle(n),r=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;a*=e.x,s*=e.y,f*=e.x,d*=e.y,a+=r,s+=i,n=k(n).frameElement}}return u({width:f,height:d,x:a,y:s})}function _(e){return j(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function K(e){return((A(e)?e.ownerDocument:e.document)||window.document).documentElement}function U(e){return J(K(e)).left+_(e).scrollLeft}function Y(e){if("html"===E(e))return e;const t=e.assignedSlot||e.parentNode||N(e)&&e.host||K(e);return N(t)?t.host:t}function Z(e){const t=Y(e);return D(t)?e.ownerDocument?e.ownerDocument.body:e.body:R(t)&&T(t)?t:Z(t)}function X(e,t){var n;void 0===t&&(t=[]);const o=Z(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=k(o);return r?t.concat(i,i.visualViewport||[],T(o)?o:[]):t.concat(o,X(o))}function G(e,t,n){let o;if("viewport"===t)o=function(e,t){const n=k(e),o=K(e),r=n.visualViewport;let i=o.clientWidth,l=o.clientHeight,c=0,a=0;if(r){i=r.width,l=r.height;const e=C();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,a=r.offsetTop)}return{width:i,height:l,x:c,y:a}}(e,n);else if("document"===t)o=function(e){const t=K(e),n=_(e),o=e.ownerDocument.body,r=P(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=P(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+U(e);const c=-n.scrollTop;return"rtl"===L(o).direction&&(l+=P(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:l,y:c}}(K(e));else if(j(t))o=function(e,t){const n=J(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=R(e)?$(e):z(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:r*i.x,y:o*i.y}}(t,n);else{const n=V(e);o={...t,x:t.x-n.x,y:t.y-n.y}}return u(o)}function Q(e,t){const n=Y(e);return!(n===t||!j(n)||D(n))&&("fixed"===L(n).position||Q(n,t))}function ee(e,t){const n=t.get(e);if(n)return n;let o=X(e).filter((e=>j(e)&&"body"!==E(e))),r=null;const i="fixed"===L(e).position;let l=i?Y(e):e;for(;j(l)&&!D(l);){const t=L(l),n=O(l);n||"fixed"!==t.position||(r=null),(i?!n&&!r:!n&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||T(l)&&!n&&Q(e,l))?o=o.filter((e=>e!==l)):r=t,l=Y(l)}return t.set(e,o),o}function te(e,t,n){const o=R(t),r=K(t),i="fixed"===n,l=J(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const a=z(0);if(o||!o&&!i)if(("body"!==E(t)||T(r))&&(c=_(t)),R(t)){const e=J(t,!0,i,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else r&&(a.x=U(r));return{x:l.left+c.scrollLeft-a.x,y:l.top+c.scrollTop-a.y,width:l.width,height:l.height}}function ne(e,t){return R(e)&&"fixed"!==L(e).position?t?t(e):e.offsetParent:null}function oe(e,t){const n=k(e);if(!R(e))return n;let o=ne(e,t);for(;o&&M(o)&&"static"===L(o).position;)o=ne(o,t);return o&&("html"===E(o)||"body"===E(o)&&"static"===L(o).position&&!O(o))?n:o||function(e){let t=Y(e);for(;R(t)&&!D(t);){if(O(t))return t;t=Y(t)}return null}(e)||n}const re={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=R(n),i=K(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},c=z(1);const a=z(0);if((r||!r&&"fixed"!==o)&&(("body"!==E(n)||T(i))&&(l=_(n)),R(n))){const e=J(n);c=$(n),a.x=e.x+n.clientLeft,a.y=e.y+n.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+a.x,y:t.y*c.y-l.scrollTop*c.y+a.y}},getDocumentElement:K,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const i=[..."clippingAncestors"===n?ee(t,this._c):[].concat(n),o],l=i[0],c=i.reduce(((e,n)=>{const o=G(t,n,r);return e.top=P(o.top,e.top),e.right=H(o.right,e.right),e.bottom=H(o.bottom,e.bottom),e.left=P(o.left,e.left),e}),G(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:oe,getElementRects:async function(e){let{reference:t,floating:n,strategy:o}=e;const r=this.getOffsetParent||oe,i=this.getDimensions;return{reference:te(t,await r(n),o),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return B(e)},getScale:$,isElement:j,isRTL:function(e){return"rtl"===getComputedStyle(e).direction}};function ie(e,t,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:a=!1}=o,s=q(e),u=r||i?[...s?X(s):[],...X(t)]:[];u.forEach((e=>{r&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const f=s&&c?function(e,t){let n,o=null;const r=K(e);function i(){clearTimeout(n),o&&o.disconnect(),o=null}return function l(c,a){void 0===c&&(c=!1),void 0===a&&(a=1),i();const{left:s,top:u,width:f,height:d}=e.getBoundingClientRect();if(c||t(),!f||!d)return;const h={rootMargin:-W(u)+"px "+-W(r.clientWidth-(s+f))+"px "+-W(r.clientHeight-(u+d))+"px "+-W(s)+"px",threshold:P(0,H(1,a))||1};let g=!0;function m(e){const t=e[0].intersectionRatio;if(t!==a){if(!g)return l();t?l(!1,t):n=setTimeout((()=>{l(!1,1e-7)}),100)}g=!1}try{o=new IntersectionObserver(m,{...h,root:r.ownerDocument})}catch(e){o=new IntersectionObserver(m,h)}o.observe(e)}(!0),i}(s,n):null;let d,h=-1,g=null;l&&(g=new ResizeObserver((e=>{let[o]=e;o&&o.target===s&&g&&(g.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{g&&g.observe(t)}))),n()})),s&&!a&&g.observe(s),g.observe(t));let m=a?J(e):null;return a&&function t(){const o=J(e);!m||o.x===m.x&&o.y===m.y&&o.width===m.width&&o.height===m.height||n(),m=o,d=requestAnimationFrame(t)}(),n(),()=>{u.forEach((e=>{r&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),f&&f(),g&&g.disconnect(),g=null,a&&cancelAnimationFrame(d)}}const le=(e,t,n)=>{const o=new Map,r={platform:re,...n},i={...r.platform,_c:o};return(async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:d}=c(u,o,s),h=o,g={},m=0;for(let p=0;p<a.length;p++){const{name:n,fn:i}=a[p],{x:y,y:b,data:w,reset:v}=await i({x:f,y:d,initialPlacement:o,placement:h,strategy:r,middlewareData:g,rects:u,platform:l,elements:{reference:e,floating:t}});f=null!=y?y:f,d=null!=b?b:d,g={...g,[n]:{...g[n],...w}},v&&m<=50&&(m++,"object"==typeof v&&(v.placement&&(h=v.placement),v.rects&&(u=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):v.rects),({x:f,y:d}=c(u,h,s))),p=-1)}return{x:f,y:d,placement:h,strategy:r,middlewareData:g}})(e,t,{...r,platform:i})}},53898:(e,t,n)=>{n.d(t,{K:()=>le,a:()=>F,b:()=>W,c:()=>N,d:()=>j,e:()=>B,f:()=>D,g:()=>C,h:()=>U,i:()=>re,j:()=>Y,k:()=>Z,l:()=>ie,m:()=>V,n:()=>te,o:()=>O,p:()=>K,q:()=>X,r:()=>s,s:()=>H,t:()=>ne,u:()=>J,w:()=>z});var o=n(26323),r=n(53915),i=n(29784);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;l(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;l(n,c(e,"object"==typeof r&&null!==r?r:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},a=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;if(n=a(e,"object"==typeof r&&null!==r?r:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var s=m,u=m,f=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},d=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},h=function(e){3==(t=p(e)).length&&t.push(255);var t,n=255==t[3],o=y(t[0]),r=y(t[1]),i=y(t[2]),l=function(e,t,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,i,t=y(Math.round(t[3])));return n?l?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:l?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+r+i+t},g=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=b(t[0]),r=b(t[1]),i=b(t[2]),l=3==n?255:b(t[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(l))return;return[o,r,i,l]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=b(t.slice(0,2)),r=b(t.slice(2,4)),i=b(t.slice(4,6)),l=6==n?255:b(t.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(l))return;return[o,r,i,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),o=w(t[1],!0),r=w(t[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),o=w(t[1],!0),r=w(t[2],!0),i=w(255*t[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=i)return[n,o,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),n=w(e[1],!0),o=w(e[2],!0),r=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function b(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}s.arr=u,s.obj=f,s.css=d,s.hex=h,s.num=g;var v=.2126,x=.7152,S=.0722,k=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function A(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,r=t<=.03928?t*k:L(t),i=n<=.03928?n*k:L(n),l=o<=.03928?o*k:L(o);return r*v+i*x+l*S}function E(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function R(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(A(e),A(t))}function N(e,t){return R(E(e),E(t))}function T(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const M=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&M.test(e)||t()},C=(e,t)=>{"string"==typeof e&&""===e||t()},D=(e,t)=>{(0,r.b)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},H=(e,t,n,o={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const r=t.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},P=(e,t,n,r)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)};function F(e,t,n,o,r,i={}){n(r)?H(e,t,r,i.hooks):null!=r||i.required?(i.required||o.add(null),P(e,t,r,o)):H(e,t,i.defaultValue,i.hooks)}const W=(e,t,n,o)=>{F(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},z=(e,t,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;F(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},B=(e,t,n,o)=>{F(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},j=(e,t,n,o,i=(e=>e==e),l={})=>{C(o,(()=>{O(o,(()=>{void 0===o&&(o=[]);try{try{o=K(o)}catch(e){}if(Array.isArray(o)){const c=o.find((e=>!n(e)));void 0===c&&i(o)?H(e,t,o,l.hooks):O(c,(()=>{throw r.L.debug(c),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},q=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,I=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,V=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(q.test(e))e="true"===e;else if($.test(e))e=parseInt(e);else if(I.test(e))e=parseFloat(e);else if(_.test(e))try{e=K(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},J=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},_=/^[{[]/,K=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(_.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Y=e=>"string"==typeof e?e:U(e),Z=(e,t)=>a(e,t||(0,r.g)()),X=(e,t)=>c(e,t||(0,r.g)());let G=null;const Q=()=>(G=G||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},G),ee=/(\d+, ){3}0\)/,te=(e,t=Q())=>{const n=getComputedStyle(e),o=ee.test(n.backgroundColor)?t.backgroundColor:s.hex(n.backgroundColor),i=ee.test(n.color)?t.color:s.hex(n.color),l=N(o,i),c={backgroundColor:o,color:i,domNode:e,level:T(l),score:l};return l<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:c.backgroundColor,color:c.color,level:c.level,score:c.score},c.domNode]),c},ne=(e,t=Q())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=ne(e,t)).domNode);o++);return t}return te(n,t)},oe=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,r.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},re=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=Z(e,t);n instanceof HTMLElement?oe(n):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ie{static queryHtmlElementColors(e,t,n=!1,o=!0){let i=null;if(!0===n||!1===ie.executionLock)if(!1===n&&(ie.cache.clear(),ie.cache.set(t.domNode,t),ie.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)n.add(r[e]);const l=Array.from(n);for(let c=0;c<l.length;c++){let n=ie.cache.get(l[c]);void 0===n&&(n=te(l[c],t)),ie.cache.set(l[c],n);const o=ie.queryHtmlElementColors(e,n,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ie.cache.size} DOM elements are analysed).`),ie.executionLock=!1,ie.cache.clear()),i}}ie.executionLock=!1,ie.cache=new Map;class le{}le.patchTheme=i.p,le.patchThemeTag=i.a,le.querySelector=Z,le.querySelectorAll=X,le.scrollByHTMLElement=oe,le.scrollBySelector=re,le.stringifyJson=J}}]);