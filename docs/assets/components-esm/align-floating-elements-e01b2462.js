/*!
 * KoliBri - The accessible HTML-Standard
 */
import{p as processEnv}from"./index-807d8631.js";const sides=["top","right","bottom","left"],alignments=["start","end"],placements=sides.reduce(((e,t)=>e.concat(t,t+"-"+alignments[0],t+"-"+alignments[1])),[]),min=Math.min,max=Math.max,round=Math.round,floor=Math.floor,createCoords=e=>({x:e,y:e}),oppositeSideMap={left:"right",right:"left",bottom:"top",top:"bottom"},oppositeAlignmentMap={start:"end",end:"start"};function clamp(e,t,n){return max(e,min(t,n))}function evaluate(e,t){return"function"==typeof e?e(t):e}function getSide(e){return e.split("-")[0]}function getAlignment(e){return e.split("-")[1]}function getOppositeAxis(e){return"x"===e?"y":"x"}function getAxisLength(e){return"y"===e?"height":"width"}function getSideAxis(e){return["top","bottom"].includes(getSide(e))?"y":"x"}function getAlignmentAxis(e){return getOppositeAxis(getSideAxis(e))}function getAlignmentSides(e,t,n){void 0===n&&(n=!1);const o=getAlignment(e),i=getAlignmentAxis(e),r=getAxisLength(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(l=getOppositePlacement(l)),[l,getOppositePlacement(l)]}function getExpandedPlacements(e){const t=getOppositePlacement(e);return[getOppositeAlignmentPlacement(e),t,getOppositeAlignmentPlacement(t)]}function getOppositeAlignmentPlacement(e){return e.replace(/start|end/g,(e=>oppositeAlignmentMap[e]))}function getSideList(e,t,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:o:t?o:i;case"left":case"right":return t?r:l;default:return[]}}function getOppositeAxisPlacements(e,t,n,o){const i=getAlignment(e);let r=getSideList(getSide(e),"start"===n,o);return i&&(r=r.map((e=>e+"-"+i)),t&&(r=r.concat(r.map(getOppositeAlignmentPlacement)))),r}function getOppositePlacement(e){return e.replace(/left|right|bottom|top/g,(e=>oppositeSideMap[e]))}function expandPaddingObject(e){return{top:0,right:0,bottom:0,left:0,...e}}function getPaddingObject(e){return"number"!=typeof e?expandPaddingObject(e):{top:e,right:e,bottom:e,left:e}}function rectToClientRect(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function computeCoordsFromPlacement(e,t,n){let{reference:o,floating:i}=e;const r=getSideAxis(t),l=getAlignmentAxis(t),s=getAxisLength(l),a=getSide(t),c="y"===r,f=o.x+o.width/2-i.width/2,g=o.y+o.height/2-i.height/2,d=o[s]/2-i[s]/2;let m;switch(a){case"top":m={x:f,y:o.y-i.height};break;case"bottom":m={x:f,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:g};break;case"left":m={x:o.x-i.width,y:g};break;default:m={x:o.x,y:o.y}}switch(getAlignment(t)){case"start":m[l]-=d*(n&&c?-1:1);break;case"end":m[l]+=d*(n&&c?-1:1)}return m}const computePosition$1=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,s=r.filter(Boolean),a=await(null==l.isRTL?void 0:l.isRTL(t));let c=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:f,y:g}=computeCoordsFromPlacement(c,o,a),d=o,m={},u=0;for(let n=0;n<s.length;n++){const{name:r,fn:p}=s[n],{x:h,y:w,data:y,reset:x}=await p({x:f,y:g,initialPlacement:o,placement:d,strategy:i,middlewareData:m,rects:c,platform:l,elements:{reference:e,floating:t}});f=null!=h?h:f,g=null!=w?w:g,m={...m,[r]:{...m[r],...y}},x&&u<=50&&(u++,"object"==typeof x&&(x.placement&&(d=x.placement),x.rects&&(c=!0===x.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):x.rects),({x:f,y:g}=computeCoordsFromPlacement(c,d,a))),n=-1)}return{x:f,y:g,placement:d,strategy:i,middlewareData:m}};async function detectOverflow(e,t){var n;void 0===t&&(t={});const{x:o,y:i,platform:r,rects:l,elements:s,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:d=!1,padding:m=0}=evaluate(t,e),u=getPaddingObject(m),p=s[d?"floating"===g?"reference":"floating":g],h=rectToClientRect(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(p)))||n?p:p.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:f,strategy:a})),w="floating"===g?{...l.floating,x:o,y:i}:l.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),x=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},v=rectToClientRect(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:y,strategy:a}):w);return{top:(h.top-v.top+u.top)/x.y,bottom:(v.bottom-h.bottom+u.bottom)/x.y,left:(h.left-v.left+u.left)/x.x,right:(v.right-h.right+u.right)/x.x}}const arrow$1=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:i,rects:r,platform:l,elements:s,middlewareData:a}=t,{element:c,padding:f=0}=evaluate(e,t)||{};if(null==c)return{};const g=getPaddingObject(f),d={x:n,y:o},m=getAlignmentAxis(i),u=getAxisLength(m),p=await l.getDimensions(c),h="y"===m,w=h?"top":"left",y=h?"bottom":"right",x=h?"clientHeight":"clientWidth",v=r.reference[u]+r.reference[m]-d[m]-r.floating[u],b=d[m]-r.reference[m],A=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c));let R=A?A[x]:0;R&&await(null==l.isElement?void 0:l.isElement(A))||(R=s.floating[x]||r.floating[u]);const O=v/2-b/2,C=R/2-p[u]/2-1,E=min(g[w],C),S=min(g[y],C),T=E,P=R-p[u]-S,L=R/2-p[u]/2+O,N=clamp(T,L,P),D=!a.arrow&&null!=getAlignment(i)&&L!=N&&r.reference[u]/2-(L<T?E:S)-p[u]/2<0,B=D?L<T?L-T:L-P:0;return{[m]:d[m]+B,data:{[m]:N,centerOffset:L-N-B,...D&&{alignmentOffset:B}},reset:D}}});function getPlacementList(e,t,n){return(e?[...n.filter((t=>getAlignment(t)===e)),...n.filter((t=>getAlignment(t)!==e))]:n.filter((e=>getSide(e)===e))).filter((n=>!e||(getAlignment(n)===e||!!t&&getOppositeAlignmentPlacement(n)!==n)))}const autoPlacement=function(e){return void 0===e&&(e={}),{name:"autoPlacement",options:e,async fn(t){var n,o,i;const{rects:r,middlewareData:l,placement:s,platform:a,elements:c}=t,{crossAxis:f=!1,alignment:g,allowedPlacements:d=placements,autoAlignment:m=!0,...u}=evaluate(e,t),p=void 0!==g||d===placements?getPlacementList(g||null,m,d):d,h=await detectOverflow(t,u),w=(null==(n=l.autoPlacement)?void 0:n.index)||0,y=p[w];if(null==y)return{};const x=getAlignmentSides(y,r,await(null==a.isRTL?void 0:a.isRTL(c.floating)));if(s!==y)return{reset:{placement:p[0]}};const v=[h[getSide(y)],h[x[0]],h[x[1]]],b=[...(null==(o=l.autoPlacement)?void 0:o.overflows)||[],{placement:y,overflows:v}],A=p[w+1];if(A)return{data:{index:w+1,overflows:b},reset:{placement:A}};const R=b.map((e=>{const t=getAlignment(e.placement);return[e.placement,t&&f?e.overflows.slice(0,2).reduce(((e,t)=>e+t),0):e.overflows[0],e.overflows]})).sort(((e,t)=>e[1]-t[1])),O=(null==(i=R.filter((e=>e[2].slice(0,getAlignment(e[0])?2:3).every((e=>e<=0))))[0])?void 0:i[0])||R[0][0];return O!==s?{data:{index:w+1,overflows:b},reset:{placement:O}}:{}}}},flip$1=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:i,middlewareData:r,rects:l,initialPlacement:s,platform:a,elements:c}=t,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:d,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:p=!0,...h}=evaluate(e,t);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const w=getSide(i),y=getSide(s)===s,x=await(null==a.isRTL?void 0:a.isRTL(c.floating)),v=d||(y||!p?[getOppositePlacement(s)]:getExpandedPlacements(s));d||"none"===u||v.push(...getOppositeAxisPlacements(s,p,u,x));const b=[s,...v],A=await detectOverflow(t,h),R=[];let O=(null==(o=r.flip)?void 0:o.overflows)||[];if(f&&R.push(A[w]),g){const e=getAlignmentSides(i,l,x);R.push(A[e[0]],A[e[1]])}if(O=[...O,{placement:i,overflows:R}],!R.every((e=>e<=0))){var C,E;const e=((null==(C=r.flip)?void 0:C.index)||0)+1,t=b[e];if(t)return{data:{index:e,overflows:O},reset:{placement:t}};let n=null==(E=O.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!n)switch(m){case"bestFit":{var S;const e=null==(S=O.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:S[0];e&&(n=e);break}case"initialPlacement":n=s}if(i!==n)return{reset:{placement:n}}}return{}}}};function getSideOffsets(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function isAnySideFullyClipped(e){return sides.some((t=>e[t]>=0))}const hide=function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...i}=evaluate(e,t);switch(o){case"referenceHidden":{const e=getSideOffsets(await detectOverflow(t,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:isAnySideFullyClipped(e)}}}case"escaped":{const e=getSideOffsets(await detectOverflow(t,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:isAnySideFullyClipped(e)}}}default:return{}}}}};function getBoundingRect(e){const t=min(...e.map((e=>e.left))),n=min(...e.map((e=>e.top)));return{x:t,y:n,width:max(...e.map((e=>e.right)))-t,height:max(...e.map((e=>e.bottom)))-n}}function getRectsByLine(e){const t=e.slice().sort(((e,t)=>e.y-t.y)),n=[];let o=null;for(let e=0;e<t.length;e++){const i=t[e];!o||i.y-o.y>o.height/2?n.push([i]):n[n.length-1].push(i),o=i}return n.map((e=>rectToClientRect(getBoundingRect(e))))}const inline=function(e){return void 0===e&&(e={}),{name:"inline",options:e,async fn(t){const{placement:n,elements:o,rects:i,platform:r,strategy:l}=t,{padding:s=2,x:a,y:c}=evaluate(e,t),f=Array.from(await(null==r.getClientRects?void 0:r.getClientRects(o.reference))||[]),g=getRectsByLine(f),d=rectToClientRect(getBoundingRect(f)),m=getPaddingObject(s);const u=await r.getElementRects({reference:{getBoundingClientRect:function(){if(2===g.length&&g[0].left>g[1].right&&null!=a&&null!=c)return g.find((e=>a>e.left-m.left&&a<e.right+m.right&&c>e.top-m.top&&c<e.bottom+m.bottom))||d;if(g.length>=2){if("y"===getSideAxis(n)){const e=g[0],t=g[g.length-1],o="top"===getSide(n),i=e.top,r=t.bottom,l=o?e.left:t.left,s=o?e.right:t.right;return{top:i,bottom:r,left:l,right:s,width:s-l,height:r-i,x:l,y:i}}const e="left"===getSide(n),t=max(...g.map((e=>e.right))),o=min(...g.map((e=>e.left))),i=g.filter((n=>e?n.left===o:n.right===t)),r=i[0].top,l=i[i.length-1].bottom;return{top:r,bottom:l,left:o,right:t,width:t-o,height:l-r,x:o,y:r}}return d}},floating:o.floating,strategy:l});return i.reference.x!==u.reference.x||i.reference.y!==u.reference.y||i.reference.width!==u.reference.width||i.reference.height!==u.reference.height?{reset:{rects:u}}:{}}}};async function convertValueToCoords(e,t){const{placement:n,platform:o,elements:i}=e,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=getSide(n),s=getAlignment(n),a="y"===getSideAxis(n),c=["left","top"].includes(l)?-1:1,f=r&&a?-1:1,g=evaluate(t,e);let{mainAxis:d,crossAxis:m,alignmentAxis:u}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return s&&"number"==typeof u&&(m="end"===s?-1*u:u),a?{x:m*f,y:d*c}:{x:d*c,y:m*f}}const offset=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:i,y:r,placement:l,middlewareData:s}=t,a=await convertValueToCoords(t,e);return l===(null==(n=s.offset)?void 0:n.placement)&&null!=(o=s.arrow)&&o.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:l}}}}},shift$1=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:i}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...a}=evaluate(e,t),c={x:n,y:o},f=await detectOverflow(t,a),g=getSideAxis(getSide(i)),d=getOppositeAxis(g);let m=c[d],u=c[g];if(r){const e="y"===d?"bottom":"right";m=clamp(m+f["y"===d?"top":"left"],m,m-f[e])}if(l){const e="y"===g?"bottom":"right";u=clamp(u+f["y"===g?"top":"left"],u,u-f[e])}const p=s.fn({...t,[d]:m,[g]:u});return{...p,data:{x:p.x-n,y:p.y-o}}}}},limitShift=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:i,rects:r,middlewareData:l}=t,{offset:s=0,mainAxis:a=!0,crossAxis:c=!0}=evaluate(e,t),f={x:n,y:o},g=getSideAxis(i),d=getOppositeAxis(g);let m=f[d],u=f[g];const p=evaluate(s,t),h="number"==typeof p?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(a){const e="y"===d?"height":"width",t=r.reference[d]-r.floating[e]+h.mainAxis,n=r.reference[d]+r.reference[e]-h.mainAxis;m<t?m=t:m>n&&(m=n)}if(c){var w,y;const e="y"===d?"width":"height",t=["top","left"].includes(getSide(i)),n=r.reference[g]-r.floating[e]+(t&&(null==(w=l.offset)?void 0:w[g])||0)+(t?0:h.crossAxis),o=r.reference[g]+r.reference[e]+(t?0:(null==(y=l.offset)?void 0:y[g])||0)-(t?h.crossAxis:0);u<n?u=n:u>o&&(u=o)}return{[d]:m,[g]:u}}}},size=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:i,elements:r}=t,{apply:l=(()=>{}),...s}=evaluate(e,t),a=await detectOverflow(t,s),c=getSide(n),f=getAlignment(n),g="y"===getSideAxis(n),{width:d,height:m}=o.floating;let u,p;"top"===c||"bottom"===c?(u=c,p=f===(await(null==i.isRTL?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(p=c,u="end"===f?"top":"bottom");const h=m-a[u],w=d-a[p],y=!t.middlewareData.shift;let x=h,v=w;if(g){const e=d-a.left-a.right;v=f||y?min(w,e):e}else{const e=m-a.top-a.bottom;x=f||y?min(h,e):e}if(y&&!f){const e=max(a.left,0),t=max(a.right,0),n=max(a.top,0),o=max(a.bottom,0);g?v=d-2*(0!==e||0!==t?e+t:max(a.left,a.right)):x=m-2*(0!==n||0!==o?n+o:max(a.top,a.bottom))}await l({...t,availableWidth:v,availableHeight:x});const b=await i.getDimensions(r.floating);return d!==b.width||m!==b.height?{reset:{rects:!0}}:{}}}};function getNodeName(e){return isNode(e)?(e.nodeName||"").toLowerCase():"#document"}function getWindow(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function getDocumentElement(e){var t;return null==(t=(isNode(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function isNode(e){return e instanceof Node||e instanceof getWindow(e).Node}function isElement(e){return e instanceof Element||e instanceof getWindow(e).Element}function isHTMLElement(e){return e instanceof HTMLElement||e instanceof getWindow(e).HTMLElement}function isShadowRoot(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof getWindow(e).ShadowRoot)}function isOverflowElement(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=getComputedStyle(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function isTableElement(e){return["table","td","th"].includes(getNodeName(e))}function isContainingBlock(e){const t=isWebKit(),n=getComputedStyle(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function getContainingBlock(e){let t=getParentNode(e);for(;isHTMLElement(t)&&!isLastTraversableNode(t);){if(isContainingBlock(t))return t;t=getParentNode(t)}return null}function isWebKit(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function isLastTraversableNode(e){return["html","body","#document"].includes(getNodeName(e))}function getComputedStyle(e){return getWindow(e).getComputedStyle(e)}function getNodeScroll(e){return isElement(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function getParentNode(e){if("html"===getNodeName(e))return e;const t=e.assignedSlot||e.parentNode||isShadowRoot(e)&&e.host||getDocumentElement(e);return isShadowRoot(t)?t.host:t}function getNearestOverflowAncestor(e){const t=getParentNode(e);return isLastTraversableNode(t)?e.ownerDocument?e.ownerDocument.body:e.body:isHTMLElement(t)&&isOverflowElement(t)?t:getNearestOverflowAncestor(t)}function getOverflowAncestors(e,t,n){var o;void 0===t&&(t=[]),void 0===n&&(n=!0);const i=getNearestOverflowAncestor(e),r=i===(null==(o=e.ownerDocument)?void 0:o.body),l=getWindow(i);return r?t.concat(l,l.visualViewport||[],isOverflowElement(i)?i:[],l.frameElement&&n?getOverflowAncestors(l.frameElement):[]):t.concat(i,getOverflowAncestors(i,[],n))}function getCssDimensions(e){const t=getComputedStyle(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=isHTMLElement(e),r=i?e.offsetWidth:n,l=i?e.offsetHeight:o,s=round(n)!==r||round(o)!==l;return s&&(n=r,o=l),{width:n,height:o,$:s}}function unwrapElement(e){return isElement(e)?e:e.contextElement}function getScale(e){const t=unwrapElement(e);if(!isHTMLElement(t))return createCoords(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:r}=getCssDimensions(t);let l=(r?round(n.width):n.width)/o,s=(r?round(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}const noOffsets=createCoords(0);function getVisualOffsets(e){const t=getWindow(e);return isWebKit()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:noOffsets}function shouldAddVisualOffsets(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==getWindow(e))&&t}function getBoundingClientRect(e,t,n,o){void 0===t&&(t=!1),void 0===n&&(n=!1);const i=e.getBoundingClientRect(),r=unwrapElement(e);let l=createCoords(1);t&&(o?isElement(o)&&(l=getScale(o)):l=getScale(e));const s=shouldAddVisualOffsets(r,n,o)?getVisualOffsets(r):createCoords(0);let a=(i.left+s.x)/l.x,c=(i.top+s.y)/l.y,f=i.width/l.x,g=i.height/l.y;if(r){const e=getWindow(r),t=o&&isElement(o)?getWindow(o):o;let n=e.frameElement;for(;n&&o&&t!==e;){const e=getScale(n),t=n.getBoundingClientRect(),o=getComputedStyle(n),i=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,r=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;a*=e.x,c*=e.y,f*=e.x,g*=e.y,a+=i,c+=r,n=getWindow(n).frameElement}}return rectToClientRect({width:f,height:g,x:a,y:c})}function convertOffsetParentRelativeRectToViewportRelativeRect(e){let{rect:t,offsetParent:n,strategy:o}=e;const i=isHTMLElement(n),r=getDocumentElement(n);if(n===r)return t;let l={scrollLeft:0,scrollTop:0},s=createCoords(1);const a=createCoords(0);if((i||!i&&"fixed"!==o)&&(("body"!==getNodeName(n)||isOverflowElement(r))&&(l=getNodeScroll(n)),isHTMLElement(n))){const e=getBoundingClientRect(n);s=getScale(n),a.x=e.x+n.clientLeft,a.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-l.scrollLeft*s.x+a.x,y:t.y*s.y-l.scrollTop*s.y+a.y}}function getClientRects(e){return Array.from(e.getClientRects())}function getWindowScrollBarX(e){return getBoundingClientRect(getDocumentElement(e)).left+getNodeScroll(e).scrollLeft}function getDocumentRect(e){const t=getDocumentElement(e),n=getNodeScroll(e),o=e.ownerDocument.body,i=max(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=max(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+getWindowScrollBarX(e);const s=-n.scrollTop;return"rtl"===getComputedStyle(o).direction&&(l+=max(t.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:s}}function getViewportRect(e,t){const n=getWindow(e),o=getDocumentElement(e),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,s=0,a=0;if(i){r=i.width,l=i.height;const e=isWebKit();(!e||e&&"fixed"===t)&&(s=i.offsetLeft,a=i.offsetTop)}return{width:r,height:l,x:s,y:a}}function getInnerBoundingClientRect(e,t){const n=getBoundingClientRect(e,!0,"fixed"===t),o=n.top+e.clientTop,i=n.left+e.clientLeft,r=isHTMLElement(e)?getScale(e):createCoords(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:i*r.x,y:o*r.y}}function getClientRectFromClippingAncestor(e,t,n){let o;if("viewport"===t)o=getViewportRect(e,n);else if("document"===t)o=getDocumentRect(getDocumentElement(e));else if(isElement(t))o=getInnerBoundingClientRect(t,n);else{const n=getVisualOffsets(e);o={...t,x:t.x-n.x,y:t.y-n.y}}return rectToClientRect(o)}function hasFixedPositionAncestor(e,t){const n=getParentNode(e);return!(n===t||!isElement(n)||isLastTraversableNode(n))&&("fixed"===getComputedStyle(n).position||hasFixedPositionAncestor(n,t))}function getClippingElementAncestors(e,t){const n=t.get(e);if(n)return n;let o=getOverflowAncestors(e,[],!1).filter((e=>isElement(e)&&"body"!==getNodeName(e))),i=null;const r="fixed"===getComputedStyle(e).position;let l=r?getParentNode(e):e;for(;isElement(l)&&!isLastTraversableNode(l);){const t=getComputedStyle(l),n=isContainingBlock(l);n||"fixed"!==t.position||(i=null);(r?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||isOverflowElement(l)&&!n&&hasFixedPositionAncestor(e,l))?o=o.filter((e=>e!==l)):i=t,l=getParentNode(l)}return t.set(e,o),o}function getClippingRect(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e;const r=[..."clippingAncestors"===n?getClippingElementAncestors(t,this._c):[].concat(n),o],l=r[0],s=r.reduce(((e,n)=>{const o=getClientRectFromClippingAncestor(t,n,i);return e.top=max(o.top,e.top),e.right=min(o.right,e.right),e.bottom=min(o.bottom,e.bottom),e.left=max(o.left,e.left),e}),getClientRectFromClippingAncestor(t,l,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function getDimensions(e){const{width:t,height:n}=getCssDimensions(e);return{width:t,height:n}}function getRectRelativeToOffsetParent(e,t,n){const o=isHTMLElement(t),i=getDocumentElement(t),r="fixed"===n,l=getBoundingClientRect(e,!0,r,t);let s={scrollLeft:0,scrollTop:0};const a=createCoords(0);if(o||!o&&!r)if(("body"!==getNodeName(t)||isOverflowElement(i))&&(s=getNodeScroll(t)),o){const e=getBoundingClientRect(t,!0,r,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else i&&(a.x=getWindowScrollBarX(i));return{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function getTrueOffsetParent(e,t){return isHTMLElement(e)&&"fixed"!==getComputedStyle(e).position?t?t(e):e.offsetParent:null}function getOffsetParent(e,t){const n=getWindow(e);if(!isHTMLElement(e))return n;let o=getTrueOffsetParent(e,t);for(;o&&isTableElement(o)&&"static"===getComputedStyle(o).position;)o=getTrueOffsetParent(o,t);return o&&("html"===getNodeName(o)||"body"===getNodeName(o)&&"static"===getComputedStyle(o).position&&!isContainingBlock(o))?n:o||getContainingBlock(e)||n}const getElementRects=async function(e){let{reference:t,floating:n,strategy:o}=e;const i=this.getOffsetParent||getOffsetParent,r=this.getDimensions;return{reference:getRectRelativeToOffsetParent(t,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function isRTL(e){return"rtl"===getComputedStyle(e).direction}const platform={convertOffsetParentRelativeRectToViewportRelativeRect:convertOffsetParentRelativeRectToViewportRelativeRect,getDocumentElement:getDocumentElement,getClippingRect:getClippingRect,getOffsetParent:getOffsetParent,getElementRects:getElementRects,getClientRects:getClientRects,getDimensions:getDimensions,getScale:getScale,isElement:isElement,isRTL:isRTL};function observeMove(e,t){let n,o=null;const i=getDocumentElement(e);function r(){clearTimeout(n),o&&o.disconnect(),o=null}return function l(s,a){void 0===s&&(s=!1),void 0===a&&(a=1),r();const{left:c,top:f,width:g,height:d}=e.getBoundingClientRect();if(s||t(),!g||!d)return;const m={rootMargin:-floor(f)+"px "+-floor(i.clientWidth-(c+g))+"px "+-floor(i.clientHeight-(f+d))+"px "+-floor(c)+"px",threshold:max(0,min(1,a))||1};let u=!0;function p(e){const t=e[0].intersectionRatio;if(t!==a){if(!u)return l();t?l(!1,t):n=setTimeout((()=>{l(!1,1e-7)}),100)}u=!1}try{o=new IntersectionObserver(p,{...m,root:i.ownerDocument})}catch(e){o=new IntersectionObserver(p,m)}o.observe(e)}(!0),r}function autoUpdate(e,t,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:a=!1}=o,c=unwrapElement(e),f=i||r?[...c?getOverflowAncestors(c):[],...getOverflowAncestors(t)]:[];f.forEach((e=>{i&&e.addEventListener("scroll",n,{passive:!0}),r&&e.addEventListener("resize",n)}));const g=c&&s?observeMove(c,n):null;let d,m=-1,u=null;l&&(u=new ResizeObserver((e=>{let[o]=e;o&&o.target===c&&u&&(u.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame((()=>{u&&u.observe(t)}))),n()})),c&&!a&&u.observe(c),u.observe(t));let p=a?getBoundingClientRect(e):null;return a&&function t(){const o=getBoundingClientRect(e);!p||o.x===p.x&&o.y===p.y&&o.width===p.width&&o.height===p.height||n();p=o,d=requestAnimationFrame(t)}(),n(),()=>{f.forEach((e=>{i&&e.removeEventListener("scroll",n),r&&e.removeEventListener("resize",n)})),g&&g(),u&&u.disconnect(),u=null,a&&cancelAnimationFrame(d)}}const shift=shift$1,flip=flip$1,arrow=arrow$1,computePosition=(e,t,n)=>{const o=new Map,i={platform:platform,...n},r={...i.platform,_c:o};return computePosition$1(e,t,{...i,platform:r})},alignFloatingElements=async({floatingElement:e,referenceElement:t,arrowElement:n,align:o="top"})=>{var i,r,l;if("test"!==processEnv){const s=[offset(null!==(i=null==n?void 0:n.offsetHeight)&&void 0!==i?i:10),flip(),shift()];n&&s.push(arrow({element:n}));const{x:a,y:c,middlewareData:f,placement:g}=await computePosition(t,e,{placement:o,middleware:s,strategy:"fixed"});Object.assign(e.style,{left:`${a}px`,top:`${c}px`,visibility:"visible"}),n&&((null===(r=f.arrow)||void 0===r?void 0:r.x)?Object.assign(n.style,{left:`${f.arrow.x}px`,top:"bottom"===g?-n.offsetHeight/2+"px":"",bottom:"top"===g?-n.offsetHeight/2+"px":""}):(null===(l=f.arrow)||void 0===l?void 0:l.y)&&Object.assign(n.style,{left:"right"===g?-n.offsetWidth/2+"px":"",right:"left"===g?-n.offsetWidth/2+"px":"",top:`${f.arrow.y}px`}))}};export{alignFloatingElements as a,autoUpdate as b};