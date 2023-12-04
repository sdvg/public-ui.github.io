"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[13839],{7581:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var t=i(11527),l=i(16034);function r(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Die Komponente ",(0,t.jsx)(n.strong,{children:"InputRadio"})," besteht aus einer Sammlung von Radio-Elementen und stellt so eine Auswahlm\xf6glichkeit zwischen verschiedenen Werten dar. Es kann immer nur ein einzelner Wert zur gleichen Zeit ausgew\xe4hlt werden. Ausgew\xe4hlte Radio-Elemente werden i.d.R. mit einem gef\xfcllten und optisch hervorgehobenen Kreis dargestellt."]}),"\n",(0,t.jsx)("kol-alert",{_alert:!0,_heading:"Hinweis",_level:"1",_type:"info",children:(0,t.jsx)(n.p,{children:"Das Input-Radio dient der Abbildung einer Auswahlm\xf6glichkeit bei der mindestens und maximal eine Auswahl getroffen werden kann. Das bedeutet, dass ein Input-Radio nicht einzeln vorkommen kann. Aufgrund dessen haben wir die Komponente als Listen-Komponente umgesetzt."})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-input-radio\n\t_options=\'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]\'\n></kol-input-radio>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)("kol-input-radio",{_options:'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]'}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsxs)(n.p,{children:["Die einzelnen Radio-Elemente innerhalb der Komponente ** InputRadio** werden \xfcber dass Attribut ",(0,t.jsxs)(n.strong,{children:["_ ",(0,t.jsx)(n.em,{children:"options"})]})," als JSON-Objekt \xfcbergeben."]}),"\n",(0,t.jsx)(n.p,{children:"Das JSON-Objekt erwartet je Radio-Element folgende Werte:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"label"})})," = Beschriftung des Radio-Elements"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"value"})})," = Wert des Radio-Elements"]}),"\n",(0,t.jsx)(n.p,{children:"Beispiel f\xfcr die Erstellung des JSON-Objekts zur Definition der Radio-Elemente:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"[ { label: 'Herr', value: 'Herr', }, { label: 'Frau', value: 'Frau', }, { label: 'Firma', value: 'Firma', }, ];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"onchange",children:"onChange"}),"\n",(0,t.jsxs)(n.p,{children:["Dem EventHandler werden zwei Parameter \xfcbergeben, das urspr\xfcngliche Event und der Wert des ausgew\xe4hlten RadioButtons.\n",(0,t.jsx)("kol-alert",{_heading:"Hinweis f\xfcr Versionen <2",_type:"info",children:"event.target.value enth\xe4lt die Nummer der Checkbox mit einem '-' davor."})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<kol-input-radio\n\t_options={[\n\t\t{ label: 'Herr', value: 'Herr' },\n\t\t{ label: 'Frau', value: 'Frau' },\n\t\t{ label: 'Firma', value: 'Firma' },\n\t]}\n\t_on={{ onChange: (_event, value) => setValue(value) }}\n></kol-input-radio>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Achten sie darauf ",(0,t.jsx)(n.code,{children:"id"})," und ",(0,t.jsx)(n.code,{children:"name"})," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden."]}),"\n",(0,t.jsxs)(n.li,{children:["Es wird immer mindestens ein Wert ausgew\xe4hlt. \xc4hnlich dem Verhalten einer Select-Auswahl. (",(0,t.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default",_label:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default",_target:"_blank"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Fokussiert das erste Radio-Element, aktiviert es aber nicht."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Leer"})}),(0,t.jsx)(n.td,{children:"Aktiviert das erste Radio-Element, nachdem die RadioGroup \xfcber die Tab-Taste angesprungen wurde."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Pfeil-Tasten"})}),(0,t.jsx)(n.td,{children:"Durchlaufen aller Radio-Elemente und aktiviert das gerade fokussierte Element."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#radiobutton",_label:"https://www.w3.org/TR/wai-aria-practices/#radiobutton",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3schools.com/tags/att_input_type_radio.asp",_label:"https://www.w3schools.com/tags/att_input_type_radio.asp",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio",_label:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_label:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_accessKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_access-key"})}),(0,t.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_alert"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_alert"})}),(0,t.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_error"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_error"})}),(0,t.jsx)(n.td,{children:"Defines the error message text."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hideLabel"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hide-label"})}),(0,t.jsx)(n.td,{children:"Hides the label."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hint"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hint"})}),(0,t.jsx)(n.td,{children:"Defines the hint text."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"''"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,t.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_list"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_list"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _options.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Deprecated: Gibt die Liste der Optionen f\xfcr das Eingabefeld an."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Option<W3CInputValue>[]"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_on"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_options"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_options"})}),(0,t.jsx)(n.td,{children:"Options the user can choose from."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Option<W3CInputValue>[]"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_orientation"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_orientation"})}),(0,t.jsx)(n.td,{children:"Defines whether the orientation of the component is horizontal or vertical."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"horizontal"'})," | ",(0,t.jsx)(n.code,{children:'"vertical"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'vertical'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_required"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_required"})}),(0,t.jsx)(n.td,{children:"Makes the input element required."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tabIndex"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tab-index"})}),(0,t.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltipAlign"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltip-align"})}),(0,t.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"bottom"'})," | ",(0,t.jsx)(n.code,{children:'"left"'})," | ",(0,t.jsx)(n.code,{children:'"right"'})," | ",(0,t.jsx)(n.code,{children:'"top"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'top'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_touched"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_touched"})}),(0,t.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:"Defines the value of the input."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Slot"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Die Legende/\xdcberschrift der Radiobuttons."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./input-radio-group",children:"kol-input-radio-group"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"kol-input"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./tooltip",children:"kol-tooltip-wc"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./alert",children:"kol-alert"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n  kol-input-radio --\x3e kol-input\n  kol-input-radio --\x3e kol-tooltip-wc\n  kol-input-radio --\x3e kol-alert\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-input-radio-group --\x3e kol-input-radio\n  style kol-input-radio fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}var d=i(35863),a=i(94383);const o={title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",tags:["InputRadio","Beschreibung","Spezifikation","Beispiele"]},c=void 0,h={id:"components/input-radio",title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",source:"@site/versioned_docs/version-1.6/30-components/input-radio.mdx",sourceDirName:"30-components",slug:"/components/input-radio",permalink:"/en/docs/1.6/components/input-radio",draft:!1,unlisted:!1,tags:[{label:"InputRadio",permalink:"/en/docs/1.6/tags/input-radio"},{label:"Beschreibung",permalink:"/en/docs/1.6/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.6/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.6/tags/beispiele"}],version:"1.6",frontMatter:{title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",tags:["InputRadio","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputRadioGroup",permalink:"/en/docs/1.6/components/input-radio-group"},next:{title:"InputRange",permalink:"/en/docs/1.6/components/input-range"}},u={},x=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(a._,{component:"input-radio"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(d._,{component:"input-radio",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},35863:(e,n,i)=>{i.d(n,{_:()=>o});var t=i(43818),l=i(50959),r=i(11527);const s=function(e,n,i,t,l){return void 0===l&&(l="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${l}`},d={width:"100%",height:"500px",border:"0",overflow:"hidden"},a=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(t.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,c]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(t.UD,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===o&&(0,r.jsx)("iframe",{src:j,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===o&&(0,r.jsx)(a,{url:s(h,n,i,x.angular)})}),(0,r.jsx)("div",{children:"React"===o&&(0,r.jsx)(a,{url:s(h,n,i,x.react)})}),(0,r.jsx)("div",{children:"Vue"===o&&(0,r.jsx)(a,{url:s(h,n,i,x.vue)})}),(0,r.jsx)("div",{children:"Web Component"===o&&(0,r.jsx)(a,{url:s(h,n,i,x.webcomponent)})})]})}},94383:(e,n,i)=>{i.d(n,{_:()=>v});var t=i(15682),l=i(43818),r=i(50959),s=i(6122),d=i(11527);function a(e){const{label:n,name:i,update:t,value:s}=e;return(0,r.useEffect)((()=>{s||t(i,"#000000")}),[]),(0,d.jsx)(l.Np,{_label:"",_on:{onChange:(e,n)=>t(i,n)},_value:s,children:(0,d.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:t}=e,[s,a]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[x,j]=(0,r.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,r.useEffect)((()=>{if(!s||o||h||x){const e={};s&&(e.left=`codicon codicon-${s}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${s}`)}),[s,o,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,d.jsxs)("div",{children:[i,p?(0,d.jsx)(l.ox,{_label:"Links",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,d.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",b?(0,d.jsx)(l.ox,{_label:"Rechts",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,d.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",m?(0,d.jsx)(l.ox,{_label:"Oben",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,d.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,d.jsx)(l.ox,{_label:"Unten",children:(0,d.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,d.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:t,update:r,value:s}=e,a=[];function o(e){return{label:e,value:e}}return t.includes("undefined")?(a.push({label:"-",value:void 0}),a.push(...t.filter((e=>"undefined"!==e)).map(o))):a.push(...t.filter((e=>"undefined"!==e)).map(o)),(0,d.jsx)(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(a),_on:{onChange:(e,i)=>r(n,i[0])},_value:s?[s]:void 0,children:(0,d.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,d.jsx)(l.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,d.jsx)(a,{name:n.name,label:r,update:i,value:t});case"_icon":return(0,d.jsx)(o,{attribute:n,label:r,update:i,value:t});default:switch(s){case"string":return(0,d.jsx)(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t||"",children:(0,d.jsx)("span",{slot:"expert",children:r})});case"number":return(0,d.jsx)(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t,children:(0,d.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,d.jsx)(l.TE,{className:"my-2",_checked:!0===t,_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,d.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,d.jsx)(c,{label:r,name:n.name,types:e,update:i,value:t}):(0,d.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,d.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,d.jsx)(d.Fragment,{children:h})}var u=i(22115),x=i(77192),j=i(85630),p=i.n(j);function b(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,r.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),a=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,d]of a)if(d){let e="";switch(typeof d){case"string":e=` ${r}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${d.toString()}"`;break;case"boolean":e=d?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const o=`<kol-${n}${l}>${s}</kol-${n}>`;let c;try{c=(0,x.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,d.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,d.jsx)(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.KolPopover,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.KolToast,version:l.u_}[e.tag];return t?(0,d.jsx)(t,{...n,children:i.map((e=>(0,d.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,d.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:t,value:l}=e;return(0,d.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,d.jsx)("b",{children:i||"default"}),": ",n,(0,d.jsx)("br",{}),(0,d.jsx)(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(t.p).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,l=_[i]?.[t];l&&(e[i][t]=l)}))})),e}()),[a,o]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!t.p.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_label"===e.name))&&!n[a]?._label&&u("_label","Label-Text");!!t.p.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_heading"===e.name))&&!n[a]?._heading&&u("_heading","Heading-Text")}),[a]);const c=(0,r.useMemo)((()=>n[a]||{}),[n,a]);function u(e,n){i((i=>{const t={...i[a],[e]:n,defaultValues:i[a].defaultValues.filter((n=>n!==e))};return{...i,[a]:t}}))}const x=Object.values(t.p).find((e=>e.name===`kol-${a}`));return(0,d.jsx)(s.Z,{children:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,d.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,d.jsxs)(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(m,{tag:a,params:c})}),(0,d.jsx)("div",{className:"lg:col-span-2",children:(0,d.jsx)(b,{params:c,tag:a})})]}),(0,d.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,d.jsx)(l.HA,{_level:3,_label:"Konfigurator"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.HA,{_level:4,_label:"Properties"}),(0,d.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,d.jsx)(d.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,d.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,d.jsx)(l.HA,{_level:4,_label:"Slots"}),(0,d.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,d.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);