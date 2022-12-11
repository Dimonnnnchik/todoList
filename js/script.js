let checked = document.querySelectorAll('.todo');
let toDoText = document.querySelectorAll('.todo-text');
let todoslist = document.querySelector('.todolist');
let searchInput = document.getElementById('search');


const filterList = (searchValue) => {
    let lists = todoslist.querySelectorAll('li');
    lists.forEach(list => {
        let listText = list.innerText.toLowerCase();
        if (listText.indexOf(searchValue) != -1) {
            list.classList.remove('filtered');
        } else {
            list.classList.add('filtered');
            let filteredList = todoslist.querySelectorAll('.filtered')
        }
    })
}
searchInput.addEventListener('keyup', e => {
    let searchText = e.target.value.trim().toLowerCase();
    filterList(searchText);
})


checked.forEach((element) => {
    element.addEventListener('click', lineThrough)
})



function lineThrough() {
    for (let i = 0; i < checked.length; i++) {
        if (!checked[i].checked) {
            toDoText[i].style.textDecoration = '';



        } else {
            toDoText[i].style.textDecoration = 'line-through';

        }
    }

}