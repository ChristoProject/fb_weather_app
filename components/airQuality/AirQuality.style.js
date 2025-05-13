import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    marginTop: 10,
    //borderWidth: 2,
    //borderColor: "#f5993d",
    borderRadius:10,
    backgroundColor: "rgb(250, 231, 135)",
  },

  icon: {
    justifyContent: "start",
    width: "auto",
    paddingLeft: 15,
    paddingRight: 15
  },

  labelContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
});
