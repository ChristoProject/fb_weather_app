import { Text, View, Image } from "react-native";
import { s } from "./TodayMeteo.style.js";

export const TodayMeteo = (props) => {
  return (
        <View style={s.card}>
          <View>
            <Text style={s.infoText}>Max</Text>
            <Text>{props.max_temp}°</Text>
          </View>
          <View>
            <Text style={s.infoText}>Min</Text>
            <Text>{props.min_temp}°</Text>
          </View>
          <View>
            <Text style={s.infoText}>Umidità</Text>
            <Text>{props.humidity}%</Text>
          </View>
          <View>
            <Text style={s.infoText}>Velocità del vento</Text>
            <Text>{props.wind} m/s</Text>
          </View>
        </View>
  )
};