import weatherArray from './weatherArray';

let temperatureType = 'c';

// Function to change temperature type
function changeTempType() {
  if (temperatureType === 'c') {
    temperatureType = 'f';
  } else {
    temperatureType = 'c';
  }
}

// Function to remove contents from container 1 and 2
function removeContainerItem() {
  const hoursToDelete = document.getElementsByClassName('forecast-hourly-container');
  Array.from(hoursToDelete).forEach((div) => {
    div.remove();
  });
  const daysToDelete = document.getElementsByClassName('forecast-days-container');
  Array.from(daysToDelete).forEach((div) => {
    div.remove();
  });
}

// Function to find object index in weatherArray
function findCode(code) {
  const objectIndex = weatherArray.findIndex((obj) => obj.code === code);
  return objectIndex;
}

// Function to find SVG in assets folder
function importImage(imagePath) {
  return require(`./${imagePath}`);
}

// Function to convert 12 Hour format to 24
function convertTo24Hour(time12h) {
  const [time, period] = time12h.split(' ');
  let [hours, minutes] = time.split(':');

  hours = parseInt(hours);

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes}`;
}

// Function to see the weather during the hours of the day
function hourlyWeather(response) {
  const container3 = document.getElementsByClassName('container-3')[0];
  const forecastHourlyLength = response.forecast.forecastday[0].hour.length;

  const d = new Date();
  const currentHour = d.getHours();
  let sunriseHour = convertTo24Hour(response.forecast.forecastday[0].astro.sunrise).slice(0, 2);
  let sunsetHour = convertTo24Hour(response.forecast.forecastday[0].astro.sunset).slice(0, 2);
  sunriseHour = Number(sunriseHour);
  sunsetHour = Number(sunsetHour);

  const remainingHours = 24 - (24 - currentHour);
  let totalHours = forecastHourlyLength;
  let dayIndex = 0;

  for (let i = currentHour; i < totalHours; i += 1) {
    const forecastHourlyContainer = document.createElement('div');
    forecastHourlyContainer.classList.add('forecast-hourly-container');
    container3.appendChild(forecastHourlyContainer);

    const forecastHour = document.createElement('div');
    forecastHour.classList.add('forecast-hour');
    forecastHourlyContainer.appendChild(forecastHour);
    forecastHour.innerText = response.forecast.forecastday[dayIndex].hour[i].time.slice(-5);

    const forecastHourMaxTemp = document.createElement('div');
    forecastHourMaxTemp.classList.add('forecast-hour-max-temp');
    forecastHourlyContainer.appendChild(forecastHourMaxTemp);
    forecastHourMaxTemp.innerText = temperatureType === 'c'
      ? `${response.forecast.forecastday[dayIndex].hour[i].temp_c} ºC`
      : `${response.forecast.forecastday[dayIndex].hour[i].temp_f} ºF`;

    const forecastHourImg = document.createElement('img');
    forecastHourImg.classList.add('forecast-hour-img');
    forecastHourlyContainer.appendChild(forecastHourImg);

    // Convert the first two numbers of the forecast time to a number
    const forecastHourSlice = response.forecast.forecastday[dayIndex].hour[i].time.slice(-5, -3);
    const forecastHourNumber = Number(forecastHourSlice);

    // Look for the key code in weatherArray
    const weatherCode = response.forecast.forecastday[dayIndex].hour[i].condition.code;

    // Change the image based on what time it is
    let imagePath = `assets/weather-icons/${weatherArray[findCode(weatherCode)].dayIcon}`;
    if (forecastHourNumber < sunriseHour || forecastHourNumber >= sunsetHour) {
      imagePath = `assets/weather-icons/${weatherArray[findCode(weatherCode)].nightIcon}`;
    }
    forecastHourImg.src = importImage(imagePath);

    // It is used to see the weather after 23:00
    if (i === 23) {
      dayIndex = 1;
      i = -1;
      totalHours = remainingHours;
    }
  }
}

// Adds seven days of weather forecast
function sevenDaysWeather(response) {
  const container2 = document.getElementsByClassName('container-2')[0];
  const forecastDaysLength = response.forecast.forecastday.length;

  // Adds day name to weather forecast
  const d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayNumber = d.getDay();
  let dayNumber = currentDayNumber;

  for (let i = 1; i < forecastDaysLength; i += 1) {
    dayNumber += 1;
    if (dayNumber === 7) {
      dayNumber = 0;
    }
    const forecastDayContainer = document.createElement('div');
    forecastDayContainer.classList.add('forecast-days-container');
    container2.appendChild(forecastDayContainer);

    const forecastDayName = document.createElement('div');
    forecastDayName.classList.add('forecast-day-title');
    forecastDayContainer.appendChild(forecastDayName);
    forecastDayName.innerText = days[dayNumber];

    const forecastDayMaxTemp = document.createElement('div');
    forecastDayMaxTemp.classList.add('forecast-day-max-temp');
    forecastDayContainer.appendChild(forecastDayMaxTemp);
    forecastDayMaxTemp.innerText = temperatureType === 'c'
      ? `Max : ${response.forecast.forecastday[i].day.maxtemp_c} ºC`
      : `Max : ${response.forecast.forecastday[i].day.maxtemp_f} ºF`;

    const forecastDayMinTemp = document.createElement('div');
    forecastDayMinTemp.classList.add('forecast-day-min-temp');
    forecastDayContainer.appendChild(forecastDayMinTemp);
    forecastDayMinTemp.innerText = temperatureType === 'c'
      ? `Min : ${response.forecast.forecastday[i].day.mintemp_c} ºC`
      : `Min : ${response.forecast.forecastday[i].day.mintemp_f} ºF`;

    const forecastDayImg = document.createElement('img');
    forecastDayImg.classList.add('forecast-day-img');
    forecastDayContainer.appendChild(forecastDayImg);
    const weatherCode = response.forecast.forecastday[i].day.condition.code;
    const imagePath = `assets/weather-icons/${weatherArray[findCode(weatherCode)].dayIcon}`;
    forecastDayImg.src = importImage(imagePath);
  }
}

function weatherInfo(response) {
  const locationName = document.getElementById('locationName');
  const locationRegion = document.getElementById('locationRegion');
  const locationCountry = document.getElementById('locationCountry');
  const lastUpdated = document.getElementById('lastUpdated');
  const temperature = document.getElementById('temperature');
  const temperatureMax = document.getElementById('temperatureMax');
  const temperatureMin = document.getElementById('temperatureMin');
  const todayWeather = document.getElementById('todayWeather');
  const todayWeatherImg = document.getElementById('todayWeatherImg');
  const todayFeelsLike = document.getElementById('todayFeelsLike');
  const todayHumidity = document.getElementById('todayHumidity');
  const todayWindSpeed = document.getElementById('todayWindSpeed');

  locationName.innerText = `${response.location.name},`;
  locationRegion.innerText = `${response.location.region},`;
  locationCountry.innerText = response.location.country;
  lastUpdated.innerText = response.current.last_updated;
  todayWeather.innerText = response.current.condition.text;
  todayHumidity.innerText = `${response.current.humidity} %`;

  const weatherCode = response.forecast.forecastday[0].day.condition.code;
  const imagePath = `assets/weather-icons/${weatherArray[findCode(weatherCode)].dayIcon}`;
  todayWeatherImg.src = importImage(imagePath);

  if (temperatureType === 'c') {
    temperature.innerText = `${response.current.temp_c} ºC`;
    temperatureMax.innerText = `Max : ${response.forecast.forecastday[0].day.maxtemp_c} ºC`;
    temperatureMin.innerText = `Min : ${response.forecast.forecastday[0].day.mintemp_c} ºC`;
    todayFeelsLike.innerText = `${response.current.feelslike_c} ºC`;
    todayWindSpeed.innerText = `${response.current.wind_kph} km/h`;
  } else {
    temperature.innerText = `${response.current.temp_f} ºF`;
    temperatureMax.innerText = `Max : ${response.forecast.forecastday[0].day.maxtemp_f} ºF`;
    temperatureMin.innerText = `Min : ${response.forecast.forecastday[0].day.mintemp_f} ºF`;
    todayFeelsLike.innerText = `${response.current.feelslike_f} ºF`;
    todayWindSpeed.innerText = `${response.current.wind_mph} mph`;
  }
  hourlyWeather(response);
  sevenDaysWeather(response);
}

function weatherFetch(location) {
  const inputError = document.getElementsByClassName('input-error')[0];
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=008478c79be54c9d8e9123022230607&q=${location}&days=8`)
    .then((response) => response.json())
    .then((response) => {
      weatherInfo(response);
      inputError.classList.add('hidden');
    })
    .catch(() => {
      inputError.classList.remove('hidden');
    });
}

export { removeContainerItem, changeTempType, weatherFetch };
