import { Text, View, Image, ScrollView } from "react-native";
import { s } from "./Home.style";
import { getWeatherInterpretation } from "../../utils/icon-interpretation.js";
import { time_converter, getDay } from "../../utils/datetime.js";
import { Ionicons } from "@expo/vector-icons";
import { DailyForecast } from "../../components/dailyForecast/DailyForecast";
import { HourlyForecast } from "../../components/hourlyForecast/HourlyForecast";
import { TodayMeteo } from "../../components/todayMeteo/TodayMeteo";
import { AlertMessage } from "../../components/alertMessage/AlertMessage";

function Home({ weather, forecast, alert, airQ }) {
  const currentInterpretation = getWeatherInterpretation(weather.weather[0].icon);
  const alertMessage = alert?.alerts?.alert[0]?.event || null;

  return (
    <View style={s.container}>
      <View style={s.now_info}>
        <View style={s.location}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={{ fontSize: 28, fontWeight: "light", paddingLeft: 5 }}>{weather.name}</Text>
        </View>
        <View style={s.now_info_weather}>
          <Text style={{ fontSize: 110, fontWeight: "bold" }}>{Math.round(weather.main.temp)}°</Text>
          <Image style={s.currentWeatherIcon} source={currentInterpretation.image} />
        </View>
        { alertMessage ? <AlertMessage label={alertMessage} /> : null}
      </View>



      //Info su condizioni meteo della giornata
      <View style={s.body_info}>
        <TodayMeteo
          min_temp={Math.round(forecast.daily[0].temp.min)}
          max_temp={Math.round(forecast.daily[0].temp.max)}
          humidity={forecast.daily[0].humidity}
          wind={forecast.daily[0].wind_speed}
        />
        //Previsioni Orarie
        <View style={s.forecast_orario}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Previsioni orarie</Text>
          </View>
          <ScrollView horizontal={true}>
            {forecast.hourly.slice(0, 8).map((hour, index) => (
              <HourlyForecast
                key={index}
                icon={getWeatherInterpretation(hour.weather[0].icon).image}
                temp={Math.round(hour.temp)}
                day={time_converter(hour.dt)}
              />
            ))}
          </ScrollView>
        </View>
        //Previsioni
        <View style={s.forecast}>
          <View style={s.forecastTitle}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Prossimi 5 giorni</Text>
          </View>

          <ScrollView horizontal={true} style={s.forecastBody}>
            {forecast.daily.slice(1, 6).map((day, index) => (
              <DailyForecast
                key={index}
                icon={getWeatherInterpretation(day.weather[0].icon).image}
                min_temp={Math.round(day.temp.min)}
                max_temp={Math.round(day.temp.max)}
                humidity={day.humidity}
                day={getDay(day.dt)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Home;
