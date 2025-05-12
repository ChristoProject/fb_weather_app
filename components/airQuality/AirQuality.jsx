import { Text, View, Image } from "react-native";
import { s } from "./AirQuality.style"

export const AirQuality = (props) => {
    return (
        <View>
            <Text style={s.label}>Qualità dell'aria</Text>
        </View>
    )
}