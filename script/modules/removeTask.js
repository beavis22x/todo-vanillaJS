export const removeTask = ({e, taskList, setTaskList, renderTaskList}) => {
    if (e.target?.matches('button.delete-item-btn')) {
        const item = e.target.closest('article');
        const itemId = Number(item.getAttribute('id'))

        item.remove()
        setTaskList([...taskList().filter(item => item.id !== itemId)])
        renderTaskList();
    }
}