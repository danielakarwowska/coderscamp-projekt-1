export default class Task {
    constructor(title, description, city, date, number = Math.random().toString(), place){
        this.title = title;
        this.description = description;
        this.city = city;
        this.date = date;
        this.number = number;
        this.place = place;
    }
}
