"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[59604],{21568:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var i=l(76776),s=l(108);function t(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.strong,{children:"Select"}),"-Komponente erzeugt eine Auswahlliste, aus der eine oder mehrere vorgegebene M\xf6glichkeiten ausgew\xe4hlt werden k\xf6nnen."]}),"\n",(0,i.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,i.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<kol-select _list=\"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}\" _value=\"['1']\"> Auswahlfeld </kol-select>\n<kol-select _list=\"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]\" _multiple _value=\"['0','2']\">\n\tAuswahlfeld (Mehrfachauswahl)\n</kol-select>\n<kol-select\n\t_list=\"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'},{'label':'Herr','value':'3'},{'label':'Frau','value':'4'},{'label':'Firma','value':'5'}]\"\n\t_size=\"4\"\n\t_value=\"['1']\"\n>\n\tAuswahlfeld mit _size\n</kol-select>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsx)("kol-select",{_list:"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}",_value:"['1']",children:" Auswahlfeld "}),"\n",(0,i.jsx)("kol-select",{_list:"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]",_multiple:!0,_value:"['0','2']",children:(0,i.jsx)(n.p,{children:"Auswahlfeld (Mehrfachauswahl)"})}),"\n",(0,i.jsx)("kol-select",{_list:"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'},{'label':'Herr','value':'3'},{'label':'Frau','value':'4'},{'label':'Firma','value':'5'}]",_size:"4",_value:"['1']",children:"Auswahlfeld mit size"}),"\n",(0,i.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,i.jsxs)(n.p,{children:["Die Auswahlm\xf6glichkeiten werden \xfcber das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_list"})})," als Objekt oder JSON-String an die Komponente \xfcbergeben. Je Option m\xfcssen die Werte ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"label"})})," und ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"value"})})," angegeben werden."]}),"\n",(0,i.jsx)(n.p,{children:"Beispiel f\xfcr die Konstruktion des JSON-Objektes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"[\n\t{ label: 'Herr', value: '0' },\n\t{ label: 'Frau', value: '1' },\n\t{ label: 'Firma', value: '2' },\n];\n"})}),"\n",(0,i.jsx)(n.h3,{id:"individuelle-h\xf6he-angeben",children:"Individuelle H\xf6he angeben"}),"\n",(0,i.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_size"})})," kann von einem Auswahlmen\xfc auf ein Auswahlfeld (wie bei ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_multiple"})}),") gewechselt werden und dessen H\xf6he gesetzt werden."]}),"\n",(0,i.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Taste"}),(0,i.jsx)(n.th,{children:"Funktion"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Tab"})}),(0,i.jsx)(n.td,{children:"Fokussiert das Auswahlfeld."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Enter"})}),(0,i.jsx)(n.td,{children:"\xd6ffnet bzw.schlie\xdft die Auswahlliste."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Pfeil-Tasten (oben / unten)"})}),(0,i.jsx)(n.td,{children:"Wechselt in der Auswahlliste das aktivierte Element. Diese Funktion ist auch bei eingeklappter Auswahlliste aktiv. Bei Mehrfachauswahl muss zur Auswahl mehrerer Eintr\xe4ge zus\xe4tzlich die Shift-Taste gedr\xfcck gehalten werden."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"single-select-filter-f\xfcr-select-komponente",children:"Single-Select-Filter` f\xfcr Select-Komponente"}),"\n",(0,i.jsx)(n.p,{children:"Die Select-Komponente liefert bei Auswahl eines Wertes eine Liste"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Single-Select-Filter"})," f\xfcr Select-Komponente"]}),"\n",(0,i.jsxs)(n.p,{children:["Die Select-Komponente liefert bei Auswahl eines Wertes eine Liste (Array) mit genau einem\nWert zur\xfcck (im Single-Modus). Das kann bei der weiteren Verarbeitung zu unn\xf6tigem Aufwand f\xfchren. Einfacher ist es hier, den Wert der Select-Komponente \xfcber einen ",(0,i.jsx)("b",{children:"SingeSelectFormatter"})," zu Filtern. F\xfcgen Sie hierzu im Formular nachfolgende Klasse ein:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"class SingleSelectFormatter extends AbstractFormatter { public format(value: unknown): unknown { return [value]; } public parse(value: unknown): unknown { if\n(Array.isArray(value) && value.length > 0) { return value[0]; } return value; } }\n"})}),"\n",(0,i.jsx)(n.p,{children:"F\xfcgen Sie den Formatter anschlie\xdfend der Select-Komponente hinzu:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"const singleSelectFormatHandler = new FormatHandler(); singleSelectFormatHandler.formatters.add([new SingleSelectFormatter()]); (this.getInput('kategorie') as\nInputControl).setFormatHandler(singleSelectFormatHandler);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Beachten Sie, dass der FormatHandler zun\xe4chst in die Form importiert wird."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"import { xxx..., xxx..., FormatHandler, } from '@leanup/form';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",children:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_accessKey"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_access-key"})}),(0,i.jsx)(n.td,{children:"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_alert"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_alert"})}),(0,i.jsx)(n.td,{children:"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_disabled"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_disabled"})}),(0,i.jsx)(n.td,{children:"Setzt das Feld in einen inaktiven Zustand, in dem es keine Interaktion erlaubt."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_error"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_error"})}),(0,i.jsx)(n.td,{children:"Gibt den Text f\xfcr eine Fehlermeldung an."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_height"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_height"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)("span",{className:"text-red-500",children:(0,i.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _size instead.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Gibt an, ob eine individuelle H\xf6he \xfcbergeben werden soll."]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_hideLabel"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_hide-label"})}),(0,i.jsx)(n.td,{children:"Versteckt das sichtbare Label des Elements."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_hint"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_hint"})}),(0,i.jsx)(n.td,{children:"Gibt den Hinweistext an."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"''"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_icon"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_icon"})}),(0,i.jsx)(n.td,{children:"Erm\xf6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})," | ",(0,i.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,i.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,i.jsx)(n.code,{children:"undefined; }"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_id"})}),(0,i.jsx)(n.td,{children:"Gibt die technische ID des Eingabefeldes an."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"_list"})," ",(0,i.jsx)(n.em,{children:"(required)"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_list"})}),(0,i.jsx)(n.td,{children:"Gibt den technischen Namen des Eingabefeldes an."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"SelectOption<W3CInputValue>[]"})," | ",(0,i.jsx)(n.code,{children:"string"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_multiple"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_multiple"})}),(0,i.jsx)(n.td,{children:"Gibt an, ob mehrere Werte eingegeben werden k\xf6nnen."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_name"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_name"})}),(0,i.jsx)(n.td,{children:"Gibt den technischen Namen des Eingabefeldes an."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_on"})}),(0,i.jsx)(n.td,{children:"--"}),(0,i.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_required"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_required"})}),(0,i.jsx)(n.td,{children:"Macht das Eingabeelement zu einem Pflichtfeld."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_size"})}),(0,i.jsx)(n.td,{children:"Wechselt das Eingabeelement in den Auswahlfeld modus und setzt die H\xf6he des Feldes."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"number"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_tabIndex"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_tab-index"})}),(0,i.jsx)(n.td,{children:"Gibt an, welchen Tab-Index dieses Input hat."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"number"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_touched"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_touched"})}),(0,i.jsxs)(n.td,{children:["Gibt an, ob dieses Eingabefeld von Nutzer",":innen"," einmal besucht/ber\xfchrt wurde."]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_value"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_value"})}),(0,i.jsx)(n.td,{children:"Gibt den Wert des Eingabefeldes an."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"W3CInputValue[]"})," | ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Slot"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Die Beschriftung des Eingabefeldes."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./pagination",children:"kol-pagination"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"kol-input"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD;\n  kol-select --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-pagination --\x3e kol-select\n  style kol-select fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,i.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}var d=l(37704),a=l(54592);const c={title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",tags:["Select","Beschreibung","Spezifikation","Beispiele"]},o=void 0,h={id:"components/select",title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/select.mdx",sourceDirName:"30-components",slug:"/components/select",permalink:"/en/docs/1.5/components/select",draft:!1,unlisted:!1,tags:[{label:"Select",permalink:"/en/docs/1.5/tags/select"},{label:"Beschreibung",permalink:"/en/docs/1.5/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.5/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",tags:["Select","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Quote",permalink:"/en/docs/1.5/components/quote"},next:{title:"SkipNav",permalink:"/en/docs/1.5/components/skip-nav"}},u={},x=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Individuelle H\xf6he angeben",id:"individuelle-h\xf6he-angeben",level:3},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Single-Select-Filter` f\xfcr Select-Komponente",id:"single-select-filter-f\xfcr-select-komponente",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,i.jsx)(a.o,{component:"select"}),"\n",(0,i.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsx)(d.Q,{component:"select",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},37704:(e,n,l)=>{l.d(n,{Q:()=>c});var i=l(51376),s=l(80924),t=l(76776);const r=function(e,n,l,i,s){return void 0===s&&(s="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${l}&view=${s}`},d={width:"100%",height:"500px",border:"0",overflow:"hidden"},a=e=>{let{url:n}=e;return(0,t.jsxs)("div",{className:"m-2",children:[(0,t.jsx)("iframe",{src:n,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.jsx)(i.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,t.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:n,sample:l}=e;const[c,o]=(0,s.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${l}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${l}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return(0,t.jsxs)(i._,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,t.jsx)("div",{children:"Preview"===c&&(0,t.jsx)("iframe",{src:j,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,t.jsx)("div",{children:"Angular"===c&&(0,t.jsx)(a,{url:r(h,n,l,x.angular)})}),(0,t.jsx)("div",{children:"React"===c&&(0,t.jsx)(a,{url:r(h,n,l,x.react)})}),(0,t.jsx)("div",{children:"Vue"===c&&(0,t.jsx)(a,{url:r(h,n,l,x.vue)})}),(0,t.jsx)("div",{children:"Web Component"===c&&(0,t.jsx)(a,{url:r(h,n,l,x.webcomponent)})})]})}},54592:(e,n,l)=>{l.d(n,{o:()=>_});var i=l(28904),s=l(51376),t=l(80924),r=l(94368),d=l(76776);function a(e){const{label:n,name:l,update:i,value:r}=e;return(0,t.useEffect)((()=>{r||i(l,"#000000")}),[]),(0,d.jsx)(s.eK,{_label:"",_on:{onInput:(e,n)=>i(l,n)},_value:r,children:(0,d.jsx)("span",{slot:"expert",children:n})})}function c(e){const{attribute:n,label:l,update:i}=e,[r,a]=(0,t.useState)(""),[c,o]=(0,t.useState)(""),[h,u]=(0,t.useState)(""),[x,j]=(0,t.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,t.useEffect)((()=>{if(!r||c||h||x){const e={};r&&(e.left=`codicon codicon-${r}`),c&&(e.right=`codicon codicon-${c}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${r}`)}),[r,c,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,d.jsxs)("div",{children:[l,p?(0,d.jsx)(s.Si,{_label:"Links",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",b?(0,d.jsx)(s.Si,{_label:"Rechts",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",m?(0,d.jsx)(s.Si,{_label:"Oben",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,d.jsx)(s.Si,{_label:"Unten",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function o(e){const{name:n,label:l,types:i,update:t,value:r}=e,a=[];function c(e){return{label:e,value:e}}return i.includes("undefined")?(a.push({label:"-",value:void 0}),a.push(...i.filter((e=>"undefined"!==e)).map(c))):a.push(...i.filter((e=>"undefined"!==e)).map(c)),(0,d.jsx)(s.qy,{className:"my-2",_label:"",_options:JSON.stringify(a),_on:{onInput:(e,l)=>t(n,l[0])},_value:r?[r]:void 0,children:(0,d.jsx)("span",{slot:"expert",children:l})})}function h(e){const{attribute:n,update:l,value:i}=e,r=(0,t.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,t.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),t=(0,d.jsx)(s.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,d.jsx)(a,{name:n.name,label:t,update:l,value:i});case"_icons":return(0,d.jsx)(c,{attribute:n,label:t,update:l,value:i});default:switch(r){case"string":return(0,d.jsx)(s.Uh,{className:"my-2",_label:"",_on:{onInput:(e,i)=>l(n.name,i)},_value:i||"",children:(0,d.jsx)("span",{slot:"expert",children:t})});case"number":return(0,d.jsx)(s.QL,{className:"my-2",_label:"",_on:{onInput:(e,i)=>l(n.name,i)},_value:i,children:(0,d.jsx)("span",{slot:"expert",children:t})});case"boolean":return(0,d.jsx)(s.Q7,{className:"my-2",_checked:!0===i,_label:"",_on:{onInput:(e,i)=>l(n.name,i)},_variant:"switch",_value:!0,children:(0,d.jsx)("span",{slot:"expert",children:t})});default:return e.length>1?(0,d.jsx)(o,{label:t,name:n.name,types:e,update:l,value:i}):(0,d.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,d.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,d.jsx)(d.Fragment,{children:h})}var u=l(63136),x=l(28256),j=l(39452),p=l.n(j);function b(e){const{tag:n,params:l}=e,i=Object.entries(l).filter((e=>"defaultValues"!==e[0]));let s="";const r=(0,t.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const l=n[1],i=n[0].split("-")[1];if(l)if(l.match(/^<.*?>/)?.length){const n=l.indexOf(">");e+=l.substring(0,n)+` slot="${i}"`+l.substring(n)}else e+=`<div slot="${i}">${l}</div>`})),e}),[l]),a=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!l.defaultValues.includes(e[0])));for(const[t,d]of a)if(d){let e="";switch(typeof d){case"string":e=` ${t}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${t}="${d.toString()}"`;break;case"boolean":e=d?` ${t}`:"";break;case"object":e=` ${t}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}s+=e}const c=`<kol-${n}${s}>${r}</kol-${n}>`;let o;try{o=(0,x.format)(c,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,d.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,d.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),l=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:s.s1,accordion:s.IP,alert:s.mW,avatar:s.aq,badge:s.cX,breadcrumb:s.If,button:s.qC,"button-group":s.Os,"button-link":s.u_,card:s.Yh,details:s.Si,form:s.OO,heading:s.ch,icon:s.SA,image:s.iu,"indented-text":s.MV,"input-checkbox":s.Q7,"input-color":s.eK,"input-date":s.QZ,"input-email":s.kN,"input-file":s.Ex,"input-number":s.QL,"input-password":s.EH,"input-radio":s.wJ,"input-range":s.Ef,"input-text":s.Uh,kolibri:s.aY,link:s.GQ,"link-button":s._k,"link-group":s.O_,logo:s.ae,modal:s.cT,nav:s.Y4,pagination:s.kj,progress:s.O0,quote:s.SY,select:s.qy,"skip-nav":s.Ig,spin:s.kP,"split-button":s.a,symbol:s.OM,table:s.Y9,tabs:s._,textarea:s.DG,version:s.k1}[e.tag];return i?(0,d.jsx)(i,{...n,children:l.map((e=>(0,d.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,d.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:l,update:i,value:s}=e;return(0,d.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,d.jsx)("b",{children:l||"default"}),": ",n,(0,d.jsx)("br",{}),(0,d.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${l}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:s})]})}const g=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[n,l]=(0,t.useState)(function(){const e={};return Object.values(i.Q).forEach((n=>{const l=n.name.replace("kol-","");e[l]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[l][n.name]=n.defaultValue.replace(/'/g,""),e[l].defaultValues.push(n.name)),void 0!==v[l]?.[n.name]&&(e[l][n.name]=v[l][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,s=v[l]?.[i];s&&(e[l][i]=s)}))})),e}()),[a,c]=(0,t.useState)("badge");(0,t.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,t.useEffect)((()=>{!!i.Q.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_label"===e.name))&&!n[a]?._label&&u("_label","Label-Text");!!i.Q.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_heading"===e.name))&&!n[a]?._heading&&u("_heading","Heading-Text")}),[a]);const o=(0,t.useMemo)((()=>n[a]||{}),[n,a]);function u(e,n){l((l=>{const i={...l[a],[e]:n,defaultValues:l[a].defaultValues.filter((n=>n!==e))};return{...l,[a]:i}}))}const x=Object.values(i.Q).find((e=>e.name===`kol-${a}`));return(0,d.jsx)(r.c,{children:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,d.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,d.jsxs)(s._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(m,{tag:a,params:o})}),(0,d.jsx)("div",{className:"lg:col-span-2",children:(0,d.jsx)(b,{params:o,tag:a})})]}),(0,d.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,d.jsx)(s.ch,{_level:3,_label:"Konfigurator"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(s.ch,{_level:4,_label:"Properties"}),(0,d.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,d.jsx)(d.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,d.jsx)(h,{attribute:e,update:u,value:o[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,d.jsx)(s.ch,{_level:4,_label:"Slots"}),(0,d.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,d.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:o["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);