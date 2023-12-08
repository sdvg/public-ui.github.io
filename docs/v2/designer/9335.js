/*! For license information please see 9335.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9335],{13014:(t,e,n)=>{n.d(e,{a:()=>xt,b:()=>gt});var o=n(48125),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,a=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&a(t,n,e[n]);if(c)for(var n of c(e))f.call(e,n)&&a(t,n,e[n]);return t},d=(t,e)=>r(t,l(e)),p=(t,e)=>{var n={};for(var o in t)s.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&c)for(var o of c(t))e.indexOf(o)<0&&f.call(t,o)&&(n[o]=t[o]);return n},m=(t,e,n)=>new Promise(((o,i)=>{var r=t=>{try{c(n.next(t))}catch(t){i(t)}},l=t=>{try{c(n.throw(t))}catch(t){i(t)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(r,l);c((n=n.apply(t,e)).next())}));const h=Math.min,y=Math.max,g=Math.round,x=Math.floor,v=t=>({x:t,y:t}),b={left:"right",right:"left",bottom:"top",top:"bottom"},w={start:"end",end:"start"};function R(t,e,n){return y(t,h(e,n))}function E(t,e){return"function"==typeof t?t(e):t}function O(t){return t.split("-")[0]}function T(t){return t.split("-")[1]}function L(t){return"x"===t?"y":"x"}function A(t){return"y"===t?"height":"width"}function P(t){return["top","bottom"].includes(O(t))?"y":"x"}function S(t){return L(P(t))}function D(t){return t.replace(/start|end/g,(t=>w[t]))}function k(t){return t.replace(/left|right|bottom|top/g,(t=>b[t]))}function C(t){return"number"!=typeof t?function(t){return u({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function F(t){return d(u({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function H(t,e,n){let{reference:o,floating:i}=t;const r=P(e),l=S(e),c=A(l),s=O(e),f="y"===r,a=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,d=o[c]/2-i[c]/2;let p;switch(s){case"top":p={x:a,y:o.y-i.height};break;case"bottom":p={x:a,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-i.width,y:u};break;default:p={x:o.x,y:o.y}}switch(T(e)){case"start":p[l]-=d*(n&&f?-1:1);break;case"end":p[l]+=d*(n&&f?-1:1)}return p}function W(t,e){return m(this,null,(function*(){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:a="viewport",elementContext:p="floating",altBoundary:m=!1,padding:h=0}=E(e,t),y=C(h),g=c[m?"floating"===p?"reference":"floating":p],x=F(yield r.getClippingRect({element:null==(n=yield null==r.isElement?void 0:r.isElement(g))||n?g:g.contextElement||(yield null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:a,strategy:s})),v="floating"===p?d(u({},l.floating),{x:o,y:i}):l.reference,b=yield null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating),w=(yield null==r.isElement?void 0:r.isElement(b))&&(yield null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},R=F(r.convertOffsetParentRelativeRectToViewportRelativeRect?yield r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:b,strategy:s}):v);return{top:(x.top-R.top+y.top)/w.y,bottom:(R.bottom-x.bottom+y.bottom)/w.y,left:(x.left-R.left+y.left)/w.x,right:(R.right-x.right+y.right)/w.x}}))}const j=t=>({name:"arrow",options:t,fn(e){return m(this,null,(function*(){const{x:n,y:o,placement:i,rects:r,platform:l,elements:c,middlewareData:s}=e,{element:f,padding:a=0}=E(t,e)||{};if(null==f)return{};const u=C(a),d={x:n,y:o},p=S(i),m=A(p),y=yield l.getDimensions(f),g="y"===p,x=g?"top":"left",v=g?"bottom":"right",b=g?"clientHeight":"clientWidth",w=r.reference[m]+r.reference[p]-d[p]-r.floating[m],O=d[p]-r.reference[p],L=yield null==l.getOffsetParent?void 0:l.getOffsetParent(f);let P=L?L[b]:0;P&&(yield null==l.isElement?void 0:l.isElement(L))||(P=c.floating[b]||r.floating[m]);const D=w/2-O/2,k=P/2-y[m]/2-1,F=h(u[x],k),H=h(u[v],k),W=F,j=P-y[m]-H,V=P/2-y[m]/2+D,B=R(W,V,j),_=!s.arrow&&null!=T(i)&&V!=B&&r.reference[m]/2-(V<W?F:H)-y[m]/2<0,M=_?V<W?W-V:j-V:0;return{[p]:d[p]-M,data:{[p]:B,centerOffset:V-B+M},reset:_}}))}}),V=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn(e){return m(this,null,(function*(){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:l,platform:c,elements:s}=e,f=E(t,e),{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:y=!0}=f,g=p(f,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),x=O(o),v=O(l)===l,b=yield null==c.isRTL?void 0:c.isRTL(s.floating),w=d||(v||!y?[k(l)]:function(t){const e=k(t);return[D(t),e,D(e)]}(l));d||"none"===h||w.push(...function(t,e,n,o){const i=T(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(O(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(D)))),r}(l,y,h,b));const R=[l,...w],L=yield W(e,g),P=[];let C=(null==(n=i.flip)?void 0:n.overflows)||[];if(a&&P.push(L[x]),u){const t=function(t,e,n){void 0===n&&(n=!1);const o=T(t),i=S(t),r=A(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=k(l)),[l,k(l)]}(o,r,b);P.push(L[t[0]],L[t[1]])}if(C=[...C,{placement:o,overflows:P}],!P.every((t=>t<=0))){var F,H;const t=((null==(F=i.flip)?void 0:F.index)||0)+1,e=R[t];if(e)return{data:{index:t,overflows:C},reset:{placement:e}};let n=null==(H=C.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:H.placement;if(!n)switch(m){case"bestFit":{var j;const t=null==(j=C.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:j[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}))}}},B=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn(e){return m(this,null,(function*(){const{x:n,y:o}=e,i=yield function(t,e){return m(this,null,(function*(){const{placement:n,platform:o,elements:i}=t,r=yield null==o.isRTL?void 0:o.isRTL(i.floating),l=O(n),c=T(n),s="y"===P(n),f=["left","top"].includes(l)?-1:1,a=r&&s?-1:1,d=E(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:u({mainAxis:0,crossAxis:0,alignmentAxis:null},d);return c&&"number"==typeof h&&(m="end"===c?-1*h:h),s?{x:m*a,y:p*f}:{x:p*f,y:m*a}}))}(e,t);return{x:n+i.x,y:o+i.y,data:i}}))}}},_=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn(e){return m(this,null,(function*(){const{x:n,y:o,placement:i}=e,r=E(t,e),{mainAxis:l=!0,crossAxis:c=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}}}=r,f=p(r,["mainAxis","crossAxis","limiter"]),a={x:n,y:o},m=yield W(e,f),h=P(O(i)),y=L(h);let g=a[y],x=a[h];if(l){const t="y"===y?"bottom":"right";g=R(g+m["y"===y?"top":"left"],g,g-m[t])}if(c){const t="y"===h?"bottom":"right";x=R(x+m["y"===h?"top":"left"],x,x-m[t])}const v=s.fn(d(u({},e),{[y]:g,[h]:x}));return d(u({},v),{data:{x:v.x-n,y:v.y-o}})}))}}};function M(t){return $(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function N(t){var e;return null==(e=($(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function $(t){return t instanceof Node||t instanceof z(t).Node}function I(t){return t instanceof Element||t instanceof z(t).Element}function q(t){return t instanceof HTMLElement||t instanceof z(t).HTMLElement}function X(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof z(t).ShadowRoot)}function Y(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=U(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function G(t){return["table","td","th"].includes(M(t))}function J(t){const e=K(),n=U(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function K(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Q(t){return["html","body","#document"].includes(M(t))}function U(t){return z(t).getComputedStyle(t)}function Z(t){return I(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function tt(t){if("html"===M(t))return t;const e=t.assignedSlot||t.parentNode||X(t)&&t.host||N(t);return X(e)?e.host:e}function et(t){const e=tt(t);return Q(e)?t.ownerDocument?t.ownerDocument.body:t.body:q(e)&&Y(e)?e:et(e)}function nt(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=et(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=z(i);return r?e.concat(l,l.visualViewport||[],Y(i)?i:[],l.frameElement&&n?nt(l.frameElement):[]):e.concat(i,nt(i))}function ot(t){const e=U(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=q(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,c=g(n)!==r||g(o)!==l;return c&&(n=r,o=l),{width:n,height:o,$:c}}function it(t){return I(t)?t:t.contextElement}function rt(t){const e=it(t);if(!q(e))return v(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=ot(e);let l=(r?g(n.width):n.width)/o,c=(r?g(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const lt=v(0);function ct(t){const e=z(t);return K()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:lt}function st(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=it(t);let l=v(1);e&&(o?I(o)&&(l=rt(o)):l=rt(t));const c=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==z(t))&&e}(r,n,o)?ct(r):v(0);let s=(i.left+c.x)/l.x,f=(i.top+c.y)/l.y,a=i.width/l.x,u=i.height/l.y;if(r){const t=z(r),e=o&&I(o)?z(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=rt(n),e=n.getBoundingClientRect(),o=U(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;s*=t.x,f*=t.y,a*=t.x,u*=t.y,s+=i,f+=r,n=z(n).frameElement}}return F({width:a,height:u,x:s,y:f})}function ft(t){return st(N(t)).left+Z(t).scrollLeft}function at(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=z(t),o=N(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=K();(!t||t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n);else if("document"===e)o=function(t){const e=N(t),n=Z(t),o=t.ownerDocument.body,i=y(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=y(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+ft(t);const c=-n.scrollTop;return"rtl"===U(o).direction&&(l+=y(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:c}}(N(t));else if(I(e))o=function(t,e){const n=st(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=q(t)?rt(t):v(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=ct(t);o=d(u({},e),{x:e.x-n.x,y:e.y-n.y})}return F(o)}function ut(t,e){const n=tt(t);return!(n===e||!I(n)||Q(n))&&("fixed"===U(n).position||ut(n,e))}function dt(t,e){const n=e.get(t);if(n)return n;let o=nt(t,[],!1).filter((t=>I(t)&&"body"!==M(t))),i=null;const r="fixed"===U(t).position;let l=r?tt(t):t;for(;I(l)&&!Q(l);){const e=U(l),n=J(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||Y(l)&&!n&&ut(t,l))?o=o.filter((t=>t!==l)):i=e,l=tt(l)}return e.set(t,o),o}function pt(t,e,n){const o=q(e),i=N(e),r="fixed"===n,l=st(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const s=v(0);if(o||!o&&!r)if(("body"!==M(e)||Y(i))&&(c=Z(e)),o){const t=st(e,!0,r,e);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=ft(i));return{x:l.left+c.scrollLeft-s.x,y:l.top+c.scrollTop-s.y,width:l.width,height:l.height}}function mt(t,e){return q(t)&&"fixed"!==U(t).position?e?e(t):t.offsetParent:null}function ht(t,e){const n=z(t);if(!q(t))return n;let o=mt(t,e);for(;o&&G(o)&&"static"===U(o).position;)o=mt(o,e);return o&&("html"===M(o)||"body"===M(o)&&"static"===U(o).position&&!J(o))?n:o||function(t){let e=tt(t);for(;q(e)&&!Q(e);){if(J(e))return e;e=tt(e)}return null}(t)||n}const yt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=q(n),r=N(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0},c=v(1);const s=v(0);if((i||!i&&"fixed"!==o)&&(("body"!==M(n)||Y(r))&&(l=Z(n)),q(n))){const t=st(n);c=rt(n),s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+s.x,y:e.y*c.y-l.scrollTop*c.y+s.y}},getDocumentElement:N,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?dt(e,this._c):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=at(e,n,i);return t.top=y(o.top,t.top),t.right=h(o.right,t.right),t.bottom=h(o.bottom,t.bottom),t.left=y(o.left,t.left),t}),at(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:ht,getElementRects:function(t){return m(this,null,(function*(){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||ht,r=this.getDimensions;return{reference:pt(e,yield i(n),o),floating:u({x:0,y:0},yield r(n))}}))},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return ot(t)},getScale:rt,isElement:I,isRTL:function(t){return"rtl"===U(t).direction}};function gt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,f=it(t),a=i||r?[...f?nt(f):[],...nt(e)]:[];a.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const p=f&&c?function(t,e){let n,o=null;const i=N(t);function r(){clearTimeout(n),o&&o.disconnect(),o=null}return function l(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),r();const{left:f,top:a,width:p,height:m}=t.getBoundingClientRect();if(c||e(),!p||!m)return;const g={rootMargin:-x(a)+"px "+-x(i.clientWidth-(f+p))+"px "+-x(i.clientHeight-(a+m))+"px "+-x(f)+"px",threshold:y(0,h(1,s))||1};let v=!0;function b(t){const e=t[0].intersectionRatio;if(e!==s){if(!v)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}v=!1}try{o=new IntersectionObserver(b,d(u({},g),{root:i.ownerDocument}))}catch(t){o=new IntersectionObserver(b,g)}o.observe(t)}(!0),r}(f,n):null;let m,g=-1,v=null;l&&(v=new ResizeObserver((t=>{let[o]=t;o&&o.target===f&&v&&(v.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{v&&v.observe(e)}))),n()})),f&&!s&&v.observe(f),v.observe(e));let b=s?st(t):null;return s&&function e(){const o=st(t);!b||o.x===b.x&&o.y===b.y&&o.width===b.width&&o.height===b.height||n(),b=o,m=requestAnimationFrame(e)}(),n(),()=>{a.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),p&&p(),v&&v.disconnect(),v=null,s&&cancelAnimationFrame(m)}}const xt=t=>m(void 0,[t],(function*({floatingElement:t,referenceElement:e,arrowElement:n,align:i="top"}){var r,l,c;if("test"!==o.p){const o=[B(null!==(r=null==n?void 0:n.offsetHeight)&&void 0!==r?r:10),V(),_()];n&&o.push(j({element:n}));const{x:s,y:f,middlewareData:a,placement:p}=yield((t,e,n)=>{const o=new Map,i=u({platform:yt},n),r=d(u({},i.platform),{_c:o});return((t,e,n)=>m(void 0,null,(function*(){const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=r.filter(Boolean),s=yield null==l.isRTL?void 0:l.isRTL(e);let f=yield l.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:p}=H(f,o,s),m=o,h={},y=0;for(let n=0;n<c.length;n++){const{name:r,fn:g}=c[n],{x,y:v,data:b,reset:w}=yield g({x:a,y:p,initialPlacement:o,placement:m,strategy:i,middlewareData:h,rects:f,platform:l,elements:{reference:t,floating:e}});a=null!=x?x:a,p=null!=v?v:p,h=d(u({},h),{[r]:u(u({},h[r]),b)}),w&&y<=50&&(y++,"object"==typeof w&&(w.placement&&(m=w.placement),w.rects&&(f=!0===w.rects?yield l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),({x:a,y:p}=H(f,m,s))),n=-1)}return{x:a,y:p,placement:m,strategy:i,middlewareData:h}})))(t,e,d(u({},i),{platform:r}))})(e,t,{placement:i,middleware:o});Object.assign(t.style,{left:`${s}px`,top:`${f}px`,visibility:"visible"}),n&&((null===(l=a.arrow)||void 0===l?void 0:l.x)?Object.assign(n.style,{left:`${a.arrow.x}px`,top:"bottom"===p?-n.offsetHeight/2+"px":"",bottom:"top"===p?-n.offsetHeight/2+"px":""}):(null===(c=a.arrow)||void 0===c?void 0:c.y)&&Object.assign(n.style,{left:"right"===p?-n.offsetWidth/2+"px":"",right:"left"===p?-n.offsetWidth/2+"px":"",top:`${a.arrow.y}px`}))}}))},86165:(t,e,n)=>{n.d(e,{a:()=>r,v:()=>l});var o=n(5873);const i=["left","right","top","bottom"],r=(t,e)=>{l(t,"_align",e)},l=(t,e,n)=>{(0,o.w)(t,e,(t=>"string"==typeof t&&i.includes(t)),new Set(i),n,{defaultValue:"top"})}}}]);