import createTask from './createTask.js';
import defaultTime from './setTime.js';

const openModalBtn = document.querySelector('#modal-open');
const closeModalBtn = document.querySelector('#modal-close');
const modalContainer = document.querySelector('.modal-container');
export const listItems = document.querySelector('.todos-list');
const form = document.querySelector('.modal-form');
export const formTitle = document.querySelector('#form-title');
export const formStartField = document.querySelector('#form-start');
export const formEndField = document.querySelector('#form-end');
export const taskList = [
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

export const closeModalFunc = (e) => {
    e.preventDefault();
    modalContainer.classList.remove("show")
}

document.addEventListener('DOMContentLoaded', (e) => {

    openModalBtn.addEventListener('click', (e) => {
        modalContainer.classList.add("show");
        formTitle.value = '';
        defaultTime(formStartField);
        defaultTime(formEndField);
    });

    closeModalBtn.addEventListener('click', closeModalFunc)

    form.addEventListener('submit', createTask)

})

