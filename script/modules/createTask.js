let taskId = 1;

export const createTaskObj = ({
                                  e,
                                  setTaskList,
                                  taskList,
                                  closeModal,
                                  formTitle: {value: title},
                                  formStartField: {value: start},
                                  formEndField: {value: end},
                              }
) => {
    const taskObj = {
        id: taskId,
        title,
        start,
        end,
        completed: false,
        editMode: false,
    };

    if (title === '') return alert('Fill title');

    setTaskList([...taskList(), taskObj]);
    taskId++;
    closeModal(e);
}


