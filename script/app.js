import { createTaskObj } from './modules/createTask.js';
import { defaultTime } from './modules/setTime.js';
import { crossTitle } from './modules/completedTask.js';

export const listItems = document.querySelector('.todos-list');
const formTitle = document.querySelector('#form-title');
const formStartField = document.querySelector('#form-start');
const formEndField = document.querySelector('#form-end');
const openModalBtn = document.querySelector('#modal-open');
const closeModalBtn = document.querySelector('#modal-close');
const modalContainer = document.querySelector('.modal-container');
const checkboxWrapper = document.querySelector('.todos-list');
const form = document.querySelector('.modal-form');
const taskList = [
    {
        id: 1,
        title: 'Buy milk',
        start: '20-01-2022',
        end: '21-01-2022',
        completed: false
    },
    {
        id: 2,
        title: 'Buy bread',
        start: '21-01-2022',
        end: '22-01-2022',
        completed: false
    }];

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

        checkboxWrapper.addEventListener('click', crossTitle);
        closeModalBtn.addEventListener('click', closeModalFunc)
        form.addEventListener('submit', (e) => {
            createTaskObj({e, taskList, formTitle, formEndField, formStartField, closeModalFunc})
        })

    })
}


