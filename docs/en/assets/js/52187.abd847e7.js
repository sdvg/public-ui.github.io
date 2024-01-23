"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[52187],{52187:(t,e,a)=>{a.d(e,{a:()=>l,b:()=>T,c:()=>o,d:()=>H,e:()=>S,f:()=>I,g:()=>N,h:()=>j,i:()=>f,j:()=>Y,k:()=>P,l:()=>d,p:()=>B,s:()=>M,u:()=>c});var r=a(15544),n=a(1068),i=a(66657);const s={extension:(t,e,a)=>{r.l.trace("Making markers for ",a),t.append("defs").append("marker").attr("id",a+"_"+e+"-extensionStart").attr("class","marker extension "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-compositionStart").attr("class","marker composition "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",a+"_"+e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),t.append("defs").append("marker").attr("id",a+"_"+e+"-lollipopEnd").attr("class","marker lollipop "+e).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},point:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e,a)=>{t.append("marker").attr("id",a+"_"+e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",a+"_"+e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e,a)=>{t.append("defs").append("marker").attr("id",a+"_"+e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},l=(t,e,a,r)=>{e.forEach((e=>{s[e](t,a,r)}))};const o=(t,e,a,i)=>{let s=t||"";if("object"==typeof s&&(s=s[0]),(0,r.m)((0,r.c)().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),r.l.info("vertexText"+s);let t=function(t){const e=(0,n.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=e.append("xhtml:div"),r=t.label,i=t.isNode?"nodeLabel":"edgeLabel";var s,l;return a.html('<span class="'+i+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+r+"</span>"),s=a,(l=t.labelStyle)&&s.attr("style",l),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}({isNode:i,label:(0,r.J)(s).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:e.replace("fill:","color:")});return t}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));let r=[];r="string"==typeof s?s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?s:[];for(const e of r){const r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),a?r.setAttribute("class","title-row"):r.setAttribute("class","row"),r.textContent=e.trim(),t.appendChild(r)}return t}},d=async(t,e,a,s)=>{let l;const d=e.useHtmlLabels||(0,r.m)((0,r.c)().flowchart.htmlLabels);l=a||"node default";const c=t.insert("g").attr("class",l).attr("id",e.domId||e.id),h=c.insert("g").attr("class","label").attr("style",e.labelStyle);let p;p=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];const g=h.node();let y;y="markdown"===e.labelType?(0,i.a)(h,(0,r.d)((0,r.J)(p),(0,r.c)()),{useHtmlLabels:d,width:e.width||(0,r.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):g.appendChild(o((0,r.d)((0,r.J)(p),(0,r.c)()),e.labelStyle,!1,s));let f=y.getBBox();const w=e.padding/2;if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=y.children[0],e=(0,n.Ys)(y),a=t.getElementsByTagName("img");if(a){const t=""===p.replace(/<img[^>]*>/g,"").trim();await Promise.all([...a].map((e=>new Promise((a=>{function n(){if(e.style.display="flex",e.style.flexDirection="column",t){const t=(0,r.c)().fontSize?(0,r.c)().fontSize:window.getComputedStyle(document.body).fontSize,a=5,n=parseInt(t,10)*a+"px";e.style.minWidth=n,e.style.maxWidth=n}else e.style.width="100%";a(e)}setTimeout((()=>{e.complete&&n()})),e.addEventListener("error",n),e.addEventListener("load",n)})))))}f=t.getBoundingClientRect(),e.attr("width",f.width),e.attr("height",f.height)}return d?h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):h.attr("transform","translate(0, "+-f.height/2+")"),e.centerLabel&&h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),h.insert("rect",":first-child"),{shapeSvg:c,bbox:f,halfPadding:w,label:h}},c=(t,e)=>{const a=e.node().getBBox();t.width=a.width,t.height=a.height};function h(t,e,a,r){return t.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+a/2+")")}function p(t,e,a,r){var n=t.x,i=t.y,s=n-r.x,l=i-r.y,o=Math.sqrt(e*e*l*l+a*a*s*s),d=Math.abs(e*a*s/o);r.x<n&&(d=-d);var c=Math.abs(e*a*l/o);return r.y<i&&(c=-c),{x:n+d,y:i+c}}function g(t,e,a,r){var n,i,s,l,o,d,c,h,p,g,f,w,x;if(n=e.y-t.y,s=t.x-e.x,o=e.x*t.y-t.x*e.y,p=n*a.x+s*a.y+o,g=n*r.x+s*r.y+o,!(0!==p&&0!==g&&y(p,g)||(i=r.y-a.y,l=a.x-r.x,d=r.x*a.y-a.x*r.y,c=i*t.x+l*t.y+d,h=i*e.x+l*e.y+d,0!==c&&0!==h&&y(c,h)||0==(f=n*l-i*s))))return w=Math.abs(f/2),{x:(x=s*d-l*o)<0?(x-w)/f:(x+w)/f,y:(x=i*o-n*d)<0?(x-w)/f:(x+w)/f}}function y(t,e){return t*e>0}const f=(t,e)=>{var a,r,n=t.x,i=t.y,s=e.x-n,l=e.y-i,o=t.width/2,d=t.height/2;return Math.abs(l)*o>Math.abs(s)*d?(l<0&&(d=-d),a=0===l?0:d*s/l,r=d):(s<0&&(o=-o),a=o,r=0===s?0:o*l/s),{x:n+a,y:i+r}},w={node:function(t,e){return t.intersect(e)},circle:function(t,e,a){return p(t,e,e,a)},ellipse:p,polygon:function(t,e,a){var r=t.x,n=t.y,i=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var o=r-t.width/2-s,d=n-t.height/2-l,c=0;c<e.length;c++){var h=e[c],p=e[c<e.length-1?c+1:0],y=g(t,a,{x:o+h.x,y:d+h.y},{x:o+p.x,y:d+p.y});y&&i.push(y)}return i.length?(i.length>1&&i.sort((function(t,e){var r=t.x-a.x,n=t.y-a.y,i=Math.sqrt(r*r+n*n),s=e.x-a.x,l=e.y-a.y,o=Math.sqrt(s*s+l*l);return i<o?-1:i===o?0:1})),i[0]):t},rect:f},x=t=>t?" "+t:"",u=(t,e)=>`${e||"node default"}${x(t.classes)} ${x(t.class)}`,b=async(t,e)=>{const{shapeSvg:a,bbox:n}=await d(t,e,u(e,void 0),!0),i=n.width+e.padding+(n.height+e.padding),s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];r.l.info("Question main (Circle)");const l=h(a,i,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return r.l.warn("Intersect called"),w.polygon(e,s,t)},a};function m(t,e,a,n){const i=[],s=t=>{i.push(t,0)},l=t=>{i.push(0,t)};e.includes("t")?(r.l.debug("add top border"),s(a)):l(a),e.includes("r")?(r.l.debug("add right border"),s(n)):l(n),e.includes("b")?(r.l.debug("add bottom border"),s(a)):l(a),e.includes("l")?(r.l.debug("add left border"),s(n)):l(n),t.attr("stroke-dasharray",i.join(" "))}const k=(t,e,a)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);let n=70,i=10;"LR"===a&&(n=10,i=70);const s=r.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return c(e,s),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return w.rect(e,t)},r},L={rhombus:b,question:b,rect:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await d(t,e,"node "+e.classes+" "+e.class,!0),s=a.insert("rect",":first-child"),l=n.width+e.padding,o=n.height+e.padding;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",l).attr("height",o),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(m(s,e.props.borders,l,o),t.delete("borders")),t.forEach((t=>{r.l.warn(`Unknown node property ${t}`)}))}return c(e,s),e.intersect=function(t){return w.rect(e,t)},a},labelRect:async(t,e)=>{const{shapeSvg:a}=await d(t,e,"label",!0);r.l.trace("Classes = ",e.class);const n=a.insert("rect",":first-child");if(n.attr("width",0).attr("height",0),a.attr("class","label edgeLabel"),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(m(n,e.props.borders,0,0),t.delete("borders")),t.forEach((t=>{r.l.warn(`Unknown node property ${t}`)}))}return c(e,n),e.intersect=function(t){return w.rect(e,t)},a},rectWithTitle:(t,e)=>{let a;a=e.classes?"node "+e.classes:"node default";const i=t.insert("g").attr("class",a).attr("id",e.domId||e.id),s=i.insert("rect",":first-child"),l=i.insert("line"),d=i.insert("g").attr("class","label"),h=e.labelText.flat?e.labelText.flat():e.labelText;let p="";p="object"==typeof h?h[0]:h,r.l.info("Label text abc79",p,h,"object"==typeof h);const g=d.node().appendChild(o(p,e.labelStyle,!0,!0));let y={width:0,height:0};if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=g.children[0],e=(0,n.Ys)(g);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}r.l.info("Text 2",h);const f=h.slice(1,h.length);let x=g.getBBox();const u=d.node().appendChild(o(f.join?f.join("<br/>"):f,e.labelStyle,!0,!0));if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=u.children[0],e=(0,n.Ys)(u);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}const b=e.padding/2;return(0,n.Ys)(u).attr("transform","translate( "+(y.width>x.width?0:(x.width-y.width)/2)+", "+(x.height+b+5)+")"),(0,n.Ys)(g).attr("transform","translate( "+(y.width<x.width?0:-(x.width-y.width)/2)+", 0)"),y=d.node().getBBox(),d.attr("transform","translate("+-y.width/2+", "+(-y.height/2-b+3)+")"),s.attr("class","outer title-state").attr("x",-y.width/2-b).attr("y",-y.height/2-b).attr("width",y.width+e.padding).attr("height",y.height+e.padding),l.attr("class","divider").attr("x1",-y.width/2-b).attr("x2",y.width/2+b).attr("y1",-y.height/2-b+x.height+b).attr("y2",-y.height/2-b+x.height+b),c(e,s),e.intersect=function(t){return w.rect(e,t)},i},choice:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return a.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return w.circle(e,14,t)},a},circle:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await d(t,e,u(e,void 0),!0),s=a.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),r.l.info("Circle main"),c(e,s),e.intersect=function(t){return r.l.info("Circle intersect",e,n.width/2+i,t),w.circle(e,n.width/2+i,t)},a},doublecircle:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await d(t,e,u(e,void 0),!0),s=a.insert("g",":first-child"),l=s.insert("circle"),o=s.insert("circle");return s.attr("class",e.class),l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i+5).attr("width",n.width+e.padding+10).attr("height",n.height+e.padding+10),o.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),r.l.info("DoubleCircle main"),c(e,l),e.intersect=function(t){return r.l.info("DoubleCircle intersect",e,n.width/2+i+5,t),w.circle(e,n.width/2+i+5,t)},a},stadium:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.height+e.padding,i=r.width+n/4+e.padding,s=a.insert("rect",":first-child").attr("style",e.style).attr("rx",n/2).attr("ry",n/2).attr("x",-i/2).attr("y",-n/2).attr("width",i).attr("height",n);return c(e,s),e.intersect=function(t){return w.rect(e,t)},a},hexagon:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.height+e.padding,i=n/4,s=r.width+2*i+e.padding,l=[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],o=h(a,s,n,l);return o.attr("style",e.style),c(e,o),e.intersect=function(t){return w.polygon(e,l,t)},a},rect_left_inv_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-i/2,y:0},{x:n,y:0},{x:n,y:-i},{x:-i/2,y:-i},{x:0,y:-i/2}];return h(a,n,i,s).attr("style",e.style),e.width=n+i,e.height=i,e.intersect=function(t){return w.polygon(e,s,t)},a},lean_right:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-2*i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:i/6,y:-i}],l=h(a,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return w.polygon(e,s,t)},a},lean_left:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:2*i/6,y:0},{x:n+i/6,y:0},{x:n-2*i/6,y:-i},{x:-i/6,y:-i}],l=h(a,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return w.polygon(e,s,t)},a},trapezoid:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-2*i/6,y:0},{x:n+2*i/6,y:0},{x:n-i/6,y:-i},{x:i/6,y:-i}],l=h(a,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return w.polygon(e,s,t)},a},inv_trapezoid:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:-2*i/6,y:-i}],l=h(a,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return w.polygon(e,s,t)},a},rect_right_inv_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:0,y:0},{x:n+i/2,y:0},{x:n,y:-i/2},{x:n+i/2,y:-i},{x:0,y:-i}],l=h(a,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return w.polygon(e,s,t)},a},cylinder:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.width+e.padding,i=n/2,s=i/(2.5+n/50),l=r.height+s+e.padding,o="M 0,"+s+" a "+i+","+s+" 0,0,0 "+n+" 0 a "+i+","+s+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+i+","+s+" 0,0,0 "+n+" 0 l 0,"+-l,h=a.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d",o).attr("transform","translate("+-n/2+","+-(l/2+s)+")");return c(e,h),e.intersect=function(t){const a=w.rect(e,t),r=a.x-e.x;if(0!=i&&(Math.abs(r)<e.width/2||Math.abs(r)==e.width/2&&Math.abs(a.y-e.y)>e.height/2-s)){let n=s*s*(1-r*r/(i*i));0!=n&&(n=Math.sqrt(n)),n=s-n,t.y-e.y>0&&(n=-n),a.y+=n}return a},a},start:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child");return r.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),c(e,r),e.intersect=function(t){return w.circle(e,7,t)},a},end:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child"),n=a.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),r.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),c(e,n),e.intersect=function(t){return w.circle(e,7,t)},a},note:async(t,e)=>{e.useHtmlLabels||(0,r.c)().flowchart.htmlLabels||(e.centerLabel=!0);const{shapeSvg:a,bbox:n,halfPadding:i}=await d(t,e,"node "+e.classes,!0);r.l.info("Classes = ",e.classes);const s=a.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),c(e,s),e.intersect=function(t){return w.rect(e,t)},a},subroutine:async(t,e)=>{const{shapeSvg:a,bbox:r}=await d(t,e,u(e,void 0),!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-i},{x:0,y:-i},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-i},{x:-8,y:-i},{x:-8,y:0}],l=h(a,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return w.polygon(e,s,t)},a},fork:k,join:k,class_box:(t,e)=>{const a=e.padding/2;let i;i=e.classes?"node "+e.classes:"node default";const s=t.insert("g").attr("class",i).attr("id",e.domId||e.id),l=s.insert("rect",":first-child"),d=s.insert("line"),h=s.insert("line");let p=0,g=4;const y=s.insert("g").attr("class","label");let f=0;const x=e.classData.annotations&&e.classData.annotations[0],u=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",b=y.node().appendChild(o(u,e.labelStyle,!0,!0));let m=b.getBBox();if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=b.children[0],e=(0,n.Ys)(b);m=t.getBoundingClientRect(),e.attr("width",m.width),e.attr("height",m.height)}e.classData.annotations[0]&&(g+=m.height+4,p+=m.width);let k=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,r.c)().flowchart.htmlLabels?k+="&lt;"+e.classData.type+"&gt;":k+="<"+e.classData.type+">");const L=y.node().appendChild(o(k,e.labelStyle,!0,!0));(0,n.Ys)(L).attr("class","classTitle");let v=L.getBBox();if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=L.children[0],e=(0,n.Ys)(L);v=t.getBoundingClientRect(),e.attr("width",v.width),e.attr("height",v.height)}g+=v.height+4,v.width>p&&(p=v.width);const S=[];e.classData.members.forEach((t=>{const a=t.getDisplayDetails();let i=a.displayText;(0,r.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=y.node().appendChild(o(i,a.cssStyle?a.cssStyle:e.labelStyle,!0,!0));let l=s.getBBox();if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=s.children[0],e=(0,n.Ys)(s);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>p&&(p=l.width),g+=l.height+4,S.push(s)})),g+=8;const M=[];if(e.classData.methods.forEach((t=>{const a=t.getDisplayDetails();let i=a.displayText;(0,r.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=y.node().appendChild(o(i,a.cssStyle?a.cssStyle:e.labelStyle,!0,!0));let l=s.getBBox();if((0,r.m)((0,r.c)().flowchart.htmlLabels)){const t=s.children[0],e=(0,n.Ys)(s);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>p&&(p=l.width),g+=l.height+4,M.push(s)})),g+=8,x){let t=(p-m.width)/2;(0,n.Ys)(b).attr("transform","translate( "+(-1*p/2+t)+", "+-1*g/2+")"),f=m.height+4}let T=(p-v.width)/2;return(0,n.Ys)(L).attr("transform","translate( "+(-1*p/2+T)+", "+(-1*g/2+f)+")"),f+=v.height+4,d.attr("class","divider").attr("x1",-p/2-a).attr("x2",p/2+a).attr("y1",-g/2-a+8+f).attr("y2",-g/2-a+8+f),f+=8,S.forEach((t=>{(0,n.Ys)(t).attr("transform","translate( "+-p/2+", "+(-1*g/2+f+4)+")");const e=null==t?void 0:t.getBBox();f+=((null==e?void 0:e.height)??0)+4})),f+=8,h.attr("class","divider").attr("x1",-p/2-a).attr("x2",p/2+a).attr("y1",-g/2-a+8+f).attr("y2",-g/2-a+8+f),f+=8,M.forEach((t=>{(0,n.Ys)(t).attr("transform","translate( "+-p/2+", "+(-1*g/2+f)+")");const e=null==t?void 0:t.getBBox();f+=((null==e?void 0:e.height)??0)+4})),l.attr("style",e.style).attr("class","outer title-state").attr("x",-p/2-a).attr("y",-g/2-a).attr("width",p+e.padding).attr("height",g+e.padding),c(e,l),e.intersect=function(t){return w.rect(e,t)},s}};let v={};const S=async(t,e,a)=>{let n,i;if(e.link){let s;"sandbox"===(0,r.c)().securityLevel?s="_top":e.linkTarget&&(s=e.linkTarget||"_blank"),n=t.insert("svg:a").attr("xlink:href",e.link).attr("target",s),i=await L[e.shape](n,e,a)}else i=await L[e.shape](t,e,a),n=i;return e.tooltip&&i.attr("title",e.tooltip),e.class&&i.attr("class","node default "+e.class),v[e.id]=n,e.haveCallback&&v[e.id].attr("class",v[e.id].attr("class")+" clickable"),n},M=(t,e)=>{v[e.id]=t},T=()=>{v={}},B=t=>{const e=v[t.id];r.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const a=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+a-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),a},_={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function C(t,e){if(void 0===t||void 0===e)return{angle:0,deltaX:0,deltaY:0};t=E(t),e=E(e);const[a,r]=[t.x,t.y],[n,i]=[e.x,e.y],s=n-a,l=i-r;return{angle:Math.atan(l/s),deltaX:s,deltaY:l}}const E=t=>Array.isArray(t)?{x:t[0],y:t[1]}:t,Y=t=>({x:function(e,a,r){let n=0;if(0===a&&Object.hasOwn(_,t.arrowTypeStart)){const{angle:e,deltaX:a}=C(r[0],r[1]);n=_[t.arrowTypeStart]*Math.cos(e)*(a>=0?1:-1)}else if(a===r.length-1&&Object.hasOwn(_,t.arrowTypeEnd)){const{angle:e,deltaX:a}=C(r[r.length-1],r[r.length-2]);n=_[t.arrowTypeEnd]*Math.cos(e)*(a>=0?1:-1)}return E(e).x+n},y:function(e,a,r){let n=0;if(0===a&&Object.hasOwn(_,t.arrowTypeStart)){const{angle:e,deltaY:a}=C(r[0],r[1]);n=_[t.arrowTypeStart]*Math.abs(Math.sin(e))*(a>=0?1:-1)}else if(a===r.length-1&&Object.hasOwn(_,t.arrowTypeEnd)){const{angle:e,deltaY:a}=C(r[r.length-1],r[r.length-2]);n=_[t.arrowTypeEnd]*Math.abs(Math.sin(e))*(a>=0?1:-1)}return E(e).y+n}}),P=(t,e,a,r,n)=>{e.arrowTypeStart&&R(t,"start",e.arrowTypeStart,a,r,n),e.arrowTypeEnd&&R(t,"end",e.arrowTypeEnd,a,r,n)},$={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},R=(t,e,a,n,i,s)=>{const l=$[a];if(!l)return void r.l.warn(`Unknown arrow type: ${a}`);const o="start"===e?"Start":"End";t.attr(`marker-${e}`,`url(${n}#${i}_${s}-${l}${o})`)};let W={},X={};const H=()=>{W={},X={}},I=(t,e)=>{const a=(0,r.m)((0,r.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,i.a)(t,e.label,{style:e.labelStyle,useHtmlLabels:a,addSvgBackground:!0}):o(e.label,e.labelStyle);r.l.info("abc82",e,e.labelType);const l=t.insert("g").attr("class","edgeLabel"),d=l.insert("g").attr("class","label");d.node().appendChild(s);let c,h=s.getBBox();if(a){const t=s.children[0],e=(0,n.Ys)(s);h=t.getBoundingClientRect(),e.attr("width",h.width),e.attr("height",h.height)}if(d.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),W[e.id]=l,e.width=h.width,e.height=h.height,e.startLabelLeft){const a=o(e.startLabelLeft,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");c=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),X[e.id]||(X[e.id]={}),X[e.id].startLeft=r,O(c,e.startLabelLeft)}if(e.startLabelRight){const a=o(e.startLabelRight,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");c=r.node().appendChild(a),n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),X[e.id]||(X[e.id]={}),X[e.id].startRight=r,O(c,e.startLabelRight)}if(e.endLabelLeft){const a=o(e.endLabelLeft,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");c=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),r.node().appendChild(a),X[e.id]||(X[e.id]={}),X[e.id].endLeft=r,O(c,e.endLabelLeft)}if(e.endLabelRight){const a=o(e.endLabelRight,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");c=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),r.node().appendChild(a),X[e.id]||(X[e.id]={}),X[e.id].endRight=r,O(c,e.endLabelRight)}return s};function O(t,e){(0,r.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}const j=(t,e)=>{r.l.info("Moving label abc78 ",t.id,t.label,W[t.id]);let a=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){const n=W[t.id];let i=t.x,s=t.y;if(a){const n=r.u.calcLabelPosition(a);r.l.info("Moving label "+t.label+" from (",i,",",s,") to (",n.x,",",n.y,") abc78"),e.updatedPath&&(i=n.x,s=n.y)}n.attr("transform","translate("+i+", "+s+")")}if(t.startLabelLeft){const e=X[t.id].startLeft;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",a);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.startLabelRight){const e=X[t.id].startRight;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",a);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.endLabelLeft){const e=X[t.id].endLeft;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",a);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.endLabelRight){const e=X[t.id].endRight;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",a);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}},D=(t,e)=>{r.l.warn("abc88 cutPathAtIntersect",t,e);let a=[],n=t[0],i=!1;return t.forEach((t=>{if(r.l.info("abc88 checking point",t,e),((t,e)=>{const a=t.x,r=t.y,n=Math.abs(e.x-a),i=Math.abs(e.y-r),s=t.width/2,l=t.height/2;return n>=s||i>=l})(e,t)||i)r.l.warn("abc88 outside",t,n),n=t,i||a.push(t);else{const s=((t,e,a)=>{r.l.warn(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(a)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);const n=t.x,i=t.y,s=Math.abs(n-a.x),l=t.width/2;let o=a.x<e.x?l-s:l+s;const d=t.height/2,c=Math.abs(e.y-a.y),h=Math.abs(e.x-a.x);if(Math.abs(i-e.y)*l>Math.abs(n-e.x)*d){let t=a.y<e.y?e.y-d-i:i-d-e.y;o=h*t/c;const n={x:a.x<e.x?a.x+o:a.x-h+o,y:a.y<e.y?a.y+c-t:a.y-c+t};return 0===o&&(n.x=e.x,n.y=e.y),0===h&&(n.x=e.x),0===c&&(n.y=e.y),r.l.warn(`abc89 topp/bott calc, Q ${c}, q ${t}, R ${h}, r ${o}`,n),n}{o=a.x<e.x?e.x-l-n:n-l-e.x;let t=c*o/h,i=a.x<e.x?a.x+h-o:a.x-h+o,s=a.y<e.y?a.y+t:a.y-t;return r.l.warn(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${o}`,{_x:i,_y:s}),0===o&&(i=e.x,s=e.y),0===h&&(i=e.x),0===c&&(s=e.y),{x:i,y:s}}})(e,n,t);r.l.warn("abc88 inside",t,n,s),r.l.warn("abc88 intersection",s);let l=!1;a.forEach((t=>{l=l||t.x===s.x&&t.y===s.y})),a.some((t=>t.x===s.x&&t.y===s.y))?r.l.warn("abc88 no intersect",s,a):a.push(s),i=!0}})),r.l.warn("abc88 returning points",a),a},N=function(t,e,a,i,s,l,o){let d=a.points,c=!1;const h=l.node(e.v);var p=l.node(e.w);r.l.info("abc88 InsertEdge: ",a),p.intersect&&h.intersect&&(d=d.slice(1,a.points.length-1),d.unshift(h.intersect(d[0])),r.l.info("Last point",d[d.length-1],p,p.intersect(d[d.length-1])),d.push(p.intersect(d[d.length-1]))),a.toCluster&&(r.l.info("to cluster abc88",i[a.toCluster]),d=D(a.points,i[a.toCluster].node),c=!0),a.fromCluster&&(r.l.info("from cluster abc88",i[a.fromCluster]),d=D(d.reverse(),i[a.fromCluster].node).reverse(),c=!0);const g=d.filter((t=>!Number.isNaN(t.y)));let y=n.$0Z;!a.curve||"graph"!==s&&"flowchart"!==s||(y=a.curve);const{x:f,y:w}=Y(a),x=(0,n.jvg)().x(f).y(w).curve(y);let u;switch(a.thickness){case"normal":u="edge-thickness-normal";break;case"thick":case"invisible":u="edge-thickness-thick";break;default:u=""}switch(a.pattern){case"solid":u+=" edge-pattern-solid";break;case"dotted":u+=" edge-pattern-dotted";break;case"dashed":u+=" edge-pattern-dashed"}const b=t.append("path").attr("d",x(g)).attr("id",a.id).attr("class"," "+u+(a.classes?" "+a.classes:"")).attr("style",a.style);let m="";((0,r.c)().flowchart.arrowMarkerAbsolute||(0,r.c)().state.arrowMarkerAbsolute)&&(m=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,m=m.replace(/\(/g,"\\("),m=m.replace(/\)/g,"\\)")),r.l.info("arrowTypeStart",a.arrowTypeStart),r.l.info("arrowTypeEnd",a.arrowTypeEnd),P(b,a,m,o,s);let k={};return c&&(k.updatedPath=d),k.originalPath=a.points,k}}}]);