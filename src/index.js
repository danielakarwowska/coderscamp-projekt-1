import { ToDo } from "./components/Tasks";

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



// remove task
let current_tasks = document.querySelectorAll(".delete");
  for(let i=0; i<toDoItems.length; i++){
       toDoItems[i].onclick = function(){
        this.parentNode.remove();
  };
};