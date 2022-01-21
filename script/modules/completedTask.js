export const crossTitle = function selectCompletedTask(e) {
    if (e.target?.matches('input[type=checkbox]')) {
        const currentTitle = e.target.nextElementSibling;

        e.target.setAttribute('disabled', 'disabled')
        currentTitle.classList.add('crosstext');
    }
}

