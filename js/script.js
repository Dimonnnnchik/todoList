
let checked = document.getElementById('todo');
let toDoText = document.querySelector('#todo-text');

checked.addEventListener('click', lineThrough)


function lineThrough() {
    if (!checked.checked) {
        toDoText.style.textDecoration = '';


    } else {
        toDoText.style.textDecoration = 'line-through';

    }
}