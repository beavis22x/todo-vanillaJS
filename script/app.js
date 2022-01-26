import { createTaskObj } from './modules/createTask.js';
import { defaultTime } from './modules/setTime.js';
import { crossTitle } from './modules/completedTask.js';
import { removeTask } from './modules/removeTask.js';
import { editTask } from './modules/editTask.js';
import { render } from './modules/renderTask.js';
import {render} from './modules/renderTask.js';

export const listItems = document.querySelector('.todos-list');
const formTitle = document.querySelector('#form-title');
const formStartField = document.querySelector('#form-start');
const formEndField = document.querySelector('#form-end');
const openModalBtn = document.querySelector('#modal-open');
const closeModalBtn = document.querySelector('#modal-close');
const modalContainer = document.querySelector('.modal-container');
const taskListContainer = document.querySelector('.todos-list');
const form = document.querySelector('.modal-form');

const useState = (defaultValue) => {
    let value = defaultValue;
    const getValue = () => value
    const setValue = newValue => value = newValue

    return [getValue, setValue];
}

const [taskList, setTaskList] = useState([]);

const openModalFunc = ({e, title = '', start = defaultTime(formStartField), end = defaultTime(formEndField)}) => {
    formTitle.value = title;
    formStartField.value = start;
    formEndField.value =  end;
    modalContainer.classList.add("show");
}

const closeModalFunc = (e) => {
    e.preventDefault();
    modalContainer.classList.remove("show")
    modalContainer.removeAttribute('data-edit')
}

const renderTaskList = () => {
    while (listItems.children.length > 1) {
        listItems.removeChild(listItems.lastChild);
    }
    console.log(taskList())
    taskList().map(item => {
        render(item);
    })
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

        openModalBtn.addEventListener('click', openModalFunc);
        taskListContainer.addEventListener('click', (e) => editTask({e, taskList, setTaskList, modalContainer, renderTaskList, openModalFunc}));
        taskListContainer.addEventListener('click', (e) => removeTask({e, taskList, setTaskList, renderTaskList}));
        taskListContainer.addEventListener('click', crossTitle);
        closeModalBtn.addEventListener('click', closeModalFunc);
        form.addEventListener('submit', (e) => {
            const modalEditAttr = modalContainer.getAttribute('data-edit')

            if(modalEditAttr) {
                const id = Number(modalEditAttr);
                const title = formTitle.value;
                const start = formStartField.value;
                const end = formEndField.value;

                setTaskList(taskList().map(item => {
                    if (item.id === id) {
                        return {...item, id, title, start, end}
                    }
                    return item;
                }))
                renderTaskList();
                closeModalFunc(e)
            } else {
                createTaskObj({e, formTitle, formEndField, formStartField, taskList, setTaskList, closeModalFunc})
                renderTaskList()
            }
        })

    })
}

