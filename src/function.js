const location = 'rome';
let temperatureType = 'c';

fetch(`http://api.weatherapi.com/v1/forecast.json?key=008478c79be54c9d8e9123022230607&q=${location}&days=8`, { mode: 'cors' })
  .then((response) => console.log(response.json()));

function changeTempType() {
  if (temperatureType === 'c') {
    temperatureType = 'f';
  } else {
    temperatureType = 'c';
  }
}

function weather() {
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=008478c79be54c9d8e9123022230607&q=${location}&days=8`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
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

      locationName.innerText = response.location.name;
      locationRegion.innerText = response.location.region;
      locationCountry.innerText = response.location.country;
      lastUpdated.innerText = response.current.last_updated;
      todayWeather.innerText = response.current.condition.text;
      todayWeatherImg.src = response.current.condition.icon;
      todayHumidity.innerText = `${response.current.humidity} %`;

      // Change to farenaith
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

      const d = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const weekDay = days[d.getDay()];

      // Adds seven days of weather forecast
      const container2 = document.getElementsByClassName('container-2')[0];
      const forecastDaysLength = response.forecast.forecastday.length;

      for (let i = 1; i < forecastDaysLength; i += 1) {
        let dayName = d.getDay() + i;
        if (dayName > 6) {
          dayName = 0;
        }
        if (dayName < 6) {
          dayName += 1;
        }

        const forecastDayContainer = document.createElement('div');
        forecastDayContainer.classList.add('forecast-days-container');
        container2.appendChild(forecastDayContainer);

        const forecastDayName = document.createElement('div');
        forecastDayName.classList.add('forecast-day-title');
        forecastDayContainer.appendChild(forecastDayName);
        forecastDayName.innerText = days[dayName];

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
        forecastDayImg.src = response.forecast.forecastday[i].day.condition.icon;
      }
    });
}

export { changeTempType, weather };
