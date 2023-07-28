/*! For license information please see 611.98713a23.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[611],{33639:(t,e,n)=>{n.d(e,{v:()=>l});var o=n(23786);const i=new Set(['"left", "right"']),r=new Set(['"bottom", "top"']),s=new Set([...i,...r]),l=(t,e)=>{((t,e,n)=>{(0,o.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),s,n)})(t,"_align",e)}},70249:(t,e,n)=>{function o(t){return t.split("-")[1]}function i(t){return"y"===t?"height":"width"}function r(t){return t.split("-")[0]}function s(t){return["top","bottom"].includes(r(t))?"x":"y"}function l(t,e,n){let{reference:l,floating:a}=t;const c=l.x+l.width/2-a.width/2,f=l.y+l.height/2-a.height/2,u=s(e),h=i(u),p=l[h]/2-a[h]/2,d="x"===u;let m;switch(r(e)){case"top":m={x:c,y:l.y-a.height};break;case"bottom":m={x:c,y:l.y+l.height};break;case"right":m={x:l.x+l.width,y:f};break;case"left":m={x:l.x-a.width,y:f};break;default:m={x:l.x,y:l.y}}switch(o(e)){case"start":m[u]-=p*(n&&d?-1:1);break;case"end":m[u]+=p*(n&&d?-1:1)}return m}n.d(e,{a:()=>m,b:()=>rt,c:()=>st,f:()=>x,o:()=>b,s:()=>E});function a(t,e){return"function"==typeof t?t(e):t}function c(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function f(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function u(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:u}=t,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:m=!1,padding:g=0}=a(e,t),y=c(g),v=l[m?"floating"===d?"reference":"floating":d],w=f(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(v)))||n?v:v.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:p,strategy:u})),x="floating"===d?{...s.floating,x:o,y:i}:s.reference,b=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),E=await(null==r.isElement?void 0:r.isElement(b))&&await(null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},k=f(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:b,strategy:u}):x);return{top:(w.top-k.top+y.top)/E.y,bottom:(k.bottom-w.bottom+y.bottom)/E.y,left:(w.left-k.left+y.left)/E.x,right:(k.right-w.right+y.right)/E.x}}const h=Math.min,p=Math.max;function d(t,e,n){return p(t,h(e,n))}const m=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:l,rects:f,platform:u,elements:p}=e,{element:m,padding:g=0}=a(t,e)||{};if(null==m)return{};const y=c(g),v={x:n,y:r},w=s(l),x=i(w),b=await u.getDimensions(m),E="y"===w,k=E?"top":"left",L=E?"bottom":"right",R=E?"clientHeight":"clientWidth",T=f.reference[x]+f.reference[w]-v[w]-f.floating[x],P=v[w]-f.reference[w],A=await(null==u.getOffsetParent?void 0:u.getOffsetParent(m));let O=A?A[R]:0;O&&await(null==u.isElement?void 0:u.isElement(A))||(O=p.floating[R]||f.floating[x]);const S=T/2-P/2,C=O/2-b[x]/2-1,_=h(y[k],C),B=h(y[L],C),D=_,z=O-b[x]-B,F=O/2-b[x]/2+S,H=d(D,F,z),W=null!=o(l)&&F!=H&&f.reference[x]/2-(F<D?_:B)-b[x]/2<0?F<D?D-F:z-F:0;return{[w]:v[w]-W,data:{[w]:H,centerOffset:F-H+W}}}}),g={left:"right",right:"left",bottom:"top",top:"bottom"};function y(t){return t.replace(/left|right|bottom|top/g,(t=>g[t]))}const v={start:"end",end:"start"};function w(t){return t.replace(/start|end/g,(t=>v[t]))}const x=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:l,middlewareData:c,rects:f,initialPlacement:h,platform:p,elements:d}=e,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:v,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:E=!0,...k}=a(t,e),L=r(l),R=r(h)===h,T=await(null==p.isRTL?void 0:p.isRTL(d.floating)),P=v||(R||!E?[y(h)]:function(t){const e=y(t);return[w(t),e,w(e)]}(h));v||"none"===b||P.push(...function(t,e,n,i){const s=o(t);let l=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}(r(t),"start"===n,i);return s&&(l=l.map((t=>t+"-"+s)),e&&(l=l.concat(l.map(w)))),l}(h,E,b,T));const A=[h,...P],O=await u(e,k),S=[];let C=(null==(n=c.flip)?void 0:n.overflows)||[];if(m&&S.push(O[L]),g){const{main:t,cross:e}=function(t,e,n){void 0===n&&(n=!1);const r=o(t),l=s(t),a=i(l);let c="x"===l?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[a]>e.floating[a]&&(c=y(c)),{main:c,cross:y(c)}}(l,f,T);S.push(O[t],O[e])}if(C=[...C,{placement:l,overflows:S}],!S.every((t=>t<=0))){var _,B;const t=((null==(_=c.flip)?void 0:_.index)||0)+1,e=A[t];if(e)return{data:{index:t,overflows:C},reset:{placement:e}};let n=null==(B=C.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:B.placement;if(!n)switch(x){case"bestFit":{var D;const t=null==(D=C.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:D[0];t&&(n=t);break}case"initialPlacement":n=h}if(l!==n)return{reset:{placement:n}}}return{}}}};const b=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,l=await async function(t,e){const{placement:n,platform:i,elements:l}=t,c=await(null==i.isRTL?void 0:i.isRTL(l.floating)),f=r(n),u=o(n),h="x"===s(n),p=["left","top"].includes(f)?-1:1,d=c&&h?-1:1,m=a(e,t);let{mainAxis:g,crossAxis:y,alignmentAxis:v}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return u&&"number"==typeof v&&(y="end"===u?-1*v:v),h?{x:y*d,y:g*p}:{x:g*p,y:y*d}}(e,t);return{x:n+l.x,y:i+l.y,data:l}}}};const E=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:l=!0,crossAxis:c=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...h}=a(t,e),p={x:n,y:o},m=await u(e,h),g=s(r(i)),y=function(t){return"x"===t?"y":"x"}(g);let v=p[g],w=p[y];if(l){const t="y"===g?"bottom":"right";v=d(v+m["y"===g?"top":"left"],v,v-m[t])}if(c){const t="y"===y?"bottom":"right";w=d(w+m["y"===y?"top":"left"],w,w-m[t])}const x=f.fn({...e,[g]:v,[y]:w});return{...x,data:{x:x.x-n,y:x.y-o}}}}};function k(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){return k(t).getComputedStyle(t)}function R(t){return t instanceof k(t).Node}function T(t){return R(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function A(t){return"undefined"!=typeof ShadowRoot&&(t instanceof k(t).ShadowRoot||t instanceof ShadowRoot)}function O(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function S(t){return["table","td","th"].includes(T(t))}function C(t){const e=_(),n=L(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function _(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function B(t){return["html","body","#document"].includes(T(t))}const D=Math.min,z=Math.max,F=Math.round,H=Math.floor,W=t=>({x:t,y:t});function M(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=P(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=F(n)!==r||F(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function V(t){return t instanceof Element||t instanceof k(t).Element}function $(t){return V(t)?t:t.contextElement}function j(t){const e=$(t);if(!P(e))return W(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=M(e);let s=(r?F(n.width):n.width)/o,l=(r?F(n.height):n.height)/i;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}const I=W(0);function N(t){const e=k(t);return _()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:I}function q(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=$(t);let s=W(1);e&&(o?V(o)&&(s=j(o)):s=j(t));const l=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==k(t))&&e}(r,n,o)?N(r):W(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,u=i.width/s.x,h=i.height/s.y;if(r){const t=k(r),e=o&&V(o)?k(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=j(n),e=n.getBoundingClientRect(),o=getComputedStyle(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,c*=t.y,u*=t.x,h*=t.y,a+=i,c+=r,n=k(n).frameElement}}return f({width:u,height:h,x:a,y:c})}function X(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){var e;return null==(e=(R(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function G(t){return q(Y(t)).left+X(t).scrollLeft}function J(t){if("html"===T(t))return t;const e=t.assignedSlot||t.parentNode||A(t)&&t.host||Y(t);return A(e)?e.host:e}function K(t){const e=J(t);return B(e)?t.ownerDocument?t.ownerDocument.body:t.body:P(e)&&O(e)?e:K(e)}function Q(t,e){var n;void 0===e&&(e=[]);const o=K(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=k(o);return i?e.concat(r,r.visualViewport||[],O(o)?o:[]):e.concat(o,Q(o))}function U(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=k(t),o=Y(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const t=_();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}(t,n);else if("document"===e)o=function(t){const e=Y(t),n=X(t),o=t.ownerDocument.body,i=z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+G(t);const l=-n.scrollTop;return"rtl"===L(o).direction&&(s+=z(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}(Y(t));else if(V(e))o=function(t,e){const n=q(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=P(t)?j(t):W(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=N(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return f(o)}function Z(t,e){const n=J(t);return!(n===e||!V(n)||B(n))&&("fixed"===L(n).position||Z(n,e))}function tt(t,e){const n=e.get(t);if(n)return n;let o=Q(t).filter((t=>V(t)&&"body"!==T(t))),i=null;const r="fixed"===L(t).position;let s=r?J(t):t;for(;V(s)&&!B(s);){const e=L(s),n=C(s);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||O(s)&&!n&&Z(t,s))?o=o.filter((t=>t!==s)):i=e,s=J(s)}return e.set(t,o),o}function et(t,e,n){const o=P(e),i=Y(e),r="fixed"===n,s=q(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=W(0);if(o||!o&&!r)if(("body"!==T(e)||O(i))&&(l=X(e)),P(e)){const t=q(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=G(i));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function nt(t,e){return P(t)&&"fixed"!==L(t).position?e?e(t):t.offsetParent:null}function ot(t,e){const n=k(t);if(!P(t))return n;let o=nt(t,e);for(;o&&S(o)&&"static"===L(o).position;)o=nt(o,e);return o&&("html"===T(o)||"body"===T(o)&&"static"===L(o).position&&!C(o))?n:o||function(t){let e=J(t);for(;P(e)&&!B(e);){if(C(e))return e;e=J(e)}return null}(t)||n}const it={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=P(n),r=Y(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},l=W(1);const a=W(0);if((i||!i&&"fixed"!==o)&&(("body"!==T(n)||O(r))&&(s=X(n)),P(n))){const t=q(n);l=j(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+a.x,y:e.y*l.y-s.scrollTop*l.y+a.y}},getDocumentElement:Y,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?tt(e,this._c):[].concat(n),o],s=r[0],l=r.reduce(((t,n)=>{const o=U(e,n,i);return t.top=z(o.top,t.top),t.right=D(o.right,t.right),t.bottom=D(o.bottom,t.bottom),t.left=z(o.left,t.left),t}),U(e,s,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:ot,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||ot,r=this.getDimensions;return{reference:et(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return M(t)},getScale:j,isElement:V,isRTL:function(t){return"rtl"===getComputedStyle(t).direction}};function rt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=o,c=$(t),f=i||r?[...c?Q(c):[],...Q(e)]:[];f.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const u=c&&l?function(t,e){let n,o=null;const i=Y(t);function r(){clearTimeout(n),o&&o.disconnect(),o=null}return function s(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),r();const{left:c,top:f,width:u,height:h}=t.getBoundingClientRect();if(l||e(),!u||!h)return;const p={rootMargin:-H(f)+"px "+-H(i.clientWidth-(c+u))+"px "+-H(i.clientHeight-(f+h))+"px "+-H(c)+"px",threshold:z(0,D(1,a))||1};let d=!0;function m(t){const e=t[0].intersectionRatio;if(e!==a){if(!d)return s();e?s(!1,e):n=setTimeout((()=>{s(!1,1e-7)}),100)}d=!1}try{o=new IntersectionObserver(m,{...p,root:i.ownerDocument})}catch(t){o=new IntersectionObserver(m,p)}o.observe(t)}(!0),r}(c,n):null;let h,p=-1,d=null;s&&(d=new ResizeObserver((t=>{let[o]=t;o&&o.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{d&&d.observe(e)}))),n()})),c&&!a&&d.observe(c),d.observe(e));let m=a?q(t):null;return a&&function e(){const o=q(t);!m||o.x===m.x&&o.y===m.y&&o.width===m.width&&o.height===m.height||n(),m=o,h=requestAnimationFrame(e)}(),n(),()=>{f.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),u&&u(),d&&d.disconnect(),d=null,a&&cancelAnimationFrame(h)}}const st=(t,e,n)=>{const o=new Map,i={platform:it,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,a=r.filter(Boolean),c=await(null==s.isRTL?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:h}=l(f,o,c),p=o,d={},m=0;for(let g=0;g<a.length;g++){const{name:n,fn:r}=a[g],{x:y,y:v,data:w,reset:x}=await r({x:u,y:h,initialPlacement:o,placement:p,strategy:i,middlewareData:d,rects:f,platform:s,elements:{reference:t,floating:e}});u=null!=y?y:u,h=null!=v?v:h,d={...d,[n]:{...d[n],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(f=!0===x.rects?await s.getElementRects({reference:t,floating:e,strategy:i}):x.rects),({x:u,y:h}=l(f,p,c))),g=-1)}return{x:u,y:h,placement:p,strategy:i,middlewareData:d}})(t,e,{...i,platform:r})}},40611:(t,e,n)=>{n.r(e),n.d(e,{kol_popover:()=>c});var o=n(85066),i=n(70249),r=n(33639),s=n(99650),l=n(13806),a=n(6385);const c=class{constructor(t){(0,o.r)(this,t),this.alignPopover=t=>{setTimeout((()=>{var e;if("test"!==a.p&&this.triggerElement&&this.popoverElement){const n=this.triggerElement,o=this.popoverElement,r=this.arrowElement,s=[(0,i.o)(null!==(e=null==r?void 0:r.offsetHeight)&&void 0!==e?e:10),(0,i.f)(),(0,i.s)()];r&&s.push((0,i.a)({element:r})),(0,i.c)(n,o,{placement:this.state._align,middleware:s}).then((({x:e,y:n,middlewareData:o,placement:i})=>{this.setPosition(e,n,o,i,t)}))}}))},this.showPopover=()=>{this.addListenersToBody(),this.alignPopover((()=>{this.state=Object.assign(Object.assign({},this.state),{_visible:!0})}))},this.hidePopoverByEscape=t=>{"Escape"===t.key&&this.hidePopover()},this.hidePopoverByClickOutside=t=>{this.host&&!this.host.contains(t.target)&&this.hidePopover()},this.catchHostAndTriggerElement=t=>{t&&(this.host=t,this.triggerElement=t.previousElementSibling)},this.catchPopoverElement=t=>{this.popoverElement=t},this.catchArrowElement=t=>{this.arrowElement=t},this._align="top",this._show=!1,this.state={_align:"top",_show:!1,_visible:!1}}setPosition(t,e,n,o,i){if(this.popoverElement){const r={left:this.popoverElement.style.left,top:this.popoverElement.style.top};if(Object.assign(this.popoverElement.style,{left:`${t}px`,top:`${e}px`}),this.arrowElement&&n.arrow)switch(o){case"top":this.arrowElement.style.inset=`100% auto auto ${n.arrow.x||0}px`,this.arrowElement.style.translate="0 -50%";break;case"right":this.arrowElement.style.inset=`${n.arrow.y||0}px 100% auto auto`,this.arrowElement.style.translate="50% 0";break;case"bottom":this.arrowElement.style.inset=`auto auto 100% ${n.arrow.x||0}px`,this.arrowElement.style.translate="0 50%";break;case"left":this.arrowElement.style.inset=`${n.arrow.y||0}px auto auto 100%`,this.arrowElement.style.translate="-50% 0"}r.left!==this.popoverElement.style.left||r.top!==this.popoverElement.style.top?this.alignPopover(i):"function"==typeof i&&i()}}hidePopover(){var t;this.state=Object.assign(Object.assign({},this.state),{_visible:!1}),this._show=!1,null===(t=this.triggerElement)||void 0===t||t.focus(),this.removeListenersToBody()}addListenersToBody(){var t;const e=(0,l.g)().body;e.addEventListener("keyup",this.hidePopoverByEscape),e.addEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.addEventListener("scroll",this.showPopover,{passive:!0})}removeListenersToBody(){var t;const e=(0,l.g)().body;e.removeEventListener("keyup",this.hidePopoverByEscape),e.removeEventListener("click",this.hidePopoverByClickOutside),null===(t=document.scrollingElement)||void 0===t||t.removeEventListener("scroll",this.showPopover)}render(){return(0,o.h)(o.H,{ref:this.catchHostAndTriggerElement},(0,o.h)("div",{class:{popover:!0,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},(0,o.h)("div",{class:`arrow ${this.state._align}`,ref:this.catchArrowElement}),(0,o.h)("slot",null)))}validateAlign(t){(0,r.v)(this,t)}validateShow(t){(0,s.v)(this,t),t&&this.showPopover()}componentWillLoad(){this.validateAlign(this._align),this.validateShow(this._show)}static get watchers(){return{_align:["validateAlign"],_show:["validateShow"]}}};c.style=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-popover{height:0;position:absolute}kol-popover .popover{background-color:#fff;min-height:max-content;min-width:max-content;opacity:0;position:absolute}kol-popover .hidden{display:none}kol-popover .show{animation:0.3s ease-in forwards fadeInOpacity}kol-popover .disappear{animation:0.3s ease-in backwards fadeInOpacity}kol-popover .arrow{background-color:inherit;height:var(--font-size);position:absolute;rotate:0.125turn;width:var(--font-size);z-index:-1}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"},99650:(t,e,n)=>{n.d(e,{v:()=>i});var o=n(23786);const i=(t,e,n)=>{(0,o.a)(t,"_show",e,n)}}}]);