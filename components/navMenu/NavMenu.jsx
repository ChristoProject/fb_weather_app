import { Text, View, Image } from "react-native";
import { s } from "./NavMenu.style";

export const NavMenu = () => {
  return (
    <View style={s.block}>
      <Text>Preferiti</Text>
      <Text>Cerca</Text>
      <Text>Altro</Text>
    </View>
  );
};
