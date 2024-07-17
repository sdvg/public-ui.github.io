"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[47436],{12876:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>u});var t=i(76776),s=i(108);function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Die Komponente ",(0,t.jsx)(n.strong,{children:"Textarea"})," stellt ein gr\xf6\xdferes Eingabefeld f\xfcr Inhalte zur Verf\xfcgung. Im Gegensatz zum ",(0,t.jsx)("kol-link",{_href:"/docs/components/input-text",_label:"/docs/components/input-text",_label:"InputText"})," k\xf6nnen hier auch umfangreiche Inhalte eingegeben werden, die auch mit Zeilenumbr\xfcchen versehen sein k\xf6nnen."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-textarea\n\t_resize="none"\n\t_rows="5"\n\t_value="\n  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore\n  magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing\n  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos\n  et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n  sit amet."\n></kol-textarea>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,t.jsxs)(n.p,{children:["Events der Komponente k\xf6nnen \xfcber eine ",(0,t.jsx)(n.code,{children:"_on"}),"-Property behandelt werden, die aus einem Objekt mit verschiedenen Callback-Funktionen besteht:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"kolibriElement._on = {\n\tonFocus: (event) => {\n\t\t/* Do something on focus */\n\t},\n\tonInput: (event, value) => {\n\t\t/* Do something with value or event */\n\t},\n\t// ...\n};\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event"}),(0,t.jsx)(n.th,{children:"Ausl\xf6ser"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onFocus"}),(0,t.jsx)(n.td,{children:"Element wird fokussiert"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onClick"}),(0,t.jsx)(n.td,{children:"Element wird angeklickt"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onInput"}),(0,t.jsxs)(n.td,{children:["Eine Eingabe erfolgt (entspricht nativem ",(0,t.jsx)(n.code,{children:"input"}),"-Event)"]}),(0,t.jsx)(n.td,{children:"Eingegebener Wert als String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onChange"}),(0,t.jsxs)(n.td,{children:["Eingabe ist abgeschlossen und Eingabefeld verliert Fokus (entspricht nativem ",(0,t.jsx)(n.code,{children:"change"}),"-Event)"]}),(0,t.jsx)(n.td,{children:"Eingegebener Wert als String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onBlur"}),(0,t.jsx)(n.td,{children:"Element verliert Fokus"}),(0,t.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)("kol-textarea",{_resize:"none",_rows:"5",_value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsxs)(n.p,{children:["Verwenden Sie die ",(0,t.jsx)(n.strong,{children:"Textarea"}),"-Komponente wenn die Eingabe von gr\xf6\xdferen Textmengen erforderlich ist, z.B. bei der Erfassung eines Anliegens innerhalb eines Formulars.\nMit Hilfe des Attributs ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_rows"})})," kann die H\xf6he der Textarea in Zeilen bestimmt werden.\n\xdcber das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_resize"})})," kann zus\xe4tzlich festgelegt werden ob und in welche Richtung die Textarea vergr\xf6\xdfert werden kann. Der Wert ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"none"})})," sperrt die Textarea gegen Gr\xf6\xdfen\xe4nderungen."]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Fokussiert die Textarea."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Pfeil-Tasten"})}),(0,t.jsx)(n.td,{children:"K\xf6nnen f\xfcr die Navigation im Inhalt der fokussierten Textarea verwendet werden."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_accessKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_access-key"})}),(0,t.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_adjustHeight"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_adjust-height"})}),(0,t.jsx)(n.td,{children:"Adjusts the height of the element to its content."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_alert"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_alert"})}),(0,t.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_error"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_error"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Will be removed in v3. Use ",(0,t.jsx)(n.code,{children:"msg"})," instead.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Defines the error message text."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hasCounter"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_has-counter"})}),(0,t.jsx)(n.td,{children:"Shows the character count on the lower border of the input."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hideError"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hide-error"})}),(0,t.jsx)(n.td,{children:"Hides the error message but leaves it in the DOM for the input's aria-describedby."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hideLabel"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hide-label"})}),(0,t.jsx)(n.td,{children:"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hint"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hint"})}),(0,t.jsx)(n.td,{children:"Defines the hint text."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"''"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icons"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,t.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,t.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_label"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,t.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_maxLength"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_max-length"})}),(0,t.jsx)(n.td,{children:"Defines the maximum number of input characters."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_msg"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Defines the properties for a message rendered as Alert component."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{} & { _level?: 0"})," | ",(0,t.jsx)(n.code,{children:"2"})," | ",(0,t.jsx)(n.code,{children:"1"})," | ",(0,t.jsx)(n.code,{children:"4"})," | ",(0,t.jsx)(n.code,{children:"3"})," | ",(0,t.jsx)(n.code,{children:"5"})," | ",(0,t.jsx)(n.code,{children:"6"})," | ",(0,t.jsx)(n.code,{children:"undefined; _on?: KoliBriAlertEventCallbacks"})," | ",(0,t.jsx)(n.code,{children:'undefined; _type?: "default"'})," | ",(0,t.jsx)(n.code,{children:'"info"'})," | ",(0,t.jsx)(n.code,{children:'"success"'})," | ",(0,t.jsx)(n.code,{children:'"warning"'})," | ",(0,t.jsx)(n.code,{children:'"error"'})," | ",(0,t.jsx)(n.code,{children:'undefined; _variant?: "card"'})," | ",(0,t.jsx)(n.code,{children:'"msg"'})," | ",(0,t.jsx)(n.code,{children:"undefined; _label?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; _alert?: boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined; _hasCloser?: boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined; } & { _description: string; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_on"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_placeholder"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_placeholder"})}),(0,t.jsx)(n.td,{children:"Defines the placeholder for input field. To be shown when there's no value."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_readOnly"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_read-only"})}),(0,t.jsx)(n.td,{children:"Makes the input element read only."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_required"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_required"})}),(0,t.jsx)(n.td,{children:"Makes the input element required."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_resize"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_resize"})}),(0,t.jsxs)(n.td,{children:["Defines whether and in which direction the size of the input can be changed by the user. (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/de/docs/Web/CSS/resize",children:"https://developer.mozilla.org/de/docs/Web/CSS/resize"}),") In version 3 (v3), horizontal resizing is abolished. The corresponding property is then reduced to the properties ",(0,t.jsx)(n.code,{children:"vertical"})," (default) and ",(0,t.jsx)(n.code,{children:"none"}),"."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"both"'})," | ",(0,t.jsx)(n.code,{children:'"horizontal"'})," | ",(0,t.jsx)(n.code,{children:'"none"'})," | ",(0,t.jsx)(n.code,{children:'"vertical"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'vertical'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_rows"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_rows"})}),(0,t.jsx)(n.td,{children:"Defines how many rows of text should be visible at the same time."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tabIndex"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tab-index"})}),(0,t.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltipAlign"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltip-align"})}),(0,t.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"bottom"'})," | ",(0,t.jsx)(n.code,{children:'"left"'})," | ",(0,t.jsx)(n.code,{children:'"right"'})," | ",(0,t.jsx)(n.code,{children:'"top"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'top'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_touched"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_touched"})}),(0,t.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:"Defines the value of the input."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"getvalue",children:"getValue"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"getValue() => Promise<string | undefined>"})}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"Promise<string | undefined>"})]}),"\n",(0,t.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Slot"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Die Beschriftung des Eingabefeldes."})]})})]}),"\n",(0,t.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var l=i(37704),c=i(54592);const a={title:"Textarea",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Textarea-Komponente.",tags:["Textarea","Beschreibung","Spezifikation","Beispiele"]},o=void 0,h={id:"components/textarea",title:"Textarea",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Textarea-Komponente.",source:"@site/docs/30-components/textarea.mdx",sourceDirName:"30-components",slug:"/components/textarea",permalink:"/en/docs/next/components/textarea",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Textarea",permalink:"/en/docs/next/tags/textarea"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/next/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/next/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Textarea",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Textarea-Komponente.",tags:["Textarea","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Tabs",permalink:"/en/docs/next/components/tabs"},next:{title:"Toaster",permalink:"/en/docs/next/components/toaster"}},x={},u=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Events",id:"events",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"getValue",id:"getvalue",level:3},{value:"Returns",id:"returns",level:4},{value:"Slots",id:"slots",level:2},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Einfach",id:"einfach",level:3},{value:"Automatische Zeilenanpassung",id:"automatische-zeilenanpassung",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Placeholder",id:"placeholder",level:3},{value:"Readonly",id:"readonly",level:3},{value:"Resizable Textarea",id:"resizable-textarea",level:3},{value:"Zeilenl\xe4nge",id:"zeilenl\xe4nge",level:3}];function j(e){const n={h2:"h2",h3:"h3",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(c.o,{component:"textarea"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(n.h3,{id:"einfach",children:"Einfach"}),"\n",(0,t.jsx)(l.Q,{component:"textarea",sample:"basic"}),"\n",(0,t.jsx)(n.h3,{id:"automatische-zeilenanpassung",children:"Automatische Zeilenanpassung"}),"\n",(0,t.jsx)(l.Q,{component:"textarea",sample:"adjust-height"}),"\n",(0,t.jsx)(n.h3,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsx)(l.Q,{component:"textarea",sample:"disabled"}),"\n",(0,t.jsx)(n.h3,{id:"placeholder",children:"Placeholder"}),"\n",(0,t.jsx)(l.Q,{component:"textarea",sample:"placeholder"}),"\n",(0,t.jsx)(n.h3,{id:"readonly",children:"Readonly"}),"\n",(0,t.jsx)(l.Q,{component:"textarea",sample:"readonly"}),"\n",(0,t.jsx)(n.h3,{id:"resizable-textarea",children:"Resizable Textarea"}),"\n",(0,t.jsx)(l.Q,{component:"textarea",sample:"resize"}),"\n",(0,t.jsx)(n.h3,{id:"zeilenl\xe4nge",children:"Zeilenl\xe4nge"}),"\n",(0,t.jsx)(l.Q,{component:"textarea",sample:"rows"})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>a});var t=i(83488),s=i(80924),d=i(76776);const r=function(e,n,i,t,s){return void 0===s&&(s="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${s}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,d.jsxs)("div",{className:"m-2",children:[(0,d.jsx)("iframe",{src:n,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.jsx)(t.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,d.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},a=e=>{let{component:n,sample:i}=e;const[a,o]=(0,s.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",x=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,u={angular:`${x}.html`,react:`${x}.tsx`,vue:`${x}.vue`,webcomponent:`${x}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return(0,d.jsxs)(t._,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,d.jsx)("div",{children:"Preview"===a&&(0,d.jsx)("iframe",{src:j,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,d.jsx)("div",{children:"Angular"===a&&(0,d.jsx)(c,{url:r(h,n,i,u.angular)})}),(0,d.jsx)("div",{children:"React"===a&&(0,d.jsx)(c,{url:r(h,n,i,u.react)})}),(0,d.jsx)("div",{children:"Vue"===a&&(0,d.jsx)(c,{url:r(h,n,i,u.vue)})}),(0,d.jsx)("div",{children:"Web Component"===a&&(0,d.jsx)(c,{url:r(h,n,i,u.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>_});var t=i(30440),s=i(83488),d=i(80924),r=i(6960),l=i(76776);function c(e){const{label:n,name:i,update:t,value:r}=e;return(0,d.useEffect)((()=>{r||t(i,"#000000")}),[]),(0,l.jsx)(s.eK,{_label:"",_on:{onInput:(e,n)=>t(i,n)},_value:r,children:(0,l.jsx)("span",{slot:"expert",children:n})})}function a(e){const{attribute:n,label:i,update:t}=e,[r,c]=(0,d.useState)(""),[a,o]=(0,d.useState)(""),[h,x]=(0,d.useState)(""),[u,j]=(0,d.useState)("");let p=!1,m=!1,b=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,m=!0,b=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(b=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,m=!0)),(0,d.useEffect)((()=>{if(!r||a||h||u){const e={};r&&(e.left=`codicon codicon-${r}`),a&&(e.right=`codicon codicon-${a}`),h&&(e.top=`codicon codicon-${h}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${r}`)}),[r,a,h,u]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,l.jsxs)("div",{children:[i,p?(0,l.jsx)(s.Si,{_label:"Links",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",m?(0,l.jsx)(s.Si,{_label:"Rechts",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",b?(0,l.jsx)(s.Si,{_label:"Oben",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):"",f?(0,l.jsx)(s.Si,{_label:"Unten",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function o(e){const{name:n,label:i,types:t,update:d,value:r}=e,c=[];function a(e){return{label:e,value:e}}return t.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...t.filter((e=>"undefined"!==e)).map(a))):c.push(...t.filter((e=>"undefined"!==e)).map(a)),(0,l.jsx)(s.qy,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onInput:(e,i)=>d(n,i[0])},_value:r?[r]:void 0,children:(0,l.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,r=(0,d.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,d.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),d=(0,l.jsx)(s.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,l.jsx)(c,{name:n.name,label:d,update:i,value:t});case"_icons":return(0,l.jsx)(a,{attribute:n,label:d,update:i,value:t});default:switch(r){case"string":return(0,l.jsx)(s.Uh,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t||"",children:(0,l.jsx)("span",{slot:"expert",children:d})});case"number":return(0,l.jsx)(s.QL,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t,children:(0,l.jsx)("span",{slot:"expert",children:d})});case"boolean":return(0,l.jsx)(s.Q7,{className:"my-2",_checked:!0===t,_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,l.jsx)("span",{slot:"expert",children:d})});default:return e.length>1?(0,l.jsx)(o,{label:d,name:n.name,types:e,update:i,value:t}):(0,l.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,l.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,l.jsx)(l.Fragment,{children:h})}var x=i(63136),u=i(28256),j=i(39452),p=i.n(j);function m(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let s="";const r=(0,d.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),c=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[d,l]of c)if(l){let e="";switch(typeof l){case"string":e=` ${d}="${l.replace(/"/g,"'")}"`;break;case"number":e=` ${d}="${l.toString()}"`;break;case"boolean":e=l?` ${d}`:"";break;case"object":e=` ${d}="${JSON.stringify(l)}"`;break;default:e="Never give up hope, one day everything will be fixed."}s+=e}const a=`<kol-${n}${s}>${r}</kol-${n}>`;let o;try{o=(0,u.format)(a,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${a}`}return(0,l.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,l.jsx)(x.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o})})}function b(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:s.s1,accordion:s.IP,alert:s.mW,avatar:s.aq,badge:s.cX,breadcrumb:s.If,button:s.qC,"button-group":s.Os,"button-link":s.u_,card:s.Yh,details:s.Si,form:s.OO,heading:s.ch,icon:s.SA,image:s.iu,"indented-text":s.MV,"input-checkbox":s.Q7,"input-color":s.eK,"input-date":s.QZ,"input-email":s.kN,"input-file":s.Ex,"input-number":s.QL,"input-password":s.EH,"input-radio":s.wJ,"input-range":s.Ef,"input-text":s.Uh,kolibri:s.aY,link:s.GQ,"link-button":s._k,"link-group":s.O_,logo:s.ae,modal:s.cT,nav:s.Y4,pagination:s.kj,progress:s.O0,quote:s.SY,select:s.qy,"skip-nav":s.Ig,spin:s.kP,"split-button":s.a,symbol:s.OM,table:s.Y9,tabs:s._,textarea:s.DG,version:s.k1}[e.tag];return t?(0,l.jsx)(t,{...n,children:i.map((e=>(0,l.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,l.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:t,value:s}=e;return(0,l.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,l.jsx)("b",{children:i||"default"}),": ",n,(0,l.jsx)("br",{}),(0,l.jsx)(x.GW,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:s})]})}const g=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[n,i]=(0,d.useState)(function(){const e={};return Object.values(t.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==v[i]?.[n.name]&&(e[i][n.name]=v[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,s=v[i]?.[t];s&&(e[i][t]=s)}))})),e}()),[c,a]=(0,d.useState)("badge");(0,d.useEffect)((()=>{e.component&&a(e.component.replace("kol-",""))}),[e.component]),(0,d.useEffect)((()=>{!!t.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&x("_label","Label-Text");!!t.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&x("_heading","Heading-Text")}),[c]);const o=(0,d.useMemo)((()=>n[c]||{}),[n,c]);function x(e,n){i((i=>{const t={...i[c],[e]:n,defaultValues:i[c].defaultValues.filter((n=>n!==e))};return{...i,[c]:t}}))}const u=Object.values(t.Q).find((e=>e.name===`kol-${c}`));return(0,l.jsx)(r.c,{children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,l.jsxs)(s._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,l.jsx)("div",{className:"p-2",children:(0,l.jsx)(b,{tag:c,params:o})}),(0,l.jsx)("div",{className:"lg:col-span-2",children:(0,l.jsx)(m,{params:o,tag:c})})]}),(0,l.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,l.jsx)(s.ch,{_level:3,_label:"Konfigurator"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(s.ch,{_level:4,_label:"Properties"}),(0,l.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[u&&u.attributes.map((e=>(0,l.jsx)(l.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,l.jsx)(h,{attribute:e,update:x,value:o[e.name]},e.name)}))),u&&0===u.attributes.length&&(0,l.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,l.jsx)(s.ch,{_level:4,_label:"Slots"}),(0,l.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[u&&u.slots.map((e=>(0,l.jsx)(f,{description:e.description,name:e.name||"default",update:x,value:o["slot-"+(e.name||"default")]},e.name))),u&&0===u.slots.length&&(0,l.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);