// const fetch = require('node-fetch');

import fetch from 'node-fetch';

const cityName = process.argv[2];

const processWeatherData = (data) => {
  const foundData = data.find((stationData) => stationData.stacja === cityName);
  if (foundData === undefined) { //! foundData
    return console.log('Nie mamy pogody dla twojego miasta :(');
  }
  const {
    cisnienie: pressure,
    wilgotnosc_wzgledna: humidity,
    temperatura: temperature,
  } = foundData;
  const weatherInfo = `\nIn ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure}hPa.\n`;
  console.log(weatherInfo);
};

fetch('http://danepubliczne.imgw.pl/api/data/synop')
  .then((r) => r.json())
  .then(processWeatherData);
