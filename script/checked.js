const checkboxes = document.querySelectorAll('input:checked' ),
      todosList = document.querySelectorAll('.todos-item input[checked]');

let DOMContentLoaded;


todosList.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('!!!!!!');
    })
    // console.log(item)
})
setTimeout(()=> {
    console.log(checkboxes);
}, 5000)