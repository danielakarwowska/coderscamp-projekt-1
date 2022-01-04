import WeatherBox from '../components/WeatherBox.js';

export default class WeatherApi {
  constructor() {}

  static getSearchMethod(searchTerm, taskNumber) {
    if (searchTerm.lenght === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
      WeatherApi.getCurrentWeather('zip', searchTerm, taskNumber);
    } else {
      WeatherApi.getCurrentWeather('q', searchTerm, taskNumber);
    }
  }

  static getCurrentWeather(searchMethod, searchTerm, taskNumber) {
    const units = 'metric';
    const appId = '2a5cc3af57a0f47a0d85d5a5a7e2f7de';
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        new WeatherBox(this.gatherWeatherData(response), taskNumber);
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
