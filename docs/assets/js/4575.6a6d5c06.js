/*! For license information please see 4575.6a6d5c06.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4575],{59419:(t,e,n)=>{n.d(e,{a:()=>r,b:()=>p,c:()=>s,d:()=>c,e:()=>h,f:()=>d,u:()=>m});var o=n(19250);const i=new Set,r=t=>{!1===i.has(t)&&(i.add(t),o.L.debug(t,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,s=t=>{!1===l.has(t)&&(l.add(t),o.L.warn(t,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},a=new Set,c=t=>{!1===a.has(t)&&(a.add(t),o.L.debug(t,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,d=(t,e=!1)=>{!1===u.has(t)&&(u.add(t),t+=!0===e?" \u2705":"",o.L.debug(t,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,h=()=>{r('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=t=>{"string"==typeof t&&""!==t||r("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(t,e=8)=>{var n;e>7&&(n=`[${t}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===f.has(n)&&(f.add(n),o.L.debug(n,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"})))}},75602:(t,e,n)=>{n.d(e,{w:()=>i});var o=n(31372);const i=(t,e,n)=>{(0,o.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),n,{defaultValue:"top"})}},54575:(t,e,n)=>{n.r(e),n.d(e,{kol_tooltip:()=>ct});var o=n(54359),i=n(75602),r=n(19250),l=n(31372),s=n(93944);function a(t){return t.split("-")[1]}function c(t){return"y"===t?"height":"width"}function u(t){return t.split("-")[0]}function d(t){return["top","bottom"].includes(u(t))?"x":"y"}function f(t,e,n){let{reference:o,floating:i}=t;const r=o.x+o.width/2-i.width/2,l=o.y+o.height/2-i.height/2,s=d(e),f=c(s),h=o[f]/2-i[f]/2,p="x"===s;let m;switch(u(e)){case"top":m={x:r,y:o.y-i.height};break;case"bottom":m={x:r,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:l};break;case"left":m={x:o.x-i.width,y:l};break;default:m={x:o.x,y:o.y}}switch(a(e)){case"start":m[s]-=h*(n&&p?-1:1);break;case"end":m[s]+=h*(n&&p?-1:1)}return m}function h(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function p(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function m(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:s,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=e,g=h(m),y=s[f?"floating"===d?"reference":"floating":d],v=p(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:a})),b="floating"===d?{...l.floating,x:o,y:i}:l.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),x=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},k=p(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:w,strategy:a}):b);return{top:(v.top-k.top+g.top)/x.y,bottom:(k.bottom-v.bottom+g.bottom)/x.y,left:(v.left-k.left+g.left)/x.x,right:(k.right-v.right+g.right)/x.x}}const g=Math.min,y=Math.max;function v(t,e,n){return y(t,g(e,n))}const b={left:"right",right:"left",bottom:"top",top:"bottom"};function w(t){return t.replace(/left|right|bottom|top/g,(t=>b[t]))}function x(t,e,n){void 0===n&&(n=!1);const o=a(t),i=d(t),r=c(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=w(l)),{main:l,cross:w(l)}}const k={start:"end",end:"start"};function L(t){return t.replace(/start|end/g,(t=>k[t]))}function E(t){const e=w(t);return[L(t),e,L(e)]}function S(t,e,n,o){const i=a(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(u(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(L)))),r}async function T(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=u(n),s=a(n),c="x"===d(n),f=["left","top"].includes(l)?-1:1,h=r&&c?-1:1,p="function"==typeof e?e(t):e;let{mainAxis:m,crossAxis:g,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return s&&"number"==typeof y&&(g="end"===s?-1*y:y),c?{x:g*h,y:m*f}:{x:m*f,y:g*h}}const A=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=t,c={x:n,y:o},f=await m(e,a),h=d(u(i)),p=function(t){return"x"===t?"y":"x"}(h);let g=c[h],y=c[p];if(r){const t="y"===h?"bottom":"right";g=v(g+f["y"===h?"top":"left"],g,g-f[t])}if(l){const t="y"===p?"bottom":"right";y=v(y+f["y"===p?"top":"left"],y,y-f[t])}const b=s.fn({...e,[h]:g,[p]:y});return{...b,data:{x:b.x-n,y:b.y-o}}}}};function O(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function N(t){return O(t).getComputedStyle(t)}function C(t){return t instanceof O(t).Node}function R(t){return C(t)?(t.nodeName||"").toLowerCase():""}let H;function M(){if(H)return H;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(H=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),H):navigator.userAgent}function P(t){return t instanceof O(t).HTMLElement}function D(t){return t instanceof O(t).Element}function F(t){return"undefined"!=typeof ShadowRoot&&(t instanceof O(t).ShadowRoot||t instanceof ShadowRoot)}function _(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function W(t){return["table","td","th"].includes(R(t))}function j(t){const e=/firefox/i.test(M()),n=N(t),o=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!o&&"none"!==o||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function B(){return/^((?!chrome|android).)*safari/i.test(M())}function z(t){return["html","body","#document"].includes(R(t))}const $=Math.min,q=Math.max,I=Math.round;function V(t){const e=N(t);let n=parseFloat(e.width),o=parseFloat(e.height);const i=P(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,s=I(n)!==r||I(o)!==l;return s&&(n=r,o=l),{width:n,height:o,fallback:s}}function J(t){return D(t)?t:t.contextElement}const K={x:1,y:1};function U(t){const e=J(t);if(!P(e))return K;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=V(e);let l=(r?I(n.width):n.width)/o,s=(r?I(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}function Y(t,e,n,o){var i,r;void 0===e&&(e=!1),void 0===n&&(n=!1);const l=t.getBoundingClientRect(),s=J(t);let a=K;e&&(o?D(o)&&(a=U(o)):a=U(t));const c=s?O(s):window,u=B()&&n;let d=(l.left+(u&&(null==(i=c.visualViewport)?void 0:i.offsetLeft)||0))/a.x,f=(l.top+(u&&(null==(r=c.visualViewport)?void 0:r.offsetTop)||0))/a.y,h=l.width/a.x,m=l.height/a.y;if(s){const t=O(s),e=o&&D(o)?O(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=U(n),e=n.getBoundingClientRect(),o=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(o.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(o.paddingTop))*t.y,d*=t.x,f*=t.y,h*=t.x,m*=t.y,d+=e.x,f+=e.y,n=O(n).frameElement}}return p({width:h,height:m,x:d,y:f})}function Z(t){return((C(t)?t.ownerDocument:t.document)||window.document).documentElement}function X(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){return Y(Z(t)).left+X(t).scrollLeft}function Q(t){if("html"===R(t))return t;const e=t.assignedSlot||t.parentNode||F(t)&&t.host||Z(t);return F(e)?e.host:e}function tt(t){const e=Q(t);return z(e)?e.ownerDocument.body:P(e)&&_(e)?e:tt(e)}function et(t,e){var n;void 0===e&&(e=[]);const o=tt(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=O(o);return i?e.concat(r,r.visualViewport||[],_(o)?o:[]):e.concat(o,et(o))}function nt(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=O(t),o=Z(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,s=0,a=0;if(i){r=i.width,l=i.height;const t=B();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,a=i.offsetTop)}return{width:r,height:l,x:s,y:a}}(t,n);else if("document"===e)o=function(t){const e=Z(t),n=X(t),o=t.ownerDocument.body,i=q(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=q(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+G(t);const s=-n.scrollTop;return"rtl"===N(o).direction&&(l+=q(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:s}}(Z(t));else if(D(e))o=function(t,e){const n=Y(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=P(t)?U(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n={...e};if(B()){var i,r;const e=O(t);n.x-=(null==(i=e.visualViewport)?void 0:i.offsetLeft)||0,n.y-=(null==(r=e.visualViewport)?void 0:r.offsetTop)||0}o=n}return p(o)}function ot(t,e){const n=e.get(t);if(n)return n;let o=et(t).filter((t=>D(t)&&"body"!==R(t))),i=null;const r="fixed"===N(t).position;let l=r?Q(t):t;for(;D(l)&&!z(l);){const t=N(l),e=j(l);"fixed"===t.position?i=null:(r?e||i:e||"static"!==t.position||!i||!["absolute","fixed"].includes(i.position))?i=t:o=o.filter((t=>t!==l)),l=Q(l)}return e.set(t,o),o}function it(t,e){return P(t)&&"fixed"!==N(t).position?e?e(t):t.offsetParent:null}function rt(t,e){const n=O(t);if(!P(t))return n;let o=it(t,e);for(;o&&W(o)&&"static"===N(o).position;)o=it(o,e);return o&&("html"===R(o)||"body"===R(o)&&"static"===N(o).position&&!j(o))?n:o||function(t){let e=Q(t);for(;P(e)&&!z(e);){if(j(e))return e;e=Q(e)}return null}(t)||n}function lt(t,e,n){const o=P(e),i=Z(e),r=Y(t,!0,"fixed"===n,e);let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==R(e)||_(i))&&(l=X(e)),P(e)){const t=Y(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=G(i));return{x:r.left+l.scrollLeft-s.x,y:r.top+l.scrollTop-s.y,width:r.width,height:r.height}}const st={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?ot(e,this._c):[].concat(n),o],l=r[0],s=r.reduce(((t,n)=>{const o=nt(e,n,i);return t.top=q(o.top,t.top),t.right=$(o.right,t.right),t.bottom=$(o.bottom,t.bottom),t.left=q(o.left,t.left),t}),nt(e,l,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=P(n),r=Z(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},s={x:1,y:1};const a={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==R(n)||_(r))&&(l=X(n)),P(n))){const t=Y(n);s=U(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-l.scrollLeft*s.x+a.x,y:e.y*s.y-l.scrollTop*s.y+a.y}},isElement:D,getDimensions:function(t){return V(t)},getOffsetParent:rt,getDocumentElement:Z,getScale:U,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||rt,r=this.getDimensions;return{reference:lt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===N(t).direction},at=(t,e,n)=>{const o=new Map,i={platform:st,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,s=r.filter(Boolean),a=await(null==l.isRTL?void 0:l.isRTL(e));let c=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=f(c,o,a),h=o,p={},m=0;for(let g=0;g<s.length;g++){const{name:n,fn:r}=s[g],{x:y,y:v,data:b,reset:w}=await r({x:u,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:p,rects:c,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=v?v:d,p={...p,[n]:{...p[n],...b}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(h=w.placement),w.rects&&(c=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),({x:u,y:d}=f(c,h,a))),g=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:p}})(t,e,{...i,platform:r})},ct=class{constructor(t){(0,o.r)(this,t),this.alignTooltip=t=>{var e,n,o;if("test"!==s.p&&this.previousSibling){const i=this.previousSibling;if(this.tooltipElement){const r=this.tooltipElement,l=this.arrowElement,s=[(o=null!==(e=null==l?void 0:l.offsetHeight)&&void 0!==e?e:10,void 0===o&&(o=0),{name:"offset",options:o,async fn(t){const{x:e,y:n}=t,i=await T(t,o);return{x:e+i.x,y:n+i.y,data:i}}}),(void 0===n&&(n={}),{name:"flip",options:n,async fn(t){var e;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:s,elements:a}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=n,v=u(o),b=u(l)===l,k=await(null==s.isRTL?void 0:s.isRTL(a.floating)),L=f||(b||!g?[w(l)]:E(l));f||"none"===p||L.push(...S(l,g,p,k));const T=[l,...L],A=await m(t,y),O=[];let N=(null==(e=i.flip)?void 0:e.overflows)||[];if(c&&O.push(A[v]),d){const{main:t,cross:e}=x(o,r,k);O.push(A[t],A[e])}if(N=[...N,{placement:o,overflows:O}],!O.every((t=>t<=0))){var C,R;const t=((null==(C=i.flip)?void 0:C.index)||0)+1,e=T[t];if(e)return{data:{index:t,overflows:N},reset:{placement:e}};let n=null==(R=N.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:R.placement;if(!n)switch(h){case"bestFit":{var H;const t=null==(H=N.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:H[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}),A()];l&&s.push((t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:i,y:r,placement:l,rects:s,platform:u,elements:f}=e;if(null==n)return{};const p=h(o),m={x:i,y:r},g=d(l),y=c(g),b=await u.getDimensions(n),w="y"===g,x=w?"top":"left",k=w?"bottom":"right",L=w?"clientHeight":"clientWidth",E=s.reference[y]+s.reference[g]-m[g]-s.floating[y],S=m[g]-s.reference[g],T=await(null==u.getOffsetParent?void 0:u.getOffsetParent(n));let A=T?T[L]:0;A&&await(null==u.isElement?void 0:u.isElement(T))||(A=f.floating[L]||s.floating[y]);const O=E/2-S/2,N=p[x],C=A-b[y]-p[k],R=A/2-b[y]/2+O,H=v(N,R,C),M=null!=a(l)&&R!=H&&s.reference[y]/2-(R<N?p[x]:p[k])-b[y]/2<0;return{[g]:m[g]-(M?R<N?N-R:C-R:0),data:{[g]:H,centerOffset:R-H}}}}))({element:l})),at(i,r,{placement:this.state._align,middleware:s}).then((({x:e,y:n,middlewareData:o,placement:i})=>{var s,a;const c=r.style.left,u=r.style.top;Object.assign(r.style,{left:`${e}px`,top:`${n}px`}),l&&((null===(s=o.arrow)||void 0===s?void 0:s.x)?Object.assign(l.style,{left:`${o.arrow.x}px`,top:"bottom"===i?-l.offsetHeight/2+"px":"",bottom:"top"===i?-l.offsetHeight/2+"px":""}):(null===(a=o.arrow)||void 0===a?void 0:a.y)&&Object.assign(l.style,{left:"right"===i?-l.offsetWidth/2+"px":"",right:"left"===i?-l.offsetWidth/2+"px":"",top:`${o.arrow.y}px`})),c!==r.style.left||u!==r.style.top?this.alignTooltip(t):"function"==typeof t&&t()}))}}},this.showTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","block"),(0,r.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip((()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.showTooltip))})))},this.hideTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.showTooltip))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,r.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,r.n)(),_label:"\u2026"}}render(){return(0,o.h)(o.H,{ref:this.catchHostElement},""!==this.state._label&&(0,o.h)("div",{id:"floating",ref:this.catchTooltipElement},(0,o.h)("div",{id:"arrow",ref:this.catchArrowElement}),(0,o.h)("kol-badge",{id:this.state._id,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label})))}validateAlign(t){(0,i.w)(this,"_align",t)}validateId(t){(0,l.w)(this,"_id",t)}validateLabel(t){(0,l.w)(this,"_label",t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement)}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};ct.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip #floating{animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;box-sizing:border-box;display:none;position:absolute;visibility:hidden}kol-tooltip #arrow{background:#333;height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip kol-badge{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"}},31372:(t,e,n)=>{n.d(e,{K:()=>nt,a:()=>H,b:()=>M,c:()=>S,d:()=>F,e:()=>D,f:()=>C,g:()=>N,h:()=>I,i:()=>tt,j:()=>V,k:()=>J,l:()=>et,m:()=>B,n:()=>X,o:()=>O,p:()=>q,q:()=>K,r:()=>c,s:()=>R,t:()=>G,u:()=>z,w:()=>P});var o=n(59419),i=n(19250),r=n(4629);const l=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},s=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const n=new Set;l(n,e.querySelectorAll(t));const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const i=o[e].shadowRoot;l(n,s(t,"object"==typeof i&&null!==i?i:o[e]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},a=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let n=e.querySelector(t);if(null===n){const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const i=o[e].shadowRoot;if(n=a(t,"object"==typeof i&&null!==i?i:o[e]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=m,u=m,d=function(t){var e=g(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},f=function(t){var e=g(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},h=function(t){3==(e=g(t)).length&&e.push(255);var e,n=255==e[3],o=y(e[0]),i=y(e[1]),r=y(e[2]),l=function(t,e,n,o){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(t)&&-1!=i.indexOf(e)&&-1!=i.indexOf(n)&&-1!=i.indexOf(o)}(o,i,r,e=y(Math.round(e[3])));return n?l?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0):"#"+o+i+r:l?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0)+e.charAt(0):"#"+o+i+r+e},p=function(t){var e=g(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function m(t){var e=g(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function g(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),n=e.length;if(3==n||4==n){var o=v(e[0]),i=v(e[1]),r=v(e[2]),l=3==n?255:v(e[3]);if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(l))return;return[o,i,r,l]}}(t)||function(t){var e=t.replace(/^#/,""),n=e.length;if(6==n||8==n){var o=v(e.slice(0,2)),i=v(e.slice(2,4)),r=v(e.slice(4,6)),l=6==n?255:v(e.slice(6,8));if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(l))return;return[o,i,r,l]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=b(e[0],!0),o=b(e[1],!0),i=b(e[2],!0);if(-1!=n&&-1!=o&&-1!=i)return[n,o,i,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=b(e[0],!0),o=b(e[1],!0),i=b(e[2],!0),r=b(255*e[3]);if(-1!=n&&-1!=o&&-1!=i&&-1!=r)return[n,o,i,r]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=b(null!=t.r?t.r:null!=t.red?t.red:0,!0),n=b(null!=t.g?t.g:null!=t.green?t.green:0,!0),o=b(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),i=b(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=n&&-1!=o&&-1!=i)return[e,n,o,i]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=b(t[0],!0),n=b(t[1],!0),o=b(t[2],!0),i=b(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=n&&-1!=o&&-1!=i)return[e,n,o,i]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function y(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function v(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function b(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}c.arr=u,c.obj=d,c.css=f,c.hex=h,c.num=p;var w=1/12.92;function x(t){return Math.pow((t+.055)/1.055,2.4)}function k(t){var e=t[0]/255,n=t[1]/255,o=t[2]/255;return.2126*(e<=.03928?e*w:x(e))+.7152*(n<=.03928?n*w:x(n))+.0722*(o<=.03928?o*w:x(o))}function L(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var n=parseInt(t,16);return[n>>16,n>>8&255,255&n,e]}function E(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(k(t),k(e))}function S(t,e){return E(L(t),L(e))}function T(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const A=/\[object Object\]/,O=(t,e)=>{"string"==typeof t&&A.test(t)||e()},N=(t,e)=>{"string"==typeof t&&""===t||e()},C=(t,e)=>{(0,i.b)()&&(i.L.debug([t,e]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},R=(t,e,n,o={})=>{var i,r;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==n&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof o.afterPatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(r=t.nextHooks.get(e))||void 0===r||r.set("beforePatch",o.beforePatch)),t.nextState.set(e,n),(t=>{var e,n,o;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,n)=>{var o;const i=e.get("beforePatch");"function"==typeof i&&i(null===(o=t.nextState)||void 0===o?void 0:o.get(n),t.nextState,t,n)})),(null===(n=t.nextState)||void 0===n?void 0:n.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(o=t.nextHooks)||void 0===o||o.forEach(((e,n)=>{const o=e.get("afterPatch");"function"==typeof o&&o(t.state[n],t.state,t,n)}))),delete t.nextHooks})(t))};function H(t,e,n,i,r,l={}){n(r)?R(t,e,r,l.hooks):null!=r||l.required?(l.required||i.add(null),((t,e,n,i)=>{(0,o.d)(`[${t.constructor.name}] Der Property-Wert (${n}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(t,e,r,i)):R(t,e,l.defaultValue,l.hooks)}const M=(t,e,n,o)=>{H(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),n,o)},P=(t,e,n,o={})=>{const i="number"==typeof o.minLength?null==o?void 0:o.minLength:0;H(t,e,(t=>"string"==typeof t&&t.length>=i&&(void 0===(null==o?void 0:o.maxLength)||t.length<=o.maxLength)),new Set(["String"]),n,o)},D=(t,e,n,o)=>{H(t,e,(t=>"number"==typeof t&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&t>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&t<=o.max)),new Set(["Number"]),n,o)},F=(t,e,n,o,r=(t=>t==t),l={})=>{N(o,(()=>{O(o,(()=>{void 0===o&&(o=[]);try{try{o=q(o)}catch(t){}if(Array.isArray(o)){const s=o.find((t=>!n(t)));void 0===s&&r(o)?R(t,e,o,l.hooks):O(s,(()=>{throw i.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(o,(()=>{throw i.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){i.L.debug(t)}}))}))},_=/^(true|false)$/,W=/^-?(0|[1-9]\d*)$/,j=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,B=t=>{const e=typeof t,n=`${t}`;if("string"==typeof t)if(_.test(t))t="true"===t;else if(W.test(t))t=parseInt(t);else if(j.test(t))t=parseFloat(t);else if($.test(t))try{t=q(t)}catch(t){}return e!==typeof t&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},z=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw i.L.warn(["stringifyJson",t]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},$=/^[{[]/,q=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if($.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){i.L.warn(["parseJson",t]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},I=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,V=t=>"string"==typeof t?t:I(t),J=(t,e)=>a(t,e||(0,i.g)()),K=(t,e)=>s(t,e||(0,i.g)());let U=null;const Y=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},U),Z=/(\d+, ){3}0\)/,X=(t,e=Y())=>{const n=getComputedStyle(t),o=Z.test(n.backgroundColor)?e.backgroundColor:c.hex(n.backgroundColor),r=Z.test(n.color)?e.color:c.hex(n.color),l=S(o,r),s={backgroundColor:o,color:r,domNode:t,level:T(l),score:l};return l<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},G=(t,e=Y())=>{e.domNode instanceof HTMLElement&&(e=X(e.domNode,e));const n=e.domNode.querySelector(t);if(null===n){const n=e.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(e.domNode=n[o],null===(e=G(t,e)).domNode);o++);return e}return X(n,e)},Q=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),t.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${e}`;e=t,t=n}if("string"==typeof t){const n=J(t,e);n instanceof HTMLElement?Q(n):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class et{static queryHtmlElementColors(t,e,n=!1,o=!0){let r=null;if(!0===n||!1===et.executionLock)if(!1===n&&(et.cache.clear(),et.cache.set(e.domNode,e),et.executionLock=!0,!0===o&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)r=e;else{const n=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)n.add(t[e])}const o=e.domNode;if("function"==typeof o.assignedNodes){const t=o.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&n.add(t[e])}const i=e.domNode.children;for(let t=0;t<i.length;t++)n.add(i[t]);const l=Array.from(n);for(let s=0;s<l.length;s++){let n=et.cache.get(l[s]);void 0===n&&(n=X(l[s],e)),et.cache.set(l[s],n);const o=et.queryHtmlElementColors(t,n,!0,!1);if(null!==o){r=o;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${et.cache.size} DOM elements are analysed).`),et.executionLock=!1,et.cache.clear()),r}}et.executionLock=!1,et.cache=new Map;class nt{}nt.patchTheme=r.p,nt.patchThemeTag=r.a,nt.querySelector=J,nt.querySelectorAll=K,nt.scrollByHTMLElement=Q,nt.scrollBySelector=tt,nt.stringifyJson=z}}]);