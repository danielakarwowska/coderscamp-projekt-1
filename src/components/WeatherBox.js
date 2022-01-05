export default class WeatherBox {
  constructor(data, taskNumber) {
    this.data = data;
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
