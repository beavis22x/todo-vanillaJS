const checkboxWrapper = document.querySelector('.todos-list');

checkboxWrapper.addEventListener('click', (e) => {
    const currentTitle = e.target.nextElementSibling;

    if(e.target?.matches('input[type=checkbox]')) {
        e.target.setAttribute('disabled', 'disabled')
        currentTitle.classList.add('crosstext');
    }
})