console.log('test1');

const todoForm = document.querySelector('#to-do-form');

const newTaskInput = document.querySelector('#newTask');

const taskNotes = document.querySelectorAll('#notes');

const taskDate = document.querySelectorAll('#date');

const taskLocation = document.querySelectorAll('#location');


// This is the array that will hold the todo list items
let toDoItems = [];



todoForm.addEventListener('submit', function(event){
    const formData =Object.fromEntries( new FormData(this).entries());
    let ToDo = new ToDo(...Object.values(formData))
    toDo.addTodo(lista)
    event.preventDefault();
});

class ToDo {
    constructor(title, notes, locationa, date = Date.now(), checked =false){
        this.title =title,
        this.notes =notes,
        this.location =location,
        this.date = date,
        this.checked = checked
    }
    addTodo(list){
        list.push(this.ToDo)
    }


renderTodo(todo){
    const item = document.querySelector([data-key='${todo.id}']);
if (todo.deleted){
    item.remove();
    return
}
}
}