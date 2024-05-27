/*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","split-button-dropdown-label-open":"Optionen anzeigen","split-button-dropdown-label-close":"Optionen schließen","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}",dropdown:"Auswahlliste","nav-label-open":"Untermenü zu {{label}} öffnen","nav-label-close":"Untermenü zu {{label}} schließen"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","split-button-dropdown-label-open":"Show options","split-button-dropdown-label-close":"Hide options","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}",dropdown:"Dropdown","nav-label-open":"Submenu for {{label}} open","nav-label-close":"Submenu for {{label}} close"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,a)=>(n[`kol-${a}`]=e[a],n)),{}),TRANSLATIONS=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),replaceAll=function(e,n,a){return e.split(n).join(a)};class I18nService{constructor(e){this.resourceMap=new Map,this.language=null!=e?e:"de"}addTranslations(e){Array.isArray(e)?e=new Set(e):"function"==typeof e&&(e=new Set([e])),void 0!==e&&e.forEach((e=>e(((e,n)=>{let a=this.resourceMap.get(e);return a||(a=new Map,this.resourceMap.set(e,a)),Object.entries(n).forEach((([e,n])=>{n&&a.set(e,n)})),e}))))}setLanguage(e){this.language=e}translate(e,n){var a;let i=null===(a=this.resourceMap.get(this.language))||void 0===a?void 0:a.get(e);return i?(null==n?void 0:n.placeholders)&&Object.entries(n.placeholders).forEach((([e,n])=>{i=replaceAll(i,`{{${e}}}`,n)})):i=e,i}}let i18n;const getI18nInstance=()=>i18n,initializeI18n=(e,n=TRANSLATIONS)=>(i18n=new I18nService(e),i18n.addTranslations(n),i18n);export{getI18nInstance as g,initializeI18n as i};