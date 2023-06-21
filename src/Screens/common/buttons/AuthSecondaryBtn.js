import { Text, TouchableOpacity, View } from "react-native";
import PlainTextBtn from "./PlainTextBtn";
import { styles } from "../styles";

export default function AuthSecondaryBtn({ title, hint, onPress }) {
	return (
		<View style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}>
			<Text style={styles.secondaryBtnTitle}>{hint}</Text>
			<PlainTextBtn title={title} onPress={onPress} underlined />
		</View>
	);
}
