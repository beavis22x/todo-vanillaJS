let taskId = 1;

export const createTaskObj = function addTask({e, formTitle, formEndField, taskList, setTaskList, formStartField, closeModalFunc}) {
    const {
        formTitle: {value: title},
        formStartField: {value: start},
        formEndField: {value: end}
    } = {formTitle, formStartField, formEndField}

    const taskObj = {
        id: taskId,
        title,
        start,
        end,
        completed: false,
        editMode:false,
    };

    if(title === '') return closeModalFunc(e)

    setTaskList([...taskList(),taskObj])
    taskId++;
    closeModalFunc(e)
}


