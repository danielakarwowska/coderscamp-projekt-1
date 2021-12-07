import { weatherBox } from '../components/weather';

export class weatherApi {
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
        let Box = new weatherBox(this.gatherWeatherData(response), document.getElementById('weatherContainer'));
        Box.addElement();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static gatherWeatherData(data) {
    const { weather, main, name } = data;
    const result = {
      weatherIcon: 'http://openweathermap.org/img/wn/' + weather[0].icon + '.png',
      weatherDescriptionHeader: weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1),
      temperature: Math.floor(main.temp) + '&#176',
      cityHeader: name,
      state: weather[0].main,
    };
    return result;
  }
}
