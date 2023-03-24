/*! For license information please see 2888.452d3e05.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2888],{72545:(t,e,i)=>{i.d(e,{w:()=>o});var n=i(14282);const o=(t,e,i)=>{(0,n.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},72888:(t,e,i)=>{i.r(e),i.d(e,{kol_tooltip:()=>ct});var n=i(69379),o=i(72545),r=i(16638),l=i(14282),s=i(90031);function a(t){return t.split("-")[1]}function c(t){return"y"===t?"height":"width"}function u(t){return t.split("-")[0]}function f(t){return["top","bottom"].includes(u(t))?"x":"y"}function p(t,e,i){let{reference:n,floating:o}=t;const r=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2,s=f(e),p=c(s),h=n[p]/2-o[p]/2,d="x"===s;let m;switch(u(e)){case"top":m={x:r,y:n.y-o.height};break;case"bottom":m={x:r,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:l};break;case"left":m={x:n.x-o.width,y:l};break;default:m={x:n.x,y:n.y}}switch(a(e)){case"start":m[s]-=h*(i&&d?-1:1);break;case"end":m[s]+=h*(i&&d?-1:1)}return m}function h(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function d(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function m(t,e){var i;void 0===e&&(e={});const{x:n,y:o,platform:r,rects:l,elements:s,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=e,y=h(m),g=s[p?"floating"===f?"reference":"floating":f],v=d(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(g)))||i?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:a})),w="floating"===f?{...l.floating,x:n,y:o}:l.reference,x=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),b=await(null==r.isElement?void 0:r.isElement(x))&&await(null==r.getScale?void 0:r.getScale(x))||{x:1,y:1},E=d(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:x,strategy:a}):w);return{top:(v.top-E.top+y.top)/b.y,bottom:(E.bottom-v.bottom+y.bottom)/b.y,left:(v.left-E.left+y.left)/b.x,right:(E.right-v.right+y.right)/b.x}}const y=Math.min,g=Math.max;function v(t,e,i){return g(t,y(e,i))}const w={left:"right",right:"left",bottom:"top",top:"bottom"};function x(t){return t.replace(/left|right|bottom|top/g,(t=>w[t]))}function b(t,e,i){void 0===i&&(i=!1);const n=a(t),o=f(t),r=c(o);let l="x"===o?n===(i?"end":"start")?"right":"left":"start"===n?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=x(l)),{main:l,cross:x(l)}}const E={start:"end",end:"start"};function L(t){return t.replace(/start|end/g,(t=>E[t]))}function T(t){const e=x(t);return[L(t),e,L(e)]}function k(t,e,i,n){const o=a(t);let r=function(t,e,i){const n=["left","right"],o=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return i?e?o:n:e?n:o;case"left":case"right":return e?r:l;default:return[]}}(u(t),"start"===i,n);return o&&(r=r.map((t=>t+"-"+o)),e&&(r=r.concat(r.map(L)))),r}async function R(t,e){const{placement:i,platform:n,elements:o}=t,r=await(null==n.isRTL?void 0:n.isRTL(o.floating)),l=u(i),s=a(i),c="x"===f(i),p=["left","top"].includes(l)?-1:1,h=r&&c?-1:1,d="function"==typeof e?e(t):e;let{mainAxis:m,crossAxis:y,alignmentAxis:g}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof g&&(y="end"===s?-1*g:g),c?{x:y*h,y:m*p}:{x:m*p,y:y*h}}const C=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:n,placement:o}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:s={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...a}=t,c={x:i,y:n},p=await m(e,a),h=f(u(o)),d=function(t){return"x"===t?"y":"x"}(h);let y=c[h],g=c[d];if(r){const t="y"===h?"bottom":"right";y=v(y+p["y"===h?"top":"left"],y,y-p[t])}if(l){const t="y"===d?"bottom":"right";g=v(g+p["y"===d?"top":"left"],g,g-p[t])}const w=s.fn({...e,[h]:y,[d]:g});return{...w,data:{x:w.x-i,y:w.y-n}}}}};function O(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function A(t){return O(t).getComputedStyle(t)}function F(t){return t instanceof O(t).Node}function _(t){return F(t)?(t.nodeName||"").toLowerCase():""}let P;function S(){if(P)return P;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(P=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),P):navigator.userAgent}function H(t){return t instanceof O(t).HTMLElement}function D(t){return t instanceof O(t).Element}function W(t){return"undefined"!=typeof ShadowRoot&&(t instanceof O(t).ShadowRoot||t instanceof ShadowRoot)}function B(t){const{overflow:e,overflowX:i,overflowY:n,display:o}=A(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+i)&&!["inline","contents"].includes(o)}function V(t){return["table","td","th"].includes(_(t))}function z(t){const e=/firefox/i.test(S()),i=A(t),n=i.backdropFilter||i.WebkitBackdropFilter;return"none"!==i.transform||"none"!==i.perspective||!!n&&"none"!==n||e&&"filter"===i.willChange||e&&!!i.filter&&"none"!==i.filter||["transform","perspective"].some((t=>i.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=i.contain;return null!=e&&e.includes(t)}))}function M(){return/^((?!chrome|android).)*safari/i.test(S())}function j(t){return["html","body","#document"].includes(_(t))}const I=Math.min,N=Math.max,$=Math.round;function X(t){const e=A(t);let i=parseFloat(e.width),n=parseFloat(e.height);const o=H(t),r=o?t.offsetWidth:i,l=o?t.offsetHeight:n,s=$(i)!==r||$(n)!==l;return s&&(i=r,n=l),{width:i,height:n,fallback:s}}function Y(t){return D(t)?t:t.contextElement}const q={x:1,y:1};function G(t){const e=Y(t);if(!H(e))return q;const i=e.getBoundingClientRect(),{width:n,height:o,fallback:r}=X(e);let l=(r?$(i.width):i.width)/n,s=(r?$(i.height):i.height)/o;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}function J(t,e,i,n){var o,r;void 0===e&&(e=!1),void 0===i&&(i=!1);const l=t.getBoundingClientRect(),s=Y(t);let a=q;e&&(n?D(n)&&(a=G(n)):a=G(t));const c=s?O(s):window,u=M()&&i;let f=(l.left+(u&&(null==(o=c.visualViewport)?void 0:o.offsetLeft)||0))/a.x,p=(l.top+(u&&(null==(r=c.visualViewport)?void 0:r.offsetTop)||0))/a.y,h=l.width/a.x,m=l.height/a.y;if(s){const t=O(s),e=n&&D(n)?O(n):n;let i=t.frameElement;for(;i&&n&&e!==t;){const t=G(i),e=i.getBoundingClientRect(),n=getComputedStyle(i);e.x+=(i.clientLeft+parseFloat(n.paddingLeft))*t.x,e.y+=(i.clientTop+parseFloat(n.paddingTop))*t.y,f*=t.x,p*=t.y,h*=t.x,m*=t.y,f+=e.x,p+=e.y,i=O(i).frameElement}}return d({width:h,height:m,x:f,y:p})}function K(t){return((F(t)?t.ownerDocument:t.document)||window.document).documentElement}function Q(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){return J(K(t)).left+Q(t).scrollLeft}function Z(t){if("html"===_(t))return t;const e=t.assignedSlot||t.parentNode||W(t)&&t.host||K(t);return W(e)?e.host:e}function tt(t){const e=Z(t);return j(e)?e.ownerDocument.body:H(e)&&B(e)?e:tt(e)}function et(t,e){var i;void 0===e&&(e=[]);const n=tt(t),o=n===(null==(i=t.ownerDocument)?void 0:i.body),r=O(n);return o?e.concat(r,r.visualViewport||[],B(n)?n:[]):e.concat(n,et(n))}function it(t,e,i){let n;if("viewport"===e)n=function(t,e){const i=O(t),n=K(t),o=i.visualViewport;let r=n.clientWidth,l=n.clientHeight,s=0,a=0;if(o){r=o.width,l=o.height;const t=M();(!t||t&&"fixed"===e)&&(s=o.offsetLeft,a=o.offsetTop)}return{width:r,height:l,x:s,y:a}}(t,i);else if("document"===e)n=function(t){const e=K(t),i=Q(t),n=t.ownerDocument.body,o=N(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=N(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let l=-i.scrollLeft+U(t);const s=-i.scrollTop;return"rtl"===A(n).direction&&(l+=N(e.clientWidth,n.clientWidth)-o),{width:o,height:r,x:l,y:s}}(K(t));else if(D(e))n=function(t,e){const i=J(t,!0,"fixed"===e),n=i.top+t.clientTop,o=i.left+t.clientLeft,r=H(t)?G(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:n*r.y}}(e,i);else{const i={...e};if(M()){var o,r;const e=O(t);i.x-=(null==(o=e.visualViewport)?void 0:o.offsetLeft)||0,i.y-=(null==(r=e.visualViewport)?void 0:r.offsetTop)||0}n=i}return d(n)}function nt(t,e){const i=e.get(t);if(i)return i;let n=et(t).filter((t=>D(t)&&"body"!==_(t))),o=null;const r="fixed"===A(t).position;let l=r?Z(t):t;for(;D(l)&&!j(l);){const t=A(l),e=z(l);"fixed"===t.position?o=null:(r?e||o:e||"static"!==t.position||!o||!["absolute","fixed"].includes(o.position))?o=t:n=n.filter((t=>t!==l)),l=Z(l)}return e.set(t,n),n}function ot(t,e){return H(t)&&"fixed"!==A(t).position?e?e(t):t.offsetParent:null}function rt(t,e){const i=O(t);if(!H(t))return i;let n=ot(t,e);for(;n&&V(n)&&"static"===A(n).position;)n=ot(n,e);return n&&("html"===_(n)||"body"===_(n)&&"static"===A(n).position&&!z(n))?i:n||function(t){let e=Z(t);for(;H(e)&&!j(e);){if(z(e))return e;e=Z(e)}return null}(t)||i}function lt(t,e,i){const n=H(e),o=K(e),r=J(t,!0,"fixed"===i,e);let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(n||!n&&"fixed"!==i)if(("body"!==_(e)||B(o))&&(l=Q(e)),H(e)){const t=J(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else o&&(s.x=U(o));return{x:r.left+l.scrollLeft-s.x,y:r.top+l.scrollTop-s.y,width:r.width,height:r.height}}const st={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:n,strategy:o}=t;const r=[..."clippingAncestors"===i?nt(e,this._c):[].concat(i),n],l=r[0],s=r.reduce(((t,i)=>{const n=it(e,i,o);return t.top=N(n.top,t.top),t.right=I(n.right,t.right),t.bottom=I(n.bottom,t.bottom),t.left=N(n.left,t.left),t}),it(e,l,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:n}=t;const o=H(i),r=K(i);if(i===r)return e;let l={scrollLeft:0,scrollTop:0},s={x:1,y:1};const a={x:0,y:0};if((o||!o&&"fixed"!==n)&&(("body"!==_(i)||B(r))&&(l=Q(i)),H(i))){const t=J(i);s=G(i),a.x=t.x+i.clientLeft,a.y=t.y+i.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-l.scrollLeft*s.x+a.x,y:e.y*s.y-l.scrollTop*s.y+a.y}},isElement:D,getDimensions:function(t){return X(t)},getOffsetParent:rt,getDocumentElement:K,getScale:G,async getElementRects(t){let{reference:e,floating:i,strategy:n}=t;const o=this.getOffsetParent||rt,r=this.getDimensions;return{reference:lt(e,await o(i),n),floating:{x:0,y:0,...await r(i)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===A(t).direction},at=(t,e,i)=>{const n=new Map,o={platform:st,...i},r={...o.platform,_c:n};return(async(t,e,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:r=[],platform:l}=i,s=r.filter(Boolean),a=await(null==l.isRTL?void 0:l.isRTL(e));let c=await l.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:f}=p(c,n,a),h=n,d={},m=0;for(let y=0;y<s.length;y++){const{name:i,fn:r}=s[y],{x:g,y:v,data:w,reset:x}=await r({x:u,y:f,initialPlacement:n,placement:h,strategy:o,middlewareData:d,rects:c,platform:l,elements:{reference:t,floating:e}});u=null!=g?g:u,f=null!=v?v:f,d={...d,[i]:{...d[i],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(h=x.placement),x.rects&&(c=!0===x.rects?await l.getElementRects({reference:t,floating:e,strategy:o}):x.rects),({x:u,y:f}=p(c,h,a))),y=-1)}return{x:u,y:f,placement:h,strategy:o,middlewareData:d}})(t,e,{...o,platform:r})},ct=class{constructor(t){(0,n.r)(this,t),this.alignTooltip=t=>{var e,i,n;if("test"!==s.p&&this.previousSibling){const o=this.previousSibling;if(this.tooltipElement){const r=this.tooltipElement,l=this.arrowElement,s=[(n=null!==(e=null==l?void 0:l.offsetHeight)&&void 0!==e?e:10,void 0===n&&(n=0),{name:"offset",options:n,async fn(t){const{x:e,y:i}=t,o=await R(t,n);return{x:e+o.x,y:i+o.y,data:o}}}),(void 0===i&&(i={}),{name:"flip",options:i,async fn(t){var e;const{placement:n,middlewareData:o,rects:r,initialPlacement:l,platform:s,elements:a}=t,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:y=!0,...g}=i,v=u(n),w=u(l)===l,E=await(null==s.isRTL?void 0:s.isRTL(a.floating)),L=p||(w||!y?[x(l)]:T(l));p||"none"===d||L.push(...k(l,y,d,E));const R=[l,...L],C=await m(t,g),O=[];let A=(null==(e=o.flip)?void 0:e.overflows)||[];if(c&&O.push(C[v]),f){const{main:t,cross:e}=b(n,r,E);O.push(C[t],C[e])}if(A=[...A,{placement:n,overflows:O}],!O.every((t=>t<=0))){var F,_;const t=((null==(F=o.flip)?void 0:F.index)||0)+1,e=R[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let i=null==(_=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:_.placement;if(!i)switch(h){case"bestFit":{var P;const t=null==(P=A.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:P[0];t&&(i=t);break}case"initialPlacement":i=l}if(n!==i)return{reset:{placement:i}}}return{}}}),C()];l&&s.push((t=>({name:"arrow",options:t,async fn(e){const{element:i,padding:n=0}=t||{},{x:o,y:r,placement:l,rects:s,platform:u,elements:p}=e;if(null==i)return{};const d=h(n),m={x:o,y:r},y=f(l),g=c(y),w=await u.getDimensions(i),x="y"===y,b=x?"top":"left",E=x?"bottom":"right",L=x?"clientHeight":"clientWidth",T=s.reference[g]+s.reference[y]-m[y]-s.floating[g],k=m[y]-s.reference[y],R=await(null==u.getOffsetParent?void 0:u.getOffsetParent(i));let C=R?R[L]:0;C&&await(null==u.isElement?void 0:u.isElement(R))||(C=p.floating[L]||s.floating[g]);const O=T/2-k/2,A=d[b],F=C-w[g]-d[E],_=C/2-w[g]/2+O,P=v(A,_,F),S=null!=a(l)&&_!=P&&s.reference[g]/2-(_<A?d[b]:d[E])-w[g]/2<0;return{[y]:m[y]-(S?_<A?A-_:F-_:0),data:{[y]:P,centerOffset:_-P}}}}))({element:l})),at(o,r,{placement:this.state._align,middleware:s}).then((({x:e,y:i,middlewareData:n,placement:o})=>{var s,a;const c=r.style.left,u=r.style.top;Object.assign(r.style,{left:`${e}px`,top:`${i}px`}),l&&((null===(s=n.arrow)||void 0===s?void 0:s.x)?Object.assign(l.style,{left:`${n.arrow.x}px`,top:"bottom"===o?-l.offsetHeight/2+"px":"",bottom:"top"===o?-l.offsetHeight/2+"px":""}):(null===(a=n.arrow)||void 0===a?void 0:a.y)&&Object.assign(l.style,{left:"right"===o?-l.offsetWidth/2+"px":"",right:"left"===o?-l.offsetWidth/2+"px":"",top:`${n.arrow.y}px`})),c!==r.style.left||u!==r.style.top?this.alignTooltip(t):"function"==typeof t&&t()}))}}},this.showTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","block"),(0,r.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip((()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.showTooltip))})))},this.hideTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.showTooltip))},this.hideTooltipByEscape=t=>{"Escape"===t.key&&((0,r.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.addListeners=t=>{t.addEventListener("mouseover",this.incrementOverFocusCount),t.addEventListener("focus",this.incrementOverFocusCount),t.addEventListener("mouseout",this.decrementOverFocusCount),t.addEventListener("blur",this.decrementOverFocusCount)},this.removeListeners=t=>{t.removeEventListener("mouseover",this.incrementOverFocusCount),t.removeEventListener("focus",this.incrementOverFocusCount),t.removeEventListener("mouseout",this.decrementOverFocusCount),t.removeEventListener("blur",this.decrementOverFocusCount)},this.resyncListeners=t=>{this.removeListeners(t),this.addListeners(t)},this.catchHostElement=t=>{t&&(this.previousSibling=t.previousElementSibling,this.previousSibling&&this.resyncListeners(this.previousSibling))},this.catchTooltipElement=t=>{this.tooltipElement=t,this.tooltipElement&&this.resyncListeners(this.tooltipElement)},this.catchArrowElement=t=>{this.arrowElement=t},this.overFocusCount=0,this.incrementOverFocusCount=()=>{this.overFocusCount++,this.showOrHideTooltip()},this.decrementOverFocusCount=()=>{this.overFocusCount--,this.showOrHideTooltip()},this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout),this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout),this.overFocusCount>0?this.showTooltip():this.hideTooltip()}),250)},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,r.n)(),_label:"\u2026"}}render(){return(0,n.h)(n.H,{ref:this.catchHostElement},""!==this.state._label&&(0,n.h)("div",{id:"floating",ref:this.catchTooltipElement},(0,n.h)("div",{id:"arrow",ref:this.catchArrowElement}),(0,n.h)("kol-badge",{id:this.state._id,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label})))}validateAlign(t){(0,o.w)(this,"_align",t)}validateId(t){(0,l.w)(this,"_id",t)}validateLabel(t){(0,l.w)(this,"_label",t)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label)}disconnectedCallback(){this.previousSibling&&this.removeListeners(this.previousSibling),this.tooltipElement&&this.removeListeners(this.tooltipElement)}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};ct.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip #floating{animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;box-sizing:border-box;display:none;position:absolute;visibility:hidden}kol-tooltip #arrow{background:#333;height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip kol-badge{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}"}}}]);