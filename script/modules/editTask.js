export const editTask = ({e, EDIT_ATTRIBUTE, modalContainer, openModal}) => {
    if (e.target?.matches('button.edit-item-btn')) {
        const currentItem = e.target.closest('article');
        const editId = Number(currentItem.getAttribute('id'));
        const formTitle = currentItem.querySelector('.title span').textContent;
        const formStartField = currentItem.querySelector('.start-time span').textContent;
        const formEndField = currentItem.querySelector('.end-time span').textContent;

        modalContainer.setAttribute(EDIT_ATTRIBUTE, editId);
        openModal({e, title: formTitle, start: formStartField, end: formEndField});
    }
}


