"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[66060],{69880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var i=t(76776),s=t(108);function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Der ButtonLink ist semantisch ein Button und hat das Design eines Links. Hierzu werden alle relevanten Properties der Button-Komponente \xfcbernommen und um die Design-bestimmenden Properties des Links erweitert."}),"\n",(0,i.jsxs)(n.p,{children:["Einen Button kann man deaktivieren und daher gibt es bei einem ButtonLink das Property ",(0,i.jsx)(n.code,{children:"_disabled"}),". Wie das optisch ausgestaltet wird, entscheidet die UX-Designer",":in","."]}),"\n",(0,i.jsxs)(n.p,{children:["Statt, wie bei einem Link, ",(0,i.jsx)(n.code,{children:"_href"})," zu verwenden, wird bei einem ButtonLink das Property \xfcber den ",(0,i.jsx)(n.code,{children:"Click-Callback"})," gesteuert. Hierzu wird das ",(0,i.jsx)(n.code,{children:"_on"}),"-Property verwendet."]}),"\n",(0,i.jsxs)(n.p,{children:["Bei einem Link gibt es das Property ",(0,i.jsx)(n.code,{children:"target"}),", welches ggf. den Link in einem neuen Fenster/Tab \xf6ffnet. Das Verhalten ist aktuell noch nicht umgesetzt."]}),"\n",(0,i.jsxs)(n.p,{children:["Da der Link, nicht wie der Button, in mehrere Varianten (",(0,i.jsx)(n.code,{children:"primary"})," oder ",(0,i.jsx)(n.code,{children:"secondary"})," usw.) angeboten wird, stehen die Properties ",(0,i.jsx)(n.code,{children:"_customClass"})," und ",(0,i.jsx)(n.code,{children:"_variant"})," nicht zur Verf\xfcgung."]}),"\n",(0,i.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,i.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<kol-button-link _on="" _label="Schalter sieht wie ein Link aus"></kol-button-link>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(n.p,{children:["Events der Komponente k\xf6nnen \xfcber eine ",(0,i.jsx)(n.code,{children:"_on"}),"-Property behandelt werden, die aus einem Objekt mit verschiedenen Callback-Funktionen besteht:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"kolibriElement._on = {\n\tonFocus: (event) => {\n\t\t/* Do something on focus */\n\t},\n\tonClick: (event, value) => {\n\t\t/* Do something with value or event */\n\t},\n\t// ...\n};\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Event"}),(0,i.jsx)(n.th,{children:"Ausl\xf6ser"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onFocus"}),(0,i.jsx)(n.td,{children:"Element wird fokussiert"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onMouseDown"}),(0,i.jsxs)(n.td,{children:["Element wird angeklickt (entspricht nativem ",(0,i.jsx)(n.code,{children:"mouseDown"}),"-Event)"]}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onClick"}),(0,i.jsxs)(n.td,{children:["Element wird angeklickt (entspricht nativem ",(0,i.jsx)(n.code,{children:"click"}),"-Event)"]}),(0,i.jsxs)(n.td,{children:["Definierter ",(0,i.jsx)(n.code,{children:"_value"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onBlur"}),(0,i.jsx)(n.td,{children:"Element verliert Fokus"}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsx)("div",{className:"flex gap-2",children:(0,i.jsx)("kol-button-link",{_on:"",_label:"Schalter sieht wie ein Link aus"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_accessKey"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_access-key"})}),(0,i.jsx)(n.td,{children:"Defines the elements access key."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_ariaControls"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_aria-controls"})}),(0,i.jsxs)(n.td,{children:["Defines which elements are controlled by this component. (",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls",children:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"}),")"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_ariaExpanded"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_aria-expanded"})}),(0,i.jsxs)(n.td,{children:["Defines whether the interactive element of the component expanded something. (",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",children:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"}),")"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_ariaSelected"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_aria-selected"})}),(0,i.jsxs)(n.td,{children:["Defines whether the interactive element of the component is selected (e.g. role=tab). (",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected",children:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"}),")"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_disabled"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_disabled"})}),(0,i.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_hideLabel"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_hide-label"})}),(0,i.jsx)(n.td,{children:"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_icons"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_icons"})}),(0,i.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,i.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"KoliBriHorizontalIcons & KoliBriVerticalIcons"})," | ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_id"})}),(0,i.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"_label"})," ",(0,i.jsx)(n.em,{children:"(required)"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_label"})}),(0,i.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,i.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_name"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_name"})}),(0,i.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_on"})}),(0,i.jsx)(n.td,{children:"--"}),(0,i.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr die Button-Events an."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"undefined"})," | ",(0,i.jsx)(n.code,{children:"{ onClick?: EventValueOrEventCallback<MouseEvent, StencilUnknown>"})," | ",(0,i.jsx)(n.code,{children:"undefined; onMouseDown?: EventCallback<MouseEvent>"})," | ",(0,i.jsx)(n.code,{children:"undefined; }"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_role"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_role"})}),(0,i.jsx)(n.td,{children:"Defines the role of the components primary element."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"button"'})," | ",(0,i.jsx)(n.code,{children:'"link"'})," | ",(0,i.jsx)(n.code,{children:'"tab"'})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_tabIndex"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_tab-index"})}),(0,i.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"number"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_tooltipAlign"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_tooltip-align"})}),(0,i.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"bottom"'})," | ",(0,i.jsx)(n.code,{children:'"left"'})," | ",(0,i.jsx)(n.code,{children:'"right"'})," | ",(0,i.jsx)(n.code,{children:'"top"'})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'top'"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_type"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_type"})}),(0,i.jsx)(n.td,{children:"Defines either the type of the component or of the components interactive element."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"button"'})," | ",(0,i.jsx)(n.code,{children:'"reset"'})," | ",(0,i.jsx)(n.code,{children:'"submit"'})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'button'"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_value"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_value"})}),(0,i.jsx)(n.td,{children:"Defines the value that the button emits on click."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"null"})," | ",(0,i.jsx)(n.code,{children:"number"})," | ",(0,i.jsx)(n.code,{children:"object"})," | ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"getvalue",children:"getValue"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"getValue() => Promise<Stringified<StencilUnknown> | undefined>"})}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"Promise<Stringified<StencilUnknown>>"})]}),"\n",(0,i.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var r=t(37704),c=t(54592);const o={title:"ButtonLink",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonLink-Komponente.",tags:["ButtonLink","Beschreibung","Spezifikation","Beispiele"]},a=void 0,h={id:"components/button-link",title:"ButtonLink",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonLink-Komponente.",source:"@site/docs/30-components/button-link.mdx",sourceDirName:"30-components",slug:"/components/button-link",permalink:"/docs/next/components/button-link",draft:!1,unlisted:!1,tags:[{label:"ButtonLink",permalink:"/docs/next/tags/button-link"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"ButtonLink",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonLink-Komponente.",tags:["ButtonLink","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"ButtonGroup",permalink:"/docs/next/components/button-group"},next:{title:"Button",permalink:"/docs/next/components/button"}},u={},x=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Events",id:"events",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"getValue",id:"getvalue",level:3},{value:"Returns",id:"returns",level:4},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,i.jsx)(c.o,{component:"button-link"}),"\n",(0,i.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsx)(r.Q,{component:"button-link",sample:"basic"}),"\n",(0,i.jsx)(r.Q,{component:"button-link",sample:"icons"}),"\n",(0,i.jsx)(r.Q,{component:"button-link",sample:"image"}),"\n",(0,i.jsx)(r.Q,{component:"button-link",sample:"target"})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},37704:(e,n,t)=>{t.d(n,{Q:()=>o});var i=t(51376),s=t(80924),l=t(76776);const d=function(e,n,t,i,s){return void 0===s&&(s="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${t}&view=${s}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,l.jsxs)("div",{className:"m-2",children:[(0,l.jsx)("iframe",{src:n,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,l.jsx)(i.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,l.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:t}=e;const[o,a]=(0,s.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${t}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:a((()=>"Angular"));break;case 2:a((()=>"React"));break;case 3:a((()=>"Vue"));break;case 4:a((()=>"Web Component"));break;default:a((()=>"Preview"))}}};return(0,l.jsxs)(i._,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,l.jsx)("div",{children:"Preview"===o&&(0,l.jsx)("iframe",{src:j,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,l.jsx)("div",{children:"Angular"===o&&(0,l.jsx)(c,{url:d(h,n,t,x.angular)})}),(0,l.jsx)("div",{children:"React"===o&&(0,l.jsx)(c,{url:d(h,n,t,x.react)})}),(0,l.jsx)("div",{children:"Vue"===o&&(0,l.jsx)(c,{url:d(h,n,t,x.vue)})}),(0,l.jsx)("div",{children:"Web Component"===o&&(0,l.jsx)(c,{url:d(h,n,t,x.webcomponent)})})]})}},54592:(e,n,t)=>{t.d(n,{o:()=>v});var i=t(28904),s=t(51376),l=t(80924),d=t(94368),r=t(76776);function c(e){const{label:n,name:t,update:i,value:d}=e;return(0,l.useEffect)((()=>{d||i(t,"#000000")}),[]),(0,r.jsx)(s.eK,{_label:"",_on:{onInput:(e,n)=>i(t,n)},_value:d,children:(0,r.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:t,update:i}=e,[d,c]=(0,l.useState)(""),[o,a]=(0,l.useState)(""),[h,u]=(0,l.useState)(""),[x,j]=(0,l.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,l.useEffect)((()=>{if(!d||o||h||x){const e={};d&&(e.left=`codicon codicon-${d}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${d}`)}),[d,o,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[t,p?(0,r.jsx)(s.Si,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",b?(0,r.jsx)(s.Si,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",m?(0,r.jsx)(s.Si,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,r.jsx)(s.Si,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,r.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function a(e){const{name:n,label:t,types:i,update:l,value:d}=e,c=[];function o(e){return{label:e,value:e}}return i.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...i.filter((e=>"undefined"!==e)).map(o))):c.push(...i.filter((e=>"undefined"!==e)).map(o)),(0,r.jsx)(s.qy,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onInput:(e,t)=>l(n,t[0])},_value:d?[d]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:t})})}function h(e){const{attribute:n,update:t,value:i}=e,d=(0,l.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,l.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),l=(0,r.jsx)(s.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,r.jsx)(c,{name:n.name,label:l,update:t,value:i});case"_icons":return(0,r.jsx)(o,{attribute:n,label:l,update:t,value:i});default:switch(d){case"string":return(0,r.jsx)(s.Uh,{className:"my-2",_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_value:i||"",children:(0,r.jsx)("span",{slot:"expert",children:l})});case"number":return(0,r.jsx)(s.QL,{className:"my-2",_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_value:i,children:(0,r.jsx)("span",{slot:"expert",children:l})});case"boolean":return(0,r.jsx)(s.Q7,{className:"my-2",_checked:!0===i,_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:l})});default:return e.length>1?(0,r.jsx)(a,{label:l,name:n.name,types:e,update:t,value:i}):(0,r.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,r.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,r.jsx)(r.Fragment,{children:h})}var u=t(63136),x=t(28256),j=t(39452),p=t.n(j);function b(e){const{tag:n,params:t}=e,i=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let s="";const d=(0,l.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],i=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${i}"`+t.substring(n)}else e+=`<div slot="${i}">${t}</div>`})),e}),[t]),c=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[l,r]of c)if(r){let e="";switch(typeof r){case"string":e=` ${l}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${r.toString()}"`;break;case"boolean":e=r?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}s+=e}const o=`<kol-${n}${s}>${d}</kol-${n}>`;let a;try{a=(0,x.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){a=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:a})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:s.s1,accordion:s.IP,alert:s.mW,avatar:s.aq,badge:s.cX,breadcrumb:s.If,button:s.qC,"button-group":s.Os,"button-link":s.u_,card:s.Yh,details:s.Si,form:s.OO,heading:s.ch,icon:s.SA,image:s.iu,"indented-text":s.MV,"input-checkbox":s.Q7,"input-color":s.eK,"input-date":s.QZ,"input-email":s.kN,"input-file":s.Ex,"input-number":s.QL,"input-password":s.EH,"input-radio":s.wJ,"input-range":s.Ef,"input-text":s.Uh,kolibri:s.aY,link:s.GQ,"link-button":s._k,"link-group":s.O_,logo:s.ae,modal:s.cT,nav:s.Y4,pagination:s.kj,progress:s.O0,quote:s.SY,select:s.qy,"skip-nav":s.Ig,spin:s.kP,"split-button":s.a,symbol:s.OM,table:s.Y9,tabs:s._,textarea:s.DG,version:s.k1}[e.tag];return i?(0,r.jsx)(i,{...n,children:t.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:t,update:i,value:s}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:t||"default"}),": ",n,(0,r.jsx)("br",{}),(0,r.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:s})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,t]=(0,l.useState)(function(){const e={};return Object.values(i.Q).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==_[t]?.[n.name]&&(e[t][n.name]=_[t][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,s=_[t]?.[i];s&&(e[t][i]=s)}))})),e}()),[c,o]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!i.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&u("_label","Label-Text");!!i.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&u("_heading","Heading-Text")}),[c]);const a=(0,l.useMemo)((()=>n[c]||{}),[n,c]);function u(e,n){t((t=>{const i={...t[c],[e]:n,defaultValues:t[c].defaultValues.filter((n=>n!==e))};return{...t,[c]:i}}))}const x=Object.values(i.Q).find((e=>e.name===`kol-${c}`));return(0,r.jsx)(d.c,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(s._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(m,{tag:c,params:a})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(b,{params:a,tag:c})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(s.ch,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.ch,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(h,{attribute:e,update:u,value:a[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(s.ch,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,r.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:a["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);