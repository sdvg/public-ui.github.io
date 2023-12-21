"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[71471],{46981:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var s=l(11527),i=l(16034);function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Die ",(0,s.jsx)(n.strong,{children:"Select"}),"-Komponente erzeugt eine Auswahlliste, aus der eine oder mehrere vorgegebene M\xf6glichkeiten ausgew\xe4hlt werden k\xf6nnen."]}),"\n",(0,s.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<kol-select\n\t_options=\"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]\"\n\t_value=\"['1']\"\n>\n\tAuswahlfeld\n</kol-select>\n<kol-select\n\t_options=\"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]\"\n\t_multiple\n\t_value=\"['0','2']\"\n>\n\tAuswahlfeld (Mehrfachauswahl)\n</kol-select>\n<kol-select\n\t_options=\"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'},{'label':'Herr','value':'3'},{'label':'Frau','value':'4'},{'label':'Firma','value':'5'}]\"\n\t_rows=\"4\"\n\t_value=\"['1']\"\n>\n\tAuswahlfeld mit _rows\n</kol-select>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,s.jsx)("kol-select",{_options:"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}",_value:"['1']",children:" Auswahlfeld "}),"\n",(0,s.jsx)("kol-select",{_options:"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]",_multiple:!0,_value:"['0','2']",children:(0,s.jsx)(n.p,{children:"Auswahlfeld (Mehrfachauswahl)"})}),"\n",(0,s.jsx)("kol-select",{_options:"[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'},{'label':'Herr','value':'3'},{'label':'Frau','value':'4'},{'label':'Firma','value':'5'}]",_rows:"4",_value:"['1']",children:"Auswahlfeld mit rows"}),"\n",(0,s.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,s.jsxs)(n.p,{children:["Die Auswahlm\xf6glichkeiten werden \xfcber das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_options"})})," als Objekt oder JSON-String an die Komponente \xfcbergeben. Je Option m\xfcssen die Werte ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"label"})})," und ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"value"})})," angegeben werden."]}),"\n",(0,s.jsx)(n.p,{children:"Beispiel f\xfcr die Konstruktion des JSON-Objektes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"[\n\t{ label: 'Herr', value: '0' },\n\t{ label: 'Frau', value: '1' },\n\t{ label: 'Firma', value: '2' },\n];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"individuelle-h\xf6he-angeben",children:"Individuelle H\xf6he angeben"}),"\n",(0,s.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_rows"})})," kann von einem Auswahlmen\xfc auf ein Auswahlfeld (wie bei ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_multiple"})}),") gewechselt werden und dessen H\xf6he gesetzt werden."]}),"\n",(0,s.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Taste"}),(0,s.jsx)(n.th,{children:"Funktion"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Tab"})}),(0,s.jsx)(n.td,{children:"Fokussiert das Auswahlfeld."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Enter"})}),(0,s.jsx)(n.td,{children:"\xd6ffnet bzw.schlie\xdft die Auswahlliste."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Pfeil-Tasten (oben / unten)"})}),(0,s.jsx)(n.td,{children:"Wechselt in der Auswahlliste das aktivierte Element. Diese Funktion ist auch bei eingeklappter Auswahlliste aktiv. Bei Mehrfachauswahl muss zur Auswahl mehrerer Eintr\xe4ge zus\xe4tzlich die Shift-Taste gedr\xfcck gehalten werden."})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"single-select-filter-f\xfcr-select-komponente",children:[(0,s.jsx)(n.code,{children:"Single-Select-Filter"})," f\xfcr Select-Komponente"]}),"\n",(0,s.jsxs)(n.p,{children:["Die Select-Komponente liefert bei Auswahl eines Wertes eine Liste (Array) mit genau einem\nWert zur\xfcck (im Single-Modus). Das kann bei der weiteren Verarbeitung zu unn\xf6tigem Aufwand f\xfchren. Einfacher ist es hier, den Wert der Select-Komponente \xfcber einen ",(0,s.jsx)("b",{children:"SingeSelectFormatter"})," zu Filtern. F\xfcgen Sie hierzu im Formular nachfolgende Klasse ein:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"class SingleSelectFormatter extends AbstractFormatter { public format(value: unknown): unknown { return [value]; }\npublic parse(value: unknown): unknown { if (Array.isArray(value) && value.length > 0) { return value[0]; } return value;\n} }\n"})}),"\n",(0,s.jsx)(n.p,{children:"F\xfcgen Sie den Formatter anschlie\xdfend der Select-Komponente hinzu:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"const singleSelectFormatHandler = new FormatHandler(); singleSelectFormatHandler.formatters.add([new\nSingleSelectFormatter()]); (this.getInput('kategorie') as InputControl).setFormatHandler(singleSelectFormatHandler);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Beachten Sie, dass der FormatHandler zun\xe4chst in die Form importiert wird."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"import { xxx..., xxx..., FormatHandler, } from '@leanup/form';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",children:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_accessKey"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_access-key"})}),(0,s.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_alert"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_alert"})}),(0,s.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_disabled"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_disabled"})}),(0,s.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_error"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_error"})}),(0,s.jsx)(n.td,{children:"Defines the error message text."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_height"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_height"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("span",{className:"text-red-500",children:(0,s.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _rows instead.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Deprecated: Defines an individual height."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hideLabel"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hide-label"})}),(0,s.jsx)(n.td,{children:"Hides the label."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hint"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hint"})}),(0,s.jsx)(n.td,{children:"Defines the hint text."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"''"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_icon"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_icon"})}),(0,s.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,s.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,s.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,s.jsx)(n.code,{children:"undefined; }"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_id"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_id"})}),(0,s.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_label"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_label"})}),(0,s.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,s.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_list"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_list"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("span",{className:"text-red-500",children:(0,s.jsx)(n.strong,{children:"[DEPRECATED]"})})," use _options",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Deprecated: Options the user can choose from, also supporting Optgroup."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"SelectOption<W3CInputValue>[]"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_multiple"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_multiple"})}),(0,s.jsx)(n.td,{children:"Makes the input accept multiple inputs."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_name"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_name"})}),(0,s.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_on"})}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_options"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_options"})}),(0,s.jsx)(n.td,{children:"Options the user can choose from, also supporting Optgroup."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"(Option<W3CInputValue>"})," | ",(0,s.jsx)(n.code,{children:"Optgroup<W3CInputValue>)[]"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_required"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_required"})}),(0,s.jsx)(n.td,{children:"Makes the input element required."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_rows"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_rows"})}),(0,s.jsx)(n.td,{children:"Defines how many rows of options should be visible at the same time."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_size"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_size"})}),(0,s.jsx)(n.td,{children:"Wechselt das Eingabeelement in den Auswahlfeld modus und setzt die H\xf6he des Feldes."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tabIndex"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tab-index"})}),(0,s.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tooltipAlign"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tooltip-align"})}),(0,s.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:'"bottom"'})," | ",(0,s.jsx)(n.code,{children:'"left"'})," | ",(0,s.jsx)(n.code,{children:'"right"'})," | ",(0,s.jsx)(n.code,{children:'"top"'})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'top'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_touched"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_touched"})}),(0,s.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_value"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_value"})}),(0,s.jsx)(n.td,{children:"Defines the value of the input."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"W3CInputValue[]"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Slot"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Die Beschriftung des Eingabefeldes."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./pagination",children:"kol-pagination"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"kol-input"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./tooltip",children:"kol-tooltip-wc"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD;\n  kol-select --\x3e kol-input\n  kol-select --\x3e kol-tooltip-wc\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-pagination --\x3e kol-select\n  style kol-select fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,s.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}var d=l(35863),c=l(94383);const a={title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",tags:["Select","Beschreibung","Spezifikation","Beispiele"]},o=void 0,h={id:"components/select",title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",source:"@site/versioned_docs/version-1.6/30-components/select.mdx",sourceDirName:"30-components",slug:"/components/select",permalink:"/en/docs/1.6/components/select",draft:!1,unlisted:!1,tags:[{label:"Select",permalink:"/en/docs/1.6/tags/select"},{label:"Beschreibung",permalink:"/en/docs/1.6/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.6/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.6/tags/beispiele"}],version:"1.6",frontMatter:{title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",tags:["Select","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Quote",permalink:"/en/docs/1.6/components/quote"},next:{title:"SkipNav",permalink:"/en/docs/1.6/components/skip-nav"}},u={},x=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{}),"\n",(0,s.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,s.jsx)(c._,{component:"select"}),"\n",(0,s.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,s.jsx)(d._,{component:"select",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},35863:(e,n,l)=>{l.d(n,{_:()=>a});var s=l(32404),i=l(50959),t=l(11527);const r=function(e,n,l,s,i){return void 0===i&&(i="editor"),`${e}&module=${s}&initialpath=%23%2F${n}%2F${l}&view=${i}`},d={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,t.jsxs)("div",{className:"m-2",children:[(0,t.jsx)("iframe",{src:n,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.jsx)(s.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,t.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},a=e=>{let{component:n,sample:l}=e;const[a,o]=(0,i.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${l}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${l}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return(0,t.jsxs)(s.UD,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,t.jsx)("div",{children:"Preview"===a&&(0,t.jsx)("iframe",{src:j,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,t.jsx)("div",{children:"Angular"===a&&(0,t.jsx)(c,{url:r(h,n,l,x.angular)})}),(0,t.jsx)("div",{children:"React"===a&&(0,t.jsx)(c,{url:r(h,n,l,x.react)})}),(0,t.jsx)("div",{children:"Vue"===a&&(0,t.jsx)(c,{url:r(h,n,l,x.vue)})}),(0,t.jsx)("div",{children:"Web Component"===a&&(0,t.jsx)(c,{url:r(h,n,l,x.webcomponent)})})]})}},94383:(e,n,l)=>{l.d(n,{_:()=>v});var s=l(7794),i=l(32404),t=l(50959),r=l(1206),d=l(11527);function c(e){const{label:n,name:l,update:s,value:r}=e;return(0,t.useEffect)((()=>{r||s(l,"#000000")}),[]),(0,d.jsx)(i.Np,{_label:"",_on:{onChange:(e,n)=>s(l,n)},_value:r,children:(0,d.jsx)("span",{slot:"expert",children:n})})}function a(e){const{attribute:n,label:l,update:s}=e,[r,c]=(0,t.useState)(""),[a,o]=(0,t.useState)(""),[h,u]=(0,t.useState)(""),[x,j]=(0,t.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,t.useEffect)((()=>{if(!r||a||h||x){const e={};r&&(e.left=`codicon codicon-${r}`),a&&(e.right=`codicon codicon-${a}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&s(n.name,JSON.stringify(e))}else s(n.name,`codicon codicon-${r}`)}),[r,a,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,d.jsxs)("div",{children:[l,p?(0,d.jsx)(i.ox,{_label:"Links",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,d.jsx)(i.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",b?(0,d.jsx)(i.ox,{_label:"Rechts",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,d.jsx)(i.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",m?(0,d.jsx)(i.ox,{_label:"Oben",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,d.jsx)(i.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,d.jsx)(i.ox,{_label:"Unten",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,d.jsx)(i.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function o(e){const{name:n,label:l,types:s,update:t,value:r}=e,c=[];function a(e){return{label:e,value:e}}return s.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...s.filter((e=>"undefined"!==e)).map(a))):c.push(...s.filter((e=>"undefined"!==e)).map(a)),(0,d.jsx)(i.r7,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onChange:(e,l)=>t(n,l[0])},_value:r?[r]:void 0,children:(0,d.jsx)("span",{slot:"expert",children:l})})}function h(e){const{attribute:n,update:l,value:s}=e,r=(0,t.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,t.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),t=(0,d.jsx)(i.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,d.jsx)(c,{name:n.name,label:t,update:l,value:s});case"_icon":return(0,d.jsx)(a,{attribute:n,label:t,update:l,value:s});default:switch(r){case"string":return(0,d.jsx)(i.WD,{className:"my-2",_label:"",_on:{onChange:(e,s)=>l(n.name,s)},_value:s||"",children:(0,d.jsx)("span",{slot:"expert",children:t})});case"number":return(0,d.jsx)(i.c2,{className:"my-2",_label:"",_on:{onChange:(e,s)=>l(n.name,s)},_value:s,children:(0,d.jsx)("span",{slot:"expert",children:t})});case"boolean":return(0,d.jsx)(i.TE,{className:"my-2",_checked:!0===s,_label:"",_on:{onChange:(e,s)=>l(n.name,s)},_variant:"switch",_value:!0,children:(0,d.jsx)("span",{slot:"expert",children:t})});default:return e.length>1?(0,d.jsx)(o,{label:t,name:n.name,types:e,update:l,value:s}):(0,d.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,d.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,s]);return(0,d.jsx)(d.Fragment,{children:h})}var u=l(22115),x=l(77192),j=l(85630),p=l.n(j);function b(e){const{tag:n,params:l}=e,s=Object.entries(l).filter((e=>"defaultValues"!==e[0]));let i="";const r=(0,t.useMemo)((()=>{let e="";return s.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const l=n[1],s=n[0].split("-")[1];if(l)if(l.match(/^<.*?>/)?.length){const n=l.indexOf(">");e+=l.substring(0,n)+` slot="${s}"`+l.substring(n)}else e+=`<div slot="${s}">${l}</div>`})),e}),[l]),c=s.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!l.defaultValues.includes(e[0])));for(const[t,d]of c)if(d){let e="";switch(typeof d){case"string":e=` ${t}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${t}="${d.toString()}"`;break;case"boolean":e=d?` ${t}`:"";break;case"object":e=` ${t}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}i+=e}const a=`<kol-${n}${i}>${r}</kol-${n}>`;let o;try{o=(0,x.format)(a,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${a}`}return(0,d.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,d.jsx)(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),l=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),s={abbr:i.T5,accordion:i.RZ,alert:i.K5,avatar:i.Ek,badge:i.Er,breadcrumb:i.lo,button:i.ic,"button-group":i.uz,"button-link":i.f6,card:i.Gc,details:i.ox,form:i.m5,heading:i.HA,icon:i.Jl,image:i.Cd,"indented-text":i.CV,"input-checkbox":i.TE,"input-color":i.Np,"input-date":i.O,"input-email":i.Lj,"input-file":i.CX,"input-number":i.c2,"input-password":i.z5,"input-radio":i.sy,"input-range":i.TQ,"input-text":i.WD,kolibri:i.Vs,link:i.Nv,"link-button":i.Kc,"link-group":i.$o,logo:i.QK,modal:i.Ud,nav:i.MA,pagination:i.Q4,progress:i.WR,quote:i.VZ,select:i.r7,"skip-nav":i.P,spin:i.qq,"split-button":i.KJ,symbol:i.is,table:i.Vp,tabs:i.UD,textarea:i.Qs,version:i.u_}[e.tag];return s?(0,d.jsx)(s,{...n,children:l.map((e=>(0,d.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,d.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:l,update:s,value:i}=e;return(0,d.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,d.jsx)("b",{children:l||"default"}),": ",n,(0,d.jsx)("br",{}),(0,d.jsx)(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>s(`slot-${l}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,l]=(0,t.useState)(function(){const e={};return Object.values(s.p).forEach((n=>{const l=n.name.replace("kol-","");e[l]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[l][n.name]=n.defaultValue.replace(/'/g,""),e[l].defaultValues.push(n.name)),void 0!==_[l]?.[n.name]&&(e[l][n.name]=_[l][n.name])})),n.slots.forEach((n=>{const s=`slot-${n.name||"default"}`,i=_[l]?.[s];i&&(e[l][s]=i)}))})),e}()),[c,a]=(0,t.useState)("badge");(0,t.useEffect)((()=>{e.component&&a(e.component.replace("kol-",""))}),[e.component]),(0,t.useEffect)((()=>{!!s.p.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&u("_label","Label-Text");!!s.p.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&u("_heading","Heading-Text")}),[c]);const o=(0,t.useMemo)((()=>n[c]||{}),[n,c]);function u(e,n){l((l=>{const s={...l[c],[e]:n,defaultValues:l[c].defaultValues.filter((n=>n!==e))};return{...l,[c]:s}}))}const x=Object.values(s.p).find((e=>e.name===`kol-${c}`));return(0,d.jsx)(r.Z,{children:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,d.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,d.jsxs)(i.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(m,{tag:c,params:o})}),(0,d.jsx)("div",{className:"lg:col-span-2",children:(0,d.jsx)(b,{params:o,tag:c})})]}),(0,d.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,d.jsx)(i.HA,{_level:3,_label:"Konfigurator"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(i.HA,{_level:4,_label:"Properties"}),(0,d.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,d.jsx)(d.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,d.jsx)(h,{attribute:e,update:u,value:o[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,d.jsx)(i.HA,{_level:4,_label:"Slots"}),(0,d.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,d.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:o["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);