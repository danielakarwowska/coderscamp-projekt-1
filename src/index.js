console.log('test1');

const todoForm = document.querySelector('#to-do-form');

const newTaskInput = document.querySelector('#newTask');

const taskNotes = document.querySelectorAll('#notes');

const taskDate = document.querySelectorAll('#date');

const taskLocation = document.querySelectorAll('#location');


// This is the array that will hold the todo list items
let toDoItems = [];

function renderTodo(todo){
    const todoItemsList = document.querySelectorAll('#to-do-items');
    const item = document.querySelector(`[data-key='${todo.id}']`);
if (todo.deleted){
    item.remove();
    return
}
}

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    addTodo(todoInput.value);
});

function addTodo(item){
    //if item is not empty
    if (item !== ''){
        //make a todo oject
        const todo = {
            title, 
            notes,
            location,
            date,
            checked: false,
            id: Date.now(),
        };
        todoItemsList.push(todo);
    };
};
