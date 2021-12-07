import { Theme } from './components/Theme.js';
import { weatherApi } from './api/weatherApi';

toggle.addEventListener('click', Theme.themeChange);

document.getElementById('searchBtn').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if (searchTerm) {
    weatherApi.getSearchMethod(searchTerm);
  }
});
