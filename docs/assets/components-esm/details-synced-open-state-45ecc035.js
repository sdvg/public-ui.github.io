/*! * KoliBri - The accessible HTML-Standard */ const detailsElement=document.getElementById("details"),buttonElement=document.getElementById("button");detailsElement&&(detailsElement._on={onToggle:(e,t)=>{buttonElement._label="👆Details "+(t?"schließen":"öffnen")}}),buttonElement&&(buttonElement._on={onClick:()=>{detailsElement._open=!detailsElement._open}});const detailsSyncedOpenState={};export default detailsSyncedOpenState;