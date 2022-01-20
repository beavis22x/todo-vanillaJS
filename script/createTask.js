import {closeModalFunc, taskList, listItems, formTitle} from './app.js';
import {formEndField, formStartField} from './app.js';

let taskId = 3;

const formattingTime = (str) => {
    let time = str.substring(0, 10)
    time = `${time.substring(8, 10)}-${time.substring(5, 7)}-${time.substring(0, 4)}`
    return time
}

const createTask = function addTask(e) {
    const taskObj = {
        id: taskId,
        title: '',
        start: '',
        end: '',
        completed: false
    };

    const elementItem = document.createElement('div')

    taskObj.title = formTitle.value;
    taskObj.start = formattingTime(formStartField.value);
    taskObj.end = formattingTime(formEndField.value);

    taskId++;

    taskList.push(taskObj);

    elementItem.innerHTML = `
            <article class='todos-item' id='${taskObj.id}'>
                <input type='checkbox'>
                <div class='title'>
                    <span>${taskObj.title}</span>
                </div>
                <div class='start-time'>
                    <span>${taskObj.start}</span>
                </div>
                <div class='end-time'>
                    <span>${taskObj.end}</span>
                </div>
            </article>
        `;
    listItems.append(elementItem)
    closeModalFunc(e)
}

export default createTask;