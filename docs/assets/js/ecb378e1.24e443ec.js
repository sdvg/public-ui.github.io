"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1152],{57352:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var t=i(76776),l=i(108);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Die Komponente ",(0,t.jsx)(n.strong,{children:"InputRadio"})," besteht aus einer Sammlung von Radio-Elementen und stellt so eine Auswahlm\xf6glichkeit zwischen verschiedenen Werten dar. Es kann immer nur ein einzelner Wert zur gleichen Zeit ausgew\xe4hlt werden. Ausgew\xe4hlte Radio-Elemente werden i.d.R. mit einem gef\xfcllten und optisch hervorgehobenen Kreis dargestellt."]}),"\n",(0,t.jsx)("kol-alert",{_alert:!0,_heading:"Hinweis",_level:"1",_type:"info",children:(0,t.jsx)(n.p,{children:"Das Input-Radio dient der Abbildung einer Auswahlm\xf6glichkeit bei der mindestens und maximal eine Auswahl getroffen werden kann. Das bedeutet, dass ein Input-Radio nicht einzeln vorkommen kann. Aufgrund dessen haben wir die Komponente als Listen-Komponente umgesetzt."})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-input-radio _options=\'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]\'></kol-input-radio>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)("kol-input-radio",{_options:'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]'}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsxs)(n.p,{children:["Die einzelnen Radio-Elemente innerhalb der Komponente ** InputRadio** werden \xfcber dass Attribut ",(0,t.jsxs)(n.strong,{children:["_ ",(0,t.jsx)(n.em,{children:"options"})]})," als JSON-Objekt \xfcbergeben."]}),"\n",(0,t.jsx)(n.p,{children:"Das JSON-Objekt erwartet je Radio-Element folgende Werte:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"label"})})," = Beschriftung des Radio-Elements"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"value"})})," = Wert des Radio-Elements"]}),"\n",(0,t.jsx)(n.p,{children:"Beispiel f\xfcr die Erstellung des JSON-Objekts zur Definition der Radio-Elemente:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"[ { label: 'Herr', value: 'Herr', }, { label: 'Frau', value: 'Frau', }, { label: 'Firma', value: 'Firma', }, ];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,t.jsxs)(n.p,{children:["Events der Komponente k\xf6nnen \xfcber eine ",(0,t.jsx)(n.code,{children:"_on"}),"-Property behandelt werden, die aus einem Objekt mit verschiedenen Callback-Funktionen besteht:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"kolibriElement._on = {\n\tonFocus: (event) => {\n\t\t/* Do something on focus */\n\t},\n\tonInput: (event, value) => {\n\t\t/* Do something with value or event */\n\t},\n\t// ...\n};\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event"}),(0,t.jsx)(n.th,{children:"Ausl\xf6ser"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onFocus"}),(0,t.jsx)(n.td,{children:"Eine Option wird fokussiert"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onInput"}),(0,t.jsxs)(n.td,{children:["Eine Option wird ausgew\xe4hlt (entspricht nativem ",(0,t.jsx)(n.code,{children:"input"}),"-Event)"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"value"}),"-Attribut der Option"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onChange"}),(0,t.jsxs)(n.td,{children:["Eine Option wird ausgew\xe4hlt (entspricht nativem ",(0,t.jsx)(n.code,{children:"change"}),"-Event)"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"value"}),"-Attribut der Option"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onBlur"}),(0,t.jsx)(n.td,{children:"Eine Option verliert Fokus"}),(0,t.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"onchange",children:"onChange"}),"\n",(0,t.jsx)("kol-alert",{_heading:"Hinweis f\xfcr Versionen <2",_type:"info",children:"event.target.value enth\xe4lt die Nummer der Checkbox mit einem '-' davor."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<kol-input-radio\n\t_options={[\n\t\t{ label: 'Herr', value: 'Herr' },\n\t\t{ label: 'Frau', value: 'Frau' },\n\t\t{ label: 'Firma', value: 'Firma' },\n\t]}\n\t_on={{ onChange: (_event, value) => setValue(value) }}\n></kol-input-radio>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Achten sie darauf ",(0,t.jsx)(n.code,{children:"id"})," und ",(0,t.jsx)(n.code,{children:"name"})," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden."]}),"\n",(0,t.jsxs)(n.li,{children:["Es wird immer mindestens ein Wert ausgew\xe4hlt. \xc4hnlich dem Verhalten einer Select-Auswahl. (",(0,t.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default",_target:"_blank"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Fokussiert das erste Radio-Element, aktiviert es aber nicht."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Leer"})}),(0,t.jsx)(n.td,{children:"Aktiviert das erste Radio-Element, nachdem die RadioGroup \xfcber die Tab-Taste angesprungen wurde."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Pfeil-Tasten"})}),(0,t.jsx)(n.td,{children:"Durchlaufen aller Radio-Elemente und aktiviert das gerade fokussierte Element."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#radiobutton",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3schools.com/tags/att_input_type_radio.asp",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_accessKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_access-key"})}),(0,t.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_alert"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_alert"})}),(0,t.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_error"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_error"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Will be removed in v3. Use ",(0,t.jsx)(n.code,{children:"msg"})," instead.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Defines the error message text."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hideError"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hide-error"})}),(0,t.jsx)(n.td,{children:"Hides the error message but leaves it in the DOM for the input's aria-describedby."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hideLabel"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hide-label"})}),(0,t.jsx)(n.td,{children:"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hint"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hint"})}),(0,t.jsx)(n.td,{children:"Defines the hint text."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"''"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_label"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,t.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_msg"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Defines the properties for a message rendered as Alert component."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{} & { _level?: 0"})," | ",(0,t.jsx)(n.code,{children:"2"})," | ",(0,t.jsx)(n.code,{children:"1"})," | ",(0,t.jsx)(n.code,{children:"4"})," | ",(0,t.jsx)(n.code,{children:"3"})," | ",(0,t.jsx)(n.code,{children:"5"})," | ",(0,t.jsx)(n.code,{children:"6"})," | ",(0,t.jsx)(n.code,{children:"undefined; _on?: KoliBriAlertEventCallbacks"})," | ",(0,t.jsx)(n.code,{children:'undefined; _type?: "default"'})," | ",(0,t.jsx)(n.code,{children:'"info"'})," | ",(0,t.jsx)(n.code,{children:'"success"'})," | ",(0,t.jsx)(n.code,{children:'"warning"'})," | ",(0,t.jsx)(n.code,{children:'"error"'})," | ",(0,t.jsx)(n.code,{children:'undefined; _variant?: "card"'})," | ",(0,t.jsx)(n.code,{children:'"msg"'})," | ",(0,t.jsx)(n.code,{children:"undefined; _label?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; _alert?: boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined; _hasCloser?: boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined; } & { _description: string; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_on"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_options"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_options"})}),(0,t.jsx)(n.td,{children:"Options the user can choose from."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Option<StencilUnknown>[]"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_orientation"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_orientation"})}),(0,t.jsx)(n.td,{children:"Defines whether the orientation of the component is horizontal or vertical."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"horizontal"'})," | ",(0,t.jsx)(n.code,{children:'"vertical"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'vertical'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_required"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_required"})}),(0,t.jsx)(n.td,{children:"Makes the input element required."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tabIndex"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tab-index"})}),(0,t.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltipAlign"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltip-align"})}),(0,t.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"bottom"'})," | ",(0,t.jsx)(n.code,{children:'"left"'})," | ",(0,t.jsx)(n.code,{children:'"right"'})," | ",(0,t.jsx)(n.code,{children:'"top"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'top'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_touched"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_touched"})}),(0,t.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:"Defines the value of the input."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"object"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"getvalue",children:"getValue"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"getValue() => Promise<StencilUnknown | undefined>"})}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"Promise<StencilUnknown>"})]}),"\n",(0,t.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Slot"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Die Legende/\xdcberschrift der Radiobuttons."})]})})]}),"\n",(0,t.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}var d=i(37704),c=i(54592);const a={title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",tags:["InputRadio","Beschreibung","Spezifikation","Beispiele"]},o=void 0,h={id:"components/input-radio",title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",source:"@site/versioned_docs/version-2.1/30-components/input-radio.mdx",sourceDirName:"30-components",slug:"/components/input-radio",permalink:"/docs/components/input-radio",draft:!1,unlisted:!1,tags:[{inline:!0,label:"InputRadio",permalink:"/docs/tags/input-radio"},{inline:!0,label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"2.1",frontMatter:{title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",tags:["InputRadio","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputRadioGroup",permalink:"/docs/components/input-radio-group"},next:{title:"InputRange",permalink:"/docs/components/input-range"}},u={},x=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Events",id:"events",level:3},{value:"onChange",id:"onchange",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"getValue",id:"getvalue",level:3},{value:"Returns",id:"returns",level:4},{value:"Slots",id:"slots",level:2},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(c.o,{component:"input-radio"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(d.Q,{component:"input-radio",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>a});var t=i(83488),l=i(80924),s=i(76776);const r=function(e,n,i,t,l){return void 0===l&&(l="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${l}`},d={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(t.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},a=e=>{let{component:n,sample:i}=e;const[a,o]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return(0,s.jsxs)(t._,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===a&&(0,s.jsx)("iframe",{src:j,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===a&&(0,s.jsx)(c,{url:r(h,n,i,x.angular)})}),(0,s.jsx)("div",{children:"React"===a&&(0,s.jsx)(c,{url:r(h,n,i,x.react)})}),(0,s.jsx)("div",{children:"Vue"===a&&(0,s.jsx)(c,{url:r(h,n,i,x.vue)})}),(0,s.jsx)("div",{children:"Web Component"===a&&(0,s.jsx)(c,{url:r(h,n,i,x.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>v});var t=i(30440),l=i(83488),s=i(80924),r=i(6960),d=i(76776);function c(e){const{label:n,name:i,update:t,value:r}=e;return(0,s.useEffect)((()=>{r||t(i,"#000000")}),[]),(0,d.jsx)(l.eK,{_label:"",_on:{onInput:(e,n)=>t(i,n)},_value:r,children:(0,d.jsx)("span",{slot:"expert",children:n})})}function a(e){const{attribute:n,label:i,update:t}=e,[r,c]=(0,s.useState)(""),[a,o]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[x,j]=(0,s.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,s.useEffect)((()=>{if(!r||a||h||x){const e={};r&&(e.left=`codicon codicon-${r}`),a&&(e.right=`codicon codicon-${a}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${r}`)}),[r,a,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,d.jsxs)("div",{children:[i,p?(0,d.jsx)(l.Si,{_label:"Links",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",b?(0,d.jsx)(l.Si,{_label:"Rechts",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",m?(0,d.jsx)(l.Si,{_label:"Oben",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,d.jsx)(l.Si,{_label:"Unten",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function o(e){const{name:n,label:i,types:t,update:s,value:r}=e,c=[];function a(e){return{label:e,value:e}}return t.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...t.filter((e=>"undefined"!==e)).map(a))):c.push(...t.filter((e=>"undefined"!==e)).map(a)),(0,d.jsx)(l.qy,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onInput:(e,i)=>s(n,i[0])},_value:r?[r]:void 0,children:(0,d.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,r=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,d.jsx)(l.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,d.jsx)(c,{name:n.name,label:s,update:i,value:t});case"_icons":return(0,d.jsx)(a,{attribute:n,label:s,update:i,value:t});default:switch(r){case"string":return(0,d.jsx)(l.Uh,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t||"",children:(0,d.jsx)("span",{slot:"expert",children:s})});case"number":return(0,d.jsx)(l.QL,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t,children:(0,d.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,d.jsx)(l.Q7,{className:"my-2",_checked:!0===t,_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,d.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,d.jsx)(o,{label:s,name:n.name,types:e,update:i,value:t}):(0,d.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,d.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,d.jsx)(d.Fragment,{children:h})}var u=i(63136),x=i(28256),j=i(39452),p=i.n(j);function b(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,s.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),c=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[s,d]of c)if(d){let e="";switch(typeof d){case"string":e=` ${s}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${d.toString()}"`;break;case"boolean":e=d?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const a=`<kol-${n}${l}>${r}</kol-${n}>`;let o;try{o=(0,x.format)(a,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${a}`}return(0,d.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,d.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:l.s1,accordion:l.IP,alert:l.mW,avatar:l.aq,badge:l.cX,breadcrumb:l.If,button:l.qC,"button-group":l.Os,"button-link":l.u_,card:l.Yh,details:l.Si,form:l.OO,heading:l.ch,icon:l.SA,image:l.iu,"indented-text":l.MV,"input-checkbox":l.Q7,"input-color":l.eK,"input-date":l.QZ,"input-email":l.kN,"input-file":l.Ex,"input-number":l.QL,"input-password":l.EH,"input-radio":l.wJ,"input-range":l.Ef,"input-text":l.Uh,kolibri:l.aY,link:l.GQ,"link-button":l._k,"link-group":l.O_,logo:l.ae,modal:l.cT,nav:l.Y4,pagination:l.kj,progress:l.O0,quote:l.SY,select:l.qy,"skip-nav":l.Ig,spin:l.kP,"split-button":l.a,symbol:l.OM,table:l.Y9,tabs:l._,textarea:l.DG,version:l.k1}[e.tag];return t?(0,d.jsx)(t,{...n,children:i.map((e=>(0,d.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,d.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:t,value:l}=e;return(0,d.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,d.jsx)("b",{children:i||"default"}),": ",n,(0,d.jsx)("br",{}),(0,d.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,i]=(0,s.useState)(function(){const e={};return Object.values(t.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,l=_[i]?.[t];l&&(e[i][t]=l)}))})),e}()),[c,a]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&a(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!t.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&u("_label","Label-Text");!!t.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&u("_heading","Heading-Text")}),[c]);const o=(0,s.useMemo)((()=>n[c]||{}),[n,c]);function u(e,n){i((i=>{const t={...i[c],[e]:n,defaultValues:i[c].defaultValues.filter((n=>n!==e))};return{...i,[c]:t}}))}const x=Object.values(t.Q).find((e=>e.name===`kol-${c}`));return(0,d.jsx)(r.c,{children:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,d.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,d.jsxs)(l._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(m,{tag:c,params:o})}),(0,d.jsx)("div",{className:"lg:col-span-2",children:(0,d.jsx)(b,{params:o,tag:c})})]}),(0,d.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,d.jsx)(l.ch,{_level:3,_label:"Konfigurator"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.ch,{_level:4,_label:"Properties"}),(0,d.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,d.jsx)(d.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,d.jsx)(h,{attribute:e,update:u,value:o[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,d.jsx)(l.ch,{_level:4,_label:"Slots"}),(0,d.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,d.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:o["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);