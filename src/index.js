console.log('test1');

const todoForm = document.querySelector('#to-do-form');


// This is the array that will hold the todo list items
let toDoItems = [];



todoForm.addEventListener('submit', function(event){
    const formData =Object.fromEntries( new FormData(this).entries());
    let toDo = new ToDo(...Object.values(formData))
    toDo.addTodo(toDoItems)
    event.preventDefault();
});

class ToDo {
    constructor(title, notes, location, date = Date.now(), checked =false){
        this.title =title,
        this.notes =notes,
        this.location =location,
        this.date = date,
        this.checked = checked
    }
    addTodo(list){
        list.push(this)
    }


renderTodo(todo){
    const item = document.querySelector('[data-key=${todo.id}]');
if (todo.deleted){
    item.remove();
    return
}
}
}