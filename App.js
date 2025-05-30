import { SafeAreaView } from "react-native";
import { ImageBackground } from "react-native";
import { s } from "./App.style";
import backgroundImg from "./assets/background.png";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { MeteoAPI } from "./api/meteo";
import { NavMenu } from "./components/navMenu/NavMenu";

function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [alert, setAlert] = useState();
  const [airQ, setAirQ] = useState();

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
    }
  }, [coordinates]);

  useEffect(() => {
    if (coordinates) {
      fetchForecast(coordinates);
    }
  }, [coordinates]);

  useEffect(() => {
    if (coordinates) {
      getAlerts(coordinates);
    }
  }, [coordinates]);

  useEffect(() => {
    if (coordinates) {
      getAirQuality(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coordinates) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coordinates);
    setWeather(weatherResponse);
  }

  async function fetchForecast(coordinates) {
    const forecastResponse = await MeteoAPI.fetchForecast(coordinates);
    setForecast(forecastResponse);
  }

  async function getAlerts(coordinates) {
    const alertResponse = await MeteoAPI.getAlerts(coordinates);
    setAlert(alertResponse);
  }

  async function getAirQuality(coordinates) {
    const airQualityResponse = await MeteoAPI.getAirQuality(coordinates);
    setAirQ(airQualityResponse);
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    } else {
      console.log("Permission denied");
    }
  }

  console.log("Coordinate", coordinates);
  console.log("Dati meteo", weather);
  console.log("Previsioni", forecast);
  console.log("Alert", alert);
  console.log("AirQ", airQ);

  return (
    <ImageBackground source={backgroundImg} style={s.imgBG}>
      <SafeAreaView style={s.container}>
        {weather && forecast && alert && <Home weather={weather} forecast={forecast} alert={alert} airQ={airQ} />}
      </SafeAreaView>
    </ImageBackground>
  );
}

export default App;
