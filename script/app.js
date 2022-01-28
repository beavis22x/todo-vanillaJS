import {createTaskObj} from './modules/createTask.js';
import {defaultTime} from './modules/setTime.js';
import {crossTitle} from './modules/completedTask.js';
import {removeTask} from './modules/removeTask.js';
import {editTask} from './modules/editTask.js';
import {render} from './modules/renderTask.js';
import {filterTasks} from './modules/filterTasks.js';

export const listItems = document.querySelector('.todos-list');
const formTitle = document.querySelector('#form-title');
const formStartField = document.querySelector('#form-start');
const formEndField = document.querySelector('#form-end');
const openModalBtn = document.querySelector('#modal-open');
const closeModalBtn = document.querySelector('#modal-close');
const modalContainer = document.querySelector('.modal-container');
const taskListContainer = document.querySelector('.todos-list');
const taskHeaderContainer = document.querySelector('.todos-header');
const form = document.querySelector('.modal-form');
const SHOW_CLASS = 'show';
const EDIT_ATTRIBUTE = 'data-edit';

const useState = (defaultValue) => {
    let value = defaultValue;
    const getValue = () => value;
    const setValue = newValue => value = newValue;

    return [getValue, setValue];
};

const [taskList, setTaskList] = useState([]);
const [titleDir, setTitleDir] = useState(true);
const [startDir, setStartDir] = useState(true);
const [endDir, setEndDir] = useState(true);

const openModal = ({title = '', start = defaultTime(formStartField), end = defaultTime(formEndField)}) => {
    formTitle.value = title;
    formStartField.value = start;
    formEndField.value = end;
    modalContainer.classList.add(SHOW_CLASS);
};

const closeModal = (e) => {
    e.preventDefault();
    modalContainer.classList.remove(SHOW_CLASS);
    modalContainer.removeAttribute(EDIT_ATTRIBUTE);
};

const renderTaskList = () => {
    while (listItems?.children.length > 1) {
        listItems.removeChild(listItems.lastChild);
    }
    taskList().map(render);
};

export const app = function app() {
    document.addEventListener('DOMContentLoaded', () => {

        taskHeaderContainer.addEventListener('click', (e) => filterTasks({
            e,
            taskList,
            setTaskList,
            titleDir,
            setTitleDir,
            startDir,
            setStartDir,
            endDir,
            setEndDir,
            useState,
            renderTaskList
        }));

        taskListContainer.addEventListener('click', (e) => editTask({
            e,
            EDIT_ATTRIBUTE,
            modalContainer,
            openModal
        }));

        taskListContainer.addEventListener('click', (e) => removeTask({
            e,
            taskList,
            setTaskList,
            renderTaskList
        }));

        taskListContainer.addEventListener('click', (e) => crossTitle({e, taskList, setTaskList}));
        openModalBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        form.addEventListener('submit', (e) => {
            const modalEditAttr = modalContainer.getAttribute(EDIT_ATTRIBUTE);

            if (modalEditAttr) {
                const id = Number(modalEditAttr);
                const title = formTitle.value;
                const start = formStartField.value;
                const end = formEndField.value;

                setTaskList(taskList().map(item =>
                    item.id === id
                        ? {...item, id, title, start, end}
                        : item
                ));
                renderTaskList();
                closeModal(e);
            } else {
                createTaskObj({
                    e,
                    formTitle,
                    formEndField,
                    formStartField,
                    taskList,
                    setTaskList,
                    closeModal
                });
                renderTaskList();
            }
        });
    });
};

