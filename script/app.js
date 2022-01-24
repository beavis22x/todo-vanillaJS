import { createTaskObj } from './modules/createTask.js';
import { defaultTime } from './modules/setTime.js';
import { crossTitle } from './modules/completedTask.js';
import { removeTask } from './modules/removeTask.js';

export const listItems = document.querySelector('.todos-list');
const deleteBtn = document.querySelector('.delete-item-btn');
const formTitle = document.querySelector('#form-title');
const formStartField = document.querySelector('#form-start');
const formEndField = document.querySelector('#form-end');
const openModalBtn = document.querySelector('#modal-open');
const closeModalBtn = document.querySelector('#modal-close');
const modalContainer = document.querySelector('.modal-container');
const taskListContainer = document.querySelector('.todos-list');
const taskListHeader = document.querySelector('article.todos-header');
const form = document.querySelector('.modal-form');
const taskList = [];

const closeModalFunc = (e) => {
    e.preventDefault();
    modalContainer.classList.remove("show")
}

export const app = function app() {
    document.addEventListener('DOMContentLoaded', (e) => {

        openModalBtn.addEventListener('click', (e) => {
            modalContainer.classList.add("show");
            formTitle.value = '';
            formStartField.value = defaultTime(formStartField);
            formEndField.value =  defaultTime(formEndField);
        });

        taskListContainer.addEventListener('click', (e) => removeTask(e))
        taskListContainer.addEventListener('click', crossTitle);
        closeModalBtn.addEventListener('click', closeModalFunc)
        form.addEventListener('submit', (e) => {
            createTaskObj({e, formTitle, formEndField, formStartField, taskList, closeModalFunc})
        })

    })
}


