require('./index.css')
const { Wether } = require('./Wether');
const {List} = require('./ListData')
const {Data} = require('./Data')

const data = new Data()
const {city, country } = data.getData()
const wether = new Wether( city, country)
const list = new List()

async function showWether(){
  const res   = await wether.getWether()
  list.listing(res)
  console.log(res)
}

document.getElementById("click").addEventListener('click',(e)=>{
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  wether.changeLocation(city, country)
  data.setData(city, country)
  showWether()
})

document.addEventListener('DOMContentLoaded', showWether);
