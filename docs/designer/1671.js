/*! For license information please see 1671.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1671],{61383:(t,e,i)=>{i.d(e,{w:()=>o});var n=i(16754);const o=(t,e,i)=>{(0,n.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},81671:(t,e,i)=>{i.r(e),i.d(e,{kol_tooltip:()=>yt});var n=i(99459),o=i(61383),l=i(56420),r=i(16754),s=i(52573),a=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(t,e,i)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,m=(t,e)=>{for(var i in e||(e={}))d.call(e,i)&&h(t,i,e[i]);if(f)for(var i of f(e))p.call(e,i)&&h(t,i,e[i]);return t},y=(t,e)=>c(t,u(e)),g=(t,e)=>{var i={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&f)for(var n of f(t))e.indexOf(n)<0&&p.call(t,n)&&(i[n]=t[n]);return i},v=(t,e,i)=>new Promise(((n,o)=>{var l=t=>{try{s(i.next(t))}catch(t){o(t)}},r=t=>{try{s(i.throw(t))}catch(t){o(t)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(l,r);s((i=i.apply(t,e)).next())}));function x(t){return t.split("-")[1]}function b(t){return"y"===t?"height":"width"}function w(t){return t.split("-")[0]}function E(t){return["top","bottom"].includes(w(t))?"x":"y"}function L(t,e,i){let{reference:n,floating:o}=t;const l=n.x+n.width/2-o.width/2,r=n.y+n.height/2-o.height/2,s=E(e),a=b(s),c=n[a]/2-o[a]/2,u="x"===s;let f;switch(w(e)){case"top":f={x:l,y:n.y-o.height};break;case"bottom":f={x:l,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:r};break;case"left":f={x:n.x-o.width,y:r};break;default:f={x:n.x,y:n.y}}switch(x(e)){case"start":f[s]-=c*(i&&u?-1:1);break;case"end":f[s]+=c*(i&&u?-1:1)}return f}function T(t){return"number"!=typeof t?function(t){return m({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function k(t){return y(m({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function O(t,e){return v(this,null,(function*(){var i;void 0===e&&(e={});const{x:n,y:o,platform:l,rects:r,elements:s,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:p=0}=e,h=T(p),g=s[d?"floating"===f?"reference":"floating":f],v=k(yield l.getClippingRect({element:null==(i=yield null==l.isElement?void 0:l.isElement(g))||i?g:g.contextElement||(yield null==l.getDocumentElement?void 0:l.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:a})),x="floating"===f?y(m({},r.floating),{x:n,y:o}):r.reference,b=yield null==l.getOffsetParent?void 0:l.getOffsetParent(s.floating),w=(yield null==l.isElement?void 0:l.isElement(b))&&(yield null==l.getScale?void 0:l.getScale(b))||{x:1,y:1},E=k(l.convertOffsetParentRelativeRectToViewportRelativeRect?yield l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:b,strategy:a}):x);return{top:(v.top-E.top+h.top)/w.y,bottom:(E.bottom-v.bottom+h.bottom)/w.y,left:(v.left-E.left+h.left)/w.x,right:(E.right-v.right+h.right)/w.x}}))}const A=Math.min,R=Math.max;function C(t,e,i){return R(t,A(e,i))}const _=t=>({name:"arrow",options:t,fn(e){return v(this,null,(function*(){const{element:i,padding:n=0}=t||{},{x:o,y:l,placement:r,rects:s,platform:a,elements:c}=e;if(null==i)return{};const u=T(n),f={x:o,y:l},d=E(r),p=b(d),h=yield a.getDimensions(i),m="y"===d,y=m?"top":"left",g=m?"bottom":"right",v=m?"clientHeight":"clientWidth",w=s.reference[p]+s.reference[d]-f[d]-s.floating[p],L=f[d]-s.reference[d],k=yield null==a.getOffsetParent?void 0:a.getOffsetParent(i);let O=k?k[v]:0;O&&(yield null==a.isElement?void 0:a.isElement(k))||(O=c.floating[v]||s.floating[p]);const A=w/2-L/2,R=u[y],_=O-h[p]-u[g],P=O/2-h[p]/2+A,F=C(R,P,_),S=null!=x(r)&&P!=F&&s.reference[p]/2-(P<R?u[y]:u[g])-h[p]/2<0;return{[d]:f[d]-(S?P<R?R-P:_-P:0),data:{[d]:F,centerOffset:P-F}}}))}}),P={left:"right",right:"left",bottom:"top",top:"bottom"};function F(t){return t.replace(/left|right|bottom|top/g,(t=>P[t]))}const S={start:"end",end:"start"};function D(t){return t.replace(/start|end/g,(t=>S[t]))}const H=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn(e){return v(this,null,(function*(){const{x:i,y:n,placement:o}=e,l=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}}}=l,c=g(l,["mainAxis","crossAxis","limiter"]),u={x:i,y:n},f=yield O(e,c),d=E(w(o)),p=function(t){return"x"===t?"y":"x"}(d);let h=u[d],v=u[p];if(r){const t="y"===d?"bottom":"right";h=C(h+f["y"===d?"top":"left"],h,h-f[t])}if(s){const t="y"===p?"bottom":"right";v=C(v+f["y"===p?"top":"left"],v,v-f[t])}const x=a.fn(y(m({},e),{[d]:h,[p]:v}));return y(m({},x),{data:{x:x.x-i,y:x.y-n}})}))}}};function W(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function B(t){return W(t).getComputedStyle(t)}function j(t){return t instanceof W(t).Node}function V(t){return j(t)?(t.nodeName||"").toLowerCase():""}let z;function M(){if(z)return z;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(z=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),z):navigator.userAgent}function I(t){return t instanceof W(t).HTMLElement}function N(t){return t instanceof W(t).Element}function $(t){return"undefined"!=typeof ShadowRoot&&(t instanceof W(t).ShadowRoot||t instanceof ShadowRoot)}function X(t){const{overflow:e,overflowX:i,overflowY:n,display:o}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+i)&&!["inline","contents"].includes(o)}function Y(t){return["table","td","th"].includes(V(t))}function q(t){const e=/firefox/i.test(M()),i=B(t),n=i.backdropFilter||i.WebkitBackdropFilter;return"none"!==i.transform||"none"!==i.perspective||!!n&&"none"!==n||e&&"filter"===i.willChange||e&&!!i.filter&&"none"!==i.filter||["transform","perspective"].some((t=>i.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=i.contain;return null!=e&&e.includes(t)}))}function G(){return/^((?!chrome|android).)*safari/i.test(M())}function J(t){return["html","body","#document"].includes(V(t))}const K=Math.min,Q=Math.max,U=Math.round;function Z(t){const e=B(t);let i=parseFloat(e.width),n=parseFloat(e.height);const o=I(t),l=o?t.offsetWidth:i,r=o?t.offsetHeight:n,s=U(i)!==l||U(n)!==r;return s&&(i=l,n=r),{width:i,height:n,fallback:s}}function tt(t){return N(t)?t:t.contextElement}const et={x:1,y:1};function it(t){const e=tt(t);if(!I(e))return et;const i=e.getBoundingClientRect(),{width:n,height:o,fallback:l}=Z(e);let r=(l?U(i.width):i.width)/n,s=(l?U(i.height):i.height)/o;return r&&Number.isFinite(r)||(r=1),s&&Number.isFinite(s)||(s=1),{x:r,y:s}}function nt(t,e,i,n){var o,l;void 0===e&&(e=!1),void 0===i&&(i=!1);const r=t.getBoundingClientRect(),s=tt(t);let a=et;e&&(n?N(n)&&(a=it(n)):a=it(t));const c=s?W(s):window,u=G()&&i;let f=(r.left+(u&&(null==(o=c.visualViewport)?void 0:o.offsetLeft)||0))/a.x,d=(r.top+(u&&(null==(l=c.visualViewport)?void 0:l.offsetTop)||0))/a.y,p=r.width/a.x,h=r.height/a.y;if(s){const t=W(s),e=n&&N(n)?W(n):n;let i=t.frameElement;for(;i&&n&&e!==t;){const t=it(i),e=i.getBoundingClientRect(),n=getComputedStyle(i);e.x+=(i.clientLeft+parseFloat(n.paddingLeft))*t.x,e.y+=(i.clientTop+parseFloat(n.paddingTop))*t.y,f*=t.x,d*=t.y,p*=t.x,h*=t.y,f+=e.x,d+=e.y,i=W(i).frameElement}}return k({width:p,height:h,x:f,y:d})}function ot(t){return((j(t)?t.ownerDocument:t.document)||window.document).documentElement}function lt(t){return N(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function rt(t){return nt(ot(t)).left+lt(t).scrollLeft}function st(t){if("html"===V(t))return t;const e=t.assignedSlot||t.parentNode||$(t)&&t.host||ot(t);return $(e)?e.host:e}function at(t){const e=st(t);return J(e)?e.ownerDocument.body:I(e)&&X(e)?e:at(e)}function ct(t,e){var i;void 0===e&&(e=[]);const n=at(t),o=n===(null==(i=t.ownerDocument)?void 0:i.body),l=W(n);return o?e.concat(l,l.visualViewport||[],X(n)?n:[]):e.concat(n,ct(n))}function ut(t,e,i){let n;if("viewport"===e)n=function(t,e){const i=W(t),n=ot(t),o=i.visualViewport;let l=n.clientWidth,r=n.clientHeight,s=0,a=0;if(o){l=o.width,r=o.height;const t=G();(!t||t&&"fixed"===e)&&(s=o.offsetLeft,a=o.offsetTop)}return{width:l,height:r,x:s,y:a}}(t,i);else if("document"===e)n=function(t){const e=ot(t),i=lt(t),n=t.ownerDocument.body,o=Q(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),l=Q(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+rt(t);const s=-i.scrollTop;return"rtl"===B(n).direction&&(r+=Q(e.clientWidth,n.clientWidth)-o),{width:o,height:l,x:r,y:s}}(ot(t));else if(N(e))n=function(t,e){const i=nt(t,!0,"fixed"===e),n=i.top+t.clientTop,o=i.left+t.clientLeft,l=I(t)?it(t):{x:1,y:1};return{width:t.clientWidth*l.x,height:t.clientHeight*l.y,x:o*l.x,y:n*l.y}}(e,i);else{const i=m({},e);if(G()){var o,l;const e=W(t);i.x-=(null==(o=e.visualViewport)?void 0:o.offsetLeft)||0,i.y-=(null==(l=e.visualViewport)?void 0:l.offsetTop)||0}n=i}return k(n)}function ft(t,e){const i=e.get(t);if(i)return i;let n=ct(t).filter((t=>N(t)&&"body"!==V(t))),o=null;const l="fixed"===B(t).position;let r=l?st(t):t;for(;N(r)&&!J(r);){const t=B(r),e=q(r);"fixed"===t.position?o=null:(l?e||o:e||"static"!==t.position||!o||!["absolute","fixed"].includes(o.position))?o=t:n=n.filter((t=>t!==r)),r=st(r)}return e.set(t,n),n}function dt(t,e){return I(t)&&"fixed"!==B(t).position?e?e(t):t.offsetParent:null}function pt(t,e){const i=W(t);if(!I(t))return i;let n=dt(t,e);for(;n&&Y(n)&&"static"===B(n).position;)n=dt(n,e);return n&&("html"===V(n)||"body"===V(n)&&"static"===B(n).position&&!q(n))?i:n||function(t){let e=st(t);for(;I(e)&&!J(e);){if(q(e))return e;e=st(e)}return null}(t)||i}function ht(t,e,i){const n=I(e),o=ot(e),l=nt(t,!0,"fixed"===i,e);let r={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(n||!n&&"fixed"!==i)if(("body"!==V(e)||X(o))&&(r=lt(e)),I(e)){const t=nt(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else o&&(s.x=rt(o));return{x:l.left+r.scrollLeft-s.x,y:l.top+r.scrollTop-s.y,width:l.width,height:l.height}}const mt={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:n,strategy:o}=t;const l=[..."clippingAncestors"===i?ft(e,this._c):[].concat(i),n],r=l[0],s=l.reduce(((t,i)=>{const n=ut(e,i,o);return t.top=Q(n.top,t.top),t.right=K(n.right,t.right),t.bottom=K(n.bottom,t.bottom),t.left=Q(n.left,t.left),t}),ut(e,r,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:n}=t;const o=I(i),l=ot(i);if(i===l)return e;let r={scrollLeft:0,scrollTop:0},s={x:1,y:1};const a={x:0,y:0};if((o||!o&&"fixed"!==n)&&(("body"!==V(i)||X(l))&&(r=lt(i)),I(i))){const t=nt(i);s=it(i),a.x=t.x+i.clientLeft,a.y=t.y+i.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-r.scrollLeft*s.x+a.x,y:e.y*s.y-r.scrollTop*s.y+a.y}},isElement:N,getDimensions:function(t){return Z(t)},getOffsetParent:pt,getDocumentElement:ot,getScale:it,getElementRects(t){return v(this,null,(function*(){let{reference:e,floating:i,strategy:n}=t;const o=this.getOffsetParent||pt,l=this.getDimensions;return{reference:ht(e,yield o(i),n),floating:m({x:0,y:0},yield l(i))}}))},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===B(t).direction},yt=class{constructor(t){(0,n.r)(this,t),this.alignTooltip=t=>{var e,i,n;if("test"!==s.p&&this.previousSibling){const o=this.previousSibling;if(this.tooltipElement){const l=this.tooltipElement,r=this.arrowElement,s=[(n=null!==(e=null==r?void 0:r.offsetHeight)&&void 0!==e?e:10,void 0===n&&(n=0),{name:"offset",options:n,fn(t){return v(this,null,(function*(){const{x:e,y:i}=t,o=yield function(t,e){return v(this,null,(function*(){const{placement:i,platform:n,elements:o}=t,l=yield null==n.isRTL?void 0:n.isRTL(o.floating),r=w(i),s=x(i),a="x"===E(i),c=["left","top"].includes(r)?-1:1,u=l&&a?-1:1,f="function"==typeof e?e(t):e;let{mainAxis:d,crossAxis:p,alignmentAxis:h}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:m({mainAxis:0,crossAxis:0,alignmentAxis:null},f);return s&&"number"==typeof h&&(p="end"===s?-1*h:h),a?{x:p*u,y:d*c}:{x:d*c,y:p*u}}))}(t,n);return{x:e+o.x,y:i+o.y,data:o}}))}}),(void 0===i&&(i={}),{name:"flip",options:i,fn(t){return v(this,null,(function*(){var e;const{placement:n,middlewareData:o,rects:l,initialPlacement:r,platform:s,elements:a}=t,c=i,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0}=c,y=g(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),v=w(n),L=w(r)===r,T=yield null==s.isRTL?void 0:s.isRTL(a.floating),k=d||(L||!m?[F(r)]:function(t){const e=F(t);return[D(t),e,D(e)]}(r));d||"none"===h||k.push(...function(t,e,i,n){const o=x(t);let l=function(t,e,i){const n=["left","right"],o=["right","left"],l=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return i?e?o:n:e?n:o;case"left":case"right":return e?l:r;default:return[]}}(w(t),"start"===i,n);return o&&(l=l.map((t=>t+"-"+o)),e&&(l=l.concat(l.map(D)))),l}(r,m,h,T));const A=[r,...k],R=yield O(t,y),C=[];let _=(null==(e=o.flip)?void 0:e.overflows)||[];if(u&&C.push(R[v]),f){const{main:t,cross:e}=function(t,e,i){void 0===i&&(i=!1);const n=x(t),o=E(t),l=b(o);let r="x"===o?n===(i?"end":"start")?"right":"left":"start"===n?"bottom":"top";return e.reference[l]>e.floating[l]&&(r=F(r)),{main:r,cross:F(r)}}(n,l,T);C.push(R[t],R[e])}if(_=[..._,{placement:n,overflows:C}],!C.every((t=>t<=0))){var P,S;const t=((null==(P=o.flip)?void 0:P.index)||0)+1,e=A[t];if(e)return{data:{index:t,overflows:_},reset:{placement:e}};let i=null==(S=_.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:S.placement;if(!i)switch(p){case"bestFit":{var H;const t=null==(H=_.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:H[0];t&&(i=t);break}case"initialPlacement":i=r}if(n!==i)return{reset:{placement:i}}}return{}}))}}),H()];r&&s.push(_({element:r})),((t,e,i)=>{const n=new Map,o=m({platform:mt},i),l=y(m({},o.platform),{_c:n});return((t,e,i)=>v(void 0,null,(function*(){const{placement:n="bottom",strategy:o="absolute",middleware:l=[],platform:r}=i,s=l.filter(Boolean),a=yield null==r.isRTL?void 0:r.isRTL(e);let c=yield r.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:f}=L(c,n,a),d=n,p={},h=0;for(let i=0;i<s.length;i++){const{name:l,fn:g}=s[i],{x:v,y:x,data:b,reset:w}=yield g({x:u,y:f,initialPlacement:n,placement:d,strategy:o,middlewareData:p,rects:c,platform:r,elements:{reference:t,floating:e}});u=null!=v?v:u,f=null!=x?x:f,p=y(m({},p),{[l]:m(m({},p[l]),b)}),w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(c=!0===w.rects?yield r.getElementRects({reference:t,floating:e,strategy:o}):w.rects),({x:u,y:f}=L(c,d,a))),i=-1)}return{x:u,y:f,placement:d,strategy:o,middlewareData:p}})))(t,e,y(m({},o),{platform:l}))})(o,l,{placement:this.state._align,middleware:s}).then((({x:e,y:i,middlewareData:n,placement:o})=>{var s,a;const c=l.style.left,u=l.style.top;Object.assign(l.style,{left:`${e}px`,top:`${i}px`}),r&&((null===(s=n.arrow)||void 0===s?void 0:s.x)?Object.assign(r.style,{left:`${n.arrow.x}px`,top:"bottom"===o?-r.offsetHeight/2+"px":"",bottom:"top"===o?-r.offsetHeight/2+"px":""}):(null===(a=n.arrow)||void 0===a?void 0:a.y)&&Object.assign(r.style,{left:"right"===o?-r.offsetWidth/2+"px":"",right:"left"===o?-r.offsetWidth/2+"px":"",top:`${n.arrow.y}px`})),c!==l.style.left||u!==l.style.top?this.alignTooltip(t):"function"==typeof t&&t()}))}}},this.showTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","block"),(0,l.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip((()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.showTooltip))})))},this.hideTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.showTooltip))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,l.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,l.n)(),_label:"…"}}render(){return(0,n.h)(n.H,{ref:this.catchHostElement},""!==this.state._label&&(0,n.h)("div",{id:"floating",ref:this.catchTooltipElement},(0,n.h)("div",{id:"arrow",ref:this.catchArrowElement}),(0,n.h)("kol-badge",{id:this.state._id,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label})))}validateAlign(t){(0,o.w)(this,"_align",t)}validateId(t){(0,r.w)(this,"_id",t)}validateLabel(t){(0,r.w)(this,"_label",t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement)}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};yt.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip #floating{animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;box-sizing:border-box;display:none;position:absolute;visibility:hidden}kol-tooltip #arrow{background:#333;height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip kol-badge{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"}}}]);