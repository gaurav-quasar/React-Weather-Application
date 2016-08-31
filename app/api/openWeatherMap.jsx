var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=082d9eaa75d92e93d30a06688d875cab&units=metric';

module.exports = {
  getTemp: function (city) {
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

    return axios.get(requestUrl).then(function (response) {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function (response) {
      throw new Error(response.data.message);
    });
  }
}
