export default class Task {
  constructor(title, description, city, date, placesData = {}) {
    this.title = title;
    this.description = description;
    this.city = city;
    this.date = date;
    this.number = Math.random().toString();
    this.placesData = placesData || {};
  }
  attachRestaurant(data) {
    this.placesData.restaurant = data;
  }
  attachMuseum(data) {
    this.placesData.museum = data;
  }
  attachPark(data) {
    this.placesData.park = data;
  }
}
