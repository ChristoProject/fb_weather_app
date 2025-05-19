import axios from "axios";

export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    return (
      await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=<!! YOUR API KEY !!>&units=metric&lang=it`
      )
    ).data;
  }

  static async fetchForecast(coords) {
    return (
      await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=alerts,current,minutely&appid=<!! YOUR API KEY !!>=5&units=metric&lang=it`
      )
    ).data;
  }

  static async getAlerts(coords) {
    return (
      await axios.get(
        `https://api.weatherapi.com/v1/alerts.json?key=<!! YOUR API KEY !!>&q=${coords.lat},${coords.lon}&lang=it&alerts=yes`
      )
    ).data;
  }

  static async getAirQuality(coords) {
    return (
      await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=<!! YOUR API KEY !!>&q=${coords.lat},${coords.lon}&aqi=yes&lang=it`
      )
    )
  }
}
