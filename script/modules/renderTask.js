import {listItems} from '../app.js';

export const render = ({id, title, start, end, completed}) => {
    const elementItem = document.createElement('div');

    elementItem.classList.add('task-item');
    elementItem.innerHTML = `
            <article class='todos-item' id='${id} '>
                <input type='checkbox'>
                <div class='title ${completed ? 'crosstext' : ''}'>
                    <span>${title}</span>
                </div>
                <div class='start-time'>
                    <span>${start}</span>
                </div>
                <div class='end-time'>
                    <span>${end}</span>
                </div>
                <div class='item-buttons'>
                    <button class='edit-item-btn'>Edit</button>
                    <button class='delete-item-btn'>X</button>
                </div>
            </article>
        `;
        if(completed) {
            const checkbox = elementItem.querySelector('[type=checkbox]');

            checkbox.setAttribute('disabled', 'disabled');
            checkbox.setAttribute('checked', 'checked');
        }

        listItems.append(elementItem);
}
