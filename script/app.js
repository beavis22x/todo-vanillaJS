import { createTaskObj } from './modules/createTask.js';
import { defaultTime } from './modules/setTime.js';
import { crossTitle } from './modules/completedTask.js';
import { removeTask } from './modules/removeTask.js';
import { editTask } from './modules/editTask.js';
import {render} from './modules/renderTask.js';

export const listItems = document.querySelector('.todos-list');
const formTitle = document.querySelector('#form-title');
const formStartField = document.querySelector('#form-start');
const formEndField = document.querySelector('#form-end');
const openModalBtn = document.querySelector('#modal-open');
const closeModalBtn = document.querySelector('#modal-close');
const modalContainer = document.querySelector('.modal-container');
const taskListContainer = document.querySelector('.todos-list');
const taskListHeader = document.querySelector('article.todos-header');
const form = document.querySelector('.modal-form');

const useState = (defaultValue) => {
    let value = defaultValue;
    const getValue = () => value
    const setValue = newValue => value = newValue

    return [getValue, setValue];
}

const [taskList, setTaskList] = useState([]);

const openModalFunc = ({e, title = '', start = defaultTime(formStartField), end = defaultTime(formEndField)}) => {
    modalContainer.classList.add("show");
    formTitle.value = title;
    formStartField.value = start;
    formEndField.value =  end;
}

const closeModalFunc = (e) => {
    e.preventDefault();
    modalContainer.classList.remove("show")
}

const renderTaskList = () => {
    while (listItems.children.length > 1) {
        listItems.removeChild(listItems.lastChild);
    }
    taskList().map(item => {
        render(item);
    })
}

export const app = function app() {
    document.addEventListener('DOMContentLoaded', (e) => {

        openModalBtn.addEventListener('click', (e) => openModalFunc({e}));


        taskListContainer.addEventListener('click', (e) => editTask({e, taskList, setTaskList, renderTaskList}))
        taskListContainer.addEventListener('click', (e) => removeTask({e, taskList, setTaskList, renderTaskList}))
        taskListContainer.addEventListener('click', crossTitle);
        closeModalBtn.addEventListener('click', closeModalFunc)
        form.addEventListener('submit', (e) => {
            createTaskObj({e, formTitle, formEndField, formStartField, taskList, setTaskList, closeModalFunc})
            renderTaskList()
        })

    })
}

