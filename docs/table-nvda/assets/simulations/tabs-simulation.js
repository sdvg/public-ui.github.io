setTimeout((()=>{const e=e=>(a,l)=>{console.log(e,a,l)};let a=document.querySelector("#tabs-with-events");a&&(a._on={onCreate:{label:"Neu Text anpassbar",callback:e("onCreate")},onSelect:e("onSelect")},a._tabs=[{_label:"Tab 1",_icon:"fa-solid fa-house"},{_label:"Tab 2",_cta:"primary"},{_label:"Tab 3",_disabled:!0},{_label:"Tab 4",_on:{onClose:e("onClose")}},{_label:"Tab 5",_on:{onClose:!0}},{_label:"Tab 6"},{_label:"Tab 7"},{_label:"Tab 8"}]),a=document.querySelector("#tabs-with-create"),a&&(a._on={onCreate:e("onCreate")})}),2500);