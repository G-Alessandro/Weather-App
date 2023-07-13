const location = 'rome';

fetch(`http://api.weatherapi.com/v1/forecast.json?key=008478c79be54c9d8e9123022230607&q=${location}&days=7`, { mode: 'cors' })
  .then((response) => console.log(response.json()));

function weather() {
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=008478c79be54c9d8e9123022230607&q=${location}&days=7`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      const locationName = document.getElementById('locationName');
      const locationRegion = document.getElementById('locationRegion');
      const locationCountry = document.getElementById('locationCountry');
      const lastUpdated = document.getElementById('lastUpdated');
      const temperature = document.getElementById('temperature');
      const todayWeather = document.getElementById('todayWeather');
      const todayWeatherImg = document.getElementById('todayWeatherImg');
      const todayFeelsLike = document.getElementById('todayFeelsLike');
      const todayHumidity = document.getElementById('todayHumidity');
      const todayWindSpeed = document.getElementById('todayWindSpeed');

      locationName.innerText = response.location.name;
      locationRegion.innerText = response.location.region;
      locationCountry.innerText = response.location.country;
      lastUpdated.innerText = response.current.last_updated;
      temperature.innerText = response.current.temp_c;
      todayWeather.innerText = response.current.condition.text;
      todayWeatherImg.src = response.current.condition.icon;
      todayFeelsLike.innerText = `${response.current.feelslike_c} ºC`;
      todayHumidity.innerText = `${response.current.humidity} %`;
      todayWindSpeed.innerText = `${response.current.wind_kph} km/h`;
    });
}

export { weather };
