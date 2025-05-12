import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingTop: 30,
  },

  now_info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 25,
    paddingLeft: 25,
  },

  location: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  now_info_weather: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  body_info: {
    flexDirection: "column",
  },

  forecastTitle: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },

  currentWeatherIcon: {
    width: 125,
    height: 125,
  },

  forecast_orario: {
    height: "auto",
    padding: 10,
    paddingLeft: 20,
    marginBottom: 15,
    flexDirection: "column",
    alignItems: "start",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
  },

  forecast: {
    height: "auto",
    padding: 10,
    paddingLeft: 20,
    flexDirection: "column",
    alignItems: "start",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
  },
});
