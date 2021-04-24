//Challenge 1 - Display Correct Time
//let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMin = date.getMinutes();
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  let now = `Time: ${currentDay} ${currentHour}:${currentMin}`;

  return now;
}
let dateTime = document.querySelector("#time");
dateTime.innerHTML = formatDate(new Date());

//Challenge 2 Create Search Engine

function displayWeather(response) {
  document.querySelector(
    "#cityHeader"
  ).innerHTML = `Weather in ${response.data.name}`;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "ba5ecf513fd2fbe8a7177219d1410c1b";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  //let searchInput = document.querySelector("#search-text-input");
  //console.log(searchInput.value);
  //let h2 = document.querySelector("#city");
  //h2.innerHTML = `Weather in ${searchInput.value}`;
}

let form = document.querySelector("#searchForm");
form.addEventListener("submit", search);

//Bonus Challenge Display Temperature in C and F
function convertToF(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let temperatureElement = document.querySelector("#temperature");
let temperature = temperatureElement.innerHTML;
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToF);

function convertToC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperature = Number(temperature);
  temperatureElement.innerHTML = 10;
}

let celsiusTemp = temperatureElement.innerHTML;
let celsiusLink = document.querySelector("#celsiusLink");
celsiusLink.addEventListener("click", convertToC);
