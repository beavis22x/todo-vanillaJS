export const filterTasks = function ({e, taskList, setTaskList, renderTaskList}) {
    const TITLE = 'title-header';
    const START = 'start-time-header';
    const END = 'end-time-header';

    // const compare = function (property) {
    //     taskList().sort((a, b) => {
    //         return a.property - b.property;
    //     });
    // }

    if (e.target?.matches('span') && !(e.target?.matches('.done-header'))) {

        const selectedSelector = e.target.closest('div').className
        switch (selectedSelector) {
            case TITLE: {
                setTaskList(taskList().sort((a, b) => {
                    let fa = a.title.toLowerCase(),
                        fb = b.title.toLowerCase();

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                }));
                break;
            }
            case START: {
                setTaskList(taskList().sort((a, b) => {
                    let da = new Date(a.start),
                        db = new Date(b.start);
                    return da - db;
                }))
                break;
            }
            case END: {
                setTaskList(taskList().sort((a, b) => {
                    let da = new Date(a.end),
                        db = new Date(b.end);
                    return da - db;
                }))
                break;
            }
        }
        renderTaskList();
    }
}


