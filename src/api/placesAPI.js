import { PlacesBox } from '../src/api/Places.js';
import API_KEY from "../apikey.js";

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

const places = new PlacesApi();
places.getCurrentRestaurant();
places.getCurrentMuseum();
places.getCurrentPark();
