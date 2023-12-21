/*! For license information please see 43282.7c503372.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[43282],{27520:(e,n,t)=>{t.d(n,{a:()=>s,b:()=>m,c:()=>g,d:()=>o,e:()=>f,f:()=>l,g:()=>c,u:()=>h});var r=t(40480);const i=new Set,s=(e,n)=>{(!1===i.has(e)||(null==n?void 0:n.force))&&(i.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,o=(e,n)=>{(!1===a.has(e)||(null==n?void 0:n.force))&&(a.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=(e,n)=>{(!1===a.has(e)||(null==n?void 0:n.force))&&(a.add(e),r.L.warn([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,l=(e,n=!1,t)=>{(!1===u.has(e)||(null==t?void 0:t.force))&&(u.add(e),e+=!0===n?" \u2705":"",r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};o("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const d=new Set,h=(e,n)=>{(!1===d.has(e)||(null==n?void 0:n.force))&&(d.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},f=()=>{s('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||s("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},g=(e,n=8)=>{n>7&&h(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},28746:(e,n,t)=>{var r,i;t.d(n,{B:()=>r,b:()=>s,d:()=>a,f:()=>o}),(i=r||(r={}))["Die Bundesregierung"]="BReg",i["Bundesministerium der Finanzen"]="BMF",i["Bundesministerium des Innern, f\xfcr Bau und Heimat"]="BMI",i["Ausw\xe4rtiges Amt"]="AA",i["Bundesministerium f\xfcr Wirtschaft und Energie"]="BMWi",i["Bundesministerium der Justiz und f\xfcr Verbraucherschutz"]="BMJV",i["Bundesministerium f\xfcr Arbeit und Soziales"]="BMAS",i["Bundesministerium der Verteidigung"]="BMVg",i["Bundesministerium f\xfcr Ern\xe4hrung und Landwirtschaft"]="BMEL",i["Bundesministerium f\xfcr Familie, Senioren, Frauen und Jugend"]="BMFSFJ",i["Bundesministerium f\xfcr Gesundheit"]="BMG",i["Bundesministerium f\xfcr Verkehr und digitale Infrastruktur"]="BMVI",i["Bundesministerium f\xfcr Umwelt, Naturschutz und nukleare Sicherheit"]="BMU",i["Bundesministerium f\xfcr Bildung und Forschung"]="BMBF",i["Bundesministerium f\xfcr wirtschaftliche Zusammenarbeit und Entwicklung"]="BMZ";Object.getOwnPropertyNames(r);var s;!function(e){e["Beschaffungsamt des Bundesministeriums des Innern"]="BeschA",e["Bundesamt f\xfcr Ausr\xfcstung, Informationstechnik und Nutzung der Bundeswehr"]="BAAINBw",e["Bundesamt f\xfcr \xe4u\xdfere Restitutionen"]="BAR",e["Bundesamt f\xfcr Bauwesen und Raumordnung"]="BBR",e["Bundesamt f\xfcr Bev\xf6lkerungsschutz und Katastrophenhilfe"]="BBK",e["Bundesamt f\xfcr Familie und zivilgesellschaftliche Aufgaben"]="BAFzA",e["Bundesamt f\xfcr G\xfcterverkehr"]="BAG",e["Bundesamt f\xfcr Justiz"]="BfJ",e["Bundesamt f\xfcr Kartographie und Geod\xe4sie"]="BKG",e["Bundesamt f\xfcr kerntechnische Entsorgungssicherheit"]="BASE",e["Bundesamt f\xfcr Migration und Fl\xfcchtlinge"]="BAMF",e["Bundesamt f\xfcr Sicherheit in der Informationstechnik"]="BSI",e["Bundesamt f\xfcr Verbraucherschutz und Lebensmittelsicherheit"]="BVL",e["Bundesamt f\xfcr Verfassungsschutz"]="BfV",e["Bundesamt f\xfcr Wirtschaft und Ausfuhrkontrolle"]="BAFA",e["Bundesamt f\xfcr zentrale Dienste und offene Verm\xf6gensfragen"]="BADV",e["Bundesanstalt f\xfcr Verwaltungsdienstleistungen"]="BAV",e.Bundesarchiv="BArch",e["Bundesaufsichtsamt f\xfcr Flugsicherung"]="BAF",e.Bundesausgleichsamt="BAA",e.Bundeskartellamt="BKartA",e.Bundeskriminalamt="BKA",e.Bundesnachrichtendienst="BND",e["Bundesnetzagentur f\xfcr Elektrizit\xe4t, Gas, Telekommunikation, Post und Eisenbahnen"]="BNetzA",e["Bundespolizeipr\xe4sidium"]="BPOLP",e["Bundespr\xfcfstelle f\xfcr jugendgef\xe4hrdende Medien"]="BPjM",e.Bundessortenamt="BSA",e.Bundessprachenamt="BSprA",e["Bundesamt f\xfcr Soziale Sicherung"]="BAS",e.Bundesverwaltungsamt="BVA",e["Bundeszentralamt f\xfcr Steuern"]="BZSt",e["Deutsches Patent- und Markenamt"]="DPMA",e["Eisenbahn-Bundesamt"]="EBA",e.Generalzolldirektion="GZD",e["Milit\xe4rischer Abschirmdienst"]="MAD",e["Zentrale Stelle f\xfcr Informationstechnik im Sicherheitsbereich"]="ZITiS"}(s||(s={}));Object.getOwnPropertyNames(s);var a;!function(e){e["Informationstechnikzentrum Bund"]="ITZBund",e["Bundesanstalt f\xfcr den Digitalfunk der Beh\xf6rden und Organisationen mit Sicherheitsaufgaben"]="BDBOS",e["Bundesanstalt f\xfcr Landwirtschaft und Ern\xe4hrung"]="BLE",e["Bundesanstalt Technisches Hilfswerk"]="THW",e["Bundesinstitut f\xfcr Arzneimittel und Medizinprodukte"]="BfArM",e["Bundesinstitut f\xfcr Bev\xf6lkerungsforschung"]="BiB",e["Bundesinstitut f\xfcr Sportwissenschaft"]="BISp"}(a||(a={}));Object.getOwnPropertyNames(a);const o=new Map;o.set(r["Die Bundesregierung"],["Die","Bundesregierung"]),o.set(r["Bundesministerium der Finanzen"],["Bundesministerium","der Finanzen"]),o.set(r["Bundesministerium des Innern, f\xfcr Bau und Heimat"],["Bundesministerium","des Inneren, f\xfcr Bau","und Heimat"]),o.set(r["Ausw\xe4rtiges Amt"],["Ausw\xe4rtiges Amt"]),o.set(r["Bundesministerium f\xfcr Wirtschaft und Energie"],["Bundesministerium","f\xfcr Wirtschaft","und Energie"]),o.set(r["Bundesministerium der Justiz und f\xfcr Verbraucherschutz"],["Bundesministerium","der Justiz und","f\xfcr Verbraucherschutz"]),o.set(r["Bundesministerium f\xfcr Arbeit und Soziales"],["Bundesministerium","f\xfcr Arbeit und Soziales"]),o.set(r["Bundesministerium der Verteidigung"],["Bundesministerium","der Verteidigung"]),o.set(r["Bundesministerium f\xfcr Bildung und Forschung"],["Bundesministerium","f\xfcr Bildung","und Forschung"]),o.set(r["Bundesministerium f\xfcr Ern\xe4hrung und Landwirtschaft"],["Bundesministerium","f\xfcr Ern\xe4hrung","und Landwirtschaft"]),o.set(r["Bundesministerium f\xfcr Familie, Senioren, Frauen und Jugend"],["Bundesministerium","f\xfcr Familie, Senioren, Frauen","und Jugend"]),o.set(r["Bundesministerium f\xfcr Gesundheit"],["Bundesministerium","f\xfcr Gesundheit"]),o.set(r["Bundesministerium f\xfcr Umwelt, Naturschutz und nukleare Sicherheit"],["Bundesministerium","f\xfcr Umwelt, Naturschutz","und nukleare Sicherheit"]),o.set(r["Bundesministerium f\xfcr Verkehr und digitale Infrastruktur"],["Bundesministerium","f\xfcr Verkehr und","digitale Infrastruktur"]),o.set(r["Bundesministerium f\xfcr wirtschaftliche Zusammenarbeit und Entwicklung"],["Bundesministerium","f\xfcr wirtschaftliche Zusammenarbeit","und Entwicklung"]),o.set(s["Beschaffungsamt des Bundesministeriums des Innern"],["Beschaffungsamt","des Bundesministeriums","des Innern"]),o.set(s["Bundesamt f\xfcr Ausr\xfcstung, Informationstechnik und Nutzung der Bundeswehr"],[]),o.set(s["Bundesamt f\xfcr \xe4u\xdfere Restitutionen"],[]),o.set(s["Bundesamt f\xfcr Bauwesen und Raumordnung"],[]),o.set(s["Bundesamt f\xfcr Bev\xf6lkerungsschutz und Katastrophenhilfe"],["Bundesamt","f\xfcr Bev\xf6lkerungsschutz","und Katastrophenhilfe"]),o.set(s["Bundesamt f\xfcr Familie und zivilgesellschaftliche Aufgaben"],["Bundesamt","f\xfcr Familie und","zivilgesellschaftliche Aufgaben"]),o.set(s["Bundesamt f\xfcr G\xfcterverkehr"],["Bundesamt","f\xfcr G\xfcterverkehr"]),o.set(s["Bundesamt f\xfcr Justiz"],["Bundesamt f\xfcr","Justiz"]),o.set(s["Bundesamt f\xfcr Kartographie und Geod\xe4sie"],["Bundesamt f\xfcr","Kartographie und Geod\xe4sie"]),o.set(s["Bundesamt f\xfcr kerntechnische Entsorgungssicherheit"],["Bundesamt f\xfcr","kerntechnische","Entsorgungssicherheit"]),o.set(s["Bundesamt f\xfcr Migration und Fl\xfcchtlinge"],["Bundesamt","f\xfcr Migration","und Fl\xfcchtlinge"]),o.set(s["Bundesamt f\xfcr Sicherheit in der Informationstechnik"],["Bundesamt","f\xfcr Sicherheit in der","Informationstechnik"]),o.set(s["Bundesamt f\xfcr Verbraucherschutz und Lebensmittelsicherheit"],["Bundesamt f\xfcr","Verbraucherschutz und","Lebensmittelsicherheit"]),o.set(s["Bundesamt f\xfcr Verfassungsschutz"],["Bundesamt f\xfcr","Verfassungsschutz"]),o.set(s["Bundesamt f\xfcr Wirtschaft und Ausfuhrkontrolle"],["Bundesamt","f\xfcr Wirtschaft","Ausfuhrkontrolle"]),o.set(s["Bundesamt f\xfcr zentrale Dienste und offene Verm\xf6gensfragen"],["Bundesamt","f\xfcr zentrale Dienste und","offene Verm\xf6gensfragen"]),o.set(s["Bundesanstalt f\xfcr Verwaltungsdienstleistungen"],["Bundesanstalt","f\xfcr Verwaltungsdienstleistungen"]),o.set(s.Bundesarchiv,["Das","Bundesarchiv"]),o.set(s["Bundesaufsichtsamt f\xfcr Flugsicherung"],["Bundesaufsichtsamt","f\xfcr Flugsicherung"]),o.set(s.Bundesausgleichsamt,["Bundesausgleichsamt"]),o.set(s.Bundeskartellamt,["Bundeskartellamt"]),o.set(s.Bundeskriminalamt,["Bundeskriminalamt"]),o.set(s.Bundesnachrichtendienst,["Bundesnachrichtendienst"]),o.set(s["Bundesnetzagentur f\xfcr Elektrizit\xe4t, Gas, Telekommunikation, Post und Eisenbahnen"],["Bundesnetzagentur"]),o.set(s["Bundespolizeipr\xe4sidium"],["Bundespolizeipr\xe4sidium"]),o.set(s["Bundespr\xfcfstelle f\xfcr jugendgef\xe4hrdende Medien"],["Bundespr\xfcfstelle","f\xfcr jugendgef\xe4hrdende","Medien"]),o.set(s.Bundessortenamt,["Bundessortenamt"]),o.set(s.Bundessprachenamt,["Bundessprachenamt"]),o.set(s["Bundesamt f\xfcr Soziale Sicherung"],["Bundesamt","f\xfcr Soziale Sicherung"]),o.set(s.Bundesverwaltungsamt,["Bundesverwaltungsamt"]),o.set(s["Bundeszentralamt f\xfcr Steuern"],["Bundeszentralamt","f\xfcr Steuern"]),o.set(s["Deutsches Patent- und Markenamt"],["Deutsches","Patent- und Markenamt"]),o.set(s["Eisenbahn-Bundesamt"],["Eisenbahn-Bundesamt"]),o.set(s.Generalzolldirektion,["Generalzolldirektion"]),o.set(s["Milit\xe4rischer Abschirmdienst"],["Bundesamt f\xfcr den","Milit\xe4rischen Abschirmdienst"]),o.set(s["Zentrale Stelle f\xfcr Informationstechnik im Sicherheitsbereich"],["Zentrale Stelle","f\xfcr Informationstechnik","im Sicherheitsbereich"]),o.set(a["Informationstechnikzentrum Bund"],["Informations","Technik","Zentrum Bund"]),o.set(a["Bundesanstalt f\xfcr den Digitalfunk der Beh\xf6rden und Organisationen mit Sicherheitsaufgaben"],["Bundesanstalt","f\xfcr den Digitalfunk der Beh\xf6rden und","Organisationen mit Sicherheitsaufgaben"]),o.set(a["Bundesanstalt f\xfcr Landwirtschaft und Ern\xe4hrung"],["Bundesanstalt f\xfcr","Landwirtschaft und Ern\xe4hrung"]),o.set(a["Bundesanstalt Technisches Hilfswerk"],["Bundesanstalt","Technisches Hilfswerk"]),o.set(a["Bundesinstitut f\xfcr Arzneimittel und Medizinprodukte"],["Bundesinstitut","f\xfcr Arzneimittel","und Medizinprodukte"]),o.set(a["Bundesinstitut f\xfcr Bev\xf6lkerungsforschung"],["Bundesinstitut","f\xfcr Bev\xf6lkerungsforschung"]),o.set(a["Bundesinstitut f\xfcr Sportwissenschaft"],["Bundesinstitut","f\xfcr Sportwissenschaft"])},45364:(e,n,t)=>{t.d(n,{a:()=>u});var r=t(38696),i=t(27520);const s={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-ascending":"Die Spalte {{column}} ist aufsteigend{{multi}} sortiert.","sort-descending":"Die Spalte {{column}} ist absteigend{{multi}} sortiert.","sort-then-ascending":", dann die Spalte {{column}} aufsteigend","sort-then-descending":", dann die Spalte {{column}} absteigend","sort-then-last-ascending":" und dann die Spalte {{column}} aufsteigend","sort-then-last-descending":" und dann die Spalte {{column}} absteigend","sort-none":"Spalte {{column}} nicht sortiert","table-sort-none":"Keine Spalte ist sortiert.","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},a={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"Sorted column {{column}} descending{{multi}}","sort-ascending":"Sorted column {{column}} ascending{{multi}}","sort-then-ascending":", then column {{column}} acending","sort-then-descending":", then column {{column}} descending","sort-then-last-ascending":" and then column {{column}} acending","sort-then-last-descending":" and then column {{column}} descending","sort-none":"column {{column}} not sorted","table-sort-none":"No column is sorted.","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},o=e=>Object.keys(e).reduce(((n,t)=>(n[`kol-${t}`]=e[t],n)),{}),c=new Set([e=>e("en",o(a)),e=>e("de",o(s))]),u=(e,n)=>{const t=(0,r.g)();if(void 0===t)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let s=t.translate(e,n);return s===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),c.forEach((e=>e(((e,n)=>(t.addResourceBundle(e,n),e))))),s=t.translate(e,n)),s}},43282:(e,n,t)=>{t.r(n),t.d(n,{kol_logo:()=>h});var r=t(26231),i=t(28746),s=t(45364),a=t(27520),o=t(28854);function c(e,n=new Map){return Object.entries(e).map((([e,t])=>{n.set(t,e)})),n}const u=c(i.b,c(i.d,c(i.B)));function l(e){return u.has(e)?u.get(e):""}const d=()=>(0,r.h)("path",{d:"M21.72,12.77c0.04-0.33,0.06-0.67,0.06-1c0-0.2,0-0.43,0-0.69c3.06,0,5.74-2.25,5.74-4.78\nc-0.09-1.07-0.56-2.08-1.32-2.84l0.32-0.07c1,0.89,1.61,2.14,1.7,3.48c0,3-3,5.85-6.5,5.92 M18.64,2.21\nc-0.05-0.33-0.19-0.64-0.39-0.91c0-0.31,0.14-0.61,0.64-0.36c-0.27,0.27-0.06,0.76-0.06,0.76s0.55-0.26,0.44-0.62\nC20.09,1.28,19.5,2.38,18.64,2.21 M17.93,3.77c-0.12-0.47-0.34-0.9-0.64-1.27c-0.3-0.42-0.77-0.69-1.29-0.73\nc-0.34,0.03-0.68,0.12-1,0.25c-0.16-0.28-0.27-0.58-0.32-0.9c0-0.22,0.38-0.44,1.1-0.44c1.58,0,2.52,0.71,2.52,1.91\nC18.26,3.01,18.14,3.41,17.93,3.77 M22,24.16c0.13,0,0.26,0.02,0.38,0.07c0.64,1.3,1.4,2.53,2.29,3.68l0,0l0,0\nc0.81-0.14,1.63-0.22,2.45-0.24l0,0c0.1-0.01,0.2,0.01,0.28,0.07c0.07,0.09,0.1,0.2,0.09,0.31c-0.01,0.28-0.08,0.55-0.21,0.79\nc-0.46-0.4-1.07-0.59-1.68-0.51c-0.24,0.01-0.48,0.05-0.71,0.12h-0.07h-0.07l0.48,0.49c0.77,0.83,1.44,1.43,1.44,1.83\nc-0.04,0.31-0.22,0.58-0.48,0.74c-0.22-0.98-0.8-1.84-1.62-2.42h-0.06v0.27c0,0.19,0,0.47,0,0.77c0,1.49-0.15,1.72-0.67,1.72\nc-0.09,0.01-0.19,0.01-0.28,0c0.33-0.49,0.48-1.08,0.41-1.67v-0.7c0-0.27,0.03-0.53,0.06-0.8v-0.11h-0.08\nc-0.33-0.05-0.67-0.09-1-0.1c-0.57-0.07-1.14,0.07-1.6,0.41c-0.24-0.18-0.41-0.44-0.48-0.73c0-0.32,0.19-0.34,0.45-0.34\nc0.14-0.01,0.27-0.01,0.41,0c0.59,0.09,1.18,0.13,1.78,0.12h0.06v-0.06c-0.5-1.13-1.18-2.17-2-3.09c0.1-0.35,0.2-0.59,0.54-0.59\nM12.64,27.87v0.06h0.06c0.55-0.01,1.1-0.06,1.64-0.16c0.14-0.01,0.27-0.01,0.41,0c0.26,0,0.45,0,0.45,0.34\nc-0.07,0.29-0.24,0.55-0.48,0.73c-0.46-0.34-1.03-0.49-1.6-0.41c-0.33,0.01-0.67,0.05-1,0.1H12v0.11\nc0.03,0.27,0.06,0.53,0.06,0.8v0.7c-0.05,0.58,0.1,1.15,0.42,1.63c-0.09,0.01-0.19,0.01-0.28,0c-0.52,0-0.67-0.23-0.67-1.72\nc0-0.3,0-0.58,0-0.77V29l-0.06,0.05c-0.82,0.58-1.39,1.44-1.61,2.42c-0.28-0.14-0.47-0.4-0.53-0.7c0-0.43,0.65-1.07,1.39-1.81\nl0.43-0.43v-0.06h-0.14c-0.23-0.07-0.47-0.11-0.71-0.12c-0.61-0.08-1.22,0.11-1.68,0.51c-0.13-0.24-0.2-0.51-0.21-0.79\nc0.01-0.11,0.06-0.22,0.14-0.3c0.08-0.06,0.18-0.08,0.28-0.07l0,0c0.82,0.02,1.64,0.1,2.45,0.24l0,0l0,0\nc0.88-1.15,1.64-2.38,2.28-3.68c0.12-0.05,0.25-0.07,0.38-0.07c0.35,0,0.44,0.24,0.54,0.59c-0.82,0.92-1.5,1.96-2,3.09\nM7.78,6.87c0.08-1.36,0.7-2.62,1.72-3.52l0.32,0.07C9.06,4.19,8.6,5.19,8.51,6.26c0,2.56,2.73,4.78,5.82,4.78\nc0,0.22,0,0.45,0,0.69c-0.01,0.35,0,0.69,0.03,1.04c-3.5,0-6.58-2.86-6.58-5.92 M31.25,12.23c1.57,2.49,2.8,2.45,4.66,2.45\nc-1.19-0.97-2.21-2.14-3-3.46L30,6.65c-0.29-1.44-1.03-2.75-2.12-3.73c0.31-0.1,0.6-0.24,0.87-0.42c-1.88,0-3.73-1-4.75-1\nc-0.55-0.05-1.03,0.36-1.08,0.91c0,0.58,0.63,1.16,1.73,1.16c0.31,0,0.62-0.04,0.92-0.09c0.65,0.74,1.03,1.67,1.08,2.65\nc0,2-2.41,3.58-4.83,3.58h-0.41c-0.5-0.67-0.84-1.45-1-2.28c0-1.6,1.05-2.9,1.05-4.48c0-0.68-0.24-1.33-0.67-1.85\nc0.29-0.23,0.53-0.52,0.7-0.85c-0.22,0.08-0.45,0.11-0.68,0.09c-1.16,0-2.11-0.3-3-0.3c-0.53,0-0.67,0.16-0.67,0.31\nc-0.01,0.05-0.01,0.1,0,0.15c-0.19-0.08-0.39-0.13-0.59-0.17c-0.29-0.05-0.58-0.08-0.88-0.08c-1.13,0-1.52,0.47-1.52,0.87\nc0.07,0.52,0.27,1.01,0.57,1.44c0.4-0.2,0.84-0.31,1.28-0.34c0.6,0,1.13,0.57,1.41,1.24c-0.29,0.05-0.59,0.07-0.88,0.07\nc-0.68-0.03-1.36-0.16-2-0.39l0,0c0,0,0.31,0.56,0.92,0.78c0.72,0.22,1.46,0.37,2.21,0.45c-0.08,0.21-0.23,0.38-0.43,0.49\nc-0.05,0.02-0.09,0.02-0.14,0c-0.74-0.14-1.45-0.35-2.14-0.65H14.9c0,0.42,1.09,1.35,2.07,1.71c-1.06,1.1-1.87,2.41-2.39,3.85\nh-0.41c-2.42,0-4.82-1.57-4.82-3.58c0.05-0.98,0.43-1.91,1.07-2.65c0.3,0.05,0.61,0.09,0.92,0.09c1.1,0,1.69-0.58,1.74-1.16\nc-0.04-0.55-0.52-0.96-1.07-0.92c0,0,0,0-0.01,0c-1,0-2.88,1-4.76,1C7.51,2.73,7.8,2.87,8.11,2.97C7.03,3.94,6.29,5.23,6,6.65\nl-2.87,4.59c-0.79,1.32-1.81,2.49-3,3.46c1.86,0,3.09,0,4.66-2.45L6.26,9.9c0.11,0.31,0.24,0.61,0.4,0.9l-2.97,4.67\nc-0.79,1.32-1.8,2.49-3,3.46c1.85,0,3.08,0,4.65-2.44l2.52-4c0.19,0.2,0.39,0.4,0.6,0.58l-3.59,5.7c-0.79,1.32-1.8,2.49-3,3.45\nc1.85,0,3.08,0.05,4.65-2.44L10,14.2c0.22,0.14,0.46,0.28,0.7,0.41l-4.27,6.77c-0.79,1.31-1.81,2.48-3,3.45\nc1.85,0,3.08,0,4.65-2.44l4.36-7c0.25,0.1,0.51,0.2,0.78,0.28l-4.95,7.9c-0.79,1.31-1.81,2.48-3,3.45c1.85,0,3.08,0.05,4.65-2.43\nl5.24-8.39h0.16c0.14,0.42,0.22,0.86,0.24,1.3c0,2.64-1.73,5-3.8,6.76c0.19,0.06,0.38,0.09,0.58,0.08c0.3,0.01,0.6-0.01,0.9-0.05\nc-0.57,1.13-1.24,2.21-2,3.23c-0.77-0.13-1.54-0.2-2.32-0.22c-0.67,0-0.75,0.4-0.75,0.75c-0.01,0.53,0.22,1.03,0.62,1.38\nc0.13-0.31,0.38-0.73,1.63-0.73h0.13C10.11,29.13,9,30.06,9,30.77c0.06,0.66,0.59,1.18,1.25,1.24c-0.02-0.14-0.02-0.28,0-0.42\nc0.13-0.69,0.48-1.33,1-1.8c-0.01,0.1-0.01,0.2,0,0.3c0,1.43,0.13,2.08,1,2.08c0.31-0.01,0.61-0.12,0.86-0.31\nc-0.5-0.44-0.73-1.11-0.62-1.77c0-0.21,0-0.41,0-0.69c0.02-0.2,0.02-0.41,0-0.61c0.24-0.02,0.47-0.02,0.71,0\nc0,0,1.29-0.1,1.6,0.57c0.35-0.32,0.86-0.78,0.86-1.27c0-0.33-0.16-0.71-0.83-0.71c-0.25,0-1,0.16-1.7,0.16\nc0.48-0.84,1.04-1.64,1.66-2.39c0.1,0.39,0.31,0.74,0.62,1c0.12-1.17,0.54-2.28,1.21-3.24c0.16,0.93,0.24,1.87,0.23,2.82\nc0,3.55-0.85,6.17-2.66,6.67c0.26,0.46,0.73,0.75,1.25,0.78c0.66,0,1-0.75,1.39-1.46c0.19,0.53,0.72,1.8,1.25,1.8\ns1.06-1.27,1.25-1.8c0.37,0.71,0.73,1.46,1.39,1.46c0.52-0.03,1-0.33,1.26-0.78c-1.82-0.5-2.67-3.12-2.67-6.67\nc-0.01-0.95,0.07-1.89,0.23-2.82c0.68,0.96,1.1,2.07,1.21,3.24c0.31-0.26,0.53-0.61,0.63-1c0.61,0.75,1.15,1.54,1.62,2.38\nc-0.66,0-1.45-0.16-1.7-0.16c-0.67,0-0.82,0.38-0.82,0.71c0,0.49,0.51,1,0.86,1.27c0.3-0.67,1.59-0.57,1.59-0.57\nc0.24-0.02,0.47-0.02,0.71,0c-0.02,0.2-0.02,0.41,0,0.61v0.69c0.11,0.66-0.12,1.33-0.62,1.77c0.25,0.19,0.55,0.3,0.86,0.31\nc0.91,0,1-0.65,1-2.08c0.01-0.1,0.01-0.2,0-0.3c0.52,0.47,0.87,1.11,1,1.8c0.02,0.14,0.02,0.28,0,0.42\nc0.61-0.11,1.06-0.62,1.12-1.23c0-0.74-1.15-1.67-1.52-2.08h0.13c1.25,0,1.5,0.42,1.63,0.73c0.4-0.35,0.63-0.85,0.62-1.38\nc0-0.35-0.07-0.75-0.75-0.75c-0.78,0.02-1.55,0.09-2.32,0.22c-0.76-1.02-1.43-2.1-2-3.23c0.3,0.04,0.6,0.06,0.9,0.05\nc0.19,0.01,0.39-0.02,0.57-0.08c-2.07-1.79-3.8-4.12-3.8-6.76c0.02-0.44,0.1-0.88,0.24-1.3h0.16l5.24,8.39\nc1.57,2.48,2.8,2.43,4.65,2.43c-1.19-0.97-2.21-2.14-3-3.45l-4.92-7.87c0.27-0.08,0.53-0.18,0.79-0.28l4.35,7\nc1.57,2.48,2.8,2.44,4.65,2.44c-1.19-0.97-2.21-2.14-3-3.45l-4.23-6.77c0.24-0.13,0.48-0.27,0.7-0.41l3.42,5.55\nc1.57,2.49,2.8,2.44,4.65,2.44c-1.19-0.97-2.21-2.13-3-3.45l-3.55-5.69c0.2-0.18,0.4-0.38,0.59-0.58l2.52,4\nc1.57,2.48,2.8,2.44,4.65,2.44c-1.2-0.97-2.21-2.14-3-3.46l-2.99-4.7c0.16-0.29,0.29-0.59,0.4-0.9L31.25,12.23z"}),h=class{constructor(e){(0,r.r)(this,e),this._org=void 0,this.state={_org:i.d["Informationstechnikzentrum Bund"]}}validateOrg(e){"string"==typeof e&&u.has(e)?(0,o.s)(this,"_org",e):(0,a.d)(`Die verwendete Abk\xfcrzung (${e}) ist nicht definiert!`)}componentWillLoad(){this.validateOrg(this._org)}render(){var e;return(0,r.h)("svg",{"aria-label":(0,s.a)("kol-logo-description",{placeholders:{orgShort:this.state._org,orgLong:l(this.state._org)}}),role:"img",viewBox:"0 0 225 100"},(0,r.h)("rect",{width:"100%",height:"100%",fill:"white"}),(0,r.h)("svg",{x:"0",y:"4",height:"75"},(0,r.h)(d,null)),(0,r.h)("svg",{x:"40.5",y:"3.5",height:"100"},(0,r.h)("rect",{width:"5",height:"30"}),(0,r.h)("rect",{y:"30",width:"5",height:"30",fill:"red"}),(0,r.h)("rect",{y:"60",width:"5",height:"30",fill:"#fc0"})),(0,r.h)("svg",{x:"50",y:"0"},(0,r.h)("text",{x:"0",y:"-0.05em","font-family":"BundesSans Web",style:{backgroundColor:"white",color:"black"}},i.f.has(this.state._org)?(0,r.h)("tspan",null,null===(e=i.f.get(this.state._org))||void 0===e?void 0:e.map(((e,n)=>(0,r.h)("tspan",{x:"0",dy:"1.1em",key:`kol-logo-text-${n}`},e)))):(0,r.h)("tspan",{fill:"red"},(0,r.h)("tspan",{x:"0",dy:"1.1em"},"Der Schl\xfcsselwert"),(0,r.h)("tspan",{x:"0",dy:"1.1em","font-weight":"bold"},"'",this.state._org,"'"),(0,r.h)("tspan",{x:"0",dy:"1.1em"},"ist nicht definiert."),(0,r.h)("tspan",{x:"0",dy:"1.1em"},"oder freigegeben.")))))}static get watchers(){return{_org:["validateOrg"]}}};h.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: inline-block;\n\t}\n\n\ttext {\n\t\tfont-size: 16px;\n\t\tletter-spacing: normal;\n\t\tword-spacing: normal;\n\t}\n\n\tsvg {\n\t\tmax-height: 100%;\n\t}\n}\n"}},28854:(e,n,t)=>{t.d(n,{K:()=>re,a:()=>V,b:()=>M,c:()=>j,d:()=>T,e:()=>C,f:()=>O,g:()=>D,h:()=>$,i:()=>_,j:()=>te,k:()=>Z,l:()=>ee,m:()=>K,n:()=>U,o:()=>E,p:()=>G,q:()=>ne,r:()=>c,s:()=>F,t:()=>R,w:()=>P});var r=t(40480),i=t(27520);const s=(e,n)=>{n.forEach((n=>{!1===e.has(n)&&e.add(n)}))},a=(e,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){const t=new Set;s(t,n.querySelectorAll(e));const r=n.querySelectorAll('[class*="hydrated"]');for(let n=0;n<r.length;n++){const i=r[n].shadowRoot;s(t,a(e,"object"==typeof i&&null!==i?i:r[n]))}return Array.from(t)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},o=(e,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){let t=n.querySelector(e);if(null===t){const r=n.querySelectorAll('[class*="hydrated"]');for(let n=0;n<r.length;n++){const i=r[n].shadowRoot;if(t=o(e,"object"==typeof i&&null!==i?i:r[n]),null!==t)break}}return t}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=m,u=m,l=function(e){var n=g(e);return{r:n[0],g:n[1],b:n[2],a:3==n.length?255:Math.round(n[3])}},d=function(e){var n=g(e);return 3==n.length&&n.push(255),255==n[3]?"rgb("+n[0]+", "+n[1]+", "+n[2]+")":0==n[3]?"rgba("+n[0]+", "+n[1]+", "+n[2]+", 0)":"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+String(n[3]/255).substr(1)+")"},h=function(e){3==(n=g(e)).length&&n.push(255);var n,t=255==n[3],r=p(n[0]),i=p(n[1]),s=p(n[2]),a=function(e,n,t,r){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(n)&&-1!=i.indexOf(t)&&-1!=i.indexOf(r)}(r,i,s,n=p(Math.round(n[3])));return t?a?"#"+r.charAt(0)+i.charAt(0)+s.charAt(0):"#"+r+i+s:a?"#"+r.charAt(0)+i.charAt(0)+s.charAt(0)+n.charAt(0):"#"+r+i+s+n},f=function(e){var n=g(e);return 3==n.length?n.push(255):n[3]=Math.round(n[3]),(n[3]<<24>>>0|n[0]<<16|n[1]<<8|n[2])>>>0};function m(e){var n=g(e);return 3==n.length?n.concat(255):(n[3]=Math.round(n[3]),n)}function g(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var n=e.replace(/^#/,""),t=n.length;if(3==t||4==t){var r=B(n[0]),i=B(n[1]),s=B(n[2]),a=3==t?255:B(n[3]);if(isNaN(r)||isNaN(i)||isNaN(s)||isNaN(a))return;return[r,i,s,a]}}(e)||function(e){var n=e.replace(/^#/,""),t=n.length;if(6==t||8==t){var r=B(n.slice(0,2)),i=B(n.slice(2,4)),s=B(n.slice(4,6)),a=6==t?255:B(n.slice(6,8));if(isNaN(r)||isNaN(i)||isNaN(s)||isNaN(a))return;return[r,i,s,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var n=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=b(n[0],!0),r=b(n[1],!0),i=b(n[2],!0);if(-1!=t&&-1!=r&&-1!=i)return[t,r,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var n=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=b(n[0],!0),r=b(n[1],!0),i=b(n[2],!0),s=b(255*n[3]);if(-1!=t&&-1!=r&&-1!=i&&-1!=s)return[t,r,i,s]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var n=b(null!=e.r?e.r:null!=e.red?e.red:0,!0),t=b(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=b(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=b(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=n&&-1!=t&&-1!=r&&-1!=i)return[n,t,r,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var n=b(e[0],!0),t=b(e[1],!0),r=b(e[2],!0),i=b(null!=e[3]?e[3]:255,!0);if(-1!=n&&-1!=t&&-1!=r&&-1!=i)return[n,t,r,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var n=e.toString(16);return 1==n.length?"0"+n:n}function B(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function b(e,n){return"number"!=typeof e||!0===n&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=u,c.obj=l,c.css=d,c.hex=h,c.num=f;var w=.2126,k=.7152,v=.0722,y=1/12.92;function S(e){return Math.pow((e+.055)/1.055,2.4)}function z(e){var n=e[0]/255,t=e[1]/255,r=e[2]/255,i=n<=.03928?n*y:S(n),s=t<=.03928?t*y:S(t),a=r<=.03928?r*y:S(r);return i*w+s*k+a*v}function A(e){var n=255;8===(e=e.replace(/^#/,"")).length&&(n=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(n=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,n]}function x(e,n){return function(e,n){return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}(z(e),z(n))}function M(e,n){return x(A(e),A(n))}function L(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const N=/\[object Object\]/,E=(e,n)=>{"string"==typeof e&&N.test(e)||n()},D=(e,n)=>{"string"==typeof e&&""===e||n()},O=(e,n)=>{(0,r.d)()&&(r.L.debug([e,n]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:n,writable:!1})},F=(e,n,t,r={})=>{var i,s;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(n)!==t&&(e.nextHooks.get(n)instanceof Map==0&&e.nextHooks.set(n,new Map),"function"==typeof r.afterPatch&&(null===(i=e.nextHooks.get(n))||void 0===i||i.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(s=e.nextHooks.get(n))||void 0===s||s.set("beforePatch",r.beforePatch)),e.nextState.set(n,t),(e=>{var n,t,r;null===(n=e.nextHooks)||void 0===n||n.forEach(((n,t)=>{var r;const i=n.get("beforePatch");"function"==typeof i&&i(null===(r=e.nextState)||void 0===r?void 0:r.get(t),e.nextState,e,t)})),(null===(t=e.nextState)||void 0===t?void 0:t.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((n,t)=>{const r=n.get("afterPatch");"function"==typeof r&&r(e.state[t],e.state,e,t)}))),delete e.nextHooks})(e))},I=(e,n,t,r)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${t}) f\xfcr '${n}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)};function P(e,n,t,r,i,s={}){t(i)?F(e,n,i,s.hooks):null!=i||s.required?(s.required||r.add(null),I(e,n,i,r)):F(e,n,s.defaultValue,s.hooks)}const V=(e,n,t,r)=>{P(e,n,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),t,r)},T=(e,n,t,r={})=>{const i="number"==typeof r.minLength?null==r?void 0:r.minLength:0;P(e,n,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),t,r)},C=(e,n,t,r)=>{P(e,n,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),t,r)},j=(e,n,t,i,s=(e=>e==e),a={})=>{D(i,(()=>{E(i,(()=>{void 0===i&&(i=[]);try{try{i=G(i)}catch(e){}if(Array.isArray(i)){const o=i.find((e=>!t(e)));void 0===o&&s(i)?F(e,n,i,a.hooks):E(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(i,(()=>{throw r.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},H=/^(true|false)$/,W=/^-?(0|[1-9]\d*)$/,J=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,K=e=>{const n=typeof e,t=`${e}`;if("string"==typeof e)if(H.test(e))e="true"===e;else if(W.test(e))e=parseInt(e);else if(J.test(e))e=parseFloat(e);else if(q.test(e))try{e=G(e)}catch(e){}return n!==typeof e&&(0,i.d)(`You have used a stringified property value (${t} to ${JSON.stringify(e)}) which type switched from ${n} to ${typeof e}!`),e},R=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(v){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},q=/^[{[]/,G=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(v){if(q.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(v){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},$=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,_=e=>"string"==typeof e?e:$(e),Z=(e,n)=>o(e,n||(0,r.a)()),U=(e,n)=>a(e,n||(0,r.a)());let Y=null;const Q=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.a)().body,level:"Fail",score:1},Y),X=/(\d+, ){3}0\)/,ee=(e,n=Q())=>{const t=getComputedStyle(e),i=X.test(t.backgroundColor)?n.backgroundColor:c.hex(t.backgroundColor),s=X.test(t.color)?n.color:c.hex(t.color),a=M(i,s),o={backgroundColor:i,color:s,domNode:e,level:L(a),score:a};return a<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:o.backgroundColor,color:o.color,level:o.level,score:o.score},o.domNode]),o},ne=(e,n=Q())=>{n.domNode instanceof HTMLElement&&(n=ee(n.domNode,n));const t=n.domNode.querySelector(e);if(null===t){const t=n.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<t.length&&(n.domNode=t[r],null===(n=ne(e,n)).domNode);r++);return n}return ee(t,n)};class te{static queryHtmlElementColors(e,n,t=!1,i=!0){let s=null;if(!0===t||!1===te.executionLock)if(!1===t&&(te.cache.clear(),te.cache.set(n.domNode,n),te.executionLock=!0,!0===i&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===n.domNode)s=n;else{const t=new Set;if(n.domNode.shadowRoot){const e=n.domNode.shadowRoot.children;for(let n=0;n<e.length;n++)t.add(e[n])}const r=n.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let n=0;n<e.length;n++)e[n]instanceof HTMLElement&&t.add(e[n])}const i=n.domNode.children;for(let e=0;e<i.length;e++)t.add(i[e]);const a=Array.from(t);for(let o=0;o<a.length;o++){let t=te.cache.get(a[o]);void 0===t&&(t=ee(a[o],n)),te.cache.set(a[o],t);const r=te.queryHtmlElementColors(e,t,!0,!1);if(null!==r){s=r;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===t&&(!0===i&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),s}}te.executionLock=!1,te.cache=new Map;class re{}re.patchTheme=r.b,re.patchThemeTag=r.A,re.querySelector=Z,re.querySelectorAll=U,re.stringifyJson=R}}]);