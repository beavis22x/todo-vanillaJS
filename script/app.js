import { createTaskObj } from './modules/createTask.js';
import { defaultTime } from './modules/setTime.js';
import { crossTitle } from './modules/completedTask.js';
import { removeTask } from './modules/removeTask.js';
import { editTask } from './modules/editTask.js';

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
// const taskList = [];
let editMode = false;

export const closeModalFunc = (e) => {
    e.preventDefault();
    modalContainer.classList.remove("show")
    formTitle.value = ''
}

let start = defaultTime(formStartField)
let end = defaultTime(formEndField)
let title = ''


const openModalFunc = ({e, title, start , end, editMode}) => {
    console.log( e.target.matches('button.edit-item-btn'))

    // if(e.target.matches('button.edit-item-btn')) {
    //     editMode = true;
    //     title = formTitle.value;
    //     start = formStartField.value;
    //     end = formEndField.value
    //     modalContainer.classList.add("show");
    //     console.log( title, start, end)
    //
    // }

    console.log(title, start, end)
        formTitle.value  = title;
        formStartField.value = start;
        formEndField.value =  end;
        modalContainer.classList.add("show");
}


const editModalFunc = ({e, title, start , end, editMode}) => {
    console.log( e.target.matches('button.edit-item-btn'))

    // if(e.target.matches('button.edit-item-btn')) {
    //     editMode = true;
    //     title = formTitle.value;
    //     start = formStartField.value;
    //     end = formEndField.value
    //     modalContainer.classList.add("show");
    //     console.log( title, start, end)
    //
    // }

    console.log(title, start, end)
    formTitle.value  = title;
    formStartField.value = start;
    formEndField.value =  end;
    modalContainer.classList.add("show");
}

export const app = function app() {
    document.addEventListener('DOMContentLoaded', (e) => {

        openModalBtn.addEventListener('click', (e) => openModalFunc({ e, title, start, end, editMode}));

        taskListContainer.addEventListener('click', removeTask)
        taskListContainer.addEventListener('click', (e) => editTask({e, openModalFunc}))
        taskListContainer.addEventListener('click', crossTitle);
        closeModalBtn.addEventListener('click', closeModalFunc)
        form.addEventListener('submit', (e) => {
            createTaskObj({e, formTitle, formEndField, editMode, formStartField, closeModalFunc})
        })

    })
}


