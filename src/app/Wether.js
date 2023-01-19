export class Wether {
   
    constructor(city, country){
        this.key= 'a65e8d5307e0ec7f4b0d3cfb1ff4cfe6';
        this.city= city;
        this.country = country;
    }
    
    async getWether (){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.key}&units=metric`;
        const res =  await fetch(url)
        const data = await res.json()
        return data;
    }


    changeLocation(city, country){
     this.city = city;
     this.country = country;
    }
}