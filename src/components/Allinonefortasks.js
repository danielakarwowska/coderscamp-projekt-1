import WeatherApi from '../api/WeatherApi.js';
import Task from '../components/Task.js';
import Store from '../components/Store.js';
import UI from '../components/UI.js';
import { PlacesApi } from '../api/PlacesApi.js';


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
Array.from(document.getElementsByClassName('delete')).forEach(e => {
  e.addEventListener('click', (e) => {
    //task removed from UI
    UI.deleteTask(e.target);
    //task removed from store 
    Store.removeTask(e.target.parentElement.previousElementSibling.textContent);

    //Task removed
    UI.ShowAlertSuccess('Task Removed');
})});

// displaying description places
Array.from(document.getElementsByClassName("description-drop-down")).forEach(el => {
  el.addEventListener("click", () => {
    const taskNumber = el.id.split('-')[1];
    let searchTerm = document.getElementById(`${taskNumber}`).innerText;
   if (searchTerm) { 
      WeatherApi.getSearchMethod(searchTerm, taskNumber) 
     };
})});

Array.from(document.getElementsByClassName("description-drop-down")).forEach(el => {
    el.addEventListener("click", () => {
      const taskNumber = el.id.split('-')[1];
      let searchTerm = document.getElementById('placesContainer').innerText;
     if (searchTerm) { 
         PlacesApi.getCurrentRestaurant(searchTerm, taskNumber)
         PlacesApi.getCurrentMuseum(searchTerm, taskNumber)
         PlacesApi.getCurrentPark(searchTerm, taskNumber)   
    };
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

