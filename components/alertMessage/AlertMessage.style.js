import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "auto",
    height: 40,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "rgb(250, 231, 135)",
  },

  icon: {
    justifyContent: "start",
    width: "auto",
    paddingLeft: 15,
    paddingRight: 10,
  },

  labelContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    paddingRight: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
});
