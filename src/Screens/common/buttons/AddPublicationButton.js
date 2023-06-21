import { TouchableOpacity } from "react-native";
import { Plus } from "react-native-feather";

import { COLORS } from "../constants";
import { styles } from "../styles";

const addPublication = () => console.log('btn addPublication pressed');

export default function AddPublicationButton() {
	return (
		<TouchableOpacity
			style={[styles.plusBtn, styles.accented]}
			onPress={addPublication}
		>
			<Plus
				stroke={COLORS.secondaryText}
				fill={COLORS.mainBkg}
				width={20}
				height={20}
			/>
		</TouchableOpacity>
	);
}
