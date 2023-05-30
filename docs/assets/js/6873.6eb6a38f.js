/*! For license information please see 6873.6eb6a38f.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6873],{8784:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>p,c:()=>y,d:()=>s,e:()=>a,f:()=>d,g:()=>m,h:()=>f,u:()=>g});var o=n(86814);const r=new Set,i=e=>{!1===r.has(e)&&(r.add(e),o.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,a=e=>{!1===l.has(e)&&(l.add(e),o.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},c=new Set,s=e=>{!1===c.has(e)&&(c.add(e),o.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},f=e=>{!1===c.has(e)&&(c.add(e),o.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,d=(e,t=!1)=>{!1===u.has(e)&&(u.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};s("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,g=e=>{!1===h.has(e)&&(h.add(e),o.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},m=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},y=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},41052:(e,t,n)=>{function o(e){return e.split("-")[1]}function r(e){return"y"===e?"height":"width"}function i(e){return e.split("-")[0]}function l(e){return["top","bottom"].includes(i(e))?"x":"y"}function a(e,t,n){let{reference:a,floating:c}=e;const s=a.x+a.width/2-c.width/2,f=a.y+a.height/2-c.height/2,u=l(t),d=r(u),h=a[d]/2-c[d]/2,g="x"===u;let m;switch(i(t)){case"top":m={x:s,y:a.y-c.height};break;case"bottom":m={x:s,y:a.y+a.height};break;case"right":m={x:a.x+a.width,y:f};break;case"left":m={x:a.x-c.width,y:f};break;default:m={x:a.x,y:a.y}}switch(o(t)){case"start":m[u]-=h*(n&&g?-1:1);break;case"end":m[u]+=h*(n&&g?-1:1)}return m}n.d(t,{a:()=>g,c:()=>oe,f:()=>b,o:()=>v,s:()=>x});function c(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function s(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function f(e,t){var n;void 0===t&&(t={});const{x:o,y:r,platform:i,rects:l,elements:a,strategy:f}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:g=!1,padding:m=0}=t,p=c(m),y=a[g?"floating"===h?"reference":"floating":h],w=s(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(y)))||n?y:y.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:f})),b="floating"===h?{...l.floating,x:o,y:r}:l.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),x=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},S=s(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:v,strategy:f}):b);return{top:(w.top-S.top+p.top)/x.y,bottom:(S.bottom-w.bottom+p.bottom)/x.y,left:(w.left-S.left+p.left)/x.x,right:(S.right-w.right+p.right)/x.x}}const u=Math.min,d=Math.max;function h(e,t,n){return d(e,u(t,n))}const g=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:i=0}=e||{},{x:a,y:s,placement:f,rects:u,platform:d,elements:g}=t;if(null==n)return{};const m=c(i),p={x:a,y:s},y=l(f),w=r(y),b=await d.getDimensions(n),v="y"===y,x=v?"top":"left",S=v?"bottom":"right",k=v?"clientHeight":"clientWidth",L=u.reference[w]+u.reference[y]-p[y]-u.floating[w],A=p[y]-u.reference[y],N=await(null==d.getOffsetParent?void 0:d.getOffsetParent(n));let E=N?N[k]:0;E&&await(null==d.isElement?void 0:d.isElement(N))||(E=g.floating[k]||u.floating[w]);const T=L/2-A/2,R=m[x],M=E-b[w]-m[S],O=E/2-b[w]/2+T,D=h(R,O,M),P=null!=o(f)&&O!=D&&u.reference[w]/2-(O<R?m[x]:m[S])-b[w]/2<0;return{[y]:p[y]-(P?O<R?R-O:M-O:0),data:{[y]:D,centerOffset:O-D}}}}),m={left:"right",right:"left",bottom:"top",top:"bottom"};function p(e){return e.replace(/left|right|bottom|top/g,(e=>m[e]))}const y={start:"end",end:"start"};function w(e){return e.replace(/start|end/g,(e=>y[e]))}const b=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:a,middlewareData:c,rects:s,initialPlacement:u,platform:d,elements:h}=t,{mainAxis:g=!0,crossAxis:m=!0,fallbackPlacements:y,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...S}=e,k=i(a),L=i(u)===u,A=await(null==d.isRTL?void 0:d.isRTL(h.floating)),N=y||(L||!x?[p(u)]:function(e){const t=p(e);return[w(e),t,w(t)]}(u));y||"none"===v||N.push(...function(e,t,n,r){const l=o(e);let a=function(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:l;default:return[]}}(i(e),"start"===n,r);return l&&(a=a.map((e=>e+"-"+l)),t&&(a=a.concat(a.map(w)))),a}(u,x,v,A));const E=[u,...N],T=await f(t,S),R=[];let M=(null==(n=c.flip)?void 0:n.overflows)||[];if(g&&R.push(T[k]),m){const{main:e,cross:t}=function(e,t,n){void 0===n&&(n=!1);const i=o(e),a=l(e),c=r(a);let s="x"===a?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[c]>t.floating[c]&&(s=p(s)),{main:s,cross:p(s)}}(a,s,A);R.push(T[e],T[t])}if(M=[...M,{placement:a,overflows:R}],!R.every((e=>e<=0))){var O,D;const e=((null==(O=c.flip)?void 0:O.index)||0)+1,t=E[e];if(t)return{data:{index:e,overflows:M},reset:{placement:t}};let n=null==(D=M.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:D.placement;if(!n)switch(b){case"bestFit":{var P;const e=null==(P=M.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(n=e);break}case"initialPlacement":n=u}if(a!==n)return{reset:{placement:n}}}return{}}}};const v=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,a=await async function(e,t){const{placement:n,platform:r,elements:a}=e,c=await(null==r.isRTL?void 0:r.isRTL(a.floating)),s=i(n),f=o(n),u="x"===l(n),d=["left","top"].includes(s)?-1:1,h=c&&u?-1:1,g="function"==typeof t?t(e):t;let{mainAxis:m,crossAxis:p,alignmentAxis:y}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return f&&"number"==typeof y&&(p="end"===f?-1*y:y),u?{x:p*h,y:m*d}:{x:m*d,y:p*h}}(t,e);return{x:n+a.x,y:r+a.y,data:a}}}};const x=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:a=!0,crossAxis:c=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...u}=e,d={x:n,y:o},g=await f(t,u),m=l(i(r)),p=function(e){return"x"===e?"y":"x"}(m);let y=d[m],w=d[p];if(a){const e="y"===m?"bottom":"right";y=h(y+g["y"===m?"top":"left"],y,y-g[e])}if(c){const e="y"===p?"bottom":"right";w=h(w+g["y"===p?"top":"left"],w,w-g[e])}const b=s.fn({...t,[m]:y,[p]:w});return{...b,data:{x:b.x-n,y:b.y-o}}}}};function S(e){var t;return(null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function k(e){return S(e).getComputedStyle(e)}function L(e){return e instanceof S(e).Node}function A(e){return L(e)?(e.nodeName||"").toLowerCase():""}let N;function E(){if(N)return N;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(N=e.brands.map((e=>e.brand+"/"+e.version)).join(" "),N):navigator.userAgent}function T(e){return e instanceof S(e).HTMLElement}function R(e){return e instanceof S(e).Element}function M(e){return"undefined"!=typeof ShadowRoot&&(e instanceof S(e).ShadowRoot||e instanceof ShadowRoot)}function O(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=k(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function D(e){return["table","td","th"].includes(A(e))}function P(e){const t=/firefox/i.test(E()),n=k(e),o=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||t&&"filter"===n.willChange||t&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((e=>n.willChange.includes(e)))||["paint","layout","strict","content"].some((e=>{const t=n.contain;return null!=t&&t.includes(e)}))}function C(){return/^((?!chrome|android).)*safari/i.test(E())}function H(e){return["html","body","#document"].includes(A(e))}const W=Math.min,j=Math.max,B=Math.round;function q(e){const t=k(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=T(e),i=r?e.offsetWidth:n,l=r?e.offsetHeight:o,a=B(n)!==i||B(o)!==l;return a&&(n=i,o=l),{width:n,height:o,fallback:a}}function $(e){return R(e)?e:e.contextElement}const F={x:1,y:1};function z(e){const t=$(e);if(!T(t))return F;const n=t.getBoundingClientRect(),{width:o,height:r,fallback:i}=q(t);let l=(i?B(n.width):n.width)/o,a=(i?B(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}function V(e,t,n,o){var r,i;void 0===t&&(t=!1),void 0===n&&(n=!1);const l=e.getBoundingClientRect(),a=$(e);let c=F;t&&(o?R(o)&&(c=z(o)):c=z(e));const f=a?S(a):window,u=C()&&n;let d=(l.left+(u&&(null==(r=f.visualViewport)?void 0:r.offsetLeft)||0))/c.x,h=(l.top+(u&&(null==(i=f.visualViewport)?void 0:i.offsetTop)||0))/c.y,g=l.width/c.x,m=l.height/c.y;if(a){const e=S(a),t=o&&R(o)?S(o):o;let n=e.frameElement;for(;n&&o&&t!==e;){const e=z(n),t=n.getBoundingClientRect(),o=getComputedStyle(n);t.x+=(n.clientLeft+parseFloat(o.paddingLeft))*e.x,t.y+=(n.clientTop+parseFloat(o.paddingTop))*e.y,d*=e.x,h*=e.y,g*=e.x,m*=e.y,d+=t.x,h+=t.y,n=S(n).frameElement}}return s({width:g,height:m,x:d,y:h})}function J(e){return((L(e)?e.ownerDocument:e.document)||window.document).documentElement}function I(e){return R(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function _(e){return V(J(e)).left+I(e).scrollLeft}function K(e){if("html"===A(e))return e;const t=e.assignedSlot||e.parentNode||M(e)&&e.host||J(e);return M(t)?t.host:t}function U(e){const t=K(e);return H(t)?t.ownerDocument.body:T(t)&&O(t)?t:U(t)}function Y(e,t){var n;void 0===t&&(t=[]);const o=U(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=S(o);return r?t.concat(i,i.visualViewport||[],O(o)?o:[]):t.concat(o,Y(o))}function Z(e,t,n){let o;if("viewport"===t)o=function(e,t){const n=S(e),o=J(e),r=n.visualViewport;let i=o.clientWidth,l=o.clientHeight,a=0,c=0;if(r){i=r.width,l=r.height;const e=C();(!e||e&&"fixed"===t)&&(a=r.offsetLeft,c=r.offsetTop)}return{width:i,height:l,x:a,y:c}}(e,n);else if("document"===t)o=function(e){const t=J(e),n=I(e),o=e.ownerDocument.body,r=j(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=j(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+_(e);const a=-n.scrollTop;return"rtl"===k(o).direction&&(l+=j(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:l,y:a}}(J(e));else if(R(t))o=function(e,t){const n=V(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=T(e)?z(e):{x:1,y:1};return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:r*i.x,y:o*i.y}}(t,n);else{const n={...t};if(C()){var r,i;const t=S(e);n.x-=(null==(r=t.visualViewport)?void 0:r.offsetLeft)||0,n.y-=(null==(i=t.visualViewport)?void 0:i.offsetTop)||0}o=n}return s(o)}function X(e,t){const n=K(e);return!(n===t||!R(n)||H(n))&&("fixed"===k(n).position||X(n,t))}function G(e,t){const n=t.get(e);if(n)return n;let o=Y(e).filter((e=>R(e)&&"body"!==A(e))),r=null;const i="fixed"===k(e).position;let l=i?K(e):e;for(;R(l)&&!H(l);){const t=k(l),n=P(l);n||"fixed"!==t.position||(r=null),(i?!n&&!r:!n&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||O(l)&&!n&&X(e,l))?o=o.filter((e=>e!==l)):r=t,l=K(l)}return t.set(e,o),o}function Q(e,t){return T(e)&&"fixed"!==k(e).position?t?t(e):e.offsetParent:null}function ee(e,t){const n=S(e);if(!T(e))return n;let o=Q(e,t);for(;o&&D(o)&&"static"===k(o).position;)o=Q(o,t);return o&&("html"===A(o)||"body"===A(o)&&"static"===k(o).position&&!P(o))?n:o||function(e){let t=K(e);for(;T(t)&&!H(t);){if(P(t))return t;t=K(t)}return null}(e)||n}function te(e,t,n){const o=T(t),r=J(t),i=V(e,!0,"fixed"===n,t);let l={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==A(t)||O(r))&&(l=I(t)),T(t)){const e=V(t,!0);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else r&&(a.x=_(r));return{x:i.left+l.scrollLeft-a.x,y:i.top+l.scrollTop-a.y,width:i.width,height:i.height}}const ne={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const i=[..."clippingAncestors"===n?G(t,this._c):[].concat(n),o],l=i[0],a=i.reduce(((e,n)=>{const o=Z(t,n,r);return e.top=j(o.top,e.top),e.right=W(o.right,e.right),e.bottom=W(o.bottom,e.bottom),e.left=j(o.left,e.left),e}),Z(t,l,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=T(n),i=J(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},a={x:1,y:1};const c={x:0,y:0};if((r||!r&&"fixed"!==o)&&(("body"!==A(n)||O(i))&&(l=I(n)),T(n))){const e=V(n);a=z(n),c.x=e.x+n.clientLeft,c.y=e.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-l.scrollLeft*a.x+c.x,y:t.y*a.y-l.scrollTop*a.y+c.y}},isElement:R,getDimensions:function(e){return q(e)},getOffsetParent:ee,getDocumentElement:J,getScale:z,async getElementRects(e){let{reference:t,floating:n,strategy:o}=e;const r=this.getOffsetParent||ee,i=this.getDimensions;return{reference:te(t,await r(n),o),floating:{x:0,y:0,...await i(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>"rtl"===k(e).direction},oe=(e,t,n)=>{const o=new Map,r={platform:ne,...n},i={...r.platform,_c:o};return(async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:l}=n,c=i.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(t));let f=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=a(f,o,s),h=o,g={},m=0;for(let p=0;p<c.length;p++){const{name:n,fn:i}=c[p],{x:y,y:w,data:b,reset:v}=await i({x:u,y:d,initialPlacement:o,placement:h,strategy:r,middlewareData:g,rects:f,platform:l,elements:{reference:e,floating:t}});u=null!=y?y:u,d=null!=w?w:d,g={...g,[n]:{...g[n],...b}},v&&m<=50&&(m++,"object"==typeof v&&(v.placement&&(h=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):v.rects),({x:u,y:d}=a(f,h,s))),p=-1)}return{x:u,y:d,placement:h,strategy:r,middlewareData:g}})(e,t,{...r,platform:i})}},20062:(e,t,n)=>{n.d(t,{K:()=>le,a:()=>W,b:()=>j,c:()=>T,d:()=>$,e:()=>q,f:()=>P,g:()=>D,h:()=>U,i:()=>re,j:()=>Y,k:()=>Z,l:()=>ie,m:()=>J,n:()=>te,o:()=>O,p:()=>K,q:()=>X,r:()=>s,s:()=>C,t:()=>ne,u:()=>I,w:()=>B});var o=n(8784),r=n(86814),i=n(67608);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},a=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;l(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;l(n,a(e,"object"==typeof r&&null!==r?r:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;if(n=c(e,"object"==typeof r&&null!==r?r:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var s=m,f=m,u=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},d=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},h=function(e){3==(t=p(e)).length&&t.push(255);var t,n=255==t[3],o=y(t[0]),r=y(t[1]),i=y(t[2]),l=function(e,t,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,i,t=y(Math.round(t[3])));return n?l?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:l?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+r+i+t},g=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=w(t[0]),r=w(t[1]),i=w(t[2]),l=3==n?255:w(t[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(l))return;return[o,r,i,l]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=w(t.slice(0,2)),r=w(t.slice(2,4)),i=w(t.slice(4,6)),l=6==n?255:w(t.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(l))return;return[o,r,i,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=b(t[0],!0),o=b(t[1],!0),r=b(t[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=b(t[0],!0),o=b(t[1],!0),r=b(t[2],!0),i=b(255*t[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=i)return[n,o,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=b(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=b(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=b(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=b(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=b(e[0],!0),n=b(e[1],!0),o=b(e[2],!0),r=b(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function w(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function b(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}s.arr=f,s.obj=u,s.css=d,s.hex=h,s.num=g;var v=.2126,x=.7152,S=.0722,k=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function A(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,r=t<=.03928?t*k:L(t),i=n<=.03928?n*k:L(n),l=o<=.03928?o*k:L(o);return r*v+i*x+l*S}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function E(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(A(e),A(t))}function T(e,t){return E(N(e),N(t))}function R(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const M=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&M.test(e)||t()},D=(e,t)=>{"string"==typeof e&&""===e||t()},P=(e,t)=>{(0,r.b)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},C=(e,t,n,o={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const r=t.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},H=(e,t,n,r)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)};function W(e,t,n,o,r,i={}){n(r)?C(e,t,r,i.hooks):null!=r||i.required?(i.required||o.add(null),H(e,t,r,o)):C(e,t,i.defaultValue,i.hooks)}const j=(e,t,n,o)=>{W(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},B=(e,t,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;W(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},q=(e,t,n,o)=>{W(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},$=(e,t,n,o,i=(e=>e==e),l={})=>{D(o,(()=>{O(o,(()=>{void 0===o&&(o=[]);try{try{o=K(o)}catch(e){}if(Array.isArray(o)){const a=o.find((e=>!n(e)));void 0===a&&i(o)?C(e,t,o,l.hooks):O(a,(()=>{throw r.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},F=/^(true|false)$/,z=/^-?(0|[1-9]\d*)$/,V=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,J=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(F.test(e))e="true"===e;else if(z.test(e))e=parseInt(e);else if(V.test(e))e=parseFloat(e);else if(_.test(e))try{e=K(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},I=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},_=/^[{[]/,K=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(_.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Y=e=>"string"==typeof e?e:U(e),Z=(e,t)=>c(e,t||(0,r.g)()),X=(e,t)=>a(e,t||(0,r.g)());let G=null;const Q=()=>(G=G||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},G),ee=/(\d+, ){3}0\)/,te=(e,t=Q())=>{const n=getComputedStyle(e),o=ee.test(n.backgroundColor)?t.backgroundColor:s.hex(n.backgroundColor),i=ee.test(n.color)?t.color:s.hex(n.color),l=T(o,i),a={backgroundColor:o,color:i,domNode:e,level:R(l),score:l};return l<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:a.backgroundColor,color:a.color,level:a.level,score:a.score},a.domNode]),a},ne=(e,t=Q())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=ne(e,t)).domNode);o++);return t}return te(n,t)},oe=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,r.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},re=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=Z(e,t);n instanceof HTMLElement?oe(n):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ie{static queryHtmlElementColors(e,t,n=!1,o=!0){let i=null;if(!0===n||!1===ie.executionLock)if(!1===n&&(ie.cache.clear(),ie.cache.set(t.domNode,t),ie.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)n.add(r[e]);const l=Array.from(n);for(let a=0;a<l.length;a++){let n=ie.cache.get(l[a]);void 0===n&&(n=te(l[a],t)),ie.cache.set(l[a],n);const o=ie.queryHtmlElementColors(e,n,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ie.cache.size} DOM elements are analysed).`),ie.executionLock=!1,ie.cache.clear()),i}}ie.executionLock=!1,ie.cache=new Map;class le{}le.patchTheme=i.p,le.patchThemeTag=i.a,le.querySelector=Z,le.querySelectorAll=X,le.scrollByHTMLElement=oe,le.scrollBySelector=re,le.stringifyJson=I}}]);