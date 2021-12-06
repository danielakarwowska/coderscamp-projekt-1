import { weatherApi } from './api/weatherApi';

document.getElementById('searchBtn').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if (searchTerm) {
    weatherApi.getSearchMethod(searchTerm);
  }
});
