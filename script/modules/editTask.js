export const editTask = ({e, EDIT_ATTRIBUTE, modalContainer, openModalFunc}) => {
    if (e.target?.matches('button.edit-item-btn')) {
        const currentItem = e.target.closest('article');
        const editId = Number(currentItem.getAttribute('id'));
        const formTitle = currentItem.querySelector('.title span').innerHTML;
        const formStartField = currentItem.querySelector('.start-time span').innerHTML;
        const formEndField = currentItem.querySelector('.end-time span').innerHTML;

        modalContainer.setAttribute(EDIT_ATTRIBUTE, editId);
        openModalFunc({e, title: formTitle, start: formStartField, end: formEndField});
    }
}


