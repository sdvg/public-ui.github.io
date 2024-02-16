/*! For license information please see main.3816d683.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[61590],{78716:(e,t,o)=>{var n={"./":33136};function r(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=78716},85800:(e,t,o)=>{"use strict";o.d(t,{g:()=>a,i:()=>i,n:()=>c,r:()=>s});var n=o(75224);class r{constructor(){this.lockedElements=new Map,this.modalStack=new Map}lockElement(e){const t=e.getAttribute("tabindex");(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||"string"==typeof t||void 0!==e.dataset.kolModal)&&("string"==typeof t?this.lockedElements.set(e,{tabIndex:t}):this.lockedElements.set(e,{}),e.setAttribute("tabindex","-1"),e.setAttribute("aria-hidden","true"),e.style.userSelect="none")}unlockElement(e,t){"string"==typeof e.tabIndex?t.setAttribute("tabindex",e.tabIndex):t.removeAttribute("tabindex"),t.removeAttribute("aria-hidden"),t.style.userSelect="unset",this.lockedElements.delete(t)}unlockLockedElements(e){e.forEach(this.unlockElement.bind(this))}lockFocus(e,t){try{if(e!==t&&(e instanceof HTMLElement||e instanceof ShadowRoot)){e instanceof HTMLElement&&(this.lockElement(e),this.lockFocus(e.shadowRoot,t));for(let o=0;o<e.children.length;o++)this.lockFocus(e.children[o],t)}}catch(e){}}renderModalIfExists(e){if(e instanceof HTMLElement){this.lockedElements.has(e)&&this.unlockElement(this.lockedElements.get(e),e);const t=setTimeout((()=>{clearTimeout(t),e.focus()}),500)}if(this.unlockLockedElements(this.lockedElements),this.modalStack.size>0){const e=Array.from(this.modalStack.keys()),t=e[e.length-1];this.modalStack.forEach(((e,o)=>{o.style.display=t===o?"inline":"none"})),(0,n.g)().body.style.maxHeight="100vh",(0,n.g)().body.style.overflow="hidden",this.lockFocus((0,n.g)().body,t)}else(0,n.g)().body.style.maxHeight="unset",(0,n.g)().body.style.overflow="unset"}openModal(e,t){e instanceof HTMLElement==0?n.L.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide."):(this.modalStack.set(e,{activeElement:t}),this.renderModalIfExists())}closeModal(e){var t;if(e instanceof HTMLElement==0)n.L.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide.");else{const o=null===(t=this.modalStack.get(e))||void 0===t?void 0:t.activeElement;this.modalStack.delete(e),this.renderModalIfExists(o)}}}const a=()=>{let e=(0,n.a)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,n.a)(),"KoliBri",{value:e,writable:!1})),e},i=()=>{if(void 0===a().Modal){const e=new r;Object.defineProperty(a(),"Modal",{get:function(){return e}}),(()=>{const e=(0,n.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,n.c)(t.includes("dev-mode=true")),(0,n.d)(t.includes("experimental-mode=true")),(0,n.f)(t.includes("color-contrast-analysis=true")))}})(),n.L.debug("\n\t,--. ,--.         ,--. ,--. ,-----.           ,--.\n\t|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n\t|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n\t|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\t`--' `--\xb4  `---\xb4  `--' `--' `------\xb4  `--'    `--'\n\t\ud83d\udeb9 The accessible HTML-Standard | \ud83d\udc49 https://public-ui.github.io | 2.0.6\n\t\t",{forceLog:!0})}else console.warn("You can only initialize KoliBri once.")},s=()=>{!0!==a().adviceShown&&(Object.defineProperty(a(),"adviceShown",{get:function(){return!0}}),n.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let c=()=>Math.floor(16777215*Math.random()).toString(16);"test"===n.p&&(c=()=>"nonce")},24236:(e,t,o)=>{"use strict";o.d(t,{F:()=>me,H:()=>v,a:()=>j,b:()=>ge,g:()=>E,h:()=>m,r:()=>we});const n=!1,r=!1;let a,i,s,c=!1,l=!1,d=!1,p=!1;const u="slot-fb{display:contents}slot-fb[hidden]{display:none}",f="http://www.w3.org/1999/xlink",h={},b=e=>"object"==(e=typeof e)||"function"===e;function g(e){var t,o,n;return null!==(n=null===(o=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===o?void 0:o.getAttribute("content"))&&void 0!==n?n:void 0}const m=(e,t,...o)=>{let n=null,r=null,a=null,i=!1,s=!1;const c=[],l=t=>{for(let o=0;o<t.length;o++)n=t[o],Array.isArray(n)?l(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!b(n))&&(n=String(n)),i&&s?c[c.length-1].$text$+=n:c.push(i?_(null,n):n),s=i)};if(l(o),t){t.key&&(r=t.key),t.name&&(a=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,y);const d=_(e,null);return d.$attrs$=t,c.length>0&&(d.$children$=c),d.$key$=r,d.$name$=a,d},_=(e,t)=>({$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}),v={},y={forEach:(e,t)=>e.map(k).forEach(t),map:(e,t)=>e.map(k).map(t).map(x)},k=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),x=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),m(e.vtag,t,...e.vchildren||[])}const t=_(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},w=(e,t,o,n,r,a,i)=>{let s,c,l,d;if(1===a.nodeType){for(s=a.getAttribute("c-id"),s&&(c=s.split("."),c[0]!==i&&"0"!==c[0]||(l={$flags$:0,$hostId$:c[0],$nodeId$:c[1],$depth$:c[2],$index$:c[3],$tag$:a.tagName.toLowerCase(),$elm$:a,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(l),a.removeAttribute("c-id"),e.$children$||(e.$children$=[]),e.$children$[l.$index$]=l,e=l,n&&"0"===l.$depth$&&(n[l.$index$]=l.$elm$))),d=a.childNodes.length-1;d>=0;d--)w(e,t,o,n,r,a.childNodes[d],i);if(a.shadowRoot)for(d=a.shadowRoot.childNodes.length-1;d>=0;d--)w(e,t,o,n,r,a.shadowRoot.childNodes[d],i)}else if(8===a.nodeType)c=a.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(s=c[0],l={$flags$:0,$hostId$:c[1],$nodeId$:c[2],$depth$:c[3],$index$:c[4],$elm$:a,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===s?(l.$elm$=a.nextSibling,l.$elm$&&3===l.$elm$.nodeType&&(l.$text$=l.$elm$.textContent,t.push(l),a.remove(),e.$children$||(e.$children$=[]),e.$children$[l.$index$]=l,n&&"0"===l.$depth$&&(n[l.$index$]=l.$elm$))):l.$hostId$===i&&("s"===s?(l.$tag$="slot",c[5]?a["s-sn"]=l.$name$=c[5]:a["s-sn"]="",a["s-sr"]=!0,n&&(l.$elm$=Oe.createElement(l.$tag$),l.$name$&&l.$elm$.setAttribute("name",l.$name$),a.parentNode.insertBefore(l.$elm$,a),a.remove(),"0"===l.$depth$&&(n[l.$index$]=l.$elm$)),o.push(l),e.$children$||(e.$children$=[]),e.$children$[l.$index$]=l):"r"===s&&(n?a.remove():(r["s-cr"]=a,a["s-cn"]=!0))));else if(e&&"style"===e.$tag$){const t=_(null,a.textContent);t.$elm$=a,t.$index$="0",e.$children$=[t]}},S=(e,t)=>{if(1===e.nodeType){let o=0;for(;o<e.childNodes.length;o++)S(e.childNodes[o],t);if(e.shadowRoot)for(o=0;o<e.shadowRoot.childNodes.length;o++)S(e.shadowRoot.childNodes[o],t)}else if(8===e.nodeType){const o=e.nodeValue.split(".");"o"===o[0]&&(t.set(o[1]+"."+o[2],e),e.nodeValue="",e["s-en"]=o[3])}},j=e=>Ae.push(e),E=e=>xe(e).$hostElement$,L=new WeakMap,T=(e,t,o)=>{let n=Ce.get(e);Re&&o?(n=n||new CSSStyleSheet,"string"==typeof n?n=t:n.replaceSync(t)):n=t,Ce.set(e,n)},C=(e,t,o)=>{var n;const r=A(t,o),a=Ce.get(r);if(e=11===e.nodeType?e:Oe,a)if("string"==typeof a){e=e.head||e;let o,i=L.get(e);if(i||L.set(e,i=new Set),!i.has(r)){if(e.host&&(o=e.querySelector(`[sty-id="${r}"]`)))o.innerHTML=a;else{o=Oe.createElement("style"),o.innerHTML=a;const t=null!==(n=Pe.$nonce$)&&void 0!==n?n:g(Oe);null!=t&&o.setAttribute("nonce",t),e.insertBefore(o,e.querySelector("link"))}4&t.$flags$&&(o.innerHTML+=u),i&&i.add(r)}}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]);return r},A=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),N=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),O=(e,t,o,n,r,a)=>{if(o!==n){let i=je(e,t),s=t.toLowerCase();if("class"===t){const t=e.classList,r=$(o),a=$(n);t.remove(...r.filter((e=>e&&!a.includes(e)))),t.add(...a.filter((e=>e&&!r.includes(e))))}else if("style"===t){for(const t in o)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)o&&n[t]===o[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=b(n);if((i||c&&null!==n)&&!r)try{if(e.tagName.includes("-"))e[t]=n;else{const r=null==n?"":n;"list"===t?i=!1:null!=o&&e[t]==r||(e[t]=r)}}catch(e){}let l=!1;s!==(s=s.replace(/^xlink\:?/,""))&&(t=s,l=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(l?e.removeAttributeNS(f,t):e.removeAttribute(t)):(!i||4&a||r)&&!c&&(n=!0===n?"":n,l?e.setAttributeNS(f,t,n):e.setAttribute(t,n))}else if(t="-"===t[2]?t.slice(3):je(Ne,s)?s.slice(2):s[2]+t.slice(3),o||n){const r=t.endsWith(z);t=t.replace(R,""),o&&Pe.rel(e,t,o,r),n&&Pe.ael(e,t,n,r)}}},P=/\s/,$=e=>e?e.split(P):[],z="Capture",R=new RegExp(z+"$"),I=(e,t,o,n)=>{const r=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||h,i=t.$attrs$||h;for(n in a)n in i||O(r,n,a[n],void 0,o,t.$flags$);for(n in i)O(r,n,a[n],i[n],o,t.$flags$)},M=(e,t,o,n)=>{const r=t.$children$[o];let l,u,f,h=0;if(c||(d=!0,"slot"===r.$tag$&&(a&&n.classList.add(a+"-s"),r.$flags$|=r.$children$?2:1)),null!==r.$text$)l=r.$elm$=Oe.createTextNode(r.$text$);else if(1&r.$flags$)l=r.$elm$=Oe.createTextNode("");else{if(p||(p="svg"===r.$tag$),l=r.$elm$=Oe.createElementNS(p?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&r.$flags$?"slot-fb":r.$tag$),p&&"foreignObject"===r.$tag$&&(p=!1),I(null,r,p),(e=>null!=e)(a)&&l["s-si"]!==a&&l.classList.add(l["s-si"]=a),r.$children$)for(h=0;h<r.$children$.length;++h)u=M(e,r,h,l),u&&l.appendChild(u);"svg"===r.$tag$?p=!1:"foreignObject"===l.tagName&&(p=!0)}return l["s-hn"]=s,3&r.$flags$&&(l["s-sr"]=!0,l["s-cr"]=i,l["s-sn"]=r.$name$||"",f=e&&e.$children$&&e.$children$[o],f&&f.$tag$===r.$tag$&&e.$elm$&&D(e.$elm$,!1)),l},D=(e,t)=>{Pe.$flags$|=1;const o=e.childNodes;for(let n=o.length-1;n>=0;n--){const e=o[n];e["s-hn"]!==s&&e["s-ol"]&&(K(e).insertBefore(e,U(e)),e["s-ol"].remove(),e["s-ol"]=void 0,e["s-sh"]=void 0,d=!0),t&&D(e,t)}Pe.$flags$&=-2},B=(e,t,o,n,r,a)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===s&&(c=c.shadowRoot);r<=a;++r)n[r]&&(i=M(null,o,r,e),i&&(n[r].$elm$=i,c.insertBefore(i,U(t))))},F=(e,t,o)=>{for(let n=t;n<=o;++n){const t=e[n];if(t){const e=t.$elm$;Q(t),e&&(l=!0,e["s-ol"]?e["s-ol"].remove():D(e,!0),e.remove())}}},q=(e,t,o=!1)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:!!o||e.$key$===t.$key$),U=e=>e&&e["s-ol"]||e,K=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,H=(e,t,o=!1)=>{const n=t.$elm$=e.$elm$,r=e.$children$,a=t.$children$,i=t.$tag$,s=t.$text$;let c;null===s?(p="svg"===i||"foreignObject"!==i&&p,"slot"===i||I(e,t,p),null!==r&&null!==a?((e,t,o,n,r=!1)=>{let a,i,s=0,c=0,l=0,d=0,p=t.length-1,u=t[0],f=t[p],h=n.length-1,b=n[0],g=n[h];for(;s<=p&&c<=h;)if(null==u)u=t[++s];else if(null==f)f=t[--p];else if(null==b)b=n[++c];else if(null==g)g=n[--h];else if(q(u,b,r))H(u,b,r),u=t[++s],b=n[++c];else if(q(f,g,r))H(f,g,r),f=t[--p],g=n[--h];else if(q(u,g,r))"slot"!==u.$tag$&&"slot"!==g.$tag$||D(u.$elm$.parentNode,!1),H(u,g,r),e.insertBefore(u.$elm$,f.$elm$.nextSibling),u=t[++s],g=n[--h];else if(q(f,b,r))"slot"!==u.$tag$&&"slot"!==g.$tag$||D(f.$elm$.parentNode,!1),H(f,b,r),e.insertBefore(f.$elm$,u.$elm$),f=t[--p],b=n[++c];else{for(l=-1,d=s;d<=p;++d)if(t[d]&&null!==t[d].$key$&&t[d].$key$===b.$key$){l=d;break}l>=0?(i=t[l],i.$tag$!==b.$tag$?a=M(t&&t[c],o,l,e):(H(i,b,r),t[l]=void 0,a=i.$elm$),b=n[++c]):(a=M(t&&t[c],o,c,e),b=n[++c]),a&&K(u.$elm$).insertBefore(a,U(u.$elm$))}s>p?B(e,null==n[h+1]?null:n[h+1].$elm$,o,n,c,h):c>h&&F(t,s,p)})(n,r,t,a,o):null!==a?(null!==e.$text$&&(n.textContent=""),B(n,null,t,a,0,a.length-1)):null!==r&&F(r,0,r.length-1),p&&"svg"===i&&(p=!1)):(c=n["s-cr"])?c.parentNode.textContent=s:e.$text$!==s&&(n.data=s)},V=e=>{const t=e.childNodes;for(const o of t)if(1===o.nodeType){if(o["s-sr"]){const e=o["s-sn"];o.hidden=!1;for(const n of t)if(n!==o)if(n["s-hn"]!==o["s-hn"]||""!==e){if(1===n.nodeType&&(e===n.getAttribute("slot")||e===n["s-sn"])){o.hidden=!0;break}}else if(1===n.nodeType||3===n.nodeType&&""!==n.textContent.trim()){o.hidden=!0;break}}V(o)}},G=[],W=e=>{let t,o,r;for(const a of e.childNodes){if(a["s-sr"]&&(t=a["s-cr"])&&t.parentNode){o=t.parentNode.childNodes;const e=a["s-sn"];for(r=o.length-1;r>=0;r--)if(t=o[r],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==a["s-hn"]&&!n)if(Y(t,e)){let o=G.find((e=>e.$nodeToRelocate$===t));l=!0,t["s-sn"]=t["s-sn"]||e,o?(o.$nodeToRelocate$["s-sh"]=a["s-hn"],o.$slotRefNode$=a):(t["s-sh"]=a["s-hn"],G.push({$slotRefNode$:a,$nodeToRelocate$:t})),t["s-sr"]&&G.map((e=>{Y(e.$nodeToRelocate$,t["s-sn"])&&(o=G.find((e=>e.$nodeToRelocate$===t)),o&&!e.$slotRefNode$&&(e.$slotRefNode$=o.$slotRefNode$))}))}else G.some((e=>e.$nodeToRelocate$===t))||G.push({$nodeToRelocate$:t})}1===a.nodeType&&W(a)}},Y=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,Q=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Q)},J=(e,t,o=!1)=>{var n,r,p,u;const f=e.$hostElement$,h=e.$cmpMeta$,b=e.$vnode$||_(null,null),g=(e=>e&&e.$tag$===v)(t)?t:m(null,null,t);if(s=f.tagName,h.$attrsToReflect$&&(g.$attrs$=g.$attrs$||{},h.$attrsToReflect$.map((([e,t])=>g.$attrs$[t]=f[e]))),o&&g.$attrs$)for(const a of Object.keys(g.$attrs$))f.hasAttribute(a)&&!["key","ref","style","class"].includes(a)&&(g.$attrs$[a]=f[a]);if(g.$tag$=null,g.$flags$|=4,e.$vnode$=g,g.$elm$=b.$elm$=f.shadowRoot||f,a=f["s-sc"],i=f["s-cr"],c=0!=(1&h.$flags$),l=!1,H(b,g,o),Pe.$flags$|=1,d){W(g.$elm$);for(const e of G){const t=e.$nodeToRelocate$;if(!t["s-ol"]){const e=Oe.createTextNode("");e["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of G){const t=e.$nodeToRelocate$,a=e.$slotRefNode$;if(a){const e=a.parentNode;let o=a.nextSibling;{let a=null===(n=t["s-ol"])||void 0===n?void 0:n.previousSibling;for(;a;){let n=null!==(r=a["s-nr"])&&void 0!==r?r:null;if(n&&n["s-sn"]===t["s-sn"]&&e===n.parentNode&&(n=n.nextSibling,!n||!n["s-nr"])){o=n;break}a=a.previousSibling}}(!o&&e!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),e.insertBefore(t,o),1===t.nodeType&&(t.hidden=null!==(p=t["s-ih"])&&void 0!==p&&p))}else 1===t.nodeType&&(o&&(t["s-ih"]=null!==(u=t.hidden)&&void 0!==u&&u),t.hidden=!0)}}l&&V(g.$elm$),Pe.$flags$&=-2,G.length=0,i=void 0},X=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},Z=(e,t)=>{if(!(4&e.$flags$))return X(e,e.$ancestorComponent$),ee(e,t);e.$flags$|=512},ee=(e,t)=>{const o=(e.$cmpMeta$.$tagName$,()=>{}),n=e.$lazyInstance$;let r;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>se(n,e,t))),e.$queuedListeners$=void 0),r=se(n,"componentWillLoad")),r=te(r,(()=>se(n,"componentWillRender"))),o(),te(r,(()=>ne(e,n,t)))},te=(e,t)=>oe(e)?e.then(t):t(),oe=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,ne=async(e,t,o)=>{var n;const r=e.$hostElement$,a=(e.$cmpMeta$.$tagName$,()=>{}),i=r["s-rc"];o&&(e=>{const t=e.$cmpMeta$,o=e.$hostElement$,n=t.$flags$,r=(t.$tagName$,()=>{}),a=C(o.shadowRoot?o.shadowRoot:o.getRootNode(),t,e.$modeName$);10&n&&(o["s-sc"]=a,o.classList.add(a+"-h")),r()})(e);const s=(e.$cmpMeta$.$tagName$,()=>{});re(e,t,r,o),i&&(i.map((e=>e())),r["s-rc"]=void 0),s(),a();{const t=null!==(n=r["s-p"])&&void 0!==n?n:[],o=()=>ae(e);0===t.length?o():(Promise.all(t).then(o),e.$flags$|=4,t.length=0)}},re=(e,t,o,n)=>{try{t=t.render(),e.$flags$|=2,J(e,t,n)}catch(t){Ee(t,e.$hostElement$)}return null},ae=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,o=()=>{},n=e.$lazyInstance$,r=e.$ancestorComponent$;se(n,"componentDidRender"),64&e.$flags$?o():(e.$flags$|=64,ce(t),se(n,"componentDidLoad"),o(),e.$onReadyResolve$(t),r||ie()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ie((()=>Z(e,!1))),e.$flags$&=-517},ie=e=>{ce(Oe.documentElement),Ie((()=>((e,t,o)=>{const n=Pe.ce(t,o);return e.dispatchEvent(n),n})(Ne,"appload",{detail:{namespace:"kolibri"}})))},se=(e,t,o)=>{if(e&&e[t])try{return e[t](o)}catch(e){Ee(e)}},ce=e=>e.classList.add("hydrated"),le=(e,t,o,n)=>{const r=xe(e),a=r.$hostElement$,i=r.$instanceValues$.get(t),s=r.$flags$,c=r.$lazyInstance$;o=((e,t)=>null==e||b(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(o,n.$members$[t][0]);const l=Number.isNaN(i)&&Number.isNaN(o);if((!(8&s)||void 0===i)&&o!==i&&!l&&(r.$instanceValues$.set(t,o),c)){if(n.$watchers$&&128&s){const e=n.$watchers$[t];e&&e.map((e=>{try{c[e](o,i,t)}catch(e){Ee(e,a)}}))}2==(18&s)&&Z(r,!1)}},de=(e,t,o)=>{var n;const r=e.prototype;if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const a=Object.entries(t.$members$);if(a.map((([e,[n]])=>{31&n||2&o&&32&n?Object.defineProperty(r,e,{get(){return((e,t)=>xe(e).$instanceValues$.get(t))(this,e)},set(o){le(this,e,o,t)},configurable:!0,enumerable:!0}):1&o&&64&n&&Object.defineProperty(r,e,{value(...t){var o;const n=xe(this);return null===(o=null==n?void 0:n.$onInstancePromise$)||void 0===o?void 0:o.then((()=>{var o;return null===(o=n.$lazyInstance$)||void 0===o?void 0:o[e](...t)}))}})})),1&o){const o=new Map;r.attributeChangedCallback=function(e,n,a){Pe.jmp((()=>{var i;const s=o.get(e);if(this.hasOwnProperty(s))a=this[s],delete this[s];else{if(r.hasOwnProperty(s)&&"number"==typeof this[s]&&this[s]==a)return;if(null==s){const o=xe(this),r=null==o?void 0:o.$flags$;if(r&&!(8&r)&&128&r&&a!==n){const r=o.$lazyInstance$,s=null===(i=t.$watchers$)||void 0===i?void 0:i[e];null==s||s.forEach((t=>{null!=r[t]&&r[t].call(r,a,n,e)}))}return}}this[s]=(null!==a||"boolean"!=typeof this[s])&&a}))},e.observedAttributes=Array.from(new Set([...Object.keys(null!==(n=t.$watchers$)&&void 0!==n?n:{}),...a.filter((([e,t])=>15&t[0])).map((([e,n])=>{var r;const a=n[1]||e;return o.set(a,e),512&n[0]&&(null===(r=t.$attrsToReflect$)||void 0===r||r.push([e,a])),a}))]))}}return e},pe=async(e,t,o,n)=>{let r;if(0==(32&t.$flags$)){t.$flags$|=32;{if(r=Te(o),r.then){const e=()=>{};r=await r,e()}r.isProxied||(o.$watchers$=r.watchers,de(r,o,2),r.isProxied=!0);const n=(o.$tagName$,()=>{});t.$flags$|=8;try{new r(t)}catch(e){Ee(e)}t.$flags$&=-9,t.$flags$|=128,n(),ue(t.$lazyInstance$)}if(r.style){let n=r.style;"string"!=typeof n&&(n=n[t.$modeName$=(e=>Ae.map((t=>t(e))).find((e=>!!e)))(e)]);const a=A(o,t.$modeName$);if(!Ce.has(a)){const e=(o.$tagName$,()=>{});T(a,n,!!(1&o.$flags$)),e()}}}const a=t.$ancestorComponent$,i=()=>Z(t,!0);a&&a["s-rc"]?a["s-rc"].push(i):i()},ue=e=>{se(e,"connectedCallback")},fe=e=>{if(0==(1&Pe.$flags$)){const t=xe(e),o=t.$cmpMeta$,n=(o.$tagName$,()=>{});if(1&t.$flags$)_e(e,t,o.$listeners$),(null==t?void 0:t.$lazyInstance$)?ue(t.$lazyInstance$):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then((()=>ue(t.$lazyInstance$)));else{let n;if(t.$flags$|=1,n=e.getAttribute("s-id"),n){if(1&o.$flags$){const t=C(e.shadowRoot,o,e.getAttribute("s-mode"));e.classList.remove(t+"-h",t+"-s")}((e,t,o,n)=>{const r=()=>{},a=e.shadowRoot,i=[],s=a?[]:null,c=n.$vnode$=_(t,null);Pe.$orgLocNodes$||S(Oe.body,Pe.$orgLocNodes$=new Map),e["s-id"]=o,e.removeAttribute("s-id"),w(c,i,[],s,e,e,o),i.map((e=>{const o=e.$hostId$+"."+e.$nodeId$,n=Pe.$orgLocNodes$.get(o),r=e.$elm$;n&&$e&&""===n["s-en"]&&n.parentNode.insertBefore(r,n.nextSibling),a||(r["s-hn"]=t,n&&(r["s-ol"]=n,r["s-ol"]["s-nr"]=r)),Pe.$orgLocNodes$.delete(o)})),a&&s.map((e=>{e&&a.appendChild(e)})),r()})(e,o.$tagName$,n,t)}n||12&o.$flags$&&he(e);{let o=e;for(;o=o.parentNode||o.host;)if(1===o.nodeType&&o.hasAttribute("s-id")&&o["s-p"]||o["s-p"]){X(t,t.$ancestorComponent$=o);break}}o.$members$&&Object.entries(o.$members$).map((([t,[o]])=>{if(31&o&&e.hasOwnProperty(t)){const o=e[t];delete e[t],e[t]=o}})),pe(e,t,o)}n()}},he=e=>{const t=e["s-cr"]=Oe.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},be=e=>{se(e,"disconnectedCallback")},ge=(e,t={})=>{var o;const n=()=>{},r=[],a=t.exclude||[],i=Ne.customElements,s=Oe.head,c=s.querySelector("meta[charset]"),l=Oe.createElement("style"),d=[],p=Oe.querySelectorAll("[sty-id]");let f,h=!0,b=0;for(Object.assign(Pe,t),Pe.$resourcesUrl$=new URL(t.resourcesUrl||"./",Oe.baseURI).href,Pe.$flags$|=2;b<p.length;b++)T(p[b].getAttribute("sty-id"),N(p[b].innerHTML),!0);let m=!1;if(e.map((e=>{e[1].map((t=>{var o;const n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};4&n.$flags$&&(m=!0),n.$members$=t[2],n.$listeners$=t[3],n.$attrsToReflect$=[],n.$watchers$=null!==(o=t[4])&&void 0!==o?o:{};const s=n.$tagName$,c=class extends HTMLElement{constructor(e){super(e),Se(e=this,n),1&n.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),h?d.push(this):Pe.jmp((()=>fe(this)))}disconnectedCallback(){Pe.jmp((()=>(async e=>{if(0==(1&Pe.$flags$)){const t=xe(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0),(null==t?void 0:t.$lazyInstance$)?be(t.$lazyInstance$):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then((()=>be(t.$lazyInstance$)))}})(this)))}componentOnReady(){return xe(this).$onReadyPromise$}};n.$lazyBundleId$=e[0],a.includes(s)||i.get(s)||(r.push(s),i.define(s,de(c,n,1)))}))})),m&&(l.innerHTML+=u),l.innerHTML+=r+"{visibility:hidden}.hydrated{visibility:inherit}",l.innerHTML.length){l.setAttribute("data-styles","");const e=null!==(o=Pe.$nonce$)&&void 0!==o?o:g(Oe);null!=e&&l.setAttribute("nonce",e),s.insertBefore(l,c?c.nextSibling:s.firstChild)}h=!1,d.length?d.map((e=>e.connectedCallback())):Pe.jmp((()=>f=setTimeout(ie,30))),n()},me=(e,t)=>t,_e=(e,t,o,n)=>{o&&o.map((([o,n,r])=>{const a=e,i=ve(t,r),s=ye(o);Pe.ael(a,n,i,s),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>Pe.rel(a,n,i,s)))}))},ve=(e,t)=>o=>{try{256&e.$flags$?e.$lazyInstance$[t](o):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,o])}catch(e){Ee(e)}},ye=e=>ze?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),ke=new WeakMap,xe=e=>ke.get(e),we=(e,t)=>ke.set(t.$lazyInstance$=e,t),Se=(e,t)=>{const o={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return o.$onInstancePromise$=new Promise((e=>o.$onInstanceResolve$=e)),o.$onReadyPromise$=new Promise((e=>o.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],_e(e,o,t.$listeners$),ke.set(e,o)},je=(e,t)=>t in e,Ee=(e,t)=>(0,console.error)(e,t),Le=new Map,Te=(e,t,n)=>{const a=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,s=Le.get(i);if(s)return s[a];if(!n||!r){const e=e=>(Le.set(i,e),e[a]);switch(i){case"kol-abbr":return o.e(83956).then(o.bind(o,83956)).then(e,Ee);case"kol-accordion":return o.e(50048).then(o.bind(o,50048)).then(e,Ee);case"kol-alert":return o.e(99328).then(o.bind(o,99328)).then(e,Ee);case"kol-avatar":return o.e(20444).then(o.bind(o,20444)).then(e,Ee);case"kol-badge":return o.e(66740).then(o.bind(o,66740)).then(e,Ee);case"kol-breadcrumb":return o.e(48880).then(o.bind(o,48880)).then(e,Ee);case"kol-button":return o.e(50440).then(o.bind(o,50440)).then(e,Ee);case"kol-button-group":return o.e(49872).then(o.bind(o,27492)).then(e,Ee);case"kol-button-link":return o.e(19852).then(o.bind(o,19852)).then(e,Ee);case"kol-card":return o.e(63228).then(o.bind(o,85610)).then(e,Ee);case"kol-details":return o.e(4060).then(o.bind(o,4060)).then(e,Ee);case"kol-form":return o.e(51752).then(o.bind(o,51752)).then(e,Ee);case"kol-heading":return o.e(90744).then(o.bind(o,90744)).then(e,Ee);case"kol-icon":return o.e(42480).then(o.bind(o,42480)).then(e,Ee);case"kol-image":return o.e(66307).then(o.bind(o,66307)).then(e,Ee);case"kol-indented-text":return o.e(94440).then(o.bind(o,94440)).then(e,Ee);case"kol-input-checkbox":return o.e(54712).then(o.bind(o,54712)).then(e,Ee);case"kol-input-color":return o.e(94192).then(o.bind(o,94192)).then(e,Ee);case"kol-input-date":return o.e(98703).then(o.bind(o,98703)).then(e,Ee);case"kol-input-email":return o.e(41372).then(o.bind(o,41372)).then(e,Ee);case"kol-input-file":return o.e(74480).then(o.bind(o,74480)).then(e,Ee);case"kol-input-number":return o.e(63632).then(o.bind(o,63632)).then(e,Ee);case"kol-input-password":return o.e(44412).then(o.bind(o,44412)).then(e,Ee);case"kol-input-radio":return o.e(2840).then(o.bind(o,2840)).then(e,Ee);case"kol-input-text":return o.e(6152).then(o.bind(o,6152)).then(e,Ee);case"kol-kolibri":return o.e(71472).then(o.bind(o,71472)).then(e,Ee);case"kol-link":return o.e(89736).then(o.bind(o,89736)).then(e,Ee);case"kol-link-button":return o.e(33142).then(o.bind(o,33142)).then(e,Ee);case"kol-link-group":return o.e(59536).then(o.bind(o,59536)).then(e,Ee);case"kol-logo":return o.e(20060).then(o.bind(o,20060)).then(e,Ee);case"kol-modal":return o.e(56260).then(o.bind(o,56260)).then(e,Ee);case"kol-nav":return o.e(48888).then(o.bind(o,48888)).then(e,Ee);case"kol-pagination":return o.e(94336).then(o.bind(o,94336)).then(e,Ee);case"kol-progress":return o.e(65400).then(o.bind(o,65400)).then(e,Ee);case"kol-quote":return o.e(57212).then(o.bind(o,57212)).then(e,Ee);case"kol-select":return o.e(40285).then(o.bind(o,40285)).then(e,Ee);case"kol-skip-nav":return o.e(39624).then(o.bind(o,39624)).then(e,Ee);case"kol-span":return o.e(81924).then(o.bind(o,81924)).then(e,Ee);case"kol-spin":return o.e(52304).then(o.bind(o,52304)).then(e,Ee);case"kol-split-button":return o.e(58891).then(o.bind(o,58891)).then(e,Ee);case"kol-symbol":return o.e(84644).then(o.bind(o,7024)).then(e,Ee);case"kol-table":return o.e(87844).then(o.bind(o,87844)).then(e,Ee);case"kol-tabs":return o.e(70720).then(o.bind(o,70720)).then(e,Ee);case"kol-textarea":return o.e(85980).then(o.bind(o,85980)).then(e,Ee);case"kol-toast-container":return o.e(92320).then(o.bind(o,92320)).then(e,Ee);case"kol-tree":return o.e(6096).then(o.bind(o,6096)).then(e,Ee);case"kol-tree-item":return o.e(52176).then(o.bind(o,52176)).then(e,Ee);case"kol-version":return o.e(67396).then(o.bind(o,67396)).then(e,Ee);case"kol-input-range":return o.e(41600).then(o.bind(o,41600)).then(e,Ee);case"kol-popover-wc":return Promise.all([o.e(45488),o.e(45036)]).then(o.bind(o,45036)).then(e,Ee);case"kol-avatar-wc":return o.e(93944).then(o.bind(o,93944)).then(e,Ee);case"kol-tree-item-wc":return o.e(99992).then(o.bind(o,99992)).then(e,Ee);case"kol-tree-wc":return o.e(99672).then(o.bind(o,99672)).then(e,Ee);case"kol-button-group-wc":return o.e(8144).then(o.bind(o,8144)).then(e,Ee);case"kol-link-wc":return o.e(30648).then(o.bind(o,30648)).then(e,Ee);case"kol-input":return o.e(68472).then(o.bind(o,68472)).then(e,Ee);case"kol-alert-wc_3":return o.e(79344).then(o.bind(o,79344)).then(e,Ee);case"kol-span-wc_2":return Promise.all([o.e(45488),o.e(63736)]).then(o.bind(o,63736)).then(e,Ee)}}return o(29304)(`./${i}.entry.js`).then((e=>(Le.set(i,e),e[a])),Ee)},Ce=new Map,Ae=[],Ne="undefined"!=typeof window?window:{},Oe=Ne.document||{head:{}},Pe={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,o,n)=>e.addEventListener(t,o,n),rel:(e,t,o,n)=>e.removeEventListener(t,o,n),ce:(e,t)=>new CustomEvent(e,t)},$e=!0,ze=(()=>{let e=!1;try{Oe.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),Re=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),Ie=e=>(e=>Promise.resolve(e))().then(e)},75224:(e,t,o)=>{"use strict";o.d(t,{$:()=>Tt,A:()=>uo,B:()=>ot,C:()=>nt,D:()=>po,E:()=>Do,F:()=>Eo,G:()=>Zt,H:()=>Lt,I:()=>Lo,J:()=>ue,K:()=>St,L:()=>Pe,M:()=>zt,N:()=>en,O:()=>Mt,P:()=>Ue,Q:()=>_o,R:()=>vo,S:()=>g,T:()=>ze,U:()=>zo,V:()=>Nt,W:()=>Yo,X:()=>sn,Y:()=>Ko,Z:()=>lt,_:()=>v,a:()=>me,a0:()=>Se,a1:()=>Me,a2:()=>qo,a3:()=>an,a4:()=>Xo,a5:()=>wo,a6:()=>Wo,a7:()=>rt,a8:()=>nn,a9:()=>Xe,aA:()=>So,aB:()=>Ro,aC:()=>qt,aD:()=>Io,aE:()=>$t,aF:()=>de,aG:()=>pe,aH:()=>ft,aI:()=>ht,aJ:()=>Ut,aK:()=>Vt,aL:()=>Gt,aM:()=>Wt,aN:()=>Qt,aO:()=>Xt,aP:()=>mo,aQ:()=>jo,aR:()=>xe,aS:()=>Ee,aT:()=>wt,aU:()=>yt,aV:()=>gt,aW:()=>kt,aX:()=>dt,aa:()=>Fo,ab:()=>rn,ac:()=>ho,ad:()=>Dt,ae:()=>se,af:()=>eo,ag:()=>fo,ah:()=>bo,ai:()=>so,aj:()=>Bo,ak:()=>cn,al:()=>fe,am:()=>Ho,an:()=>Qo,ao:()=>Jo,ap:()=>on,aq:()=>Je,ar:()=>Go,as:()=>Ft,at:()=>bt,au:()=>he,av:()=>It,aw:()=>yo,ax:()=>Rt,ay:()=>Ht,az:()=>lo,c:()=>we,d:()=>je,e:()=>R,f:()=>Le,g:()=>_e,h:()=>Ie,i:()=>Zo,j:()=>Be,k:()=>Ot,l:()=>co,m:()=>Ze,n:()=>Uo,o:()=>To,p:()=>Pt,q:()=>io,r:()=>ao,t:()=>Qe,u:()=>ut,v:()=>$o,w:()=>tt,x:()=>Ke,y:()=>at,z:()=>He});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{},r={exports:{}};!function(e){var t,o;t=n,o=function(){var e=function(){},t="undefined",o=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function r(e,t){var o=e[t];if("function"==typeof o.bind)return o.bind(e);try{return Function.prototype.bind.call(o,e)}catch(t){return function(){return Function.prototype.apply.apply(o,[e,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(t,o){for(var r=0;r<n.length;r++){var a=n[r];this[a]=r<t?e:this.methodFactory(a,t,o)}this.log=this.debug}function s(e,o,n){return function(){typeof console!==t&&(i.call(this,o,n),this[e].apply(this,arguments))}}function c(n,i,c){return function(n){return"debug"===n&&(n="log"),typeof console!==t&&("trace"===n&&o?a:void 0!==console[n]?r(console,n):void 0!==console.log?r(console,"log"):e)}(n)||s.apply(this,arguments)}function l(e,o,r){var a,s=this;o=null==o?"WARN":o;var l="loglevel";function d(){var e;if(typeof window!==t&&l){try{e=window.localStorage[l]}catch(e){}if(typeof e===t)try{var o=window.document.cookie,n=o.indexOf(encodeURIComponent(l)+"=");-1!==n&&(e=/^([^;]+)/.exec(o.slice(n))[1])}catch(e){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?l+=":"+e:"symbol"==typeof e&&(l=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=r||c,s.getLevel=function(){return a},s.setLevel=function(o,r){if("string"==typeof o&&void 0!==s.levels[o.toUpperCase()]&&(o=s.levels[o.toUpperCase()]),!("number"==typeof o&&o>=0&&o<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+o;if(a=o,!1!==r&&function(e){var o=(n[e]||"silent").toUpperCase();if(typeof window!==t&&l){try{return void(window.localStorage[l]=o)}catch(e){}try{window.document.cookie=encodeURIComponent(l)+"="+o+";"}catch(e){}}}(o),i.call(s,o,e),typeof console===t&&o<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){o=e,d()||s.setLevel(e,!1)},s.resetLevel=function(){s.setLevel(o,!1),function(){if(typeof window!==t&&l){try{return void window.localStorage.removeItem(l)}catch(e){}try{window.document.cookie=encodeURIComponent(l)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var p=d();null==p&&(p=o),s.setLevel(p,!1)}var d=new l,p={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=p[e];return t||(t=p[e]=new l(e,d.getLevel(),d.methodFactory)),t};var u=typeof window!==t?window.log:void 0;return d.noConflict=function(){return typeof window!==t&&window.log===d&&(window.log=u),d},d.getLoggers=function(){return p},d.default=d,d},e.exports?e.exports=o():t.log=o()}(r);const a=r.exports,i="object"==typeof window?window:"object"==typeof o.g?o.g:"object"==typeof self?self:{};let s=!0,c=!1;const l=/^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/,d=e=>{if(!1===(e=>"string"==typeof e&&l.test(e))(e))throw new Error(`[Theming] The theme identifier "${"string"==typeof e?e:""}" (Type: ${typeof e}) is not valid. Please use only follow this pattern: /^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/`)},p=(e,t,o,n)=>{(n=n??{}).append=n.append??!1,d(e),!0===s&&!1===c&&(c=!0,a.warn(`[Theming] The theme process is locked. This means that the theme "${e}" should not be patched.\n\n\timport { register } from 'adopted-style-sheets';\n\timport { defineCustomElements } from '...';\n\timport { THEME } from '...';\n\n\tregister(THEME, defineCustomElements)\n\t.then(() => {\n\t\t// run your app or website\n\t})\n\t.catch(console.warn);`)),("object"!=typeof i.A11yUi||null===i.A11yUi)&&(i.A11yUi={}),"object"==typeof i.A11yUi&&null!==i.A11yUi&&("object"!=typeof i.A11yUi.Themes||null===i.A11yUi.Themes)&&(i.A11yUi.Themes={}),"object"==typeof i.A11yUi&&null!==i.A11yUi&&"object"==typeof i.A11yUi.Themes&&null!==i.A11yUi.Themes&&("object"!=typeof i.A11yUi.Themes[e]||null===i.A11yUi.Themes[e])&&(i.A11yUi.Themes[e]={}),"object"==typeof i.A11yUi&&null!==i.A11yUi&&"object"==typeof i.A11yUi.Themes&&null!==i.A11yUi.Themes&&"object"==typeof i.A11yUi.Themes[e]&&null!==i.A11yUi.Themes[e]&&(n.append&&"string"==typeof i.A11yUi.Themes[e][t]?i.A11yUi.Themes[e][t]+=o:i.A11yUi.Themes[e][t]=o)},u=(e,t,o)=>(d(e),"object"==typeof t&&null!==t&&Object.getOwnPropertyNames(t).forEach((n=>{const r=t[n];"string"==typeof r&&r.length>0&&p(e,n,r,o)})),e),f=e=>{if(e instanceof HTMLElement){if("string"==typeof e.dataset.theme)return e;{let t=e.parentNode;for(;t instanceof ShadowRoot;)t=t.host;return f(t)}}return null},h=(e={})=>"false"!==e.themeEncroachCss&&"true"!==e.themeReset&&{mode:"after"===e.themeEncroachCssMode||"before"===e.themeEncroachCssMode?e.themeEncroachCssMode:"before"},b=()=>"object"==typeof i.A11yUi&&null!==i.A11yUi&&"object"==typeof i.A11yUi.Theme&&null!==i.A11yUi.Theme&&"boolean"==typeof i.A11yUi.Theme.cache&&"object"==typeof i.A11yUi.Theme.encroachCss&&null!==i.A11yUi.Theme.encroachCss&&"string"==typeof i.A11yUi.Theme.encroachCss.mode&&"string"==typeof i.A11yUi.Theme.name,g=e=>{if(b())return i.A11yUi.Theme;{const t={cache:!0,encroachCss:h(),loglevel:"silent",name:null},o=f(e);return o instanceof HTMLElement&&(t.cache="false"!==o.dataset.themeCache,t.encroachCss=h(o.dataset),t.loglevel="debug"===o.dataset.themeLoglevel?o.dataset.themeLoglevel:"silent",t.name=o.dataset.theme||null),t}},m=(e,t)=>{!1===b()&&("object"!=typeof i.A11yUi||null===i.A11yUi||"object"!=typeof i.A11yUi.Theme||null===i.A11yUi.Theme||"default"!==i.A11yUi.Theme.name)&&"object"==typeof t&&null!==t&&("fixed"===(t=((e,t)=>({cache:!1!==t.cache,detect:"auto"===t.detect?"auto":"fixed",encroachCss:!1!==t.encroachCss&&("object"!=typeof t.encroachCss||null==t.encroachCss||"after"!==t.encroachCss.mode&&"before"!==t.encroachCss.mode?{mode:"before"}:t.encroachCss),loglevel:"debug"===t.loglevel?t.loglevel:"silent",name:"string"==typeof t.name?t.name:e}))(e,t)).detect?(null===t.name&&"string"==typeof e&&(t.name=e),e===t.name&&(("object"!=typeof i.A11yUi||null===i.A11yUi)&&(i.A11yUi={}),i.A11yUi.Theme=t,a.info(`[Theming] Theme "${e}" was set as default theme.`))):a.warn("[Theming] The presetting of theme options is only relevant by using 'fixed' detection mode."))};let _=!1;const v=(e,t,o={})=>{!1===_&&(_=!0,s=!1),"function"==typeof e?e=new Set([e]):Array.isArray(e)&&(e=new Set(e)),e instanceof Set&&e.forEach((e=>{"function"==typeof e&&1===e.length?m(e(u),{cache:o.theme?.cache,detect:o.theme?.detect,encroachCss:o.theme?.encroachCss,name:o.theme?.name}):a.error("[Theming] Es wurde versucht eine nicht kompatibles Theme zu laden.")})),s=!0,"function"==typeof t?t=new Set([t]):Array.isArray(t)&&(t=new Set(t));const n=[];return t.forEach((e=>{const t=e();t instanceof Promise&&n.push(t)})),Promise.all(n)},y=new Map,k=[],x=new Set,w=new Map,S=/--[^;]+/g,j=/:/;("object"!=typeof i.A11yUi||null===i.A11yUi)&&(i.A11yUi={CSS_STYLE_CACHE:w,HYDRATED_HISTORY:k,STYLING_TASK_QUEUE:y});const E=(e,t)=>"object"==typeof i.A11yUi&&null!==i.A11yUi&&"object"==typeof i.A11yUi.Themes&&null!==i.A11yUi.Themes&&"object"==typeof i.A11yUi.Themes[e]&&null!==i.A11yUi.Themes[e]&&"string"==typeof i.A11yUi.Themes[e][t]?i.A11yUi.Themes[e][t].replace(/\r?\n/g,""):"",L=(e,t,o)=>{const n=t.name||"default";let r;try{if(null===e.shadowRoot)throw new Error("ShadowRoot is null");r=e.shadowRoot}catch{r=e}if(w.get(n)?.has(e.tagName))T(e,r,w.get(n)?.get(e.tagName),o);else{const a=E(n,"PROPERTIES"),i=E(n,"GLOBAL"),s=E(n,e.tagName);!1===x.has(n)&&((e,t)=>{let o=t.match(S);if(Array.isArray(o)){o=o.filter((e=>j.test(e)));const t=document.createElement("style");t.innerHTML=`.${e} {${o.join(";")}}`,document.querySelector("head")?.appendChild(t)}x.add(e)})(n,i);const c=[a,i,s];((e,t,o)=>{if(!1!==o){const n=[...Array.from(e.childNodes).filter((e=>e instanceof HTMLStyleElement&&"STYLE"===e.tagName))];let r;try{r=[...Array.from(e.adoptedStyleSheets)]}catch{r=[]}"before"===o?.mode?(n.reverse().forEach((e=>t.unshift(e.innerHTML))),r.reverse().forEach((e=>t.unshift(Array.from(e.cssRules).map((e=>e.cssText)).join(""))))):"after"===o?.mode&&(n.forEach((e=>t.push(e.innerHTML))),r.forEach((e=>t.push(Array.from(e.cssRules).map((e=>e.cssText)).join("")))))}})(r,c,t.encroachCss),"debug"===t.loglevel&&console.log(e.tagName,c),!0===t.cache&&(!1===w.has(n)&&w.set(n,new Map),w.get(n)?.set(e.tagName,c)),T(e,r,c,o)}},T=(e,t,o,n)=>{(e=>{for(const t of Array.from(e.childNodes)){if(!(t instanceof HTMLStyleElement&&"STYLE"===t.tagName))break;e.removeChild(t)}})(t),((e,t)=>{try{const o=[];t.forEach((e=>{const t=new CSSStyleSheet;t.replaceSync(e),o.push(t)})),e.adoptedStyleSheets=o}catch{t.reverse().forEach((t=>{const o=document.createElement("style");o.innerHTML=t,e.insertBefore(o,e.firstChild)}))}})(t,o),e.style.display=n},C=e=>{"debug"===e.loglevel&&k.push({timestamp:Date.now(),numberOfTasks:y.size})},A=(e,t)=>{((e,t)=>{y.set(e,{styleDisplay:e.style.display?`${e.style.display}`:null,themeDetails:t})})(e,t),C(t)},N=(e,t)=>{(e=>{y.delete(e)})(e),C(t)},O=e=>{const t=setTimeout((()=>{if(clearTimeout(t),y.has(e)&&e.classList.contains("hydrated")){const{styleDisplay:t,themeDetails:o}=y.get(e);L(e,o,t),N(e,o)}else O(e)}),25)},P=e=>{for(const t of e)if(y.has(t.target)&&t.target.classList.contains("hydrated")){const{styleDisplay:e,themeDetails:o}=y.get(t.target);L(t.target,o,e),N(t.target,o)}},$={attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1};let z;try{z=new MutationObserver(P)}catch{z=null}const R=(e,t)=>{A(e,t),z?z.observe(e,$):O(e),e.style.display="none"};const I=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},M=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;I(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;I(o,M(e,"object"==typeof r&&null!==r?r:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},D=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;if(o=D(e,"object"==typeof r&&null!==r?r:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var B={exports:{}};function F(e){var t=q(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function q(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=K(t[0]),r=K(t[1]),a=K(t[2]),i=3==o?255:K(t[3]);if(isNaN(n)||isNaN(r)||isNaN(a)||isNaN(i))return;return[n,r,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=K(t.slice(0,2)),r=K(t.slice(2,4)),a=K(t.slice(4,6)),i=6==o?255:K(t.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(a)||isNaN(i))return;return[n,r,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=H(t[0],!0),n=H(t[1],!0),r=H(t[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=H(t[0],!0),n=H(t[1],!0),r=H(t[2],!0),a=H(255*t[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=a)return[o,n,r,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=H(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=H(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=H(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=H(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=H(e[0],!0),o=H(e[1],!0),n=H(e[2],!0),r=H(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function U(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function K(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function H(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}B.exports=F,B.exports.arr=F,B.exports.obj=function(e){var t=q(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},B.exports.css=function(e){var t=q(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},B.exports.hex=function(e){3==(t=q(e)).length&&t.push(255);var t,o=255==t[3],n=U(t[0]),r=U(t[1]),a=U(t[2]),i=function(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(n,r,a,t=U(Math.round(t[3])));return o?i?"#"+n.charAt(0)+r.charAt(0)+a.charAt(0):"#"+n+r+a:i?"#"+n.charAt(0)+r.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+r+a+t},B.exports.num=function(e){var t=q(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const V=B.exports;var G=.2126,W=.7152,Y=.0722,Q=1/12.92;function J(e){return Math.pow((e+.055)/1.055,2.4)}function X(e){var t=e[0]/255,o=e[1]/255,n=e[2]/255,r=t<=.03928?t*Q:J(t),a=o<=.03928?o*Q:J(o),i=n<=.03928?n*Q:J(n);return r*G+a*W+i*Y}function Z(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function ee(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(X(e),X(t))}function te(e,t){return ee(Z(e),Z(t))}function oe(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var ne={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},re=function(e){var t,o,n=[],r=1;if("string"==typeof e)if(e=e.toLowerCase(),ne[e])n=ne[e].slice(),o="rgb";else if("transparent"===e)r=0,o="rgb",n=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var a=e.slice(1);r=1,(c=a.length)<=4?(n=[parseInt(a[0]+a[0],16),parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16)],4===c&&(r=parseInt(a[3]+a[3],16)/255)):(n=[parseInt(a[0]+a[1],16),parseInt(a[2]+a[3],16),parseInt(a[4]+a[5],16)],8===c&&(r=parseInt(a[6]+a[7],16)/255)),n[0]||(n[0]=0),n[1]||(n[1]=0),n[2]||(n[2]=0),o="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var i=t[1],s="rgb"===i;o=a=i.replace(/a$/,"");var c="cmyk"===a?4:"gray"===a?1:3;n=t[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,t){if(/%$/.test(e))return t===c?parseFloat(e)/100:"rgb"===a?255*parseFloat(e)/100:parseFloat(e);if("h"===a[t]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==ae[e])return ae[e]}return parseFloat(e)})),i===a&&n.push(1),r=s||void 0===n[c]?1:n[c],n=n.slice(0,c)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(n=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),o=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(n=[e[0],e[1],e[2]],o="rgb",r=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(o="rgb",n=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(o="hsl",n=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),r=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(r/=100)):(o="rgb",n=[e>>>16,(65280&e)>>>8,255&e]);return{space:o,values:n,alpha:r}},ae={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};var ie=re,se=function(e){var t;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var o=ie(e);if(!o.space)return[];var n=[0,0,0],r="h"===o.space[0]?[360,100,100]:[255,255,255];return(t=Array(3))[0]=Math.min(Math.max(o.values[0],n[0]),r[0]),t[1]=Math.min(Math.max(o.values[1],n[1]),r[1]),t[2]=Math.min(Math.max(o.values[2],n[2]),r[2]),"h"===o.space[0]&&(t=function(e){var t,o,n,r,a,i=e[0]/360,s=e[1]/100,c=e[2]/100,l=0;if(0===s)return[a=255*c,a,a];for(t=2*c-(o=c<.5?c*(1+s):c+s-c*s),r=[0,0,0];l<3;)(n=i+1/3*-(l-1))<0?n++:n>1&&n--,a=6*n<1?t+6*(o-t)*n:2*n<1?o:3*n<2?t+(o-t)*(2/3-n)*6:t,r[l++]=255*a;return r}(t)),t.push(Math.min(Math.max(o.alpha,0),1)),t};var ce=(e=>(e[e.error=0]="error",e[e.warning=1]="warning",e[e.info=2]="info",e[e.success=3]="success",e[e.message=4]="message",e[e.close=5]="close",e[e["form-description"]=6]="form-description",e[e.of=7]="of",e[e.characters=8]="characters",e[e.new=9]="new",e[e["no-entries"]=10]="no-entries",e[e["change-order"]=11]="change-order",e[e["action-running"]=12]="action-running",e[e["action-done"]=13]="action-done",e[e["page-first"]=14]="page-first",e[e["page-back"]=15]="page-back",e[e["page-next"]=16]="page-next",e[e["page-last"]=17]="page-last",e[e["entries-per-site"]=18]="entries-per-site",e[e["page-current"]=19]="page-current",e[e["page-selected"]=20]="page-selected",e[e["page-per-site"]=21]="page-per-site",e[e["logo-description"]=22]="logo-description",e[e["open-link-in-tab"]=23]="open-link-in-tab",e[e["kolibri-logo"]=24]="kolibri-logo",e))(ce||{}),le=(e=>(e[e.abbr=0]="abbr",e[e.accordion=1]="accordion",e[e["accordion-group"]=2]="accordion-group",e[e.alert=3]="alert",e[e.avatar=4]="avatar",e[e.badge=5]="badge",e[e.breadcrumb=6]="breadcrumb",e[e.button=7]="button",e[e["button-group"]=8]="button-group",e[e["button-link"]=9]="button-link",e[e.card=10]="card",e[e.details=11]="details",e[e.form=12]="form",e[e.heading=13]="heading",e[e.icon=14]="icon",e[e.image=15]="image",e[e["indented-text"]=16]="indented-text",e[e["input-checkbox"]=17]="input-checkbox",e[e["input-color"]=18]="input-color",e[e["input-date"]=19]="input-date",e[e["input-email"]=20]="input-email",e[e["input-file"]=21]="input-file",e[e["input-number"]=22]="input-number",e[e["input-password"]=23]="input-password",e[e["input-radio"]=24]="input-radio",e[e["input-range"]=25]="input-range",e[e["input-text"]=26]="input-text",e[e.kolibri=27]="kolibri",e[e.link=28]="link",e[e["link-button"]=29]="link-button",e[e["link-group"]=30]="link-group",e[e.logo=31]="logo",e[e.modal=32]="modal",e[e.nav=33]="nav",e[e.pagination=34]="pagination",e[e.progress=35]="progress",e[e.select=36]="select",e[e.separator=37]="separator",e[e["skip-nav"]=38]="skip-nav",e[e.spin=39]="spin",e[e["split-button"]=40]="split-button",e[e.symbol=41]="symbol",e[e.table=42]="table",e[e.tabs=43]="tabs",e[e.textarea=44]="textarea",e[e["toast-container"]=45]="toast-container",e[e.toolbar=46]="toolbar",e[e.tooltip=47]="tooltip",e[e.tree=48]="tree",e[e["tree-item"]=49]="tree-item",e))(le||{});const de=["default","info","success","warning","error"],pe=["card","msg"],ue=["button","default","switch"],fe=["block","inline"],he=["both","horizontal","vertical","none"];let be=null,ge=null;const me=()=>be||"undefined"==typeof window?null:window,_e=()=>ge||void 0===me().document?null:me().document;let ve=null,ye=null,ke=null;const xe=()=>!0===ve,we=e=>{ve=e},Se=()=>!0===ye,je=e=>{ye=e},Ee=()=>!0===ke,Le=e=>{ke=e},Te=e=>Array.isArray(e)?e:[e],Ce=e=>`%c${e}`,Ae=(e,t)=>"string"==typeof t&&t.length>0?`${Ce(e)} | ${t}`:Ce(e),Ne=(e,t)=>[Ae(e,t?.classifier),`color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000;${t?.overwriteStyle||""}`],Oe=(e,t)=>e()||!0===t;const Pe=new class{constructor(e,t){this.label=e,this.devMode=t}debug(e,t){Oe(this.devMode,t?.forceLog)&&console.debug(...Ne(this.label,t),...Te(e))}info(e,t){Oe(this.devMode,t?.forceLog)&&console.info(...Ne(this.label,t),...Te(e))}trace(e,t){Oe(this.devMode,t?.forceLog)&&console.trace(...Ne(this.label,t),...Te(e))}warn(e,t){Oe(this.devMode,t?.forceLog)&&console.warn(...Ne(this.label,t),...Te(e))}error(e,t){Oe(this.devMode,t?.forceLog)&&console.error(...Ne(this.label,t),...Te(e))}throw(e,t){if(Oe(this.devMode,t?.forceLog))throw new Error(...Ne(this.label,t),...Te(e))}}("KoliBri",xe),$e=new Set,ze=(e,t)=>{(!1===$e.has(e)||t?.force)&&($e.add(e),Pe.debug([e].concat(t?.details||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},Re=new Set,Ie=(e,t)=>{(!1===Re.has(e)||t?.force)&&(Re.add(e),Pe.debug([e].concat(t?.details||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},Me=(e,t)=>{(!1===Re.has(e)||t?.force)&&(Re.add(e),Pe.warn([e].concat(t?.details||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},De=new Set,Be=(e,t=!1,o)=>{(!1===De.has(e)||o?.force)&&(De.add(e),e+=!0===t?" \u2705":"",Pe.debug([e].concat(o?.details||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};Ie("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const Fe=new Set,qe=(e,t)=>{(!1===Fe.has(e)||t?.force)&&(Fe.add(e),Pe.debug([e].concat(t?.details||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},Ue=()=>{ze('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},Ke=e=>{"string"==typeof e&&""!==e||ze("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},He=(e,t=8)=>{t>7&&qe(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)},Ve=(e,t,o,n=1)=>{const r=[Math.max(Math.min(Math.round(t[0]+n*Math.max(1,t[0]/100)),255),0),Math.max(Math.min(Math.round(t[1]+n*Math.max(1,t[1]/100)),255),0),Math.max(Math.min(Math.round(t[2]+n*Math.max(1,t[2]/100)),255),0)],a=te(V.hex(`rgba(${e.join(",")},1)`),V.hex(`rgba(${r.join(",")},1)`)),i=r[0]+r[1]+r[2];return 0===i||765===i||a>o?{background:e,foreground:r,contrast:a}:Ve(e,r,o,n)},Ge=new Map,We=(e,t=7)=>{let o=[0,0,0,1],n=[255,255,255,1];"string"==typeof e?(o=se(e),n=o):"object"==typeof e&&null!==e&&"string"==typeof e.background&&"string"==typeof e.foreground&&(o=se(e.background),n="string"==typeof e.foreground?se(e.foreground):o);const r=((e,t,o)=>(299*e+587*t+114*o)/1e3>=128?-1:1)(o[0],o[1],o[2]),a=((e,t,o,n=1)=>{if(Ge.has(e))return Ge.get(e);const r=Ve(e,t,o,n);return Ge.set(e,r),r})([o[0],o[1],o[2]],[n[0],n[1],n[2]],t,r);return n=[...a.foreground,1],{background:V.hex(`rgba(${o.join(",")})`),foreground:V.hex(`rgba(${n.join(",")})`),contrast:a.contrast}},Ye=/\[object Object\]/,Qe=(e,t)=>{"string"==typeof e&&Ye.test(e)||t()},Je=(e,t)=>{"string"==typeof e&&""===e||t()},Xe=(e,t)=>{Se()&&(Pe.debug([e,t]),Pe.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},Ze=(e,t,o,n={})=>{void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&e.nextHooks.get(t)?.set("afterPatch",n.afterPatch),"function"==typeof n.beforePatch&&e.nextHooks.get(t)?.set("beforePatch",n.beforePatch),e.nextState.set(t,o),(e=>{e.nextHooks?.forEach(((t,o)=>{const n=t.get("beforePatch");"function"==typeof n&&n(e.nextState?.get(o),e.nextState,e,o)})),e.nextState?.size>0&&(e.state={...e.state,...Object.fromEntries(e.nextState)},delete e.nextState,e.nextHooks?.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e)},et=(e,t,o,n)=>{Ie(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)};function tt(e,t,o,n,r,a={}){o(r)?Ze(e,t,r,a.hooks):void 0===r&&!0!==a.required&&o(a.defaultValue)?Ze(e,t,a.defaultValue,a.hooks):(a.required||n.add(null),et(e,t,r,n))}const ot=(e,t,o,n)=>{tt(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},nt=(e,t,o,n={})=>{const r="number"==typeof n.minLength?n?.minLength:0;tt(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===n?.maxLength||e.length<=n.maxLength)),new Set(["String"]),o,n)},rt=(e,t,o,n)=>{tt(e,t,(e=>"number"==typeof e&&(void 0===n?.min||"number"==typeof n?.min&&e>=n.min)&&(void 0===n?.max||"number"==typeof n?.max&&e<=n.max)),new Set(["Number"]),o,n)},at=(e,t,o,n,r=(e=>e==e),a={})=>{Je(n,(()=>{Qe(n,(()=>{void 0===n&&(n=[]);try{try{n=ut(n)}catch(e){}if(Array.isArray(n)){const i=n.find((e=>!o(e)));void 0===i&&r(n)?Ze(e,t,n,a.hooks):Qe(i,(()=>{throw Pe.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else Qe(n,(()=>{throw Pe.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){Pe.debug(e)}}))}))},it=/^(true|false)$/,st=/^-?(0|[1-9]\d*)$/,ct=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,lt=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(it.test(e))e="true"===e;else if(st.test(e))e=parseInt(e);else if(ct.test(e))e=parseFloat(e);else if(pt.test(e))try{e=ut(e)}catch(e){}return t!==typeof e&&Ie(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},dt=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(Y){throw Pe.warn(["stringifyJson",e]),Pe.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},pt=/^[{[]/,ut=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(Y){if(pt.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(Y){Pe.warn(["parseJson",e]),Pe.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},ft=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,ht=e=>"string"==typeof e?e:ft(e),bt=(e,t)=>D(e,t||_e()),gt=(e,t)=>M(e,t||_e());let mt=null;const _t=()=>(mt=mt||{backgroundColor:"#00000000",color:"#00000000",domNode:_e().body,level:"Fail",score:1},mt),vt=/(\d+, ){3}0\)/,yt=(e,t=_t())=>{const o=getComputedStyle(e),n=vt.test(o.backgroundColor)?t.backgroundColor:V.hex(o.backgroundColor),r=vt.test(o.color)?t.color:V.hex(o.color),a=te(n,r),i={backgroundColor:n,color:r,domNode:e,level:oe(a),score:a};return a<4.5&&Pe.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},kt=(e,t=_t())=>{t.domNode instanceof HTMLElement&&(t=yt(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=kt(e,t)).domNode);n++);return t}return yt(o,t)},xt=class{static queryHtmlElementColors(e,t,o=!1,n=!0){let r=null;if(!0===o||!1===xt.executionLock)if(!1===o&&(xt.cache.clear(),xt.cache.set(t.domNode,t),xt.executionLock=!0,!0===n&&Pe.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)o.add(a[e]);const i=Array.from(o);for(let s=0;s<i.length;s++){let o=xt.cache.get(i[s]);void 0===o&&(o=yt(i[s],t)),xt.cache.set(i[s],o);const n=xt.queryHtmlElementColors(e,o,!0,!1);if(null!==n){r=n;break}}}else Pe.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&Pe.debug(`[KoliBriUtils] Color contrast analysis finished (${xt.cache.size} DOM elements are analysed).`),xt.executionLock=!1,xt.cache.clear()),r}};let wt=xt;wt.executionLock=!1,wt.cache=new Map;class St{}St.patchTheme=u,St.patchThemeTag=p,St.querySelector=bt,St.querySelectorAll=gt,St.stringifyJson=dt;const jt=(e,t,o)=>{tt(e,t,(e=>"string"==typeof e&&Bt.includes(e)),new Set(Bt),o,{defaultValue:"top"})},Et=e=>"object"==typeof e&&null!==e,Lt=(e,t=0)=>"string"==typeof e&&e.length>=t,Tt=new Event("StateChange"),Ct=e=>{if("object"==typeof e&&null!==e){if("string"==typeof e.label&&e.label.length>0)return e.disabled=!0===e.disabled,e.label=`${e.label}`.trim(),!1===No(e.label,3)&&!1===Oo(e.label)&&ze(`Ein abweichendes Aria-Label (${e.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(e.options)||void 0===e.options.find((e=>!1===Ct(e)));if("number"==typeof e.label)return!0}return!1},At={hooks:{afterPatch:e=>{-1!==e&&0!==e&&ze("Don't Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},Nt=(e,t)=>{rt(e,"_tabIndex",t,At)},Ot=(e,t)=>{Et(e)&&e&&(e.focus=e=>t?.focus(e))};let Pt="development";try{Pt="production"}catch(Q){Pt="production"}const $t=(e,t,o)=>{if(e&&t&&"string"==typeof o){const n=e.querySelector(`[slot="${o}"]`);n&&t.appendChild(n)}},zt=e=>""===e,Rt=(e,t)=>{nt(e,"_accessKey",t)},It=(e,t,o)=>{ot(e,"_active",t,o)},Mt=(e,t)=>{ot(e,"_adjustHeight",t)},Dt=(e,t)=>{ot(e,"_alert",t)},Bt=["left","right","top","bottom"],Ft=(e,t)=>{jt(e,"_align",t)},qt=(e,t)=>{nt(e,"_role",t)},Ut=(e,t)=>{nt(e,"_ariaControls",t)},Kt=["date","location","page","step","time","true","false"],Ht=(e,t)=>{tt(e,"_ariaCurrentValue",(e=>"string"==typeof e&&Kt.includes(e)),new Set([`AriaCurrentValue {${Kt.join(", ")}`]),t,{defaultValue:"page"})},Vt=(e,t)=>{ot(e,"_ariaExpanded",t)},Gt=(e,t)=>{ot(e,"_ariaSelected",t)},Wt=(e,t)=>{tt(e,"_on",(e=>"object"==typeof e&&null!==e),new Set(["ButtonCallbacksPropType {Events.onClick, Events.onMouseDown}"]),t)},Yt=["button","reset","submit"],Qt=(e,t)=>{tt(e,"_type",(e=>"string"==typeof e&&Yt.includes(e)),new Set([`KoliBriButtonType {${Yt.join(", ")}`]),t)},Jt=["primary","secondary","normal","tertiary","danger","ghost","custom"],Xt=(e,t)=>{tt(e,"_variant",(e=>"string"==typeof e&&Jt.includes(e)),new Set([`KoliBriButtonVariant {${Jt.join(", ")}`]),t,{defaultValue:"normal"})},Zt=(e,t)=>{ot(e,"_checked",t)},eo=(e,t)=>{ot(e,"_collapsible",t)},to=/^#((\d|[a-f]){8}|(\d|[a-f]){6}|(\d|[a-f]){3,4})$/i;function oo(e){if(e)if("string"==typeof e){if(function(e){return to.test(e)}(e))return{type:"string",valid:!0,value:e};{const t=function(e){if(e.startsWith("{"))try{const t=JSON.parse(e);if(no(t))return{type:"ColorPair",value:t}}catch(e){return{type:null,value:null}}return{type:null,value:null}}(e);if(t.value)return{type:t.type,valid:!0,value:t.value}}}else{const t=e;if(no(t))return{type:"ColorPair",valid:!0,value:t}}return{type:null,valid:!1,value:""}}function no(e){return!("object"!=typeof e||!e||"string"!=typeof e.backgroundColor||!("string"==typeof e.foregroundColor||e.foregroundColor&&"string"==typeof e.foregroundColor.primary&&"string"==typeof e.foregroundColor.secondary&&"string"==typeof e.foregroundColor.neutral))}function ro(e){const t=oo(e);switch(t.type){case null:return!1;case"string":case"ColorPair":return t.valid}}const ao=(e,t,o)=>{tt(e,"_color",ro,new Set(["rgb in hex","ColorPair"]),t,o)},io=e=>{let t;const o=oo(e);switch(o.type){case"string":t=We(o.value);break;case"ColorPair":{const e=o.value;let n="";"string"==typeof e.foregroundColor?n=e.foregroundColor:e.foregroundColor?.primary&&(n=e.foregroundColor.primary),n&&"string"==typeof n||(n="#fff"),t=We({background:e.backgroundColor,foreground:n});break}case null:console.warn(`_color was empty or invalid (${JSON.stringify(e)})`),t=We({background:"#000",foreground:"#000"})}return t.contrast<7&&ze(`[KolBadge] The contrast of ${t.contrast} (\u22657, AAA) is to low, between the color pair ${t.background} and ${t.foreground}.`),{backgroundColor:t.background,foregroundColor:t.foreground}},so=(e,t)=>{nt(e,"_customClass",t,{defaultValue:void 0})},co=(e,t)=>{ot(e,"_disabled",t,{hooks:{afterPatch:e=>{!0===e&&Ue()}}})},lo=(e,t)=>{nt(e,"_download",t)},po=(e,t)=>{tt(e,"errorList",(e=>"object"==typeof e),new Set(["Object"]),t)},uo=(e,t)=>{ot(e,"_hasCloser",t)},fo=(e,t)=>{ot(e,"_hasCompactButton",t)},ho=(e,t)=>{ot(e,"_hasCounter",t)},bo=(e,t)=>{ot(e,"_hasIconsWhenExpanded",t)},go=["h1","h2","h3","h4","h5","h6","strong"],mo=(e,t)=>{tt(e,"_variant",(e=>"string"==typeof e&&go.includes(e)),new Set([`KoliBriHeadingVariant {${go.join(", ")}`]),t)},_o=(e,t,o)=>{ot(e,"_hideError",t,o)},vo=(e,t,o={})=>{ot(e,"_hideLabel",t,o)},yo=(e,t,o={})=>{nt(e,"_href",t,o)},ko=(e,t,o)=>{Et(o)?e[t]=o:Lt(o,1)&&(e[t]={icon:o})},xo=e=>{if(e.nextState?.has("_icons")){const t=e.nextState?.get("_icons");e.nextState?.set("_icons",(e=>{let t={};return Lt(e,1)?t={left:{icon:e}}:"object"==typeof e&&null!==e&&(ko(t,"top",e.top),ko(t,"right",e.right),ko(t,"bottom",e.bottom),ko(t,"left",e.left)),t})(t))}},wo=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(e=>{if("object"!=typeof e||null===e)return Lt(e,1);for(const t in e)if(!1===Lt(t,1))return!1;return!0})(e.style))&&(void 0===e.label||Lt(e.label))&&Lt(e.icon,1),So=(e,t,o={})=>{Qe(t,(()=>{try{t=ut(t)}catch(e){}tt(e,"_icons",(e=>{const t="object"==typeof e&&null!==e&&0===Object.keys(e).length;return null===e||t||Lt(e,1)||"object"==typeof e&&null!==e&&(Lt(e.left,1)||wo(e.left)||Lt(e.right,1)||wo(e.right)||Lt(e.top,1)||wo(e.top)||Lt(e.bottom,1)||wo(e.bottom))}),new Set(["KoliBriIcon"]),t,{...o,defaultValue:{},hooks:{afterPatch:o.hooks?.afterPatch,beforePatch:(e,t,n,r)=>{"function"==typeof o.hooks?.beforePatch&&o.hooks?.beforePatch(e,t,n,r),xo(n)}}})}))},jo=(e,t)=>{nt(e,"_id",t)},Eo=(e,t,o)=>{nt(e,"_src",t,o)},Lo=(e,t)=>{ot(e,"_indeterminate",t)},To=[0,1,2,3,4,5,6],Co=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,Ao=/^\d+$/;function No(e,t=1){return function(e){return"string"==typeof e&&e.match(Co)?.length||0}(e)>=t}function Oo(e){return Ao.test(e)}const Po=new Set(["string"]),$o=(e,t,o={})=>{tt(e,"_label",(e=>"string"==typeof e),Po,t,function(e){return{...e,hooks:{afterPatch:(t,o,n,r)=>{"function"==typeof e.hooks?.afterPatch&&e.hooks?.afterPatch(t,o,n,r),"string"==typeof t&&!1===No(t,3)&&!1===Oo(t)&&ze(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&qe("A heading or label should not be longer than 80 characters.")},beforePatch:e.hooks?.beforePatch}}}(o))},zo=$o,Ro=(e,t)=>{"object"==typeof t&&"function"==typeof t?.onClick&&(e.state={...e.state,_on:t})},Io=(e,t)=>{nt(e,"_target",t)},Mo=["eager","lazy"];function Do(e,t){tt(e,"_loading",(e=>"string"==typeof e&&Mo.includes(e)),new Set(Mo),t)}const Bo=(e,t,o)=>{rt(e,"_max",t,o)},Fo=(e,t)=>{ot(e,"_multiple",t)},qo=(e,t,o)=>{nt(e,"_name",t,o)},Uo=(e,t,o)=>{ot(e,"_open",t,o)},Ko=(e,t,o={})=>{at(e,"_options",(e=>"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0),t,void 0,o)},Ho=(e,t,o={})=>{at(e,"_options",Ct,t,void 0,o)},Vo=["top","bottom","both"],Go=(e,t)=>{tt(e,"_paginationPosition",(e=>"string"==typeof e&&Vo.includes(e)),new Set([`PaginationPositionPropType {${Vo.join(", ")}`]),t,{defaultValue:"bottom"})},Wo=(e,t)=>{ot(e,"_readOnly",t)},Yo=(e,t)=>{ot(e,"_required",t)},Qo=(e,t)=>{rt(e,"_rows",t,{min:1})},Jo=(e,t,o)=>{ot(e,"_show",t,o)},Xo=(e,t)=>{at(e,"_suggestions",(e=>"string"==typeof e||"number"==typeof e),t,void 0,{hooks:{afterPatch:e=>{Array.isArray(e)&&e.length&&ze("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})},Zo=(e,t)=>{jt(e,"_tooltipAlign",t)},en=(e,t)=>{ot(e,"_touched",t)},tn=["cycle","dot","none"],on=(e,t)=>{tt(e,"_variant",(e=>"string"==typeof e&&tn.includes(e)),new Set(tn),t)},nn=["date","datetime-local","month","time","week"],rn=["text","search","url","tel"],an=["on","off"],sn=["horizontal","vertical"];var cn=(e=>(e.bar="bar",e.cycle="cycle",e["cycle-value-label"]="cycle-value-label",e["cycle-label-value"]="cycle-label-value",e))(cn||{});new class{constructor(e,t,o){this.createTheme=(e,t)=>((e,t)=>o=>o(e,t,{append:!1}))(e,t),this.createTranslation=(e,t)=>((e,t)=>o=>o(e,t))(e,t),this.Prefix=e,this.Key=Object.getOwnPropertyNames(t),this.Tag=Object.getOwnPropertyNames(o)}}("kol",ce,le)},28636:(e,t,o)=>{"use strict";o.d(t,{g:()=>G,r:()=>V});var n=o(75224),r=o(85800);const a={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class i{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||a,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,o,n){return n&&!this.debug?null:("string"==typeof e[0]&&(e[0]=`${o}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new i(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new i(this.logger,e)}}var s=new i;class c{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach((e=>{this.observers[e]||(this.observers[e]=new Map);const o=this.observers[e].get(t)||0;this.observers[e].set(t,o+1)})),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach((e=>{let[t,n]=e;for(let r=0;r<n;r++)t(...o)})),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach((t=>{let[n,r]=t;for(let a=0;a<r;a++)n.apply(n,[e,...o])}))}}function l(){let e,t;const o=new Promise(((o,n)=>{e=o,t=n}));return o.resolve=e,o.reject=t,o}function d(e){return null==e?"":""+e}const p=/###/g;function u(e,t,o){function n(e){return e&&e.indexOf("###")>-1?e.replace(p,"."):e}function r(){return!e||"string"==typeof e}const a="string"!=typeof t?t:t.split(".");let i=0;for(;i<a.length-1;){if(r())return{};const t=n(a[i]);!e[t]&&o&&(e[t]=new o),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return r()?{}:{obj:e,k:n(a[i])}}function f(e,t,o){const{obj:n,k:r}=u(e,t,Object);if(void 0!==n||1===t.length)return void(n[r]=o);let a=t[t.length-1],i=t.slice(0,t.length-1),s=u(e,i,Object);for(;void 0===s.obj&&i.length;)a=`${i[i.length-1]}.${a}`,i=i.slice(0,i.length-1),s=u(e,i,Object),s&&s.obj&&void 0!==s.obj[`${s.k}.${a}`]&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=o}function h(e,t){const{obj:o,k:n}=u(e,t);if(o)return o[n]}function b(e,t,o){for(const n in t)"__proto__"!==n&&"constructor"!==n&&(n in e?"string"==typeof e[n]||e[n]instanceof String||"string"==typeof t[n]||t[n]instanceof String?o&&(e[n]=t[n]):b(e[n],t[n],o):e[n]=t[n]);return e}function g(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function _(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(e=>m[e])):e}const v=[" ",",","?","!",";"],y=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const o=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,o),this.regExpQueue.push(e),o}}(20);function k(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t])return e[t];const n=t.split(o);let r=e;for(let a=0;a<n.length;){if(!r||"object"!=typeof r)return;let e,t="";for(let i=a;i<n.length;++i)if(i!==a&&(t+=o),t+=n[i],e=r[t],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&i<n.length-1)continue;a+=i-a+1;break}r=e}return r}function x(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class w extends c{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,a=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let i;e.indexOf(".")>-1?i=e.split("."):(i=[e,t],o&&(Array.isArray(o)?i.push(...o):"string"==typeof o&&r?i.push(...o.split(r)):i.push(o)));const s=h(this.data,i);return!s&&!t&&!o&&e.indexOf(".")>-1&&(e=i[0],t=i[1],o=i.slice(2).join(".")),s||!a||"string"!=typeof o?s:k(this.data&&this.data[e]&&this.data[e][t],o,r)}addResource(e,t,o,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const a=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator;let i=[e,t];o&&(i=i.concat(a?o.split(a):o)),e.indexOf(".")>-1&&(i=e.split("."),n=t,t=i[1]),this.addNamespaces(t),f(this.data,i,n),r.silent||this.emit("added",e,t,o,n)}addResources(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const r in o)"string"!=typeof o[r]&&"[object Array]"!==Object.prototype.toString.apply(o[r])||this.addResource(e,t,r,o[r],{silent:!0});n.silent||this.emit("added",e,t,o)}addResourceBundle(e,t,o,n,r){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},i=[e,t];e.indexOf(".")>-1&&(i=e.split("."),n=o,o=t,t=i[1]),this.addNamespaces(t);let s=h(this.data,i)||{};n?b(s,o,r):s={...s,...o},f(this.data,i,s),a.silent||this.emit("added",e,t,o)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((e=>t[e]&&Object.keys(t[e]).length>0))}toJSON(){return this.data}}var S={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,o,n,r){return e.forEach((e=>{this.processors[e]&&(t=this.processors[e].process(t,o,n,r))})),t}};const j={};class E extends c{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),function(e,t,o){e.forEach((e=>{t[e]&&(o[e]=t[e])}))}(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=s.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;const o=this.resolve(e,t);return o&&void 0!==o.res}extractFromKey(e,t){let o=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===o&&(o=":");const n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const a=o&&e.indexOf(o)>-1,i=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||function(e,t,o){t=t||"",o=o||"";const n=v.filter((e=>t.indexOf(e)<0&&o.indexOf(e)<0));if(0===n.length)return!0;const r=y.getRegExp(`(${n.map((e=>"?"===e?"\\?":e)).join("|")})`);let a=!r.test(e);if(!a){const t=e.indexOf(o);t>0&&!r.test(e.substring(0,t))&&(a=!0)}return a}(e,o,n));if(a&&!i){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:r};const a=e.split(o);(o!==n||o===n&&this.options.ns.indexOf(a[0])>-1)&&(r=a.shift()),e=a.join(n)}return"string"==typeof r&&(r=[r]),{key:e,namespaces:r}}translate(e,t,o){if("object"!=typeof t&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof t&&(t={...t}),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);const n=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,{key:a,namespaces:i}=this.extractFromKey(e[e.length-1],t),s=i[i.length-1],c=t.lng||this.language,l=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(l){const e=t.nsSeparator||this.options.nsSeparator;return n?{res:`${s}${e}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:s,usedParams:this.getUsedParamsDetails(t)}:`${s}${e}${a}`}return n?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:s,usedParams:this.getUsedParamsDetails(t)}:a}const d=this.resolve(e,t);let p=d&&d.res;const u=d&&d.usedKey||a,f=d&&d.exactUsedKey||a,h=Object.prototype.toString.apply(p),b=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,g=!this.i18nFormat||this.i18nFormat.handleAsObject;if(g&&p&&"string"!=typeof p&&"boolean"!=typeof p&&"number"!=typeof p&&["[object Number]","[object Function]","[object RegExp]"].indexOf(h)<0&&("string"!=typeof b||"[object Array]"!==h)){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(u,p,{...t,ns:i}):`key '${a} (${this.language})' returned an object instead of string.`;return n?(d.res=e,d.usedParams=this.getUsedParamsDetails(t),d):e}if(r){const e="[object Array]"===h,o=e?[]:{},n=e?f:u;for(const a in p)if(Object.prototype.hasOwnProperty.call(p,a)){const e=`${n}${r}${a}`;o[a]=this.translate(e,{...t,joinArrays:!1,ns:i}),o[a]===e&&(o[a]=p[a])}p=o}}else if(g&&"string"==typeof b&&"[object Array]"===h)p=p.join(b),p&&(p=this.extendTranslation(p,e,t,o));else{let n=!1,i=!1;const l=void 0!==t.count&&"string"!=typeof t.count,u=E.hasDefaultValue(t),f=l?this.pluralResolver.getSuffix(c,t.count,t):"",h=t.ordinal&&l?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",b=l&&!t.ordinal&&0===t.count&&this.pluralResolver.shouldUseIntlApi(),g=b&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${f}`]||t[`defaultValue${h}`]||t.defaultValue;!this.isValidLookup(p)&&u&&(n=!0,p=g),this.isValidLookup(p)||(i=!0,p=a);const m=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&i?void 0:p,_=u&&g!==p&&this.options.updateMissing;if(i||n||_){if(this.logger.log(_?"updateKey":"missingKey",c,s,a,_?g:p),r){const e=this.resolve(a,{...t,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const o=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&o&&o[0])for(let t=0;t<o.length;t++)e.push(o[t]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(t.lng||this.language):e.push(t.lng||this.language);const n=(e,o,n)=>{const r=u&&n!==p?n:m;this.options.missingKeyHandler?this.options.missingKeyHandler(e,s,o,r,_,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,s,o,r,_,t),this.emit("missingKey",e,s,o,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&l?e.forEach((e=>{const o=this.pluralResolver.getSuffixes(e,t);b&&t[`defaultValue${this.options.pluralSeparator}zero`]&&o.indexOf(`${this.options.pluralSeparator}zero`)<0&&o.push(`${this.options.pluralSeparator}zero`),o.forEach((o=>{n([e],a+o,t[`defaultValue${o}`]||g)}))})):n(e,a,g))}p=this.extendTranslation(p,e,t,d,o),i&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${s}:${a}`),(i||n)&&this.options.parseMissingKeyHandler&&(p="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${a}`:a,n?p:void 0):this.options.parseMissingKeyHandler(p))}return n?(d.res=p,d.usedParams=this.getUsedParamsDetails(t),d):p}extendTranslation(e,t,o,n,r){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const i="string"==typeof e&&(o&&o.interpolation&&void 0!==o.interpolation.skipOnVariables?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let s;if(i){const t=e.match(this.interpolator.nestingRegexp);s=t&&t.length}let c=o.replace&&"string"!=typeof o.replace?o.replace:o;if(this.options.interpolation.defaultVariables&&(c={...this.options.interpolation.defaultVariables,...c}),e=this.interpolator.interpolate(e,c,o.lng||this.language,o),i){const t=e.match(this.interpolator.nestingRegexp);s<(t&&t.length)&&(o.nest=!1)}!o.lng&&"v1"!==this.options.compatibilityAPI&&n&&n.res&&(o.lng=n.usedLng),!1!==o.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r&&r[0]===n[0]&&!o.context?(a.logger.warn(`It seems you are nesting recursively key: ${n[0]} in key: ${t[0]}`),null):a.translate(...n,t)}),o)),o.interpolation&&this.interpolator.reset()}const i=o.postProcess||this.options.postProcess,s="string"==typeof i?[i]:i;return null!=e&&s&&s.length&&!1!==o.applyPostProcessor&&(e=S.handle(s,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),e}resolve(e){let t,o,n,r,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((e=>{if(this.isValidLookup(t))return;const s=this.extractFromKey(e,i),c=s.key;o=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));const d=void 0!==i.count&&"string"!=typeof i.count,p=d&&!i.ordinal&&0===i.count&&this.pluralResolver.shouldUseIntlApi(),u=void 0!==i.context&&("string"==typeof i.context||"number"==typeof i.context)&&""!==i.context,f=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);l.forEach((e=>{this.isValidLookup(t)||(a=e,!j[`${f[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(j[`${f[0]}-${e}`]=!0,this.logger.warn(`key "${o}" for languages "${f.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach((o=>{if(this.isValidLookup(t))return;r=o;const a=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(a,c,o,e,i);else{let e;d&&(e=this.pluralResolver.getSuffix(o,i.count,i));const t=`${this.options.pluralSeparator}zero`,n=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(a.push(c+e),i.ordinal&&0===e.indexOf(n)&&a.push(c+e.replace(n,this.options.pluralSeparator)),p&&a.push(c+t)),u){const o=`${c}${this.options.contextSeparator}${i.context}`;a.push(o),d&&(a.push(o+e),i.ordinal&&0===e.indexOf(n)&&a.push(o+e.replace(n,this.options.pluralSeparator)),p&&a.push(o+t))}}let s;for(;s=a.pop();)this.isValidLookup(t)||(n=s,t=this.getResource(o,e,s,i))})))}))})),{res:t,usedKey:o,exactUsedKey:n,usedLng:r,usedNS:a}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,o,n):this.resourceStore.getResource(e,t,o,n)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=e.replace&&"string"!=typeof e.replace;let n=o?e.replace:e;if(o&&void 0!==e.count&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!o){n={...n};for(const e of t)delete n[e]}return n}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&"defaultValue"===t.substring(0,12)&&void 0!==e[t])return!0;return!1}}function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}class T{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=s.create("languageUtils")}getScriptPartFromCode(e){if(!(e=x(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=x(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if("string"==typeof e&&e.indexOf("-")>-1){const t=["hans","hant","latn","cyrl","cans","mong","arab"];let o=e.split("-");return this.options.lowerCaseLng?o=o.map((e=>e.toLowerCase())):2===o.length?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),t.indexOf(o[1].toLowerCase())>-1&&(o[1]=L(o[1].toLowerCase()))):3===o.length&&(o[0]=o[0].toLowerCase(),2===o[1].length&&(o[1]=o[1].toUpperCase()),"sgn"!==o[0]&&2===o[2].length&&(o[2]=o[2].toUpperCase()),t.indexOf(o[1].toLowerCase())>-1&&(o[1]=L(o[1].toLowerCase())),t.indexOf(o[2].toLowerCase())>-1&&(o[2]=L(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach((e=>{if(t)return;const o=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(o)||(t=o)})),!t&&this.options.supportedLngs&&e.forEach((e=>{if(t)return;const o=this.getLanguagePartFromCode(e);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find((e=>e===o?e:e.indexOf("-")<0&&o.indexOf("-")<0?void 0:0===e.indexOf(o)?e:void 0))})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];let o=e[t];return o||(o=e[this.getScriptPartFromCode(t)]),o||(o=e[this.formatLanguageCode(t)]),o||(o=e[this.getLanguagePartFromCode(t)]),o||(o=e.default),o||[]}toResolveHierarchy(e,t){const o=this.getFallbackCodes(t||this.options.fallbackLng||[],e),n=[],r=e=>{e&&(this.isSupportedCode(e)?n.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return"string"==typeof e&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&r(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(e))):"string"==typeof e&&r(this.formatLanguageCode(e)),o.forEach((e=>{n.indexOf(e)<0&&r(this.formatLanguageCode(e))})),n}}let C=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],A={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}};const N=["v1","v2","v3"],O=["v4"],P={zero:0,one:1,two:2,few:3,many:4,other:5};class ${constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=s.create("pluralResolver"),this.options.compatibilityJSON&&!O.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=function(){const e={};return C.forEach((t=>{t.lngs.forEach((o=>{e[o]={numbers:t.nr,plurals:A[t.fc]}}))})),e}()}addRule(e,t){this.rules[e]=t}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(x("dev"===e?"en":e),{type:t.ordinal?"ordinal":"cardinal"})}catch(e){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=this.getRule(e,t);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}getPluralFormsOfKey(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,o).map((e=>`${t}${e}`))}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=this.getRule(e,t);return o?this.shouldUseIntlApi()?o.resolvedOptions().pluralCategories.sort(((e,t)=>P[e]-P[t])).map((e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):o.numbers.map((o=>this.getSuffix(e,o,t))):[]}getSuffix(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=this.getRule(e,o);return n?this.shouldUseIntlApi()?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:this.getSuffixRetroCompatible(n,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const o=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let n=e.numbers[o];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===n?n="plural":1===n&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return"v1"===this.options.compatibilityJSON?1===n?"":"number"==typeof n?`_plural_${n.toString()}`:r():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?r():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}shouldUseIntlApi(){return!N.includes(this.options.compatibilityJSON)}}function z(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=function(e,t,o){const n=h(e,o);return void 0!==n?n:h(t,o)}(e,t,o);return!a&&r&&"string"==typeof o&&(a=k(e,o,n),void 0===a&&(a=k(t,o,n))),a}class R{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=s.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const t=e.interpolation;this.escape=void 0!==t.escape?t.escape:_,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?g(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?g(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?g(t.nestingPrefix):t.nestingPrefixEscaped||g("$t("),this.nestingSuffix=t.nestingSuffix?g(t.nestingSuffix):t.nestingSuffixEscaped||g(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e&&e.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,o,n){let r,a,i;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(e){return e.replace(/\$/g,"$$$$")}const l=e=>{if(e.indexOf(this.formatSeparator)<0){const r=z(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(r,void 0,o,{...n,...t,interpolationkey:e}):r}const r=e.split(this.formatSeparator),a=r.shift().trim(),i=r.join(this.formatSeparator).trim();return this.format(z(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),i,o,{...n,...t,interpolationkey:a})};this.resetRegExp();const p=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,u=n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>c(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?c(this.escape(e)):c(e)}].forEach((t=>{for(i=0;r=t.regex.exec(e);){const o=r[1].trim();if(a=l(o),void 0===a)if("function"==typeof p){const t=p(e,r,n);a="string"==typeof t?t:""}else if(n&&Object.prototype.hasOwnProperty.call(n,o))a="";else{if(u){a=r[0];continue}this.logger.warn(`missed to pass in variable ${o} for interpolating ${e}`),a=""}else"string"==typeof a||this.useRawValueToEscape||(a=d(a));const s=t.safeValue(a);if(e=e.replace(r[0],s),u?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=r[0].length):t.regex.lastIndex=0,i++,i>=this.maxReplaces)break}})),e}nest(e,t){let o,n,r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function i(e,t){const o=this.nestingOptionsSeparator;if(e.indexOf(o)<0)return e;const n=e.split(new RegExp(`${o}[ ]*{`));let a=`{${n[1]}`;e=n[0],a=this.interpolate(a,r);const i=a.match(/'/g),s=a.match(/"/g);(i&&i.length%2==0&&!s||s.length%2!=0)&&(a=a.replace(/'/g,'"'));try{r=JSON.parse(a),t&&(r={...t,...r})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${o}${a}`}return delete r.defaultValue,e}for(;o=this.nestingRegexp.exec(e);){let s=[];r={...a},r=r.replace&&"string"!=typeof r.replace?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;let c=!1;if(-1!==o[0].indexOf(this.formatSeparator)&&!/{.*}/.test(o[1])){const e=o[1].split(this.formatSeparator).map((e=>e.trim()));o[1]=e.shift(),s=e,c=!0}if(n=t(i.call(this,o[1].trim(),r),r),n&&o[0]===e&&"string"!=typeof n)return n;"string"!=typeof n&&(n=d(n)),n||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),n=""),c&&(n=s.reduce(((e,t)=>this.format(e,t,a.lng,{...a,interpolationkey:o[1].trim()})),n.trim())),e=e.replace(o[0],n),this.regexp.lastIndex=0}return e}}function I(e){const t={};return function(o,n,r){const a=n+JSON.stringify(r);let i=t[a];return i||(i=e(x(n),r),t[a]=i),i(o)}}class M{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=s.create("formatter"),this.options=e,this.formats={number:I(((e,t)=>{const o=new Intl.NumberFormat(e,{...t});return e=>o.format(e)})),currency:I(((e,t)=>{const o=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>o.format(e)})),datetime:I(((e,t)=>{const o=new Intl.DateTimeFormat(e,{...t});return e=>o.format(e)})),relativetime:I(((e,t)=>{const o=new Intl.RelativeTimeFormat(e,{...t});return e=>o.format(e,t.range||"day")})),list:I(((e,t)=>{const o=new Intl.ListFormat(e,{...t});return e=>o.format(e)}))},this.init(e)}init(e){const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=I(t)}format(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.split(this.formatSeparator).reduce(((e,t)=>{const{formatName:r,formatOptions:a}=function(e){let t=e.toLowerCase().trim();const o={};if(e.indexOf("(")>-1){const n=e.split("(");t=n[0].toLowerCase().trim();const r=n[1].substring(0,n[1].length-1);"currency"===t&&r.indexOf(":")<0?o.currency||(o.currency=r.trim()):"relativetime"===t&&r.indexOf(":")<0?o.range||(o.range=r.trim()):r.split(";").forEach((e=>{if(!e)return;const[t,...n]=e.split(":"),r=n.join(":").trim().replace(/^'+|'+$/g,"");o[t.trim()]||(o[t.trim()]=r),"false"===r&&(o[t.trim()]=!1),"true"===r&&(o[t.trim()]=!0),isNaN(r)||(o[t.trim()]=parseInt(r,10))}))}return{formatName:t,formatOptions:o}}(t);if(this.formats[r]){let t=e;try{const i=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},s=i.locale||i.lng||n.locale||n.lng||o;t=this.formats[r](e,s,{...a,...n,...i})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${r}`),e}),e)}}class D extends c{constructor(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=o,this.languageUtils=o.languageUtils,this.options=n,this.logger=s.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(o,n.backend,n)}queueLoad(e,t,o,n){const r={},a={},i={},s={};return e.forEach((e=>{let n=!0;t.forEach((t=>{const i=`${e}|${t}`;!o.reload&&this.store.hasResourceBundle(e,t)?this.state[i]=2:this.state[i]<0||(1===this.state[i]?void 0===a[i]&&(a[i]=!0):(this.state[i]=1,n=!1,void 0===a[i]&&(a[i]=!0),void 0===r[i]&&(r[i]=!0),void 0===s[t]&&(s[t]=!0)))})),n||(i[e]=!0)})),(Object.keys(r).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(a),toLoadLanguages:Object.keys(i),toLoadNamespaces:Object.keys(s)}}loaded(e,t,o){const n=e.split("|"),r=n[0],a=n[1];t&&this.emit("failedLoading",r,a,t),o&&this.store.addResourceBundle(r,a,o),this.state[e]=t?-1:2;const i={};this.queue.forEach((o=>{(function(e,t,o,n){const{obj:r,k:a}=u(e,t,Object);r[a]=r[a]||[],n&&(r[a]=r[a].concat(o)),n||r[a].push(o)})(o.loaded,[r],a),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(o,e),t&&o.errors.push(t),0!==o.pendingCount||o.done||(Object.keys(o.loaded).forEach((e=>{i[e]||(i[e]={});const t=o.loaded[e];t.length&&t.forEach((t=>{void 0===i[e][t]&&(i[e][t]=!0)}))})),o.done=!0,o.errors.length?o.callback(o.errors):o.callback())})),this.emit("loaded",i),this.queue=this.queue.filter((e=>!e.done))}read(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:o,tried:n,wait:r,callback:a});this.readingCalls++;const i=(i,s)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}i&&s&&n<this.maxRetries?setTimeout((()=>{this.read.call(this,e,t,o,n+1,2*r,a)}),r):a(i,s)},s=this.backend[o].bind(this.backend);if(2!==s.length)return s(e,t,i);try{const o=s(e,t);o&&"function"==typeof o.then?o.then((e=>i(null,e))).catch(i):i(null,o)}catch(e){i(e)}}prepareLoading(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);const r=this.queueLoad(e,t,o,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,t,o){this.prepareLoading(e,t,{},o)}reload(e,t,o){this.prepareLoading(e,t,{reload:!0},o)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const o=e.split("|"),n=o[0],r=o[1];this.read(n,r,"read",void 0,void 0,((o,a)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)}))}saveMissing(e,t,o,n,r){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn(`did not save key "${o}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=o&&""!==o){if(this.backend&&this.backend.create){const s={...a,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let r;r=5===c.length?c(e,t,o,n,s):c(e,t,o,n),r&&"function"==typeof r.then?r.then((e=>i(null,e))).catch(i):i(null,r)}catch(e){i(e)}else c(e,t,o,n,i,s)}e&&e[0]&&this.store.addResource(e[0],t,o,n)}}}function B(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let t={};if("object"==typeof e[1]&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const o=e[3]||e[2];Object.keys(o).forEach((e=>{t[e]=o[e]}))}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function F(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function q(){}class U extends c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=F(e),this.services={},this.logger=s,this.modules={external:[]},function(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t=>{"function"==typeof e[t]&&(e[t]=e[t].bind(e))}))}(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout((()=>{this.init(e,t)}),0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;"function"==typeof t&&(o=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"==typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const n=B();function r(e){return e?"function"==typeof e?new e:e:null}if(this.options={...n,...this.options,...F(t)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){let t;this.modules.logger?s.init(r(this.modules.logger),this.options):s.init(null,this.options),this.modules.formatter?t=this.modules.formatter:"undefined"!=typeof Intl&&(t=M);const o=new T(this.options);this.store=new w(this.options.resources,this.options);const a=this.services;a.logger=s,a.resourceStore=this.store,a.languageUtils=o,a.pluralResolver=new $(o,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!t||this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format||(a.formatter=r(t),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new R(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new D(r(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",(function(t){for(var o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];e.emit(t,...n)})),this.modules.languageDetector&&(a.languageDetector=r(this.modules.languageDetector),a.languageDetector.init&&a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=r(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new E(this.services,this.options),this.translator.on("*",(function(t){for(var o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];e.emit(t,...n)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,o||(o=q),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((t=>{this[t]=function(){return e.store[t](...arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((t=>{this[t]=function(){return e.store[t](...arguments),e}}));const a=l(),i=()=>{const e=(e,t)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(t),o(e,t)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?i():setTimeout(i,0),a}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;const o="string"==typeof e?e:this.language;if("function"==typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(o&&"cimode"===o.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],n=t=>{t&&"cimode"!==t&&this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)}))};o?n(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>n(e))),this.options.preload&&this.options.preload.forEach((e=>n(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)}))}else t(null)}reloadResources(e,t,o){const n=l();return e||(e=this.languages),t||(t=this.options.ns),o||(o=q),this.services.backendConnector.reload(e,t,(e=>{n.resolve(),o(e)})),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&S.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const e=this.languages[t];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}}changeLanguage(e,t){var o=this;this.isLanguageChangingTo=e;const n=l();this.emit("languageChanging",e);const r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},a=(e,a)=>{a?(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit("languageChanged",a),this.logger.log("languageChanged",a)):this.isLanguageChangingTo=void 0,n.resolve((function(){return o.t(...arguments)})),t&&t(e,(function(){return o.t(...arguments)}))},i=t=>{e||t||!this.services.languageDetector||(t=[]);const o="string"==typeof t?t:this.services.languageUtils.getBestMatchFromCodes(t);o&&(this.language||r(o),this.translator.language||this.translator.changeLanguage(o),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(o)),this.loadResources(o,(e=>{a(e,o)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(i):this.services.languageDetector.detect(i):i(e):i(this.services.languageDetector.detect()),n}getFixedT(e,t,o){var n=this;const r=function(e,t){let a;if("object"!=typeof t){for(var i=arguments.length,s=new Array(i>2?i-2:0),c=2;c<i;c++)s[c-2]=arguments[c];a=n.options.overloadTranslationOptionHandler([e,t].concat(s))}else a={...t};a.lng=a.lng||r.lng,a.lngs=a.lngs||r.lngs,a.ns=a.ns||r.ns,a.keyPrefix=a.keyPrefix||o||r.keyPrefix;const l=n.options.keySeparator||".";let d;return d=a.keyPrefix&&Array.isArray(e)?e.map((e=>`${a.keyPrefix}${l}${e}`)):a.keyPrefix?`${a.keyPrefix}${l}${e}`:e,n.t(d,a)};return"string"==typeof e?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=o,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=t.lng||this.resolvedLanguage||this.languages[0],n=!!this.options&&this.options.fallbackLng,r=this.languages[this.languages.length-1];if("cimode"===o.toLowerCase())return!0;const a=(e,t)=>{const o=this.services.backendConnector.state[`${e}|${t}`];return-1===o||2===o};if(t.precheck){const e=t.precheck(this,a);if(void 0!==e)return e}return!(!this.hasResourceBundle(o,e)&&this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages)&&(!a(o,e)||n&&!a(r,e)))}loadNamespaces(e,t){const o=l();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)})),this.loadResources((e=>{o.resolve(),t&&t(e)})),o):(t&&t(),Promise.resolve())}loadLanguages(e,t){const o=l();"string"==typeof e&&(e=[e]);const n=this.options.preload||[],r=e.filter((e=>n.indexOf(e)<0));return r.length?(this.options.preload=n.concat(r),this.loadResources((e=>{o.resolve(),t&&t(e)})),o):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=this.services&&this.services.languageUtils||new T(B());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new U(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;const o=e.forkResourceStore;o&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new U(n);return void 0===e.debug&&void 0===e.prefix||(r.logger=r.logger.clone(e)),["store","services","language"].forEach((e=>{r[e]=this[e]})),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},o&&(r.store=new w(this.store.data,n),r.services.resourceStore=r.store),r.translator=new E(r.services,n),r.translator.on("*",(function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];r.emit(e,...o)})),r.init(n,t),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const K=U.createInstance();K.createInstance=U.createInstance;class H{constructor(){}static async createInstance(e,t){return Array.isArray(t)?t=new Set(t):"function"==typeof t&&(t=new Set([t])),H.instance=new H,K.isInitialized?await K.loadNamespaces(H.namespace):await K.init({ns:[H.namespace],lng:e}),void 0!==t&&t.forEach((e=>e(((e,t)=>(H.instance.addResourceBundle(e,t),e))))),this.instance}static addResourceBundle(e,t){K.addResourceBundle(e,H.namespace,t,!0)}addResourceBundle(e,t){H.addResourceBundle(e,t)}translate(e,t){return K.t(e,Object.assign({ns:H.namespace,count:null==t?void 0:t.count},null==t?void 0:t.placeholders))}}H.namespace="KoliBri";const V=async(e,t,o)=>{var a,i;return void 0===(0,r.g)().I18n&&Object.defineProperty((0,r.g)(),"I18n",{value:await H.createInstance(null!==(i=null===(a=null==o?void 0:o.translation)||void 0===a?void 0:a.name)&&void 0!==i?i:"de",null==o?void 0:o.translations),writable:!1}),await(0,n._)(e,t,o)},G=()=>(0,r.g)().I18n},29304:(e,t,o)=>{var n={"./kol-abbr.entry.js":[83956,83956],"./kol-accordion.entry.js":[50048,50048],"./kol-alert-wc_3.entry.js":[79344,79344],"./kol-alert.entry.js":[99328,99328],"./kol-avatar-wc.entry.js":[93944,93944],"./kol-avatar.entry.js":[20444,20444],"./kol-badge.entry.js":[66740,66740],"./kol-breadcrumb.entry.js":[48880,48880],"./kol-button-group-wc.entry.js":[8144,8144],"./kol-button-group.entry.js":[27492,49872],"./kol-button-link.entry.js":[19852,19852],"./kol-button.entry.js":[50440,50440],"./kol-card.entry.js":[85610,63228],"./kol-details.entry.js":[4060,4060],"./kol-form.entry.js":[51752,51752],"./kol-heading.entry.js":[90744,90744],"./kol-icon.entry.js":[42480,42480],"./kol-image.entry.js":[66307,66307],"./kol-indented-text.entry.js":[94440,94440],"./kol-input-checkbox.entry.js":[54712,54712],"./kol-input-color.entry.js":[94192,94192],"./kol-input-date.entry.js":[98703,98703],"./kol-input-email.entry.js":[41372,41372],"./kol-input-file.entry.js":[74480,74480],"./kol-input-number.entry.js":[63632,63632],"./kol-input-password.entry.js":[44412,44412],"./kol-input-radio.entry.js":[2840,2840],"./kol-input-range.entry.js":[41600,41600],"./kol-input-text.entry.js":[6152,6152],"./kol-input.entry.js":[68472,68472],"./kol-kolibri.entry.js":[71472,71472],"./kol-link-button.entry.js":[33142,33142],"./kol-link-group.entry.js":[59536,59536],"./kol-link-wc.entry.js":[30648,30648],"./kol-link.entry.js":[89736,89736],"./kol-logo.entry.js":[20060,20060],"./kol-modal.entry.js":[56260,56260],"./kol-nav.entry.js":[48888,48888],"./kol-pagination.entry.js":[94336,94336],"./kol-popover-wc.entry.js":[45036,45488,45036],"./kol-progress.entry.js":[65400,65400],"./kol-quote.entry.js":[57212,57212],"./kol-select.entry.js":[40285,40285],"./kol-skip-nav.entry.js":[39624,39624],"./kol-span-wc_2.entry.js":[63736,45488,63736],"./kol-span.entry.js":[81924,81924],"./kol-spin.entry.js":[52304,52304],"./kol-split-button.entry.js":[58891,58891],"./kol-symbol.entry.js":[7024,84644],"./kol-table.entry.js":[87844,87844],"./kol-tabs.entry.js":[70720,70720],"./kol-textarea.entry.js":[85980,85980],"./kol-toast-container.entry.js":[92320,92320],"./kol-tree-item-wc.entry.js":[99992,99992],"./kol-tree-item.entry.js":[52176,52176],"./kol-tree-wc.entry.js":[99672,99672],"./kol-tree.entry.js":[6096,6096],"./kol-version.entry.js":[67396,67396]};function r(e){if(!o.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(o.e)).then((()=>o(r)))}r.keys=()=>Object.keys(n),r.id=29304,e.exports=r},40944:(e,t,o)=>{"use strict";o.d(t,{c:()=>u});o(96651);var n=o(38680),r=o.n(n),a=o(14504);const i={"0025eff2":[()=>o.e(51540).then(o.bind(o,84604)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/01-architecture.md",84604],"004949f6":[()=>Promise.all([o.e(71222),o.e(33840),o.e(3562)]).then(o.bind(o,81560)),"@site/versioned_docs/version-1.5/30-components/spin.mdx",81560],"00c0c186":[()=>o.e(52214).then(o.t.bind(o,68555,19)),"~docs/default/tag-en-docs-tags-span-239.json",68555],"01a85c17":[()=>Promise.all([o.e(12176),o.e(58412)]).then(o.bind(o,2200)),"@theme/BlogTagsListPage",2200],"01c14978":[()=>o.e(84704).then(o.bind(o,44052)),"@site/versioned_docs/version-1.7/30-components/icon-icofont.md",44052],"01d4e515":[()=>o.e(80324).then(o.t.bind(o,19832,19)),"~docs/default/tag-en-docs-1-6-tags-input-color-56a.json",19832],"0215e35f":[()=>o.e(92344).then(o.t.bind(o,88100,19)),"~docs/default/tag-en-docs-next-tags-beispiele-6b9.json",88100],"0249116f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(47896)]).then(o.bind(o,20384)),"@site/docs/30-components/pagination.mdx",20384],"0251e84d":[()=>o.e(72840).then(o.bind(o,95800)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/10-datenschutz.mdx",95800],"028504e2":[()=>o.e(34016).then(o.bind(o,62192)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/07-swizzling.md",62192],"02c1f6af":[()=>o.e(28528).then(o.t.bind(o,95816,19)),"~docs/default/tag-en-docs-1-5-tags-changelog-97f.json",95816],"02fff0a0":[()=>o.e(7868).then(o.t.bind(o,75184,19)),"~blog/default/en-blog-tags-styling-f7b-list.json",75184],"0415fb8f":[()=>o.e(24092).then(o.t.bind(o,13416,19)),"~docs/default/tag-en-docs-1-7-tags-legal-99d.json",13416],"04be79d5":[()=>o.e(58124).then(o.t.bind(o,88947,19)),"~docs/default/tag-en-docs-1-6-tags-link-button-268.json",88947],"0532d5d5":[()=>o.e(51272).then(o.t.bind(o,75680,19)),"~docs/default/tag-en-docs-1-5-tags-conzept-f9c.json",75680],"05a4c97b":[()=>o.e(2308).then(o.t.bind(o,83e3,19)),"~docs/default/tag-en-docs-tags-konzept-fcd.json",83e3],"06202719":[()=>o.e(85556).then(o.t.bind(o,12902,19)),"~docs/default/tag-en-docs-1-6-tags-span-a3d.json",12902],"06e4b4c2":[()=>o.e(36180).then(o.t.bind(o,58794,19)),"~docs/default/tag-en-docs-1-6-tags-version-c38.json",58794],"070bcc67":[()=>o.e(76968).then(o.t.bind(o,41291,19)),"~docs/default/tag-en-docs-1-5-tags-split-button-fef.json",41291],"07165a2e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(49412)]).then(o.bind(o,38888)),"@site/versioned_docs/version-1.7/30-components/spin.mdx",38888],"075de297":[()=>o.e(53696).then(o.t.bind(o,60504,19)),"~docs/default/tag-en-docs-1-7-tags-span-180.json",60504],"07b30d74":[()=>Promise.all([o.e(71222),o.e(33840),o.e(46520)]).then(o.bind(o,56600)),"@site/versioned_docs/version-2.0/30-components/card.mdx",56600],"07cf30bf":[()=>o.e(96208).then(o.t.bind(o,71048,19)),"~docs/default/tag-en-docs-1-7-tags-indented-text-3df.json",71048],"080dc59b":[()=>o.e(3032).then(o.t.bind(o,22512,19)),"~docs/default/tag-en-docs-tags-properties-311.json",22512],"081b3559":[()=>o.e(30616).then(o.t.bind(o,9752,19)),"~docs/default/tag-en-docs-tags-logo-6e1.json",9752],"087cdbee":[()=>o.e(41388).then(o.t.bind(o,11132,19)),"~docs/default/tag-en-docs-next-tags-logo-7ef.json",11132],"0894afc1":[()=>o.e(14120).then(o.t.bind(o,81904,19)),"~docs/default/tag-en-docs-1-5-tags-span-836.json",81904],"08fe08f7":[()=>o.e(54972).then(o.t.bind(o,61184,19)),"~docs/default/tag-en-docs-1-5-tags-progress-43f.json",61184],"090495ff":[()=>Promise.all([o.e(71222),o.e(33840),o.e(7238)]).then(o.bind(o,71020)),"@site/versioned_docs/version-1.7/30-components/split-button.mdx",71020],"091049f0":[()=>Promise.all([o.e(78384),o.e(38640)]).then(o.bind(o,65048)),"@site/versioned_docs/version-1.7/60-test-results.mdx",65048],"09965c0c":[()=>Promise.all([o.e(71222),o.e(33840),o.e(54288)]).then(o.bind(o,92848)),"@site/versioned_docs/version-1.5/30-components/image.mdx",92848],"0997a7a1":[()=>Promise.all([o.e(71222),o.e(33840),o.e(47372)]).then(o.bind(o,26644)),"@site/versioned_docs/version-2.0/30-components/badge.mdx",26644],"0a1af3e6":[()=>Promise.all([o.e(71222),o.e(33840),o.e(68244)]).then(o.bind(o,45648)),"@site/versioned_docs/version-2.0/30-components/input-email.mdx",45648],"0a64383c":[()=>o.e(80640).then(o.t.bind(o,11192,19)),"~docs/default/tag-en-docs-1-6-tags-modal-a5d.json",11192],"0affa934":[()=>o.e(15260).then(o.t.bind(o,35432,19)),"~docs/default/tag-en-docs-1-5-tags-breadcrumb-077.json",35432],"0ba2e64c":[()=>o.e(9704).then(o.t.bind(o,40074,19)),"~docs/default/tag-en-docs-1-7-tags-popover-315.json",40074],"0c0354d1":[()=>o.e(89268).then(o.t.bind(o,23902,19)),"~docs/default/tag-en-docs-1-5-tags-koli-bri-5a0.json",23902],"0c164a5f":[()=>o.e(2188).then(o.bind(o,73596)),"@site/versioned_docs/version-2.0/30-components/index.md",73596],"0c798e6a":[()=>o.e(16418).then(o.bind(o,14512)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-01-09.mdx?truncated=true",14512],"0ca5f059":[()=>o.e(88464).then(o.t.bind(o,50952,19)),"~docs/default/tag-en-docs-1-6-tags-manifest-b8e.json",50952],"0ca6f627":[()=>o.e(6388).then(o.bind(o,47336)),"@site/docs/30-components/tooltip.mdx",47336],"0ce44167":[()=>o.e(52204).then(o.bind(o,20796)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/10-get-started/7-playground.mdx",20796],"0d5290a9":[()=>o.e(25528).then(o.bind(o,48048)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/10-get-started/1-first-steps.mdx",48048],"0da4de7a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(2640)]).then(o.bind(o,30164)),"@site/versioned_docs/version-1.7/30-components/kolibri.mdx",30164],"0dcdbec3":[()=>o.e(80848).then(o.bind(o,80144)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/10-get-started/5-frameworks.mdx",80144],"0dfa1bee":[()=>o.e(71106).then(o.bind(o,11920)),"@site/versioned_docs/version-1.5/80-changelog.mdx",11920],"0e608f8f":[()=>o.e(49632).then(o.t.bind(o,4480,19)),"~blog/default/en-blog-tags-tutorial-855-list.json",4480],"0f2c6da2":[()=>o.e(90804).then(o.t.bind(o,19744,19)),"~docs/default/tag-en-docs-1-6-tags-security-565.json",19744],"0f3c86f7":[()=>o.e(90924).then(o.t.bind(o,3544,19)),"~docs/default/tag-en-docs-tags-tree-36e.json",3544],"0f464843":[()=>o.e(84936).then(o.bind(o,77332)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/10-get-started/5-frameworks.mdx",77332],"0f7d3fe1":[()=>o.e(32396).then(o.t.bind(o,77762,19)),"~blog/default/en-blog-tags-styling-f7b.json",77762],"0fea47c4":[()=>o.e(16812).then(o.bind(o,78400)),"@site/versioned_docs/version-1.6/30-components/icon-font-awesome.md",78400],"10b3ea3c":[()=>Promise.all([o.e(71222),o.e(33840),o.e(3352)]).then(o.bind(o,31900)),"@site/docs/30-components/details.mdx",31900],"10c16933":[()=>Promise.all([o.e(71222),o.e(33840),o.e(22436)]).then(o.bind(o,64056)),"@site/versioned_docs/version-2.0/30-components/spin.mdx",64056],"1152f60c":[()=>o.e(92988).then(o.bind(o,87868)),"@site/docs/30-components/input-radio-group.md",87868],"11d7b2c4":[()=>o.e(29360).then(o.t.bind(o,45392,19)),"~docs/default/tag-en-docs-1-6-tags-quote-327.json",45392],"1268472b":[()=>Promise.all([o.e(71222),o.e(33840),o.e(13804)]).then(o.bind(o,20988)),"@site/versioned_docs/version-1.6/30-components/link.mdx",20988],"1294fe18":[()=>Promise.all([o.e(71222),o.e(33840),o.e(17520)]).then(o.bind(o,43840)),"@site/versioned_docs/version-1.7/30-components/quote.mdx",43840],"12b4c3cc":[()=>o.e(45124).then(o.t.bind(o,28602,19)),"~blog/default/en-blog-page-3-5c4.json",28602],"1319d199":[()=>o.e(28960).then(o.t.bind(o,69228,19)),"~docs/default/tag-en-docs-1-5-tags-quality-db7.json",69228],"13cfa03a":[()=>o.e(3816).then(o.t.bind(o,29824,19)),"~docs/default/tag-en-docs-tags-lizence-b05.json",29824],"13ec6366":[()=>Promise.all([o.e(71222),o.e(33840),o.e(37792)]).then(o.bind(o,29224)),"@site/versioned_docs/version-1.5/30-components/button-group.mdx",29224],"147f827a":[()=>o.e(77116).then(o.bind(o,89608)),"@site/blog/2023-06-08.mdx",89608],"14b09ca0":[()=>o.e(51844).then(o.t.bind(o,75616,19)),"~docs/default/tag-en-docs-next-tags-spezifikation-a77.json",75616],"14fc7fcb":[()=>Promise.all([o.e(71222),o.e(33840),o.e(26928)]).then(o.bind(o,26904)),"@site/versioned_docs/version-1.7/30-components/input-date.mdx",26904],15120925:[()=>Promise.all([o.e(71222),o.e(33840),o.e(23080)]).then(o.bind(o,46740)),"@site/versioned_docs/version-1.5/30-components/input-number.mdx",46740],16938320:[()=>o.e(36672).then(o.t.bind(o,23952,19)),"~docs/default/tag-en-docs-1-5-tags-form-b37.json",23952],"16ebb634":[()=>Promise.all([o.e(71222),o.e(33840),o.e(41916)]).then(o.bind(o,21652)),"@site/docs/30-components/input-text.mdx",21652],"16ef5bf1":[()=>Promise.all([o.e(71222),o.e(33840),o.e(54692)]).then(o.bind(o,25396)),"@site/docs/30-components/tree.mdx",25396],"170cf2cf":[()=>o.e(33628).then(o.bind(o,35564)),"@site/versioned_docs/version-1.5/30-components/icon-icofont.md",35564],17120192:[()=>o.e(11368).then(o.t.bind(o,78320,19)),"~docs/default/tag-en-docs-1-6-tags-input-password-6f4.json",78320],"1777d2c6":[()=>o.e(90972).then(o.t.bind(o,62424,19)),"~docs/default/tag-en-docs-1-5-tags-historical-757.json",62424],"1781b9b5":[()=>o.e(93464).then(o.bind(o,89612)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-05-12.mdx?truncated=true",89612],17896441:[()=>Promise.all([o.e(12176),o.e(57742),o.e(29116),o.e(26752)]).then(o.bind(o,47747)),"@theme/DocItem",47747],"179a1df4":[()=>o.e(67616).then(o.t.bind(o,58312,19)),"~docs/default/tag-en-docs-1-5-tags-accordion-a08.json",58312],"185e2809":[()=>o.e(63988).then(o.t.bind(o,41296,19)),"~docs/default/tag-en-docs-1-5-tags-link-button-11f.json",41296],"18c9e965":[()=>o.e(70511).then(o.t.bind(o,71378,19)),"~docs/default/tag-en-docs-1-6-tags-properties-a03.json",71378],"18fb9db9":[()=>o.e(25872).then(o.t.bind(o,29472,19)),"~docs/default/tag-en-docs-next-tags-textarea-c25.json",29472],"18ff3d8d":[()=>o.e(98904).then(o.t.bind(o,13500,19)),"~docs/default/tag-en-docs-1-5-tags-properties-8cd.json",13500],"198ca5a2":[()=>o.e(12736).then(o.bind(o,48051)),"@site/versioned_docs/version-1.7/20-concepts/05-styling/40-scss.md",48051],"19bd6524":[()=>o.e(17954).then(o.t.bind(o,27346,19)),"~docs/default/tag-en-docs-1-7-tags-input-radio-1eb.json",27346],"1a9135d8":[()=>o.e(75816).then(o.t.bind(o,29048,19)),"~docs/default/tag-en-docs-1-5-tags-input-range-181.json",29048],"1aa99af3":[()=>Promise.all([o.e(71222),o.e(33840),o.e(21824)]).then(o.bind(o,83292)),"@site/versioned_docs/version-1.7/30-components/button.mdx",83292],"1ae06503":[()=>o.e(14172).then(o.bind(o,73032)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/05-styling/35-designer.mdx",73032],"1af59061":[()=>o.e(42964).then(o.t.bind(o,90051,19)),"~docs/default/tag-en-docs-next-tags-lizence-21e.json",90051],"1b67022d":[()=>Promise.all([o.e(71222),o.e(33840),o.e(17032)]).then(o.bind(o,93968)),"@site/versioned_docs/version-2.0/30-components/button-link.mdx",93968],"1bbc4ce0":[()=>Promise.all([o.e(71222),o.e(33840),o.e(43932)]).then(o.bind(o,36721)),"@site/docs/30-components/link-group.mdx",36721],"1c304934":[()=>Promise.all([o.e(71222),o.e(33840),o.e(68376)]).then(o.bind(o,67392)),"@site/docs/30-components/input-color.mdx",67392],"1caf9c1e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(73856)]).then(o.bind(o,16704)),"@site/versioned_docs/version-1.7/30-components/tabs.mdx",16704],"1cdf6ca6":[()=>o.e(28568).then(o.bind(o,71252)),"@site/blog/2023-07-26.mdx",71252],"1cf23c66":[()=>o.e(67820).then(o.t.bind(o,32808,19)),"~docs/default/tag-en-docs-1-5-tags-version-896.json",32808],"1d9d2a2f":[()=>o.e(9968).then(o.bind(o,73276)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/05-styling/35-designer.mdx",73276],"1df93b7f":[()=>o.e(28552).then(o.bind(o,54384)),"@site/src/pages/index.tsx",54384],"1e1c9063":[()=>o.e(720).then(o.t.bind(o,55136,19)),"~docs/default/tag-en-docs-1-6-tags-tooltip-b0f.json",55136],"1ec5c91e":[()=>o.e(78006).then(o.t.bind(o,96822,19)),"~docs/default/tag-en-docs-tags-input-date-d09.json",96822],"1efe87ca":[()=>o.e(7160).then(o.t.bind(o,63888,19)),"~docs/default/tag-en-docs-1-7-tags-beschreibung-1be.json",63888],"1f2e0b1c":[()=>o.e(49276).then(o.t.bind(o,60496,19)),"~docs/default/tag-en-docs-1-6-tags-backlog-ee1.json",60496],"1f2ebfc1":[()=>Promise.all([o.e(71222),o.e(33840),o.e(37388)]).then(o.bind(o,67246)),"@site/versioned_docs/version-1.7/30-components/input-color.mdx",67246],"1f8ca3f9":[()=>o.e(27200).then(o.t.bind(o,56778,19)),"~docs/default/tag-en-docs-tags-getting-started-a66.json",56778],"1fb6fda5":[()=>o.e(18448).then(o.t.bind(o,82440,19)),"~docs/default/tag-en-docs-tags-koli-bri-9ee.json",82440],"2019ae56":[()=>o.e(93976).then(o.t.bind(o,65852,19)),"~docs/default/tag-en-docs-1-5-tags-legal-a86.json",65852],"202158d0":[()=>o.e(3960).then(o.bind(o,74344)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/10-get-started/1-first-steps.mdx",74344],"2046ba61":[()=>o.e(43884).then(o.t.bind(o,54510,19)),"~docs/default/tag-en-docs-1-5-tags-architekture-59e.json",54510],"216f4dbb":[()=>o.e(61032).then(o.t.bind(o,38880,19)),"~docs/default/tag-en-docs-1-6-tags-historical-4ca.json",38880],"2173685b":[()=>o.e(48114).then(o.bind(o,63952)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/50-migration.mdx",63952],"224d6d4c":[()=>o.e(56516).then(o.t.bind(o,84464,19)),"~docs/default/tag-en-docs-next-tags-input-range-a0a.json",84464],"22c31a09":[()=>o.e(43948).then(o.t.bind(o,93332,19)),"~docs/default/tag-en-docs-1-6-tags-skip-nav-cde.json",93332],"2339bd90":[()=>Promise.all([o.e(71222),o.e(33840),o.e(68068)]).then(o.bind(o,51296)),"@site/versioned_docs/version-1.6/30-components/input-radio.mdx",51296],23530861:[()=>o.e(76264).then(o.t.bind(o,15096,19)),"~docs/default/tag-en-docs-next-tags-input-date-fcd.json",15096],"23b07d86":[()=>Promise.all([o.e(71222),o.e(33840),o.e(71010)]).then(o.bind(o,26244)),"@site/versioned_docs/version-2.0/30-components/input-number.mdx",26244],"23b4b42f":[()=>o.e(36288).then(o.t.bind(o,23392,19)),"~blog/default/en-blog-tags-release-e75.json",23392],"23ceaea3":[()=>o.e(82912).then(o.t.bind(o,29846,19)),"~docs/default/tag-en-docs-next-tags-accessibility-2c4.json",29846],"24140e43":[()=>o.e(5252).then(o.t.bind(o,10818,19)),"~docs/default/tag-en-docs-next-tags-link-80c.json",10818],"24211a2a":[()=>o.e(65672).then(o.t.bind(o,11400,19)),"~docs/default/tag-en-docs-tags-input-email-5fe.json",11400],"246c7b69":[()=>Promise.all([o.e(71222),o.e(33840),o.e(33832)]).then(o.bind(o,82320)),"@site/versioned_docs/version-2.0/30-components/link.mdx",82320],"2478e3ec":[()=>o.e(48108).then(o.bind(o,93060)),"@site/blog/2023-07-26.mdx?truncated=true",93060],"2523bc07":[()=>o.e(76292).then(o.t.bind(o,23988,19)),"~docs/default/tag-en-docs-1-7-tags-architekture-c7d.json",23988],"25333c9f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(7276)]).then(o.bind(o,19616)),"@site/versioned_docs/version-1.5/30-components/input-radio.mdx",19616],"258ad362":[()=>o.e(14188).then(o.t.bind(o,6744,19)),"~docs/default/tag-en-docs-1-7-tags-version-88b.json",6744],"25aa40f9":[()=>o.e(22753).then(o.t.bind(o,55936,19)),"~docs/default/tag-en-docs-1-5-tags-dialog-75e.json",55936],"25d245e0":[()=>o.e(63136).then(o.bind(o,59612)),"@site/versioned_docs/version-1.7/40-project/04-roadmap.mdx",59612],"26167ede":[()=>o.e(70248).then(o.t.bind(o,21680,19)),"~docs/default/tag-en-docs-tags-toast-a99.json",21680],"2675bff7":[()=>o.e(91952).then(o.t.bind(o,96816,19)),"~docs/default/tag-en-docs-next-tags-link-button-237.json",96816],"2684bf00":[()=>o.e(99128).then(o.t.bind(o,70316,19)),"~docs/default/tag-en-docs-next-tags-quote-e74.json",70316],"268961c0":[()=>o.e(66508).then(o.t.bind(o,9672,19)),"~docs/default/tag-en-docs-1-5-tags-accessibility-507.json",9672],"2689cf5e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(71912)]).then(o.bind(o,72496)),"@site/versioned_docs/version-1.5/30-components/button.mdx",72496],"26b8b9cc":[()=>o.e(20600).then(o.t.bind(o,63496,19)),"~docs/default/tag-en-docs-tags-progress-558.json",63496],"27ad964c":[()=>o.e(70608).then(o.t.bind(o,97512,19)),"~docs/default/tag-en-docs-1-6-tags-button-562.json",97512],"283d6ef4":[()=>Promise.all([o.e(71222),o.e(33840),o.e(54230)]).then(o.bind(o,54520)),"@site/versioned_docs/version-2.0/30-components/version.mdx",54520],"28470eb0":[()=>o.e(41418).then(o.t.bind(o,59920,19)),"~docs/default/tag-en-docs-1-6-tags-architektur-a8f.json",59920],"286cc130":[()=>o.e(62188).then(o.bind(o,99692)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/40-project/02-license.mdx",99692],"287538a9":[()=>Promise.all([o.e(71222),o.e(33840),o.e(63584)]).then(o.bind(o,34024)),"@site/versioned_docs/version-1.7/30-components/input-email.mdx",34024],"287ba738":[()=>o.e(54464).then(o.t.bind(o,70288,19)),"~docs/default/tag-en-docs-next-tags-privacy-64a.json",70288],"28a7c6aa":[()=>o.e(16792).then(o.t.bind(o,60472,19)),"~docs/default/tag-en-docs-1-6-tags-badge-63a.json",60472],29230067:[()=>o.e(81284).then(o.t.bind(o,55450,19)),"~docs/default/tag-en-docs-1-5-tags-input-radio-2ad.json",55450],"294955c2":[()=>o.e(98754).then(o.t.bind(o,85936,19)),"~docs/default/tag-en-docs-tags-arc-42-29b.json",85936],"29814e99":[()=>Promise.all([o.e(71222),o.e(33840),o.e(98208)]).then(o.bind(o,90280)),"@site/docs/30-components/form.mdx",90280],"29b18893":[()=>Promise.all([o.e(71222),o.e(33840),o.e(71904)]).then(o.bind(o,69428)),"@site/versioned_docs/version-1.6/30-components/modal.mdx",69428],"29ed3ef3":[()=>Promise.all([o.e(71222),o.e(33840),o.e(91388)]).then(o.bind(o,36368)),"@site/versioned_docs/version-1.5/30-components/popover.mdx",36368],"29f82112":[()=>o.e(22760).then(o.t.bind(o,30114,19)),"~docs/default/tag-en-docs-next-tags-form-38f.json",30114],"2a932479":[()=>o.e(54172).then(o.t.bind(o,834,19)),"~docs/default/tag-en-docs-1-6-tags-abbr-096.json",834],"2b035ef3":[()=>Promise.all([o.e(71222),o.e(33840),o.e(47436)]).then(o.bind(o,16520)),"@site/docs/30-components/textarea.mdx",16520],"2b29bd42":[()=>o.e(72066).then(o.t.bind(o,82488,19)),"~docs/default/tag-en-docs-1-5-tags-link-group-417.json",82488],"2b9e7163":[()=>Promise.all([o.e(71222),o.e(33840),o.e(21276)]).then(o.bind(o,44632)),"@site/versioned_docs/version-2.0/30-components/form.mdx",44632],"2bf5a38b":[()=>o.e(2826).then(o.t.bind(o,27576,19)),"~docs/default/tag-en-docs-tags-breadcrumb-6ba.json",27576],"2c66964a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(44432)]).then(o.bind(o,57260)),"@site/versioned_docs/version-2.0/30-components/modal.mdx",57260],"2ca89498":[()=>o.e(57035).then(o.bind(o,30848)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/01-manifest.mdx",30848],"2d524777":[()=>o.e(59326).then(o.t.bind(o,23048,19)),"~docs/default/tag-en-docs-tags-characteristics-d72.json",23048],"2da1e482":[()=>o.e(18640).then(o.t.bind(o,98360,19)),"~docs/default/tag-en-docs-1-6-tags-architecture-087.json",98360],"2de954bb":[()=>o.e(16060).then(o.t.bind(o,88664,19)),"~docs/default/tag-en-docs-tags-faq-d29.json",88664],"2dff8839":[()=>Promise.all([o.e(71222),o.e(33840),o.e(75900)]).then(o.bind(o,96552)),"@site/versioned_docs/version-1.7/30-components/link-group.mdx",96552],"2e293e60":[()=>Promise.all([o.e(71222),o.e(33840),o.e(56512)]).then(o.bind(o,35360)),"@site/versioned_docs/version-1.6/30-components/button-link.mdx",35360],"2e490b2b":[()=>o.e(23192).then(o.t.bind(o,53570,19)),"~docs/default/tag-en-docs-1-6-tags-changelog-499.json",53570],"2e64502a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(62196)]).then(o.bind(o,42552)),"@site/versioned_docs/version-1.7/30-components/input-checkbox.mdx",42552],"2e740807":[()=>o.e(57320).then(o.t.bind(o,61088,19)),"~docs/default/tag-en-docs-next-tags-leagal-0e5.json",61088],"2ec74fd3":[()=>o.e(48284).then(o.t.bind(o,31608,19)),"~docs/default/tag-en-docs-tags-pagination-5f4.json",31608],"2f532705":[()=>o.e(68664).then(o.t.bind(o,82560,19)),"~docs/default/tag-en-docs-1-6-tags-table-951.json",82560],"2f56a40a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(56544)]).then(o.bind(o,5052)),"@site/versioned_docs/version-1.5/30-components/input-file.mdx",5052],"2f7f20d8":[()=>o.e(67416).then(o.bind(o,53608)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/03-faq.mdx",53608],"2fa6a587":[()=>o.e(63100).then(o.t.bind(o,85352,19)),"~docs/default/tag-en-docs-1-7-tags-textarea-706.json",85352],"2fcb4ff7":[()=>o.e(51532).then(o.t.bind(o,48860,19)),"~docs/default/tag-en-docs-1-5-tags-input-checkbox-766.json",48860],"30d72476":[()=>Promise.all([o.e(71222),o.e(33840),o.e(15224)]).then(o.bind(o,61244)),"@site/versioned_docs/version-2.0/30-components/details.mdx",61244],"31afd0ee":[()=>o.e(96728).then(o.t.bind(o,39880,19)),"~docs/default/tag-en-docs-1-7-tags-button-group-368.json",39880],"31ca26e8":[()=>o.e(13136).then(o.bind(o,71868)),"@site/blog/2023-06-08.mdx?truncated=true",71868],"32356dd4":[()=>o.e(2644).then(o.bind(o,25452)),"@site/versioned_docs/version-1.6/40-project/04-roadmap.mdx",25452],"3253b1e2":[()=>o.e(29233).then(o.bind(o,88312)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-01-09.mdx",88312],"3255f0f8":[()=>o.e(50146).then(o.t.bind(o,45714,19)),"~blog/default/en-blog-tags-seo-993.json",45714],"32590f81":[()=>o.e(51340).then(o.t.bind(o,59630,19)),"~docs/default/tag-en-docs-tags-concept-9d8.json",59630],"32b31217":[()=>o.e(59316).then(o.t.bind(o,69598,19)),"~docs/default/tag-en-docs-tags-input-file-5fb.json",69598],"32c1ef0c":[()=>o.e(88684).then(o.bind(o,42948)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/08-expert-slot.mdx",42948],"32d850ef":[()=>o.e(81440).then(o.t.bind(o,31336,19)),"~docs/default/tag-en-docs-1-7-tags-toast-5b6.json",31336],33507401:[()=>Promise.all([o.e(71222),o.e(33840),o.e(48548)]).then(o.bind(o,28008)),"@site/versioned_docs/version-1.7/30-components/pagination.mdx",28008],"33528c98":[()=>o.e(47584).then(o.t.bind(o,43616,19)),"~docs/default/tag-en-docs-1-6-tags-getting-started-bf8.json",43616],"3372a2dc":[()=>Promise.all([o.e(71222),o.e(33840),o.e(52336)]).then(o.bind(o,12840)),"@site/versioned_docs/version-2.0/30-components/select.mdx",12840],"3424cd38":[()=>o.e(9456).then(o.bind(o,72152)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/10-datenschutz.mdx",72152],"34365eef":[()=>o.e(64592).then(o.t.bind(o,32260,19)),"~docs/default/tag-en-docs-1-6-tags-input-range-5fb.json",32260],34417490:[()=>o.e(20864).then(o.t.bind(o,99068,19)),"~docs/default/tag-en-docs-tags-split-button-7cf.json",99068],"3458cb79":[()=>o.e(83489).then(o.bind(o,21180)),"@site/versioned_docs/version-1.6/30-components/input-radio-group.md",21180],"346b5f03":[()=>o.e(86536).then(o.t.bind(o,32328,19)),"~docs/default/tag-en-docs-tags-quote-530.json",32328],"349cb8db":[()=>o.e(4200).then(o.t.bind(o,64530,19)),"~docs/default/tag-en-docs-tags-input-range-565.json",64530],"34aebb83":[()=>Promise.all([o.e(71222),o.e(33840),o.e(61468)]).then(o.bind(o,83354)),"@site/versioned_docs/version-1.6/30-components/card.mdx",83354],"34d10f4d":[()=>o.e(49532).then(o.bind(o,48468)),"@site/i18n/en/docusaurus-plugin-content-docs/current/99-impressum.mdx",48468],"35402f6c":[()=>o.e(88872).then(o.t.bind(o,83114,19)),"~docs/default/tag-en-docs-1-5-tags-demo-744.json",83114],"359cae03":[()=>o.e(49504).then(o.t.bind(o,53042,19)),"~docs/default/tag-en-docs-next-tags-input-password-ecc.json",53042],"35fa899c":[()=>o.e(66024).then(o.t.bind(o,73116,19)),"~blog/default/en-blog-tags-seo-993-list.json",73116],"362c0ba4":[()=>Promise.all([o.e(71222),o.e(33840),o.e(26768)]).then(o.bind(o,18960)),"@site/versioned_docs/version-1.5/30-components/breadcrumb.mdx",18960],"36427f25":[()=>o.e(28424).then(o.t.bind(o,73440,19)),"~docs/default/tag-en-docs-1-6-tags-tabs-fdd.json",73440],"364e9110":[()=>Promise.all([o.e(71222),o.e(33840),o.e(73508)]).then(o.bind(o,93512)),"@site/versioned_docs/version-1.5/30-components/details.mdx",93512],"3683dcfc":[()=>o.e(72400).then(o.t.bind(o,2080,19)),"/Users/moppitz/Workspace/kolibri/public-ui.github.io/dev/.docusaurus/docusaurus-plugin-content-docs/default/plugin-route-context-module-100.json",2080],"36869f56":[()=>Promise.all([o.e(71222),o.e(33840),o.e(17958)]).then(o.bind(o,76556)),"@site/versioned_docs/version-1.6/30-components/input-file.mdx",76556],"3720c009":[()=>Promise.all([o.e(12176),o.e(4492)]).then(o.bind(o,480)),"@theme/DocTagsListPage",480],"3725428e":[()=>o.e(52256).then(o.bind(o,93664)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-06-28.mdx?truncated=true",93664],"37d00613":[()=>o.e(98672).then(o.bind(o,44164)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/05-styling/35-designer.mdx",44164],"382401e7":[()=>o.e(15588).then(o.t.bind(o,45704,19)),"~docs/default/tag-en-docs-tags-image-9b1.json",45704],38561046:[()=>o.e(86640).then(o.t.bind(o,6792,19)),"/Users/moppitz/Workspace/kolibri/public-ui.github.io/dev/.docusaurus/docusaurus-plugin-content-blog/default/plugin-route-context-module-100.json",6792],"3874c734":[()=>o.e(93584).then(o.t.bind(o,49384,19)),"~docs/default/tag-en-docs-1-7-tags-changelog-182.json",49384],"38847a02":[()=>Promise.all([o.e(71222),o.e(33840),o.e(17496)]).then(o.bind(o,86900)),"@site/versioned_docs/version-2.0/30-components/input-checkbox.mdx",86900],"3895a91e":[()=>o.e(17812).then(o.bind(o,25576)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/08-expert-slot.mdx",25576],"389d6a59":[()=>Promise.all([o.e(71222),o.e(33840),o.e(23432)]).then(o.bind(o,17596)),"@site/versioned_docs/version-2.0/30-components/textarea.mdx",17596],"393aca11":[()=>Promise.all([o.e(57742),o.e(94092)]).then(o.bind(o,24972)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/05-styling/34-theming.mdx",24972],"395a14dc":[()=>o.e(31740).then(o.t.bind(o,63914,19)),"~docs/default/tag-en-docs-1-7-tags-form-45b.json",63914],"396e436f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(72)]).then(o.bind(o,31956)),"@site/versioned_docs/version-1.5/30-components/logo.mdx",31956],"39a60de4":[()=>o.e(97140).then(o.t.bind(o,78592,19)),"~docs/default/tag-en-docs-next-tags-details-1d8.json",78592],"39d85cf7":[()=>o.e(33828).then(o.t.bind(o,76440,19)),"~docs/default/tag-en-docs-1-7-tags-skip-nav-cbe.json",76440],"3a4ab9dd":[()=>o.e(15544).then(o.t.bind(o,72512,19)),"~docs/default/tag-en-docs-next-tags-pagination-073.json",72512],"3ac11b1e":[()=>o.e(43833).then(o.t.bind(o,3904,19)),"~blog/default/en-blog-tags-design-system-d78.json",3904],"3adf0fa0":[()=>o.e(1608).then(o.t.bind(o,79832,19)),"~docs/default/tag-en-docs-next-tags-select-b08.json",79832],"3b15118e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(85032)]).then(o.bind(o,67644)),"@site/versioned_docs/version-1.5/30-components/input-text.mdx",67644],"3b16a3df":[()=>o.e(51300).then(o.t.bind(o,46160,19)),"~docs/default/tag-en-docs-tags-architekture-8ea.json",46160],"3b402154":[()=>Promise.all([o.e(71222),o.e(33840),o.e(31908)]).then(o.bind(o,24939)),"@site/docs/30-components/nav.mdx",24939],"3bc9b40d":[()=>Promise.all([o.e(71222),o.e(33840),o.e(7504)]).then(o.bind(o,99216)),"@site/versioned_docs/version-1.6/30-components/input-checkbox.mdx",99216],"3be1d9f7":[()=>o.e(42780).then(o.t.bind(o,5784,19)),"~docs/default/tag-en-docs-1-5-tags-input-text-72a.json",5784],"3c4f4fba":[()=>o.e(15548).then(o.t.bind(o,18880,19)),"~docs/default/tag-en-docs-next-tags-architekture-444.json",18880],"3cbfe72d":[()=>o.e(63198).then(o.t.bind(o,26168,19)),"~docs/default/tag-en-docs-tags-license-6f6.json",26168],"3d11c51f":[()=>o.e(77952).then(o.t.bind(o,56376,19)),"~docs/default/tag-en-docs-next-tags-input-email-dcc.json",56376],"3d203cd2":[()=>o.e(49024).then(o.bind(o,9360)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/01-architecture.md",9360],"3d243a54":[()=>o.e(31428).then(o.t.bind(o,54586,19)),"~docs/default/tags-list-1-7-prop-4f7.json",54586],"3d3620fd":[()=>Promise.all([o.e(71222),o.e(33840),o.e(83960)]).then(o.bind(o,98832)),"@site/versioned_docs/version-1.7/30-components/form.mdx",98832],"3da69911":[()=>o.e(80832).then(o.t.bind(o,41224,19)),"~docs/default/tag-en-docs-1-5-tags-input-date-c48.json",41224],"3dd3a180":[()=>o.e(9316).then(o.bind(o,62012)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/00-welcome.mdx",62012],"3dec8bbc":[()=>Promise.all([o.e(71222),o.e(33840),o.e(91316)]).then(o.bind(o,39220)),"@site/docs/30-components/quote.mdx",39220],"3e48d17a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(6860)]).then(o.bind(o,38788)),"@site/versioned_docs/version-1.6/30-components/progress.mdx",38788],"3e4d4874":[()=>o.e(79308).then(o.t.bind(o,43058,19)),"~docs/default/tag-en-docs-next-tags-button-group-a8a.json",43058],"3ea099e8":[()=>o.e(6172).then(o.bind(o,98364)),"@site/i18n/en/docusaurus-plugin-content-docs/current/10-get-started/7-playground.mdx",98364],"3ea5a96f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(50344)]).then(o.bind(o,8712)),"@site/docs/30-components/dialog.mdx",8712],"3eb4b418":[()=>o.e(81732).then(o.t.bind(o,34432,19)),"~docs/default/tag-en-docs-tags-button-link-71c.json",34432],"3ecae65e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(72696)]).then(o.bind(o,74268)),"@site/versioned_docs/version-1.6/30-components/button-group.mdx",74268],"3ee05b5b":[()=>Promise.all([o.e(71222),o.e(33840),o.e(94568)]).then(o.bind(o,85384)),"@site/versioned_docs/version-2.0/30-components/heading.mdx",85384],"3f18aebd":[()=>o.e(65974).then(o.bind(o,66016)),"@site/blog/2023-02-23.mdx?truncated=true",66016],"3f46b34d":[()=>Promise.all([o.e(71222),o.e(33840),o.e(81516)]).then(o.bind(o,88400)),"@site/versioned_docs/version-1.5/30-components/badge.mdx",88400],"4006d364":[()=>Promise.all([o.e(78384),o.e(21632)]).then(o.bind(o,34308)),"@site/docs/60-test-results.mdx",34308],"409d2216":[()=>Promise.all([o.e(71222),o.e(33840),o.e(59480)]).then(o.bind(o,3848)),"@site/versioned_docs/version-1.5/30-components/table.mdx",3848],"409ff43d":[()=>Promise.all([o.e(71222),o.e(33840),o.e(63460)]).then(o.bind(o,79512)),"@site/versioned_docs/version-1.6/30-components/pagination.mdx",79512],"40af3061":[()=>Promise.all([o.e(71222),o.e(33840),o.e(51352)]).then(o.bind(o,83100)),"@site/versioned_docs/version-1.6/30-components/kolibri.mdx",83100],"4129e2a8":[()=>o.e(60420).then(o.t.bind(o,75430,19)),"~docs/default/tag-en-docs-1-7-tags-tooltip-a97.json",75430],"41cce176":[()=>o.e(86432).then(o.t.bind(o,83832,19)),"~docs/default/tag-en-docs-1-5-tags-bik-bitv-377.json",83832],"41e5845e":[()=>o.e(38608).then(o.t.bind(o,20259,19)),"~docs/default/tag-en-docs-1-7-tags-logo-b3d.json",20259],42125112:[()=>Promise.all([o.e(71222),o.e(33840),o.e(95522)]).then(o.bind(o,42940)),"@site/versioned_docs/version-1.6/30-components/button.mdx",42940],"4219d4ce":[()=>o.e(63640).then(o.t.bind(o,35800,19)),"~docs/default/tag-en-docs-next-tags-architecture-d8d.json",35800],"42202c67":[()=>o.e(10224).then(o.t.bind(o,21068,19)),"~docs/default/tag-en-docs-next-tags-spin-fc4.json",21068],"4229b7d3":[()=>o.e(50520).then(o.bind(o,428)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/07-swizzling.md",428],"4261678a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(69432)]).then(o.bind(o,76472)),"@site/docs/30-components/progress.mdx",76472],42849559:[()=>o.e(48656).then(o.bind(o,53996)),"@site/versioned_docs/version-1.5/20-concepts/05-styling/40-scss.md",53996],"42b8e8e6":[()=>Promise.all([o.e(71222),o.e(33840),o.e(8880)]).then(o.bind(o,25512)),"@site/versioned_docs/version-1.5/30-components/progress.mdx",25512],"4358bba1":[()=>Promise.all([o.e(71222),o.e(33840),o.e(84092)]).then(o.bind(o,94736)),"@site/versioned_docs/version-2.0/30-components/input-color.mdx",94736],"4382976c":[()=>o.e(20108).then(o.bind(o,2484)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/10-get-started/7-playground.mdx",2484],"447fdd9d":[()=>Promise.all([o.e(71222),o.e(33840),o.e(97008)]).then(o.bind(o,49480)),"@site/docs/30-components/alert.mdx",49480],"44950b1d":[()=>o.e(68044).then(o.t.bind(o,22256,19)),"~docs/default/tag-en-docs-1-5-tags-manifest-27c.json",22256],"44a5ef72":[()=>o.e(12508).then(o.t.bind(o,24656,19)),"~docs/default/tag-en-docs-1-7-tags-beispiele-1ed.json",24656],"44ba1e39":[()=>Promise.all([o.e(71222),o.e(33840),o.e(62600)]).then(o.bind(o,38424)),"@site/versioned_docs/version-1.6/30-components/avatar.mdx",38424],"44df9a99":[()=>o.e(50256).then(o.t.bind(o,24912,19)),"~docs/default/tag-en-docs-1-7-tags-link-group-b10.json",24912],"4503b520":[()=>Promise.all([o.e(71222),o.e(77960)]).then(o.bind(o,17356)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/02-properties.mdx",17356],"4506c44d":[()=>o.e(2896).then(o.t.bind(o,10432,19)),"~docs/default/tag-en-docs-tags-card-efc.json",10432],"450cf6a6":[()=>o.e(79228).then(o.t.bind(o,18872,19)),"~docs/default/tag-en-docs-1-5-tags-alert-63b.json",18872],"4642df56":[()=>o.e(95256).then(o.t.bind(o,88e3,19)),"~docs/default/tag-en-docs-1-7-tags-properties-168.json",88e3],"4643a875":[()=>o.e(25468).then(o.t.bind(o,27912,19)),"~blog/default/en-blog-tags-neuerungen-b24-list.json",27912],"464a882e":[()=>o.e(31092).then(o.bind(o,77744)),"@site/blog/2023-08-29.mdx",77744],"470431c5":[()=>o.e(14568).then(o.t.bind(o,91640,19)),"~docs/default/tag-en-docs-next-tags-progress-3b3.json",91640],"470ca154":[()=>Promise.all([o.e(71222),o.e(33840),o.e(32896)]).then(o.bind(o,11876)),"@site/versioned_docs/version-2.0/30-components/input-date.mdx",11876],"472951f1":[()=>o.e(5552).then(o.t.bind(o,86844,19)),"~docs/default/tag-en-docs-tags-icon-655.json",86844],"473ebe1b":[()=>o.e(2848).then(o.bind(o,97212)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/90-health-state.mdx",97212],"474413b5":[()=>o.e(19980).then(o.t.bind(o,65856,19)),"~docs/default/tag-en-docs-1-5-tags-details-0b4.json",65856],"4774611c":[()=>o.e(10296).then(o.bind(o,13988)),"@site/docs/20-concepts/05-styling/40-scss.md",13988],"47d89ab6":[()=>Promise.all([o.e(71222),o.e(33840),o.e(91196)]).then(o.bind(o,92760)),"@site/docs/30-components/logo.mdx",92760],"47e2dc3a":[()=>o.e(64048).then(o.t.bind(o,63808,19)),"~docs/default/tag-en-docs-tags-leagal-f8d.json",63808],"4803145d":[()=>o.e(22412).then(o.t.bind(o,99816,19)),"~docs/default/tag-en-docs-1-7-tags-badge-fb6.json",99816],"482f6c17":[()=>o.e(23936).then(o.t.bind(o,97920,19)),"~docs/default/tag-en-docs-1-7-tags-image-700.json",97920],"48627c7f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(92064)]).then(o.bind(o,82164)),"@site/versioned_docs/version-1.6/30-components/popover.mdx",82164],"48a44d64":[()=>o.e(44092).then(o.t.bind(o,68552,19)),"~docs/default/tag-en-docs-next-tags-input-text-f40.json",68552],"48ffee5c":[()=>o.e(14152).then(o.t.bind(o,78042,19)),"~docs/default/tag-en-docs-1-5-tags-badge-999.json",78042],"4941e408":[()=>o.e(47592).then(o.t.bind(o,91536,19)),"~blog/default/en-blog-tags-corporate-design-75f-list.json",91536],"495126f6":[()=>Promise.all([o.e(71222),o.e(33840),o.e(6824)]).then(o.bind(o,48872)),"@site/docs/30-components/version.mdx",48872],"49c78ad8":[()=>Promise.all([o.e(71222),o.e(33840),o.e(80344)]).then(o.bind(o,73136)),"@site/versioned_docs/version-1.6/30-components/details.mdx",73136],"4a2b94fb":[()=>o.e(31250).then(o.t.bind(o,81152,19)),"~docs/default/tag-en-docs-tags-input-color-649.json",81152],"4a447010":[()=>o.e(75348).then(o.bind(o,99380)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/00-welcome.mdx",99380],"4a785f76":[()=>o.e(83544).then(o.t.bind(o,634,19)),"~blog/default/en-blog-tags-icon-e25-list.json",634],"4a8ef549":[()=>o.e(69345).then(o.t.bind(o,97846,19)),"~docs/default/tag-en-docs-1-7-tags-backlog-3ee.json",97846],"4b03dd35":[()=>o.e(90232).then(o.t.bind(o,46068,19)),"~docs/default/tag-en-docs-1-7-tags-split-button-bc9.json",46068],"4b725b29":[()=>Promise.all([o.e(71222),o.e(33840),o.e(6788)]).then(o.bind(o,54612)),"@site/versioned_docs/version-1.7/30-components/alert.mdx",54612],"4b936704":[()=>o.e(92656).then(o.t.bind(o,82e3,19)),"~blog/default/en-blog-tags-corporate-design-75f.json",82e3],"4bf1eb44":[()=>o.e(37340).then(o.t.bind(o,46168,19)),"~docs/default/tag-en-docs-1-5-tags-roadmap-603.json",46168],"4bfaefa0":[()=>o.e(21208).then(o.bind(o,82428)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/15-sicherheit.mdx",82428],"4d29eea7":[()=>Promise.all([o.e(71222),o.e(33840),o.e(55382)]).then(o.bind(o,21040)),"@site/versioned_docs/version-1.6/30-components/input-number.mdx",21040],"4d90b023":[()=>o.e(12612).then(o.bind(o,27244)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/03-test.md",27244],"4de7dac3":[()=>o.e(4864).then(o.bind(o,30144)),"@site/docs/30-components/toaster.mdx",30144],"4df46e30":[()=>Promise.all([o.e(71222),o.e(33840),o.e(1068)]).then(o.bind(o,19768)),"@site/versioned_docs/version-1.7/30-components/accordion.mdx",19768],"4df831f1":[()=>o.e(26808).then(o.t.bind(o,79648,19)),"~docs/default/tag-en-docs-1-7-tags-avatar-d22.json",79648],"4e309ced":[()=>Promise.all([o.e(71222),o.e(33840),o.e(80208)]).then(o.bind(o,21632)),"@site/versioned_docs/version-2.0/30-components/input-password.mdx",21632],"4e540a1e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(57120)]).then(o.bind(o,73080)),"@site/versioned_docs/version-2.0/30-components/progress.mdx",73080],"4e714381":[()=>o.e(89624).then(o.t.bind(o,13624,19)),"~docs/default/tag-en-docs-next-tags-tree-44d.json",13624],"4ec81560":[()=>o.e(48288).then(o.bind(o,52144)),"@site/versioned_docs/version-1.7/30-components/toaster.mdx",52144],"4ef13e55":[()=>Promise.all([o.e(71222),o.e(33840),o.e(82076)]).then(o.bind(o,69432)),"@site/versioned_docs/version-1.7/30-components/nav.mdx",69432],"4f04638c":[()=>Promise.all([o.e(71222),o.e(33840),o.e(86584)]).then(o.bind(o,23528)),"@site/versioned_docs/version-1.6/30-components/badge.mdx",23528],"4f5be5d2":[()=>o.e(492).then(o.t.bind(o,42236,19)),"~docs/default/tag-en-docs-1-5-tags-spin-e7f.json",42236],"500b5f7e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(98360)]).then(o.bind(o,32620)),"@site/versioned_docs/version-1.6/30-components/skip-nav.mdx",32620],"501399cb":[()=>Promise.all([o.e(71222),o.e(33840),o.e(70832)]).then(o.bind(o,80352)),"@site/versioned_docs/version-1.6/30-components/heading.mdx",80352],"5096a428":[()=>Promise.all([o.e(71222),o.e(33840),o.e(21752)]).then(o.bind(o,33416)),"@site/versioned_docs/version-1.7/30-components/popover.mdx",33416],"50c1173a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(27365)]).then(o.bind(o,57556)),"@site/docs/30-components/kolibri.mdx",57556],"50de3ba4":[()=>o.e(52692).then(o.bind(o,57208)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/90-health-state.mdx",57208],"5115fba3":[()=>o.e(85135).then(o.bind(o,25348)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/15-sicherheit.mdx",25348],"513c1bad":[()=>Promise.all([o.e(71222),o.e(33840),o.e(14588)]).then(o.bind(o,77300)),"@site/versioned_docs/version-1.6/30-components/abbr.mdx",77300],51693422:[()=>o.e(63028).then(o.bind(o,93976)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/99-impressum.mdx",93976],"517771bc":[()=>o.e(72345).then(o.t.bind(o,51080,19)),"~docs/default/tag-en-docs-1-6-tags-arc-42-7dd.json",51080],"51ffbd3b":[()=>Promise.all([o.e(71222),o.e(33840),o.e(24288)]).then(o.bind(o,96504)),"@site/versioned_docs/version-2.0/30-components/breadcrumb.mdx",96504],"5200777c":[()=>o.e(25284).then(o.t.bind(o,94544,19)),"~docs/default/tag-en-docs-next-tags-roadmap-08b.json",94544],"5267e197":[()=>o.e(28700).then(o.bind(o,67581)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-01-04.mdx?truncated=true",67581],"5283fbb3":[()=>o.e(52312).then(o.bind(o,58296)),"@site/versioned_docs/version-2.0/30-components/toaster.mdx",58296],"53a0c1aa":[()=>Promise.all([o.e(71222),o.e(33840),o.e(34690)]).then(o.bind(o,52016)),"@site/versioned_docs/version-1.7/30-components/avatar.mdx",52016],"53a4030e":[()=>o.e(28304).then(o.t.bind(o,19112,19)),"~docs/default/tag-en-docs-next-tags-avatar-710.json",19112],"53c0f52b":[()=>Promise.all([o.e(57742),o.e(23712)]).then(o.bind(o,91828)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/05-styling/34-theming.mdx",91828],"5410a0e2":[()=>o.e(25240).then(o.t.bind(o,85064,19)),"~docs/default/tag-en-docs-next-tags-getting-started-ea5.json",85064],"546c391f":[()=>o.e(99177).then(o.t.bind(o,41884,19)),"~docs/default/tag-en-docs-1-7-tags-nav-104.json",41884],"54c7be58":[()=>o.e(74292).then(o.t.bind(o,44600,19)),"~docs/default/tag-en-docs-tags-legal-965.json",44600],"54d919d2":[()=>Promise.all([o.e(71222),o.e(33840),o.e(86752)]).then(o.bind(o,34744)),"@site/versioned_docs/version-1.7/30-components/link.mdx",34744],"550ee97b":[()=>o.e(85224).then(o.t.bind(o,80480,19)),"~docs/default/tag-en-docs-tags-avatar-fde.json",80480],"55960ee5":[()=>o.e(94296).then(o.t.bind(o,82416,19)),"~docs/default/tags-list-current-prop-15a.json",82416],"55c53929":[()=>o.e(64844).then(o.t.bind(o,86880,19)),"~docs/default/tag-en-docs-1-6-tags-roadmap-7b6.json",86880],"55f9a261":[()=>o.e(38440).then(o.t.bind(o,31992,19)),"~docs/default/tag-en-docs-1-6-tags-privacy-5c3.json",31992],"5610f912":[()=>o.e(54224).then(o.t.bind(o,86104,19)),"~docs/default/tag-en-docs-next-tags-alert-9c2.json",86104],"565638f3":[()=>o.e(57008).then(o.t.bind(o,12668,19)),"~blog/default/en-blog-tags-tutorial-855.json",12668],"570098d2":[()=>o.e(75696).then(o.bind(o,69604)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-05-03.mdx",69604],57135462:[()=>o.e(24104).then(o.t.bind(o,48698,19)),"~docs/default/tag-en-docs-1-7-tags-tabs-8fd.json",48698],"57161bd2":[()=>o.e(99216).then(o.bind(o,31348)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/41-formular-handling.mdx",31348],"578f5ffd":[()=>o.e(20204).then(o.t.bind(o,70676,19)),"~docs/default/tag-en-docs-next-tags-split-button-04b.json",70676],57926659:[()=>o.e(5072).then(o.t.bind(o,47048,19)),"~docs/default/tag-en-docs-tags-dialog-720.json",47048],"57f34353":[()=>o.e(59412).then(o.t.bind(o,37952,19)),"~docs/default/tag-en-docs-tags-link-c1b.json",37952],"58f5c888":[()=>Promise.all([o.e(71222),o.e(33840),o.e(47052)]).then(o.bind(o,43044)),"@site/versioned_docs/version-1.6/30-components/split-button.mdx",43044],"58f78aee":[()=>o.e(85284).then(o.t.bind(o,20576,19)),"~docs/default/tag-en-docs-next-tags-indented-text-819.json",20576],"5910bf09":[()=>o.e(55356).then(o.t.bind(o,51178,19)),"~docs/default/tag-en-docs-1-7-tags-input-date-fdc.json",51178],"59dc0e38":[()=>Promise.all([o.e(71222),o.e(33840),o.e(8816)]).then(o.bind(o,78444)),"@site/docs/30-components/button-group.mdx",78444],"59dddb70":[()=>o.e(74772).then(o.t.bind(o,98600,19)),"~docs/default/tag-en-docs-1-6-tags-card-afa.json",98600],"5a362df3":[()=>Promise.all([o.e(71222),o.e(33840),o.e(23204)]).then(o.bind(o,54957)),"@site/versioned_docs/version-1.6/30-components/image.mdx",54957],"5a8d6de1":[()=>o.e(7768).then(o.t.bind(o,63056,19)),"~docs/default/tag-en-docs-1-7-tags-button-528.json",63056],"5bc8ee64":[()=>o.e(52724).then(o.t.bind(o,67106,19)),"~docs/default/tag-en-docs-next-tags-image-81b.json",67106],"5bfdb4bb":[()=>o.e(61824).then(o.t.bind(o,30440,19)),"~docs/default/tag-en-docs-tags-spezifikation-3b3.json",30440],"5c166666":[()=>o.e(10808).then(o.t.bind(o,71694,19)),"~docs/default/tag-en-docs-tags-details-87b.json",71694],"5c5395e5":[()=>Promise.all([o.e(71222),o.e(33840),o.e(337)]).then(o.bind(o,15968)),"@site/versioned_docs/version-1.6/30-components/spin.mdx",15968],"5cff446e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(25808)]).then(o.bind(o,1492)),"@site/versioned_docs/version-1.5/30-components/skip-nav.mdx",1492],"5d0d32eb":[()=>o.e(63704).then(o.t.bind(o,29826,19)),"~docs/default/tag-en-docs-tags-zukunft-f5e.json",29826],"5d8f433b":[()=>o.e(49118).then(o.bind(o,28476)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/01-manifest.mdx",28476],"5e1200f6":[()=>Promise.all([o.e(78384),o.e(41328)]).then(o.bind(o,3600)),"@site/versioned_docs/version-2.0/60-test-results.mdx",3600],"5e934342":[()=>o.e(56174).then(o.t.bind(o,92152,19)),"~docs/default/tag-en-docs-1-7-tags-leagal-86e.json",92152],"5e95c892":[()=>o.e(44304).then(o.bind(o,11116)),"@theme/DocsRoot",11116],"5e9f5e1a":[()=>Promise.resolve().then(o.bind(o,97768)),"@generated/docusaurus.config",97768],"5eb2bf55":[()=>o.e(11908).then(o.t.bind(o,20840,19)),"~docs/default/tag-en-docs-1-5-tags-input-file-774.json",20840],"5f445e17":[()=>o.e(48676).then(o.t.bind(o,50590,19)),"/Users/moppitz/Workspace/kolibri/public-ui.github.io/dev/.docusaurus/docusaurus-plugin-content-pages/default/plugin-route-context-module-100.json",50590],"5f7a55e1":[()=>o.e(80317).then(o.t.bind(o,17816,19)),"~docs/default/tag-en-docs-1-6-tags-avatar-9ed.json",17816],"5fb4e8d6":[()=>Promise.all([o.e(71222),o.e(33840),o.e(59950)]).then(o.bind(o,58940)),"@site/versioned_docs/version-2.0/30-components/tree.mdx",58940],"5fc18d72":[()=>o.e(98144).then(o.t.bind(o,46336,19)),"~docs/default/tag-en-docs-tags-skip-nav-4b1.json",46336],"5fc5213c":[()=>Promise.all([o.e(71222),o.e(33840),o.e(20640)]).then(o.bind(o,8708)),"@site/versioned_docs/version-1.5/30-components/input-range.mdx",8708],"5fd33a1b":[()=>o.e(64836).then(o.t.bind(o,52490,19)),"~docs/default/tag-en-docs-1-6-tags-icon-b68.json",52490],"602409f0":[()=>o.e(4108).then(o.t.bind(o,13024,19)),"~docs/default/tag-en-docs-tags-indented-text-3bf.json",13024],"6063a7a0":[()=>o.e(35316).then(o.t.bind(o,68592,19)),"~docs/default/tag-en-docs-1-7-tags-link-c2b.json",68592],61834846:[()=>o.e(39520).then(o.t.bind(o,16780,19)),"~docs/default/tag-en-docs-1-6-tags-faq-479.json",16780],"61974d8e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(56344)]).then(o.bind(o,11136)),"@site/versioned_docs/version-2.0/30-components/span.mdx",11136],"61ff0abd":[()=>Promise.all([o.e(71222),o.e(33840),o.e(39404)]).then(o.bind(o,77368)),"@site/versioned_docs/version-2.0/30-components/split-button.mdx",77368],"631bb4b1":[()=>o.e(88092).then(o.t.bind(o,37628,19)),"~docs/default/tag-en-docs-1-5-tags-nav-c40.json",37628],"6331d0f9":[()=>Promise.all([o.e(71222),o.e(33840),o.e(33612)]).then(o.bind(o,53972)),"@site/versioned_docs/version-2.0/30-components/logo.mdx",53972],63632326:[()=>o.e(31636).then(o.t.bind(o,95792,19)),"~docs/default/tag-en-docs-1-6-tags-link-group-a79.json",95792],"644af9f8":[()=>Promise.all([o.e(71222),o.e(33840),o.e(47568)]).then(o.bind(o,42804)),"@site/versioned_docs/version-1.6/30-components/tabs.mdx",42804],"646f584c":[()=>Promise.all([o.e(71222),o.e(33840),o.e(98684)]).then(o.bind(o,83088)),"@site/versioned_docs/version-1.7/30-components/button-group.mdx",83088],"64d7fb55":[()=>o.e(43604).then(o.t.bind(o,83348,19)),"~blog/default/en-blog-page-2-225.json",83348],"64e3fb20":[()=>Promise.all([o.e(71222),o.e(33840),o.e(32156)]).then(o.bind(o,8280)),"@site/docs/30-components/input-file.mdx",8280],"64e6dc89":[()=>o.e(21844).then(o.t.bind(o,34672,19)),"~docs/default/tag-en-docs-next-tags-nav-ad0.json",34672],"654a25c6":[()=>Promise.all([o.e(71222),o.e(33840),o.e(97464)]).then(o.bind(o,47088)),"@site/versioned_docs/version-2.0/30-components/skip-nav.mdx",47088],"657b6a7c":[()=>o.e(77080).then(o.t.bind(o,79392,19)),"~docs/default/tag-en-docs-1-7-tags-input-password-94a.json",79392],"65902e29":[()=>o.e(13628).then(o.bind(o,97916)),"@site/docs/30-components/icon-font-awesome.md",97916],"6593e26a":[()=>o.e(75152).then(o.t.bind(o,17976,19)),"~docs/default/tag-en-docs-1-5-tags-spezifikation-8f5.json",17976],"65e7d82f":[()=>o.e(64316).then(o.t.bind(o,62960,19)),"~docs/default/tag-en-docs-1-5-tags-card-03d.json",62960],"65efb58d":[()=>o.e(89276).then(o.t.bind(o,55954,19)),"~docs/default/tag-en-docs-tags-button-group-6b1.json",55954],"66752a28":[()=>Promise.all([o.e(71222),o.e(59128)]).then(o.bind(o,66844)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/02-properties.mdx",66844],"667b569b":[()=>o.e(95168).then(o.t.bind(o,51920,19)),"~docs/default/tag-en-docs-1-6-tags-select-0fa.json",51920],"6683c1d3":[()=>o.e(87648).then(o.bind(o,65896)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/03-test.md",65896],"66cf4bb8":[()=>o.e(17944).then(o.t.bind(o,73448,19)),"~docs/default/tag-en-docs-1-5-tags-input-password-00f.json",73448],"675c2736":[()=>o.e(43496).then(o.bind(o,31144)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/10-get-started/5-frameworks.mdx",31144],"67a5f7a9":[()=>Promise.all([o.e(71222),o.e(33840),o.e(79688)]).then(o.bind(o,62784)),"@site/versioned_docs/version-1.5/30-components/card.mdx",62784],"6811d37a":[()=>o.e(86724).then(o.t.bind(o,34520,19)),"~blog/default/en-blog-tags-theme-c01.json",34520],68330379:[()=>o.e(23548).then(o.t.bind(o,34304,19)),"~docs/default/tag-en-docs-1-7-tags-lizence-764.json",34304],"6838be8d":[()=>o.e(25856).then(o.t.bind(o,56510,19)),"~blog/default/en-blog-tags-link-532-list.json",56510],"684d9310":[()=>o.e(44316).then(o.t.bind(o,55758,19)),"~docs/default/tag-en-docs-1-5-tags-faq-cd0.json",55758],"6875c492":[()=>Promise.all([o.e(12176),o.e(57742),o.e(29116),o.e(68232),o.e(32392)]).then(o.bind(o,42744)),"@theme/BlogTagsPostsPage",42744],"68b3d9c5":[()=>o.e(83996).then(o.t.bind(o,16366,19)),"~docs/default/tag-en-docs-next-tags-modal-f92.json",16366],"68c0db4c":[()=>o.e(61095).then(o.t.bind(o,25534,19)),"~docs/default/tag-en-docs-1-7-tags-pagination-d9a.json",25534],"68dd41e0":[()=>o.e(12128).then(o.t.bind(o,61530,19)),"~docs/default/tag-en-docs-tags-popover-a63.json",61530],"694efab6":[()=>o.e(98640).then(o.bind(o,18192)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/01-manifest.mdx",18192],"69940af3":[()=>o.e(35640).then(o.bind(o,59680)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/10-get-started/5-frameworks.mdx",59680],"69a7bb65":[()=>o.e(83752).then(o.bind(o,30232)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/15-sicherheit.mdx",30232],"6b0ef2b9":[()=>o.e(93728).then(o.t.bind(o,34720,19)),"~docs/default/tag-en-docs-1-6-tags-architekture-d4c.json",34720],"6b18f741":[()=>o.e(12996).then(o.t.bind(o,16312,19)),"~blog/default/en-blog-tags-styleguide-574.json",16312],"6b779996":[()=>Promise.all([o.e(71222),o.e(33840),o.e(79398)]).then(o.bind(o,18024)),"@site/versioned_docs/version-2.0/30-components/input-text.mdx",18024],"6b84e81e":[()=>o.e(65064).then(o.t.bind(o,73104,19)),"~docs/default/tag-en-docs-1-5-tags-input-color-3f3.json",73104],"6bb05c74":[()=>o.e(75828).then(o.bind(o,23280)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/03-test.md",23280],"6bde038e":[()=>Promise.all([o.e(71222),o.e(33840),o.e(48480)]).then(o.bind(o,37772)),"@site/versioned_docs/version-1.7/30-components/heading.mdx",37772],"6c510659":[()=>o.e(33684).then(o.t.bind(o,50514,19)),"~docs/default/tag-en-docs-tags-privacy-c41.json",50514],"6c7ab3bd":[()=>Promise.all([o.e(71222),o.e(33840),o.e(48956)]).then(o.bind(o,23004)),"@site/docs/30-components/skip-nav.mdx",23004],"6c9a741f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(6046)]).then(o.bind(o,27164)),"@site/docs/30-components/input-number.mdx",27164],"6ce08ccb":[()=>o.e(21923).then(o.t.bind(o,47794,19)),"~docs/default/tag-en-docs-next-tags-properties-fe0.json",47794],"6ce90e79":[()=>o.e(40304).then(o.bind(o,56384)),"@site/versioned_docs/version-1.5/30-components/icon-font-awesome.md",56384],"6d13763a":[()=>o.e(25732).then(o.t.bind(o,3104,19)),"~docs/default/tag-en-docs-1-6-tags-nav-fe5.json",3104],"6d1582ae":[()=>o.e(13324).then(o.bind(o,43344)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/08-expert-slot.mdx",43344],"6d6bb4d4":[()=>o.e(61920).then(o.bind(o,45332)),"@site/versioned_docs/version-1.7/30-components/index.md",45332],"6d774181":[()=>o.e(59540).then(o.t.bind(o,49032,19)),"~docs/default/tag-en-docs-tags-attributes-e01.json",49032],"6e6b1481":[()=>Promise.all([o.e(71222),o.e(33840),o.e(18048)]).then(o.bind(o,77448)),"@site/versioned_docs/version-1.6/30-components/toast.mdx",77448],"6e75a469":[()=>o.e(58020).then(o.t.bind(o,94540,19)),"~docs/default/tag-en-docs-tags-security-32d.json",94540],"6ebca3fa":[()=>o.e(85368).then(o.bind(o,34696)),"@site/versioned_docs/version-1.5/30-components/input-radio-group.md",34696],"6ef8a54d":[()=>o.e(15028).then(o.t.bind(o,22864,19)),"~blog/default/en-blog-page-4-b2e.json",22864],"6f16001f":[()=>o.e(95440).then(o.bind(o,71244)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/10-datenschutz.mdx",71244],"6f456181":[()=>o.e(66056).then(o.bind(o,53492)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/09-formular.mdx",53492],"6fa352f6":[()=>o.e(93184).then(o.bind(o,55880)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/03-faq.mdx",55880],"700206d3":[()=>o.e(22040).then(o.bind(o,29800)),"@site/versioned_docs/version-1.7/30-components/icon-font-awesome.md",29800],"700c5324":[()=>Promise.all([o.e(71222),o.e(33840),o.e(26948)]).then(o.bind(o,83788)),"@site/versioned_docs/version-1.5/30-components/modal.mdx",83788],"7086bb04":[()=>o.e(58416).then(o.t.bind(o,16022,19)),"~docs/default/tag-en-docs-1-7-tags-input-email-032.json",16022],"70a53df4":[()=>o.e(53102).then(o.t.bind(o,43208,19)),"~docs/default/tag-en-docs-next-tags-beschreibung-6fd.json",43208],"70fbc3d9":[()=>o.e(42732).then(o.bind(o,35732)),"@site/i18n/en/docusaurus-plugin-content-docs/current/01-manifest.mdx",35732],"7155247f":[()=>o.e(34936).then(o.t.bind(o,42520,19)),"~docs/default/tag-en-docs-tags-manifest-62b.json",42520],"71929eb0":[()=>o.e(61988).then(o.t.bind(o,14480,19)),"~docs/default/tag-en-docs-1-7-tags-progress-1b9.json",14480],"7192f2b4":[()=>o.e(53860).then(o.t.bind(o,89512,19)),"~docs/default/tag-en-docs-tags-accessibility-813.json",89512],"71e6baee":[()=>o.e(89200).then(o.t.bind(o,92064,19)),"~docs/default/tag-en-docs-1-7-tags-bik-bitv-8db.json",92064],"71f4997a":[()=>o.e(67136).then(o.bind(o,83264)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/09-formular.mdx",83264],"71f6ca8f":[()=>o.e(3472).then(o.t.bind(o,1208,19)),"~docs/default/tag-en-docs-1-7-tags-button-link-f29.json",1208],"72b9d33d":[()=>o.e(80700).then(o.t.bind(o,75816,19)),"~blog/default/en-blog-tags-font-63b.json",75816],"72ed1290":[()=>Promise.all([o.e(71222),o.e(33840),o.e(7188)]).then(o.bind(o,112)),"@site/versioned_docs/version-1.7/30-components/textarea.mdx",112],"735c3864":[()=>o.e(53608).then(o.t.bind(o,91888,19)),"~blog/default/en-blog-tags-design-system-d78-list.json",91888],"737f079d":[()=>Promise.all([o.e(71222),o.e(33840),o.e(66828)]).then(o.bind(o,79160)),"@site/versioned_docs/version-2.0/30-components/pagination.mdx",79160],"738bb145":[()=>Promise.all([o.e(71222),o.e(33840),o.e(18308)]).then(o.bind(o,41342)),"@site/versioned_docs/version-1.6/30-components/indented-text.mdx",41342],"73ca0c6e":[()=>o.e(89048).then(o.bind(o,676)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/01-architecture.md",676],"73d88099":[()=>o.e(72444).then(o.bind(o,88588)),"@site/versioned_docs/version-2.0/30-components/icon-icofont.md",88588],"74461aa5":[()=>o.e(16676).then(o.t.bind(o,36872,19)),"~docs/default/tag-en-docs-tags-version-3bc.json",36872],"74fe839f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(34408)]).then(o.bind(o,54788)),"@site/versioned_docs/version-2.0/30-components/button-group.mdx",54788],"7504acdb":[()=>o.e(44669).then(o.t.bind(o,74608,19)),"~docs/default/tag-en-docs-next-tags-input-color-442.json",74608],"7517e8ce":[()=>o.e(12852).then(o.t.bind(o,11144,19)),"~docs/default/tag-en-docs-1-5-tags-textarea-482.json",11144],"75325c47":[()=>Promise.all([o.e(71222),o.e(33840),o.e(75056)]).then(o.bind(o,53148)),"@site/docs/30-components/span.mdx",53148],"75c6d461":[()=>o.e(23892).then(o.bind(o,82796)),"@site/versioned_docs/version-2.0/30-components/input-radio-group.md",82796],"768480d3":[()=>o.e(68096).then(o.t.bind(o,97112,19)),"~docs/default/tag-en-docs-1-5-tags-button-780.json",97112],"76aa6989":[()=>o.e(33152).then(o.bind(o,23668)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-01-04.mdx",23668],"76afe890":[()=>Promise.all([o.e(71222),o.e(33840),o.e(88296)]).then(o.bind(o,34300)),"@site/versioned_docs/version-2.0/30-components/tabs.mdx",34300],"7798dc5d":[()=>Promise.all([o.e(71222),o.e(33840),o.e(37980)]).then(o.bind(o,17304)),"@site/versioned_docs/version-1.5/30-components/input-password.mdx",17304],"77ac2ad8":[()=>Promise.all([o.e(71222),o.e(33840),o.e(28372)]).then(o.bind(o,8360)),"@site/versioned_docs/version-2.0/30-components/quote.mdx",8360],"77c3ae0c":[()=>o.e(82208).then(o.t.bind(o,34248,19)),"~docs/default/tag-en-docs-next-tags-faq-31f.json",34248],"77e41d92":[()=>o.e(57160).then(o.t.bind(o,64856,19)),"~blog/default/en-blog-tags-icon-e25.json",64856],"77f4196f":[()=>o.e(11472).then(o.t.bind(o,28896,19)),"~docs/default/tag-en-docs-1-5-tags-zukunft-780.json",28896],78295266:[()=>o.e(81880).then(o.t.bind(o,86968,19)),"~docs/default/tag-en-docs-next-tags-tabs-26f.json",86968],78311276:[()=>o.e(51624).then(o.t.bind(o,21496,19)),"~docs/default/version-2-0-metadata-prop-70a.json",21496],"786bb04e":[()=>o.e(75273).then(o.t.bind(o,66376,19)),"~docs/default/tag-en-docs-tags-link-button-cb3.json",66376],"7925454f":[()=>o.e(54312).then(o.t.bind(o,42080,19)),"~docs/default/tag-en-docs-next-tags-abbr-faf.json",42080],"79c6d05c":[()=>Promise.all([o.e(71222),o.e(33840),o.e(89432)]).then(o.bind(o,6478)),"@site/versioned_docs/version-2.0/30-components/button.mdx",6478],"7a0325bd":[()=>Promise.all([o.e(71222),o.e(33840),o.e(46268)]).then(o.bind(o,17176)),"@site/versioned_docs/version-1.6/30-components/quote.mdx",17176],"7a15483a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(1180)]).then(o.bind(o,13324)),"@site/versioned_docs/version-2.0/30-components/alert.mdx",13324],"7a314e39":[()=>o.e(78129).then(o.t.bind(o,75440,19)),"~docs/default/tag-en-docs-1-5-tags-beispiele-13a.json",75440],"7ad56559":[()=>Promise.all([o.e(71222),o.e(33840),o.e(10676)]).then(o.bind(o,34780)),"@site/docs/30-components/breadcrumb.mdx",34780],"7af40b21":[()=>o.e(41948).then(o.t.bind(o,45294,19)),"~docs/default/tag-en-docs-next-tags-quality-3a5.json",45294],"7aff6349":[()=>o.e(1372).then(o.t.bind(o,66004,19)),"~docs/default/tag-en-docs-1-6-tags-accordion-988.json",66004],"7b56e2ca":[()=>Promise.all([o.e(71222),o.e(33840),o.e(60572)]).then(o.bind(o,49796)),"@site/versioned_docs/version-1.7/30-components/dialog.mdx",49796],"7c5b6f13":[()=>Promise.all([o.e(71222),o.e(33840),o.e(75508)]).then(o.bind(o,67834)),"@site/docs/30-components/input-radio.mdx",67834],"7ddae0b6":[()=>o.e(95904).then(o.t.bind(o,39656,19)),"~docs/default/tags-list-1-6-prop-6ac.json",39656],"7e2ac79b":[()=>o.e(35e3).then(o.t.bind(o,55628,19)),"~docs/default/tag-en-docs-1-7-tags-input-checkbox-c83.json",55628],"7e2c5cad":[()=>o.e(39908).then(o.bind(o,49556)),"@site/blog/2023-02-23.mdx",49556],"7e959070":[()=>o.e(51348).then(o.t.bind(o,81140,19)),"~docs/default/tag-en-docs-1-6-tags-input-text-53f.json",81140],"7ebe07d1":[()=>o.e(19228).then(o.t.bind(o,51216,19)),"~blog/default/en-blog-tags-font-63b-list.json",51216],"7ffac209":[()=>Promise.all([o.e(71222),o.e(33840),o.e(22180)]).then(o.bind(o,52340)),"@site/versioned_docs/version-1.6/30-components/input-password.mdx",52340],"80889e1f":[()=>o.e(74936).then(o.t.bind(o,33768,19)),"~blog/default/en-blog-tags-spec-4fd-list.json",33768],"814f3328":[()=>o.e(45512).then(o.t.bind(o,4352,19)),"~blog/default/blog-post-list-prop-default.json",4352],"818affe0":[()=>o.e(699).then(o.bind(o,99452)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/01-manifest.mdx",99452],"81a07a3c":[()=>Promise.all([o.e(71222),o.e(33840),o.e(94316)]).then(o.bind(o,61452)),"@site/versioned_docs/version-1.7/30-components/badge.mdx",61452],"81ad8ce2":[()=>o.e(84566).then(o.t.bind(o,89440,19)),"~docs/default/tag-en-docs-tags-roadmap-38f.json",89440],"81d5dcaf":[()=>o.e(19824).then(o.t.bind(o,94664,19)),"~docs/default/tag-en-docs-1-6-tags-leagal-f94.json",94664],"81e630d1":[()=>o.e(68976).then(o.t.bind(o,2420,19)),"~docs/default/tag-en-docs-1-7-tags-details-51a.json",2420],"82456d8f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(27496)]).then(o.bind(o,63912)),"@site/versioned_docs/version-1.7/30-components/version.mdx",63912],"828b3d01":[()=>o.e(17037).then(o.t.bind(o,36438,19)),"~docs/default/tag-en-docs-next-tags-architektur-8da.json",36438],"82bf1f8c":[()=>o.e(14444).then(o.bind(o,47608)),"@site/blog/2023-07-11.mdx",47608],"82f0c759":[()=>o.e(72824).then(o.t.bind(o,76080,19)),"~docs/default/tag-en-docs-tags-demo-66f.json",76080],"84222f96":[()=>Promise.all([o.e(71222),o.e(33840),o.e(3618)]).then(o.bind(o,43756)),"@site/docs/30-components/link-button.mdx",43756],"84cd8bf5":[()=>Promise.all([o.e(71222),o.e(33840),o.e(71968)]).then(o.bind(o,36324)),"@site/versioned_docs/version-1.7/30-components/link-button.mdx",36324],"852f95da":[()=>o.e(1936).then(o.t.bind(o,64920,19)),"~docs/default/tag-en-docs-1-7-tags-dialog-cef.json",64920],"85d51b46":[()=>o.e(63328).then(o.bind(o,48984)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/00-welcome.mdx",48984],86067111:[()=>Promise.all([o.e(71222),o.e(33840),o.e(91024)]).then(o.bind(o,31948)),"@site/versioned_docs/version-1.5/30-components/kolibri.mdx",31948],"87ed4563":[()=>Promise.all([o.e(71222),o.e(33840),o.e(90188)]).then(o.bind(o,69108)),"@site/docs/30-components/split-button.mdx",69108],"88ec0c4f":[()=>o.e(39368).then(o.t.bind(o,10656,19)),"~docs/default/tag-en-docs-1-6-tags-conzept-808.json",10656],89037946:[()=>o.e(89688).then(o.t.bind(o,29120,19)),"~docs/default/tag-en-docs-1-6-tags-input-number-e7b.json",29120],"892cb37d":[()=>o.e(62808).then(o.bind(o,25312)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/40-project/02-license.mdx",25312],"899bb1d9":[()=>o.e(82401).then(o.t.bind(o,35792,19)),"~docs/default/tag-en-docs-1-5-tags-abbr-f45.json",35792],"89a3702f":[()=>o.e(35784).then(o.bind(o,17872)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/10-datenschutz.mdx",17872],"8a16501a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(56100)]).then(o.bind(o,29636)),"@site/versioned_docs/version-1.7/30-components/table.mdx",29636],"8a5374db":[()=>o.e(38712).then(o.t.bind(o,41968,19)),"~docs/default/tag-en-docs-1-6-tags-split-button-d77.json",41968],"8a66acc6":[()=>o.e(9752).then(o.t.bind(o,97400,19)),"~docs/default/tag-en-docs-1-7-tags-abbr-1a3.json",97400],"8a83b27f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(55210)]).then(o.bind(o,23396)),"@site/versioned_docs/version-1.7/30-components/icon.mdx",23396],"8a850eda":[()=>o.e(33836).then(o.bind(o,82596)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-06-28.mdx",82596],"8ababe04":[()=>o.e(10864).then(o.t.bind(o,41208,19)),"~blog/default/en-blog-tags-aria-a8c-list.json",41208],"8b07c849":[()=>o.e(5664).then(o.t.bind(o,2160,19)),"~docs/default/tag-en-docs-next-tags-badge-0a9.json",2160],"8b12358a":[()=>o.e(69156).then(o.t.bind(o,10576,19)),"~docs/default/tag-en-docs-1-6-tags-link-553.json",10576],"8b30e3b0":[()=>o.e(40936).then(o.bind(o,92212)),"@site/versioned_docs/version-1.6/30-components/icon-icofont.md",92212],"8b83adbb":[()=>o.e(19672).then(o.t.bind(o,19928,19)),"~docs/default/tag-en-docs-1-5-tags-modal-53b.json",19928],"8c07e4e5":[()=>o.e(97596).then(o.t.bind(o,35344,19)),"~docs/default/tag-en-docs-1-7-tags-input-number-f0b.json",35344],"8c5f1c9b":[()=>o.e(45920).then(o.t.bind(o,53236,19)),"~docs/default/tag-en-docs-tags-architektur-0a7.json",53236],"8c729097":[()=>o.e(74628).then(o.t.bind(o,5520,19)),"~docs/default/tag-en-docs-tags-accordion-2ba.json",5520],"8ca823df":[()=>o.e(13404).then(o.bind(o,90475)),"@site/docs/30-components/index.md",90475],"8ce59761":[()=>o.e(82652).then(o.t.bind(o,72744,19)),"~docs/default/tag-en-docs-next-tags-icon-d11.json",72744],"8d543c30":[()=>Promise.all([o.e(71222),o.e(33840),o.e(92488)]).then(o.bind(o,95312)),"@site/versioned_docs/version-1.6/30-components/accordion.mdx",95312],"8d5a147f":[()=>Promise.all([o.e(71222),o.e(33840),o.e(89544)]).then(o.bind(o,17708)),"@site/versioned_docs/version-1.7/30-components/toast.mdx",17708],"8da05e5e":[()=>o.e(80656).then(o.t.bind(o,3896,19)),"~docs/default/tag-en-docs-1-6-tags-dialog-22a.json",3896],"8dc26f0a":[()=>o.e(41132).then(o.t.bind(o,84472,19)),"~blog/default/en-blog-tags-theming-c64-list.json",84472],"8ddd81b4":[()=>o.e(8820).then(o.bind(o,82732)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/41-formular-handling.mdx",82732],"8dfb082a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(45248)]).then(o.bind(o,14176)),"@site/versioned_docs/version-1.5/30-components/link-button.mdx",14176],"8e0d9f19":[()=>o.e(25156).then(o.t.bind(o,395,19)),"~docs/default/tag-en-docs-1-5-tags-quote-17b.json",395],"8e116455":[()=>o.e(1064).then(o.t.bind(o,51784,19)),"~docs/default/tag-en-docs-next-tags-characteristics-474.json",51784],"8e237f07":[()=>Promise.all([o.e(71222),o.e(33840),o.e(17788)]).then(o.bind(o,9608)),"@site/versioned_docs/version-1.7/30-components/details.mdx",9608],"8e872512":[()=>Promise.all([o.e(71222),o.e(33840),o.e(12840)]).then(o.bind(o,53472)),"@site/versioned_docs/version-1.5/30-components/nav.mdx",53472],"8e92544e":[()=>o.e(86772).then(o.t.bind(o,1580,19)),"~docs/default/tag-en-docs-1-7-tags-faq-21e.json",1580],"8f157919":[()=>o.e(16509).then(o.t.bind(o,13316,19)),"~docs/default/tag-en-docs-1-6-tags-beispiele-6ce.json",13316],"8fa6d128":[()=>Promise.all([o.e(71222),o.e(33840),o.e(18458)]).then(o.bind(o,70792)),"@site/versioned_docs/version-1.5/30-components/button-link.mdx",70792],"8fa9d7f2":[()=>o.e(86040).then(o.t.bind(o,8364,19)),"~docs/default/tags-list-1-5-prop-26b.json",8364],"8fcc8492":[()=>o.e(72056).then(o.bind(o,8524)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/03-faq.mdx",8524],"8fe7b18a":[()=>Promise.all([o.e(71222),o.e(33840),o.e(1848)]).then(o.bind(o,45008)),"@site/versioned_docs/version-1.7/30-components/abbr.mdx",45008],"90af6398":[()=>o.e(99408).then(o.t.bind(o,74732,19)),"~docs/default/tag-en-docs-1-7-tags-quality-409.json",74732],"90d9344d":[()=>o.e(81496).then(o.bind(o,54209)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-05-03.mdx?truncated=true",54209],"91f4e984":[()=>Promise.all([o.e(71222),o.e(33840),o.e(41656)]).then(o.bind(o,22912)),"@site/versioned_docs/version-1.7/30-components/input-password.mdx",22912],"9230cc6d":[()=>o.e(2820).then(o.t.bind(o,57128,19)),"~docs/default/tag-en-docs-1-5-tags-input-number-9ba.json",57128],"9270b5fe":[()=>o.e(7336).then(o.bind(o,39392)),"@site/i18n/en/docusaurus-plugin-content-docs/current/00-welcome.mdx",39392],"933a8d0f":[()=>o.e(54206).then(o.t.bind(o,25648,19)),"~docs/default/tag-en-docs-1-6-tags-form-e7b.json",25648],"935f2afb":[()=>o.e(55696).then(o.t.bind(o,35988,19)),"~docs/default/version-current-metadata-prop-751.json",35988],"936709ff":[()=>o.e(17428).then(o.t.bind(o,13696,19)),"~docs/default/tag-en-docs-1-7-tags-icon-645.json",13696],93850685:[()=>o.e(576).then(o.t.bind(o,32632,19)),"~docs/default/tag-en-docs-tags-architecture-f60.json",32632],"93a0ea96":[()=>o.e(11352).then(o.bind(o,44428)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/00-welcome.mdx",44428],"93af18ee":[()=>o.e(38906).then(o.t.bind(o,95552,19)),"~docs/default/tag-en-docs-1-7-tags-demo-3eb.json",95552],"93f72aac":[()=>o.e(25884).then(o.t.bind(o,11806,19)),"~docs/default/tag-en-docs-1-6-tags-image-82c.json",11806],"940b8825":[()=>Promise.all([o.e(71222),o.e(33840),o.e(47664)]).then(o.bind(o,74708)),"@site/versioned_docs/version-2.0/30-components/input-range.mdx",74708],"9453cf0e":[()=>o.e(3872).then(o.t.bind(o,93952,19)),"~docs/default/tag-en-docs-next-tags-manifest-b1d.json",93952],"949233ad":[()=>Promise.all([o.e(71222),o.e(33840),o.e(90952)]).then(o.bind(o,13084)),"@site/versioned_docs/version-2.0/30-components/link-group.mdx",13084],"9519f872":[()=>Promise.all([o.e(71222),o.e(44024)]).then(o.bind(o,19540)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/02-properties.mdx",19540],"953111da":[()=>Promise.all([o.e(71222),o.e(33840),o.e(25128)]).then(o.bind(o,79484)),"@site/versioned_docs/version-1.6/30-components/logo.mdx",79484],"9562e6ac":[()=>o.e(69964).then(o.t.bind(o,55576,19)),"~docs/default/tag-en-docs-1-6-tags-beschreibung-61a.json",55576],"95ad8a31":[()=>o.e(69688).then(o.t.bind(o,32584,19)),"~docs/default/tag-en-docs-tags-nav-68a.json",32584],"95d20e16":[()=>o.e(91528).then(o.t.bind(o,45664,19)),"~blog/default/en-blog-tags-neuerungen-b24.json",45664],"96d0939f":[()=>o.e(30960).then(o.t.bind(o,8804,19)),"~docs/default/tag-en-docs-1-5-tags-konzept-52e.json",8804],"970ec985":[()=>o.e(58004).then(o.t.bind(o,22627,19)),"~blog/default/en-blog-tags-styleguide-574-list.json",22627],"9718d266":[()=>Promise.all([o.e(71222),o.e(33840),o.e(23632)]).then(o.bind(o,180)),"@site/versioned_docs/version-1.7/30-components/card.mdx",180],"974e7d30":[()=>o.e(27684).then(o.t.bind(o,29096,19)),"~docs/default/tag-en-docs-1-5-tags-select-c7b.json",29096],"977d89b0":[()=>Promise.all([o.e(71222),o.e(33840),o.e(49112)]).then(o.bind(o,23787)),"@site/versioned_docs/version-2.0/30-components/icon.mdx",23787],97930064:[()=>o.e(73988).then(o.t.bind(o,36576,19)),"~docs/default/tag-en-docs-1-7-tags-breadcrumb-db8.json",36576],"979f9f5e":[()=>o.e(67565).then(o.t.bind(o,5080,19)),"~docs/default/tag-en-docs-next-tags-input-radio-dcd.json",5080],"97c5d107":[()=>o.e(16859).then(o.t.bind(o,83888,19)),"~docs/default/tag-en-docs-next-tags-input-file-b91.json",83888],"97c97ae2":[()=>o.e(45760).then(o.t.bind(o,82216,19)),"~docs/default/tag-en-docs-1-6-tags-details-a87.json",82216],"984343b7":[()=>Promise.all([o.e(71222),o.e(33840),o.e(26040)]).then(o.bind(o,63340)),"@site/versioned_docs/version-2.0/30-components/tree-item.mdx",63340],"984cbe92":[()=>o.e(80840).then(o.t.bind(o,35162,19)),"~docs/default/tag-en-docs-1-7-tags-security-e8a.json",35162],"98fdc1a8":[()=>o.e(33880).then(o.t.bind(o,24744,19)),"~docs/default/tag-en-docs-1-6-tags-pagination-013.json",24744],"9905bd24":[()=>o.e(34432).then(o.t.bind(o,78868,19)),"~docs/default/tag-en-docs-next-tags-card-23b.json",78868],"9a14cd26":[()=>Promise.all([o.e(57742),o.e(65696)]).then(o.bind(o,20256)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/05-styling/34-theming.mdx",20256],"9a3cc78e":[()=>o.e(30036).then(o.bind(o,69084)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/08-expert-slot.mdx",69084],"9aab6c09":[()=>Promise.all([o.e(71222),o.e(33840),o.e(18492)]).then(o.bind(o,34992)),"@site/versioned_docs/version-1.7/30-components/indented-text.mdx",34992],"9b46964f":[()=>o.e(62112).then(o.t.bind(o,87112,19)),"~docs/default/tag-en-docs-tags-form-1d0.json",87112],"9b4b95a1":[()=>Promise.all([o.e(71222),o.e(33840),o.e(34966)]).then(o.bind(o,65656)),"@site/docs/30-components/input-range.mdx",65656],"9b52a590":[()=>Promise.all([o.e(71222),o.e(33840),o.e(84540)]).then(o.bind(o,21376)),"@site/versioned_docs/version-1.5/30-components/alert.mdx",21376],"9bdd22eb":[()=>o.e(57824).then(o.t.bind(o,4358,19)),"~blog/default/en-blog-tags-tags-c25.json",4358],"9bf53f4e":[()=>o.e(46724).then(o.bind(o,5269)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-06-05.mdx",5269],"9c393f8c":[()=>o.e(81444).then(o.bind(o,58740)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/41-formular-handling.mdx",58740],"9de94fa1":[()=>o.e(56136).then(o.bind(o,65424)),"@site/versioned_docs/version-1.5/30-components/index.md",65424],"9e4087bc":[()=>o.e(27028).then(o.bind(o,16556)),"@theme/BlogArchivePage",16556],"9e97156e":[()=>o.e(70772).then(o.t.bind(o,93064,19)),"~docs/default/tag-en-docs-1-6-tags-textarea-cd1.json",93064],"9ea64105":[()=>o.e(90552).then(o.t.bind(o,32456,19)),"~docs/default/tag-en-docs-1-6-tags-progress-9b8.json",32456],"9ed41e4a":[()=>o.e(40620).then(o.t.bind(o,42671,19)),"~docs/default/tag-en-docs-1-5-tags-indented-text-c80.json",42671],"9fa65941":[()=>Promise.all([o.e(71222),o.e(28492)]).then(o.bind(o,83152)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/02-properties.mdx",83152],"9fe35a35":[()=>o.e(84788).then(o.t.bind(o,37920,19)),"~docs/default/tag-en-docs-tags-button-0e4.json",37920],a0024a96:[()=>Promise.all([o.e(71222),o.e(33840),o.e(53220)]).then(o.bind(o,31812)),"@site/versioned_docs/version-1.5/30-components/split-button.mdx",31812],a056dc3d:[()=>o.e(18120).then(o.t.bind(o,83772,19)),"~docs/default/tag-en-docs-1-7-tags-koli-bri-f6f.json",83772],a05aa470:[()=>o.e(53332).then(o.t.bind(o,52067,19)),"~docs/default/version-1-6-metadata-prop-04b.json",52067],a0f49806:[()=>o.e(66424).then(o.t.bind(o,31668,19)),"~blog/default/en-blog-tags-link-532.json",31668],a17861af:[()=>o.e(79372).then(o.bind(o,17768)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/90-health-state.mdx",17768],a1c96e2d:[()=>o.e(57166).then(o.t.bind(o,46408,19)),"~docs/default/tag-en-docs-1-5-tags-tooltip-a60.json",46408],a211d308:[()=>o.e(42364).then(o.t.bind(o,83904,19)),"~docs/default/tag-en-docs-next-tags-tooltip-b3a.json",83904],a302c7b5:[()=>o.e(69572).then(o.t.bind(o,78040,19)),"~docs/default/tag-en-docs-1-7-tags-accessibility-bb8.json",78040],a34c5897:[()=>Promise.all([o.e(71222),o.e(33840),o.e(60744)]).then(o.bind(o,4464)),"@site/versioned_docs/version-1.5/30-components/abbr.mdx",4464],a3c284ce:[()=>Promise.all([o.e(71222),o.e(33840),o.e(50372)]).then(o.bind(o,11050)),"@site/versioned_docs/version-1.7/30-components/select.mdx",11050],a4393fc8:[()=>Promise.all([o.e(71222),o.e(33840),o.e(19600)]).then(o.bind(o,75304)),"@site/versioned_docs/version-2.0/30-components/avatar.mdx",75304],a479584a:[()=>Promise.all([o.e(71222),o.e(33840),o.e(14829)]).then(o.bind(o,77752)),"@site/versioned_docs/version-1.6/30-components/tooltip.mdx",77752],a4a32f06:[()=>o.e(29960).then(o.t.bind(o,25304,19)),"~docs/default/tag-en-docs-1-7-tags-card-971.json",25304],a562f85f:[()=>o.e(26640).then(o.t.bind(o,2398,19)),"~blog/default/en-blog-tags-style-4d7-list.json",2398],a59802ae:[()=>o.e(33280).then(o.t.bind(o,74012,19)),"~blog/default/en-blog-tags-theming-c64.json",74012],a5b5c295:[()=>o.e(2560).then(o.t.bind(o,7464,19)),"~docs/default/tag-en-docs-1-7-tags-architecture-8d8.json",7464],a624a495:[()=>Promise.all([o.e(71222),o.e(33840),o.e(77544)]).then(o.bind(o,12304)),"@site/docs/30-components/abbr.mdx",12304],a6409b85:[()=>o.e(80144).then(o.t.bind(o,59112,19)),"~docs/default/tag-en-docs-1-5-tags-privacy-a35.json",59112],a6aa9e1f:[()=>Promise.all([o.e(12176),o.e(57742),o.e(29116),o.e(68232),o.e(54976)]).then(o.bind(o,53891)),"@theme/BlogListPage",53891],a70612f1:[()=>o.e(73436).then(o.bind(o,59356)),"@site/i18n/en/docusaurus-plugin-content-docs/current/10-get-started/1-first-steps.mdx",59356],a72fc325:[()=>o.e(8032).then(o.t.bind(o,60952,19)),"~blog/default/en-blog-tags-aria-a8c.json",60952],a765c39e:[()=>Promise.all([o.e(71222),o.e(33840),o.e(51720)]).then(o.bind(o,29188)),"@site/versioned_docs/version-1.7/30-components/logo.mdx",29188],a7705657:[()=>o.e(88896).then(o.bind(o,52676)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/10-get-started/7-playground.mdx",52676],a7bd4aaa:[()=>o.e(86500).then(o.bind(o,79528)),"@theme/DocVersionRoot",79528],a7e2d0ec:[()=>o.e(39816).then(o.t.bind(o,17962,19)),"~docs/default/tag-en-docs-1-6-tags-koli-bri-d0e.json",17962],a8bde000:[()=>o.e(41e3).then(o.bind(o,47404)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/07-swizzling.md",47404],a8d23060:[()=>o.e(77752).then(o.bind(o,59165)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/40-project/01-history.md",59165],a908a622:[()=>o.e(53500).then(o.t.bind(o,54488,19)),"~docs/default/tag-en-docs-tags-input-password-522.json",54488],a917b30f:[()=>o.e(38384).then(o.t.bind(o,77402,19)),"~docs/default/tag-en-docs-1-6-tags-indented-text-0b1.json",77402],a94703ab:[()=>Promise.all([o.e(12176),o.e(4666)]).then(o.bind(o,52888)),"@theme/DocRoot",52888],a951d9aa:[()=>o.e(81408).then(o.bind(o,52896)),"@site/blog/2023-02-02.mdx?truncated=true",52896],a95b921c:[()=>o.e(47148).then(o.t.bind(o,63144,19)),"~docs/default/tag-en-docs-tags-badge-5af.json",63144],a967af7c:[()=>o.e(44400).then(o.bind(o,42004)),"@site/versioned_docs/version-2.0/40-project/04-roadmap.mdx",42004],a97233e6:[()=>o.e(34256).then(o.bind(o,70956)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/01-architecture.md",70956],aa3c43bf:[()=>o.e(7772).then(o.t.bind(o,81971,19)),"~docs/default/tag-en-docs-1-5-tags-license-570.json",81971],aa87e2e6:[()=>o.e(74476).then(o.t.bind(o,97416,19)),"~docs/default/tag-en-docs-next-tags-button-081.json",97416],aabbc1ea:[()=>o.e(72936).then(o.t.bind(o,37980,19)),"~docs/default/tag-en-docs-1-6-tags-license-2a6.json",37980],aae470d6:[()=>o.e(34032).then(o.bind(o,17071)),"@site/docs/40-project/04-roadmap.mdx",17071],aaf0867f:[()=>Promise.all([o.e(71222),o.e(33840),o.e(36728)]).then(o.bind(o,78712)),"@site/versioned_docs/version-1.5/30-components/input-email.mdx",78712],abcc034d:[()=>o.e(23384).then(o.t.bind(o,54306,19)),"~docs/default/tag-en-docs-1-7-tags-manifest-dbf.json",54306],abcf3844:[()=>o.e(4312).then(o.t.bind(o,84644,19)),"~docs/default/tag-en-docs-next-tags-skip-nav-084.json",84644],acaf261c:[()=>Promise.all([o.e(71222),o.e(33840),o.e(78e3)]).then(o.bind(o,93344)),"@site/versioned_docs/version-1.6/30-components/span.mdx",93344],acb3d2e1:[()=>Promise.all([o.e(78384),o.e(92560)]).then(o.bind(o,38664)),"@site/versioned_docs/version-1.5/60-test-results.mdx",38664],ad3b0270:[()=>Promise.all([o.e(71222),o.e(33840),o.e(59604)]).then(o.bind(o,70740)),"@site/versioned_docs/version-1.5/30-components/select.mdx",70740],ad6ad4d7:[()=>o.e(3788).then(o.bind(o,93308)),"@site/versioned_docs/version-1.6/30-components/index.md",93308],ad901d0d:[()=>o.e(64172).then(o.t.bind(o,24344,19)),"~docs/default/tag-en-docs-1-7-tags-input-file-610.json",24344],ad92bd2b:[()=>o.e(41096).then(o.t.bind(o,3684,19)),"~docs/default/tag-en-docs-next-tags-historical-b2f.json",3684],ad936670:[()=>o.e(3604).then(o.t.bind(o,50824,19)),"~docs/default/tag-en-docs-1-7-tags-characteristics-830.json",50824],adc66595:[()=>o.e(23800).then(o.t.bind(o,82626,19)),"~docs/default/tag-en-docs-1-6-tags-input-checkbox-10b.json",82626],add6a105:[()=>o.e(61828).then(o.t.bind(o,96200,19)),"~docs/default/tag-en-docs-1-5-tags-icon-d5f.json",96200],ae70dab1:[()=>o.e(96948).then(o.bind(o,12188)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/10-get-started/1-first-steps.mdx",12188],af35fc1c:[()=>Promise.all([o.e(71222),o.e(33840),o.e(70352)]).then(o.bind(o,99480)),"@site/versioned_docs/version-1.5/30-components/pagination.mdx",99480],afd4baab:[()=>o.e(83880).then(o.t.bind(o,59234,19)),"~docs/default/tag-en-docs-tags-tree-item-294.json",59234],b01cc0fa:[()=>o.e(5681).then(o.t.bind(o,35251,19)),"~docs/default/tag-en-docs-1-6-tags-legal-50d.json",35251],b043d018:[()=>o.e(43352).then(o.t.bind(o,25972,19)),"~docs/default/tag-en-docs-1-7-tags-concept-310.json",25972],b0838fdd:[()=>o.e(75092).then(o.bind(o,46352)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/10-get-started/1-first-steps.mdx",46352],b0bb9d07:[()=>Promise.all([o.e(71222),o.e(33840),o.e(39064)]).then(o.bind(o,99564)),"@site/versioned_docs/version-1.5/30-components/span.mdx",99564],b17c81a5:[()=>Promise.all([o.e(71222),o.e(33840),o.e(19608)]).then(o.bind(o,75532)),"@site/versioned_docs/version-1.7/30-components/modal.mdx",75532],b18f40f5:[()=>o.e(16880).then(o.t.bind(o,86912,19)),"~docs/default/tag-en-docs-1-7-tags-toaster-637.json",86912],b1d14fe4:[()=>Promise.all([o.e(71222),o.e(33840),o.e(15385)]).then(o.bind(o,29808)),"@site/versioned_docs/version-1.5/30-components/input-color.mdx",29808],b1e4b888:[()=>Promise.all([o.e(71222),o.e(33840),o.e(8160)]).then(o.bind(o,27093)),"@site/docs/30-components/tabs.mdx",27093],b24a1403:[()=>o.e(11848).then(o.t.bind(o,59464,19)),"~docs/default/tag-en-docs-next-tags-button-link-78e.json",59464],b24aac9c:[()=>o.e(59763).then(o.t.bind(o,52576,19)),"~blog/default/en-blog-tags-button-beb.json",52576],b2a50725:[()=>o.e(12961).then(o.bind(o,31800)),"@site/i18n/en/docusaurus-plugin-content-docs/current/40-project/02-license.mdx",31800],b2bc9b87:[()=>o.e(92940).then(o.bind(o,32452)),"@site/blog/2023-02-02.mdx",32452],b3083fbc:[()=>Promise.all([o.e(71222),o.e(33840),o.e(9948)]).then(o.bind(o,47348)),"@site/versioned_docs/version-2.0/30-components/dialog.mdx",47348],b38f1cfb:[()=>o.e(35440).then(o.bind(o,43768)),"@site/versioned_docs/version-2.0/30-components/icon-font-awesome.md",43768],b3c4c961:[()=>Promise.all([o.e(71222),o.e(33840),o.e(8216)]).then(o.bind(o,86944)),"@site/versioned_docs/version-1.6/30-components/version.mdx",86944],b4498a19:[()=>o.e(81708).then(o.bind(o,88240)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/01-architecture.md",88240],b4fa41d8:[()=>o.e(33800).then(o.bind(o,96876)),"@site/versioned_docs/version-1.7/80-changelog.mdx",96876],b52d2d01:[()=>Promise.all([o.e(71222),o.e(33840),o.e(16372)]).then(o.bind(o,51944)),"@site/versioned_docs/version-1.7/30-components/tooltip.mdx",51944],b53bd626:[()=>o.e(88528).then(o.t.bind(o,28294,19)),"~docs/default/tag-en-docs-1-5-tags-button-link-649.json",28294],b57e52ee:[()=>o.e(3216).then(o.t.bind(o,66576,19)),"~docs/default/version-1-7-metadata-prop-006.json",66576],b6199548:[()=>o.e(80632).then(o.t.bind(o,55154,19)),"~docs/default/tag-en-docs-tags-modal-d13.json",55154],b629a583:[()=>o.e(42300).then(o.bind(o,77384)),"@site/docs/30-components/popover.mdx",77384],b6686f96:[()=>o.e(14882).then(o.t.bind(o,40186,19)),"~docs/default/tag-en-docs-1-6-tags-characteristics-de7.json",40186],b6e7dba6:[()=>o.e(5268).then(o.t.bind(o,34820,19)),"~docs/default/tag-en-docs-1-5-tags-tabs-1eb.json",34820],b76fd083:[()=>o.e(24416).then(o.t.bind(o,62816,19)),"~docs/default/tag-en-docs-next-tags-security-0bb.json",62816],b782f082:[()=>o.e(65846).then(o.t.bind(o,86e3,19)),"~docs/default/tag-en-docs-1-5-tags-lizence-9d1.json",86e3],b82d27ff:[()=>Promise.all([o.e(71222),o.e(33840),o.e(52086)]).then(o.bind(o,97088)),"@site/versioned_docs/version-1.5/30-components/tooltip.mdx",97088],b8dfde3b:[()=>o.e(26500).then(o.t.bind(o,30940,19)),"~docs/default/tag-en-docs-tags-link-group-e89.json",30940],b8e4c66a:[()=>o.e(6272).then(o.t.bind(o,12980,19)),"~docs/default/tag-en-docs-1-6-tags-lizence-f2e.json",12980],b8fd4926:[()=>o.e(17068).then(o.t.bind(o,65404,19)),"~docs/default/tag-en-docs-next-tags-koli-bri-a43.json",65404],b962154f:[()=>o.e(91704).then(o.t.bind(o,31048,19)),"~docs/default/tag-en-docs-1-7-tags-spezifikation-2ed.json",31048],b964ec95:[()=>Promise.all([o.e(71222),o.e(33840),o.e(71280)]).then(o.bind(o,92020)),"@site/versioned_docs/version-1.7/30-components/skip-nav.mdx",92020],baa2a47b:[()=>Promise.all([o.e(71222),o.e(33840),o.e(67870)]).then(o.bind(o,34680)),"@site/docs/30-components/tree-item.mdx",34680],bb4b1aff:[()=>Promise.all([o.e(71222),o.e(33840),o.e(93332)]).then(o.bind(o,74840)),"@site/versioned_docs/version-1.6/30-components/dialog.mdx",74840],bb61581f:[()=>o.e(38504).then(o.t.bind(o,35752,19)),"~blog/default/en-blog-tags-release-e75-list.json",35752],bb6d0031:[()=>o.e(78552).then(o.t.bind(o,47520,19)),"~docs/default/tag-en-docs-next-tags-version-070.json",47520],bbe5591c:[()=>o.e(49512).then(o.t.bind(o,80731,19)),"~docs/default/tag-en-docs-1-6-tags-spezifikation-db3.json",80731],bbeaf169:[()=>o.e(7372).then(o.bind(o,59108)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-06-05.mdx?truncated=true",59108],bbff35c6:[()=>Promise.all([o.e(71222),o.e(33840),o.e(61398)]).then(o.bind(o,83740)),"@site/versioned_docs/version-1.7/30-components/progress.mdx",83740],bcd71e6f:[()=>Promise.all([o.e(71222),o.e(33840),o.e(58840)]).then(o.bind(o,3244)),"@site/versioned_docs/version-1.7/30-components/span.mdx",3244],bd91ca55:[()=>o.e(71792).then(o.t.bind(o,30454,19)),"~docs/default/tag-en-docs-tags-input-radio-7cb.json",30454],be4607ef:[()=>o.e(37600).then(o.t.bind(o,41082,19)),"~docs/default/tag-en-docs-tags-alert-9f8.json",41082],bea77539:[()=>Promise.all([o.e(71222),o.e(33840),o.e(51264)]).then(o.bind(o,10400)),"@site/versioned_docs/version-1.7/30-components/breadcrumb.mdx",10400],bec8cfd0:[()=>o.e(3136).then(o.t.bind(o,96624,19)),"~docs/default/tag-en-docs-next-tags-heading-d94.json",96624],bed28f2e:[()=>o.e(18608).then(o.t.bind(o,95296,19)),"~docs/default/tag-en-docs-1-7-tags-attributes-ef3.json",95296],bf047cf1:[()=>Promise.all([o.e(71222),o.e(33840),o.e(73340)]).then(o.bind(o,19644)),"@site/versioned_docs/version-1.7/30-components/image.mdx",19644],bf647673:[()=>Promise.all([o.e(71222),o.e(33840),o.e(49336)]).then(o.bind(o,25612)),"@site/versioned_docs/version-1.5/30-components/icon.mdx",25612],c001db91:[()=>Promise.all([o.e(71222),o.e(33840),o.e(9760)]).then(o.bind(o,99032)),"@site/versioned_docs/version-1.6/30-components/select.mdx",99032],c01b6fe0:[()=>o.e(66660).then(o.t.bind(o,59320,19)),"~docs/default/tag-en-docs-tags-select-4d6.json",59320],c035a521:[()=>o.e(27492).then(o.t.bind(o,87656,19)),"~docs/default/version-1-5-metadata-prop-29a.json",87656],c0593636:[()=>Promise.all([o.e(71222),o.e(33840),o.e(3464)]).then(o.bind(o,66772)),"@site/docs/30-components/card.mdx",66772],c060dc24:[()=>o.e(59432).then(o.bind(o,82824)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/09-formular.mdx",82824],c0881a69:[()=>o.e(48196).then(o.bind(o,26340)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/03-test.md",26340],c0ced1b0:[()=>Promise.all([o.e(71222),o.e(33840),o.e(66060)]).then(o.bind(o,6504)),"@site/docs/30-components/button-link.mdx",6504],c0d3f8e0:[()=>Promise.all([o.e(71222),o.e(33840),o.e(61608)]).then(o.bind(o,36704)),"@site/versioned_docs/version-1.6/30-components/input-range.mdx",36704],c0e77005:[()=>o.e(9461).then(o.bind(o,6796)),"@site/versioned_docs/version-1.6/30-components/input-adapter-leanup.md",6796],c16fa972:[()=>o.e(3664).then(o.bind(o,49260)),"@site/versioned_docs/version-1.6/20-concepts/05-styling/40-scss.md",49260],c18bf9de:[()=>o.e(11896).then(o.t.bind(o,74800,19)),"~docs/default/tag-en-docs-1-5-tags-link-0b6.json",74800],c194a7c8:[()=>o.e(3412).then(o.t.bind(o,64822,19)),"~docs/default/tag-en-docs-1-5-tags-toast-14e.json",64822],c1c44c77:[()=>o.e(18876).then(o.t.bind(o,12204,19)),"~docs/default/tag-en-docs-1-6-tags-breadcrumb-17a.json",12204],c2a43e01:[()=>o.e(42820).then(o.t.bind(o,4318,19)),"~docs/default/tag-en-docs-1-7-tags-historical-8ce.json",4318],c3513f35:[()=>Promise.all([o.e(71222),o.e(33840),o.e(82608)]).then(o.bind(o,99508)),"@site/versioned_docs/version-1.6/30-components/table.mdx",99508],c366d13f:[()=>o.e(68060).then(o.bind(o,10012)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/07-swizzling.md",10012],c3cf8f89:[()=>o.e(53732).then(o.t.bind(o,61138,19)),"~docs/default/tag-en-docs-1-5-tags-input-email-348.json",61138],c3f66738:[()=>Promise.all([o.e(71222),o.e(33840),o.e(35332)]).then(o.bind(o,60108)),"@site/versioned_docs/version-2.0/30-components/input-file.mdx",60108],c3fdfcbc:[()=>o.e(14864).then(o.t.bind(o,49952,19)),"~blog/default/en-blog-tags-website-8ac.json",49952],c41822a7:[()=>Promise.all([o.e(71222),o.e(33840),o.e(80756)]).then(o.bind(o,60088)),"@site/docs/30-components/link.mdx",60088],c43cbe09:[()=>o.e(49128).then(o.t.bind(o,66372,19)),"~docs/default/tag-en-docs-1-6-tags-spin-926.json",66372],c4492982:[()=>o.e(23386).then(o.t.bind(o,27690,19)),"~docs/default/tag-en-docs-1-7-tags-arc-42-294.json",27690],c4568ac5:[()=>o.e(24404).then(o.t.bind(o,91896,19)),"~docs/default/tag-en-docs-next-tags-zukunft-1fe.json",91896],c47246bd:[()=>Promise.all([o.e(71222),o.e(33840),o.e(46664)]).then(o.bind(o,95008)),"@site/versioned_docs/version-1.7/30-components/input-text.mdx",95008],c4c5f679:[()=>Promise.all([o.e(71222),o.e(33840),o.e(84832)]).then(o.bind(o,89384)),"@site/versioned_docs/version-1.6/30-components/link-group.mdx",89384],c4d2d49d:[()=>o.e(69112).then(o.t.bind(o,78408,19)),"~docs/default/tag-en-docs-tags-input-number-b8c.json",78408],c4f022b1:[()=>o.e(3700).then(o.t.bind(o,27755,19)),"~blog/default/en-blog-tags-theme-c01-list.json",27755],c5139c50:[()=>o.e(476).then(o.t.bind(o,79198,19)),"~docs/default/tag-en-docs-1-6-tags-alert-4df.json",79198],c548cacd:[()=>o.e(25832).then(o.t.bind(o,95252,19)),"~docs/default/tag-en-docs-1-7-tags-link-button-ed5.json",95252],c69e4dcc:[()=>o.e(31352).then(o.t.bind(o,93992,19)),"~blog/default/en-blog-tags-style-4d7.json",93992],c6a63cb7:[()=>Promise.all([o.e(71222),o.e(33840),o.e(13276)]).then(o.bind(o,60860)),"@site/versioned_docs/version-2.0/30-components/image.mdx",60860],c6c5f174:[()=>Promise.all([o.e(71222),o.e(33840),o.e(65740)]).then(o.bind(o,27292)),"@site/versioned_docs/version-1.5/30-components/heading.mdx",27292],c730a308:[()=>o.e(67908).then(o.bind(o,52532)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/20-concepts/03-test.md",52532],c78f0b74:[()=>o.e(92784).then(o.bind(o,372)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/05-styling/35-designer.mdx",372],c8418bc1:[()=>Promise.all([o.e(71222),o.e(33840),o.e(69969)]).then(o.bind(o,87938)),"@site/versioned_docs/version-1.6/30-components/input-date.mdx",87938],c903f6c4:[()=>o.e(3064).then(o.t.bind(o,34064,19)),"~docs/default/tag-en-docs-tags-bik-bitv-1ea.json",34064],c9057919:[()=>o.e(61056).then(o.bind(o,26216)),"@site/i18n/en/docusaurus-plugin-content-docs/current/40-project/01-history.md",26216],c920935a:[()=>o.e(52712).then(o.t.bind(o,87424,19)),"~docs/default/tag-en-docs-tags-textarea-7b3.json",87424],c982dffb:[()=>o.e(448).then(o.bind(o,8312)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/15-sicherheit.mdx",8312],c9a3bb80:[()=>Promise.all([o.e(71222),o.e(33840),o.e(49536)]).then(o.bind(o,2e3)),"@site/versioned_docs/version-1.5/30-components/link-group.mdx",2e3],ca02da4f:[()=>Promise.all([o.e(71222),o.e(33840),o.e(11e3)]).then(o.bind(o,90144)),"@site/versioned_docs/version-1.6/30-components/alert.mdx",90144],ca0e77e8:[()=>Promise.all([o.e(71222),o.e(33840),o.e(91480)]).then(o.bind(o,38480)),"@site/docs/30-components/select.mdx",38480],ca228a28:[()=>o.e(7760).then(o.t.bind(o,29528,19)),"~docs/default/tag-en-docs-1-7-tags-input-color-6bc.json",29528],ca2e6819:[()=>o.e(54936).then(o.bind(o,40240)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/99-impressum.mdx",40240],ca2f02fc:[()=>o.e(41700).then(o.t.bind(o,30616,19)),"~docs/default/tag-en-docs-next-tags-popover-4f8.json",30616],ca70831f:[()=>Promise.all([o.e(71222),o.e(33840),o.e(93110)]).then(o.bind(o,38296)),"@site/versioned_docs/version-2.0/30-components/abbr.mdx",38296],caa1e939:[()=>o.e(56504).then(o.t.bind(o,36080,19)),"~blog/default/en-blog-tags-website-8ac-list.json",36080],cb36a72b:[()=>Promise.all([o.e(71222),o.e(33840),o.e(45484)]).then(o.bind(o,86216)),"@site/versioned_docs/version-1.5/30-components/version.mdx",86216],cb4f6d61:[()=>o.e(68576).then(o.t.bind(o,28904,19)),"~blog/default/en-blog-tags-button-beb-list.json",28904],cba116cb:[()=>Promise.all([o.e(71222),o.e(33840),o.e(40930)]).then(o.bind(o,62720)),"@site/versioned_docs/version-1.5/30-components/accordion.mdx",62720],cbdc4958:[()=>o.e(58456).then(o.t.bind(o,87336,19)),"~docs/default/tag-en-docs-1-6-tags-bik-bitv-db3.json",87336],cc451c05:[()=>o.e(79880).then(o.t.bind(o,52536,19)),"~docs/default/tag-en-docs-1-5-tags-backlog-da5.json",52536],cc552229:[()=>o.e(91632).then(o.t.bind(o,83970,19)),"~docs/default/tag-en-docs-next-tags-table-af0.json",83970],cc70881c:[()=>o.e(41799).then(o.bind(o,28672)),"@site/i18n/en/docusaurus-plugin-content-docs/current/03-faq.mdx",28672],ccc49370:[()=>Promise.all([o.e(12176),o.e(57742),o.e(29116),o.e(68232),o.e(66344)]).then(o.bind(o,65344)),"@theme/BlogPostPage",65344],cce58311:[()=>o.e(57572).then(o.t.bind(o,4704,19)),"~docs/default/tag-en-docs-next-tags-dialog-71e.json",4704],cd00b257:[()=>Promise.all([o.e(71222),o.e(33840),o.e(12656)]).then(o.bind(o,44416)),"@site/docs/30-components/accordion.mdx",44416],cd146ec6:[()=>o.e(42086).then(o.t.bind(o,44320,19)),"~docs/default/tag-en-docs-1-7-tags-table-d91.json",44320],cd419cfe:[()=>Promise.all([o.e(71222),o.e(33840),o.e(59208)]).then(o.bind(o,36980)),"@site/versioned_docs/version-1.5/30-components/link.mdx",36980],cdb3e537:[()=>o.e(81936).then(o.t.bind(o,49872,19)),"~docs/default/tag-en-docs-1-7-tags-getting-started-6a5.json",49872],cdba48d9:[()=>o.e(11852).then(o.bind(o,81884)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/03-faq.mdx",81884],cee0c691:[()=>o.e(84481).then(o.bind(o,63e3)),"@site/blog/2023-07-11.mdx?truncated=true",63e3],cf341f49:[()=>Promise.all([o.e(71222),o.e(33840),o.e(61320)]).then(o.bind(o,8320)),"@site/versioned_docs/version-1.6/30-components/link-button.mdx",8320],cf6c0bba:[()=>o.e(16244).then(o.t.bind(o,38544,19)),"~docs/default/tag-en-docs-1-6-tags-concept-7a1.json",38544],cfa452cd:[()=>Promise.all([o.e(71222),o.e(33840),o.e(46408)]).then(o.bind(o,89284)),"@site/docs/30-components/table.mdx",89284],d0321619:[()=>Promise.all([o.e(71222),o.e(33840),o.e(67362)]).then(o.bind(o,9333)),"@site/docs/30-components/button.mdx",9333],d03d0562:[()=>Promise.all([o.e(71222),o.e(33840),o.e(85600)]).then(o.bind(o,84648)),"@site/docs/30-components/input-password.mdx",84648],d066942f:[()=>Promise.all([o.e(71222),o.e(33840),o.e(96408)]).then(o.bind(o,66080)),"@site/versioned_docs/version-2.0/30-components/link-button.mdx",66080],d0c40fac:[()=>o.e(19488).then(o.bind(o,76560)),"@site/docs/30-components/icon-icofont.md",76560],d107999e:[()=>Promise.all([o.e(71222),o.e(33840),o.e(29820)]).then(o.bind(o,85316)),"@site/docs/30-components/indented-text.mdx",85316],d2051116:[()=>o.e(70584).then(o.t.bind(o,29072,19)),"~docs/default/tag-en-docs-1-5-tags-skip-nav-446.json",29072],d21c4f5a:[()=>o.e(69036).then(o.bind(o,69073)),"@site/i18n/en/docusaurus-plugin-content-docs/current/50-migration.mdx",69073],d271a743:[()=>Promise.all([o.e(71222),o.e(33840),o.e(90792)]).then(o.bind(o,43728)),"@site/versioned_docs/version-1.5/30-components/indented-text.mdx",43728],d297b7ac:[()=>Promise.all([o.e(71222),o.e(33840),o.e(43672)]).then(o.bind(o,95440)),"@site/docs/30-components/image.mdx",95440],d2f7020a:[()=>o.e(74932).then(o.t.bind(o,31064,19)),"~docs/default/tag-en-docs-tags-input-checkbox-664.json",31064],d347e7f7:[()=>Promise.all([o.e(71222),o.e(33840),o.e(22240)]).then(o.bind(o,90820)),"@site/versioned_docs/version-1.7/30-components/input-range.mdx",90820],d374ea52:[()=>Promise.all([o.e(71222),o.e(33840),o.e(73432)]).then(o.bind(o,21884)),"@site/versioned_docs/version-1.5/30-components/tabs.mdx",21884],d3d70277:[()=>o.e(29904).then(o.bind(o,58752)),"@site/i18n/en/docusaurus-plugin-content-blog/2023-05-12.mdx",58752],d3e65224:[()=>o.e(69944).then(o.bind(o,8288)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/08-expert-slot.mdx",8288],d3fcb450:[()=>o.e(91988).then(o.t.bind(o,78544,19)),"~docs/default/tag-en-docs-tags-tooltip-5c2.json",78544],d40013e9:[()=>o.e(43704).then(o.t.bind(o,90464,19)),"~docs/default/tag-en-docs-1-6-tags-demo-926.json",90464],d4d26bb4:[()=>o.e(59380).then(o.t.bind(o,65248,19)),"~docs/default/tag-en-docs-1-7-tags-quote-8cf.json",65248],d5067ffb:[()=>Promise.all([o.e(71222),o.e(33840),o.e(52522)]).then(o.bind(o,91064)),"@site/versioned_docs/version-1.6/30-components/input-color.mdx",91064],d5231e39:[()=>Promise.all([o.e(71222),o.e(33840),o.e(1244)]).then(o.bind(o,8956)),"@site/versioned_docs/version-1.5/30-components/dialog.mdx",8956],d5f97f9e:[()=>o.e(45936).then(o.t.bind(o,79190,19)),"~docs/default/tag-en-docs-1-6-tags-quality-101.json",79190],d682197d:[()=>o.e(85344).then(o.bind(o,32019)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/40-project/02-license.mdx",32019],d6b19ba9:[()=>Promise.all([o.e(71222),o.e(33840),o.e(69928)]).then(o.bind(o,27408)),"@site/docs/30-components/input-email.mdx",27408],d70a1563:[()=>o.e(38940).then(o.t.bind(o,16538,19)),"~docs/default/tag-en-docs-1-7-tags-heading-853.json",16538],d731b6b4:[()=>o.e(21116).then(o.t.bind(o,92736,19)),"~docs/default/tag-en-docs-tags-abbr-95b.json",92736],d73cad48:[()=>o.e(57532).then(o.t.bind(o,69376,19)),"~docs/default/tag-en-docs-tags-quality-b99.json",69376],d81450e6:[()=>o.e(93648).then(o.t.bind(o,22184,19)),"~docs/default/tag-en-docs-next-tags-accordion-f0a.json",22184],d8a22be0:[()=>o.e(11960).then(o.t.bind(o,49168,19)),"~docs/default/tag-en-docs-tags-beschreibung-f01.json",49168],d8c889c3:[()=>o.e(57752).then(o.t.bind(o,96720,19)),"~docs/default/tag-en-docs-1-5-tags-image-0e9.json",96720],d8da1b6b:[()=>o.e(15896).then(o.t.bind(o,32296,19)),"~docs/default/tag-en-docs-1-5-tags-architecture-a6c.json",32296],d8ecf914:[()=>o.e(47552).then(o.bind(o,29240)),"@site/versioned_docs/version-2.0/20-concepts/05-styling/40-scss.md",29240],d9e81b34:[()=>o.e(22588).then(o.t.bind(o,55568,19)),"~docs/default/tag-en-docs-next-tags-breadcrumb-21d.json",55568],d9f55ca8:[()=>Promise.all([o.e(71222),o.e(33840),o.e(44916)]).then(o.bind(o,24122)),"@site/versioned_docs/version-1.7/30-components/input-radio.mdx",24122],dadb8fa6:[()=>Promise.all([o.e(71222),o.e(33840),o.e(61944)]).then(o.bind(o,45012)),"@site/versioned_docs/version-1.6/30-components/nav.mdx",45012],daee9b54:[()=>o.e(80168).then(o.bind(o,37448)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/40-project/01-history.md",37448],db655677:[()=>o.e(52364).then(o.t.bind(o,47592,19)),"~docs/default/tag-en-docs-next-tags-demo-9bc.json",47592],dc071c67:[()=>o.e(24468).then(o.t.bind(o,41416,19)),"~docs/default/tag-en-docs-next-tags-link-group-057.json",41416],dc16ae48:[()=>o.e(53e3).then(o.t.bind(o,94096,19)),"~docs/default/tag-en-docs-next-tags-input-number-c10.json",94096],dcd18a1c:[()=>o.e(5388).then(o.bind(o,67508)),"@site/versioned_docs/version-1.5/30-components/input-adapter-leanup.md",67508],dce4c10e:[()=>o.e(27316).then(o.bind(o,77924)),"@site/versioned_docs/version-2.0/30-components/tooltip.mdx",77924],dd0abf91:[()=>o.e(66764).then(o.t.bind(o,46472,19)),"~docs/default/tag-en-docs-1-6-tags-button-group-9ce.json",46472],dd5415b9:[()=>o.e(39348).then(o.t.bind(o,29670,19)),"~docs/default/tag-en-docs-1-7-tags-alert-4ff.json",29670],dd742620:[()=>o.e(40360).then(o.bind(o,60416)),"@site/versioned_docs/version-1.6/80-changelog.mdx",60416],dd75c91a:[()=>o.e(11944).then(o.t.bind(o,27352,19)),"~docs/default/tag-en-docs-1-5-tags-logo-9e3.json",27352],de7ef2a5:[()=>o.e(44276).then(o.t.bind(o,46164,19)),"~docs/default/tag-en-docs-1-5-tags-button-group-c0f.json",46164],dea29fdf:[()=>o.e(88600).then(o.bind(o,44060)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/10-get-started/7-playground.mdx",44060],ded624d2:[()=>Promise.all([o.e(71222),o.e(33840),o.e(85974)]).then(o.bind(o,5056)),"@site/versioned_docs/version-1.6/30-components/textarea.mdx",5056],df203c0f:[()=>Promise.all([o.e(12176),o.e(33400)]).then(o.bind(o,88152)),"@theme/DocTagDocListPage",88152],df5023d6:[()=>o.e(97652).then(o.t.bind(o,5536,19)),"~docs/default/tag-en-docs-1-7-tags-license-106.json",5536],df8f6e73:[()=>Promise.all([o.e(71222),o.e(33840),o.e(51428)]).then(o.bind(o,20536)),"@site/versioned_docs/version-1.6/30-components/input-email.mdx",20536],dfea8aa4:[()=>o.e(72380).then(o.bind(o,55188)),"@site/versioned_docs/version-1.7/30-components/input-adapter-leanup.md",55188],e0716d52:[()=>o.e(78408).then(o.t.bind(o,59472,19)),"~docs/default/tag-en-docs-1-5-tags-table-f88.json",59472],e0869dd1:[()=>Promise.all([o.e(71222),o.e(33840),o.e(30857)]).then(o.bind(o,68888)),"@site/docs/30-components/avatar.mdx",68888],e09ab922:[()=>Promise.all([o.e(71222),o.e(33840),o.e(79816)]).then(o.bind(o,31679)),"@site/versioned_docs/version-1.7/30-components/button-link.mdx",31679],e10058ae:[()=>Promise.all([o.e(71222),o.e(33840),o.e(26988)]).then(o.bind(o,10424)),"@site/versioned_docs/version-1.7/30-components/input-file.mdx",10424],e195c68f:[()=>Promise.all([o.e(71222),o.e(33840),o.e(62744)]).then(o.bind(o,62239)),"@site/docs/30-components/icon.mdx",62239],e1c9af09:[()=>Promise.all([o.e(57742),o.e(79052)]).then(o.bind(o,32228)),"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/05-styling/34-theming.mdx",32228],e24b3654:[()=>o.e(66284).then(o.t.bind(o,24132,19)),"~docs/default/tag-en-docs-1-5-tags-heading-b35.json",24132],e25a475d:[()=>o.e(92248).then(o.bind(o,29584)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/10-datenschutz.mdx",29584],e29653af:[()=>Promise.all([o.e(71222),o.e(33840),o.e(90536)]).then(o.bind(o,32332)),"@site/versioned_docs/version-1.5/30-components/quote.mdx",32332],e2b7adf4:[()=>o.e(14004).then(o.t.bind(o,10192,19)),"~docs/default/tag-en-docs-1-5-tags-beschreibung-444.json",10192],e300e060:[()=>o.e(93438).then(o.bind(o,45228)),"@site/i18n/en/docusaurus-plugin-content-docs/current/10-get-started/5-frameworks.mdx",45228],e3217486:[()=>Promise.all([o.e(71222),o.e(33840),o.e(14968)]).then(o.bind(o,30216)),"@site/versioned_docs/version-1.7/30-components/input-number.mdx",30216],e330034d:[()=>o.e(23600).then(o.t.bind(o,20304,19)),"~docs/default/tag-en-docs-1-6-tags-accessibility-009.json",20304],e337e33d:[()=>Promise.all([o.e(71222),o.e(33840),o.e(77568)]).then(o.bind(o,18020)),"@site/versioned_docs/version-2.0/30-components/indented-text.mdx",18020],e3803bd7:[()=>Promise.all([o.e(71222),o.e(33840),o.e(8548)]).then(o.bind(o,19576)),"@site/versioned_docs/version-1.5/30-components/input-checkbox.mdx",19576],e3c9e79c:[()=>o.e(4152).then(o.t.bind(o,5330,19)),"~docs/default/tag-en-docs-1-5-tags-getting-started-bf7.json",5330],e4655929:[()=>o.e(91804).then(o.bind(o,47200)),"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0/99-impressum.mdx",47200],e538d316:[()=>o.e(12296).then(o.bind(o,81676)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/99-impressum.mdx",81676],e561e33f:[()=>o.e(31808).then(o.t.bind(o,45134,19)),"~docs/default/tag-en-docs-1-5-tags-concept-195.json",45134],e58f3c5e:[()=>Promise.all([o.e(71222),o.e(33840),o.e(78940)]).then(o.bind(o,86788)),"@site/versioned_docs/version-2.0/30-components/nav.mdx",86788],e5a98b7d:[()=>o.e(67652).then(o.t.bind(o,94408,19)),"~docs/default/tag-en-docs-1-6-tags-toast-5a3.json",94408],e5cadee1:[()=>o.e(99108).then(o.t.bind(o,1152,19)),"~docs/default/tag-en-docs-1-7-tags-privacy-be4.json",1152],e632c5cd:[()=>o.e(21836).then(o.t.bind(o,81986,19)),"~docs/default/tag-en-docs-next-tags-tree-item-6c1.json",81986],e652b121:[()=>Promise.all([o.e(71222),o.e(33840),o.e(20020)]).then(o.bind(o,98432)),"@site/docs/30-components/modal.mdx",98432],e717655a:[()=>o.e(24804).then(o.t.bind(o,22920,19)),"~docs/default/tag-en-docs-tags-heading-020.json",22920],e71b2629:[()=>o.e(84649).then(o.t.bind(o,5504,19)),"~docs/default/tag-en-docs-1-7-tags-spin-df8.json",5504],e78c3e78:[()=>Promise.all([o.e(71222),o.e(33840),o.e(92596)]).then(o.bind(o,94730)),"@site/versioned_docs/version-2.0/30-components/table.mdx",94730],e80dfc29:[()=>o.e(14596).then(o.t.bind(o,64012,19)),"~docs/default/tag-en-docs-1-6-tags-konzept-d80.json",64012],e86aadd1:[()=>o.e(97225).then(o.t.bind(o,28736,19)),"~docs/default/tag-en-docs-1-5-tags-architektur-791.json",28736],e878b69c:[()=>o.e(97376).then(o.bind(o,79220)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/09-formular.mdx",79220],e8800da1:[()=>o.e(70448).then(o.t.bind(o,4800,19)),"~docs/default/tag-en-docs-1-7-tags-konzept-fa8.json",4800],e886ae3d:[()=>Promise.all([o.e(71222),o.e(33840),o.e(12621)]).then(o.bind(o,67188)),"@site/docs/30-components/heading.mdx",67188],e8910f50:[()=>o.e(23008).then(o.t.bind(o,32070,19)),"~docs/default/tag-en-docs-1-6-tags-input-radio-1ea.json",32070],e8f20fc6:[()=>o.e(28064).then(o.t.bind(o,19e3,19)),"~docs/default/tag-en-docs-1-7-tags-zukunft-e9e.json",19e3],e90134bb:[()=>Promise.all([o.e(71222),o.e(33840),o.e(31556)]).then(o.bind(o,85464)),"@site/versioned_docs/version-1.5/30-components/form.mdx",85464],e921c150:[()=>Promise.all([o.e(71222),o.e(33840),o.e(57776)]).then(o.bind(o,78424)),"@site/docs/30-components/badge.mdx",78424],e9267460:[()=>o.e(97248).then(o.t.bind(o,78224,19)),"~docs/default/tag-en-docs-tags-beispiele-a47.json",78224],e92ab757:[()=>o.e(63964).then(o.t.bind(o,31092,19)),"~docs/default/tag-en-docs-1-6-tags-logo-aab.json",31092],e94d161c:[()=>o.e(10420).then(o.bind(o,77184)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/05-styling/35-designer.mdx",77184],e9c94793:[()=>o.e(63728).then(o.t.bind(o,53488,19)),"~docs/default/tag-en-docs-next-tags-bik-bitv-c59.json",53488],ea1dbb79:[()=>o.e(11756).then(o.t.bind(o,2640,19)),"~docs/default/tag-en-docs-1-7-tags-select-5eb.json",2640],ea4c8653:[()=>o.e(75780).then(o.t.bind(o,84536,19)),"~docs/default/tag-en-docs-next-tags-toast-e78.json",84536],ea69a21a:[()=>o.e(99909).then(o.bind(o,26520)),"@site/i18n/en/docusaurus-plugin-content-docs/current/90-health-state.mdx",26520],ead21773:[()=>o.e(1348).then(o.t.bind(o,20502,19)),"~docs/default/tag-en-docs-next-tags-input-checkbox-961.json",20502],eaddc26e:[()=>o.e(45532).then(o.t.bind(o,13920,19)),"~docs/default/tag-en-docs-1-6-tags-popover-9fb.json",13920],eb218a2c:[()=>Promise.all([o.e(71222),o.e(33840),o.e(66856)]).then(o.bind(o,99662)),"@site/versioned_docs/version-1.6/30-components/input-text.mdx",99662],eb74f347:[()=>o.e(56184).then(o.bind(o,38304)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/07-swizzling.md",38304],eb7b4551:[()=>o.e(32092).then(o.bind(o,59664)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/90-health-state.mdx",59664],eb7f02d9:[()=>o.e(21828).then(o.t.bind(o,57624,19)),"~docs/default/tag-en-docs-1-5-tags-characteristics-d6b.json",57624],ec172bfc:[()=>Promise.all([o.e(71222),o.e(33840),o.e(40128)]).then(o.bind(o,82598)),"@site/versioned_docs/version-1.5/30-components/input-date.mdx",82598],ecdc94ec:[()=>o.e(14352).then(o.t.bind(o,81352,19)),"~docs/default/tag-en-docs-1-6-tags-heading-4a1.json",81352],ecf98716:[()=>o.e(49288).then(o.t.bind(o,56024,19)),"~docs/default/tag-en-docs-1-6-tags-input-file-769.json",56024],ee078f0e:[()=>o.e(79652).then(o.t.bind(o,57824,19)),"~docs/default/tag-en-docs-tags-tabs-503.json",57824],ee3e7e54:[()=>o.e(20780).then(o.t.bind(o,80928,19)),"~docs/default/tag-en-docs-next-tags-license-f07.json",80928],ef4ce23d:[()=>o.e(91904).then(o.bind(o,98556)),"@site/docs/30-components/input-adapter-leanup.md",98556],ef6871af:[()=>Promise.all([o.e(78384),o.e(31346)]).then(o.bind(o,2404)),"@site/versioned_docs/version-1.6/60-test-results.mdx",2404],ef8e6c2c:[()=>o.e(4952).then(o.t.bind(o,72024,19)),"~docs/default/tag-en-docs-next-tags-konzept-fbc.json",72024],efbb4260:[()=>Promise.all([o.e(71222),o.e(33840),o.e(35936)]).then(o.bind(o,62104)),"@site/versioned_docs/version-2.0/30-components/kolibri.mdx",62104],f14ed1a4:[()=>o.e(59388).then(o.t.bind(o,70642,19)),"~docs/default/tag-en-docs-1-6-tags-attributes-810.json",70642],f17afa5d:[()=>o.e(57764).then(o.t.bind(o,22128,19)),"~docs/default/tag-en-docs-next-tags-concept-b59.json",22128],f1c45c1e:[()=>o.e(42160).then(o.t.bind(o,15214,19)),"~docs/default/tag-en-docs-1-7-tags-roadmap-3dc.json",15214],f221b27a:[()=>o.e(93784).then(o.t.bind(o,86214,19)),"~docs/default/tag-en-docs-1-6-tags-input-email-bae.json",86214],f2c3fd49:[()=>o.e(23645).then(o.t.bind(o,24616,19)),"~docs/default/tag-en-docs-next-tags-arc-42-8a0.json",24616],f2c721dc:[()=>Promise.all([o.e(71222),o.e(33840),o.e(62440)]).then(o.bind(o,60596)),"@site/versioned_docs/version-1.6/30-components/breadcrumb.mdx",60596],f331e2a4:[()=>o.e(91424).then(o.t.bind(o,72e3,19)),"~docs/default/tag-en-docs-1-6-tags-input-date-bfe.json",72e3],f35cc23e:[()=>o.e(13316).then(o.bind(o,21784)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/09-formular.mdx",21784],f3737568:[()=>Promise.all([o.e(71222),o.e(33840),o.e(61586)]).then(o.bind(o,74296)),"@site/versioned_docs/version-1.6/30-components/form.mdx",74296],f38a3566:[()=>Promise.all([o.e(71222),o.e(33840),o.e(48860)]).then(o.bind(o,33948)),"@site/versioned_docs/version-1.6/30-components/icon.mdx",33948],f393e66b:[()=>Promise.all([o.e(71222),o.e(33840),o.e(2312)]).then(o.bind(o,27480)),"@site/versioned_docs/version-2.0/30-components/input-radio.mdx",27480],f3a1d1ec:[()=>o.e(50928).then(o.t.bind(o,12408,19)),"~docs/default/tag-en-docs-1-5-tags-attributes-81c.json",12408],f3ff4c2a:[()=>o.e(75440).then(o.bind(o,44356)),"@site/versioned_docs/version-2.0/30-components/popover.mdx",44356],f40efcb9:[()=>o.e(88344).then(o.t.bind(o,55464,19)),"~docs/default/tag-en-docs-tags-table-157.json",55464],f431d406:[()=>o.e(90672).then(o.t.bind(o,15848,19)),"~docs/default/tag-en-docs-1-5-tags-security-74f.json",15848],f455a826:[()=>Promise.all([o.e(71222),o.e(33840),o.e(91380)]).then(o.bind(o,30946)),"@site/versioned_docs/version-1.5/30-components/toast.mdx",30946],f47f64d0:[()=>Promise.all([o.e(71222),o.e(46264)]).then(o.bind(o,48900)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/02-properties.mdx",48900],f4942eda:[()=>o.e(57392).then(o.t.bind(o,93970,19)),"~docs/default/tag-en-docs-tags-input-text-c45.json",93970],f4b11c06:[()=>o.e(63432).then(o.t.bind(o,98512,19)),"~docs/default/tag-en-docs-1-5-tags-popover-0ae.json",98512],f4b30b28:[()=>Promise.all([o.e(71222),o.e(33840),o.e(26616)]).then(o.bind(o,46516)),"@site/docs/30-components/input-checkbox.mdx",46516],f4bc79a3:[()=>o.e(56040).then(o.t.bind(o,37864,19)),"~docs/default/tag-en-docs-next-tags-span-120.json",37864],f50aeacd:[()=>o.e(84124).then(o.bind(o,62964)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/40-project/02-license.mdx",62964],f597457d:[()=>o.e(22732).then(o.bind(o,66096)),"@site/versioned_docs/version-1.7/30-components/input-radio-group.md",66096],f60f4446:[()=>o.e(21920).then(o.t.bind(o,37992,19)),"~docs/default/tag-en-docs-next-tags-legal-1c4.json",37992],f6208f34:[()=>o.e(704).then(o.bind(o,68872)),"@site/blog/2023-08-29.mdx?truncated=true",68872],f6862d36:[()=>o.e(98364).then(o.t.bind(o,97456,19)),"~docs/default/tag-en-docs-next-tags-attributes-dfa.json",97456],f68ab913:[()=>Promise.all([o.e(57742),o.e(62215)]).then(o.bind(o,66028)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/05-styling/34-theming.mdx",66028],f6cbeee1:[()=>o.e(78504).then(o.t.bind(o,96912,19)),"~blog/default/en-blog-archive-10f.json",96912],f6ce4229:[()=>o.e(99364).then(o.bind(o,42164)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/40-project/01-history.md",42164],f6d075be:[()=>o.e(1756).then(o.t.bind(o,92960,19)),"~docs/default/tag-en-docs-1-7-tags-input-range-be6.json",92960],f6de908d:[()=>o.e(82508).then(o.t.bind(o,87896,19)),"~docs/default/tag-en-docs-tags-historical-9ae.json",87896],f76bb3db:[()=>o.e(18868).then(o.t.bind(o,8470,19)),"~docs/default/tag-en-docs-tags-spin-bd6.json",8470],f8234a5f:[()=>o.e(47784).then(o.t.bind(o,69048,19)),"~docs/default/tag-en-docs-1-6-tags-button-link-00d.json",69048],f83cf96b:[()=>o.e(85668).then(o.t.bind(o,5616,19)),"~blog/default/en-blog-tags-spec-4fd.json",5616],f86fda7d:[()=>o.e(98432).then(o.t.bind(o,87950,19)),"~docs/default/tag-en-docs-1-6-tags-zukunft-cb3.json",87950],f88cea26:[()=>o.e(16584).then(o.t.bind(o,70464,19)),"~docs/default/tag-en-docs-1-7-tags-modal-0f4.json",70464],f95954be:[()=>o.e(54736).then(o.t.bind(o,10468,19)),"~docs/default/tag-en-docs-1-7-tags-accordion-908.json",10468],f968c79d:[()=>Promise.all([o.e(71222),o.e(33840),o.e(26728)]).then(o.bind(o,86658)),"@site/docs/30-components/input-date.mdx",86658],f96c738b:[()=>o.e(7098).then(o.bind(o,94236)),"@site/versioned_docs/version-1.5/40-project/04-roadmap.mdx",94236],f990795d:[()=>o.e(77328).then(o.t.bind(o,51560,19)),"~docs/default/tag-en-docs-1-5-tags-arc-42-1c6.json",51560],fa812ace:[()=>o.e(75968).then(o.t.bind(o,23552,19)),"~docs/default/tag-en-docs-1-7-tags-input-text-9aa.json",23552],fb4c52aa:[()=>o.e(89568).then(o.t.bind(o,19456,19)),"~docs/default/tag-en-docs-1-7-tags-conzept-a96.json",19456],fba6c282:[()=>o.e(73832).then(o.t.bind(o,75072,19)),"~blog/default/en-blog-038.json",75072],fc872357:[()=>o.e(33116).then(o.t.bind(o,18002,19)),"~docs/default/tag-en-docs-1-5-tags-leagal-d85.json",18002],fcab1757:[()=>o.e(42764).then(o.bind(o,90828)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/40-project/01-history.md",90828],fcaca178:[()=>o.e(3208).then(o.bind(o,34444)),"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/20-concepts/15-sicherheit.mdx",34444],fcffe105:[()=>Promise.all([o.e(71222),o.e(33840),o.e(67648)]).then(o.bind(o,39080)),"@site/versioned_docs/version-2.0/30-components/accordion.mdx",39080],fd0abc84:[()=>Promise.all([o.e(71222),o.e(33840),o.e(92884)]).then(o.bind(o,24696)),"@site/docs/30-components/spin.mdx",24696],fdcf5a0d:[()=>o.e(97040).then(o.bind(o,30612)),"@site/versioned_docs/version-2.0/30-components/input-adapter-leanup.md",30612],fec2ec7a:[()=>o.e(47632).then(o.t.bind(o,49056,19)),"~docs/default/tag-en-docs-1-5-tags-pagination-d34.json",49056],fefc82b6:[()=>o.e(51670).then(o.t.bind(o,59750,19)),"~docs/default/tag-en-docs-1-7-tags-architektur-3bf.json",59750],ff871469:[()=>o.e(70404).then(o.t.bind(o,97330,19)),"~docs/default/tags-list-2-0-prop-2f9.json",97330],ff8990cc:[()=>Promise.all([o.e(71222),o.e(33840),o.e(98604)]).then(o.bind(o,7028)),"@site/versioned_docs/version-1.5/30-components/textarea.mdx",7028]};var s=o(2488);function c(e){let{error:t,retry:o,pastDelay:n}=e;return t?(0,s.jsxs)("div",{style:{textAlign:"center",color:"#fff",backgroundColor:"#fa383e",borderColor:"#fa383e",borderStyle:"solid",borderRadius:"0.25rem",borderWidth:"1px",boxSizing:"border-box",display:"block",padding:"1rem",flex:"0 0 50%",marginLeft:"25%",marginRight:"25%",marginTop:"5rem",maxWidth:"50%",width:"100%"},children:[(0,s.jsx)("p",{children:String(t)}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"button",onClick:o,children:"Retry"})})]}):n?(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,s.jsx)("svg",{id:"loader",style:{width:128,height:110,position:"absolute",top:"calc(100vh - 64%)"},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#61dafb",children:(0,s.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[(0,s.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,s.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,s.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,s.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,s.jsx)("circle",{cx:"22",cy:"22",r:"8",children:(0,s.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})}):null}var l=o(75428),d=o(49693);function p(e,t){if("*"===e)return r()({loading:c,loader:()=>o.e(37627).then(o.bind(o,37627)),modules:["@theme/NotFound"],webpack:()=>[37627],render(e,t){const o=e.default;return(0,s.jsx)(d.Y,{value:{plugin:{name:"native",id:"default"}},children:(0,s.jsx)(o,{...t})})}});const n=a[`${e}-${t}`],p={},u=[],f=[],h=(0,l.c)(n);return Object.entries(h).forEach((e=>{let[t,o]=e;const n=i[o];n&&(p[t]=n[0],u.push(n[1]),f.push(n[2]))})),r().Map({loading:c,loader:p,modules:u,webpack:()=>f,render(t,o){const r=JSON.parse(JSON.stringify(n));Object.entries(t).forEach((t=>{let[o,n]=t;const a=n.default;if(!a)throw new Error(`The page component at ${e} doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.`);"object"!=typeof a&&"function"!=typeof a||Object.keys(n).filter((e=>"default"!==e)).forEach((e=>{a[e]=n[e]}));let i=r;const s=o.split(".");s.slice(0,-1).forEach((e=>{i=i[e]})),i[s[s.length-1]]=a}));const a=r.__comp;delete r.__comp;const i=r.__context;return delete r.__context,(0,s.jsx)(d.Y,{value:i,children:(0,s.jsx)(a,{...r,...o})})}})}const u=[{path:"/en/blog",component:p("/en/blog","1da"),exact:!0},{path:"/en/blog/2023/01/04",component:p("/en/blog/2023/01/04","be6"),exact:!0},{path:"/en/blog/2023/01/09",component:p("/en/blog/2023/01/09","5ab"),exact:!0},{path:"/en/blog/2023/02/02",component:p("/en/blog/2023/02/02","b60"),exact:!0},{path:"/en/blog/2023/02/23",component:p("/en/blog/2023/02/23","4be"),exact:!0},{path:"/en/blog/2023/05/03",component:p("/en/blog/2023/05/03","c28"),exact:!0},{path:"/en/blog/2023/05/12",component:p("/en/blog/2023/05/12","1e4"),exact:!0},{path:"/en/blog/2023/06/05",component:p("/en/blog/2023/06/05","7e3"),exact:!0},{path:"/en/blog/2023/06/08",component:p("/en/blog/2023/06/08","d7f"),exact:!0},{path:"/en/blog/2023/06/28",component:p("/en/blog/2023/06/28","626"),exact:!0},{path:"/en/blog/2023/07/11",component:p("/en/blog/2023/07/11","054"),exact:!0},{path:"/en/blog/2023/07/26",component:p("/en/blog/2023/07/26","fda"),exact:!0},{path:"/en/blog/2023/08/29",component:p("/en/blog/2023/08/29","df3"),exact:!0},{path:"/en/blog/archive",component:p("/en/blog/archive","c78"),exact:!0},{path:"/en/blog/page/2",component:p("/en/blog/page/2","cd9"),exact:!0},{path:"/en/blog/page/3",component:p("/en/blog/page/3","3a1"),exact:!0},{path:"/en/blog/page/4",component:p("/en/blog/page/4","a9e"),exact:!0},{path:"/en/blog/tags",component:p("/en/blog/tags","477"),exact:!0},{path:"/en/blog/tags/aria",component:p("/en/blog/tags/aria","566"),exact:!0},{path:"/en/blog/tags/button",component:p("/en/blog/tags/button","0af"),exact:!0},{path:"/en/blog/tags/corporate-design",component:p("/en/blog/tags/corporate-design","72c"),exact:!0},{path:"/en/blog/tags/design-system",component:p("/en/blog/tags/design-system","9c6"),exact:!0},{path:"/en/blog/tags/font",component:p("/en/blog/tags/font","cf8"),exact:!0},{path:"/en/blog/tags/icon",component:p("/en/blog/tags/icon","270"),exact:!0},{path:"/en/blog/tags/link",component:p("/en/blog/tags/link","c50"),exact:!0},{path:"/en/blog/tags/neuerungen",component:p("/en/blog/tags/neuerungen","b98"),exact:!0},{path:"/en/blog/tags/release",component:p("/en/blog/tags/release","761"),exact:!0},{path:"/en/blog/tags/seo",component:p("/en/blog/tags/seo","ef0"),exact:!0},{path:"/en/blog/tags/spec",component:p("/en/blog/tags/spec","488"),exact:!0},{path:"/en/blog/tags/style",component:p("/en/blog/tags/style","51e"),exact:!0},{path:"/en/blog/tags/styleguide",component:p("/en/blog/tags/styleguide","013"),exact:!0},{path:"/en/blog/tags/styling",component:p("/en/blog/tags/styling","daf"),exact:!0},{path:"/en/blog/tags/theme",component:p("/en/blog/tags/theme","cf0"),exact:!0},{path:"/en/blog/tags/theming",component:p("/en/blog/tags/theming","414"),exact:!0},{path:"/en/blog/tags/tutorial",component:p("/en/blog/tags/tutorial","a6c"),exact:!0},{path:"/en/blog/tags/website",component:p("/en/blog/tags/website","23c"),exact:!0},{path:"/en/docs",component:p("/en/docs","9a9"),routes:[{path:"/en/docs/1.5",component:p("/en/docs/1.5","c12"),routes:[{path:"/en/docs/1.5/tags",component:p("/en/docs/1.5/tags","a9e"),exact:!0},{path:"/en/docs/1.5/tags/abbr",component:p("/en/docs/1.5/tags/abbr","512"),exact:!0},{path:"/en/docs/1.5/tags/accessibility",component:p("/en/docs/1.5/tags/accessibility","505"),exact:!0},{path:"/en/docs/1.5/tags/accordion",component:p("/en/docs/1.5/tags/accordion","f27"),exact:!0},{path:"/en/docs/1.5/tags/alert",component:p("/en/docs/1.5/tags/alert","948"),exact:!0},{path:"/en/docs/1.5/tags/arc-42",component:p("/en/docs/1.5/tags/arc-42","b04"),exact:!0},{path:"/en/docs/1.5/tags/architecture",component:p("/en/docs/1.5/tags/architecture","24d"),exact:!0},{path:"/en/docs/1.5/tags/architektur",component:p("/en/docs/1.5/tags/architektur","23d"),exact:!0},{path:"/en/docs/1.5/tags/architekture",component:p("/en/docs/1.5/tags/architekture","227"),exact:!0},{path:"/en/docs/1.5/tags/attributes",component:p("/en/docs/1.5/tags/attributes","e20"),exact:!0},{path:"/en/docs/1.5/tags/backlog",component:p("/en/docs/1.5/tags/backlog","310"),exact:!0},{path:"/en/docs/1.5/tags/badge",component:p("/en/docs/1.5/tags/badge","710"),exact:!0},{path:"/en/docs/1.5/tags/beispiele",component:p("/en/docs/1.5/tags/beispiele","886"),exact:!0},{path:"/en/docs/1.5/tags/beschreibung",component:p("/en/docs/1.5/tags/beschreibung","ee3"),exact:!0},{path:"/en/docs/1.5/tags/bik-bitv",component:p("/en/docs/1.5/tags/bik-bitv","5db"),exact:!0},{path:"/en/docs/1.5/tags/breadcrumb",component:p("/en/docs/1.5/tags/breadcrumb","d3d"),exact:!0},{path:"/en/docs/1.5/tags/button",component:p("/en/docs/1.5/tags/button","3d2"),exact:!0},{path:"/en/docs/1.5/tags/button-group",component:p("/en/docs/1.5/tags/button-group","90c"),exact:!0},{path:"/en/docs/1.5/tags/button-link",component:p("/en/docs/1.5/tags/button-link","b3d"),exact:!0},{path:"/en/docs/1.5/tags/card",component:p("/en/docs/1.5/tags/card","1bc"),exact:!0},{path:"/en/docs/1.5/tags/changelog",component:p("/en/docs/1.5/tags/changelog","fde"),exact:!0},{path:"/en/docs/1.5/tags/characteristics",component:p("/en/docs/1.5/tags/characteristics","ade"),exact:!0},{path:"/en/docs/1.5/tags/concept",component:p("/en/docs/1.5/tags/concept","7c0"),exact:!0},{path:"/en/docs/1.5/tags/conzept",component:p("/en/docs/1.5/tags/conzept","92f"),exact:!0},{path:"/en/docs/1.5/tags/demo",component:p("/en/docs/1.5/tags/demo","d12"),exact:!0},{path:"/en/docs/1.5/tags/details",component:p("/en/docs/1.5/tags/details","924"),exact:!0},{path:"/en/docs/1.5/tags/dialog",component:p("/en/docs/1.5/tags/dialog","abb"),exact:!0},{path:"/en/docs/1.5/tags/faq",component:p("/en/docs/1.5/tags/faq","b3b"),exact:!0},{path:"/en/docs/1.5/tags/form",component:p("/en/docs/1.5/tags/form","e46"),exact:!0},{path:"/en/docs/1.5/tags/getting-started",component:p("/en/docs/1.5/tags/getting-started","d73"),exact:!0},{path:"/en/docs/1.5/tags/heading",component:p("/en/docs/1.5/tags/heading","7ea"),exact:!0},{path:"/en/docs/1.5/tags/historical",component:p("/en/docs/1.5/tags/historical","882"),exact:!0},{path:"/en/docs/1.5/tags/icon",component:p("/en/docs/1.5/tags/icon","4a9"),exact:!0},{path:"/en/docs/1.5/tags/image",component:p("/en/docs/1.5/tags/image","302"),exact:!0},{path:"/en/docs/1.5/tags/indented-text",component:p("/en/docs/1.5/tags/indented-text","4ac"),exact:!0},{path:"/en/docs/1.5/tags/input-checkbox",component:p("/en/docs/1.5/tags/input-checkbox","f0e"),exact:!0},{path:"/en/docs/1.5/tags/input-color",component:p("/en/docs/1.5/tags/input-color","89b"),exact:!0},{path:"/en/docs/1.5/tags/input-date",component:p("/en/docs/1.5/tags/input-date","f62"),exact:!0},{path:"/en/docs/1.5/tags/input-email",component:p("/en/docs/1.5/tags/input-email","9ca"),exact:!0},{path:"/en/docs/1.5/tags/input-file",component:p("/en/docs/1.5/tags/input-file","728"),exact:!0},{path:"/en/docs/1.5/tags/input-number",component:p("/en/docs/1.5/tags/input-number","b3d"),exact:!0},{path:"/en/docs/1.5/tags/input-password",component:p("/en/docs/1.5/tags/input-password","d69"),exact:!0},{path:"/en/docs/1.5/tags/input-radio",component:p("/en/docs/1.5/tags/input-radio","b2b"),exact:!0},{path:"/en/docs/1.5/tags/input-range",component:p("/en/docs/1.5/tags/input-range","aef"),exact:!0},{path:"/en/docs/1.5/tags/input-text",component:p("/en/docs/1.5/tags/input-text","44f"),exact:!0},{path:"/en/docs/1.5/tags/koli-bri",component:p("/en/docs/1.5/tags/koli-bri","0fb"),exact:!0},{path:"/en/docs/1.5/tags/konzept",component:p("/en/docs/1.5/tags/konzept","7c3"),exact:!0},{path:"/en/docs/1.5/tags/leagal",component:p("/en/docs/1.5/tags/leagal","d84"),exact:!0},{path:"/en/docs/1.5/tags/legal",component:p("/en/docs/1.5/tags/legal","f0b"),exact:!0},{path:"/en/docs/1.5/tags/license",component:p("/en/docs/1.5/tags/license","6c8"),exact:!0},{path:"/en/docs/1.5/tags/link",component:p("/en/docs/1.5/tags/link","ccb"),exact:!0},{path:"/en/docs/1.5/tags/link-button",component:p("/en/docs/1.5/tags/link-button","982"),exact:!0},{path:"/en/docs/1.5/tags/link-group",component:p("/en/docs/1.5/tags/link-group","5b3"),exact:!0},{path:"/en/docs/1.5/tags/lizence",component:p("/en/docs/1.5/tags/lizence","512"),exact:!0},{path:"/en/docs/1.5/tags/logo",component:p("/en/docs/1.5/tags/logo","124"),exact:!0},{path:"/en/docs/1.5/tags/manifest",component:p("/en/docs/1.5/tags/manifest","6e4"),exact:!0},{path:"/en/docs/1.5/tags/modal",component:p("/en/docs/1.5/tags/modal","60d"),exact:!0},{path:"/en/docs/1.5/tags/nav",component:p("/en/docs/1.5/tags/nav","11b"),exact:!0},{path:"/en/docs/1.5/tags/pagination",component:p("/en/docs/1.5/tags/pagination","3c4"),exact:!0},{path:"/en/docs/1.5/tags/popover",component:p("/en/docs/1.5/tags/popover","da3"),exact:!0},{path:"/en/docs/1.5/tags/privacy",component:p("/en/docs/1.5/tags/privacy","821"),exact:!0},{path:"/en/docs/1.5/tags/progress",component:p("/en/docs/1.5/tags/progress","f4c"),exact:!0},{path:"/en/docs/1.5/tags/properties",component:p("/en/docs/1.5/tags/properties","c5d"),exact:!0},{path:"/en/docs/1.5/tags/quality",component:p("/en/docs/1.5/tags/quality","961"),exact:!0},{path:"/en/docs/1.5/tags/quote",component:p("/en/docs/1.5/tags/quote","b57"),exact:!0},{path:"/en/docs/1.5/tags/roadmap",component:p("/en/docs/1.5/tags/roadmap","533"),exact:!0},{path:"/en/docs/1.5/tags/security",component:p("/en/docs/1.5/tags/security","057"),exact:!0},{path:"/en/docs/1.5/tags/select",component:p("/en/docs/1.5/tags/select","314"),exact:!0},{path:"/en/docs/1.5/tags/skip-nav",component:p("/en/docs/1.5/tags/skip-nav","b64"),exact:!0},{path:"/en/docs/1.5/tags/span",component:p("/en/docs/1.5/tags/span","ac7"),exact:!0},{path:"/en/docs/1.5/tags/spezifikation",component:p("/en/docs/1.5/tags/spezifikation","4d4"),exact:!0},{path:"/en/docs/1.5/tags/spin",component:p("/en/docs/1.5/tags/spin","76a"),exact:!0},{path:"/en/docs/1.5/tags/split-button",component:p("/en/docs/1.5/tags/split-button","d39"),exact:!0},{path:"/en/docs/1.5/tags/table",component:p("/en/docs/1.5/tags/table","586"),exact:!0},{path:"/en/docs/1.5/tags/tabs",component:p("/en/docs/1.5/tags/tabs","027"),exact:!0},{path:"/en/docs/1.5/tags/textarea",component:p("/en/docs/1.5/tags/textarea","a41"),exact:!0},{path:"/en/docs/1.5/tags/toast",component:p("/en/docs/1.5/tags/toast","728"),exact:!0},{path:"/en/docs/1.5/tags/tooltip",component:p("/en/docs/1.5/tags/tooltip","d6f"),exact:!0},{path:"/en/docs/1.5/tags/version",component:p("/en/docs/1.5/tags/version","846"),exact:!0},{path:"/en/docs/1.5/tags/zukunft",component:p("/en/docs/1.5/tags/zukunft","519"),exact:!0},{path:"/en/docs/1.5",component:p("/en/docs/1.5","30f"),routes:[{path:"/en/docs/1.5",component:p("/en/docs/1.5","2d6"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/changelog",component:p("/en/docs/1.5/changelog","d26"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components",component:p("/en/docs/1.5/components","343"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/abbr",component:p("/en/docs/1.5/components/abbr","779"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/accordion",component:p("/en/docs/1.5/components/accordion","ad1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/alert",component:p("/en/docs/1.5/components/alert","423"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/badge",component:p("/en/docs/1.5/components/badge","b40"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/breadcrumb",component:p("/en/docs/1.5/components/breadcrumb","ec0"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/button",component:p("/en/docs/1.5/components/button","a85"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/button-group",component:p("/en/docs/1.5/components/button-group","d75"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/button-link",component:p("/en/docs/1.5/components/button-link","989"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/card",component:p("/en/docs/1.5/components/card","534"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/details",component:p("/en/docs/1.5/components/details","68f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/dialog",component:p("/en/docs/1.5/components/dialog","c78"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/form",component:p("/en/docs/1.5/components/form","b1e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/heading",component:p("/en/docs/1.5/components/heading","625"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/icon",component:p("/en/docs/1.5/components/icon","0ca"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/icon-font-awesome",component:p("/en/docs/1.5/components/icon-font-awesome","e8d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/icon-icofont",component:p("/en/docs/1.5/components/icon-icofont","a7c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/image",component:p("/en/docs/1.5/components/image","998"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/indented-text",component:p("/en/docs/1.5/components/indented-text","b20"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-adapter-leanup",component:p("/en/docs/1.5/components/input-adapter-leanup","d4a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-checkbox",component:p("/en/docs/1.5/components/input-checkbox","96d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-color",component:p("/en/docs/1.5/components/input-color","ebe"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-date",component:p("/en/docs/1.5/components/input-date","001"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-email",component:p("/en/docs/1.5/components/input-email","dc3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-file",component:p("/en/docs/1.5/components/input-file","326"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-number",component:p("/en/docs/1.5/components/input-number","ef1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-password",component:p("/en/docs/1.5/components/input-password","502"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-radio",component:p("/en/docs/1.5/components/input-radio","dc6"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-radio-group",component:p("/en/docs/1.5/components/input-radio-group","005"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-range",component:p("/en/docs/1.5/components/input-range","7c9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/input-text",component:p("/en/docs/1.5/components/input-text","819"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/kolibri",component:p("/en/docs/1.5/components/kolibri","0b8"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/link",component:p("/en/docs/1.5/components/link","618"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/link-button",component:p("/en/docs/1.5/components/link-button","b3e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/link-group",component:p("/en/docs/1.5/components/link-group","022"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/logo",component:p("/en/docs/1.5/components/logo","137"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/modal",component:p("/en/docs/1.5/components/modal","7d2"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/nav",component:p("/en/docs/1.5/components/nav","383"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/pagination",component:p("/en/docs/1.5/components/pagination","f49"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/popover",component:p("/en/docs/1.5/components/popover","a7e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/progress",component:p("/en/docs/1.5/components/progress","146"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/quote",component:p("/en/docs/1.5/components/quote","b75"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/select",component:p("/en/docs/1.5/components/select","bef"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/skip-nav",component:p("/en/docs/1.5/components/skip-nav","e78"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/span",component:p("/en/docs/1.5/components/span","c1b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/spin",component:p("/en/docs/1.5/components/spin","daa"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/split-button",component:p("/en/docs/1.5/components/split-button","36e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/table",component:p("/en/docs/1.5/components/table","a6f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/tabs",component:p("/en/docs/1.5/components/tabs","7d0"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/textarea",component:p("/en/docs/1.5/components/textarea","4fa"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/toast",component:p("/en/docs/1.5/components/toast","d96"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/tooltip",component:p("/en/docs/1.5/components/tooltip","62e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/components/version",component:p("/en/docs/1.5/components/version","543"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/architecture",component:p("/en/docs/1.5/concepts/architecture","ad5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/datenschutz",component:p("/en/docs/1.5/concepts/datenschutz","fe1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/expert-slot",component:p("/en/docs/1.5/concepts/expert-slot","d54"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/form-input",component:p("/en/docs/1.5/concepts/form-input","f9c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/properties",component:p("/en/docs/1.5/concepts/properties","55d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/sicherheit",component:p("/en/docs/1.5/concepts/sicherheit","cbd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/styling/designer",component:p("/en/docs/1.5/concepts/styling/designer","8d1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/styling/scss",component:p("/en/docs/1.5/concepts/styling/scss","1c5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/styling/theming",component:p("/en/docs/1.5/concepts/styling/theming","5aa"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/swizzling",component:p("/en/docs/1.5/concepts/swizzling","afd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/concepts/testprocedure",component:p("/en/docs/1.5/concepts/testprocedure","662"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/faq",component:p("/en/docs/1.5/faq","8bf"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/formular-handling",component:p("/en/docs/1.5/formular-handling","5f5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/get-started/first-steps",component:p("/en/docs/1.5/get-started/first-steps","42a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/get-started/frameworks",component:p("/en/docs/1.5/get-started/frameworks","9d1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/get-started/playground",component:p("/en/docs/1.5/get-started/playground","f83"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/health-state",component:p("/en/docs/1.5/health-state","593"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/impressum",component:p("/en/docs/1.5/impressum","4d2"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/manifest",component:p("/en/docs/1.5/manifest","290"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/project/history",component:p("/en/docs/1.5/project/history","891"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/project/license",component:p("/en/docs/1.5/project/license","066"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/project/roadmap",component:p("/en/docs/1.5/project/roadmap","a49"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.5/test-results",component:p("/en/docs/1.5/test-results","ba6"),exact:!0,sidebar:"tutorialSidebar"}]}]},{path:"/en/docs/1.6",component:p("/en/docs/1.6","c3a"),routes:[{path:"/en/docs/1.6/tags",component:p("/en/docs/1.6/tags","eda"),exact:!0},{path:"/en/docs/1.6/tags/abbr",component:p("/en/docs/1.6/tags/abbr","f79"),exact:!0},{path:"/en/docs/1.6/tags/accessibility",component:p("/en/docs/1.6/tags/accessibility","d4e"),exact:!0},{path:"/en/docs/1.6/tags/accordion",component:p("/en/docs/1.6/tags/accordion","7dd"),exact:!0},{path:"/en/docs/1.6/tags/alert",component:p("/en/docs/1.6/tags/alert","1ef"),exact:!0},{path:"/en/docs/1.6/tags/arc-42",component:p("/en/docs/1.6/tags/arc-42","037"),exact:!0},{path:"/en/docs/1.6/tags/architecture",component:p("/en/docs/1.6/tags/architecture","2fd"),exact:!0},{path:"/en/docs/1.6/tags/architektur",component:p("/en/docs/1.6/tags/architektur","a24"),exact:!0},{path:"/en/docs/1.6/tags/architekture",component:p("/en/docs/1.6/tags/architekture","607"),exact:!0},{path:"/en/docs/1.6/tags/attributes",component:p("/en/docs/1.6/tags/attributes","79b"),exact:!0},{path:"/en/docs/1.6/tags/avatar",component:p("/en/docs/1.6/tags/avatar","843"),exact:!0},{path:"/en/docs/1.6/tags/backlog",component:p("/en/docs/1.6/tags/backlog","d98"),exact:!0},{path:"/en/docs/1.6/tags/badge",component:p("/en/docs/1.6/tags/badge","f74"),exact:!0},{path:"/en/docs/1.6/tags/beispiele",component:p("/en/docs/1.6/tags/beispiele","bf9"),exact:!0},{path:"/en/docs/1.6/tags/beschreibung",component:p("/en/docs/1.6/tags/beschreibung","f5e"),exact:!0},{path:"/en/docs/1.6/tags/bik-bitv",component:p("/en/docs/1.6/tags/bik-bitv","66f"),exact:!0},{path:"/en/docs/1.6/tags/breadcrumb",component:p("/en/docs/1.6/tags/breadcrumb","ecb"),exact:!0},{path:"/en/docs/1.6/tags/button",component:p("/en/docs/1.6/tags/button","d47"),exact:!0},{path:"/en/docs/1.6/tags/button-group",component:p("/en/docs/1.6/tags/button-group","420"),exact:!0},{path:"/en/docs/1.6/tags/button-link",component:p("/en/docs/1.6/tags/button-link","d65"),exact:!0},{path:"/en/docs/1.6/tags/card",component:p("/en/docs/1.6/tags/card","b6c"),exact:!0},{path:"/en/docs/1.6/tags/changelog",component:p("/en/docs/1.6/tags/changelog","075"),exact:!0},{path:"/en/docs/1.6/tags/characteristics",component:p("/en/docs/1.6/tags/characteristics","55c"),exact:!0},{path:"/en/docs/1.6/tags/concept",component:p("/en/docs/1.6/tags/concept","ac5"),exact:!0},{path:"/en/docs/1.6/tags/conzept",component:p("/en/docs/1.6/tags/conzept","470"),exact:!0},{path:"/en/docs/1.6/tags/demo",component:p("/en/docs/1.6/tags/demo","886"),exact:!0},{path:"/en/docs/1.6/tags/details",component:p("/en/docs/1.6/tags/details","635"),exact:!0},{path:"/en/docs/1.6/tags/dialog",component:p("/en/docs/1.6/tags/dialog","cfa"),exact:!0},{path:"/en/docs/1.6/tags/faq",component:p("/en/docs/1.6/tags/faq","afb"),exact:!0},{path:"/en/docs/1.6/tags/form",component:p("/en/docs/1.6/tags/form","99f"),exact:!0},{path:"/en/docs/1.6/tags/getting-started",component:p("/en/docs/1.6/tags/getting-started","f67"),exact:!0},{path:"/en/docs/1.6/tags/heading",component:p("/en/docs/1.6/tags/heading","64d"),exact:!0},{path:"/en/docs/1.6/tags/historical",component:p("/en/docs/1.6/tags/historical","c12"),exact:!0},{path:"/en/docs/1.6/tags/icon",component:p("/en/docs/1.6/tags/icon","1dd"),exact:!0},{path:"/en/docs/1.6/tags/image",component:p("/en/docs/1.6/tags/image","42e"),exact:!0},{path:"/en/docs/1.6/tags/indented-text",component:p("/en/docs/1.6/tags/indented-text","8e1"),exact:!0},{path:"/en/docs/1.6/tags/input-checkbox",component:p("/en/docs/1.6/tags/input-checkbox","48e"),exact:!0},{path:"/en/docs/1.6/tags/input-color",component:p("/en/docs/1.6/tags/input-color","da8"),exact:!0},{path:"/en/docs/1.6/tags/input-date",component:p("/en/docs/1.6/tags/input-date","b8b"),exact:!0},{path:"/en/docs/1.6/tags/input-email",component:p("/en/docs/1.6/tags/input-email","602"),exact:!0},{path:"/en/docs/1.6/tags/input-file",component:p("/en/docs/1.6/tags/input-file","a4f"),exact:!0},{path:"/en/docs/1.6/tags/input-number",component:p("/en/docs/1.6/tags/input-number","731"),exact:!0},{path:"/en/docs/1.6/tags/input-password",component:p("/en/docs/1.6/tags/input-password","1ac"),exact:!0},{path:"/en/docs/1.6/tags/input-radio",component:p("/en/docs/1.6/tags/input-radio","7b6"),exact:!0},{path:"/en/docs/1.6/tags/input-range",component:p("/en/docs/1.6/tags/input-range","2a0"),exact:!0},{path:"/en/docs/1.6/tags/input-text",component:p("/en/docs/1.6/tags/input-text","4dd"),exact:!0},{path:"/en/docs/1.6/tags/koli-bri",component:p("/en/docs/1.6/tags/koli-bri","131"),exact:!0},{path:"/en/docs/1.6/tags/konzept",component:p("/en/docs/1.6/tags/konzept","f93"),exact:!0},{path:"/en/docs/1.6/tags/leagal",component:p("/en/docs/1.6/tags/leagal","54b"),exact:!0},{path:"/en/docs/1.6/tags/legal",component:p("/en/docs/1.6/tags/legal","176"),exact:!0},{path:"/en/docs/1.6/tags/license",component:p("/en/docs/1.6/tags/license","6fd"),exact:!0},{path:"/en/docs/1.6/tags/link",component:p("/en/docs/1.6/tags/link","ae7"),exact:!0},{path:"/en/docs/1.6/tags/link-button",component:p("/en/docs/1.6/tags/link-button","5e7"),exact:!0},{path:"/en/docs/1.6/tags/link-group",component:p("/en/docs/1.6/tags/link-group","c16"),exact:!0},{path:"/en/docs/1.6/tags/lizence",component:p("/en/docs/1.6/tags/lizence","752"),exact:!0},{path:"/en/docs/1.6/tags/logo",component:p("/en/docs/1.6/tags/logo","19f"),exact:!0},{path:"/en/docs/1.6/tags/manifest",component:p("/en/docs/1.6/tags/manifest","2be"),exact:!0},{path:"/en/docs/1.6/tags/modal",component:p("/en/docs/1.6/tags/modal","77a"),exact:!0},{path:"/en/docs/1.6/tags/nav",component:p("/en/docs/1.6/tags/nav","e6b"),exact:!0},{path:"/en/docs/1.6/tags/pagination",component:p("/en/docs/1.6/tags/pagination","9ab"),exact:!0},{path:"/en/docs/1.6/tags/popover",component:p("/en/docs/1.6/tags/popover","330"),exact:!0},{path:"/en/docs/1.6/tags/privacy",component:p("/en/docs/1.6/tags/privacy","5bf"),exact:!0},{path:"/en/docs/1.6/tags/progress",component:p("/en/docs/1.6/tags/progress","1a9"),exact:!0},{path:"/en/docs/1.6/tags/properties",component:p("/en/docs/1.6/tags/properties","4bc"),exact:!0},{path:"/en/docs/1.6/tags/quality",component:p("/en/docs/1.6/tags/quality","8fa"),exact:!0},{path:"/en/docs/1.6/tags/quote",component:p("/en/docs/1.6/tags/quote","fa5"),exact:!0},{path:"/en/docs/1.6/tags/roadmap",component:p("/en/docs/1.6/tags/roadmap","432"),exact:!0},{path:"/en/docs/1.6/tags/security",component:p("/en/docs/1.6/tags/security","d7b"),exact:!0},{path:"/en/docs/1.6/tags/select",component:p("/en/docs/1.6/tags/select","05e"),exact:!0},{path:"/en/docs/1.6/tags/skip-nav",component:p("/en/docs/1.6/tags/skip-nav","762"),exact:!0},{path:"/en/docs/1.6/tags/span",component:p("/en/docs/1.6/tags/span","979"),exact:!0},{path:"/en/docs/1.6/tags/spezifikation",component:p("/en/docs/1.6/tags/spezifikation","0b4"),exact:!0},{path:"/en/docs/1.6/tags/spin",component:p("/en/docs/1.6/tags/spin","380"),exact:!0},{path:"/en/docs/1.6/tags/split-button",component:p("/en/docs/1.6/tags/split-button","d6a"),exact:!0},{path:"/en/docs/1.6/tags/table",component:p("/en/docs/1.6/tags/table","16e"),exact:!0},{path:"/en/docs/1.6/tags/tabs",component:p("/en/docs/1.6/tags/tabs","2ed"),exact:!0},{path:"/en/docs/1.6/tags/textarea",component:p("/en/docs/1.6/tags/textarea","f23"),exact:!0},{path:"/en/docs/1.6/tags/toast",component:p("/en/docs/1.6/tags/toast","c8d"),exact:!0},{path:"/en/docs/1.6/tags/tooltip",component:p("/en/docs/1.6/tags/tooltip","5ef"),exact:!0},{path:"/en/docs/1.6/tags/version",component:p("/en/docs/1.6/tags/version","9f0"),exact:!0},{path:"/en/docs/1.6/tags/zukunft",component:p("/en/docs/1.6/tags/zukunft","a07"),exact:!0},{path:"/en/docs/1.6",component:p("/en/docs/1.6","07d"),routes:[{path:"/en/docs/1.6",component:p("/en/docs/1.6","fb4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/changelog",component:p("/en/docs/1.6/changelog","ee2"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components",component:p("/en/docs/1.6/components","a99"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/abbr",component:p("/en/docs/1.6/components/abbr","7a4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/accordion",component:p("/en/docs/1.6/components/accordion","7fd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/alert",component:p("/en/docs/1.6/components/alert","f12"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/avatar",component:p("/en/docs/1.6/components/avatar","77e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/badge",component:p("/en/docs/1.6/components/badge","b19"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/breadcrumb",component:p("/en/docs/1.6/components/breadcrumb","bba"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/button",component:p("/en/docs/1.6/components/button","5cf"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/button-group",component:p("/en/docs/1.6/components/button-group","cc1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/button-link",component:p("/en/docs/1.6/components/button-link","705"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/card",component:p("/en/docs/1.6/components/card","e05"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/details",component:p("/en/docs/1.6/components/details","f41"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/dialog",component:p("/en/docs/1.6/components/dialog","81c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/form",component:p("/en/docs/1.6/components/form","f14"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/heading",component:p("/en/docs/1.6/components/heading","0d7"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/icon",component:p("/en/docs/1.6/components/icon","32b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/icon-font-awesome",component:p("/en/docs/1.6/components/icon-font-awesome","333"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/icon-icofont",component:p("/en/docs/1.6/components/icon-icofont","bbf"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/image",component:p("/en/docs/1.6/components/image","989"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/indented-text",component:p("/en/docs/1.6/components/indented-text","40c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-adapter-leanup",component:p("/en/docs/1.6/components/input-adapter-leanup","23d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-checkbox",component:p("/en/docs/1.6/components/input-checkbox","83e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-color",component:p("/en/docs/1.6/components/input-color","f70"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-date",component:p("/en/docs/1.6/components/input-date","891"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-email",component:p("/en/docs/1.6/components/input-email","4b7"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-file",component:p("/en/docs/1.6/components/input-file","977"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-number",component:p("/en/docs/1.6/components/input-number","4f9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-password",component:p("/en/docs/1.6/components/input-password","a22"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-radio",component:p("/en/docs/1.6/components/input-radio","b06"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-radio-group",component:p("/en/docs/1.6/components/input-radio-group","2a0"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-range",component:p("/en/docs/1.6/components/input-range","c20"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/input-text",component:p("/en/docs/1.6/components/input-text","abb"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/kolibri",component:p("/en/docs/1.6/components/kolibri","22c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/link",component:p("/en/docs/1.6/components/link","73d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/link-button",component:p("/en/docs/1.6/components/link-button","445"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/link-group",component:p("/en/docs/1.6/components/link-group","212"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/logo",component:p("/en/docs/1.6/components/logo","27b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/modal",component:p("/en/docs/1.6/components/modal","b82"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/nav",component:p("/en/docs/1.6/components/nav","986"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/pagination",component:p("/en/docs/1.6/components/pagination","d90"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/popover",component:p("/en/docs/1.6/components/popover","6ca"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/progress",component:p("/en/docs/1.6/components/progress","e19"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/quote",component:p("/en/docs/1.6/components/quote","776"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/select",component:p("/en/docs/1.6/components/select","65e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/skip-nav",component:p("/en/docs/1.6/components/skip-nav","175"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/span",component:p("/en/docs/1.6/components/span","403"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/spin",component:p("/en/docs/1.6/components/spin","704"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/split-button",component:p("/en/docs/1.6/components/split-button","cac"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/table",component:p("/en/docs/1.6/components/table","14f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/tabs",component:p("/en/docs/1.6/components/tabs","ea7"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/textarea",component:p("/en/docs/1.6/components/textarea","8c3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/toast",component:p("/en/docs/1.6/components/toast","e44"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/tooltip",component:p("/en/docs/1.6/components/tooltip","089"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/components/version",component:p("/en/docs/1.6/components/version","475"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/architecture",component:p("/en/docs/1.6/concepts/architecture","5bb"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/datenschutz",component:p("/en/docs/1.6/concepts/datenschutz","5f5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/expert-slot",component:p("/en/docs/1.6/concepts/expert-slot","f94"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/form-input",component:p("/en/docs/1.6/concepts/form-input","033"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/properties",component:p("/en/docs/1.6/concepts/properties","167"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/sicherheit",component:p("/en/docs/1.6/concepts/sicherheit","82b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/styling/designer",component:p("/en/docs/1.6/concepts/styling/designer","320"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/styling/scss",component:p("/en/docs/1.6/concepts/styling/scss","d10"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/styling/theming",component:p("/en/docs/1.6/concepts/styling/theming","681"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/swizzling",component:p("/en/docs/1.6/concepts/swizzling","fd3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/concepts/testprocedure",component:p("/en/docs/1.6/concepts/testprocedure","ba4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/faq",component:p("/en/docs/1.6/faq","b9b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/formular-handling",component:p("/en/docs/1.6/formular-handling","e0a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/get-started/first-steps",component:p("/en/docs/1.6/get-started/first-steps","65c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/get-started/frameworks",component:p("/en/docs/1.6/get-started/frameworks","64d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/get-started/playground",component:p("/en/docs/1.6/get-started/playground","4e6"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/health-state",component:p("/en/docs/1.6/health-state","234"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/impressum",component:p("/en/docs/1.6/impressum","476"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/manifest",component:p("/en/docs/1.6/manifest","681"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/project/history",component:p("/en/docs/1.6/project/history","ec2"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/project/license",component:p("/en/docs/1.6/project/license","170"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/project/roadmap",component:p("/en/docs/1.6/project/roadmap","c11"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.6/test-results",component:p("/en/docs/1.6/test-results","ef9"),exact:!0,sidebar:"tutorialSidebar"}]}]},{path:"/en/docs/1.7",component:p("/en/docs/1.7","7ac"),routes:[{path:"/en/docs/1.7/tags",component:p("/en/docs/1.7/tags","b29"),exact:!0},{path:"/en/docs/1.7/tags/abbr",component:p("/en/docs/1.7/tags/abbr","f1f"),exact:!0},{path:"/en/docs/1.7/tags/accessibility",component:p("/en/docs/1.7/tags/accessibility","1ff"),exact:!0},{path:"/en/docs/1.7/tags/accordion",component:p("/en/docs/1.7/tags/accordion","7e9"),exact:!0},{path:"/en/docs/1.7/tags/alert",component:p("/en/docs/1.7/tags/alert","e0b"),exact:!0},{path:"/en/docs/1.7/tags/arc-42",component:p("/en/docs/1.7/tags/arc-42","170"),exact:!0},{path:"/en/docs/1.7/tags/architecture",component:p("/en/docs/1.7/tags/architecture","644"),exact:!0},{path:"/en/docs/1.7/tags/architektur",component:p("/en/docs/1.7/tags/architektur","be3"),exact:!0},{path:"/en/docs/1.7/tags/architekture",component:p("/en/docs/1.7/tags/architekture","c85"),exact:!0},{path:"/en/docs/1.7/tags/attributes",component:p("/en/docs/1.7/tags/attributes","5d5"),exact:!0},{path:"/en/docs/1.7/tags/avatar",component:p("/en/docs/1.7/tags/avatar","44c"),exact:!0},{path:"/en/docs/1.7/tags/backlog",component:p("/en/docs/1.7/tags/backlog","630"),exact:!0},{path:"/en/docs/1.7/tags/badge",component:p("/en/docs/1.7/tags/badge","ad9"),exact:!0},{path:"/en/docs/1.7/tags/beispiele",component:p("/en/docs/1.7/tags/beispiele","8f0"),exact:!0},{path:"/en/docs/1.7/tags/beschreibung",component:p("/en/docs/1.7/tags/beschreibung","372"),exact:!0},{path:"/en/docs/1.7/tags/bik-bitv",component:p("/en/docs/1.7/tags/bik-bitv","d31"),exact:!0},{path:"/en/docs/1.7/tags/breadcrumb",component:p("/en/docs/1.7/tags/breadcrumb","eb5"),exact:!0},{path:"/en/docs/1.7/tags/button",component:p("/en/docs/1.7/tags/button","e63"),exact:!0},{path:"/en/docs/1.7/tags/button-group",component:p("/en/docs/1.7/tags/button-group","c5a"),exact:!0},{path:"/en/docs/1.7/tags/button-link",component:p("/en/docs/1.7/tags/button-link","5fc"),exact:!0},{path:"/en/docs/1.7/tags/card",component:p("/en/docs/1.7/tags/card","30a"),exact:!0},{path:"/en/docs/1.7/tags/changelog",component:p("/en/docs/1.7/tags/changelog","1ad"),exact:!0},{path:"/en/docs/1.7/tags/characteristics",component:p("/en/docs/1.7/tags/characteristics","1b4"),exact:!0},{path:"/en/docs/1.7/tags/concept",component:p("/en/docs/1.7/tags/concept","759"),exact:!0},{path:"/en/docs/1.7/tags/conzept",component:p("/en/docs/1.7/tags/conzept","211"),exact:!0},{path:"/en/docs/1.7/tags/demo",component:p("/en/docs/1.7/tags/demo","f99"),exact:!0},{path:"/en/docs/1.7/tags/details",component:p("/en/docs/1.7/tags/details","df2"),exact:!0},{path:"/en/docs/1.7/tags/dialog",component:p("/en/docs/1.7/tags/dialog","c7d"),exact:!0},{path:"/en/docs/1.7/tags/faq",component:p("/en/docs/1.7/tags/faq","45f"),exact:!0},{path:"/en/docs/1.7/tags/form",component:p("/en/docs/1.7/tags/form","e37"),exact:!0},{path:"/en/docs/1.7/tags/getting-started",component:p("/en/docs/1.7/tags/getting-started","e28"),exact:!0},{path:"/en/docs/1.7/tags/heading",component:p("/en/docs/1.7/tags/heading","008"),exact:!0},{path:"/en/docs/1.7/tags/historical",component:p("/en/docs/1.7/tags/historical","d83"),exact:!0},{path:"/en/docs/1.7/tags/icon",component:p("/en/docs/1.7/tags/icon","51f"),exact:!0},{path:"/en/docs/1.7/tags/image",component:p("/en/docs/1.7/tags/image","f8f"),exact:!0},{path:"/en/docs/1.7/tags/indented-text",component:p("/en/docs/1.7/tags/indented-text","1f3"),exact:!0},{path:"/en/docs/1.7/tags/input-checkbox",component:p("/en/docs/1.7/tags/input-checkbox","3e0"),exact:!0},{path:"/en/docs/1.7/tags/input-color",component:p("/en/docs/1.7/tags/input-color","651"),exact:!0},{path:"/en/docs/1.7/tags/input-date",component:p("/en/docs/1.7/tags/input-date","b1c"),exact:!0},{path:"/en/docs/1.7/tags/input-email",component:p("/en/docs/1.7/tags/input-email","756"),exact:!0},{path:"/en/docs/1.7/tags/input-file",component:p("/en/docs/1.7/tags/input-file","6af"),exact:!0},{path:"/en/docs/1.7/tags/input-number",component:p("/en/docs/1.7/tags/input-number","86f"),exact:!0},{path:"/en/docs/1.7/tags/input-password",component:p("/en/docs/1.7/tags/input-password","0a2"),exact:!0},{path:"/en/docs/1.7/tags/input-radio",component:p("/en/docs/1.7/tags/input-radio","6f5"),exact:!0},{path:"/en/docs/1.7/tags/input-range",component:p("/en/docs/1.7/tags/input-range","14f"),exact:!0},{path:"/en/docs/1.7/tags/input-text",component:p("/en/docs/1.7/tags/input-text","36b"),exact:!0},{path:"/en/docs/1.7/tags/koli-bri",component:p("/en/docs/1.7/tags/koli-bri","6ff"),exact:!0},{path:"/en/docs/1.7/tags/konzept",component:p("/en/docs/1.7/tags/konzept","3ed"),exact:!0},{path:"/en/docs/1.7/tags/leagal",component:p("/en/docs/1.7/tags/leagal","f59"),exact:!0},{path:"/en/docs/1.7/tags/legal",component:p("/en/docs/1.7/tags/legal","0c4"),exact:!0},{path:"/en/docs/1.7/tags/license",component:p("/en/docs/1.7/tags/license","437"),exact:!0},{path:"/en/docs/1.7/tags/link",component:p("/en/docs/1.7/tags/link","b7a"),exact:!0},{path:"/en/docs/1.7/tags/link-button",component:p("/en/docs/1.7/tags/link-button","8a0"),exact:!0},{path:"/en/docs/1.7/tags/link-group",component:p("/en/docs/1.7/tags/link-group","1c5"),exact:!0},{path:"/en/docs/1.7/tags/lizence",component:p("/en/docs/1.7/tags/lizence","0f6"),exact:!0},{path:"/en/docs/1.7/tags/logo",component:p("/en/docs/1.7/tags/logo","213"),exact:!0},{path:"/en/docs/1.7/tags/manifest",component:p("/en/docs/1.7/tags/manifest","137"),exact:!0},{path:"/en/docs/1.7/tags/modal",component:p("/en/docs/1.7/tags/modal","08f"),exact:!0},{path:"/en/docs/1.7/tags/nav",component:p("/en/docs/1.7/tags/nav","da2"),exact:!0},{path:"/en/docs/1.7/tags/pagination",component:p("/en/docs/1.7/tags/pagination","fa2"),exact:!0},{path:"/en/docs/1.7/tags/popover",component:p("/en/docs/1.7/tags/popover","eea"),exact:!0},{path:"/en/docs/1.7/tags/privacy",component:p("/en/docs/1.7/tags/privacy","03d"),exact:!0},{path:"/en/docs/1.7/tags/progress",component:p("/en/docs/1.7/tags/progress","4a8"),exact:!0},{path:"/en/docs/1.7/tags/properties",component:p("/en/docs/1.7/tags/properties","734"),exact:!0},{path:"/en/docs/1.7/tags/quality",component:p("/en/docs/1.7/tags/quality","32f"),exact:!0},{path:"/en/docs/1.7/tags/quote",component:p("/en/docs/1.7/tags/quote","ee1"),exact:!0},{path:"/en/docs/1.7/tags/roadmap",component:p("/en/docs/1.7/tags/roadmap","891"),exact:!0},{path:"/en/docs/1.7/tags/security",component:p("/en/docs/1.7/tags/security","ad1"),exact:!0},{path:"/en/docs/1.7/tags/select",component:p("/en/docs/1.7/tags/select","b8a"),exact:!0},{path:"/en/docs/1.7/tags/skip-nav",component:p("/en/docs/1.7/tags/skip-nav","9f0"),exact:!0},{path:"/en/docs/1.7/tags/span",component:p("/en/docs/1.7/tags/span","5f0"),exact:!0},{path:"/en/docs/1.7/tags/spezifikation",component:p("/en/docs/1.7/tags/spezifikation","502"),exact:!0},{path:"/en/docs/1.7/tags/spin",component:p("/en/docs/1.7/tags/spin","05d"),exact:!0},{path:"/en/docs/1.7/tags/split-button",component:p("/en/docs/1.7/tags/split-button","047"),exact:!0},{path:"/en/docs/1.7/tags/table",component:p("/en/docs/1.7/tags/table","295"),exact:!0},{path:"/en/docs/1.7/tags/tabs",component:p("/en/docs/1.7/tags/tabs","c3a"),exact:!0},{path:"/en/docs/1.7/tags/textarea",component:p("/en/docs/1.7/tags/textarea","85f"),exact:!0},{path:"/en/docs/1.7/tags/toast",component:p("/en/docs/1.7/tags/toast","f6f"),exact:!0},{path:"/en/docs/1.7/tags/toaster",component:p("/en/docs/1.7/tags/toaster","710"),exact:!0},{path:"/en/docs/1.7/tags/tooltip",component:p("/en/docs/1.7/tags/tooltip","783"),exact:!0},{path:"/en/docs/1.7/tags/version",component:p("/en/docs/1.7/tags/version","0a1"),exact:!0},{path:"/en/docs/1.7/tags/zukunft",component:p("/en/docs/1.7/tags/zukunft","9af"),exact:!0},{path:"/en/docs/1.7",component:p("/en/docs/1.7","c7a"),routes:[{path:"/en/docs/1.7",component:p("/en/docs/1.7","bc3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/changelog",component:p("/en/docs/1.7/changelog","b16"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components",component:p("/en/docs/1.7/components","607"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/abbr",component:p("/en/docs/1.7/components/abbr","ce8"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/accordion",component:p("/en/docs/1.7/components/accordion","7c2"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/alert",component:p("/en/docs/1.7/components/alert","1a2"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/avatar",component:p("/en/docs/1.7/components/avatar","025"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/badge",component:p("/en/docs/1.7/components/badge","389"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/breadcrumb",component:p("/en/docs/1.7/components/breadcrumb","713"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/button",component:p("/en/docs/1.7/components/button","fb9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/button-group",component:p("/en/docs/1.7/components/button-group","fa5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/button-link",component:p("/en/docs/1.7/components/button-link","e68"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/card",component:p("/en/docs/1.7/components/card","cda"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/details",component:p("/en/docs/1.7/components/details","367"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/dialog",component:p("/en/docs/1.7/components/dialog","443"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/form",component:p("/en/docs/1.7/components/form","82b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/heading",component:p("/en/docs/1.7/components/heading","1ea"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/icon",component:p("/en/docs/1.7/components/icon","67f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/icon-font-awesome",component:p("/en/docs/1.7/components/icon-font-awesome","2a5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/icon-icofont",component:p("/en/docs/1.7/components/icon-icofont","05b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/image",component:p("/en/docs/1.7/components/image","351"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/indented-text",component:p("/en/docs/1.7/components/indented-text","512"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-adapter-leanup",component:p("/en/docs/1.7/components/input-adapter-leanup","976"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-checkbox",component:p("/en/docs/1.7/components/input-checkbox","a83"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-color",component:p("/en/docs/1.7/components/input-color","049"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-date",component:p("/en/docs/1.7/components/input-date","fa8"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-email",component:p("/en/docs/1.7/components/input-email","54a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-file",component:p("/en/docs/1.7/components/input-file","db1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-number",component:p("/en/docs/1.7/components/input-number","961"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-password",component:p("/en/docs/1.7/components/input-password","f1f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-radio",component:p("/en/docs/1.7/components/input-radio","281"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-radio-group",component:p("/en/docs/1.7/components/input-radio-group","d62"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-range",component:p("/en/docs/1.7/components/input-range","23c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/input-text",component:p("/en/docs/1.7/components/input-text","b3f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/kolibri",component:p("/en/docs/1.7/components/kolibri","6ca"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/link",component:p("/en/docs/1.7/components/link","342"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/link-button",component:p("/en/docs/1.7/components/link-button","82e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/link-group",component:p("/en/docs/1.7/components/link-group","6f1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/logo",component:p("/en/docs/1.7/components/logo","19f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/modal",component:p("/en/docs/1.7/components/modal","993"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/nav",component:p("/en/docs/1.7/components/nav","29b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/pagination",component:p("/en/docs/1.7/components/pagination","b0d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/popover",component:p("/en/docs/1.7/components/popover","4dd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/progress",component:p("/en/docs/1.7/components/progress","d9d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/quote",component:p("/en/docs/1.7/components/quote","660"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/select",component:p("/en/docs/1.7/components/select","279"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/skip-nav",component:p("/en/docs/1.7/components/skip-nav","2bd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/span",component:p("/en/docs/1.7/components/span","cef"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/spin",component:p("/en/docs/1.7/components/spin","2cf"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/split-button",component:p("/en/docs/1.7/components/split-button","e86"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/table",component:p("/en/docs/1.7/components/table","990"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/tabs",component:p("/en/docs/1.7/components/tabs","c14"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/textarea",component:p("/en/docs/1.7/components/textarea","0d3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/toast",component:p("/en/docs/1.7/components/toast","c13"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/toaster",component:p("/en/docs/1.7/components/toaster","929"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/tooltip",component:p("/en/docs/1.7/components/tooltip","643"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/components/version",component:p("/en/docs/1.7/components/version","3a3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/architecture",component:p("/en/docs/1.7/concepts/architecture","c73"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/datenschutz",component:p("/en/docs/1.7/concepts/datenschutz","f01"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/expert-slot",component:p("/en/docs/1.7/concepts/expert-slot","794"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/form-input",component:p("/en/docs/1.7/concepts/form-input","b6e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/properties",component:p("/en/docs/1.7/concepts/properties","c85"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/sicherheit",component:p("/en/docs/1.7/concepts/sicherheit","f29"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/styling/designer",component:p("/en/docs/1.7/concepts/styling/designer","c14"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/styling/scss",component:p("/en/docs/1.7/concepts/styling/scss","ccc"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/styling/theming",component:p("/en/docs/1.7/concepts/styling/theming","04a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/swizzling",component:p("/en/docs/1.7/concepts/swizzling","781"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/concepts/testprocedure",component:p("/en/docs/1.7/concepts/testprocedure","c2f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/faq",component:p("/en/docs/1.7/faq","235"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/formular-handling",component:p("/en/docs/1.7/formular-handling","eac"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/get-started/first-steps",component:p("/en/docs/1.7/get-started/first-steps","ae9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/get-started/frameworks",component:p("/en/docs/1.7/get-started/frameworks","74b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/get-started/playground",component:p("/en/docs/1.7/get-started/playground","1a4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/health-state",component:p("/en/docs/1.7/health-state","8c9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/impressum",component:p("/en/docs/1.7/impressum","a9f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/manifest",component:p("/en/docs/1.7/manifest","935"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/project/history",component:p("/en/docs/1.7/project/history","0df"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/project/license",component:p("/en/docs/1.7/project/license","6f3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/project/roadmap",component:p("/en/docs/1.7/project/roadmap","4b6"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/1.7/test-results",component:p("/en/docs/1.7/test-results","e46"),exact:!0,sidebar:"tutorialSidebar"}]}]},{path:"/en/docs/next",component:p("/en/docs/next","f0d"),routes:[{path:"/en/docs/next/tags",component:p("/en/docs/next/tags","8ed"),exact:!0},{path:"/en/docs/next/tags/abbr",component:p("/en/docs/next/tags/abbr","a27"),exact:!0},{path:"/en/docs/next/tags/accessibility",component:p("/en/docs/next/tags/accessibility","b69"),exact:!0},{path:"/en/docs/next/tags/accordion",component:p("/en/docs/next/tags/accordion","fe5"),exact:!0},{path:"/en/docs/next/tags/alert",component:p("/en/docs/next/tags/alert","848"),exact:!0},{path:"/en/docs/next/tags/arc-42",component:p("/en/docs/next/tags/arc-42","3c5"),exact:!0},{path:"/en/docs/next/tags/architecture",component:p("/en/docs/next/tags/architecture","921"),exact:!0},{path:"/en/docs/next/tags/architektur",component:p("/en/docs/next/tags/architektur","9ed"),exact:!0},{path:"/en/docs/next/tags/architekture",component:p("/en/docs/next/tags/architekture","ec5"),exact:!0},{path:"/en/docs/next/tags/attributes",component:p("/en/docs/next/tags/attributes","0c5"),exact:!0},{path:"/en/docs/next/tags/avatar",component:p("/en/docs/next/tags/avatar","539"),exact:!0},{path:"/en/docs/next/tags/badge",component:p("/en/docs/next/tags/badge","69a"),exact:!0},{path:"/en/docs/next/tags/beispiele",component:p("/en/docs/next/tags/beispiele","738"),exact:!0},{path:"/en/docs/next/tags/beschreibung",component:p("/en/docs/next/tags/beschreibung","1e1"),exact:!0},{path:"/en/docs/next/tags/bik-bitv",component:p("/en/docs/next/tags/bik-bitv","834"),exact:!0},{path:"/en/docs/next/tags/breadcrumb",component:p("/en/docs/next/tags/breadcrumb","fc8"),exact:!0},{path:"/en/docs/next/tags/button",component:p("/en/docs/next/tags/button","fdf"),exact:!0},{path:"/en/docs/next/tags/button-group",component:p("/en/docs/next/tags/button-group","a99"),exact:!0},{path:"/en/docs/next/tags/button-link",component:p("/en/docs/next/tags/button-link","673"),exact:!0},{path:"/en/docs/next/tags/card",component:p("/en/docs/next/tags/card","adb"),exact:!0},{path:"/en/docs/next/tags/characteristics",component:p("/en/docs/next/tags/characteristics","1aa"),exact:!0},{path:"/en/docs/next/tags/concept",component:p("/en/docs/next/tags/concept","ad7"),exact:!0},{path:"/en/docs/next/tags/demo",component:p("/en/docs/next/tags/demo","857"),exact:!0},{path:"/en/docs/next/tags/details",component:p("/en/docs/next/tags/details","427"),exact:!0},{path:"/en/docs/next/tags/dialog",component:p("/en/docs/next/tags/dialog","06f"),exact:!0},{path:"/en/docs/next/tags/faq",component:p("/en/docs/next/tags/faq","c80"),exact:!0},{path:"/en/docs/next/tags/form",component:p("/en/docs/next/tags/form","73b"),exact:!0},{path:"/en/docs/next/tags/getting-started",component:p("/en/docs/next/tags/getting-started","06d"),exact:!0},{path:"/en/docs/next/tags/heading",component:p("/en/docs/next/tags/heading","2b6"),exact:!0},{path:"/en/docs/next/tags/historical",component:p("/en/docs/next/tags/historical","6cc"),exact:!0},{path:"/en/docs/next/tags/icon",component:p("/en/docs/next/tags/icon","454"),exact:!0},{path:"/en/docs/next/tags/image",component:p("/en/docs/next/tags/image","c94"),exact:!0},{path:"/en/docs/next/tags/indented-text",component:p("/en/docs/next/tags/indented-text","d2a"),exact:!0},{path:"/en/docs/next/tags/input-checkbox",component:p("/en/docs/next/tags/input-checkbox","c62"),exact:!0},{path:"/en/docs/next/tags/input-color",component:p("/en/docs/next/tags/input-color","c97"),exact:!0},{path:"/en/docs/next/tags/input-date",component:p("/en/docs/next/tags/input-date","87a"),exact:!0},{path:"/en/docs/next/tags/input-email",component:p("/en/docs/next/tags/input-email","7db"),exact:!0},{path:"/en/docs/next/tags/input-file",component:p("/en/docs/next/tags/input-file","83d"),exact:!0},{path:"/en/docs/next/tags/input-number",component:p("/en/docs/next/tags/input-number","4d6"),exact:!0},{path:"/en/docs/next/tags/input-password",component:p("/en/docs/next/tags/input-password","def"),exact:!0},{path:"/en/docs/next/tags/input-radio",component:p("/en/docs/next/tags/input-radio","e86"),exact:!0},{path:"/en/docs/next/tags/input-range",component:p("/en/docs/next/tags/input-range","bdc"),exact:!0},{path:"/en/docs/next/tags/input-text",component:p("/en/docs/next/tags/input-text","253"),exact:!0},{path:"/en/docs/next/tags/koli-bri",component:p("/en/docs/next/tags/koli-bri","f20"),exact:!0},{path:"/en/docs/next/tags/konzept",component:p("/en/docs/next/tags/konzept","0ad"),exact:!0},{path:"/en/docs/next/tags/leagal",component:p("/en/docs/next/tags/leagal","bf5"),exact:!0},{path:"/en/docs/next/tags/legal",component:p("/en/docs/next/tags/legal","bc8"),exact:!0},{path:"/en/docs/next/tags/license",component:p("/en/docs/next/tags/license","5ca"),exact:!0},{path:"/en/docs/next/tags/link",component:p("/en/docs/next/tags/link","4d6"),exact:!0},{path:"/en/docs/next/tags/link-button",component:p("/en/docs/next/tags/link-button","e39"),exact:!0},{path:"/en/docs/next/tags/link-group",component:p("/en/docs/next/tags/link-group","6f8"),exact:!0},{path:"/en/docs/next/tags/lizence",component:p("/en/docs/next/tags/lizence","208"),exact:!0},{path:"/en/docs/next/tags/logo",component:p("/en/docs/next/tags/logo","443"),exact:!0},{path:"/en/docs/next/tags/manifest",component:p("/en/docs/next/tags/manifest","096"),exact:!0},{path:"/en/docs/next/tags/modal",component:p("/en/docs/next/tags/modal","6b2"),exact:!0},{path:"/en/docs/next/tags/nav",component:p("/en/docs/next/tags/nav","9f2"),exact:!0},{path:"/en/docs/next/tags/pagination",component:p("/en/docs/next/tags/pagination","d98"),exact:!0},{path:"/en/docs/next/tags/popover",component:p("/en/docs/next/tags/popover","e71"),exact:!0},{path:"/en/docs/next/tags/privacy",component:p("/en/docs/next/tags/privacy","806"),exact:!0},{path:"/en/docs/next/tags/progress",component:p("/en/docs/next/tags/progress","4c8"),exact:!0},{path:"/en/docs/next/tags/properties",component:p("/en/docs/next/tags/properties","bf0"),exact:!0},{path:"/en/docs/next/tags/quality",component:p("/en/docs/next/tags/quality","f78"),exact:!0},{path:"/en/docs/next/tags/quote",component:p("/en/docs/next/tags/quote","939"),exact:!0},{path:"/en/docs/next/tags/roadmap",component:p("/en/docs/next/tags/roadmap","258"),exact:!0},{path:"/en/docs/next/tags/security",component:p("/en/docs/next/tags/security","9e4"),exact:!0},{path:"/en/docs/next/tags/select",component:p("/en/docs/next/tags/select","a87"),exact:!0},{path:"/en/docs/next/tags/skip-nav",component:p("/en/docs/next/tags/skip-nav","beb"),exact:!0},{path:"/en/docs/next/tags/span",component:p("/en/docs/next/tags/span","dbc"),exact:!0},{path:"/en/docs/next/tags/spezifikation",component:p("/en/docs/next/tags/spezifikation","55b"),exact:!0},{path:"/en/docs/next/tags/spin",component:p("/en/docs/next/tags/spin","cdc"),exact:!0},{path:"/en/docs/next/tags/split-button",component:p("/en/docs/next/tags/split-button","a1f"),exact:!0},{path:"/en/docs/next/tags/table",component:p("/en/docs/next/tags/table","f0c"),exact:!0},{path:"/en/docs/next/tags/tabs",component:p("/en/docs/next/tags/tabs","10f"),exact:!0},{path:"/en/docs/next/tags/textarea",component:p("/en/docs/next/tags/textarea","fb9"),exact:!0},{path:"/en/docs/next/tags/toast",component:p("/en/docs/next/tags/toast","d33"),exact:!0},{path:"/en/docs/next/tags/tooltip",component:p("/en/docs/next/tags/tooltip","686"),exact:!0},{path:"/en/docs/next/tags/tree",component:p("/en/docs/next/tags/tree","305"),exact:!0},{path:"/en/docs/next/tags/tree-item",component:p("/en/docs/next/tags/tree-item","945"),exact:!0},{path:"/en/docs/next/tags/version",component:p("/en/docs/next/tags/version","625"),exact:!0},{path:"/en/docs/next/tags/zukunft",component:p("/en/docs/next/tags/zukunft","65a"),exact:!0},{path:"/en/docs/next",component:p("/en/docs/next","54c"),routes:[{path:"/en/docs/next",component:p("/en/docs/next","921"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components",component:p("/en/docs/next/components","d4a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/abbr",component:p("/en/docs/next/components/abbr","a7b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/accordion",component:p("/en/docs/next/components/accordion","2e0"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/alert",component:p("/en/docs/next/components/alert","42f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/avatar",component:p("/en/docs/next/components/avatar","28b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/badge",component:p("/en/docs/next/components/badge","bbd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/breadcrumb",component:p("/en/docs/next/components/breadcrumb","5be"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/button",component:p("/en/docs/next/components/button","0d9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/button-group",component:p("/en/docs/next/components/button-group","6a9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/button-link",component:p("/en/docs/next/components/button-link","9d1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/card",component:p("/en/docs/next/components/card","c56"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/details",component:p("/en/docs/next/components/details","930"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/dialog",component:p("/en/docs/next/components/dialog","b99"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/form",component:p("/en/docs/next/components/form","df5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/heading",component:p("/en/docs/next/components/heading","edf"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/icon",component:p("/en/docs/next/components/icon","c23"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/icon-font-awesome",component:p("/en/docs/next/components/icon-font-awesome","09a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/icon-icofont",component:p("/en/docs/next/components/icon-icofont","bde"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/image",component:p("/en/docs/next/components/image","e48"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/indented-text",component:p("/en/docs/next/components/indented-text","7b3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-adapter-leanup",component:p("/en/docs/next/components/input-adapter-leanup","158"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-checkbox",component:p("/en/docs/next/components/input-checkbox","96e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-color",component:p("/en/docs/next/components/input-color","dd3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-date",component:p("/en/docs/next/components/input-date","697"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-email",component:p("/en/docs/next/components/input-email","680"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-file",component:p("/en/docs/next/components/input-file","e91"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-number",component:p("/en/docs/next/components/input-number","535"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-password",component:p("/en/docs/next/components/input-password","cb0"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-radio",component:p("/en/docs/next/components/input-radio","ab5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-radio-group",component:p("/en/docs/next/components/input-radio-group","6ac"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-range",component:p("/en/docs/next/components/input-range","96e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/input-text",component:p("/en/docs/next/components/input-text","4b8"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/kolibri",component:p("/en/docs/next/components/kolibri","37c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/link",component:p("/en/docs/next/components/link","771"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/link-button",component:p("/en/docs/next/components/link-button","e35"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/link-group",component:p("/en/docs/next/components/link-group","de6"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/logo",component:p("/en/docs/next/components/logo","2f3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/modal",component:p("/en/docs/next/components/modal","a60"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/nav",component:p("/en/docs/next/components/nav","7a9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/pagination",component:p("/en/docs/next/components/pagination","d10"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/popover",component:p("/en/docs/next/components/popover","cb4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/progress",component:p("/en/docs/next/components/progress","898"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/quote",component:p("/en/docs/next/components/quote","ad7"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/select",component:p("/en/docs/next/components/select","294"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/skip-nav",component:p("/en/docs/next/components/skip-nav","afd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/span",component:p("/en/docs/next/components/span","8b9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/spin",component:p("/en/docs/next/components/spin","d35"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/split-button",component:p("/en/docs/next/components/split-button","da9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/table",component:p("/en/docs/next/components/table","57e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/tabs",component:p("/en/docs/next/components/tabs","a86"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/textarea",component:p("/en/docs/next/components/textarea","534"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/toaster",component:p("/en/docs/next/components/toaster","a4c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/tooltip",component:p("/en/docs/next/components/tooltip","11a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/tree",component:p("/en/docs/next/components/tree","7df"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/tree-item",component:p("/en/docs/next/components/tree-item","9ba"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/components/version",component:p("/en/docs/next/components/version","e91"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/architecture",component:p("/en/docs/next/concepts/architecture","6ac"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/datenschutz",component:p("/en/docs/next/concepts/datenschutz","9e4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/expert-slot",component:p("/en/docs/next/concepts/expert-slot","2f5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/form-input",component:p("/en/docs/next/concepts/form-input","f1e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/properties",component:p("/en/docs/next/concepts/properties","679"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/sicherheit",component:p("/en/docs/next/concepts/sicherheit","2de"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/styling/designer",component:p("/en/docs/next/concepts/styling/designer","5fb"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/styling/scss",component:p("/en/docs/next/concepts/styling/scss","254"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/styling/theming",component:p("/en/docs/next/concepts/styling/theming","a3c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/swizzling",component:p("/en/docs/next/concepts/swizzling","a39"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/concepts/testprocedure",component:p("/en/docs/next/concepts/testprocedure","2f4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/faq",component:p("/en/docs/next/faq","a68"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/get-started/first-steps",component:p("/en/docs/next/get-started/first-steps","f6f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/get-started/frameworks",component:p("/en/docs/next/get-started/frameworks","bee"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/get-started/playground",component:p("/en/docs/next/get-started/playground","700"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/health-state",component:p("/en/docs/next/health-state","ee9"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/impressum",component:p("/en/docs/next/impressum","89d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/manifest",component:p("/en/docs/next/manifest","630"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/migration",component:p("/en/docs/next/migration","adc"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/project/history",component:p("/en/docs/next/project/history","653"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/project/license",component:p("/en/docs/next/project/license","e65"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/project/roadmap",component:p("/en/docs/next/project/roadmap","965"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/next/test-results",component:p("/en/docs/next/test-results","4cf"),exact:!0,sidebar:"tutorialSidebar"}]}]},{path:"/en/docs",component:p("/en/docs","c54"),routes:[{path:"/en/docs/tags",component:p("/en/docs/tags","237"),exact:!0},{path:"/en/docs/tags/abbr",component:p("/en/docs/tags/abbr","22d"),exact:!0},{path:"/en/docs/tags/accessibility",component:p("/en/docs/tags/accessibility","826"),exact:!0},{path:"/en/docs/tags/accordion",component:p("/en/docs/tags/accordion","3e6"),exact:!0},{path:"/en/docs/tags/alert",component:p("/en/docs/tags/alert","742"),exact:!0},{path:"/en/docs/tags/arc-42",component:p("/en/docs/tags/arc-42","0d5"),exact:!0},{path:"/en/docs/tags/architecture",component:p("/en/docs/tags/architecture","197"),exact:!0},{path:"/en/docs/tags/architektur",component:p("/en/docs/tags/architektur","982"),exact:!0},{path:"/en/docs/tags/architekture",component:p("/en/docs/tags/architekture","94c"),exact:!0},{path:"/en/docs/tags/attributes",component:p("/en/docs/tags/attributes","cac"),exact:!0},{path:"/en/docs/tags/avatar",component:p("/en/docs/tags/avatar","b55"),exact:!0},{path:"/en/docs/tags/badge",component:p("/en/docs/tags/badge","885"),exact:!0},{path:"/en/docs/tags/beispiele",component:p("/en/docs/tags/beispiele","3ed"),exact:!0},{path:"/en/docs/tags/beschreibung",component:p("/en/docs/tags/beschreibung","63a"),exact:!0},{path:"/en/docs/tags/bik-bitv",component:p("/en/docs/tags/bik-bitv","e01"),exact:!0},{path:"/en/docs/tags/breadcrumb",component:p("/en/docs/tags/breadcrumb","7c0"),exact:!0},{path:"/en/docs/tags/button",component:p("/en/docs/tags/button","601"),exact:!0},{path:"/en/docs/tags/button-group",component:p("/en/docs/tags/button-group","45a"),exact:!0},{path:"/en/docs/tags/button-link",component:p("/en/docs/tags/button-link","3d1"),exact:!0},{path:"/en/docs/tags/card",component:p("/en/docs/tags/card","535"),exact:!0},{path:"/en/docs/tags/characteristics",component:p("/en/docs/tags/characteristics","3c4"),exact:!0},{path:"/en/docs/tags/concept",component:p("/en/docs/tags/concept","0f0"),exact:!0},{path:"/en/docs/tags/demo",component:p("/en/docs/tags/demo","b9d"),exact:!0},{path:"/en/docs/tags/details",component:p("/en/docs/tags/details","158"),exact:!0},{path:"/en/docs/tags/dialog",component:p("/en/docs/tags/dialog","5f2"),exact:!0},{path:"/en/docs/tags/faq",component:p("/en/docs/tags/faq","b2c"),exact:!0},{path:"/en/docs/tags/form",component:p("/en/docs/tags/form","12e"),exact:!0},{path:"/en/docs/tags/getting-started",component:p("/en/docs/tags/getting-started","b08"),exact:!0},{path:"/en/docs/tags/heading",component:p("/en/docs/tags/heading","e3d"),exact:!0},{path:"/en/docs/tags/historical",component:p("/en/docs/tags/historical","290"),exact:!0},{path:"/en/docs/tags/icon",component:p("/en/docs/tags/icon","1ec"),exact:!0},{path:"/en/docs/tags/image",component:p("/en/docs/tags/image","0d9"),exact:!0},{path:"/en/docs/tags/indented-text",component:p("/en/docs/tags/indented-text","fad"),exact:!0},{path:"/en/docs/tags/input-checkbox",component:p("/en/docs/tags/input-checkbox","3ac"),exact:!0},{path:"/en/docs/tags/input-color",component:p("/en/docs/tags/input-color","17b"),exact:!0},{path:"/en/docs/tags/input-date",component:p("/en/docs/tags/input-date","c77"),exact:!0},{path:"/en/docs/tags/input-email",component:p("/en/docs/tags/input-email","120"),exact:!0},{path:"/en/docs/tags/input-file",component:p("/en/docs/tags/input-file","941"),exact:!0},{path:"/en/docs/tags/input-number",component:p("/en/docs/tags/input-number","477"),exact:!0},{path:"/en/docs/tags/input-password",component:p("/en/docs/tags/input-password","66c"),exact:!0},{path:"/en/docs/tags/input-radio",component:p("/en/docs/tags/input-radio","98b"),exact:!0},{path:"/en/docs/tags/input-range",component:p("/en/docs/tags/input-range","1a4"),exact:!0},{path:"/en/docs/tags/input-text",component:p("/en/docs/tags/input-text","e06"),exact:!0},{path:"/en/docs/tags/koli-bri",component:p("/en/docs/tags/koli-bri","d48"),exact:!0},{path:"/en/docs/tags/konzept",component:p("/en/docs/tags/konzept","1db"),exact:!0},{path:"/en/docs/tags/leagal",component:p("/en/docs/tags/leagal","229"),exact:!0},{path:"/en/docs/tags/legal",component:p("/en/docs/tags/legal","ed1"),exact:!0},{path:"/en/docs/tags/license",component:p("/en/docs/tags/license","dcd"),exact:!0},{path:"/en/docs/tags/link",component:p("/en/docs/tags/link","681"),exact:!0},{path:"/en/docs/tags/link-button",component:p("/en/docs/tags/link-button","22f"),exact:!0},{path:"/en/docs/tags/link-group",component:p("/en/docs/tags/link-group","e30"),exact:!0},{path:"/en/docs/tags/lizence",component:p("/en/docs/tags/lizence","2fb"),exact:!0},{path:"/en/docs/tags/logo",component:p("/en/docs/tags/logo","5f2"),exact:!0},{path:"/en/docs/tags/manifest",component:p("/en/docs/tags/manifest","ef5"),exact:!0},{path:"/en/docs/tags/modal",component:p("/en/docs/tags/modal","185"),exact:!0},{path:"/en/docs/tags/nav",component:p("/en/docs/tags/nav","f9a"),exact:!0},{path:"/en/docs/tags/pagination",component:p("/en/docs/tags/pagination","7ac"),exact:!0},{path:"/en/docs/tags/popover",component:p("/en/docs/tags/popover","479"),exact:!0},{path:"/en/docs/tags/privacy",component:p("/en/docs/tags/privacy","ee5"),exact:!0},{path:"/en/docs/tags/progress",component:p("/en/docs/tags/progress","681"),exact:!0},{path:"/en/docs/tags/properties",component:p("/en/docs/tags/properties","8fe"),exact:!0},{path:"/en/docs/tags/quality",component:p("/en/docs/tags/quality","bfe"),exact:!0},{path:"/en/docs/tags/quote",component:p("/en/docs/tags/quote","e52"),exact:!0},{path:"/en/docs/tags/roadmap",component:p("/en/docs/tags/roadmap","643"),exact:!0},{path:"/en/docs/tags/security",component:p("/en/docs/tags/security","5e2"),exact:!0},{path:"/en/docs/tags/select",component:p("/en/docs/tags/select","440"),exact:!0},{path:"/en/docs/tags/skip-nav",component:p("/en/docs/tags/skip-nav","7fd"),exact:!0},{path:"/en/docs/tags/span",component:p("/en/docs/tags/span","388"),exact:!0},{path:"/en/docs/tags/spezifikation",component:p("/en/docs/tags/spezifikation","4bf"),exact:!0},{path:"/en/docs/tags/spin",component:p("/en/docs/tags/spin","0e6"),exact:!0},{path:"/en/docs/tags/split-button",component:p("/en/docs/tags/split-button","aff"),exact:!0},{path:"/en/docs/tags/table",component:p("/en/docs/tags/table","5a8"),exact:!0},{path:"/en/docs/tags/tabs",component:p("/en/docs/tags/tabs","84f"),exact:!0},{path:"/en/docs/tags/textarea",component:p("/en/docs/tags/textarea","f6d"),exact:!0},{path:"/en/docs/tags/toast",component:p("/en/docs/tags/toast","57a"),exact:!0},{path:"/en/docs/tags/tooltip",component:p("/en/docs/tags/tooltip","e0f"),exact:!0},{path:"/en/docs/tags/tree",component:p("/en/docs/tags/tree","505"),exact:!0},{path:"/en/docs/tags/tree-item",component:p("/en/docs/tags/tree-item","afe"),exact:!0},{path:"/en/docs/tags/version",component:p("/en/docs/tags/version","6f9"),exact:!0},{path:"/en/docs/tags/zukunft",component:p("/en/docs/tags/zukunft","3e6"),exact:!0},{path:"/en/docs",component:p("/en/docs","c5e"),routes:[{path:"/en/docs",component:p("/en/docs","430"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components",component:p("/en/docs/components","fe4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/abbr",component:p("/en/docs/components/abbr","a3a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/accordion",component:p("/en/docs/components/accordion","464"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/alert",component:p("/en/docs/components/alert","dbd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/avatar",component:p("/en/docs/components/avatar","7ff"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/badge",component:p("/en/docs/components/badge","3fb"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/breadcrumb",component:p("/en/docs/components/breadcrumb","792"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/button",component:p("/en/docs/components/button","abd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/button-group",component:p("/en/docs/components/button-group","63d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/button-link",component:p("/en/docs/components/button-link","d9a"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/card",component:p("/en/docs/components/card","a7c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/details",component:p("/en/docs/components/details","21f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/dialog",component:p("/en/docs/components/dialog","bac"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/form",component:p("/en/docs/components/form","399"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/heading",component:p("/en/docs/components/heading","c6c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/icon",component:p("/en/docs/components/icon","1ba"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/icon-font-awesome",component:p("/en/docs/components/icon-font-awesome","9a0"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/icon-icofont",component:p("/en/docs/components/icon-icofont","9d5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/image",component:p("/en/docs/components/image","3f3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/indented-text",component:p("/en/docs/components/indented-text","1f2"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-adapter-leanup",component:p("/en/docs/components/input-adapter-leanup","412"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-checkbox",component:p("/en/docs/components/input-checkbox","bb0"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-color",component:p("/en/docs/components/input-color","ca7"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-date",component:p("/en/docs/components/input-date","ccb"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-email",component:p("/en/docs/components/input-email","01c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-file",component:p("/en/docs/components/input-file","860"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-number",component:p("/en/docs/components/input-number","c9c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-password",component:p("/en/docs/components/input-password","225"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-radio",component:p("/en/docs/components/input-radio","1c5"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-radio-group",component:p("/en/docs/components/input-radio-group","7f8"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-range",component:p("/en/docs/components/input-range","92b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/input-text",component:p("/en/docs/components/input-text","6c7"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/kolibri",component:p("/en/docs/components/kolibri","fbc"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/link",component:p("/en/docs/components/link","8b4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/link-button",component:p("/en/docs/components/link-button","5a3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/link-group",component:p("/en/docs/components/link-group","e7f"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/logo",component:p("/en/docs/components/logo","f04"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/modal",component:p("/en/docs/components/modal","0c1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/nav",component:p("/en/docs/components/nav","1eb"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/pagination",component:p("/en/docs/components/pagination","dc8"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/popover",component:p("/en/docs/components/popover","b59"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/progress",component:p("/en/docs/components/progress","851"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/quote",component:p("/en/docs/components/quote","d1d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/select",component:p("/en/docs/components/select","029"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/skip-nav",component:p("/en/docs/components/skip-nav","bf7"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/span",component:p("/en/docs/components/span","6de"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/spin",component:p("/en/docs/components/spin","e56"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/split-button",component:p("/en/docs/components/split-button","afd"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/table",component:p("/en/docs/components/table","08d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/tabs",component:p("/en/docs/components/tabs","a2b"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/textarea",component:p("/en/docs/components/textarea","e22"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/toaster",component:p("/en/docs/components/toaster","21e"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/tooltip",component:p("/en/docs/components/tooltip","d17"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/tree",component:p("/en/docs/components/tree","878"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/tree-item",component:p("/en/docs/components/tree-item","914"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/components/version",component:p("/en/docs/components/version","bf7"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/architecture",component:p("/en/docs/concepts/architecture","f76"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/datenschutz",component:p("/en/docs/concepts/datenschutz","9e8"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/expert-slot",component:p("/en/docs/concepts/expert-slot","41c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/form-input",component:p("/en/docs/concepts/form-input","d76"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/properties",component:p("/en/docs/concepts/properties","419"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/sicherheit",component:p("/en/docs/concepts/sicherheit","eee"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/styling/designer",component:p("/en/docs/concepts/styling/designer","478"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/styling/scss",component:p("/en/docs/concepts/styling/scss","95c"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/styling/theming",component:p("/en/docs/concepts/styling/theming","8cc"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/swizzling",component:p("/en/docs/concepts/swizzling","6a3"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/concepts/testprocedure",component:p("/en/docs/concepts/testprocedure","6d1"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/faq",component:p("/en/docs/faq","776"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/get-started/first-steps",component:p("/en/docs/get-started/first-steps","18d"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/get-started/frameworks",component:p("/en/docs/get-started/frameworks","3bb"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/get-started/playground",component:p("/en/docs/get-started/playground","404"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/health-state",component:p("/en/docs/health-state","a28"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/impressum",component:p("/en/docs/impressum","0c4"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/manifest",component:p("/en/docs/manifest","746"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/migration",component:p("/en/docs/migration","7bb"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/project/history",component:p("/en/docs/project/history","433"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/project/license",component:p("/en/docs/project/license","440"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/project/roadmap",component:p("/en/docs/project/roadmap","319"),exact:!0,sidebar:"tutorialSidebar"},{path:"/en/docs/test-results",component:p("/en/docs/test-results","1d8"),exact:!0,sidebar:"tutorialSidebar"}]}]}]},{path:"/en/",component:p("/en/","2c6"),exact:!0},{path:"*",component:p("*")}]},53816:(e,t,o)=>{"use strict";o.d(t,{e:()=>a,g:()=>i});var n=o(96651),r=o(2488);const a=n.createContext(!1);function i(e){let{children:t}=e;const[o,i]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{i(!0)}),[]),(0,r.jsx)(a.Provider,{value:o,children:t})}},5340:(e,t,o)=>{"use strict";var n=o(96651),r=o(47428),a=o(78008),i=o(11860),s=o(15060);const c=[o(35880),o(95828),o(9056),o(65352)];var l=o(40944),d=o(74760),p=o(15440),u=o(28636);function f(){var e=[];if("undefined"!=typeof window){var t=window;t.customElements&&(!t.Element||t.Element.prototype.closest&&t.Element.prototype.matches&&t.Element.prototype.remove&&t.Element.prototype.getRootNode)||e.push(o.e(64796).then(o.t.bind(o,64796,23))),"function"==typeof Object.assign&&Object.entries&&Array.prototype.find&&Array.prototype.includes&&String.prototype.startsWith&&String.prototype.endsWith&&(!t.NodeList||t.NodeList.prototype.forEach)&&t.fetch&&function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(e){return!1}}()&&"undefined"!=typeof WeakMap||e.push(o.e(76856).then(o.t.bind(o,76856,23)))}return Promise.all(e)}var h=o(24236),b=o(75224);const g=async()=>{(0,h.a)((e=>{try{e.shadowRoot instanceof ShadowRoot&&(0,b.e)(e,(0,b.S)(e))}catch(e){}return"default"})),await(0,u.r)([],[]),o.e(92568).then(o.bind(o,92568)).then((e=>{"object"==typeof e&&null!==e&&"function"==typeof e.initialize&&e.initialize()})).catch((e=>{b.L.error(e)})),b.p&&o.e(44964).then(o.t.bind(o,44964,23))},m=(e,t)=>{if("undefined"!=typeof window)return g(),(0,h.b)(JSON.parse('[["kol-icon",[[33,"kol-icon",{"_icons":[1],"_label":[1],"state":[32]},null,{"_icons":["validateIcons"],"_label":["validateLabel"]}]]],["kol-span-wc_2",[[0,"kol-tooltip-wc",{"_accessKey":[1,"_access-key"],"_align":[1],"_id":[1],"_label":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_align":["validateAlign"],"_id":["validateId"],"_label":["validateLabel"]}],[4,"kol-span-wc",{"_accessKey":[1,"_access-key"],"_allowMarkdown":[4,"_allow-markdown"],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_allowMarkdown":["validateAllowMarkdown"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_label":["validateLabel"]}]]],["kol-table",[[33,"kol-table",{"_allowMultiSort":[4,"_allow-multi-sort"],"_data":[1],"_dataFoot":[1,"_data-foot"],"_headers":[1],"_label":[1],"_minWidth":[1,"_min-width"],"_pagination":[8],"_paginationPosition":[1,"_pagination-position"],"tableDivElementHasScrollbar":[32],"state":[32]},null,{"_allowMultiSort":["validateAllowMultiSort"],"_data":["validateData"],"_dataFoot":["validateDataFoot"],"_paginationPosition":["validatePaginationPosition"],"_headers":["validateHeaders"],"_label":["validateLabel"],"_minWidth":["validateMinWidth"],"_pagination":["validatePagination"]}]]],["kol-form",[[1,"kol-form",{"_on":[16],"_requiredText":[8,"_required-text"],"_errorList":[16],"state":[32]},null,{"_on":["validateOn"],"_requiredText":["validateRequiredText"],"_errorList":["validateErrorList"]}]]],["kol-input-checkbox",[[33,"kol-input-checkbox",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_checked":[1540],"_hideError":[1540,"_hide-error"],"_disabled":[4],"_error":[1],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_indeterminate":[1540],"_label":[1],"_name":[1],"_on":[16],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"_variant":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_checked":["validateChecked"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_indeterminate":["validateIndeterminate"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-input-color",[[33,"kol-input-color",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-date",[[33,"kol-input-date",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[1],"_min":[1],"_name":[1],"_on":[16],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_step":[2],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1025],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-input-email",[[33,"kol-input-email",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_multiple":[4],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-file",[[33,"kol-input-file",{"_accept":[1],"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_multiple":[4],"_name":[1],"_on":[16],"_required":[4],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accept":["validateAccept"],"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-number",[[33,"kol-input-number",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[8],"_min":[8],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_step":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1032],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-password",[[33,"kol-input-password",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-radio",[[33,"kol-input-radio",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_options":[1],"_orientation":[1],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideLabel":["validateHideLabel"],"_hideError":["validateHideError"],"_hint":["validateHint"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_orientation":["validateOrientation"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-range",[[33,"kol-input-range",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[2],"_min":[2],"_name":[1],"_on":[16],"_step":[2],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[2],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_step":["validateStep"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-text",[[33,"kol-input-text",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1025],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-textarea",[[33,"kol-textarea",{"_accessKey":[1,"_access-key"],"_adjustHeight":[4,"_adjust-height"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_resize":[1],"_required":[4],"_rows":[1026],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_adjustHeight":["validateAdjustHeight"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_resize":["validateResize"],"_required":["validateRequired"],"_rows":["validateRows"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-toast-container",[[33,"kol-toast-container",{"state":[32],"enqueue":[64],"closeAll":[64]}]]],["kol-nav",[[33,"kol-nav",{"_collapsible":[4],"_hasCompactButton":[4,"_has-compact-button"],"_hasIconsWhenExpanded":[4,"_has-icons-when-expanded"],"_hideLabel":[4,"_hide-label"],"_label":[1],"_links":[1],"_orientation":[1],"state":[32]},null,{"_collapsible":["validateCollapsible"],"_hasCompactButton":["validateHasCompactButton"],"_hasIconsWhenExpanded":["validateHasIconsWhenExpanded"],"_hideLabel":["validateHideLabel"],"_label":["validateLabel"],"_links":["validateLinks"],"_orientation":["validateOrientation"]}]]],["kol-tree-item",[[33,"kol-tree-item",{"_active":[4],"_label":[1],"_open":[4],"_href":[1],"focusLink":[64],"expand":[64],"collapse":[64],"isOpen":[64]}]]],["kol-accordion",[[33,"kol-accordion",{"_disabled":[4],"_label":[1],"_level":[2],"_on":[16],"_open":[1540],"state":[32]},null,{"_disabled":["validateDisabled"],"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-breadcrumb",[[33,"kol-breadcrumb",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-card",[[33,"kol-card",{"_on":[16],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"state":[32]},null,{"_on":["validateOn"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"]}]]],["kol-link-group",[[33,"kol-link-group",{"_listStyleType":[1,"_list-style-type"],"_label":[1],"_links":[1],"_orientation":[1],"state":[32]},null,{"_label":["validateLabel"],"_listStyleType":["validateListStyleType"],"_links":["validateLinks"],"_orientation":["validateOrientation"]}]]],["kol-quote",[[33,"kol-quote",{"_label":[1],"_href":[1],"_quote":[1],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_href":["validateHref"],"_quote":["validateQuote"],"_variant":["validateVariant"]}]]],["kol-tabs",[[33,"kol-tabs",{"_align":[1],"_label":[1],"_on":[16],"_selected":[1538],"_tabs":[1],"state":[32]},null,{"_align":["validateAlign"],"_label":["validateLabel"],"_on":["validateOn"],"_selected":["validateSelected"],"_tabs":["validateTabs"]}]]],["kol-version",[[33,"kol-version",{"_label":[1],"state":[32]},null,{"_label":["validateLabel"]}]]],["kol-button-link",[[33,"kol-button-link",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"getValue":[64]}]]],["kol-link-button",[[33,"kol-link-button",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"],"_variant":[1]}]]],["kol-skip-nav",[[33,"kol-skip-nav",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-split-button",[[33,"kol-split-button",{"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32]}]]],["kol-abbr",[[33,"kol-abbr",{"_label":[1],"_tooltipAlign":[1,"_tooltip-align"],"state":[32]},null,{"_label":["validateLabel"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-span",[[33,"kol-span",{"_accessKey":[1,"_access-key"],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1]}]]],["kol-indented-text",[[33,"kol-indented-text",{"state":[32]}]]],["kol-details",[[33,"kol-details",{"_disabled":[4],"_label":[1],"_on":[16],"_open":[1540],"state":[32]},null,{"_disabled":["validateDisabled"],"_label":["validateLabel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-avatar",[[33,"kol-avatar",{"_src":[1],"_label":[1]}]]],["kol-button-group",[[33,"kol-button-group"]]],["kol-heading",[[33,"kol-heading",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"],"_variant":[1]}]]],["kol-tree",[[33,"kol-tree",{"_label":[1]}]]],["kol-image",[[33,"kol-image",{"_alt":[1],"_loading":[1],"_sizes":[1],"_src":[1],"_srcset":[1],"state":[32]},null,{"_alt":["validateAlt"],"_loading":["validateLoading"],"_sizes":["validateSizes"],"_src":["validateSrc"],"_srcset":["validateSrcset"]}]]],["kol-kolibri",[[33,"kol-kolibri",{"_color":[1],"_labeled":[4],"state":[32]},null,{"_color":["validateColor"],"_labeled":["validateLabeled"]}]]],["kol-logo",[[33,"kol-logo",{"_org":[1],"state":[32]},null,{"_org":["validateOrg"]}]]],["kol-modal",[[33,"kol-modal",{"_activeElement":[1040],"_label":[1],"_on":[16],"_width":[1],"state":[32]},null,{"_activeElement":["validateActiveElement"],"_label":["validateLabel"],"_on":["validateOn"],"_width":["validateWidth"]}]]],["kol-popover-wc",[[4,"kol-popover-wc",{"_align":[1],"_show":[1540],"state":[32]},null,{"_align":["validateAlign"],"_show":["validateShow"]}]]],["kol-progress",[[33,"kol-progress",{"_label":[1],"_max":[2],"_unit":[1],"_value":[2],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_max":["validateMax"],"_unit":["validateUnit"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-spin",[[33,"kol-spin",{"_show":[1540],"_variant":[1],"state":[32]},null,{"_show":["validateShow"],"_variant":["validateVariant"]}]]],["kol-symbol",[[0,"kol-symbol",{"_label":[1],"_symbol":[1],"state":[32]},null,{"_label":["validateLabel"],"_symbol":["validateSymbol"]}]]],["kol-alert-wc_3",[[4,"kol-alert-wc",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]},null,{"_alert":["validateAlert"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_type":["validateType"],"_variant":["validateVariant"]}],[4,"kol-heading-wc",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_level":["validateLevel"],"_secondaryHeadline":["validateSecondaryHeadline"],"_variant":["validateVariant"]}],[4,"kol-button-wc",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_ariaControls":["validateAriaControls"],"_ariaExpanded":["validateAriaExpanded"],"_ariaSelected":["validateAriaSelected"],"_customClass":["validateCustomClass"],"_disabled":["validateDisabled"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_role":["validateRole"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_tooltipAlign":["validateTooltipAlign"],"_type":["validateType"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-pagination",[[33,"kol-pagination",{"_boundaryCount":[2,"_boundary-count"],"_customClass":[1,"_custom-class"],"_label":[1],"_hasButtons":[8,"_has-buttons"],"_page":[2],"_pageSize":[1026,"_page-size"],"_pageSizeOptions":[1,"_page-size-options"],"_on":[16],"_siblingCount":[2,"_sibling-count"],"_tooltipAlign":[1,"_tooltip-align"],"_max":[2],"state":[32]},null,{"_boundaryCount":["validateBoundaryCount"],"_customClass":["validateCustomClass"],"_label":["validateLabel"],"_hasButtons":["validateHasButtons"],"_on":["validateOn"],"_page":["validatePage"],"_pageSize":["validatePageSize"],"_pageSizeOptions":["validatePageSizeOptions"],"_siblingCount":["validateSiblingCount"],"_max":["validateMax"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-tree-item-wc",[[4,"kol-tree-item-wc",{"_active":[4],"_label":[1],"_open":[4],"_href":[1],"state":[32],"focusLink":[64],"expand":[64],"collapse":[64],"isOpen":[64]},null,{"_active":["validateActive"],"_label":["validateLabel"],"_open":["validateOpen"],"_href":["validateHref"]}]]],["kol-badge",[[33,"kol-badge",{"_color":[1],"_icons":[1],"_label":[1],"_smartButton":[1,"_smart-button"],"state":[32]},null,{"_color":["validateColor"],"_smartButton":["validateSmartButton"]}]]],["kol-avatar-wc",[[0,"kol-avatar-wc",{"_src":[1],"_label":[1],"state":[32]},null,{"_src":["validateSrc"],"_label":["validateLabel"]}]]],["kol-tree-wc",[[4,"kol-tree-wc",{"_label":[1],"state":[32]},[[0,"keydown","handleKeyDown"],[0,"focusout","handleFocusOut"]],{"_label":["validateLabel"]}]]],["kol-select",[[33,"kol-select",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_multiple":[4],"_name":[1],"_on":[16],"_options":[1],"_required":[4],"_rows":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1025],"state":[32],"getValue":[64]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_required":["validateRequired"],"_rows":["validateRows"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-button-group-wc",[[4,"kol-button-group-wc",{"state":[32]}]]],["kol-button",[[33,"kol-button",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"getValue":[64]}]]],["kol-link-wc",[[4,"kol-link-wc",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_disabled":[4],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_ariaCurrentValue":["validateAriaCurrentValue"],"_disabled":["validateDisabled"],"_download":["validateDownload"],"_hideLabel":["validateHideLabel"],"_href":["validateHref"],"_icons":["validateIcons"],"_label":["validateLabel"],"_on":["validateOn"],"_role":["validateRole"],"_tabIndex":["validateTabIndex"],"_target":["validateTarget"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-link",[[33,"kol-link",{"_accessKey":[1,"_access-key"],"_ariaCurrentValue":[1,"_aria-current-value"],"_disabled":[4],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_tooltipAlign":[1,"_tooltip-align"]}]]],["kol-alert",[[33,"kol-alert",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]}]]],["kol-input",[[4,"kol-input",{"_accessKey":[1,"_access-key"],"_alert":[4],"_currentLength":[2,"_current-length"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[4,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[16],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_readOnly":[4,"_read-only"],"_renderNoLabel":[4,"_render-no-label"],"_required":[4],"_slotName":[1,"_slot-name"],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[4]}]]]]'),t)};!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var _,v,y,k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};v=k,y=function(){var e=function(){},t="undefined",o=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function r(e,t){var o=e[t];if("function"==typeof o.bind)return o.bind(e);try{return Function.prototype.bind.call(o,e)}catch(n){return function(){return Function.prototype.apply.apply(o,[e,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(t,o){for(var r=0;r<n.length;r++){var a=n[r];this[a]=r<t?e:this.methodFactory(a,t,o)}this.log=this.debug}function s(e,o,n){return function(){typeof console!==t&&(i.call(this,o,n),this[e].apply(this,arguments))}}function c(n,i,c){return function(n){return"debug"===n&&(n="log"),typeof console!==t&&("trace"===n&&o?a:void 0!==console[n]?r(console,n):void 0!==console.log?r(console,"log"):e)}(n)||s.apply(this,arguments)}function l(e,o,r){var a,s=this;o=null==o?"WARN":o;var l="loglevel";function d(){var e;if(typeof window!==t&&l){try{e=window.localStorage[l]}catch(r){}if(typeof e===t)try{var o=window.document.cookie,n=o.indexOf(encodeURIComponent(l)+"=");-1!==n&&(e=/^([^;]+)/.exec(o.slice(n))[1])}catch(r){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?l+=":"+e:"symbol"==typeof e&&(l=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=r||c,s.getLevel=function(){return a},s.setLevel=function(o,r){if("string"==typeof o&&void 0!==s.levels[o.toUpperCase()]&&(o=s.levels[o.toUpperCase()]),!("number"==typeof o&&o>=0&&o<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+o;if(a=o,!1!==r&&function(e){var o=(n[e]||"silent").toUpperCase();if(typeof window!==t&&l){try{return void(window.localStorage[l]=o)}catch(r){}try{window.document.cookie=encodeURIComponent(l)+"="+o+";"}catch(r){}}}(o),i.call(s,o,e),typeof console===t&&o<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){o=e,d()||s.setLevel(e,!1)},s.resetLevel=function(){s.setLevel(o,!1),function(){if(typeof window!==t&&l){try{return void window.localStorage.removeItem(l)}catch(e){}try{window.document.cookie=encodeURIComponent(l)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var p=d();null==p&&(p=o),s.setLevel(p,!1)}var d=new l,p={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=p[e];return t||(t=p[e]=new l(e,d.getLevel(),d.methodFactory)),t};var u=typeof window!==t?window.log:void 0;return d.noConflict=function(){return typeof window!==t&&window.log===d&&(window.log=u),d},d.getLoggers=function(){return p},d.default=d,d},(_={exports:{}}).exports?_.exports=y():v.log=y();const x="object"==typeof window?window:"object"==typeof global?global:"object"==typeof self?self:{},w=new Map,S=[],j=new Set,E=new Map,L=/--[^;]+/g,T=/:/;("object"!=typeof x.A11yUi||null===x.A11yUi)&&(x.A11yUi={CSS_STYLE_CACHE:E,HYDRATED_HISTORY:S,STYLING_TASK_QUEUE:w});const C=(e,t)=>"object"==typeof x.A11yUi&&null!==x.A11yUi&&"object"==typeof x.A11yUi.Themes&&null!==x.A11yUi.Themes&&"object"==typeof x.A11yUi.Themes[e]&&null!==x.A11yUi.Themes[e]&&"string"==typeof x.A11yUi.Themes[e][t]?x.A11yUi.Themes[e][t].replace(/\r?\n/g,""):"",A=(e,t,o)=>{const n=t.name||"default";let r;try{if(null===e.shadowRoot)throw new Error("ShadowRoot is null");r=e.shadowRoot}catch{r=e}if(E.get(n)?.has(e.tagName))N(e,r,E.get(n)?.get(e.tagName),o);else{const a=C(n,"PROPERTIES"),i=C(n,"GLOBAL"),s=C(n,e.tagName);!1===j.has(n)&&((e,t)=>{let o=t.match(L);if(Array.isArray(o)){o=o.filter((e=>T.test(e)));const t=document.createElement("style");t.innerHTML=`.${e} {${o.join(";")}}`,document.querySelector("head")?.appendChild(t)}j.add(e)})(n,i);const c=[a,i,s];((e,t,o)=>{if(!1!==o){const n=[...Array.from(e.childNodes).filter((e=>e instanceof HTMLStyleElement&&"STYLE"===e.tagName))];let r;try{r=[...Array.from(e.adoptedStyleSheets)]}catch{r=[]}"before"===o?.mode?(n.reverse().forEach((e=>t.unshift(e.innerHTML))),r.reverse().forEach((e=>t.unshift(Array.from(e.cssRules).map((e=>e.cssText)).join(""))))):"after"===o?.mode&&(n.forEach((e=>t.push(e.innerHTML))),r.forEach((e=>t.push(Array.from(e.cssRules).map((e=>e.cssText)).join("")))))}})(r,c,t.encroachCss),"debug"===t.loglevel&&console.log(e.tagName,c),!0===t.cache&&(!1===E.has(n)&&E.set(n,new Map),E.get(n)?.set(e.tagName,c)),N(e,r,c,o)}},N=(e,t,o,n)=>{(e=>{for(const t of Array.from(e.childNodes)){if(!(t instanceof HTMLStyleElement&&"STYLE"===t.tagName))break;e.removeChild(t)}})(t),((e,t)=>{try{const o=[];t.forEach((e=>{const t=new CSSStyleSheet;t.replaceSync(e),o.push(t)})),e.adoptedStyleSheets=o}catch{t.reverse().forEach((t=>{const o=document.createElement("style");o.innerHTML=t,e.insertBefore(o,e.firstChild)}))}})(t,o),e.style.display=n},O=(e,t)=>{(e=>{w.delete(e)})(e),(e=>{"debug"===e.loglevel&&S.push({timestamp:Date.now(),numberOfTasks:w.size})})(t)},P=e=>{for(const t of e)if(w.has(t.target)&&t.target.classList.contains("hydrated")){const{styleDisplay:e,themeDetails:o}=w.get(t.target);A(t.target,o,e),O(t.target,o)}};let $;try{$=new MutationObserver(P)}catch{$=null}var z={exports:{}};function R(e){var t=I(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function I(e){return"string"==typeof e?function(e){if("red"==e)return[255,0,0];if("green"==e)return[0,255,0];if("blue"==e)return[0,0,255];if("black"==e)return[0,0,0];if("white"==e)return[255,255,255];if("cyan"==e)return[0,255,255];if("gray"==e)return[128,128,128];if("grey"==e)return[128,128,128];if("magenta"==e)return[255,0,255];if("pink"==e)return[255,0,255];if("yellow"==e)return[255,255,0]}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=D(t[0]),r=D(t[1]),a=D(t[2]),i=3==o?255:D(t[3]);if(isNaN(n)||isNaN(r)||isNaN(a)||isNaN(i))return;return[n,r,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=D(t.slice(0,2)),r=D(t.slice(2,4)),a=D(t.slice(4,6)),i=6==o?255:D(t.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(a)||isNaN(i))return;return[n,r,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=B(t[0],!0),n=B(t[1],!0),r=B(t[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=B(t[0],!0),n=B(t[1],!0),r=B(t[2],!0),a=B(255*t[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=a)return[o,n,r,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=B(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=B(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=B(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=B(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=B(e[0],!0),o=B(e[1],!0),n=B(e[2],!0),r=B(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0){return[e>>16&255,e>>8&255,255&e,e>>24&255]}}(e)||[0,0,0,255]}function M(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function D(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function B(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}z.exports=R,z.exports.arr=R,z.exports.obj=function(e){var t=I(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},z.exports.css=function(e){var t=I(e);3==t.length&&t.push(255);return 255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},z.exports.hex=function(e){3==(a=I(e)).length&&a.push(255);var t=255==a[3],o=M(a[0]),n=M(a[1]),r=M(a[2]),a=M(Math.round(a[3])),i=function(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(o,n,r,a);if(t)return i?"#"+o.charAt(0)+n.charAt(0)+r.charAt(0):"#"+o+n+r;return i?"#"+o.charAt(0)+n.charAt(0)+r.charAt(0)+a.charAt(0):"#"+o+n+r+a},z.exports.num=function(e){var t=I(e);3==t.length?t.push(255):t[3]=Math.round(t[3]);return(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};var F=(e=>(e[e.error=0]="error",e[e.warning=1]="warning",e[e.info=2]="info",e[e.success=3]="success",e[e.message=4]="message",e[e.close=5]="close",e[e["form-description"]=6]="form-description",e[e.of=7]="of",e[e.characters=8]="characters",e[e.new=9]="new",e[e["no-entries"]=10]="no-entries",e[e["change-order"]=11]="change-order",e[e["action-running"]=12]="action-running",e[e["action-done"]=13]="action-done",e[e["page-first"]=14]="page-first",e[e["page-back"]=15]="page-back",e[e["page-next"]=16]="page-next",e[e["page-last"]=17]="page-last",e[e["entries-per-site"]=18]="entries-per-site",e[e["page-current"]=19]="page-current",e[e["page-selected"]=20]="page-selected",e[e["page-per-site"]=21]="page-per-site",e[e["logo-description"]=22]="logo-description",e[e["open-link-in-tab"]=23]="open-link-in-tab",e[e["kolibri-logo"]=24]="kolibri-logo",e))(F||{}),q=(e=>(e[e.abbr=0]="abbr",e[e.accordion=1]="accordion",e[e["accordion-group"]=2]="accordion-group",e[e.alert=3]="alert",e[e.avatar=4]="avatar",e[e.badge=5]="badge",e[e.breadcrumb=6]="breadcrumb",e[e.button=7]="button",e[e["button-group"]=8]="button-group",e[e["button-link"]=9]="button-link",e[e.card=10]="card",e[e.details=11]="details",e[e.form=12]="form",e[e.heading=13]="heading",e[e.icon=14]="icon",e[e.image=15]="image",e[e["indented-text"]=16]="indented-text",e[e["input-checkbox"]=17]="input-checkbox",e[e["input-color"]=18]="input-color",e[e["input-date"]=19]="input-date",e[e["input-email"]=20]="input-email",e[e["input-file"]=21]="input-file",e[e["input-number"]=22]="input-number",e[e["input-password"]=23]="input-password",e[e["input-radio"]=24]="input-radio",e[e["input-range"]=25]="input-range",e[e["input-text"]=26]="input-text",e[e.kolibri=27]="kolibri",e[e.link=28]="link",e[e["link-button"]=29]="link-button",e[e["link-group"]=30]="link-group",e[e.logo=31]="logo",e[e.modal=32]="modal",e[e.nav=33]="nav",e[e.pagination=34]="pagination",e[e.progress=35]="progress",e[e.select=36]="select",e[e.separator=37]="separator",e[e["skip-nav"]=38]="skip-nav",e[e.spin=39]="spin",e[e["split-button"]=40]="split-button",e[e.symbol=41]="symbol",e[e.table=42]="table",e[e.tabs=43]="tabs",e[e.textarea=44]="textarea",e[e["toast-container"]=45]="toast-container",e[e.toolbar=46]="toolbar",e[e.tooltip=47]="tooltip",e[e.tree=48]="tree",e[e["tree-item"]=49]="tree-item",e))(q||{});const U=e=>Array.isArray(e)?e:[e],K=e=>`%c${e}`,H=(e,t)=>"string"==typeof t&&t.length>0?`${K(e)} | ${t}`:K(e),V=(e,t)=>[H(e,t?.classifier),`color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000;${t?.overwriteStyle||""}`],G=(e,t)=>e()||!0===t;const W=new class{constructor(e,t){this.label=e,this.devMode=t}debug(e,t){G(this.devMode,t?.forceLog)&&console.debug(...V(this.label,t),...U(e))}info(e,t){G(this.devMode,t?.forceLog)&&console.info(...V(this.label,t),...U(e))}trace(e,t){G(this.devMode,t?.forceLog)&&console.trace(...V(this.label,t),...U(e))}warn(e,t){G(this.devMode,t?.forceLog)&&console.warn(...V(this.label,t),...U(e))}error(e,t){G(this.devMode,t?.forceLog)&&console.error(...V(this.label,t),...U(e))}throw(e,t){if(G(this.devMode,t?.forceLog))throw new Error(...V(this.label,t),...U(e))}}("KoliBri",(()=>!1)),Y=new Set;var Q,J;Q="Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!",(!1===Y.has(Q)||J?.force)&&(Y.add(Q),W.debug([Q].concat(J?.details||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"})),new Event("StateChange");let X="development";try{X="production"}catch(Ze){X="production"}const Z=new class{constructor(e,t,o){this.createTheme=(e,t)=>((e,t)=>o=>o(e,t,{append:!1}))(e,t),this.createTranslation=(e,t)=>((e,t)=>o=>o(e,t))(e,t),this.Prefix=e,this.Key=Object.getOwnPropertyNames(t),this.Tag=Object.getOwnPropertyNames(o)}}("kol",F,q),ee=e=>e.join(""),te=Z.createTheme("bmf",{GLOBAL:ee`
		/* Design Tokens */
		:host {
			--border-radius: 5px;
			--color-midnight: #004b76;
			--color-ocean: #0077b6;
			--color-sky: #99c9e2;
			--color-ice: #cce4f0;
			--color-crystal: #f0f7fb;
			--color-crimson: #780f2d;
			--color-red: #c0003c;
			--color-pink: #f2ccd8;
			--color-blossom: #fbf0f3;
			--color-olive: #004d38;
			--color-green: #005c45;
			--color-jungle: #00854a;
			--color-lime: #c1ca31;
			--color-mint: #ccdeda;
			--color-haze: #f0f5f4;
			--color-fire: #7a2e1f;
			--color-orange: #c44931;
			--color-coral: #f5dcd7;
			--color-peach: #fdf6f5;
			--color-bronze: #6a4a06;
			--color-yellow: #f9e03a;
			--color-ivory: #fdf3b0;
			--color-wine: #3f1d4a;
			--color-purple: #6b4479;
			--color-lavender: #dfd6de;
			--color-black: #202020;
			--color-metal: #454d4f;
			--color-grey: #576164;
			--color-granite: #bec5c9;
			--color-silver: #e5e8e9;
			--color-smoke: #f2f3f4;
			--color-cloud: #f6f7f7;
			--color-white: #ffffff;
			--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;
			--font-size: 16px;
			--spacing: 0.25em;
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
		}
		* {
			box-sizing: border-box;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: var(--font-family);
			font-size: var(--font-size);
			margin: 0;
			padding: 0;
		}
		*[tabindex]:focus,
		kol-input:not(.checkbox, .radio) .input:focus-within,
		kol-input:is(.checkbox, .radio) input:focus,
		summary:focus {
			cursor: pointer;
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		kol-heading-wc {
			font-weight: 700;
		}
		kol-tooltip-wc .tooltip-floating {
			border: 1px solid var(--color-metal);
			border-radius: var(--border-radius);
		}
		kol-tooltip-wc .tooltip-arrow {
			border: 1px solid var(--color-metal);
		}
		kol-tooltip-wc .tooltip-area {
			background-color: var(--color-white);
			color: var(--color-black);
		}
		kol-tooltip-wc .tooltip-content {
			border-radius: var(--border-radius);
			line-height: 1.5em;
			padding: 0.5rem 0.75rem;
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
	`,"KOL-BUTTON":ee`
		:host {
			font-family: var(--font-family);
		}
		:is(a, button) {
			font-size: 1.125em;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
			color: var(--color-white);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-midnight);
			color: var(--color-midnight);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.success :is(a, button) > kol-span-wc,
		.success :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-green);
			border-color: var(--color-green);
			color: var(--color-white);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-white);
			background-color: var(--color-white);
			box-shadow: none;
			color: var(--color-midnight);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.success :is(a, button):active > kol-span-wc,
		.success :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-crimson);
			border-color: var(--color-crimson);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.success :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-white);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** button with inline focus */
		:is(a, button).focus-inline:focus > kol-span-wc {
			outline-offset: -2px;
		}
		/** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
		/** CUSTOM_CLASS */
		:is(a, button).hide-label > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: block;
		}
	`,"KOL-INPUT-TEXT":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
		}
	`,"KOL-INPUT-PASSWORD":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-INPUT-NUMBER":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-INPUT-DATE":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-INPUT-EMAIL":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-INPUT-FILE":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		input {
			border: none;
		}
		input[type='file'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-TEXTAREA":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
			display: grid;
			grid-template-areas: 'error error' 'label counter' 'input input' 'hint hint';
			grid-template-columns: 1fr 115px;
		}
		kol-input .error {
			order: 1;
			grid-area: error;
		}
		kol-input label {
			order: 2;
			grid-area: label;
		}
		kol-input .counter {
			order: 2;
			grid-area: counter;
			justify-self: end;
		}
		kol-input .input {
			order: 3;
			grid-area: input;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
			grid-area: hint;
		}
		textarea {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		textarea:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		select[multiple],
		textarea {
			overflow: auto;
		}
		textarea {
			display: block;
		}
		.input {
			position: relative;
		}
		.input textarea ~ span {
			position: absolute;
			top: -1.5rem;
			right: 0;
			color: var(--color-grey);
		}
	`,"KOL-ALERT":ee`
		:host {
			font-family: var(--font-family);
		}
		.msg,
		.msg {
			border-width: 0;
		}
		kol-alert-wc {
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			display: flex;
			width: 100%;
			overflow: unset;
			border-color: transparent;
			background-color: white;
		}
		kol-alert-wc > .heading {
			display: flex;
			gap: 0.5em;
			place-items: center;
		}
		kol-alert-wc > .heading > div {
			display: grid;
			gap: var(--kolibri-spacing);
		}
		.msg {
			background-color: transparent;
		}
		.msg > .heading {
			place-items: flex-start;
		}
		.msg > .heading > kol-icon {
			place-self: baseline;
		}
		kol-alert-wc > .heading > div {
			display: grid;
			gap: var(--spacing);
		}
		kol-alert-wc > .heading > kol-button-wc.close {
			place-self: center;
		}
		.msg {
			align-items: start;
		}
		.default {
			border-color: var(--color-grey);
		}
		.default.msg .heading-icon {
			color: var(--color-grey);
		}
		.error {
			border-color: var(--color-red);
		}
		.error.msg .heading-icon {
			color: var(--color-red);
		}
		.info {
			border-color: var(--color-midnight);
		}
		.info.msg .heading-icon {
			color: var(--color-midnight);
		}
		.success {
			border-color: var(--color-green);
		}
		.success.msg .heading-icon {
			color: var(--color-green);
		}
		.warning {
			border-color: var(--color-orange);
		}
		.warning.msg .heading-icon {
			color: var(--color-orange);
		}
		.heading-icon {
			color: white;
		}
		kol-alert-wc .heading .heading-icon {
			padding: 0;
		}
		.msg > .heading > .heading-icon {
			padding-top: 0;
			place-items: baseline;
		}
		.msg > .heading > .heading-icon::part(icon) {
			line-height: 1.375rem;
		}
		.msg > .heading > div > kol-heading-wc {
			line-height: 20px;
			padding-top: 0.125rem;
		}
		.msg.default .heading > div > kol-heading-wc {
			color: var(--color-grey);
		}
		.msg.error .heading > div > kol-heading-wc {
			color: var(--color-red);
		}
		.msg.info .heading > div > kol-heading-wc {
			color: var(--color-midnight);
		}
		.msg.success .heading > div > kol-heading-wc {
			color: var(--color-green);
		}
		.msg.warning .heading > div > kol-heading-wc {
			color: var(--color-orange);
		} /*.msg > .heading > div {display: grid;grid-template-columns: 1fr auto;}.msg > .heading > div > .content {grid-row: 2;grid-column: 1;}.msg > div > .close {display: flex;}*/
		.msg.default .close .icon {
			color: var(--color-grey);
		}
		.msg.error .close .icon {
			color: var(--color-red);
		}
		.msg.info .close .icon {
			color: var(--color-midnight);
		}
		.msg.success .close .icon {
			color: var(--color-green);
		}
		.msg.warning .close .icon {
			color: var(--color-orange);
		}
		.card {
			border-width: 2px;
			border-style: solid;
			filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));
			flex-direction: column;
		}
		.card > .heading {
			padding: 0.5rem 1rem;
		}
		.card.hasCloser > .heading {
			padding-top: 0;
			padding-bottom: 0;
			padding-right: 0;
		}
		.card > .heading > div {
			width: 100%;
			min-height: 1.25rem;
		}
		.card > .heading .heading-icon {
			justify-self: right;
			margin-top: -4px;
		}
		.card > .heading kol-heading-wc {
			width: 100%;
			color: white;
			display: flex;
			font-size: 1.25rem;
			line-height: 1.25rem;
		}
		.card > .heading kol-heading-wc > * {
			margin: auto 0;
		}
		.card > .heading kol-button-wc button:focus {
			outline-color: var(--color-white);
			outline-offset: -3px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline 0.1s linear;
		}
		.card > .heading kol-button-wc button:hover {
			background-color: rgba(32, 32, 32, 0.2);
		}
		.card > .heading kol-button-wc button:active {
			background-color: rgba(32, 32, 32, 0.4);
		}
		.card > .heading kol-button-wc button:hover:focus {
			background-color: rgba(32, 32, 32, 0.1);
		}
		.card > .content {
			padding: 1rem;
			max-height: 9.5rem;
			overflow-y: auto;
		}
		.card.default > .heading {
			background-color: var(--color-grey);
			border-bottom: 2px solid var(--color-grey);
		}
		.card.error > .heading {
			background-color: var(--color-red);
			border-bottom: 2px solid var(--color-red);
		}
		.card.info > .heading {
			background-color: var(--color-midnight);
			border-bottom: 2px solid var(--color-midnight);
		}
		.card.success > .heading {
			background-color: var(--color-green);
			border-bottom: 2px solid var(--color-green);
		}
		.card.warning > .heading {
			background-color: var(--color-orange);
			border-bottom: 2px solid var(--color-orange);
		}
		:is(.error, .info, .success, .warning) .heading-icon::part(icon) {
			font-family: 'Material Symbols Rounded';
			font-weight: 900;
			font-variation-settings: 'FILL' 1;
			height: 1.25rem;
			width: 1.25rem;
		}
		:is(.error, .info, .success, .warning) .heading-icon {
			font-size: 1.25rem !important;
		}
		.error .heading-icon::part(icon)::before {
			content: 'error';
		}
		.info .heading-icon::part(icon)::before {
			content: 'info';
		}
		.success .heading-icon::part(icon)::before {
			content: 'check_circle';
		}
		.warning .heading-icon::part(icon)::before {
			content: 'warning';
		}
		.card > div > .content {
			grid-row: 2;
			grid-column: 1 / span 2;
		}
		.card.default .close {
			background-color: var(--color-grey);
		}
		.card.error .close {
			background-color: var(--color-red);
		}
		.card.info .close {
			background-color: var(--color-midnight);
		}
		.card.success .close {
			background-color: var(--color-green);
		}
		.card.warning .close {
			background-color: var(--color-orange);
		}
		.close > button {
			min-width: 44px;
			color: var(--color-white);
			min-height: 44px;
			display: grid;
			gap: 0.25em;
			line-height: 1.5rem;
			font-family: var(--font-family);
			font-weight: 700;
			cursor: pointer;
			border-radius: 1.5em;
			border-style: solid;
			border-width: 2px;
			font-size: 1rem;
			align-items: center;
			padding: 8px 14px;
			justify-content: center;
			font-style: normal;
			text-align: center;
			width: inherit;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			background-color: rgba(0, 0, 0, 0);
			border-color: rgba(0, 0, 0, 0);
		}
		.close > button {
			padding: 8px;
		}
		.close > button kol-icon {
			display: flex;
			width: 1em;
			height: 1em;
			font-size: 1rem;
		}
		.close > button kol-icon::part(icon) {
			font-family: 'Material Symbols Rounded';
			font-weight: 900;
		}
		.close > button kol-icon::part(icon)::before {
			content: 'close';
		}
		.close > button:active {
			box-shadow: none;
			outline: none;
		}
	`,"KOL-AVATAR":ee`
		:host {
			font-family: var(--font-family);
		}
	`,"KOL-HEADING":ee`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			color: inherit;
			font-style: normal;
			margin: 0;
			padding: 0;
		}
		.headline-h1,
		.headline-h2,
		.headline-h3 {
			font-weight: 700;
		}
		.headline-h1 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h2 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		.headline-h3 {
			font-size: 1.125rem;
			line-height: 1.5rem;
		}
	`,"KOL-BADGE":ee`
		:host {
			display: inline-block;
			font-family: var(--font-family);
		}
		:host > span {
			border-radius: 0.3125rem;
			display: inline-flex;
			font-style: normal;
		}
		:host > span.smart-button {
			align-items: center;
		}
		:host > span kol-button-wc:hover > button {
			background-color: var(--color-ocean);
			color: var(--color-white);
		}
		:host > span kol-button-wc > button {
			color: inherit;
			font-size: 1rem;
			border-top-right-radius: 0.3125rem;
			border-bottom-right-radius: 0.3125rem;
			padding: 2px;
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.75rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
	`,"KOL-BUTTON-GROUP":ee`
		:host > kol-button-group-wc {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5em;
		}
	`,"KOL-INDENTED-TEXT":ee`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			background-color: var(--color-white);
			border-left: none;
			box-shadow: -2px 0px 0px var(--color-ocean);
			padding: 0 0.5em;
			width: 100%;
		}
	`,"KOL-LINK":ee`
		:is(a, button) {
			color: var(--color-midnight);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: 2px solid;
		}
		a:hover:not([aria-disabled]),
		button:hover:not([disabled]) {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
			line-height: 1em;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-DETAILS":ee`
		details > summary {
			border-radius: var(--border-radius);
			font-family: var(--font-family);
		}
		details kol-indented-text {
			margin: 0.25em 0px 0px 0.65em;
		}
		details kol-icon {
			font-size: 2rem;
		}
		kol-icon::part(icon) {
			font-family: 'Material Symbols Rounded';
			font-weight: 400;
		}
		details kol-icon::part(icon):before {
			content: 'chevron_right';
		}
	`,"KOL-PROGRESS":ee`
		:host {
			font-family: var(--font-family);
		}
		.bar > div {
			flex-direction: column;
			gap: 0.5rem !important;
			width: 100px;
		}
		.bar > div text {
			color: var(--color-black);
			align-self: flex-end;
		}
		.bar svg {
			height: 1rem;
		}
		.bar .background {
			fill: var(--color-ice);
			stroke: var(--color-ice);
			stroke-width: 1px;
		}
		.bar .progress {
			fill: var(--color-midnight);
			stroke: var(--color-midnight);
		}
		.bar .border {
			display: none;
		}
		.cycle {
			overflow: visible;
		}
		.cycle .whitespace,
		.cycle .border {
			stroke: transparent;
		}
		.cycle .background {
			stroke: var(--color-ice);
			stroke-width: 1rem;
		}
		.cycle .progress {
			stroke: var(--color-midnight);
			stroke-width: 1rem;
		}
		.cycle text:first-of-type {
			color: var(--color-grey);
			line-height: 1.25rem;
			alignment-baseline: after-edge;
		}
		.cycle text:last-of-type {
			color: var(--color-black);
			font-size: 1.75rem;
			font-weight: 700;
			line-height: 1.5rem;
			alignment-baseline: central;
		}
	`,"KOL-SELECT":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		select {
			border: none;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input.icon-left kol-icon:first-child {
			margin-right: 0.5em;
		}
		.input.icon-right kol-icon:last-child {
			margin-left: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		select:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(select, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
		}
		select[multiple] {
			overflow: auto;
		}
		select option {
			margin: 1px 0;
			border-radius: 0.25em;
			cursor: pointer;
		}
		select:not([multiple]) option {
			padding: 0.5em;
		}
		select option:disabled {
			cursor: not-allowed;
		}
		option:active:not(:disabled),
		option:checked:not(:disabled),
		option:focus:not(:disabled),
		option:hover:not(:disabled) {
			background: var(--color-ocean);
			color: white;
		}
	`,"KOL-INPUT-COLOR":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
		}
		input[type='color'] {
			border: none;
			min-height: 40px !important;
		}
		input[type='color'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:not([type='color']):read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-ACCORDION":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-span-wc > span {
			display: flex;
			place-items: baseline center;
			text-align: left;
		}
		:host > div > kol-heading-wc button {
			border-radius: var(--border-radius);
			min-height: 22px;
			padding: 12px 8px;
		}
		:host > div > kol-heading-wc button kol-span-wc {
			font-weight: 700;
			font-size: 1.125rem;
			line-height: 20px;
			gap: 0.5rem;
		}
		:host > div > kol-heading-wc button kol-span-wc > span {
			gap: 0.5em;
		}
		:host > div > kol-heading-wc button kol-icon::part(icon) {
			font-family: 'Material Symbols Rounded';
			font-weight: 400;
			color: var(--color-midnight);
		}
		kol-icon::part(icon)::before {
			content: 'arrow_forward_ios';
			transition-property: transform;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
		}
		:host > div.open > kol-heading-wc button kol-icon::part(icon)::before {
			transform: rotate(90deg);
		}
		:host > div {
			width: 100%;
			height: 100%;
			display: grid;
		}
		:host > div div[class='header'],
		:host > div[class*='open'] div[class='content'] {
			margin: 0;
		}
		:host > div div[class='content'] {
			padding-left: 2.25em;
			padding-bottom: 12px;
			padding-right: 8px;
		}
		button:focus {
			outline: none;
		}
		:host > .accordion:focus-within {
			border-radius: var(--border-radius);
			cursor: pointer;
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
	`,"KOL-TABLE":ee`
		:host {
			font-family: var(--font-family);
		}
		:host * {
			hyphens: var(--kolibri-hyphens);
			font-family: var(--kolibri-font-family);
			line-height: var(--kolibri-line-height);
			word-break: break-word;
		}
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}

		.table:has(caption:focus) {
			outline-color: var(--color-ocean);
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		caption {
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		tbody tr:last-child th,
		tr:last-child td {
			border-bottom-width: 0;
		}
		th {
			padding: 0.75em 0;
			font-weight: 700;
			color: var(--color-black);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5em;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		th,
		td {
			border-bottom: 1px solid var(--color-granite);
			height: 1.25rem;
		}
		tbody th {
			text-align: left;
		}
		tbody th,
		td {
			padding: 1em 0;
			vertical-align: top;
		}
		th kol-button,
		td kol-button {
			margin-top: -0.75rem;
			margin-bottom: -0.75rem;
		}
		.table-sort-button .button {
			font-weight: 700;
		}
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			display: grid;
			align-items: center;
			justify-items: center;
			gap: 1em;
		}
		.pagination {
			align-items: center;
			justify-content: start;
			grid-template-columns: auto 1fr;
		}
		@media (min-width: 1024px) {
			:host > div:last-child,
			:host > div:last-child > div:last-child {
				grid-auto-flow: column;
			}
			:host > div:last-child kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,"KOL-NAV":ee`
		* {
			margin: 0;
			padding: 0;
		}
		nav {
			font-family: var(--font-family);
			font-size: var(--font-size);
			width: 100%;
		}
		ul {
			list-style: none;
		}
		.entry-item :is(a, .button) {
			align-items: center;
			background-color: var(--color-white);
			border-left-color: transparent;
			border-left-style: solid;
			border-left-width: 0.5rem;
			color: var(--color-midnight);
			display: flex;
			font-style: normal;
			letter-spacing: 0.175px;
			line-height: 1.5rem;
			min-height: 44px;
			min-width: 44px;
			padding: 0.75rem 0.5rem 0.75rem 0.25rem;
			place-items: center;
			text-decoration: none;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			width: 100%;
		}
		.vertical .active .entry-item :is(a, .button) {
			background-color: var(--color-ice);
			border-left-color: var(--color-midnight);
			color: var(--color-midnight);
			font-weight: 700;
		}
		.entry-item :is(a, .button):hover,
		.vertical .active .entry-item :is(a, .button):hover {
			background-color: var(--color-ocean);
			border-left-color: var(--color-ocean);
			color: var(--color-white);
			font-weight: 700;
		}
		.nav:not(.is-compact) .entry-item .icon {
			display: none;
		}
		/** Compact mode */
		.entry.hide-label :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			place-items: center;
		}
		.entry.hide-label :is(a, button) {
			padding: 0;
			border-left: 0;
		}
	`,"KOL-CARD":ee`
		:host {
			font-family: var(--font-family);
		}

		/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: white;
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 0.25rem var(--color-grey);
			border-radius: 0.25rem;
		}
		:host kol-heading-wc {
			line-height: 1.75rem;
		}
		:host div.header {
			padding: 1rem 1rem 0.5rem 1rem;
		}
		:host div.content {
			padding: 0.5rem 1rem 1rem;
			overflow: hidden;
		}
		:host div.footer {
			padding: 0.5rem 1rem;
		}
		:host > div > div.content + div.footer {
			border-top: 2px solid var(--color-ice);
		}
	`,"KOL-INPUT-CHECKBOX":ee`
		:host {
			font-family: var(--font-family);
		}
		/* INPUT */
		:host kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
			min-height: 44px;
		}
		:host kol-input.default:not(.hide-label) {
			grid-template-columns: 1.5rem auto;
			gap: 0.4em;
		}
		:host kol-input.switch:not(.hide-label) {
			grid-template-columns: 3.5rem auto;
			gap: 0.4em;
		}
		:host kol-input > div.input {
			display: inherit;
			min-height: 44px;
			order: 2;
		}
		:host kol-input > div.input input {
			margin: 0px;
		}
		:host kol-input:not(.disabled) :is(.input, label) {
			cursor: pointer;
		}
		:host kol-input.disabled :is(.input, label) {
			cursor: not-allowed;
		}
		:host kol-input > label {
			order: 3;
		}
		:host kol-input > kol-alert.error {
			order: 1;
			padding-top: 0.25em;
			grid-column: span 2 / auto;
		}
		:host kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		:host kol-input.error input:focus,
		kol-input.error select:focus,
		kol-input.error textarea:focus {
			outline-color: var(--color-red) !important;
		}
		:host kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		:host input {
			order: 1;
			width: 100%;
			border-color: var(--color-grey);
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			line-height: 24px;
			font-size: 1rem;
		}
		:host input:hover {
			border-color: var(--color-midnight);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		:host input:focus:hover {
			box-shadow: none;
		}
		:host input:active {
			box-shadow: none;
		}
		:host kol-alert {
			display: block;
			width: 100%;
		} /* CHECKBOX */
		:host kol-input label span {
			margin-top: 0.125rem;
		}
		:host .required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		:host kol-input input[type='checkbox'] {
			appearance: none;
			background-color: white;
			transition: 0.5s;
		}
		:host kol-input input[type='checkbox']:before {
			content: '';
		}
		:host kol-input input[type='checkbox']:checked {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
		}
		:host kol-input.default .checkbox-container {
			justify-content: flex-start;
		}
		:host kol-input.default input[type='checkbox']:indeterminate {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
		}
		:host kol-input.default .icon {
			color: var(--color-white);
			margin: -0.125rem 0 0 0.25rem; /* visually align */
		}
		:host kol-input.default input[type='checkbox'] {
			border-radius: var(--border-radius);
			height: calc(6 * var(--spacing));
			min-width: calc(6 * var(--spacing));
			width: calc(6 * var(--spacing));
		}
		.default {
			.icon::part(icon) {
				font-family: 'Material Symbols Rounded';
				font-weight: 900;
				margin-top: 1px;
			}
			&.checked .icon::part(icon)::before {
				content: 'check';
			}
			&.indeterminate .icon::part(icon)::before {
				content: 'remove';
			}
		}
		:host kol-input.switch input[type='checkbox'] {
			min-width: 3.5em;
			width: 3.5em;
			background-color: var(--color-grey);
			border-width: 0;
			height: 1.5em;
			border-radius: 1.25em;
			position: relative;
		}
		:host kol-input.switch input[type='checkbox']:before {
			transition: 0.5;
			width: 1.25em;
			height: 1.25em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			border-radius: 1.25em;
			background-color: white;
			position: absolute;
		}
		:host kol-input.switch input[type='checkbox']:checked {
			background-color: var(--color-midnight);
		}
		:host kol-input.switch input[type='checkbox']:checked:before {
			transform: translateX(2em);
			--tw-bg-opacity: 1;
		}
		:host kol-input.switch input[type='checkbox']:indeterminate {
			--tw-bg-opacity: 1;
		}
		:host kol-input.switch input[type='checkbox']:indeterminate:before {
			transform: translateX(1em);
		}
		.switch {
			& .checkbox-input-element {
				display: block;
			}
			& .icon {
				width: 1.25em;
				height: 1.25em;
				left: 2px;
				color: #000;
				&::part(icon) {
					font-family: 'Material Symbols Rounded';
					font-weight: 900;
				}
				&::part(icon)::before {
					content: 'add';
				}
			}
			&.checked .icon {
				transform: translate(2em, -50%);
				&::part(icon)::before {
					content: 'check';
				}
			}
			&.indeterminate .icon {
				transform: translate(1em, -50%);
				&::part(icon)::before {
					content: 'remove';
				}
			}
		}
		:host kol-input.button {
			row-gap: 0.5rem;
		}
		:host kol-input.button.checked > .input,
		:host kol-input.button.checked > label {
			background-color: var(--color-ice);
		}
		:host kol-input.button > label {
			background-color: var(--color-silver);
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
			min-height: 32px;
			align-items: center;
			display: flex;
			padding-right: 12px;
			width: 100%;
		}
		:host kol-input.button > .input {
			background-color: var(--color-silver);
			border-top-left-radius: var(--border-radius);
			border-bottom-left-radius: var(--border-radius);
			min-height: 32px;
			min-width: 32px;
			place-content: center;
		}
		:host kol-input.button.hide-label > .input {
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
		}
		:host kol-input.button > .input > div {
			display: flex;
		}
		:host kol-input.button .icon {
			height: auto;
		}
		.button:focus-within {
			border-radius: var(--a11y-min-size);
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
		}
	`,"KOL-INPUT-RADIO":ee`
		:host {
			font-family: var(--font-family);
		}
		/* INPUT */
		kol-input {
			display: grid;
			gap: 0.4em;
		}
		label {
			cursor: pointer;
			display: grid;
			line-height: 20px;
			gap: 8px;
			width: 100%;
		}
		input {
			cursor: pointer;
			width: 100%;
			border-color: var(--color-grey);
			border-width: 2px;
			border-style: solid;
			border-radius: 5px; /* padding: 10px 14px; */
			line-height: 24px;
			font-size: 16px;
		}
		input:hover {
			border-color: var(--color-midnight);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		input:focus:hover {
			box-shadow: none;
		}
		input:hover {
			border-color: var(--color-midnight);
		}
		kol-alert {
			display: block;
			width: 100%;
		}
		.required legend > span::after {
			content: '*';
			padding-left: 0.125em;
		} /* RADIO */
		fieldset {
			border: 0px;
			margin: 0px;
			padding: 0px;
			display: grid;
			gap: 0.25em;
		}
		.radio-input-wrapper {
			cursor: pointer;
			display: flex;
			flex-direction: row;
			align-items: center;
			position: relative;
			min-height: 44px;
			margin: 0;
			gap: 0.5rem;
		}
		.radio-input-wrapper label {
			cursor: pointer;
			display: flex;
			padding-left: 0.25em;
			width: 100%;
		}
		.radio-input-wrapper label span {
			margin-top: 0.125em;
		}
		.radio-input-wrapper input[type='radio'] {
			appearance: none;
			transition: 0.5s;
			border-radius: 100%;
			height: calc(6 * var(--spacing));
			min-width: calc(6 * var(--spacing));
			width: calc(6 * var(--spacing));
		}
		.radio-input-wrapper input[type='radio']:before {
			content: '';
			cursor: pointer;
			border-radius: 100%;
			display: block;
		}
		.radio-input-wrapper input[type='radio']:checked:before {
			background-color: var(--color-midnight);
		}
		.radio-input-wrapper input[type='radio']:disabled {
			cursor: not-allowed;
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		kol-alert.error {
			order: 1;
		}
		fieldset legend {
			order: 2;
			display: contents;
		}
		fieldset kol-input {
			order: 3;
		}
		fieldset.error {
			border-left: 3px solid var(--color-red);
			color: var(--color-red);
			font-weight: 700;
			padding-left: 1em;
		}
		fieldset.error input:focus,
		fieldset.error select:focus,
		fieldset.error textarea:focus {
			outline-color: var(--color-red) !important;
		}
		fieldset.error kol-alert.error {
			margin-left: -0.25em;
			color: var(--color-red);
			font-weight: 700;
		}
		fieldset.horizontal {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem 1rem;
		}
		fieldset.horizontal legend {
			display: inline-block;
			margin-bottom: 0.25em;
		}
		fieldset .input-slot {
			gap: 0.5rem;
		}
		.radio-input-wrapper label {
			padding-left: 0;
		}
	`,"KOL-TOAST-CONTAINER":ee`
		:host {
			top: 1rem;
			right: 1rem;
			width: 440px;
			max-width: 100%;
		}
		.toast {
			margin-top: 1rem;
		}
	`,"KOL-TABS":ee`
		:host {
			font-family: var(--font-family);
		}
		:host kol-button-group-wc {
			display: inline-flex;
			gap: 2rem;
			flex-wrap: wrap;
		}
		button {
			box-sizing: border-box;
			background-color: transparent;
			border: 0;
			border-radius: 0.25rem;
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			min-height: 44px;
			min-width: 44px;
			color: var(--color-grey);
			padding: 0;
		}
		button:hover {
			color: var(--color-midnight);
		}
		button.primary,
		button.selected {
			/* border-bottom: 0.025rem solid var(--color-midnight); */
			color: var(--color-midnight);
		}
		button kol-span-wc > span {
			border-bottom: 0.25em solid;
		}
		button kol-span-wc > span {
			gap: 0.5rem;
		}
		:host > div > div {
			padding: 0.25em 0;
		}
		.close-button {
			display: none;
			font-size: 25%;
			height: fit-content;
			width: 0;
		}
		.close-button button {
			width: 1rem;
			position: relative;
			height: 1rem;
			left: -4.25em;
			top: 0.25em;
		}
		div[role='tabpanel'] {
			height: 100%;
		}
		div.grid {
			height: 100%;
		}
		:host > .tabs-align-right {
			display: grid;
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-right kol-button-group-wc {
			display: grid;
			order: 2;
		}
		:host > .tabs-align-left {
			display: grid;
			grid-template-columns: auto 1fr;
		}
		:host > .tabs-align-left kol-button-group-wc {
			display: grid;
			order: 0;
		}
		:host > .tabs-align-bottom {
			display: grid;
			grid-template-rows: 1fr auto;
		}
		:host > .tabs-align-bottom kol-button-group-wc {
			order: 2;
		}
		:host > .tabs-align-bottom kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {
			margin: 0px 1em 0px 0px;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div {
			margin: 0px 1em;
		}
		:host > .tabs-align-top {
			display: grid;
			grid-template-rows: auto 1fr;
		}
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-top kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {
			margin: 0px 1em 0px 0px;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div {
			margin: 0px 1em;
		}
		:host > div {
			display: grid;
		}
		:host > div.tabs-align-left {
			grid-template-columns: auto 1fr;
		}
		:host > div.tabs-align-right {
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-bottom kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			order: 1;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			gap: inherit;
		}
		:host > div.tabs-align-left kol-button-group-wc > div,
		:host > div.tabs-align-left kol-button-group-wc > div > div,
		:host > div.tabs-align-right kol-button-group-wc > div,
		:host > div.tabs-align-right kol-button-group-wc > div > div {
			display: grid;
		}
		:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
		:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
			width: 100%;
		}
		:host > div.tabs-align-bottom kol-button-group-wc div,
		:host > div.tabs-align-top kol-button-group-wc div {
			display: flex;
			flex-wrap: wrap;
		}
		:host kol-button-group-wc button {
			border: none;
		}
	`,"KOL-PAGINATION":ee`
		:host {
			font-family: var(--font-family);
		}
		.icon::part(icon) {
			font-family: 'Material Symbols Rounded';
			font-weight: 400;
		}
		.icon {
			font-size: 18px;
		}
		.first .icon::part(icon)::before {
			content: 'keyboard_double_arrow_left';
		}
		.previous .icon::part(icon)::before {
			content: 'chevron_left';
		}
		.next .icon::part(icon)::before {
			content: 'chevron_right';
		}
		.last .icon::part(icon)::before {
			content: 'keyboard_double_arrow_right';
		}
		.button:focus {
			outline: none;
		}
		.button-inner {
			background-color: var(--color-white);
			border-radius: var(--a11y-min-size);
			border: 2px solid var(--color-midnight);
			color: var(--color-midnight);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		.button:focus .button-inner {
			outline-offset: 2px;
			outline: 3px solid var(--color-ocean);
			transition: outline-offset 0.2s linear;
		}
		.button:is(:active, :hover):not(:disabled) .button-inner {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.button:active .button-inner {
			border-color: var(--color-white);
			outline: none;
		}
		.selected .button-inner {
			background-color: var(--color-ice);
			border-color: var(--color-ice);
			font-weight: 700;
		}
	`,"KOL-INPUT-RANGE":ee`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			gap: 0.25em;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		.inputs-wrapper {
			gap: 1em;
		}
		input::placeholder {
			color: var(--color-grey);
		}
		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 1em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input.icon-left > kol-icon:first-child {
			margin-right: 0.5em;
		}
		.input.icon-right > kol-icon:last-child {
			margin-left: 0.5em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}
		kol-input.error kol-alert.error {
			color: var(--color-red);
			font-weight: 700;
		}
		kol-input.disabled :is(.input) {
			background-color: var(--color-smoke);
			border-color: var(--color-granite);
			color: var(--color-black);
		}
	`,"KOL-KOLIBRI":ee`
		:host {
			font-family: var(--font-family);
		}
	`,"KOL-LINK-BUTTON":ee`
		:host {
			font-family: var(--font-family);
		}
		:is(a, button) {
			font-size: 1.125em;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-ocean);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-midnight);
			border-color: var(--color-midnight);
			color: var(--color-white);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-midnight);
			color: var(--color-midnight);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-white);
			background-color: var(--color-white);
			box-shadow: none;
			color: var(--color-midnight);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-crimson);
			border-color: var(--color-crimson);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-white);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 8px;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** small ghost button */
		.ghost :is(a, button).small > kol-span-wc {
			border: none;
			background-color: transparent;
			box-shadow: none;
		}
		.ghost :is(a, button).small > kol-span-wc > span {
			border-radius: 1.5em;
			border-style: solid;
			border-width: 2px;
			border-color: var(--color-white);
			background-color: var(--color-white);
		}
		.ghost :is(a, button).small:active > kol-span-wc > span,
		.ghost :is(a, button).small:hover > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:active > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:hover > kol-span-wc > span {
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-white);
		} /** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).small.transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
	`,"KOL-BUTTON-LINK":ee`
		:is(a, button) {
			color: var(--color-midnight);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
			font-size: inherit;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: 2px solid;
		}
		a:hover:not([aria-disabled]),
		button:hover:not([disabled]) {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-ABBR":ee`
		abbr {
			border-bottom: dashed var(--color-black) 1px;
			text-decoration: none !important;
		}
	`,"KOL-BREADCRUMB":ee`
		:host {
			font-family: var(--font-family);
		}
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon {
			font-size: 1.5rem;
		}
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon::part(icon) {
			font-family: 'Material Symbols Rounded';
			font-weight: 400;
			color: var(--color-grey);
		}
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon::part(icon)::before {
			content: 'chevron_right';
		}
		kol-link::part(icon) {
			font-size: 1.25rem;
		}
		ul li > :is(span, kol-link) {
			line-height: 1.25rem;
			height: 20px;
		}
		ul li:last-child > span {
			color: var(--color-grey);
		}
		kol-link {
			font-family: var(--font-family);
		}
	`,"KOL-MODAL":ee`
		:host .overlay .modal {
			max-height: calc(100% - 32px);
		}
	`,"KOL-ICON":ee`
		@font-face {
			font-family: 'Material Symbols Outlined';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-outlined.woff2') format('woff2');
		}
		:host > i.outlined {
			font-family: 'Material Symbols Outlined';
		}
		@font-face {
			font-family: 'Material Symbols Rounded';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-rounded.woff2') format('woff2');
		}
		:host > i.rounded {
			font-family: 'Material Symbols Rounded';
		}
		@font-face {
			font-family: 'Material Symbols Sharp';
			font-style: normal;
			font-weight: 100 700;
			font-display: block;
			src: url('./material-symbols-sharp.woff2') format('woff2');
		}
		:host > i.sharp {
			font-family: 'Material Symbols Sharp';
		}
		:host {
			display: flex;
			place-items: center;
			width: 1em;
			height: 1em;
		}
		:host > i::before {
			display: block;
		}
		:host > i {
			width: 1em;
			height: 1em;
			font-family: 'Material Symbols Rounded';
			font-weight: normal;
			font-style: normal;
			font-size: 24px;
			line-height: 1;
			letter-spacing: normal;
			text-transform: none;
			display: inline-block;
			white-space: nowrap;
			word-wrap: normal;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-rendering: optimizeLegibility;
			font-feature-settings: 'liga';
			font-variation-settings: 'FILL' 1;
		}
		:host > i.transition {
			transition-property: transform;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
		}
		:host > i.fill {
			font-variation-settings: 'FILL' 1;
		}
		:host > i.unfill {
			font-variation-settings: 'FILL' 0;
		}
		:host > i.rotate-90 {
			transform: rotate(90deg);
		}
		:host > i.rotate-180 {
			transform: rotate(180deg);
		}
		:host > i.rotate-270 {
			transform: rotate(270deg);
		} /* https://github.com/google/material-design-icons/blob/master/variablefont/MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.codepoints */
		:host > i.\\0000310k:before {
			content: '10k';
		}
		:host > i.\\0000310mp:before {
			content: '10mp';
		}
		:host > i.\\0000311mp:before {
			content: '11mp';
		}
		:host > i.\\00003123:before {
			content: '123';
		}
		:host > i.\\0000312mp:before {
			content: '12mp';
		}
		:host > i.\\0000313mp:before {
			content: '13mp';
		}
		:host > i.\\0000314mp:before {
			content: '14mp';
		}
		:host > i.\\0000315mp:before {
			content: '15mp';
		}
		:host > i.\\0000316mp:before {
			content: '16mp';
		}
		:host > i.\\0000317mp:before {
			content: '17mp';
		}
		:host > i.\\0000318_up_rating:before {
			content: '18_up_rating';
		}
		:host > i.\\0000318mp:before {
			content: '18mp';
		}
		:host > i.\\0000319mp:before {
			content: '19mp';
		}
		:host > i.\\000031k:before {
			content: '1k';
		}
		:host > i.\\000031k_plus:before {
			content: '1k_plus';
		}
		:host > i.\\000031x_mobiledata:before {
			content: '1x_mobiledata';
		}
		:host > i.\\000031x_mobiledata_badge:before {
			content: '1x_mobiledata_badge';
		}
		:host > i.\\0000320mp:before {
			content: '20mp';
		}
		:host > i.\\0000321mp:before {
			content: '21mp';
		}
		:host > i.\\0000322mp:before {
			content: '22mp';
		}
		:host > i.\\0000323mp:before {
			content: '23mp';
		}
		:host > i.\\0000324mp:before {
			content: '24mp';
		}
		:host > i.\\000032d:before {
			content: '2d';
		}
		:host > i.\\000032k:before {
			content: '2k';
		}
		:host > i.\\000032k_plus:before {
			content: '2k_plus';
		}
		:host > i.\\000032mp:before {
			content: '2mp';
		}
		:host > i.\\0000330fps:before {
			content: '30fps';
		}
		:host > i.\\0000330fps_select:before {
			content: '30fps_select';
		}
		:host > i.\\00003360:before {
			content: '360';
		}
		:host > i.\\000033d_rotation:before {
			content: '3d_rotation';
		}
		:host > i.\\000033g_mobiledata:before {
			content: '3g_mobiledata';
		}
		:host > i.\\000033g_mobiledata_badge:before {
			content: '3g_mobiledata_badge';
		}
		:host > i.\\000033k:before {
			content: '3k';
		}
		:host > i.\\000033k_plus:before {
			content: '3k_plus';
		}
		:host > i.\\000033mp:before {
			content: '3mp';
		}
		:host > i.\\000033p:before {
			content: '3p';
		}
		:host > i.\\000034g_mobiledata:before {
			content: '4g_mobiledata';
		}
		:host > i.\\000034g_mobiledata_badge:before {
			content: '4g_mobiledata_badge';
		}
		:host > i.\\000034g_plus_mobiledata:before {
			content: '4g_plus_mobiledata';
		}
		:host > i.\\000034k:before {
			content: '4k';
		}
		:host > i.\\000034k_plus:before {
			content: '4k_plus';
		}
		:host > i.\\000034mp:before {
			content: '4mp';
		}
		:host > i.\\0000350mp:before {
			content: '50mp';
		}
		:host > i.\\000035g:before {
			content: '5g';
		}
		:host > i.\\000035g_mobiledata_badge:before {
			content: '5g_mobiledata_badge';
		}
		:host > i.\\000035k:before {
			content: '5k';
		}
		:host > i.\\000035k_plus:before {
			content: '5k_plus';
		}
		:host > i.\\000035mp:before {
			content: '5mp';
		}
		:host > i.\\0000360fps:before {
			content: '60fps';
		}
		:host > i.\\0000360fps_select:before {
			content: '60fps_select';
		}
		:host > i.\\000036_ft_apart:before {
			content: '6_ft_apart';
		}
		:host > i.\\000036k:before {
			content: '6k';
		}
		:host > i.\\000036k_plus:before {
			content: '6k_plus';
		}
		:host > i.\\000036mp:before {
			content: '6mp';
		}
		:host > i.\\000037k:before {
			content: '7k';
		}
		:host > i.\\000037k_plus:before {
			content: '7k_plus';
		}
		:host > i.\\000037mp:before {
			content: '7mp';
		}
		:host > i.\\000038k:before {
			content: '8k';
		}
		:host > i.\\000038k_plus:before {
			content: '8k_plus';
		}
		:host > i.\\000038mp:before {
			content: '8mp';
		}
		:host > i.\\000039k:before {
			content: '9k';
		}
		:host > i.\\000039k_plus:before {
			content: '39k_plus';
		}
		:host > i.\\000039mp:before {
			content: '9mp';
		}
		:host > i.abc:before {
			content: 'abc';
		}
		:host > i.ac_unit:before {
			content: 'ac_unit';
		}
		:host > i.access_alarm:before {
			content: 'access_alarm';
		}
		:host > i.access_alarms:before {
			content: 'access_alarms';
		}
		:host > i.access_time:before {
			content: 'access_time';
		}
		:host > i.access_time_filled:before {
			content: 'access_time_filled';
		}
		:host > i.accessibility:before {
			content: 'accessibility';
		}
		:host > i.accessibility_new:before {
			content: 'accessibility_new';
		}
		:host > i.accessible:before {
			content: 'accessible';
		}
		:host > i.accessible_forward:before {
			content: 'accessible_forward';
		}
		:host > i.account_balance:before {
			content: 'account_balance';
		}
		:host > i.account_balance_wallet:before {
			content: 'account_balance_wallet';
		}
		:host > i.account_box:before {
			content: 'account_box';
		}
		:host > i.account_child:before {
			content: 'account_child';
		}
		:host > i.account_child_invert:before {
			content: 'account_child_invert';
		}
		:host > i.account_circle:before {
			content: 'account_circle';
		}
		:host > i.account_circle_filled:before {
			content: 'account_circle_filled';
		}
		:host > i.account_circle_off:before {
			content: 'account_circle_off';
		}
		:host > i.account_tree:before {
			content: 'account_tree';
		}
		:host > i.action_key:before {
			content: 'action_key';
		}
		:host > i.activity_zone:before {
			content: 'activity_zone';
		}
		:host > i.acute:before {
			content: 'acute';
		}
		:host > i.ad:before {
			content: 'ad';
		}
		:host > i.ad_group:before {
			content: 'ad_group';
		}
		:host > i.ad_group_off:before {
			content: 'ad_group_off';
		}
		:host > i.ad_off:before {
			content: 'ad_off';
		}
		:host > i.ad_units:before {
			content: 'ad_units';
		}
		:host > i.adb:before {
			content: 'adb';
		}
		:host > i.add:before {
			content: 'add';
		}
		:host > i.add_a_photo:before {
			content: 'add_a_photo';
		}
		:host > i.add_ad:before {
			content: 'add_ad';
		}
		:host > i.add_alarm:before {
			content: 'add_alarm';
		}
		:host > i.add_alert:before {
			content: 'add_alert';
		}
		:host > i.add_box:before {
			content: 'add_box';
		}
		:host > i.add_business:before {
			content: 'add_business';
		}
		:host > i.add_call:before {
			content: 'add_call';
		}
		:host > i.add_card:before {
			content: 'add_card';
		}
		:host > i.add_chart:before {
			content: 'add_chart';
		}
		:host > i.add_circle:before {
			content: 'add_circle';
		}
		:host > i.add_circle_outline:before {
			content: 'add_circle_outline';
		}
		:host > i.add_comment:before {
			content: 'add_comment';
		}
		:host > i.add_home:before {
			content: 'add_home';
		}
		:host > i.add_home_work:before {
			content: 'add_home_work';
		}
		:host > i.add_ic_call:before {
			content: 'add_ic_call';
		}
		:host > i.add_link:before {
			content: 'add_link';
		}
		:host > i.add_location:before {
			content: 'add_location';
		}
		:host > i.add_location_alt:before {
			content: 'add_location_alt';
		}
		:host > i.add_moderator:before {
			content: 'add_moderator';
		}
		:host > i.add_notes:before {
			content: 'add_notes';
		}
		:host > i.add_photo_alternate:before {
			content: 'add_photo_alternate';
		}
		:host > i.add_reaction:before {
			content: 'add_reaction';
		}
		:host > i.add_road:before {
			content: 'add_road';
		}
		:host > i.add_shopping_cart:before {
			content: 'add_shopping_cart';
		}
		:host > i.add_task:before {
			content: 'add_task';
		}
		:host > i.add_to_drive:before {
			content: 'add_to_drive';
		}
		:host > i.add_to_home_screen:before {
			content: 'add_to_home_screen';
		}
		:host > i.add_to_photos:before {
			content: 'add_to_photos';
		}
		:host > i.add_to_queue:before {
			content: 'add_to_queue';
		}
		:host > i.addchart:before {
			content: 'addchart';
		}
		:host > i.adf_scanner:before {
			content: 'adf_scanner';
		}
		:host > i.adjust:before {
			content: 'adjust';
		}
		:host > i.admin_meds:before {
			content: 'admin_meds';
		}
		:host > i.admin_panel_settings:before {
			content: 'admin_panel_settings';
		}
		:host > i.ads_click:before {
			content: 'ads_click';
		}
		:host > i.agender:before {
			content: 'agender';
		}
		:host > i.agriculture:before {
			content: 'agriculture';
		}
		:host > i.air:before {
			content: 'air';
		}
		:host > i.air_freshener:before {
			content: 'air_freshener';
		}
		:host > i.air_purifier:before {
			content: 'air_purifier';
		}
		:host > i.air_purifier_gen:before {
			content: 'air_purifier_gen';
		}
		:host > i.airline_seat_flat:before {
			content: 'airline_seat_flat';
		}
		:host > i.airline_seat_flat_angled:before {
			content: 'airline_seat_flat_angled';
		}
		:host > i.airline_seat_individual_suite:before {
			content: 'airline_seat_individual_suite';
		}
		:host > i.airline_seat_legroom_extra:before {
			content: 'airline_seat_legroom_extra';
		}
		:host > i.airline_seat_legroom_normal:before {
			content: 'airline_seat_legroom_normal';
		}
		:host > i.airline_seat_legroom_reduced:before {
			content: 'airline_seat_legroom_reduced';
		}
		:host > i.airline_seat_recline_extra:before {
			content: 'airline_seat_recline_extra';
		}
		:host > i.airline_seat_recline_normal:before {
			content: 'airline_seat_recline_normal';
		}
		:host > i.airline_stops:before {
			content: 'airline_stops';
		}
		:host > i.airlines:before {
			content: 'airlines';
		}
		:host > i.airplane_ticket:before {
			content: 'airplane_ticket';
		}
		:host > i.airplanemode_active:before {
			content: 'airplanemode_active';
		}
		:host > i.airplanemode_inactive:before {
			content: 'airplanemode_inactive';
		}
		:host > i.airplay:before {
			content: 'airplay';
		}
		:host > i.airport_shuttle:before {
			content: 'airport_shuttle';
		}
		:host > i.airware:before {
			content: 'airware';
		}
		:host > i.airwave:before {
			content: 'airwave';
		}
		:host > i.alarm:before {
			content: 'alarm';
		}
		:host > i.alarm_add:before {
			content: 'alarm_add';
		}
		:host > i.alarm_off:before {
			content: 'alarm_off';
		}
		:host > i.alarm_on:before {
			content: 'alarm_on';
		}
		:host > i.alarm_smart_wake:before {
			content: 'alarm_smart_wake';
		}
		:host > i.album:before {
			content: 'album';
		}
		:host > i.align_center:before {
			content: 'align_center';
		}
		:host > i.align_end:before {
			content: 'align_end';
		}
		:host > i.align_flex_center:before {
			content: 'align_flex_center';
		}
		:host > i.align_flex_end:before {
			content: 'align_flex_end';
		}
		:host > i.align_flex_start:before {
			content: 'align_flex_start';
		}
		:host > i.align_horizontal_center:before {
			content: 'align_horizontal_center';
		}
		:host > i.align_horizontal_left:before {
			content: 'align_horizontal_left';
		}
		:host > i.align_horizontal_right:before {
			content: 'align_horizontal_right';
		}
		:host > i.align_items_stretch:before {
			content: 'align_items_stretch';
		}
		:host > i.align_justify_center:before {
			content: 'align_justify_center';
		}
		:host > i.align_justify_flex_end:before {
			content: 'align_justify_flex_end';
		}
		:host > i.align_justify_flex_start:before {
			content: 'align_justify_flex_start';
		}
		:host > i.align_justify_space_around:before {
			content: 'align_justify_space_around';
		}
		:host > i.align_justify_space_between:before {
			content: 'align_justify_space_between';
		}
		:host > i.align_justify_space_even:before {
			content: 'align_justify_space_even';
		}
		:host > i.align_justify_stretch:before {
			content: 'align_justify_stretch';
		}
		:host > i.align_self_stretch:before {
			content: 'align_self_stretch';
		}
		:host > i.align_space_around:before {
			content: 'align_space_around';
		}
		:host > i.align_space_between:before {
			content: 'align_space_between';
		}
		:host > i.align_space_even:before {
			content: 'align_space_even';
		}
		:host > i.align_start:before {
			content: 'align_start';
		}
		:host > i.align_stretch:before {
			content: 'align_stretch';
		}
		:host > i.align_vertical_bottom:before {
			content: 'align_vertical_bottom';
		}
		:host > i.align_vertical_center:before {
			content: 'align_vertical_center';
		}
		:host > i.align_vertical_top:before {
			content: 'align_vertical_top';
		}
		:host > i.all_inbox:before {
			content: 'all_inbox';
		}
		:host > i.all_inclusive:before {
			content: 'all_inclusive';
		}
		:host > i.all_match:before {
			content: 'all_match';
		}
		:host > i.all_out:before {
			content: 'all_out';
		}
		:host > i.allergies:before {
			content: 'allergies';
		}
		:host > i.allergy:before {
			content: 'allergy';
		}
		:host > i.alt_route:before {
			content: 'alt_route';
		}
		:host > i.alternate_email:before {
			content: 'alternate_email';
		}
		:host > i.altitude:before {
			content: 'altitude';
		}
		:host > i.ambient_screen:before {
			content: 'ambient_screen';
		}
		:host > i.ambulance:before {
			content: 'ambulance';
		}
		:host > i.amend:before {
			content: 'amend';
		}
		:host > i.amp_stories:before {
			content: 'amp_stories';
		}
		:host > i.analytics:before {
			content: 'analytics';
		}
		:host > i.anchor:before {
			content: 'anchor';
		}
		:host > i.android:before {
			content: 'android';
		}
		:host > i.animation:before {
			content: 'animation';
		}
		:host > i.announcement:before {
			content: 'announcement';
		}
		:host > i.aod:before {
			content: 'aod';
		}
		:host > i.aod_tablet:before {
			content: 'aod_tablet';
		}
		:host > i.aod_watch:before {
			content: 'aod_watch';
		}
		:host > i.apartment:before {
			content: 'apartment';
		}
		:host > i.api:before {
			content: 'api';
		}
		:host > i.apk_document:before {
			content: 'apk_document';
		}
		:host > i.apk_install:before {
			content: 'apk_install';
		}
		:host > i.app_badging:before {
			content: 'app_badging';
		}
		:host > i.app_blocking:before {
			content: 'app_blocking';
		}
		:host > i.app_promo:before {
			content: 'app_promo';
		}
		:host > i.app_registration:before {
			content: 'app_registration';
		}
		:host > i.app_settings_alt:before {
			content: 'app_settings_alt';
		}
		:host > i.app_shortcut:before {
			content: 'app_shortcut';
		}
		:host > i.apparel:before {
			content: 'apparel';
		}
		:host > i.approval:before {
			content: 'approval';
		}
		:host > i.approval_delegation:before {
			content: 'approval_delegation';
		}
		:host > i.apps:before {
			content: 'apps';
		}
		:host > i.apps_outage:before {
			content: 'apps_outage';
		}
		:host > i.aq:before {
			content: 'aq';
		}
		:host > i.aq_indoor:before {
			content: 'aq_indoor';
		}
		:host > i.ar_on_you:before {
			content: 'ar_on_you';
		}
		:host > i.ar_stickers:before {
			content: 'ar_stickers';
		}
		:host > i.architecture:before {
			content: 'architecture';
		}
		:host > i.archive:before {
			content: 'archive';
		}
		:host > i.area_chart:before {
			content: 'area_chart';
		}
		:host > i.arming_countdown:before {
			content: 'arming_countdown';
		}
		:host > i.arrow_and_edge:before {
			content: 'arrow_and_edge';
		}
		:host > i.arrow_back:before {
			content: 'arrow_back';
		}
		:host > i.arrow_back_ios:before {
			content: 'arrow_back_ios';
		}
		:host > i.arrow_back_ios_new:before {
			content: 'arrow_back_ios_new';
		}
		:host > i.arrow_circle_down:before {
			content: 'arrow_circle_down';
		}
		:host > i.arrow_circle_left:before {
			content: 'arrow_circle_left';
		}
		:host > i.arrow_circle_right:before {
			content: 'arrow_circle_right';
		}
		:host > i.arrow_circle_up:before {
			content: 'arrow_circle_up';
		}
		:host > i.arrow_downward:before {
			content: 'arrow_downward';
		}
		:host > i.arrow_downward_alt:before {
			content: 'arrow_downward_alt';
		}
		:host > i.arrow_drop_down:before {
			content: 'arrow_drop_down';
		}
		:host > i.arrow_drop_down_circle:before {
			content: 'arrow_drop_down_circle';
		}
		:host > i.arrow_drop_up:before {
			content: 'arrow_drop_up';
		}
		:host > i.arrow_forward:before {
			content: 'arrow_forward';
		}
		:host > i.arrow_forward_ios:before {
			content: 'arrow_forward_ios';
		}
		:host > i.arrow_insert:before {
			content: 'arrow_insert';
		}
		:host > i.arrow_left:before {
			content: 'arrow_left';
		}
		:host > i.arrow_left_alt:before {
			content: 'arrow_left_alt';
		}
		:host > i.arrow_or_edge:before {
			content: 'arrow_or_edge';
		}
		:host > i.arrow_outward:before {
			content: 'arrow_outward';
		}
		:host > i.arrow_range:before {
			content: 'arrow_range';
		}
		:host > i.arrow_right:before {
			content: 'arrow_right';
		}
		:host > i.arrow_right_alt:before {
			content: 'arrow_right_alt';
		}
		:host > i.arrow_selector_tool:before {
			content: 'arrow_selector_tool';
		}
		:host > i.arrow_split:before {
			content: 'arrow_split';
		}
		:host > i.arrow_top_left:before {
			content: 'arrow_top_left';
		}
		:host > i.arrow_top_right:before {
			content: 'arrow_top_right';
		}
		:host > i.arrow_upward:before {
			content: 'arrow_upward';
		}
		:host > i.arrow_upward_alt:before {
			content: 'arrow_upward_alt';
		}
		:host > i.arrows_more_down:before {
			content: 'arrows_more_down';
		}
		:host > i.arrows_more_up:before {
			content: 'arrows_more_up';
		}
		:host > i.arrows_outward:before {
			content: 'arrows_outward';
		}
		:host > i.art_track:before {
			content: 'art_track';
		}
		:host > i.article:before {
			content: 'article';
		}
		:host > i.article_shortcut:before {
			content: 'article_shortcut';
		}
		:host > i.artist:before {
			content: 'artist';
		}
		:host > i.aspect_ratio:before {
			content: 'aspect_ratio';
		}
		:host > i.assessment:before {
			content: 'assessment';
		}
		:host > i.assignment:before {
			content: 'assignment';
		}
		:host > i.assignment_add:before {
			content: 'assignment_add';
		}
		:host > i.assignment_ind:before {
			content: 'assignment_ind';
		}
		:host > i.assignment_late:before {
			content: 'assignment_late';
		}
		:host > i.assignment_return:before {
			content: 'assignment_return';
		}
		:host > i.assignment_returned:before {
			content: 'assignment_returned';
		}
		:host > i.assignment_turned_in:before {
			content: 'assignment_turned_in';
		}
		:host > i.assist_walker:before {
			content: 'assist_walker';
		}
		:host > i.assistant:before {
			content: 'assistant';
		}
		:host > i.assistant_device:before {
			content: 'assistant_device';
		}
		:host > i.assistant_direction:before {
			content: 'assistant_direction';
		}
		:host > i.assistant_navigation:before {
			content: 'assistant_navigation';
		}
		:host > i.assistant_on_hub:before {
			content: 'assistant_on_hub';
		}
		:host > i.assistant_photo:before {
			content: 'assistant_photo';
		}
		:host > i.assured_workload:before {
			content: 'assured_workload';
		}
		:host > i.asterisk:before {
			content: 'asterisk';
		}
		:host > i.astrophotography_auto:before {
			content: 'astrophotography_auto';
		}
		:host > i.astrophotography_off:before {
			content: 'astrophotography_off';
		}
		:host > i.atm:before {
			content: 'atm';
		}
		:host > i.atr:before {
			content: 'atr';
		}
		:host > i.attach_email:before {
			content: 'attach_email';
		}
		:host > i.attach_file:before {
			content: 'attach_file';
		}
		:host > i.attach_file_add:before {
			content: 'attach_file_add';
		}
		:host > i.attach_money:before {
			content: 'attach_money';
		}
		:host > i.attachment:before {
			content: 'attachment';
		}
		:host > i.attractions:before {
			content: 'attractions';
		}
		:host > i.attribution:before {
			content: 'attribution';
		}
		:host > i.audio_description:before {
			content: 'audio_description';
		}
		:host > i.audio_file:before {
			content: 'audio_file';
		}
		:host > i.audio_video_receiver:before {
			content: 'audio_video_receiver';
		}
		:host > i.audiotrack:before {
			content: 'audiotrack';
		}
		:host > i.auto_activity_zone:before {
			content: 'auto_activity_zone';
		}
		:host > i.auto_awesome:before {
			content: 'auto_awesome';
		}
		:host > i.auto_awesome_mosaic:before {
			content: 'auto_awesome_mosaic';
		}
		:host > i.auto_awesome_motion:before {
			content: 'auto_awesome_motion';
		}
		:host > i.auto_delete:before {
			content: 'auto_delete';
		}
		:host > i.auto_detect_voice:before {
			content: 'auto_detect_voice';
		}
		:host > i.auto_draw_solid:before {
			content: 'auto_draw_solid';
		}
		:host > i.auto_fix:before {
			content: 'auto_fix';
		}
		:host > i.auto_fix_high:before {
			content: 'auto_fix_high';
		}
		:host > i.auto_fix_normal:before {
			content: 'auto_fix_normal';
		}
		:host > i.auto_fix_off:before {
			content: 'auto_fix_off';
		}
		:host > i.auto_graph:before {
			content: 'auto_graph';
		}
		:host > i.auto_label:before {
			content: 'auto_label';
		}
		:host > i.auto_meeting_room:before {
			content: 'auto_meeting_room';
		}
		:host > i.auto_mode:before {
			content: 'auto_mode';
		}
		:host > i.auto_read_pause:before {
			content: 'auto_read_pause';
		}
		:host > i.auto_read_play:before {
			content: 'auto_read_play';
		}
		:host > i.auto_schedule:before {
			content: 'auto_schedule';
		}
		:host > i.auto_stories:before {
			content: 'auto_stories';
		}
		:host > i.auto_timer:before {
			content: 'auto_timer';
		}
		:host > i.auto_towing:before {
			content: 'auto_towing';
		}
		:host > i.auto_transmission:before {
			content: 'auto_transmission';
		}
		:host > i.auto_videocam:before {
			content: 'auto_videocam';
		}
		:host > i.autofps_select:before {
			content: 'autofps_select';
		}
		:host > i.autopause:before {
			content: 'autopause';
		}
		:host > i.autopay:before {
			content: 'autopay';
		}
		:host > i.autoplay:before {
			content: 'autoplay';
		}
		:host > i.autorenew:before {
			content: 'autorenew';
		}
		:host > i.autostop:before {
			content: 'autostop';
		}
		:host > i.av_timer:before {
			content: 'av_timer';
		}
		:host > i.avg_pace:before {
			content: 'avg_pace';
		}
		:host > i.avg_time:before {
			content: 'avg_time';
		}
		:host > i.award_star:before {
			content: 'award_star';
		}
		:host > i.azm:before {
			content: 'azm';
		}
		:host > i.baby_changing_station:before {
			content: 'baby_changing_station';
		}
		:host > i.back_hand:before {
			content: 'back_hand';
		}
		:host > i.back_to_tab:before {
			content: 'back_to_tab';
		}
		:host > i.background_dot_large:before {
			content: 'background_dot_large';
		}
		:host > i.background_dot_small:before {
			content: 'background_dot_small';
		}
		:host > i.background_grid_small:before {
			content: 'background_grid_small';
		}
		:host > i.background_replace:before {
			content: 'background_replace';
		}
		:host > i.backlight_high:before {
			content: 'backlight_high';
		}
		:host > i.backlight_high_off:before {
			content: 'backlight_high_off';
		}
		:host > i.backlight_low:before {
			content: 'backlight_low';
		}
		:host > i.backpack:before {
			content: 'backpack';
		}
		:host > i.backspace:before {
			content: 'backspace';
		}
		:host > i.backup:before {
			content: 'backup';
		}
		:host > i.backup_table:before {
			content: 'backup_table';
		}
		:host > i.badge:before {
			content: 'badge';
		}
		:host > i.badge_critical_battery:before {
			content: 'badge_critical_battery';
		}
		:host > i.bakery_dining:before {
			content: 'bakery_dining';
		}
		:host > i.balance:before {
			content: 'balance';
		}
		:host > i.balcony:before {
			content: 'balcony';
		}
		:host > i.ballot:before {
			content: 'ballot';
		}
		:host > i.bar_chart:before {
			content: 'bar_chart';
		}
		:host > i.bar_chart_4_bars:before {
			content: 'bar_chart_4_bars';
		}
		:host > i.barcode:before {
			content: 'barcode';
		}
		:host > i.barcode_reader:before {
			content: 'barcode_reader';
		}
		:host > i.barcode_scanner:before {
			content: 'barcode_scanner';
		}
		:host > i.barefoot:before {
			content: 'barefoot';
		}
		:host > i.batch_prediction:before {
			content: 'batch_prediction';
		}
		:host > i.bath_outdoor:before {
			content: 'bath_outdoor';
		}
		:host > i.bath_private:before {
			content: 'bath_private';
		}
		:host > i.bath_public_large:before {
			content: 'bath_public_large';
		}
		:host > i.bathroom:before {
			content: 'bathroom';
		}
		:host > i.bathtub:before {
			content: 'bathtub';
		}
		:host > i.battery_0_bar:before {
			content: 'battery_0_bar';
		}
		:host > i.battery_1_bar:before {
			content: 'battery_1_bar';
		}
		:host > i.battery_20:before {
			content: 'battery_20';
		}
		:host > i.battery_2_bar:before {
			content: 'battery_2_bar';
		}
		:host > i.battery_30:before {
			content: 'battery_30';
		}
		:host > i.battery_3_bar:before {
			content: 'battery_3_bar';
		}
		:host > i.battery_4_bar:before {
			content: 'battery_4_bar';
		}
		:host > i.battery_50:before {
			content: 'battery_50';
		}
		:host > i.battery_5_bar:before {
			content: 'battery_5_bar';
		}
		:host > i.battery_60:before {
			content: 'battery_60';
		}
		:host > i.battery_6_bar:before {
			content: 'battery_6_bar';
		}
		:host > i.battery_80:before {
			content: 'battery_80';
		}
		:host > i.battery_90:before {
			content: 'battery_90';
		}
		:host > i.battery_alert:before {
			content: 'battery_alert';
		}
		:host > i.battery_change:before {
			content: 'battery_change';
		}
		:host > i.battery_charging_20:before {
			content: 'battery_charging_20';
		}
		:host > i.battery_charging_30:before {
			content: 'battery_charging_30';
		}
		:host > i.battery_charging_50:before {
			content: 'battery_charging_50';
		}
		:host > i.battery_charging_60:before {
			content: 'battery_charging_60';
		}
		:host > i.battery_charging_80:before {
			content: 'battery_charging_80';
		}
		:host > i.battery_charging_90:before {
			content: 'battery_charging_90';
		}
		:host > i.battery_charging_full:before {
			content: 'battery_charging_full';
		}
		:host > i.battery_error:before {
			content: 'battery_error';
		}
		:host > i.battery_full:before {
			content: 'battery_full';
		}
		:host > i.battery_full_alt:before {
			content: 'battery_full_alt';
		}
		:host > i.battery_horiz_000:before {
			content: 'battery_horiz_000';
		}
		:host > i.battery_horiz_050:before {
			content: 'battery_horiz_050';
		}
		:host > i.battery_horiz_075:before {
			content: 'battery_horiz_075';
		}
		:host > i.battery_low:before {
			content: 'battery_low';
		}
		:host > i.battery_plus:before {
			content: 'battery_plus';
		}
		:host > i.battery_profile:before {
			content: 'battery_profile';
		}
		:host > i.battery_saver:before {
			content: 'battery_saver';
		}
		:host > i.battery_share:before {
			content: 'battery_share';
		}
		:host > i.battery_status_good:before {
			content: 'battery_status_good';
		}
		:host > i.battery_std:before {
			content: 'battery_std';
		}
		:host > i.battery_unknown:before {
			content: 'battery_unknown';
		}
		:host > i.battery_vert_005:before {
			content: 'battery_vert_005';
		}
		:host > i.battery_vert_020:before {
			content: 'battery_vert_020';
		}
		:host > i.battery_vert_050:before {
			content: 'battery_vert_050';
		}
		:host > i.battery_very_low:before {
			content: 'battery_very_low';
		}
		:host > i.beach_access:before {
			content: 'beach_access';
		}
		:host > i.bed:before {
			content: 'bed';
		}
		:host > i.bedroom_baby:before {
			content: 'bedroom_baby';
		}
		:host > i.bedroom_child:before {
			content: 'bedroom_child';
		}
		:host > i.bedroom_parent:before {
			content: 'bedroom_parent';
		}
		:host > i.bedtime:before {
			content: 'bedtime';
		}
		:host > i.bedtime_off:before {
			content: 'bedtime_off';
		}
		:host > i.beenhere:before {
			content: 'beenhere';
		}
		:host > i.bento:before {
			content: 'bento';
		}
		:host > i.bia:before {
			content: 'bia';
		}
		:host > i.bid_landscape:before {
			content: 'bid_landscape';
		}
		:host > i.bid_landscape_disabled:before {
			content: 'bid_landscape_disabled';
		}
		:host > i.bigtop_updates:before {
			content: 'bigtop_updates';
		}
		:host > i.bike_scooter:before {
			content: 'bike_scooter';
		}
		:host > i.biotech:before {
			content: 'biotech';
		}
		:host > i.blanket:before {
			content: 'blanket';
		}
		:host > i.blender:before {
			content: 'blender';
		}
		:host > i.blind:before {
			content: 'blind';
		}
		:host > i.blinds:before {
			content: 'blinds';
		}
		:host > i.blinds_closed:before {
			content: 'blinds_closed';
		}
		:host > i.block:before {
			content: 'block';
		}
		:host > i.blood_pressure:before {
			content: 'blood_pressure';
		}
		:host > i.bloodtype:before {
			content: 'bloodtype';
		}
		:host > i.bluetooth:before {
			content: 'bluetooth';
		}
		:host > i.bluetooth_audio:before {
			content: 'bluetooth_audio';
		}
		:host > i.bluetooth_connected:before {
			content: 'bluetooth_connected';
		}
		:host > i.bluetooth_disabled:before {
			content: 'bluetooth_disabled';
		}
		:host > i.bluetooth_drive:before {
			content: 'bluetooth_drive';
		}
		:host > i.bluetooth_searching:before {
			content: 'bluetooth_searching';
		}
		:host > i.blur_circular:before {
			content: 'blur_circular';
		}
		:host > i.blur_linear:before {
			content: 'blur_linear';
		}
		:host > i.blur_medium:before {
			content: 'blur_medium';
		}
		:host > i.blur_off:before {
			content: 'blur_off';
		}
		:host > i.blur_on:before {
			content: 'blur_on';
		}
		:host > i.blur_short:before {
			content: 'blur_short';
		}
		:host > i.body_fat:before {
			content: 'body_fat';
		}
		:host > i.body_system:before {
			content: 'body_system';
		}
		:host > i.bolt:before {
			content: 'bolt';
		}
		:host > i.bomb:before {
			content: 'bomb';
		}
		:host > i.book:before {
			content: 'book';
		}
		:host > i.book_2:before {
			content: 'book_2';
		}
		:host > i.book_3:before {
			content: 'book_3';
		}
		:host > i.book_4:before {
			content: 'book_4';
		}
		:host > i.book_5:before {
			content: 'book_5';
		}
		:host > i.book_online:before {
			content: 'book_online';
		}
		:host > i.bookmark:before {
			content: 'bookmark';
		}
		:host > i.bookmark_add:before {
			content: 'bookmark_add';
		}
		:host > i.bookmark_added:before {
			content: 'bookmark_added';
		}
		:host > i.bookmark_border:before {
			content: 'bookmark_border';
		}
		:host > i.bookmark_manager:before {
			content: 'bookmark_manager';
		}
		:host > i.bookmark_remove:before {
			content: 'bookmark_remove';
		}
		:host > i.bookmarks:before {
			content: 'bookmarks';
		}
		:host > i.border_all:before {
			content: 'border_all';
		}
		:host > i.border_bottom:before {
			content: 'border_bottom';
		}
		:host > i.border_clear:before {
			content: 'border_clear';
		}
		:host > i.border_color:before {
			content: 'border_color';
		}
		:host > i.border_horizontal:before {
			content: 'border_horizontal';
		}
		:host > i.border_inner:before {
			content: 'border_inner';
		}
		:host > i.border_left:before {
			content: 'border_left';
		}
		:host > i.border_outer:before {
			content: 'border_outer';
		}
		:host > i.border_right:before {
			content: 'border_right';
		}
		:host > i.border_style:before {
			content: 'border_style';
		}
		:host > i.border_top:before {
			content: 'border_top';
		}
		:host > i.border_vertical:before {
			content: 'border_vertical';
		}
		:host > i.bottom_app_bar:before {
			content: 'bottom_app_bar';
		}
		:host > i.bottom_drawer:before {
			content: 'bottom_drawer';
		}
		:host > i.bottom_navigation:before {
			content: 'bottom_navigation';
		}
		:host > i.bottom_panel_close:before {
			content: 'bottom_panel_close';
		}
		:host > i.bottom_panel_open:before {
			content: 'bottom_panel_open';
		}
		:host > i.bottom_right_click:before {
			content: 'bottom_right_click';
		}
		:host > i.bottom_sheets:before {
			content: 'bottom_sheets';
		}
		:host > i.box:before {
			content: 'box';
		}
		:host > i.box_add:before {
			content: 'box_add';
		}
		:host > i.box_edit:before {
			content: 'box_edit';
		}
		:host > i.boy:before {
			content: 'boy';
		}
		:host > i.brand_awareness:before {
			content: 'brand_awareness';
		}
		:host > i.brand_family:before {
			content: 'brand_family';
		}
		:host > i.branding_watermark:before {
			content: 'branding_watermark';
		}
		:host > i.breakfast_dining:before {
			content: 'breakfast_dining';
		}
		:host > i.breaking_news:before {
			content: 'breaking_news';
		}
		:host > i.breaking_news_alt_1:before {
			content: 'breaking_news_alt_1';
		}
		:host > i.breastfeeding:before {
			content: 'breastfeeding';
		}
		:host > i.brightness_1:before {
			content: 'brightness_1';
		}
		:host > i.brightness_2:before {
			content: 'brightness_2';
		}
		:host > i.brightness_3:before {
			content: 'brightness_3';
		}
		:host > i.brightness_4:before {
			content: 'brightness_4';
		}
		:host > i.brightness_5:before {
			content: 'brightness_5';
		}
		:host > i.brightness_6:before {
			content: 'brightness_6';
		}
		:host > i.brightness_7:before {
			content: 'brightness_7';
		}
		:host > i.brightness_alert:before {
			content: 'brightness_alert';
		}
		:host > i.brightness_auto:before {
			content: 'brightness_auto';
		}
		:host > i.brightness_empty:before {
			content: 'brightness_empty';
		}
		:host > i.brightness_high:before {
			content: 'brightness_high';
		}
		:host > i.brightness_low:before {
			content: 'brightness_low';
		}
		:host > i.brightness_medium:before {
			content: 'brightness_medium';
		}
		:host > i.bring_your_own_ip:before {
			content: 'bring_your_own_ip';
		}
		:host > i.broadcast_on_home:before {
			content: 'broadcast_on_home';
		}
		:host > i.broadcast_on_personal:before {
			content: 'broadcast_on_personal';
		}
		:host > i.broken_image:before {
			content: 'broken_image';
		}
		:host > i.browse:before {
			content: 'browse';
		}
		:host > i.browse_activity:before {
			content: 'browse_activity';
		}
		:host > i.browse_gallery:before {
			content: 'browse_gallery';
		}
		:host > i.browser_not_supported:before {
			content: 'browser_not_supported';
		}
		:host > i.browser_updated:before {
			content: 'browser_updated';
		}
		:host > i.brunch_dining:before {
			content: 'brunch_dining';
		}
		:host > i.brush:before {
			content: 'brush';
		}
		:host > i.bubble:before {
			content: 'bubble';
		}
		:host > i.bubble_chart:before {
			content: 'bubble_chart';
		}
		:host > i.bubbles:before {
			content: 'bubbles';
		}
		:host > i.bug_report:before {
			content: 'bug_report';
		}
		:host > i.build:before {
			content: 'build';
		}
		:host > i.build_circle:before {
			content: 'build_circle';
		}
		:host > i.bungalow:before {
			content: 'bungalow';
		}
		:host > i.burst_mode:before {
			content: 'burst_mode';
		}
		:host > i.bus_alert:before {
			content: 'bus_alert';
		}
		:host > i.business:before {
			content: 'business';
		}
		:host > i.business_center:before {
			content: 'business_center';
		}
		:host > i.business_chip:before {
			content: 'business_chip';
		}
		:host > i.business_messages:before {
			content: 'business_messages';
		}
		:host > i.buttons_alt:before {
			content: 'buttons_alt';
		}
		:host > i.cabin:before {
			content: 'cabin';
		}
		:host > i.cable:before {
			content: 'cable';
		}
		:host > i.cached:before {
			content: 'cached';
		}
		:host > i.cake:before {
			content: 'cake';
		}
		:host > i.cake_add:before {
			content: 'cake_add';
		}
		:host > i.calculate:before {
			content: 'calculate';
		}
		:host > i.calendar_add_on:before {
			content: 'calendar_add_on';
		}
		:host > i.calendar_apps_script:before {
			content: 'calendar_apps_script';
		}
		:host > i.calendar_clock:before {
			content: 'calendar_clock';
		}
		:host > i.calendar_month:before {
			content: 'calendar_month';
		}
		:host > i.calendar_today:before {
			content: 'calendar_today';
		}
		:host > i.calendar_view_day:before {
			content: 'calendar_view_day';
		}
		:host > i.calendar_view_month:before {
			content: 'calendar_view_month';
		}
		:host > i.calendar_view_week:before {
			content: 'calendar_view_week';
		}
		:host > i.call:before {
			content: 'call';
		}
		:host > i.call_end:before {
			content: 'call_end';
		}
		:host > i.call_end_alt:before {
			content: 'call_end_alt';
		}
		:host > i.call_log:before {
			content: 'call_log';
		}
		:host > i.call_made:before {
			content: 'call_made';
		}
		:host > i.call_merge:before {
			content: 'call_merge';
		}
		:host > i.call_missed:before {
			content: 'call_missed';
		}
		:host > i.call_missed_outgoing:before {
			content: 'call_missed_outgoing';
		}
		:host > i.call_quality:before {
			content: 'call_quality';
		}
		:host > i.call_received:before {
			content: 'call_received';
		}
		:host > i.call_split:before {
			content: 'call_split';
		}
		:host > i.call_to_action:before {
			content: 'call_to_action';
		}
		:host > i.camera:before {
			content: 'camera';
		}
		:host > i.camera_alt:before {
			content: 'camera_alt';
		}
		:host > i.camera_enhance:before {
			content: 'camera_enhance';
		}
		:host > i.camera_front:before {
			content: 'camera_front';
		}
		:host > i.camera_indoor:before {
			content: 'camera_indoor';
		}
		:host > i.camera_outdoor:before {
			content: 'camera_outdoor';
		}
		:host > i.camera_rear:before {
			content: 'camera_rear';
		}
		:host > i.camera_roll:before {
			content: 'camera_roll';
		}
		:host > i.camera_video:before {
			content: 'camera_video';
		}
		:host > i.cameraswitch:before {
			content: 'cameraswitch';
		}
		:host > i.campaign:before {
			content: 'campaign';
		}
		:host > i.camping:before {
			content: 'camping';
		}
		:host > i.cancel:before {
			content: 'cancel';
		}
		:host > i.cancel_presentation:before {
			content: 'cancel_presentation';
		}
		:host > i.cancel_schedule_send:before {
			content: 'cancel_schedule_send';
		}
		:host > i.candle:before {
			content: 'candle';
		}
		:host > i.candlestick_chart:before {
			content: 'candlestick_chart';
		}
		:host > i.captive_portal:before {
			content: 'captive_portal';
		}
		:host > i.capture:before {
			content: 'capture';
		}
		:host > i.car_crash:before {
			content: 'car_crash';
		}
		:host > i.car_rental:before {
			content: 'car_rental';
		}
		:host > i.car_repair:before {
			content: 'car_repair';
		}
		:host > i.car_tag:before {
			content: 'car_tag';
		}
		:host > i.card_giftcard:before {
			content: 'card_giftcard';
		}
		:host > i.card_membership:before {
			content: 'card_membership';
		}
		:host > i.card_travel:before {
			content: 'card_travel';
		}
		:host > i.cardiology:before {
			content: 'cardiology';
		}
		:host > i.cards:before {
			content: 'cards';
		}
		:host > i.carpenter:before {
			content: 'carpenter';
		}
		:host > i.carry_on_bag:before {
			content: 'carry_on_bag';
		}
		:host > i.carry_on_bag_checked:before {
			content: 'carry_on_bag_checked';
		}
		:host > i.carry_on_bag_inactive:before {
			content: 'carry_on_bag_inactive';
		}
		:host > i.carry_on_bag_question:before {
			content: 'carry_on_bag_question';
		}
		:host > i.cases:before {
			content: 'cases';
		}
		:host > i.casino:before {
			content: 'casino';
		}
		:host > i.cast:before {
			content: 'cast';
		}
		:host > i.cast_connected:before {
			content: 'cast_connected';
		}
		:host > i.cast_for_education:before {
			content: 'cast_for_education';
		}
		:host > i.cast_pause:before {
			content: 'cast_pause';
		}
		:host > i.cast_warning:before {
			content: 'cast_warning';
		}
		:host > i.castle:before {
			content: 'castle';
		}
		:host > i.category:before {
			content: 'category';
		}
		:host > i.celebration:before {
			content: 'celebration';
		}
		:host > i.cell_merge:before {
			content: 'cell_merge';
		}
		:host > i.cell_tower:before {
			content: 'cell_tower';
		}
		:host > i.cell_wifi:before {
			content: 'cell_wifi';
		}
		:host > i.center_focus_strong:before {
			content: 'center_focus_strong';
		}
		:host > i.center_focus_weak:before {
			content: 'center_focus_weak';
		}
		:host > i.chair:before {
			content: 'chair';
		}
		:host > i.chair_alt:before {
			content: 'chair_alt';
		}
		:host > i.chalet:before {
			content: 'chalet';
		}
		:host > i.change_circle:before {
			content: 'change_circle';
		}
		:host > i.change_history:before {
			content: 'change_history';
		}
		:host > i.charger:before {
			content: 'charger';
		}
		:host > i.charging_station:before {
			content: 'charging_station';
		}
		:host > i.chart_data:before {
			content: 'chart_data';
		}
		:host > i.chat:before {
			content: 'chat';
		}
		:host > i.chat_add_on:before {
			content: 'chat_add_on';
		}
		:host > i.chat_apps_script:before {
			content: 'chat_apps_script';
		}
		:host > i.chat_bubble:before {
			content: 'chat_bubble';
		}
		:host > i.chat_bubble_outline:before {
			content: 'chat_bubble_outline';
		}
		:host > i.chat_error:before {
			content: 'chat_error';
		}
		:host > i.chat_info:before {
			content: 'chat_info';
		}
		:host > i.chat_paste_go:before {
			content: 'chat_paste_go';
		}
		:host > i.check:before {
			content: 'check';
		}
		:host > i.check_box:before {
			content: 'check_box';
		}
		:host > i.check_box_outline_blank:before {
			content: 'check_box_outline_blank';
		}
		:host > i.check_circle:before {
			content: 'check_circle';
		}
		:host > i.check_circle_filled:before {
			content: 'check_circle_filled';
		}
		:host > i.check_circle_outline:before {
			content: 'check_circle_outline';
		}
		:host > i.check_in_out:before {
			content: 'check_in_out';
		}
		:host > i.check_indeterminate_small:before {
			content: 'check_indeterminate_small';
		}
		:host > i.check_small:before {
			content: 'check_small';
		}
		:host > i.checkbook:before {
			content: 'checkbook';
		}
		:host > i.checked_bag:before {
			content: 'checked_bag';
		}
		:host > i.checked_bag_question:before {
			content: 'checked_bag_question';
		}
		:host > i.checklist:before {
			content: 'checklist';
		}
		:host > i.checklist_rtl:before {
			content: 'checklist_rtl';
		}
		:host > i.checkroom:before {
			content: 'checkroom';
		}
		:host > i.cheer:before {
			content: 'cheer';
		}
		:host > i.chess:before {
			content: 'chess';
		}
		:host > i.chevron_left:before {
			content: 'chevron_left';
		}
		:host > i.chevron_right:before {
			content: 'chevron_right';
		}
		:host > i.child_care:before {
			content: 'child_care';
		}
		:host > i.child_friendly:before {
			content: 'child_friendly';
		}
		:host > i.chip_extraction:before {
			content: 'chip_extraction';
		}
		:host > i.chips:before {
			content: 'chips';
		}
		:host > i.chrome_reader_mode:before {
			content: 'chrome_reader_mode';
		}
		:host > i.chromecast_2:before {
			content: 'chromecast_2';
		}
		:host > i.chromecast_device:before {
			content: 'chromecast_device';
		}
		:host > i.chronic:before {
			content: 'chronic';
		}
		:host > i.church:before {
			content: 'church';
		}
		:host > i.cinematic_blur:before {
			content: 'cinematic_blur';
		}
		:host > i.circle:before {
			content: 'circle';
		}
		:host > i.circle_notifications:before {
			content: 'circle_notifications';
		}
		:host > i.circles:before {
			content: 'circles';
		}
		:host > i.circles_ext:before {
			content: 'circles_ext';
		}
		:host > i.clarify:before {
			content: 'clarify';
		}
		:host > i.class:before {
			content: 'class';
		}
		:host > i.clean_hands:before {
			content: 'clean_hands';
		}
		:host > i.cleaning:before {
			content: 'cleaning';
		}
		:host > i.cleaning_bucket:before {
			content: 'cleaning_bucket';
		}
		:host > i.cleaning_services:before {
			content: 'cleaning_services';
		}
		:host > i.clear:before {
			content: 'clear';
		}
		:host > i.clear_all:before {
			content: 'clear_all';
		}
		:host > i.clear_day:before {
			content: 'clear_day';
		}
		:host > i.clear_night:before {
			content: 'clear_night';
		}
		:host > i.climate_mini_split:before {
			content: 'climate_mini_split';
		}
		:host > i.clinical_notes:before {
			content: 'clinical_notes';
		}
		:host > i.clock_loader_10:before {
			content: 'clock_loader_10';
		}
		:host > i.clock_loader_20:before {
			content: 'clock_loader_20';
		}
		:host > i.clock_loader_40:before {
			content: 'clock_loader_40';
		}
		:host > i.clock_loader_60:before {
			content: 'clock_loader_60';
		}
		:host > i.clock_loader_80:before {
			content: 'clock_loader_80';
		}
		:host > i.clock_loader_90:before {
			content: 'clock_loader_90';
		}
		:host > i.close:before {
			content: 'close';
		}
		:host > i.close_fullscreen:before {
			content: 'close_fullscreen';
		}
		:host > i.close_small:before {
			content: 'close_small';
		}
		:host > i.closed_caption:before {
			content: 'closed_caption';
		}
		:host > i.closed_caption_disabled:before {
			content: 'closed_caption_disabled';
		}
		:host > i.closed_caption_off:before {
			content: 'closed_caption_off';
		}
		:host > i.cloud:before {
			content: 'cloud';
		}
		:host > i.cloud_circle:before {
			content: 'cloud_circle';
		}
		:host > i.cloud_done:before {
			content: 'cloud_done';
		}
		:host > i.cloud_download:before {
			content: 'cloud_download';
		}
		:host > i.cloud_off:before {
			content: 'cloud_off';
		}
		:host > i.cloud_queue:before {
			content: 'cloud_queue';
		}
		:host > i.cloud_sync:before {
			content: 'cloud_sync';
		}
		:host > i.cloud_upload:before {
			content: 'cloud_upload';
		}
		:host > i.cloudy:before {
			content: 'cloudy';
		}
		:host > i.cloudy_filled:before {
			content: 'cloudy_filled';
		}
		:host > i.cloudy_snowing:before {
			content: 'cloudy_snowing';
		}
		:host > i.co2:before {
			content: 'co2';
		}
		:host > i.co_present:before {
			content: 'co_present';
		}
		:host > i.code:before {
			content: 'code';
		}
		:host > i.code_blocks:before {
			content: 'code_blocks';
		}
		:host > i.code_off:before {
			content: 'code_off';
		}
		:host > i.coffee:before {
			content: 'coffee';
		}
		:host > i.coffee_maker:before {
			content: 'coffee_maker';
		}
		:host > i.cognition:before {
			content: 'cognition';
		}
		:host > i.collapse_all:before {
			content: 'collapse_all';
		}
		:host > i.collapse_content:before {
			content: 'collapse_content';
		}
		:host > i.collections:before {
			content: 'collections';
		}
		:host > i.collections_bookmark:before {
			content: 'collections_bookmark';
		}
		:host > i.color_lens:before {
			content: 'color_lens';
		}
		:host > i.colorize:before {
			content: 'colorize';
		}
		:host > i.colors:before {
			content: 'colors';
		}
		:host > i.comic_bubble:before {
			content: 'comic_bubble';
		}
		:host > i.comment:before {
			content: 'comment';
		}
		:host > i.comment_bank:before {
			content: 'comment_bank';
		}
		:host > i.comments_disabled:before {
			content: 'comments_disabled';
		}
		:host > i.commit:before {
			content: 'commit';
		}
		:host > i.communication:before {
			content: 'communication';
		}
		:host > i.communities:before {
			content: 'communities';
		}
		:host > i.communities_filled:before {
			content: 'communities_filled';
		}
		:host > i.commute:before {
			content: 'commute';
		}
		:host > i.compare:before {
			content: 'compare';
		}
		:host > i.compare_arrows:before {
			content: 'compare_arrows';
		}
		:host > i.compass_calibration:before {
			content: 'compass_calibration';
		}
		:host > i.component_exchange:before {
			content: 'component_exchange';
		}
		:host > i.compost:before {
			content: 'compost';
		}
		:host > i.compress:before {
			content: 'compress';
		}
		:host > i.computer:before {
			content: 'computer';
		}
		:host > i.concierge:before {
			content: 'concierge';
		}
		:host > i.conditions:before {
			content: 'conditions';
		}
		:host > i.confirmation_number:before {
			content: 'confirmation_number';
		}
		:host > i.congenital:before {
			content: 'congenital';
		}
		:host > i.connect_without_contact:before {
			content: 'connect_without_contact';
		}
		:host > i.connected_tv:before {
			content: 'connected_tv';
		}
		:host > i.connecting_airports:before {
			content: 'connecting_airports';
		}
		:host > i.construction:before {
			content: 'construction';
		}
		:host > i.contact_emergency:before {
			content: 'contact_emergency';
		}
		:host > i.contact_mail:before {
			content: 'contact_mail';
		}
		:host > i.contact_page:before {
			content: 'contact_page';
		}
		:host > i.contact_phone:before {
			content: 'contact_phone';
		}
		:host > i.contact_phone_filled:before {
			content: 'contact_phone_filled';
		}
		:host > i.contact_support:before {
			content: 'contact_support';
		}
		:host > i.contactless:before {
			content: 'contactless';
		}
		:host > i.contactless_off:before {
			content: 'contactless_off';
		}
		:host > i.contacts:before {
			content: 'contacts';
		}
		:host > i.contacts_product:before {
			content: 'contacts_product';
		}
		:host > i.content_copy:before {
			content: 'content_copy';
		}
		:host > i.content_cut:before {
			content: 'content_cut';
		}
		:host > i.content_paste:before {
			content: 'content_paste';
		}
		:host > i.content_paste_go:before {
			content: 'content_paste_go';
		}
		:host > i.content_paste_off:before {
			content: 'content_paste_off';
		}
		:host > i.content_paste_search:before {
			content: 'content_paste_search';
		}
		:host > i.contract:before {
			content: 'contract';
		}
		:host > i.contract_delete:before {
			content: 'contract_delete';
		}
		:host > i.contract_edit:before {
			content: 'contract_edit';
		}
		:host > i.contrast:before {
			content: 'contrast';
		}
		:host > i.contrast_rtl_off:before {
			content: 'contrast_rtl_off';
		}
		:host > i.control_camera:before {
			content: 'control_camera';
		}
		:host > i.control_point:before {
			content: 'control_point';
		}
		:host > i.control_point_duplicate:before {
			content: 'control_point_duplicate';
		}
		:host > i.controller_gen:before {
			content: 'controller_gen';
		}
		:host > i.conversion_path:before {
			content: 'conversion_path';
		}
		:host > i.conversion_path_off:before {
			content: 'conversion_path_off';
		}
		:host > i.conveyor_belt:before {
			content: 'conveyor_belt';
		}
		:host > i.cookie:before {
			content: 'cookie';
		}
		:host > i.cookie_off:before {
			content: 'cookie_off';
		}
		:host > i.cooking:before {
			content: 'cooking';
		}
		:host > i.cool_to_dry:before {
			content: 'cool_to_dry';
		}
		:host > i.copy_all:before {
			content: 'copy_all';
		}
		:host > i.copyright:before {
			content: 'copyright';
		}
		:host > i.coronavirus:before {
			content: 'coronavirus';
		}
		:host > i.corporate_fare:before {
			content: 'corporate_fare';
		}
		:host > i.cottage:before {
			content: 'cottage';
		}
		:host > i.counter_0:before {
			content: 'counter_0';
		}
		:host > i.counter_1:before {
			content: 'counter_1';
		}
		:host > i.counter_2:before {
			content: 'counter_2';
		}
		:host > i.counter_3:before {
			content: 'counter_3';
		}
		:host > i.counter_4:before {
			content: 'counter_4';
		}
		:host > i.counter_5:before {
			content: 'counter_5';
		}
		:host > i.counter_6:before {
			content: 'counter_6';
		}
		:host > i.counter_7:before {
			content: 'counter_7';
		}
		:host > i.counter_8:before {
			content: 'counter_8';
		}
		:host > i.counter_9:before {
			content: 'counter_9';
		}
		:host > i.countertops:before {
			content: 'countertops';
		}
		:host > i.create:before {
			content: 'create';
		}
		:host > i.create_new_folder:before {
			content: 'create_new_folder';
		}
		:host > i.credit_card:before {
			content: 'credit_card';
		}
		:host > i.credit_card_gear:before {
			content: 'credit_card_gear';
		}
		:host > i.credit_card_heart:before {
			content: 'credit_card_heart';
		}
		:host > i.credit_card_off:before {
			content: 'credit_card_off';
		}
		:host > i.credit_score:before {
			content: 'credit_score';
		}
		:host > i.crib:before {
			content: 'crib';
		}
		:host > i.crisis_alert:before {
			content: 'crisis_alert';
		}
		:host > i.crop:before {
			content: 'crop';
		}
		:host > i.crop_16_9:before {
			content: 'crop_16_9';
		}
		:host > i.crop_3_2:before {
			content: 'crop_3_2';
		}
		:host > i.crop_5_4:before {
			content: 'crop_5_4';
		}
		:host > i.crop_7_5:before {
			content: 'crop_7_5';
		}
		:host > i.crop_9_16:before {
			content: 'crop_9_16';
		}
		:host > i.crop_din:before {
			content: 'crop_din';
		}
		:host > i.crop_free:before {
			content: 'crop_free';
		}
		:host > i.crop_landscape:before {
			content: 'crop_landscape';
		}
		:host > i.crop_original:before {
			content: 'crop_original';
		}
		:host > i.crop_portrait:before {
			content: 'crop_portrait';
		}
		:host > i.crop_rotate:before {
			content: 'crop_rotate';
		}
		:host > i.crop_square:before {
			content: 'crop_square';
		}
		:host > i.crossword:before {
			content: 'crossword';
		}
		:host > i.crowdsource:before {
			content: 'crowdsource';
		}
		:host > i.cruelty_free:before {
			content: 'cruelty_free';
		}
		:host > i.css:before {
			content: 'css';
		}
		:host > i.csv:before {
			content: 'csv';
		}
		:host > i.currency_bitcoin:before {
			content: 'currency_bitcoin';
		}
		:host > i.currency_exchange:before {
			content: 'currency_exchange';
		}
		:host > i.currency_franc:before {
			content: 'currency_franc';
		}
		:host > i.currency_lira:before {
			content: 'currency_lira';
		}
		:host > i.currency_pound:before {
			content: 'currency_pound';
		}
		:host > i.currency_ruble:before {
			content: 'currency_ruble';
		}
		:host > i.currency_rupee:before {
			content: 'currency_rupee';
		}
		:host > i.currency_yen:before {
			content: 'currency_yen';
		}
		:host > i.currency_yuan:before {
			content: 'currency_yuan';
		}
		:host > i.curtains:before {
			content: 'curtains';
		}
		:host > i.curtains_closed:before {
			content: 'curtains_closed';
		}
		:host > i.custom_typography:before {
			content: 'custom_typography';
		}
		:host > i.cut:before {
			content: 'cut';
		}
		:host > i.cycle:before {
			content: 'cycle';
		}
		:host > i.cyclone:before {
			content: 'cyclone';
		}
		:host > i.dangerous:before {
			content: 'dangerous';
		}
		:host > i.dark_mode:before {
			content: 'dark_mode';
		}
		:host > i.dashboard:before {
			content: 'dashboard';
		}
		:host > i.dashboard_customize:before {
			content: 'dashboard_customize';
		}
		:host > i.data_alert:before {
			content: 'data_alert';
		}
		:host > i.data_array:before {
			content: 'data_array';
		}
		:host > i.data_check:before {
			content: 'data_check';
		}
		:host > i.data_exploration:before {
			content: 'data_exploration';
		}
		:host > i.data_info_alert:before {
			content: 'data_info_alert';
		}
		:host > i.data_loss_prevention:before {
			content: 'data_loss_prevention';
		}
		:host > i.data_object:before {
			content: 'data_object';
		}
		:host > i.data_saver_off:before {
			content: 'data_saver_off';
		}
		:host > i.data_saver_on:before {
			content: 'data_saver_on';
		}
		:host > i.data_table:before {
			content: 'data_table';
		}
		:host > i.data_thresholding:before {
			content: 'data_thresholding';
		}
		:host > i.data_usage:before {
			content: 'data_usage';
		}
		:host > i.database:before {
			content: 'database';
		}
		:host > i.dataset:before {
			content: 'dataset';
		}
		:host > i.dataset_linked:before {
			content: 'dataset_linked';
		}
		:host > i.date_range:before {
			content: 'date_range';
		}
		:host > i.deblur:before {
			content: 'deblur';
		}
		:host > i.deceased:before {
			content: 'deceased';
		}
		:host > i.decimal_decrease:before {
			content: 'decimal_decrease';
		}
		:host > i.decimal_increase:before {
			content: 'decimal_increase';
		}
		:host > i.deck:before {
			content: 'deck';
		}
		:host > i.dehaze:before {
			content: 'dehaze';
		}
		:host > i.delete:before {
			content: 'delete';
		}
		:host > i.delete_forever:before {
			content: 'delete_forever';
		}
		:host > i.delete_history:before {
			content: 'delete_history';
		}
		:host > i.delete_outline:before {
			content: 'delete_outline';
		}
		:host > i.delete_sweep:before {
			content: 'delete_sweep';
		}
		:host > i.demography:before {
			content: 'demography';
		}
		:host > i.density_large:before {
			content: 'density_large';
		}
		:host > i.density_medium:before {
			content: 'density_medium';
		}
		:host > i.density_small:before {
			content: 'density_small';
		}
		:host > i.dentistry:before {
			content: 'dentistry';
		}
		:host > i.departure_board:before {
			content: 'departure_board';
		}
		:host > i.deployed_code:before {
			content: 'deployed_code';
		}
		:host > i.deployed_code_account:before {
			content: 'deployed_code_account';
		}
		:host > i.deployed_code_alert:before {
			content: 'deployed_code_alert';
		}
		:host > i.deployed_code_history:before {
			content: 'deployed_code_history';
		}
		:host > i.deployed_code_update:before {
			content: 'deployed_code_update';
		}
		:host > i.dermatology:before {
			content: 'dermatology';
		}
		:host > i.description:before {
			content: 'description';
		}
		:host > i.deselect:before {
			content: 'deselect';
		}
		:host > i.design_services:before {
			content: 'design_services';
		}
		:host > i.desk:before {
			content: 'desk';
		}
		:host > i.deskphone:before {
			content: 'deskphone';
		}
		:host > i.desktop_access_disabled:before {
			content: 'desktop_access_disabled';
		}
		:host > i.desktop_mac:before {
			content: 'desktop_mac';
		}
		:host > i.desktop_windows:before {
			content: 'desktop_windows';
		}
		:host > i.destruction:before {
			content: 'destruction';
		}
		:host > i.details:before {
			content: 'details';
		}
		:host > i.detection_and_zone:before {
			content: 'detection_and_zone';
		}
		:host > i.detector:before {
			content: 'detector';
		}
		:host > i.detector_alarm:before {
			content: 'detector_alarm';
		}
		:host > i.detector_battery:before {
			content: 'detector_battery';
		}
		:host > i.detector_co:before {
			content: 'detector_co';
		}
		:host > i.detector_offline:before {
			content: 'detector_offline';
		}
		:host > i.detector_smoke:before {
			content: 'detector_smoke';
		}
		:host > i.detector_status:before {
			content: 'detector_status';
		}
		:host > i.developer_board:before {
			content: 'developer_board';
		}
		:host > i.developer_board_off:before {
			content: 'developer_board_off';
		}
		:host > i.developer_guide:before {
			content: 'developer_guide';
		}
		:host > i.developer_mode:before {
			content: 'developer_mode';
		}
		:host > i.developer_mode_tv:before {
			content: 'developer_mode_tv';
		}
		:host > i.device_hub:before {
			content: 'device_hub';
		}
		:host > i.device_reset:before {
			content: 'device_reset';
		}
		:host > i.device_thermostat:before {
			content: 'device_thermostat';
		}
		:host > i.device_unknown:before {
			content: 'device_unknown';
		}
		:host > i.devices:before {
			content: 'devices';
		}
		:host > i.devices_fold:before {
			content: 'devices_fold';
		}
		:host > i.devices_off:before {
			content: 'devices_off';
		}
		:host > i.devices_other:before {
			content: 'devices_other';
		}
		:host > i.devices_wearables:before {
			content: 'devices_wearables';
		}
		:host > i.dew_point:before {
			content: 'dew_point';
		}
		:host > i.diagnosis:before {
			content: 'diagnosis';
		}
		:host > i.dialer_sip:before {
			content: 'dialer_sip';
		}
		:host > i.dialogs:before {
			content: 'dialogs';
		}
		:host > i.dialpad:before {
			content: 'dialpad';
		}
		:host > i.diamond:before {
			content: 'diamond';
		}
		:host > i.dictionary:before {
			content: 'dictionary';
		}
		:host > i.difference:before {
			content: 'difference';
		}
		:host > i.digital_out_of_home:before {
			content: 'digital_out_of_home';
		}
		:host > i.digital_wellbeing:before {
			content: 'digital_wellbeing';
		}
		:host > i.dining:before {
			content: 'dining';
		}
		:host > i.dinner_dining:before {
			content: 'dinner_dining';
		}
		:host > i.directions:before {
			content: 'directions';
		}
		:host > i.directions_alt:before {
			content: 'directions_alt';
		}
		:host > i.directions_alt_off:before {
			content: 'directions_alt_off';
		}
		:host > i.directions_bike:before {
			content: 'directions_bike';
		}
		:host > i.directions_boat:before {
			content: 'directions_boat';
		}
		:host > i.directions_boat_filled:before {
			content: 'directions_boat_filled';
		}
		:host > i.directions_bus:before {
			content: 'directions_bus';
		}
		:host > i.directions_bus_filled:before {
			content: 'directions_bus_filled';
		}
		:host > i.directions_car:before {
			content: 'directions_car';
		}
		:host > i.directions_car_filled:before {
			content: 'directions_car_filled';
		}
		:host > i.directions_off:before {
			content: 'directions_off';
		}
		:host > i.directions_railway:before {
			content: 'directions_railway';
		}
		:host > i.directions_railway_filled:before {
			content: 'directions_railway_filled';
		}
		:host > i.directions_run:before {
			content: 'directions_run';
		}
		:host > i.directions_subway:before {
			content: 'directions_subway';
		}
		:host > i.directions_subway_filled:before {
			content: 'directions_subway_filled';
		}
		:host > i.directions_transit:before {
			content: 'directions_transit';
		}
		:host > i.directions_transit_filled:before {
			content: 'directions_transit_filled';
		}
		:host > i.directions_walk:before {
			content: 'directions_walk';
		}
		:host > i.directory_sync:before {
			content: 'directory_sync';
		}
		:host > i.dirty_lens:before {
			content: 'dirty_lens';
		}
		:host > i.disabled_by_default:before {
			content: 'disabled_by_default';
		}
		:host > i.disabled_visible:before {
			content: 'disabled_visible';
		}
		:host > i.disc_full:before {
			content: 'disc_full';
		}
		:host > i.discover_tune:before {
			content: 'discover_tune';
		}
		:host > i.dishwasher:before {
			content: 'dishwasher';
		}
		:host > i.dishwasher_gen:before {
			content: 'dishwasher_gen';
		}
		:host > i.display_external_input:before {
			content: 'display_external_input';
		}
		:host > i.display_settings:before {
			content: 'display_settings';
		}
		:host > i.distance:before {
			content: 'distance';
		}
		:host > i.diversity_1:before {
			content: 'diversity_1';
		}
		:host > i.diversity_2:before {
			content: 'diversity_2';
		}
		:host > i.diversity_3:before {
			content: 'diversity_3';
		}
		:host > i.diversity_4:before {
			content: 'diversity_4';
		}
		:host > i.dns:before {
			content: 'dns';
		}
		:host > i.do_disturb:before {
			content: 'do_disturb';
		}
		:host > i.do_disturb_alt:before {
			content: 'do_disturb_alt';
		}
		:host > i.do_disturb_off:before {
			content: 'do_disturb_off';
		}
		:host > i.do_disturb_on:before {
			content: 'do_disturb_on';
		}
		:host > i.do_not_disturb:before {
			content: 'do_not_disturb';
		}
		:host > i.do_not_disturb_alt:before {
			content: 'do_not_disturb_alt';
		}
		:host > i.do_not_disturb_off:before {
			content: 'do_not_disturb_off';
		}
		:host > i.do_not_disturb_on:before {
			content: 'do_not_disturb_on';
		}
		:host > i.do_not_disturb_on_total_silence:before {
			content: 'do_not_disturb_on_total_silence';
		}
		:host > i.do_not_step:before {
			content: 'do_not_step';
		}
		:host > i.do_not_touch:before {
			content: 'do_not_touch';
		}
		:host > i.dock:before {
			content: 'dock';
		}
		:host > i.dock_to_bottom:before {
			content: 'dock_to_bottom';
		}
		:host > i.dock_to_left:before {
			content: 'dock_to_left';
		}
		:host > i.dock_to_right:before {
			content: 'dock_to_right';
		}
		:host > i.docs_add_on:before {
			content: 'docs_add_on';
		}
		:host > i.docs_apps_script:before {
			content: 'docs_apps_script';
		}
		:host > i.document_scanner:before {
			content: 'document_scanner';
		}
		:host > i.domain:before {
			content: 'domain';
		}
		:host > i.domain_add:before {
			content: 'domain_add';
		}
		:host > i.domain_disabled:before {
			content: 'domain_disabled';
		}
		:host > i.domain_verification:before {
			content: 'domain_verification';
		}
		:host > i.domain_verification_off:before {
			content: 'domain_verification_off';
		}
		:host > i.domino_mask:before {
			content: 'domino_mask';
		}
		:host > i.done:before {
			content: 'done';
		}
		:host > i.done_all:before {
			content: 'done_all';
		}
		:host > i.done_outline:before {
			content: 'done_outline';
		}
		:host > i.donut_large:before {
			content: 'donut_large';
		}
		:host > i.donut_small:before {
			content: 'donut_small';
		}
		:host > i.door_back:before {
			content: 'door_back';
		}
		:host > i.door_front:before {
			content: 'door_front';
		}
		:host > i.door_open:before {
			content: 'door_open';
		}
		:host > i.door_sensor:before {
			content: 'door_sensor';
		}
		:host > i.door_sliding:before {
			content: 'door_sliding';
		}
		:host > i.doorbell:before {
			content: 'doorbell';
		}
		:host > i.doorbell_3p:before {
			content: 'doorbell_3p';
		}
		:host > i.doorbell_chime:before {
			content: 'doorbell_chime';
		}
		:host > i.double_arrow:before {
			content: 'double_arrow';
		}
		:host > i.downhill_skiing:before {
			content: 'downhill_skiing';
		}
		:host > i.download:before {
			content: 'download';
		}
		:host > i.download_2:before {
			content: 'download_2';
		}
		:host > i.download_done:before {
			content: 'download_done';
		}
		:host > i.download_for_offline:before {
			content: 'download_for_offline';
		}
		:host > i.downloading:before {
			content: 'downloading';
		}
		:host > i.draft:before {
			content: 'draft';
		}
		:host > i.draft_orders:before {
			content: 'draft_orders';
		}
		:host > i.drafts:before {
			content: 'drafts';
		}
		:host > i.drag_click:before {
			content: 'drag_click';
		}
		:host > i.drag_handle:before {
			content: 'drag_handle';
		}
		:host > i.drag_indicator:before {
			content: 'drag_indicator';
		}
		:host > i.drag_pan:before {
			content: 'drag_pan';
		}
		:host > i.draw:before {
			content: 'draw';
		}
		:host > i.draw_abstract:before {
			content: 'draw_abstract';
		}
		:host > i.draw_collage:before {
			content: 'draw_collage';
		}
		:host > i.drawing_recognition:before {
			content: 'drawing_recognition';
		}
		:host > i.dresser:before {
			content: 'dresser';
		}
		:host > i.drive_eta:before {
			content: 'drive_eta';
		}
		:host > i.drive_file_move:before {
			content: 'drive_file_move';
		}
		:host > i.drive_file_move_outline:before {
			content: 'drive_file_move_outline';
		}
		:host > i.drive_file_move_rtl:before {
			content: 'drive_file_move_rtl';
		}
		:host > i.drive_file_rename_outline:before {
			content: 'drive_file_rename_outline';
		}
		:host > i.drive_folder_upload:before {
			content: 'drive_folder_upload';
		}
		:host > i.drive_fusiontable:before {
			content: 'drive_fusiontable';
		}
		:host > i.dropdown:before {
			content: 'dropdown';
		}
		:host > i.dry:before {
			content: 'dry';
		}
		:host > i.dry_cleaning:before {
			content: 'dry_cleaning';
		}
		:host > i.dual_screen:before {
			content: 'dual_screen';
		}
		:host > i.duo:before {
			content: 'duo';
		}
		:host > i.dvr:before {
			content: 'dvr';
		}
		:host > i.dynamic_feed:before {
			content: 'dynamic_feed';
		}
		:host > i.dynamic_form:before {
			content: 'dynamic_form';
		}
		:host > i.e911_avatar:before {
			content: 'e911_avatar';
		}
		:host > i.e911_emergency:before {
			content: 'e911_emergency';
		}
		:host > i.e_mobiledata:before {
			content: 'e_mobiledata';
		}
		:host > i.e_mobiledata_badge:before {
			content: 'e_mobiledata_badge';
		}
		:host > i.earbuds:before {
			content: 'earbuds';
		}
		:host > i.earbuds_battery:before {
			content: 'earbuds_battery';
		}
		:host > i.early_on:before {
			content: 'early_on';
		}
		:host > i.earthquake:before {
			content: 'earthquake';
		}
		:host > i.east:before {
			content: 'east';
		}
		:host > i.ecg:before {
			content: 'ecg';
		}
		:host > i.ecg_heart:before {
			content: 'ecg_heart';
		}
		:host > i.eco:before {
			content: 'eco';
		}
		:host > i.eda:before {
			content: 'eda';
		}
		:host > i.edgesensor_high:before {
			content: 'edgesensor_high';
		}
		:host > i.edgesensor_low:before {
			content: 'edgesensor_low';
		}
		:host > i.edit:before {
			content: 'edit';
		}
		:host > i.edit_attributes:before {
			content: 'edit_attributes';
		}
		:host > i.edit_calendar:before {
			content: 'edit_calendar';
		}
		:host > i.edit_document:before {
			content: 'edit_document';
		}
		:host > i.edit_location:before {
			content: 'edit_location';
		}
		:host > i.edit_location_alt:before {
			content: 'edit_location_alt';
		}
		:host > i.edit_note:before {
			content: 'edit_note';
		}
		:host > i.edit_notifications:before {
			content: 'edit_notifications';
		}
		:host > i.edit_off:before {
			content: 'edit_off';
		}
		:host > i.edit_road:before {
			content: 'edit_road';
		}
		:host > i.edit_square:before {
			content: 'edit_square';
		}
		:host > i.editor_choice:before {
			content: 'editor_choice';
		}
		:host > i.egg:before {
			content: 'egg';
		}
		:host > i.egg_alt:before {
			content: 'egg_alt';
		}
		:host > i.eject:before {
			content: 'eject';
		}
		:host > i.elderly:before {
			content: 'elderly';
		}
		:host > i.elderly_woman:before {
			content: 'elderly_woman';
		}
		:host > i.electric_bike:before {
			content: 'electric_bike';
		}
		:host > i.electric_bolt:before {
			content: 'electric_bolt';
		}
		:host > i.electric_car:before {
			content: 'electric_car';
		}
		:host > i.electric_meter:before {
			content: 'electric_meter';
		}
		:host > i.electric_moped:before {
			content: 'electric_moped';
		}
		:host > i.electric_rickshaw:before {
			content: 'electric_rickshaw';
		}
		:host > i.electric_scooter:before {
			content: 'electric_scooter';
		}
		:host > i.electrical_services:before {
			content: 'electrical_services';
		}
		:host > i.elevation:before {
			content: 'elevation';
		}
		:host > i.elevator:before {
			content: 'elevator';
		}
		:host > i.email:before {
			content: 'email';
		}
		:host > i.emergency:before {
			content: 'emergency';
		}
		:host > i.emergency_heat:before {
			content: 'emergency_heat';
		}
		:host > i.emergency_heat_2:before {
			content: 'emergency_heat_2';
		}
		:host > i.emergency_home:before {
			content: 'emergency_home';
		}
		:host > i.emergency_recording:before {
			content: 'emergency_recording';
		}
		:host > i.emergency_share:before {
			content: 'emergency_share';
		}
		:host > i.emergency_share_off:before {
			content: 'emergency_share_off';
		}
		:host > i.emoji_emotions:before {
			content: 'emoji_emotions';
		}
		:host > i.emoji_events:before {
			content: 'emoji_events';
		}
		:host > i.emoji_flags:before {
			content: 'emoji_flags';
		}
		:host > i.emoji_food_beverage:before {
			content: 'emoji_food_beverage';
		}
		:host > i.emoji_nature:before {
			content: 'emoji_nature';
		}
		:host > i.emoji_objects:before {
			content: 'emoji_objects';
		}
		:host > i.emoji_people:before {
			content: 'emoji_people';
		}
		:host > i.emoji_symbols:before {
			content: 'emoji_symbols';
		}
		:host > i.emoji_transportation:before {
			content: 'emoji_transportation';
		}
		:host > i.emoticon:before {
			content: 'emoticon';
		}
		:host > i.empty_dashboard:before {
			content: 'empty_dashboard';
		}
		:host > i.enable:before {
			content: 'enable';
		}
		:host > i.encrypted:before {
			content: 'encrypted';
		}
		:host > i.endocrinology:before {
			content: 'endocrinology';
		}
		:host > i.energy:before {
			content: 'energy';
		}
		:host > i.energy_program_saving:before {
			content: 'energy_program_saving';
		}
		:host > i.energy_program_time_used:before {
			content: 'energy_program_time_used';
		}
		:host > i.energy_savings_leaf:before {
			content: 'energy_savings_leaf';
		}
		:host > i.engineering:before {
			content: 'engineering';
		}
		:host > i.enhanced_encryption:before {
			content: 'enhanced_encryption';
		}
		:host > i.ent:before {
			content: 'ent';
		}
		:host > i.enterprise:before {
			content: 'enterprise';
		}
		:host > i.enterprise_off:before {
			content: 'enterprise_off';
		}
		:host > i.equal:before {
			content: 'equal';
		}
		:host > i.equalizer:before {
			content: 'equalizer';
		}
		:host > i.error:before {
			content: 'error';
		}
		:host > i.error_circle_rounded:before {
			content: 'error_circle_rounded';
		}
		:host > i.error_med:before {
			content: 'error_med';
		}
		:host > i.error_outline:before {
			content: 'error_outline';
		}
		:host > i.escalator:before {
			content: 'escalator';
		}
		:host > i.escalator_warning:before {
			content: 'escalator_warning';
		}
		:host > i.euro:before {
			content: 'euro';
		}
		:host > i.euro_symbol:before {
			content: 'euro_symbol';
		}
		:host > i.ev_charger:before {
			content: 'ev_charger';
		}
		:host > i.ev_mobiledata_badge:before {
			content: 'ev_mobiledata_badge';
		}
		:host > i.ev_shadow:before {
			content: 'ev_shadow';
		}
		:host > i.ev_shadow_add:before {
			content: 'ev_shadow_add';
		}
		:host > i.ev_shadow_minus:before {
			content: 'ev_shadow_minus';
		}
		:host > i.ev_station:before {
			content: 'ev_station';
		}
		:host > i.event:before {
			content: 'event';
		}
		:host > i.event_available:before {
			content: 'event_available';
		}
		:host > i.event_busy:before {
			content: 'event_busy';
		}
		:host > i.event_list:before {
			content: 'event_list';
		}
		:host > i.event_note:before {
			content: 'event_note';
		}
		:host > i.event_repeat:before {
			content: 'event_repeat';
		}
		:host > i.event_seat:before {
			content: 'event_seat';
		}
		:host > i.event_upcoming:before {
			content: 'event_upcoming';
		}
		:host > i.exclamation:before {
			content: 'exclamation';
		}
		:host > i.exercise:before {
			content: 'exercise';
		}
		:host > i.exit_to_app:before {
			content: 'exit_to_app';
		}
		:host > i.expand:before {
			content: 'expand';
		}
		:host > i.expand_all:before {
			content: 'expand_all';
		}
		:host > i.expand_circle_down:before {
			content: 'expand_circle_down';
		}
		:host > i.expand_circle_right:before {
			content: 'expand_circle_right';
		}
		:host > i.expand_circle_up:before {
			content: 'expand_circle_up';
		}
		:host > i.expand_content:before {
			content: 'expand_content';
		}
		:host > i.expand_less:before {
			content: 'expand_less';
		}
		:host > i.expand_more:before {
			content: 'expand_more';
		}
		:host > i.experiment:before {
			content: 'experiment';
		}
		:host > i.explicit:before {
			content: 'explicit';
		}
		:host > i.explore:before {
			content: 'explore';
		}
		:host > i.explore_nearby:before {
			content: 'explore_nearby';
		}
		:host > i.explore_off:before {
			content: 'explore_off';
		}
		:host > i.explosion:before {
			content: 'explosion';
		}
		:host > i.export_notes:before {
			content: 'export_notes';
		}
		:host > i.exposure:before {
			content: 'exposure';
		}
		:host > i.exposure_neg_1:before {
			content: 'exposure_neg_1';
		}
		:host > i.exposure_neg_2:before {
			content: 'exposure_neg_2';
		}
		:host > i.exposure_plus_1:before {
			content: 'exposure_plus_1';
		}
		:host > i.exposure_plus_2:before {
			content: 'exposure_plus_2';
		}
		:host > i.exposure_zero:before {
			content: 'exposure_zero';
		}
		:host > i.extension:before {
			content: 'extension';
		}
		:host > i.extension_off:before {
			content: 'extension_off';
		}
		:host > i.eyeglasses:before {
			content: 'eyeglasses';
		}
		:host > i.face:before {
			content: 'face';
		}
		:host > i.face_2:before {
			content: 'face_2';
		}
		:host > i.face_3:before {
			content: 'face_3';
		}
		:host > i.face_4:before {
			content: 'face_4';
		}
		:host > i.face_5:before {
			content: 'face_5';
		}
		:host > i.face_6:before {
			content: 'face_6';
		}
		:host > i.face_retouching_natural:before {
			content: 'face_retouching_natural';
		}
		:host > i.face_retouching_off:before {
			content: 'face_retouching_off';
		}
		:host > i.face_unlock:before {
			content: 'face_unlock';
		}
		:host > i.fact_check:before {
			content: 'fact_check';
		}
		:host > i.factory:before {
			content: 'factory';
		}
		:host > i.falling:before {
			content: 'falling';
		}
		:host > i.familiar_face_and_zone:before {
			content: 'familiar_face_and_zone';
		}
		:host > i.family_history:before {
			content: 'family_history';
		}
		:host > i.family_home:before {
			content: 'family_home';
		}
		:host > i.family_link:before {
			content: 'family_link';
		}
		:host > i.family_restroom:before {
			content: 'family_restroom';
		}
		:host > i.family_star:before {
			content: 'family_star';
		}
		:host > i.farsight_digital:before {
			content: 'farsight_digital';
		}
		:host > i.fast_forward:before {
			content: 'fast_forward';
		}
		:host > i.fast_rewind:before {
			content: 'fast_rewind';
		}
		:host > i.fastfood:before {
			content: 'fastfood';
		}
		:host > i.faucet:before {
			content: 'faucet';
		}
		:host > i.favorite:before {
			content: 'favorite';
		}
		:host > i.favorite_border:before {
			content: 'favorite_border';
		}
		:host > i.fax:before {
			content: 'fax';
		}
		:host > i.feature_search:before {
			content: 'feature_search';
		}
		:host > i.featured_play_list:before {
			content: 'featured_play_list';
		}
		:host > i.featured_seasonal_and_gifts:before {
			content: 'featured_seasonal_and_gifts';
		}
		:host > i.featured_video:before {
			content: 'featured_video';
		}
		:host > i.feed:before {
			content: 'feed';
		}
		:host > i.feedback:before {
			content: 'feedback';
		}
		:host > i.female:before {
			content: 'female';
		}
		:host > i.femur:before {
			content: 'femur';
		}
		:host > i.femur_alt:before {
			content: 'femur_alt';
		}
		:host > i.fence:before {
			content: 'fence';
		}
		:host > i.fertile:before {
			content: 'fertile';
		}
		:host > i.festival:before {
			content: 'festival';
		}
		:host > i.fiber_dvr:before {
			content: 'fiber_dvr';
		}
		:host > i.fiber_manual_record:before {
			content: 'fiber_manual_record';
		}
		:host > i.fiber_new:before {
			content: 'fiber_new';
		}
		:host > i.fiber_pin:before {
			content: 'fiber_pin';
		}
		:host > i.fiber_smart_record:before {
			content: 'fiber_smart_record';
		}
		:host > i.file_copy:before {
			content: 'file_copy';
		}
		:host > i.file_download:before {
			content: 'file_download';
		}
		:host > i.file_download_done:before {
			content: 'file_download_done';
		}
		:host > i.file_download_off:before {
			content: 'file_download_off';
		}
		:host > i.file_map:before {
			content: 'file_map';
		}
		:host > i.file_open:before {
			content: 'file_open';
		}
		:host > i.file_present:before {
			content: 'file_present';
		}
		:host > i.file_save:before {
			content: 'file_save';
		}
		:host > i.file_save_off:before {
			content: 'file_save_off';
		}
		:host > i.file_upload:before {
			content: 'file_upload';
		}
		:host > i.file_upload_off:before {
			content: 'file_upload_off';
		}
		:host > i.filter:before {
			content: 'filter';
		}
		:host > i.filter_1:before {
			content: 'filter_1';
		}
		:host > i.filter_2:before {
			content: 'filter_2';
		}
		:host > i.filter_3:before {
			content: 'filter_3';
		}
		:host > i.filter_4:before {
			content: 'filter_4';
		}
		:host > i.filter_5:before {
			content: 'filter_5';
		}
		:host > i.filter_6:before {
			content: 'filter_6';
		}
		:host > i.filter_7:before {
			content: 'filter_7';
		}
		:host > i.filter_8:before {
			content: 'filter_8';
		}
		:host > i.filter_9:before {
			content: 'filter_9';
		}
		:host > i.filter_9_plus:before {
			content: 'filter_9_plus';
		}
		:host > i.filter_alt:before {
			content: 'filter_alt';
		}
		:host > i.filter_alt_off:before {
			content: 'filter_alt_off';
		}
		:host > i.filter_b_and_w:before {
			content: 'filter_b_and_w';
		}
		:host > i.filter_center_focus:before {
			content: 'filter_center_focus';
		}
		:host > i.filter_drama:before {
			content: 'filter_drama';
		}
		:host > i.filter_frames:before {
			content: 'filter_frames';
		}
		:host > i.filter_hdr:before {
			content: 'filter_hdr';
		}
		:host > i.filter_list:before {
			content: 'filter_list';
		}
		:host > i.filter_list_alt:before {
			content: 'filter_list_alt';
		}
		:host > i.filter_list_off:before {
			content: 'filter_list_off';
		}
		:host > i.filter_none:before {
			content: 'filter_none';
		}
		:host > i.filter_retrolux:before {
			content: 'filter_retrolux';
		}
		:host > i.filter_tilt_shift:before {
			content: 'filter_tilt_shift';
		}
		:host > i.filter_vintage:before {
			content: 'filter_vintage';
		}
		:host > i.finance:before {
			content: 'finance';
		}
		:host > i.finance_chip:before {
			content: 'finance_chip';
		}
		:host > i.finance_mode:before {
			content: 'finance_mode';
		}
		:host > i.find_in_page:before {
			content: 'find_in_page';
		}
		:host > i.find_replace:before {
			content: 'find_replace';
		}
		:host > i.fingerprint:before {
			content: 'fingerprint';
		}
		:host > i.fire_extinguisher:before {
			content: 'fire_extinguisher';
		}
		:host > i.fire_hydrant:before {
			content: 'fire_hydrant';
		}
		:host > i.fire_truck:before {
			content: 'fire_truck';
		}
		:host > i.fireplace:before {
			content: 'fireplace';
		}
		:host > i.first_page:before {
			content: 'first_page';
		}
		:host > i.fit_page:before {
			content: 'fit_page';
		}
		:host > i.fit_screen:before {
			content: 'fit_screen';
		}
		:host > i.fit_width:before {
			content: 'fit_width';
		}
		:host > i.fitness_center:before {
			content: 'fitness_center';
		}
		:host > i.flag:before {
			content: 'flag';
		}
		:host > i.flag_circle:before {
			content: 'flag_circle';
		}
		:host > i.flag_filled:before {
			content: 'flag_filled';
		}
		:host > i.flaky:before {
			content: 'flaky';
		}
		:host > i.flare:before {
			content: 'flare';
		}
		:host > i.flash_auto:before {
			content: 'flash_auto';
		}
		:host > i.flash_off:before {
			content: 'flash_off';
		}
		:host > i.flash_on:before {
			content: 'flash_on';
		}
		:host > i.flashlight_off:before {
			content: 'flashlight_off';
		}
		:host > i.flashlight_on:before {
			content: 'flashlight_on';
		}
		:host > i.flatware:before {
			content: 'flatware';
		}
		:host > i.flex_direction:before {
			content: 'flex_direction';
		}
		:host > i.flex_no_wrap:before {
			content: 'flex_no_wrap';
		}
		:host > i.flex_wrap:before {
			content: 'flex_wrap';
		}
		:host > i.flight:before {
			content: 'flight';
		}
		:host > i.flight_class:before {
			content: 'flight_class';
		}
		:host > i.flight_land:before {
			content: 'flight_land';
		}
		:host > i.flight_takeoff:before {
			content: 'flight_takeoff';
		}
		:host > i.flights_and_hotels:before {
			content: 'flights_and_hotels';
		}
		:host > i.flightsmode:before {
			content: 'flightsmode';
		}
		:host > i.flip:before {
			content: 'flip';
		}
		:host > i.flip_camera_android:before {
			content: 'flip_camera_android';
		}
		:host > i.flip_camera_ios:before {
			content: 'flip_camera_ios';
		}
		:host > i.flip_to_back:before {
			content: 'flip_to_back';
		}
		:host > i.flip_to_front:before {
			content: 'flip_to_front';
		}
		:host > i.flood:before {
			content: 'flood';
		}
		:host > i.floor:before {
			content: 'floor';
		}
		:host > i.floor_lamp:before {
			content: 'floor_lamp';
		}
		:host > i.flourescent:before {
			content: 'flourescent';
		}
		:host > i.flowsheet:before {
			content: 'flowsheet';
		}
		:host > i.fluid:before {
			content: 'fluid';
		}
		:host > i.fluid_balance:before {
			content: 'fluid_balance';
		}
		:host > i.fluid_med:before {
			content: 'fluid_med';
		}
		:host > i.fluorescent:before {
			content: 'fluorescent';
		}
		:host > i.flutter:before {
			content: 'flutter';
		}
		:host > i.flutter_dash:before {
			content: 'flutter_dash';
		}
		:host > i.fmd_bad:before {
			content: 'fmd_bad';
		}
		:host > i.fmd_good:before {
			content: 'fmd_good';
		}
		:host > i.foggy:before {
			content: 'foggy';
		}
		:host > i.folded_hands:before {
			content: 'folded_hands';
		}
		:host > i.folder:before {
			content: 'folder';
		}
		:host > i.folder_copy:before {
			content: 'folder_copy';
		}
		:host > i.folder_data:before {
			content: 'folder_data';
		}
		:host > i.folder_delete:before {
			content: 'folder_delete';
		}
		:host > i.folder_limited:before {
			content: 'folder_limited';
		}
		:host > i.folder_managed:before {
			content: 'folder_managed';
		}
		:host > i.folder_off:before {
			content: 'folder_off';
		}
		:host > i.folder_open:before {
			content: 'folder_open';
		}
		:host > i.folder_shared:before {
			content: 'folder_shared';
		}
		:host > i.folder_special:before {
			content: 'folder_special';
		}
		:host > i.folder_supervised:before {
			content: 'folder_supervised';
		}
		:host > i.folder_zip:before {
			content: 'folder_zip';
		}
		:host > i.follow_the_signs:before {
			content: 'follow_the_signs';
		}
		:host > i.font_download:before {
			content: 'font_download';
		}
		:host > i.font_download_off:before {
			content: 'font_download_off';
		}
		:host > i.food_bank:before {
			content: 'food_bank';
		}
		:host > i.foot_bones:before {
			content: 'foot_bones';
		}
		:host > i.footprint:before {
			content: 'footprint';
		}
		:host > i.for_you:before {
			content: 'for_you';
		}
		:host > i.forest:before {
			content: 'forest';
		}
		:host > i.fork_left:before {
			content: 'fork_left';
		}
		:host > i.fork_right:before {
			content: 'fork_right';
		}
		:host > i.forklift:before {
			content: 'forklift';
		}
		:host > i.format_align_center:before {
			content: 'format_align_center';
		}
		:host > i.format_align_justify:before {
			content: 'format_align_justify';
		}
		:host > i.format_align_left:before {
			content: 'format_align_left';
		}
		:host > i.format_align_right:before {
			content: 'format_align_right';
		}
		:host > i.format_bold:before {
			content: 'format_bold';
		}
		:host > i.format_clear:before {
			content: 'format_clear';
		}
		:host > i.format_color_fill:before {
			content: 'format_color_fill';
		}
		:host > i.format_color_reset:before {
			content: 'format_color_reset';
		}
		:host > i.format_color_text:before {
			content: 'format_color_text';
		}
		:host > i.format_h1:before {
			content: 'format_h1';
		}
		:host > i.format_h2:before {
			content: 'format_h2';
		}
		:host > i.format_h3:before {
			content: 'format_h3';
		}
		:host > i.format_h4:before {
			content: 'format_h4';
		}
		:host > i.format_h5:before {
			content: 'format_h5';
		}
		:host > i.format_h6:before {
			content: 'format_h6';
		}
		:host > i.format_image_left:before {
			content: 'format_image_left';
		}
		:host > i.format_image_right:before {
			content: 'format_image_right';
		}
		:host > i.format_indent_decrease:before {
			content: 'format_indent_decrease';
		}
		:host > i.format_indent_increase:before {
			content: 'format_indent_increase';
		}
		:host > i.format_ink_highlighter:before {
			content: 'format_ink_highlighter';
		}
		:host > i.format_italic:before {
			content: 'format_italic';
		}
		:host > i.format_letter_spacing:before {
			content: 'format_letter_spacing';
		}
		:host > i.format_letter_spacing_2:before {
			content: 'format_letter_spacing_2';
		}
		:host > i.format_letter_spacing_standard:before {
			content: 'format_letter_spacing_standard';
		}
		:host > i.format_letter_spacing_wide:before {
			content: 'format_letter_spacing_wide';
		}
		:host > i.format_letter_spacing_wider:before {
			content: 'format_letter_spacing_wider';
		}
		:host > i.format_line_spacing:before {
			content: 'format_line_spacing';
		}
		:host > i.format_list_bulleted:before {
			content: 'format_list_bulleted';
		}
		:host > i.format_list_bulleted_add:before {
			content: 'format_list_bulleted_add';
		}
		:host > i.format_list_numbered:before {
			content: 'format_list_numbered';
		}
		:host > i.format_list_numbered_rtl:before {
			content: 'format_list_numbered_rtl';
		}
		:host > i.format_overline:before {
			content: 'format_overline';
		}
		:host > i.format_paint:before {
			content: 'format_paint';
		}
		:host > i.format_paragraph:before {
			content: 'format_paragraph';
		}
		:host > i.format_quote:before {
			content: 'format_quote';
		}
		:host > i.format_shapes:before {
			content: 'format_shapes';
		}
		:host > i.format_size:before {
			content: 'format_size';
		}
		:host > i.format_strikethrough:before {
			content: 'format_strikethrough';
		}
		:host > i.format_text_clip:before {
			content: 'format_text_clip';
		}
		:host > i.format_text_overflow:before {
			content: 'format_text_overflow';
		}
		:host > i.format_text_wrap:before {
			content: 'format_text_wrap';
		}
		:host > i.format_textdirection_l_to_r:before {
			content: 'format_textdirection_l_to_r';
		}
		:host > i.format_textdirection_r_to_l:before {
			content: 'format_textdirection_r_to_l';
		}
		:host > i.format_underlined:before {
			content: 'format_underlined';
		}
		:host > i.format_underlined_squiggle:before {
			content: 'format_underlined_squiggle';
		}
		:host > i.forms_add_on:before {
			content: 'forms_add_on';
		}
		:host > i.forms_apps_script:before {
			content: 'forms_apps_script';
		}
		:host > i.fort:before {
			content: 'fort';
		}
		:host > i.forum:before {
			content: 'forum';
		}
		:host > i.forward:before {
			content: 'forward';
		}
		:host > i.forward_10:before {
			content: 'forward_10';
		}
		:host > i.forward_30:before {
			content: 'forward_30';
		}
		:host > i.forward_5:before {
			content: 'forward_5';
		}
		:host > i.forward_circle:before {
			content: 'forward_circle';
		}
		:host > i.forward_media:before {
			content: 'forward_media';
		}
		:host > i.forward_to_inbox:before {
			content: 'forward_to_inbox';
		}
		:host > i.foundation:before {
			content: 'foundation';
		}
		:host > i.frame_inspect:before {
			content: 'frame_inspect';
		}
		:host > i.frame_person:before {
			content: 'frame_person';
		}
		:host > i.frame_person_off:before {
			content: 'frame_person_off';
		}
		:host > i.frame_reload:before {
			content: 'frame_reload';
		}
		:host > i.frame_source:before {
			content: 'frame_source';
		}
		:host > i.free_breakfast:before {
			content: 'free_breakfast';
		}
		:host > i.free_cancellation:before {
			content: 'free_cancellation';
		}
		:host > i.front_hand:before {
			content: 'front_hand';
		}
		:host > i.front_loader:before {
			content: 'front_loader';
		}
		:host > i.full_coverage:before {
			content: 'full_coverage';
		}
		:host > i.full_hd:before {
			content: 'full_hd';
		}
		:host > i.full_stacked_bar_chart:before {
			content: 'full_stacked_bar_chart';
		}
		:host > i.fullscreen:before {
			content: 'fullscreen';
		}
		:host > i.fullscreen_exit:before {
			content: 'fullscreen_exit';
		}
		:host > i.function:before {
			content: 'function';
		}
		:host > i.functions:before {
			content: 'functions';
		}
		:host > i.g_mobiledata:before {
			content: 'g_mobiledata';
		}
		:host > i.g_mobiledata_badge:before {
			content: 'g_mobiledata_badge';
		}
		:host > i.g_translate:before {
			content: 'g_translate';
		}
		:host > i.gallery_thumbnail:before {
			content: 'gallery_thumbnail';
		}
		:host > i.gamepad:before {
			content: 'gamepad';
		}
		:host > i.games:before {
			content: 'games';
		}
		:host > i.garage:before {
			content: 'garage';
		}
		:host > i.garage_door:before {
			content: 'garage_door';
		}
		:host > i.garage_home:before {
			content: 'garage_home';
		}
		:host > i.garden_cart:before {
			content: 'garden_cart';
		}
		:host > i.gas_meter:before {
			content: 'gas_meter';
		}
		:host > i.gastroenterology:before {
			content: 'gastroenterology';
		}
		:host > i.gate:before {
			content: 'gate';
		}
		:host > i.gavel:before {
			content: 'gavel';
		}
		:host > i.general_device:before {
			content: 'general_device';
		}
		:host > i.generating_tokens:before {
			content: 'generating_tokens';
		}
		:host > i.genetics:before {
			content: 'genetics';
		}
		:host > i.genres:before {
			content: 'genres';
		}
		:host > i.gesture:before {
			content: 'gesture';
		}
		:host > i.gesture_select:before {
			content: 'gesture_select';
		}
		:host > i.get_app:before {
			content: 'get_app';
		}
		:host > i.gif:before {
			content: 'gif';
		}
		:host > i.gif_box:before {
			content: 'gif_box';
		}
		:host > i.girl:before {
			content: 'girl';
		}
		:host > i.gite:before {
			content: 'gite';
		}
		:host > i.glass_cup:before {
			content: 'glass_cup';
		}
		:host > i.globe:before {
			content: 'globe';
		}
		:host > i.globe_asia:before {
			content: 'globe_asia';
		}
		:host > i.globe_uk:before {
			content: 'globe_uk';
		}
		:host > i.glucose:before {
			content: 'glucose';
		}
		:host > i.glyphs:before {
			content: 'glyphs';
		}
		:host > i.go_to_line:before {
			content: 'go_to_line';
		}
		:host > i.golf_course:before {
			content: 'golf_course';
		}
		:host > i.google_home_devices:before {
			content: 'google_home_devices';
		}
		:host > i.google_plus_reshare:before {
			content: 'google_plus_reshare';
		}
		:host > i.google_tv_remote:before {
			content: 'google_tv_remote';
		}
		:host > i.google_wifi:before {
			content: 'google_wifi';
		}
		:host > i.gpp_bad:before {
			content: 'gpp_bad';
		}
		:host > i.gpp_good:before {
			content: 'gpp_good';
		}
		:host > i.gpp_maybe:before {
			content: 'gpp_maybe';
		}
		:host > i.gps_fixed:before {
			content: 'gps_fixed';
		}
		:host > i.gps_not_fixed:before {
			content: 'gps_not_fixed';
		}
		:host > i.gps_off:before {
			content: 'gps_off';
		}
		:host > i.grade:before {
			content: 'grade';
		}
		:host > i.gradient:before {
			content: 'gradient';
		}
		:host > i.grading:before {
			content: 'grading';
		}
		:host > i.grain:before {
			content: 'grain';
		}
		:host > i.graphic_eq:before {
			content: 'graphic_eq';
		}
		:host > i.grass:before {
			content: 'grass';
		}
		:host > i.grid_3x3:before {
			content: 'grid_3x3';
		}
		:host > i.grid_3x3_off:before {
			content: 'grid_3x3_off';
		}
		:host > i.grid_4x4:before {
			content: 'grid_4x4';
		}
		:host > i.grid_goldenratio:before {
			content: 'grid_goldenratio';
		}
		:host > i.grid_guides:before {
			content: 'grid_guides';
		}
		:host > i.grid_off:before {
			content: 'grid_off';
		}
		:host > i.grid_on:before {
			content: 'grid_on';
		}
		:host > i.grid_view:before {
			content: 'grid_view';
		}
		:host > i.grocery:before {
			content: 'grocery';
		}
		:host > i.group:before {
			content: 'group';
		}
		:host > i.group_add:before {
			content: 'group_add';
		}
		:host > i.group_off:before {
			content: 'group_off';
		}
		:host > i.group_remove:before {
			content: 'group_remove';
		}
		:host > i.group_work:before {
			content: 'group_work';
		}
		:host > i.grouped_bar_chart:before {
			content: 'grouped_bar_chart';
		}
		:host > i.groups:before {
			content: 'groups';
		}
		:host > i.groups_2:before {
			content: 'groups_2';
		}
		:host > i.groups_3:before {
			content: 'groups_3';
		}
		:host > i.gynecology:before {
			content: 'gynecology';
		}
		:host > i.h_mobiledata:before {
			content: 'h_mobiledata';
		}
		:host > i.h_mobiledata_badge:before {
			content: 'h_mobiledata_badge';
		}
		:host > i.h_plus_mobiledata:before {
			content: 'h_plus_mobiledata';
		}
		:host > i.h_plus_mobiledata_badge:before {
			content: 'h_plus_mobiledata_badge';
		}
		:host > i.hail:before {
			content: 'hail';
		}
		:host > i.hallway:before {
			content: 'hallway';
		}
		:host > i.hand_bones:before {
			content: 'hand_bones';
		}
		:host > i.hand_gesture:before {
			content: 'hand_gesture';
		}
		:host > i.handshake:before {
			content: 'handshake';
		}
		:host > i.handwriting_recognition:before {
			content: 'handwriting_recognition';
		}
		:host > i.handyman:before {
			content: 'handyman';
		}
		:host > i.hangout_video:before {
			content: 'hangout_video';
		}
		:host > i.hangout_video_off:before {
			content: 'hangout_video_off';
		}
		:host > i.hard_drive:before {
			content: 'hard_drive';
		}
		:host > i.hard_drive_2:before {
			content: 'hard_drive_2';
		}
		:host > i.hardware:before {
			content: 'hardware';
		}
		:host > i.hd:before {
			content: 'hd';
		}
		:host > i.hdr_auto:before {
			content: 'hdr_auto';
		}
		:host > i.hdr_auto_select:before {
			content: 'hdr_auto_select';
		}
		:host > i.hdr_enhanced_select:before {
			content: 'hdr_enhanced_select';
		}
		:host > i.hdr_off:before {
			content: 'hdr_off';
		}
		:host > i.hdr_off_select:before {
			content: 'hdr_off_select';
		}
		:host > i.hdr_on:before {
			content: 'hdr_on';
		}
		:host > i.hdr_on_select:before {
			content: 'hdr_on_select';
		}
		:host > i.hdr_plus:before {
			content: 'hdr_plus';
		}
		:host > i.hdr_plus_off:before {
			content: 'hdr_plus_off';
		}
		:host > i.hdr_strong:before {
			content: 'hdr_strong';
		}
		:host > i.hdr_weak:before {
			content: 'hdr_weak';
		}
		:host > i.headphones:before {
			content: 'headphones';
		}
		:host > i.headphones_battery:before {
			content: 'headphones_battery';
		}
		:host > i.headset:before {
			content: 'headset';
		}
		:host > i.headset_mic:before {
			content: 'headset_mic';
		}
		:host > i.headset_off:before {
			content: 'headset_off';
		}
		:host > i.healing:before {
			content: 'healing';
		}
		:host > i.health_and_beauty:before {
			content: 'health_and_beauty';
		}
		:host > i.health_and_safety:before {
			content: 'health_and_safety';
		}
		:host > i.health_metrics:before {
			content: 'health_metrics';
		}
		:host > i.heap_snapshot_large:before {
			content: 'heap_snapshot_large';
		}
		:host > i.heap_snapshot_multiple:before {
			content: 'heap_snapshot_multiple';
		}
		:host > i.heap_snapshot_thumbnail:before {
			content: 'heap_snapshot_thumbnail';
		}
		:host > i.hearing:before {
			content: 'hearing';
		}
		:host > i.hearing_disabled:before {
			content: 'hearing_disabled';
		}
		:host > i.heart_broken:before {
			content: 'heart_broken';
		}
		:host > i.heart_check:before {
			content: 'heart_check';
		}
		:host > i.heart_minus:before {
			content: 'heart_minus';
		}
		:host > i.heart_plus:before {
			content: 'heart_plus';
		}
		:host > i.heat:before {
			content: 'heat';
		}
		:host > i.heat_pump:before {
			content: 'heat_pump';
		}
		:host > i.heat_pump_balance:before {
			content: 'heat_pump_balance';
		}
		:host > i.height:before {
			content: 'height';
		}
		:host > i.helicopter:before {
			content: 'helicopter';
		}
		:host > i.help:before {
			content: 'help';
		}
		:host > i.help_center:before {
			content: 'help_center';
		}
		:host > i.help_clinic:before {
			content: 'help_clinic';
		}
		:host > i.help_outline:before {
			content: 'help_outline';
		}
		:host > i.hematology:before {
			content: 'hematology';
		}
		:host > i.hevc:before {
			content: 'hevc';
		}
		:host > i.hexagon:before {
			content: 'hexagon';
		}
		:host > i.hide:before {
			content: 'hide';
		}
		:host > i.hide_image:before {
			content: 'hide_image';
		}
		:host > i.hide_source:before {
			content: 'hide_source';
		}
		:host > i.high_density:before {
			content: 'high_density';
		}
		:host > i.high_quality:before {
			content: 'high_quality';
		}
		:host > i.high_res:before {
			content: 'high_res';
		}
		:host > i.highlight:before {
			content: 'highlight';
		}
		:host > i.highlight_keyboard_focus:before {
			content: 'highlight_keyboard_focus';
		}
		:host > i.highlight_mouse_cursor:before {
			content: 'highlight_mouse_cursor';
		}
		:host > i.highlight_off:before {
			content: 'highlight_off';
		}
		:host > i.highlight_text_cursor:before {
			content: 'highlight_text_cursor';
		}
		:host > i.highlighter_size_1:before {
			content: 'highlighter_size_1';
		}
		:host > i.highlighter_size_2:before {
			content: 'highlighter_size_2';
		}
		:host > i.highlighter_size_3:before {
			content: 'highlighter_size_3';
		}
		:host > i.highlighter_size_4:before {
			content: 'highlighter_size_4';
		}
		:host > i.highlighter_size_5:before {
			content: 'highlighter_size_5';
		}
		:host > i.hiking:before {
			content: 'hiking';
		}
		:host > i.history:before {
			content: 'history';
		}
		:host > i.history_edu:before {
			content: 'history_edu';
		}
		:host > i.history_toggle_off:before {
			content: 'history_toggle_off';
		}
		:host > i.hive:before {
			content: 'hive';
		}
		:host > i.hls:before {
			content: 'hls';
		}
		:host > i.hls_off:before {
			content: 'hls_off';
		}
		:host > i.holiday_village:before {
			content: 'holiday_village';
		}
		:host > i.home:before {
			content: 'home';
		}
		:host > i.home_and_garden:before {
			content: 'home_and_garden';
		}
		:host > i.home_app_logo:before {
			content: 'home_app_logo';
		}
		:host > i.home_filled:before {
			content: 'home_filled';
		}
		:host > i.home_health:before {
			content: 'home_health';
		}
		:host > i.home_improvement_and_tools:before {
			content: 'home_improvement_and_tools';
		}
		:host > i.home_iot_device:before {
			content: 'home_iot_device';
		}
		:host > i.home_max:before {
			content: 'home_max';
		}
		:host > i.home_max_dots:before {
			content: 'home_max_dots';
		}
		:host > i.home_mini:before {
			content: 'home_mini';
		}
		:host > i.home_pin:before {
			content: 'home_pin';
		}
		:host > i.home_repair_service:before {
			content: 'home_repair_service';
		}
		:host > i.home_speaker:before {
			content: 'home_speaker';
		}
		:host > i.home_storage:before {
			content: 'home_storage';
		}
		:host > i.home_work:before {
			content: 'home_work';
		}
		:host > i.horizontal_distribute:before {
			content: 'horizontal_distribute';
		}
		:host > i.horizontal_rule:before {
			content: 'horizontal_rule';
		}
		:host > i.horizontal_split:before {
			content: 'horizontal_split';
		}
		:host > i.hot_tub:before {
			content: 'hot_tub';
		}
		:host > i.hotel:before {
			content: 'hotel';
		}
		:host > i.hotel_class:before {
			content: 'hotel_class';
		}
		:host > i.hourglass:before {
			content: 'hourglass';
		}
		:host > i.hourglass_bottom:before {
			content: 'hourglass_bottom';
		}
		:host > i.hourglass_disabled:before {
			content: 'hourglass_disabled';
		}
		:host > i.hourglass_empty:before {
			content: 'hourglass_empty';
		}
		:host > i.hourglass_full:before {
			content: 'hourglass_full';
		}
		:host > i.hourglass_top:before {
			content: 'hourglass_top';
		}
		:host > i.house:before {
			content: 'house';
		}
		:host > i.house_siding:before {
			content: 'house_siding';
		}
		:host > i.house_with_shield:before {
			content: 'house_with_shield';
		}
		:host > i.houseboat:before {
			content: 'houseboat';
		}
		:host > i.household_supplies:before {
			content: 'household_supplies';
		}
		:host > i.how_to_reg:before {
			content: 'how_to_reg';
		}
		:host > i.how_to_vote:before {
			content: 'how_to_vote';
		}
		:host > i.hr_resting:before {
			content: 'hr_resting';
		}
		:host > i.html:before {
			content: 'html';
		}
		:host > i.http:before {
			content: 'http';
		}
		:host > i.https:before {
			content: 'https';
		}
		:host > i.hub:before {
			content: 'hub';
		}
		:host > i.humerus:before {
			content: 'humerus';
		}
		:host > i.humerus_alt:before {
			content: 'humerus_alt';
		}
		:host > i.humidity_high:before {
			content: 'humidity_high';
		}
		:host > i.humidity_indoor:before {
			content: 'humidity_indoor';
		}
		:host > i.humidity_low:before {
			content: 'humidity_low';
		}
		:host > i.humidity_mid:before {
			content: 'humidity_mid';
		}
		:host > i.humidity_percentage:before {
			content: 'humidity_percentage';
		}
		:host > i.hvac:before {
			content: 'hvac';
		}
		:host > i.ice_skating:before {
			content: 'ice_skating';
		}
		:host > i.icecream:before {
			content: 'icecream';
		}
		:host > i.ifl:before {
			content: 'ifl';
		}
		:host > i.iframe:before {
			content: 'iframe';
		}
		:host > i.iframe_off:before {
			content: 'iframe_off';
		}
		:host > i.image:before {
			content: 'image';
		}
		:host > i.image_aspect_ratio:before {
			content: 'image_aspect_ratio';
		}
		:host > i.image_not_supported:before {
			content: 'image_not_supported';
		}
		:host > i.image_search:before {
			content: 'image_search';
		}
		:host > i.imagesearch_roller:before {
			content: 'imagesearch_roller';
		}
		:host > i.imagesmode:before {
			content: 'imagesmode';
		}
		:host > i.immunology:before {
			content: 'immunology';
		}
		:host > i.import_contacts:before {
			content: 'import_contacts';
		}
		:host > i.import_export:before {
			content: 'import_export';
		}
		:host > i.important_devices:before {
			content: 'important_devices';
		}
		:host > i.in_home_mode:before {
			content: 'in_home_mode';
		}
		:host > i.inactive_order:before {
			content: 'inactive_order';
		}
		:host > i.inbox:before {
			content: 'inbox';
		}
		:host > i.inbox_customize:before {
			content: 'inbox_customize';
		}
		:host > i.incomplete_circle:before {
			content: 'incomplete_circle';
		}
		:host > i.indeterminate_check_box:before {
			content: 'indeterminate_check_box';
		}
		:host > i.indeterminate_question_box:before {
			content: 'indeterminate_question_box';
		}
		:host > i.info:before {
			content: 'info';
		}
		:host > i.info_i:before {
			content: 'info_i';
		}
		:host > i.infrared:before {
			content: 'infrared';
		}
		:host > i.ink_eraser:before {
			content: 'ink_eraser';
		}
		:host > i.ink_eraser_off:before {
			content: 'ink_eraser_off';
		}
		:host > i.ink_highlighter:before {
			content: 'ink_highlighter';
		}
		:host > i.ink_highlighter_move:before {
			content: 'ink_highlighter_move';
		}
		:host > i.ink_marker:before {
			content: 'ink_marker';
		}
		:host > i.ink_pen:before {
			content: 'ink_pen';
		}
		:host > i.inpatient:before {
			content: 'inpatient';
		}
		:host > i.input:before {
			content: 'input';
		}
		:host > i.input_circle:before {
			content: 'input_circle';
		}
		:host > i.insert_chart:before {
			content: 'insert_chart';
		}
		:host > i.insert_chart_filled:before {
			content: 'insert_chart_filled';
		}
		:host > i.insert_chart_outlined:before {
			content: 'insert_chart_outlined';
		}
		:host > i.insert_comment:before {
			content: 'insert_comment';
		}
		:host > i.insert_drive_file:before {
			content: 'insert_drive_file';
		}
		:host > i.insert_emoticon:before {
			content: 'insert_emoticon';
		}
		:host > i.insert_invitation:before {
			content: 'insert_invitation';
		}
		:host > i.insert_link:before {
			content: 'insert_link';
		}
		:host > i.insert_page_break:before {
			content: 'insert_page_break';
		}
		:host > i.insert_photo:before {
			content: 'insert_photo';
		}
		:host > i.insert_text:before {
			content: 'insert_text';
		}
		:host > i.insights:before {
			content: 'insights';
		}
		:host > i.install_desktop:before {
			content: 'install_desktop';
		}
		:host > i.install_mobile:before {
			content: 'install_mobile';
		}
		:host > i.instant_mix:before {
			content: 'instant_mix';
		}
		:host > i.integration_instructions:before {
			content: 'integration_instructions';
		}
		:host > i.interactive_space:before {
			content: 'interactive_space';
		}
		:host > i.interests:before {
			content: 'interests';
		}
		:host > i.interpreter_mode:before {
			content: 'interpreter_mode';
		}
		:host > i.inventory:before {
			content: 'inventory';
		}
		:host > i.inventory_2:before {
			content: 'inventory_2';
		}
		:host > i.invert_colors:before {
			content: 'invert_colors';
		}
		:host > i.invert_colors_off:before {
			content: 'invert_colors_off';
		}
		:host > i.ios:before {
			content: 'ios';
		}
		:host > i.ios_share:before {
			content: 'ios_share';
		}
		:host > i.iron:before {
			content: 'iron';
		}
		:host > i.iso:before {
			content: 'iso';
		}
		:host > i.jamboard_kiosk:before {
			content: 'jamboard_kiosk';
		}
		:host > i.javascript:before {
			content: 'javascript';
		}
		:host > i.join:before {
			content: 'join';
		}
		:host > i.join_full:before {
			content: 'join_full';
		}
		:host > i.join_inner:before {
			content: 'join_inner';
		}
		:host > i.join_left:before {
			content: 'join_left';
		}
		:host > i.join_right:before {
			content: 'join_right';
		}
		:host > i.joystick:before {
			content: 'joystick';
		}
		:host > i.jump_to_element:before {
			content: 'jump_to_element';
		}
		:host > i.kayaking:before {
			content: 'kayaking';
		}
		:host > i.kebab_dining:before {
			content: 'kebab_dining';
		}
		:host > i.kettle:before {
			content: 'kettle';
		}
		:host > i.key:before {
			content: 'key';
		}
		:host > i.key_off:before {
			content: 'key_off';
		}
		:host > i.key_vertical:before {
			content: 'key_vertical';
		}
		:host > i.key_visualizer:before {
			content: 'key_visualizer';
		}
		:host > i.keyboard:before {
			content: 'keyboard';
		}
		:host > i.keyboard_alt:before {
			content: 'keyboard_alt';
		}
		:host > i.keyboard_arrow_down:before {
			content: 'keyboard_arrow_down';
		}
		:host > i.keyboard_arrow_left:before {
			content: 'keyboard_arrow_left';
		}
		:host > i.keyboard_arrow_right:before {
			content: 'keyboard_arrow_right';
		}
		:host > i.keyboard_arrow_up:before {
			content: 'keyboard_arrow_up';
		}
		:host > i.keyboard_backspace:before {
			content: 'keyboard_backspace';
		}
		:host > i.keyboard_capslock:before {
			content: 'keyboard_capslock';
		}
		:host > i.keyboard_capslock_badge:before {
			content: 'keyboard_capslock_badge';
		}
		:host > i.keyboard_command_key:before {
			content: 'keyboard_command_key';
		}
		:host > i.keyboard_control_key:before {
			content: 'keyboard_control_key';
		}
		:host > i.keyboard_double_arrow_down:before {
			content: 'keyboard_double_arrow_down';
		}
		:host > i.keyboard_double_arrow_left:before {
			content: 'keyboard_double_arrow_left';
		}
		:host > i.keyboard_double_arrow_right:before {
			content: 'keyboard_double_arrow_right';
		}
		:host > i.keyboard_double_arrow_up:before {
			content: 'keyboard_double_arrow_up';
		}
		:host > i.keyboard_external_input:before {
			content: 'keyboard_external_input';
		}
		:host > i.keyboard_full:before {
			content: 'keyboard_full';
		}
		:host > i.keyboard_hide:before {
			content: 'keyboard_hide';
		}
		:host > i.keyboard_keys:before {
			content: 'keyboard_keys';
		}
		:host > i.keyboard_off:before {
			content: 'keyboard_off';
		}
		:host > i.keyboard_onscreen:before {
			content: 'keyboard_onscreen';
		}
		:host > i.keyboard_option_key:before {
			content: 'keyboard_option_key';
		}
		:host > i.keyboard_previous_language:before {
			content: 'keyboard_previous_language';
		}
		:host > i.keyboard_return:before {
			content: 'keyboard_return';
		}
		:host > i.keyboard_tab:before {
			content: 'keyboard_tab';
		}
		:host > i.keyboard_tab_rtl:before {
			content: 'keyboard_tab_rtl';
		}
		:host > i.keyboard_voice:before {
			content: 'keyboard_voice';
		}
		:host > i.kid_star:before {
			content: 'kid_star';
		}
		:host > i.king_bed:before {
			content: 'king_bed';
		}
		:host > i.kitchen:before {
			content: 'kitchen';
		}
		:host > i.kitesurfing:before {
			content: 'kitesurfing';
		}
		:host > i.lab_panel:before {
			content: 'lab_panel';
		}
		:host > i.lab_profile:before {
			content: 'lab_profile';
		}
		:host > i.lab_research:before {
			content: 'lab_research';
		}
		:host > i.label:before {
			content: 'label';
		}
		:host > i.label_important:before {
			content: 'label_important';
		}
		:host > i.label_important_outline:before {
			content: 'label_important_outline';
		}
		:host > i.label_off:before {
			content: 'label_off';
		}
		:host > i.label_outline:before {
			content: 'label_outline';
		}
		:host > i.labs:before {
			content: 'labs';
		}
		:host > i.lan:before {
			content: 'lan';
		}
		:host > i.landscape:before {
			content: 'landscape';
		}
		:host > i.landslide:before {
			content: 'landslide';
		}
		:host > i.language:before {
			content: 'language';
		}
		:host > i.language_chinese_array:before {
			content: 'language_chinese_array';
		}
		:host > i.language_chinese_cangjie:before {
			content: 'language_chinese_cangjie';
		}
		:host > i.language_chinese_dayi:before {
			content: 'language_chinese_dayi';
		}
		:host > i.language_chinese_pinyin:before {
			content: 'language_chinese_pinyin';
		}
		:host > i.language_chinese_quick:before {
			content: 'language_chinese_quick';
		}
		:host > i.language_chinese_wubi:before {
			content: 'language_chinese_wubi';
		}
		:host > i.language_french:before {
			content: 'language_french';
		}
		:host > i.language_gb_english:before {
			content: 'language_gb_english';
		}
		:host > i.language_international:before {
			content: 'language_international';
		}
		:host > i.language_japanese_kana:before {
			content: 'language_japanese_kana';
		}
		:host > i.language_korean_latin:before {
			content: 'language_korean_latin';
		}
		:host > i.language_pinyin:before {
			content: 'language_pinyin';
		}
		:host > i.language_spanish:before {
			content: 'language_spanish';
		}
		:host > i.language_us:before {
			content: 'language_us';
		}
		:host > i.language_us_colemak:before {
			content: 'language_us_colemak';
		}
		:host > i.language_us_dvorak:before {
			content: 'language_us_dvorak';
		}
		:host > i.laps:before {
			content: 'laps';
		}
		:host > i.laptop:before {
			content: 'laptop';
		}
		:host > i.laptop_chromebook:before {
			content: 'laptop_chromebook';
		}
		:host > i.laptop_mac:before {
			content: 'laptop_mac';
		}
		:host > i.laptop_windows:before {
			content: 'laptop_windows';
		}
		:host > i.lasso_select:before {
			content: 'lasso_select';
		}
		:host > i.last_page:before {
			content: 'last_page';
		}
		:host > i.launch:before {
			content: 'launch';
		}
		:host > i.laundry:before {
			content: 'laundry';
		}
		:host > i.layers:before {
			content: 'layers';
		}
		:host > i.layers_clear:before {
			content: 'layers_clear';
		}
		:host > i.lda:before {
			content: 'lda';
		}
		:host > i.leaderboard:before {
			content: 'leaderboard';
		}
		:host > i.leak_add:before {
			content: 'leak_add';
		}
		:host > i.leak_remove:before {
			content: 'leak_remove';
		}
		:host > i.left_click:before {
			content: 'left_click';
		}
		:host > i.left_panel_close:before {
			content: 'left_panel_close';
		}
		:host > i.left_panel_open:before {
			content: 'left_panel_open';
		}
		:host > i.legend_toggle:before {
			content: 'legend_toggle';
		}
		:host > i.lens:before {
			content: 'lens';
		}
		:host > i.lens_blur:before {
			content: 'lens_blur';
		}
		:host > i.letter_switch:before {
			content: 'letter_switch';
		}
		:host > i.library_add:before {
			content: 'library_add';
		}
		:host > i.library_add_check:before {
			content: 'library_add_check';
		}
		:host > i.library_books:before {
			content: 'library_books';
		}
		:host > i.library_music:before {
			content: 'library_music';
		}
		:host > i.license:before {
			content: 'license';
		}
		:host > i.lift_to_talk:before {
			content: 'lift_to_talk';
		}
		:host > i.light:before {
			content: 'light';
		}
		:host > i.light_group:before {
			content: 'light_group';
		}
		:host > i.light_mode:before {
			content: 'light_mode';
		}
		:host > i.light_off:before {
			content: 'light_off';
		}
		:host > i.lightbulb:before {
			content: 'lightbulb';
		}
		:host > i.lightbulb_circle:before {
			content: 'lightbulb_circle';
		}
		:host > i.lightbulb_outline:before {
			content: 'lightbulb_outline';
		}
		:host > i.lightning_stand:before {
			content: 'lightning_stand';
		}
		:host > i.line_axis:before {
			content: 'line_axis';
		}
		:host > i.line_curve:before {
			content: 'line_curve';
		}
		:host > i.line_end:before {
			content: 'line_end';
		}
		:host > i.line_end_arrow:before {
			content: 'line_end_arrow';
		}
		:host > i.line_end_arrow_notch:before {
			content: 'line_end_arrow_notch';
		}
		:host > i.line_end_circle:before {
			content: 'line_end_circle';
		}
		:host > i.line_end_diamond:before {
			content: 'line_end_diamond';
		}
		:host > i.line_end_square:before {
			content: 'line_end_square';
		}
		:host > i.line_start:before {
			content: 'line_start';
		}
		:host > i.line_start_arrow:before {
			content: 'line_start_arrow';
		}
		:host > i.line_start_arrow_notch:before {
			content: 'line_start_arrow_notch';
		}
		:host > i.line_start_circle:before {
			content: 'line_start_circle';
		}
		:host > i.line_start_diamond:before {
			content: 'line_start_diamond';
		}
		:host > i.line_start_square:before {
			content: 'line_start_square';
		}
		:host > i.line_style:before {
			content: 'line_style';
		}
		:host > i.line_weight:before {
			content: 'line_weight';
		}
		:host > i.linear_scale:before {
			content: 'linear_scale';
		}
		:host > i.link:before {
			content: 'link';
		}
		:host > i.link_off:before {
			content: 'link_off';
		}
		:host > i.linked_camera:before {
			content: 'linked_camera';
		}
		:host > i.linked_services:before {
			content: 'linked_services';
		}
		:host > i.liquor:before {
			content: 'liquor';
		}
		:host > i.list:before {
			content: 'list';
		}
		:host > i.list_alt:before {
			content: 'list_alt';
		}
		:host > i.list_alt_add:before {
			content: 'list_alt_add';
		}
		:host > i.lists:before {
			content: 'lists';
		}
		:host > i.live_help:before {
			content: 'live_help';
		}
		:host > i.live_tv:before {
			content: 'live_tv';
		}
		:host > i.living:before {
			content: 'living';
		}
		:host > i.local_activity:before {
			content: 'local_activity';
		}
		:host > i.local_airport:before {
			content: 'local_airport';
		}
		:host > i.local_atm:before {
			content: 'local_atm';
		}
		:host > i.local_bar:before {
			content: 'local_bar';
		}
		:host > i.local_cafe:before {
			content: 'local_cafe';
		}
		:host > i.local_car_wash:before {
			content: 'local_car_wash';
		}
		:host > i.local_convenience_store:before {
			content: 'local_convenience_store';
		}
		:host > i.local_dining:before {
			content: 'local_dining';
		}
		:host > i.local_drink:before {
			content: 'local_drink';
		}
		:host > i.local_fire_department:before {
			content: 'local_fire_department';
		}
		:host > i.local_florist:before {
			content: 'local_florist';
		}
		:host > i.local_gas_station:before {
			content: 'local_gas_station';
		}
		:host > i.local_grocery_store:before {
			content: 'local_grocery_store';
		}
		:host > i.local_hospital:before {
			content: 'local_hospital';
		}
		:host > i.local_hotel:before {
			content: 'local_hotel';
		}
		:host > i.local_laundry_service:before {
			content: 'local_laundry_service';
		}
		:host > i.local_library:before {
			content: 'local_library';
		}
		:host > i.local_mall:before {
			content: 'local_mall';
		}
		:host > i.local_movies:before {
			content: 'local_movies';
		}
		:host > i.local_offer:before {
			content: 'local_offer';
		}
		:host > i.local_parking:before {
			content: 'local_parking';
		}
		:host > i.local_pharmacy:before {
			content: 'local_pharmacy';
		}
		:host > i.local_phone:before {
			content: 'local_phone';
		}
		:host > i.local_pizza:before {
			content: 'local_pizza';
		}
		:host > i.local_play:before {
			content: 'local_play';
		}
		:host > i.local_police:before {
			content: 'local_police';
		}
		:host > i.local_post_office:before {
			content: 'local_post_office';
		}
		:host > i.local_printshop:before {
			content: 'local_printshop';
		}
		:host > i.local_see:before {
			content: 'local_see';
		}
		:host > i.local_shipping:before {
			content: 'local_shipping';
		}
		:host > i.local_taxi:before {
			content: 'local_taxi';
		}
		:host > i.location_automation:before {
			content: 'location_automation';
		}
		:host > i.location_away:before {
			content: 'location_away';
		}
		:host > i.location_chip:before {
			content: 'location_chip';
		}
		:host > i.location_city:before {
			content: 'location_city';
		}
		:host > i.location_disabled:before {
			content: 'location_disabled';
		}
		:host > i.location_home:before {
			content: 'location_home';
		}
		:host > i.location_off:before {
			content: 'location_off';
		}
		:host > i.location_on:before {
			content: 'location_on';
		}
		:host > i.location_pin:before {
			content: 'location_pin';
		}
		:host > i.location_searching:before {
			content: 'location_searching';
		}
		:host > i.locator_tag:before {
			content: 'locator_tag';
		}
		:host > i.lock:before {
			content: 'lock';
		}
		:host > i.lock_clock:before {
			content: 'lock_clock';
		}
		:host > i.lock_open:before {
			content: 'lock_open';
		}
		:host > i.lock_open_right:before {
			content: 'lock_open_right';
		}
		:host > i.lock_outline:before {
			content: 'lock_outline';
		}
		:host > i.lock_person:before {
			content: 'lock_person';
		}
		:host > i.lock_reset:before {
			content: 'lock_reset';
		}
		:host > i.login:before {
			content: 'login';
		}
		:host > i.logo_dev:before {
			content: 'logo_dev';
		}
		:host > i.logout:before {
			content: 'logout';
		}
		:host > i.looks:before {
			content: 'looks';
		}
		:host > i.looks_3:before {
			content: 'looks_3';
		}
		:host > i.looks_4:before {
			content: 'looks_4';
		}
		:host > i.looks_5:before {
			content: 'looks_5';
		}
		:host > i.looks_6:before {
			content: 'looks_6';
		}
		:host > i.looks_one:before {
			content: 'looks_one';
		}
		:host > i.looks_two:before {
			content: 'looks_two';
		}
		:host > i.loop:before {
			content: 'loop';
		}
		:host > i.loupe:before {
			content: 'loupe';
		}
		:host > i.low_density:before {
			content: 'low_density';
		}
		:host > i.low_priority:before {
			content: 'low_priority';
		}
		:host > i.loyalty:before {
			content: 'loyalty';
		}
		:host > i.lte_mobiledata:before {
			content: 'lte_mobiledata';
		}
		:host > i.lte_mobiledata_badge:before {
			content: 'lte_mobiledata_badge';
		}
		:host > i.lte_plus_mobiledata:before {
			content: 'lte_plus_mobiledata';
		}
		:host > i.lte_plus_mobiledata_badge:before {
			content: 'lte_plus_mobiledata_badge';
		}
		:host > i.luggage:before {
			content: 'luggage';
		}
		:host > i.lunch_dining:before {
			content: 'lunch_dining';
		}
		:host > i.lyrics:before {
			content: 'lyrics';
		}
		:host > i.macro_auto:before {
			content: 'macro_auto';
		}
		:host > i.macro_off:before {
			content: 'macro_off';
		}
		:host > i.magic_button:before {
			content: 'magic_button';
		}
		:host > i.magic_exchange:before {
			content: 'magic_exchange';
		}
		:host > i.magic_tether:before {
			content: 'magic_tether';
		}
		:host > i.magnification_large:before {
			content: 'magnification_large';
		}
		:host > i.magnification_small:before {
			content: 'magnification_small';
		}
		:host > i.magnify_docked:before {
			content: 'magnify_docked';
		}
		:host > i.magnify_fullscreen:before {
			content: 'magnify_fullscreen';
		}
		:host > i.mail:before {
			content: 'mail';
		}
		:host > i.mail_lock:before {
			content: 'mail_lock';
		}
		:host > i.mail_outline:before {
			content: 'mail_outline';
		}
		:host > i.male:before {
			content: 'male';
		}
		:host > i.man:before {
			content: 'man';
		}
		:host > i.man_2:before {
			content: 'man_2';
		}
		:host > i.man_3:before {
			content: 'man_3';
		}
		:host > i.man_4:before {
			content: 'man_4';
		}
		:host > i.manage_accounts:before {
			content: 'manage_accounts';
		}
		:host > i.manage_history:before {
			content: 'manage_history';
		}
		:host > i.manage_search:before {
			content: 'manage_search';
		}
		:host > i.manga:before {
			content: 'manga';
		}
		:host > i.manufacturing:before {
			content: 'manufacturing';
		}
		:host > i.map:before {
			content: 'map';
		}
		:host > i.maps_home_work:before {
			content: 'maps_home_work';
		}
		:host > i.maps_ugc:before {
			content: 'maps_ugc';
		}
		:host > i.margin:before {
			content: 'margin';
		}
		:host > i.mark_as_unread:before {
			content: 'mark_as_unread';
		}
		:host > i.mark_chat_read:before {
			content: 'mark_chat_read';
		}
		:host > i.mark_chat_unread:before {
			content: 'mark_chat_unread';
		}
		:host > i.mark_email_read:before {
			content: 'mark_email_read';
		}
		:host > i.mark_email_unread:before {
			content: 'mark_email_unread';
		}
		:host > i.mark_unread_chat_alt:before {
			content: 'mark_unread_chat_alt';
		}
		:host > i.markdown:before {
			content: 'markdown';
		}
		:host > i.markdown_copy:before {
			content: 'markdown_copy';
		}
		:host > i.markdown_paste:before {
			content: 'markdown_paste';
		}
		:host > i.markunread:before {
			content: 'markunread';
		}
		:host > i.markunread_mailbox:before {
			content: 'markunread_mailbox';
		}
		:host > i.masked_transitions:before {
			content: 'masked_transitions';
		}
		:host > i.masks:before {
			content: 'masks';
		}
		:host > i.match_case:before {
			content: 'match_case';
		}
		:host > i.match_word:before {
			content: 'match_word';
		}
		:host > i.matter:before {
			content: 'matter';
		}
		:host > i.maximize:before {
			content: 'maximize';
		}
		:host > i.measuring_tape:before {
			content: 'measuring_tape';
		}
		:host > i.media_bluetooth_off:before {
			content: 'media_bluetooth_off';
		}
		:host > i.media_bluetooth_on:before {
			content: 'media_bluetooth_on';
		}
		:host > i.media_link:before {
			content: 'media_link';
		}
		:host > i.media_output:before {
			content: 'media_output';
		}
		:host > i.media_output_off:before {
			content: 'media_output_off';
		}
		:host > i.mediation:before {
			content: 'mediation';
		}
		:host > i.medical_information:before {
			content: 'medical_information';
		}
		:host > i.medical_mask:before {
			content: 'medical_mask';
		}
		:host > i.medical_services:before {
			content: 'medical_services';
		}
		:host > i.medication:before {
			content: 'medication';
		}
		:host > i.medication_liquid:before {
			content: 'medication_liquid';
		}
		:host > i.meeting_room:before {
			content: 'meeting_room';
		}
		:host > i.memory:before {
			content: 'memory';
		}
		:host > i.memory_alt:before {
			content: 'memory_alt';
		}
		:host > i.menstrual_health:before {
			content: 'menstrual_health';
		}
		:host > i.menu:before {
			content: 'menu';
		}
		:host > i.menu_book:before {
			content: 'menu_book';
		}
		:host > i.menu_open:before {
			content: 'menu_open';
		}
		:host > i.merge:before {
			content: 'merge';
		}
		:host > i.merge_type:before {
			content: 'merge_type';
		}
		:host > i.message:before {
			content: 'message';
		}
		:host > i.metabolism:before {
			content: 'metabolism';
		}
		:host > i.mfg_nest_yale_lock:before {
			content: 'mfg_nest_yale_lock';
		}
		:host > i.mic:before {
			content: 'mic';
		}
		:host > i.mic_double:before {
			content: 'mic_double';
		}
		:host > i.mic_external_off:before {
			content: 'mic_external_off';
		}
		:host > i.mic_external_on:before {
			content: 'mic_external_on';
		}
		:host > i.mic_none:before {
			content: 'mic_none';
		}
		:host > i.mic_off:before {
			content: 'mic_off';
		}
		:host > i.microbiology:before {
			content: 'microbiology';
		}
		:host > i.microwave:before {
			content: 'microwave';
		}
		:host > i.microwave_gen:before {
			content: 'microwave_gen';
		}
		:host > i.military_tech:before {
			content: 'military_tech';
		}
		:host > i.mimo:before {
			content: 'mimo';
		}
		:host > i.mimo_disconnect:before {
			content: 'mimo_disconnect';
		}
		:host > i.mindfulness:before {
			content: 'mindfulness';
		}
		:host > i.minimize:before {
			content: 'minimize';
		}
		:host > i.minor_crash:before {
			content: 'minor_crash';
		}
		:host > i.mintmark:before {
			content: 'mintmark';
		}
		:host > i.missed_video_call:before {
			content: 'missed_video_call';
		}
		:host > i.missed_video_call_filled:before {
			content: 'missed_video_call_filled';
		}
		:host > i.missing_controller:before {
			content: 'missing_controller';
		}
		:host > i.mist:before {
			content: 'mist';
		}
		:host > i.mitre:before {
			content: 'mitre';
		}
		:host > i.mixture_med:before {
			content: 'mixture_med';
		}
		:host > i.mms:before {
			content: 'mms';
		}
		:host > i.mobile_friendly:before {
			content: 'mobile_friendly';
		}
		:host > i.mobile_off:before {
			content: 'mobile_off';
		}
		:host > i.mobile_screen_share:before {
			content: 'mobile_screen_share';
		}
		:host > i.mobiledata_off:before {
			content: 'mobiledata_off';
		}
		:host > i.mode:before {
			content: 'mode';
		}
		:host > i.mode_comment:before {
			content: 'mode_comment';
		}
		:host > i.mode_cool:before {
			content: 'mode_cool';
		}
		:host > i.mode_cool_off:before {
			content: 'mode_cool_off';
		}
		:host > i.mode_dual:before {
			content: 'mode_dual';
		}
		:host > i.mode_edit:before {
			content: 'mode_edit';
		}
		:host > i.mode_edit_outline:before {
			content: 'mode_edit_outline';
		}
		:host > i.mode_fan:before {
			content: 'mode_fan';
		}
		:host > i.mode_fan_off:before {
			content: 'mode_fan_off';
		}
		:host > i.mode_heat:before {
			content: 'mode_heat';
		}
		:host > i.mode_heat_cool:before {
			content: 'mode_heat_cool';
		}
		:host > i.mode_heat_off:before {
			content: 'mode_heat_off';
		}
		:host > i.mode_night:before {
			content: 'mode_night';
		}
		:host > i.mode_of_travel:before {
			content: 'mode_of_travel';
		}
		:host > i.mode_off_on:before {
			content: 'mode_off_on';
		}
		:host > i.mode_standby:before {
			content: 'mode_standby';
		}
		:host > i.model_training:before {
			content: 'model_training';
		}
		:host > i.monetization_on:before {
			content: 'monetization_on';
		}
		:host > i.money:before {
			content: 'money';
		}
		:host > i.money_off:before {
			content: 'money_off';
		}
		:host > i.money_off_csred:before {
			content: 'money_off_csred';
		}
		:host > i.monitor:before {
			content: 'monitor';
		}
		:host > i.monitor_heart:before {
			content: 'monitor_heart';
		}
		:host > i.monitor_weight:before {
			content: 'monitor_weight';
		}
		:host > i.monitor_weight_gain:before {
			content: 'monitor_weight_gain';
		}
		:host > i.monitor_weight_loss:before {
			content: 'monitor_weight_loss';
		}
		:host > i.monitoring:before {
			content: 'monitoring';
		}
		:host > i.monochrome_photos:before {
			content: 'monochrome_photos';
		}
		:host > i.mood:before {
			content: 'mood';
		}
		:host > i.mood_bad:before {
			content: 'mood_bad';
		}
		:host > i.mop:before {
			content: 'mop';
		}
		:host > i.more:before {
			content: 'more';
		}
		:host > i.more_down:before {
			content: 'more_down';
		}
		:host > i.more_horiz:before {
			content: 'more_horiz';
		}
		:host > i.more_time:before {
			content: 'more_time';
		}
		:host > i.more_up:before {
			content: 'more_up';
		}
		:host > i.more_vert:before {
			content: 'more_vert';
		}
		:host > i.mosque:before {
			content: 'mosque';
		}
		:host > i.motion_blur:before {
			content: 'motion_blur';
		}
		:host > i.motion_mode:before {
			content: 'motion_mode';
		}
		:host > i.motion_photos_auto:before {
			content: 'motion_photos_auto';
		}
		:host > i.motion_photos_off:before {
			content: 'motion_photos_off';
		}
		:host > i.motion_photos_on:before {
			content: 'motion_photos_on';
		}
		:host > i.motion_photos_pause:before {
			content: 'motion_photos_pause';
		}
		:host > i.motion_photos_paused:before {
			content: 'motion_photos_paused';
		}
		:host > i.motion_sensor_active:before {
			content: 'motion_sensor_active';
		}
		:host > i.motion_sensor_alert:before {
			content: 'motion_sensor_alert';
		}
		:host > i.motion_sensor_idle:before {
			content: 'motion_sensor_idle';
		}
		:host > i.motion_sensor_urgent:before {
			content: 'motion_sensor_urgent';
		}
		:host > i.motorcycle:before {
			content: 'motorcycle';
		}
		:host > i.mountain_flag:before {
			content: 'mountain_flag';
		}
		:host > i.mouse:before {
			content: 'mouse';
		}
		:host > i.move:before {
			content: 'move';
		}
		:host > i.move_down:before {
			content: 'move_down';
		}
		:host > i.move_group:before {
			content: 'move_group';
		}
		:host > i.move_item:before {
			content: 'move_item';
		}
		:host > i.move_location:before {
			content: 'move_location';
		}
		:host > i.move_selection_down:before {
			content: 'move_selection_down';
		}
		:host > i.move_selection_left:before {
			content: 'move_selection_left';
		}
		:host > i.move_selection_right:before {
			content: 'move_selection_right';
		}
		:host > i.move_selection_up:before {
			content: 'move_selection_up';
		}
		:host > i.move_to_inbox:before {
			content: 'move_to_inbox';
		}
		:host > i.move_up:before {
			content: 'move_up';
		}
		:host > i.moved_location:before {
			content: 'moved_location';
		}
		:host > i.movie:before {
			content: 'movie';
		}
		:host > i.movie_creation:before {
			content: 'movie_creation';
		}
		:host > i.movie_edit:before {
			content: 'movie_edit';
		}
		:host > i.movie_filter:before {
			content: 'movie_filter';
		}
		:host > i.movie_info:before {
			content: 'movie_info';
		}
		:host > i.moving:before {
			content: 'moving';
		}
		:host > i.moving_beds:before {
			content: 'moving_beds';
		}
		:host > i.moving_ministry:before {
			content: 'moving_ministry';
		}
		:host > i.mp:before {
			content: 'mp';
		}
		:host > i.multicooker:before {
			content: 'multicooker';
		}
		:host > i.multiline_chart:before {
			content: 'multiline_chart';
		}
		:host > i.multiple_stop:before {
			content: 'multiple_stop';
		}
		:host > i.museum:before {
			content: 'museum';
		}
		:host > i.music_cast:before {
			content: 'music_cast';
		}
		:host > i.music_note:before {
			content: 'music_note';
		}
		:host > i.music_off:before {
			content: 'music_off';
		}
		:host > i.music_video:before {
			content: 'music_video';
		}
		:host > i.my_location:before {
			content: 'my_location';
		}
		:host > i.mystery:before {
			content: 'mystery';
		}
		:host > i.nat:before {
			content: 'nat';
		}
		:host > i.nature:before {
			content: 'nature';
		}
		:host > i.nature_people:before {
			content: 'nature_people';
		}
		:host > i.navigate_before:before {
			content: 'navigate_before';
		}
		:host > i.navigate_next:before {
			content: 'navigate_next';
		}
		:host > i.navigation:before {
			content: 'navigation';
		}
		:host > i.near_me:before {
			content: 'near_me';
		}
		:host > i.near_me_disabled:before {
			content: 'near_me_disabled';
		}
		:host > i.nearby:before {
			content: 'nearby';
		}
		:host > i.nearby_error:before {
			content: 'nearby_error';
		}
		:host > i.nearby_off:before {
			content: 'nearby_off';
		}
		:host > i.nephrology:before {
			content: 'nephrology';
		}
		:host > i.nest_audio:before {
			content: 'nest_audio';
		}
		:host > i.nest_cam_floodlight:before {
			content: 'nest_cam_floodlight';
		}
		:host > i.nest_cam_indoor:before {
			content: 'nest_cam_indoor';
		}
		:host > i.nest_cam_iq:before {
			content: 'nest_cam_iq';
		}
		:host > i.nest_cam_iq_outdoor:before {
			content: 'nest_cam_iq_outdoor';
		}
		:host > i.nest_cam_magnet_mount:before {
			content: 'nest_cam_magnet_mount';
		}
		:host > i.nest_cam_outdoor:before {
			content: 'nest_cam_outdoor';
		}
		:host > i.nest_cam_stand:before {
			content: 'nest_cam_stand';
		}
		:host > i.nest_cam_wall_mount:before {
			content: 'nest_cam_wall_mount';
		}
		:host > i.nest_cam_wired_stand:before {
			content: 'nest_cam_wired_stand';
		}
		:host > i.nest_clock_farsight_analog:before {
			content: 'nest_clock_farsight_analog';
		}
		:host > i.nest_clock_farsight_digital:before {
			content: 'nest_clock_farsight_digital';
		}
		:host > i.nest_connect:before {
			content: 'nest_connect';
		}
		:host > i.nest_detect:before {
			content: 'nest_detect';
		}
		:host > i.nest_display:before {
			content: 'nest_display';
		}
		:host > i.nest_display_max:before {
			content: 'nest_display_max';
		}
		:host > i.nest_doorbell_visitor:before {
			content: 'nest_doorbell_visitor';
		}
		:host > i.nest_eco_leaf:before {
			content: 'nest_eco_leaf';
		}
		:host > i.nest_farsight_weather:before {
			content: 'nest_farsight_weather';
		}
		:host > i.nest_found_savings:before {
			content: 'nest_found_savings';
		}
		:host > i.nest_gale_wifi:before {
			content: 'nest_gale_wifi';
		}
		:host > i.nest_heat_link_e:before {
			content: 'nest_heat_link_e';
		}
		:host > i.nest_heat_link_gen_3:before {
			content: 'nest_heat_link_gen_3';
		}
		:host > i.nest_hello_doorbell:before {
			content: 'nest_hello_doorbell';
		}
		:host > i.nest_locator_tag:before {
			content: 'nest_locator_tag';
		}
		:host > i.nest_mini:before {
			content: 'nest_mini';
		}
		:host > i.nest_multi_room:before {
			content: 'nest_multi_room';
		}
		:host > i.nest_protect:before {
			content: 'nest_protect';
		}
		:host > i.nest_remote:before {
			content: 'nest_remote';
		}
		:host > i.nest_remote_comfort_sensor:before {
			content: 'nest_remote_comfort_sensor';
		}
		:host > i.nest_secure_alarm:before {
			content: 'nest_secure_alarm';
		}
		:host > i.nest_sunblock:before {
			content: 'nest_sunblock';
		}
		:host > i.nest_tag:before {
			content: 'nest_tag';
		}
		:host > i.nest_thermostat:before {
			content: 'nest_thermostat';
		}
		:host > i.nest_thermostat_e_eu:before {
			content: 'nest_thermostat_e_eu';
		}
		:host > i.nest_thermostat_gen_3:before {
			content: 'nest_thermostat_gen_3';
		}
		:host > i.nest_thermostat_sensor:before {
			content: 'nest_thermostat_sensor';
		}
		:host > i.nest_thermostat_sensor_eu:before {
			content: 'nest_thermostat_sensor_eu';
		}
		:host > i.nest_thermostat_zirconium_eu:before {
			content: 'nest_thermostat_zirconium_eu';
		}
		:host > i.nest_true_radiant:before {
			content: 'nest_true_radiant';
		}
		:host > i.nest_wake_on_approach:before {
			content: 'nest_wake_on_approach';
		}
		:host > i.nest_wake_on_press:before {
			content: 'nest_wake_on_press';
		}
		:host > i.nest_wifi_gale:before {
			content: 'nest_wifi_gale';
		}
		:host > i.nest_wifi_mistral:before {
			content: 'nest_wifi_mistral';
		}
		:host > i.nest_wifi_point:before {
			content: 'nest_wifi_point';
		}
		:host > i.nest_wifi_point_vento:before {
			content: 'nest_wifi_point_vento';
		}
		:host > i.nest_wifi_pro:before {
			content: 'nest_wifi_pro';
		}
		:host > i.nest_wifi_pro_2:before {
			content: 'nest_wifi_pro_2';
		}
		:host > i.nest_wifi_router:before {
			content: 'nest_wifi_router';
		}
		:host > i.network_cell:before {
			content: 'network_cell';
		}
		:host > i.network_check:before {
			content: 'network_check';
		}
		:host > i.network_intelligence_history:before {
			content: 'network_intelligence_history';
		}
		:host > i.network_intelligence_update:before {
			content: 'network_intelligence_update';
		}
		:host > i.network_locked:before {
			content: 'network_locked';
		}
		:host > i.network_manage:before {
			content: 'network_manage';
		}
		:host > i.network_node:before {
			content: 'network_node';
		}
		:host > i.network_ping:before {
			content: 'network_ping';
		}
		:host > i.network_wifi:before {
			content: 'network_wifi';
		}
		:host > i.network_wifi_1_bar:before {
			content: 'network_wifi_1_bar';
		}
		:host > i.network_wifi_1_bar_locked:before {
			content: 'network_wifi_1_bar_locked';
		}
		:host > i.network_wifi_2_bar:before {
			content: 'network_wifi_2_bar';
		}
		:host > i.network_wifi_2_bar_locked:before {
			content: 'network_wifi_2_bar_locked';
		}
		:host > i.network_wifi_3_bar:before {
			content: 'network_wifi_3_bar';
		}
		:host > i.network_wifi_3_bar_locked:before {
			content: 'network_wifi_3_bar_locked';
		}
		:host > i.network_wifi_locked:before {
			content: 'network_wifi_locked';
		}
		:host > i.neurology:before {
			content: 'neurology';
		}
		:host > i.new_label:before {
			content: 'new_label';
		}
		:host > i.new_releases:before {
			content: 'new_releases';
		}
		:host > i.new_window:before {
			content: 'new_window';
		}
		:host > i.news:before {
			content: 'news';
		}
		:host > i.newsmode:before {
			content: 'newsmode';
		}
		:host > i.newspaper:before {
			content: 'newspaper';
		}
		:host > i.newsstand:before {
			content: 'newsstand';
		}
		:host > i.next_plan:before {
			content: 'next_plan';
		}
		:host > i.next_week:before {
			content: 'next_week';
		}
		:host > i.nfc:before {
			content: 'nfc';
		}
		:host > i.night_shelter:before {
			content: 'night_shelter';
		}
		:host > i.night_sight_auto:before {
			content: 'night_sight_auto';
		}
		:host > i.night_sight_auto_off:before {
			content: 'night_sight_auto_off';
		}
		:host > i.night_sight_max:before {
			content: 'night_sight_max';
		}
		:host > i.nightlife:before {
			content: 'nightlife';
		}
		:host > i.nightlight:before {
			content: 'nightlight';
		}
		:host > i.nightlight_round:before {
			content: 'nightlight_round';
		}
		:host > i.nights_stay:before {
			content: 'nights_stay';
		}
		:host > i.no_accounts:before {
			content: 'no_accounts';
		}
		:host > i.no_adult_content:before {
			content: 'no_adult_content';
		}
		:host > i.no_backpack:before {
			content: 'no_backpack';
		}
		:host > i.no_crash:before {
			content: 'no_crash';
		}
		:host > i.no_drinks:before {
			content: 'no_drinks';
		}
		:host > i.no_encryption:before {
			content: 'no_encryption';
		}
		:host > i.no_encryption_gmailerrorred:before {
			content: 'no_encryption_gmailerrorred';
		}
		:host > i.no_flash:before {
			content: 'no_flash';
		}
		:host > i.no_food:before {
			content: 'no_food';
		}
		:host > i.no_luggage:before {
			content: 'no_luggage';
		}
		:host > i.no_meals:before {
			content: 'no_meals';
		}
		:host > i.no_meeting_room:before {
			content: 'no_meeting_room';
		}
		:host > i.no_photography:before {
			content: 'no_photography';
		}
		:host > i.no_sim:before {
			content: 'no_sim';
		}
		:host > i.no_sound:before {
			content: 'no_sound';
		}
		:host > i.no_stroller:before {
			content: 'no_stroller';
		}
		:host > i.no_transfer:before {
			content: 'no_transfer';
		}
		:host > i.noise_aware:before {
			content: 'noise_aware';
		}
		:host > i.noise_control_off:before {
			content: 'noise_control_off';
		}
		:host > i.noise_control_on:before {
			content: 'noise_control_on';
		}
		:host > i.nordic_walking:before {
			content: 'nordic_walking';
		}
		:host > i.north:before {
			content: 'north';
		}
		:host > i.north_east:before {
			content: 'north_east';
		}
		:host > i.north_west:before {
			content: 'north_west';
		}
		:host > i.not_accessible:before {
			content: 'not_accessible';
		}
		:host > i.not_accessible_forward:before {
			content: 'not_accessible_forward';
		}
		:host > i.not_interested:before {
			content: 'not_interested';
		}
		:host > i.not_listed_location:before {
			content: 'not_listed_location';
		}
		:host > i.not_started:before {
			content: 'not_started';
		}
		:host > i.note:before {
			content: 'note';
		}
		:host > i.note_add:before {
			content: 'note_add';
		}
		:host > i.note_alt:before {
			content: 'note_alt';
		}
		:host > i.note_stack:before {
			content: 'note_stack';
		}
		:host > i.note_stack_add:before {
			content: 'note_stack_add';
		}
		:host > i.notes:before {
			content: 'notes';
		}
		:host > i.notification_add:before {
			content: 'notification_add';
		}
		:host > i.notification_important:before {
			content: 'notification_important';
		}
		:host > i.notification_multiple:before {
			content: 'notification_multiple';
		}
		:host > i.notifications:before {
			content: 'notifications';
		}
		:host > i.notifications_active:before {
			content: 'notifications_active';
		}
		:host > i.notifications_none:before {
			content: 'notifications_none';
		}
		:host > i.notifications_off:before {
			content: 'notifications_off';
		}
		:host > i.notifications_paused:before {
			content: 'notifications_paused';
		}
		:host > i.notifications_unread:before {
			content: 'notifications_unread';
		}
		:host > i.numbers:before {
			content: 'numbers';
		}
		:host > i.nutrition:before {
			content: 'nutrition';
		}
		:host > i.ods:before {
			content: 'ods';
		}
		:host > i.odt:before {
			content: 'odt';
		}
		:host > i.offline_bolt:before {
			content: 'offline_bolt';
		}
		:host > i.offline_pin:before {
			content: 'offline_pin';
		}
		:host > i.offline_share:before {
			content: 'offline_share';
		}
		:host > i.oil_barrel:before {
			content: 'oil_barrel';
		}
		:host > i.on_device_training:before {
			content: 'on_device_training';
		}
		:host > i.on_hub_device:before {
			content: 'on_hub_device';
		}
		:host > i.oncology:before {
			content: 'oncology';
		}
		:host > i.ondemand_video:before {
			content: 'ondemand_video';
		}
		:host > i.online_prediction:before {
			content: 'online_prediction';
		}
		:host > i.onsen:before {
			content: 'onsen';
		}
		:host > i.opacity:before {
			content: 'opacity';
		}
		:host > i.open_in_browser:before {
			content: 'open_in_browser';
		}
		:host > i.open_in_full:before {
			content: 'open_in_full';
		}
		:host > i.open_in_new:before {
			content: 'open_in_new';
		}
		:host > i.open_in_new_down:before {
			content: 'open_in_new_down';
		}
		:host > i.open_in_new_off:before {
			content: 'open_in_new_off';
		}
		:host > i.open_in_phone:before {
			content: 'open_in_phone';
		}
		:host > i.open_jam:before {
			content: 'open_jam';
		}
		:host > i.open_with:before {
			content: 'open_with';
		}
		:host > i.ophthalmology:before {
			content: 'ophthalmology';
		}
		:host > i.oral_disease:before {
			content: 'oral_disease';
		}
		:host > i.order_approve:before {
			content: 'order_approve';
		}
		:host > i.order_play:before {
			content: 'order_play';
		}
		:host > i.orders:before {
			content: 'orders';
		}
		:host > i.orthopedics:before {
			content: 'orthopedics';
		}
		:host > i.other_admission:before {
			content: 'other_admission';
		}
		:host > i.other_houses:before {
			content: 'other_houses';
		}
		:host > i.outbound:before {
			content: 'outbound';
		}
		:host > i.outbox:before {
			content: 'outbox';
		}
		:host > i.outbox_alt:before {
			content: 'outbox_alt';
		}
		:host > i.outdoor_garden:before {
			content: 'outdoor_garden';
		}
		:host > i.outdoor_grill:before {
			content: 'outdoor_grill';
		}
		:host > i.outgoing_mail:before {
			content: 'outgoing_mail';
		}
		:host > i.outlet:before {
			content: 'outlet';
		}
		:host > i.outlined_flag:before {
			content: 'outlined_flag';
		}
		:host > i.outpatient:before {
			content: 'outpatient';
		}
		:host > i.outpatient_med:before {
			content: 'outpatient_med';
		}
		:host > i.output:before {
			content: 'output';
		}
		:host > i.output_circle:before {
			content: 'output_circle';
		}
		:host > i.oven:before {
			content: 'oven';
		}
		:host > i.oven_gen:before {
			content: 'oven_gen';
		}
		:host > i.overview:before {
			content: 'overview';
		}
		:host > i.overview_key:before {
			content: 'overview_key';
		}
		:host > i.oxygen_saturation:before {
			content: 'oxygen_saturation';
		}
		:host > i.p2p:before {
			content: 'p2p';
		}
		:host > i.pace:before {
			content: 'pace';
		}
		:host > i.pacemaker:before {
			content: 'pacemaker';
		}
		:host > i.package:before {
			content: 'package';
		}
		:host > i.package_2:before {
			content: 'package_2';
		}
		:host > i.padding:before {
			content: 'padding';
		}
		:host > i.page_control:before {
			content: 'page_control';
		}
		:host > i.page_info:before {
			content: 'page_info';
		}
		:host > i.pageless:before {
			content: 'pageless';
		}
		:host > i.pages:before {
			content: 'pages';
		}
		:host > i.pageview:before {
			content: 'pageview';
		}
		:host > i.paid:before {
			content: 'paid';
		}
		:host > i.palette:before {
			content: 'palette';
		}
		:host > i.pallet:before {
			content: 'pallet';
		}
		:host > i.pan_tool:before {
			content: 'pan_tool';
		}
		:host > i.pan_tool_alt:before {
			content: 'pan_tool_alt';
		}
		:host > i.pan_zoom:before {
			content: 'pan_zoom';
		}
		:host > i.panorama:before {
			content: 'panorama';
		}
		:host > i.panorama_fish_eye:before {
			content: 'panorama_fish_eye';
		}
		:host > i.panorama_horizontal:before {
			content: 'panorama_horizontal';
		}
		:host > i.panorama_photosphere:before {
			content: 'panorama_photosphere';
		}
		:host > i.panorama_vertical:before {
			content: 'panorama_vertical';
		}
		:host > i.panorama_wide_angle:before {
			content: 'panorama_wide_angle';
		}
		:host > i.paragliding:before {
			content: 'paragliding';
		}
		:host > i.park:before {
			content: 'park';
		}
		:host > i.partly_cloudy_day:before {
			content: 'partly_cloudy_day';
		}
		:host > i.partly_cloudy_night:before {
			content: 'partly_cloudy_night';
		}
		:host > i.partner_exchange:before {
			content: 'partner_exchange';
		}
		:host > i.partner_reports:before {
			content: 'partner_reports';
		}
		:host > i.party_mode:before {
			content: 'party_mode';
		}
		:host > i.passkey:before {
			content: 'passkey';
		}
		:host > i.password:before {
			content: 'password';
		}
		:host > i.patient_list:before {
			content: 'patient_list';
		}
		:host > i.pattern:before {
			content: 'pattern';
		}
		:host > i.pause:before {
			content: 'pause';
		}
		:host > i.pause_circle:before {
			content: 'pause_circle';
		}
		:host > i.pause_circle_filled:before {
			content: 'pause_circle_filled';
		}
		:host > i.pause_circle_outline:before {
			content: 'pause_circle_outline';
		}
		:host > i.pause_presentation:before {
			content: 'pause_presentation';
		}
		:host > i.payment:before {
			content: 'payment';
		}
		:host > i.payments:before {
			content: 'payments';
		}
		:host > i.pedal_bike:before {
			content: 'pedal_bike';
		}
		:host > i.pediatrics:before {
			content: 'pediatrics';
		}
		:host > i.pen_size_1:before {
			content: 'pen_size_1';
		}
		:host > i.pen_size_2:before {
			content: 'pen_size_2';
		}
		:host > i.pen_size_3:before {
			content: 'pen_size_3';
		}
		:host > i.pen_size_4:before {
			content: 'pen_size_4';
		}
		:host > i.pen_size_5:before {
			content: 'pen_size_5';
		}
		:host > i.pending:before {
			content: 'pending';
		}
		:host > i.pending_actions:before {
			content: 'pending_actions';
		}
		:host > i.pentagon:before {
			content: 'pentagon';
		}
		:host > i.people:before {
			content: 'people';
		}
		:host > i.people_alt:before {
			content: 'people_alt';
		}
		:host > i.people_outline:before {
			content: 'people_outline';
		}
		:host > i.percent:before {
			content: 'percent';
		}
		:host > i.performance_max:before {
			content: 'performance_max';
		}
		:host > i.pergola:before {
			content: 'pergola';
		}
		:host > i.perm_camera_mic:before {
			content: 'perm_camera_mic';
		}
		:host > i.perm_contact_calendar:before {
			content: 'perm_contact_calendar';
		}
		:host > i.perm_data_setting:before {
			content: 'perm_data_setting';
		}
		:host > i.perm_device_information:before {
			content: 'perm_device_information';
		}
		:host > i.perm_identity:before {
			content: 'perm_identity';
		}
		:host > i.perm_media:before {
			content: 'perm_media';
		}
		:host > i.perm_phone_msg:before {
			content: 'perm_phone_msg';
		}
		:host > i.perm_scan_wifi:before {
			content: 'perm_scan_wifi';
		}
		:host > i.person:before {
			content: 'person';
		}
		:host > i.person_2:before {
			content: 'person_2';
		}
		:host > i.person_3:before {
			content: 'person_3';
		}
		:host > i.person_4:before {
			content: 'person_4';
		}
		:host > i.person_add:before {
			content: 'person_add';
		}
		:host > i.person_add_alt:before {
			content: 'person_add_alt';
		}
		:host > i.person_add_disabled:before {
			content: 'person_add_disabled';
		}
		:host > i.person_alert:before {
			content: 'person_alert';
		}
		:host > i.person_apron:before {
			content: 'person_apron';
		}
		:host > i.person_book:before {
			content: 'person_book';
		}
		:host > i.person_cancel:before {
			content: 'person_cancel';
		}
		:host > i.person_celebrate:before {
			content: 'person_celebrate';
		}
		:host > i.person_check:before {
			content: 'person_check';
		}
		:host > i.person_edit:before {
			content: 'person_edit';
		}
		:host > i.person_filled:before {
			content: 'person_filled';
		}
		:host > i.person_off:before {
			content: 'person_off';
		}
		:host > i.person_outline:before {
			content: 'person_outline';
		}
		:host > i.person_pin:before {
			content: 'person_pin';
		}
		:host > i.person_pin_circle:before {
			content: 'person_pin_circle';
		}
		:host > i.person_play:before {
			content: 'person_play';
		}
		:host > i.person_raised_hand:before {
			content: 'person_raised_hand';
		}
		:host > i.person_remove:before {
			content: 'person_remove';
		}
		:host > i.person_search:before {
			content: 'person_search';
		}
		:host > i.personal_bag:before {
			content: 'personal_bag';
		}
		:host > i.personal_bag_off:before {
			content: 'personal_bag_off';
		}
		:host > i.personal_bag_question:before {
			content: 'personal_bag_question';
		}
		:host > i.personal_injury:before {
			content: 'personal_injury';
		}
		:host > i.personal_places:before {
			content: 'personal_places';
		}
		:host > i.personal_video:before {
			content: 'personal_video';
		}
		:host > i.pest_control:before {
			content: 'pest_control';
		}
		:host > i.pest_control_rodent:before {
			content: 'pest_control_rodent';
		}
		:host > i.pet_supplies:before {
			content: 'pet_supplies';
		}
		:host > i.pets:before {
			content: 'pets';
		}
		:host > i.phishing:before {
			content: 'phishing';
		}
		:host > i.phone:before {
			content: 'phone';
		}
		:host > i.phone_alt:before {
			content: 'phone_alt';
		}
		:host > i.phone_android:before {
			content: 'phone_android';
		}
		:host > i.phone_bluetooth_speaker:before {
			content: 'phone_bluetooth_speaker';
		}
		:host > i.phone_callback:before {
			content: 'phone_callback';
		}
		:host > i.phone_disabled:before {
			content: 'phone_disabled';
		}
		:host > i.phone_enabled:before {
			content: 'phone_enabled';
		}
		:host > i.phone_forwarded:before {
			content: 'phone_forwarded';
		}
		:host > i.phone_in_talk:before {
			content: 'phone_in_talk';
		}
		:host > i.phone_iphone:before {
			content: 'phone_iphone';
		}
		:host > i.phone_locked:before {
			content: 'phone_locked';
		}
		:host > i.phone_missed:before {
			content: 'phone_missed';
		}
		:host > i.phone_paused:before {
			content: 'phone_paused';
		}
		:host > i.phonelink:before {
			content: 'phonelink';
		}
		:host > i.phonelink_erase:before {
			content: 'phonelink_erase';
		}
		:host > i.phonelink_lock:before {
			content: 'phonelink_lock';
		}
		:host > i.phonelink_off:before {
			content: 'phonelink_off';
		}
		:host > i.phonelink_ring:before {
			content: 'phonelink_ring';
		}
		:host > i.phonelink_ring_off:before {
			content: 'phonelink_ring_off';
		}
		:host > i.phonelink_setup:before {
			content: 'phonelink_setup';
		}
		:host > i.photo:before {
			content: 'photo';
		}
		:host > i.photo_album:before {
			content: 'photo_album';
		}
		:host > i.photo_auto_merge:before {
			content: 'photo_auto_merge';
		}
		:host > i.photo_camera:before {
			content: 'photo_camera';
		}
		:host > i.photo_camera_back:before {
			content: 'photo_camera_back';
		}
		:host > i.photo_camera_front:before {
			content: 'photo_camera_front';
		}
		:host > i.photo_filter:before {
			content: 'photo_filter';
		}
		:host > i.photo_frame:before {
			content: 'photo_frame';
		}
		:host > i.photo_library:before {
			content: 'photo_library';
		}
		:host > i.photo_prints:before {
			content: 'photo_prints';
		}
		:host > i.photo_size_select_actual:before {
			content: 'photo_size_select_actual';
		}
		:host > i.photo_size_select_large:before {
			content: 'photo_size_select_large';
		}
		:host > i.photo_size_select_small:before {
			content: 'photo_size_select_small';
		}
		:host > i.php:before {
			content: 'php';
		}
		:host > i.physical_therapy:before {
			content: 'physical_therapy';
		}
		:host > i.piano:before {
			content: 'piano';
		}
		:host > i.piano_off:before {
			content: 'piano_off';
		}
		:host > i.picture_as_pdf:before {
			content: 'picture_as_pdf';
		}
		:host > i.picture_in_picture:before {
			content: 'picture_in_picture';
		}
		:host > i.picture_in_picture_alt:before {
			content: 'picture_in_picture_alt';
		}
		:host > i.picture_in_picture_center:before {
			content: 'picture_in_picture_center';
		}
		:host > i.picture_in_picture_large:before {
			content: 'picture_in_picture_large';
		}
		:host > i.picture_in_picture_medium:before {
			content: 'picture_in_picture_medium';
		}
		:host > i.picture_in_picture_mobile:before {
			content: 'picture_in_picture_mobile';
		}
		:host > i.picture_in_picture_off:before {
			content: 'picture_in_picture_off';
		}
		:host > i.picture_in_picture_small:before {
			content: 'picture_in_picture_small';
		}
		:host > i.pie_chart:before {
			content: 'pie_chart';
		}
		:host > i.pie_chart_filled:before {
			content: 'pie_chart_filled';
		}
		:host > i.pie_chart_outline:before {
			content: 'pie_chart_outline';
		}
		:host > i.pie_chart_outlined:before {
			content: 'pie_chart_outlined';
		}
		:host > i.pill:before {
			content: 'pill';
		}
		:host > i.pill_off:before {
			content: 'pill_off';
		}
		:host > i.pin:before {
			content: 'pin';
		}
		:host > i.pin_drop:before {
			content: 'pin_drop';
		}
		:host > i.pin_end:before {
			content: 'pin_end';
		}
		:host > i.pin_invoke:before {
			content: 'pin_invoke';
		}
		:host > i.pinch:before {
			content: 'pinch';
		}
		:host > i.pinch_zoom_in:before {
			content: 'pinch_zoom_in';
		}
		:host > i.pinch_zoom_out:before {
			content: 'pinch_zoom_out';
		}
		:host > i.pip:before {
			content: 'pip';
		}
		:host > i.pip_exit:before {
			content: 'pip_exit';
		}
		:host > i.pivot_table_chart:before {
			content: 'pivot_table_chart';
		}
		:host > i.place:before {
			content: 'place';
		}
		:host > i.place_item:before {
			content: 'place_item';
		}
		:host > i.plagiarism:before {
			content: 'plagiarism';
		}
		:host > i.planner_banner_ad_pt:before {
			content: 'planner_banner_ad_pt';
		}
		:host > i.planner_review:before {
			content: 'planner_review';
		}
		:host > i.play_arrow:before {
			content: 'play_arrow';
		}
		:host > i.play_circle:before {
			content: 'play_circle';
		}
		:host > i.play_disabled:before {
			content: 'play_disabled';
		}
		:host > i.play_for_work:before {
			content: 'play_for_work';
		}
		:host > i.play_lesson:before {
			content: 'play_lesson';
		}
		:host > i.play_music:before {
			content: 'play_music';
		}
		:host > i.play_pause:before {
			content: 'play_pause';
		}
		:host > i.play_shapes:before {
			content: 'play_shapes';
		}
		:host > i.playing_cards:before {
			content: 'playing_cards';
		}
		:host > i.playlist_add:before {
			content: 'playlist_add';
		}
		:host > i.playlist_add_check:before {
			content: 'playlist_add_check';
		}
		:host > i.playlist_add_check_circle:before {
			content: 'playlist_add_check_circle';
		}
		:host > i.playlist_add_circle:before {
			content: 'playlist_add_circle';
		}
		:host > i.playlist_play:before {
			content: 'playlist_play';
		}
		:host > i.playlist_remove:before {
			content: 'playlist_remove';
		}
		:host > i.plumbing:before {
			content: 'plumbing';
		}
		:host > i.plus_one:before {
			content: 'plus_one';
		}
		:host > i.podcasts:before {
			content: 'podcasts';
		}
		:host > i.podiatry:before {
			content: 'podiatry';
		}
		:host > i.podium:before {
			content: 'podium';
		}
		:host > i.point_of_sale:before {
			content: 'point_of_sale';
		}
		:host > i.point_scan:before {
			content: 'point_scan';
		}
		:host > i.policy:before {
			content: 'policy';
		}
		:host > i.poll:before {
			content: 'poll';
		}
		:host > i.polyline:before {
			content: 'polyline';
		}
		:host > i.polymer:before {
			content: 'polymer';
		}
		:host > i.pool:before {
			content: 'pool';
		}
		:host > i.portable_wifi_off:before {
			content: 'portable_wifi_off';
		}
		:host > i.portrait:before {
			content: 'portrait';
		}
		:host > i.position_bottom_left:before {
			content: 'position_bottom_left';
		}
		:host > i.position_bottom_right:before {
			content: 'position_bottom_right';
		}
		:host > i.position_top_right:before {
			content: 'position_top_right';
		}
		:host > i.post:before {
			content: 'post';
		}
		:host > i.post_add:before {
			content: 'post_add';
		}
		:host > i.potted_plant:before {
			content: 'potted_plant';
		}
		:host > i.power:before {
			content: 'power';
		}
		:host > i.power_input:before {
			content: 'power_input';
		}
		:host > i.power_off:before {
			content: 'power_off';
		}
		:host > i.power_rounded:before {
			content: 'power_rounded';
		}
		:host > i.power_settings_new:before {
			content: 'power_settings_new';
		}
		:host > i.prayer_times:before {
			content: 'prayer_times';
		}
		:host > i.precision_manufacturing:before {
			content: 'precision_manufacturing';
		}
		:host > i.pregnancy:before {
			content: 'pregnancy';
		}
		:host > i.pregnant_woman:before {
			content: 'pregnant_woman';
		}
		:host > i.preliminary:before {
			content: 'preliminary';
		}
		:host > i.prescriptions:before {
			content: 'prescriptions';
		}
		:host > i.present_to_all:before {
			content: 'present_to_all';
		}
		:host > i.preview:before {
			content: 'preview';
		}
		:host > i.preview_off:before {
			content: 'preview_off';
		}
		:host > i.price_change:before {
			content: 'price_change';
		}
		:host > i.price_check:before {
			content: 'price_check';
		}
		:host > i.print:before {
			content: 'print';
		}
		:host > i.print_add:before {
			content: 'print_add';
		}
		:host > i.print_connect:before {
			content: 'print_connect';
		}
		:host > i.print_disabled:before {
			content: 'print_disabled';
		}
		:host > i.print_error:before {
			content: 'print_error';
		}
		:host > i.print_lock:before {
			content: 'print_lock';
		}
		:host > i.priority:before {
			content: 'priority';
		}
		:host > i.priority_high:before {
			content: 'priority_high';
		}
		:host > i.privacy:before {
			content: 'privacy';
		}
		:host > i.privacy_tip:before {
			content: 'privacy_tip';
		}
		:host > i.private_connectivity:before {
			content: 'private_connectivity';
		}
		:host > i.problem:before {
			content: 'problem';
		}
		:host > i.procedure:before {
			content: 'procedure';
		}
		:host > i.process_chart:before {
			content: 'process_chart';
		}
		:host > i.production_quantity_limits:before {
			content: 'production_quantity_limits';
		}
		:host > i.productivity:before {
			content: 'productivity';
		}
		:host > i.progress_activity:before {
			content: 'progress_activity';
		}
		:host > i.prompt_suggestion:before {
			content: 'prompt_suggestion';
		}
		:host > i.propane:before {
			content: 'propane';
		}
		:host > i.propane_tank:before {
			content: 'propane_tank';
		}
		:host > i.psychiatry:before {
			content: 'psychiatry';
		}
		:host > i.psychology:before {
			content: 'psychology';
		}
		:host > i.psychology_alt:before {
			content: 'psychology_alt';
		}
		:host > i.public:before {
			content: 'public';
		}
		:host > i.public_off:before {
			content: 'public_off';
		}
		:host > i.publish:before {
			content: 'publish';
		}
		:host > i.published_with_changes:before {
			content: 'published_with_changes';
		}
		:host > i.pulmonology:before {
			content: 'pulmonology';
		}
		:host > i.pulse_alert:before {
			content: 'pulse_alert';
		}
		:host > i.punch_clock:before {
			content: 'punch_clock';
		}
		:host > i.push_pin:before {
			content: 'push_pin';
		}
		:host > i.qr_code:before {
			content: 'qr_code';
		}
		:host > i.qr_code_2:before {
			content: 'qr_code_2';
		}
		:host > i.qr_code_2_add:before {
			content: 'qr_code_2_add';
		}
		:host > i.qr_code_scanner:before {
			content: 'qr_code_scanner';
		}
		:host > i.query_builder:before {
			content: 'query_builder';
		}
		:host > i.query_stats:before {
			content: 'query_stats';
		}
		:host > i.question_answer:before {
			content: 'question_answer';
		}
		:host > i.question_exchange:before {
			content: 'question_exchange';
		}
		:host > i.question_mark:before {
			content: 'question_mark';
		}
		:host > i.queue:before {
			content: 'queue';
		}
		:host > i.queue_music:before {
			content: 'queue_music';
		}
		:host > i.queue_play_next:before {
			content: 'queue_play_next';
		}
		:host > i.quick_phrases:before {
			content: 'quick_phrases';
		}
		:host > i.quick_reference:before {
			content: 'quick_reference';
		}
		:host > i.quick_reference_all:before {
			content: 'quick_reference_all';
		}
		:host > i.quick_reorder:before {
			content: 'quick_reorder';
		}
		:host > i.quickreply:before {
			content: 'quickreply';
		}
		:host > i.quiet_time:before {
			content: 'quiet_time';
		}
		:host > i.quiet_time_active:before {
			content: 'quiet_time_active';
		}
		:host > i.quiz:before {
			content: 'quiz';
		}
		:host > i.r_mobiledata:before {
			content: 'r_mobiledata';
		}
		:host > i.radar:before {
			content: 'radar';
		}
		:host > i.radio:before {
			content: 'radio';
		}
		:host > i.radio_button_checked:before {
			content: 'radio_button_checked';
		}
		:host > i.radio_button_partial:before {
			content: 'radio_button_partial';
		}
		:host > i.radio_button_unchecked:before {
			content: 'radio_button_unchecked';
		}
		:host > i.radiology:before {
			content: 'radiology';
		}
		:host > i.railway_alert:before {
			content: 'railway_alert';
		}
		:host > i.rainy:before {
			content: 'rainy';
		}
		:host > i.rainy_heavy:before {
			content: 'rainy_heavy';
		}
		:host > i.rainy_light:before {
			content: 'rainy_light';
		}
		:host > i.rainy_snow:before {
			content: 'rainy_snow';
		}
		:host > i.ramen_dining:before {
			content: 'ramen_dining';
		}
		:host > i.ramp_left:before {
			content: 'ramp_left';
		}
		:host > i.ramp_right:before {
			content: 'ramp_right';
		}
		:host > i.range_hood:before {
			content: 'range_hood';
		}
		:host > i.rate_review:before {
			content: 'rate_review';
		}
		:host > i.raven:before {
			content: 'raven';
		}
		:host > i.raw_off:before {
			content: 'raw_off';
		}
		:host > i.raw_on:before {
			content: 'raw_on';
		}
		:host > i.read_more:before {
			content: 'read_more';
		}
		:host > i.readiness_score:before {
			content: 'readiness_score';
		}
		:host > i.real_estate_agent:before {
			content: 'real_estate_agent';
		}
		:host > i.rear_camera:before {
			content: 'rear_camera';
		}
		:host > i.rebase:before {
			content: 'rebase';
		}
		:host > i.rebase_edit:before {
			content: 'rebase_edit';
		}
		:host > i.receipt:before {
			content: 'receipt';
		}
		:host > i.receipt_long:before {
			content: 'receipt_long';
		}
		:host > i.recent_actors:before {
			content: 'recent_actors';
		}
		:host > i.recent_patient:before {
			content: 'recent_patient';
		}
		:host > i.recommend:before {
			content: 'recommend';
		}
		:host > i.record_voice_over:before {
			content: 'record_voice_over';
		}
		:host > i.rectangle:before {
			content: 'rectangle';
		}
		:host > i.recycling:before {
			content: 'recycling';
		}
		:host > i.redeem:before {
			content: 'redeem';
		}
		:host > i.redo:before {
			content: 'redo';
		}
		:host > i.reduce_capacity:before {
			content: 'reduce_capacity';
		}
		:host > i.refresh:before {
			content: 'refresh';
		}
		:host > i.regular_expression:before {
			content: 'regular_expression';
		}
		:host > i.relax:before {
			content: 'relax';
		}
		:host > i.release_alert:before {
			content: 'release_alert';
		}
		:host > i.remember_me:before {
			content: 'remember_me';
		}
		:host > i.reminder:before {
			content: 'reminder';
		}
		:host > i.reminders_alt:before {
			content: 'reminders_alt';
		}
		:host > i.remote_gen:before {
			content: 'remote_gen';
		}
		:host > i.remove:before {
			content: 'remove';
		}
		:host > i.remove_circle:before {
			content: 'remove_circle';
		}
		:host > i.remove_circle_outline:before {
			content: 'remove_circle_outline';
		}
		:host > i.remove_done:before {
			content: 'remove_done';
		}
		:host > i.remove_from_queue:before {
			content: 'remove_from_queue';
		}
		:host > i.remove_moderator:before {
			content: 'remove_moderator';
		}
		:host > i.remove_red_eye:before {
			content: 'remove_red_eye';
		}
		:host > i.remove_road:before {
			content: 'remove_road';
		}
		:host > i.remove_selection:before {
			content: 'remove_selection';
		}
		:host > i.remove_shopping_cart:before {
			content: 'remove_shopping_cart';
		}
		:host > i.reopen_window:before {
			content: 'reopen_window';
		}
		:host > i.reorder:before {
			content: 'reorder';
		}
		:host > i.repartition:before {
			content: 'repartition';
		}
		:host > i.repeat:before {
			content: 'repeat';
		}
		:host > i.repeat_on:before {
			content: 'repeat_on';
		}
		:host > i.repeat_one:before {
			content: 'repeat_one';
		}
		:host > i.repeat_one_on:before {
			content: 'repeat_one_on';
		}
		:host > i.replay:before {
			content: 'replay';
		}
		:host > i.replay_10:before {
			content: 'replay_10';
		}
		:host > i.replay_30:before {
			content: 'replay_30';
		}
		:host > i.replay_5:before {
			content: 'replay_5';
		}
		:host > i.replay_circle_filled:before {
			content: 'replay_circle_filled';
		}
		:host > i.reply:before {
			content: 'reply';
		}
		:host > i.reply_all:before {
			content: 'reply_all';
		}
		:host > i.report:before {
			content: 'report';
		}
		:host > i.report_gmailerrorred:before {
			content: 'report_gmailerrorred';
		}
		:host > i.report_off:before {
			content: 'report_off';
		}
		:host > i.report_problem:before {
			content: 'report_problem';
		}
		:host > i.request_page:before {
			content: 'request_page';
		}
		:host > i.request_quote:before {
			content: 'request_quote';
		}
		:host > i.reset_image:before {
			content: 'reset_image';
		}
		:host > i.reset_tv:before {
			content: 'reset_tv';
		}
		:host > i.reset_wrench:before {
			content: 'reset_wrench';
		}
		:host > i.resize:before {
			content: 'resize';
		}
		:host > i.respiratory_rate:before {
			content: 'respiratory_rate';
		}
		:host > i.responsive_layout:before {
			content: 'responsive_layout';
		}
		:host > i.restart_alt:before {
			content: 'restart_alt';
		}
		:host > i.restaurant:before {
			content: 'restaurant';
		}
		:host > i.restaurant_menu:before {
			content: 'restaurant_menu';
		}
		:host > i.restore:before {
			content: 'restore';
		}
		:host > i.restore_from_trash:before {
			content: 'restore_from_trash';
		}
		:host > i.restore_page:before {
			content: 'restore_page';
		}
		:host > i.resume:before {
			content: 'resume';
		}
		:host > i.reviews:before {
			content: 'reviews';
		}
		:host > i.rewarded_ads:before {
			content: 'rewarded_ads';
		}
		:host > i.rheumatology:before {
			content: 'rheumatology';
		}
		:host > i.rib_cage:before {
			content: 'rib_cage';
		}
		:host > i.rice_bowl:before {
			content: 'rice_bowl';
		}
		:host > i.right_click:before {
			content: 'right_click';
		}
		:host > i.right_panel_close:before {
			content: 'right_panel_close';
		}
		:host > i.right_panel_open:before {
			content: 'right_panel_open';
		}
		:host > i.ring_volume:before {
			content: 'ring_volume';
		}
		:host > i.ring_volume_filled:before {
			content: 'ring_volume_filled';
		}
		:host > i.ripples:before {
			content: 'ripples';
		}
		:host > i.robot:before {
			content: 'robot';
		}
		:host > i.robot_2:before {
			content: 'robot_2';
		}
		:host > i.rocket:before {
			content: 'rocket';
		}
		:host > i.rocket_launch:before {
			content: 'rocket_launch';
		}
		:host > i.roller_shades:before {
			content: 'roller_shades';
		}
		:host > i.roller_shades_closed:before {
			content: 'roller_shades_closed';
		}
		:host > i.roller_skating:before {
			content: 'roller_skating';
		}
		:host > i.roofing:before {
			content: 'roofing';
		}
		:host > i.room:before {
			content: 'room';
		}
		:host > i.room_preferences:before {
			content: 'room_preferences';
		}
		:host > i.room_service:before {
			content: 'room_service';
		}
		:host > i.rotate_90_degrees_ccw:before {
			content: 'rotate_90_degrees_ccw';
		}
		:host > i.rotate_90_degrees_cw:before {
			content: 'rotate_90_degrees_cw';
		}
		:host > i.rotate_left:before {
			content: 'rotate_left';
		}
		:host > i.rotate_right:before {
			content: 'rotate_right';
		}
		:host > i.roundabout_left:before {
			content: 'roundabout_left';
		}
		:host > i.roundabout_right:before {
			content: 'roundabout_right';
		}
		:host > i.rounded_corner:before {
			content: 'rounded_corner';
		}
		:host > i.route:before {
			content: 'route';
		}
		:host > i.router:before {
			content: 'router';
		}
		:host > i.routine:before {
			content: 'routine';
		}
		:host > i.rowing:before {
			content: 'rowing';
		}
		:host > i.rss_feed:before {
			content: 'rss_feed';
		}
		:host > i.rsvp:before {
			content: 'rsvp';
		}
		:host > i.rtt:before {
			content: 'rtt';
		}
		:host > i.rubric:before {
			content: 'rubric';
		}
		:host > i.rule:before {
			content: 'rule';
		}
		:host > i.rule_folder:before {
			content: 'rule_folder';
		}
		:host > i.rule_settings:before {
			content: 'rule_settings';
		}
		:host > i.run_circle:before {
			content: 'run_circle';
		}
		:host > i.running_with_errors:before {
			content: 'running_with_errors';
		}
		:host > i.rv_hookup:before {
			content: 'rv_hookup';
		}
		:host > i.safety_check:before {
			content: 'safety_check';
		}
		:host > i.safety_check_off:before {
			content: 'safety_check_off';
		}
		:host > i.safety_divider:before {
			content: 'safety_divider';
		}
		:host > i.sailing:before {
			content: 'sailing';
		}
		:host > i.salinity:before {
			content: 'salinity';
		}
		:host > i.sanitizer:before {
			content: 'sanitizer';
		}
		:host > i.satellite:before {
			content: 'satellite';
		}
		:host > i.satellite_alt:before {
			content: 'satellite_alt';
		}
		:host > i.sauna:before {
			content: 'sauna';
		}
		:host > i.save:before {
			content: 'save';
		}
		:host > i.save_alt:before {
			content: 'save_alt';
		}
		:host > i.save_as:before {
			content: 'save_as';
		}
		:host > i.saved_search:before {
			content: 'saved_search';
		}
		:host > i.savings:before {
			content: 'savings';
		}
		:host > i.scale:before {
			content: 'scale';
		}
		:host > i.scan:before {
			content: 'scan';
		}
		:host > i.scan_delete:before {
			content: 'scan_delete';
		}
		:host > i.scanner:before {
			content: 'scanner';
		}
		:host > i.scatter_plot:before {
			content: 'scatter_plot';
		}
		:host > i.scene:before {
			content: 'scene';
		}
		:host > i.schedule:before {
			content: 'schedule';
		}
		:host > i.schedule_send:before {
			content: 'schedule_send';
		}
		:host > i.schema:before {
			content: 'schema';
		}
		:host > i.school:before {
			content: 'school';
		}
		:host > i.science:before {
			content: 'science';
		}
		:host > i.science_off:before {
			content: 'science_off';
		}
		:host > i.score:before {
			content: 'score';
		}
		:host > i.scoreboard:before {
			content: 'scoreboard';
		}
		:host > i.screen_lock_landscape:before {
			content: 'screen_lock_landscape';
		}
		:host > i.screen_lock_portrait:before {
			content: 'screen_lock_portrait';
		}
		:host > i.screen_lock_rotation:before {
			content: 'screen_lock_rotation';
		}
		:host > i.screen_record:before {
			content: 'screen_record';
		}
		:host > i.screen_rotation:before {
			content: 'screen_rotation';
		}
		:host > i.screen_rotation_alt:before {
			content: 'screen_rotation_alt';
		}
		:host > i.screen_rotation_up:before {
			content: 'screen_rotation_up';
		}
		:host > i.screen_search_desktop:before {
			content: 'screen_search_desktop';
		}
		:host > i.screen_share:before {
			content: 'screen_share';
		}
		:host > i.screenshot:before {
			content: 'screenshot';
		}
		:host > i.screenshot_frame:before {
			content: 'screenshot_frame';
		}
		:host > i.screenshot_keyboard:before {
			content: 'screenshot_keyboard';
		}
		:host > i.screenshot_monitor:before {
			content: 'screenshot_monitor';
		}
		:host > i.screenshot_region:before {
			content: 'screenshot_region';
		}
		:host > i.screenshot_tablet:before {
			content: 'screenshot_tablet';
		}
		:host > i.scrollable_header:before {
			content: 'scrollable_header';
		}
		:host > i.scuba_diving:before {
			content: 'scuba_diving';
		}
		:host > i.sd:before {
			content: 'sd';
		}
		:host > i.sd_card:before {
			content: 'sd_card';
		}
		:host > i.sd_card_alert:before {
			content: 'sd_card_alert';
		}
		:host > i.sd_storage:before {
			content: 'sd_storage';
		}
		:host > i.sdk:before {
			content: 'sdk';
		}
		:host > i.search:before {
			content: 'search';
		}
		:host > i.search_check:before {
			content: 'search_check';
		}
		:host > i.search_hands_free:before {
			content: 'search_hands_free';
		}
		:host > i.search_off:before {
			content: 'search_off';
		}
		:host > i.security:before {
			content: 'security';
		}
		:host > i.security_key:before {
			content: 'security_key';
		}
		:host > i.security_update:before {
			content: 'security_update';
		}
		:host > i.security_update_good:before {
			content: 'security_update_good';
		}
		:host > i.security_update_warning:before {
			content: 'security_update_warning';
		}
		:host > i.segment:before {
			content: 'segment';
		}
		:host > i.select:before {
			content: 'select';
		}
		:host > i.select_all:before {
			content: 'select_all';
		}
		:host > i.select_check_box:before {
			content: 'select_check_box';
		}
		:host > i.select_to_speak:before {
			content: 'select_to_speak';
		}
		:host > i.select_window:before {
			content: 'select_window';
		}
		:host > i.select_window_off:before {
			content: 'select_window_off';
		}
		:host > i.self_care:before {
			content: 'self_care';
		}
		:host > i.self_improvement:before {
			content: 'self_improvement';
		}
		:host > i.sell:before {
			content: 'sell';
		}
		:host > i.send:before {
			content: 'send';
		}
		:host > i.send_and_archive:before {
			content: 'send_and_archive';
		}
		:host > i.send_money:before {
			content: 'send_money';
		}
		:host > i.send_time_extension:before {
			content: 'send_time_extension';
		}
		:host > i.send_to_mobile:before {
			content: 'send_to_mobile';
		}
		:host > i.sensor_door:before {
			content: 'sensor_door';
		}
		:host > i.sensor_occupied:before {
			content: 'sensor_occupied';
		}
		:host > i.sensor_window:before {
			content: 'sensor_window';
		}
		:host > i.sensors:before {
			content: 'sensors';
		}
		:host > i.sensors_krx:before {
			content: 'sensors_krx';
		}
		:host > i.sensors_krx_off:before {
			content: 'sensors_krx_off';
		}
		:host > i.sensors_off:before {
			content: 'sensors_off';
		}
		:host > i.sentiment_calm:before {
			content: 'sentiment_calm';
		}
		:host > i.sentiment_content:before {
			content: 'sentiment_content';
		}
		:host > i.sentiment_dissatisfied:before {
			content: 'sentiment_dissatisfied';
		}
		:host > i.sentiment_excited:before {
			content: 'sentiment_excited';
		}
		:host > i.sentiment_extremely_dissatisfied:before {
			content: 'sentiment_extremely_dissatisfied';
		}
		:host > i.sentiment_frustrated:before {
			content: 'sentiment_frustrated';
		}
		:host > i.sentiment_neutral:before {
			content: 'sentiment_neutral';
		}
		:host > i.sentiment_sad:before {
			content: 'sentiment_sad';
		}
		:host > i.sentiment_satisfied:before {
			content: 'sentiment_satisfied';
		}
		:host > i.sentiment_satisfied_alt:before {
			content: 'sentiment_satisfied_alt';
		}
		:host > i.sentiment_stressed:before {
			content: 'sentiment_stressed';
		}
		:host > i.sentiment_very_dissatisfied:before {
			content: 'sentiment_very_dissatisfied';
		}
		:host > i.sentiment_very_satisfied:before {
			content: 'sentiment_very_satisfied';
		}
		:host > i.sentiment_worried:before {
			content: 'sentiment_worried';
		}
		:host > i.service_toolbox:before {
			content: 'service_toolbox';
		}
		:host > i.set_meal:before {
			content: 'set_meal';
		}
		:host > i.settings:before {
			content: 'settings';
		}
		:host > i.settings_accessibility:before {
			content: 'settings_accessibility';
		}
		:host > i.settings_account_box:before {
			content: 'settings_account_box';
		}
		:host > i.settings_alert:before {
			content: 'settings_alert';
		}
		:host > i.settings_applications:before {
			content: 'settings_applications';
		}
		:host > i.settings_b_roll:before {
			content: 'settings_b_roll';
		}
		:host > i.settings_backup_restore:before {
			content: 'settings_backup_restore';
		}
		:host > i.settings_bluetooth:before {
			content: 'settings_bluetooth';
		}
		:host > i.settings_brightness:before {
			content: 'settings_brightness';
		}
		:host > i.settings_cell:before {
			content: 'settings_cell';
		}
		:host > i.settings_cinematic_blur:before {
			content: 'settings_cinematic_blur';
		}
		:host > i.settings_ethernet:before {
			content: 'settings_ethernet';
		}
		:host > i.settings_heart:before {
			content: 'settings_heart';
		}
		:host > i.settings_input_antenna:before {
			content: 'settings_input_antenna';
		}
		:host > i.settings_input_component:before {
			content: 'settings_input_component';
		}
		:host > i.settings_input_composite:before {
			content: 'settings_input_composite';
		}
		:host > i.settings_input_hdmi:before {
			content: 'settings_input_hdmi';
		}
		:host > i.settings_input_svideo:before {
			content: 'settings_input_svideo';
		}
		:host > i.settings_motion_mode:before {
			content: 'settings_motion_mode';
		}
		:host > i.settings_night_sight:before {
			content: 'settings_night_sight';
		}
		:host > i.settings_overscan:before {
			content: 'settings_overscan';
		}
		:host > i.settings_panorama:before {
			content: 'settings_panorama';
		}
		:host > i.settings_phone:before {
			content: 'settings_phone';
		}
		:host > i.settings_photo_camera:before {
			content: 'settings_photo_camera';
		}
		:host > i.settings_power:before {
			content: 'settings_power';
		}
		:host > i.settings_remote:before {
			content: 'settings_remote';
		}
		:host > i.settings_slow_motion:before {
			content: 'settings_slow_motion';
		}
		:host > i.settings_suggest:before {
			content: 'settings_suggest';
		}
		:host > i.settings_system_daydream:before {
			content: 'settings_system_daydream';
		}
		:host > i.settings_timelapse:before {
			content: 'settings_timelapse';
		}
		:host > i.settings_video_camera:before {
			content: 'settings_video_camera';
		}
		:host > i.settings_voice:before {
			content: 'settings_voice';
		}
		:host > i.settop_component:before {
			content: 'settop_component';
		}
		:host > i.severe_cold:before {
			content: 'severe_cold';
		}
		:host > i.shadow:before {
			content: 'shadow';
		}
		:host > i.shadow_add:before {
			content: 'shadow_add';
		}
		:host > i.shadow_minus:before {
			content: 'shadow_minus';
		}
		:host > i.shape_line:before {
			content: 'shape_line';
		}
		:host > i.shape_recognition:before {
			content: 'shape_recognition';
		}
		:host > i.shapes:before {
			content: 'shapes';
		}
		:host > i.share:before {
			content: 'share';
		}
		:host > i.share_location:before {
			content: 'share_location';
		}
		:host > i.share_off:before {
			content: 'share_off';
		}
		:host > i.share_reviews:before {
			content: 'share_reviews';
		}
		:host > i.share_windows:before {
			content: 'share_windows';
		}
		:host > i.sheets_rtl:before {
			content: 'sheets_rtl';
		}
		:host > i.shelf_auto_hide:before {
			content: 'shelf_auto_hide';
		}
		:host > i.shelf_position:before {
			content: 'shelf_position';
		}
		:host > i.shelves:before {
			content: 'shelves';
		}
		:host > i.shield:before {
			content: 'shield';
		}
		:host > i.shield_lock:before {
			content: 'shield_lock';
		}
		:host > i.shield_locked:before {
			content: 'shield_locked';
		}
		:host > i.shield_moon:before {
			content: 'shield_moon';
		}
		:host > i.shield_person:before {
			content: 'shield_person';
		}
		:host > i.shield_question:before {
			content: 'shield_question';
		}
		:host > i.shield_with_heart:before {
			content: 'shield_with_heart';
		}
		:host > i.shield_with_house:before {
			content: 'shield_with_house';
		}
		:host > i.shift:before {
			content: 'shift';
		}
		:host > i.shift_lock:before {
			content: 'shift_lock';
		}
		:host > i.shop:before {
			content: 'shop';
		}
		:host > i.shop_2:before {
			content: 'shop_2';
		}
		:host > i.shop_two:before {
			content: 'shop_two';
		}
		:host > i.shopping_bag:before {
			content: 'shopping_bag';
		}
		:host > i.shopping_basket:before {
			content: 'shopping_basket';
		}
		:host > i.shopping_cart:before {
			content: 'shopping_cart';
		}
		:host > i.shopping_cart_checkout:before {
			content: 'shopping_cart_checkout';
		}
		:host > i.shopping_cart_off:before {
			content: 'shopping_cart_off';
		}
		:host > i.shoppingmode:before {
			content: 'shoppingmode';
		}
		:host > i.short_stay:before {
			content: 'short_stay';
		}
		:host > i.short_text:before {
			content: 'short_text';
		}
		:host > i.shortcut:before {
			content: 'shortcut';
		}
		:host > i.show_chart:before {
			content: 'show_chart';
		}
		:host > i.shower:before {
			content: 'shower';
		}
		:host > i.shuffle:before {
			content: 'shuffle';
		}
		:host > i.shuffle_on:before {
			content: 'shuffle_on';
		}
		:host > i.shutter_speed:before {
			content: 'shutter_speed';
		}
		:host > i.shutter_speed_add:before {
			content: 'shutter_speed_add';
		}
		:host > i.shutter_speed_minus:before {
			content: 'shutter_speed_minus';
		}
		:host > i.sick:before {
			content: 'sick';
		}
		:host > i.side_navigation:before {
			content: 'side_navigation';
		}
		:host > i.sign_language:before {
			content: 'sign_language';
		}
		:host > i.signal_cellular_0_bar:before {
			content: 'signal_cellular_0_bar';
		}
		:host > i.signal_cellular_1_bar:before {
			content: 'signal_cellular_1_bar';
		}
		:host > i.signal_cellular_2_bar:before {
			content: 'signal_cellular_2_bar';
		}
		:host > i.signal_cellular_3_bar:before {
			content: 'signal_cellular_3_bar';
		}
		:host > i.signal_cellular_4_bar:before {
			content: 'signal_cellular_4_bar';
		}
		:host > i.signal_cellular_add:before {
			content: 'signal_cellular_add';
		}
		:host > i.signal_cellular_alt:before {
			content: 'signal_cellular_alt';
		}
		:host > i.signal_cellular_alt_1_bar:before {
			content: 'signal_cellular_alt_1_bar';
		}
		:host > i.signal_cellular_alt_2_bar:before {
			content: 'signal_cellular_alt_2_bar';
		}
		:host > i.signal_cellular_connected_no_internet_0_bar:before {
			content: 'signal_cellular_connected_no_internet_0_bar';
		}
		:host > i.signal_cellular_connected_no_internet_4_bar:before {
			content: 'signal_cellular_connected_no_internet_4_bar';
		}
		:host > i.signal_cellular_no_sim:before {
			content: 'signal_cellular_no_sim';
		}
		:host > i.signal_cellular_nodata:before {
			content: 'signal_cellular_nodata';
		}
		:host > i.signal_cellular_null:before {
			content: 'signal_cellular_null';
		}
		:host > i.signal_cellular_off:before {
			content: 'signal_cellular_off';
		}
		:host > i.signal_cellular_pause:before {
			content: 'signal_cellular_pause';
		}
		:host > i.signal_disconnected:before {
			content: 'signal_disconnected';
		}
		:host > i.signal_wifi_0_bar:before {
			content: 'signal_wifi_0_bar';
		}
		:host > i.signal_wifi_4_bar:before {
			content: 'signal_wifi_4_bar';
		}
		:host > i.signal_wifi_4_bar_lock:before {
			content: 'signal_wifi_4_bar_lock';
		}
		:host > i.signal_wifi_bad:before {
			content: 'signal_wifi_bad';
		}
		:host > i.signal_wifi_connected_no_internet_4:before {
			content: 'signal_wifi_connected_no_internet_4';
		}
		:host > i.signal_wifi_off:before {
			content: 'signal_wifi_off';
		}
		:host > i.signal_wifi_statusbar_4_bar:before {
			content: 'signal_wifi_statusbar_4_bar';
		}
		:host > i.signal_wifi_statusbar_not_connected:before {
			content: 'signal_wifi_statusbar_not_connected';
		}
		:host > i.signal_wifi_statusbar_null:before {
			content: 'signal_wifi_statusbar_null';
		}
		:host > i.signature:before {
			content: 'signature';
		}
		:host > i.signpost:before {
			content: 'signpost';
		}
		:host > i.sim_card:before {
			content: 'sim_card';
		}
		:host > i.sim_card_alert:before {
			content: 'sim_card_alert';
		}
		:host > i.sim_card_download:before {
			content: 'sim_card_download';
		}
		:host > i.single_bed:before {
			content: 'single_bed';
		}
		:host > i.sip:before {
			content: 'sip';
		}
		:host > i.skateboarding:before {
			content: 'skateboarding';
		}
		:host > i.skeleton:before {
			content: 'skeleton';
		}
		:host > i.skillet:before {
			content: 'skillet';
		}
		:host > i.skillet_cooktop:before {
			content: 'skillet_cooktop';
		}
		:host > i.skip_next:before {
			content: 'skip_next';
		}
		:host > i.skip_previous:before {
			content: 'skip_previous';
		}
		:host > i.skull:before {
			content: 'skull';
		}
		:host > i.sledding:before {
			content: 'sledding';
		}
		:host > i.sleep:before {
			content: 'sleep';
		}
		:host > i.sleep_score:before {
			content: 'sleep_score';
		}
		:host > i.slide_library:before {
			content: 'slide_library';
		}
		:host > i.sliders:before {
			content: 'sliders';
		}
		:host > i.slideshow:before {
			content: 'slideshow';
		}
		:host > i.slow_motion_video:before {
			content: 'slow_motion_video';
		}
		:host > i.smart_button:before {
			content: 'smart_button';
		}
		:host > i.smart_display:before {
			content: 'smart_display';
		}
		:host > i.smart_outlet:before {
			content: 'smart_outlet';
		}
		:host > i.smart_screen:before {
			content: 'smart_screen';
		}
		:host > i.smart_toy:before {
			content: 'smart_toy';
		}
		:host > i.smartphone:before {
			content: 'smartphone';
		}
		:host > i.smb_share:before {
			content: 'smb_share';
		}
		:host > i.smoke_free:before {
			content: 'smoke_free';
		}
		:host > i.smoking_rooms:before {
			content: 'smoking_rooms';
		}
		:host > i.sms:before {
			content: 'sms';
		}
		:host > i.sms_failed:before {
			content: 'sms_failed';
		}
		:host > i.snippet_folder:before {
			content: 'snippet_folder';
		}
		:host > i.snooze:before {
			content: 'snooze';
		}
		:host > i.snowboarding:before {
			content: 'snowboarding';
		}
		:host > i.snowing:before {
			content: 'snowing';
		}
		:host > i.snowing_heavy:before {
			content: 'snowing_heavy';
		}
		:host > i.snowmobile:before {
			content: 'snowmobile';
		}
		:host > i.snowshoeing:before {
			content: 'snowshoeing';
		}
		:host > i.soap:before {
			content: 'soap';
		}
		:host > i.social_distance:before {
			content: 'social_distance';
		}
		:host > i.social_leaderboard:before {
			content: 'social_leaderboard';
		}
		:host > i.solar_power:before {
			content: 'solar_power';
		}
		:host > i.sort:before {
			content: 'sort';
		}
		:host > i.sort_by_alpha:before {
			content: 'sort_by_alpha';
		}
		:host > i.sos:before {
			content: 'sos';
		}
		:host > i.sound_detection_dog_barking:before {
			content: 'sound_detection_dog_barking';
		}
		:host > i.sound_detection_glass_break:before {
			content: 'sound_detection_glass_break';
		}
		:host > i.sound_detection_loud_sound:before {
			content: 'sound_detection_loud_sound';
		}
		:host > i.sound_sampler:before {
			content: 'sound_sampler';
		}
		:host > i.soup_kitchen:before {
			content: 'soup_kitchen';
		}
		:host > i.source:before {
			content: 'source';
		}
		:host > i.source_environment:before {
			content: 'source_environment';
		}
		:host > i.source_notes:before {
			content: 'source_notes';
		}
		:host > i.south:before {
			content: 'south';
		}
		:host > i.south_america:before {
			content: 'south_america';
		}
		:host > i.south_east:before {
			content: 'south_east';
		}
		:host > i.south_west:before {
			content: 'south_west';
		}
		:host > i.spa:before {
			content: 'spa';
		}
		:host > i.space_bar:before {
			content: 'space_bar';
		}
		:host > i.space_dashboard:before {
			content: 'space_dashboard';
		}
		:host > i.spatial_audio:before {
			content: 'spatial_audio';
		}
		:host > i.spatial_audio_off:before {
			content: 'spatial_audio_off';
		}
		:host > i.spatial_tracking:before {
			content: 'spatial_tracking';
		}
		:host > i.speaker:before {
			content: 'speaker';
		}
		:host > i.speaker_group:before {
			content: 'speaker_group';
		}
		:host > i.speaker_notes:before {
			content: 'speaker_notes';
		}
		:host > i.speaker_notes_off:before {
			content: 'speaker_notes_off';
		}
		:host > i.speaker_phone:before {
			content: 'speaker_phone';
		}
		:host > i.special_character:before {
			content: 'special_character';
		}
		:host > i.specific_gravity:before {
			content: 'specific_gravity';
		}
		:host > i.speech_to_text:before {
			content: 'speech_to_text';
		}
		:host > i.speed:before {
			content: 'speed';
		}
		:host > i.speed_0_5:before {
			content: 'speed_0_5';
		}
		:host > i.speed_1_2:before {
			content: 'speed_1_2';
		}
		:host > i.speed_1_5:before {
			content: 'speed_1_5';
		}
		:host > i.speed_2x:before {
			content: 'speed_2x';
		}
		:host > i.spellcheck:before {
			content: 'spellcheck';
		}
		:host > i.splitscreen:before {
			content: 'splitscreen';
		}
		:host > i.splitscreen_add:before {
			content: 'splitscreen_add';
		}
		:host > i.splitscreen_bottom:before {
			content: 'splitscreen_bottom';
		}
		:host > i.splitscreen_left:before {
			content: 'splitscreen_left';
		}
		:host > i.splitscreen_right:before {
			content: 'splitscreen_right';
		}
		:host > i.splitscreen_top:before {
			content: 'splitscreen_top';
		}
		:host > i.splitscreen_vertical_add:before {
			content: 'splitscreen_vertical_add';
		}
		:host > i.spo2:before {
			content: 'spo2';
		}
		:host > i.spoke:before {
			content: 'spoke';
		}
		:host > i.sports:before {
			content: 'sports';
		}
		:host > i.sports_and_outdoors:before {
			content: 'sports_and_outdoors';
		}
		:host > i.sports_bar:before {
			content: 'sports_bar';
		}
		:host > i.sports_baseball:before {
			content: 'sports_baseball';
		}
		:host > i.sports_basketball:before {
			content: 'sports_basketball';
		}
		:host > i.sports_cricket:before {
			content: 'sports_cricket';
		}
		:host > i.sports_esports:before {
			content: 'sports_esports';
		}
		:host > i.sports_football:before {
			content: 'sports_football';
		}
		:host > i.sports_golf:before {
			content: 'sports_golf';
		}
		:host > i.sports_gymnastics:before {
			content: 'sports_gymnastics';
		}
		:host > i.sports_handball:before {
			content: 'sports_handball';
		}
		:host > i.sports_hockey:before {
			content: 'sports_hockey';
		}
		:host > i.sports_kabaddi:before {
			content: 'sports_kabaddi';
		}
		:host > i.sports_martial_arts:before {
			content: 'sports_martial_arts';
		}
		:host > i.sports_mma:before {
			content: 'sports_mma';
		}
		:host > i.sports_motorsports:before {
			content: 'sports_motorsports';
		}
		:host > i.sports_rugby:before {
			content: 'sports_rugby';
		}
		:host > i.sports_score:before {
			content: 'sports_score';
		}
		:host > i.sports_soccer:before {
			content: 'sports_soccer';
		}
		:host > i.sports_tennis:before {
			content: 'sports_tennis';
		}
		:host > i.sports_volleyball:before {
			content: 'sports_volleyball';
		}
		:host > i.sprinkler:before {
			content: 'sprinkler';
		}
		:host > i.sprint:before {
			content: 'sprint';
		}
		:host > i.square:before {
			content: 'square';
		}
		:host > i.square_foot:before {
			content: 'square_foot';
		}
		:host > i.ssid_chart:before {
			content: 'ssid_chart';
		}
		:host > i.stack:before {
			content: 'stack';
		}
		:host > i.stack_off:before {
			content: 'stack_off';
		}
		:host > i.stack_star:before {
			content: 'stack_star';
		}
		:host > i.stacked_bar_chart:before {
			content: 'stacked_bar_chart';
		}
		:host > i.stacked_email:before {
			content: 'stacked_email';
		}
		:host > i.stacked_inbox:before {
			content: 'stacked_inbox';
		}
		:host > i.stacked_line_chart:before {
			content: 'stacked_line_chart';
		}
		:host > i.stacks:before {
			content: 'stacks';
		}
		:host > i.stadia_controller:before {
			content: 'stadia_controller';
		}
		:host > i.stadium:before {
			content: 'stadium';
		}
		:host > i.stairs:before {
			content: 'stairs';
		}
		:host > i.star:before {
			content: 'star';
		}
		:host > i.star_border:before {
			content: 'star_border';
		}
		:host > i.star_border_purple500:before {
			content: 'star_border_purple500';
		}
		:host > i.star_half:before {
			content: 'star_half';
		}
		:host > i.star_outline:before {
			content: 'star_outline';
		}
		:host > i.star_purple500:before {
			content: 'star_purple500';
		}
		:host > i.star_rate:before {
			content: 'star_rate';
		}
		:host > i.star_rate_half:before {
			content: 'star_rate_half';
		}
		:host > i.stars:before {
			content: 'stars';
		}
		:host > i.start:before {
			content: 'start';
		}
		:host > i.stat_0:before {
			content: 'stat_0';
		}
		:host > i.stat_1:before {
			content: 'stat_1';
		}
		:host > i.stat_2:before {
			content: 'stat_2';
		}
		:host > i.stat_3:before {
			content: 'stat_3';
		}
		:host > i.stat_minus_1:before {
			content: 'stat_minus_1';
		}
		:host > i.stat_minus_2:before {
			content: 'stat_minus_2';
		}
		:host > i.stat_minus_3:before {
			content: 'stat_minus_3';
		}
		:host > i.stay_current_landscape:before {
			content: 'stay_current_landscape';
		}
		:host > i.stay_current_portrait:before {
			content: 'stay_current_portrait';
		}
		:host > i.stay_primary_landscape:before {
			content: 'stay_primary_landscape';
		}
		:host > i.stay_primary_portrait:before {
			content: 'stay_primary_portrait';
		}
		:host > i.step:before {
			content: 'step';
		}
		:host > i.step_into:before {
			content: 'step_into';
		}
		:host > i.step_out:before {
			content: 'step_out';
		}
		:host > i.step_over:before {
			content: 'step_over';
		}
		:host > i.steppers:before {
			content: 'steppers';
		}
		:host > i.steps:before {
			content: 'steps';
		}
		:host > i.stethoscope:before {
			content: 'stethoscope';
		}
		:host > i.stethoscope_arrow:before {
			content: 'stethoscope_arrow';
		}
		:host > i.stethoscope_check:before {
			content: 'stethoscope_check';
		}
		:host > i.sticky_note:before {
			content: 'sticky_note';
		}
		:host > i.sticky_note_2:before {
			content: 'sticky_note_2';
		}
		:host > i.stock_media:before {
			content: 'stock_media';
		}
		:host > i.stockpot:before {
			content: 'stockpot';
		}
		:host > i.stop:before {
			content: 'stop';
		}
		:host > i.stop_circle:before {
			content: 'stop_circle';
		}
		:host > i.stop_screen_share:before {
			content: 'stop_screen_share';
		}
		:host > i.storage:before {
			content: 'storage';
		}
		:host > i.store:before {
			content: 'store';
		}
		:host > i.store_mall_directory:before {
			content: 'store_mall_directory';
		}
		:host > i.storefront:before {
			content: 'storefront';
		}
		:host > i.storm:before {
			content: 'storm';
		}
		:host > i.straight:before {
			content: 'straight';
		}
		:host > i.straighten:before {
			content: 'straighten';
		}
		:host > i.strategy:before {
			content: 'strategy';
		}
		:host > i.stream:before {
			content: 'stream';
		}
		:host > i.stream_apps:before {
			content: 'stream_apps';
		}
		:host > i.streetview:before {
			content: 'streetview';
		}
		:host > i.stress_management:before {
			content: 'stress_management';
		}
		:host > i.strikethrough_s:before {
			content: 'strikethrough_s';
		}
		:host > i.stroke_full:before {
			content: 'stroke_full';
		}
		:host > i.stroke_partial:before {
			content: 'stroke_partial';
		}
		:host > i.stroller:before {
			content: 'stroller';
		}
		:host > i.style:before {
			content: 'style';
		}
		:host > i.styler:before {
			content: 'styler';
		}
		:host > i.stylus:before {
			content: 'stylus';
		}
		:host > i.stylus_laser_pointer:before {
			content: 'stylus_laser_pointer';
		}
		:host > i.stylus_note:before {
			content: 'stylus_note';
		}
		:host > i.subdirectory_arrow_left:before {
			content: 'subdirectory_arrow_left';
		}
		:host > i.subdirectory_arrow_right:before {
			content: 'subdirectory_arrow_right';
		}
		:host > i.subheader:before {
			content: 'subheader';
		}
		:host > i.subject:before {
			content: 'subject';
		}
		:host > i.subscript:before {
			content: 'subscript';
		}
		:host > i.subscriptions:before {
			content: 'subscriptions';
		}
		:host > i.subtitles:before {
			content: 'subtitles';
		}
		:host > i.subtitles_off:before {
			content: 'subtitles_off';
		}
		:host > i.subway:before {
			content: 'subway';
		}
		:host > i.summarize:before {
			content: 'summarize';
		}
		:host > i.sunny:before {
			content: 'sunny';
		}
		:host > i.sunny_snowing:before {
			content: 'sunny_snowing';
		}
		:host > i.superscript:before {
			content: 'superscript';
		}
		:host > i.supervised_user_circle:before {
			content: 'supervised_user_circle';
		}
		:host > i.supervised_user_circle_off:before {
			content: 'supervised_user_circle_off';
		}
		:host > i.supervisor_account:before {
			content: 'supervisor_account';
		}
		:host > i.support:before {
			content: 'support';
		}
		:host > i.support_agent:before {
			content: 'support_agent';
		}
		:host > i.surfing:before {
			content: 'surfing';
		}
		:host > i.surgical:before {
			content: 'surgical';
		}
		:host > i.surround_sound:before {
			content: 'surround_sound';
		}
		:host > i.swap_calls:before {
			content: 'swap_calls';
		}
		:host > i.swap_driving_apps:before {
			content: 'swap_driving_apps';
		}
		:host > i.swap_driving_apps_wheel:before {
			content: 'swap_driving_apps_wheel';
		}
		:host > i.swap_horiz:before {
			content: 'swap_horiz';
		}
		:host > i.swap_horizontal_circle:before {
			content: 'swap_horizontal_circle';
		}
		:host > i.swap_vert:before {
			content: 'swap_vert';
		}
		:host > i.swap_vertical_circle:before {
			content: 'swap_vertical_circle';
		}
		:host > i.sweep:before {
			content: 'sweep';
		}
		:host > i.swipe:before {
			content: 'swipe';
		}
		:host > i.swipe_down:before {
			content: 'swipe_down';
		}
		:host > i.swipe_down_alt:before {
			content: 'swipe_down_alt';
		}
		:host > i.swipe_left:before {
			content: 'swipe_left';
		}
		:host > i.swipe_left_alt:before {
			content: 'swipe_left_alt';
		}
		:host > i.swipe_right:before {
			content: 'swipe_right';
		}
		:host > i.swipe_right_alt:before {
			content: 'swipe_right_alt';
		}
		:host > i.swipe_up:before {
			content: 'swipe_up';
		}
		:host > i.swipe_up_alt:before {
			content: 'swipe_up_alt';
		}
		:host > i.swipe_vertical:before {
			content: 'swipe_vertical';
		}
		:host > i.switch:before {
			content: 'switch';
		}
		:host > i.switch_access:before {
			content: 'switch_access';
		}
		:host > i.switch_access_2:before {
			content: 'switch_access_2';
		}
		:host > i.switch_access_shortcut:before {
			content: 'switch_access_shortcut';
		}
		:host > i.switch_access_shortcut_add:before {
			content: 'switch_access_shortcut_add';
		}
		:host > i.switch_account:before {
			content: 'switch_account';
		}
		:host > i.switch_camera:before {
			content: 'switch_camera';
		}
		:host > i.switch_left:before {
			content: 'switch_left';
		}
		:host > i.switch_right:before {
			content: 'switch_right';
		}
		:host > i.switch_video:before {
			content: 'switch_video';
		}
		:host > i.switches:before {
			content: 'switches';
		}
		:host > i.sword_rose:before {
			content: 'sword_rose';
		}
		:host > i.swords:before {
			content: 'swords';
		}
		:host > i.symptoms:before {
			content: 'symptoms';
		}
		:host > i.synagogue:before {
			content: 'synagogue';
		}
		:host > i.sync:before {
			content: 'sync';
		}
		:host > i.sync_alt:before {
			content: 'sync_alt';
		}
		:host > i.sync_disabled:before {
			content: 'sync_disabled';
		}
		:host > i.sync_lock:before {
			content: 'sync_lock';
		}
		:host > i.sync_problem:before {
			content: 'sync_problem';
		}
		:host > i.sync_saved_locally:before {
			content: 'sync_saved_locally';
		}
		:host > i.syringe:before {
			content: 'syringe';
		}
		:host > i.system_security_update:before {
			content: 'system_security_update';
		}
		:host > i.system_security_update_good:before {
			content: 'system_security_update_good';
		}
		:host > i.system_security_update_warning:before {
			content: 'system_security_update_warning';
		}
		:host > i.system_update:before {
			content: 'system_update';
		}
		:host > i.system_update_alt:before {
			content: 'system_update_alt';
		}
		:host > i.tab:before {
			content: 'tab';
		}
		:host > i.tab_close:before {
			content: 'tab_close';
		}
		:host > i.tab_close_right:before {
			content: 'tab_close_right';
		}
		:host > i.tab_duplicate:before {
			content: 'tab_duplicate';
		}
		:host > i.tab_group:before {
			content: 'tab_group';
		}
		:host > i.tab_move:before {
			content: 'tab_move';
		}
		:host > i.tab_new_right:before {
			content: 'tab_new_right';
		}
		:host > i.tab_recent:before {
			content: 'tab_recent';
		}
		:host > i.tab_unselected:before {
			content: 'tab_unselected';
		}
		:host > i.table:before {
			content: 'table';
		}
		:host > i.table_bar:before {
			content: 'table_bar';
		}
		:host > i.table_chart:before {
			content: 'table_chart';
		}
		:host > i.table_chart_view:before {
			content: 'table_chart_view';
		}
		:host > i.table_lamp:before {
			content: 'table_lamp';
		}
		:host > i.table_restaurant:before {
			content: 'table_restaurant';
		}
		:host > i.table_rows:before {
			content: 'table_rows';
		}
		:host > i.table_rows_narrow:before {
			content: 'table_rows_narrow';
		}
		:host > i.table_view:before {
			content: 'table_view';
		}
		:host > i.tablet:before {
			content: 'tablet';
		}
		:host > i.tablet_android:before {
			content: 'tablet_android';
		}
		:host > i.tablet_mac:before {
			content: 'tablet_mac';
		}
		:host > i.tabs:before {
			content: 'tabs';
		}
		:host > i.tactic:before {
			content: 'tactic';
		}
		:host > i.tag:before {
			content: 'tag';
		}
		:host > i.tag_faces:before {
			content: 'tag_faces';
		}
		:host > i.takeout_dining:before {
			content: 'takeout_dining';
		}
		:host > i.tamper_detection_off:before {
			content: 'tamper_detection_off';
		}
		:host > i.tamper_detection_on:before {
			content: 'tamper_detection_on';
		}
		:host > i.tap_and_play:before {
			content: 'tap_and_play';
		}
		:host > i.tapas:before {
			content: 'tapas';
		}
		:host > i.target:before {
			content: 'target';
		}
		:host > i.task:before {
			content: 'task';
		}
		:host > i.task_alt:before {
			content: 'task_alt';
		}
		:host > i.taunt:before {
			content: 'taunt';
		}
		:host > i.taxi_alert:before {
			content: 'taxi_alert';
		}
		:host > i.team_dashboard:before {
			content: 'team_dashboard';
		}
		:host > i.temp_preferences_custom:before {
			content: 'temp_preferences_custom';
		}
		:host > i.temp_preferences_eco:before {
			content: 'temp_preferences_eco';
		}
		:host > i.temple_buddhist:before {
			content: 'temple_buddhist';
		}
		:host > i.temple_hindu:before {
			content: 'temple_hindu';
		}
		:host > i.tenancy:before {
			content: 'tenancy';
		}
		:host > i.terminal:before {
			content: 'terminal';
		}
		:host > i.terrain:before {
			content: 'terrain';
		}
		:host > i.text_ad:before {
			content: 'text_ad';
		}
		:host > i.text_decrease:before {
			content: 'text_decrease';
		}
		:host > i.text_fields:before {
			content: 'text_fields';
		}
		:host > i.text_fields_alt:before {
			content: 'text_fields_alt';
		}
		:host > i.text_format:before {
			content: 'text_format';
		}
		:host > i.text_increase:before {
			content: 'text_increase';
		}
		:host > i.text_rotate_up:before {
			content: 'text_rotate_up';
		}
		:host > i.text_rotate_vertical:before {
			content: 'text_rotate_vertical';
		}
		:host > i.text_rotation_angledown:before {
			content: 'text_rotation_angledown';
		}
		:host > i.text_rotation_angleup:before {
			content: 'text_rotation_angleup';
		}
		:host > i.text_rotation_down:before {
			content: 'text_rotation_down';
		}
		:host > i.text_rotation_none:before {
			content: 'text_rotation_none';
		}
		:host > i.text_select_end:before {
			content: 'text_select_end';
		}
		:host > i.text_select_jump_to_beginning:before {
			content: 'text_select_jump_to_beginning';
		}
		:host > i.text_select_jump_to_end:before {
			content: 'text_select_jump_to_end';
		}
		:host > i.text_select_move_back_character:before {
			content: 'text_select_move_back_character';
		}
		:host > i.text_select_move_back_word:before {
			content: 'text_select_move_back_word';
		}
		:host > i.text_select_move_down:before {
			content: 'text_select_move_down';
		}
		:host > i.text_select_move_forward_character:before {
			content: 'text_select_move_forward_character';
		}
		:host > i.text_select_move_forward_word:before {
			content: 'text_select_move_forward_word';
		}
		:host > i.text_select_move_up:before {
			content: 'text_select_move_up';
		}
		:host > i.text_select_start:before {
			content: 'text_select_start';
		}
		:host > i.text_snippet:before {
			content: 'text_snippet';
		}
		:host > i.text_to_speech:before {
			content: 'text_to_speech';
		}
		:host > i.textsms:before {
			content: 'textsms';
		}
		:host > i.texture:before {
			content: 'texture';
		}
		:host > i.texture_add:before {
			content: 'texture_add';
		}
		:host > i.texture_minus:before {
			content: 'texture_minus';
		}
		:host > i.theater_comedy:before {
			content: 'theater_comedy';
		}
		:host > i.theaters:before {
			content: 'theaters';
		}
		:host > i.thermometer:before {
			content: 'thermometer';
		}
		:host > i.thermometer_add:before {
			content: 'thermometer_add';
		}
		:host > i.thermometer_gain:before {
			content: 'thermometer_gain';
		}
		:host > i.thermometer_loss:before {
			content: 'thermometer_loss';
		}
		:host > i.thermometer_minus:before {
			content: 'thermometer_minus';
		}
		:host > i.thermostat:before {
			content: 'thermostat';
		}
		:host > i.thermostat_auto:before {
			content: 'thermostat_auto';
		}
		:host > i.thermostat_carbon:before {
			content: 'thermostat_carbon';
		}
		:host > i.things_to_do:before {
			content: 'things_to_do';
		}
		:host > i.thread_unread:before {
			content: 'thread_unread';
		}
		:host > i.thumb_down:before {
			content: 'thumb_down';
		}
		:host > i.thumb_down_alt:before {
			content: 'thumb_down_alt';
		}
		:host > i.thumb_down_filled:before {
			content: 'thumb_down_filled';
		}
		:host > i.thumb_down_off:before {
			content: 'thumb_down_off';
		}
		:host > i.thumb_down_off_alt:before {
			content: 'thumb_down_off_alt';
		}
		:host > i.thumb_up:before {
			content: 'thumb_up';
		}
		:host > i.thumb_up_alt:before {
			content: 'thumb_up_alt';
		}
		:host > i.thumb_up_filled:before {
			content: 'thumb_up_filled';
		}
		:host > i.thumb_up_off:before {
			content: 'thumb_up_off';
		}
		:host > i.thumb_up_off_alt:before {
			content: 'thumb_up_off_alt';
		}
		:host > i.thumbnail_bar:before {
			content: 'thumbnail_bar';
		}
		:host > i.thumbs_up_down:before {
			content: 'thumbs_up_down';
		}
		:host > i.thunderstorm:before {
			content: 'thunderstorm';
		}
		:host > i.tibia:before {
			content: 'tibia';
		}
		:host > i.tibia_alt:before {
			content: 'tibia_alt';
		}
		:host > i.time_auto:before {
			content: 'time_auto';
		}
		:host > i.time_to_leave:before {
			content: 'time_to_leave';
		}
		:host > i.timelapse:before {
			content: 'timelapse';
		}
		:host > i.timeline:before {
			content: 'timeline';
		}
		:host > i.timer:before {
			content: 'timer';
		}
		:host > i.timer_10:before {
			content: 'timer_10';
		}
		:host > i.timer_10_alt_1:before {
			content: 'timer_10_alt_1';
		}
		:host > i.timer_10_select:before {
			content: 'timer_10_select';
		}
		:host > i.timer_3:before {
			content: 'timer_3';
		}
		:host > i.timer_3_alt_1:before {
			content: 'timer_3_alt_1';
		}
		:host > i.timer_3_select:before {
			content: 'timer_3_select';
		}
		:host > i.timer_off:before {
			content: 'timer_off';
		}
		:host > i.tips_and_updates:before {
			content: 'tips_and_updates';
		}
		:host > i.tire_repair:before {
			content: 'tire_repair';
		}
		:host > i.title:before {
			content: 'title';
		}
		:host > i.toast:before {
			content: 'toast';
		}
		:host > i.toc:before {
			content: 'toc';
		}
		:host > i.today:before {
			content: 'today';
		}
		:host > i.toggle_off:before {
			content: 'toggle_off';
		}
		:host > i.toggle_on:before {
			content: 'toggle_on';
		}
		:host > i.token:before {
			content: 'token';
		}
		:host > i.toll:before {
			content: 'toll';
		}
		:host > i.tonality:before {
			content: 'tonality';
		}
		:host > i.toolbar:before {
			content: 'toolbar';
		}
		:host > i.tools_flat_head:before {
			content: 'tools_flat_head';
		}
		:host > i.tools_installation_kit:before {
			content: 'tools_installation_kit';
		}
		:host > i.tools_ladder:before {
			content: 'tools_ladder';
		}
		:host > i.tools_level:before {
			content: 'tools_level';
		}
		:host > i.tools_phillips:before {
			content: 'tools_phillips';
		}
		:host > i.tools_pliers_wire_stripper:before {
			content: 'tools_pliers_wire_stripper';
		}
		:host > i.tools_power_drill:before {
			content: 'tools_power_drill';
		}
		:host > i.tools_wrench:before {
			content: 'tools_wrench';
		}
		:host > i.tooltip:before {
			content: 'tooltip';
		}
		:host > i.top_panel_close:before {
			content: 'top_panel_close';
		}
		:host > i.top_panel_open:before {
			content: 'top_panel_open';
		}
		:host > i.topic:before {
			content: 'topic';
		}
		:host > i.tornado:before {
			content: 'tornado';
		}
		:host > i.total_dissolved_solids:before {
			content: 'total_dissolved_solids';
		}
		:host > i.touch_app:before {
			content: 'touch_app';
		}
		:host > i.touchpad_mouse:before {
			content: 'touchpad_mouse';
		}
		:host > i.touchpad_mouse_off:before {
			content: 'touchpad_mouse_off';
		}
		:host > i.tour:before {
			content: 'tour';
		}
		:host > i.toys:before {
			content: 'toys';
		}
		:host > i.toys_and_games:before {
			content: 'toys_and_games';
		}
		:host > i.toys_fan:before {
			content: 'toys_fan';
		}
		:host > i.track_changes:before {
			content: 'track_changes';
		}
		:host > i.traffic:before {
			content: 'traffic';
		}
		:host > i.trail_length:before {
			content: 'trail_length';
		}
		:host > i.trail_length_medium:before {
			content: 'trail_length_medium';
		}
		:host > i.trail_length_short:before {
			content: 'trail_length_short';
		}
		:host > i.train:before {
			content: 'train';
		}
		:host > i.tram:before {
			content: 'tram';
		}
		:host > i.transcribe:before {
			content: 'transcribe';
		}
		:host > i.transfer_within_a_station:before {
			content: 'transfer_within_a_station';
		}
		:host > i.transform:before {
			content: 'transform';
		}
		:host > i.transgender:before {
			content: 'transgender';
		}
		:host > i.transit_enterexit:before {
			content: 'transit_enterexit';
		}
		:host > i.transition_chop:before {
			content: 'transition_chop';
		}
		:host > i.transition_dissolve:before {
			content: 'transition_dissolve';
		}
		:host > i.transition_fade:before {
			content: 'transition_fade';
		}
		:host > i.transition_push:before {
			content: 'transition_push';
		}
		:host > i.transition_slide:before {
			content: 'transition_slide';
		}
		:host > i.translate:before {
			content: 'translate';
		}
		:host > i.transportation:before {
			content: 'transportation';
		}
		:host > i.travel:before {
			content: 'travel';
		}
		:host > i.travel_explore:before {
			content: 'travel_explore';
		}
		:host > i.travel_luggage_and_bags:before {
			content: 'travel_luggage_and_bags';
		}
		:host > i.trending_down:before {
			content: 'trending_down';
		}
		:host > i.trending_flat:before {
			content: 'trending_flat';
		}
		:host > i.trending_up:before {
			content: 'trending_up';
		}
		:host > i.trip:before {
			content: 'trip';
		}
		:host > i.trip_origin:before {
			content: 'trip_origin';
		}
		:host > i.trolley:before {
			content: 'trolley';
		}
		:host > i.trophy:before {
			content: 'trophy';
		}
		:host > i.troubleshoot:before {
			content: 'troubleshoot';
		}
		:host > i.try:before {
			content: 'try';
		}
		:host > i.tsunami:before {
			content: 'tsunami';
		}
		:host > i.tsv:before {
			content: 'tsv';
		}
		:host > i.tty:before {
			content: 'tty';
		}
		:host > i.tune:before {
			content: 'tune';
		}
		:host > i.tungsten:before {
			content: 'tungsten';
		}
		:host > i.turn_left:before {
			content: 'turn_left';
		}
		:host > i.turn_right:before {
			content: 'turn_right';
		}
		:host > i.turn_sharp_left:before {
			content: 'turn_sharp_left';
		}
		:host > i.turn_sharp_right:before {
			content: 'turn_sharp_right';
		}
		:host > i.turn_slight_left:before {
			content: 'turn_slight_left';
		}
		:host > i.turn_slight_right:before {
			content: 'turn_slight_right';
		}
		:host > i.turned_in:before {
			content: 'turned_in';
		}
		:host > i.turned_in_not:before {
			content: 'turned_in_not';
		}
		:host > i.tv:before {
			content: 'tv';
		}
		:host > i.tv_gen:before {
			content: 'tv_gen';
		}
		:host > i.tv_guide:before {
			content: 'tv_guide';
		}
		:host > i.tv_off:before {
			content: 'tv_off';
		}
		:host > i.tv_options_edit_channels:before {
			content: 'tv_options_edit_channels';
		}
		:host > i.tv_options_input_settings:before {
			content: 'tv_options_input_settings';
		}
		:host > i.tv_remote:before {
			content: 'tv_remote';
		}
		:host > i.tv_signin:before {
			content: 'tv_signin';
		}
		:host > i.tv_with_assistant:before {
			content: 'tv_with_assistant';
		}
		:host > i.two_pager:before {
			content: 'two_pager';
		}
		:host > i.two_wheeler:before {
			content: 'two_wheeler';
		}
		:host > i.type_specimen:before {
			content: 'type_specimen';
		}
		:host > i.u_turn_left:before {
			content: 'u_turn_left';
		}
		:host > i.u_turn_right:before {
			content: 'u_turn_right';
		}
		:host > i.ulna_radius:before {
			content: 'ulna_radius';
		}
		:host > i.ulna_radius_alt:before {
			content: 'ulna_radius_alt';
		}
		:host > i.umbrella:before {
			content: 'umbrella';
		}
		:host > i.unarchive:before {
			content: 'unarchive';
		}
		:host > i.undo:before {
			content: 'undo';
		}
		:host > i.unfold_less:before {
			content: 'unfold_less';
		}
		:host > i.unfold_less_double:before {
			content: 'unfold_less_double';
		}
		:host > i.unfold_more:before {
			content: 'unfold_more';
		}
		:host > i.unfold_more_double:before {
			content: 'unfold_more_double';
		}
		:host > i.ungroup:before {
			content: 'ungroup';
		}
		:host > i.universal_currency:before {
			content: 'universal_currency';
		}
		:host > i.universal_currency_alt:before {
			content: 'universal_currency_alt';
		}
		:host > i.universal_local:before {
			content: 'universal_local';
		}
		:host > i.unknown_2:before {
			content: 'unknown_2';
		}
		:host > i.unknown_5:before {
			content: 'unknown_5';
		}
		:host > i.unknown_document:before {
			content: 'unknown_document';
		}
		:host > i.unknown_med:before {
			content: 'unknown_med';
		}
		:host > i.unlicense:before {
			content: 'unlicense';
		}
		:host > i.unpublished:before {
			content: 'unpublished';
		}
		:host > i.unsubscribe:before {
			content: 'unsubscribe';
		}
		:host > i.upcoming:before {
			content: 'upcoming';
		}
		:host > i.update:before {
			content: 'update';
		}
		:host > i.update_disabled:before {
			content: 'update_disabled';
		}
		:host > i.upgrade:before {
			content: 'upgrade';
		}
		:host > i.upload:before {
			content: 'upload';
		}
		:host > i.upload_2:before {
			content: 'upload_2';
		}
		:host > i.upload_file:before {
			content: 'upload_file';
		}
		:host > i.urology:before {
			content: 'urology';
		}
		:host > i.usb:before {
			content: 'usb';
		}
		:host > i.usb_off:before {
			content: 'usb_off';
		}
		:host > i.user_attributes:before {
			content: 'user_attributes';
		}
		:host > i.vaccines:before {
			content: 'vaccines';
		}
		:host > i.vacuum:before {
			content: 'vacuum';
		}
		:host > i.valve:before {
			content: 'valve';
		}
		:host > i.vape_free:before {
			content: 'vape_free';
		}
		:host > i.vaping_rooms:before {
			content: 'vaping_rooms';
		}
		:host > i.variable_add:before {
			content: 'variable_add';
		}
		:host > i.variable_insert:before {
			content: 'variable_insert';
		}
		:host > i.variable_remove:before {
			content: 'variable_remove';
		}
		:host > i.variables:before {
			content: 'variables';
		}
		:host > i.ventilator:before {
			content: 'ventilator';
		}
		:host > i.verified:before {
			content: 'verified';
		}
		:host > i.verified_user:before {
			content: 'verified_user';
		}
		:host > i.vertical_align_bottom:before {
			content: 'vertical_align_bottom';
		}
		:host > i.vertical_align_center:before {
			content: 'vertical_align_center';
		}
		:host > i.vertical_align_top:before {
			content: 'vertical_align_top';
		}
		:host > i.vertical_distribute:before {
			content: 'vertical_distribute';
		}
		:host > i.vertical_shades:before {
			content: 'vertical_shades';
		}
		:host > i.vertical_shades_closed:before {
			content: 'vertical_shades_closed';
		}
		:host > i.vertical_split:before {
			content: 'vertical_split';
		}
		:host > i.vibration:before {
			content: 'vibration';
		}
		:host > i.video_call:before {
			content: 'video_call';
		}
		:host > i.video_camera_back:before {
			content: 'video_camera_back';
		}
		:host > i.video_camera_front:before {
			content: 'video_camera_front';
		}
		:host > i.video_camera_front_off:before {
			content: 'video_camera_front_off';
		}
		:host > i.video_chat:before {
			content: 'video_chat';
		}
		:host > i.video_file:before {
			content: 'video_file';
		}
		:host > i.video_label:before {
			content: 'video_label';
		}
		:host > i.video_library:before {
			content: 'video_library';
		}
		:host > i.video_search:before {
			content: 'video_search';
		}
		:host > i.video_settings:before {
			content: 'video_settings';
		}
		:host > i.video_stable:before {
			content: 'video_stable';
		}
		:host > i.videocam:before {
			content: 'videocam';
		}
		:host > i.videocam_off:before {
			content: 'videocam_off';
		}
		:host > i.videogame_asset:before {
			content: 'videogame_asset';
		}
		:host > i.videogame_asset_off:before {
			content: 'videogame_asset_off';
		}
		:host > i.view_agenda:before {
			content: 'view_agenda';
		}
		:host > i.view_array:before {
			content: 'view_array';
		}
		:host > i.view_carousel:before {
			content: 'view_carousel';
		}
		:host > i.view_column:before {
			content: 'view_column';
		}
		:host > i.view_column_2:before {
			content: 'view_column_2';
		}
		:host > i.view_comfy:before {
			content: 'view_comfy';
		}
		:host > i.view_comfy_alt:before {
			content: 'view_comfy_alt';
		}
		:host > i.view_compact:before {
			content: 'view_compact';
		}
		:host > i.view_compact_alt:before {
			content: 'view_compact_alt';
		}
		:host > i.view_cozy:before {
			content: 'view_cozy';
		}
		:host > i.view_day:before {
			content: 'view_day';
		}
		:host > i.view_headline:before {
			content: 'view_headline';
		}
		:host > i.view_in_ar:before {
			content: 'view_in_ar';
		}
		:host > i.view_in_ar_new:before {
			content: 'view_in_ar_new';
		}
		:host > i.view_in_ar_off:before {
			content: 'view_in_ar_off';
		}
		:host > i.view_kanban:before {
			content: 'view_kanban';
		}
		:host > i.view_list:before {
			content: 'view_list';
		}
		:host > i.view_module:before {
			content: 'view_module';
		}
		:host > i.view_quilt:before {
			content: 'view_quilt';
		}
		:host > i.view_sidebar:before {
			content: 'view_sidebar';
		}
		:host > i.view_stream:before {
			content: 'view_stream';
		}
		:host > i.view_timeline:before {
			content: 'view_timeline';
		}
		:host > i.view_week:before {
			content: 'view_week';
		}
		:host > i.vignette:before {
			content: 'vignette';
		}
		:host > i.villa:before {
			content: 'villa';
		}
		:host > i.visibility:before {
			content: 'visibility';
		}
		:host > i.visibility_lock:before {
			content: 'visibility_lock';
		}
		:host > i.visibility_off:before {
			content: 'visibility_off';
		}
		:host > i.vital_signs:before {
			content: 'vital_signs';
		}
		:host > i.vitals:before {
			content: 'vitals';
		}
		:host > i.voice_chat:before {
			content: 'voice_chat';
		}
		:host > i.voice_over_off:before {
			content: 'voice_over_off';
		}
		:host > i.voice_selection:before {
			content: 'voice_selection';
		}
		:host > i.voicemail:before {
			content: 'voicemail';
		}
		:host > i.volcano:before {
			content: 'volcano';
		}
		:host > i.volume_down:before {
			content: 'volume_down';
		}
		:host > i.volume_down_alt:before {
			content: 'volume_down_alt';
		}
		:host > i.volume_mute:before {
			content: 'volume_mute';
		}
		:host > i.volume_off:before {
			content: 'volume_off';
		}
		:host > i.volume_up:before {
			content: 'volume_up';
		}
		:host > i.volunteer_activism:before {
			content: 'volunteer_activism';
		}
		:host > i.voting_chip:before {
			content: 'voting_chip';
		}
		:host > i.vpn_key:before {
			content: 'vpn_key';
		}
		:host > i.vpn_key_alert:before {
			content: 'vpn_key_alert';
		}
		:host > i.vpn_key_off:before {
			content: 'vpn_key_off';
		}
		:host > i.vpn_lock:before {
			content: 'vpn_lock';
		}
		:host > i.vr180_create2d:before {
			content: 'vr180_create2d';
		}
		:host > i.vr180_create2d_off:before {
			content: 'vr180_create2d_off';
		}
		:host > i.vrpano:before {
			content: 'vrpano';
		}
		:host > i.wall_art:before {
			content: 'wall_art';
		}
		:host > i.wall_lamp:before {
			content: 'wall_lamp';
		}
		:host > i.wallet:before {
			content: 'wallet';
		}
		:host > i.wallpaper:before {
			content: 'wallpaper';
		}
		:host > i.wallpaper_slideshow:before {
			content: 'wallpaper_slideshow';
		}
		:host > i.ward:before {
			content: 'ward';
		}
		:host > i.warehouse:before {
			content: 'warehouse';
		}
		:host > i.warning:before {
			content: 'warning';
		}
		:host > i.warning_amber:before {
			content: 'warning_amber';
		}
		:host > i.warning_off:before {
			content: 'warning_off';
		}
		:host > i.wash:before {
			content: 'wash';
		}
		:host > i.watch:before {
			content: 'watch';
		}
		:host > i.watch_button_press:before {
			content: 'watch_button_press';
		}
		:host > i.watch_later:before {
			content: 'watch_later';
		}
		:host > i.watch_off:before {
			content: 'watch_off';
		}
		:host > i.watch_screentime:before {
			content: 'watch_screentime';
		}
		:host > i.watch_wake:before {
			content: 'watch_wake';
		}
		:host > i.water:before {
			content: 'water';
		}
		:host > i.water_bottle:before {
			content: 'water_bottle';
		}
		:host > i.water_bottle_large:before {
			content: 'water_bottle_large';
		}
		:host > i.water_damage:before {
			content: 'water_damage';
		}
		:host > i.water_do:before {
			content: 'water_do';
		}
		:host > i.water_drop:before {
			content: 'water_drop';
		}
		:host > i.water_ec:before {
			content: 'water_ec';
		}
		:host > i.water_full:before {
			content: 'water_full';
		}
		:host > i.water_heater:before {
			content: 'water_heater';
		}
		:host > i.water_lock:before {
			content: 'water_lock';
		}
		:host > i.water_loss:before {
			content: 'water_loss';
		}
		:host > i.water_lux:before {
			content: 'water_lux';
		}
		:host > i.water_medium:before {
			content: 'water_medium';
		}
		:host > i.water_orp:before {
			content: 'water_orp';
		}
		:host > i.water_ph:before {
			content: 'water_ph';
		}
		:host > i.water_pump:before {
			content: 'water_pump';
		}
		:host > i.water_voc:before {
			content: 'water_voc';
		}
		:host > i.waterfall_chart:before {
			content: 'waterfall_chart';
		}
		:host > i.waves:before {
			content: 'waves';
		}
		:host > i.waving_hand:before {
			content: 'waving_hand';
		}
		:host > i.wb_auto:before {
			content: 'wb_auto';
		}
		:host > i.wb_cloudy:before {
			content: 'wb_cloudy';
		}
		:host > i.wb_incandescent:before {
			content: 'wb_incandescent';
		}
		:host > i.wb_iridescent:before {
			content: 'wb_iridescent';
		}
		:host > i.wb_shade:before {
			content: 'wb_shade';
		}
		:host > i.wb_sunny:before {
			content: 'wb_sunny';
		}
		:host > i.wb_twilight:before {
			content: 'wb_twilight';
		}
		:host > i.wc:before {
			content: 'wc';
		}
		:host > i.weather_hail:before {
			content: 'weather_hail';
		}
		:host > i.weather_mix:before {
			content: 'weather_mix';
		}
		:host > i.weather_snowy:before {
			content: 'weather_snowy';
		}
		:host > i.web:before {
			content: 'web';
		}
		:host > i.web_asset:before {
			content: 'web_asset';
		}
		:host > i.web_asset_off:before {
			content: 'web_asset_off';
		}
		:host > i.web_stories:before {
			content: 'web_stories';
		}
		:host > i.web_traffic:before {
			content: 'web_traffic';
		}
		:host > i.webhook:before {
			content: 'webhook';
		}
		:host > i.weekend:before {
			content: 'weekend';
		}
		:host > i.weight:before {
			content: 'weight';
		}
		:host > i.west:before {
			content: 'west';
		}
		:host > i.whatshot:before {
			content: 'whatshot';
		}
		:host > i.wheelchair_pickup:before {
			content: 'wheelchair_pickup';
		}
		:host > i.where_to_vote:before {
			content: 'where_to_vote';
		}
		:host > i.widgets:before {
			content: 'widgets';
		}
		:host > i.width:before {
			content: 'width';
		}
		:host > i.width_full:before {
			content: 'width_full';
		}
		:host > i.width_normal:before {
			content: 'width_normal';
		}
		:host > i.width_wide:before {
			content: 'width_wide';
		}
		:host > i.wifi:before {
			content: 'wifi';
		}
		:host > i.wifi_1_bar:before {
			content: 'wifi_1_bar';
		}
		:host > i.wifi_2_bar:before {
			content: 'wifi_2_bar';
		}
		:host > i.wifi_add:before {
			content: 'wifi_add';
		}
		:host > i.wifi_calling:before {
			content: 'wifi_calling';
		}
		:host > i.wifi_calling_1:before {
			content: 'wifi_calling_1';
		}
		:host > i.wifi_calling_2:before {
			content: 'wifi_calling_2';
		}
		:host > i.wifi_calling_3:before {
			content: 'wifi_calling_3';
		}
		:host > i.wifi_channel:before {
			content: 'wifi_channel';
		}
		:host > i.wifi_find:before {
			content: 'wifi_find';
		}
		:host > i.wifi_home:before {
			content: 'wifi_home';
		}
		:host > i.wifi_lock:before {
			content: 'wifi_lock';
		}
		:host > i.wifi_notification:before {
			content: 'wifi_notification';
		}
		:host > i.wifi_off:before {
			content: 'wifi_off';
		}
		:host > i.wifi_password:before {
			content: 'wifi_password';
		}
		:host > i.wifi_protected_setup:before {
			content: 'wifi_protected_setup';
		}
		:host > i.wifi_proxy:before {
			content: 'wifi_proxy';
		}
		:host > i.wifi_tethering:before {
			content: 'wifi_tethering';
		}
		:host > i.wifi_tethering_error:before {
			content: 'wifi_tethering_error';
		}
		:host > i.wifi_tethering_off:before {
			content: 'wifi_tethering_off';
		}
		:host > i.wind_power:before {
			content: 'wind_power';
		}
		:host > i.window:before {
			content: 'window';
		}
		:host > i.window_closed:before {
			content: 'window_closed';
		}
		:host > i.window_open:before {
			content: 'window_open';
		}
		:host > i.window_sensor:before {
			content: 'window_sensor';
		}
		:host > i.wine_bar:before {
			content: 'wine_bar';
		}
		:host > i.woman:before {
			content: 'woman';
		}
		:host > i.woman_2:before {
			content: 'woman_2';
		}
		:host > i.work:before {
			content: 'work';
		}
		:host > i.work_alert:before {
			content: 'work_alert';
		}
		:host > i.work_history:before {
			content: 'work_history';
		}
		:host > i.work_off:before {
			content: 'work_off';
		}
		:host > i.work_outline:before {
			content: 'work_outline';
		}
		:host > i.work_update:before {
			content: 'work_update';
		}
		:host > i.workflow:before {
			content: 'workflow';
		}
		:host > i.workspace_premium:before {
			content: 'workspace_premium';
		}
		:host > i.workspaces:before {
			content: 'workspaces';
		}
		:host > i.workspaces_outline:before {
			content: 'workspaces_outline';
		}
		:host > i.wounds_injuries:before {
			content: 'wounds_injuries';
		}
		:host > i.wrap_text:before {
			content: 'wrap_text';
		}
		:host > i.wrist:before {
			content: 'wrist';
		}
		:host > i.wrong_location:before {
			content: 'wrong_location';
		}
		:host > i.wysiwyg:before {
			content: 'wysiwyg';
		}
		:host > i.yard:before {
			content: 'yard';
		}
		:host > i.your_trips:before {
			content: 'your_trips';
		}
		:host > i.youtube_activity:before {
			content: 'youtube_activity';
		}
		:host > i.youtube_searched_for:before {
			content: 'youtube_searched_for';
		}
		:host > i.zone_person_alert:before {
			content: 'zone_person_alert';
		}
		:host > i.zone_person_idle:before {
			content: 'zone_person_idle';
		}
		:host > i.zone_person_urgent:before {
			content: 'zone_person_urgent';
		}
		:host > i.zoom_in:before {
			content: 'zoom_in';
		}
		:host > i.zoom_in_map:before {
			content: 'zoom_in_map';
		}
		:host > i.zoom_out:before {
			content: 'zoom_out';
		}
		:host > i.zoom_out_map:before {
			content: 'zoom_out_map';
		}
	`,"KOL-SKIP-NAV":ee`
		kol-link-wc > a > kol-span-wc {
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: 2px;
			gap: 0.5rem;
			line-height: 1rem;
			padding: 8px 14px;
			background-color: var(--color-ocean);
			border-color: var(--color-ocean);
			color: var(--color-white);
			cursor: pointer;
		}
	`,"KOL-SPLIT-BUTTON":ee`
		:host {
			font-family: var(--font-family);
		}
		.popover {
			background: #fff;
		}
	`,"KOL-SPIN":ee`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: #fc0;
			}
		}
	`});const oe=Z.createTheme("default",{GLOBAL:"@layer kol-theme-global {\n  :host {\n    --border-radius: var(--kolibri-border-radius, 5px);\n    --font-family: var(--kolibri-font-family, BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif);\n    --font-size: var(--kolibri-font-size, 16px);\n    --spacing: var(--kolibri-spacing, 0.25rem);\n    --border-width: var(--kolibri-border-width, 1px);\n    --color-primary: var(--kolibri-color-primary, #004b76);\n    --color-primary-variant: var(--kolibri-color-primary-variant, #0077b6);\n    --color-danger: var(--kolibri-color-danger, #c0003c);\n    --color-warning: var(--kolibri-color-warning, #c44931);\n    --color-success: var(--kolibri-color-success, #005c45);\n    --color-subtle: var(--kolibri-color-subtle, #576164);\n    --color-light: var(--kolibri-color-light, #ffffff);\n    --color-text: var(--kolibri-color-text, #202020);\n    --color-mute: var(--kolibri-color-mute, #f2f3f4);\n    --color-mute-variant: var(--kolibri-color-mute-variant, #bec5c9);\n  }\n  :host {\n    background-color: transparent; /* Reset global background-color defined by components */\n  }\n  * {\n    box-sizing: border-box;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n    padding: 0;\n  }\n  *[tabindex]:focus,\n  kol-input:not(.checkbox, .radio) .input:focus-within,\n  kol-input:is(.checkbox, .radio) input:focus,\n  summary:focus {\n    cursor: pointer;\n    outline-color: var(--color-primary-variant);\n    outline-offset: 2px;\n    outline-style: solid;\n    outline-width: 3px;\n    transition: outline-offset 0.2s linear;\n  }\n  kol-heading-wc {\n    font-weight: 700;\n  }\n  kol-tooltip-wc .tooltip-floating {\n    border: var(--border-width) solid var(--color-subtle);\n    border-radius: var(--border-radius);\n  }\n  kol-tooltip-wc .tooltip-arrow {\n    border: var(--border-width) solid var(--color-subtle);\n  }\n  kol-tooltip-wc .tooltip-area {\n    background-color: var(--color-light);\n  }\n  kol-tooltip-wc .tooltip-content {\n    border-radius: var(--border-radius);\n    line-height: 1.5;\n    padding: 0.5rem 0.75rem;\n  }\n  kol-span-wc,\n  kol-span-wc > span {\n    gap: 0.5rem;\n  }\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n}","KOL-ABBR":"@layer kol-theme-component {\n  abbr {\n    border-bottom: dashed var(--color-text) 1px;\n    text-decoration: none !important;\n  }\n}","KOL-ACCORDION":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-span-wc > span {\n    display: flex;\n    place-items: baseline center;\n    text-align: left;\n  }\n  :host > div > kol-heading-wc button {\n    border-radius: var(--border-radius);\n    min-height: 2.2rem;\n    padding: 12px 8px;\n  }\n  :host > div > kol-heading-wc button kol-span-wc {\n    font-weight: 700;\n    font-size: 1.125rem;\n    line-height: 20px;\n    gap: 0.5rem;\n  }\n  :host > div > kol-heading-wc button kol-span-wc > span {\n    gap: 0.5em;\n  }\n  :host > div > kol-heading-wc button kol-icon {\n    color: var(--color-primary);\n    font-size: 1rem;\n  }\n  :host > div {\n    width: 100%;\n    height: 100%;\n    display: grid;\n  }\n  :host > div div[class=header],\n  :host > div[class*=open] div[class=content] {\n    margin: 0;\n  }\n  :host > div div[class=content] {\n    padding-left: 2.25em;\n    padding-bottom: 12px;\n    padding-right: 8px;\n  }\n  button:focus {\n    outline: none;\n  }\n  :host > .accordion:focus-within {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n    cursor: pointer;\n  }\n}","KOL-ALERT":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  .msg {\n    border-width: 0;\n  }\n  kol-alert-wc {\n    border-width: var(--border-width);\n    border-style: solid;\n    border-radius: var(--border-radius);\n    display: flex;\n    width: 100%;\n    overflow: unset;\n    border-color: transparent;\n    background-color: var(--color-light);\n  }\n  kol-alert-wc > .heading {\n    display: flex;\n    gap: 0.5em;\n    place-items: center;\n  }\n  kol-alert-wc > .heading > div {\n    display: grid;\n    gap: 0.25rem;\n  }\n  .msg > .heading > kol-icon {\n    place-self: baseline;\n  }\n  kol-alert-wc > .heading > kol-button-wc.close {\n    place-self: center;\n  }\n  .msg {\n    align-items: start;\n  }\n  .default {\n    border-color: var(--color-subtle);\n  }\n  .default.msg .heading-icon {\n    color: var(--color-subtle);\n  }\n  .error {\n    border-color: var(--color-danger);\n  }\n  .error.msg .heading-icon {\n    color: var(--color-danger);\n  }\n  .info {\n    border-color: var(--color-primary);\n  }\n  .info.msg .heading-icon {\n    color: var(--color-primary);\n  }\n  .success {\n    border-color: var(--color-success);\n  }\n  .success.msg .heading-icon {\n    color: var(--color-success);\n  }\n  .warning {\n    border-color: var(--color-warning);\n  }\n  .warning.msg .heading-icon {\n    color: var(--color-warning);\n  }\n  .heading-icon {\n    color: var(--color-light);\n  }\n  kol-alert-wc .heading .heading-icon {\n    padding: 0;\n  }\n  .msg > .heading > .heading-icon {\n    padding-top: 0;\n    place-items: baseline;\n  }\n  .msg > .heading > div > kol-heading-wc {\n    padding-top: calc(--var-spacing / 2);\n  }\n  .msg.default .heading > div > kol-heading-wc {\n    color: var(--color-subtle);\n  }\n  .msg.error .heading > div > kol-heading-wc {\n    color: var(--color-danger);\n  }\n  .msg.info .heading > div > kol-heading-wc {\n    color: var(--color-primary);\n  }\n  .msg.success .heading > div > kol-heading-wc {\n    color: var(--color-success);\n  }\n  .msg.warning .heading > div > kol-heading-wc {\n    color: var(--color-warning);\n  }\n  .msg.default .close .icon {\n    color: var(--color-subtle);\n  }\n  .msg.error .close .icon {\n    color: var(--color-danger);\n  }\n  .msg.info .close .icon {\n    color: var(--color-primary);\n  }\n  .msg.success .close .icon {\n    color: var(--color-success);\n  }\n  .msg.warning .close .icon {\n    color: var(--color-warning);\n  }\n  .card {\n    border-width: var(--border-width);\n    border-style: solid;\n    filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));\n    flex-direction: column;\n  }\n  .card > .heading {\n    padding: 0.5rem 1rem;\n  }\n  .card[_has-closer] > .heading {\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-right: 0;\n  }\n  .card > .heading > div {\n    width: 100%;\n    min-height: 1.25rem;\n  }\n  .card > .heading .heading-icon {\n    justify-self: right;\n    margin-top: -4px;\n  }\n  .card > .heading kol-heading-wc {\n    width: 100%;\n    color: var(--color-light);\n    display: flex;\n    font-size: 1.25rem;\n    line-height: 1.25rem;\n  }\n  .card > .heading kol-heading-wc > * {\n    margin: auto 0;\n  }\n  .card > .content {\n    padding: 1rem;\n  }\n  .card.default > .heading {\n    background-color: var(--color-subtle);\n  }\n  .card.error > .heading {\n    background-color: var(--color-danger);\n  }\n  .card.info > .heading {\n    background-color: var(--color-primary);\n  }\n  .card.success > .heading {\n    background-color: var(--color-success);\n  }\n  .card.warning > .heading {\n    background-color: var(--color-warning);\n  }\n  :is(.error, .info, .success, .warning) .heading-icon {\n    font-size: 1.25rem;\n  }\n  .card > div > .content {\n    grid-row: 2;\n    grid-column: 1/span 2;\n  }\n  .card.default .close {\n    background-color: var(--color-subtle);\n  }\n  .card.error .close {\n    background-color: var(--color-danger);\n  }\n  .card.info .close {\n    background-color: var(--color-primary);\n  }\n  .card.success .close {\n    background-color: var(--color-success);\n  }\n  .card.warning .close {\n    background-color: var(--color-warning);\n  }\n  .close > button {\n    border-radius: 50%; /* visible on focus */\n    color: var(--color-light);\n    cursor: pointer;\n    height: var(--a11y-min-size);\n    width: var(--a11y-min-size);\n  }\n  .close > button.hide-label kol-icon {\n    display: flex;\n    width: 1em;\n    height: 1em;\n    font-size: 1.2rem;\n  }\n  .close > button:active {\n    box-shadow: none;\n    outline: none;\n  }\n}","KOL-AVATAR":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n}","KOL-BADGE":"@layer kol-theme-component {\n  :host {\n    display: inline-block;\n    font-family: var(--font-family);\n    font-size: inherit;\n  }\n  :host > span {\n    border-radius: var(--border-radius);\n    display: inline-flex;\n    font-style: normal;\n  }\n  :host > span.smart-button {\n    align-items: center;\n  }\n  :host > span kol-button-wc:hover > button {\n    background-color: var(--color-primary-variant);\n    color: var(--color-light);\n  }\n  :host > span kol-button-wc > button {\n    color: inherit;\n    border-top-right-radius: var(--border-radius);\n    border-bottom-right-radius: var(--border-radius);\n    padding: 0.2rem;\n  }\n  :host > span kol-span-wc {\n    padding: 0.25rem 0.75rem;\n  }\n  :host > span > kol-span-wc {\n    align-items: center;\n    font-style: normal;\n    gap: 0.5rem;\n  }\n  :host > span > kol-span-wc > span {\n    display: flex;\n    gap: 0.25rem;\n  }\n}","KOL-BREADCRUMB":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon {\n    font-size: 0.75rem;\n    color: var(--color-subtle);\n  }\n  kol-link::part(icon) {\n    font-size: 1.25rem;\n  }\n  ul li > :is(span, kol-link) {\n    line-height: 1.25rem;\n    height: 20px;\n  }\n  ul li:last-child > span {\n    color: var(--color-subtle);\n  }\n  kol-link {\n    font-family: var(--font-family);\n  }\n}","KOL-BUTTON":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  :is(a, button):focus {\n    outline: none;\n  }\n  :is(a, button):focus kol-span-wc {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n  :is(a, button) > kol-span-wc {\n    font-weight: 700;\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: var(--border-width);\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    padding: 8px 14px;\n    text-align: center;\n    transition-duration: 0.5s;\n    transition-property: background-color, color, border-color;\n  }\n  .primary :is(a, button) > kol-span-wc,\n  .primary :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n    color: var(--color-light);\n  }\n  .secondary :is(a, button) > kol-span-wc,\n  .secondary :is(a, button):disabled:hover > kol-span-wc,\n  .normal :is(a, button) > kol-span-wc,\n  .normal :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-light);\n    border-color: var(--color-primary);\n    color: var(--color-primary);\n  }\n  .danger :is(a, button) > kol-span-wc,\n  .danger :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-danger);\n    border-color: var(--color-danger);\n    color: var(--color-light);\n  }\n  .ghost :is(a, button) > kol-span-wc,\n  .ghost :is(a, button):disabled:hover > kol-span-wc {\n    border-color: var(--color-light);\n    background-color: var(--color-light);\n    box-shadow: none;\n    color: var(--color-primary);\n  }\n  /*-----------*/\n  .primary :is(a, button):active > kol-span-wc,\n  .primary :is(a, button):hover > kol-span-wc,\n  .secondary :is(a, button):active > kol-span-wc,\n  .secondary :is(a, button):hover > kol-span-wc,\n  .normal :is(a, button):active > kol-span-wc,\n  .normal :is(a, button):hover > kol-span-wc,\n  .danger :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):hover > kol-span-wc,\n  .ghost :is(a, button):active > kol-span-wc,\n  .ghost :is(a, button):hover > kol-span-wc {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  }\n  .danger :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):hover > kol-span-wc {\n    background-color: var(--color-danger);\n    border-color: var(--color-danger);\n  }\n  :is(a, button):disabled:hover > kol-span-wc,\n  :is(a, button):focus:hover > kol-span-wc {\n    box-shadow: none;\n  }\n  .primary :is(a, button):active > kol-span-wc,\n  .secondary :is(a, button):active > kol-span-wc,\n  .normal :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):active > kol-span-wc,\n  .ghost :is(a, button):active > kol-span-wc {\n    border-color: var(--color-light);\n    box-shadow: none;\n    outline: none;\n  }\n  :is(a, button).hide-label > kol-span-wc {\n    padding: 0.8rem;\n    width: unset;\n  }\n  :is(a, button).hide-label > kol-span-wc > span > span {\n    display: none;\n  }\n  :is(a, button).loading > kol-span-wc kol-icon {\n    animation: spin 5s infinite linear;\n  }\n  /** small ghost button */\n  .ghost :is(a, button).small > kol-span-wc {\n    border: none;\n    background-color: transparent;\n    box-shadow: none;\n  }\n  .ghost :is(a, button).small > kol-span-wc > span {\n    border-radius: 1.5em;\n    border-style: solid;\n    border-width: var(--border-width);\n    border-color: var(--color-light);\n    background-color: var(--color-light);\n  }\n  .ghost :is(a, button).small:active > kol-span-wc > span,\n  .ghost :is(a, button).small:hover > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent:active > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent:hover > kol-span-wc > span {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  }\n  /** :is(a,button) with transparent background */\n  :is(a, button).transparent > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent > kol-span-wc > span,\n  :is(a, button).transparent > kol-span-wc {\n    background-color: transparent;\n    border-color: transparent;\n  }\n  .access-key-hint {\n    background: var(--color-mute-variant);\n    border-radius: 3px;\n    color: var(--color-text);\n    padding: 0 0.3em;\n  }\n}","KOL-BUTTON-GROUP":"@layer kol-theme-component {\n  :host > kol-button-group-wc {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing);\n  }\n}","KOL-BUTTON-LINK":"@layer kol-theme-component {\n  :is(a, button) {\n    color: var(--color-primary);\n    font-style: normal;\n    font-weight: 400;\n    text-decoration-line: underline;\n    font-size: inherit;\n  }\n  :is(a, button):focus {\n    outline: none;\n  }\n  :is(a, button):focus kol-span-wc {\n    border-radius: var(--border-radius);\n    outline: calc(var(--border-width) * 2) solid;\n  }\n  a:hover:not([aria-disabled]),\n  button:hover:not([disabled]) {\n    text-decoration-thickness: 0.25em;\n  }\n  :is(a, button):visited {\n    color: var(--visited);\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  .skip {\n    left: -99999px;\n    overflow: hidden;\n    position: absolute;\n    z-index: 9999999;\n  }\n  .skip:focus {\n    background: white;\n    left: unset;\n    position: unset;\n  }\n  .access-key-hint {\n    background: var(--color-mute-variant);\n    border-radius: 3px;\n    color: var(--color-text);\n    padding: 0 0.3em;\n  }\n}","KOL-CARD":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  /* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */\n  :host > div {\n    display: grid;\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-light);\n    grid-template-rows: min-content 2fr min-content;\n    box-shadow: 0 0 0.25rem var(--color-subtle);\n    border-radius: var(--border-radius);\n  }\n  :host kol-heading-wc {\n    line-height: 1.75rem;\n  }\n  :host div.header {\n    padding: 1rem 1rem 0.5rem 1rem;\n  }\n  :host div.content {\n    padding: 0.5rem 1rem 1rem;\n    overflow: hidden;\n  }\n  :host div.footer {\n    padding: 0.5rem 1rem;\n  }\n}","KOL-DETAILS":"@layer kol-theme-component {\n  details > summary {\n    border-radius: var(--border-radius);\n    font-family: var(--font-family);\n  }\n  details kol-indented-text {\n    margin: 0.25rem 0 0 0.65rem;\n  }\n  kol-icon {\n    font-size: 1.2rem;\n  }\n}","KOL-HEADING":"@layer kol-theme-component {\n  .headline-h1,\n  .headline-h2,\n  .headline-h3,\n  .headline-h4,\n  .headline-h5,\n  .headline-h6 {\n    color: inherit;\n    font-style: normal;\n    font-family: var(--font-family);\n  }\n  .headline-h1,\n  .headline-h2,\n  .headline-h3 {\n    font-weight: 700;\n  }\n  .headline-h1 {\n    font-size: 1.5rem;\n    line-height: 1.75rem;\n  }\n  .headline-h2 {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .headline-h3 {\n    font-size: 1.125rem;\n    line-height: 1.5rem;\n  }\n}","KOL-ICON":"@layer kol-theme-component {\n  :host {\n    width: 1em;\n    height: 1em;\n  }\n  :host > i {\n    width: 1em;\n    height: 1em;\n  }\n}","KOL-INDENTED-TEXT":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  :host > div {\n    background-color: var(--color-light);\n    border-left: none;\n    box-shadow: -2px 0px 0px var(--color-primary-variant);\n    padding: 0 0.5rem;\n    width: 100%;\n  }\n}","KOL-INPUT-CHECKBOX":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  :host kol-input {\n    display: grid;\n    align-items: center;\n    justify-items: left;\n    width: 100%;\n    min-height: var(--a11y-min-size);\n    gap: 0.4rem;\n  }\n  :host kol-input.default {\n    grid-template-columns: 1.5rem auto;\n  }\n  :host kol-input.switch {\n    grid-template-columns: 3.5rem auto;\n  }\n  :host kol-input.button {\n    gap: 0.4rem 0;\n  }\n  .checkbox-container {\n    justify-content: flex-start;\n  }\n  :host kol-input > div.input {\n    display: inherit;\n    min-height: var(--a11y-min-size);\n    order: 2;\n  }\n  :host kol-input > div.input input {\n    margin: 0px;\n  }\n  :host kol-input > label {\n    cursor: pointer;\n    order: 3;\n  }\n  :host kol-input > kol-alert.error {\n    order: 1;\n    padding-top: calc(var(--spacing) / 2);\n    grid-column: span 2/auto;\n  }\n  :host kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  :host kol-input.error input:focus,\n  kol-input.error select:focus,\n  kol-input.error textarea:focus {\n    outline-color: var(--color-danger) !important;\n  }\n  :host kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  :host input {\n    cursor: pointer;\n    order: 1;\n    width: 100%;\n    border-color: var(--color-subtle);\n    border-width: 2px;\n    border-style: solid;\n    border-radius: var(--border-radius);\n    line-height: 24px;\n    font-size: 1rem;\n  }\n  :host input:hover {\n    border-color: var(--color-primary);\n    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n  }\n  :host input:focus:hover {\n    box-shadow: none;\n  }\n  :host input:active {\n    box-shadow: none;\n  }\n  :host kol-alert {\n    display: block;\n    width: 100%;\n  }\n  /* CHECKBOX */\n  :host kol-input label span {\n    margin-top: 0.125rem;\n  }\n  :host .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  :host kol-input input[type=checkbox] {\n    appearance: none;\n    background-color: white;\n    cursor: pointer;\n    transition: 0.5s;\n  }\n  :host kol-input input[type=checkbox]:checked {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n  }\n  :host kol-input.default input[type=checkbox] {\n    border-radius: var(--border-radius);\n    height: 1.5rem;\n    min-width: 1.5rem;\n    width: 1.5rem;\n  }\n  :host kol-input.default input[type=checkbox]:indeterminate {\n    background-color: var(--color-primary);\n  }\n  :host kol-input.default .icon {\n    color: var(--color-light);\n    margin-left: 0.25rem;\n  }\n  :host kol-input.switch input[type=checkbox] {\n    background-color: var(--color-subtle);\n    border-radius: 1.25em;\n    border-width: 0;\n    display: block;\n    height: 1.5em;\n    min-width: 3.5em;\n    position: relative;\n    width: 3.5em;\n  }\n  :host kol-input.switch input[type=checkbox]:before {\n    width: 1.25em;\n    height: 1.25em;\n    left: calc(0.25em - 2px);\n    top: calc(0.25em - 2px);\n    border-radius: 1.25em;\n    background-color: white;\n    position: absolute;\n  }\n  :host kol-input.switch input[type=checkbox]:checked {\n    background-color: var(--color-primary);\n  }\n  :host kol-input.switch input[type=checkbox]:checked:before {\n    transform: translateX(2em);\n  }\n  :host kol-input.switch input[type=checkbox]:indeterminate:before {\n    transform: translateX(1em);\n  }\n  .switch .icon {\n    width: 1.25em;\n    height: 1.25em;\n    left: 2px;\n  }\n  .switch.checked .icon {\n    transform: translate(2em, -50%);\n  }\n  .switch.indeterminate .icon {\n    transform: translate(1em, -50%);\n  }\n  .button:focus-within {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n}',"KOL-INPUT-COLOR":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input[type=color] {\n    border: none;\n    min-height: 40px !important;\n  }\n  input[type=color] {\n    background-color: transparent;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}',"KOL-INPUT-DATE":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}',"KOL-INPUT-EMAIL":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}',"KOL-INPUT-FILE":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  kol-input .input input[type=file] {\n    padding-top: calc(0.5em + 2px);\n  }\n  input {\n    border: none;\n  }\n  input[type=file] {\n    background-color: transparent;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, select, textarea, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}',"KOL-INPUT-NUMBER":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}',"KOL-INPUT-PASSWORD":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, select, textarea, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}',"KOL-INPUT-RADIO":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  label {\n    cursor: pointer;\n    display: grid;\n    line-height: 20px;\n    gap: calc(var(--spacing) * 2);\n    width: 100%;\n  }\n  input {\n    cursor: pointer;\n    width: 100%;\n    border-color: var(--color-subtle);\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 5px;\n    line-height: 24px;\n  }\n  input:hover {\n    border-color: var(--color-primary);\n    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n  }\n  input:focus:hover {\n    box-shadow: none;\n  }\n  input:hover {\n    border-color: var(--color-primary);\n  }\n  kol-alert {\n    display: block;\n    width: 100%;\n  }\n  .required legend > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  /* RADIO */\n  fieldset {\n    border: 0px;\n    margin: 0px;\n    padding: 0px;\n    display: grid;\n    gap: 0.25em;\n  }\n  .radio-input-wrapper {\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n    gap: 0.5rem;\n    margin: 0;\n    min-height: var(--a11y-min-size);\n    position: relative;\n  }\n  .radio-input-wrapper label {\n    cursor: pointer;\n    display: flex;\n    padding-left: calc(var(--spacing) / 2);\n    width: 100%;\n  }\n  .radio-input-wrapper label span {\n    margin-top: 0.125em;\n  }\n  .radio-input-wrapper input[type=radio] {\n    appearance: none;\n    transition: 0.5s;\n    border-radius: 100%;\n    height: 1.5rem;\n    min-width: 1.5rem;\n    width: 1.5rem;\n  }\n  .radio-input-wrapper input[type=radio]:before {\n    content: "";\n    cursor: pointer;\n    border-radius: 100%;\n    display: block;\n  }\n  .radio-input-wrapper input[type=radio]:checked:before {\n    background-color: var(--color-primary);\n  }\n  .radio-input-wrapper input[type=radio]:disabled {\n    cursor: not-allowed;\n    background-color: var(--color-mute-variant);\n  }\n  kol-alert.error {\n    order: 1;\n  }\n  fieldset legend {\n    order: 2;\n    display: contents;\n  }\n  fieldset kol-input {\n    order: 3;\n  }\n  fieldset.error {\n    border-left: 3px solid var(--color-danger);\n    color: var(--color-danger);\n    font-weight: 700;\n    padding-left: 1rem;\n  }\n  fieldset.error input:focus,\n  fieldset.error select:focus,\n  fieldset.error textarea:focus {\n    outline-color: var(--color-danger) !important;\n  }\n  fieldset.error kol-alert.error {\n    margin-left: -0.25em;\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  fieldset.horizontal {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing) calc(var(--spacing) * 2);\n  }\n  fieldset.horizontal legend {\n    display: inline-block;\n    margin-bottom: calc(var(--spacing) / 2);\n  }\n  fieldset .input-slot {\n    gap: var(--spacing);\n  }\n  .radio-input-wrapper label {\n    padding-left: 0;\n  }\n}',"KOL-INPUT-RANGE":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  .inputs-wrapper {\n    gap: 1rem;\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input.icon-left > kol-icon:first-child {\n    margin-right: 0.5rem;\n  }\n  .input.icon-right > kol-icon:last-child {\n    margin-left: 0.5rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(.input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n    color: var(--color-text);\n  }\n}',"KOL-INPUT-TEXT":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  input {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  input:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(input, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n  }\n}',"KOL-KOLIBRI":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n}","KOL-LINK":"@layer kol-theme-component {\n  :is(a, button) {\n    color: var(--color-primary);\n    font-style: normal;\n    font-weight: 400;\n    text-decoration-line: underline;\n  }\n  :is(a, button):focus {\n    outline: none;\n  }\n  :is(a, button):focus kol-span-wc {\n    border-radius: var(--border-radius);\n    outline: var(--border-width) solid;\n  }\n  a:hover:not([aria-disabled]),\n  button:hover:not([disabled]) {\n    text-decoration-thickness: 0.25em;\n  }\n  :is(a, button):visited {\n    color: var(--visited);\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  .skip {\n    left: -99999px;\n    overflow: hidden;\n    position: absolute;\n    z-index: 9999999;\n    line-height: 1em;\n  }\n  .skip:focus {\n    background: white;\n    left: unset;\n    position: unset;\n  }\n}","KOL-LINK-BUTTON":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  :is(a, button):focus {\n    outline: none;\n  }\n  :is(a, button):focus kol-span-wc {\n    outline-color: var(--color-primary-variant);\n    outline-offset: 2px;\n    outline-style: solid;\n    outline-width: calc(var(--border-width) * 2);\n    transition: outline-offset 0.2s linear;\n  }\n  :is(a, button) > kol-span-wc {\n    font-weight: 700;\n    border-radius: var(--a11y-min-size);\n    border-style: solid;\n    outline-width: calc(var(--border-width) * 2);\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    padding: 8px 14px;\n    text-align: center;\n    transition-duration: 0.5s;\n    transition-property: background-color, color, border-color;\n  }\n  .primary :is(a, button) > kol-span-wc,\n  .primary :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n    color: var(--color-light);\n  }\n  .secondary :is(a, button) > kol-span-wc,\n  .secondary :is(a, button):disabled:hover > kol-span-wc,\n  .normal :is(a, button) > kol-span-wc,\n  .normal :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-light);\n    border-color: var(--color-primary);\n    color: var(--color-primary);\n  }\n  .danger :is(a, button) > kol-span-wc,\n  .danger :is(a, button):disabled:hover > kol-span-wc {\n    background-color: var(--color-danger);\n    border-color: var(--color-danger);\n    color: var(--color-light);\n  }\n  .ghost :is(a, button) > kol-span-wc,\n  .ghost :is(a, button):disabled:hover > kol-span-wc {\n    border-color: var(--color-light);\n    background-color: var(--color-light);\n    box-shadow: none;\n    color: var(--color-primary);\n  }\n  /*-----------*/\n  .primary :is(a, button):active > kol-span-wc,\n  .primary :is(a, button):hover > kol-span-wc,\n  .secondary :is(a, button):active > kol-span-wc,\n  .secondary :is(a, button):hover > kol-span-wc,\n  .normal :is(a, button):active > kol-span-wc,\n  .normal :is(a, button):hover > kol-span-wc,\n  .danger :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):hover > kol-span-wc,\n  .ghost :is(a, button):active > kol-span-wc,\n  .ghost :is(a, button):hover > kol-span-wc {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  }\n  .danger :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):hover > kol-span-wc {\n    background-color: var(--color-danger);\n    border-color: var(--color-danger);\n  }\n  :is(a, button):disabled:hover > kol-span-wc,\n  :is(a, button):focus:hover > kol-span-wc {\n    box-shadow: none;\n  }\n  .primary :is(a, button):active > kol-span-wc,\n  .secondary :is(a, button):active > kol-span-wc,\n  .normal :is(a, button):active > kol-span-wc,\n  .danger :is(a, button):active > kol-span-wc,\n  .ghost :is(a, button):active > kol-span-wc {\n    border-color: var(--color-light);\n    box-shadow: none;\n    outline: none;\n  }\n  :is(a, button).hide-label > kol-span-wc {\n    padding: 0.8rem;\n    width: unset;\n  }\n  :is(a, button).hide-label > kol-span-wc > span > span {\n    display: none;\n  }\n  :is(a, button).loading > kol-span-wc kol-icon {\n    animation: spin 5s infinite linear;\n  }\n  /** small ghost button */\n  .ghost :is(a, button).small > kol-span-wc {\n    border: none;\n    background-color: transparent;\n    box-shadow: none;\n  }\n  .ghost :is(a, button).small > kol-span-wc > span {\n    border-radius: 1.5em;\n    border-style: solid;\n    border-width: var(--border-width);\n    border-color: var(--color-light);\n    background-color: var(--color-light);\n  }\n  .ghost :is(a, button).small:active > kol-span-wc > span,\n  .ghost :is(a, button).small:hover > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent:active > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent:hover > kol-span-wc > span {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  }\n  /** :is(a,button) with transparent background */\n  :is(a, button).transparent > kol-span-wc > span,\n  .ghost :is(a, button).small.transparent > kol-span-wc > span,\n  :is(a, button).transparent > kol-span-wc {\n    background-color: transparent;\n    border-color: transparent;\n  }\n}","KOL-MODAL":"@layer kol-theme-component {\n  :host .overlay .modal {\n    max-height: calc(100% - 32px);\n  }\n}","KOL-NAV":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  nav {\n    background-color: var(--color-mute);\n  }\n  ul {\n    list-style: none;\n  }\n  kol-link-wc {\n    display: flex;\n  }\n  .entry-item a,\n  .entry-item .button {\n    align-items: center;\n    color: var(--color-primary);\n    display: flex;\n    gap: 0.5rem;\n    min-height: var(--a11y-min-size);\n    text-decoration: none;\n  }\n  .vertical .entry-item a,\n  .vertical .entry-item .button {\n    border-left: 2px solid transparent;\n    padding-left: 0.5rem;\n  }\n  .horizontal .entry-item a,\n  .horizontal .entry-item .button {\n    padding: 0 1rem;\n  }\n  .vertical .active .entry-item a,\n  .vertical .active .entry-item .button {\n    border-left-color: var(--color-primary);\n  }\n  .entry-item a:focus-visible,\n  .entry-item .button:focus-visible {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n  .entry-item a:hover {\n    text-decoration: underline;\n  }\n  .list .list {\n    padding-left: 1rem;\n  }\n  .active .entry-item a,\n  .active .entry-item .button {\n    font-weight: bold;\n  }\n  .active .list .entry-item a,\n  .active .list .entry-item .button {\n    font-weight: normal;\n    border-left-color: transparent;\n  }\n  .expand-button {\n    margin-left: 0.5rem;\n  }\n  .expand-button .button:hover {\n    background-color: var(--color-primary);\n    color: var(--color-light);\n  }\n  .expand-button .button:focus-visible {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n  .expand-button .button-inner {\n    justify-content: center;\n  }\n}","KOL-PAGINATION":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  .button:focus {\n    outline: none;\n  }\n  .button-inner {\n    background-color: var(--color-light);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--color-primary);\n    color: var(--color-primary);\n    font-weight: 700;\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    padding: 8px;\n    text-align: center;\n    transition-duration: 0.5s;\n    transition-property: background-color, color, border-color;\n  }\n  .button:focus .button-inner {\n    border-radius: var(--border-radius);\n    outline-offset: 2px;\n    outline: var(--color-primary-variant) solid 3px;\n    transition: 200ms outline-offset linear;\n  }\n  .button:is(:active, :hover):not(:disabled) .button-inner {\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);\n    color: var(--color-light);\n  }\n  .button:active .button-inner {\n    color: var(--color-light);\n    outline: none;\n  }\n  .selected .button-inner {\n    background-color: var(--color-mute-variant);\n    border-radius: var(--a11y-min-size);\n    border: 0;\n  }\n}","KOL-PROGRESS":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  :host progress,\n  :host span {\n    display: block;\n    height: 0px;\n    overflow: hidden;\n    width: 0px;\n  }\n  :host svg line:first-child,\n  :host svg circle:first-child {\n    fill: transparent;\n    stroke: var(--color-mute-variant);\n  }\n  :host svg line:last-child,\n  :host svg circle:last-child {\n    fill: transparent;\n    stroke: var(--color-primary);\n  }\n  .cycle .progress {\n    stroke: var(--color-primary-variant);\n  }\n}","KOL-SELECT":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .hint {\n    order: 4;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  select {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 2rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  select:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  kol-input.disabled :is(select, .input) {\n    background-color: var(--color-mute);\n    border-color: var(--color-mute-variant);\n  }\n  select[multiple] {\n    overflow: auto;\n  }\n  select option {\n    margin: 1px 0;\n    border-radius: var(--border-radius);\n    cursor: pointer;\n  }\n  select option:disabled {\n    cursor: not-allowed;\n  }\n  select:not([multiple]) option {\n    padding: 0.5em;\n  }\n  option:active:not(:disabled),\n  option:checked:not(:disabled),\n  option:focus:not(:disabled),\n  option:hover:not(:disabled) {\n    background: var(--color-primary-variant);\n    color: var(--color-light);\n  }\n}',"KOL-SKIP-NAV":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-link-wc > a > kol-span-wc {\n    border-radius: var(--a11y-min-size);\n    border-style: solid;\n    border-width: var(--border-width);\n    gap: calc(var(--spacing) * 2);\n    line-height: 1rem;\n    padding: 8px 14px;\n    background-color: var(--color-primary-variant);\n    border-color: var(--color-primary-variant);\n    color: var(--color-light);\n    cursor: pointer;\n  }\n}","KOL-SPLIT-BUTTON":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  .popover {\n    background: #fff;\n  }\n}","KOL-TABLE":"@layer kol-theme-component {\n  :host * {\n    hyphens: var(--hyphens);\n    font-family: var(--font-family);\n    line-height: var(--line-height);\n    word-break: break-word;\n  }\n  :host > div {\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n  caption {\n    padding: 0.5rem;\n  }\n  th {\n    font-weight: normal;\n    color: var(--color-primary);\n  }\n  :host table thead tr:first-child th,\n  :host table thead tr:first-child td {\n    border-width: 0;\n    border-top-width: calc(var(--border-width) * 2);\n    border-style: solid;\n    border-color: var(--color-primary-variant);\n  }\n  .table {\n    padding: 0.5rem;\n  }\n  .table:has(caption:focus) {\n    outline-color: var(--color-primary-variant);\n    outline-offset: 2px;\n    outline-style: solid;\n    outline-width: 3px;\n    transition: outline-offset 0.2s linear;\n  }\n  table {\n    width: 100%;\n    border-spacing: 0;\n  }\n  table,\n  :host table thead tr:last-child th,\n  :host table thead tr:last-child td {\n    border-width: 0;\n    border-bottom-width: calc(var(--border-width) * 2);\n    border-style: solid;\n    border-color: var(--color-primary-variant);\n  }\n  th {\n    background-color: var(--color-light);\n  }\n  th div {\n    width: 100%;\n    display: flex;\n    gap: 0.5rem;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n  }\n  tr:nth-child(even) {\n    background-color: var(--color-mute);\n  }\n  th,\n  td {\n    padding: 0.5rem;\n  }\n  th[aria-sort=ascending],\n  th[aria-sort=descending] {\n    font-weight: 700;\n  }\n  @media (min-width: 1024px) {\n    div.pagination kol-pagination {\n      display: flex;\n      align-items: center;\n    }\n  }\n}","KOL-TABS":"@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  :host kol-button-group-wc {\n    display: inline-flex;\n    gap: 2rem;\n    flex-wrap: wrap;\n  }\n  button {\n    box-sizing: border-box;\n    background-color: transparent;\n    border: 0;\n    border-radius: var(--border-radius);\n    font-style: normal;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 22px;\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n    color: var(--color-subtle);\n    padding: 0;\n  }\n  button:hover {\n    color: var(--color-primary);\n  }\n  button.primary,\n  button.selected {\n    color: var(--color-primary);\n  }\n  button:not(.selected) kol-span-wc > span {\n    border-bottom: 0.25em solid transparent;\n  }\n  button.selected kol-span-wc > span {\n    border-bottom: 0.25em solid;\n  }\n  button kol-span-wc > span {\n    gap: 0.5rem;\n  }\n  kol-icon {\n    font-size: 1rem;\n  }\n  :host > div > div {\n    padding: 0.25em 0;\n  }\n  div[role=tabpanel] {\n    height: 100%;\n  }\n  div.grid {\n    height: 100%;\n  }\n  :host > .tabs-align-right {\n    display: grid;\n    grid-template-columns: 1fr auto;\n  }\n  :host > .tabs-align-right kol-button-group-wc {\n    display: grid;\n    order: 2;\n  }\n  :host > .tabs-align-left {\n    display: grid;\n    grid-template-columns: auto 1fr;\n  }\n  :host > .tabs-align-left kol-button-group-wc {\n    display: grid;\n    order: 0;\n  }\n  :host > .tabs-align-bottom {\n    display: grid;\n    grid-template-rows: 1fr auto;\n  }\n  :host > .tabs-align-bottom kol-button-group-wc {\n    order: 2;\n  }\n  :host > .tabs-align-bottom kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {\n    margin: 0px 1rem 0px 0px;\n  }\n  :host > .tabs-align-bottom > kol-button-group-wc > div > div {\n    margin: 0px 1rem;\n  }\n  :host > .tabs-align-top {\n    display: grid;\n    grid-template-rows: auto 1fr;\n  }\n  :host > .tabs-align-top kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-top kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-top > kol-button-group-wc > div > div:first-child {\n    margin: 0px 1rem 0px 0px;\n  }\n  :host > .tabs-align-top > kol-button-group-wc > div > div {\n    margin: 0px 1rem;\n  }\n  :host > div {\n    display: grid;\n  }\n  :host > div.tabs-align-left {\n    grid-template-columns: auto 1fr;\n  }\n  :host > div.tabs-align-right {\n    grid-template-columns: 1fr auto;\n  }\n  :host > .tabs-align-left kol-button-group-wc,\n  :host > .tabs-align-top kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-bottom kol-button-group-wc,\n  :host > .tabs-align-right kol-button-group-wc {\n    order: 1;\n  }\n  :host > .tabs-align-left kol-button-group-wc,\n  :host > .tabs-align-right kol-button-group-wc {\n    gap: inherit;\n  }\n  :host > div.tabs-align-left kol-button-group-wc > div,\n  :host > div.tabs-align-left kol-button-group-wc > div > div,\n  :host > div.tabs-align-right kol-button-group-wc > div,\n  :host > div.tabs-align-right kol-button-group-wc > div > div {\n    display: grid;\n  }\n  :host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n  :host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n    width: 100%;\n  }\n  :host > div.tabs-align-bottom kol-button-group-wc div,\n  :host > div.tabs-align-top kol-button-group-wc div {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  :host kol-button-group-wc button {\n    border: none;\n  }\n}","KOL-TEXTAREA":'@layer kol-theme-component {\n  :host {\n    font-family: var(--font-family);\n  }\n  kol-input {\n    gap: 0.25rem;\n  }\n  kol-input .error {\n    order: 1;\n  }\n  kol-input label {\n    order: 2;\n  }\n  kol-input .input {\n    order: 3;\n  }\n  kol-input .counter {\n    order: 4;\n  }\n  kol-input .hint {\n    order: 5;\n    font-size: 0.9rem;\n    font-style: italic;\n  }\n  textarea {\n    border: none;\n  }\n  input::placeholder {\n    color: var(--color-subtle);\n  }\n  .input {\n    background-color: var(--color-light);\n    border-color: var(--color-subtle);\n    border-radius: var(--border-radius);\n    border-style: solid;\n    border-width: 2px;\n    padding: 0 0.5rem;\n  }\n  .input > kol-icon {\n    width: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .input:is(.icon-left, .icon-right) input {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .input > input:first-child {\n    padding-left: var(--spacing);\n  }\n  .input > input:last-child {\n    padding-right: var(--spacing);\n  }\n  .input:hover {\n    border-color: var(--color-primary);\n  }\n  textarea:disabled {\n    cursor: not-allowed;\n  }\n  .required label > span::after {\n    content: "*";\n    padding-left: 0.125em;\n  }\n  kol-input.error {\n    border-left: 3px solid var(--color-danger);\n    padding-left: 1rem;\n  }\n  kol-input.error .input:focus-within {\n    outline-color: var(--color-danger) !important;\n  }\n  kol-input.error kol-alert.error {\n    color: var(--color-danger);\n    font-weight: 700;\n  }\n  select[multiple],\n  textarea {\n    overflow: auto;\n  }\n  textarea {\n    display: block;\n  }\n  .input {\n    position: relative;\n  }\n}',"KOL-TOAST-CONTAINER":"@layer kol-theme-component {\n  :host {\n    top: 1rem;\n    right: 1rem;\n    width: 440px;\n  }\n  .toast {\n    margin-top: 1rem;\n  }\n}","KOL-TREE":"@layer kol-theme-component {\n  .tree:focus-within {\n    outline: 1px solid var(--color-primary);\n  }\n}","KOL-TREE-ITEM":"@layer kol-theme-component {\n  .tree-item ul {\n    list-style: disc inside;\n    border-left: 2px solid;\n    padding-left: 0.4rem;\n    margin-left: 2rem;\n    margin-top: 0.4rem;\n  }\n  .tree-item li {\n    margin: 0.4rem 0;\n  }\n  .tree-item .toggle-button {\n    align-items: center;\n    border: 1px solid var(--color-primary);\n    display: inline-flex;\n    height: 1.6rem;\n    justify-content: center;\n    margin-right: 0.4rem;\n    width: 1.6rem;\n  }\n  .tree-link {\n    display: inline-block;\n    padding: 0.4rem;\n  }\n  .tree-link.active {\n    background: var(--color-primary-variant);\n    color: var(--color-light);\n  }\n}"}),ne=e=>e.join(""),re=Z.createTheme("ecl-ec",{GLOBAL:ne`
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
		:host {
			--color-blue: #004494;
			--color-yellow: #ffd617;
			--color-grey: #404040;
			--color-blue-130: #002f67;
			--color-blue-120: #003776;
			--color-blue-110: #003d84;
			--color-blue-100: var(--color-blue);
			--color-blue-75: #4073af;
			--color-blue-50: #bfd0e4;
			--color-blue-25: #bfd0e4;
			--color-blue-5: #f2f5f9;
			--color-yellow-120: #f8ae21;
			--color-yellow-110: #fbc11d;
			--color-yellow-100: var(--color-yellow);
			--color-yellow-75: #ffde39;
			--color-yellow-50: #ffe879;
			--color-yellow-25: #fff4bb;
			--color-grey-100: var(--color-grey);
			--color-grey-75: #707070;
			--color-grey-50: #9f9f9f;
			--color-grey-25: #cfcfcf;
			--color-grey-20: #d9d9d9;
			--color-grey-15: #e3e3e3;
			--color-grey-10: #ebebeb;
			--color-grey-5: #f5f5f5;
			--color-grey-3: #f9f9f9;
			--color-blue-n: #006fb4;
			--color-orange: #f29527;
			--color-green: #467a39;
			--color-red: #da2131;
			--color-red-1xx: #981722;
			--color-black: #000;
			--color-white: #fff;
			--font-family: Arial, sans-serif;
			--font-size: 16px;
			--font-weight: 400;
			--font-weight-bold: 600;
			--line-height: 1.5em;
			--line-height-heading: 1.2em; /* ?! */
			--spacing-4xl: 64px;
			--spacing-3xl: 48px;
			--spacing-2xl: 40px;
			--spacing-xl: 32px;
			--spacing-l: 24px;
			--spacing-m: 16px;
			--spacing-s: 12px;
			--spacing-xs: 8px;
			--spacing-2xs: 4px; /* ?! */
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			display: inline-block;
		}
		a,
		button {
			font-size: var(--font-size);
			outline: none;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: var(--font-weight-bold);
			line-height: var(--line-height-heading);
			margin: 0;
			padding: 0;
		}
		p {
			font-weight: var(--font-weight);
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
		.required label span::after,
		.required legend span::after {
			color: var(--color-red);
			padding-left: 0.25em;
		}
	`,"KOL-HEADING":ne`
		:host {
			font-family: var(--font-family);
		}
		.headline-h1 {
			font-size: 2rem;
			line-height: 2.5rem;
		}
		.headline-h2 {
			font-size: 1.75rem;
			line-height: 2rem;
		}
		.headline-h3 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h4 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		.headline-h5 {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		.headline-h6 {
			color: rgb(234, 0, 255);
		}
	`,"KOL-ACCORDION":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			background-color: var(--color-grey-5);
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
		}
		:host > div .headline button {
			text-align: left;
			width: 100%;
			padding: 0 var(--spacing-m);
			display: flex;
			place-items: center;
		}
		:host > div .headline button kol-icon {
			margin-bottom: 0.75rem;
			margin-inline-end: 1rem;
			margin-inline-start: 0;
			margin-top: 0.75rem;
		}
		:host > div .headline button span {
			color: var(--color-grey);
			font-weight: var(--font-weight-bold);
			padding: 0.75rem 0;
			width: 100%;
		}
		:host > div[part*='open'] .headline button span {
			border-bottom: 1px solid var(--color-grey);
		}
		:host > div .headline button:focus,
		:host > div .headline button:hover {
			background-color: var(--color-grey-25);
		}
		:host > div .headline button:focus {
			outline: 2px solid var(--color-blue);
			outline-offset: -2px;
		}
		.content {
			padding: var(--spacing-s) var(--spacing-m);
		}
	`,"KOL-INDENTED-TEXT":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			border-end-start-radius: 0;
			border-inline-start: 10px solid var(--color-yellow);
			border-start-start-radius: 0;
			padding-bottom: 1rem;
			padding-inline-start: 1.5rem;
			padding-top: 1rem;
			margin: 0;
		}
	`,"KOL-BUTTON":ne`
		:host {
			font-family: var(--font-family);
		}
		a,
		button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		a kol-span-wc,
		button kol-span-wc {
			border-radius: 0;
			border-style: solid;
			border-width: 2px;
			font-weight: var(--font-weight-bold);
			margin: 0;
			min-height: 44px;
			min-width: 44px;
			padding: 0.25em 0.75em;
		}
		a:focus kol-span-wc,
		button:focus kol-span-wc {
			outline-offset: -4px;
			outline-width: 2px;
			outline-style: solid;
		}
		button.ghost:focus kol-span-wc {
			outline-offset: -2px;
		}
		.primary a kol-span-wc,
		.primary button kol-span-wc {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
		}
		.primary a:focus kol-span-wc,
		.primary button:focus kol-span-wc {
			outline-color: var(--color-white);
		}
		.primary a:hover kol-span-wc,
		.primary button:hover kol-span-wc {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.secondary a kol-span-wc,
		.secondary button kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-blue);
			color: var(--color-blue);
		}
		.secondary a:focus kol-span-wc,
		.secondary button:focus kol-span-wc {
			outline-color: var(--color-blue);
			outline-offset: -6px;
		}
		.secondary a:hover kol-span-wc,
		.secondary button:hover kol-span-wc {
			border-color: var(--color-blue-130);
			color: var(--color-blue-130);
		}
		.normal a kol-span-wc, /* CTA */.normal button kol-span-wc {
			background-color: var(--color-yellow);
			border-color: var(--color-yellow);
			color: var(--color-black);
		}
		.normal a:hover kol-span-wc, /* CTA */.normal button:hover kol-span-wc {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a kol-span-wc,
		.ghost button kol-span-wc {
			background-color: transparent;
			border-color: transparent;
			color: var(--color-blue);
		}
		.ghost a:focus kol-span-wc,
		.ghost button:focus kol-span-wc {
			outline-color: var(--color-blue);
		}
		.ghost a:hover kol-span-wc,
		.ghost button:hover kol-span-wc {
			color: var(--color-blue-130);
		}
	`,"KOL-LINK-BUTTON":ne`
		:host {
			font-family: var(--font-family);
		}
		a,
		button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		a kol-span-wc,
		button kol-span-wc {
			appearance: none;
			background: none;
			border-radius: 0;
			border-style: solid;
			border-width: 2px;
			font-weight: var(--font-weight-bold);
			margin: 0;
			min-height: 44px;
			min-width: 44px;
			padding: 0.25em 0.75em;
		}
		a:focus kol-span-wc,
		button:focus kol-span-wc {
			outline-offset: -4px;
			outline-width: 2px;
			outline-style: solid;
		}
		button.ghost:focus kol-span-wc {
			outline-offset: -2px;
		}
		.primary a kol-span-wc,
		.primary button kol-span-wc {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
		}
		.primary a:focus kol-span-wc,
		.primary button:focus kol-span-wc {
			outline-color: var(--color-white);
		}
		.primary a:hover kol-span-wc,
		.primary button:hover kol-span-wc {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.secondary a kol-span-wc,
		.secondary button kol-span-wc {
			background-color: var(--color-white);
			border-color: var(--color-blue);
			color: var(--color-blue);
		}
		.secondary a:focus kol-span-wc,
		.secondary button:focus kol-span-wc {
			outline-color: var(--color-blue);
			outline-offset: -6px;
		}
		.secondary a:hover kol-span-wc,
		.secondary button:hover kol-span-wc {
			border-color: var(--color-blue-130);
			color: var(--color-blue-130);
		}
		.normal a kol-span-wc, /* CTA */.normal button kol-span-wc {
			background-color: var(--color-yellow);
			border-color: var(--color-yellow);
			color: var(--color-black);
		}
		.normal a:hover kol-span-wc, /* CTA */.normal button:hover kol-span-wc {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a kol-span-wc,
		.ghost button kol-span-wc {
			background-color: transparent;
			border-color: transparent;
			color: var(--color-blue);
		}
		.ghost a:focus kol-span-wc,
		.ghost button:focus kol-span-wc {
			outline-color: var(--color-blue);
		}
		.ghost a:hover kol-span-wc,
		.ghost button:hover kol-span-wc {
			color: var(--color-blue-130);
		}
	`,"KOL-BADGE":ne`
		:host > span {
			font: normal normal var(--font-weight) 1em var(--font-family);
			padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
			text-transform: uppercase;
		}
	`,"KOL-ALERT":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			background-color: var(--color-white);
		}
		:host > div.card {
			border-style: solid;
			border-width: 2px;
		}
		:host > div.msg {
			border: none;
		}
		:host .msg .heading kol-icon {
			font-size: 1.5em;
			margin: var(--spacing-2xs);
		}
		:host .msg .heading > div {
			padding: var(--spacing-2xs);
		}
		:host .card {
			padding-bottom: 1.5rem;
			padding-inline-end: 0.5rem;
			padding-inline-start: 1.5rem;
			padding-top: 1.5rem;
		}
		:host .card .heading {
			gap: 0.5rem;
		}
		:host .card .content {
			margin-left: 2.5rem;
		}
		:host .card .heading kol-icon {
			font-size: 2rem;
		}
		:host .default {
			border-color: var(--color-grey);
		}
		:host .default .heading kol-icon {
			color: var(--color-grey);
		}
		:host .error {
			border-color: var(--color-red);
		}
		:host .error .heading kol-icon {
			color: var(--color-red);
		}
		:host .info {
			border-color: var(--color-blue);
		}
		:host .info .heading kol-icon {
			color: var(--color-blue);
		}
		:host .success {
			border-color: var(--color-green);
		}
		:host .success .heading kol-icon {
			color: var(--color-green);
		}
		:host .warning {
			border-color: var(--color-orange);
		}
		:host .warning .heading kol-icon {
			color: var(--color-orange);
		}
	`,"KOL-AVATAR":ne`
		:host {
			font-family: var(--font-family);
		}
	`,"KOL-TABS":ne`
		:host {
			font-family: var(--font-family);
			--kolibri-spacing: 0.25rem;
		}
		kol-button-group-wc {
			border-bottom: 1px solid var(--color-grey-25);
			margin-bottom: -1px;
		}
		kol-button-group-wc button {
			border: none;
			margin-bottom: -1px;
		}
		kol-button-group-wc button kol-span-wc {
			padding: 0.5rem;
			min-height: 44px;
			min-width: 44px;
		}
		kol-button-group-wc button.selected kol-span-wc {
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
			border-bottom-color: white;
			border-top-color: var(--color-blue);
			box-shadow: 0 -3px var(--color-blue);
			font-weight: var(--font-weight-bold);
			color: var(--color-blue);
		}
		kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
			color: var(--color-blue-130);
		}
		kol-button-group-wc button:focus kol-span-wc {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,"KOL-LINK":ne`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,"KOL-BUTTON-LINK":ne`
		:host {
			--kolibri-spacing: 0.25rem;
		}
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,"KOL-BREADCRUMB":ne`
		:host {
			font:
				normal normal 400 0.875rem/1rem arial,
				sans-serif;
			font-weight: var(--font-weight-bold);
		}
		kol-icon::part(icon separator)::before {
			color: var(--color-blue);
		}
		li:last-child {
			color: var(--color-grey-75);
		}
		kol-icon[exportparts*='separator'] {
			margin-inline-end: 0.5rem;
			margin-inline-start: 0.5rem;
			padding: 0;
		}
		kol-link {
			font-family: var(--font-family);
		}
	`,"KOL-DETAILS":ne`
		:host {
			font-family: var(--font-family);
		}
		details > kol-indented-text {
			margin: 0.175rem;
			padding: 0;
		}
	`,"KOL-PROGRESS":ne`
		:host {
			font-family: var(--font-family);
		}
		:host progress,
		:host span {
			display: block;
			height: 0px;
			overflow: hidden;
			width: 0px;
		}
		svg line:first-child,
		svg circle:first-child {
			fill: transparent;
			stroke: var(--color-grey-25);
		}
		svg line:last-child,
		svg circle:last-child {
			stroke: var(--color-blue-130);
			fill: transparent;
		}
		progress {
			display: none;
		}
	`,"KOL-SPIN":ne`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: var(--color-blue-75);
			}
		}
	`,"KOL-PAGINATION":ne`
		:host {
			display: grid;
			font-family: var(--font-family);
		}
		.button {
			appearance: none;
			background: none;
			outline: none;
			text-decoration: none;
		}
		.button-inner {
			background-color: var(--color-yellow);
			border: 2px solid var(--color-yellow);
			color: var(--color-black);
			font-weight: var(--font-weight-bold);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 0.25em 0.75em;
		}
		.button:not(:disabled):hover .button-inner {
			background-color: var(--color-yellow-120);
			border-color: var(--color-yellow-120);
		}
		.button:focus .button-inner {
			outline-offset: -4px;
			outline: 2px solid var(--color-black);
		}
		.button:disabled .button-inner {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.selected .button-inner {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
			opacity: 1 !important;
			text-decoration: underline;
		}
	`,"KOL-INPUT-CHECKBOX":ne`
		:host {
			font-family: var(--font-family);
		}
		.checkbox-container {
			justify-content: flex-start;
		}
		input[type='checkbox'] {
			background-color: var(--color-white);
			border-width: 2px;
			border-style: solid;
			color: var(--color-grey);
			line-height: 1.5em;
			font-size: 1rem;
		}
		input[type='checkbox']:focus {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		input[type='checkbox'] {
			border-color: var(--color-grey-75);
		}
		input[type='checkbox']:checked {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
		}
		input[type='checkbox']:hover {
			border-color: var(--color-blue);
		}
		input[type='checkbox']:checked:hover {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.error input[type='checkbox'] {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:hover {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked:hover {
			background-color: var(--color-red-1xx);
			border-color: var(--color-red-1xx);
		}
		.error.required label > span::after {
			color: var(--color-red);
		}

		.default .icon {
			margin-left: 0.2rem;
		}
		.default.checked .icon {
			color: var(--color-white);
		}

		.switch input[type='checkbox'] {
			display: block;
		}
		.switch input[type='checkbox']::before,
		.switch input[type='checkbox']:indeterminate::before {
			background-color: var(--color-grey-75);
		}
		.switch input[type='checkbox']:hover::before,
		.switch input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-blue);
		}
		.switch input[type='checkbox']:checked::before,
		.switch input[type='checkbox']:checked:hover::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']::before {
			background-color: var(--color-red);
		}
		.switch.error input[type='checkbox']:checked::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-red-1xx);
		}
		kol-input {
			gap: var(--spacing-xs);
		}
		.button {
			gap: var(--spacing-xs) 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
		}
		.hint {
			font-size: 0.875rem;
		}
		.button:focus-within {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
	`,"KOL-INPUT-COLOR":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-CARD":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: white;
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 calc(var(--spacing-2xs) / 2) var(--color-black);
		}
		:host kol-heading-wc {
			display: inline-flex;
			font-style: normal;
			font-weight: 700;
			font-size: 1.25em;
			line-height: 1.75em;
		}
		:host div.header {
			padding: var(--spacing-m) var(--spacing-m) var(--spacing-xs) var(--spacing-m);
		}
		:host div.content {
			padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
			overflow: hidden;
		}
		:host div.footer {
			padding: var(--spacing-xs) var(--spacing-m);
		}
		:host > div > div.content + div.footer {
			border-top: 2px solid var(--color-blue);
		}
	`,"KOL-BUTTON-GROUP":":host > kol-button-group-wc {\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t\tgap: var(--spacing-2xs);\n\t}","KOL-INPUT-RADIO":ne`
		:host {
			font-family: var(--font-family);
		}
		fieldset {
			border: 0;
			gap: 0.5rem;
			flex-wrap: wrap;
		}
		.input-slot {
			gap: 0.25rem;
		}
		fieldset kol-alert {
			order: 1;
		}
		fieldset .hint {
			order: 2;
		}
		fieldset kol-alert {
			order: 3;
		}
		fieldset kol-input {
			order: 4;
		}
		.radio-input-wrapper {
			display: flex;
			align-items: center;
		}
		.radio-label {
			padding-left: 0.5rem;
		}
		input[type='radio'] {
			border: 2px solid var(--color-grey-75);
		}
		input[type='radio']:before {
			display: none;
		}
		input[type='radio']:checked {
			border-color: var(--color-blue);
			border-width: 7px;
		}
		input[type='radio']:focus {
			outline: 2px solid var(--color-blue);
			outline-offset: 2px;
		}
		input[type='radio']:not(:disabled):hover {
			border-color: var(--color-blue);
		}
		label,
		legend {
			color: var(--color-grey);
		}
		legend {
			font-weight: var(--font-weight-bold);
		}
		.error input[type='radio'] {
			border: 2px solid var(--color-red);
		}
		.error input[type='radio']:before {
			display: none;
		}
		.error input[type='radio']:checked {
			border-color: var(--color-red);
			border-width: 7px;
		}
		.error input[type='radio']:not(:disabled):hover {
			border-color: var(--color-red-1xx);
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-xs));
			order: 1;
			width: 100%;
		}
		.hint {
			font-size: 0.875rem;
			order: 4;
		}
	`,"KOL-INPUT-RANGE":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input:not([type='range']):focus,
		select:focus,
		textarea:focus {
			border-top: 1px solid var(--color-blue);
			border-bottom: 1px solid var(--color-blue);
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-TEXT":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input:not([type='range']):focus,
		select:focus,
		textarea:focus {
			border-top: 1px solid var(--color-blue);
			border-bottom: 1px solid var(--color-blue);
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-KOLIBRI":ne`
		:host {
			font-family: var(--font-family);
		}
	`,"KOL-INPUT-PASSWORD":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-NUMBER":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-DATE":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-EMAIL":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-FILE":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			margin: 1px;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-SELECT":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-TEXTAREA":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		.counter {
			order: 5;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-ICON":":host,\n\t:host > i {\n\t\theight: 1em;\n\t\twidth: 1em;\n\t}","KOL-TABLE":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		caption {
			padding: 0.5em;
		}
		th {
			font-weight: normal;
			color: var(--color-midnight);
		}
		:host table thead tr:first-child th,
		:host table thead tr:first-child td {
			border-width: 0;
			border-top-width: 2px;
			border-style: solid;
			border-color: var(--color-ice);
		}
		.table {
			padding: 0.5em;
		}
		.table:has(caption:focus) {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		table,
		:host table thead tr:last-child th,
		:host table thead tr:last-child td {
			border-width: 0;
			border-bottom-width: 2px;
			border-style: solid;
			border-color: var(--color-ice);
		}
		th {
			background-color: var(--color-white);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5em;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		tbody tr:nth-child(odd) {
			background-color: var(--color-grey-10);
		}
		th,
		td {
			padding: 0.5em;
		}
		th[aria-sort='ascending'],
		th[aria-sort='descending'] {
			font-weight: 700;
		}
		@media (min-width: 1024px) {
			:host > div:last-child,
			:host > div:last-child > div:last-child {
				grid-auto-flow: column;
			}
			:host > div:last-child kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,"KOL-NAV":ne`
		:host {
			font-family: var(--font-family);
		}
		.list {
			display: flex;
			list-style: none;
			margin: 0px;
			padding: 0px;
		}
		.list.vertical {
			flex-direction: column;
		}
		.entry {
			display: flex;
		}
		.entry kol-button-wc:first-child,
		.entry kol-link-wc,
		.entry kol-span-wc {
			flex-grow: 1;
		} /* custom. */
		nav {
			background-color: var(--color-blue);
		}
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		.expand-button button {
			background-color: var(--color-blue-130);
			margin: auto;
			height: 100%;
		}
		kol-span-wc {
			border-color: transparent;
			border-style: solid;
			border-width: 2px;
			color: var(--color-white);
			font-size: 18px;
			justify-items: start;
			padding: 1rem;
			height: 100%;
		}
		li > ul,
		li + li {
			border-color: var(--color-blue-75);
			border-style: solid;
			border-width: 0;
			border-top-width: 2px;
		}
		a {
			text-decoration: none;
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
			border-color: var(--color-white);
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
		:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
			text-decoration: underline;
		}
		div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab6';
		}
		.expanded > div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab4';
		}
	`,"KOL-SKIP-NAV":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-link-wc > a > kol-span-wc {
			border-radius: 0;
			border-style: solid;
			border-width: 2px;
			font-weight: var(--font-weight-bold);
			gap: 0.5rem;
			line-height: 1rem;
			padding: 0.25em 0.75em;
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
			cursor: pointer;
		}
	`,"KOL-SPLIT-BUTTON":ne`
		:host {
			font-family: var(--font-family);
		}
		.popover {
			background: #fff;
		}
	`,"KOL-TOAST-CONTAINER":":host {\n\t\ttop: 1rem;\n\t\tright: 1rem;\n\t\twidth: 440px;\n\t\tmax-width: 100%;\n\t}\n\t.toast {\n\t\tdisplay: block;\n\t\tbackground: #fff;\n\t\tmargin-top: 1rem;\n\t}\n\t.alert {\n\t\tdisplay: block;\n\t}"}),ae=Z.createTheme("ecl-eu",{GLOBAL:ne`
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
		:host {
			--color-blue: #0e47cb;
			--color-blue-140: #082b7a;
			--color-blue-130: #082b7a;
			--color-blue-120: #0b39a2;
			--color-blue-110: #0d40b7;
			--color-blue-100: #0e47cb;
			--color-blue-80: #3e6cd5;
			--color-blue-60: #6e91e0;
			--color-blue-40: #9fb5ea;
			--color-blue-20: #cfdaf5;
			--color-blue-10: #e7edfa;
			--color-blue-5: #f3f6fc;
			--color-yellow: #ffcc00;
			--color-yellow-140: #997a00;
			--color-yellow-130: #b38f00;
			--color-yellow-120: #cca300;
			--color-yellow-110: #e6b800;
			--color-yellow-100: #ffcc00;
			--color-yellow-80: #ffd633;
			--color-yellow-60: #ffe066;
			--color-yellow-40: #ffeb99;
			--color-yellow-20: #fff5cc;
			--color-yellow-10: #fffae6;
			--color-yellow-5: #fffcf2;
			--color-grey: #262b38;
			--color-grey-140: #171a22;
			--color-grey-130: #1b1e27;
			--color-grey-120: #1e222d;
			--color-grey-110: #222732;
			--color-grey-100: #262b38;
			--color-grey-80: #515560;
			--color-grey-75: #515560;
			--color-grey-60: #7d8088;
			--color-grey-40: #a8aaaf;
			--color-grey-20: #d4d5d7;
			--color-grey-10: #e9eaeb;
			--color-grey-5: #f4f5f5;
			--color-grey-3: #f9f9f9;
			--color-orange: #ff6200;
			--color-orange-140: #993b00;
			--color-orange-130: #b34500;
			--color-orange-120: #cc4e00;
			--color-orange-110: #e65800;
			--color-orange-100: #e65800;
			--color-orange-80: #ff8133;
			--color-orange-60: #ff914d;
			--color-orange-40: #ffb180;
			--color-orange-20: #ffd0b3;
			--color-orange-10: #ffefe6;
			--color-orange-5: #fff7f2;
			--color-green: #00c991;
			--color-green-140: #007957;
			--color-green-130: #008d66;
			--color-green-120: #008d66;
			--color-green-110: #00b583;
			--color-green-100: #00c991;
			--color-green-80: #00c991;
			--color-green-60: #66dfbd;
			--color-green-40: #99e9d3;
			--color-green-20: #ccf4e9;
			--color-green-10: #e6faf4;
			--color-green-5: #f2fcf9;
			--color-red: #ef0044;
			--color-red-140: #8f0029;
			--color-red-130: #a70030;
			--color-red-120: #bf0036;
			--color-red-110: #d7003d;
			--color-red-100: #ef0044;
			--color-red-80: #f23369;
			--color-red-60: #f5668f;
			--color-red-40: #f999b4;
			--color-red-20: #fcccda;
			--color-red-10: #fde6ec;
			--color-red-5: #fef2f5;
			--color-accent-blue-100: #00e9ff;
			--color-accent-blue-30: #b3f8ff;
			--color-purple: #510dcd;
			--color-purple-140: #31087b;
			--color-purple-130: #390990;
			--color-purple-120: #410aa4;
			--color-purple-110: #490cb9;
			--color-purple-100: #510dcd;
			--color-purple-80: #743dd7;
			--color-purple-60: #976ee1;
			--color-purple-40: #bf9af1;
			--color-purple-20: #dccff5;
			--color-purple-10: #eee7fa;
			--color-purple-5: #eee7fa;
			--color-white: #fff;
			--color-black: #000;
			--font-family: Arial, sans-serif;
			--font-size: 16px;
			--font-weight-regular: 400;
			--font-weight-bold: 700;
			--line-height-regular: 1.5em;
			--line-height-heading: 1.2em;
			--spacing-4xl: 64px;
			--spacing-3xl: 48px;
			--spacing-2xl: 40px;
			--spacing-xl: 32px;
			--spacing-l: 24px;
			--spacing-m: 16px;
			--spacing-s: 12px;
			--spacing-xs: 8px;
			--spacing-2xs: 4px; /* ?! */
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
			display: inline-block;
		}
		a,
		button {
			font-size: var(--font-size);
			outline: none;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: var(--font-weight-bold);
			line-height: var(--line-height-heading);
			margin: 0;
			padding: 0;
		}
		p {
			font-weight: var(--font-weight);
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
		.required label span::after,
		.required legend span::after {
			color: var(--color-red);
			padding-left: 0.25em;
		}
		p.l,
		p.lead {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		p,
		p.m,
		p.medium {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		p.s,
		p.small {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
		p.xs,
		p.extra-small {
			font-size: 0.75rem;
			line-height: 1.25rem;
		}
	`,"KOL-HEADING":ne`
		:host {
			font-family: var(--font-family);
		}
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			font-weight: var(--font-weight-bold);
		}
		.headline-h1 {
			font-size: 2.625rem;
			line-height: 3.25rem;
		}
		.headline-h2 {
			font-size: 2.25rem;
			line-height: 2.75rem;
		}
		.headline-h3 {
			font-size: 2rem;
			line-height: 2.5rem;
		}
		.headline-h4 {
			font-size: 1.75rem;
			line-height: 2rem;
		}
		.headline-h5 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		.headline-h6 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
	`,"KOL-ACCORDION":ne`
		:host {
			font-family: var(--font-family);
		}
		.accordion,
		div[part*='accordion'] {
			border-radius: 8px;
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
			margin: 0;
			overflow: hidden;
		}
		.headline {
			font-size: 2em;
		}
		div[part*='close'] .headline button {
			border-radius: 8px;
		}
		div[part*='open'] .headline button {
			border-start-end-radius: 8px;
			border-start-start-radius: 8px;
		}
		.headline button {
			outline-offset: -1px;
			border: 0;
			border-bottom-color: #cfdaf5;
			border-bottom-style: solid;
			border-bottom-width: 2px;
			color: #171a22;
			position: relative;
			display: block;
			font:
				normal normal 400 1.125rem/1.75rem arial,
				sans-serif;
			padding: 1.5rem;
			text-align: start;
			width: 100%;
		}
		.headline button::before {
			background-color: #fc0;
			border-end-end-radius: 2px;
			border-end-start-radius: 2px;
			content: '';
			height: 4px;
			position: absolute;
			left: 1.5rem;
			top: 0;
			width: 32px;
		}
		.headline button kol-icon {
			margin-right: 0.75rem;
		}
		.headline button kol-icon::part(icon)::before {
			color: #0e47cb;
			font-weight: 900;
			font-family: 'Font Awesome 6 Free';
		}
		.open .headline button kol-icon::part(icon)::before {
			content: '\\f077';
		}
		:not(.open) .headline button kol-icon::part(icon)::before {
			content: '\\f078';
		}
		.content,
		div[part='content'] {
			-webkit-border-start: 4px solid #0e47cb;
			-webkit-margin-start: 0;
			border-bottom: 2px solid #cfdaf5;
			border-inline-start: 4px solid #0e47cb;
			color: #515560;
			font:
				normal normal 400 1rem/1.5rem arial,
				sans-serif;
			margin-inline-start: 0;
			padding: 1.5rem;
		}
		kol-span-wc > span {
			align-items: baseline;
		}
	`,"KOL-INDENTED-TEXT":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			-webkit-border-start: 8px solid #0e47cb;
			-webkit-padding-start: 1.5rem;
			border-end-start-radius: 4px;
			border-inline-start: 8px solid #0e47cb;
			border-start-start-radius: 4px;
			display: inline-block;
			padding-bottom: 1rem;
			padding-inline-start: 1.5rem;
			padding-top: 1rem;
		}
	`,"KOL-BUTTON":ne`
		:host {
			--kolibri-spacing: 0.25rem;
			font-family: var(--font-family);
		}
		a,
		button {
			appearance: none;
			border-radius: 4px;
			text-decoration: none;
		}
		a:focus,
		button:focus {
			outline: none;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			min-height: 44px;
			min-width: 44px;
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem arial,
				sans-serif;
			font-weight: 400;
			margin: 0;
			padding: 0.75rem;
		}
		a:focus-visible > kol-span-wc,
		button:focus-visible > kol-span-wc {
			outline-offset: -4px;
			outline-style: solid;
			outline-width: 2px;
		}
		a:active > kol-span-wc,
		button:active > kol-span-wc,
		a:hover > kol-span-wc,
		button:hover > kol-span-wc {
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.primary a > kol-span-wc,
		.primary button > kol-span-wc {
			background-color: #0e47cb;
			color: #fff;
		}
		.primary a:focus-visible > kol-span-wc,
		.primary button:focus-visible > kol-span-wc {
			outline-color: #fff;
		}
		.primary a:hover > kol-span-wc,
		.primary button:hover > kol-span-wc {
			background-color: #3e6cd5;
		}
		.secondary a > kol-span-wc,
		.secondary button > kol-span-wc {
			background-color: #fff;
			border: 2px solid #0e47cb;
			color: #0e47cb;
			padding: calc(0.75rem - 2px) calc(1rem - 2px);
		}
		.secondary a:focus-visible > kol-span-wc,
		.secondary button:focus-visible > kol-span-wc {
			box-shadow: inset 0 0 0 4px #0e47cb;
			outline-color: #fff;
		}
		.secondary a:hover > kol-span-wc,
		.secondary button:hover > kol-span-wc {
			border-color: #0e47cb;
			color: #0e47cb;
		}
		.normal a > kol-span-wc,
		.normal button > kol-span-wc {
			background-color: #fc0;
			color: #171a22;
		}
		.normal a:focus-visible > kol-span-wc,
		.normal button:focus-visible > kol-span-wc {
			outline-color: #000;
		}
		.normal a:hover > kol-span-wc,
		.normal button:hover > kol-span-wc {
			background-color: #fc0;
			border-color: #fc0;
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a > kol-span-wc,
		.ghost button > kol-span-wc {
			color: #0e47cb;
		}
		.ghost a:focus-visible > kol-span-wc,
		.ghost button:focus-visible > kol-span-wc {
			outline-color: #0e47cb;
		}
		.ghost a:hover > kol-span-wc,
		.ghost button:hover > kol-span-wc {
			color: #0e47cb;
		}
	`,"KOL-LINK-BUTTON":ne`
		:host {
			--kolibri-spacing: 0.25rem;
			font-family: var(--font-family);
		}
		a,
		button {
			appearance: none;
			border-radius: 4px;
			text-decoration: none;
		}
		a:focus,
		button:focus {
			outline: none;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			min-height: 44px;
			min-width: 44px;
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem arial,
				sans-serif;
			font-weight: 400;
			margin: 0;
			padding: 0.75rem;
		}
		a:focus-visible > kol-span-wc,
		button:focus-visible > kol-span-wc {
			outline-offset: -4px;
			outline-style: solid;
			outline-width: 2px;
		}
		a:active > kol-span-wc,
		button:active > kol-span-wc,
		a:hover > kol-span-wc,
		button:hover > kol-span-wc {
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.primary a > kol-span-wc,
		.primary button > kol-span-wc {
			background-color: #0e47cb;
			color: #fff;
		}
		.primary a:focus-visible > kol-span-wc,
		.primary button:focus-visible > kol-span-wc {
			outline-color: #fff;
		}
		.primary a:hover > kol-span-wc,
		.primary button:hover > kol-span-wc {
			background-color: #3e6cd5;
		}
		.secondary a > kol-span-wc,
		.secondary button > kol-span-wc {
			background-color: #fff;
			border: 2px solid #0e47cb;
			color: #0e47cb;
			padding: calc(0.75rem - 2px) calc(1rem - 2px);
		}
		.secondary a:focus-visible > kol-span-wc,
		.secondary button:focus-visible > kol-span-wc {
			box-shadow: inset 0 0 0 4px #0e47cb;
			outline-color: #fff;
		}
		.secondary a:hover > kol-span-wc,
		.secondary button:hover > kol-span-wc {
			border-color: #0e47cb;
			color: #0e47cb;
		}
		.normal a > kol-span-wc,
		.normal button > kol-span-wc {
			background-color: #fc0;
			color: #171a22;
		}
		.normal a:focus-visible > kol-span-wc,
		.normal button:focus-visible > kol-span-wc {
			outline-color: #000;
		}
		.normal a:hover > kol-span-wc,
		.normal button:hover > kol-span-wc {
			background-color: #fc0;
			border-color: #fc0;
		}
		.danger a kol-span-wc,
		.danger button kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
			color: var(--color-white);
		}
		.danger a:hover kol-span-wc,
		.danger button:hover kol-span-wc {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.ghost a > kol-span-wc,
		.ghost button > kol-span-wc {
			color: #0e47cb;
		}
		.ghost a:focus-visible > kol-span-wc,
		.ghost button:focus-visible > kol-span-wc {
			outline-color: #0e47cb;
		}
		.ghost a:hover > kol-span-wc,
		.ghost button:hover > kol-span-wc {
			color: #0e47cb;
		}
	`,"KOL-BUTTON-GROUP":ne`
		:host > kol-button-group-wc {
			gap: var(--spacing-2xs);
		}
	`,"KOL-PAGINATION":ne`
		:host {
			display: grid;
			font-family: var(--font-family);
		}
		.button {
			--kolibri-spacing: 0.25rem;
			border-radius: 4px;
			&:focus {
				outline: none;
			}
		}
		.button-inner {
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			border-radius: 4px;
			font:
				normal normal 400 1rem/1.25rem Arial,
				sans-serif;
			padding: 0.75rem;
			background-color: #fc0;
			color: #171a22;
		}
		.button:focus-visible .button-inner {
			outline-offset: -4px;
			outline: 2px solid var(--color-black);
		}
		button:not(:disabled):active .button-inner,
		button:not(:disabled):hover .button-inner {
			background-color: #fc0;
			border-color: #fc0;
			box-shadow:
				0 2px 4px rgb(9 49 142 / 8%),
				0 0 10px rgb(9 49 142 / 4%),
				0 4px 5px rgb(9 49 142 / 4%),
				0 -4px 4px rgb(9 49 142 / 4%);
		}
		.button:disabled .button-inner {
			opacity: 0.5;
			cursor: not-allowed;
		}
		.selected .button-inner {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
			color: var(--color-white);
			font-weight: bold;
			text-decoration: underline;
			opacity: 1 !important;
		}
	`,"KOL-PROGRESS":ne`
		:host {
			font-family: var(--font-family);
		}
	`,"KOL-NAV":ne`
		:host {
			font-family: var(--font-family);
		}
		.list {
			display: flex;
			list-style: none;
			margin: 0px;
			padding: 0px;
		}
		.list.vertical {
			flex-direction: column;
		}
		.entry {
			display: flex;
		}
		.entry kol-button-wc:first-child,
		.entry kol-link-wc,
		.entry kol-span-wc {
			flex-grow: 1;
		} /* custom. */
		nav {
			background-color: var(--color-blue);
		}
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		.expand-button button {
			background-color: var(--color-blue-130);
			margin: auto;
			height: 100%;
		}
		kol-span-wc {
			border-color: transparent;
			border-style: solid;
			border-width: 2px;
			color: var(--color-white);
			font-size: 18px;
			justify-items: start;
			padding: 1rem;
			height: 100%;
		}
		li > ul,
		li + li {
			border-color: var(--color-blue-75);
			border-style: solid;
			border-width: 0;
			border-top-width: 2px;
		}
		a {
			text-decoration: none;
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
			border-color: var(--color-white);
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
		:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
			text-decoration: underline;
		}
		div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab6';
		}
		.expanded > div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab4';
		}
	`,"KOL-BADGE":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > span {
			font: normal normal var(--font-weight) 0.875rem/1em var(--font-family);
			padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
			text-transform: uppercase;
		}
	`,"KOL-ALERT":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			background-color: var(--color-white);
		}
		:host > div.card {
			border-style: solid;
			border-width: 2px;
		}
		:host > div.msg {
			border: none;
		}
		:host .msg .heading kol-icon {
			font-size: 1.5em;
			margin: var(--spacing-2xs);
		}
		:host .msg .heading > div {
			padding: var(--spacing-2xs);
		}
		:host .card {
			padding-bottom: 1.5rem;
			padding-inline-end: 0.5rem;
			padding-inline-start: 1.5rem;
			padding-top: 1.5rem;
		}
		:host .card .heading {
			gap: 0.5rem;
		}
		:host .card .content {
			margin-left: 2.5rem;
		}
		:host .card .heading kol-icon {
			font-size: 2rem;
		}
		:host .default {
			border-color: var(--color-grey);
		}
		:host .default .heading kol-icon {
			color: var(--color-grey);
		}
		:host .error {
			border-color: var(--color-red);
		}
		:host .error .heading kol-icon {
			color: var(--color-red);
		}
		:host .info {
			border-color: var(--color-blue);
		}
		:host .info .heading kol-icon {
			color: var(--color-blue);
		}
		:host .success {
			border-color: var(--color-green);
		}
		:host .success .heading kol-icon {
			color: var(--color-green);
		}
		:host .warning {
			border-color: var(--color-orange);
		}
		:host .warning .heading kol-icon {
			color: var(--color-orange);
		}
	`,"KOL-CARD":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: white;
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 calc(var(--spacing-2xs) / 2) var(--color-black);
		}
		:host kol-heading-wc {
			display: inline-flex;
			font-style: normal;
			font-weight: 700;
			font-size: 1.25em;
			line-height: 1.75em;
		}
		:host div.header {
			padding: var(--spacing-m) var(--spacing-m) var(--spacing-xs) var(--spacing-m);
		}
		:host div.content {
			padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
			overflow: hidden;
		}
		:host div.footer {
			padding: var(--spacing-xs) var(--spacing-m);
		}
		:host > div > div.content + div.footer {
			border-top: 2px solid var(--color-blue);
		}
	`,"KOL-INPUT-CHECKBOX":ne`
		:host {
			font-family: var(--font-family);
		}
		.checkbox-container {
			justify-content: flex-start;
		}
		input[type='checkbox'] {
			background-color: var(--color-white);
			border-width: 2px;
			border-style: solid;
			color: var(--color-grey);
			line-height: 1.5em;
			font-size: 1rem;
		}
		input[type='checkbox']:focus {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		input[type='checkbox'] {
			border-color: var(--color-grey-75);
		}
		input[type='checkbox']:checked {
			background-color: var(--color-blue);
			border-color: var(--color-blue);
		}
		input[type='checkbox']:hover {
			border-color: var(--color-blue);
		}
		input[type='checkbox']:checked:hover {
			background-color: var(--color-blue-130);
			border-color: var(--color-blue-130);
		}
		.error input[type='checkbox'] {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked {
			background-color: var(--color-red);
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:hover {
			border-color: var(--color-red);
		}
		.error input[type='checkbox']:checked:hover {
			background-color: var(--color-red-1xx);
			border-color: var(--color-red-1xx);
		}
		.error.required label > span::after {
			color: var(--color-red);
		}
		.default .icon {
			margin-left: 0.2rem;
		}
		.default.checked .icon {
			color: var(--color-white);
		}

		.switch input[type='checkbox'] {
			display: block;
		}
		.switch input[type='checkbox']::before,
		.switch input[type='checkbox']:indeterminate::before {
			background-color: var(--color-grey-75);
		}
		.switch input[type='checkbox']:hover::before,
		.switch input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-blue);
		}
		.switch input[type='checkbox']:checked::before,
		.switch input[type='checkbox']:checked:hover::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']::before {
			background-color: var(--color-red);
		}
		.switch.error input[type='checkbox']:checked::before {
			background-color: var(--color-white);
		}
		.switch.error input[type='checkbox']:indeterminate:hover::before {
			background-color: var(--color-red-1xx);
		}
		kol-input {
			gap: var(--spacing-xs);
		}
		.button {
			gap: var(--spacing-xs) 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
		}
		.hint {
			font-size: 0.875rem;
		}
		.button:focus-within {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,"KOL-INPUT-COLOR":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-FILE":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			margin: 1px;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-EMAIL":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-NUMBER":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-DATE":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-PASSWORD":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-INPUT-TEXT":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 44px !important;
			min-height: 44px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-KOLIBRI":ne`
		:host {
			font-family: var(--font-family);
		}
	`,"KOL-SELECT":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-TEXTAREA":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			color: var(--color-grey);
			gap: var(--spacing-xs);
		}
		input,
		select,
		textarea {
			border: none;
			outline: none;
		}
		input,
		select:not([multiple]) {
			height: 40px !important;
			min-height: 40px !important;
		}
		label {
			font-weight: var(--font-weight-bold);
			order: 1;
		}
		.hint {
			font-size: 0.875rem;
			order: 2;
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-2xs));
			order: 3;
		}
		.input {
			min-height: 44px !important;
			border: 1px solid var(--color-grey-75);
			color: var(--color-grey);
			order: 4;
			align-items: center;
			padding: 1px 0.5em;
		}
		kol-input .counter {
			order: 5;
		}
		input::placeholder,
		textarea::placeholder {
			color: var(--color-grey-50);
		}
		.input:focus-within {
			box-shadow:
				inset 1px 1px var(--color-blue),
				inset -1px -1px var(--color-blue);
			outline: none;
		}
		.input:focus-within,
		.input:hover {
			border-color: var(--color-blue) !important;
		}
		.error .input {
			border-color: var(--color-red);
		}
	`,"KOL-TABLE":ne`
		:host {
			font-family: var(--font-family);
		}
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		caption {
			padding: 0.5em;
		}
		th {
			font-weight: normal;
			color: var(--color-midnight);
		}
		:host table thead tr:first-child th,
		:host table thead tr:first-child td {
			border-width: 0;
			border-top-width: 2px;
			border-style: solid;
			border-color: var(--color-ice);
		}
		.table {
			padding: 0.5em;
		}
		.table:has(caption:focus) {
			outline-color: var(--color-blue);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		table,
		:host table thead tr:last-child th,
		:host table thead tr:last-child td {
			border-width: 0;
			border-bottom-width: 2px;
			border-style: solid;
			border-color: var(--color-ice);
		}
		th {
			background-color: var(--color-white);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5em;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		tbody tr:nth-child(odd) {
			background-color: var(--color-grey-10);
		}
		th,
		td {
			padding: 0.5em;
		}
		th[aria-sort='ascending'],
		th[aria-sort='descending'] {
			font-weight: 700;
		}
		@media (min-width: 1024px) {
			:host > div:last-child,
			:host > div:last-child > div:last-child {
				grid-auto-flow: column;
			}
			:host > div:last-child kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,"KOL-AVATAR":ne`
		:host {
			font-family: var(--font-family);
		}
	`,"KOL-TABS":ne`
		:host {
			font-family: var(--font-family);
			--kolibri-spacing: 0.25rem;
		}
		kol-button-group-wc {
			border-bottom: 1px solid var(--color-grey-25);
			margin-bottom: -1px;
		}
		kol-button-group-wc button {
			border: none;
			margin-bottom: -1px;
		}
		kol-button-group-wc button kol-span-wc {
			padding: 0.5rem;
			min-height: 44px;
			min-width: 44px;
		}
		kol-button-group-wc button.selected kol-span-wc {
			border-color: var(--color-grey-25);
			border-style: solid;
			border-width: 1px;
			border-bottom-color: white;
			border-top-color: var(--color-blue);
			box-shadow: 0 -3px var(--color-blue);
			font-weight: var(--font-weight-bold);
			color: var(--color-blue);
		}
		kol-button-group-wc button:hover:not(:disabled) kol-span-wc {
			color: var(--color-blue-130);
		}
		kol-button-group-wc button:focus kol-span-wc {
			outline-color: var(--color-blue-130);
			outline-style: solid;
			outline-width: 2px;
		}
	`,"KOL-LINK":ne`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,"KOL-BUTTON-LINK":ne`
		a,
		button {
			appearance: none;
			color: var(--color-blue);
			text-decoration: underline;
		}
		a:hover,
		button:hover {
			color: var(--color-blue-130);
		}
	`,"KOL-BREADCRUMB":ne`
		:host,
		kol-link {
			font-family: var(--font-family);
		}
	`,"KOL-DETAILS":ne`
		:host {
			font-family: var(--font-family);
		}
	`,"KOL-SPIN":ne`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: var(--color-blue-80);
			}
		}
	`,"KOL-INPUT-RADIO":ne`
		:host {
			font-family: var(--font-family);
		}
		fieldset {
			border: 0;
			gap: 0.5rem;
			flex-wrap: wrap;
		}
		fieldset kol-alert {
			order: 1;
		}
		fieldset .hint {
			order: 2;
		}
		fieldset kol-alert {
			order: 3;
		}
		fieldset kol-input {
			order: 4;
		}
		.radio-input-wrapper {
			display: flex;
			align-items: center;
		}
		.radio-label {
			padding-left: 0.5rem;
		}
		input[type='radio'] {
			outline: 2px solid var(--color-grey-75);
			outline-offset: 2px;
		}
		input[type='radio']:before {
			display: none;
		}
		input[type='radio']:checked {
			border-color: var(--color-blue);
			border-width: 7px;
		}
		input[type='radio']:focus {
			outline-color: var(--color-blue);
		}
		input[type='radio']:not(:disabled):hover {
			border-color: var(--color-blue);
		}
		label,
		legend {
			color: var(--color-grey);
		}
		legend {
			font-weight: var(--font-weight-bold);
		}
		.error input[type='radio'] {
			border: 2px solid var(--color-red);
		}
		.error input[type='radio']:before {
			display: none;
		}
		.error input[type='radio']:checked {
			border-color: var(--color-red);
			border-width: 7px;
		}
		.error input[type='radio']:not(:disabled):hover {
			border-color: var(--color-red-1xx);
		}
		kol-alert {
			color: var(--color-red);
			font-size: 0.875em;
			margin-left: calc(-1 * var(--spacing-xs));
			order: 1;
			width: 100%;
		}
		.hint {
			font-size: 0.875rem;
			order: 4;
		}
	`,"KOL-INPUT-RANGE":ne`
		:host {
			font-family: var(--font-family);
		}
		.inputs-wrapper {
			gap: 1rem;
		}
	`,"KOL-SKIP-NAV":ne`
		:host {
			font-family: var(--font-family);
		}
		kol-link-wc > a > kol-span-wc {
			border-radius: 4px;
			gap: 0.5rem;
			line-height: 1rem;
			padding: 0.75rem;
			background-color: #0e47cb;
			color: #fff;
			cursor: pointer;
		}
	`,"KOL-SPLIT-BUTTON":ne`
		:host {
			font-family: var(--font-family);
		}
		.popover {
			background: #fff;
		}
	`,"KOL-TOAST-CONTAINER":ne`
		:host {
			top: 1rem;
			right: 1rem;
			width: 440px;
			max-width: 100%;
		}
		.toast {
			display: block;
			background: #fff;
			margin-top: 1rem;
		}
		.alert {
			display: block;
		}
	`}),ie=e=>e.join(""),se=Z.createTheme("itzbund",{GLOBAL:ie`
		:host {
			--border-color: var(--color-anthrazit);
			--border-radius: 0.125rem;
			--color-anthrazit: #333;
			--color-jade: #f3f7fb;
			--color-weiss: #fff;
			--color-petrol: #007a89;
			--color-achat: #0b4d59;
			--color-teal: #056773;
			--color-fluorit: #66ddec;
			--color-rotton: rgba(188, 0, 0, 1);
			--color-rotton-20: rgba(188, 0, 0, 0.2);
			--color-gras: #138510;
			--color-warn: #f0541e;
			--color-blut: var(--color-rotton);
			--color-input-bg-default: #e8edf2;
			--gradient-petrol-achat: linear-gradient(67deg, var(--color-petrol), var(--color-achat));
			--color-citrin: #d4c912;
			--color-umber: #494500;
			--color-gelb: #fff443;
			--color-lichtgelb: #eeff6c;
			--gradient-gelb-citrin: linear-gradient(67deg, var(--color-gelb), var(--color-citrin));
			--font-family-sans: BundesSans Web;
			--font-family-serif: BundesSerif Web;
			--font-size: 16px;
			--spacing: 0.125em;
			--kolibri-spacing: calc(2 * var(--spacing));
		}
		:host {
			background-color: transparent; /* Reset global background-color defined by components */
		}
		* {
			box-sizing: border-box;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: var(--font-family);
			font-size: var(--font-size);
			margin: 0;
			padding: 0;
		}
		*[tabindex]:focus,
		a:focus,
		button:focus,
		input:focus,
		select:focus,
		summary:focus,
		textarea:focus {
			cursor: pointer;
			outline-color: var(--color-petrol);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.25em;
		}
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
	`,"KOL-BUTTON":ie`
		button {
			background-color: transparent;
		}
		a,
		button {
			border-radius: 2rem !important;
			font-family: var(--font-family-sans);
			/* text-transform: uppercase; */
		}
		a > kol-span-wc,
		button > kol-span-wc {
			border-radius: 2rem;
			border-style: solid;
			min-width: 44px;
			min-height: 44px;
			border-width: var(--spacing);
			font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
			padding: 0 1rem;
		}
		.button a.hide-label > kol-span-wc,
		.button button.hide-label > kol-span-wc {
			padding: 0 0.5rem;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		kol-link-wc.primary > a > kol-span-wc,
		kol-link-wc.primary > a:disabled:hover > kol-span-wc,
		button.primary > kol-span-wc,
		button.primary:disabled:hover > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.primary > a:hover > kol-span-wc,
		kol-link-wc.primary > a:focus > kol-span-wc,
		button.primary:hover > kol-span-wc,
		button.primary:focus > kol-span-wc {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
		}
		kol-link-wc.secondary > a > kol-span-wc,
		kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
		button.secondary > kol-span-wc,
		button.secondary:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-petrol);
			color: var(--color-petrol);
		}
		kol-link-wc.secondary > a:hover > kol-span-wc,
		kol-link-wc.secondary > a:focus > kol-span-wc,
		button.secondary:hover > kol-span-wc,
		button.secondary:focus > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.normal > a > kol-span-wc,
		kol-link-wc.normal > a:disabled:hover > kol-span-wc,
		button.normal > kol-span-wc,
		button.normal:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-anthrazit);
			color: var(--color-anthrazit);
		}
		kol-link-wc.normal > a:hover > kol-span-wc,
		kol-link-wc.normal > a:focus > kol-span-wc,
		button.normal:hover > kol-span-wc,
		button.normal:focus > kol-span-wc {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		kol-link-wc.danger > a > kol-span-wc,
		kol-link-wc.danger > a:disabled:hover > kol-span-wc,
		button.danger > kol-span-wc,
		button.danger:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-blut);
			color: var(--color-blut);
		}
		kol-link-wc.danger > a:hover > kol-span-wc,
		kol-link-wc.danger > a:focus > kol-span-wc,
		button.danger:hover > kol-span-wc,
		button.danger:focus > kol-span-wc {
			background-color: var(--color-blut);
			border-color: var(--color-blut);
			color: var(--color-weiss);
		}
		kol-link-wc.ghost > a > kol-span-wc,
		kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
		button.ghost > kol-span-wc,
		button.ghost:disabled:hover > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: transparent;
			color: var(--color-anthrazit);
		}
		kol-link-wc.ghost > a:hover > kol-span-wc,
		kol-link-wc.ghost > a:focus > kol-span-wc,
		button.ghost:hover > kol-span-wc,
		button.ghost:focus > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: var(--color-ghost);
			color: var(--color-anthrazit);
		}
	`,"KOL-BUTTON-GROUP":ie`
		:host > kol-button-group-wc {
			display: inline-flex;
			flex-wrap: wrap;
			gap: 0.25rem;
		}
	`,"KOL-LINK-BUTTON":ie`
		a,
		button {
			border-radius: 2rem !important;
			font-family: var(--font-family-sans);
			/* text-transform: uppercase; */
		}
		a > kol-span-wc,
		button > kol-span-wc {
			border-radius: 2rem;
			border-style: solid;
			min-width: 44px;
			min-height: 44px;
			border-width: var(--spacing);
			font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
			padding: 0 1rem;
		}
		.button a.hide-label > kol-span-wc,
		.button button.hide-label > kol-span-wc {
			padding: 0 0.5rem;
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		kol-link-wc.primary > a > kol-span-wc,
		kol-link-wc.primary > a:disabled:hover > kol-span-wc,
		button.primary > kol-span-wc,
		button.primary:disabled:hover > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.primary > a:hover > kol-span-wc,
		kol-link-wc.primary > a:focus > kol-span-wc,
		button.primary:hover > kol-span-wc,
		button.primary:focus > kol-span-wc {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
		}
		kol-link-wc.secondary > a > kol-span-wc,
		kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
		button.secondary > kol-span-wc,
		button.secondary:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-petrol);
			color: var(--color-petrol);
		}
		kol-link-wc.secondary > a:hover > kol-span-wc,
		kol-link-wc.secondary > a:focus > kol-span-wc,
		button.secondary:hover > kol-span-wc,
		button.secondary:focus > kol-span-wc {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
			color: var(--color-weiss);
		}
		kol-link-wc.normal > a > kol-span-wc,
		kol-link-wc.normal > a:disabled:hover > kol-span-wc,
		button.normal > kol-span-wc,
		button.normal:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-anthrazit);
			color: var(--color-anthrazit);
		}
		kol-link-wc.normal > a:hover > kol-span-wc,
		kol-link-wc.normal > a:focus > kol-span-wc,
		button.normal:hover > kol-span-wc,
		button.normal:focus > kol-span-wc {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		kol-link-wc.danger > a > kol-span-wc,
		kol-link-wc.danger > a:disabled:hover > kol-span-wc,
		button.danger > kol-span-wc,
		button.danger:disabled:hover > kol-span-wc {
			background-color: var(--color-weiss);
			border-color: var(--color-blut);
			color: var(--color-blut);
		}
		kol-link-wc.danger > a:hover > kol-span-wc,
		kol-link-wc.danger > a:focus > kol-span-wc,
		button.danger:hover > kol-span-wc,
		button.danger:focus > kol-span-wc {
			background-color: var(--color-blut);
			border-color: var(--color-blut);
			color: var(--color-weiss);
		}
		kol-link-wc.ghost > a > kol-span-wc,
		kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
		button.ghost > kol-span-wc,
		button.ghost:disabled:hover > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: transparent;
			color: var(--color-anthrazit);
		}
		kol-link-wc.ghost > a:hover > kol-span-wc,
		kol-link-wc.ghost > a:focus > kol-span-wc,
		button.ghost:hover > kol-span-wc,
		button.ghost:focus > kol-span-wc {
			background-color: var(--color-ghost);
			border-color: var(--color-ghost);
			color: var(--color-anthrazit);
		}
	`,"KOL-PAGINATION":ie`
		.button {
			border-radius: 2rem;
			font-family: var(--font-family-sans);
		}
		.button-inner {
			background-color: var(--color-weiss);
			border-radius: 2rem;
			border: var(--spacing) solid var(--color-anthrazit);
			color: var(--color-anthrazit);
			font-size: inherit;
			gap: 0.25em;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 0 1rem;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
			transition-timing-function: ease-in-out;
		}
		.hide-label .button-inner {
			padding: 0 0.5rem;
		}
		.button:not(:disabled):hover .button-inner,
		.button:focus .button-inner {
			background-color: var(--color-anthrazit);
			border-color: var(--color-anthrazit);
			color: var(--color-weiss);
		}
		.selected .button-inner {
			background-color: var(--color-achat);
			border-color: var(--color-achat);
			color: var(--color-weiss);
			font-weight: bold;
			text-decoration: underline;
		}
	`,"KOL-BUTTON-LINK":ie`
		kol-link-wc a,
		kol-button-wc button {
			text-decoration-line: none;
		}
		a,
		button {
			background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
			background-repeat: no-repeat;
			background-position: left 0 bottom 0;
			background-size: 25% 0.25ex;
			border-radius: var(--spacing);
			color: var(--color-petrol);
			font-family: var(--font-family-sans);
			font-size: inherit;
			/* text-transform: uppercase; */
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		a:focus,
		a:hover,
		button:focus,
		button:hover {
			background-size: 100% 0.25ex;
			color: var(--color-achat);
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		a.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		a.skip:focus {
			background-color: white;
			box-shadow: 0 0 0.5rem 0.5rem white;
			left: unset;
			position: unset;
		}
	`,"KOL-INPUT-TEXT":ie`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-PASSWORD":ie`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-NUMBER":ie`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-DATE":ie`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-EMAIL":ie`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-INPUT-FILE":ie`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-TEXTAREA":ie`
		textarea:hover,
		textarea:focus {
			border-color: var(--default-border-hover);
			outline-color: var(--primary) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--default-letter);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		textarea.error {
			background-color: var(--danger-light) !important;
			border-color: var(--danger);
		}
		textarea {
			width: 100%;
			color: var(--default-letter);
			border-width: 1px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
			border-color: var(--kolibri-color-normal);
			border-radius: 0;
			background-color: #e8edf2 !important;
		}
		textarea::placeholder {
			color: var(--default-border);
		}
		textarea:disabled {
			cursor: not-allowed;
		}
		textarea:disabled,
		textarea:read-only {
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		.kol-required span::after {
			content: '*';
		}
		kol-alert {
			margin-top: var(--spacing);
			display: block;
		}
	`,"KOL-ALERT":ie`
		:host {
			--kolibri-border-width: 1px;
		}
		:host .default {
			border-color: var(--color-anthrazit);
		}
		.heading {
			gap: 0.5rem;
		}
		.default .heading-icon {
			background-color: var(--color-anthrazit);
		}
		:host .error {
			border-color: var(--color-rotton);
		}
		.error .heading-icon {
			background-color: var(--color-rotton);
		}
		:host .info {
			border-color: var(--color-petrol);
		}
		.info .heading-icon {
			background-color: var(--color-petrol);
		}
		:host .success {
			border-color: var(--color-gras);
		}
		:host .success .heading-icon {
			background-color: var(--color-gras);
		}
		:host .warning {
			border-color: var(--color-warn);
		}
		.warning .heading-icon {
			background-color: var(--color-warn);
		}
	`,"KOL-HEADING":ie`
		.headline-h1,
		.headline-h2,
		.headline-h3,
		.headline-h4,
		.headline-h5,
		.headline-h6 {
			line-height: 1em;
			margin: 0;
			padding: 0;
		}
		.headline-h1 {
			font-family: var(--font-family-serif);
			font-size: 54px;
			font-weight: bold;
		}
		.headline-h2 {
			font-family: var(--font-family-serif);
			font-size: 32px;
			font-weight: bold;
		}
		.headline-h3 {
			font-family: var(--font-family-serif);
			font-size: 26px;
			font-weight: bold;
		}
		.headline-h4 {
			font-family: var(--font-family-serif);
			font-size: 20px;
			font-weight: normal;
		}
		.headline-h5 {
			font-family: var(--font-family-serif);
			font-size: 17px;
			font-weight: bold;
		}
		.headline-h6 {
			font-family: var(--font-family-sans);
			font-size: 17px;
			font-weight: normal;
		}
	`,"KOL-BADGE":ie`
		:host {
			display: inline-block;
			font-family: inherit;
		}
		:host > span {
			border-radius: 0.3125rem;
			display: inline-flex;
		}
		:host > span kol-button-wc {
			border-left: 1px solid rgba(0, 0, 0, 0.25);
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.5rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
		:host button {
			border-radius: 0 var(--spacing) var(--spacing) 0;
		}
	`,"KOL-INDENTED-TEXT":ie`
		:host > div {
			background: var(--color-white);
			border-left: none;
			box-shadow: -4px 0px 0px var(--color-petrol);
			padding: 0.25em 0.5em;
			width: 100%;
		}
	`,"KOL-LINK":ie`
		kol-link-wc a,
		kol-button-wc button {
			text-decoration-line: none;
		}
		a,
		button {
			background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
			background-repeat: no-repeat;
			background-position: left 0 bottom 0;
			background-size: 25% 0.25ex;
			border-radius: var(--spacing);
			color: var(--color-petrol);
			font-family: var(--font-family-sans);
			font-size: inherit;
			/* text-transform: uppercase; */
			transition-delay: 0;
			transition-timing-function: ease-in-out;
			transition-duration: 0.5s;
			transition-property: background, color, border-color;
		}
		a:focus,
		a:hover,
		button:focus,
		button:hover {
			background-size: 100% 0.25ex;
			color: var(--color-achat);
		}
		a > kol-span-wc,
		button > kol-span-wc {
			gap: 0.25em;
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		a.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		a.skip:focus {
			background-color: white;
			box-shadow: 0 0 0.5rem 0.5rem white;
			left: unset;
			position: unset;
		}
	`,"KOL-BREADCRUMB":ie`
		li > span {
			font-weight: bold;
			/* text-transform: uppercase; */
		}
	`,"KOL-SPIN":ie`
		.cycle {
			padding: 0.125rem;
			& span {
				background-color: #fc0;
			}
		}
	`,"KOL-PROGRESS":ie`
		:host progress,
		:host span {
			display: block;
			height: 0px;
			overflow: hidden;
			width: 0px;
		}
		svg line:first-child,
		svg circle:first-child {
			fill: transparent;
			stroke: var(--color-fluorit);
		}
		svg line:last-child,
		svg circle:last-child {
			stroke: var(--color-achat);
			fill: transparent;
		}
		progress {
			display: none;
		}
	`,"KOL-SELECT":ie`
		select:hover,
		select:focus {
			border-color: var(--default-border-hover);
			outline-color: var(--primary) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--default-letter);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		select.error {
			background-color: var(--danger-light) !important;
			border-color: var(--danger);
		}
		select {
			width: 100%;
			color: var(--default-letter);
			border-width: 1px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
			border-color: var(--kolibri-color-normal);
			border-radius: 0;
			background-color: #e8edf2 !important;
		}
		select:disabled {
			cursor: not-allowed;
			border-color: var(--border-default);
			background-color: var(--background-light-grey);
		}
		option {
			height: 2em;
		}
		select:not([multiple]) option {
			padding: 0.5em;
		}
		kol-alert {
			margin-top: var(--spacing);
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
	`,"KOL-INPUT-COLOR":ie`
		input:hover,
		input:focus {
			border-color: var(--border-color) !important;
			border-radius: none !important;
			outline-color: var(--color-achat) !important;
			outline-offset: 0;
			outline-style: solid;
			outline-width: 1px;
		}
		label {
			color: var(--color-anthrazit);
			font-size: 14px;
			line-height: 20px;
			gap: 8px;
			width: 100%;
			font-weight: bold;
		}
		input {
			cursor: pointer;
			width: 100%;
			color: var(--color-anthrazit);
			border-width: 1px;
			border-style: solid;
			border-color: var(--color-petrol);
			border-radius: 0;
			background-color: #e8edf2 !important;
			overflow: hidden;
			line-height: 24px;
			font-size: 16px;
		}
		.error input {
			background-color: var(--color-rotton-20) !important;
			border-color: var(--color-rotton) !important;
		}
		input:disabled {
			background-color: var(--color-input-bg-default);
			border-color: var(--border-color);
			cursor: not-allowed;
		}
		kol-alert {
			margin-top: calc(2 * var(--spacing));
			display: block;
		}
		.kol-required span::after {
			content: '*';
		}
		input::placeholder {
			font-style: italic;
		}
	`,"KOL-ACCORDION":ie`
		:host > div {
			font-family: var(--font-family);
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			display: grid;
			border-color: var(--kolibri-border-color);
			border-width: 1px;
			border-style: solid;
			border-radius: 0.25rem;
		}
		:host > div > kol-heading-wc {
			font-weight: 700;
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		:host > div > kol-heading-wc button {
			cursor: pointer;
			width: 100%;
			margin: 0;
			display: flex;
			gap: 0.5em;
			border: 0;
			align-items: center;
			overflow: hidden;
			font-size: inherit;
			line-height: 1.75em;
			background-color: transparent;
			padding: 0.5rem;
		}
		:host > div[part*='open'] > kol-heading-wc button {
			padding-bottom: 0;
		}
		:host > div[part*='open'] > kol-heading-wc button kol-icon {
			width: 1em;
		}
		:host > div div[part='header'],
		:host > div[part*='open'] div[part='content'] {
			margin: 0;
		}
		:host > div div[part='header'] {
			padding-left: 2rem;
		}
		:host > div[part*='open'] div[part='content'] {
			margin: 0;
			padding: 0 1rem 1rem 2.25rem;
		}
		:host > div > kol-heading-wc button kol-icon::part(icon) {
			color: var(--color-midnight);
		}
		button {
			cursor: pointer;
			font-weight: inherit;
			font-size: inherit;
			line-height: inherit;
		}
		.content {
			padding: 0.5rem;
		}
		:host > div > kol-heading-wc button kol-icon::part(close)::before {
			font-family: 'Font Awesome 6 Free';
			content: '\\f077';
		}
		:host > div > kol-heading-wc button kol-icon::part(open)::before {
			font-family: 'Font Awesome 6 Free';
			content: '\\f078';
		}
	`,"KOL-TABLE":ie`
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		:host > div:last-child {
			border-style: solid;
			border-width: 1px;
			border-color: var(--border-color);
		}
		.table {
			padding: 0.5em;
		}
		.table:has(caption:focus) {
			outline-color: var(--color-petrol);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		table {
			width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
		}
		table,
		tr,
		th,
		td {
			border: 0 solid var(--border-color);
		}
		tr {
			border-top-width: 1px;
		}
		tr:nth-child(even) {
			background-color: #f2f2f2;
		}
		th,
		td {
			border-right-width: 1px;
			padding: 0.25em 0.5em;
		}
		th {
			background-color: #eee;
		}
		.table-sort-button .button {
			font-weight: bold;
		}
		@media (min-width: 1024px) {
			:host > div.pagination,
			:host > div.pagination > div:last-child {
				grid-auto-flow: column;
			}
			:host > div.pagination kol-pagination {
				display: flex;
				gap: 1rem;
			}
		}
	`,"KOL-NAV":ie`
		:host .hidden {
			display: none;
		}
		:host > div > nav ul {
			list-style: none;
			margin: 0px;
			padding: 0px;
			border-radius: var(--border-radius);
			background-color: var(--color-petrol);
		}
		:host > div > nav ul > li {
			border-radius: var(--border-radius);
			overflow: hidden;
			padding: 0.125em;
		}
		:host > div > nav ul > li[part*='vertical'] + li {
			border-radius: 0;
			border-top: 0.1em dotted white;
		}
		:host > div > nav ul > li[part*='vertical selected'] {
			border-right: 0.375em solid var(--color-citrin);
		}
		:host > div > nav ul > li[part*='horizontal'] + li {
			border-radius: 0;
			border-left: 0.1em dotted white;
		}
		:host > div > nav ul > li[part*='horizontal selected'] {
			border-bottom: 0.375em solid var(--color-citrin);
		}
		:host > div > nav ul > li > div {
			height: 100%;
		}
		:host > div > nav kol-link-wc {
			width: 100%; /*height: 100%;font-weight: 600;*/
			display: block;
		}
		:host > div > nav kol-link-wc a {
			border-radius: var(--border-radius);
			background-color: var(--color-petrol);
			border: 1px solid transparent;
			grid: flex;
			line-height: 2em;
			padding: 0.5em;
			color: white;
			height: 100%;
			-webkit-box-align: center;
			align-items: center;
			display: flex;
			cursor: pointer;
			text-decoration: inherit;
		}
		:host > div > nav kol-link-wc[exportparts*='selected'] a {
			background-color: var(--color-achat);
			font-weight: 700;
		}
		:host > div > nav kol-link-wc a kol-icon.mr-2 {
			margin-right: calc(2 * 2 * var(--spacing));
		}
		:host > div > nav kol-link-wc a kol-icon.ml-2 {
			margin-left: calc(2 * 2 * var(--spacing));
		}
		:host > div > nav kol-link-wc a:focus,
		:host > div > nav kol-link-wc a:hover {
			border: 1px solid white;
			background-color: var(--color-fluorit);
			color: var(--color-anthrazit);
		} /* compact button */
		:host > div > div:last-child {
			margin-top: 0.5em;
			width: 100%;
			text-align: center;
		}
		:host > div > nav kol-link-wc a.text-center {
			display: grid;
			align-items: center;
			justify-items: center;
		} /* horizontal */
		ul.flex {
			display: flex;
		}
		li > div > div.absolute {
			position: absolute;
		}
		kol-span-wc {
			justify-items: baseline;
		}
	`,"KOL-CARD":ie`
		:host > div {
			background-color: white;
			border-color: var(--border-color);
			border-style: solid;
			border-width: 1px;
			border-radius: calc(2 * var(--border-radius));
			width: 100%;
			height: 100%;
		}
		kol-heading {
			padding: 0.5rem;
			display: block;
			border-bottom-style: solid;
			border-bottom-color: var(--border-color);
			border-bottom-width: 1px;
		}
		:host > div > div {
			display: block;
			padding: 0.5rem;
		}
		:host > div > div:last-child {
			display: block;
			padding: 0.5rem;
			border-top-style: solid;
			border-top-color: var(--color-achat);
			border-top-width: 1px;
		}
	`,"KOL-INPUT-CHECKBOX":ie`
		.checkbox-container {
			justify-content: flex-start;
		}
		input {
			color: var(--default-letter);
			border-color: var(--default-border);
			border-width: 2px;
			border-style: solid;
			line-height: 24px;
			font-size: 16px;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		input:hover {
			border-color: var(--color-petrol);
		} /* NEU */
		kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
		}
		kol-input.default {
			grid-template-columns: calc(6 * 2 * var(--spacing)) auto;
		}
		.switch {
			grid-template-columns: calc(13 * 2 * var(--spacing)) auto;
		}
		.button {
			gap: 0.5rem 0;
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
		}
		kol-input > div.input {
			display: inline-flex;
			order: 1;
		}
		kol-input > div.input input {
			margin: 0px;
		}
		kol-input > label {
			order: 2;
			padding-left: calc(2 * 2 * var(--spacing));
		}
		kol-input > kol-alert.error {
			order: 3;
			padding-top: 0.25em;
			grid-column: span 2 / auto;
		} /* CHECKBOX */
		input[type='checkbox'] {
			appearance: none;
			background-color: white;
			cursor: pointer;
			transition: 0.5s;
		}
		input[type='checkbox']:checked {
			background-color: var(--color-petrol);
			border-color: var(--color-petrol);
		}
		.default input[type='checkbox'] {
			height: calc(6 * 2 * var(--spacing));
			min-width: calc(6 * 2 * var(--spacing));
			width: calc(6 * 2 * var(--spacing));
		}

		.default .icon {
			margin-left: 0.25rem;
		}
		.default.checked .icon {
			color: var(--color-weiss);
		}

		.switch input[type='checkbox'] {
			display: block;
			min-width: 3.2em;
			width: 3.2em;
			height: 1.7em;
			position: relative;
		}
		.switch input[type='checkbox']:before {
			/* border-radius: 0.25em; */
			-webkit-transition: 0.5s;
			-moz-transition: 0.5s;
			-ms-transition: 0.5s;
			transition: 0.5;
			width: 1.2em;
			height: 1.2em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			background-color: black;
			position: absolute;
		}
		.switch input[type='checkbox']:checked:before {
			transform: translateX(1.5em);
			background-color: white;
		}
		.switch input[type='checkbox']:indeterminate:before {
			transform: translateX(0.75em);
			background-color: var(--color-petrol);
		}
		.switch:is(:not(.checked), .indeterminate) .icon {
			color: #fff;
		}
		kol-input span.hint {
			grid-column: span 2;
			font-style: italic;
			color: gray;
			display: block;
			order: 3;
			padding: 0 var(--spacing);
		}
		.button:focus-within {
			border-radius: 2rem;
			outline-color: var(--color-achat) !important;
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
		}