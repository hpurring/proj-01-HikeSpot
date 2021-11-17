// var searches = [];
// var savedList = document.getElementById("#history");
// var currentCity = document.getElementById("#searched-city");


// function fetchCity(city) {
    
//     var baseUrl = "http://dev.virtualearth.net/REST/v1/Locations?q=";
//     var endPoint = "&output=xml&key=";
//     var apiKey = "Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl";
//     var url = baseUrl + city + endPoint + apiKey;

//     fetch(url)
//     .then(response => response.json())
//     .then((renderSearchResults) => {
//         console.log(renderSearchResults)
//     });
// }


// function renderSearchResults(result) {

//     currentCity.innerHTML = ""

//     var myMap = document.getElementById("cityMap")
//     var iframe = document.createElement("iframe")
//     iframe.classList("map")
//     iframe.setAttribute("src", "http://dev.virtualearth.net/REST/v1/Locations?q=${parameter}&output=xml&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl")
//     iframe.appendChild(myMap)

// }



// // add eventlistener to button
// const button = document.getElementById("searchbtn");

// button.addEventListener("click", savedCity);


// //  store and get city to and from localStorage
// function getCity() {
//     return localStorage.getItem("searchedCity")
// }

// function savedCity() {
//     var city = document.getElementById("searched-city").value;

//     localStorage.setItem("searchCity", city);
//     // console.log("Clicked Button");
// };

var searchEl = document.getElementById("search");
var cityInputEl = document.getElementById("city-name");

// var weatherDiv = document.getElementById("weather-div")
// weatherDiv.hide();

document.getElementById("weather-div").style.display = "none";

// search function
var searchHandler = function(event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();
    console.log(cityName);
    if (cityName) {
        // saveSearch();
        getCurrentWeather();
        document.getElementById("weather-div").style.display = "block";
        cityInputEl.value = "";
    } else {
        alert("Please search for a city.");
    }
};

// fetch and display location weather
var getCurrentWeather = function() {
    // format the github api url
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.value.trim() + '&appid=e58ce6fcd378144b93c4b6f45a5073c8';
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayWeather(data)
            getCityCoordinates(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function(error) {
        alert('Unable to connect to OpenWeather.');
      });
  };

  function displayWeather(data) {
    // temp,  wind, humidity
    var temp = Math.round(((data.main.temp - 273.15) * 1.8) + 32);
    var wind = data.wind.speed;
    var humidity = data.main.humidity;
    console.log(temp);
    console.log(wind);
    console.log(humidity);
    
    var tempEl = document.getElementById("temp");
    tempEl.innerHTML = "Temperature: " + temp + "°F";

    var windEl = document.getElementById("wind");
    windEl.innerHTML = "Wind: " + wind + " mph";

    var humidityEl = document.getElementById("humidity");
    humidityEl.innerHTML = "Humidity: " + humidity + "%";

    var cityNameEl = document.getElementById("search-term");
    cityNameEl.innerHTML = data.name + ", " + data.sys.country;

    if (data.length === 0) {
        cityInfoEl.textContent = "No city found.";
        return;
    };
}

function getCityCoordinates(data) {
    var longitude = data.coord.lon;
    var latitude = data.coord.lat;
    console.log(longitude);
    console.log(latitude);
    // generate map from coordinates
};

// function saveSearch() {
//     var cityList = JSON.parse(localStorage.getItem("City-List"));
//     if (!cityList) {
//         savedItems.push(cityName);        
//         localStorage.setItem("City-List", JSON.stringify(savedItems));
//     } else {
//         cityList = JSON.parse(localStorage.getItem("City-List"));
//         savedItems = cityList;
//         savedItems.push(cityName);        
//         localStorage.setItem("City-List", JSON.stringify(savedItems));
//     };
// };    

searchEl.addEventListener("submit", searchHandler);





// const url = 'http://dev.virtualearth.net/REST/v1/LocalSearch/?query=Locations=${query}&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl';


// save to input to localStorage to grab for weather and map
// var input = document.getElementById('saveServer').value;
// localStorage.setItem('server', input);

//and to get the text back we would use
//(document.getElementById('saveServer').value = localStorage.getItem('server');)



// map api

// bing maps
// var url = "http://dev.virtualearth.net/REST/v1/Locations?q="
// parameter = city searched
// var endPoint = "&output=xml&key=""
// var apiKey = "Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl"
// http://dev.virtualearth.net/REST/v1/Locations?q=seattle&output=xml&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl

// national park maps
// var baseUrl = "https://developer.nps.gov/";
// var endPoint = "api/v1/parks";
// var apiKey = "o1FOO1q63Y41fwWArlMIJN1hREzMFioFeTTpACSt";
