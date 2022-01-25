import {listItems} from '../app.js';

export const render = function renderTask({e, id, title, start, end, addSelector, edit}) {
    const elementItem = document.createElement('div');
    elementItem.classList.add('task-item');

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
                <div class='item-buttons'>
                    <button class='edit-item-btn'>Edit</button>
                    <button class='delete-item-btn'>X</button>
                </div>
            </article>
        `;

    // if(edit) {
    //     addSelector.parentNode.after(elementItem) //addSelector.nextSibling.insertAdjacentHTML('beforebegin', elementItem)
    //                                     // addSelector.parentNode.remove()
    //     addSelector.parentNode.remove()
    //     console.log(addSelector.parentNode)
    //     console.log(addSelector)
    // } else {
        listItems.append(elementItem);
    // }
}
