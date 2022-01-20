document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('#modal-open');
    const closeModalBtn = document.querySelector('#modal-close');
    const modalContainer = document.querySelector('.modal-container');
    const listItems = document.querySelector('.todos-list');
    const form = document.querySelector('.modal-form');
    const formStartField = document.querySelector('#form-start');
    const formEndField = document.querySelector('#form-end');

    openModalBtn.addEventListener('click', (e) => {
        modalContainer.classList.add("show");

        setTime(formStartField);
        setTime(formEndField);
    });


    closeModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalContainer.classList.remove("show")
    })

    function setTime(element) {
        let date = new Date();

        if(element.getAttribute('id') === 'form-end') {
            date = new Date(date.getTime() + 86400000);
        }
        const offset = date.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(date.getTime() - offset);
        const formattedDate = adjustedDate.toISOString().substring(0, 16);
        element.value = formattedDate;
    }

})

