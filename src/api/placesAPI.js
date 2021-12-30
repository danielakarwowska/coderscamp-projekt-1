//import { PlacesBox } from '../src/api/Places.js';
<<<<<<< HEAD

//import dotenv from '../../node_modules/dotenv'
//dotenv.config();
//const dotenv = require('dotenv');

//dotenv.config();

//('dotenv').config();

//console.log(process.env);

//const api_key = process.env.API_KEY;
//console.log(api_key);
//assigning a geographical location to selected cities
//let bialystok = document.getElementById('bialystok');

//require('dotenv').config({ path: require('find-config')('.env') })

=======
import API_KEY from "../apikey.js";
>>>>>>> 444bc49763815bc650a9377e03b563fd9f68c402

export class PlacesApi {
    constructor(lat,lng){
        this.lat =lat || 52.2297;
        this.lng =lng || 21.0122;
    }

getCurrentRestaurant (){
<<<<<<< HEAD
fetch (`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=restaurant&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=AIzaSyB726lkXiXXK-JdvLayLFbupwx4LakSq4g`)
=======
fetch (`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=restaurant&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`)
>>>>>>> 444bc49763815bc650a9377e03b563fd9f68c402
.then(response =>
response.json()
.then(response => {
    console.log(response);
    // let box = new PlacesBox(this.gatherPlacesData(response), document.getElementById('restaurantContainer'));
    //box.addElement();
})
.catch(error =>{
    console.log(`tutaj: ${error}`);
}))
}

getCurrentMuseum (){
    fetch (`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=museum&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`)
    .then(response =>
    response.json()
    .then(response => {
    console.log(response);
    // let box = new PlacesBox(this.gatherPlacesData(response), document.getElementById('museumContainer'));
    //box.addElement();
    })
    .catch(error =>{
        console.log(`tutaj: ${error}`);
    }))
    }
getCurrentPark (){
    fetch (`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=park&inputtype=textquery&locationbias=circle%3A10000%40${this.lat}%2C${this.lng}&key=${API_KEY}`)
    .then(response =>
    response.json()
     .then(response => {
    console.log(response);
    // let box = new PlacesBox(this.gatherPlacesData(response) , document.getElementById('parkContainer' ));
    //box.addElement();
        })
        .catch(error =>{
            console.log(`tutaj: ${error}`);
        }))
        }
gatherPlacesData(data) {
    const { name, formatted_address } = data;
    const result = {
    nameRestaurant: name,
    addressRestaurant: formatted_address,
    };
    return result;
    }

}

const places = new PlacesApi();
places.getCurrentRestaurant();
places.getCurrentMuseum();
places.getCurrentPark();
