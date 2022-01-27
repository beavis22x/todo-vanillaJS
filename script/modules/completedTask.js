export const crossTitle = function selectCompletedTask({e, taskList, setTaskList}) {
    if (e.target?.matches('input[type=checkbox]')) {
        const currentTitle = e.target.closest('article');
        const itemId = Number(currentTitle.getAttribute('id'))

        e.target.setAttribute('disabled', 'disabled')
        currentTitle.querySelector('.title').classList.add('crosstext');
        setTaskList(taskList().map(item =>
            item.id === itemId
                ? {...item, completed: true}
                : item
        ));
    }
}

