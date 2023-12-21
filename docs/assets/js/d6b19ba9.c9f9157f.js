"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[55965],{64453:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>u});var d=i(11527),l=i(16034);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Der Input-Typ ",(0,d.jsx)(n.strong,{children:"E-Mail"})," erzeugt ein Eingabefeld f\xfcr E-Mails."]}),"\n",(0,d.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,d.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<kol-input-email _label="E-Mail-Adresse" _icons=\'{"right": "codicon codicon-mail"}\'></kol-input-email>\n'})}),"\n",(0,d.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,d.jsx)("kol-input-email",{_label:"E-Mail-Adresse",_icons:'{"right": "codicon codicon-mail"}'}),"\n",(0,d.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,d.jsxs)(n.p,{children:["Setzen Sie die ",(0,d.jsx)(n.strong,{children:"InputEmail"}),"-Komponente auf Formularen ein, wenn dort die Eingabe einer oder mehrerer E-Mail-Adressen erforderlich ist."]}),"\n",(0,d.jsxs)(n.p,{children:["Standardm\xe4\xdfig ist die Komponente f\xfcr die Erfassung einer einzelnen E-Mail-Adresse vorgesehen. Setzen Sie das Attribut ",(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"_multiple"})}),", um mehrere E-Mail-Adressen zu erfassen. Trennen Sie die einzelnen E-Mail-Adressen mit einem Komma (,) voneinander."]}),"\n",(0,d.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Achten sie darauf ",(0,d.jsx)(n.code,{children:"id"})," und ",(0,d.jsx)(n.code,{children:"name"})," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,d.jsxs)(n.p,{children:["Eine Validierung der erfassten E-Mail-Adressen innerhalb der Komponente erfolgt nicht.\nUm eine fehlgeschlagene Validierung anzuzeigen, setzen Sie das Attrbut ",(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"_error"})})," mit der entsprechenden Fehlermeldung, diese wird dann via ",(0,d.jsx)(n.strong,{children:"kol-alert"})," unterhalb angezeigt."]}),"\n",(0,d.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Taste"}),(0,d.jsx)(n.th,{children:"Funktion"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Tab"})}),(0,d.jsx)(n.td,{children:"Fokussiert das Eingabefeld."})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)("kol-link",{_href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_target:"_blank"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)("kol-link",{_href:"https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_accessKey"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_access-key"})}),(0,d.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_alert"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_alert"})}),(0,d.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_autoComplete"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_auto-complete"})}),(0,d.jsx)(n.td,{children:"Defines whether the input can be auto-completed."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'"off"'})," | ",(0,d.jsx)(n.code,{children:'"on"'})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_disabled"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_disabled"})}),(0,d.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_error"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_error"})}),(0,d.jsx)(n.td,{children:"Defines the error message text."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hasCounter"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_has-counter"})}),(0,d.jsx)(n.td,{children:"Shows the character count on the lower border of the input."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hideError"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hide-error"})}),(0,d.jsx)(n.td,{children:"Hides the error message but leaves it in the DOM for the input's aria-describedby."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hideLabel"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hide-label"})}),(0,d.jsx)(n.td,{children:"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hint"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hint"})}),(0,d.jsx)(n.td,{children:"Defines the hint text."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"''"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_icons"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_icons"})}),(0,d.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,d.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,d.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,d.jsx)(n.code,{children:"undefined; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_id"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_id"})}),(0,d.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"_label"})," ",(0,d.jsx)(n.em,{children:"(required)"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_label"})}),(0,d.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,d.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_maxLength"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_max-length"})}),(0,d.jsx)(n.td,{children:"Defines the maximum number of input characters."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"number"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_multiple"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_multiple"})}),(0,d.jsx)(n.td,{children:"Makes the input accept multiple inputs."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_name"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_name"})}),(0,d.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_on"})}),(0,d.jsx)(n.td,{children:"--"}),(0,d.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_pattern"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_pattern"})}),(0,d.jsx)(n.td,{children:"Defines a validation pattern for the input field."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_placeholder"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_placeholder"})}),(0,d.jsx)(n.td,{children:"Defines the placeholder for input field. To be shown when there's no value."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_readOnly"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_read-only"})}),(0,d.jsx)(n.td,{children:"Makes the input element read only."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_required"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_required"})}),(0,d.jsx)(n.td,{children:"Makes the input element required."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_smartButton"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_smart-button"})}),(0,d.jsx)(n.td,{children:"Allows to add a button with an arbitrary action within the element (_hide-label only)."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{ _label: string; } & { _tabIndex?: number"})," | ",(0,d.jsx)(n.code,{children:"undefined; _value?: Stringified<StencilUnknown>; _role?: AlternativeButtonLinkRolePropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaControls?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaExpanded?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaSelected?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _on?: ButtonCallbacksPropType<StencilUnknown>"})," | ",(0,d.jsx)(n.code,{children:'undefined; _type?: "button"'})," | ",(0,d.jsx)(n.code,{children:'"reset"'})," | ",(0,d.jsx)(n.code,{children:'"submit"'})," | ",(0,d.jsx)(n.code,{children:'undefined; _variant?: "primary"'})," | ",(0,d.jsx)(n.code,{children:'"secondary"'})," | ",(0,d.jsx)(n.code,{children:'"normal"'})," | ",(0,d.jsx)(n.code,{children:'"tertiary"'})," | ",(0,d.jsx)(n.code,{children:'"danger"'})," | ",(0,d.jsx)(n.code,{children:'"ghost"'})," | ",(0,d.jsx)(n.code,{children:'"custom"'})," | ",(0,d.jsx)(n.code,{children:"undefined; _customClass?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _disabled?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _hideLabel?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _icons?: IconsPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _id?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _name?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _syncValueBySelector?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _tooltipAlign?: AlignPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _accessKey?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_suggestions"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_suggestions"})}),(0,d.jsx)(n.td,{children:"Suggestions to provide for the input."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"W3CInputValue[]"})," | ",(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tabIndex"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tab-index"})}),(0,d.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"number"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tooltipAlign"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tooltip-align"})}),(0,d.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'"bottom"'})," | ",(0,d.jsx)(n.code,{children:'"left"'})," | ",(0,d.jsx)(n.code,{children:'"right"'})," | ",(0,d.jsx)(n.code,{children:'"top"'})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"'top'"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_touched"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_touched"})}),(0,d.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_value"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_value"})}),(0,d.jsx)(n.td,{children:"Defines the value of the input."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"getvalue",children:"getValue"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"getValue() => Promise<string | undefined>"})}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:["Type: ",(0,d.jsx)(n.code,{children:"Promise<string | undefined>"})]}),"\n",(0,d.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Slot"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Die Beschriftung des Eingabefeldes."})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,d.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"kol-input"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,d.jsx)(n.mermaid,{value:"graph TD;\n  kol-input-email --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-tooltip-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-input-email fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,d.jsx)(n.hr,{})]})}function t(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(s,{...e})}):s(e)}var r=i(35863),c=i(94383);const o={title:"InputEmail",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputEmail-Komponente.",tags:["InputEmail","Beschreibung","Spezifikation","Beispiele"]},a=void 0,h={id:"components/input-email",title:"InputEmail",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputEmail-Komponente.",source:"@site/docs/30-components/input-email.mdx",sourceDirName:"30-components",slug:"/components/input-email",permalink:"/docs/next/components/input-email",draft:!1,unlisted:!1,tags:[{label:"InputEmail",permalink:"/docs/next/tags/input-email"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"InputEmail",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputEmail-Komponente.",tags:["InputEmail","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputDate",permalink:"/docs/next/components/input-date"},next:{title:"InputFile",permalink:"/docs/next/components/input-file"}},x={},u=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{}),"\n",(0,d.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,d.jsx)(c._,{component:"input-email"}),"\n",(0,d.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,d.jsx)(r._,{component:"input-email",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},35863:(e,n,i)=>{i.d(n,{_:()=>o});var d=i(32404),l=i(50959),s=i(11527);const t=function(e,n,i,d,l){return void 0===l&&(l="editor"),`${e}&module=${d}&initialpath=%23%2F${n}%2F${i}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(d.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,a]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",x=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,u={angular:`${x}.html`,react:`${x}.tsx`,vue:`${x}.vue`,webcomponent:`${x}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:a((()=>"Angular"));break;case 2:a((()=>"React"));break;case 3:a((()=>"Vue"));break;case 4:a((()=>"Web Component"));break;default:a((()=>"Preview"))}}};return(0,s.jsxs)(d.UD,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===o&&(0,s.jsx)("iframe",{src:j,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===o&&(0,s.jsx)(c,{url:t(h,n,i,u.angular)})}),(0,s.jsx)("div",{children:"React"===o&&(0,s.jsx)(c,{url:t(h,n,i,u.react)})}),(0,s.jsx)("div",{children:"Vue"===o&&(0,s.jsx)(c,{url:t(h,n,i,u.vue)})}),(0,s.jsx)("div",{children:"Web Component"===o&&(0,s.jsx)(c,{url:t(h,n,i,u.webcomponent)})})]})}},94383:(e,n,i)=>{i.d(n,{_:()=>k});var d=i(7794),l=i(32404),s=i(50959),t=i(1206),r=i(11527);function c(e){const{label:n,name:i,update:d,value:t}=e;return(0,s.useEffect)((()=>{t||d(i,"#000000")}),[]),(0,r.jsx)(l.Np,{_label:"",_on:{onChange:(e,n)=>d(i,n)},_value:t,children:(0,r.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:d}=e,[t,c]=(0,s.useState)(""),[o,a]=(0,s.useState)(""),[h,x]=(0,s.useState)(""),[u,j]=(0,s.useState)("");let p=!1,m=!1,b=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,m=!0,b=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(b=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,m=!0)),(0,s.useEffect)((()=>{if(!t||o||h||u){const e={};t&&(e.left=`codicon codicon-${t}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&d(n.name,JSON.stringify(e))}else d(n.name,`codicon codicon-${t}`)}),[t,o,h,u]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[i,p?(0,r.jsx)(l.ox,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,r.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",m?(0,r.jsx)(l.ox,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,r.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",b?(0,r.jsx)(l.ox,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,r.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):"",f?(0,r.jsx)(l.ox,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap",children:g.map((e=>(0,r.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function a(e){const{name:n,label:i,types:d,update:s,value:t}=e,c=[];function o(e){return{label:e,value:e}}return d.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...d.filter((e=>"undefined"!==e)).map(o))):c.push(...d.filter((e=>"undefined"!==e)).map(o)),(0,r.jsx)(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onChange:(e,i)=>s(n,i[0])},_value:t?[t]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:d}=e,t=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,r.jsx)(l.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,r.jsx)(c,{name:n.name,label:s,update:i,value:d});case"_icon":return(0,r.jsx)(o,{attribute:n,label:s,update:i,value:d});default:switch(t){case"string":return(0,r.jsx)(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,d)=>i(n.name,d)},_value:d||"",children:(0,r.jsx)("span",{slot:"expert",children:s})});case"number":return(0,r.jsx)(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,d)=>i(n.name,d)},_value:d,children:(0,r.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,r.jsx)(l.TE,{className:"my-2",_checked:!0===d,_label:"",_on:{onChange:(e,d)=>i(n.name,d)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,r.jsx)(a,{label:s,name:n.name,types:e,update:i,value:d}):(0,r.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,r.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,d]);return(0,r.jsx)(r.Fragment,{children:h})}var x=i(22115),u=i(77192),j=i(85630),p=i.n(j);function m(e){const{tag:n,params:i}=e,d=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const t=(0,s.useMemo)((()=>{let e="";return d.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],d=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${d}"`+i.substring(n)}else e+=`<div slot="${d}">${i}</div>`})),e}),[i]),c=d.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[s,r]of c)if(r){let e="";switch(typeof r){case"string":e=` ${s}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${r.toString()}"`;break;case"boolean":e=r?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const o=`<kol-${n}${l}>${t}</kol-${n}>`;let a;try{a=(0,u.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){a=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(x.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:a})})}function b(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),d={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,version:l.u_}[e.tag];return d?(0,r.jsx)(d,{...n,children:i.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:d,value:l}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:i||"default"}),": ",n,(0,r.jsx)("br",{}),(0,r.jsx)(x.ML,{defaultLanguage:"html",height:"5em",onChange:e=>d(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,s.useState)(function(){const e={};return Object.values(d.p).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const d=`slot-${n.name||"default"}`,l=_[i]?.[d];l&&(e[i][d]=l)}))})),e}()),[c,o]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!d.p.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&x("_label","Label-Text");!!d.p.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&x("_heading","Heading-Text")}),[c]);const a=(0,s.useMemo)((()=>n[c]||{}),[n,c]);function x(e,n){i((i=>{const d={...i[c],[e]:n,defaultValues:i[c].defaultValues.filter((n=>n!==e))};return{...i,[c]:d}}))}const u=Object.values(d.p).find((e=>e.name===`kol-${c}`));return(0,r.jsx)(t.Z,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(b,{tag:c,params:a})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(m,{params:a,tag:c})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(l.HA,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.HA,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[u&&u.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(h,{attribute:e,update:x,value:a[e.name]},e.name)}))),u&&0===u.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(l.HA,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[u&&u.slots.map((e=>(0,r.jsx)(f,{description:e.description,name:e.name||"default",update:x,value:a["slot-"+(e.name||"default")]},e.name))),u&&0===u.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);