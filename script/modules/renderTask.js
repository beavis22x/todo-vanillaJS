import { listItems } from '../app.js';

export const render = function renderTask({id, title, start, end}) {
    const elementItem = document.createElement('div')

    elementItem.innerHTML = `
            <article class='todos-item' id='${id}'>
                <input type='checkbox'>
                <div class='title'>
                    <span>${title}</span>
                </div>
                <div class='start-time'>
                    <span>${start}</span>
                </div>
                <div class='end-time'>
                    <span>${end}</span>
                </div>
            </article>
        `;
    listItems.append(elementItem)
}
