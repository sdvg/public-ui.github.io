/*! For license information please see 7103.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7103],{57103:(t,e,a)=>{a.r(e),a.d(e,{kol_tabs:()=>c});var i=a(46266),o=a(26737),r=a(33810),n=a(51539),l=a(68854);const s=new Set([...new Set(['"left", "right"']),...new Set(['"left", "right"'])]),c=class{constructor(t){(0,i.r)(this,t),this.onCreateLabel=`${(0,l.a)("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,a)=>{if(a>0){if(e+a<t.length)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a+1):e+a}else if(a<0&&e+a>=0)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a-1):e+a;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let a=null;switch(t.key){case"ArrowRight":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==a&&this.onSelect(t,a,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,a=!0,i)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===a){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,i||t);t=i||t,a=!1}if(!1===a){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,i||t);(0,o.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,a,i)=>{let o,r;o="_selected"===i?t:this.state._selected,r="_tabs"===i?t:this.state._tabs,r.length>0&&e.set("_selected",this.selectNextNotDisabledTab(o,r))},this.handleTabPanels=()=>{var t,e,a;if(this.tabPanelHost instanceof HTMLDivElement)for(let i=this.tabPanelHost.children.length;i<this.state._tabs.length;i++){const o=document.createElement("div");o.setAttribute("aria-labelledby",`tab-${i}`),o.setAttribute("id",`tabpanel-${i}`),o.setAttribute("role","tabpanel"),o.setAttribute("hidden","");const r=document.createElement("slot");r.setAttribute("name",`tabpanel-slot-${i}`),o.appendChild(r),this.tabPanelHost.appendChild(o),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[i])&&(null===(a=this.host)||void 0===a||a.children[i].setAttribute("slot",`tabpanel-slot-${i}`))}},this.onCreate=t=>{var e,a;t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(a=this.state._on)||void 0===a||a.onCreate(t))},this._ariaLabel=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_ariaLabel:"…",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return(0,i.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._ariaLabel,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,i.h)("div",{class:"inline-flex"},(0,i.h)("kol-button-wc",{class:"h-full",_disabled:t._disabled,_icon:t._icon,_iconOnly:t._iconOnly,_label:t._label&&t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`tab-${e}`,_role:"tab",_value:e})))),this.showCreateTab&&(0,i.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,i.h)("div",{ref:this.catchTabPanelHost})))}validateAriaLabel(t){(0,n.w)(this,"_ariaLabel",t,{required:!0}),(0,o.a)(t)}validateOn(t){if("object"==typeof t&&null!==t){(0,o.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:r.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:r.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,n.s)(this,"_on",e)}}validateSelected(t){(0,n.d)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,n.c)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,o.u)("KolTabs",this.state._tabs.length)}validateTabsAlign(t){((t,e,a)=>{(0,n.a)(t,"_tabsAlign",(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),s,a)})(this,0,t)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,a=!1){var i,o;this._selected=e,"function"==typeof(null===(i=this._on)||void 0===i?void 0:i.onSelect)&&(null===(o=this._on)||void 0===o||o.onSelect(t,e)),!0===a&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=(0,n.k)(`button#tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return(0,i.g)(this)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};c.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}*{--border-radius:0.125rem;--gap:0.25rem;box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}a,button{align-items:center;border-radius:var(--border-radius);cursor:pointer;display:inline-flex !important;gap:var(--gap);justify-items:center;overflow:hidden}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;align-items:center;gap:var(--gap);justify-items:center;width:100%}kol-span-wc>span{align-items:center;display:flex;gap:var(--gap);justify-items:center}'}}}]);