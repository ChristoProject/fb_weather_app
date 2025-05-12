import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
  forecastScroll: {
    flexDirection: "row",
  },

  forecastBody: {
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
  },

  forecastIcon: {
    width: 40,
    height: 40,
  },

  infoText: {
    fontSize: 14,
    fontWeight: "bold",
  },

  dataText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    paddingTop: 10,
  },
});
