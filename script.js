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


// === TEMPORARY NON-DYNAMIC  QUERY SELECTORS === 

// === FETCHING BASE API OBJECT === 
// var baseURL = "https://api.openweathermap.org/data/2.5/forecast?lat=39.0997&lon=94.5786&units=imperial&appid=5277d07a84c698de9976717dfdb05680";

// fetch (baseURL)
// .then(function (response){
//     return response.json();

// })
// .then(function (data){
//     var weatherData = data.list; 
//     for (i=0; i < 5; i++){ 
//         var weatherType = weatherData[i].weather[0].main;
//         var weatherTemp = weatherData[i].main.temp; 
//         var weatherIcon = weatherData[i].weather[0].icon;
//         var weatherWindSpeed = weatherData[i].wind.speed;
        
//         console.log(weatherData);
   
//         console.log("Temp: " +weatherTemp);
    
//         console.log("Weather: " +weatherType);
    
//         console.log("icon: " +weatherIcon);
    
//         console.log("Wind Speed: " +weatherWindSpeed);
//     }
// })

// === GEO CODING FETCH === 
var searchedURL = "http://api.openweathermap.org/geo/1.0/direct?q=houston&limit=5&appid=5277d07a84c698de9976717dfdb05680";

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

function fetchSearchedWeather(searchedName, searchedState, searchedLat, searchedLon){
    var geoURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" +searchedLat+ "&lon=" +searchedLon+ "&units=imperial&appid=5277d07a84c698de9976717dfdb05680"

    fetch (geoURL)
    .then(function (response){
    return response.json();

    })
    .then(function (data){
        var weatherData = data.list; 
        for (i=0; i < weatherData.length; i++){ 
            var weatherType = weatherData[i].weather[0].main;
            var weatherTemp = weatherData[i].main.temp; 
            var weatherIcon = weatherData[i].weather[0].icon;
            var weatherWindSpeed = weatherData[i].wind.speed;
            var weatherUnix = weatherData[i].dt; 
            var weatherDayJS = dayjs.unix(weatherUnix);
            console.log(weatherData);

            console.log("unix: " +weatherUnix);
            console.log("time: " +weatherDayJS.format("MMM D, YYYY  | hh:mm:ss A"));
   
            console.log("Temp in " +searchedName+ ": " +weatherTemp);
    
            console.log("Weather in " +searchedName+ ": " +weatherType);
    
            console.log("icon in " +searchedName+ ": " +weatherIcon);
    
            console.log("Wind Speed in " +searchedName+ ": " +weatherWindSpeed);
    }
})
    
}

