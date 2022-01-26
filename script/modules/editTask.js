export const editTask = function editItem({e, modalContainer, openModalFunc}) {
    if (e.target?.matches('button.edit-item-btn')) {
        const currentItem = e.target.closest('article');
        const editId = Number(currentItem.getAttribute('id'));
        const formTitle = currentItem.children[1].lastElementChild.innerHTML;
        const formStartField = currentItem.children[2].lastElementChild.innerHTML;
        const formEndField = currentItem.children[3].lastElementChild.innerHTML;

        modalContainer.setAttribute('data-edit', editId);
        openModalFunc({e, title: formTitle, start: formStartField, end: formEndField})
    }
}


