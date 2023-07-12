fetch('http://api.weatherapi.com/v1/current.json?key=008478c79be54c9d8e9123022230607&q=london')
  .then((response) => {
    console.log(response.json());
  });

console.log('test');
