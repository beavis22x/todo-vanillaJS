export const crossTitle = function selectCompletedTask(e) {
    if (e.target && e.target.matches('input[type=checkbox]')) {
        e.target.setAttribute('disabled', 'disabled')
        const currentTitle = e.target.nextElementSibling;
        currentTitle.classList.add('crosstext');
    }
}

