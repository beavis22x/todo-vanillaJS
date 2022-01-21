import {render} from './renderTask.js';

const formattingTime = (str) => {
    let time = str.slice(0, 10)
    time = `${time.slice(8, 10)}-${time.slice(5, 7)}-${time.slice(0, 4)}`
    return time
}

let taskId = 3;

export const createTaskObj = function addTask(e, taskList, formTitle, formEndField, formStartField, closeModalFunc) {
    const id = taskId;
    const title = formTitle.value;
    const start = formattingTime(formStartField.value);
    const end = formattingTime(formEndField.value);
    const taskObj = {
        id,
        title,
        start,
        end,
        completed: false
    };

    taskList.push(taskObj);
    taskId++;

    render(id, title, start, end);

    closeModalFunc(e)
}

