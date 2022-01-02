//import { weatherApi } from '../api/weatherApi';

// Class: represent task
class Task {
    constructor(title, description, city, date, number = Math.random().toString()){
        this.title = title;
        this.description = description;
        this.city = city;
        this.date = date;
        this.number = number;
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
    static removeTask(number) {
        const tasks = Store.getTasks();

         tasks.forEach((task, index) => {
             if(task.number === number) {
                 tasks.splice(index, 1);
             }
         });

         localStorage.setItem('tasks', JSON.stringify(tasks));
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
        <td>${task.city}</td>
        <td>${task.date}</td>
        <td><style = "display : none;">${task.number}</style></td>
        <td><a href='#' class="btn delete">X</a></td>
        <td>
        <div class="description-drop-down">
          <details>
          <summary> Description </summary>
          <p>${task.description}</p>
          <div id='weatherContainer${task.number}'>
              <div id='cityHeader${task.number}'></div>
              <div id='weatherDescriptionHeader${task.number}'></div>
              <div id='temperature${task.number}'></div>
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
            el.closest('tr').nextElementSibling.remove();
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

    //task removed from store 
    Store.removeTask(e.target.parentElement.previousElementSibling.textContent);

    //Task removed
    UI.ShowAlertSuccess('Task Removed');
});


//////////////////// TODO - TU ZMIANA NA ROZWIJANIE ///////////////////
document.querySelectorAll("description-drop-down").forEach(el => {
  el.addEventListener("click", () => {
  // let searchTerm = document.getElementById("city").value;
  // if (searchTerm) { 
  //     weatherApi.getSearchMethod(searchTerm, taskNumber) 
  //   };
  console.log("sprawdzam");
})});



/* NOTATKI DLA NIESZCZĘŚNIKA, KTÓRY BĘDZIE MUSIAŁ TO WYSTYLIZOWAĆ
klasa showAlert tworzy nowego diva z klasą 'alert', który trzeba wysylizować
tak samo klasa showAlertSuccess => div z klasą 'success'.
*/

// SORTING

function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll('tr'));

    // sort row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs 
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Add again the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how it's currently sorted

    table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle('th-sort-asc', asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle('th-sort-desc', !asc);
}

document.querySelectorAll('.table-sortable th').forEach(headerCell => {
    headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAsc = headerCell.classList.contains('th-sort-asc');

        sortTableByColumn(tableElement, headerIndex, !currentIsAsc);
    });
});

//////////////////// tymczasowe weather api

class weatherApi {
    constructor() {}
  
    static getSearchMethod(searchTerm) {
      if (searchTerm.lenght === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
        weatherApi.getCurrentWeather('zip', searchTerm);
      } else {
        weatherApi.getCurrentWeather('q', searchTerm);
      }
    }
  
    static getCurrentWeather(searchMethod, searchTerm, units = 'metric', appId = '2a5cc3af57a0f47a0d85d5a5a7e2f7de') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          let Box = new weatherBox(this.gatherWeatherData(response), document.getElementById('weatherContainer'), taskNumber);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    static gatherWeatherData(data) {
      const { weather, main, name } = data;
      const result = {
        weatherDescriptionHeader: weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1),
        temperature: Math.floor(main.temp) + '&#176',
        cityHeader: name,
        state: weather[0].main,
      };
      return result;
    }
  }

  class weatherBox {
    constructor(data, container, taskNumber) {
      this.data = data;
      this.container = container;
      this.setWeatherData(taskNumber);
    }
  
  
    setWeatherData(taskNumber) {
      for (const [key, value] of Object.entries(this.data)) {
        try {
          key != 'weatherIcon'
            ? (document.getElementById(`${key}${taskNumber}`).innerHTML = value)
            : (document.getElementById(`${key}${taskNumber}`).src = value);
        } catch (err) {
          key != 'state' ? console.log('Wrong ID') : false;
        }
      }
    }
  }