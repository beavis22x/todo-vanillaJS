import {render} from './renderTask.js';
import {createTaskObj} from './createTask.js';
// import {closeModalFunc} from '../app.js';
//
export const editTask = function editItem({e, taskList, setTaskList, renderTaskList, openModalFunc}) {
    if (e.target?.matches('button.edit-item-btn')) {
//         const editMode = true;
        const currentItem = e.target.parentElement.parentElement;
        const editId = Number(currentItem.getAttribute('id'));
        let formTitle = currentItem.children[1].lastElementChild.innerHTML;
        let formStartField = currentItem.children[2].lastElementChild.innerHTML;
        let formEndField = currentItem.children[3].lastElementChild.innerHTML;

        openModalFunc({e, title:formTitle, start:formStartField, end: formEndField})
//
        setTaskList(taskList().map ((item) => {
            if (item.id === editId) {
                return {...taskList(), id: editId, title: formTitle, start:formStartField, end:formEndField}
            }
            return taskList();
        }))
//         console.log(editId)
//         openModalFunc({e, title:formTitle, start:formStartField, end: formEndField, editMode})
//         // render({e, editId, editTitleForm, editStartForm, editEndForm, selector})
//         // createTaskObj({e, formTitle, formStartField, formEndField, selector, editMode, closeModalFunc})
//         // console.log(currentItem.outerHTML)
//
    }
}