"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[69969],{79800:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var d=i(2488),s=i(16592);function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Der Input-Typ ",(0,d.jsx)(n.strong,{children:"Date"})," erzeugt ein Eingabefeld f\xfcr Datumswerte. Diese k\xf6nnen konkrete Daten sein, aber auch Wochen, Monate oder Zeitangaben."]}),"\n",(0,d.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,d.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<kol-input-date _type="date" _label="Erstellungsdatum" _icon=\'{"right": "codicon codicon-calendar"}\'></kol-input-date>\n'})}),"\n",(0,d.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,d.jsx)("kol-input-date",{_type:"date",_label:"Erstellungsdatum",_icon:'{"right": "codicon codicon-calendar"}'}),"\n",(0,d.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,d.jsxs)(n.p,{children:["Die ",(0,d.jsx)(n.strong,{children:"InputDate"}),"-Komponente kann f\xfcr die Erfassung von Daten verwendet werden. Es verwendet intern die InputNumber-Komponente."]}),"\n",(0,d.jsxs)("kol-alert",{_type:"info",children:["Beachten Sie, dass im ",(0,d.jsx)(n.strong,{children:"Firefox"})," nicht alle ",(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"_types"})})," der ",(0,d.jsx)(n.strong,{children:"InputDate"}),"-Komponente funktional sind. Es werden bei den Typen ",(0,d.jsx)(n.code,{children:"month"}),", ",(0,d.jsx)(n.code,{children:"time"})," und ",(0,d.jsx)(n.code,{children:"week"})," keine Auswahldialoge angezeigt."]}),"\n",(0,d.jsx)(n.p,{children:"Die Komponente zeichnet sich dadurch aus, dass sie zahlreiche Ziffern-basierte Eingabemuster unterst\xfctzt. Hierbei ist es wichtig zu beachten, dass sich das Verhalten bei der Eingabe von Browser zu Browser und Ger\xe4te zu Ger\xe4t unterscheiden kann. Beispielsweise ist es m\xf6glich beim Datum, 01.01.999999 einzugeben, auch wenn max=2022-02-02 ist. Der Feldwert ist aber trotzdem 2022-02-02."}),"\n",(0,d.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Achten sie darauf ",(0,d.jsx)(n.code,{children:"id"})," und ",(0,d.jsx)(n.code,{children:"name"})," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,d.jsxs)(n.p,{children:["Die Icons in der Komponente sind per Tab-Taste nicht erreichbar. Die Auswahlhilfen der Komponente werden \xfcber die ",(0,d.jsx)(n.strong,{children:"Leertaste"})," ge\xf6ffnet. So erhalten Sie beispielsweise beim Typ ",(0,d.jsx)(n.strong,{children:"date"})," ein Kalendermodul, \xfcber das per Maus oder \xfcber die Tastatur das gew\xfcnschte Datum ausgew\xe4hlt werden kann. Die manuelle Eingabe der Werte ist alternativ m\xf6glich."]}),"\n",(0,d.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,d.jsxs)(n.p,{children:["Das Eingabefeld f\xfcr Zeitangaben gibt es in unterschiedlichen Auspr\xe4gungen (Datum, Uhrzeit u.a). Mit der ",(0,d.jsx)(n.code,{children:"Tab"}),"-Taste wird der Fokus auf das Eingabefeld gesetzt. Anschlie\xdfend kann mittels der ",(0,d.jsx)(n.code,{children:"Leer"}),"-Taste das ger\xe4tespezifische Auswahldialog ge\xf6ffent werden."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Hinweis: Wir haben in unseren Tests festgestellt, dass es je nach Browser-Version manchmal m\xf6glich ist, das Kalender-Icon anzufokusieren und mal nicht. Ohne das sich die Implementierung der Komponente ge\xe4ndert hat. Warum das so ist ist uns noch nicht bekannt. Nichtsdestotrotz ist das \xd6ffnen des Auswahldialogs immer mittels der ",(0,d.jsx)(n.code,{children:"Leer"}),"-Taste m\xf6glich."]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Taste"}),(0,d.jsx)(n.th,{children:"Funktion"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Tab"})}),(0,d.jsxs)(n.td,{children:["Fokussiert das Eingabefeld. Nach erhalt des Fokus wechselt die ",(0,d.jsx)(n.code,{children:"Tab"}),"-Taste durch die Eingabebereiche. Danach erst wechselt die ",(0,d.jsx)(n.code,{children:"Tab"}),"-Taste zum n\xe4chsten Eingabefeld."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Leer"})}),(0,d.jsxs)(n.td,{children:["Wenn das Eingabefeld fokussiert ist, kann im Browser mit der ",(0,d.jsx)(n.code,{children:"Leer"}),"-Taste ein Auswahldialog aufgerufen bzw. geschlossen werden. Die Navigation und Auswahl erfolgt hier mit Hilfe der ",(0,d.jsx)(n.code,{children:"Tab"}),"-Taste, der ",(0,d.jsx)(n.code,{children:"Pfeil"}),"-Tasten und der Best\xe4tigung mittes ",(0,d.jsx)(n.code,{children:"Enter"}),"-Taste."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Pfeil-Tasten (links / rechts)"})}),(0,d.jsxs)(n.td,{children:["Wenn das Eingabefeld fokussiert ist, kann mit den ",(0,d.jsx)(n.code,{children:"Pfeil"}),"-Tasten zwischen den Eingabebereichen gewechselt werden."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Pfeil-Tasten (oben / unten)"})}),(0,d.jsxs)(n.td,{children:["Wenn ein Eingabebereich aktiviert ist, k\xf6nnen mit den ",(0,d.jsx)(n.code,{children:"Pfeil"}),"-Tasten oben und unten die Werte ver\xe4ndert werden."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Esc"})}),(0,d.jsxs)(n.td,{children:["Ist ein Auswahldialog verf\xfcgbar, kann dieser alternativ zur ",(0,d.jsx)(n.code,{children:"Leer"}),"-Taste oder auch mit der ",(0,d.jsx)(n.code,{children:"Esc"}),"-Taste geschlossen werden."]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)("kol-link",{_href:"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html",_label:"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html",_target:"_blank"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)("kol-link",{_href:"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/",_label:"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/",_target:"_blank"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)("kol-link",{_href:"https://a11ysupport.io/tech/html/input(type-date)_element",_label:"https://a11ysupport.io/tech/html/input(type-date)_element",_target:"_blank"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)("kol-link",{_href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_label:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_accessKey"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_access-key"})}),(0,d.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_alert"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_alert"})}),(0,d.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_autoComplete"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_auto-complete"})}),(0,d.jsx)(n.td,{children:"Defines whether the input can be auto-completed."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'"off"'})," | ",(0,d.jsx)(n.code,{children:'"on"'})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_disabled"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_disabled"})}),(0,d.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_error"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_error"})}),(0,d.jsx)(n.td,{children:"Defines the error message text."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hideLabel"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hide-label"})}),(0,d.jsx)(n.td,{children:"Hides the label."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hint"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hint"})}),(0,d.jsx)(n.td,{children:"Defines the hint text."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"''"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_icon"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_icon"})}),(0,d.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,d.jsx)(n.code,{children:'_icon="fa-solid fa-user"'}),")."]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,d.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,d.jsx)(n.code,{children:"undefined; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_id"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_id"})}),(0,d.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_label"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_label"})}),(0,d.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,d.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_list"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_list"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)("span",{className:"text-red-500",children:(0,d.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _suggestions instead.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Deprecated: Gibt die Liste der Vorschlagszahlen an."]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"string[]"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_max"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_max"})}),(0,d.jsx)(n.td,{children:"Defines the largest possible input value."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Date"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-W${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_min"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_min"})}),(0,d.jsx)(n.td,{children:"Defines the smallest possible input value."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Date"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-W${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_name"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_name"})}),(0,d.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_on"})}),(0,d.jsx)(n.td,{children:"--"}),(0,d.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_readOnly"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_read-only"})}),(0,d.jsx)(n.td,{children:"Makes the input element read only."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_required"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_required"})}),(0,d.jsx)(n.td,{children:"Makes the input element required."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_smartButton"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_smart-button"})}),(0,d.jsx)(n.td,{children:"Allows to add a button with an arbitrary action within the element (_hide-label only)."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{ _label: LabelWithExpertSlotPropType; } & { _tabIndex?: number"})," | ",(0,d.jsx)(n.code,{children:"undefined; _value?: Stringified<StencilUnknown>; _accessKey?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _iconAlign?: AlignPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _iconOnly?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _role?: AlternativeButtonLinkRolePropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaControls?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaCurrent?: AriaCurrentPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaExpanded?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaLabel?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaSelected?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _on?: ButtonCallbacksPropType<StencilUnknown>"})," | ",(0,d.jsx)(n.code,{children:"undefined; _type?: ButtonTypePropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _variant?: ButtonVariantPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _customClass?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _disabled?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _hideLabel?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _icon?: IconPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _id?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _name?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _syncValueBySelector?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _tooltipAlign?: AlignPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_step"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_step"})}),(0,d.jsx)(n.td,{children:"Defines the step size for value changes."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"number"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_suggestions"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_suggestions"})}),(0,d.jsx)(n.td,{children:"Suggestions to provide for the input."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"W3CInputValue[]"})," | ",(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tabIndex"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tab-index"})}),(0,d.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"number"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tooltipAlign"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tooltip-align"})}),(0,d.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'"bottom"'})," | ",(0,d.jsx)(n.code,{children:'"left"'})," | ",(0,d.jsx)(n.code,{children:'"right"'})," | ",(0,d.jsx)(n.code,{children:'"top"'})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"'top'"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_touched"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_touched"})}),(0,d.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_type"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_type"})}),(0,d.jsx)(n.td,{children:"Defines either the type of the component or of the components interactive element."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'"date"'})," | ",(0,d.jsx)(n.code,{children:'"datetime-local"'})," | ",(0,d.jsx)(n.code,{children:'"month"'})," | ",(0,d.jsx)(n.code,{children:'"time"'})," | ",(0,d.jsx)(n.code,{children:'"week"'})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"'date'"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_value"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_value"})}),(0,d.jsx)(n.td,{children:"Defines the value of the input."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Date"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-W${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"null"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Slot"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Die Beschriftung des Eingabefeldes."})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,d.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"kol-input"}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"./tooltip",children:"kol-tooltip-wc"})}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,d.jsx)(n.mermaid,{value:"graph TD;\n  kol-input-date --\x3e kol-input\n  kol-input-date --\x3e kol-tooltip-wc\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-input-date fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,d.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}var l=i(37704),c=i(54592);const o={title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},a=void 0,h={id:"components/input-date",title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",source:"@site/versioned_docs/version-1.6/30-components/input-date.mdx",sourceDirName:"30-components",slug:"/components/input-date",permalink:"/en/docs/1.6/components/input-date",draft:!1,unlisted:!1,tags:[{label:"InputDate",permalink:"/en/docs/1.6/tags/input-date"},{label:"Beschreibung",permalink:"/en/docs/1.6/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.6/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.6/tags/beispiele"}],version:"1.6",frontMatter:{title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputColor",permalink:"/en/docs/1.6/components/input-color"},next:{title:"InputEmail",permalink:"/en/docs/1.6/components/input-email"}},u={},x=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,s.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{}),"\n",(0,d.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,d.jsx)(c.o,{component:"input-date"}),"\n",(0,d.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,d.jsx)(l.Q,{component:"input-date",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>o});var d=i(57920),s=i(96651),t=i(2488);const r=function(e,n,i,d,s){return void 0===s&&(s="editor"),`${e}&module=${d}&initialpath=%23%2F${n}%2F${i}&view=${s}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,t.jsxs)("div",{className:"m-2",children:[(0,t.jsx)("iframe",{src:n,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.jsx)(d.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,t.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,a]=(0,s.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:a((()=>"Angular"));break;case 2:a((()=>"React"));break;case 3:a((()=>"Vue"));break;case 4:a((()=>"Web Component"));break;default:a((()=>"Preview"))}}};return(0,t.jsxs)(d._,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,t.jsx)("div",{children:"Preview"===o&&(0,t.jsx)("iframe",{src:j,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,t.jsx)("div",{children:"Angular"===o&&(0,t.jsx)(c,{url:r(h,n,i,x.angular)})}),(0,t.jsx)("div",{children:"React"===o&&(0,t.jsx)(c,{url:r(h,n,i,x.react)})}),(0,t.jsx)("div",{children:"Vue"===o&&(0,t.jsx)(c,{url:r(h,n,i,x.vue)})}),(0,t.jsx)("div",{children:"Web Component"===o&&(0,t.jsx)(c,{url:r(h,n,i,x.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>k});var d=i(36016),s=i(57920),t=i(96651),r=i(19356),l=i(2488);function c(e){const{label:n,name:i,update:d,value:r}=e;return(0,t.useEffect)((()=>{r||d(i,"#000000")}),[]),(0,l.jsx)(s.eK,{_label:"",_on:{onChange:(e,n)=>d(i,n)},_value:r,children:(0,l.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:d}=e,[r,c]=(0,t.useState)(""),[o,a]=(0,t.useState)(""),[h,u]=(0,t.useState)(""),[x,j]=(0,t.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,t.useEffect)((()=>{if(!r||o||h||x){const e={};r&&(e.left=`codicon codicon-${r}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&d(n.name,JSON.stringify(e))}else d(n.name,`codicon codicon-${r}`)}),[r,o,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,l.jsxs)("div",{children:[i,p?(0,l.jsx)(s.Si,{_label:"Links",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",b?(0,l.jsx)(s.Si,{_label:"Rechts",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",m?(0,l.jsx)(s.Si,{_label:"Oben",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,l.jsx)(s.Si,{_label:"Unten",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function a(e){const{name:n,label:i,types:d,update:t,value:r}=e,c=[];function o(e){return{label:e,value:e}}return d.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...d.filter((e=>"undefined"!==e)).map(o))):c.push(...d.filter((e=>"undefined"!==e)).map(o)),(0,l.jsx)(s.qy,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onChange:(e,i)=>t(n,i[0])},_value:r?[r]:void 0,children:(0,l.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:d}=e,r=(0,t.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,t.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),t=(0,l.jsx)(s.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,l.jsx)(c,{name:n.name,label:t,update:i,value:d});case"_icons":return(0,l.jsx)(o,{attribute:n,label:t,update:i,value:d});default:switch(r){case"string":return(0,l.jsx)(s.Uh,{className:"my-2",_label:"",_on:{onChange:(e,d)=>i(n.name,d)},_value:d||"",children:(0,l.jsx)("span",{slot:"expert",children:t})});case"number":return(0,l.jsx)(s.QL,{className:"my-2",_label:"",_on:{onChange:(e,d)=>i(n.name,d)},_value:d,children:(0,l.jsx)("span",{slot:"expert",children:t})});case"boolean":return(0,l.jsx)(s.Q7,{className:"my-2",_checked:!0===d,_label:"",_on:{onChange:(e,d)=>i(n.name,d)},_variant:"switch",_value:!0,children:(0,l.jsx)("span",{slot:"expert",children:t})});default:return e.length>1?(0,l.jsx)(a,{label:t,name:n.name,types:e,update:i,value:d}):(0,l.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,l.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,d]);return(0,l.jsx)(l.Fragment,{children:h})}var u=i(47184),x=i(28256),j=i(39452),p=i.n(j);function b(e){const{tag:n,params:i}=e,d=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let s="";const r=(0,t.useMemo)((()=>{let e="";return d.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],d=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${d}"`+i.substring(n)}else e+=`<div slot="${d}">${i}</div>`})),e}),[i]),c=d.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[t,l]of c)if(l){let e="";switch(typeof l){case"string":e=` ${t}="${l.replace(/"/g,"'")}"`;break;case"number":e=` ${t}="${l.toString()}"`;break;case"boolean":e=l?` ${t}`:"";break;case"object":e=` ${t}="${JSON.stringify(l)}"`;break;default:e="Never give up hope, one day everything will be fixed."}s+=e}const o=`<kol-${n}${s}>${r}</kol-${n}>`;let a;try{a=(0,x.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){a=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,l.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,l.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:a})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),d={abbr:s.s1,accordion:s.IP,alert:s.mW,avatar:s.aq,badge:s.cX,breadcrumb:s.If,button:s.qC,"button-group":s.Os,"button-link":s.u_,card:s.Yh,details:s.Si,form:s.OO,heading:s.ch,icon:s.SA,image:s.iu,"indented-text":s.MV,"input-checkbox":s.Q7,"input-color":s.eK,"input-date":s.QZ,"input-email":s.kN,"input-file":s.Ex,"input-number":s.QL,"input-password":s.EH,"input-radio":s.wJ,"input-range":s.Ef,"input-text":s.Uh,kolibri:s.aY,link:s.GQ,"link-button":s._k,"link-group":s.O_,logo:s.ae,modal:s.cT,nav:s.Y4,pagination:s.kj,progress:s.O0,quote:s.SY,select:s.qy,"skip-nav":s.Ig,spin:s.kP,"split-button":s.a,symbol:s.OM,table:s.Y9,tabs:s._,textarea:s.DG,version:s.k1}[e.tag];return d?(0,l.jsx)(d,{...n,children:i.map((e=>(0,l.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,l.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:d,value:s}=e;return(0,l.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,l.jsx)("b",{children:i||"default"}),": ",n,(0,l.jsx)("br",{}),(0,l.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>d(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:s})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,t.useState)(function(){const e={};return Object.values(d.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const d=`slot-${n.name||"default"}`,s=_[i]?.[d];s&&(e[i][d]=s)}))})),e}()),[c,o]=(0,t.useState)("badge");(0,t.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,t.useEffect)((()=>{!!d.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&u("_label","Label-Text");!!d.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&u("_heading","Heading-Text")}),[c]);const a=(0,t.useMemo)((()=>n[c]||{}),[n,c]);function u(e,n){i((i=>{const d={...i[c],[e]:n,defaultValues:i[c].defaultValues.filter((n=>n!==e))};return{...i,[c]:d}}))}const x=Object.values(d.Q).find((e=>e.name===`kol-${c}`));return(0,l.jsx)(r.c,{children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,l.jsxs)(s._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,l.jsx)("div",{className:"p-2",children:(0,l.jsx)(m,{tag:c,params:a})}),(0,l.jsx)("div",{className:"lg:col-span-2",children:(0,l.jsx)(b,{params:a,tag:c})})]}),(0,l.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,l.jsx)(s.ch,{_level:3,_label:"Konfigurator"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(s.ch,{_level:4,_label:"Properties"}),(0,l.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,l.jsx)(l.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,l.jsx)(h,{attribute:e,update:u,value:a[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,l.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,l.jsx)(s.ch,{_level:4,_label:"Slots"}),(0,l.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,l.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:a["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,l.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);