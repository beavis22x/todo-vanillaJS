export const removeTask = function deleteTask({e, taskList, setTaskList}) {
    if (e.target?.matches('button.delete-item-btn')) {
        const item = e.target.parentElement.parentElement;
        const itemId = Number(item.getAttribute('id'))
        const index = taskList().findIndex(elem => elem.id === itemId);

        item.remove()
        setTaskList([...taskList().filter(item => item.id !== index)]);
    }
}