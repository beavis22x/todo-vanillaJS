export const removeTask = function deleteTask(e) {
    if (e.target?.matches('button.delete-item-btn')) {
        const item = e.target.parentElement.parentElement;
        item.remove()
    }
}