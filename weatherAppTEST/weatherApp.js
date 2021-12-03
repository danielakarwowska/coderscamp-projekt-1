document.getElementById("searchBtn").addEventListener("click", () => {
    let searchTerm = document.getElementById("searchInput").value;
    if (searchTerm) { 
        weatherApi.getSearchMethod(searchTerm) 
      };
  
  });

class weatherApi {

    constructor() {}

    //Rozpoznianie wyszukiwania kod-pocztowy/nazwa

    static getSearchMethod (searchTerm) {
        if (searchTerm.lenght === 5 && Number.parseInt(searchTerm) + "" === searchTerm) {
            weatherApi.getCurrentWeather("zip", searchTerm);
        } else {
            weatherApi.getCurrentWeather("q", searchTerm);
        }
    }

    static getCurrentWeather(searchMethod, searchTerm, units = 'metric', appId = '2a5cc3af57a0f47a0d85d5a5a7e2f7de') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                
                let Box = new weatherBox(this.gatherWeatherData(response), document.getElementById("weatherContainer")); 
                Box.addElement()
            })

            .catch(err => {
                console.log(err)
            })
    }

    static gatherWeatherData(data) {

        const { weather, main, name } = data

        //Obiek uzyskiwany z odpowiedziami od api 
        const result = {
            // ikona pogodowa
            weatherIcon : "http://openweathermap.org/img/wn/" + weather[0].icon + ".png",
            // Opis jaka jest pogoda - pochmurno, pada, śnieg itp.
            weatherDescriptionHeader: weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1),
            // temperatura 
            temperature: Math.floor(main.temp) + "&#176",
            // nazwa miasta
            cityHeader: name,

            state: weather[0].main
        }
        return result
    }
  }


class weatherBox {

    constructor(data, container) {
        this.data = data;
        this.container = container;
        this.setWeatherData()
        this.setWeatherContainerPosition()
    }

    addElement() {
        let newDiv = document.createElement('div');
        newDiv.classList.add(`StalaWartosc`);
        newDiv.innerHTML = `${this.data.cityHeader}`;
        this.container.appendChild(newDiv);
        console.log(this.data);
    }
    // Wywołanie 
    setWeatherData() {
        for(const [key,value] of Object.entries(this.data)) {
            try {
                key != 'weatherIcon' ? document.getElementById(key).innerHTML = value : document.getElementById(key).src = value
            } catch(err) {

                key != 'state' ? console.log('Wrong ID') : false
            }
         }
    }

    setWeatherContainerPosition() {
    //   this.container.style.left = `calc(50% - ${this.container.clientWidth / 2}px)`;
    //  this.container.style.top = `calc(50% - ${this.container.clientHeight / 2}px)`;
    //    this.container.style.visibility = "visible";
    }


}
/*
  class NewObject  {

    constructor (data){

    this.data = data;
    
    }

    addElement (){
        let newDiv = document.createElement('div');
        newDiv.classList.add(`${this.name}`);
        newDiv.innerHTML = `${this.data}`;
        document.appendChild(newDiv);
    }

}

let ttt = new NewObject('a', 'b', 'c');
*/