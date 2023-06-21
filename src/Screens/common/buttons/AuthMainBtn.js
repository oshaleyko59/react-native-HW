import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

export default function AuthMainBtn({ title, onPress }) {
	return (
		<TouchableOpacity
			style={[styles.textBtn, styles.accented]}
			onPress={onPress}
		>
			<Text style={styles.btnTitle}>{title}</Text>
		</TouchableOpacity>
	);
}
//marginTop TODO:
