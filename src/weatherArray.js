const weatherArray = [
  {
    code: 1000,
    day: 'Sunny',
    night: 'Clear',
    dayIcon: 'clear-day.svg',
    nightIcon: 'clear-night.svg',
  },
  {
    code: 1003,
    day: 'Partly cloudy',
    night: 'Partly cloudy',
    dayIcon: 'partly-cloudy-day.svg',
    nightIcon: 'partly-cloudy-night.svg',
  },
  {
    code: 1006,
    day: 'Cloudy',
    night: 'Cloudy',
    dayIcon: 'cloudy.svg',
    nightIcon: 'cloudy.svg',
  },
  {
    code: 1009,
    day: 'Overcast',
    night: 'Overcast',
    dayIcon: 'overcast-day.svg',
    nightIcon: 'overcast.night.svg',
  },
  {
    code: 1030,
    day: 'Mist',
    night: 'Mist',
    dayIcon: 'mist.svg',
    nightIcon: 'mist.svg',
  },
  {
    code: 1063,
    day: 'Patchy rain possible',
    night: 'Patchy rain possible',
    dayIcon: 'partly-cloudy-day-rain.svg',
    nightIcon: 'partly-cloudy-night-rain.svg',
  },
  {
    code: 1066,
    day: 'Patchy snow possible',
    night: 'Patchy snow possible',
    dayIcon: 'partly-cloudy-day-snow.svg',
    nightIcon: 'partly-cloudy-night-snow.svg',
  },
  {
    code: 1069,
    day: 'Patchy sleet possible',
    night: 'Patchy sleet possible',
    dayIcon: 'partly-cloudy-day-sleet.svg',
    nightIcon: 'partly-cloudy-night-sleet.svg',
  },
  {
    code: 1072,
    day: 'Patchy freezing drizzle possible',
    night: 'Patchy freezing drizzle possible',
    dayIcon: 'partly-cloudy-day-drizzle.svg',
    nightIcon: 'partly-cloudy-night-drizzle.svg',
  },
  {
    code: 1087,
    day: 'Thundery outbreaks possible',
    night: 'Thundery outbreaks possible',
    dayIcon: 'thunderstorms.svg',
    nightIcon: 'thunderstorms.svg',
  },
  {
    code: 1114,
    day: 'Blowing snow',
    night: 'Blowing snow',
    dayIcon: 'wind-snow.svg',
    nightIcon: 'wind-snow.svg',
  },
  {
    code: 1117,
    day: 'Blizzard',
    night: 'Blizzard',
    dayIcon: 'wind-snow.svg',
    nightIcon: 'wind-snow.svg',
  },
  {
    code: 1135,
    day: 'Fog',
    night: 'Fog',
    dayIcon: 'fog.svg',
    nightIcon: 'fog.svg',
  },
  {
    code: 1147,
    day: 'Freezing fog',
    night: 'Freezing fog',
    dayIcon: 'fog.svg',
    nightIcon: 'fog.svg',
  },
  {
    code: 1150,
    day: 'Patchy light drizzle',
    night: 'Patchy light drizzle',
    dayIcon: 'partly-cloudy-day-sleet.svg',
    nightIcon: 'partly-cloudy-night-sleet.svg',
  },
  {
    code: 1153,
    day: 'Light drizzle',
    night: 'Light drizzle',
    dayIcon: 'partly-cloudy-day-sleet.svg',
    nightIcon: 'partly-cloudy-night-sleet.svg',
  },
  {
    code: 1168,
    day: 'Freezing drizzle',
    night: 'Freezing drizzle',
    dayIcon: 'sleet.svg',
    nightIcon: 'sleet.svg',
  },
  {
    code: 1171,
    day: 'Heavy freezing drizzle',
    night: 'Heavy freezing drizzle',
    dayIcon: 'extreme-sleet.svg',
    nightIcon: 'extreme-sleet.svg',
  },
  {
    code: 1180,
    day: 'Patchy light rain',
    night: 'Patchy light rain',
    dayIcon: 'partly-cloudy-day-rain.svg',
    nightIcon: 'partly-cloudy-night-rain.svg',
  },
  {
    code: 1183,
    day: 'Light rain',
    night: 'Light rain',
    dayIcon: 'rain.svg',
    nightIcon: 'rain.svg',
  },
  {
    code: 1186,
    day: 'Moderate rain at times',
    night: 'Moderate rain at times',
    dayIcon: 'overcast-day-rain.svg',
    nightIcon: 'overcast-night-rain.svg',
  },
  {
    code: 1189,
    day: 'Moderate rain',
    night: 'Moderate rain',
    dayIcon: 'overcast-rain.svg',
    nightIcon: 'overcast-rain.svg',
  },
  {
    code: 1192,
    day: 'Heavy rain at times',
    night: 'Heavy rain at times',
    dayIcon: 'extreme-day-rain.svg',
    nightIcon: 'extreme-night-rain.svg',
  },
  {
    code: 1195,
    day: 'Heavy rain',
    night: 'Heavy rain',
    dayIcon: 'extreme-rain.svg',
    nightIcon: 'extreme-rain.svg',
  },
  {
    code: 1198,
    day: 'Light freezing rain',
    night: 'Light freezing rain',
    dayIcon: 'sleet.svg',
    nightIcon: 'drizzle.svg',
  },
  {
    code: 1201,
    day: 'Moderate or heavy freezing rain',
    night: 'Moderate or heavy freezing rain',
    dayIcon: 'extreme-sleet.svg',
    nightIcon: 'extreme-sleet.svg',
  },
  {
    code: 1204,
    day: 'Light sleet',
    night: 'Light sleet',
    dayIcon: 'snow.svg',
    nightIcon: 'snow.svg',
  },
  {
    code: 1207,
    day: 'Moderate or heavy sleet',
    night: 'Moderate or heavy sleet',
    dayIcon: 'extreme.snow.svg',
    nightIcon: 'extreme.snow.svg',
  },
  {
    code: 1210,
    day: 'Patchy light snow',
    night: 'Patchy light snow',
    dayIcon: 'partly-cloudy-day-snow.svg',
    nightIcon: 'partly-cloudy-night-snow.svg',
  },
  {
    code: 1213,
    day: 'Light snow',
    night: 'Light snow',
    dayIcon: 'snow.svg',
    nightIcon: 'snow.svg',
  },
  {
    code: 1216,
    day: 'Patchy moderate snow',
    night: 'Patchy moderate snow',
    dayIcon: 'overcast-day-snow.svg',
    nightIcon: 'overcast-night-snow.svg',
  },
  {
    code: 1219,
    day: 'Moderate snow',
    night: 'Moderate snow',
    dayIcon: 'overcast-snow.svg',
    nightIcon: 'overcast-snow.svg',
  },
  {
    code: 1222,
    day: 'Patchy heavy snow',
    night: 'Patchy heavy snow',
    dayIcon: 'extreme-day-snow.svg',
    nightIcon: 'extreme-night-snow.svg',
  },
  {
    code: 1225,
    day: 'Heavy snow',
    night: 'Heavy snow',
    dayIcon: 'extreme-snow.svg',
    nightIcon: 'extreme-snow.svg',
  },
  {
    code: 1237,
    day: 'Ice pellets',
    night: 'Ice pellets',
    dayIcon: 'hail.svg',
    nightIcon: 'hail.svg',
  },
  {
    code: 1240,
    day: 'Light rain shower',
    night: 'Light rain shower',
    dayIcon: 'rain.svg',
    nightIcon: 'rain.svg',
  },
  {
    code: 1243,
    day: 'Moderate or heavy rain shower',
    night: 'Moderate or heavy rain shower',
    dayIcon: 'overcast-rain.svg',
    nightIcon: 'overcast-rain.svg',
  },
  {
    code: 1246,
    day: 'Torrential rain shower',
    night: 'Torrential rain shower',
    dayIcon: 'extreme-rain.svg',
    nightIcon: 'extreme-rain.svg',
  },
  {
    code: 1249,
    day: 'Light sleet showers',
    night: 'Light sleet showers',
    dayIcon: 'sleet.svg',
    nightIcon: 'sleet.svg',
  },
  {
    code: 1252,
    day: 'Moderate or heavy sleet showers',
    night: 'Moderate or heavy sleet showers',
    dayIcon: 'extreme-sleet.svg',
    nightIcon: 'extreme-sleet.svg',
  },
  {
    code: 1255,
    day: 'Light snow showers',
    night: 'Light snow showers',
    dayIcon: 'snow.svg',
    nightIcon: 'snow.svg',
  },
  {
    code: 1258,
    day: 'Moderate or heavy snow showers',
    night: 'Moderate or heavy snow showers',
    dayIcon: 'extreme-snow.svg',
    nightIcon: 'extreme-snow.svg',
  },
  {
    code: 1261,
    day: 'Light showers of ice pellets',
    night: 'Light showers of ice pellets',
    dayIcon: 'hail.svg',
    nightIcon: 'hail.svg',
  },
  {
    code: 1264,
    day: 'Moderate or heavy showers of ice pellets',
    night: 'Moderate or heavy showers of ice pellets',
    dayIcon: 'extreme-hail.svg',
    nightIcon: 'extreme-hail.svg',
  },
  {
    code: 1273,
    day: 'Patchy light rain with thunder',
    night: 'Patchy light rain with thunder',
    dayIcon: 'thunderstorms-day-rain.svg',
    nightIcon: 'thunderstorms-night-rain.svg',
  },
  {
    code: 1276,
    day: 'Moderate or heavy rain with thunder',
    night: 'Moderate or heavy rain with thunder',
    dayIcon: 'thunderstorms-extreme-rain.svg',
    nightIcon: 'thunderstorms-extreme-rain.svg',
  },
  {
    code: 1279,
    day: 'Patchy light snow with thunder',
    night: 'Patchy light snow with thunder',
    dayIcon: 'thunderstorms-day-snow.svg',
    nightIcon: 'thunderstorms-night-snow.svg',
  },
  {
    code: 1282,
    day: 'Moderate or heavy snow with thunder',
    night: 'Moderate or heavy snow with thunder',
    dayIcon: 'thunderstorms-extreme-snow.svg',
    nightIcon: 'thunderstorms-extreme-snow.svg',
  },
];

export default weatherArray;
