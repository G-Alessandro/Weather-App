import './style.css';
import searchIcon from './assets/magnify.svg';
import thermometer from './assets/weather-icons/thermometer.svg';
import humidity from './assets/weather-icons/humidity.svg';
import wind from './assets/weather-icons/wind.svg';
import { removeContainerItem, changeTempType, weather } from './function';

const body = document.getElementsByTagName('body')[0];

// Title
// const titleApp = document.createElement('div');
// titleApp.classList.add('title-app');
// titleApp.innerText = 'WEATHER APP';
// body.appendChild(titleApp);

// Container for weather of the day
const container1 = document.createElement('div');
container1.classList.add('container-1');
body.appendChild(container1);

// Container Info
const containerInfo = document.createElement('div');
containerInfo.classList.add('container-info');
container1.appendChild(containerInfo);

// Container Info 1
const containerInfo1 = document.createElement('div');
containerInfo1.classList.add('container-info-1');
containerInfo.appendChild(containerInfo1);

// Container for Today weather name and Location information Container
const weatherLocationContainer = document.createElement('div');
containerInfo1.appendChild(weatherLocationContainer);

// Today weather name
const todayWeather = document.createElement('div');
todayWeather.setAttribute('id', 'todayWeather');
weatherLocationContainer.appendChild(todayWeather);

// Location information Container
const locationContainer = document.createElement('div');
locationContainer.classList.add('location-container');
weatherLocationContainer.appendChild(locationContainer);

const locationName = document.createElement('div');
locationName.setAttribute('id', 'locationName');
locationContainer.appendChild(locationName);

const regionCountryContainer = document.createElement('div');
regionCountryContainer.classList.add('region-country-container');
locationContainer.appendChild(regionCountryContainer);

const locationRegion = document.createElement('div');
locationRegion.setAttribute('id', 'locationRegion');
regionCountryContainer.appendChild(locationRegion);

const locationCountry = document.createElement('div');
locationCountry.setAttribute('id', 'locationCountry');
regionCountryContainer.appendChild(locationCountry);

// Today weather image
const todayWeatherImg = document.createElement('img');
todayWeatherImg.setAttribute('id', 'todayWeatherImg');
weatherLocationContainer.appendChild(todayWeatherImg);

// Temperature container
const temperatureContainer = document.createElement('div');
temperatureContainer.classList.add('temperature-container');
containerInfo1.appendChild(temperatureContainer);

const temperature = document.createElement('div');
temperature.setAttribute('id', 'temperature');
temperatureContainer.appendChild(temperature);

const temperatureMax = document.createElement('div');
temperatureMax.setAttribute('id', 'temperatureMax');
temperatureContainer.appendChild(temperatureMax);

const temperatureMin = document.createElement('div');
temperatureMin.setAttribute('id', 'temperatureMin');
temperatureContainer.appendChild(temperatureMin);

// Container Info 2
const containerInfo2 = document.createElement('div');
containerInfo2.classList.add('container-info-2');
containerInfo.appendChild(containerInfo2);

// Last Updated container
const lastUpdatedContainer = document.createElement('div');
lastUpdatedContainer.classList.add('last-update-container');
containerInfo2.appendChild(lastUpdatedContainer);

const lastUpdatedTitle = document.createElement('div');
lastUpdatedTitle.classList.add('last-updated-title');
lastUpdatedContainer.appendChild(lastUpdatedTitle);
lastUpdatedTitle.innerText = 'Last Weather Updated';

const lastUpdated = document.createElement('div');
lastUpdated.setAttribute('id', 'lastUpdated');
lastUpdatedContainer.appendChild(lastUpdated);

// Feels Like container
const feelsLikeContainer = document.createElement('div');
feelsLikeContainer.classList.add('feels-like-container');
containerInfo2.appendChild(feelsLikeContainer);

const feelsLikeImg = document.createElement('img');
feelsLikeImg.src = thermometer;
feelsLikeContainer.appendChild(feelsLikeImg);

const feelsLikeInsideContainer = document.createElement('div');
feelsLikeInsideContainer.classList.add('inside-container');
feelsLikeContainer.appendChild(feelsLikeInsideContainer);

const feelsLikeTitle = document.createElement('div');
feelsLikeTitle.classList.add('title');
feelsLikeTitle.innerText = 'Feels Like';
feelsLikeInsideContainer.appendChild(feelsLikeTitle);

const feelsLike = document.createElement('div');
feelsLike.classList.add('result');
feelsLike.setAttribute('id', 'todayFeelsLike');
feelsLikeInsideContainer.appendChild(feelsLike);

// Humidity container
const humidityContainer = document.createElement('div');
humidityContainer.classList.add('humidity-container');
containerInfo2.appendChild(humidityContainer);

const humidityImg = document.createElement('img');
humidityImg.src = humidity;
humidityContainer.appendChild(humidityImg);

const humidityInsideContainer = document.createElement('div');
humidityInsideContainer.classList.add('inside-container');
humidityContainer.appendChild(humidityInsideContainer);

const todayHumidityTitle = document.createElement('div');
todayHumidityTitle.classList.add('title');
todayHumidityTitle.innerText = 'Humidity';
humidityInsideContainer.appendChild(todayHumidityTitle);

const todayHumidity = document.createElement('div');
todayHumidity.classList.add('result');
todayHumidity.setAttribute('id', 'todayHumidity');
humidityInsideContainer.appendChild(todayHumidity);

// Wind Speed container
const windSpeedContainer = document.createElement('div');
windSpeedContainer.classList.add('wind-speed-container');
containerInfo2.appendChild(windSpeedContainer);

const windSpeedImg = document.createElement('img');
windSpeedImg.src = wind;
windSpeedContainer.appendChild(windSpeedImg);

const windSpeedInsideContainer = document.createElement('div');
windSpeedInsideContainer.classList.add('inside-container');
windSpeedContainer.appendChild(windSpeedInsideContainer);

const windSpeedTitle = document.createElement('div');
windSpeedTitle.classList.add('title');
windSpeedTitle.innerText = 'Wind Speed';
windSpeedInsideContainer.appendChild(windSpeedTitle);

const windSpeed = document.createElement('div');
windSpeed.classList.add('result');
windSpeed.setAttribute('id', 'todayWindSpeed');
windSpeedInsideContainer.appendChild(windSpeed);

// Input and button container
const inputBtnContainer = document.createElement('div');
inputBtnContainer.classList.add('input-button-container');
container1.appendChild(inputBtnContainer);

// Temperature type change switch
const temperatureChangeSwitchLabel = document.createElement('label');
temperatureChangeSwitchLabel.classList.add('switch-label');
inputBtnContainer.appendChild(temperatureChangeSwitchLabel);

const temperatureChangeInput = document.createElement('input');
temperatureChangeInput.setAttribute('type', 'checkbox');
temperatureChangeInput.classList.add('switch-checkbox');
temperatureChangeSwitchLabel.appendChild(temperatureChangeInput);

const temperatureChangeSlider = document.createElement('span');
temperatureChangeSlider.classList.add('switch-slider');
temperatureChangeSwitchLabel.appendChild(temperatureChangeSlider);

const temperatureChangeDiv = document.createElement('div');
temperatureChangeDiv.classList.add('toggle-labels');
temperatureChangeSwitchLabel.appendChild(temperatureChangeDiv);

const temperatureChangeCelsius = document.createElement('span');
temperatureChangeCelsius.classList.add('toggle-text-celsius');
temperatureChangeCelsius.innerText = 'ºC';
temperatureChangeDiv.appendChild(temperatureChangeCelsius);

const temperatureChangeFahrenheit = document.createElement('span');
temperatureChangeFahrenheit.classList.add('toggle-text-fahrenheit');
temperatureChangeFahrenheit.innerText = 'ºF';
temperatureChangeDiv.appendChild(temperatureChangeFahrenheit);

let location = 'Guidonia';
temperatureChangeInput.addEventListener('click', () => {
  changeTempType();
  removeContainerItem();
  weather(location);
});

// Form
const form = document.createElement('form');
inputBtnContainer.appendChild(form);

const inputLocation = document.createElement('input');
inputLocation.setAttribute('type', 'text');
inputLocation.setAttribute('placeholder', 'Search Location');
form.appendChild(inputLocation);

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
form.appendChild(submitBtn);

const submitBtnImg = document.createElement('img');
submitBtnImg.classList.add('submit-btn-img');
submitBtnImg.src = searchIcon;
submitBtn.appendChild(submitBtnImg);

form.addEventListener('submit', (e) => {
  location = inputLocation.value;
  removeContainerItem();
  weather(location);
  e.preventDefault();
});

// Container for weather forecasts for the next 24 hours
const container2 = document.createElement('div');
container2.classList.add('container-2');
body.appendChild(container2);

// Container for weather forecasts for the next 7 days / 24 hours
const container3 = document.createElement('div');
container3.classList.add('container-3');
body.appendChild(container3);

weather(location);

console.log('test');
