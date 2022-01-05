import PlacesBox from '../components/PlacesBox.js';
import API_KEY from '../apikey.js';
export default class PlacesAPI {
  constructor(city) {
    this.lat;
    this.lng;
    this.attachLatLng(city);
  }

  attachLatLng(city) {
    switch (city) {
      case 'Białystok':
        this.lat = 53.13;
        this.lng = 23.17;
        break;
      case 'Bydgoszcz':
        this.lat = 53.07;
        this.lng = 18.0;
        break;
      case 'Gorzów Wielkopolski':
        this.lat = 52.73;
        this.lng = 15.24;
        break;
      case 'Katowice':
        this.lat = 50.26;
        this.lng = 19.02;
        break;
      case 'Kielce':
        this.lat = 50.87;
        this.lng = 20.64;
        break;
      case 'Kraków':
        this.lat = 50.06;
        this.lng = 19.95;
        break;
      case 'Lublin':
        this.lat = 51.25;
        this.lng = 22.57;
        break;
      case 'Łódź':
        this.lat = 51.76;
        this.lng = 19.46;
        break;
      case 'Olsztyn':
        this.lat = 53.78;
        this.lng = 20.48;
        break;
      case 'Opole':
        this.lat = 50.67;
        this.lng = 17.92;
        break;
      case 'Poznań':
        this.lat = 52.41;
        this.lng = 16.93;
        break;
      case 'Rzeszów':
        this.lat = 50.02;
        this.lng = 22.0;
        break;
      case 'Szczecin':
        this.lat = 53.25;
        this.lng = 14.32;
        break;
      case 'Toruń':
        this.lat = 53.01;
        this.lng = 18.59;
        break;
      case 'Warszawa':
        this.lat = 52.35;
        this.lng = 21.05;
        break;
      case 'Wrocław':
        this.lat = 51.05;
        this.lng = 17.0;
        break;
      case 'Zielona Góra':
        this.lat = 51.94;
        this.lng = 15.51;
        break;
      default:
        this.lat = 51.94;
        this.lng = 15.51;
    }
  }

  async getCurrentRestaurant(task) {
    await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=restaurant&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`,
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const data = this.gatherRestaurantData(response);
        task.attachRestaurant(data);
      })
      .catch((error) => {
        console.log(`tutaj: ${error}`);
      });
  }

  async getCurrentMuseum(task) {
    await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=museum&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`,
    ).then((response) =>
      response
        .json()
        .then((response) => {
          const data = this.gatherMuseumData(response);
          task.attachMuseum(data);
          // new PlacesBox(this.gatherMuseumData(response), task.number);
        })
        .catch((error) => {
          console.log(`tutaj: ${error}`);
        }),
    );
  }
  async getCurrentPark(task) {
    await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=park&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`,
    ).then((response) =>
      response
        .json()
        .then((response) => {
          const data = this.gatherParkData(response);
          task.attachPark(data);
          // new PlacesBox(this.gatherParkData(response), task.number);
        })
        .catch((error) => {
          console.log(`tutaj: ${error}`);
        }),
    );
  }
  gatherRestaurantData(data) {
    const { name, formatted_address } = data.candidates[0];
    const result = {
      nameRestaurant: name,
      addressRestaurant: formatted_address,
    };
    return result;
  }
  gatherMuseumData(data) {
    const { name, formatted_address } = data.candidates[0];
    const result = {
      nameMuseum: name,
      addressMuseum: formatted_address,
    };
    return result;
  }
  gatherParkData(data) {
    const { name, formatted_address } = data.candidates[0];
    const result = {
      namePark: name,
      addressPark: formatted_address,
    };
    return result;
  }
}
