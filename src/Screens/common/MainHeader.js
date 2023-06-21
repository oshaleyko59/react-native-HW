import {Text } from "react-native";
import { styles } from "./styles";

export default function MainHeader({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

