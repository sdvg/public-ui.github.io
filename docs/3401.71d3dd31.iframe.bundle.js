"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3401],{"./node_modules/@public-ui/components/dist/esm/kol-tabs.entry.js":(v,d,n)=>{n.r(d),n.d(d,{kol_tabs:()=>p});var a=n("./node_modules/@public-ui/components/dist/esm/index-5878bd01.js"),c=n("./node_modules/@public-ui/components/dist/esm/a11y.tipps-7e981511.js"),h=n("./node_modules/@public-ui/components/dist/esm/dev.utils-d28700ca.js"),l=n("./node_modules/@public-ui/components/dist/esm/prop.validators-13dda64d.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const u=new Set(['"left", "right"']),m=new Set(['"left", "right"']),g=new Set([...u,...m]),w=(e,t,o)=>{(0,l.a)(e,t,i=>i==="bottom"||i==="left"||i==="right"||i==="top",g,o)},f=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-y-visible{overflow-y:visible}.px{padding-left:1px;padding-right:1px}.pl-8{padding-left:2rem}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.text-normal{color:var(--kolibri-color-normal)}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}:host{display:inline-flex}:host>*{color:inherit;width:inherit;word-spacing:inherit}:host button{display:grid;font-family:var(--kolibri-font-family);letter-spacing:inherit;width:inherit;word-spacing:inherit;border-radius:var(--kolibri-border-radius);align-items:center !important;justify-content:center !important;border-width:1px;padding:calc(2 * var(--kolibri-spacing))}:host button kol-icon,:host button .kol-icon{width:1.5em;height:1.5em;display:inline-block}:host button.primary{background-color:var(--kolibri-color-primary);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button.primary:hover,:host button.primary:focus{border-color:var(--kolibri-color-primary);color:var(--kolibri-color-primary)}:host button.secondary{background-color:var(--kolibri-color-secondary);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button.secondary:hover,:host button.secondary:focus{border-color:var(--kolibri-color-secondary);color:var(--kolibri-color-secondary)}:host button.normal{background-color:var(--kolibri-color-normal);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button.normal:hover,:host button.normal:focus{border-color:var(--kolibri-color-normal);color:var(--kolibri-color-normal)}:host button.danger{background-color:var(--kolibri-color-danger);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button.danger:hover,:host button.danger:focus{border-color:var(--kolibri-color-danger);color:var(--kolibri-color-danger)}:host button.ghost{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-color:var(--kolibri-color-ghost);color:var(--kolibri-color-ghost)}:host button.ghost:hover,:host button.ghost:focus{background-color:var(--kolibri-color-ghost);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button:disabled{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-color:transparent;cursor:not-allowed;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}:host button:disabled:hover,:host button:disabled:focus{--tw-bg-opacity:1;background-color:rgba(55, 65, 81, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity))}:host button[aria-selected=true],:host button:focus{border-bottom-color:var(--kolibri-color-accent) !important;border-bottom-width:6px !important}:host .close-button{font-size:50%;height:fit-content;left:-3em;position:relative;top:0.25em}`,p=class{constructor(e){(0,a.r)(this,e),this.hostElement=null,this.onCreateLabel="Neu \u2026",this.showCreateTab=!1,this.nextPossibleTabIndex=(t,o,i)=>{if(i>0){if(o+i<t.length)return t[o+i]._disabled?this.nextPossibleTabIndex(t,o,i+1):o+i}else if(i<0&&o+i>=0)return t[o+i]._disabled?this.nextPossibleTabIndex(t,o,i-1):o+i;return o},this.onKeyDown=t=>{const o=setTimeout(()=>{clearTimeout(o);let i=null;switch(t.key){case"ArrowRight":i=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":i=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}i!==null&&this.onSelect(t,i,!0)})},this.onClickSelect=(t,o)=>{this.onSelect(t,o,!0)},this.onMouseDown=t=>{t.stopPropagation()},this.catchHostElement=t=>{this.hostElement=t},this.selectNextNotDisabledTab=(t,o,i=!0,r)=>{if(t>o.length-1&&(t=o.length-1),t<0&&(t=0),Array.isArray(o)&&o[t]&&o[t]._disabled){if(i===!0){if(t<o.length-1)return this.selectNextNotDisabledTab(t+1,o,!0,r||t);t=r||t,i=!1}if(i===!1){if(t>0)return this.selectNextNotDisabledTab(t-1,o,!1,r||t);(0,c.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,o,i,r)=>{let s,b;s=r==="_selected"?t:this.state._selected,b=r==="_tabs"?t:this.state._tabs,b.length>0&&o.set("_selected",this.selectNextNotDisabledTab(s,b))},this.onCreate=t=>{var o,i;t.stopPropagation(),typeof((o=this.state._on)===null||o===void 0?void 0:o.onCreate)=="function"&&((i=this.state._on)===null||i===void 0||i.onCreate(t))},this._ariaLabel=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_ariaLabel:"\u2026",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return(0,a.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._ariaLabel,onKeyDown:this.onKeyDown},this.state._tabs.map((e,t)=>(0,a.h)("div",{class:"inline-flex"},(0,a.h)("kol-button-wc",{class:"h-full",_ariaControls:`tabpanel-${t}`,_id:`tab-${t}`,_disabled:e._disabled,_icon:e._icon,_iconOnly:e._iconOnly,_label:e._label&&e._label,_on:{onClick:o=>this.onClickSelect(o,t),onMouseDown:this.onMouseDown},_tabIndex:this.state._selected===t?0:-1,_tooltipAlign:e._tooltipAlign,_variant:this.state._selected===t?"custom":void 0,_customClass:this.state._selected===t?"selected":void 0,"aria-selected":this.state._selected===t?"true":"false",role:"tab"}))),this.showCreateTab&&(0,a.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,a.h)(a.H,{ref:this.catchHostElement},(0,a.h)("div",{ref:e=>{this.tabsElement=e},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,a.h)("div",null,(0,a.h)("slot",null))))}validateAriaLabel(e){(0,l.w)(this,"_ariaLabel",e,{required:!0}),(0,c.a)(e)}validateOn(e){if(typeof e=="object"&&e!==null){(0,c.f)("[KolTabs] Pr\xFCfen, wie man auch einen EventCallback einzeln \xE4ndern kann.");const t={};typeof e.onCreate!="function"&&typeof e.onCreate!="object"||(typeof e.onCreate=="object"?(typeof e.onCreate.label=="string"&&e.onCreate.label.length>0?this.onCreateLabel=e.onCreate.label:h.L.debug(`[KolTabs] Der Label-Text f\xFCr Neu in {
  onCreate: {
    label: string (!),
    callback: Function
  }
} ist nicht korrekt gesetzt.`),typeof e.onCreate.callback=="function"?t.onCreate=e.onCreate.callback:h.L.debug(`[KolTabs] Die onCreate-Callback-Funktion f\xFCr Neu in {
  onCreate: {
    label: string,
    callback: Function (!)
  }
} ist nicht korrekt gesetzt.`)):t.onCreate=e.onCreate,this.showCreateTab=typeof t.onCreate=="function"),typeof e.onSelect=="function"&&(t.onSelect=e.onSelect),(0,l.s)(this,"_on",t)}}validateSelected(e){(0,l.f)(this,"_selected",e,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(e){(0,l.c)(this,"_tabs",t=>typeof t=="object"&&t!==null&&typeof t._label=="string"&&t._label.length>0,e,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,c.u)("KolTabs",this.state._tabs.length)}validateTabsAlign(e){w(this,"_tabsAlign",e)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){var e;if(this.hostElement instanceof HTMLElement){this.htmlElements=(e=this.hostElement)===null||e===void 0?void 0:e.children;for(let t=0;t<this.htmlElements.length;t++)this.htmlElements[t].setAttribute("aria-labelledby",`tab-${t}`),this.htmlElements[t].setAttribute("id",`tabpanel-${t}`),this.htmlElements[t].setAttribute("role","tabpanel"),t!==this.state._selected?this.htmlElements[t].setAttribute("hidden",""):this.htmlElements[t].removeAttribute("hidden")}}onSelect(e,t,o=!1){var i,r;this._selected=t,typeof((i=this._on)===null||i===void 0?void 0:i.onSelect)=="function"&&((r=this._on)===null||r===void 0||r.onSelect(e,t)),o===!0&&(this.selectedTimeout=setTimeout(()=>{if(clearTimeout(this.selectedTimeout),this.tabsElement instanceof HTMLElement){const s=(0,l.k)(`button#tab-${t}`,this.tabsElement);s==null||s.focus()}}))}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};p.style={default:f}}}]);