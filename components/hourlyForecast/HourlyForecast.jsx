import { Text, View, Image } from "react-native";
import { s } from "./HourlyForecast.style.js";

export const HourlyForecast = (props) => {
  return (
    <View style={s.forecastBody}>
      <Image style={s.forecastIcon} source={props.icon} />
      <Text style={s.infoText}>{props.temp}°</Text>
      <Text style={s.dataText}>{props.day}</Text>
    </View>
  );
};
