import { render } from './renderTask.js';
import { listItems } from '../app.js';

let taskId = 1;

// const formattingTime = (str) => {
//     let time = str.slice(0, 10)
//     time = `${time.slice(8, 10)}-${time.slice(5, 7)}-${time.slice(0, 4)}`
//
//     return time
// }

export const createTaskObj = function addTask({e, formTitle, formEndField, formStartField, closeModalFunc, editMode, selector}) {
    let addSelector = listItems;
    const id = taskId;
    const edit = editMode;
    const title = formTitle.value;
    const start = formStartField.value      // formattingTime(formStartField.value);
    const end = formEndField.value //formattingTime(formEndField.value);
    const taskObj = {
        id,
        title,
        start,
        end,
        completed: false,
        edit,
    };

    if(edit) {
        addSelector = selector
        render({e, id, title, start, end, addSelector, edit});
    } else {
    }
    // taskList.push(taskObj)
    taskId++;
    render({e, id, title, start, end, addSelector, edit});
    closeModalFunc(e)

}

