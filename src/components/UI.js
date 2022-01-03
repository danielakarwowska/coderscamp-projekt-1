import Store from '../components/Store.js';

export default class UI {
    static displayTasks () {
        const tasks = Store.getTasks();

        tasks.forEach((task) => UI.addTaskToList(task));
    }

    static addTaskToList(task) {
        const list = document.getElementById('task-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${task.title}</td>
        <td id='city-${task.number}'>${task.city}</td>
        <td>${task.date}</td>
        <td><style = "display : none;">${task.number}</style></td>
        <td><a href='#' class="btn delete">X</a></td>
        <td>
        <div class="description-drop-down" id='dd-${task.number}'>
          <details>
          <summary> Description </summary>
          <p>${task.description}</p>
          <div id='weatherContainer${task.number}'>
              <div id='cityHeader${task.number}'></div>
              <div id='weatherDescriptionHeader${task.number}'></div>
              <div id='temperature${task.number}'></div>
          </div>
          <div id='restaurantContainer${task.number}'>
            <div id='nameRestaurant${task.number}'></div>
            <div id='addressRestaurant${task.number}'></div>
          </div>
          <div id='museumContainer${task.number}'>
            <div id='nameMuseum${task.number}'></div>
            <div id='addressMuseum${task.number}'></div>
          </div>
          <div id='parkContainer${task.number}'>
            <div id='namePark${task.number}'></div>
            <div id='addressPark${task.number}'></div>
          </div>
          </details>
        </div>
        </td>
        `;
        // const column = document.createElement('tr');
        // column.innerHTML = `
        // <td id='description${task.number} class="description-drop-down"'>
        // <details>
        // <summary> Description </summary>
        // <p>${task.description}</p>
        // <div id='weatherContainer${task.number}'>
        //     <div id='cityHeader${task.number}'></div>
        //     <div id='weatherDescriptionHeader${task.number}'></div>
        //     <div id='temperature${task.number}'></div>
        // </div>
        // </details>
        // </td>
        //  `;

        list.appendChild(row);
        //list.appendChild(column);
    }

    static deleteTask(el) {
        if(el.classList.contains('delete')) {
            //el.closest('tr').nextElementSibling.remove();
            el.closest('tr').remove();

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