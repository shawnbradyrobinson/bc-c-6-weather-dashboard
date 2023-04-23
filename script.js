// var baseURL = https://api.openweathermap.org/data/3.0/onecall?lat=30&lon=30&&appid=5277d07a84c698de9976717dfdb05680

/*
//SEARCH FOR A CITY, AND IT POPS UP THE DATA
Based on the conversations in Slack, it's going to find locations based on coordinates, and there are some deeper API elements that will help access that stuff (it also got mentioned in the Canva hint for the challenge)
DATA IT NEEDS - city name, the date, an icon, the temperature, the humidity, and the wind speed


So, we've got a bootstrap wireframe with a search bar and a bunch of base cards...

Then, we get fetch working correctly with the API Key....
fetch (baseURL)
.then (function (response){
    return response.json();
})
. then (function (data){
    console.log(data); 

});

Eventually, we're going to want this thing to take in specific coordinates:

//TRANSLATE CITY NAME TO COORDINATES USING WEATHER API...


"search button".eventListener("click", function(){
//This listener is basically going to hold a lot of the brains of this thing, huh?

processSearchRequest(); 
addToSearchHistory(); <-- if "already searched" then don't add to history 
renderMainWeatherData(); 
renderFiveDayForecast();
});

After processSearchRequest() has been done on a city name once, then its variables should be stored in localStorage, which means that we can use a totally different function on search history items...

"search history item".eventListener("click", function(){
reloadSearch(); <-- this can just feed the localStorage variables back in without having to do the whole shebang of getting the request and all that...or actually, does it need to do the whole thing, to have up to date information? 

});


//SEARCHED CITIES GENERATE AN ITEM DOWN IN THE SEARCH HISTORY COLUMN 
function addToSearchHistory(search){
    //QUERY SELECTORS FOR HTML ELEMENTS...well, in the finished version this will actually be a createElement()...
    //LOCAL STORAGE VARIABLES TO KEEP THE SEARCH NAME AND THE SEARCH BUTTON ON THE SIDE COLUMN, EVEN UPON REFRESH...
    var clickedDate = api.date; <-- these may or may not be straight from here, they may be pulled from whatever the localStorage is instead...
    var clickedIcon = src="./////";
    var clickedTemp = 45; 

    renderMainWeatherData(clickedDate, clickedIcon, clickedTemp, );


}

function renderMainWeatherData(date, icon, temp, wind, humidity){




}

//SEARCH HISTORY CITIES ARE CLICKABLE, ALLOWING A PERSON TO REACCESS THEIR WEATHER INFO

*/
// === SEARCH QUERY SELECTORS === 
var searchField = document.querySelector("#search-field");
var searchButton = document.querySelector("#button-addon2");


// === TEMPORARY NON-DYNAMIC  QUERY SELECTORS === 
// --- CARD OBJECTS --- 
var forecastCard1 = document.querySelector("#forecast-card-1");

var forecastCard2 = document.querySelector("#forecast-card-2");

var forecastCard3 = document.querySelector("#forecast-card-3");

var forecastCard4 = document.querySelector("#forecast-card-4");

var forecastCard5 = document.querySelector("#forecast-card-5");

// --- TITLE OBJECTS ---
var titleDayOne = document.querySelector("#title-day-one");
var titleDayTwo = document.querySelector("#title-day-two");
var titleDayThree = document.querySelector("#title-day-three");
var titleDayFour = document.querySelector("#title-day-four");
var titleDayFive = document.querySelector("#title-day-five");

// --- SUBTITLE OBJECTS --- 
var subtitleDayOne = document.querySelector("#subtitle-1");
var subtitleDayTwo = document.querySelector("#subtitle-2");
var subtitleDayThree = document.querySelector("#subtitle-3");
var subtitleDayFour = document.querySelector("#subtitle-4");
var subtitleDayFive = document.querySelector("#subtitle-5");

// --- TEXT OBJECTS --- 
var textDayOne = document.querySelector("#text-one");
var textDayTwo = document.querySelector("#text-two");
var textDayThree = document.querySelector("#text-three");
var textDayFour = document.querySelector("#text-four");
var textDayFive = document.querySelector("#text-five");

textDayOne.textContent = "Testing";
// === GEO CODING FETCH === 

searchButton.addEventListener("click", function(){
if (searchField.value === ""){
    return; 
}
console.log("hi");

var searchValue = searchField.value; 

var searchedURL = "http://api.openweathermap.org/geo/1.0/direct?q=" +searchValue+ "&limit=5&appid=5277d07a84c698de9976717dfdb05680";

fetch (searchedURL)
.then(function (response){

return response.json();


})
.then (function (data){
var searchedName = data[0].name; 
var searchedState = data[0].state; 
var searchedLat = data[0].lat; 
var searchedLon = data[0].lon; 

console.log(data[0]);
console.log("Name: " +data[0].name);
console.log("State: " +data[0].state);
console.log("Latitude: " +data[0].lat);
console.log("Longitude: " +data[0].lon);

fetchSearchedWeather(searchedName, searchedState, searchedLat, searchedLon);



})

});


fetch (searchedURL)
.then(function (response){

return response.json();


})
.then (function (data){
var searchedName = data[0].name; 
var searchedState = data[0].state; 
var searchedLat = data[0].lat; 
var searchedLon = data[0].lon; 

console.log(data[0]);
console.log("Name: " +data[0].name);
console.log("State: " +data[0].state);
console.log("Latitude: " +data[0].lat);
console.log("Longitude: " +data[0].lon);

fetchSearchedWeather(searchedName, searchedState, searchedLat, searchedLon);



})

// === WEATHER DATA FETCH === 
function fetchSearchedWeather(searchedName, searchedState, searchedLat, searchedLon){
    var geoURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" +searchedLat+ "&lon=" +searchedLon+ "&units=imperial&appid=5277d07a84c698de9976717dfdb05680"

    fetch (geoURL)
    .then(function (response){
    return response.json();

    })
    .then(function (data){
        var weatherData = data.list; 
        for (i=0; i < weatherData.length; i++){ 

            var weatherType1 = weatherData[0].weather[0].main;
            var weatherTemp1 = weatherData[0].main.temp; 
            var weatherIcon1 = weatherData[0].weather[0].icon;
            var weatherWindSpeed1 = weatherData[0].wind.speed;
            var weatherUnix1 = weatherData[0].dt; 
            var weatherDayJS1 = dayjs.unix(weatherUnix1);

            var weatherType2 = weatherData[8].weather[0].main;
            var weatherTemp2 = weatherData[8].main.temp; 
            var weatherIcon2 = weatherData[8].weather[0].icon;
            var weatherWindSpeed2 = weatherData[8].wind.speed;
            var weatherUnix2 = weatherData[8].dt;
            var weatherDayJS2 = dayjs.unix(weatherUnix2);

            var weatherType3 = weatherData[16].weather[0].main;
            var weatherTemp3 = weatherData[16].main.temp; 
            var weatherIcon3 = weatherData[16].weather[0].icon;
            var weatherWindSpeed3 = weatherData[16].wind.speed;
            var weatherUnix3 = weatherData[16].dt;
            var weatherDayJS3 = dayjs.unix(weatherUnix3);

            var weatherType4 = weatherData[24].weather[0].main;
            var weatherTemp4 = weatherData[24].main.temp; 
            var weatherIcon4 = weatherData[24].weather[0].icon;
            var weatherWindSpeed4 = weatherData[24].wind.speed;
            var weatherUnix4 = weatherData[24].dt;
            var weatherDayJS4 = dayjs.unix(weatherUnix4);

            var weatherType5 = weatherData[32].weather[0].main;
            var weatherTemp5 = weatherData[32].main.temp; 
            var weatherIcon5 = weatherData[32].weather[0].icon;
            var weatherWindSpeed5 = weatherData[32].wind.speed;
            var weatherUnix5 = weatherData[32].dt;
            var weatherDayJS5 = dayjs.unix(weatherUnix5);

            console.log("unix: " +weatherUnix1);
            console.log("time: " +weatherDayJS1.format("MMM D, YYYY  | hh:mm:ss A"));
            console.log("time: " +weatherDayJS2.format("MMM D, YYYY  | hh:mm:ss A"));
            console.log("time: " +weatherDayJS3.format("MMM D, YYYY  | hh:mm:ss A"));
            console.log("time: " +weatherDayJS4.format("MMM D, YYYY  | hh:mm:ss A"));
            console.log("time: " +weatherDayJS5.format("MMM D, YYYY  | hh:mm:ss A"));

            console.log("state: " +searchedState);
   
            console.log("Temp in " +searchedName+ ": " +weatherTemp1);
    
            console.log("Weather in " +searchedName+ ": " +weatherType1);
    
            console.log("icon in " +searchedName+ ": " +weatherIcon1);
    
            console.log("Wind Speed in " +searchedName+ ": " +weatherWindSpeed1);

           titleDayOne.textContent = weatherDayJS1.format("MMM D, YYYY");
           titleDayTwo.textContent = weatherDayJS2.format("MMM D, YYYY");
           titleDayThree.textContent = weatherDayJS3.format("MMM D, YYYY");
           titleDayFour.textContent = weatherDayJS4.format("MMM D, YYYY");
           titleDayFive.textContent = weatherDayJS5.format("MMM D, YYYY");
           

    }
        // === WIREFRAME RENDERING === 
            textDayOne.textContent = weatherType1;
            textDayTwo.textContent = weatherType2; 
            textDayThree.textContent = weatherType3;
            textDayFour.textContent = weatherType4;
            textDayFive.textContent = weatherType5; 

            subtitleDayOne.textContent = searchedName; 
            subtitleDayTwo.textContent = searchedName; 
            subtitleDayThree.textContent = searchedName; 
            subtitleDayFour.textContent = searchedName; 
            subtitleDayFive.textContent = searchedName;

            //DISPLAY 1 
            var displayTemp1 = document.createElement("p");
            displayTemp1.setAttribute("class", "card-text");
            forecastCard1.append(displayTemp1);
            displayTemp1.textContent = "Temp: " +weatherTemp1;
            var displayWind1 = document.createElement("p");
            displayWind1.setAttribute("class", "card-text");
            forecastCard1.append(displayWind1);
            displayWind1.textContent = "Wind Speed: " +weatherWindSpeed1+ " MPH";
            var displayIcon1 = document.createElement("img");
            displayIcon1.setAttribute("src", "https://openweathermap.org/img/wn/" +weatherIcon1+ "@2x.png");
            forecastCard1.append(displayIcon1);

            //DISPLAY 2 
            var displayTemp2 = document.createElement("p");
            displayTemp2.setAttribute("class", "card-text");
            forecastCard2.append(displayTemp2);
            displayTemp2.textContent = "Temp: " +weatherTemp2;
            var displayWind2 = document.createElement("p");
            displayWind2.setAttribute("class", "card-text");
            forecastCard2.append(displayWind2);
            displayWind2.textContent = "Wind Speed: " +weatherWindSpeed2+ " MPH";
            var displayIcon2 = document.createElement("img");
            displayIcon2.setAttribute("src", "https://openweathermap.org/img/wn/" +weatherIcon2+ "@2x.png");
            forecastCard2.append(displayIcon2);

            //DISPLAY 3 
            var displayTemp3 = document.createElement("p");
            displayTemp3.setAttribute("class", "card-text");
            forecastCard3.append(displayTemp3);
            displayTemp3.textContent = "Temp: " +weatherTemp3;
            var displayWind3 = document.createElement("p");
            displayWind3.setAttribute("class", "card-text");
            forecastCard3.append(displayWind3);
            displayWind3.textContent = "Wind Speed: " +weatherWindSpeed3+ " MPH";
            var displayIcon3 = document.createElement("img");
            displayIcon3.setAttribute("src", "https://openweathermap.org/img/wn/" +weatherIcon3+ "@2x.png");
            forecastCard3.append(displayIcon3);

            //DISPLAY 4 
            var displayTemp4 = document.createElement("p");
            displayTemp4.setAttribute("class", "card-text");
            forecastCard4.append(displayTemp4);
            displayTemp4.textContent = "Temp: " +weatherTemp4;
            var displayWind4 = document.createElement("p");
            displayWind4.setAttribute("class", "card-text");
            forecastCard4.append(displayWind4);
            displayWind4.textContent = "Wind Speed: " +weatherWindSpeed4+ " MPH";
            var displayIcon4 = document.createElement("img");
            displayIcon4.setAttribute("src", "https://openweathermap.org/img/wn/" +weatherIcon4+ "@2x.png");
            forecastCard4.append(displayIcon4);

            //DISPLAY 5
            var displayTemp5 = document.createElement("p");
            displayTemp5.setAttribute("class", "card-text");
            forecastCard5.append(displayTemp5);
            displayTemp5.textContent = "Temp: " +weatherTemp5;
            var displayWind5 = document.createElement("p");
            displayWind5.setAttribute("class", "card-text");
            forecastCard5.append(displayWind5);
            displayWind5.textContent = "Wind Speed: " +weatherWindSpeed5+ " MPH";
            var displayIcon5 = document.createElement("img");
            displayIcon5.setAttribute("src", "https://openweathermap.org/img/wn/" +weatherIcon5+ "@2x.png");
            forecastCard5.append(displayIcon5);

})
    
}

function renderFiveDayForecast(){

}

