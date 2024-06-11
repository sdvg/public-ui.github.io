"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[21276],{55192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var l=n(76776),i=n(108);function r(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["Die ",(0,l.jsx)(t.strong,{children:"Form"}),"-Komponente dient dazu alle Eingabefelder zu umschlie\xdfen, den Hinweistext f\xfcr Pflichtfelder korrekt zu positionieren und die Events ",(0,l.jsx)(t.code,{children:"submit"})," und ",(0,l.jsx)(t.code,{children:"reset"})," weiterzuleiten."]}),"\n",(0,l.jsx)(t.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,l.jsx)(t.h3,{id:"code",children:"Code"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:'<kol-form _requiredText="Sternchen hei\xdft Pflichtfeld.">\n\t<kol-input-text _label="Vorname"></kol-input-text>\n\t<kol-input-text _label="Nachname"></kol-input-text>\n</kol-form>\n'})}),"\n",(0,l.jsx)(t.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,l.jsxs)("kol-form",{_requiredText:"Sternchen hei\xdft Pflichtfeld.",children:[(0,l.jsx)("kol-input-text",{_label:"Vorname"}),(0,l.jsx)("kol-input-text",{_label:"Nachname"})]}),"\n",(0,l.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Property"}),(0,l.jsx)(t.th,{children:"Attribute"}),(0,l.jsx)(t.th,{children:"Description"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"_errorList"})}),(0,l.jsx)(t.td,{children:"--"}),(0,l.jsx)(t.td,{children:"A list of error objects that each describe an issue encountered in the form. Each error object contains a message and a selector for identifying the form element related to the error."}),(0,l.jsxs)(t.td,{children:[(0,l.jsx)(t.code,{children:"ErrorListPropType[]"})," | ",(0,l.jsx)(t.code,{children:"undefined"})]}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"undefined"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"_on"})}),(0,l.jsx)(t.td,{children:"--"}),(0,l.jsx)(t.td,{children:"Gibt die EventCallback-Funktionen f\xfcr die Form-Events an."}),(0,l.jsxs)(t.td,{children:[(0,l.jsx)(t.code,{children:"undefined"})," | ",(0,l.jsx)(t.code,{children:"{ onSubmit?: EventCallback<Event>"})," | ",(0,l.jsx)(t.code,{children:"undefined; onReset?: EventCallback<Event>"})," | ",(0,l.jsx)(t.code,{children:"undefined; }"})]}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"undefined"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"_requiredText"})}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"_required-text"})}),(0,l.jsx)(t.td,{children:"Defines whether the mandatory-fields-hint should be shown. A string overrides the default text."}),(0,l.jsxs)(t.td,{children:[(0,l.jsx)(t.code,{children:"boolean"})," | ",(0,l.jsx)(t.code,{children:"string"})," | ",(0,l.jsx)(t.code,{children:"undefined"})]}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"true"})})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(t.h3,{id:"focuserrorlist",children:"focusErrorList"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"focusErrorList() => Promise<void>"})}),"\n",(0,l.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"Promise<void>"})]}),"\n",(0,l.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Slot"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"Inhalt der Form."})]})})]}),"\n",(0,l.jsx)(t.hr,{})]})}function s(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}n(37704);var a=n(54592);const o={title:"Form",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Form-Komponente.",tags:["Form","Beschreibung","Spezifikation","Beispiele"]},d=void 0,c={id:"components/form",title:"Form",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Form-Komponente.",source:"@site/versioned_docs/version-2.0/30-components/form.mdx",sourceDirName:"30-components",slug:"/components/form",permalink:"/docs/2.0/components/form",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Form",permalink:"/docs/2.0/tags/form"},{inline:!0,label:"Beschreibung",permalink:"/docs/2.0/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/2.0/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/2.0/tags/beispiele"}],version:"2.0",frontMatter:{title:"Form",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Form-Komponente.",tags:["Form","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Dialog",permalink:"/docs/2.0/components/dialog"},next:{title:"Heading",permalink:"/docs/2.0/components/heading"}},u={},h=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"focusErrorList",id:"focuserrorlist",level:3},{value:"Returns",id:"returns",level:4},{value:"Slots",id:"slots",level:2},{value:"Live-Editor",id:"live-editor",level:2}];function p(e){const t={h2:"h2",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{}),"\n",(0,l.jsx)(t.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(a.o,{component:"form"})]})}function m(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},37704:(e,t,n)=>{n.d(t,{Q:()=>d});var l=n(83488),i=n(80924),r=n(76776);const s=function(e,t,n,l,i){return void 0===i&&(i="editor"),`${e}&module=${l}&initialpath=%23%2F${t}%2F${n}&view=${i}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:t,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(l.GQ,{_href:t,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:t,sample:n}=e;const[d,c]=(0,i.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",h=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${h}.html`,react:`${h}.tsx`,vue:`${h}.vue`,webcomponent:`${h}.html`},m=`/sample-react/#/${t}/${n}?hideMenus`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(l._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===d&&(0,r.jsx)("iframe",{src:m,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===d&&(0,r.jsx)(o,{url:s(u,t,n,p.angular)})}),(0,r.jsx)("div",{children:"React"===d&&(0,r.jsx)(o,{url:s(u,t,n,p.react)})}),(0,r.jsx)("div",{children:"Vue"===d&&(0,r.jsx)(o,{url:s(u,t,n,p.vue)})}),(0,r.jsx)("div",{children:"Web Component"===d&&(0,r.jsx)(o,{url:s(u,t,n,p.webcomponent)})})]})}},54592:(e,t,n)=>{n.d(t,{o:()=>v});var l=n(30440),i=n(83488),r=n(80924),s=n(6960),a=n(76776);function o(e){const{label:t,name:n,update:l,value:s}=e;return(0,r.useEffect)((()=>{s||l(n,"#000000")}),[]),(0,a.jsx)(i.eK,{_label:"",_on:{onInput:(e,t)=>l(n,t)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function d(e){const{attribute:t,label:n,update:l}=e,[s,o]=(0,r.useState)(""),[d,c]=(0,r.useState)(""),[u,h]=(0,r.useState)(""),[p,m]=(0,r.useState)("");let b=!1,x=!1,f=!1,j=!1;t.type.includes("KoliBriAllIcon")?(b=!0,x=!0,f=!0,j=!0):(t.type.includes("KoliBriVerticalIcon")&&(f=!0,j=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,x=!0)),(0,r.useEffect)((()=>{if(!s||d||u||p){const e={};s&&(e.left=`codicon codicon-${s}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&l(t.name,JSON.stringify(e))}else l(t.name,`codicon codicon-${s}`)}),[s,d,u,p]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[n,b?(0,a.jsx)(i.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,a.jsx)(i.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",f?(0,a.jsx)(i.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>h(e)}},e)))})}):"",j?(0,a.jsx)(i.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(i.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function c(e){const{name:t,label:n,types:l,update:r,value:s}=e,o=[];function d(e){return{label:e,value:e}}return l.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...l.filter((e=>"undefined"!==e)).map(d))):o.push(...l.filter((e=>"undefined"!==e)).map(d)),(0,a.jsx)(i.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,n)=>r(t,n[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function u(e){const{attribute:t,update:n,value:l}=e,s=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(i.s1,{_label:t.description,children:t.name});switch(t.name){case"_color":return(0,a.jsx)(o,{name:t.name,label:r,update:n,value:l});case"_icons":return(0,a.jsx)(d,{attribute:t,label:r,update:n,value:l});default:switch(s){case"string":return(0,a.jsx)(i.Uh,{className:"my-2",_label:"",_on:{onInput:(e,l)=>n(t.name,l)},_value:l||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(i.QL,{className:"my-2",_label:"",_on:{onInput:(e,l)=>n(t.name,l)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(i.Q7,{className:"my-2",_checked:!0===l,_label:"",_on:{onInput:(e,l)=>n(t.name,l)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:t.name,types:e,update:n,value:l}):(0,a.jsxs)("p",{children:["Attribut: '",t.name,"'",(0,a.jsx)("br",{}),"Typ: '",t.type,"'"]})}}}),[t,l]);return(0,a.jsx)(a.Fragment,{children:u})}var h=n(63136),p=n(28256),m=n(39452),b=n.n(m);function x(e){const{tag:t,params:n}=e,l=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let i="";const s=(0,r.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],l=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${l}"`+n.substring(t)}else e+=`<div slot="${l}">${n}</div>`})),e}),[n]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[r,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}i+=e}const d=`<kol-${t}${i}>${s}</kol-${t}>`;let c;try{c=(0,p.format)(d,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(u){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(h.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function f(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),l={abbr:i.s1,accordion:i.IP,alert:i.mW,avatar:i.aq,badge:i.cX,breadcrumb:i.If,button:i.qC,"button-group":i.Os,"button-link":i.u_,card:i.Yh,details:i.Si,form:i.OO,heading:i.ch,icon:i.SA,image:i.iu,"indented-text":i.MV,"input-checkbox":i.Q7,"input-color":i.eK,"input-date":i.QZ,"input-email":i.kN,"input-file":i.Ex,"input-number":i.QL,"input-password":i.EH,"input-radio":i.wJ,"input-range":i.Ef,"input-text":i.Uh,kolibri:i.aY,link:i.GQ,"link-button":i._k,"link-group":i.O_,logo:i.ae,modal:i.cT,nav:i.Y4,pagination:i.kj,progress:i.O0,quote:i.SY,select:i.qy,"skip-nav":i.Ig,spin:i.kP,"split-button":i.a,symbol:i.OM,table:i.Y9,tabs:i._,textarea:i.DG,version:i.k1}[e.tag];return l?(0,a.jsx)(l,{...t,children:n.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function j(e){const{description:t,name:n,update:l,value:i}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:n||"default"}),": ",t,(0,a.jsx)("br",{}),(0,a.jsx)(h.GW,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:i})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[t,n]=(0,r.useState)(function(){const e={};return Object.values(l.Q).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==_[n]?.[t.name]&&(e[n][t.name]=_[n][t.name])})),t.slots.forEach((t=>{const l=`slot-${t.name||"default"}`,i=_[n]?.[l];i&&(e[n][l]=i)}))})),e}()),[o,d]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!l.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&h("_label","Label-Text");!!l.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&h("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function h(e,t){n((n=>{const l={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:l}}))}const p=Object.values(l.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(i._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(f,{tag:o,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(x,{params:c,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(i.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(u,{attribute:e,update:h,value:c[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(i.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(j,{description:e.description,name:e.name||"default",update:h,value:c["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);