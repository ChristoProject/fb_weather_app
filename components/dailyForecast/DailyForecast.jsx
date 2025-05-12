import { Text, View, Image } from "react-native";
import { s } from "./DailyForecast.style.js";

export const DailyForecast = (props) => {
  return (
    <View style={s.forecastBody}>
      <Image style={s.forecastIcon} source={props.icon} />
      <Text style={s.infoText}>{props.min_temp}</Text>
      <Text style={s.infoText}>{props.max_temp}</Text>
      <Text style={s.infoText}>{props.humidity}</Text>
      <Text style={s.dataText}>{props.day}</Text>
    </View>
  );
};
