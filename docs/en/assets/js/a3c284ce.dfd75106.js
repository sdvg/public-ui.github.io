"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[50372],{49512:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var s=l(76776),i=l(108);function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Die ",(0,s.jsx)(n.strong,{children:"Select"}),"-Komponente erzeugt eine Auswahlliste, aus der eine oder mehrere vorgegebene M\xf6glichkeiten ausgew\xe4hlt werden k\xf6nnen."]}),"\n",(0,s.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<kol-select _options=\"[{'label':'Herr','value':0},{'label':'Frau','value':1},{'label':'Firma','value':2}]\" _value=\"[1]\"> Auswahlfeld </kol-select>\n<kol-select _options=\"[{'label':'Herr','value':0},{'label':'Frau','value':1},{'label':'Firma','value':2}]\" _multiple _value=\"[0,2]\">\n\tAuswahlfeld (Mehrfachauswahl)\n</kol-select>\n<kol-select\n\t_options=\"[{'label':'Herr','value':0},{'label':'Frau','value':1},{'label':'Firma','value':2},{'label':'Herr','value':3},{'label':'Frau','value':4},{'label':'Firma','value':5}]\"\n\t_rows=\"4\"\n\t_value=\"[1]\"\n>\n\tAuswahlfeld mit _rows\n</kol-select>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,s.jsx)("kol-select",{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1},{'label':'Firma','value':2}]",_value:"[1]",children:" Auswahlfeld "}),"\n",(0,s.jsx)("kol-select",{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1},{'label':'Firma','value':2}]",_multiple:!0,_value:"[0,2]",children:(0,s.jsx)(n.p,{children:"Auswahlfeld (Mehrfachauswahl)"})}),"\n",(0,s.jsx)("kol-select",{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1},{'label':'Firma','value':2},{'label':'Herr','value':3},{'label':'Frau','value':4},{'label':'Firma','value':5}]",_rows:"4",_value:"[1]",children:"Auswahlfeld mit rows"}),"\n",(0,s.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,s.jsxs)(n.p,{children:["Die Auswahlm\xf6glichkeiten werden \xfcber das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_options"})})," als Objekt oder JSON-String an die Komponente \xfcbergeben. Je Option m\xfcssen die Werte ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"label"})})," und ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"value"})})," angegeben werden."]}),"\n",(0,s.jsx)(n.p,{children:"Beispiel f\xfcr die Konstruktion des JSON-Objektes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n\t{ "label": "Herr", "value": 0 },\n\t{ "label": "Frau", "value": 1 },\n\t{ "label": "Firma", "value": 2 }\n]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"individuelle-h\xf6he-angeben",children:"Individuelle H\xf6he angeben"}),"\n",(0,s.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_rows"})})," kann von einem Auswahlmen\xfc auf ein Auswahlfeld (wie bei ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_multiple"})}),") gewechselt werden und dessen H\xf6he gesetzt werden."]}),"\n",(0,s.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Taste"}),(0,s.jsx)(n.th,{children:"Funktion"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Tab"})}),(0,s.jsx)(n.td,{children:"Fokussiert das Auswahlfeld."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Enter"})}),(0,s.jsx)(n.td,{children:"\xd6ffnet bzw.schlie\xdft die Auswahlliste."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Pfeil-Tasten (oben / unten)"})}),(0,s.jsx)(n.td,{children:"Wechselt in der Auswahlliste das aktivierte Element. Diese Funktion ist auch bei eingeklappter Auswahlliste aktiv. Bei Mehrfachauswahl muss zur Auswahl mehrerer Eintr\xe4ge zus\xe4tzlich die Shift-Taste gedr\xfcck gehalten werden."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"single-select-filter-f\xfcr-select-komponente",children:"Single-Select-Filter` f\xfcr Select-Komponente"}),"\n",(0,s.jsx)(n.p,{children:"Die Select-Komponente liefert bei Auswahl eines Wertes eine Liste"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Single-Select-Filter"})," f\xfcr Select-Komponente"]}),"\n",(0,s.jsxs)(n.p,{children:["Die Select-Komponente liefert bei Auswahl eines Wertes eine Liste (Array) mit genau einem\nWert zur\xfcck (im Single-Modus). Das kann bei der weiteren Verarbeitung zu unn\xf6tigem Aufwand f\xfchren. Einfacher ist es hier, den Wert der Select-Komponente \xfcber einen ",(0,s.jsx)("b",{children:"SingeSelectFormatter"})," zu Filtern. F\xfcgen Sie hierzu im Formular nachfolgende Klasse ein:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"class SingleSelectFormatter extends AbstractFormatter { public format(value: unknown): unknown { return [value]; } public parse(value: unknown): unknown { if\n(Array.isArray(value) && value.length > 0) { return value[0]; } return value; } }\n"})}),"\n",(0,s.jsx)(n.p,{children:"F\xfcgen Sie den Formatter anschlie\xdfend der Select-Komponente hinzu:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"const singleSelectFormatHandler = new FormatHandler(); singleSelectFormatHandler.formatters.add([new SingleSelectFormatter()]); (this.getInput('kategorie') as\nInputControl).setFormatHandler(singleSelectFormatHandler);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Beachten Sie, dass der FormatHandler zun\xe4chst in die Form importiert wird."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"import { xxx..., xxx..., FormatHandler, } from '@leanup/form';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",children:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_accessKey"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_access-key"})}),(0,s.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_alert"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_alert"})}),(0,s.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_disabled"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_disabled"})}),(0,s.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_error"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_error"})}),(0,s.jsx)(n.td,{children:"Defines the error message text."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_height"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_height"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("span",{className:"text-red-500",children:(0,s.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _rows instead.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Deprecated: Defines an individual height."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hideError"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hide-error"})}),(0,s.jsx)(n.td,{children:"Hides the error message but leaves it in the DOM for the input's aria-describedby."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hideLabel"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hide-label"})}),(0,s.jsx)(n.td,{children:"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hint"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_hint"})}),(0,s.jsx)(n.td,{children:"Defines the hint text."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"''"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_icon"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_icon"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("span",{className:"text-red-500",children:(0,s.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _icons.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,s.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,s.jsx)(n.code,{children:"undefined; }"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_icons"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_icons"})}),(0,s.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,s.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,s.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,s.jsx)(n.code,{children:"undefined; }"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_id"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_id"})}),(0,s.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_label"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_label"})}),(0,s.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,s.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_list"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_list"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("span",{className:"text-red-500",children:(0,s.jsx)(n.strong,{children:"[DEPRECATED]"})})," use _options",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Deprecated: Options the user can choose from, also supporting Optgroup."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"SelectOption<W3CInputValue>[]"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_multiple"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_multiple"})}),(0,s.jsx)(n.td,{children:"Makes the input accept multiple inputs."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_name"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_name"})}),(0,s.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_on"})}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_options"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_options"})}),(0,s.jsx)(n.td,{children:"Options the user can choose from, also supporting Optgroup."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"(Option<W3CInputValue>"})," | ",(0,s.jsx)(n.code,{children:"Optgroup<W3CInputValue>)[]"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_required"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_required"})}),(0,s.jsx)(n.td,{children:"Makes the input element required."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_rows"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_rows"})}),(0,s.jsx)(n.td,{children:"Defines how many rows of options should be visible at the same time."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_size"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_size"})}),(0,s.jsx)(n.td,{children:"Wechselt das Eingabeelement in den Auswahlfeld modus und setzt die H\xf6he des Feldes."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tabIndex"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tab-index"})}),(0,s.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"number"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tooltipAlign"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_tooltip-align"})}),(0,s.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:'"bottom"'})," | ",(0,s.jsx)(n.code,{children:'"left"'})," | ",(0,s.jsx)(n.code,{children:'"right"'})," | ",(0,s.jsx)(n.code,{children:'"top"'})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'top'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_touched"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_touched"})}),(0,s.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_value"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"_value"})}),(0,s.jsx)(n.td,{children:"Defines the value of the input."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"W3CInputValue[]"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Slot"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Die Beschriftung des Eingabefeldes."})]})})]}),"\n",(0,s.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}var r=l(37704),c=l(54592);const a={title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",tags:["Select","Beschreibung","Spezifikation","Beispiele"]},o=void 0,h={id:"components/select",title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/select.mdx",sourceDirName:"30-components",slug:"/components/select",permalink:"/en/docs/1.7/components/select",draft:!1,unlisted:!1,tags:[{label:"Select",permalink:"/en/docs/1.7/tags/select"},{label:"Beschreibung",permalink:"/en/docs/1.7/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.7/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"Select",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Select-Komponente.",tags:["Select","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Quote",permalink:"/en/docs/1.7/components/quote"},next:{title:"SkipNav",permalink:"/en/docs/1.7/components/skip-nav"}},u={},x=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Individuelle H\xf6he angeben",id:"individuelle-h\xf6he-angeben",level:3},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Single-Select-Filter` f\xfcr Select-Komponente",id:"single-select-filter-f\xfcr-select-komponente",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{}),"\n",(0,s.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,s.jsx)(c.o,{component:"select"}),"\n",(0,s.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,s.jsx)(r.Q,{component:"select",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},37704:(e,n,l)=>{l.d(n,{Q:()=>a});var s=l(51376),i=l(80924),t=l(76776);const d=function(e,n,l,s,i){return void 0===i&&(i="editor"),`${e}&module=${s}&initialpath=%23%2F${n}%2F${l}&view=${i}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,t.jsxs)("div",{className:"m-2",children:[(0,t.jsx)("iframe",{src:n,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.jsx)(s.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,t.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},a=e=>{let{component:n,sample:l}=e;const[a,o]=(0,i.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${l}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${l}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return(0,t.jsxs)(s._,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,t.jsx)("div",{children:"Preview"===a&&(0,t.jsx)("iframe",{src:j,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,t.jsx)("div",{children:"Angular"===a&&(0,t.jsx)(c,{url:d(h,n,l,x.angular)})}),(0,t.jsx)("div",{children:"React"===a&&(0,t.jsx)(c,{url:d(h,n,l,x.react)})}),(0,t.jsx)("div",{children:"Vue"===a&&(0,t.jsx)(c,{url:d(h,n,l,x.vue)})}),(0,t.jsx)("div",{children:"Web Component"===a&&(0,t.jsx)(c,{url:d(h,n,l,x.webcomponent)})})]})}},54592:(e,n,l)=>{l.d(n,{o:()=>v});var s=l(28904),i=l(51376),t=l(80924),d=l(94368),r=l(76776);function c(e){const{label:n,name:l,update:s,value:d}=e;return(0,t.useEffect)((()=>{d||s(l,"#000000")}),[]),(0,r.jsx)(i.eK,{_label:"",_on:{onInput:(e,n)=>s(l,n)},_value:d,children:(0,r.jsx)("span",{slot:"expert",children:n})})}function a(e){const{attribute:n,label:l,update:s}=e,[d,c]=(0,t.useState)(""),[a,o]=(0,t.useState)(""),[h,u]=(0,t.useState)(""),[x,j]=(0,t.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,t.useEffect)((()=>{if(!d||a||h||x){const e={};d&&(e.left=`codicon codicon-${d}`),a&&(e.right=`codicon codicon-${a}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&s(n.name,JSON.stringify(e))}else s(n.name,`codicon codicon-${d}`)}),[d,a,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[l,p?(0,r.jsx)(i.Si,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",b?(0,r.jsx)(i.Si,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",m?(0,r.jsx)(i.Si,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,r.jsx)(i.Si,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function o(e){const{name:n,label:l,types:s,update:t,value:d}=e,c=[];function a(e){return{label:e,value:e}}return s.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...s.filter((e=>"undefined"!==e)).map(a))):c.push(...s.filter((e=>"undefined"!==e)).map(a)),(0,r.jsx)(i.qy,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onInput:(e,l)=>t(n,l[0])},_value:d?[d]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:l})})}function h(e){const{attribute:n,update:l,value:s}=e,d=(0,t.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,t.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),t=(0,r.jsx)(i.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,r.jsx)(c,{name:n.name,label:t,update:l,value:s});case"_icons":return(0,r.jsx)(a,{attribute:n,label:t,update:l,value:s});default:switch(d){case"string":return(0,r.jsx)(i.Uh,{className:"my-2",_label:"",_on:{onInput:(e,s)=>l(n.name,s)},_value:s||"",children:(0,r.jsx)("span",{slot:"expert",children:t})});case"number":return(0,r.jsx)(i.QL,{className:"my-2",_label:"",_on:{onInput:(e,s)=>l(n.name,s)},_value:s,children:(0,r.jsx)("span",{slot:"expert",children:t})});case"boolean":return(0,r.jsx)(i.Q7,{className:"my-2",_checked:!0===s,_label:"",_on:{onInput:(e,s)=>l(n.name,s)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:t})});default:return e.length>1?(0,r.jsx)(o,{label:t,name:n.name,types:e,update:l,value:s}):(0,r.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,r.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,s]);return(0,r.jsx)(r.Fragment,{children:h})}var u=l(63136),x=l(28256),j=l(39452),p=l.n(j);function b(e){const{tag:n,params:l}=e,s=Object.entries(l).filter((e=>"defaultValues"!==e[0]));let i="";const d=(0,t.useMemo)((()=>{let e="";return s.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const l=n[1],s=n[0].split("-")[1];if(l)if(l.match(/^<.*?>/)?.length){const n=l.indexOf(">");e+=l.substring(0,n)+` slot="${s}"`+l.substring(n)}else e+=`<div slot="${s}">${l}</div>`})),e}),[l]),c=s.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!l.defaultValues.includes(e[0])));for(const[t,r]of c)if(r){let e="";switch(typeof r){case"string":e=` ${t}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${t}="${r.toString()}"`;break;case"boolean":e=r?` ${t}`:"";break;case"object":e=` ${t}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}i+=e}const a=`<kol-${n}${i}>${d}</kol-${n}>`;let o;try{o=(0,x.format)(a,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${a}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),l=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),s={abbr:i.s1,accordion:i.IP,alert:i.mW,avatar:i.aq,badge:i.cX,breadcrumb:i.If,button:i.qC,"button-group":i.Os,"button-link":i.u_,card:i.Yh,details:i.Si,form:i.OO,heading:i.ch,icon:i.SA,image:i.iu,"indented-text":i.MV,"input-checkbox":i.Q7,"input-color":i.eK,"input-date":i.QZ,"input-email":i.kN,"input-file":i.Ex,"input-number":i.QL,"input-password":i.EH,"input-radio":i.wJ,"input-range":i.Ef,"input-text":i.Uh,kolibri:i.aY,link:i.GQ,"link-button":i._k,"link-group":i.O_,logo:i.ae,modal:i.cT,nav:i.Y4,pagination:i.kj,progress:i.O0,quote:i.SY,select:i.qy,"skip-nav":i.Ig,spin:i.kP,"split-button":i.a,symbol:i.OM,table:i.Y9,tabs:i._,textarea:i.DG,version:i.k1}[e.tag];return s?(0,r.jsx)(s,{...n,children:l.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:l,update:s,value:i}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:l||"default"}),": ",n,(0,r.jsx)("br",{}),(0,r.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>s(`slot-${l}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,l]=(0,t.useState)(function(){const e={};return Object.values(s.Q).forEach((n=>{const l=n.name.replace("kol-","");e[l]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[l][n.name]=n.defaultValue.replace(/'/g,""),e[l].defaultValues.push(n.name)),void 0!==_[l]?.[n.name]&&(e[l][n.name]=_[l][n.name])})),n.slots.forEach((n=>{const s=`slot-${n.name||"default"}`,i=_[l]?.[s];i&&(e[l][s]=i)}))})),e}()),[c,a]=(0,t.useState)("badge");(0,t.useEffect)((()=>{e.component&&a(e.component.replace("kol-",""))}),[e.component]),(0,t.useEffect)((()=>{!!s.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&u("_label","Label-Text");!!s.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&u("_heading","Heading-Text")}),[c]);const o=(0,t.useMemo)((()=>n[c]||{}),[n,c]);function u(e,n){l((l=>{const s={...l[c],[e]:n,defaultValues:l[c].defaultValues.filter((n=>n!==e))};return{...l,[c]:s}}))}const x=Object.values(s.Q).find((e=>e.name===`kol-${c}`));return(0,r.jsx)(d.c,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(i._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(m,{tag:c,params:o})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(b,{params:o,tag:c})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(i.ch,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.ch,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(h,{attribute:e,update:u,value:o[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(i.ch,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,r.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:o["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);