// Class: represent task
class Task {
    constructor(title, description, city, date){
        this.title = title;
        this.description = description;
        this.city = city;
        this.date = date;
    }
}

//Store
class Store {
    static getTasks() {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        return tasks;
    }

    static addTask(task) {
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    // TODO
    static removeTask(title) {
        const tasks = Store.getTasks();
    }
}

// UI
class UI {
    static displayTasks () {
        const tasks = Store.getTasks();

        tasks.forEach((task) => UI.addTaskToList(task));
    }

    static addTaskToList(task) {
        const list = document.getElementById('task-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td>${task.city}</td>
        <td>${task.date}</td>
        <td><a href='#' class="btn delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteTask(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    // failed to add task
    static ShowAlert(message) {
        const div = document.createElement('div');
        div.className = 'alert';
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.getElementById('task-form');
        container.insertBefore(div, form);

        //magic
        setTimeout(() => document.querySelector('.alert').remove(), 5000);
    }

    // !failed to add task
    static ShowAlertSuccess(message) {
        const div = document.createElement('div');
        div.className = 'success';
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.getElementById('task-form');
        container.insertBefore(div, form);

        //magic
        setTimeout(() => document.querySelector('.success').remove(), 5000);
    }

    static clearInputs() {
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('city').value = '';
        document.getElementById('date').value = '';
    }
}

// Event dsiplay tasks
UI.displayTasks();




//add a task
document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // get from values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value
    const city = document.getElementById('city').value
    const date = document.getElementById('date').value

    if(title === '' || description === '' || city === '' || date === '') {
        UI.ShowAlert('Please fill in all fields');
    } else {
    // instatiate task
    const task = new Task(title, description, city, date);

    //add task to UI
    UI.addTaskToList(task);
    
    //task added to store
    Store.addTask(task);

    //successfully added task
    UI.ShowAlertSuccess('Task Added');

    //clear inputs
    UI.clearInputs(); 
    }
});

//remove a task
document.getElementById('task-list').addEventListener('click', (e) => {
    //task removed from UI
    UI.deleteTask(e.target);

    //task removed from store TODO
    Store.removeTask();

    //Task removed
    UI.ShowAlertSuccess('Task Removed');
});



/* NOTATKI DLA NIESZCZĘŚNIKA, KTÓRY BĘDZIE MUSIAŁ TO WYSTYLIZOWAĆ
klasa showAlert tworzy nowego diva z klasą 'alert', który trzeba wysylizować
tak samo klasa showAlertSuccess => div z klasą 'success'.
*/