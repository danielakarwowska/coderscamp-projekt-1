import PlacesBox from '../components/Places.js';
import API_KEY from "../apikey.js";
export default class PlacesAPI {
    constructor(city){
    this.lat;
    this.log;
    this.attachLatLng(city);
    attachLatLng(city) ;
    switch (city) {
        case 'Białystok':
          this.lat = 53.13;
          this.lng = 23.17;
          break;
          case 'Gdańsk':
          this.lat = 54.35;
          this.lng = 18.65;
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
          case 'Kraków' :
          this.lat = 50.06;
          this.lng = 19.95;
          break;
          case 'Lublin' :
          this.lat = 51.25;
          this.lng = 22.57;
          break;
          case 'Kraków' :
          this.lat = 50.06;
          this.lng = 19.95;
          break;
          case 'Lublin' :
          this.lat = 51.25;
          this.lng = 22.57;
          break;
          case 'Łódź' :
          this.lat = 51.76;
          this.lng = 19.46;
          break;
          case 'Olsztyn' :
          this.lat = 53.78;
          this.lng = 20.48;
          break;
          case 'Opole' :
          this.lat = 50.67;
          lhis.lng = 1.792;
          break;
          case 'Poznań' :
          this.lat = 52.41;
          this.lng = 16.93;
          break;
          case 'Rzeszów' :
          this.lat = 50.02;
          this.lng = 22.00;
          break;
          case 'Szczecin' :
          this.lat = 53.25;
          this.lng = 14.32;
          break;
          case 'Warszawa' :
          this.lat = 52.35;
          this.lng = 21.05;
          break;
          case 'Wrocław' :
          this.lat = 51.05;
          this.lng = 17.00;
          break;
          case 'Toruń' :
          this.lat = 53.01;
          this.lng = 18.59;
          break;
          case 'Zielona Góra' :
          this.lat = 51.94;
          this.lng = 15.51;
          break;
        default: 
        console.log();
      }}

}
    


export class PlacesApi {
    constructor(lat,lng){
        this.lat =lat || 52.2297;
        this.lng =lng || 21.0122;
    }

getCurrentRestaurant (searchTerm, taskNumber){
fetch (`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=restaurant&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`)
.then(response =>
response.json()
.then(response => {
    console.log(response);
    let box = new PlacesBox(this.gatherRestaurantData(response), document.getElementById('restaurantContainer'), taskNumber);
    //box.addElement();
})
.catch(error =>{
    console.log(`tutaj: ${error}`);
}))
}

getCurrentMuseum (searchTerm, taskNumber){
    fetch (`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=museum&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`)
    .then(response =>
    response.json()
    .then(response => {
    console.log(response);
    let box = new PlacesBox(this.gatherMuseumData(response), document.getElementById('museumContainer'), taskNumber);
    //box.addElement();
    })
    .catch(error =>{
        console.log(`tutaj: ${error}`);
    }))
    }
getCurrentPark (searchTerm, taskNumber){
    fetch (`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=park&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`)
    .then(response =>
    response.json()
     .then(response => {
    console.log(response);
    let box = new PlacesBox(this.gatherParkData(response) , document.getElementById('parkContainer' ), taskNumber);
    //box.addElement();
        })
        .catch(error =>{
            console.log(`tutaj: ${error}`);
        }))
        }
gatherRestaurantData(data) {
    const { name, formatted_address } = data;
    const result = {
    nameRestaurant: name,
    addressRestaurant: formatted_address,
    };
    return result;
    }
gatherMuseumData(data) {
    const { name, formatted_address } = data;
    const result = {
    nameMuseum: name,
    addressMuseum: formatted_address,
    };
    return result;
    }
gatherParkData(data) {
    const { name, formatted_address } = data;
    const result = {
    namePark: name,
    addressPark: formatted_address,
    };
    return result;
    }

}

// const places = new PlacesApi();
// places.getCurrentRestaurant();
// places.getCurrentMuseum();
// places.getCurrentPark();
