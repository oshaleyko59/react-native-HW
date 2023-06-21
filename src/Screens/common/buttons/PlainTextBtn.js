import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

export default function PlainTextBtn({
	title,
	onPress,
	underlined = false,
	positioned = false,
}) {
	return (
		<TouchableOpacity onPress={onPress} >
			<Text
				style={[
					styles.secondaryBtnTitle,
					underlined && styles.underlined,
					positioned && styles.positionedRight,
				]}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}
//style={{height:27}}
