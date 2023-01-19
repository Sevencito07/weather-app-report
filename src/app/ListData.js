export class List  {
    constructor(){
        this.location = document.getElementById('list-name');
        this.desc = document.getElementById('list-1');
        this.string = document.getElementById('list-2');
        this.humidity = document.getElementById('list-3');
        this.wind = document.getElementById('list-4');
        this.cord = document.getElementById('list-5');
    }

    listing(weather){
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.string.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '°C';
        this.wind.textContent = 'Weather ' + weather.wind.speed + ' m/s';
        this.cord.textContent = 'lon: ' + weather.coord.lon + ' lat: ' + weather.coord.lat;
    }
}