const checkboxWrapper = document.querySelector('.todos-list');

checkboxWrapper.addEventListener('click', (e) => {
    //wait click event in any checkbox
    if(e.target && e.target.matches('input[type=checkbox]')) {
        e.target.setAttribute('disabled', 'disabled')
        const currentTitle = e.target.nextElementSibling; // the title of the corresponding checkbox
        currentTitle.classList.add('crosstext');
    }
})