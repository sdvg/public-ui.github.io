"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[92126],{18411:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=i(11527),l=i(16034);function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.strong,{children:"Table"}),"-Komponente dient prim\xe4r der \xfcbersichtlichen Darstellung von Datenmengen. Dabei ist sie so ausgelegt, dass sie alle von den Daten abh\xe4ngige Werte automatisch ermittelt und die Tabelle entsprechend darstellt. Hierzu geh\xf6ren beispielsweise die optionalen Funktionalit\xe4ten Spaltensortierung oder Pagination."]}),"\n",(0,t.jsx)("kol-indented-text",{_summary:"Backend-seitige Pagination",children:(0,t.jsx)(n.p,{children:'Bei sehr gro\xdfen Datenmengen ist auch eine manuelle Nutzung der Table-Komponente m\xf6glich. Das bedeutet, dass die Tabelle seitenweise "manuell" bef\xfcllt wird. Hierzu kann einfach anstatt der Table-Pagination eine "eigene" Pagination unter der Tabelle mittels der Pagination-Komponente verwendet werden.'})}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.p,{children:"Die Table-Komponente ist so konstruiert, dass nicht der gesamte Tabellenaufbau im Markup selbst beschrieben werden muss. Wie genau die Tabelle Markup-spezifisch aufgebaut werden muss, um barrierefrei zu sein, \xfcbernimmt die Komponente selbst."}),"\n",(0,t.jsxs)(n.p,{children:["Dadurch, dass die Table-Komponente das valide und barrierefreie Markup dynamisch zusammenbaut, kann die komplexe Auszeichnung f\xfcr die assistive Systeme dem/der Entwickler",":in"," abgenommen werden."]}),"\n",(0,t.jsx)(n.h3,{id:"funktionalit\xe4ten",children:"Funktionalit\xe4ten"}),"\n",(0,t.jsx)(n.p,{children:"Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Tabellenbeschreibung durch ein ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"label"})}),"-Attribut."]}),"\n",(0,t.jsx)(n.li,{children:"Mehrzeilige Spalten\xfcberschriften in horizontaler oder vertikaler Richtung."}),"\n",(0,t.jsx)(n.li,{children:"Sortierfunktion f\xfcr entweder horizontale und vertikale Ausrichtung."}),"\n",(0,t.jsx)(n.li,{children:"Unterschiedliche Render-Funktion f\xfcr die Zellen."}),"\n",(0,t.jsx)(n.li,{children:"Pagination f\xfcr die Tabelle."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten ",(0,t.jsx)(n.strong,{children:"nicht"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Das Filtern der Tabelle ist aktuell nicht innerhalb der Tabelle vorgesehen."}),"\n",(0,t.jsx)(n.li,{children:"Das Ausw\xe4hlen von Zeilen ist aktuell in der Tabelle nicht vorgesehen."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Beides k\xf6nnte jedoch mittels der Render-Funktion umgesetzt werden."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pagination",children:"Pagination"}),"\n",(0,t.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_pagination"})})," kann optional eine Vielzahl zus\xe4tzlicher Properties zur Steuerung der Pagination \xfcbergeben werden. Die genaue Beschreibung der Optionen ist auf der Seite ",(0,t.jsx)("kol-link",{_href:"/docs/components/pagination",_label:"/docs/components/pagination",_label:"Pagination"})," zu finden."]}),"\n",(0,t.jsx)(n.h4,{id:"kolibritableheaders",children:"KoliBriTableHeaders"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  horizontal: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n  vertical: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-table _label="Tabellenbeschreibung" _headers=\'{"horizontal": [[{"label":"Montag","key":"montag"}]]}\' _pagination=\'[{"page":2}]\'></kol-table>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)("kol-table",{_label:"Nur Vertikal Header, Daten Vertikal, Pagination",_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsx)(n.h3,{id:"sortierung",children:"Sortierung"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Zu jedem Header kann man eine Sortierfunktion definieren."}),"\n",(0,t.jsx)(n.li,{children:"Es ist exakt eine oder keine Sortierfunktion aktiviert."}),"\n",(0,t.jsx)(n.li,{children:"Aktuell wird nicht unterst\xfctzt, dass bei zweidimensionalen Headern, die Header der jeweils anderen Header-Seite mit sortiert werden. Bei der Anforderung der Sortierung empfehlen wir die Verwendung nur einer Header-Dimension (entweder horizontal oder vertikal)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.p,{children:"Bei der Table-Komponente werden zahlreiche Attribut-Definitionen dem Tabellen-Markup hinzugef\xfcgt, um die Screenreader bestm\xf6glich zu unterst\xfctzen."}),"\n",(0,t.jsxs)(n.p,{children:["Aktuell werden folgende Attribute von der Komponente verwaltet: ",(0,t.jsx)(n.code,{children:"role"}),", ",(0,t.jsx)(n.code,{children:"scope"})," und ",(0,t.jsx)(n.code,{children:"aria-\\*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Das hei\xdft beispielsweise, dass bei den Spalten\xfcberschriften automatisch entweder die Rolle ",(0,t.jsx)(n.code,{children:"colheader"})," oder ",(0,t.jsx)(n.code,{children:"rowheader"})," gesetzt wird. Dar\xfcber hinaus wird der Scope entweder auf ",(0,t.jsx)(n.code,{children:"col"}),"/",(0,t.jsx)(n.code,{children:"colgroup"})," oder ",(0,t.jsx)(n.code,{children:"row"}),"/",(0,t.jsx)(n.code,{children:"rowgroup"})," gesetzt. \xc4hnlich dieser Automatismen werden auch die ",(0,t.jsx)(n.code,{children:"aria-\\*"}),"-Attribute je nach Relevanz gesetzt."]}),"\n",(0,t.jsxs)(n.p,{children:["Warum die Tabelle einen ",(0,t.jsx)(n.strong,{children:"Tabindex"})," hat, wird auf der folgenden Webseite beschrieben: ",(0,t.jsx)("kol-link",{_href:"",_label:""}),(0,t.jsx)(n.a,{href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable",children:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/WAI/tutorials/tables/",_label:"https://www.w3.org/WAI/tutorials/tables/",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html",_label:"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",_label:"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html",_label:"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.digitala11y.com/aria-sort-properties/",_label:"https://www.digitala11y.com/aria-sort-properties/",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://dequeuniversity.com/library/aria/table-sortable",_label:"https://dequeuniversity.com/library/aria/table-sortable",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.maxability.co.in/2016/06/07/aria-sort-property/",_label:"https://www.maxability.co.in/2016/06/07/aria-sort-property/",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort",_label:"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://stackoverflow.com/questions/1312236/",_label:"https://stackoverflow.com/questions/1312236/",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable",_label:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_caption"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_caption"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _label.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Deprecated: Defines the visible caption of the component."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_data"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_data"})}),(0,t.jsx)(n.td,{children:"Defines the primary table data."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"KoliBriTableDataType[]"})," | ",(0,t.jsx)(n.code,{children:"string"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_dataFoot"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_data-foot"})}),(0,t.jsx)(n.td,{children:"Defines the data for the table footer."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"KoliBriTableDataType[]"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_headers"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_headers"})}),(0,t.jsx)(n.td,{children:"Defines the horizontal and vertical table headers."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"{ horizontal?: KoliBriTableHeaderCell[][]"})," | ",(0,t.jsx)(n.code,{children:"undefined; vertical?: KoliBriTableHeaderCell[][]"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_minWidth"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_min-width"})}),(0,t.jsx)(n.td,{children:"Defines the table min-width."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_pagination"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_pagination"})}),(0,t.jsx)(n.td,{children:"Defines whether to show the data distributed over multiple pages."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{ _page: number; } & { _on?: KoliBriPaginationButtonCallbacks"})," | ",(0,t.jsx)(n.code,{children:"undefined; _page?: number"})," | ",(0,t.jsx)(n.code,{children:"undefined; _boundaryCount?: number"})," | ",(0,t.jsx)(n.code,{children:"undefined; _hasButtons?: boolean"})," | ",(0,t.jsx)(n.code,{children:"Stringified<PaginationHasButton>"})," | ",(0,t.jsx)(n.code,{children:"undefined; _pageSize?: number"})," | ",(0,t.jsx)(n.code,{children:"undefined; _pageSizeOptions?: Stringified<number[]>"})," | ",(0,t.jsx)(n.code,{children:"undefined; _siblingCount?: number"})," | ",(0,t.jsx)(n.code,{children:"undefined; _total?: number"})," | ",(0,t.jsx)(n.code,{children:"undefined; _variant?: ButtonVariantPropType"})," | ",(0,t.jsx)(n.code,{children:"undefined; _customClass?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; _label?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; _max?: number"})," | ",(0,t.jsx)(n.code,{children:"undefined; _tooltipAlign?: AlignPropType"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./button",children:"kol-button"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./pagination",children:"kol-pagination"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n  kol-table --\x3e kol-button\n  kol-table --\x3e kol-pagination\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-pagination --\x3e kol-button\n  kol-pagination --\x3e kol-select\n  kol-pagination --\x3e kol-button-wc\n  kol-select --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-tooltip-wc\n  kol-input --\x3e kol-alert\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-table fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}i(35863);var a=i(94383);const o={title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},d=void 0,c={id:"components/table",title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/table.mdx",sourceDirName:"30-components",slug:"/components/table",permalink:"/en/docs/1.7/components/table",draft:!1,unlisted:!1,tags:[{label:"Table",permalink:"/en/docs/1.7/tags/table"},{label:"Beschreibung",permalink:"/en/docs/1.7/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.7/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Split-Button",permalink:"/en/docs/1.7/components/split-button"},next:{title:"Tabs",permalink:"/en/docs/1.7/components/tabs"}},h={},u=[{value:"Live-Editor",id:"live-editor",level:2}];function b(e){const n={h2:"h2",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(a._,{component:"table"})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},35863:(e,n,i)=>{i.d(n,{_:()=>d});var t=i(32404),l=i(50959),r=i(11527);const s=function(e,n,i,t,l){return void 0===l&&(l="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${l}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(t.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:i}=e;const[d,c]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,b={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${n}/${i}?hideMenus`,x={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(t.UD,{className:"w-full",_label:"Code-Beispiel",_on:x,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===d&&(0,r.jsx)("iframe",{src:p,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===d&&(0,r.jsx)(o,{url:s(h,n,i,b.angular)})}),(0,r.jsx)("div",{children:"React"===d&&(0,r.jsx)(o,{url:s(h,n,i,b.react)})}),(0,r.jsx)("div",{children:"Vue"===d&&(0,r.jsx)(o,{url:s(h,n,i,b.vue)})}),(0,r.jsx)("div",{children:"Web Component"===d&&(0,r.jsx)(o,{url:s(h,n,i,b.webcomponent)})})]})}},94383:(e,n,i)=>{i.d(n,{_:()=>_});var t=i(7794),l=i(32404),r=i(50959),s=i(1206),a=i(11527);function o(e){const{label:n,name:i,update:t,value:s}=e;return(0,r.useEffect)((()=>{s||t(i,"#000000")}),[]),(0,a.jsx)(l.Np,{_label:"",_on:{onChange:(e,n)=>t(i,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:i,update:t}=e,[s,o]=(0,r.useState)(""),[d,c]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[b,p]=(0,r.useState)("");let x=!1,m=!1,j=!1,g=!1;n.type.includes("KoliBriAllIcon")?(x=!0,m=!0,j=!0,g=!0):(n.type.includes("KoliBriVerticalIcon")&&(j=!0,g=!0),n.type.includes("KoliBriHorizontalIcon")&&(x=!0,m=!0)),(0,r.useEffect)((()=>{if(!s||d||h||b){const e={};s&&(e.left=`codicon codicon-${s}`),d&&(e.right=`codicon codicon-${d}`),h&&(e.top=`codicon codicon-${h}`),b&&(e.bottom=`codicon codicon-${b}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${s}`)}),[s,d,h,b]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,x?(0,a.jsx)(l.ox,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",m?(0,a.jsx)(l.ox,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",j?(0,a.jsx)(l.ox,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",g?(0,a.jsx)(l.ox,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:t,update:r,value:s}=e,o=[];function d(e){return{label:e,value:e}}return t.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...t.filter((e=>"undefined"!==e)).map(d))):o.push(...t.filter((e=>"undefined"!==e)).map(d)),(0,a.jsx)(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onChange:(e,i)=>r(n,i[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(l.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:r,update:i,value:t});case"_icon":return(0,a.jsx)(d,{attribute:n,label:r,update:i,value:t});default:switch(s){case"string":return(0,a.jsx)(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(l.TE,{className:"my-2",_checked:!0===t,_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:n.name,types:e,update:i,value:t}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(22115),b=i(77192),p=i(85630),x=i.n(p);function m(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,r.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),o=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${n}${l}>${s}</kol-${n}>`;let c;try{c=(0,b.format)(d,{plugins:[x()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function j(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,version:l.u_}[e.tag];return t?(0,a.jsx)(t,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:n,name:i,update:t,value:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const f=["_smart-button","_icon-align"],k={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(t.p).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==k[i]?.[n.name]&&(e[i][n.name]=k[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,l=k[i]?.[t];l&&(e[i][t]=l)}))})),e}()),[o,d]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!t.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&u("_label","Label-Text");!!t.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&u("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>n[o]||{}),[n,o]);function u(e,n){i((i=>{const t={...i[o],[e]:n,defaultValues:i[o].defaultValues.filter((n=>n!==e))};return{...i,[o]:t}}))}const b=Object.values(t.p).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(s.Z,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(j,{tag:o,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(m,{params:c,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(l.HA,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.HA,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[b&&b.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),b&&0===b.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(l.HA,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[b&&b.slots.map((e=>(0,a.jsx)(g,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),b&&0===b.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);