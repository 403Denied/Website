const api = {
    key: "get ur own api key nerd",
    base: "https://api.openweathermap.org/data/2.5/"
}
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active')
})

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if(evt.keyCode == 13){
        getResults(searchbox.value)
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }

function displayResults (weather) {
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector(`.hi-low`);
    hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`
    
}

function display_ct6() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    let x1 = hours + ":" +  x.getMinutes() + ":" +  x.getSeconds() + ampm;
    document.querySelector('.current .time').innerHTML = x1;
    display_c6();
}
function display_c6(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct6()',refresh)
}
display_c6()

function dateBuilder (d) {
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
function display_ct7() {
    var x = new Date()
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear();
    document.querySelector('.location .date').innerHTML = x1;
    display_c7();
}
function display_c7(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct7()',refresh)
}
display_c7()
