function openModal(o,e){o._activeElement=e}function closeModal(o){o._activeElement=null}function setModalFunctions(o,e,n){const l=document.querySelector(o),t=document.querySelector(e),c=document.querySelector(n);t&&(l&&(l._on={onClick:openModal(t,l)}),t._on={onClose:closeModal(t)}),c&&(c._on={onClick:closeModal(t)})}setModalFunctions("#modal-open-1","#modal-1"),setModalFunctions("#modal-open-2","#modal-2"),setModalFunctions("#tooltip_button","#overviewModal");