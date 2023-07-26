/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as registerInstance,h,H as Host,g as getElement}from"./index-2c046ff1.js";import{a as translate}from"./i18n-7ff844fe.js";import{v as validateAlign}from"./align-73a9215b.js";import{v as validateLabel}from"./label-50013d13.js";import{d as devHint,f as featureHint,c as uiUxHintMillerscheZahl}from"./a11y.tipps-d701911f.js";import{L as Log}from"./dev.utils-d53ab83f.js";import{s as setState,e as watchNumber,c as watchJsonArrayString,k as koliBriQuerySelector}from"./prop.validators-464644b7.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";import"./reuse-c2156413.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}kol-button-group-wc{display:inline-flex;flex-wrap:wrap}kol-button-group-wc button{border-bottom-color:transparent;border-bottom-style:solid;display:block}div.grid,div[role='tabpanel']{height:100%}:host>.tabs-align-right{display:grid;grid-template-columns:1fr auto}:host>.tabs-align-right kol-button-group-wc{display:grid;order:2}:host>.tabs-align-left{display:grid;grid-template-columns:auto 1fr}:host>.tabs-align-left kol-button-group-wc{display:grid;order:0}:host>.tabs-align-bottom{display:grid;grid-template-rows:1fr auto}:host>.tabs-align-bottom kol-button-group-wc{order:2}:host>.tabs-align-bottom kol-button-group-wc>div{display:flex}:host>.tabs-align-bottom>kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-bottom>kol-button-group-wc>div>div{margin:0 1em}:host>.tabs-align-top{display:grid;grid-template-rows:auto 1fr}:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-top kol-button-group-wc>div{display:flex}:host>.tabs-align-top>kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-top>kol-button-group-wc>div>div{margin:0 1em}:host>div{display:grid}:host>.tabs-align-left kol-button-group-wc,:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-bottom kol-button-group-wc,:host>.tabs-align-right kol-button-group-wc{order:1}:host>div.tabs-align-left kol-button-group-wc>div,:host>div.tabs-align-left kol-button-group-wc>div>div,:host>div.tabs-align-right kol-button-group-wc>div,:host>div.tabs-align-right kol-button-group-wc>div>div{display:grid}:host>div.tabs-align-left kol-button-group-wc>div>div kol-button-wc,:host>div.tabs-align-right kol-button-group-wc>div>div kol-button-wc{width:100%}:host>div.tabs-align-bottom kol-button-group-wc div,:host>div.tabs-align-top kol-button-group-wc div{display:flex;flex-wrap:wrap}",KolTabs=class{constructor(t){registerInstance(this,t),this.onCreateLabel=`${translate("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,a)=>{if(a>0){if(e+a<t.length)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a+1):e+a}else if(a<0&&e+a>=0)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a-1):e+a;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let a=null;switch(t.key){case"ArrowRight":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==a&&this.onSelect(t,a,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,a=!0,i)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===a){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,i||t);t=i||t,a=!1}if(!1===a){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,i||t);devHint("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,a,i)=>{let s,o;s="_selected"===i?t:this.state._selected,o="_tabs"===i?t:this.state._tabs,o.length>0&&e.set("_selected",this.selectNextNotDisabledTab(s,o))},this.handleTabPanels=()=>{var t,e,a;if(this.tabPanelHost instanceof HTMLDivElement)for(let i=this.tabPanelHost.children.length;i<this.state._tabs.length;i++){const s=document.createElement("div");s.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${i}`),s.setAttribute("id",`tabpanel-${i}`),s.setAttribute("role","tabpanel"),s.setAttribute("hidden","");const o=document.createElement("slot");o.setAttribute("name",`tabpanel-slot-${i}`),s.appendChild(o),this.tabPanelHost.appendChild(s),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[i])&&(null===(a=this.host)||void 0===a||a.children[i].setAttribute("slot",`tabpanel-slot-${i}`))}},this.onCreate=t=>{var e,a;t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(a=this.state._on)||void 0===a||a.onCreate(t))},this._align="top",this._ariaLabel=void 0,this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_align:"top",_label:"…",_selected:0,_tabs:[]}}renderButtonGroup(){return h("kol-button-group-wc",{role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>h("kol-button-wc",{_disabled:t._disabled,_icon:t._icon,_hideLabel:t._hideLabel||t._iconOnly,_label:t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&h("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return h(Host,null,h("div",{ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._align}`]:!0}},this.renderButtonGroup(),h("div",{ref:this.catchTabPanelHost})))}validateAlign(t){validateAlign(this,t)}validateAriaLabel(t){this.validateLabel(t)}validateLabel(t){validateLabel(this,t)}validateOn(t){if("object"==typeof t&&null!==t){featureHint("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:Log.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:Log.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),setState(this,"_on",e)}}validateSelected(t){watchNumber(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){watchJsonArrayString(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),uiUxHintMillerscheZahl("KolTabs",this.state._tabs.length)}validateTabsAlign(t){this.validateAlign(t)}componentWillLoad(){this.validateAlign(this._align||this._tabsAlign),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,a=!1){var i,s;this._selected=e,"function"==typeof(null===(i=this._on)||void 0===i?void 0:i.onSelect)&&(null===(s=this._on)||void 0===s||s.onSelect(t,e)),!0===a&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=koliBriQuerySelector(`button#${this.state._label.replace(/\s/g,"-")}-tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return getElement(this)}static get watchers(){return{_align:["validateAlign"],_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};KolTabs.style={default:defaultStyleCss};export{KolTabs as kol_tabs};