import {
  View,
	StatusBar,
	ImageBackground,
} from "react-native";
import LoginForm from "./LoginForm";
import { bkgImage } from "../common/constants";
import { styles } from "../common/styles";

export default function LoginScreen() {
	return (
		<ImageBackground source={bkgImage} style={styles.imageBkg}>
			<View >
				<StatusBar
					animated={true}
					barStyle={"default"}
					showHideTransition={"slide"}
					hidden={false}
				/>
				<LoginForm />
			</View>
		</ImageBackground>
	);
}
//TODO: ?  SafeAreaView,
