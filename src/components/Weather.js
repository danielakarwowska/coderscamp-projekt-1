export class weatherBox {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.setWeatherData();
  }

  addElement() {
    let newDiv = document.createElement('div');
    newDiv.classList.add(`StalaWartosc`);
    newDiv.innerHTML = `${this.data.cityHeader}`;
    this.container.appendChild(newDiv);
    console.log(this.data);
  }

  setWeatherData() {
    for (const [key, value] of Object.entries(this.data)) {
      try {
        key != 'weatherIcon'
          ? (document.getElementById(key).innerHTML = value)
          : (document.getElementById(key).src = value);
      } catch (err) {
        key != 'state' ? console.log('Wrong ID') : false;
      }
    }
  }
}
