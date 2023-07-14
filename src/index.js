import './style.css';
import searchIcon from './images/magnify.svg';
import { removeContainerItem, changeTempType, weather } from './function';

const body = document.getElementsByTagName('body')[0];

// Title
const titleApp = document.createElement('div');
titleApp.classList.add('title-app');
titleApp.innerText = 'WEATHER APP';
body.appendChild(titleApp);

// Container for weather of the day
const container1 = document.createElement('div');
container1.classList.add('container-1');
body.appendChild(container1);

const locationName = document.createElement('div');
locationName.setAttribute('id', 'locationName');
container1.appendChild(locationName);

const locationRegion = document.createElement('div');
locationRegion.setAttribute('id', 'locationRegion');
container1.appendChild(locationRegion);

const locationCountry = document.createElement('div');
locationCountry.setAttribute('id', 'locationCountry');
container1.appendChild(locationCountry);

const lastUpdated = document.createElement('div');
lastUpdated.setAttribute('id', 'lastUpdated');
container1.appendChild(lastUpdated);

// Temperature container
const temperatureContainer = document.createElement('div');
container1.appendChild(temperatureContainer);

const temperature = document.createElement('div');
temperature.setAttribute('id', 'temperature');
temperatureContainer.appendChild(temperature);

const temperatureMax = document.createElement('div');
temperatureMax.setAttribute('id', 'temperatureMax');
temperatureContainer.appendChild(temperatureMax);

const temperatureMin = document.createElement('div');
temperatureMin.setAttribute('id', 'temperatureMin');
temperatureContainer.appendChild(temperatureMin);

// Form
const form = document.createElement('form');
container1.appendChild(form);

const inputLocation = document.createElement('input');
inputLocation.setAttribute('type', 'text');
inputLocation.setAttribute('placeholder', 'Enter City Name');
form.appendChild(inputLocation);

const submitBtn = document.createElement('button');
form.appendChild(submitBtn);
const submitBtnImg = document.createElement('img');
submitBtnImg.src = searchIcon;
submitBtn.appendChild(submitBtnImg);

// Temperature type change button
const temperatureChangeBtn = document.createElement('button');
temperatureChangeBtn.setAttribute('id', 'temperatureChangeBtn');
container1.appendChild(temperatureChangeBtn);

temperatureChangeBtn.addEventListener('click', () => {
  changeTempType();
  removeContainerItem();
  weather();
});

const todayWeather = document.createElement('div');
todayWeather.setAttribute('id', 'todayWeather');
container1.appendChild(todayWeather);

const todayWeatherImg = document.createElement('img');
todayWeatherImg.setAttribute('id', 'todayWeatherImg');
container1.appendChild(todayWeatherImg);

// Today Weather container
const todayFeelsLikeContainer = document.createElement('div');
container1.appendChild(todayFeelsLikeContainer);

const todayFeelsLikeTitle = document.createElement('div');
todayFeelsLikeTitle.innerText = 'Feels Like';
todayFeelsLikeContainer.appendChild(todayFeelsLikeTitle);

const todayFeelsLike = document.createElement('div');
todayFeelsLike.setAttribute('id', 'todayFeelsLike');
todayFeelsLikeContainer.appendChild(todayFeelsLike);

// Today Humidity container
const todayHumidityContainer = document.createElement('div');
container1.appendChild(todayHumidityContainer);

const todayHumidityTitle = document.createElement('div');
todayHumidityTitle.innerText = 'Humidity';
todayHumidityContainer.appendChild(todayHumidityTitle);

const todayHumidity = document.createElement('div');
todayHumidity.setAttribute('id', 'todayHumidity');
todayHumidityContainer.appendChild(todayHumidity);

// Today Wind Speed container
const todayWindSpeedContainer = document.createElement('div');
container1.appendChild(todayWindSpeedContainer);

const todayWindSpeedTitle = document.createElement('div');
todayWindSpeedTitle.innerText = 'Wind Speed';
todayWindSpeedContainer.appendChild(todayWindSpeedTitle);

const todayWindSpeed = document.createElement('div');
todayWindSpeed.setAttribute('id', 'todayWindSpeed');
todayWindSpeedContainer.appendChild(todayWindSpeed);

// Container for weather forecasts for the next 24 hours

const container2 = document.createElement('div');
container2.classList.add('container-2');
body.appendChild(container2);

// Container for weather forecasts for the next 7 days / 24 hours
const container3 = document.createElement('div');
container3.classList.add('container-3');
body.appendChild(container3);

weather();

console.log('test');
