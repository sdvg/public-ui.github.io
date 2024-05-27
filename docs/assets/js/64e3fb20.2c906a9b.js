"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[32156],{18224:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>u});var d=i(76776),l=i(108);function t(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Der Input-Typ ",(0,d.jsx)(n.strong,{children:"File"})," erzeugt ein Eingabefeld f\xfcr zum Beispiel Uploads. Es k\xf6nnen eine oder auch mehrere Dateien ausgew\xe4hlt werden."]}),"\n",(0,d.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,d.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<kol-input-file _label="Bild hochladen" _accept="image/png, image/jpeg, application/pdf" _icons=\'{"right": "codicon codicon-device-camera"}\'></kol-input-file>\n'})}),"\n",(0,d.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,d.jsxs)(n.p,{children:["Events der Komponente k\xf6nnen \xfcber eine ",(0,d.jsx)(n.code,{children:"_on"}),"-Property behandelt werden, die aus einem Objekt mit verschiedenen Callback-Funktionen besteht:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"kolibriElement._on = {\n\tonFocus: (event) => {\n\t\t/* Do something on focus */\n\t},\n\tonInput: (event, value) => {\n\t\t/* Do something with value or event */\n\t},\n\t// ...\n};\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Event"}),(0,d.jsx)(n.th,{children:"Ausl\xf6ser"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onFocus"}),(0,d.jsx)(n.td,{children:"Element wird fokussiert"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onClick"}),(0,d.jsx)(n.td,{children:"Element wird angeklickt"}),(0,d.jsx)(n.td,{children:"-"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onInput"}),(0,d.jsxs)(n.td,{children:["Eine oder mehrere Dateien werden ausgew\xe4hlt (entspricht nativem ",(0,d.jsx)(n.code,{children:"input"}),"-Event)"]}),(0,d.jsx)(n.td,{children:"Ausgw\xe4hlte Dateien als FileList"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onChange"}),(0,d.jsxs)(n.td,{children:["Eine oder mehrere Dateien werden ausgew\xe4hlt (entspricht nativem ",(0,d.jsx)(n.code,{children:"change"}),"-Event)"]}),(0,d.jsx)(n.td,{children:"Ausgw\xe4hlte Dateien als FileList"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onBlur"}),(0,d.jsx)(n.td,{children:"Element verliert Fokus"}),(0,d.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,d.jsx)("kol-input-file",{_label:"Bild hochladen",_accept:"image/png, image/jpeg, application/pdf",_icons:'{"right": "codicon codicon-device-camera"}'}),"\n",(0,d.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,d.jsxs)(n.p,{children:["Geben Sie \xfcber das Attribut ",(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"_accept"})})," an, welche Dateitypen zur Auswahl erlaubt sind. Wird das Attribut nicht oder leer \xfcbergeben, sind alle Dateitypen erlaubt.\nM\xf6gliche Werte und weitere Informationen erhalten Sie im ",(0,d.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept",_target:"_blank",_label:"MDN Artikel zum Attribut accept"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Achten sie darauf ",(0,d.jsx)(n.code,{children:"id"})," und ",(0,d.jsx)(n.code,{children:"name"})," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden."]}),"\n",(0,d.jsx)(n.li,{children:"Lassen Sie nur die Dateitypen zum Upload zu, die f\xfcr die Programmausf\xfchrung ben\xf6tigt werden. Eine fehlende Einschr\xe4nkung der hochladbaren Dateitypen kann ein erhebliches Sicherheitsrisiko sein."}),"\n",(0,d.jsx)(n.li,{children:"Begrenzen Sie die Gr\xf6\xdfe der Dateien, die Sie zum Upload zulassen m\xf6chten."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,d.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Taste"}),(0,d.jsx)(n.th,{children:"Funktion"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Tab"})}),(0,d.jsx)(n.td,{children:"Fokussiert das Eingabefeld und ruft den Dateiauswahldialog auf."})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)("kol-link",{_href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_accept"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_accept"})}),(0,d.jsx)(n.td,{children:"Defines which file formats are accepted."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_accessKey"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_access-key"})}),(0,d.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_alert"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_alert"})}),(0,d.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_disabled"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_disabled"})}),(0,d.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_error"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_error"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)("span",{className:"text-red-500",children:(0,d.jsx)(n.strong,{children:"[DEPRECATED]"})})," Will be removed in v3. Use ",(0,d.jsx)(n.code,{children:"msg"})," instead.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Defines the error message text."]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hideError"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hide-error"})}),(0,d.jsx)(n.td,{children:"Hides the error message but leaves it in the DOM for the input's aria-describedby."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hideLabel"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hide-label"})}),(0,d.jsx)(n.td,{children:"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hint"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hint"})}),(0,d.jsx)(n.td,{children:"Defines the hint text."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"''"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_icons"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_icons"})}),(0,d.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,d.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,d.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,d.jsx)(n.code,{children:"undefined; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_id"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_id"})}),(0,d.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"_label"})," ",(0,d.jsx)(n.em,{children:"(required)"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_label"})}),(0,d.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,d.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_msg"})}),(0,d.jsx)(n.td,{children:"--"}),(0,d.jsx)(n.td,{children:"Defines the properties for a message rendered as Alert component."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{} & { _level?: 0"})," | ",(0,d.jsx)(n.code,{children:"2"})," | ",(0,d.jsx)(n.code,{children:"1"})," | ",(0,d.jsx)(n.code,{children:"4"})," | ",(0,d.jsx)(n.code,{children:"3"})," | ",(0,d.jsx)(n.code,{children:"5"})," | ",(0,d.jsx)(n.code,{children:"6"})," | ",(0,d.jsx)(n.code,{children:"undefined; _on?: KoliBriAlertEventCallbacks"})," | ",(0,d.jsx)(n.code,{children:'undefined; _type?: "default"'})," | ",(0,d.jsx)(n.code,{children:'"info"'})," | ",(0,d.jsx)(n.code,{children:'"success"'})," | ",(0,d.jsx)(n.code,{children:'"warning"'})," | ",(0,d.jsx)(n.code,{children:'"error"'})," | ",(0,d.jsx)(n.code,{children:'undefined; _variant?: "card"'})," | ",(0,d.jsx)(n.code,{children:'"msg"'})," | ",(0,d.jsx)(n.code,{children:"undefined; _label?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _alert?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _hasCloser?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; } & { _description: string; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_multiple"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_multiple"})}),(0,d.jsx)(n.td,{children:"Makes the input accept multiple inputs."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_name"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_name"})}),(0,d.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_on"})}),(0,d.jsx)(n.td,{children:"--"}),(0,d.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_required"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_required"})}),(0,d.jsx)(n.td,{children:"Makes the input element required."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_smartButton"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_smart-button"})}),(0,d.jsx)(n.td,{children:"Allows to add a button with an arbitrary action within the element (_hide-label only)."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{ _label: string; } & { _tabIndex?: number"})," | ",(0,d.jsx)(n.code,{children:"undefined; _value?: Stringified<StencilUnknown>; _role?: AlternativeButtonLinkRolePropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaControls?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaExpanded?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaSelected?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _on?: ButtonCallbacksPropType<StencilUnknown>"})," | ",(0,d.jsx)(n.code,{children:'undefined; _type?: "button"'})," | ",(0,d.jsx)(n.code,{children:'"reset"'})," | ",(0,d.jsx)(n.code,{children:'"submit"'})," | ",(0,d.jsx)(n.code,{children:'undefined; _variant?: "primary"'})," | ",(0,d.jsx)(n.code,{children:'"secondary"'})," | ",(0,d.jsx)(n.code,{children:'"normal"'})," | ",(0,d.jsx)(n.code,{children:'"tertiary"'})," | ",(0,d.jsx)(n.code,{children:'"danger"'})," | ",(0,d.jsx)(n.code,{children:'"ghost"'})," | ",(0,d.jsx)(n.code,{children:'"custom"'})," | ",(0,d.jsx)(n.code,{children:"undefined; _customClass?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _disabled?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _hideLabel?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _icons?: IconsPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _id?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _name?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _syncValueBySelector?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _tooltipAlign?: AlignPropType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _accessKey?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tabIndex"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tab-index"})}),(0,d.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,d.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"number"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tooltipAlign"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tooltip-align"})}),(0,d.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'"bottom"'})," | ",(0,d.jsx)(n.code,{children:'"left"'})," | ",(0,d.jsx)(n.code,{children:'"right"'})," | ",(0,d.jsx)(n.code,{children:'"top"'})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"'top'"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_touched"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_touched"})}),(0,d.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_value"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_value"})}),(0,d.jsx)(n.td,{children:"Defines the value of the input."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"getvalue",children:"getValue"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"getValue() => Promise<FileList | null | undefined>"})}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:["Type: ",(0,d.jsx)(n.code,{children:"Promise<FileList | null | undefined>"})]}),"\n",(0,d.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Slot"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Die Beschriftung des Eingabefeldes."})]})})]}),"\n",(0,d.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}var r=i(37704),c=i(54592);const o={title:"InputFile",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputFile-Komponente.",tags:["InputFile","Beschreibung","Spezifikation","Beispiele"]},a=void 0,h={id:"components/input-file",title:"InputFile",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputFile-Komponente.",source:"@site/docs/30-components/input-file.mdx",sourceDirName:"30-components",slug:"/components/input-file",permalink:"/docs/next/components/input-file",draft:!1,unlisted:!1,tags:[{label:"InputFile",permalink:"/docs/next/tags/input-file"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"InputFile",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputFile-Komponente.",tags:["InputFile","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputEmail",permalink:"/docs/next/components/input-email"},next:{title:"InputNumber",permalink:"/docs/next/components/input-number"}},x={},u=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Events",id:"events",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"getValue",id:"getvalue",level:3},{value:"Returns",id:"returns",level:4},{value:"Slots",id:"slots",level:2},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,l.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{}),"\n",(0,d.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,d.jsx)(c.o,{component:"input-file"}),"\n",(0,d.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,d.jsx)(r.Q,{component:"input-file",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>o});var d=i(51376),l=i(80924),t=i(76776);const s=function(e,n,i,d,l){return void 0===l&&(l="editor"),`${e}&module=${d}&initialpath=%23%2F${n}%2F${i}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,t.jsxs)("div",{className:"m-2",children:[(0,t.jsx)("iframe",{src:n,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.jsx)(d.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,t.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,a]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",x=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,u={angular:`${x}.html`,react:`${x}.tsx`,vue:`${x}.vue`,webcomponent:`${x}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:a((()=>"Angular"));break;case 2:a((()=>"React"));break;case 3:a((()=>"Vue"));break;case 4:a((()=>"Web Component"));break;default:a((()=>"Preview"))}}};return(0,t.jsxs)(d._,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,t.jsx)("div",{children:"Preview"===o&&(0,t.jsx)("iframe",{src:j,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,t.jsx)("div",{children:"Angular"===o&&(0,t.jsx)(c,{url:s(h,n,i,u.angular)})}),(0,t.jsx)("div",{children:"React"===o&&(0,t.jsx)(c,{url:s(h,n,i,u.react)})}),(0,t.jsx)("div",{children:"Vue"===o&&(0,t.jsx)(c,{url:s(h,n,i,u.vue)})}),(0,t.jsx)("div",{children:"Web Component"===o&&(0,t.jsx)(c,{url:s(h,n,i,u.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>v});var d=i(28904),l=i(51376),t=i(80924),s=i(94368),r=i(76776);function c(e){const{label:n,name:i,update:d,value:s}=e;return(0,t.useEffect)((()=>{s||d(i,"#000000")}),[]),(0,r.jsx)(l.eK,{_label:"",_on:{onInput:(e,n)=>d(i,n)},_value:s,children:(0,r.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:d}=e,[s,c]=(0,t.useState)(""),[o,a]=(0,t.useState)(""),[h,x]=(0,t.useState)(""),[u,j]=(0,t.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,t.useEffect)((()=>{if(!s||o||h||u){const e={};s&&(e.left=`codicon codicon-${s}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&d(n.name,JSON.stringify(e))}else d(n.name,`codicon codicon-${s}`)}),[s,o,h,u]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[i,p?(0,r.jsx)(l.Si,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",b?(0,r.jsx)(l.Si,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",m?(0,r.jsx)(l.Si,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):"",f?(0,r.jsx)(l.Si,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function a(e){const{name:n,label:i,types:d,update:t,value:s}=e,c=[];function o(e){return{label:e,value:e}}return d.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...d.filter((e=>"undefined"!==e)).map(o))):c.push(...d.filter((e=>"undefined"!==e)).map(o)),(0,r.jsx)(l.qy,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onInput:(e,i)=>t(n,i[0])},_value:s?[s]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:d}=e,s=(0,t.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,t.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),t=(0,r.jsx)(l.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,r.jsx)(c,{name:n.name,label:t,update:i,value:d});case"_icons":return(0,r.jsx)(o,{attribute:n,label:t,update:i,value:d});default:switch(s){case"string":return(0,r.jsx)(l.Uh,{className:"my-2",_label:"",_on:{onInput:(e,d)=>i(n.name,d)},_value:d||"",children:(0,r.jsx)("span",{slot:"expert",children:t})});case"number":return(0,r.jsx)(l.QL,{className:"my-2",_label:"",_on:{onInput:(e,d)=>i(n.name,d)},_value:d,children:(0,r.jsx)("span",{slot:"expert",children:t})});case"boolean":return(0,r.jsx)(l.Q7,{className:"my-2",_checked:!0===d,_label:"",_on:{onInput:(e,d)=>i(n.name,d)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:t})});default:return e.length>1?(0,r.jsx)(a,{label:t,name:n.name,types:e,update:i,value:d}):(0,r.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,r.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,d]);return(0,r.jsx)(r.Fragment,{children:h})}var x=i(63136),u=i(28256),j=i(39452),p=i.n(j);function b(e){const{tag:n,params:i}=e,d=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,t.useMemo)((()=>{let e="";return d.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],d=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${d}"`+i.substring(n)}else e+=`<div slot="${d}">${i}</div>`})),e}),[i]),c=d.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[t,r]of c)if(r){let e="";switch(typeof r){case"string":e=` ${t}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${t}="${r.toString()}"`;break;case"boolean":e=r?` ${t}`:"";break;case"object":e=` ${t}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const o=`<kol-${n}${l}>${s}</kol-${n}>`;let a;try{a=(0,u.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){a=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(x.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:a})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),d={abbr:l.s1,accordion:l.IP,alert:l.mW,avatar:l.aq,badge:l.cX,breadcrumb:l.If,button:l.qC,"button-group":l.Os,"button-link":l.u_,card:l.Yh,details:l.Si,form:l.OO,heading:l.ch,icon:l.SA,image:l.iu,"indented-text":l.MV,"input-checkbox":l.Q7,"input-color":l.eK,"input-date":l.QZ,"input-email":l.kN,"input-file":l.Ex,"input-number":l.QL,"input-password":l.EH,"input-radio":l.wJ,"input-range":l.Ef,"input-text":l.Uh,kolibri:l.aY,link:l.GQ,"link-button":l._k,"link-group":l.O_,logo:l.ae,modal:l.cT,nav:l.Y4,pagination:l.kj,progress:l.O0,quote:l.SY,select:l.qy,"skip-nav":l.Ig,spin:l.kP,"split-button":l.a,symbol:l.OM,table:l.Y9,tabs:l._,textarea:l.DG,version:l.k1}[e.tag];return d?(0,r.jsx)(d,{...n,children:i.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:d,value:l}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:i||"default"}),": ",n,(0,r.jsx)("br",{}),(0,r.jsx)(x.GW,{defaultLanguage:"html",height:"5em",onChange:e=>d(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,i]=(0,t.useState)(function(){const e={};return Object.values(d.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const d=`slot-${n.name||"default"}`,l=_[i]?.[d];l&&(e[i][d]=l)}))})),e}()),[c,o]=(0,t.useState)("badge");(0,t.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,t.useEffect)((()=>{!!d.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&x("_label","Label-Text");!!d.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&x("_heading","Heading-Text")}),[c]);const a=(0,t.useMemo)((()=>n[c]||{}),[n,c]);function x(e,n){i((i=>{const d={...i[c],[e]:n,defaultValues:i[c].defaultValues.filter((n=>n!==e))};return{...i,[c]:d}}))}const u=Object.values(d.Q).find((e=>e.name===`kol-${c}`));return(0,r.jsx)(s.c,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(l._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(m,{tag:c,params:a})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(b,{params:a,tag:c})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(l.ch,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.ch,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[u&&u.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(h,{attribute:e,update:x,value:a[e.name]},e.name)}))),u&&0===u.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(l.ch,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[u&&u.slots.map((e=>(0,r.jsx)(f,{description:e.description,name:e.name||"default",update:x,value:a["slot-"+(e.name||"default")]},e.name))),u&&0===u.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);