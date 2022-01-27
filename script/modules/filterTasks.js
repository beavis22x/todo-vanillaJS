export const filterTasks = function ({e, taskList, setTaskList, renderTaskList}) {
    const TITLE = 'title-header';
    const START = 'start-time-header';
    const END = 'end-time-header';
    const COMPLETED = 'done-header';

    const sortDateFn = (sortName) => {
        setTaskList(taskList().sort((a, b) => {
            let da = new Date(a[sortName]),
                db = new Date(b[sortName]);
            return da - db;
        }));
    };

    if (e.target?.matches('span')) {
        const selectedSelector = e.target.closest('div').className;

        switch (selectedSelector) {
            case TITLE: {
                setTaskList(taskList().sort((a, b) => {
                    const firstObj = (typeof a.title === 'string') ? a.title.replace(/\s+/g, '').toLowerCase() : a.title;
                    const secondObj = (typeof b.title === 'string') ? b.title.replace(/\s+/g, '').toLowerCase() : a.title;

                    return firstObj < secondObj ? -1 : 1;
                }));
                break;
            }
            case START: {
                sortDateFn("start");
                break;
            }
            case END: {
                sortDateFn("end");
                break;
            }
            case COMPLETED: {
                const firstTaskSelected = taskList()[0].completed;
                const completedSortFn = (flag = false) => {
                    const startArr = [...taskList().filter((item) => item.completed === flag)];
                    const endArr = [...taskList().filter((item) => item.completed === !flag)];

                    setTaskList([...startArr,...endArr]);
                }

                if(firstTaskSelected) {
                    completedSortFn();
                } else {
                    completedSortFn(true);
                }
                break;
            }
        }
        renderTaskList();
    }
};


