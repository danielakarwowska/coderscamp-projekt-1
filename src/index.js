import { Theme } from './components/Theme.js';
import { ToDo } from './components/Tasks';
import { weatherApi } from './api/weatherApi';

console.log('test1');

const todoForm = document.querySelector('#to-do-form');

// This is the array that will hold the todo list items
let toDoItems = [];

todoForm.addEventListener('submit', function (event) {
  const formData = Object.fromEntries(new FormData(this).entries());
  let toDo = new ToDo(...Object.values(formData));
  toDo.addTodo(toDoItems);
  event.preventDefault();
});

// remove task
let current_tasks = document.querySelectorAll('.delete');
for (let i = 0; i < toDoItems.length; i++) {
  toDoItems[i].onclick = function () {
    this.parentNode.remove();
  };
}

toggle.addEventListener('click', Theme.themeChange);

document.getElementById('searchBtn').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if (searchTerm) {
    weatherApi.getSearchMethod(searchTerm);
  }
});

console.log('test');
