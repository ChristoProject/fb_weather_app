import { Text, View, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { s } from "./AirQuality.style"

export const AirQuality = () => {
    return (
        <View style={s.card}>
            <View style={s.icon}>
            <Ionicons name="warning-outline" size={24} color="black" />
            </View>
            <View style={s.labelContainer}>
            <Text style={s.label}></Text>
            </View>
        </View>
    )
}