const openModalBtn = document.querySelector('#modal-open');
const closeModalBtn = document.querySelector('#modal-close');
const modalContainer = document.querySelector('.modal-container');

openModalBtn.addEventListener('click', (e) => {
    modalContainer.classList.add("show")
    console.log(openModalBtn)

})

closeModalBtn.addEventListener('click', (e) => {
    modalContainer.classList.remove("show")
})