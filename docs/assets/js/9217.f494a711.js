exports.id = 9217; exports.ids = [9217]; exports.modules = { /***/ 9217: /***/ (() => { /*! * KoliBri - The accessible HTML-Standard */ const DATA=[{order:0,shipped:!1,date:new Date("1981-05-26T21:33:43.612Z")},{order:1,shipped:!0,date:new Date("1971-04-25T19:44:17.014Z")},{order:2,shipped:!1,date:new Date("1986-07-10T11:39:29.539Z")}],HEADERS={horizontal:[[{label:"#",key:"order",render:(e,t)=>`Index: ${t.label}`},{label:"Status",key:"shipped",render:(e,t)=>{t.label?e.textContent="Order has been dispatched 🚚":e.textContent="Order pending 📦"}},{label:"Date (string)",key:"date",render:(e,t)=>{e.innerHTML=`<strong>${Intl.DateTimeFormat("de-DE").format(t.label)}</strong>`},sort:e=>e.sort(((e,t)=>e.date.getTime()-t.date.getTime()))}]]},container=document.getElementById("table-container"),table=document.createElement("kol-table");table._label="Table example with render functions",table._data=DATA,table._headers=HEADERS,null==container||container.appendChild(table); /***/ }) }; ;