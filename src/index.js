//import { ToDo } from "./components/Tasks";
//import { weatherApi } from './api/weatherApi';


console.log('test1');

const todoForm = document.querySelector('#to-do-form');


// This is the array that will hold the todo list items
let toDoItems = [];



/* 
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

document.getElementById('searchBtn').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if (searchTerm) {
    weatherApi.getSearchMethod(searchTerm);
  }
});


*/



function register () {
  const login = document.getElementById('login');
  const mail = document.getElementById('mail');
  const password = document.getElementById('password');
  localStorage.setItem ("login", login.value );
  localStorage.setItem ("password", password.value);
  localStorage.setItem ("mail", mail.value);
};


function login () {
  const loginToApp = document.getElementById('login-in-login');
  const passwordToApp = document.getElementById('password-in-login');

  

}