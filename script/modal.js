document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('#modal-open');
    const closeModalBtn = document.querySelector('#modal-close');
    const modalContainer = document.querySelector('.modal-container');
    const listItems = document.querySelector('.todos-list');
    const form = document.querySelector('.modal-form');
    const formTitle = document.querySelector('#form-title');
    const formStartField = document.querySelector('#form-start');
    const formEndField = document.querySelector('#form-end');
    const taskList = [{
        id: 1,
        title: 'Buy milk',
        start: '20-01-2022',
        end: '21-01-2022',
        completed: false
    },{
        id: 2,
        title: 'Buy bread',
        start: '21-01-2022',
        end: '22-01-2022',
        completed: false
    }];
    let taskId = 3;

    const closeModalFunc = (e) => {
        e.preventDefault();
        modalContainer.classList.remove("show")
    }

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

    openModalBtn.addEventListener('click', (e) => {
        modalContainer.classList.add("show");
        formTitle.value = '';
        defaultTime(formStartField);
        defaultTime(formEndField);
    });


    closeModalBtn.addEventListener('click', closeModalFunc)

    form.addEventListener('submit', createTask)

    const defaultTime = function setTime(element) {
        let date = new Date();

        if (element.getAttribute('id') === 'form-end') {
            date = new Date(date.getTime() + 86400000);
        }
        const offset = date.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(date.getTime() - offset);
        const formattedDate = adjustedDate.toISOString().substring(0, 16);
        element.value = formattedDate;
    }


    // createTask()

})

