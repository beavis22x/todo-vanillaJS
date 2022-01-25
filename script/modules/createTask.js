import { render } from './renderTask.js';

let taskId = 1;

const formattingTime = (str) => {
    let time = str.slice(0, 10)
    time = `${time.slice(8, 10)}-${time.slice(5, 7)}-${time.slice(0, 4)}`

    return time
}

export const createTaskObj = function addTask({e, formTitle, formEndField, taskList, setTaskList, formStartField, taskListRender, closeModalFunc}) {
    const id = taskId;
    const title = formTitle.value;
    const start = formattingTime(formStartField.value);
    const end = formattingTime(formEndField.value);
    const taskObj = {
        id,
        title,
        start,
        end,
        completed: false,
        editMode:false,
    };

    if(title === '') return closeModalFunc(e)

    setTaskList([...taskList(),taskObj])
    taskId++;
    closeModalFunc(e)
}

