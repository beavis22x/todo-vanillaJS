export const filterTasks = ({
                                e,
                                taskList,
                                setTaskList,
                                titleDir,
                                setTitleDir,
                                renderTaskList,
                                startDir,
                                setStartDir,
                                endDir,
                                setEndDir
                            }) => {
    const TITLE = 'title-header';
    const START = 'start-time-header';
    const END = 'end-time-header';
    const COMPLETED = 'done-header';


    const sortDate = (sortName, dir, dirSetter) => {
        setTaskList(taskList().sort((a, b) => {
            let dateLeftObj = new Date(a[sortName]),
                dateRightObj = new Date(b[sortName]);

            if (dir()) {
                return dateRightObj - dateLeftObj;
            } else {
                return dateLeftObj - dateRightObj;
            }
        }));
        dirSetter(!dir());
    };

    const sortTitle = () => {
        setTaskList(taskList().sort((a, b) => {
            const firstObj = (typeof a.title === 'string')
                ? a.title.replace(/\s+/g, '').toLowerCase()
                : a.title;
            const secondObj = (typeof b.title === 'string')
                ? b.title.replace(/\s+/g, '').toLowerCase()
                : a.title;

            if (titleDir()) {
                return firstObj > secondObj ? -1 : 1;
            } else {
                return firstObj < secondObj ? -1 : 1;
            }
        }));
        setTitleDir(!titleDir());
    };

    const sortCompleted = () => {
        const firstTaskSelected = taskList()[0].completed;
        const startArr = [];
        const endArr = [];

        taskList().map(item => {
            item.completed
                ? startArr.push(item)
                : endArr.push(item);
        });

        firstTaskSelected
            ? setTaskList([...startArr, ...endArr].reverse())
            : setTaskList([...startArr, ...endArr]);
    };

    if (e.target?.matches('span')) {
        const selectedSelector = e.target.closest('div').className;

        switch (selectedSelector) {
            case TITLE: {
                sortTitle();
                break;
            }
            case START: {
                sortDate("start", startDir, setStartDir);
                break;
            }
            case END: {
                sortDate("end", endDir, setEndDir);
                break;
            }
            case COMPLETED: {
                sortCompleted();
                break;
            }
        }
        renderTaskList();
    }
};


