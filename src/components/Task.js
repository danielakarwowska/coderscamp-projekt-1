export default class Task {
    constructor(title, description, city, date, place){
        this.title = title;
        this.description = description;
        this.city = city;
        this.date = date;
        this.number = Math.random().toString();
        this.place = place;
        this.placeData = {
        }
    }
    attachRestaurant(data){
        this.placeData.restaurant = data;
    }
    attachMuseum(data){
        this.placeData.museum = data;
    }
    attachPark(data){
        this.placeData.park = data;
    }
}
